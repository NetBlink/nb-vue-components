import * as Zi from "vue";
import { defineComponent as z, createElementBlock as k, openBlock as S, createElementVNode as D, createCommentVNode as Y, Fragment as re, renderList as ge, normalizeClass as Q, toDisplayString as Z, computed as T, createBlock as U, renderSlot as j, unref as m, watch as ne, h as qe, createVNode as J, mergeModels as mt, useModel as qn, ref as N, onMounted as pe, withDirectives as Ze, vModelCheckbox as Yp, vModelSelect as Cc, withCtx as _, createTextVNode as ce, isRef as Wt, createSlots as Tr, vShow as un, vModelText as Oc, shallowRef as mr, getCurrentScope as Ac, onScopeDispose as Ec, shallowReadonly as $n, Comment as Pc, mergeProps as se, cloneVNode as Xp, toValue as At, readonly as kc, effectScope as $c, onBeforeUnmount as Jp, watchEffect as st, customRef as Qp, getCurrentInstance as vn, nextTick as De, inject as Js, provide as yo, toRefs as kt, onUnmounted as Nt, toHandlerKey as Zp, camelize as Tc, reactive as hr, normalizeStyle as et, Teleport as Dc, toRef as em, markRaw as os, watchPostEffect as Fc, mergeDefaults as Rc, withModifiers as dt, normalizeProps as be, guardReactiveProps as Ae, withKeys as Gt, useSlots as tm, resolveDynamicComponent as Vr, toHandlers as _c, Transition as cn, resolveDirective as nm, resolveComponent as rm, useAttrs as om } from "vue";
const am = { class: "overflow-x-auto" }, sm = { class: "min-w-full divide-y divide-gray-200" }, im = { class: "divide-y divide-gray-200 bg-white" }, lm = { key: 0 }, um = { class: "px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900" }, cm = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, dm = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, fm = { class: "px-6 py-4 text-sm text-gray-500" }, qO = /* @__PURE__ */ z({
  __name: "PropsTable",
  props: {
    rows: { default: () => [] }
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), k("div", am, [
      D("table", sm, [
        r[1] || (r[1] = D("thead", { class: "bg-gray-50" }, [
          D("tr", null, [
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Prop"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Type"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Default"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Description")
          ])
        ], -1)),
        D("tbody", im, [
          t.rows.length === 0 ? (S(), k("tr", lm, r[0] || (r[0] = [
            D("td", {
              colspan: "4",
              class: "px-6 py-4 text-center text-sm text-gray-500"
            }, "No props defined", -1)
          ]))) : Y("", !0),
          (S(!0), k(re, null, ge(t.rows, (o, a) => (S(), k("tr", {
            key: a,
            class: Q({ "bg-yellow-50": o.highlight })
          }, [
            D("td", um, Z(o.prop), 1),
            D("td", cm, Z(o.type), 1),
            D("td", dm, Z(o.default), 1),
            D("td", fm, Z(o.description), 1)
          ], 2))), 128))
        ])
      ])
    ]));
  }
}), Qs = /* @__PURE__ */ z({
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
    function n(s) {
      let i = [];
      return s.split("_").join(" ").split(" ").map(function(c) {
        i.push(c[0].toUpperCase() + c.slice(1));
      }), i.join(" ");
    }
    const r = T(() => t.label ? t.label : t.field ? n(t.field) : ""), o = T(() => {
      var s, i;
      return t.error ? t.error : (i = (s = t.form) == null ? void 0 : s.errors) != null && i[t.field || ""] ? t.form.errors[t.field || ""] : null;
    }), a = T(() => t.htmlFor || t.field);
    return (s, i) => (S(), k("div", {
      class: Q(s.noLabel ? "mb-2" : "mb-4")
    }, [
      !s.noLabel && (r.value || s.field) ? (S(), U(m(zn), {
        key: 0,
        customClass: s.labelCustomClass,
        for: a.value,
        value: r.value,
        sublabel: s.sublabel,
        required: s.required,
        tooltip: s.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : Y("", !0),
      j(s.$slots, "default"),
      o.value ? (S(), U(m(nn), {
        key: 1,
        message: o.value,
        class: "mt-2"
      }, null, 8, ["message"])) : Y("", !0)
    ], 2));
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const as = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, pm = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, el = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, mm = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, Zs = mm, hm = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, ym = hm, tl = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, gm = {
  prefix: "fas",
  iconName: "person-digging",
  icon: [576, 512, ["digging"], "f85e", "M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"]
}, vm = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, bm = vm, wm = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Sm = wm, ei = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, xm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Cm = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Zr = Cm, Om = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Am = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
}, Em = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Pm = Em, km = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, $m = km;
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Tm(e, t, n) {
  return (t = Fm(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function nl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nl(Object(n), !0).forEach(function(r) {
      Tm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Dm(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fm(e) {
  var t = Dm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const rl = () => {
};
let ti = {}, Ic = {}, Bc = null, Lc = {
  mark: rl,
  measure: rl
};
try {
  typeof window < "u" && (ti = window), typeof document < "u" && (Ic = document), typeof MutationObserver < "u" && (Bc = MutationObserver), typeof performance < "u" && (Lc = performance);
} catch {
}
const {
  userAgent: ol = ""
} = ti.navigator || {}, Xt = ti, ve = Ic, al = Bc, Dr = Lc;
Xt.document;
const jt = !!ve.documentElement && !!ve.head && typeof ve.addEventListener == "function" && typeof ve.createElement == "function", Mc = ~ol.indexOf("MSIE") || ~ol.indexOf("Trident/");
var Rm = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, _m = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Nc = {
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
}, Im = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, jc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Le = "classic", go = "duotone", Bm = "sharp", Lm = "sharp-duotone", qc = [Le, go, Bm, Lm], Mm = {
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
}, Nm = {
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
}, jm = /* @__PURE__ */ new Map([["classic", {
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
}]]), qm = {
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
}, Vm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], sl = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, zm = ["kit"], Um = {
  kit: {
    "fa-kit": "fak"
  }
}, Hm = ["fak", "fakd"], Wm = {
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
}, Fr = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Km = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Gm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Ym = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Xm = {
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
}, Jm = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, ss = {
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
}, Qm = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], is = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Km, ...Qm], Zm = ["solid", "regular", "light", "thin", "duotone", "brands"], Vc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], eh = Vc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), th = [...Object.keys(Jm), ...Zm, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Fr.GROUP, Fr.SWAP_OPACITY, Fr.PRIMARY, Fr.SECONDARY].concat(Vc.map((e) => "".concat(e, "x"))).concat(eh.map((e) => "w-".concat(e))), nh = {
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
const It = "___FONT_AWESOME___", ls = 16, zc = "fa", Uc = "svg-inline--fa", fn = "data-fa-i2svg", us = "data-fa-pseudo-element", rh = "data-fa-pseudo-element-pending", ni = "data-prefix", ri = "data-icon", ll = "fontawesome-i2svg", oh = "async", ah = ["HTML", "HEAD", "STYLE", "SCRIPT"], Hc = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function yr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Le];
    }
  });
}
const Wc = G({}, Nc);
Wc[Le] = G(G(G(G({}, {
  "fa-duotone": "duotone"
}), Nc[Le]), sl.kit), sl["kit-duotone"]);
const sh = yr(Wc), cs = G({}, qm);
cs[Le] = G(G(G(G({}, {
  duotone: "fad"
}), cs[Le]), il.kit), il["kit-duotone"]);
const ul = yr(cs), ds = G({}, ss);
ds[Le] = G(G({}, ds[Le]), Wm.kit);
const oi = yr(ds), fs = G({}, Xm);
fs[Le] = G(G({}, fs[Le]), Um.kit);
yr(fs);
const ih = Rm, Kc = "fa-layers-text", lh = _m, uh = G({}, Mm);
yr(uh);
const ch = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Yo = Im, dh = [...zm, ...th], or = Xt.FontAwesomeConfig || {};
function fh(e) {
  var t = ve.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ph(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ve && typeof ve.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = ph(fh(n));
  o != null && (or[r] = o);
});
const Gc = {
  styleDefault: "solid",
  familyDefault: Le,
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
or.familyPrefix && (or.cssPrefix = or.familyPrefix);
const Mn = G(G({}, Gc), or);
Mn.autoReplaceSvg || (Mn.observeMutations = !1);
const ee = {};
Object.keys(Gc).forEach((e) => {
  Object.defineProperty(ee, e, {
    enumerable: !0,
    set: function(t) {
      Mn[e] = t, ar.forEach((n) => n(ee));
    },
    get: function() {
      return Mn[e];
    }
  });
});
Object.defineProperty(ee, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Mn.cssPrefix = e, ar.forEach((t) => t(ee));
  },
  get: function() {
    return Mn.cssPrefix;
  }
});
Xt.FontAwesomeConfig = ee;
const ar = [];
function mh(e) {
  return ar.push(e), () => {
    ar.splice(ar.indexOf(e), 1);
  };
}
const Ht = ls, xt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function hh(e) {
  if (!e || !jt)
    return;
  const t = ve.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ve.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const a = n[o], s = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = a);
  }
  return ve.head.insertBefore(t, r), e;
}
const yh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ur() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += yh[Math.random() * 62 | 0];
  return t;
}
function Vn(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ai(e) {
  return e.classList ? Vn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Yc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function gh(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Yc(e[n]), '" '), "").trim();
}
function vo(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function si(e) {
  return e.size !== xt.size || e.x !== xt.x || e.y !== xt.y || e.rotate !== xt.rotate || e.flipX || e.flipY;
}
function vh(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const o = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), i = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(a, " ").concat(s, " ").concat(i)
  }, l = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: c,
    path: l
  };
}
function bh(e) {
  let {
    transform: t,
    width: n = ls,
    height: r = ls,
    startCentered: o = !1
  } = e, a = "";
  return o && Mc ? a += "translate(".concat(t.x / Ht - n / 2, "em, ").concat(t.y / Ht - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / Ht, "em), calc(-50% + ").concat(t.y / Ht, "em)) ") : a += "translate(".concat(t.x / Ht, "em, ").concat(t.y / Ht, "em) "), a += "scale(".concat(t.size / Ht * (t.flipX ? -1 : 1), ", ").concat(t.size / Ht * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var wh = `:root, :host {
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
function Xc() {
  const e = zc, t = Uc, n = ee.cssPrefix, r = ee.replacementClass;
  let o = wh;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(i, ".".concat(r));
  }
  return o;
}
let cl = !1;
function Xo() {
  ee.autoAddCss && !cl && (hh(Xc()), cl = !0);
}
var Sh = {
  mixout() {
    return {
      dom: {
        css: Xc,
        insertCss: Xo
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Xo();
      },
      beforeI2svg() {
        Xo();
      }
    };
  }
};
const Bt = Xt || {};
Bt[It] || (Bt[It] = {});
Bt[It].styles || (Bt[It].styles = {});
Bt[It].hooks || (Bt[It].hooks = {});
Bt[It].shims || (Bt[It].shims = []);
var Ct = Bt[It];
const Jc = [], Qc = function() {
  ve.removeEventListener("DOMContentLoaded", Qc), eo = 1, Jc.map((e) => e());
};
let eo = !1;
jt && (eo = (ve.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ve.readyState), eo || ve.addEventListener("DOMContentLoaded", Qc));
function xh(e) {
  jt && (eo ? setTimeout(e, 0) : Jc.push(e));
}
function gr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Yc(e) : "<".concat(t, " ").concat(gh(n), ">").concat(r.map(gr).join(""), "</").concat(t, ">");
}
function dl(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Jo = function(t, n, r, o) {
  var a = Object.keys(t), s = a.length, i = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[a[0]]) : (c = 0, u = r); c < s; c++)
    l = a[c], u = i(u, t[l], l, t);
  return u;
};
function Ch(e) {
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
function ps(e) {
  const t = Ch(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Oh(e, t) {
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
function ms(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = fl(t);
  typeof Ct.hooks.addPack == "function" && !r ? Ct.hooks.addPack(e, fl(t)) : Ct.styles[e] = G(G({}, Ct.styles[e] || {}), o), e === "fas" && ms("fa", t);
}
const {
  styles: cr,
  shims: Ah
} = Ct, Zc = Object.keys(oi), Eh = Zc.reduce((e, t) => (e[t] = Object.keys(oi[t]), e), {});
let ii = null, ed = {}, td = {}, nd = {}, rd = {}, od = {};
function Ph(e) {
  return ~dh.indexOf(e);
}
function kh(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !Ph(o) ? o : null;
}
const ad = () => {
  const e = (r) => Jo(cr, (o, a, s) => (o[s] = Jo(a, r, {}), o), {});
  ed = e((r, o, a) => (o[3] && (r[o[3]] = a), o[2] && o[2].filter((i) => typeof i == "number").forEach((i) => {
    r[i.toString(16)] = a;
  }), r)), td = e((r, o, a) => (r[a] = a, o[2] && o[2].filter((i) => typeof i == "string").forEach((i) => {
    r[i] = a;
  }), r)), od = e((r, o, a) => {
    const s = o[2];
    return r[a] = a, s.forEach((i) => {
      r[i] = a;
    }), r;
  });
  const t = "far" in cr || ee.autoFetchSvg, n = Jo(Ah, (r, o) => {
    const a = o[0];
    let s = o[1];
    const i = o[2];
    return s === "far" && !t && (s = "fas"), typeof a == "string" && (r.names[a] = {
      prefix: s,
      iconName: i
    }), typeof a == "number" && (r.unicodes[a.toString(16)] = {
      prefix: s,
      iconName: i
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  nd = n.names, rd = n.unicodes, ii = bo(ee.styleDefault, {
    family: ee.familyDefault
  });
};
mh((e) => {
  ii = bo(e.styleDefault, {
    family: ee.familyDefault
  });
});
ad();
function li(e, t) {
  return (ed[e] || {})[t];
}
function $h(e, t) {
  return (td[e] || {})[t];
}
function an(e, t) {
  return (od[e] || {})[t];
}
function sd(e) {
  return nd[e] || {
    prefix: null,
    iconName: null
  };
}
function Th(e) {
  const t = rd[e], n = li("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Jt() {
  return ii;
}
const id = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Dh(e) {
  let t = Le;
  const n = Zc.reduce((r, o) => (r[o] = "".concat(ee.cssPrefix, "-").concat(o), r), {});
  return qc.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => Eh[r].includes(o))) && (t = r);
  }), t;
}
function bo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Le
  } = t, r = sh[n][e];
  if (n === go && !e)
    return "fad";
  const o = ul[n][e] || ul[n][r], a = e in Ct.styles ? e : null;
  return o || a || null;
}
function Fh(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = kh(ee.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function pl(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function wo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = is.concat(Gm), a = pl(e.filter((d) => o.includes(d))), s = pl(e.filter((d) => !is.includes(d))), i = a.filter((d) => (r = d, !jc.includes(d))), [c = null] = i, l = Dh(a), u = G(G({}, Fh(s)), {}, {
    prefix: bo(c, {
      family: l
    })
  });
  return G(G(G({}, u), Bh({
    values: e,
    family: l,
    styles: cr,
    config: ee,
    canonical: u,
    givenPrefix: r
  })), Rh(n, r, u));
}
function Rh(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const a = t === "fa" ? sd(o) : {}, s = an(r, o);
  return o = a.iconName || s || o, r = a.prefix || r, r === "far" && !cr.far && cr.fas && !ee.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const _h = qc.filter((e) => e !== Le || e !== go), Ih = Object.keys(ss).filter((e) => e !== Le).map((e) => Object.keys(ss[e])).flat();
function Bh(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: a = {},
    config: s = {}
  } = e, i = n === go, c = t.includes("fa-duotone") || t.includes("fad"), l = s.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!i && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && _h.includes(n) && (Object.keys(a).find((y) => Ih.includes(y)) || s.autoFetchSvg)) {
    const y = jm.get(n).defaultShortPrefixId;
    r.prefix = y, r.iconName = an(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Jt() || "fas"), r;
}
class Lh {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((a) => {
      this.definitions[a] = G(G({}, this.definitions[a] || {}), o[a]), ms(a, o[a]);
      const s = oi[Le][a];
      s && ms(s, o[a]), ad();
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
        iconName: s,
        icon: i
      } = r[o], c = i[2];
      t[a] || (t[a] = {}), c.length > 0 && c.forEach((l) => {
        typeof l == "string" && (t[a][l] = i);
      }), t[a][s] = i;
    }), t;
  }
}
let ml = [], Rn = {};
const In = {}, Mh = Object.keys(In);
function Nh(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ml = e, Rn = {}, Object.keys(In).forEach((r) => {
    Mh.indexOf(r) === -1 && delete In[r];
  }), ml.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((a) => {
      typeof o[a] == "function" && (n[a] = o[a]), typeof o[a] == "object" && Object.keys(o[a]).forEach((s) => {
        n[a] || (n[a] = {}), n[a][s] = o[a][s];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((s) => {
        Rn[s] || (Rn[s] = []), Rn[s].push(a[s]);
      });
    }
    r.provides && r.provides(In);
  }), n;
}
function hs(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (Rn[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function pn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Rn[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Qt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return In[e] ? In[e].apply(null, t) : void 0;
}
function ys(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Jt();
  if (t)
    return t = an(n, t) || t, dl(ld.definitions, n, t) || dl(Ct.styles, n, t);
}
const ld = new Lh(), jh = () => {
  ee.autoReplaceSvg = !1, ee.observeMutations = !1, pn("noAuto");
}, qh = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return jt ? (pn("beforeI2svg", e), Qt("pseudoElements2svg", e), Qt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, xh(() => {
      zh({
        autoReplaceSvgRoot: t
      }), pn("watch", e);
    });
  }
}, Vh = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: an(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = bo(e[0]);
      return {
        prefix: n,
        iconName: an(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match(ih))) {
      const t = wo(e.split(" "), {
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
}, nt = {
  noAuto: jh,
  config: ee,
  dom: qh,
  parse: Vh,
  library: ld,
  findIconDefinition: ys,
  toHtml: gr
}, zh = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ve
  } = e;
  (Object.keys(Ct.styles).length > 0 || ee.autoFetchSvg) && jt && ee.autoReplaceSvg && nt.dom.i2svg({
    node: t
  });
};
function So(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => gr(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!jt) return;
      const n = ve.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Uh(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: a,
    transform: s
  } = e;
  if (si(s) && n.found && !r.found) {
    const {
      width: i,
      height: c
    } = n, l = {
      x: i / c / 2,
      y: 0.5
    };
    o.style = vo(G(G({}, a), {}, {
      "transform-origin": "".concat(l.x + s.x / 16, "em ").concat(l.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function Hh(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: a
  } = e;
  const s = a === !0 ? "".concat(t, "-").concat(ee.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: G(G({}, o), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function ui(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: o,
    transform: a,
    symbol: s,
    title: i,
    maskId: c,
    titleId: l,
    extra: u,
    watchable: d = !1
  } = e, {
    width: y,
    height: g
  } = n.found ? n : t, p = Hm.includes(r), h = [ee.replacementClass, o ? "".concat(ee.cssPrefix, "-").concat(o) : ""].filter((F) => u.classes.indexOf(F) === -1).filter((F) => F !== "" || !!F).concat(u.classes).join(" ");
  let f = {
    children: [],
    attributes: G(G({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: h,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(g)
    })
  };
  const v = p && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(y / g * 16 * 0.0625, "em")
  } : {};
  d && (f.attributes[fn] = ""), i && (f.children.push({
    tag: "title",
    attributes: {
      id: f.attributes["aria-labelledby"] || "title-".concat(l || ur())
    },
    children: [i]
  }), delete f.attributes.title);
  const w = G(G({}, f), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: c,
    transform: a,
    symbol: s,
    styles: G(G({}, v), u.styles)
  }), {
    children: O,
    attributes: P
  } = n.found && t.found ? Qt("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Qt("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = O, w.attributes = P, s ? Hh(w) : Uh(w);
}
function hl(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: a,
    extra: s,
    watchable: i = !1
  } = e, c = G(G(G({}, s.attributes), a ? {
    title: a
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  i && (c[fn] = "");
  const l = G({}, s.styles);
  si(o) && (l.transform = bh({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = vo(l);
  u.length > 0 && (c.style = u);
  const d = [];
  return d.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), a && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), d;
}
function Wh(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = G(G(G({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = vo(r.styles);
  a.length > 0 && (o.style = a);
  const s = [];
  return s.push({
    tag: "span",
    attributes: o,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
const {
  styles: Qo
} = Ct;
function gs(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(ee.cssPrefix, "-").concat(Yo.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Yo.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Yo.PRIMARY),
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
const Kh = {
  found: !1,
  width: 512,
  height: 512
};
function Gh(e, t) {
  !Hc && !ee.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function vs(e, t) {
  let n = t;
  return t === "fa" && ee.styleDefault !== null && (t = Jt()), new Promise((r, o) => {
    if (n === "fa") {
      const a = sd(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Qo[t] && Qo[t][e]) {
      const a = Qo[t][e];
      return r(gs(a));
    }
    Gh(e, t), r(G(G({}, Kh), {}, {
      icon: ee.showMissingIcons && e ? Qt("missingIconAbstract") || {} : {}
    }));
  });
}
const yl = () => {
}, bs = ee.measurePerformance && Dr && Dr.mark && Dr.measure ? Dr : {
  mark: yl,
  measure: yl
}, er = 'FA "6.7.2"', Yh = (e) => (bs.mark("".concat(er, " ").concat(e, " begins")), () => ud(e)), ud = (e) => {
  bs.mark("".concat(er, " ").concat(e, " ends")), bs.measure("".concat(er, " ").concat(e), "".concat(er, " ").concat(e, " begins"), "".concat(er, " ").concat(e, " ends"));
};
var ci = {
  begin: Yh,
  end: ud
};
const zr = () => {
};
function gl(e) {
  return typeof (e.getAttribute ? e.getAttribute(fn) : null) == "string";
}
function Xh(e) {
  const t = e.getAttribute ? e.getAttribute(ni) : null, n = e.getAttribute ? e.getAttribute(ri) : null;
  return t && n;
}
function Jh(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ee.replacementClass);
}
function Qh() {
  return ee.autoReplaceSvg === !0 ? Ur.replace : Ur[ee.autoReplaceSvg] || Ur.replace;
}
function Zh(e) {
  return ve.createElementNS("http://www.w3.org/2000/svg", e);
}
function ey(e) {
  return ve.createElement(e);
}
function cd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Zh : ey
  } = t;
  if (typeof e == "string")
    return ve.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(cd(a, {
      ceFn: n
    }));
  }), r;
}
function ty(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ur = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(cd(n), t);
      }), t.getAttribute(fn) === null && ee.keepOriginalSource) {
        let n = ve.createComment(ty(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ai(t).indexOf(ee.replacementClass))
      return Ur.replace(e);
    const r = new RegExp("".concat(ee.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((s, i) => (i === ee.replacementClass || i.match(r) ? s.toSvg.push(i) : s.toNode.push(i), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const o = n.map((a) => gr(a)).join(`
`);
    t.setAttribute(fn, ""), t.innerHTML = o;
  }
};
function vl(e) {
  e();
}
function dd(e, t) {
  const n = typeof t == "function" ? t : zr;
  if (e.length === 0)
    n();
  else {
    let r = vl;
    ee.mutateApproach === oh && (r = Xt.requestAnimationFrame || vl), r(() => {
      const o = Qh(), a = ci.begin("mutate");
      e.map(o), a(), n();
    });
  }
}
let di = !1;
function fd() {
  di = !0;
}
function ws() {
  di = !1;
}
let to = null;
function bl(e) {
  if (!al || !ee.observeMutations)
    return;
  const {
    treeCallback: t = zr,
    nodeCallback: n = zr,
    pseudoElementsCallback: r = zr,
    observeMutationsRoot: o = ve
  } = e;
  to = new al((a) => {
    if (di) return;
    const s = Jt();
    Vn(a).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !gl(i.addedNodes[0]) && (ee.searchPseudoElements && r(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && ee.searchPseudoElements && r(i.target.parentNode), i.type === "attributes" && gl(i.target) && ~ch.indexOf(i.attributeName))
        if (i.attributeName === "class" && Xh(i.target)) {
          const {
            prefix: c,
            iconName: l
          } = wo(ai(i.target));
          i.target.setAttribute(ni, c || s), l && i.target.setAttribute(ri, l);
        } else Jh(i.target) && n(i.target);
    });
  }), jt && to.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ny() {
  to && to.disconnect();
}
function ry(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const a = o.split(":"), s = a[0], i = a.slice(1);
    return s && i.length > 0 && (r[s] = i.join(":").trim()), r;
  }, {})), n;
}
function oy(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = wo(ai(e));
  return o.prefix || (o.prefix = Jt()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = $h(o.prefix, e.innerText) || li(o.prefix, ps(e.innerText))), !o.iconName && ee.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function ay(e) {
  const t = Vn(e.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return ee.autoA11y && (n ? t["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(r || ur()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function sy() {
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
function wl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = oy(e), a = ay(e), s = hs("parseNodeAttributes", {}, e);
  let i = t.styleParser ? ry(e) : [];
  return G({
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
      styles: i,
      attributes: a
    }
  }, s);
}
const {
  styles: iy
} = Ct;
function pd(e) {
  const t = ee.autoReplaceSvg === "nest" ? wl(e, {
    styleParser: !1
  }) : wl(e);
  return ~t.extra.classes.indexOf(Kc) ? Qt("generateLayersText", e, t) : Qt("generateSvgReplacementMutation", e, t);
}
function ly() {
  return [...Vm, ...is];
}
function Sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jt) return Promise.resolve();
  const n = ve.documentElement.classList, r = (u) => n.add("".concat(ll, "-").concat(u)), o = (u) => n.remove("".concat(ll, "-").concat(u)), a = ee.autoFetchSvg ? ly() : jc.concat(Object.keys(iy));
  a.includes("fa") || a.push("fa");
  const s = [".".concat(Kc, ":not([").concat(fn, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(fn, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let i = [];
  try {
    i = Vn(e.querySelectorAll(s));
  } catch {
  }
  if (i.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const c = ci.begin("onTree"), l = i.reduce((u, d) => {
    try {
      const y = pd(d);
      y && u.push(y);
    } catch (y) {
      Hc || y.name === "MissingIcon" && console.error(y);
    }
    return u;
  }, []);
  return new Promise((u, d) => {
    Promise.all(l).then((y) => {
      dd(y, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((y) => {
      c(), d(y);
    });
  });
}
function uy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  pd(e).then((n) => {
    n && dd([n], t);
  });
}
function cy(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ys(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : ys(o || {})), e(r, G(G({}, n), {}, {
      mask: o
    }));
  };
}
const dy = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = xt,
    symbol: r = !1,
    mask: o = null,
    maskId: a = null,
    title: s = null,
    titleId: i = null,
    classes: c = [],
    attributes: l = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: d,
    iconName: y,
    icon: g
  } = e;
  return So(G({
    type: "icon"
  }, e), () => (pn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ee.autoA11y && (s ? l["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(i || ur()) : (l["aria-hidden"] = "true", l.focusable = "false")), ui({
    icons: {
      main: gs(g),
      mask: o ? gs(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: y,
    transform: G(G({}, xt), n),
    symbol: r,
    title: s,
    maskId: a,
    titleId: i,
    extra: {
      attributes: l,
      styles: u,
      classes: c
    }
  })));
};
var fy = {
  mixout() {
    return {
      icon: cy(dy)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Sl, e.nodeCallback = uy, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ve,
        callback: r = () => {
        }
      } = t;
      return Sl(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: o,
        titleId: a,
        prefix: s,
        transform: i,
        symbol: c,
        mask: l,
        maskId: u,
        extra: d
      } = n;
      return new Promise((y, g) => {
        Promise.all([vs(r, s), l.iconName ? vs(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((p) => {
          let [h, f] = p;
          y([t, ui({
            icons: {
              main: h,
              mask: f
            },
            prefix: s,
            iconName: r,
            transform: i,
            symbol: c,
            maskId: u,
            title: o,
            titleId: a,
            extra: d,
            watchable: !0
          })]);
        }).catch(g);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: o,
        transform: a,
        styles: s
      } = t;
      const i = vo(s);
      i.length > 0 && (r.style = i);
      let c;
      return si(a) && (c = Qt("generateAbstractTransformGrouping", {
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
}, py = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return So({
          type: "layer"
        }, () => {
          pn("beforeDOMElementCreation", {
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
              class: ["".concat(ee.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, my = {
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
        return So({
          type: "counter",
          content: e
        }, () => (pn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Wh({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: a,
            classes: ["".concat(ee.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, hy = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = xt,
          title: r = null,
          classes: o = [],
          attributes: a = {},
          styles: s = {}
        } = t;
        return So({
          type: "text",
          content: e
        }, () => (pn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), hl({
          content: e,
          transform: G(G({}, xt), n),
          title: r,
          extra: {
            attributes: a,
            styles: s,
            classes: ["".concat(ee.cssPrefix, "-layers-text"), ...o]
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
      let s = null, i = null;
      if (Mc) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        s = l.width / c, i = l.height / c;
      }
      return ee.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, hl({
        content: t.innerHTML,
        width: s,
        height: i,
        transform: o,
        title: r,
        extra: a,
        watchable: !0
      })]);
    };
  }
};
const yy = new RegExp('"', "ug"), xl = [1105920, 1112319], Cl = G(G(G(G({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Nm), nh), Ym), Ss = Object.keys(Cl).reduce((e, t) => (e[t.toLowerCase()] = Cl[t], e), {}), gy = Object.keys(Ss).reduce((e, t) => {
  const n = Ss[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function vy(e) {
  const t = e.replace(yy, ""), n = Oh(t, 0), r = n >= xl[0] && n <= xl[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ps(o ? t[0] : t),
    isSecondary: r || o
  };
}
function by(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (Ss[n] || {})[o] || gy[n];
}
function Ol(e, t) {
  const n = "".concat(rh).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Vn(e.children).filter((y) => y.getAttribute(us) === t)[0], i = Xt.getComputedStyle(e, t), c = i.getPropertyValue("font-family"), l = c.match(lh), u = i.getPropertyValue("font-weight"), d = i.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && d !== "none" && d !== "") {
      const y = i.getPropertyValue("content");
      let g = by(c, u);
      const {
        value: p,
        isSecondary: h
      } = vy(y), f = l[0].startsWith("FontAwesome");
      let v = li(g, p), w = v;
      if (f) {
        const O = Th(p);
        O.iconName && O.prefix && (v = O.iconName, g = O.prefix);
      }
      if (v && !h && (!s || s.getAttribute(ni) !== g || s.getAttribute(ri) !== w)) {
        e.setAttribute(n, w), s && e.removeChild(s);
        const O = sy(), {
          extra: P
        } = O;
        P.attributes[us] = t, vs(v, g).then((F) => {
          const H = ui(G(G({}, O), {}, {
            icons: {
              main: F,
              mask: id()
            },
            prefix: g,
            iconName: w,
            extra: P,
            watchable: !0
          })), A = ve.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(A, e.firstChild) : e.appendChild(A), A.outerHTML = H.map((W) => gr(W)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function wy(e) {
  return Promise.all([Ol(e, "::before"), Ol(e, "::after")]);
}
function Sy(e) {
  return e.parentNode !== document.head && !~ah.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(us) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Al(e) {
  if (jt)
    return new Promise((t, n) => {
      const r = Vn(e.querySelectorAll("*")).filter(Sy).map(wy), o = ci.begin("searchPseudoElements");
      fd(), Promise.all(r).then(() => {
        o(), ws(), t();
      }).catch(() => {
        o(), ws(), n();
      });
    });
}
var xy = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Al, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ve
      } = t;
      ee.searchPseudoElements && Al(n);
    };
  }
};
let El = !1;
var Cy = {
  mixout() {
    return {
      dom: {
        unwatch() {
          fd(), El = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        bl(hs("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ny();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        El ? ws() : bl(hs("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Pl = (e) => {
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
    let s = o.slice(1).join("-");
    if (a && s === "h")
      return n.flipX = !0, n;
    if (a && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (a) {
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
  }, t);
};
var Oy = {
  mixout() {
    return {
      parse: {
        transform: (e) => Pl(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Pl(n)), e;
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
      const s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, i = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), l = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(i, " ").concat(c, " ").concat(l)
      }, d = {
        transform: "translate(".concat(a / 2 * -1, " -256)")
      }, y = {
        outer: s,
        inner: u,
        path: d
      };
      return {
        tag: "g",
        attributes: G({}, y.outer),
        children: [{
          tag: "g",
          attributes: G({}, y.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: G(G({}, n.icon.attributes), y.path)
          }]
        }]
      };
    };
  }
};
const Zo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function kl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ay(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ey = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? wo(n.split(" ").map((o) => o.trim())) : id();
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
        maskId: s,
        transform: i
      } = t;
      const {
        width: c,
        icon: l
      } = o, {
        width: u,
        icon: d
      } = a, y = vh({
        transform: i,
        containerWidth: u,
        iconWidth: c
      }), g = {
        tag: "rect",
        attributes: G(G({}, Zo), {}, {
          fill: "white"
        })
      }, p = l.children ? {
        children: l.children.map(kl)
      } : {}, h = {
        tag: "g",
        attributes: G({}, y.inner),
        children: [kl(G({
          tag: l.tag,
          attributes: G(G({}, l.attributes), y.path)
        }, p))]
      }, f = {
        tag: "g",
        attributes: G({}, y.outer),
        children: [h]
      }, v = "mask-".concat(s || ur()), w = "clip-".concat(s || ur()), O = {
        tag: "mask",
        attributes: G(G({}, Zo), {}, {
          id: v,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [g, f]
      }, P = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: Ay(d)
        }, O]
      };
      return n.push(P, {
        tag: "rect",
        attributes: G({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(v, ")")
        }, Zo)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Py = {
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
        attributes: G(G({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = G(G({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: G(G({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: G(G({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: G(G({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: G(G({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: G(G({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: G(G({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: G(G({}, a), {}, {
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
}, ky = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, $y = [Sh, fy, py, my, hy, xy, Cy, Oy, Ey, Py, ky];
Nh($y, {
  mixoutsTo: nt
});
nt.noAuto;
const md = nt.config, xo = nt.library;
nt.dom;
const no = nt.parse;
nt.findIconDefinition;
nt.toHtml;
const Ty = nt.icon;
nt.layer;
const Dy = nt.text;
nt.counter;
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
function ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $l(Object(n), !0).forEach(function(r) {
      ze(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $l(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Fy(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ry(e) {
  var t = Fy(e, "string");
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
  return t = Ry(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _y(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Iy(e, t) {
  if (e == null) return {};
  var n = _y(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function xs(e) {
  return By(e) || Ly(e) || My(e) || Ny();
}
function By(e) {
  if (Array.isArray(e)) return Cs(e);
}
function Ly(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function My(e, t) {
  if (e) {
    if (typeof e == "string") return Cs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Cs(e, t);
  }
}
function Cs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ny() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var jy = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hd = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(v, w, O) {
      if (!l(w) || d(w) || y(w) || g(w) || c(w))
        return w;
      var P, F = 0, H = 0;
      if (u(w))
        for (P = [], H = w.length; F < H; F++)
          P.push(n(v, w[F], O));
      else {
        P = {};
        for (var A in w)
          Object.prototype.hasOwnProperty.call(w, A) && (P[v(A, O)] = n(v, w[A], O));
      }
      return P;
    }, r = function(v, w) {
      w = w || {};
      var O = w.separator || "_", P = w.split || /(?=[A-Z])/;
      return v.split(P).join(O);
    }, o = function(v) {
      return p(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(w, O) {
        return O ? O.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, a = function(v) {
      var w = o(v);
      return w.substr(0, 1).toUpperCase() + w.substr(1);
    }, s = function(v, w) {
      return r(v, w).toLowerCase();
    }, i = Object.prototype.toString, c = function(v) {
      return typeof v == "function";
    }, l = function(v) {
      return v === Object(v);
    }, u = function(v) {
      return i.call(v) == "[object Array]";
    }, d = function(v) {
      return i.call(v) == "[object Date]";
    }, y = function(v) {
      return i.call(v) == "[object RegExp]";
    }, g = function(v) {
      return i.call(v) == "[object Boolean]";
    }, p = function(v) {
      return v = v - 0, v === v;
    }, h = function(v, w) {
      var O = w && "process" in w ? w.process : w;
      return typeof O != "function" ? v : function(P, F) {
        return O(P, v, F);
      };
    }, f = {
      camelize: o,
      decamelize: s,
      pascalize: a,
      depascalize: s,
      camelizeKeys: function(v, w) {
        return n(h(o, w), v);
      },
      decamelizeKeys: function(v, w) {
        return n(h(s, w), v, w);
      },
      pascalizeKeys: function(v, w) {
        return n(h(a, w), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = f : t.humps = f;
  })(jy);
})(hd);
var qy = hd.exports, Vy = ["class", "style"];
function zy(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = qy.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[o] = a, t;
  }, {});
}
function Uy(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function fi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(c) {
    return fi(c);
  }), o = Object.keys(e.attributes || {}).reduce(function(c, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        c.class = Uy(u);
        break;
      case "style":
        c.style = zy(u);
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
  var a = n.style, s = a === void 0 ? {} : a, i = Iy(n, Vy);
  return qe(e.tag, ft(ft(ft({}, t), {}, {
    class: o.class,
    style: ft(ft({}, o.style), s)
  }, o.attrs), i), r);
}
var yd = !1;
try {
  yd = process.env.NODE_ENV === "production";
} catch {
}
function Hy() {
  if (!yd && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function sr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ze({}, e, t) : {};
}
function Wy(e) {
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
function Tl(e) {
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
var Ee = z({
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
    var r = n.attrs, o = T(function() {
      return Tl(t.icon);
    }), a = T(function() {
      return sr("classes", Wy(t));
    }), s = T(function() {
      return sr("transform", typeof t.transform == "string" ? no.transform(t.transform) : t.transform);
    }), i = T(function() {
      return sr("mask", Tl(t.mask));
    }), c = T(function() {
      return Ty(o.value, ft(ft(ft(ft({}, a.value), s.value), i.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    ne(c, function(u) {
      if (!u)
        return Hy("Could not find one or more icon(s)", o.value, i.value);
    }, {
      immediate: !0
    });
    var l = T(function() {
      return c.value ? fi(c.value.abstract[0], {}, r) : null;
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
  setup: function(t, n) {
    var r = n.slots, o = md.familyPrefix, a = T(function() {
      return ["".concat(o, "-layers")].concat(xs(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return qe("div", {
        class: a.value
      }, r.default ? r.default() : []);
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
  setup: function(t, n) {
    var r = n.attrs, o = md.familyPrefix, a = T(function() {
      return sr("classes", [].concat(xs(t.counter ? ["".concat(o, "-layers-counter")] : []), xs(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), s = T(function() {
      return sr("transform", typeof t.transform == "string" ? no.transform(t.transform) : t.transform);
    }), i = T(function() {
      var l = Dy(t.value.toString(), ft(ft({}, s.value), a.value)), u = l.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), c = T(function() {
      return fi(i.value, {}, r);
    });
    return function() {
      return c.value;
    };
  }
});
const Ky = { class: "py-ui px-ui gap-ui-half flex flex-col rounded bg-white text-center" }, Gy = { class: "whitespace-pre-line text-gray-600" }, Yy = /* @__PURE__ */ z({
  __name: "UnderConstruction",
  props: {
    full: { type: Boolean, default: !1 },
    info: { default: `Section under construction.
Please come back later.` }
  },
  setup(e) {
    return (t, n) => (S(), k("div", {
      class: Q(["bg-stripes p-ui flex w-full items-center justify-center", { grow: t.full }])
    }, [
      D("div", Ky, [
        J(m(Ee), {
          icon: m(gm),
          class: "text-primary text-4xl"
        }, null, 8, ["icon"]),
        n[0] || (n[0] = D("h1", { class: "text-2xl font-bold" }, "Under Construction", -1)),
        D("p", Gy, Z(t.info), 1)
      ])
    ], 2));
  }
}), gd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, VO = /* @__PURE__ */ gd(Yy, [["__scopeId", "data-v-360f3e83"]]), Xy = { class: "flex items-center" }, Jy = {
  key: 1,
  class: "mr-1"
}, Qy = ["id", "value", "disabled", "required", "name"], Zy = {
  key: 3,
  class: "ml-1"
}, eg = /* @__PURE__ */ z({
  __name: "Checkbox",
  props: /* @__PURE__ */ mt({
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
  emits: /* @__PURE__ */ mt(["update:checked", "update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = n, o = e;
    function a(f) {
      return f.split("_").join(" ").split(" ").map((v) => v[0].toUpperCase() + v.slice(1)).join(" ");
    }
    const s = qn(e, "modelValue"), i = N(!1), c = N(), l = N(), u = N(!1);
    pe(() => {
      var f;
      i.value = !o.form, c.value = i.value ? s.value : ((f = o.form) == null ? void 0 : f[o.field]) ?? o.checked;
    }), ne(
      () => c.value,
      (f, v) => {
        if (f !== v) {
          if (i.value ? s.value = f : o.form && o.field && (o.form[o.field] = f), l.value = v, r("update:modelValue", f), r("update:checked", f), u.value) {
            u.value = !1;
            return;
          }
          r("changed", { value: f, old_value: v });
        }
      }
    ), ne(
      () => o.field && o.form ? o.form[o.field] : null,
      (f) => {
        c.value = i.value ? s.value : f;
      },
      { deep: !0 }
    ), ne(
      () => s.value,
      (f) => {
        c.value = f;
      }
    ), ne(
      () => o.checked,
      (f) => {
        !o.form && !s.value && (c.value = f);
      }
    );
    const d = T(() => o.label || (o.field ? a(o.field) : "")), y = T(() => {
      var f, v;
      return o.error || ((v = (f = o.form) == null ? void 0 : f.errors) == null ? void 0 : v[o.field]);
    }), g = T(() => o.id || o.field || `checkbox-${Math.random().toString(36).substr(2, 9)}`);
    return t({
      setValueSilently: (f) => {
        c.value = f, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, v) => {
      var w, O;
      return S(), k("div", {
        class: Q(f.noLabel ? "mb-2" : "mb-4")
      }, [
        !f.noLabel && f.label ? (S(), U(m(zn), {
          key: 0,
          customClass: f.labelCustomClass,
          for: g.value,
          value: d.value,
          sublabel: f.sublabel,
          required: f.required,
          tooltip: f.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : Y("", !0),
        D("label", Xy, [
          (w = f.$slots) != null && w.leftDescription ? j(f.$slots, "leftDescription", { key: 0 }) : f.leftDescription ? (S(), k("span", Jy, Z(f.leftDescription === !0 ? "Disable" : f.leftDescription), 1)) : Y("", !0),
          Ze(D("input", {
            type: "checkbox",
            id: g.value,
            value: c.value,
            "onUpdate:modelValue": v[0] || (v[0] = (P) => c.value = P),
            disabled: f.disabled,
            required: f.required,
            name: f.name || f.field,
            class: Q(["text-accent-600 focus:ring-accent-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none", { [f.customClass]: f.customClass }])
          }, null, 10, Qy), [
            [Yp, c.value]
          ]),
          (O = f.$slots) != null && O.rightDescription ? j(f.$slots, "rightDescription", { key: 2 }) : f.rightDescription ? (S(), k("span", Zy, Z(f.rightDescription === !0 ? "Enable" : f.rightDescription), 1)) : Y("", !0)
        ]),
        y.value ? (S(), U(m(nn), {
          key: 1,
          message: y.value,
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
}), Rr = /* @__PURE__ */ z({
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
    return (t, n) => (S(), k("div", {
      class: Q(t.noLabel ? "mb-2" : "mb-4")
    }, [
      t.noLabel ? Y("", !0) : (S(), U(m(zn), {
        key: 0,
        customClass: t.labelCustomClass,
        for: t.field,
        value: t.computedLabel,
        sublabel: t.sublabel,
        required: t.required,
        tooltip: t.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
      j(t.$slots, "default"),
      t.hasFormErrors ? (S(), U(m(nn), {
        key: 1,
        message: t.formError,
        class: "mt-2"
      }, null, 8, ["message"])) : Y("", !0)
    ], 2));
  }
}), tg = /* @__PURE__ */ z({
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
    inputCustomClass: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = T({
      get: () => n.modelValue,
      set: (a) => r("update:modelValue", a)
    });
    return (a, s) => (S(), U(m(pi), {
      id: a.field,
      type: a.type,
      class: Q({ [a.inputCustomClass]: !!a.inputCustomClass }),
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (i) => o.value = i),
      required: a.required,
      disabled: a.disabled,
      autocomplete: a.computedAutocomplete,
      min: a.min,
      max: a.max,
      step: a.step,
      placeholder: a.placeholder,
      autofocus: a.autofocus,
      pattern: a.pattern,
      name: a.computedName
    }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name"]));
  }
}), ng = ["id", "required", "disabled", "name"], rg = /* @__PURE__ */ z({
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
    const n = e, r = t, o = T({
      get: () => n.modelValue,
      set: (a) => r("update:modelValue", a)
    });
    return (a, s) => Ze((S(), k("select", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => o.value = i),
      id: a.field,
      required: a.required,
      disabled: a.disabled,
      name: a.computedName,
      class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [a.inputCustomClass]: !!a.inputCustomClass }])
    }, [
      j(a.$slots, "default")
    ], 10, ng)), [
      [Cc, o.value]
    ]);
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const og = {
  prefix: "far",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"]
}, ag = {
  prefix: "far",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]
}, sg = { class: "relative flex w-full" }, ig = /* @__PURE__ */ z({
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
    const n = e, r = t, o = T({
      get: () => n.modelValue,
      set: (i) => r("update:modelValue", i)
    }), a = T(() => !n.hidePasswordToggler), s = () => {
      r("toggle-password");
    };
    return (i, c) => (S(), k("div", sg, [
      J(m(pi), {
        id: i.field,
        type: i.displayType,
        class: Q({ [i.inputCustomClass]: !!i.inputCustomClass }),
        modelValue: o.value,
        "onUpdate:modelValue": c[0] || (c[0] = (l) => o.value = l),
        required: i.required,
        disabled: i.disabled,
        autocomplete: i.computedAutocomplete,
        placeholder: i.placeholder,
        autofocus: i.autofocus,
        pattern: i.pattern,
        name: i.computedName
      }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "placeholder", "autofocus", "pattern", "name"]),
      a.value ? (S(), k("div", {
        key: 0,
        onClick: s,
        class: Q(["absolute top-1/2 -translate-y-1/2 right-1 z-2 flex size-8 rounded-lg hover:bg-primary-100 cursor-pointer items-center justify-center transition-all text-sm leading-normal text-gray-600", { "bg-primary-50": i.displayType !== "password" }])
      }, [
        J(m(Ee), {
          icon: i.displayType === "password" ? m(ag) : m(og)
        }, null, 8, ["icon"])
      ], 2)) : Y("", !0)
    ]));
  }
}), lg = { class: "relative flex w-full max-w-full items-stretch" }, ug = ["href"], cg = /* @__PURE__ */ z({
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
    whatsApp: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = T({
      get: () => n.modelValue,
      set: (s) => r("update:modelValue", s)
    }), a = T(() => ({
      "rounded-l-none shadow-none": n.addon,
      "rounded-r-none": n.submitBtn || n.whatsApp,
      [n.inputCustomClass]: !!n.inputCustomClass
    }));
    return (s, i) => {
      var c;
      return S(), k("div", lg, [
        s.addon ? (S(), k("span", {
          key: 0,
          class: Q(["flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !s.disabled }])
        }, Z(s.addon), 3)) : Y("", !0),
        J(m(pi), {
          id: s.field,
          type: s.type,
          class: Q(a.value),
          modelValue: o.value,
          "onUpdate:modelValue": i[0] || (i[0] = (l) => o.value = l),
          required: s.required,
          disabled: s.disabled,
          autocomplete: s.computedAutocomplete,
          min: s.min,
          max: s.max,
          step: s.step,
          placeholder: s.placeholder,
          autofocus: s.autofocus,
          pattern: s.pattern,
          name: s.computedName
        }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name"]),
        s.form ? (S(), k(re, { key: 1 }, [
          s.submitBtn ? (S(), U(m(mo), {
            key: 0,
            form: s.form,
            class: Q(["z-2 inline-block rounded-l-none", s.buttonCustomClass]),
            id: `submit-button-${s.field}`
          }, {
            default: _(() => [
              ce(Z(s.submitBtn), 1)
            ]),
            _: 1
          }, 8, ["form", "class", "id"])) : Y("", !0),
          (c = s.$slots) != null && c.submit ? (S(), U(m(mo), {
            key: 1,
            form: s.form,
            class: Q(["z-2 inline-block rounded-l-none", s.buttonCustomClass]),
            id: "button-input"
          }, {
            default: _(() => [
              j(s.$slots, "submit")
            ]),
            _: 3
          }, 8, ["form", "class"])) : Y("", !0)
        ], 64)) : Y("", !0),
        s.whatsApp ? (S(), k("a", {
          key: 2,
          class: Q(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", s.buttonCustomClass]),
          href: s.whatsApp,
          target: "_blank"
        }, [
          J(m(Ee), {
            icon: "fab fa-whatsapp",
            size: "2xl"
          })
        ], 10, ug)) : Y("", !0)
      ]);
    };
  }
});
function dg(e, t, n, r) {
  const o = N(), a = N(), s = N(!1), i = N(!1);
  return pe(() => {
    s.value = !t, o.value = s.value ? n.value : t && e ? t[e] : null;
  }), ne(
    () => o.value,
    (u, d) => {
      if (u === d) return;
      if (s.value ? n.value = u : t && e && (t[e] = u), a.value = d, r("update:modelValue", u), i.value) {
        i.value = !1;
        return;
      }
      r("changed", {
        value: u,
        old_value: d
      });
    }
  ), ne(
    () => e && t ? t[e] : null,
    (u) => {
      o.value = s.value ? n.value : u;
    },
    { deep: !0 }
  ), ne(
    () => n.value,
    (u) => {
      o.value = u;
    }
  ), {
    value: o,
    prevValue: a,
    noForm: s,
    setValueSilently: (u) => {
      i.value = !0, o.value = u;
    },
    getPreviousValue: () => a.value
  };
}
function fg(e = "password") {
  const t = N(e);
  return {
    displayType: t,
    togglePassword: () => {
      t.value = t.value === "password" ? "text" : "password";
    }
  };
}
function pg(e, t, n) {
  const r = T(() => !!(n || e != null && e.errors && t && e.errors[t])), o = T(() => n || (e != null && e.errors && t && e.errors[t] ? e.errors[t] : null));
  return {
    hasFormErrors: r,
    formError: o,
    updateFormValue: (s) => {
      e && t && (e[t] = s);
    }
  };
}
function mg() {
  const e = (i) => i ? i.split("_").join(" ").split(" ").map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(" ") : "";
  return {
    ucwords: e,
    getComputedLabel: (i, c) => T(() => i || (c ? e(c) : "")),
    getComputedName: (i, c) => T(() => i ?? c ?? ""),
    getComputedAutocomplete: (i, c) => T(() => i ?? c ?? ""),
    isDelegatedType: (i) => ["textarea", "switch", "checkbox"].includes(i || ""),
    isPasswordType: (i) => i === "password",
    isSelectType: (i) => i === "select"
  };
}
const hg = /* @__PURE__ */ z({
  __name: "Input",
  props: /* @__PURE__ */ mt({
    min: {},
    max: {},
    step: {},
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
  emits: /* @__PURE__ */ mt(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = qn(e, "modelValue"), {
      getComputedLabel: s,
      getComputedName: i,
      getComputedAutocomplete: c,
      isPasswordType: l,
      isSelectType: u
    } = mg(), {
      value: d,
      setValueSilently: y,
      getPreviousValue: g
    } = dg(r.field, r.form, a, o), { displayType: p, togglePassword: h } = fg(r.type), { hasFormErrors: f, formError: v } = pg(r.form, r.field, r.error), w = s(r.label, r.field), O = i(r.name, r.field), P = c(r.autocomplete, r.field), F = T(() => r.addon || r.submitBtn || r.whatsApp), H = T(() => r.type === "textarea" ? "textarea" : r.type === "switch" ? "switch" : r.type === "checkbox" ? "checkbox" : r.type === "select" ? "select" : l(r.type) ? "password" : F.value ? "with-actions" : "base");
    return t({
      togglePassword: h,
      setValueSilently: y,
      getPreviousValue: g
    }), (A, W) => {
      var B, $, V, b, E;
      return H.value === "textarea" ? (S(), U(m(Ag), {
        key: 0,
        form: A.form,
        field: A.field,
        label: A.label,
        required: A.required,
        disabled: A.disabled,
        addon: A.addon,
        placeholder: A.placeholder,
        "no-label": A.noLabel,
        autofocus: A.autofocus,
        rows: A.rows,
        name: m(O),
        sublabel: A.sublabel,
        "submit-btn": A.submitBtn,
        "whats-app": A.whatsApp,
        autocomplete: m(P),
        tooltip: A.tooltip,
        "custom-class": A.inputCustomClass,
        "label-custom-class": A.labelCustomClass,
        "button-custom-class": A.buttonCustomClass,
        error: A.error,
        modelValue: m(d),
        "onUpdate:modelValue": W[0] || (W[0] = (C) => Wt(d) ? d.value = C : null),
        onChanged: W[1] || (W[1] = (C) => o("changed", C))
      }, Tr({ _: 2 }, [
        (B = A.$slots) != null && B.submit ? {
          name: "submit",
          fn: _(() => [
            j(A.$slots, "submit")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "addon", "placeholder", "no-label", "autofocus", "rows", "name", "sublabel", "submit-btn", "whats-app", "autocomplete", "tooltip", "custom-class", "label-custom-class", "button-custom-class", "error", "modelValue"])) : H.value === "switch" ? (S(), U(m(Rb), {
        key: 1,
        form: A.form,
        field: A.field,
        label: A.label,
        required: A.required,
        disabled: A.disabled,
        "no-label": A.noLabel,
        name: m(O),
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        "left-description": A.leftDescription,
        "right-description": A.rightDescription,
        "custom-class": A.inputCustomClass,
        "label-custom-class": A.labelCustomClass,
        error: A.error,
        modelValue: m(d),
        "onUpdate:modelValue": W[2] || (W[2] = (C) => Wt(d) ? d.value = C : null),
        onChanged: W[3] || (W[3] = (C) => o("changed", C))
      }, Tr({ _: 2 }, [
        ($ = A.$slots) != null && $.leftDescription ? {
          name: "leftDescription",
          fn: _(() => [
            j(A.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (V = A.$slots) != null && V.rightDescription ? {
          name: "rightDescription",
          fn: _(() => [
            j(A.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : H.value === "checkbox" ? (S(), U(m(eg), {
        key: 2,
        form: A.form,
        field: A.field,
        label: A.label,
        required: A.required,
        disabled: A.disabled,
        "no-label": A.noLabel,
        name: m(O),
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        "left-description": A.leftDescription,
        "right-description": A.rightDescription,
        "custom-class": A.inputCustomClass,
        "label-custom-class": A.labelCustomClass,
        error: A.error,
        modelValue: m(d),
        "onUpdate:modelValue": W[4] || (W[4] = (C) => Wt(d) ? d.value = C : null),
        onChanged: W[5] || (W[5] = (C) => o("changed", C))
      }, Tr({ _: 2 }, [
        (b = A.$slots) != null && b.leftDescription ? {
          name: "leftDescription",
          fn: _(() => [
            j(A.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (E = A.$slots) != null && E.rightDescription ? {
          name: "rightDescription",
          fn: _(() => [
            j(A.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : H.value === "select" ? (S(), U(m(Rr), {
        key: 3,
        field: A.field,
        label: A.label,
        "no-label": A.noLabel,
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        required: A.required,
        "label-custom-class": A.labelCustomClass,
        "computed-label": m(w),
        "has-form-errors": m(f),
        "form-error": m(v)
      }, {
        default: _(() => [
          J(m(rg), {
            field: A.field,
            name: A.name,
            required: A.required,
            disabled: A.disabled,
            "input-custom-class": A.inputCustomClass,
            "computed-name": m(O),
            modelValue: m(d),
            "onUpdate:modelValue": W[6] || (W[6] = (C) => Wt(d) ? d.value = C : null)
          }, {
            default: _(() => [
              j(A.$slots, "default")
            ]),
            _: 3
          }, 8, ["field", "name", "required", "disabled", "input-custom-class", "computed-name", "modelValue"])
        ]),
        _: 3
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : H.value === "password" ? (S(), U(m(Rr), {
        key: 4,
        field: A.field,
        label: A.label,
        "no-label": A.noLabel,
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        required: A.required,
        "label-custom-class": A.labelCustomClass,
        "computed-label": m(w),
        "has-form-errors": m(f),
        "form-error": m(v)
      }, {
        default: _(() => [
          J(m(ig), {
            field: A.field,
            name: A.name,
            required: A.required,
            disabled: A.disabled,
            placeholder: A.placeholder,
            autofocus: A.autofocus,
            pattern: A.pattern,
            autocomplete: A.autocomplete,
            "hide-password-toggler": A.hidePasswordToggler,
            "input-custom-class": A.inputCustomClass,
            "computed-name": m(O),
            "computed-autocomplete": m(P),
            "display-type": m(p),
            modelValue: m(d),
            "onUpdate:modelValue": W[7] || (W[7] = (C) => Wt(d) ? d.value = C : null),
            onTogglePassword: m(h)
          }, null, 8, ["field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "autocomplete", "hide-password-toggler", "input-custom-class", "computed-name", "computed-autocomplete", "display-type", "modelValue", "onTogglePassword"])
        ]),
        _: 1
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : H.value === "with-actions" ? (S(), U(m(Rr), {
        key: 5,
        field: A.field,
        label: A.label,
        "no-label": A.noLabel,
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        required: A.required,
        "label-custom-class": A.labelCustomClass,
        "computed-label": m(w),
        "has-form-errors": m(f),
        "form-error": m(v)
      }, {
        default: _(() => {
          var C;
          return [
            J(m(cg), {
              type: A.type,
              field: A.field,
              name: A.name,
              required: A.required,
              disabled: A.disabled,
              placeholder: A.placeholder,
              autofocus: A.autofocus,
              pattern: A.pattern,
              min: A.min,
              max: A.max,
              step: A.step,
              autocomplete: A.autocomplete,
              "input-custom-class": A.inputCustomClass,
              "button-custom-class": A.buttonCustomClass,
              addon: A.addon,
              "submit-btn": A.submitBtn,
              "whats-app": A.whatsApp,
              "computed-name": m(O),
              "computed-autocomplete": m(P),
              form: A.form,
              modelValue: m(d),
              "onUpdate:modelValue": W[8] || (W[8] = (x) => Wt(d) ? d.value = x : null)
            }, Tr({ _: 2 }, [
              (C = A.$slots) != null && C.submit ? {
                name: "submit",
                fn: _(() => [
                  j(A.$slots, "submit")
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["type", "field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "min", "max", "step", "autocomplete", "input-custom-class", "button-custom-class", "addon", "submit-btn", "whats-app", "computed-name", "computed-autocomplete", "form", "modelValue"])
          ];
        }),
        _: 3
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : (S(), U(m(Rr), {
        key: 6,
        field: A.field,
        label: A.label,
        "no-label": A.noLabel,
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        required: A.required,
        "label-custom-class": A.labelCustomClass,
        "computed-label": m(w),
        "has-form-errors": m(f),
        "form-error": m(v)
      }, {
        default: _(() => [
          J(m(tg), {
            type: A.type,
            field: A.field,
            name: A.name,
            required: A.required,
            disabled: A.disabled,
            placeholder: A.placeholder,
            autofocus: A.autofocus,
            pattern: A.pattern,
            min: A.min,
            max: A.max,
            step: A.step,
            autocomplete: A.autocomplete,
            "input-custom-class": A.inputCustomClass,
            "computed-name": m(O),
            "computed-autocomplete": m(P),
            modelValue: m(d),
            "onUpdate:modelValue": W[9] || (W[9] = (C) => Wt(d) ? d.value = C : null)
          }, null, 8, ["type", "field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "min", "max", "step", "autocomplete", "input-custom-class", "computed-name", "computed-autocomplete", "modelValue"])
        ]),
        _: 1
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"]));
    };
  }
}), yg = { class: "text-sm text-red-600" }, nn = /* @__PURE__ */ z({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(e) {
    return (t, n) => Ze((S(), k("div", null, [
      D("p", yg, Z(t.message), 1)
    ], 512)), [
      [un, t.message]
    ]);
  }
}), gg = { key: 0 }, vg = { key: 1 }, bg = {
  key: 3,
  class: "ml-2 text-xs text-gray-500"
}, wg = {
  key: 4,
  class: "ml-1 text-red-500"
}, zn = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass", "tooltip"],
  setup(e) {
    return xo.add(tl), (t, n) => (S(), k("label", {
      class: Q(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (S(), k("span", gg, Z(e.value), 1)) : (S(), k("span", vg, [
        j(t.$slots, "default")
      ])),
      e.tooltip ? (S(), U(m(sO), {
        key: 2,
        content: e.tooltip,
        class: "ml-1 inline-block"
      }, {
        default: _(() => [
          J(m(Ee), {
            icon: m(tl),
            class: "mx-1 cursor-help"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["content"])) : Y("", !0),
      e.sublabel ? (S(), k("span", bg, Z(e.sublabel), 1)) : Y("", !0),
      e.required ? (S(), k("span", wg, "*")) : Y("", !0)
    ], 2));
  }
}, Sg = ["value"], pi = /* @__PURE__ */ z({
  __name: "TextInput",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = N(null), a = (s) => {
      const i = s.target;
      r("update:modelValue", i.value);
    };
    return pe(() => {
      var s;
      (s = o.value) != null && s.hasAttribute("autofocus") && o.value.focus();
    }), t({
      /** Focus the input element */
      focus: () => {
        var s;
        return (s = o.value) == null ? void 0 : s.focus();
      }
    }), (s, i) => (S(), k("input", {
      class: "focusable focus:border-primary-500 focus:ring-primary-500 relative m-0 block w-full flex-auto rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
      value: s.modelValue,
      onInput: a,
      ref_key: "input",
      ref: o
    }, null, 40, Sg));
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const vd = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, xg = { class: "relative flex w-full max-w-full items-stretch" }, Cg = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], Og = ["href"], Ag = /* @__PURE__ */ z({
  __name: "Textarea",
  props: /* @__PURE__ */ mt({
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
  emits: /* @__PURE__ */ mt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    function a(h) {
      return h.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = N(!1), i = qn(e, "modelValue"), c = N(), l = N(), u = N(!1);
    pe(() => {
      var h;
      s.value = !r.form, c.value = s.value ? i.value : (h = r.form) == null ? void 0 : h[r.field];
    }), ne(
      () => c.value,
      (h, f) => {
        if (h !== f) {
          if (s.value ? i.value = h : r.form && r.field && (r.form[r.field] = h), l.value = f, o("update:modelValue", h), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: h, old_value: f });
        }
      }
    ), ne(
      () => r.field && r.form ? r.form[r.field] : null,
      (h) => {
        c.value = s.value ? i.value : h;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (h) => {
        c.value = h;
      }
    );
    const d = T(() => r.label || (r.field ? a(r.field) : "")), y = T(() => {
      var h, f;
      return r.error || ((f = (h = r.form) == null ? void 0 : h.errors) == null ? void 0 : f[r.field]);
    });
    return t({
      setValueSilently: (h) => {
        c.value = h, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (h, f) => (S(), U(m(Qs), {
      field: h.field,
      label: d.value,
      sublabel: h.sublabel,
      tooltip: h.tooltip,
      required: h.required,
      noLabel: h.noLabel,
      labelCustomClass: h.labelCustomClass,
      form: h.form,
      error: y.value,
      htmlFor: h.field
    }, {
      default: _(() => {
        var v, w;
        return [
          D("div", xg, [
            h.addon ? (S(), k("span", {
              key: 0,
              class: Q(["border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !h.disabled }])
            }, Z(h.addon), 3)) : Y("", !0),
            Ze(D("textarea", {
              id: h.field,
              class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "rounded-l-none shadow-none": h.addon,
                "rounded-r-none": !!h.submitBtn || h.whatsApp || ((v = h.$slots) == null ? void 0 : v.submit),
                [h.customClass]: !!h.customClass
              }]),
              rows: h.rows,
              "onUpdate:modelValue": f[0] || (f[0] = (O) => c.value = O),
              required: h.required,
              disabled: h.disabled,
              autocomplete: h.autocomplete || h.field,
              placeholder: h.placeholder,
              autofocus: h.autofocus,
              name: h.name || h.field
            }, null, 10, Cg), [
              [Oc, c.value]
            ]),
            h.form ? (S(), k(re, { key: 1 }, [
              h.submitBtn ? (S(), U(m(mo), {
                key: 0,
                form: h.form,
                class: Q(["z-2 inline-block rounded-l-none", h.buttonCustomClass]),
                id: `submit-button-${h.field}`
              }, {
                default: _(() => [
                  ce(Z(h.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (w = h.$slots) != null && w.submit ? (S(), U(m(mo), {
                key: 1,
                form: h.form,
                class: Q(["z-2 inline-block rounded-l-none", h.buttonCustomClass]),
                id: "button-textarea"
              }, {
                default: _(() => [
                  j(h.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            h.whatsApp ? (S(), k("a", {
              key: 2,
              class: Q(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", h.buttonCustomClass]),
              href: h.whatsApp,
              target: "_blank"
            }, [
              J(m(Ee), {
                icon: m(vd),
                size: "2xl"
              }, null, 8, ["icon"])
            ], 10, Og)) : Y("", !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Eg = ["top", "right", "bottom", "left"], Zt = Math.min, Qe = Math.max, oo = Math.round, _r = Math.floor, Et = (e) => ({
  x: e,
  y: e
}), Pg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, kg = {
  start: "end",
  end: "start"
};
function Os(e, t, n) {
  return Qe(e, Zt(t, n));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function Un(e) {
  return e.split("-")[1];
}
function mi(e) {
  return e === "x" ? "y" : "x";
}
function hi(e) {
  return e === "y" ? "height" : "width";
}
function _t(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function yi(e) {
  return mi(_t(e));
}
function $g(e, t, n) {
  n === void 0 && (n = !1);
  const r = Un(e), o = yi(e), a = hi(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = ao(s)), [s, ao(s)];
}
function Tg(e) {
  const t = ao(e);
  return [As(e), t, As(t)];
}
function As(e) {
  return e.replace(/start|end/g, (t) => kg[t]);
}
function Dg(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function Fg(e, t, n, r) {
  const o = Un(e);
  let a = Dg(Mt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(As)))), a;
}
function ao(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Pg[t]);
}
function Rg(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bd(e) {
  return typeof e != "number" ? Rg(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function so(e) {
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
function Dl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = _t(t), s = yi(t), i = hi(s), c = Mt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, y = r[i] / 2 - o[i] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Un(t)) {
    case "start":
      g[s] -= y * (n && l ? -1 : 1);
      break;
    case "end":
      g[s] += y * (n && l ? -1 : 1);
      break;
  }
  return g;
}
const _g = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Dl(l, r, c), y = r, g = {}, p = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: f,
      fn: v
    } = i[h], {
      x: w,
      y: O,
      data: P,
      reset: F
    } = await v({
      x: u,
      y: d,
      initialPlacement: r,
      placement: y,
      strategy: o,
      middlewareData: g,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = O ?? d, g = {
      ...g,
      [f]: {
        ...g[f],
        ...P
      }
    }, F && p <= 50 && (p++, typeof F == "object" && (F.placement && (y = F.placement), F.rects && (l = F.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : F.rects), {
      x: u,
      y: d
    } = Dl(l, y, c)), h = -1);
  }
  return {
    x: u,
    y: d,
    placement: y,
    strategy: o,
    middlewareData: g
  };
};
async function dr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: y = !1,
    padding: g = 0
  } = Lt(t, e), p = bd(g), f = i[y ? d === "floating" ? "reference" : "floating" : d], v = so(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(f))) == null || n ? f : f.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), w = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), P = await (a.isElement == null ? void 0 : a.isElement(O)) ? await (a.getScale == null ? void 0 : a.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, F = so(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: O,
    strategy: c
  }) : w);
  return {
    top: (v.top - F.top + p.top) / P.y,
    bottom: (F.bottom - v.bottom + p.bottom) / P.y,
    left: (v.left - F.left + p.left) / P.x,
    right: (F.right - v.right + p.right) / P.x
  };
}
const Ig = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Lt(e, t) || {};
    if (l == null)
      return {};
    const d = bd(u), y = {
      x: n,
      y: r
    }, g = yi(o), p = hi(g), h = await s.getDimensions(l), f = g === "y", v = f ? "top" : "left", w = f ? "bottom" : "right", O = f ? "clientHeight" : "clientWidth", P = a.reference[p] + a.reference[g] - y[g] - a.floating[p], F = y[g] - a.reference[g], H = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let A = H ? H[O] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(H))) && (A = i.floating[O] || a.floating[p]);
    const W = P / 2 - F / 2, B = A / 2 - h[p] / 2 - 1, $ = Zt(d[v], B), V = Zt(d[w], B), b = $, E = A - h[p] - V, C = A / 2 - h[p] / 2 + W, x = Os(b, C, E), K = !c.arrow && Un(o) != null && C !== x && a.reference[p] / 2 - (C < b ? $ : V) - h[p] / 2 < 0, L = K ? C < b ? C - b : C - E : 0;
    return {
      [g]: y[g] + L,
      data: {
        [g]: x,
        centerOffset: C - x - L,
        ...K && {
          alignmentOffset: L
        }
      },
      reset: K
    };
  }
}), Bg = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: y,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: h = !0,
        ...f
      } = Lt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const v = Mt(o), w = _t(i), O = Mt(i) === i, P = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), F = y || (O || !h ? [ao(i)] : Tg(i)), H = p !== "none";
      !y && H && F.push(...Fg(i, h, p, P));
      const A = [i, ...F], W = await dr(t, f), B = [];
      let $ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && B.push(W[v]), d) {
        const x = $g(o, s, P);
        B.push(W[x[0]], W[x[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: B
      }], !B.every((x) => x <= 0)) {
        var V, b;
        const x = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, K = A[x];
        if (K) {
          var E;
          const R = d === "alignment" ? w !== _t(K) : !1, X = ((E = $[0]) == null ? void 0 : E.overflows[0]) > 0;
          if (!R || X)
            return {
              data: {
                index: x,
                overflows: $
              },
              reset: {
                placement: K
              }
            };
        }
        let L = (b = $.filter((R) => R.overflows[0] <= 0).sort((R, X) => R.overflows[1] - X.overflows[1])[0]) == null ? void 0 : b.placement;
        if (!L)
          switch (g) {
            case "bestFit": {
              var C;
              const R = (C = $.filter((X) => {
                if (H) {
                  const ae = _t(X.placement);
                  return ae === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ae === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((ae) => ae > 0).reduce((ae, Fe) => ae + Fe, 0)]).sort((X, ae) => X[1] - ae[1])[0]) == null ? void 0 : C[0];
              R && (L = R);
              break;
            }
            case "initialPlacement":
              L = i;
              break;
          }
        if (o !== L)
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
function Fl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Rl(e) {
  return Eg.some((t) => e[t] >= 0);
}
const Lg = function(e) {
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
          const a = await dr(t, {
            ...o,
            elementContext: "reference"
          }), s = Fl(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Rl(s)
            }
          };
        }
        case "escaped": {
          const a = await dr(t, {
            ...o,
            altBoundary: !0
          }), s = Fl(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Rl(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Mg(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Mt(n), i = Un(n), c = _t(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Lt(t, e);
  let {
    mainAxis: y,
    crossAxis: g,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof p == "number" && (g = i === "end" ? p * -1 : p), c ? {
    x: g * u,
    y: y * l
  } : {
    x: y * l,
    y: g * u
  };
}
const Ng = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, c = await Mg(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, jg = function(e) {
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
        crossAxis: s = !1,
        limiter: i = {
          fn: (f) => {
            let {
              x: v,
              y: w
            } = f;
            return {
              x: v,
              y: w
            };
          }
        },
        ...c
      } = Lt(e, t), l = {
        x: n,
        y: r
      }, u = await dr(t, c), d = _t(Mt(o)), y = mi(d);
      let g = l[y], p = l[d];
      if (a) {
        const f = y === "y" ? "top" : "left", v = y === "y" ? "bottom" : "right", w = g + u[f], O = g - u[v];
        g = Os(w, g, O);
      }
      if (s) {
        const f = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", w = p + u[f], O = p - u[v];
        p = Os(w, p, O);
      }
      const h = i.fn({
        ...t,
        [y]: g,
        [d]: p
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [y]: a,
            [d]: s
          }
        }
      };
    }
  };
}, qg = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Lt(e, t), u = {
        x: n,
        y: r
      }, d = _t(o), y = mi(d);
      let g = u[y], p = u[d];
      const h = Lt(i, t), f = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const O = y === "y" ? "height" : "width", P = a.reference[y] - a.floating[O] + f.mainAxis, F = a.reference[y] + a.reference[O] - f.mainAxis;
        g < P ? g = P : g > F && (g = F);
      }
      if (l) {
        var v, w;
        const O = y === "y" ? "width" : "height", P = ["top", "left"].includes(Mt(o)), F = a.reference[d] - a.floating[O] + (P && ((v = s.offset) == null ? void 0 : v[d]) || 0) + (P ? 0 : f.crossAxis), H = a.reference[d] + a.reference[O] + (P ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (P ? f.crossAxis : 0);
        p < F ? p = F : p > H && (p = H);
      }
      return {
        [y]: g,
        [d]: p
      };
    }
  };
}, Vg = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...l
      } = Lt(e, t), u = await dr(t, l), d = Mt(o), y = Un(o), g = _t(o) === "y", {
        width: p,
        height: h
      } = a.floating;
      let f, v;
      d === "top" || d === "bottom" ? (f = d, v = y === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = d, f = y === "end" ? "top" : "bottom");
      const w = h - u.top - u.bottom, O = p - u.left - u.right, P = Zt(h - u[f], w), F = Zt(p - u[v], O), H = !t.middlewareData.shift;
      let A = P, W = F;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (W = O), (r = t.middlewareData.shift) != null && r.enabled.y && (A = w), H && !y) {
        const $ = Qe(u.left, 0), V = Qe(u.right, 0), b = Qe(u.top, 0), E = Qe(u.bottom, 0);
        g ? W = p - 2 * ($ !== 0 || V !== 0 ? $ + V : Qe(u.left, u.right)) : A = h - 2 * (b !== 0 || E !== 0 ? b + E : Qe(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: W,
        availableHeight: A
      });
      const B = await s.getDimensions(i.floating);
      return p !== B.width || h !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Co() {
  return typeof window < "u";
}
function bn(e) {
  return gi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $t(e) {
  var t;
  return (t = (gi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function gi(e) {
  return Co() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function ht(e) {
  return Co() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function Pt(e) {
  return Co() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function _l(e) {
  return !Co() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
function vr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = yt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function zg(e) {
  return ["table", "td", "th"].includes(bn(e));
}
function Oo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function vi(e) {
  const t = bi(), n = ht(e) ? yt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Ug(e) {
  let t = en(e);
  for (; Pt(t) && !Nn(t); ) {
    if (vi(t))
      return t;
    if (Oo(t))
      return null;
    t = en(t);
  }
  return null;
}
function bi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Nn(e) {
  return ["html", "body", "#document"].includes(bn(e));
}
function yt(e) {
  return tt(e).getComputedStyle(e);
}
function Ao(e) {
  return ht(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function en(e) {
  if (bn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    _l(e) && e.host || // Fallback.
    $t(e)
  );
  return _l(t) ? t.host : t;
}
function wd(e) {
  const t = en(e);
  return Nn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pt(t) && vr(t) ? t : wd(t);
}
function fr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = wd(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = tt(o);
  if (a) {
    const i = Es(s);
    return t.concat(s, s.visualViewport || [], vr(o) ? o : [], i && n ? fr(i) : []);
  }
  return t.concat(o, fr(o, [], n));
}
function Es(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sd(e) {
  const t = yt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Pt(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = oo(n) !== a || oo(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function wi(e) {
  return ht(e) ? e : e.contextElement;
}
function Bn(e) {
  const t = wi(e);
  if (!Pt(t))
    return Et(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Sd(t);
  let s = (a ? oo(n.width) : n.width) / r, i = (a ? oo(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Hg = /* @__PURE__ */ Et(0);
function xd(e) {
  const t = tt(e);
  return !bi() || !t.visualViewport ? Hg : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Wg(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function mn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = wi(e);
  let s = Et(1);
  t && (r ? ht(r) && (s = Bn(r)) : s = Bn(e));
  const i = Wg(a, n, r) ? xd(a) : Et(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const y = tt(a), g = r && ht(r) ? tt(r) : r;
    let p = y, h = Es(p);
    for (; h && r && g !== p; ) {
      const f = Bn(h), v = h.getBoundingClientRect(), w = yt(h), O = v.left + (h.clientLeft + parseFloat(w.paddingLeft)) * f.x, P = v.top + (h.clientTop + parseFloat(w.paddingTop)) * f.y;
      c *= f.x, l *= f.y, u *= f.x, d *= f.y, c += O, l += P, p = tt(h), h = Es(p);
    }
  }
  return so({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Si(e, t) {
  const n = Ao(e).scrollLeft;
  return t ? t.left + n : mn($t(e)).left + n;
}
function Cd(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Si(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function Kg(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = $t(r), i = t ? Oo(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Et(1);
  const u = Et(0), d = Pt(r);
  if ((d || !d && !a) && ((bn(r) !== "body" || vr(s)) && (c = Ao(r)), Pt(r))) {
    const g = mn(r);
    l = Bn(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const y = s && !d && !a ? Cd(s, c, !0) : Et(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + y.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + y.y
  };
}
function Gg(e) {
  return Array.from(e.getClientRects());
}
function Yg(e) {
  const t = $t(e), n = Ao(e), r = e.ownerDocument.body, o = Qe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Qe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Si(e);
  const i = -n.scrollTop;
  return yt(r).direction === "rtl" && (s += Qe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function Xg(e, t) {
  const n = tt(e), r = $t(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = bi();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function Jg(e, t) {
  const n = mn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Pt(e) ? Bn(e) : Et(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Il(e, t, n) {
  let r;
  if (t === "viewport")
    r = Xg(e, n);
  else if (t === "document")
    r = Yg($t(e));
  else if (ht(t))
    r = Jg(t, n);
  else {
    const o = xd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return so(r);
}
function Od(e, t) {
  const n = en(e);
  return n === t || !ht(n) || Nn(n) ? !1 : yt(n).position === "fixed" || Od(n, t);
}
function Qg(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fr(e, [], !1).filter((i) => ht(i) && bn(i) !== "body"), o = null;
  const a = yt(e).position === "fixed";
  let s = a ? en(e) : e;
  for (; ht(s) && !Nn(s); ) {
    const i = yt(s), c = vi(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || vr(s) && !c && Od(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = en(s);
  }
  return t.set(e, r), r;
}
function Zg(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Oo(t) ? [] : Qg(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = Il(t, u, o);
    return l.top = Qe(d.top, l.top), l.right = Zt(d.right, l.right), l.bottom = Zt(d.bottom, l.bottom), l.left = Qe(d.left, l.left), l;
  }, Il(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function ev(e) {
  const {
    width: t,
    height: n
  } = Sd(e);
  return {
    width: t,
    height: n
  };
}
function tv(e, t, n) {
  const r = Pt(t), o = $t(t), a = n === "fixed", s = mn(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Et(0);
  function l() {
    c.x = Si(o);
  }
  if (r || !r && !a)
    if ((bn(t) !== "body" || vr(o)) && (i = Ao(t)), r) {
      const g = mn(t, !0, a, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? Cd(o, i) : Et(0), d = s.left + i.scrollLeft - c.x - u.x, y = s.top + i.scrollTop - c.y - u.y;
  return {
    x: d,
    y,
    width: s.width,
    height: s.height
  };
}
function ea(e) {
  return yt(e).position === "static";
}
function Bl(e, t) {
  if (!Pt(e) || yt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return $t(e) === n && (n = n.ownerDocument.body), n;
}
function Ad(e, t) {
  const n = tt(e);
  if (Oo(e))
    return n;
  if (!Pt(e)) {
    let o = en(e);
    for (; o && !Nn(o); ) {
      if (ht(o) && !ea(o))
        return o;
      o = en(o);
    }
    return n;
  }
  let r = Bl(e, t);
  for (; r && zg(r) && ea(r); )
    r = Bl(r, t);
  return r && Nn(r) && ea(r) && !vi(r) ? n : r || Ug(e) || n;
}
const nv = async function(e) {
  const t = this.getOffsetParent || Ad, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: tv(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function rv(e) {
  return yt(e).direction === "rtl";
}
const ov = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Kg,
  getDocumentElement: $t,
  getClippingRect: Zg,
  getOffsetParent: Ad,
  getElementRects: nv,
  getClientRects: Gg,
  getDimensions: ev,
  getScale: Bn,
  isElement: ht,
  isRTL: rv
};
function Ed(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function av(e, t) {
  let n = null, r;
  const o = $t(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: y,
      height: g
    } = l;
    if (i || t(), !y || !g)
      return;
    const p = _r(d), h = _r(o.clientWidth - (u + y)), f = _r(o.clientHeight - (d + g)), v = _r(u), O = {
      rootMargin: -p + "px " + -h + "px " + -f + "px " + -v + "px",
      threshold: Qe(0, Zt(1, c)) || 1
    };
    let P = !0;
    function F(H) {
      const A = H[0].intersectionRatio;
      if (A !== c) {
        if (!P)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !Ed(l, e.getBoundingClientRect()) && s(), P = !1;
    }
    try {
      n = new IntersectionObserver(F, {
        ...O,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(F, O);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function sv(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = wi(e), u = o || a ? [...l ? fr(l) : [], ...fr(t)] : [];
  u.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), a && v.addEventListener("resize", n);
  });
  const d = l && i ? av(l, n) : null;
  let y = -1, g = null;
  s && (g = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === l && g && (g.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var O;
      (O = g) == null || O.observe(t);
    })), n();
  }), l && !c && g.observe(l), g.observe(t));
  let p, h = c ? mn(e) : null;
  c && f();
  function f() {
    const v = mn(e);
    h && !Ed(h, v) && n(), h = v, p = requestAnimationFrame(f);
  }
  return n(), () => {
    var v;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), d == null || d(), (v = g) == null || v.disconnect(), g = null, c && cancelAnimationFrame(p);
  };
}
const iv = Ng, lv = jg, Ll = Bg, uv = Vg, cv = Lg, dv = Ig, fv = qg, pv = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ov,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return _g(e, t, {
    ...o,
    platform: a
  });
};
function mv(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ps(e) {
  if (mv(e)) {
    const t = e.$el;
    return gi(t) && bn(t) === "#comment" ? null : t;
  }
  return e;
}
function Fn(e) {
  return typeof e == "function" ? e() : m(e);
}
function hv(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ps(Fn(e.element));
      return n == null ? {} : dv({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Pd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ml(e, t) {
  const n = Pd(e);
  return Math.round(t * n) / n;
}
function yv(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = T(() => {
    var A;
    return (A = Fn(n.open)) != null ? A : !0;
  }), a = T(() => Fn(n.middleware)), s = T(() => {
    var A;
    return (A = Fn(n.placement)) != null ? A : "bottom";
  }), i = T(() => {
    var A;
    return (A = Fn(n.strategy)) != null ? A : "absolute";
  }), c = T(() => {
    var A;
    return (A = Fn(n.transform)) != null ? A : !0;
  }), l = T(() => Ps(e.value)), u = T(() => Ps(t.value)), d = N(0), y = N(0), g = N(i.value), p = N(s.value), h = mr({}), f = N(!1), v = T(() => {
    const A = {
      position: g.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return A;
    const W = Ml(u.value, d.value), B = Ml(u.value, y.value);
    return c.value ? {
      ...A,
      transform: "translate(" + W + "px, " + B + "px)",
      ...Pd(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: g.value,
      left: W + "px",
      top: B + "px"
    };
  });
  let w;
  function O() {
    if (l.value == null || u.value == null)
      return;
    const A = o.value;
    pv(l.value, u.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((W) => {
      d.value = W.x, y.value = W.y, g.value = W.strategy, p.value = W.placement, h.value = W.middlewareData, f.value = A !== !1;
    });
  }
  function P() {
    typeof w == "function" && (w(), w = void 0);
  }
  function F() {
    if (P(), r === void 0) {
      O();
      return;
    }
    if (l.value != null && u.value != null) {
      w = r(l.value, u.value, O);
      return;
    }
  }
  function H() {
    o.value || (f.value = !1);
  }
  return ne([a, s, i, o], O, {
    flush: "sync"
  }), ne([l, u], F, {
    flush: "sync"
  }), ne(o, H, {
    flush: "sync"
  }), Ac() && Ec(P), {
    x: $n(d),
    y: $n(y),
    strategy: $n(g),
    placement: $n(p),
    middlewareData: $n(h),
    isPositioned: $n(f),
    floatingStyles: v,
    update: O
  };
}
function xi(e) {
  return e ? e.flatMap((t) => t.type === re ? xi(t.children) : [t]) : [];
}
const ks = z({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var c, l;
      if (!n.default)
        return null;
      const r = xi(n.default()), o = r.findIndex((u) => u.type !== Pc);
      if (o === -1)
        return r;
      const a = r[o];
      (c = a.props) == null || delete c.ref;
      const s = a.props ? se(t, a.props) : t;
      t.class && ((l = a.props) != null && l.class) && delete a.props.class;
      const i = Xp(a, s);
      for (const u in s)
        u.startsWith("on") && (i.props || (i.props = {}), i.props[u] = s[u]);
      return r.length === 1 ? i : (r[o] = i, r);
    };
  }
}), gv = ["area", "img", "input"], Pe = z({
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
    return typeof r == "string" && gv.includes(r) ? () => qe(r, t) : r !== "template" ? () => qe(e.as, t, { default: n.default }) : () => qe(ks, t, { default: n.default });
  }
}), kd = /* @__PURE__ */ z({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (S(), U(m(Pe), {
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
      default: _(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function vv(e, t) {
  var n;
  const r = mr();
  return st(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), kc(r);
}
function br(e) {
  return Ac() ? (Ec(e), !0) : !1;
}
function bv() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const s = () => t(a);
      return br(s), {
        off: s
      };
    },
    off: t,
    trigger: (...a) => Promise.all(Array.from(e).map((s) => s(...a))),
    clear: () => {
      e.clear();
    }
  };
}
function wv(e) {
  let t = !1, n;
  const r = $c(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function $d(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...a) => (t += 1, r || (r = $c(!0), n = r.run(() => e(...a))), br(o), n);
}
const qt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Sv = (e) => typeof e < "u", xv = Object.prototype.toString, Cv = (e) => xv.call(e) === "[object Object]", Nl = /* @__PURE__ */ Ov();
function Ov() {
  var e, t;
  return qt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Av(e) {
  return vn();
}
function ta(e) {
  return Array.isArray(e) ? e : [e];
}
function Td(e, t = 1e4) {
  return Qp((n, r) => {
    let o = At(e), a;
    const s = () => setTimeout(() => {
      o = At(e), r();
    }, At(t));
    return br(() => {
      clearTimeout(a);
    }), {
      get() {
        return n(), o;
      },
      set(i) {
        o = i, r(), clearTimeout(a), a = s();
      }
    };
  });
}
const Ev = At;
function Pv(e, t) {
  Av() && Jp(e, t);
}
function Dd(e, t, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: o = !1
  } = n, a = mr(!1);
  let s = null;
  function i() {
    s && (clearTimeout(s), s = null);
  }
  function c() {
    a.value = !1, i();
  }
  function l(...u) {
    o && e(), i(), a.value = !0, s = setTimeout(() => {
      a.value = !1, s = null, e(...u);
    }, At(t));
  }
  return r && (a.value = !0, qt && l()), br(c), {
    isPending: kc(a),
    start: l,
    stop: c
  };
}
function kv(e, t, n) {
  return ne(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ci = qt ? window : void 0;
function wn(e) {
  var t;
  const n = At(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function hn(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, r = (i, c, l, u) => (i.addEventListener(c, l, u), () => i.removeEventListener(c, l, u)), o = T(() => {
    const i = ta(At(e[0])).filter((c) => c != null);
    return i.every((c) => typeof c != "string") ? i : void 0;
  }), a = kv(
    () => {
      var i, c;
      return [
        (c = (i = o.value) == null ? void 0 : i.map((l) => wn(l))) != null ? c : [Ci].filter((l) => l != null),
        ta(At(o.value ? e[1] : e[0])),
        ta(m(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        At(o.value ? e[3] : e[2])
      ];
    },
    ([i, c, l, u]) => {
      if (n(), !(i != null && i.length) || !(c != null && c.length) || !(l != null && l.length))
        return;
      const d = Cv(u) ? { ...u } : u;
      t.push(
        ...i.flatMap(
          (y) => c.flatMap(
            (g) => l.map((p) => r(y, g, p, d))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    a(), n();
  };
  return br(n), s;
}
function $v() {
  const e = mr(!1), t = vn();
  return t && pe(() => {
    e.value = !0;
  }, t), e;
}
function Tv(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Dv(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ci,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = r, c = Tv(t);
  return hn(o, a, (u) => {
    u.repeat && At(i) || c(u) && n(u);
  }, s);
}
function Fv(e) {
  return JSON.parse(JSON.stringify(e));
}
function Sn(e, t, n, r = {}) {
  var o, a, s;
  const {
    clone: i = !1,
    passive: c = !1,
    eventName: l,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: y
  } = r, g = vn(), p = n || (g == null ? void 0 : g.emit) || ((o = g == null ? void 0 : g.$emit) == null ? void 0 : o.bind(g)) || ((s = (a = g == null ? void 0 : g.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(g == null ? void 0 : g.proxy));
  let h = l;
  t || (t = "modelValue"), h = h || `update:${t.toString()}`;
  const f = (O) => i ? typeof i == "function" ? i(O) : Fv(O) : O, v = () => Sv(e[t]) ? f(e[t]) : d, w = (O) => {
    y ? y(O) && p(h, O) : p(h, O);
  };
  if (c) {
    const O = v(), P = N(O);
    let F = !1;
    return ne(
      () => e[t],
      (H) => {
        F || (F = !0, P.value = f(H), De(() => F = !1));
      }
    ), ne(
      P,
      (H) => {
        !F && (H !== e[t] || u) && w(H);
      },
      { deep: u }
    ), P;
  } else
    return T({
      get() {
        return v();
      },
      set(O) {
        w(O);
      }
    });
}
function rt(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const i = Js(r, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (yo(r, s), s)];
}
const [Oi, zO] = rt("ConfigProvider");
function Ai(e) {
  const t = Oi({
    dir: N("ltr")
  });
  return T(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function le() {
  const e = vn(), t = N(), n = T(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : wn(t);
  }), r = Object.assign({}, e.exposed), o = {};
  for (const s in e.props)
    Object.defineProperty(o, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s]
    });
  if (Object.keys(r).length > 0)
    for (const s in r)
      Object.defineProperty(o, s, {
        enumerable: !0,
        configurable: !0,
        get: () => r[s]
      });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function a(s) {
    t.value = s, s && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => s instanceof Element ? s : s.$el
    }), e.exposed = o);
  }
  return { forwardRef: a, currentRef: t, currentElement: n };
}
const [Fd, Rv] = rt("CollapsibleRoot"), Ei = /* @__PURE__ */ z({
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
    const r = e, a = Sn(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), { disabled: s, unmountOnHide: i } = kt(r);
    return Rv({
      contentId: "",
      disabled: s,
      open: a,
      unmountOnHide: i,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), le(), (c, l) => (S(), U(m(Pe), {
      as: c.as,
      "as-child": r.asChild,
      "data-state": m(a) ? "open" : "closed",
      "data-disabled": m(s) ? "" : void 0
    }, {
      default: _(() => [
        j(c.$slots, "default", { open: m(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), _v = ["INPUT", "TEXTAREA"];
function Iv(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && _v.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: a = "[data-reka-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: c = "ltr",
    preventScroll: l = !0,
    focus: u = !1
  } = r, [d, y, g, p, h, f] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], v = g || p, w = d || y;
  if (!h && !f && (!v && !w || o === "vertical" && w || o === "horizontal" && v))
    return null;
  const O = n ? Array.from(n.querySelectorAll(a)) : s;
  if (!O.length)
    return null;
  l && e.preventDefault();
  let P = null;
  return w || v ? P = Rd(O, t, {
    goForward: v ? p : c === "ltr" ? d : y,
    loop: i
  }) : h ? P = O.at(0) || null : f && (P = O.at(-1) || null), u && (P == null || P.focus()), P;
}
function Rd(e, t, n, r = e.length) {
  if (--r === 0)
    return null;
  const o = e.indexOf(t), a = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const s = (a + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? Rd(
    e,
    i,
    n,
    r
  ) : i : null;
}
let Bv = 0;
function yn(e, t = "reka") {
  const n = Oi({ useId: void 0 });
  return Zi.useId ? `${t}-${Zi.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++Bv}`;
}
function Lv(e, t) {
  const n = N(e);
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
function Mv(e, t) {
  var f;
  const n = N({}), r = N("none"), o = N(e), a = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((f = t.value) == null ? void 0 : f.ownerDocument.defaultView) ?? Ci, { state: c, dispatch: l } = Lv(a, {
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
  }), u = (v) => {
    var w;
    if (qt) {
      const O = new CustomEvent(v, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(O);
    }
  };
  ne(
    e,
    async (v, w) => {
      var P;
      const O = w !== v;
      if (await De(), O) {
        const F = r.value, H = Ir(t.value);
        v ? (l("MOUNT"), u("enter"), H === "none" && u("after-enter")) : H === "none" || H === "undefined" || ((P = n.value) == null ? void 0 : P.display) === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : w && F !== H ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (v) => {
    const w = Ir(t.value), O = w.includes(
      v.animationName
    ), P = c.value === "mounted" ? "enter" : "leave";
    if (v.target === t.value && O && (u(`after-${P}`), l("ANIMATION_END"), !o.value)) {
      const F = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var H;
        ((H = t.value) == null ? void 0 : H.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = F);
      });
    }
    v.target === t.value && w === "none" && l("ANIMATION_END");
  }, y = (v) => {
    v.target === t.value && (r.value = Ir(t.value));
  }, g = ne(
    t,
    (v, w) => {
      v ? (n.value = getComputedStyle(v), v.addEventListener("animationstart", y), v.addEventListener("animationcancel", d), v.addEventListener("animationend", d)) : (l("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), w == null || w.removeEventListener("animationstart", y), w == null || w.removeEventListener("animationcancel", d), w == null || w.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = ne(c, () => {
    const v = Ir(t.value);
    r.value = c.value === "mounted" ? v : "none";
  });
  return Nt(() => {
    g(), p();
  }), {
    isPresent: T(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function Ir(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const wr = z({
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
    const { present: r, forceMount: o } = kt(e), a = N(), { isPresent: s } = Mv(r, a);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = xi(i || []);
    const c = vn();
    if (i && (i == null ? void 0 : i.length) > 1) {
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
          ].map((d) => `  - ${d}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => o.value || r.value || s.value ? qe(t.default({ present: s.value })[0], {
      ref: (u) => {
        const d = wn(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? a.value = d.firstElementChild : a.value = d), d;
      }
    }) : null;
  }
}), Pi = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Fd();
    o.contentId || (o.contentId = yn(void 0, "reka-collapsible-content"));
    const a = N(), { forwardRef: s, currentElement: i } = le(), c = N(0), l = N(0), u = T(() => o.open.value), d = N(u.value), y = N();
    ne(
      () => {
        var p;
        return [u.value, (p = a.value) == null ? void 0 : p.present];
      },
      async () => {
        await De();
        const p = i.value;
        if (!p)
          return;
        y.value = y.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const h = p.getBoundingClientRect();
        l.value = h.height, c.value = h.width, d.value || (p.style.transitionDuration = y.value.transitionDuration, p.style.animationName = y.value.animationName);
      },
      {
        immediate: !0
      }
    );
    const g = T(() => d.value && o.open.value);
    return pe(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), hn(i, "beforematch", (p) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), r("contentFound");
      });
    }), (p, h) => (S(), U(m(wr), {
      ref_key: "presentRef",
      ref: a,
      present: p.forceMount || m(o).open.value,
      "force-mount": !0
    }, {
      default: _(({ present: f }) => {
        var v;
        return [
          J(m(Pe), se(p.$attrs, {
            id: m(o).contentId,
            ref: m(s),
            "as-child": n.asChild,
            as: p.as,
            hidden: f ? void 0 : m(o).unmountOnHide.value ? "" : "until-found",
            "data-state": g.value ? void 0 : m(o).open.value ? "open" : "closed",
            "data-disabled": (v = m(o).disabled) != null && v.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${l.value}px`,
              "--reka-collapsible-content-width": `${c.value}px`
            }
          }), {
            default: _(() => [
              !m(o).unmountOnHide.value || f ? j(p.$slots, "default", { key: 0 }) : Y("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), ki = /* @__PURE__ */ z({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = Fd();
    return (r, o) => {
      var a, s;
      return S(), U(m(Pe), {
        type: r.as === "button" ? "button" : void 0,
        as: r.as,
        "as-child": t.asChild,
        "aria-controls": m(n).contentId,
        "aria-expanded": m(n).open.value,
        "data-state": m(n).open.value ? "open" : "closed",
        "data-disabled": (a = m(n).disabled) != null && a.value ? "" : void 0,
        disabled: (s = m(n).disabled) == null ? void 0 : s.value,
        onClick: m(n).onOpenToggle
      }, {
        default: _(() => [
          j(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
}), [Tt, Nv] = rt("DialogRoot"), jv = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Sn(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = N(), s = N(), { modal: i } = kt(n);
    return Nv({
      open: o,
      modal: i,
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
      contentElement: s
    }), (c, l) => j(c.$slots, "default", { open: m(o) });
  }
}), qv = /* @__PURE__ */ z({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = Tt();
    return (r, o) => (S(), U(m(Pe), se(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (a) => m(n).onOpenChange(!1))
    }), {
      default: _(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function Sr(e) {
  const t = vn(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[Zp(Tc(o))] = (...a) => e(o, ...a);
  }), r;
}
function _d(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const Vv = "dismissableLayer.pointerDownOutside", zv = "dismissableLayer.focusOutside";
function Id(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function Uv(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = N(!1), o = N(() => {
  });
  return st((s) => {
    if (!qt)
      return;
    const i = async (l) => {
      const u = l.target;
      if (!(!(t != null && t.value) || !u)) {
        if (Id(t.value, u)) {
          r.value = !1;
          return;
        }
        if (l.target && !r.value) {
          let d = function() {
            _d(
              Vv,
              e,
              y
            );
          };
          const y = { originalEvent: l };
          l.pointerType === "touch" ? (n.removeEventListener("click", o.value), o.value = d, n.addEventListener("click", o.value, {
            once: !0
          })) : d();
        } else
          n.removeEventListener("click", o.value);
        r.value = !1;
      }
    }, c = window.setTimeout(() => {
      n.addEventListener("pointerdown", i);
    }, 0);
    s(() => {
      window.clearTimeout(c), n.removeEventListener("pointerdown", i), n.removeEventListener("click", o.value);
    });
  }), {
    onPointerDownCapture: () => r.value = !0
  };
}
function Hv(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = N(!1);
  return st((a) => {
    if (!qt)
      return;
    const s = async (i) => {
      if (!(t != null && t.value))
        return;
      await De(), await De();
      const c = i.target;
      !t.value || !c || Id(t.value, c) || i.target && !r.value && _d(
        zv,
        e,
        { originalEvent: i }
      );
    };
    n.addEventListener("focusin", s), a(() => n.removeEventListener("focusin", s));
  }), {
    onFocusCapture: () => r.value = !0,
    onBlurCapture: () => r.value = !1
  };
}
const Dt = hr({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), $i = /* @__PURE__ */ z({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = le(), s = T(
      () => {
        var p;
        return ((p = a.value) == null ? void 0 : p.ownerDocument) ?? globalThis.document;
      }
    ), i = T(() => Dt.layersRoot), c = T(() => a.value ? Array.from(i.value).indexOf(a.value) : -1), l = T(() => Dt.layersWithOutsidePointerEventsDisabled.size > 0), u = T(() => {
      const p = Array.from(i.value), [h] = [...Dt.layersWithOutsidePointerEventsDisabled].slice(-1), f = p.indexOf(h);
      return c.value >= f;
    }), d = Uv(async (p) => {
      const h = [...Dt.branches].some(
        (f) => f == null ? void 0 : f.contains(p.target)
      );
      !u.value || h || (r("pointerDownOutside", p), r("interactOutside", p), await De(), p.defaultPrevented || r("dismiss"));
    }, a), y = Hv((p) => {
      [...Dt.branches].some(
        (f) => f == null ? void 0 : f.contains(p.target)
      ) || (r("focusOutside", p), r("interactOutside", p), p.defaultPrevented || r("dismiss"));
    }, a);
    Dv("Escape", (p) => {
      c.value === i.value.size - 1 && (r("escapeKeyDown", p), p.defaultPrevented || r("dismiss"));
    });
    let g;
    return st((p) => {
      a.value && (n.disableOutsidePointerEvents && (Dt.layersWithOutsidePointerEventsDisabled.size === 0 && (g = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), Dt.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), p(() => {
        n.disableOutsidePointerEvents && Dt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = g);
      }));
    }), st((p) => {
      p(() => {
        a.value && (i.value.delete(a.value), Dt.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (p, h) => (S(), U(m(Pe), {
      ref: m(o),
      "as-child": p.asChild,
      as: p.as,
      "data-dismissable-layer": "",
      style: et({
        pointerEvents: l.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: m(y).onFocusCapture,
      onBlurCapture: m(y).onBlurCapture,
      onPointerdownCapture: m(d).onPointerDownCapture
    }, {
      default: _(() => [
        j(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function He() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const Wv = "menu.itemSelect", $s = ["Enter", " "], Kv = ["ArrowDown", "PageUp", "Home"], Bd = ["ArrowUp", "PageDown", "End"], Gv = [...Kv, ...Bd];
[...$s], [...$s];
function Ld(e) {
  return e ? "open" : "closed";
}
function Yv(e) {
  const t = He();
  for (const n of e)
    if (n === t || (n.focus(), He() !== t))
      return;
}
function Xv(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function Jv(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Xv(n, t);
}
function Ts(e) {
  return e.pointerType === "mouse";
}
const Qv = "DialogTitle", Zv = "DialogContent";
function e0({
  titleName: e = Qv,
  contentName: t = Zv,
  componentLink: n = "dialog.html#title",
  titleId: r,
  descriptionId: o,
  contentElement: a
}) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${n}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  pe(() => {
    var u;
    document.getElementById(r) || console.warn(s);
    const l = (u = a.value) == null ? void 0 : u.getAttribute("aria-describedby");
    o && l && (document.getElementById(o) || console.warn(i));
  });
}
const t0 = wv(() => N([]));
function n0() {
  const e = t0();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = jl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = jl(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function jl(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function r0(e) {
  return e.filter((t) => t.tagName !== "A");
}
const na = "focusScope.autoFocusOnMount", ra = "focusScope.autoFocusOnUnmount", ql = { bubbles: !1, cancelable: !0 };
function o0(e, { select: t = !1 } = {}) {
  const n = He();
  for (const r of e)
    if (Kt(r, { select: t }), He() !== n)
      return !0;
}
function a0(e) {
  const t = Md(e), n = Vl(t, e), r = Vl(t.reverse(), e);
  return [n, r];
}
function Md(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Vl(e, t) {
  for (const n of e)
    if (!s0(n, { upTo: t }))
      return n;
}
function s0(e, { upTo: t }) {
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
function i0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = He();
    e.focus({ preventScroll: !0 }), e !== n && i0(e) && t && e.select();
  }
}
const Nd = /* @__PURE__ */ z({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: a } = le(), s = N(null), i = n0(), c = hr({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    st((u) => {
      if (!qt)
        return;
      const d = a.value;
      if (!n.trapped)
        return;
      function y(f) {
        if (c.paused || !d)
          return;
        const v = f.target;
        d.contains(v) ? s.value = v : Kt(s.value, { select: !0 });
      }
      function g(f) {
        if (c.paused || !d)
          return;
        const v = f.relatedTarget;
        v !== null && (d.contains(v) || Kt(s.value, { select: !0 }));
      }
      function p(f) {
        d.contains(s.value) || Kt(d);
      }
      document.addEventListener("focusin", y), document.addEventListener("focusout", g);
      const h = new MutationObserver(p);
      d && h.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", g), h.disconnect();
      });
    }), st(async (u) => {
      const d = a.value;
      if (await De(), !d)
        return;
      i.add(c);
      const y = He();
      if (!d.contains(y)) {
        const p = new CustomEvent(na, ql);
        d.addEventListener(na, (h) => r("mountAutoFocus", h)), d.dispatchEvent(p), p.defaultPrevented || (o0(r0(Md(d)), {
          select: !0
        }), He() === y && Kt(d));
      }
      u(() => {
        d.removeEventListener(na, (f) => r("mountAutoFocus", f));
        const p = new CustomEvent(ra, ql), h = (f) => {
          r("unmountAutoFocus", f);
        };
        d.addEventListener(ra, h), d.dispatchEvent(p), setTimeout(() => {
          p.defaultPrevented || Kt(y ?? document.body, { select: !0 }), d.removeEventListener(ra, h), i.remove(c);
        }, 0);
      });
    });
    function l(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, y = He();
      if (d && y) {
        const g = u.currentTarget, [p, h] = a0(g);
        p && h ? !u.shiftKey && y === h ? (u.preventDefault(), n.loop && Kt(p, { select: !0 })) : u.shiftKey && y === p && (u.preventDefault(), n.loop && Kt(h, { select: !0 })) : y === g && u.preventDefault();
      }
    }
    return (u, d) => (S(), U(m(Pe), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: l
    }, {
      default: _(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), jd = /* @__PURE__ */ z({
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
    const n = e, r = t, o = Tt(), { forwardRef: a, currentElement: s } = le();
    return o.titleId || (o.titleId = yn(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = yn(void 0, "reka-dialog-description")), pe(() => {
      o.contentElement = s, He() !== document.body && (o.triggerElement.value = He());
    }), process.env.NODE_ENV !== "production" && e0({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, c) => (S(), U(m(Nd), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: c[5] || (c[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: c[6] || (c[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: _(() => [
        J(m($i), se({
          id: m(o).contentId,
          ref: m(a),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": m(o).descriptionId,
          "aria-labelledby": m(o).titleId,
          "data-state": m(Ld)(m(o).open.value)
        }, i.$attrs, {
          onDismiss: c[0] || (c[0] = (l) => m(o).onOpenChange(!1)),
          onEscapeKeyDown: c[1] || (c[1] = (l) => r("escapeKeyDown", l)),
          onFocusOutside: c[2] || (c[2] = (l) => r("focusOutside", l)),
          onInteractOutside: c[3] || (c[3] = (l) => r("interactOutside", l)),
          onPointerDownOutside: c[4] || (c[4] = (l) => r("pointerDownOutside", l))
        }), {
          default: _(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var l0 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Tn = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Lr = {}, oa = 0, qd = function(e) {
  return e && (e.host || qd(e.parentNode));
}, u0 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = qd(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, c0 = function(e, t, n, r) {
  var o = u0(t, Array.isArray(e) ? e : [e]);
  Lr[n] || (Lr[n] = /* @__PURE__ */ new WeakMap());
  var a = Lr[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(y) {
      if (i.has(y))
        u(y);
      else
        try {
          var g = y.getAttribute(r), p = g !== null && g !== "false", h = (Tn.get(y) || 0) + 1, f = (a.get(y) || 0) + 1;
          Tn.set(y, h), a.set(y, f), s.push(y), h === 1 && p && Br.set(y, !0), f === 1 && y.setAttribute(n, "true"), p || y.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", y, v);
        }
    });
  };
  return u(t), i.clear(), oa++, function() {
    s.forEach(function(d) {
      var y = Tn.get(d) - 1, g = a.get(d) - 1;
      Tn.set(d, y), a.set(d, g), y || (Br.has(d) || d.removeAttribute(r), Br.delete(d)), g || d.removeAttribute(n);
    }), oa--, oa || (Tn = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Lr = {});
  };
}, d0 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = l0(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), c0(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Vd(e) {
  let t;
  ne(() => wn(e), (n) => {
    n ? t = d0(n) : t && t();
  }), Nt(() => {
    t && t();
  });
}
const f0 = /* @__PURE__ */ z({
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
    const n = e, r = t, o = Tt(), a = Sr(r), { forwardRef: s, currentElement: i } = le();
    return Vd(i), (c, l) => (S(), U(jd, se({ ...n, ...m(a) }, {
      ref: m(s),
      "trap-focus": m(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var d;
        u.defaultPrevented || (u.preventDefault(), (d = m(o).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: l[1] || (l[1] = (u) => {
        const d = u.detail.originalEvent, y = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || y) && u.preventDefault();
      }),
      onFocusOutside: l[2] || (l[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: _(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), p0 = /* @__PURE__ */ z({
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
    const n = e, o = Sr(t);
    le();
    const a = Tt(), s = N(!1), i = N(!1);
    return (c, l) => (S(), U(jd, se({ ...n, ...m(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var d;
        u.defaultPrevented || (s.value || (d = m(a).triggerElement.value) == null || d.focus(), u.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (u) => {
        var g;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const d = u.target;
        ((g = m(a).triggerElement.value) == null ? void 0 : g.contains(d)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && i.value && u.preventDefault();
      })
    }), {
      default: _(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m0 = /* @__PURE__ */ z({
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
    const n = e, r = t, o = Tt(), a = Sr(r), { forwardRef: s } = le();
    return (i, c) => (S(), U(m(wr), {
      present: i.forceMount || m(o).open.value
    }, {
      default: _(() => [
        m(o).modal.value ? (S(), U(f0, se({
          key: 0,
          ref: m(s)
        }, { ...n, ...m(a), ...i.$attrs }), {
          default: _(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (S(), U(p0, se({
          key: 1,
          ref: m(s)
        }, { ...n, ...m(a), ...i.$attrs }), {
          default: _(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), h0 = /* @__PURE__ */ z({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    le();
    const n = Tt();
    return (r, o) => (S(), U(m(Pe), se(t, {
      id: m(n).descriptionId
    }), {
      default: _(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function aa(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ds(e, t, n = ".", r) {
  if (!aa(t))
    return Ds(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (r && r(o, a, s, n) || (Array.isArray(s) && Array.isArray(o[a]) ? o[a] = [...s, ...o[a]] : aa(s) && aa(o[a]) ? o[a] = Ds(
      s,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = s));
  }
  return o;
}
function y0(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => Ds(n, r, "", e), {})
  );
}
const g0 = y0(), v0 = $d(() => {
  const e = N(/* @__PURE__ */ new Map()), t = N(), n = T(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), r = Oi({
    scrollBody: N(!0)
  });
  let o = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Nl && (o == null || o()), t.value = void 0;
  };
  return ne(n, (s, i) => {
    var d;
    if (!qt)
      return;
    if (!s) {
      i && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, l = { padding: c, margin: 0 }, u = (d = r.scrollBody) != null && d.value ? typeof r.scrollBody.value == "object" ? g0({
      padding: r.scrollBody.value.padding === !0 ? c : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? c : r.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), Nl && (o = hn(
      document,
      "touchmove",
      (y) => b0(y),
      { passive: !1 }
    )), De(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function zd(e) {
  const t = Math.random().toString(36).substring(2, 7), n = v0();
  n.value.set(t, e ?? !1);
  const r = T({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return Pv(() => {
    n.value.delete(t);
  }), r;
}
function Ud(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Ud(n);
  }
}
function b0(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Ud(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const w0 = /* @__PURE__ */ z({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Tt();
    return zd(!0), le(), (n, r) => (S(), U(m(Pe), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": m(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), S0 = /* @__PURE__ */ z({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = Tt(), { forwardRef: n } = le();
    return (r, o) => {
      var a;
      return (a = m(t)) != null && a.modal.value ? (S(), U(m(wr), {
        key: 0,
        present: r.forceMount || m(t).open.value
      }, {
        default: _(() => [
          J(w0, se(r.$attrs, {
            ref: m(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: _(() => [
              j(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : Y("", !0);
    };
  }
}), Ti = /* @__PURE__ */ z({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = $v();
    return (n, r) => m(t) || n.forceMount ? (S(), U(Dc, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      j(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : Y("", !0);
  }
});
function Hd(e) {
  const t = vn(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, a) => {
    const s = (t == null ? void 0 : t.type.props[a]).default;
    return s !== void 0 && (o[a] = s), o;
  }, {}), r = em(e);
  return T(() => {
    const o = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((s) => {
      o[Tc(s)] = a[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (r.value[i] !== void 0 && (s[i] = r.value[i]), s), {});
  });
}
function xr(e, t) {
  const n = Hd(e), r = t ? Sr(t) : {};
  return T(() => ({
    ...n.value,
    ...r
  }));
}
const x0 = /* @__PURE__ */ z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = Tt();
    return le(), (r, o) => (S(), U(m(Pe), se(t, {
      id: m(n).titleId
    }), {
      default: _(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), C0 = /* @__PURE__ */ z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Tt(), { forwardRef: r, currentElement: o } = le();
    return n.contentId || (n.contentId = yn(void 0, "reka-dialog-content")), pe(() => {
      n.triggerElement.value = o.value;
    }), (a, s) => (S(), U(m(Pe), se(t, {
      ref: m(r),
      type: a.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": m(n).open.value || !1,
      "aria-controls": m(n).open.value ? m(n).contentId : void 0,
      "data-state": m(n).open.value ? "open" : "closed",
      onClick: m(n).onOpenToggle
    }), {
      default: _(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
function Fs() {
  const e = N(), t = T(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : wn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
function O0(e) {
  return T(() => {
    var t;
    return Ev(e) ? !!((t = wn(e)) != null && t.closest("form")) : !0;
  });
}
const zl = "data-reka-collection-item";
function Wd(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = N(/* @__PURE__ */ new Map());
    o = {
      collectionRef: N(),
      itemMap: u
    }, yo(r, o);
  } else
    o = Js(r);
  const a = (u = !1) => {
    const d = o.collectionRef.value;
    if (!d)
      return [];
    const y = Array.from(d.querySelectorAll(`[${zl}]`)), p = Array.from(o.itemMap.value.values()).sort(
      (h, f) => y.indexOf(h.ref) - y.indexOf(f.ref)
    );
    return u ? p : p.filter((h) => h.ref.dataset.disabled !== "");
  }, s = z({
    name: "CollectionSlot",
    setup(u, { slots: d }) {
      const { primitiveElement: y, currentElement: g } = Fs();
      return ne(g, () => {
        o.collectionRef.value = g.value;
      }), () => qe(ks, { ref: y }, d);
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
    setup(u, { slots: d, attrs: y }) {
      const { primitiveElement: g, currentElement: p } = Fs();
      return st((h) => {
        if (p.value) {
          const f = os(p.value);
          o.itemMap.value.set(f, { ref: p.value, value: u.value }), h(() => o.itemMap.value.delete(f));
        }
      }), () => qe(ks, { ...y, [zl]: "", ref: g }, d);
    }
  }), c = T(() => Array.from(o.itemMap.value.values())), l = T(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: c, itemMapSize: l, CollectionSlot: s, CollectionItem: i };
}
const A0 = "rovingFocusGroup.onEntryFocus", E0 = { bubbles: !1, cancelable: !0 };
function P0(e, t = !1) {
  const n = He();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), He() !== n))
      return;
}
const [UO, k0] = rt("RovingFocusGroup"), $0 = /* @__PURE__ */ z({
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
    const r = e, o = n, { loop: a, orientation: s, dir: i } = kt(r), c = Ai(i), l = Sn(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), u = N(!1), d = N(!1), y = N(0), { getItems: g, CollectionSlot: p } = Wd({ isProvider: !0 });
    function h(v) {
      const w = !d.value;
      if (v.currentTarget && v.target === v.currentTarget && w && !u.value) {
        const O = new CustomEvent(A0, E0);
        if (v.currentTarget.dispatchEvent(O), o("entryFocus", O), !O.defaultPrevented) {
          const P = g().map((W) => W.ref).filter((W) => W.dataset.disabled !== ""), F = P.find((W) => W.getAttribute("data-active") === ""), H = P.find(
            (W) => W.id === l.value
          ), A = [F, H, ...P].filter(
            Boolean
          );
          P0(A, r.preventScrollOnEntryFocus);
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
      getItems: g
    }), k0({
      loop: a,
      dir: c,
      orientation: s,
      currentTabStopId: l,
      onItemFocus: (v) => {
        l.value = v;
      },
      onItemShiftTab: () => {
        u.value = !0;
      },
      onFocusableItemAdd: () => {
        y.value++;
      },
      onFocusableItemRemove: () => {
        y.value--;
      }
    }), (v, w) => (S(), U(m(p), null, {
      default: _(() => [
        J(m(Pe), {
          tabindex: u.value || y.value === 0 ? -1 : 0,
          "data-orientation": m(s),
          as: v.as,
          "as-child": v.asChild,
          dir: m(c),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = (O) => d.value = !0),
          onMouseup: f,
          onFocus: h,
          onBlur: w[1] || (w[1] = (O) => u.value = !1)
        }, {
          default: _(() => [
            j(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), Ul = /* @__PURE__ */ z({
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
    const t = e, { primitiveElement: n, currentElement: r } = Fs(), o = T(() => t.checked ?? t.value);
    return ne(o, (a, s) => {
      if (!r.value)
        return;
      const i = r.value, c = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(c, "value").set;
      if (u && a !== s) {
        const d = new Event("input", { bubbles: !0 }), y = new Event("change", { bubbles: !0 });
        u.call(i, a), i.dispatchEvent(d), i.dispatchEvent(y);
      }
    }), (a, s) => (S(), U(kd, se({
      ref_key: "primitiveElement",
      ref: n
    }, { ...t, ...a.$attrs }, { as: "input" }), null, 16));
  }
}), T0 = /* @__PURE__ */ z({
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
    const t = e, n = T(
      () => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required
    ), r = T(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((o, a) => typeof o == "object" ? Object.entries(o).map(([s, i]) => ({ name: `[${t.name}][${a}][${s}]`, value: i })) : { name: `[${t.name}][${a}]`, value: o }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([o, a]) => ({ name: `[${t.name}][${o}]`, value: a })) : []);
    return (o, a) => n.value ? (S(), U(Ul, se({ key: o.name }, { ...t, ...o.$attrs }, {
      name: o.name,
      value: o.value
    }), null, 16, ["name", "value"])) : (S(!0), k(re, { key: 1 }, ge(r.value, (s) => (S(), U(Ul, se({
      key: s.name,
      ref_for: !0
    }, { ...t, ...o.$attrs }, {
      name: s.name,
      value: s.value
    }), null, 16, ["name", "value"]))), 128));
  }
}), [Kd, D0] = rt("PopperRoot"), Gd = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = N();
    return D0({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => j(n.$slots, "default");
  }
}), Yd = /* @__PURE__ */ z({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = le(), o = Kd();
    return Fc(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (a, s) => (S(), U(m(Pe), {
      ref: m(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: _(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), F0 = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, R0 = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, _0 = /* @__PURE__ */ z({
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
    return le(), (n, r) => (S(), U(m(Pe), se(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: _(() => [
        j(n.$slots, "default", {}, () => [
          n.rounded ? (S(), k("path", R0)) : (S(), k("path", F0))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
function I0(e) {
  return e !== null;
}
function B0(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var f, v, w;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((f = o.arrow) == null ? void 0 : f.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, u] = Rs(n), d = { start: "0%", center: "50%", end: "100%" }[u], y = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + i / 2, g = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
      let p = "", h = "";
      return l === "bottom" ? (p = s ? d : `${y}px`, h = `${-c}px`) : l === "top" ? (p = s ? d : `${y}px`, h = `${r.floating.height + c}px`) : l === "right" ? (p = `${-c}px`, h = s ? d : `${g}px`) : l === "left" && (p = `${r.floating.width + c}px`, h = s ? d : `${g}px`), { data: { x: p, y: h } };
    }
  };
}
function Rs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function L0(e) {
  const t = N(), n = T(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = T(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return pe(() => {
    const o = wn(e);
    if (o) {
      t.value = { width: o.offsetWidth, height: o.offsetHeight };
      const a = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let c, l;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, d = Array.isArray(u) ? u[0] : u;
          c = d.inlineSize, l = d.blockSize;
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
const Xd = {
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
}, [M0, N0] = rt("PopperContent"), Jd = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Rc({
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
    ...Xd
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Kd(), { forwardRef: a, currentElement: s } = le(), i = N(), c = N(), { width: l, height: u } = L0(c), d = T(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), y = T(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), g = T(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), p = T(() => ({
      padding: y.value,
      boundary: g.value.filter(I0),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: g.value.length > 0
    })), h = vv(() => [
      iv({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && Ll({
        ...p.value
      }),
      n.avoidCollisions && lv({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? fv() : void 0,
        ...p.value
      }),
      !n.prioritizePosition && n.avoidCollisions && Ll({
        ...p.value
      }),
      uv({
        ...p.value,
        apply: ({ elements: V, rects: b, availableWidth: E, availableHeight: C }) => {
          const { width: x, height: K } = b.reference, L = V.floating.style;
          L.setProperty(
            "--reka-popper-available-width",
            `${E}px`
          ), L.setProperty(
            "--reka-popper-available-height",
            `${C}px`
          ), L.setProperty(
            "--reka-popper-anchor-width",
            `${x}px`
          ), L.setProperty(
            "--reka-popper-anchor-height",
            `${K}px`
          );
        }
      }),
      c.value && hv({ element: c.value, padding: n.arrowPadding }),
      B0({
        arrowWidth: l.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && cv({ strategy: "referenceHidden", ...p.value })
    ]), f = T(() => n.reference ?? o.anchor.value), { floatingStyles: v, placement: w, isPositioned: O, middlewareData: P } = yv(
      f,
      i,
      {
        strategy: n.positionStrategy,
        placement: d,
        whileElementsMounted: (...V) => sv(...V, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: h
      }
    ), F = T(
      () => Rs(w.value)[0]
    ), H = T(
      () => Rs(w.value)[1]
    );
    Fc(() => {
      O.value && r("placed");
    });
    const A = T(
      () => {
        var V;
        return ((V = P.value.arrow) == null ? void 0 : V.centerOffset) !== 0;
      }
    ), W = N("");
    st(() => {
      s.value && (W.value = window.getComputedStyle(s.value).zIndex);
    });
    const B = T(() => {
      var V;
      return ((V = P.value.arrow) == null ? void 0 : V.x) ?? 0;
    }), $ = T(() => {
      var V;
      return ((V = P.value.arrow) == null ? void 0 : V.y) ?? 0;
    });
    return N0({
      placedSide: F,
      onArrowChange: (V) => c.value = V,
      arrowX: B,
      arrowY: $,
      shouldHideArrow: A
    }), (V, b) => {
      var E, C, x;
      return S(), k("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: et({
          ...m(v),
          transform: m(O) ? m(v).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: W.value,
          "--reka-popper-transform-origin": [
            (E = m(P).transformOrigin) == null ? void 0 : E.x,
            (C = m(P).transformOrigin) == null ? void 0 : C.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((x = m(P).hide) == null ? void 0 : x.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        J(m(Pe), se({ ref: m(a) }, V.$attrs, {
          "as-child": n.asChild,
          as: V.as,
          "data-side": F.value,
          "data-align": H.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: m(O) ? void 0 : "none"
          }
        }), {
          default: _(() => [
            j(V.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), j0 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, q0 = /* @__PURE__ */ z({
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
    const { forwardRef: t } = le(), n = M0(), r = T(() => j0[n.placedSide.value]);
    return (o, a) => {
      var s, i, c, l;
      return S(), k("span", {
        ref: (u) => {
          m(n).onArrowChange(u);
        },
        style: et({
          position: "absolute",
          left: (s = m(n).arrowX) != null && s.value ? `${(i = m(n).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (c = m(n).arrowY) != null && c.value ? `${(l = m(n).arrowY) == null ? void 0 : l.value}px` : void 0,
          [r.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[m(n).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[m(n).placedSide.value],
          visibility: m(n).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        J(_0, se(o.$attrs, {
          ref: m(t),
          style: {
            display: "block"
          },
          as: o.as,
          "as-child": o.asChild,
          rounded: o.rounded,
          width: o.width,
          height: o.height
        }), {
          default: _(() => [
            j(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
function V0(e) {
  const t = Td("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, a) => {
      t.value = t.value + o;
      {
        const s = He(), i = a.map((y) => {
          var g, p;
          return {
            ...y,
            textValue: ((g = y.value) == null ? void 0 : g.textValue) ?? ((p = y.ref.textContent) == null ? void 0 : p.trim()) ?? ""
          };
        }), c = i.find((y) => y.ref === s), l = i.map((y) => y.textValue), u = U0(l, t.value, c == null ? void 0 : c.textValue), d = i.find((y) => y.textValue === u);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function z0(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function U0(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = z0(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function H0() {
  const e = N(!1);
  return pe(() => {
    hn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), hn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const W0 = $d(H0), [Eo, K0] = rt(["MenuRoot", "MenuSub"], "MenuContext"), [Di, G0] = rt("MenuRoot"), Y0 = /* @__PURE__ */ z({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: a } = kt(n), s = Ai(a), i = Sn(n, "open", r), c = N(), l = W0();
    return K0({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), G0({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: s,
      modal: o
    }), (u, d) => (S(), U(m(Gd), null, {
      default: _(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let sa = 0;
function X0() {
  st((e) => {
    if (!qt)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Hl()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Hl()
    ), sa++, e(() => {
      sa === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), sa--;
    });
  });
}
function Hl() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [Qd, J0] = rt("MenuContent"), Zd = /* @__PURE__ */ z({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Rc({
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
    ...Xd
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Eo(), a = Di(), { trapFocus: s, disableOutsidePointerEvents: i, loop: c } = kt(n);
    X0(), zd(i.value);
    const l = N(""), u = N(0), d = N(0), y = N(null), g = N("right"), p = N(0), h = N(null), f = N(), { forwardRef: v, currentElement: w } = le(), { handleTypeaheadSearch: O } = V0();
    ne(w, (B) => {
      o.onContentChange(B);
    }), Nt(() => {
      window.clearTimeout(u.value);
    });
    function P(B) {
      var V, b;
      return g.value === ((V = y.value) == null ? void 0 : V.side) && Jv(B, (b = y.value) == null ? void 0 : b.area);
    }
    async function F(B) {
      var $;
      r("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), ($ = w.value) == null || $.focus({
        preventScroll: !0
      }));
    }
    function H(B) {
      var L;
      if (B.defaultPrevented)
        return;
      const V = B.target.closest("[data-reka-menu-content]") === B.currentTarget, b = B.ctrlKey || B.altKey || B.metaKey, E = B.key.length === 1, C = Iv(
        B,
        He(),
        w.value,
        {
          loop: c.value,
          arrowKeyOptions: "vertical",
          dir: a == null ? void 0 : a.dir.value,
          focus: !0,
          attributeName: "[data-reka-collection-item]:not([data-disabled])"
        }
      );
      if (C)
        return C == null ? void 0 : C.focus();
      if (B.code === "Space")
        return;
      const x = ((L = f.value) == null ? void 0 : L.getItems()) ?? [];
      if (V && (B.key === "Tab" && B.preventDefault(), !b && E && O(B.key, x)), B.target !== w.value || !Gv.includes(B.key))
        return;
      B.preventDefault();
      const K = [...x.map((R) => R.ref)];
      Bd.includes(B.key) && K.reverse(), Yv(K);
    }
    function A(B) {
      var $, V;
      (V = ($ = B == null ? void 0 : B.currentTarget) == null ? void 0 : $.contains) != null && V.call($, B.target) || (window.clearTimeout(u.value), l.value = "");
    }
    function W(B) {
      var b;
      if (!Ts(B))
        return;
      const $ = B.target, V = p.value !== B.clientX;
      if ((b = B == null ? void 0 : B.currentTarget) != null && b.contains($) && V) {
        const E = B.clientX > p.value ? "right" : "left";
        g.value = E, p.value = B.clientX;
      }
    }
    return J0({
      onItemEnter: (B) => !!P(B),
      onItemLeave: (B) => {
        var $;
        P(B) || (($ = w.value) == null || $.focus(), h.value = null);
      },
      onTriggerLeave: (B) => !!P(B),
      searchRef: l,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (B) => {
        y.value = B;
      }
    }), (B, $) => (S(), U(m(Nd), {
      "as-child": "",
      trapped: m(s),
      onMountAutoFocus: F,
      onUnmountAutoFocus: $[7] || ($[7] = (V) => r("closeAutoFocus", V))
    }, {
      default: _(() => [
        J(m($i), {
          "as-child": "",
          "disable-outside-pointer-events": m(i),
          onEscapeKeyDown: $[2] || ($[2] = (V) => r("escapeKeyDown", V)),
          onPointerDownOutside: $[3] || ($[3] = (V) => r("pointerDownOutside", V)),
          onFocusOutside: $[4] || ($[4] = (V) => r("focusOutside", V)),
          onInteractOutside: $[5] || ($[5] = (V) => r("interactOutside", V)),
          onDismiss: $[6] || ($[6] = (V) => r("dismiss"))
        }, {
          default: _(() => [
            J(m($0), {
              ref_key: "rovingFocusGroupRef",
              ref: f,
              "current-tab-stop-id": h.value,
              "onUpdate:currentTabStopId": $[0] || ($[0] = (V) => h.value = V),
              "as-child": "",
              orientation: "vertical",
              dir: m(a).dir.value,
              loop: m(c),
              onEntryFocus: $[1] || ($[1] = (V) => {
                r("entryFocus", V), m(a).isUsingKeyboardRef.value || V.preventDefault();
              })
            }, {
              default: _(() => [
                J(m(Jd), {
                  ref: m(v),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-reka-menu-content": "",
                  "data-state": m(Ld)(m(o).open.value),
                  dir: m(a).dir.value,
                  side: B.side,
                  "side-offset": B.sideOffset,
                  align: B.align,
                  "align-offset": B.alignOffset,
                  "avoid-collisions": B.avoidCollisions,
                  "collision-boundary": B.collisionBoundary,
                  "collision-padding": B.collisionPadding,
                  "arrow-padding": B.arrowPadding,
                  "prioritize-position": B.prioritizePosition,
                  "position-strategy": B.positionStrategy,
                  "update-position-strategy": B.updatePositionStrategy,
                  sticky: B.sticky,
                  "hide-when-detached": B.hideWhenDetached,
                  reference: B.reference,
                  onKeydown: H,
                  onBlur: A,
                  onPointermove: W
                }, {
                  default: _(() => [
                    j(B.$slots, "default")
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
}), Q0 = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Qd(), { forwardRef: r } = le(), { CollectionItem: o } = Wd(), a = N(!1);
    async function s(c) {
      if (!c.defaultPrevented && Ts(c)) {
        if (t.disabled)
          n.onItemLeave(c);
        else if (!n.onItemEnter(c)) {
          const u = c.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(c) {
      await De(), !c.defaultPrevented && Ts(c) && n.onItemLeave(c);
    }
    return (c, l) => (S(), U(m(o), {
      value: { textValue: c.textValue }
    }, {
      default: _(() => [
        J(m(Pe), se({
          ref: m(r),
          role: "menuitem",
          tabindex: "-1"
        }, c.$attrs, {
          as: c.as,
          "as-child": c.asChild,
          "aria-disabled": c.disabled || void 0,
          "data-disabled": c.disabled ? "" : void 0,
          "data-highlighted": a.value ? "" : void 0,
          onPointermove: s,
          onPointerleave: i,
          onFocus: l[0] || (l[0] = async (u) => {
            await De(), !(u.defaultPrevented || c.disabled) && (a.value = !0);
          }),
          onBlur: l[1] || (l[1] = async (u) => {
            await De(), !u.defaultPrevented && (a.value = !1);
          })
        }), {
          default: _(() => [
            j(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Z0 = /* @__PURE__ */ z({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = le(), s = Di(), i = Qd(), c = N(!1);
    async function l() {
      const u = a.value;
      if (!n.disabled && u) {
        const d = new CustomEvent(Wv, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", d), await De(), d.defaultPrevented ? c.value = !1 : s.onClose();
      }
    }
    return (u, d) => (S(), U(Q0, se(n, {
      ref: m(o),
      onClick: l,
      onPointerdown: d[0] || (d[0] = () => {
        c.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (y) => {
        var g;
        await De(), !y.defaultPrevented && (c.value || (g = y.currentTarget) == null || g.click());
      }),
      onKeydown: d[2] || (d[2] = async (y) => {
        const g = m(i).searchRef.value !== "";
        u.disabled || g && y.key === " " || m($s).includes(y.key) && (y.currentTarget.click(), y.preventDefault());
      })
    }), {
      default: _(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), eb = /* @__PURE__ */ z({
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
    const n = e, r = t, o = xr(n, r), a = Eo(), { forwardRef: s, currentElement: i } = le();
    return Vd(i), (c, l) => (S(), U(Zd, se(m(o), {
      ref: m(s),
      "trap-focus": m(a).open.value,
      "disable-outside-pointer-events": m(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (u) => m(a).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = dt((u) => r("focusOutside", u), ["prevent"]))
    }), {
      default: _(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), tb = /* @__PURE__ */ z({
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
    const o = xr(e, t), a = Eo();
    return (s, i) => (S(), U(Zd, se(m(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (c) => m(a).onOpenChange(!1))
    }), {
      default: _(() => [
        j(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nb = /* @__PURE__ */ z({
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
    const o = xr(e, t), a = Eo(), s = Di();
    return (i, c) => (S(), U(m(wr), {
      present: i.forceMount || m(a).open.value
    }, {
      default: _(() => [
        m(s).modal.value ? (S(), U(eb, be(se({ key: 0 }, { ...i.$attrs, ...m(o) })), {
          default: _(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (S(), U(tb, be(se({ key: 1 }, { ...i.$attrs, ...m(o) })), {
          default: _(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rb = /* @__PURE__ */ z({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), U(m(Ti), be(Ae(t)), {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ob = /* @__PURE__ */ z({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), U(m(Pe), se(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ab = /* @__PURE__ */ z({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), U(m(Yd), be(Ae(t)), {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sb = /* @__PURE__ */ z({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), U(m(Ti), be(Ae(t)), {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ef, ib] = rt("DropdownMenuRoot"), tf = /* @__PURE__ */ z({
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
    le();
    const o = Sn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = N(), { modal: s, dir: i } = kt(n), c = Ai(i);
    return ib({
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
      modal: s,
      dir: c
    }), (l, u) => (S(), U(m(Y0), {
      open: m(o),
      "onUpdate:open": u[0] || (u[0] = (d) => Wt(o) ? o.value = d : null),
      dir: m(c),
      modal: m(s)
    }, {
      default: _(() => [
        j(l.$slots, "default", { open: m(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), nf = /* @__PURE__ */ z({
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
    const o = xr(e, t);
    le();
    const a = ef(), s = N(!1);
    function i(c) {
      c.defaultPrevented || (s.value || setTimeout(() => {
        var l;
        (l = a.triggerElement.value) == null || l.focus();
      }, 0), s.value = !1, c.preventDefault());
    }
    return a.contentId || (a.contentId = yn(void 0, "reka-dropdown-menu-content")), (c, l) => {
      var u;
      return S(), U(m(nb), se(m(o), {
        id: m(a).contentId,
        "aria-labelledby": (u = m(a)) == null ? void 0 : u.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: l[0] || (l[0] = (d) => {
          var h;
          if (d.defaultPrevented) return;
          const y = d.detail.originalEvent, g = y.button === 0 && y.ctrlKey === !0, p = y.button === 2 || g;
          (!m(a).modal.value || p) && (s.value = !0), (h = m(a).triggerElement.value) != null && h.contains(d.target) && d.preventDefault();
        })
      }), {
        default: _(() => [
          j(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), lb = /* @__PURE__ */ z({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Sr(t);
    return le(), (a, s) => (S(), U(m(Z0), be(Ae({ ...n, ...m(o) })), {
      default: _(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rf = /* @__PURE__ */ z({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), U(m(rb), be(Ae(t)), {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ub = /* @__PURE__ */ z({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (S(), U(m(ob), be(Ae(t)), {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), of = /* @__PURE__ */ z({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = ef(), { forwardRef: r, currentElement: o } = le();
    return pe(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = yn(void 0, "reka-dropdown-menu-trigger")), (a, s) => (S(), U(m(ab), { "as-child": "" }, {
      default: _(() => [
        J(m(Pe), {
          id: m(n).triggerId,
          ref: m(r),
          type: a.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: a.as,
          "aria-haspopup": "menu",
          "aria-expanded": m(n).open.value,
          "aria-controls": m(n).open.value ? m(n).contentId : void 0,
          "data-disabled": a.disabled ? "" : void 0,
          disabled: a.disabled,
          "data-state": m(n).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var c;
            !a.disabled && i.button === 0 && i.ctrlKey === !1 && ((c = m(n)) == null || c.onOpenToggle(), await De(), m(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = Gt(
            (i) => {
              a.disabled || (["Enter", " "].includes(i.key) && m(n).onOpenToggle(), i.key === "ArrowDown" && m(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: _(() => [
            j(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
function cb(e, t) {
  const n = Td(!1, 300), r = N(null), o = bv();
  function a() {
    r.value = null, n.value = !1;
  }
  function s(i, c) {
    const l = i.currentTarget, u = { x: i.clientX, y: i.clientY }, d = db(u, l.getBoundingClientRect()), y = fb(u, d), g = pb(c.getBoundingClientRect()), p = hb([...y, ...g]);
    r.value = p, n.value = !0;
  }
  return st((i) => {
    if (e.value && t.value) {
      const c = (u) => s(u, t.value), l = (u) => s(u, e.value);
      e.value.addEventListener("pointerleave", c), t.value.addEventListener("pointerleave", l), i(() => {
        var u, d;
        (u = e.value) == null || u.removeEventListener("pointerleave", c), (d = t.value) == null || d.removeEventListener("pointerleave", l);
      });
    }
  }), st((i) => {
    var c;
    if (r.value) {
      const l = (u) => {
        var f, v;
        if (!r.value || !(u.target instanceof HTMLElement))
          return;
        const d = u.target, y = { x: u.clientX, y: u.clientY }, g = ((f = e.value) == null ? void 0 : f.contains(d)) || ((v = t.value) == null ? void 0 : v.contains(d)), p = !mb(y, r.value), h = !!d.closest("[data-grace-area-trigger]");
        g ? a() : (p || h) && (a(), o.trigger());
      };
      (c = e.value) == null || c.ownerDocument.addEventListener("pointermove", l), i(() => {
        var u;
        return (u = e.value) == null ? void 0 : u.ownerDocument.removeEventListener("pointermove", l);
      });
    }
  }), {
    isPointerInTransit: n,
    onPointerExit: o.on
  };
}
function db(e, t) {
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
function fb(e, t, n = 5) {
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
function pb(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function mb(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function hb(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), yb(t);
}
function yb(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
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
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x))
        n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const [gb, vb] = rt("SwitchRoot"), bb = /* @__PURE__ */ z({
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
    const n = e, r = t, { disabled: o } = kt(n), a = Sn(n, "modelValue", r, {
      defaultValue: n.defaultValue,
      passive: n.modelValue === void 0
    });
    function s() {
      o.value || (a.value = !a.value);
    }
    const { forwardRef: i, currentElement: c } = le(), l = O0(c), u = T(() => {
      var d;
      return n.id && c.value ? (d = document.querySelector(`[for="${n.id}"]`)) == null ? void 0 : d.innerText : void 0;
    });
    return vb({
      modelValue: a,
      toggleCheck: s,
      disabled: o
    }), (d, y) => (S(), U(m(Pe), se(d.$attrs, {
      id: d.id,
      ref: m(i),
      role: "switch",
      type: d.as === "button" ? "button" : void 0,
      value: d.value,
      "aria-label": d.$attrs["aria-label"] || u.value,
      "aria-checked": m(a),
      "aria-required": d.required,
      "data-state": m(a) ? "checked" : "unchecked",
      "data-disabled": m(o) ? "" : void 0,
      "as-child": d.asChild,
      as: d.as,
      disabled: m(o),
      onClick: s,
      onKeydown: Gt(dt(s, ["prevent"]), ["enter"])
    }), {
      default: _(() => [
        j(d.$slots, "default", { modelValue: m(a) }),
        m(l) && d.name ? (S(), U(m(T0), {
          key: 0,
          type: "checkbox",
          name: d.name,
          disabled: m(o),
          required: d.required,
          value: d.value,
          checked: !!m(a)
        }, null, 8, ["name", "disabled", "required", "value", "checked"])) : Y("", !0)
      ]),
      _: 3
    }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]));
  }
}), wb = /* @__PURE__ */ z({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    const t = gb();
    return le(), (n, r) => {
      var o;
      return S(), U(m(Pe), {
        "data-state": (o = m(t).modelValue) != null && o.value ? "checked" : "unchecked",
        "data-disabled": m(t).disabled.value ? "" : void 0,
        "as-child": n.asChild,
        as: n.as
      }, {
        default: _(() => [
          j(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), Sb = /* @__PURE__ */ z({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (S(), U(m(q0), be(Ae(t)), {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), af = "tooltip.open", [Fi, xb] = rt("TooltipProvider"), Cb = /* @__PURE__ */ z({
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
    const t = e, { delayDuration: n, skipDelayDuration: r, disableHoverableContent: o, disableClosingTrigger: a, ignoreNonKeyboardFocus: s, disabled: i } = kt(t);
    le();
    const c = N(!0), l = N(!1), { start: u, stop: d } = Dd(() => {
      c.value = !0;
    }, r, { immediate: !1 });
    return xb({
      isOpenDelayed: c,
      delayDuration: n,
      onOpen() {
        d(), c.value = !1;
      },
      onClose() {
        u();
      },
      isPointerInTransitRef: l,
      disableHoverableContent: o,
      disableClosingTrigger: a,
      disabled: i,
      ignoreNonKeyboardFocus: s
    }), (y, g) => j(y.$slots, "default");
  }
}), [Po, Ob] = rt("TooltipRoot"), Ab = /* @__PURE__ */ z({
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
    le();
    const o = Fi(), a = T(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = T(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = T(() => n.disabled ?? o.disabled.value), c = T(() => n.delayDuration ?? o.delayDuration.value), l = T(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = Sn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    ne(u, (O) => {
      o.onClose && (O ? (o.onOpen(), document.dispatchEvent(new CustomEvent(af))) : o.onClose());
    });
    const d = N(!1), y = N(), g = T(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: p, stop: h } = Dd(() => {
      d.value = !0, u.value = !0;
    }, c, { immediate: !1 });
    function f() {
      h(), d.value = !1, u.value = !0;
    }
    function v() {
      h(), u.value = !1;
    }
    function w() {
      p();
    }
    return Ob({
      contentId: "",
      open: u,
      stateAttribute: g,
      trigger: y,
      onTriggerChange(O) {
        y.value = O;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? w() : f();
      },
      onTriggerLeave() {
        a.value ? v() : h();
      },
      onOpen: f,
      onClose: v,
      disableHoverableContent: a,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (O, P) => (S(), U(m(Gd), null, {
      default: _(() => [
        j(O.$slots, "default", { open: m(u) })
      ]),
      _: 3
    }));
  }
}), sf = /* @__PURE__ */ z({
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
    const n = e, r = t, o = Po(), { forwardRef: a } = le(), s = tm(), i = T(() => {
      var u;
      return (u = s.default) == null ? void 0 : u.call(s, {});
    }), c = T(() => {
      var y;
      if (n.ariaLabel)
        return n.ariaLabel;
      let u = "";
      function d(g) {
        typeof g.children == "string" && g.type !== Pc ? u += g.children : Array.isArray(g.children) && g.children.forEach((p) => d(p));
      }
      return (y = i.value) == null || y.forEach((g) => d(g)), u;
    }), l = T(() => {
      const { ariaLabel: u, ...d } = n;
      return d;
    });
    return pe(() => {
      hn(window, "scroll", (u) => {
        const d = u.target;
        d != null && d.contains(o.trigger.value) && o.onClose();
      }), hn(window, af, o.onClose);
    }), (u, d) => (S(), U(m($i), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: d[0] || (d[0] = (y) => r("escapeKeyDown", y)),
      onPointerDownOutside: d[1] || (d[1] = (y) => {
        var g;
        m(o).disableClosingTrigger.value && ((g = m(o).trigger.value) != null && g.contains(y.target)) && y.preventDefault(), r("pointerDownOutside", y);
      }),
      onFocusOutside: d[2] || (d[2] = dt(() => {
      }, ["prevent"])),
      onDismiss: d[3] || (d[3] = (y) => m(o).onClose())
    }, {
      default: _(() => [
        J(m(Jd), se({
          ref: m(a),
          "data-state": m(o).stateAttribute.value
        }, { ...u.$attrs, ...l.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: _(() => [
            j(u.$slots, "default"),
            J(m(kd), {
              id: m(o).contentId,
              role: "tooltip"
            }, {
              default: _(() => [
                ce(Z(c.value), 1)
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
}), Eb = /* @__PURE__ */ z({
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
    const n = Hd(e), { forwardRef: r, currentElement: o } = le(), { trigger: a, onClose: s } = Po(), i = Fi(), { isPointerInTransit: c, onPointerExit: l } = cb(a, o);
    return i.isPointerInTransitRef = c, l(() => {
      s();
    }), (u, d) => (S(), U(sf, se({ ref: m(r) }, m(n)), {
      default: _(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pb = /* @__PURE__ */ z({
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
    const n = e, r = t, o = Po(), a = xr(n, r), { forwardRef: s } = le();
    return (i, c) => (S(), U(m(wr), {
      present: i.forceMount || m(o).open.value
    }, {
      default: _(() => [
        (S(), U(Vr(m(o).disableHoverableContent.value ? sf : Eb), se({ ref: m(s) }, m(a)), {
          default: _(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), kb = /* @__PURE__ */ z({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(), U(m(Ti), be(Ae(t)), {
      default: _(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $b = /* @__PURE__ */ z({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Po(), r = Fi();
    n.contentId || (n.contentId = yn(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: a } = le(), s = N(!1), i = N(!1), c = T(() => n.disabled.value ? {} : {
      click: h,
      focus: g,
      pointermove: d,
      pointerleave: y,
      pointerdown: u,
      blur: p
    });
    pe(() => {
      n.onTriggerChange(a.value);
    });
    function l() {
      setTimeout(() => {
        s.value = !1;
      }, 1);
    }
    function u() {
      n.open && n.onClose(), s.value = !0, document.addEventListener("pointerup", l, { once: !0 });
    }
    function d(f) {
      f.pointerType !== "touch" && !i.value && !r.isPointerInTransitRef.value && (n.onTriggerEnter(), i.value = !0);
    }
    function y() {
      n.onTriggerLeave(), i.value = !1;
    }
    function g(f) {
      var v, w;
      s.value || n.ignoreNonKeyboardFocus.value && !((w = (v = f.target).matches) != null && w.call(v, ":focus-visible")) || n.onOpen();
    }
    function p() {
      n.onClose();
    }
    function h() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (f, v) => (S(), U(m(Yd), {
      "as-child": "",
      reference: f.reference
    }, {
      default: _(() => [
        J(m(Pe), se({
          ref: m(o),
          "aria-describedby": m(n).open.value ? m(n).contentId : void 0,
          "data-state": m(n).stateAttribute.value,
          as: f.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, _c(c.value)), {
          default: _(() => [
            j(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), Tb = { class: "flex items-center" }, Db = {
  key: 1,
  class: "mr-1"
}, Fb = {
  key: 3,
  class: "ml-1"
}, Rb = /* @__PURE__ */ z({
  __name: "Switch",
  props: /* @__PURE__ */ mt({
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
  emits: /* @__PURE__ */ mt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    function a(h) {
      return h.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = N(!1), i = qn(e, "modelValue"), c = N(!1), l = N(!1), u = N(!1);
    pe(() => {
      var f;
      s.value = !r.form;
      const h = s.value ? !!i.value : !!((f = r.form) != null && f[r.field]);
      c.value = h, l.value = h;
    }), ne(
      () => c.value,
      (h, f) => {
        if (h !== f) {
          if (s.value ? i.value = h : r.form && r.field && (r.form[r.field] = h), l.value = f, o("update:modelValue", h), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: h, old_value: f });
        }
      }
    ), ne(
      () => r.field && r.form ? r.form[r.field] : null,
      (h) => {
        c.value = s.value ? !!i.value : !!h;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (h) => {
        c.value = !!h;
      }
    );
    const d = T(() => r.label || (r.field ? a(r.field) : "")), y = T(() => {
      var h, f;
      return r.error || ((f = (h = r.form) == null ? void 0 : h.errors) == null ? void 0 : f[r.field]);
    });
    return t({
      setValueSilently: (h) => {
        c.value = !!h, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (h, f) => {
      var v, w;
      return S(), k("div", {
        class: Q(h.noLabel ? "mb-2" : "mb-4")
      }, [
        h.noLabel ? Y("", !0) : (S(), U(m(zn), {
          key: 0,
          customClass: h.labelCustomClass,
          for: h.field,
          value: d.value,
          sublabel: h.sublabel,
          required: h.required,
          tooltip: h.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        D("label", Tb, [
          (v = h.$slots) != null && v.leftDescription ? j(h.$slots, "leftDescription", { key: 0 }) : h.leftDescription ? (S(), k("span", Db, Z(h.leftDescription === !0 ? "Disable" : h.leftDescription), 1)) : Y("", !0),
          J(m(bb), {
            id: h.field,
            checked: c.value,
            "onUpdate:checked": f[0] || (f[0] = (O) => c.value = O),
            name: h.name || h.field,
            required: h.required,
            disabled: h.disabled,
            "aria-label": d.value || void 0,
            class: Q(["focus-visible:ring-primary data-[state=checked]:bg-primary relative mx-2 ml-0 inline-flex h-6 w-12 flex-none items-center rounded-xl bg-gray-300 shadow transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50", h.customClass])
          }, {
            default: _(() => [
              J(m(wb), { class: "pointer-events-none block h-[1.25rem] w-[1.25rem] translate-x-[0.125rem] rounded-full bg-white shadow transition-transform duration-150 will-change-transform data-[state=checked]:translate-x-[1.625rem]" })
            ]),
            _: 1
          }, 8, ["id", "checked", "name", "required", "disabled", "aria-label", "class"]),
          (w = h.$slots) != null && w.rightDescription ? j(h.$slots, "rightDescription", { key: 2 }) : h.rightDescription ? (S(), k("span", Fb, Z(h.rightDescription === !0 ? "Enable" : h.rightDescription), 1)) : Y("", !0)
        ]),
        y.value ? (S(), U(m(nn), {
          key: 1,
          message: y.value,
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
}), _b = ["id", "required", "disabled", "name"], Ib = ["selected"], Bb = ["value", "disabled"], HO = /* @__PURE__ */ z({
  __name: "Select",
  props: /* @__PURE__ */ mt({
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
  emits: /* @__PURE__ */ mt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    function a(f) {
      return f.split("_").join(" ").split(" ").map((v) => v.charAt(0).toUpperCase() + v.slice(1)).join(" ");
    }
    const s = N(!1), i = qn(e, "modelValue"), c = N(), l = N(), u = N(!1);
    pe(() => {
      var f;
      s.value = !r.form, c.value = s.value ? i.value : (f = r.form) == null ? void 0 : f[r.field];
    }), ne(
      () => c.value,
      (f, v) => {
        if (f !== v) {
          if (s.value ? i.value = f : r.form && r.field && (r.form[r.field] = f), l.value = v, o("update:modelValue", f), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: f, old_value: v });
        }
      }
    ), ne(
      () => r.field && r.form ? r.form[r.field] : null,
      (f) => {
        c.value = s.value ? i.value : f;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (f) => {
        c.value = f;
      }
    );
    const d = T(() => r.options ? r.options.map((f) => typeof f == "string" ? { value: f, label: f, disabled: !1 } : {
      value: f.value,
      label: f.label || String(f.value),
      disabled: f.disabled || !1
    }) : []), y = T(() => r.label || (r.field ? a(r.field) : "")), g = T(() => {
      var f, v;
      return r.error || ((v = (f = r.form) == null ? void 0 : f.errors) == null ? void 0 : v[r.field]);
    });
    return t({
      setValueSilently: (f) => {
        c.value = f, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, v) => (S(), U(m(Qs), {
      field: f.field,
      label: y.value,
      sublabel: f.sublabel,
      tooltip: f.tooltip,
      required: f.required,
      noLabel: f.noLabel,
      labelCustomClass: f.labelCustomClass,
      form: f.form,
      error: g.value,
      htmlFor: f.field
    }, {
      default: _(() => [
        Ze(D("select", {
          id: f.field,
          "onUpdate:modelValue": v[0] || (v[0] = (w) => c.value = w),
          required: f.required,
          disabled: f.disabled,
          name: f.name || f.field,
          class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", f.customClass])
        }, [
          f.placeholder ? (S(), k("option", {
            key: 0,
            value: "",
            disabled: "",
            selected: !c.value,
            class: "text-gray-500"
          }, Z(f.placeholder), 9, Ib)) : Y("", !0),
          (S(!0), k(re, null, ge(d.value, (w) => (S(), k("option", {
            key: w.value,
            value: w.value,
            disabled: w.disabled
          }, Z(w.label), 9, Bb))), 128)),
          j(f.$slots, "default")
        ], 10, _b), [
          [Cc, c.value]
        ])
      ]),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Lb = ["id", "disabled"], Mb = { class: "flex flex-wrap gap-1" }, Nb = ["onClick"], jb = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, qb = { class: "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg" }, Vb = {
  key: 0,
  class: "border-b border-gray-200 p-2"
}, zb = { class: "relative" }, Ub = {
  key: 1,
  class: "flex items-center justify-center p-4"
}, Hb = {
  key: 2,
  class: "max-h-60 overflow-auto"
}, Wb = {
  key: 0,
  class: "bg-gray-50 px-3 py-2 text-xs font-semibold tracking-wide text-gray-500 uppercase"
}, Kb = ["onClick", "disabled"], Gb = { class: "block truncate" }, Yb = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, Xb = ["onClick", "disabled"], Jb = { class: "block truncate" }, Qb = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, Zb = {
  key: 2,
  class: "px-3 py-2 text-center text-sm text-gray-500"
}, WO = /* @__PURE__ */ z({
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
    const n = e, r = t, o = N(!1), a = N(""), s = N(!1), i = N(null), c = N([...n.options]), l = N(), u = N(), d = T({
      get() {
        return n.modelValue !== void 0 ? n.modelValue : n.form && n.field ? n.form[n.field] : n.multiple ? [] : void 0;
      },
      set(x) {
        n.modelValue !== void 0 ? r("update:modelValue", x) : n.form && n.field && (n.form[n.field] = x);
      }
    }), y = (x) => x[n.optionValue], g = (x) => x[n.optionLabel], p = (x) => x[n.optionGroup], h = T(() => {
      var x;
      if ((x = n.form) != null && x.errors && n.field)
        return n.form.errors[n.field];
    }), f = T(() => n.label ? n.label : n.field ? n.field.split("_").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ") : ""), v = T(() => n.field || `select-${Math.random().toString(36).substr(2, 9)}`), w = T(() => {
      if (!n.searchable || !a.value)
        return c.value;
      const x = a.value.toLowerCase();
      return c.value.filter((K) => g(K).toLowerCase().includes(x));
    }), O = T(() => {
      if (!n.grouping)
        return { ungrouped: w.value };
      const x = {};
      return w.value.forEach((K) => {
        const L = p(K) || "ungrouped";
        x[L] || (x[L] = []), x[L].push(K);
      }), x;
    }), P = T(() => {
      if (!d.value) return [];
      const x = n.multiple ? d.value : [d.value];
      return c.value.filter((K) => x.includes(y(K)));
    }), F = T(() => P.value.length ? n.multiple ? P.value.map((x) => g(x)).join(", ") : g(P.value[0]) : n.placeholder), H = async (x) => {
      if (!(!n.apiSearch || !n.apiUrl)) {
        s.value = !0;
        try {
          const K = new URL(n.apiUrl);
          K.searchParams.set(n.apiSearchParam, x);
          const R = await (await fetch(K.toString())).json(), X = n.apiTransform ? n.apiTransform(R) : R;
          c.value = X, r("optionsLoaded", X);
        } catch (K) {
          console.error("API search error:", K);
        } finally {
          s.value = !1;
        }
      }
    }, A = (x) => {
      a.value = x, r("search", x), n.apiSearch && x.length >= n.minSearchLength && (i.value && clearTimeout(i.value), i.value = setTimeout(() => {
        H(x);
      }, n.searchDelay));
    }, W = (x) => {
      if (x.disabled) return;
      const K = y(x);
      if (n.multiple) {
        const L = d.value || [], R = L.indexOf(K);
        R > -1 ? d.value = L.filter((X, ae) => ae !== R) : d.value = [...L, K];
      } else
        d.value = K, o.value = !1;
    }, B = (x, K) => {
      if (K.stopPropagation(), n.multiple) {
        const L = y(x);
        d.value = d.value.filter((R) => R !== L);
      }
    }, $ = (x) => {
      x.stopPropagation(), d.value = n.multiple ? [] : void 0;
    }, V = (x) => {
      const K = y(x);
      return n.multiple ? (d.value || []).includes(K) : d.value === K;
    }, b = () => {
      n.disabled || (o.value = !o.value, o.value && n.searchable && De(() => {
        var x;
        (x = u.value) == null || x.focus();
      }));
    }, E = (x) => {
      l.value && !l.value.contains(x.target) && (o.value = !1);
    };
    return ne(
      () => n.options,
      (x) => {
        c.value = [...x];
      },
      { immediate: !0 }
    ), pe(() => {
      document.addEventListener("click", E);
    }), Nt(() => {
      document.removeEventListener("click", E), i.value && clearTimeout(i.value);
    }), (x, K) => (S(), U(m(Qs), {
      field: x.field,
      label: f.value,
      tooltip: x.tooltip,
      required: x.required,
      noLabel: x.noLabel,
      form: x.form,
      error: h.value,
      htmlFor: v.value
    }, {
      default: _(() => [
        D("div", {
          class: "relative",
          ref_key: "dropdownRef",
          ref: l
        }, [
          D("button", {
            type: "button",
            id: v.value,
            onClick: b,
            disabled: x.disabled,
            class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500", [
              x.customClass,
              {
                "border-red-500 focus:border-red-500 focus:ring-red-500": h.value,
                "border-primary-500 ring-primary-500 ring-2": o.value
              }
            ]])
          }, [
            D("div", Mb, [
              x.multiple && P.value.length ? (S(!0), k(re, { key: 0 }, ge(P.value, (L) => (S(), k("span", {
                key: y(L),
                class: "bg-primary-100 text-primary-800 inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
              }, [
                ce(Z(g(L)) + " ", 1),
                D("button", {
                  type: "button",
                  onClick: (R) => B(L, R),
                  class: "hover:text-primary-600 transition-colors"
                }, [
                  J(m(Ee), {
                    icon: m(Zr),
                    class: "h-3 w-3"
                  }, null, 8, ["icon"])
                ], 8, Nb)
              ]))), 128)) : (S(), k("span", {
                key: 1,
                class: Q(["block truncate", { "text-gray-500": !P.value.length }])
              }, Z(F.value), 3))
            ]),
            x.clearable && P.value.length ? (S(), k("button", {
              key: 0,
              type: "button",
              onClick: $,
              class: "absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 transition-colors hover:text-gray-600"
            }, [
              J(m(Ee), {
                icon: m(Zr),
                class: "h-4 w-4"
              }, null, 8, ["icon"])
            ])) : Y("", !0),
            D("div", jb, [
              J(m(Ee), {
                icon: m(ei),
                class: Q(["h-4 w-4 text-gray-400 transition-transform duration-200", { "rotate-180": o.value }])
              }, null, 8, ["icon", "class"])
            ])
          ], 10, Lb),
          J(cn, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "opacity-0 scale-95",
            "enter-to-class": "opacity-100 scale-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "opacity-100 scale-100",
            "leave-to-class": "opacity-0 scale-95"
          }, {
            default: _(() => [
              Ze(D("div", qb, [
                x.searchable ? (S(), k("div", Vb, [
                  D("div", zb, [
                    J(m(Ee), {
                      icon: m(Sm),
                      class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                    }, null, 8, ["icon"]),
                    Ze(D("input", {
                      ref_key: "searchInputRef",
                      ref: u,
                      type: "text",
                      "onUpdate:modelValue": K[0] || (K[0] = (L) => a.value = L),
                      onInput: K[1] || (K[1] = (L) => A(a.value)),
                      placeholder: "Search options...",
                      class: "focus:border-primary-500 focus:ring-primary-500 w-full rounded border border-gray-300 py-2 pr-3 pl-10 text-sm focus:ring-2 focus:ring-offset-0"
                    }, null, 544), [
                      [Oc, a.value]
                    ])
                  ])
                ])) : Y("", !0),
                s.value ? (S(), k("div", Ub, [
                  J(m(Vi), { class: "h-5 w-5" }),
                  K[2] || (K[2] = D("span", { class: "ml-2 text-sm text-gray-600" }, "Loading...", -1))
                ])) : (S(), k("div", Hb, [
                  x.grouping ? (S(!0), k(re, { key: 0 }, ge(O.value, (L, R) => (S(), k("div", { key: R }, [
                    R !== "ungrouped" ? (S(), k("div", Wb, Z(R), 1)) : Y("", !0),
                    (S(!0), k(re, null, ge(L, (X) => (S(), k("button", {
                      key: y(X),
                      type: "button",
                      onClick: (ae) => W(X),
                      disabled: X.disabled,
                      class: Q(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                        "bg-primary-100 text-primary-900": V(X),
                        "text-gray-900": !V(X)
                      }])
                    }, [
                      D("span", Gb, Z(g(X)), 1),
                      V(X) ? (S(), k("span", Yb, " ✓ ")) : Y("", !0)
                    ], 10, Kb))), 128))
                  ]))), 128)) : (S(!0), k(re, { key: 1 }, ge(w.value, (L) => (S(), k("button", {
                    key: y(L),
                    type: "button",
                    onClick: (R) => W(L),
                    disabled: L.disabled,
                    class: Q(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                      "bg-primary-100 text-primary-900": V(L),
                      "text-gray-900": !V(L)
                    }])
                  }, [
                    D("span", Jb, Z(g(L)), 1),
                    V(L) ? (S(), k("span", Qb, "✓")) : Y("", !0)
                  ], 10, Xb))), 128)),
                  w.value.length ? Y("", !0) : (S(), k("div", Zb, "No options found"))
                ]))
              ], 512), [
                [un, o.value]
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
var e1 = Object.defineProperty, t1 = Object.defineProperties, n1 = Object.getOwnPropertyDescriptors, Wl = Object.getOwnPropertySymbols, r1 = Object.prototype.hasOwnProperty, o1 = Object.prototype.propertyIsEnumerable, Kl = (e, t, n) => t in e ? e1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Dn = (e, t) => {
  for (var n in t || (t = {}))
    r1.call(t, n) && Kl(e, n, t[n]);
  if (Wl)
    for (var n of Wl(t))
      o1.call(t, n) && Kl(e, n, t[n]);
  return e;
}, Gl = (e, t) => t1(e, n1(t));
const a1 = {
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
}, s1 = {
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
}, i1 = {
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
}, Ri = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, l1 = {}, u1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, c1 = /* @__PURE__ */ D("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), d1 = [
  c1
];
function f1(e, t) {
  return S(), k("svg", u1, d1);
}
const p1 = /* @__PURE__ */ Ri(l1, [["render", f1]]), m1 = {}, h1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, y1 = /* @__PURE__ */ D("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), g1 = [
  y1
];
function v1(e, t) {
  return S(), k("svg", h1, g1);
}
const b1 = /* @__PURE__ */ Ri(m1, [["render", v1]]), Yl = {
  Deselect: p1,
  OpenIndicator: b1
}, w1 = {
  mounted(e, { instance: t }) {
    if (t.appendToBody) {
      const {
        height: n,
        top: r,
        left: o,
        width: a
      } = t.$refs.toggle.getBoundingClientRect();
      let s = window.scrollX || window.pageXOffset, i = window.scrollY || window.pageYOffset;
      e.unbindPosition = t.calculatePosition(e, t, {
        width: a + "px",
        left: s + o + "px",
        top: i + r + n + "px"
      }), document.body.appendChild(e);
    }
  },
  unmounted(e, { instance: t }) {
    t.appendToBody && (e.unbindPosition && typeof e.unbindPosition == "function" && e.unbindPosition(), e.parentNode && e.parentNode.removeChild(e));
  }
};
function S1(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let x1 = 0;
function C1() {
  return ++x1;
}
const O1 = {
  components: Dn({}, Yl),
  directives: { appendToBody: w1 },
  mixins: [a1, s1, i1],
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
          return e.hasOwnProperty("id") ? e.id : S1(e);
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
      default: () => C1()
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
          attributes: Dn({
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
        header: Gl(Dn({}, e), { deselect: this.deselect }),
        footer: Gl(Dn({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Dn(Dn({}, Yl), this.components);
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
}, A1 = ["dir"], E1 = ["id", "aria-expanded", "aria-owns"], P1 = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, k1 = ["disabled", "title", "aria-label", "onClick"], $1 = {
  ref: "actions",
  class: "vs__actions"
}, T1 = ["disabled"], D1 = { class: "vs__spinner" }, F1 = ["id"], R1 = ["id", "aria-selected", "onMouseover", "onClick"], _1 = {
  key: 0,
  class: "vs__no-options"
}, I1 = /* @__PURE__ */ ce(" Sorry, no matching options. "), B1 = ["id"];
function L1(e, t, n, r, o, a) {
  const s = nm("append-to-body");
  return S(), k("div", {
    dir: n.dir,
    class: Q(["v-select", a.stateClasses])
  }, [
    j(e.$slots, "header", be(Ae(a.scope.header))),
    D("div", {
      id: `vs${n.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${n.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (i) => a.toggleDropdown(i))
    }, [
      D("div", P1, [
        (S(!0), k(re, null, ge(a.selectedValue, (i, c) => j(e.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(i),
          deselect: a.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (S(), k("span", {
            key: n.getOptionKey(i),
            class: "vs__selected"
          }, [
            j(e.$slots, "selected-option", be(Ae(a.normalizeOptionForSlot(i))), () => [
              ce(Z(n.getOptionLabel(i)), 1)
            ]),
            n.multiple ? (S(), k("button", {
              key: 0,
              ref_for: !0,
              ref: (l) => o.deselectButtons[c] = l,
              disabled: n.disabled,
              type: "button",
              class: "vs__deselect",
              title: `Deselect ${n.getOptionLabel(i)}`,
              "aria-label": `Deselect ${n.getOptionLabel(i)}`,
              onClick: (l) => a.deselect(i)
            }, [
              (S(), U(Vr(a.childComponents.Deselect)))
            ], 8, k1)) : Y("", !0)
          ]))
        ])), 256)),
        j(e.$slots, "search", be(Ae(a.scope.search)), () => [
          D("input", se({ class: "vs__search" }, a.scope.search.attributes, _c(a.scope.search.events)), null, 16)
        ])
      ], 512),
      D("div", $1, [
        Ze(D("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...i) => a.clearSelection && a.clearSelection(...i))
        }, [
          (S(), U(Vr(a.childComponents.Deselect)))
        ], 8, T1), [
          [un, a.showClearButton]
        ]),
        j(e.$slots, "open-indicator", be(Ae(a.scope.openIndicator)), () => [
          n.noDrop ? Y("", !0) : (S(), U(Vr(a.childComponents.OpenIndicator), be(se({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        j(e.$slots, "spinner", be(Ae(a.scope.spinner)), () => [
          Ze(D("div", D1, "Loading...", 512), [
            [un, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, E1),
    J(cn, { name: n.transition }, {
      default: _(() => [
        a.dropdownOpen ? Ze((S(), k("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = dt((...i) => a.onMousedown && a.onMousedown(...i), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...i) => a.onMouseUp && a.onMouseUp(...i))
        }, [
          j(e.$slots, "list-header", be(Ae(a.scope.listHeader))),
          (S(!0), k(re, null, ge(a.filteredOptions, (i, c) => (S(), k("li", {
            id: `vs${n.uid}__option-${c}`,
            key: n.getOptionKey(i),
            role: "option",
            class: Q(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(i) && c === e.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(i),
              "vs__dropdown-option--highlight": c === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !n.selectable(i)
            }]),
            "aria-selected": c === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => n.selectable(i) ? e.typeAheadPointer = c : null,
            onClick: dt((l) => n.selectable(i) ? a.select(i) : null, ["prevent", "stop"])
          }, [
            j(e.$slots, "option", be(Ae(a.normalizeOptionForSlot(i))), () => [
              ce(Z(n.getOptionLabel(i)), 1)
            ])
          ], 42, R1))), 128)),
          a.filteredOptions.length === 0 ? (S(), k("li", _1, [
            j(e.$slots, "no-options", be(Ae(a.scope.noOptions)), () => [
              I1
            ])
          ])) : Y("", !0),
          j(e.$slots, "list-footer", be(Ae(a.scope.listFooter)))
        ], 40, F1)), [
          [s]
        ]) : (S(), k("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, B1))
      ]),
      _: 3
    }, 8, ["name"]),
    j(e.$slots, "footer", be(Ae(a.scope.footer)))
  ], 10, A1);
}
const M1 = /* @__PURE__ */ Ri(O1, [["render", L1]]), KO = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return xo.add(vd), (t, n) => (S(), U(m(M1), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Ft = {
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
function N1(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const lf = {
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
      default: (e, t) => e.match(N1(t))
    }
  }
}, j1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, q1 = {
  name: "ModelSelect",
  mixins: [lf],
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
      Ft.openOptions(this);
    },
    blurInput() {
      Ft.blurInput(this);
    },
    closeOptions() {
      Ft.closeOptions(this);
    },
    prevItem() {
      Ft.prevItem(this);
    },
    nextItem() {
      Ft.nextItem(this);
    },
    enterItem() {
      Ft.enterItem(this);
    },
    pointerSet(e) {
      Ft.pointerSet(this, e);
    },
    pointerAdjust() {
      Ft.pointerAdjust(this);
    },
    mousedownItem() {
      Ft.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, V1 = /* @__PURE__ */ D("i", { class: "dropdown icon" }, null, -1), z1 = ["disabled", "tabindex", "id", "name", "value"], U1 = ["data-vss-custom-attr"], H1 = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function W1(e, t, n, r, o, a) {
  return S(), k("div", {
    class: Q(["ui fluid search selection dropdown", { "active visible": o.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => a.openOptions && a.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => a.openOptions && a.openOptions(...s))
  }, [
    V1,
    D("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: o.searchText,
      onInput: t[0] || (t[0] = (s) => o.searchText = s.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = dt((...s) => a.openOptions && a.openOptions(...s), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = Gt((...s) => a.closeOptions && a.closeOptions(...s), ["esc"])),
        t[7] || (t[7] = Gt(dt((...s) => a.enterItem && a.enterItem(...s), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...s) => a.blurInput && a.blurInput(...s)),
      onKeydown: [
        t[4] || (t[4] = Gt((...s) => a.prevItem && a.prevItem(...s), ["up"])),
        t[5] || (t[5] = Gt((...s) => a.nextItem && a.nextItem(...s), ["down"])),
        t[6] || (t[6] = Gt(dt(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = Gt((...s) => a.deleteTextOrItem && a.deleteTextOrItem(...s), ["delete"]))
      ]
    }, null, 40, z1),
    D("div", {
      class: Q(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, Z(a.inputText), 11, U1),
    D("div", {
      class: Q(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = dt(() => {
      }, ["prevent"])),
      style: et(a.menuStyle),
      tabindex: "-1"
    }, [
      (S(!0), k(re, null, ge(a.filteredOptions, (s, i) => (S(), k("div", {
        key: i,
        class: Q(["item", { selected: s.selected || o.pointer === i, disabled: s.disabled }]),
        "data-vss-custom-attr": a.customAttrs[i] ? a.customAttrs[i] : "",
        onClick: dt((c) => a.selectItem(s), ["stop"]),
        onMousedown: t[9] || (t[9] = (...c) => a.mousedownItem && a.mousedownItem(...c)),
        onMouseenter: (c) => a.pointerSet(i)
      }, [
        j(e.$slots, "default", {
          option: s,
          idx: i
        }, () => [
          ce(Z(s.text), 1)
        ])
      ], 42, H1))), 128))
    ], 38)
  ], 34);
}
const Xl = /* @__PURE__ */ j1(q1, [["render", W1]]), Jl = {
  name: "ModelListSelect",
  mixins: [lf],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return qe(Xl, {
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
    ModelSelect: Xl
  }
}, K1 = {
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
      return o.split("_").join(" ").split(" ").map(function(s) {
        a.push(s[0].toUpperCase() + s.slice(1));
      }), a.join(" ");
    };
    return (o, a) => (S(), k("div", null, [
      !e.noLabel && (e.label || e.field) ? (S(), U(m(zn), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : Y("", !0),
      e.noForm ? (S(), U(m(Jl), {
        key: 1,
        id: e.id ?? e.field,
        list: e.list,
        modelValue: e.modelValue,
        "option-value": e.optionValue,
        "option-text": e.optionText,
        "option-disabled": e.optionDisabled,
        placeholder: e.placeholder,
        class: "model-list relative! mt-0! max-w-full! rounded! border-gray-300! shadow! h-[42px]",
        "onUpdate:modelValue": a[0] || (a[0] = (s) => n("update:modelValue", s)),
        onSearchchange: a[1] || (a[1] = (s) => n("searchchange", s)),
        "is-disabled": e.disabled,
        filterPredicate: e.filterPredicate
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (S(), k(re, { key: 2 }, [
        J(m(Jl), {
          id: e.id ?? e.field,
          list: e.list,
          modelValue: e.form[e.field],
          "onUpdate:modelValue": [
            a[2] || (a[2] = (s) => e.form[e.field] = s),
            a[3] || (a[3] = (s) => n("update:modelValue", s))
          ],
          "option-value": e.optionValue,
          "option-text": e.optionText,
          "option-disabled": e.optionDisabled,
          placeholder: e.placeholder,
          class: "model-list relative! mt-0! max-w-full! rounded! border-gray-300! px-3! shadow! h-[42px]",
          onSearchchange: a[4] || (a[4] = (s) => n("searchchange", s)),
          "is-disabled": e.disabled,
          filterPredicate: e.filterPredicate
        }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"]),
        J(m(nn), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, G1 = /* @__PURE__ */ gd(K1, [["__scopeId", "data-v-c8f3c7c8"]]), GO = {
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
    var v;
    const r = e, o = n, a = N([]), s = N(1), i = N(!0), c = N(0), l = N(""), u = N(((v = r.form) == null ? void 0 : v[r.field]) || r.modelValue), d = N(u.value), y = N(null), g = (w) => {
      d.value = u.value, u.value = w, o("update:modelValue", w), o("changed", w), w || (p(""), y.value = null);
    }, p = (w) => {
      w == "" && u.value && u.value !== d.value || (s.value = 1, c.value = 0, l.value = w, h());
    }, h = async (w = !1) => {
      const O = new URLSearchParams();
      O.append("term", l.value), O.append("page", s.value), r.queryParams && Object.keys(r.queryParams).forEach((H) => {
        O.append(H, r.queryParams[H]);
      }), w && u.value && O.append("ajax_id", u.value);
      const F = await (await fetch(`${r.url}?${O.toString()}`)).json();
      if (i.value = F.current_page < F.last_page, s.value === 1) {
        if (a.value = F.data, u.value) {
          const H = a.value.find((A) => A[r.optionValue] == u.value);
          y.value = H ? H[r.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat(F.data);
    };
    return pe(() => {
      h(!0);
      const w = document.getElementById(r.id).parentNode.querySelector(".menu");
      w == null || w.addEventListener(
        "scroll",
        (O) => {
          O.target.scrollTop > c.value && O.target.scrollTop + O.target.clientHeight >= O.target.scrollHeight && i.value && (s.value++, h());
        },
        {
          passive: !0
        }
      );
    }), t({ getCurrentOption: () => a.value.find((w) => w[r.optionValue] == u.value) }), (w, O) => (S(), U(m(G1), {
      id: e.id,
      label: e.label,
      list: a.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: y.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: u.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": O[0] || (O[0] = (P) => g(P)),
      onSearchchange: p,
      filterPredicate: (P, F) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
function Y1(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function X1() {
}
function J1(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Q1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function _s(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function io(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const uf = "[object RegExp]", cf = "[object String]", df = "[object Number]", ff = "[object Boolean]", Is = "[object Arguments]", pf = "[object Symbol]", mf = "[object Date]", hf = "[object Map]", yf = "[object Set]", gf = "[object Array]", Z1 = "[object Function]", vf = "[object ArrayBuffer]", Hr = "[object Object]", ew = "[object Error]", bf = "[object DataView]", wf = "[object Uint8Array]", Sf = "[object Uint8ClampedArray]", xf = "[object Uint16Array]", Cf = "[object Uint32Array]", tw = "[object BigUint64Array]", Of = "[object Int8Array]", Af = "[object Int16Array]", Ef = "[object Int32Array]", nw = "[object BigInt64Array]", Pf = "[object Float32Array]", kf = "[object Float64Array]";
function _n(e, t, n, r = /* @__PURE__ */ new Map(), o = void 0) {
  const a = o == null ? void 0 : o(e, t, n, r);
  if (a != null)
    return a;
  if (J1(e))
    return e;
  if (r.has(e))
    return r.get(e);
  if (Array.isArray(e)) {
    const s = new Array(e.length);
    r.set(e, s);
    for (let i = 0; i < e.length; i++)
      s[i] = _n(e[i], i, n, r, o);
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
    r.set(e, s);
    for (const [i, c] of e)
      s.set(i, _n(c, i, n, r, o));
    return s;
  }
  if (e instanceof Set) {
    const s = /* @__PURE__ */ new Set();
    r.set(e, s);
    for (const i of e)
      s.add(_n(i, void 0, n, r, o));
    return s;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e))
    return e.subarray();
  if (Q1(e)) {
    const s = new (Object.getPrototypeOf(e)).constructor(e.length);
    r.set(e, s);
    for (let i = 0; i < e.length; i++)
      s[i] = _n(e[i], i, n, r, o);
    return s;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
    return e.slice(0);
  if (e instanceof DataView) {
    const s = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return r.set(e, s), Xn(s, e, n, r, o), s;
  }
  if (typeof File < "u" && e instanceof File) {
    const s = new File([e], e.name, {
      type: e.type
    });
    return r.set(e, s), Xn(s, e, n, r, o), s;
  }
  if (e instanceof Blob) {
    const s = new Blob([e], { type: e.type });
    return r.set(e, s), Xn(s, e, n, r, o), s;
  }
  if (e instanceof Error) {
    const s = new e.constructor();
    return r.set(e, s), s.message = e.message, s.name = e.name, s.stack = e.stack, s.cause = e.cause, Xn(s, e, n, r, o), s;
  }
  if (typeof e == "object" && rw(e)) {
    const s = Object.create(Object.getPrototypeOf(e));
    return r.set(e, s), Xn(s, e, n, r, o), s;
  }
  return e;
}
function Xn(e, t, n = e, r, o) {
  const a = [...Object.keys(t), ..._s(t)];
  for (let s = 0; s < a.length; s++) {
    const i = a[s], c = Object.getOwnPropertyDescriptor(e, i);
    (c == null || c.writable) && (e[i] = _n(t[i], i, n, r, o));
  }
}
function rw(e) {
  switch (io(e)) {
    case Is:
    case gf:
    case vf:
    case bf:
    case ff:
    case mf:
    case Pf:
    case kf:
    case Of:
    case Af:
    case Ef:
    case hf:
    case df:
    case Hr:
    case uf:
    case yf:
    case cf:
    case pf:
    case wf:
    case Sf:
    case xf:
    case Cf:
      return !0;
    default:
      return !1;
  }
}
function ut(e) {
  return _n(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
function lo(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
function tr(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r], a = t[o], s = e[o];
    Array.isArray(a) ? Array.isArray(s) ? e[o] = tr(s, a) : e[o] = tr([], a) : lo(a) ? lo(s) ? e[o] = tr(s, a) : e[o] = tr({}, a) : (s === void 0 || a !== void 0) && (e[o] = a);
  }
  return e;
}
function $f(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function ow(e, t, n) {
  return nr(e, t, void 0, void 0, void 0, void 0, n);
}
function nr(e, t, n, r, o, a, s) {
  const i = s(e, t, n, r, o, a);
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
        return ir(e, t, a, s);
    }
  return ir(e, t, a, s);
}
function ir(e, t, n, r) {
  if (Object.is(e, t))
    return !0;
  let o = io(e), a = io(t);
  if (o === Is && (o = Hr), a === Is && (a = Hr), o !== a)
    return !1;
  switch (o) {
    case cf:
      return e.toString() === t.toString();
    case df: {
      const c = e.valueOf(), l = t.valueOf();
      return $f(c, l);
    }
    case ff:
    case mf:
    case pf:
      return Object.is(e.valueOf(), t.valueOf());
    case uf:
      return e.source === t.source && e.flags === t.flags;
    case Z1:
      return e === t;
  }
  n = n ?? /* @__PURE__ */ new Map();
  const s = n.get(e), i = n.get(t);
  if (s != null && i != null)
    return s === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (o) {
      case hf: {
        if (e.size !== t.size)
          return !1;
        for (const [c, l] of e.entries())
          if (!t.has(c) || !nr(l, t.get(c), c, e, t, n, r))
            return !1;
        return !0;
      }
      case yf: {
        if (e.size !== t.size)
          return !1;
        const c = Array.from(e.values()), l = Array.from(t.values());
        for (let u = 0; u < c.length; u++) {
          const d = c[u], y = l.findIndex((g) => nr(d, g, void 0, e, t, n, r));
          if (y === -1)
            return !1;
          l.splice(y, 1);
        }
        return !0;
      }
      case gf:
      case wf:
      case Sf:
      case xf:
      case Cf:
      case tw:
      case Of:
      case Af:
      case Ef:
      case nw:
      case Pf:
      case kf: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let c = 0; c < e.length; c++)
          if (!nr(e[c], t[c], c, e, t, n, r))
            return !1;
        return !0;
      }
      case vf:
        return e.byteLength !== t.byteLength ? !1 : ir(new Uint8Array(e), new Uint8Array(t), n, r);
      case bf:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : ir(new Uint8Array(e), new Uint8Array(t), n, r);
      case ew:
        return e.name === t.name && e.message === t.message;
      case Hr: {
        if (!(ir(e.constructor, t.constructor, n, r) || lo(e) && lo(t)))
          return !1;
        const l = [...Object.keys(e), ..._s(e)], u = [...Object.keys(t), ..._s(t)];
        if (l.length !== u.length)
          return !1;
        for (let d = 0; d < l.length; d++) {
          const y = l[d], g = e[y];
          if (!Object.hasOwn(t, y))
            return !1;
          const p = t[y];
          if (!nr(g, p, y, e, t, n, r))
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
function aw(e, t) {
  return ow(e, t, X1);
}
var Bs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sw(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function iw(e) {
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
var ia, Ql;
function Hn() {
  return Ql || (Ql = 1, ia = TypeError), ia;
}
const lw = {}, uw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lw
}, Symbol.toStringTag, { value: "Module" })), Ls = /* @__PURE__ */ iw(uw);
var la, Zl;
function ko() {
  if (Zl) return la;
  Zl = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, i = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, u = typeof WeakSet == "function" && WeakSet.prototype, d = u ? WeakSet.prototype.has : null, y = typeof WeakRef == "function" && WeakRef.prototype, g = y ? WeakRef.prototype.deref : null, p = Boolean.prototype.valueOf, h = Object.prototype.toString, f = Function.prototype.toString, v = String.prototype.match, w = String.prototype.slice, O = String.prototype.replace, P = String.prototype.toUpperCase, F = String.prototype.toLowerCase, H = RegExp.prototype.test, A = Array.prototype.concat, W = Array.prototype.join, B = Array.prototype.slice, $ = Math.floor, V = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, b = Object.getOwnPropertySymbols, E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, C = typeof Symbol == "function" && typeof Symbol.iterator == "object", x = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === C || !0) ? Symbol.toStringTag : null, K = Object.prototype.propertyIsEnumerable, L = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(I) {
    return I.__proto__;
  } : null);
  function R(I, M) {
    if (I === 1 / 0 || I === -1 / 0 || I !== I || I && I > -1e3 && I < 1e3 || H.call(/e/, M))
      return M;
    var de = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof I == "number") {
      var he = I < 0 ? -$(-I) : $(I);
      if (he !== I) {
        var ye = String(he), ie = w.call(M, ye.length + 1);
        return O.call(ye, de, "$&_") + "." + O.call(O.call(ie, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return O.call(M, de, "$&_");
  }
  var X = Ls, ae = X.custom, Fe = _e(ae) ? ae : null, Ge = {
    __proto__: null,
    double: '"',
    single: "'"
  }, $e = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  la = function I(M, de, he, ye) {
    var ie = de || {};
    if (Ve(ie, "quoteStyle") && !Ve(Ge, ie.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Ve(ie, "maxStringLength") && (typeof ie.maxStringLength == "number" ? ie.maxStringLength < 0 && ie.maxStringLength !== 1 / 0 : ie.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var zt = Ve(ie, "customInspect") ? ie.customInspect : !0;
    if (typeof zt != "boolean" && zt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Ve(ie, "indent") && ie.indent !== null && ie.indent !== "	" && !(parseInt(ie.indent, 10) === ie.indent && ie.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Ve(ie, "numericSeparator") && typeof ie.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var rn = ie.numericSeparator;
    if (typeof M > "u")
      return "undefined";
    if (M === null)
      return "null";
    if (typeof M == "boolean")
      return M ? "true" : "false";
    if (typeof M == "string")
      return zi(M, ie);
    if (typeof M == "number") {
      if (M === 0)
        return 1 / 0 / M > 0 ? "0" : "-0";
      var Ye = String(M);
      return rn ? R(M, Ye) : Ye;
    }
    if (typeof M == "bigint") {
      var Ut = String(M) + "n";
      return rn ? R(M, Ut) : Ut;
    }
    var Vo = typeof ie.depth > "u" ? 5 : ie.depth;
    if (typeof he > "u" && (he = 0), he >= Vo && Vo > 0 && typeof M == "object")
      return bt(M) ? "[Array]" : "[Object]";
    var Pn = Wp(ie, he);
    if (typeof ye > "u")
      ye = [];
    else if (Vt(ye, M) >= 0)
      return "[Circular]";
    function lt(kn, $r, Gp) {
      if ($r && (ye = B.call(ye), ye.push($r)), Gp) {
        var Qi = {
          depth: ie.depth
        };
        return Ve(ie, "quoteStyle") && (Qi.quoteStyle = ie.quoteStyle), I(kn, Qi, he + 1, ye);
      }
      return I(kn, ie, he + 1, ye);
    }
    if (typeof M == "function" && !ke(M)) {
      var Hi = Cn(M), Wi = Pr(M, lt);
      return "[Function" + (Hi ? ": " + Hi : " (anonymous)") + "]" + (Wi.length > 0 ? " { " + W.call(Wi, ", ") + " }" : "");
    }
    if (_e(M)) {
      var Ki = C ? O.call(String(M), /^(Symbol\(.*\))_[^)]*$/, "$1") : E.call(M);
      return typeof M == "object" && !C ? Gn(Ki) : Ki;
    }
    if (zp(M)) {
      for (var Yn = "<" + F.call(String(M.nodeName)), zo = M.attributes || [], kr = 0; kr < zo.length; kr++)
        Yn += " " + zo[kr].name + "=" + Me(Re(zo[kr].value), "double", ie);
      return Yn += ">", M.childNodes && M.childNodes.length && (Yn += "..."), Yn += "</" + F.call(String(M.nodeName)) + ">", Yn;
    }
    if (bt(M)) {
      if (M.length === 0)
        return "[]";
      var Uo = Pr(M, lt);
      return Pn && !Hp(Uo) ? "[" + qo(Uo, Pn) + "]" : "[ " + W.call(Uo, ", ") + " ]";
    }
    if (ue(M)) {
      var Ho = Pr(M, lt);
      return !("cause" in Error.prototype) && "cause" in M && !K.call(M, "cause") ? "{ [" + String(M) + "] " + W.call(A.call("[cause]: " + lt(M.cause), Ho), ", ") + " }" : Ho.length === 0 ? "[" + String(M) + "]" : "{ [" + String(M) + "] " + W.call(Ho, ", ") + " }";
    }
    if (typeof M == "object" && zt) {
      if (Fe && typeof M[Fe] == "function" && X)
        return X(M, { depth: Vo - he });
      if (zt !== "symbol" && typeof M.inspect == "function")
        return M.inspect();
    }
    if (it(M)) {
      var Gi = [];
      return r && r.call(M, function(kn, $r) {
        Gi.push(lt($r, M, !0) + " => " + lt(kn, M));
      }), Ui("Map", n.call(M), Gi, Pn);
    }
    if (En(M)) {
      var Yi = [];
      return i && i.call(M, function(kn) {
        Yi.push(lt(kn, M));
      }), Ui("Set", s.call(M), Yi, Pn);
    }
    if (On(M))
      return jo("WeakMap");
    if (Vp(M))
      return jo("WeakSet");
    if (An(M))
      return jo("WeakRef");
    if (me(M))
      return Gn(lt(Number(M)));
    if (ot(M))
      return Gn(lt(V.call(M)));
    if (Ce(M))
      return Gn(p.call(M));
    if (we(M))
      return Gn(lt(String(M)));
    if (typeof window < "u" && M === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && M === globalThis || typeof Bs < "u" && M === Bs)
      return "{ [object globalThis] }";
    if (!wt(M) && !ke(M)) {
      var Wo = Pr(M, lt), Xi = L ? L(M) === Object.prototype : M instanceof Object || M.constructor === Object, Ko = M instanceof Object ? "" : "null prototype", Ji = !Xi && x && Object(M) === M && x in M ? w.call(at(M), 8, -1) : Ko ? "Object" : "", Kp = Xi || typeof M.constructor != "function" ? "" : M.constructor.name ? M.constructor.name + " " : "", Go = Kp + (Ji || Ko ? "[" + W.call(A.call([], Ji || [], Ko || []), ": ") + "] " : "");
      return Wo.length === 0 ? Go + "{}" : Pn ? Go + "{" + qo(Wo, Pn) + "}" : Go + "{ " + W.call(Wo, ", ") + " }";
    }
    return String(M);
  };
  function Me(I, M, de) {
    var he = de.quoteStyle || M, ye = Ge[he];
    return ye + I + ye;
  }
  function Re(I) {
    return O.call(String(I), /"/g, "&quot;");
  }
  function Ne(I) {
    return !x || !(typeof I == "object" && (x in I || typeof I[x] < "u"));
  }
  function bt(I) {
    return at(I) === "[object Array]" && Ne(I);
  }
  function wt(I) {
    return at(I) === "[object Date]" && Ne(I);
  }
  function ke(I) {
    return at(I) === "[object RegExp]" && Ne(I);
  }
  function ue(I) {
    return at(I) === "[object Error]" && Ne(I);
  }
  function we(I) {
    return at(I) === "[object String]" && Ne(I);
  }
  function me(I) {
    return at(I) === "[object Number]" && Ne(I);
  }
  function Ce(I) {
    return at(I) === "[object Boolean]" && Ne(I);
  }
  function _e(I) {
    if (C)
      return I && typeof I == "object" && I instanceof Symbol;
    if (typeof I == "symbol")
      return !0;
    if (!I || typeof I != "object" || !E)
      return !1;
    try {
      return E.call(I), !0;
    } catch {
    }
    return !1;
  }
  function ot(I) {
    if (!I || typeof I != "object" || !V)
      return !1;
    try {
      return V.call(I), !0;
    } catch {
    }
    return !1;
  }
  var Ie = Object.prototype.hasOwnProperty || function(I) {
    return I in this;
  };
  function Ve(I, M) {
    return Ie.call(I, M);
  }
  function at(I) {
    return h.call(I);
  }
  function Cn(I) {
    if (I.name)
      return I.name;
    var M = v.call(f.call(I), /^function\s*([\w$]+)/);
    return M ? M[1] : null;
  }
  function Vt(I, M) {
    if (I.indexOf)
      return I.indexOf(M);
    for (var de = 0, he = I.length; de < he; de++)
      if (I[de] === M)
        return de;
    return -1;
  }
  function it(I) {
    if (!n || !I || typeof I != "object")
      return !1;
    try {
      n.call(I);
      try {
        s.call(I);
      } catch {
        return !0;
      }
      return I instanceof Map;
    } catch {
    }
    return !1;
  }
  function On(I) {
    if (!l || !I || typeof I != "object")
      return !1;
    try {
      l.call(I, l);
      try {
        d.call(I, d);
      } catch {
        return !0;
      }
      return I instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function An(I) {
    if (!g || !I || typeof I != "object")
      return !1;
    try {
      return g.call(I), !0;
    } catch {
    }
    return !1;
  }
  function En(I) {
    if (!s || !I || typeof I != "object")
      return !1;
    try {
      s.call(I);
      try {
        n.call(I);
      } catch {
        return !0;
      }
      return I instanceof Set;
    } catch {
    }
    return !1;
  }
  function Vp(I) {
    if (!d || !I || typeof I != "object")
      return !1;
    try {
      d.call(I, d);
      try {
        l.call(I, l);
      } catch {
        return !0;
      }
      return I instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function zp(I) {
    return !I || typeof I != "object" ? !1 : typeof HTMLElement < "u" && I instanceof HTMLElement ? !0 : typeof I.nodeName == "string" && typeof I.getAttribute == "function";
  }
  function zi(I, M) {
    if (I.length > M.maxStringLength) {
      var de = I.length - M.maxStringLength, he = "... " + de + " more character" + (de > 1 ? "s" : "");
      return zi(w.call(I, 0, M.maxStringLength), M) + he;
    }
    var ye = $e[M.quoteStyle || "single"];
    ye.lastIndex = 0;
    var ie = O.call(O.call(I, ye, "\\$1"), /[\x00-\x1f]/g, Up);
    return Me(ie, "single", M);
  }
  function Up(I) {
    var M = I.charCodeAt(0), de = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[M];
    return de ? "\\" + de : "\\x" + (M < 16 ? "0" : "") + P.call(M.toString(16));
  }
  function Gn(I) {
    return "Object(" + I + ")";
  }
  function jo(I) {
    return I + " { ? }";
  }
  function Ui(I, M, de, he) {
    var ye = he ? qo(de, he) : W.call(de, ", ");
    return I + " (" + M + ") {" + ye + "}";
  }
  function Hp(I) {
    for (var M = 0; M < I.length; M++)
      if (Vt(I[M], `
`) >= 0)
        return !1;
    return !0;
  }
  function Wp(I, M) {
    var de;
    if (I.indent === "	")
      de = "	";
    else if (typeof I.indent == "number" && I.indent > 0)
      de = W.call(Array(I.indent + 1), " ");
    else
      return null;
    return {
      base: de,
      prev: W.call(Array(M + 1), de)
    };
  }
  function qo(I, M) {
    if (I.length === 0)
      return "";
    var de = `
` + M.prev + M.base;
    return de + W.call(I, "," + de) + `
` + M.prev;
  }
  function Pr(I, M) {
    var de = bt(I), he = [];
    if (de) {
      he.length = I.length;
      for (var ye = 0; ye < I.length; ye++)
        he[ye] = Ve(I, ye) ? M(I[ye], I) : "";
    }
    var ie = typeof b == "function" ? b(I) : [], zt;
    if (C) {
      zt = {};
      for (var rn = 0; rn < ie.length; rn++)
        zt["$" + ie[rn]] = ie[rn];
    }
    for (var Ye in I)
      Ve(I, Ye) && (de && String(Number(Ye)) === Ye && Ye < I.length || C && zt["$" + Ye] instanceof Symbol || (H.call(/[^\w$]/, Ye) ? he.push(M(Ye, I) + ": " + M(I[Ye], I)) : he.push(Ye + ": " + M(I[Ye], I))));
    if (typeof b == "function")
      for (var Ut = 0; Ut < ie.length; Ut++)
        K.call(I, ie[Ut]) && he.push("[" + M(ie[Ut]) + "]: " + M(I[ie[Ut]], I));
    return he;
  }
  return la;
}
var ua, eu;
function cw() {
  if (eu) return ua;
  eu = 1;
  var e = /* @__PURE__ */ ko(), t = /* @__PURE__ */ Hn(), n = function(i, c, l) {
    for (var u = i, d; (d = u.next) != null; u = d)
      if (d.key === c)
        return u.next = d.next, l || (d.next = /** @type {NonNullable<typeof list.next>} */
        i.next, i.next = d), d;
  }, r = function(i, c) {
    if (i) {
      var l = n(i, c);
      return l && l.value;
    }
  }, o = function(i, c, l) {
    var u = n(i, c);
    u ? u.value = l : i.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key: c,
      next: i.next,
      value: l
    };
  }, a = function(i, c) {
    return i ? !!n(i, c) : !1;
  }, s = function(i, c) {
    if (i)
      return n(i, c, !0);
  };
  return ua = function() {
    var c, l = {
      assert: function(u) {
        if (!l.has(u))
          throw new t("Side channel does not contain " + e(u));
      },
      delete: function(u) {
        var d = c && c.next, y = s(c, u);
        return y && d && d === y && (c = void 0), !!y;
      },
      get: function(u) {
        return r(c, u);
      },
      has: function(u) {
        return a(c, u);
      },
      set: function(u, d) {
        c || (c = {
          next: void 0
        }), o(
          /** @type {NonNullable<typeof $o>} */
          c,
          u,
          d
        );
      }
    };
    return l;
  }, ua;
}
var ca, tu;
function Tf() {
  return tu || (tu = 1, ca = Object), ca;
}
var da, nu;
function dw() {
  return nu || (nu = 1, da = Error), da;
}
var fa, ru;
function fw() {
  return ru || (ru = 1, fa = EvalError), fa;
}
var pa, ou;
function pw() {
  return ou || (ou = 1, pa = RangeError), pa;
}
var ma, au;
function mw() {
  return au || (au = 1, ma = ReferenceError), ma;
}
var ha, su;
function hw() {
  return su || (su = 1, ha = SyntaxError), ha;
}
var ya, iu;
function yw() {
  return iu || (iu = 1, ya = URIError), ya;
}
var ga, lu;
function gw() {
  return lu || (lu = 1, ga = Math.abs), ga;
}
var va, uu;
function vw() {
  return uu || (uu = 1, va = Math.floor), va;
}
var ba, cu;
function bw() {
  return cu || (cu = 1, ba = Math.max), ba;
}
var wa, du;
function ww() {
  return du || (du = 1, wa = Math.min), wa;
}
var Sa, fu;
function Sw() {
  return fu || (fu = 1, Sa = Math.pow), Sa;
}
var xa, pu;
function xw() {
  return pu || (pu = 1, xa = Math.round), xa;
}
var Ca, mu;
function Cw() {
  return mu || (mu = 1, Ca = Number.isNaN || function(t) {
    return t !== t;
  }), Ca;
}
var Oa, hu;
function Ow() {
  if (hu) return Oa;
  hu = 1;
  var e = /* @__PURE__ */ Cw();
  return Oa = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, Oa;
}
var Aa, yu;
function Aw() {
  return yu || (yu = 1, Aa = Object.getOwnPropertyDescriptor), Aa;
}
var Ea, gu;
function Df() {
  if (gu) return Ea;
  gu = 1;
  var e = /* @__PURE__ */ Aw();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Ea = e, Ea;
}
var Pa, vu;
function Ew() {
  if (vu) return Pa;
  vu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Pa = e, Pa;
}
var ka, bu;
function Pw() {
  return bu || (bu = 1, ka = function() {
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
    var s = Object.getOwnPropertySymbols(t);
    if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var i = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(t, n)
      );
      if (i.value !== o || i.enumerable !== !0)
        return !1;
    }
    return !0;
  }), ka;
}
var $a, wu;
function kw() {
  if (wu) return $a;
  wu = 1;
  var e = typeof Symbol < "u" && Symbol, t = Pw();
  return $a = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, $a;
}
var Ta, Su;
function Ff() {
  return Su || (Su = 1, Ta = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ta;
}
var Da, xu;
function Rf() {
  if (xu) return Da;
  xu = 1;
  var e = /* @__PURE__ */ Tf();
  return Da = e.getPrototypeOf || null, Da;
}
var Fa, Cu;
function $w() {
  if (Cu) return Fa;
  Cu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(c, l) {
    for (var u = [], d = 0; d < c.length; d += 1)
      u[d] = c[d];
    for (var y = 0; y < l.length; y += 1)
      u[y + c.length] = l[y];
    return u;
  }, a = function(c, l) {
    for (var u = [], d = l, y = 0; d < c.length; d += 1, y += 1)
      u[y] = c[d];
    return u;
  }, s = function(i, c) {
    for (var l = "", u = 0; u < i.length; u += 1)
      l += i[u], u + 1 < i.length && (l += c);
    return l;
  };
  return Fa = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var u = a(arguments, 1), d, y = function() {
      if (this instanceof d) {
        var v = l.apply(
          this,
          o(u, arguments)
        );
        return Object(v) === v ? v : this;
      }
      return l.apply(
        c,
        o(u, arguments)
      );
    }, g = n(0, l.length - u.length), p = [], h = 0; h < g; h++)
      p[h] = "$" + h;
    if (d = Function("binder", "return function (" + s(p, ",") + "){ return binder.apply(this,arguments); }")(y), l.prototype) {
      var f = function() {
      };
      f.prototype = l.prototype, d.prototype = new f(), f.prototype = null;
    }
    return d;
  }, Fa;
}
var Ra, Ou;
function $o() {
  if (Ou) return Ra;
  Ou = 1;
  var e = $w();
  return Ra = Function.prototype.bind || e, Ra;
}
var _a, Au;
function _i() {
  return Au || (Au = 1, _a = Function.prototype.call), _a;
}
var Ia, Eu;
function _f() {
  return Eu || (Eu = 1, Ia = Function.prototype.apply), Ia;
}
var Ba, Pu;
function Tw() {
  return Pu || (Pu = 1, Ba = typeof Reflect < "u" && Reflect && Reflect.apply), Ba;
}
var La, ku;
function Dw() {
  if (ku) return La;
  ku = 1;
  var e = $o(), t = _f(), n = _i(), r = Tw();
  return La = r || e.call(n, t), La;
}
var Ma, $u;
function If() {
  if ($u) return Ma;
  $u = 1;
  var e = $o(), t = /* @__PURE__ */ Hn(), n = _i(), r = Dw();
  return Ma = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Ma;
}
var Na, Tu;
function Fw() {
  if (Tu) return Na;
  Tu = 1;
  var e = If(), t = /* @__PURE__ */ Df(), n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var r = !!n && t && t(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, a = o.getPrototypeOf;
  return Na = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(i) {
      return a(i == null ? i : o(i));
    }
  ) : !1, Na;
}
var ja, Du;
function Rw() {
  if (Du) return ja;
  Du = 1;
  var e = Ff(), t = Rf(), n = /* @__PURE__ */ Fw();
  return ja = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, ja;
}
var qa, Fu;
function _w() {
  if (Fu) return qa;
  Fu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = $o();
  return qa = n.call(e, t), qa;
}
var Va, Ru;
function Ii() {
  if (Ru) return Va;
  Ru = 1;
  var e, t = /* @__PURE__ */ Tf(), n = /* @__PURE__ */ dw(), r = /* @__PURE__ */ fw(), o = /* @__PURE__ */ pw(), a = /* @__PURE__ */ mw(), s = /* @__PURE__ */ hw(), i = /* @__PURE__ */ Hn(), c = /* @__PURE__ */ yw(), l = /* @__PURE__ */ gw(), u = /* @__PURE__ */ vw(), d = /* @__PURE__ */ bw(), y = /* @__PURE__ */ ww(), g = /* @__PURE__ */ Sw(), p = /* @__PURE__ */ xw(), h = /* @__PURE__ */ Ow(), f = Function, v = function(ke) {
    try {
      return f('"use strict"; return (' + ke + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Df(), O = /* @__PURE__ */ Ew(), P = function() {
    throw new i();
  }, F = w ? function() {
    try {
      return arguments.callee, P;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return P;
      }
    }
  }() : P, H = kw()(), A = Rw(), W = Rf(), B = Ff(), $ = _f(), V = _i(), b = {}, E = typeof Uint8Array > "u" || !A ? e : A(Uint8Array), C = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": H && A ? A([][Symbol.iterator]()) : e,
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
    "%Error%": n,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": r,
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
    "%IteratorPrototype%": H && A ? A(A([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !H || !A ? e : A((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": w,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": o,
    "%ReferenceError%": a,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !H || !A ? e : A((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": H && A ? A(""[Symbol.iterator]()) : e,
    "%Symbol%": H ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": F,
    "%TypedArray%": E,
    "%TypeError%": i,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": V,
    "%Function.prototype.apply%": $,
    "%Object.defineProperty%": O,
    "%Object.getPrototypeOf%": W,
    "%Math.abs%": l,
    "%Math.floor%": u,
    "%Math.max%": d,
    "%Math.min%": y,
    "%Math.pow%": g,
    "%Math.round%": p,
    "%Math.sign%": h,
    "%Reflect.getPrototypeOf%": B
  };
  if (A)
    try {
      null.error;
    } catch (ke) {
      var x = A(A(ke));
      C["%Error.prototype%"] = x;
    }
  var K = function ke(ue) {
    var we;
    if (ue === "%AsyncFunction%")
      we = v("async function () {}");
    else if (ue === "%GeneratorFunction%")
      we = v("function* () {}");
    else if (ue === "%AsyncGeneratorFunction%")
      we = v("async function* () {}");
    else if (ue === "%AsyncGenerator%") {
      var me = ke("%AsyncGeneratorFunction%");
      me && (we = me.prototype);
    } else if (ue === "%AsyncIteratorPrototype%") {
      var Ce = ke("%AsyncGenerator%");
      Ce && A && (we = A(Ce.prototype));
    }
    return C[ue] = we, we;
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
  }, R = $o(), X = /* @__PURE__ */ _w(), ae = R.call(V, Array.prototype.concat), Fe = R.call($, Array.prototype.splice), Ge = R.call(V, String.prototype.replace), $e = R.call(V, String.prototype.slice), Me = R.call(V, RegExp.prototype.exec), Re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, bt = function(ue) {
    var we = $e(ue, 0, 1), me = $e(ue, -1);
    if (we === "%" && me !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (me === "%" && we !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var Ce = [];
    return Ge(ue, Re, function(_e, ot, Ie, Ve) {
      Ce[Ce.length] = Ie ? Ge(Ve, Ne, "$1") : ot || _e;
    }), Ce;
  }, wt = function(ue, we) {
    var me = ue, Ce;
    if (X(L, me) && (Ce = L[me], me = "%" + Ce[0] + "%"), X(C, me)) {
      var _e = C[me];
      if (_e === b && (_e = K(me)), typeof _e > "u" && !we)
        throw new i("intrinsic " + ue + " exists, but is not available. Please file an issue!");
      return {
        alias: Ce,
        name: me,
        value: _e
      };
    }
    throw new s("intrinsic " + ue + " does not exist!");
  };
  return Va = function(ue, we) {
    if (typeof ue != "string" || ue.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (Me(/^%?[^%]*%?$/, ue) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var me = bt(ue), Ce = me.length > 0 ? me[0] : "", _e = wt("%" + Ce + "%", we), ot = _e.name, Ie = _e.value, Ve = !1, at = _e.alias;
    at && (Ce = at[0], Fe(me, ae([0, 1], at)));
    for (var Cn = 1, Vt = !0; Cn < me.length; Cn += 1) {
      var it = me[Cn], On = $e(it, 0, 1), An = $e(it, -1);
      if ((On === '"' || On === "'" || On === "`" || An === '"' || An === "'" || An === "`") && On !== An)
        throw new s("property names with quotes must have matching quotes");
      if ((it === "constructor" || !Vt) && (Ve = !0), Ce += "." + it, ot = "%" + Ce + "%", X(C, ot))
        Ie = C[ot];
      else if (Ie != null) {
        if (!(it in Ie)) {
          if (!we)
            throw new i("base intrinsic for " + ue + " exists, but the property is not available.");
          return;
        }
        if (w && Cn + 1 >= me.length) {
          var En = w(Ie, it);
          Vt = !!En, Vt && "get" in En && !("originalValue" in En.get) ? Ie = En.get : Ie = Ie[it];
        } else
          Vt = X(Ie, it), Ie = Ie[it];
        Vt && !Ve && (C[ot] = Ie);
      }
    }
    return Ie;
  }, Va;
}
var za, _u;
function Bf() {
  if (_u) return za;
  _u = 1;
  var e = /* @__PURE__ */ Ii(), t = If(), n = t([e("%String.prototype.indexOf%")]);
  return za = function(o, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof s == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, za;
}
var Ua, Iu;
function Lf() {
  if (Iu) return Ua;
  Iu = 1;
  var e = /* @__PURE__ */ Ii(), t = /* @__PURE__ */ Bf(), n = /* @__PURE__ */ ko(), r = /* @__PURE__ */ Hn(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), i = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Ua = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var d, y = {
      assert: function(g) {
        if (!y.has(g))
          throw new r("Side channel does not contain " + n(g));
      },
      delete: function(g) {
        if (d) {
          var p = c(d, g);
          return l(d) === 0 && (d = void 0), p;
        }
        return !1;
      },
      get: function(g) {
        if (d)
          return a(d, g);
      },
      has: function(g) {
        return d ? i(d, g) : !1;
      },
      set: function(g, p) {
        d || (d = new o()), s(d, g, p);
      }
    };
    return y;
  }, Ua;
}
var Ha, Bu;
function Iw() {
  if (Bu) return Ha;
  Bu = 1;
  var e = /* @__PURE__ */ Ii(), t = /* @__PURE__ */ Bf(), n = /* @__PURE__ */ ko(), r = Lf(), o = /* @__PURE__ */ Hn(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), i = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Ha = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var d, y, g = {
        assert: function(p) {
          if (!g.has(p))
            throw new o("Side channel does not contain " + n(p));
        },
        delete: function(p) {
          if (a && p && (typeof p == "object" || typeof p == "function")) {
            if (d)
              return l(d, p);
          } else if (r && y)
            return y.delete(p);
          return !1;
        },
        get: function(p) {
          return a && p && (typeof p == "object" || typeof p == "function") && d ? s(d, p) : y && y.get(p);
        },
        has: function(p) {
          return a && p && (typeof p == "object" || typeof p == "function") && d ? c(d, p) : !!y && y.has(p);
        },
        set: function(p, h) {
          a && p && (typeof p == "object" || typeof p == "function") ? (d || (d = new a()), i(d, p, h)) : r && (y || (y = r()), y.set(p, h));
        }
      };
      return g;
    }
  ) : r, Ha;
}
var Wa, Lu;
function Bw() {
  if (Lu) return Wa;
  Lu = 1;
  var e = /* @__PURE__ */ Hn(), t = /* @__PURE__ */ ko(), n = cw(), r = Lf(), o = Iw(), a = o || r || n;
  return Wa = function() {
    var i, c = {
      assert: function(l) {
        if (!c.has(l))
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
      set: function(l, u) {
        i || (i = a()), i.set(l, u);
      }
    };
    return c;
  }, Wa;
}
var Ka, Mu;
function Bi() {
  if (Mu) return Ka;
  Mu = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ka = {
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
  }, Ka;
}
var Ga, Nu;
function Mf() {
  if (Nu) return Ga;
  Nu = 1;
  var e = /* @__PURE__ */ Bi(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var f = [], v = 0; v < 256; ++v)
      f.push("%" + ((v < 16 ? "0" : "") + v.toString(16)).toUpperCase());
    return f;
  }(), o = function(v) {
    for (; v.length > 1; ) {
      var w = v.pop(), O = w.obj[w.prop];
      if (n(O)) {
        for (var P = [], F = 0; F < O.length; ++F)
          typeof O[F] < "u" && P.push(O[F]);
        w.obj[w.prop] = P;
      }
    }
  }, a = function(v, w) {
    for (var O = w && w.plainObjects ? { __proto__: null } : {}, P = 0; P < v.length; ++P)
      typeof v[P] < "u" && (O[P] = v[P]);
    return O;
  }, s = function f(v, w, O) {
    if (!w)
      return v;
    if (typeof w != "object" && typeof w != "function") {
      if (n(v))
        v.push(w);
      else if (v && typeof v == "object")
        (O && (O.plainObjects || O.allowPrototypes) || !t.call(Object.prototype, w)) && (v[w] = !0);
      else
        return [v, w];
      return v;
    }
    if (!v || typeof v != "object")
      return [v].concat(w);
    var P = v;
    return n(v) && !n(w) && (P = a(v, O)), n(v) && n(w) ? (w.forEach(function(F, H) {
      if (t.call(v, H)) {
        var A = v[H];
        A && typeof A == "object" && F && typeof F == "object" ? v[H] = f(A, F, O) : v.push(F);
      } else
        v[H] = F;
    }), v) : Object.keys(w).reduce(function(F, H) {
      var A = w[H];
      return t.call(F, H) ? F[H] = f(F[H], A, O) : F[H] = A, F;
    }, P);
  }, i = function(v, w) {
    return Object.keys(w).reduce(function(O, P) {
      return O[P] = w[P], O;
    }, v);
  }, c = function(f, v, w) {
    var O = f.replace(/\+/g, " ");
    if (w === "iso-8859-1")
      return O.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(O);
    } catch {
      return O;
    }
  }, l = 1024, u = function(v, w, O, P, F) {
    if (v.length === 0)
      return v;
    var H = v;
    if (typeof v == "symbol" ? H = Symbol.prototype.toString.call(v) : typeof v != "string" && (H = String(v)), O === "iso-8859-1")
      return escape(H).replace(/%u[0-9a-f]{4}/gi, function(E) {
        return "%26%23" + parseInt(E.slice(2), 16) + "%3B";
      });
    for (var A = "", W = 0; W < H.length; W += l) {
      for (var B = H.length >= l ? H.slice(W, W + l) : H, $ = [], V = 0; V < B.length; ++V) {
        var b = B.charCodeAt(V);
        if (b === 45 || b === 46 || b === 95 || b === 126 || b >= 48 && b <= 57 || b >= 65 && b <= 90 || b >= 97 && b <= 122 || F === e.RFC1738 && (b === 40 || b === 41)) {
          $[$.length] = B.charAt(V);
          continue;
        }
        if (b < 128) {
          $[$.length] = r[b];
          continue;
        }
        if (b < 2048) {
          $[$.length] = r[192 | b >> 6] + r[128 | b & 63];
          continue;
        }
        if (b < 55296 || b >= 57344) {
          $[$.length] = r[224 | b >> 12] + r[128 | b >> 6 & 63] + r[128 | b & 63];
          continue;
        }
        V += 1, b = 65536 + ((b & 1023) << 10 | B.charCodeAt(V) & 1023), $[$.length] = r[240 | b >> 18] + r[128 | b >> 12 & 63] + r[128 | b >> 6 & 63] + r[128 | b & 63];
      }
      A += $.join("");
    }
    return A;
  }, d = function(v) {
    for (var w = [{ obj: { o: v }, prop: "o" }], O = [], P = 0; P < w.length; ++P)
      for (var F = w[P], H = F.obj[F.prop], A = Object.keys(H), W = 0; W < A.length; ++W) {
        var B = A[W], $ = H[B];
        typeof $ == "object" && $ !== null && O.indexOf($) === -1 && (w.push({ obj: H, prop: B }), O.push($));
      }
    return o(w), v;
  }, y = function(v) {
    return Object.prototype.toString.call(v) === "[object RegExp]";
  }, g = function(v) {
    return !v || typeof v != "object" ? !1 : !!(v.constructor && v.constructor.isBuffer && v.constructor.isBuffer(v));
  }, p = function(v, w) {
    return [].concat(v, w);
  }, h = function(v, w) {
    if (n(v)) {
      for (var O = [], P = 0; P < v.length; P += 1)
        O.push(w(v[P]));
      return O;
    }
    return w(v);
  };
  return Ga = {
    arrayToObject: a,
    assign: i,
    combine: p,
    compact: d,
    decode: c,
    encode: u,
    isBuffer: g,
    isRegExp: y,
    maybeMap: h,
    merge: s
  }, Ga;
}
var Ya, ju;
function Lw() {
  if (ju) return Ya;
  ju = 1;
  var e = Bw(), t = /* @__PURE__ */ Mf(), n = /* @__PURE__ */ Bi(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(f) {
      return f + "[]";
    },
    comma: "comma",
    indices: function(f, v) {
      return f + "[" + v + "]";
    },
    repeat: function(f) {
      return f;
    }
  }, a = Array.isArray, s = Array.prototype.push, i = function(h, f) {
    s.apply(h, a(f) ? f : [f]);
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
    serializeDate: function(f) {
      return c.call(f);
    },
    skipNulls: !1,
    strictNullHandling: !1
  }, d = function(f) {
    return typeof f == "string" || typeof f == "number" || typeof f == "boolean" || typeof f == "symbol" || typeof f == "bigint";
  }, y = {}, g = function h(f, v, w, O, P, F, H, A, W, B, $, V, b, E, C, x, K, L) {
    for (var R = f, X = L, ae = 0, Fe = !1; (X = X.get(y)) !== void 0 && !Fe; ) {
      var Ge = X.get(f);
      if (ae += 1, typeof Ge < "u") {
        if (Ge === ae)
          throw new RangeError("Cyclic object value");
        Fe = !0;
      }
      typeof X.get(y) > "u" && (ae = 0);
    }
    if (typeof B == "function" ? R = B(v, R) : R instanceof Date ? R = b(R) : w === "comma" && a(R) && (R = t.maybeMap(R, function(ot) {
      return ot instanceof Date ? b(ot) : ot;
    })), R === null) {
      if (F)
        return W && !x ? W(v, u.encoder, K, "key", E) : v;
      R = "";
    }
    if (d(R) || t.isBuffer(R)) {
      if (W) {
        var $e = x ? v : W(v, u.encoder, K, "key", E);
        return [C($e) + "=" + C(W(R, u.encoder, K, "value", E))];
      }
      return [C(v) + "=" + C(String(R))];
    }
    var Me = [];
    if (typeof R > "u")
      return Me;
    var Re;
    if (w === "comma" && a(R))
      x && W && (R = t.maybeMap(R, W)), Re = [{ value: R.length > 0 ? R.join(",") || null : void 0 }];
    else if (a(B))
      Re = B;
    else {
      var Ne = Object.keys(R);
      Re = $ ? Ne.sort($) : Ne;
    }
    var bt = A ? String(v).replace(/\./g, "%2E") : String(v), wt = O && a(R) && R.length === 1 ? bt + "[]" : bt;
    if (P && a(R) && R.length === 0)
      return wt + "[]";
    for (var ke = 0; ke < Re.length; ++ke) {
      var ue = Re[ke], we = typeof ue == "object" && ue && typeof ue.value < "u" ? ue.value : R[ue];
      if (!(H && we === null)) {
        var me = V && A ? String(ue).replace(/\./g, "%2E") : String(ue), Ce = a(R) ? typeof w == "function" ? w(wt, me) : wt : wt + (V ? "." + me : "[" + me + "]");
        L.set(f, ae);
        var _e = e();
        _e.set(y, L), i(Me, h(
          we,
          Ce,
          w,
          O,
          P,
          F,
          H,
          A,
          w === "comma" && x && a(R) ? null : W,
          B,
          $,
          V,
          b,
          E,
          C,
          x,
          K,
          _e
        ));
      }
    }
    return Me;
  }, p = function(f) {
    if (!f)
      return u;
    if (typeof f.allowEmptyArrays < "u" && typeof f.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof f.encodeDotInKeys < "u" && typeof f.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (f.encoder !== null && typeof f.encoder < "u" && typeof f.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var v = f.charset || u.charset;
    if (typeof f.charset < "u" && f.charset !== "utf-8" && f.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var w = n.default;
    if (typeof f.format < "u") {
      if (!r.call(n.formatters, f.format))
        throw new TypeError("Unknown format option provided.");
      w = f.format;
    }
    var O = n.formatters[w], P = u.filter;
    (typeof f.filter == "function" || a(f.filter)) && (P = f.filter);
    var F;
    if (f.arrayFormat in o ? F = f.arrayFormat : "indices" in f ? F = f.indices ? "indices" : "repeat" : F = u.arrayFormat, "commaRoundTrip" in f && typeof f.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var H = typeof f.allowDots > "u" ? f.encodeDotInKeys === !0 ? !0 : u.allowDots : !!f.allowDots;
    return {
      addQueryPrefix: typeof f.addQueryPrefix == "boolean" ? f.addQueryPrefix : u.addQueryPrefix,
      allowDots: H,
      allowEmptyArrays: typeof f.allowEmptyArrays == "boolean" ? !!f.allowEmptyArrays : u.allowEmptyArrays,
      arrayFormat: F,
      charset: v,
      charsetSentinel: typeof f.charsetSentinel == "boolean" ? f.charsetSentinel : u.charsetSentinel,
      commaRoundTrip: !!f.commaRoundTrip,
      delimiter: typeof f.delimiter > "u" ? u.delimiter : f.delimiter,
      encode: typeof f.encode == "boolean" ? f.encode : u.encode,
      encodeDotInKeys: typeof f.encodeDotInKeys == "boolean" ? f.encodeDotInKeys : u.encodeDotInKeys,
      encoder: typeof f.encoder == "function" ? f.encoder : u.encoder,
      encodeValuesOnly: typeof f.encodeValuesOnly == "boolean" ? f.encodeValuesOnly : u.encodeValuesOnly,
      filter: P,
      format: w,
      formatter: O,
      serializeDate: typeof f.serializeDate == "function" ? f.serializeDate : u.serializeDate,
      skipNulls: typeof f.skipNulls == "boolean" ? f.skipNulls : u.skipNulls,
      sort: typeof f.sort == "function" ? f.sort : null,
      strictNullHandling: typeof f.strictNullHandling == "boolean" ? f.strictNullHandling : u.strictNullHandling
    };
  };
  return Ya = function(h, f) {
    var v = h, w = p(f), O, P;
    typeof w.filter == "function" ? (P = w.filter, v = P("", v)) : a(w.filter) && (P = w.filter, O = P);
    var F = [];
    if (typeof v != "object" || v === null)
      return "";
    var H = o[w.arrayFormat], A = H === "comma" && w.commaRoundTrip;
    O || (O = Object.keys(v)), w.sort && O.sort(w.sort);
    for (var W = e(), B = 0; B < O.length; ++B) {
      var $ = O[B], V = v[$];
      w.skipNulls && V === null || i(F, g(
        V,
        $,
        H,
        A,
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
        W
      ));
    }
    var b = F.join(w.delimiter), E = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? E += "utf8=%26%2310003%3B&" : E += "utf8=%E2%9C%93&"), b.length > 0 ? E + b : "";
  }, Ya;
}
var Xa, qu;
function Mw() {
  if (qu) return Xa;
  qu = 1;
  var e = /* @__PURE__ */ Mf(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
  }, o = function(y) {
    return y.replace(/&#(\d+);/g, function(g, p) {
      return String.fromCharCode(parseInt(p, 10));
    });
  }, a = function(y, g, p) {
    if (y && typeof y == "string" && g.comma && y.indexOf(",") > -1)
      return y.split(",");
    if (g.throwOnLimitExceeded && p >= g.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + g.arrayLimit + " element" + (g.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return y;
  }, s = "utf8=%26%2310003%3B", i = "utf8=%E2%9C%93", c = function(g, p) {
    var h = { __proto__: null }, f = p.ignoreQueryPrefix ? g.replace(/^\?/, "") : g;
    f = f.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var v = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit, w = f.split(
      p.delimiter,
      p.throwOnLimitExceeded ? v + 1 : v
    );
    if (p.throwOnLimitExceeded && w.length > v)
      throw new RangeError("Parameter limit exceeded. Only " + v + " parameter" + (v === 1 ? "" : "s") + " allowed.");
    var O = -1, P, F = p.charset;
    if (p.charsetSentinel)
      for (P = 0; P < w.length; ++P)
        w[P].indexOf("utf8=") === 0 && (w[P] === i ? F = "utf-8" : w[P] === s && (F = "iso-8859-1"), O = P, P = w.length);
    for (P = 0; P < w.length; ++P)
      if (P !== O) {
        var H = w[P], A = H.indexOf("]="), W = A === -1 ? H.indexOf("=") : A + 1, B, $;
        W === -1 ? (B = p.decoder(H, r.decoder, F, "key"), $ = p.strictNullHandling ? null : "") : (B = p.decoder(H.slice(0, W), r.decoder, F, "key"), $ = e.maybeMap(
          a(
            H.slice(W + 1),
            p,
            n(h[B]) ? h[B].length : 0
          ),
          function(b) {
            return p.decoder(b, r.decoder, F, "value");
          }
        )), $ && p.interpretNumericEntities && F === "iso-8859-1" && ($ = o(String($))), H.indexOf("[]=") > -1 && ($ = n($) ? [$] : $);
        var V = t.call(h, B);
        V && p.duplicates === "combine" ? h[B] = e.combine(h[B], $) : (!V || p.duplicates === "last") && (h[B] = $);
      }
    return h;
  }, l = function(y, g, p, h) {
    var f = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var v = y.slice(0, -1).join("");
      f = Array.isArray(g) && g[v] ? g[v].length : 0;
    }
    for (var w = h ? g : a(g, p, f), O = y.length - 1; O >= 0; --O) {
      var P, F = y[O];
      if (F === "[]" && p.parseArrays)
        P = p.allowEmptyArrays && (w === "" || p.strictNullHandling && w === null) ? [] : e.combine([], w);
      else {
        P = p.plainObjects ? { __proto__: null } : {};
        var H = F.charAt(0) === "[" && F.charAt(F.length - 1) === "]" ? F.slice(1, -1) : F, A = p.decodeDotInKeys ? H.replace(/%2E/g, ".") : H, W = parseInt(A, 10);
        !p.parseArrays && A === "" ? P = { 0: w } : !isNaN(W) && F !== A && String(W) === A && W >= 0 && p.parseArrays && W <= p.arrayLimit ? (P = [], P[W] = w) : A !== "__proto__" && (P[A] = w);
      }
      w = P;
    }
    return w;
  }, u = function(g, p, h, f) {
    if (g) {
      var v = h.allowDots ? g.replace(/\.([^.[]+)/g, "[$1]") : g, w = /(\[[^[\]]*])/, O = /(\[[^[\]]*])/g, P = h.depth > 0 && w.exec(v), F = P ? v.slice(0, P.index) : v, H = [];
      if (F) {
        if (!h.plainObjects && t.call(Object.prototype, F) && !h.allowPrototypes)
          return;
        H.push(F);
      }
      for (var A = 0; h.depth > 0 && (P = O.exec(v)) !== null && A < h.depth; ) {
        if (A += 1, !h.plainObjects && t.call(Object.prototype, P[1].slice(1, -1)) && !h.allowPrototypes)
          return;
        H.push(P[1]);
      }
      if (P) {
        if (h.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + h.depth + " and strictDepth is true");
        H.push("[" + v.slice(P.index) + "]");
      }
      return l(H, p, h, f);
    }
  }, d = function(g) {
    if (!g)
      return r;
    if (typeof g.allowEmptyArrays < "u" && typeof g.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof g.decodeDotInKeys < "u" && typeof g.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (g.decoder !== null && typeof g.decoder < "u" && typeof g.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof g.charset < "u" && g.charset !== "utf-8" && g.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof g.throwOnLimitExceeded < "u" && typeof g.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var p = typeof g.charset > "u" ? r.charset : g.charset, h = typeof g.duplicates > "u" ? r.duplicates : g.duplicates;
    if (h !== "combine" && h !== "first" && h !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var f = typeof g.allowDots > "u" ? g.decodeDotInKeys === !0 ? !0 : r.allowDots : !!g.allowDots;
    return {
      allowDots: f,
      allowEmptyArrays: typeof g.allowEmptyArrays == "boolean" ? !!g.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof g.allowPrototypes == "boolean" ? g.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof g.allowSparse == "boolean" ? g.allowSparse : r.allowSparse,
      arrayLimit: typeof g.arrayLimit == "number" ? g.arrayLimit : r.arrayLimit,
      charset: p,
      charsetSentinel: typeof g.charsetSentinel == "boolean" ? g.charsetSentinel : r.charsetSentinel,
      comma: typeof g.comma == "boolean" ? g.comma : r.comma,
      decodeDotInKeys: typeof g.decodeDotInKeys == "boolean" ? g.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof g.decoder == "function" ? g.decoder : r.decoder,
      delimiter: typeof g.delimiter == "string" || e.isRegExp(g.delimiter) ? g.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof g.depth == "number" || g.depth === !1 ? +g.depth : r.depth,
      duplicates: h,
      ignoreQueryPrefix: g.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof g.interpretNumericEntities == "boolean" ? g.interpretNumericEntities : r.interpretNumericEntities,
      parameterLimit: typeof g.parameterLimit == "number" ? g.parameterLimit : r.parameterLimit,
      parseArrays: g.parseArrays !== !1,
      plainObjects: typeof g.plainObjects == "boolean" ? g.plainObjects : r.plainObjects,
      strictDepth: typeof g.strictDepth == "boolean" ? !!g.strictDepth : r.strictDepth,
      strictNullHandling: typeof g.strictNullHandling == "boolean" ? g.strictNullHandling : r.strictNullHandling,
      throwOnLimitExceeded: typeof g.throwOnLimitExceeded == "boolean" ? g.throwOnLimitExceeded : !1
    };
  };
  return Xa = function(y, g) {
    var p = d(g);
    if (y === "" || y === null || typeof y > "u")
      return p.plainObjects ? { __proto__: null } : {};
    for (var h = typeof y == "string" ? c(y, p) : y, f = p.plainObjects ? { __proto__: null } : {}, v = Object.keys(h), w = 0; w < v.length; ++w) {
      var O = v[w], P = u(O, h[O], p, typeof y == "string");
      f = e.merge(f, P, p);
    }
    return p.allowSparse === !0 ? f : e.compact(f);
  }, Xa;
}
var Ja, Vu;
function Nw() {
  if (Vu) return Ja;
  Vu = 1;
  var e = /* @__PURE__ */ Lw(), t = /* @__PURE__ */ Mw(), n = /* @__PURE__ */ Bi();
  return Ja = {
    formats: n,
    parse: t,
    stringify: e
  }, Ja;
}
var zu = /* @__PURE__ */ Nw();
function Nf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: jw } = Object.prototype, { getPrototypeOf: Li } = Object, { iterator: To, toStringTag: jf } = Symbol, Do = /* @__PURE__ */ ((e) => (t) => {
  const n = jw.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), gt = (e) => (e = e.toLowerCase(), (t) => Do(t) === e), Fo = (e) => (t) => typeof t === e, { isArray: Wn } = Array, pr = Fo("undefined");
function qw(e) {
  return e !== null && !pr(e) && e.constructor !== null && !pr(e.constructor) && We(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const qf = gt("ArrayBuffer");
function Vw(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && qf(e.buffer), t;
}
const zw = Fo("string"), We = Fo("function"), Vf = Fo("number"), Ro = (e) => e !== null && typeof e == "object", Uw = (e) => e === !0 || e === !1, Wr = (e) => {
  if (Do(e) !== "object")
    return !1;
  const t = Li(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(jf in e) && !(To in e);
}, Hw = gt("Date"), Ww = gt("File"), Kw = gt("Blob"), Gw = gt("FileList"), Yw = (e) => Ro(e) && We(e.pipe), Xw = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || We(e.append) && ((t = Do(e)) === "formdata" || // detect form-data instance
  t === "object" && We(e.toString) && e.toString() === "[object FormData]"));
}, Jw = gt("URLSearchParams"), [Qw, Zw, e2, t2] = ["ReadableStream", "Request", "Response", "Headers"].map(gt), n2 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Cr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Wn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (r = 0; r < s; r++)
      i = a[r], t.call(null, e[i], i, e);
  }
}
function zf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Uf = (e) => !pr(e) && e !== sn;
function Ms() {
  const { caseless: e } = Uf(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && zf(t, o) || o;
    Wr(t[a]) && Wr(r) ? t[a] = Ms(t[a], r) : Wr(r) ? t[a] = Ms({}, r) : Wn(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Cr(arguments[r], n);
  return t;
}
const r2 = (e, t, n, { allOwnKeys: r } = {}) => (Cr(t, (o, a) => {
  n && We(o) ? e[a] = Nf(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), o2 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), a2 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, s2 = (e, t, n, r) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && Li(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, i2 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, l2 = (e) => {
  if (!e) return null;
  if (Wn(e)) return e;
  let t = e.length;
  if (!Vf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, u2 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Li(Uint8Array)), c2 = (e, t) => {
  const r = (e && e[To]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, d2 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, f2 = gt("HTMLFormElement"), p2 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Uu = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), m2 = gt("RegExp"), Hf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Cr(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, h2 = (e) => {
  Hf(e, (t, n) => {
    if (We(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (We(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, y2 = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Wn(e) ? r(e) : r(String(e).split(t)), n;
}, g2 = () => {
}, v2 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function b2(e) {
  return !!(e && We(e.append) && e[jf] === "FormData" && e[To]);
}
const w2 = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ro(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = Wn(r) ? [] : {};
        return Cr(r, (s, i) => {
          const c = n(s, o + 1);
          !pr(c) && (a[i] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, S2 = gt("AsyncFunction"), x2 = (e) => e && (Ro(e) || We(e)) && We(e.then) && We(e.catch), Wf = ((e, t) => e ? setImmediate : t ? ((n, r) => (sn.addEventListener("message", ({ source: o, data: a }) => {
  o === sn && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), sn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  We(sn.postMessage)
), C2 = typeof queueMicrotask < "u" ? queueMicrotask.bind(sn) : typeof process < "u" && process.nextTick || Wf, O2 = (e) => e != null && We(e[To]), q = {
  isArray: Wn,
  isArrayBuffer: qf,
  isBuffer: qw,
  isFormData: Xw,
  isArrayBufferView: Vw,
  isString: zw,
  isNumber: Vf,
  isBoolean: Uw,
  isObject: Ro,
  isPlainObject: Wr,
  isReadableStream: Qw,
  isRequest: Zw,
  isResponse: e2,
  isHeaders: t2,
  isUndefined: pr,
  isDate: Hw,
  isFile: Ww,
  isBlob: Kw,
  isRegExp: m2,
  isFunction: We,
  isStream: Yw,
  isURLSearchParams: Jw,
  isTypedArray: u2,
  isFileList: Gw,
  forEach: Cr,
  merge: Ms,
  extend: r2,
  trim: n2,
  stripBOM: o2,
  inherits: a2,
  toFlatObject: s2,
  kindOf: Do,
  kindOfTest: gt,
  endsWith: i2,
  toArray: l2,
  forEachEntry: c2,
  matchAll: d2,
  isHTMLForm: f2,
  hasOwnProperty: Uu,
  hasOwnProp: Uu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Hf,
  freezeMethods: h2,
  toObjectSet: y2,
  toCamelCase: p2,
  noop: g2,
  toFiniteNumber: v2,
  findKey: zf,
  global: sn,
  isContextDefined: Uf,
  isSpecCompliantForm: b2,
  toJSONObject: w2,
  isAsyncFn: S2,
  isThenable: x2,
  setImmediate: Wf,
  asap: C2,
  isIterable: O2
};
function oe(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
q.inherits(oe, Error, {
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
      config: q.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Kf = oe.prototype, Gf = {};
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
  Gf[e] = { value: e };
});
Object.defineProperties(oe, Gf);
Object.defineProperty(Kf, "isAxiosError", { value: !0 });
oe.from = (e, t, n, r, o, a) => {
  const s = Object.create(Kf);
  return q.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (i) => i !== "isAxiosError"), oe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const A2 = null;
function Ns(e) {
  return q.isPlainObject(e) || q.isArray(e);
}
function Yf(e) {
  return q.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hu(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = Yf(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function E2(e) {
  return q.isArray(e) && !e.some(Ns);
}
const P2 = q.toFlatObject(q, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function _o(e, t, n) {
  if (!q.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = q.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, f) {
    return !q.isUndefined(f[h]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(t);
  if (!q.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (q.isDate(p))
      return p.toISOString();
    if (!c && q.isBlob(p))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(p) || q.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, h, f) {
    let v = p;
    if (p && !f && typeof p == "object") {
      if (q.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (q.isArray(p) && E2(p) || (q.isFileList(p) || q.endsWith(h, "[]")) && (v = q.toArray(p)))
        return h = Yf(h), v.forEach(function(O, P) {
          !(q.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Hu([h], P, a) : s === null ? h : h + "[]",
            l(O)
          );
        }), !1;
    }
    return Ns(p) ? !0 : (t.append(Hu(f, h, a), l(p)), !1);
  }
  const d = [], y = Object.assign(P2, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ns
  });
  function g(p, h) {
    if (!q.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      d.push(p), q.forEach(p, function(v, w) {
        (!(q.isUndefined(v) || v === null) && o.call(
          t,
          v,
          q.isString(w) ? w.trim() : w,
          h,
          y
        )) === !0 && g(v, h ? h.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!q.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function Wu(e) {
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
function Mi(e, t) {
  this._pairs = [], e && _o(e, this, t);
}
const Xf = Mi.prototype;
Xf.append = function(t, n) {
  this._pairs.push([t, n]);
};
Xf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Wu);
  } : Wu;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function k2(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Jf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || k2;
  q.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = q.isURLSearchParams(t) ? t.toString() : new Mi(t, n).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Ku {
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
    q.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Qf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, $2 = typeof URLSearchParams < "u" ? URLSearchParams : Mi, T2 = typeof FormData < "u" ? FormData : null, D2 = typeof Blob < "u" ? Blob : null, F2 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: $2,
    FormData: T2,
    Blob: D2
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ni = typeof window < "u" && typeof document < "u", js = typeof navigator == "object" && navigator || void 0, R2 = Ni && (!js || ["ReactNative", "NativeScript", "NS"].indexOf(js.product) < 0), _2 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", I2 = Ni && window.location.href || "http://localhost", B2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ni,
  hasStandardBrowserEnv: R2,
  hasStandardBrowserWebWorkerEnv: _2,
  navigator: js,
  origin: I2
}, Symbol.toStringTag, { value: "Module" })), Be = {
  ...B2,
  ...F2
};
function L2(e, t) {
  return _o(e, new Be.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Be.isNode && q.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function M2(e) {
  return q.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function N2(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function Zf(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), c = a >= n.length;
    return s = !s && q.isArray(o) ? o.length : s, c ? (q.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !i) : ((!o[s] || !q.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && q.isArray(o[s]) && (o[s] = N2(o[s])), !i);
  }
  if (q.isFormData(e) && q.isFunction(e.entries)) {
    const n = {};
    return q.forEachEntry(e, (r, o) => {
      t(M2(r), o, n, 0);
    }), n;
  }
  return null;
}
function j2(e, t, n) {
  if (q.isString(e))
    try {
      return (t || JSON.parse)(e), q.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Or = {
  transitional: Qf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = q.isObject(t);
    if (a && q.isHTMLForm(t) && (t = new FormData(t)), q.isFormData(t))
      return o ? JSON.stringify(Zf(t)) : t;
    if (q.isArrayBuffer(t) || q.isBuffer(t) || q.isStream(t) || q.isFile(t) || q.isBlob(t) || q.isReadableStream(t))
      return t;
    if (q.isArrayBufferView(t))
      return t.buffer;
    if (q.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return L2(t, this.formSerializer).toString();
      if ((i = q.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return _o(
          i ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), j2(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Or.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (q.isResponse(t) || q.isReadableStream(t))
      return t;
    if (t && q.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? oe.from(i, oe.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: Be.classes.FormData,
    Blob: Be.classes.Blob
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
q.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Or.headers[e] = {};
});
const q2 = q.toObjectSet([
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
]), V2 = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && q2[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Gu = Symbol("internals");
function Jn(e) {
  return e && String(e).trim().toLowerCase();
}
function Kr(e) {
  return e === !1 || e == null ? e : q.isArray(e) ? e.map(Kr) : String(e);
}
function z2(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const U2 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qa(e, t, n, r, o) {
  if (q.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!q.isString(t)) {
    if (q.isString(r))
      return t.indexOf(r) !== -1;
    if (q.isRegExp(r))
      return r.test(t);
  }
}
function H2(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function W2(e, t) {
  const n = q.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, s) {
        return this[r].call(this, t, o, a, s);
      },
      configurable: !0
    });
  });
}
let Ke = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(i, c, l) {
      const u = Jn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = q.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Kr(i));
    }
    const s = (i, c) => q.forEach(i, (l, u) => a(l, u, c));
    if (q.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (q.isString(t) && (t = t.trim()) && !U2(t))
      s(V2(t), n);
    else if (q.isObject(t) && q.isIterable(t)) {
      let i = {}, c, l;
      for (const u of t) {
        if (!q.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = u[0]] = (c = i[l]) ? q.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(i, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Jn(t), t) {
      const r = q.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return z2(o);
        if (q.isFunction(n))
          return n.call(this, o, r);
        if (q.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Jn(t), t) {
      const r = q.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Qa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = Jn(s), s) {
        const i = q.findKey(r, s);
        i && (!n || Qa(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return q.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || Qa(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return q.forEach(this, (o, a) => {
      const s = q.findKey(r, a);
      if (s) {
        n[s] = Kr(o), delete n[a];
        return;
      }
      const i = t ? H2(a) : String(a).trim();
      i !== a && delete n[a], n[i] = Kr(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return q.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && q.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Gu] = this[Gu] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = Jn(s);
      r[i] || (W2(o, s), r[i] = !0);
    }
    return q.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Ke.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
q.reduceDescriptors(Ke.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
q.freezeMethods(Ke);
function Za(e, t) {
  const n = this || Or, r = t || n, o = Ke.from(r.headers);
  let a = r.data;
  return q.forEach(e, function(i) {
    a = i.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function ep(e) {
  return !!(e && e.__CANCEL__);
}
function Kn(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
q.inherits(Kn, oe, {
  __CANCEL__: !0
});
function tp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new oe(
    "Request failed with status code " + n.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function K2(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function G2(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[a];
    s || (s = l), n[o] = c, r[o] = l;
    let d = a, y = 0;
    for (; d !== o; )
      y += n[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), l - s < t)
      return;
    const g = u && l - u;
    return g ? Math.round(y * 1e3 / g) : void 0;
  };
}
function Y2(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const s = (l, u = Date.now()) => {
    n = u, o = null, a && (clearTimeout(a), a = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - n;
    d >= r ? s(l, u) : (o = l, a || (a = setTimeout(() => {
      a = null, s(o);
    }, r - d)));
  }, () => o && s(o)];
}
const uo = (e, t, n = 3) => {
  let r = 0;
  const o = G2(50, 250);
  return Y2((a) => {
    const s = a.loaded, i = a.lengthComputable ? a.total : void 0, c = s - r, l = o(c), u = s <= i;
    r = s;
    const d = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && i && u ? (i - s) / l : void 0,
      event: a,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Yu = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Xu = (e) => (...t) => q.asap(() => e(...t)), X2 = Be.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Be.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Be.origin),
  Be.navigator && /(msie|trident)/i.test(Be.navigator.userAgent)
) : () => !0, J2 = Be.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      q.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), q.isString(r) && s.push("path=" + r), q.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Q2(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Z2(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function np(e, t, n) {
  let r = !Q2(t);
  return e && (r || n == !1) ? Z2(e, t) : t;
}
const Ju = (e) => e instanceof Ke ? { ...e } : e;
function gn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, y) {
    return q.isPlainObject(l) && q.isPlainObject(u) ? q.merge.call({ caseless: y }, l, u) : q.isPlainObject(u) ? q.merge({}, u) : q.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, y) {
    if (q.isUndefined(u)) {
      if (!q.isUndefined(l))
        return r(void 0, l, d, y);
    } else return r(l, u, d, y);
  }
  function a(l, u) {
    if (!q.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (q.isUndefined(u)) {
      if (!q.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function i(l, u, d) {
    if (d in t)
      return r(l, u);
    if (d in e)
      return r(void 0, l);
  }
  const c = {
    url: a,
    method: a,
    data: a,
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
    responseEncoding: s,
    validateStatus: i,
    headers: (l, u, d) => o(Ju(l), Ju(u), d, !0)
  };
  return q.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, y = d(e[u], t[u], u);
    q.isUndefined(y) && d !== i || (n[u] = y);
  }), n;
}
const rp = (e) => {
  const t = gn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = Ke.from(s), t.url = Jf(np(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let c;
  if (q.isFormData(n)) {
    if (Be.hasStandardBrowserEnv || Be.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Be.hasStandardBrowserEnv && (r && q.isFunction(r) && (r = r(t)), r || r !== !1 && X2(t.url))) {
    const l = o && a && J2.read(a);
    l && s.set(o, l);
  }
  return t;
}, eS = typeof XMLHttpRequest < "u", tS = eS && function(e) {
  return new Promise(function(n, r) {
    const o = rp(e);
    let a = o.data;
    const s = Ke.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: c, onDownloadProgress: l } = o, u, d, y, g, p;
    function h() {
      g && g(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let f = new XMLHttpRequest();
    f.open(o.method.toUpperCase(), o.url, !0), f.timeout = o.timeout;
    function v() {
      if (!f)
        return;
      const O = Ke.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), F = {
        data: !i || i === "text" || i === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: O,
        config: e,
        request: f
      };
      tp(function(A) {
        n(A), h();
      }, function(A) {
        r(A), h();
      }, F), f = null;
    }
    "onloadend" in f ? f.onloadend = v : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(v);
    }, f.onabort = function() {
      f && (r(new oe("Request aborted", oe.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      r(new oe("Network Error", oe.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let P = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const F = o.transitional || Qf;
      o.timeoutErrorMessage && (P = o.timeoutErrorMessage), r(new oe(
        P,
        F.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        f
      )), f = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in f && q.forEach(s.toJSON(), function(P, F) {
      f.setRequestHeader(F, P);
    }), q.isUndefined(o.withCredentials) || (f.withCredentials = !!o.withCredentials), i && i !== "json" && (f.responseType = o.responseType), l && ([y, p] = uo(l, !0), f.addEventListener("progress", y)), c && f.upload && ([d, g] = uo(c), f.upload.addEventListener("progress", d), f.upload.addEventListener("loadend", g)), (o.cancelToken || o.signal) && (u = (O) => {
      f && (r(!O || O.type ? new Kn(null, e, f) : O), f.abort(), f = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const w = K2(o.url);
    if (w && Be.protocols.indexOf(w) === -1) {
      r(new oe("Unsupported protocol " + w + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(a || null);
  });
}, nS = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(l) {
      if (!o) {
        o = !0, i();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof oe ? u : new Kn(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, a(new oe(`timeout ${t} of ms exceeded`, oe.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((l) => {
        l.unsubscribe ? l.unsubscribe(a) : l.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((l) => l.addEventListener("abort", a));
    const { signal: c } = r;
    return c.unsubscribe = () => q.asap(i), c;
  }
}, rS = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, oS = async function* (e, t) {
  for await (const n of aS(e))
    yield* rS(n, t);
}, aS = async function* (e) {
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
}, Qu = (e, t, n, r) => {
  const o = oS(e, t);
  let a = 0, s, i = (c) => {
    s || (s = !0, r && r(c));
  };
  return new ReadableStream({
    async pull(c) {
      try {
        const { done: l, value: u } = await o.next();
        if (l) {
          i(), c.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let y = a += d;
          n(y);
        }
        c.enqueue(new Uint8Array(u));
      } catch (l) {
        throw i(l), l;
      }
    },
    cancel(c) {
      return i(c), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Io = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", op = Io && typeof ReadableStream == "function", sS = Io && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), ap = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, iS = op && ap(() => {
  let e = !1;
  const t = new Request(Be.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Zu = 64 * 1024, qs = op && ap(() => q.isReadableStream(new Response("").body)), co = {
  stream: qs && ((e) => e.body)
};
Io && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !co[t] && (co[t] = q.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new oe(`Response type '${t}' is not supported`, oe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const lS = async (e) => {
  if (e == null)
    return 0;
  if (q.isBlob(e))
    return e.size;
  if (q.isSpecCompliantForm(e))
    return (await new Request(Be.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (q.isArrayBufferView(e) || q.isArrayBuffer(e))
    return e.byteLength;
  if (q.isURLSearchParams(e) && (e = e + ""), q.isString(e))
    return (await sS(e)).byteLength;
}, uS = async (e, t) => {
  const n = q.toFiniteNumber(e.getContentLength());
  return n ?? lS(t);
}, cS = Io && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: a,
    timeout: s,
    onDownloadProgress: i,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: y
  } = rp(e);
  l = l ? (l + "").toLowerCase() : "text";
  let g = nS([o, a && a.toAbortSignal()], s), p;
  const h = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let f;
  try {
    if (c && iS && n !== "get" && n !== "head" && (f = await uS(u, r)) !== 0) {
      let F = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), H;
      if (q.isFormData(r) && (H = F.headers.get("content-type")) && u.setContentType(H), F.body) {
        const [A, W] = Yu(
          f,
          uo(Xu(c))
        );
        r = Qu(F.body, Zu, A, W);
      }
    }
    q.isString(d) || (d = d ? "include" : "omit");
    const v = "credentials" in Request.prototype;
    p = new Request(t, {
      ...y,
      signal: g,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: v ? d : void 0
    });
    let w = await fetch(p);
    const O = qs && (l === "stream" || l === "response");
    if (qs && (i || O && h)) {
      const F = {};
      ["status", "statusText", "headers"].forEach((B) => {
        F[B] = w[B];
      });
      const H = q.toFiniteNumber(w.headers.get("content-length")), [A, W] = i && Yu(
        H,
        uo(Xu(i), !0)
      ) || [];
      w = new Response(
        Qu(w.body, Zu, A, () => {
          W && W(), h && h();
        }),
        F
      );
    }
    l = l || "text";
    let P = await co[q.findKey(co, l) || "text"](w, e);
    return !O && h && h(), await new Promise((F, H) => {
      tp(F, H, {
        data: P,
        headers: Ke.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: p
      });
    });
  } catch (v) {
    throw h && h(), v && v.name === "TypeError" && /Load failed|fetch/i.test(v.message) ? Object.assign(
      new oe("Network Error", oe.ERR_NETWORK, e, p),
      {
        cause: v.cause || v
      }
    ) : oe.from(v, v && v.code, e, p);
  }
}), Vs = {
  http: A2,
  xhr: tS,
  fetch: cS
};
q.forEach(Vs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ec = (e) => `- ${e}`, dS = (e) => q.isFunction(e) || e === null || e === !1, sp = {
  getAdapter: (e) => {
    e = q.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let s;
      if (r = n, !dS(n) && (r = Vs[(s = String(n)).toLowerCase()], r === void 0))
        throw new oe(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(o).map(
        ([i, c]) => `adapter ${i} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(ec).join(`
`) : " " + ec(a[0]) : "as no adapter specified";
      throw new oe(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Vs
};
function es(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Kn(null, e);
}
function tc(e) {
  return es(e), e.headers = Ke.from(e.headers), e.data = Za.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), sp.getAdapter(e.adapter || Or.adapter)(e).then(function(r) {
    return es(e), r.data = Za.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ke.from(r.headers), r;
  }, function(r) {
    return ep(r) || (es(e), r && r.response && (r.response.data = Za.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ke.from(r.response.headers))), Promise.reject(r);
  });
}
const ip = "1.9.0", Bo = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bo[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nc = {};
Bo.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + ip + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, i) => {
    if (t === !1)
      throw new oe(
        o(s, " has been removed" + (n ? " in " + n : "")),
        oe.ERR_DEPRECATED
      );
    return n && !nc[s] && (nc[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, i) : !0;
  };
};
Bo.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function fS(e, t, n) {
  if (typeof e != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], s = t[a];
    if (s) {
      const i = e[a], c = i === void 0 || s(i, a, e);
      if (c !== !0)
        throw new oe("option " + a + " must be " + c, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new oe("Unknown option " + a, oe.ERR_BAD_OPTION);
  }
}
const Gr = {
  assertOptions: fS,
  validators: Bo
}, St = Gr.validators;
let dn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Ku(),
      response: new Ku()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = gn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Gr.assertOptions(r, {
      silentJSONParsing: St.transitional(St.boolean),
      forcedJSONParsing: St.transitional(St.boolean),
      clarifyTimeoutError: St.transitional(St.boolean)
    }, !1), o != null && (q.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Gr.assertOptions(o, {
      encode: St.function,
      serialize: St.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Gr.assertOptions(n, {
      baseUrl: St.spelling("baseURL"),
      withXsrfToken: St.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && q.merge(
      a.common,
      a[n.method]
    );
    a && q.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), n.headers = Ke.concat(s, a);
    const i = [];
    let c = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (c = c && h.synchronous, i.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let u, d = 0, y;
    if (!c) {
      const p = [tc.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, l), y = p.length, u = Promise.resolve(n); d < y; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    y = i.length;
    let g = n;
    for (d = 0; d < y; ) {
      const p = i[d++], h = i[d++];
      try {
        g = p(g);
      } catch (f) {
        h.call(this, f);
        break;
      }
    }
    try {
      u = tc.call(this, g);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, y = l.length; d < y; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = gn(this.defaults, t);
    const n = np(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Jf(n, t.params, t.paramsSerializer);
  }
};
q.forEach(["delete", "get", "head", "options"], function(t) {
  dn.prototype[t] = function(n, r) {
    return this.request(gn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
q.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, i) {
      return this.request(gn(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  dn.prototype[t] = n(), dn.prototype[t + "Form"] = n(!0);
});
let pS = class lp {
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
      const s = new Promise((i) => {
        r.subscribe(i), a = i;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(a);
      }, s;
    }, t(function(a, s, i) {
      r.reason || (r.reason = new Kn(a, s, i), n(r.reason));
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
      token: new lp(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function mS(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function hS(e) {
  return q.isObject(e) && e.isAxiosError === !0;
}
const zs = {
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
Object.entries(zs).forEach(([e, t]) => {
  zs[t] = e;
});
function up(e) {
  const t = new dn(e), n = Nf(dn.prototype.request, t);
  return q.extend(n, dn.prototype, t, { allOwnKeys: !0 }), q.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return up(gn(e, o));
  }, n;
}
const xe = up(Or);
xe.Axios = dn;
xe.CanceledError = Kn;
xe.CancelToken = pS;
xe.isCancel = ep;
xe.VERSION = ip;
xe.toFormData = _o;
xe.AxiosError = oe;
xe.Cancel = xe.CanceledError;
xe.all = function(t) {
  return Promise.all(t);
};
xe.spread = mS;
xe.isAxiosError = hS;
xe.mergeConfig = gn;
xe.AxiosHeaders = Ke;
xe.formToJSON = (e) => Zf(q.isHTMLForm(e) ? new FormData(e) : e);
xe.getAdapter = sp.getAdapter;
xe.HttpStatusCode = zs;
xe.default = xe;
const {
  Axios: JO,
  AxiosError: QO,
  CanceledError: ZO,
  isCancel: e4,
  CancelToken: t4,
  VERSION: n4,
  all: r4,
  Cancel: o4,
  isAxiosError: a4,
  spread: s4,
  toFormData: i4,
  AxiosHeaders: l4,
  HttpStatusCode: u4,
  formToJSON: c4,
  getAdapter: d4,
  mergeConfig: f4
} = xe;
function Us(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function vt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var rc = (e) => vt("before", { cancelable: !0, detail: { visit: e } }), yS = (e) => vt("error", { detail: { errors: e } }), gS = (e) => vt("exception", { cancelable: !0, detail: { exception: e } }), vS = (e) => vt("finish", { detail: { visit: e } }), bS = (e) => vt("invalid", { cancelable: !0, detail: { response: e } }), lr = (e) => vt("navigate", { detail: { page: e } }), wS = (e) => vt("progress", { detail: { progress: e } }), SS = (e) => vt("start", { detail: { visit: e } }), xS = (e) => vt("success", { detail: { page: e } }), CS = (e, t) => vt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), OS = (e) => vt("prefetching", { detail: { visit: e } }), je = class {
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
var AS = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = cp(), n = await dp(), r = await DS(n);
  if (!r) throw new Error("Unable to encrypt history");
  return await PS(t, r, e);
}, jn = { key: "historyKey", iv: "historyIv" }, ES = async (e) => {
  let t = cp(), n = await dp();
  if (!n) throw new Error("Unable to decrypt history");
  return await kS(t, n, e);
}, PS = async (e, t, n) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), s = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, s.written));
}, kS = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
  return JSON.parse(new TextDecoder().decode(r));
}, cp = () => {
  let e = je.get(jn.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return je.set(jn.iv, Array.from(t)), t;
}, $S = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), TS = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  je.set(jn.key, Array.from(new Uint8Array(t)));
}, DS = async (e) => {
  if (e) return e;
  let t = await $S();
  return t ? (await TS(t), t) : null;
}, dp = async () => {
  let e = je.get(jn.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, ct = class {
  static save() {
    fe.saveScrollPositions(Array.from(this.regions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })));
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
    let e = fe.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    let t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    fe.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function Hs(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Hs(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Hs(t));
}
var oc = (e) => e instanceof FormData;
function fp(e, t = new FormData(), n = null) {
  e = e || {};
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && mp(t, pp(n, r), e[r]);
  return t;
}
function pp(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function mp(e, t, n) {
  if (Array.isArray(n)) return Array.from(n.keys()).forEach((r) => mp(e, pp(t, r.toString()), n[r]));
  if (n instanceof Date) return e.append(t, n.toISOString());
  if (n instanceof File) return e.append(t, n, n.name);
  if (n instanceof Blob) return e.append(t, n);
  if (typeof n == "boolean") return e.append(t, n ? "1" : "0");
  if (typeof n == "string") return e.append(t, n);
  if (typeof n == "number") return e.append(t, `${n}`);
  if (n == null) return e.append(t, "");
  fp(n, e, t);
}
function Yt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var FS = (e, t, n, r, o) => {
  let a = typeof e == "string" ? Yt(e) : e;
  if ((Hs(t) || r) && !oc(t) && (t = fp(t)), oc(t)) return [a, t];
  let [s, i] = ji(n, a, t, o);
  return [Yt(s), i];
};
function ji(e, t, n, r = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), i = t.toString().includes("?") || e === "get" && Object.keys(n).length, c = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (l.search = zu.stringify(tr(zu.parse(l.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[o ? `${l.protocol}//${l.host}` : "", a ? l.pathname : "", s ? l.pathname.substring(1) : "", i ? l.search : "", c ? l.hash : ""].join(""), n];
}
function fo(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var ac = (e, t) => {
  e.hash && !t.hash && fo(e).href === t.href && (t.hash = e.hash);
}, Ws = (e, t) => fo(e).href === fo(t).href, RS = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: n }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = n, this;
  }
  set(e, { replace: t = !1, preserveScroll: n = !1, preserveState: r = !1 } = {}) {
    this.componentId = {};
    let o = this.componentId;
    return e.clearHistory && fe.clear(), this.resolve(e.component).then((a) => {
      if (o !== this.componentId) return;
      e.rememberedState ?? (e.rememberedState = {});
      let s = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || Ws(Yt(e.url), s), new Promise((i) => {
        t ? fe.replaceState(e, () => i(null)) : fe.pushState(e, () => i(null));
      }).then(() => {
        let i = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, i && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: a, page: e, preserveState: r }).then(() => {
          n || ct.reset(), ln.fireInternalEvent("loadDeferredProps"), t || lr(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((n) => (this.page = e, this.cleared = !1, fe.setCurrent(e), this.swap({ component: n, page: e, preserveState: t })));
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
}, te = new RS(), hp = class {
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
}, rr = typeof window > "u", Qn = new hp(), sc = !rr && /CriOS/.test(window.navigator.userAgent), _S = class {
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
      this.current = e, Qn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doPushState({ page: n }, e.url), t && t();
        };
        sc ? setTimeout(r) : r();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? AS(e).then(t) : t(e));
  }
  processQueue() {
    return Qn.process();
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
    return e instanceof ArrayBuffer ? ES(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    Qn.add(() => Promise.resolve().then(() => {
      var t;
      (t = window.history.state) != null && t.page && this.doReplaceState({ page: window.history.state.page, scrollRegions: e });
    }));
  }
  saveDocumentScrollPosition(e) {
    Qn.add(() => Promise.resolve().then(() => {
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
      this.current = e, Qn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doReplaceState({ page: n }, e.url), t && t();
        };
        sc ? setTimeout(r) : r();
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
    je.remove(jn.key), je.remove(jn.iv);
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
var fe = new _S(), IS = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Us(ct.onWindowScroll.bind(ct), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Us(ct.onScroll.bind(ct), 100), !0);
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
      n.hash = window.location.hash, fe.replaceState({ ...te.get(), url: n.href }), ct.reset();
      return;
    }
    if (!fe.isValidState(t)) return this.onMissingHistoryItem();
    fe.decrypt(t.page).then((n) => {
      te.setQuietly(n, { preserveState: !1 }).then(() => {
        ct.restore(fe.getScrollRegions()), lr(te.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, ln = new IS(), BS = class {
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
}, ts = new BS(), LS = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    ts.isReload() && fe.deleteState(fe.rememberedState);
  }
  static handleBackForward() {
    if (!ts.isBackForward() || !fe.hasAnyState()) return !1;
    let e = fe.getScrollRegions();
    return fe.decrypt().then((t) => {
      te.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ct.restore(e), lr(te.get());
      });
    }).catch(() => {
      ln.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!je.exists(je.locationVisitKey)) return !1;
    let e = je.get(je.locationVisitKey) || {};
    return je.remove(je.locationVisitKey), typeof window < "u" && te.setUrlHash(window.location.hash), fe.decrypt(te.get()).then(() => {
      let t = fe.getState(fe.rememberedState, {}), n = fe.getScrollRegions();
      te.remember(t), te.set(te.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && ct.restore(n), lr(te.get());
      });
    }).catch(() => {
      ln.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && te.setUrlHash(window.location.hash), te.set(te.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      ts.isReload() && ct.restore(fe.getScrollRegions()), lr(te.get());
    });
  }
}, MS = class {
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
}, NS = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    let r = new MS(e, t, n);
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
}, jS = new NS(), yp = (e, t, n) => {
  if (e === t) return !0;
  for (let r in e) if (!n.includes(r) && e[r] !== t[r] && !qS(e[r], t[r])) return !1;
  return !0;
}, qS = (e, t) => {
  switch (typeof e) {
    case "object":
      return yp(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, VS = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, ic = (e) => {
  if (typeof e == "number") return e;
  for (let [t, n] of Object.entries(VS)) if (e.endsWith(t)) return parseFloat(e) * n;
  return parseInt(e);
}, zS = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: n }) {
    if (this.findInFlight(e)) return Promise.resolve();
    let r = this.findCached(e);
    if (!e.fresh && r && r.staleTimestamp > Date.now()) return Promise.resolve();
    let [o, a] = this.extractStaleValues(n), s = new Promise((i, c) => {
      t({ ...e, onCancel: () => {
        this.remove(e), e.onCancel(), c();
      }, onError: (l) => {
        this.remove(e), e.onError(l), c();
      }, onPrefetching(l) {
        e.onPrefetching(l);
      }, onPrefetched(l, u) {
        e.onPrefetched(l, u);
      }, onPrefetchResponse(l) {
        i(l);
      } });
    }).then((i) => (this.remove(e), this.cached.push({ params: { ...e }, staleTimestamp: Date.now() + o, response: s, singleUse: n === 0, timestamp: Date.now(), inFlight: !1 }), this.scheduleForRemoval(e, a), this.inFlightRequests = this.inFlightRequests.filter((c) => !this.paramsAreEqual(c.params, e)), i.handlePrefetch(), i));
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
    return yp(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, on = new zS(), US = class gp {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let n = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...n, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new gp(t);
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
}, HS = { modal: null, listener: null, show(e) {
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
} }, WS = new hp(), lc = class vp {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r;
  }
  static create(t, n, r) {
    return new vp(t, n, r);
  }
  async handlePrefetch() {
    Ws(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return WS.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), CS(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await fe.processQueue(), fe.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = te.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let n = this.getScopedErrors(t);
      return yS(n), this.requestParams.all().onError(n);
    }
    xS(te.get()), await this.requestParams.all().onSuccess(te.get()), fe.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let n = Yt(this.getHeader("x-inertia-location"));
      return ac(this.requestParams.all().url, n), this.locationVisit(n);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (bS(t)) return HS.show(t.data);
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
      Ws(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let t = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(t) ? (this.mergeProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = fe.preserveUrl ? te.get().url : this.pageUrl(t), te.set(t, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
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
    return ac(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== te.get().component) return;
    let n = t.mergeProps || [], r = t.deepMergeProps || [];
    n.forEach((o) => {
      let a = t.props[o];
      Array.isArray(a) ? t.props[o] = [...te.get().props[o] || [], ...a] : typeof a == "object" && a !== null && (t.props[o] = { ...te.get().props[o] || [], ...a });
    }), r.forEach((o) => {
      let a = t.props[o], s = te.get().props[o], i = (c, l) => Array.isArray(l) ? [...Array.isArray(c) ? c : [], ...l] : typeof l == "object" && l !== null ? Object.keys(l).reduce((u, d) => (u[d] = i(c ? c[d] : void 0, l[d]), u), { ...c }) : l;
      t.props[o] = i(s, a);
    }), t.props = { ...te.get().props, ...t.props };
  }
  async setRememberedState(t) {
    let n = await fe.getState(fe.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === te.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, uc = class bp {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = US.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new bp(t, n);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), SS(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), OS(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return xe({ method: this.requestParams.all().method, url: fo(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((n) => (this.response = lc.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n != null && n.response ? (this.response = lc.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!xe.isCancel(n) && gS(n)) return Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, vS(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, wS(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    let t = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return te.get().version && (t["X-Inertia-Version"] = te.get().version), t;
  }
}, cc = class {
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
  cancel({ cancelled: e = !1, interrupted: t = !1 } = {}, n) {
    var r;
    this.shouldCancel(n) && ((r = this.requests.shift()) == null || r.cancel({ interrupted: t, cancelled: e }));
  }
  shouldCancel(e) {
    return e ? !0 : this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, KS = class {
  constructor() {
    this.syncRequestStream = new cc({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new cc({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    te.init({ initialPage: e, resolveComponent: t, swapComponent: n }), LS.handle(), ln.init(), ln.on("missingHistoryItem", () => {
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
    fe.remember(e, t);
  }
  restore(e = "default") {
    return fe.restore(e);
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
    return jS.add(e, () => this.reload(t), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let n = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !rc(n)) return;
    let o = n.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !te.isCleared() && !n.preserveUrl && ct.save();
    let a = { ...n, ...r }, s = on.get(a);
    s ? (dc(s.inFlight), on.use(s, a)) : (dc(!0), o.send(uc.create(a, te.get())));
  }
  getCached(e, t = {}) {
    return on.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    on.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    on.removeAll();
  }
  getPrefetching(e, t = {}) {
    return on.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: n = 3e4 }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let r = this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), o = r.url.origin + r.url.pathname + r.url.search, a = window.location.origin + window.location.pathname + window.location.search;
    if (o === a) return;
    let s = this.getVisitEvents(t);
    if (s.onBefore(r) === !1 || !rc(r)) return;
    a3(), this.asyncRequestStream.interruptInFlight();
    let i = { ...r, ...s };
    new Promise((c) => {
      let l = () => {
        te.get() ? c() : setTimeout(l, 50);
      };
      l();
    }).then(() => {
      on.add(i, (c) => {
        this.asyncRequestStream.send(uc.create(c, te.get()));
      }, { cacheFor: n });
    });
  }
  clearHistory() {
    fe.clear();
  }
  decryptHistory() {
    return fe.decrypt();
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
    let r = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, a] = FS(e, r.data, r.method, r.forceFormData, r.queryStringArrayFormat);
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
}, GS = { buildDOMElement(e) {
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
}, update: Us(function(e) {
  let t = e.map((n) => this.buildDOMElement(n));
  Array.from(document.head.childNodes).filter((n) => this.isInertiaManagedElement(n)).forEach((n) => {
    var a, s;
    let r = this.findMatchingElementIndex(n, t);
    if (r === -1) {
      (a = n == null ? void 0 : n.parentNode) == null || a.removeChild(n);
      return;
    }
    let o = t.splice(r, 1)[0];
    o && !n.isEqualNode(o) && ((s = n == null ? void 0 : n.parentNode) == null || s.replaceChild(o, n));
  }), t.forEach((n) => document.head.appendChild(n));
}, 1) };
function YS(e, t, n) {
  let r = {}, o = 0;
  function a() {
    let u = o += 1;
    return r[u] = [], u.toString();
  }
  function s(u) {
    u === null || Object.keys(r).indexOf(u) === -1 || (delete r[u], l());
  }
  function i(u, d = []) {
    u !== null && Object.keys(r).indexOf(u) > -1 && (r[u] = d), l();
  }
  function c() {
    let u = t(""), d = { ...u ? { title: `<title inertia="">${u}</title>` } : {} }, y = Object.values(r).reduce((g, p) => g.concat(p), []).reduce((g, p) => {
      if (p.indexOf("<") === -1) return g;
      if (p.indexOf("<title ") === 0) {
        let f = p.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return g.title = f ? `${f[1]}${t(f[2])}${f[3]}` : p, g;
      }
      let h = p.match(/ inertia="[^"]+"/);
      return h ? g[h[0]] = p : g[Object.keys(g).length] = p, g;
    }, d);
    return Object.values(y);
  }
  function l() {
    e ? n(c()) : GS.update(c());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let u = a();
    return { update: (d) => i(u, d), disconnect: () => s(u) };
  } };
}
var Oe = "nprogress", Te = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, tn = null, XS = (e) => {
  Object.assign(Te, e), Te.includeCSS && n3(Te.color);
}, Lo = (e) => {
  let t = wp();
  e = Ap(e, Te.minimum, 1), tn = e === 1 ? null : e;
  let n = QS(!t), r = n.querySelector(Te.barSelector), o = Te.speed, a = Te.easing;
  n.offsetWidth, t3((s) => {
    let i = Te.positionUsing === "translate3d" ? { transition: `all ${o}ms ${a}`, transform: `translate3d(${Yr(e)}%,0,0)` } : Te.positionUsing === "translate" ? { transition: `all ${o}ms ${a}`, transform: `translate(${Yr(e)}%,0)` } : { marginLeft: `${Yr(e)}%` };
    for (let c in i) r.style[c] = i[c];
    if (e !== 1) return setTimeout(s, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        Op(), s();
      }, o);
    }, o);
  });
}, wp = () => typeof tn == "number", Sp = () => {
  tn || Lo(0);
  let e = function() {
    setTimeout(function() {
      tn && (xp(), e());
    }, Te.trickleSpeed);
  };
  Te.trickle && e();
}, JS = (e) => {
  !e && !tn || (xp(0.3 + 0.5 * Math.random()), Lo(1));
}, xp = (e) => {
  let t = tn;
  if (t === null) return Sp();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let n = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let r in n) if (t >= n[r][0] && t < n[r][1]) return parseFloat(r);
    return 0;
  })(), Lo(Ap(t + e, 0, 0.994));
}, QS = (e) => {
  var a;
  if (ZS()) return document.getElementById(Oe);
  document.documentElement.classList.add(`${Oe}-busy`);
  let t = document.createElement("div");
  t.id = Oe, t.innerHTML = Te.template;
  let n = t.querySelector(Te.barSelector), r = e ? "-100" : Yr(tn || 0), o = Cp();
  return n.style.transition = "all 0 linear", n.style.transform = `translate3d(${r}%,0,0)`, Te.showSpinner || ((a = t.querySelector(Te.spinnerSelector)) == null || a.remove()), o !== document.body && o.classList.add(`${Oe}-custom-parent`), o.appendChild(t), t;
}, Cp = () => e3(Te.parent) ? Te.parent : document.querySelector(Te.parent), Op = () => {
  var e;
  document.documentElement.classList.remove(`${Oe}-busy`), Cp().classList.remove(`${Oe}-custom-parent`), (e = document.getElementById(Oe)) == null || e.remove();
}, ZS = () => document.getElementById(Oe) !== null, e3 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Ap(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Yr = (e) => (-1 + e) * 100, t3 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), n3 = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${Oe} {
      pointer-events: none;
    }

    #${Oe} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${Oe} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${Oe} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${Oe} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${Oe}-spinner 400ms linear infinite;
    }

    .${Oe}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${Oe}-custom-parent #${Oe} .spinner,
    .${Oe}-custom-parent #${Oe} .bar {
      position: absolute;
    }

    @keyframes ${Oe}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, Ln = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${Oe} { display: none; }`, e;
})(), r3 = () => {
  if (Ln && document.head.contains(Ln)) return document.head.removeChild(Ln);
}, o3 = () => {
  Ln && !document.head.contains(Ln) && document.head.appendChild(Ln);
}, Ep = { configure: XS, isStarted: wp, done: JS, set: Lo, remove: Op, start: Sp, status: tn, show: r3, hide: o3 }, Xr = 0, dc = (e = !1) => {
  Xr = Math.max(0, Xr - 1), (e || Xr === 0) && Ep.show();
}, a3 = () => {
  Xr++, Ep.hide();
};
function Jr(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Ot = new KS();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
function Pp(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function kp(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function qi(e) {
  const t = [], n = e.length;
  if (n === 0)
    return t;
  let r = 0, o = "", a = "", s = !1;
  for (e.charCodeAt(0) === 46 && (t.push(""), r++); r < n; ) {
    const i = e[r];
    a ? i === "\\" && r + 1 < n ? (r++, o += e[r]) : i === a ? a = "" : o += i : s ? i === '"' || i === "'" ? a = i : i === "]" ? (s = !1, t.push(o), o = "") : o += i : i === "[" ? (s = !0, o && (t.push(o), o = "")) : i === "." ? o && (t.push(o), o = "") : o += i, r++;
  }
  return o && t.push(o), t;
}
function Qr(e, t, n) {
  if (e == null)
    return n;
  switch (typeof t) {
    case "string": {
      const r = e[t];
      return r === void 0 ? Pp(t) ? Qr(e, qi(t), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = kp(t));
      const r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t))
        return s3(e, t, n);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function s3(e, t, n) {
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
const i3 = /^(?:0|[1-9]\d*)$/;
function $p(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return i3.test(e);
  }
}
function l3(e) {
  return e !== null && typeof e == "object" && io(e) === "[object Arguments]";
}
function u3(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && Pp(t) && (e == null ? void 0 : e[t]) == null ? n = qi(t) : n = [t], n.length === 0)
    return !1;
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if ((r == null || !Object.hasOwn(r, a)) && !((Array.isArray(r) || l3(r)) && $p(a) && a < r.length))
      return !1;
    r = r[a];
  }
  return !0;
}
const c3 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, d3 = /^\w*$/;
function f3(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || Y1(e) ? !0 : typeof e == "string" && (d3.test(e) || !c3.test(e)) || t != null && Object.hasOwn(t, e);
}
const p3 = (e, t, n) => {
  const r = e[t];
  (!(Object.hasOwn(e, t) && $f(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function m3(e, t, n, r) {
  if (e == null && !fc(e))
    return e;
  const o = f3(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? qi(t) : [t];
  let a = e;
  for (let s = 0; s < o.length && a != null; s++) {
    const i = kp(o[s]);
    let c;
    if (s === o.length - 1)
      c = n(a[i]);
    else {
      const l = a[i], u = r(l);
      c = u !== void 0 ? u : fc(l) ? l : $p(o[s + 1]) ? [] : {};
    }
    p3(a, i, c), a = a[i];
  }
  return e;
}
function Mr(e, t, n) {
  return m3(e, t, () => n, () => {
  });
}
function h3(e, t) {
  let n = typeof e == "string" ? e : null, r = (typeof e == "string" ? t : e) ?? {}, o = n ? Ot.restore(n) : null, a = ut(typeof r == "function" ? r() : r), s = null, i = null, c = (u) => u, l = hr({ ...o ? o.data : ut(a), isDirty: !1, errors: o ? o.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((u, d) => Mr(u, d, Qr(this, d)), {});
  }, transform(u) {
    return c = u, this;
  }, defaults(u, d) {
    if (typeof r == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? (a = ut(this.data()), this.isDirty = !1) : a = typeof u == "string" ? Mr(ut(a), u, d) : Object.assign({}, ut(a), u), this;
  }, reset(...u) {
    let d = ut(typeof r == "function" ? r() : a), y = ut(d);
    return u.length === 0 ? (a = y, Object.assign(this, d)) : u.filter((g) => u3(y, g)).forEach((g) => {
      Mr(a, g, Qr(y, g)), Mr(this, g, Qr(d, g));
    }), this;
  }, setError(u, d) {
    return Object.assign(this.errors, typeof u == "string" ? { [u]: d } : u), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...u) {
    return this.errors = Object.keys(this.errors).reduce((d, y) => ({ ...d, ...u.length > 0 && !u.includes(y) ? { [y]: this.errors[y] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(...u) {
    let d = typeof u[0] == "object", y = d ? u[0].method : u[0], g = d ? u[0].url : u[1], p = (d ? u[1] : u[2]) ?? {}, h = c(this.data()), f = { ...p, onCancelToken: (v) => {
      if (s = v, p.onCancelToken) return p.onCancelToken(v);
    }, onBefore: (v) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(i), p.onBefore) return p.onBefore(v);
    }, onStart: (v) => {
      if (this.processing = !0, p.onStart) return p.onStart(v);
    }, onProgress: (v) => {
      if (this.progress = v, p.onProgress) return p.onProgress(v);
    }, onSuccess: async (v) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, i = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let w = p.onSuccess ? await p.onSuccess(v) : null;
      return a = ut(this.data()), this.isDirty = !1, w;
    }, onError: (v) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(v), p.onError) return p.onError(v);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, p.onCancel) return p.onCancel();
    }, onFinish: (v) => {
      if (this.processing = !1, this.progress = null, s = null, p.onFinish) return p.onFinish(v);
    } };
    y === "delete" ? Ot.delete(g, { ...f, data: h }) : Ot[y](g, h, f);
  }, get(u, d) {
    this.submit("get", u, d);
  }, post(u, d) {
    this.submit("post", u, d);
  }, put(u, d) {
    this.submit("put", u, d);
  }, patch(u, d) {
    this.submit("patch", u, d);
  }, delete(u, d) {
    this.submit("delete", u, d);
  }, cancel() {
    s && s.cancel();
  }, __rememberable: n === null, __remember() {
    return { data: this.data(), errors: this.errors };
  }, __restore(u) {
    Object.assign(this, u.data), this.setError(u.errors);
  } });
  return ne(l, (u) => {
    l.isDirty = !aw(l.data(), a), n && Ot.remember(ut(u.__remember()), n);
  }, { immediate: !0, deep: !0 }), l;
}
var Xe = N(null), Ue = N(null), ns = mr(null), Nr = N(null), pc = null;
z({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
  Xe.value = t ? os(t) : null, Ue.value = e, Nr.value = null;
  let a = typeof window > "u";
  return pc = YS(a, r, o), a || (Ot.init({ initialPage: e, resolveComponent: n, swapComponent: async (s) => {
    Xe.value = os(s.component), Ue.value = s.page, Nr.value = s.preserveState ? Nr.value : Date.now();
  } }), Ot.on("navigate", () => pc.forceUpdate())), () => {
    if (Xe.value) {
      Xe.value.inheritAttrs = !!Xe.value.inheritAttrs;
      let s = qe(Xe.value, { ...Ue.value.props, key: Nr.value });
      return ns.value && (Xe.value.layout = ns.value, ns.value = null), Xe.value.layout ? typeof Xe.value.layout == "function" ? Xe.value.layout(qe, s) : (Array.isArray(Xe.value.layout) ? Xe.value.layout : [Xe.value.layout]).concat(s).reverse().reduce((i, c) => (c.inheritAttrs = !!c.inheritAttrs, qe(c, { ...Ue.value.props }, () => i))) : s;
    }
  };
} });
function y3() {
  return hr({ props: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.props;
  }), url: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.url;
  }), component: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.component;
  }), version: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.version;
  }), clearHistory: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.mergeProps;
  }), deepMergeProps: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.deepMergeProps;
  }), rememberedState: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: T(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.encryptHistory;
  }) });
}
var g3 = z({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
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
z({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: [String, Object], required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: n }) {
  let r = N(0), o = N(null), a = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], s = e.cacheFor !== 0 ? e.cacheFor : a.length === 1 && a[0] === "click" ? 0 : 3e4;
  pe(() => {
    a.includes("mount") && h();
  }), Nt(() => {
    clearTimeout(o.value);
  });
  let i = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), c = i !== "get" ? "button" : e.as.toLowerCase(), l = T(() => ji(i, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), u = T(() => l.value[0]), d = T(() => l.value[1]), y = T(() => ({ a: { href: u.value }, button: { type: "button" } })), g = { data: d.value, method: i, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? i !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, p = { ...g, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (O) => {
    r.value++, e.onStart(O);
  }, onProgress: e.onProgress, onFinish: (O) => {
    r.value--, e.onFinish(O);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, h = () => {
    Ot.prefetch(u.value, g, { cacheFor: s });
  }, f = { onClick: (O) => {
    Jr(O) && (O.preventDefault(), Ot.visit(u.value, p));
  } }, v = { onMouseenter: () => {
    o.value = setTimeout(() => {
      h();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(o.value);
  }, onClick: f.onClick }, w = { onMousedown: (O) => {
    Jr(O) && (O.preventDefault(), h());
  }, onMouseup: (O) => {
    O.preventDefault(), Ot.visit(u.value, p);
  }, onClick: (O) => {
    Jr(O) && O.preventDefault();
  } };
  return () => qe(c, { ...n, ...y.value[c] || {}, "data-loading": r.value > 0 ? "" : void 0, ...a.includes("hover") ? v : a.includes("click") ? w : f }, t);
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
function m4(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function v3(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function h4(e) {
  return y3().props.auth.permissions.includes(e);
}
let Ks = null;
function y4(e) {
  Ks = e;
}
function Mo() {
  return Ks === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Ks;
}
let Gs = null;
function g4(e) {
  Gs = e;
}
function Tp() {
  return Gs === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), Gs;
}
const pt = z({
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
      let r;
      try {
        r = Mo();
      } catch {
        console.log("InertiaLink: Router not available, preventing navigation"), r = {
          visit: (l, u) => {
            console.log("InertiaLink: Navigation prevented (docs environment):", l);
          }
        };
      }
      const o = e.as.toLowerCase(), a = e.method.toLowerCase(), [s, i] = ji(
        a,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return o === "a" && a !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${s}" method="${a}" as="button">...</Link>`
      ), qe(
        e.as,
        {
          ...n,
          ...o === "a" ? { href: s } : {},
          onClick: (c) => {
            Jr(c) && (c.preventDefault(), r.visit(s, {
              data: i,
              method: a,
              replace: e.replace,
              preserveScroll: e.preserveScroll,
              preserveState: e.preserveState ?? a !== "get",
              only: e.only,
              headers: e.headers,
              onCancelToken: n.onCancelToken,
              onBefore: n.onBefore,
              onStart: n.onStart,
              onProgress: n.onProgress,
              onFinish: n.onFinish,
              onCancel: n.onCancel,
              onSuccess: n.onSuccess,
              onError: n.onError
            }));
          }
        },
        t
      );
    };
  }
});
function Ar(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(u) {
      try {
        l(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(i, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}
function Er(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = i(0), s.throw = i(1), s.return = i(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (n = 0)), n; ) try {
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
function b3(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, a = [], s;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) a.push(o.value);
  } catch (i) {
    s = { error: i };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function w3() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(b3(arguments[t]));
  return e;
}
var S3 = /* @__PURE__ */ new Map([
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
function No(e, t) {
  var n = x3(e);
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
function x3(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), o = S3.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var C3 = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function O3(e) {
  return Ar(this, void 0, void 0, function() {
    return Er(this, function(t) {
      return [2, A3(e) && e.dataTransfer ? k3(e.dataTransfer, e.type) : E3(e)];
    });
  });
}
function A3(e) {
  return !!e.dataTransfer;
}
function E3(e) {
  var t = P3(e.target) ? e.target.files ? Ys(e.target.files) : [] : [];
  return t.map(function(n) {
    return No(n);
  });
}
function P3(e) {
  return e !== null;
}
function k3(e, t) {
  return Ar(this, void 0, void 0, function() {
    var n, r;
    return Er(this, function(o) {
      switch (o.label) {
        case 0:
          return e.items ? (n = Ys(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map($3))]) : [3, 2];
        case 1:
          return r = o.sent(), [2, mc(Dp(r))];
        case 2:
          return [2, mc(Ys(e.files).map(function(a) {
            return No(a);
          }))];
      }
    });
  });
}
function mc(e) {
  return e.filter(function(t) {
    return C3.indexOf(t.name) === -1;
  });
}
function Ys(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function $3(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return hc(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Fp(t) : hc(e);
}
function Dp(e) {
  return e.reduce(function(t, n) {
    return w3(t, Array.isArray(n) ? Dp(n) : [n]);
  }, []);
}
function hc(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = No(t);
  return Promise.resolve(n);
}
function T3(e) {
  return Ar(this, void 0, void 0, function() {
    return Er(this, function(t) {
      return [2, e.isDirectory ? Fp(e) : D3(e)];
    });
  });
}
function Fp(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var o = [];
    function a() {
      var s = this;
      t.readEntries(function(i) {
        return Ar(s, void 0, void 0, function() {
          var c, l, u;
          return Er(this, function(d) {
            switch (d.label) {
              case 0:
                if (i.length) return [3, 5];
                d.label = 1;
              case 1:
                return d.trys.push([1, 3, , 4]), [4, Promise.all(o)];
              case 2:
                return c = d.sent(), n(c), [3, 4];
              case 3:
                return l = d.sent(), r(l), [3, 4];
              case 4:
                return [3, 6];
              case 5:
                u = Promise.all(i.map(T3)), o.push(u), a(), d.label = 6;
              case 6:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, function(i) {
        r(i);
      });
    }
    a();
  });
}
function D3(e) {
  return Ar(this, void 0, void 0, function() {
    return Er(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(o) {
          var a = No(o, e.fullPath);
          n(a);
        }, function(o) {
          r(o);
        });
      })];
    });
  });
}
var jr = {}, yc;
function F3() {
  return yc || (yc = 1, jr.__esModule = !0, jr.default = function(e, t) {
    if (e && t) {
      var n = Array.isArray(t) ? t : t.split(",");
      if (n.length === 0)
        return !0;
      var r = e.name || "", o = (e.type || "").toLowerCase(), a = o.replace(/\/.*$/, "");
      return n.some(function(s) {
        var i = s.trim().toLowerCase();
        return i.charAt(0) === "." ? r.toLowerCase().endsWith(i) : i.endsWith("/*") ? a === i.replace(/\/.*$/, "") : o === i;
      });
    }
    return !0;
  }), jr;
}
var R3 = F3();
const Rp = /* @__PURE__ */ sw(R3);
var Je = function() {
  return Je = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Je.apply(this, arguments);
};
function gc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function _3(e, t, n, r) {
  function o(a) {
    return a instanceof n ? a : new n(function(s) {
      s(a);
    });
  }
  return new (n || (n = Promise))(function(a, s) {
    function i(u) {
      try {
        l(r.next(u));
      } catch (d) {
        s(d);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (d) {
        s(d);
      }
    }
    function l(u) {
      u.done ? a(u.value) : o(u.value).then(i, c);
    }
    l((r = r.apply(e, [])).next());
  });
}
function I3(e, t) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, o, a, s;
  return s = { next: i(0), throw: i(1), return: i(2) }, typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function i(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, l[0] && (n = 0)), n; ) try {
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
function Xs(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function B3(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function L3(e) {
  return e.includes("Edge/");
}
function M3(e) {
  return e === void 0 && (e = window.navigator.userAgent), B3(e) || L3(e);
}
function vc(e) {
  e.preventDefault();
}
function qr(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function po(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var N3 = "file-invalid-type", j3 = "file-too-large", q3 = "file-too-small", V3 = "too-many-files", z3 = {
  code: V3,
  message: "Too many files"
}, U3 = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: N3,
    message: "File type must be ".concat(t)
  };
};
function Zn(e) {
  return e != null;
}
var H3 = Rp.default, W3 = H3 || Rp;
function _p(e, t) {
  var n = e.type === "application/x-moz-file" || W3(e, t);
  return [n, n ? null : U3(t)];
}
var bc = function(e) {
  return {
    code: j3,
    message: "File is larger than ".concat(e, " bytes")
  };
}, wc = function(e) {
  return {
    code: q3,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Ip(e, t, n) {
  if (Zn(e.size) && e.size)
    if (Zn(t) && Zn(n)) {
      if (e.size > n)
        return [!1, bc(n)];
      if (e.size < t)
        return [!1, wc(t)];
    } else {
      if (Zn(t) && e.size < t)
        return [!1, wc(t)];
      if (Zn(n) && e.size > n)
        return [!1, bc(n)];
    }
  return [!0, null];
}
function Rt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(n) {
    for (var r = [], o = 1; o < arguments.length; o++)
      r[o - 1] = arguments[o];
    return e.some(function(a) {
      return !po(n) && a && a.apply(void 0, Xs([n], r, !1)), po(n);
    });
  };
}
function K3(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, s = e.maxFiles;
  return !a && t.length > 1 || a && s >= 1 && t.length > s ? !1 : t.every(function(i) {
    var c = _p(i, n)[0], l = Ip(i, r, o)[0];
    return c && l;
  });
}
var G3 = {
  disabled: !1,
  getFilesFromEvent: O3,
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
function Bp(e) {
  e === void 0 && (e = {});
  var t = N(Je(Je({}, G3), e));
  ne(function() {
    return Je({}, e);
  }, function($) {
    t.value = Je(Je({}, t.value), $);
  });
  var n = N(), r = N(), o = hr({
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
  }, s = function() {
    var $ = t.value.onFileDialogCancel;
    o.isFileDialogActive && setTimeout(function() {
      if (r.value) {
        var V = r.value.files;
        V && !V.length && (o.isFileDialogActive = !1, typeof $ == "function" && $());
      }
    }, 300);
  };
  function i() {
    o.isFocused = !0;
  }
  function c() {
    o.isFocused = !1;
  }
  function l() {
    var $ = t.value.noClick;
    $ || (M3() ? setTimeout(a, 0) : a());
  }
  var u = N([]), d = function($) {
    if (n.value) {
      var V = n.value.$el || n.value;
      V.contains($.target) || ($.preventDefault(), u.value = []);
    }
  };
  pe(function() {
    window.addEventListener("focus", s, !1);
    var $ = t.value.preventDropOnDocument;
    $ && (document.addEventListener("dragover", vc, !1), document.addEventListener("drop", d, !1));
  }), Nt(function() {
    window.removeEventListener("focus", s, !1);
    var $ = t.value.preventDropOnDocument;
    $ && (document.removeEventListener("dragover", vc), document.removeEventListener("drop", d));
  });
  function y($) {
    var V = t.value.noDragEventsBubbling;
    V && $.stopPropagation();
  }
  function g($) {
    return _3(this, void 0, void 0, function() {
      var V, b, E, C, x;
      return I3(this, function(K) {
        switch (K.label) {
          case 0:
            return V = t.value, b = V.getFilesFromEvent, E = V.noDragEventsBubbling, C = V.onDragEnter, $.preventDefault(), y($), u.value = Xs(Xs([], u.value, !0), [$.target], !1), qr($) ? b ? [4, b($)] : [2] : [3, 2];
          case 1:
            if (x = K.sent(), x || (x = []), po($) && !E)
              return [2];
            o.draggedFiles = x, o.isDragActive = !0, C && C($), K.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function p($) {
    var V = t.value.onDragOver;
    if ($.preventDefault(), y($), $.dataTransfer)
      try {
        $.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return qr($) && V && V($), !1;
  }
  function h($) {
    $.preventDefault(), y($);
    var V = u.value.filter(function(C) {
      if (!n.value)
        return !1;
      var x = n.value.$el || n.value;
      return x.contains(C);
    }), b = V.indexOf($.target);
    if (b !== -1 && V.splice(b, 1), u.value = V, !(V.length > 0)) {
      o.draggedFiles = [], o.isDragActive = !1;
      var E = t.value.onDragLeave;
      qr($) && E && E($);
    }
  }
  function f($) {
    $.preventDefault(), y($), u.value = [];
    var V = t.value, b = V.getFilesFromEvent, E = V.noDragEventsBubbling, C = V.accept, x = V.minSize, K = V.maxSize, L = V.multiple, R = V.maxFiles, X = V.onDrop, ae = V.onDropRejected, Fe = V.onDropAccepted;
    if (qr($)) {
      if (!b)
        return;
      Promise.resolve(b($)).then(function(Ge) {
        if (!(po($) && !E)) {
          var $e = [], Me = [];
          Ge.forEach(function(Re) {
            var Ne = _p(Re, C), bt = Ne[0], wt = Ne[1], ke = Ip(Re, x, K), ue = ke[0], we = ke[1];
            if (bt && ue)
              $e.push(Re);
            else {
              var me = [wt, we].filter(function(Ce) {
                return Ce;
              });
              Me.push({ file: Re, errors: me });
            }
          }), (!L && $e.length > 1 || L && R >= 1 && $e.length > R) && ($e.forEach(function(Re) {
            Me.push({ file: Re, errors: [z3] });
          }), $e.splice(0)), o.acceptedFiles = $e, o.fileRejections = Me, X && X($e, Me, $), Me.length > 0 && ae && ae(Me, $), $e.length > 0 && Fe && Fe($e, $);
        }
      });
    }
    o.isFileDialogActive = !1, o.isDragActive = !1, o.draggedFiles = [], o.acceptedFiles = [], o.fileRejections = [];
  }
  var v = function($) {
    return t.value.disabled ? void 0 : $;
  }, w = function($) {
    return t.value.noKeyboard ? void 0 : v($);
  }, O = function($) {
    return t.value.noDrag ? void 0 : v($);
  }, P = function($) {
    $ === void 0 && ($ = {});
    var V = $.onFocus, b = $.onBlur, E = $.onClick, C = $.onDragEnter, x = $.onDragenter, K = $.onDragOver, L = $.onDragover, R = $.onDragLeave, X = $.onDragleave, ae = $.onDrop, Fe = gc($, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Je(Je({ onFocus: w(Rt(V, i)), onBlur: w(Rt(b, c)), onClick: v(Rt(E, l)), onDragenter: O(Rt(C, x, g)), onDragover: O(Rt(K, L, p)), onDragleave: O(Rt(R, X, h)), onDrop: O(Rt(ae, f)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Fe);
  }, F = function($) {
    $.stopPropagation();
  };
  function H($) {
    $ === void 0 && ($ = {});
    var V = $.onChange, b = $.onClick, E = gc($, ["onChange", "onClick"]), C = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: v(Rt(V, f)),
      onClick: v(Rt(b, F)),
      autoComplete: "off",
      tabIndex: -1,
      ref: r
    };
    return Je(Je({}, C), E);
  }
  var A = T(function() {
    return o.draggedFiles ? o.draggedFiles.length : 0;
  }), W = T(function() {
    return A.value > 0 && K3({
      files: o.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), B = T(function() {
    return A.value > 0 && !W.value;
  });
  return Je(Je({}, kt(o)), { isDragAccept: W, isDragReject: B, isFocused: T(function() {
    return o.isFocused && !t.value.disabled;
  }), getRootProps: P, getInputProps: H, rootRef: n, inputRef: r, open: v(a) });
}
const Y3 = { class: "flex w-full flex-col" }, X3 = {
  key: 0,
  class: "text-black select-none"
}, J3 = ["name"], Q3 = {
  key: 1,
  class: "select-none"
}, Z3 = { key: 2 }, ex = {
  key: 3,
  class: "select-none"
}, v4 = {
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
    Mo();
    const t = e, n = N(null), r = (l) => {
      let u = [];
      return l.split("_").join(" ").split(" ").map(function(d) {
        u.push(d[0].toUpperCase() + d.slice(1));
      }), u.join(" ");
    }, o = (l, u) => {
      var d;
      if (n.value = null, u && u.length > 0) {
        u[0].errors && (n.value = (d = u[0]) == null ? void 0 : d.errors.map((y) => y.message).join(", ")), console.error(u);
        return;
      }
      if (!l || l.length === 0) {
        n.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = l : t.form[t.field] = l[0];
    }, { getRootProps: a, getInputProps: s, isDragActive: i, ...c } = Bp({
      onDrop: o,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, u) => {
      var d;
      return S(), k("div", Y3, [
        D("div", {
          class: Q(["border-primary-200 bg-primary-50 text-primary-200 hover:border-primary-600 hover:text-primary w-full rounded-lg border-2 border-dashed transition duration-100 ease-in-out", {
            "border-primary-400 bg-primary-100": m(i),
            "bg-primary-100 border-red-600": t.form.errors[e.field] ?? n.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          D("div", se({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, m(a)()), [
            e.label ? (S(), k("p", X3, Z(e.label), 1)) : Y("", !0),
            D("input", se(m(s)(), { name: e.field }), null, 16, J3),
            m(i) ? (S(), k("span", Q3, "Drop the " + Z(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (S(), k("span", Z3, Z(((d = e.form[e.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (S(), k("span", ex, "Drag 'n' drop " + Z(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        J(m(nn), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, tx = { class: "flex w-full" }, nx = { key: 0 }, rx = { key: 1 }, ox = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, ax = ["onClick"], sx = ["src"], ix = ["value"], lx = { class: "flex items-center gap-4" }, ux = {
  key: 0,
  class: "text-sm text-gray-600"
}, cx = {
  key: 1,
  class: "mt-2"
}, dx = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, fx = { class: "-m-1 flex flex-wrap md:-m-2" }, px = { class: "h-full w-full p-1 shadow md:p-2" }, mx = ["src"], b4 = /* @__PURE__ */ z({
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
    const t = Mo(), n = e, r = h3({
      image: []
    }), o = (g, p) => `/${g.replace(".", "/")}${p ? `/${p}` : ""}`;
    function a() {
      let g = new FormData();
      r.image.forEach((p, h) => {
        g.append(`image[${h}]`, p.file);
      }), g.append("item_type", n.itemType || ""), g.append("item_id", String(n.itemId || "")), t.post(o(n.endPoint), g, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        forceFormData: !0,
        onFinish: () => {
          r.recentlySuccessful = !0, r.image = [];
        }
      });
    }
    function s(g) {
      g.forEach((p) => {
        let h = new FileReader();
        h.onload = (f) => {
          r.image.push({ file: p, dataUrl: f.target.result });
        }, h.readAsDataURL(p);
      });
    }
    const i = (g, p) => {
      if (p && p.length > 0) {
        console.error(p);
        return;
      }
      s(g);
    };
    function c(g) {
      r.image.splice(g, 1);
    }
    const { getRootProps: l, getInputProps: u, isDragActive: d } = Bp({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    }), y = N(!1);
    return (g, p) => (S(), k(re, null, [
      e.canUpload ? (S(), k("form", {
        key: 0,
        onSubmit: dt(a, ["prevent"]),
        class: "w-full"
      }, [
        D("div", tx, [
          D("div", {
            class: Q(["border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary w-full rounded-l-lg border-2 border-r-0 border-dashed transition duration-100 ease-in-out", { "border-primary-400 bg-primary-100": y.value }])
          }, [
            D("div", se({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, m(l)()), [
              D("input", be(Ae(m(u)())), null, 16),
              m(d) ? (S(), k("span", nx, "Drop the files here ...")) : (S(), k("span", rx, "Drag 'n' drop images here"))
            ], 16),
            m(r).image.length > 0 ? (S(), k("div", ox, [
              (S(!0), k(re, null, ge(m(r).image, (h, f) => (S(), k("div", {
                class: "relative cursor-pointer select-none",
                onClick: (v) => c(f),
                key: f
              }, [
                p[0] || (p[0] = D("div", { class: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                D("img", {
                  src: h.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, sx)
              ], 8, ax))), 128))
            ])) : Y("", !0)
          ], 2),
          J(m(RO), {
            class: Q(["inline rounded-l-none", { "cursor-not-allowed": m(r).image.length == 0 }]),
            disabled: m(r).image.length == 0
          }, {
            default: _(() => p[1] || (p[1] = [
              ce(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          m(r).progress ? (S(), k("progress", {
            key: 0,
            value: m(r).progress.percentage,
            max: "100"
          }, Z(m(r).progress.percentage) + "%", 9, ix)) : Y("", !0)
        ]),
        g.$page.props.errors.image ? (S(), U(m(nn), {
          key: 0,
          class: "mt-2",
          message: g.$page.props.errors.image
        }, null, 8, ["message"])) : Y("", !0),
        D("div", lx, [
          J(cn, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: _(() => [
              m(r).recentlySuccessful ? (S(), k("p", ux, "Images uploaded.")) : Y("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Y("", !0),
      e.images.length ? (S(), k("div", cx, [
        p[3] || (p[3] = D("hr", null, null, -1)),
        D("div", dx, [
          D("div", fx, [
            (S(!0), k(re, null, ge(e.images, (h, f) => (S(), k("div", {
              key: f,
              class: "flex w-1/3 flex-wrap"
            }, [
              D("div", px, [
                D("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: h.url
                }, null, 8, mx),
                e.canUpload ? (S(), U(m(pt), {
                  key: 0,
                  href: o("images.delete", h.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700",
                  as: "button"
                }, {
                  default: _(() => p[2] || (p[2] = [
                    ce(" Delete Image ")
                  ])),
                  _: 2
                }, 1032, ["href"])) : Y("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : Y("", !0)
    ], 64));
  }
}), hx = { class: "flex items-center space-x-3" }, yx = ["id", "name", "value", "checked"], gx = ["for"], w4 = /* @__PURE__ */ z({
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
    const n = t, r = e, o = (i) => {
      const c = i.target;
      r.form && r.field && (r.form[r.field] = c.value), n("update:modelValue", c.value);
    }, a = T(() => r.form && r.field ? r.form[r.field] === r.value : r.modelValue === r.value), s = T(() => r.id || `radio-${r.field || "radio"}-${r.value}`);
    return (i, c) => (S(), k("div", hx, [
      D("input", {
        id: s.value,
        type: "radio",
        name: i.name || i.field,
        value: i.value,
        checked: a.value,
        onChange: o,
        class: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
      }, null, 40, yx),
      D("label", {
        for: s.value,
        class: "cursor-pointer text-sm font-medium text-gray-700"
      }, Z(i.label), 9, gx)
    ]));
  }
}), Lp = {
  START: "start"
}, Se = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
  NO_STYLE: "no-style"
}, vx = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, mo = /* @__PURE__ */ z({
  __name: "SubmitButton",
  props: {
    theme: { default: Se.PRIMARY },
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    form: {},
    loading: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return S(), U(m(xn), {
        theme: t.theme,
        disabled: t.loading || ((r = t.form) == null ? void 0 : r.processing) || t.disabled,
        type: t.type,
        "custom-class": `relative ${t.customButtonClass}`,
        size: t.size,
        class: "focusable"
      }, {
        default: _(() => {
          var o, a;
          return [
            D("div", {
              class: Q({ "opacity-25": ((o = t.form) == null ? void 0 : o.processing) || t.loading })
            }, [
              j(t.$slots, "default")
            ], 2),
            (a = t.form) != null && a.processing || t.loading ? (S(), k("div", vx, [
              J(m(Vi), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : Y("", !0)
          ];
        }),
        _: 3
      }, 8, ["theme", "disabled", "type", "custom-class", "size"]);
    };
  }
}), bx = { class: "w-full" }, wx = ["id"], Sx = ["disabled"], xx = { key: 0 }, Cx = { key: 1 }, Ox = { class: "ml-2 w-2" }, Ax = {
  class: "absolute z-1000 -mt-1! hidden min-w-full bg-white data-te-dropdown-show:block",
  "data-te-dropdown-menu-ref": ""
}, Ex = { class: "float-left m-0 box-border max-h-80 min-w-full list-none overflow-auto rounded rounded-t-none border border-t-0 border-gray-300 bg-clip-padding text-left text-base shadow" }, Px = ["onClick"], S4 = {
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
    const n = e, r = t, o = (c) => {
      let l = [];
      return c.split("_").join(" ").split(" ").map(function(u) {
        l.push(u[0].toUpperCase() + u.slice(1));
      }), l.join(" ");
    }, a = (c) => {
      let l = n.form[n.field] ?? [], u = c[n.optionValue].toString();
      try {
        l.includes(u) ? l = l.filter((d) => d !== u) : l.push(u), n.form[n.field] = l, r("update:modelValue", l);
      } catch (d) {
        console.error(d);
      }
    }, s = (c) => {
      var l;
      return (l = n.form[n.field]) == null ? void 0 : l.includes(c[n.optionValue].toString());
    }, i = () => n.list.filter((c) => s(c));
    return (c, l) => (S(), k("div", bx, [
      !e.noLabel && (e.label || e.field) ? (S(), U(m(zn), {
        key: 0,
        for: e.id ?? e.field,
        value: o(e.label ?? e.field)
      }, null, 8, ["for", "value"])) : Y("", !0),
      D("div", {
        class: "model-list relative flex w-full min-w-[10rem]",
        "data-te-dropdown-ref": "",
        id: e.id ?? e.field
      }, [
        D("button", {
          class: "aria-expanded:border-accent-500 aria-expanded:outline-accent-500 flex h-10 w-full items-center justify-between rounded border border-gray-300 px-3 py-2 pr-5 text-base leading-normal whitespace-nowrap shadow outline outline-1 outline-transparent transition duration-150 ease-in-out aria-expanded:rounded-b-none motion-reduce:transition-none",
          type: "button",
          "data-te-dropdown-toggle-ref": "",
          "data-te-auto-close": "outside",
          "data-te-dropdown-animation": "off",
          "aria-expanded": "false",
          disabled: e.isDisabled
        }, [
          i().length > 0 ? (S(), k("span", xx, Z(i().length) + " selected", 1)) : (S(), k("span", Cx, Z(e.placeholder), 1)),
          D("span", Ox, [
            J(m(Ee), {
              icon: m(ei),
              class: "h-5 w-5"
            }, null, 8, ["icon"])
          ])
        ], 8, Sx),
        D("div", Ax, [
          D("ul", Ex, [
            (S(!0), k(re, null, ge(e.list, (u) => (S(), k("li", {
              onClick: (d) => a(u),
              key: u[e.optionValue],
              class: "flex w-full min-w-full cursor-pointer items-center justify-start border-t border-gray-50 px-4 py-3 text-sm leading-4 font-normal hover:bg-[rgba(0,0,0,.03)]"
            }, [
              D("div", {
                class: Q(["mr-2 -ml-2 h-4 w-4 rounded border", s(u) ? "bg-primary" : "bg-white"])
              }, null, 2),
              ce(" " + Z(u[e.optionText]), 1)
            ], 8, Px))), 128))
          ])
        ])
      ], 8, wx),
      J(m(nn), {
        message: e.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
function Mp(e = { column: null, direction: "asc" }, t = !0) {
  const n = N({ ...e }), r = Mo(), o = () => {
    try {
      const c = window.route;
      if (c && c().params) {
        const l = c().params;
        l.order_by && l.order_dir && (n.value = {
          column: l.order_by,
          direction: l.order_dir
        });
      }
    } catch (c) {
      console.warn("Failed to initialize sort state from URL:", c);
    }
  }, a = (c) => {
    if (!c) return;
    const l = n.value.column === c && n.value.direction === "asc" ? "desc" : "asc";
    n.value = {
      column: c,
      direction: l
    };
    try {
      const u = window.route;
      if (u) {
        const d = { ...u().params };
        d.order_by = c, d.order_dir = l, r.get(u(u().current()), d, {
          preserveState: t,
          preserveScroll: !0
        });
      }
    } catch (u) {
      console.warn("Failed to update URL with sort parameters:", u);
    }
  }, s = (c) => n.value.column === c ? n.value.direction : null, i = (c) => n.value.column === c;
  return pe(() => {
    o();
  }), {
    sortState: T(() => n.value),
    sort: a,
    getSortDirection: s,
    isSorted: i
  };
}
function kx(e = !1, t = []) {
  const n = N([...t]), r = (l) => {
    if (e) {
      const u = n.value.findIndex((d) => d.id === l.id);
      u > -1 ? n.value.splice(u, 1) : n.value.push(l);
    } else
      n.value = [l];
  }, o = (l) => {
    e && (n.value = [...l]);
  }, a = () => {
    n.value = [];
  }, s = (l) => n.value.some((u) => u.id === l.id), i = (l) => l.length > 0 && l.every((u) => s(u)), c = (l) => {
    const u = l.filter((d) => s(d)).length;
    return u > 0 && u < l.length;
  };
  return {
    selected: T(() => n.value),
    select: r,
    selectAll: o,
    deselectAll: a,
    isSelected: s,
    isAllSelected: i,
    isIndeterminate: c
  };
}
function Np(e = !1, t = 0) {
  const n = N(null), r = N(null), o = N(null), a = N(!1), s = () => {
    if (!n.value || !r.value || !o.value || !(typeof e == "boolean" ? e : e.value)) return;
    const d = n.value.getBoundingClientRect(), y = d.top <= t && d.bottom > t;
    y !== a.value && (a.value = y, y ? (i(), o.value.style.display = "block", o.value.style.top = `${t}px`, o.value.style.width = `${n.value.offsetWidth}px`) : o.value.style.display = "none");
  }, i = () => {
    if (!r.value || !o.value) return;
    const u = r.value.querySelector("tr");
    if (!u) return;
    o.value.innerHTML = "";
    const d = u.cloneNode(!0), y = u.querySelectorAll("th"), g = d.querySelectorAll("th");
    y.forEach((p, h) => {
      g[h] && (g[h].style.width = `${p.offsetWidth}px`);
    }), o.value.appendChild(d), d.addEventListener("click", (p) => {
      const f = p.target.closest("th");
      if (f) {
        const v = Array.from(g).indexOf(f);
        v > -1 && y[v] && y[v].click();
      }
    });
  }, c = () => {
    s();
  }, l = () => {
    De(() => {
      s();
    });
  };
  return pe(() => {
    window.addEventListener("scroll", c, { passive: !0 }), window.addEventListener("resize", l, { passive: !0 });
  }), Nt(() => {
    window.removeEventListener("scroll", c), window.removeEventListener("resize", l);
  }), {
    tableRef: n,
    headerRef: r,
    stickyRef: o,
    isSticky: T(() => a.value),
    updateStickyState: s
  };
}
function jp(e, t = {}) {
  const n = Tp(), r = T(() => {
    const l = n.props[e];
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
  }), o = T(() => {
    var c;
    return ((c = r.value) == null ? void 0 : c.data) || [];
  }), a = T(() => {
    const c = r.value;
    return c ? {
      current_page: c.current_page,
      last_page: c.last_page,
      per_page: c.per_page,
      total: c.total,
      from: c.from,
      to: c.to,
      links: c.links
    } : null;
  }), s = T(() => o.value.length === 0), i = T(() => (t.defer, !1));
  return {
    data: r,
    rows: o,
    pagination: a,
    isEmpty: s,
    isLoading: i
  };
}
function $x(e = {}) {
  const t = e.sortable ?? !1, n = e.selectable ?? !1, r = e.multiple ?? !1, o = e.sticky ?? !1, a = t ? Mp() : null, s = n ? kx(r) : null, i = o ? Np(o) : null, c = e.resource ? jp(e.resource, {
    defer: e.defer,
    preserveState: e.preserveState,
    preserveScroll: e.preserveScroll
  }) : null;
  return {
    // Sort functionality
    ...a ? {
      sortState: a.sortState,
      sort: a.sort,
      getSortDirection: a.getSortDirection,
      isSorted: a.isSorted
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
    ...c ? {
      data: c.data,
      rows: c.rows,
      pagination: c.pagination,
      isEmpty: c.isEmpty,
      isLoading: c.isLoading
    } : {}
  };
}
const Tx = ["id"], Dx = {
  key: 0,
  class: "px-4 pt-4 text-sm text-gray-600"
}, Fx = {
  key: 1,
  class: "mt-6"
}, Rx = 60, _x = /* @__PURE__ */ z({
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
    const t = e, n = T(() => ({
      collapsible: t.collapsible || t.collapsable,
      separate: t.separate || t.seperate,
      collapseId: t.collapseId || t.collapse_id,
      sticky: t.sticky
    })), {
      tableRef: r,
      headerRef: o,
      stickyRef: a,
      isSticky: s,
      updateStickyState: i
    } = Np(T(() => n.value.sticky), Rx), c = T(() => [
      "min-w-full divide-y divide-gray-200",
      {
        "text-xs": t.size === "sm",
        "text-sm": t.size === "md",
        "text-base": t.size === "lg",
        "border-separate border-spacing-y-2": n.value.separate,
        "border border-gray-200 rounded-lg": t.bordered,
        "[&_tbody_tr:nth-child(even)]:bg-gray-50": t.striped,
        "[&_tbody_tr:hover]:bg-gray-50 [&_tbody_tr]:transition-colors": t.hover,
        "[&>*>tr]:border-l-primary-500 mb-14 [&>*>tr]:border-l-4": n.value.collapsible,
        "shadow-sm rounded-lg overflow-hidden": t.variant === "elevated",
        "border-0": t.variant === "minimal"
      }
    ]), l = T(() => [
      "w-full overflow-x-auto",
      {
        "rounded-lg border border-gray-200 bg-white shadow-sm": t.variant === "elevated",
        "border border-gray-200 rounded-lg": t.bordered && t.variant !== "elevated"
      }
    ]), u = T(() => [
      "w-full",
      {
        "!visible hidden": n.value.collapsible
      }
    ]);
    pe(() => {
      n.value.sticky && i();
    });
    const d = T(() => {
      if (t.pagination)
        return t.pagination;
      const g = t.links;
      return g ? {
        links: g,
        current_page: 1,
        last_page: 1,
        per_page: t.defaultPerPage,
        total: t.total || 0,
        from: 1,
        to: t.total || 0
      } : null;
    }), y = T(() => {
      var g, p;
      return t.showPagination && (((p = (g = d.value) == null ? void 0 : g.links) == null ? void 0 : p.length) || 0) > 0;
    });
    return (g, p) => {
      var h;
      return S(), k("div", {
        class: Q(u.value),
        id: n.value.collapseId,
        "data-te-collapse-item": ""
      }, [
        t.total != null ? (S(), k("div", Dx, " Found: " + Z(t.total), 1)) : Y("", !0),
        D("div", {
          class: Q(l.value),
          ref_key: "tableRef",
          ref: r
        }, [
          D("table", {
            class: Q(c.value),
            ref_key: "headerRef",
            ref: o
          }, [
            n.value.sticky ? (S(), k("div", {
              key: 0,
              ref_key: "stickyRef",
              ref: a,
              class: Q(["fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow", {
                "max-sm:hidden": t.responsive
              }])
            }, null, 2)) : Y("", !0),
            j(g.$slots, "default")
          ], 2)
        ], 2),
        y.value ? (S(), k("div", Fx, [
          g.$slots.pagination ? j(g.$slots, "pagination", { key: 0 }) : (S(), U(m(qp), {
            key: 1,
            links: ((h = d.value) == null ? void 0 : h.links) || [],
            showPerPage: t.showPerPage,
            defaultPerPage: t.defaultPerPage
          }, null, 8, ["links", "showPerPage", "defaultPerPage"]))
        ])) : Y("", !0)
      ], 10, Tx);
    };
  }
}), Ix = /* @__PURE__ */ z({
  __name: "Thead",
  props: {
    sticky: { type: Boolean, default: !1 },
    responsive: { type: Boolean, default: !0 },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, n = T(() => [
      "bg-gray-50 border-b border-gray-200",
      {
        "hidden sm:table-header-group": t.responsive,
        "sticky top-0 z-10": t.sticky
      }
    ]);
    return (r, o) => (S(), k("thead", {
      class: Q(n.value)
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), Bx = { key: 0 }, Lx = { key: 1 }, Mx = { key: 1 }, Nx = { key: 0 }, jx = /* @__PURE__ */ z({
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
    const t = e, n = typeof t.data == "string" ? jp(t.data) : null, r = T(() => {
      var c;
      return Array.isArray(t.data) ? t.data : typeof t.data == "string" && n ? t.recordsFromPagination ? (c = n.data.value) == null ? void 0 : c.data : n.rows.value : [];
    }), o = T(() => Array.isArray(r.value) && r.value.length === 0), a = T(() => {
      const c = t.data !== void 0;
      return !t.hideNoRecordsMessage && c && o.value;
    }), s = T(() => !t.hidePlaceholder && (t.loading || (n == null ? void 0 : n.isLoading.value))), i = T(() => !t.ignoreDefer && typeof t.data == "string");
    return T(() => r.value), (c, l) => i.value ? (S(), k("tbody", Mx, [
      J(m(g3), {
        data: typeof t.data == "string" ? t.data : ""
      }, {
        fallback: _(() => [
          t.hidePlaceholder ? Y("", !0) : (S(), U(m(Sc), {
            key: 0,
            placeholders: c.loadingRows
          }, null, 8, ["placeholders"]))
        ]),
        default: _(() => [
          a.value ? (S(), k("tr", Nx, [
            J(m(ho), {
              colspan: "999",
              class: "text-center text-gray-500 py-8"
            }, {
              default: _(() => [
                ce(Z(t.emptyMessage || t.noRecordsMessage), 1)
              ]),
              _: 1
            })
          ])) : Y("", !0),
          j(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ])) : (S(), k("tbody", Bx, [
      s.value ? (S(), U(m(Sc), {
        key: 0,
        placeholders: c.loadingRows
      }, null, 8, ["placeholders"])) : a.value ? (S(), k("tr", Lx, [
        J(m(ho), {
          colspan: "999",
          class: "text-center text-gray-500 py-8"
        }, {
          default: _(() => [
            ce(Z(t.emptyMessage || t.noRecordsMessage), 1)
          ]),
          _: 1
        })
      ])) : j(c.$slots, "default", { key: 2 })
    ]));
  }
}), qx = { class: "flex items-center justify-between" }, Vx = {
  key: 0,
  class: "sort-arrows ml-2 flex flex-col items-center"
}, zx = /* @__PURE__ */ z({
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
    const t = e, n = T(() => t.column || t.orderBy), { getSortDirection: r, isSorted: o, sort: a } = Mp(), s = T(() => n.value ? r(n.value) : null), i = T(() => n.value ? o(n.value) : !1), c = T(() => t.sortable && n.value), l = () => {
      !c.value || !n.value || a(n.value);
    }, u = (g) => s.value === g && i.value ? "text-blue-600" : "text-gray-400", d = T(() => [
      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50",
      {
        "cursor-pointer hover:bg-gray-100": c.value,
        "text-left": t.align === "left",
        "text-center": t.align === "center",
        "text-right": t.align === "right",
        "w-0": t.width === "auto"
      },
      t.width && t.width !== "auto" ? `w-${t.width}` : ""
    ]), y = T(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (g, p) => (S(), k("th", {
      scope: "col",
      class: Q(d.value),
      style: et(y.value),
      onClick: l
    }, [
      D("div", qx, [
        j(g.$slots, "default"),
        c.value ? (S(), k("span", Vx, [
          (S(), k("svg", {
            class: Q(["h-3 w-3 -mb-1", u("asc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, p[0] || (p[0] = [
            D("path", { d: "M6 3L2 7h8L6 3z" }, null, -1)
          ]), 2)),
          (S(), k("svg", {
            class: Q(["h-3 w-3", u("desc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, p[1] || (p[1] = [
            D("path", { d: "M6 9L2 5h8L6 9z" }, null, -1)
          ]), 2))
        ])) : Y("", !0)
      ])
    ], 6));
  }
}), Ux = {
  key: 0,
  class: "sm:hidden"
}, Hx = { class: "font-medium text-gray-500" }, Wx = { class: "ml-2" }, Kx = { key: 1 }, ho = /* @__PURE__ */ z({
  __name: "Td",
  props: {
    align: { default: "left" },
    responsive: { type: Boolean, default: !0 },
    label: {},
    width: {},
    nowrap: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = T(() => [
      "px-6 py-4 text-sm text-gray-900",
      {
        "text-left": t.align === "left",
        "text-center": t.align === "center",
        "text-right": t.align === "right",
        "block border-b border-gray-100 last:border-b-0 sm:table-cell sm:border-b-0": t.responsive,
        "px-4 py-2 sm:px-6 sm:py-4": t.responsive,
        "whitespace-nowrap": t.nowrap,
        "w-0": t.width === "auto"
      }
    ]), r = T(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (o, a) => (S(), k("td", {
      class: Q(n.value),
      style: et(r.value)
    }, [
      t.label && t.responsive ? (S(), k("div", Ux, [
        D("span", Hx, Z(t.label) + ":", 1),
        D("span", Wx, [
          j(o.$slots, "default")
        ])
      ])) : (S(), k("div", Kx, [
        j(o.$slots, "default")
      ]))
    ], 6));
  }
}), Gx = ["data-te-target", "aria-controls"], x4 = /* @__PURE__ */ z({
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => (S(), k("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      j(t.$slots, "default")
    ], 8, Gx));
  }
}), Yx = { colspan: "999" }, Xx = ["id"], C4 = /* @__PURE__ */ z({
  __name: "TrCollapse",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => (S(), k("tr", null, [
      D("td", Yx, [
        D("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          j(t.$slots, "default")
        ], 8, Xx)
      ])
    ]));
  }
}), Sc = /* @__PURE__ */ z({
  __name: "TrPlaceholder",
  props: {
    placeholders: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (S(!0), k(re, null, ge(t.placeholders, (o) => (S(), k("tr", { key: o }, [
      J(m(ho), { colspan: "999" }, {
        default: _(() => r[0] || (r[0] = [
          D("div", { class: "tr-placeholder bg-opacity-75 h-8 w-full animate-pulse rounded-md bg-gray-500" }, null, -1)
        ])),
        _: 1
      })
    ]))), 128));
  }
}), Jx = { class: "max-xxs:text-xxs mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600" }, Qx = {
  key: 0,
  class: "xs:w-fit mb-2 h-fit w-full"
}, Zx = { key: 0 }, eC = {
  key: 1,
  class: "ml-1"
}, tC = { class: "flex w-fit flex-wrap" }, nC = {
  key: 0,
  class: "font-semibold"
}, rC = { class: "mb-1" }, oC = {
  key: 0,
  class: "text-primary w-full font-semibold whitespace-normal"
}, aC = { class: "w-full break-words" }, sC = { class: "mb-1 flex flex-col" }, iC = { key: 1 }, O4 = /* @__PURE__ */ z({
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
    return (n, r) => {
      var o;
      return S(), k("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        D("div", Jx, [
          t.itemId || t.timeStamp ? (S(), k("div", Qx, [
            t.itemId ? (S(), k(re, { key: 0 }, [
              t.itemId.routeName ? (S(), U(m(pt), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: _(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (S(), k(re, { key: 0 }, [
                    ce("#")
                  ], 64)) : Y("", !0),
                  ce(" " + Z(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (S(), k("span", Zx, [
                t.itemId.prefix || t.itemId.prefix == null ? (S(), k(re, { key: 0 }, [
                  ce("#")
                ], 64)) : Y("", !0),
                ce(" " + Z(t.itemId.id), 1)
              ]))
            ], 64)) : Y("", !0),
            t.timeStamp ? (S(), k("span", eC, [
              t.itemId ? (S(), k(re, { key: 0 }, [
                ce("-")
              ], 64)) : Y("", !0),
              ce(" " + Z(t.timeStamp), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          D("div", tC, [
            (S(!0), k(re, null, ge(n.pills, (a, s) => (S(), k(re, { key: s }, [
              a.text ? (S(), k("span", {
                key: 0,
                class: "bg-primary rounded-md border p-1 px-2 whitespace-nowrap text-white",
                style: et({
                  backgroundColor: a.color ? a.color : null
                })
              }, Z(a.text), 5)) : Y("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (S(), k(re, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (S(), k("p", nC, Z(t.title.text), 1)) : (S(), U(m(pt), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: _(() => [
              ce(Z(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Y("", !0),
        D("div", rC, [
          t.extraText ? (S(), k("p", oC, [
            r[0] || (r[0] = ce(" Engineer Note: ")),
            D("span", aC, Z(t.extraText), 1)
          ])) : Y("", !0)
        ]),
        D("div", sC, [
          (S(!0), k(re, null, ge(n.options, (a, s) => (S(), k(re, { key: s }, [
            !a.routeName && !a.href ? (S(), k("span", {
              key: 0,
              style: et({ color: a.color ? a.color : "#000" })
            }, Z(a.text), 5)) : (S(), U(m(pt), {
              href: a.href ? a.href : n.route(a.routeName, a.routeData),
              style: et({ color: a.color ? a.color : "#000" }),
              key: "link-" + s
            }, {
              default: _(() => [
                ce(Z(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 128))
        ]),
        (o = t.amount) != null && o.amount ? (S(), k("div", iC, [
          D("span", null, Z(t.amount.text + m(v3)(t.amount.amount)), 1)
        ])) : Y("", !0),
        D("div", null, [
          j(n.$slots, "default")
        ])
      ]);
    };
  }
}), lC = { class: "flex" }, uC = { class: "flex-shrink-0" }, cC = { class: "ml-3 flex-1" }, dC = {
  key: 0,
  class: "mb-1 text-sm font-medium"
}, fC = { class: "text-sm" }, pC = {
  key: 0,
  class: "ml-auto flex-shrink-0"
}, A4 = /* @__PURE__ */ z({
  __name: "Alert",
  props: {
    type: { default: "info" },
    title: { default: void 0 },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = N(n.modelValue), a = T({
      get: () => o.value,
      set: (h) => {
        o.value = h, r("update:modelValue", h);
      }
    });
    ne(
      () => n.modelValue,
      (h) => {
        o.value = h;
      },
      { immediate: !0 }
    );
    const s = T(() => {
      const h = "relative w-full rounded-lg border px-4 py-3 text-sm";
      switch (n.type) {
        case "success":
          return `${h} border-green-200 bg-green-50 text-green-800`;
        case "error":
          return `${h} border-red-200 bg-red-50 text-red-800`;
        case "warning":
          return `${h} border-yellow-200 bg-yellow-50 text-yellow-800`;
        case "info":
        default:
          return `${h} border-blue-200 bg-blue-50 text-blue-800`;
      }
    }), i = T(() => {
      switch (n.type) {
        case "success":
          return ym;
        case "error":
          return $m;
        case "warning":
          return Pm;
        case "info":
        default:
          return bm;
      }
    }), c = () => {
      a.value = !1, r("dismiss");
    }, l = (h) => {
      const f = h;
      f.style.height = "0", f.style.opacity = "0", f.style.transform = "translateY(-8px) scale(0.95)";
    }, u = (h, f) => {
      const v = h, w = v.scrollHeight;
      v.style.transition = "all 400ms ease-out", requestAnimationFrame(() => {
        v.style.height = `${w}px`, v.style.opacity = "1", v.style.transform = "translateY(0) scale(1)";
      }), setTimeout(f, 400);
    }, d = (h) => {
      const f = h;
      f.style.height = "auto";
    }, y = (h) => {
      const f = h, v = f.scrollHeight;
      f.style.height = `${v}px`;
    }, g = (h, f) => {
      const v = h;
      v.style.transition = "all 350ms ease-in", requestAnimationFrame(() => {
        v.style.height = "0", v.style.opacity = "0", v.style.transform = "translateY(-8px) scale(0.95)";
      }), setTimeout(f, 350);
    }, p = (h) => {
      const f = h;
      f.style.height = "", f.style.opacity = "", f.style.transform = "", f.style.transition = "";
    };
    return (h, f) => (S(), U(cn, {
      name: "alert",
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: d,
      onBeforeLeave: y,
      onLeave: g,
      onAfterLeave: p,
      css: !1
    }, {
      default: _(() => [
        a.value ? (S(), k("div", {
          key: 0,
          class: Q(s.value),
          role: "alert",
          style: { overflow: "hidden" }
        }, [
          D("div", lC, [
            D("div", uC, [
              J(m(Ee), {
                icon: i.value,
                class: Q(["h-5 w-5", {
                  "text-green-400": h.type === "success",
                  "text-red-400": h.type === "error",
                  "text-yellow-400": h.type === "warning",
                  "text-blue-400": h.type === "info"
                }])
              }, null, 8, ["icon", "class"])
            ]),
            D("div", cC, [
              h.title ? (S(), k("h3", dC, Z(h.title), 1)) : Y("", !0),
              D("div", fC, [
                j(h.$slots, "default")
              ])
            ]),
            h.dismissible ? (S(), k("div", pC, [
              D("button", {
                onClick: c,
                class: Q(["inline-flex rounded-md p-1.5 transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none", {
                  "text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50": h.type === "success",
                  "text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50": h.type === "error",
                  "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50": h.type === "warning",
                  "text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50": h.type === "info"
                }]),
                "aria-label": "Dismiss alert"
              }, [
                J(m(Ee), {
                  icon: m(Zr),
                  class: "h-5 w-5"
                }, null, 8, ["icon"])
              ], 2)
            ])) : Y("", !0)
          ])
        ], 2)) : Y("", !0)
      ]),
      _: 3
    }));
  }
}), mC = { class: "text-lg font-semibold text-gray-900" }, hC = { key: 0 }, yC = { class: "p-6" }, gC = /* @__PURE__ */ z({
  __name: "CollapsableSection",
  props: {
    header: { default: void 0 },
    open: { type: Boolean, default: !1 },
    headerColor: { default: void 0 }
  },
  setup(e) {
    const t = e, n = N(t.open);
    return ne(
      () => t.open,
      (r) => n.value = r
    ), pe(() => {
      n.value = t.open;
    }), (r, o) => (S(), U(m(Ei), {
      defaultOpen: r.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a),
      class: "rounded-lg border border-gray-200 bg-white shadow"
    }, {
      default: _(() => [
        J(m(ki), {
          class: "focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          style: et({ backgroundColor: r.headerColor })
        }, {
          default: _(() => [
            D("h3", mC, [
              r.header ? (S(), k("span", hC, Z(r.header), 1)) : j(r.$slots, "trigger", { key: 1 })
            ]),
            D("div", {
              class: Q(["text-primary-600 transition-transform duration-300 ease-in-out", { "rotate-180": n.value }])
            }, [
              J(m(Ee), {
                icon: m(ei),
                class: "h-5 w-5"
              }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 3
        }, 8, ["style"]),
        J(m(Pi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: _(() => [
            D("div", yC, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), E4 = /* @__PURE__ */ z({
  __name: "Dropdown",
  props: {
    align: { default: Lp.START },
    alignOffset: { default: 5 },
    openOnHover: { type: Boolean, default: !1 },
    hoverDelay: { default: 150 }
  },
  setup(e) {
    const t = e, n = N(!1);
    let r = null;
    const o = async () => {
      t.openOnHover && (r && (clearTimeout(r), r = null), await De(), n.value = !0);
    }, a = () => {
      t.openOnHover && (r = setTimeout(async () => {
        await De(), n.value = !1, r = null;
      }, t.hoverDelay));
    }, s = (i) => {
      n.value = i;
    };
    return (i, c) => (S(), U(m(tf), {
      open: n.value,
      "onUpdate:open": [
        c[0] || (c[0] = (l) => n.value = l),
        s
      ]
    }, {
      default: _(() => [
        J(m(of), { "aria-label": "Dropdown" }, {
          default: _(() => [
            j(i.$slots, "trigger")
          ]),
          _: 3
        }),
        J(m(rf), null, {
          default: _(() => [
            J(m(nf), se({ alignOffset: i.alignOffset }, i.$attrs, {
              align: i.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]",
              onMouseenter: o,
              onMouseleave: a
            }), {
              default: _(() => [
                j(i.$slots, "content")
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
}), P4 = /* @__PURE__ */ z({
  __name: "DropdownLink",
  props: {
    href: {}
  },
  setup(e) {
    return (t, n) => (S(), U(m(lb), null, {
      default: _(() => [
        J(m(pt), se(t.$attrs, {
          href: t.href,
          class: "focusable flex w-full items-center gap-2 rounded px-8 py-6 text-left text-base leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
        }), {
          default: _(() => [
            j(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["href"])
      ]),
      _: 3
    }));
  }
}), k4 = /* @__PURE__ */ z({
  __name: "DropdownSeparator",
  setup(e) {
    return (t, n) => (S(), U(m(ub), { class: "mx-1 my-px h-px bg-gray-300" }));
  }
}), vC = ["href", "target", "tabindex", "aria-disabled"], bC = "focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium transition-colors duration-200 select-none", $4 = /* @__PURE__ */ z({
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
      [Se.PRIMARY]: "bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.SECONDARY]: "border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-25",
      [Se.DANGER]: "bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.WARNING]: "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.INFO]: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.SUCCESS]: "bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.NO_STYLE]: ""
    }, n = e, r = () => {
      if (n.colourClasses && n.colourClasses.length > 0)
        return [...n.colourClasses];
      const o = [];
      return n.theme !== Se.NO_STYLE && o.push(bC), o.push(t[n.theme]), o;
    };
    return (o, a) => o.href && (o.method || o.data) ? (S(), U(m(pt), {
      key: 0,
      href: o.href,
      method: o.method,
      data: o.data,
      class: Q(r()),
      disabled: o.disabled,
      as: "button",
      tabindex: "0"
    }, {
      default: _(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class", "disabled"])) : (S(), k("a", {
      key: 1,
      href: o.href,
      target: o.target,
      class: Q(r()),
      tabindex: o.disabled ? -1 : 0,
      "aria-disabled": o.disabled,
      onClick: a[0] || (a[0] = (s) => o.disabled && s.preventDefault())
    }, [
      j(o.$slots, "default")
    ], 10, vC));
  }
}), wC = {
  class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
  type: "button"
}, SC = { class: "mx-1 w-2" }, xC = ["aria-labelledby"], T4 = /* @__PURE__ */ z({
  __name: "LinkDropdownButton",
  props: {
    align: { default: Lp.START },
    alignOffset: { default: 5 },
    title: { default: void 0 }
  },
  setup(e) {
    const t = N(!1);
    return (n, r) => (S(), U(m(tf), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: _(() => [
        J(m(of), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: _(() => [
            D("button", wC, [
              ce(Z(n.title) + " ", 1),
              D("span", SC, [
                J(m(Ee), { icon: m(Zs) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        J(m(rf), null, {
          default: _(() => [
            J(m(nf), se({ alignOffset: n.alignOffset }, n.$attrs, {
              align: n.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            }), {
              default: _(() => [
                D("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
                  "aria-labelledby": n.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  j(n.$slots, "default")
                ], 8, xC)
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
}), CC = ["href"], D4 = /* @__PURE__ */ z({
  __name: "LinkDropdownButtonItem",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, n) => (S(), k("li", null, [
      D("a", {
        class: "focusable inline-flex w-full items-center justify-center bg-transparent px-4 py-2 text-sm font-normal whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href
      }, Z(t.title), 9, CC)
    ]));
  }
}), F4 = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (S(), U(m(gC), { header: e.header }, {
      default: _(() => [
        J(m(NC), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, OC = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, AC = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, EC = {
  key: 0,
  class: "text-center"
}, PC = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, kC = { class: "flex-start w-full md:flex" }, $C = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, TC = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, DC = { class: "mb-1 flex justify-between" }, FC = { class: "text-sm text-neutral-500" }, RC = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, _C = {
  key: 1,
  class: "text-sm text-primary-500"
}, IC = { class: "text-sm text-neutral-500" }, BC = { class: "font-medium" }, LC = {
  key: 0,
  class: "line-through"
}, MC = ["innerHTML"], NC = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return xo.add(xm, as, Am, pm, Om), (t, n) => e.logs == null ? (S(), k("div", OC, [
      J(m(Vi))
    ])) : (S(), k("div", AC, [
      e.logs.total ? (S(), k("ol", PC, [
        (S(!0), k(re, null, ge(e.logs.data, (r) => (S(), k("li", {
          key: r.id
        }, [
          D("div", kC, [
            D("div", $C, [
              J(m(Ee), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            D("div", TC, [
              D("div", DC, [
                D("span", FC, [
                  ce(Z(r.event_formatted) + " ", 1),
                  r.reference ? (S(), k("span", RC, Z(r.reference), 1)) : Y("", !0),
                  r.causer ? (S(), k(re, { key: 1 }, [
                    r.causer.id ? (S(), U(m(pt), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: _(() => [
                        ce(" (" + Z(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (S(), k("span", _C, "(" + Z(r.causer.first_name) + ")", 1))
                  ], 64)) : Y("", !0)
                ]),
                D("span", IC, Z(r.created_date_full), 1)
              ]),
              (S(!0), k(re, null, ge(r.changes_formatted, (o, a) => (S(), k("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                D("span", BC, Z(a) + ":", 1),
                o.old ? (S(), k("span", LC, Z(o.old), 1)) : Y("", !0),
                ce(" " + Z(o.new), 1)
              ]))), 128)),
              r.description_details ? (S(), k("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, MC)) : Y("", !0)
            ])
          ])
        ]))), 128))
      ])) : (S(), k("p", EC, "No Data")),
      e.logs.links ? (S(), U(m(qp), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Y("", !0)
    ]));
  }
}, R4 = /* @__PURE__ */ z({
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
    const n = e, r = t, o = N(null);
    ne(
      () => n.show,
      () => {
        n.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const a = () => {
      n.closeable && r("close");
    }, s = (O) => {
      O.key === "Escape" && n.show && a();
    };
    pe(() => document.addEventListener("keydown", s)), Nt(() => {
      document.removeEventListener("keydown", s), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", v), document.body.style.overflow = null;
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
        }[n.maxWidth]
      ), n.hideOverflow && O.push("overflow-hidden"), O.join(" ");
    }), c = N(!1), l = N(null), u = N(0), d = N(0), y = N(0), g = N(0), p = N(null), h = N(null), f = (O, P) => {
      c.value = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", v), l.value = P, u.value = O.clientX, d.value = O.clientY, y.value = o.value.offsetWidth, g.value = o.value.offsetHeight;
    }, v = (O) => {
      c.value = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", v);
    }, w = (O) => {
      if (!c.value) return;
      const P = (O.clientX - u.value) * 2, F = O.clientY - d.value;
      l.value.includes("x") && (p.value = y.value + P + "px"), l.value.includes("-x") && (p.value = y.value - P + "px"), l.value.includes("y") && (h.value = g.value + F + "px");
    };
    return (O, P) => (S(), U(Dc, { to: "body" }, [
      J(cn, { "leave-active-class": "duration-200" }, {
        default: _(() => [
          Ze(D("div", {
            class: Q(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            J(cn, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: _(() => [
                Ze(D("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, [
                  D("div", {
                    class: Q(["backdrop absolute inset-0 bg-gray-500 opacity-75", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [un, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            J(cn, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: _(() => [
                Ze(D("div", {
                  ref_key: "modalContent",
                  ref: o,
                  class: Q(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", {
                    [i.value]: !!i.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: et({
                    userSelect: c.value ? "none" : "auto",
                    transition: c.value ? "none" : "",
                    width: p.value || "",
                    height: h.value || "",
                    maxWidth: p.value || "",
                    maxHeight: h.value || ""
                  })
                }, [
                  e.show ? j(O.$slots, "default", { key: 0 }) : Y("", !0),
                  e.resizable ? (S(), k(re, { key: 1 }, [
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: P[0] || (P[0] = (F) => f(F, "y")),
                      onMouseup: v
                    }, null, 32),
                    D("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: P[1] || (P[1] = (F) => f(F, "-x")),
                      onMouseup: v
                    }, null, 32),
                    D("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: P[2] || (P[2] = (F) => f(F, "x")),
                      onMouseup: v
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: P[3] || (P[3] = (F) => f(F, "xy")),
                      onMouseup: v
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: P[4] || (P[4] = (F) => f(F, "-xy")),
                      onMouseup: v
                    }, null, 32)
                  ], 64)) : Y("", !0)
                ], 6), [
                  [un, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [un, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), jC = {
  key: 2,
  class: "mb-3"
}, qC = {
  key: 3,
  class: "mt-5 flex justify-end gap-1.5"
}, _4 = /* @__PURE__ */ z({
  __name: "NewModal",
  props: /* @__PURE__ */ mt({
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
    const t = e, n = qn(e, "modelValue"), r = (o) => {
      n.value = o;
    };
    return pe(() => {
      t.defaultOpen && (n.value = !0);
    }), Nt(() => {
      n.value = !1;
    }), ne(
      () => t.defaultOpen,
      (o) => {
        n.value = o;
      }
    ), (o, a) => (S(), U(m(jv), {
      defaultOpen: o.defaultOpen,
      open: n.value,
      "onUpdate:open": [
        a[0] || (a[0] = (s) => n.value = s),
        r
      ]
    }, {
      default: _(() => [
        o.$slots.trigger ? (S(), U(m(C0), {
          key: 0,
          asChild: ""
        }, {
          default: _(() => [
            j(o.$slots, "trigger")
          ]),
          _: 3
        })) : Y("", !0),
        J(m(sb), null, {
          default: _(() => [
            J(m(S0), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" }),
            J(m(m0), se({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 shadow-lg/20 focus:outline-none" }, o.$attrs), {
              default: _(() => [
                o.title || o.$slots.header ? (S(), U(m(x0), {
                  key: 0,
                  class: "m-0 text-lg font-semibold"
                }, {
                  default: _(() => [
                    j(o.$slots, "header", {}, () => [
                      ce(Z(o.title), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                o.description || o.$slots.description ? (S(), U(m(h0), {
                  key: 1,
                  class: "mt-2 text-sm leading-normal"
                }, {
                  default: _(() => [
                    j(o.$slots, "description", {}, () => [
                      ce(Z(o.description), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                o.title || o.$slots.header || o.description || o.$slots.description ? (S(), k("div", jC)) : Y("", !0),
                j(o.$slots, "default"),
                o.$slots.footer ? (S(), k("div", qC, [
                  j(o.$slots, "footer")
                ])) : Y("", !0),
                J(m(qv), {
                  class: "focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none",
                  "aria-label": "Close"
                }, {
                  default: _(() => [
                    J(m(Ee), { icon: m(Zr) }, null, 8, ["icon"])
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
}), VC = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, zC = { class: "ml-3 flex-1 whitespace-nowrap" }, I4 = /* @__PURE__ */ z({
  __name: "NavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = T(
      () => t.active ? "cursor-pointer focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "cursor-pointer focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, o) => (S(), U(m(pt), {
      href: r.href,
      class: Q(n.value)
    }, {
      default: _(() => [
        r.$slots.icon ? (S(), k("div", VC, [
          j(r.$slots, "icon")
        ])) : Y("", !0),
        D("span", zC, [
          j(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), UC = { class: "pagination flex justify-between" }, HC = ["value", "selected"], WC = {
  key: 0,
  "aria-label": "Page navigation"
}, KC = ["innerHTML"], GC = ["innerHTML", "onClick"], qp = /* @__PURE__ */ z({
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
    const n = t, r = e, o = N(r.defaultPerPage), a = [10, 25, 50, 100, 250], s = T(() => {
      if (!r.links || r.links.length <= 3)
        return r.links;
      const l = r.links[0], u = r.links[r.links.length - 1], d = r.links.findIndex((p) => p.active);
      let y = Math.max(1, d - Math.floor(r.maxPagesToShow / 2)), g = Math.min(r.links.length - 2, y + r.maxPagesToShow - 1);
      return g - y < r.maxPagesToShow - 1 && (y = Math.max(1, g - r.maxPagesToShow + 1)), [l, ...r.links.slice(y, g + 1), u];
    }), i = (l) => {
      n("change", l);
    }, c = (l) => {
      let u = new URL(window.location.href);
      if (u.searchParams.set("per_page", l.target.value), r.linkReturn) {
        i(u.href);
        return;
      }
      window.location.href = u.href;
    };
    return (l, u) => (S(), k("div", UC, [
      D("div", null, [
        l.showPerPage ? (S(), U(m(hg), {
          key: 0,
          type: "select",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d),
          class: "per-page-input w-20",
          onChanged: c
        }, {
          default: _(() => [
            (S(), k(re, null, ge(a, (d) => D("option", {
              key: d,
              value: d,
              selected: d == o.value
            }, Z(d), 9, HC)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0)
      ]),
      s.value.length > 3 ? (S(), k("nav", WC, [
        D("ul", {
          class: Q(["list-style-none flex", { [l.customListClass]: l.customListClass }])
        }, [
          (S(!0), k(re, null, ge(s.value, (d, y) => (S(), k("li", { key: y }, [
            l.linkReturn ? (S(), k(re, { key: 0 }, [
              d.url === null ? (S(), k("button", {
                key: 0,
                class: Q(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: u[1] || (u[1] = (g) => i(""))
              }, null, 10, KC)) : (S(), k("button", {
                key: 1,
                class: Q(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [l.customLinkClass]: l.customLinkClass,
                  [l.customActiveLinkClass]: d.active && l.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (g) => i(d.url)
              }, null, 10, GC))
            ], 64)) : (S(), k(re, { key: 1 }, [
              d.url === null ? (S(), U(m(pt), {
                key: 0,
                class: Q(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (S(), U(m(pt), {
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
      ])) : Y("", !0),
      u[2] || (u[2] = D("div", null, null, -1))
    ]));
  }
}), B4 = /* @__PURE__ */ z({
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => {
      const r = rm("Td");
      return S(), U(r, {
        "data-te-collapse-init": "",
        "data-te-target": "#" + t.collapse_id,
        "aria-expanded": "false",
        "aria-controls": t.collapse_id,
        class: "cursor-pointer"
      }, {
        default: _(() => [
          j(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-te-target", "aria-controls"]);
    };
  }
}), L4 = /* @__PURE__ */ z({
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
    const n = e, r = t, o = (s) => {
      n.selectable && r("select", !n.selected), n.clickable && r("click", s);
    }, a = T(() => [
      "border-b border-gray-200 last:border-b-0 transition-colors",
      {
        "hover:bg-gray-50": n.hoverable && !n.selected,
        "bg-blue-50 border-blue-200": n.selected,
        "cursor-pointer": n.clickable || n.selectable,
        "border-green-200 bg-green-50": n.variant === "success",
        "border-yellow-200 bg-yellow-50": n.variant === "warning",
        "border-red-200 bg-red-50": n.variant === "danger",
        "border-blue-200 bg-blue-50": n.variant === "info",
        "sm:table-row": !0,
        "flex flex-col mb-4 rounded-lg border border-gray-200 shadow-sm bg-white sm:mb-0 sm:rounded-none sm:border-0 sm:shadow-none sm:bg-transparent": !0
      }
    ]);
    return (s, i) => (S(), k("tr", {
      class: Q(a.value),
      onClick: o
    }, [
      j(s.$slots, "default")
    ], 2));
  }
}), YC = ["onClick"], M4 = /* @__PURE__ */ z({
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
    const n = e, r = t, o = $x({
      sortable: n.sortable,
      selectable: n.selectable,
      multiple: !0,
      sticky: n.sticky,
      resource: n.resource
    });
    yo("table", {
      ...o,
      props: n,
      emit: r
    });
    const a = T(() => n.columns ? n.columns : n.autoGenerateColumns && n.data && n.data.length > 0 ? Object.keys(n.data[0]).map((l) => ({
      key: l,
      label: l.charAt(0).toUpperCase() + l.slice(1).replace(/([A-Z])/g, " $1"),
      sortable: n.sortable,
      width: void 0,
      align: "left"
    })) : []), s = (l, u) => {
      r("row-click", l, u);
    }, i = (l) => {
      var u;
      if (o.sort) {
        o.sort(l);
        const d = ((u = o.getSortDirection) == null ? void 0 : u.call(o, l)) || "asc";
        r("sort", l, d);
      }
    }, c = T(() => {
      var l;
      return ((l = o.rows) == null ? void 0 : l.value) || n.data || [];
    });
    return (l, u) => (S(), U(m(_x), be(Ae(n)), {
      default: _(() => {
        var d;
        return [
          a.value.length > 0 ? (S(), k(re, { key: 0 }, [
            J(m(Ix), null, {
              default: _(() => [
                D("tr", null, [
                  (S(!0), k(re, null, ge(a.value, (y) => (S(), U(m(zx), {
                    key: y.key,
                    column: y.key,
                    sortable: y.sortable,
                    width: y.width || void 0,
                    align: y.align || "left",
                    onClick: (g) => y.sortable ? i(y.key) : null
                  }, {
                    default: _(() => [
                      ce(Z(y.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["column", "sortable", "width", "align", "onClick"]))), 128))
                ])
              ]),
              _: 1
            }),
            J(m(jx), {
              data: c.value,
              loading: (d = m(o).isLoading) == null ? void 0 : d.value,
              "empty-message": n.emptyMessage
            }, {
              default: _(() => [
                (S(!0), k(re, null, ge(c.value, (y, g) => {
                  var p, h;
                  return S(), k("tr", {
                    key: y.id || g,
                    class: Q([
                      "border-b border-gray-200 transition-colors hover:bg-gray-50",
                      {
                        "cursor-pointer": n.selectable,
                        "bg-blue-50": (h = (p = m(o)).isSelected) == null ? void 0 : h.call(p, y)
                      }
                    ]),
                    onClick: (f) => s(y, g)
                  }, [
                    (S(!0), k(re, null, ge(a.value, (f) => (S(), U(m(ho), {
                      key: f.key,
                      align: f.align || "left",
                      width: f.width || void 0,
                      nowrap: f.key === "id"
                    }, {
                      default: _(() => [
                        j(l.$slots, `cell-${f.key}`, {
                          row: y,
                          column: f,
                          value: y[f.key]
                        }, () => [
                          ce(Z(y[f.key]), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["align", "width", "nowrap"]))), 128))
                  ], 10, YC);
                }), 128))
              ]),
              _: 3
            }, 8, ["data", "loading", "empty-message"])
          ], 64)) : j(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 16));
  }
}), N4 = /* @__PURE__ */ z({
  __name: "DangerButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (S(), U(m(xn), {
      theme: m(Se).DANGER,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: _(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), j4 = /* @__PURE__ */ z({
  __name: "WarningButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (S(), U(m(xn), {
      theme: m(Se).WARNING,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: _(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), q4 = /* @__PURE__ */ z({
  __name: "InfoButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (S(), U(m(xn), {
      theme: m(Se).INFO,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: _(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), V4 = /* @__PURE__ */ z({
  __name: "SuccessButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (S(), U(m(xn), {
      theme: m(Se).SUCCESS,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: _(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), z4 = /* @__PURE__ */ z({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = T(
      () => t.active ? "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, o) => (S(), U(m(pt), {
      href: r.href,
      class: Q(n.value)
    }, {
      default: _(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), XC = /* @__PURE__ */ z({
  __name: "SecondaryButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (S(), U(m(xn), {
      theme: m(Se).SECONDARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: _(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), JC = {
  key: 0,
  class: "border-b border-gray-200 bg-gray-50/50 px-6 py-4"
}, QC = { class: "flex items-center justify-between" }, ZC = { class: "text-lg font-semibold text-gray-900" }, eO = { key: 0 }, tO = { class: "p-6" }, U4 = /* @__PURE__ */ z({
  __name: "Section",
  props: {
    header: {},
    overflow: { type: Boolean, default: !1 },
    variant: { default: "default" },
    unstyled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = om(), r = T(() => {
      if (t.unstyled)
        return "";
      const s = "rounded-lg";
      switch (t.variant) {
        case "outlined":
          return `${s} border border-gray-300`;
        case "minimal":
          return s;
        case "default":
        default:
          return `${s} border border-gray-200 bg-white shadow`;
      }
    }), o = T(() => {
      const s = [];
      return t.unstyled || s.push(r.value), t.overflow && s.push("overflow-hidden"), n.class && typeof n.class == "string" && s.push(n.class), s.filter(Boolean).join(" ");
    }), a = T(() => {
      const { class: s, ...i } = n;
      return i;
    });
    return (s, i) => (S(), k("div", se({ class: o.value }, a.value), [
      s.header ? (S(), k("div", JC, [
        D("div", QC, [
          D("h3", ZC, Z(s.header), 1),
          s.$slots.headerButton ? (S(), k("div", eO, [
            j(s.$slots, "headerButton")
          ])) : Y("", !0)
        ])
      ])) : Y("", !0),
      D("div", tO, [
        j(s.$slots, "default")
      ])
    ], 16));
  }
}), Vi = /* @__PURE__ */ z({
  __name: "Spinner",
  props: {
    size: { default: "md" },
    color: { default: void 0 }
  },
  setup(e) {
    const t = e, n = T(() => {
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
    }), r = T(() => t.color ? t.color : "text-primary");
    return (o, a) => (S(), k("div", {
      class: Q([
        "inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        n.value,
        r.value
      ]),
      role: "status",
      "aria-label": "Loading"
    }, a[0] || (a[0] = [
      D("span", { class: "sr-only" }, "Loading...", -1)
    ]), 2));
  }
}), nO = ["onClick"], rO = { class: "group-hover:text-primary-600 text-2xl font-bold text-gray-900 transition-colors" }, oO = { class: "text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900" }, H4 = /* @__PURE__ */ z({
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
    const n = t, r = e, o = Tp(), a = (i) => {
      let c = i;
      s(i) && (c = null), n("updateSearch", c);
    }, s = (i) => {
      const c = {};
      return o.url.includes("?") && new URLSearchParams(o.url.split("?")[1]).forEach((u, d) => {
        c[d] = u;
      }), r.statusName != null ? c[r.statusName] == i : c.status == i;
    };
    return (i, c) => (S(), k("div", {
      class: Q(["grid gap-4", [i.customContainerClass]]),
      style: { "grid-template-columns": "repeat(auto-fit, minmax(164px, 1fr))" }
    }, [
      (S(!0), k(re, null, ge(i.stats, (l) => (S(), k("div", {
        key: l.value,
        class: Q(["group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md", {
          "border-primary-200 bg-primary-50 ring-primary-500 ring-2": s(l.name),
          [i.customStatClass]: i.customStatClass
        }]),
        onClick: (u) => a(l.name)
      }, [
        D("div", {
          class: Q(["px-6 py-4", [i.customStatValueClass]])
        }, [
          D("div", rO, Z(l.value), 1)
        ], 2),
        D("div", {
          class: Q(["border-t border-gray-100 bg-gray-50/50 px-6 py-3", [i.customStatLabelClass]])
        }, [
          D("div", oO, Z(l.label ?? l.name), 1)
        ], 2),
        c[0] || (c[0] = D("div", { class: "from-primary-500 to-primary-600 absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100" }, null, -1))
      ], 10, nO))), 128))
    ], 2));
  }
}), aO = "fill-white stroke-gray-200", sO = /* @__PURE__ */ z({
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
    const t = e, n = T(() => ["top", "bottom", "left", "right"].includes(t.side) ? t.side : "top"), r = [
      "z-50",
      "max-w-xs",
      "overflow-hidden",
      "rounded-lg",
      "bg-white",
      "border",
      "border-gray-200",
      "px-3",
      "py-2",
      "text-sm",
      "text-gray-900",
      "shadow-lg",
      "backdrop-blur-sm",
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
    return (o, a) => (S(), U(m(Cb), { "delay-duration": o.delayDuration }, {
      default: _(() => [
        J(m(Ab), { disabled: o.disabled }, {
          default: _(() => [
            J(m($b), { "as-child": "" }, {
              default: _(() => [
                j(o.$slots, "default")
              ]),
              _: 3
            }),
            J(m(kb), null, {
              default: _(() => [
                J(m(Pb), {
                  side: n.value,
                  sideOffset: o.sideOffset,
                  collisionPadding: o.collisionPadding,
                  class: Q([m(r), o.contentClass])
                }, {
                  default: _(() => [
                    ce(Z(o.content) + " ", 1),
                    J(m(Sb), {
                      class: Q([aO, o.arrowClass])
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
}), iO = ["type", "disabled"], lO = "focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed", xn = /* @__PURE__ */ z({
  __name: "Button",
  props: {
    theme: { default: "primary" },
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    const t = e, n = {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-xs",
      md: "px-4 py-2 text-xs",
      lg: "px-6 py-3 text-sm"
    }, r = {
      [Se.PRIMARY]: "bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.SECONDARY]: "border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-25",
      [Se.DANGER]: "bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.WARNING]: "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.INFO]: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.SUCCESS]: "bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Se.NO_STYLE]: ""
    };
    return (o, a) => (S(), k("button", {
      type: o.type,
      disabled: o.disabled,
      class: Q([
        // Apply base styles and size only if not no-style theme
        t.theme !== m(Se).NO_STYLE ? [lO, n[t.size]] : [],
        // Always apply theme variant
        r[t.theme],
        // Custom classes
        t.customClass
      ])
    }, [
      j(o.$slots, "default")
    ], 10, iO));
  }
}), uO = { class: "mt-2" }, W4 = /* @__PURE__ */ z({
  __name: "Collapse",
  props: {
    open: { type: Boolean, default: !1 },
    button: { default: () => ["Show more", "Show less"] }
  },
  setup(e) {
    const t = e, n = N(t.open);
    return ne(
      () => t.open,
      (r) => n.value = r
    ), pe(() => {
      n.value = t.open;
    }), (r, o) => (S(), U(m(Ei), {
      defaultOpen: r.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
    }, {
      default: _(() => [
        J(m(ki), { asChild: "" }, {
          default: _(() => [
            j(r.$slots, "trigger", {}, () => [
              J(m(XC), be(Ae(r.$attrs)), {
                default: _(() => [
                  D("span", null, Z(n.value ? r.button[1] : r.button[0]), 1),
                  J(m(Ee), {
                    icon: m(Zs),
                    class: Q(["transition-all", { "rotate-180": n.value }])
                  }, null, 8, ["icon", "class"])
                ]),
                _: 1
              }, 16)
            ])
          ]),
          _: 3
        }),
        J(m(Pi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: _(() => [
            D("div", uO, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), cO = { class: "border-t border-gray-100" }, dO = { class: "divide-y divide-gray-100" }, K4 = /* @__PURE__ */ z({
  __name: "DescriptionList",
  props: {
    form: { default: void 0 },
    stopEditOnSubmit: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, r = N(!1);
    ne(
      () => {
        var l;
        return (l = n.form) == null ? void 0 : l.processing;
      },
      (l) => {
        if (l) {
          r.value = !0;
          return;
        }
        r.value && (r.value = !1, n.stopEditOnSubmit && i());
      }
    );
    const o = N([]);
    yo("registerItem", (l) => {
      o.value.push(l);
    });
    const s = () => {
      o.value.forEach((l) => {
        l && typeof l.startEditing == "function" && l.startEditing();
      });
    }, i = () => {
      o.value.forEach((l) => {
        l && typeof l.stopEditing == "function" && l.stopEditing();
      });
    };
    return t({
      startEditing: s,
      stopEditing: i,
      toggleEditing: () => {
        o.value.forEach((l) => {
          l && typeof l.toggleEditing == "function" && l.toggleEditing();
        });
      }
    }), (l, u) => (S(), k("div", cO, [
      D("dl", dO, [
        j(l.$slots, "default")
      ])
    ]));
  }
}), fO = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, pO = { class: "flex items-center text-sm font-medium" }, mO = {
  key: 0,
  class: "ml-1 text-red-500"
}, hO = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, yO = { class: "flex min-h-full items-center" }, gO = { class: "slot-content grow" }, vO = { class: "ml-4 shrink-0" }, bO = { class: "slot-edit grow" }, wO = { class: "ml-4 shrink-0" }, G4 = /* @__PURE__ */ z({
  __name: "DescriptionListItem",
  props: {
    editable: { type: Boolean, default: !1 },
    label: { default: "" },
    value: { default: void 0 },
    forceEditing: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 }
  },
  emits: ["editToggled"],
  setup(e, { expose: t, emit: n }) {
    xo.add(as, el);
    const r = e, o = n, a = N(r.editable ? r.forceEditing : !1), s = () => {
      r.editable && (a.value = !a.value, o("editToggled", a.value));
    };
    ne(
      () => r.forceEditing,
      (d) => {
        r.editable && (a.value = d);
      }
    );
    const i = () => {
      r.editable && (a.value = !0);
    }, c = () => {
      r.editable && (a.value = !1);
    }, l = Js("registerItem");
    return pe(() => {
      l && l({ startEditing: i, stopEditing: c, toggleEditing: s });
    }), t({
      toggleEditing: s,
      startEditing: i,
      stopEditing: c,
      isEditing: () => a.value
    }), (d, y) => (S(), k("div", fO, [
      D("dt", pO, [
        ce(Z(d.label) + " ", 1),
        j(d.$slots, "label"),
        d.required ? (S(), k("span", mO, "*")) : Y("", !0)
      ]),
      D("dd", hO, [
        D("div", yO, [
          a.value ? (S(), k(re, { key: 1 }, [
            D("div", bO, [
              j(d.$slots, "edit")
            ]),
            D("span", wO, [
              D("button", {
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-xl font-bold"
              }, [
                J(m(Ee), { icon: m(el) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (S(), k(re, { key: 0 }, [
            D("div", gO, [
              j(d.$slots, "default"),
              ce(" " + Z(d.value), 1)
            ]),
            D("span", vO, [
              d.editable ? (S(), k("button", {
                key: 0,
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-lg font-bold"
              }, [
                J(m(Ee), { icon: m(as) }, null, 8, ["icon"])
              ])) : Y("", !0),
              j(d.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
});
var rs = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var xc;
function SO() {
  return xc || (xc = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var a = !r && typeof self == "object", s = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? o = Bs : a && (o = self);
      var i = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, c = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), u = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], y = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), p = [], h;
      if (c) {
        var f = new ArrayBuffer(68);
        h = new Uint8Array(f), p = new Uint32Array(f);
      }
      var v = Array.isArray;
      (o.JS_MD5_NO_NODE_JS || !v) && (v = function(b) {
        return Object.prototype.toString.call(b) === "[object Array]";
      });
      var w = ArrayBuffer.isView;
      c && (o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !w) && (w = function(b) {
        return typeof b == "object" && b.buffer && b.buffer.constructor === ArrayBuffer;
      });
      var O = function(b) {
        var E = typeof b;
        if (E === "string")
          return [b, !0];
        if (E !== "object" || b === null)
          throw new Error(t);
        if (c && b.constructor === ArrayBuffer)
          return [new Uint8Array(b), !1];
        if (!v(b) && !w(b))
          throw new Error(t);
        return [b, !1];
      }, P = function(b) {
        return function(E) {
          return new B(!0).update(E)[b]();
        };
      }, F = function() {
        var b = P("hex");
        s && (b = H(b)), b.create = function() {
          return new B();
        }, b.update = function(x) {
          return b.create().update(x);
        };
        for (var E = 0; E < y.length; ++E) {
          var C = y[E];
          b[C] = P(C);
        }
        return b;
      }, H = function(b) {
        var E = Ls, C = Ls.Buffer, x;
        C.from && !o.JS_MD5_NO_BUFFER_FROM ? x = C.from : x = function(L) {
          return new C(L);
        };
        var K = function(L) {
          if (typeof L == "string")
            return E.createHash("md5").update(L, "utf8").digest("hex");
          if (L == null)
            throw new Error(t);
          return L.constructor === ArrayBuffer && (L = new Uint8Array(L)), v(L) || w(L) || L.constructor === C ? E.createHash("md5").update(x(L)).digest("hex") : b(L);
        };
        return K;
      }, A = function(b) {
        return function(E, C) {
          return new $(E, !0).update(C)[b]();
        };
      }, W = function() {
        var b = A("hex");
        b.create = function(x) {
          return new $(x);
        }, b.update = function(x, K) {
          return b.create(x).update(K);
        };
        for (var E = 0; E < y.length; ++E) {
          var C = y[E];
          b[C] = A(C);
        }
        return b;
      };
      function B(b) {
        if (b)
          p[0] = p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0, this.blocks = p, this.buffer8 = h;
        else if (c) {
          var E = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(E), this.blocks = new Uint32Array(E);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      B.prototype.update = function(b) {
        if (this.finalized)
          throw new Error(n);
        var E = O(b);
        b = E[0];
        for (var C = E[1], x, K = 0, L, R = b.length, X = this.blocks, ae = this.buffer8; K < R; ) {
          if (this.hashed && (this.hashed = !1, X[0] = X[16], X[16] = X[1] = X[2] = X[3] = X[4] = X[5] = X[6] = X[7] = X[8] = X[9] = X[10] = X[11] = X[12] = X[13] = X[14] = X[15] = 0), C)
            if (c)
              for (L = this.start; K < R && L < 64; ++K)
                x = b.charCodeAt(K), x < 128 ? ae[L++] = x : x < 2048 ? (ae[L++] = 192 | x >>> 6, ae[L++] = 128 | x & 63) : x < 55296 || x >= 57344 ? (ae[L++] = 224 | x >>> 12, ae[L++] = 128 | x >>> 6 & 63, ae[L++] = 128 | x & 63) : (x = 65536 + ((x & 1023) << 10 | b.charCodeAt(++K) & 1023), ae[L++] = 240 | x >>> 18, ae[L++] = 128 | x >>> 12 & 63, ae[L++] = 128 | x >>> 6 & 63, ae[L++] = 128 | x & 63);
            else
              for (L = this.start; K < R && L < 64; ++K)
                x = b.charCodeAt(K), x < 128 ? X[L >>> 2] |= x << d[L++ & 3] : x < 2048 ? (X[L >>> 2] |= (192 | x >>> 6) << d[L++ & 3], X[L >>> 2] |= (128 | x & 63) << d[L++ & 3]) : x < 55296 || x >= 57344 ? (X[L >>> 2] |= (224 | x >>> 12) << d[L++ & 3], X[L >>> 2] |= (128 | x >>> 6 & 63) << d[L++ & 3], X[L >>> 2] |= (128 | x & 63) << d[L++ & 3]) : (x = 65536 + ((x & 1023) << 10 | b.charCodeAt(++K) & 1023), X[L >>> 2] |= (240 | x >>> 18) << d[L++ & 3], X[L >>> 2] |= (128 | x >>> 12 & 63) << d[L++ & 3], X[L >>> 2] |= (128 | x >>> 6 & 63) << d[L++ & 3], X[L >>> 2] |= (128 | x & 63) << d[L++ & 3]);
          else if (c)
            for (L = this.start; K < R && L < 64; ++K)
              ae[L++] = b[K];
          else
            for (L = this.start; K < R && L < 64; ++K)
              X[L >>> 2] |= b[K] << d[L++ & 3];
          this.lastByteIndex = L, this.bytes += L - this.start, L >= 64 ? (this.start = L - 64, this.hash(), this.hashed = !0) : this.start = L;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, B.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var b = this.blocks, E = this.lastByteIndex;
          b[E >>> 2] |= u[E & 3], E >= 56 && (this.hashed || this.hash(), b[0] = b[16], b[16] = b[1] = b[2] = b[3] = b[4] = b[5] = b[6] = b[7] = b[8] = b[9] = b[10] = b[11] = b[12] = b[13] = b[14] = b[15] = 0), b[14] = this.bytes << 3, b[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, B.prototype.hash = function() {
        var b, E, C, x, K, L, R = this.blocks;
        this.first ? (b = R[0] - 680876937, b = (b << 7 | b >>> 25) - 271733879 << 0, x = (-1732584194 ^ b & 2004318071) + R[1] - 117830708, x = (x << 12 | x >>> 20) + b << 0, C = (-271733879 ^ x & (b ^ -271733879)) + R[2] - 1126478375, C = (C << 17 | C >>> 15) + x << 0, E = (b ^ C & (x ^ b)) + R[3] - 1316259209, E = (E << 22 | E >>> 10) + C << 0) : (b = this.h0, E = this.h1, C = this.h2, x = this.h3, b += (x ^ E & (C ^ x)) + R[0] - 680876936, b = (b << 7 | b >>> 25) + E << 0, x += (C ^ b & (E ^ C)) + R[1] - 389564586, x = (x << 12 | x >>> 20) + b << 0, C += (E ^ x & (b ^ E)) + R[2] + 606105819, C = (C << 17 | C >>> 15) + x << 0, E += (b ^ C & (x ^ b)) + R[3] - 1044525330, E = (E << 22 | E >>> 10) + C << 0), b += (x ^ E & (C ^ x)) + R[4] - 176418897, b = (b << 7 | b >>> 25) + E << 0, x += (C ^ b & (E ^ C)) + R[5] + 1200080426, x = (x << 12 | x >>> 20) + b << 0, C += (E ^ x & (b ^ E)) + R[6] - 1473231341, C = (C << 17 | C >>> 15) + x << 0, E += (b ^ C & (x ^ b)) + R[7] - 45705983, E = (E << 22 | E >>> 10) + C << 0, b += (x ^ E & (C ^ x)) + R[8] + 1770035416, b = (b << 7 | b >>> 25) + E << 0, x += (C ^ b & (E ^ C)) + R[9] - 1958414417, x = (x << 12 | x >>> 20) + b << 0, C += (E ^ x & (b ^ E)) + R[10] - 42063, C = (C << 17 | C >>> 15) + x << 0, E += (b ^ C & (x ^ b)) + R[11] - 1990404162, E = (E << 22 | E >>> 10) + C << 0, b += (x ^ E & (C ^ x)) + R[12] + 1804603682, b = (b << 7 | b >>> 25) + E << 0, x += (C ^ b & (E ^ C)) + R[13] - 40341101, x = (x << 12 | x >>> 20) + b << 0, C += (E ^ x & (b ^ E)) + R[14] - 1502002290, C = (C << 17 | C >>> 15) + x << 0, E += (b ^ C & (x ^ b)) + R[15] + 1236535329, E = (E << 22 | E >>> 10) + C << 0, b += (C ^ x & (E ^ C)) + R[1] - 165796510, b = (b << 5 | b >>> 27) + E << 0, x += (E ^ C & (b ^ E)) + R[6] - 1069501632, x = (x << 9 | x >>> 23) + b << 0, C += (b ^ E & (x ^ b)) + R[11] + 643717713, C = (C << 14 | C >>> 18) + x << 0, E += (x ^ b & (C ^ x)) + R[0] - 373897302, E = (E << 20 | E >>> 12) + C << 0, b += (C ^ x & (E ^ C)) + R[5] - 701558691, b = (b << 5 | b >>> 27) + E << 0, x += (E ^ C & (b ^ E)) + R[10] + 38016083, x = (x << 9 | x >>> 23) + b << 0, C += (b ^ E & (x ^ b)) + R[15] - 660478335, C = (C << 14 | C >>> 18) + x << 0, E += (x ^ b & (C ^ x)) + R[4] - 405537848, E = (E << 20 | E >>> 12) + C << 0, b += (C ^ x & (E ^ C)) + R[9] + 568446438, b = (b << 5 | b >>> 27) + E << 0, x += (E ^ C & (b ^ E)) + R[14] - 1019803690, x = (x << 9 | x >>> 23) + b << 0, C += (b ^ E & (x ^ b)) + R[3] - 187363961, C = (C << 14 | C >>> 18) + x << 0, E += (x ^ b & (C ^ x)) + R[8] + 1163531501, E = (E << 20 | E >>> 12) + C << 0, b += (C ^ x & (E ^ C)) + R[13] - 1444681467, b = (b << 5 | b >>> 27) + E << 0, x += (E ^ C & (b ^ E)) + R[2] - 51403784, x = (x << 9 | x >>> 23) + b << 0, C += (b ^ E & (x ^ b)) + R[7] + 1735328473, C = (C << 14 | C >>> 18) + x << 0, E += (x ^ b & (C ^ x)) + R[12] - 1926607734, E = (E << 20 | E >>> 12) + C << 0, K = E ^ C, b += (K ^ x) + R[5] - 378558, b = (b << 4 | b >>> 28) + E << 0, x += (K ^ b) + R[8] - 2022574463, x = (x << 11 | x >>> 21) + b << 0, L = x ^ b, C += (L ^ E) + R[11] + 1839030562, C = (C << 16 | C >>> 16) + x << 0, E += (L ^ C) + R[14] - 35309556, E = (E << 23 | E >>> 9) + C << 0, K = E ^ C, b += (K ^ x) + R[1] - 1530992060, b = (b << 4 | b >>> 28) + E << 0, x += (K ^ b) + R[4] + 1272893353, x = (x << 11 | x >>> 21) + b << 0, L = x ^ b, C += (L ^ E) + R[7] - 155497632, C = (C << 16 | C >>> 16) + x << 0, E += (L ^ C) + R[10] - 1094730640, E = (E << 23 | E >>> 9) + C << 0, K = E ^ C, b += (K ^ x) + R[13] + 681279174, b = (b << 4 | b >>> 28) + E << 0, x += (K ^ b) + R[0] - 358537222, x = (x << 11 | x >>> 21) + b << 0, L = x ^ b, C += (L ^ E) + R[3] - 722521979, C = (C << 16 | C >>> 16) + x << 0, E += (L ^ C) + R[6] + 76029189, E = (E << 23 | E >>> 9) + C << 0, K = E ^ C, b += (K ^ x) + R[9] - 640364487, b = (b << 4 | b >>> 28) + E << 0, x += (K ^ b) + R[12] - 421815835, x = (x << 11 | x >>> 21) + b << 0, L = x ^ b, C += (L ^ E) + R[15] + 530742520, C = (C << 16 | C >>> 16) + x << 0, E += (L ^ C) + R[2] - 995338651, E = (E << 23 | E >>> 9) + C << 0, b += (C ^ (E | ~x)) + R[0] - 198630844, b = (b << 6 | b >>> 26) + E << 0, x += (E ^ (b | ~C)) + R[7] + 1126891415, x = (x << 10 | x >>> 22) + b << 0, C += (b ^ (x | ~E)) + R[14] - 1416354905, C = (C << 15 | C >>> 17) + x << 0, E += (x ^ (C | ~b)) + R[5] - 57434055, E = (E << 21 | E >>> 11) + C << 0, b += (C ^ (E | ~x)) + R[12] + 1700485571, b = (b << 6 | b >>> 26) + E << 0, x += (E ^ (b | ~C)) + R[3] - 1894986606, x = (x << 10 | x >>> 22) + b << 0, C += (b ^ (x | ~E)) + R[10] - 1051523, C = (C << 15 | C >>> 17) + x << 0, E += (x ^ (C | ~b)) + R[1] - 2054922799, E = (E << 21 | E >>> 11) + C << 0, b += (C ^ (E | ~x)) + R[8] + 1873313359, b = (b << 6 | b >>> 26) + E << 0, x += (E ^ (b | ~C)) + R[15] - 30611744, x = (x << 10 | x >>> 22) + b << 0, C += (b ^ (x | ~E)) + R[6] - 1560198380, C = (C << 15 | C >>> 17) + x << 0, E += (x ^ (C | ~b)) + R[13] + 1309151649, E = (E << 21 | E >>> 11) + C << 0, b += (C ^ (E | ~x)) + R[4] - 145523070, b = (b << 6 | b >>> 26) + E << 0, x += (E ^ (b | ~C)) + R[11] - 1120210379, x = (x << 10 | x >>> 22) + b << 0, C += (b ^ (x | ~E)) + R[2] + 718787259, C = (C << 15 | C >>> 17) + x << 0, E += (x ^ (C | ~b)) + R[9] - 343485551, E = (E << 21 | E >>> 11) + C << 0, this.first ? (this.h0 = b + 1732584193 << 0, this.h1 = E - 271733879 << 0, this.h2 = C - 1732584194 << 0, this.h3 = x + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + b << 0, this.h1 = this.h1 + E << 0, this.h2 = this.h2 + C << 0, this.h3 = this.h3 + x << 0);
      }, B.prototype.hex = function() {
        this.finalize();
        var b = this.h0, E = this.h1, C = this.h2, x = this.h3;
        return l[b >>> 4 & 15] + l[b & 15] + l[b >>> 12 & 15] + l[b >>> 8 & 15] + l[b >>> 20 & 15] + l[b >>> 16 & 15] + l[b >>> 28 & 15] + l[b >>> 24 & 15] + l[E >>> 4 & 15] + l[E & 15] + l[E >>> 12 & 15] + l[E >>> 8 & 15] + l[E >>> 20 & 15] + l[E >>> 16 & 15] + l[E >>> 28 & 15] + l[E >>> 24 & 15] + l[C >>> 4 & 15] + l[C & 15] + l[C >>> 12 & 15] + l[C >>> 8 & 15] + l[C >>> 20 & 15] + l[C >>> 16 & 15] + l[C >>> 28 & 15] + l[C >>> 24 & 15] + l[x >>> 4 & 15] + l[x & 15] + l[x >>> 12 & 15] + l[x >>> 8 & 15] + l[x >>> 20 & 15] + l[x >>> 16 & 15] + l[x >>> 28 & 15] + l[x >>> 24 & 15];
      }, B.prototype.toString = B.prototype.hex, B.prototype.digest = function() {
        this.finalize();
        var b = this.h0, E = this.h1, C = this.h2, x = this.h3;
        return [
          b & 255,
          b >>> 8 & 255,
          b >>> 16 & 255,
          b >>> 24 & 255,
          E & 255,
          E >>> 8 & 255,
          E >>> 16 & 255,
          E >>> 24 & 255,
          C & 255,
          C >>> 8 & 255,
          C >>> 16 & 255,
          C >>> 24 & 255,
          x & 255,
          x >>> 8 & 255,
          x >>> 16 & 255,
          x >>> 24 & 255
        ];
      }, B.prototype.array = B.prototype.digest, B.prototype.arrayBuffer = function() {
        this.finalize();
        var b = new ArrayBuffer(16), E = new Uint32Array(b);
        return E[0] = this.h0, E[1] = this.h1, E[2] = this.h2, E[3] = this.h3, b;
      }, B.prototype.buffer = B.prototype.arrayBuffer, B.prototype.base64 = function() {
        for (var b, E, C, x = "", K = this.array(), L = 0; L < 15; )
          b = K[L++], E = K[L++], C = K[L++], x += g[b >>> 2] + g[(b << 4 | E >>> 4) & 63] + g[(E << 2 | C >>> 6) & 63] + g[C & 63];
        return b = K[L], x += g[b >>> 2] + g[b << 4 & 63] + "==", x;
      };
      function $(b, E) {
        var C, x = O(b);
        if (b = x[0], x[1]) {
          var K = [], L = b.length, R = 0, X;
          for (C = 0; C < L; ++C)
            X = b.charCodeAt(C), X < 128 ? K[R++] = X : X < 2048 ? (K[R++] = 192 | X >>> 6, K[R++] = 128 | X & 63) : X < 55296 || X >= 57344 ? (K[R++] = 224 | X >>> 12, K[R++] = 128 | X >>> 6 & 63, K[R++] = 128 | X & 63) : (X = 65536 + ((X & 1023) << 10 | b.charCodeAt(++C) & 1023), K[R++] = 240 | X >>> 18, K[R++] = 128 | X >>> 12 & 63, K[R++] = 128 | X >>> 6 & 63, K[R++] = 128 | X & 63);
          b = K;
        }
        b.length > 64 && (b = new B(!0).update(b).array());
        var ae = [], Fe = [];
        for (C = 0; C < 64; ++C) {
          var Ge = b[C] || 0;
          ae[C] = 92 ^ Ge, Fe[C] = 54 ^ Ge;
        }
        B.call(this, E), this.update(Fe), this.oKeyPad = ae, this.inner = !0, this.sharedMemory = E;
      }
      $.prototype = new B(), $.prototype.finalize = function() {
        if (B.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var b = this.array();
          B.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(b), B.prototype.finalize.call(this);
        }
      };
      var V = F();
      V.md5 = V, V.md5.hmac = W(), i ? e.exports = V : o.md5 = V;
    })();
  }(rs)), rs.exports;
}
var xO = SO();
const CO = ["src", "alt"], Y4 = /* @__PURE__ */ z({
  __name: "GravatarImg",
  props: {
    email: {},
    size: { default: 100 }
  },
  setup(e) {
    const t = e, n = T(() => xO.md5(t.email.trim().toLowerCase())), r = T(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), o = T(() => `Gravatar for ${t.email}`);
    return (a, s) => (S(), k("img", {
      src: r.value,
      alt: o.value
    }, null, 8, CO));
  }
}), OO = ["id"], AO = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, EO = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, PO = { class: "space-y-1 px-4 py-1" }, X4 = /* @__PURE__ */ z({
  __name: "NavCollapse",
  props: {
    open: { type: Boolean, default: !1 },
    name: {}
  },
  setup(e) {
    const t = e, n = N(t.open);
    return ne(
      () => t.open,
      (r) => n.value = r
    ), (r, o) => (S(), k("li", null, [
      J(m(Ei), {
        defaultOpen: r.open,
        open: n.value,
        "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
      }, {
        default: _(() => [
          J(m(ki), { asChild: "" }, {
            default: _(() => [
              D("button", {
                id: r.name,
                class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                r.$slots.icon ? (S(), k("div", AO, [
                  j(r.$slots, "icon")
                ])) : Y("", !0),
                D("span", EO, Z(r.name), 1),
                J(m(Ee), {
                  icon: m(Zs),
                  class: Q(["transition-all", { "rotate-180": n.value }])
                }, null, 8, ["icon", "class"])
              ], 8, OO)
            ]),
            _: 3
          }),
          J(m(Pi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: _(() => [
              D("ul", PO, [
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
}), kO = { class: "relative" }, $O = { class: "mt-4 flex flex-col items-center justify-center" }, TO = { class: "relative flex w-fit flex-row justify-center gap-3" }, DO = ["onClick"], J4 = {
  __name: "DottedCarousel",
  props: {
    padding: { default: 0 },
    gap: { default: 20 }
  },
  setup(e) {
    const t = N(0), n = N(null), r = N(null), o = e, a = N(0);
    ne(t, (c) => {
      n.value && (a.value = `${c * 20}`);
    });
    const s = (c, l) => {
      t.value = l, r.value.scrollTo({
        behavior: "smooth",
        left: r.value.scrollLeft + r.value.getBoundingClientRect().left + r.value.children[l].getBoundingClientRect().left - o.padding - o.gap
      });
    }, i = () => {
      const c = r.value.children[0].getBoundingClientRect().width;
      t.value = Math.round(r.value.scrollLeft / (c + o.gap));
    };
    return pe(() => {
      i(), r.value.addEventListener("scroll", i);
    }), (c, l) => (S(), k("div", kO, [
      D("div", {
        class: "flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden",
        style: et({ gap: `${e.gap}px` }),
        ref_key: "container",
        ref: r,
        onScroll: l[0] || (l[0] = (...u) => c.onContainerScroll && c.onContainerScroll(...u))
      }, [
        j(c.$slots, "default")
      ], 36),
      D("div", $O, [
        D("div", TO, [
          D("div", {
            class: "absolute h-2 w-2 rounded-full bg-primary transition-all duration-300",
            style: et({ left: `${a.value}px` }),
            ref_key: "activeDot",
            ref: n
          }, null, 4),
          (S(!0), k(re, null, ge(Array(c.$slots.default().length).fill(""), (u, d) => (S(), k("div", {
            key: d,
            class: "h-2 w-2 cursor-pointer rounded-full bg-accent",
            onClick: (y) => s(y, d)
          }, null, 8, DO))), 128))
        ])
      ])
    ]));
  }
}, FO = { class: "absolute inset-0 isolate z-0 size-full" }, Q4 = /* @__PURE__ */ z({
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
    const t = e, n = T(() => {
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
    return (r, o) => (S(), k("div", {
      class: Q(["group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md", {
        [n.value.base]: !0,
        "ring-2": r.selected,
        [r.customStatClass]: r.customStatClass
      }])
    }, [
      D("div", {
        class: Q(["relative overflow-clip px-6 py-4", [r.customStatValueClass]])
      }, [
        D("div", FO, [
          J(m(Ee), {
            icon: r.icon,
            class: Q([[n.value.hoverText], "absolute top-1/2 right-2 h-4/5 -translate-y-1/2 text-gray-400 opacity-50 transition-colors"]),
            size: "3x"
          }, null, 8, ["icon", "class"])
        ]),
        D("div", {
          class: Q([[n.value.hoverText], "text-2xl font-bold text-gray-900 transition-colors"])
        }, Z(r.value), 3)
      ], 2),
      D("div", {
        class: Q(["border-t border-gray-100 bg-gray-50/50 px-6 py-3", [r.customStatLabelClass]])
      }, [
        D("div", {
          class: Q([[n.value.hoverText], "text-sm font-medium text-gray-600 transition-colors"])
        }, Z(r.label), 3)
      ], 2),
      D("div", {
        class: Q([[n.value.gradient], "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"])
      }, null, 2)
    ], 2));
  }
}), RO = /* @__PURE__ */ z({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (S(), U(m(xn), {
      theme: m(Se).PRIMARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customButtonClass,
      size: t.size
    }, {
      default: _(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), _O = { class: "relative mt-4 mb-6 rounded-lg border border-gray-200 bg-gray-50" }, IO = { class: "flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-100 px-4 py-2" }, BO = { class: "overflow-x-auto p-4 text-sm" }, LO = { class: "language-vue text-gray-800 font-mono" }, Z4 = /* @__PURE__ */ z({
  __name: "CodePreview",
  props: {
    code: {}
  },
  setup(e) {
    const t = e, n = N(""), r = N("Copy");
    pe(() => {
      Array.isArray(t.code) ? n.value = t.code.join(`
`) : console.error("CodePreview: `code` prop is not an array of strings.", t.code);
    });
    const o = async () => {
      try {
        await navigator.clipboard.writeText(n.value), r.value = "✓ Copied!", setTimeout(() => {
          r.value = "Copy";
        }, 2e3);
      } catch (a) {
        console.error("Failed to copy code:", a), r.value = "✗ Failed", setTimeout(() => {
          r.value = "Copy";
        }, 2e3);
      }
    };
    return (a, s) => (S(), k("div", _O, [
      D("div", IO, [
        s[0] || (s[0] = D("span", { class: "text-sm font-medium text-gray-700" }, "Code Example", -1)),
        D("button", {
          onClick: o,
          class: Q(["rounded px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800", { "text-green-600": r.value.includes("✓"), "text-red-600": r.value.includes("✗") }]),
          title: "Copy to clipboard"
        }, Z(r.value), 3)
      ]),
      D("pre", BO, [
        D("code", LO, Z(n.value), 1)
      ])
    ]));
  }
}), MO = { class: "mt-12 mb-8" }, NO = ["id"], eA = /* @__PURE__ */ z({
  __name: "H2",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (S(), k("div", MO, [
      D("h2", {
        id: t.title.toLowerCase().replace(/\s+/g, "-"),
        class: "border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900"
      }, Z(t.title), 9, NO)
    ]));
  }
}), tA = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  A4 as Alert,
  xn as Button,
  eg as Checkbox,
  Z4 as CodePreview,
  gC as CollapsableSection,
  W4 as Collapse,
  gC as CollapsibleSection,
  N4 as DangerButton,
  Q4 as DataTile,
  K4 as DescriptionList,
  G4 as DescriptionListItem,
  J4 as DottedCarousel,
  E4 as Dropdown,
  P4 as DropdownLink,
  KO as DropdownSearchbar,
  k4 as DropdownSeparator,
  M4 as EnhancedTable,
  v4 as FileDropZoneInput,
  Y4 as GravatarImg,
  eA as H2,
  b4 as Images,
  q4 as InfoButton,
  hg as Input,
  nn as InputError,
  zn as InputLabel,
  Qs as InputWrapper,
  $4 as LinkButton,
  T4 as LinkDropdownButton,
  D4 as LinkDropdownButtonItem,
  F4 as Logs,
  NC as LogsContent,
  R4 as Modal,
  X4 as NavCollapse,
  I4 as NavLink,
  _4 as NewModal,
  qp as Pagination,
  RO as PrimaryButton,
  qO as PropsTable,
  w4 as RadioButton,
  z4 as ResponsiveNavLink,
  WO as RichSelect,
  G1 as SearchSelect,
  XC as SecondaryButton,
  U4 as Section,
  HO as Select,
  GO as Select2ajax,
  S4 as SelectMultiple,
  Vi as Spinner,
  H4 as Stats,
  mo as SubmitButton,
  V4 as SuccessButton,
  Rb as Switch,
  _x as Table,
  O4 as TableItemCard,
  jx as Tbody,
  ho as Td,
  B4 as TdCollapseHandler,
  pi as TextInput,
  Ag as Textarea,
  zx as Th,
  Ix as Thead,
  sO as Tooltip,
  L4 as Tr,
  C4 as TrCollapse,
  x4 as TrCollapseHandler,
  Sc as TrPlaceholder,
  VO as UnderConstruction,
  j4 as WarningButton,
  tA as default,
  Tp as getInertiaPage,
  Mo as getInertiaRouter,
  h4 as hasPermission,
  v3 as moneyFormat,
  m4 as numberFormat,
  g4 as setInertiaPage,
  y4 as setInertiaRouter,
  pg as useFormIntegration,
  jp as useInertiaTable,
  mg as useInputUtils,
  dg as useInputValue,
  fg as usePasswordToggle,
  Np as useStickyTableHeader,
  $x as useTable,
  kx as useTableSelection,
  Mp as useTableSort
};
