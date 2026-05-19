import * as fl from "vue";
import { defineComponent as z, createElementBlock as P, openBlock as S, createElementVNode as R, createCommentVNode as X, Fragment as oe, renderList as ke, normalizeClass as Q, toDisplayString as Z, computed as T, createBlock as U, renderSlot as V, unref as g, watch as ne, h as Ue, createVNode as J, mergeModels as gt, useModel as zr, ref as N, onMounted as ye, withDirectives as tt, vModelCheckbox as sm, vModelSelect as Lc, withCtx as I, createTextVNode as fe, isRef as Wt, createSlots as Bn, vShow as lr, vModelText as Mc, shallowRef as gn, getCurrentScope as Nc, onScopeDispose as si, shallowReadonly as Pr, Comment as jc, mergeProps as se, cloneVNode as im, toValue as Ct, readonly as qc, effectScope as Vc, onBeforeUnmount as zc, watchEffect as ut, customRef as lm, getCurrentInstance as gr, nextTick as Me, inject as ii, provide as ka, toRefs as Pt, onUnmounted as Nt, toHandlerKey as um, camelize as Uc, reactive as vn, normalizeStyle as rt, Teleport as Hc, toRef as cm, markRaw as ps, watchPostEffect as Wc, mergeDefaults as Kc, withModifiers as mt, normalizeProps as Ee, guardReactiveProps as Re, withKeys as Gt, useSlots as dm, resolveDynamicComponent as Xn, toHandlers as Gc, Transition as ur, resolveDirective as fm, resolveComponent as pm, useAttrs as mm } from "vue";
const hm = { class: "overflow-x-auto" }, ym = { class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700" }, gm = { class: "divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:divide-gray-700 dark:bg-gray-800" }, vm = { key: 0 }, bm = { class: "px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-100" }, wm = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-300" }, Sm = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-300" }, xm = { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-300" }, g4 = /* @__PURE__ */ z({
  __name: "PropsTable",
  props: {
    rows: { default: () => [] }
  },
  setup(e) {
    const t = e;
    return (r, n) => (S(), P("div", hm, [
      R("table", ym, [
        n[1] || (n[1] = R("thead", { class: "bg-gray-50 dark:bg-gray-900/50" }, [
          R("tr", null, [
            R("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400" }, "Prop"),
            R("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400" }, "Type"),
            R("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400" }, "Default"),
            R("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400" }, "Description")
          ])
        ], -1)),
        R("tbody", gm, [
          t.rows.length === 0 ? (S(), P("tr", vm, n[0] || (n[0] = [
            R("td", {
              colspan: "4",
              class: "px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
            }, "No props defined", -1)
          ]))) : X("", !0),
          (S(!0), P(oe, null, ke(t.rows, (a, o) => (S(), P("tr", {
            key: o,
            class: Q({ "bg-yellow-50 dark:bg-yellow-500/10": a.highlight })
          }, [
            R("td", bm, Z(a.prop), 1),
            R("td", wm, Z(a.type), 1),
            R("td", Sm, Z(a.default), 1),
            R("td", xm, Z(a.description), 1)
          ], 2))), 128))
        ])
      ])
    ]));
  }
}), li = /* @__PURE__ */ z({
  __name: "InputWrapper",
  props: {
    field: { default: void 0 },
    label: { default: void 0 },
    sublabel: { default: void 0 },
    tooltip: { default: void 0 },
    required: { type: Boolean, default: !1 },
    noLabel: { type: Boolean, default: !1 },
    labelCustomClass: { default: "" },
    form: { default: void 0 },
    error: { default: void 0 },
    htmlFor: { default: void 0 }
  },
  setup(e) {
    const t = e;
    function r(s) {
      let i = [];
      return s.split("_").join(" ").split(" ").map(function(u) {
        i.push(u[0].toUpperCase() + u.slice(1));
      }), i.join(" ");
    }
    const n = T(() => t.label ? t.label : t.field ? r(t.field) : ""), a = T(() => {
      var s, i;
      return t.error ? t.error : (i = (s = t.form) == null ? void 0 : s.errors) != null && i[t.field || ""] ? t.form.errors[t.field || ""] : null;
    }), o = T(() => t.htmlFor || t.field);
    return (s, i) => (S(), P("div", {
      class: Q(s.noLabel ? "mb-2" : "mb-4")
    }, [
      !s.noLabel && (n.value || s.field) ? (S(), U(g(Hr), {
        key: 0,
        customClass: s.labelCustomClass,
        for: o.value,
        value: n.value,
        sublabel: s.sublabel,
        required: s.required,
        tooltip: s.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : X("", !0),
      V(s.$slots, "default"),
      a.value ? (S(), U(g(rr), {
        key: 1,
        message: a.value,
        class: "mt-2"
      }, null, 8, ["message"])) : X("", !0)
    ], 2));
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const ms = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, km = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, pl = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, Om = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, ui = Om, Cm = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, Em = Cm, ml = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, Am = {
  prefix: "fas",
  iconName: "person-digging",
  icon: [576, 512, ["digging"], "f85e", "M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"]
}, Pm = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, $m = Pm, Tm = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Dm = Tm, ci = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Rm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, _m = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, la = _m, Fm = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Im = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
}, Bm = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Lm = Bm, Mm = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, Nm = Mm;
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function jm(e, t, r) {
  return (t = Vm(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function hl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hl(Object(r), !0).forEach(function(n) {
      jm(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qm(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vm(e) {
  var t = qm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const yl = () => {
};
let di = {}, Yc = {}, Xc = null, Jc = {
  mark: yl,
  measure: yl
};
try {
  typeof window < "u" && (di = window), typeof document < "u" && (Yc = document), typeof MutationObserver < "u" && (Xc = MutationObserver), typeof performance < "u" && (Jc = performance);
} catch {
}
const {
  userAgent: gl = ""
} = di.navigator || {}, Xt = di, Oe = Yc, vl = Xc, Ln = Jc;
Xt.document;
const jt = !!Oe.documentElement && !!Oe.head && typeof Oe.addEventListener == "function" && typeof Oe.createElement == "function", Qc = ~gl.indexOf("MSIE") || ~gl.indexOf("Trident/");
var zm = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Um = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Zc = {
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
}, Hm = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ed = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Ve = "classic", Oa = "duotone", Wm = "sharp", Km = "sharp-duotone", td = [Ve, Oa, Wm, Km], Gm = {
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
}, Ym = {
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
}, Xm = /* @__PURE__ */ new Map([["classic", {
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
}]]), Jm = {
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
}, Qm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], bl = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Zm = ["kit"], eh = {
  kit: {
    "fa-kit": "fak"
  }
}, th = ["fak", "fakd"], rh = {
  kit: {
    fak: "fa-kit"
  }
}, wl = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Mn = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, nh = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], ah = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], oh = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, sh = {
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
}, ih = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, hs = {
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
}, lh = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ys = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...nh, ...lh], uh = ["solid", "regular", "light", "thin", "duotone", "brands"], rd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ch = rd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), dh = [...Object.keys(ih), ...uh, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Mn.GROUP, Mn.SWAP_OPACITY, Mn.PRIMARY, Mn.SECONDARY].concat(rd.map((e) => "".concat(e, "x"))).concat(ch.map((e) => "w-".concat(e))), fh = {
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
const It = "___FONT_AWESOME___", gs = 16, nd = "fa", ad = "svg-inline--fa", dr = "data-fa-i2svg", vs = "data-fa-pseudo-element", ph = "data-fa-pseudo-element-pending", fi = "data-prefix", pi = "data-icon", Sl = "fontawesome-i2svg", mh = "async", hh = ["HTML", "HEAD", "STYLE", "SCRIPT"], od = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function bn(e) {
  return new Proxy(e, {
    get(t, r) {
      return r in t ? t[r] : t[Ve];
    }
  });
}
const sd = Y({}, Zc);
sd[Ve] = Y(Y(Y(Y({}, {
  "fa-duotone": "duotone"
}), Zc[Ve]), bl.kit), bl["kit-duotone"]);
const yh = bn(sd), bs = Y({}, Jm);
bs[Ve] = Y(Y(Y(Y({}, {
  duotone: "fad"
}), bs[Ve]), wl.kit), wl["kit-duotone"]);
const xl = bn(bs), ws = Y({}, hs);
ws[Ve] = Y(Y({}, ws[Ve]), rh.kit);
const mi = bn(ws), Ss = Y({}, sh);
Ss[Ve] = Y(Y({}, Ss[Ve]), eh.kit);
bn(Ss);
const gh = zm, id = "fa-layers-text", vh = Um, bh = Y({}, Gm);
bn(bh);
const wh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], to = Hm, Sh = [...Zm, ...dh], on = Xt.FontAwesomeConfig || {};
function xh(e) {
  var t = Oe.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function kh(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
Oe && typeof Oe.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [r, n] = t;
  const a = kh(xh(r));
  a != null && (on[n] = a);
});
const ld = {
  styleDefault: "solid",
  familyDefault: Ve,
  cssPrefix: nd,
  replacementClass: ad,
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
on.familyPrefix && (on.cssPrefix = on.familyPrefix);
const Nr = Y(Y({}, ld), on);
Nr.autoReplaceSvg || (Nr.observeMutations = !1);
const te = {};
Object.keys(ld).forEach((e) => {
  Object.defineProperty(te, e, {
    enumerable: !0,
    set: function(t) {
      Nr[e] = t, sn.forEach((r) => r(te));
    },
    get: function() {
      return Nr[e];
    }
  });
});
Object.defineProperty(te, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Nr.cssPrefix = e, sn.forEach((t) => t(te));
  },
  get: function() {
    return Nr.cssPrefix;
  }
});
Xt.FontAwesomeConfig = te;
const sn = [];
function Oh(e) {
  return sn.push(e), () => {
    sn.splice(sn.indexOf(e), 1);
  };
}
const Ht = gs, xt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ch(e) {
  if (!e || !jt)
    return;
  const t = Oe.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const r = Oe.head.childNodes;
  let n = null;
  for (let a = r.length - 1; a > -1; a--) {
    const o = r[a], s = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (n = o);
  }
  return Oe.head.insertBefore(t, n), e;
}
const Eh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function fn() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += Eh[Math.random() * 62 | 0];
  return t;
}
function Ur(e) {
  const t = [];
  for (let r = (e || []).length >>> 0; r--; )
    t[r] = e[r];
  return t;
}
function hi(e) {
  return e.classList ? Ur(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function ud(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ah(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, '="').concat(ud(e[r]), '" '), "").trim();
}
function Ca(e) {
  return Object.keys(e || {}).reduce((t, r) => t + "".concat(r, ": ").concat(e[r].trim(), ";"), "");
}
function yi(e) {
  return e.size !== xt.size || e.x !== xt.x || e.y !== xt.y || e.rotate !== xt.rotate || e.flipX || e.flipY;
}
function Ph(e) {
  let {
    transform: t,
    containerWidth: r,
    iconWidth: n
  } = e;
  const a = {
    transform: "translate(".concat(r / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), i = "rotate(".concat(t.rotate, " 0 0)"), u = {
    transform: "".concat(o, " ").concat(s, " ").concat(i)
  }, l = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: u,
    path: l
  };
}
function $h(e) {
  let {
    transform: t,
    width: r = gs,
    height: n = gs,
    startCentered: a = !1
  } = e, o = "";
  return a && Qc ? o += "translate(".concat(t.x / Ht - r / 2, "em, ").concat(t.y / Ht - n / 2, "em) ") : a ? o += "translate(calc(-50% + ".concat(t.x / Ht, "em), calc(-50% + ").concat(t.y / Ht, "em)) ") : o += "translate(".concat(t.x / Ht, "em, ").concat(t.y / Ht, "em) "), o += "scale(".concat(t.size / Ht * (t.flipX ? -1 : 1), ", ").concat(t.size / Ht * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var Th = `:root, :host {
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
function cd() {
  const e = nd, t = ad, r = te.cssPrefix, n = te.replacementClass;
  let a = Th;
  if (r !== e || n !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(r, "-")).replace(s, "--".concat(r, "-")).replace(i, ".".concat(n));
  }
  return a;
}
let kl = !1;
function ro() {
  te.autoAddCss && !kl && (Ch(cd()), kl = !0);
}
var Dh = {
  mixout() {
    return {
      dom: {
        css: cd,
        insertCss: ro
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ro();
      },
      beforeI2svg() {
        ro();
      }
    };
  }
};
const Bt = Xt || {};
Bt[It] || (Bt[It] = {});
Bt[It].styles || (Bt[It].styles = {});
Bt[It].hooks || (Bt[It].hooks = {});
Bt[It].shims || (Bt[It].shims = []);
var kt = Bt[It];
const dd = [], fd = function() {
  Oe.removeEventListener("DOMContentLoaded", fd), ua = 1, dd.map((e) => e());
};
let ua = !1;
jt && (ua = (Oe.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Oe.readyState), ua || Oe.addEventListener("DOMContentLoaded", fd));
function Rh(e) {
  jt && (ua ? setTimeout(e, 0) : dd.push(e));
}
function wn(e) {
  const {
    tag: t,
    attributes: r = {},
    children: n = []
  } = e;
  return typeof e == "string" ? ud(e) : "<".concat(t, " ").concat(Ah(r), ">").concat(n.map(wn).join(""), "</").concat(t, ">");
}
function Ol(e, t, r) {
  if (e && e[t] && e[t][r])
    return {
      prefix: t,
      iconName: r,
      icon: e[t][r]
    };
}
var no = function(t, r, n, a) {
  var o = Object.keys(t), s = o.length, i = r, u, l, c;
  for (n === void 0 ? (u = 1, c = t[o[0]]) : (u = 0, c = n); u < s; u++)
    l = o[u], c = i(c, t[l], l, t);
  return c;
};
function _h(e) {
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
function xs(e) {
  const t = _h(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Fh(e, t) {
  const r = e.length;
  let n = e.charCodeAt(t), a;
  return n >= 55296 && n <= 56319 && r > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (n - 55296) * 1024 + a - 56320 + 65536 : n;
}
function Cl(e) {
  return Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return !!n.icon ? t[n.iconName] = n.icon : t[r] = n, t;
  }, {});
}
function ks(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: n = !1
  } = r, a = Cl(t);
  typeof kt.hooks.addPack == "function" && !n ? kt.hooks.addPack(e, Cl(t)) : kt.styles[e] = Y(Y({}, kt.styles[e] || {}), a), e === "fas" && ks("fa", t);
}
const {
  styles: pn,
  shims: Ih
} = kt, pd = Object.keys(mi), Bh = pd.reduce((e, t) => (e[t] = Object.keys(mi[t]), e), {});
let gi = null, md = {}, hd = {}, yd = {}, gd = {}, vd = {};
function Lh(e) {
  return ~Sh.indexOf(e);
}
function Mh(e, t) {
  const r = t.split("-"), n = r[0], a = r.slice(1).join("-");
  return n === e && a !== "" && !Lh(a) ? a : null;
}
const bd = () => {
  const e = (n) => no(pn, (a, o, s) => (a[s] = no(o, n, {}), a), {});
  md = e((n, a, o) => (a[3] && (n[a[3]] = o), a[2] && a[2].filter((i) => typeof i == "number").forEach((i) => {
    n[i.toString(16)] = o;
  }), n)), hd = e((n, a, o) => (n[o] = o, a[2] && a[2].filter((i) => typeof i == "string").forEach((i) => {
    n[i] = o;
  }), n)), vd = e((n, a, o) => {
    const s = a[2];
    return n[o] = o, s.forEach((i) => {
      n[i] = o;
    }), n;
  });
  const t = "far" in pn || te.autoFetchSvg, r = no(Ih, (n, a) => {
    const o = a[0];
    let s = a[1];
    const i = a[2];
    return s === "far" && !t && (s = "fas"), typeof o == "string" && (n.names[o] = {
      prefix: s,
      iconName: i
    }), typeof o == "number" && (n.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: i
    }), n;
  }, {
    names: {},
    unicodes: {}
  });
  yd = r.names, gd = r.unicodes, gi = Ea(te.styleDefault, {
    family: te.familyDefault
  });
};
Oh((e) => {
  gi = Ea(e.styleDefault, {
    family: te.familyDefault
  });
});
bd();
function vi(e, t) {
  return (md[e] || {})[t];
}
function Nh(e, t) {
  return (hd[e] || {})[t];
}
function or(e, t) {
  return (vd[e] || {})[t];
}
function wd(e) {
  return yd[e] || {
    prefix: null,
    iconName: null
  };
}
function jh(e) {
  const t = gd[e], r = vi("fas", e);
  return t || (r ? {
    prefix: "fas",
    iconName: r
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Jt() {
  return gi;
}
const Sd = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function qh(e) {
  let t = Ve;
  const r = pd.reduce((n, a) => (n[a] = "".concat(te.cssPrefix, "-").concat(a), n), {});
  return td.forEach((n) => {
    (e.includes(r[n]) || e.some((a) => Bh[n].includes(a))) && (t = n);
  }), t;
}
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: r = Ve
  } = t, n = yh[r][e];
  if (r === Oa && !e)
    return "fad";
  const a = xl[r][e] || xl[r][n], o = e in kt.styles ? e : null;
  return a || o || null;
}
function Vh(e) {
  let t = [], r = null;
  return e.forEach((n) => {
    const a = Mh(te.cssPrefix, n);
    a ? r = a : n && t.push(n);
  }), {
    iconName: r,
    rest: t
  };
}
function El(e) {
  return e.sort().filter((t, r, n) => n.indexOf(t) === r);
}
function Aa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: r = !1
  } = t;
  let n = null;
  const a = ys.concat(ah), o = El(e.filter((d) => a.includes(d))), s = El(e.filter((d) => !ys.includes(d))), i = o.filter((d) => (n = d, !ed.includes(d))), [u = null] = i, l = qh(o), c = Y(Y({}, Vh(s)), {}, {
    prefix: Ea(u, {
      family: l
    })
  });
  return Y(Y(Y({}, c), Wh({
    values: e,
    family: l,
    styles: pn,
    config: te,
    canonical: c,
    givenPrefix: n
  })), zh(r, n, c));
}
function zh(e, t, r) {
  let {
    prefix: n,
    iconName: a
  } = r;
  if (e || !n || !a)
    return {
      prefix: n,
      iconName: a
    };
  const o = t === "fa" ? wd(a) : {}, s = or(n, a);
  return a = o.iconName || s || a, n = o.prefix || n, n === "far" && !pn.far && pn.fas && !te.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: a
  };
}
const Uh = td.filter((e) => e !== Ve || e !== Oa), Hh = Object.keys(hs).filter((e) => e !== Ve).map((e) => Object.keys(hs[e])).flat();
function Wh(e) {
  const {
    values: t,
    family: r,
    canonical: n,
    givenPrefix: a = "",
    styles: o = {},
    config: s = {}
  } = e, i = r === Oa, u = t.includes("fa-duotone") || t.includes("fad"), l = s.familyDefault === "duotone", c = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!i && (u || l || c) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Uh.includes(r) && (Object.keys(o).find((y) => Hh.includes(y)) || s.autoFetchSvg)) {
    const y = Xm.get(r).defaultShortPrefixId;
    n.prefix = y, n.iconName = or(n.prefix, n.iconName) || n.iconName;
  }
  return (n.prefix === "fa" || a === "fa") && (n.prefix = Jt() || "fas"), n;
}
class Kh {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    const a = r.reduce(this._pullDefinitions, {});
    Object.keys(a).forEach((o) => {
      this.definitions[o] = Y(Y({}, this.definitions[o] || {}), a[o]), ks(o, a[o]);
      const s = mi[Ve][o];
      s && ks(s, a[o]), bd();
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
        iconName: s,
        icon: i
      } = n[a], u = i[2];
      t[o] || (t[o] = {}), u.length > 0 && u.forEach((l) => {
        typeof l == "string" && (t[o][l] = i);
      }), t[o][s] = i;
    }), t;
  }
}
let Al = [], _r = {};
const Ir = {}, Gh = Object.keys(Ir);
function Yh(e, t) {
  let {
    mixoutsTo: r
  } = t;
  return Al = e, _r = {}, Object.keys(Ir).forEach((n) => {
    Gh.indexOf(n) === -1 && delete Ir[n];
  }), Al.forEach((n) => {
    const a = n.mixout ? n.mixout() : {};
    if (Object.keys(a).forEach((o) => {
      typeof a[o] == "function" && (r[o] = a[o]), typeof a[o] == "object" && Object.keys(a[o]).forEach((s) => {
        r[o] || (r[o] = {}), r[o][s] = a[o][s];
      });
    }), n.hooks) {
      const o = n.hooks();
      Object.keys(o).forEach((s) => {
        _r[s] || (_r[s] = []), _r[s].push(o[s]);
      });
    }
    n.provides && n.provides(Ir);
  }), r;
}
function Os(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    n[a - 2] = arguments[a];
  return (_r[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...n]);
  }), t;
}
function fr(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  (_r[e] || []).forEach((o) => {
    o.apply(null, r);
  });
}
function Qt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Ir[e] ? Ir[e].apply(null, t) : void 0;
}
function Cs(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const r = e.prefix || Jt();
  if (t)
    return t = or(r, t) || t, Ol(xd.definitions, r, t) || Ol(kt.styles, r, t);
}
const xd = new Kh(), Xh = () => {
  te.autoReplaceSvg = !1, te.observeMutations = !1, fr("noAuto");
}, Jh = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return jt ? (fr("beforeI2svg", e), Qt("pseudoElements2svg", e), Qt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    te.autoReplaceSvg === !1 && (te.autoReplaceSvg = !0), te.observeMutations = !0, Rh(() => {
      Zh({
        autoReplaceSvgRoot: t
      }), fr("watch", e);
    });
  }
}, Qh = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: or(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = Ea(e[0]);
      return {
        prefix: r,
        iconName: or(r, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(te.cssPrefix, "-")) > -1 || e.match(gh))) {
      const t = Aa(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Jt(),
        iconName: or(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Jt();
      return {
        prefix: t,
        iconName: or(t, e) || e
      };
    }
  }
}, at = {
  noAuto: Xh,
  config: te,
  dom: Jh,
  parse: Qh,
  library: xd,
  findIconDefinition: Cs,
  toHtml: wn
}, Zh = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = Oe
  } = e;
  (Object.keys(kt.styles).length > 0 || te.autoFetchSvg) && jt && te.autoReplaceSvg && at.dom.i2svg({
    node: t
  });
};
function Pa(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((r) => wn(r));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!jt) return;
      const r = Oe.createElement("div");
      return r.innerHTML = e.html, r.children;
    }
  }), e;
}
function ey(e) {
  let {
    children: t,
    main: r,
    mask: n,
    attributes: a,
    styles: o,
    transform: s
  } = e;
  if (yi(s) && r.found && !n.found) {
    const {
      width: i,
      height: u
    } = r, l = {
      x: i / u / 2,
      y: 0.5
    };
    a.style = Ca(Y(Y({}, o), {}, {
      "transform-origin": "".concat(l.x + s.x / 16, "em ").concat(l.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function ty(e) {
  let {
    prefix: t,
    iconName: r,
    children: n,
    attributes: a,
    symbol: o
  } = e;
  const s = o === !0 ? "".concat(t, "-").concat(te.cssPrefix, "-").concat(r) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: Y(Y({}, a), {}, {
        id: s
      }),
      children: n
    }]
  }];
}
function bi(e) {
  const {
    icons: {
      main: t,
      mask: r
    },
    prefix: n,
    iconName: a,
    transform: o,
    symbol: s,
    title: i,
    maskId: u,
    titleId: l,
    extra: c,
    watchable: d = !1
  } = e, {
    width: y,
    height: h
  } = r.found ? r : t, v = th.includes(n), m = [te.replacementClass, a ? "".concat(te.cssPrefix, "-").concat(a) : ""].filter((F) => c.classes.indexOf(F) === -1).filter((F) => F !== "" || !!F).concat(c.classes).join(" ");
  let f = {
    children: [],
    attributes: Y(Y({}, c.attributes), {}, {
      "data-prefix": n,
      "data-icon": a,
      class: m,
      role: c.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(h)
    })
  };
  const p = v && !~c.classes.indexOf("fa-fw") ? {
    width: "".concat(y / h * 16 * 0.0625, "em")
  } : {};
  d && (f.attributes[dr] = ""), i && (f.children.push({
    tag: "title",
    attributes: {
      id: f.attributes["aria-labelledby"] || "title-".concat(l || fn())
    },
    children: [i]
  }), delete f.attributes.title);
  const w = Y(Y({}, f), {}, {
    prefix: n,
    iconName: a,
    main: t,
    mask: r,
    maskId: u,
    transform: o,
    symbol: s,
    styles: Y(Y({}, p), c.styles)
  }), {
    children: O,
    attributes: A
  } = r.found && t.found ? Qt("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Qt("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = O, w.attributes = A, s ? ty(w) : ey(w);
}
function Pl(e) {
  const {
    content: t,
    width: r,
    height: n,
    transform: a,
    title: o,
    extra: s,
    watchable: i = !1
  } = e, u = Y(Y(Y({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  i && (u[dr] = "");
  const l = Y({}, s.styles);
  yi(a) && (l.transform = $h({
    transform: a,
    startCentered: !0,
    width: r,
    height: n
  }), l["-webkit-transform"] = l.transform);
  const c = Ca(l);
  c.length > 0 && (u.style = c);
  const d = [];
  return d.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), o && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), d;
}
function ry(e) {
  const {
    content: t,
    title: r,
    extra: n
  } = e, a = Y(Y(Y({}, n.attributes), r ? {
    title: r
  } : {}), {}, {
    class: n.classes.join(" ")
  }), o = Ca(n.styles);
  o.length > 0 && (a.style = o);
  const s = [];
  return s.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), r && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [r]
  }), s;
}
const {
  styles: ao
} = kt;
function Es(e) {
  const t = e[0], r = e[1], [n] = e.slice(4);
  let a = null;
  return Array.isArray(n) ? a = {
    tag: "g",
    attributes: {
      class: "".concat(te.cssPrefix, "-").concat(to.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(te.cssPrefix, "-").concat(to.SECONDARY),
        fill: "currentColor",
        d: n[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(te.cssPrefix, "-").concat(to.PRIMARY),
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
const ny = {
  found: !1,
  width: 512,
  height: 512
};
function ay(e, t) {
  !od && !te.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function As(e, t) {
  let r = t;
  return t === "fa" && te.styleDefault !== null && (t = Jt()), new Promise((n, a) => {
    if (r === "fa") {
      const o = wd(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && ao[t] && ao[t][e]) {
      const o = ao[t][e];
      return n(Es(o));
    }
    ay(e, t), n(Y(Y({}, ny), {}, {
      icon: te.showMissingIcons && e ? Qt("missingIconAbstract") || {} : {}
    }));
  });
}
const $l = () => {
}, Ps = te.measurePerformance && Ln && Ln.mark && Ln.measure ? Ln : {
  mark: $l,
  measure: $l
}, tn = 'FA "6.7.2"', oy = (e) => (Ps.mark("".concat(tn, " ").concat(e, " begins")), () => kd(e)), kd = (e) => {
  Ps.mark("".concat(tn, " ").concat(e, " ends")), Ps.measure("".concat(tn, " ").concat(e), "".concat(tn, " ").concat(e, " begins"), "".concat(tn, " ").concat(e, " ends"));
};
var wi = {
  begin: oy,
  end: kd
};
const Jn = () => {
};
function Tl(e) {
  return typeof (e.getAttribute ? e.getAttribute(dr) : null) == "string";
}
function sy(e) {
  const t = e.getAttribute ? e.getAttribute(fi) : null, r = e.getAttribute ? e.getAttribute(pi) : null;
  return t && r;
}
function iy(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(te.replacementClass);
}
function ly() {
  return te.autoReplaceSvg === !0 ? Qn.replace : Qn[te.autoReplaceSvg] || Qn.replace;
}
function uy(e) {
  return Oe.createElementNS("http://www.w3.org/2000/svg", e);
}
function cy(e) {
  return Oe.createElement(e);
}
function Od(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: r = e.tag === "svg" ? uy : cy
  } = t;
  if (typeof e == "string")
    return Oe.createTextNode(e);
  const n = r(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    n.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    n.appendChild(Od(o, {
      ceFn: r
    }));
  }), n;
}
function dy(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Qn = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((r) => {
        t.parentNode.insertBefore(Od(r), t);
      }), t.getAttribute(dr) === null && te.keepOriginalSource) {
        let r = Oe.createComment(dy(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], r = e[1];
    if (~hi(t).indexOf(te.replacementClass))
      return Qn.replace(e);
    const n = new RegExp("".concat(te.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      const o = r[0].attributes.class.split(" ").reduce((s, i) => (i === te.replacementClass || i.match(n) ? s.toSvg.push(i) : s.toNode.push(i), s), {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const a = r.map((o) => wn(o)).join(`
`);
    t.setAttribute(dr, ""), t.innerHTML = a;
  }
};
function Dl(e) {
  e();
}
function Cd(e, t) {
  const r = typeof t == "function" ? t : Jn;
  if (e.length === 0)
    r();
  else {
    let n = Dl;
    te.mutateApproach === mh && (n = Xt.requestAnimationFrame || Dl), n(() => {
      const a = ly(), o = wi.begin("mutate");
      e.map(a), o(), r();
    });
  }
}
let Si = !1;
function Ed() {
  Si = !0;
}
function $s() {
  Si = !1;
}
let ca = null;
function Rl(e) {
  if (!vl || !te.observeMutations)
    return;
  const {
    treeCallback: t = Jn,
    nodeCallback: r = Jn,
    pseudoElementsCallback: n = Jn,
    observeMutationsRoot: a = Oe
  } = e;
  ca = new vl((o) => {
    if (Si) return;
    const s = Jt();
    Ur(o).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !Tl(i.addedNodes[0]) && (te.searchPseudoElements && n(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && te.searchPseudoElements && n(i.target.parentNode), i.type === "attributes" && Tl(i.target) && ~wh.indexOf(i.attributeName))
        if (i.attributeName === "class" && sy(i.target)) {
          const {
            prefix: u,
            iconName: l
          } = Aa(hi(i.target));
          i.target.setAttribute(fi, u || s), l && i.target.setAttribute(pi, l);
        } else iy(i.target) && r(i.target);
    });
  }), jt && ca.observe(a, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function fy() {
  ca && ca.disconnect();
}
function py(e) {
  const t = e.getAttribute("style");
  let r = [];
  return t && (r = t.split(";").reduce((n, a) => {
    const o = a.split(":"), s = o[0], i = o.slice(1);
    return s && i.length > 0 && (n[s] = i.join(":").trim()), n;
  }, {})), r;
}
function my(e) {
  const t = e.getAttribute("data-prefix"), r = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "";
  let a = Aa(hi(e));
  return a.prefix || (a.prefix = Jt()), t && r && (a.prefix = t, a.iconName = r), a.iconName && a.prefix || (a.prefix && n.length > 0 && (a.iconName = Nh(a.prefix, e.innerText) || vi(a.prefix, xs(e.innerText))), !a.iconName && te.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function hy(e) {
  const t = Ur(e.attributes).reduce((a, o) => (a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a), {}), r = e.getAttribute("title"), n = e.getAttribute("data-fa-title-id");
  return te.autoA11y && (r ? t["aria-labelledby"] = "".concat(te.replacementClass, "-title-").concat(n || fn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function yy() {
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
function _l(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: r,
    prefix: n,
    rest: a
  } = my(e), o = hy(e), s = Os("parseNodeAttributes", {}, e);
  let i = t.styleParser ? py(e) : [];
  return Y({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: n,
    transform: xt,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: i,
      attributes: o
    }
  }, s);
}
const {
  styles: gy
} = kt;
function Ad(e) {
  const t = te.autoReplaceSvg === "nest" ? _l(e, {
    styleParser: !1
  }) : _l(e);
  return ~t.extra.classes.indexOf(id) ? Qt("generateLayersText", e, t) : Qt("generateSvgReplacementMutation", e, t);
}
function vy() {
  return [...Qm, ...ys];
}
function Fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jt) return Promise.resolve();
  const r = Oe.documentElement.classList, n = (c) => r.add("".concat(Sl, "-").concat(c)), a = (c) => r.remove("".concat(Sl, "-").concat(c)), o = te.autoFetchSvg ? vy() : ed.concat(Object.keys(gy));
  o.includes("fa") || o.push("fa");
  const s = [".".concat(id, ":not([").concat(dr, "])")].concat(o.map((c) => ".".concat(c, ":not([").concat(dr, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let i = [];
  try {
    i = Ur(e.querySelectorAll(s));
  } catch {
  }
  if (i.length > 0)
    n("pending"), a("complete");
  else
    return Promise.resolve();
  const u = wi.begin("onTree"), l = i.reduce((c, d) => {
    try {
      const y = Ad(d);
      y && c.push(y);
    } catch (y) {
      od || y.name === "MissingIcon" && console.error(y);
    }
    return c;
  }, []);
  return new Promise((c, d) => {
    Promise.all(l).then((y) => {
      Cd(y, () => {
        n("active"), n("complete"), a("pending"), typeof t == "function" && t(), u(), c();
      });
    }).catch((y) => {
      u(), d(y);
    });
  });
}
function by(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ad(e).then((r) => {
    r && Cd([r], t);
  });
}
function wy(e) {
  return function(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = (t || {}).icon ? t : Cs(t || {});
    let {
      mask: a
    } = r;
    return a && (a = (a || {}).icon ? a : Cs(a || {})), e(n, Y(Y({}, r), {}, {
      mask: a
    }));
  };
}
const Sy = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: r = xt,
    symbol: n = !1,
    mask: a = null,
    maskId: o = null,
    title: s = null,
    titleId: i = null,
    classes: u = [],
    attributes: l = {},
    styles: c = {}
  } = t;
  if (!e) return;
  const {
    prefix: d,
    iconName: y,
    icon: h
  } = e;
  return Pa(Y({
    type: "icon"
  }, e), () => (fr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), te.autoA11y && (s ? l["aria-labelledby"] = "".concat(te.replacementClass, "-title-").concat(i || fn()) : (l["aria-hidden"] = "true", l.focusable = "false")), bi({
    icons: {
      main: Es(h),
      mask: a ? Es(a.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: y,
    transform: Y(Y({}, xt), r),
    symbol: n,
    title: s,
    maskId: o,
    titleId: i,
    extra: {
      attributes: l,
      styles: c,
      classes: u
    }
  })));
};
var xy = {
  mixout() {
    return {
      icon: wy(Sy)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Fl, e.nodeCallback = by, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: r = Oe,
        callback: n = () => {
        }
      } = t;
      return Fl(r, n);
    }, e.generateSvgReplacementMutation = function(t, r) {
      const {
        iconName: n,
        title: a,
        titleId: o,
        prefix: s,
        transform: i,
        symbol: u,
        mask: l,
        maskId: c,
        extra: d
      } = r;
      return new Promise((y, h) => {
        Promise.all([As(n, s), l.iconName ? As(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((v) => {
          let [m, f] = v;
          y([t, bi({
            icons: {
              main: m,
              mask: f
            },
            prefix: s,
            iconName: n,
            transform: i,
            symbol: u,
            maskId: c,
            title: a,
            titleId: o,
            extra: d,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: r,
        attributes: n,
        main: a,
        transform: o,
        styles: s
      } = t;
      const i = Ca(s);
      i.length > 0 && (n.style = i);
      let u;
      return yi(o) && (u = Qt("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), r.push(u || a.icon), {
        children: r,
        attributes: n
      };
    };
  }
}, ky = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: r = []
        } = t;
        return Pa({
          type: "layer"
        }, () => {
          fr("beforeDOMElementCreation", {
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
              class: ["".concat(te.cssPrefix, "-layers"), ...r].join(" ")
            },
            children: n
          }];
        });
      }
    };
  }
}, Oy = {
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
        return Pa({
          type: "counter",
          content: e
        }, () => (fr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), ry({
          content: e.toString(),
          title: r,
          extra: {
            attributes: a,
            styles: o,
            classes: ["".concat(te.cssPrefix, "-layers-counter"), ...n]
          }
        })));
      }
    };
  }
}, Cy = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: r = xt,
          title: n = null,
          classes: a = [],
          attributes: o = {},
          styles: s = {}
        } = t;
        return Pa({
          type: "text",
          content: e
        }, () => (fr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Pl({
          content: e,
          transform: Y(Y({}, xt), r),
          title: n,
          extra: {
            attributes: o,
            styles: s,
            classes: ["".concat(te.cssPrefix, "-layers-text"), ...a]
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
      let s = null, i = null;
      if (Qc) {
        const u = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        s = l.width / u, i = l.height / u;
      }
      return te.autoA11y && !n && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, Pl({
        content: t.innerHTML,
        width: s,
        height: i,
        transform: a,
        title: n,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const Ey = new RegExp('"', "ug"), Il = [1105920, 1112319], Bl = Y(Y(Y(Y({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Ym), fh), oh), Ts = Object.keys(Bl).reduce((e, t) => (e[t.toLowerCase()] = Bl[t], e), {}), Ay = Object.keys(Ts).reduce((e, t) => {
  const r = Ts[t];
  return e[t] = r[900] || [...Object.entries(r)][0][1], e;
}, {});
function Py(e) {
  const t = e.replace(Ey, ""), r = Fh(t, 0), n = r >= Il[0] && r <= Il[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: xs(a ? t[0] : t),
    isSecondary: n || a
  };
}
function $y(e, t) {
  const r = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), a = isNaN(n) ? "normal" : n;
  return (Ts[r] || {})[a] || Ay[r];
}
function Ll(e, t) {
  const r = "".concat(ph).concat(t.replace(":", "-"));
  return new Promise((n, a) => {
    if (e.getAttribute(r) !== null)
      return n();
    const s = Ur(e.children).filter((y) => y.getAttribute(vs) === t)[0], i = Xt.getComputedStyle(e, t), u = i.getPropertyValue("font-family"), l = u.match(vh), c = i.getPropertyValue("font-weight"), d = i.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), n();
    if (l && d !== "none" && d !== "") {
      const y = i.getPropertyValue("content");
      let h = $y(u, c);
      const {
        value: v,
        isSecondary: m
      } = Py(y), f = l[0].startsWith("FontAwesome");
      let p = vi(h, v), w = p;
      if (f) {
        const O = jh(v);
        O.iconName && O.prefix && (p = O.iconName, h = O.prefix);
      }
      if (p && !m && (!s || s.getAttribute(fi) !== h || s.getAttribute(pi) !== w)) {
        e.setAttribute(r, w), s && e.removeChild(s);
        const O = yy(), {
          extra: A
        } = O;
        A.attributes[vs] = t, As(p, h).then((F) => {
          const H = bi(Y(Y({}, O), {}, {
            icons: {
              main: F,
              mask: Sd()
            },
            prefix: h,
            iconName: w,
            extra: A,
            watchable: !0
          })), C = Oe.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(C, e.firstChild) : e.appendChild(C), C.outerHTML = H.map((K) => wn(K)).join(`
`), e.removeAttribute(r), n();
        }).catch(a);
      } else
        n();
    } else
      n();
  });
}
function Ty(e) {
  return Promise.all([Ll(e, "::before"), Ll(e, "::after")]);
}
function Dy(e) {
  return e.parentNode !== document.head && !~hh.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(vs) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ml(e) {
  if (jt)
    return new Promise((t, r) => {
      const n = Ur(e.querySelectorAll("*")).filter(Dy).map(Ty), a = wi.begin("searchPseudoElements");
      Ed(), Promise.all(n).then(() => {
        a(), $s(), t();
      }).catch(() => {
        a(), $s(), r();
      });
    });
}
var Ry = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Ml, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: r = Oe
      } = t;
      te.searchPseudoElements && Ml(r);
    };
  }
};
let Nl = !1;
var _y = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Ed(), Nl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Rl(Os("mutationObserverCallbacks", {}));
      },
      noAuto() {
        fy();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Nl ? $s() : Rl(Os("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const jl = (e) => {
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
    let s = a.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, t);
};
var Fy = {
  mixout() {
    return {
      parse: {
        transform: (e) => jl(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-transform");
        return r && (e.transform = jl(r)), e;
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
      const s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, i = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), u = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), l = "rotate(".concat(n.rotate, " 0 0)"), c = {
        transform: "".concat(i, " ").concat(u, " ").concat(l)
      }, d = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, y = {
        outer: s,
        inner: c,
        path: d
      };
      return {
        tag: "g",
        attributes: Y({}, y.outer),
        children: [{
          tag: "g",
          attributes: Y({}, y.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: Y(Y({}, r.icon.attributes), y.path)
          }]
        }]
      };
    };
  }
};
const oo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ql(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Iy(e) {
  return e.tag === "g" ? e.children : [e];
}
var By = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-mask"), n = r ? Aa(r.split(" ").map((a) => a.trim())) : Sd();
        return n.prefix || (n.prefix = Jt()), e.mask = n, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        maskId: s,
        transform: i
      } = t;
      const {
        width: u,
        icon: l
      } = a, {
        width: c,
        icon: d
      } = o, y = Ph({
        transform: i,
        containerWidth: c,
        iconWidth: u
      }), h = {
        tag: "rect",
        attributes: Y(Y({}, oo), {}, {
          fill: "white"
        })
      }, v = l.children ? {
        children: l.children.map(ql)
      } : {}, m = {
        tag: "g",
        attributes: Y({}, y.inner),
        children: [ql(Y({
          tag: l.tag,
          attributes: Y(Y({}, l.attributes), y.path)
        }, v))]
      }, f = {
        tag: "g",
        attributes: Y({}, y.outer),
        children: [m]
      }, p = "mask-".concat(s || fn()), w = "clip-".concat(s || fn()), O = {
        tag: "mask",
        attributes: Y(Y({}, oo), {}, {
          id: p,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, f]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: Iy(d)
        }, O]
      };
      return r.push(A, {
        tag: "rect",
        attributes: Y({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(p, ")")
        }, oo)
      }), {
        children: r,
        attributes: n
      };
    };
  }
}, Ly = {
  provides(e) {
    let t = !1;
    Xt.matchMedia && (t = Xt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const r = [], n = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: Y(Y({}, n), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const o = Y(Y({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: Y(Y({}, n), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: Y(Y({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: Y(Y({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: Y(Y({}, n), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: Y(Y({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: Y(Y({}, n), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: Y(Y({}, o), {}, {
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
}, My = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const r = t.getAttribute("data-fa-symbol"), n = r === null ? !1 : r === "" ? !0 : r;
        return e.symbol = n, e;
      }
    };
  }
}, Ny = [Dh, xy, ky, Oy, Cy, Ry, _y, Fy, By, Ly, My];
Yh(Ny, {
  mixoutsTo: at
});
at.noAuto;
const Pd = at.config, $a = at.library;
at.dom;
const da = at.parse;
at.findIconDefinition;
at.toHtml;
const jy = at.icon;
at.layer;
const qy = at.text;
at.counter;
function Vl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vl(Object(r), !0).forEach(function(n) {
      Ke(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Vy(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zy(e) {
  var t = Vy(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fa(e) {
  "@babel/helpers - typeof";
  return fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fa(e);
}
function Ke(e, t, r) {
  return t = zy(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Uy(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Hy(e, t) {
  if (e == null) return {};
  var r = Uy(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      n = o[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ds(e) {
  return Wy(e) || Ky(e) || Gy(e) || Yy();
}
function Wy(e) {
  if (Array.isArray(e)) return Rs(e);
}
function Ky(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gy(e, t) {
  if (e) {
    if (typeof e == "string") return Rs(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rs(e, t);
  }
}
function Rs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Yy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Xy = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $d = { exports: {} };
(function(e) {
  (function(t) {
    var r = function(p, w, O) {
      if (!l(w) || d(w) || y(w) || h(w) || u(w))
        return w;
      var A, F = 0, H = 0;
      if (c(w))
        for (A = [], H = w.length; F < H; F++)
          A.push(r(p, w[F], O));
      else {
        A = {};
        for (var C in w)
          Object.prototype.hasOwnProperty.call(w, C) && (A[p(C, O)] = r(p, w[C], O));
      }
      return A;
    }, n = function(p, w) {
      w = w || {};
      var O = w.separator || "_", A = w.split || /(?=[A-Z])/;
      return p.split(A).join(O);
    }, a = function(p) {
      return v(p) ? p : (p = p.replace(/[\-_\s]+(.)?/g, function(w, O) {
        return O ? O.toUpperCase() : "";
      }), p.substr(0, 1).toLowerCase() + p.substr(1));
    }, o = function(p) {
      var w = a(p);
      return w.substr(0, 1).toUpperCase() + w.substr(1);
    }, s = function(p, w) {
      return n(p, w).toLowerCase();
    }, i = Object.prototype.toString, u = function(p) {
      return typeof p == "function";
    }, l = function(p) {
      return p === Object(p);
    }, c = function(p) {
      return i.call(p) == "[object Array]";
    }, d = function(p) {
      return i.call(p) == "[object Date]";
    }, y = function(p) {
      return i.call(p) == "[object RegExp]";
    }, h = function(p) {
      return i.call(p) == "[object Boolean]";
    }, v = function(p) {
      return p = p - 0, p === p;
    }, m = function(p, w) {
      var O = w && "process" in w ? w.process : w;
      return typeof O != "function" ? p : function(A, F) {
        return O(A, p, F);
      };
    }, f = {
      camelize: a,
      decamelize: s,
      pascalize: o,
      depascalize: s,
      camelizeKeys: function(p, w) {
        return r(m(a, w), p);
      },
      decamelizeKeys: function(p, w) {
        return r(m(s, w), p, w);
      },
      pascalizeKeys: function(p, w) {
        return r(m(o, w), p);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = f : t.humps = f;
  })(Xy);
})($d);
var Jy = $d.exports, Qy = ["class", "style"];
function Zy(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, r) {
    var n = r.indexOf(":"), a = Jy.camelize(r.slice(0, n)), o = r.slice(n + 1).trim();
    return t[a] = o, t;
  }, {});
}
function eg(e) {
  return e.split(/\s+/).reduce(function(t, r) {
    return t[r] = !0, t;
  }, {});
}
function xi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(u) {
    return xi(u);
  }), a = Object.keys(e.attributes || {}).reduce(function(u, l) {
    var c = e.attributes[l];
    switch (l) {
      case "class":
        u.class = eg(c);
        break;
      case "style":
        u.style = Zy(c);
        break;
      default:
        u.attrs[l] = c;
    }
    return u;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  r.class;
  var o = r.style, s = o === void 0 ? {} : o, i = Hy(r, Qy);
  return Ue(e.tag, ht(ht(ht({}, t), {}, {
    class: a.class,
    style: ht(ht({}, a.style), s)
  }, a.attrs), i), n);
}
var Td = !1;
try {
  Td = process.env.NODE_ENV === "production";
} catch {
}
function tg() {
  if (!Td && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ln(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ke({}, e, t) : {};
}
function rg(e) {
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
  }, Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(Ke(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), Ke(Ke(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(r).map(function(n) {
    return r[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function zl(e) {
  if (e && fa(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (da.icon)
    return da.icon(e);
  if (e === null)
    return null;
  if (fa(e) === "object" && e.prefix && e.iconName)
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
var _e = z({
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
    var n = r.attrs, a = T(function() {
      return zl(t.icon);
    }), o = T(function() {
      return ln("classes", rg(t));
    }), s = T(function() {
      return ln("transform", typeof t.transform == "string" ? da.transform(t.transform) : t.transform);
    }), i = T(function() {
      return ln("mask", zl(t.mask));
    }), u = T(function() {
      return jy(a.value, ht(ht(ht(ht({}, o.value), s.value), i.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    ne(u, function(c) {
      if (!c)
        return tg("Could not find one or more icon(s)", a.value, i.value);
    }, {
      immediate: !0
    });
    var l = T(function() {
      return u.value ? xi(u.value.abstract[0], {}, n) : null;
    });
    return function() {
      return l.value;
    };
  }
});
z({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, r) {
    var n = r.slots, a = Pd.familyPrefix, o = T(function() {
      return ["".concat(a, "-layers")].concat(Ds(t.fixedWidth ? ["".concat(a, "-fw")] : []));
    });
    return function() {
      return Ue("div", {
        class: o.value
      }, n.default ? n.default() : []);
    };
  }
});
z({
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
    var n = r.attrs, a = Pd.familyPrefix, o = T(function() {
      return ln("classes", [].concat(Ds(t.counter ? ["".concat(a, "-layers-counter")] : []), Ds(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])));
    }), s = T(function() {
      return ln("transform", typeof t.transform == "string" ? da.transform(t.transform) : t.transform);
    }), i = T(function() {
      var l = qy(t.value.toString(), ht(ht({}, s.value), o.value)), c = l.abstract;
      return t.counter && (c[0].attributes.class = c[0].attributes.class.replace("fa-layers-text", "")), c[0];
    }), u = T(function() {
      return xi(i.value, {}, n);
    });
    return function() {
      return u.value;
    };
  }
});
const ng = { class: "py-ui px-ui gap-ui-half flex flex-col rounded bg-white text-center dark:bg-gray-800" }, ag = { class: "whitespace-pre-line text-gray-600 dark:text-gray-300" }, og = /* @__PURE__ */ z({
  __name: "UnderConstruction",
  props: {
    full: { type: Boolean, default: !1 },
    info: { default: `Section under construction.
Please come back later.` }
  },
  setup(e) {
    return (t, r) => (S(), P("div", {
      class: Q(["bg-stripes p-ui flex w-full items-center justify-center", { grow: t.full }])
    }, [
      R("div", ng, [
        J(g(_e), {
          icon: g(Am),
          class: "text-primary text-4xl"
        }, null, 8, ["icon"]),
        r[0] || (r[0] = R("h1", { class: "text-2xl font-bold text-gray-900 dark:text-gray-100" }, "Under Construction", -1)),
        R("p", ag, Z(t.info), 1)
      ])
    ], 2));
  }
}), Dd = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, v4 = /* @__PURE__ */ Dd(og, [["__scopeId", "data-v-08544b23"]]), sg = { class: "flex items-center" }, ig = {
  key: 1,
  class: "mr-1"
}, lg = ["id", "value", "disabled", "required", "name"], ug = {
  key: 3,
  class: "ml-1"
}, cg = /* @__PURE__ */ z({
  __name: "Checkbox",
  props: /* @__PURE__ */ gt({
    checked: { type: [Boolean, Array], default: !1 },
    value: { default: null },
    customClass: { default: "" },
    id: { default: "" },
    form: { default: void 0 },
    field: { default: void 0 },
    label: { default: void 0 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    noLabel: { type: Boolean, default: !1 },
    tooltip: { default: void 0 },
    modelValue: { type: [Boolean, Array], default: void 0 },
    name: { default: void 0 },
    sublabel: { default: void 0 },
    leftDescription: { type: [String, Boolean], default: !1 },
    rightDescription: { type: [String, Boolean], default: "Enable" },
    labelCustomClass: { default: "" },
    error: { default: void 0 }
  }, {
    modelValue: { type: [Boolean, Array] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ gt(["update:checked", "update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = r, a = e;
    function o(f) {
      return f.split("_").join(" ").split(" ").map((p) => p[0].toUpperCase() + p.slice(1)).join(" ");
    }
    const s = zr(e, "modelValue"), i = N(!1), u = N(), l = N(), c = N(!1);
    ye(() => {
      var f;
      i.value = !a.form, u.value = i.value ? s.value : ((f = a.form) == null ? void 0 : f[a.field]) ?? a.checked;
    }), ne(
      () => u.value,
      (f, p) => {
        if (f !== p) {
          if (i.value ? s.value = f : a.form && a.field && (a.form[a.field] = f), l.value = p, n("update:modelValue", f), n("update:checked", f), c.value) {
            c.value = !1;
            return;
          }
          n("changed", { value: f, old_value: p });
        }
      }
    ), ne(
      () => a.field && a.form ? a.form[a.field] : null,
      (f) => {
        u.value = i.value ? s.value : f;
      },
      { deep: !0 }
    ), ne(
      () => s.value,
      (f) => {
        u.value = f;
      }
    ), ne(
      () => a.checked,
      (f) => {
        !a.form && !s.value && (u.value = f);
      }
    );
    const d = T(() => a.label || (a.field ? o(a.field) : "")), y = T(() => {
      var f, p;
      return a.error || ((p = (f = a.form) == null ? void 0 : f.errors) == null ? void 0 : p[a.field]);
    }), h = T(() => a.id || a.field || `checkbox-${Math.random().toString(36).substr(2, 9)}`);
    return t({
      setValueSilently: (f) => {
        u.value = f, c.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, p) => {
      var w, O;
      return S(), P("div", {
        class: Q(f.noLabel ? "mb-2" : "mb-4")
      }, [
        !f.noLabel && f.label ? (S(), U(g(Hr), {
          key: 0,
          customClass: f.labelCustomClass,
          for: h.value,
          value: d.value,
          sublabel: f.sublabel,
          required: f.required,
          tooltip: f.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : X("", !0),
        R("label", sg, [
          (w = f.$slots) != null && w.leftDescription ? V(f.$slots, "leftDescription", { key: 0 }) : f.leftDescription ? (S(), P("span", ig, Z(f.leftDescription === !0 ? "Disable" : f.leftDescription), 1)) : X("", !0),
          tt(R("input", {
            type: "checkbox",
            id: h.value,
            value: u.value,
            "onUpdate:modelValue": p[0] || (p[0] = (A) => u.value = A),
            disabled: f.disabled,
            required: f.required,
            name: f.name || f.field,
            class: Q(["text-accent-600 focus:ring-accent-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-accent-500 dark:focus:ring-offset-gray-800 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50", { [f.customClass]: f.customClass }])
          }, null, 10, lg), [
            [sm, u.value]
          ]),
          (O = f.$slots) != null && O.rightDescription ? V(f.$slots, "rightDescription", { key: 2 }) : f.rightDescription ? (S(), P("span", ug, Z(f.rightDescription === !0 ? "Enable" : f.rightDescription), 1)) : X("", !0)
        ]),
        y.value ? (S(), U(g(rr), {
          key: 1,
          message: y.value,
          class: "mt-2"
        }, null, 8, ["message"])) : X("", !0)
      ], 2);
    };
  }
}), Nn = /* @__PURE__ */ z({
  __name: "InputWrapper",
  props: {
    computedLabel: {},
    hasFormErrors: { type: Boolean },
    formError: {},
    field: {},
    label: {},
    noLabel: { type: Boolean, default: !1 },
    sublabel: {},
    tooltip: {},
    required: { type: Boolean, default: !1 },
    labelCustomClass: { default: "" }
  },
  setup(e) {
    return (t, r) => (S(), P("div", {
      class: Q(t.noLabel ? "mb-2" : "mb-4")
    }, [
      t.noLabel ? X("", !0) : (S(), U(g(Hr), {
        key: 0,
        customClass: t.labelCustomClass,
        for: t.field,
        value: t.computedLabel,
        sublabel: t.sublabel,
        required: t.required,
        tooltip: t.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
      V(t.$slots, "default"),
      t.hasFormErrors ? (S(), U(g(rr), {
        key: 1,
        message: t.formError,
        class: "mt-2"
      }, null, 8, ["message"])) : X("", !0)
    ], 2));
  }
}), dg = /* @__PURE__ */ z({
  __name: "BaseInput",
  props: {
    type: { default: "text" },
    modelValue: {},
    computedName: {},
    computedAutocomplete: {},
    field: {},
    name: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {},
    autofocus: { type: Boolean, default: !1 },
    pattern: {},
    min: {},
    max: {},
    step: {},
    autocomplete: {},
    inputCustomClass: { default: "" },
    noNumberSpinners: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = T({
      get: () => r.modelValue,
      set: (o) => n("update:modelValue", o)
    });
    return (o, s) => (S(), U(g(ki), {
      id: o.field,
      type: o.type,
      class: Q({ [o.inputCustomClass]: !!o.inputCustomClass }),
      modelValue: a.value,
      "onUpdate:modelValue": s[0] || (s[0] = (i) => a.value = i),
      required: o.required,
      disabled: o.disabled,
      autocomplete: o.computedAutocomplete,
      min: o.min,
      max: o.max,
      step: o.step,
      placeholder: o.placeholder,
      autofocus: o.autofocus,
      pattern: o.pattern,
      name: o.computedName,
      "no-number-spinners": o.noNumberSpinners
    }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name", "no-number-spinners"]));
  }
}), fg = ["id", "required", "disabled", "name"], pg = /* @__PURE__ */ z({
  __name: "SelectInput",
  props: {
    modelValue: {},
    computedName: {},
    field: {},
    name: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    inputCustomClass: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = T({
      get: () => r.modelValue,
      set: (o) => n("update:modelValue", o)
    });
    return (o, s) => tt((S(), P("select", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => a.value = i),
      id: o.field,
      required: o.required,
      disabled: o.disabled,
      name: o.computedName,
      class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [o.inputCustomClass]: !!o.inputCustomClass }])
    }, [
      V(o.$slots, "default")
    ], 10, fg)), [
      [Lc, a.value]
    ]);
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const mg = {
  prefix: "far",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"]
}, hg = {
  prefix: "far",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]
}, yg = { class: "relative flex w-full" }, gg = /* @__PURE__ */ z({
  __name: "PasswordInput",
  props: {
    modelValue: {},
    computedName: {},
    computedAutocomplete: {},
    displayType: { default: "password" },
    field: {},
    name: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {},
    autofocus: { type: Boolean, default: !1 },
    pattern: {},
    autocomplete: {},
    hidePasswordToggler: { type: Boolean, default: !1 },
    inputCustomClass: { default: "" }
  },
  emits: ["update:modelValue", "toggle-password"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = T({
      get: () => r.modelValue,
      set: (i) => n("update:modelValue", i)
    }), o = T(() => !r.hidePasswordToggler), s = () => {
      n("toggle-password");
    };
    return (i, u) => (S(), P("div", yg, [
      J(g(ki), {
        id: i.field,
        type: i.displayType,
        class: Q({ [i.inputCustomClass]: !!i.inputCustomClass }),
        modelValue: a.value,
        "onUpdate:modelValue": u[0] || (u[0] = (l) => a.value = l),
        required: i.required,
        disabled: i.disabled,
        autocomplete: i.computedAutocomplete,
        placeholder: i.placeholder,
        autofocus: i.autofocus,
        pattern: i.pattern,
        name: i.computedName
      }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "placeholder", "autofocus", "pattern", "name"]),
      o.value ? (S(), P("div", {
        key: 0,
        onClick: s,
        class: Q(["absolute top-1/2 -translate-y-1/2 right-1 z-2 flex size-8 rounded-lg hover:bg-primary-100 cursor-pointer items-center justify-center transition-all text-sm leading-normal text-gray-600 dark:text-gray-400", { "bg-primary-50": i.displayType !== "password" }])
      }, [
        J(g(_e), {
          icon: i.displayType === "password" ? g(hg) : g(mg)
        }, null, 8, ["icon"])
      ], 2)) : X("", !0)
    ]));
  }
}), vg = { class: "relative flex w-full max-w-full items-stretch" }, bg = ["href"], wg = /* @__PURE__ */ z({
  __name: "InputWithActions",
  props: {
    type: { default: "text" },
    modelValue: {},
    computedName: {},
    computedAutocomplete: {},
    form: {},
    field: {},
    name: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {},
    autofocus: { type: Boolean, default: !1 },
    pattern: {},
    min: {},
    max: {},
    step: {},
    autocomplete: {},
    inputCustomClass: { default: "" },
    buttonCustomClass: { default: "" },
    addon: {},
    submitBtn: {},
    whatsApp: {},
    noNumberSpinners: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = T({
      get: () => r.modelValue,
      set: (s) => n("update:modelValue", s)
    }), o = T(() => ({
      "rounded-l-none shadow-none": r.addon,
      "rounded-r-none": r.submitBtn || r.whatsApp,
      [r.inputCustomClass]: !!r.inputCustomClass
    }));
    return (s, i) => {
      var u;
      return S(), P("div", vg, [
        s.addon ? (S(), P("span", {
          key: 0,
          class: Q(["flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500 dark:text-gray-400", { shadow: !s.disabled }])
        }, Z(s.addon), 3)) : X("", !0),
        J(g(ki), {
          id: s.field,
          type: s.type,
          class: Q(o.value),
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (l) => a.value = l),
          required: s.required,
          disabled: s.disabled,
          autocomplete: s.computedAutocomplete,
          min: s.min,
          max: s.max,
          step: s.step,
          placeholder: s.placeholder,
          autofocus: s.autofocus,
          pattern: s.pattern,
          name: s.computedName,
          "no-number-spinners": s.noNumberSpinners
        }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name", "no-number-spinners"]),
        s.form ? (S(), P(oe, { key: 1 }, [
          s.submitBtn ? (S(), U(g(Sa), {
            key: 0,
            form: s.form,
            class: Q(["z-2 inline-block rounded-l-none", s.buttonCustomClass]),
            id: `submit-button-${s.field}`
          }, {
            default: I(() => [
              fe(Z(s.submitBtn), 1)
            ]),
            _: 1
          }, 8, ["form", "class", "id"])) : X("", !0),
          (u = s.$slots) != null && u.submit ? (S(), U(g(Sa), {
            key: 1,
            form: s.form,
            class: Q(["z-2 inline-block rounded-l-none", s.buttonCustomClass]),
            id: "button-input"
          }, {
            default: I(() => [
              V(s.$slots, "submit")
            ]),
            _: 3
          }, 8, ["form", "class"])) : X("", !0)
        ], 64)) : X("", !0),
        s.whatsApp ? (S(), P("a", {
          key: 2,
          class: Q(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", s.buttonCustomClass]),
          href: s.whatsApp,
          target: "_blank"
        }, [
          J(g(_e), {
            icon: "fab fa-whatsapp",
            size: "2xl"
          })
        ], 10, bg)) : X("", !0)
      ]);
    };
  }
});
function Sg(e, t, r, n) {
  const a = N(), o = N(), s = N(!1), i = N(!1);
  return ye(() => {
    s.value = !t, a.value = s.value ? r.value : t && e ? t[e] : null;
  }), ne(
    () => a.value,
    (c, d) => {
      if (c === d) return;
      if (s.value ? r.value = c : t && e && (t[e] = c), o.value = d, n("update:modelValue", c), i.value) {
        i.value = !1;
        return;
      }
      n("changed", {
        value: c,
        old_value: d
      });
    }
  ), ne(
    () => e && t ? t[e] : null,
    (c) => {
      a.value = s.value ? r.value : c;
    },
    { deep: !0 }
  ), ne(
    () => r.value,
    (c) => {
      a.value = c;
    }
  ), {
    value: a,
    prevValue: o,
    noForm: s,
    setValueSilently: (c) => {
      i.value = !0, a.value = c;
    },
    getPreviousValue: () => o.value
  };
}
function xg(e = "password") {
  const t = N(e);
  return {
    displayType: t,
    togglePassword: () => {
      t.value = t.value === "password" ? "text" : "password";
    }
  };
}
function kg(e, t, r) {
  const n = T(() => !!(r || e != null && e.errors && t && e.errors[t])), a = T(() => r || (e != null && e.errors && t && e.errors[t] ? e.errors[t] : null));
  return {
    hasFormErrors: n,
    formError: a,
    updateFormValue: (s) => {
      e && t && (e[t] = s);
    }
  };
}
function Og() {
  const e = (i) => i ? i.split("_").join(" ").split(" ").map((u) => u.charAt(0).toUpperCase() + u.slice(1)).join(" ") : "";
  return {
    ucwords: e,
    getComputedLabel: (i, u) => T(() => i || (u ? e(u) : "")),
    getComputedName: (i, u) => T(() => i ?? u ?? ""),
    getComputedAutocomplete: (i, u) => T(() => i ?? u ?? ""),
    isDelegatedType: (i) => ["textarea", "switch", "checkbox"].includes(i || ""),
    isPasswordType: (i) => i === "password",
    isSelectType: (i) => i === "select"
  };
}
const Cg = /* @__PURE__ */ z({
  __name: "Input",
  props: /* @__PURE__ */ gt({
    min: {},
    max: {},
    step: {},
    noNumberSpinners: { type: Boolean, default: !1 },
    rows: { default: 3 },
    addon: {},
    inputCustomClass: { default: "" },
    checkboxCustomClass: { default: "" },
    buttonCustomClass: { default: "" },
    labelCustomClass: { default: "" },
    submitBtn: {},
    whatsApp: {},
    hidePasswordToggler: { type: Boolean, default: !1 },
    leftDescription: { type: [String, Boolean], default: !1 },
    rightDescription: { type: [String, Boolean], default: "Enable" },
    switchDescription: {},
    pattern: {},
    inputmode: { default: null },
    type: { default: "text" },
    field: {},
    label: {},
    name: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {},
    autofocus: { type: Boolean, default: !1 },
    autocomplete: { default: null },
    noLabel: { type: Boolean, default: !1 },
    sublabel: {},
    tooltip: {},
    error: {},
    form: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ gt(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r, o = zr(e, "modelValue"), { getComputedLabel: s, getComputedName: i, getComputedAutocomplete: u, isPasswordType: l, isSelectType: c } = Og(), { value: d, setValueSilently: y, getPreviousValue: h } = Sg(n.field, n.form, o, a), { displayType: v, togglePassword: m } = xg(n.type), { hasFormErrors: f, formError: p } = kg(n.form, n.field, n.error), w = s(n.label, n.field), O = i(n.name, n.field), A = u(n.autocomplete, n.field), F = T(() => n.addon || n.submitBtn || n.whatsApp), H = T(() => n.type === "textarea" ? "textarea" : n.type === "switch" ? "switch" : n.type === "checkbox" ? "checkbox" : n.type === "select" ? "select" : l(n.type) ? "password" : F.value ? "with-actions" : "base");
    return t({
      togglePassword: m,
      setValueSilently: y,
      getPreviousValue: h
    }), (C, K) => {
      var M, $, q, b, E;
      return H.value === "textarea" ? (S(), U(g(Ig), {
        key: 0,
        form: C.form,
        field: C.field,
        label: C.label,
        required: C.required,
        disabled: C.disabled,
        addon: C.addon,
        placeholder: C.placeholder,
        "no-label": C.noLabel,
        autofocus: C.autofocus,
        rows: C.rows,
        name: g(O),
        sublabel: C.sublabel,
        "submit-btn": C.submitBtn,
        "whats-app": C.whatsApp,
        autocomplete: g(A),
        tooltip: C.tooltip,
        "custom-class": C.inputCustomClass,
        "label-custom-class": C.labelCustomClass,
        "button-custom-class": C.buttonCustomClass,
        error: C.error,
        inputmode: C.inputmode,
        modelValue: g(d),
        "onUpdate:modelValue": K[0] || (K[0] = (k) => Wt(d) ? d.value = k : null),
        onChanged: K[1] || (K[1] = (k) => a("changed", k))
      }, Bn({ _: 2 }, [
        (M = C.$slots) != null && M.submit ? {
          name: "submit",
          fn: I(() => [
            V(C.$slots, "submit")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "addon", "placeholder", "no-label", "autofocus", "rows", "name", "sublabel", "submit-btn", "whats-app", "autocomplete", "tooltip", "custom-class", "label-custom-class", "button-custom-class", "error", "inputmode", "modelValue"])) : H.value === "switch" ? (S(), U(g(zb), {
        key: 1,
        form: C.form,
        field: C.field,
        label: C.label,
        required: C.required,
        disabled: C.disabled,
        "no-label": C.noLabel,
        name: g(O),
        sublabel: C.sublabel,
        tooltip: C.tooltip,
        "left-description": C.leftDescription,
        "right-description": C.rightDescription,
        "custom-class": C.inputCustomClass,
        "label-custom-class": C.labelCustomClass,
        error: C.error,
        inputmode: C.inputmode,
        modelValue: g(d),
        "onUpdate:modelValue": K[2] || (K[2] = (k) => Wt(d) ? d.value = k : null),
        onChanged: K[3] || (K[3] = (k) => a("changed", k))
      }, Bn({ _: 2 }, [
        ($ = C.$slots) != null && $.leftDescription ? {
          name: "leftDescription",
          fn: I(() => [
            V(C.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (q = C.$slots) != null && q.rightDescription ? {
          name: "rightDescription",
          fn: I(() => [
            V(C.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "inputmode", "modelValue"])) : H.value === "checkbox" ? (S(), U(g(cg), {
        key: 2,
        form: C.form,
        field: C.field,
        label: C.label,
        required: C.required,
        disabled: C.disabled,
        "no-label": C.noLabel,
        name: g(O),
        sublabel: C.sublabel,
        tooltip: C.tooltip,
        "left-description": C.leftDescription,
        "right-description": C.rightDescription,
        "custom-class": C.inputCustomClass,
        "label-custom-class": C.labelCustomClass,
        error: C.error,
        inputmode: C.inputmode,
        modelValue: g(d),
        "onUpdate:modelValue": K[4] || (K[4] = (k) => Wt(d) ? d.value = k : null),
        onChanged: K[5] || (K[5] = (k) => a("changed", k))
      }, Bn({ _: 2 }, [
        (b = C.$slots) != null && b.leftDescription ? {
          name: "leftDescription",
          fn: I(() => [
            V(C.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (E = C.$slots) != null && E.rightDescription ? {
          name: "rightDescription",
          fn: I(() => [
            V(C.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "inputmode", "modelValue"])) : H.value === "select" ? (S(), U(g(Nn), {
        key: 3,
        field: C.field,
        label: C.label,
        "no-label": C.noLabel,
        sublabel: C.sublabel,
        tooltip: C.tooltip,
        required: C.required,
        "label-custom-class": C.labelCustomClass,
        "computed-label": g(w),
        "has-form-errors": g(f),
        "form-error": g(p)
      }, {
        default: I(() => [
          J(g(pg), {
            field: C.field,
            name: C.name,
            required: C.required,
            disabled: C.disabled,
            "input-custom-class": C.inputCustomClass,
            "computed-name": g(O),
            modelValue: g(d),
            "onUpdate:modelValue": K[6] || (K[6] = (k) => Wt(d) ? d.value = k : null)
          }, {
            default: I(() => [
              V(C.$slots, "default")
            ]),
            _: 3
          }, 8, ["field", "name", "required", "disabled", "input-custom-class", "computed-name", "modelValue"])
        ]),
        _: 3
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : H.value === "password" ? (S(), U(g(Nn), {
        key: 4,
        field: C.field,
        label: C.label,
        "no-label": C.noLabel,
        sublabel: C.sublabel,
        tooltip: C.tooltip,
        required: C.required,
        "label-custom-class": C.labelCustomClass,
        "computed-label": g(w),
        "has-form-errors": g(f),
        "form-error": g(p)
      }, {
        default: I(() => [
          J(g(gg), {
            field: C.field,
            name: C.name,
            required: C.required,
            disabled: C.disabled,
            placeholder: C.placeholder,
            autofocus: C.autofocus,
            pattern: C.pattern,
            autocomplete: C.autocomplete,
            "hide-password-toggler": C.hidePasswordToggler,
            "input-custom-class": C.inputCustomClass,
            "computed-name": g(O),
            "computed-autocomplete": g(A),
            "display-type": g(v),
            inputmode: C.inputmode,
            modelValue: g(d),
            "onUpdate:modelValue": K[7] || (K[7] = (k) => Wt(d) ? d.value = k : null),
            onTogglePassword: g(m)
          }, null, 8, ["field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "autocomplete", "hide-password-toggler", "input-custom-class", "computed-name", "computed-autocomplete", "display-type", "inputmode", "modelValue", "onTogglePassword"])
        ]),
        _: 1
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : H.value === "with-actions" ? (S(), U(g(Nn), {
        key: 5,
        field: C.field,
        label: C.label,
        "no-label": C.noLabel,
        sublabel: C.sublabel,
        tooltip: C.tooltip,
        required: C.required,
        "label-custom-class": C.labelCustomClass,
        "computed-label": g(w),
        "has-form-errors": g(f),
        "form-error": g(p)
      }, {
        default: I(() => {
          var k;
          return [
            J(g(wg), {
              type: C.type,
              field: C.field,
              name: C.name,
              required: C.required,
              disabled: C.disabled,
              placeholder: C.placeholder,
              autofocus: C.autofocus,
              pattern: C.pattern,
              min: C.min,
              max: C.max,
              step: C.step,
              autocomplete: C.autocomplete,
              "input-custom-class": C.inputCustomClass,
              "button-custom-class": C.buttonCustomClass,
              addon: C.addon,
              "submit-btn": C.submitBtn,
              "whats-app": C.whatsApp,
              "computed-name": g(O),
              "computed-autocomplete": g(A),
              inputmode: C.inputmode,
              form: C.form,
              "no-number-spinners": C.noNumberSpinners,
              modelValue: g(d),
              "onUpdate:modelValue": K[8] || (K[8] = (x) => Wt(d) ? d.value = x : null)
            }, Bn({ _: 2 }, [
              (k = C.$slots) != null && k.submit ? {
                name: "submit",
                fn: I(() => [
                  V(C.$slots, "submit")
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["type", "field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "min", "max", "step", "autocomplete", "input-custom-class", "button-custom-class", "addon", "submit-btn", "whats-app", "computed-name", "computed-autocomplete", "inputmode", "form", "no-number-spinners", "modelValue"])
          ];
        }),
        _: 3
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : (S(), U(g(Nn), {
        key: 6,
        field: C.field,
        label: C.label,
        "no-label": C.noLabel,
        sublabel: C.sublabel,
        tooltip: C.tooltip,
        required: C.required,
        "label-custom-class": C.labelCustomClass,
        "computed-label": g(w),
        "has-form-errors": g(f),
        "form-error": g(p)
      }, {
        default: I(() => [
          J(g(dg), {
            type: C.type,
            field: C.field,
            name: C.name,
            required: C.required,
            disabled: C.disabled,
            placeholder: C.placeholder,
            autofocus: C.autofocus,
            pattern: C.pattern,
            min: C.min,
            max: C.max,
            step: C.step,
            autocomplete: C.autocomplete,
            "input-custom-class": C.inputCustomClass,
            "computed-name": g(O),
            "computed-autocomplete": g(A),
            inputmode: C.inputmode,
            "no-number-spinners": C.noNumberSpinners,
            modelValue: g(d),
            "onUpdate:modelValue": K[9] || (K[9] = (k) => Wt(d) ? d.value = k : null)
          }, null, 8, ["type", "field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "min", "max", "step", "autocomplete", "input-custom-class", "computed-name", "computed-autocomplete", "inputmode", "no-number-spinners", "modelValue"])
        ]),
        _: 1
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"]));
    };
  }
}), Eg = { class: "text-sm text-red-600 dark:text-red-400" }, rr = /* @__PURE__ */ z({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(e) {
    return (t, r) => tt((S(), P("div", null, [
      R("p", Eg, Z(t.message), 1)
    ], 512)), [
      [lr, t.message]
    ]);
  }
}), Ag = { key: 0 }, Pg = { key: 1 }, $g = {
  key: 3,
  class: "ml-2 text-xs text-gray-500 dark:text-gray-400"
}, Tg = {
  key: 4,
  class: "ml-1 text-red-500 dark:text-red-400"
}, Hr = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass", "tooltip"],
  setup(e) {
    return $a.add(ml), (t, r) => (S(), P("label", {
      class: Q(["mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200", e.customClass])
    }, [
      e.value ? (S(), P("span", Ag, Z(e.value), 1)) : (S(), P("span", Pg, [
        V(t.$slots, "default")
      ])),
      e.tooltip ? (S(), U(g($O), {
        key: 2,
        content: e.tooltip,
        class: "ml-1 inline-block"
      }, {
        default: I(() => [
          J(g(_e), {
            icon: g(ml),
            class: "mx-1 cursor-help"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["content"])) : X("", !0),
      e.sublabel ? (S(), P("span", $g, Z(e.sublabel), 1)) : X("", !0),
      e.required ? (S(), P("span", Tg, "*")) : X("", !0)
    ], 2));
  }
}, Dg = ["value", "inputmode"], ki = /* @__PURE__ */ z({
  __name: "TextInput",
  props: {
    modelValue: {},
    inputmode: {},
    noNumberSpinners: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: r }) {
    const n = r, a = N(null), o = (s) => {
      const i = s.target;
      n("update:modelValue", i.value);
    };
    return ye(() => {
      var s;
      (s = a.value) != null && s.hasAttribute("autofocus") && a.value.focus();
    }), t({
      /** Focus the input element */
      focus: () => {
        var s;
        return (s = a.value) == null ? void 0 : s.focus();
      }
    }), (s, i) => (S(), P("input", {
      class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 relative m-0 block w-full flex-auto rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500", { "no-spinners": s.noNumberSpinners }]),
      value: s.modelValue,
      inputmode: s.inputmode,
      onInput: o,
      ref_key: "input",
      ref: a
    }, null, 42, Dg));
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Rd = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, Rg = { class: "relative flex w-full max-w-full items-stretch" }, _g = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], Fg = ["href"], Ig = /* @__PURE__ */ z({
  __name: "Textarea",
  props: /* @__PURE__ */ gt({
    field: {},
    label: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    form: {},
    addon: {},
    placeholder: {},
    noLabel: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    modelValue: {},
    rows: { default: 3 },
    name: {},
    sublabel: {},
    submitBtn: {},
    whatsApp: {},
    autocomplete: {},
    tooltip: {},
    customClass: { default: "" },
    labelCustomClass: { default: "" },
    buttonCustomClass: { default: "" },
    error: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ gt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r;
    function o(m) {
      return m.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = N(!1), i = zr(e, "modelValue"), u = N(), l = N(), c = N(!1);
    ye(() => {
      var m;
      s.value = !n.form, u.value = s.value ? i.value : (m = n.form) == null ? void 0 : m[n.field];
    }), ne(
      () => u.value,
      (m, f) => {
        if (m !== f) {
          if (s.value ? i.value = m : n.form && n.field && (n.form[n.field] = m), l.value = f, a("update:modelValue", m), c.value) {
            c.value = !1;
            return;
          }
          a("changed", { value: m, old_value: f });
        }
      }
    ), ne(
      () => n.field && n.form ? n.form[n.field] : null,
      (m) => {
        u.value = s.value ? i.value : m;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (m) => {
        u.value = m;
      }
    );
    const d = T(() => n.label || (n.field ? o(n.field) : "")), y = T(() => {
      var m, f;
      return n.error || ((f = (m = n.form) == null ? void 0 : m.errors) == null ? void 0 : f[n.field]);
    });
    return t({
      setValueSilently: (m) => {
        u.value = m, c.value = !0;
      },
      getPreviousValue: () => l.value
    }), (m, f) => (S(), U(g(li), {
      field: m.field,
      label: d.value,
      sublabel: m.sublabel,
      tooltip: m.tooltip,
      required: m.required,
      noLabel: m.noLabel,
      labelCustomClass: m.labelCustomClass,
      form: m.form,
      error: y.value,
      htmlFor: m.field
    }, {
      default: I(() => {
        var p, w;
        return [
          R("div", Rg, [
            m.addon ? (S(), P("span", {
              key: 0,
              class: Q(["border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-900/40 dark:text-gray-400", { shadow: !m.disabled }])
            }, Z(m.addon), 3)) : X("", !0),
            tt(R("textarea", {
              id: m.field,
              class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500", {
                "rounded-l-none shadow-none": m.addon,
                "rounded-r-none": !!m.submitBtn || m.whatsApp || ((p = m.$slots) == null ? void 0 : p.submit),
                [m.customClass]: !!m.customClass
              }]),
              rows: m.rows,
              "onUpdate:modelValue": f[0] || (f[0] = (O) => u.value = O),
              required: m.required,
              disabled: m.disabled,
              autocomplete: m.autocomplete || m.field,
              placeholder: m.placeholder,
              autofocus: m.autofocus,
              name: m.name || m.field
            }, null, 10, _g), [
              [Mc, u.value]
            ]),
            m.form ? (S(), P(oe, { key: 1 }, [
              m.submitBtn ? (S(), U(g(Sa), {
                key: 0,
                form: m.form,
                class: Q(["z-2 inline-block rounded-l-none", m.buttonCustomClass]),
                id: `submit-button-${m.field}`
              }, {
                default: I(() => [
                  fe(Z(m.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : X("", !0),
              (w = m.$slots) != null && w.submit ? (S(), U(g(Sa), {
                key: 1,
                form: m.form,
                class: Q(["z-2 inline-block rounded-l-none", m.buttonCustomClass]),
                id: "button-textarea"
              }, {
                default: I(() => [
                  V(m.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : X("", !0)
            ], 64)) : X("", !0),
            m.whatsApp ? (S(), P("a", {
              key: 2,
              class: Q(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", m.buttonCustomClass]),
              href: m.whatsApp,
              target: "_blank"
            }, [
              J(g(_e), {
                icon: g(Rd),
                size: "2xl"
              }, null, 8, ["icon"])
            ], 10, Fg)) : X("", !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Bg = ["top", "right", "bottom", "left"], Zt = Math.min, et = Math.max, pa = Math.round, jn = Math.floor, Et = (e) => ({
  x: e,
  y: e
}), Lg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Mg = {
  start: "end",
  end: "start"
};
function _s(e, t, r) {
  return et(e, Zt(t, r));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function Wr(e) {
  return e.split("-")[1];
}
function Oi(e) {
  return e === "x" ? "y" : "x";
}
function Ci(e) {
  return e === "y" ? "height" : "width";
}
function Ft(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function Ei(e) {
  return Oi(Ft(e));
}
function Ng(e, t, r) {
  r === void 0 && (r = !1);
  const n = Wr(e), a = Ei(e), o = Ci(a);
  let s = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = ma(s)), [s, ma(s)];
}
function jg(e) {
  const t = ma(e);
  return [Fs(e), t, Fs(t)];
}
function Fs(e) {
  return e.replace(/start|end/g, (t) => Mg[t]);
}
function qg(e, t, r) {
  const n = ["left", "right"], a = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? a : n : t ? n : a;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function Vg(e, t, r, n) {
  const a = Wr(e);
  let o = qg(Mt(e), r === "start", n);
  return a && (o = o.map((s) => s + "-" + a), t && (o = o.concat(o.map(Fs)))), o;
}
function ma(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Lg[t]);
}
function zg(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function _d(e) {
  return typeof e != "number" ? zg(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ha(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: a
  } = e;
  return {
    width: n,
    height: a,
    top: r,
    left: t,
    right: t + n,
    bottom: r + a,
    x: t,
    y: r
  };
}
function Ul(e, t, r) {
  let {
    reference: n,
    floating: a
  } = e;
  const o = Ft(t), s = Ei(t), i = Ci(s), u = Mt(t), l = o === "y", c = n.x + n.width / 2 - a.width / 2, d = n.y + n.height / 2 - a.height / 2, y = n[i] / 2 - a[i] / 2;
  let h;
  switch (u) {
    case "top":
      h = {
        x: c,
        y: n.y - a.height
      };
      break;
    case "bottom":
      h = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      h = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: n.x - a.width,
        y: d
      };
      break;
    default:
      h = {
        x: n.x,
        y: n.y
      };
  }
  switch (Wr(t)) {
    case "start":
      h[s] -= y * (r && l ? -1 : 1);
      break;
    case "end":
      h[s] += y * (r && l ? -1 : 1);
      break;
  }
  return h;
}
const Ug = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: s
  } = r, i = o.filter(Boolean), u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: d
  } = Ul(l, n, u), y = n, h = {}, v = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: f,
      fn: p
    } = i[m], {
      x: w,
      y: O,
      data: A,
      reset: F
    } = await p({
      x: c,
      y: d,
      initialPlacement: n,
      placement: y,
      strategy: a,
      middlewareData: h,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = w ?? c, d = O ?? d, h = {
      ...h,
      [f]: {
        ...h[f],
        ...A
      }
    }, F && v <= 50 && (v++, typeof F == "object" && (F.placement && (y = F.placement), F.rects && (l = F.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : F.rects), {
      x: c,
      y: d
    } = Ul(l, y, u)), m = -1);
  }
  return {
    x: c,
    y: d,
    placement: y,
    strategy: a,
    middlewareData: h
  };
};
async function mn(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: a,
    platform: o,
    rects: s,
    elements: i,
    strategy: u
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: y = !1,
    padding: h = 0
  } = Lt(t, e), v = _d(h), f = i[y ? d === "floating" ? "reference" : "floating" : d], p = ha(await o.getClippingRect({
    element: (r = await (o.isElement == null ? void 0 : o.isElement(f))) == null || r ? f : f.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: c,
    strategy: u
  })), w = d === "floating" ? {
    x: n,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, O = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), A = await (o.isElement == null ? void 0 : o.isElement(O)) ? await (o.getScale == null ? void 0 : o.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, F = ha(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: O,
    strategy: u
  }) : w);
  return {
    top: (p.top - F.top + v.top) / A.y,
    bottom: (F.bottom - p.bottom + v.bottom) / A.y,
    left: (p.left - F.left + v.left) / A.x,
    right: (F.right - p.right + v.right) / A.x
  };
}
const Hg = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: a,
      rects: o,
      platform: s,
      elements: i,
      middlewareData: u
    } = t, {
      element: l,
      padding: c = 0
    } = Lt(e, t) || {};
    if (l == null)
      return {};
    const d = _d(c), y = {
      x: r,
      y: n
    }, h = Ei(a), v = Ci(h), m = await s.getDimensions(l), f = h === "y", p = f ? "top" : "left", w = f ? "bottom" : "right", O = f ? "clientHeight" : "clientWidth", A = o.reference[v] + o.reference[h] - y[h] - o.floating[v], F = y[h] - o.reference[h], H = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let C = H ? H[O] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(H))) && (C = i.floating[O] || o.floating[v]);
    const K = A / 2 - F / 2, M = C / 2 - m[v] / 2 - 1, $ = Zt(d[p], M), q = Zt(d[w], M), b = $, E = C - m[v] - q, k = C / 2 - m[v] / 2 + K, x = _s(b, k, E), W = !u.arrow && Wr(a) != null && k !== x && o.reference[v] / 2 - (k < b ? $ : q) - m[v] / 2 < 0, L = W ? k < b ? k - b : k - E : 0;
    return {
      [h]: y[h] + L,
      data: {
        [h]: x,
        centerOffset: k - x - L,
        ...W && {
          alignmentOffset: L
        }
      },
      reset: W
    };
  }
}), Wg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: a,
        middlewareData: o,
        rects: s,
        initialPlacement: i,
        platform: u,
        elements: l
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: y,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...f
      } = Lt(e, t);
      if ((r = o.arrow) != null && r.alignmentOffset)
        return {};
      const p = Mt(a), w = Ft(i), O = Mt(i) === i, A = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), F = y || (O || !m ? [ma(i)] : jg(i)), H = v !== "none";
      !y && H && F.push(...Vg(i, m, v, A));
      const C = [i, ...F], K = await mn(t, f), M = [];
      let $ = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (c && M.push(K[p]), d) {
        const x = Ng(a, s, A);
        M.push(K[x[0]], K[x[1]]);
      }
      if ($ = [...$, {
        placement: a,
        overflows: M
      }], !M.every((x) => x <= 0)) {
        var q, b;
        const x = (((q = o.flip) == null ? void 0 : q.index) || 0) + 1, W = C[x];
        if (W) {
          var E;
          const _ = d === "alignment" ? w !== Ft(W) : !1, G = ((E = $[0]) == null ? void 0 : E.overflows[0]) > 0;
          if (!_ || G)
            return {
              data: {
                index: x,
                overflows: $
              },
              reset: {
                placement: W
              }
            };
        }
        let L = (b = $.filter((_) => _.overflows[0] <= 0).sort((_, G) => _.overflows[1] - G.overflows[1])[0]) == null ? void 0 : b.placement;
        if (!L)
          switch (h) {
            case "bestFit": {
              var k;
              const _ = (k = $.filter((G) => {
                if (H) {
                  const re = Ft(G.placement);
                  return re === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  re === "y";
                }
                return !0;
              }).map((G) => [G.placement, G.overflows.filter((re) => re > 0).reduce((re, Se) => re + Se, 0)]).sort((G, re) => G[1] - re[1])[0]) == null ? void 0 : k[0];
              _ && (L = _);
              break;
            }
            case "initialPlacement":
              L = i;
              break;
          }
        if (a !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
function Hl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Wl(e) {
  return Bg.some((t) => e[t] >= 0);
}
const Kg = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...a
      } = Lt(e, t);
      switch (n) {
        case "referenceHidden": {
          const o = await mn(t, {
            ...a,
            elementContext: "reference"
          }), s = Hl(o, r.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Wl(s)
            }
          };
        }
        case "escaped": {
          const o = await mn(t, {
            ...a,
            altBoundary: !0
          }), s = Hl(o, r.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Wl(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Gg(e, t) {
  const {
    placement: r,
    platform: n,
    elements: a
  } = e, o = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), s = Mt(r), i = Wr(r), u = Ft(r) === "y", l = ["left", "top"].includes(s) ? -1 : 1, c = o && u ? -1 : 1, d = Lt(t, e);
  let {
    mainAxis: y,
    crossAxis: h,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof v == "number" && (h = i === "end" ? v * -1 : v), u ? {
    x: h * c,
    y: y * l
  } : {
    x: y * l,
    y: h * c
  };
}
const Yg = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: a,
        y: o,
        placement: s,
        middlewareData: i
      } = t, u = await Gg(t, e);
      return s === ((r = i.offset) == null ? void 0 : r.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: a + u.x,
        y: o + u.y,
        data: {
          ...u,
          placement: s
        }
      };
    }
  };
}, Xg = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: a
      } = t, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (f) => {
            let {
              x: p,
              y: w
            } = f;
            return {
              x: p,
              y: w
            };
          }
        },
        ...u
      } = Lt(e, t), l = {
        x: r,
        y: n
      }, c = await mn(t, u), d = Ft(Mt(a)), y = Oi(d);
      let h = l[y], v = l[d];
      if (o) {
        const f = y === "y" ? "top" : "left", p = y === "y" ? "bottom" : "right", w = h + c[f], O = h - c[p];
        h = _s(w, h, O);
      }
      if (s) {
        const f = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", w = v + c[f], O = v - c[p];
        v = _s(w, v, O);
      }
      const m = i.fn({
        ...t,
        [y]: h,
        [d]: v
      });
      return {
        ...m,
        data: {
          x: m.x - r,
          y: m.y - n,
          enabled: {
            [y]: o,
            [d]: s
          }
        }
      };
    }
  };
}, Jg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: a,
        rects: o,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: u = !0,
        crossAxis: l = !0
      } = Lt(e, t), c = {
        x: r,
        y: n
      }, d = Ft(a), y = Oi(d);
      let h = c[y], v = c[d];
      const m = Lt(i, t), f = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const O = y === "y" ? "height" : "width", A = o.reference[y] - o.floating[O] + f.mainAxis, F = o.reference[y] + o.reference[O] - f.mainAxis;
        h < A ? h = A : h > F && (h = F);
      }
      if (l) {
        var p, w;
        const O = y === "y" ? "width" : "height", A = ["top", "left"].includes(Mt(a)), F = o.reference[d] - o.floating[O] + (A && ((p = s.offset) == null ? void 0 : p[d]) || 0) + (A ? 0 : f.crossAxis), H = o.reference[d] + o.reference[O] + (A ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (A ? f.crossAxis : 0);
        v < F ? v = F : v > H && (v = H);
      }
      return {
        [y]: h,
        [d]: v
      };
    }
  };
}, Qg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: a,
        rects: o,
        platform: s,
        elements: i
      } = t, {
        apply: u = () => {
        },
        ...l
      } = Lt(e, t), c = await mn(t, l), d = Mt(a), y = Wr(a), h = Ft(a) === "y", {
        width: v,
        height: m
      } = o.floating;
      let f, p;
      d === "top" || d === "bottom" ? (f = d, p = y === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (p = d, f = y === "end" ? "top" : "bottom");
      const w = m - c.top - c.bottom, O = v - c.left - c.right, A = Zt(m - c[f], w), F = Zt(v - c[p], O), H = !t.middlewareData.shift;
      let C = A, K = F;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (K = O), (n = t.middlewareData.shift) != null && n.enabled.y && (C = w), H && !y) {
        const $ = et(c.left, 0), q = et(c.right, 0), b = et(c.top, 0), E = et(c.bottom, 0);
        h ? K = v - 2 * ($ !== 0 || q !== 0 ? $ + q : et(c.left, c.right)) : C = m - 2 * (b !== 0 || E !== 0 ? b + E : et(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: K,
        availableHeight: C
      });
      const M = await s.getDimensions(i.floating);
      return v !== M.width || m !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ta() {
  return typeof window < "u";
}
function vr(e) {
  return Ai(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function nt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $t(e) {
  var t;
  return (t = (Ai(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ai(e) {
  return Ta() ? e instanceof Node || e instanceof nt(e).Node : !1;
}
function vt(e) {
  return Ta() ? e instanceof Element || e instanceof nt(e).Element : !1;
}
function At(e) {
  return Ta() ? e instanceof HTMLElement || e instanceof nt(e).HTMLElement : !1;
}
function Kl(e) {
  return !Ta() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof nt(e).ShadowRoot;
}
function Sn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: a
  } = bt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(a);
}
function Zg(e) {
  return ["table", "td", "th"].includes(vr(e));
}
function Da(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Pi(e) {
  const t = $i(), r = vt(e) ? bt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((n) => r[n] ? r[n] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function e0(e) {
  let t = er(e);
  for (; At(t) && !jr(t); ) {
    if (Pi(t))
      return t;
    if (Da(t))
      return null;
    t = er(t);
  }
  return null;
}
function $i() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function jr(e) {
  return ["html", "body", "#document"].includes(vr(e));
}
function bt(e) {
  return nt(e).getComputedStyle(e);
}
function Ra(e) {
  return vt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function er(e) {
  if (vr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Kl(e) && e.host || // Fallback.
    $t(e)
  );
  return Kl(t) ? t.host : t;
}
function Fd(e) {
  const t = er(e);
  return jr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : At(t) && Sn(t) ? t : Fd(t);
}
function hn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const a = Fd(e), o = a === ((n = e.ownerDocument) == null ? void 0 : n.body), s = nt(a);
  if (o) {
    const i = Is(s);
    return t.concat(s, s.visualViewport || [], Sn(a) ? a : [], i && r ? hn(i) : []);
  }
  return t.concat(a, hn(a, [], r));
}
function Is(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Id(e) {
  const t = bt(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = At(e), o = a ? e.offsetWidth : r, s = a ? e.offsetHeight : n, i = pa(r) !== o || pa(n) !== s;
  return i && (r = o, n = s), {
    width: r,
    height: n,
    $: i
  };
}
function Ti(e) {
  return vt(e) ? e : e.contextElement;
}
function Br(e) {
  const t = Ti(e);
  if (!At(t))
    return Et(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: o
  } = Id(t);
  let s = (o ? pa(r.width) : r.width) / n, i = (o ? pa(r.height) : r.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const t0 = /* @__PURE__ */ Et(0);
function Bd(e) {
  const t = nt(e);
  return !$i() || !t.visualViewport ? t0 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function r0(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== nt(e) ? !1 : t;
}
function pr(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), o = Ti(e);
  let s = Et(1);
  t && (n ? vt(n) && (s = Br(n)) : s = Br(e));
  const i = r0(o, r, n) ? Bd(o) : Et(0);
  let u = (a.left + i.x) / s.x, l = (a.top + i.y) / s.y, c = a.width / s.x, d = a.height / s.y;
  if (o) {
    const y = nt(o), h = n && vt(n) ? nt(n) : n;
    let v = y, m = Is(v);
    for (; m && n && h !== v; ) {
      const f = Br(m), p = m.getBoundingClientRect(), w = bt(m), O = p.left + (m.clientLeft + parseFloat(w.paddingLeft)) * f.x, A = p.top + (m.clientTop + parseFloat(w.paddingTop)) * f.y;
      u *= f.x, l *= f.y, c *= f.x, d *= f.y, u += O, l += A, v = nt(m), m = Is(v);
    }
  }
  return ha({
    width: c,
    height: d,
    x: u,
    y: l
  });
}
function Di(e, t) {
  const r = Ra(e).scrollLeft;
  return t ? t.left + r : pr($t(e)).left + r;
}
function Ld(e, t, r) {
  r === void 0 && (r = !1);
  const n = e.getBoundingClientRect(), a = n.left + t.scrollLeft - (r ? 0 : (
    // RTL <body> scrollbar.
    Di(e, n)
  )), o = n.top + t.scrollTop;
  return {
    x: a,
    y: o
  };
}
function n0(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: a
  } = e;
  const o = a === "fixed", s = $t(n), i = t ? Da(t.floating) : !1;
  if (n === s || i && o)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Et(1);
  const c = Et(0), d = At(n);
  if ((d || !d && !o) && ((vr(n) !== "body" || Sn(s)) && (u = Ra(n)), At(n))) {
    const h = pr(n);
    l = Br(n), c.x = h.x + n.clientLeft, c.y = h.y + n.clientTop;
  }
  const y = s && !d && !o ? Ld(s, u, !0) : Et(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - u.scrollLeft * l.x + c.x + y.x,
    y: r.y * l.y - u.scrollTop * l.y + c.y + y.y
  };
}
function a0(e) {
  return Array.from(e.getClientRects());
}
function o0(e) {
  const t = $t(e), r = Ra(e), n = e.ownerDocument.body, a = et(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = et(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + Di(e);
  const i = -r.scrollTop;
  return bt(n).direction === "rtl" && (s += et(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: o,
    x: s,
    y: i
  };
}
function s0(e, t) {
  const r = nt(e), n = $t(e), a = r.visualViewport;
  let o = n.clientWidth, s = n.clientHeight, i = 0, u = 0;
  if (a) {
    o = a.width, s = a.height;
    const l = $i();
    (!l || l && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: i,
    y: u
  };
}
function i0(e, t) {
  const r = pr(e, !0, t === "fixed"), n = r.top + e.clientTop, a = r.left + e.clientLeft, o = At(e) ? Br(e) : Et(1), s = e.clientWidth * o.x, i = e.clientHeight * o.y, u = a * o.x, l = n * o.y;
  return {
    width: s,
    height: i,
    x: u,
    y: l
  };
}
function Gl(e, t, r) {
  let n;
  if (t === "viewport")
    n = s0(e, r);
  else if (t === "document")
    n = o0($t(e));
  else if (vt(t))
    n = i0(t, r);
  else {
    const a = Bd(e);
    n = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return ha(n);
}
function Md(e, t) {
  const r = er(e);
  return r === t || !vt(r) || jr(r) ? !1 : bt(r).position === "fixed" || Md(r, t);
}
function l0(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = hn(e, [], !1).filter((i) => vt(i) && vr(i) !== "body"), a = null;
  const o = bt(e).position === "fixed";
  let s = o ? er(e) : e;
  for (; vt(s) && !jr(s); ) {
    const i = bt(s), u = Pi(s);
    !u && i.position === "fixed" && (a = null), (o ? !u && !a : !u && i.position === "static" && !!a && ["absolute", "fixed"].includes(a.position) || Sn(s) && !u && Md(e, s)) ? n = n.filter((c) => c !== s) : a = i, s = er(s);
  }
  return t.set(e, n), n;
}
function u0(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: a
  } = e;
  const s = [...r === "clippingAncestors" ? Da(t) ? [] : l0(t, this._c) : [].concat(r), n], i = s[0], u = s.reduce((l, c) => {
    const d = Gl(t, c, a);
    return l.top = et(d.top, l.top), l.right = Zt(d.right, l.right), l.bottom = Zt(d.bottom, l.bottom), l.left = et(d.left, l.left), l;
  }, Gl(t, i, a));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function c0(e) {
  const {
    width: t,
    height: r
  } = Id(e);
  return {
    width: t,
    height: r
  };
}
function d0(e, t, r) {
  const n = At(t), a = $t(t), o = r === "fixed", s = pr(e, !0, o, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Et(0);
  function l() {
    u.x = Di(a);
  }
  if (n || !n && !o)
    if ((vr(t) !== "body" || Sn(a)) && (i = Ra(t)), n) {
      const h = pr(t, !0, o, t);
      u.x = h.x + t.clientLeft, u.y = h.y + t.clientTop;
    } else a && l();
  o && !n && a && l();
  const c = a && !n && !o ? Ld(a, i) : Et(0), d = s.left + i.scrollLeft - u.x - c.x, y = s.top + i.scrollTop - u.y - c.y;
  return {
    x: d,
    y,
    width: s.width,
    height: s.height
  };
}
function so(e) {
  return bt(e).position === "static";
}
function Yl(e, t) {
  if (!At(e) || bt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return $t(e) === r && (r = r.ownerDocument.body), r;
}
function Nd(e, t) {
  const r = nt(e);
  if (Da(e))
    return r;
  if (!At(e)) {
    let a = er(e);
    for (; a && !jr(a); ) {
      if (vt(a) && !so(a))
        return a;
      a = er(a);
    }
    return r;
  }
  let n = Yl(e, t);
  for (; n && Zg(n) && so(n); )
    n = Yl(n, t);
  return n && jr(n) && so(n) && !Pi(n) ? r : n || e0(e) || r;
}
const f0 = async function(e) {
  const t = this.getOffsetParent || Nd, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: d0(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function p0(e) {
  return bt(e).direction === "rtl";
}
const m0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: n0,
  getDocumentElement: $t,
  getClippingRect: u0,
  getOffsetParent: Nd,
  getElementRects: f0,
  getClientRects: a0,
  getDimensions: c0,
  getScale: Br,
  isElement: vt,
  isRTL: p0
};
function jd(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function h0(e, t) {
  let r = null, n;
  const a = $t(e);
  function o() {
    var i;
    clearTimeout(n), (i = r) == null || i.disconnect(), r = null;
  }
  function s(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), o();
    const l = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: y,
      height: h
    } = l;
    if (i || t(), !y || !h)
      return;
    const v = jn(d), m = jn(a.clientWidth - (c + y)), f = jn(a.clientHeight - (d + h)), p = jn(c), O = {
      rootMargin: -v + "px " + -m + "px " + -f + "px " + -p + "px",
      threshold: et(0, Zt(1, u)) || 1
    };
    let A = !0;
    function F(H) {
      const C = H[0].intersectionRatio;
      if (C !== u) {
        if (!A)
          return s();
        C ? s(!1, C) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !jd(l, e.getBoundingClientRect()) && s(), A = !1;
    }
    try {
      r = new IntersectionObserver(F, {
        ...O,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(F, O);
    }
    r.observe(e);
  }
  return s(!0), o;
}
function y0(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, l = Ti(e), c = a || o ? [...l ? hn(l) : [], ...hn(t)] : [];
  c.forEach((p) => {
    a && p.addEventListener("scroll", r, {
      passive: !0
    }), o && p.addEventListener("resize", r);
  });
  const d = l && i ? h0(l, r) : null;
  let y = -1, h = null;
  s && (h = new ResizeObserver((p) => {
    let [w] = p;
    w && w.target === l && h && (h.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var O;
      (O = h) == null || O.observe(t);
    })), r();
  }), l && !u && h.observe(l), h.observe(t));
  let v, m = u ? pr(e) : null;
  u && f();
  function f() {
    const p = pr(e);
    m && !jd(m, p) && r(), m = p, v = requestAnimationFrame(f);
  }
  return r(), () => {
    var p;
    c.forEach((w) => {
      a && w.removeEventListener("scroll", r), o && w.removeEventListener("resize", r);
    }), d == null || d(), (p = h) == null || p.disconnect(), h = null, u && cancelAnimationFrame(v);
  };
}
const g0 = Yg, v0 = Xg, Xl = Wg, b0 = Qg, w0 = Kg, S0 = Hg, x0 = Jg, k0 = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: m0,
    ...r
  }, o = {
    ...a.platform,
    _c: n
  };
  return Ug(e, t, {
    ...a,
    platform: o
  });
};
function O0(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Bs(e) {
  if (O0(e)) {
    const t = e.$el;
    return Ai(t) && vr(t) === "#comment" ? null : t;
  }
  return e;
}
function Rr(e) {
  return typeof e == "function" ? e() : g(e);
}
function C0(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const r = Bs(Rr(e.element));
      return r == null ? {} : S0({
        element: r,
        padding: e.padding
      }).fn(t);
    }
  };
}
function qd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jl(e, t) {
  const r = qd(e);
  return Math.round(t * r) / r;
}
function E0(e, t, r) {
  r === void 0 && (r = {});
  const n = r.whileElementsMounted, a = T(() => {
    var C;
    return (C = Rr(r.open)) != null ? C : !0;
  }), o = T(() => Rr(r.middleware)), s = T(() => {
    var C;
    return (C = Rr(r.placement)) != null ? C : "bottom";
  }), i = T(() => {
    var C;
    return (C = Rr(r.strategy)) != null ? C : "absolute";
  }), u = T(() => {
    var C;
    return (C = Rr(r.transform)) != null ? C : !0;
  }), l = T(() => Bs(e.value)), c = T(() => Bs(t.value)), d = N(0), y = N(0), h = N(i.value), v = N(s.value), m = gn({}), f = N(!1), p = T(() => {
    const C = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return C;
    const K = Jl(c.value, d.value), M = Jl(c.value, y.value);
    return u.value ? {
      ...C,
      transform: "translate(" + K + "px, " + M + "px)",
      ...qd(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: K + "px",
      top: M + "px"
    };
  });
  let w;
  function O() {
    if (l.value == null || c.value == null)
      return;
    const C = a.value;
    k0(l.value, c.value, {
      middleware: o.value,
      placement: s.value,
      strategy: i.value
    }).then((K) => {
      d.value = K.x, y.value = K.y, h.value = K.strategy, v.value = K.placement, m.value = K.middlewareData, f.value = C !== !1;
    });
  }
  function A() {
    typeof w == "function" && (w(), w = void 0);
  }
  function F() {
    if (A(), n === void 0) {
      O();
      return;
    }
    if (l.value != null && c.value != null) {
      w = n(l.value, c.value, O);
      return;
    }
  }
  function H() {
    a.value || (f.value = !1);
  }
  return ne([o, s, i, a], O, {
    flush: "sync"
  }), ne([l, c], F, {
    flush: "sync"
  }), ne(a, H, {
    flush: "sync"
  }), Nc() && si(A), {
    x: Pr(d),
    y: Pr(y),
    strategy: Pr(h),
    placement: Pr(v),
    middlewareData: Pr(m),
    isPositioned: Pr(f),
    floatingStyles: p,
    update: O
  };
}
function Ri(e) {
  return e ? e.flatMap((t) => t.type === oe ? Ri(t.children) : [t]) : [];
}
const Ls = z({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: r }) {
    return () => {
      var u, l;
      if (!r.default)
        return null;
      const n = Ri(r.default()), a = n.findIndex((c) => c.type !== jc);
      if (a === -1)
        return n;
      const o = n[a];
      (u = o.props) == null || delete u.ref;
      const s = o.props ? se(t, o.props) : t;
      t.class && ((l = o.props) != null && l.class) && delete o.props.class;
      const i = im(o, s);
      for (const c in s)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = s[c]);
      return n.length === 1 ? i : (n[a] = i, n);
    };
  }
}), A0 = ["area", "img", "input"], Fe = z({
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
  setup(e, { attrs: t, slots: r }) {
    const n = e.asChild ? "template" : e.as;
    return typeof n == "string" && A0.includes(n) ? () => Ue(n, t) : n !== "template" ? () => Ue(e.as, t, { default: r.default }) : () => Ue(Ls, t, { default: r.default });
  }
}), Vd = /* @__PURE__ */ z({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, r) => (S(), U(g(Fe), {
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
      default: I(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function P0(e, t) {
  var r;
  const n = gn();
  return ut(() => {
    n.value = e();
  }, {
    ...t,
    flush: (r = void 0) != null ? r : "sync"
  }), qc(n);
}
function xn(e) {
  return Nc() ? (si(e), !0) : !1;
}
function $0() {
  const e = /* @__PURE__ */ new Set(), t = (o) => {
    e.delete(o);
  };
  return {
    on: (o) => {
      e.add(o);
      const s = () => t(o);
      return xn(s), {
        off: s
      };
    },
    off: t,
    trigger: (...o) => Promise.all(Array.from(e).map((s) => s(...o))),
    clear: () => {
      e.clear();
    }
  };
}
function T0(e) {
  let t = !1, r;
  const n = Vc(!0);
  return (...a) => (t || (r = n.run(() => e(...a)), t = !0), r);
}
function zd(e) {
  let t = 0, r, n;
  const a = () => {
    t -= 1, n && t <= 0 && (n.stop(), r = void 0, n = void 0);
  };
  return (...o) => (t += 1, n || (n = Vc(!0), r = n.run(() => e(...o))), xn(a), r);
}
const qt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const D0 = (e) => typeof e < "u", R0 = Object.prototype.toString, _0 = (e) => R0.call(e) === "[object Object]", Ql = /* @__PURE__ */ F0();
function F0() {
  var e, t;
  return qt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function I0(e) {
  return gr();
}
function io(e) {
  return Array.isArray(e) ? e : [e];
}
function Ud(e, t = 1e4) {
  return lm((r, n) => {
    let a = Ct(e), o;
    const s = () => setTimeout(() => {
      a = Ct(e), n();
    }, Ct(t));
    return xn(() => {
      clearTimeout(o);
    }), {
      get() {
        return r(), a;
      },
      set(i) {
        a = i, n(), clearTimeout(o), o = s();
      }
    };
  });
}
const B0 = Ct;
function L0(e, t) {
  I0() && zc(e, t);
}
function Hd(e, t, r = {}) {
  const {
    immediate: n = !0,
    immediateCallback: a = !1
  } = r, o = gn(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), s = null);
  }
  function u() {
    o.value = !1, i();
  }
  function l(...c) {
    a && e(), i(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = null, e(...c);
    }, Ct(t));
  }
  return n && (o.value = !0, qt && l()), xn(u), {
    isPending: qc(o),
    start: l,
    stop: u
  };
}
function M0(e, t, r) {
  return ne(
    e,
    t,
    {
      ...r,
      immediate: !0
    }
  );
}
const _i = qt ? window : void 0;
function br(e) {
  var t;
  const r = Ct(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function mr(...e) {
  const t = [], r = () => {
    t.forEach((i) => i()), t.length = 0;
  }, n = (i, u, l, c) => (i.addEventListener(u, l, c), () => i.removeEventListener(u, l, c)), a = T(() => {
    const i = io(Ct(e[0])).filter((u) => u != null);
    return i.every((u) => typeof u != "string") ? i : void 0;
  }), o = M0(
    () => {
      var i, u;
      return [
        (u = (i = a.value) == null ? void 0 : i.map((l) => br(l))) != null ? u : [_i].filter((l) => l != null),
        io(Ct(a.value ? e[1] : e[0])),
        io(g(a.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ct(a.value ? e[3] : e[2])
      ];
    },
    ([i, u, l, c]) => {
      if (r(), !(i != null && i.length) || !(u != null && u.length) || !(l != null && l.length))
        return;
      const d = _0(c) ? { ...c } : c;
      t.push(
        ...i.flatMap(
          (y) => u.flatMap(
            (h) => l.map((v) => n(y, h, v, d))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    o(), r();
  };
  return xn(r), s;
}
function N0() {
  const e = gn(!1), t = gr();
  return t && ye(() => {
    e.value = !0;
  }, t), e;
}
function j0(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function q0(...e) {
  let t, r, n = {};
  e.length === 3 ? (t = e[0], r = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, r = e[0], n = e[1]) : (t = e[0], r = e[1]) : (t = !0, r = e[0]);
  const {
    target: a = _i,
    eventName: o = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = n, u = j0(t);
  return mr(a, o, (c) => {
    c.repeat && Ct(i) || u(c) && r(c);
  }, s);
}
function V0(e) {
  return JSON.parse(JSON.stringify(e));
}
function wr(e, t, r, n = {}) {
  var a, o, s;
  const {
    clone: i = !1,
    passive: u = !1,
    eventName: l,
    deep: c = !1,
    defaultValue: d,
    shouldEmit: y
  } = n, h = gr(), v = r || (h == null ? void 0 : h.emit) || ((a = h == null ? void 0 : h.$emit) == null ? void 0 : a.bind(h)) || ((s = (o = h == null ? void 0 : h.proxy) == null ? void 0 : o.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let m = l;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const f = (O) => i ? typeof i == "function" ? i(O) : V0(O) : O, p = () => D0(e[t]) ? f(e[t]) : d, w = (O) => {
    y ? y(O) && v(m, O) : v(m, O);
  };
  if (u) {
    const O = p(), A = N(O);
    let F = !1;
    return ne(
      () => e[t],
      (H) => {
        F || (F = !0, A.value = f(H), Me(() => F = !1));
      }
    ), ne(
      A,
      (H) => {
        !F && (H !== e[t] || c) && w(H);
      },
      { deep: c }
    ), A;
  } else
    return T({
      get() {
        return p();
      },
      set(O) {
        w(O);
      }
    });
}
function ot(e, t) {
  const r = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(r);
  return [(s) => {
    const i = ii(n, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (ka(n, s), s)];
}
const [Fi, b4] = ot("ConfigProvider");
function Ii(e) {
  const t = Fi({
    dir: N("ltr")
  });
  return T(() => {
    var r;
    return (e == null ? void 0 : e.value) || ((r = t.dir) == null ? void 0 : r.value) || "ltr";
  });
}
function ce() {
  const e = gr(), t = N(), r = T(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : br(t);
  }), n = Object.assign({}, e.exposed), a = {};
  for (const s in e.props)
    Object.defineProperty(a, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(n).length > 0)
    for (const s in n)
      Object.defineProperty(a, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s]
      });
  Object.defineProperty(a, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = a;
  function o(s) {
    t.value = s, s && (Object.defineProperty(a, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = a);
  }
  return { forwardRef: o, currentRef: t, currentElement: r };
}
const [Wd, z0] = ot("CollapsibleRoot"), Bi = /* @__PURE__ */ z({
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
  setup(e, { expose: t, emit: r }) {
    const n = e, o = wr(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), { disabled: s, unmountOnHide: i } = Pt(n);
    return z0({
      contentId: "",
      disabled: s,
      open: o,
      unmountOnHide: i,
      onOpenToggle: () => {
        o.value = !o.value;
      }
    }), t({ open: o }), ce(), (u, l) => (S(), U(g(Fe), {
      as: u.as,
      "as-child": n.asChild,
      "data-state": g(o) ? "open" : "closed",
      "data-disabled": g(s) ? "" : void 0
    }, {
      default: I(() => [
        V(u.$slots, "default", { open: g(o) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), U0 = ["INPUT", "TEXTAREA"];
function H0(e, t, r, n = {}) {
  if (!t || n.enableIgnoredElement && U0.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: a = "both",
    attributeName: o = "[data-reka-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: u = "ltr",
    preventScroll: l = !0,
    focus: c = !1
  } = n, [d, y, h, v, m, f] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], p = h || v, w = d || y;
  if (!m && !f && (!p && !w || a === "vertical" && w || a === "horizontal" && p))
    return null;
  const O = r ? Array.from(r.querySelectorAll(o)) : s;
  if (!O.length)
    return null;
  l && e.preventDefault();
  let A = null;
  return w || p ? A = Kd(O, t, {
    goForward: p ? v : u === "ltr" ? d : y,
    loop: i
  }) : m ? A = O.at(0) || null : f && (A = O.at(-1) || null), c && (A == null || A.focus()), A;
}
function Kd(e, t, r, n = e.length) {
  if (--n === 0)
    return null;
  const a = e.indexOf(t), o = r.goForward ? a + 1 : a - 1;
  if (!r.loop && (o < 0 || o >= e.length))
    return null;
  const s = (o + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Kd(
    e,
    i,
    r,
    n
  ) : i : null;
}
let W0 = 0;
function hr(e, t = "reka") {
  const r = Fi({ useId: void 0 });
  return fl.useId ? `${t}-${fl.useId()}` : r.useId ? `${t}-${r.useId()}` : `${t}-${++W0}`;
}
function K0(e, t) {
  const r = N(e);
  function n(o) {
    return t[r.value][o] ?? r.value;
  }
  return {
    state: r,
    dispatch: (o) => {
      r.value = n(o);
    }
  };
}
function G0(e, t) {
  var f;
  const r = N({}), n = N("none"), a = N(e), o = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((f = t.value) == null ? void 0 : f.ownerDocument.defaultView) ?? _i, { state: u, dispatch: l } = K0(o, {
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
  }), c = (p) => {
    var w;
    if (qt) {
      const O = new CustomEvent(p, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(O);
    }
  };
  ne(
    e,
    async (p, w) => {
      var A;
      const O = w !== p;
      if (await Me(), O) {
        const F = n.value, H = qn(t.value);
        p ? (l("MOUNT"), c("enter"), H === "none" && c("after-enter")) : H === "none" || H === "undefined" || ((A = r.value) == null ? void 0 : A.display) === "none" ? (l("UNMOUNT"), c("leave"), c("after-leave")) : w && F !== H ? (l("ANIMATION_OUT"), c("leave")) : (l("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (p) => {
    const w = qn(t.value), O = w.includes(
      p.animationName
    ), A = u.value === "mounted" ? "enter" : "leave";
    if (p.target === t.value && O && (c(`after-${A}`), l("ANIMATION_END"), !a.value)) {
      const F = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var H;
        ((H = t.value) == null ? void 0 : H.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = F);
      });
    }
    p.target === t.value && w === "none" && l("ANIMATION_END");
  }, y = (p) => {
    p.target === t.value && (n.value = qn(t.value));
  }, h = ne(
    t,
    (p, w) => {
      p ? (r.value = getComputedStyle(p), p.addEventListener("animationstart", y), p.addEventListener("animationcancel", d), p.addEventListener("animationend", d)) : (l("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), w == null || w.removeEventListener("animationstart", y), w == null || w.removeEventListener("animationcancel", d), w == null || w.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), v = ne(u, () => {
    const p = qn(t.value);
    n.value = u.value === "mounted" ? p : "none";
  });
  return Nt(() => {
    h(), v();
  }), {
    isPresent: T(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function qn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const kn = z({
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
  setup(e, { slots: t, expose: r }) {
    var l;
    const { present: n, forceMount: a } = Pt(e), o = N(), { isPresent: s } = G0(n, o);
    r({ present: s });
    let i = t.default({ present: s.value });
    i = Ri(i || []);
    const u = gr();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (l = u == null ? void 0 : u.parent) != null && l.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((d) => `  - ${d}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => a.value || n.value || s.value ? Ue(t.default({ present: s.value })[0], {
      ref: (c) => {
        const d = br(c);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? o.value = d.firstElementChild : o.value = d), d;
      }
    }) : null;
  }
}), Li = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = Wd();
    a.contentId || (a.contentId = hr(void 0, "reka-collapsible-content"));
    const o = N(), { forwardRef: s, currentElement: i } = ce(), u = N(0), l = N(0), c = T(() => a.open.value), d = N(c.value), y = N();
    ne(
      () => {
        var v;
        return [c.value, (v = o.value) == null ? void 0 : v.present];
      },
      async () => {
        await Me();
        const v = i.value;
        if (!v)
          return;
        y.value = y.value || {
          transitionDuration: v.style.transitionDuration,
          animationName: v.style.animationName
        }, v.style.transitionDuration = "0s", v.style.animationName = "none";
        const m = v.getBoundingClientRect();
        l.value = m.height, u.value = m.width, d.value || (v.style.transitionDuration = y.value.transitionDuration, v.style.animationName = y.value.animationName);
      },
      {
        immediate: !0
      }
    );
    const h = T(() => d.value && a.open.value);
    return ye(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), mr(i, "beforematch", (v) => {
      requestAnimationFrame(() => {
        a.onOpenToggle(), n("contentFound");
      });
    }), (v, m) => (S(), U(g(kn), {
      ref_key: "presentRef",
      ref: o,
      present: v.forceMount || g(a).open.value,
      "force-mount": !0
    }, {
      default: I(({ present: f }) => {
        var p;
        return [
          J(g(Fe), se(v.$attrs, {
            id: g(a).contentId,
            ref: g(s),
            "as-child": r.asChild,
            as: v.as,
            hidden: f ? void 0 : g(a).unmountOnHide.value ? "" : "until-found",
            "data-state": h.value ? void 0 : g(a).open.value ? "open" : "closed",
            "data-disabled": (p = g(a).disabled) != null && p.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${l.value}px`,
              "--reka-collapsible-content-width": `${u.value}px`
            }
          }), {
            default: I(() => [
              !g(a).unmountOnHide.value || f ? V(v.$slots, "default", { key: 0 }) : X("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Mi = /* @__PURE__ */ z({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    ce();
    const r = Wd();
    return (n, a) => {
      var o, s;
      return S(), U(g(Fe), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": g(r).contentId,
        "aria-expanded": g(r).open.value,
        "data-state": g(r).open.value ? "open" : "closed",
        "data-disabled": (o = g(r).disabled) != null && o.value ? "" : void 0,
        disabled: (s = g(r).disabled) == null ? void 0 : s.value,
        onClick: g(r).onOpenToggle
      }, {
        default: I(() => [
          V(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
}), [Tt, Y0] = ot("DialogRoot"), X0 = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, a = wr(r, "open", t, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), o = N(), s = N(), { modal: i } = Pt(r);
    return Y0({
      open: a,
      modal: i,
      openModal: () => {
        a.value = !0;
      },
      onOpenChange: (u) => {
        a.value = u;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      contentId: "",
      titleId: "",
      descriptionId: "",
      triggerElement: o,
      contentElement: s
    }), (u, l) => V(u.$slots, "default", { open: g(a) });
  }
}), J0 = /* @__PURE__ */ z({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    ce();
    const r = Tt();
    return (n, a) => (S(), U(g(Fe), se(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (o) => g(r).onOpenChange(!1))
    }), {
      default: I(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function On(e) {
  const t = gr(), r = t == null ? void 0 : t.type.emits, n = {};
  return r != null && r.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), r == null || r.forEach((a) => {
    n[um(Uc(a))] = (...o) => e(a, ...o);
  }), n;
}
function Gd(e, t, r) {
  const n = r.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
const Q0 = "dismissableLayer.pointerDownOutside", Z0 = "dismissableLayer.focusOutside";
function Yd(e, t) {
  const r = t.closest(
    "[data-dismissable-layer]"
  ), n = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), a = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(r && (n === r || a.indexOf(n) < a.indexOf(r)));
}
function ev(e, t) {
  var o;
  const r = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = N(!1), a = N(() => {
  });
  return ut((s) => {
    if (!qt)
      return;
    const i = async (l) => {
      const c = l.target;
      if (!(!(t != null && t.value) || !c)) {
        if (Yd(t.value, c)) {
          n.value = !1;
          return;
        }
        if (l.target && !n.value) {
          let d = function() {
            Gd(
              Q0,
              e,
              y
            );
          };
          const y = { originalEvent: l };
          l.pointerType === "touch" ? (r.removeEventListener("click", a.value), a.value = d, r.addEventListener("click", a.value, {
            once: !0
          })) : d();
        } else
          r.removeEventListener("click", a.value);
        n.value = !1;
      }
    }, u = window.setTimeout(() => {
      r.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(u), r.removeEventListener("pointerdown", i), r.removeEventListener("click", a.value);
    });
  }), {
    onPointerDownCapture: () => n.value = !0
  };
}
function tv(e, t) {
  var a;
  const r = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), n = N(!1);
  return ut((o) => {
    if (!qt)
      return;
    const s = async (i) => {
      if (!(t != null && t.value))
        return;
      await Me(), await Me();
      const u = i.target;
      !t.value || !u || Yd(t.value, u) || i.target && !n.value && Gd(
        Z0,
        e,
        { originalEvent: i }
      );
    };
    r.addEventListener("focusin", s), o(() => r.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => n.value = !0,
    onBlurCapture: () => n.value = !1
  };
}
const Dt = vn({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ni = /* @__PURE__ */ z({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const r = e, n = t, { forwardRef: a, currentElement: o } = ce(), s = T(
      () => {
        var v;
        return ((v = o.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
      }
    ), i = T(() => Dt.layersRoot), u = T(() => o.value ? Array.from(i.value).indexOf(o.value) : -1), l = T(() => Dt.layersWithOutsidePointerEventsDisabled.size > 0), c = T(() => {
      const v = Array.from(i.value), [m] = [...Dt.layersWithOutsidePointerEventsDisabled].slice(-1), f = v.indexOf(m);
      return u.value >= f;
    }), d = ev(async (v) => {
      const m = [...Dt.branches].some(
        (f) => f == null ? void 0 : f.contains(v.target)
      );
      !c.value || m || (n("pointerDownOutside", v), n("interactOutside", v), await Me(), v.defaultPrevented || n("dismiss"));
    }, o), y = tv((v) => {
      [...Dt.branches].some(
        (f) => f == null ? void 0 : f.contains(v.target)
      ) || (n("focusOutside", v), n("interactOutside", v), v.defaultPrevented || n("dismiss"));
    }, o);
    q0("Escape", (v) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", v), v.defaultPrevented || n("dismiss"));
    });
    let h;
    return ut((v) => {
      o.value && (r.disableOutsidePointerEvents && (Dt.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), Dt.layersWithOutsidePointerEventsDisabled.add(o.value)), i.value.add(o.value), v(() => {
        r.disableOutsidePointerEvents && Dt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), ut((v) => {
      v(() => {
        o.value && (i.value.delete(o.value), Dt.layersWithOutsidePointerEventsDisabled.delete(o.value));
      });
    }), (v, m) => (S(), U(g(Fe), {
      ref: g(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: rt({
        pointerEvents: l.value ? c.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: g(y).onFocusCapture,
      onBlurCapture: g(y).onBlurCapture,
      onPointerdownCapture: g(d).onPointerDownCapture
    }, {
      default: I(() => [
        V(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function Ye() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const rv = "menu.itemSelect", Ms = ["Enter", " "], nv = ["ArrowDown", "PageUp", "Home"], Xd = ["ArrowUp", "PageDown", "End"], av = [...nv, ...Xd];
[...Ms], [...Ms];
function Jd(e) {
  return e ? "open" : "closed";
}
function ov(e) {
  const t = Ye();
  for (const r of e)
    if (r === t || (r.focus(), Ye() !== t))
      return;
}
function sv(e, t) {
  const { x: r, y: n } = e;
  let a = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const i = t[o].x, u = t[o].y, l = t[s].x, c = t[s].y;
    u > n != c > n && r < (l - i) * (n - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function iv(e, t) {
  if (!t)
    return !1;
  const r = { x: e.clientX, y: e.clientY };
  return sv(r, t);
}
function Ns(e) {
  return e.pointerType === "mouse";
}
const lv = "DialogTitle", uv = "DialogContent";
function cv({
  titleName: e = lv,
  contentName: t = uv,
  componentLink: r = "dialog.html#title",
  titleId: n,
  descriptionId: a,
  contentElement: o
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${r}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  ye(() => {
    var c;
    document.getElementById(n) || console.warn(s);
    const l = (c = o.value) == null ? void 0 : c.getAttribute("aria-describedby");
    a && l && (document.getElementById(a) || console.warn(i));
  });
}
const dv = T0(() => N([]));
function fv() {
  const e = dv();
  return {
    add(t) {
      const r = e.value[0];
      t !== r && (r == null || r.pause()), e.value = Zl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var r;
      e.value = Zl(e.value, t), (r = e.value[0]) == null || r.resume();
    }
  };
}
function Zl(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function pv(e) {
  return e.filter((t) => t.tagName !== "A");
}
const lo = "focusScope.autoFocusOnMount", uo = "focusScope.autoFocusOnUnmount", eu = { bubbles: !1, cancelable: !0 };
function mv(e, { select: t = !1 } = {}) {
  const r = Ye();
  for (const n of e)
    if (Kt(n, { select: t }), Ye() !== r)
      return !0;
}
function hv(e) {
  const t = Qd(e), r = tu(t, e), n = tu(t.reverse(), e);
  return [r, n];
}
function Qd(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function tu(e, t) {
  for (const r of e)
    if (!yv(r, { upTo: t }))
      return r;
}
function yv(e, { upTo: t }) {
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
function gv(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = Ye();
    e.focus({ preventScroll: !0 }), e !== r && gv(e) && t && e.select();
  }
}
const Zd = /* @__PURE__ */ z({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const r = e, n = t, { currentRef: a, currentElement: o } = ce(), s = N(null), i = fv(), u = vn({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ut((c) => {
      if (!qt)
        return;
      const d = o.value;
      if (!r.trapped)
        return;
      function y(f) {
        if (u.paused || !d)
          return;
        const p = f.target;
        d.contains(p) ? s.value = p : Kt(s.value, { select: !0 });
      }
      function h(f) {
        if (u.paused || !d)
          return;
        const p = f.relatedTarget;
        p !== null && (d.contains(p) || Kt(s.value, { select: !0 }));
      }
      function v(f) {
        d.contains(s.value) || Kt(d);
      }
      document.addEventListener("focusin", y), document.addEventListener("focusout", h);
      const m = new MutationObserver(v);
      d && m.observe(d, { childList: !0, subtree: !0 }), c(() => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", h), m.disconnect();
      });
    }), ut(async (c) => {
      const d = o.value;
      if (await Me(), !d)
        return;
      i.add(u);
      const y = Ye();
      if (!d.contains(y)) {
        const v = new CustomEvent(lo, eu);
        d.addEventListener(lo, (m) => n("mountAutoFocus", m)), d.dispatchEvent(v), v.defaultPrevented || (mv(pv(Qd(d)), {
          select: !0
        }), Ye() === y && Kt(d));
      }
      c(() => {
        d.removeEventListener(lo, (f) => n("mountAutoFocus", f));
        const v = new CustomEvent(uo, eu), m = (f) => {
          n("unmountAutoFocus", f);
        };
        d.addEventListener(uo, m), d.dispatchEvent(v), setTimeout(() => {
          v.defaultPrevented || Kt(y ?? document.body, { select: !0 }), d.removeEventListener(uo, m), i.remove(u);
        }, 0);
      });
    });
    function l(c) {
      if (!r.loop && !r.trapped || u.paused)
        return;
      const d = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, y = Ye();
      if (d && y) {
        const h = c.currentTarget, [v, m] = hv(h);
        v && m ? !c.shiftKey && y === m ? (c.preventDefault(), r.loop && Kt(v, { select: !0 })) : c.shiftKey && y === v && (c.preventDefault(), r.loop && Kt(m, { select: !0 })) : y === h && c.preventDefault();
      }
    }
    return (c, d) => (S(), U(g(Fe), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: l
    }, {
      default: I(() => [
        V(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), ef = /* @__PURE__ */ z({
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
    const r = e, n = t, a = Tt(), { forwardRef: o, currentElement: s } = ce();
    return a.titleId || (a.titleId = hr(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = hr(void 0, "reka-dialog-description")), ye(() => {
      a.contentElement = s, Ye() !== document.body && (a.triggerElement.value = Ye());
    }), process.env.NODE_ENV !== "production" && cv({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: s
    }), (i, u) => (S(), U(g(Zd), {
      "as-child": "",
      loop: "",
      trapped: r.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (l) => n("openAutoFocus", l)),
      onUnmountAutoFocus: u[6] || (u[6] = (l) => n("closeAutoFocus", l))
    }, {
      default: I(() => [
        J(g(Ni), se({
          id: g(a).contentId,
          ref: g(o),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": g(a).descriptionId,
          "aria-labelledby": g(a).titleId,
          "data-state": g(Jd)(g(a).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (l) => g(a).onOpenChange(!1)),
          onEscapeKeyDown: u[1] || (u[1] = (l) => n("escapeKeyDown", l)),
          onFocusOutside: u[2] || (u[2] = (l) => n("focusOutside", l)),
          onInteractOutside: u[3] || (u[3] = (l) => n("interactOutside", l)),
          onPointerDownOutside: u[4] || (u[4] = (l) => n("pointerDownOutside", l))
        }), {
          default: I(() => [
            V(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var vv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, $r = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), zn = {}, co = 0, tf = function(e) {
  return e && (e.host || tf(e.parentNode));
}, bv = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = tf(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, wv = function(e, t, r, n) {
  var a = bv(t, Array.isArray(e) ? e : [e]);
  zn[r] || (zn[r] = /* @__PURE__ */ new WeakMap());
  var o = zn[r], s = [], i = /* @__PURE__ */ new Set(), u = new Set(a), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  a.forEach(l);
  var c = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(y) {
      if (i.has(y))
        c(y);
      else
        try {
          var h = y.getAttribute(n), v = h !== null && h !== "false", m = ($r.get(y) || 0) + 1, f = (o.get(y) || 0) + 1;
          $r.set(y, m), o.set(y, f), s.push(y), m === 1 && v && Vn.set(y, !0), f === 1 && y.setAttribute(r, "true"), v || y.setAttribute(n, "true");
        } catch (p) {
          console.error("aria-hidden: cannot operate on ", y, p);
        }
    });
  };
  return c(t), i.clear(), co++, function() {
    s.forEach(function(d) {
      var y = $r.get(d) - 1, h = o.get(d) - 1;
      $r.set(d, y), o.set(d, h), y || (Vn.has(d) || d.removeAttribute(n), Vn.delete(d)), h || d.removeAttribute(r);
    }), co--, co || ($r = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), zn = {});
  };
}, Sv = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), a = vv(e);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), wv(n, a, r, "aria-hidden")) : function() {
    return null;
  };
};
function rf(e) {
  let t;
  ne(() => br(e), (r) => {
    r ? t = Sv(r) : t && t();
  }), Nt(() => {
    t && t();
  });
}
const xv = /* @__PURE__ */ z({
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
    const r = e, n = t, a = Tt(), o = On(n), { forwardRef: s, currentElement: i } = ce();
    return rf(i), (u, l) => (S(), U(ef, se({ ...r, ...g(o) }, {
      ref: g(s),
      "trap-focus": g(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: l[0] || (l[0] = (c) => {
        var d;
        c.defaultPrevented || (c.preventDefault(), (d = g(a).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: l[1] || (l[1] = (c) => {
        const d = c.detail.originalEvent, y = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || y) && c.preventDefault();
      }),
      onFocusOutside: l[2] || (l[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: I(() => [
        V(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), kv = /* @__PURE__ */ z({
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
    const r = e, a = On(t);
    ce();
    const o = Tt(), s = N(!1), i = N(!1);
    return (u, l) => (S(), U(ef, se({ ...r, ...g(a) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (c) => {
        var d;
        c.defaultPrevented || (s.value || (d = g(o).triggerElement.value) == null || d.focus(), c.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (c) => {
        var h;
        c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const d = c.target;
        ((h = g(o).triggerElement.value) == null ? void 0 : h.contains(d)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: I(() => [
        V(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ov = /* @__PURE__ */ z({
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
    const r = e, n = t, a = Tt(), o = On(n), { forwardRef: s } = ce();
    return (i, u) => (S(), U(g(kn), {
      present: i.forceMount || g(a).open.value
    }, {
      default: I(() => [
        g(a).modal.value ? (S(), U(xv, se({
          key: 0,
          ref: g(s)
        }, { ...r, ...g(o), ...i.$attrs }), {
          default: I(() => [
            V(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (S(), U(kv, se({
          key: 1,
          ref: g(s)
        }, { ...r, ...g(o), ...i.$attrs }), {
          default: I(() => [
            V(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Cv = /* @__PURE__ */ z({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    ce();
    const r = Tt();
    return (n, a) => (S(), U(g(Fe), se(t, {
      id: g(r).descriptionId
    }), {
      default: I(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function fo(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function js(e, t, r = ".", n) {
  if (!fo(t))
    return js(e, {}, r, n);
  const a = Object.assign({}, t);
  for (const o in e) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const s = e[o];
    s != null && (n && n(a, o, s, r) || (Array.isArray(s) && Array.isArray(a[o]) ? a[o] = [...s, ...a[o]] : fo(s) && fo(a[o]) ? a[o] = js(
      s,
      a[o],
      (r ? `${r}.` : "") + o.toString(),
      n
    ) : a[o] = s));
  }
  return a;
}
function Ev(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((r, n) => js(r, n, "", e), {})
  );
}
const Av = Ev(), Pv = zd(() => {
  const e = N(/* @__PURE__ */ new Map()), t = N(), r = T(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), n = Fi({
    scrollBody: N(!0)
  });
  let a = null;
  const o = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Ql && (a == null || a()), t.value = void 0;
  };
  return ne(r, (s, i) => {
    var d;
    if (!qt)
      return;
    if (!s) {
      i && o();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, l = { padding: u, margin: 0 }, c = (d = n.scrollBody) != null && d.value ? typeof n.scrollBody.value == "object" ? Av({
      padding: n.scrollBody.value.padding === !0 ? u : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? u : n.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = typeof c.padding == "number" ? `${c.padding}px` : String(c.padding), document.body.style.marginRight = typeof c.margin == "number" ? `${c.margin}px` : String(c.margin), document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), Ql && (a = mr(
      document,
      "touchmove",
      (y) => $v(y),
      { passive: !1 }
    )), Me(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function nf(e) {
  const t = Math.random().toString(36).substring(2, 7), r = Pv();
  r.value.set(t, e ?? !1);
  const n = T({
    get: () => r.value.get(t) ?? !1,
    set: (a) => r.value.set(t, a)
  });
  return L0(() => {
    r.value.delete(t);
  }), n;
}
function af(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const r = e.parentNode;
    return !(r instanceof Element) || r.tagName === "BODY" ? !1 : af(r);
  }
}
function $v(e) {
  const t = e || window.event, r = t.target;
  return r instanceof Element && af(r) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Tv = /* @__PURE__ */ z({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Tt();
    return nf(!0), ce(), (r, n) => (S(), U(g(Fe), {
      as: r.as,
      "as-child": r.asChild,
      "data-state": g(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Dv = /* @__PURE__ */ z({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Tt(), { forwardRef: r } = ce();
    return (n, a) => {
      var o;
      return (o = g(t)) != null && o.modal.value ? (S(), U(g(kn), {
        key: 0,
        present: n.forceMount || g(t).open.value
      }, {
        default: I(() => [
          J(Tv, se(n.$attrs, {
            ref: g(r),
            as: n.as,
            "as-child": n.asChild
          }), {
            default: I(() => [
              V(n.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : X("", !0);
    };
  }
}), ji = /* @__PURE__ */ z({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = N0();
    return (r, n) => g(t) || r.forceMount ? (S(), U(Hc, {
      key: 0,
      to: r.to,
      disabled: r.disabled,
      defer: r.defer
    }, [
      V(r.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : X("", !0);
  }
});
function of(e) {
  const t = gr(), r = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, o) => {
    const s = (t == null ? void 0 : t.type.props[o]).default;
    return s !== void 0 && (a[o] = s), a;
  }, {}), n = cm(e);
  return T(() => {
    const a = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((s) => {
      a[Uc(s)] = o[s];
    }), Object.keys({ ...r, ...a }).reduce((s, i) => (n.value[i] !== void 0 && (s[i] = n.value[i]), s), {});
  });
}
function Cn(e, t) {
  const r = of(e), n = t ? On(t) : {};
  return T(() => ({
    ...r.value,
    ...n
  }));
}
const Rv = /* @__PURE__ */ z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, r = Tt();
    return ce(), (n, a) => (S(), U(g(Fe), se(t, {
      id: g(r).titleId
    }), {
      default: I(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), _v = /* @__PURE__ */ z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, r = Tt(), { forwardRef: n, currentElement: a } = ce();
    return r.contentId || (r.contentId = hr(void 0, "reka-dialog-content")), ye(() => {
      r.triggerElement.value = a.value;
    }), (o, s) => (S(), U(g(Fe), se(t, {
      ref: g(n),
      type: o.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": g(r).open.value || !1,
      "aria-controls": g(r).open.value ? g(r).contentId : void 0,
      "data-state": g(r).open.value ? "open" : "closed",
      onClick: g(r).onOpenToggle
    }), {
      default: I(() => [
        V(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
function qs() {
  const e = N(), t = T(() => {
    var r, n;
    return ["#text", "#comment"].includes((r = e.value) == null ? void 0 : r.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : br(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function Fv(e) {
  return T(() => {
    var t;
    return B0(e) ? !!((t = br(e)) != null && t.closest("form")) : !0;
  });
}
const ru = "data-reka-collection-item";
function sf(e = {}) {
  const { key: t = "", isProvider: r = !1 } = e, n = `${t}CollectionProvider`;
  let a;
  if (r) {
    const c = N(/* @__PURE__ */ new Map());
    a = {
      collectionRef: N(),
      itemMap: c
    }, ka(n, a);
  } else
    a = ii(n);
  const o = (c = !1) => {
    const d = a.collectionRef.value;
    if (!d)
      return [];
    const y = Array.from(d.querySelectorAll(`[${ru}]`)), v = Array.from(a.itemMap.value.values()).sort(
      (m, f) => y.indexOf(m.ref) - y.indexOf(f.ref)
    );
    return c ? v : v.filter((m) => m.ref.dataset.disabled !== "");
  }, s = z({
    name: "CollectionSlot",
    setup(c, { slots: d }) {
      const { primitiveElement: y, currentElement: h } = qs();
      return ne(h, () => {
        a.collectionRef.value = h.value;
      }), () => Ue(Ls, { ref: y }, d);
    }
  }), i = z({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(c, { slots: d, attrs: y }) {
      const { primitiveElement: h, currentElement: v } = qs();
      return ut((m) => {
        if (v.value) {
          const f = ps(v.value);
          a.itemMap.value.set(f, { ref: v.value, value: c.value }), m(() => a.itemMap.value.delete(f));
        }
      }), () => Ue(Ls, { ...y, [ru]: "", ref: h }, d);
    }
  }), u = T(() => Array.from(a.itemMap.value.values())), l = T(() => a.itemMap.value.size);
  return { getItems: o, reactiveItems: u, itemMapSize: l, CollectionSlot: s, CollectionItem: i };
}
const Iv = "rovingFocusGroup.onEntryFocus", Bv = { bubbles: !1, cancelable: !0 };
function Lv(e, t = !1) {
  const r = Ye();
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), Ye() !== r))
      return;
}
const [w4, Mv] = ot("RovingFocusGroup"), Nv = /* @__PURE__ */ z({
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
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r, { loop: o, orientation: s, dir: i } = Pt(n), u = Ii(i), l = wr(n, "currentTabStopId", a, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = N(!1), d = N(!1), y = N(0), { getItems: h, CollectionSlot: v } = sf({ isProvider: !0 });
    function m(p) {
      const w = !d.value;
      if (p.currentTarget && p.target === p.currentTarget && w && !c.value) {
        const O = new CustomEvent(Iv, Bv);
        if (p.currentTarget.dispatchEvent(O), a("entryFocus", O), !O.defaultPrevented) {
          const A = h().map((K) => K.ref).filter((K) => K.dataset.disabled !== ""), F = A.find((K) => K.getAttribute("data-active") === ""), H = A.find(
            (K) => K.id === l.value
          ), C = [F, H, ...A].filter(
            Boolean
          );
          Lv(C, n.preventScrollOnEntryFocus);
        }
      }
      d.value = !1;
    }
    function f() {
      setTimeout(() => {
        d.value = !1;
      }, 1);
    }
    return t({
      getItems: h
    }), Mv({
      loop: o,
      dir: u,
      orientation: s,
      currentTabStopId: l,
      onItemFocus: (p) => {
        l.value = p;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        y.value++;
      },
      onFocusableItemRemove: () => {
        y.value--;
      }
    }), (p, w) => (S(), U(g(v), null, {
      default: I(() => [
        J(g(Fe), {
          tabindex: c.value || y.value === 0 ? -1 : 0,
          "data-orientation": g(s),
          as: p.as,
          "as-child": p.asChild,
          dir: g(u),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = (O) => d.value = !0),
          onMouseup: f,
          onFocus: m,
          onBlur: w[1] || (w[1] = (O) => c.value = !1)
        }, {
          default: I(() => [
            V(p.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), nu = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {},
    value: {},
    checked: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    feature: { default: "fully-hidden" }
  },
  setup(e) {
    const t = e, { primitiveElement: r, currentElement: n } = qs(), a = T(() => t.checked ?? t.value);
    return ne(a, (o, s) => {
      if (!n.value)
        return;
      const i = n.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && o !== s) {
        const d = new Event("input", { bubbles: !0 }), y = new Event("change", { bubbles: !0 });
        c.call(i, o), i.dispatchEvent(d), i.dispatchEvent(y);
      }
    }), (o, s) => (S(), U(Vd, se({
      ref_key: "primitiveElement",
      ref: r
    }, { ...t, ...o.$attrs }, { as: "input" }), null, 16));
  }
}), jv = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    checked: { type: Boolean, default: void 0 },
    required: { type: Boolean },
    disabled: { type: Boolean },
    feature: { default: "fully-hidden" }
  },
  setup(e) {
    const t = e, r = T(
      () => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required
    ), n = T(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, o) => typeof a == "object" ? Object.entries(a).map(([s, i]) => ({ name: `[${t.name}][${o}][${s}]`, value: i })) : { name: `[${t.name}][${o}]`, value: a }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, o]) => ({ name: `[${t.name}][${a}]`, value: o })) : []);
    return (a, o) => r.value ? (S(), U(nu, se({ key: a.name }, { ...t, ...a.$attrs }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (S(!0), P(oe, { key: 1 }, ke(n.value, (s) => (S(), U(nu, se({
      key: s.name,
      ref_for: !0
    }, { ...t, ...a.$attrs }, {
      name: s.name,
      value: s.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [lf, qv] = ot("PopperRoot"), uf = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = N();
    return qv({
      anchor: t,
      onAnchorChange: (r) => t.value = r
    }), (r, n) => V(r.$slots, "default");
  }
}), cf = /* @__PURE__ */ z({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: r, currentElement: n } = ce(), a = lf();
    return Wc(() => {
      a.onAnchorChange(t.reference ?? n.value);
    }), (o, s) => (S(), U(g(Fe), {
      ref: g(r),
      as: o.as,
      "as-child": o.asChild
    }, {
      default: I(() => [
        V(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Vv = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, zv = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, Uv = /* @__PURE__ */ z({
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
    return ce(), (r, n) => (S(), U(g(Fe), se(t, {
      width: r.width,
      height: r.height,
      viewBox: r.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: r.asChild ? void 0 : "none"
    }), {
      default: I(() => [
        V(r.$slots, "default", {}, () => [
          r.rounded ? (S(), P("path", zv)) : (S(), P("path", Vv))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
function Hv(e) {
  return e !== null;
}
function Wv(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var f, p, w;
      const { placement: r, rects: n, middlewareData: a } = t, s = ((f = a.arrow) == null ? void 0 : f.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [l, c] = Vs(r), d = { start: "0%", center: "50%", end: "100%" }[c], y = (((p = a.arrow) == null ? void 0 : p.x) ?? 0) + i / 2, h = (((w = a.arrow) == null ? void 0 : w.y) ?? 0) + u / 2;
      let v = "", m = "";
      return l === "bottom" ? (v = s ? d : `${y}px`, m = `${-u}px`) : l === "top" ? (v = s ? d : `${y}px`, m = `${n.floating.height + u}px`) : l === "right" ? (v = `${-u}px`, m = s ? d : `${h}px`) : l === "left" && (v = `${n.floating.width + u}px`, m = s ? d : `${h}px`), { data: { x: v, y: m } };
    }
  };
}
function Vs(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
function Kv(e) {
  const t = N(), r = T(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = T(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return ye(() => {
    const a = br(e);
    if (a) {
      t.value = { width: a.offsetWidth, height: a.offsetHeight };
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let u, l;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          u = d.inlineSize, l = d.blockSize;
        } else
          u = a.offsetWidth, l = a.offsetHeight;
        t.value = { width: u, height: l };
      });
      return o.observe(a, { box: "border-box" }), () => o.unobserve(a);
    } else
      t.value = void 0;
  }), {
    width: r,
    height: n
  };
}
const df = {
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
}, [Gv, Yv] = ot("PopperContent"), ff = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Kc({
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
    ...df
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = lf(), { forwardRef: o, currentElement: s } = ce(), i = N(), u = N(), { width: l, height: c } = Kv(u), d = T(
      () => r.side + (r.align !== "center" ? `-${r.align}` : "")
    ), y = T(() => typeof r.collisionPadding == "number" ? r.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...r.collisionPadding }), h = T(() => Array.isArray(r.collisionBoundary) ? r.collisionBoundary : [r.collisionBoundary]), v = T(() => ({
      padding: y.value,
      boundary: h.value.filter(Hv),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), m = P0(() => [
      g0({
        mainAxis: r.sideOffset + c.value,
        alignmentAxis: r.alignOffset
      }),
      r.prioritizePosition && r.avoidCollisions && Xl({
        ...v.value
      }),
      r.avoidCollisions && v0({
        mainAxis: !0,
        crossAxis: !!r.prioritizePosition,
        limiter: r.sticky === "partial" ? x0() : void 0,
        ...v.value
      }),
      !r.prioritizePosition && r.avoidCollisions && Xl({
        ...v.value
      }),
      b0({
        ...v.value,
        apply: ({ elements: q, rects: b, availableWidth: E, availableHeight: k }) => {
          const { width: x, height: W } = b.reference, L = q.floating.style;
          L.setProperty(
            "--reka-popper-available-width",
            `${E}px`
          ), L.setProperty(
            "--reka-popper-available-height",
            `${k}px`
          ), L.setProperty(
            "--reka-popper-anchor-width",
            `${x}px`
          ), L.setProperty(
            "--reka-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      u.value && C0({ element: u.value, padding: r.arrowPadding }),
      Wv({
        arrowWidth: l.value,
        arrowHeight: c.value
      }),
      r.hideWhenDetached && w0({ strategy: "referenceHidden", ...v.value })
    ]), f = T(() => r.reference ?? a.anchor.value), { floatingStyles: p, placement: w, isPositioned: O, middlewareData: A } = E0(
      f,
      i,
      {
        strategy: r.positionStrategy,
        placement: d,
        whileElementsMounted: (...q) => y0(...q, {
          layoutShift: !r.disableUpdateOnLayoutShift,
          animationFrame: r.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), F = T(
      () => Vs(w.value)[0]
    ), H = T(
      () => Vs(w.value)[1]
    );
    Wc(() => {
      O.value && n("placed");
    });
    const C = T(
      () => {
        var q;
        return ((q = A.value.arrow) == null ? void 0 : q.centerOffset) !== 0;
      }
    ), K = N("");
    ut(() => {
      s.value && (K.value = window.getComputedStyle(s.value).zIndex);
    });
    const M = T(() => {
      var q;
      return ((q = A.value.arrow) == null ? void 0 : q.x) ?? 0;
    }), $ = T(() => {
      var q;
      return ((q = A.value.arrow) == null ? void 0 : q.y) ?? 0;
    });
    return Yv({
      placedSide: F,
      onArrowChange: (q) => u.value = q,
      arrowX: M,
      arrowY: $,
      shouldHideArrow: C
    }), (q, b) => {
      var E, k, x;
      return S(), P("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: rt({
          ...g(p),
          transform: g(O) ? g(p).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: K.value,
          "--reka-popper-transform-origin": [
            (E = g(A).transformOrigin) == null ? void 0 : E.x,
            (k = g(A).transformOrigin) == null ? void 0 : k.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((x = g(A).hide) == null ? void 0 : x.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        J(g(Fe), se({ ref: g(o) }, q.$attrs, {
          "as-child": r.asChild,
          as: q.as,
          "data-side": F.value,
          "data-align": H.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: g(O) ? void 0 : "none"
          }
        }), {
          default: I(() => [
            V(q.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), Xv = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Jv = /* @__PURE__ */ z({
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
    const { forwardRef: t } = ce(), r = Gv(), n = T(() => Xv[r.placedSide.value]);
    return (a, o) => {
      var s, i, u, l;
      return S(), P("span", {
        ref: (c) => {
          g(r).onArrowChange(c);
        },
        style: rt({
          position: "absolute",
          left: (s = g(r).arrowX) != null && s.value ? `${(i = g(r).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (u = g(r).arrowY) != null && u.value ? `${(l = g(r).arrowY) == null ? void 0 : l.value}px` : void 0,
          [n.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[g(r).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[g(r).placedSide.value],
          visibility: g(r).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        J(Uv, se(a.$attrs, {
          ref: g(t),
          style: {
            display: "block"
          },
          as: a.as,
          "as-child": a.asChild,
          rounded: a.rounded,
          width: a.width,
          height: a.height
        }), {
          default: I(() => [
            V(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
function Qv(e) {
  const t = Ud("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, o) => {
      t.value = t.value + a;
      {
        const s = Ye(), i = o.map((y) => {
          var h, v;
          return {
            ...y,
            textValue: ((h = y.value) == null ? void 0 : h.textValue) ?? ((v = y.ref.textContent) == null ? void 0 : v.trim()) ?? ""
          };
        }), u = i.find((y) => y.ref === s), l = i.map((y) => y.textValue), c = eb(l, t.value, u == null ? void 0 : u.textValue), d = i.find((y) => y.textValue === c);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Zv(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function eb(e, t, r) {
  const a = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, o = r ? e.indexOf(r) : -1;
  let s = Zv(e, Math.max(o, 0));
  a.length === 1 && (s = s.filter((l) => l !== r));
  const u = s.find(
    (l) => l.toLowerCase().startsWith(a.toLowerCase())
  );
  return u !== r ? u : void 0;
}
function tb() {
  const e = N(!1);
  return ye(() => {
    mr("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), mr(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const rb = zd(tb), [_a, nb] = ot(["MenuRoot", "MenuSub"], "MenuContext"), [qi, ab] = ot("MenuRoot"), ob = /* @__PURE__ */ z({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, n = t, { modal: a, dir: o } = Pt(r), s = Ii(o), i = wr(r, "open", n), u = N(), l = rb();
    return nb({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), ab({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: s,
      modal: a
    }), (c, d) => (S(), U(g(uf), null, {
      default: I(() => [
        V(c.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let po = 0;
function sb() {
  ut((e) => {
    if (!qt)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? au()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? au()
    ), po++, e(() => {
      po === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((r) => r.remove()), po--;
    });
  });
}
function au() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [pf, ib] = ot("MenuContent"), mf = /* @__PURE__ */ z({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Kc({
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
    ...df
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = _a(), o = qi(), { trapFocus: s, disableOutsidePointerEvents: i, loop: u } = Pt(r);
    sb(), nf(i.value);
    const l = N(""), c = N(0), d = N(0), y = N(null), h = N("right"), v = N(0), m = N(null), f = N(), { forwardRef: p, currentElement: w } = ce(), { handleTypeaheadSearch: O } = Qv();
    ne(w, (M) => {
      a.onContentChange(M);
    }), Nt(() => {
      window.clearTimeout(c.value);
    });
    function A(M) {
      var q, b;
      return h.value === ((q = y.value) == null ? void 0 : q.side) && iv(M, (b = y.value) == null ? void 0 : b.area);
    }
    async function F(M) {
      var $;
      n("openAutoFocus", M), !M.defaultPrevented && (M.preventDefault(), ($ = w.value) == null || $.focus({
        preventScroll: !0
      }));
    }
    function H(M) {
      var L;
      if (M.defaultPrevented)
        return;
      const q = M.target.closest("[data-reka-menu-content]") === M.currentTarget, b = M.ctrlKey || M.altKey || M.metaKey, E = M.key.length === 1, k = H0(
        M,
        Ye(),
        w.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: o == null ? void 0 : o.dir.value,
          focus: !0,
          attributeName: "[data-reka-collection-item]:not([data-disabled])"
        }
      );
      if (k)
        return k == null ? void 0 : k.focus();
      if (M.code === "Space")
        return;
      const x = ((L = f.value) == null ? void 0 : L.getItems()) ?? [];
      if (q && (M.key === "Tab" && M.preventDefault(), !b && E && O(M.key, x)), M.target !== w.value || !av.includes(M.key))
        return;
      M.preventDefault();
      const W = [...x.map((_) => _.ref)];
      Xd.includes(M.key) && W.reverse(), ov(W);
    }
    function C(M) {
      var $, q;
      (q = ($ = M == null ? void 0 : M.currentTarget) == null ? void 0 : $.contains) != null && q.call($, M.target) || (window.clearTimeout(c.value), l.value = "");
    }
    function K(M) {
      var b;
      if (!Ns(M))
        return;
      const $ = M.target, q = v.value !== M.clientX;
      if ((b = M == null ? void 0 : M.currentTarget) != null && b.contains($) && q) {
        const E = M.clientX > v.value ? "right" : "left";
        h.value = E, v.value = M.clientX;
      }
    }
    return ib({
      onItemEnter: (M) => !!A(M),
      onItemLeave: (M) => {
        var $;
        A(M) || (($ = w.value) == null || $.focus(), m.value = null);
      },
      onTriggerLeave: (M) => !!A(M),
      searchRef: l,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (M) => {
        y.value = M;
      }
    }), (M, $) => (S(), U(g(Zd), {
      "as-child": "",
      trapped: g(s),
      onMountAutoFocus: F,
      onUnmountAutoFocus: $[7] || ($[7] = (q) => n("closeAutoFocus", q))
    }, {
      default: I(() => [
        J(g(Ni), {
          "as-child": "",
          "disable-outside-pointer-events": g(i),
          onEscapeKeyDown: $[2] || ($[2] = (q) => n("escapeKeyDown", q)),
          onPointerDownOutside: $[3] || ($[3] = (q) => n("pointerDownOutside", q)),
          onFocusOutside: $[4] || ($[4] = (q) => n("focusOutside", q)),
          onInteractOutside: $[5] || ($[5] = (q) => n("interactOutside", q)),
          onDismiss: $[6] || ($[6] = (q) => n("dismiss"))
        }, {
          default: I(() => [
            J(g(Nv), {
              ref_key: "rovingFocusGroupRef",
              ref: f,
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": $[0] || ($[0] = (q) => m.value = q),
              "as-child": "",
              orientation: "vertical",
              dir: g(o).dir.value,
              loop: g(u),
              onEntryFocus: $[1] || ($[1] = (q) => {
                n("entryFocus", q), g(o).isUsingKeyboardRef.value || q.preventDefault();
              })
            }, {
              default: I(() => [
                J(g(ff), {
                  ref: g(p),
                  role: "menu",
                  as: M.as,
                  "as-child": M.asChild,
                  "aria-orientation": "vertical",
                  "data-reka-menu-content": "",
                  "data-state": g(Jd)(g(a).open.value),
                  dir: g(o).dir.value,
                  side: M.side,
                  "side-offset": M.sideOffset,
                  align: M.align,
                  "align-offset": M.alignOffset,
                  "avoid-collisions": M.avoidCollisions,
                  "collision-boundary": M.collisionBoundary,
                  "collision-padding": M.collisionPadding,
                  "arrow-padding": M.arrowPadding,
                  "prioritize-position": M.prioritizePosition,
                  "position-strategy": M.positionStrategy,
                  "update-position-strategy": M.updatePositionStrategy,
                  sticky: M.sticky,
                  "hide-when-detached": M.hideWhenDetached,
                  reference: M.reference,
                  onKeydown: H,
                  onBlur: C,
                  onPointermove: K
                }, {
                  default: I(() => [
                    V(M.$slots, "default")
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
}), lb = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, r = pf(), { forwardRef: n } = ce(), { CollectionItem: a } = sf(), o = N(!1);
    async function s(u) {
      if (!u.defaultPrevented && Ns(u)) {
        if (t.disabled)
          r.onItemLeave(u);
        else if (!r.onItemEnter(u)) {
          const c = u.currentTarget;
          c == null || c.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(u) {
      await Me(), !u.defaultPrevented && Ns(u) && r.onItemLeave(u);
    }
    return (u, l) => (S(), U(g(a), {
      value: { textValue: u.textValue }
    }, {
      default: I(() => [
        J(g(Fe), se({
          ref: g(n),
          role: "menuitem",
          tabindex: "-1"
        }, u.$attrs, {
          as: u.as,
          "as-child": u.asChild,
          "aria-disabled": u.disabled || void 0,
          "data-disabled": u.disabled ? "" : void 0,
          "data-highlighted": o.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: i,
          onFocus: l[0] || (l[0] = async (c) => {
            await Me(), !(c.defaultPrevented || u.disabled) && (o.value = !0);
          }),
          onBlur: l[1] || (l[1] = async (c) => {
            await Me(), !c.defaultPrevented && (o.value = !1);
          })
        }), {
          default: I(() => [
            V(u.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), ub = /* @__PURE__ */ z({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, n = t, { forwardRef: a, currentElement: o } = ce(), s = qi(), i = pf(), u = N(!1);
    async function l() {
      const c = o.value;
      if (!r.disabled && c) {
        const d = new CustomEvent(rv, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", d), await Me(), d.defaultPrevented ? u.value = !1 : s.onClose();
      }
    }
    return (c, d) => (S(), U(lb, se(r, {
      ref: g(a),
      onClick: l,
      onPointerdown: d[0] || (d[0] = () => {
        u.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (y) => {
        var h;
        await Me(), !y.defaultPrevented && (u.value || (h = y.currentTarget) == null || h.click());
      }),
      onKeydown: d[2] || (d[2] = async (y) => {
        const h = g(i).searchRef.value !== "";
        c.disabled || h && y.key === " " || g(Ms).includes(y.key) && (y.currentTarget.click(), y.preventDefault());
      })
    }), {
      default: I(() => [
        V(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cb = /* @__PURE__ */ z({
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
    const r = e, n = t, a = Cn(r, n), o = _a(), { forwardRef: s, currentElement: i } = ce();
    return rf(i), (u, l) => (S(), U(mf, se(g(a), {
      ref: g(s),
      "trap-focus": g(o).open.value,
      "disable-outside-pointer-events": g(o).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (c) => g(o).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = mt((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: I(() => [
        V(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), db = /* @__PURE__ */ z({
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
    const a = Cn(e, t), o = _a();
    return (s, i) => (S(), U(mf, se(g(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (u) => g(o).onOpenChange(!1))
    }), {
      default: I(() => [
        V(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fb = /* @__PURE__ */ z({
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
    const a = Cn(e, t), o = _a(), s = qi();
    return (i, u) => (S(), U(g(kn), {
      present: i.forceMount || g(o).open.value
    }, {
      default: I(() => [
        g(s).modal.value ? (S(), U(cb, Ee(se({ key: 0 }, { ...i.$attrs, ...g(a) })), {
          default: I(() => [
            V(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (S(), U(db, Ee(se({ key: 1 }, { ...i.$attrs, ...g(a) })), {
          default: I(() => [
            V(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), pb = /* @__PURE__ */ z({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (r, n) => (S(), U(g(ji), Ee(Re(t)), {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mb = /* @__PURE__ */ z({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (S(), U(g(Fe), se(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), hb = /* @__PURE__ */ z({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (S(), U(g(cf), Ee(Re(t)), {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yb = /* @__PURE__ */ z({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (r, n) => (S(), U(g(ji), Ee(Re(t)), {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [hf, gb] = ot("DropdownMenuRoot"), yf = /* @__PURE__ */ z({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, n = t;
    ce();
    const a = wr(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), o = N(), { modal: s, dir: i } = Pt(r), u = Ii(i);
    return gb({
      open: a,
      onOpenChange: (l) => {
        a.value = l;
      },
      onOpenToggle: () => {
        a.value = !a.value;
      },
      triggerId: "",
      triggerElement: o,
      contentId: "",
      modal: s,
      dir: u
    }), (l, c) => (S(), U(g(ob), {
      open: g(a),
      "onUpdate:open": c[0] || (c[0] = (d) => Wt(a) ? a.value = d : null),
      dir: g(u),
      modal: g(s)
    }, {
      default: I(() => [
        V(l.$slots, "default", { open: g(a) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), gf = /* @__PURE__ */ z({
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
    const a = Cn(e, t);
    ce();
    const o = hf(), s = N(!1);
    function i(u) {
      u.defaultPrevented || (s.value || setTimeout(() => {
        var l;
        (l = o.triggerElement.value) == null || l.focus();
      }, 0), s.value = !1, u.preventDefault());
    }
    return o.contentId || (o.contentId = hr(void 0, "reka-dropdown-menu-content")), (u, l) => {
      var c;
      return S(), U(g(fb), se(g(a), {
        id: g(o).contentId,
        "aria-labelledby": (c = g(o)) == null ? void 0 : c.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: l[0] || (l[0] = (d) => {
          var m;
          if (d.defaultPrevented) return;
          const y = d.detail.originalEvent, h = y.button === 0 && y.ctrlKey === !0, v = y.button === 2 || h;
          (!g(o).modal.value || v) && (s.value = !0), (m = g(o).triggerElement.value) != null && m.contains(d.target) && d.preventDefault();
        })
      }), {
        default: I(() => [
          V(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), vb = /* @__PURE__ */ z({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, a = On(t);
    return ce(), (o, s) => (S(), U(g(ub), Ee(Re({ ...r, ...g(a) })), {
      default: I(() => [
        V(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vf = /* @__PURE__ */ z({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (r, n) => (S(), U(g(pb), Ee(Re(t)), {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bb = /* @__PURE__ */ z({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return ce(), (r, n) => (S(), U(g(mb), Ee(Re(t)), {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bf = /* @__PURE__ */ z({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, r = hf(), { forwardRef: n, currentElement: a } = ce();
    return ye(() => {
      r.triggerElement = a;
    }), r.triggerId || (r.triggerId = hr(void 0, "reka-dropdown-menu-trigger")), (o, s) => (S(), U(g(hb), { "as-child": "" }, {
      default: I(() => [
        J(g(Fe), {
          id: g(r).triggerId,
          ref: g(n),
          type: o.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: o.as,
          "aria-haspopup": "menu",
          "aria-expanded": g(r).open.value,
          "aria-controls": g(r).open.value ? g(r).contentId : void 0,
          "data-disabled": o.disabled ? "" : void 0,
          disabled: o.disabled,
          "data-state": g(r).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var u;
            !o.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = g(r)) == null || u.onOpenToggle(), await Me(), g(r).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = Gt(
            (i) => {
              o.disabled || (["Enter", " "].includes(i.key) && g(r).onOpenToggle(), i.key === "ArrowDown" && g(r).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: I(() => [
            V(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
function wb(e, t) {
  const r = Ud(!1, 300), n = N(null), a = $0();
  function o() {
    n.value = null, r.value = !1;
  }
  function s(i, u) {
    const l = i.currentTarget, c = { x: i.clientX, y: i.clientY }, d = Sb(c, l.getBoundingClientRect()), y = xb(c, d), h = kb(u.getBoundingClientRect()), v = Cb([...y, ...h]);
    n.value = v, r.value = !0;
  }
  return ut((i) => {
    if (e.value && t.value) {
      const u = (c) => s(c, t.value), l = (c) => s(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", l), i(() => {
        var c, d;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (d = t.value) == null || d.removeEventListener("pointerleave", l);
      });
    }
  }), ut((i) => {
    var u;
    if (n.value) {
      const l = (c) => {
        var f, p;
        if (!n.value || !(c.target instanceof HTMLElement))
          return;
        const d = c.target, y = { x: c.clientX, y: c.clientY }, h = ((f = e.value) == null ? void 0 : f.contains(d)) || ((p = t.value) == null ? void 0 : p.contains(d)), v = !Ob(y, n.value), m = !!d.closest("[data-grace-area-trigger]");
        h ? o() : (v || m) && (o(), a.trigger());
      };
      (u = e.value) == null || u.ownerDocument.addEventListener("pointermove", l), i(() => {
        var c;
        return (c = e.value) == null ? void 0 : c.ownerDocument.removeEventListener("pointermove", l);
      });
    }
  }), {
    isPointerInTransit: r,
    onPointerExit: a.on
  };
}
function Sb(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), a = Math.abs(t.right - e.x), o = Math.abs(t.left - e.x);
  switch (Math.min(r, n, a, o)) {
    case o:
      return "left";
    case a:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function xb(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function kb(e) {
  const { top: t, right: r, bottom: n, left: a } = e;
  return [
    { x: a, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: a, y: n }
  ];
}
function Ob(e, t) {
  const { x: r, y: n } = e;
  let a = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const i = t[o].x, u = t[o].y, l = t[s].x, c = t[s].y;
    u > n != c > n && r < (l - i) * (n - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Cb(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Eb(t);
}
function Eb(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1], s = t[t.length - 2];
      if ((o.x - s.x) * (a.y - s.y) >= (o.y - s.y) * (a.x - s.x))
        t.pop();
      else break;
    }
    t.push(a);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const a = e[n];
    for (; r.length >= 2; ) {
      const o = r[r.length - 1], s = r[r.length - 2];
      if ((o.x - s.x) * (a.y - s.y) >= (o.y - s.y) * (a.x - s.x))
        r.pop();
      else break;
    }
    r.push(a);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
const [Ab, Pb] = ot("SwitchRoot"), $b = /* @__PURE__ */ z({
  __name: "SwitchRoot",
  props: {
    defaultValue: { type: Boolean },
    modelValue: { type: [Boolean, null], default: void 0 },
    disabled: { type: Boolean },
    id: {},
    value: { default: "on" },
    asChild: { type: Boolean },
    as: { default: "button" },
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, { disabled: a } = Pt(r), o = wr(r, "modelValue", n, {
      defaultValue: r.defaultValue,
      passive: r.modelValue === void 0
    });
    function s() {
      a.value || (o.value = !o.value);
    }
    const { forwardRef: i, currentElement: u } = ce(), l = Fv(u), c = T(() => {
      var d;
      return r.id && u.value ? (d = document.querySelector(`[for="${r.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return Pb({
      modelValue: o,
      toggleCheck: s,
      disabled: a
    }), (d, y) => (S(), U(g(Fe), se(d.$attrs, {
      id: d.id,
      ref: g(i),
      role: "switch",
      type: d.as === "button" ? "button" : void 0,
      value: d.value,
      "aria-label": d.$attrs["aria-label"] || c.value,
      "aria-checked": g(o),
      "aria-required": d.required,
      "data-state": g(o) ? "checked" : "unchecked",
      "data-disabled": g(a) ? "" : void 0,
      "as-child": d.asChild,
      as: d.as,
      disabled: g(a),
      onClick: s,
      onKeydown: Gt(mt(s, ["prevent"]), ["enter"])
    }), {
      default: I(() => [
        V(d.$slots, "default", { modelValue: g(o) }),
        g(l) && d.name ? (S(), U(g(jv), {
          key: 0,
          type: "checkbox",
          name: d.name,
          disabled: g(a),
          required: d.required,
          value: d.value,
          checked: !!g(o)
        }, null, 8, ["name", "disabled", "required", "value", "checked"])) : X("", !0)
      ]),
      _: 3
    }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]));
  }
}), Tb = /* @__PURE__ */ z({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = Ab();
    return ce(), (r, n) => {
      var a;
      return S(), U(g(Fe), {
        "data-state": (a = g(t).modelValue) != null && a.value ? "checked" : "unchecked",
        "data-disabled": g(t).disabled.value ? "" : void 0,
        "as-child": r.asChild,
        as: r.as
      }, {
        default: I(() => [
          V(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), Db = /* @__PURE__ */ z({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return ce(), (r, n) => (S(), U(g(Jv), Ee(Re(t)), {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wf = "tooltip.open", [Vi, Rb] = ot("TooltipProvider"), _b = /* @__PURE__ */ z({
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
    const t = e, { delayDuration: r, skipDelayDuration: n, disableHoverableContent: a, disableClosingTrigger: o, ignoreNonKeyboardFocus: s, disabled: i } = Pt(t);
    ce();
    const u = N(!0), l = N(!1), { start: c, stop: d } = Hd(() => {
      u.value = !0;
    }, n, { immediate: !1 });
    return Rb({
      isOpenDelayed: u,
      delayDuration: r,
      onOpen() {
        d(), u.value = !1;
      },
      onClose() {
        c();
      },
      isPointerInTransitRef: l,
      disableHoverableContent: a,
      disableClosingTrigger: o,
      disabled: i,
      ignoreNonKeyboardFocus: s
    }), (y, h) => V(y.$slots, "default");
  }
}), [Fa, Fb] = ot("TooltipRoot"), Ib = /* @__PURE__ */ z({
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
    const r = e, n = t;
    ce();
    const a = Vi(), o = T(() => r.disableHoverableContent ?? a.disableHoverableContent.value), s = T(() => r.disableClosingTrigger ?? a.disableClosingTrigger.value), i = T(() => r.disabled ?? a.disabled.value), u = T(() => r.delayDuration ?? a.delayDuration.value), l = T(() => r.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = wr(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    });
    ne(c, (O) => {
      a.onClose && (O ? (a.onOpen(), document.dispatchEvent(new CustomEvent(wf))) : a.onClose());
    });
    const d = N(!1), y = N(), h = T(() => c.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: v, stop: m } = Hd(() => {
      d.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function f() {
      m(), d.value = !1, c.value = !0;
    }
    function p() {
      m(), c.value = !1;
    }
    function w() {
      v();
    }
    return Fb({
      contentId: "",
      open: c,
      stateAttribute: h,
      trigger: y,
      onTriggerChange(O) {
        y.value = O;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? w() : f();
      },
      onTriggerLeave() {
        o.value ? p() : m();
      },
      onOpen: f,
      onClose: p,
      disableHoverableContent: o,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (O, A) => (S(), U(g(uf), null, {
      default: I(() => [
        V(O.$slots, "default", { open: g(c) })
      ]),
      _: 3
    }));
  }
}), Sf = /* @__PURE__ */ z({
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
    const r = e, n = t, a = Fa(), { forwardRef: o } = ce(), s = dm(), i = T(() => {
      var c;
      return (c = s.default) == null ? void 0 : c.call(s, {});
    }), u = T(() => {
      var y;
      if (r.ariaLabel)
        return r.ariaLabel;
      let c = "";
      function d(h) {
        typeof h.children == "string" && h.type !== jc ? c += h.children : Array.isArray(h.children) && h.children.forEach((v) => d(v));
      }
      return (y = i.value) == null || y.forEach((h) => d(h)), c;
    }), l = T(() => {
      const { ariaLabel: c, ...d } = r;
      return d;
    });
    return ye(() => {
      mr(window, "scroll", (c) => {
        const d = c.target;
        d != null && d.contains(a.trigger.value) && a.onClose();
      }), mr(window, wf, a.onClose);
    }), (c, d) => (S(), U(g(Ni), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: d[0] || (d[0] = (y) => n("escapeKeyDown", y)),
      onPointerDownOutside: d[1] || (d[1] = (y) => {
        var h;
        g(a).disableClosingTrigger.value && ((h = g(a).trigger.value) != null && h.contains(y.target)) && y.preventDefault(), n("pointerDownOutside", y);
      }),
      onFocusOutside: d[2] || (d[2] = mt(() => {
      }, ["prevent"])),
      onDismiss: d[3] || (d[3] = (y) => g(a).onClose())
    }, {
      default: I(() => [
        J(g(ff), se({
          ref: g(o),
          "data-state": g(a).stateAttribute.value
        }, { ...c.$attrs, ...l.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: I(() => [
            V(c.$slots, "default"),
            J(g(Vd), {
              id: g(a).contentId,
              role: "tooltip"
            }, {
              default: I(() => [
                fe(Z(u.value), 1)
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
}), Bb = /* @__PURE__ */ z({
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
    const r = of(e), { forwardRef: n, currentElement: a } = ce(), { trigger: o, onClose: s } = Fa(), i = Vi(), { isPointerInTransit: u, onPointerExit: l } = wb(o, a);
    return i.isPointerInTransitRef = u, l(() => {
      s();
    }), (c, d) => (S(), U(Sf, se({ ref: g(n) }, g(r)), {
      default: I(() => [
        V(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lb = /* @__PURE__ */ z({
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
    const r = e, n = t, a = Fa(), o = Cn(r, n), { forwardRef: s } = ce();
    return (i, u) => (S(), U(g(kn), {
      present: i.forceMount || g(a).open.value
    }, {
      default: I(() => [
        (S(), U(Xn(g(a).disableHoverableContent.value ? Sf : Bb), se({ ref: g(s) }, g(o)), {
          default: I(() => [
            V(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Mb = /* @__PURE__ */ z({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (r, n) => (S(), U(g(ji), Ee(Re(t)), {
      default: I(() => [
        V(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nb = /* @__PURE__ */ z({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, r = Fa(), n = Vi();
    r.contentId || (r.contentId = hr(void 0, "reka-tooltip-content"));
    const { forwardRef: a, currentElement: o } = ce(), s = N(!1), i = N(!1), u = T(() => r.disabled.value ? {} : {
      click: m,
      focus: h,
      pointermove: d,
      pointerleave: y,
      pointerdown: c,
      blur: v
    });
    ye(() => {
      r.onTriggerChange(o.value);
    });
    function l() {
      setTimeout(() => {
        s.value = !1;
      }, 1);
    }
    function c() {
      r.open && r.onClose(), s.value = !0, document.addEventListener("pointerup", l, { once: !0 });
    }
    function d(f) {
      f.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (r.onTriggerEnter(), i.value = !0);
    }
    function y() {
      r.onTriggerLeave(), i.value = !1;
    }
    function h(f) {
      var p, w;
      s.value || r.ignoreNonKeyboardFocus.value && !((w = (p = f.target).matches) != null && w.call(p, ":focus-visible")) || r.onOpen();
    }
    function v() {
      r.onClose();
    }
    function m() {
      r.disableClosingTrigger.value || r.onClose();
    }
    return (f, p) => (S(), U(g(cf), {
      "as-child": "",
      reference: f.reference
    }, {
      default: I(() => [
        J(g(Fe), se({
          ref: g(a),
          "aria-describedby": g(r).open.value ? g(r).contentId : void 0,
          "data-state": g(r).stateAttribute.value,
          as: f.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Gc(u.value)), {
          default: I(() => [
            V(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), jb = { class: "flex items-center" }, qb = {
  key: 1,
  class: "mr-1"
}, Vb = {
  key: 3,
  class: "ml-1"
}, zb = /* @__PURE__ */ z({
  __name: "Switch",
  props: /* @__PURE__ */ gt({
    form: {},
    field: {},
    label: {},
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    noLabel: { type: Boolean, default: !1 },
    tooltip: {},
    modelValue: { type: Boolean },
    name: {},
    sublabel: {},
    leftDescription: { type: [String, Boolean], default: !1 },
    rightDescription: { type: [String, Boolean], default: "Enable" },
    customClass: { default: "" },
    labelCustomClass: { default: "" },
    error: {}
  }, {
    modelValue: { type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ gt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r;
    function o(m) {
      return m.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = N(!1), i = zr(e, "modelValue"), u = N(!1), l = N(!1), c = N(!1);
    ye(() => {
      var f;
      s.value = !n.form;
      const m = s.value ? !!i.value : !!((f = n.form) != null && f[n.field]);
      u.value = m, l.value = m;
    }), ne(
      () => u.value,
      (m, f) => {
        if (m !== f) {
          if (s.value ? i.value = m : n.form && n.field && (n.form[n.field] = m), l.value = f, a("update:modelValue", m), c.value) {
            c.value = !1;
            return;
          }
          a("changed", { value: m, old_value: f });
        }
      }
    ), ne(
      () => n.field && n.form ? n.form[n.field] : null,
      (m) => {
        u.value = s.value ? !!i.value : !!m;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (m) => {
        u.value = !!m;
      }
    );
    const d = T(() => n.label || (n.field ? o(n.field) : "")), y = T(() => {
      var m, f;
      return n.error || ((f = (m = n.form) == null ? void 0 : m.errors) == null ? void 0 : f[n.field]);
    });
    return t({
      setValueSilently: (m) => {
        u.value = !!m, c.value = !0;
      },
      getPreviousValue: () => l.value
    }), (m, f) => {
      var p, w;
      return S(), P("div", {
        class: Q(m.noLabel ? "mb-2" : "mb-4")
      }, [
        m.noLabel ? X("", !0) : (S(), U(g(Hr), {
          key: 0,
          customClass: m.labelCustomClass,
          for: m.field,
          value: d.value,
          sublabel: m.sublabel,
          required: m.required,
          tooltip: m.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        R("label", jb, [
          (p = m.$slots) != null && p.leftDescription ? V(m.$slots, "leftDescription", { key: 0 }) : m.leftDescription ? (S(), P("span", qb, Z(m.leftDescription === !0 ? "Disable" : m.leftDescription), 1)) : X("", !0),
          J(g($b), {
            id: m.field,
            checked: u.value,
            "onUpdate:checked": f[0] || (f[0] = (O) => u.value = O),
            name: m.name || m.field,
            required: m.required,
            disabled: m.disabled,
            "aria-label": d.value || void 0,
            class: Q(["focus-visible:ring-primary data-[state=checked]:bg-primary relative mx-2 ml-0 inline-flex h-6 w-12 flex-none cursor-pointer items-center rounded-xl bg-gray-300 shadow transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50", m.customClass])
          }, {
            default: I(() => [
              J(g(Tb), { class: "pointer-events-none block h-[1.25rem] w-[1.25rem] translate-x-[0.125rem] rounded-full bg-white shadow transition-transform duration-150 will-change-transform data-[state=checked]:translate-x-[1.625rem]" })
            ]),
            _: 1
          }, 8, ["id", "checked", "name", "required", "disabled", "aria-label", "class"]),
          (w = m.$slots) != null && w.rightDescription ? V(m.$slots, "rightDescription", { key: 2 }) : m.rightDescription ? (S(), P("span", Vb, Z(m.rightDescription === !0 ? "Enable" : m.rightDescription), 1)) : X("", !0)
        ]),
        y.value ? (S(), U(g(rr), {
          key: 1,
          message: y.value,
          class: "mt-2"
        }, null, 8, ["message"])) : X("", !0)
      ], 2);
    };
  }
}), Ub = ["id", "required", "disabled", "name"], Hb = ["selected"], Wb = ["value", "disabled"], S4 = /* @__PURE__ */ z({
  __name: "Select",
  props: /* @__PURE__ */ gt({
    form: {},
    field: {},
    label: {},
    options: { default: () => [] },
    placeholder: { default: "" },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    noLabel: { type: Boolean, default: !1 },
    tooltip: {},
    modelValue: {},
    name: {},
    sublabel: {},
    customClass: { default: "" },
    labelCustomClass: { default: "" },
    error: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ gt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r;
    function o(f) {
      return f.split("_").join(" ").split(" ").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
    }
    const s = N(!1), i = zr(e, "modelValue"), u = N(), l = N(), c = N(!1);
    ye(() => {
      var f;
      s.value = !n.form, u.value = s.value ? i.value : (f = n.form) == null ? void 0 : f[n.field];
    }), ne(
      () => u.value,
      (f, p) => {
        if (f !== p) {
          if (s.value ? i.value = f : n.form && n.field && (n.form[n.field] = f), l.value = p, a("update:modelValue", f), c.value) {
            c.value = !1;
            return;
          }
          a("changed", { value: f, old_value: p });
        }
      }
    ), ne(
      () => n.field && n.form ? n.form[n.field] : null,
      (f) => {
        u.value = s.value ? i.value : f;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (f) => {
        u.value = f;
      }
    );
    const d = T(() => n.options ? n.options.map((f) => typeof f == "string" ? { value: f, label: f, disabled: !1 } : {
      value: f.value,
      label: f.label || String(f.value),
      disabled: f.disabled || !1
    }) : []), y = T(() => n.label || (n.field ? o(n.field) : "")), h = T(() => {
      var f, p;
      return n.error || ((p = (f = n.form) == null ? void 0 : f.errors) == null ? void 0 : p[n.field]);
    });
    return t({
      setValueSilently: (f) => {
        u.value = f, c.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, p) => (S(), U(g(li), {
      field: f.field,
      label: y.value,
      sublabel: f.sublabel,
      tooltip: f.tooltip,
      required: f.required,
      noLabel: f.noLabel,
      labelCustomClass: f.labelCustomClass,
      form: f.form,
      error: h.value,
      htmlFor: f.field
    }, {
      default: I(() => [
        tt(R("select", {
          id: f.field,
          "onUpdate:modelValue": p[0] || (p[0] = (w) => u.value = w),
          required: f.required,
          disabled: f.disabled,
          name: f.name || f.field,
          class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500 dark:[&>option]:bg-gray-800 dark:[&>option]:text-gray-100", f.customClass])
        }, [
          f.placeholder ? (S(), P("option", {
            key: 0,
            value: "",
            disabled: "",
            selected: !u.value,
            class: "text-gray-500 dark:text-gray-400"
          }, Z(f.placeholder), 9, Hb)) : X("", !0),
          (S(!0), P(oe, null, ke(d.value, (w) => (S(), P("option", {
            key: w.value,
            value: w.value,
            disabled: w.disabled
          }, Z(w.label), 9, Wb))), 128)),
          V(f.$slots, "default")
        ], 10, Ub), [
          [Lc, u.value]
        ])
      ]),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Kb = ["id", "disabled"], Gb = { class: "flex flex-wrap gap-1" }, Yb = ["onClick"], Xb = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, Jb = { class: "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/40" }, Qb = {
  key: 0,
  class: "border-b border-gray-200 dark:border-gray-700 p-2"
}, Zb = { class: "relative" }, e1 = {
  key: 1,
  class: "flex items-center justify-center p-4"
}, t1 = {
  key: 2,
  class: "max-h-60 overflow-auto"
}, r1 = {
  key: 0,
  class: "bg-gray-50 dark:bg-gray-900/40 px-3 py-2 text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase"
}, n1 = ["onClick", "disabled"], a1 = { class: "block truncate" }, o1 = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, s1 = ["onClick", "disabled"], i1 = { class: "block truncate" }, l1 = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, u1 = {
  key: 2,
  class: "px-3 py-2 text-center text-sm text-gray-500 dark:text-gray-400"
}, x4 = /* @__PURE__ */ z({
  __name: "RichSelect",
  props: {
    form: { default: void 0 },
    field: { default: void 0 },
    label: { default: void 0 },
    options: { default: () => [] },
    placeholder: { default: "Select an option..." },
    multiple: { type: Boolean, default: !1 },
    searchable: { type: Boolean, default: !1 },
    apiSearch: { type: Boolean, default: !1 },
    apiUrl: { default: void 0 },
    apiSearchParam: { default: "q" },
    apiTransform: { type: Function, default: (e) => e },
    grouping: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    minSearchLength: { default: 2 },
    searchDelay: { default: 300 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    noLabel: { type: Boolean, default: !1 },
    tooltip: { default: void 0 },
    modelValue: { default: void 0 },
    optionValue: { default: "value" },
    optionLabel: { default: "label" },
    optionGroup: { default: "group" },
    customClass: { default: "" }
  },
  emits: ["update:modelValue", "search", "optionsLoaded"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = N(!1), o = N(""), s = N(!1), i = N(null), u = N([...r.options]), l = N(), c = N(), d = T({
      get() {
        return r.modelValue !== void 0 ? r.modelValue : r.form && r.field ? r.form[r.field] : r.multiple ? [] : void 0;
      },
      set(x) {
        r.modelValue !== void 0 ? n("update:modelValue", x) : r.form && r.field && (r.form[r.field] = x);
      }
    }), y = (x) => x[r.optionValue], h = (x) => x[r.optionLabel], v = (x) => x[r.optionGroup], m = T(() => {
      var x;
      if ((x = r.form) != null && x.errors && r.field)
        return r.form.errors[r.field];
    }), f = T(() => r.label ? r.label : r.field ? r.field.split("_").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ") : ""), p = T(() => r.field || `select-${Math.random().toString(36).substr(2, 9)}`), w = T(() => {
      if (!r.searchable || !o.value)
        return u.value;
      const x = o.value.toLowerCase();
      return u.value.filter((W) => h(W).toLowerCase().includes(x));
    }), O = T(() => {
      if (!r.grouping)
        return { ungrouped: w.value };
      const x = {};
      return w.value.forEach((W) => {
        const L = v(W) || "ungrouped";
        x[L] || (x[L] = []), x[L].push(W);
      }), x;
    }), A = T(() => {
      if (!d.value) return [];
      const x = r.multiple ? d.value : [d.value];
      return u.value.filter((W) => x.includes(y(W)));
    }), F = T(() => A.value.length ? r.multiple ? A.value.map((x) => h(x)).join(", ") : h(A.value[0]) : r.placeholder), H = async (x) => {
      if (!(!r.apiSearch || !r.apiUrl)) {
        s.value = !0;
        try {
          const W = new URL(r.apiUrl);
          W.searchParams.set(r.apiSearchParam, x);
          const _ = await (await fetch(W.toString())).json(), G = r.apiTransform ? r.apiTransform(_) : _;
          u.value = G, n("optionsLoaded", G);
        } catch (W) {
          console.error("API search error:", W);
        } finally {
          s.value = !1;
        }
      }
    }, C = (x) => {
      o.value = x, n("search", x), r.apiSearch && x.length >= r.minSearchLength && (i.value && clearTimeout(i.value), i.value = setTimeout(() => {
        H(x);
      }, r.searchDelay));
    }, K = (x) => {
      if (x.disabled) return;
      const W = y(x);
      if (r.multiple) {
        const L = d.value || [], _ = L.indexOf(W);
        _ > -1 ? d.value = L.filter((G, re) => re !== _) : d.value = [...L, W];
      } else
        d.value = W, a.value = !1;
    }, M = (x, W) => {
      if (W.stopPropagation(), r.multiple) {
        const L = y(x);
        d.value = d.value.filter((_) => _ !== L);
      }
    }, $ = (x) => {
      x.stopPropagation(), d.value = r.multiple ? [] : void 0;
    }, q = (x) => {
      const W = y(x);
      return r.multiple ? (d.value || []).includes(W) : d.value === W;
    }, b = () => {
      r.disabled || (a.value = !a.value, a.value && r.searchable && Me(() => {
        var x;
        (x = c.value) == null || x.focus();
      }));
    }, E = (x) => {
      l.value && !l.value.contains(x.target) && (a.value = !1);
    };
    return ne(
      () => r.options,
      (x) => {
        u.value = [...x];
      },
      { immediate: !0 }
    ), ye(() => {
      document.addEventListener("click", E);
    }), Nt(() => {
      document.removeEventListener("click", E), i.value && clearTimeout(i.value);
    }), (x, W) => (S(), U(g(li), {
      field: x.field,
      label: f.value,
      tooltip: x.tooltip,
      required: x.required,
      noLabel: x.noLabel,
      form: x.form,
      error: m.value,
      htmlFor: p.value
    }, {
      default: I(() => [
        R("div", {
          class: "relative",
          ref_key: "dropdownRef",
          ref: l
        }, [
          R("button", {
            type: "button",
            id: p.value,
            onClick: b,
            disabled: x.disabled,
            class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left text-gray-900 shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500", [
              x.customClass,
              {
                "border-red-500 focus:border-red-500 focus:ring-red-500": m.value,
                "border-primary-500 ring-primary-500 ring-2": a.value
              }
            ]])
          }, [
            R("div", Gb, [
              x.multiple && A.value.length ? (S(!0), P(oe, { key: 0 }, ke(A.value, (L) => (S(), P("span", {
                key: y(L),
                class: "bg-primary-100 text-primary-800 inline-flex items-center gap-1 rounded px-2 py-1 text-xs dark:bg-primary-900/50 dark:text-primary-100"
              }, [
                fe(Z(h(L)) + " ", 1),
                R("button", {
                  type: "button",
                  onClick: (_) => M(L, _),
                  class: "hover:text-primary-600 transition-colors"
                }, [
                  J(g(_e), {
                    icon: g(la),
                    class: "h-3 w-3"
                  }, null, 8, ["icon"])
                ], 8, Yb)
              ]))), 128)) : (S(), P("span", {
                key: 1,
                class: Q(["block truncate", { "text-gray-500 dark:text-gray-400": !A.value.length }])
              }, Z(F.value), 3))
            ]),
            x.clearable && A.value.length ? (S(), P("button", {
              key: 0,
              type: "button",
              onClick: $,
              class: "absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 transition-colors hover:text-gray-600"
            }, [
              J(g(_e), {
                icon: g(la),
                class: "h-4 w-4"
              }, null, 8, ["icon"])
            ])) : X("", !0),
            R("div", Xb, [
              J(g(_e), {
                icon: g(ci),
                class: Q(["h-4 w-4 text-gray-400 transition-transform duration-200", { "rotate-180": a.value }])
              }, null, 8, ["icon", "class"])
            ])
          ], 10, Kb),
          J(ur, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "opacity-0 scale-95",
            "enter-to-class": "opacity-100 scale-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "opacity-100 scale-100",
            "leave-to-class": "opacity-0 scale-95"
          }, {
            default: I(() => [
              tt(R("div", Jb, [
                x.searchable ? (S(), P("div", Qb, [
                  R("div", Zb, [
                    J(g(_e), {
                      icon: g(Dm),
                      class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                    }, null, 8, ["icon"]),
                    tt(R("input", {
                      ref_key: "searchInputRef",
                      ref: c,
                      type: "text",
                      "onUpdate:modelValue": W[0] || (W[0] = (L) => o.value = L),
                      onInput: W[1] || (W[1] = (L) => C(o.value)),
                      placeholder: "Search options...",
                      class: "focus:border-primary-500 focus:ring-primary-500 w-full rounded border border-gray-300 py-2 pr-3 pl-10 text-sm focus:ring-2 focus:ring-offset-0 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500"
                    }, null, 544), [
                      [Mc, o.value]
                    ])
                  ])
                ])) : X("", !0),
                s.value ? (S(), P("div", e1, [
                  J(g(tl), { class: "h-5 w-5" }),
                  W[2] || (W[2] = R("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-400" }, "Loading...", -1))
                ])) : (S(), P("div", t1, [
                  x.grouping ? (S(!0), P(oe, { key: 0 }, ke(O.value, (L, _) => (S(), P("div", { key: _ }, [
                    _ !== "ungrouped" ? (S(), P("div", r1, Z(_), 1)) : X("", !0),
                    (S(!0), P(oe, null, ke(L, (G) => (S(), P("button", {
                      key: y(G),
                      type: "button",
                      onClick: (re) => K(G),
                      disabled: G.disabled,
                      class: Q(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 dark:hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50", {
                        "bg-primary-100 text-primary-900 dark:bg-primary-900/40 dark:text-primary-100": q(G),
                        "text-gray-900 dark:text-gray-100": !q(G)
                      }])
                    }, [
                      R("span", a1, Z(h(G)), 1),
                      q(G) ? (S(), P("span", o1, " ✓ ")) : X("", !0)
                    ], 10, n1))), 128))
                  ]))), 128)) : (S(!0), P(oe, { key: 1 }, ke(w.value, (L) => (S(), P("button", {
                    key: y(L),
                    type: "button",
                    onClick: (_) => K(L),
                    disabled: L.disabled,
                    class: Q(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 dark:hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50", {
                      "bg-primary-100 text-primary-900 dark:bg-primary-900/40 dark:text-primary-100": q(L),
                      "text-gray-900 dark:text-gray-100": !q(L)
                    }])
                  }, [
                    R("span", i1, Z(h(L)), 1),
                    q(L) ? (S(), P("span", l1, "✓")) : X("", !0)
                  ], 10, s1))), 128)),
                  w.value.length ? X("", !0) : (S(), P("div", u1, "No options found"))
                ]))
              ], 512), [
                [lr, a.value]
              ])
            ]),
            _: 1
          })
        ], 512)
      ]),
      _: 1
    }, 8, ["field", "label", "tooltip", "required", "noLabel", "form", "error", "htmlFor"]));
  }
});
var c1 = Object.defineProperty, d1 = Object.defineProperties, f1 = Object.getOwnPropertyDescriptors, ou = Object.getOwnPropertySymbols, p1 = Object.prototype.hasOwnProperty, m1 = Object.prototype.propertyIsEnumerable, su = (e, t, r) => t in e ? c1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Tr = (e, t) => {
  for (var r in t || (t = {}))
    p1.call(t, r) && su(e, r, t[r]);
  if (ou)
    for (var r of ou(t))
      m1.call(t, r) && su(e, r, t[r]);
  return e;
}, iu = (e, t) => d1(e, f1(t));
const h1 = {
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
}, y1 = {
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
}, g1 = {
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
}, zi = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, v1 = {}, b1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, w1 = /* @__PURE__ */ R("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), S1 = [
  w1
];
function x1(e, t) {
  return S(), P("svg", b1, S1);
}
const k1 = /* @__PURE__ */ zi(v1, [["render", x1]]), O1 = {}, C1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, E1 = /* @__PURE__ */ R("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), A1 = [
  E1
];
function P1(e, t) {
  return S(), P("svg", C1, A1);
}
const $1 = /* @__PURE__ */ zi(O1, [["render", P1]]), lu = {
  Deselect: k1,
  OpenIndicator: $1
}, T1 = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: r,
        top: n,
        left: a,
        width: o
      } = t.$refs.toggle.getBoundingClientRect();
      let s = window.scrollX || window.pageXOffset, i = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: o + "px",
        left: s + a + "px",
        top: i + n + r + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function D1(e) {
  const t = {};
  return Object.keys(e).sort().forEach((r) => {
    t[r] = e[r];
  }), JSON.stringify(t);
}
let R1 = 0;
function _1() {
  return ++R1;
}
const F1 = {
  components: Tr({}, lu),
  directives: { appendToBody: T1 },
  mixins: [h1, y1, g1],
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
          return e.hasOwnProperty("id") ? e.id : D1(e);
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
      default: () => _1()
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
        header: iu(Tr({}, e), { deselect: this.deselect }),
        footer: iu(Tr({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Tr(Tr({}, lu), this.components);
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
}, I1 = ["dir"], B1 = ["id", "aria-expanded", "aria-owns"], L1 = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, M1 = ["disabled", "title", "aria-label", "onClick"], N1 = {
  ref: "actions",
  class: "vs__actions"
}, j1 = ["disabled"], q1 = { class: "vs__spinner" }, V1 = ["id"], z1 = ["id", "aria-selected", "onMouseover", "onClick"], U1 = {
  key: 0,
  class: "vs__no-options"
}, H1 = /* @__PURE__ */ fe(" Sorry, no matching options. "), W1 = ["id"];
function K1(e, t, r, n, a, o) {
  const s = fm("append-to-body");
  return S(), P("div", {
    dir: r.dir,
    class: Q(["v-select", o.stateClasses])
  }, [
    V(e.$slots, "header", Ee(Re(o.scope.header))),
    R("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": o.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (i) => o.toggleDropdown(i))
    }, [
      R("div", L1, [
        (S(!0), P(oe, null, ke(o.selectedValue, (i, u) => V(e.$slots, "selected-option-container", {
          option: o.normalizeOptionForSlot(i),
          deselect: o.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (S(), P("span", {
            key: r.getOptionKey(i),
            class: "vs__selected"
          }, [
            V(e.$slots, "selected-option", Ee(Re(o.normalizeOptionForSlot(i))), () => [
              fe(Z(r.getOptionLabel(i)), 1)
            ]),
            r.multiple ? (S(), P("button", {
              key: 0,
              ref_for: !0,
              ref: (l) => a.deselectButtons[u] = l,
              disabled: r.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${r.getOptionLabel(i)}`,
              "aria-label": `Deselect ${r.getOptionLabel(i)}`,
              onClick: (l) => o.deselect(i)
            }, [
              (S(), U(Xn(o.childComponents.Deselect)))
            ], 8, M1)) : X("", !0)
          ]))
        ])), 256)),
        V(e.$slots, "search", Ee(Re(o.scope.search)), () => [
          R("input", se({ class: "vs__search" }, o.scope.search.attributes, Gc(o.scope.search.events)), null, 16)
        ])
      ], 512),
      R("div", N1, [
        tt(R("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...i) => o.clearSelection && o.clearSelection(...i))
        }, [
          (S(), U(Xn(o.childComponents.Deselect)))
        ], 8, j1), [
          [lr, o.showClearButton]
        ]),
        V(e.$slots, "open-indicator", Ee(Re(o.scope.openIndicator)), () => [
          r.noDrop ? X("", !0) : (S(), U(Xn(o.childComponents.OpenIndicator), Ee(se({ key: 0 }, o.scope.openIndicator.attributes)), null, 16))
        ]),
        V(e.$slots, "spinner", Ee(Re(o.scope.spinner)), () => [
          tt(R("div", q1, "Loading...", 512), [
            [lr, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, B1),
    J(ur, { name: r.transition }, {
      default: I(() => [
        o.dropdownOpen ? tt((S(), P("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = mt((...i) => o.onMousedown && o.onMousedown(...i), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...i) => o.onMouseUp && o.onMouseUp(...i))
        }, [
          V(e.$slots, "list-header", Ee(Re(o.scope.listHeader))),
          (S(!0), P(oe, null, ke(o.filteredOptions, (i, u) => (S(), P("li", {
            id: `vs${r.uid}__option-${u}`,
            key: r.getOptionKey(i),
            role: "option",
            class: Q(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": o.isOptionDeselectable(i) && u === e.typeAheadPointer,
              "vs__dropdown-option--selected": o.isOptionSelected(i),
              "vs__dropdown-option--highlight": u === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(i)
            }]),
            "aria-selected": u === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => r.selectable(i) ? e.typeAheadPointer = u : null,
            onClick: mt((l) => r.selectable(i) ? o.select(i) : null, ["prevent", "stop"])
          }, [
            V(e.$slots, "option", Ee(Re(o.normalizeOptionForSlot(i))), () => [
              fe(Z(r.getOptionLabel(i)), 1)
            ])
          ], 42, z1))), 128)),
          o.filteredOptions.length === 0 ? (S(), P("li", U1, [
            V(e.$slots, "no-options", Ee(Re(o.scope.noOptions)), () => [
              H1
            ])
          ])) : X("", !0),
          V(e.$slots, "list-footer", Ee(Re(o.scope.listFooter)))
        ], 40, V1)), [
          [s]
        ]) : (S(), P("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, W1))
      ]),
      _: 3
    }, 8, ["name"]),
    V(e.$slots, "footer", Ee(Re(o.scope.footer)))
  ], 10, I1);
}
const G1 = /* @__PURE__ */ zi(F1, [["render", K1]]), k4 = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return $a.add(Rd), (t, r) => (S(), U(g(G1), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Rt = {
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
function Y1(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const xf = {
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
      default: (e, t) => e.match(Y1(t))
    }
  }
}, X1 = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, J1 = {
  name: "ModelSelect",
  mixins: [xf],
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
      Rt.openOptions(this);
    },
    blurInput() {
      Rt.blurInput(this);
    },
    closeOptions() {
      Rt.closeOptions(this);
    },
    prevItem() {
      Rt.prevItem(this);
    },
    nextItem() {
      Rt.nextItem(this);
    },
    enterItem() {
      Rt.enterItem(this);
    },
    pointerSet(e) {
      Rt.pointerSet(this, e);
    },
    pointerAdjust() {
      Rt.pointerAdjust(this);
    },
    mousedownItem() {
      Rt.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, Q1 = /* @__PURE__ */ R("i", { class: "dropdown icon" }, null, -1), Z1 = ["disabled", "tabindex", "id", "name", "value"], ew = ["data-vss-custom-attr"], tw = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function rw(e, t, r, n, a, o) {
  return S(), P("div", {
    class: Q(["ui fluid search selection dropdown", { "active visible": a.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => o.openOptions && o.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => o.openOptions && o.openOptions(...s))
  }, [
    Q1,
    R("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: a.searchText,
      onInput: t[0] || (t[0] = (s) => a.searchText = s.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = mt((...s) => o.openOptions && o.openOptions(...s), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = Gt((...s) => o.closeOptions && o.closeOptions(...s), ["esc"])),
        t[7] || (t[7] = Gt(mt((...s) => o.enterItem && o.enterItem(...s), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...s) => o.blurInput && o.blurInput(...s)),
      onKeydown: [
        t[4] || (t[4] = Gt((...s) => o.prevItem && o.prevItem(...s), ["up"])),
        t[5] || (t[5] = Gt((...s) => o.nextItem && o.nextItem(...s), ["down"])),
        t[6] || (t[6] = Gt(mt(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = Gt((...s) => o.deleteTextOrItem && o.deleteTextOrItem(...s), ["delete"]))
      ]
    }, null, 40, Z1),
    R("div", {
      class: Q(["text", o.textClass]),
      "data-vss-custom-attr": o.searchTextCustomAttr
    }, Z(o.inputText), 11, ew),
    R("div", {
      class: Q(["menu", o.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = mt(() => {
      }, ["prevent"])),
      style: rt(o.menuStyle),
      tabindex: "-1"
    }, [
      (S(!0), P(oe, null, ke(o.filteredOptions, (s, i) => (S(), P("div", {
        key: i,
        class: Q(["item", { selected: s.selected || a.pointer === i, disabled: s.disabled }]),
        "data-vss-custom-attr": o.customAttrs[i] ? o.customAttrs[i] : "",
        onClick: mt((u) => o.selectItem(s), ["stop"]),
        onMousedown: t[9] || (t[9] = (...u) => o.mousedownItem && o.mousedownItem(...u)),
        onMouseenter: (u) => o.pointerSet(i)
      }, [
        V(e.$slots, "default", {
          option: s,
          idx: i
        }, () => [
          fe(Z(s.text), 1)
        ])
      ], 42, tw))), 128))
    ], 38)
  ], 34);
}
const uu = /* @__PURE__ */ X1(J1, [["render", rw]]), cu = {
  name: "ModelListSelect",
  mixins: [xf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return Ue(uu, {
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
    ModelSelect: uu
  }
}, nw = {
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
      return a.split("_").join(" ").split(" ").map(function(s) {
        o.push(s[0].toUpperCase() + s.slice(1));
      }), o.join(" ");
    };
    return (a, o) => (S(), P("div", null, [
      !e.noLabel && (e.label || e.field) ? (S(), U(g(Hr), {
        key: 0,
        for: e.id ?? e.field,
        value: n(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : X("", !0),
      e.noForm ? (S(), U(g(cu), {
        key: 1,
        id: e.id ?? e.field,
        list: e.list,
        modelValue: e.modelValue,
        "option-value": e.optionValue,
        "option-text": e.optionText,
        "option-disabled": e.optionDisabled,
        placeholder: e.placeholder,
        class: "model-list relative! mt-0! max-w-full! rounded! border-gray-300! shadow! h-[42px]",
        "onUpdate:modelValue": o[0] || (o[0] = (s) => r("update:modelValue", s)),
        onSearchchange: o[1] || (o[1] = (s) => r("searchchange", s)),
        "is-disabled": e.disabled,
        filterPredicate: e.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (S(), P(oe, { key: 2 }, [
        J(g(cu), {
          id: e.id ?? e.field,
          list: e.list,
          modelValue: e.form[e.field],
          "onUpdate:modelValue": [
            o[2] || (o[2] = (s) => e.form[e.field] = s),
            o[3] || (o[3] = (s) => r("update:modelValue", s))
          ],
          "option-value": e.optionValue,
          "option-text": e.optionText,
          "option-disabled": e.optionDisabled,
          placeholder: e.placeholder,
          class: "model-list relative! mt-0! max-w-full! rounded! border-gray-300! px-3! shadow! h-[42px]",
          onSearchchange: o[4] || (o[4] = (s) => r("searchchange", s)),
          "is-disabled": e.disabled,
          filterPredicate: e.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        J(g(rr), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, aw = /* @__PURE__ */ Dd(nw, [["__scopeId", "data-v-c8f3c7c8"]]), O4 = {
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
    var p;
    const n = e, a = r, o = N([]), s = N(1), i = N(!0), u = N(0), l = N(""), c = N(((p = n.form) == null ? void 0 : p[n.field]) || n.modelValue), d = N(c.value), y = N(null), h = (w) => {
      d.value = c.value, c.value = w, a("update:modelValue", w), a("changed", w), w || (v(""), y.value = null);
    }, v = (w) => {
      w == "" && c.value && c.value !== d.value || (s.value = 1, u.value = 0, l.value = w, m());
    }, m = async (w = !1) => {
      const O = new URLSearchParams();
      O.append("term", l.value), O.append("page", s.value), n.queryParams && Object.keys(n.queryParams).forEach((H) => {
        O.append(H, n.queryParams[H]);
      }), w && c.value && O.append("ajax_id", c.value);
      const F = await (await fetch(`${n.url}?${O.toString()}`)).json();
      if (i.value = F.current_page < F.last_page, s.value === 1) {
        if (o.value = F.data, c.value) {
          const H = o.value.find((C) => C[n.optionValue] == c.value);
          y.value = H ? H[n.optionText] : null;
        }
        return;
      }
      o.value = o.value.concat(F.data);
    };
    return ye(() => {
      m(!0);
      const w = document.getElementById(n.id).parentNode.querySelector(".menu");
      w == null || w.addEventListener(
        "scroll",
        (O) => {
          O.target.scrollTop > u.value && O.target.scrollTop + O.target.clientHeight >= O.target.scrollHeight && i.value && (s.value++, m());
        },
        {
          passive: !0
        }
      );
    }), t({ getCurrentOption: () => o.value.find((w) => w[n.optionValue] == c.value) }), (w, O) => (S(), U(g(aw), {
      id: e.id,
      label: e.label,
      list: o.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: y.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: c.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": O[0] || (O[0] = (A) => h(A)),
      onSearchchange: v,
      filterPredicate: (A, F) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
function ow(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function sw() {
}
function iw(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function lw(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function zs(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function ya(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const kf = "[object RegExp]", Of = "[object String]", Cf = "[object Number]", Ef = "[object Boolean]", Us = "[object Arguments]", Af = "[object Symbol]", Pf = "[object Date]", $f = "[object Map]", Tf = "[object Set]", Df = "[object Array]", uw = "[object Function]", Rf = "[object ArrayBuffer]", Zn = "[object Object]", cw = "[object Error]", _f = "[object DataView]", Ff = "[object Uint8Array]", If = "[object Uint8ClampedArray]", Bf = "[object Uint16Array]", Lf = "[object Uint32Array]", dw = "[object BigUint64Array]", Mf = "[object Int8Array]", Nf = "[object Int16Array]", jf = "[object Int32Array]", fw = "[object BigInt64Array]", qf = "[object Float32Array]", Vf = "[object Float64Array]";
function Fr(e, t, r, n = /* @__PURE__ */ new Map(), a = void 0) {
  const o = a == null ? void 0 : a(e, t, r, n);
  if (o != null)
    return o;
  if (iw(e))
    return e;
  if (n.has(e))
    return n.get(e);
  if (Array.isArray(e)) {
    const s = new Array(e.length);
    n.set(e, s);
    for (let i = 0; i < e.length; i++)
      s[i] = Fr(e[i], i, r, n, a);
    return Object.hasOwn(e, "index") && (s.index = e.index), Object.hasOwn(e, "input") && (s.input = e.input), s;
  }
  if (e instanceof Date)
    return new Date(e.getTime());
  if (e instanceof RegExp) {
    const s = new RegExp(e.source, e.flags);
    return s.lastIndex = e.lastIndex, s;
  }
  if (e instanceof Map) {
    const s = /* @__PURE__ */ new Map();
    n.set(e, s);
    for (const [i, u] of e)
      s.set(i, Fr(u, i, r, n, a));
    return s;
  }
  if (e instanceof Set) {
    const s = /* @__PURE__ */ new Set();
    n.set(e, s);
    for (const i of e)
      s.add(Fr(i, void 0, r, n, a));
    return s;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e))
    return e.subarray();
  if (lw(e)) {
    const s = new (Object.getPrototypeOf(e)).constructor(e.length);
    n.set(e, s);
    for (let i = 0; i < e.length; i++)
      s[i] = Fr(e[i], i, r, n, a);
    return s;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
    return e.slice(0);
  if (e instanceof DataView) {
    const s = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return n.set(e, s), Jr(s, e, r, n, a), s;
  }
  if (typeof File < "u" && e instanceof File) {
    const s = new File([e], e.name, {
      type: e.type
    });
    return n.set(e, s), Jr(s, e, r, n, a), s;
  }
  if (e instanceof Blob) {
    const s = new Blob([e], { type: e.type });
    return n.set(e, s), Jr(s, e, r, n, a), s;
  }
  if (e instanceof Error) {
    const s = new e.constructor();
    return n.set(e, s), s.message = e.message, s.name = e.name, s.stack = e.stack, s.cause = e.cause, Jr(s, e, r, n, a), s;
  }
  if (typeof e == "object" && pw(e)) {
    const s = Object.create(Object.getPrototypeOf(e));
    return n.set(e, s), Jr(s, e, r, n, a), s;
  }
  return e;
}
function Jr(e, t, r = e, n, a) {
  const o = [...Object.keys(t), ...zs(t)];
  for (let s = 0; s < o.length; s++) {
    const i = o[s], u = Object.getOwnPropertyDescriptor(e, i);
    (u == null || u.writable) && (e[i] = Fr(t[i], i, r, n, a));
  }
}
function pw(e) {
  switch (ya(e)) {
    case Us:
    case Df:
    case Rf:
    case _f:
    case Ef:
    case Pf:
    case qf:
    case Vf:
    case Mf:
    case Nf:
    case jf:
    case $f:
    case Cf:
    case Zn:
    case kf:
    case Tf:
    case Of:
    case Af:
    case Ff:
    case If:
    case Bf:
    case Lf:
      return !0;
    default:
      return !1;
  }
}
function ft(e) {
  return Fr(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
function ga(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
function rn(e, t) {
  const r = Object.keys(t);
  for (let n = 0; n < r.length; n++) {
    const a = r[n], o = t[a], s = e[a];
    Array.isArray(o) ? Array.isArray(s) ? e[a] = rn(s, o) : e[a] = rn([], o) : ga(o) ? ga(s) ? e[a] = rn(s, o) : e[a] = rn({}, o) : (s === void 0 || o !== void 0) && (e[a] = o);
  }
  return e;
}
function zf(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function mw(e, t, r) {
  return nn(e, t, void 0, void 0, void 0, void 0, r);
}
function nn(e, t, r, n, a, o, s) {
  const i = s(e, t, r, n, a, o);
  if (i !== void 0)
    return i;
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
        return un(e, t, o, s);
    }
  return un(e, t, o, s);
}
function un(e, t, r, n) {
  if (Object.is(e, t))
    return !0;
  let a = ya(e), o = ya(t);
  if (a === Us && (a = Zn), o === Us && (o = Zn), a !== o)
    return !1;
  switch (a) {
    case Of:
      return e.toString() === t.toString();
    case Cf: {
      const u = e.valueOf(), l = t.valueOf();
      return zf(u, l);
    }
    case Ef:
    case Pf:
    case Af:
      return Object.is(e.valueOf(), t.valueOf());
    case kf:
      return e.source === t.source && e.flags === t.flags;
    case uw:
      return e === t;
  }
  r = r ?? /* @__PURE__ */ new Map();
  const s = r.get(e), i = r.get(t);
  if (s != null && i != null)
    return s === t;
  r.set(e, t), r.set(t, e);
  try {
    switch (a) {
      case $f: {
        if (e.size !== t.size)
          return !1;
        for (const [u, l] of e.entries())
          if (!t.has(u) || !nn(l, t.get(u), u, e, t, r, n))
            return !1;
        return !0;
      }
      case Tf: {
        if (e.size !== t.size)
          return !1;
        const u = Array.from(e.values()), l = Array.from(t.values());
        for (let c = 0; c < u.length; c++) {
          const d = u[c], y = l.findIndex((h) => nn(d, h, void 0, e, t, r, n));
          if (y === -1)
            return !1;
          l.splice(y, 1);
        }
        return !0;
      }
      case Df:
      case Ff:
      case If:
      case Bf:
      case Lf:
      case dw:
      case Mf:
      case Nf:
      case jf:
      case fw:
      case qf:
      case Vf: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let u = 0; u < e.length; u++)
          if (!nn(e[u], t[u], u, e, t, r, n))
            return !1;
        return !0;
      }
      case Rf:
        return e.byteLength !== t.byteLength ? !1 : un(new Uint8Array(e), new Uint8Array(t), r, n);
      case _f:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : un(new Uint8Array(e), new Uint8Array(t), r, n);
      case cw:
        return e.name === t.name && e.message === t.message;
      case Zn: {
        if (!(un(e.constructor, t.constructor, r, n) || ga(e) && ga(t)))
          return !1;
        const l = [...Object.keys(e), ...zs(e)], c = [...Object.keys(t), ...zs(t)];
        if (l.length !== c.length)
          return !1;
        for (let d = 0; d < l.length; d++) {
          const y = l[d], h = e[y];
          if (!Object.hasOwn(t, y))
            return !1;
          const v = t[y];
          if (!nn(h, v, y, e, t, r, n))
            return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    r.delete(e), r.delete(t);
  }
}
function hw(e, t) {
  return mw(e, t, sw);
}
var Hs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function gw(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
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
var mo, du;
function Kr() {
  return du || (du = 1, mo = TypeError), mo;
}
const vw = {}, bw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vw
}, Symbol.toStringTag, { value: "Module" })), Ws = /* @__PURE__ */ gw(bw);
var ho, fu;
function Ia() {
  if (fu) return ho;
  fu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, a = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = a && o && typeof o.get == "function" ? o.get : null, i = a && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, d = c ? WeakSet.prototype.has : null, y = typeof WeakRef == "function" && WeakRef.prototype, h = y ? WeakRef.prototype.deref : null, v = Boolean.prototype.valueOf, m = Object.prototype.toString, f = Function.prototype.toString, p = String.prototype.match, w = String.prototype.slice, O = String.prototype.replace, A = String.prototype.toUpperCase, F = String.prototype.toLowerCase, H = RegExp.prototype.test, C = Array.prototype.concat, K = Array.prototype.join, M = Array.prototype.slice, $ = Math.floor, q = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, b = Object.getOwnPropertySymbols, E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, k = typeof Symbol == "function" && typeof Symbol.iterator == "object", x = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === k || !0) ? Symbol.toStringTag : null, W = Object.prototype.propertyIsEnumerable, L = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(B) {
    return B.__proto__;
  } : null);
  function _(B, j) {
    if (B === 1 / 0 || B === -1 / 0 || B !== B || B && B > -1e3 && B < 1e3 || H.call(/e/, j))
      return j;
    var me = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof B == "number") {
      var we = B < 0 ? -$(-B) : $(B);
      if (we !== B) {
        var xe = String(we), le = w.call(j, xe.length + 1);
        return O.call(xe, me, "$&_") + "." + O.call(O.call(le, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return O.call(j, me, "$&_");
  }
  var G = Ws, re = G.custom, Se = $e(re) ? re : null, Ne = {
    __proto__: null,
    double: '"',
    single: "'"
  }, de = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ho = function B(j, me, we, xe) {
    var le = me || {};
    if (We(le, "quoteStyle") && !We(Ne, le.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (We(le, "maxStringLength") && (typeof le.maxStringLength == "number" ? le.maxStringLength < 0 && le.maxStringLength !== 1 / 0 : le.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var zt = We(le, "customInspect") ? le.customInspect : !0;
    if (typeof zt != "boolean" && zt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (We(le, "indent") && le.indent !== null && le.indent !== "	" && !(parseInt(le.indent, 10) === le.indent && le.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (We(le, "numericSeparator") && typeof le.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var nr = le.numericSeparator;
    if (typeof j > "u")
      return "undefined";
    if (j === null)
      return "null";
    if (typeof j == "boolean")
      return j ? "true" : "false";
    if (typeof j == "string")
      return rl(j, le);
    if (typeof j == "number") {
      if (j === 0)
        return 1 / 0 / j > 0 ? "0" : "-0";
      var Je = String(j);
      return nr ? _(j, Je) : Je;
    }
    if (typeof j == "bigint") {
      var Ut = String(j) + "n";
      return nr ? _(j, Ut) : Ut;
    }
    var Ga = typeof le.depth > "u" ? 5 : le.depth;
    if (typeof we > "u" && (we = 0), we >= Ga && Ga > 0 && typeof j == "object")
      return Ie(j) ? "[Array]" : "[Object]";
    var Er = nm(le, we);
    if (typeof xe > "u")
      xe = [];
    else if (Vt(xe, j) >= 0)
      return "[Circular]";
    function dt(Ar, In, om) {
      if (In && (xe = M.call(xe), xe.push(In)), om) {
        var dl = {
          depth: le.depth
        };
        return We(le, "quoteStyle") && (dl.quoteStyle = le.quoteStyle), B(Ar, dl, we + 1, xe);
      }
      return B(Ar, le, we + 1, xe);
    }
    if (typeof j == "function" && !be(j)) {
      var al = xr(j), ol = _n(j, dt);
      return "[Function" + (al ? ": " + al : " (anonymous)") + "]" + (ol.length > 0 ? " { " + K.call(ol, ", ") + " }" : "");
    }
    if ($e(j)) {
      var sl = k ? O.call(String(j), /^(Symbol\(.*\))_[^)]*$/, "$1") : E.call(j);
      return typeof j == "object" && !k ? Yr(sl) : sl;
    }
    if (em(j)) {
      for (var Xr = "<" + F.call(String(j.nodeName)), Ya = j.attributes || [], Fn = 0; Fn < Ya.length; Fn++)
        Xr += " " + Ya[Fn].name + "=" + Ce(ve(Ya[Fn].value), "double", le);
      return Xr += ">", j.childNodes && j.childNodes.length && (Xr += "..."), Xr += "</" + F.call(String(j.nodeName)) + ">", Xr;
    }
    if (Ie(j)) {
      if (j.length === 0)
        return "[]";
      var Xa = _n(j, dt);
      return Er && !rm(Xa) ? "[" + Ka(Xa, Er) + "]" : "[ " + K.call(Xa, ", ") + " ]";
    }
    if (ie(j)) {
      var Ja = _n(j, dt);
      return !("cause" in Error.prototype) && "cause" in j && !W.call(j, "cause") ? "{ [" + String(j) + "] " + K.call(C.call("[cause]: " + dt(j.cause), Ja), ", ") + " }" : Ja.length === 0 ? "[" + String(j) + "]" : "{ [" + String(j) + "] " + K.call(Ja, ", ") + " }";
    }
    if (typeof j == "object" && zt) {
      if (Se && typeof j[Se] == "function" && G)
        return G(j, { depth: Ga - we });
      if (zt !== "symbol" && typeof j.inspect == "function")
        return j.inspect();
    }
    if (ct(j)) {
      var il = [];
      return n && n.call(j, function(Ar, In) {
        il.push(dt(In, j, !0) + " => " + dt(Ar, j));
      }), nl("Map", r.call(j), il, Er);
    }
    if (Cr(j)) {
      var ll = [];
      return i && i.call(j, function(Ar) {
        ll.push(dt(Ar, j));
      }), nl("Set", s.call(j), ll, Er);
    }
    if (kr(j))
      return Wa("WeakMap");
    if (Zp(j))
      return Wa("WeakSet");
    if (Or(j))
      return Wa("WeakRef");
    if (pe(j))
      return Yr(dt(Number(j)));
    if (st(j))
      return Yr(dt(q.call(j)));
    if (Ae(j))
      return Yr(v.call(j));
    if (ge(j))
      return Yr(dt(String(j)));
    if (typeof window < "u" && j === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && j === globalThis || typeof Hs < "u" && j === Hs)
      return "{ [object globalThis] }";
    if (!ue(j) && !be(j)) {
      var Qa = _n(j, dt), ul = L ? L(j) === Object.prototype : j instanceof Object || j.constructor === Object, Za = j instanceof Object ? "" : "null prototype", cl = !ul && x && Object(j) === j && x in j ? w.call(it(j), 8, -1) : Za ? "Object" : "", am = ul || typeof j.constructor != "function" ? "" : j.constructor.name ? j.constructor.name + " " : "", eo = am + (cl || Za ? "[" + K.call(C.call([], cl || [], Za || []), ": ") + "] " : "");
      return Qa.length === 0 ? eo + "{}" : Er ? eo + "{" + Ka(Qa, Er) + "}" : eo + "{ " + K.call(Qa, ", ") + " }";
    }
    return String(j);
  };
  function Ce(B, j, me) {
    var we = me.quoteStyle || j, xe = Ne[we];
    return xe + B + xe;
  }
  function ve(B) {
    return O.call(String(B), /"/g, "&quot;");
  }
  function Be(B) {
    return !x || !(typeof B == "object" && (x in B || typeof B[x] < "u"));
  }
  function Ie(B) {
    return it(B) === "[object Array]" && Be(B);
  }
  function ue(B) {
    return it(B) === "[object Date]" && Be(B);
  }
  function be(B) {
    return it(B) === "[object RegExp]" && Be(B);
  }
  function ie(B) {
    return it(B) === "[object Error]" && Be(B);
  }
  function ge(B) {
    return it(B) === "[object String]" && Be(B);
  }
  function pe(B) {
    return it(B) === "[object Number]" && Be(B);
  }
  function Ae(B) {
    return it(B) === "[object Boolean]" && Be(B);
  }
  function $e(B) {
    if (k)
      return B && typeof B == "object" && B instanceof Symbol;
    if (typeof B == "symbol")
      return !0;
    if (!B || typeof B != "object" || !E)
      return !1;
    try {
      return E.call(B), !0;
    } catch {
    }
    return !1;
  }
  function st(B) {
    if (!B || typeof B != "object" || !q)
      return !1;
    try {
      return q.call(B), !0;
    } catch {
    }
    return !1;
  }
  var je = Object.prototype.hasOwnProperty || function(B) {
    return B in this;
  };
  function We(B, j) {
    return je.call(B, j);
  }
  function it(B) {
    return m.call(B);
  }
  function xr(B) {
    if (B.name)
      return B.name;
    var j = p.call(f.call(B), /^function\s*([\w$]+)/);
    return j ? j[1] : null;
  }
  function Vt(B, j) {
    if (B.indexOf)
      return B.indexOf(j);
    for (var me = 0, we = B.length; me < we; me++)
      if (B[me] === j)
        return me;
    return -1;
  }
  function ct(B) {
    if (!r || !B || typeof B != "object")
      return !1;
    try {
      r.call(B);
      try {
        s.call(B);
      } catch {
        return !0;
      }
      return B instanceof Map;
    } catch {
    }
    return !1;
  }
  function kr(B) {
    if (!l || !B || typeof B != "object")
      return !1;
    try {
      l.call(B, l);
      try {
        d.call(B, d);
      } catch {
        return !0;
      }
      return B instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Or(B) {
    if (!h || !B || typeof B != "object")
      return !1;
    try {
      return h.call(B), !0;
    } catch {
    }
    return !1;
  }
  function Cr(B) {
    if (!s || !B || typeof B != "object")
      return !1;
    try {
      s.call(B);
      try {
        r.call(B);
      } catch {
        return !0;
      }
      return B instanceof Set;
    } catch {
    }
    return !1;
  }
  function Zp(B) {
    if (!d || !B || typeof B != "object")
      return !1;
    try {
      d.call(B, d);
      try {
        l.call(B, l);
      } catch {
        return !0;
      }
      return B instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function em(B) {
    return !B || typeof B != "object" ? !1 : typeof HTMLElement < "u" && B instanceof HTMLElement ? !0 : typeof B.nodeName == "string" && typeof B.getAttribute == "function";
  }
  function rl(B, j) {
    if (B.length > j.maxStringLength) {
      var me = B.length - j.maxStringLength, we = "... " + me + " more character" + (me > 1 ? "s" : "");
      return rl(w.call(B, 0, j.maxStringLength), j) + we;
    }
    var xe = de[j.quoteStyle || "single"];
    xe.lastIndex = 0;
    var le = O.call(O.call(B, xe, "\\$1"), /[\x00-\x1f]/g, tm);
    return Ce(le, "single", j);
  }
  function tm(B) {
    var j = B.charCodeAt(0), me = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[j];
    return me ? "\\" + me : "\\x" + (j < 16 ? "0" : "") + A.call(j.toString(16));
  }
  function Yr(B) {
    return "Object(" + B + ")";
  }
  function Wa(B) {
    return B + " { ? }";
  }
  function nl(B, j, me, we) {
    var xe = we ? Ka(me, we) : K.call(me, ", ");
    return B + " (" + j + ") {" + xe + "}";
  }
  function rm(B) {
    for (var j = 0; j < B.length; j++)
      if (Vt(B[j], `
`) >= 0)
        return !1;
    return !0;
  }
  function nm(B, j) {
    var me;
    if (B.indent === "	")
      me = "	";
    else if (typeof B.indent == "number" && B.indent > 0)
      me = K.call(Array(B.indent + 1), " ");
    else
      return null;
    return {
      base: me,
      prev: K.call(Array(j + 1), me)
    };
  }
  function Ka(B, j) {
    if (B.length === 0)
      return "";
    var me = `
` + j.prev + j.base;
    return me + K.call(B, "," + me) + `
` + j.prev;
  }
  function _n(B, j) {
    var me = Ie(B), we = [];
    if (me) {
      we.length = B.length;
      for (var xe = 0; xe < B.length; xe++)
        we[xe] = We(B, xe) ? j(B[xe], B) : "";
    }
    var le = typeof b == "function" ? b(B) : [], zt;
    if (k) {
      zt = {};
      for (var nr = 0; nr < le.length; nr++)
        zt["$" + le[nr]] = le[nr];
    }
    for (var Je in B)
      We(B, Je) && (me && String(Number(Je)) === Je && Je < B.length || k && zt["$" + Je] instanceof Symbol || (H.call(/[^\w$]/, Je) ? we.push(j(Je, B) + ": " + j(B[Je], B)) : we.push(Je + ": " + j(B[Je], B))));
    if (typeof b == "function")
      for (var Ut = 0; Ut < le.length; Ut++)
        W.call(B, le[Ut]) && we.push("[" + j(le[Ut]) + "]: " + j(B[le[Ut]], B));
    return we;
  }
  return ho;
}
var yo, pu;
function ww() {
  if (pu) return yo;
  pu = 1;
  var e = /* @__PURE__ */ Ia(), t = /* @__PURE__ */ Kr(), r = function(i, u, l) {
    for (var c = i, d; (d = c.next) != null; c = d)
      if (d.key === u)
        return c.next = d.next, l || (d.next = /** @type {NonNullable<typeof list.next>} */
        i.next, i.next = d), d;
  }, n = function(i, u) {
    if (i) {
      var l = r(i, u);
      return l && l.value;
    }
  }, a = function(i, u, l) {
    var c = r(i, u);
    c ? c.value = l : i.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: u,
      next: i.next,
      value: l
    };
  }, o = function(i, u) {
    return i ? !!r(i, u) : !1;
  }, s = function(i, u) {
    if (i)
      return r(i, u, !0);
  };
  return yo = function() {
    var u, l = {
      assert: function(c) {
        if (!l.has(c))
          throw new t("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var d = u && u.next, y = s(u, c);
        return y && d && d === y && (u = void 0), !!y;
      },
      get: function(c) {
        return n(u, c);
      },
      has: function(c) {
        return o(u, c);
      },
      set: function(c, d) {
        u || (u = {
          next: void 0
        }), a(
          /** @type {NonNullable<typeof $o>} */
          u,
          c,
          d
        );
      }
    };
    return l;
  }, yo;
}
var go, mu;
function Uf() {
  return mu || (mu = 1, go = Object), go;
}
var vo, hu;
function Sw() {
  return hu || (hu = 1, vo = Error), vo;
}
var bo, yu;
function xw() {
  return yu || (yu = 1, bo = EvalError), bo;
}
var wo, gu;
function kw() {
  return gu || (gu = 1, wo = RangeError), wo;
}
var So, vu;
function Ow() {
  return vu || (vu = 1, So = ReferenceError), So;
}
var xo, bu;
function Cw() {
  return bu || (bu = 1, xo = SyntaxError), xo;
}
var ko, wu;
function Ew() {
  return wu || (wu = 1, ko = URIError), ko;
}
var Oo, Su;
function Aw() {
  return Su || (Su = 1, Oo = Math.abs), Oo;
}
var Co, xu;
function Pw() {
  return xu || (xu = 1, Co = Math.floor), Co;
}
var Eo, ku;
function $w() {
  return ku || (ku = 1, Eo = Math.max), Eo;
}
var Ao, Ou;
function Tw() {
  return Ou || (Ou = 1, Ao = Math.min), Ao;
}
var Po, Cu;
function Dw() {
  return Cu || (Cu = 1, Po = Math.pow), Po;
}
var $o, Eu;
function Rw() {
  return Eu || (Eu = 1, $o = Math.round), $o;
}
var To, Au;
function _w() {
  return Au || (Au = 1, To = Number.isNaN || function(t) {
    return t !== t;
  }), To;
}
var Do, Pu;
function Fw() {
  if (Pu) return Do;
  Pu = 1;
  var e = /* @__PURE__ */ _w();
  return Do = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, Do;
}
var Ro, $u;
function Iw() {
  return $u || ($u = 1, Ro = Object.getOwnPropertyDescriptor), Ro;
}
var _o, Tu;
function Hf() {
  if (Tu) return _o;
  Tu = 1;
  var e = /* @__PURE__ */ Iw();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return _o = e, _o;
}
var Fo, Du;
function Bw() {
  if (Du) return Fo;
  Du = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Fo = e, Fo;
}
var Io, Ru;
function Lw() {
  return Ru || (Ru = 1, Io = function() {
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
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, r)
      );
      if (i.value !== a || i.enumerable !== !0)
        return !1;
    }
    return !0;
  }), Io;
}
var Bo, _u;
function Mw() {
  if (_u) return Bo;
  _u = 1;
  var e = typeof Symbol < "u" && Symbol, t = Lw();
  return Bo = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Bo;
}
var Lo, Fu;
function Wf() {
  return Fu || (Fu = 1, Lo = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Lo;
}
var Mo, Iu;
function Kf() {
  if (Iu) return Mo;
  Iu = 1;
  var e = /* @__PURE__ */ Uf();
  return Mo = e.getPrototypeOf || null, Mo;
}
var No, Bu;
function Nw() {
  if (Bu) return No;
  Bu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", a = function(u, l) {
    for (var c = [], d = 0; d < u.length; d += 1)
      c[d] = u[d];
    for (var y = 0; y < l.length; y += 1)
      c[y + u.length] = l[y];
    return c;
  }, o = function(u, l) {
    for (var c = [], d = l, y = 0; d < u.length; d += 1, y += 1)
      c[y] = u[d];
    return c;
  }, s = function(i, u) {
    for (var l = "", c = 0; c < i.length; c += 1)
      l += i[c], c + 1 < i.length && (l += u);
    return l;
  };
  return No = function(u) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var c = o(arguments, 1), d, y = function() {
      if (this instanceof d) {
        var p = l.apply(
          this,
          a(c, arguments)
        );
        return Object(p) === p ? p : this;
      }
      return l.apply(
        u,
        a(c, arguments)
      );
    }, h = r(0, l.length - c.length), v = [], m = 0; m < h; m++)
      v[m] = "$" + m;
    if (d = Function("binder", "return function (" + s(v, ",") + "){ return binder.apply(this,arguments); }")(y), l.prototype) {
      var f = function() {
      };
      f.prototype = l.prototype, d.prototype = new f(), f.prototype = null;
    }
    return d;
  }, No;
}
var jo, Lu;
function Ba() {
  if (Lu) return jo;
  Lu = 1;
  var e = Nw();
  return jo = Function.prototype.bind || e, jo;
}
var qo, Mu;
function Ui() {
  return Mu || (Mu = 1, qo = Function.prototype.call), qo;
}
var Vo, Nu;
function Gf() {
  return Nu || (Nu = 1, Vo = Function.prototype.apply), Vo;
}
var zo, ju;
function jw() {
  return ju || (ju = 1, zo = typeof Reflect < "u" && Reflect && Reflect.apply), zo;
}
var Uo, qu;
function qw() {
  if (qu) return Uo;
  qu = 1;
  var e = Ba(), t = Gf(), r = Ui(), n = jw();
  return Uo = n || e.call(r, t), Uo;
}
var Ho, Vu;
function Yf() {
  if (Vu) return Ho;
  Vu = 1;
  var e = Ba(), t = /* @__PURE__ */ Kr(), r = Ui(), n = qw();
  return Ho = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, Ho;
}
var Wo, zu;
function Vw() {
  if (zu) return Wo;
  zu = 1;
  var e = Yf(), t = /* @__PURE__ */ Hf(), r;
  try {
    r = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var n = !!r && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), a = Object, o = a.getPrototypeOf;
  return Wo = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(i) {
      return o(i == null ? i : a(i));
    }
  ) : !1, Wo;
}
var Ko, Uu;
function zw() {
  if (Uu) return Ko;
  Uu = 1;
  var e = Wf(), t = Kf(), r = /* @__PURE__ */ Vw();
  return Ko = e ? function(a) {
    return e(a);
  } : t ? function(a) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new TypeError("getProto: not an object");
    return t(a);
  } : r ? function(a) {
    return r(a);
  } : null, Ko;
}
var Go, Hu;
function Uw() {
  if (Hu) return Go;
  Hu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Ba();
  return Go = r.call(e, t), Go;
}
var Yo, Wu;
function Hi() {
  if (Wu) return Yo;
  Wu = 1;
  var e, t = /* @__PURE__ */ Uf(), r = /* @__PURE__ */ Sw(), n = /* @__PURE__ */ xw(), a = /* @__PURE__ */ kw(), o = /* @__PURE__ */ Ow(), s = /* @__PURE__ */ Cw(), i = /* @__PURE__ */ Kr(), u = /* @__PURE__ */ Ew(), l = /* @__PURE__ */ Aw(), c = /* @__PURE__ */ Pw(), d = /* @__PURE__ */ $w(), y = /* @__PURE__ */ Tw(), h = /* @__PURE__ */ Dw(), v = /* @__PURE__ */ Rw(), m = /* @__PURE__ */ Fw(), f = Function, p = function(be) {
    try {
      return f('"use strict"; return (' + be + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Hf(), O = /* @__PURE__ */ Bw(), A = function() {
    throw new i();
  }, F = w ? function() {
    try {
      return arguments.callee, A;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return A;
      }
    }
  }() : A, H = Mw()(), C = zw(), K = Kf(), M = Wf(), $ = Gf(), q = Ui(), b = {}, E = typeof Uint8Array > "u" || !C ? e : C(Uint8Array), k = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": H && C ? C([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": b,
    "%AsyncGenerator%": b,
    "%AsyncGeneratorFunction%": b,
    "%AsyncIteratorPrototype%": b,
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
    "%Error%": r,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": n,
    "%Float16Array%": typeof Float16Array > "u" ? e : Float16Array,
    "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
    "%Function%": f,
    "%GeneratorFunction%": b,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": H && C ? C(C([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !H || !C ? e : C((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": a,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !H || !C ? e : C((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": H && C ? C(""[Symbol.iterator]()) : e,
    "%Symbol%": H ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": F,
    "%TypedArray%": E,
    "%TypeError%": i,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": q,
    "%Function.prototype.apply%": $,
    "%Object.defineProperty%": O,
    "%Object.getPrototypeOf%": K,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": d,
    "%Math.min%": y,
    "%Math.pow%": h,
    "%Math.round%": v,
    "%Math.sign%": m,
    "%Reflect.getPrototypeOf%": M
  };
  if (C)
    try {
      null.error;
    } catch (be) {
      var x = C(C(be));
      k["%Error.prototype%"] = x;
    }
  var W = function be(ie) {
    var ge;
    if (ie === "%AsyncFunction%")
      ge = p("async function () {}");
    else if (ie === "%GeneratorFunction%")
      ge = p("function* () {}");
    else if (ie === "%AsyncGeneratorFunction%")
      ge = p("async function* () {}");
    else if (ie === "%AsyncGenerator%") {
      var pe = be("%AsyncGeneratorFunction%");
      pe && (ge = pe.prototype);
    } else if (ie === "%AsyncIteratorPrototype%") {
      var Ae = be("%AsyncGenerator%");
      Ae && C && (ge = C(Ae.prototype));
    }
    return k[ie] = ge, ge;
  }, L = {
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
  }, _ = Ba(), G = /* @__PURE__ */ Uw(), re = _.call(q, Array.prototype.concat), Se = _.call($, Array.prototype.splice), Ne = _.call(q, String.prototype.replace), de = _.call(q, String.prototype.slice), Ce = _.call(q, RegExp.prototype.exec), ve = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Be = /\\(\\)?/g, Ie = function(ie) {
    var ge = de(ie, 0, 1), pe = de(ie, -1);
    if (ge === "%" && pe !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (pe === "%" && ge !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var Ae = [];
    return Ne(ie, ve, function($e, st, je, We) {
      Ae[Ae.length] = je ? Ne(We, Be, "$1") : st || $e;
    }), Ae;
  }, ue = function(ie, ge) {
    var pe = ie, Ae;
    if (G(L, pe) && (Ae = L[pe], pe = "%" + Ae[0] + "%"), G(k, pe)) {
      var $e = k[pe];
      if ($e === b && ($e = W(pe)), typeof $e > "u" && !ge)
        throw new i("intrinsic " + ie + " exists, but is not available. Please file an issue!");
      return {
        alias: Ae,
        name: pe,
        value: $e
      };
    }
    throw new s("intrinsic " + ie + " does not exist!");
  };
  return Yo = function(ie, ge) {
    if (typeof ie != "string" || ie.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ge != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (Ce(/^%?[^%]*%?$/, ie) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var pe = Ie(ie), Ae = pe.length > 0 ? pe[0] : "", $e = ue("%" + Ae + "%", ge), st = $e.name, je = $e.value, We = !1, it = $e.alias;
    it && (Ae = it[0], Se(pe, re([0, 1], it)));
    for (var xr = 1, Vt = !0; xr < pe.length; xr += 1) {
      var ct = pe[xr], kr = de(ct, 0, 1), Or = de(ct, -1);
      if ((kr === '"' || kr === "'" || kr === "`" || Or === '"' || Or === "'" || Or === "`") && kr !== Or)
        throw new s("property names with quotes must have matching quotes");
      if ((ct === "constructor" || !Vt) && (We = !0), Ae += "." + ct, st = "%" + Ae + "%", G(k, st))
        je = k[st];
      else if (je != null) {
        if (!(ct in je)) {
          if (!ge)
            throw new i("base intrinsic for " + ie + " exists, but the property is not available.");
          return;
        }
        if (w && xr + 1 >= pe.length) {
          var Cr = w(je, ct);
          Vt = !!Cr, Vt && "get" in Cr && !("originalValue" in Cr.get) ? je = Cr.get : je = je[ct];
        } else
          Vt = G(je, ct), je = je[ct];
        Vt && !We && (k[st] = je);
      }
    }
    return je;
  }, Yo;
}
var Xo, Ku;
function Xf() {
  if (Ku) return Xo;
  Ku = 1;
  var e = /* @__PURE__ */ Hi(), t = Yf(), r = t([e("%String.prototype.indexOf%")]);
  return Xo = function(a, o) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(a, !!o)
    );
    return typeof s == "function" && r(a, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Xo;
}
var Jo, Gu;
function Jf() {
  if (Gu) return Jo;
  Gu = 1;
  var e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ Xf(), r = /* @__PURE__ */ Ia(), n = /* @__PURE__ */ Kr(), a = e("%Map%", !0), o = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), i = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Jo = !!a && /** @type {Exclude<import('.'), false>} */
  function() {
    var d, y = {
      assert: function(h) {
        if (!y.has(h))
          throw new n("Side channel does not contain " + r(h));
      },
      delete: function(h) {
        if (d) {
          var v = u(d, h);
          return l(d) === 0 && (d = void 0), v;
        }
        return !1;
      },
      get: function(h) {
        if (d)
          return o(d, h);
      },
      has: function(h) {
        return d ? i(d, h) : !1;
      },
      set: function(h, v) {
        d || (d = new a()), s(d, h, v);
      }
    };
    return y;
  }, Jo;
}
var Qo, Yu;
function Hw() {
  if (Yu) return Qo;
  Yu = 1;
  var e = /* @__PURE__ */ Hi(), t = /* @__PURE__ */ Xf(), r = /* @__PURE__ */ Ia(), n = Jf(), a = /* @__PURE__ */ Kr(), o = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), i = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Qo = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var d, y, h = {
        assert: function(v) {
          if (!h.has(v))
            throw new a("Side channel does not contain " + r(v));
        },
        delete: function(v) {
          if (o && v && (typeof v == "object" || typeof v == "function")) {
            if (d)
              return l(d, v);
          } else if (n && y)
            return y.delete(v);
          return !1;
        },
        get: function(v) {
          return o && v && (typeof v == "object" || typeof v == "function") && d ? s(d, v) : y && y.get(v);
        },
        has: function(v) {
          return o && v && (typeof v == "object" || typeof v == "function") && d ? u(d, v) : !!y && y.has(v);
        },
        set: function(v, m) {
          o && v && (typeof v == "object" || typeof v == "function") ? (d || (d = new o()), i(d, v, m)) : n && (y || (y = n()), y.set(v, m));
        }
      };
      return h;
    }
  ) : n, Qo;
}
var Zo, Xu;
function Ww() {
  if (Xu) return Zo;
  Xu = 1;
  var e = /* @__PURE__ */ Kr(), t = /* @__PURE__ */ Ia(), r = ww(), n = Jf(), a = Hw(), o = a || n || r;
  return Zo = function() {
    var i, u = {
      assert: function(l) {
        if (!u.has(l))
          throw new e("Side channel does not contain " + t(l));
      },
      delete: function(l) {
        return !!i && i.delete(l);
      },
      get: function(l) {
        return i && i.get(l);
      },
      has: function(l) {
        return !!i && i.has(l);
      },
      set: function(l, c) {
        i || (i = o()), i.set(l, c);
      }
    };
    return u;
  }, Zo;
}
var es, Ju;
function Wi() {
  if (Ju) return es;
  Ju = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return es = {
    default: r.RFC3986,
    formatters: {
      RFC1738: function(n) {
        return e.call(n, t, "+");
      },
      RFC3986: function(n) {
        return String(n);
      }
    },
    RFC1738: r.RFC1738,
    RFC3986: r.RFC3986
  }, es;
}
var ts, Qu;
function Qf() {
  if (Qu) return ts;
  Qu = 1;
  var e = /* @__PURE__ */ Wi(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = function() {
    for (var f = [], p = 0; p < 256; ++p)
      f.push("%" + ((p < 16 ? "0" : "") + p.toString(16)).toUpperCase());
    return f;
  }(), a = function(p) {
    for (; p.length > 1; ) {
      var w = p.pop(), O = w.obj[w.prop];
      if (r(O)) {
        for (var A = [], F = 0; F < O.length; ++F)
          typeof O[F] < "u" && A.push(O[F]);
        w.obj[w.prop] = A;
      }
    }
  }, o = function(p, w) {
    for (var O = w && w.plainObjects ? { __proto__: null } : {}, A = 0; A < p.length; ++A)
      typeof p[A] < "u" && (O[A] = p[A]);
    return O;
  }, s = function f(p, w, O) {
    if (!w)
      return p;
    if (typeof w != "object" && typeof w != "function") {
      if (r(p))
        p.push(w);
      else if (p && typeof p == "object")
        (O && (O.plainObjects || O.allowPrototypes) || !t.call(Object.prototype, w)) && (p[w] = !0);
      else
        return [p, w];
      return p;
    }
    if (!p || typeof p != "object")
      return [p].concat(w);
    var A = p;
    return r(p) && !r(w) && (A = o(p, O)), r(p) && r(w) ? (w.forEach(function(F, H) {
      if (t.call(p, H)) {
        var C = p[H];
        C && typeof C == "object" && F && typeof F == "object" ? p[H] = f(C, F, O) : p.push(F);
      } else
        p[H] = F;
    }), p) : Object.keys(w).reduce(function(F, H) {
      var C = w[H];
      return t.call(F, H) ? F[H] = f(F[H], C, O) : F[H] = C, F;
    }, A);
  }, i = function(p, w) {
    return Object.keys(w).reduce(function(O, A) {
      return O[A] = w[A], O;
    }, p);
  }, u = function(f, p, w) {
    var O = f.replace(/\+/g, " ");
    if (w === "iso-8859-1")
      return O.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(O);
    } catch {
      return O;
    }
  }, l = 1024, c = function(p, w, O, A, F) {
    if (p.length === 0)
      return p;
    var H = p;
    if (typeof p == "symbol" ? H = Symbol.prototype.toString.call(p) : typeof p != "string" && (H = String(p)), O === "iso-8859-1")
      return escape(H).replace(/%u[0-9a-f]{4}/gi, function(E) {
        return "%26%23" + parseInt(E.slice(2), 16) + "%3B";
      });
    for (var C = "", K = 0; K < H.length; K += l) {
      for (var M = H.length >= l ? H.slice(K, K + l) : H, $ = [], q = 0; q < M.length; ++q) {
        var b = M.charCodeAt(q);
        if (b === 45 || b === 46 || b === 95 || b === 126 || b >= 48 && b <= 57 || b >= 65 && b <= 90 || b >= 97 && b <= 122 || F === e.RFC1738 && (b === 40 || b === 41)) {
          $[$.length] = M.charAt(q);
          continue;
        }
        if (b < 128) {
          $[$.length] = n[b];
          continue;
        }
        if (b < 2048) {
          $[$.length] = n[192 | b >> 6] + n[128 | b & 63];
          continue;
        }
        if (b < 55296 || b >= 57344) {
          $[$.length] = n[224 | b >> 12] + n[128 | b >> 6 & 63] + n[128 | b & 63];
          continue;
        }
        q += 1, b = 65536 + ((b & 1023) << 10 | M.charCodeAt(q) & 1023), $[$.length] = n[240 | b >> 18] + n[128 | b >> 12 & 63] + n[128 | b >> 6 & 63] + n[128 | b & 63];
      }
      C += $.join("");
    }
    return C;
  }, d = function(p) {
    for (var w = [{ obj: { o: p }, prop: "o" }], O = [], A = 0; A < w.length; ++A)
      for (var F = w[A], H = F.obj[F.prop], C = Object.keys(H), K = 0; K < C.length; ++K) {
        var M = C[K], $ = H[M];
        typeof $ == "object" && $ !== null && O.indexOf($) === -1 && (w.push({ obj: H, prop: M }), O.push($));
      }
    return a(w), p;
  }, y = function(p) {
    return Object.prototype.toString.call(p) === "[object RegExp]";
  }, h = function(p) {
    return !p || typeof p != "object" ? !1 : !!(p.constructor && p.constructor.isBuffer && p.constructor.isBuffer(p));
  }, v = function(p, w) {
    return [].concat(p, w);
  }, m = function(p, w) {
    if (r(p)) {
      for (var O = [], A = 0; A < p.length; A += 1)
        O.push(w(p[A]));
      return O;
    }
    return w(p);
  };
  return ts = {
    arrayToObject: o,
    assign: i,
    combine: v,
    compact: d,
    decode: u,
    encode: c,
    isBuffer: h,
    isRegExp: y,
    maybeMap: m,
    merge: s
  }, ts;
}
var rs, Zu;
function Kw() {
  if (Zu) return rs;
  Zu = 1;
  var e = Ww(), t = /* @__PURE__ */ Qf(), r = /* @__PURE__ */ Wi(), n = Object.prototype.hasOwnProperty, a = {
    brackets: function(f) {
      return f + "[]";
    },
    comma: "comma",
    indices: function(f, p) {
      return f + "[" + p + "]";
    },
    repeat: function(f) {
      return f;
    }
  }, o = Array.isArray, s = Array.prototype.push, i = function(m, f) {
    s.apply(m, o(f) ? f : [f]);
  }, u = Date.prototype.toISOString, l = r.default, c = {
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
    formatter: r.formatters[l],
    // deprecated
    indices: !1,
    serializeDate: function(f) {
      return u.call(f);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, d = function(f) {
    return typeof f == "string" || typeof f == "number" || typeof f == "boolean" || typeof f == "symbol" || typeof f == "bigint";
  }, y = {}, h = function m(f, p, w, O, A, F, H, C, K, M, $, q, b, E, k, x, W, L) {
    for (var _ = f, G = L, re = 0, Se = !1; (G = G.get(y)) !== void 0 && !Se; ) {
      var Ne = G.get(f);
      if (re += 1, typeof Ne < "u") {
        if (Ne === re)
          throw new RangeError("Cyclic object value");
        Se = !0;
      }
      typeof G.get(y) > "u" && (re = 0);
    }
    if (typeof M == "function" ? _ = M(p, _) : _ instanceof Date ? _ = b(_) : w === "comma" && o(_) && (_ = t.maybeMap(_, function(st) {
      return st instanceof Date ? b(st) : st;
    })), _ === null) {
      if (F)
        return K && !x ? K(p, c.encoder, W, "key", E) : p;
      _ = "";
    }
    if (d(_) || t.isBuffer(_)) {
      if (K) {
        var de = x ? p : K(p, c.encoder, W, "key", E);
        return [k(de) + "=" + k(K(_, c.encoder, W, "value", E))];
      }
      return [k(p) + "=" + k(String(_))];
    }
    var Ce = [];
    if (typeof _ > "u")
      return Ce;
    var ve;
    if (w === "comma" && o(_))
      x && K && (_ = t.maybeMap(_, K)), ve = [{ value: _.length > 0 ? _.join(",") || null : void 0 }];
    else if (o(M))
      ve = M;
    else {
      var Be = Object.keys(_);
      ve = $ ? Be.sort($) : Be;
    }
    var Ie = C ? String(p).replace(/\./g, "%2E") : String(p), ue = O && o(_) && _.length === 1 ? Ie + "[]" : Ie;
    if (A && o(_) && _.length === 0)
      return ue + "[]";
    for (var be = 0; be < ve.length; ++be) {
      var ie = ve[be], ge = typeof ie == "object" && ie && typeof ie.value < "u" ? ie.value : _[ie];
      if (!(H && ge === null)) {
        var pe = q && C ? String(ie).replace(/\./g, "%2E") : String(ie), Ae = o(_) ? typeof w == "function" ? w(ue, pe) : ue : ue + (q ? "." + pe : "[" + pe + "]");
        L.set(f, re);
        var $e = e();
        $e.set(y, L), i(Ce, m(
          ge,
          Ae,
          w,
          O,
          A,
          F,
          H,
          C,
          w === "comma" && x && o(_) ? null : K,
          M,
          $,
          q,
          b,
          E,
          k,
          x,
          W,
          $e
        ));
      }
    }
    return Ce;
  }, v = function(f) {
    if (!f)
      return c;
    if (typeof f.allowEmptyArrays < "u" && typeof f.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof f.encodeDotInKeys < "u" && typeof f.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (f.encoder !== null && typeof f.encoder < "u" && typeof f.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var p = f.charset || c.charset;
    if (typeof f.charset < "u" && f.charset !== "utf-8" && f.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var w = r.default;
    if (typeof f.format < "u") {
      if (!n.call(r.formatters, f.format))
        throw new TypeError("Unknown format option provided.");
      w = f.format;
    }
    var O = r.formatters[w], A = c.filter;
    (typeof f.filter == "function" || o(f.filter)) && (A = f.filter);
    var F;
    if (f.arrayFormat in a ? F = f.arrayFormat : "indices" in f ? F = f.indices ? "indices" : "repeat" : F = c.arrayFormat, "commaRoundTrip" in f && typeof f.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var H = typeof f.allowDots > "u" ? f.encodeDotInKeys === !0 ? !0 : c.allowDots : !!f.allowDots;
    return {
      addQueryPrefix: typeof f.addQueryPrefix == "boolean" ? f.addQueryPrefix : c.addQueryPrefix,
      allowDots: H,
      allowEmptyArrays: typeof f.allowEmptyArrays == "boolean" ? !!f.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: F,
      charset: p,
      charsetSentinel: typeof f.charsetSentinel == "boolean" ? f.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!f.commaRoundTrip,
      delimiter: typeof f.delimiter > "u" ? c.delimiter : f.delimiter,
      encode: typeof f.encode == "boolean" ? f.encode : c.encode,
      encodeDotInKeys: typeof f.encodeDotInKeys == "boolean" ? f.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof f.encoder == "function" ? f.encoder : c.encoder,
      encodeValuesOnly: typeof f.encodeValuesOnly == "boolean" ? f.encodeValuesOnly : c.encodeValuesOnly,
      filter: A,
      format: w,
      formatter: O,
      serializeDate: typeof f.serializeDate == "function" ? f.serializeDate : c.serializeDate,
      skipNulls: typeof f.skipNulls == "boolean" ? f.skipNulls : c.skipNulls,
      sort: typeof f.sort == "function" ? f.sort : null,
      strictNullHandling: typeof f.strictNullHandling == "boolean" ? f.strictNullHandling : c.strictNullHandling
    };
  };
  return rs = function(m, f) {
    var p = m, w = v(f), O, A;
    typeof w.filter == "function" ? (A = w.filter, p = A("", p)) : o(w.filter) && (A = w.filter, O = A);
    var F = [];
    if (typeof p != "object" || p === null)
      return "";
    var H = a[w.arrayFormat], C = H === "comma" && w.commaRoundTrip;
    O || (O = Object.keys(p)), w.sort && O.sort(w.sort);
    for (var K = e(), M = 0; M < O.length; ++M) {
      var $ = O[M], q = p[$];
      w.skipNulls && q === null || i(F, h(
        q,
        $,
        H,
        C,
        w.allowEmptyArrays,
        w.strictNullHandling,
        w.skipNulls,
        w.encodeDotInKeys,
        w.encode ? w.encoder : null,
        w.filter,
        w.sort,
        w.allowDots,
        w.serializeDate,
        w.format,
        w.formatter,
        w.encodeValuesOnly,
        w.charset,
        K
      ));
    }
    var b = F.join(w.delimiter), E = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? E += "utf8=%26%2310003%3B&" : E += "utf8=%E2%9C%93&"), b.length > 0 ? E + b : "";
  }, rs;
}
var ns, ec;
function Gw() {
  if (ec) return ns;
  ec = 1;
  var e = /* @__PURE__ */ Qf(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
  }, a = function(y) {
    return y.replace(/&#(\d+);/g, function(h, v) {
      return String.fromCharCode(parseInt(v, 10));
    });
  }, o = function(y, h, v) {
    if (y && typeof y == "string" && h.comma && y.indexOf(",") > -1)
      return y.split(",");
    if (h.throwOnLimitExceeded && v >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return y;
  }, s = "utf8=%26%2310003%3B", i = "utf8=%E2%9C%93", u = function(h, v) {
    var m = { __proto__: null }, f = v.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    f = f.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var p = v.parameterLimit === 1 / 0 ? void 0 : v.parameterLimit, w = f.split(
      v.delimiter,
      v.throwOnLimitExceeded ? p + 1 : p
    );
    if (v.throwOnLimitExceeded && w.length > p)
      throw new RangeError("Parameter limit exceeded. Only " + p + " parameter" + (p === 1 ? "" : "s") + " allowed.");
    var O = -1, A, F = v.charset;
    if (v.charsetSentinel)
      for (A = 0; A < w.length; ++A)
        w[A].indexOf("utf8=") === 0 && (w[A] === i ? F = "utf-8" : w[A] === s && (F = "iso-8859-1"), O = A, A = w.length);
    for (A = 0; A < w.length; ++A)
      if (A !== O) {
        var H = w[A], C = H.indexOf("]="), K = C === -1 ? H.indexOf("=") : C + 1, M, $;
        K === -1 ? (M = v.decoder(H, n.decoder, F, "key"), $ = v.strictNullHandling ? null : "") : (M = v.decoder(H.slice(0, K), n.decoder, F, "key"), $ = e.maybeMap(
          o(
            H.slice(K + 1),
            v,
            r(m[M]) ? m[M].length : 0
          ),
          function(b) {
            return v.decoder(b, n.decoder, F, "value");
          }
        )), $ && v.interpretNumericEntities && F === "iso-8859-1" && ($ = a(String($))), H.indexOf("[]=") > -1 && ($ = r($) ? [$] : $);
        var q = t.call(m, M);
        q && v.duplicates === "combine" ? m[M] = e.combine(m[M], $) : (!q || v.duplicates === "last") && (m[M] = $);
      }
    return m;
  }, l = function(y, h, v, m) {
    var f = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var p = y.slice(0, -1).join("");
      f = Array.isArray(h) && h[p] ? h[p].length : 0;
    }
    for (var w = m ? h : o(h, v, f), O = y.length - 1; O >= 0; --O) {
      var A, F = y[O];
      if (F === "[]" && v.parseArrays)
        A = v.allowEmptyArrays && (w === "" || v.strictNullHandling && w === null) ? [] : e.combine([], w);
      else {
        A = v.plainObjects ? { __proto__: null } : {};
        var H = F.charAt(0) === "[" && F.charAt(F.length - 1) === "]" ? F.slice(1, -1) : F, C = v.decodeDotInKeys ? H.replace(/%2E/g, ".") : H, K = parseInt(C, 10);
        !v.parseArrays && C === "" ? A = { 0: w } : !isNaN(K) && F !== C && String(K) === C && K >= 0 && v.parseArrays && K <= v.arrayLimit ? (A = [], A[K] = w) : C !== "__proto__" && (A[C] = w);
      }
      w = A;
    }
    return w;
  }, c = function(h, v, m, f) {
    if (h) {
      var p = m.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, w = /(\[[^[\]]*])/, O = /(\[[^[\]]*])/g, A = m.depth > 0 && w.exec(p), F = A ? p.slice(0, A.index) : p, H = [];
      if (F) {
        if (!m.plainObjects && t.call(Object.prototype, F) && !m.allowPrototypes)
          return;
        H.push(F);
      }
      for (var C = 0; m.depth > 0 && (A = O.exec(p)) !== null && C < m.depth; ) {
        if (C += 1, !m.plainObjects && t.call(Object.prototype, A[1].slice(1, -1)) && !m.allowPrototypes)
          return;
        H.push(A[1]);
      }
      if (A) {
        if (m.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + m.depth + " and strictDepth is true");
        H.push("[" + p.slice(A.index) + "]");
      }
      return l(H, v, m, f);
    }
  }, d = function(h) {
    if (!h)
      return n;
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
    var v = typeof h.charset > "u" ? n.charset : h.charset, m = typeof h.duplicates > "u" ? n.duplicates : h.duplicates;
    if (m !== "combine" && m !== "first" && m !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var f = typeof h.allowDots > "u" ? h.decodeDotInKeys === !0 ? !0 : n.allowDots : !!h.allowDots;
    return {
      allowDots: f,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof h.allowPrototypes == "boolean" ? h.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof h.allowSparse == "boolean" ? h.allowSparse : n.allowSparse,
      arrayLimit: typeof h.arrayLimit == "number" ? h.arrayLimit : n.arrayLimit,
      charset: v,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : n.charsetSentinel,
      comma: typeof h.comma == "boolean" ? h.comma : n.comma,
      decodeDotInKeys: typeof h.decodeDotInKeys == "boolean" ? h.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof h.decoder == "function" ? h.decoder : n.decoder,
      delimiter: typeof h.delimiter == "string" || e.isRegExp(h.delimiter) ? h.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof h.depth == "number" || h.depth === !1 ? +h.depth : n.depth,
      duplicates: m,
      ignoreQueryPrefix: h.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof h.interpretNumericEntities == "boolean" ? h.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof h.parameterLimit == "number" ? h.parameterLimit : n.parameterLimit,
      parseArrays: h.parseArrays !== !1,
      plainObjects: typeof h.plainObjects == "boolean" ? h.plainObjects : n.plainObjects,
      strictDepth: typeof h.strictDepth == "boolean" ? !!h.strictDepth : n.strictDepth,
      strictNullHandling: typeof h.strictNullHandling == "boolean" ? h.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof h.throwOnLimitExceeded == "boolean" ? h.throwOnLimitExceeded : !1
    };
  };
  return ns = function(y, h) {
    var v = d(h);
    if (y === "" || y === null || typeof y > "u")
      return v.plainObjects ? { __proto__: null } : {};
    for (var m = typeof y == "string" ? u(y, v) : y, f = v.plainObjects ? { __proto__: null } : {}, p = Object.keys(m), w = 0; w < p.length; ++w) {
      var O = p[w], A = c(O, m[O], v, typeof y == "string");
      f = e.merge(f, A, v);
    }
    return v.allowSparse === !0 ? f : e.compact(f);
  }, ns;
}
var as, tc;
function Yw() {
  if (tc) return as;
  tc = 1;
  var e = /* @__PURE__ */ Kw(), t = /* @__PURE__ */ Gw(), r = /* @__PURE__ */ Wi();
  return as = {
    formats: r,
    parse: t,
    stringify: e
  }, as;
}
var rc = /* @__PURE__ */ Yw();
function Zf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Xw } = Object.prototype, { getPrototypeOf: La } = Object, { iterator: Ma, toStringTag: ep } = Symbol, Na = /* @__PURE__ */ ((e) => (t) => {
  const r = Xw.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wt = (e) => (e = e.toLowerCase(), (t) => Na(t) === e), ja = (e) => (t) => typeof t === e, { isArray: Gr } = Array, qr = ja("undefined");
function En(e) {
  return e !== null && !qr(e) && e.constructor !== null && !qr(e.constructor) && Xe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const tp = wt("ArrayBuffer");
function Jw(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && tp(e.buffer), t;
}
const Qw = ja("string"), Xe = ja("function"), rp = ja("number"), An = (e) => e !== null && typeof e == "object", Zw = (e) => e === !0 || e === !1, ea = (e) => {
  if (Na(e) !== "object")
    return !1;
  const t = La(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ep in e) && !(Ma in e);
}, e2 = (e) => {
  if (!An(e) || En(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, t2 = wt("Date"), r2 = wt("File"), n2 = (e) => !!(e && typeof e.uri < "u"), a2 = (e) => e && typeof e.getParts < "u", o2 = wt("Blob"), s2 = wt("FileList"), i2 = (e) => An(e) && Xe(e.pipe);
function l2() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const nc = l2(), ac = typeof nc.FormData < "u" ? nc.FormData : void 0, u2 = (e) => {
  if (!e) return !1;
  if (ac && e instanceof ac) return !0;
  const t = La(e);
  if (!t || t === Object.prototype || !Xe(e.append)) return !1;
  const r = Na(e);
  return r === "formdata" || // detect form-data instance
  r === "object" && Xe(e.toString) && e.toString() === "[object FormData]";
}, c2 = wt("URLSearchParams"), [d2, f2, p2, m2] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(wt), h2 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), Gr(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    if (En(e))
      return;
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let i;
    for (n = 0; n < s; n++)
      i = o[n], t.call(null, e[i], i, e);
  }
}
function np(e, t) {
  if (En(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ap = (e) => !qr(e) && e !== sr;
function Ks(...e) {
  const { caseless: t, skipUndefined: r } = ap(this) && this || {}, n = {}, a = (o, s) => {
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    const i = t && np(n, s) || s, u = Gs(n, i) ? n[i] : void 0;
    ea(u) && ea(o) ? n[i] = Ks(u, o) : ea(o) ? n[i] = Ks({}, o) : Gr(o) ? n[i] = o.slice() : (!r || !qr(o)) && (n[i] = o);
  };
  for (let o = 0, s = e.length; o < s; o++)
    e[o] && Pn(e[o], a);
  return n;
}
const y2 = (e, t, r, { allOwnKeys: n } = {}) => (Pn(
  t,
  (a, o) => {
    r && Xe(a) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Zf(a, r),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, o, {
      __proto__: null,
      value: a,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: n }
), e), g2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), v2 = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, b2 = (e, t, r, n) => {
  let a, o, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      s = a[o], (!n || n(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = r !== !1 && La(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, w2 = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, S2 = (e) => {
  if (!e) return null;
  if (Gr(e)) return e;
  let t = e.length;
  if (!rp(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, x2 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && La(Uint8Array)), k2 = (e, t) => {
  const n = (e && e[Ma]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, O2 = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, C2 = wt("HTMLFormElement"), E2 = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, a) {
  return n.toUpperCase() + a;
}), Gs = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), A2 = wt("RegExp"), op = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Pn(r, (a, o) => {
    let s;
    (s = t(a, o, e)) !== !1 && (n[o] = s || a);
  }), Object.defineProperties(e, n);
}, P2 = (e) => {
  op(e, (t, r) => {
    if (Xe(e) && ["arguments", "caller", "callee"].includes(r))
      return !1;
    const n = e[r];
    if (Xe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, $2 = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((o) => {
      r[o] = !0;
    });
  };
  return Gr(e) ? n(e) : n(String(e).split(t)), r;
}, T2 = () => {
}, D2 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function R2(e) {
  return !!(e && Xe(e.append) && e[ep] === "FormData" && e[Ma]);
}
const _2 = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), r = (n) => {
    if (An(n)) {
      if (t.has(n))
        return;
      if (En(n))
        return n;
      if (!("toJSON" in n)) {
        t.add(n);
        const a = Gr(n) ? [] : {};
        return Pn(n, (o, s) => {
          const i = r(o);
          !qr(i) && (a[s] = i);
        }), t.delete(n), a;
      }
    }
    return n;
  };
  return r(e);
}, F2 = wt("AsyncFunction"), I2 = (e) => e && (An(e) || Xe(e)) && Xe(e.then) && Xe(e.catch), sp = ((e, t) => e ? setImmediate : t ? ((r, n) => (sr.addEventListener(
  "message",
  ({ source: a, data: o }) => {
    a === sr && o === r && n.length && n.shift()();
  },
  !1
), (a) => {
  n.push(a), sr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", Xe(sr.postMessage)), B2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(sr) : typeof process < "u" && process.nextTick || sp, L2 = (e) => e != null && Xe(e[Ma]), D = {
  isArray: Gr,
  isArrayBuffer: tp,
  isBuffer: En,
  isFormData: u2,
  isArrayBufferView: Jw,
  isString: Qw,
  isNumber: rp,
  isBoolean: Zw,
  isObject: An,
  isPlainObject: ea,
  isEmptyObject: e2,
  isReadableStream: d2,
  isRequest: f2,
  isResponse: p2,
  isHeaders: m2,
  isUndefined: qr,
  isDate: t2,
  isFile: r2,
  isReactNativeBlob: n2,
  isReactNative: a2,
  isBlob: o2,
  isRegExp: A2,
  isFunction: Xe,
  isStream: i2,
  isURLSearchParams: c2,
  isTypedArray: x2,
  isFileList: s2,
  forEach: Pn,
  merge: Ks,
  extend: y2,
  trim: h2,
  stripBOM: g2,
  inherits: v2,
  toFlatObject: b2,
  kindOf: Na,
  kindOfTest: wt,
  endsWith: w2,
  toArray: S2,
  forEachEntry: k2,
  matchAll: O2,
  isHTMLForm: C2,
  hasOwnProperty: Gs,
  hasOwnProp: Gs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: op,
  freezeMethods: P2,
  toObjectSet: $2,
  toCamelCase: E2,
  noop: T2,
  toFiniteNumber: D2,
  findKey: np,
  global: sr,
  isContextDefined: ap,
  isSpecCompliantForm: R2,
  toJSONObject: _2,
  isAsyncFn: F2,
  isThenable: I2,
  setImmediate: sp,
  asap: B2,
  isIterable: L2
}, M2 = D.toObjectSet([
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
]), N2 = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), r = s.substring(0, a).trim().toLowerCase(), n = s.substring(a + 1).trim(), !(!r || t[r] && M2[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
};
function j2(e) {
  let t = 0, r = e.length;
  for (; t < r; ) {
    const n = e.charCodeAt(t);
    if (n !== 9 && n !== 32)
      break;
    t += 1;
  }
  for (; r > t; ) {
    const n = e.charCodeAt(r - 1);
    if (n !== 9 && n !== 32)
      break;
    r -= 1;
  }
  return t === 0 && r === e.length ? e : e.slice(t, r);
}
const q2 = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), V2 = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Ki(e, t) {
  return D.isArray(e) ? e.map((r) => Ki(r, t)) : j2(String(e).replace(t, ""));
}
const z2 = (e) => Ki(e, q2), U2 = (e) => Ki(e, V2);
function ip(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return D.forEach(e.toJSON(), (r, n) => {
    t[n] = U2(r);
  }), t;
}
const oc = Symbol("internals");
function Qr(e) {
  return e && String(e).trim().toLowerCase();
}
function ta(e) {
  return e === !1 || e == null ? e : D.isArray(e) ? e.map(ta) : z2(String(e));
}
function H2(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const W2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function os(e, t, r, n, a) {
  if (D.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!D.isString(t)) {
    if (D.isString(n))
      return t.indexOf(n) !== -1;
    if (D.isRegExp(n))
      return n.test(t);
  }
}
function K2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function G2(e, t) {
  const r = D.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(a, o, s) {
        return this[n].call(this, t, a, o, s);
      },
      configurable: !0
    });
  });
}
let He = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function o(i, u, l) {
      const c = Qr(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = D.findKey(a, c);
      (!d || a[d] === void 0 || l === !0 || l === void 0 && a[d] !== !1) && (a[d || u] = ta(i));
    }
    const s = (i, u) => D.forEach(i, (l, c) => o(l, c, u));
    if (D.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (D.isString(t) && (t = t.trim()) && !W2(t))
      s(N2(t), r);
    else if (D.isObject(t) && D.isIterable(t)) {
      let i = {}, u, l;
      for (const c of t) {
        if (!D.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = c[0]] = (u = i[l]) ? D.isArray(u) ? [...u, c[1]] : [u, c[1]] : c[1];
      }
      s(i, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = Qr(t), t) {
      const n = D.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return H2(a);
        if (D.isFunction(r))
          return r.call(this, a, n);
        if (D.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Qr(t), t) {
      const n = D.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || os(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function o(s) {
      if (s = Qr(s), s) {
        const i = D.findKey(n, s);
        i && (!r || os(n, n[i], i, r)) && (delete n[i], a = !0);
      }
    }
    return D.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || os(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return D.forEach(this, (a, o) => {
      const s = D.findKey(n, o);
      if (s) {
        r[s] = ta(a), delete r[o];
        return;
      }
      const i = t ? K2(o) : String(o).trim();
      i !== o && delete r[o], r[i] = ta(a), n[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return D.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && D.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
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
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((a) => n.set(a)), n;
  }
  static accessor(t) {
    const n = (this[oc] = this[oc] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(s) {
      const i = Qr(s);
      n[i] || (G2(a, s), n[i] = !0);
    }
    return D.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
He.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
D.reduceDescriptors(He.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
D.freezeMethods(He);
const Y2 = "[REDACTED ****]";
function X2(e) {
  if (D.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (D.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function J2(e, t) {
  const r = new Set(t.map((o) => String(o).toLowerCase())), n = [], a = (o) => {
    if (o === null || typeof o != "object" || D.isBuffer(o)) return o;
    if (n.indexOf(o) !== -1) return;
    o instanceof He && (o = o.toJSON()), n.push(o);
    let s;
    if (D.isArray(o))
      s = [], o.forEach((i, u) => {
        const l = a(i);
        D.isUndefined(l) || (s[u] = l);
      });
    else {
      if (!D.isPlainObject(o) && X2(o))
        return n.pop(), o;
      s = /* @__PURE__ */ Object.create(null);
      for (const [i, u] of Object.entries(o)) {
        const l = r.has(i.toLowerCase()) ? Y2 : a(u);
        D.isUndefined(l) || (s[i] = l);
      }
    }
    return n.pop(), s;
  };
  return a(e);
}
let ee = class lp extends Error {
  static from(t, r, n, a, o, s) {
    const i = new lp(t.message, r || t.code, n, a, o);
    return i.cause = t, i.name = t.name, t.status != null && i.status == null && (i.status = t.status), s && Object.assign(i, s), i;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, r, n, a, o) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, r && (this.code = r), n && (this.config = n), a && (this.request = a), o && (this.response = o, this.status = o.status);
  }
  toJSON() {
    const t = this.config, r = t && D.hasOwnProp(t, "redact") ? t.redact : void 0, n = D.isArray(r) && r.length > 0 ? J2(t, r) : D.toJSONObject(t);
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
      config: n,
      code: this.code,
      status: this.status
    };
  }
};
ee.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
ee.ERR_BAD_OPTION = "ERR_BAD_OPTION";
ee.ECONNABORTED = "ECONNABORTED";
ee.ETIMEDOUT = "ETIMEDOUT";
ee.ECONNREFUSED = "ECONNREFUSED";
ee.ERR_NETWORK = "ERR_NETWORK";
ee.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
ee.ERR_DEPRECATED = "ERR_DEPRECATED";
ee.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
ee.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
ee.ERR_CANCELED = "ERR_CANCELED";
ee.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
ee.ERR_INVALID_URL = "ERR_INVALID_URL";
ee.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Q2 = null;
function Ys(e) {
  return D.isPlainObject(e) || D.isArray(e);
}
function up(e) {
  return D.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ss(e, t, r) {
  return e ? e.concat(t).map(function(a, o) {
    return a = up(a), !r && o ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function Z2(e) {
  return D.isArray(e) && !e.some(Ys);
}
const eS = D.toFlatObject(D, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qa(e, t, r) {
  if (!D.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = D.toFlatObject(
    r,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(f, p) {
      return !D.isUndefined(p[f]);
    }
  );
  const n = r.metaTokens, a = r.visitor || d, o = r.dots, s = r.indexes, i = r.Blob || typeof Blob < "u" && Blob, u = r.maxDepth === void 0 ? 100 : r.maxDepth, l = i && D.isSpecCompliantForm(t);
  if (!D.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null) return "";
    if (D.isDate(m))
      return m.toISOString();
    if (D.isBoolean(m))
      return m.toString();
    if (!l && D.isBlob(m))
      throw new ee("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(m) || D.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function d(m, f, p) {
    let w = m;
    if (D.isReactNative(t) && D.isReactNativeBlob(m))
      return t.append(ss(p, f, o), c(m)), !1;
    if (m && !p && typeof m == "object") {
      if (D.endsWith(f, "{}"))
        f = n ? f : f.slice(0, -2), m = JSON.stringify(m);
      else if (D.isArray(m) && Z2(m) || (D.isFileList(m) || D.endsWith(f, "[]")) && (w = D.toArray(m)))
        return f = up(f), w.forEach(function(A, F) {
          !(D.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ss([f], F, o) : s === null ? f : f + "[]",
            c(A)
          );
        }), !1;
    }
    return Ys(m) ? !0 : (t.append(ss(p, f, o), c(m)), !1);
  }
  const y = [], h = Object.assign(eS, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: Ys
  });
  function v(m, f, p = 0) {
    if (!D.isUndefined(m)) {
      if (p > u)
        throw new ee(
          "Object is too deeply nested (" + p + " levels). Max depth: " + u,
          ee.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (y.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      y.push(m), D.forEach(m, function(O, A) {
        (!(D.isUndefined(O) || O === null) && a.call(t, O, D.isString(A) ? A.trim() : A, f, h)) === !0 && v(O, f ? f.concat(A) : [A], p + 1);
      }), y.pop();
    }
  }
  if (!D.isObject(e))
    throw new TypeError("data must be an object");
  return v(e), t;
}
function sc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(n) {
    return t[n];
  });
}
function Gi(e, t) {
  this._pairs = [], e && qa(e, this, t);
}
const cp = Gi.prototype;
cp.append = function(t, r) {
  this._pairs.push([t, r]);
};
cp.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, sc);
  } : sc;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function tS(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function dp(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || tS, a = D.isFunction(r) ? {
    serialize: r
  } : r, o = a && a.serialize;
  let s;
  if (o ? s = o(t, a) : s = D.isURLSearchParams(t) ? t.toString() : new Gi(t, a).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class ic {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
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
   * @returns {void}
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
    D.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Yi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, rS = typeof URLSearchParams < "u" ? URLSearchParams : Gi, nS = typeof FormData < "u" ? FormData : null, aS = typeof Blob < "u" ? Blob : null, oS = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rS,
    FormData: nS,
    Blob: aS
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xi = typeof window < "u" && typeof document < "u", Xs = typeof navigator == "object" && navigator || void 0, sS = Xi && (!Xs || ["ReactNative", "NativeScript", "NS"].indexOf(Xs.product) < 0), iS = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", lS = Xi && window.location.href || "http://localhost", uS = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xi,
  hasStandardBrowserEnv: sS,
  hasStandardBrowserWebWorkerEnv: iS,
  navigator: Xs,
  origin: lS
}, Symbol.toStringTag, { value: "Module" })), qe = {
  ...uS,
  ...oS
};
function cS(e, t) {
  return qa(e, new qe.classes.URLSearchParams(), {
    visitor: function(r, n, a, o) {
      return qe.isNode && D.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function dS(e) {
  return D.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function fS(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let o;
  for (n = 0; n < a; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function fp(e) {
  function t(r, n, a, o) {
    let s = r[o++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), u = o >= r.length;
    return s = !s && D.isArray(a) ? a.length : s, u ? (D.hasOwnProp(a, s) ? a[s] = D.isArray(a[s]) ? a[s].concat(n) : [a[s], n] : a[s] = n, !i) : ((!D.hasOwnProp(a, s) || !D.isObject(a[s])) && (a[s] = []), t(r, n, a[s], o) && D.isArray(a[s]) && (a[s] = fS(a[s])), !i);
  }
  if (D.isFormData(e) && D.isFunction(e.entries)) {
    const r = {};
    return D.forEachEntry(e, (n, a) => {
      t(dS(n), a, r, 0);
    }), r;
  }
  return null;
}
const Dr = (e, t) => e != null && D.hasOwnProp(e, t) ? e[t] : void 0;
function pS(e, t, r) {
  if (D.isString(e))
    try {
      return (t || JSON.parse)(e), D.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const $n = {
  transitional: Yi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, r) {
      const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, o = D.isObject(t);
      if (o && D.isHTMLForm(t) && (t = new FormData(t)), D.isFormData(t))
        return a ? JSON.stringify(fp(t)) : t;
      if (D.isArrayBuffer(t) || D.isBuffer(t) || D.isStream(t) || D.isFile(t) || D.isBlob(t) || D.isReadableStream(t))
        return t;
      if (D.isArrayBufferView(t))
        return t.buffer;
      if (D.isURLSearchParams(t))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        const u = Dr(this, "formSerializer");
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return cS(t, u).toString();
        if ((i = D.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const l = Dr(this, "env"), c = l && l.FormData;
          return qa(
            i ? { "files[]": t } : t,
            c && new c(),
            u
          );
        }
      }
      return o || a ? (r.setContentType("application/json", !1), pS(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const r = Dr(this, "transitional") || $n.transitional, n = r && r.forcedJSONParsing, a = Dr(this, "responseType"), o = a === "json";
      if (D.isResponse(t) || D.isReadableStream(t))
        return t;
      if (t && D.isString(t) && (n && !a || o)) {
        const i = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(t, Dr(this, "parseReviver"));
        } catch (u) {
          if (i)
            throw u.name === "SyntaxError" ? ee.from(u, ee.ERR_BAD_RESPONSE, this, null, Dr(this, "response")) : u;
        }
      }
      return t;
    }
  ],
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
    FormData: qe.classes.FormData,
    Blob: qe.classes.Blob
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
D.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  $n.headers[e] = {};
});
function is(e, t) {
  const r = this || $n, n = t || r, a = He.from(n.headers);
  let o = n.data;
  return D.forEach(e, function(i) {
    o = i.call(r, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function pp(e) {
  return !!(e && e.__CANCEL__);
}
let Tn = class extends ee {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, r, n) {
    super(t ?? "canceled", ee.ERR_CANCELED, r, n), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function mp(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ee(
    "Request failed with status code " + r.status,
    r.status >= 400 && r.status < 500 ? ee.ERR_BAD_REQUEST : ee.ERR_BAD_RESPONSE,
    r.config,
    r.request,
    r
  ));
}
function mS(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function hS(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const l = Date.now(), c = n[o];
    s || (s = l), r[a] = u, n[a] = l;
    let d = o, y = 0;
    for (; d !== a; )
      y += r[d++], d = d % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), l - s < t)
      return;
    const h = c && l - c;
    return h ? Math.round(y * 1e3 / h) : void 0;
  };
}
function yS(e, t) {
  let r = 0, n = 1e3 / t, a, o;
  const s = (l, c = Date.now()) => {
    r = c, a = null, o && (clearTimeout(o), o = null), e(...l);
  };
  return [(...l) => {
    const c = Date.now(), d = c - r;
    d >= n ? s(l, c) : (a = l, o || (o = setTimeout(() => {
      o = null, s(a);
    }, n - d)));
  }, () => a && s(a)];
}
const va = (e, t, r = 3) => {
  let n = 0;
  const a = hS(50, 250);
  return yS((o) => {
    if (!o || typeof o.loaded != "number")
      return;
    const s = o.loaded, i = o.lengthComputable ? o.total : void 0, u = i != null ? Math.min(s, i) : s, l = Math.max(0, u - n), c = a(l);
    n = Math.max(n, u);
    const d = {
      loaded: u,
      total: i,
      progress: i ? u / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i ? (i - u) / c : void 0,
      event: o,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, r);
}, lc = (e, t) => {
  const r = e != null;
  return [
    (n) => t[0]({
      lengthComputable: r,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, uc = (e) => (...t) => D.asap(() => e(...t)), gS = qe.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, qe.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(qe.origin),
  qe.navigator && /(msie|trident)/i.test(qe.navigator.userAgent)
) : () => !0, vS = qe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, a, o, s) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      D.isNumber(r) && i.push(`expires=${new Date(r).toUTCString()}`), D.isString(n) && i.push(`path=${n}`), D.isString(a) && i.push(`domain=${a}`), o === !0 && i.push("secure"), D.isString(s) && i.push(`SameSite=${s}`), document.cookie = i.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.split(";");
      for (let r = 0; r < t.length; r++) {
        const n = t[r].replace(/^\s+/, ""), a = n.indexOf("=");
        if (a !== -1 && n.slice(0, a) === e)
          return decodeURIComponent(n.slice(a + 1));
      }
      return null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
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
function bS(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wS(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function hp(e, t, r) {
  let n = !bS(t);
  return e && (n || r === !1) ? wS(e, t) : t;
}
const cc = (e) => e instanceof He ? { ...e } : e;
function yr(e, t) {
  t = t || {};
  const r = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(r, "hasOwnProperty", {
    // Null-proto descriptor so a polluted Object.prototype.get cannot turn
    // this data descriptor into an accessor descriptor on the way in.
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
  function n(l, c, d, y) {
    return D.isPlainObject(l) && D.isPlainObject(c) ? D.merge.call({ caseless: y }, l, c) : D.isPlainObject(c) ? D.merge({}, c) : D.isArray(c) ? c.slice() : c;
  }
  function a(l, c, d, y) {
    if (D.isUndefined(c)) {
      if (!D.isUndefined(l))
        return n(void 0, l, d, y);
    } else return n(l, c, d, y);
  }
  function o(l, c) {
    if (!D.isUndefined(c))
      return n(void 0, c);
  }
  function s(l, c) {
    if (D.isUndefined(c)) {
      if (!D.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, c);
  }
  function i(l, c, d) {
    if (D.hasOwnProp(t, d))
      return n(l, c);
    if (D.hasOwnProp(e, d))
      return n(void 0, l);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    allowedSocketPaths: s,
    responseEncoding: s,
    validateStatus: i,
    headers: (l, c, d) => a(cc(l), cc(c), d, !0)
  };
  return D.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const d = D.hasOwnProp(u, c) ? u[c] : a, y = D.hasOwnProp(e, c) ? e[c] : void 0, h = D.hasOwnProp(t, c) ? t[c] : void 0, v = d(y, h, c);
    D.isUndefined(v) && d !== i || (r[c] = v);
  }), r;
}
const SS = ["content-type", "content-length"];
function xS(e, t, r) {
  if (r !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([n, a]) => {
    SS.includes(n.toLowerCase()) && e.set(n, a);
  });
}
const kS = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, r) => String.fromCharCode(parseInt(r, 16))
), yp = (e) => {
  const t = yr({}, e), r = (y) => D.hasOwnProp(t, y) ? t[y] : void 0, n = r("data");
  let a = r("withXSRFToken");
  const o = r("xsrfHeaderName"), s = r("xsrfCookieName");
  let i = r("headers");
  const u = r("auth"), l = r("baseURL"), c = r("allowAbsoluteUrls"), d = r("url");
  if (t.headers = i = He.from(i), t.url = dp(
    hp(l, d, c),
    e.params,
    e.paramsSerializer
  ), u && i.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? kS(u.password) : ""))
  ), D.isFormData(n) && (qe.hasStandardBrowserEnv || qe.hasStandardBrowserWebWorkerEnv ? i.setContentType(void 0) : D.isFunction(n.getHeaders) && xS(i, n.getHeaders(), r("formDataHeaderPolicy"))), qe.hasStandardBrowserEnv && (D.isFunction(a) && (a = a(t)), a === !0 || a == null && gS(t.url))) {
    const h = o && s && vS.read(s);
    h && i.set(o, h);
  }
  return t;
}, OS = typeof XMLHttpRequest < "u", CS = OS && function(e) {
  return new Promise(function(r, n) {
    const a = yp(e);
    let o = a.data;
    const s = He.from(a.headers).normalize();
    let { responseType: i, onUploadProgress: u, onDownloadProgress: l } = a, c, d, y, h, v;
    function m() {
      h && h(), v && v(), a.cancelToken && a.cancelToken.unsubscribe(c), a.signal && a.signal.removeEventListener("abort", c);
    }
    let f = new XMLHttpRequest();
    f.open(a.method.toUpperCase(), a.url, !0), f.timeout = a.timeout;
    function p() {
      if (!f)
        return;
      const O = He.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), F = {
        data: !i || i === "text" || i === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: O,
        config: e,
        request: f
      };
      mp(
        function(C) {
          r(C), m();
        },
        function(C) {
          n(C), m();
        },
        F
      ), f = null;
    }
    "onloadend" in f ? f.onloadend = p : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.startsWith("file:")) || setTimeout(p);
    }, f.onabort = function() {
      f && (n(new ee("Request aborted", ee.ECONNABORTED, e, f)), m(), f = null);
    }, f.onerror = function(A) {
      const F = A && A.message ? A.message : "Network Error", H = new ee(F, ee.ERR_NETWORK, e, f);
      H.event = A || null, n(H), m(), f = null;
    }, f.ontimeout = function() {
      let A = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const F = a.transitional || Yi;
      a.timeoutErrorMessage && (A = a.timeoutErrorMessage), n(
        new ee(
          A,
          F.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
          e,
          f
        )
      ), m(), f = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in f && D.forEach(ip(s), function(A, F) {
      f.setRequestHeader(F, A);
    }), D.isUndefined(a.withCredentials) || (f.withCredentials = !!a.withCredentials), i && i !== "json" && (f.responseType = a.responseType), l && ([y, v] = va(l, !0), f.addEventListener("progress", y)), u && f.upload && ([d, h] = va(u), f.upload.addEventListener("progress", d), f.upload.addEventListener("loadend", h)), (a.cancelToken || a.signal) && (c = (O) => {
      f && (n(!O || O.type ? new Tn(null, e, f) : O), f.abort(), m(), f = null);
    }, a.cancelToken && a.cancelToken.subscribe(c), a.signal && (a.signal.aborted ? c() : a.signal.addEventListener("abort", c)));
    const w = mS(a.url);
    if (w && !qe.protocols.includes(w)) {
      n(
        new ee(
          "Unsupported protocol " + w + ":",
          ee.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    f.send(o || null);
  });
}, ES = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const r = new AbortController();
  let n = !1;
  const a = function(u) {
    if (!n) {
      n = !0, s();
      const l = u instanceof Error ? u : this.reason;
      r.abort(
        l instanceof ee ? l : new Tn(l instanceof Error ? l.message : l)
      );
    }
  };
  let o = t && setTimeout(() => {
    o = null, a(new ee(`timeout of ${t}ms exceeded`, ee.ETIMEDOUT));
  }, t);
  const s = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((u) => {
      u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
    }), e = null);
  };
  e.forEach((u) => u.addEventListener("abort", a));
  const { signal: i } = r;
  return i.unsubscribe = () => D.asap(s), i;
}, AS = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, a;
  for (; n < r; )
    a = n + t, yield e.slice(n, a), n = a;
}, PS = async function* (e, t) {
  for await (const r of $S(e))
    yield* AS(r, t);
}, $S = async function* (e) {
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
}, dc = (e, t, r, n) => {
  const a = PS(e, t);
  let o = 0, s, i = (u) => {
    s || (s = !0, n && n(u));
  };
  return new ReadableStream(
    {
      async pull(u) {
        try {
          const { done: l, value: c } = await a.next();
          if (l) {
            i(), u.close();
            return;
          }
          let d = c.byteLength;
          if (r) {
            let y = o += d;
            r(y);
          }
          u.enqueue(new Uint8Array(c));
        } catch (l) {
          throw i(l), l;
        }
      },
      cancel(u) {
        return i(u), a.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
};
function TS(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const r = e.slice(5, t), n = e.slice(t + 1);
  if (/;base64/i.test(r)) {
    let s = n.length;
    const i = n.length;
    for (let h = 0; h < i; h++)
      if (n.charCodeAt(h) === 37 && h + 2 < i) {
        const v = n.charCodeAt(h + 1), m = n.charCodeAt(h + 2);
        (v >= 48 && v <= 57 || v >= 65 && v <= 70 || v >= 97 && v <= 102) && (m >= 48 && m <= 57 || m >= 65 && m <= 70 || m >= 97 && m <= 102) && (s -= 2, h += 2);
      }
    let u = 0, l = i - 1;
    const c = (h) => h >= 2 && n.charCodeAt(h - 2) === 37 && // '%'
    n.charCodeAt(h - 1) === 51 && // '3'
    (n.charCodeAt(h) === 68 || n.charCodeAt(h) === 100);
    l >= 0 && (n.charCodeAt(l) === 61 ? (u++, l--) : c(l) && (u++, l -= 3)), u === 1 && l >= 0 && (n.charCodeAt(l) === 61 || c(l)) && u++;
    const y = Math.floor(s / 4) * 3 - (u || 0);
    return y > 0 ? y : 0;
  }
  if (typeof Buffer < "u" && typeof Buffer.byteLength == "function")
    return Buffer.byteLength(n, "utf8");
  let o = 0;
  for (let s = 0, i = n.length; s < i; s++) {
    const u = n.charCodeAt(s);
    if (u < 128)
      o += 1;
    else if (u < 2048)
      o += 2;
    else if (u >= 55296 && u <= 56319 && s + 1 < i) {
      const l = n.charCodeAt(s + 1);
      l >= 56320 && l <= 57343 ? (o += 4, s++) : o += 3;
    } else
      o += 3;
  }
  return o;
}
const Ji = "1.16.1", fc = 64 * 1024, { isFunction: Un } = D, pc = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, DS = (e) => {
  const t = D.global !== void 0 && D.global !== null ? D.global : globalThis, { ReadableStream: r, TextEncoder: n } = t;
  e = D.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: a, Request: o, Response: s } = e, i = a ? Un(a) : typeof fetch == "function", u = Un(o), l = Un(s);
  if (!i)
    return !1;
  const c = i && Un(r), d = i && (typeof n == "function" ? /* @__PURE__ */ ((p) => (w) => p.encode(w))(new n()) : async (p) => new Uint8Array(await new o(p).arrayBuffer())), y = u && c && pc(() => {
    let p = !1;
    const w = new o(qe.origin, {
      body: new r(),
      method: "POST",
      get duplex() {
        return p = !0, "half";
      }
    }), O = w.headers.has("Content-Type");
    return w.body != null && w.body.cancel(), p && !O;
  }), h = l && c && pc(() => D.isReadableStream(new s("").body)), v = {
    stream: h && ((p) => p.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((p) => {
    !v[p] && (v[p] = (w, O) => {
      let A = w && w[p];
      if (A)
        return A.call(w);
      throw new ee(
        `Response type '${p}' is not supported`,
        ee.ERR_NOT_SUPPORT,
        O
      );
    });
  });
  const m = async (p) => {
    if (p == null)
      return 0;
    if (D.isBlob(p))
      return p.size;
    if (D.isSpecCompliantForm(p))
      return (await new o(qe.origin, {
        method: "POST",
        body: p
      }).arrayBuffer()).byteLength;
    if (D.isArrayBufferView(p) || D.isArrayBuffer(p))
      return p.byteLength;
    if (D.isURLSearchParams(p) && (p = p + ""), D.isString(p))
      return (await d(p)).byteLength;
  }, f = async (p, w) => {
    const O = D.toFiniteNumber(p.getContentLength());
    return O ?? m(w);
  };
  return async (p) => {
    let {
      url: w,
      method: O,
      data: A,
      signal: F,
      cancelToken: H,
      timeout: C,
      onDownloadProgress: K,
      onUploadProgress: M,
      responseType: $,
      headers: q,
      withCredentials: b = "same-origin",
      fetchOptions: E,
      maxContentLength: k,
      maxBodyLength: x
    } = yp(p);
    const W = D.isNumber(k) && k > -1, L = D.isNumber(x) && x > -1;
    let _ = a || fetch;
    $ = $ ? ($ + "").toLowerCase() : "text";
    let G = ES(
      [F, H && H.toAbortSignal()],
      C
    ), re = null;
    const Se = G && G.unsubscribe && (() => {
      G.unsubscribe();
    });
    let Ne;
    try {
      if (W && typeof w == "string" && w.startsWith("data:") && TS(w) > k)
        throw new ee(
          "maxContentLength size of " + k + " exceeded",
          ee.ERR_BAD_RESPONSE,
          p,
          re
        );
      if (L && O !== "get" && O !== "head") {
        const ue = await f(q, A);
        if (typeof ue == "number" && isFinite(ue) && ue > x)
          throw new ee(
            "Request body larger than maxBodyLength limit",
            ee.ERR_BAD_REQUEST,
            p,
            re
          );
      }
      if (M && y && O !== "get" && O !== "head" && (Ne = await f(q, A)) !== 0) {
        let ue = new o(w, {
          method: "POST",
          body: A,
          duplex: "half"
        }), be;
        if (D.isFormData(A) && (be = ue.headers.get("content-type")) && q.setContentType(be), ue.body) {
          const [ie, ge] = lc(
            Ne,
            va(uc(M))
          );
          A = dc(ue.body, fc, ie, ge);
        }
      }
      D.isString(b) || (b = b ? "include" : "omit");
      const de = u && "credentials" in o.prototype;
      if (D.isFormData(A)) {
        const ue = q.getContentType();
        ue && /^multipart\/form-data/i.test(ue) && !/boundary=/i.test(ue) && q.delete("content-type");
      }
      q.set("User-Agent", "axios/" + Ji, !1);
      const Ce = {
        ...E,
        signal: G,
        method: O.toUpperCase(),
        headers: ip(q.normalize()),
        body: A,
        duplex: "half",
        credentials: de ? b : void 0
      };
      re = u && new o(w, Ce);
      let ve = await (u ? _(re, E) : _(w, Ce));
      if (W) {
        const ue = D.toFiniteNumber(ve.headers.get("content-length"));
        if (ue != null && ue > k)
          throw new ee(
            "maxContentLength size of " + k + " exceeded",
            ee.ERR_BAD_RESPONSE,
            p,
            re
          );
      }
      const Be = h && ($ === "stream" || $ === "response");
      if (h && ve.body && (K || W || Be && Se)) {
        const ue = {};
        ["status", "statusText", "headers"].forEach(($e) => {
          ue[$e] = ve[$e];
        });
        const be = D.toFiniteNumber(ve.headers.get("content-length")), [ie, ge] = K && lc(
          be,
          va(uc(K), !0)
        ) || [];
        let pe = 0;
        const Ae = ($e) => {
          if (W && (pe = $e, pe > k))
            throw new ee(
              "maxContentLength size of " + k + " exceeded",
              ee.ERR_BAD_RESPONSE,
              p,
              re
            );
          ie && ie($e);
        };
        ve = new s(
          dc(ve.body, fc, Ae, () => {
            ge && ge(), Se && Se();
          }),
          ue
        );
      }
      $ = $ || "text";
      let Ie = await v[D.findKey(v, $) || "text"](
        ve,
        p
      );
      if (W && !h && !Be) {
        let ue;
        if (Ie != null && (typeof Ie.byteLength == "number" ? ue = Ie.byteLength : typeof Ie.size == "number" ? ue = Ie.size : typeof Ie == "string" && (ue = typeof n == "function" ? new n().encode(Ie).byteLength : Ie.length)), typeof ue == "number" && ue > k)
          throw new ee(
            "maxContentLength size of " + k + " exceeded",
            ee.ERR_BAD_RESPONSE,
            p,
            re
          );
      }
      return !Be && Se && Se(), await new Promise((ue, be) => {
        mp(ue, be, {
          data: Ie,
          headers: He.from(ve.headers),
          status: ve.status,
          statusText: ve.statusText,
          config: p,
          request: re
        });
      });
    } catch (de) {
      if (Se && Se(), G && G.aborted && G.reason instanceof ee) {
        const Ce = G.reason;
        throw Ce.config = p, re && (Ce.request = re), de !== Ce && (Ce.cause = de), Ce;
      }
      throw de && de.name === "TypeError" && /Load failed|fetch/i.test(de.message) ? Object.assign(
        new ee(
          "Network Error",
          ee.ERR_NETWORK,
          p,
          re,
          de && de.response
        ),
        {
          cause: de.cause || de
        }
      ) : ee.from(de, de && de.code, p, re, de && de.response);
    }
  };
}, RS = /* @__PURE__ */ new Map(), gp = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: a } = t, o = [n, a, r];
  let s = o.length, i = s, u, l, c = RS;
  for (; i--; )
    u = o[i], l = c.get(u), l === void 0 && c.set(u, l = i ? /* @__PURE__ */ new Map() : DS(t)), c = l;
  return l;
};
gp();
const Qi = {
  http: Q2,
  xhr: CS,
  fetch: {
    get: gp
  }
};
D.forEach(Qi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const mc = (e) => `- ${e}`, _S = (e) => D.isFunction(e) || e === null || e === !1;
function FS(e, t) {
  e = D.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, a;
  const o = {};
  for (let s = 0; s < r; s++) {
    n = e[s];
    let i;
    if (a = n, !_S(n) && (a = Qi[(i = String(n)).toLowerCase()], a === void 0))
      throw new ee(`Unknown adapter '${i}'`);
    if (a && (D.isFunction(a) || (a = a.get(t))))
      break;
    o[i || "#" + s] = a;
  }
  if (!a) {
    const s = Object.entries(o).map(
      ([u, l]) => `adapter ${u} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = r ? s.length > 1 ? `since :
` + s.map(mc).join(`
`) : " " + mc(s[0]) : "as no adapter specified";
    throw new ee(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return a;
}
const vp = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: FS,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Qi
};
function ls(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Tn(null, e);
}
function hc(e) {
  return ls(e), e.headers = He.from(e.headers), e.data = is.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vp.getAdapter(e.adapter || $n.adapter, e)(e).then(
    function(n) {
      ls(e), e.response = n;
      try {
        n.data = is.call(e, e.transformResponse, n);
      } finally {
        delete e.response;
      }
      return n.headers = He.from(n.headers), n;
    },
    function(n) {
      if (!pp(n) && (ls(e), n && n.response)) {
        e.response = n.response;
        try {
          n.response.data = is.call(
            e,
            e.transformResponse,
            n.response
          );
        } finally {
          delete e.response;
        }
        n.response.headers = He.from(n.response.headers);
      }
      return Promise.reject(n);
    }
  );
}
const Va = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Va[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const yc = {};
Va.transitional = function(t, r, n) {
  function a(o, s) {
    return "[Axios v" + Ji + "] Transitional option '" + o + "'" + s + (n ? ". " + n : "");
  }
  return (o, s, i) => {
    if (t === !1)
      throw new ee(
        a(s, " has been removed" + (r ? " in " + r : "")),
        ee.ERR_DEPRECATED
      );
    return r && !yc[s] && (yc[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, s, i) : !0;
  };
};
Va.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function IS(e, t, r) {
  if (typeof e != "object")
    throw new ee("options must be an object", ee.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let a = n.length;
  for (; a-- > 0; ) {
    const o = n[a], s = Object.prototype.hasOwnProperty.call(t, o) ? t[o] : void 0;
    if (s) {
      const i = e[o], u = i === void 0 || s(i, o, e);
      if (u !== !0)
        throw new ee(
          "option " + o + " must be " + u,
          ee.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (r !== !0)
      throw new ee("Unknown option " + o, ee.ERR_BAD_OPTION);
  }
}
const ra = {
  assertOptions: IS,
  validators: Va
}, lt = ra.validators;
let cr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new ic(),
      response: new ic()
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
        const o = (() => {
          if (!a.stack)
            return "";
          const s = a.stack.indexOf(`
`);
          return s === -1 ? "" : a.stack.slice(s + 1);
        })();
        try {
          if (!n.stack)
            n.stack = o;
          else if (o) {
            const s = o.indexOf(`
`), i = s === -1 ? -1 : o.indexOf(`
`, s + 1), u = i === -1 ? "" : o.slice(i + 1);
            String(n.stack).endsWith(u) || (n.stack += `
` + o);
          }
        } catch {
        }
      }
      throw n;
    }
  }
  _request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = yr(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: o } = r;
    n !== void 0 && ra.assertOptions(
      n,
      {
        silentJSONParsing: lt.transitional(lt.boolean),
        forcedJSONParsing: lt.transitional(lt.boolean),
        clarifyTimeoutError: lt.transitional(lt.boolean),
        legacyInterceptorReqResOrdering: lt.transitional(lt.boolean)
      },
      !1
    ), a != null && (D.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : ra.assertOptions(
      a,
      {
        encode: lt.function,
        serialize: lt.function
      },
      !0
    )), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ra.assertOptions(
      r,
      {
        baseUrl: lt.spelling("baseURL"),
        withXsrfToken: lt.spelling("withXSRFToken")
      },
      !0
    ), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = o && D.merge(o.common, o[r.method]);
    o && D.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (v) => {
      delete o[v];
    }), r.headers = He.concat(s, o);
    const i = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      if (typeof m.runWhen == "function" && m.runWhen(r) === !1)
        return;
      u = u && m.synchronous;
      const f = r.transitional || Yi;
      f && f.legacyInterceptorReqResOrdering ? i.unshift(m.fulfilled, m.rejected) : i.push(m.fulfilled, m.rejected);
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let c, d = 0, y;
    if (!u) {
      const v = [hc.bind(this), void 0];
      for (v.unshift(...i), v.push(...l), y = v.length, c = Promise.resolve(r); d < y; )
        c = c.then(v[d++], v[d++]);
      return c;
    }
    y = i.length;
    let h = r;
    for (; d < y; ) {
      const v = i[d++], m = i[d++];
      try {
        h = v(h);
      } catch (f) {
        m.call(this, f);
        break;
      }
    }
    try {
      c = hc.call(this, h);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, y = l.length; d < y; )
      c = c.then(l[d++], l[d++]);
    return c;
  }
  getUri(t) {
    t = yr(this.defaults, t);
    const r = hp(t.baseURL, t.url, t.allowAbsoluteUrls);
    return dp(r, t.params, t.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(t) {
  cr.prototype[t] = function(r, n) {
    return this.request(
      yr(n || {}, {
        method: t,
        url: r,
        data: (n || {}).data
      })
    );
  };
});
D.forEach(["post", "put", "patch", "query"], function(t) {
  function r(n) {
    return function(o, s, i) {
      return this.request(
        yr(i || {}, {
          method: t,
          headers: n ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: o,
          data: s
        })
      );
    };
  }
  cr.prototype[t] = r(), t !== "query" && (cr.prototype[t + "Form"] = r(!0));
});
let BS = class bp {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((a) => {
      if (!n._listeners) return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](a);
      n._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const s = new Promise((i) => {
        n.subscribe(i), o = i;
      }).then(a);
      return s.cancel = function() {
        n.unsubscribe(o);
      }, s;
    }, t(function(o, s, i) {
      n.reason || (n.reason = new Tn(o, s, i), r(n.reason));
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
      token: new bp(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function LS(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function MS(e) {
  return D.isObject(e) && e.isAxiosError === !0;
}
const Js = {
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
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Js).forEach(([e, t]) => {
  Js[t] = e;
});
function wp(e) {
  const t = new cr(e), r = Zf(cr.prototype.request, t);
  return D.extend(r, cr.prototype, t, { allOwnKeys: !0 }), D.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return wp(yr(e, a));
  }, r;
}
const Te = wp($n);
Te.Axios = cr;
Te.CanceledError = Tn;
Te.CancelToken = BS;
Te.isCancel = pp;
Te.VERSION = Ji;
Te.toFormData = qa;
Te.AxiosError = ee;
Te.Cancel = Te.CanceledError;
Te.all = function(t) {
  return Promise.all(t);
};
Te.spread = LS;
Te.isAxiosError = MS;
Te.mergeConfig = yr;
Te.AxiosHeaders = He;
Te.formToJSON = (e) => fp(D.isHTMLForm(e) ? new FormData(e) : e);
Te.getAdapter = vp.getAdapter;
Te.HttpStatusCode = Js;
Te.default = Te;
const {
  Axios: P4,
  AxiosError: $4,
  CanceledError: T4,
  isCancel: D4,
  CancelToken: R4,
  VERSION: _4,
  all: F4,
  Cancel: I4,
  isAxiosError: B4,
  spread: L4,
  toFormData: M4,
  AxiosHeaders: N4,
  HttpStatusCode: j4,
  formToJSON: q4,
  getAdapter: V4,
  mergeConfig: z4,
  create: U4
} = Te;
function Qs(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function St(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var gc = (e) => St("before", { cancelable: !0, detail: { visit: e } }), NS = (e) => St("error", { detail: { errors: e } }), jS = (e) => St("exception", { cancelable: !0, detail: { exception: e } }), qS = (e) => St("finish", { detail: { visit: e } }), VS = (e) => St("invalid", { cancelable: !0, detail: { response: e } }), cn = (e) => St("navigate", { detail: { page: e } }), zS = (e) => St("progress", { detail: { progress: e } }), US = (e) => St("start", { detail: { visit: e } }), HS = (e) => St("success", { detail: { page: e } }), WS = (e, t) => St("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), KS = (e) => St("prefetching", { detail: { visit: e } }), ze = class {
  static set(t, r) {
    typeof window < "u" && window.sessionStorage.setItem(t, JSON.stringify(r));
  }
  static get(t) {
    if (typeof window < "u") return JSON.parse(window.sessionStorage.getItem(t) || "null");
  }
  static merge(t, r) {
    let n = this.get(t);
    n === null ? this.set(t, r) : this.set(t, { ...n, ...r });
  }
  static remove(t) {
    typeof window < "u" && window.sessionStorage.removeItem(t);
  }
  static removeNested(t, r) {
    let n = this.get(t);
    n !== null && (delete n[r], this.set(t, n));
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
ze.locationVisitKey = "inertiaLocationVisit";
var GS = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = Sp(), r = await xp(), n = await ex(r);
  if (!n) throw new Error("Unable to encrypt history");
  return await XS(t, n, e);
}, Vr = { key: "historyKey", iv: "historyIv" }, YS = async (e) => {
  let t = Sp(), r = await xp();
  if (!r) throw new Error("Unable to decrypt history");
  return await JS(t, r, e);
}, XS = async (e, t, r) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = new TextEncoder(), a = JSON.stringify(r), o = new Uint8Array(a.length * 3), s = n.encodeInto(a, o);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, o.subarray(0, s.written));
}, JS = async (e, t, r) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  let n = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, r);
  return JSON.parse(new TextDecoder().decode(n));
}, Sp = () => {
  let e = ze.get(Vr.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return ze.set(Vr.iv, Array.from(t)), t;
}, QS = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), ZS = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  ze.set(Vr.key, Array.from(new Uint8Array(t)));
}, ex = async (e) => {
  if (e) return e;
  let t = await QS();
  return t ? (await ZS(t), t) : null;
}, xp = async () => {
  let e = ze.get(Vr.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, pt = class {
  static save() {
    he.saveScrollPositions(Array.from(this.regions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })));
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
    this.restoreDocument(), this.regions().forEach((t, r) => {
      let n = e[r];
      n && (typeof t.scrollTo == "function" ? t.scrollTo(n.left, n.top) : (t.scrollTop = n.top, t.scrollLeft = n.left));
    });
  }
  static restoreDocument() {
    let e = he.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    let t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    he.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function Zs(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Zs(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Zs(t));
}
var vc = (e) => e instanceof FormData;
function kp(e, t = new FormData(), r = null) {
  e = e || {};
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && Cp(t, Op(r, n), e[n]);
  return t;
}
function Op(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Cp(e, t, r) {
  if (Array.isArray(r)) return Array.from(r.keys()).forEach((n) => Cp(e, Op(t, n.toString()), r[n]));
  if (r instanceof Date) return e.append(t, r.toISOString());
  if (r instanceof File) return e.append(t, r, r.name);
  if (r instanceof Blob) return e.append(t, r);
  if (typeof r == "boolean") return e.append(t, r ? "1" : "0");
  if (typeof r == "string") return e.append(t, r);
  if (typeof r == "number") return e.append(t, `${r}`);
  if (r == null) return e.append(t, "");
  kp(r, e, t);
}
function Yt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var tx = (e, t, r, n, a) => {
  let o = typeof e == "string" ? Yt(e) : e;
  if ((Zs(t) || n) && !vc(t) && (t = kp(t)), vc(t)) return [o, t];
  let [s, i] = Zi(r, o, t, a);
  return [Yt(s), i];
};
function Zi(e, t, r, n = "brackets") {
  let a = /^https?:\/\//.test(t.toString()), o = a || t.toString().startsWith("/"), s = !o && !t.toString().startsWith("#") && !t.toString().startsWith("?"), i = t.toString().includes("?") || e === "get" && Object.keys(r).length, u = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(r).length && (l.search = rc.stringify(rn(rc.parse(l.search, { ignoreQueryPrefix: !0 }), r), { encodeValuesOnly: !0, arrayFormat: n }), r = {}), [[a ? `${l.protocol}//${l.host}` : "", o ? l.pathname : "", s ? l.pathname.substring(1) : "", i ? l.search : "", u ? l.hash : ""].join(""), r];
}
function ba(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var bc = (e, t) => {
  e.hash && !t.hash && ba(e).href === t.href && (t.hash = e.hash);
}, ei = (e, t) => ba(e).href === ba(t).href, rx = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: r }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = r, this;
  }
  set(e, { replace: t = !1, preserveScroll: r = !1, preserveState: n = !1 } = {}) {
    this.componentId = {};
    let a = this.componentId;
    return e.clearHistory && he.clear(), this.resolve(e.component).then((o) => {
      if (a !== this.componentId) return;
      e.rememberedState ?? (e.rememberedState = {});
      let s = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || ei(Yt(e.url), s), new Promise((i) => {
        t ? he.replaceState(e, () => i(null)) : he.pushState(e, () => i(null));
      }).then(() => {
        let i = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, i && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: o, page: e, preserveState: n }).then(() => {
          r || pt.reset(), ir.fireInternalEvent("loadDeferredProps"), t || cn(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((r) => (this.page = e, this.cleared = !1, he.setCurrent(e), this.swap({ component: r, page: e, preserveState: t })));
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
}, ae = new rx(), Ep = class {
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
}, an = typeof window > "u", Zr = new Ep(), wc = !an && /CriOS/.test(window.navigator.userAgent), nx = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    var r;
    this.replaceState({ ...ae.get(), rememberedState: { ...((r = ae.get()) == null ? void 0 : r.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, r;
    if (!an) return (r = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : r[e];
  }
  pushState(e, t = null) {
    if (!an) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Zr.add(() => this.getPageData(e).then((r) => {
        let n = () => {
          this.doPushState({ page: r }, e.url), t && t();
        };
        wc ? setTimeout(n) : n();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? GS(e).then(t) : t(e));
  }
  processQueue() {
    return Zr.process();
  }
  decrypt(e = null) {
    var r;
    if (an) return Promise.resolve(e ?? ae.get());
    let t = e ?? ((r = window.history.state) == null ? void 0 : r.page);
    return this.decryptPageData(t).then((n) => {
      if (!n) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? YS(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Zr.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, scrollRegions: e });
    }));
  }
  saveDocumentScrollPosition(e) {
    Zr.add(() => Promise.resolve().then(() => {
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
    if (ae.merge(e), !an) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Zr.add(() => this.getPageData(e).then((r) => {
        let n = () => {
          this.doReplaceState({ page: r }, e.url), t && t();
        };
        wc ? setTimeout(n) : n();
      }));
    }
  }
  doReplaceState(e, t) {
    var r, n;
    window.history.replaceState({ ...e, scrollRegions: e.scrollRegions ?? ((r = window.history.state) == null ? void 0 : r.scrollRegions), documentScrollPosition: e.documentScrollPosition ?? ((n = window.history.state) == null ? void 0 : n.documentScrollPosition) }, "", t);
  }
  doPushState(e, t) {
    window.history.pushState(e, "", t);
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
    ze.remove(Vr.key), ze.remove(Vr.iv);
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
var he = new nx(), ax = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Qs(pt.onWindowScroll.bind(pt), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Qs(pt.onScroll.bind(pt), 100), !0);
  }
  onGlobalEvent(e, t) {
    let r = (n) => {
      let a = t(n);
      n.cancelable && !n.defaultPrevented && a === !1 && n.preventDefault();
    };
    return this.registerListener(`inertia:${e}`, r);
  }
  on(e, t) {
    return this.internalListeners.push({ event: e, listener: t }), () => {
      this.internalListeners = this.internalListeners.filter((r) => r.listener !== t);
    };
  }
  onMissingHistoryItem() {
    ae.clear(), this.fireInternalEvent("missingHistoryItem");
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
      let r = Yt(ae.get().url);
      r.hash = window.location.hash, he.replaceState({ ...ae.get(), url: r.href }), pt.reset();
      return;
    }
    if (!he.isValidState(t)) return this.onMissingHistoryItem();
    he.decrypt(t.page).then((r) => {
      ae.setQuietly(r, { preserveState: !1 }).then(() => {
        pt.restore(he.getScrollRegions()), cn(ae.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, ir = new ax(), ox = class {
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
}, us = new ox(), sx = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    us.isReload() && he.deleteState(he.rememberedState);
  }
  static handleBackForward() {
    if (!us.isBackForward() || !he.hasAnyState()) return !1;
    let e = he.getScrollRegions();
    return he.decrypt().then((t) => {
      ae.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        pt.restore(e), cn(ae.get());
      });
    }).catch(() => {
      ir.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!ze.exists(ze.locationVisitKey)) return !1;
    let e = ze.get(ze.locationVisitKey) || {};
    return ze.remove(ze.locationVisitKey), typeof window < "u" && ae.setUrlHash(window.location.hash), he.decrypt(ae.get()).then(() => {
      let t = he.getState(he.rememberedState, {}), r = he.getScrollRegions();
      ae.remember(t), ae.set(ae.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && pt.restore(r), cn(ae.get());
      });
    }).catch(() => {
      ir.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && ae.setUrlHash(window.location.hash), ae.set(ae.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      us.isReload() && pt.restore(he.getScrollRegions()), cn(ae.get());
    });
  }
}, ix = class {
  constructor(e, t, r) {
    this.id = null, this.throttle = !1, this.keepAlive = !1, this.cbCount = 0, this.keepAlive = r.keepAlive ?? !1, this.cb = t, this.interval = e, (r.autoStart ?? !0) && this.start();
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
}, lx = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, r) {
    let n = new ix(e, t, r);
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
}, ux = new lx(), Ap = (e, t, r) => {
  if (e === t) return !0;
  for (let n in e) if (!r.includes(n) && e[n] !== t[n] && !cx(e[n], t[n])) return !1;
  return !0;
}, cx = (e, t) => {
  switch (typeof e) {
    case "object":
      return Ap(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, dx = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Sc = (e) => {
  if (typeof e == "number") return e;
  for (let [t, r] of Object.entries(dx)) if (e.endsWith(t)) return parseFloat(e) * r;
  return parseInt(e);
}, fx = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: r }) {
    if (this.findInFlight(e)) return Promise.resolve();
    let n = this.findCached(e);
    if (!e.fresh && n && n.staleTimestamp > Date.now()) return Promise.resolve();
    let [a, o] = this.extractStaleValues(r), s = new Promise((i, u) => {
      t({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), u();
      }, onError: (l) => {
        this.remove(e), e.onError(l), u();
      }, onPrefetching(l) {
        e.onPrefetching(l);
      }, onPrefetched(l, c) {
        e.onPrefetched(l, c);
      }, onPrefetchResponse(l) {
        i(l);
      } });
    }).then((i) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + a, response: s, singleUse: r === 0, timestamp: Date.now(), inFlight: !1 }), this.scheduleForRemoval(e, o), this.inFlightRequests = this.inFlightRequests.filter((u) => !this.paramsAreEqual(u.params, e)), i.handlePrefetch(), i));
    return this.inFlightRequests.push({ params: { ...e }, response: s, staleTimestamp: null, inFlight: !0 }), s;
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
    return [Sc(t), Sc(r)];
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
      if (this.currentUseId === r) return n.mergeParams({ ...t, onPrefetched: () => {
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
    return Ap(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, ar = new fx(), px = class Pp {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let r = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...r, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new Pp(t);
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
    this.isPartial() && (t["X-Inertia-Partial-Component"] = ae.get().component);
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
}, mx = { modal: null, listener: null, show(e) {
  typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(e)}`);
  let t = document.createElement("html");
  t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top")), this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide());
  let r = document.createElement("iframe");
  if (r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", this.modal.appendChild(r), document.body.prepend(this.modal), document.body.style.overflow = "hidden", !r.contentWindow) throw new Error("iframe not yet ready.");
  r.contentWindow.document.open(), r.contentWindow.document.write(t.outerHTML), r.contentWindow.document.close(), this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
}, hide() {
  this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
}, hideOnEscape(e) {
  e.keyCode === 27 && this.hide();
} }, hx = new Ep(), xc = class $p {
  constructor(t, r, n) {
    this.requestParams = t, this.response = r, this.originatingPage = n;
  }
  static create(t, r, n) {
    return new $p(t, r, n);
  }
  async handlePrefetch() {
    ei(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return hx.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), WS(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await he.processQueue(), he.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = ae.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let r = this.getScopedErrors(t);
      return NS(r), this.requestParams.all().onError(r);
    }
    HS(ae.get()), await this.requestParams.all().onSuccess(ae.get()), he.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let r = Yt(this.getHeader("x-inertia-location"));
      return bc(this.requestParams.all().url, r), this.locationVisit(r);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (VS(t)) return mx.show(t.data);
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
      if (ze.set(ze.locationVisitKey, { preserveScroll: this.requestParams.all().preserveScroll === !0 }), typeof window > "u") return;
      ei(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let t = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(t) ? (this.mergeProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = he.preserveUrl ? ae.get().url : this.pageUrl(t), ae.set(t, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
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
    if (this.originatingPage.component !== ae.get().component) return !1;
    let r = Yt(this.originatingPage.url), n = Yt(ae.get().url);
    return r.origin === n.origin && r.pathname === n.pathname;
  }
  pageUrl(t) {
    let r = Yt(t.url);
    return bc(this.requestParams.all().url, r), r.pathname + r.search + r.hash;
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== ae.get().component) return;
    let r = t.mergeProps || [], n = t.deepMergeProps || [];
    r.forEach((a) => {
      let o = t.props[a];
      Array.isArray(o) ? t.props[a] = [...ae.get().props[a] || [], ...o] : typeof o == "object" && o !== null && (t.props[a] = { ...ae.get().props[a] || [], ...o });
    }), n.forEach((a) => {
      let o = t.props[a], s = ae.get().props[a], i = (u, l) => Array.isArray(l) ? [...Array.isArray(u) ? u : [], ...l] : typeof l == "object" && l !== null ? Object.keys(l).reduce((c, d) => (c[d] = i(u ? u[d] : void 0, l[d]), c), { ...u }) : l;
      t.props[a] = i(s, o);
    }), t.props = { ...ae.get().props, ...t.props };
  }
  async setRememberedState(t) {
    let r = await he.getState(he.rememberedState, {});
    this.requestParams.all().preserveState && r && t.component === ae.get().component && (t.rememberedState = r);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, kc = class Tp {
  constructor(t, r) {
    this.page = r, this.requestHasFinished = !1, this.requestParams = px.create(t), this.cancelToken = new AbortController();
  }
  static create(t, r) {
    return new Tp(t, r);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), US(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), KS(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return Te({ method: this.requestParams.all().method, url: ba(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((r) => (this.response = xc.create(this.requestParams, r, this.page), this.response.handle())).catch((r) => r != null && r.response ? (this.response = xc.create(this.requestParams, r.response, this.page), this.response.handle()) : Promise.reject(r)).catch((r) => {
      if (!Te.isCancel(r) && jS(r)) return Promise.reject(r);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, qS(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: r = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: r }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, zS(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    let t = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return ae.get().version && (t["X-Inertia-Version"] = ae.get().version), t;
  }
}, Oc = class {
  constructor({ maxConcurrent: e, interruptible: t }) {
    this.requests = [], this.maxConcurrent = e, this.interruptible = t;
  }
  send(e) {
    this.requests.push(e), e.send().then(() => {
      this.requests = this.requests.filter((t) => t !== e);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight() {
    this.cancel({ cancelled: !0 }, !0);
  }
  cancel({ cancelled: e = !1, interrupted: t = !1 } = {}, r) {
    var n;
    this.shouldCancel(r) && ((n = this.requests.shift()) == null || n.cancel({ interrupted: t, cancelled: e }));
  }
  shouldCancel(e) {
    return e ? !0 : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, yx = class {
  constructor() {
    this.syncRequestStream = new Oc({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new Oc({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: r }) {
    ae.init({ initialPage: e, resolveComponent: t, swapComponent: r }), sx.handle(), ir.init(), ir.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), ir.on("loadDeferredProps", () => {
      this.loadDeferredProps();
    });
  }
  get(e, t = {}, r = {}) {
    return this.visit(e, { ...r, method: "get", data: t });
  }
  post(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "post", data: t });
  }
  put(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "put", data: t });
  }
  patch(e, t = {}, r = {}) {
    return this.visit(e, { preserveState: !0, ...r, method: "patch", data: t });
  }
  delete(e, t = {}) {
    return this.visit(e, { preserveState: !0, ...t, method: "delete" });
  }
  reload(e = {}) {
    if (!(typeof window > "u")) return this.visit(window.location.href, { ...e, preserveScroll: !0, preserveState: !0, async: !0, headers: { ...e.headers || {}, "Cache-Control": "no-cache" } });
  }
  remember(e, t = "default") {
    he.remember(e, t);
  }
  restore(e = "default") {
    return he.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : ir.onGlobalEvent(e, t);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, r = {}) {
    return ux.add(e, () => this.reload(t), { autoStart: r.autoStart ?? !0, keepAlive: r.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let r = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), n = this.getVisitEvents(t);
    if (n.onBefore(r) === !1 || !gc(r)) return;
    let a = r.async ? this.asyncRequestStream : this.syncRequestStream;
    a.interruptInFlight(), !ae.isCleared() && !r.preserveUrl && pt.save();
    let o = { ...r, ...n }, s = ar.get(o);
    s ? (Cc(s.inFlight), ar.use(s, o)) : (Cc(!0), a.send(kc.create(o, ae.get())));
  }
  getCached(e, t = {}) {
    return ar.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    ar.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    ar.removeAll();
  }
  getPrefetching(e, t = {}) {
    return ar.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: r = 3e4 }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let n = this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), a = n.url.origin + n.url.pathname + n.url.search, o = window.location.origin + window.location.pathname + window.location.search;
    if (a === o) return;
    let s = this.getVisitEvents(t);
    if (s.onBefore(n) === !1 || !gc(n)) return;
    Px(), this.asyncRequestStream.interruptInFlight();
    let i = { ...n, ...s };
    new Promise((u) => {
      let l = () => {
        ae.get() ? u() : setTimeout(l, 50);
      };
      l();
    }).then(() => {
      ar.add(i, (u) => {
        this.asyncRequestStream.send(kc.create(u, ae.get()));
      }, { cacheFor: r });
    });
  }
  clearHistory() {
    he.clear();
  }
  decryptHistory() {
    return he.decrypt();
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  push(e) {
    this.clientVisit(e);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    let r = ae.get(), n = typeof e.props == "function" ? e.props(r.props) : e.props ?? r.props;
    ae.set({ ...r, ...e, props: n }, { replace: t, preserveScroll: e.preserveScroll, preserveState: e.preserveState });
  }
  getPrefetchParams(e, t) {
    return { ...this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), ...this.getVisitEvents(t) };
  }
  getPendingVisit(e, t, r = {}) {
    let n = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [a, o] = tx(e, n.data, n.method, n.forceFormData, n.queryStringArrayFormat);
    return { cancelled: !1, completed: !1, interrupted: !1, ...n, ...r, url: a, data: o };
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
    let e = (t = ae.get()) == null ? void 0 : t.deferredProps;
    e && Object.entries(e).forEach(([r, n]) => {
      this.reload({ only: n });
    });
  }
}, gx = { buildDOMElement(e) {
  let t = document.createElement("template");
  t.innerHTML = e;
  let r = t.content.firstChild;
  if (!e.startsWith("<script ")) return r;
  let n = document.createElement("script");
  return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((a) => {
    n.setAttribute(a, r.getAttribute(a) || "");
  }), n;
}, isInertiaManagedElement(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.getAttribute("inertia") !== null;
}, findMatchingElementIndex(e, t) {
  let r = e.getAttribute("inertia");
  return r !== null ? t.findIndex((n) => n.getAttribute("inertia") === r) : -1;
}, update: Qs(function(e) {
  let t = e.map((r) => this.buildDOMElement(r));
  Array.from(document.head.childNodes).filter((r) => this.isInertiaManagedElement(r)).forEach((r) => {
    var o, s;
    let n = this.findMatchingElementIndex(r, t);
    if (n === -1) {
      (o = r == null ? void 0 : r.parentNode) == null || o.removeChild(r);
      return;
    }
    let a = t.splice(n, 1)[0];
    a && !r.isEqualNode(a) && ((s = r == null ? void 0 : r.parentNode) == null || s.replaceChild(a, r));
  }), t.forEach((r) => document.head.appendChild(r));
}, 1) };
function vx(e, t, r) {
  let n = {}, a = 0;
  function o() {
    let c = a += 1;
    return n[c] = [], c.toString();
  }
  function s(c) {
    c === null || Object.keys(n).indexOf(c) === -1 || (delete n[c], l());
  }
  function i(c, d = []) {
    c !== null && Object.keys(n).indexOf(c) > -1 && (n[c] = d), l();
  }
  function u() {
    let c = t(""), d = { ...c ? { title: `<title inertia="">${c}</title>` } : {} }, y = Object.values(n).reduce((h, v) => h.concat(v), []).reduce((h, v) => {
      if (v.indexOf("<") === -1) return h;
      if (v.indexOf("<title ") === 0) {
        let f = v.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return h.title = f ? `${f[1]}${t(f[2])}${f[3]}` : v, h;
      }
      let m = v.match(/ inertia="[^"]+"/);
      return m ? h[m[0]] = v : h[Object.keys(h).length] = v, h;
    }, d);
    return Object.values(y);
  }
  function l() {
    e ? r(u()) : gx.update(u());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let c = o();
    return { update: (d) => i(c, d), disconnect: () => s(c) };
  } };
}
var De = "nprogress", Le = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, tr = null, bx = (e) => {
  Object.assign(Le, e), Le.includeCSS && Cx(Le.color);
}, za = (e) => {
  let t = Dp();
  e = Bp(e, Le.minimum, 1), tr = e === 1 ? null : e;
  let r = Sx(!t), n = r.querySelector(Le.barSelector), a = Le.speed, o = Le.easing;
  r.offsetWidth, Ox((s) => {
    let i = Le.positionUsing === "translate3d" ? { transition: `all ${a}ms ${o}`, transform: `translate3d(${na(e)}%,0,0)` } : Le.positionUsing === "translate" ? { transition: `all ${a}ms ${o}`, transform: `translate(${na(e)}%,0)` } : { marginLeft: `${na(e)}%` };
    for (let u in i) n.style[u] = i[u];
    if (e !== 1) return setTimeout(s, a);
    r.style.transition = "none", r.style.opacity = "1", r.offsetWidth, setTimeout(() => {
      r.style.transition = `all ${a}ms linear`, r.style.opacity = "0", setTimeout(() => {
        Ip(), s();
      }, a);
    }, a);
  });
}, Dp = () => typeof tr == "number", Rp = () => {
  tr || za(0);
  let e = function() {
    setTimeout(function() {
      tr && (_p(), e());
    }, Le.trickleSpeed);
  };
  Le.trickle && e();
}, wx = (e) => {
  !e && !tr || (_p(0.3 + 0.5 * Math.random()), za(1));
}, _p = (e) => {
  let t = tr;
  if (t === null) return Rp();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let r = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let n in r) if (t >= r[n][0] && t < r[n][1]) return parseFloat(n);
    return 0;
  })(), za(Bp(t + e, 0, 0.994));
}, Sx = (e) => {
  var o;
  if (xx()) return document.getElementById(De);
  document.documentElement.classList.add(`${De}-busy`);
  let t = document.createElement("div");
  t.id = De, t.innerHTML = Le.template;
  let r = t.querySelector(Le.barSelector), n = e ? "-100" : na(tr || 0), a = Fp();
  return r.style.transition = "all 0 linear", r.style.transform = `translate3d(${n}%,0,0)`, Le.showSpinner || ((o = t.querySelector(Le.spinnerSelector)) == null || o.remove()), a !== document.body && a.classList.add(`${De}-custom-parent`), a.appendChild(t), t;
}, Fp = () => kx(Le.parent) ? Le.parent : document.querySelector(Le.parent), Ip = () => {
  var e;
  document.documentElement.classList.remove(`${De}-busy`), Fp().classList.remove(`${De}-custom-parent`), (e = document.getElementById(De)) == null || e.remove();
}, xx = () => document.getElementById(De) !== null, kx = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Bp(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
var na = (e) => (-1 + e) * 100, Ox = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let r = e.shift();
    r && r(t);
  };
  return (r) => {
    e.push(r), e.length === 1 && t();
  };
})(), Cx = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${De} {
      pointer-events: none;
    }

    #${De} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${De} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${De} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${De} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${De}-spinner 400ms linear infinite;
    }

    .${De}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${De}-custom-parent #${De} .spinner,
    .${De}-custom-parent #${De} .bar {
      position: absolute;
    }

    @keyframes ${De}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, Lr = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${De} { display: none; }`, e;
})(), Ex = () => {
  if (Lr && document.head.contains(Lr)) return document.head.removeChild(Lr);
}, Ax = () => {
  Lr && !document.head.contains(Lr) && document.head.appendChild(Lr);
}, Lp = { configure: bx, isStarted: Dp, done: wx, set: za, remove: Ip, start: Rp, status: tr, show: Ex, hide: Ax }, aa = 0, Cc = (e = !1) => {
  aa = Math.max(0, aa - 1), (e || aa === 0) && Lp.show();
}, Px = () => {
  aa++, Lp.hide();
};
function oa(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Ot = new yx();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
function Mp(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function Np(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function el(e) {
  const t = [], r = e.length;
  if (r === 0)
    return t;
  let n = 0, a = "", o = "", s = !1;
  for (e.charCodeAt(0) === 46 && (t.push(""), n++); n < r; ) {
    const i = e[n];
    o ? i === "\\" && n + 1 < r ? (n++, a += e[n]) : i === o ? o = "" : a += i : s ? i === '"' || i === "'" ? o = i : i === "]" ? (s = !1, t.push(a), a = "") : a += i : i === "[" ? (s = !0, a && (t.push(a), a = "")) : i === "." ? a && (t.push(a), a = "") : a += i, n++;
  }
  return a && t.push(a), t;
}
function sa(e, t, r) {
  if (e == null)
    return r;
  switch (typeof t) {
    case "string": {
      const n = e[t];
      return n === void 0 ? Mp(t) ? sa(e, el(t), r) : r : n;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = Np(t));
      const n = e[t];
      return n === void 0 ? r : n;
    }
    default: {
      if (Array.isArray(t))
        return $x(e, t, r);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const n = e[t];
      return n === void 0 ? r : n;
    }
  }
}
function $x(e, t, r) {
  if (t.length === 0)
    return r;
  let n = e;
  for (let a = 0; a < t.length; a++) {
    if (n == null)
      return r;
    n = n[t[a]];
  }
  return n === void 0 ? r : n;
}
function Ec(e) {
  return e !== null && (typeof e == "object" || typeof e == "function");
}
const Tx = /^(?:0|[1-9]\d*)$/;
function jp(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return Tx.test(e);
  }
}
function Dx(e) {
  return e !== null && typeof e == "object" && ya(e) === "[object Arguments]";
}
function Rx(e, t) {
  let r;
  if (Array.isArray(t) ? r = t : typeof t == "string" && Mp(t) && (e == null ? void 0 : e[t]) == null ? r = el(t) : r = [t], r.length === 0)
    return !1;
  let n = e;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if ((n == null || !Object.hasOwn(n, o)) && !((Array.isArray(n) || Dx(n)) && jp(o) && o < n.length))
      return !1;
    n = n[o];
  }
  return !0;
}
const _x = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fx = /^\w*$/;
function Ix(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || ow(e) ? !0 : typeof e == "string" && (Fx.test(e) || !_x.test(e)) || t != null && Object.hasOwn(t, e);
}
const Bx = (e, t, r) => {
  const n = e[t];
  (!(Object.hasOwn(e, t) && zf(n, r)) || r === void 0 && !(t in e)) && (e[t] = r);
};
function Lx(e, t, r, n) {
  if (e == null && !Ec(e))
    return e;
  const a = Ix(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? el(t) : [t];
  let o = e;
  for (let s = 0; s < a.length && o != null; s++) {
    const i = Np(a[s]);
    let u;
    if (s === a.length - 1)
      u = r(o[i]);
    else {
      const l = o[i], c = n(l);
      u = c !== void 0 ? c : Ec(l) ? l : jp(a[s + 1]) ? [] : {};
    }
    Bx(o, i, u), o = o[i];
  }
  return e;
}
function Hn(e, t, r) {
  return Lx(e, t, () => r, () => {
  });
}
function Mx(e, t) {
  let r = typeof e == "string" ? e : null, n = (typeof e == "string" ? t : e) ?? {}, a = r ? Ot.restore(r) : null, o = ft(typeof n == "function" ? n() : n), s = null, i = null, u = (c) => c, l = vn({ ...a ? a.data : ft(o), isDirty: !1, errors: a ? a.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(o).reduce((c, d) => Hn(c, d, sa(this, d)), {});
  }, transform(c) {
    return u = c, this;
  }, defaults(c, d) {
    if (typeof n == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof c > "u" ? (o = ft(this.data()), this.isDirty = !1) : o = typeof c == "string" ? Hn(ft(o), c, d) : Object.assign({}, ft(o), c), this;
  }, reset(...c) {
    let d = ft(typeof n == "function" ? n() : o), y = ft(d);
    return c.length === 0 ? (o = y, Object.assign(this, d)) : c.filter((h) => Rx(y, h)).forEach((h) => {
      Hn(o, h, sa(y, h)), Hn(this, h, sa(d, h));
    }), this;
  }, setError(c, d) {
    return Object.assign(this.errors, typeof c == "string" ? { [c]: d } : c), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...c) {
    return this.errors = Object.keys(this.errors).reduce((d, y) => ({ ...d, ...c.length > 0 && !c.includes(y) ? { [y]: this.errors[y] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(...c) {
    let d = typeof c[0] == "object", y = d ? c[0].method : c[0], h = d ? c[0].url : c[1], v = (d ? c[1] : c[2]) ?? {}, m = u(this.data()), f = { ...v, onCancelToken: (p) => {
      if (s = p, v.onCancelToken) return v.onCancelToken(p);
    }, onBefore: (p) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(i), v.onBefore) return v.onBefore(p);
    }, onStart: (p) => {
      if (this.processing = !0, v.onStart) return v.onStart(p);
    }, onProgress: (p) => {
      if (this.progress = p, v.onProgress) return v.onProgress(p);
    }, onSuccess: async (p) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, i = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let w = v.onSuccess ? await v.onSuccess(p) : null;
      return o = ft(this.data()), this.isDirty = !1, w;
    }, onError: (p) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(p), v.onError) return v.onError(p);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, v.onCancel) return v.onCancel();
    }, onFinish: (p) => {
      if (this.processing = !1, this.progress = null, s = null, v.onFinish) return v.onFinish(p);
    } };
    y === "delete" ? Ot.delete(h, { ...f, data: m }) : Ot[y](h, m, f);
  }, get(c, d) {
    this.submit("get", c, d);
  }, post(c, d) {
    this.submit("post", c, d);
  }, put(c, d) {
    this.submit("put", c, d);
  }, patch(c, d) {
    this.submit("patch", c, d);
  }, delete(c, d) {
    this.submit("delete", c, d);
  }, cancel() {
    s && s.cancel();
  }, __rememberable: r === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(c) {
    Object.assign(this, c.data), this.setError(c.errors);
  } });
  return ne(l, (c) => {
    l.isDirty = !hw(l.data(), o), r && Ot.remember(ft(c.__remember()), r);
  }, { immediate: !0, deep: !0 }), l;
}
var Qe = N(null), Ge = N(null), cs = gn(null), Wn = N(null), Ac = null;
z({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: r, titleCallback: n, onHeadUpdate: a }) {
  Qe.value = t ? ps(t) : null, Ge.value = e, Wn.value = null;
  let o = typeof window > "u";
  return Ac = vx(o, n, a), o || (Ot.init({ initialPage: e, resolveComponent: r, swapComponent: async (s) => {
    Qe.value = ps(s.component), Ge.value = s.page, Wn.value = s.preserveState ? Wn.value : Date.now();
  } }), Ot.on("navigate", () => Ac.forceUpdate())), () => {
    if (Qe.value) {
      Qe.value.inheritAttrs = !!Qe.value.inheritAttrs;
      let s = Ue(Qe.value, { ...Ge.value.props, key: Wn.value });
      return cs.value && (Qe.value.layout = cs.value, cs.value = null), Qe.value.layout ? typeof Qe.value.layout == "function" ? Qe.value.layout(Ue, s) : (Array.isArray(Qe.value.layout) ? Qe.value.layout : [Qe.value.layout]).concat(s).reverse().reduce((i, u) => (u.inheritAttrs = !!u.inheritAttrs, Ue(u, { ...Ge.value.props }, () => i))) : s;
    }
  };
} });
function Nx() {
  return vn({ props: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.props;
  }), url: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.url;
  }), component: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.component;
  }), version: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.version;
  }), clearHistory: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.mergeProps;
  }), deepMergeProps: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.deepMergeProps;
  }), rememberedState: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: T(() => {
    var e;
    return (e = Ge.value) == null ? void 0 : e.encryptHistory;
  }) });
}
var jx = z({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
z({ props: { title: { type: String, required: !1 } }, data() {
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
z({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: [String, Object], required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: r }) {
  let n = N(0), a = N(null), o = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], s = e.cacheFor !== 0 ? e.cacheFor : o.length === 1 && o[0] === "click" ? 0 : 3e4;
  ye(() => {
    o.includes("mount") && m();
  }), Nt(() => {
    clearTimeout(a.value);
  });
  let i = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), u = i !== "get" ? "button" : e.as.toLowerCase(), l = T(() => Zi(i, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), c = T(() => l.value[0]), d = T(() => l.value[1]), y = T(() => ({ a: { href: c.value }, button: { type: "button" } })), h = { data: d.value, method: i, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? i !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, v = { ...h, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (O) => {
    n.value++, e.onStart(O);
  }, onProgress: e.onProgress, onFinish: (O) => {
    n.value--, e.onFinish(O);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, m = () => {
    Ot.prefetch(c.value, h, { cacheFor: s });
  }, f = { onClick: (O) => {
    oa(O) && (O.preventDefault(), Ot.visit(c.value, v));
  } }, p = { onMouseenter: () => {
    a.value = setTimeout(() => {
      m();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(a.value);
  }, onClick: f.onClick }, w = { onMousedown: (O) => {
    oa(O) && (O.preventDefault(), m());
  }, onMouseup: (O) => {
    O.preventDefault(), Ot.visit(c.value, v);
  }, onClick: (O) => {
    oa(O) && O.preventDefault();
  } };
  return () => Ue(u, { ...r, ...y.value[u] || {}, "data-loading": n.value > 0 ? "" : void 0, ...o.includes("hover") ? p : o.includes("click") ? w : f }, t);
} });
z({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
  return { loaded: !1, fetching: !1, observer: null };
}, unmounted() {
  var e;
  (e = this.observer) == null || e.disconnect();
}, mounted() {
  this.observer = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting || (this.$props.always || this.observer.disconnect(), this.fetching)) return;
    this.fetching = !0;
    let t = this.getReloadParams();
    Ot.reload({ ...t, onStart: (r) => {
      var n;
      this.fetching = !0, (n = t.onStart) == null || n.call(t, r);
    }, onFinish: (r) => {
      var n;
      this.loaded = !0, this.fetching = !1, (n = t.onFinish) == null || n.call(t, r);
    } });
  }, { rootMargin: `${this.$props.buffer}px` }), this.observer.observe(this.$el.nextSibling);
}, methods: { getReloadParams() {
  if (this.$props.data) return { only: Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data] };
  if (!this.$props.params) throw new Error("You must provide either a `data` or `params` prop.");
  return this.$props.params;
} }, render() {
  let e = [];
  return (this.$props.always || !this.loaded) && e.push(Ue(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default()) : e.push(this.$slots.fallback ? this.$slots.fallback() : null), e;
} });
function W4(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function qx(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function K4(e) {
  return Nx().props.auth.permissions.includes(e);
}
let ti = null;
function G4(e) {
  ti = e;
}
function Ua() {
  return ti === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), ti;
}
let ri = null;
function Y4(e) {
  ri = e;
}
function qp() {
  return ri === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), ri;
}
const yt = z({
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
      let n;
      try {
        n = Ua();
      } catch {
        console.log("InertiaLink: Router not available, preventing navigation"), n = {
          visit: (l, c) => {
            console.log("InertiaLink: Navigation prevented (docs environment):", l);
          }
        };
      }
      const a = e.as.toLowerCase(), o = e.method.toLowerCase(), [s, i] = Zi(
        o,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return a === "a" && o !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${s}" method="${o}" as="button">...</Link>`
      ), Ue(
        e.as,
        {
          ...r,
          ...a === "a" ? { href: s } : {},
          onClick: (u) => {
            oa(u) && (u.preventDefault(), n.visit(s, {
              data: i,
              method: o,
              replace: e.replace,
              preserveScroll: e.preserveScroll,
              preserveState: e.preserveState ?? o !== "get",
              only: e.only,
              headers: e.headers,
              onCancelToken: r.onCancelToken,
              onBefore: r.onBefore,
              onStart: r.onStart,
              onProgress: r.onProgress,
              onFinish: r.onFinish,
              onCancel: r.onCancel,
              onSuccess: r.onSuccess,
              onError: r.onError
            }));
          }
        },
        t
      );
    };
  }
});
function Dn(e, t, r, n) {
  function a(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  return new (r || (r = Promise))(function(o, s) {
    function i(c) {
      try {
        l(n.next(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      c.done ? o(c.value) : a(c.value).then(i, u);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function Rn(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, a, o, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = i(0), s.throw = i(1), s.return = i(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (r = 0)), r; ) try {
      if (n = 1, a && (o = l[0] & 2 ? a.return : l[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, l[1])).done) return o;
      switch (a = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
        case 0:
        case 1:
          o = l;
          break;
        case 4:
          return r.label++, { value: l[1], done: !1 };
        case 5:
          r.label++, a = l[1], l = [0];
          continue;
        case 7:
          l = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            r = 0;
            continue;
          }
          if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
            r.label = l[1];
            break;
          }
          if (l[0] === 6 && r.label < o[1]) {
            r.label = o[1], o = l;
            break;
          }
          if (o && r.label < o[2]) {
            r.label = o[2], r.ops.push(l);
            break;
          }
          o[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      l = t.call(e, r);
    } catch (c) {
      l = [6, c], a = 0;
    } finally {
      n = o = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Vx(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), a, o = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = n.next()).done; ) o.push(a.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      a && !a.done && (r = n.return) && r.call(n);
    } finally {
      if (s) throw s.error;
    }
  }
  return o;
}
function zx() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(Vx(arguments[t]));
  return e;
}
var Ux = /* @__PURE__ */ new Map([
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
function Ha(e, t) {
  var r = Hx(e);
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
function Hx(e) {
  var t = e.name, r = t && t.lastIndexOf(".") !== -1;
  if (r && !e.type) {
    var n = t.split(".").pop().toLowerCase(), a = Ux.get(n);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var Wx = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function Kx(e) {
  return Dn(this, void 0, void 0, function() {
    return Rn(this, function(t) {
      return [2, Gx(e) && e.dataTransfer ? Jx(e.dataTransfer, e.type) : Yx(e)];
    });
  });
}
function Gx(e) {
  return !!e.dataTransfer;
}
function Yx(e) {
  var t = Xx(e.target) ? e.target.files ? ni(e.target.files) : [] : [];
  return t.map(function(r) {
    return Ha(r);
  });
}
function Xx(e) {
  return e !== null;
}
function Jx(e, t) {
  return Dn(this, void 0, void 0, function() {
    var r, n;
    return Rn(this, function(a) {
      switch (a.label) {
        case 0:
          return e.items ? (r = ni(e.items).filter(function(o) {
            return o.kind === "file";
          }), t !== "drop" ? [2, r] : [4, Promise.all(r.map(Qx))]) : [3, 2];
        case 1:
          return n = a.sent(), [2, Pc(Vp(n))];
        case 2:
          return [2, Pc(ni(e.files).map(function(o) {
            return Ha(o);
          }))];
      }
    });
  });
}
function Pc(e) {
  return e.filter(function(t) {
    return Wx.indexOf(t.name) === -1;
  });
}
function ni(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    t.push(n);
  }
  return t;
}
function Qx(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return $c(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? zp(t) : $c(e);
}
function Vp(e) {
  return e.reduce(function(t, r) {
    return zx(t, Array.isArray(r) ? Vp(r) : [r]);
  }, []);
}
function $c(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var r = Ha(t);
  return Promise.resolve(r);
}
function Zx(e) {
  return Dn(this, void 0, void 0, function() {
    return Rn(this, function(t) {
      return [2, e.isDirectory ? zp(e) : e3(e)];
    });
  });
}
function zp(e) {
  var t = e.createReader();
  return new Promise(function(r, n) {
    var a = [];
    function o() {
      var s = this;
      t.readEntries(function(i) {
        return Dn(s, void 0, void 0, function() {
          var u, l, c;
          return Rn(this, function(d) {
            switch (d.label) {
              case 0:
                if (i.length) return [3, 5];
                d.label = 1;
              case 1:
                return d.trys.push([1, 3, , 4]), [4, Promise.all(a)];
              case 2:
                return u = d.sent(), r(u), [3, 4];
              case 3:
                return l = d.sent(), n(l), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                c = Promise.all(i.map(Zx)), a.push(c), o(), d.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(i) {
        n(i);
      });
    }
    o();
  });
}
function e3(e) {
  return Dn(this, void 0, void 0, function() {
    return Rn(this, function(t) {
      return [2, new Promise(function(r, n) {
        e.file(function(a) {
          var o = Ha(a, e.fullPath);
          r(o);
        }, function(a) {
          n(a);
        });
      })];
    });
  });
}
var Kn = {}, Tc;
function t3() {
  return Tc || (Tc = 1, Kn.__esModule = !0, Kn.default = function(e, t) {
    if (e && t) {
      var r = Array.isArray(t) ? t : t.split(",");
      if (r.length === 0)
        return !0;
      var n = e.name || "", a = (e.type || "").toLowerCase(), o = a.replace(/\/.*$/, "");
      return r.some(function(s) {
        var i = s.trim().toLowerCase();
        return i.charAt(0) === "." ? n.toLowerCase().endsWith(i) : i.endsWith("/*") ? o === i.replace(/\/.*$/, "") : a === i;
      });
    }
    return !0;
  }), Kn;
}
var r3 = t3();
const Up = /* @__PURE__ */ yw(r3);
var Ze = function() {
  return Ze = Object.assign || function(t) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, Ze.apply(this, arguments);
};
function Dc(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
function n3(e, t, r, n) {
  function a(o) {
    return o instanceof r ? o : new r(function(s) {
      s(o);
    });
  }
  return new (r || (r = Promise))(function(o, s) {
    function i(c) {
      try {
        l(n.next(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      try {
        l(n.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      c.done ? o(c.value) : a(c.value).then(i, u);
    }
    l((n = n.apply(e, [])).next());
  });
}
function a3(e, t) {
  var r = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, a, o, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (r = 0)), r; ) try {
      if (n = 1, a && (o = l[0] & 2 ? a.return : l[0] ? a.throw || ((o = a.return) && o.call(a), 0) : a.next) && !(o = o.call(a, l[1])).done) return o;
      switch (a = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
        case 0:
        case 1:
          o = l;
          break;
        case 4:
          return r.label++, { value: l[1], done: !1 };
        case 5:
          r.label++, a = l[1], l = [0];
          continue;
        case 7:
          l = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (o = r.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            r = 0;
            continue;
          }
          if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
            r.label = l[1];
            break;
          }
          if (l[0] === 6 && r.label < o[1]) {
            r.label = o[1], o = l;
            break;
          }
          if (o && r.label < o[2]) {
            r.label = o[2], r.ops.push(l);
            break;
          }
          o[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      l = t.call(e, r);
    } catch (c) {
      l = [6, c], a = 0;
    } finally {
      n = o = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function ai(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, o; n < a; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function o3(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function s3(e) {
  return e.includes("Edge/");
}
function i3(e) {
  return e === void 0 && (e = window.navigator.userAgent), o3(e) || s3(e);
}
function Rc(e) {
  e.preventDefault();
}
function Gn(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function wa(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var l3 = "file-invalid-type", u3 = "file-too-large", c3 = "file-too-small", d3 = "too-many-files", f3 = {
  code: d3,
  message: "Too many files"
}, p3 = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: l3,
    message: "File type must be ".concat(t)
  };
};
function en(e) {
  return e != null;
}
var m3 = Up.default, h3 = m3 || Up;
function Hp(e, t) {
  var r = e.type === "application/x-moz-file" || h3(e, t);
  return [r, r ? null : p3(t)];
}
var _c = function(e) {
  return {
    code: u3,
    message: "File is larger than ".concat(e, " bytes")
  };
}, Fc = function(e) {
  return {
    code: c3,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Wp(e, t, r) {
  if (en(e.size) && e.size)
    if (en(t) && en(r)) {
      if (e.size > r)
        return [!1, _c(r)];
      if (e.size < t)
        return [!1, Fc(t)];
    } else {
      if (en(t) && e.size < t)
        return [!1, Fc(t)];
      if (en(r) && e.size > r)
        return [!1, _c(r)];
    }
  return [!0, null];
}
function _t() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(r) {
    for (var n = [], a = 1; a < arguments.length; a++)
      n[a - 1] = arguments[a];
    return e.some(function(o) {
      return !wa(r) && o && o.apply(void 0, ai([r], n, !1)), wa(r);
    });
  };
}
function y3(e) {
  var t = e.files, r = e.accept, n = e.minSize, a = e.maxSize, o = e.multiple, s = e.maxFiles;
  return !o && t.length > 1 || o && s >= 1 && t.length > s ? !1 : t.every(function(i) {
    var u = Hp(i, r)[0], l = Wp(i, n, a)[0];
    return u && l;
  });
}
var g3 = {
  disabled: !1,
  getFilesFromEvent: Kx,
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
function Kp(e) {
  e === void 0 && (e = {});
  var t = N(Ze(Ze({}, g3), e));
  ne(function() {
    return Ze({}, e);
  }, function($) {
    t.value = Ze(Ze({}, t.value), $);
  });
  var r = N(), n = N(), a = vn({
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
  }, s = function() {
    var $ = t.value.onFileDialogCancel;
    a.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var q = n.value.files;
        q && !q.length && (a.isFileDialogActive = !1, typeof $ == "function" && $());
      }
    }, 300);
  };
  function i() {
    a.isFocused = !0;
  }
  function u() {
    a.isFocused = !1;
  }
  function l() {
    var $ = t.value.noClick;
    $ || (i3() ? setTimeout(o, 0) : o());
  }
  var c = N([]), d = function($) {
    if (r.value) {
      var q = r.value.$el || r.value;
      q.contains($.target) || ($.preventDefault(), c.value = []);
    }
  };
  ye(function() {
    window.addEventListener("focus", s, !1);
    var $ = t.value.preventDropOnDocument;
    $ && (document.addEventListener("dragover", Rc, !1), document.addEventListener("drop", d, !1));
  }), Nt(function() {
    window.removeEventListener("focus", s, !1);
    var $ = t.value.preventDropOnDocument;
    $ && (document.removeEventListener("dragover", Rc), document.removeEventListener("drop", d));
  });
  function y($) {
    var q = t.value.noDragEventsBubbling;
    q && $.stopPropagation();
  }
  function h($) {
    return n3(this, void 0, void 0, function() {
      var q, b, E, k, x;
      return a3(this, function(W) {
        switch (W.label) {
          case 0:
            return q = t.value, b = q.getFilesFromEvent, E = q.noDragEventsBubbling, k = q.onDragEnter, $.preventDefault(), y($), c.value = ai(ai([], c.value, !0), [$.target], !1), Gn($) ? b ? [4, b($)] : [2] : [3, 2];
          case 1:
            if (x = W.sent(), x || (x = []), wa($) && !E)
              return [2];
            a.draggedFiles = x, a.isDragActive = !0, k && k($), W.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function v($) {
    var q = t.value.onDragOver;
    if ($.preventDefault(), y($), $.dataTransfer)
      try {
        $.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Gn($) && q && q($), !1;
  }
  function m($) {
    $.preventDefault(), y($);
    var q = c.value.filter(function(k) {
      if (!r.value)
        return !1;
      var x = r.value.$el || r.value;
      return x.contains(k);
    }), b = q.indexOf($.target);
    if (b !== -1 && q.splice(b, 1), c.value = q, !(q.length > 0)) {
      a.draggedFiles = [], a.isDragActive = !1;
      var E = t.value.onDragLeave;
      Gn($) && E && E($);
    }
  }
  function f($) {
    $.preventDefault(), y($), c.value = [];
    var q = t.value, b = q.getFilesFromEvent, E = q.noDragEventsBubbling, k = q.accept, x = q.minSize, W = q.maxSize, L = q.multiple, _ = q.maxFiles, G = q.onDrop, re = q.onDropRejected, Se = q.onDropAccepted;
    if (Gn($)) {
      if (!b)
        return;
      Promise.resolve(b($)).then(function(Ne) {
        if (!(wa($) && !E)) {
          var de = [], Ce = [];
          Ne.forEach(function(ve) {
            var Be = Hp(ve, k), Ie = Be[0], ue = Be[1], be = Wp(ve, x, W), ie = be[0], ge = be[1];
            if (Ie && ie)
              de.push(ve);
            else {
              var pe = [ue, ge].filter(function(Ae) {
                return Ae;
              });
              Ce.push({ file: ve, errors: pe });
            }
          }), (!L && de.length > 1 || L && _ >= 1 && de.length > _) && (de.forEach(function(ve) {
            Ce.push({ file: ve, errors: [f3] });
          }), de.splice(0)), a.acceptedFiles = de, a.fileRejections = Ce, G && G(de, Ce, $), Ce.length > 0 && re && re(Ce, $), de.length > 0 && Se && Se(de, $);
        }
      });
    }
    a.isFileDialogActive = !1, a.isDragActive = !1, a.draggedFiles = [], a.acceptedFiles = [], a.fileRejections = [];
  }
  var p = function($) {
    return t.value.disabled ? void 0 : $;
  }, w = function($) {
    return t.value.noKeyboard ? void 0 : p($);
  }, O = function($) {
    return t.value.noDrag ? void 0 : p($);
  }, A = function($) {
    $ === void 0 && ($ = {});
    var q = $.onFocus, b = $.onBlur, E = $.onClick, k = $.onDragEnter, x = $.onDragenter, W = $.onDragOver, L = $.onDragover, _ = $.onDragLeave, G = $.onDragleave, re = $.onDrop, Se = Dc($, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Ze(Ze({ onFocus: w(_t(q, i)), onBlur: w(_t(b, u)), onClick: p(_t(E, l)), onDragenter: O(_t(k, x, h)), onDragover: O(_t(W, L, v)), onDragleave: O(_t(_, G, m)), onDrop: O(_t(re, f)), ref: r }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Se);
  }, F = function($) {
    $.stopPropagation();
  };
  function H($) {
    $ === void 0 && ($ = {});
    var q = $.onChange, b = $.onClick, E = Dc($, ["onChange", "onClick"]), k = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: p(_t(q, f)),
      onClick: p(_t(b, F)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return Ze(Ze({}, k), E);
  }
  var C = T(function() {
    return a.draggedFiles ? a.draggedFiles.length : 0;
  }), K = T(function() {
    return C.value > 0 && y3({
      files: a.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), M = T(function() {
    return C.value > 0 && !K.value;
  });
  return Ze(Ze({}, Pt(a)), { isDragAccept: K, isDragReject: M, isFocused: T(function() {
    return a.isFocused && !t.value.disabled;
  }), getRootProps: A, getInputProps: H, rootRef: r, inputRef: n, open: p(o) });
}
const v3 = { class: "flex w-full flex-col" }, b3 = {
  key: 0,
  class: "text-black select-none"
}, w3 = ["name"], S3 = {
  key: 1,
  class: "select-none"
}, x3 = { key: 2 }, k3 = {
  key: 3,
  class: "select-none"
}, X4 = {
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
    Ua();
    const t = e, r = N(null), n = (l) => {
      let c = [];
      return l.split("_").join(" ").split(" ").map(function(d) {
        c.push(d[0].toUpperCase() + d.slice(1));
      }), c.join(" ");
    }, a = (l, c) => {
      var d;
      if (r.value = null, c && c.length > 0) {
        c[0].errors && (r.value = (d = c[0]) == null ? void 0 : d.errors.map((y) => y.message).join(", ")), console.error(c);
        return;
      }
      if (!l || l.length === 0) {
        r.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = l : t.form[t.field] = l[0];
    }, { getRootProps: o, getInputProps: s, isDragActive: i, ...u } = Kp({
      onDrop: a,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, c) => {
      var d;
      return S(), P("div", v3, [
        R("div", {
          class: Q(["border-primary-200 bg-primary-50 text-primary-200 hover:border-primary-600 hover:text-primary w-full rounded-lg border-2 border-dashed transition duration-100 ease-in-out", {
            "border-primary-400 bg-primary-100": g(i),
            "bg-primary-100 border-red-600": t.form.errors[e.field] ?? r.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          R("div", se({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, g(o)()), [
            e.label ? (S(), P("p", b3, Z(e.label), 1)) : X("", !0),
            R("input", se(g(s)(), { name: e.field }), null, 16, w3),
            g(i) ? (S(), P("span", S3, "Drop the " + Z(n(e.field)) + " here ...", 1)) : e.form[e.field] ? (S(), P("span", x3, Z(((d = e.form[e.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (S(), P("span", k3, "Drag 'n' drop " + Z(n(e.field)) + " here", 1))
          ], 16)
        ], 2),
        J(g(rr), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, O3 = { class: "flex w-full" }, C3 = { key: 0 }, E3 = { key: 1 }, A3 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, P3 = ["onClick"], $3 = ["src"], T3 = ["value"], D3 = { class: "flex items-center gap-4" }, R3 = {
  key: 0,
  class: "text-sm text-gray-600 dark:text-gray-400"
}, _3 = {
  key: 1,
  class: "mt-2"
}, F3 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, I3 = { class: "-m-1 flex flex-wrap md:-m-2" }, B3 = { class: "h-full w-full p-1 shadow md:p-2" }, L3 = ["src"], J4 = /* @__PURE__ */ z({
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
    const t = Ua(), r = e, n = Mx({
      image: []
    }), a = (h, v) => `/${h.replace(".", "/")}${v ? `/${v}` : ""}`;
    function o() {
      let h = new FormData();
      n.image.forEach((v, m) => {
        h.append(`image[${m}]`, v.file);
      }), h.append("item_type", r.itemType || ""), h.append("item_id", String(r.itemId || "")), t.post(a(r.endPoint), h, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        forceFormData: !0,
        onFinish: () => {
          n.recentlySuccessful = !0, n.image = [];
        }
      });
    }
    function s(h) {
      h.forEach((v) => {
        let m = new FileReader();
        m.onload = (f) => {
          n.image.push({ file: v, dataUrl: f.target.result });
        }, m.readAsDataURL(v);
      });
    }
    const i = (h, v) => {
      if (v && v.length > 0) {
        console.error(v);
        return;
      }
      s(h);
    };
    function u(h) {
      n.image.splice(h, 1);
    }
    const { getRootProps: l, getInputProps: c, isDragActive: d } = Kp({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    }), y = N(!1);
    return (h, v) => (S(), P(oe, null, [
      e.canUpload ? (S(), P("form", {
        key: 0,
        onSubmit: mt(o, ["prevent"]),
        class: "w-full"
      }, [
        R("div", O3, [
          R("div", {
            class: Q(["border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary w-full rounded-l-lg border-2 border-r-0 border-dashed transition duration-100 ease-in-out", { "border-primary-400 bg-primary-100": y.value }])
          }, [
            R("div", se({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, g(l)()), [
              R("input", Ee(Re(g(c)())), null, 16),
              g(d) ? (S(), P("span", C3, "Drop the files here ...")) : (S(), P("span", E3, "Drag 'n' drop images here"))
            ], 16),
            g(n).image.length > 0 ? (S(), P("div", A3, [
              (S(!0), P(oe, null, ke(g(n).image, (m, f) => (S(), P("div", {
                class: "relative cursor-pointer select-none",
                onClick: (p) => u(f),
                key: f
              }, [
                v[0] || (v[0] = R("div", { class: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                R("img", {
                  src: m.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, $3)
              ], 8, P3))), 128))
            ])) : X("", !0)
          ], 2),
          J(g(a4), {
            class: Q(["inline rounded-l-none", { "cursor-not-allowed": g(n).image.length == 0 }]),
            disabled: g(n).image.length == 0
          }, {
            default: I(() => v[1] || (v[1] = [
              fe(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          g(n).progress ? (S(), P("progress", {
            key: 0,
            value: g(n).progress.percentage,
            max: "100"
          }, Z(g(n).progress.percentage) + "%", 9, T3)) : X("", !0)
        ]),
        h.$page.props.errors.image ? (S(), U(g(rr), {
          key: 0,
          class: "mt-2",
          message: h.$page.props.errors.image
        }, null, 8, ["message"])) : X("", !0),
        R("div", D3, [
          J(ur, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: I(() => [
              g(n).recentlySuccessful ? (S(), P("p", R3, "Images uploaded.")) : X("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : X("", !0),
      e.images.length ? (S(), P("div", _3, [
        v[3] || (v[3] = R("hr", null, null, -1)),
        R("div", F3, [
          R("div", I3, [
            (S(!0), P(oe, null, ke(e.images, (m, f) => (S(), P("div", {
              key: f,
              class: "flex w-1/3 flex-wrap"
            }, [
              R("div", B3, [
                R("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: m.url
                }, null, 8, L3),
                e.canUpload ? (S(), U(g(yt), {
                  key: 0,
                  href: a("images.delete", m.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700",
                  as: "button"
                }, {
                  default: I(() => v[2] || (v[2] = [
                    fe(" Delete Image ")
                  ])),
                  _: 2
                }, 1032, ["href"])) : X("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : X("", !0)
    ], 64));
  }
}), M3 = { class: "flex items-center space-x-3" }, N3 = ["id", "name", "value", "checked"], j3 = ["for"], Q4 = /* @__PURE__ */ z({
  __name: "RadioButton",
  props: {
    id: { default: void 0 },
    name: { default: void 0 },
    value: { default: void 0 },
    isChecked: { type: Boolean, default: !1 },
    modelValue: { default: void 0 },
    label: { default: void 0 },
    form: { default: void 0 },
    field: { default: void 0 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = t, n = e, a = (i) => {
      const u = i.target;
      n.form && n.field && (n.form[n.field] = u.value), r("update:modelValue", u.value);
    }, o = T(() => n.form && n.field ? n.form[n.field] === n.value : n.modelValue === n.value), s = T(() => n.id || `radio-${n.field || "radio"}-${n.value}`);
    return (i, u) => (S(), P("div", M3, [
      R("input", {
        id: s.value,
        type: "radio",
        name: i.name || i.field,
        value: i.value,
        checked: o.value,
        onChange: a,
        class: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
      }, null, 40, N3),
      R("label", {
        for: s.value,
        class: "cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-200"
      }, Z(i.label), 9, j3)
    ]));
  }
}), Gp = {
  START: "start"
}, Pe = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
  NO_STYLE: "no-style"
}, q3 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, Sa = /* @__PURE__ */ z({
  __name: "SubmitButton",
  props: {
    theme: { default: Pe.PRIMARY },
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    loading: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return S(), U(g(Sr), {
        theme: t.theme,
        disabled: t.loading || ((n = t.form) == null ? void 0 : n.processing) || t.disabled,
        type: t.type,
        "custom-class": `relative ${t.customButtonClass}`,
        size: t.size,
        class: "focusable"
      }, {
        default: I(() => {
          var a, o;
          return [
            R("div", {
              class: Q({ "opacity-25": ((a = t.form) == null ? void 0 : a.processing) || t.loading })
            }, [
              V(t.$slots, "default")
            ], 2),
            (o = t.form) != null && o.processing || t.loading ? (S(), P("div", q3, [
              J(g(tl), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : X("", !0)
          ];
        }),
        _: 3
      }, 8, ["theme", "disabled", "type", "custom-class", "size"]);
    };
  }
}), V3 = { class: "w-full" }, z3 = ["id"], U3 = ["disabled"], H3 = { key: 0 }, W3 = { key: 1 }, K3 = { class: "ml-2 w-2" }, G3 = {
  class: "absolute z-1000 -mt-1! hidden min-w-full bg-white data-te-dropdown-show:block",
  "data-te-dropdown-menu-ref": ""
}, Y3 = { class: "float-left m-0 box-border max-h-80 min-w-full list-none overflow-auto rounded rounded-t-none border border-t-0 border-gray-300 bg-clip-padding text-left text-base shadow" }, X3 = ["onClick"], Z4 = {
  __name: "SelectMultiple",
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
      required: !0,
      default: () => []
    },
    optionValue: {
      type: String,
      required: !0
    },
    optionText: {
      type: String,
      required: !0
    },
    placeholder: {
      type: String
    },
    field: String,
    form: Object,
    noLabel: {
      type: Boolean,
      default: !1
    },
    isDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = (u) => {
      let l = [];
      return u.split("_").join(" ").split(" ").map(function(c) {
        l.push(c[0].toUpperCase() + c.slice(1));
      }), l.join(" ");
    }, o = (u) => {
      let l = r.form[r.field] ?? [], c = u[r.optionValue].toString();
      try {
        l.includes(c) ? l = l.filter((d) => d !== c) : l.push(c), r.form[r.field] = l, n("update:modelValue", l);
      } catch (d) {
        console.error(d);
      }
    }, s = (u) => {
      var l;
      return (l = r.form[r.field]) == null ? void 0 : l.includes(u[r.optionValue].toString());
    }, i = () => r.list.filter((u) => s(u));
    return (u, l) => (S(), P("div", V3, [
      !e.noLabel && (e.label || e.field) ? (S(), U(g(Hr), {
        key: 0,
        for: e.id ?? e.field,
        value: a(e.label ?? e.field)
      }, null, 8, ["for", "value"])) : X("", !0),
      R("div", {
        class: "model-list relative flex w-full min-w-[10rem]",
        "data-te-dropdown-ref": "",
        id: e.id ?? e.field
      }, [
        R("button", {
          class: "aria-expanded:border-accent-500 aria-expanded:outline-accent-500 flex h-10 w-full items-center justify-between rounded border border-gray-300 px-3 py-2 pr-5 text-base leading-normal whitespace-nowrap shadow outline outline-1 outline-transparent transition duration-150 ease-in-out aria-expanded:rounded-b-none motion-reduce:transition-none",
          type: "button",
          "data-te-dropdown-toggle-ref": "",
          "data-te-auto-close": "outside",
          "data-te-dropdown-animation": "off",
          "aria-expanded": "false",
          disabled: e.isDisabled
        }, [
          i().length > 0 ? (S(), P("span", H3, Z(i().length) + " selected", 1)) : (S(), P("span", W3, Z(e.placeholder), 1)),
          R("span", K3, [
            J(g(_e), {
              icon: g(ci),
              class: "h-5 w-5"
            }, null, 8, ["icon"])
          ])
        ], 8, U3),
        R("div", G3, [
          R("ul", Y3, [
            (S(!0), P(oe, null, ke(e.list, (c) => (S(), P("li", {
              onClick: (d) => o(c),
              key: c[e.optionValue],
              class: "flex w-full min-w-full cursor-pointer items-center justify-start border-t border-gray-50 px-4 py-3 text-sm leading-4 font-normal hover:bg-[rgba(0,0,0,.03)]"
            }, [
              R("div", {
                class: Q(["mr-2 -ml-2 h-4 w-4 rounded border", s(c) ? "bg-primary" : "bg-white"])
              }, null, 2),
              fe(" " + Z(c[e.optionText]), 1)
            ], 8, X3))), 128))
          ])
        ])
      ], 8, z3),
      J(g(rr), {
        message: e.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
function Yp(e = { column: null, direction: "asc" }, t = !0) {
  const r = N({ ...e }), n = Ua(), a = () => {
    try {
      const u = window.route;
      if (u && u().params) {
        const l = u().params;
        l.order_by && l.order_dir && (r.value = {
          column: l.order_by,
          direction: l.order_dir
        });
      }
    } catch (u) {
      console.warn("Failed to initialize sort state from URL:", u);
    }
  }, o = (u) => {
    if (!u) return;
    const l = r.value.column === u && r.value.direction === "asc" ? "desc" : "asc";
    r.value = {
      column: u,
      direction: l
    };
    try {
      const c = window.route;
      if (c) {
        const d = { ...c().params };
        d.order_by = u, d.order_dir = l, n.get(c(c().current()), d, {
          preserveState: t,
          preserveScroll: !0
        });
      }
    } catch (c) {
      console.warn("Failed to update URL with sort parameters:", c);
    }
  }, s = (u) => r.value.column === u ? r.value.direction : null, i = (u) => r.value.column === u;
  return ye(() => {
    a();
  }), {
    sortState: T(() => r.value),
    sort: o,
    getSortDirection: s,
    isSorted: i
  };
}
function J3(e = !1, t = []) {
  const r = N([...t]), n = (l) => {
    if (e) {
      const c = r.value.findIndex((d) => d.id === l.id);
      c > -1 ? r.value.splice(c, 1) : r.value.push(l);
    } else
      r.value = [l];
  }, a = (l) => {
    e && (r.value = [...l]);
  }, o = () => {
    r.value = [];
  }, s = (l) => r.value.some((c) => c.id === l.id), i = (l) => l.length > 0 && l.every((c) => s(c)), u = (l) => {
    const c = l.filter((d) => s(d)).length;
    return c > 0 && c < l.length;
  };
  return {
    selected: T(() => r.value),
    select: n,
    selectAll: a,
    deselectAll: o,
    isSelected: s,
    isAllSelected: i,
    isIndeterminate: u
  };
}
function Xp(e = !1, t = 0) {
  const r = N(null), n = N(null), a = N(null), o = N(!1), s = () => {
    if (!r.value || !n.value || !a.value || !(typeof e == "boolean" ? e : e.value)) return;
    const d = r.value.getBoundingClientRect(), y = d.top <= t && d.bottom > t;
    y !== o.value && (o.value = y, y ? (i(), a.value.style.display = "block", a.value.style.top = `${t}px`, a.value.style.width = `${r.value.offsetWidth}px`) : a.value.style.display = "none");
  }, i = () => {
    if (!n.value || !a.value) return;
    const c = n.value.querySelector("tr");
    if (!c) return;
    a.value.innerHTML = "";
    const d = c.cloneNode(!0), y = c.querySelectorAll("th"), h = d.querySelectorAll("th");
    y.forEach((v, m) => {
      h[m] && (h[m].style.width = `${v.offsetWidth}px`);
    }), a.value.appendChild(d), d.addEventListener("click", (v) => {
      const f = v.target.closest("th");
      if (f) {
        const p = Array.from(h).indexOf(f);
        p > -1 && y[p] && y[p].click();
      }
    });
  }, u = () => {
    s();
  }, l = () => {
    Me(() => {
      s();
    });
  };
  return ye(() => {
    window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", l, { passive: !0 });
  }), Nt(() => {
    window.removeEventListener("scroll", u), window.removeEventListener("resize", l);
  }), {
    tableRef: r,
    headerRef: n,
    stickyRef: a,
    isSticky: T(() => o.value),
    updateStickyState: s
  };
}
function Jp(e, t = {}) {
  const r = qp(), n = T(() => {
    const l = r.props[e];
    return l ? l.data && Array.isArray(l.data) ? l : Array.isArray(l) ? {
      data: l,
      current_page: 1,
      last_page: 1,
      per_page: l.length,
      total: l.length,
      from: 1,
      to: l.length,
      links: []
    } : null : null;
  }), a = T(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.data) || [];
  }), o = T(() => {
    const u = n.value;
    return u ? {
      current_page: u.current_page,
      last_page: u.last_page,
      per_page: u.per_page,
      total: u.total,
      from: u.from,
      to: u.to,
      links: u.links
    } : null;
  }), s = T(() => a.value.length === 0), i = T(() => (t.defer, !1));
  return {
    data: n,
    rows: a,
    pagination: o,
    isEmpty: s,
    isLoading: i
  };
}
function Q3(e = {}) {
  const t = e.sortable ?? !1, r = e.selectable ?? !1, n = e.multiple ?? !1, a = e.sticky ?? !1, o = t ? Yp() : null, s = r ? J3(n) : null, i = a ? Xp(a) : null, u = e.resource ? Jp(e.resource, {
    defer: e.defer,
    preserveState: e.preserveState,
    preserveScroll: e.preserveScroll
  }) : null;
  return {
    // Sort functionality
    ...o ? {
      sortState: o.sortState,
      sort: o.sort,
      getSortDirection: o.getSortDirection,
      isSorted: o.isSorted
    } : {},
    // Selection functionality
    ...s ? {
      selected: s.selected,
      select: s.select,
      selectAll: s.selectAll,
      deselectAll: s.deselectAll,
      isSelected: s.isSelected,
      isAllSelected: s.isAllSelected,
      isIndeterminate: s.isIndeterminate
    } : {},
    // Sticky header functionality
    ...i ? {
      tableRef: i.tableRef,
      headerRef: i.headerRef,
      stickyRef: i.stickyRef,
      isSticky: i.isSticky,
      updateStickyState: i.updateStickyState
    } : {},
    // Inertia data functionality
    ...u ? {
      data: u.data,
      rows: u.rows,
      pagination: u.pagination,
      isEmpty: u.isEmpty,
      isLoading: u.isLoading
    } : {}
  };
}
const Z3 = ["id"], ek = {
  key: 0,
  class: "px-4 pt-4 text-sm text-gray-600 dark:text-gray-400"
}, tk = {
  key: 1,
  class: "mt-6"
}, rk = 60, nk = /* @__PURE__ */ z({
  __name: "Table",
  props: {
    data: {},
    columns: {},
    total: {},
    pagination: {},
    showPagination: { type: Boolean, default: !0 },
    showPerPage: { type: Boolean, default: !1 },
    defaultPerPage: { default: 25 },
    links: {},
    striped: { type: Boolean, default: !1 },
    bordered: { type: Boolean, default: !1 },
    hover: { type: Boolean, default: !1 },
    responsive: { type: Boolean, default: !0 },
    sticky: { type: Boolean, default: !1 },
    separate: { type: Boolean, default: !1 },
    seperate: { type: Boolean },
    overflow: { type: Boolean },
    sortable: { type: Boolean },
    loading: { type: Boolean, default: !1 },
    selectable: { type: Boolean },
    collapsible: { type: Boolean, default: !1 },
    collapseId: {},
    collapsable: { type: Boolean },
    collapse_id: {},
    emptyMessage: { default: "No records found" },
    loadingMessage: { default: "Loading..." },
    size: { default: "md" },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, r = T(() => ({
      collapsible: t.collapsible || t.collapsable,
      separate: t.separate || t.seperate,
      collapseId: t.collapseId || t.collapse_id,
      sticky: t.sticky
    })), {
      tableRef: n,
      headerRef: a,
      stickyRef: o,
      isSticky: s,
      updateStickyState: i
    } = Xp(T(() => r.value.sticky), rk), u = T(() => [
      "min-w-full divide-y divide-gray-200 dark:divide-gray-700",
      {
        "text-xs": t.size === "sm",
        "text-sm": t.size === "md",
        "text-base": t.size === "lg",
        "border-separate border-spacing-y-2": r.value.separate,
        "border border-gray-200 dark:border-gray-700 rounded-lg dark:border-gray-700": t.bordered,
        "[&_tbody_tr:nth-child(even)]:bg-gray-50 dark:[&_tbody_tr:nth-child(even)]:bg-gray-900/40": t.striped,
        "[&_tbody_tr:hover]:bg-gray-50 [&_tbody_tr]:transition-colors dark:[&_tbody_tr:hover]:bg-gray-900/60": t.hover,
        "[&>*>tr]:border-l-primary-500 mb-14 [&>*>tr]:border-l-4": r.value.collapsible,
        "shadow-sm rounded-lg overflow-hidden": t.variant === "elevated",
        "border-0": t.variant === "minimal"
      }
    ]), l = T(() => [
      "w-full overflow-x-auto",
      {
        "rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800": t.variant === "elevated",
        "border border-gray-200 dark:border-gray-700 rounded-lg dark:border-gray-700": t.bordered && t.variant !== "elevated"
      }
    ]), c = T(() => [
      "w-full",
      {
        "!visible hidden": r.value.collapsible
      }
    ]);
    ye(() => {
      r.value.sticky && i();
    });
    const d = T(() => {
      if (t.pagination)
        return t.pagination;
      const h = t.links;
      return h ? {
        links: h,
        current_page: 1,
        last_page: 1,
        per_page: t.defaultPerPage,
        total: t.total || 0,
        from: 1,
        to: t.total || 0
      } : null;
    }), y = T(() => {
      var h, v;
      return t.showPagination && (((v = (h = d.value) == null ? void 0 : h.links) == null ? void 0 : v.length) || 0) > 0;
    });
    return (h, v) => {
      var m;
      return S(), P("div", {
        class: Q(c.value),
        id: r.value.collapseId,
        "data-te-collapse-item": ""
      }, [
        t.total != null ? (S(), P("div", ek, " Found: " + Z(t.total), 1)) : X("", !0),
        R("div", {
          class: Q(l.value),
          ref_key: "tableRef",
          ref: n
        }, [
          R("table", {
            class: Q(u.value),
            ref_key: "headerRef",
            ref: a
          }, [
            r.value.sticky ? (S(), P("div", {
              key: 0,
              ref_key: "stickyRef",
              ref: o,
              class: Q(["fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow", {
                "max-sm:hidden": t.responsive
              }])
            }, null, 2)) : X("", !0),
            V(h.$slots, "default")
          ], 2)
        ], 2),
        y.value ? (S(), P("div", tk, [
          h.$slots.pagination ? V(h.$slots, "pagination", { key: 0 }) : (S(), U(g(Qp), {
            key: 1,
            links: ((m = d.value) == null ? void 0 : m.links) || [],
            showPerPage: t.showPerPage,
            defaultPerPage: t.defaultPerPage
          }, null, 8, ["links", "showPerPage", "defaultPerPage"]))
        ])) : X("", !0)
      ], 10, Z3);
    };
  }
}), ak = /* @__PURE__ */ z({
  __name: "Thead",
  props: {
    sticky: { type: Boolean, default: !1 },
    responsive: { type: Boolean, default: !0 },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, r = T(() => [
      "bg-gray-50 dark:bg-gray-900/40 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900/50 dark:border-gray-700",
      {
        "hidden sm:table-header-group": t.responsive,
        "sticky top-0 z-10": t.sticky
      }
    ]);
    return (n, a) => (S(), P("thead", {
      class: Q(r.value)
    }, [
      V(n.$slots, "default")
    ], 2));
  }
}), ok = { key: 0 }, sk = { key: 1 }, ik = { key: 1 }, lk = { key: 0 }, uk = /* @__PURE__ */ z({
  __name: "Tbody",
  props: {
    loading: { type: Boolean, default: !1 },
    data: {},
    emptyMessage: { default: "No records found" },
    loadingRows: { default: 3 },
    responsive: { type: Boolean, default: !0 },
    hidePlaceholder: { type: Boolean, default: !1 },
    hideNoRecordsMessage: { type: Boolean, default: !1 },
    recordsFromPagination: { type: Boolean, default: !1 },
    noRecordsMessage: { default: "No records found" },
    ignoreDefer: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = typeof t.data == "string" ? Jp(t.data) : null, n = T(() => {
      var u;
      return Array.isArray(t.data) ? t.data : typeof t.data == "string" && r ? t.recordsFromPagination ? (u = r.data.value) == null ? void 0 : u.data : r.rows.value : [];
    }), a = T(() => Array.isArray(n.value) && n.value.length === 0), o = T(() => {
      const u = t.data !== void 0;
      return !t.hideNoRecordsMessage && u && a.value;
    }), s = T(() => !t.hidePlaceholder && (t.loading || (r == null ? void 0 : r.isLoading.value))), i = T(() => !t.ignoreDefer && typeof t.data == "string");
    return T(() => n.value), (u, l) => i.value ? (S(), P("tbody", ik, [
      J(g(jx), {
        data: typeof t.data == "string" ? t.data : ""
      }, {
        fallback: I(() => [
          t.hidePlaceholder ? X("", !0) : (S(), U(g(Ic), {
            key: 0,
            placeholders: u.loadingRows
          }, null, 8, ["placeholders"]))
        ]),
        default: I(() => [
          o.value ? (S(), P("tr", lk, [
            J(g(xa), {
              colspan: "999",
              class: "text-center text-gray-500 dark:text-gray-400 py-8 dark:text-gray-400"
            }, {
              default: I(() => [
                fe(Z(t.emptyMessage || t.noRecordsMessage), 1)
              ]),
              _: 1
            })
          ])) : X("", !0),
          V(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ])) : (S(), P("tbody", ok, [
      s.value ? (S(), U(g(Ic), {
        key: 0,
        placeholders: u.loadingRows
      }, null, 8, ["placeholders"])) : o.value ? (S(), P("tr", sk, [
        J(g(xa), {
          colspan: "999",
          class: "text-center text-gray-500 dark:text-gray-400 py-8 dark:text-gray-400"
        }, {
          default: I(() => [
            fe(Z(t.emptyMessage || t.noRecordsMessage), 1)
          ]),
          _: 1
        })
      ])) : V(u.$slots, "default", { key: 2 })
    ]));
  }
}), ck = { class: "flex items-center justify-between" }, dk = {
  key: 0,
  class: "sort-arrows ml-2 flex flex-col items-center"
}, fk = /* @__PURE__ */ z({
  __name: "Th",
  props: {
    orderBy: {},
    column: {},
    sortable: { type: Boolean, default: !1 },
    sorted: { type: Boolean },
    sortDirection: {},
    align: { default: "left" },
    width: {},
    responsive: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = e, r = T(() => t.column || t.orderBy), { getSortDirection: n, isSorted: a, sort: o } = Yp(), s = T(() => r.value ? n(r.value) : null), i = T(() => r.value ? a(r.value) : !1), u = T(() => t.sortable && r.value), l = () => {
      !u.value || !r.value || o(r.value);
    }, c = (h) => s.value === h && i.value ? "text-blue-600" : "text-gray-400", d = T(() => [
      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50 dark:text-gray-400",
      {
        "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900/80": u.value,
        "text-left": t.align === "left",
        "text-center": t.align === "center",
        "text-right": t.align === "right",
        "w-0": t.width === "auto"
      },
      t.width && t.width !== "auto" ? `w-${t.width}` : ""
    ]), y = T(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (h, v) => (S(), P("th", {
      scope: "col",
      class: Q(d.value),
      style: rt(y.value),
      onClick: l
    }, [
      R("div", ck, [
        V(h.$slots, "default"),
        u.value ? (S(), P("span", dk, [
          (S(), P("svg", {
            class: Q(["h-3 w-3 -mb-1", c("asc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, v[0] || (v[0] = [
            R("path", { d: "M6 3L2 7h8L6 3z" }, null, -1)
          ]), 2)),
          (S(), P("svg", {
            class: Q(["h-3 w-3", c("desc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, v[1] || (v[1] = [
            R("path", { d: "M6 9L2 5h8L6 9z" }, null, -1)
          ]), 2))
        ])) : X("", !0)
      ])
    ], 6));
  }
}), pk = {
  key: 0,
  class: "sm:hidden"
}, mk = { class: "font-medium text-gray-500 dark:text-gray-400" }, hk = { class: "ml-2" }, yk = { key: 1 }, xa = /* @__PURE__ */ z({
  __name: "Td",
  props: {
    align: { default: "left" },
    responsive: { type: Boolean, default: !0 },
    label: {},
    width: {},
    nowrap: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = T(() => [
      "px-6 py-4 text-sm text-gray-900 dark:text-gray-100",
      {
        "text-left": t.align === "left",
        "text-center": t.align === "center",
        "text-right": t.align === "right",
        "block border-b border-gray-100 dark:border-gray-700 last:border-b-0 sm:table-cell sm:border-b-0 dark:border-gray-700": t.responsive,
        "px-4 py-2 sm:px-6 sm:py-4": t.responsive,
        "whitespace-nowrap": t.nowrap,
        "w-0": t.width === "auto"
      }
    ]), n = T(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (a, o) => (S(), P("td", {
      class: Q(r.value),
      style: rt(n.value)
    }, [
      t.label && t.responsive ? (S(), P("div", pk, [
        R("span", mk, Z(t.label) + ":", 1),
        R("span", hk, [
          V(a.$slots, "default")
        ])
      ])) : (S(), P("div", yk, [
        V(a.$slots, "default")
      ]))
    ], 6));
  }
}), gk = ["data-te-target", "aria-controls"], eC = /* @__PURE__ */ z({
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, r) => (S(), P("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      V(t.$slots, "default")
    ], 8, gk));
  }
}), vk = { colspan: "999" }, bk = ["id"], tC = /* @__PURE__ */ z({
  __name: "TrCollapse",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, r) => (S(), P("tr", null, [
      R("td", vk, [
        R("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          V(t.$slots, "default")
        ], 8, bk)
      ])
    ]));
  }
}), Ic = /* @__PURE__ */ z({
  __name: "TrPlaceholder",
  props: {
    placeholders: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (S(!0), P(oe, null, ke(t.placeholders, (a) => (S(), P("tr", { key: a }, [
      J(g(xa), { colspan: "999" }, {
        default: I(() => n[0] || (n[0] = [
          R("div", { class: "tr-placeholder bg-opacity-75 h-8 w-full animate-pulse rounded-md bg-gray-500" }, null, -1)
        ])),
        _: 1
      })
    ]))), 128));
  }
}), wk = { class: "max-xxs:text-xxs mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 dark:text-gray-400" }, Sk = {
  key: 0,
  class: "xs:w-fit mb-2 h-fit w-full"
}, xk = { key: 0 }, kk = {
  key: 1,
  class: "ml-1"
}, Ok = { class: "flex w-fit flex-wrap" }, Ck = {
  key: 0,
  class: "font-semibold"
}, Ek = { class: "mb-1" }, Ak = {
  key: 0,
  class: "text-primary w-full font-semibold whitespace-normal"
}, Pk = { class: "w-full break-words" }, $k = { class: "mb-1 flex flex-col" }, Tk = { key: 1 }, rC = /* @__PURE__ */ z({
  __name: "TableItemCard",
  props: {
    key: {},
    item: {},
    itemId: {},
    extraText: {},
    title: {},
    pills: {},
    options: {},
    timeStamp: {},
    amount: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => {
      var a;
      return S(), P("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        R("div", wk, [
          t.itemId || t.timeStamp ? (S(), P("div", Sk, [
            t.itemId ? (S(), P(oe, { key: 0 }, [
              t.itemId.routeName ? (S(), U(g(yt), {
                key: 1,
                href: r.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: I(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (S(), P(oe, { key: 0 }, [
                    fe("#")
                  ], 64)) : X("", !0),
                  fe(" " + Z(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (S(), P("span", xk, [
                t.itemId.prefix || t.itemId.prefix == null ? (S(), P(oe, { key: 0 }, [
                  fe("#")
                ], 64)) : X("", !0),
                fe(" " + Z(t.itemId.id), 1)
              ]))
            ], 64)) : X("", !0),
            t.timeStamp ? (S(), P("span", kk, [
              t.itemId ? (S(), P(oe, { key: 0 }, [
                fe("-")
              ], 64)) : X("", !0),
              fe(" " + Z(t.timeStamp), 1)
            ])) : X("", !0)
          ])) : X("", !0),
          R("div", Ok, [
            (S(!0), P(oe, null, ke(r.pills, (o, s) => (S(), P(oe, { key: s }, [
              o.text ? (S(), P("span", {
                key: 0,
                class: "bg-primary rounded-md border p-1 px-2 whitespace-nowrap text-white",
                style: rt({
                  backgroundColor: o.color ? o.color : null
                })
              }, Z(o.text), 5)) : X("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (S(), P(oe, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (S(), P("p", Ck, Z(t.title.text), 1)) : (S(), U(g(yt), {
            key: 1,
            href: t.title.href ? t.title.href : r.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: I(() => [
              fe(Z(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : X("", !0),
        R("div", Ek, [
          t.extraText ? (S(), P("p", Ak, [
            n[0] || (n[0] = fe(" Engineer Note: ")),
            R("span", Pk, Z(t.extraText), 1)
          ])) : X("", !0)
        ]),
        R("div", $k, [
          (S(!0), P(oe, null, ke(r.options, (o, s) => (S(), P(oe, { key: s }, [
            !o.routeName && !o.href ? (S(), P("span", {
              key: 0,
              style: rt({ color: o.color ? o.color : "#000" })
            }, Z(o.text), 5)) : (S(), U(g(yt), {
              href: o.href ? o.href : r.route(o.routeName, o.routeData),
              style: rt({ color: o.color ? o.color : "#000" }),
              key: "link-" + s
            }, {
              default: I(() => [
                fe(Z(o.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 128))
        ]),
        (a = t.amount) != null && a.amount ? (S(), P("div", Tk, [
          R("span", null, Z(t.amount.text + g(qx)(t.amount.amount)), 1)
        ])) : X("", !0),
        R("div", null, [
          V(r.$slots, "default")
        ])
      ]);
    };
  }
}), Dk = { class: "flex" }, Rk = { class: "flex-shrink-0" }, _k = { class: "ml-3 flex-1" }, Fk = {
  key: 0,
  class: "mb-1 text-sm font-medium"
}, Ik = { class: "text-sm" }, Bk = {
  key: 0,
  class: "ml-auto flex-shrink-0"
}, nC = /* @__PURE__ */ z({
  __name: "Alert",
  props: {
    type: { default: "info" },
    title: { default: void 0 },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismiss"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = N(r.modelValue), o = T({
      get: () => a.value,
      set: (m) => {
        a.value = m, n("update:modelValue", m);
      }
    });
    ne(
      () => r.modelValue,
      (m) => {
        a.value = m;
      },
      { immediate: !0 }
    );
    const s = T(() => {
      const m = "relative w-full rounded-lg border px-4 py-3 text-sm";
      switch (r.type) {
        case "success":
          return `${m} border-green-200 bg-green-50 text-green-800 dark:border-green-800/70 dark:bg-green-950/60 dark:text-green-100`;
        case "error":
          return `${m} border-red-200 bg-red-50 text-red-800 dark:border-red-800/70 dark:bg-red-950/60 dark:text-red-100`;
        case "warning":
          return `${m} border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-700/70 dark:bg-yellow-950/60 dark:text-yellow-100`;
        case "info":
        default:
          return `${m} border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800/70 dark:bg-blue-950/60 dark:text-blue-100`;
      }
    }), i = T(() => {
      switch (r.type) {
        case "success":
          return Em;
        case "error":
          return Nm;
        case "warning":
          return Lm;
        case "info":
        default:
          return $m;
      }
    }), u = () => {
      o.value = !1, n("dismiss");
    }, l = (m) => {
      const f = m;
      f.style.height = "0", f.style.opacity = "0", f.style.transform = "translateY(-8px) scale(0.95)";
    }, c = (m, f) => {
      const p = m, w = p.scrollHeight;
      p.style.transition = "all 400ms ease-out", requestAnimationFrame(() => {
        p.style.height = `${w}px`, p.style.opacity = "1", p.style.transform = "translateY(0) scale(1)";
      }), setTimeout(f, 400);
    }, d = (m) => {
      const f = m;
      f.style.height = "auto";
    }, y = (m) => {
      const f = m, p = f.scrollHeight;
      f.style.height = `${p}px`;
    }, h = (m, f) => {
      const p = m;
      p.style.transition = "all 350ms ease-in", requestAnimationFrame(() => {
        p.style.height = "0", p.style.opacity = "0", p.style.transform = "translateY(-8px) scale(0.95)";
      }), setTimeout(f, 350);
    }, v = (m) => {
      const f = m;
      f.style.height = "", f.style.opacity = "", f.style.transform = "", f.style.transition = "";
    };
    return (m, f) => (S(), U(ur, {
      name: "alert",
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: d,
      onBeforeLeave: y,
      onLeave: h,
      onAfterLeave: v,
      css: !1
    }, {
      default: I(() => [
        o.value ? (S(), P("div", {
          key: 0,
          class: Q(s.value),
          role: "alert",
          style: { overflow: "hidden" }
        }, [
          R("div", Dk, [
            R("div", Rk, [
              J(g(_e), {
                icon: i.value,
                class: Q(["h-5 w-5", {
                  "text-green-500 dark:text-green-300": m.type === "success",
                  "text-red-500 dark:text-red-300": m.type === "error",
                  "text-yellow-500 dark:text-yellow-300": m.type === "warning",
                  "text-blue-500 dark:text-blue-300": m.type === "info"
                }])
              }, null, 8, ["icon", "class"])
            ]),
            R("div", _k, [
              m.title ? (S(), P("h3", Fk, Z(m.title), 1)) : X("", !0),
              R("div", Ik, [
                V(m.$slots, "default")
              ])
            ]),
            m.dismissible ? (S(), P("div", Bk, [
              R("button", {
                onClick: u,
                class: Q(["inline-flex rounded-md p-1.5 transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none", {
                  "text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50 dark:text-green-300 dark:hover:bg-green-900/40 dark:focus:ring-green-400 dark:focus:ring-offset-green-950": m.type === "success",
                  "text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50 dark:text-red-300 dark:hover:bg-red-900/40 dark:focus:ring-red-400 dark:focus:ring-offset-red-950": m.type === "error",
                  "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50 dark:text-yellow-300 dark:hover:bg-yellow-900/40 dark:focus:ring-yellow-400 dark:focus:ring-offset-yellow-950": m.type === "warning",
                  "text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50 dark:text-blue-300 dark:hover:bg-blue-900/40 dark:focus:ring-blue-400 dark:focus:ring-offset-blue-950": m.type === "info"
                }]),
                "aria-label": "Dismiss alert"
              }, [
                J(g(_e), {
                  icon: g(la),
                  class: "h-5 w-5"
                }, null, 8, ["icon"])
              ], 2)
            ])) : X("", !0)
          ])
        ], 2)) : X("", !0)
      ]),
      _: 3
    }));
  }
}), Lk = { class: "text-lg font-semibold text-gray-900 dark:text-gray-100" }, Mk = { key: 0 }, Nk = { class: "p-6" }, jk = /* @__PURE__ */ z({
  __name: "CollapsableSection",
  props: {
    header: { default: void 0 },
    open: { type: Boolean, default: !1 },
    headerColor: { default: void 0 }
  },
  setup(e) {
    const t = e, r = N(t.open);
    return ne(
      () => t.open,
      (n) => r.value = n
    ), ye(() => {
      r.value = t.open;
    }), (n, a) => (S(), U(g(Bi), {
      defaultOpen: n.open,
      open: r.value,
      "onUpdate:open": a[0] || (a[0] = (o) => r.value = o),
      class: "rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
    }, {
      default: I(() => [
        J(g(Mi), {
          class: "focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900/40 dark:hover:bg-gray-900/60 dark:focus:ring-offset-gray-900",
          style: rt({ backgroundColor: n.headerColor })
        }, {
          default: I(() => [
            R("h3", Lk, [
              n.header ? (S(), P("span", Mk, Z(n.header), 1)) : V(n.$slots, "trigger", { key: 1 })
            ]),
            R("div", {
              class: Q(["text-primary-600 transition-transform duration-300 ease-in-out dark:text-primary-300", { "rotate-180": r.value }])
            }, [
              J(g(_e), {
                icon: g(ci),
                class: "h-5 w-5"
              }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 3
        }, 8, ["style"]),
        J(g(Li), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: I(() => [
            R("div", Nk, [
              V(n.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), aC = /* @__PURE__ */ z({
  __name: "Dropdown",
  props: {
    align: { default: Gp.START },
    alignOffset: { default: 5 },
    openOnHover: { type: Boolean, default: !1 },
    hoverDelay: { default: 150 }
  },
  setup(e) {
    const t = e, r = N(!1);
    let n = null;
    const a = async () => {
      t.openOnHover && (n && (clearTimeout(n), n = null), await Me(), r.value = !0);
    }, o = () => {
      t.openOnHover && (n = setTimeout(async () => {
        await Me(), r.value = !1, n = null;
      }, t.hoverDelay));
    }, s = (i) => {
      r.value = i;
    };
    return (i, u) => (S(), U(g(yf), {
      open: r.value,
      "onUpdate:open": [
        u[0] || (u[0] = (l) => r.value = l),
        s
      ]
    }, {
      default: I(() => [
        J(g(bf), { "aria-label": "Dropdown" }, {
          default: I(() => [
            V(i.$slots, "trigger")
          ]),
          _: 3
        }),
        J(g(vf), null, {
          default: I(() => [
            J(g(gf), se({ alignOffset: i.alignOffset }, i.$attrs, {
              align: i.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white text-gray-900 dark:text-gray-100 shadow ring-1 ring-gray-400 will-change-[opacity,transform] dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40 dark:ring-gray-700",
              onMouseenter: a,
              onMouseleave: o
            }), {
              default: I(() => [
                V(i.$slots, "content")
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
}), oC = /* @__PURE__ */ z({
  __name: "DropdownLink",
  props: {
    href: {}
  },
  setup(e) {
    return (t, r) => (S(), U(g(vb), null, {
      default: I(() => [
        J(g(yt), se(t.$attrs, {
          href: t.href,
          class: "focusable flex w-full items-center gap-2 rounded px-8 py-6 text-left text-base leading-5 text-gray-700 dark:text-gray-200 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        }), {
          default: I(() => [
            V(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["href"])
      ]),
      _: 3
    }));
  }
}), sC = /* @__PURE__ */ z({
  __name: "DropdownSeparator",
  setup(e) {
    return (t, r) => (S(), U(g(bb), { class: "mx-1 my-px h-px bg-gray-300 dark:bg-gray-700" }));
  }
}), qk = ["href", "target", "tabindex", "aria-disabled"], Vk = "focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium transition-colors duration-200 select-none", iC = /* @__PURE__ */ z({
  __name: "LinkButton",
  props: {
    href: {},
    colourClasses: { default: void 0 },
    theme: { default: "primary" },
    target: { default: "_self" },
    disabled: { type: Boolean, default: !1 },
    method: {},
    data: {}
  },
  setup(e) {
    const t = {
      [Pe.PRIMARY]: "bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.SECONDARY]: "border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:disabled:opacity-60",
      [Pe.DANGER]: "bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.WARNING]: "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.INFO]: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.SUCCESS]: "bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.NO_STYLE]: ""
    }, r = e, n = () => {
      if (r.colourClasses && r.colourClasses.length > 0)
        return [...r.colourClasses];
      const a = [];
      return r.theme !== Pe.NO_STYLE && a.push(Vk), a.push(t[r.theme]), a;
    };
    return (a, o) => a.href && (a.method || a.data) ? (S(), U(g(yt), {
      key: 0,
      href: a.href,
      method: a.method,
      data: a.data,
      class: Q(n()),
      disabled: a.disabled,
      as: "button",
      tabindex: "0"
    }, {
      default: I(() => [
        V(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class", "disabled"])) : (S(), P("a", {
      key: 1,
      href: a.href,
      target: a.target,
      class: Q(n()),
      tabindex: a.disabled ? -1 : 0,
      "aria-disabled": a.disabled,
      onClick: o[0] || (o[0] = (s) => a.disabled && s.preventDefault())
    }, [
      V(a.$slots, "default")
    ], 10, qk));
  }
}), zk = {
  class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
  type: "button"
}, Uk = { class: "mx-1 w-2" }, Hk = ["aria-labelledby"], lC = /* @__PURE__ */ z({
  __name: "LinkDropdownButton",
  props: {
    align: { default: Gp.START },
    alignOffset: { default: 5 },
    title: { default: void 0 }
  },
  setup(e) {
    const t = N(!1);
    return (r, n) => (S(), U(g(yf), {
      open: t.value,
      "onUpdate:open": n[0] || (n[0] = (a) => t.value = a)
    }, {
      default: I(() => [
        J(g(bf), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: I(() => [
            R("button", zk, [
              fe(Z(r.title) + " ", 1),
              R("span", Uk, [
                J(g(_e), { icon: g(ui) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        J(g(vf), null, {
          default: I(() => [
            J(g(gf), se({ alignOffset: r.alignOffset }, r.$attrs, {
              align: r.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            }), {
              default: I(() => [
                R("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
                  "aria-labelledby": r.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  V(r.$slots, "default")
                ], 8, Hk)
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
}), Wk = ["href"], uC = /* @__PURE__ */ z({
  __name: "LinkDropdownButtonItem",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, r) => (S(), P("li", null, [
      R("a", {
        class: "focusable inline-flex w-full items-center justify-center bg-transparent px-4 py-2 text-sm font-normal whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href
      }, Z(t.title), 9, Wk)
    ]));
  }
}), cC = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, r) => (S(), U(g(jk), { header: e.header }, {
      default: I(() => [
        J(g(lO), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, Kk = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, Gk = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, Yk = {
  key: 0,
  class: "text-center"
}, Xk = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, Jk = { class: "flex-start w-full md:flex" }, Qk = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, Zk = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, eO = { class: "mb-1 flex justify-between" }, tO = { class: "text-sm text-neutral-500" }, rO = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, nO = {
  key: 1,
  class: "text-sm text-primary-500"
}, aO = { class: "text-sm text-neutral-500" }, oO = { class: "font-medium" }, sO = {
  key: 0,
  class: "line-through"
}, iO = ["innerHTML"], lO = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return $a.add(Rm, ms, Im, km, Fm), (t, r) => e.logs == null ? (S(), P("div", Kk, [
      J(g(tl))
    ])) : (S(), P("div", Gk, [
      e.logs.total ? (S(), P("ol", Xk, [
        (S(!0), P(oe, null, ke(e.logs.data, (n) => (S(), P("li", {
          key: n.id
        }, [
          R("div", Jk, [
            R("div", Qk, [
              J(g(_e), {
                icon: n.icon
              }, null, 8, ["icon"])
            ]),
            R("div", Zk, [
              R("div", eO, [
                R("span", tO, [
                  fe(Z(n.event_formatted) + " ", 1),
                  n.reference ? (S(), P("span", rO, Z(n.reference), 1)) : X("", !0),
                  n.causer ? (S(), P(oe, { key: 1 }, [
                    n.causer.id ? (S(), U(g(yt), {
                      key: 0,
                      href: t.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: I(() => [
                        fe(" (" + Z(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (S(), P("span", nO, "(" + Z(n.causer.first_name) + ")", 1))
                  ], 64)) : X("", !0)
                ]),
                R("span", aO, Z(n.created_date_full), 1)
              ]),
              (S(!0), P(oe, null, ke(n.changes_formatted, (a, o) => (S(), P("p", {
                key: o,
                class: "mb-0 text-neutral-700"
              }, [
                R("span", oO, Z(o) + ":", 1),
                a.old ? (S(), P("span", sO, Z(a.old), 1)) : X("", !0),
                fe(" " + Z(a.new), 1)
              ]))), 128)),
              n.description_details ? (S(), P("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, iO)) : X("", !0)
            ])
          ])
        ]))), 128))
      ])) : (S(), P("p", Yk, "No Data")),
      e.logs.links ? (S(), U(g(Qp), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : X("", !0)
    ]));
  }
}, dC = /* @__PURE__ */ z({
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
    const r = e, n = t, a = N(null);
    ne(
      () => r.show,
      () => {
        r.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const o = () => {
      r.closeable && n("close");
    }, s = (O) => {
      O.key === "Escape" && r.show && o();
    };
    ye(() => document.addEventListener("keydown", s)), Nt(() => {
      document.removeEventListener("keydown", s), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", p), document.body.style.overflow = null;
    });
    const i = T(() => {
      let O = [];
      return O.push(
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
      ), r.hideOverflow && O.push("overflow-hidden"), O.join(" ");
    }), u = N(!1), l = N(null), c = N(0), d = N(0), y = N(0), h = N(0), v = N(null), m = N(null), f = (O, A) => {
      u.value = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", p), l.value = A, c.value = O.clientX, d.value = O.clientY, y.value = a.value.offsetWidth, h.value = a.value.offsetHeight;
    }, p = (O) => {
      u.value = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", p);
    }, w = (O) => {
      if (!u.value) return;
      const A = (O.clientX - c.value) * 2, F = O.clientY - d.value;
      l.value.includes("x") && (v.value = y.value + A + "px"), l.value.includes("-x") && (v.value = y.value - A + "px"), l.value.includes("y") && (m.value = h.value + F + "px");
    };
    return (O, A) => (S(), U(Hc, { to: "body" }, [
      J(ur, { "leave-active-class": "duration-200" }, {
        default: I(() => [
          tt(R("div", {
            class: Q(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            J(ur, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: I(() => [
                tt(R("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: o
                }, [
                  R("div", {
                    class: Q(["backdrop absolute inset-0 bg-gray-500 opacity-75 dark:bg-black dark:opacity-70", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [lr, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            J(ur, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: I(() => [
                tt(R("div", {
                  ref_key: "modalContent",
                  ref: a,
                  class: Q(["mb-6 transform rounded-lg bg-white text-gray-900 dark:text-gray-100 shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800 dark:text-gray-100", {
                    [i.value]: !!i.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: rt({
                    userSelect: u.value ? "none" : "auto",
                    transition: u.value ? "none" : "",
                    width: v.value || "",
                    height: m.value || "",
                    maxWidth: v.value || "",
                    maxHeight: m.value || ""
                  })
                }, [
                  e.show ? V(O.$slots, "default", { key: 0 }) : X("", !0),
                  e.resizable ? (S(), P(oe, { key: 1 }, [
                    R("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: A[0] || (A[0] = (F) => f(F, "y")),
                      onMouseup: p
                    }, null, 32),
                    R("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: A[1] || (A[1] = (F) => f(F, "-x")),
                      onMouseup: p
                    }, null, 32),
                    R("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: A[2] || (A[2] = (F) => f(F, "x")),
                      onMouseup: p
                    }, null, 32),
                    R("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: A[3] || (A[3] = (F) => f(F, "xy")),
                      onMouseup: p
                    }, null, 32),
                    R("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: A[4] || (A[4] = (F) => f(F, "-xy")),
                      onMouseup: p
                    }, null, 32)
                  ], 64)) : X("", !0)
                ], 6), [
                  [lr, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [lr, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), uO = {
  key: 2,
  class: "mb-3"
}, cO = {
  key: 3,
  class: "mt-5 flex justify-end gap-1.5"
}, fC = /* @__PURE__ */ z({
  __name: "NewModal",
  props: /* @__PURE__ */ gt({
    title: { default: void 0 },
    description: { default: void 0 },
    defaultOpen: { type: Boolean, default: !1 }
  }, {
    modelValue: {
      type: Boolean,
      default: !1
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = zr(e, "modelValue"), n = (a) => {
      r.value = a;
    };
    return ye(() => {
      t.defaultOpen && (r.value = !0);
    }), Nt(() => {
      r.value = !1;
    }), ne(
      () => t.defaultOpen,
      (a) => {
        r.value = a;
      }
    ), (a, o) => (S(), U(g(X0), {
      defaultOpen: a.defaultOpen,
      open: r.value,
      "onUpdate:open": [
        o[0] || (o[0] = (s) => r.value = s),
        n
      ]
    }, {
      default: I(() => [
        a.$slots.trigger ? (S(), U(g(_v), {
          key: 0,
          asChild: ""
        }, {
          default: I(() => [
            V(a.$slots, "trigger")
          ]),
          _: 3
        })) : X("", !0),
        J(g(yb), null, {
          default: I(() => [
            J(g(Dv), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30 dark:bg-black/70" }),
            J(g(Ov), se({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 text-gray-900 dark:text-gray-100 shadow-lg/20 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40" }, a.$attrs), {
              default: I(() => [
                a.title || a.$slots.header ? (S(), U(g(Rv), {
                  key: 0,
                  class: "m-0 text-lg font-semibold dark:text-gray-100"
                }, {
                  default: I(() => [
                    V(a.$slots, "header", {}, () => [
                      fe(Z(a.title), 1)
                    ])
                  ]),
                  _: 3
                })) : X("", !0),
                a.description || a.$slots.description ? (S(), U(g(Cv), {
                  key: 1,
                  class: "mt-2 text-sm leading-normal dark:text-gray-300"
                }, {
                  default: I(() => [
                    V(a.$slots, "description", {}, () => [
                      fe(Z(a.description), 1)
                    ])
                  ]),
                  _: 3
                })) : X("", !0),
                a.title || a.$slots.header || a.description || a.$slots.description ? (S(), P("div", uO)) : X("", !0),
                V(a.$slots, "default"),
                a.$slots.footer ? (S(), P("div", cO, [
                  V(a.$slots, "footer")
                ])) : X("", !0),
                J(g(J0), {
                  class: "focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none dark:text-gray-200 dark:hover:bg-primary/30 dark:focus:bg-primary/40",
                  "aria-label": "Close"
                }, {
                  default: I(() => [
                    J(g(_e), { icon: g(la) }, null, 8, ["icon"])
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
}), dO = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, fO = { class: "ml-3 flex-1 whitespace-nowrap" }, pC = /* @__PURE__ */ z({
  __name: "NavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, r = T(
      () => t.active ? "cursor-pointer focusable flex items-center p-2 text-base font-normal rounded-lg bg-accent-100 text-accent-900 dark:bg-primary-900/50 dark:text-primary-100" : "cursor-pointer focusable flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
    );
    return (n, a) => (S(), U(g(yt), {
      href: n.href,
      class: Q(r.value)
    }, {
      default: I(() => [
        n.$slots.icon ? (S(), P("div", dO, [
          V(n.$slots, "icon")
        ])) : X("", !0),
        R("span", fO, [
          V(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), pO = { class: "pagination flex justify-between" }, mO = ["value", "selected"], hO = {
  key: 0,
  "aria-label": "Page navigation"
}, yO = ["innerHTML"], gO = ["innerHTML", "onClick"], Qp = /* @__PURE__ */ z({
  __name: "Pagination",
  props: {
    links: {},
    linkReturn: { type: Boolean, default: !1 },
    maxPagesToShow: { default: 20 },
    logs: { type: Boolean, default: !1 },
    customLinkClass: { default: "" },
    customActiveLinkClass: { default: "" },
    customListClass: { default: "" },
    preserveScroll: { type: Boolean, default: !1 },
    preserveState: { type: Boolean, default: !1 },
    only: { default: () => [] },
    showPerPage: { type: Boolean, default: !1 },
    defaultPerPage: { default: 100 }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = t, n = e, a = N(n.defaultPerPage), o = [10, 25, 50, 100, 250], s = T(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const l = n.links[0], c = n.links[n.links.length - 1], d = n.links.findIndex((v) => v.active);
      let y = Math.max(1, d - Math.floor(n.maxPagesToShow / 2)), h = Math.min(n.links.length - 2, y + n.maxPagesToShow - 1);
      return h - y < n.maxPagesToShow - 1 && (y = Math.max(1, h - n.maxPagesToShow + 1)), [l, ...n.links.slice(y, h + 1), c];
    }), i = (l) => {
      r("change", l);
    }, u = (l) => {
      let c = new URL(window.location.href);
      if (c.searchParams.set("per_page", l.target.value), n.linkReturn) {
        i(c.href);
        return;
      }
      window.location.href = c.href;
    };
    return (l, c) => (S(), P("div", pO, [
      R("div", null, [
        l.showPerPage ? (S(), U(g(Cg), {
          key: 0,
          type: "select",
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => a.value = d),
          class: "per-page-input w-20",
          onChanged: u
        }, {
          default: I(() => [
            (S(), P(oe, null, ke(o, (d) => R("option", {
              key: d,
              value: d,
              selected: d == a.value
            }, Z(d), 9, mO)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : X("", !0)
      ]),
      s.value.length > 3 ? (S(), P("nav", hO, [
        R("ul", {
          class: Q(["list-style-none flex", { [l.customListClass]: l.customListClass }])
        }, [
          (S(!0), P(oe, null, ke(s.value, (d, y) => (S(), P("li", { key: y }, [
            l.linkReturn ? (S(), P(oe, { key: 0 }, [
              d.url === null ? (S(), P("button", {
                key: 0,
                class: Q(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: c[1] || (c[1] = (h) => i(""))
              }, null, 10, yO)) : (S(), P("button", {
                key: 1,
                class: Q(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [l.customLinkClass]: l.customLinkClass,
                  [l.customActiveLinkClass]: d.active && l.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (h) => i(d.url)
              }, null, 10, gO))
            ], 64)) : (S(), P(oe, { key: 1 }, [
              d.url === null ? (S(), U(g(yt), {
                key: 0,
                class: Q(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (S(), U(g(yt), {
                key: 1,
                class: Q(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [l.customLinkClass]: l.customLinkClass,
                  [l.customActiveLinkClass]: d.active && l.customActiveLinkClass
                }]),
                href: d.url,
                innerHTML: d.label,
                preserveScroll: l.preserveScroll || l.logs,
                preserveState: l.preserveState || l.logs,
                only: l.logs ? ["logs"] : l.only
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])) : X("", !0),
      c[2] || (c[2] = R("div", null, null, -1))
    ]));
  }
}), mC = /* @__PURE__ */ z({
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, r) => {
      const n = pm("Td");
      return S(), U(n, {
        "data-te-collapse-init": "",
        "data-te-target": "#" + t.collapse_id,
        "aria-expanded": "false",
        "aria-controls": t.collapse_id,
        class: "cursor-pointer"
      }, {
        default: I(() => [
          V(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-te-target", "aria-controls"]);
    };
  }
}), hC = /* @__PURE__ */ z({
  __name: "Tr",
  props: {
    selectable: { type: Boolean, default: !1 },
    selected: { type: Boolean, default: !1 },
    hoverable: { type: Boolean, default: !0 },
    clickable: { type: Boolean, default: !1 },
    variant: { default: "default" }
  },
  emits: ["click", "select"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = (s) => {
      r.selectable && n("select", !r.selected), r.clickable && n("click", s);
    }, o = T(() => [
      "border-b border-gray-200 dark:border-gray-700 last:border-b-0 transition-colors",
      {
        "hover:bg-gray-50": r.hoverable && !r.selected,
        "bg-blue-50 border-blue-200": r.selected,
        "cursor-pointer": r.clickable || r.selectable,
        "border-green-200 bg-green-50": r.variant === "success",
        "border-yellow-200 bg-yellow-50": r.variant === "warning",
        "border-red-200 bg-red-50": r.variant === "danger",
        "border-blue-200 bg-blue-50": r.variant === "info",
        "sm:table-row": !0,
        "flex flex-col mb-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm bg-white sm:mb-0 sm:rounded-none sm:border-0 sm:shadow-none sm:bg-transparent": !0
      }
    ]);
    return (s, i) => (S(), P("tr", {
      class: Q(o.value),
      onClick: a
    }, [
      V(s.$slots, "default")
    ], 2));
  }
}), vO = ["onClick"], yC = /* @__PURE__ */ z({
  __name: "EnhancedTable",
  props: {
    columns: {},
    autoGenerateColumns: { type: Boolean, default: !1 },
    selectable: { type: Boolean, default: !1 },
    sortable: { type: Boolean, default: !1 },
    resource: {},
    data: {},
    total: {},
    pagination: {},
    showPagination: { type: Boolean, default: !0 },
    showPerPage: { type: Boolean },
    defaultPerPage: {},
    links: {},
    striped: { type: Boolean, default: !1 },
    bordered: { type: Boolean, default: !1 },
    hover: { type: Boolean, default: !0 },
    responsive: { type: Boolean, default: !0 },
    sticky: { type: Boolean },
    separate: { type: Boolean },
    seperate: { type: Boolean },
    overflow: { type: Boolean },
    loading: { type: Boolean },
    collapsible: { type: Boolean },
    collapseId: {},
    collapsable: { type: Boolean },
    collapse_id: {},
    emptyMessage: {},
    loadingMessage: {},
    size: { default: "md" },
    variant: { default: "default" }
  },
  emits: ["row-click", "selection-change", "sort"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = Q3({
      sortable: r.sortable,
      selectable: r.selectable,
      multiple: !0,
      sticky: r.sticky,
      resource: r.resource
    });
    ka("table", {
      ...a,
      props: r,
      emit: n
    });
    const o = T(() => r.columns ? r.columns : r.autoGenerateColumns && r.data && r.data.length > 0 ? Object.keys(r.data[0]).map((l) => ({
      key: l,
      label: l.charAt(0).toUpperCase() + l.slice(1).replace(/([A-Z])/g, " $1"),
      sortable: r.sortable,
      width: void 0,
      align: "left"
    })) : []), s = (l, c) => {
      n("row-click", l, c);
    }, i = (l) => {
      var c;
      if (a.sort) {
        a.sort(l);
        const d = ((c = a.getSortDirection) == null ? void 0 : c.call(a, l)) || "asc";
        n("sort", l, d);
      }
    }, u = T(() => {
      var l;
      return ((l = a.rows) == null ? void 0 : l.value) || r.data || [];
    });
    return (l, c) => (S(), U(g(nk), Ee(Re(r)), {
      default: I(() => {
        var d;
        return [
          o.value.length > 0 ? (S(), P(oe, { key: 0 }, [
            J(g(ak), null, {
              default: I(() => [
                R("tr", null, [
                  (S(!0), P(oe, null, ke(o.value, (y) => (S(), U(g(fk), {
                    key: y.key,
                    column: y.key,
                    sortable: y.sortable,
                    width: y.width || void 0,
                    align: y.align || "left",
                    onClick: (h) => y.sortable ? i(y.key) : null
                  }, {
                    default: I(() => [
                      fe(Z(y.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["column", "sortable", "width", "align", "onClick"]))), 128))
                ])
              ]),
              _: 1
            }),
            J(g(uk), {
              data: u.value,
              loading: (d = g(a).isLoading) == null ? void 0 : d.value,
              "empty-message": r.emptyMessage
            }, {
              default: I(() => [
                (S(!0), P(oe, null, ke(u.value, (y, h) => {
                  var v, m;
                  return S(), P("tr", {
                    key: y.id || h,
                    class: Q([
                      "border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50",
                      {
                        "cursor-pointer": r.selectable,
                        "bg-blue-50": (m = (v = g(a)).isSelected) == null ? void 0 : m.call(v, y)
                      }
                    ]),
                    onClick: (f) => s(y, h)
                  }, [
                    (S(!0), P(oe, null, ke(o.value, (f) => (S(), U(g(xa), {
                      key: f.key,
                      align: f.align || "left",
                      width: f.width || void 0,
                      nowrap: f.key === "id"
                    }, {
                      default: I(() => [
                        V(l.$slots, `cell-${f.key}`, {
                          row: y,
                          column: f,
                          value: y[f.key]
                        }, () => [
                          fe(Z(y[f.key]), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["align", "width", "nowrap"]))), 128))
                  ], 10, vO);
                }), 128))
              ]),
              _: 3
            }, 8, ["data", "loading", "empty-message"])
          ], 64)) : V(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 16));
  }
}), gC = /* @__PURE__ */ z({
  __name: "DangerButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (S(), U(g(Sr), {
      theme: g(Pe).DANGER,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), vC = /* @__PURE__ */ z({
  __name: "WarningButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (S(), U(g(Sr), {
      theme: g(Pe).WARNING,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), bC = /* @__PURE__ */ z({
  __name: "InfoButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (S(), U(g(Sr), {
      theme: g(Pe).INFO,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), wC = /* @__PURE__ */ z({
  __name: "SuccessButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (S(), U(g(Sr), {
      theme: g(Pe).SUCCESS,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), SC = /* @__PURE__ */ z({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, r = T(
      () => t.active ? "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out dark:border-primary-400 dark:bg-primary-900/40 dark:text-primary-100 dark:focus:bg-primary-900/60 dark:focus:text-primary-50" : "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:hover:border-gray-600 dark:focus:bg-gray-800 dark:focus:text-gray-100 dark:focus:border-gray-600"
    );
    return (n, a) => (S(), U(g(yt), {
      href: n.href,
      class: Q(r.value)
    }, {
      default: I(() => [
        V(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), bO = /* @__PURE__ */ z({
  __name: "SecondaryButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (S(), U(g(Sr), {
      theme: g(Pe).SECONDARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), wO = {
  key: 0,
  class: "border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 px-6 py-4 dark:border-gray-700 dark:bg-gray-900/40"
}, SO = { class: "flex items-center justify-between" }, xO = { class: "text-lg font-semibold text-gray-900 dark:text-gray-100" }, kO = { key: 0 }, OO = { class: "p-6" }, xC = /* @__PURE__ */ z({
  __name: "Section",
  props: {
    header: {},
    overflow: { type: Boolean, default: !1 },
    variant: { default: "default" },
    unstyled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = mm(), n = T(() => {
      if (t.unstyled)
        return "";
      const s = "rounded-lg";
      switch (t.variant) {
        case "outlined":
          return `${s} border border-gray-300 dark:border-gray-700`;
        case "minimal":
          return s;
        case "default":
        default:
          return `${s} border border-gray-200 dark:border-gray-700 bg-white shadow dark:border-gray-700 dark:bg-gray-800`;
      }
    }), a = T(() => {
      const s = [];
      return t.unstyled || s.push(n.value), t.overflow && s.push("overflow-hidden"), r.class && typeof r.class == "string" && s.push(r.class), s.filter(Boolean).join(" ");
    }), o = T(() => {
      const { class: s, ...i } = r;
      return i;
    });
    return (s, i) => (S(), P("div", se({ class: a.value }, o.value), [
      s.header ? (S(), P("div", wO, [
        R("div", SO, [
          R("h3", xO, Z(s.header), 1),
          s.$slots.headerButton ? (S(), P("div", kO, [
            V(s.$slots, "headerButton")
          ])) : X("", !0)
        ])
      ])) : X("", !0),
      R("div", OO, [
        V(s.$slots, "default")
      ])
    ], 16));
  }
}), tl = /* @__PURE__ */ z({
  __name: "Spinner",
  props: {
    size: { default: "md" },
    color: { default: void 0 }
  },
  setup(e) {
    const t = e, r = T(() => {
      switch (t.size) {
        case "xs":
          return "h-4 w-4 border-2";
        case "sm":
          return "h-6 w-6 border-2";
        case "md":
          return "h-8 w-8 border-4";
        // Current default size
        case "lg":
          return "h-12 w-12 border-4";
        case "xl":
          return "h-16 w-16 border-4";
        default:
          return "h-8 w-8 border-4";
      }
    }), n = T(() => t.color ? t.color : "text-primary");
    return (a, o) => (S(), P("div", {
      class: Q([
        "inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        r.value,
        n.value
      ]),
      role: "status",
      "aria-label": "Loading"
    }, o[0] || (o[0] = [
      R("span", { class: "sr-only" }, "Loading...", -1)
    ]), 2));
  }
}), CO = ["onClick"], EO = { class: "group-hover:text-primary-600 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors dark:text-gray-100 dark:group-hover:text-primary-300" }, AO = { class: "text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100" }, kC = /* @__PURE__ */ z({
  __name: "Stats",
  props: {
    stats: {},
    statusName: { default: null },
    customContainerClass: { default: "" },
    customStatClass: { default: "" },
    customStatLabelClass: { default: "" },
    customStatValueClass: { default: "" }
  },
  emits: ["updateSearch"],
  setup(e, { emit: t }) {
    const r = t, n = e, a = qp(), o = (i) => {
      let u = i;
      s(i) && (u = null), r("updateSearch", u);
    }, s = (i) => {
      const u = {};
      return a.url.includes("?") && new URLSearchParams(a.url.split("?")[1]).forEach((c, d) => {
        u[d] = c;
      }), n.statusName != null ? u[n.statusName] == i : u.status == i;
    };
    return (i, u) => (S(), P("div", {
      class: Q(["grid gap-4", [i.customContainerClass]]),
      style: { "grid-template-columns": "repeat(auto-fit, minmax(164px, 1fr))" }
    }, [
      (S(!0), P(oe, null, ke(i.stats, (l) => (S(), P("div", {
        key: l.value,
        class: Q(["group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-black/40", {
          "border-primary-200 bg-primary-50 ring-primary-500 ring-2 dark:border-primary-700 dark:bg-primary-900/30": s(l.name),
          [i.customStatClass]: i.customStatClass
        }]),
        onClick: (c) => o(l.name)
      }, [
        R("div", {
          class: Q(["px-6 py-4", [i.customStatValueClass]])
        }, [
          R("div", EO, Z(l.value), 1)
        ], 2),
        R("div", {
          class: Q(["border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40", [i.customStatLabelClass]])
        }, [
          R("div", AO, Z(l.label ?? l.name), 1)
        ], 2),
        u[0] || (u[0] = R("div", { class: "from-primary-500 to-primary-600 absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100" }, null, -1))
      ], 10, CO))), 128))
    ], 2));
  }
}), PO = "fill-white stroke-gray-200 dark:fill-gray-800 dark:stroke-gray-700", $O = /* @__PURE__ */ z({
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
    const t = e, r = T(() => ["top", "bottom", "left", "right"].includes(t.side) ? t.side : "top"), n = [
      "z-50",
      "max-w-xs",
      "overflow-hidden",
      "rounded-lg",
      "bg-white",
      "border",
      "border-gray-200 dark:border-gray-700",
      "px-3",
      "py-2",
      "text-sm",
      "text-gray-900 dark:text-gray-100",
      "shadow-lg",
      "backdrop-blur-sm",
      // Dark mode
      "dark:bg-gray-800",
      "dark:border-gray-700",
      "dark:text-gray-100",
      "dark:shadow-black/40",
      // Animations
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
    return (a, o) => (S(), U(g(_b), { "delay-duration": a.delayDuration }, {
      default: I(() => [
        J(g(Ib), { disabled: a.disabled }, {
          default: I(() => [
            J(g(Nb), { "as-child": "" }, {
              default: I(() => [
                V(a.$slots, "default")
              ]),
              _: 3
            }),
            J(g(Mb), null, {
              default: I(() => [
                J(g(Lb), {
                  side: r.value,
                  sideOffset: a.sideOffset,
                  collisionPadding: a.collisionPadding,
                  class: Q([g(n), a.contentClass])
                }, {
                  default: I(() => [
                    fe(Z(a.content) + " ", 1),
                    J(g(Db), {
                      class: Q([PO, a.arrowClass])
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
}), TO = ["type", "disabled"], DO = "focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed", Sr = /* @__PURE__ */ z({
  __name: "Button",
  props: {
    theme: { default: "primary" },
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, r = {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-xs",
      lg: "px-6 py-3 text-sm"
    }, n = {
      [Pe.PRIMARY]: "bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.SECONDARY]: "border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:disabled:opacity-60",
      [Pe.DANGER]: "bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.WARNING]: "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.INFO]: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.SUCCESS]: "bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Pe.NO_STYLE]: ""
    };
    return (a, o) => (S(), P("button", {
      type: a.type,
      disabled: a.disabled,
      class: Q([
        // Apply base styles and size only if not no-style theme
        t.theme !== g(Pe).NO_STYLE ? [DO, r[t.size]] : [],
        // Always apply theme variant
        n[t.theme],
        // Custom classes
        t.customClass
      ])
    }, [
      V(a.$slots, "default")
    ], 10, TO));
  }
}), RO = { class: "mt-2" }, OC = /* @__PURE__ */ z({
  __name: "Collapse",
  props: {
    open: { type: Boolean, default: !1 },
    button: { default: () => ["Show more", "Show less"] }
  },
  setup(e) {
    const t = e, r = N(t.open);
    return ne(
      () => t.open,
      (n) => r.value = n
    ), ye(() => {
      r.value = t.open;
    }), (n, a) => (S(), U(g(Bi), {
      defaultOpen: n.open,
      open: r.value,
      "onUpdate:open": a[0] || (a[0] = (o) => r.value = o)
    }, {
      default: I(() => [
        J(g(Mi), { asChild: "" }, {
          default: I(() => [
            V(n.$slots, "trigger", {}, () => [
              J(g(bO), Ee(Re(n.$attrs)), {
                default: I(() => [
                  R("span", null, Z(r.value ? n.button[1] : n.button[0]), 1),
                  J(g(_e), {
                    icon: g(ui),
                    class: Q(["transition-all", { "rotate-180": r.value }])
                  }, null, 8, ["icon", "class"])
                ]),
                _: 1
              }, 16)
            ])
          ]),
          _: 3
        }),
        J(g(Li), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: I(() => [
            R("div", RO, [
              V(n.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), _O = { class: "border-t border-gray-100 dark:border-gray-700" }, FO = { class: "divide-y divide-gray-100 dark:divide-gray-700" }, CC = /* @__PURE__ */ z({
  __name: "DescriptionList",
  props: {
    form: { default: void 0 },
    stopEditOnSubmit: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const r = e, n = N(!1);
    ne(
      () => {
        var l;
        return (l = r.form) == null ? void 0 : l.processing;
      },
      (l) => {
        if (l) {
          n.value = !0;
          return;
        }
        n.value && (n.value = !1, r.stopEditOnSubmit && i());
      }
    );
    const a = N([]);
    ka("registerItem", (l) => {
      a.value.push(l);
    });
    const s = () => {
      a.value.forEach((l) => {
        l && typeof l.startEditing == "function" && l.startEditing();
      });
    }, i = () => {
      a.value.forEach((l) => {
        l && typeof l.stopEditing == "function" && l.stopEditing();
      });
    };
    return t({
      startEditing: s,
      stopEditing: i,
      toggleEditing: () => {
        a.value.forEach((l) => {
          l && typeof l.toggleEditing == "function" && l.toggleEditing();
        });
      }
    }), (l, c) => (S(), P("div", _O, [
      R("dl", FO, [
        V(l.$slots, "default")
      ])
    ]));
  }
}), IO = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, BO = { class: "flex items-center text-sm font-medium dark:text-gray-200" }, LO = {
  key: 0,
  class: "ml-1 text-red-500 dark:text-red-400"
}, MO = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0 dark:text-gray-200" }, NO = { class: "flex min-h-full items-center" }, jO = { class: "slot-content grow" }, qO = { class: "ml-4 shrink-0" }, VO = { class: "slot-edit grow" }, zO = { class: "ml-4 shrink-0" }, EC = /* @__PURE__ */ z({
  __name: "DescriptionListItem",
  props: {
    editable: { type: Boolean, default: !1 },
    label: { default: "" },
    value: { default: void 0 },
    forceEditing: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 }
  },
  emits: ["editToggled"],
  setup(e, { expose: t, emit: r }) {
    $a.add(ms, pl);
    const n = e, a = r, o = N(n.editable ? n.forceEditing : !1), s = () => {
      n.editable && (o.value = !o.value, a("editToggled", o.value));
    };
    ne(
      () => n.forceEditing,
      (d) => {
        n.editable && (o.value = d);
      }
    );
    const i = () => {
      n.editable && (o.value = !0);
    }, u = () => {
      n.editable && (o.value = !1);
    }, l = ii("registerItem");
    return ye(() => {
      l && l({ startEditing: i, stopEditing: u, toggleEditing: s });
    }), t({
      toggleEditing: s,
      startEditing: i,
      stopEditing: u,
      isEditing: () => o.value
    }), (d, y) => (S(), P("div", IO, [
      R("dt", BO, [
        fe(Z(d.label) + " ", 1),
        V(d.$slots, "label"),
        d.required ? (S(), P("span", LO, "*")) : X("", !0)
      ]),
      R("dd", MO, [
        R("div", NO, [
          o.value ? (S(), P(oe, { key: 1 }, [
            R("div", VO, [
              V(d.$slots, "edit")
            ]),
            R("span", zO, [
              R("button", {
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-xl font-bold"
              }, [
                J(g(_e), { icon: g(pl) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (S(), P(oe, { key: 0 }, [
            R("div", jO, [
              V(d.$slots, "default"),
              fe(" " + Z(d.value), 1)
            ]),
            R("span", qO, [
              d.editable ? (S(), P("button", {
                key: 0,
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-lg font-bold"
              }, [
                J(g(_e), { icon: g(ms) }, null, 8, ["icon"])
              ])) : X("", !0),
              V(d.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
});
var ds = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var Bc;
function UO() {
  return Bc || (Bc = 1, function(e) {
    (function() {
      var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
      a.JS_MD5_NO_WINDOW && (n = !1);
      var o = !n && typeof self == "object", s = !a.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? a = Hs : o && (a = self);
      var i = !a.JS_MD5_NO_COMMON_JS && !0 && e.exports, u = !a.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), c = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], y = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), v = [], m;
      if (u) {
        var f = new ArrayBuffer(68);
        m = new Uint8Array(f), v = new Uint32Array(f);
      }
      var p = Array.isArray;
      (a.JS_MD5_NO_NODE_JS || !p) && (p = function(b) {
        return Object.prototype.toString.call(b) === "[object Array]";
      });
      var w = ArrayBuffer.isView;
      u && (a.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !w) && (w = function(b) {
        return typeof b == "object" && b.buffer && b.buffer.constructor === ArrayBuffer;
      });
      var O = function(b) {
        var E = typeof b;
        if (E === "string")
          return [b, !0];
        if (E !== "object" || b === null)
          throw new Error(t);
        if (u && b.constructor === ArrayBuffer)
          return [new Uint8Array(b), !1];
        if (!p(b) && !w(b))
          throw new Error(t);
        return [b, !1];
      }, A = function(b) {
        return function(E) {
          return new M(!0).update(E)[b]();
        };
      }, F = function() {
        var b = A("hex");
        s && (b = H(b)), b.create = function() {
          return new M();
        }, b.update = function(x) {
          return b.create().update(x);
        };
        for (var E = 0; E < y.length; ++E) {
          var k = y[E];
          b[k] = A(k);
        }
        return b;
      }, H = function(b) {
        var E = Ws, k = Ws.Buffer, x;
        k.from && !a.JS_MD5_NO_BUFFER_FROM ? x = k.from : x = function(L) {
          return new k(L);
        };
        var W = function(L) {
          if (typeof L == "string")
            return E.createHash("md5").update(L, "utf8").digest("hex");
          if (L == null)
            throw new Error(t);
          return L.constructor === ArrayBuffer && (L = new Uint8Array(L)), p(L) || w(L) || L.constructor === k ? E.createHash("md5").update(x(L)).digest("hex") : b(L);
        };
        return W;
      }, C = function(b) {
        return function(E, k) {
          return new $(E, !0).update(k)[b]();
        };
      }, K = function() {
        var b = C("hex");
        b.create = function(x) {
          return new $(x);
        }, b.update = function(x, W) {
          return b.create(x).update(W);
        };
        for (var E = 0; E < y.length; ++E) {
          var k = y[E];
          b[k] = C(k);
        }
        return b;
      };
      function M(b) {
        if (b)
          v[0] = v[16] = v[1] = v[2] = v[3] = v[4] = v[5] = v[6] = v[7] = v[8] = v[9] = v[10] = v[11] = v[12] = v[13] = v[14] = v[15] = 0, this.blocks = v, this.buffer8 = m;
        else if (u) {
          var E = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(E), this.blocks = new Uint32Array(E);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      M.prototype.update = function(b) {
        if (this.finalized)
          throw new Error(r);
        var E = O(b);
        b = E[0];
        for (var k = E[1], x, W = 0, L, _ = b.length, G = this.blocks, re = this.buffer8; W < _; ) {
          if (this.hashed && (this.hashed = !1, G[0] = G[16], G[16] = G[1] = G[2] = G[3] = G[4] = G[5] = G[6] = G[7] = G[8] = G[9] = G[10] = G[11] = G[12] = G[13] = G[14] = G[15] = 0), k)
            if (u)
              for (L = this.start; W < _ && L < 64; ++W)
                x = b.charCodeAt(W), x < 128 ? re[L++] = x : x < 2048 ? (re[L++] = 192 | x >>> 6, re[L++] = 128 | x & 63) : x < 55296 || x >= 57344 ? (re[L++] = 224 | x >>> 12, re[L++] = 128 | x >>> 6 & 63, re[L++] = 128 | x & 63) : (x = 65536 + ((x & 1023) << 10 | b.charCodeAt(++W) & 1023), re[L++] = 240 | x >>> 18, re[L++] = 128 | x >>> 12 & 63, re[L++] = 128 | x >>> 6 & 63, re[L++] = 128 | x & 63);
            else
              for (L = this.start; W < _ && L < 64; ++W)
                x = b.charCodeAt(W), x < 128 ? G[L >>> 2] |= x << d[L++ & 3] : x < 2048 ? (G[L >>> 2] |= (192 | x >>> 6) << d[L++ & 3], G[L >>> 2] |= (128 | x & 63) << d[L++ & 3]) : x < 55296 || x >= 57344 ? (G[L >>> 2] |= (224 | x >>> 12) << d[L++ & 3], G[L >>> 2] |= (128 | x >>> 6 & 63) << d[L++ & 3], G[L >>> 2] |= (128 | x & 63) << d[L++ & 3]) : (x = 65536 + ((x & 1023) << 10 | b.charCodeAt(++W) & 1023), G[L >>> 2] |= (240 | x >>> 18) << d[L++ & 3], G[L >>> 2] |= (128 | x >>> 12 & 63) << d[L++ & 3], G[L >>> 2] |= (128 | x >>> 6 & 63) << d[L++ & 3], G[L >>> 2] |= (128 | x & 63) << d[L++ & 3]);
          else if (u)
            for (L = this.start; W < _ && L < 64; ++W)
              re[L++] = b[W];
          else
            for (L = this.start; W < _ && L < 64; ++W)
              G[L >>> 2] |= b[W] << d[L++ & 3];
          this.lastByteIndex = L, this.bytes += L - this.start, L >= 64 ? (this.start = L - 64, this.hash(), this.hashed = !0) : this.start = L;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, M.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var b = this.blocks, E = this.lastByteIndex;
          b[E >>> 2] |= c[E & 3], E >= 56 && (this.hashed || this.hash(), b[0] = b[16], b[16] = b[1] = b[2] = b[3] = b[4] = b[5] = b[6] = b[7] = b[8] = b[9] = b[10] = b[11] = b[12] = b[13] = b[14] = b[15] = 0), b[14] = this.bytes << 3, b[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, M.prototype.hash = function() {
        var b, E, k, x, W, L, _ = this.blocks;
        this.first ? (b = _[0] - 680876937, b = (b << 7 | b >>> 25) - 271733879 << 0, x = (-1732584194 ^ b & 2004318071) + _[1] - 117830708, x = (x << 12 | x >>> 20) + b << 0, k = (-271733879 ^ x & (b ^ -271733879)) + _[2] - 1126478375, k = (k << 17 | k >>> 15) + x << 0, E = (b ^ k & (x ^ b)) + _[3] - 1316259209, E = (E << 22 | E >>> 10) + k << 0) : (b = this.h0, E = this.h1, k = this.h2, x = this.h3, b += (x ^ E & (k ^ x)) + _[0] - 680876936, b = (b << 7 | b >>> 25) + E << 0, x += (k ^ b & (E ^ k)) + _[1] - 389564586, x = (x << 12 | x >>> 20) + b << 0, k += (E ^ x & (b ^ E)) + _[2] + 606105819, k = (k << 17 | k >>> 15) + x << 0, E += (b ^ k & (x ^ b)) + _[3] - 1044525330, E = (E << 22 | E >>> 10) + k << 0), b += (x ^ E & (k ^ x)) + _[4] - 176418897, b = (b << 7 | b >>> 25) + E << 0, x += (k ^ b & (E ^ k)) + _[5] + 1200080426, x = (x << 12 | x >>> 20) + b << 0, k += (E ^ x & (b ^ E)) + _[6] - 1473231341, k = (k << 17 | k >>> 15) + x << 0, E += (b ^ k & (x ^ b)) + _[7] - 45705983, E = (E << 22 | E >>> 10) + k << 0, b += (x ^ E & (k ^ x)) + _[8] + 1770035416, b = (b << 7 | b >>> 25) + E << 0, x += (k ^ b & (E ^ k)) + _[9] - 1958414417, x = (x << 12 | x >>> 20) + b << 0, k += (E ^ x & (b ^ E)) + _[10] - 42063, k = (k << 17 | k >>> 15) + x << 0, E += (b ^ k & (x ^ b)) + _[11] - 1990404162, E = (E << 22 | E >>> 10) + k << 0, b += (x ^ E & (k ^ x)) + _[12] + 1804603682, b = (b << 7 | b >>> 25) + E << 0, x += (k ^ b & (E ^ k)) + _[13] - 40341101, x = (x << 12 | x >>> 20) + b << 0, k += (E ^ x & (b ^ E)) + _[14] - 1502002290, k = (k << 17 | k >>> 15) + x << 0, E += (b ^ k & (x ^ b)) + _[15] + 1236535329, E = (E << 22 | E >>> 10) + k << 0, b += (k ^ x & (E ^ k)) + _[1] - 165796510, b = (b << 5 | b >>> 27) + E << 0, x += (E ^ k & (b ^ E)) + _[6] - 1069501632, x = (x << 9 | x >>> 23) + b << 0, k += (b ^ E & (x ^ b)) + _[11] + 643717713, k = (k << 14 | k >>> 18) + x << 0, E += (x ^ b & (k ^ x)) + _[0] - 373897302, E = (E << 20 | E >>> 12) + k << 0, b += (k ^ x & (E ^ k)) + _[5] - 701558691, b = (b << 5 | b >>> 27) + E << 0, x += (E ^ k & (b ^ E)) + _[10] + 38016083, x = (x << 9 | x >>> 23) + b << 0, k += (b ^ E & (x ^ b)) + _[15] - 660478335, k = (k << 14 | k >>> 18) + x << 0, E += (x ^ b & (k ^ x)) + _[4] - 405537848, E = (E << 20 | E >>> 12) + k << 0, b += (k ^ x & (E ^ k)) + _[9] + 568446438, b = (b << 5 | b >>> 27) + E << 0, x += (E ^ k & (b ^ E)) + _[14] - 1019803690, x = (x << 9 | x >>> 23) + b << 0, k += (b ^ E & (x ^ b)) + _[3] - 187363961, k = (k << 14 | k >>> 18) + x << 0, E += (x ^ b & (k ^ x)) + _[8] + 1163531501, E = (E << 20 | E >>> 12) + k << 0, b += (k ^ x & (E ^ k)) + _[13] - 1444681467, b = (b << 5 | b >>> 27) + E << 0, x += (E ^ k & (b ^ E)) + _[2] - 51403784, x = (x << 9 | x >>> 23) + b << 0, k += (b ^ E & (x ^ b)) + _[7] + 1735328473, k = (k << 14 | k >>> 18) + x << 0, E += (x ^ b & (k ^ x)) + _[12] - 1926607734, E = (E << 20 | E >>> 12) + k << 0, W = E ^ k, b += (W ^ x) + _[5] - 378558, b = (b << 4 | b >>> 28) + E << 0, x += (W ^ b) + _[8] - 2022574463, x = (x << 11 | x >>> 21) + b << 0, L = x ^ b, k += (L ^ E) + _[11] + 1839030562, k = (k << 16 | k >>> 16) + x << 0, E += (L ^ k) + _[14] - 35309556, E = (E << 23 | E >>> 9) + k << 0, W = E ^ k, b += (W ^ x) + _[1] - 1530992060, b = (b << 4 | b >>> 28) + E << 0, x += (W ^ b) + _[4] + 1272893353, x = (x << 11 | x >>> 21) + b << 0, L = x ^ b, k += (L ^ E) + _[7] - 155497632, k = (k << 16 | k >>> 16) + x << 0, E += (L ^ k) + _[10] - 1094730640, E = (E << 23 | E >>> 9) + k << 0, W = E ^ k, b += (W ^ x) + _[13] + 681279174, b = (b << 4 | b >>> 28) + E << 0, x += (W ^ b) + _[0] - 358537222, x = (x << 11 | x >>> 21) + b << 0, L = x ^ b, k += (L ^ E) + _[3] - 722521979, k = (k << 16 | k >>> 16) + x << 0, E += (L ^ k) + _[6] + 76029189, E = (E << 23 | E >>> 9) + k << 0, W = E ^ k, b += (W ^ x) + _[9] - 640364487, b = (b << 4 | b >>> 28) + E << 0, x += (W ^ b) + _[12] - 421815835, x = (x << 11 | x >>> 21) + b << 0, L = x ^ b, k += (L ^ E) + _[15] + 530742520, k = (k << 16 | k >>> 16) + x << 0, E += (L ^ k) + _[2] - 995338651, E = (E << 23 | E >>> 9) + k << 0, b += (k ^ (E | ~x)) + _[0] - 198630844, b = (b << 6 | b >>> 26) + E << 0, x += (E ^ (b | ~k)) + _[7] + 1126891415, x = (x << 10 | x >>> 22) + b << 0, k += (b ^ (x | ~E)) + _[14] - 1416354905, k = (k << 15 | k >>> 17) + x << 0, E += (x ^ (k | ~b)) + _[5] - 57434055, E = (E << 21 | E >>> 11) + k << 0, b += (k ^ (E | ~x)) + _[12] + 1700485571, b = (b << 6 | b >>> 26) + E << 0, x += (E ^ (b | ~k)) + _[3] - 1894986606, x = (x << 10 | x >>> 22) + b << 0, k += (b ^ (x | ~E)) + _[10] - 1051523, k = (k << 15 | k >>> 17) + x << 0, E += (x ^ (k | ~b)) + _[1] - 2054922799, E = (E << 21 | E >>> 11) + k << 0, b += (k ^ (E | ~x)) + _[8] + 1873313359, b = (b << 6 | b >>> 26) + E << 0, x += (E ^ (b | ~k)) + _[15] - 30611744, x = (x << 10 | x >>> 22) + b << 0, k += (b ^ (x | ~E)) + _[6] - 1560198380, k = (k << 15 | k >>> 17) + x << 0, E += (x ^ (k | ~b)) + _[13] + 1309151649, E = (E << 21 | E >>> 11) + k << 0, b += (k ^ (E | ~x)) + _[4] - 145523070, b = (b << 6 | b >>> 26) + E << 0, x += (E ^ (b | ~k)) + _[11] - 1120210379, x = (x << 10 | x >>> 22) + b << 0, k += (b ^ (x | ~E)) + _[2] + 718787259, k = (k << 15 | k >>> 17) + x << 0, E += (x ^ (k | ~b)) + _[9] - 343485551, E = (E << 21 | E >>> 11) + k << 0, this.first ? (this.h0 = b + 1732584193 << 0, this.h1 = E - 271733879 << 0, this.h2 = k - 1732584194 << 0, this.h3 = x + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + b << 0, this.h1 = this.h1 + E << 0, this.h2 = this.h2 + k << 0, this.h3 = this.h3 + x << 0);
      }, M.prototype.hex = function() {
        this.finalize();
        var b = this.h0, E = this.h1, k = this.h2, x = this.h3;
        return l[b >>> 4 & 15] + l[b & 15] + l[b >>> 12 & 15] + l[b >>> 8 & 15] + l[b >>> 20 & 15] + l[b >>> 16 & 15] + l[b >>> 28 & 15] + l[b >>> 24 & 15] + l[E >>> 4 & 15] + l[E & 15] + l[E >>> 12 & 15] + l[E >>> 8 & 15] + l[E >>> 20 & 15] + l[E >>> 16 & 15] + l[E >>> 28 & 15] + l[E >>> 24 & 15] + l[k >>> 4 & 15] + l[k & 15] + l[k >>> 12 & 15] + l[k >>> 8 & 15] + l[k >>> 20 & 15] + l[k >>> 16 & 15] + l[k >>> 28 & 15] + l[k >>> 24 & 15] + l[x >>> 4 & 15] + l[x & 15] + l[x >>> 12 & 15] + l[x >>> 8 & 15] + l[x >>> 20 & 15] + l[x >>> 16 & 15] + l[x >>> 28 & 15] + l[x >>> 24 & 15];
      }, M.prototype.toString = M.prototype.hex, M.prototype.digest = function() {
        this.finalize();
        var b = this.h0, E = this.h1, k = this.h2, x = this.h3;
        return [
          b & 255,
          b >>> 8 & 255,
          b >>> 16 & 255,
          b >>> 24 & 255,
          E & 255,
          E >>> 8 & 255,
          E >>> 16 & 255,
          E >>> 24 & 255,
          k & 255,
          k >>> 8 & 255,
          k >>> 16 & 255,
          k >>> 24 & 255,
          x & 255,
          x >>> 8 & 255,
          x >>> 16 & 255,
          x >>> 24 & 255
        ];
      }, M.prototype.array = M.prototype.digest, M.prototype.arrayBuffer = function() {
        this.finalize();
        var b = new ArrayBuffer(16), E = new Uint32Array(b);
        return E[0] = this.h0, E[1] = this.h1, E[2] = this.h2, E[3] = this.h3, b;
      }, M.prototype.buffer = M.prototype.arrayBuffer, M.prototype.base64 = function() {
        for (var b, E, k, x = "", W = this.array(), L = 0; L < 15; )
          b = W[L++], E = W[L++], k = W[L++], x += h[b >>> 2] + h[(b << 4 | E >>> 4) & 63] + h[(E << 2 | k >>> 6) & 63] + h[k & 63];
        return b = W[L], x += h[b >>> 2] + h[b << 4 & 63] + "==", x;
      };
      function $(b, E) {
        var k, x = O(b);
        if (b = x[0], x[1]) {
          var W = [], L = b.length, _ = 0, G;
          for (k = 0; k < L; ++k)
            G = b.charCodeAt(k), G < 128 ? W[_++] = G : G < 2048 ? (W[_++] = 192 | G >>> 6, W[_++] = 128 | G & 63) : G < 55296 || G >= 57344 ? (W[_++] = 224 | G >>> 12, W[_++] = 128 | G >>> 6 & 63, W[_++] = 128 | G & 63) : (G = 65536 + ((G & 1023) << 10 | b.charCodeAt(++k) & 1023), W[_++] = 240 | G >>> 18, W[_++] = 128 | G >>> 12 & 63, W[_++] = 128 | G >>> 6 & 63, W[_++] = 128 | G & 63);
          b = W;
        }
        b.length > 64 && (b = new M(!0).update(b).array());
        var re = [], Se = [];
        for (k = 0; k < 64; ++k) {
          var Ne = b[k] || 0;
          re[k] = 92 ^ Ne, Se[k] = 54 ^ Ne;
        }
        M.call(this, E), this.update(Se), this.oKeyPad = re, this.inner = !0, this.sharedMemory = E;
      }
      $.prototype = new M(), $.prototype.finalize = function() {
        if (M.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var b = this.array();
          M.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(b), M.prototype.finalize.call(this);
        }
      };
      var q = F();
      q.md5 = q, q.md5.hmac = K(), i ? e.exports = q : a.md5 = q;
    })();
  }(ds)), ds.exports;
}
var HO = UO();
const WO = ["src", "alt"], AC = /* @__PURE__ */ z({
  __name: "GravatarImg",
  props: {
    email: {},
    size: { default: 100 }
  },
  setup(e) {
    const t = e, r = T(() => HO.md5(t.email.trim().toLowerCase())), n = T(() => `https://www.gravatar.com/avatar/${r.value}?s=${t.size}`), a = T(() => `Gravatar for ${t.email}`);
    return (o, s) => (S(), P("img", {
      src: n.value,
      alt: a.value
    }, null, 8, WO));
  }
}), KO = { class: "list-none m-0 ml-0 before:hidden" }, GO = ["id"], YO = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, XO = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, JO = { class: "m-0 list-none space-y-1 px-4 py-1 pl-7" }, PC = /* @__PURE__ */ z({
  __name: "NavCollapse",
  props: {
    open: { type: Boolean, default: !1 },
    name: {}
  },
  setup(e) {
    const t = e, r = N(t.open);
    return ne(
      () => t.open,
      (n) => r.value = n
    ), (n, a) => (S(), P("li", KO, [
      J(g(Bi), {
        defaultOpen: n.open,
        open: r.value,
        "onUpdate:open": a[0] || (a[0] = (o) => r.value = o)
      }, {
        default: I(() => [
          J(g(Mi), { asChild: "" }, {
            default: I(() => [
              R("button", {
                id: n.name,
                class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 dark:text-gray-100 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                n.$slots.icon ? (S(), P("div", YO, [
                  V(n.$slots, "icon")
                ])) : X("", !0),
                R("span", XO, Z(n.name), 1),
                J(g(_e), {
                  icon: g(ui),
                  class: Q(["transition-all", { "rotate-180": r.value }])
                }, null, 8, ["icon", "class"])
              ], 8, GO)
            ]),
            _: 3
          }),
          J(g(Li), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: I(() => [
              R("ul", JO, [
                V(n.$slots, "default")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["defaultOpen", "open"])
    ]));
  }
}), QO = { class: "relative" }, ZO = { class: "mt-4 flex flex-col items-center justify-center" }, e4 = { class: "relative flex w-fit flex-row justify-center gap-3" }, t4 = ["onClick"], r4 = 20, $C = {
  __name: "DottedCarousel",
  props: {
    /** Outer padding offset applied to the scroll math when clicking a dot */
    padding: { default: 0 },
    /** Pixel gap between slides */
    gap: { default: 20 }
  },
  setup(e) {
    const t = N(0), r = N(null), n = N(null), a = N(0);
    let o = null;
    const s = e, i = N(0);
    ne(t, (d) => {
      r.value && (i.value = `${d * r4}`);
    });
    const u = (d, y) => {
      var h;
      (h = n.value) != null && h.children[y] && (t.value = y, n.value.scrollTo({
        behavior: "smooth",
        // offsetLeft is the child's left position within the scroll container,
        // already in the same coordinate space as scrollLeft.
        left: n.value.children[y].offsetLeft - s.padding
      }));
    }, l = () => {
      var y;
      if (!((y = n.value) != null && y.children[0])) return;
      const d = n.value.children[0].getBoundingClientRect().width;
      t.value = Math.round(n.value.scrollLeft / (d + s.gap));
    }, c = () => {
      var d;
      a.value = ((d = n.value) == null ? void 0 : d.children.length) ?? 0;
    };
    return ye(() => {
      c(), l(), n.value.addEventListener("scroll", l), o = new MutationObserver(c), o.observe(n.value, { childList: !0 });
    }), zc(() => {
      var d;
      o == null || o.disconnect(), (d = n.value) == null || d.removeEventListener("scroll", l);
    }), (d, y) => (S(), P("div", QO, [
      R("div", {
        class: "flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden",
        style: rt({ gap: `${e.gap}px` }),
        ref_key: "container",
        ref: n,
        onScroll: y[0] || (y[0] = (...h) => d.onContainerScroll && d.onContainerScroll(...h))
      }, [
        V(d.$slots, "default")
      ], 36),
      R("div", ZO, [
        R("div", e4, [
          R("div", {
            class: "absolute h-2 w-2 rounded-full bg-primary transition-all duration-300",
            style: rt({ left: `${i.value}px` }),
            ref_key: "activeDot",
            ref: r
          }, null, 4),
          (S(!0), P(oe, null, ke(a.value, (h) => (S(), P("div", {
            key: h,
            class: "h-2 w-2 cursor-pointer rounded-full bg-accent",
            onClick: (v) => u(v, h - 1)
          }, null, 8, t4))), 128))
        ])
      ])
    ]));
  }
}, n4 = { class: "absolute inset-0 isolate z-0 size-full" }, TC = /* @__PURE__ */ z({
  __name: "DataTile",
  props: {
    value: {},
    label: {},
    icon: {},
    selected: { type: Boolean, default: !1 },
    customStatClass: { default: "" },
    customStatValueClass: { default: "" },
    customStatLabelClass: { default: "" },
    theme: { default: "primary" }
  },
  setup(e) {
    const t = e, r = T(() => {
      switch (t.theme) {
        case "secondary":
          return {
            base: "border-secondary-200 bg-secondary-50 ring-secondary-500",
            hoverText: "group-hover:text-secondary-600",
            gradient: "from-secondary-500 to-secondary-600"
          };
        case "danger":
          return {
            base: "border-danger-200 bg-danger-50 ring-danger-500",
            hoverText: "group-hover:text-danger-600",
            gradient: "from-danger-500 to-danger-600"
          };
        case "success":
          return {
            base: "border-success-200 bg-success-50 ring-success-500",
            hoverText: "group-hover:text-success-600",
            gradient: "from-success-500 to-success-600"
          };
        case "warning":
          return {
            base: "border-warning-200 bg-warning-50 ring-warning-500",
            hoverText: "group-hover:text-warning-600",
            gradient: "from-warning-500 to-warning-600"
          };
        default:
          return {
            base: "border-primary-200 bg-primary-50 ring-primary-500",
            hoverText: "group-hover:text-primary-600",
            gradient: "from-primary-500 to-primary-600"
          };
      }
    });
    return (n, a) => (S(), P("div", {
      class: Q(["group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:hover:shadow-black/40", {
        [r.value.base]: !0,
        "ring-2": n.selected,
        [n.customStatClass]: n.customStatClass
      }])
    }, [
      R("div", {
        class: Q(["relative overflow-clip px-6 py-4", [n.customStatValueClass]])
      }, [
        R("div", n4, [
          n.icon ? (S(), U(g(_e), {
            key: 0,
            icon: n.icon,
            class: Q([[r.value.hoverText], "absolute top-1/2 right-2 h-4/5 -translate-y-1/2 text-gray-400 opacity-50 transition-colors dark:text-gray-600"]),
            size: "3x"
          }, null, 8, ["icon", "class"])) : X("", !0)
        ]),
        R("div", {
          class: Q([[r.value.hoverText], "text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors dark:text-gray-100"])
        }, Z(n.value), 3)
      ], 2),
      R("div", {
        class: Q(["border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40", [n.customStatLabelClass]])
      }, [
        R("div", {
          class: Q([[r.value.hoverText], "text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors dark:text-gray-400"])
        }, Z(n.label), 3)
      ], 2),
      R("div", {
        class: Q([[r.value.gradient], "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"])
      }, null, 2)
    ], 2));
  }
}), a4 = /* @__PURE__ */ z({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (S(), U(g(Sr), {
      theme: g(Pe).PRIMARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customButtonClass,
      size: t.size
    }, {
      default: I(() => [
        V(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), o4 = { class: "relative mt-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 dark:border-gray-700 dark:bg-gray-900" }, s4 = { class: "flex items-center justify-between rounded-t-lg border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/60 px-4 py-2 dark:border-gray-700 dark:bg-gray-800" }, i4 = { class: "overflow-x-auto p-4 text-sm" }, l4 = { class: "language-vue text-gray-800 dark:text-gray-200 font-mono" }, DC = /* @__PURE__ */ z({
  __name: "CodePreview",
  props: {
    code: {}
  },
  setup(e) {
    const t = e, r = N(""), n = N("Copy");
    ye(() => {
      Array.isArray(t.code) ? r.value = t.code.join(`
`) : console.error("CodePreview: `code` prop is not an array of strings.", t.code);
    });
    const a = async () => {
      try {
        await navigator.clipboard.writeText(r.value), n.value = "✓ Copied!", setTimeout(() => {
          n.value = "Copy";
        }, 2e3);
      } catch (o) {
        console.error("Failed to copy code:", o), n.value = "✗ Failed", setTimeout(() => {
          n.value = "Copy";
        }, 2e3);
      }
    };
    return (o, s) => (S(), P("div", o4, [
      R("div", s4, [
        s[0] || (s[0] = R("span", { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, "Code Example", -1)),
        R("button", {
          onClick: a,
          class: Q(["rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100", {
            "text-green-600 dark:text-green-400": n.value.includes("✓"),
            "text-red-600 dark:text-red-400": n.value.includes("✗")
          }]),
          title: "Copy to clipboard"
        }, Z(n.value), 3)
      ]),
      R("pre", i4, [
        R("code", l4, Z(r.value), 1)
      ])
    ]));
  }
}), u4 = { class: "mt-12 mb-8" }, c4 = ["id"], RC = /* @__PURE__ */ z({
  __name: "H2",
  props: {
    title: {}
  },
  setup(e) {
    return (t, r) => (S(), P("div", u4, [
      R("h2", {
        id: t.title.toLowerCase().replace(/\s+/g, "-"),
        class: "border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900"
      }, Z(t.title), 9, c4)
    ]));
  }
}), d4 = "nb-vue-components:dark", ia = N(!1);
let oi = null, yn = d4, Mr = null, dn = null;
const f4 = (e) => oi || (typeof document > "u" ? null : document.documentElement), p4 = (e) => {
  const t = f4();
  t && t.classList.toggle("dark", e);
}, m4 = (e) => {
  if (yn !== !1 && !(typeof window > "u"))
    try {
      window.localStorage.setItem(yn, e ? "1" : "0");
    } catch {
    }
}, fs = () => {
  if (yn === !1 || typeof window > "u") return null;
  try {
    const e = window.localStorage.getItem(yn);
    if (e === "1") return !0;
    if (e === "0") return !1;
  } catch {
  }
  return null;
}, Yn = () => {
  Mr && dn && Mr.removeEventListener("change", dn), Mr = null, dn = null;
};
ne(
  ia,
  (e) => {
    p4(e), m4(e);
  },
  { immediate: !1 }
);
function h4(e = {}) {
  e.target !== void 0 && (oi = e.target), e.storageKey !== void 0 && (yn = e.storageKey);
  const t = (i) => {
    ia.value = i;
  };
  return {
    isDark: ia,
    enable: () => t(!0),
    disable: () => t(!1),
    toggle: () => t(!ia.value),
    set: t,
    setupSystemPreference: () => {
      if (typeof window > "u" || !window.matchMedia)
        return () => {
        };
      Yn(), Mr = window.matchMedia("(prefers-color-scheme: dark)"), fs() === null && t(Mr.matches), dn = (i) => {
        fs() === null && t(i.matches);
      }, Mr.addEventListener("change", dn);
      try {
        si(Yn);
      } catch {
      }
      return Yn;
    },
    teardownSystemPreference: Yn,
    initialize: (i = !1) => {
      const u = fs();
      if (u !== null) {
        t(u);
        return;
      }
      if (typeof window < "u" && window.matchMedia) {
        const l = window.matchMedia("(prefers-color-scheme: dark)");
        t(l.matches || i);
        return;
      }
      t(i);
    }
  };
}
const _C = {
  install(e, t = {}) {
    for (const r in components)
      e.component(r, components[r]);
    if (t.darkMode) {
      const r = h4({
        target: t.darkModeTarget,
        storageKey: t.darkModeStorageKey
      });
      r.initialize(), t.darkMode === "system" && r.setupSystemPreference();
    }
  }
};
export {
  nC as Alert,
  Sr as Button,
  cg as Checkbox,
  DC as CodePreview,
  jk as CollapsableSection,
  OC as Collapse,
  jk as CollapsibleSection,
  gC as DangerButton,
  TC as DataTile,
  CC as DescriptionList,
  EC as DescriptionListItem,
  $C as DottedCarousel,
  aC as Dropdown,
  oC as DropdownLink,
  k4 as DropdownSearchbar,
  sC as DropdownSeparator,
  yC as EnhancedTable,
  X4 as FileDropZoneInput,
  AC as GravatarImg,
  RC as H2,
  J4 as Images,
  bC as InfoButton,
  Cg as Input,
  rr as InputError,
  Hr as InputLabel,
  li as InputWrapper,
  iC as LinkButton,
  lC as LinkDropdownButton,
  uC as LinkDropdownButtonItem,
  cC as Logs,
  lO as LogsContent,
  dC as Modal,
  PC as NavCollapse,
  pC as NavLink,
  fC as NewModal,
  Qp as Pagination,
  a4 as PrimaryButton,
  g4 as PropsTable,
  Q4 as RadioButton,
  SC as ResponsiveNavLink,
  x4 as RichSelect,
  aw as SearchSelect,
  bO as SecondaryButton,
  xC as Section,
  S4 as Select,
  O4 as Select2ajax,
  Z4 as SelectMultiple,
  tl as Spinner,
  kC as Stats,
  Sa as SubmitButton,
  wC as SuccessButton,
  zb as Switch,
  nk as Table,
  rC as TableItemCard,
  uk as Tbody,
  xa as Td,
  mC as TdCollapseHandler,
  ki as TextInput,
  Ig as Textarea,
  fk as Th,
  ak as Thead,
  $O as Tooltip,
  hC as Tr,
  tC as TrCollapse,
  eC as TrCollapseHandler,
  Ic as TrPlaceholder,
  v4 as UnderConstruction,
  vC as WarningButton,
  _C as default,
  qp as getInertiaPage,
  Ua as getInertiaRouter,
  K4 as hasPermission,
  qx as moneyFormat,
  W4 as numberFormat,
  Y4 as setInertiaPage,
  G4 as setInertiaRouter,
  h4 as useDarkMode,
  kg as useFormIntegration,
  Jp as useInertiaTable,
  Og as useInputUtils,
  Sg as useInputValue,
  xg as usePasswordToggle,
  Xp as useStickyTableHeader,
  Q3 as useTable,
  J3 as useTableSelection,
  Yp as useTableSort
};
