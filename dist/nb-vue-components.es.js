import { computed as se, withDirectives as He, openBlock as C, createElementBlock as E, normalizeClass as X, vModelCheckbox as of, defineComponent as gr, watch as Vt, h as Ht, mergeModels as ru, ref as ee, useModel as Mp, onMounted as Je, createBlock as ae, unref as V, createCommentVNode as Y, createElementVNode as I, renderSlot as K, toDisplayString as Q, createVNode as we, Transition as fr, withCtx as ve, vModelSelect as Bp, Fragment as fe, createTextVNode as ye, vShow as qt, vModelText as jp, resolveDirective as zp, normalizeProps as Ge, guardReactiveProps as tt, renderList as Ke, resolveDynamicComponent as zo, mergeProps as jn, toHandlers as Up, withModifiers as zt, withKeys as Ir, normalizeStyle as In, shallowRef as Vp, markRaw as nu, reactive as ml, onUnmounted as Zn, toRefs as Hp, nextTick as qp, Teleport as Wp, isRef as Gp, pushScopeId as Yp, popScopeId as Kp, provide as Jp, inject as Xp } from "vue";
const Qp = ["value"], f4 = {
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
    const r = e, n = t, a = se({
      get() {
        return n.checked;
      },
      set(i) {
        r("update:checked", i);
      }
    });
    return (i, o) => He((C(), E("input", {
      type: "checkbox",
      value: t.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => a.value = s),
      class: X(["rounded border-gray-300 text-accent-600 shadow focus:ring-accent-500", { [t.customClass]: t.customClass }])
    }, null, 10, Qp)), [
      [of, a.value]
    ]);
  }
};
function au(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function U(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? au(Object(r), !0).forEach(function(n) {
      Ce(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : au(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function hi(t) {
  "@babel/helpers - typeof";
  return hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, hi(t);
}
function Zp(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function iu(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function eh(t, e, r) {
  return e && iu(t.prototype, e), r && iu(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function Ce(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function gl(t, e) {
  return rh(t) || ah(t, e) || sf(t, e) || oh();
}
function ea(t) {
  return th(t) || nh(t) || sf(t) || ih();
}
function th(t) {
  if (Array.isArray(t))
    return bs(t);
}
function rh(t) {
  if (Array.isArray(t))
    return t;
}
function nh(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function ah(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n = [], a = !0, i = !1, o, s;
    try {
      for (r = r.call(t); !(a = (o = r.next()).done) && (n.push(o.value), !(e && n.length === e)); a = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !a && r.return != null && r.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return n;
  }
}
function sf(t, e) {
  if (t) {
    if (typeof t == "string")
      return bs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return bs(t, e);
  }
}
function bs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function ih() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oh() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ou = function() {
}, yl = {}, lf = {}, uf = null, cf = {
  mark: ou,
  measure: ou
};
try {
  typeof window < "u" && (yl = window), typeof document < "u" && (lf = document), typeof MutationObserver < "u" && (uf = MutationObserver), typeof performance < "u" && (cf = performance);
} catch {
}
var sh = yl.navigator || {}, su = sh.userAgent, lu = su === void 0 ? "" : su, Wt = yl, me = lf, uu = uf, Ra = cf;
Wt.document;
var It = !!me.documentElement && !!me.head && typeof me.addEventListener == "function" && typeof me.createElement == "function", ff = ~lu.indexOf("MSIE") || ~lu.indexOf("Trident/"), La, Na, Fa, Ma, Ba, _t = "___FONT_AWESOME___", ws = 16, df = "fa", pf = "svg-inline--fa", hr = "data-fa-i2svg", xs = "data-fa-pseudo-element", lh = "data-fa-pseudo-element-pending", vl = "data-prefix", bl = "data-icon", cu = "fontawesome-i2svg", uh = "async", ch = ["HTML", "HEAD", "STYLE", "SCRIPT"], hf = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), pe = "classic", be = "sharp", wl = [pe, be];
function ta(t) {
  return new Proxy(t, {
    get: function(r, n) {
      return n in r ? r[n] : r[pe];
    }
  });
}
var zn = ta((La = {}, Ce(La, pe, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), Ce(La, be, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), La)), Un = ta((Na = {}, Ce(Na, pe, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), Ce(Na, be, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Na)), Vn = ta((Fa = {}, Ce(Fa, pe, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), Ce(Fa, be, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Fa)), fh = ta((Ma = {}, Ce(Ma, pe, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), Ce(Ma, be, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Ma)), dh = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, mf = "fa-layers-text", ph = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, hh = ta((Ba = {}, Ce(Ba, pe, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), Ce(Ba, be, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Ba)), gf = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], mh = gf.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), gh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], lr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Hn = /* @__PURE__ */ new Set();
Object.keys(Un[pe]).map(Hn.add.bind(Hn));
Object.keys(Un[be]).map(Hn.add.bind(Hn));
var yh = [].concat(wl, ea(Hn), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", lr.GROUP, lr.SWAP_OPACITY, lr.PRIMARY, lr.SECONDARY]).concat(gf.map(function(t) {
  return "".concat(t, "x");
})).concat(mh.map(function(t) {
  return "w-".concat(t);
})), Dn = Wt.FontAwesomeConfig || {};
function vh(t) {
  var e = me.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function bh(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (me && typeof me.querySelector == "function") {
  var wh = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  wh.forEach(function(t) {
    var e = gl(t, 2), r = e[0], n = e[1], a = bh(vh(r));
    a != null && (Dn[n] = a);
  });
}
var yf = {
  styleDefault: "solid",
  familyDefault: "classic",
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
Dn.familyPrefix && (Dn.cssPrefix = Dn.familyPrefix);
var Hr = U(U({}, yf), Dn);
Hr.autoReplaceSvg || (Hr.observeMutations = !1);
var q = {};
Object.keys(yf).forEach(function(t) {
  Object.defineProperty(q, t, {
    enumerable: !0,
    set: function(r) {
      Hr[t] = r, Rn.forEach(function(n) {
        return n(q);
      });
    },
    get: function() {
      return Hr[t];
    }
  });
});
Object.defineProperty(q, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Hr.cssPrefix = e, Rn.forEach(function(r) {
      return r(q);
    });
  },
  get: function() {
    return Hr.cssPrefix;
  }
});
Wt.FontAwesomeConfig = q;
var Rn = [];
function xh(t) {
  return Rn.push(t), function() {
    Rn.splice(Rn.indexOf(t), 1);
  };
}
var Ft = ws, mt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Sh(t) {
  if (!(!t || !It)) {
    var e = me.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var r = me.head.childNodes, n = null, a = r.length - 1; a > -1; a--) {
      var i = r[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (n = i);
    }
    return me.head.insertBefore(e, n), t;
  }
}
var Oh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function qn() {
  for (var t = 12, e = ""; t-- > 0; )
    e += Oh[Math.random() * 62 | 0];
  return e;
}
function Zr(t) {
  for (var e = [], r = (t || []).length >>> 0; r--; )
    e[r] = t[r];
  return e;
}
function xl(t) {
  return t.classList ? Zr(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function vf(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ah(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, '="').concat(vf(t[r]), '" ');
  }, "").trim();
}
function Di(t) {
  return Object.keys(t || {}).reduce(function(e, r) {
    return e + "".concat(r, ": ").concat(t[r].trim(), ";");
  }, "");
}
function Sl(t) {
  return t.size !== mt.size || t.x !== mt.x || t.y !== mt.y || t.rotate !== mt.rotate || t.flipX || t.flipY;
}
function Ch(t) {
  var e = t.transform, r = t.containerWidth, n = t.iconWidth, a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, i = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), o = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), u = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, c = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: c
  };
}
function Eh(t) {
  var e = t.transform, r = t.width, n = r === void 0 ? ws : r, a = t.height, i = a === void 0 ? ws : a, o = t.startCentered, s = o === void 0 ? !1 : o, u = "";
  return s && ff ? u += "translate(".concat(e.x / Ft - n / 2, "em, ").concat(e.y / Ft - i / 2, "em) ") : s ? u += "translate(calc(-50% + ".concat(e.x / Ft, "em), calc(-50% + ").concat(e.y / Ft, "em)) ") : u += "translate(".concat(e.x / Ft, "em, ").concat(e.y / Ft, "em) "), u += "scale(".concat(e.size / Ft * (e.flipX ? -1 : 1), ", ").concat(e.size / Ft * (e.flipY ? -1 : 1), ") "), u += "rotate(".concat(e.rotate, "deg) "), u;
}
var kh = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function bf() {
  var t = df, e = pf, r = q.cssPrefix, n = q.replacementClass, a = kh;
  if (r !== t || n !== e) {
    var i = new RegExp("\\.".concat(t, "\\-"), "g"), o = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    a = a.replace(i, ".".concat(r, "-")).replace(o, "--".concat(r, "-")).replace(s, ".".concat(n));
  }
  return a;
}
var fu = !1;
function Uo() {
  q.autoAddCss && !fu && (Sh(bf()), fu = !0);
}
var _h = {
  mixout: function() {
    return {
      dom: {
        css: bf,
        insertCss: Uo
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Uo();
      },
      beforeI2svg: function() {
        Uo();
      }
    };
  }
}, Pt = Wt || {};
Pt[_t] || (Pt[_t] = {});
Pt[_t].styles || (Pt[_t].styles = {});
Pt[_t].hooks || (Pt[_t].hooks = {});
Pt[_t].shims || (Pt[_t].shims = []);
var nt = Pt[_t], wf = [], Ph = function t() {
  me.removeEventListener("DOMContentLoaded", t), mi = 1, wf.map(function(e) {
    return e();
  });
}, mi = !1;
It && (mi = (me.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(me.readyState), mi || me.addEventListener("DOMContentLoaded", Ph));
function Th(t) {
  It && (mi ? setTimeout(t, 0) : wf.push(t));
}
function ra(t) {
  var e = t.tag, r = t.attributes, n = r === void 0 ? {} : r, a = t.children, i = a === void 0 ? [] : a;
  return typeof t == "string" ? vf(t) : "<".concat(e, " ").concat(Ah(n), ">").concat(i.map(ra).join(""), "</").concat(e, ">");
}
function du(t, e, r) {
  if (t && t[e] && t[e][r])
    return {
      prefix: e,
      iconName: r,
      icon: t[e][r]
    };
}
var $h = function(e, r) {
  return function(n, a, i, o) {
    return e.call(r, n, a, i, o);
  };
}, Vo = function(e, r, n, a) {
  var i = Object.keys(e), o = i.length, s = a !== void 0 ? $h(r, a) : r, u, c, f;
  for (n === void 0 ? (u = 1, f = e[i[0]]) : (u = 0, f = n); u < o; u++)
    c = i[u], f = s(f, e[c], c, e);
  return f;
};
function Ih(t) {
  for (var e = [], r = 0, n = t.length; r < n; ) {
    var a = t.charCodeAt(r++);
    if (a >= 55296 && a <= 56319 && r < n) {
      var i = t.charCodeAt(r++);
      (i & 64512) == 56320 ? e.push(((a & 1023) << 10) + (i & 1023) + 65536) : (e.push(a), r--);
    } else
      e.push(a);
  }
  return e;
}
function Ss(t) {
  var e = Ih(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function Dh(t, e) {
  var r = t.length, n = t.charCodeAt(e), a;
  return n >= 55296 && n <= 56319 && r > e + 1 && (a = t.charCodeAt(e + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function pu(t) {
  return Object.keys(t).reduce(function(e, r) {
    var n = t[r], a = !!n.icon;
    return a ? e[n.iconName] = n.icon : e[r] = n, e;
  }, {});
}
function Os(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = r.skipHooks, a = n === void 0 ? !1 : n, i = pu(e);
  typeof nt.hooks.addPack == "function" && !a ? nt.hooks.addPack(t, pu(e)) : nt.styles[t] = U(U({}, nt.styles[t] || {}), i), t === "fas" && Os("fa", e);
}
var ja, za, Ua, Mr = nt.styles, Rh = nt.shims, Lh = (ja = {}, Ce(ja, pe, Object.values(Vn[pe])), Ce(ja, be, Object.values(Vn[be])), ja), Ol = null, xf = {}, Sf = {}, Of = {}, Af = {}, Cf = {}, Nh = (za = {}, Ce(za, pe, Object.keys(zn[pe])), Ce(za, be, Object.keys(zn[be])), za);
function Fh(t) {
  return ~yh.indexOf(t);
}
function Mh(t, e) {
  var r = e.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === t && a !== "" && !Fh(a) ? a : null;
}
var Ef = function() {
  var e = function(i) {
    return Vo(Mr, function(o, s, u) {
      return o[u] = Vo(s, i, {}), o;
    }, {});
  };
  xf = e(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(u) {
        return typeof u == "number";
      });
      s.forEach(function(u) {
        a[u.toString(16)] = o;
      });
    }
    return a;
  }), Sf = e(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(u) {
        return typeof u == "string";
      });
      s.forEach(function(u) {
        a[u] = o;
      });
    }
    return a;
  }), Cf = e(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(u) {
      a[u] = o;
    }), a;
  });
  var r = "far" in Mr || q.autoFetchSvg, n = Vo(Rh, function(a, i) {
    var o = i[0], s = i[1], u = i[2];
    return s === "far" && !r && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: u
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: u
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Of = n.names, Af = n.unicodes, Ol = Ri(q.styleDefault, {
    family: q.familyDefault
  });
};
xh(function(t) {
  Ol = Ri(t.styleDefault, {
    family: q.familyDefault
  });
});
Ef();
function Al(t, e) {
  return (xf[t] || {})[e];
}
function Bh(t, e) {
  return (Sf[t] || {})[e];
}
function ur(t, e) {
  return (Cf[t] || {})[e];
}
function kf(t) {
  return Of[t] || {
    prefix: null,
    iconName: null
  };
}
function jh(t) {
  var e = Af[t], r = Al("fas", t);
  return e || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Gt() {
  return Ol;
}
var Cl = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ri(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.family, n = r === void 0 ? pe : r, a = zn[n][t], i = Un[n][t] || Un[n][a], o = t in nt.styles ? t : null;
  return i || o || null;
}
var hu = (Ua = {}, Ce(Ua, pe, Object.keys(Vn[pe])), Ce(Ua, be, Object.keys(Vn[be])), Ua);
function Li(t) {
  var e, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.skipLookups, a = n === void 0 ? !1 : n, i = (e = {}, Ce(e, pe, "".concat(q.cssPrefix, "-").concat(pe)), Ce(e, be, "".concat(q.cssPrefix, "-").concat(be)), e), o = null, s = pe;
  (t.includes(i[pe]) || t.some(function(c) {
    return hu[pe].includes(c);
  })) && (s = pe), (t.includes(i[be]) || t.some(function(c) {
    return hu[be].includes(c);
  })) && (s = be);
  var u = t.reduce(function(c, f) {
    var d = Mh(q.cssPrefix, f);
    if (Mr[f] ? (f = Lh[s].includes(f) ? fh[s][f] : f, o = f, c.prefix = f) : Nh[s].indexOf(f) > -1 ? (o = f, c.prefix = Ri(f, {
      family: s
    })) : d ? c.iconName = d : f !== q.replacementClass && f !== i[pe] && f !== i[be] && c.rest.push(f), !a && c.prefix && c.iconName) {
      var y = o === "fa" ? kf(c.iconName) : {}, A = ur(c.prefix, c.iconName);
      y.prefix && (o = null), c.iconName = y.iconName || A || c.iconName, c.prefix = y.prefix || c.prefix, c.prefix === "far" && !Mr.far && Mr.fas && !q.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Cl());
  return (t.includes("fa-brands") || t.includes("fab")) && (u.prefix = "fab"), (t.includes("fa-duotone") || t.includes("fad")) && (u.prefix = "fad"), !u.prefix && s === be && (Mr.fass || q.autoFetchSvg) && (u.prefix = "fass", u.iconName = ur(u.prefix, u.iconName) || u.iconName), (u.prefix === "fa" || o === "fa") && (u.prefix = Gt() || "fas"), u;
}
var zh = /* @__PURE__ */ function() {
  function t() {
    Zp(this, t), this.definitions = {};
  }
  return eh(t, [{
    key: "add",
    value: function() {
      for (var r = this, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        r.definitions[s] = U(U({}, r.definitions[s] || {}), o[s]), Os(s, o[s]);
        var u = Vn[pe][s];
        u && Os(u, o[s]), Ef();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(r, n) {
      var a = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(a).map(function(i) {
        var o = a[i], s = o.prefix, u = o.iconName, c = o.icon, f = c[2];
        r[s] || (r[s] = {}), f.length > 0 && f.forEach(function(d) {
          typeof d == "string" && (r[s][d] = c);
        }), r[s][u] = c;
      }), r;
    }
  }]), t;
}(), mu = [], Br = {}, zr = {}, Uh = Object.keys(zr);
function Vh(t, e) {
  var r = e.mixoutsTo;
  return mu = t, Br = {}, Object.keys(zr).forEach(function(n) {
    Uh.indexOf(n) === -1 && delete zr[n];
  }), mu.forEach(function(n) {
    var a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (r[o] = a[o]), hi(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        r[o] || (r[o] = {}), r[o][s] = a[o][s];
      });
    }), n.hooks) {
      var i = n.hooks();
      Object.keys(i).forEach(function(o) {
        Br[o] || (Br[o] = []), Br[o].push(i[o]);
      });
    }
    n.provides && n.provides(zr);
  }), r;
}
function As(t, e) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  var i = Br[t] || [];
  return i.forEach(function(o) {
    e = o.apply(null, [e].concat(n));
  }), e;
}
function mr(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var a = Br[t] || [];
  a.forEach(function(i) {
    i.apply(null, r);
  });
}
function Tt() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return zr[t] ? zr[t].apply(null, e) : void 0;
}
function Cs(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, r = t.prefix || Gt();
  if (e)
    return e = ur(r, e) || e, du(_f.definitions, r, e) || du(nt.styles, r, e);
}
var _f = new zh(), Hh = function() {
  q.autoReplaceSvg = !1, q.observeMutations = !1, mr("noAuto");
}, qh = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return It ? (mr("beforeI2svg", e), Tt("pseudoElements2svg", e), Tt("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot;
    q.autoReplaceSvg === !1 && (q.autoReplaceSvg = !0), q.observeMutations = !0, Th(function() {
      Gh({
        autoReplaceSvgRoot: r
      }), mr("watch", e);
    });
  }
}, Wh = {
  icon: function(e) {
    if (e === null)
      return null;
    if (hi(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: ur(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var r = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ri(e[0]);
      return {
        prefix: n,
        iconName: ur(n, r) || r
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(q.cssPrefix, "-")) > -1 || e.match(dh))) {
      var a = Li(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Gt(),
        iconName: ur(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof e == "string") {
      var i = Gt();
      return {
        prefix: i,
        iconName: ur(i, e) || e
      };
    }
  }
}, qe = {
  noAuto: Hh,
  config: q,
  dom: qh,
  parse: Wh,
  library: _f,
  findIconDefinition: Cs,
  toHtml: ra
}, Gh = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.autoReplaceSvgRoot, n = r === void 0 ? me : r;
  (Object.keys(nt.styles).length > 0 || q.autoFetchSvg) && It && q.autoReplaceSvg && qe.dom.i2svg({
    node: n
  });
};
function Ni(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(n) {
        return ra(n);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (It) {
        var n = me.createElement("div");
        return n.innerHTML = t.html, n.children;
      }
    }
  }), t;
}
function Yh(t) {
  var e = t.children, r = t.main, n = t.mask, a = t.attributes, i = t.styles, o = t.transform;
  if (Sl(o) && r.found && !n.found) {
    var s = r.width, u = r.height, c = {
      x: s / u / 2,
      y: 0.5
    };
    a.style = Di(U(U({}, i), {}, {
      "transform-origin": "".concat(c.x + o.x / 16, "em ").concat(c.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: e
  }];
}
function Kh(t) {
  var e = t.prefix, r = t.iconName, n = t.children, a = t.attributes, i = t.symbol, o = i === !0 ? "".concat(e, "-").concat(q.cssPrefix, "-").concat(r) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: U(U({}, a), {}, {
        id: o
      }),
      children: n
    }]
  }];
}
function El(t) {
  var e = t.icons, r = e.main, n = e.mask, a = t.prefix, i = t.iconName, o = t.transform, s = t.symbol, u = t.title, c = t.maskId, f = t.titleId, d = t.extra, y = t.watchable, A = y === void 0 ? !1 : y, m = n.found ? n : r, x = m.width, S = m.height, O = a === "fak", P = [q.replacementClass, i ? "".concat(q.cssPrefix, "-").concat(i) : ""].filter(function(B) {
    return d.classes.indexOf(B) === -1;
  }).filter(function(B) {
    return B !== "" || !!B;
  }).concat(d.classes).join(" "), _ = {
    children: [],
    attributes: U(U({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: P,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat(S)
    })
  }, T = O && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(x / S * 16 * 0.0625, "em")
  } : {};
  A && (_.attributes[hr] = ""), u && (_.children.push({
    tag: "title",
    attributes: {
      id: _.attributes["aria-labelledby"] || "title-".concat(f || qn())
    },
    children: [u]
  }), delete _.attributes.title);
  var L = U(U({}, _), {}, {
    prefix: a,
    iconName: i,
    main: r,
    mask: n,
    maskId: c,
    transform: o,
    symbol: s,
    styles: U(U({}, T), d.styles)
  }), R = n.found && r.found ? Tt("generateAbstractMask", L) || {
    children: [],
    attributes: {}
  } : Tt("generateAbstractIcon", L) || {
    children: [],
    attributes: {}
  }, M = R.children, j = R.attributes;
  return L.children = M, L.attributes = j, s ? Kh(L) : Yh(L);
}
function gu(t) {
  var e = t.content, r = t.width, n = t.height, a = t.transform, i = t.title, o = t.extra, s = t.watchable, u = s === void 0 ? !1 : s, c = U(U(U({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  u && (c[hr] = "");
  var f = U({}, o.styles);
  Sl(a) && (f.transform = Eh({
    transform: a,
    startCentered: !0,
    width: r,
    height: n
  }), f["-webkit-transform"] = f.transform);
  var d = Di(f);
  d.length > 0 && (c.style = d);
  var y = [];
  return y.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), i && y.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), y;
}
function Jh(t) {
  var e = t.content, r = t.title, n = t.extra, a = U(U(U({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), i = Di(n.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [e]
  }), r && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), o;
}
var Ho = nt.styles;
function Es(t) {
  var e = t[0], r = t[1], n = t.slice(4), a = gl(n, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(q.cssPrefix, "-").concat(lr.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(q.cssPrefix, "-").concat(lr.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(q.cssPrefix, "-").concat(lr.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: e,
    height: r,
    icon: o
  };
}
var Xh = {
  found: !1,
  width: 512,
  height: 512
};
function Qh(t, e) {
  !hf && !q.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function ks(t, e) {
  var r = e;
  return e === "fa" && q.styleDefault !== null && (e = Gt()), new Promise(function(n, a) {
    if (Tt("missingIconAbstract"), r === "fa") {
      var i = kf(t) || {};
      t = i.iconName || t, e = i.prefix || e;
    }
    if (t && e && Ho[e] && Ho[e][t]) {
      var o = Ho[e][t];
      return n(Es(o));
    }
    Qh(t, e), n(U(U({}, Xh), {}, {
      icon: q.showMissingIcons && t ? Tt("missingIconAbstract") || {} : {}
    }));
  });
}
var yu = function() {
}, _s = q.measurePerformance && Ra && Ra.mark && Ra.measure ? Ra : {
  mark: yu,
  measure: yu
}, Tn = 'FA "6.5.1"', Zh = function(e) {
  return _s.mark("".concat(Tn, " ").concat(e, " begins")), function() {
    return Pf(e);
  };
}, Pf = function(e) {
  _s.mark("".concat(Tn, " ").concat(e, " ends")), _s.measure("".concat(Tn, " ").concat(e), "".concat(Tn, " ").concat(e, " begins"), "".concat(Tn, " ").concat(e, " ends"));
}, kl = {
  begin: Zh,
  end: Pf
}, ai = function() {
};
function vu(t) {
  var e = t.getAttribute ? t.getAttribute(hr) : null;
  return typeof e == "string";
}
function em(t) {
  var e = t.getAttribute ? t.getAttribute(vl) : null, r = t.getAttribute ? t.getAttribute(bl) : null;
  return e && r;
}
function tm(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(q.replacementClass);
}
function rm() {
  if (q.autoReplaceSvg === !0)
    return ii.replace;
  var t = ii[q.autoReplaceSvg];
  return t || ii.replace;
}
function nm(t) {
  return me.createElementNS("http://www.w3.org/2000/svg", t);
}
function am(t) {
  return me.createElement(t);
}
function Tf(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.ceFn, n = r === void 0 ? t.tag === "svg" ? nm : am : r;
  if (typeof t == "string")
    return me.createTextNode(t);
  var a = n(t.tag);
  Object.keys(t.attributes || []).forEach(function(o) {
    a.setAttribute(o, t.attributes[o]);
  });
  var i = t.children || [];
  return i.forEach(function(o) {
    a.appendChild(Tf(o, {
      ceFn: n
    }));
  }), a;
}
function im(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var ii = {
  replace: function(e) {
    var r = e[0];
    if (r.parentNode)
      if (e[1].forEach(function(a) {
        r.parentNode.insertBefore(Tf(a), r);
      }), r.getAttribute(hr) === null && q.keepOriginalSource) {
        var n = me.createComment(im(r));
        r.parentNode.replaceChild(n, r);
      } else
        r.remove();
  },
  nest: function(e) {
    var r = e[0], n = e[1];
    if (~xl(r).indexOf(q.replacementClass))
      return ii.replace(e);
    var a = new RegExp("".concat(q.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var i = n[0].attributes.class.split(" ").reduce(function(s, u) {
        return u === q.replacementClass || u.match(a) ? s.toSvg.push(u) : s.toNode.push(u), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? r.removeAttribute("class") : r.setAttribute("class", i.toNode.join(" "));
    }
    var o = n.map(function(s) {
      return ra(s);
    }).join(`
`);
    r.setAttribute(hr, ""), r.innerHTML = o;
  }
};
function bu(t) {
  t();
}
function $f(t, e) {
  var r = typeof e == "function" ? e : ai;
  if (t.length === 0)
    r();
  else {
    var n = bu;
    q.mutateApproach === uh && (n = Wt.requestAnimationFrame || bu), n(function() {
      var a = rm(), i = kl.begin("mutate");
      t.map(a), i(), r();
    });
  }
}
var _l = !1;
function If() {
  _l = !0;
}
function Ps() {
  _l = !1;
}
var gi = null;
function wu(t) {
  if (uu && q.observeMutations) {
    var e = t.treeCallback, r = e === void 0 ? ai : e, n = t.nodeCallback, a = n === void 0 ? ai : n, i = t.pseudoElementsCallback, o = i === void 0 ? ai : i, s = t.observeMutationsRoot, u = s === void 0 ? me : s;
    gi = new uu(function(c) {
      if (!_l) {
        var f = Gt();
        Zr(c).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !vu(d.addedNodes[0]) && (q.searchPseudoElements && o(d.target), r(d.target)), d.type === "attributes" && d.target.parentNode && q.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && vu(d.target) && ~gh.indexOf(d.attributeName))
            if (d.attributeName === "class" && em(d.target)) {
              var y = Li(xl(d.target)), A = y.prefix, m = y.iconName;
              d.target.setAttribute(vl, A || f), m && d.target.setAttribute(bl, m);
            } else
              tm(d.target) && a(d.target);
        });
      }
    }), It && gi.observe(u, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function om() {
  gi && gi.disconnect();
}
function sm(t) {
  var e = t.getAttribute("style"), r = [];
  return e && (r = e.split(";").reduce(function(n, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (n[o] = s.join(":").trim()), n;
  }, {})), r;
}
function lm(t) {
  var e = t.getAttribute("data-prefix"), r = t.getAttribute("data-icon"), n = t.innerText !== void 0 ? t.innerText.trim() : "", a = Li(xl(t));
  return a.prefix || (a.prefix = Gt()), e && r && (a.prefix = e, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = Bh(a.prefix, t.innerText) || Al(a.prefix, Ss(t.innerText))), !a.iconName && q.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = t.firstChild.data)), a;
}
function um(t) {
  var e = Zr(t.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), r = t.getAttribute("title"), n = t.getAttribute("data-fa-title-id");
  return q.autoA11y && (r ? e["aria-labelledby"] = "".concat(q.replacementClass, "-title-").concat(n || qn()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function cm() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: mt,
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
function xu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, r = lm(t), n = r.iconName, a = r.prefix, i = r.rest, o = um(t), s = As("parseNodeAttributes", {}, t), u = e.styleParser ? sm(t) : [];
  return U({
    iconName: n,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: mt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: u,
      attributes: o
    }
  }, s);
}
var fm = nt.styles;
function Df(t) {
  var e = q.autoReplaceSvg === "nest" ? xu(t, {
    styleParser: !1
  }) : xu(t);
  return ~e.extra.classes.indexOf(mf) ? Tt("generateLayersText", t, e) : Tt("generateSvgReplacementMutation", t, e);
}
var Yt = /* @__PURE__ */ new Set();
wl.map(function(t) {
  Yt.add("fa-".concat(t));
});
Object.keys(zn[pe]).map(Yt.add.bind(Yt));
Object.keys(zn[be]).map(Yt.add.bind(Yt));
Yt = ea(Yt);
function Su(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!It)
    return Promise.resolve();
  var r = me.documentElement.classList, n = function(d) {
    return r.add("".concat(cu, "-").concat(d));
  }, a = function(d) {
    return r.remove("".concat(cu, "-").concat(d));
  }, i = q.autoFetchSvg ? Yt : wl.map(function(f) {
    return "fa-".concat(f);
  }).concat(Object.keys(fm));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(mf, ":not([").concat(hr, "])")].concat(i.map(function(f) {
    return ".".concat(f, ":not([").concat(hr, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Zr(t.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  var u = kl.begin("onTree"), c = s.reduce(function(f, d) {
    try {
      var y = Df(d);
      y && f.push(y);
    } catch (A) {
      hf || A.name === "MissingIcon" && console.error(A);
    }
    return f;
  }, []);
  return new Promise(function(f, d) {
    Promise.all(c).then(function(y) {
      $f(y, function() {
        n("active"), n("complete"), a("pending"), typeof e == "function" && e(), u(), f();
      });
    }).catch(function(y) {
      u(), d(y);
    });
  });
}
function dm(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Df(t).then(function(r) {
    r && $f([r], e);
  });
}
function pm(t) {
  return function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (e || {}).icon ? e : Cs(e || {}), a = r.mask;
    return a && (a = (a || {}).icon ? a : Cs(a || {})), t(n, U(U({}, r), {}, {
      mask: a
    }));
  };
}
var hm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.transform, a = n === void 0 ? mt : n, i = r.symbol, o = i === void 0 ? !1 : i, s = r.mask, u = s === void 0 ? null : s, c = r.maskId, f = c === void 0 ? null : c, d = r.title, y = d === void 0 ? null : d, A = r.titleId, m = A === void 0 ? null : A, x = r.classes, S = x === void 0 ? [] : x, O = r.attributes, P = O === void 0 ? {} : O, _ = r.styles, T = _ === void 0 ? {} : _;
  if (e) {
    var L = e.prefix, R = e.iconName, M = e.icon;
    return Ni(U({
      type: "icon"
    }, e), function() {
      return mr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: r
      }), q.autoA11y && (y ? P["aria-labelledby"] = "".concat(q.replacementClass, "-title-").concat(m || qn()) : (P["aria-hidden"] = "true", P.focusable = "false")), El({
        icons: {
          main: Es(M),
          mask: u ? Es(u.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: L,
        iconName: R,
        transform: U(U({}, mt), a),
        symbol: o,
        title: y,
        maskId: f,
        titleId: m,
        extra: {
          attributes: P,
          styles: T,
          classes: S
        }
      });
    });
  }
}, mm = {
  mixout: function() {
    return {
      icon: pm(hm)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.treeCallback = Su, r.nodeCallback = dm, r;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(r) {
      var n = r.node, a = n === void 0 ? me : n, i = r.callback, o = i === void 0 ? function() {
      } : i;
      return Su(a, o);
    }, e.generateSvgReplacementMutation = function(r, n) {
      var a = n.iconName, i = n.title, o = n.titleId, s = n.prefix, u = n.transform, c = n.symbol, f = n.mask, d = n.maskId, y = n.extra;
      return new Promise(function(A, m) {
        Promise.all([ks(a, s), f.iconName ? ks(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(x) {
          var S = gl(x, 2), O = S[0], P = S[1];
          A([r, El({
            icons: {
              main: O,
              mask: P
            },
            prefix: s,
            iconName: a,
            transform: u,
            symbol: c,
            maskId: d,
            title: i,
            titleId: o,
            extra: y,
            watchable: !0
          })]);
        }).catch(m);
      });
    }, e.generateAbstractIcon = function(r) {
      var n = r.children, a = r.attributes, i = r.main, o = r.transform, s = r.styles, u = Di(s);
      u.length > 0 && (a.style = u);
      var c;
      return Sl(o) && (c = Tt("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(c || i.icon), {
        children: n,
        attributes: a
      };
    };
  }
}, gm = {
  mixout: function() {
    return {
      layer: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.classes, i = a === void 0 ? [] : a;
        return Ni({
          type: "layer"
        }, function() {
          mr("beforeDOMElementCreation", {
            assembler: r,
            params: n
          });
          var o = [];
          return r(function(s) {
            Array.isArray(s) ? s.map(function(u) {
              o = o.concat(u.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(q.cssPrefix, "-layers")].concat(ea(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, ym = {
  mixout: function() {
    return {
      counter: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.title, i = a === void 0 ? null : a, o = n.classes, s = o === void 0 ? [] : o, u = n.attributes, c = u === void 0 ? {} : u, f = n.styles, d = f === void 0 ? {} : f;
        return Ni({
          type: "counter",
          content: r
        }, function() {
          return mr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), Jh({
            content: r.toString(),
            title: i,
            extra: {
              attributes: c,
              styles: d,
              classes: ["".concat(q.cssPrefix, "-layers-counter")].concat(ea(s))
            }
          });
        });
      }
    };
  }
}, vm = {
  mixout: function() {
    return {
      text: function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, i = a === void 0 ? mt : a, o = n.title, s = o === void 0 ? null : o, u = n.classes, c = u === void 0 ? [] : u, f = n.attributes, d = f === void 0 ? {} : f, y = n.styles, A = y === void 0 ? {} : y;
        return Ni({
          type: "text",
          content: r
        }, function() {
          return mr("beforeDOMElementCreation", {
            content: r,
            params: n
          }), gu({
            content: r,
            transform: U(U({}, mt), i),
            title: s,
            extra: {
              attributes: d,
              styles: A,
              classes: ["".concat(q.cssPrefix, "-layers-text")].concat(ea(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(r, n) {
      var a = n.title, i = n.transform, o = n.extra, s = null, u = null;
      if (ff) {
        var c = parseInt(getComputedStyle(r).fontSize, 10), f = r.getBoundingClientRect();
        s = f.width / c, u = f.height / c;
      }
      return q.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([r, gu({
        content: r.innerHTML,
        width: s,
        height: u,
        transform: i,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, bm = new RegExp('"', "ug"), Ou = [1105920, 1112319];
function wm(t) {
  var e = t.replace(bm, ""), r = Dh(e, 0), n = r >= Ou[0] && r <= Ou[1], a = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: Ss(a ? e[0] : e),
    isSecondary: n || a
  };
}
function Au(t, e) {
  var r = "".concat(lh).concat(e.replace(":", "-"));
  return new Promise(function(n, a) {
    if (t.getAttribute(r) !== null)
      return n();
    var i = Zr(t.children), o = i.filter(function(M) {
      return M.getAttribute(xs) === e;
    })[0], s = Wt.getComputedStyle(t, e), u = s.getPropertyValue("font-family").match(ph), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (o && !u)
      return t.removeChild(o), n();
    if (u && f !== "none" && f !== "") {
      var d = s.getPropertyValue("content"), y = ~["Sharp"].indexOf(u[2]) ? be : pe, A = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(u[2]) ? Un[y][u[2].toLowerCase()] : hh[y][c], m = wm(d), x = m.value, S = m.isSecondary, O = u[0].startsWith("FontAwesome"), P = Al(A, x), _ = P;
      if (O) {
        var T = jh(x);
        T.iconName && T.prefix && (P = T.iconName, A = T.prefix);
      }
      if (P && !S && (!o || o.getAttribute(vl) !== A || o.getAttribute(bl) !== _)) {
        t.setAttribute(r, _), o && t.removeChild(o);
        var L = cm(), R = L.extra;
        R.attributes[xs] = e, ks(P, A).then(function(M) {
          var j = El(U(U({}, L), {}, {
            icons: {
              main: M,
              mask: Cl()
            },
            prefix: A,
            iconName: _,
            extra: R,
            watchable: !0
          })), B = me.createElementNS("http://www.w3.org/2000/svg", "svg");
          e === "::before" ? t.insertBefore(B, t.firstChild) : t.appendChild(B), B.outerHTML = j.map(function(D) {
            return ra(D);
          }).join(`
`), t.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function xm(t) {
  return Promise.all([Au(t, "::before"), Au(t, "::after")]);
}
function Sm(t) {
  return t.parentNode !== document.head && !~ch.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(xs) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function Cu(t) {
  if (It)
    return new Promise(function(e, r) {
      var n = Zr(t.querySelectorAll("*")).filter(Sm).map(xm), a = kl.begin("searchPseudoElements");
      If(), Promise.all(n).then(function() {
        a(), Ps(), e();
      }).catch(function() {
        a(), Ps(), r();
      });
    });
}
var Om = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(r) {
        return r.pseudoElementsCallback = Cu, r;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(r) {
      var n = r.node, a = n === void 0 ? me : n;
      q.searchPseudoElements && Cu(a);
    };
  }
}, Eu = !1, Am = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          If(), Eu = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        wu(As("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        om();
      },
      watch: function(r) {
        var n = r.observeMutationsRoot;
        Eu ? Ps() : wu(As("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, ku = function(e) {
  var r = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(n, a) {
    var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return n.flipX = !0, n;
    if (o && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, r);
}, Cm = {
  mixout: function() {
    return {
      parse: {
        transform: function(r) {
          return ku(r);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-transform");
        return a && (r.transform = ku(a)), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(r) {
      var n = r.main, a = r.transform, i = r.containerWidth, o = r.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, u = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), c = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), f = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(u, " ").concat(c, " ").concat(f)
      }, y = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, A = {
        outer: s,
        inner: d,
        path: y
      };
      return {
        tag: "g",
        attributes: U({}, A.outer),
        children: [{
          tag: "g",
          attributes: U({}, A.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: U(U({}, n.icon.attributes), A.path)
          }]
        }]
      };
    };
  }
}, qo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function _u(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function Em(t) {
  return t.tag === "g" ? t.children : [t];
}
var km = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-mask"), i = a ? Li(a.split(" ").map(function(o) {
          return o.trim();
        })) : Cl();
        return i.prefix || (i.prefix = Gt()), r.mask = i, r.maskId = n.getAttribute("data-fa-mask-id"), r;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(r) {
      var n = r.children, a = r.attributes, i = r.main, o = r.mask, s = r.maskId, u = r.transform, c = i.width, f = i.icon, d = o.width, y = o.icon, A = Ch({
        transform: u,
        containerWidth: d,
        iconWidth: c
      }), m = {
        tag: "rect",
        attributes: U(U({}, qo), {}, {
          fill: "white"
        })
      }, x = f.children ? {
        children: f.children.map(_u)
      } : {}, S = {
        tag: "g",
        attributes: U({}, A.inner),
        children: [_u(U({
          tag: f.tag,
          attributes: U(U({}, f.attributes), A.path)
        }, x))]
      }, O = {
        tag: "g",
        attributes: U({}, A.outer),
        children: [S]
      }, P = "mask-".concat(s || qn()), _ = "clip-".concat(s || qn()), T = {
        tag: "mask",
        attributes: U(U({}, qo), {}, {
          id: P,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, O]
      }, L = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: Em(y)
        }, T]
      };
      return n.push(L, {
        tag: "rect",
        attributes: U({
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(P, ")")
        }, qo)
      }), {
        children: n,
        attributes: a
      };
    };
  }
}, _m = {
  provides: function(e) {
    var r = !1;
    Wt.matchMedia && (r = Wt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var n = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: U(U({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = U(U({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: U(U({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return r || s.children.push({
        tag: "animate",
        attributes: U(U({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: U(U({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: U(U({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: r ? [] : [{
          tag: "animate",
          attributes: U(U({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), r || n.push({
        tag: "path",
        attributes: U(U({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: U(U({}, o), {}, {
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
}, Pm = {
  hooks: function() {
    return {
      parseNodeAttributes: function(r, n) {
        var a = n.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return r.symbol = i, r;
      }
    };
  }
}, Tm = [_h, mm, gm, ym, vm, Om, Am, Cm, km, _m, Pm];
Vh(Tm, {
  mixoutsTo: qe
});
qe.noAuto;
var Rf = qe.config, na = qe.library;
qe.dom;
var yi = qe.parse;
qe.findIconDefinition;
qe.toHtml;
var $m = qe.icon;
qe.layer;
var Im = qe.text;
qe.counter;
function Pu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pu(Object(r), !0).forEach(function(n) {
      Me(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Pu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function vi(t) {
  "@babel/helpers - typeof";
  return vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, vi(t);
}
function Me(t, e, r) {
  return e = jm(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Dm(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Rm(t, e) {
  if (t == null)
    return {};
  var r = Dm(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Ts(t) {
  return Lm(t) || Nm(t) || Fm(t) || Mm();
}
function Lm(t) {
  if (Array.isArray(t))
    return $s(t);
}
function Nm(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Fm(t, e) {
  if (t) {
    if (typeof t == "string")
      return $s(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $s(t, e);
  }
}
function $s(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Mm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bm(t, e) {
  if (typeof t != "object" || t === null)
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
function jm(t) {
  var e = Bm(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var zm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Lf = { exports: {} };
(function(t) {
  (function(e) {
    var r = function(O, P, _) {
      if (!c(P) || d(P) || y(P) || A(P) || u(P))
        return P;
      var T, L = 0, R = 0;
      if (f(P))
        for (T = [], R = P.length; L < R; L++)
          T.push(r(O, P[L], _));
      else {
        T = {};
        for (var M in P)
          Object.prototype.hasOwnProperty.call(P, M) && (T[O(M, _)] = r(O, P[M], _));
      }
      return T;
    }, n = function(O, P) {
      P = P || {};
      var _ = P.separator || "_", T = P.split || /(?=[A-Z])/;
      return O.split(T).join(_);
    }, a = function(O) {
      return m(O) ? O : (O = O.replace(/[\-_\s]+(.)?/g, function(P, _) {
        return _ ? _.toUpperCase() : "";
      }), O.substr(0, 1).toLowerCase() + O.substr(1));
    }, i = function(O) {
      var P = a(O);
      return P.substr(0, 1).toUpperCase() + P.substr(1);
    }, o = function(O, P) {
      return n(O, P).toLowerCase();
    }, s = Object.prototype.toString, u = function(O) {
      return typeof O == "function";
    }, c = function(O) {
      return O === Object(O);
    }, f = function(O) {
      return s.call(O) == "[object Array]";
    }, d = function(O) {
      return s.call(O) == "[object Date]";
    }, y = function(O) {
      return s.call(O) == "[object RegExp]";
    }, A = function(O) {
      return s.call(O) == "[object Boolean]";
    }, m = function(O) {
      return O = O - 0, O === O;
    }, x = function(O, P) {
      var _ = P && "process" in P ? P.process : P;
      return typeof _ != "function" ? O : function(T, L) {
        return _(T, O, L);
      };
    }, S = {
      camelize: a,
      decamelize: o,
      pascalize: i,
      depascalize: o,
      camelizeKeys: function(O, P) {
        return r(x(a, P), O);
      },
      decamelizeKeys: function(O, P) {
        return r(x(o, P), O, P);
      },
      pascalizeKeys: function(O, P) {
        return r(x(i, P), O);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = S : e.humps = S;
  })(zm);
})(Lf);
var Um = Lf.exports, Vm = ["class", "style"];
function Hm(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, r) {
    var n = r.indexOf(":"), a = Um.camelize(r.slice(0, n)), i = r.slice(n + 1).trim();
    return e[a] = i, e;
  }, {});
}
function qm(t) {
  return t.split(/\s+/).reduce(function(e, r) {
    return e[r] = !0, e;
  }, {});
}
function Pl(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var n = (t.children || []).map(function(u) {
    return Pl(u);
  }), a = Object.keys(t.attributes || {}).reduce(function(u, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        u.class = qm(f);
        break;
      case "style":
        u.style = Hm(f);
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
  var i = r.style, o = i === void 0 ? {} : i, s = Rm(r, Vm);
  return Ht(t.tag, rt(rt(rt({}, e), {}, {
    class: a.class,
    style: rt(rt({}, a.style), o)
  }, a.attrs), s), n);
}
var Nf = !1;
try {
  Nf = process.env.NODE_ENV === "production";
} catch {
}
function Wm() {
  if (!Nf && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Ln(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Me({}, t, e) : {};
}
function Gm(t) {
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
  }, Me(e, "fa-".concat(t.size), t.size !== null), Me(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), Me(e, "fa-pull-".concat(t.pull), t.pull !== null), Me(e, "fa-swap-opacity", t.swapOpacity), Me(e, "fa-bounce", t.bounce), Me(e, "fa-shake", t.shake), Me(e, "fa-beat", t.beat), Me(e, "fa-fade", t.fade), Me(e, "fa-beat-fade", t.beatFade), Me(e, "fa-flash", t.flash), Me(e, "fa-spin-pulse", t.spinPulse), Me(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function Tu(t) {
  if (t && vi(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (yi.icon)
    return yi.icon(t);
  if (t === null)
    return null;
  if (vi(t) === "object" && t.prefix && t.iconName)
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
var ht = gr({
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
    var n = r.attrs, a = se(function() {
      return Tu(e.icon);
    }), i = se(function() {
      return Ln("classes", Gm(e));
    }), o = se(function() {
      return Ln("transform", typeof e.transform == "string" ? yi.transform(e.transform) : e.transform);
    }), s = se(function() {
      return Ln("mask", Tu(e.mask));
    }), u = se(function() {
      return $m(a.value, rt(rt(rt(rt({}, i.value), o.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title,
        titleId: e.titleId,
        maskId: e.maskId
      }));
    });
    Vt(u, function(f) {
      if (!f)
        return Wm("Could not find one or more icon(s)", a.value, s.value);
    }, {
      immediate: !0
    });
    var c = se(function() {
      return u.value ? Pl(u.value.abstract[0], {}, n) : null;
    });
    return function() {
      return c.value;
    };
  }
});
gr({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, r) {
    var n = r.slots, a = Rf.familyPrefix, i = se(function() {
      return ["".concat(a, "-layers")].concat(Ts(e.fixedWidth ? ["".concat(a, "-fw")] : []));
    });
    return function() {
      return Ht("div", {
        class: i.value
      }, n.default ? n.default() : []);
    };
  }
});
gr({
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
    var n = r.attrs, a = Rf.familyPrefix, i = se(function() {
      return Ln("classes", [].concat(Ts(e.counter ? ["".concat(a, "-layers-counter")] : []), Ts(e.position ? ["".concat(a, "-layers-").concat(e.position)] : [])));
    }), o = se(function() {
      return Ln("transform", typeof e.transform == "string" ? yi.transform(e.transform) : e.transform);
    }), s = se(function() {
      var c = Im(e.value.toString(), rt(rt({}, o.value), i.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), u = se(function() {
      return Pl(s.value, {}, n);
    });
    return function() {
      return u.value;
    };
  }
});
var Ym = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, Is = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Km = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32H480c17.7 0 32 14.3 32 32V96c0 17.7-14.3 32-32 32H32C14.3 128 0 113.7 0 96V64C0 46.3 14.3 32 32 32zm0 128H480V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V160zm128 80c0 8.8 7.2 16 16 16H336c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]
}, $u = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, Jm = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Iu = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, Du = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, Xm = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Qm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
}, Zm = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, eg = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]
}, tg = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"]
}, Ff = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
};
const en = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, rg = { class: "relative flex w-full max-w-full items-stretch" }, ng = {
  key: 0,
  class: "flex items-center"
}, ag = {
  key: 1,
  class: "mr-1"
}, ig = ["id", "disabled", "required", "name"], og = { key: 5 }, sg = ["required", "disabled", "name"], lg = {
  key: 0,
  class: "border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
}, ug = ["href"], cg = {
  __name: "Input",
  props: /* @__PURE__ */ ru({
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
  emits: /* @__PURE__ */ ru(["changed"], ["update:modelValue"]),
  setup(t, { expose: e, emit: r }) {
    na.add(Ff, Jm, tg, Du, Iu);
    const n = t;
    function a(x) {
      let S = [];
      return x.split("_").join(" ").split(" ").map(function(O) {
        S.push(O[0].toUpperCase() + O.slice(1));
      }), S.join(" ");
    }
    const i = r, o = ee(!1), s = Mp(t, "modelValue"), u = ee(), c = ee(), f = ee(n.type);
    Je(() => {
      o.value = !n.form, u.value = o.value ? s.value : n.form[n.field];
    }), Vt(
      () => u.value,
      (x, S) => {
        if (x !== S) {
          if (o.value ? s.value = x : n.form[n.field] = x, c.value = S, i("update:modelValue", x), d.value) {
            d.value = !1;
            return;
          }
          i("changed", { value: x, old_value: S });
        }
      }
    );
    const d = ee(!1), y = (x) => {
      u.value = x, d.value = !0;
    }, A = () => c.value;
    Vt(
      () => n.field ? n.form[n.field] : null,
      (x) => {
        u.value = o.value ? s.value : x;
      },
      {
        deep: !0
      }
    ), Vt(
      () => s.value,
      (x) => {
        u.value = x;
      }
    );
    const m = () => {
      f.value = f.value === "password" ? "text" : "password";
    };
    return e({
      togglePassword: m,
      setValueSilently: y,
      getPreviousValue: A
    }), (x, S) => {
      var O, P, _, T, L, R, M, j;
      return C(), E("div", {
        class: X(t.noLabel ? "mb-2" : "mb-4")
      }, [
        t.noLabel ? Y("", !0) : (C(), ae(V(Tl), {
          key: 0,
          customClass: t.labelCustomClass,
          for: t.field,
          value: t.label ? t.label : t.field ? a(t.field) : "",
          sublabel: t.sublabel,
          required: t.required
        }, null, 8, ["customClass", "for", "value", "sublabel", "required"])),
        I("div", rg, [
          t.type === "switch" || t.type === "checkbox" ? (C(), E("label", ng, [
            (O = x.$slots) != null && O.leftDescription ? K(x.$slots, "leftDescription", { key: 0 }, void 0, !0) : t.leftDescription ? (C(), E("span", ag, Q(t.leftDescription ? t.leftDescription : "Disable"), 1)) : Y("", !0),
            He(I("input", {
              id: t.field,
              type: "checkbox",
              class: "hidden",
              "onUpdate:modelValue": S[0] || (S[0] = (B) => u.value = B),
              disabled: n.disabled,
              required: n.required,
              name: t.name ?? t.field
            }, null, 8, ig), [
              [of, u.value]
            ]),
            t.type === "switch" ? (C(), E("div", {
              key: 2,
              tabindex: "0",
              class: X(["toggle-switch focusable !ml-0", {
                checked: u.value,
                disabled: n.disabled
              }])
            }, null, 2)) : (C(), E("div", {
              key: 3,
              tabindex: "0",
              class: X(["focusable mr-1 p-1 text-primary", {
                "!text-gray-500": n.disabled,
                [t.checkboxCustomClass]: t.checkboxCustomClass
              }])
            }, [
              we(fr, {
                name: "popup",
                mode: "out-in"
              }, {
                default: ve(() => [
                  n.form[t.field] ? (C(), ae(V(ht), {
                    key: "checked",
                    icon: "fas fa-square-check"
                  })) : (C(), ae(V(ht), {
                    key: "unchecked",
                    icon: "far fa-square"
                  }))
                ]),
                _: 1
              })
            ], 2)),
            (P = x.$slots) != null && P.rightDescription ? K(x.$slots, "rightDescription", { key: 4 }, void 0, !0) : t.rightDescription ? (C(), E("span", og, Q(t.rightDescription), 1)) : Y("", !0)
          ])) : t.type === "select" ? He((C(), E("select", {
            key: 1,
            "onUpdate:modelValue": S[1] || (S[1] = (B) => u.value = B),
            required: n.required,
            disabled: n.disabled,
            name: t.name ?? t.field,
            class: "focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
          }, [
            K(x.$slots, "default", {}, void 0, !0)
          ], 8, sg)), [
            [Bp, u.value]
          ]) : (C(), E(fe, { key: 2 }, [
            t.addon ? (C(), E("span", lg, Q(t.addon), 1)) : Y("", !0),
            we(V(vg), {
              id: t.field,
              type: f.value,
              class: X(["focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "!rounded-l-none": t.addon,
                "!rounded-r-none": !!t.submitBtn || t.whatsApp || ((_ = x.$slots) == null ? void 0 : _.submit),
                [t.inputCustomClass]: !!t.inputCustomClass
              }]),
              modelValue: u.value,
              "onUpdate:modelValue": S[2] || (S[2] = (B) => u.value = B),
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
            t.form ? (C(), E(fe, { key: 1 }, [
              t.submitBtn ? (C(), ae(V(Ic), {
                key: 0,
                form: t.form,
                class: X(["z-[2] inline-block rounded-l-none", t.buttonCustomClass]),
                id: `submit-button-${t.field}`
              }, {
                default: ve(() => [
                  ye(Q(t.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (T = x.$slots) != null && T.submit ? (C(), ae(V(Ic), {
                key: 1,
                form: t.form,
                class: X(["z-[2] inline-block rounded-l-none", t.buttonCustomClass]),
                id: "button-input"
              }, {
                default: ve(() => [
                  K(x.$slots, "submit", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            t.whatsApp ? (C(), E("a", {
              key: 2,
              class: X(["z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg", t.buttonCustomClass]),
              href: t.whatsApp,
              target: "_blank"
            }, [
              we(V(ht), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, ug)) : Y("", !0),
            t.type == "password" && !t.hidePasswordToggler ? (C(), E("div", {
              key: 3,
              onClick: m,
              class: "absolute right-0 top-0 z-[2] flex h-full w-11 cursor-pointer items-center justify-center rounded-r bg-gray-300 text-xs font-medium leading-normal text-white"
            }, [
              f.value === "password" ? (C(), ae(V(ht), {
                key: 0,
                icon: V(Du),
                size: "2xl"
              }, null, 8, ["icon"])) : (C(), ae(V(ht), {
                key: 1,
                icon: V(Iu),
                size: "2xl"
              }, null, 8, ["icon"]))
            ])) : Y("", !0)
          ], 64))
        ]),
        t.error || (R = (L = t.form) == null ? void 0 : L.errors) != null && R[t.field] ? (C(), ae(V(aa), {
          key: 1,
          message: t.error ? t.error : (j = (M = t.form) == null ? void 0 : M.errors) == null ? void 0 : j[t.field],
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
}, fg = /* @__PURE__ */ en(cg, [["__scopeId", "data-v-61185f80"]]), dg = { class: "text-sm text-red-600" }, aa = {
  __name: "InputError",
  props: ["message"],
  setup(t) {
    return (e, r) => He((C(), E("div", null, [
      I("p", dg, Q(t.message), 1)
    ], 512)), [
      [qt, t.message]
    ]);
  }
}, pg = { key: 0 }, hg = { key: 1 }, mg = {
  key: 2,
  class: "ml-2 text-xs text-gray-500"
}, gg = {
  key: 3,
  class: "ml-1 text-red-500"
}, Tl = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass"],
  setup(t) {
    return (e, r) => (C(), E("label", {
      class: X(["mb-1 block text-sm font-medium text-gray-700", t.customClass])
    }, [
      t.value ? (C(), E("span", pg, Q(t.value), 1)) : (C(), E("span", hg, [
        K(e.$slots, "default")
      ])),
      t.sublabel ? (C(), E("span", mg, Q(t.sublabel), 1)) : Y("", !0),
      t.required ? (C(), E("span", gg, "*")) : Y("", !0)
    ], 2));
  }
}, yg = ["value"], vg = {
  __name: "TextInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(t, { expose: e }) {
    const r = ee(null);
    return Je(() => {
      r.value.hasAttribute("autofocus") && r.value.focus();
    }), e({ focus: () => r.value.focus() }), (n, a) => (C(), E("input", {
      class: "max-w-full rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500",
      value: t.modelValue,
      onInput: a[0] || (a[0] = (i) => n.$emit("update:modelValue", i.target.value)),
      ref_key: "input",
      ref: r
    }, null, 40, yg));
  }
}, bg = { class: "relative mb-4 flex w-full flex-wrap items-stretch" }, wg = ["id", "required", "disabled", "autocomplete", "placeholder", "autofocus", "rows"], d4 = {
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
      let a = [];
      return n.split("_").join(" ").split(" ").map(function(i) {
        a.push(i[0].toUpperCase() + i.slice(1));
      }), a.join(" ");
    }
    return (n, a) => (C(), E("div", null, [
      t.noLabel ? Y("", !0) : (C(), ae(V(Tl), {
        key: 0,
        for: t.field,
        value: t.label ? t.label : r(t.field),
        required: t.required
      }, null, 8, ["for", "value", "required"])),
      I("div", bg, [
        He(I("textarea", {
          id: t.field,
          class: "relative m-0 block flex-auto rounded border-gray-300 shadow focus:border-accent-500 focus:ring-accent-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
          "onUpdate:modelValue": a[0] || (a[0] = (i) => e.form[t.field] = i),
          required: e.required,
          disabled: e.disabled,
          autocomplete: t.field,
          placeholder: e.placeholder,
          autofocus: e.autofocus,
          rows: e.rows,
          onInput: a[1] || (a[1] = (i) => n.$emit("update:modelValue", i.target.value))
        }, null, 40, wg), [
          [jp, e.form[t.field]]
        ])
      ]),
      we(V(aa), {
        class: "mt-2",
        message: e.form.errors[t.field]
      }, null, 8, ["message"])
    ]));
  }
};
var xg = Object.defineProperty, Sg = Object.defineProperties, Og = Object.getOwnPropertyDescriptors, Ru = Object.getOwnPropertySymbols, Ag = Object.prototype.hasOwnProperty, Cg = Object.prototype.propertyIsEnumerable, Lu = (t, e, r) => e in t ? xg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, Dr = (t, e) => {
  for (var r in e || (e = {}))
    Ag.call(e, r) && Lu(t, r, e[r]);
  if (Ru)
    for (var r of Ru(e))
      Cg.call(e, r) && Lu(t, r, e[r]);
  return t;
}, Nu = (t, e) => Sg(t, Og(e));
const Eg = {
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
        const r = this.getDropdownViewport(), { top: n, bottom: a, height: i } = e.getBoundingClientRect();
        if (n < r.top)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop;
        if (a > r.bottom)
          return this.$refs.dropdownMenu.scrollTop = e.offsetTop - (r.height - i);
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
}, kg = {
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
}, _g = {
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
}, $l = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, Pg = {}, Tg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, $g = /* @__PURE__ */ I("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Ig = [
  $g
];
function Dg(t, e) {
  return C(), E("svg", Tg, Ig);
}
const Rg = /* @__PURE__ */ $l(Pg, [["render", Dg]]), Lg = {}, Ng = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, Fg = /* @__PURE__ */ I("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), Mg = [
  Fg
];
function Bg(t, e) {
  return C(), E("svg", Ng, Mg);
}
const jg = /* @__PURE__ */ $l(Lg, [["render", Bg]]), Fu = {
  Deselect: Rg,
  OpenIndicator: jg
}, zg = {
  mounted(t, { instance: e }) {
    if (e.appendToBody) {
      const {
        height: r,
        top: n,
        left: a,
        width: i
      } = e.$refs.toggle.getBoundingClientRect();
      let o = window.scrollX || window.pageXOffset, s = window.scrollY || window.pageYOffset;
      t.unbindPosition = e.calculatePosition(t, e, {
        width: i + "px",
        left: o + a + "px",
        top: s + n + r + "px"
      }), document.body.appendChild(t);
    }
  },
  unmounted(t, { instance: e }) {
    e.appendToBody && (t.unbindPosition && typeof t.unbindPosition == "function" && t.unbindPosition(), t.parentNode && t.parentNode.removeChild(t));
  }
};
function Ug(t) {
  const e = {};
  return Object.keys(t).sort().forEach((r) => {
    e[r] = t[r];
  }), JSON.stringify(e);
}
let Vg = 0;
function Hg() {
  return ++Vg;
}
const qg = {
  components: Dr({}, Fu),
  directives: { appendToBody: zg },
  mixins: [Eg, kg, _g],
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
          return t.hasOwnProperty("id") ? t.id : Ug(t);
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
      default(t, e, { width: r, top: n, left: a }) {
        t.style.top = n, t.style.left = a, t.style.width = r;
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
      default: () => Hg()
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
          attributes: Dr({
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
        header: Nu(Dr({}, t), { deselect: this.deselect }),
        footer: Nu(Dr({}, t), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Dr(Dr({}, Fu), this.components);
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
      const e = (a) => (a.preventDefault(), !this.isComposing && this.typeAheadSelect()), r = {
        8: (a) => this.maybeDeleteValue(),
        9: (a) => this.onTab(),
        27: (a) => this.onEscape(),
        38: (a) => (a.preventDefault(), this.typeAheadUp()),
        40: (a) => (a.preventDefault(), this.typeAheadDown())
      };
      this.selectOnKeyCodes.forEach((a) => r[a] = e);
      const n = this.mapKeydown(r, this);
      if (typeof n[t.keyCode] == "function")
        return n[t.keyCode](t);
    }
  }
}, Wg = ["dir"], Gg = ["id", "aria-expanded", "aria-owns"], Yg = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, Kg = ["disabled", "title", "aria-label", "onClick"], Jg = {
  ref: "actions",
  class: "vs__actions"
}, Xg = ["disabled"], Qg = { class: "vs__spinner" }, Zg = ["id"], ey = ["id", "aria-selected", "onMouseover", "onClick"], ty = {
  key: 0,
  class: "vs__no-options"
}, ry = /* @__PURE__ */ ye(" Sorry, no matching options. "), ny = ["id"];
function ay(t, e, r, n, a, i) {
  const o = zp("append-to-body");
  return C(), E("div", {
    dir: r.dir,
    class: X(["v-select", i.stateClasses])
  }, [
    K(t.$slots, "header", Ge(tt(i.scope.header))),
    I("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": i.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: e[1] || (e[1] = (s) => i.toggleDropdown(s))
    }, [
      I("div", Yg, [
        (C(!0), E(fe, null, Ke(i.selectedValue, (s, u) => K(t.$slots, "selected-option-container", {
          option: i.normalizeOptionForSlot(s),
          deselect: i.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (C(), E("span", {
            key: r.getOptionKey(s),
            class: "vs__selected"
          }, [
            K(t.$slots, "selected-option", Ge(tt(i.normalizeOptionForSlot(s))), () => [
              ye(Q(r.getOptionLabel(s)), 1)
            ]),
            r.multiple ? (C(), E("button", {
              key: 0,
              ref_for: !0,
              ref: (c) => a.deselectButtons[u] = c,
              disabled: r.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${r.getOptionLabel(s)}`,
              "aria-label": `Deselect ${r.getOptionLabel(s)}`,
              onClick: (c) => i.deselect(s)
            }, [
              (C(), ae(zo(i.childComponents.Deselect)))
            ], 8, Kg)) : Y("", !0)
          ]))
        ])), 256)),
        K(t.$slots, "search", Ge(tt(i.scope.search)), () => [
          I("input", jn({ class: "vs__search" }, i.scope.search.attributes, Up(i.scope.search.events)), null, 16)
        ])
      ], 512),
      I("div", Jg, [
        He(I("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: e[0] || (e[0] = (...s) => i.clearSelection && i.clearSelection(...s))
        }, [
          (C(), ae(zo(i.childComponents.Deselect)))
        ], 8, Xg), [
          [qt, i.showClearButton]
        ]),
        K(t.$slots, "open-indicator", Ge(tt(i.scope.openIndicator)), () => [
          r.noDrop ? Y("", !0) : (C(), ae(zo(i.childComponents.OpenIndicator), Ge(jn({ key: 0 }, i.scope.openIndicator.attributes)), null, 16))
        ]),
        K(t.$slots, "spinner", Ge(tt(i.scope.spinner)), () => [
          He(I("div", Qg, "Loading...", 512), [
            [qt, t.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, Gg),
    we(fr, { name: r.transition }, {
      default: ve(() => [
        i.dropdownOpen ? He((C(), E("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: e[2] || (e[2] = zt((...s) => i.onMousedown && i.onMousedown(...s), ["prevent"])),
          onMouseup: e[3] || (e[3] = (...s) => i.onMouseUp && i.onMouseUp(...s))
        }, [
          K(t.$slots, "list-header", Ge(tt(i.scope.listHeader))),
          (C(!0), E(fe, null, Ke(i.filteredOptions, (s, u) => (C(), E("li", {
            id: `vs${r.uid}__option-${u}`,
            key: r.getOptionKey(s),
            role: "option",
            class: X(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": i.isOptionDeselectable(s) && u === t.typeAheadPointer,
              "vs__dropdown-option--selected": i.isOptionSelected(s),
              "vs__dropdown-option--highlight": u === t.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(s)
            }]),
            "aria-selected": u === t.typeAheadPointer ? !0 : null,
            onMouseover: (c) => r.selectable(s) ? t.typeAheadPointer = u : null,
            onClick: zt((c) => r.selectable(s) ? i.select(s) : null, ["prevent", "stop"])
          }, [
            K(t.$slots, "option", Ge(tt(i.normalizeOptionForSlot(s))), () => [
              ye(Q(r.getOptionLabel(s)), 1)
            ])
          ], 42, ey))), 128)),
          i.filteredOptions.length === 0 ? (C(), E("li", ty, [
            K(t.$slots, "no-options", Ge(tt(i.scope.noOptions)), () => [
              ry
            ])
          ])) : Y("", !0),
          K(t.$slots, "list-footer", Ge(tt(i.scope.listFooter)))
        ], 40, Zg)), [
          [o]
        ]) : (C(), E("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, ny))
      ]),
      _: 3
    }, 8, ["name"]),
    K(t.$slots, "footer", Ge(tt(i.scope.footer)))
  ], 10, Wg);
}
const iy = /* @__PURE__ */ $l(qg, [["render", ay]]);
const p4 = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(t) {
    return na.add(Ff), (e, r) => (C(), ae(V(iy), {
      options: t.options,
      label: t.label,
      placeholder: t.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Ot = {
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
    const n = t.$refs.menu.offsetHeight, a = Math.ceil((t.$refs.menu.scrollTop + t.$el.offsetHeight) / n), i = Math.ceil(r / n);
    a !== i && (t.$refs.menu.scrollTop = (i - 1) * t.$refs.menu.offsetHeight);
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
function oy(t) {
  return new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const Mf = {
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
      default: (t, e) => t.match(oy(e))
    }
  }
}, sy = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, a] of e)
    r[n] = a;
  return r;
}, ly = {
  name: "ModelSelect",
  mixins: [Mf],
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
      Ot.openOptions(this);
    },
    blurInput() {
      Ot.blurInput(this);
    },
    closeOptions() {
      Ot.closeOptions(this);
    },
    prevItem() {
      Ot.prevItem(this);
    },
    nextItem() {
      Ot.nextItem(this);
    },
    enterItem() {
      Ot.enterItem(this);
    },
    pointerSet(t) {
      Ot.pointerSet(this, t);
    },
    pointerAdjust() {
      Ot.pointerAdjust(this);
    },
    mousedownItem() {
      Ot.mousedownItem(this);
    },
    selectItem(t) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", t) : (this.$emit("update:modelValue", t.value), t.value !== void 0 && t.value === t.text && (this.searchText = t.value));
    },
    optionValue(t) {
      return typeof t == "object" && t !== null ? t.value : t;
    }
  }
}, uy = /* @__PURE__ */ I("i", { class: "dropdown icon" }, null, -1), cy = ["disabled", "tabindex", "id", "name", "value"], fy = ["data-vss-custom-attr"], dy = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function py(t, e, r, n, a, i) {
  return C(), E("div", {
    class: X(["ui fluid search selection dropdown", { "active visible": a.showMenu, error: t.isError, disabled: t.isDisabled }]),
    onClick: e[11] || (e[11] = (...o) => i.openOptions && i.openOptions(...o)),
    onFocus: e[12] || (e[12] = (...o) => i.openOptions && i.openOptions(...o))
  }, [
    uy,
    I("input", {
      class: "search",
      autocomplete: "off",
      disabled: t.isDisabled,
      tabindex: t.isDisabled ? -1 : 0,
      id: t.id,
      name: t.name,
      value: a.searchText,
      onInput: e[0] || (e[0] = (o) => a.searchText = o.target.value),
      ref: "input",
      onFocus: e[1] || (e[1] = zt((...o) => i.openOptions && i.openOptions(...o), ["prevent"])),
      onKeyup: [
        e[2] || (e[2] = Ir((...o) => i.closeOptions && i.closeOptions(...o), ["esc"])),
        e[7] || (e[7] = Ir(zt((...o) => i.enterItem && i.enterItem(...o), ["prevent"]), ["enter"]))
      ],
      onBlur: e[3] || (e[3] = (...o) => i.blurInput && i.blurInput(...o)),
      onKeydown: [
        e[4] || (e[4] = Ir((...o) => i.prevItem && i.prevItem(...o), ["up"])),
        e[5] || (e[5] = Ir((...o) => i.nextItem && i.nextItem(...o), ["down"])),
        e[6] || (e[6] = Ir(zt(() => {
        }, ["prevent"]), ["enter"])),
        e[8] || (e[8] = Ir((...o) => i.deleteTextOrItem && i.deleteTextOrItem(...o), ["delete"]))
      ]
    }, null, 40, cy),
    I("div", {
      class: X(["text", i.textClass]),
      "data-vss-custom-attr": i.searchTextCustomAttr
    }, Q(i.inputText), 11, fy),
    I("div", {
      class: X(["menu", i.menuClass]),
      ref: "menu",
      onMousedown: e[10] || (e[10] = zt(() => {
      }, ["prevent"])),
      style: In(i.menuStyle),
      tabindex: "-1"
    }, [
      (C(!0), E(fe, null, Ke(i.filteredOptions, (o, s) => (C(), E("div", {
        key: s,
        class: X(["item", { selected: o.selected || a.pointer === s, disabled: o.disabled }]),
        "data-vss-custom-attr": i.customAttrs[s] ? i.customAttrs[s] : "",
        onClick: zt((u) => i.selectItem(o), ["stop"]),
        onMousedown: e[9] || (e[9] = (...u) => i.mousedownItem && i.mousedownItem(...u)),
        onMouseenter: (u) => i.pointerSet(s)
      }, [
        K(t.$slots, "default", {
          option: o,
          idx: s
        }, () => [
          ye(Q(o.text), 1)
        ])
      ], 42, dy))), 128))
    ], 38)
  ], 34);
}
const Mu = /* @__PURE__ */ sy(ly, [["render", py]]), Bu = {
  name: "ModelListSelect",
  mixins: [Mf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return Ht(Mu, {
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
const hy = {
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
    const r = e, n = (a) => {
      let i = [];
      return a.split("_").join(" ").split(" ").map(function(o) {
        i.push(o[0].toUpperCase() + o.slice(1));
      }), i.join(" ");
    };
    return (a, i) => (C(), E("div", null, [
      !t.noLabel && (t.label || t.field) ? (C(), ae(V(Tl), {
        key: 0,
        for: t.id ?? t.field,
        value: n(t.label ?? t.field),
        required: t.required
      }, null, 8, ["for", "value", "required"])) : Y("", !0),
      t.noForm ? (C(), ae(V(Bu), {
        key: 1,
        id: t.id ?? t.field,
        list: t.list,
        modelValue: t.modelValue,
        "option-value": t.optionValue,
        "option-text": t.optionText,
        "option-disabled": t.optionDisabled,
        placeholder: t.placeholder,
        class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow",
        "onUpdate:modelValue": i[0] || (i[0] = (o) => r("update:modelValue", o)),
        onSearchchange: i[1] || (i[1] = (o) => r("searchchange", o)),
        "is-disabled": t.disabled,
        filterPredicate: t.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (C(), E(fe, { key: 2 }, [
        we(V(Bu), {
          id: t.id ?? t.field,
          list: t.list,
          modelValue: t.form[t.field],
          "onUpdate:modelValue": [
            i[2] || (i[2] = (o) => t.form[t.field] = o),
            i[3] || (i[3] = (o) => r("update:modelValue", o))
          ],
          "option-value": t.optionValue,
          "option-text": t.optionText,
          "option-disabled": t.optionDisabled,
          placeholder: t.placeholder,
          class: "model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !px-3 !shadow",
          onSearchchange: i[4] || (i[4] = (o) => r("searchchange", o)),
          "is-disabled": t.disabled,
          filterPredicate: t.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        we(V(aa), {
          message: t.form.errors[t.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, my = /* @__PURE__ */ en(hy, [["__scopeId", "data-v-80742e76"]]);
function Bf(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: gy } = Object.prototype, { getPrototypeOf: Il } = Object, Fi = ((t) => (e) => {
  const r = gy.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), vt = (t) => (t = t.toLowerCase(), (e) => Fi(e) === t), Mi = (t) => (e) => typeof e === t, { isArray: tn } = Array, Wn = Mi("undefined");
function yy(t) {
  return t !== null && !Wn(t) && t.constructor !== null && !Wn(t.constructor) && Ye(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const jf = vt("ArrayBuffer");
function vy(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && jf(t.buffer), e;
}
const by = Mi("string"), Ye = Mi("function"), zf = Mi("number"), Bi = (t) => t !== null && typeof t == "object", wy = (t) => t === !0 || t === !1, oi = (t) => {
  if (Fi(t) !== "object")
    return !1;
  const e = Il(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, xy = vt("Date"), Sy = vt("File"), Oy = vt("Blob"), Ay = vt("FileList"), Cy = (t) => Bi(t) && Ye(t.pipe), Ey = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || Ye(t.append) && ((e = Fi(t)) === "formdata" || // detect form-data instance
  e === "object" && Ye(t.toString) && t.toString() === "[object FormData]"));
}, ky = vt("URLSearchParams"), _y = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ia(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, a;
  if (typeof t != "object" && (t = [t]), tn(t))
    for (n = 0, a = t.length; n < a; n++)
      e.call(null, t[n], n, t);
  else {
    const i = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = i.length;
    let s;
    for (n = 0; n < o; n++)
      s = i[n], e.call(null, t[s], s, t);
  }
}
function Uf(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], e === a.toLowerCase())
      return a;
  return null;
}
const Vf = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Hf = (t) => !Wn(t) && t !== Vf;
function Ds() {
  const { caseless: t } = Hf(this) && this || {}, e = {}, r = (n, a) => {
    const i = t && Uf(e, a) || a;
    oi(e[i]) && oi(n) ? e[i] = Ds(e[i], n) : oi(n) ? e[i] = Ds({}, n) : tn(n) ? e[i] = n.slice() : e[i] = n;
  };
  for (let n = 0, a = arguments.length; n < a; n++)
    arguments[n] && ia(arguments[n], r);
  return e;
}
const Py = (t, e, r, { allOwnKeys: n } = {}) => (ia(e, (a, i) => {
  r && Ye(a) ? t[i] = Bf(a, r) : t[i] = a;
}, { allOwnKeys: n }), t), Ty = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), $y = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, Iy = (t, e, r, n) => {
  let a, i, o;
  const s = {};
  if (e = e || {}, t == null)
    return e;
  do {
    for (a = Object.getOwnPropertyNames(t), i = a.length; i-- > 0; )
      o = a[i], (!n || n(o, t, e)) && !s[o] && (e[o] = t[o], s[o] = !0);
    t = r !== !1 && Il(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, Dy = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, Ry = (t) => {
  if (!t)
    return null;
  if (tn(t))
    return t;
  let e = t.length;
  if (!zf(e))
    return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, Ly = ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Il(Uint8Array)), Ny = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const i = a.value;
    e.call(t, i[0], i[1]);
  }
}, Fy = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, My = vt("HTMLFormElement"), By = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, a) {
    return n.toUpperCase() + a;
  }
), ju = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), jy = vt("RegExp"), qf = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  ia(r, (a, i) => {
    let o;
    (o = e(a, i, t)) !== !1 && (n[i] = o || a);
  }), Object.defineProperties(t, n);
}, zy = (t) => {
  qf(t, (e, r) => {
    if (Ye(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if (Ye(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Uy = (t, e) => {
  const r = {}, n = (a) => {
    a.forEach((i) => {
      r[i] = !0;
    });
  };
  return tn(t) ? n(t) : n(String(t).split(e)), r;
}, Vy = () => {
}, Hy = (t, e) => (t = +t, Number.isFinite(t) ? t : e), Wo = "abcdefghijklmnopqrstuvwxyz", zu = "0123456789", Wf = {
  DIGIT: zu,
  ALPHA: Wo,
  ALPHA_DIGIT: Wo + Wo.toUpperCase() + zu
}, qy = (t = 16, e = Wf.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = e;
  for (; t--; )
    r += e[Math.random() * n | 0];
  return r;
};
function Wy(t) {
  return !!(t && Ye(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const Gy = (t) => {
  const e = new Array(10), r = (n, a) => {
    if (Bi(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[a] = n;
        const i = tn(n) ? [] : {};
        return ia(n, (o, s) => {
          const u = r(o, a + 1);
          !Wn(u) && (i[s] = u);
        }), e[a] = void 0, i;
      }
    }
    return n;
  };
  return r(t, 0);
}, Yy = vt("AsyncFunction"), Ky = (t) => t && (Bi(t) || Ye(t)) && Ye(t.then) && Ye(t.catch), $ = {
  isArray: tn,
  isArrayBuffer: jf,
  isBuffer: yy,
  isFormData: Ey,
  isArrayBufferView: vy,
  isString: by,
  isNumber: zf,
  isBoolean: wy,
  isObject: Bi,
  isPlainObject: oi,
  isUndefined: Wn,
  isDate: xy,
  isFile: Sy,
  isBlob: Oy,
  isRegExp: jy,
  isFunction: Ye,
  isStream: Cy,
  isURLSearchParams: ky,
  isTypedArray: Ly,
  isFileList: Ay,
  forEach: ia,
  merge: Ds,
  extend: Py,
  trim: _y,
  stripBOM: Ty,
  inherits: $y,
  toFlatObject: Iy,
  kindOf: Fi,
  kindOfTest: vt,
  endsWith: Dy,
  toArray: Ry,
  forEachEntry: Ny,
  matchAll: Fy,
  isHTMLForm: My,
  hasOwnProperty: ju,
  hasOwnProp: ju,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: qf,
  freezeMethods: zy,
  toObjectSet: Uy,
  toCamelCase: By,
  noop: Vy,
  toFiniteNumber: Hy,
  findKey: Uf,
  global: Vf,
  isContextDefined: Hf,
  ALPHABET: Wf,
  generateString: qy,
  isSpecCompliantForm: Wy,
  toJSONObject: Gy,
  isAsyncFn: Yy,
  isThenable: Ky
};
function ie(t, e, r, n, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), a && (this.response = a);
}
$.inherits(ie, Error, {
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
      config: $.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Gf = ie.prototype, Yf = {};
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
  Yf[t] = { value: t };
});
Object.defineProperties(ie, Yf);
Object.defineProperty(Gf, "isAxiosError", { value: !0 });
ie.from = (t, e, r, n, a, i) => {
  const o = Object.create(Gf);
  return $.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ie.call(o, t.message, e, r, n, a), o.cause = t, o.name = t.name, i && Object.assign(o, i), o;
};
const Jy = null;
function Rs(t) {
  return $.isPlainObject(t) || $.isArray(t);
}
function Kf(t) {
  return $.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Uu(t, e, r) {
  return t ? t.concat(e).map(function(a, i) {
    return a = Kf(a), !r && i ? "[" + a + "]" : a;
  }).join(r ? "." : "") : e;
}
function Xy(t) {
  return $.isArray(t) && !t.some(Rs);
}
const Qy = $.toFlatObject($, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function ji(t, e, r) {
  if (!$.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = $.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, S) {
    return !$.isUndefined(S[x]);
  });
  const n = r.metaTokens, a = r.visitor || f, i = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && $.isSpecCompliantForm(e);
  if (!$.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if ($.isDate(m))
      return m.toISOString();
    if (!u && $.isBlob(m))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return $.isArrayBuffer(m) || $.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function f(m, x, S) {
    let O = m;
    if (m && !S && typeof m == "object") {
      if ($.endsWith(x, "{}"))
        x = n ? x : x.slice(0, -2), m = JSON.stringify(m);
      else if ($.isArray(m) && Xy(m) || ($.isFileList(m) || $.endsWith(x, "[]")) && (O = $.toArray(m)))
        return x = Kf(x), O.forEach(function(_, T) {
          !($.isUndefined(_) || _ === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Uu([x], T, i) : o === null ? x : x + "[]",
            c(_)
          );
        }), !1;
    }
    return Rs(m) ? !0 : (e.append(Uu(S, x, i), c(m)), !1);
  }
  const d = [], y = Object.assign(Qy, {
    defaultVisitor: f,
    convertValue: c,
    isVisitable: Rs
  });
  function A(m, x) {
    if (!$.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      d.push(m), $.forEach(m, function(O, P) {
        (!($.isUndefined(O) || O === null) && a.call(
          e,
          O,
          $.isString(P) ? P.trim() : P,
          x,
          y
        )) === !0 && A(O, x ? x.concat(P) : [P]);
      }), d.pop();
    }
  }
  if (!$.isObject(t))
    throw new TypeError("data must be an object");
  return A(t), e;
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
function Dl(t, e) {
  this._pairs = [], t && ji(t, this, e);
}
const Jf = Dl.prototype;
Jf.append = function(e, r) {
  this._pairs.push([e, r]);
};
Jf.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, Vu);
  } : Vu;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function Zy(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Xf(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Zy, a = r && r.serialize;
  let i;
  if (a ? i = a(e, r) : i = $.isURLSearchParams(e) ? e.toString() : new Dl(e, r).toString(n), i) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return t;
}
class ev {
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
    $.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const Hu = ev, Qf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, tv = typeof URLSearchParams < "u" ? URLSearchParams : Dl, rv = typeof FormData < "u" ? FormData : null, nv = typeof Blob < "u" ? Blob : null, av = {
  isBrowser: !0,
  classes: {
    URLSearchParams: tv,
    FormData: rv,
    Blob: nv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Zf = typeof window < "u" && typeof document < "u", iv = ((t) => Zf && ["ReactNative", "NativeScript", "NS"].indexOf(t) < 0)(typeof navigator < "u" && navigator.product), ov = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), sv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Zf,
  hasStandardBrowserEnv: iv,
  hasStandardBrowserWebWorkerEnv: ov
}, Symbol.toStringTag, { value: "Module" })), gt = {
  ...sv,
  ...av
};
function lv(t, e) {
  return ji(t, new gt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, a, i) {
      return gt.isNode && $.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function uv(t) {
  return $.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function cv(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const a = r.length;
  let i;
  for (n = 0; n < a; n++)
    i = r[n], e[i] = t[i];
  return e;
}
function ed(t) {
  function e(r, n, a, i) {
    let o = r[i++];
    if (o === "__proto__")
      return !0;
    const s = Number.isFinite(+o), u = i >= r.length;
    return o = !o && $.isArray(a) ? a.length : o, u ? ($.hasOwnProp(a, o) ? a[o] = [a[o], n] : a[o] = n, !s) : ((!a[o] || !$.isObject(a[o])) && (a[o] = []), e(r, n, a[o], i) && $.isArray(a[o]) && (a[o] = cv(a[o])), !s);
  }
  if ($.isFormData(t) && $.isFunction(t.entries)) {
    const r = {};
    return $.forEachEntry(t, (n, a) => {
      e(uv(n), a, r, 0);
    }), r;
  }
  return null;
}
function fv(t, e, r) {
  if ($.isString(t))
    try {
      return (e || JSON.parse)(t), $.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Rl = {
  transitional: Qf,
  adapter: ["xhr", "http"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, i = $.isObject(e);
    if (i && $.isHTMLForm(e) && (e = new FormData(e)), $.isFormData(e))
      return a ? JSON.stringify(ed(e)) : e;
    if ($.isArrayBuffer(e) || $.isBuffer(e) || $.isStream(e) || $.isFile(e) || $.isBlob(e))
      return e;
    if ($.isArrayBufferView(e))
      return e.buffer;
    if ($.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return lv(e, this.formSerializer).toString();
      if ((s = $.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return ji(
          s ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || a ? (r.setContentType("application/json", !1), fv(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Rl.transitional, n = r && r.forcedJSONParsing, a = this.responseType === "json";
    if (e && $.isString(e) && (n && !this.responseType || a)) {
      const o = !(r && r.silentJSONParsing) && a;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? ie.from(s, ie.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: gt.classes.FormData,
    Blob: gt.classes.Blob
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
$.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Rl.headers[t] = {};
});
const Ll = Rl, dv = $.toObjectSet([
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
]), pv = (t) => {
  const e = {};
  let r, n, a;
  return t && t.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), r = o.substring(0, a).trim().toLowerCase(), n = o.substring(a + 1).trim(), !(!r || e[r] && dv[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, qu = Symbol("internals");
function Sn(t) {
  return t && String(t).trim().toLowerCase();
}
function si(t) {
  return t === !1 || t == null ? t : $.isArray(t) ? t.map(si) : String(t);
}
function hv(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const mv = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function Go(t, e, r, n, a) {
  if ($.isFunction(n))
    return n.call(this, e, r);
  if (a && (e = r), !!$.isString(e)) {
    if ($.isString(n))
      return e.indexOf(n) !== -1;
    if ($.isRegExp(n))
      return n.test(e);
  }
}
function gv(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function yv(t, e) {
  const r = $.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(a, i, o) {
        return this[n].call(this, e, a, i, o);
      },
      configurable: !0
    });
  });
}
class zi {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const a = this;
    function i(s, u, c) {
      const f = Sn(u);
      if (!f)
        throw new Error("header name must be a non-empty string");
      const d = $.findKey(a, f);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || u] = si(s));
    }
    const o = (s, u) => $.forEach(s, (c, f) => i(c, f, u));
    return $.isPlainObject(e) || e instanceof this.constructor ? o(e, r) : $.isString(e) && (e = e.trim()) && !mv(e) ? o(pv(e), r) : e != null && i(r, e, n), this;
  }
  get(e, r) {
    if (e = Sn(e), e) {
      const n = $.findKey(this, e);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return hv(a);
        if ($.isFunction(r))
          return r.call(this, a, n);
        if ($.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = Sn(e), e) {
      const n = $.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || Go(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let a = !1;
    function i(o) {
      if (o = Sn(o), o) {
        const s = $.findKey(n, o);
        s && (!r || Go(n, n[s], s, r)) && (delete n[s], a = !0);
      }
    }
    return $.isArray(e) ? e.forEach(i) : i(e), a;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const i = r[n];
      (!e || Go(this, this[i], i, e, !0)) && (delete this[i], a = !0);
    }
    return a;
  }
  normalize(e) {
    const r = this, n = {};
    return $.forEach(this, (a, i) => {
      const o = $.findKey(n, i);
      if (o) {
        r[o] = si(a), delete r[i];
        return;
      }
      const s = e ? gv(i) : String(i).trim();
      s !== i && delete r[i], r[s] = si(a), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return $.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = e && $.isArray(n) ? n.join(", ") : n);
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
    return r.forEach((a) => n.set(a)), n;
  }
  static accessor(e) {
    const n = (this[qu] = this[qu] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function i(o) {
      const s = Sn(o);
      n[s] || (yv(a, o), n[s] = !0);
    }
    return $.isArray(e) ? e.forEach(i) : i(e), this;
  }
}
zi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
$.reduceDescriptors(zi.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
$.freezeMethods(zi);
const kt = zi;
function Yo(t, e) {
  const r = this || Ll, n = e || r, a = kt.from(n.headers);
  let i = n.data;
  return $.forEach(t, function(s) {
    i = s.call(r, i, a.normalize(), e ? e.status : void 0);
  }), a.normalize(), i;
}
function td(t) {
  return !!(t && t.__CANCEL__);
}
function oa(t, e, r) {
  ie.call(this, t ?? "canceled", ie.ERR_CANCELED, e, r), this.name = "CanceledError";
}
$.inherits(oa, ie, {
  __CANCEL__: !0
});
function vv(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new ie(
    "Request failed with status code " + r.status,
    [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const bv = gt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, a, i) {
      const o = [t + "=" + encodeURIComponent(e)];
      $.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), $.isString(n) && o.push("path=" + n), $.isString(a) && o.push("domain=" + a), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function wv(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function xv(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function rd(t, e) {
  return t && !wv(e) ? xv(t, e) : e;
}
const Sv = gt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const e = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function a(i) {
      let o = i;
      return e && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = a(window.location.href), function(o) {
      const s = $.isString(o) ? a(o) : o;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function Ov(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function Av(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let a = 0, i = 0, o;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const c = Date.now(), f = n[i];
    o || (o = c), r[a] = u, n[a] = c;
    let d = i, y = 0;
    for (; d !== a; )
      y += r[d++], d = d % t;
    if (a = (a + 1) % t, a === i && (i = (i + 1) % t), c - o < e)
      return;
    const A = f && c - f;
    return A ? Math.round(y * 1e3 / A) : void 0;
  };
}
function Wu(t, e) {
  let r = 0;
  const n = Av(50, 250);
  return (a) => {
    const i = a.loaded, o = a.lengthComputable ? a.total : void 0, s = i - r, u = n(s), c = i <= o;
    r = i;
    const f = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && o && c ? (o - i) / u : void 0,
      event: a
    };
    f[e ? "download" : "upload"] = !0, t(f);
  };
}
const Cv = typeof XMLHttpRequest < "u", Ev = Cv && function(t) {
  return new Promise(function(r, n) {
    let a = t.data;
    const i = kt.from(t.headers).normalize();
    let { responseType: o, withXSRFToken: s } = t, u;
    function c() {
      t.cancelToken && t.cancelToken.unsubscribe(u), t.signal && t.signal.removeEventListener("abort", u);
    }
    let f;
    if ($.isFormData(a)) {
      if (gt.hasStandardBrowserEnv || gt.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((f = i.getContentType()) !== !1) {
        const [x, ...S] = f ? f.split(";").map((O) => O.trim()).filter(Boolean) : [];
        i.setContentType([x || "multipart/form-data", ...S].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (t.auth) {
      const x = t.auth.username || "", S = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(x + ":" + S));
    }
    const y = rd(t.baseURL, t.url);
    d.open(t.method.toUpperCase(), Xf(y, t.params, t.paramsSerializer), !0), d.timeout = t.timeout;
    function A() {
      if (!d)
        return;
      const x = kt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), O = {
        data: !o || o === "text" || o === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: x,
        config: t,
        request: d
      };
      vv(function(_) {
        r(_), c();
      }, function(_) {
        n(_), c();
      }, O), d = null;
    }
    if ("onloadend" in d ? d.onloadend = A : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, d.onabort = function() {
      d && (n(new ie("Request aborted", ie.ECONNABORTED, t, d)), d = null);
    }, d.onerror = function() {
      n(new ie("Network Error", ie.ERR_NETWORK, t, d)), d = null;
    }, d.ontimeout = function() {
      let S = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded";
      const O = t.transitional || Qf;
      t.timeoutErrorMessage && (S = t.timeoutErrorMessage), n(new ie(
        S,
        O.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
        t,
        d
      )), d = null;
    }, gt.hasStandardBrowserEnv && (s && $.isFunction(s) && (s = s(t)), s || s !== !1 && Sv(y))) {
      const x = t.xsrfHeaderName && t.xsrfCookieName && bv.read(t.xsrfCookieName);
      x && i.set(t.xsrfHeaderName, x);
    }
    a === void 0 && i.setContentType(null), "setRequestHeader" in d && $.forEach(i.toJSON(), function(S, O) {
      d.setRequestHeader(O, S);
    }), $.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials), o && o !== "json" && (d.responseType = t.responseType), typeof t.onDownloadProgress == "function" && d.addEventListener("progress", Wu(t.onDownloadProgress, !0)), typeof t.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Wu(t.onUploadProgress)), (t.cancelToken || t.signal) && (u = (x) => {
      d && (n(!x || x.type ? new oa(null, t, d) : x), d.abort(), d = null);
    }, t.cancelToken && t.cancelToken.subscribe(u), t.signal && (t.signal.aborted ? u() : t.signal.addEventListener("abort", u)));
    const m = Ov(y);
    if (m && gt.protocols.indexOf(m) === -1) {
      n(new ie("Unsupported protocol " + m + ":", ie.ERR_BAD_REQUEST, t));
      return;
    }
    d.send(a || null);
  });
}, Ls = {
  http: Jy,
  xhr: Ev
};
$.forEach(Ls, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Gu = (t) => `- ${t}`, kv = (t) => $.isFunction(t) || t === null || t === !1, nd = {
  getAdapter: (t) => {
    t = $.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const a = {};
    for (let i = 0; i < e; i++) {
      r = t[i];
      let o;
      if (n = r, !kv(r) && (n = Ls[(o = String(r)).toLowerCase()], n === void 0))
        throw new ie(`Unknown adapter '${o}'`);
      if (n)
        break;
      a[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(a).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? i.length > 1 ? `since :
` + i.map(Gu).join(`
`) : " " + Gu(i[0]) : "as no adapter specified";
      throw new ie(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Ls
};
function Ko(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new oa(null, t);
}
function Yu(t) {
  return Ko(t), t.headers = kt.from(t.headers), t.data = Yo.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), nd.getAdapter(t.adapter || Ll.adapter)(t).then(function(n) {
    return Ko(t), n.data = Yo.call(
      t,
      t.transformResponse,
      n
    ), n.headers = kt.from(n.headers), n;
  }, function(n) {
    return td(n) || (Ko(t), n && n.response && (n.response.data = Yo.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = kt.from(n.response.headers))), Promise.reject(n);
  });
}
const Ku = (t) => t instanceof kt ? t.toJSON() : t;
function qr(t, e) {
  e = e || {};
  const r = {};
  function n(c, f, d) {
    return $.isPlainObject(c) && $.isPlainObject(f) ? $.merge.call({ caseless: d }, c, f) : $.isPlainObject(f) ? $.merge({}, f) : $.isArray(f) ? f.slice() : f;
  }
  function a(c, f, d) {
    if ($.isUndefined(f)) {
      if (!$.isUndefined(c))
        return n(void 0, c, d);
    } else
      return n(c, f, d);
  }
  function i(c, f) {
    if (!$.isUndefined(f))
      return n(void 0, f);
  }
  function o(c, f) {
    if ($.isUndefined(f)) {
      if (!$.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, f);
  }
  function s(c, f, d) {
    if (d in e)
      return n(c, f);
    if (d in t)
      return n(void 0, c);
  }
  const u = {
    url: i,
    method: i,
    data: i,
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
    headers: (c, f) => a(Ku(c), Ku(f), !0)
  };
  return $.forEach(Object.keys(Object.assign({}, t, e)), function(f) {
    const d = u[f] || a, y = d(t[f], e[f], f);
    $.isUndefined(y) && d !== s || (r[f] = y);
  }), r;
}
const ad = "1.6.7", Nl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Nl[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Ju = {};
Nl.transitional = function(e, r, n) {
  function a(i, o) {
    return "[Axios v" + ad + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, s) => {
    if (e === !1)
      throw new ie(
        a(o, " has been removed" + (r ? " in " + r : "")),
        ie.ERR_DEPRECATED
      );
    return r && !Ju[o] && (Ju[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(i, o, s) : !0;
  };
};
function _v(t, e, r) {
  if (typeof t != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let a = n.length;
  for (; a-- > 0; ) {
    const i = n[a], o = e[i];
    if (o) {
      const s = t[i], u = s === void 0 || o(s, i, t);
      if (u !== !0)
        throw new ie("option " + i + " must be " + u, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ie("Unknown option " + i, ie.ERR_BAD_OPTION);
  }
}
const Ns = {
  assertOptions: _v,
  validators: Nl
}, Mt = Ns.validators;
class bi {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new Hu(),
      response: new Hu()
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
        let a;
        Error.captureStackTrace ? Error.captureStackTrace(a = {}) : a = new Error();
        const i = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = qr(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: i } = r;
    n !== void 0 && Ns.assertOptions(n, {
      silentJSONParsing: Mt.transitional(Mt.boolean),
      forcedJSONParsing: Mt.transitional(Mt.boolean),
      clarifyTimeoutError: Mt.transitional(Mt.boolean)
    }, !1), a != null && ($.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : Ns.assertOptions(a, {
      encode: Mt.function,
      serialize: Mt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && $.merge(
      i.common,
      i[r.method]
    );
    i && $.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), r.headers = kt.concat(o, i);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(r) === !1 || (u = u && x.synchronous, s.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(x) {
      c.push(x.fulfilled, x.rejected);
    });
    let f, d = 0, y;
    if (!u) {
      const m = [Yu.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, c), y = m.length, f = Promise.resolve(r); d < y; )
        f = f.then(m[d++], m[d++]);
      return f;
    }
    y = s.length;
    let A = r;
    for (d = 0; d < y; ) {
      const m = s[d++], x = s[d++];
      try {
        A = m(A);
      } catch (S) {
        x.call(this, S);
        break;
      }
    }
    try {
      f = Yu.call(this, A);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, y = c.length; d < y; )
      f = f.then(c[d++], c[d++]);
    return f;
  }
  getUri(e) {
    e = qr(this.defaults, e);
    const r = rd(e.baseURL, e.url);
    return Xf(r, e.params, e.paramsSerializer);
  }
}
$.forEach(["delete", "get", "head", "options"], function(e) {
  bi.prototype[e] = function(r, n) {
    return this.request(qr(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
$.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(i, o, s) {
      return this.request(qr(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  bi.prototype[e] = r(), bi.prototype[e + "Form"] = r(!0);
});
const li = bi;
class Fl {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let i;
      const o = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(a);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, e(function(i, o, s) {
      n.reason || (n.reason = new oa(i, o, s), r(n.reason));
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
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new Fl(function(a) {
        e = a;
      }),
      cancel: e
    };
  }
}
const Pv = Fl;
function Tv(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function $v(t) {
  return $.isObject(t) && t.isAxiosError === !0;
}
const Fs = {
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
Object.entries(Fs).forEach(([t, e]) => {
  Fs[e] = t;
});
const Iv = Fs;
function id(t) {
  const e = new li(t), r = Bf(li.prototype.request, e);
  return $.extend(r, li.prototype, e, { allOwnKeys: !0 }), $.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(a) {
    return id(qr(t, a));
  }, r;
}
const Oe = id(Ll);
Oe.Axios = li;
Oe.CanceledError = oa;
Oe.CancelToken = Pv;
Oe.isCancel = td;
Oe.VERSION = ad;
Oe.toFormData = ji;
Oe.AxiosError = ie;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(e) {
  return Promise.all(e);
};
Oe.spread = Tv;
Oe.isAxiosError = $v;
Oe.mergeConfig = qr;
Oe.AxiosHeaders = kt;
Oe.formToJSON = (t) => ed($.isHTMLForm(t) ? new FormData(t) : t);
Oe.getAdapter = nd.getAdapter;
Oe.HttpStatusCode = Iv;
Oe.default = Oe;
const Xu = Oe;
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ui(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Dv(t) {
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
    var a = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, a.get ? a : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Rv = function(e) {
  return Lv(e) && !Nv(e);
};
function Lv(t) {
  return !!t && typeof t == "object";
}
function Nv(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Bv(t);
}
var Fv = typeof Symbol == "function" && Symbol.for, Mv = Fv ? Symbol.for("react.element") : 60103;
function Bv(t) {
  return t.$$typeof === Mv;
}
function jv(t) {
  return Array.isArray(t) ? [] : {};
}
function Gn(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Wr(jv(t), t, e) : t;
}
function zv(t, e, r) {
  return t.concat(e).map(function(n) {
    return Gn(n, r);
  });
}
function Uv(t, e) {
  if (!e.customMerge)
    return Wr;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : Wr;
}
function Vv(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Qu(t) {
  return Object.keys(t).concat(Vv(t));
}
function od(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function Hv(t, e) {
  return od(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function qv(t, e, r) {
  var n = {};
  return r.isMergeableObject(t) && Qu(t).forEach(function(a) {
    n[a] = Gn(t[a], r);
  }), Qu(e).forEach(function(a) {
    Hv(t, a) || (od(t, a) && r.isMergeableObject(e[a]) ? n[a] = Uv(a, r)(t[a], e[a], r) : n[a] = Gn(e[a], r));
  }), n;
}
function Wr(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || zv, r.isMergeableObject = r.isMergeableObject || Rv, r.cloneUnlessOtherwiseSpecified = Gn;
  var n = Array.isArray(e), a = Array.isArray(t), i = n === a;
  return i ? n ? r.arrayMerge(t, e, r) : qv(t, e, r) : Gn(e, r);
}
Wr.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(n, a) {
    return Wr(n, a, r);
  }, {});
};
var Wv = Wr, Gv = Wv;
const Yv = /* @__PURE__ */ Ui(Gv);
var Kv = Error, Jv = EvalError, Xv = RangeError, Qv = ReferenceError, sd = SyntaxError, sa = TypeError, Zv = URIError, e0 = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var a = 42;
  e[r] = a;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var i = Object.getOwnPropertySymbols(e);
  if (i.length !== 1 || i[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, r);
    if (o.value !== a || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, Zu = typeof Symbol < "u" && Symbol, t0 = e0, r0 = function() {
  return typeof Zu != "function" || typeof Symbol != "function" || typeof Zu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t0();
}, ec = {
  foo: {}
}, n0 = Object, a0 = function() {
  return { __proto__: ec }.foo === ec.foo && !({ __proto__: null } instanceof n0);
}, i0 = "Function.prototype.bind called on incompatible ", o0 = Object.prototype.toString, s0 = Math.max, l0 = "[object Function]", tc = function(e, r) {
  for (var n = [], a = 0; a < e.length; a += 1)
    n[a] = e[a];
  for (var i = 0; i < r.length; i += 1)
    n[i + e.length] = r[i];
  return n;
}, u0 = function(e, r) {
  for (var n = [], a = r || 0, i = 0; a < e.length; a += 1, i += 1)
    n[i] = e[a];
  return n;
}, c0 = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, f0 = function(e) {
  var r = this;
  if (typeof r != "function" || o0.apply(r) !== l0)
    throw new TypeError(i0 + r);
  for (var n = u0(arguments, 1), a, i = function() {
    if (this instanceof a) {
      var f = r.apply(
        this,
        tc(n, arguments)
      );
      return Object(f) === f ? f : this;
    }
    return r.apply(
      e,
      tc(n, arguments)
    );
  }, o = s0(0, r.length - n.length), s = [], u = 0; u < o; u++)
    s[u] = "$" + u;
  if (a = Function("binder", "return function (" + c0(s, ",") + "){ return binder.apply(this,arguments); }")(i), r.prototype) {
    var c = function() {
    };
    c.prototype = r.prototype, a.prototype = new c(), c.prototype = null;
  }
  return a;
}, d0 = f0, Ml = Function.prototype.bind || d0, p0 = Function.prototype.call, h0 = Object.prototype.hasOwnProperty, m0 = Ml, g0 = m0.call(p0, h0), te, y0 = Kv, v0 = Jv, b0 = Xv, w0 = Qv, Gr = sd, Ur = sa, x0 = Zv, ld = Function, Jo = function(t) {
  try {
    return ld('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, dr = Object.getOwnPropertyDescriptor;
if (dr)
  try {
    dr({}, "");
  } catch {
    dr = null;
  }
var Xo = function() {
  throw new Ur();
}, S0 = dr ? function() {
  try {
    return arguments.callee, Xo;
  } catch {
    try {
      return dr(arguments, "callee").get;
    } catch {
      return Xo;
    }
  }
}() : Xo, Rr = r0(), O0 = a0(), ke = Object.getPrototypeOf || (O0 ? function(t) {
  return t.__proto__;
} : null), Fr = {}, A0 = typeof Uint8Array > "u" || !ke ? te : ke(Uint8Array), pr = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? te : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? te : ArrayBuffer,
  "%ArrayIteratorPrototype%": Rr && ke ? ke([][Symbol.iterator]()) : te,
  "%AsyncFromSyncIteratorPrototype%": te,
  "%AsyncFunction%": Fr,
  "%AsyncGenerator%": Fr,
  "%AsyncGeneratorFunction%": Fr,
  "%AsyncIteratorPrototype%": Fr,
  "%Atomics%": typeof Atomics > "u" ? te : Atomics,
  "%BigInt%": typeof BigInt > "u" ? te : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? te : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? te : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? te : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": y0,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": v0,
  "%Float32Array%": typeof Float32Array > "u" ? te : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? te : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? te : FinalizationRegistry,
  "%Function%": ld,
  "%GeneratorFunction%": Fr,
  "%Int8Array%": typeof Int8Array > "u" ? te : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? te : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? te : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Rr && ke ? ke(ke([][Symbol.iterator]())) : te,
  "%JSON%": typeof JSON == "object" ? JSON : te,
  "%Map%": typeof Map > "u" ? te : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Rr || !ke ? te : ke((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? te : Promise,
  "%Proxy%": typeof Proxy > "u" ? te : Proxy,
  "%RangeError%": b0,
  "%ReferenceError%": w0,
  "%Reflect%": typeof Reflect > "u" ? te : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? te : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Rr || !ke ? te : ke((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? te : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Rr && ke ? ke(""[Symbol.iterator]()) : te,
  "%Symbol%": Rr ? Symbol : te,
  "%SyntaxError%": Gr,
  "%ThrowTypeError%": S0,
  "%TypedArray%": A0,
  "%TypeError%": Ur,
  "%Uint8Array%": typeof Uint8Array > "u" ? te : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? te : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? te : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? te : Uint32Array,
  "%URIError%": x0,
  "%WeakMap%": typeof WeakMap > "u" ? te : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? te : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? te : WeakSet
};
if (ke)
  try {
    null.error;
  } catch (t) {
    var C0 = ke(ke(t));
    pr["%Error.prototype%"] = C0;
  }
var E0 = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = Jo("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = Jo("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = Jo("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var a = t("%AsyncGenerator%");
    a && ke && (r = ke(a.prototype));
  }
  return pr[e] = r, r;
}, rc = {
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
}, la = Ml, wi = g0, k0 = la.call(Function.call, Array.prototype.concat), _0 = la.call(Function.apply, Array.prototype.splice), nc = la.call(Function.call, String.prototype.replace), xi = la.call(Function.call, String.prototype.slice), P0 = la.call(Function.call, RegExp.prototype.exec), T0 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, $0 = /\\(\\)?/g, I0 = function(e) {
  var r = xi(e, 0, 1), n = xi(e, -1);
  if (r === "%" && n !== "%")
    throw new Gr("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new Gr("invalid intrinsic syntax, expected opening `%`");
  var a = [];
  return nc(e, T0, function(i, o, s, u) {
    a[a.length] = s ? nc(u, $0, "$1") : o || i;
  }), a;
}, D0 = function(e, r) {
  var n = e, a;
  if (wi(rc, n) && (a = rc[n], n = "%" + a[0] + "%"), wi(pr, n)) {
    var i = pr[n];
    if (i === Fr && (i = E0(n)), typeof i > "u" && !r)
      throw new Ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: a,
      name: n,
      value: i
    };
  }
  throw new Gr("intrinsic " + e + " does not exist!");
}, yr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Ur("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Ur('"allowMissing" argument must be a boolean');
  if (P0(/^%?[^%]*%?$/, e) === null)
    throw new Gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = I0(e), a = n.length > 0 ? n[0] : "", i = D0("%" + a + "%", r), o = i.name, s = i.value, u = !1, c = i.alias;
  c && (a = c[0], _0(n, k0([0, 1], c)));
  for (var f = 1, d = !0; f < n.length; f += 1) {
    var y = n[f], A = xi(y, 0, 1), m = xi(y, -1);
    if ((A === '"' || A === "'" || A === "`" || m === '"' || m === "'" || m === "`") && A !== m)
      throw new Gr("property names with quotes must have matching quotes");
    if ((y === "constructor" || !d) && (u = !0), a += "." + y, o = "%" + a + "%", wi(pr, o))
      s = pr[o];
    else if (s != null) {
      if (!(y in s)) {
        if (!r)
          throw new Ur("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (dr && f + 1 >= n.length) {
        var x = dr(s, y);
        d = !!x, d && "get" in x && !("originalValue" in x.get) ? s = x.get : s = s[y];
      } else
        d = wi(s, y), s = s[y];
      d && !u && (pr[o] = s);
    }
  }
  return s;
}, ud = { exports: {} }, R0 = yr, Ms = R0("%Object.defineProperty%", !0), Bs = function() {
  if (Ms)
    try {
      return Ms({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
Bs.hasArrayLengthDefineBug = function() {
  if (!Bs())
    return null;
  try {
    return Ms([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var cd = Bs, L0 = yr, ui = L0("%Object.getOwnPropertyDescriptor%", !0);
if (ui)
  try {
    ui([], "length");
  } catch {
    ui = null;
  }
var fd = ui, N0 = cd(), F0 = yr, Nn = N0 && F0("%Object.defineProperty%", !0);
if (Nn)
  try {
    Nn({}, "a", { value: 1 });
  } catch {
    Nn = !1;
  }
var M0 = sd, Lr = sa, ac = fd, B0 = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Lr("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Lr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Lr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Lr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Lr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Lr("`loose`, if provided, must be a boolean");
  var a = arguments.length > 3 ? arguments[3] : null, i = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, s = arguments.length > 6 ? arguments[6] : !1, u = !!ac && ac(e, r);
  if (Nn)
    Nn(e, r, {
      configurable: o === null && u ? u.configurable : !o,
      enumerable: a === null && u ? u.enumerable : !a,
      value: n,
      writable: i === null && u ? u.writable : !i
    });
  else if (s || !a && !i && !o)
    e[r] = n;
  else
    throw new M0("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, j0 = yr, ic = B0, z0 = cd(), oc = fd, sc = sa, U0 = j0("%Math.floor%"), V0 = function(e, r) {
  if (typeof e != "function")
    throw new sc("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || U0(r) !== r)
    throw new sc("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], a = !0, i = !0;
  if ("length" in e && oc) {
    var o = oc(e, "length");
    o && !o.configurable && (a = !1), o && !o.writable && (i = !1);
  }
  return (a || i || !n) && (z0 ? ic(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r,
    !0,
    !0
  ) : ic(
    /** @type {Parameters<define>[0]} */
    e,
    "length",
    r
  )), e;
};
(function(t) {
  var e = Ml, r = yr, n = V0, a = sa, i = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), s = r("%Reflect.apply%", !0) || e.call(o, i), u = r("%Object.defineProperty%", !0), c = r("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  t.exports = function(y) {
    if (typeof y != "function")
      throw new a("a function is required");
    var A = s(e, o, arguments);
    return n(
      A,
      1 + c(0, y.length - (arguments.length - 1)),
      !0
    );
  };
  var f = function() {
    return s(e, i, arguments);
  };
  u ? u(t.exports, "apply", { value: f }) : t.exports.apply = f;
})(ud);
var H0 = ud.exports, dd = yr, pd = H0, q0 = pd(dd("String.prototype.indexOf")), W0 = function(e, r) {
  var n = dd(e, !!r);
  return typeof n == "function" && q0(e, ".prototype.") > -1 ? pd(n) : n;
};
const G0 = {}, Y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G0
}, Symbol.toStringTag, { value: "Module" })), Be = /* @__PURE__ */ Dv(Y0);
var Bl = typeof Map == "function" && Map.prototype, Qo = Object.getOwnPropertyDescriptor && Bl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Si = Bl && Qo && typeof Qo.get == "function" ? Qo.get : null, lc = Bl && Map.prototype.forEach, jl = typeof Set == "function" && Set.prototype, Zo = Object.getOwnPropertyDescriptor && jl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Oi = jl && Zo && typeof Zo.get == "function" ? Zo.get : null, uc = jl && Set.prototype.forEach, K0 = typeof WeakMap == "function" && WeakMap.prototype, Fn = K0 ? WeakMap.prototype.has : null, J0 = typeof WeakSet == "function" && WeakSet.prototype, Mn = J0 ? WeakSet.prototype.has : null, X0 = typeof WeakRef == "function" && WeakRef.prototype, cc = X0 ? WeakRef.prototype.deref : null, Q0 = Boolean.prototype.valueOf, Z0 = Object.prototype.toString, eb = Function.prototype.toString, tb = String.prototype.match, zl = String.prototype.slice, Ut = String.prototype.replace, rb = String.prototype.toUpperCase, fc = String.prototype.toLowerCase, hd = RegExp.prototype.test, dc = Array.prototype.concat, dt = Array.prototype.join, nb = Array.prototype.slice, pc = Math.floor, js = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, es = Object.getOwnPropertySymbols, zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, Yr = typeof Symbol == "function" && typeof Symbol.iterator == "object", Re = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Yr || "symbol") ? Symbol.toStringTag : null, md = Object.prototype.propertyIsEnumerable, hc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function mc(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || hd.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -pc(-t) : pc(t);
    if (n !== t) {
      var a = String(n), i = zl.call(e, a.length + 1);
      return Ut.call(a, r, "$&_") + "." + Ut.call(Ut.call(i, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ut.call(e, r, "$&_");
}
var Us = Be, gc = Us.custom, yc = yd(gc) ? gc : null, ab = function t(e, r, n, a) {
  var i = r || {};
  if (jt(i, "quoteStyle") && i.quoteStyle !== "single" && i.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (jt(i, "maxStringLength") && (typeof i.maxStringLength == "number" ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0 : i.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = jt(i, "customInspect") ? i.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (jt(i, "indent") && i.indent !== null && i.indent !== "	" && !(parseInt(i.indent, 10) === i.indent && i.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (jt(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var s = i.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return bd(e, i);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return s ? mc(e, u) : u;
  }
  if (typeof e == "bigint") {
    var c = String(e) + "n";
    return s ? mc(e, c) : c;
  }
  var f = typeof i.depth > "u" ? 5 : i.depth;
  if (typeof n > "u" && (n = 0), n >= f && f > 0 && typeof e == "object")
    return Vs(e) ? "[Array]" : "[Object]";
  var d = Sb(i, n);
  if (typeof a > "u")
    a = [];
  else if (vd(a, e) >= 0)
    return "[Circular]";
  function y(v, w, g) {
    if (w && (a = nb.call(a), a.push(w)), g) {
      var z = {
        depth: i.depth
      };
      return jt(i, "quoteStyle") && (z.quoteStyle = i.quoteStyle), t(v, z, n + 1, a);
    }
    return t(v, i, n + 1, a);
  }
  if (typeof e == "function" && !vc(e)) {
    var A = pb(e), m = Va(e, y);
    return "[Function" + (A ? ": " + A : " (anonymous)") + "]" + (m.length > 0 ? " { " + dt.call(m, ", ") + " }" : "");
  }
  if (yd(e)) {
    var x = Yr ? Ut.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : zs.call(e);
    return typeof e == "object" && !Yr ? On(x) : x;
  }
  if (bb(e)) {
    for (var S = "<" + fc.call(String(e.nodeName)), O = e.attributes || [], P = 0; P < O.length; P++)
      S += " " + O[P].name + "=" + gd(ib(O[P].value), "double", i);
    return S += ">", e.childNodes && e.childNodes.length && (S += "..."), S += "</" + fc.call(String(e.nodeName)) + ">", S;
  }
  if (Vs(e)) {
    if (e.length === 0)
      return "[]";
    var _ = Va(e, y);
    return d && !xb(_) ? "[" + Hs(_, d) + "]" : "[ " + dt.call(_, ", ") + " ]";
  }
  if (sb(e)) {
    var T = Va(e, y);
    return !("cause" in Error.prototype) && "cause" in e && !md.call(e, "cause") ? "{ [" + String(e) + "] " + dt.call(dc.call("[cause]: " + y(e.cause), T), ", ") + " }" : T.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + dt.call(T, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (yc && typeof e[yc] == "function" && Us)
      return Us(e, { depth: f - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (hb(e)) {
    var L = [];
    return lc && lc.call(e, function(v, w) {
      L.push(y(w, e, !0) + " => " + y(v, e));
    }), bc("Map", Si.call(e), L, d);
  }
  if (yb(e)) {
    var R = [];
    return uc && uc.call(e, function(v) {
      R.push(y(v, e));
    }), bc("Set", Oi.call(e), R, d);
  }
  if (mb(e))
    return ts("WeakMap");
  if (vb(e))
    return ts("WeakSet");
  if (gb(e))
    return ts("WeakRef");
  if (ub(e))
    return On(y(Number(e)));
  if (fb(e))
    return On(y(js.call(e)));
  if (cb(e))
    return On(Q0.call(e));
  if (lb(e))
    return On(y(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === at)
    return "{ [object globalThis] }";
  if (!ob(e) && !vc(e)) {
    var M = Va(e, y), j = hc ? hc(e) === Object.prototype : e instanceof Object || e.constructor === Object, B = e instanceof Object ? "" : "null prototype", D = !j && Re && Object(e) === e && Re in e ? zl.call(Kt(e), 8, -1) : B ? "Object" : "", H = j || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", h = H + (D || B ? "[" + dt.call(dc.call([], D || [], B || []), ": ") + "] " : "");
    return M.length === 0 ? h + "{}" : d ? h + "{" + Hs(M, d) + "}" : h + "{ " + dt.call(M, ", ") + " }";
  }
  return String(e);
};
function gd(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function ib(t) {
  return Ut.call(String(t), /"/g, "&quot;");
}
function Vs(t) {
  return Kt(t) === "[object Array]" && (!Re || !(typeof t == "object" && Re in t));
}
function ob(t) {
  return Kt(t) === "[object Date]" && (!Re || !(typeof t == "object" && Re in t));
}
function vc(t) {
  return Kt(t) === "[object RegExp]" && (!Re || !(typeof t == "object" && Re in t));
}
function sb(t) {
  return Kt(t) === "[object Error]" && (!Re || !(typeof t == "object" && Re in t));
}
function lb(t) {
  return Kt(t) === "[object String]" && (!Re || !(typeof t == "object" && Re in t));
}
function ub(t) {
  return Kt(t) === "[object Number]" && (!Re || !(typeof t == "object" && Re in t));
}
function cb(t) {
  return Kt(t) === "[object Boolean]" && (!Re || !(typeof t == "object" && Re in t));
}
function yd(t) {
  if (Yr)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !zs)
    return !1;
  try {
    return zs.call(t), !0;
  } catch {
  }
  return !1;
}
function fb(t) {
  if (!t || typeof t != "object" || !js)
    return !1;
  try {
    return js.call(t), !0;
  } catch {
  }
  return !1;
}
var db = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function jt(t, e) {
  return db.call(t, e);
}
function Kt(t) {
  return Z0.call(t);
}
function pb(t) {
  if (t.name)
    return t.name;
  var e = tb.call(eb.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function vd(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function hb(t) {
  if (!Si || !t || typeof t != "object")
    return !1;
  try {
    Si.call(t);
    try {
      Oi.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function mb(t) {
  if (!Fn || !t || typeof t != "object")
    return !1;
  try {
    Fn.call(t, Fn);
    try {
      Mn.call(t, Mn);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function gb(t) {
  if (!cc || !t || typeof t != "object")
    return !1;
  try {
    return cc.call(t), !0;
  } catch {
  }
  return !1;
}
function yb(t) {
  if (!Oi || !t || typeof t != "object")
    return !1;
  try {
    Oi.call(t);
    try {
      Si.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function vb(t) {
  if (!Mn || !t || typeof t != "object")
    return !1;
  try {
    Mn.call(t, Mn);
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
function bb(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function bd(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return bd(zl.call(t, 0, e.maxStringLength), e) + n;
  }
  var a = Ut.call(Ut.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, wb);
  return gd(a, "single", e);
}
function wb(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + rb.call(e.toString(16));
}
function On(t) {
  return "Object(" + t + ")";
}
function ts(t) {
  return t + " { ? }";
}
function bc(t, e, r, n) {
  var a = n ? Hs(r, n) : dt.call(r, ", ");
  return t + " (" + e + ") {" + a + "}";
}
function xb(t) {
  for (var e = 0; e < t.length; e++)
    if (vd(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Sb(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = dt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: dt.call(Array(e + 1), r)
  };
}
function Hs(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + dt.call(t, "," + r) + `
` + e.prev;
}
function Va(t, e) {
  var r = Vs(t), n = [];
  if (r) {
    n.length = t.length;
    for (var a = 0; a < t.length; a++)
      n[a] = jt(t, a) ? e(t[a], t) : "";
  }
  var i = typeof es == "function" ? es(t) : [], o;
  if (Yr) {
    o = {};
    for (var s = 0; s < i.length; s++)
      o["$" + i[s]] = i[s];
  }
  for (var u in t)
    jt(t, u) && (r && String(Number(u)) === u && u < t.length || Yr && o["$" + u] instanceof Symbol || (hd.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
  if (typeof es == "function")
    for (var c = 0; c < i.length; c++)
      md.call(t, i[c]) && n.push("[" + e(i[c]) + "]: " + e(t[i[c]], t));
  return n;
}
var wd = yr, rn = W0, Ob = ab, Ab = sa, Ha = wd("%WeakMap%", !0), qa = wd("%Map%", !0), Cb = rn("WeakMap.prototype.get", !0), Eb = rn("WeakMap.prototype.set", !0), kb = rn("WeakMap.prototype.has", !0), _b = rn("Map.prototype.get", !0), Pb = rn("Map.prototype.set", !0), Tb = rn("Map.prototype.has", !0), Ul = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, $b = function(t, e) {
  var r = Ul(t, e);
  return r && r.value;
}, Ib = function(t, e, r) {
  var n = Ul(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, Db = function(t, e) {
  return !!Ul(t, e);
}, Rb = function() {
  var e, r, n, a = {
    assert: function(i) {
      if (!a.has(i))
        throw new Ab("Side channel does not contain " + Ob(i));
    },
    get: function(i) {
      if (Ha && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return Cb(e, i);
      } else if (qa) {
        if (r)
          return _b(r, i);
      } else if (n)
        return $b(n, i);
    },
    has: function(i) {
      if (Ha && i && (typeof i == "object" || typeof i == "function")) {
        if (e)
          return kb(e, i);
      } else if (qa) {
        if (r)
          return Tb(r, i);
      } else if (n)
        return Db(n, i);
      return !1;
    },
    set: function(i, o) {
      Ha && i && (typeof i == "object" || typeof i == "function") ? (e || (e = new Ha()), Eb(e, i, o)) : qa ? (r || (r = new qa()), Pb(r, i, o)) : (n || (n = { key: {}, next: null }), Ib(n, i, o));
    }
  };
  return a;
}, Lb = String.prototype.replace, Nb = /%20/g, rs = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Vl = {
  default: rs.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Lb.call(t, Nb, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: rs.RFC1738,
  RFC3986: rs.RFC3986
}, Fb = Vl, ns = Object.prototype.hasOwnProperty, sr = Array.isArray, ct = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Mb = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (sr(n)) {
      for (var a = [], i = 0; i < n.length; ++i)
        typeof n[i] < "u" && a.push(n[i]);
      r.obj[r.prop] = a;
    }
  }
}, xd = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, a = 0; a < e.length; ++a)
    typeof e[a] < "u" && (n[a] = e[a]);
  return n;
}, Bb = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (sr(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !ns.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var a = e;
  return sr(e) && !sr(r) && (a = xd(e, n)), sr(e) && sr(r) ? (r.forEach(function(i, o) {
    if (ns.call(e, o)) {
      var s = e[o];
      s && typeof s == "object" && i && typeof i == "object" ? e[o] = t(s, i, n) : e.push(i);
    } else
      e[o] = i;
  }), e) : Object.keys(r).reduce(function(i, o) {
    var s = r[o];
    return ns.call(i, o) ? i[o] = t(i[o], s, n) : i[o] = s, i;
  }, a);
}, jb = function(e, r) {
  return Object.keys(r).reduce(function(n, a) {
    return n[a] = r[a], n;
  }, e);
}, zb = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, Ub = function(e, r, n, a, i) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(f) {
      return "%26%23" + parseInt(f.slice(2), 16) + "%3B";
    });
  for (var s = "", u = 0; u < o.length; ++u) {
    var c = o.charCodeAt(u);
    if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || i === Fb.RFC1738 && (c === 40 || c === 41)) {
      s += o.charAt(u);
      continue;
    }
    if (c < 128) {
      s = s + ct[c];
      continue;
    }
    if (c < 2048) {
      s = s + (ct[192 | c >> 6] + ct[128 | c & 63]);
      continue;
    }
    if (c < 55296 || c >= 57344) {
      s = s + (ct[224 | c >> 12] + ct[128 | c >> 6 & 63] + ct[128 | c & 63]);
      continue;
    }
    u += 1, c = 65536 + ((c & 1023) << 10 | o.charCodeAt(u) & 1023), s += ct[240 | c >> 18] + ct[128 | c >> 12 & 63] + ct[128 | c >> 6 & 63] + ct[128 | c & 63];
  }
  return s;
}, Vb = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], a = 0; a < r.length; ++a)
    for (var i = r[a], o = i.obj[i.prop], s = Object.keys(o), u = 0; u < s.length; ++u) {
      var c = s[u], f = o[c];
      typeof f == "object" && f !== null && n.indexOf(f) === -1 && (r.push({ obj: o, prop: c }), n.push(f));
    }
  return Mb(r), e;
}, Hb = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, qb = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, Wb = function(e, r) {
  return [].concat(e, r);
}, Gb = function(e, r) {
  if (sr(e)) {
    for (var n = [], a = 0; a < e.length; a += 1)
      n.push(r(e[a]));
    return n;
  }
  return r(e);
}, Sd = {
  arrayToObject: xd,
  assign: jb,
  combine: Wb,
  compact: Vb,
  decode: zb,
  encode: Ub,
  isBuffer: qb,
  isRegExp: Hb,
  maybeMap: Gb,
  merge: Bb
}, Od = Rb, ci = Sd, Bn = Vl, Yb = Object.prototype.hasOwnProperty, wc = {
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
}, Et = Array.isArray, Kb = Array.prototype.push, Ad = function(t, e) {
  Kb.apply(t, Et(e) ? e : [e]);
}, Jb = Date.prototype.toISOString, xc = Bn.default, De = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: ci.encode,
  encodeValuesOnly: !1,
  format: xc,
  formatter: Bn.formatters[xc],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return Jb.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Xb = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, as = {}, Qb = function t(e, r, n, a, i, o, s, u, c, f, d, y, A, m, x, S) {
  for (var O = e, P = S, _ = 0, T = !1; (P = P.get(as)) !== void 0 && !T; ) {
    var L = P.get(e);
    if (_ += 1, typeof L < "u") {
      if (L === _)
        throw new RangeError("Cyclic object value");
      T = !0;
    }
    typeof P.get(as) > "u" && (_ = 0);
  }
  if (typeof u == "function" ? O = u(r, O) : O instanceof Date ? O = d(O) : n === "comma" && Et(O) && (O = ci.maybeMap(O, function(z) {
    return z instanceof Date ? d(z) : z;
  })), O === null) {
    if (i)
      return s && !m ? s(r, De.encoder, x, "key", y) : r;
    O = "";
  }
  if (Xb(O) || ci.isBuffer(O)) {
    if (s) {
      var R = m ? r : s(r, De.encoder, x, "key", y);
      return [A(R) + "=" + A(s(O, De.encoder, x, "value", y))];
    }
    return [A(r) + "=" + A(String(O))];
  }
  var M = [];
  if (typeof O > "u")
    return M;
  var j;
  if (n === "comma" && Et(O))
    m && s && (O = ci.maybeMap(O, s)), j = [{ value: O.length > 0 ? O.join(",") || null : void 0 }];
  else if (Et(u))
    j = u;
  else {
    var B = Object.keys(O);
    j = c ? B.sort(c) : B;
  }
  for (var D = a && Et(O) && O.length === 1 ? r + "[]" : r, H = 0; H < j.length; ++H) {
    var h = j[H], v = typeof h == "object" && typeof h.value < "u" ? h.value : O[h];
    if (!(o && v === null)) {
      var w = Et(O) ? typeof n == "function" ? n(D, h) : D : D + (f ? "." + h : "[" + h + "]");
      S.set(e, _);
      var g = Od();
      g.set(as, S), Ad(M, t(
        v,
        w,
        n,
        a,
        i,
        o,
        n === "comma" && m && Et(O) ? null : s,
        u,
        c,
        f,
        d,
        y,
        A,
        m,
        x,
        g
      ));
    }
  }
  return M;
}, Zb = function(e) {
  if (!e)
    return De;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || De.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Bn.default;
  if (typeof e.format < "u") {
    if (!Yb.call(Bn.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var a = Bn.formatters[n], i = De.filter;
  return (typeof e.filter == "function" || Et(e.filter)) && (i = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : De.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? De.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : De.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? De.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : De.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : De.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : De.encodeValuesOnly,
    filter: i,
    format: n,
    formatter: a,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : De.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : De.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : De.strictNullHandling
  };
}, e1 = function(t, e) {
  var r = t, n = Zb(e), a, i;
  typeof n.filter == "function" ? (i = n.filter, r = i("", r)) : Et(n.filter) && (i = n.filter, a = i);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var s;
  e && e.arrayFormat in wc ? s = e.arrayFormat : e && "indices" in e ? s = e.indices ? "indices" : "repeat" : s = "indices";
  var u = wc[s];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var c = u === "comma" && e && e.commaRoundTrip;
  a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
  for (var f = Od(), d = 0; d < a.length; ++d) {
    var y = a[d];
    n.skipNulls && r[y] === null || Ad(o, Qb(
      r[y],
      y,
      u,
      c,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      f
    ));
  }
  var A = o.join(n.delimiter), m = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? m += "utf8=%26%2310003%3B&" : m += "utf8=%E2%9C%93&"), A.length > 0 ? m + A : "";
}, Kr = Sd, qs = Object.prototype.hasOwnProperty, t1 = Array.isArray, Ee = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: Kr.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, r1 = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Cd = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, n1 = "utf8=%26%2310003%3B", a1 = "utf8=%E2%9C%93", i1 = function(e, r) {
  var n = { __proto__: null }, a = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, i = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = a.split(r.delimiter, i), s = -1, u, c = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === a1 ? c = "utf-8" : o[u] === n1 && (c = "iso-8859-1"), s = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== s) {
      var f = o[u], d = f.indexOf("]="), y = d === -1 ? f.indexOf("=") : d + 1, A, m;
      y === -1 ? (A = r.decoder(f, Ee.decoder, c, "key"), m = r.strictNullHandling ? null : "") : (A = r.decoder(f.slice(0, y), Ee.decoder, c, "key"), m = Kr.maybeMap(
        Cd(f.slice(y + 1), r),
        function(x) {
          return r.decoder(x, Ee.decoder, c, "value");
        }
      )), m && r.interpretNumericEntities && c === "iso-8859-1" && (m = r1(m)), f.indexOf("[]=") > -1 && (m = t1(m) ? [m] : m), qs.call(n, A) ? n[A] = Kr.combine(n[A], m) : n[A] = m;
    }
  return n;
}, o1 = function(t, e, r, n) {
  for (var a = n ? e : Cd(e, r), i = t.length - 1; i >= 0; --i) {
    var o, s = t[i];
    if (s === "[]" && r.parseArrays)
      o = [].concat(a);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = s.charAt(0) === "[" && s.charAt(s.length - 1) === "]" ? s.slice(1, -1) : s, c = parseInt(u, 10);
      !r.parseArrays && u === "" ? o = { 0: a } : !isNaN(c) && s !== u && String(c) === u && c >= 0 && r.parseArrays && c <= r.arrayLimit ? (o = [], o[c] = a) : u !== "__proto__" && (o[u] = a);
    }
    a = o;
  }
  return a;
}, s1 = function(e, r, n, a) {
  if (e) {
    var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, s = /(\[[^[\]]*])/g, u = n.depth > 0 && o.exec(i), c = u ? i.slice(0, u.index) : i, f = [];
    if (c) {
      if (!n.plainObjects && qs.call(Object.prototype, c) && !n.allowPrototypes)
        return;
      f.push(c);
    }
    for (var d = 0; n.depth > 0 && (u = s.exec(i)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && qs.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      f.push(u[1]);
    }
    return u && f.push("[" + i.slice(u.index) + "]"), o1(f, r, n, a);
  }
}, l1 = function(e) {
  if (!e)
    return Ee;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? Ee.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? Ee.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Ee.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Ee.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Ee.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ee.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : Ee.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : Ee.decoder,
    delimiter: typeof e.delimiter == "string" || Kr.isRegExp(e.delimiter) ? e.delimiter : Ee.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Ee.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Ee.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Ee.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Ee.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ee.strictNullHandling
  };
}, u1 = function(t, e) {
  var r = l1(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? i1(t, r) : t, a = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = Object.keys(n), o = 0; o < i.length; ++o) {
    var s = i[o], u = s1(s, n[s], r, typeof t == "string");
    a = Kr.merge(a, u, r);
  }
  return r.allowSparse === !0 ? a : Kr.compact(a);
}, c1 = e1, f1 = u1, d1 = Vl, Sc = {
  formats: d1,
  parse: f1,
  stringify: c1
}, p1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(at, function() {
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
    r.configure = function(m) {
      var x, S;
      for (x in m)
        S = m[x], S !== void 0 && m.hasOwnProperty(x) && (n[x] = S);
      return this;
    }, r.status = null, r.set = function(m) {
      var x = r.isStarted();
      m = a(m, n.minimum, 1), r.status = m === 1 ? null : m;
      var S = r.render(!x), O = S.querySelector(n.barSelector), P = n.speed, _ = n.easing;
      return S.offsetWidth, s(function(T) {
        n.positionUsing === "" && (n.positionUsing = r.getPositioningCSS()), u(O, o(m, P, _)), m === 1 ? (u(S, {
          transition: "none",
          opacity: 1
        }), S.offsetWidth, setTimeout(function() {
          u(S, {
            transition: "all " + P + "ms linear",
            opacity: 0
          }), setTimeout(function() {
            r.remove(), T();
          }, P);
        }, P)) : setTimeout(T, P);
      }), this;
    }, r.isStarted = function() {
      return typeof r.status == "number";
    }, r.start = function() {
      r.status || r.set(0);
      var m = function() {
        setTimeout(function() {
          r.status && (r.trickle(), m());
        }, n.trickleSpeed);
      };
      return n.trickle && m(), this;
    }, r.done = function(m) {
      return !m && !r.status ? this : r.inc(0.3 + 0.5 * Math.random()).set(1);
    }, r.inc = function(m) {
      var x = r.status;
      return x ? (typeof m != "number" && (m = (1 - x) * a(Math.random() * x, 0.1, 0.95)), x = a(x + m, 0, 0.994), r.set(x)) : r.start();
    }, r.trickle = function() {
      return r.inc(Math.random() * n.trickleRate);
    }, function() {
      var m = 0, x = 0;
      r.promise = function(S) {
        return !S || S.state() === "resolved" ? this : (x === 0 && r.start(), m++, x++, S.always(function() {
          x--, x === 0 ? (m = 0, r.done()) : r.set((m - x) / m);
        }), this);
      };
    }(), r.render = function(m) {
      if (r.isRendered())
        return document.getElementById("nprogress");
      f(document.documentElement, "nprogress-busy");
      var x = document.createElement("div");
      x.id = "nprogress", x.innerHTML = n.template;
      var S = x.querySelector(n.barSelector), O = m ? "-100" : i(r.status || 0), P = document.querySelector(n.parent), _;
      return u(S, {
        transition: "all 0 linear",
        transform: "translate3d(" + O + "%,0,0)"
      }), n.showSpinner || (_ = x.querySelector(n.spinnerSelector), _ && A(_)), P != document.body && f(P, "nprogress-custom-parent"), P.appendChild(x), x;
    }, r.remove = function() {
      d(document.documentElement, "nprogress-busy"), d(document.querySelector(n.parent), "nprogress-custom-parent");
      var m = document.getElementById("nprogress");
      m && A(m);
    }, r.isRendered = function() {
      return !!document.getElementById("nprogress");
    }, r.getPositioningCSS = function() {
      var m = document.body.style, x = "WebkitTransform" in m ? "Webkit" : "MozTransform" in m ? "Moz" : "msTransform" in m ? "ms" : "OTransform" in m ? "O" : "";
      return x + "Perspective" in m ? "translate3d" : x + "Transform" in m ? "translate" : "margin";
    };
    function a(m, x, S) {
      return m < x ? x : m > S ? S : m;
    }
    function i(m) {
      return (-1 + m) * 100;
    }
    function o(m, x, S) {
      var O;
      return n.positionUsing === "translate3d" ? O = { transform: "translate3d(" + i(m) + "%,0,0)" } : n.positionUsing === "translate" ? O = { transform: "translate(" + i(m) + "%,0)" } : O = { "margin-left": i(m) + "%" }, O.transition = "all " + x + "ms " + S, O;
    }
    var s = function() {
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
      function S(T) {
        return T.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(L, R) {
          return R.toUpperCase();
        });
      }
      function O(T) {
        var L = document.body.style;
        if (T in L)
          return T;
        for (var R = m.length, M = T.charAt(0).toUpperCase() + T.slice(1), j; R--; )
          if (j = m[R] + M, j in L)
            return j;
        return T;
      }
      function P(T) {
        return T = S(T), x[T] || (x[T] = O(T));
      }
      function _(T, L, R) {
        L = P(L), T.style[L] = R;
      }
      return function(T, L) {
        var R = arguments, M, j;
        if (R.length == 2)
          for (M in L)
            j = L[M], j !== void 0 && L.hasOwnProperty(M) && _(T, M, j);
        else
          _(T, R[1], R[2]);
      };
    }();
    function c(m, x) {
      var S = typeof m == "string" ? m : y(m);
      return S.indexOf(" " + x + " ") >= 0;
    }
    function f(m, x) {
      var S = y(m), O = S + x;
      c(S, x) || (m.className = O.substring(1));
    }
    function d(m, x) {
      var S = y(m), O;
      c(m, x) && (O = S.replace(" " + x + " ", " "), m.className = O.substring(1, O.length - 1));
    }
    function y(m) {
      return (" " + (m.className || "") + " ").replace(/\s+/gi, " ");
    }
    function A(m) {
      m && m.parentNode && m.parentNode.removeChild(m);
    }
    return r;
  });
})(p1);
function Ed(t, e) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => t.apply(this, n), e);
  };
}
function Dt(t, e) {
  return document.dispatchEvent(new CustomEvent(`inertia:${t}`, e));
}
var h1 = (t) => Dt("before", { cancelable: !0, detail: { visit: t } }), m1 = (t) => Dt("error", { detail: { errors: t } }), g1 = (t) => Dt("exception", { cancelable: !0, detail: { exception: t } }), Oc = (t) => Dt("finish", { detail: { visit: t } }), y1 = (t) => Dt("invalid", { cancelable: !0, detail: { response: t } }), An = (t) => Dt("navigate", { detail: { page: t } }), v1 = (t) => Dt("progress", { detail: { progress: t } }), b1 = (t) => Dt("start", { detail: { visit: t } }), w1 = (t) => Dt("success", { detail: { page: t } });
function Ws(t) {
  return t instanceof File || t instanceof Blob || t instanceof FileList && t.length > 0 || t instanceof FormData && Array.from(t.values()).some((e) => Ws(e)) || typeof t == "object" && t !== null && Object.values(t).some((e) => Ws(e));
}
function kd(t, e = new FormData(), r = null) {
  t = t || {};
  for (let n in t)
    Object.prototype.hasOwnProperty.call(t, n) && Pd(e, _d(r, n), t[n]);
  return e;
}
function _d(t, e) {
  return t ? t + "[" + e + "]" : e;
}
function Pd(t, e, r) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach((n) => Pd(t, _d(e, n.toString()), r[n]));
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
  kd(r, t, e);
}
var x1 = { modal: null, listener: null, show(t) {
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
function Nr(t) {
  return new URL(t.toString(), window.location.toString());
}
function Hl(t, e, r, n = "brackets") {
  let a = /^https?:\/\//.test(e.toString()), i = a || e.toString().startsWith("/"), o = !i && !e.toString().startsWith("#") && !e.toString().startsWith("?"), s = e.toString().includes("?") || t === "get" && Object.keys(r).length, u = e.toString().includes("#"), c = new URL(e.toString(), "http://localhost");
  return t === "get" && Object.keys(r).length && (c.search = Sc.stringify(Yv(Sc.parse(c.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[a ? `${c.protocol}//${c.host}` : "", i ? c.pathname : "", o ? c.pathname.substring(1) : "", s ? c.search : "", u ? c.hash : ""].join(""), r];
}
function Cn(t) {
  return t = new URL(t.href), t.hash = "", t;
}
var Ac = typeof window > "u", S1 = class {
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
    this.page.url += window.location.hash, this.setPage(t, { preserveState: !0 }).then(() => An(t));
  }
  setupEventListeners() {
    window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), document.addEventListener("scroll", Ed(this.handleScrollEvent.bind(this), 100), !0);
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
      this.restoreScrollPositions(), An(t);
    });
  }
  locationVisit(t, e) {
    try {
      let r = { preserveScroll: e };
      window.sessionStorage.setItem("inertiaLocationVisit", JSON.stringify(r)), window.location.href = t.href, Cn(window.location).href === Cn(t).href && window.location.reload();
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
      e.preserveScroll && this.restoreScrollPositions(), An(t);
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
    t && !t.completed && !t.cancelled && !t.interrupted && (t.cancelToken.abort(), t.onCancel(), t.completed = !1, t.cancelled = e, t.interrupted = r, Oc(t), t.onFinish(t));
  }
  finishVisit(t) {
    !t.cancelled && !t.interrupted && (t.completed = !0, t.cancelled = !1, t.interrupted = !1, Oc(t), t.onFinish(t));
  }
  resolvePreserveOption(t, e) {
    return typeof t == "function" ? t(e) : t === "errors" ? Object.keys(e.props.errors || {}).length > 0 : t;
  }
  cancel() {
    this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
  }
  visit(t, { method: e = "get", data: r = {}, replace: n = !1, preserveScroll: a = !1, preserveState: i = !1, only: o = [], headers: s = {}, errorBag: u = "", forceFormData: c = !1, onCancelToken: f = () => {
  }, onBefore: d = () => {
  }, onStart: y = () => {
  }, onProgress: A = () => {
  }, onFinish: m = () => {
  }, onCancel: x = () => {
  }, onSuccess: S = () => {
  }, onError: O = () => {
  }, queryStringArrayFormat: P = "brackets" } = {}) {
    let _ = typeof t == "string" ? Nr(t) : t;
    if ((Ws(r) || c) && !(r instanceof FormData) && (r = kd(r)), !(r instanceof FormData)) {
      let [R, M] = Hl(e, _, r, P);
      _ = Nr(R), r = M;
    }
    let T = { url: _, method: e, data: r, replace: n, preserveScroll: a, preserveState: i, only: o, headers: s, errorBag: u, forceFormData: c, queryStringArrayFormat: P, cancelled: !1, completed: !1, interrupted: !1 };
    if (d(T) === !1 || !h1(T))
      return;
    this.activeVisit && this.cancelVisit(this.activeVisit, { interrupted: !0 }), this.saveScrollPositions();
    let L = this.createVisitId();
    this.activeVisit = { ...T, onCancelToken: f, onBefore: d, onStart: y, onProgress: A, onFinish: m, onCancel: x, onSuccess: S, onError: O, queryStringArrayFormat: P, cancelToken: new AbortController() }, f({ cancel: () => {
      this.activeVisit && this.cancelVisit(this.activeVisit, { cancelled: !0 });
    } }), b1(T), y(T), Xu({ method: e, url: Cn(_).href, data: e === "get" ? {} : r, params: e === "get" ? r : {}, signal: this.activeVisit.cancelToken.signal, headers: { ...s, Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0, ...o.length ? { "X-Inertia-Partial-Component": this.page.component, "X-Inertia-Partial-Data": o.join(",") } : {}, ...u && u.length ? { "X-Inertia-Error-Bag": u } : {}, ...this.page.version ? { "X-Inertia-Version": this.page.version } : {} }, onUploadProgress: (R) => {
      r instanceof FormData && (R.percentage = R.progress ? Math.round(R.progress * 100) : 0, v1(R), A(R));
    } }).then((R) => {
      var D;
      if (!this.isInertiaResponse(R))
        return Promise.reject({ response: R });
      let M = R.data;
      o.length && M.component === this.page.component && (M.props = { ...this.page.props, ...M.props }), a = this.resolvePreserveOption(a, M), i = this.resolvePreserveOption(i, M), i && ((D = window.history.state) != null && D.rememberedState) && M.component === this.page.component && (M.rememberedState = window.history.state.rememberedState);
      let j = _, B = Nr(M.url);
      return j.hash && !B.hash && Cn(j).href === B.href && (B.hash = j.hash, M.url = B.href), this.setPage(M, { visitId: L, replace: n, preserveScroll: a, preserveState: i });
    }).then(() => {
      let R = this.page.props.errors || {};
      if (Object.keys(R).length > 0) {
        let M = u ? R[u] ? R[u] : {} : R;
        return m1(M), O(M);
      }
      return w1(this.page), S(this.page);
    }).catch((R) => {
      if (this.isInertiaResponse(R.response))
        return this.setPage(R.response.data, { visitId: L });
      if (this.isLocationVisitResponse(R.response)) {
        let M = Nr(R.response.headers["x-inertia-location"]), j = _;
        j.hash && !M.hash && Cn(j).href === M.href && (M.hash = j.hash), this.locationVisit(M, a === !0);
      } else if (R.response)
        y1(R.response) && x1.show(R.response.data);
      else
        return Promise.reject(R);
    }).then(() => {
      this.activeVisit && this.finishVisit(this.activeVisit);
    }).catch((R) => {
      if (!Xu.isCancel(R)) {
        let M = g1(R);
        if (this.activeVisit && this.finishVisit(this.activeVisit), M)
          return Promise.reject(R);
      }
    });
  }
  setPage(t, { visitId: e = this.createVisitId(), replace: r = !1, preserveScroll: n = !1, preserveState: a = !1 } = {}) {
    return Promise.resolve(this.resolveComponent(t.component)).then((i) => {
      e === this.visitId && (t.scrollRegions = t.scrollRegions || [], t.rememberedState = t.rememberedState || {}, r = r || Nr(t.url).href === window.location.href, r ? this.replaceState(t) : this.pushState(t), this.swapComponent({ component: i, page: t, preserveState: a }).then(() => {
        n || this.resetScrollPositions(), r || An(t);
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
          this.restoreScrollPositions(), An(e);
        }));
      });
    } else {
      let e = Nr(this.page.url);
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
    Ac || this.replaceState({ ...this.page, rememberedState: { ...(r = this.page) == null ? void 0 : r.rememberedState, [e]: t } });
  }
  restore(t = "default") {
    var e, r;
    if (!Ac)
      return (r = (e = window.history.state) == null ? void 0 : e.rememberedState) == null ? void 0 : r[t];
  }
  on(t, e) {
    let r = (n) => {
      let a = e(n);
      n.cancelable && !n.defaultPrevented && a === !1 && n.preventDefault();
    };
    return document.addEventListener(`inertia:${t}`, r), () => document.removeEventListener(`inertia:${t}`, r);
  }
}, O1 = { buildDOMElement(t) {
  let e = document.createElement("template");
  e.innerHTML = t;
  let r = e.content.firstChild;
  if (!t.startsWith("<script "))
    return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((a) => {
    n.setAttribute(a, r.getAttribute(a) || "");
  }), n;
}, isInertiaManagedElement(t) {
  return t.nodeType === Node.ELEMENT_NODE && t.getAttribute("inertia") !== null;
}, findMatchingElementIndex(t, e) {
  let r = t.getAttribute("inertia");
  return r !== null ? e.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: Ed(function(t) {
  let e = t.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var i, o;
    let n = this.findMatchingElementIndex(r, e);
    if (n === -1) {
      (i = r == null ? void 0 : r.parentNode) == null || i.removeChild(r);
      return;
    }
    let a = e.splice(n, 1)[0];
    a && !r.isEqualNode(a) && ((o = r == null ? void 0 : r.parentNode) == null || o.replaceChild(a, r));
  }), e.forEach((r) => document.head.appendChild(r));
}, 1) };
function A1(t, e, r) {
  let n = {}, a = 0;
  function i() {
    let f = a += 1;
    return n[f] = [], f.toString();
  }
  function o(f) {
    f === null || Object.keys(n).indexOf(f) === -1 || (delete n[f], c());
  }
  function s(f, d = []) {
    f !== null && Object.keys(n).indexOf(f) > -1 && (n[f] = d), c();
  }
  function u() {
    let f = e(""), d = { ...f ? { title: `<title inertia="">${f}</title>` } : {} }, y = Object.values(n).reduce((A, m) => A.concat(m), []).reduce((A, m) => {
      if (m.indexOf("<") === -1)
        return A;
      if (m.indexOf("<title ") === 0) {
        let S = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return A.title = S ? `${S[1]}${e(S[2])}${S[3]}` : m, A;
      }
      let x = m.match(/ inertia="[^"]+"/);
      return x ? A[x[0]] = m : A[Object.keys(A).length] = m, A;
    }, d);
    return Object.values(y);
  }
  function c() {
    t ? r(u()) : O1.update(u());
  }
  return c(), { forceUpdate: c, createProvider: function() {
    let f = i();
    return { update: (d) => s(f, d), disconnect: () => o(f) };
  } };
}
function Td(t) {
  let e = t.currentTarget.tagName.toLowerCase() === "a";
  return !(t.target && (t == null ? void 0 : t.target).isContentEditable || t.defaultPrevented || e && t.which > 1 || e && t.altKey || e && t.ctrlKey || e && t.metaKey || e && t.shiftKey);
}
var cr = new S1(), Ai = { exports: {} };
Ai.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", a = 9007199254740991, i = "[object Arguments]", o = "[object Array]", s = "[object Boolean]", u = "[object Date]", c = "[object Error]", f = "[object Function]", d = "[object GeneratorFunction]", y = "[object Map]", A = "[object Number]", m = "[object Object]", x = "[object Promise]", S = "[object RegExp]", O = "[object Set]", P = "[object String]", _ = "[object Symbol]", T = "[object WeakMap]", L = "[object ArrayBuffer]", R = "[object DataView]", M = "[object Float32Array]", j = "[object Float64Array]", B = "[object Int8Array]", D = "[object Int16Array]", H = "[object Int32Array]", h = "[object Uint8Array]", v = "[object Uint8ClampedArray]", w = "[object Uint16Array]", g = "[object Uint32Array]", z = /[\\^$.*+?()[\]{}|]/g, F = /\w*$/, N = /^\[object .+?Constructor\]$/, G = /^(?:0|[1-9]\d*)$/, J = {};
  J[i] = J[o] = J[L] = J[R] = J[s] = J[u] = J[M] = J[j] = J[B] = J[D] = J[H] = J[y] = J[A] = J[m] = J[S] = J[O] = J[P] = J[_] = J[h] = J[v] = J[w] = J[g] = !0, J[c] = J[f] = J[T] = !1;
  var Xe = typeof at == "object" && at && at.Object === Object && at, Rt = typeof self == "object" && self && self.Object === Object && self, xe = Xe || Rt || Function("return this")(), Qe = e && !e.nodeType && e, re = Qe && !0 && t && !t.nodeType && t, Jt = re && re.exports === Qe;
  function nn(l, p) {
    return l.set(p[0], p[1]), l;
  }
  function je(l, p) {
    return l.add(p), l;
  }
  function Xt(l, p) {
    for (var b = -1, k = l ? l.length : 0; ++b < k && p(l[b], b, l) !== !1; )
      ;
    return l;
  }
  function br(l, p) {
    for (var b = -1, k = p.length, Z = l.length; ++b < k; )
      l[Z + b] = p[b];
    return l;
  }
  function Qt(l, p, b, k) {
    var Z = -1, W = l ? l.length : 0;
    for (k && W && (b = l[++Z]); ++Z < W; )
      b = p(b, l[Z], Z, l);
    return b;
  }
  function Zt(l, p) {
    for (var b = -1, k = Array(l); ++b < l; )
      k[b] = p(b);
    return k;
  }
  function wr(l, p) {
    return l == null ? void 0 : l[p];
  }
  function an(l) {
    var p = !1;
    if (l != null && typeof l.toString != "function")
      try {
        p = !!(l + "");
      } catch {
      }
    return p;
  }
  function ha(l) {
    var p = -1, b = Array(l.size);
    return l.forEach(function(k, Z) {
      b[++p] = [Z, k];
    }), b;
  }
  function on(l, p) {
    return function(b) {
      return l(p(b));
    };
  }
  function ma(l) {
    var p = -1, b = Array(l.size);
    return l.forEach(function(k) {
      b[++p] = k;
    }), b;
  }
  var Zi = Array.prototype, eo = Function.prototype, xr = Object.prototype, sn = xe["__core-js_shared__"], ga = function() {
    var l = /[^.]+$/.exec(sn && sn.keys && sn.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), ya = eo.toString, ot = xr.hasOwnProperty, Sr = xr.toString, to = RegExp(
    "^" + ya.call(ot).replace(z, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), er = Jt ? xe.Buffer : void 0, Or = xe.Symbol, ln = xe.Uint8Array, We = on(Object.getPrototypeOf, Object), va = Object.create, ba = xr.propertyIsEnumerable, ro = Zi.splice, un = Object.getOwnPropertySymbols, Ar = er ? er.isBuffer : void 0, wa = on(Object.keys, Object), Cr = et(xe, "DataView"), tr = et(xe, "Map"), Ze = et(xe, "Promise"), Er = et(xe, "Set"), cn = et(xe, "WeakMap"), rr = et(Object, "create"), fn = Le(Cr), nr = Le(tr), dn = Le(Ze), pn = Le(Er), hn = Le(cn), Lt = Or ? Or.prototype : void 0, xa = Lt ? Lt.valueOf : void 0;
  function bt(l) {
    var p = -1, b = l ? l.length : 0;
    for (this.clear(); ++p < b; ) {
      var k = l[p];
      this.set(k[0], k[1]);
    }
  }
  function no() {
    this.__data__ = rr ? rr(null) : {};
  }
  function ao(l) {
    return this.has(l) && delete this.__data__[l];
  }
  function io(l) {
    var p = this.__data__;
    if (rr) {
      var b = p[l];
      return b === n ? void 0 : b;
    }
    return ot.call(p, l) ? p[l] : void 0;
  }
  function Sa(l) {
    var p = this.__data__;
    return rr ? p[l] !== void 0 : ot.call(p, l);
  }
  function mn(l, p) {
    var b = this.__data__;
    return b[l] = rr && p === void 0 ? n : p, this;
  }
  bt.prototype.clear = no, bt.prototype.delete = ao, bt.prototype.get = io, bt.prototype.has = Sa, bt.prototype.set = mn;
  function _e(l) {
    var p = -1, b = l ? l.length : 0;
    for (this.clear(); ++p < b; ) {
      var k = l[p];
      this.set(k[0], k[1]);
    }
  }
  function oo() {
    this.__data__ = [];
  }
  function so(l) {
    var p = this.__data__, b = _r(p, l);
    if (b < 0)
      return !1;
    var k = p.length - 1;
    return b == k ? p.pop() : ro.call(p, b, 1), !0;
  }
  function lo(l) {
    var p = this.__data__, b = _r(p, l);
    return b < 0 ? void 0 : p[b][1];
  }
  function uo(l) {
    return _r(this.__data__, l) > -1;
  }
  function co(l, p) {
    var b = this.__data__, k = _r(b, l);
    return k < 0 ? b.push([l, p]) : b[k][1] = p, this;
  }
  _e.prototype.clear = oo, _e.prototype.delete = so, _e.prototype.get = lo, _e.prototype.has = uo, _e.prototype.set = co;
  function Te(l) {
    var p = -1, b = l ? l.length : 0;
    for (this.clear(); ++p < b; ) {
      var k = l[p];
      this.set(k[0], k[1]);
    }
  }
  function fo() {
    this.__data__ = {
      hash: new bt(),
      map: new (tr || _e)(),
      string: new bt()
    };
  }
  function po(l) {
    return ir(this, l).delete(l);
  }
  function ho(l) {
    return ir(this, l).get(l);
  }
  function mo(l) {
    return ir(this, l).has(l);
  }
  function go(l, p) {
    return ir(this, l).set(l, p), this;
  }
  Te.prototype.clear = fo, Te.prototype.delete = po, Te.prototype.get = ho, Te.prototype.has = mo, Te.prototype.set = go;
  function Ne(l) {
    this.__data__ = new _e(l);
  }
  function yo() {
    this.__data__ = new _e();
  }
  function vo(l) {
    return this.__data__.delete(l);
  }
  function bo(l) {
    return this.__data__.get(l);
  }
  function wo(l) {
    return this.__data__.has(l);
  }
  function xo(l, p) {
    var b = this.__data__;
    if (b instanceof _e) {
      var k = b.__data__;
      if (!tr || k.length < r - 1)
        return k.push([l, p]), this;
      b = this.__data__ = new Te(k);
    }
    return b.set(l, p), this;
  }
  Ne.prototype.clear = yo, Ne.prototype.delete = vo, Ne.prototype.get = bo, Ne.prototype.has = wo, Ne.prototype.set = xo;
  function kr(l, p) {
    var b = bn(l) || Tr(l) ? Zt(l.length, String) : [], k = b.length, Z = !!k;
    for (var W in l)
      (p || ot.call(l, W)) && !(Z && (W == "length" || Lo(W, k))) && b.push(W);
    return b;
  }
  function Oa(l, p, b) {
    var k = l[p];
    (!(ot.call(l, p) && _a(k, b)) || b === void 0 && !(p in l)) && (l[p] = b);
  }
  function _r(l, p) {
    for (var b = l.length; b--; )
      if (_a(l[b][0], p))
        return b;
    return -1;
  }
  function st(l, p) {
    return l && vn(p, xn(p), l);
  }
  function gn(l, p, b, k, Z, W, ne) {
    var oe;
    if (k && (oe = W ? k(l, Z, W, ne) : k(l)), oe !== void 0)
      return oe;
    if (!ut(l))
      return l;
    var Se = bn(l);
    if (Se) {
      if (oe = Do(l), !p)
        return To(l, oe);
    } else {
      var le = xt(l), $e = le == f || le == d;
      if (Pa(l))
        return Pr(l, p);
      if (le == m || le == i || $e && !W) {
        if (an(l))
          return W ? l : {};
        if (oe = lt($e ? {} : l), !p)
          return $o(l, st(oe, l));
      } else {
        if (!J[le])
          return W ? l : {};
        oe = Ro(l, le, gn, p);
      }
    }
    ne || (ne = new Ne());
    var Fe = ne.get(l);
    if (Fe)
      return Fe;
    if (ne.set(l, oe), !Se)
      var Ae = b ? Io(l) : xn(l);
    return Xt(Ae || l, function(Ie, Pe) {
      Ae && (Pe = Ie, Ie = l[Pe]), Oa(oe, Pe, gn(Ie, p, b, k, Pe, l, ne));
    }), oe;
  }
  function So(l) {
    return ut(l) ? va(l) : {};
  }
  function Oo(l, p, b) {
    var k = p(l);
    return bn(l) ? k : br(k, b(l));
  }
  function Ao(l) {
    return Sr.call(l);
  }
  function Co(l) {
    if (!ut(l) || Fo(l))
      return !1;
    var p = wn(l) || an(l) ? to : N;
    return p.test(Le(l));
  }
  function Eo(l) {
    if (!Ea(l))
      return wa(l);
    var p = [];
    for (var b in Object(l))
      ot.call(l, b) && b != "constructor" && p.push(b);
    return p;
  }
  function Pr(l, p) {
    if (p)
      return l.slice();
    var b = new l.constructor(l.length);
    return l.copy(b), b;
  }
  function yn(l) {
    var p = new l.constructor(l.byteLength);
    return new ln(p).set(new ln(l)), p;
  }
  function ar(l, p) {
    var b = p ? yn(l.buffer) : l.buffer;
    return new l.constructor(b, l.byteOffset, l.byteLength);
  }
  function Aa(l, p, b) {
    var k = p ? b(ha(l), !0) : ha(l);
    return Qt(k, nn, new l.constructor());
  }
  function Ca(l) {
    var p = new l.constructor(l.source, F.exec(l));
    return p.lastIndex = l.lastIndex, p;
  }
  function ko(l, p, b) {
    var k = p ? b(ma(l), !0) : ma(l);
    return Qt(k, je, new l.constructor());
  }
  function _o(l) {
    return xa ? Object(xa.call(l)) : {};
  }
  function Po(l, p) {
    var b = p ? yn(l.buffer) : l.buffer;
    return new l.constructor(b, l.byteOffset, l.length);
  }
  function To(l, p) {
    var b = -1, k = l.length;
    for (p || (p = Array(k)); ++b < k; )
      p[b] = l[b];
    return p;
  }
  function vn(l, p, b, k) {
    b || (b = {});
    for (var Z = -1, W = p.length; ++Z < W; ) {
      var ne = p[Z], oe = k ? k(b[ne], l[ne], ne, b, l) : void 0;
      Oa(b, ne, oe === void 0 ? l[ne] : oe);
    }
    return b;
  }
  function $o(l, p) {
    return vn(l, wt(l), p);
  }
  function Io(l) {
    return Oo(l, xn, wt);
  }
  function ir(l, p) {
    var b = l.__data__;
    return No(p) ? b[typeof p == "string" ? "string" : "hash"] : b.map;
  }
  function et(l, p) {
    var b = wr(l, p);
    return Co(b) ? b : void 0;
  }
  var wt = un ? on(un, Object) : Bo, xt = Ao;
  (Cr && xt(new Cr(new ArrayBuffer(1))) != R || tr && xt(new tr()) != y || Ze && xt(Ze.resolve()) != x || Er && xt(new Er()) != O || cn && xt(new cn()) != T) && (xt = function(l) {
    var p = Sr.call(l), b = p == m ? l.constructor : void 0, k = b ? Le(b) : void 0;
    if (k)
      switch (k) {
        case fn:
          return R;
        case nr:
          return y;
        case dn:
          return x;
        case pn:
          return O;
        case hn:
          return T;
      }
    return p;
  });
  function Do(l) {
    var p = l.length, b = l.constructor(p);
    return p && typeof l[0] == "string" && ot.call(l, "index") && (b.index = l.index, b.input = l.input), b;
  }
  function lt(l) {
    return typeof l.constructor == "function" && !Ea(l) ? So(We(l)) : {};
  }
  function Ro(l, p, b, k) {
    var Z = l.constructor;
    switch (p) {
      case L:
        return yn(l);
      case s:
      case u:
        return new Z(+l);
      case R:
        return ar(l, k);
      case M:
      case j:
      case B:
      case D:
      case H:
      case h:
      case v:
      case w:
      case g:
        return Po(l, k);
      case y:
        return Aa(l, k, b);
      case A:
      case P:
        return new Z(l);
      case S:
        return Ca(l);
      case O:
        return ko(l, k, b);
      case _:
        return _o(l);
    }
  }
  function Lo(l, p) {
    return p = p ?? a, !!p && (typeof l == "number" || G.test(l)) && l > -1 && l % 1 == 0 && l < p;
  }
  function No(l) {
    var p = typeof l;
    return p == "string" || p == "number" || p == "symbol" || p == "boolean" ? l !== "__proto__" : l === null;
  }
  function Fo(l) {
    return !!ga && ga in l;
  }
  function Ea(l) {
    var p = l && l.constructor, b = typeof p == "function" && p.prototype || xr;
    return l === b;
  }
  function Le(l) {
    if (l != null) {
      try {
        return ya.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function ka(l) {
    return gn(l, !0, !0);
  }
  function _a(l, p) {
    return l === p || l !== l && p !== p;
  }
  function Tr(l) {
    return Mo(l) && ot.call(l, "callee") && (!ba.call(l, "callee") || Sr.call(l) == i);
  }
  var bn = Array.isArray;
  function $r(l) {
    return l != null && Ta(l.length) && !wn(l);
  }
  function Mo(l) {
    return $a(l) && $r(l);
  }
  var Pa = Ar || jo;
  function wn(l) {
    var p = ut(l) ? Sr.call(l) : "";
    return p == f || p == d;
  }
  function Ta(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= a;
  }
  function ut(l) {
    var p = typeof l;
    return !!l && (p == "object" || p == "function");
  }
  function $a(l) {
    return !!l && typeof l == "object";
  }
  function xn(l) {
    return $r(l) ? kr(l) : Eo(l);
  }
  function Bo() {
    return [];
  }
  function jo() {
    return !1;
  }
  t.exports = ka;
})(Ai, Ai.exports);
var C1 = Ai.exports;
const At = /* @__PURE__ */ Ui(C1);
var Ci = { exports: {} };
Ci.exports;
(function(t, e) {
  var r = 200, n = "__lodash_hash_undefined__", a = 1, i = 2, o = 9007199254740991, s = "[object Arguments]", u = "[object Array]", c = "[object AsyncFunction]", f = "[object Boolean]", d = "[object Date]", y = "[object Error]", A = "[object Function]", m = "[object GeneratorFunction]", x = "[object Map]", S = "[object Number]", O = "[object Null]", P = "[object Object]", _ = "[object Promise]", T = "[object Proxy]", L = "[object RegExp]", R = "[object Set]", M = "[object String]", j = "[object Symbol]", B = "[object Undefined]", D = "[object WeakMap]", H = "[object ArrayBuffer]", h = "[object DataView]", v = "[object Float32Array]", w = "[object Float64Array]", g = "[object Int8Array]", z = "[object Int16Array]", F = "[object Int32Array]", N = "[object Uint8Array]", G = "[object Uint8ClampedArray]", J = "[object Uint16Array]", Xe = "[object Uint32Array]", Rt = /[\\^$.*+?()[\]{}|]/g, xe = /^\[object .+?Constructor\]$/, Qe = /^(?:0|[1-9]\d*)$/, re = {};
  re[v] = re[w] = re[g] = re[z] = re[F] = re[N] = re[G] = re[J] = re[Xe] = !0, re[s] = re[u] = re[H] = re[f] = re[h] = re[d] = re[y] = re[A] = re[x] = re[S] = re[P] = re[L] = re[R] = re[M] = re[D] = !1;
  var Jt = typeof at == "object" && at && at.Object === Object && at, nn = typeof self == "object" && self && self.Object === Object && self, je = Jt || nn || Function("return this")(), Xt = e && !e.nodeType && e, br = Xt && !0 && t && !t.nodeType && t, Qt = br && br.exports === Xt, Zt = Qt && Jt.process, wr = function() {
    try {
      return Zt && Zt.binding && Zt.binding("util");
    } catch {
    }
  }(), an = wr && wr.isTypedArray;
  function ha(l, p) {
    for (var b = -1, k = l == null ? 0 : l.length, Z = 0, W = []; ++b < k; ) {
      var ne = l[b];
      p(ne, b, l) && (W[Z++] = ne);
    }
    return W;
  }
  function on(l, p) {
    for (var b = -1, k = p.length, Z = l.length; ++b < k; )
      l[Z + b] = p[b];
    return l;
  }
  function ma(l, p) {
    for (var b = -1, k = l == null ? 0 : l.length; ++b < k; )
      if (p(l[b], b, l))
        return !0;
    return !1;
  }
  function Zi(l, p) {
    for (var b = -1, k = Array(l); ++b < l; )
      k[b] = p(b);
    return k;
  }
  function eo(l) {
    return function(p) {
      return l(p);
    };
  }
  function xr(l, p) {
    return l.has(p);
  }
  function sn(l, p) {
    return l == null ? void 0 : l[p];
  }
  function ga(l) {
    var p = -1, b = Array(l.size);
    return l.forEach(function(k, Z) {
      b[++p] = [Z, k];
    }), b;
  }
  function ya(l, p) {
    return function(b) {
      return l(p(b));
    };
  }
  function ot(l) {
    var p = -1, b = Array(l.size);
    return l.forEach(function(k) {
      b[++p] = k;
    }), b;
  }
  var Sr = Array.prototype, to = Function.prototype, er = Object.prototype, Or = je["__core-js_shared__"], ln = to.toString, We = er.hasOwnProperty, va = function() {
    var l = /[^.]+$/.exec(Or && Or.keys && Or.keys.IE_PROTO || "");
    return l ? "Symbol(src)_1." + l : "";
  }(), ba = er.toString, ro = RegExp(
    "^" + ln.call(We).replace(Rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), un = Qt ? je.Buffer : void 0, Ar = je.Symbol, wa = je.Uint8Array, Cr = er.propertyIsEnumerable, tr = Sr.splice, Ze = Ar ? Ar.toStringTag : void 0, Er = Object.getOwnPropertySymbols, cn = un ? un.isBuffer : void 0, rr = ya(Object.keys, Object), fn = wt(je, "DataView"), nr = wt(je, "Map"), dn = wt(je, "Promise"), pn = wt(je, "Set"), hn = wt(je, "WeakMap"), Lt = wt(Object, "create"), xa = Le(fn), bt = Le(nr), no = Le(dn), ao = Le(pn), io = Le(hn), Sa = Ar ? Ar.prototype : void 0, mn = Sa ? Sa.valueOf : void 0;
  function _e(l) {
    var p = -1, b = l == null ? 0 : l.length;
    for (this.clear(); ++p < b; ) {
      var k = l[p];
      this.set(k[0], k[1]);
    }
  }
  function oo() {
    this.__data__ = Lt ? Lt(null) : {}, this.size = 0;
  }
  function so(l) {
    var p = this.has(l) && delete this.__data__[l];
    return this.size -= p ? 1 : 0, p;
  }
  function lo(l) {
    var p = this.__data__;
    if (Lt) {
      var b = p[l];
      return b === n ? void 0 : b;
    }
    return We.call(p, l) ? p[l] : void 0;
  }
  function uo(l) {
    var p = this.__data__;
    return Lt ? p[l] !== void 0 : We.call(p, l);
  }
  function co(l, p) {
    var b = this.__data__;
    return this.size += this.has(l) ? 0 : 1, b[l] = Lt && p === void 0 ? n : p, this;
  }
  _e.prototype.clear = oo, _e.prototype.delete = so, _e.prototype.get = lo, _e.prototype.has = uo, _e.prototype.set = co;
  function Te(l) {
    var p = -1, b = l == null ? 0 : l.length;
    for (this.clear(); ++p < b; ) {
      var k = l[p];
      this.set(k[0], k[1]);
    }
  }
  function fo() {
    this.__data__ = [], this.size = 0;
  }
  function po(l) {
    var p = this.__data__, b = Pr(p, l);
    if (b < 0)
      return !1;
    var k = p.length - 1;
    return b == k ? p.pop() : tr.call(p, b, 1), --this.size, !0;
  }
  function ho(l) {
    var p = this.__data__, b = Pr(p, l);
    return b < 0 ? void 0 : p[b][1];
  }
  function mo(l) {
    return Pr(this.__data__, l) > -1;
  }
  function go(l, p) {
    var b = this.__data__, k = Pr(b, l);
    return k < 0 ? (++this.size, b.push([l, p])) : b[k][1] = p, this;
  }
  Te.prototype.clear = fo, Te.prototype.delete = po, Te.prototype.get = ho, Te.prototype.has = mo, Te.prototype.set = go;
  function Ne(l) {
    var p = -1, b = l == null ? 0 : l.length;
    for (this.clear(); ++p < b; ) {
      var k = l[p];
      this.set(k[0], k[1]);
    }
  }
  function yo() {
    this.size = 0, this.__data__ = {
      hash: new _e(),
      map: new (nr || Te)(),
      string: new _e()
    };
  }
  function vo(l) {
    var p = et(this, l).delete(l);
    return this.size -= p ? 1 : 0, p;
  }
  function bo(l) {
    return et(this, l).get(l);
  }
  function wo(l) {
    return et(this, l).has(l);
  }
  function xo(l, p) {
    var b = et(this, l), k = b.size;
    return b.set(l, p), this.size += b.size == k ? 0 : 1, this;
  }
  Ne.prototype.clear = yo, Ne.prototype.delete = vo, Ne.prototype.get = bo, Ne.prototype.has = wo, Ne.prototype.set = xo;
  function kr(l) {
    var p = -1, b = l == null ? 0 : l.length;
    for (this.__data__ = new Ne(); ++p < b; )
      this.add(l[p]);
  }
  function Oa(l) {
    return this.__data__.set(l, n), this;
  }
  function _r(l) {
    return this.__data__.has(l);
  }
  kr.prototype.add = kr.prototype.push = Oa, kr.prototype.has = _r;
  function st(l) {
    var p = this.__data__ = new Te(l);
    this.size = p.size;
  }
  function gn() {
    this.__data__ = new Te(), this.size = 0;
  }
  function So(l) {
    var p = this.__data__, b = p.delete(l);
    return this.size = p.size, b;
  }
  function Oo(l) {
    return this.__data__.get(l);
  }
  function Ao(l) {
    return this.__data__.has(l);
  }
  function Co(l, p) {
    var b = this.__data__;
    if (b instanceof Te) {
      var k = b.__data__;
      if (!nr || k.length < r - 1)
        return k.push([l, p]), this.size = ++b.size, this;
      b = this.__data__ = new Ne(k);
    }
    return b.set(l, p), this.size = b.size, this;
  }
  st.prototype.clear = gn, st.prototype.delete = So, st.prototype.get = Oo, st.prototype.has = Ao, st.prototype.set = Co;
  function Eo(l, p) {
    var b = Tr(l), k = !b && _a(l), Z = !b && !k && $r(l), W = !b && !k && !Z && $a(l), ne = b || k || Z || W, oe = ne ? Zi(l.length, String) : [], Se = oe.length;
    for (var le in l)
      (p || We.call(l, le)) && !(ne && // Safari 9 has enumerable `arguments.length` in strict mode.
      (le == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Z && (le == "offset" || le == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      W && (le == "buffer" || le == "byteLength" || le == "byteOffset") || // Skip index properties.
      Ro(le, Se))) && oe.push(le);
    return oe;
  }
  function Pr(l, p) {
    for (var b = l.length; b--; )
      if (ka(l[b][0], p))
        return b;
    return -1;
  }
  function yn(l, p, b) {
    var k = p(l);
    return Tr(l) ? k : on(k, b(l));
  }
  function ar(l) {
    return l == null ? l === void 0 ? B : O : Ze && Ze in Object(l) ? xt(l) : Ea(l);
  }
  function Aa(l) {
    return ut(l) && ar(l) == s;
  }
  function Ca(l, p, b, k, Z) {
    return l === p ? !0 : l == null || p == null || !ut(l) && !ut(p) ? l !== l && p !== p : ko(l, p, b, k, Ca, Z);
  }
  function ko(l, p, b, k, Z, W) {
    var ne = Tr(l), oe = Tr(p), Se = ne ? u : lt(l), le = oe ? u : lt(p);
    Se = Se == s ? P : Se, le = le == s ? P : le;
    var $e = Se == P, Fe = le == P, Ae = Se == le;
    if (Ae && $r(l)) {
      if (!$r(p))
        return !1;
      ne = !0, $e = !1;
    }
    if (Ae && !$e)
      return W || (W = new st()), ne || $a(l) ? vn(l, p, b, k, Z, W) : $o(l, p, Se, b, k, Z, W);
    if (!(b & a)) {
      var Ie = $e && We.call(l, "__wrapped__"), Pe = Fe && We.call(p, "__wrapped__");
      if (Ie || Pe) {
        var Nt = Ie ? l.value() : l, St = Pe ? p.value() : p;
        return W || (W = new st()), Z(Nt, St, b, k, W);
      }
    }
    return Ae ? (W || (W = new st()), Io(l, p, b, k, Z, W)) : !1;
  }
  function _o(l) {
    if (!Ta(l) || No(l))
      return !1;
    var p = Pa(l) ? ro : xe;
    return p.test(Le(l));
  }
  function Po(l) {
    return ut(l) && wn(l.length) && !!re[ar(l)];
  }
  function To(l) {
    if (!Fo(l))
      return rr(l);
    var p = [];
    for (var b in Object(l))
      We.call(l, b) && b != "constructor" && p.push(b);
    return p;
  }
  function vn(l, p, b, k, Z, W) {
    var ne = b & a, oe = l.length, Se = p.length;
    if (oe != Se && !(ne && Se > oe))
      return !1;
    var le = W.get(l);
    if (le && W.get(p))
      return le == p;
    var $e = -1, Fe = !0, Ae = b & i ? new kr() : void 0;
    for (W.set(l, p), W.set(p, l); ++$e < oe; ) {
      var Ie = l[$e], Pe = p[$e];
      if (k)
        var Nt = ne ? k(Pe, Ie, $e, p, l, W) : k(Ie, Pe, $e, l, p, W);
      if (Nt !== void 0) {
        if (Nt)
          continue;
        Fe = !1;
        break;
      }
      if (Ae) {
        if (!ma(p, function(St, or) {
          if (!xr(Ae, or) && (Ie === St || Z(Ie, St, b, k, W)))
            return Ae.push(or);
        })) {
          Fe = !1;
          break;
        }
      } else if (!(Ie === Pe || Z(Ie, Pe, b, k, W))) {
        Fe = !1;
        break;
      }
    }
    return W.delete(l), W.delete(p), Fe;
  }
  function $o(l, p, b, k, Z, W, ne) {
    switch (b) {
      case h:
        if (l.byteLength != p.byteLength || l.byteOffset != p.byteOffset)
          return !1;
        l = l.buffer, p = p.buffer;
      case H:
        return !(l.byteLength != p.byteLength || !W(new wa(l), new wa(p)));
      case f:
      case d:
      case S:
        return ka(+l, +p);
      case y:
        return l.name == p.name && l.message == p.message;
      case L:
      case M:
        return l == p + "";
      case x:
        var oe = ga;
      case R:
        var Se = k & a;
        if (oe || (oe = ot), l.size != p.size && !Se)
          return !1;
        var le = ne.get(l);
        if (le)
          return le == p;
        k |= i, ne.set(l, p);
        var $e = vn(oe(l), oe(p), k, Z, W, ne);
        return ne.delete(l), $e;
      case j:
        if (mn)
          return mn.call(l) == mn.call(p);
    }
    return !1;
  }
  function Io(l, p, b, k, Z, W) {
    var ne = b & a, oe = ir(l), Se = oe.length, le = ir(p), $e = le.length;
    if (Se != $e && !ne)
      return !1;
    for (var Fe = Se; Fe--; ) {
      var Ae = oe[Fe];
      if (!(ne ? Ae in p : We.call(p, Ae)))
        return !1;
    }
    var Ie = W.get(l);
    if (Ie && W.get(p))
      return Ie == p;
    var Pe = !0;
    W.set(l, p), W.set(p, l);
    for (var Nt = ne; ++Fe < Se; ) {
      Ae = oe[Fe];
      var St = l[Ae], or = p[Ae];
      if (k)
        var tu = ne ? k(or, St, Ae, p, l, W) : k(St, or, Ae, l, p, W);
      if (!(tu === void 0 ? St === or || Z(St, or, b, k, W) : tu)) {
        Pe = !1;
        break;
      }
      Nt || (Nt = Ae == "constructor");
    }
    if (Pe && !Nt) {
      var Ia = l.constructor, Da = p.constructor;
      Ia != Da && "constructor" in l && "constructor" in p && !(typeof Ia == "function" && Ia instanceof Ia && typeof Da == "function" && Da instanceof Da) && (Pe = !1);
    }
    return W.delete(l), W.delete(p), Pe;
  }
  function ir(l) {
    return yn(l, xn, Do);
  }
  function et(l, p) {
    var b = l.__data__;
    return Lo(p) ? b[typeof p == "string" ? "string" : "hash"] : b.map;
  }
  function wt(l, p) {
    var b = sn(l, p);
    return _o(b) ? b : void 0;
  }
  function xt(l) {
    var p = We.call(l, Ze), b = l[Ze];
    try {
      l[Ze] = void 0;
      var k = !0;
    } catch {
    }
    var Z = ba.call(l);
    return k && (p ? l[Ze] = b : delete l[Ze]), Z;
  }
  var Do = Er ? function(l) {
    return l == null ? [] : (l = Object(l), ha(Er(l), function(p) {
      return Cr.call(l, p);
    }));
  } : Bo, lt = ar;
  (fn && lt(new fn(new ArrayBuffer(1))) != h || nr && lt(new nr()) != x || dn && lt(dn.resolve()) != _ || pn && lt(new pn()) != R || hn && lt(new hn()) != D) && (lt = function(l) {
    var p = ar(l), b = p == P ? l.constructor : void 0, k = b ? Le(b) : "";
    if (k)
      switch (k) {
        case xa:
          return h;
        case bt:
          return x;
        case no:
          return _;
        case ao:
          return R;
        case io:
          return D;
      }
    return p;
  });
  function Ro(l, p) {
    return p = p ?? o, !!p && (typeof l == "number" || Qe.test(l)) && l > -1 && l % 1 == 0 && l < p;
  }
  function Lo(l) {
    var p = typeof l;
    return p == "string" || p == "number" || p == "symbol" || p == "boolean" ? l !== "__proto__" : l === null;
  }
  function No(l) {
    return !!va && va in l;
  }
  function Fo(l) {
    var p = l && l.constructor, b = typeof p == "function" && p.prototype || er;
    return l === b;
  }
  function Ea(l) {
    return ba.call(l);
  }
  function Le(l) {
    if (l != null) {
      try {
        return ln.call(l);
      } catch {
      }
      try {
        return l + "";
      } catch {
      }
    }
    return "";
  }
  function ka(l, p) {
    return l === p || l !== l && p !== p;
  }
  var _a = Aa(function() {
    return arguments;
  }()) ? Aa : function(l) {
    return ut(l) && We.call(l, "callee") && !Cr.call(l, "callee");
  }, Tr = Array.isArray;
  function bn(l) {
    return l != null && wn(l.length) && !Pa(l);
  }
  var $r = cn || jo;
  function Mo(l, p) {
    return Ca(l, p);
  }
  function Pa(l) {
    if (!Ta(l))
      return !1;
    var p = ar(l);
    return p == A || p == m || p == c || p == T;
  }
  function wn(l) {
    return typeof l == "number" && l > -1 && l % 1 == 0 && l <= o;
  }
  function Ta(l) {
    var p = typeof l;
    return l != null && (p == "object" || p == "function");
  }
  function ut(l) {
    return l != null && typeof l == "object";
  }
  var $a = an ? eo(an) : Po;
  function xn(l) {
    return bn(l) ? Eo(l) : To(l);
  }
  function Bo() {
    return [];
  }
  function jo() {
    return !1;
  }
  t.exports = Mo;
})(Ci, Ci.exports);
var E1 = Ci.exports;
const k1 = /* @__PURE__ */ Ui(E1);
function _1(t, e) {
  let r = typeof t == "string" ? t : null, n = typeof t == "string" ? e : t, a = r ? cr.restore(r) : null, i = At(typeof n == "object" ? n : n()), o = null, s = null, u = (f) => f, c = ml({ ...a ? a.data : At(i), isDirty: !1, errors: a ? a.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(i).reduce((f, d) => (f[d] = this[d], f), {});
  }, transform(f) {
    return u = f, this;
  }, defaults(f, d) {
    if (typeof n == "function")
      throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof f > "u" ? i = this.data() : i = Object.assign({}, At(i), typeof f == "string" ? { [f]: d } : f), this;
  }, reset(...f) {
    let d = At(typeof n == "object" ? i : n()), y = At(d);
    return f.length === 0 ? (i = y, Object.assign(this, d)) : Object.keys(d).filter((A) => f.includes(A)).forEach((A) => {
      i[A] = y[A], this[A] = d[A];
    }), this;
  }, setError(f, d) {
    return Object.assign(this.errors, typeof f == "string" ? { [f]: d } : f), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...f) {
    return this.errors = Object.keys(this.errors).reduce((d, y) => ({ ...d, ...f.length > 0 && !f.includes(y) ? { [y]: this.errors[y] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(f, d, y = {}) {
    let A = u(this.data()), m = { ...y, onCancelToken: (x) => {
      if (o = x, y.onCancelToken)
        return y.onCancelToken(x);
    }, onBefore: (x) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(s), y.onBefore)
        return y.onBefore(x);
    }, onStart: (x) => {
      if (this.processing = !0, y.onStart)
        return y.onStart(x);
    }, onProgress: (x) => {
      if (this.progress = x, y.onProgress)
        return y.onProgress(x);
    }, onSuccess: async (x) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, s = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let S = y.onSuccess ? await y.onSuccess(x) : null;
      return i = At(this.data()), this.isDirty = !1, S;
    }, onError: (x) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(x), y.onError)
        return y.onError(x);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, y.onCancel)
        return y.onCancel();
    }, onFinish: (x) => {
      if (this.processing = !1, this.progress = null, o = null, y.onFinish)
        return y.onFinish(x);
    } };
    f === "delete" ? cr.delete(d, { ...m, data: A }) : cr[f](d, A, m);
  }, get(f, d) {
    this.submit("get", f, d);
  }, post(f, d) {
    this.submit("post", f, d);
  }, put(f, d) {
    this.submit("put", f, d);
  }, patch(f, d) {
    this.submit("patch", f, d);
  }, delete(f, d) {
    this.submit("delete", f, d);
  }, cancel() {
    o && o.cancel();
  }, __rememberable: r === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(f) {
    Object.assign(this, f.data), this.setError(f.errors);
  } });
  return Vt(c, (f) => {
    c.isDirty = !k1(c.data(), i), r && cr.remember(At(f.__remember()), r);
  }, { immediate: !0, deep: !0 }), c;
}
var ze = ee(null), pt = ee(null), is = Vp(null), Wa = ee(null), Cc = null;
gr({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (t) => t }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: t, initialComponent: e, resolveComponent: r, titleCallback: n, onHeadUpdate: a }) {
  ze.value = e ? nu(e) : null, pt.value = t, Wa.value = null;
  let i = typeof window > "u";
  return Cc = A1(i, n, a), i || (cr.init({ initialPage: t, resolveComponent: r, swapComponent: async (o) => {
    ze.value = nu(o.component), pt.value = o.page, Wa.value = o.preserveState ? Wa.value : Date.now();
  } }), cr.on("navigate", () => Cc.forceUpdate())), () => {
    if (ze.value) {
      ze.value.inheritAttrs = !!ze.value.inheritAttrs;
      let o = Ht(ze.value, { ...pt.value.props, key: Wa.value });
      return is.value && (ze.value.layout = is.value, is.value = null), ze.value.layout ? typeof ze.value.layout == "function" ? ze.value.layout(Ht, o) : (Array.isArray(ze.value.layout) ? ze.value.layout : [ze.value.layout]).concat(o).reverse().reduce((s, u) => (u.inheritAttrs = !!u.inheritAttrs, Ht(u, { ...pt.value.props }, () => s))) : o;
    }
  };
} });
function P1() {
  return ml({ props: se(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.props;
  }), url: se(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.url;
  }), component: se(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.component;
  }), version: se(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.version;
  }), scrollRegions: se(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.scrollRegions;
  }), rememberedState: se(() => {
    var t;
    return (t = pt.value) == null ? void 0 : t.rememberedState;
  }) });
}
gr({ props: { title: { type: String, required: !1 } }, data() {
  return { provider: this.$headManager.createProvider() };
}, beforeUnmount() {
  this.provider.disconnect();
}, methods: { isUnaryTag(t) {
  return ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"].indexOf(t.type) > -1;
}, renderTagStart(t) {
  t.props = t.props || {}, t.props.inertia = t.props["head-key"] !== void 0 ? t.props["head-key"] : "";
  let e = Object.keys(t.props).reduce((r, n) => {
    let a = t.props[n];
    return ["key", "head-key"].includes(n) ? r : a === "" ? r + ` ${n}` : r + ` ${n}="${a}"`;
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
gr({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: String, required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" } }, setup(t, { slots: e, attrs: r }) {
  return () => {
    let n = t.as.toLowerCase(), a = t.method.toLowerCase(), [i, o] = Hl(a, t.href || "", t.data, t.queryStringArrayFormat);
    return n === "a" && a !== "get" && console.warn(`Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${i}" method="${a}" as="button">...</Link>`), Ht(t.as, { ...r, ...n === "a" ? { href: i } : {}, onClick: (s) => {
      Td(s) && (s.preventDefault(), cr.visit(i, { data: o, method: a, replace: t.replace, preserveScroll: t.preserveScroll, preserveState: t.preserveState ?? a !== "get", only: t.only, headers: t.headers, onCancelToken: r.onCancelToken || (() => ({})), onBefore: r.onBefore || (() => ({})), onStart: r.onStart || (() => ({})), onProgress: r.onProgress || (() => ({})), onFinish: r.onFinish || (() => ({})), onCancel: r.onCancel || (() => ({})), onSuccess: r.onSuccess || (() => ({})), onError: r.onError || (() => ({})) }));
    } }, e);
  };
} });
function h4(t) {
  return t.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function T1(t) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(t);
}
function m4(t) {
  return P1().props.auth.permissions.includes(t);
}
let Gs = null;
function g4(t) {
  Gs = t;
}
function ua() {
  return Gs === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Gs;
}
const it = gr({
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
      const n = ua(), a = t.as.toLowerCase(), i = t.method.toLowerCase(), [o, s] = Hl(
        i,
        t.href || "",
        t.data,
        t.queryStringArrayFormat
      );
      return a === "a" && i !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${o}" method="${i}" as="button">...</Link>`
      ), Ht(
        t.as,
        {
          ...r,
          ...a === "a" ? { href: o } : {},
          onClick: (u) => {
            Td(u) && (u.preventDefault(), n.visit(o, {
              data: s,
              method: i,
              replace: t.replace,
              preserveScroll: t.preserveScroll,
              preserveState: t.preserveState ?? i !== "get",
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
function ca(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function s(f) {
      try {
        c(n.next(f));
      } catch (d) {
        o(d);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function c(f) {
      f.done ? i(f.value) : a(f.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function fa(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, o;
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
        if (n = 1, a && (i = c[0] & 2 ? a.return : c[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, c[1])).done)
          return i;
        switch (a = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
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
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = c;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(c);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], a = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function $1(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), a, i = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(a = n.next()).done; )
      i.push(a.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}
function I1() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat($1(arguments[e]));
  return t;
}
var D1 = /* @__PURE__ */ new Map([
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
function Vi(t, e) {
  var r = R1(t);
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
function R1(t) {
  var e = t.name, r = e && e.lastIndexOf(".") !== -1;
  if (r && !t.type) {
    var n = e.split(".").pop().toLowerCase(), a = D1.get(n);
    a && Object.defineProperty(t, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return t;
}
var L1 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function N1(t) {
  return ca(this, void 0, void 0, function() {
    return fa(this, function(e) {
      return [2, F1(t) && t.dataTransfer ? j1(t.dataTransfer, t.type) : M1(t)];
    });
  });
}
function F1(t) {
  return !!t.dataTransfer;
}
function M1(t) {
  var e = B1(t.target) ? t.target.files ? Ys(t.target.files) : [] : [];
  return e.map(function(r) {
    return Vi(r);
  });
}
function B1(t) {
  return t !== null;
}
function j1(t, e) {
  return ca(this, void 0, void 0, function() {
    var r, n;
    return fa(this, function(a) {
      switch (a.label) {
        case 0:
          return t.items ? (r = Ys(t.items).filter(function(i) {
            return i.kind === "file";
          }), e !== "drop" ? [2, r] : [4, Promise.all(r.map(z1))]) : [3, 2];
        case 1:
          return n = a.sent(), [2, Ec($d(n))];
        case 2:
          return [2, Ec(Ys(t.files).map(function(i) {
            return Vi(i);
          }))];
      }
    });
  });
}
function Ec(t) {
  return t.filter(function(e) {
    return L1.indexOf(e.name) === -1;
  });
}
function Ys(t) {
  for (var e = [], r = 0; r < t.length; r++) {
    var n = t[r];
    e.push(n);
  }
  return e;
}
function z1(t) {
  if (typeof t.webkitGetAsEntry != "function")
    return kc(t);
  var e = t.webkitGetAsEntry();
  return e && e.isDirectory ? Id(e) : kc(t);
}
function $d(t) {
  return t.reduce(function(e, r) {
    return I1(e, Array.isArray(r) ? $d(r) : [r]);
  }, []);
}
function kc(t) {
  var e = t.getAsFile();
  if (!e)
    return Promise.reject(t + " is not a File");
  var r = Vi(e);
  return Promise.resolve(r);
}
function U1(t) {
  return ca(this, void 0, void 0, function() {
    return fa(this, function(e) {
      return [2, t.isDirectory ? Id(t) : V1(t)];
    });
  });
}
function Id(t) {
  var e = t.createReader();
  return new Promise(function(r, n) {
    var a = [];
    function i() {
      var o = this;
      e.readEntries(function(s) {
        return ca(o, void 0, void 0, function() {
          var u, c, f;
          return fa(this, function(d) {
            switch (d.label) {
              case 0:
                if (s.length)
                  return [3, 5];
                d.label = 1;
              case 1:
                return d.trys.push([1, 3, , 4]), [4, Promise.all(a)];
              case 2:
                return u = d.sent(), r(u), [3, 4];
              case 3:
                return c = d.sent(), n(c), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                f = Promise.all(s.map(U1)), a.push(f), i(), d.label = 6;
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
    i();
  });
}
function V1(t) {
  return ca(this, void 0, void 0, function() {
    return fa(this, function(e) {
      return [2, new Promise(function(r, n) {
        t.file(function(a) {
          var i = Vi(a, t.fullPath);
          r(i);
        }, function(a) {
          n(a);
        });
      })];
    });
  });
}
var Dd = function(t, e) {
  if (t && e) {
    var r = Array.isArray(e) ? e : e.split(","), n = t.name || "", a = (t.type || "").toLowerCase(), i = a.replace(/\/.*$/, "");
    return r.some(function(o) {
      var s = o.trim().toLowerCase();
      return s.charAt(0) === "." ? n.toLowerCase().endsWith(s) : s.endsWith("/*") ? i === s.replace(/\/.*$/, "") : a === s;
    });
  }
  return !0;
}, Ue = function() {
  return Ue = Object.assign || function(e) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, Ue.apply(this, arguments);
};
function _c(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
function H1(t, e, r, n) {
  function a(i) {
    return i instanceof r ? i : new r(function(o) {
      o(i);
    });
  }
  return new (r || (r = Promise))(function(i, o) {
    function s(f) {
      try {
        c(n.next(f));
      } catch (d) {
        o(d);
      }
    }
    function u(f) {
      try {
        c(n.throw(f));
      } catch (d) {
        o(d);
      }
    }
    function c(f) {
      f.done ? i(f.value) : a(f.value).then(s, u);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function q1(t, e) {
  var r = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, o;
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
        if (n = 1, a && (i = c[0] & 2 ? a.return : c[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, c[1])).done)
          return i;
        switch (a = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
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
            if (i = r.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              r = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              r.label = c[1];
              break;
            }
            if (c[0] === 6 && r.label < i[1]) {
              r.label = i[1], i = c;
              break;
            }
            if (i && r.label < i[2]) {
              r.label = i[2], r.ops.push(c);
              break;
            }
            i[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        c = e.call(t, r);
      } catch (f) {
        c = [6, f], a = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Ks(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, a = e.length, i; n < a; n++)
      (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
function W1(t) {
  return t.includes("MSIE") || t.includes("Trident/");
}
function G1(t) {
  return t.includes("Edge/");
}
function Y1(t) {
  return t === void 0 && (t = window.navigator.userAgent), W1(t) || G1(t);
}
function Pc(t) {
  t.preventDefault();
}
function Ga(t) {
  return t.dataTransfer ? Array.prototype.some.call(t.dataTransfer.types, function(e) {
    return e === "Files" || e === "application/x-moz-file";
  }) : !!t.target && !!t.target.files;
}
function Ei(t) {
  return typeof t.isPropagationStopped == "function" ? t.isPropagationStopped() : typeof t.cancelBubble < "u" ? t.cancelBubble : !1;
}
var K1 = "file-invalid-type", J1 = "file-too-large", X1 = "file-too-small", Q1 = "too-many-files", Z1 = {
  code: Q1,
  message: "Too many files"
}, ew = function(t) {
  t = Array.isArray(t) && t.length === 1 ? t[0] : t;
  var e = Array.isArray(t) ? "one of ".concat(t.join(", ")) : t;
  return {
    code: K1,
    message: "File type must be ".concat(e)
  };
};
function En(t) {
  return t != null;
}
var tw = Dd.default, rw = tw || Dd;
function Rd(t, e) {
  var r = t.type === "application/x-moz-file" || rw(t, e);
  return [r, r ? null : ew(e)];
}
var Tc = function(t) {
  return {
    code: J1,
    message: "File is larger than ".concat(t, " bytes")
  };
}, $c = function(t) {
  return {
    code: X1,
    message: "File is smaller than ".concat(t, " bytes")
  };
};
function Ld(t, e, r) {
  if (En(t.size) && t.size)
    if (En(e) && En(r)) {
      if (t.size > r)
        return [!1, Tc(r)];
      if (t.size < e)
        return [!1, $c(e)];
    } else {
      if (En(e) && t.size < e)
        return [!1, $c(e)];
      if (En(r) && t.size > r)
        return [!1, Tc(r)];
    }
  return [!0, null];
}
function Ct() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    for (var n = [], a = 1; a < arguments.length; a++)
      n[a - 1] = arguments[a];
    return t.some(function(i) {
      return !Ei(r) && i && i.apply(void 0, Ks([r], n, !1)), Ei(r);
    });
  };
}
function nw(t) {
  var e = t.files, r = t.accept, n = t.minSize, a = t.maxSize, i = t.multiple, o = t.maxFiles;
  return !i && e.length > 1 || i && o >= 1 && e.length > o ? !1 : e.every(function(s) {
    var u = Rd(s, r)[0], c = Ld(s, n, a)[0];
    return u && c;
  });
}
var aw = {
  disabled: !1,
  getFilesFromEvent: N1,
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
function Nd(t) {
  t === void 0 && (t = {});
  var e = ee(Ue(Ue({}, aw), t));
  Vt(function() {
    return Ue({}, t);
  }, function(D) {
    e.value = Ue(Ue({}, e.value), D);
  });
  var r = ee(), n = ee(), a = ml({
    isFocused: !1,
    isFileDialogActive: !1,
    isDragActive: !1,
    isDragAccept: !1,
    isDragReject: !1,
    draggedFiles: [],
    acceptedFiles: [],
    fileRejections: []
  }), i = function() {
    n.value && (a.isFileDialogActive = !0, n.value.value = "", n.value.click());
  }, o = function() {
    var D = e.value.onFileDialogCancel;
    a.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var H = n.value.files;
        H && !H.length && (a.isFileDialogActive = !1, typeof D == "function" && D());
      }
    }, 300);
  };
  function s() {
    a.isFocused = !0;
  }
  function u() {
    a.isFocused = !1;
  }
  function c() {
    var D = e.value.noClick;
    D || (Y1() ? setTimeout(i, 0) : i());
  }
  var f = ee([]), d = function(D) {
    if (r.value) {
      var H = r.value.$el || r.value;
      H.contains(D.target) || (D.preventDefault(), f.value = []);
    }
  };
  Je(function() {
    window.addEventListener("focus", o, !1);
    var D = e.value.preventDropOnDocument;
    D && (document.addEventListener("dragover", Pc, !1), document.addEventListener("drop", d, !1));
  }), Zn(function() {
    window.removeEventListener("focus", o, !1);
    var D = e.value.preventDropOnDocument;
    D && (document.removeEventListener("dragover", Pc), document.removeEventListener("drop", d));
  });
  function y(D) {
    var H = e.value.noDragEventsBubbling;
    H && D.stopPropagation();
  }
  function A(D) {
    return H1(this, void 0, void 0, function() {
      var H, h, v, w, g;
      return q1(this, function(z) {
        switch (z.label) {
          case 0:
            return H = e.value, h = H.getFilesFromEvent, v = H.noDragEventsBubbling, w = H.onDragEnter, D.preventDefault(), y(D), f.value = Ks(Ks([], f.value, !0), [D.target], !1), Ga(D) ? h ? [4, h(D)] : [2] : [3, 2];
          case 1:
            if (g = z.sent(), g || (g = []), Ei(D) && !v)
              return [2];
            a.draggedFiles = g, a.isDragActive = !0, w && w(D), z.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(D) {
    var H = e.value.onDragOver;
    if (D.preventDefault(), y(D), D.dataTransfer)
      try {
        D.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Ga(D) && H && H(D), !1;
  }
  function x(D) {
    D.preventDefault(), y(D);
    var H = f.value.filter(function(w) {
      if (!r.value)
        return !1;
      var g = r.value.$el || r.value;
      return g.contains(w);
    }), h = H.indexOf(D.target);
    if (h !== -1 && H.splice(h, 1), f.value = H, !(H.length > 0)) {
      a.draggedFiles = [], a.isDragActive = !1;
      var v = e.value.onDragLeave;
      Ga(D) && v && v(D);
    }
  }
  function S(D) {
    D.preventDefault(), y(D), f.value = [];
    var H = e.value, h = H.getFilesFromEvent, v = H.noDragEventsBubbling, w = H.accept, g = H.minSize, z = H.maxSize, F = H.multiple, N = H.maxFiles, G = H.onDrop, J = H.onDropRejected, Xe = H.onDropAccepted;
    if (Ga(D)) {
      if (!h)
        return;
      Promise.resolve(h(D)).then(function(Rt) {
        if (!(Ei(D) && !v)) {
          var xe = [], Qe = [];
          Rt.forEach(function(re) {
            var Jt = Rd(re, w), nn = Jt[0], je = Jt[1], Xt = Ld(re, g, z), br = Xt[0], Qt = Xt[1];
            if (nn && br)
              xe.push(re);
            else {
              var Zt = [je, Qt].filter(function(wr) {
                return wr;
              });
              Qe.push({ file: re, errors: Zt });
            }
          }), (!F && xe.length > 1 || F && N >= 1 && xe.length > N) && (xe.forEach(function(re) {
            Qe.push({ file: re, errors: [Z1] });
          }), xe.splice(0)), a.acceptedFiles = xe, a.fileRejections = Qe, G && G(xe, Qe, D), Qe.length > 0 && J && J(Qe, D), xe.length > 0 && Xe && Xe(xe, D);
        }
      });
    }
    a.isFileDialogActive = !1, a.isDragActive = !1, a.draggedFiles = [], a.acceptedFiles = [], a.fileRejections = [];
  }
  var O = function(D) {
    return e.value.disabled ? void 0 : D;
  }, P = function(D) {
    return e.value.noKeyboard ? void 0 : O(D);
  }, _ = function(D) {
    return e.value.noDrag ? void 0 : O(D);
  }, T = function(D) {
    D === void 0 && (D = {});
    var H = D.onFocus, h = D.onBlur, v = D.onClick, w = D.onDragEnter, g = D.onDragenter, z = D.onDragOver, F = D.onDragover, N = D.onDragLeave, G = D.onDragleave, J = D.onDrop, Xe = _c(D, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Ue(Ue({ onFocus: P(Ct(H, s)), onBlur: P(Ct(h, u)), onClick: O(Ct(v, c)), onDragenter: _(Ct(w, g, A)), onDragover: _(Ct(z, F, m)), onDragleave: _(Ct(N, G, x)), onDrop: _(Ct(J, S)), ref: r }, !e.value.disabled && !e.value.noKeyboard ? { tabIndex: 0 } : {}), Xe);
  }, L = function(D) {
    D.stopPropagation();
  };
  function R(D) {
    D === void 0 && (D = {});
    var H = D.onChange, h = D.onClick, v = _c(D, ["onChange", "onClick"]), w = {
      accept: e.value.accept,
      multiple: e.value.multiple,
      style: "display: none",
      type: "file",
      onChange: O(Ct(H, S)),
      onClick: O(Ct(h, L)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return Ue(Ue({}, w), v);
  }
  var M = se(function() {
    return a.draggedFiles ? a.draggedFiles.length : 0;
  }), j = se(function() {
    return M.value > 0 && nw({
      files: a.draggedFiles,
      accept: e.value.accept,
      minSize: e.value.minSize,
      maxSize: e.value.maxSize,
      multiple: e.value.multiple,
      maxFiles: e.value.maxFiles
    });
  }), B = se(function() {
    return M.value > 0 && !j.value;
  });
  return Ue(Ue({}, Hp(a)), { isDragAccept: j, isDragReject: B, isFocused: se(function() {
    return a.isFocused && !e.value.disabled;
  }), getRootProps: T, getInputProps: R, rootRef: r, inputRef: n, open: O(i) });
}
const iw = { class: "flex w-full flex-col" }, ow = {
  key: 0,
  class: "select-none text-black"
}, sw = ["name"], lw = {
  key: 1,
  class: "select-none"
}, uw = { key: 2 }, cw = {
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
    disabled: Boolean
  },
  setup(t) {
    ua();
    const e = t, r = ee(null), n = (c) => {
      let f = [];
      return c.split("_").join(" ").split(" ").map(function(d) {
        f.push(d[0].toUpperCase() + d.slice(1));
      }), f.join(" ");
    }, a = (c, f) => {
      var d;
      if (r.value = null, f && f.length > 0) {
        f[0].errors && (r.value = (d = f[0]) == null ? void 0 : d.errors.map((y) => y.message).join(", ")), console.error(f);
        return;
      }
      if (!c || c.length === 0) {
        r.value = `${e.field} is required`;
        return;
      }
      e.multiple ? e.form[e.field] = c : e.form[e.field] = c[0];
    }, { getRootProps: i, getInputProps: o, isDragActive: s, ...u } = Nd({
      onDrop: a,
      multiple: e.multiple,
      accept: e.accept
    });
    return (c, f) => {
      var d;
      return C(), E("div", iw, [
        I("div", {
          class: X(["w-full rounded-lg border-2 border-dashed border-primary-200 bg-primary-50 text-primary-200 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", {
            "border-primary-400 bg-primary-100": V(s),
            "border-red-600 bg-primary-100": e.form.errors[t.field] ?? r.value
          }])
        }, [
          I("div", jn({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, V(i)()), [
            t.label ? (C(), E("p", ow, Q(t.label), 1)) : Y("", !0),
            I("input", jn(V(o)(), { name: t.field }), null, 16, sw),
            V(s) ? (C(), E("span", lw, "Drop the " + Q(n(t.field)) + " here ...", 1)) : t.form[t.field] ? (C(), E("span", uw, Q(((d = t.form[t.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (C(), E("span", cw, "Drag 'n' drop " + Q(n(t.field)) + " here", 1))
          ], 16)
        ], 2),
        we(V(aa), {
          class: "mt-2",
          message: e.form.errors[t.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, fw = { class: "flex w-full" }, dw = { key: 0 }, pw = { key: 1 }, hw = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, mw = ["onClick"], gw = /* @__PURE__ */ I("div", { class: "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1), yw = ["src"], vw = ["value"], bw = { class: "flex items-center gap-4" }, ww = {
  key: 0,
  class: "text-sm text-gray-600"
}, xw = {
  key: 1,
  class: "mt-2"
}, Sw = /* @__PURE__ */ I("hr", null, null, -1), Ow = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, Aw = { class: "-m-1 flex flex-wrap md:-m-2" }, Cw = { class: "flex w-1/3 flex-wrap" }, Ew = { class: "h-full w-full p-1 shadow md:p-2" }, kw = ["src"], v4 = {
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
    const e = ua(), r = t, n = _1({
      image: []
    });
    function a() {
      let d = new FormData();
      n.image.forEach((y, A) => {
        d.append(`image[${A}]`, y.file);
      }), d.append("item_type", r.itemType), d.append("item_id", r.itemId), e.post(route(r.endPoint), d, {
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
    function i(d) {
      d.forEach((y) => {
        let A = new FileReader();
        A.onload = (m) => {
          n.image.push({ file: y, dataUrl: m.target.result });
        }, A.readAsDataURL(y);
      });
    }
    const o = (d, y) => {
      if (y && y.length > 0) {
        console.error(y);
        return;
      }
      i(d);
    };
    function s(d) {
      n.image.splice(d, 1);
    }
    const { getRootProps: u, getInputProps: c, ...f } = Nd({
      onDrop: o,
      multiple: !0,
      accept: "image/*"
    });
    return (d, y) => (C(), E(fe, null, [
      t.canUpload ? (C(), E("form", {
        key: 0,
        onSubmit: zt(a, ["prevent"]),
        class: "w-full"
      }, [
        I("div", fw, [
          I("div", {
            class: X(["w-full rounded-l-lg border-2 border-r-0 border-dashed border-primary-200 bg-primary-50 transition duration-100 ease-in-out hover:border-primary-600 hover:text-primary", { "border-primary-400 bg-primary-100": d.dragEneted }])
          }, [
            I("div", jn({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, V(u)()), [
              I("input", Ge(tt(V(c)())), null, 16),
              d.isDragActive ? (C(), E("span", dw, "Drop the files here ...")) : (C(), E("span", pw, "Drag 'n' drop images here"))
            ], 16),
            V(n).image.length > 0 ? (C(), E("div", hw, [
              (C(!0), E(fe, null, Ke(V(n).image, (A, m) => (C(), E("div", {
                class: "relative cursor-pointer select-none",
                onClick: (x) => s(m),
                key: m
              }, [
                gw,
                I("img", {
                  src: A.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, yw)
              ], 8, mw))), 128))
            ])) : Y("", !0)
          ], 2),
          we(V(Lp), {
            class: X(["inline rounded-l-none", { "cursor-not-allowed": V(n).image.length == 0 }]),
            disabled: V(n).image.length == 0
          }, {
            default: ve(() => [
              ye(" Upload ")
            ]),
            _: 1
          }, 8, ["class", "disabled"]),
          V(n).progress ? (C(), E("progress", {
            key: 0,
            value: V(n).progress.percentage,
            max: "100"
          }, Q(V(n).progress.percentage) + "%", 9, vw)) : Y("", !0)
        ]),
        d.$page.props.errors.image ? (C(), ae(V(aa), {
          key: 0,
          class: "mt-2",
          message: d.$page.props.errors.image
        }, null, 8, ["message"])) : Y("", !0),
        I("div", bw, [
          we(fr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: ve(() => [
              V(n).recentlySuccessful ? (C(), E("p", ww, "Images uploaded.")) : Y("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Y("", !0),
      t.images.length ? (C(), E("div", xw, [
        Sw,
        I("div", Ow, [
          I("div", Aw, [
            (C(!0), E(fe, null, Ke(t.images, (A) => (C(), E("div", Cw, [
              I("div", Ew, [
                I("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: A.url
                }, null, 8, kw),
                t.canUpload ? (C(), ae(V(it), {
                  key: 0,
                  href: d.route("images.delete", A.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700",
                  as: "button"
                }, {
                  default: ve(() => [
                    ye(" Delete Image ")
                  ]),
                  _: 2
                }, 1032, ["href"])) : Y("", !0)
              ])
            ]))), 256))
          ])
        ])
      ])) : Y("", !0)
    ], 64));
  }
}, _w = { class: "mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" }, Pw = ["name", "value", "id", "checked"], Tw = ["for"], b4 = {
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
    const r = e, n = (a) => {
      r("update:modelValue", a.target.value);
    };
    return (a, i) => (C(), E("div", _w, [
      I("input", {
        class: "relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 ring-accent before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-accent checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-accent checked:after:bg-accent checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-accent checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px] checked:focus:before:shadow-primary checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]",
        type: "radio",
        name: t.name,
        value: t.value,
        id: t.id,
        checked: t.modelValue === t.value,
        onChange: n
      }, null, 40, Pw),
      I("label", {
        class: "mt-px inline-block pl-[0.15rem] hover:cursor-pointer",
        for: t.id
      }, Q(t.label), 9, Tw)
    ]));
  }
}, $w = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, Ic = {
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
      return C(), ae(V(Lp), {
        disabled: t.loading || ((n = t.form) == null ? void 0 : n.processing) || t.disabled,
        type: t.type,
        class: "focusable"
      }, {
        default: ve(() => {
          var a, i;
          return [
            I("div", {
              class: X({ "opacity-25": ((a = t.form) == null ? void 0 : a.processing) || t.loading })
            }, [
              K(e.$slots, "default")
            ], 2),
            (i = t.form) != null && i.processing || t.loading ? (C(), E("div", $w, [
              we(V(Np), { class: "aspect-square !h-full !w-auto text-white" })
            ])) : Y("", !0)
          ];
        }),
        _: 3
      }, 8, ["disabled", "type"]);
    };
  }
}, Iw = ["id"], Dw = {
  key: 0,
  class: "text-sm text-gray-600"
}, Rw = { class: "flex flex-col" }, w4 = {
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
    const e = ua(), r = t, n = ee(null), a = ee(null), i = ee(null), o = ee(null), s = () => {
      const f = n.value, d = f.getBoundingClientRect().top, y = document.querySelector("nav").offsetHeight, A = d - y, m = i.value, x = f.getBoundingClientRect().height + d - y * 2;
      if (A <= 0 && x > 0) {
        if (m.dataset.sticky === "true")
          return;
        m.style.display = "block", m.dataset.sticky = "true", m.style.top = `${y}px`, m.style.width = a.value.offsetWidth + "px";
        return;
      }
      m.dataset.sticky = "", m.style.display = "";
    }, u = () => {
      o.value.style.marginLeft = -a.value.scrollLeft + "px";
    }, c = () => {
      if (!n.value)
        return;
      const f = n.value.querySelector("thead tr");
      let d = o.value;
      d.innerHTML = "";
      let y = f == null ? void 0 : f.querySelectorAll("th");
      y == null || y.forEach((m) => {
        const x = m.cloneNode(!0);
        x.style.width = m.offsetWidth + "px", d.appendChild(x);
      });
      const A = i.value;
      A.style.width = a.value.offsetWidth + "px";
    };
    return r.sticky && (e.on("navigate", () => {
      qp(() => {
        c();
      });
    }), Je(() => {
      c(), window.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), a.value.addEventListener("scroll", u, { passive: !0 });
    }), Zn(() => {
      var f;
      window.removeEventListener("scroll", s), window.removeEventListener("resize", c), (f = a.value) == null || f.removeEventListener("scroll", u);
    })), (f, d) => (C(), E("div", {
      class: X({
        "!visible hidden": t.collapsable,
        "overflow-hidden": t.overflow
      }),
      id: t.collapse_id,
      "data-te-collapse-item": ""
    }, [
      t.total ? (C(), E("p", Dw, "Found: " + Q(t.total), 1)) : Y("", !0),
      I("div", Rw, [
        I("div", {
          class: X({ "overflow-x-auto": t.overflow }),
          ref_key: "table_container",
          ref: a
        }, [
          I("table", {
            class: X(["min-w-full text-left text-sm font-light", {
              "mb-14 [&>*>tr]:border-l-4 [&>*>tr]:border-l-primary-500": t.collapsable,
              " border-separate border-spacing-y-5 px-2": t.seperate
            }]),
            ref_key: "table",
            ref: n
          }, [
            t.sticky ? (C(), E("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: i,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              I("div", {
                ref_key: "sticky_header",
                ref: o,
                class: "w-max [&>th]:align-middle"
              }, null, 512)
            ], 512)) : Y("", !0),
            K(f.$slots, "default")
          ], 2)
        ], 2)
      ]),
      f.$slots.pagination ? K(f.$slots, "pagination", { key: 1 }) : t.links ? (C(), ae(V(Rp), {
        key: 2,
        class: "mt-6",
        links: t.links,
        showPerPage: t.showPerPage,
        defaultPerPage: t.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : Y("", !0)
    ], 10, Iw));
  }
}, Lw = {}, Nw = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" };
function Fw(t, e) {
  return C(), E("thead", Nw, [
    K(t.$slots, "default")
  ]);
}
const x4 = /* @__PURE__ */ en(Lw, [["render", Fw]]), Mw = { class: "flex items-center justify-between" }, Bw = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, S4 = {
  __name: "Th",
  props: {
    orderBy: String
  },
  setup(t) {
    na.add(Xm, Ym);
    const e = t, r = ee("asc"), n = ee(!1);
    let a = null;
    const i = ua();
    Je(() => {
      e.orderBy && (a = i.on("navigate", o));
    }), Zn(() => {
      a == null || a();
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
      f.order_by = e.orderBy, f.order_dir = c, i.get(route(route().current()), f, {
        preserveState: !0
      }), r.value = c, n.value = !0;
    }, u = (c) => r.value === c && n.value ? "active text-primary" : "text-gray-400";
    return (c, f) => (C(), E("th", {
      scope: "col",
      class: X(["relative py-4 text-center md:px-6 md:text-left", t.orderBy ? "cursor-pointer" : ""]),
      onClick: s
    }, [
      I("div", Mw, [
        K(c.$slots, "default"),
        t.orderBy ? (C(), E("span", Bw, [
          we(V(ht), {
            icon: "fa-sort-up",
            class: X(["absolute", u("desc")])
          }, null, 8, ["class"]),
          we(V(ht), {
            icon: "fa-sort-down",
            class: X(["absolute", u("asc")])
          }, null, 8, ["class"])
        ])) : Y("", !0)
      ])
    ], 2));
  }
}, jw = {}, zw = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" };
function Uw(t, e) {
  return C(), E("td", zw, [
    K(t.$slots, "default")
  ]);
}
const Vw = /* @__PURE__ */ en(jw, [["render", Uw]]), Hw = ["data-te-target", "aria-controls"], O4 = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (C(), E("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      K(e.$slots, "default")
    ], 8, Hw));
  }
}, qw = { colspan: "999" }, Ww = ["id"], A4 = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (C(), E("tr", null, [
      I("td", qw, [
        I("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          K(e.$slots, "default")
        ], 8, Ww)
      ])
    ]));
  }
};
var ql = { exports: {} }, de = String, Fd = function() {
  return { isColorSupported: !1, reset: de, bold: de, dim: de, italic: de, underline: de, inverse: de, hidden: de, strikethrough: de, black: de, red: de, green: de, yellow: de, blue: de, magenta: de, cyan: de, white: de, gray: de, bgBlack: de, bgRed: de, bgGreen: de, bgYellow: de, bgBlue: de, bgMagenta: de, bgCyan: de, bgWhite: de };
};
ql.exports = Fd();
ql.exports.createColors = Fd;
var Gw = ql.exports;
let Dc = Gw, Rc = Be, Js = class Md extends Error {
  constructor(e, r, n, a, i, o) {
    super(e), this.name = "CssSyntaxError", this.reason = e, i && (this.file = i), a && (this.source = a), o && (this.plugin = o), typeof r < "u" && typeof n < "u" && (typeof r == "number" ? (this.line = r, this.column = n) : (this.line = r.line, this.column = r.column, this.endLine = n.line, this.endColumn = n.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Md);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source)
      return "";
    let r = this.source;
    e == null && (e = Dc.isColorSupported), Rc && e && (r = Rc(r));
    let n = r.split(/\r?\n/), a = Math.max(this.line - 3, 0), i = Math.min(this.line + 2, n.length), o = String(i).length, s, u;
    if (e) {
      let { bold: c, gray: f, red: d } = Dc.createColors(!0);
      s = (y) => c(d(y)), u = (y) => f(y);
    } else
      s = u = (c) => c;
    return n.slice(a, i).map((c, f) => {
      let d = a + 1 + f, y = " " + (" " + d).slice(-o) + " | ";
      if (d === this.line) {
        let A = u(y.replace(/\d/g, " ")) + c.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return s(">") + u(y) + c + `
 ` + A + s("^");
      }
      return " " + u(y) + c;
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
var Wl = Js;
Js.default = Js;
var da = {};
da.isClean = Symbol("isClean");
da.my = Symbol("my");
const Lc = {
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
function Yw(t) {
  return t[0].toUpperCase() + t.slice(1);
}
let Xs = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, r) {
    let n = "@" + e.name, a = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? n += e.raws.afterName : a && (n += " "), e.nodes)
      this.block(e, n + a);
    else {
      let i = (e.raws.between || "") + (r ? ";" : "");
      this.builder(n + a + i, e);
    }
  }
  beforeAfter(e, r) {
    let n;
    e.type === "decl" ? n = this.raw(e, null, "beforeDecl") : e.type === "comment" ? n = this.raw(e, null, "beforeComment") : r === "before" ? n = this.raw(e, null, "beforeRule") : n = this.raw(e, null, "beforeClose");
    let a = e.parent, i = 0;
    for (; a && a.type !== "root"; )
      i += 1, a = a.parent;
    if (n.includes(`
`)) {
      let o = this.raw(e, null, "indent");
      if (o.length)
        for (let s = 0; s < i; s++)
          n += o;
    }
    return n;
  }
  block(e, r) {
    let n = this.raw(e, "between", "beforeOpen");
    this.builder(r + n + "{", e, "start");
    let a;
    e.nodes && e.nodes.length ? (this.body(e), a = this.raw(e, "after")) : a = this.raw(e, "after", "emptyBody"), a && this.builder(a), this.builder("}", e, "end");
  }
  body(e) {
    let r = e.nodes.length - 1;
    for (; r > 0 && e.nodes[r].type === "comment"; )
      r -= 1;
    let n = this.raw(e, "semicolon");
    for (let a = 0; a < e.nodes.length; a++) {
      let i = e.nodes[a], o = this.raw(i, "before");
      o && this.builder(o), this.stringify(i, r !== a || n);
    }
  }
  comment(e) {
    let r = this.raw(e, "left", "commentLeft"), n = this.raw(e, "right", "commentRight");
    this.builder("/*" + r + e.text + n + "*/", e);
  }
  decl(e, r) {
    let n = this.raw(e, "between", "colon"), a = e.prop + n + this.rawValue(e, "value");
    e.important && (a += e.raws.important || " !important"), r && (a += ";"), this.builder(a, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, r, n) {
    let a;
    if (n || (n = r), r && (a = e.raws[r], typeof a < "u"))
      return a;
    let i = e.parent;
    if (n === "before" && (!i || i.type === "root" && i.first === e || i && i.type === "document"))
      return "";
    if (!i)
      return Lc[n];
    let o = e.root();
    if (o.rawCache || (o.rawCache = {}), typeof o.rawCache[n] < "u")
      return o.rawCache[n];
    if (n === "before" || n === "after")
      return this.beforeAfter(e, n);
    {
      let s = "raw" + Yw(n);
      this[s] ? a = this[s](o, e) : o.walk((u) => {
        if (a = u.raws[r], typeof a < "u")
          return !1;
      });
    }
    return typeof a > "u" && (a = Lc[n]), o.rawCache[n] = a, a;
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
    return e.walkComments((a) => {
      if (typeof a.raws.before < "u")
        return n = a.raws.before, n.includes(`
`) && (n = n.replace(/[^\n]+$/, "")), !1;
    }), typeof n > "u" ? n = this.raw(r, null, "beforeDecl") : n && (n = n.replace(/\S/g, "")), n;
  }
  rawBeforeDecl(e, r) {
    let n;
    return e.walkDecls((a) => {
      if (typeof a.raws.before < "u")
        return n = a.raws.before, n.includes(`
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
      let a = n.parent;
      if (a && a !== e && a.parent && a.parent === e && typeof n.raws.before < "u") {
        let i = n.raws.before.split(`
`);
        return r = i[i.length - 1], r = r.replace(/\S/g, ""), !1;
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
    let n = e[r], a = e.raws[r];
    return a && a.value === n ? a.raw : n;
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
var Bd = Xs;
Xs.default = Xs;
let Kw = Bd;
function Qs(t, e) {
  new Kw(e).stringify(t);
}
var Hi = Qs;
Qs.default = Qs;
let { isClean: Ya, my: Jw } = da, Xw = Wl, Qw = Bd, Zw = Hi;
function Zs(t, e) {
  let r = new t.constructor();
  for (let n in t) {
    if (!Object.prototype.hasOwnProperty.call(t, n) || n === "proxyCache")
      continue;
    let a = t[n], i = typeof a;
    n === "parent" && i === "object" ? e && (r[n] = e) : n === "source" ? r[n] = a : Array.isArray(a) ? r[n] = a.map((o) => Zs(o, r)) : (i === "object" && a !== null && (a = Zs(a)), r[n] = a);
  }
  return r;
}
let el = class {
  constructor(e = {}) {
    this.raws = {}, this[Ya] = !1, this[Jw] = !0;
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
    let r = Zs(this);
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
      let { end: n, start: a } = this.rangeBy(r);
      return this.source.input.error(
        e,
        { column: a.column, line: a.line },
        { column: n.column, line: n.line },
        r
      );
    }
    return new Xw(e);
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
  markDirty() {
    if (this[Ya]) {
      this[Ya] = !1;
      let e = this;
      for (; e = e.parent; )
        e[Ya] = !1;
    }
  }
  next() {
    if (!this.parent)
      return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e, r) {
    let n = this.source.start;
    if (e.index)
      n = this.positionInside(e.index, r);
    else if (e.word) {
      r = this.toString();
      let a = r.indexOf(e.word);
      a !== -1 && (n = this.positionInside(a, r));
    }
    return n;
  }
  positionInside(e, r) {
    let n = r || this.toString(), a = this.source.start.column, i = this.source.start.line;
    for (let o = 0; o < e; o++)
      n[o] === `
` ? (a = 1, i += 1) : a += 1;
    return { column: a, line: i };
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
      let a = this.toString(), i = a.indexOf(e.word);
      i !== -1 && (r = this.positionInside(i, a), n = this.positionInside(i + e.word.length, a));
    } else
      e.start ? r = {
        column: e.start.column,
        line: e.start.line
      } : e.index && (r = this.positionInside(e.index)), e.end ? n = {
        column: e.end.column,
        line: e.end.line
      } : e.endIndex ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
    return (n.line < r.line || n.line === r.line && n.column <= r.column) && (n = { column: r.column + 1, line: r.line }), { end: n, start: r };
  }
  raw(e, r) {
    return new Qw().raw(this, e, r);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let r = this, n = !1;
      for (let a of e)
        a === this ? n = !0 : n ? (this.parent.insertAfter(r, a), r = a) : this.parent.insertBefore(r, a);
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
    let n = {}, a = r == null;
    r = r || /* @__PURE__ */ new Map();
    let i = 0;
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
        u == null && (u = i, r.set(s.input, i), i++), n[o] = {
          end: s.end,
          inputId: u,
          start: s.start
        };
      } else
        n[o] = s;
    }
    return a && (n.inputs = [...r.keys()].map((o) => o.toJSON())), n;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = Zw) {
    e.stringify && (e = e.stringify);
    let r = "";
    return e(this, (n) => {
      r += n;
    }), r;
  }
  warn(e, r, n) {
    let a = { node: this };
    for (let i in n)
      a[i] = n[i];
    return e.warn(r, a);
  }
  get proxyOf() {
    return this;
  }
};
var qi = el;
el.default = el;
let e2 = qi, tl = class extends e2 {
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
};
var Wi = tl;
tl.default = tl;
let t2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", r2 = (t, e = 21) => (r = e) => {
  let n = "", a = r;
  for (; a--; )
    n += t[Math.random() * t.length | 0];
  return n;
}, n2 = (t = 21) => {
  let e = "", r = t;
  for (; r--; )
    e += t2[Math.random() * 64 | 0];
  return e;
};
var a2 = { nanoid: n2, customAlphabet: r2 };
let { SourceMapConsumer: Nc, SourceMapGenerator: Fc } = Be, { existsSync: i2, readFileSync: o2 } = Be, { dirname: os, join: s2 } = Be;
function l2(t) {
  return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
}
let rl = class {
  constructor(e, r) {
    if (r.map === !1)
      return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let n = r.map ? r.map.prev : void 0, a = this.loadMap(r.from, n);
    !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = os(this.mapFile)), a && (this.text = a);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new Nc(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let r = /^data:application\/json;charset=utf-?8;base64,/, n = /^data:application\/json;base64,/, a = /^data:application\/json;charset=utf-?8,/, i = /^data:application\/json,/;
    if (a.test(e) || i.test(e))
      return decodeURIComponent(e.substr(RegExp.lastMatch.length));
    if (r.test(e) || n.test(e))
      return l2(e.substr(RegExp.lastMatch.length));
    let o = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + o);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let r = e.match(/\/\*\s*# sourceMappingURL=/gm);
    if (!r)
      return;
    let n = e.lastIndexOf(r.pop()), a = e.indexOf("*/", n);
    n > -1 && a > -1 && (this.annotation = this.getAnnotationURL(e.substring(n, a)));
  }
  loadFile(e) {
    if (this.root = os(e), i2(e))
      return this.mapFile = e, o2(e, "utf-8").toString().trim();
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
          let a = this.loadFile(n);
          if (!a)
            throw new Error(
              "Unable to load previous source map: " + n.toString()
            );
          return a;
        }
      } else {
        if (r instanceof Nc)
          return Fc.fromSourceMap(r).toString();
        if (r instanceof Fc)
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
        return e && (n = s2(os(e), n)), this.loadFile(n);
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
var jd = rl;
rl.default = rl;
let { SourceMapConsumer: u2, SourceMapGenerator: c2 } = Be, { fileURLToPath: Mc, pathToFileURL: Ka } = Be, { isAbsolute: nl, resolve: al } = Be, { nanoid: f2 } = a2, ss = Be, Bc = Wl, d2 = jd, ls = Symbol("fromOffsetCache"), p2 = !!(u2 && c2), jc = !!(al && nl), ki = class {
  constructor(e, r = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, r.from && (!jc || /^\w+:\/\//.test(r.from) || nl(r.from) ? this.file = r.from : this.file = al(r.from)), jc && p2) {
      let n = new d2(this.css, r);
      if (n.text) {
        this.map = n;
        let a = n.consumer().file;
        !this.file && a && (this.file = this.mapResolve(a));
      }
    }
    this.file || (this.id = "<input css " + f2(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, r, n, a = {}) {
    let i, o, s;
    if (r && typeof r == "object") {
      let c = r, f = n;
      if (typeof c.offset == "number") {
        let d = this.fromOffset(c.offset);
        r = d.line, n = d.col;
      } else
        r = c.line, n = c.column;
      if (typeof f.offset == "number") {
        let d = this.fromOffset(f.offset);
        o = d.line, s = d.col;
      } else
        o = f.line, s = f.column;
    } else if (!n) {
      let c = this.fromOffset(r);
      r = c.line, n = c.col;
    }
    let u = this.origin(r, n, o, s);
    return u ? i = new Bc(
      e,
      u.endLine === void 0 ? u.line : { column: u.column, line: u.line },
      u.endLine === void 0 ? u.column : { column: u.endColumn, line: u.endLine },
      u.source,
      u.file,
      a.plugin
    ) : i = new Bc(
      e,
      o === void 0 ? r : { column: n, line: r },
      o === void 0 ? n : { column: s, line: o },
      this.css,
      this.file,
      a.plugin
    ), i.input = { column: n, endColumn: s, endLine: o, line: r, source: this.css }, this.file && (Ka && (i.input.url = Ka(this.file).toString()), i.input.file = this.file), i;
  }
  fromOffset(e) {
    let r, n;
    if (this[ls])
      n = this[ls];
    else {
      let i = this.css.split(`
`);
      n = new Array(i.length);
      let o = 0;
      for (let s = 0, u = i.length; s < u; s++)
        n[s] = o, o += i[s].length + 1;
      this[ls] = n;
    }
    r = n[n.length - 1];
    let a = 0;
    if (e >= r)
      a = n.length - 1;
    else {
      let i = n.length - 2, o;
      for (; a < i; )
        if (o = a + (i - a >> 1), e < n[o])
          i = o - 1;
        else if (e >= n[o + 1])
          a = o + 1;
        else {
          a = o;
          break;
        }
    }
    return {
      col: e - n[a] + 1,
      line: a + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : al(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, r, n, a) {
    if (!this.map)
      return !1;
    let i = this.map.consumer(), o = i.originalPositionFor({ column: r, line: e });
    if (!o.source)
      return !1;
    let s;
    typeof n == "number" && (s = i.originalPositionFor({ column: a, line: n }));
    let u;
    nl(o.source) ? u = Ka(o.source) : u = new URL(
      o.source,
      this.map.consumer().sourceRoot || Ka(this.map.mapFile)
    );
    let c = {
      column: o.column,
      endColumn: s && s.column,
      endLine: s && s.line,
      line: o.line,
      url: u.toString()
    };
    if (u.protocol === "file:")
      if (Mc)
        c.file = Mc(u);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let f = i.sourceContentFor(o.source);
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
var Gi = ki;
ki.default = ki;
ss && ss.registerInput && ss.registerInput(ki);
let { SourceMapConsumer: zd, SourceMapGenerator: fi } = Be, { dirname: di, relative: Ud, resolve: Vd, sep: Hd } = Be, { pathToFileURL: zc } = Be, h2 = Gi, m2 = !!(zd && fi), g2 = !!(di && Vd && Ud && Hd), y2 = class {
  constructor(e, r, n, a) {
    this.stringify = e, this.mapOpts = n.map || {}, this.root = r, this.opts = n, this.css = a, this.originalCSS = a, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
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
      let r = this.toUrl(this.path(e.file)), n = e.root || di(e.file), a;
      this.mapOpts.sourcesContent === !1 ? (a = new zd(e.text), a.sourcesContent && (a.sourcesContent = null)) : a = e.consumer(), this.map.applySourceMap(a, r, this.toUrl(this.path(n)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let r = this.root.nodes.length - 1; r >= 0; r--)
          e = this.root.nodes[r], e.type === "comment" && e.text.indexOf("# sourceMappingURL=") === 0 && this.root.removeChild(r);
      } else
        this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), g2 && m2 && this.isMap())
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
      e.file = this.outputFile(), this.map = fi.fromSourceMap(e);
    } else
      this.map = new fi({ file: this.outputFile() }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new fi({ file: this.outputFile() });
    let e = 1, r = 1, n = "<no source>", a = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, i, o;
    this.stringify(this.root, (s, u, c) => {
      if (this.css += s, u && c !== "end" && (a.generated.line = e, a.generated.column = r - 1, u.source && u.source.start ? (a.source = this.sourcePath(u), a.original.line = u.source.start.line, a.original.column = u.source.start.column - 1, this.map.addMapping(a)) : (a.source = n, a.original.line = 1, a.original.column = 0, this.map.addMapping(a))), i = s.match(/\n/g), i ? (e += i.length, o = s.lastIndexOf(`
`), r = s.length - o) : r += s.length, u && c !== "start") {
        let f = u.parent || { raws: {} };
        (!(u.type === "decl" || u.type === "atrule" && !u.nodes) || u !== f.last || f.raws.semicolon) && (u.source && u.source.end ? (a.source = this.sourcePath(u), a.original.line = u.source.end.line, a.original.column = u.source.end.column - 1, a.generated.line = e, a.generated.column = r - 2, this.map.addMapping(a)) : (a.source = n, a.original.line = 1, a.original.column = 0, a.generated.line = e, a.generated.column = r - 1, this.map.addMapping(a)));
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
    let n = this.opts.to ? di(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (n = di(Vd(n, this.mapOpts.annotation)));
    let a = Ud(n, e);
    return this.memoizedPaths.set(e, a), a;
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
        let e = new h2(this.originalCSS, this.opts);
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
            let a = this.usesFileUrls ? this.toFileUrl(n) : this.toUrl(this.path(n));
            this.map.setSourceContent(a, r.source.input.css);
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
    if (zc) {
      let n = zc(e).toString();
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
    Hd === "\\" && (e = e.replace(/\\/g, "/"));
    let n = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, n), n;
  }
};
var qd = y2;
let v2 = qi, il = class extends v2 {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var Yi = il;
il.default = il;
let { isClean: Wd, my: Gd } = da, Yd = Wi, Kd = Yi, b2 = qi, Jd, Gl, Yl, Xd;
function Qd(t) {
  return t.map((e) => (e.nodes && (e.nodes = Qd(e.nodes)), delete e.source, e));
}
function Zd(t) {
  if (t[Wd] = !1, t.proxyOf.nodes)
    for (let e of t.proxyOf.nodes)
      Zd(e);
}
let $t = class ep extends b2 {
  append(...e) {
    for (let r of e) {
      let n = this.normalize(r, this.last);
      for (let a of n)
        this.proxyOf.nodes.push(a);
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
    let r = this.getIterator(), n, a;
    for (; this.indexes[r] < this.proxyOf.nodes.length && (n = this.indexes[r], a = e(this.proxyOf.nodes[n], n), a !== !1); )
      this.indexes[r] += 1;
    return delete this.indexes[r], a;
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
          ...n.map((a) => typeof a == "function" ? (i, o) => a(i.toProxy(), o) : a)
        ) : r === "every" || r === "some" ? (n) => e[r](
          (a, ...i) => n(a.toProxy(), ...i)
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
    let n = this.index(e), a = this.normalize(r, this.proxyOf.nodes[n]).reverse();
    n = this.index(e);
    for (let o of a)
      this.proxyOf.nodes.splice(n + 1, 0, o);
    let i;
    for (let o in this.indexes)
      i = this.indexes[o], n < i && (this.indexes[o] = i + a.length);
    return this.markDirty(), this;
  }
  insertBefore(e, r) {
    let n = this.index(e), a = n === 0 ? "prepend" : !1, i = this.normalize(r, this.proxyOf.nodes[n], a).reverse();
    n = this.index(e);
    for (let s of i)
      this.proxyOf.nodes.splice(n, 0, s);
    let o;
    for (let s in this.indexes)
      o = this.indexes[s], n <= o && (this.indexes[s] = o + i.length);
    return this.markDirty(), this;
  }
  normalize(e, r) {
    if (typeof e == "string")
      e = Qd(Jd(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let a of e)
        a.parent && a.parent.removeChild(a, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let a of e)
        a.parent && a.parent.removeChild(a, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new Yd(e)];
    } else if (e.selector)
      e = [new Gl(e)];
    else if (e.name)
      e = [new Yl(e)];
    else if (e.text)
      e = [new Kd(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((a) => (a[Gd] || ep.rebuild(a), a = a.proxyOf, a.parent && a.parent.removeChild(a), a[Wd] && Zd(a), typeof a.raws.before > "u" && r && typeof r.raws.before < "u" && (a.raws.before = r.raws.before.replace(/\S/g, "")), a.parent = this.proxyOf, a));
  }
  prepend(...e) {
    e = e.reverse();
    for (let r of e) {
      let n = this.normalize(r, this.first, "prepend").reverse();
      for (let a of n)
        this.proxyOf.nodes.unshift(a);
      for (let a in this.indexes)
        this.indexes[a] = this.indexes[a] + n.length;
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
    return n || (n = r, r = {}), this.walkDecls((a) => {
      r.props && !r.props.includes(a.prop) || r.fast && !a.value.includes(r.fast) || (a.value = a.value.replace(e, n));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((r, n) => {
      let a;
      try {
        a = e(r, n);
      } catch (i) {
        throw r.addToError(i);
      }
      return a !== !1 && r.walk && (a = r.walk(e)), a;
    });
  }
  walkAtRules(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, a) => {
      if (n.type === "atrule" && e.test(n.name))
        return r(n, a);
    }) : this.walk((n, a) => {
      if (n.type === "atrule" && n.name === e)
        return r(n, a);
    }) : (r = e, this.walk((n, a) => {
      if (n.type === "atrule")
        return r(n, a);
    }));
  }
  walkComments(e) {
    return this.walk((r, n) => {
      if (r.type === "comment")
        return e(r, n);
    });
  }
  walkDecls(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, a) => {
      if (n.type === "decl" && e.test(n.prop))
        return r(n, a);
    }) : this.walk((n, a) => {
      if (n.type === "decl" && n.prop === e)
        return r(n, a);
    }) : (r = e, this.walk((n, a) => {
      if (n.type === "decl")
        return r(n, a);
    }));
  }
  walkRules(e, r) {
    return r ? e instanceof RegExp ? this.walk((n, a) => {
      if (n.type === "rule" && e.test(n.selector))
        return r(n, a);
    }) : this.walk((n, a) => {
      if (n.type === "rule" && n.selector === e)
        return r(n, a);
    }) : (r = e, this.walk((n, a) => {
      if (n.type === "rule")
        return r(n, a);
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
$t.registerParse = (t) => {
  Jd = t;
};
$t.registerRule = (t) => {
  Gl = t;
};
$t.registerAtRule = (t) => {
  Yl = t;
};
$t.registerRoot = (t) => {
  Xd = t;
};
var vr = $t;
$t.default = $t;
$t.rebuild = (t) => {
  t.type === "atrule" ? Object.setPrototypeOf(t, Yl.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, Gl.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, Yd.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, Kd.prototype) : t.type === "root" && Object.setPrototypeOf(t, Xd.prototype), t[Gd] = !0, t.nodes && t.nodes.forEach((e) => {
    $t.rebuild(e);
  });
};
let w2 = vr, tp, rp, Yn = class extends w2 {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new tp(new rp(), this, e).stringify();
  }
};
Yn.registerLazyResult = (t) => {
  tp = t;
};
Yn.registerProcessor = (t) => {
  rp = t;
};
var Kl = Yn;
Yn.default = Yn;
let Uc = {};
var np = function(e) {
  Uc[e] || (Uc[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let ol = class {
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
var ap = ol;
ol.default = ol;
let x2 = ap, sl = class {
  constructor(e, r, n) {
    this.processor = e, this.messages = [], this.root = r, this.opts = n, this.css = void 0, this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, r = {}) {
    r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    let n = new x2(e, r);
    return this.messages.push(n), n;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
  get content() {
    return this.css;
  }
};
var Jl = sl;
sl.default = sl;
const us = "'".charCodeAt(0), Vc = '"'.charCodeAt(0), Ja = "\\".charCodeAt(0), Hc = "/".charCodeAt(0), Xa = `
`.charCodeAt(0), kn = " ".charCodeAt(0), Qa = "\f".charCodeAt(0), Za = "	".charCodeAt(0), ei = "\r".charCodeAt(0), S2 = "[".charCodeAt(0), O2 = "]".charCodeAt(0), A2 = "(".charCodeAt(0), C2 = ")".charCodeAt(0), E2 = "{".charCodeAt(0), k2 = "}".charCodeAt(0), _2 = ";".charCodeAt(0), P2 = "*".charCodeAt(0), T2 = ":".charCodeAt(0), $2 = "@".charCodeAt(0), ti = /[\t\n\f\r "#'()/;[\\\]{}]/g, ri = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, I2 = /.[\r\n"'(/\\]/, qc = /[\da-f]/i;
var D2 = function(e, r = {}) {
  let n = e.css.valueOf(), a = r.ignoreErrors, i, o, s, u, c, f, d, y, A, m, x = n.length, S = 0, O = [], P = [];
  function _() {
    return S;
  }
  function T(j) {
    throw e.error("Unclosed " + j, S);
  }
  function L() {
    return P.length === 0 && S >= x;
  }
  function R(j) {
    if (P.length)
      return P.pop();
    if (S >= x)
      return;
    let B = j ? j.ignoreUnclosed : !1;
    switch (i = n.charCodeAt(S), i) {
      case Xa:
      case kn:
      case Za:
      case ei:
      case Qa: {
        o = S;
        do
          o += 1, i = n.charCodeAt(o);
        while (i === kn || i === Xa || i === Za || i === ei || i === Qa);
        m = ["space", n.slice(S, o)], S = o - 1;
        break;
      }
      case S2:
      case O2:
      case E2:
      case k2:
      case T2:
      case _2:
      case C2: {
        let D = String.fromCharCode(i);
        m = [D, D, S];
        break;
      }
      case A2: {
        if (y = O.length ? O.pop()[1] : "", A = n.charCodeAt(S + 1), y === "url" && A !== us && A !== Vc && A !== kn && A !== Xa && A !== Za && A !== Qa && A !== ei) {
          o = S;
          do {
            if (f = !1, o = n.indexOf(")", o + 1), o === -1)
              if (a || B) {
                o = S;
                break;
              } else
                T("bracket");
            for (d = o; n.charCodeAt(d - 1) === Ja; )
              d -= 1, f = !f;
          } while (f);
          m = ["brackets", n.slice(S, o + 1), S, o], S = o;
        } else
          o = n.indexOf(")", S + 1), u = n.slice(S, o + 1), o === -1 || I2.test(u) ? m = ["(", "(", S] : (m = ["brackets", u, S, o], S = o);
        break;
      }
      case us:
      case Vc: {
        s = i === us ? "'" : '"', o = S;
        do {
          if (f = !1, o = n.indexOf(s, o + 1), o === -1)
            if (a || B) {
              o = S + 1;
              break;
            } else
              T("string");
          for (d = o; n.charCodeAt(d - 1) === Ja; )
            d -= 1, f = !f;
        } while (f);
        m = ["string", n.slice(S, o + 1), S, o], S = o;
        break;
      }
      case $2: {
        ti.lastIndex = S + 1, ti.test(n), ti.lastIndex === 0 ? o = n.length - 1 : o = ti.lastIndex - 2, m = ["at-word", n.slice(S, o + 1), S, o], S = o;
        break;
      }
      case Ja: {
        for (o = S, c = !0; n.charCodeAt(o + 1) === Ja; )
          o += 1, c = !c;
        if (i = n.charCodeAt(o + 1), c && i !== Hc && i !== kn && i !== Xa && i !== Za && i !== ei && i !== Qa && (o += 1, qc.test(n.charAt(o)))) {
          for (; qc.test(n.charAt(o + 1)); )
            o += 1;
          n.charCodeAt(o + 1) === kn && (o += 1);
        }
        m = ["word", n.slice(S, o + 1), S, o], S = o;
        break;
      }
      default: {
        i === Hc && n.charCodeAt(S + 1) === P2 ? (o = n.indexOf("*/", S + 2) + 1, o === 0 && (a || B ? o = n.length : T("comment")), m = ["comment", n.slice(S, o + 1), S, o], S = o) : (ri.lastIndex = S + 1, ri.test(n), ri.lastIndex === 0 ? o = n.length - 1 : o = ri.lastIndex - 2, m = ["word", n.slice(S, o + 1), S, o], O.push(m), S = o);
        break;
      }
    }
    return S++, m;
  }
  function M(j) {
    P.push(j);
  }
  return {
    back: M,
    endOfFile: L,
    nextToken: R,
    position: _
  };
};
let ip = vr, _i = class extends ip {
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
var Xl = _i;
_i.default = _i;
ip.registerAtRule(_i);
let op = vr, sp, lp, Jr = class extends op {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, r, n) {
    let a = super.normalize(e);
    if (r) {
      if (n === "prepend")
        this.nodes.length > 1 ? r.raws.before = this.nodes[1].raws.before : delete r.raws.before;
      else if (this.first !== r)
        for (let i of a)
          i.raws.before = r.raws.before;
    }
    return a;
  }
  removeChild(e, r) {
    let n = this.index(e);
    return !r && n === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new sp(new lp(), this, e).stringify();
  }
};
Jr.registerLazyResult = (t) => {
  sp = t;
};
Jr.registerProcessor = (t) => {
  lp = t;
};
var pa = Jr;
Jr.default = Jr;
op.registerRoot(Jr);
let Kn = {
  comma(t) {
    return Kn.split(t, [","], !0);
  },
  space(t) {
    let e = [" ", `
`, "	"];
    return Kn.split(t, e);
  },
  split(t, e, r) {
    let n = [], a = "", i = !1, o = 0, s = !1, u = "", c = !1;
    for (let f of t)
      c ? c = !1 : f === "\\" ? c = !0 : s ? f === u && (s = !1) : f === '"' || f === "'" ? (s = !0, u = f) : f === "(" ? o += 1 : f === ")" ? o > 0 && (o -= 1) : o === 0 && e.includes(f) && (i = !0), i ? (a !== "" && n.push(a.trim()), a = "", i = !1) : a += f;
    return (r || a !== "") && n.push(a.trim()), n;
  }
};
var up = Kn;
Kn.default = Kn;
let cp = vr, R2 = up, Pi = class extends cp {
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
  get selectors() {
    return R2.comma(this.selector);
  }
  set selectors(e) {
    let r = this.selector ? this.selector.match(/,\s*/) : null, n = r ? r[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(n);
  }
};
var Ql = Pi;
Pi.default = Pi;
cp.registerRule(Pi);
let L2 = Wi, N2 = D2, F2 = Yi, M2 = Xl, B2 = pa, Wc = Ql;
const Gc = {
  empty: !0,
  space: !0
};
function j2(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e], n = r[3] || r[2];
    if (n)
      return n;
  }
}
let z2 = class {
  constructor(e) {
    this.input = e, this.root = new B2(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let r = new M2();
    r.name = e[1].slice(1), r.name === "" && this.unnamedAtrule(r, e), this.init(r, e[2]);
    let n, a, i, o = !1, s = !1, u = [], c = [];
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
            for (i = u.length - 1, a = u[i]; a && a[0] === "space"; )
              a = u[--i];
            a && (r.source.end = this.getPosition(a[3] || a[2]), r.source.end.offset++);
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
    let n = 0, a;
    for (let i = r - 1; i >= 0 && (a = e[i], !(a[0] !== "space" && (n += 1, n === 2))); i--)
      ;
    throw this.input.error(
      "Missed semicolon",
      a[0] === "word" ? a[3] + 1 : a[2]
    );
  }
  colon(e) {
    let r = 0, n, a, i;
    for (let [o, s] of e.entries()) {
      if (n = s, a = n[0], a === "(" && (r += 1), a === ")" && (r -= 1), r === 0 && a === ":")
        if (!i)
          this.doubleColon(n);
        else {
          if (i[0] === "word" && i[1] === "progid")
            continue;
          return o;
        }
      i = n;
    }
    return !1;
  }
  comment(e) {
    let r = new F2();
    this.init(r, e[2]), r.source.end = this.getPosition(e[3] || e[2]), r.source.end.offset++;
    let n = e[1].slice(2, -2);
    if (/^\s*$/.test(n))
      r.text = "", r.raws.left = n, r.raws.right = "";
    else {
      let a = n.match(/^(\s*)([^]*\S)(\s*)$/);
      r.text = a[2], r.raws.left = a[1], r.raws.right = a[3];
    }
  }
  createTokenizer() {
    this.tokenizer = N2(this.input);
  }
  decl(e, r) {
    let n = new L2();
    this.init(n, e[0][2]);
    let a = e[e.length - 1];
    for (a[0] === ";" && (this.semicolon = !0, e.pop()), n.source.end = this.getPosition(
      a[3] || a[2] || j2(e)
    ), n.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), n.raws.before += e.shift()[1];
    for (n.source.start = this.getPosition(e[0][2]), n.prop = ""; e.length; ) {
      let c = e[0][0];
      if (c === ":" || c === "space" || c === "comment")
        break;
      n.prop += e.shift()[1];
    }
    n.raws.between = "";
    let i;
    for (; e.length; )
      if (i = e.shift(), i[0] === ":") {
        n.raws.between += i[1];
        break;
      } else
        i[0] === "word" && /\w/.test(i[1]) && this.unknownWord([i]), n.raws.between += i[1];
    (n.prop[0] === "_" || n.prop[0] === "*") && (n.raws.before += n.prop[0], n.prop = n.prop.slice(1));
    let o = [], s;
    for (; e.length && (s = e[0][0], !(s !== "space" && s !== "comment")); )
      o.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let c = e.length - 1; c >= 0; c--) {
      if (i = e[c], i[1].toLowerCase() === "!important") {
        n.important = !0;
        let f = this.stringFrom(e, c);
        f = this.spacesFromEnd(e) + f, f !== " !important" && (n.raws.important = f);
        break;
      } else if (i[1].toLowerCase() === "important") {
        let f = e.slice(0), d = "";
        for (let y = c; y > 0; y--) {
          let A = f[y][0];
          if (d.trim().indexOf("!") === 0 && A !== "space")
            break;
          d = f.pop()[1] + d;
        }
        d.trim().indexOf("!") === 0 && (n.important = !0, n.raws.important = d, e = f);
      }
      if (i[0] !== "space" && i[0] !== "comment")
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
    let r = new Wc();
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
    let r = !1, n = null, a = !1, i = null, o = [], s = e[1].startsWith("--"), u = [], c = e;
    for (; c; ) {
      if (n = c[0], u.push(c), n === "(" || n === "[")
        i || (i = c), o.push(n === "(" ? ")" : "]");
      else if (s && a && n === "{")
        i || (i = c), o.push("}");
      else if (o.length === 0)
        if (n === ";")
          if (a) {
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
          n === ":" && (a = !0);
      else
        n === o[o.length - 1] && (o.pop(), o.length === 0 && (i = null));
      c = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (r = !0), o.length > 0 && this.unclosedBracket(i), r && a) {
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
  raw(e, r, n, a) {
    let i, o, s = n.length, u = "", c = !0, f, d;
    for (let y = 0; y < s; y += 1)
      i = n[y], o = i[0], o === "space" && y === s - 1 && !a ? c = !1 : o === "comment" ? (d = n[y - 1] ? n[y - 1][0] : "empty", f = n[y + 1] ? n[y + 1][0] : "empty", !Gc[d] && !Gc[f] ? u.slice(-1) === "," ? c = !1 : u += i[1] : c = !1) : u += i[1];
    if (!c) {
      let y = n.reduce((A, m) => A + m[1], "");
      e.raws[r] = { raw: y, value: u };
    }
    e[r] = u;
  }
  rule(e) {
    e.pop();
    let r = new Wc();
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
    for (let a = r; a < e.length; a++)
      n += e[a][1];
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
var U2 = z2;
let V2 = vr, H2 = U2, q2 = Gi;
function Ti(t, e) {
  let r = new q2(t, e), n = new H2(r);
  try {
    n.parse();
  } catch (a) {
    throw process.env.NODE_ENV !== "production" && a.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? a.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? a.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (a.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), a;
  }
  return n.root;
}
var Zl = Ti;
Ti.default = Ti;
V2.registerParse(Ti);
let { isClean: ft, my: W2 } = da, G2 = qd, Y2 = Hi, K2 = vr, J2 = Kl, X2 = np, Yc = Jl, Q2 = Zl, Z2 = pa;
const ex = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, tx = {
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
}, rx = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, Xr = 0;
function _n(t) {
  return typeof t == "object" && typeof t.then == "function";
}
function fp(t) {
  let e = !1, r = ex[t.type];
  return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [
    r,
    r + "-" + e,
    Xr,
    r + "Exit",
    r + "Exit-" + e
  ] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, Xr, r + "Exit"] : [r, r + "Exit"];
}
function Kc(t) {
  let e;
  return t.type === "document" ? e = ["Document", Xr, "DocumentExit"] : t.type === "root" ? e = ["Root", Xr, "RootExit"] : e = fp(t), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: t,
    visitorIndex: 0,
    visitors: []
  };
}
function ll(t) {
  return t[ft] = !1, t.nodes && t.nodes.forEach((e) => ll(e)), t;
}
let ul = {}, Qr = class dp {
  constructor(e, r, n) {
    this.stringified = !1, this.processed = !1;
    let a;
    if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document"))
      a = ll(r);
    else if (r instanceof dp || r instanceof Yc)
      a = ll(r.root), r.map && (typeof n.map > "u" && (n.map = {}), n.map.inline || (n.map.inline = !1), n.map.prev = r.map);
    else {
      let i = Q2;
      n.syntax && (i = n.syntax.parse), n.parser && (i = n.parser), i.parse && (i = i.parse);
      try {
        a = i(r, n);
      } catch (o) {
        this.processed = !0, this.error = o;
      }
      a && !a[W2] && K2.rebuild(a);
    }
    this.result = new Yc(e, a, n), this.helpers = { ...ul, postcss: ul, result: this.result }, this.plugins = this.processor.plugins.map((i) => typeof i == "object" && i.prepare ? { ...i, ...i.prepare(this.result) } : i);
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
        let a = n.postcssPlugin, i = n.postcssVersion, o = this.result.processor.version, s = i.split("."), u = o.split(".");
        (s[0] !== u[0] || parseInt(s[1]) > parseInt(u[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + o + ", but " + a + " uses " + i + ". Perhaps this is the source of the error below."
        );
      }
    } catch (a) {
      console && console.error && console.error(a);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (r, n, a) => {
      this.listeners[n] || (this.listeners[n] = []), this.listeners[n].push([r, a]);
    };
    for (let r of this.plugins)
      if (typeof r == "object")
        for (let n in r) {
          if (!tx[n] && /^[A-Z]/.test(n))
            throw new Error(
              `Unknown event ${n} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!rx[n])
            if (typeof r[n] == "object")
              for (let a in r[n])
                a === "*" ? e(r, n, r[n][a]) : e(
                  r,
                  n + "-" + a.toLowerCase(),
                  r[n][a]
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
      if (_n(n))
        try {
          await n;
        } catch (a) {
          throw this.handleError(a);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[ft]; ) {
        e[ft] = !0;
        let r = [Kc(e)];
        for (; r.length > 0; ) {
          let n = this.visitTick(r);
          if (_n(n))
            try {
              await n;
            } catch (a) {
              let i = r[r.length - 1].node;
              throw this.handleError(a, i);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [r, n] of this.listeners.OnceExit) {
          this.result.lastPlugin = r;
          try {
            if (e.type === "document") {
              let a = e.nodes.map(
                (i) => n(i, this.helpers)
              );
              await Promise.all(a);
            } else
              await n(e, this.helpers);
          } catch (a) {
            throw this.handleError(a);
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
          return _n(r[0]) ? Promise.all(r) : r;
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
    let e = this.result.opts, r = Y2;
    e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
    let a = new G2(r, this.result.root, this.result.opts).generate();
    return this.result.css = a[0], this.result.map = a[1], this.result;
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
      if (_n(r))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[ft]; )
        e[ft] = !0, this.walkSync(e);
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
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || X2(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, r);
  }
  toString() {
    return this.css;
  }
  visitSync(e, r) {
    for (let [n, a] of e) {
      this.result.lastPlugin = n;
      let i;
      try {
        i = a(r, this.helpers);
      } catch (o) {
        throw this.handleError(o, r.proxyOf);
      }
      if (r.type !== "root" && r.type !== "document" && !r.parent)
        return !0;
      if (_n(i))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let r = e[e.length - 1], { node: n, visitors: a } = r;
    if (n.type !== "root" && n.type !== "document" && !n.parent) {
      e.pop();
      return;
    }
    if (a.length > 0 && r.visitorIndex < a.length) {
      let [o, s] = a[r.visitorIndex];
      r.visitorIndex += 1, r.visitorIndex === a.length && (r.visitors = [], r.visitorIndex = 0), this.result.lastPlugin = o;
      try {
        return s(n.toProxy(), this.helpers);
      } catch (u) {
        throw this.handleError(u, n);
      }
    }
    if (r.iterator !== 0) {
      let o = r.iterator, s;
      for (; s = n.nodes[n.indexes[o]]; )
        if (n.indexes[o] += 1, !s[ft]) {
          s[ft] = !0, e.push(Kc(s));
          return;
        }
      r.iterator = 0, delete n.indexes[o];
    }
    let i = r.events;
    for (; r.eventIndex < i.length; ) {
      let o = i[r.eventIndex];
      if (r.eventIndex += 1, o === Xr) {
        n.nodes && n.nodes.length && (n[ft] = !0, r.iterator = n.getIterator());
        return;
      } else if (this.listeners[o]) {
        r.visitors = this.listeners[o];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[ft] = !0;
    let r = fp(e);
    for (let n of r)
      if (n === Xr)
        e.nodes && e.each((a) => {
          a[ft] || this.walkSync(a);
        });
      else {
        let a = this.listeners[n];
        if (a && this.visitSync(a, e.toProxy()))
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
Qr.registerPostcss = (t) => {
  ul = t;
};
var pp = Qr;
Qr.default = Qr;
Z2.registerLazyResult(Qr);
J2.registerLazyResult(Qr);
let nx = qd, ax = Hi, ix = np, ox = Zl;
const sx = Jl;
let cl = class {
  constructor(e, r, n) {
    r = r.toString(), this.stringified = !1, this._processor = e, this._css = r, this._opts = n, this._map = void 0;
    let a, i = ax;
    this.result = new sx(this._processor, a, this._opts), this.result.css = r;
    let o = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return o.root;
      }
    });
    let s = new nx(i, a, this._opts, r);
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
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || ix(
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
    let e, r = ox;
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
var lx = cl;
cl.default = cl;
let ux = lx, cx = pp, fx = Kl, dx = pa, Jn = class {
  constructor(e = []) {
    this.version = "8.4.35", this.plugins = this.normalize(e);
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
    return !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new ux(this, e, r) : new cx(this, e, r);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var px = Jn;
Jn.default = Jn;
dx.registerProcessor(Jn);
fx.registerProcessor(Jn);
let hx = Wi, mx = jd, gx = Yi, yx = Xl, vx = Gi, bx = pa, wx = Ql;
function Xn(t, e) {
  if (Array.isArray(t))
    return t.map((a) => Xn(a));
  let { inputs: r, ...n } = t;
  if (r) {
    e = [];
    for (let a of r) {
      let i = { ...a, __proto__: vx.prototype };
      i.map && (i.map = {
        ...i.map,
        __proto__: mx.prototype
      }), e.push(i);
    }
  }
  if (n.nodes && (n.nodes = t.nodes.map((a) => Xn(a, e))), n.source) {
    let { inputId: a, ...i } = n.source;
    n.source = i, a != null && (n.source.input = e[a]);
  }
  if (n.type === "root")
    return new bx(n);
  if (n.type === "decl")
    return new hx(n);
  if (n.type === "rule")
    return new wx(n);
  if (n.type === "comment")
    return new gx(n);
  if (n.type === "atrule")
    return new yx(n);
  throw new Error("Unknown node type: " + t.type);
}
var xx = Xn;
Xn.default = Xn;
let Sx = Wl, hp = Wi, Ox = pp, Ax = vr, eu = px, Cx = Hi, Ex = xx, mp = Kl, kx = ap, gp = Yi, yp = Xl, _x = Jl, Px = Gi, Tx = Zl, $x = up, vp = Ql, bp = pa, Ix = qi;
function ce(...t) {
  return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new eu(t);
}
ce.plugin = function(e, r) {
  let n = !1;
  function a(...o) {
    console && console.warn && !n && (n = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let s = r(...o);
    return s.postcssPlugin = e, s.postcssVersion = new eu().version, s;
  }
  let i;
  return Object.defineProperty(a, "postcss", {
    get() {
      return i || (i = a()), i;
    }
  }), a.process = function(o, s, u) {
    return ce([a(u)]).process(o, s);
  }, a;
};
ce.stringify = Cx;
ce.parse = Tx;
ce.fromJSON = Ex;
ce.list = $x;
ce.comment = (t) => new gp(t);
ce.atRule = (t) => new yp(t);
ce.decl = (t) => new hp(t);
ce.rule = (t) => new vp(t);
ce.root = (t) => new bp(t);
ce.document = (t) => new mp(t);
ce.CssSyntaxError = Sx;
ce.Declaration = hp;
ce.Container = Ax;
ce.Processor = eu;
ce.Document = mp;
ce.Comment = gp;
ce.Warning = kx;
ce.AtRule = yp;
ce.Result = _x;
ce.Input = Px;
ce.Rule = vp;
ce.Root = bp;
ce.Node = Ix;
Ox.registerPostcss(ce);
var Dx = ce;
ce.default = ce;
const ge = /* @__PURE__ */ Ui(Dx);
ge.stringify;
ge.fromJSON;
ge.plugin;
ge.parse;
ge.list;
ge.document;
ge.comment;
ge.atRule;
ge.rule;
ge.decl;
ge.root;
ge.CssSyntaxError;
ge.Declaration;
ge.Container;
ge.Processor;
ge.Document;
ge.Comment;
ge.Warning;
ge.AtRule;
ge.Result;
ge.Input;
ge.Rule;
ge.Root;
ge.Node;
const Rx = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, Lx = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, Nx = { key: 0 }, Fx = {
  key: 1,
  class: "ml-1"
}, Mx = { class: "flex w-fit flex-wrap" }, Bx = {
  key: 0,
  class: "font-semibold"
}, jx = { class: "mb-1" }, zx = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, Ux = { class: "w-full break-words" }, Vx = { class: "mb-1 flex flex-col" }, Hx = { key: 1 }, z4 = {
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
      var a;
      return C(), E("div", {
        key: e.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        I("div", Rx, [
          e.itemId || e.timeStamp ? (C(), E("div", Lx, [
            e.itemId ? (C(), E(fe, { key: 0 }, [
              e.itemId.routeName ? (C(), ae(V(it), {
                key: 1,
                href: r.route(e.itemId.routeName, e.itemId.routeData ? e.itemId.routeData : e.itemId.id)
              }, {
                default: ve(() => [
                  e.itemId.prefix || e.itemId.prefix == null ? (C(), E(fe, { key: 0 }, [
                    ye("#")
                  ], 64)) : Y("", !0),
                  ye(" " + Q(e.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (C(), E("span", Nx, [
                e.itemId.prefix || e.itemId.prefix == null ? (C(), E(fe, { key: 0 }, [
                  ye("#")
                ], 64)) : Y("", !0),
                ye(" " + Q(e.itemId.id), 1)
              ]))
            ], 64)) : Y("", !0),
            e.timeStamp ? (C(), E("span", Fx, [
              e.itemId ? (C(), E(fe, { key: 0 }, [
                ye("-")
              ], 64)) : Y("", !0),
              ye(" " + Q(e.timeStamp), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          I("div", Mx, [
            (C(!0), E(fe, null, Ke(t.pills, (i, o) => (C(), E(fe, { key: o }, [
              i.text ? (C(), E("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: In({
                  backgroundColor: i.color ? i.color : null
                })
              }, Q(i.text), 5)) : Y("", !0)
            ], 64))), 128))
          ])
        ]),
        e.title ? (C(), E(fe, { key: 0 }, [
          !e.title.routeName && !e.title.href ? (C(), E("p", Bx, Q(e.title.text), 1)) : (C(), ae(V(it), {
            key: 1,
            href: e.title.href ? e.title.href : r.route(e.title.routeName, e.title.routeData),
            class: "font-semibold"
          }, {
            default: ve(() => [
              ye(Q(e.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Y("", !0),
        I("div", jx, [
          e.extraText ? (C(), E("p", zx, [
            ye(" Engineer Note: "),
            I("span", Ux, Q(e.extraText), 1)
          ])) : Y("", !0)
        ]),
        I("div", Vx, [
          (C(!0), E(fe, null, Ke(t.options, (i, o) => (C(), E(fe, null, [
            !i.routeName && !i.href ? (C(), E("span", {
              key: 0,
              style: In({ color: i.color ? i.color : "#000" })
            }, Q(i.text), 5)) : (C(), ae(V(it), {
              key: 1,
              href: i.href ? i.href : r.route(i.routeName, i.routeData),
              style: In({ color: i.color ? i.color : "#000" })
            }, {
              default: ve(() => [
                ye(Q(i.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (a = e.amount) != null && a.amount ? (C(), E("div", Hx, [
          I("span", null, Q(e.amount.text + V(T1)(e.amount.amount)), 1)
        ])) : Y("", !0),
        I("div", null, [
          K(r.$slots, "default")
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
const cs = (() => {
  const t = {};
  let e = 1;
  return {
    set(r, n, a) {
      typeof r[n] > "u" && (r[n] = {
        key: n,
        id: e
      }, e++), t[r[n].id] = a;
    },
    get(r, n) {
      if (!r || typeof r[n] > "u")
        return null;
      const a = r[n];
      return a.key === n ? t[a.id] : null;
    },
    delete(r, n) {
      if (typeof r[n] > "u")
        return;
      const a = r[n];
      a.key === n && (delete t[a.id], delete r[n]);
    }
  };
})(), pi = {
  setData(t, e, r) {
    cs.set(t, e, r);
  },
  getData(t, e) {
    return cs.get(t, e);
  },
  removeData(t, e) {
    cs.delete(t, e);
  }
}, qx = 1e6, Wx = 1e3, fl = "transitionend", Gx = (t) => t == null ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(), Yx = (t) => {
  do
    t += Math.floor(Math.random() * qx);
  while (document.getElementById(t));
  return t;
}, wp = (t) => {
  let e = t.getAttribute("data-te-target");
  if (!e || e === "#") {
    let r = t.getAttribute("href");
    if (!r || !r.includes("#") && !r.startsWith("."))
      return null;
    r.includes("#") && !r.startsWith("#") && (r = `#${r.split("#")[1]}`), e = r && r !== "#" ? r.trim() : null;
  }
  return e;
}, xp = (t) => {
  const e = wp(t);
  return e && document.querySelector(e) ? e : null;
}, Qn = (t) => {
  const e = wp(t);
  return e ? document.querySelector(e) : null;
}, Kx = (t) => {
  if (!t)
    return 0;
  let { transitionDuration: e, transitionDelay: r } = window.getComputedStyle(t);
  const n = Number.parseFloat(e), a = Number.parseFloat(r);
  return !n && !a ? 0 : (e = e.split(",")[0], r = r.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(r)) * Wx);
}, Jx = (t) => {
  t.dispatchEvent(new Event(fl));
}, Sp = (t) => !t || typeof t != "object" ? !1 : (typeof t.jquery < "u" && (t = t[0]), typeof t.nodeType < "u"), dl = (t) => Sp(t) ? t.jquery ? t[0] : t : typeof t == "string" && t.length > 0 ? document.querySelector(t) : null, $i = (t, e, r) => {
  Object.keys(r).forEach((n) => {
    const a = r[n], i = e[n], o = i && Sp(i) ? "element" : Gx(i);
    if (!new RegExp(a).test(o))
      throw new Error(
        `${t.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${a}".`
      );
  });
}, Ki = (t) => {
  if (!t || t.getClientRects().length === 0)
    return !1;
  if (t.style && t.parentNode && t.parentNode.style) {
    const e = getComputedStyle(t), r = getComputedStyle(t.parentNode);
    return getComputedStyle(t).getPropertyValue("visibility") === "visible" || e.display !== "none" && r.display !== "none" && e.visibility !== "hidden";
  }
  return !1;
}, Ji = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled") ? !0 : typeof t.disabled < "u" ? t.disabled : t.hasAttribute("disabled") && t.getAttribute("disabled") !== "false", Xx = (t) => {
  t.offsetHeight;
}, Op = () => {
  const { jQuery: t } = window;
  return t && !document.body.hasAttribute("data-te-no-jquery") ? t : null;
}, fs = [], Qx = (t) => {
  document.readyState === "loading" ? (fs.length || document.addEventListener("DOMContentLoaded", () => {
    fs.forEach((e) => e());
  }), fs.push(t)) : t();
}, yt = () => document.documentElement.dir === "rtl", Zx = (t) => document.createElement(t), Jc = (t) => {
  typeof t == "function" && t();
}, eS = (t, e, r = !0) => {
  if (!r) {
    Jc(t);
    return;
  }
  const n = 5, a = Kx(e) + n;
  let i = !1;
  const o = ({ target: s }) => {
    s === e && (i = !0, e.removeEventListener(fl, o), Jc(t));
  };
  e.addEventListener(fl, o), setTimeout(() => {
    i || Jx(e);
  }, a);
}, tS = /[^.]*(?=\..*)\.|.*/, rS = /\..*/, nS = /::\d+$/, ds = {};
let Xc = 1;
const aS = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, iS = /^(mouseenter|mouseleave)/i, Ap = /* @__PURE__ */ new Set([
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
function Cp(t, e) {
  return e && `${e}::${Xc++}` || t.uidEvent || Xc++;
}
function Ep(t) {
  const e = Cp(t);
  return t.uidEvent = e, ds[e] = ds[e] || {}, ds[e];
}
function oS(t, e) {
  return function r(n) {
    return n.delegateTarget = t, r.oneOff && he.off(t, n.type, e), e.apply(t, [n]);
  };
}
function sS(t, e, r) {
  return function n(a) {
    const i = t.querySelectorAll(e);
    for (let { target: o } = a; o && o !== this; o = o.parentNode)
      for (let s = i.length; s--; "")
        if (i[s] === o)
          return a.delegateTarget = o, n.oneOff && he.off(t, a.type, r), r.apply(o, [a]);
    return null;
  };
}
function kp(t, e, r = null) {
  const n = Object.keys(t);
  for (let a = 0, i = n.length; a < i; a++) {
    const o = t[n[a]];
    if (o.originalHandler === e && o.delegationSelector === r)
      return o;
  }
  return null;
}
function _p(t, e, r) {
  const n = typeof e == "string", a = n ? r : e;
  let i = Pp(t);
  return Ap.has(i) || (i = t), [n, a, i];
}
function Qc(t, e, r, n, a) {
  if (typeof e != "string" || !t)
    return;
  if (r || (r = n, n = null), iS.test(e)) {
    const A = (m) => function(x) {
      if (!x.relatedTarget || x.relatedTarget !== x.delegateTarget && !x.delegateTarget.contains(x.relatedTarget))
        return m.call(this, x);
    };
    n ? n = A(n) : r = A(r);
  }
  const [i, o, s] = _p(
    e,
    r,
    n
  ), u = Ep(t), c = u[s] || (u[s] = {}), f = kp(
    c,
    o,
    i ? r : null
  );
  if (f) {
    f.oneOff = f.oneOff && a;
    return;
  }
  const d = Cp(
    o,
    e.replace(tS, "")
  ), y = i ? sS(t, r, n) : oS(t, r);
  y.delegationSelector = i ? r : null, y.originalHandler = o, y.oneOff = a, y.uidEvent = d, c[d] = y, t.addEventListener(s, y, i);
}
function pl(t, e, r, n, a) {
  const i = kp(e[r], n, a);
  i && (t.removeEventListener(r, i, !!a), delete e[r][i.uidEvent]);
}
function lS(t, e, r, n) {
  const a = e[r] || {};
  Object.keys(a).forEach((i) => {
    if (i.includes(n)) {
      const o = a[i];
      pl(
        t,
        e,
        r,
        o.originalHandler,
        o.delegationSelector
      );
    }
  });
}
function Pp(t) {
  return t = t.replace(rS, ""), aS[t] || t;
}
const he = {
  on(t, e, r, n) {
    Qc(t, e, r, n, !1);
  },
  one(t, e, r, n) {
    Qc(t, e, r, n, !0);
  },
  off(t, e, r, n) {
    if (typeof e != "string" || !t)
      return;
    const [a, i, o] = _p(
      e,
      r,
      n
    ), s = o !== e, u = Ep(t), c = e.startsWith(".");
    if (typeof i < "u") {
      if (!u || !u[o])
        return;
      pl(
        t,
        u,
        o,
        i,
        a ? r : null
      );
      return;
    }
    c && Object.keys(u).forEach((d) => {
      lS(
        t,
        u,
        d,
        e.slice(1)
      );
    });
    const f = u[o] || {};
    Object.keys(f).forEach((d) => {
      const y = d.replace(nS, "");
      if (!s || e.includes(y)) {
        const A = f[d];
        pl(
          t,
          u,
          o,
          A.originalHandler,
          A.delegationSelector
        );
      }
    });
  },
  trigger(t, e, r) {
    if (typeof e != "string" || !t)
      return null;
    const n = Op(), a = Pp(e), i = e !== a, o = Ap.has(a);
    let s, u = !0, c = !0, f = !1, d = null;
    return i && n && (s = n.Event(e, r), n(t).trigger(s), u = !s.isPropagationStopped(), c = !s.isImmediatePropagationStopped(), f = s.isDefaultPrevented()), o ? (d = document.createEvent("HTMLEvents"), d.initEvent(a, u, !0)) : d = new CustomEvent(e, {
      bubbles: u,
      cancelable: !0
    }), typeof r < "u" && Object.keys(r).forEach((y) => {
      Object.defineProperty(d, y, {
        get() {
          return r[y];
        }
      });
    }), f && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && typeof s < "u" && s.preventDefault(), d;
  }
}, uS = "5.1.3";
class Tp {
  constructor(e) {
    e = dl(e), e && (this._element = e, pi.setData(this._element, this.constructor.DATA_KEY, this));
  }
  dispose() {
    pi.removeData(this._element, this.constructor.DATA_KEY), he.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e) => {
      this[e] = null;
    });
  }
  _queueCallback(e, r, n = !0) {
    eS(e, r, n);
  }
  /** Static */
  static getInstance(e) {
    return pi.getData(dl(e), this.DATA_KEY);
  }
  static getOrCreateInstance(e, r = {}) {
    return this.getInstance(e) || new this(e, typeof r == "object" ? r : null);
  }
  static get VERSION() {
    return uS;
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
function ps(t) {
  return t === "true" ? !0 : t === "false" ? !1 : t === Number(t).toString() ? Number(t) : t === "" || t === "null" ? null : t;
}
function hs(t) {
  return t.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
}
const ue = {
  setDataAttribute(t, e, r) {
    t.setAttribute(`data-te-${hs(e)}`, r);
  },
  removeDataAttribute(t, e) {
    t.removeAttribute(`data-te-${hs(e)}`);
  },
  getDataAttributes(t) {
    if (!t)
      return {};
    const e = {};
    return Object.keys(t.dataset).filter((r) => r.startsWith("te")).forEach((r) => {
      if (r.startsWith("teClass"))
        return;
      let n = r.replace(/^te/, "");
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ps(t.dataset[r]);
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
      n = n.charAt(0).toLowerCase() + n.slice(1, n.length), e[n] = ps(e[r]);
    }), e;
  },
  getDataAttribute(t, e) {
    return ps(
      t.getAttribute(`data-te-${hs(e)}`)
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
    t && ms(e).forEach((r) => {
      t.classList.contains(r) ? t.classList.remove(r) : t.classList.add(r);
    });
  },
  addClass(t, e) {
    ms(e).forEach(
      (r) => !t.classList.contains(r) && t.classList.add(r)
    );
  },
  addStyle(t, e) {
    Object.keys(e).forEach((r) => {
      t.style[r] = e[r];
    });
  },
  removeClass(t, e) {
    ms(e).forEach(
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
function ms(t) {
  return typeof t == "string" ? t.split(" ") : Array.isArray(t) ? t : !1;
}
const cS = 3, Ve = {
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
    for (; n && n.nodeType === Node.ELEMENT_NODE && n.nodeType !== cS; )
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
      (r) => !Ji(r) && Ki(r)
    );
  }
};
yt();
yt();
yt();
yt();
yt();
yt();
const gs = "collapse", $p = "te.collapse", Xi = `.${$p}`, Zc = {
  toggle: !0,
  parent: null
}, fS = {
  toggle: "boolean",
  parent: "(null|element)"
}, dS = `show${Xi}`, pS = `shown${Xi}`, hS = `hide${Xi}`, mS = `hidden${Xi}`, ys = "data-te-collapse-show", ef = "data-te-collapse-collapsed", ni = "data-te-collapse-collapsing", gS = "data-te-collapse-horizontal", jr = "data-te-collapse-item", tf = `:scope [${jr}] [${jr}]`, yS = "width", vS = "height", bS = "[data-te-collapse-item][data-te-collapse-show], [data-te-collapse-item][data-te-collapse-collapsing]", rf = "[data-te-collapse-init]", wS = {
  visible: "!visible",
  hidden: "hidden",
  baseTransition: "overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsing: "h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
  collapsingHorizontal: "w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
}, xS = {
  visible: "string",
  hidden: "string",
  baseTransition: "string",
  collapsing: "string",
  collapsingHorizontal: "string"
};
class Vr extends Tp {
  constructor(e, r, n) {
    super(e), this._isTransitioning = !1, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._triggerArray = [];
    const a = Ve.find(rf);
    for (let i = 0, o = a.length; i < o; i++) {
      const s = a[i], u = xp(s), c = Ve.find(u).filter(
        (f) => f === this._element
      );
      u !== null && c.length && (this._selector = u, this._triggerArray.push(s));
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return Zc;
  }
  static get NAME() {
    return gs;
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
      const u = Ve.find(
        tf,
        this._config.parent
      );
      e = Ve.find(
        bS,
        this._config.parent
      ).filter((c) => !u.includes(c));
    }
    const n = Ve.findOne(this._selector);
    if (e.length) {
      const u = e.find((c) => n !== c);
      if (r = u ? Vr.getInstance(u) : null, r && r._isTransitioning)
        return;
    }
    if (he.trigger(this._element, dS).defaultPrevented)
      return;
    e.forEach((u) => {
      n !== u && Vr.getOrCreateInstance(u, { toggle: !1 }).hide(), r || pi.setData(u, $p, null);
    });
    const a = this._getDimension(), i = a === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    ue.removeClass(this._element, this._classes.visible), ue.removeClass(this._element, this._classes.hidden), ue.addClass(this._element, i), this._element.removeAttribute(jr), this._element.setAttribute(ni, ""), this._element.style[a] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const o = () => {
      this._isTransitioning = !1, ue.removeClass(this._element, this._classes.hidden), ue.removeClass(this._element, i), ue.addClass(this._element, this._classes.visible), this._element.removeAttribute(ni), this._element.setAttribute(jr, ""), this._element.setAttribute(ys, ""), this._element.style[a] = "", he.trigger(this._element, pS);
    }, s = `scroll${a[0].toUpperCase() + a.slice(1)}`;
    this._queueCallback(o, this._element, !0), this._element.style[a] = `${this._element[s]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || he.trigger(this._element, hS).defaultPrevented)
      return;
    const e = this._getDimension(), r = e === "height" ? this._classes.collapsing : this._classes.collapsingHorizontal;
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Xx(this._element), ue.addClass(this._element, r), ue.removeClass(this._element, this._classes.visible), ue.removeClass(this._element, this._classes.hidden), this._element.setAttribute(ni, ""), this._element.removeAttribute(jr), this._element.removeAttribute(ys);
    const n = this._triggerArray.length;
    for (let i = 0; i < n; i++) {
      const o = this._triggerArray[i], s = Qn(o);
      s && !this._isShown(s) && this._addAriaAndCollapsedClass([o], !1);
    }
    this._isTransitioning = !0;
    const a = () => {
      this._isTransitioning = !1, ue.removeClass(this._element, r), ue.addClass(this._element, this._classes.visible), ue.addClass(this._element, this._classes.hidden), this._element.removeAttribute(ni), this._element.setAttribute(jr, ""), he.trigger(this._element, mS);
    };
    this._element.style[e] = "", this._queueCallback(a, this._element, !0);
  }
  _isShown(e = this._element) {
    return e.hasAttribute(ys);
  }
  // Private
  _getConfig(e) {
    return e = {
      ...Zc,
      ...ue.getDataAttributes(this._element),
      ...e
    }, e.toggle = !!e.toggle, e.parent = dl(e.parent), $i(gs, e, fS), e;
  }
  _getClasses(e) {
    const r = ue.getDataClassAttributes(this._element);
    return e = {
      ...wS,
      ...r,
      ...e
    }, $i(gs, e, xS), e;
  }
  _getDimension() {
    return this._element.hasAttribute(gS) ? yS : vS;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const e = Ve.find(
      tf,
      this._config.parent
    );
    Ve.find(rf, this._config.parent).filter((r) => !e.includes(r)).forEach((r) => {
      const n = Qn(r);
      n && this._addAriaAndCollapsedClass([r], this._isShown(n));
    });
  }
  _addAriaAndCollapsedClass(e, r) {
    e.length && e.forEach((n) => {
      r ? n.removeAttribute(ef) : n.setAttribute(`${ef}`, ""), n.setAttribute("aria-expanded", r);
    });
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = {};
      typeof e == "string" && /show|hide/.test(e) && (r.toggle = !1);
      const n = Vr.getOrCreateInstance(this, r);
      if (typeof e == "string") {
        if (typeof n[e] > "u")
          throw new TypeError(`No method named "${e}"`);
        n[e]();
      }
    });
  }
}
let nf = [];
const SS = (t, e = "hide") => {
  const r = `click.dismiss${t.EVENT_KEY}`, n = t.NAME;
  nf.includes(n) || (nf.push(n), he.on(
    document,
    r,
    `[data-te-${n}-dismiss]`,
    function(a) {
      if (["A", "AREA"].includes(this.tagName) && a.preventDefault(), Ji(this))
        return;
      const i = Qn(this) || this.closest(`.${n}`) || this.closest(`[data-te-${n}-init]`);
      i && t.getOrCreateInstance(i)[e]();
    }
  ));
}, vs = "alert", OS = "te.alert", Ip = `.${OS}`, AS = `close${Ip}`, CS = `closed${Ip}`, Pn = "data-te-alert-show", ES = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, af = {
  animation: !0,
  autohide: !0,
  delay: 1e3
}, kS = {
  fadeIn: "animate-[fade-in_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none",
  fadeOut: "animate-[fade-out_0.3s_both] p-[auto] motion-reduce:transition-none motion-reduce:animate-none"
}, _S = {
  fadeIn: "string",
  fadeOut: "string"
};
class Ii extends Tp {
  constructor(e, r, n) {
    super(e), this._element = e, this._config = this._getConfig(r), this._classes = this._getClasses(n), this._didInit = !1, this._init();
  }
  // Getters
  static get DefaultType() {
    return ES;
  }
  static get Default() {
    return af;
  }
  static get NAME() {
    return vs;
  }
  // Public
  close() {
    if (he.trigger(this._element, AS).defaultPrevented)
      return;
    let e = 0;
    this._config.animation && (e = 300, ue.addClass(this._element, this._classes.fadeOut)), this._element.removeAttribute(Pn), setTimeout(() => {
      this._queueCallback(
        () => this._destroyElement(),
        this._element,
        this._config.animation
      );
    }, e);
  }
  show() {
    if (this._element) {
      if (this._config.autohide && this._setupAutohide(), !this._element.hasAttribute(Pn) && (ue.removeClass(this._element, "hidden"), ue.addClass(this._element, "block"), Ki(this._element))) {
        const e = (r) => {
          ue.removeClass(this._element, "hidden"), ue.addClass(this._element, "block"), he.off(r.target, "animationend", e);
        };
        this._element.setAttribute(Pn, ""), he.on(this._element, "animationend", e);
      }
      this._config.animation && (ue.removeClass(this._element, this._classes.fadeOut), ue.addClass(this._element, this._classes.fadeIn));
    }
  }
  hide() {
    if (this._element && this._element.hasAttribute(Pn)) {
      this._element.removeAttribute(Pn);
      const e = (r) => {
        ue.addClass(this._element, "hidden"), ue.removeClass(this._element, "block"), this._timeout !== null && (clearTimeout(this._timeout), this._timeout = null), he.off(r.target, "animationend", e);
      };
      he.on(this._element, "animationend", e), ue.removeClass(this._element, this._classes.fadeIn), ue.addClass(this._element, this._classes.fadeOut);
    }
  }
  // Private
  _init() {
    this._didInit || (SS(Ii, "close"), this._didInit = !0);
  }
  _getConfig(e) {
    return e = {
      ...af,
      ...ue.getDataAttributes(this._element),
      ...typeof e == "object" && e ? e : {}
    }, $i(vs, e, this.constructor.DefaultType), e;
  }
  _getClasses(e) {
    const r = ue.getDataClassAttributes(this._element);
    return e = {
      ...kS,
      ...r,
      ...e
    }, $i(vs, e, _S), e;
  }
  _setupAutohide() {
    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }
  _destroyElement() {
    this._element.remove(), he.trigger(this._element, CS), this.dispose();
  }
  // Static
  static jQueryInterface(e) {
    return this.each(function() {
      const r = Ii.getOrCreateInstance(this);
      if (typeof e == "string") {
        if (r[e] === void 0 || e.startsWith("_") || e === "constructor")
          throw new TypeError(`No method named "${e}"`);
        r[e](this);
      }
    });
  }
}
yt(), yt();
(() => {
  var t = { 454: (n, a, i) => {
    i.d(a, { Z: () => u });
    var o = i(645), s = i.n(o)()(function(c) {
      return c[1];
    });
    s.push([n.id, "INPUT:-webkit-autofill,SELECT:-webkit-autofill,TEXTAREA:-webkit-autofill{animation-name:onautofillstart}INPUT:not(:-webkit-autofill),SELECT:not(:-webkit-autofill),TEXTAREA:not(:-webkit-autofill){animation-name:onautofillcancel}@keyframes onautofillstart{}@keyframes onautofillcancel{}", ""]);
    const u = s;
  }, 645: (n) => {
    n.exports = function(a) {
      var i = [];
      return i.toString = function() {
        return this.map(function(o) {
          var s = a(o);
          return o[2] ? "@media ".concat(o[2], " {").concat(s, "}") : s;
        }).join("");
      }, i.i = function(o, s, u) {
        typeof o == "string" && (o = [[null, o, ""]]);
        var c = {};
        if (u)
          for (var f = 0; f < this.length; f++) {
            var d = this[f][0];
            d != null && (c[d] = !0);
          }
        for (var y = 0; y < o.length; y++) {
          var A = [].concat(o[y]);
          u && c[A[0]] || (s && (A[2] ? A[2] = "".concat(s, " and ").concat(A[2]) : A[2] = s), i.push(A));
        }
      }, i;
    };
  }, 810: () => {
    (function() {
      if (typeof window < "u")
        try {
          var n = new window.CustomEvent("test", { cancelable: !0 });
          if (n.preventDefault(), n.defaultPrevented !== !0)
            throw new Error("Could not prevent default");
        } catch {
          var a = function(i, o) {
            var s, u;
            return (o = o || {}).bubbles = !!o.bubbles, o.cancelable = !!o.cancelable, (s = document.createEvent("CustomEvent")).initCustomEvent(i, o.bubbles, o.cancelable, o.detail), u = s.preventDefault, s.preventDefault = function() {
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
          a.prototype = window.Event.prototype, window.CustomEvent = a;
        }
    })();
  }, 379: (n, a, i) => {
    var o, s = function() {
      var _ = {};
      return function(T) {
        if (_[T] === void 0) {
          var L = document.querySelector(T);
          if (window.HTMLIFrameElement && L instanceof window.HTMLIFrameElement)
            try {
              L = L.contentDocument.head;
            } catch {
              L = null;
            }
          _[T] = L;
        }
        return _[T];
      };
    }(), u = [];
    function c(_) {
      for (var T = -1, L = 0; L < u.length; L++)
        if (u[L].identifier === _) {
          T = L;
          break;
        }
      return T;
    }
    function f(_, T) {
      for (var L = {}, R = [], M = 0; M < _.length; M++) {
        var j = _[M], B = T.base ? j[0] + T.base : j[0], D = L[B] || 0, H = "".concat(B, " ").concat(D);
        L[B] = D + 1;
        var h = c(H), v = { css: j[1], media: j[2], sourceMap: j[3] };
        h !== -1 ? (u[h].references++, u[h].updater(v)) : u.push({ identifier: H, updater: P(v, T), references: 1 }), R.push(H);
      }
      return R;
    }
    function d(_) {
      var T = document.createElement("style"), L = _.attributes || {};
      if (L.nonce === void 0) {
        var R = i.nc;
        R && (L.nonce = R);
      }
      if (Object.keys(L).forEach(function(j) {
        T.setAttribute(j, L[j]);
      }), typeof _.insert == "function")
        _.insert(T);
      else {
        var M = s(_.insert || "head");
        if (!M)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        M.appendChild(T);
      }
      return T;
    }
    var y, A = (y = [], function(_, T) {
      return y[_] = T, y.filter(Boolean).join(`
`);
    });
    function m(_, T, L, R) {
      var M = L ? "" : R.media ? "@media ".concat(R.media, " {").concat(R.css, "}") : R.css;
      if (_.styleSheet)
        _.styleSheet.cssText = A(T, M);
      else {
        var j = document.createTextNode(M), B = _.childNodes;
        B[T] && _.removeChild(B[T]), B.length ? _.insertBefore(j, B[T]) : _.appendChild(j);
      }
    }
    function x(_, T, L) {
      var R = L.css, M = L.media, j = L.sourceMap;
      if (M ? _.setAttribute("media", M) : _.removeAttribute("media"), j && typeof btoa < "u" && (R += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(j)))), " */")), _.styleSheet)
        _.styleSheet.cssText = R;
      else {
        for (; _.firstChild; )
          _.removeChild(_.firstChild);
        _.appendChild(document.createTextNode(R));
      }
    }
    var S = null, O = 0;
    function P(_, T) {
      var L, R, M;
      if (T.singleton) {
        var j = O++;
        L = S || (S = d(T)), R = m.bind(null, L, j, !1), M = m.bind(null, L, j, !0);
      } else
        L = d(T), R = x.bind(null, L, T), M = function() {
          (function(B) {
            if (B.parentNode === null)
              return !1;
            B.parentNode.removeChild(B);
          })(L);
        };
      return R(_), function(B) {
        if (B) {
          if (B.css === _.css && B.media === _.media && B.sourceMap === _.sourceMap)
            return;
          R(_ = B);
        } else
          M();
      };
    }
    n.exports = function(_, T) {
      (T = T || {}).singleton || typeof T.singleton == "boolean" || (T.singleton = (o === void 0 && (o = !!(window && document && document.all && !window.atob)), o));
      var L = f(_ = _ || [], T);
      return function(R) {
        if (R = R || [], Object.prototype.toString.call(R) === "[object Array]") {
          for (var M = 0; M < L.length; M++) {
            var j = c(L[M]);
            u[j].references--;
          }
          for (var B = f(R, T), D = 0; D < L.length; D++) {
            var H = c(L[D]);
            u[H].references === 0 && (u[H].updater(), u.splice(H, 1));
          }
          L = B;
        }
      };
    };
  } }, e = {};
  function r(n) {
    var a = e[n];
    if (a !== void 0)
      return a.exports;
    var i = e[n] = { id: n, exports: {} };
    return t[n](i, i.exports, r), i.exports;
  }
  r.n = (n) => {
    var a = n && n.__esModule ? () => n.default : () => n;
    return r.d(a, { a }), a;
  }, r.d = (n, a) => {
    for (var i in a)
      r.o(a, i) && !r.o(n, i) && Object.defineProperty(n, i, { enumerable: !0, get: a[i] });
  }, r.o = (n, a) => Object.prototype.hasOwnProperty.call(n, a), (() => {
    var n = r(379), a = r.n(n), i = r(454);
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
    a()(i.Z, { insert: "head", singleton: !1 }), i.Z.locals, r(810), document.addEventListener("animationstart", function(u) {
      u.animationName === "onautofillstart" ? o(u.target) : s(u.target);
    }, !0), document.addEventListener("input", function(u) {
      u.inputType !== "insertReplacementText" && "data" in u ? s(u.target) : o(u.target);
    }, !0);
  })();
})();
yt();
yt();
Yx("chips-input-");
const Bt = {
  plugins: {
    legend: {
      labels: {
        color: "rgb(102,102,102)"
      }
    }
  }
}, PS = {
  line: {
    options: {
      ...Bt,
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
      ...Bt,
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
      ...Bt,
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
      ...Bt,
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
      ...Bt,
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
      ...Bt,
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
      ...Bt,
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
      ...Bt,
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
var Qi = function(t) {
  this.element = t, this.handlers = {};
}, Dp = { isEmpty: { configurable: !0 } };
Qi.prototype.bind = function(t, e) {
  typeof this.handlers[t] > "u" && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
};
Qi.prototype.unbind = function(t, e) {
  var r = this;
  this.handlers[t] = this.handlers[t].filter(function(n) {
    return e && n !== e ? !0 : (r.element.removeEventListener(t, n, !1), !1);
  });
};
Qi.prototype.unbindAll = function() {
  for (var t in this.handlers)
    this.unbind(t);
};
Dp.isEmpty.get = function() {
  var t = this;
  return Object.keys(this.handlers).every(
    function(e) {
      return t.handlers[e].length === 0;
    }
  );
};
Object.defineProperties(Qi.prototype, Dp);
typeof document < "u" && "WebkitAppearance" in document.documentElement.style, typeof window < "u" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch), typeof navigator < "u" && navigator.msMaxTouchPoints, typeof navigator < "u" && /Chrome/i.test(navigator && navigator.userAgent);
Zx("div");
const TS = (t) => {
  Qx(() => {
    const e = Op();
    if (e) {
      const r = t.NAME, n = e.fn[r];
      e.fn[r] = t.jQueryInterface, e.fn[r].Constructor = t, e.fn[r].noConflict = () => (e.fn[r] = n, t.jQueryInterface);
    }
  });
}, $S = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      r.preventDefault(), t.getOrCreateInstance(this).toggle();
    }
  );
}, IS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), !Ji(this) && t.getOrCreateInstance(this).show();
    }
  );
}, DS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      const n = Qn(this);
      if (["A", "AREA"].includes(this.tagName) && r.preventDefault(), Ji(this))
        return;
      he.one(n, t.EVENT_HIDDEN, () => {
        Ki(this) && this.focus();
      });
      const a = Ve.findOne(t.OPEN_SELECTOR);
      a && a !== n && t.getInstance(a).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, RS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}`,
    e,
    (r) => {
      r.preventDefault();
      const n = r.target.closest(e);
      t.getOrCreateInstance(n).toggle();
    }
  );
}, LS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}`,
    e,
    function(r) {
      const n = Qn(this);
      ["A", "AREA"].includes(this.tagName) && r.preventDefault(), he.one(n, t.EVENT_SHOW, (i) => {
        i.defaultPrevented || he.one(n, t.EVENT_HIDDEN, () => {
          Ki(this) && this.focus();
        });
      });
      const a = Ve.findOne(
        `[${t.OPEN_SELECTOR}="true"]`
      );
      a && t.getInstance(a).hide(), t.getOrCreateInstance(n).toggle(this);
    }
  );
}, NS = (t, e) => {
  he.one(
    document,
    "mousedown",
    e,
    t.autoInitial(new t())
  );
}, FS = (t, e) => {
  he.on(
    document,
    `click.te.${t.NAME}.data-api`,
    e,
    function(r) {
      (r.target.tagName === "A" || r.delegateTarget && r.delegateTarget.tagName === "A") && r.preventDefault();
      const n = xp(this);
      Ve.find(n).forEach((a) => {
        t.getOrCreateInstance(a, { toggle: !1 }).toggle();
      });
    }
  );
}, MS = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, BS = (t, e) => {
  [].slice.call(
    document.querySelectorAll(e)
  ).map(function(r) {
    return new t(r);
  });
}, jS = (t, e) => {
  Ve.find(e).forEach((r) => {
    new t(r);
  }), he.on(
    document,
    `click.te.${t.NAME}.data-api`,
    `${e} img:not([data-te-lightbox-disabled])`,
    t.toggle()
  );
}, zS = (t, e) => {
  const r = (i) => i[0] === "{" && i[i.length - 1] === "}" || i[0] === "[" && i[i.length - 1] === "]", n = (i) => typeof i != "string" ? i : r(i) ? JSON.parse(i.replace(/'/g, '"')) : i, a = (i) => {
    const o = {};
    return Object.keys(i).forEach((s) => {
      if (s.match(/dataset.*/)) {
        const u = s.slice(7, 8).toLowerCase().concat(s.slice(8));
        o[u] = n(i[s]);
      }
    }), o;
  };
  Ve.find(e).forEach((i) => {
    if (ue.getDataAttribute(i, "chart") !== "bubble" && ue.getDataAttribute(i, "chart") !== "scatter") {
      const o = ue.getDataAttributes(i), s = {
        data: {
          datasets: [a(o)]
        }
      };
      return o.chart && (s.type = o.chart), o.labels && (s.data.labels = JSON.parse(o.labels.replace(/'/g, '"'))), new t(i, {
        ...s,
        ...PS[s.type]
      });
    }
    return null;
  });
};
class US {
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
const hl = new US(), $n = {
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
    advanced: zS
  },
  // togglers
  button: {
    name: "Button",
    selector: "[data-te-toggle='button']",
    isToggler: !0,
    callback: RS
  },
  collapse: {
    name: "Collapse",
    selector: "[data-te-collapse-init]",
    isToggler: !0,
    callback: FS
  },
  dropdown: {
    name: "Dropdown",
    selector: "[data-te-dropdown-toggle-ref]",
    isToggler: !0,
    callback: $S
  },
  modal: {
    name: "Modal",
    selector: "[data-te-toggle='modal']",
    isToggler: !0,
    callback: LS
  },
  ripple: {
    name: "Ripple",
    selector: "[data-te-ripple-init]",
    isToggler: !0,
    callback: NS
  },
  offcanvas: {
    name: "Offcanvas",
    selector: "[data-te-offcanvas-toggle]",
    isToggler: !0,
    callback: DS
  },
  tab: {
    name: "Tab",
    selector: "[data-te-toggle='tab'], [data-te-toggle='pill'], [data-te-toggle='list']",
    isToggler: !0,
    callback: IS
  },
  tooltip: {
    name: "Tooltip",
    selector: "[data-te-toggle='tooltip']",
    isToggler: !1,
    callback: MS
  },
  popover: {
    name: "Popover",
    selector: "[data-te-toggle='popover']",
    isToggler: !0,
    callback: BS
  },
  lightbox: {
    name: "Lightbox",
    selector: "[data-te-lightbox-init]",
    isToggler: !0,
    callback: jS
  },
  touch: {
    name: "Touch",
    selector: "[data-te-touch-init]"
  }
}, VS = (t) => $n[t.NAME] || null, HS = (t, e) => {
  if (!t || !e.allowReinits && hl.isInited(t.NAME))
    return;
  hl.add(t.NAME);
  const r = VS(t), n = (r == null ? void 0 : r.isToggler) || !1;
  if (TS(t), r != null && r.advanced) {
    r == null || r.advanced(t, r == null ? void 0 : r.selector);
    return;
  }
  if (n) {
    r == null || r.callback(t, r == null ? void 0 : r.selector);
    return;
  }
  Ve.find(r == null ? void 0 : r.selector).forEach((a) => {
    let i = t.getInstance(a);
    i || (i = new t(a), r != null && r.onInit && i[r.onInit]());
  });
}, qS = (t, e) => {
  t.forEach((r) => HS(r, e));
}, WS = {
  allowReinits: !1,
  checkOtherImports: !1
}, GS = (t, e = {}) => {
  e = { ...WS, ...e };
  const r = Object.keys($n).map((n) => {
    if (document.querySelector($n[n].selector)) {
      const a = t[$n[n].name];
      return !a && !hl.isInited(n) && e.checkOtherImports && console.warn(
        `Please import ${$n[n].name} from "tw-elements" package and add it to a object parameter inside "initTE" function`
      ), a;
    }
  });
  qS(r, e);
}, YS = { role: "alert" }, KS = {
  class: "mt-2 hidden w-full items-center rounded bg-primary-100 px-6 py-1 text-base text-neutral-800 shadow-sm data-[te-alert-show]:inline-flex sm:rounded-lg",
  role: "alert",
  "data-te-alert-init": "",
  "data-te-alert-show": ""
}, JS = /* @__PURE__ */ I("button", {
  type: "button",
  class: "ml-auto box-content rounded-none border-none p-1 text-neutral-900 opacity-50 hover:text-neutral-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none",
  "data-te-alert-dismiss": "",
  "aria-label": "Close"
}, [
  /* @__PURE__ */ I("span", { class: "w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25" }, [
    /* @__PURE__ */ I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      class: "h-6 w-6"
    }, [
      /* @__PURE__ */ I("path", {
        "fill-rule": "evenodd",
        d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
        "clip-rule": "evenodd"
      })
    ])
  ])
], -1), U4 = {
  __name: "Alert",
  props: {
    message: String
  },
  setup(t) {
    return Je(() => {
      GS({ Alert: Ii });
    }), (e, r) => (C(), E("div", YS, [
      I("div", null, [
        I("div", KS, [
          K(e.$slots, "default"),
          JS
        ])
      ])
    ]));
  }
}, XS = ["aria-controls"], QS = {
  class: "text-xs font-semibold uppercase leading-normal text-primary hover:text-primary-700",
  type: "button"
}, ZS = ["id"], eO = {
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
    const e = t, r = ee(null), n = ee(null), a = ee(e.open);
    Je(() => {
      n.value = new Vr(r.value, {
        toggle: e.open
      });
    });
    const i = () => {
      n.value.toggle(), a.value = !a.value;
    };
    return (o, s) => (C(), E("div", {
      class: X(["mt-2 rounded-lg border-2 border-gray-200 dark:border-gray-700", { "px-4 py-2": !t.header }])
    }, [
      I("div", {
        class: X(["bg-white sm:rounded-lg", { "p-1": !t.header }])
      }, [
        I("div", {
          onClick: i,
          class: "focusable !block rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center",
          tabindex: "0",
          "aria-controls": t.header ? t.header.replaceAll(" ", "_") : "collapsable",
          style: In({ backgroundColor: t.headerColor })
        }, [
          ye(Q(t.header) + " ", 1),
          I("button", QS, Q(a.value ? "Hide" : "Show"), 1)
        ], 12, XS),
        I("div", {
          class: "!visible hidden overflow-hidden",
          id: t.header ? t.header.replaceAll(" ", "_") : "collapsable",
          ref_key: "collapseRef",
          ref: r
        }, [
          I("div", {
            class: X([{ "px-4 pb-2": t.header }, "mt-2"])
          }, [
            K(o.$slots, "default")
          ], 2)
        ], 8, ZS)
      ], 2)
    ], 2));
  }
}, tO = { class: "relative" }, V4 = {
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
      i.value && o.key === "Escape" && (i.value = !1);
    };
    Je(() => document.addEventListener("keydown", r)), Zn(() => document.removeEventListener("keydown", r));
    const n = se(() => isNaN(parseInt(e.width)) ? e.width : "w-" + e.width), a = se(() => e.align === "left" ? "origin-top-left left-0" : e.align === "right" ? "origin-top-right right-0" : "origin-top"), i = ee(!1);
    return (o, s) => (C(), E("div", tO, [
      I("div", {
        onClick: s[0] || (s[0] = (u) => i.value = !i.value)
      }, [
        K(o.$slots, "trigger")
      ]),
      He(I("div", {
        class: "fixed inset-0 z-40",
        onClick: s[1] || (s[1] = (u) => i.value = !1)
      }, null, 512), [
        [qt, i.value]
      ]),
      we(fr, {
        "enter-active-class": "transition ease-out duration-200",
        "enter-from-class": "transform opacity-0 scale-95",
        "enter-to-class": "transform opacity-100 scale-100",
        "leave-active-class": "transition ease-in duration-75",
        "leave-from-class": "transform opacity-100 scale-100",
        "leave-to-class": "transform opacity-0 scale-95"
      }, {
        default: ve(() => [
          He(I("div", {
            class: X(["absolute z-50 mt-2 rounded-md shadow-lg", [n.value, a.value]]),
            style: { display: "none" },
            onClick: s[2] || (s[2] = (u) => i.value = !1)
          }, [
            I("div", {
              class: X(["rounded ring-1 ring-black ring-opacity-5", t.contentClasses])
            }, [
              K(o.$slots, "content")
            ], 2)
          ], 2), [
            [qt, i.value]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, H4 = {
  __name: "DropdownLink",
  setup(t) {
    return (e, r) => (C(), ae(V(it), { class: "focusable block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none" }, {
      default: ve(() => [
        K(e.$slots, "default")
      ]),
      _: 3
    }));
  }
}, rO = ["href", "target"], q4 = {
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
    return (n, a) => t.href && (t.method || t.data) ? (C(), ae(V(it), {
      key: 0,
      href: t.href,
      method: t.method,
      data: t.data,
      class: X(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      as: "button",
      tabindex: "0"
    }, {
      default: ve(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class"])) : (C(), E("a", {
      key: 1,
      href: t.href,
      target: t.target,
      class: X(["focusable inline-flex cursor-pointer select-none items-center justify-center gap-1 rounded px-2 text-sm font-medium leading-normal", r()]),
      tabindex: "0"
    }, [
      K(n.$slots, "default")
    ], 10, rO));
  }
}, nO = {
  class: "relative inline-flex",
  "data-te-dropdown-ref": ""
}, aO = ["id"], iO = /* @__PURE__ */ I("span", { class: "mx-1 w-2" }, [
  /* @__PURE__ */ I("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    class: "h-5 w-5"
  }, [
    /* @__PURE__ */ I("path", {
      "fill-rule": "evenodd",
      d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
      "clip-rule": "evenodd"
    })
  ])
], -1), oO = ["aria-labelledby"], W4 = {
  __name: "LinkDropdownButton",
  props: {
    title: String
  },
  setup(t) {
    return (e, r) => (C(), E("div", nO, [
      I("button", {
        class: "focusable flex items-center whitespace-nowrap rounded bg-primary px-2 text-sm text-white hover:bg-primary-700 motion-reduce:transition-none",
        type: "button",
        id: t.title,
        "data-te-dropdown-toggle-ref": "",
        "aria-expanded": "false",
        "data-te-ripple-init": "",
        "data-te-ripple-color": "light"
      }, [
        ye(Q(t.title) + " ", 1),
        iO
      ], 8, aO),
      I("ul", {
        class: "absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block",
        "aria-labelledby": t.title,
        "data-te-dropdown-menu-ref": ""
      }, [
        K(e.$slots, "default")
      ], 8, oO)
    ]));
  }
}, sO = ["href"], G4 = {
  __name: "LinkDropdownButtonItem",
  props: {
    href: String,
    title: String
  },
  setup(t) {
    return (e, r) => (C(), E("li", null, [
      I("a", {
        class: "focusable inline-flex w-full items-center justify-center whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href,
        "data-te-dropdown-item-ref": ""
      }, Q(t.title), 9, sO)
    ]));
  }
}, Y4 = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(t) {
    return (e, r) => (C(), ae(V(eO), { header: t.header }, {
      default: ve(() => [
        we(V(OO), { logs: t.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, lO = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, uO = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, cO = {
  key: 0,
  class: "text-center"
}, fO = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, dO = { class: "flex-start w-full md:flex" }, pO = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, hO = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, mO = { class: "mb-1 flex justify-between" }, gO = { class: "text-sm text-neutral-500" }, yO = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, vO = {
  key: 1,
  class: "text-sm text-primary-500"
}, bO = { class: "text-sm text-neutral-500" }, wO = { class: "font-medium" }, xO = {
  key: 0,
  class: "line-through"
}, SO = ["innerHTML"], OO = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(t) {
    return na.add(Qm, Is, eg, Km, Zm), (e, r) => t.logs == null ? (C(), E("div", lO, [
      we(V(Np))
    ])) : (C(), E("div", uO, [
      t.logs.total ? (C(), E("ol", fO, [
        (C(!0), E(fe, null, Ke(t.logs.data, (n) => (C(), E("li", {
          key: n.id
        }, [
          I("div", dO, [
            I("div", pO, [
              we(V(ht), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            I("div", hO, [
              I("div", mO, [
                I("span", gO, [
                  ye(Q(n.event_formatted) + " ", 1),
                  n.reference ? (C(), E("span", yO, Q(n.reference), 1)) : Y("", !0),
                  n.causer ? (C(), E(fe, { key: 1 }, [
                    n.causer.id ? (C(), ae(V(it), {
                      key: 0,
                      href: e.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: ve(() => [
                        ye(" (" + Q(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (C(), E("span", vO, "(" + Q(n.causer.first_name) + ")", 1))
                  ], 64)) : Y("", !0)
                ]),
                I("span", bO, Q(n.created_date_full), 1)
              ]),
              (C(!0), E(fe, null, Ke(n.changes_formatted, (a, i) => (C(), E("p", {
                key: i,
                class: "mb-0 text-neutral-700"
              }, [
                I("span", wO, Q(i) + ":", 1),
                a.old ? (C(), E("span", xO, Q(a.old), 1)) : Y("", !0),
                ye(" " + Q(a.new), 1)
              ]))), 128)),
              n.description_details ? (C(), E("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, SO)) : Y("", !0)
            ])
          ])
        ]))), 128))
      ])) : (C(), E("p", cO, "No Data")),
      t.logs.links ? (C(), ae(V(Rp), {
        key: 2,
        class: "mt-6",
        links: t.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Y("", !0)
    ]));
  }
}, AO = /* @__PURE__ */ I("div", { class: "backdrop absolute inset-0 bg-gray-500 opacity-75" }, null, -1), CO = [
  AO
], K4 = {
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
    }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const r = t, n = e;
    Vt(
      () => r.show,
      () => {
        r.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const a = () => {
      r.closeable && n("close");
    }, i = (s) => {
      s.key === "Escape" && r.show && a();
    };
    Je(() => document.addEventListener("keydown", i)), Zn(() => {
      document.removeEventListener("keydown", i), document.body.style.overflow = null;
    });
    const o = se(() => {
      let s = [];
      return s.push(
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
          "7xl": "sm:max-w-7xl"
        }[r.maxWidth]
      ), r.hideOverflow && s.push("overflow-hidden"), s.join(" ");
    });
    return (s, u) => (C(), ae(Wp, { to: "body" }, [
      we(fr, { "leave-active-class": "duration-200" }, {
        default: ve(() => [
          He(I("div", {
            class: X(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: t.alignCenter, "mb-16 items-center justify-center": t.alignCenter }]),
            "scroll-region": ""
          }, [
            we(fr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${t.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${t.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: ve(() => [
                He(I("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, CO, 512), [
                  [qt, t.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            we(fr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${t.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${t.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: ve(() => [
                He(I("div", {
                  class: X(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", o.value + (t.showBorder ? " border-pink rounded-md border-2 border-solid" : "")])
                }, [
                  t.show ? K(s.$slots, "default", { key: 0 }) : Y("", !0)
                ], 2), [
                  [qt, t.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [qt, t.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}, EO = { class: "ml-3 flex-1 whitespace-nowrap" }, J4 = {
  __name: "NavLink",
  props: {
    href: String,
    active: Boolean
  },
  setup(t) {
    const e = t, r = se(
      () => e.active ? "focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (n, a) => (C(), ae(V(it), {
      href: t.href,
      class: X(r.value)
    }, {
      default: ve(() => [
        K(n.$slots, "icon"),
        I("span", EO, [
          K(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, kO = { class: "flex justify-between pagination" }, _O = ["value", "selected"], PO = {
  key: 0,
  "aria-label": "Page navigation"
}, TO = ["innerHTML"], $O = ["innerHTML", "onClick"], IO = /* @__PURE__ */ I("div", null, null, -1), Rp = {
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
    const r = e, n = t, a = ref(n.defaultPerPage), i = [
      10,
      25,
      50,
      100,
      250
    ], o = se(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const c = n.links[0], f = n.links[n.links.length - 1], d = n.links.findIndex((m) => m.active);
      let y = Math.max(1, d - Math.floor(n.maxPagesToShow / 2)), A = Math.min(n.links.length - 2, y + n.maxPagesToShow - 1);
      return A - y < n.maxPagesToShow - 1 && (y = Math.max(1, A - n.maxPagesToShow + 1)), [c, ...n.links.slice(y, A + 1), f];
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
    return (c, f) => (C(), E("div", kO, [
      I("div", null, [
        t.showPerPage ? (C(), ae(V(fg), {
          key: 0,
          type: "select",
          modelValue: V(a),
          "onUpdate:modelValue": f[0] || (f[0] = (d) => Gp(a) ? a.value = d : null),
          class: "w-20 per-page-input",
          onChanged: u
        }, {
          default: ve(() => [
            (C(), E(fe, null, Ke(i, (d) => I("option", {
              key: d,
              value: d,
              selected: d == V(a)
            }, Q(d), 9, _O)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0)
      ]),
      o.value.length > 3 ? (C(), E("nav", PO, [
        I("ul", {
          class: X(["list-style-none flex", { [t.customListClass]: t.customListClass }])
        }, [
          (C(!0), E(fe, null, Ke(o.value, (d, y) => (C(), E("li", { key: y }, [
            t.linkReturn ? (C(), E(fe, { key: 0 }, [
              d.url === null ? (C(), E("button", {
                key: 0,
                class: X(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [t.customLinkClass]: t.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: f[1] || (f[1] = (A) => s(""))
              }, null, 10, TO)) : (C(), E("button", {
                key: 1,
                class: X(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": d.active,
                  [t.customLinkClass]: t.customLinkClass,
                  [t.customActiveLinkClass]: d.active && t.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (A) => s(d.url)
              }, null, 10, $O))
            ], 64)) : (C(), E(fe, { key: 1 }, [
              d.url === null ? (C(), ae(V(it), {
                key: 0,
                class: X(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [t.customLinkClass]: t.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (C(), ae(V(it), {
                key: 1,
                class: X(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "font-bold text-primary": d.active,
                  [t.customLinkClass]: t.customLinkClass,
                  [t.customActiveLinkClass]: d.active && t.customActiveLinkClass
                }]),
                href: d.url,
                innerHTML: d.label,
                preserveScroll: t.preserveScroll || t.logs,
                preserveState: t.preserveState || t.logs,
                only: t.logs ? ["logs"] : t.only
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])) : Y("", !0),
      IO
    ]));
  }
}, DO = ["type", "disabled"], Lp = {
  __name: "PrimaryButton",
  props: {
    type: {
      type: String,
      default: "submit"
    },
    disabled: Boolean
  },
  setup(t) {
    return (e, r) => (C(), E("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded-md border border-transparent bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 active:bg-primary-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      K(e.$slots, "default")
    ], 8, DO));
  }
}, RO = ["type", "disabled"], X4 = {
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
    return (e, r) => (C(), E("button", {
      type: t.type,
      disabled: t.disabled,
      class: "focusable inline-flex items-center rounded border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 disabled:cursor-not-allowed disabled:brightness-125 disabled:grayscale-[30%]"
    }, [
      K(e.$slots, "default")
    ], 8, RO));
  }
}, Q4 = {
  __name: "ResponsiveNavLink",
  props: ["href", "active"],
  setup(t) {
    const e = t, r = se(
      () => e.active ? "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-none focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (n, a) => (C(), ae(V(it), {
      href: t.href,
      class: X(r.value)
    }, {
      default: ve(() => [
        K(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}, LO = ["type"], Z4 = {
  __name: "SecondaryButton",
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(t) {
    return (e, r) => (C(), E("button", {
      type: t.type,
      class: "focusable inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-25"
    }, [
      K(e.$slots, "default")
    ], 8, LO));
  }
}, NO = {
  key: 0,
  class: "relative mb-2 rounded-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
}, FO = {
  key: 0,
  class: "absolute right-0 top-0 mr-2 mt-1"
}, eA = {
  __name: "Section",
  props: {
    header: String,
    overflow: {
      default: !1,
      type: Boolean
    }
  },
  setup(t) {
    return (e, r) => (C(), E("div", {
      class: X(["rounded-lg border-2 border-gray-200 bg-white dark:border-gray-700", { "px-4 py-2": !t.header, "overflow-hidden": t.overflow }])
    }, [
      I("div", {
        class: X(["sm:rounded-lg", { "p-1": !t.header }])
      }, [
        t.header ? (C(), E("div", NO, [
          I("span", null, Q(t.header), 1),
          e.$slots.headerButton ? (C(), E("div", FO, [
            K(e.$slots, "headerButton")
          ])) : Y("", !0)
        ])) : Y("", !0),
        I("div", {
          class: X({ "px-4 pb-2": t.header })
        }, [
          K(e.$slots, "default")
        ], 2)
      ], 2)
    ], 2));
  }
}, MO = {}, BO = {
  class: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
}, jO = /* @__PURE__ */ I("span", { class: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]" }, "Loading...", -1), zO = [
  jO
];
function UO(t, e) {
  return C(), E("div", BO, zO);
}
const Np = /* @__PURE__ */ en(MO, [["render", UO]]), VO = ["onClick"], HO = { class: "h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2" }, tA = {
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
    const r = e, n = t, a = (o) => {
      i(o) && (o = null), r("updateSearch", o);
    }, i = (o) => n.statusName != null ? route().params[n.statusName] == o : route().params.status == o;
    return (o, s) => (C(), E("div", null, [
      I("div", {
        class: X(["flex flex-wrap gap-2 lg:flex-nowrap", { [t.customContainerClass]: t.customContainerClass }])
      }, [
        (C(!0), E(fe, null, Ke(t.stats, (u) => (C(), E("div", {
          class: X(["flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow", {
            "border-primary bg-primary-50 shadow-primary-50": i(u.name),
            [t.customStatClass]: t.customStatClass
          }]),
          onClick: (c) => a(u.name),
          key: u.value
        }, [
          I("div", null, [
            I("div", HO, [
              I("h5", {
                class: X(["text-xl font-medium leading-tight text-neutral-800", { [t.customStatValueClass]: t.customStatValueClass }])
              }, Q(u.value), 3)
            ])
          ]),
          I("div", {
            class: X(["flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2", { [t.customStatLabelClass]: t.customStatLabelClass }])
          }, Q(u.label ?? u.name), 3)
        ], 10, VO))), 128))
      ], 2)
    ]));
  }
}, rA = {
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
    var x;
    const r = t, n = e, a = ee([]), i = ee(1), o = ee(!0), s = ee(0), u = ee(""), c = ee(((x = r.form) == null ? void 0 : x[r.field]) || r.modelValue), f = ee(c.value), d = ee(null), y = (S) => {
      f.value = c.value, c.value = S, n("update:modelValue", S), S || (A(""), d.value = null);
    }, A = (S) => {
      S == "" && c.value && c.value !== f.value || (i.value = 1, s.value = 0, u.value = S, m());
    }, m = async (S = !1) => {
      const O = new URLSearchParams();
      O.append("term", u.value), O.append("page", i.value), r.queryParams && Object.keys(r.queryParams).forEach((T) => {
        O.append(T, r.queryParams[T]);
      }), S && c.value && O.append("ajax_id", c.value);
      const _ = await (await fetch(`${r.url}?${O.toString()}`)).json();
      if (o.value = _.current_page < _.last_page, i.value === 1) {
        if (a.value = _.data, c.value) {
          const T = a.value.find((L) => L[r.optionValue] == c.value);
          d.value = T ? T[r.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat(_.data);
    };
    return Je(() => {
      m(!0);
      const S = document.getElementById(r.id).parentNode.querySelector(".menu");
      S == null || S.addEventListener(
        "scroll",
        (O) => {
          O.target.scrollTop > s.value && O.target.scrollTop + O.target.clientHeight >= O.target.scrollHeight && o.value && (i.value++, m());
        },
        {
          passive: !0
        }
      );
    }), (S, O) => (C(), ae(V(my), {
      id: t.id,
      label: t.label,
      list: a.value,
      optionValue: t.optionValue,
      optionText: t.optionText,
      optionDisabled: t.optionDisabled,
      placeholder: d.value ?? t.placeholder,
      field: t.field,
      form: t.form,
      modelValue: c.value,
      noLabel: t.noLabel,
      disabled: t.disabled,
      noForm: t.noForm,
      required: t.required,
      "onUpdate:modelValue": O[0] || (O[0] = (P) => y(P)),
      onSearchchange: A,
      filterPredicate: (P, _) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
const qO = (t) => (Yp("data-v-03a62b00"), t = t(), Kp(), t), WO = ["id", "aria-controls"], GO = { class: "ml-3 flex-1 whitespace-nowrap text-left" }, YO = /* @__PURE__ */ qO(() => /* @__PURE__ */ I("svg", {
  class: "h-3 w-3 transform",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 10 6"
}, [
  /* @__PURE__ */ I("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "m1 1 4 4 4-4"
  })
], -1)), KO = ["id"], JO = {
  __name: "NavCollapse",
  props: {
    show: { type: Boolean, default: !1 },
    name: String
  },
  setup(t) {
    const e = t, r = ee(null), n = ee(null), a = ee(e.show);
    Je(() => {
      n.value = new Vr(r.value, {
        toggle: e.show
      });
    });
    const i = () => {
      n.value.toggle(), a.value = !a.value;
    };
    return (o, s) => (C(), E("li", null, [
      I("button", {
        id: t.name,
        onClick: i,
        class: "focusable group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
        "aria-controls": t.name ? t.name.replaceAll(" ", "_") : "collapsable"
      }, [
        K(o.$slots, "icon", {}, void 0, !0),
        I("span", GO, Q(t.name), 1),
        YO
      ], 8, WO),
      I("ul", {
        class: "!visible hidden space-y-1 px-4",
        id: t.name ? t.name.replaceAll(" ", "_") : "collapsable",
        ref_key: "collapseRef",
        ref: r
      }, [
        K(o.$slots, "default", {}, void 0, !0)
      ], 8, KO)
    ]));
  }
}, nA = /* @__PURE__ */ en(JO, [["__scopeId", "data-v-03a62b00"]]), XO = { class: "border-t border-gray-100" }, QO = { class: "divide-y divide-gray-100" }, aA = {
  __name: "DescriptionList",
  setup(t, { expose: e }) {
    const r = ee([]);
    return Jp("registerItem", (s) => {
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
    }), (s, u) => (C(), E("div", XO, [
      I("dl", QO, [
        K(s.$slots, "default")
      ])
    ]));
  }
}, ZO = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, e4 = { class: "flex items-center text-sm font-medium" }, t4 = {
  key: 0,
  class: "ml-1 text-red-500"
}, r4 = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, n4 = { class: "flex min-h-full items-center" }, a4 = { class: "slot-content flex-grow" }, i4 = { class: "ml-4 flex-shrink-0" }, o4 = { class: "slot-edit flex-grow" }, s4 = { class: "ml-4 flex-shrink-0" }, iA = {
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
    na.add(Is, $u);
    const r = t, n = ee(r.editable ? r.forceEditing : !1), a = () => {
      r.editable && (n.value = !n.value);
    };
    Vt(
      () => r.forceEditing,
      (u) => {
        r.editable && (n.value = u);
      }
    );
    const i = () => {
      r.editable && (n.value = !0);
    }, o = () => {
      r.editable && (n.value = !1);
    }, s = Xp("registerItem");
    return Je(() => {
      s && s({ startEditing: i, stopEditing: o, toggleEditing: a });
    }), e({
      toggleEditing: a,
      startEditing: i,
      stopEditing: o
    }), (u, c) => (C(), E("div", ZO, [
      I("dt", e4, [
        ye(Q(t.label) + " ", 1),
        K(u.$slots, "label"),
        t.required ? (C(), E("span", t4, "*")) : Y("", !0)
      ]),
      I("dd", r4, [
        I("div", n4, [
          n.value ? (C(), E(fe, { key: 1 }, [
            I("div", o4, [
              K(u.$slots, "edit")
            ]),
            I("span", s4, [
              I("button", {
                type: "button",
                onClick: a,
                class: "text-xl font-bold text-primary hover:text-primary-400"
              }, [
                we(V(ht), { icon: V($u) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (C(), E(fe, { key: 0 }, [
            I("div", a4, [
              K(u.$slots, "default"),
              ye(" " + Q(t.value), 1)
            ]),
            I("span", i4, [
              t.editable ? (C(), E("button", {
                key: 0,
                type: "button",
                onClick: a,
                class: "text-lg font-bold text-primary hover:text-primary-400"
              }, [
                we(V(ht), { icon: V(Is) }, null, 8, ["icon"])
              ])) : Y("", !0),
              K(u.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
};
var Fp = { exports: {} };
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
    var e = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
    a.JS_MD5_NO_WINDOW && (n = !1);
    var i = !n && typeof self == "object", o = !a.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
    o ? a = at : i && (a = self);
    var s = !a.JS_MD5_NO_COMMON_JS && !0 && t.exports, u = !a.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", c = "0123456789abcdef".split(""), f = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], y = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], x;
    if (u) {
      var S = new ArrayBuffer(68);
      x = new Uint8Array(S), m = new Uint32Array(S);
    }
    var O = Array.isArray;
    (a.JS_MD5_NO_NODE_JS || !O) && (O = function(h) {
      return Object.prototype.toString.call(h) === "[object Array]";
    });
    var P = ArrayBuffer.isView;
    u && (a.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !P) && (P = function(h) {
      return typeof h == "object" && h.buffer && h.buffer.constructor === ArrayBuffer;
    });
    var _ = function(h) {
      var v = typeof h;
      if (v === "string")
        return [h, !0];
      if (v !== "object" || h === null)
        throw new Error(e);
      if (u && h.constructor === ArrayBuffer)
        return [new Uint8Array(h), !1];
      if (!O(h) && !P(h))
        throw new Error(e);
      return [h, !1];
    }, T = function(h) {
      return function(v) {
        return new B(!0).update(v)[h]();
      };
    }, L = function() {
      var h = T("hex");
      o && (h = R(h)), h.create = function() {
        return new B();
      }, h.update = function(g) {
        return h.create().update(g);
      };
      for (var v = 0; v < y.length; ++v) {
        var w = y[v];
        h[w] = T(w);
      }
      return h;
    }, R = function(h) {
      var v = Be, w = Be.Buffer, g;
      w.from && !a.JS_MD5_NO_BUFFER_FROM ? g = w.from : g = function(F) {
        return new w(F);
      };
      var z = function(F) {
        if (typeof F == "string")
          return v.createHash("md5").update(F, "utf8").digest("hex");
        if (F == null)
          throw new Error(e);
        return F.constructor === ArrayBuffer && (F = new Uint8Array(F)), O(F) || P(F) || F.constructor === w ? v.createHash("md5").update(g(F)).digest("hex") : h(F);
      };
      return z;
    }, M = function(h) {
      return function(v, w) {
        return new D(v, !0).update(w)[h]();
      };
    }, j = function() {
      var h = M("hex");
      h.create = function(g) {
        return new D(g);
      }, h.update = function(g, z) {
        return h.create(g).update(z);
      };
      for (var v = 0; v < y.length; ++v) {
        var w = y[v];
        h[w] = M(w);
      }
      return h;
    };
    function B(h) {
      if (h)
        m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = x;
      else if (u) {
        var v = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(v), this.blocks = new Uint32Array(v);
      } else
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
    }
    B.prototype.update = function(h) {
      if (this.finalized)
        throw new Error(r);
      var v = _(h);
      h = v[0];
      for (var w = v[1], g, z = 0, F, N = h.length, G = this.blocks, J = this.buffer8; z < N; ) {
        if (this.hashed && (this.hashed = !1, G[0] = G[16], G[16] = G[1] = G[2] = G[3] = G[4] = G[5] = G[6] = G[7] = G[8] = G[9] = G[10] = G[11] = G[12] = G[13] = G[14] = G[15] = 0), w)
          if (u)
            for (F = this.start; z < N && F < 64; ++z)
              g = h.charCodeAt(z), g < 128 ? J[F++] = g : g < 2048 ? (J[F++] = 192 | g >>> 6, J[F++] = 128 | g & 63) : g < 55296 || g >= 57344 ? (J[F++] = 224 | g >>> 12, J[F++] = 128 | g >>> 6 & 63, J[F++] = 128 | g & 63) : (g = 65536 + ((g & 1023) << 10 | h.charCodeAt(++z) & 1023), J[F++] = 240 | g >>> 18, J[F++] = 128 | g >>> 12 & 63, J[F++] = 128 | g >>> 6 & 63, J[F++] = 128 | g & 63);
          else
            for (F = this.start; z < N && F < 64; ++z)
              g = h.charCodeAt(z), g < 128 ? G[F >>> 2] |= g << d[F++ & 3] : g < 2048 ? (G[F >>> 2] |= (192 | g >>> 6) << d[F++ & 3], G[F >>> 2] |= (128 | g & 63) << d[F++ & 3]) : g < 55296 || g >= 57344 ? (G[F >>> 2] |= (224 | g >>> 12) << d[F++ & 3], G[F >>> 2] |= (128 | g >>> 6 & 63) << d[F++ & 3], G[F >>> 2] |= (128 | g & 63) << d[F++ & 3]) : (g = 65536 + ((g & 1023) << 10 | h.charCodeAt(++z) & 1023), G[F >>> 2] |= (240 | g >>> 18) << d[F++ & 3], G[F >>> 2] |= (128 | g >>> 12 & 63) << d[F++ & 3], G[F >>> 2] |= (128 | g >>> 6 & 63) << d[F++ & 3], G[F >>> 2] |= (128 | g & 63) << d[F++ & 3]);
        else if (u)
          for (F = this.start; z < N && F < 64; ++z)
            J[F++] = h[z];
        else
          for (F = this.start; z < N && F < 64; ++z)
            G[F >>> 2] |= h[z] << d[F++ & 3];
        this.lastByteIndex = F, this.bytes += F - this.start, F >= 64 ? (this.start = F - 64, this.hash(), this.hashed = !0) : this.start = F;
      }
      return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
    }, B.prototype.finalize = function() {
      if (!this.finalized) {
        this.finalized = !0;
        var h = this.blocks, v = this.lastByteIndex;
        h[v >>> 2] |= f[v & 3], v >= 56 && (this.hashed || this.hash(), h[0] = h[16], h[16] = h[1] = h[2] = h[3] = h[4] = h[5] = h[6] = h[7] = h[8] = h[9] = h[10] = h[11] = h[12] = h[13] = h[14] = h[15] = 0), h[14] = this.bytes << 3, h[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
      }
    }, B.prototype.hash = function() {
      var h, v, w, g, z, F, N = this.blocks;
      this.first ? (h = N[0] - 680876937, h = (h << 7 | h >>> 25) - 271733879 << 0, g = (-1732584194 ^ h & 2004318071) + N[1] - 117830708, g = (g << 12 | g >>> 20) + h << 0, w = (-271733879 ^ g & (h ^ -271733879)) + N[2] - 1126478375, w = (w << 17 | w >>> 15) + g << 0, v = (h ^ w & (g ^ h)) + N[3] - 1316259209, v = (v << 22 | v >>> 10) + w << 0) : (h = this.h0, v = this.h1, w = this.h2, g = this.h3, h += (g ^ v & (w ^ g)) + N[0] - 680876936, h = (h << 7 | h >>> 25) + v << 0, g += (w ^ h & (v ^ w)) + N[1] - 389564586, g = (g << 12 | g >>> 20) + h << 0, w += (v ^ g & (h ^ v)) + N[2] + 606105819, w = (w << 17 | w >>> 15) + g << 0, v += (h ^ w & (g ^ h)) + N[3] - 1044525330, v = (v << 22 | v >>> 10) + w << 0), h += (g ^ v & (w ^ g)) + N[4] - 176418897, h = (h << 7 | h >>> 25) + v << 0, g += (w ^ h & (v ^ w)) + N[5] + 1200080426, g = (g << 12 | g >>> 20) + h << 0, w += (v ^ g & (h ^ v)) + N[6] - 1473231341, w = (w << 17 | w >>> 15) + g << 0, v += (h ^ w & (g ^ h)) + N[7] - 45705983, v = (v << 22 | v >>> 10) + w << 0, h += (g ^ v & (w ^ g)) + N[8] + 1770035416, h = (h << 7 | h >>> 25) + v << 0, g += (w ^ h & (v ^ w)) + N[9] - 1958414417, g = (g << 12 | g >>> 20) + h << 0, w += (v ^ g & (h ^ v)) + N[10] - 42063, w = (w << 17 | w >>> 15) + g << 0, v += (h ^ w & (g ^ h)) + N[11] - 1990404162, v = (v << 22 | v >>> 10) + w << 0, h += (g ^ v & (w ^ g)) + N[12] + 1804603682, h = (h << 7 | h >>> 25) + v << 0, g += (w ^ h & (v ^ w)) + N[13] - 40341101, g = (g << 12 | g >>> 20) + h << 0, w += (v ^ g & (h ^ v)) + N[14] - 1502002290, w = (w << 17 | w >>> 15) + g << 0, v += (h ^ w & (g ^ h)) + N[15] + 1236535329, v = (v << 22 | v >>> 10) + w << 0, h += (w ^ g & (v ^ w)) + N[1] - 165796510, h = (h << 5 | h >>> 27) + v << 0, g += (v ^ w & (h ^ v)) + N[6] - 1069501632, g = (g << 9 | g >>> 23) + h << 0, w += (h ^ v & (g ^ h)) + N[11] + 643717713, w = (w << 14 | w >>> 18) + g << 0, v += (g ^ h & (w ^ g)) + N[0] - 373897302, v = (v << 20 | v >>> 12) + w << 0, h += (w ^ g & (v ^ w)) + N[5] - 701558691, h = (h << 5 | h >>> 27) + v << 0, g += (v ^ w & (h ^ v)) + N[10] + 38016083, g = (g << 9 | g >>> 23) + h << 0, w += (h ^ v & (g ^ h)) + N[15] - 660478335, w = (w << 14 | w >>> 18) + g << 0, v += (g ^ h & (w ^ g)) + N[4] - 405537848, v = (v << 20 | v >>> 12) + w << 0, h += (w ^ g & (v ^ w)) + N[9] + 568446438, h = (h << 5 | h >>> 27) + v << 0, g += (v ^ w & (h ^ v)) + N[14] - 1019803690, g = (g << 9 | g >>> 23) + h << 0, w += (h ^ v & (g ^ h)) + N[3] - 187363961, w = (w << 14 | w >>> 18) + g << 0, v += (g ^ h & (w ^ g)) + N[8] + 1163531501, v = (v << 20 | v >>> 12) + w << 0, h += (w ^ g & (v ^ w)) + N[13] - 1444681467, h = (h << 5 | h >>> 27) + v << 0, g += (v ^ w & (h ^ v)) + N[2] - 51403784, g = (g << 9 | g >>> 23) + h << 0, w += (h ^ v & (g ^ h)) + N[7] + 1735328473, w = (w << 14 | w >>> 18) + g << 0, v += (g ^ h & (w ^ g)) + N[12] - 1926607734, v = (v << 20 | v >>> 12) + w << 0, z = v ^ w, h += (z ^ g) + N[5] - 378558, h = (h << 4 | h >>> 28) + v << 0, g += (z ^ h) + N[8] - 2022574463, g = (g << 11 | g >>> 21) + h << 0, F = g ^ h, w += (F ^ v) + N[11] + 1839030562, w = (w << 16 | w >>> 16) + g << 0, v += (F ^ w) + N[14] - 35309556, v = (v << 23 | v >>> 9) + w << 0, z = v ^ w, h += (z ^ g) + N[1] - 1530992060, h = (h << 4 | h >>> 28) + v << 0, g += (z ^ h) + N[4] + 1272893353, g = (g << 11 | g >>> 21) + h << 0, F = g ^ h, w += (F ^ v) + N[7] - 155497632, w = (w << 16 | w >>> 16) + g << 0, v += (F ^ w) + N[10] - 1094730640, v = (v << 23 | v >>> 9) + w << 0, z = v ^ w, h += (z ^ g) + N[13] + 681279174, h = (h << 4 | h >>> 28) + v << 0, g += (z ^ h) + N[0] - 358537222, g = (g << 11 | g >>> 21) + h << 0, F = g ^ h, w += (F ^ v) + N[3] - 722521979, w = (w << 16 | w >>> 16) + g << 0, v += (F ^ w) + N[6] + 76029189, v = (v << 23 | v >>> 9) + w << 0, z = v ^ w, h += (z ^ g) + N[9] - 640364487, h = (h << 4 | h >>> 28) + v << 0, g += (z ^ h) + N[12] - 421815835, g = (g << 11 | g >>> 21) + h << 0, F = g ^ h, w += (F ^ v) + N[15] + 530742520, w = (w << 16 | w >>> 16) + g << 0, v += (F ^ w) + N[2] - 995338651, v = (v << 23 | v >>> 9) + w << 0, h += (w ^ (v | ~g)) + N[0] - 198630844, h = (h << 6 | h >>> 26) + v << 0, g += (v ^ (h | ~w)) + N[7] + 1126891415, g = (g << 10 | g >>> 22) + h << 0, w += (h ^ (g | ~v)) + N[14] - 1416354905, w = (w << 15 | w >>> 17) + g << 0, v += (g ^ (w | ~h)) + N[5] - 57434055, v = (v << 21 | v >>> 11) + w << 0, h += (w ^ (v | ~g)) + N[12] + 1700485571, h = (h << 6 | h >>> 26) + v << 0, g += (v ^ (h | ~w)) + N[3] - 1894986606, g = (g << 10 | g >>> 22) + h << 0, w += (h ^ (g | ~v)) + N[10] - 1051523, w = (w << 15 | w >>> 17) + g << 0, v += (g ^ (w | ~h)) + N[1] - 2054922799, v = (v << 21 | v >>> 11) + w << 0, h += (w ^ (v | ~g)) + N[8] + 1873313359, h = (h << 6 | h >>> 26) + v << 0, g += (v ^ (h | ~w)) + N[15] - 30611744, g = (g << 10 | g >>> 22) + h << 0, w += (h ^ (g | ~v)) + N[6] - 1560198380, w = (w << 15 | w >>> 17) + g << 0, v += (g ^ (w | ~h)) + N[13] + 1309151649, v = (v << 21 | v >>> 11) + w << 0, h += (w ^ (v | ~g)) + N[4] - 145523070, h = (h << 6 | h >>> 26) + v << 0, g += (v ^ (h | ~w)) + N[11] - 1120210379, g = (g << 10 | g >>> 22) + h << 0, w += (h ^ (g | ~v)) + N[2] + 718787259, w = (w << 15 | w >>> 17) + g << 0, v += (g ^ (w | ~h)) + N[9] - 343485551, v = (v << 21 | v >>> 11) + w << 0, this.first ? (this.h0 = h + 1732584193 << 0, this.h1 = v - 271733879 << 0, this.h2 = w - 1732584194 << 0, this.h3 = g + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + h << 0, this.h1 = this.h1 + v << 0, this.h2 = this.h2 + w << 0, this.h3 = this.h3 + g << 0);
    }, B.prototype.hex = function() {
      this.finalize();
      var h = this.h0, v = this.h1, w = this.h2, g = this.h3;
      return c[h >>> 4 & 15] + c[h & 15] + c[h >>> 12 & 15] + c[h >>> 8 & 15] + c[h >>> 20 & 15] + c[h >>> 16 & 15] + c[h >>> 28 & 15] + c[h >>> 24 & 15] + c[v >>> 4 & 15] + c[v & 15] + c[v >>> 12 & 15] + c[v >>> 8 & 15] + c[v >>> 20 & 15] + c[v >>> 16 & 15] + c[v >>> 28 & 15] + c[v >>> 24 & 15] + c[w >>> 4 & 15] + c[w & 15] + c[w >>> 12 & 15] + c[w >>> 8 & 15] + c[w >>> 20 & 15] + c[w >>> 16 & 15] + c[w >>> 28 & 15] + c[w >>> 24 & 15] + c[g >>> 4 & 15] + c[g & 15] + c[g >>> 12 & 15] + c[g >>> 8 & 15] + c[g >>> 20 & 15] + c[g >>> 16 & 15] + c[g >>> 28 & 15] + c[g >>> 24 & 15];
    }, B.prototype.toString = B.prototype.hex, B.prototype.digest = function() {
      this.finalize();
      var h = this.h0, v = this.h1, w = this.h2, g = this.h3;
      return [
        h & 255,
        h >>> 8 & 255,
        h >>> 16 & 255,
        h >>> 24 & 255,
        v & 255,
        v >>> 8 & 255,
        v >>> 16 & 255,
        v >>> 24 & 255,
        w & 255,
        w >>> 8 & 255,
        w >>> 16 & 255,
        w >>> 24 & 255,
        g & 255,
        g >>> 8 & 255,
        g >>> 16 & 255,
        g >>> 24 & 255
      ];
    }, B.prototype.array = B.prototype.digest, B.prototype.arrayBuffer = function() {
      this.finalize();
      var h = new ArrayBuffer(16), v = new Uint32Array(h);
      return v[0] = this.h0, v[1] = this.h1, v[2] = this.h2, v[3] = this.h3, h;
    }, B.prototype.buffer = B.prototype.arrayBuffer, B.prototype.base64 = function() {
      for (var h, v, w, g = "", z = this.array(), F = 0; F < 15; )
        h = z[F++], v = z[F++], w = z[F++], g += A[h >>> 2] + A[(h << 4 | v >>> 4) & 63] + A[(v << 2 | w >>> 6) & 63] + A[w & 63];
      return h = z[F], g += A[h >>> 2] + A[h << 4 & 63] + "==", g;
    };
    function D(h, v) {
      var w, g = _(h);
      if (h = g[0], g[1]) {
        var z = [], F = h.length, N = 0, G;
        for (w = 0; w < F; ++w)
          G = h.charCodeAt(w), G < 128 ? z[N++] = G : G < 2048 ? (z[N++] = 192 | G >>> 6, z[N++] = 128 | G & 63) : G < 55296 || G >= 57344 ? (z[N++] = 224 | G >>> 12, z[N++] = 128 | G >>> 6 & 63, z[N++] = 128 | G & 63) : (G = 65536 + ((G & 1023) << 10 | h.charCodeAt(++w) & 1023), z[N++] = 240 | G >>> 18, z[N++] = 128 | G >>> 12 & 63, z[N++] = 128 | G >>> 6 & 63, z[N++] = 128 | G & 63);
        h = z;
      }
      h.length > 64 && (h = new B(!0).update(h).array());
      var J = [], Xe = [];
      for (w = 0; w < 64; ++w) {
        var Rt = h[w] || 0;
        J[w] = 92 ^ Rt, Xe[w] = 54 ^ Rt;
      }
      B.call(this, v), this.update(Xe), this.oKeyPad = J, this.inner = !0, this.sharedMemory = v;
    }
    D.prototype = new B(), D.prototype.finalize = function() {
      if (B.prototype.finalize.call(this), this.inner) {
        this.inner = !1;
        var h = this.array();
        B.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(h), B.prototype.finalize.call(this);
      }
    };
    var H = L();
    H.md5 = H, H.md5.hmac = j(), s ? t.exports = H : a.md5 = H;
  })();
})(Fp);
var l4 = Fp.exports;
const u4 = ["src", "alt"], oA = {
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
    const e = t, r = se(() => l4.md5(e.email.trim().toLowerCase())), n = se(() => `https://www.gravatar.com/avatar/${r.value}?s=${e.size}`), a = se(() => `Gravatar for ${e.email}`);
    return (i, o) => (C(), E("img", {
      src: n.value,
      alt: a.value
    }, null, 8, u4));
  }
}, sA = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(t) {
    return (e, r) => (C(), ae(Vw, {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id,
      class: "cursor-pointer"
    }, {
      default: ve(() => [
        K(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-te-target", "aria-controls"]));
  }
}, lA = {
  install(t) {
    for (const e in components)
      t.component(e, components[e]);
  }
};
export {
  U4 as Alert,
  f4 as Checkbox,
  eO as CollapsableSection,
  eO as CollapsibleSection,
  X4 as DangerButton,
  aA as DescriptionList,
  iA as DescriptionListItem,
  V4 as Dropdown,
  H4 as DropdownLink,
  p4 as DropdownSearchbar,
  y4 as FileDropZoneInput,
  oA as GravatarImg,
  v4 as Images,
  fg as Input,
  aa as InputError,
  Tl as InputLabel,
  q4 as LinkButton,
  W4 as LinkDropdownButton,
  G4 as LinkDropdownButtonItem,
  Y4 as Logs,
  OO as LogsContent,
  K4 as Modal,
  nA as NavCollapse,
  J4 as NavLink,
  Rp as Pagination,
  Lp as PrimaryButton,
  b4 as RadioButton,
  Q4 as ResponsiveNavLink,
  my as SearchSelect,
  Z4 as SecondaryButton,
  eA as Section,
  rA as Select2ajax,
  Np as Spinner,
  tA as Stats,
  Ic as SubmitButton,
  w4 as Table,
  z4 as TableItemCard,
  Vw as Td,
  sA as TdCollapseHandler,
  vg as TextInput,
  d4 as Textarea,
  S4 as Th,
  x4 as Thead,
  A4 as TrCollapse,
  O4 as TrCollapseHandler,
  lA as default,
  ua as getInertiaRouter,
  m4 as hasPermission,
  T1 as moneyFormat,
  h4 as numberFormat,
  g4 as setInertiaRouter
};
