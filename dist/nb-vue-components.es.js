import * as Zi from "vue";
import { defineComponent as z, createElementBlock as k, openBlock as x, createElementVNode as D, createCommentVNode as Y, Fragment as re, renderList as be, normalizeClass as Q, toDisplayString as Z, computed as T, createBlock as H, renderSlot as q, unref as v, watch as ne, h as qe, createVNode as J, mergeModels as pt, useModel as Nn, ref as N, onMounted as pe, withDirectives as He, vModelCheckbox as Cc, vModelSelect as Oc, withCtx as I, createTextVNode as ce, isRef as Wt, createSlots as Tr, vShow as un, vModelText as Ac, onUnmounted as Mt, Transition as cn, nextTick as De, resolveDirective as Gp, normalizeProps as ve, guardReactiveProps as Ae, resolveDynamicComponent as Vr, mergeProps as ie, toHandlers as Ec, withModifiers as St, withKeys as on, normalizeStyle as et, shallowRef as mr, markRaw as os, reactive as hr, toRefs as Nt, getCurrentScope as Pc, onScopeDispose as kc, shallowReadonly as Pn, Comment as $c, cloneVNode as Yp, readonly as Tc, effectScope as Dc, toValue as Ft, onBeforeUnmount as Xp, watchEffect as at, customRef as Jp, getCurrentInstance as vn, inject as Xs, provide as yo, toHandlerKey as Qp, camelize as Fc, Teleport as Rc, toRef as Zp, watchPostEffect as _c, mergeDefaults as Ic, useSlots as em, resolveComponent as tm, useAttrs as nm } from "vue";
const rm = { class: "overflow-x-auto" }, om = { class: "min-w-full divide-y divide-gray-200" }, am = { class: "divide-y divide-gray-200 bg-white" }, sm = { key: 0 }, im = { class: "px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900" }, lm = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, um = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, cm = { class: "px-6 py-4 text-sm text-gray-500" }, IO = /* @__PURE__ */ z({
  __name: "PropsTable",
  props: {
    rows: { default: () => [] }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), k("div", rm, [
      D("table", om, [
        r[1] || (r[1] = D("thead", { class: "bg-gray-50" }, [
          D("tr", null, [
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Prop"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Type"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Default"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Description")
          ])
        ], -1)),
        D("tbody", am, [
          t.rows.length === 0 ? (x(), k("tr", sm, r[0] || (r[0] = [
            D("td", {
              colspan: "4",
              class: "px-6 py-4 text-center text-sm text-gray-500"
            }, "No props defined", -1)
          ]))) : Y("", !0),
          (x(!0), k(re, null, be(t.rows, (o, a) => (x(), k("tr", {
            key: a,
            class: Q({ "bg-yellow-50": o.highlight })
          }, [
            D("td", im, Z(o.prop), 1),
            D("td", lm, Z(o.type), 1),
            D("td", um, Z(o.default), 1),
            D("td", cm, Z(o.description), 1)
          ], 2))), 128))
        ])
      ])
    ]));
  }
}), Js = /* @__PURE__ */ z({
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
    return (s, i) => (x(), k("div", {
      class: Q(s.noLabel ? "mb-2" : "mb-4")
    }, [
      !s.noLabel && (r.value || s.field) ? (x(), H(v(qn), {
        key: 0,
        customClass: s.labelCustomClass,
        for: a.value,
        value: r.value,
        sublabel: s.sublabel,
        required: s.required,
        tooltip: s.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : Y("", !0),
      q(s.$slots, "default"),
      o.value ? (x(), H(v(tn), {
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
}, dm = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, el = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, fm = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, Qs = fm, pm = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, mm = pm, tl = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, hm = {
  prefix: "fas",
  iconName: "person-digging",
  icon: [576, 512, ["digging"], "f85e", "M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"]
}, ym = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, gm = ym, vm = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, bm = vm, Zs = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, wm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, Sm = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Zr = Sm, xm = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Cm = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
}, Om = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Am = Om, Em = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, Pm = Em;
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function km(e, t, n) {
  return (t = Tm(t)) in e ? Object.defineProperty(e, t, {
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
      km(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $m(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tm(e) {
  var t = $m(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const rl = () => {
};
let ei = {}, Bc = {}, Lc = null, Mc = {
  mark: rl,
  measure: rl
};
try {
  typeof window < "u" && (ei = window), typeof document < "u" && (Bc = document), typeof MutationObserver < "u" && (Lc = MutationObserver), typeof performance < "u" && (Mc = performance);
} catch {
}
const {
  userAgent: ol = ""
} = ei.navigator || {}, Yt = ei, ge = Bc, al = Lc, Dr = Mc;
Yt.document;
const jt = !!ge.documentElement && !!ge.head && typeof ge.addEventListener == "function" && typeof ge.createElement == "function", Nc = ~ol.indexOf("MSIE") || ~ol.indexOf("Trident/");
var Dm = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Fm = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, jc = {
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
}, Rm = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, qc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Le = "classic", go = "duotone", _m = "sharp", Im = "sharp-duotone", Vc = [Le, go, _m, Im], Bm = {
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
}, Lm = {
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
}, Mm = /* @__PURE__ */ new Map([["classic", {
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
}]]), Nm = {
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
}, jm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], sl = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, qm = ["kit"], Vm = {
  kit: {
    "fa-kit": "fak"
  }
}, zm = ["fak", "fakd"], Um = {
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
}, Hm = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Wm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Km = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Gm = {
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
}, Ym = {
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
}, Xm = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], is = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Hm, ...Xm], Jm = ["solid", "regular", "light", "thin", "duotone", "brands"], zc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Qm = zc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Zm = [...Object.keys(Ym), ...Jm, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Fr.GROUP, Fr.SWAP_OPACITY, Fr.PRIMARY, Fr.SECONDARY].concat(zc.map((e) => "".concat(e, "x"))).concat(Qm.map((e) => "w-".concat(e))), eh = {
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
const _t = "___FONT_AWESOME___", ls = 16, Uc = "fa", Hc = "svg-inline--fa", fn = "data-fa-i2svg", us = "data-fa-pseudo-element", th = "data-fa-pseudo-element-pending", ti = "data-prefix", ni = "data-icon", ll = "fontawesome-i2svg", nh = "async", rh = ["HTML", "HEAD", "STYLE", "SCRIPT"], Wc = (() => {
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
const Kc = G({}, jc);
Kc[Le] = G(G(G(G({}, {
  "fa-duotone": "duotone"
}), jc[Le]), sl.kit), sl["kit-duotone"]);
const oh = yr(Kc), cs = G({}, Nm);
cs[Le] = G(G(G(G({}, {
  duotone: "fad"
}), cs[Le]), il.kit), il["kit-duotone"]);
const ul = yr(cs), ds = G({}, ss);
ds[Le] = G(G({}, ds[Le]), Um.kit);
const ri = yr(ds), fs = G({}, Gm);
fs[Le] = G(G({}, fs[Le]), Vm.kit);
yr(fs);
const ah = Dm, Gc = "fa-layers-text", sh = Fm, ih = G({}, Bm);
yr(ih);
const lh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Yo = Rm, uh = [...qm, ...Zm], or = Yt.FontAwesomeConfig || {};
function ch(e) {
  var t = ge.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function dh(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ge && typeof ge.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = dh(ch(n));
  o != null && (or[r] = o);
});
const Yc = {
  styleDefault: "solid",
  familyDefault: Le,
  cssPrefix: Uc,
  replacementClass: Hc,
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
const Bn = G(G({}, Yc), or);
Bn.autoReplaceSvg || (Bn.observeMutations = !1);
const ee = {};
Object.keys(Yc).forEach((e) => {
  Object.defineProperty(ee, e, {
    enumerable: !0,
    set: function(t) {
      Bn[e] = t, ar.forEach((n) => n(ee));
    },
    get: function() {
      return Bn[e];
    }
  });
});
Object.defineProperty(ee, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    Bn.cssPrefix = e, ar.forEach((t) => t(ee));
  },
  get: function() {
    return Bn.cssPrefix;
  }
});
Yt.FontAwesomeConfig = ee;
const ar = [];
function fh(e) {
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
function ph(e) {
  if (!e || !jt)
    return;
  const t = ge.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = ge.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const a = n[o], s = (a.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(s) > -1 && (r = a);
  }
  return ge.head.insertBefore(t, r), e;
}
const mh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ur() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += mh[Math.random() * 62 | 0];
  return t;
}
function jn(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function oi(e) {
  return e.classList ? jn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Xc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hh(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Xc(e[n]), '" '), "").trim();
}
function vo(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function ai(e) {
  return e.size !== xt.size || e.x !== xt.x || e.y !== xt.y || e.rotate !== xt.rotate || e.flipX || e.flipY;
}
function yh(e) {
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
function gh(e) {
  let {
    transform: t,
    width: n = ls,
    height: r = ls,
    startCentered: o = !1
  } = e, a = "";
  return o && Nc ? a += "translate(".concat(t.x / Ht - n / 2, "em, ").concat(t.y / Ht - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / Ht, "em), calc(-50% + ").concat(t.y / Ht, "em)) ") : a += "translate(".concat(t.x / Ht, "em, ").concat(t.y / Ht, "em) "), a += "scale(".concat(t.size / Ht * (t.flipX ? -1 : 1), ", ").concat(t.size / Ht * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var vh = `:root, :host {
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
function Jc() {
  const e = Uc, t = Hc, n = ee.cssPrefix, r = ee.replacementClass;
  let o = vh;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(i, ".".concat(r));
  }
  return o;
}
let cl = !1;
function Xo() {
  ee.autoAddCss && !cl && (ph(Jc()), cl = !0);
}
var bh = {
  mixout() {
    return {
      dom: {
        css: Jc,
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
const It = Yt || {};
It[_t] || (It[_t] = {});
It[_t].styles || (It[_t].styles = {});
It[_t].hooks || (It[_t].hooks = {});
It[_t].shims || (It[_t].shims = []);
var Ct = It[_t];
const Qc = [], Zc = function() {
  ge.removeEventListener("DOMContentLoaded", Zc), eo = 1, Qc.map((e) => e());
};
let eo = !1;
jt && (eo = (ge.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ge.readyState), eo || ge.addEventListener("DOMContentLoaded", Zc));
function wh(e) {
  jt && (eo ? setTimeout(e, 0) : Qc.push(e));
}
function gr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Xc(e) : "<".concat(t, " ").concat(hh(n), ">").concat(r.map(gr).join(""), "</").concat(t, ">");
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
function Sh(e) {
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
  const t = Sh(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function xh(e, t) {
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
  shims: Ch
} = Ct, ed = Object.keys(ri), Oh = ed.reduce((e, t) => (e[t] = Object.keys(ri[t]), e), {});
let si = null, td = {}, nd = {}, rd = {}, od = {}, ad = {};
function Ah(e) {
  return ~uh.indexOf(e);
}
function Eh(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !Ah(o) ? o : null;
}
const sd = () => {
  const e = (r) => Jo(cr, (o, a, s) => (o[s] = Jo(a, r, {}), o), {});
  td = e((r, o, a) => (o[3] && (r[o[3]] = a), o[2] && o[2].filter((i) => typeof i == "number").forEach((i) => {
    r[i.toString(16)] = a;
  }), r)), nd = e((r, o, a) => (r[a] = a, o[2] && o[2].filter((i) => typeof i == "string").forEach((i) => {
    r[i] = a;
  }), r)), ad = e((r, o, a) => {
    const s = o[2];
    return r[a] = a, s.forEach((i) => {
      r[i] = a;
    }), r;
  });
  const t = "far" in cr || ee.autoFetchSvg, n = Jo(Ch, (r, o) => {
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
  rd = n.names, od = n.unicodes, si = bo(ee.styleDefault, {
    family: ee.familyDefault
  });
};
fh((e) => {
  si = bo(e.styleDefault, {
    family: ee.familyDefault
  });
});
sd();
function ii(e, t) {
  return (td[e] || {})[t];
}
function Ph(e, t) {
  return (nd[e] || {})[t];
}
function an(e, t) {
  return (ad[e] || {})[t];
}
function id(e) {
  return rd[e] || {
    prefix: null,
    iconName: null
  };
}
function kh(e) {
  const t = od[e], n = ii("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Xt() {
  return si;
}
const ld = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function $h(e) {
  let t = Le;
  const n = ed.reduce((r, o) => (r[o] = "".concat(ee.cssPrefix, "-").concat(o), r), {});
  return Vc.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => Oh[r].includes(o))) && (t = r);
  }), t;
}
function bo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Le
  } = t, r = oh[n][e];
  if (n === go && !e)
    return "fad";
  const o = ul[n][e] || ul[n][r], a = e in Ct.styles ? e : null;
  return o || a || null;
}
function Th(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = Eh(ee.cssPrefix, r);
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
  const o = is.concat(Wm), a = pl(e.filter((d) => o.includes(d))), s = pl(e.filter((d) => !is.includes(d))), i = a.filter((d) => (r = d, !qc.includes(d))), [c = null] = i, l = $h(a), u = G(G({}, Th(s)), {}, {
    prefix: bo(c, {
      family: l
    })
  });
  return G(G(G({}, u), _h({
    values: e,
    family: l,
    styles: cr,
    config: ee,
    canonical: u,
    givenPrefix: r
  })), Dh(n, r, u));
}
function Dh(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const a = t === "fa" ? id(o) : {}, s = an(r, o);
  return o = a.iconName || s || o, r = a.prefix || r, r === "far" && !cr.far && cr.fas && !ee.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const Fh = Vc.filter((e) => e !== Le || e !== go), Rh = Object.keys(ss).filter((e) => e !== Le).map((e) => Object.keys(ss[e])).flat();
function _h(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: a = {},
    config: s = {}
  } = e, i = n === go, c = t.includes("fa-duotone") || t.includes("fad"), l = s.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!i && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Fh.includes(n) && (Object.keys(a).find((h) => Rh.includes(h)) || s.autoFetchSvg)) {
    const h = Mm.get(n).defaultShortPrefixId;
    r.prefix = h, r.iconName = an(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Xt() || "fas"), r;
}
class Ih {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((a) => {
      this.definitions[a] = G(G({}, this.definitions[a] || {}), o[a]), ms(a, o[a]);
      const s = ri[Le][a];
      s && ms(s, o[a]), sd();
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
let ml = [], Dn = {};
const Rn = {}, Bh = Object.keys(Rn);
function Lh(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ml = e, Dn = {}, Object.keys(Rn).forEach((r) => {
    Bh.indexOf(r) === -1 && delete Rn[r];
  }), ml.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((a) => {
      typeof o[a] == "function" && (n[a] = o[a]), typeof o[a] == "object" && Object.keys(o[a]).forEach((s) => {
        n[a] || (n[a] = {}), n[a][s] = o[a][s];
      });
    }), r.hooks) {
      const a = r.hooks();
      Object.keys(a).forEach((s) => {
        Dn[s] || (Dn[s] = []), Dn[s].push(a[s]);
      });
    }
    r.provides && r.provides(Rn);
  }), n;
}
function hs(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (Dn[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function pn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Dn[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Jt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Rn[e] ? Rn[e].apply(null, t) : void 0;
}
function ys(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Xt();
  if (t)
    return t = an(n, t) || t, dl(ud.definitions, n, t) || dl(Ct.styles, n, t);
}
const ud = new Ih(), Mh = () => {
  ee.autoReplaceSvg = !1, ee.observeMutations = !1, pn("noAuto");
}, Nh = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return jt ? (pn("beforeI2svg", e), Jt("pseudoElements2svg", e), Jt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, wh(() => {
      qh({
        autoReplaceSvgRoot: t
      }), pn("watch", e);
    });
  }
}, jh = {
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
    if (typeof e == "string" && (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match(ah))) {
      const t = wo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Xt(),
        iconName: an(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Xt();
      return {
        prefix: t,
        iconName: an(t, e) || e
      };
    }
  }
}, nt = {
  noAuto: Mh,
  config: ee,
  dom: Nh,
  parse: jh,
  library: ud,
  findIconDefinition: ys,
  toHtml: gr
}, qh = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ge
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
      const n = ge.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function Vh(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: a,
    transform: s
  } = e;
  if (ai(s) && n.found && !r.found) {
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
function zh(e) {
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
function li(e) {
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
    width: h,
    height: y
  } = n.found ? n : t, p = zm.includes(r), m = [ee.replacementClass, o ? "".concat(ee.cssPrefix, "-").concat(o) : ""].filter((F) => u.classes.indexOf(F) === -1).filter((F) => F !== "" || !!F).concat(u.classes).join(" ");
  let f = {
    children: [],
    attributes: G(G({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: m,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(h, " ").concat(y)
    })
  };
  const g = p && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(h / y * 16 * 0.0625, "em")
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
    styles: G(G({}, g), u.styles)
  }), {
    children: O,
    attributes: P
  } = n.found && t.found ? Jt("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Jt("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = O, w.attributes = P, s ? zh(w) : Vh(w);
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
  ai(o) && (l.transform = gh({
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
function Uh(e) {
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
const Hh = {
  found: !1,
  width: 512,
  height: 512
};
function Wh(e, t) {
  !Wc && !ee.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function vs(e, t) {
  let n = t;
  return t === "fa" && ee.styleDefault !== null && (t = Xt()), new Promise((r, o) => {
    if (n === "fa") {
      const a = id(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Qo[t] && Qo[t][e]) {
      const a = Qo[t][e];
      return r(gs(a));
    }
    Wh(e, t), r(G(G({}, Hh), {}, {
      icon: ee.showMissingIcons && e ? Jt("missingIconAbstract") || {} : {}
    }));
  });
}
const yl = () => {
}, bs = ee.measurePerformance && Dr && Dr.mark && Dr.measure ? Dr : {
  mark: yl,
  measure: yl
}, er = 'FA "6.7.2"', Kh = (e) => (bs.mark("".concat(er, " ").concat(e, " begins")), () => cd(e)), cd = (e) => {
  bs.mark("".concat(er, " ").concat(e, " ends")), bs.measure("".concat(er, " ").concat(e), "".concat(er, " ").concat(e, " begins"), "".concat(er, " ").concat(e, " ends"));
};
var ui = {
  begin: Kh,
  end: cd
};
const zr = () => {
};
function gl(e) {
  return typeof (e.getAttribute ? e.getAttribute(fn) : null) == "string";
}
function Gh(e) {
  const t = e.getAttribute ? e.getAttribute(ti) : null, n = e.getAttribute ? e.getAttribute(ni) : null;
  return t && n;
}
function Yh(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ee.replacementClass);
}
function Xh() {
  return ee.autoReplaceSvg === !0 ? Ur.replace : Ur[ee.autoReplaceSvg] || Ur.replace;
}
function Jh(e) {
  return ge.createElementNS("http://www.w3.org/2000/svg", e);
}
function Qh(e) {
  return ge.createElement(e);
}
function dd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Jh : Qh
  } = t;
  if (typeof e == "string")
    return ge.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(dd(a, {
      ceFn: n
    }));
  }), r;
}
function Zh(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Ur = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(dd(n), t);
      }), t.getAttribute(fn) === null && ee.keepOriginalSource) {
        let n = ge.createComment(Zh(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~oi(t).indexOf(ee.replacementClass))
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
function fd(e, t) {
  const n = typeof t == "function" ? t : zr;
  if (e.length === 0)
    n();
  else {
    let r = vl;
    ee.mutateApproach === nh && (r = Yt.requestAnimationFrame || vl), r(() => {
      const o = Xh(), a = ui.begin("mutate");
      e.map(o), a(), n();
    });
  }
}
let ci = !1;
function pd() {
  ci = !0;
}
function ws() {
  ci = !1;
}
let to = null;
function bl(e) {
  if (!al || !ee.observeMutations)
    return;
  const {
    treeCallback: t = zr,
    nodeCallback: n = zr,
    pseudoElementsCallback: r = zr,
    observeMutationsRoot: o = ge
  } = e;
  to = new al((a) => {
    if (ci) return;
    const s = Xt();
    jn(a).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !gl(i.addedNodes[0]) && (ee.searchPseudoElements && r(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && ee.searchPseudoElements && r(i.target.parentNode), i.type === "attributes" && gl(i.target) && ~lh.indexOf(i.attributeName))
        if (i.attributeName === "class" && Gh(i.target)) {
          const {
            prefix: c,
            iconName: l
          } = wo(oi(i.target));
          i.target.setAttribute(ti, c || s), l && i.target.setAttribute(ni, l);
        } else Yh(i.target) && n(i.target);
    });
  }), jt && to.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ey() {
  to && to.disconnect();
}
function ty(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const a = o.split(":"), s = a[0], i = a.slice(1);
    return s && i.length > 0 && (r[s] = i.join(":").trim()), r;
  }, {})), n;
}
function ny(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = wo(oi(e));
  return o.prefix || (o.prefix = Xt()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = Ph(o.prefix, e.innerText) || ii(o.prefix, ps(e.innerText))), !o.iconName && ee.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function ry(e) {
  const t = jn(e.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return ee.autoA11y && (n ? t["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(r || ur()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function oy() {
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
  } = ny(e), a = ry(e), s = hs("parseNodeAttributes", {}, e);
  let i = t.styleParser ? ty(e) : [];
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
  styles: ay
} = Ct;
function md(e) {
  const t = ee.autoReplaceSvg === "nest" ? wl(e, {
    styleParser: !1
  }) : wl(e);
  return ~t.extra.classes.indexOf(Gc) ? Jt("generateLayersText", e, t) : Jt("generateSvgReplacementMutation", e, t);
}
function sy() {
  return [...jm, ...is];
}
function Sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jt) return Promise.resolve();
  const n = ge.documentElement.classList, r = (u) => n.add("".concat(ll, "-").concat(u)), o = (u) => n.remove("".concat(ll, "-").concat(u)), a = ee.autoFetchSvg ? sy() : qc.concat(Object.keys(ay));
  a.includes("fa") || a.push("fa");
  const s = [".".concat(Gc, ":not([").concat(fn, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(fn, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let i = [];
  try {
    i = jn(e.querySelectorAll(s));
  } catch {
  }
  if (i.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const c = ui.begin("onTree"), l = i.reduce((u, d) => {
    try {
      const h = md(d);
      h && u.push(h);
    } catch (h) {
      Wc || h.name === "MissingIcon" && console.error(h);
    }
    return u;
  }, []);
  return new Promise((u, d) => {
    Promise.all(l).then((h) => {
      fd(h, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((h) => {
      c(), d(h);
    });
  });
}
function iy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  md(e).then((n) => {
    n && fd([n], t);
  });
}
function ly(e) {
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
const uy = function(e) {
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
    iconName: h,
    icon: y
  } = e;
  return So(G({
    type: "icon"
  }, e), () => (pn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ee.autoA11y && (s ? l["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(i || ur()) : (l["aria-hidden"] = "true", l.focusable = "false")), li({
    icons: {
      main: gs(y),
      mask: o ? gs(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: h,
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
var cy = {
  mixout() {
    return {
      icon: ly(uy)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Sl, e.nodeCallback = iy, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = ge,
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
      return new Promise((h, y) => {
        Promise.all([vs(r, s), l.iconName ? vs(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((p) => {
          let [m, f] = p;
          h([t, li({
            icons: {
              main: m,
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
        }).catch(y);
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
      return ai(a) && (c = Jt("generateAbstractTransformGrouping", {
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
}, dy = {
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
}, fy = {
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
        }), Uh({
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
}, py = {
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
      if (Nc) {
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
const my = new RegExp('"', "ug"), xl = [1105920, 1112319], Cl = G(G(G(G({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Lm), eh), Km), Ss = Object.keys(Cl).reduce((e, t) => (e[t.toLowerCase()] = Cl[t], e), {}), hy = Object.keys(Ss).reduce((e, t) => {
  const n = Ss[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function yy(e) {
  const t = e.replace(my, ""), n = xh(t, 0), r = n >= xl[0] && n <= xl[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ps(o ? t[0] : t),
    isSecondary: r || o
  };
}
function gy(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (Ss[n] || {})[o] || hy[n];
}
function Ol(e, t) {
  const n = "".concat(th).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = jn(e.children).filter((h) => h.getAttribute(us) === t)[0], i = Yt.getComputedStyle(e, t), c = i.getPropertyValue("font-family"), l = c.match(sh), u = i.getPropertyValue("font-weight"), d = i.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && d !== "none" && d !== "") {
      const h = i.getPropertyValue("content");
      let y = gy(c, u);
      const {
        value: p,
        isSecondary: m
      } = yy(h), f = l[0].startsWith("FontAwesome");
      let g = ii(y, p), w = g;
      if (f) {
        const O = kh(p);
        O.iconName && O.prefix && (g = O.iconName, y = O.prefix);
      }
      if (g && !m && (!s || s.getAttribute(ti) !== y || s.getAttribute(ni) !== w)) {
        e.setAttribute(n, w), s && e.removeChild(s);
        const O = oy(), {
          extra: P
        } = O;
        P.attributes[us] = t, vs(g, y).then((F) => {
          const U = li(G(G({}, O), {}, {
            icons: {
              main: F,
              mask: ld()
            },
            prefix: y,
            iconName: w,
            extra: P,
            watchable: !0
          })), A = ge.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(A, e.firstChild) : e.appendChild(A), A.outerHTML = U.map((W) => gr(W)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function vy(e) {
  return Promise.all([Ol(e, "::before"), Ol(e, "::after")]);
}
function by(e) {
  return e.parentNode !== document.head && !~rh.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(us) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Al(e) {
  if (jt)
    return new Promise((t, n) => {
      const r = jn(e.querySelectorAll("*")).filter(by).map(vy), o = ui.begin("searchPseudoElements");
      pd(), Promise.all(r).then(() => {
        o(), ws(), t();
      }).catch(() => {
        o(), ws(), n();
      });
    });
}
var wy = {
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
        node: n = ge
      } = t;
      ee.searchPseudoElements && Al(n);
    };
  }
};
let El = !1;
var Sy = {
  mixout() {
    return {
      dom: {
        unwatch() {
          pd(), El = !0;
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
        ey();
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
var xy = {
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
      }, h = {
        outer: s,
        inner: u,
        path: d
      };
      return {
        tag: "g",
        attributes: G({}, h.outer),
        children: [{
          tag: "g",
          attributes: G({}, h.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: G(G({}, n.icon.attributes), h.path)
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
function Cy(e) {
  return e.tag === "g" ? e.children : [e];
}
var Oy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? wo(n.split(" ").map((o) => o.trim())) : ld();
        return r.prefix || (r.prefix = Xt()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
      } = a, h = yh({
        transform: i,
        containerWidth: u,
        iconWidth: c
      }), y = {
        tag: "rect",
        attributes: G(G({}, Zo), {}, {
          fill: "white"
        })
      }, p = l.children ? {
        children: l.children.map(kl)
      } : {}, m = {
        tag: "g",
        attributes: G({}, h.inner),
        children: [kl(G({
          tag: l.tag,
          attributes: G(G({}, l.attributes), h.path)
        }, p))]
      }, f = {
        tag: "g",
        attributes: G({}, h.outer),
        children: [m]
      }, g = "mask-".concat(s || ur()), w = "clip-".concat(s || ur()), O = {
        tag: "mask",
        attributes: G(G({}, Zo), {}, {
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, f]
      }, P = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: Cy(d)
        }, O]
      };
      return n.push(P, {
        tag: "rect",
        attributes: G({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(g, ")")
        }, Zo)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Ay = {
  provides(e) {
    let t = !1;
    Yt.matchMedia && (t = Yt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, Ey = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Py = [bh, cy, dy, fy, py, wy, Sy, xy, Oy, Ay, Ey];
Lh(Py, {
  mixoutsTo: nt
});
nt.noAuto;
const hd = nt.config, xo = nt.library;
nt.dom;
const no = nt.parse;
nt.findIconDefinition;
nt.toHtml;
const ky = nt.icon;
nt.layer;
const $y = nt.text;
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
function dt(e) {
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
function Ty(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dy(e) {
  var t = Ty(e, "string");
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
  return t = Dy(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Fy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ry(e, t) {
  if (e == null) return {};
  var n = Fy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function xs(e) {
  return _y(e) || Iy(e) || By(e) || Ly();
}
function _y(e) {
  if (Array.isArray(e)) return Cs(e);
}
function Iy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function By(e, t) {
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
function Ly() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var My = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yd = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(g, w, O) {
      if (!l(w) || d(w) || h(w) || y(w) || c(w))
        return w;
      var P, F = 0, U = 0;
      if (u(w))
        for (P = [], U = w.length; F < U; F++)
          P.push(n(g, w[F], O));
      else {
        P = {};
        for (var A in w)
          Object.prototype.hasOwnProperty.call(w, A) && (P[g(A, O)] = n(g, w[A], O));
      }
      return P;
    }, r = function(g, w) {
      w = w || {};
      var O = w.separator || "_", P = w.split || /(?=[A-Z])/;
      return g.split(P).join(O);
    }, o = function(g) {
      return p(g) ? g : (g = g.replace(/[\-_\s]+(.)?/g, function(w, O) {
        return O ? O.toUpperCase() : "";
      }), g.substr(0, 1).toLowerCase() + g.substr(1));
    }, a = function(g) {
      var w = o(g);
      return w.substr(0, 1).toUpperCase() + w.substr(1);
    }, s = function(g, w) {
      return r(g, w).toLowerCase();
    }, i = Object.prototype.toString, c = function(g) {
      return typeof g == "function";
    }, l = function(g) {
      return g === Object(g);
    }, u = function(g) {
      return i.call(g) == "[object Array]";
    }, d = function(g) {
      return i.call(g) == "[object Date]";
    }, h = function(g) {
      return i.call(g) == "[object RegExp]";
    }, y = function(g) {
      return i.call(g) == "[object Boolean]";
    }, p = function(g) {
      return g = g - 0, g === g;
    }, m = function(g, w) {
      var O = w && "process" in w ? w.process : w;
      return typeof O != "function" ? g : function(P, F) {
        return O(P, g, F);
      };
    }, f = {
      camelize: o,
      decamelize: s,
      pascalize: a,
      depascalize: s,
      camelizeKeys: function(g, w) {
        return n(m(o, w), g);
      },
      decamelizeKeys: function(g, w) {
        return n(m(s, w), g, w);
      },
      pascalizeKeys: function(g, w) {
        return n(m(a, w), g);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = f : t.humps = f;
  })(My);
})(yd);
var Ny = yd.exports, jy = ["class", "style"];
function qy(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = Ny.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[o] = a, t;
  }, {});
}
function Vy(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function di(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(c) {
    return di(c);
  }), o = Object.keys(e.attributes || {}).reduce(function(c, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        c.class = Vy(u);
        break;
      case "style":
        c.style = qy(u);
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
  var a = n.style, s = a === void 0 ? {} : a, i = Ry(n, jy);
  return qe(e.tag, dt(dt(dt({}, t), {}, {
    class: o.class,
    style: dt(dt({}, o.style), s)
  }, o.attrs), i), r);
}
var gd = !1;
try {
  gd = process.env.NODE_ENV === "production";
} catch {
}
function zy() {
  if (!gd && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function sr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ze({}, e, t) : {};
}
function Uy(e) {
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
      return sr("classes", Uy(t));
    }), s = T(function() {
      return sr("transform", typeof t.transform == "string" ? no.transform(t.transform) : t.transform);
    }), i = T(function() {
      return sr("mask", Tl(t.mask));
    }), c = T(function() {
      return ky(o.value, dt(dt(dt(dt({}, a.value), s.value), i.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    ne(c, function(u) {
      if (!u)
        return zy("Could not find one or more icon(s)", o.value, i.value);
    }, {
      immediate: !0
    });
    var l = T(function() {
      return c.value ? di(c.value.abstract[0], {}, r) : null;
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
    var r = n.slots, o = hd.familyPrefix, a = T(function() {
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
    var r = n.attrs, o = hd.familyPrefix, a = T(function() {
      return sr("classes", [].concat(xs(t.counter ? ["".concat(o, "-layers-counter")] : []), xs(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), s = T(function() {
      return sr("transform", typeof t.transform == "string" ? no.transform(t.transform) : t.transform);
    }), i = T(function() {
      var l = $y(t.value.toString(), dt(dt({}, s.value), a.value)), u = l.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), c = T(function() {
      return di(i.value, {}, r);
    });
    return function() {
      return c.value;
    };
  }
});
const Hy = { class: "py-ui px-ui gap-ui-half flex flex-col rounded bg-white text-center" }, Wy = { class: "whitespace-pre-line text-gray-600" }, Ky = /* @__PURE__ */ z({
  __name: "UnderConstruction",
  props: {
    full: { type: Boolean, default: !1 },
    info: { default: `Section under construction.
Please come back later.` }
  },
  setup(e) {
    return (t, n) => (x(), k("div", {
      class: Q(["bg-stripes p-ui flex w-full items-center justify-center", { grow: t.full }])
    }, [
      D("div", Hy, [
        J(v(Ee), {
          icon: v(hm),
          class: "text-primary text-4xl"
        }, null, 8, ["icon"]),
        n[0] || (n[0] = D("h1", { class: "text-2xl font-bold" }, "Under Construction", -1)),
        D("p", Wy, Z(t.info), 1)
      ])
    ], 2));
  }
}), fi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, BO = /* @__PURE__ */ fi(Ky, [["__scopeId", "data-v-360f3e83"]]), Gy = { class: "flex items-center" }, Yy = {
  key: 1,
  class: "mr-1"
}, Xy = ["id", "value", "disabled", "required", "name"], Jy = {
  key: 3,
  class: "ml-1"
}, Qy = /* @__PURE__ */ z({
  __name: "Checkbox",
  props: /* @__PURE__ */ pt({
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
  emits: /* @__PURE__ */ pt(["update:checked", "update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = n, o = e;
    function a(f) {
      return f.split("_").join(" ").split(" ").map((g) => g[0].toUpperCase() + g.slice(1)).join(" ");
    }
    const s = Nn(e, "modelValue"), i = N(!1), c = N(), l = N(), u = N(!1);
    pe(() => {
      var f;
      i.value = !o.form, c.value = i.value ? s.value : ((f = o.form) == null ? void 0 : f[o.field]) ?? o.checked;
    }), ne(
      () => c.value,
      (f, g) => {
        if (f !== g) {
          if (i.value ? s.value = f : o.form && o.field && (o.form[o.field] = f), l.value = g, r("update:modelValue", f), r("update:checked", f), u.value) {
            u.value = !1;
            return;
          }
          r("changed", { value: f, old_value: g });
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
    const d = T(() => o.label || (o.field ? a(o.field) : "")), h = T(() => {
      var f, g;
      return o.error || ((g = (f = o.form) == null ? void 0 : f.errors) == null ? void 0 : g[o.field]);
    }), y = T(() => o.id || o.field || `checkbox-${Math.random().toString(36).substr(2, 9)}`);
    return t({
      setValueSilently: (f) => {
        c.value = f, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, g) => {
      var w, O;
      return x(), k("div", {
        class: Q(f.noLabel ? "mb-2" : "mb-4")
      }, [
        !f.noLabel && f.label ? (x(), H(v(qn), {
          key: 0,
          customClass: f.labelCustomClass,
          for: y.value,
          value: d.value,
          sublabel: f.sublabel,
          required: f.required,
          tooltip: f.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : Y("", !0),
        D("label", Gy, [
          (w = f.$slots) != null && w.leftDescription ? q(f.$slots, "leftDescription", { key: 0 }) : f.leftDescription ? (x(), k("span", Yy, Z(f.leftDescription === !0 ? "Disable" : f.leftDescription), 1)) : Y("", !0),
          He(D("input", {
            type: "checkbox",
            id: y.value,
            value: c.value,
            "onUpdate:modelValue": g[0] || (g[0] = (P) => c.value = P),
            disabled: f.disabled,
            required: f.required,
            name: f.name || f.field,
            class: Q(["text-accent-600 focus:ring-accent-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none", { [f.customClass]: f.customClass }])
          }, null, 10, Xy), [
            [Cc, c.value]
          ]),
          (O = f.$slots) != null && O.rightDescription ? q(f.$slots, "rightDescription", { key: 2 }) : f.rightDescription ? (x(), k("span", Jy, Z(f.rightDescription === !0 ? "Enable" : f.rightDescription), 1)) : Y("", !0)
        ]),
        h.value ? (x(), H(v(tn), {
          key: 1,
          message: h.value,
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
    return (t, n) => (x(), k("div", {
      class: Q(t.noLabel ? "mb-2" : "mb-4")
    }, [
      t.noLabel ? Y("", !0) : (x(), H(v(qn), {
        key: 0,
        customClass: t.labelCustomClass,
        for: t.field,
        value: t.computedLabel,
        sublabel: t.sublabel,
        required: t.required,
        tooltip: t.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
      q(t.$slots, "default"),
      t.hasFormErrors ? (x(), H(v(tn), {
        key: 1,
        message: t.formError,
        class: "mt-2"
      }, null, 8, ["message"])) : Y("", !0)
    ], 2));
  }
}), Zy = /* @__PURE__ */ z({
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
    return (a, s) => (x(), H(v(pi), {
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
}), eg = ["id", "required", "disabled", "name"], tg = /* @__PURE__ */ z({
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
    return (a, s) => He((x(), k("select", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => o.value = i),
      id: a.field,
      required: a.required,
      disabled: a.disabled,
      name: a.computedName,
      class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [a.inputCustomClass]: !!a.inputCustomClass }])
    }, [
      q(a.$slots, "default")
    ], 10, eg)), [
      [Oc, o.value]
    ]);
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const ng = {
  prefix: "far",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"]
}, rg = {
  prefix: "far",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]
}, og = { class: "relative flex w-full" }, ag = /* @__PURE__ */ z({
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
    return (i, c) => (x(), k("div", og, [
      J(v(pi), {
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
      a.value ? (x(), k("div", {
        key: 0,
        onClick: s,
        class: Q(["absolute top-1/2 -translate-y-1/2 right-1 z-2 flex size-8 rounded-lg hover:bg-primary-100 cursor-pointer items-center justify-center transition-all text-sm leading-normal text-gray-600", { "bg-primary-50": i.displayType !== "password" }])
      }, [
        J(v(Ee), {
          icon: i.displayType === "password" ? v(rg) : v(ng)
        }, null, 8, ["icon"])
      ], 2)) : Y("", !0)
    ]));
  }
}), sg = { class: "relative flex w-full max-w-full items-stretch" }, ig = ["href"], lg = /* @__PURE__ */ z({
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
      return x(), k("div", sg, [
        s.addon ? (x(), k("span", {
          key: 0,
          class: Q(["flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !s.disabled }])
        }, Z(s.addon), 3)) : Y("", !0),
        J(v(pi), {
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
        s.form ? (x(), k(re, { key: 1 }, [
          s.submitBtn ? (x(), H(v(co), {
            key: 0,
            form: s.form,
            class: Q(["z-2 inline-block rounded-l-none", s.buttonCustomClass]),
            id: `submit-button-${s.field}`
          }, {
            default: I(() => [
              ce(Z(s.submitBtn), 1)
            ]),
            _: 1
          }, 8, ["form", "class", "id"])) : Y("", !0),
          (c = s.$slots) != null && c.submit ? (x(), H(v(co), {
            key: 1,
            form: s.form,
            class: Q(["z-2 inline-block rounded-l-none", s.buttonCustomClass]),
            id: "button-input"
          }, {
            default: I(() => [
              q(s.$slots, "submit")
            ]),
            _: 3
          }, 8, ["form", "class"])) : Y("", !0)
        ], 64)) : Y("", !0),
        s.whatsApp ? (x(), k("a", {
          key: 2,
          class: Q(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", s.buttonCustomClass]),
          href: s.whatsApp,
          target: "_blank"
        }, [
          J(v(Ee), {
            icon: "fab fa-whatsapp",
            size: "2xl"
          })
        ], 10, ig)) : Y("", !0)
      ]);
    };
  }
});
function ug(e, t, n, r) {
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
function cg(e = "password") {
  const t = N(e);
  return {
    displayType: t,
    togglePassword: () => {
      t.value = t.value === "password" ? "text" : "password";
    }
  };
}
function dg(e, t, n) {
  const r = T(() => !!(n || e != null && e.errors && t && e.errors[t])), o = T(() => n || (e != null && e.errors && t && e.errors[t] ? e.errors[t] : null));
  return {
    hasFormErrors: r,
    formError: o,
    updateFormValue: (s) => {
      e && t && (e[t] = s);
    }
  };
}
function fg() {
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
const pg = /* @__PURE__ */ z({
  __name: "Input",
  props: /* @__PURE__ */ pt({
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
  emits: /* @__PURE__ */ pt(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n, a = Nn(e, "modelValue"), {
      getComputedLabel: s,
      getComputedName: i,
      getComputedAutocomplete: c,
      isPasswordType: l,
      isSelectType: u
    } = fg(), {
      value: d,
      setValueSilently: h,
      getPreviousValue: y
    } = ug(r.field, r.form, a, o), { displayType: p, togglePassword: m } = cg(r.type), { hasFormErrors: f, formError: g } = dg(r.form, r.field, r.error), w = s(r.label, r.field), O = i(r.name, r.field), P = c(r.autocomplete, r.field), F = T(() => r.addon || r.submitBtn || r.whatsApp), U = T(() => r.type === "textarea" ? "textarea" : r.type === "switch" ? "switch" : r.type === "checkbox" ? "checkbox" : r.type === "select" ? "select" : l(r.type) ? "password" : F.value ? "with-actions" : "base");
    return t({
      togglePassword: m,
      setValueSilently: h,
      getPreviousValue: y
    }), (A, W) => {
      var B, $, V, b, E;
      return U.value === "textarea" ? (x(), H(v(Cg), {
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
        name: v(O),
        sublabel: A.sublabel,
        "submit-btn": A.submitBtn,
        "whats-app": A.whatsApp,
        autocomplete: v(P),
        tooltip: A.tooltip,
        "custom-class": A.inputCustomClass,
        "label-custom-class": A.labelCustomClass,
        "button-custom-class": A.buttonCustomClass,
        error: A.error,
        modelValue: v(d),
        "onUpdate:modelValue": W[0] || (W[0] = (C) => Wt(d) ? d.value = C : null),
        onChanged: W[1] || (W[1] = (C) => o("changed", C))
      }, Tr({ _: 2 }, [
        (B = A.$slots) != null && B.submit ? {
          name: "submit",
          fn: I(() => [
            q(A.$slots, "submit")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "addon", "placeholder", "no-label", "autofocus", "rows", "name", "sublabel", "submit-btn", "whats-app", "autocomplete", "tooltip", "custom-class", "label-custom-class", "button-custom-class", "error", "modelValue"])) : U.value === "switch" ? (x(), H(v($g), {
        key: 1,
        form: A.form,
        field: A.field,
        label: A.label,
        required: A.required,
        disabled: A.disabled,
        "no-label": A.noLabel,
        name: v(O),
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        "left-description": A.leftDescription,
        "right-description": A.rightDescription,
        "custom-class": A.inputCustomClass,
        "label-custom-class": A.labelCustomClass,
        error: A.error,
        modelValue: v(d),
        "onUpdate:modelValue": W[2] || (W[2] = (C) => Wt(d) ? d.value = C : null),
        onChanged: W[3] || (W[3] = (C) => o("changed", C))
      }, Tr({ _: 2 }, [
        ($ = A.$slots) != null && $.leftDescription ? {
          name: "leftDescription",
          fn: I(() => [
            q(A.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (V = A.$slots) != null && V.rightDescription ? {
          name: "rightDescription",
          fn: I(() => [
            q(A.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : U.value === "checkbox" ? (x(), H(v(Qy), {
        key: 2,
        form: A.form,
        field: A.field,
        label: A.label,
        required: A.required,
        disabled: A.disabled,
        "no-label": A.noLabel,
        name: v(O),
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        "left-description": A.leftDescription,
        "right-description": A.rightDescription,
        "custom-class": A.inputCustomClass,
        "label-custom-class": A.labelCustomClass,
        error: A.error,
        modelValue: v(d),
        "onUpdate:modelValue": W[4] || (W[4] = (C) => Wt(d) ? d.value = C : null),
        onChanged: W[5] || (W[5] = (C) => o("changed", C))
      }, Tr({ _: 2 }, [
        (b = A.$slots) != null && b.leftDescription ? {
          name: "leftDescription",
          fn: I(() => [
            q(A.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (E = A.$slots) != null && E.rightDescription ? {
          name: "rightDescription",
          fn: I(() => [
            q(A.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : U.value === "select" ? (x(), H(v(Rr), {
        key: 3,
        field: A.field,
        label: A.label,
        "no-label": A.noLabel,
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        required: A.required,
        "label-custom-class": A.labelCustomClass,
        "computed-label": v(w),
        "has-form-errors": v(f),
        "form-error": v(g)
      }, {
        default: I(() => [
          J(v(tg), {
            field: A.field,
            name: A.name,
            required: A.required,
            disabled: A.disabled,
            "input-custom-class": A.inputCustomClass,
            "computed-name": v(O),
            modelValue: v(d),
            "onUpdate:modelValue": W[6] || (W[6] = (C) => Wt(d) ? d.value = C : null)
          }, {
            default: I(() => [
              q(A.$slots, "default")
            ]),
            _: 3
          }, 8, ["field", "name", "required", "disabled", "input-custom-class", "computed-name", "modelValue"])
        ]),
        _: 3
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : U.value === "password" ? (x(), H(v(Rr), {
        key: 4,
        field: A.field,
        label: A.label,
        "no-label": A.noLabel,
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        required: A.required,
        "label-custom-class": A.labelCustomClass,
        "computed-label": v(w),
        "has-form-errors": v(f),
        "form-error": v(g)
      }, {
        default: I(() => [
          J(v(ag), {
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
            "computed-name": v(O),
            "computed-autocomplete": v(P),
            "display-type": v(p),
            modelValue: v(d),
            "onUpdate:modelValue": W[7] || (W[7] = (C) => Wt(d) ? d.value = C : null),
            onTogglePassword: v(m)
          }, null, 8, ["field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "autocomplete", "hide-password-toggler", "input-custom-class", "computed-name", "computed-autocomplete", "display-type", "modelValue", "onTogglePassword"])
        ]),
        _: 1
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : U.value === "with-actions" ? (x(), H(v(Rr), {
        key: 5,
        field: A.field,
        label: A.label,
        "no-label": A.noLabel,
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        required: A.required,
        "label-custom-class": A.labelCustomClass,
        "computed-label": v(w),
        "has-form-errors": v(f),
        "form-error": v(g)
      }, {
        default: I(() => {
          var C;
          return [
            J(v(lg), {
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
              "computed-name": v(O),
              "computed-autocomplete": v(P),
              form: A.form,
              modelValue: v(d),
              "onUpdate:modelValue": W[8] || (W[8] = (S) => Wt(d) ? d.value = S : null)
            }, Tr({ _: 2 }, [
              (C = A.$slots) != null && C.submit ? {
                name: "submit",
                fn: I(() => [
                  q(A.$slots, "submit")
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["type", "field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "min", "max", "step", "autocomplete", "input-custom-class", "button-custom-class", "addon", "submit-btn", "whats-app", "computed-name", "computed-autocomplete", "form", "modelValue"])
          ];
        }),
        _: 3
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : (x(), H(v(Rr), {
        key: 6,
        field: A.field,
        label: A.label,
        "no-label": A.noLabel,
        sublabel: A.sublabel,
        tooltip: A.tooltip,
        required: A.required,
        "label-custom-class": A.labelCustomClass,
        "computed-label": v(w),
        "has-form-errors": v(f),
        "form-error": v(g)
      }, {
        default: I(() => [
          J(v(Zy), {
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
            "computed-name": v(O),
            "computed-autocomplete": v(P),
            modelValue: v(d),
            "onUpdate:modelValue": W[9] || (W[9] = (C) => Wt(d) ? d.value = C : null)
          }, null, 8, ["type", "field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "min", "max", "step", "autocomplete", "input-custom-class", "computed-name", "computed-autocomplete", "modelValue"])
        ]),
        _: 1
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"]));
    };
  }
}), mg = { class: "text-sm text-red-600" }, tn = /* @__PURE__ */ z({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(e) {
    return (t, n) => He((x(), k("div", null, [
      D("p", mg, Z(t.message), 1)
    ], 512)), [
      [un, t.message]
    ]);
  }
}), hg = { key: 0 }, yg = { key: 1 }, gg = {
  key: 3,
  class: "ml-2 text-xs text-gray-500"
}, vg = {
  key: 4,
  class: "ml-1 text-red-500"
}, qn = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass", "tooltip"],
  setup(e) {
    return xo.add(tl), (t, n) => (x(), k("label", {
      class: Q(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (x(), k("span", hg, Z(e.value), 1)) : (x(), k("span", yg, [
        q(t.$slots, "default")
      ])),
      e.tooltip ? (x(), H(v(eO), {
        key: 2,
        content: e.tooltip,
        class: "ml-1 inline-block"
      }, {
        default: I(() => [
          J(v(Ee), {
            icon: v(tl),
            class: "mx-1 cursor-help"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["content"])) : Y("", !0),
      e.sublabel ? (x(), k("span", gg, Z(e.sublabel), 1)) : Y("", !0),
      e.required ? (x(), k("span", vg, "*")) : Y("", !0)
    ], 2));
  }
}, bg = ["value"], pi = /* @__PURE__ */ z({
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
    }), (s, i) => (x(), k("input", {
      class: "focusable focus:border-primary-500 focus:ring-primary-500 relative m-0 block w-full flex-auto rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
      value: s.modelValue,
      onInput: a,
      ref_key: "input",
      ref: o
    }, null, 40, bg));
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
}, wg = { class: "relative flex w-full max-w-full items-stretch" }, Sg = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], xg = ["href"], Cg = /* @__PURE__ */ z({
  __name: "Textarea",
  props: /* @__PURE__ */ pt({
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
  emits: /* @__PURE__ */ pt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    function a(m) {
      return m.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = N(!1), i = Nn(e, "modelValue"), c = N(), l = N(), u = N(!1);
    pe(() => {
      var m;
      s.value = !r.form, c.value = s.value ? i.value : (m = r.form) == null ? void 0 : m[r.field];
    }), ne(
      () => c.value,
      (m, f) => {
        if (m !== f) {
          if (s.value ? i.value = m : r.form && r.field && (r.form[r.field] = m), l.value = f, o("update:modelValue", m), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: m, old_value: f });
        }
      }
    ), ne(
      () => r.field && r.form ? r.form[r.field] : null,
      (m) => {
        c.value = s.value ? i.value : m;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (m) => {
        c.value = m;
      }
    );
    const d = T(() => r.label || (r.field ? a(r.field) : "")), h = T(() => {
      var m, f;
      return r.error || ((f = (m = r.form) == null ? void 0 : m.errors) == null ? void 0 : f[r.field]);
    });
    return t({
      setValueSilently: (m) => {
        c.value = m, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (m, f) => (x(), H(v(Js), {
      field: m.field,
      label: d.value,
      sublabel: m.sublabel,
      tooltip: m.tooltip,
      required: m.required,
      noLabel: m.noLabel,
      labelCustomClass: m.labelCustomClass,
      form: m.form,
      error: h.value,
      htmlFor: m.field
    }, {
      default: I(() => {
        var g, w;
        return [
          D("div", wg, [
            m.addon ? (x(), k("span", {
              key: 0,
              class: Q(["border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !m.disabled }])
            }, Z(m.addon), 3)) : Y("", !0),
            He(D("textarea", {
              id: m.field,
              class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "rounded-l-none shadow-none": m.addon,
                "rounded-r-none": !!m.submitBtn || m.whatsApp || ((g = m.$slots) == null ? void 0 : g.submit),
                [m.customClass]: !!m.customClass
              }]),
              rows: m.rows,
              "onUpdate:modelValue": f[0] || (f[0] = (O) => c.value = O),
              required: m.required,
              disabled: m.disabled,
              autocomplete: m.autocomplete || m.field,
              placeholder: m.placeholder,
              autofocus: m.autofocus,
              name: m.name || m.field
            }, null, 10, Sg), [
              [Ac, c.value]
            ]),
            m.form ? (x(), k(re, { key: 1 }, [
              m.submitBtn ? (x(), H(v(co), {
                key: 0,
                form: m.form,
                class: Q(["z-2 inline-block rounded-l-none", m.buttonCustomClass]),
                id: `submit-button-${m.field}`
              }, {
                default: I(() => [
                  ce(Z(m.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (w = m.$slots) != null && w.submit ? (x(), H(v(co), {
                key: 1,
                form: m.form,
                class: Q(["z-2 inline-block rounded-l-none", m.buttonCustomClass]),
                id: "button-textarea"
              }, {
                default: I(() => [
                  q(m.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            m.whatsApp ? (x(), k("a", {
              key: 2,
              class: Q(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", m.buttonCustomClass]),
              href: m.whatsApp,
              target: "_blank"
            }, [
              J(v(Ee), {
                icon: v(vd),
                size: "2xl"
              }, null, 8, ["icon"])
            ], 10, xg)) : Y("", !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Og = { class: "flex items-center" }, Ag = {
  key: 1,
  class: "mr-1"
}, Eg = ["id", "disabled", "required", "name"], Pg = {
  key: 3,
  class: "ml-1"
}, kg = /* @__PURE__ */ z({
  __name: "Switch",
  props: /* @__PURE__ */ pt({
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
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ pt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    function a(m) {
      return m.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = N(!1), i = Nn(e, "modelValue"), c = N(), l = N(), u = N(!1);
    pe(() => {
      var m;
      s.value = !r.form, c.value = s.value ? i.value : (m = r.form) == null ? void 0 : m[r.field];
    }), ne(
      () => c.value,
      (m, f) => {
        if (m !== f) {
          if (s.value ? i.value = m : r.form && r.field && (r.form[r.field] = m), l.value = f, o("update:modelValue", m), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: m, old_value: f });
        }
      }
    ), ne(
      () => r.field && r.form ? r.form[r.field] : null,
      (m) => {
        c.value = s.value ? i.value : m;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (m) => {
        c.value = m;
      }
    );
    const d = T(() => r.label || (r.field ? a(r.field) : "")), h = T(() => {
      var m, f;
      return r.error || ((f = (m = r.form) == null ? void 0 : m.errors) == null ? void 0 : f[r.field]);
    });
    return t({
      setValueSilently: (m) => {
        c.value = m, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (m, f) => {
      var g, w;
      return x(), k("div", {
        class: Q(m.noLabel ? "mb-2" : "mb-4")
      }, [
        m.noLabel ? Y("", !0) : (x(), H(v(qn), {
          key: 0,
          customClass: m.labelCustomClass,
          for: m.field,
          value: d.value,
          sublabel: m.sublabel,
          required: m.required,
          tooltip: m.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        D("label", Og, [
          (g = m.$slots) != null && g.leftDescription ? q(m.$slots, "leftDescription", { key: 0 }, void 0, !0) : m.leftDescription ? (x(), k("span", Ag, Z(m.leftDescription === !0 ? "Disable" : m.leftDescription), 1)) : Y("", !0),
          He(D("input", {
            id: m.field,
            type: "checkbox",
            class: "hidden",
            "onUpdate:modelValue": f[0] || (f[0] = (O) => c.value = O),
            disabled: m.disabled,
            required: m.required,
            name: m.name || m.field
          }, null, 8, Eg), [
            [Cc, c.value]
          ]),
          D("div", {
            tabindex: "0",
            class: Q(["toggle-switch focusable relative mx-2 ml-0 inline-block h-6 w-12 flex-none cursor-pointer rounded-xl bg-gray-300 transition-all", {
              "checked bg-primary": c.value,
              "disabled cursor-not-allowed opacity-50": m.disabled,
              [m.customClass]: m.customClass
            }]),
            style: { "box-shadow": "0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset" }
          }, null, 2),
          (w = m.$slots) != null && w.rightDescription ? q(m.$slots, "rightDescription", { key: 2 }, void 0, !0) : m.rightDescription ? (x(), k("span", Pg, Z(m.rightDescription === !0 ? "Enable" : m.rightDescription), 1)) : Y("", !0)
        ]),
        h.value ? (x(), H(v(tn), {
          key: 1,
          message: h.value,
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
}), $g = /* @__PURE__ */ fi(kg, [["__scopeId", "data-v-dc63ff1f"]]), Tg = ["id", "required", "disabled", "name"], Dg = ["selected"], Fg = ["value", "disabled"], LO = /* @__PURE__ */ z({
  __name: "Select",
  props: /* @__PURE__ */ pt({
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
  emits: /* @__PURE__ */ pt(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    function a(f) {
      return f.split("_").join(" ").split(" ").map((g) => g.charAt(0).toUpperCase() + g.slice(1)).join(" ");
    }
    const s = N(!1), i = Nn(e, "modelValue"), c = N(), l = N(), u = N(!1);
    pe(() => {
      var f;
      s.value = !r.form, c.value = s.value ? i.value : (f = r.form) == null ? void 0 : f[r.field];
    }), ne(
      () => c.value,
      (f, g) => {
        if (f !== g) {
          if (s.value ? i.value = f : r.form && r.field && (r.form[r.field] = f), l.value = g, o("update:modelValue", f), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: f, old_value: g });
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
    }) : []), h = T(() => r.label || (r.field ? a(r.field) : "")), y = T(() => {
      var f, g;
      return r.error || ((g = (f = r.form) == null ? void 0 : f.errors) == null ? void 0 : g[r.field]);
    });
    return t({
      setValueSilently: (f) => {
        c.value = f, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, g) => (x(), H(v(Js), {
      field: f.field,
      label: h.value,
      sublabel: f.sublabel,
      tooltip: f.tooltip,
      required: f.required,
      noLabel: f.noLabel,
      labelCustomClass: f.labelCustomClass,
      form: f.form,
      error: y.value,
      htmlFor: f.field
    }, {
      default: I(() => [
        He(D("select", {
          id: f.field,
          "onUpdate:modelValue": g[0] || (g[0] = (w) => c.value = w),
          required: f.required,
          disabled: f.disabled,
          name: f.name || f.field,
          class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", f.customClass])
        }, [
          f.placeholder ? (x(), k("option", {
            key: 0,
            value: "",
            disabled: "",
            selected: !c.value,
            class: "text-gray-500"
          }, Z(f.placeholder), 9, Dg)) : Y("", !0),
          (x(!0), k(re, null, be(d.value, (w) => (x(), k("option", {
            key: w.value,
            value: w.value,
            disabled: w.disabled
          }, Z(w.label), 9, Fg))), 128)),
          q(f.$slots, "default")
        ], 10, Tg), [
          [Oc, c.value]
        ])
      ]),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Rg = ["id", "disabled"], _g = { class: "flex flex-wrap gap-1" }, Ig = ["onClick"], Bg = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, Lg = { class: "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg" }, Mg = {
  key: 0,
  class: "border-b border-gray-200 p-2"
}, Ng = { class: "relative" }, jg = {
  key: 1,
  class: "flex items-center justify-center p-4"
}, qg = {
  key: 2,
  class: "max-h-60 overflow-auto"
}, Vg = {
  key: 0,
  class: "bg-gray-50 px-3 py-2 text-xs font-semibold tracking-wide text-gray-500 uppercase"
}, zg = ["onClick", "disabled"], Ug = { class: "block truncate" }, Hg = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, Wg = ["onClick", "disabled"], Kg = { class: "block truncate" }, Gg = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, Yg = {
  key: 2,
  class: "px-3 py-2 text-center text-sm text-gray-500"
}, MO = /* @__PURE__ */ z({
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
      set(S) {
        n.modelValue !== void 0 ? r("update:modelValue", S) : n.form && n.field && (n.form[n.field] = S);
      }
    }), h = (S) => S[n.optionValue], y = (S) => S[n.optionLabel], p = (S) => S[n.optionGroup], m = T(() => {
      var S;
      if ((S = n.form) != null && S.errors && n.field)
        return n.form.errors[n.field];
    }), f = T(() => n.label ? n.label : n.field ? n.field.split("_").map((S) => S.charAt(0).toUpperCase() + S.slice(1)).join(" ") : ""), g = T(() => n.field || `select-${Math.random().toString(36).substr(2, 9)}`), w = T(() => {
      if (!n.searchable || !a.value)
        return c.value;
      const S = a.value.toLowerCase();
      return c.value.filter((K) => y(K).toLowerCase().includes(S));
    }), O = T(() => {
      if (!n.grouping)
        return { ungrouped: w.value };
      const S = {};
      return w.value.forEach((K) => {
        const L = p(K) || "ungrouped";
        S[L] || (S[L] = []), S[L].push(K);
      }), S;
    }), P = T(() => {
      if (!d.value) return [];
      const S = n.multiple ? d.value : [d.value];
      return c.value.filter((K) => S.includes(h(K)));
    }), F = T(() => P.value.length ? n.multiple ? P.value.map((S) => y(S)).join(", ") : y(P.value[0]) : n.placeholder), U = async (S) => {
      if (!(!n.apiSearch || !n.apiUrl)) {
        s.value = !0;
        try {
          const K = new URL(n.apiUrl);
          K.searchParams.set(n.apiSearchParam, S);
          const R = await (await fetch(K.toString())).json(), X = n.apiTransform ? n.apiTransform(R) : R;
          c.value = X, r("optionsLoaded", X);
        } catch (K) {
          console.error("API search error:", K);
        } finally {
          s.value = !1;
        }
      }
    }, A = (S) => {
      a.value = S, r("search", S), n.apiSearch && S.length >= n.minSearchLength && (i.value && clearTimeout(i.value), i.value = setTimeout(() => {
        U(S);
      }, n.searchDelay));
    }, W = (S) => {
      if (S.disabled) return;
      const K = h(S);
      if (n.multiple) {
        const L = d.value || [], R = L.indexOf(K);
        R > -1 ? d.value = L.filter((X, ae) => ae !== R) : d.value = [...L, K];
      } else
        d.value = K, o.value = !1;
    }, B = (S, K) => {
      if (K.stopPropagation(), n.multiple) {
        const L = h(S);
        d.value = d.value.filter((R) => R !== L);
      }
    }, $ = (S) => {
      S.stopPropagation(), d.value = n.multiple ? [] : void 0;
    }, V = (S) => {
      const K = h(S);
      return n.multiple ? (d.value || []).includes(K) : d.value === K;
    }, b = () => {
      n.disabled || (o.value = !o.value, o.value && n.searchable && De(() => {
        var S;
        (S = u.value) == null || S.focus();
      }));
    }, E = (S) => {
      l.value && !l.value.contains(S.target) && (o.value = !1);
    };
    return ne(
      () => n.options,
      (S) => {
        c.value = [...S];
      },
      { immediate: !0 }
    ), pe(() => {
      document.addEventListener("click", E);
    }), Mt(() => {
      document.removeEventListener("click", E), i.value && clearTimeout(i.value);
    }), (S, K) => (x(), H(v(Js), {
      field: S.field,
      label: f.value,
      tooltip: S.tooltip,
      required: S.required,
      noLabel: S.noLabel,
      form: S.form,
      error: m.value,
      htmlFor: g.value
    }, {
      default: I(() => [
        D("div", {
          class: "relative",
          ref_key: "dropdownRef",
          ref: l
        }, [
          D("button", {
            type: "button",
            id: g.value,
            onClick: b,
            disabled: S.disabled,
            class: Q(["focusable focus:border-primary-500 focus:ring-primary-500 relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500", [
              S.customClass,
              {
                "border-red-500 focus:border-red-500 focus:ring-red-500": m.value,
                "border-primary-500 ring-primary-500 ring-2": o.value
              }
            ]])
          }, [
            D("div", _g, [
              S.multiple && P.value.length ? (x(!0), k(re, { key: 0 }, be(P.value, (L) => (x(), k("span", {
                key: h(L),
                class: "bg-primary-100 text-primary-800 inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
              }, [
                ce(Z(y(L)) + " ", 1),
                D("button", {
                  type: "button",
                  onClick: (R) => B(L, R),
                  class: "hover:text-primary-600 transition-colors"
                }, [
                  J(v(Ee), {
                    icon: v(Zr),
                    class: "h-3 w-3"
                  }, null, 8, ["icon"])
                ], 8, Ig)
              ]))), 128)) : (x(), k("span", {
                key: 1,
                class: Q(["block truncate", { "text-gray-500": !P.value.length }])
              }, Z(F.value), 3))
            ]),
            S.clearable && P.value.length ? (x(), k("button", {
              key: 0,
              type: "button",
              onClick: $,
              class: "absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 transition-colors hover:text-gray-600"
            }, [
              J(v(Ee), {
                icon: v(Zr),
                class: "h-4 w-4"
              }, null, 8, ["icon"])
            ])) : Y("", !0),
            D("div", Bg, [
              J(v(Ee), {
                icon: v(Zs),
                class: Q(["h-4 w-4 text-gray-400 transition-transform duration-200", { "rotate-180": o.value }])
              }, null, 8, ["icon", "class"])
            ])
          ], 10, Rg),
          J(cn, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "opacity-0 scale-95",
            "enter-to-class": "opacity-100 scale-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "opacity-100 scale-100",
            "leave-to-class": "opacity-0 scale-95"
          }, {
            default: I(() => [
              He(D("div", Lg, [
                S.searchable ? (x(), k("div", Mg, [
                  D("div", Ng, [
                    J(v(Ee), {
                      icon: v(bm),
                      class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                    }, null, 8, ["icon"]),
                    He(D("input", {
                      ref_key: "searchInputRef",
                      ref: u,
                      type: "text",
                      "onUpdate:modelValue": K[0] || (K[0] = (L) => a.value = L),
                      onInput: K[1] || (K[1] = (L) => A(a.value)),
                      placeholder: "Search options...",
                      class: "focus:border-primary-500 focus:ring-primary-500 w-full rounded border border-gray-300 py-2 pr-3 pl-10 text-sm focus:ring-2 focus:ring-offset-0"
                    }, null, 544), [
                      [Ac, a.value]
                    ])
                  ])
                ])) : Y("", !0),
                s.value ? (x(), k("div", jg, [
                  J(v(Vi), { class: "h-5 w-5" }),
                  K[2] || (K[2] = D("span", { class: "ml-2 text-sm text-gray-600" }, "Loading...", -1))
                ])) : (x(), k("div", qg, [
                  S.grouping ? (x(!0), k(re, { key: 0 }, be(O.value, (L, R) => (x(), k("div", { key: R }, [
                    R !== "ungrouped" ? (x(), k("div", Vg, Z(R), 1)) : Y("", !0),
                    (x(!0), k(re, null, be(L, (X) => (x(), k("button", {
                      key: h(X),
                      type: "button",
                      onClick: (ae) => W(X),
                      disabled: X.disabled,
                      class: Q(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                        "bg-primary-100 text-primary-900": V(X),
                        "text-gray-900": !V(X)
                      }])
                    }, [
                      D("span", Ug, Z(y(X)), 1),
                      V(X) ? (x(), k("span", Hg, " ✓ ")) : Y("", !0)
                    ], 10, zg))), 128))
                  ]))), 128)) : (x(!0), k(re, { key: 1 }, be(w.value, (L) => (x(), k("button", {
                    key: h(L),
                    type: "button",
                    onClick: (R) => W(L),
                    disabled: L.disabled,
                    class: Q(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                      "bg-primary-100 text-primary-900": V(L),
                      "text-gray-900": !V(L)
                    }])
                  }, [
                    D("span", Kg, Z(y(L)), 1),
                    V(L) ? (x(), k("span", Gg, "✓")) : Y("", !0)
                  ], 10, Wg))), 128)),
                  w.value.length ? Y("", !0) : (x(), k("div", Yg, "No options found"))
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
var Xg = Object.defineProperty, Jg = Object.defineProperties, Qg = Object.getOwnPropertyDescriptors, Dl = Object.getOwnPropertySymbols, Zg = Object.prototype.hasOwnProperty, e0 = Object.prototype.propertyIsEnumerable, Fl = (e, t, n) => t in e ? Xg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kn = (e, t) => {
  for (var n in t || (t = {}))
    Zg.call(t, n) && Fl(e, n, t[n]);
  if (Dl)
    for (var n of Dl(t))
      e0.call(t, n) && Fl(e, n, t[n]);
  return e;
}, Rl = (e, t) => Jg(e, Qg(t));
const t0 = {
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
}, n0 = {
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
}, r0 = {
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
}, mi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, o0 = {}, a0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, s0 = /* @__PURE__ */ D("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), i0 = [
  s0
];
function l0(e, t) {
  return x(), k("svg", a0, i0);
}
const u0 = /* @__PURE__ */ mi(o0, [["render", l0]]), c0 = {}, d0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, f0 = /* @__PURE__ */ D("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), p0 = [
  f0
];
function m0(e, t) {
  return x(), k("svg", d0, p0);
}
const h0 = /* @__PURE__ */ mi(c0, [["render", m0]]), _l = {
  Deselect: u0,
  OpenIndicator: h0
}, y0 = {
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
function g0(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let v0 = 0;
function b0() {
  return ++v0;
}
const w0 = {
  components: kn({}, _l),
  directives: { appendToBody: y0 },
  mixins: [t0, n0, r0],
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
          return e.hasOwnProperty("id") ? e.id : g0(e);
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
      default: () => b0()
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
          attributes: kn({
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
        header: Rl(kn({}, e), { deselect: this.deselect }),
        footer: Rl(kn({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return kn(kn({}, _l), this.components);
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
}, S0 = ["dir"], x0 = ["id", "aria-expanded", "aria-owns"], C0 = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, O0 = ["disabled", "title", "aria-label", "onClick"], A0 = {
  ref: "actions",
  class: "vs__actions"
}, E0 = ["disabled"], P0 = { class: "vs__spinner" }, k0 = ["id"], $0 = ["id", "aria-selected", "onMouseover", "onClick"], T0 = {
  key: 0,
  class: "vs__no-options"
}, D0 = /* @__PURE__ */ ce(" Sorry, no matching options. "), F0 = ["id"];
function R0(e, t, n, r, o, a) {
  const s = Gp("append-to-body");
  return x(), k("div", {
    dir: n.dir,
    class: Q(["v-select", a.stateClasses])
  }, [
    q(e.$slots, "header", ve(Ae(a.scope.header))),
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
      D("div", C0, [
        (x(!0), k(re, null, be(a.selectedValue, (i, c) => q(e.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(i),
          deselect: a.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (x(), k("span", {
            key: n.getOptionKey(i),
            class: "vs__selected"
          }, [
            q(e.$slots, "selected-option", ve(Ae(a.normalizeOptionForSlot(i))), () => [
              ce(Z(n.getOptionLabel(i)), 1)
            ]),
            n.multiple ? (x(), k("button", {
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
              (x(), H(Vr(a.childComponents.Deselect)))
            ], 8, O0)) : Y("", !0)
          ]))
        ])), 256)),
        q(e.$slots, "search", ve(Ae(a.scope.search)), () => [
          D("input", ie({ class: "vs__search" }, a.scope.search.attributes, Ec(a.scope.search.events)), null, 16)
        ])
      ], 512),
      D("div", A0, [
        He(D("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...i) => a.clearSelection && a.clearSelection(...i))
        }, [
          (x(), H(Vr(a.childComponents.Deselect)))
        ], 8, E0), [
          [un, a.showClearButton]
        ]),
        q(e.$slots, "open-indicator", ve(Ae(a.scope.openIndicator)), () => [
          n.noDrop ? Y("", !0) : (x(), H(Vr(a.childComponents.OpenIndicator), ve(ie({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        q(e.$slots, "spinner", ve(Ae(a.scope.spinner)), () => [
          He(D("div", P0, "Loading...", 512), [
            [un, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, x0),
    J(cn, { name: n.transition }, {
      default: I(() => [
        a.dropdownOpen ? He((x(), k("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = St((...i) => a.onMousedown && a.onMousedown(...i), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...i) => a.onMouseUp && a.onMouseUp(...i))
        }, [
          q(e.$slots, "list-header", ve(Ae(a.scope.listHeader))),
          (x(!0), k(re, null, be(a.filteredOptions, (i, c) => (x(), k("li", {
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
            onClick: St((l) => n.selectable(i) ? a.select(i) : null, ["prevent", "stop"])
          }, [
            q(e.$slots, "option", ve(Ae(a.normalizeOptionForSlot(i))), () => [
              ce(Z(n.getOptionLabel(i)), 1)
            ])
          ], 42, $0))), 128)),
          a.filteredOptions.length === 0 ? (x(), k("li", T0, [
            q(e.$slots, "no-options", ve(Ae(a.scope.noOptions)), () => [
              D0
            ])
          ])) : Y("", !0),
          q(e.$slots, "list-footer", ve(Ae(a.scope.listFooter)))
        ], 40, k0)), [
          [s]
        ]) : (x(), k("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, F0))
      ]),
      _: 3
    }, 8, ["name"]),
    q(e.$slots, "footer", ve(Ae(a.scope.footer)))
  ], 10, S0);
}
const _0 = /* @__PURE__ */ mi(w0, [["render", R0]]), NO = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return xo.add(vd), (t, n) => (x(), H(v(_0), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, $t = {
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
function I0(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const bd = {
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
      default: (e, t) => e.match(I0(t))
    }
  }
}, B0 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, L0 = {
  name: "ModelSelect",
  mixins: [bd],
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
      $t.openOptions(this);
    },
    blurInput() {
      $t.blurInput(this);
    },
    closeOptions() {
      $t.closeOptions(this);
    },
    prevItem() {
      $t.prevItem(this);
    },
    nextItem() {
      $t.nextItem(this);
    },
    enterItem() {
      $t.enterItem(this);
    },
    pointerSet(e) {
      $t.pointerSet(this, e);
    },
    pointerAdjust() {
      $t.pointerAdjust(this);
    },
    mousedownItem() {
      $t.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, M0 = /* @__PURE__ */ D("i", { class: "dropdown icon" }, null, -1), N0 = ["disabled", "tabindex", "id", "name", "value"], j0 = ["data-vss-custom-attr"], q0 = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function V0(e, t, n, r, o, a) {
  return x(), k("div", {
    class: Q(["ui fluid search selection dropdown", { "active visible": o.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => a.openOptions && a.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => a.openOptions && a.openOptions(...s))
  }, [
    M0,
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
      onFocus: t[1] || (t[1] = St((...s) => a.openOptions && a.openOptions(...s), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = on((...s) => a.closeOptions && a.closeOptions(...s), ["esc"])),
        t[7] || (t[7] = on(St((...s) => a.enterItem && a.enterItem(...s), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...s) => a.blurInput && a.blurInput(...s)),
      onKeydown: [
        t[4] || (t[4] = on((...s) => a.prevItem && a.prevItem(...s), ["up"])),
        t[5] || (t[5] = on((...s) => a.nextItem && a.nextItem(...s), ["down"])),
        t[6] || (t[6] = on(St(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = on((...s) => a.deleteTextOrItem && a.deleteTextOrItem(...s), ["delete"]))
      ]
    }, null, 40, N0),
    D("div", {
      class: Q(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, Z(a.inputText), 11, j0),
    D("div", {
      class: Q(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = St(() => {
      }, ["prevent"])),
      style: et(a.menuStyle),
      tabindex: "-1"
    }, [
      (x(!0), k(re, null, be(a.filteredOptions, (s, i) => (x(), k("div", {
        key: i,
        class: Q(["item", { selected: s.selected || o.pointer === i, disabled: s.disabled }]),
        "data-vss-custom-attr": a.customAttrs[i] ? a.customAttrs[i] : "",
        onClick: St((c) => a.selectItem(s), ["stop"]),
        onMousedown: t[9] || (t[9] = (...c) => a.mousedownItem && a.mousedownItem(...c)),
        onMouseenter: (c) => a.pointerSet(i)
      }, [
        q(e.$slots, "default", {
          option: s,
          idx: i
        }, () => [
          ce(Z(s.text), 1)
        ])
      ], 42, q0))), 128))
    ], 38)
  ], 34);
}
const Il = /* @__PURE__ */ B0(L0, [["render", V0]]), Bl = {
  name: "ModelListSelect",
  mixins: [bd],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return qe(Il, {
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
    ModelSelect: Il
  }
}, z0 = {
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
    return (o, a) => (x(), k("div", null, [
      !e.noLabel && (e.label || e.field) ? (x(), H(v(qn), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : Y("", !0),
      e.noForm ? (x(), H(v(Bl), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (x(), k(re, { key: 2 }, [
        J(v(Bl), {
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
        J(v(tn), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, U0 = /* @__PURE__ */ fi(z0, [["__scopeId", "data-v-c8f3c7c8"]]), jO = {
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
    var g;
    const r = e, o = n, a = N([]), s = N(1), i = N(!0), c = N(0), l = N(""), u = N(((g = r.form) == null ? void 0 : g[r.field]) || r.modelValue), d = N(u.value), h = N(null), y = (w) => {
      d.value = u.value, u.value = w, o("update:modelValue", w), o("changed", w), w || (p(""), h.value = null);
    }, p = (w) => {
      w == "" && u.value && u.value !== d.value || (s.value = 1, c.value = 0, l.value = w, m());
    }, m = async (w = !1) => {
      const O = new URLSearchParams();
      O.append("term", l.value), O.append("page", s.value), r.queryParams && Object.keys(r.queryParams).forEach((U) => {
        O.append(U, r.queryParams[U]);
      }), w && u.value && O.append("ajax_id", u.value);
      const F = await (await fetch(`${r.url}?${O.toString()}`)).json();
      if (i.value = F.current_page < F.last_page, s.value === 1) {
        if (a.value = F.data, u.value) {
          const U = a.value.find((A) => A[r.optionValue] == u.value);
          h.value = U ? U[r.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat(F.data);
    };
    return pe(() => {
      m(!0);
      const w = document.getElementById(r.id).parentNode.querySelector(".menu");
      w == null || w.addEventListener(
        "scroll",
        (O) => {
          O.target.scrollTop > c.value && O.target.scrollTop + O.target.clientHeight >= O.target.scrollHeight && i.value && (s.value++, m());
        },
        {
          passive: !0
        }
      );
    }), t({ getCurrentOption: () => a.value.find((w) => w[r.optionValue] == u.value) }), (w, O) => (x(), H(v(U0), {
      id: e.id,
      label: e.label,
      list: a.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: h.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: u.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": O[0] || (O[0] = (P) => y(P)),
      onSearchchange: p,
      filterPredicate: (P, F) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
function H0(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function W0() {
}
function K0(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function G0(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Os(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function oo(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const wd = "[object RegExp]", Sd = "[object String]", xd = "[object Number]", Cd = "[object Boolean]", As = "[object Arguments]", Od = "[object Symbol]", Ad = "[object Date]", Ed = "[object Map]", Pd = "[object Set]", kd = "[object Array]", Y0 = "[object Function]", $d = "[object ArrayBuffer]", Hr = "[object Object]", X0 = "[object Error]", Td = "[object DataView]", Dd = "[object Uint8Array]", Fd = "[object Uint8ClampedArray]", Rd = "[object Uint16Array]", _d = "[object Uint32Array]", J0 = "[object BigUint64Array]", Id = "[object Int8Array]", Bd = "[object Int16Array]", Ld = "[object Int32Array]", Q0 = "[object BigInt64Array]", Md = "[object Float32Array]", Nd = "[object Float64Array]";
function Fn(e, t, n, r = /* @__PURE__ */ new Map(), o = void 0) {
  const a = o == null ? void 0 : o(e, t, n, r);
  if (a != null)
    return a;
  if (K0(e))
    return e;
  if (r.has(e))
    return r.get(e);
  if (Array.isArray(e)) {
    const s = new Array(e.length);
    r.set(e, s);
    for (let i = 0; i < e.length; i++)
      s[i] = Fn(e[i], i, n, r, o);
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
      s.set(i, Fn(c, i, n, r, o));
    return s;
  }
  if (e instanceof Set) {
    const s = /* @__PURE__ */ new Set();
    r.set(e, s);
    for (const i of e)
      s.add(Fn(i, void 0, n, r, o));
    return s;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e))
    return e.subarray();
  if (G0(e)) {
    const s = new (Object.getPrototypeOf(e)).constructor(e.length);
    r.set(e, s);
    for (let i = 0; i < e.length; i++)
      s[i] = Fn(e[i], i, n, r, o);
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
  if (typeof e == "object" && Z0(e)) {
    const s = Object.create(Object.getPrototypeOf(e));
    return r.set(e, s), Xn(s, e, n, r, o), s;
  }
  return e;
}
function Xn(e, t, n = e, r, o) {
  const a = [...Object.keys(t), ...Os(t)];
  for (let s = 0; s < a.length; s++) {
    const i = a[s], c = Object.getOwnPropertyDescriptor(e, i);
    (c == null || c.writable) && (e[i] = Fn(t[i], i, n, r, o));
  }
}
function Z0(e) {
  switch (oo(e)) {
    case As:
    case kd:
    case $d:
    case Td:
    case Cd:
    case Ad:
    case Md:
    case Nd:
    case Id:
    case Bd:
    case Ld:
    case Ed:
    case xd:
    case Hr:
    case wd:
    case Pd:
    case Sd:
    case Od:
    case Dd:
    case Fd:
    case Rd:
    case _d:
      return !0;
    default:
      return !1;
  }
}
function ut(e) {
  return Fn(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
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
    const o = n[r], a = t[o], s = e[o];
    Array.isArray(a) ? Array.isArray(s) ? e[o] = tr(s, a) : e[o] = tr([], a) : ao(a) ? ao(s) ? e[o] = tr(s, a) : e[o] = tr({}, a) : (s === void 0 || a !== void 0) && (e[o] = a);
  }
  return e;
}
function jd(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function ev(e, t, n) {
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
  let o = oo(e), a = oo(t);
  if (o === As && (o = Hr), a === As && (a = Hr), o !== a)
    return !1;
  switch (o) {
    case Sd:
      return e.toString() === t.toString();
    case xd: {
      const c = e.valueOf(), l = t.valueOf();
      return jd(c, l);
    }
    case Cd:
    case Ad:
    case Od:
      return Object.is(e.valueOf(), t.valueOf());
    case wd:
      return e.source === t.source && e.flags === t.flags;
    case Y0:
      return e === t;
  }
  n = n ?? /* @__PURE__ */ new Map();
  const s = n.get(e), i = n.get(t);
  if (s != null && i != null)
    return s === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (o) {
      case Ed: {
        if (e.size !== t.size)
          return !1;
        for (const [c, l] of e.entries())
          if (!t.has(c) || !nr(l, t.get(c), c, e, t, n, r))
            return !1;
        return !0;
      }
      case Pd: {
        if (e.size !== t.size)
          return !1;
        const c = Array.from(e.values()), l = Array.from(t.values());
        for (let u = 0; u < c.length; u++) {
          const d = c[u], h = l.findIndex((y) => nr(d, y, void 0, e, t, n, r));
          if (h === -1)
            return !1;
          l.splice(h, 1);
        }
        return !0;
      }
      case kd:
      case Dd:
      case Fd:
      case Rd:
      case _d:
      case J0:
      case Id:
      case Bd:
      case Ld:
      case Q0:
      case Md:
      case Nd: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let c = 0; c < e.length; c++)
          if (!nr(e[c], t[c], c, e, t, n, r))
            return !1;
        return !0;
      }
      case $d:
        return e.byteLength !== t.byteLength ? !1 : ir(new Uint8Array(e), new Uint8Array(t), n, r);
      case Td:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : ir(new Uint8Array(e), new Uint8Array(t), n, r);
      case X0:
        return e.name === t.name && e.message === t.message;
      case Hr: {
        if (!(ir(e.constructor, t.constructor, n, r) || ao(e) && ao(t)))
          return !1;
        const l = [...Object.keys(e), ...Os(e)], u = [...Object.keys(t), ...Os(t)];
        if (l.length !== u.length)
          return !1;
        for (let d = 0; d < l.length; d++) {
          const h = l[d], y = e[h];
          if (!Object.hasOwn(t, h))
            return !1;
          const p = t[h];
          if (!nr(y, p, h, e, t, n, r))
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
function tv(e, t) {
  return ev(e, t, W0);
}
var Es = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function rv(e) {
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
var ea, Ll;
function Vn() {
  return Ll || (Ll = 1, ea = TypeError), ea;
}
const ov = {}, av = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ov
}, Symbol.toStringTag, { value: "Module" })), Ps = /* @__PURE__ */ rv(av);
var ta, Ml;
function Co() {
  if (Ml) return ta;
  Ml = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, i = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, u = typeof WeakSet == "function" && WeakSet.prototype, d = u ? WeakSet.prototype.has : null, h = typeof WeakRef == "function" && WeakRef.prototype, y = h ? WeakRef.prototype.deref : null, p = Boolean.prototype.valueOf, m = Object.prototype.toString, f = Function.prototype.toString, g = String.prototype.match, w = String.prototype.slice, O = String.prototype.replace, P = String.prototype.toUpperCase, F = String.prototype.toLowerCase, U = RegExp.prototype.test, A = Array.prototype.concat, W = Array.prototype.join, B = Array.prototype.slice, $ = Math.floor, V = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, b = Object.getOwnPropertySymbols, E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, C = typeof Symbol == "function" && typeof Symbol.iterator == "object", S = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === C || !0) ? Symbol.toStringTag : null, K = Object.prototype.propertyIsEnumerable, L = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(_) {
    return _.__proto__;
  } : null);
  function R(_, M) {
    if (_ === 1 / 0 || _ === -1 / 0 || _ !== _ || _ && _ > -1e3 && _ < 1e3 || U.call(/e/, M))
      return M;
    var de = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof _ == "number") {
      var he = _ < 0 ? -$(-_) : $(_);
      if (he !== _) {
        var ye = String(he), se = w.call(M, ye.length + 1);
        return O.call(ye, de, "$&_") + "." + O.call(O.call(se, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return O.call(M, de, "$&_");
  }
  var X = Ps, ae = X.custom, Fe = _e(ae) ? ae : null, Ye = {
    __proto__: null,
    double: '"',
    single: "'"
  }, $e = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  ta = function _(M, de, he, ye) {
    var se = de || {};
    if (Ve(se, "quoteStyle") && !Ve(Ye, se.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Ve(se, "maxStringLength") && (typeof se.maxStringLength == "number" ? se.maxStringLength < 0 && se.maxStringLength !== 1 / 0 : se.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var zt = Ve(se, "customInspect") ? se.customInspect : !0;
    if (typeof zt != "boolean" && zt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Ve(se, "indent") && se.indent !== null && se.indent !== "	" && !(parseInt(se.indent, 10) === se.indent && se.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Ve(se, "numericSeparator") && typeof se.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var nn = se.numericSeparator;
    if (typeof M > "u")
      return "undefined";
    if (M === null)
      return "null";
    if (typeof M == "boolean")
      return M ? "true" : "false";
    if (typeof M == "string")
      return zi(M, se);
    if (typeof M == "number") {
      if (M === 0)
        return 1 / 0 / M > 0 ? "0" : "-0";
      var Xe = String(M);
      return nn ? R(M, Xe) : Xe;
    }
    if (typeof M == "bigint") {
      var Ut = String(M) + "n";
      return nn ? R(M, Ut) : Ut;
    }
    var Vo = typeof se.depth > "u" ? 5 : se.depth;
    if (typeof he > "u" && (he = 0), he >= Vo && Vo > 0 && typeof M == "object")
      return vt(M) ? "[Array]" : "[Object]";
    var An = Hp(se, he);
    if (typeof ye > "u")
      ye = [];
    else if (Vt(ye, M) >= 0)
      return "[Circular]";
    function lt(En, $r, Kp) {
      if ($r && (ye = B.call(ye), ye.push($r)), Kp) {
        var Qi = {
          depth: se.depth
        };
        return Ve(se, "quoteStyle") && (Qi.quoteStyle = se.quoteStyle), _(En, Qi, he + 1, ye);
      }
      return _(En, se, he + 1, ye);
    }
    if (typeof M == "function" && !Pe(M)) {
      var Hi = Sn(M), Wi = Pr(M, lt);
      return "[Function" + (Hi ? ": " + Hi : " (anonymous)") + "]" + (Wi.length > 0 ? " { " + W.call(Wi, ", ") + " }" : "");
    }
    if (_e(M)) {
      var Ki = C ? O.call(String(M), /^(Symbol\(.*\))_[^)]*$/, "$1") : E.call(M);
      return typeof M == "object" && !C ? Gn(Ki) : Ki;
    }
    if (Vp(M)) {
      for (var Yn = "<" + F.call(String(M.nodeName)), zo = M.attributes || [], kr = 0; kr < zo.length; kr++)
        Yn += " " + zo[kr].name + "=" + Me(Re(zo[kr].value), "double", se);
      return Yn += ">", M.childNodes && M.childNodes.length && (Yn += "..."), Yn += "</" + F.call(String(M.nodeName)) + ">", Yn;
    }
    if (vt(M)) {
      if (M.length === 0)
        return "[]";
      var Uo = Pr(M, lt);
      return An && !Up(Uo) ? "[" + qo(Uo, An) + "]" : "[ " + W.call(Uo, ", ") + " ]";
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
      return r && r.call(M, function(En, $r) {
        Gi.push(lt($r, M, !0) + " => " + lt(En, M));
      }), Ui("Map", n.call(M), Gi, An);
    }
    if (On(M)) {
      var Yi = [];
      return i && i.call(M, function(En) {
        Yi.push(lt(En, M));
      }), Ui("Set", s.call(M), Yi, An);
    }
    if (xn(M))
      return jo("WeakMap");
    if (qp(M))
      return jo("WeakSet");
    if (Cn(M))
      return jo("WeakRef");
    if (me(M))
      return Gn(lt(Number(M)));
    if (rt(M))
      return Gn(lt(V.call(M)));
    if (Ce(M))
      return Gn(p.call(M));
    if (we(M))
      return Gn(lt(String(M)));
    if (typeof window < "u" && M === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && M === globalThis || typeof Es < "u" && M === Es)
      return "{ [object globalThis] }";
    if (!bt(M) && !Pe(M)) {
      var Wo = Pr(M, lt), Xi = L ? L(M) === Object.prototype : M instanceof Object || M.constructor === Object, Ko = M instanceof Object ? "" : "null prototype", Ji = !Xi && S && Object(M) === M && S in M ? w.call(ot(M), 8, -1) : Ko ? "Object" : "", Wp = Xi || typeof M.constructor != "function" ? "" : M.constructor.name ? M.constructor.name + " " : "", Go = Wp + (Ji || Ko ? "[" + W.call(A.call([], Ji || [], Ko || []), ": ") + "] " : "");
      return Wo.length === 0 ? Go + "{}" : An ? Go + "{" + qo(Wo, An) + "}" : Go + "{ " + W.call(Wo, ", ") + " }";
    }
    return String(M);
  };
  function Me(_, M, de) {
    var he = de.quoteStyle || M, ye = Ye[he];
    return ye + _ + ye;
  }
  function Re(_) {
    return O.call(String(_), /"/g, "&quot;");
  }
  function Ne(_) {
    return !S || !(typeof _ == "object" && (S in _ || typeof _[S] < "u"));
  }
  function vt(_) {
    return ot(_) === "[object Array]" && Ne(_);
  }
  function bt(_) {
    return ot(_) === "[object Date]" && Ne(_);
  }
  function Pe(_) {
    return ot(_) === "[object RegExp]" && Ne(_);
  }
  function ue(_) {
    return ot(_) === "[object Error]" && Ne(_);
  }
  function we(_) {
    return ot(_) === "[object String]" && Ne(_);
  }
  function me(_) {
    return ot(_) === "[object Number]" && Ne(_);
  }
  function Ce(_) {
    return ot(_) === "[object Boolean]" && Ne(_);
  }
  function _e(_) {
    if (C)
      return _ && typeof _ == "object" && _ instanceof Symbol;
    if (typeof _ == "symbol")
      return !0;
    if (!_ || typeof _ != "object" || !E)
      return !1;
    try {
      return E.call(_), !0;
    } catch {
    }
    return !1;
  }
  function rt(_) {
    if (!_ || typeof _ != "object" || !V)
      return !1;
    try {
      return V.call(_), !0;
    } catch {
    }
    return !1;
  }
  var Ie = Object.prototype.hasOwnProperty || function(_) {
    return _ in this;
  };
  function Ve(_, M) {
    return Ie.call(_, M);
  }
  function ot(_) {
    return m.call(_);
  }
  function Sn(_) {
    if (_.name)
      return _.name;
    var M = g.call(f.call(_), /^function\s*([\w$]+)/);
    return M ? M[1] : null;
  }
  function Vt(_, M) {
    if (_.indexOf)
      return _.indexOf(M);
    for (var de = 0, he = _.length; de < he; de++)
      if (_[de] === M)
        return de;
    return -1;
  }
  function it(_) {
    if (!n || !_ || typeof _ != "object")
      return !1;
    try {
      n.call(_);
      try {
        s.call(_);
      } catch {
        return !0;
      }
      return _ instanceof Map;
    } catch {
    }
    return !1;
  }
  function xn(_) {
    if (!l || !_ || typeof _ != "object")
      return !1;
    try {
      l.call(_, l);
      try {
        d.call(_, d);
      } catch {
        return !0;
      }
      return _ instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Cn(_) {
    if (!y || !_ || typeof _ != "object")
      return !1;
    try {
      return y.call(_), !0;
    } catch {
    }
    return !1;
  }
  function On(_) {
    if (!s || !_ || typeof _ != "object")
      return !1;
    try {
      s.call(_);
      try {
        n.call(_);
      } catch {
        return !0;
      }
      return _ instanceof Set;
    } catch {
    }
    return !1;
  }
  function qp(_) {
    if (!d || !_ || typeof _ != "object")
      return !1;
    try {
      d.call(_, d);
      try {
        l.call(_, l);
      } catch {
        return !0;
      }
      return _ instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Vp(_) {
    return !_ || typeof _ != "object" ? !1 : typeof HTMLElement < "u" && _ instanceof HTMLElement ? !0 : typeof _.nodeName == "string" && typeof _.getAttribute == "function";
  }
  function zi(_, M) {
    if (_.length > M.maxStringLength) {
      var de = _.length - M.maxStringLength, he = "... " + de + " more character" + (de > 1 ? "s" : "");
      return zi(w.call(_, 0, M.maxStringLength), M) + he;
    }
    var ye = $e[M.quoteStyle || "single"];
    ye.lastIndex = 0;
    var se = O.call(O.call(_, ye, "\\$1"), /[\x00-\x1f]/g, zp);
    return Me(se, "single", M);
  }
  function zp(_) {
    var M = _.charCodeAt(0), de = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[M];
    return de ? "\\" + de : "\\x" + (M < 16 ? "0" : "") + P.call(M.toString(16));
  }
  function Gn(_) {
    return "Object(" + _ + ")";
  }
  function jo(_) {
    return _ + " { ? }";
  }
  function Ui(_, M, de, he) {
    var ye = he ? qo(de, he) : W.call(de, ", ");
    return _ + " (" + M + ") {" + ye + "}";
  }
  function Up(_) {
    for (var M = 0; M < _.length; M++)
      if (Vt(_[M], `
`) >= 0)
        return !1;
    return !0;
  }
  function Hp(_, M) {
    var de;
    if (_.indent === "	")
      de = "	";
    else if (typeof _.indent == "number" && _.indent > 0)
      de = W.call(Array(_.indent + 1), " ");
    else
      return null;
    return {
      base: de,
      prev: W.call(Array(M + 1), de)
    };
  }
  function qo(_, M) {
    if (_.length === 0)
      return "";
    var de = `
` + M.prev + M.base;
    return de + W.call(_, "," + de) + `
` + M.prev;
  }
  function Pr(_, M) {
    var de = vt(_), he = [];
    if (de) {
      he.length = _.length;
      for (var ye = 0; ye < _.length; ye++)
        he[ye] = Ve(_, ye) ? M(_[ye], _) : "";
    }
    var se = typeof b == "function" ? b(_) : [], zt;
    if (C) {
      zt = {};
      for (var nn = 0; nn < se.length; nn++)
        zt["$" + se[nn]] = se[nn];
    }
    for (var Xe in _)
      Ve(_, Xe) && (de && String(Number(Xe)) === Xe && Xe < _.length || C && zt["$" + Xe] instanceof Symbol || (U.call(/[^\w$]/, Xe) ? he.push(M(Xe, _) + ": " + M(_[Xe], _)) : he.push(Xe + ": " + M(_[Xe], _))));
    if (typeof b == "function")
      for (var Ut = 0; Ut < se.length; Ut++)
        K.call(_, se[Ut]) && he.push("[" + M(se[Ut]) + "]: " + M(_[se[Ut]], _));
    return he;
  }
  return ta;
}
var na, Nl;
function sv() {
  if (Nl) return na;
  Nl = 1;
  var e = /* @__PURE__ */ Co(), t = /* @__PURE__ */ Vn(), n = function(i, c, l) {
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
  return na = function() {
    var c, l = {
      assert: function(u) {
        if (!l.has(u))
          throw new t("Side channel does not contain " + e(u));
      },
      delete: function(u) {
        var d = c && c.next, h = s(c, u);
        return h && d && d === h && (c = void 0), !!h;
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
  }, na;
}
var ra, jl;
function qd() {
  return jl || (jl = 1, ra = Object), ra;
}
var oa, ql;
function iv() {
  return ql || (ql = 1, oa = Error), oa;
}
var aa, Vl;
function lv() {
  return Vl || (Vl = 1, aa = EvalError), aa;
}
var sa, zl;
function uv() {
  return zl || (zl = 1, sa = RangeError), sa;
}
var ia, Ul;
function cv() {
  return Ul || (Ul = 1, ia = ReferenceError), ia;
}
var la, Hl;
function dv() {
  return Hl || (Hl = 1, la = SyntaxError), la;
}
var ua, Wl;
function fv() {
  return Wl || (Wl = 1, ua = URIError), ua;
}
var ca, Kl;
function pv() {
  return Kl || (Kl = 1, ca = Math.abs), ca;
}
var da, Gl;
function mv() {
  return Gl || (Gl = 1, da = Math.floor), da;
}
var fa, Yl;
function hv() {
  return Yl || (Yl = 1, fa = Math.max), fa;
}
var pa, Xl;
function yv() {
  return Xl || (Xl = 1, pa = Math.min), pa;
}
var ma, Jl;
function gv() {
  return Jl || (Jl = 1, ma = Math.pow), ma;
}
var ha, Ql;
function vv() {
  return Ql || (Ql = 1, ha = Math.round), ha;
}
var ya, Zl;
function bv() {
  return Zl || (Zl = 1, ya = Number.isNaN || function(t) {
    return t !== t;
  }), ya;
}
var ga, eu;
function wv() {
  if (eu) return ga;
  eu = 1;
  var e = /* @__PURE__ */ bv();
  return ga = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, ga;
}
var va, tu;
function Sv() {
  return tu || (tu = 1, va = Object.getOwnPropertyDescriptor), va;
}
var ba, nu;
function Vd() {
  if (nu) return ba;
  nu = 1;
  var e = /* @__PURE__ */ Sv();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ba = e, ba;
}
var wa, ru;
function xv() {
  if (ru) return wa;
  ru = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return wa = e, wa;
}
var Sa, ou;
function Cv() {
  return ou || (ou = 1, Sa = function() {
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
  }), Sa;
}
var xa, au;
function Ov() {
  if (au) return xa;
  au = 1;
  var e = typeof Symbol < "u" && Symbol, t = Cv();
  return xa = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, xa;
}
var Ca, su;
function zd() {
  return su || (su = 1, Ca = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ca;
}
var Oa, iu;
function Ud() {
  if (iu) return Oa;
  iu = 1;
  var e = /* @__PURE__ */ qd();
  return Oa = e.getPrototypeOf || null, Oa;
}
var Aa, lu;
function Av() {
  if (lu) return Aa;
  lu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(c, l) {
    for (var u = [], d = 0; d < c.length; d += 1)
      u[d] = c[d];
    for (var h = 0; h < l.length; h += 1)
      u[h + c.length] = l[h];
    return u;
  }, a = function(c, l) {
    for (var u = [], d = l, h = 0; d < c.length; d += 1, h += 1)
      u[h] = c[d];
    return u;
  }, s = function(i, c) {
    for (var l = "", u = 0; u < i.length; u += 1)
      l += i[u], u + 1 < i.length && (l += c);
    return l;
  };
  return Aa = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var u = a(arguments, 1), d, h = function() {
      if (this instanceof d) {
        var g = l.apply(
          this,
          o(u, arguments)
        );
        return Object(g) === g ? g : this;
      }
      return l.apply(
        c,
        o(u, arguments)
      );
    }, y = n(0, l.length - u.length), p = [], m = 0; m < y; m++)
      p[m] = "$" + m;
    if (d = Function("binder", "return function (" + s(p, ",") + "){ return binder.apply(this,arguments); }")(h), l.prototype) {
      var f = function() {
      };
      f.prototype = l.prototype, d.prototype = new f(), f.prototype = null;
    }
    return d;
  }, Aa;
}
var Ea, uu;
function Oo() {
  if (uu) return Ea;
  uu = 1;
  var e = Av();
  return Ea = Function.prototype.bind || e, Ea;
}
var Pa, cu;
function hi() {
  return cu || (cu = 1, Pa = Function.prototype.call), Pa;
}
var ka, du;
function Hd() {
  return du || (du = 1, ka = Function.prototype.apply), ka;
}
var $a, fu;
function Ev() {
  return fu || (fu = 1, $a = typeof Reflect < "u" && Reflect && Reflect.apply), $a;
}
var Ta, pu;
function Pv() {
  if (pu) return Ta;
  pu = 1;
  var e = Oo(), t = Hd(), n = hi(), r = Ev();
  return Ta = r || e.call(n, t), Ta;
}
var Da, mu;
function Wd() {
  if (mu) return Da;
  mu = 1;
  var e = Oo(), t = /* @__PURE__ */ Vn(), n = hi(), r = Pv();
  return Da = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Da;
}
var Fa, hu;
function kv() {
  if (hu) return Fa;
  hu = 1;
  var e = Wd(), t = /* @__PURE__ */ Vd(), n;
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
  return Fa = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(i) {
      return a(i == null ? i : o(i));
    }
  ) : !1, Fa;
}
var Ra, yu;
function $v() {
  if (yu) return Ra;
  yu = 1;
  var e = zd(), t = Ud(), n = /* @__PURE__ */ kv();
  return Ra = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Ra;
}
var _a, gu;
function Tv() {
  if (gu) return _a;
  gu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = Oo();
  return _a = n.call(e, t), _a;
}
var Ia, vu;
function yi() {
  if (vu) return Ia;
  vu = 1;
  var e, t = /* @__PURE__ */ qd(), n = /* @__PURE__ */ iv(), r = /* @__PURE__ */ lv(), o = /* @__PURE__ */ uv(), a = /* @__PURE__ */ cv(), s = /* @__PURE__ */ dv(), i = /* @__PURE__ */ Vn(), c = /* @__PURE__ */ fv(), l = /* @__PURE__ */ pv(), u = /* @__PURE__ */ mv(), d = /* @__PURE__ */ hv(), h = /* @__PURE__ */ yv(), y = /* @__PURE__ */ gv(), p = /* @__PURE__ */ vv(), m = /* @__PURE__ */ wv(), f = Function, g = function(Pe) {
    try {
      return f('"use strict"; return (' + Pe + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ Vd(), O = /* @__PURE__ */ xv(), P = function() {
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
  }() : P, U = Ov()(), A = $v(), W = Ud(), B = zd(), $ = Hd(), V = hi(), b = {}, E = typeof Uint8Array > "u" || !A ? e : A(Uint8Array), C = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": U && A ? A([][Symbol.iterator]()) : e,
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
    "%IteratorPrototype%": U && A ? A(A([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !U || !A ? e : A((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !U || !A ? e : A((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": U && A ? A(""[Symbol.iterator]()) : e,
    "%Symbol%": U ? Symbol : e,
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
    "%Math.min%": h,
    "%Math.pow%": y,
    "%Math.round%": p,
    "%Math.sign%": m,
    "%Reflect.getPrototypeOf%": B
  };
  if (A)
    try {
      null.error;
    } catch (Pe) {
      var S = A(A(Pe));
      C["%Error.prototype%"] = S;
    }
  var K = function Pe(ue) {
    var we;
    if (ue === "%AsyncFunction%")
      we = g("async function () {}");
    else if (ue === "%GeneratorFunction%")
      we = g("function* () {}");
    else if (ue === "%AsyncGeneratorFunction%")
      we = g("async function* () {}");
    else if (ue === "%AsyncGenerator%") {
      var me = Pe("%AsyncGeneratorFunction%");
      me && (we = me.prototype);
    } else if (ue === "%AsyncIteratorPrototype%") {
      var Ce = Pe("%AsyncGenerator%");
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
  }, R = Oo(), X = /* @__PURE__ */ Tv(), ae = R.call(V, Array.prototype.concat), Fe = R.call($, Array.prototype.splice), Ye = R.call(V, String.prototype.replace), $e = R.call(V, String.prototype.slice), Me = R.call(V, RegExp.prototype.exec), Re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, vt = function(ue) {
    var we = $e(ue, 0, 1), me = $e(ue, -1);
    if (we === "%" && me !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (me === "%" && we !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var Ce = [];
    return Ye(ue, Re, function(_e, rt, Ie, Ve) {
      Ce[Ce.length] = Ie ? Ye(Ve, Ne, "$1") : rt || _e;
    }), Ce;
  }, bt = function(ue, we) {
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
  return Ia = function(ue, we) {
    if (typeof ue != "string" || ue.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (Me(/^%?[^%]*%?$/, ue) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var me = vt(ue), Ce = me.length > 0 ? me[0] : "", _e = bt("%" + Ce + "%", we), rt = _e.name, Ie = _e.value, Ve = !1, ot = _e.alias;
    ot && (Ce = ot[0], Fe(me, ae([0, 1], ot)));
    for (var Sn = 1, Vt = !0; Sn < me.length; Sn += 1) {
      var it = me[Sn], xn = $e(it, 0, 1), Cn = $e(it, -1);
      if ((xn === '"' || xn === "'" || xn === "`" || Cn === '"' || Cn === "'" || Cn === "`") && xn !== Cn)
        throw new s("property names with quotes must have matching quotes");
      if ((it === "constructor" || !Vt) && (Ve = !0), Ce += "." + it, rt = "%" + Ce + "%", X(C, rt))
        Ie = C[rt];
      else if (Ie != null) {
        if (!(it in Ie)) {
          if (!we)
            throw new i("base intrinsic for " + ue + " exists, but the property is not available.");
          return;
        }
        if (w && Sn + 1 >= me.length) {
          var On = w(Ie, it);
          Vt = !!On, Vt && "get" in On && !("originalValue" in On.get) ? Ie = On.get : Ie = Ie[it];
        } else
          Vt = X(Ie, it), Ie = Ie[it];
        Vt && !Ve && (C[rt] = Ie);
      }
    }
    return Ie;
  }, Ia;
}
var Ba, bu;
function Kd() {
  if (bu) return Ba;
  bu = 1;
  var e = /* @__PURE__ */ yi(), t = Wd(), n = t([e("%String.prototype.indexOf%")]);
  return Ba = function(o, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof s == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Ba;
}
var La, wu;
function Gd() {
  if (wu) return La;
  wu = 1;
  var e = /* @__PURE__ */ yi(), t = /* @__PURE__ */ Kd(), n = /* @__PURE__ */ Co(), r = /* @__PURE__ */ Vn(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), i = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return La = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var d, h = {
      assert: function(y) {
        if (!h.has(y))
          throw new r("Side channel does not contain " + n(y));
      },
      delete: function(y) {
        if (d) {
          var p = c(d, y);
          return l(d) === 0 && (d = void 0), p;
        }
        return !1;
      },
      get: function(y) {
        if (d)
          return a(d, y);
      },
      has: function(y) {
        return d ? i(d, y) : !1;
      },
      set: function(y, p) {
        d || (d = new o()), s(d, y, p);
      }
    };
    return h;
  }, La;
}
var Ma, Su;
function Dv() {
  if (Su) return Ma;
  Su = 1;
  var e = /* @__PURE__ */ yi(), t = /* @__PURE__ */ Kd(), n = /* @__PURE__ */ Co(), r = Gd(), o = /* @__PURE__ */ Vn(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), i = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Ma = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var d, h, y = {
        assert: function(p) {
          if (!y.has(p))
            throw new o("Side channel does not contain " + n(p));
        },
        delete: function(p) {
          if (a && p && (typeof p == "object" || typeof p == "function")) {
            if (d)
              return l(d, p);
          } else if (r && h)
            return h.delete(p);
          return !1;
        },
        get: function(p) {
          return a && p && (typeof p == "object" || typeof p == "function") && d ? s(d, p) : h && h.get(p);
        },
        has: function(p) {
          return a && p && (typeof p == "object" || typeof p == "function") && d ? c(d, p) : !!h && h.has(p);
        },
        set: function(p, m) {
          a && p && (typeof p == "object" || typeof p == "function") ? (d || (d = new a()), i(d, p, m)) : r && (h || (h = r()), h.set(p, m));
        }
      };
      return y;
    }
  ) : r, Ma;
}
var Na, xu;
function Fv() {
  if (xu) return Na;
  xu = 1;
  var e = /* @__PURE__ */ Vn(), t = /* @__PURE__ */ Co(), n = sv(), r = Gd(), o = Dv(), a = o || r || n;
  return Na = function() {
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
  }, Na;
}
var ja, Cu;
function gi() {
  if (Cu) return ja;
  Cu = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return ja = {
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
  }, ja;
}
var qa, Ou;
function Yd() {
  if (Ou) return qa;
  Ou = 1;
  var e = /* @__PURE__ */ gi(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var f = [], g = 0; g < 256; ++g)
      f.push("%" + ((g < 16 ? "0" : "") + g.toString(16)).toUpperCase());
    return f;
  }(), o = function(g) {
    for (; g.length > 1; ) {
      var w = g.pop(), O = w.obj[w.prop];
      if (n(O)) {
        for (var P = [], F = 0; F < O.length; ++F)
          typeof O[F] < "u" && P.push(O[F]);
        w.obj[w.prop] = P;
      }
    }
  }, a = function(g, w) {
    for (var O = w && w.plainObjects ? { __proto__: null } : {}, P = 0; P < g.length; ++P)
      typeof g[P] < "u" && (O[P] = g[P]);
    return O;
  }, s = function f(g, w, O) {
    if (!w)
      return g;
    if (typeof w != "object" && typeof w != "function") {
      if (n(g))
        g.push(w);
      else if (g && typeof g == "object")
        (O && (O.plainObjects || O.allowPrototypes) || !t.call(Object.prototype, w)) && (g[w] = !0);
      else
        return [g, w];
      return g;
    }
    if (!g || typeof g != "object")
      return [g].concat(w);
    var P = g;
    return n(g) && !n(w) && (P = a(g, O)), n(g) && n(w) ? (w.forEach(function(F, U) {
      if (t.call(g, U)) {
        var A = g[U];
        A && typeof A == "object" && F && typeof F == "object" ? g[U] = f(A, F, O) : g.push(F);
      } else
        g[U] = F;
    }), g) : Object.keys(w).reduce(function(F, U) {
      var A = w[U];
      return t.call(F, U) ? F[U] = f(F[U], A, O) : F[U] = A, F;
    }, P);
  }, i = function(g, w) {
    return Object.keys(w).reduce(function(O, P) {
      return O[P] = w[P], O;
    }, g);
  }, c = function(f, g, w) {
    var O = f.replace(/\+/g, " ");
    if (w === "iso-8859-1")
      return O.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(O);
    } catch {
      return O;
    }
  }, l = 1024, u = function(g, w, O, P, F) {
    if (g.length === 0)
      return g;
    var U = g;
    if (typeof g == "symbol" ? U = Symbol.prototype.toString.call(g) : typeof g != "string" && (U = String(g)), O === "iso-8859-1")
      return escape(U).replace(/%u[0-9a-f]{4}/gi, function(E) {
        return "%26%23" + parseInt(E.slice(2), 16) + "%3B";
      });
    for (var A = "", W = 0; W < U.length; W += l) {
      for (var B = U.length >= l ? U.slice(W, W + l) : U, $ = [], V = 0; V < B.length; ++V) {
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
  }, d = function(g) {
    for (var w = [{ obj: { o: g }, prop: "o" }], O = [], P = 0; P < w.length; ++P)
      for (var F = w[P], U = F.obj[F.prop], A = Object.keys(U), W = 0; W < A.length; ++W) {
        var B = A[W], $ = U[B];
        typeof $ == "object" && $ !== null && O.indexOf($) === -1 && (w.push({ obj: U, prop: B }), O.push($));
      }
    return o(w), g;
  }, h = function(g) {
    return Object.prototype.toString.call(g) === "[object RegExp]";
  }, y = function(g) {
    return !g || typeof g != "object" ? !1 : !!(g.constructor && g.constructor.isBuffer && g.constructor.isBuffer(g));
  }, p = function(g, w) {
    return [].concat(g, w);
  }, m = function(g, w) {
    if (n(g)) {
      for (var O = [], P = 0; P < g.length; P += 1)
        O.push(w(g[P]));
      return O;
    }
    return w(g);
  };
  return qa = {
    arrayToObject: a,
    assign: i,
    combine: p,
    compact: d,
    decode: c,
    encode: u,
    isBuffer: y,
    isRegExp: h,
    maybeMap: m,
    merge: s
  }, qa;
}
var Va, Au;
function Rv() {
  if (Au) return Va;
  Au = 1;
  var e = Fv(), t = /* @__PURE__ */ Yd(), n = /* @__PURE__ */ gi(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(f) {
      return f + "[]";
    },
    comma: "comma",
    indices: function(f, g) {
      return f + "[" + g + "]";
    },
    repeat: function(f) {
      return f;
    }
  }, a = Array.isArray, s = Array.prototype.push, i = function(m, f) {
    s.apply(m, a(f) ? f : [f]);
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
  }, h = {}, y = function m(f, g, w, O, P, F, U, A, W, B, $, V, b, E, C, S, K, L) {
    for (var R = f, X = L, ae = 0, Fe = !1; (X = X.get(h)) !== void 0 && !Fe; ) {
      var Ye = X.get(f);
      if (ae += 1, typeof Ye < "u") {
        if (Ye === ae)
          throw new RangeError("Cyclic object value");
        Fe = !0;
      }
      typeof X.get(h) > "u" && (ae = 0);
    }
    if (typeof B == "function" ? R = B(g, R) : R instanceof Date ? R = b(R) : w === "comma" && a(R) && (R = t.maybeMap(R, function(rt) {
      return rt instanceof Date ? b(rt) : rt;
    })), R === null) {
      if (F)
        return W && !S ? W(g, u.encoder, K, "key", E) : g;
      R = "";
    }
    if (d(R) || t.isBuffer(R)) {
      if (W) {
        var $e = S ? g : W(g, u.encoder, K, "key", E);
        return [C($e) + "=" + C(W(R, u.encoder, K, "value", E))];
      }
      return [C(g) + "=" + C(String(R))];
    }
    var Me = [];
    if (typeof R > "u")
      return Me;
    var Re;
    if (w === "comma" && a(R))
      S && W && (R = t.maybeMap(R, W)), Re = [{ value: R.length > 0 ? R.join(",") || null : void 0 }];
    else if (a(B))
      Re = B;
    else {
      var Ne = Object.keys(R);
      Re = $ ? Ne.sort($) : Ne;
    }
    var vt = A ? String(g).replace(/\./g, "%2E") : String(g), bt = O && a(R) && R.length === 1 ? vt + "[]" : vt;
    if (P && a(R) && R.length === 0)
      return bt + "[]";
    for (var Pe = 0; Pe < Re.length; ++Pe) {
      var ue = Re[Pe], we = typeof ue == "object" && ue && typeof ue.value < "u" ? ue.value : R[ue];
      if (!(U && we === null)) {
        var me = V && A ? String(ue).replace(/\./g, "%2E") : String(ue), Ce = a(R) ? typeof w == "function" ? w(bt, me) : bt : bt + (V ? "." + me : "[" + me + "]");
        L.set(f, ae);
        var _e = e();
        _e.set(h, L), i(Me, m(
          we,
          Ce,
          w,
          O,
          P,
          F,
          U,
          A,
          w === "comma" && S && a(R) ? null : W,
          B,
          $,
          V,
          b,
          E,
          C,
          S,
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
    var g = f.charset || u.charset;
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
    var U = typeof f.allowDots > "u" ? f.encodeDotInKeys === !0 ? !0 : u.allowDots : !!f.allowDots;
    return {
      addQueryPrefix: typeof f.addQueryPrefix == "boolean" ? f.addQueryPrefix : u.addQueryPrefix,
      allowDots: U,
      allowEmptyArrays: typeof f.allowEmptyArrays == "boolean" ? !!f.allowEmptyArrays : u.allowEmptyArrays,
      arrayFormat: F,
      charset: g,
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
  return Va = function(m, f) {
    var g = m, w = p(f), O, P;
    typeof w.filter == "function" ? (P = w.filter, g = P("", g)) : a(w.filter) && (P = w.filter, O = P);
    var F = [];
    if (typeof g != "object" || g === null)
      return "";
    var U = o[w.arrayFormat], A = U === "comma" && w.commaRoundTrip;
    O || (O = Object.keys(g)), w.sort && O.sort(w.sort);
    for (var W = e(), B = 0; B < O.length; ++B) {
      var $ = O[B], V = g[$];
      w.skipNulls && V === null || i(F, y(
        V,
        $,
        U,
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
  }, Va;
}
var za, Eu;
function _v() {
  if (Eu) return za;
  Eu = 1;
  var e = /* @__PURE__ */ Yd(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
  }, o = function(h) {
    return h.replace(/&#(\d+);/g, function(y, p) {
      return String.fromCharCode(parseInt(p, 10));
    });
  }, a = function(h, y, p) {
    if (h && typeof h == "string" && y.comma && h.indexOf(",") > -1)
      return h.split(",");
    if (y.throwOnLimitExceeded && p >= y.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + y.arrayLimit + " element" + (y.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return h;
  }, s = "utf8=%26%2310003%3B", i = "utf8=%E2%9C%93", c = function(y, p) {
    var m = { __proto__: null }, f = p.ignoreQueryPrefix ? y.replace(/^\?/, "") : y;
    f = f.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var g = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit, w = f.split(
      p.delimiter,
      p.throwOnLimitExceeded ? g + 1 : g
    );
    if (p.throwOnLimitExceeded && w.length > g)
      throw new RangeError("Parameter limit exceeded. Only " + g + " parameter" + (g === 1 ? "" : "s") + " allowed.");
    var O = -1, P, F = p.charset;
    if (p.charsetSentinel)
      for (P = 0; P < w.length; ++P)
        w[P].indexOf("utf8=") === 0 && (w[P] === i ? F = "utf-8" : w[P] === s && (F = "iso-8859-1"), O = P, P = w.length);
    for (P = 0; P < w.length; ++P)
      if (P !== O) {
        var U = w[P], A = U.indexOf("]="), W = A === -1 ? U.indexOf("=") : A + 1, B, $;
        W === -1 ? (B = p.decoder(U, r.decoder, F, "key"), $ = p.strictNullHandling ? null : "") : (B = p.decoder(U.slice(0, W), r.decoder, F, "key"), $ = e.maybeMap(
          a(
            U.slice(W + 1),
            p,
            n(m[B]) ? m[B].length : 0
          ),
          function(b) {
            return p.decoder(b, r.decoder, F, "value");
          }
        )), $ && p.interpretNumericEntities && F === "iso-8859-1" && ($ = o(String($))), U.indexOf("[]=") > -1 && ($ = n($) ? [$] : $);
        var V = t.call(m, B);
        V && p.duplicates === "combine" ? m[B] = e.combine(m[B], $) : (!V || p.duplicates === "last") && (m[B] = $);
      }
    return m;
  }, l = function(h, y, p, m) {
    var f = 0;
    if (h.length > 0 && h[h.length - 1] === "[]") {
      var g = h.slice(0, -1).join("");
      f = Array.isArray(y) && y[g] ? y[g].length : 0;
    }
    for (var w = m ? y : a(y, p, f), O = h.length - 1; O >= 0; --O) {
      var P, F = h[O];
      if (F === "[]" && p.parseArrays)
        P = p.allowEmptyArrays && (w === "" || p.strictNullHandling && w === null) ? [] : e.combine([], w);
      else {
        P = p.plainObjects ? { __proto__: null } : {};
        var U = F.charAt(0) === "[" && F.charAt(F.length - 1) === "]" ? F.slice(1, -1) : F, A = p.decodeDotInKeys ? U.replace(/%2E/g, ".") : U, W = parseInt(A, 10);
        !p.parseArrays && A === "" ? P = { 0: w } : !isNaN(W) && F !== A && String(W) === A && W >= 0 && p.parseArrays && W <= p.arrayLimit ? (P = [], P[W] = w) : A !== "__proto__" && (P[A] = w);
      }
      w = P;
    }
    return w;
  }, u = function(y, p, m, f) {
    if (y) {
      var g = m.allowDots ? y.replace(/\.([^.[]+)/g, "[$1]") : y, w = /(\[[^[\]]*])/, O = /(\[[^[\]]*])/g, P = m.depth > 0 && w.exec(g), F = P ? g.slice(0, P.index) : g, U = [];
      if (F) {
        if (!m.plainObjects && t.call(Object.prototype, F) && !m.allowPrototypes)
          return;
        U.push(F);
      }
      for (var A = 0; m.depth > 0 && (P = O.exec(g)) !== null && A < m.depth; ) {
        if (A += 1, !m.plainObjects && t.call(Object.prototype, P[1].slice(1, -1)) && !m.allowPrototypes)
          return;
        U.push(P[1]);
      }
      if (P) {
        if (m.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + m.depth + " and strictDepth is true");
        U.push("[" + g.slice(P.index) + "]");
      }
      return l(U, p, m, f);
    }
  }, d = function(y) {
    if (!y)
      return r;
    if (typeof y.allowEmptyArrays < "u" && typeof y.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof y.decodeDotInKeys < "u" && typeof y.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (y.decoder !== null && typeof y.decoder < "u" && typeof y.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof y.charset < "u" && y.charset !== "utf-8" && y.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof y.throwOnLimitExceeded < "u" && typeof y.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var p = typeof y.charset > "u" ? r.charset : y.charset, m = typeof y.duplicates > "u" ? r.duplicates : y.duplicates;
    if (m !== "combine" && m !== "first" && m !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var f = typeof y.allowDots > "u" ? y.decodeDotInKeys === !0 ? !0 : r.allowDots : !!y.allowDots;
    return {
      allowDots: f,
      allowEmptyArrays: typeof y.allowEmptyArrays == "boolean" ? !!y.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof y.allowPrototypes == "boolean" ? y.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof y.allowSparse == "boolean" ? y.allowSparse : r.allowSparse,
      arrayLimit: typeof y.arrayLimit == "number" ? y.arrayLimit : r.arrayLimit,
      charset: p,
      charsetSentinel: typeof y.charsetSentinel == "boolean" ? y.charsetSentinel : r.charsetSentinel,
      comma: typeof y.comma == "boolean" ? y.comma : r.comma,
      decodeDotInKeys: typeof y.decodeDotInKeys == "boolean" ? y.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof y.decoder == "function" ? y.decoder : r.decoder,
      delimiter: typeof y.delimiter == "string" || e.isRegExp(y.delimiter) ? y.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof y.depth == "number" || y.depth === !1 ? +y.depth : r.depth,
      duplicates: m,
      ignoreQueryPrefix: y.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof y.interpretNumericEntities == "boolean" ? y.interpretNumericEntities : r.interpretNumericEntities,
      parameterLimit: typeof y.parameterLimit == "number" ? y.parameterLimit : r.parameterLimit,
      parseArrays: y.parseArrays !== !1,
      plainObjects: typeof y.plainObjects == "boolean" ? y.plainObjects : r.plainObjects,
      strictDepth: typeof y.strictDepth == "boolean" ? !!y.strictDepth : r.strictDepth,
      strictNullHandling: typeof y.strictNullHandling == "boolean" ? y.strictNullHandling : r.strictNullHandling,
      throwOnLimitExceeded: typeof y.throwOnLimitExceeded == "boolean" ? y.throwOnLimitExceeded : !1
    };
  };
  return za = function(h, y) {
    var p = d(y);
    if (h === "" || h === null || typeof h > "u")
      return p.plainObjects ? { __proto__: null } : {};
    for (var m = typeof h == "string" ? c(h, p) : h, f = p.plainObjects ? { __proto__: null } : {}, g = Object.keys(m), w = 0; w < g.length; ++w) {
      var O = g[w], P = u(O, m[O], p, typeof h == "string");
      f = e.merge(f, P, p);
    }
    return p.allowSparse === !0 ? f : e.compact(f);
  }, za;
}
var Ua, Pu;
function Iv() {
  if (Pu) return Ua;
  Pu = 1;
  var e = /* @__PURE__ */ Rv(), t = /* @__PURE__ */ _v(), n = /* @__PURE__ */ gi();
  return Ua = {
    formats: n,
    parse: t,
    stringify: e
  }, Ua;
}
var ku = /* @__PURE__ */ Iv();
function Xd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Bv } = Object.prototype, { getPrototypeOf: vi } = Object, { iterator: Ao, toStringTag: Jd } = Symbol, Eo = /* @__PURE__ */ ((e) => (t) => {
  const n = Bv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), yt = (e) => (e = e.toLowerCase(), (t) => Eo(t) === e), Po = (e) => (t) => typeof t === e, { isArray: zn } = Array, dr = Po("undefined");
function Lv(e) {
  return e !== null && !dr(e) && e.constructor !== null && !dr(e.constructor) && We(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Qd = yt("ArrayBuffer");
function Mv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Qd(e.buffer), t;
}
const Nv = Po("string"), We = Po("function"), Zd = Po("number"), ko = (e) => e !== null && typeof e == "object", jv = (e) => e === !0 || e === !1, Wr = (e) => {
  if (Eo(e) !== "object")
    return !1;
  const t = vi(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Jd in e) && !(Ao in e);
}, qv = yt("Date"), Vv = yt("File"), zv = yt("Blob"), Uv = yt("FileList"), Hv = (e) => ko(e) && We(e.pipe), Wv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || We(e.append) && ((t = Eo(e)) === "formdata" || // detect form-data instance
  t === "object" && We(e.toString) && e.toString() === "[object FormData]"));
}, Kv = yt("URLSearchParams"), [Gv, Yv, Xv, Jv] = ["ReadableStream", "Request", "Response", "Headers"].map(yt), Qv = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), zn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (r = 0; r < s; r++)
      i = a[r], t.call(null, e[i], i, e);
  }
}
function ef(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, tf = (e) => !dr(e) && e !== sn;
function ks() {
  const { caseless: e } = tf(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && ef(t, o) || o;
    Wr(t[a]) && Wr(r) ? t[a] = ks(t[a], r) : Wr(r) ? t[a] = ks({}, r) : zn(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && vr(arguments[r], n);
  return t;
}
const Zv = (e, t, n, { allOwnKeys: r } = {}) => (vr(t, (o, a) => {
  n && We(o) ? e[a] = Xd(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), eb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), tb = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, nb = (e, t, n, r) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && vi(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, rb = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ob = (e) => {
  if (!e) return null;
  if (zn(e)) return e;
  let t = e.length;
  if (!Zd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, ab = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && vi(Uint8Array)), sb = (e, t) => {
  const r = (e && e[Ao]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, ib = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, lb = yt("HTMLFormElement"), ub = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), $u = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), cb = yt("RegExp"), nf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  vr(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, db = (e) => {
  nf(e, (t, n) => {
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
}, fb = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return zn(e) ? r(e) : r(String(e).split(t)), n;
}, pb = () => {
}, mb = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function hb(e) {
  return !!(e && We(e.append) && e[Jd] === "FormData" && e[Ao]);
}
const yb = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ko(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = zn(r) ? [] : {};
        return vr(r, (s, i) => {
          const c = n(s, o + 1);
          !dr(c) && (a[i] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, gb = yt("AsyncFunction"), vb = (e) => e && (ko(e) || We(e)) && We(e.then) && We(e.catch), rf = ((e, t) => e ? setImmediate : t ? ((n, r) => (sn.addEventListener("message", ({ source: o, data: a }) => {
  o === sn && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), sn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  We(sn.postMessage)
), bb = typeof queueMicrotask < "u" ? queueMicrotask.bind(sn) : typeof process < "u" && process.nextTick || rf, wb = (e) => e != null && We(e[Ao]), j = {
  isArray: zn,
  isArrayBuffer: Qd,
  isBuffer: Lv,
  isFormData: Wv,
  isArrayBufferView: Mv,
  isString: Nv,
  isNumber: Zd,
  isBoolean: jv,
  isObject: ko,
  isPlainObject: Wr,
  isReadableStream: Gv,
  isRequest: Yv,
  isResponse: Xv,
  isHeaders: Jv,
  isUndefined: dr,
  isDate: qv,
  isFile: Vv,
  isBlob: zv,
  isRegExp: cb,
  isFunction: We,
  isStream: Hv,
  isURLSearchParams: Kv,
  isTypedArray: ab,
  isFileList: Uv,
  forEach: vr,
  merge: ks,
  extend: Zv,
  trim: Qv,
  stripBOM: eb,
  inherits: tb,
  toFlatObject: nb,
  kindOf: Eo,
  kindOfTest: yt,
  endsWith: rb,
  toArray: ob,
  forEachEntry: sb,
  matchAll: ib,
  isHTMLForm: lb,
  hasOwnProperty: $u,
  hasOwnProp: $u,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nf,
  freezeMethods: db,
  toObjectSet: fb,
  toCamelCase: ub,
  noop: pb,
  toFiniteNumber: mb,
  findKey: ef,
  global: sn,
  isContextDefined: tf,
  isSpecCompliantForm: hb,
  toJSONObject: yb,
  isAsyncFn: gb,
  isThenable: vb,
  setImmediate: rf,
  asap: bb,
  isIterable: wb
};
function oe(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
j.inherits(oe, Error, {
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
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const of = oe.prototype, af = {};
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
  af[e] = { value: e };
});
Object.defineProperties(oe, af);
Object.defineProperty(of, "isAxiosError", { value: !0 });
oe.from = (e, t, n, r, o, a) => {
  const s = Object.create(of);
  return j.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (i) => i !== "isAxiosError"), oe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const Sb = null;
function $s(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function sf(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Tu(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = sf(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function xb(e) {
  return j.isArray(e) && !e.some($s);
}
const Cb = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function $o(e, t, n) {
  if (!j.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = j.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, f) {
    return !j.isUndefined(f[m]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(t);
  if (!j.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(p) {
    if (p === null) return "";
    if (j.isDate(p))
      return p.toISOString();
    if (!c && j.isBlob(p))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(p) || j.isTypedArray(p) ? c && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function u(p, m, f) {
    let g = p;
    if (p && !f && typeof p == "object") {
      if (j.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (j.isArray(p) && xb(p) || (j.isFileList(p) || j.endsWith(m, "[]")) && (g = j.toArray(p)))
        return m = sf(m), g.forEach(function(O, P) {
          !(j.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Tu([m], P, a) : s === null ? m : m + "[]",
            l(O)
          );
        }), !1;
    }
    return $s(p) ? !0 : (t.append(Tu(f, m, a), l(p)), !1);
  }
  const d = [], h = Object.assign(Cb, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: $s
  });
  function y(p, m) {
    if (!j.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(p), j.forEach(p, function(g, w) {
        (!(j.isUndefined(g) || g === null) && o.call(
          t,
          g,
          j.isString(w) ? w.trim() : w,
          m,
          h
        )) === !0 && y(g, m ? m.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Du(e) {
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
function bi(e, t) {
  this._pairs = [], e && $o(e, this, t);
}
const lf = bi.prototype;
lf.append = function(t, n) {
  this._pairs.push([t, n]);
};
lf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Du);
  } : Du;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Ob(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function uf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ob;
  j.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = j.isURLSearchParams(t) ? t.toString() : new bi(t, n).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class Fu {
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
    j.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const cf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ab = typeof URLSearchParams < "u" ? URLSearchParams : bi, Eb = typeof FormData < "u" ? FormData : null, Pb = typeof Blob < "u" ? Blob : null, kb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ab,
    FormData: Eb,
    Blob: Pb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, wi = typeof window < "u" && typeof document < "u", Ts = typeof navigator == "object" && navigator || void 0, $b = wi && (!Ts || ["ReactNative", "NativeScript", "NS"].indexOf(Ts.product) < 0), Tb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Db = wi && window.location.href || "http://localhost", Fb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: wi,
  hasStandardBrowserEnv: $b,
  hasStandardBrowserWebWorkerEnv: Tb,
  navigator: Ts,
  origin: Db
}, Symbol.toStringTag, { value: "Module" })), Be = {
  ...Fb,
  ...kb
};
function Rb(e, t) {
  return $o(e, new Be.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Be.isNode && j.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function _b(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ib(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function df(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), c = a >= n.length;
    return s = !s && j.isArray(o) ? o.length : s, c ? (j.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !i) : ((!o[s] || !j.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && j.isArray(o[s]) && (o[s] = Ib(o[s])), !i);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const n = {};
    return j.forEachEntry(e, (r, o) => {
      t(_b(r), o, n, 0);
    }), n;
  }
  return null;
}
function Bb(e, t, n) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const br = {
  transitional: cf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = j.isObject(t);
    if (a && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
      return o ? JSON.stringify(df(t)) : t;
    if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t) || j.isReadableStream(t))
      return t;
    if (j.isArrayBufferView(t))
      return t.buffer;
    if (j.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Rb(t, this.formSerializer).toString();
      if ((i = j.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return $o(
          i ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), Bb(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || br.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (j.isResponse(t) || j.isReadableStream(t))
      return t;
    if (t && j.isString(t) && (r && !this.responseType || o)) {
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
j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  br.headers[e] = {};
});
const Lb = j.toObjectSet([
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
]), Mb = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Lb[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ru = Symbol("internals");
function Jn(e) {
  return e && String(e).trim().toLowerCase();
}
function Kr(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(Kr) : String(e);
}
function Nb(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const jb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ha(e, t, n, r, o) {
  if (j.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!j.isString(t)) {
    if (j.isString(r))
      return t.indexOf(r) !== -1;
    if (j.isRegExp(r))
      return r.test(t);
  }
}
function qb(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Vb(e, t) {
  const n = j.toCamelCase(" " + t);
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
      const d = j.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Kr(i));
    }
    const s = (i, c) => j.forEach(i, (l, u) => a(l, u, c));
    if (j.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (j.isString(t) && (t = t.trim()) && !jb(t))
      s(Mb(t), n);
    else if (j.isObject(t) && j.isIterable(t)) {
      let i = {}, c, l;
      for (const u of t) {
        if (!j.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = u[0]] = (c = i[l]) ? j.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(i, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Jn(t), t) {
      const r = j.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Nb(o);
        if (j.isFunction(n))
          return n.call(this, o, r);
        if (j.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Jn(t), t) {
      const r = j.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ha(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = Jn(s), s) {
        const i = j.findKey(r, s);
        i && (!n || Ha(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return j.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || Ha(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return j.forEach(this, (o, a) => {
      const s = j.findKey(r, a);
      if (s) {
        n[s] = Kr(o), delete n[a];
        return;
      }
      const i = t ? qb(a) : String(a).trim();
      i !== a && delete n[a], n[i] = Kr(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && j.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Ru] = this[Ru] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = Jn(s);
      r[i] || (Vb(o, s), r[i] = !0);
    }
    return j.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Ke.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(Ke.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
j.freezeMethods(Ke);
function Wa(e, t) {
  const n = this || br, r = t || n, o = Ke.from(r.headers);
  let a = r.data;
  return j.forEach(e, function(i) {
    a = i.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function ff(e) {
  return !!(e && e.__CANCEL__);
}
function Un(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
j.inherits(Un, oe, {
  __CANCEL__: !0
});
function pf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new oe(
    "Request failed with status code " + n.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function zb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ub(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[a];
    s || (s = l), n[o] = c, r[o] = l;
    let d = a, h = 0;
    for (; d !== o; )
      h += n[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), l - s < t)
      return;
    const y = u && l - u;
    return y ? Math.round(h * 1e3 / y) : void 0;
  };
}
function Hb(e, t) {
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
const so = (e, t, n = 3) => {
  let r = 0;
  const o = Ub(50, 250);
  return Hb((a) => {
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
}, _u = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Iu = (e) => (...t) => j.asap(() => e(...t)), Wb = Be.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Be.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Be.origin),
  Be.navigator && /(msie|trident)/i.test(Be.navigator.userAgent)
) : () => !0, Kb = Be.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      j.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), j.isString(r) && s.push("path=" + r), j.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Gb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Yb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function mf(e, t, n) {
  let r = !Gb(t);
  return e && (r || n == !1) ? Yb(e, t) : t;
}
const Bu = (e) => e instanceof Ke ? { ...e } : e;
function mn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, h) {
    return j.isPlainObject(l) && j.isPlainObject(u) ? j.merge.call({ caseless: h }, l, u) : j.isPlainObject(u) ? j.merge({}, u) : j.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, h) {
    if (j.isUndefined(u)) {
      if (!j.isUndefined(l))
        return r(void 0, l, d, h);
    } else return r(l, u, d, h);
  }
  function a(l, u) {
    if (!j.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (j.isUndefined(u)) {
      if (!j.isUndefined(l))
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
    headers: (l, u, d) => o(Bu(l), Bu(u), d, !0)
  };
  return j.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, h = d(e[u], t[u], u);
    j.isUndefined(h) && d !== i || (n[u] = h);
  }), n;
}
const hf = (e) => {
  const t = mn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = Ke.from(s), t.url = uf(mf(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let c;
  if (j.isFormData(n)) {
    if (Be.hasStandardBrowserEnv || Be.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Be.hasStandardBrowserEnv && (r && j.isFunction(r) && (r = r(t)), r || r !== !1 && Wb(t.url))) {
    const l = o && a && Kb.read(a);
    l && s.set(o, l);
  }
  return t;
}, Xb = typeof XMLHttpRequest < "u", Jb = Xb && function(e) {
  return new Promise(function(n, r) {
    const o = hf(e);
    let a = o.data;
    const s = Ke.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: c, onDownloadProgress: l } = o, u, d, h, y, p;
    function m() {
      y && y(), p && p(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let f = new XMLHttpRequest();
    f.open(o.method.toUpperCase(), o.url, !0), f.timeout = o.timeout;
    function g() {
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
      pf(function(A) {
        n(A), m();
      }, function(A) {
        r(A), m();
      }, F), f = null;
    }
    "onloadend" in f ? f.onloadend = g : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, f.onabort = function() {
      f && (r(new oe("Request aborted", oe.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      r(new oe("Network Error", oe.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let P = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const F = o.transitional || cf;
      o.timeoutErrorMessage && (P = o.timeoutErrorMessage), r(new oe(
        P,
        F.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        f
      )), f = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in f && j.forEach(s.toJSON(), function(P, F) {
      f.setRequestHeader(F, P);
    }), j.isUndefined(o.withCredentials) || (f.withCredentials = !!o.withCredentials), i && i !== "json" && (f.responseType = o.responseType), l && ([h, p] = so(l, !0), f.addEventListener("progress", h)), c && f.upload && ([d, y] = so(c), f.upload.addEventListener("progress", d), f.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (u = (O) => {
      f && (r(!O || O.type ? new Un(null, e, f) : O), f.abort(), f = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const w = zb(o.url);
    if (w && Be.protocols.indexOf(w) === -1) {
      r(new oe("Unsupported protocol " + w + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(a || null);
  });
}, Qb = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(l) {
      if (!o) {
        o = !0, i();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof oe ? u : new Un(u instanceof Error ? u.message : u));
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
    return c.unsubscribe = () => j.asap(i), c;
  }
}, Zb = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, e1 = async function* (e, t) {
  for await (const n of t1(e))
    yield* Zb(n, t);
}, t1 = async function* (e) {
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
}, Lu = (e, t, n, r) => {
  const o = e1(e, t);
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
          let h = a += d;
          n(h);
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
}, To = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", yf = To && typeof ReadableStream == "function", n1 = To && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), gf = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, r1 = yf && gf(() => {
  let e = !1;
  const t = new Request(Be.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Mu = 64 * 1024, Ds = yf && gf(() => j.isReadableStream(new Response("").body)), io = {
  stream: Ds && ((e) => e.body)
};
To && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !io[t] && (io[t] = j.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new oe(`Response type '${t}' is not supported`, oe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const o1 = async (e) => {
  if (e == null)
    return 0;
  if (j.isBlob(e))
    return e.size;
  if (j.isSpecCompliantForm(e))
    return (await new Request(Be.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (j.isArrayBufferView(e) || j.isArrayBuffer(e))
    return e.byteLength;
  if (j.isURLSearchParams(e) && (e = e + ""), j.isString(e))
    return (await n1(e)).byteLength;
}, a1 = async (e, t) => {
  const n = j.toFiniteNumber(e.getContentLength());
  return n ?? o1(t);
}, s1 = To && (async (e) => {
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
    fetchOptions: h
  } = hf(e);
  l = l ? (l + "").toLowerCase() : "text";
  let y = Qb([o, a && a.toAbortSignal()], s), p;
  const m = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let f;
  try {
    if (c && r1 && n !== "get" && n !== "head" && (f = await a1(u, r)) !== 0) {
      let F = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), U;
      if (j.isFormData(r) && (U = F.headers.get("content-type")) && u.setContentType(U), F.body) {
        const [A, W] = _u(
          f,
          so(Iu(c))
        );
        r = Lu(F.body, Mu, A, W);
      }
    }
    j.isString(d) || (d = d ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    p = new Request(t, {
      ...h,
      signal: y,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: g ? d : void 0
    });
    let w = await fetch(p);
    const O = Ds && (l === "stream" || l === "response");
    if (Ds && (i || O && m)) {
      const F = {};
      ["status", "statusText", "headers"].forEach((B) => {
        F[B] = w[B];
      });
      const U = j.toFiniteNumber(w.headers.get("content-length")), [A, W] = i && _u(
        U,
        so(Iu(i), !0)
      ) || [];
      w = new Response(
        Lu(w.body, Mu, A, () => {
          W && W(), m && m();
        }),
        F
      );
    }
    l = l || "text";
    let P = await io[j.findKey(io, l) || "text"](w, e);
    return !O && m && m(), await new Promise((F, U) => {
      pf(F, U, {
        data: P,
        headers: Ke.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: p
      });
    });
  } catch (g) {
    throw m && m(), g && g.name === "TypeError" && /Load failed|fetch/i.test(g.message) ? Object.assign(
      new oe("Network Error", oe.ERR_NETWORK, e, p),
      {
        cause: g.cause || g
      }
    ) : oe.from(g, g && g.code, e, p);
  }
}), Fs = {
  http: Sb,
  xhr: Jb,
  fetch: s1
};
j.forEach(Fs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Nu = (e) => `- ${e}`, i1 = (e) => j.isFunction(e) || e === null || e === !1, vf = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let s;
      if (r = n, !i1(n) && (r = Fs[(s = String(n)).toLowerCase()], r === void 0))
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
` + a.map(Nu).join(`
`) : " " + Nu(a[0]) : "as no adapter specified";
      throw new oe(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Fs
};
function Ka(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Un(null, e);
}
function ju(e) {
  return Ka(e), e.headers = Ke.from(e.headers), e.data = Wa.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vf.getAdapter(e.adapter || br.adapter)(e).then(function(r) {
    return Ka(e), r.data = Wa.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ke.from(r.headers), r;
  }, function(r) {
    return ff(r) || (Ka(e), r && r.response && (r.response.data = Wa.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ke.from(r.response.headers))), Promise.reject(r);
  });
}
const bf = "1.9.0", Do = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Do[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qu = {};
Do.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + bf + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, i) => {
    if (t === !1)
      throw new oe(
        o(s, " has been removed" + (n ? " in " + n : "")),
        oe.ERR_DEPRECATED
      );
    return n && !qu[s] && (qu[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, i) : !0;
  };
};
Do.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function l1(e, t, n) {
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
  assertOptions: l1,
  validators: Do
}, wt = Gr.validators;
let dn = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Fu(),
      response: new Fu()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = mn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Gr.assertOptions(r, {
      silentJSONParsing: wt.transitional(wt.boolean),
      forcedJSONParsing: wt.transitional(wt.boolean),
      clarifyTimeoutError: wt.transitional(wt.boolean)
    }, !1), o != null && (j.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Gr.assertOptions(o, {
      encode: wt.function,
      serialize: wt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Gr.assertOptions(n, {
      baseUrl: wt.spelling("baseURL"),
      withXsrfToken: wt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && j.merge(
      a.common,
      a[n.method]
    );
    a && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), n.headers = Ke.concat(s, a);
    const i = [];
    let c = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (c = c && m.synchronous, i.unshift(m.fulfilled, m.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(m) {
      l.push(m.fulfilled, m.rejected);
    });
    let u, d = 0, h;
    if (!c) {
      const p = [ju.bind(this), void 0];
      for (p.unshift.apply(p, i), p.push.apply(p, l), h = p.length, u = Promise.resolve(n); d < h; )
        u = u.then(p[d++], p[d++]);
      return u;
    }
    h = i.length;
    let y = n;
    for (d = 0; d < h; ) {
      const p = i[d++], m = i[d++];
      try {
        y = p(y);
      } catch (f) {
        m.call(this, f);
        break;
      }
    }
    try {
      u = ju.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, h = l.length; d < h; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = mn(this.defaults, t);
    const n = mf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return uf(n, t.params, t.paramsSerializer);
  }
};
j.forEach(["delete", "get", "head", "options"], function(t) {
  dn.prototype[t] = function(n, r) {
    return this.request(mn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, i) {
      return this.request(mn(i || {}, {
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
let u1 = class wf {
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
      r.reason || (r.reason = new Un(a, s, i), n(r.reason));
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
      token: new wf(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function c1(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function d1(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const Rs = {
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
Object.entries(Rs).forEach(([e, t]) => {
  Rs[t] = e;
});
function Sf(e) {
  const t = new dn(e), n = Xd(dn.prototype.request, t);
  return j.extend(n, dn.prototype, t, { allOwnKeys: !0 }), j.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Sf(mn(e, o));
  }, n;
}
const xe = Sf(br);
xe.Axios = dn;
xe.CanceledError = Un;
xe.CancelToken = u1;
xe.isCancel = ff;
xe.VERSION = bf;
xe.toFormData = $o;
xe.AxiosError = oe;
xe.Cancel = xe.CanceledError;
xe.all = function(t) {
  return Promise.all(t);
};
xe.spread = c1;
xe.isAxiosError = d1;
xe.mergeConfig = mn;
xe.AxiosHeaders = Ke;
xe.formToJSON = (e) => df(j.isHTMLForm(e) ? new FormData(e) : e);
xe.getAdapter = vf.getAdapter;
xe.HttpStatusCode = Rs;
xe.default = xe;
const {
  Axios: zO,
  AxiosError: UO,
  CanceledError: HO,
  isCancel: WO,
  CancelToken: KO,
  VERSION: GO,
  all: YO,
  Cancel: XO,
  isAxiosError: JO,
  spread: QO,
  toFormData: ZO,
  AxiosHeaders: e4,
  HttpStatusCode: t4,
  formToJSON: n4,
  getAdapter: r4,
  mergeConfig: o4
} = xe;
function _s(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function gt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var Vu = (e) => gt("before", { cancelable: !0, detail: { visit: e } }), f1 = (e) => gt("error", { detail: { errors: e } }), p1 = (e) => gt("exception", { cancelable: !0, detail: { exception: e } }), m1 = (e) => gt("finish", { detail: { visit: e } }), h1 = (e) => gt("invalid", { cancelable: !0, detail: { response: e } }), lr = (e) => gt("navigate", { detail: { page: e } }), y1 = (e) => gt("progress", { detail: { progress: e } }), g1 = (e) => gt("start", { detail: { visit: e } }), v1 = (e) => gt("success", { detail: { page: e } }), b1 = (e, t) => gt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), w1 = (e) => gt("prefetching", { detail: { visit: e } }), je = class {
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
var S1 = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = xf(), n = await Cf(), r = await P1(n);
  if (!r) throw new Error("Unable to encrypt history");
  return await C1(t, r, e);
}, Ln = { key: "historyKey", iv: "historyIv" }, x1 = async (e) => {
  let t = xf(), n = await Cf();
  if (!n) throw new Error("Unable to decrypt history");
  return await O1(t, n, e);
}, C1 = async (e, t, n) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), s = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, s.written));
}, O1 = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
  return JSON.parse(new TextDecoder().decode(r));
}, xf = () => {
  let e = je.get(Ln.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return je.set(Ln.iv, Array.from(t)), t;
}, A1 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), E1 = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  je.set(Ln.key, Array.from(new Uint8Array(t)));
}, P1 = async (e) => {
  if (e) return e;
  let t = await A1();
  return t ? (await E1(t), t) : null;
}, Cf = async () => {
  let e = je.get(Ln.key);
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
function Is(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Is(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Is(t));
}
var zu = (e) => e instanceof FormData;
function Of(e, t = new FormData(), n = null) {
  e = e || {};
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && Ef(t, Af(n, r), e[r]);
  return t;
}
function Af(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ef(e, t, n) {
  if (Array.isArray(n)) return Array.from(n.keys()).forEach((r) => Ef(e, Af(t, r.toString()), n[r]));
  if (n instanceof Date) return e.append(t, n.toISOString());
  if (n instanceof File) return e.append(t, n, n.name);
  if (n instanceof Blob) return e.append(t, n);
  if (typeof n == "boolean") return e.append(t, n ? "1" : "0");
  if (typeof n == "string") return e.append(t, n);
  if (typeof n == "number") return e.append(t, `${n}`);
  if (n == null) return e.append(t, "");
  Of(n, e, t);
}
function Gt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var k1 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? Gt(e) : e;
  if ((Is(t) || r) && !zu(t) && (t = Of(t)), zu(t)) return [a, t];
  let [s, i] = Si(n, a, t, o);
  return [Gt(s), i];
};
function Si(e, t, n, r = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), i = t.toString().includes("?") || e === "get" && Object.keys(n).length, c = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (l.search = ku.stringify(tr(ku.parse(l.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[o ? `${l.protocol}//${l.host}` : "", a ? l.pathname : "", s ? l.pathname.substring(1) : "", i ? l.search : "", c ? l.hash : ""].join(""), n];
}
function lo(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Uu = (e, t) => {
  e.hash && !t.hash && lo(e).href === t.href && (t.hash = e.hash);
}, Bs = (e, t) => lo(e).href === lo(t).href, $1 = class {
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
      return t = t || Bs(Gt(e.url), s), new Promise((i) => {
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
}, te = new $1(), Pf = class {
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
}, rr = typeof window > "u", Qn = new Pf(), Hu = !rr && /CriOS/.test(window.navigator.userAgent), T1 = class {
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
        Hu ? setTimeout(r) : r();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? S1(e).then(t) : t(e));
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
    return e instanceof ArrayBuffer ? x1(e) : Promise.resolve(e);
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
        Hu ? setTimeout(r) : r();
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
    je.remove(Ln.key), je.remove(Ln.iv);
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
var fe = new T1(), D1 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", _s(ct.onWindowScroll.bind(ct), 100), !0)), typeof document < "u" && document.addEventListener("scroll", _s(ct.onScroll.bind(ct), 100), !0);
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
      let n = Gt(te.get().url);
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
}, ln = new D1(), F1 = class {
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
}, Ga = new F1(), R1 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Ga.isReload() && fe.deleteState(fe.rememberedState);
  }
  static handleBackForward() {
    if (!Ga.isBackForward() || !fe.hasAnyState()) return !1;
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
      Ga.isReload() && ct.restore(fe.getScrollRegions()), lr(te.get());
    });
  }
}, _1 = class {
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
}, I1 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    let r = new _1(e, t, n);
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
}, B1 = new I1(), kf = (e, t, n) => {
  if (e === t) return !0;
  for (let r in e) if (!n.includes(r) && e[r] !== t[r] && !L1(e[r], t[r])) return !1;
  return !0;
}, L1 = (e, t) => {
  switch (typeof e) {
    case "object":
      return kf(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, M1 = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Wu = (e) => {
  if (typeof e == "number") return e;
  for (let [t, n] of Object.entries(M1)) if (e.endsWith(t)) return parseFloat(e) * n;
  return parseInt(e);
}, N1 = class {
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
    return [Wu(t), Wu(n)];
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
    return kf(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, rn = new N1(), j1 = class $f {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let n = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...n, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new $f(t);
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
}, q1 = { modal: null, listener: null, show(e) {
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
} }, V1 = new Pf(), Ku = class Tf {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r;
  }
  static create(t, n, r) {
    return new Tf(t, n, r);
  }
  async handlePrefetch() {
    Bs(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return V1.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), b1(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await fe.processQueue(), fe.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = te.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let n = this.getScopedErrors(t);
      return f1(n), this.requestParams.all().onError(n);
    }
    v1(te.get()), await this.requestParams.all().onSuccess(te.get()), fe.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let n = Gt(this.getHeader("x-inertia-location"));
      return Uu(this.requestParams.all().url, n), this.locationVisit(n);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (h1(t)) return q1.show(t.data);
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
      Bs(window.location, t) ? window.location.reload() : window.location.href = t.href;
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
    let n = Gt(this.originatingPage.url), r = Gt(te.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    let n = Gt(t.url);
    return Uu(this.requestParams.all().url, n), n.pathname + n.search + n.hash;
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
}, Gu = class Df {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = j1.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new Df(t, n);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), g1(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), w1(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return xe({ method: this.requestParams.all().method, url: lo(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((n) => (this.response = Ku.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n != null && n.response ? (this.response = Ku.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!xe.isCancel(n) && p1(n)) return Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, m1(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, y1(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    let t = { ...this.requestParams.headers(), Accept: "text/html, application/xhtml+xml", "X-Requested-With": "XMLHttpRequest", "X-Inertia": !0 };
    return te.get().version && (t["X-Inertia-Version"] = te.get().version), t;
  }
}, Yu = class {
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
}, z1 = class {
  constructor() {
    this.syncRequestStream = new Yu({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new Yu({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    te.init({ initialPage: e, resolveComponent: t, swapComponent: n }), R1.handle(), ln.init(), ln.on("missingHistoryItem", () => {
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
    return B1.add(e, () => this.reload(t), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let n = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !Vu(n)) return;
    let o = n.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !te.isCleared() && !n.preserveUrl && ct.save();
    let a = { ...n, ...r }, s = rn.get(a);
    s ? (Xu(s.inFlight), rn.use(s, a)) : (Xu(!0), o.send(Gu.create(a, te.get())));
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
    let s = this.getVisitEvents(t);
    if (s.onBefore(r) === !1 || !Vu(r)) return;
    tw(), this.asyncRequestStream.interruptInFlight();
    let i = { ...r, ...s };
    new Promise((c) => {
      let l = () => {
        te.get() ? c() : setTimeout(l, 50);
      };
      l();
    }).then(() => {
      rn.add(i, (c) => {
        this.asyncRequestStream.send(Gu.create(c, te.get()));
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
    let r = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, a] = k1(e, r.data, r.method, r.forceFormData, r.queryStringArrayFormat);
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
}, U1 = { buildDOMElement(e) {
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
}, update: _s(function(e) {
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
function H1(e, t, n) {
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
    let u = t(""), d = { ...u ? { title: `<title inertia="">${u}</title>` } : {} }, h = Object.values(r).reduce((y, p) => y.concat(p), []).reduce((y, p) => {
      if (p.indexOf("<") === -1) return y;
      if (p.indexOf("<title ") === 0) {
        let f = p.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return y.title = f ? `${f[1]}${t(f[2])}${f[3]}` : p, y;
      }
      let m = p.match(/ inertia="[^"]+"/);
      return m ? y[m[0]] = p : y[Object.keys(y).length] = p, y;
    }, d);
    return Object.values(h);
  }
  function l() {
    e ? n(c()) : U1.update(c());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let u = a();
    return { update: (d) => i(u, d), disconnect: () => s(u) };
  } };
}
var Oe = "nprogress", Te = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Qt = null, W1 = (e) => {
  Object.assign(Te, e), Te.includeCSS && Q1(Te.color);
}, Fo = (e) => {
  let t = Ff();
  e = Lf(e, Te.minimum, 1), Qt = e === 1 ? null : e;
  let n = G1(!t), r = n.querySelector(Te.barSelector), o = Te.speed, a = Te.easing;
  n.offsetWidth, J1((s) => {
    let i = Te.positionUsing === "translate3d" ? { transition: `all ${o}ms ${a}`, transform: `translate3d(${Yr(e)}%,0,0)` } : Te.positionUsing === "translate" ? { transition: `all ${o}ms ${a}`, transform: `translate(${Yr(e)}%,0)` } : { marginLeft: `${Yr(e)}%` };
    for (let c in i) r.style[c] = i[c];
    if (e !== 1) return setTimeout(s, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        Bf(), s();
      }, o);
    }, o);
  });
}, Ff = () => typeof Qt == "number", Rf = () => {
  Qt || Fo(0);
  let e = function() {
    setTimeout(function() {
      Qt && (_f(), e());
    }, Te.trickleSpeed);
  };
  Te.trickle && e();
}, K1 = (e) => {
  !e && !Qt || (_f(0.3 + 0.5 * Math.random()), Fo(1));
}, _f = (e) => {
  let t = Qt;
  if (t === null) return Rf();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let n = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let r in n) if (t >= n[r][0] && t < n[r][1]) return parseFloat(r);
    return 0;
  })(), Fo(Lf(t + e, 0, 0.994));
}, G1 = (e) => {
  var a;
  if (Y1()) return document.getElementById(Oe);
  document.documentElement.classList.add(`${Oe}-busy`);
  let t = document.createElement("div");
  t.id = Oe, t.innerHTML = Te.template;
  let n = t.querySelector(Te.barSelector), r = e ? "-100" : Yr(Qt || 0), o = If();
  return n.style.transition = "all 0 linear", n.style.transform = `translate3d(${r}%,0,0)`, Te.showSpinner || ((a = t.querySelector(Te.spinnerSelector)) == null || a.remove()), o !== document.body && o.classList.add(`${Oe}-custom-parent`), o.appendChild(t), t;
}, If = () => X1(Te.parent) ? Te.parent : document.querySelector(Te.parent), Bf = () => {
  var e;
  document.documentElement.classList.remove(`${Oe}-busy`), If().classList.remove(`${Oe}-custom-parent`), (e = document.getElementById(Oe)) == null || e.remove();
}, Y1 = () => document.getElementById(Oe) !== null, X1 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Lf(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Yr = (e) => (-1 + e) * 100, J1 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), Q1 = (e) => {
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
}, _n = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${Oe} { display: none; }`, e;
})(), Z1 = () => {
  if (_n && document.head.contains(_n)) return document.head.removeChild(_n);
}, ew = () => {
  _n && !document.head.contains(_n) && document.head.appendChild(_n);
}, Mf = { configure: W1, isStarted: Ff, done: K1, set: Fo, remove: Bf, start: Rf, status: Qt, show: Z1, hide: ew }, Xr = 0, Xu = (e = !1) => {
  Xr = Math.max(0, Xr - 1), (e || Xr === 0) && Mf.show();
}, tw = () => {
  Xr++, Mf.hide();
};
function Jr(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Ot = new z1();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
function Nf(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function jf(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function xi(e) {
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
      return r === void 0 ? Nf(t) ? Qr(e, xi(t), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = jf(t));
      const r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t))
        return nw(e, t, n);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function nw(e, t, n) {
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
function Ju(e) {
  return e !== null && (typeof e == "object" || typeof e == "function");
}
const rw = /^(?:0|[1-9]\d*)$/;
function qf(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return rw.test(e);
  }
}
function ow(e) {
  return e !== null && typeof e == "object" && oo(e) === "[object Arguments]";
}
function aw(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && Nf(t) && (e == null ? void 0 : e[t]) == null ? n = xi(t) : n = [t], n.length === 0)
    return !1;
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if ((r == null || !Object.hasOwn(r, a)) && !((Array.isArray(r) || ow(r)) && qf(a) && a < r.length))
      return !1;
    r = r[a];
  }
  return !0;
}
const sw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, iw = /^\w*$/;
function lw(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || H0(e) ? !0 : typeof e == "string" && (iw.test(e) || !sw.test(e)) || t != null && Object.hasOwn(t, e);
}
const uw = (e, t, n) => {
  const r = e[t];
  (!(Object.hasOwn(e, t) && jd(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function cw(e, t, n, r) {
  if (e == null && !Ju(e))
    return e;
  const o = lw(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? xi(t) : [t];
  let a = e;
  for (let s = 0; s < o.length && a != null; s++) {
    const i = jf(o[s]);
    let c;
    if (s === o.length - 1)
      c = n(a[i]);
    else {
      const l = a[i], u = r(l);
      c = u !== void 0 ? u : Ju(l) ? l : qf(o[s + 1]) ? [] : {};
    }
    uw(a, i, c), a = a[i];
  }
  return e;
}
function _r(e, t, n) {
  return cw(e, t, () => n, () => {
  });
}
function dw(e, t) {
  let n = typeof e == "string" ? e : null, r = (typeof e == "string" ? t : e) ?? {}, o = n ? Ot.restore(n) : null, a = ut(typeof r == "function" ? r() : r), s = null, i = null, c = (u) => u, l = hr({ ...o ? o.data : ut(a), isDirty: !1, errors: o ? o.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((u, d) => _r(u, d, Qr(this, d)), {});
  }, transform(u) {
    return c = u, this;
  }, defaults(u, d) {
    if (typeof r == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? (a = ut(this.data()), this.isDirty = !1) : a = typeof u == "string" ? _r(ut(a), u, d) : Object.assign({}, ut(a), u), this;
  }, reset(...u) {
    let d = ut(typeof r == "function" ? r() : a), h = ut(d);
    return u.length === 0 ? (a = h, Object.assign(this, d)) : u.filter((y) => aw(h, y)).forEach((y) => {
      _r(a, y, Qr(h, y)), _r(this, y, Qr(d, y));
    }), this;
  }, setError(u, d) {
    return Object.assign(this.errors, typeof u == "string" ? { [u]: d } : u), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...u) {
    return this.errors = Object.keys(this.errors).reduce((d, h) => ({ ...d, ...u.length > 0 && !u.includes(h) ? { [h]: this.errors[h] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(...u) {
    let d = typeof u[0] == "object", h = d ? u[0].method : u[0], y = d ? u[0].url : u[1], p = (d ? u[1] : u[2]) ?? {}, m = c(this.data()), f = { ...p, onCancelToken: (g) => {
      if (s = g, p.onCancelToken) return p.onCancelToken(g);
    }, onBefore: (g) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(i), p.onBefore) return p.onBefore(g);
    }, onStart: (g) => {
      if (this.processing = !0, p.onStart) return p.onStart(g);
    }, onProgress: (g) => {
      if (this.progress = g, p.onProgress) return p.onProgress(g);
    }, onSuccess: async (g) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, i = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let w = p.onSuccess ? await p.onSuccess(g) : null;
      return a = ut(this.data()), this.isDirty = !1, w;
    }, onError: (g) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(g), p.onError) return p.onError(g);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, p.onCancel) return p.onCancel();
    }, onFinish: (g) => {
      if (this.processing = !1, this.progress = null, s = null, p.onFinish) return p.onFinish(g);
    } };
    h === "delete" ? Ot.delete(y, { ...f, data: m }) : Ot[h](y, m, f);
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
    l.isDirty = !tv(l.data(), a), n && Ot.remember(ut(u.__remember()), n);
  }, { immediate: !0, deep: !0 }), l;
}
var Je = N(null), Ue = N(null), Ya = mr(null), Ir = N(null), Qu = null;
z({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
  Je.value = t ? os(t) : null, Ue.value = e, Ir.value = null;
  let a = typeof window > "u";
  return Qu = H1(a, r, o), a || (Ot.init({ initialPage: e, resolveComponent: n, swapComponent: async (s) => {
    Je.value = os(s.component), Ue.value = s.page, Ir.value = s.preserveState ? Ir.value : Date.now();
  } }), Ot.on("navigate", () => Qu.forceUpdate())), () => {
    if (Je.value) {
      Je.value.inheritAttrs = !!Je.value.inheritAttrs;
      let s = qe(Je.value, { ...Ue.value.props, key: Ir.value });
      return Ya.value && (Je.value.layout = Ya.value, Ya.value = null), Je.value.layout ? typeof Je.value.layout == "function" ? Je.value.layout(qe, s) : (Array.isArray(Je.value.layout) ? Je.value.layout : [Je.value.layout]).concat(s).reverse().reduce((i, c) => (c.inheritAttrs = !!c.inheritAttrs, qe(c, { ...Ue.value.props }, () => i))) : s;
    }
  };
} });
function fw() {
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
var pw = z({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
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
    a.includes("mount") && m();
  }), Mt(() => {
    clearTimeout(o.value);
  });
  let i = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), c = i !== "get" ? "button" : e.as.toLowerCase(), l = T(() => Si(i, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), u = T(() => l.value[0]), d = T(() => l.value[1]), h = T(() => ({ a: { href: u.value }, button: { type: "button" } })), y = { data: d.value, method: i, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? i !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, p = { ...y, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (O) => {
    r.value++, e.onStart(O);
  }, onProgress: e.onProgress, onFinish: (O) => {
    r.value--, e.onFinish(O);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, m = () => {
    Ot.prefetch(u.value, y, { cacheFor: s });
  }, f = { onClick: (O) => {
    Jr(O) && (O.preventDefault(), Ot.visit(u.value, p));
  } }, g = { onMouseenter: () => {
    o.value = setTimeout(() => {
      m();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(o.value);
  }, onClick: f.onClick }, w = { onMousedown: (O) => {
    Jr(O) && (O.preventDefault(), m());
  }, onMouseup: (O) => {
    O.preventDefault(), Ot.visit(u.value, p);
  }, onClick: (O) => {
    Jr(O) && O.preventDefault();
  } };
  return () => qe(c, { ...n, ...h.value[c] || {}, "data-loading": r.value > 0 ? "" : void 0, ...a.includes("hover") ? g : a.includes("click") ? w : f }, t);
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
function s4(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function mw(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function i4(e) {
  return fw().props.auth.permissions.includes(e);
}
let Ls = null;
function l4(e) {
  Ls = e;
}
function Ro() {
  return Ls === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Ls;
}
let Ms = null;
function u4(e) {
  Ms = e;
}
function Vf() {
  return Ms === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), Ms;
}
const ft = z({
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
        r = Ro();
      } catch {
        console.log("InertiaLink: Router not available, preventing navigation"), r = {
          visit: (l, u) => {
            console.log("InertiaLink: Navigation prevented (docs environment):", l);
          }
        };
      }
      const o = e.as.toLowerCase(), a = e.method.toLowerCase(), [s, i] = Si(
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
function wr(e, t, n, r) {
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
function Sr(e, t) {
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
function hw(e, t) {
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
function yw() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(hw(arguments[t]));
  return e;
}
var gw = /* @__PURE__ */ new Map([
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
function _o(e, t) {
  var n = vw(e);
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
function vw(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), o = gw.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var bw = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function ww(e) {
  return wr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, Sw(e) && e.dataTransfer ? Ow(e.dataTransfer, e.type) : xw(e)];
    });
  });
}
function Sw(e) {
  return !!e.dataTransfer;
}
function xw(e) {
  var t = Cw(e.target) ? e.target.files ? Ns(e.target.files) : [] : [];
  return t.map(function(n) {
    return _o(n);
  });
}
function Cw(e) {
  return e !== null;
}
function Ow(e, t) {
  return wr(this, void 0, void 0, function() {
    var n, r;
    return Sr(this, function(o) {
      switch (o.label) {
        case 0:
          return e.items ? (n = Ns(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(Aw))]) : [3, 2];
        case 1:
          return r = o.sent(), [2, Zu(zf(r))];
        case 2:
          return [2, Zu(Ns(e.files).map(function(a) {
            return _o(a);
          }))];
      }
    });
  });
}
function Zu(e) {
  return e.filter(function(t) {
    return bw.indexOf(t.name) === -1;
  });
}
function Ns(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function Aw(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ec(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Uf(t) : ec(e);
}
function zf(e) {
  return e.reduce(function(t, n) {
    return yw(t, Array.isArray(n) ? zf(n) : [n]);
  }, []);
}
function ec(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = _o(t);
  return Promise.resolve(n);
}
function Ew(e) {
  return wr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, e.isDirectory ? Uf(e) : Pw(e)];
    });
  });
}
function Uf(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var o = [];
    function a() {
      var s = this;
      t.readEntries(function(i) {
        return wr(s, void 0, void 0, function() {
          var c, l, u;
          return Sr(this, function(d) {
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
                u = Promise.all(i.map(Ew)), o.push(u), a(), d.label = 6;
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
function Pw(e) {
  return wr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(o) {
          var a = _o(o, e.fullPath);
          n(a);
        }, function(o) {
          r(o);
        });
      })];
    });
  });
}
var Br = {}, tc;
function kw() {
  return tc || (tc = 1, Br.__esModule = !0, Br.default = function(e, t) {
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
  }), Br;
}
var $w = kw();
const Hf = /* @__PURE__ */ nv($w);
var Qe = function() {
  return Qe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Qe.apply(this, arguments);
};
function nc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Tw(e, t, n, r) {
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
function Dw(e, t) {
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
function js(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Fw(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function Rw(e) {
  return e.includes("Edge/");
}
function _w(e) {
  return e === void 0 && (e = window.navigator.userAgent), Fw(e) || Rw(e);
}
function rc(e) {
  e.preventDefault();
}
function Lr(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function uo(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var Iw = "file-invalid-type", Bw = "file-too-large", Lw = "file-too-small", Mw = "too-many-files", Nw = {
  code: Mw,
  message: "Too many files"
}, jw = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: Iw,
    message: "File type must be ".concat(t)
  };
};
function Zn(e) {
  return e != null;
}
var qw = Hf.default, Vw = qw || Hf;
function Wf(e, t) {
  var n = e.type === "application/x-moz-file" || Vw(e, t);
  return [n, n ? null : jw(t)];
}
var oc = function(e) {
  return {
    code: Bw,
    message: "File is larger than ".concat(e, " bytes")
  };
}, ac = function(e) {
  return {
    code: Lw,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Kf(e, t, n) {
  if (Zn(e.size) && e.size)
    if (Zn(t) && Zn(n)) {
      if (e.size > n)
        return [!1, oc(n)];
      if (e.size < t)
        return [!1, ac(t)];
    } else {
      if (Zn(t) && e.size < t)
        return [!1, ac(t)];
      if (Zn(n) && e.size > n)
        return [!1, oc(n)];
    }
  return [!0, null];
}
function Tt() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(n) {
    for (var r = [], o = 1; o < arguments.length; o++)
      r[o - 1] = arguments[o];
    return e.some(function(a) {
      return !uo(n) && a && a.apply(void 0, js([n], r, !1)), uo(n);
    });
  };
}
function zw(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, s = e.maxFiles;
  return !a && t.length > 1 || a && s >= 1 && t.length > s ? !1 : t.every(function(i) {
    var c = Wf(i, n)[0], l = Kf(i, r, o)[0];
    return c && l;
  });
}
var Uw = {
  disabled: !1,
  getFilesFromEvent: ww,
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
function Gf(e) {
  e === void 0 && (e = {});
  var t = N(Qe(Qe({}, Uw), e));
  ne(function() {
    return Qe({}, e);
  }, function($) {
    t.value = Qe(Qe({}, t.value), $);
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
    $ || (_w() ? setTimeout(a, 0) : a());
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
    $ && (document.addEventListener("dragover", rc, !1), document.addEventListener("drop", d, !1));
  }), Mt(function() {
    window.removeEventListener("focus", s, !1);
    var $ = t.value.preventDropOnDocument;
    $ && (document.removeEventListener("dragover", rc), document.removeEventListener("drop", d));
  });
  function h($) {
    var V = t.value.noDragEventsBubbling;
    V && $.stopPropagation();
  }
  function y($) {
    return Tw(this, void 0, void 0, function() {
      var V, b, E, C, S;
      return Dw(this, function(K) {
        switch (K.label) {
          case 0:
            return V = t.value, b = V.getFilesFromEvent, E = V.noDragEventsBubbling, C = V.onDragEnter, $.preventDefault(), h($), u.value = js(js([], u.value, !0), [$.target], !1), Lr($) ? b ? [4, b($)] : [2] : [3, 2];
          case 1:
            if (S = K.sent(), S || (S = []), uo($) && !E)
              return [2];
            o.draggedFiles = S, o.isDragActive = !0, C && C($), K.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function p($) {
    var V = t.value.onDragOver;
    if ($.preventDefault(), h($), $.dataTransfer)
      try {
        $.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Lr($) && V && V($), !1;
  }
  function m($) {
    $.preventDefault(), h($);
    var V = u.value.filter(function(C) {
      if (!n.value)
        return !1;
      var S = n.value.$el || n.value;
      return S.contains(C);
    }), b = V.indexOf($.target);
    if (b !== -1 && V.splice(b, 1), u.value = V, !(V.length > 0)) {
      o.draggedFiles = [], o.isDragActive = !1;
      var E = t.value.onDragLeave;
      Lr($) && E && E($);
    }
  }
  function f($) {
    $.preventDefault(), h($), u.value = [];
    var V = t.value, b = V.getFilesFromEvent, E = V.noDragEventsBubbling, C = V.accept, S = V.minSize, K = V.maxSize, L = V.multiple, R = V.maxFiles, X = V.onDrop, ae = V.onDropRejected, Fe = V.onDropAccepted;
    if (Lr($)) {
      if (!b)
        return;
      Promise.resolve(b($)).then(function(Ye) {
        if (!(uo($) && !E)) {
          var $e = [], Me = [];
          Ye.forEach(function(Re) {
            var Ne = Wf(Re, C), vt = Ne[0], bt = Ne[1], Pe = Kf(Re, S, K), ue = Pe[0], we = Pe[1];
            if (vt && ue)
              $e.push(Re);
            else {
              var me = [bt, we].filter(function(Ce) {
                return Ce;
              });
              Me.push({ file: Re, errors: me });
            }
          }), (!L && $e.length > 1 || L && R >= 1 && $e.length > R) && ($e.forEach(function(Re) {
            Me.push({ file: Re, errors: [Nw] });
          }), $e.splice(0)), o.acceptedFiles = $e, o.fileRejections = Me, X && X($e, Me, $), Me.length > 0 && ae && ae(Me, $), $e.length > 0 && Fe && Fe($e, $);
        }
      });
    }
    o.isFileDialogActive = !1, o.isDragActive = !1, o.draggedFiles = [], o.acceptedFiles = [], o.fileRejections = [];
  }
  var g = function($) {
    return t.value.disabled ? void 0 : $;
  }, w = function($) {
    return t.value.noKeyboard ? void 0 : g($);
  }, O = function($) {
    return t.value.noDrag ? void 0 : g($);
  }, P = function($) {
    $ === void 0 && ($ = {});
    var V = $.onFocus, b = $.onBlur, E = $.onClick, C = $.onDragEnter, S = $.onDragenter, K = $.onDragOver, L = $.onDragover, R = $.onDragLeave, X = $.onDragleave, ae = $.onDrop, Fe = nc($, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Qe(Qe({ onFocus: w(Tt(V, i)), onBlur: w(Tt(b, c)), onClick: g(Tt(E, l)), onDragenter: O(Tt(C, S, y)), onDragover: O(Tt(K, L, p)), onDragleave: O(Tt(R, X, m)), onDrop: O(Tt(ae, f)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Fe);
  }, F = function($) {
    $.stopPropagation();
  };
  function U($) {
    $ === void 0 && ($ = {});
    var V = $.onChange, b = $.onClick, E = nc($, ["onChange", "onClick"]), C = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: g(Tt(V, f)),
      onClick: g(Tt(b, F)),
      autoComplete: "off",
      tabIndex: -1,
      ref: r
    };
    return Qe(Qe({}, C), E);
  }
  var A = T(function() {
    return o.draggedFiles ? o.draggedFiles.length : 0;
  }), W = T(function() {
    return A.value > 0 && zw({
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
  return Qe(Qe({}, Nt(o)), { isDragAccept: W, isDragReject: B, isFocused: T(function() {
    return o.isFocused && !t.value.disabled;
  }), getRootProps: P, getInputProps: U, rootRef: n, inputRef: r, open: g(a) });
}
const Hw = { class: "flex w-full flex-col" }, Ww = {
  key: 0,
  class: "text-black select-none"
}, Kw = ["name"], Gw = {
  key: 1,
  class: "select-none"
}, Yw = { key: 2 }, Xw = {
  key: 3,
  class: "select-none"
}, c4 = {
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
    Ro();
    const t = e, n = N(null), r = (l) => {
      let u = [];
      return l.split("_").join(" ").split(" ").map(function(d) {
        u.push(d[0].toUpperCase() + d.slice(1));
      }), u.join(" ");
    }, o = (l, u) => {
      var d;
      if (n.value = null, u && u.length > 0) {
        u[0].errors && (n.value = (d = u[0]) == null ? void 0 : d.errors.map((h) => h.message).join(", ")), console.error(u);
        return;
      }
      if (!l || l.length === 0) {
        n.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = l : t.form[t.field] = l[0];
    }, { getRootProps: a, getInputProps: s, isDragActive: i, ...c } = Gf({
      onDrop: o,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, u) => {
      var d;
      return x(), k("div", Hw, [
        D("div", {
          class: Q(["border-primary-200 bg-primary-50 text-primary-200 hover:border-primary-600 hover:text-primary w-full rounded-lg border-2 border-dashed transition duration-100 ease-in-out", {
            "border-primary-400 bg-primary-100": v(i),
            "bg-primary-100 border-red-600": t.form.errors[e.field] ?? n.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          D("div", ie({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, v(a)()), [
            e.label ? (x(), k("p", Ww, Z(e.label), 1)) : Y("", !0),
            D("input", ie(v(s)(), { name: e.field }), null, 16, Kw),
            v(i) ? (x(), k("span", Gw, "Drop the " + Z(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (x(), k("span", Yw, Z(((d = e.form[e.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (x(), k("span", Xw, "Drag 'n' drop " + Z(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        J(v(tn), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, Jw = { class: "flex w-full" }, Qw = { key: 0 }, Zw = { key: 1 }, e2 = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, t2 = ["onClick"], n2 = ["src"], r2 = ["value"], o2 = { class: "flex items-center gap-4" }, a2 = {
  key: 0,
  class: "text-sm text-gray-600"
}, s2 = {
  key: 1,
  class: "mt-2"
}, i2 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, l2 = { class: "-m-1 flex flex-wrap md:-m-2" }, u2 = { class: "h-full w-full p-1 shadow md:p-2" }, c2 = ["src"], d4 = /* @__PURE__ */ z({
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
    const t = Ro(), n = e, r = dw({
      image: []
    }), o = (y, p) => `/${y.replace(".", "/")}${p ? `/${p}` : ""}`;
    function a() {
      let y = new FormData();
      r.image.forEach((p, m) => {
        y.append(`image[${m}]`, p.file);
      }), y.append("item_type", n.itemType || ""), y.append("item_id", String(n.itemId || "")), t.post(o(n.endPoint), y, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        forceFormData: !0,
        onFinish: () => {
          r.recentlySuccessful = !0, r.image = [];
        }
      });
    }
    function s(y) {
      y.forEach((p) => {
        let m = new FileReader();
        m.onload = (f) => {
          r.image.push({ file: p, dataUrl: f.target.result });
        }, m.readAsDataURL(p);
      });
    }
    const i = (y, p) => {
      if (p && p.length > 0) {
        console.error(p);
        return;
      }
      s(y);
    };
    function c(y) {
      r.image.splice(y, 1);
    }
    const { getRootProps: l, getInputProps: u, isDragActive: d } = Gf({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    }), h = N(!1);
    return (y, p) => (x(), k(re, null, [
      e.canUpload ? (x(), k("form", {
        key: 0,
        onSubmit: St(a, ["prevent"]),
        class: "w-full"
      }, [
        D("div", Jw, [
          D("div", {
            class: Q(["border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary w-full rounded-l-lg border-2 border-r-0 border-dashed transition duration-100 ease-in-out", { "border-primary-400 bg-primary-100": h.value }])
          }, [
            D("div", ie({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, v(l)()), [
              D("input", ve(Ae(v(u)())), null, 16),
              v(d) ? (x(), k("span", Qw, "Drop the files here ...")) : (x(), k("span", Zw, "Drag 'n' drop images here"))
            ], 16),
            v(r).image.length > 0 ? (x(), k("div", e2, [
              (x(!0), k(re, null, be(v(r).image, (m, f) => (x(), k("div", {
                class: "relative cursor-pointer select-none",
                onClick: (g) => c(f),
                key: f
              }, [
                p[0] || (p[0] = D("div", { class: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                D("img", {
                  src: m.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, n2)
              ], 8, t2))), 128))
            ])) : Y("", !0)
          ], 2),
          J(v(PO), {
            class: Q(["inline rounded-l-none", { "cursor-not-allowed": v(r).image.length == 0 }]),
            disabled: v(r).image.length == 0
          }, {
            default: I(() => p[1] || (p[1] = [
              ce(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          v(r).progress ? (x(), k("progress", {
            key: 0,
            value: v(r).progress.percentage,
            max: "100"
          }, Z(v(r).progress.percentage) + "%", 9, r2)) : Y("", !0)
        ]),
        y.$page.props.errors.image ? (x(), H(v(tn), {
          key: 0,
          class: "mt-2",
          message: y.$page.props.errors.image
        }, null, 8, ["message"])) : Y("", !0),
        D("div", o2, [
          J(cn, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: I(() => [
              v(r).recentlySuccessful ? (x(), k("p", a2, "Images uploaded.")) : Y("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Y("", !0),
      e.images.length ? (x(), k("div", s2, [
        p[3] || (p[3] = D("hr", null, null, -1)),
        D("div", i2, [
          D("div", l2, [
            (x(!0), k(re, null, be(e.images, (m, f) => (x(), k("div", {
              key: f,
              class: "flex w-1/3 flex-wrap"
            }, [
              D("div", u2, [
                D("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: m.url
                }, null, 8, c2),
                e.canUpload ? (x(), H(v(ft), {
                  key: 0,
                  href: o("images.delete", m.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700",
                  as: "button"
                }, {
                  default: I(() => p[2] || (p[2] = [
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
}), d2 = { class: "flex items-center space-x-3" }, f2 = ["id", "name", "value", "checked"], p2 = ["for"], f4 = /* @__PURE__ */ z({
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
    return (i, c) => (x(), k("div", d2, [
      D("input", {
        id: s.value,
        type: "radio",
        name: i.name || i.field,
        value: i.value,
        checked: a.value,
        onChange: o,
        class: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
      }, null, 40, f2),
      D("label", {
        for: s.value,
        class: "cursor-pointer text-sm font-medium text-gray-700"
      }, Z(i.label), 9, p2)
    ]));
  }
}), Yf = {
  START: "start"
}, Se = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
  NO_STYLE: "no-style"
}, m2 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, co = /* @__PURE__ */ z({
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
      return x(), H(v(wn), {
        theme: t.theme,
        disabled: t.loading || ((r = t.form) == null ? void 0 : r.processing) || t.disabled,
        type: t.type,
        "custom-class": `relative ${t.customButtonClass}`,
        size: t.size,
        class: "focusable"
      }, {
        default: I(() => {
          var o, a;
          return [
            D("div", {
              class: Q({ "opacity-25": ((o = t.form) == null ? void 0 : o.processing) || t.loading })
            }, [
              q(t.$slots, "default")
            ], 2),
            (a = t.form) != null && a.processing || t.loading ? (x(), k("div", m2, [
              J(v(Vi), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : Y("", !0)
          ];
        }),
        _: 3
      }, 8, ["theme", "disabled", "type", "custom-class", "size"]);
    };
  }
}), h2 = { class: "w-full" }, y2 = ["id"], g2 = ["disabled"], v2 = { key: 0 }, b2 = { key: 1 }, w2 = { class: "ml-2 w-2" }, S2 = {
  class: "absolute z-1000 -mt-1! hidden min-w-full bg-white data-te-dropdown-show:block",
  "data-te-dropdown-menu-ref": ""
}, x2 = { class: "float-left m-0 box-border max-h-80 min-w-full list-none overflow-auto rounded rounded-t-none border border-t-0 border-gray-300 bg-clip-padding text-left text-base shadow" }, C2 = ["onClick"], p4 = {
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
    return (c, l) => (x(), k("div", h2, [
      !e.noLabel && (e.label || e.field) ? (x(), H(v(qn), {
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
          i().length > 0 ? (x(), k("span", v2, Z(i().length) + " selected", 1)) : (x(), k("span", b2, Z(e.placeholder), 1)),
          D("span", w2, [
            J(v(Ee), {
              icon: v(Zs),
              class: "h-5 w-5"
            }, null, 8, ["icon"])
          ])
        ], 8, g2),
        D("div", S2, [
          D("ul", x2, [
            (x(!0), k(re, null, be(e.list, (u) => (x(), k("li", {
              onClick: (d) => a(u),
              key: u[e.optionValue],
              class: "flex w-full min-w-full cursor-pointer items-center justify-start border-t border-gray-50 px-4 py-3 text-sm leading-4 font-normal hover:bg-[rgba(0,0,0,.03)]"
            }, [
              D("div", {
                class: Q(["mr-2 -ml-2 h-4 w-4 rounded border", s(u) ? "bg-primary" : "bg-white"])
              }, null, 2),
              ce(" " + Z(u[e.optionText]), 1)
            ], 8, C2))), 128))
          ])
        ])
      ], 8, y2),
      J(v(tn), {
        message: e.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
function Xf(e = { column: null, direction: "asc" }, t = !0) {
  const n = N({ ...e }), r = Ro(), o = () => {
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
function O2(e = !1, t = []) {
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
function Jf(e = !1, t = 0) {
  const n = N(null), r = N(null), o = N(null), a = N(!1), s = () => {
    if (!n.value || !r.value || !o.value || !(typeof e == "boolean" ? e : e.value)) return;
    const d = n.value.getBoundingClientRect(), h = d.top <= t && d.bottom > t;
    h !== a.value && (a.value = h, h ? (i(), o.value.style.display = "block", o.value.style.top = `${t}px`, o.value.style.width = `${n.value.offsetWidth}px`) : o.value.style.display = "none");
  }, i = () => {
    if (!r.value || !o.value) return;
    const u = r.value.querySelector("tr");
    if (!u) return;
    o.value.innerHTML = "";
    const d = u.cloneNode(!0), h = u.querySelectorAll("th"), y = d.querySelectorAll("th");
    h.forEach((p, m) => {
      y[m] && (y[m].style.width = `${p.offsetWidth}px`);
    }), o.value.appendChild(d), d.addEventListener("click", (p) => {
      const f = p.target.closest("th");
      if (f) {
        const g = Array.from(y).indexOf(f);
        g > -1 && h[g] && h[g].click();
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
  }), Mt(() => {
    window.removeEventListener("scroll", c), window.removeEventListener("resize", l);
  }), {
    tableRef: n,
    headerRef: r,
    stickyRef: o,
    isSticky: T(() => a.value),
    updateStickyState: s
  };
}
function Qf(e, t = {}) {
  const n = Vf(), r = T(() => {
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
function A2(e = {}) {
  const t = e.sortable ?? !1, n = e.selectable ?? !1, r = e.multiple ?? !1, o = e.sticky ?? !1, a = t ? Xf() : null, s = n ? O2(r) : null, i = o ? Jf(o) : null, c = e.resource ? Qf(e.resource, {
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
const E2 = ["id"], P2 = {
  key: 0,
  class: "px-4 pt-4 text-sm text-gray-600"
}, k2 = {
  key: 1,
  class: "mt-6"
}, $2 = 60, T2 = /* @__PURE__ */ z({
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
    } = Jf(T(() => n.value.sticky), $2), c = T(() => [
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
      const y = t.links;
      return y ? {
        links: y,
        current_page: 1,
        last_page: 1,
        per_page: t.defaultPerPage,
        total: t.total || 0,
        from: 1,
        to: t.total || 0
      } : null;
    }), h = T(() => {
      var y, p;
      return t.showPagination && (((p = (y = d.value) == null ? void 0 : y.links) == null ? void 0 : p.length) || 0) > 0;
    });
    return (y, p) => {
      var m;
      return x(), k("div", {
        class: Q(u.value),
        id: n.value.collapseId,
        "data-te-collapse-item": ""
      }, [
        t.total != null ? (x(), k("div", P2, " Found: " + Z(t.total), 1)) : Y("", !0),
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
            n.value.sticky ? (x(), k("div", {
              key: 0,
              ref_key: "stickyRef",
              ref: a,
              class: Q(["fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow", {
                "max-sm:hidden": t.responsive
              }])
            }, null, 2)) : Y("", !0),
            q(y.$slots, "default")
          ], 2)
        ], 2),
        h.value ? (x(), k("div", k2, [
          y.$slots.pagination ? q(y.$slots, "pagination", { key: 0 }) : (x(), H(v(jp), {
            key: 1,
            links: ((m = d.value) == null ? void 0 : m.links) || [],
            showPerPage: t.showPerPage,
            defaultPerPage: t.defaultPerPage
          }, null, 8, ["links", "showPerPage", "defaultPerPage"]))
        ])) : Y("", !0)
      ], 10, E2);
    };
  }
}), D2 = /* @__PURE__ */ z({
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
    return (r, o) => (x(), k("thead", {
      class: Q(n.value)
    }, [
      q(r.$slots, "default")
    ], 2));
  }
}), F2 = { key: 0 }, R2 = { key: 1 }, _2 = { key: 1 }, I2 = { key: 0 }, B2 = /* @__PURE__ */ z({
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
    const t = e, n = typeof t.data == "string" ? Qf(t.data) : null, r = T(() => {
      var c;
      return Array.isArray(t.data) ? t.data : typeof t.data == "string" && n ? t.recordsFromPagination ? (c = n.data.value) == null ? void 0 : c.data : n.rows.value : [];
    }), o = T(() => Array.isArray(r.value) && r.value.length === 0), a = T(() => {
      const c = t.data !== void 0;
      return !t.hideNoRecordsMessage && c && o.value;
    }), s = T(() => !t.hidePlaceholder && (t.loading || (n == null ? void 0 : n.isLoading.value))), i = T(() => !t.ignoreDefer && typeof t.data == "string");
    return T(() => r.value), (c, l) => i.value ? (x(), k("tbody", _2, [
      J(v(pw), {
        data: typeof t.data == "string" ? t.data : ""
      }, {
        fallback: I(() => [
          t.hidePlaceholder ? Y("", !0) : (x(), H(v(sc), {
            key: 0,
            placeholders: c.loadingRows
          }, null, 8, ["placeholders"]))
        ]),
        default: I(() => [
          a.value ? (x(), k("tr", I2, [
            J(v(fo), {
              colspan: "999",
              class: "text-center text-gray-500 py-8"
            }, {
              default: I(() => [
                ce(Z(t.emptyMessage || t.noRecordsMessage), 1)
              ]),
              _: 1
            })
          ])) : Y("", !0),
          q(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ])) : (x(), k("tbody", F2, [
      s.value ? (x(), H(v(sc), {
        key: 0,
        placeholders: c.loadingRows
      }, null, 8, ["placeholders"])) : a.value ? (x(), k("tr", R2, [
        J(v(fo), {
          colspan: "999",
          class: "text-center text-gray-500 py-8"
        }, {
          default: I(() => [
            ce(Z(t.emptyMessage || t.noRecordsMessage), 1)
          ]),
          _: 1
        })
      ])) : q(c.$slots, "default", { key: 2 })
    ]));
  }
}), L2 = { class: "flex items-center justify-between" }, M2 = {
  key: 0,
  class: "sort-arrows ml-2 flex flex-col items-center"
}, N2 = /* @__PURE__ */ z({
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
    const t = e, n = T(() => t.column || t.orderBy), { getSortDirection: r, isSorted: o, sort: a } = Xf(), s = T(() => n.value ? r(n.value) : null), i = T(() => n.value ? o(n.value) : !1), c = T(() => t.sortable && n.value), l = () => {
      !c.value || !n.value || a(n.value);
    }, u = (y) => s.value === y && i.value ? "text-blue-600" : "text-gray-400", d = T(() => [
      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50",
      {
        "cursor-pointer hover:bg-gray-100": c.value,
        "text-left": t.align === "left",
        "text-center": t.align === "center",
        "text-right": t.align === "right",
        "w-0": t.width === "auto"
      },
      t.width && t.width !== "auto" ? `w-${t.width}` : ""
    ]), h = T(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (y, p) => (x(), k("th", {
      scope: "col",
      class: Q(d.value),
      style: et(h.value),
      onClick: l
    }, [
      D("div", L2, [
        q(y.$slots, "default"),
        c.value ? (x(), k("span", M2, [
          (x(), k("svg", {
            class: Q(["h-3 w-3 -mb-1", u("asc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, p[0] || (p[0] = [
            D("path", { d: "M6 3L2 7h8L6 3z" }, null, -1)
          ]), 2)),
          (x(), k("svg", {
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
}), j2 = {
  key: 0,
  class: "sm:hidden"
}, q2 = { class: "font-medium text-gray-500" }, V2 = { class: "ml-2" }, z2 = { key: 1 }, fo = /* @__PURE__ */ z({
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
    return (o, a) => (x(), k("td", {
      class: Q(n.value),
      style: et(r.value)
    }, [
      t.label && t.responsive ? (x(), k("div", j2, [
        D("span", q2, Z(t.label) + ":", 1),
        D("span", V2, [
          q(o.$slots, "default")
        ])
      ])) : (x(), k("div", z2, [
        q(o.$slots, "default")
      ]))
    ], 6));
  }
}), U2 = ["data-te-target", "aria-controls"], m4 = /* @__PURE__ */ z({
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => (x(), k("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      q(t.$slots, "default")
    ], 8, U2));
  }
}), H2 = { colspan: "999" }, W2 = ["id"], h4 = /* @__PURE__ */ z({
  __name: "TrCollapse",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => (x(), k("tr", null, [
      D("td", H2, [
        D("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          q(t.$slots, "default")
        ], 8, W2)
      ])
    ]));
  }
}), sc = /* @__PURE__ */ z({
  __name: "TrPlaceholder",
  props: {
    placeholders: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(!0), k(re, null, be(t.placeholders, (o) => (x(), k("tr", { key: o }, [
      J(v(fo), { colspan: "999" }, {
        default: I(() => r[0] || (r[0] = [
          D("div", { class: "tr-placeholder bg-opacity-75 h-8 w-full animate-pulse rounded-md bg-gray-500" }, null, -1)
        ])),
        _: 1
      })
    ]))), 128));
  }
}), K2 = { class: "max-xxs:text-xxs mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600" }, G2 = {
  key: 0,
  class: "xs:w-fit mb-2 h-fit w-full"
}, Y2 = { key: 0 }, X2 = {
  key: 1,
  class: "ml-1"
}, J2 = { class: "flex w-fit flex-wrap" }, Q2 = {
  key: 0,
  class: "font-semibold"
}, Z2 = { class: "mb-1" }, eS = {
  key: 0,
  class: "text-primary w-full font-semibold whitespace-normal"
}, tS = { class: "w-full break-words" }, nS = { class: "mb-1 flex flex-col" }, rS = { key: 1 }, y4 = /* @__PURE__ */ z({
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
      return x(), k("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        D("div", K2, [
          t.itemId || t.timeStamp ? (x(), k("div", G2, [
            t.itemId ? (x(), k(re, { key: 0 }, [
              t.itemId.routeName ? (x(), H(v(ft), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: I(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (x(), k(re, { key: 0 }, [
                    ce("#")
                  ], 64)) : Y("", !0),
                  ce(" " + Z(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (x(), k("span", Y2, [
                t.itemId.prefix || t.itemId.prefix == null ? (x(), k(re, { key: 0 }, [
                  ce("#")
                ], 64)) : Y("", !0),
                ce(" " + Z(t.itemId.id), 1)
              ]))
            ], 64)) : Y("", !0),
            t.timeStamp ? (x(), k("span", X2, [
              t.itemId ? (x(), k(re, { key: 0 }, [
                ce("-")
              ], 64)) : Y("", !0),
              ce(" " + Z(t.timeStamp), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          D("div", J2, [
            (x(!0), k(re, null, be(n.pills, (a, s) => (x(), k(re, { key: s }, [
              a.text ? (x(), k("span", {
                key: 0,
                class: "bg-primary rounded-md border p-1 px-2 whitespace-nowrap text-white",
                style: et({
                  backgroundColor: a.color ? a.color : null
                })
              }, Z(a.text), 5)) : Y("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (x(), k(re, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (x(), k("p", Q2, Z(t.title.text), 1)) : (x(), H(v(ft), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: I(() => [
              ce(Z(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Y("", !0),
        D("div", Z2, [
          t.extraText ? (x(), k("p", eS, [
            r[0] || (r[0] = ce(" Engineer Note: ")),
            D("span", tS, Z(t.extraText), 1)
          ])) : Y("", !0)
        ]),
        D("div", nS, [
          (x(!0), k(re, null, be(n.options, (a, s) => (x(), k(re, { key: s }, [
            !a.routeName && !a.href ? (x(), k("span", {
              key: 0,
              style: et({ color: a.color ? a.color : "#000" })
            }, Z(a.text), 5)) : (x(), H(v(ft), {
              href: a.href ? a.href : n.route(a.routeName, a.routeData),
              style: et({ color: a.color ? a.color : "#000" }),
              key: "link-" + s
            }, {
              default: I(() => [
                ce(Z(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 128))
        ]),
        (o = t.amount) != null && o.amount ? (x(), k("div", rS, [
          D("span", null, Z(t.amount.text + v(mw)(t.amount.amount)), 1)
        ])) : Y("", !0),
        D("div", null, [
          q(n.$slots, "default")
        ])
      ]);
    };
  }
}), oS = { class: "flex" }, aS = { class: "flex-shrink-0" }, sS = { class: "ml-3 flex-1" }, iS = {
  key: 0,
  class: "mb-1 text-sm font-medium"
}, lS = { class: "text-sm" }, uS = {
  key: 0,
  class: "ml-auto flex-shrink-0"
}, g4 = /* @__PURE__ */ z({
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
      set: (m) => {
        o.value = m, r("update:modelValue", m);
      }
    });
    ne(
      () => n.modelValue,
      (m) => {
        o.value = m;
      },
      { immediate: !0 }
    );
    const s = T(() => {
      const m = "relative w-full rounded-lg border px-4 py-3 text-sm";
      switch (n.type) {
        case "success":
          return `${m} border-green-200 bg-green-50 text-green-800`;
        case "error":
          return `${m} border-red-200 bg-red-50 text-red-800`;
        case "warning":
          return `${m} border-yellow-200 bg-yellow-50 text-yellow-800`;
        case "info":
        default:
          return `${m} border-blue-200 bg-blue-50 text-blue-800`;
      }
    }), i = T(() => {
      switch (n.type) {
        case "success":
          return mm;
        case "error":
          return Pm;
        case "warning":
          return Am;
        case "info":
        default:
          return gm;
      }
    }), c = () => {
      a.value = !1, r("dismiss");
    }, l = (m) => {
      const f = m;
      f.style.height = "0", f.style.opacity = "0", f.style.transform = "translateY(-8px) scale(0.95)";
    }, u = (m, f) => {
      const g = m, w = g.scrollHeight;
      g.style.transition = "all 400ms ease-out", requestAnimationFrame(() => {
        g.style.height = `${w}px`, g.style.opacity = "1", g.style.transform = "translateY(0) scale(1)";
      }), setTimeout(f, 400);
    }, d = (m) => {
      const f = m;
      f.style.height = "auto";
    }, h = (m) => {
      const f = m, g = f.scrollHeight;
      f.style.height = `${g}px`;
    }, y = (m, f) => {
      const g = m;
      g.style.transition = "all 350ms ease-in", requestAnimationFrame(() => {
        g.style.height = "0", g.style.opacity = "0", g.style.transform = "translateY(-8px) scale(0.95)";
      }), setTimeout(f, 350);
    }, p = (m) => {
      const f = m;
      f.style.height = "", f.style.opacity = "", f.style.transform = "", f.style.transition = "";
    };
    return (m, f) => (x(), H(cn, {
      name: "alert",
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: d,
      onBeforeLeave: h,
      onLeave: y,
      onAfterLeave: p,
      css: !1
    }, {
      default: I(() => [
        a.value ? (x(), k("div", {
          key: 0,
          class: Q(s.value),
          role: "alert",
          style: { overflow: "hidden" }
        }, [
          D("div", oS, [
            D("div", aS, [
              J(v(Ee), {
                icon: i.value,
                class: Q(["h-5 w-5", {
                  "text-green-400": m.type === "success",
                  "text-red-400": m.type === "error",
                  "text-yellow-400": m.type === "warning",
                  "text-blue-400": m.type === "info"
                }])
              }, null, 8, ["icon", "class"])
            ]),
            D("div", sS, [
              m.title ? (x(), k("h3", iS, Z(m.title), 1)) : Y("", !0),
              D("div", lS, [
                q(m.$slots, "default")
              ])
            ]),
            m.dismissible ? (x(), k("div", uS, [
              D("button", {
                onClick: c,
                class: Q(["inline-flex rounded-md p-1.5 transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none", {
                  "text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50": m.type === "success",
                  "text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50": m.type === "error",
                  "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50": m.type === "warning",
                  "text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50": m.type === "info"
                }]),
                "aria-label": "Dismiss alert"
              }, [
                J(v(Ee), {
                  icon: v(Zr),
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
}), cS = ["top", "right", "bottom", "left"], Zt = Math.min, Ze = Math.max, po = Math.round, Mr = Math.floor, At = (e) => ({
  x: e,
  y: e
}), dS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, fS = {
  start: "end",
  end: "start"
};
function qs(e, t, n) {
  return Ze(e, Zt(t, n));
}
function Bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Lt(e) {
  return e.split("-")[0];
}
function Hn(e) {
  return e.split("-")[1];
}
function Ci(e) {
  return e === "x" ? "y" : "x";
}
function Oi(e) {
  return e === "y" ? "height" : "width";
}
function Rt(e) {
  return ["top", "bottom"].includes(Lt(e)) ? "y" : "x";
}
function Ai(e) {
  return Ci(Rt(e));
}
function pS(e, t, n) {
  n === void 0 && (n = !1);
  const r = Hn(e), o = Ai(e), a = Oi(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = mo(s)), [s, mo(s)];
}
function mS(e) {
  const t = mo(e);
  return [Vs(e), t, Vs(t)];
}
function Vs(e) {
  return e.replace(/start|end/g, (t) => fS[t]);
}
function hS(e, t, n) {
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
function yS(e, t, n, r) {
  const o = Hn(e);
  let a = hS(Lt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Vs)))), a;
}
function mo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => dS[t]);
}
function gS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zf(e) {
  return typeof e != "number" ? gS(e) : {
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
function ic(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Rt(t), s = Ai(t), i = Oi(s), c = Lt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let y;
  switch (c) {
    case "top":
      y = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      y = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      y = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      y = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      y = {
        x: r.x,
        y: r.y
      };
  }
  switch (Hn(t)) {
    case "start":
      y[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      y[s] += h * (n && l ? -1 : 1);
      break;
  }
  return y;
}
const vS = async (e, t, n) => {
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
  } = ic(l, r, c), h = r, y = {}, p = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: f,
      fn: g
    } = i[m], {
      x: w,
      y: O,
      data: P,
      reset: F
    } = await g({
      x: u,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: y,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = O ?? d, y = {
      ...y,
      [f]: {
        ...y[f],
        ...P
      }
    }, F && p <= 50 && (p++, typeof F == "object" && (F.placement && (h = F.placement), F.rects && (l = F.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : F.rects), {
      x: u,
      y: d
    } = ic(l, h, c)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: y
  };
};
async function fr(e, t) {
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
    altBoundary: h = !1,
    padding: y = 0
  } = Bt(t, e), p = Zf(y), f = i[h ? d === "floating" ? "reference" : "floating" : d], g = ho(await a.getClippingRect({
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
  }, F = ho(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: O,
    strategy: c
  }) : w);
  return {
    top: (g.top - F.top + p.top) / P.y,
    bottom: (F.bottom - g.bottom + p.bottom) / P.y,
    left: (g.left - F.left + p.left) / P.x,
    right: (F.right - g.right + p.right) / P.x
  };
}
const bS = (e) => ({
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
    } = Bt(e, t) || {};
    if (l == null)
      return {};
    const d = Zf(u), h = {
      x: n,
      y: r
    }, y = Ai(o), p = Oi(y), m = await s.getDimensions(l), f = y === "y", g = f ? "top" : "left", w = f ? "bottom" : "right", O = f ? "clientHeight" : "clientWidth", P = a.reference[p] + a.reference[y] - h[y] - a.floating[p], F = h[y] - a.reference[y], U = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let A = U ? U[O] : 0;
    (!A || !await (s.isElement == null ? void 0 : s.isElement(U))) && (A = i.floating[O] || a.floating[p]);
    const W = P / 2 - F / 2, B = A / 2 - m[p] / 2 - 1, $ = Zt(d[g], B), V = Zt(d[w], B), b = $, E = A - m[p] - V, C = A / 2 - m[p] / 2 + W, S = qs(b, C, E), K = !c.arrow && Hn(o) != null && C !== S && a.reference[p] / 2 - (C < b ? $ : V) - m[p] / 2 < 0, L = K ? C < b ? C - b : C - E : 0;
    return {
      [y]: h[y] + L,
      data: {
        [y]: S,
        centerOffset: C - S - L,
        ...K && {
          alignmentOffset: L
        }
      },
      reset: K
    };
  }
}), wS = function(e) {
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
        fallbackPlacements: h,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: m = !0,
        ...f
      } = Bt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const g = Lt(o), w = Rt(i), O = Lt(i) === i, P = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), F = h || (O || !m ? [mo(i)] : mS(i)), U = p !== "none";
      !h && U && F.push(...yS(i, m, p, P));
      const A = [i, ...F], W = await fr(t, f), B = [];
      let $ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && B.push(W[g]), d) {
        const S = pS(o, s, P);
        B.push(W[S[0]], W[S[1]]);
      }
      if ($ = [...$, {
        placement: o,
        overflows: B
      }], !B.every((S) => S <= 0)) {
        var V, b;
        const S = (((V = a.flip) == null ? void 0 : V.index) || 0) + 1, K = A[S];
        if (K) {
          var E;
          const R = d === "alignment" ? w !== Rt(K) : !1, X = ((E = $[0]) == null ? void 0 : E.overflows[0]) > 0;
          if (!R || X)
            return {
              data: {
                index: S,
                overflows: $
              },
              reset: {
                placement: K
              }
            };
        }
        let L = (b = $.filter((R) => R.overflows[0] <= 0).sort((R, X) => R.overflows[1] - X.overflows[1])[0]) == null ? void 0 : b.placement;
        if (!L)
          switch (y) {
            case "bestFit": {
              var C;
              const R = (C = $.filter((X) => {
                if (U) {
                  const ae = Rt(X.placement);
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
function lc(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function uc(e) {
  return cS.some((t) => e[t] >= 0);
}
const SS = function(e) {
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
          const a = await fr(t, {
            ...o,
            elementContext: "reference"
          }), s = lc(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: uc(s)
            }
          };
        }
        case "escaped": {
          const a = await fr(t, {
            ...o,
            altBoundary: !0
          }), s = lc(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: uc(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function xS(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Lt(n), i = Hn(n), c = Rt(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Bt(t, e);
  let {
    mainAxis: h,
    crossAxis: y,
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
  return i && typeof p == "number" && (y = i === "end" ? p * -1 : p), c ? {
    x: y * u,
    y: h * l
  } : {
    x: h * l,
    y: y * u
  };
}
const CS = function(e) {
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
      } = t, c = await xS(t, e);
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
}, OS = function(e) {
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
              x: g,
              y: w
            } = f;
            return {
              x: g,
              y: w
            };
          }
        },
        ...c
      } = Bt(e, t), l = {
        x: n,
        y: r
      }, u = await fr(t, c), d = Rt(Lt(o)), h = Ci(d);
      let y = l[h], p = l[d];
      if (a) {
        const f = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", w = y + u[f], O = y - u[g];
        y = qs(w, y, O);
      }
      if (s) {
        const f = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", w = p + u[f], O = p - u[g];
        p = qs(w, p, O);
      }
      const m = i.fn({
        ...t,
        [h]: y,
        [d]: p
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [h]: a,
            [d]: s
          }
        }
      };
    }
  };
}, AS = function(e) {
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
      } = Bt(e, t), u = {
        x: n,
        y: r
      }, d = Rt(o), h = Ci(d);
      let y = u[h], p = u[d];
      const m = Bt(i, t), f = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (c) {
        const O = h === "y" ? "height" : "width", P = a.reference[h] - a.floating[O] + f.mainAxis, F = a.reference[h] + a.reference[O] - f.mainAxis;
        y < P ? y = P : y > F && (y = F);
      }
      if (l) {
        var g, w;
        const O = h === "y" ? "width" : "height", P = ["top", "left"].includes(Lt(o)), F = a.reference[d] - a.floating[O] + (P && ((g = s.offset) == null ? void 0 : g[d]) || 0) + (P ? 0 : f.crossAxis), U = a.reference[d] + a.reference[O] + (P ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (P ? f.crossAxis : 0);
        p < F ? p = F : p > U && (p = U);
      }
      return {
        [h]: y,
        [d]: p
      };
    }
  };
}, ES = function(e) {
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
      } = Bt(e, t), u = await fr(t, l), d = Lt(o), h = Hn(o), y = Rt(o) === "y", {
        width: p,
        height: m
      } = a.floating;
      let f, g;
      d === "top" || d === "bottom" ? (f = d, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = d, f = h === "end" ? "top" : "bottom");
      const w = m - u.top - u.bottom, O = p - u.left - u.right, P = Zt(m - u[f], w), F = Zt(p - u[g], O), U = !t.middlewareData.shift;
      let A = P, W = F;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (W = O), (r = t.middlewareData.shift) != null && r.enabled.y && (A = w), U && !h) {
        const $ = Ze(u.left, 0), V = Ze(u.right, 0), b = Ze(u.top, 0), E = Ze(u.bottom, 0);
        y ? W = p - 2 * ($ !== 0 || V !== 0 ? $ + V : Ze(u.left, u.right)) : A = m - 2 * (b !== 0 || E !== 0 ? b + E : Ze(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: W,
        availableHeight: A
      });
      const B = await s.getDimensions(i.floating);
      return p !== B.width || m !== B.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Io() {
  return typeof window < "u";
}
function bn(e) {
  return Ei(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pt(e) {
  var t;
  return (t = (Ei(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ei(e) {
  return Io() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function mt(e) {
  return Io() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function Et(e) {
  return Io() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function cc(e) {
  return !Io() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
}
function xr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ht(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function PS(e) {
  return ["table", "td", "th"].includes(bn(e));
}
function Bo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Pi(e) {
  const t = ki(), n = mt(e) ? ht(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function kS(e) {
  let t = en(e);
  for (; Et(t) && !Mn(t); ) {
    if (Pi(t))
      return t;
    if (Bo(t))
      return null;
    t = en(t);
  }
  return null;
}
function ki() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mn(e) {
  return ["html", "body", "#document"].includes(bn(e));
}
function ht(e) {
  return tt(e).getComputedStyle(e);
}
function Lo(e) {
  return mt(e) ? {
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
    cc(e) && e.host || // Fallback.
    Pt(e)
  );
  return cc(t) ? t.host : t;
}
function ep(e) {
  const t = en(e);
  return Mn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Et(t) && xr(t) ? t : ep(t);
}
function pr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ep(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = tt(o);
  if (a) {
    const i = zs(s);
    return t.concat(s, s.visualViewport || [], xr(o) ? o : [], i && n ? pr(i) : []);
  }
  return t.concat(o, pr(o, [], n));
}
function zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function tp(e) {
  const t = ht(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Et(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = po(n) !== a || po(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function $i(e) {
  return mt(e) ? e : e.contextElement;
}
function In(e) {
  const t = $i(e);
  if (!Et(t))
    return At(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = tp(t);
  let s = (a ? po(n.width) : n.width) / r, i = (a ? po(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const $S = /* @__PURE__ */ At(0);
function np(e) {
  const t = tt(e);
  return !ki() || !t.visualViewport ? $S : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function TS(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function hn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = $i(e);
  let s = At(1);
  t && (r ? mt(r) && (s = In(r)) : s = In(e));
  const i = TS(a, n, r) ? np(a) : At(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const h = tt(a), y = r && mt(r) ? tt(r) : r;
    let p = h, m = zs(p);
    for (; m && r && y !== p; ) {
      const f = In(m), g = m.getBoundingClientRect(), w = ht(m), O = g.left + (m.clientLeft + parseFloat(w.paddingLeft)) * f.x, P = g.top + (m.clientTop + parseFloat(w.paddingTop)) * f.y;
      c *= f.x, l *= f.y, u *= f.x, d *= f.y, c += O, l += P, p = tt(m), m = zs(p);
    }
  }
  return ho({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function Ti(e, t) {
  const n = Lo(e).scrollLeft;
  return t ? t.left + n : hn(Pt(e)).left + n;
}
function rp(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Ti(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function DS(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Pt(r), i = t ? Bo(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = At(1);
  const u = At(0), d = Et(r);
  if ((d || !d && !a) && ((bn(r) !== "body" || xr(s)) && (c = Lo(r)), Et(r))) {
    const y = hn(r);
    l = In(r), u.x = y.x + r.clientLeft, u.y = y.y + r.clientTop;
  }
  const h = s && !d && !a ? rp(s, c, !0) : At(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + h.y
  };
}
function FS(e) {
  return Array.from(e.getClientRects());
}
function RS(e) {
  const t = Pt(e), n = Lo(e), r = e.ownerDocument.body, o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Ti(e);
  const i = -n.scrollTop;
  return ht(r).direction === "rtl" && (s += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function _S(e, t) {
  const n = tt(e), r = Pt(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = ki();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function IS(e, t) {
  const n = hn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Et(e) ? In(e) : At(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function dc(e, t, n) {
  let r;
  if (t === "viewport")
    r = _S(e, n);
  else if (t === "document")
    r = RS(Pt(e));
  else if (mt(t))
    r = IS(t, n);
  else {
    const o = np(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ho(r);
}
function op(e, t) {
  const n = en(e);
  return n === t || !mt(n) || Mn(n) ? !1 : ht(n).position === "fixed" || op(n, t);
}
function BS(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = pr(e, [], !1).filter((i) => mt(i) && bn(i) !== "body"), o = null;
  const a = ht(e).position === "fixed";
  let s = a ? en(e) : e;
  for (; mt(s) && !Mn(s); ) {
    const i = ht(s), c = Pi(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || xr(s) && !c && op(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = en(s);
  }
  return t.set(e, r), r;
}
function LS(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Bo(t) ? [] : BS(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = dc(t, u, o);
    return l.top = Ze(d.top, l.top), l.right = Zt(d.right, l.right), l.bottom = Zt(d.bottom, l.bottom), l.left = Ze(d.left, l.left), l;
  }, dc(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function MS(e) {
  const {
    width: t,
    height: n
  } = tp(e);
  return {
    width: t,
    height: n
  };
}
function NS(e, t, n) {
  const r = Et(t), o = Pt(t), a = n === "fixed", s = hn(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = At(0);
  function l() {
    c.x = Ti(o);
  }
  if (r || !r && !a)
    if ((bn(t) !== "body" || xr(o)) && (i = Lo(t)), r) {
      const y = hn(t, !0, a, t);
      c.x = y.x + t.clientLeft, c.y = y.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? rp(o, i) : At(0), d = s.left + i.scrollLeft - c.x - u.x, h = s.top + i.scrollTop - c.y - u.y;
  return {
    x: d,
    y: h,
    width: s.width,
    height: s.height
  };
}
function Xa(e) {
  return ht(e).position === "static";
}
function fc(e, t) {
  if (!Et(e) || ht(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Pt(e) === n && (n = n.ownerDocument.body), n;
}
function ap(e, t) {
  const n = tt(e);
  if (Bo(e))
    return n;
  if (!Et(e)) {
    let o = en(e);
    for (; o && !Mn(o); ) {
      if (mt(o) && !Xa(o))
        return o;
      o = en(o);
    }
    return n;
  }
  let r = fc(e, t);
  for (; r && PS(r) && Xa(r); )
    r = fc(r, t);
  return r && Mn(r) && Xa(r) && !Pi(r) ? n : r || kS(e) || n;
}
const jS = async function(e) {
  const t = this.getOffsetParent || ap, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: NS(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function qS(e) {
  return ht(e).direction === "rtl";
}
const VS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: DS,
  getDocumentElement: Pt,
  getClippingRect: LS,
  getOffsetParent: ap,
  getElementRects: jS,
  getClientRects: FS,
  getDimensions: MS,
  getScale: In,
  isElement: mt,
  isRTL: qS
};
function sp(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function zS(e, t) {
  let n = null, r;
  const o = Pt(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: h,
      height: y
    } = l;
    if (i || t(), !h || !y)
      return;
    const p = Mr(d), m = Mr(o.clientWidth - (u + h)), f = Mr(o.clientHeight - (d + y)), g = Mr(u), O = {
      rootMargin: -p + "px " + -m + "px " + -f + "px " + -g + "px",
      threshold: Ze(0, Zt(1, c)) || 1
    };
    let P = !0;
    function F(U) {
      const A = U[0].intersectionRatio;
      if (A !== c) {
        if (!P)
          return s();
        A ? s(!1, A) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      A === 1 && !sp(l, e.getBoundingClientRect()) && s(), P = !1;
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
function US(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = $i(e), u = o || a ? [...l ? pr(l) : [], ...pr(t)] : [];
  u.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), a && g.addEventListener("resize", n);
  });
  const d = l && i ? zS(l, n) : null;
  let h = -1, y = null;
  s && (y = new ResizeObserver((g) => {
    let [w] = g;
    w && w.target === l && y && (y.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var O;
      (O = y) == null || O.observe(t);
    })), n();
  }), l && !c && y.observe(l), y.observe(t));
  let p, m = c ? hn(e) : null;
  c && f();
  function f() {
    const g = hn(e);
    m && !sp(m, g) && n(), m = g, p = requestAnimationFrame(f);
  }
  return n(), () => {
    var g;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), d == null || d(), (g = y) == null || g.disconnect(), y = null, c && cancelAnimationFrame(p);
  };
}
const HS = CS, WS = OS, pc = wS, KS = ES, GS = SS, YS = bS, XS = AS, JS = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: VS,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return vS(e, t, {
    ...o,
    platform: a
  });
};
function QS(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Us(e) {
  if (QS(e)) {
    const t = e.$el;
    return Ei(t) && bn(t) === "#comment" ? null : t;
  }
  return e;
}
function Tn(e) {
  return typeof e == "function" ? e() : v(e);
}
function ZS(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Us(Tn(e.element));
      return n == null ? {} : YS({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function ip(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mc(e, t) {
  const n = ip(e);
  return Math.round(t * n) / n;
}
function e3(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = T(() => {
    var A;
    return (A = Tn(n.open)) != null ? A : !0;
  }), a = T(() => Tn(n.middleware)), s = T(() => {
    var A;
    return (A = Tn(n.placement)) != null ? A : "bottom";
  }), i = T(() => {
    var A;
    return (A = Tn(n.strategy)) != null ? A : "absolute";
  }), c = T(() => {
    var A;
    return (A = Tn(n.transform)) != null ? A : !0;
  }), l = T(() => Us(e.value)), u = T(() => Us(t.value)), d = N(0), h = N(0), y = N(i.value), p = N(s.value), m = mr({}), f = N(!1), g = T(() => {
    const A = {
      position: y.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return A;
    const W = mc(u.value, d.value), B = mc(u.value, h.value);
    return c.value ? {
      ...A,
      transform: "translate(" + W + "px, " + B + "px)",
      ...ip(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: y.value,
      left: W + "px",
      top: B + "px"
    };
  });
  let w;
  function O() {
    if (l.value == null || u.value == null)
      return;
    const A = o.value;
    JS(l.value, u.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((W) => {
      d.value = W.x, h.value = W.y, y.value = W.strategy, p.value = W.placement, m.value = W.middlewareData, f.value = A !== !1;
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
  function U() {
    o.value || (f.value = !1);
  }
  return ne([a, s, i, o], O, {
    flush: "sync"
  }), ne([l, u], F, {
    flush: "sync"
  }), ne(o, U, {
    flush: "sync"
  }), Pc() && kc(P), {
    x: Pn(d),
    y: Pn(h),
    strategy: Pn(y),
    placement: Pn(p),
    middlewareData: Pn(m),
    isPositioned: Pn(f),
    floatingStyles: g,
    update: O
  };
}
function Di(e) {
  return e ? e.flatMap((t) => t.type === re ? Di(t.children) : [t]) : [];
}
const Hs = z({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var c, l;
      if (!n.default)
        return null;
      const r = Di(n.default()), o = r.findIndex((u) => u.type !== $c);
      if (o === -1)
        return r;
      const a = r[o];
      (c = a.props) == null || delete c.ref;
      const s = a.props ? ie(t, a.props) : t;
      t.class && ((l = a.props) != null && l.class) && delete a.props.class;
      const i = Yp(a, s);
      for (const u in s)
        u.startsWith("on") && (i.props || (i.props = {}), i.props[u] = s[u]);
      return r.length === 1 ? i : (r[o] = i, r);
    };
  }
}), t3 = ["area", "img", "input"], ke = z({
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
    return typeof r == "string" && t3.includes(r) ? () => qe(r, t) : r !== "template" ? () => qe(e.as, t, { default: n.default }) : () => qe(Hs, t, { default: n.default });
  }
}), n3 = /* @__PURE__ */ z({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (x(), H(v(ke), {
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
        q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function r3(e, t) {
  var n;
  const r = mr();
  return at(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Tc(r);
}
function Cr(e) {
  return Pc() ? (kc(e), !0) : !1;
}
function o3() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const s = () => t(a);
      return Cr(s), {
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
function a3(e) {
  let t = !1, n;
  const r = Dc(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function lp(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...a) => (t += 1, r || (r = Dc(!0), n = r.run(() => e(...a))), Cr(o), n);
}
const qt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const s3 = (e) => typeof e < "u", i3 = Object.prototype.toString, l3 = (e) => i3.call(e) === "[object Object]", hc = /* @__PURE__ */ u3();
function u3() {
  var e, t;
  return qt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function c3(e) {
  return vn();
}
function Ja(e) {
  return Array.isArray(e) ? e : [e];
}
function up(e, t = 1e4) {
  return Jp((n, r) => {
    let o = Ft(e), a;
    const s = () => setTimeout(() => {
      o = Ft(e), r();
    }, Ft(t));
    return Cr(() => {
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
function d3(e, t) {
  c3() && Xp(e, t);
}
function cp(e, t, n = {}) {
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
    }, Ft(t));
  }
  return r && (a.value = !0, qt && l()), Cr(c), {
    isPending: Tc(a),
    start: l,
    stop: c
  };
}
function f3(e, t, n) {
  return ne(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Fi = qt ? window : void 0;
function Wn(e) {
  var t;
  const n = Ft(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function yn(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, r = (i, c, l, u) => (i.addEventListener(c, l, u), () => i.removeEventListener(c, l, u)), o = T(() => {
    const i = Ja(Ft(e[0])).filter((c) => c != null);
    return i.every((c) => typeof c != "string") ? i : void 0;
  }), a = f3(
    () => {
      var i, c;
      return [
        (c = (i = o.value) == null ? void 0 : i.map((l) => Wn(l))) != null ? c : [Fi].filter((l) => l != null),
        Ja(Ft(o.value ? e[1] : e[0])),
        Ja(v(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ft(o.value ? e[3] : e[2])
      ];
    },
    ([i, c, l, u]) => {
      if (n(), !(i != null && i.length) || !(c != null && c.length) || !(l != null && l.length))
        return;
      const d = l3(u) ? { ...u } : u;
      t.push(
        ...i.flatMap(
          (h) => c.flatMap(
            (y) => l.map((p) => r(h, y, p, d))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    a(), n();
  };
  return Cr(n), s;
}
function p3() {
  const e = mr(!1), t = vn();
  return t && pe(() => {
    e.value = !0;
  }, t), e;
}
function m3(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function h3(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Fi,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = r, c = m3(t);
  return yn(o, a, (u) => {
    u.repeat && Ft(i) || c(u) && n(u);
  }, s);
}
function y3(e) {
  return JSON.parse(JSON.stringify(e));
}
function Kn(e, t, n, r = {}) {
  var o, a, s;
  const {
    clone: i = !1,
    passive: c = !1,
    eventName: l,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: h
  } = r, y = vn(), p = n || (y == null ? void 0 : y.emit) || ((o = y == null ? void 0 : y.$emit) == null ? void 0 : o.bind(y)) || ((s = (a = y == null ? void 0 : y.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(y == null ? void 0 : y.proxy));
  let m = l;
  t || (t = "modelValue"), m = m || `update:${t.toString()}`;
  const f = (O) => i ? typeof i == "function" ? i(O) : y3(O) : O, g = () => s3(e[t]) ? f(e[t]) : d, w = (O) => {
    h ? h(O) && p(m, O) : p(m, O);
  };
  if (c) {
    const O = g(), P = N(O);
    let F = !1;
    return ne(
      () => e[t],
      (U) => {
        F || (F = !0, P.value = f(U), De(() => F = !1));
      }
    ), ne(
      P,
      (U) => {
        !F && (U !== e[t] || u) && w(U);
      },
      { deep: u }
    ), P;
  } else
    return T({
      get() {
        return g();
      },
      set(O) {
        w(O);
      }
    });
}
function st(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const i = Xs(r, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (yo(r, s), s)];
}
const [Ri, v4] = st("ConfigProvider");
function _i(e) {
  const t = Ri({
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
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Wn(t);
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
const [dp, g3] = st("CollapsibleRoot"), Ii = /* @__PURE__ */ z({
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
    const r = e, a = Kn(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), { disabled: s, unmountOnHide: i } = Nt(r);
    return g3({
      contentId: "",
      disabled: s,
      open: a,
      unmountOnHide: i,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), le(), (c, l) => (x(), H(v(ke), {
      as: c.as,
      "as-child": r.asChild,
      "data-state": v(a) ? "open" : "closed",
      "data-disabled": v(s) ? "" : void 0
    }, {
      default: I(() => [
        q(c.$slots, "default", { open: v(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), v3 = ["INPUT", "TEXTAREA"];
function b3(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && v3.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: a = "[data-reka-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: c = "ltr",
    preventScroll: l = !0,
    focus: u = !1
  } = r, [d, h, y, p, m, f] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], g = y || p, w = d || h;
  if (!m && !f && (!g && !w || o === "vertical" && w || o === "horizontal" && g))
    return null;
  const O = n ? Array.from(n.querySelectorAll(a)) : s;
  if (!O.length)
    return null;
  l && e.preventDefault();
  let P = null;
  return w || g ? P = fp(O, t, {
    goForward: g ? p : c === "ltr" ? d : h,
    loop: i
  }) : m ? P = O.at(0) || null : f && (P = O.at(-1) || null), u && (P == null || P.focus()), P;
}
function fp(e, t, n, r = e.length) {
  if (--r === 0)
    return null;
  const o = e.indexOf(t), a = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const s = (a + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? fp(
    e,
    i,
    n,
    r
  ) : i : null;
}
let w3 = 0;
function gn(e, t = "reka") {
  const n = Ri({ useId: void 0 });
  return Zi.useId ? `${t}-${Zi.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++w3}`;
}
function S3(e, t) {
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
function x3(e, t) {
  var f;
  const n = N({}), r = N("none"), o = N(e), a = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((f = t.value) == null ? void 0 : f.ownerDocument.defaultView) ?? Fi, { state: c, dispatch: l } = S3(a, {
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
  }), u = (g) => {
    var w;
    if (qt) {
      const O = new CustomEvent(g, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(O);
    }
  };
  ne(
    e,
    async (g, w) => {
      var P;
      const O = w !== g;
      if (await De(), O) {
        const F = r.value, U = Nr(t.value);
        g ? (l("MOUNT"), u("enter"), U === "none" && u("after-enter")) : U === "none" || U === "undefined" || ((P = n.value) == null ? void 0 : P.display) === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : w && F !== U ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (g) => {
    const w = Nr(t.value), O = w.includes(
      g.animationName
    ), P = c.value === "mounted" ? "enter" : "leave";
    if (g.target === t.value && O && (u(`after-${P}`), l("ANIMATION_END"), !o.value)) {
      const F = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var U;
        ((U = t.value) == null ? void 0 : U.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = F);
      });
    }
    g.target === t.value && w === "none" && l("ANIMATION_END");
  }, h = (g) => {
    g.target === t.value && (r.value = Nr(t.value));
  }, y = ne(
    t,
    (g, w) => {
      g ? (n.value = getComputedStyle(g), g.addEventListener("animationstart", h), g.addEventListener("animationcancel", d), g.addEventListener("animationend", d)) : (l("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), w == null || w.removeEventListener("animationstart", h), w == null || w.removeEventListener("animationcancel", d), w == null || w.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), p = ne(c, () => {
    const g = Nr(t.value);
    r.value = c.value === "mounted" ? g : "none";
  });
  return Mt(() => {
    y(), p();
  }), {
    isPresent: T(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function Nr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Or = z({
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
    const { present: r, forceMount: o } = Nt(e), a = N(), { isPresent: s } = x3(r, a);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = Di(i || []);
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
        const d = Wn(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? a.value = d.firstElementChild : a.value = d), d;
      }
    }) : null;
  }
}), Bi = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = dp();
    o.contentId || (o.contentId = gn(void 0, "reka-collapsible-content"));
    const a = N(), { forwardRef: s, currentElement: i } = le(), c = N(0), l = N(0), u = T(() => o.open.value), d = N(u.value), h = N();
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
        h.value = h.value || {
          transitionDuration: p.style.transitionDuration,
          animationName: p.style.animationName
        }, p.style.transitionDuration = "0s", p.style.animationName = "none";
        const m = p.getBoundingClientRect();
        l.value = m.height, c.value = m.width, d.value || (p.style.transitionDuration = h.value.transitionDuration, p.style.animationName = h.value.animationName);
      },
      {
        immediate: !0
      }
    );
    const y = T(() => d.value && o.open.value);
    return pe(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), yn(i, "beforematch", (p) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), r("contentFound");
      });
    }), (p, m) => (x(), H(v(Or), {
      ref_key: "presentRef",
      ref: a,
      present: p.forceMount || v(o).open.value,
      "force-mount": !0
    }, {
      default: I(({ present: f }) => {
        var g;
        return [
          J(v(ke), ie(p.$attrs, {
            id: v(o).contentId,
            ref: v(s),
            "as-child": n.asChild,
            as: p.as,
            hidden: f ? void 0 : v(o).unmountOnHide.value ? "" : "until-found",
            "data-state": y.value ? void 0 : v(o).open.value ? "open" : "closed",
            "data-disabled": (g = v(o).disabled) != null && g.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${l.value}px`,
              "--reka-collapsible-content-width": `${c.value}px`
            }
          }), {
            default: I(() => [
              !v(o).unmountOnHide.value || f ? q(p.$slots, "default", { key: 0 }) : Y("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Li = /* @__PURE__ */ z({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = dp();
    return (r, o) => {
      var a, s;
      return x(), H(v(ke), {
        type: r.as === "button" ? "button" : void 0,
        as: r.as,
        "as-child": t.asChild,
        "aria-controls": v(n).contentId,
        "aria-expanded": v(n).open.value,
        "data-state": v(n).open.value ? "open" : "closed",
        "data-disabled": (a = v(n).disabled) != null && a.value ? "" : void 0,
        disabled: (s = v(n).disabled) == null ? void 0 : s.value,
        onClick: v(n).onOpenToggle
      }, {
        default: I(() => [
          q(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
}), [kt, C3] = st("DialogRoot"), O3 = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: !1 },
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, o = Kn(n, "open", t, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = N(), s = N(), { modal: i } = Nt(n);
    return C3({
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
    }), (c, l) => q(c.$slots, "default", { open: v(o) });
  }
}), A3 = /* @__PURE__ */ z({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = kt();
    return (r, o) => (x(), H(v(ke), ie(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (a) => v(n).onOpenChange(!1))
    }), {
      default: I(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function Ar(e) {
  const t = vn(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[Qp(Fc(o))] = (...a) => e(o, ...a);
  }), r;
}
function pp(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const E3 = "dismissableLayer.pointerDownOutside", P3 = "dismissableLayer.focusOutside";
function mp(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function k3(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = N(!1), o = N(() => {
  });
  return at((s) => {
    if (!qt)
      return;
    const i = async (l) => {
      const u = l.target;
      if (!(!(t != null && t.value) || !u)) {
        if (mp(t.value, u)) {
          r.value = !1;
          return;
        }
        if (l.target && !r.value) {
          let d = function() {
            pp(
              E3,
              e,
              h
            );
          };
          const h = { originalEvent: l };
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
function $3(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = N(!1);
  return at((a) => {
    if (!qt)
      return;
    const s = async (i) => {
      if (!(t != null && t.value))
        return;
      await De(), await De();
      const c = i.target;
      !t.value || !c || mp(t.value, c) || i.target && !r.value && pp(
        P3,
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
}), Mi = /* @__PURE__ */ z({
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
      const p = Array.from(i.value), [m] = [...Dt.layersWithOutsidePointerEventsDisabled].slice(-1), f = p.indexOf(m);
      return c.value >= f;
    }), d = k3(async (p) => {
      const m = [...Dt.branches].some(
        (f) => f == null ? void 0 : f.contains(p.target)
      );
      !u.value || m || (r("pointerDownOutside", p), r("interactOutside", p), await De(), p.defaultPrevented || r("dismiss"));
    }, a), h = $3((p) => {
      [...Dt.branches].some(
        (f) => f == null ? void 0 : f.contains(p.target)
      ) || (r("focusOutside", p), r("interactOutside", p), p.defaultPrevented || r("dismiss"));
    }, a);
    h3("Escape", (p) => {
      c.value === i.value.size - 1 && (r("escapeKeyDown", p), p.defaultPrevented || r("dismiss"));
    });
    let y;
    return at((p) => {
      a.value && (n.disableOutsidePointerEvents && (Dt.layersWithOutsidePointerEventsDisabled.size === 0 && (y = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), Dt.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), p(() => {
        n.disableOutsidePointerEvents && Dt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = y);
      }));
    }), at((p) => {
      p(() => {
        a.value && (i.value.delete(a.value), Dt.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (p, m) => (x(), H(v(ke), {
      ref: v(o),
      "as-child": p.asChild,
      as: p.as,
      "data-dismissable-layer": "",
      style: et({
        pointerEvents: l.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: v(h).onFocusCapture,
      onBlurCapture: v(h).onBlurCapture,
      onPointerdownCapture: v(d).onPointerDownCapture
    }, {
      default: I(() => [
        q(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
});
function Ge() {
  let e = document.activeElement;
  if (e == null)
    return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; )
    e = e.shadowRoot.activeElement;
  return e;
}
const T3 = "menu.itemSelect", Ws = ["Enter", " "], D3 = ["ArrowDown", "PageUp", "Home"], hp = ["ArrowUp", "PageDown", "End"], F3 = [...D3, ...hp];
[...Ws], [...Ws];
function yp(e) {
  return e ? "open" : "closed";
}
function R3(e) {
  const t = Ge();
  for (const n of e)
    if (n === t || (n.focus(), Ge() !== t))
      return;
}
function _3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function I3(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return _3(n, t);
}
function Ks(e) {
  return e.pointerType === "mouse";
}
const B3 = "DialogTitle", L3 = "DialogContent";
function M3({
  titleName: e = B3,
  contentName: t = L3,
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
const N3 = a3(() => N([]));
function j3() {
  const e = N3();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = yc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = yc(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function yc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function q3(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Qa = "focusScope.autoFocusOnMount", Za = "focusScope.autoFocusOnUnmount", gc = { bubbles: !1, cancelable: !0 };
function V3(e, { select: t = !1 } = {}) {
  const n = Ge();
  for (const r of e)
    if (Kt(r, { select: t }), Ge() !== n)
      return !0;
}
function z3(e) {
  const t = gp(e), n = vc(t, e), r = vc(t.reverse(), e);
  return [n, r];
}
function gp(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function vc(e, t) {
  for (const n of e)
    if (!U3(n, { upTo: t }))
      return n;
}
function U3(e, { upTo: t }) {
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
function H3(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Kt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ge();
    e.focus({ preventScroll: !0 }), e !== n && H3(e) && t && e.select();
  }
}
const vp = /* @__PURE__ */ z({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: a } = le(), s = N(null), i = j3(), c = hr({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    at((u) => {
      if (!qt)
        return;
      const d = a.value;
      if (!n.trapped)
        return;
      function h(f) {
        if (c.paused || !d)
          return;
        const g = f.target;
        d.contains(g) ? s.value = g : Kt(s.value, { select: !0 });
      }
      function y(f) {
        if (c.paused || !d)
          return;
        const g = f.relatedTarget;
        g !== null && (d.contains(g) || Kt(s.value, { select: !0 }));
      }
      function p(f) {
        d.contains(s.value) || Kt(d);
      }
      document.addEventListener("focusin", h), document.addEventListener("focusout", y);
      const m = new MutationObserver(p);
      d && m.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", y), m.disconnect();
      });
    }), at(async (u) => {
      const d = a.value;
      if (await De(), !d)
        return;
      i.add(c);
      const h = Ge();
      if (!d.contains(h)) {
        const p = new CustomEvent(Qa, gc);
        d.addEventListener(Qa, (m) => r("mountAutoFocus", m)), d.dispatchEvent(p), p.defaultPrevented || (V3(q3(gp(d)), {
          select: !0
        }), Ge() === h && Kt(d));
      }
      u(() => {
        d.removeEventListener(Qa, (f) => r("mountAutoFocus", f));
        const p = new CustomEvent(Za, gc), m = (f) => {
          r("unmountAutoFocus", f);
        };
        d.addEventListener(Za, m), d.dispatchEvent(p), setTimeout(() => {
          p.defaultPrevented || Kt(h ?? document.body, { select: !0 }), d.removeEventListener(Za, m), i.remove(c);
        }, 0);
      });
    });
    function l(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, h = Ge();
      if (d && h) {
        const y = u.currentTarget, [p, m] = z3(y);
        p && m ? !u.shiftKey && h === m ? (u.preventDefault(), n.loop && Kt(p, { select: !0 })) : u.shiftKey && h === p && (u.preventDefault(), n.loop && Kt(m, { select: !0 })) : h === y && u.preventDefault();
      }
    }
    return (u, d) => (x(), H(v(ke), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: l
    }, {
      default: I(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), bp = /* @__PURE__ */ z({
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
    const n = e, r = t, o = kt(), { forwardRef: a, currentElement: s } = le();
    return o.titleId || (o.titleId = gn(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = gn(void 0, "reka-dialog-description")), pe(() => {
      o.contentElement = s, Ge() !== document.body && (o.triggerElement.value = Ge());
    }), process.env.NODE_ENV !== "production" && M3({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, c) => (x(), H(v(vp), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: c[5] || (c[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: c[6] || (c[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: I(() => [
        J(v(Mi), ie({
          id: v(o).contentId,
          ref: v(a),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": v(o).descriptionId,
          "aria-labelledby": v(o).titleId,
          "data-state": v(yp)(v(o).open.value)
        }, i.$attrs, {
          onDismiss: c[0] || (c[0] = (l) => v(o).onOpenChange(!1)),
          onEscapeKeyDown: c[1] || (c[1] = (l) => r("escapeKeyDown", l)),
          onFocusOutside: c[2] || (c[2] = (l) => r("focusOutside", l)),
          onInteractOutside: c[3] || (c[3] = (l) => r("interactOutside", l)),
          onPointerDownOutside: c[4] || (c[4] = (l) => r("pointerDownOutside", l))
        }), {
          default: I(() => [
            q(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var W3 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, $n = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), qr = {}, es = 0, wp = function(e) {
  return e && (e.host || wp(e.parentNode));
}, K3 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = wp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, G3 = function(e, t, n, r) {
  var o = K3(t, Array.isArray(e) ? e : [e]);
  qr[n] || (qr[n] = /* @__PURE__ */ new WeakMap());
  var a = qr[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        u(h);
      else
        try {
          var y = h.getAttribute(r), p = y !== null && y !== "false", m = ($n.get(h) || 0) + 1, f = (a.get(h) || 0) + 1;
          $n.set(h, m), a.set(h, f), s.push(h), m === 1 && p && jr.set(h, !0), f === 1 && h.setAttribute(n, "true"), p || h.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", h, g);
        }
    });
  };
  return u(t), i.clear(), es++, function() {
    s.forEach(function(d) {
      var h = $n.get(d) - 1, y = a.get(d) - 1;
      $n.set(d, h), a.set(d, y), h || (jr.has(d) || d.removeAttribute(r), jr.delete(d)), y || d.removeAttribute(n);
    }), es--, es || ($n = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), qr = {});
  };
}, Y3 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = W3(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), G3(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function Sp(e) {
  let t;
  ne(() => Wn(e), (n) => {
    n ? t = Y3(n) : t && t();
  }), Mt(() => {
    t && t();
  });
}
const X3 = /* @__PURE__ */ z({
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
    const n = e, r = t, o = kt(), a = Ar(r), { forwardRef: s, currentElement: i } = le();
    return Sp(i), (c, l) => (x(), H(bp, ie({ ...n, ...v(a) }, {
      ref: v(s),
      "trap-focus": v(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var d;
        u.defaultPrevented || (u.preventDefault(), (d = v(o).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: l[1] || (l[1] = (u) => {
        const d = u.detail.originalEvent, h = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || h) && u.preventDefault();
      }),
      onFocusOutside: l[2] || (l[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: I(() => [
        q(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), J3 = /* @__PURE__ */ z({
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
    le();
    const a = kt(), s = N(!1), i = N(!1);
    return (c, l) => (x(), H(bp, ie({ ...n, ...v(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var d;
        u.defaultPrevented || (s.value || (d = v(a).triggerElement.value) == null || d.focus(), u.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (u) => {
        var y;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const d = u.target;
        ((y = v(a).triggerElement.value) == null ? void 0 : y.contains(d)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && i.value && u.preventDefault();
      })
    }), {
      default: I(() => [
        q(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q3 = /* @__PURE__ */ z({
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
    const n = e, r = t, o = kt(), a = Ar(r), { forwardRef: s } = le();
    return (i, c) => (x(), H(v(Or), {
      present: i.forceMount || v(o).open.value
    }, {
      default: I(() => [
        v(o).modal.value ? (x(), H(X3, ie({
          key: 0,
          ref: v(s)
        }, { ...n, ...v(a), ...i.$attrs }), {
          default: I(() => [
            q(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), H(J3, ie({
          key: 1,
          ref: v(s)
        }, { ...n, ...v(a), ...i.$attrs }), {
          default: I(() => [
            q(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Z3 = /* @__PURE__ */ z({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    le();
    const n = kt();
    return (r, o) => (x(), H(v(ke), ie(t, {
      id: v(n).descriptionId
    }), {
      default: I(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function ts(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Gs(e, t, n = ".", r) {
  if (!ts(t))
    return Gs(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (r && r(o, a, s, n) || (Array.isArray(s) && Array.isArray(o[a]) ? o[a] = [...s, ...o[a]] : ts(s) && ts(o[a]) ? o[a] = Gs(
      s,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = s));
  }
  return o;
}
function ex(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => Gs(n, r, "", e), {})
  );
}
const tx = ex(), nx = lp(() => {
  const e = N(/* @__PURE__ */ new Map()), t = N(), n = T(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), r = Ri({
    scrollBody: N(!0)
  });
  let o = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", hc && (o == null || o()), t.value = void 0;
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
    const c = window.innerWidth - document.documentElement.clientWidth, l = { padding: c, margin: 0 }, u = (d = r.scrollBody) != null && d.value ? typeof r.scrollBody.value == "object" ? tx({
      padding: r.scrollBody.value.padding === !0 ? c : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? c : r.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), hc && (o = yn(
      document,
      "touchmove",
      (h) => rx(h),
      { passive: !1 }
    )), De(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function xp(e) {
  const t = Math.random().toString(36).substring(2, 7), n = nx();
  n.value.set(t, e ?? !1);
  const r = T({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return d3(() => {
    n.value.delete(t);
  }), r;
}
function Cp(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : Cp(n);
  }
}
function rx(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && Cp(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const ox = /* @__PURE__ */ z({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = kt();
    return xp(!0), le(), (n, r) => (x(), H(v(ke), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": v(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), ax = /* @__PURE__ */ z({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = kt(), { forwardRef: n } = le();
    return (r, o) => {
      var a;
      return (a = v(t)) != null && a.modal.value ? (x(), H(v(Or), {
        key: 0,
        present: r.forceMount || v(t).open.value
      }, {
        default: I(() => [
          J(ox, ie(r.$attrs, {
            ref: v(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: I(() => [
              q(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : Y("", !0);
    };
  }
}), Ni = /* @__PURE__ */ z({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = p3();
    return (n, r) => v(t) || n.forceMount ? (x(), H(Rc, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      q(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : Y("", !0);
  }
});
function Op(e) {
  const t = vn(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, a) => {
    const s = (t == null ? void 0 : t.type.props[a]).default;
    return s !== void 0 && (o[a] = s), o;
  }, {}), r = Zp(e);
  return T(() => {
    const o = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((s) => {
      o[Fc(s)] = a[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (r.value[i] !== void 0 && (s[i] = r.value[i]), s), {});
  });
}
function Er(e, t) {
  const n = Op(e), r = t ? Ar(t) : {};
  return T(() => ({
    ...n.value,
    ...r
  }));
}
const sx = /* @__PURE__ */ z({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = kt();
    return le(), (r, o) => (x(), H(v(ke), ie(t, {
      id: v(n).titleId
    }), {
      default: I(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ix = /* @__PURE__ */ z({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = kt(), { forwardRef: r, currentElement: o } = le();
    return n.contentId || (n.contentId = gn(void 0, "reka-dialog-content")), pe(() => {
      n.triggerElement.value = o.value;
    }), (a, s) => (x(), H(v(ke), ie(t, {
      ref: v(r),
      type: a.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": v(n).open.value || !1,
      "aria-controls": v(n).open.value ? v(n).contentId : void 0,
      "data-state": v(n).open.value ? "open" : "closed",
      onClick: v(n).onOpenToggle
    }), {
      default: I(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
function bc() {
  const e = N(), t = T(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : Wn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const wc = "data-reka-collection-item";
function Ap(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = N(/* @__PURE__ */ new Map());
    o = {
      collectionRef: N(),
      itemMap: u
    }, yo(r, o);
  } else
    o = Xs(r);
  const a = (u = !1) => {
    const d = o.collectionRef.value;
    if (!d)
      return [];
    const h = Array.from(d.querySelectorAll(`[${wc}]`)), p = Array.from(o.itemMap.value.values()).sort(
      (m, f) => h.indexOf(m.ref) - h.indexOf(f.ref)
    );
    return u ? p : p.filter((m) => m.ref.dataset.disabled !== "");
  }, s = z({
    name: "CollectionSlot",
    setup(u, { slots: d }) {
      const { primitiveElement: h, currentElement: y } = bc();
      return ne(y, () => {
        o.collectionRef.value = y.value;
      }), () => qe(Hs, { ref: h }, d);
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
    setup(u, { slots: d, attrs: h }) {
      const { primitiveElement: y, currentElement: p } = bc();
      return at((m) => {
        if (p.value) {
          const f = os(p.value);
          o.itemMap.value.set(f, { ref: p.value, value: u.value }), m(() => o.itemMap.value.delete(f));
        }
      }), () => qe(Hs, { ...h, [wc]: "", ref: y }, d);
    }
  }), c = T(() => Array.from(o.itemMap.value.values())), l = T(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: c, itemMapSize: l, CollectionSlot: s, CollectionItem: i };
}
const lx = "rovingFocusGroup.onEntryFocus", ux = { bubbles: !1, cancelable: !0 };
function cx(e, t = !1) {
  const n = Ge();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), Ge() !== n))
      return;
}
const [b4, dx] = st("RovingFocusGroup"), fx = /* @__PURE__ */ z({
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
    const r = e, o = n, { loop: a, orientation: s, dir: i } = Nt(r), c = _i(i), l = Kn(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), u = N(!1), d = N(!1), h = N(0), { getItems: y, CollectionSlot: p } = Ap({ isProvider: !0 });
    function m(g) {
      const w = !d.value;
      if (g.currentTarget && g.target === g.currentTarget && w && !u.value) {
        const O = new CustomEvent(lx, ux);
        if (g.currentTarget.dispatchEvent(O), o("entryFocus", O), !O.defaultPrevented) {
          const P = y().map((W) => W.ref).filter((W) => W.dataset.disabled !== ""), F = P.find((W) => W.getAttribute("data-active") === ""), U = P.find(
            (W) => W.id === l.value
          ), A = [F, U, ...P].filter(
            Boolean
          );
          cx(A, r.preventScrollOnEntryFocus);
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
      getItems: y
    }), dx({
      loop: a,
      dir: c,
      orientation: s,
      currentTabStopId: l,
      onItemFocus: (g) => {
        l.value = g;
      },
      onItemShiftTab: () => {
        u.value = !0;
      },
      onFocusableItemAdd: () => {
        h.value++;
      },
      onFocusableItemRemove: () => {
        h.value--;
      }
    }), (g, w) => (x(), H(v(p), null, {
      default: I(() => [
        J(v(ke), {
          tabindex: u.value || h.value === 0 ? -1 : 0,
          "data-orientation": v(s),
          as: g.as,
          "as-child": g.asChild,
          dir: v(c),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = (O) => d.value = !0),
          onMouseup: f,
          onFocus: m,
          onBlur: w[1] || (w[1] = (O) => u.value = !1)
        }, {
          default: I(() => [
            q(g.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Ep, px] = st("PopperRoot"), Pp = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = N();
    return px({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => q(n.$slots, "default");
  }
}), kp = /* @__PURE__ */ z({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = le(), o = Ep();
    return _c(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (a, s) => (x(), H(v(ke), {
      ref: v(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: I(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), mx = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, hx = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, yx = /* @__PURE__ */ z({
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
    return le(), (n, r) => (x(), H(v(ke), ie(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: I(() => [
        q(n.$slots, "default", {}, () => [
          n.rounded ? (x(), k("path", hx)) : (x(), k("path", mx))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
function gx(e) {
  return e !== null;
}
function vx(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var f, g, w;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((f = o.arrow) == null ? void 0 : f.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, u] = Ys(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + i / 2, y = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
      let p = "", m = "";
      return l === "bottom" ? (p = s ? d : `${h}px`, m = `${-c}px`) : l === "top" ? (p = s ? d : `${h}px`, m = `${r.floating.height + c}px`) : l === "right" ? (p = `${-c}px`, m = s ? d : `${y}px`) : l === "left" && (p = `${r.floating.width + c}px`, m = s ? d : `${y}px`), { data: { x: p, y: m } };
    }
  };
}
function Ys(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function bx(e) {
  const t = N(), n = T(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = T(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return pe(() => {
    const o = Wn(e);
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
const $p = {
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
}, [wx, Sx] = st("PopperContent"), Tp = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Ic({
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
    ...$p
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Ep(), { forwardRef: a, currentElement: s } = le(), i = N(), c = N(), { width: l, height: u } = bx(c), d = T(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), h = T(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), y = T(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), p = T(() => ({
      padding: h.value,
      boundary: y.value.filter(gx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: y.value.length > 0
    })), m = r3(() => [
      HS({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && pc({
        ...p.value
      }),
      n.avoidCollisions && WS({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? XS() : void 0,
        ...p.value
      }),
      !n.prioritizePosition && n.avoidCollisions && pc({
        ...p.value
      }),
      KS({
        ...p.value,
        apply: ({ elements: V, rects: b, availableWidth: E, availableHeight: C }) => {
          const { width: S, height: K } = b.reference, L = V.floating.style;
          L.setProperty(
            "--reka-popper-available-width",
            `${E}px`
          ), L.setProperty(
            "--reka-popper-available-height",
            `${C}px`
          ), L.setProperty(
            "--reka-popper-anchor-width",
            `${S}px`
          ), L.setProperty(
            "--reka-popper-anchor-height",
            `${K}px`
          );
        }
      }),
      c.value && ZS({ element: c.value, padding: n.arrowPadding }),
      vx({
        arrowWidth: l.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && GS({ strategy: "referenceHidden", ...p.value })
    ]), f = T(() => n.reference ?? o.anchor.value), { floatingStyles: g, placement: w, isPositioned: O, middlewareData: P } = e3(
      f,
      i,
      {
        strategy: n.positionStrategy,
        placement: d,
        whileElementsMounted: (...V) => US(...V, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: m
      }
    ), F = T(
      () => Ys(w.value)[0]
    ), U = T(
      () => Ys(w.value)[1]
    );
    _c(() => {
      O.value && r("placed");
    });
    const A = T(
      () => {
        var V;
        return ((V = P.value.arrow) == null ? void 0 : V.centerOffset) !== 0;
      }
    ), W = N("");
    at(() => {
      s.value && (W.value = window.getComputedStyle(s.value).zIndex);
    });
    const B = T(() => {
      var V;
      return ((V = P.value.arrow) == null ? void 0 : V.x) ?? 0;
    }), $ = T(() => {
      var V;
      return ((V = P.value.arrow) == null ? void 0 : V.y) ?? 0;
    });
    return Sx({
      placedSide: F,
      onArrowChange: (V) => c.value = V,
      arrowX: B,
      arrowY: $,
      shouldHideArrow: A
    }), (V, b) => {
      var E, C, S;
      return x(), k("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: et({
          ...v(g),
          transform: v(O) ? v(g).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: W.value,
          "--reka-popper-transform-origin": [
            (E = v(P).transformOrigin) == null ? void 0 : E.x,
            (C = v(P).transformOrigin) == null ? void 0 : C.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((S = v(P).hide) == null ? void 0 : S.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        J(v(ke), ie({ ref: v(a) }, V.$attrs, {
          "as-child": n.asChild,
          as: V.as,
          "data-side": F.value,
          "data-align": U.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: v(O) ? void 0 : "none"
          }
        }), {
          default: I(() => [
            q(V.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), xx = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Cx = /* @__PURE__ */ z({
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
    const { forwardRef: t } = le(), n = wx(), r = T(() => xx[n.placedSide.value]);
    return (o, a) => {
      var s, i, c, l;
      return x(), k("span", {
        ref: (u) => {
          v(n).onArrowChange(u);
        },
        style: et({
          position: "absolute",
          left: (s = v(n).arrowX) != null && s.value ? `${(i = v(n).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (c = v(n).arrowY) != null && c.value ? `${(l = v(n).arrowY) == null ? void 0 : l.value}px` : void 0,
          [r.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[v(n).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[v(n).placedSide.value],
          visibility: v(n).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        J(yx, ie(o.$attrs, {
          ref: v(t),
          style: {
            display: "block"
          },
          as: o.as,
          "as-child": o.asChild,
          rounded: o.rounded,
          width: o.width,
          height: o.height
        }), {
          default: I(() => [
            q(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
function Ox(e) {
  const t = up("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, a) => {
      t.value = t.value + o;
      {
        const s = Ge(), i = a.map((h) => {
          var y, p;
          return {
            ...h,
            textValue: ((y = h.value) == null ? void 0 : y.textValue) ?? ((p = h.ref.textContent) == null ? void 0 : p.trim()) ?? ""
          };
        }), c = i.find((h) => h.ref === s), l = i.map((h) => h.textValue), u = Ex(l, t.value, c == null ? void 0 : c.textValue), d = i.find((h) => h.textValue === u);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function Ax(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ex(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Ax(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Px() {
  const e = N(!1);
  return pe(() => {
    yn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), yn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const kx = lp(Px), [Mo, $x] = st(["MenuRoot", "MenuSub"], "MenuContext"), [ji, Tx] = st("MenuRoot"), Dx = /* @__PURE__ */ z({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: a } = Nt(n), s = _i(a), i = Kn(n, "open", r), c = N(), l = kx();
    return $x({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), Tx({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: s,
      modal: o
    }), (u, d) => (x(), H(v(Pp), null, {
      default: I(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let ns = 0;
function Fx() {
  at((e) => {
    if (!qt)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? Sc()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? Sc()
    ), ns++, e(() => {
      ns === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), ns--;
    });
  });
}
function Sc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [Dp, Rx] = st("MenuContent"), Fp = /* @__PURE__ */ z({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Ic({
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
    ...$p
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Mo(), a = ji(), { trapFocus: s, disableOutsidePointerEvents: i, loop: c } = Nt(n);
    Fx(), xp(i.value);
    const l = N(""), u = N(0), d = N(0), h = N(null), y = N("right"), p = N(0), m = N(null), f = N(), { forwardRef: g, currentElement: w } = le(), { handleTypeaheadSearch: O } = Ox();
    ne(w, (B) => {
      o.onContentChange(B);
    }), Mt(() => {
      window.clearTimeout(u.value);
    });
    function P(B) {
      var V, b;
      return y.value === ((V = h.value) == null ? void 0 : V.side) && I3(B, (b = h.value) == null ? void 0 : b.area);
    }
    async function F(B) {
      var $;
      r("openAutoFocus", B), !B.defaultPrevented && (B.preventDefault(), ($ = w.value) == null || $.focus({
        preventScroll: !0
      }));
    }
    function U(B) {
      var L;
      if (B.defaultPrevented)
        return;
      const V = B.target.closest("[data-reka-menu-content]") === B.currentTarget, b = B.ctrlKey || B.altKey || B.metaKey, E = B.key.length === 1, C = b3(
        B,
        Ge(),
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
      const S = ((L = f.value) == null ? void 0 : L.getItems()) ?? [];
      if (V && (B.key === "Tab" && B.preventDefault(), !b && E && O(B.key, S)), B.target !== w.value || !F3.includes(B.key))
        return;
      B.preventDefault();
      const K = [...S.map((R) => R.ref)];
      hp.includes(B.key) && K.reverse(), R3(K);
    }
    function A(B) {
      var $, V;
      (V = ($ = B == null ? void 0 : B.currentTarget) == null ? void 0 : $.contains) != null && V.call($, B.target) || (window.clearTimeout(u.value), l.value = "");
    }
    function W(B) {
      var b;
      if (!Ks(B))
        return;
      const $ = B.target, V = p.value !== B.clientX;
      if ((b = B == null ? void 0 : B.currentTarget) != null && b.contains($) && V) {
        const E = B.clientX > p.value ? "right" : "left";
        y.value = E, p.value = B.clientX;
      }
    }
    return Rx({
      onItemEnter: (B) => !!P(B),
      onItemLeave: (B) => {
        var $;
        P(B) || (($ = w.value) == null || $.focus(), m.value = null);
      },
      onTriggerLeave: (B) => !!P(B),
      searchRef: l,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (B) => {
        h.value = B;
      }
    }), (B, $) => (x(), H(v(vp), {
      "as-child": "",
      trapped: v(s),
      onMountAutoFocus: F,
      onUnmountAutoFocus: $[7] || ($[7] = (V) => r("closeAutoFocus", V))
    }, {
      default: I(() => [
        J(v(Mi), {
          "as-child": "",
          "disable-outside-pointer-events": v(i),
          onEscapeKeyDown: $[2] || ($[2] = (V) => r("escapeKeyDown", V)),
          onPointerDownOutside: $[3] || ($[3] = (V) => r("pointerDownOutside", V)),
          onFocusOutside: $[4] || ($[4] = (V) => r("focusOutside", V)),
          onInteractOutside: $[5] || ($[5] = (V) => r("interactOutside", V)),
          onDismiss: $[6] || ($[6] = (V) => r("dismiss"))
        }, {
          default: I(() => [
            J(v(fx), {
              ref_key: "rovingFocusGroupRef",
              ref: f,
              "current-tab-stop-id": m.value,
              "onUpdate:currentTabStopId": $[0] || ($[0] = (V) => m.value = V),
              "as-child": "",
              orientation: "vertical",
              dir: v(a).dir.value,
              loop: v(c),
              onEntryFocus: $[1] || ($[1] = (V) => {
                r("entryFocus", V), v(a).isUsingKeyboardRef.value || V.preventDefault();
              })
            }, {
              default: I(() => [
                J(v(Tp), {
                  ref: v(g),
                  role: "menu",
                  as: B.as,
                  "as-child": B.asChild,
                  "aria-orientation": "vertical",
                  "data-reka-menu-content": "",
                  "data-state": v(yp)(v(o).open.value),
                  dir: v(a).dir.value,
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
                  onKeydown: U,
                  onBlur: A,
                  onPointermove: W
                }, {
                  default: I(() => [
                    q(B.$slots, "default")
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
}), _x = /* @__PURE__ */ z({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Dp(), { forwardRef: r } = le(), { CollectionItem: o } = Ap(), a = N(!1);
    async function s(c) {
      if (!c.defaultPrevented && Ks(c)) {
        if (t.disabled)
          n.onItemLeave(c);
        else if (!n.onItemEnter(c)) {
          const u = c.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(c) {
      await De(), !c.defaultPrevented && Ks(c) && n.onItemLeave(c);
    }
    return (c, l) => (x(), H(v(o), {
      value: { textValue: c.textValue }
    }, {
      default: I(() => [
        J(v(ke), ie({
          ref: v(r),
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
          default: I(() => [
            q(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), Ix = /* @__PURE__ */ z({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = le(), s = ji(), i = Dp(), c = N(!1);
    async function l() {
      const u = a.value;
      if (!n.disabled && u) {
        const d = new CustomEvent(T3, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", d), await De(), d.defaultPrevented ? c.value = !1 : s.onClose();
      }
    }
    return (u, d) => (x(), H(_x, ie(n, {
      ref: v(o),
      onClick: l,
      onPointerdown: d[0] || (d[0] = () => {
        c.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (h) => {
        var y;
        await De(), !h.defaultPrevented && (c.value || (y = h.currentTarget) == null || y.click());
      }),
      onKeydown: d[2] || (d[2] = async (h) => {
        const y = v(i).searchRef.value !== "";
        u.disabled || y && h.key === " " || v(Ws).includes(h.key) && (h.currentTarget.click(), h.preventDefault());
      })
    }), {
      default: I(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bx = /* @__PURE__ */ z({
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
    const n = e, r = t, o = Er(n, r), a = Mo(), { forwardRef: s, currentElement: i } = le();
    return Sp(i), (c, l) => (x(), H(Fp, ie(v(o), {
      ref: v(s),
      "trap-focus": v(a).open.value,
      "disable-outside-pointer-events": v(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (u) => v(a).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = St((u) => r("focusOutside", u), ["prevent"]))
    }), {
      default: I(() => [
        q(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Lx = /* @__PURE__ */ z({
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
    const o = Er(e, t), a = Mo();
    return (s, i) => (x(), H(Fp, ie(v(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (c) => v(a).onOpenChange(!1))
    }), {
      default: I(() => [
        q(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mx = /* @__PURE__ */ z({
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
    const o = Er(e, t), a = Mo(), s = ji();
    return (i, c) => (x(), H(v(Or), {
      present: i.forceMount || v(a).open.value
    }, {
      default: I(() => [
        v(s).modal.value ? (x(), H(Bx, ve(ie({ key: 0 }, { ...i.$attrs, ...v(o) })), {
          default: I(() => [
            q(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), H(Lx, ve(ie({ key: 1 }, { ...i.$attrs, ...v(o) })), {
          default: I(() => [
            q(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Nx = /* @__PURE__ */ z({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(v(Ni), ve(Ae(t)), {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), jx = /* @__PURE__ */ z({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(v(ke), ie(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qx = /* @__PURE__ */ z({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(v(kp), ve(Ae(t)), {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vx = /* @__PURE__ */ z({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(v(Ni), ve(Ae(t)), {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Rp, zx] = st("DropdownMenuRoot"), _p = /* @__PURE__ */ z({
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
    const o = Kn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = N(), { modal: s, dir: i } = Nt(n), c = _i(i);
    return zx({
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
    }), (l, u) => (x(), H(v(Dx), {
      open: v(o),
      "onUpdate:open": u[0] || (u[0] = (d) => Wt(o) ? o.value = d : null),
      dir: v(c),
      modal: v(s)
    }, {
      default: I(() => [
        q(l.$slots, "default", { open: v(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Ip = /* @__PURE__ */ z({
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
    const o = Er(e, t);
    le();
    const a = Rp(), s = N(!1);
    function i(c) {
      c.defaultPrevented || (s.value || setTimeout(() => {
        var l;
        (l = a.triggerElement.value) == null || l.focus();
      }, 0), s.value = !1, c.preventDefault());
    }
    return a.contentId || (a.contentId = gn(void 0, "reka-dropdown-menu-content")), (c, l) => {
      var u;
      return x(), H(v(Mx), ie(v(o), {
        id: v(a).contentId,
        "aria-labelledby": (u = v(a)) == null ? void 0 : u.triggerId,
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
          const h = d.detail.originalEvent, y = h.button === 0 && h.ctrlKey === !0, p = h.button === 2 || y;
          (!v(a).modal.value || p) && (s.value = !0), (m = v(a).triggerElement.value) != null && m.contains(d.target) && d.preventDefault();
        })
      }), {
        default: I(() => [
          q(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Ux = /* @__PURE__ */ z({
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
    return le(), (a, s) => (x(), H(v(Ix), ve(Ae({ ...n, ...v(o) })), {
      default: I(() => [
        q(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bp = /* @__PURE__ */ z({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(v(Nx), ve(Ae(t)), {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hx = /* @__PURE__ */ z({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (x(), H(v(jx), ve(Ae(t)), {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lp = /* @__PURE__ */ z({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Rp(), { forwardRef: r, currentElement: o } = le();
    return pe(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = gn(void 0, "reka-dropdown-menu-trigger")), (a, s) => (x(), H(v(qx), { "as-child": "" }, {
      default: I(() => [
        J(v(ke), {
          id: v(n).triggerId,
          ref: v(r),
          type: a.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: a.as,
          "aria-haspopup": "menu",
          "aria-expanded": v(n).open.value,
          "aria-controls": v(n).open.value ? v(n).contentId : void 0,
          "data-disabled": a.disabled ? "" : void 0,
          disabled: a.disabled,
          "data-state": v(n).open.value ? "open" : "closed",
          onClick: s[0] || (s[0] = async (i) => {
            var c;
            !a.disabled && i.button === 0 && i.ctrlKey === !1 && ((c = v(n)) == null || c.onOpenToggle(), await De(), v(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = on(
            (i) => {
              a.disabled || (["Enter", " "].includes(i.key) && v(n).onOpenToggle(), i.key === "ArrowDown" && v(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: I(() => [
            q(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
function Wx(e, t) {
  const n = up(!1, 300), r = N(null), o = o3();
  function a() {
    r.value = null, n.value = !1;
  }
  function s(i, c) {
    const l = i.currentTarget, u = { x: i.clientX, y: i.clientY }, d = Kx(u, l.getBoundingClientRect()), h = Gx(u, d), y = Yx(c.getBoundingClientRect()), p = Jx([...h, ...y]);
    r.value = p, n.value = !0;
  }
  return at((i) => {
    if (e.value && t.value) {
      const c = (u) => s(u, t.value), l = (u) => s(u, e.value);
      e.value.addEventListener("pointerleave", c), t.value.addEventListener("pointerleave", l), i(() => {
        var u, d;
        (u = e.value) == null || u.removeEventListener("pointerleave", c), (d = t.value) == null || d.removeEventListener("pointerleave", l);
      });
    }
  }), at((i) => {
    var c;
    if (r.value) {
      const l = (u) => {
        var f, g;
        if (!r.value || !(u.target instanceof HTMLElement))
          return;
        const d = u.target, h = { x: u.clientX, y: u.clientY }, y = ((f = e.value) == null ? void 0 : f.contains(d)) || ((g = t.value) == null ? void 0 : g.contains(d)), p = !Xx(h, r.value), m = !!d.closest("[data-grace-area-trigger]");
        y ? a() : (p || m) && (a(), o.trigger());
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
function Kx(e, t) {
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
function Gx(e, t, n = 5) {
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
function Yx(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Xx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function Jx(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Qx(t);
}
function Qx(e) {
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
const Zx = /* @__PURE__ */ z({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (x(), H(v(Cx), ve(Ae(t)), {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mp = "tooltip.open", [qi, eC] = st("TooltipProvider"), tC = /* @__PURE__ */ z({
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
    const t = e, { delayDuration: n, skipDelayDuration: r, disableHoverableContent: o, disableClosingTrigger: a, ignoreNonKeyboardFocus: s, disabled: i } = Nt(t);
    le();
    const c = N(!0), l = N(!1), { start: u, stop: d } = cp(() => {
      c.value = !0;
    }, r, { immediate: !1 });
    return eC({
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
    }), (h, y) => q(h.$slots, "default");
  }
}), [No, nC] = st("TooltipRoot"), rC = /* @__PURE__ */ z({
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
    const o = qi(), a = T(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = T(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = T(() => n.disabled ?? o.disabled.value), c = T(() => n.delayDuration ?? o.delayDuration.value), l = T(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = Kn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    ne(u, (O) => {
      o.onClose && (O ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Mp))) : o.onClose());
    });
    const d = N(!1), h = N(), y = T(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: p, stop: m } = cp(() => {
      d.value = !0, u.value = !0;
    }, c, { immediate: !1 });
    function f() {
      m(), d.value = !1, u.value = !0;
    }
    function g() {
      m(), u.value = !1;
    }
    function w() {
      p();
    }
    return nC({
      contentId: "",
      open: u,
      stateAttribute: y,
      trigger: h,
      onTriggerChange(O) {
        h.value = O;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? w() : f();
      },
      onTriggerLeave() {
        a.value ? g() : m();
      },
      onOpen: f,
      onClose: g,
      disableHoverableContent: a,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (O, P) => (x(), H(v(Pp), null, {
      default: I(() => [
        q(O.$slots, "default", { open: v(u) })
      ]),
      _: 3
    }));
  }
}), Np = /* @__PURE__ */ z({
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
    const n = e, r = t, o = No(), { forwardRef: a } = le(), s = em(), i = T(() => {
      var u;
      return (u = s.default) == null ? void 0 : u.call(s, {});
    }), c = T(() => {
      var h;
      if (n.ariaLabel)
        return n.ariaLabel;
      let u = "";
      function d(y) {
        typeof y.children == "string" && y.type !== $c ? u += y.children : Array.isArray(y.children) && y.children.forEach((p) => d(p));
      }
      return (h = i.value) == null || h.forEach((y) => d(y)), u;
    }), l = T(() => {
      const { ariaLabel: u, ...d } = n;
      return d;
    });
    return pe(() => {
      yn(window, "scroll", (u) => {
        const d = u.target;
        d != null && d.contains(o.trigger.value) && o.onClose();
      }), yn(window, Mp, o.onClose);
    }), (u, d) => (x(), H(v(Mi), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: d[0] || (d[0] = (h) => r("escapeKeyDown", h)),
      onPointerDownOutside: d[1] || (d[1] = (h) => {
        var y;
        v(o).disableClosingTrigger.value && ((y = v(o).trigger.value) != null && y.contains(h.target)) && h.preventDefault(), r("pointerDownOutside", h);
      }),
      onFocusOutside: d[2] || (d[2] = St(() => {
      }, ["prevent"])),
      onDismiss: d[3] || (d[3] = (h) => v(o).onClose())
    }, {
      default: I(() => [
        J(v(Tp), ie({
          ref: v(a),
          "data-state": v(o).stateAttribute.value
        }, { ...u.$attrs, ...l.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: I(() => [
            q(u.$slots, "default"),
            J(v(n3), {
              id: v(o).contentId,
              role: "tooltip"
            }, {
              default: I(() => [
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
}), oC = /* @__PURE__ */ z({
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
    const n = Op(e), { forwardRef: r, currentElement: o } = le(), { trigger: a, onClose: s } = No(), i = qi(), { isPointerInTransit: c, onPointerExit: l } = Wx(a, o);
    return i.isPointerInTransitRef = c, l(() => {
      s();
    }), (u, d) => (x(), H(Np, ie({ ref: v(r) }, v(n)), {
      default: I(() => [
        q(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), aC = /* @__PURE__ */ z({
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
    const n = e, r = t, o = No(), a = Er(n, r), { forwardRef: s } = le();
    return (i, c) => (x(), H(v(Or), {
      present: i.forceMount || v(o).open.value
    }, {
      default: I(() => [
        (x(), H(Vr(v(o).disableHoverableContent.value ? Np : oC), ie({ ref: v(s) }, v(a)), {
          default: I(() => [
            q(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), sC = /* @__PURE__ */ z({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(v(Ni), ve(Ae(t)), {
      default: I(() => [
        q(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iC = /* @__PURE__ */ z({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = No(), r = qi();
    n.contentId || (n.contentId = gn(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: a } = le(), s = N(!1), i = N(!1), c = T(() => n.disabled.value ? {} : {
      click: m,
      focus: y,
      pointermove: d,
      pointerleave: h,
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
    function h() {
      n.onTriggerLeave(), i.value = !1;
    }
    function y(f) {
      var g, w;
      s.value || n.ignoreNonKeyboardFocus.value && !((w = (g = f.target).matches) != null && w.call(g, ":focus-visible")) || n.onOpen();
    }
    function p() {
      n.onClose();
    }
    function m() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (f, g) => (x(), H(v(kp), {
      "as-child": "",
      reference: f.reference
    }, {
      default: I(() => [
        J(v(ke), ie({
          ref: v(o),
          "aria-describedby": v(n).open.value ? v(n).contentId : void 0,
          "data-state": v(n).stateAttribute.value,
          as: f.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Ec(c.value)), {
          default: I(() => [
            q(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), lC = { class: "text-lg font-semibold text-gray-900" }, uC = { key: 0 }, cC = { class: "p-6" }, dC = /* @__PURE__ */ z({
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
    }), (r, o) => (x(), H(v(Ii), {
      defaultOpen: r.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a),
      class: "rounded-lg border border-gray-200 bg-white shadow"
    }, {
      default: I(() => [
        J(v(Li), {
          class: "focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          style: et({ backgroundColor: r.headerColor })
        }, {
          default: I(() => [
            D("h3", lC, [
              r.header ? (x(), k("span", uC, Z(r.header), 1)) : q(r.$slots, "trigger", { key: 1 })
            ]),
            D("div", {
              class: Q(["text-primary-600 transition-transform duration-300 ease-in-out", { "rotate-180": n.value }])
            }, [
              J(v(Ee), {
                icon: v(Zs),
                class: "h-5 w-5"
              }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 3
        }, 8, ["style"]),
        J(v(Bi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: I(() => [
            D("div", cC, [
              q(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), w4 = /* @__PURE__ */ z({
  __name: "Dropdown",
  props: {
    align: { default: Yf.START },
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
    return (i, c) => (x(), H(v(_p), {
      open: n.value,
      "onUpdate:open": [
        c[0] || (c[0] = (l) => n.value = l),
        s
      ]
    }, {
      default: I(() => [
        J(v(Lp), { "aria-label": "Dropdown" }, {
          default: I(() => [
            q(i.$slots, "trigger")
          ]),
          _: 3
        }),
        J(v(Bp), null, {
          default: I(() => [
            J(v(Ip), ie({ alignOffset: i.alignOffset }, i.$attrs, {
              align: i.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]",
              onMouseenter: o,
              onMouseleave: a
            }), {
              default: I(() => [
                q(i.$slots, "content")
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
}), S4 = /* @__PURE__ */ z({
  __name: "DropdownLink",
  props: {
    href: {}
  },
  setup(e) {
    return (t, n) => (x(), H(v(Ux), null, {
      default: I(() => [
        J(v(ft), ie(t.$attrs, {
          href: t.href,
          class: "focusable flex w-full items-center gap-2 rounded px-8 py-6 text-left text-base leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
        }), {
          default: I(() => [
            q(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["href"])
      ]),
      _: 3
    }));
  }
}), x4 = /* @__PURE__ */ z({
  __name: "DropdownSeparator",
  setup(e) {
    return (t, n) => (x(), H(v(Hx), { class: "mx-1 my-px h-px bg-gray-300" }));
  }
}), fC = ["href", "target", "tabindex", "aria-disabled"], pC = "focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium transition-colors duration-200 select-none", C4 = /* @__PURE__ */ z({
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
      return n.theme !== Se.NO_STYLE && o.push(pC), o.push(t[n.theme]), o;
    };
    return (o, a) => o.href && (o.method || o.data) ? (x(), H(v(ft), {
      key: 0,
      href: o.href,
      method: o.method,
      data: o.data,
      class: Q(r()),
      disabled: o.disabled,
      as: "button",
      tabindex: "0"
    }, {
      default: I(() => [
        q(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class", "disabled"])) : (x(), k("a", {
      key: 1,
      href: o.href,
      target: o.target,
      class: Q(r()),
      tabindex: o.disabled ? -1 : 0,
      "aria-disabled": o.disabled,
      onClick: a[0] || (a[0] = (s) => o.disabled && s.preventDefault())
    }, [
      q(o.$slots, "default")
    ], 10, fC));
  }
}), mC = {
  class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
  type: "button"
}, hC = { class: "mx-1 w-2" }, yC = ["aria-labelledby"], O4 = /* @__PURE__ */ z({
  __name: "LinkDropdownButton",
  props: {
    align: { default: Yf.START },
    alignOffset: { default: 5 },
    title: { default: void 0 }
  },
  setup(e) {
    const t = N(!1);
    return (n, r) => (x(), H(v(_p), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: I(() => [
        J(v(Lp), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: I(() => [
            D("button", mC, [
              ce(Z(n.title) + " ", 1),
              D("span", hC, [
                J(v(Ee), { icon: v(Qs) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        J(v(Bp), null, {
          default: I(() => [
            J(v(Ip), ie({ alignOffset: n.alignOffset }, n.$attrs, {
              align: n.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            }), {
              default: I(() => [
                D("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
                  "aria-labelledby": n.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  q(n.$slots, "default")
                ], 8, yC)
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
}), gC = ["href"], A4 = /* @__PURE__ */ z({
  __name: "LinkDropdownButtonItem",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, n) => (x(), k("li", null, [
      D("a", {
        class: "focusable inline-flex w-full items-center justify-center bg-transparent px-4 py-2 text-sm font-normal whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href
      }, Z(t.title), 9, gC)
    ]));
  }
}), E4 = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (x(), H(v(dC), { header: e.header }, {
      default: I(() => [
        J(v(RC), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, vC = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, bC = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, wC = {
  key: 0,
  class: "text-center"
}, SC = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, xC = { class: "flex-start w-full md:flex" }, CC = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, OC = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, AC = { class: "mb-1 flex justify-between" }, EC = { class: "text-sm text-neutral-500" }, PC = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, kC = {
  key: 1,
  class: "text-sm text-primary-500"
}, $C = { class: "text-sm text-neutral-500" }, TC = { class: "font-medium" }, DC = {
  key: 0,
  class: "line-through"
}, FC = ["innerHTML"], RC = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return xo.add(wm, as, Cm, dm, xm), (t, n) => e.logs == null ? (x(), k("div", vC, [
      J(v(Vi))
    ])) : (x(), k("div", bC, [
      e.logs.total ? (x(), k("ol", SC, [
        (x(!0), k(re, null, be(e.logs.data, (r) => (x(), k("li", {
          key: r.id
        }, [
          D("div", xC, [
            D("div", CC, [
              J(v(Ee), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            D("div", OC, [
              D("div", AC, [
                D("span", EC, [
                  ce(Z(r.event_formatted) + " ", 1),
                  r.reference ? (x(), k("span", PC, Z(r.reference), 1)) : Y("", !0),
                  r.causer ? (x(), k(re, { key: 1 }, [
                    r.causer.id ? (x(), H(v(ft), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: I(() => [
                        ce(" (" + Z(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (x(), k("span", kC, "(" + Z(r.causer.first_name) + ")", 1))
                  ], 64)) : Y("", !0)
                ]),
                D("span", $C, Z(r.created_date_full), 1)
              ]),
              (x(!0), k(re, null, be(r.changes_formatted, (o, a) => (x(), k("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                D("span", TC, Z(a) + ":", 1),
                o.old ? (x(), k("span", DC, Z(o.old), 1)) : Y("", !0),
                ce(" " + Z(o.new), 1)
              ]))), 128)),
              r.description_details ? (x(), k("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, FC)) : Y("", !0)
            ])
          ])
        ]))), 128))
      ])) : (x(), k("p", wC, "No Data")),
      e.logs.links ? (x(), H(v(jp), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Y("", !0)
    ]));
  }
}, P4 = /* @__PURE__ */ z({
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
    pe(() => document.addEventListener("keydown", s)), Mt(() => {
      document.removeEventListener("keydown", s), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", g), document.body.style.overflow = null;
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
    }), c = N(!1), l = N(null), u = N(0), d = N(0), h = N(0), y = N(0), p = N(null), m = N(null), f = (O, P) => {
      c.value = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", g), l.value = P, u.value = O.clientX, d.value = O.clientY, h.value = o.value.offsetWidth, y.value = o.value.offsetHeight;
    }, g = (O) => {
      c.value = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", g);
    }, w = (O) => {
      if (!c.value) return;
      const P = (O.clientX - u.value) * 2, F = O.clientY - d.value;
      l.value.includes("x") && (p.value = h.value + P + "px"), l.value.includes("-x") && (p.value = h.value - P + "px"), l.value.includes("y") && (m.value = y.value + F + "px");
    };
    return (O, P) => (x(), H(Rc, { to: "body" }, [
      J(cn, { "leave-active-class": "duration-200" }, {
        default: I(() => [
          He(D("div", {
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
              default: I(() => [
                He(D("div", {
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
              default: I(() => [
                He(D("div", {
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
                    height: m.value || "",
                    maxWidth: p.value || "",
                    maxHeight: m.value || ""
                  })
                }, [
                  e.show ? q(O.$slots, "default", { key: 0 }) : Y("", !0),
                  e.resizable ? (x(), k(re, { key: 1 }, [
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: P[0] || (P[0] = (F) => f(F, "y")),
                      onMouseup: g
                    }, null, 32),
                    D("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: P[1] || (P[1] = (F) => f(F, "-x")),
                      onMouseup: g
                    }, null, 32),
                    D("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: P[2] || (P[2] = (F) => f(F, "x")),
                      onMouseup: g
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: P[3] || (P[3] = (F) => f(F, "xy")),
                      onMouseup: g
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: P[4] || (P[4] = (F) => f(F, "-xy")),
                      onMouseup: g
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
}), _C = {
  key: 2,
  class: "mb-3"
}, IC = {
  key: 3,
  class: "mt-5 flex justify-end gap-1.5"
}, k4 = /* @__PURE__ */ z({
  __name: "NewModal",
  props: /* @__PURE__ */ pt({
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
    const t = e, n = Nn(e, "modelValue"), r = (o) => {
      n.value = o;
    };
    return pe(() => {
      t.defaultOpen && (n.value = !0);
    }), Mt(() => {
      n.value = !1;
    }), ne(
      () => t.defaultOpen,
      (o) => {
        n.value = o;
      }
    ), (o, a) => (x(), H(v(O3), {
      defaultOpen: o.defaultOpen,
      open: n.value,
      "onUpdate:open": [
        a[0] || (a[0] = (s) => n.value = s),
        r
      ]
    }, {
      default: I(() => [
        o.$slots.trigger ? (x(), H(v(ix), {
          key: 0,
          asChild: ""
        }, {
          default: I(() => [
            q(o.$slots, "trigger")
          ]),
          _: 3
        })) : Y("", !0),
        J(v(Vx), null, {
          default: I(() => [
            J(v(ax), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" }),
            J(v(Q3), ie({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 shadow-lg/20 focus:outline-none" }, o.$attrs), {
              default: I(() => [
                o.title || o.$slots.header ? (x(), H(v(sx), {
                  key: 0,
                  class: "m-0 text-lg font-semibold"
                }, {
                  default: I(() => [
                    q(o.$slots, "header", {}, () => [
                      ce(Z(o.title), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                o.description || o.$slots.description ? (x(), H(v(Z3), {
                  key: 1,
                  class: "mt-2 text-sm leading-normal"
                }, {
                  default: I(() => [
                    q(o.$slots, "description", {}, () => [
                      ce(Z(o.description), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                o.title || o.$slots.header || o.description || o.$slots.description ? (x(), k("div", _C)) : Y("", !0),
                q(o.$slots, "default"),
                o.$slots.footer ? (x(), k("div", IC, [
                  q(o.$slots, "footer")
                ])) : Y("", !0),
                J(v(A3), {
                  class: "focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none",
                  "aria-label": "Close"
                }, {
                  default: I(() => [
                    J(v(Ee), { icon: v(Zr) }, null, 8, ["icon"])
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
}), BC = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, LC = { class: "ml-3 flex-1 whitespace-nowrap" }, $4 = /* @__PURE__ */ z({
  __name: "NavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = T(
      () => t.active ? "cursor-pointer focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "cursor-pointer focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, o) => (x(), H(v(ft), {
      href: r.href,
      class: Q(n.value)
    }, {
      default: I(() => [
        r.$slots.icon ? (x(), k("div", BC, [
          q(r.$slots, "icon")
        ])) : Y("", !0),
        D("span", LC, [
          q(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), MC = { class: "pagination flex justify-between" }, NC = ["value", "selected"], jC = {
  key: 0,
  "aria-label": "Page navigation"
}, qC = ["innerHTML"], VC = ["innerHTML", "onClick"], jp = /* @__PURE__ */ z({
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
      let h = Math.max(1, d - Math.floor(r.maxPagesToShow / 2)), y = Math.min(r.links.length - 2, h + r.maxPagesToShow - 1);
      return y - h < r.maxPagesToShow - 1 && (h = Math.max(1, y - r.maxPagesToShow + 1)), [l, ...r.links.slice(h, y + 1), u];
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
    return (l, u) => (x(), k("div", MC, [
      D("div", null, [
        l.showPerPage ? (x(), H(v(pg), {
          key: 0,
          type: "select",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d),
          class: "per-page-input w-20",
          onChanged: c
        }, {
          default: I(() => [
            (x(), k(re, null, be(a, (d) => D("option", {
              key: d,
              value: d,
              selected: d == o.value
            }, Z(d), 9, NC)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0)
      ]),
      s.value.length > 3 ? (x(), k("nav", jC, [
        D("ul", {
          class: Q(["list-style-none flex", { [l.customListClass]: l.customListClass }])
        }, [
          (x(!0), k(re, null, be(s.value, (d, h) => (x(), k("li", { key: h }, [
            l.linkReturn ? (x(), k(re, { key: 0 }, [
              d.url === null ? (x(), k("button", {
                key: 0,
                class: Q(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: u[1] || (u[1] = (y) => i(""))
              }, null, 10, qC)) : (x(), k("button", {
                key: 1,
                class: Q(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [l.customLinkClass]: l.customLinkClass,
                  [l.customActiveLinkClass]: d.active && l.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (y) => i(d.url)
              }, null, 10, VC))
            ], 64)) : (x(), k(re, { key: 1 }, [
              d.url === null ? (x(), H(v(ft), {
                key: 0,
                class: Q(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (x(), H(v(ft), {
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
}), T4 = /* @__PURE__ */ z({
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => {
      const r = tm("Td");
      return x(), H(r, {
        "data-te-collapse-init": "",
        "data-te-target": "#" + t.collapse_id,
        "aria-expanded": "false",
        "aria-controls": t.collapse_id,
        class: "cursor-pointer"
      }, {
        default: I(() => [
          q(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-te-target", "aria-controls"]);
    };
  }
}), D4 = /* @__PURE__ */ z({
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
    return (s, i) => (x(), k("tr", {
      class: Q(a.value),
      onClick: o
    }, [
      q(s.$slots, "default")
    ], 2));
  }
}), zC = ["onClick"], F4 = /* @__PURE__ */ z({
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
    const n = e, r = t, o = A2({
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
    return (l, u) => (x(), H(v(T2), ve(Ae(n)), {
      default: I(() => {
        var d;
        return [
          a.value.length > 0 ? (x(), k(re, { key: 0 }, [
            J(v(D2), null, {
              default: I(() => [
                D("tr", null, [
                  (x(!0), k(re, null, be(a.value, (h) => (x(), H(v(N2), {
                    key: h.key,
                    column: h.key,
                    sortable: h.sortable,
                    width: h.width || void 0,
                    align: h.align || "left",
                    onClick: (y) => h.sortable ? i(h.key) : null
                  }, {
                    default: I(() => [
                      ce(Z(h.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["column", "sortable", "width", "align", "onClick"]))), 128))
                ])
              ]),
              _: 1
            }),
            J(v(B2), {
              data: c.value,
              loading: (d = v(o).isLoading) == null ? void 0 : d.value,
              "empty-message": n.emptyMessage
            }, {
              default: I(() => [
                (x(!0), k(re, null, be(c.value, (h, y) => {
                  var p, m;
                  return x(), k("tr", {
                    key: h.id || y,
                    class: Q([
                      "border-b border-gray-200 transition-colors hover:bg-gray-50",
                      {
                        "cursor-pointer": n.selectable,
                        "bg-blue-50": (m = (p = v(o)).isSelected) == null ? void 0 : m.call(p, h)
                      }
                    ]),
                    onClick: (f) => s(h, y)
                  }, [
                    (x(!0), k(re, null, be(a.value, (f) => (x(), H(v(fo), {
                      key: f.key,
                      align: f.align || "left",
                      width: f.width || void 0,
                      nowrap: f.key === "id"
                    }, {
                      default: I(() => [
                        q(l.$slots, `cell-${f.key}`, {
                          row: h,
                          column: f,
                          value: h[f.key]
                        }, () => [
                          ce(Z(h[f.key]), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["align", "width", "nowrap"]))), 128))
                  ], 10, zC);
                }), 128))
              ]),
              _: 3
            }, 8, ["data", "loading", "empty-message"])
          ], 64)) : q(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 16));
  }
}), R4 = /* @__PURE__ */ z({
  __name: "DangerButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(v(wn), {
      theme: v(Se).DANGER,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), _4 = /* @__PURE__ */ z({
  __name: "WarningButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(v(wn), {
      theme: v(Se).WARNING,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), I4 = /* @__PURE__ */ z({
  __name: "InfoButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(v(wn), {
      theme: v(Se).INFO,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), B4 = /* @__PURE__ */ z({
  __name: "SuccessButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(v(wn), {
      theme: v(Se).SUCCESS,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), L4 = /* @__PURE__ */ z({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = T(
      () => t.active ? "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, o) => (x(), H(v(ft), {
      href: r.href,
      class: Q(n.value)
    }, {
      default: I(() => [
        q(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), UC = /* @__PURE__ */ z({
  __name: "SecondaryButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(v(wn), {
      theme: v(Se).SECONDARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: I(() => [
        q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), HC = {
  key: 0,
  class: "border-b border-gray-200 bg-gray-50/50 px-6 py-4"
}, WC = { class: "flex items-center justify-between" }, KC = { class: "text-lg font-semibold text-gray-900" }, GC = { key: 0 }, YC = { class: "p-6" }, M4 = /* @__PURE__ */ z({
  __name: "Section",
  props: {
    header: {},
    overflow: { type: Boolean, default: !1 },
    variant: { default: "default" },
    unstyled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = nm(), r = T(() => {
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
    return (s, i) => (x(), k("div", ie({ class: o.value }, a.value), [
      s.header ? (x(), k("div", HC, [
        D("div", WC, [
          D("h3", KC, Z(s.header), 1),
          s.$slots.headerButton ? (x(), k("div", GC, [
            q(s.$slots, "headerButton")
          ])) : Y("", !0)
        ])
      ])) : Y("", !0),
      D("div", YC, [
        q(s.$slots, "default")
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
    return (o, a) => (x(), k("div", {
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
}), XC = ["onClick"], JC = { class: "group-hover:text-primary-600 text-2xl font-bold text-gray-900 transition-colors" }, QC = { class: "text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900" }, N4 = /* @__PURE__ */ z({
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
    const n = t, r = e, o = Vf(), a = (i) => {
      let c = i;
      s(i) && (c = null), n("updateSearch", c);
    }, s = (i) => {
      const c = {};
      return o.url.includes("?") && new URLSearchParams(o.url.split("?")[1]).forEach((u, d) => {
        c[d] = u;
      }), r.statusName != null ? c[r.statusName] == i : c.status == i;
    };
    return (i, c) => (x(), k("div", {
      class: Q(["grid gap-4", [i.customContainerClass]]),
      style: { "grid-template-columns": "repeat(auto-fit, minmax(164px, 1fr))" }
    }, [
      (x(!0), k(re, null, be(i.stats, (l) => (x(), k("div", {
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
          D("div", JC, Z(l.value), 1)
        ], 2),
        D("div", {
          class: Q(["border-t border-gray-100 bg-gray-50/50 px-6 py-3", [i.customStatLabelClass]])
        }, [
          D("div", QC, Z(l.label ?? l.name), 1)
        ], 2),
        c[0] || (c[0] = D("div", { class: "from-primary-500 to-primary-600 absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100" }, null, -1))
      ], 10, XC))), 128))
    ], 2));
  }
}), ZC = "fill-white stroke-gray-200", eO = /* @__PURE__ */ z({
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
    return (o, a) => (x(), H(v(tC), { "delay-duration": o.delayDuration }, {
      default: I(() => [
        J(v(rC), { disabled: o.disabled }, {
          default: I(() => [
            J(v(iC), { "as-child": "" }, {
              default: I(() => [
                q(o.$slots, "default")
              ]),
              _: 3
            }),
            J(v(sC), null, {
              default: I(() => [
                J(v(aC), {
                  side: n.value,
                  sideOffset: o.sideOffset,
                  collisionPadding: o.collisionPadding,
                  class: Q([v(r), o.contentClass])
                }, {
                  default: I(() => [
                    ce(Z(o.content) + " ", 1),
                    J(v(Zx), {
                      class: Q([ZC, o.arrowClass])
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
}), tO = ["type", "disabled"], nO = "focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed", wn = /* @__PURE__ */ z({
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
    return (o, a) => (x(), k("button", {
      type: o.type,
      disabled: o.disabled,
      class: Q([
        // Apply base styles and size only if not no-style theme
        t.theme !== v(Se).NO_STYLE ? [nO, n[t.size]] : [],
        // Always apply theme variant
        r[t.theme],
        // Custom classes
        t.customClass
      ])
    }, [
      q(o.$slots, "default")
    ], 10, tO));
  }
}), rO = { class: "mt-2" }, j4 = /* @__PURE__ */ z({
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
    }), (r, o) => (x(), H(v(Ii), {
      defaultOpen: r.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
    }, {
      default: I(() => [
        J(v(Li), { asChild: "" }, {
          default: I(() => [
            q(r.$slots, "trigger", {}, () => [
              J(v(UC), ve(Ae(r.$attrs)), {
                default: I(() => [
                  D("span", null, Z(n.value ? r.button[1] : r.button[0]), 1),
                  J(v(Ee), {
                    icon: v(Qs),
                    class: Q(["transition-all", { "rotate-180": n.value }])
                  }, null, 8, ["icon", "class"])
                ]),
                _: 1
              }, 16)
            ])
          ]),
          _: 3
        }),
        J(v(Bi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: I(() => [
            D("div", rO, [
              q(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), oO = { class: "border-t border-gray-100" }, aO = { class: "divide-y divide-gray-100" }, q4 = /* @__PURE__ */ z({
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
    }), (l, u) => (x(), k("div", oO, [
      D("dl", aO, [
        q(l.$slots, "default")
      ])
    ]));
  }
}), sO = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, iO = { class: "flex items-center text-sm font-medium" }, lO = {
  key: 0,
  class: "ml-1 text-red-500"
}, uO = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, cO = { class: "flex min-h-full items-center" }, dO = { class: "slot-content grow" }, fO = { class: "ml-4 shrink-0" }, pO = { class: "slot-edit grow" }, mO = { class: "ml-4 shrink-0" }, V4 = /* @__PURE__ */ z({
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
    }, l = Xs("registerItem");
    return pe(() => {
      l && l({ startEditing: i, stopEditing: c, toggleEditing: s });
    }), t({
      toggleEditing: s,
      startEditing: i,
      stopEditing: c,
      isEditing: () => a.value
    }), (d, h) => (x(), k("div", sO, [
      D("dt", iO, [
        ce(Z(d.label) + " ", 1),
        q(d.$slots, "label"),
        d.required ? (x(), k("span", lO, "*")) : Y("", !0)
      ]),
      D("dd", uO, [
        D("div", cO, [
          a.value ? (x(), k(re, { key: 1 }, [
            D("div", pO, [
              q(d.$slots, "edit")
            ]),
            D("span", mO, [
              D("button", {
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-xl font-bold"
              }, [
                J(v(Ee), { icon: v(el) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (x(), k(re, { key: 0 }, [
            D("div", dO, [
              q(d.$slots, "default"),
              ce(" " + Z(d.value), 1)
            ]),
            D("span", fO, [
              d.editable ? (x(), k("button", {
                key: 0,
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-lg font-bold"
              }, [
                J(v(Ee), { icon: v(as) }, null, 8, ["icon"])
              ])) : Y("", !0),
              q(d.$slots, "buttons")
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
function hO() {
  return xc || (xc = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var a = !r && typeof self == "object", s = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? o = Es : a && (o = self);
      var i = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, c = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), u = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], h = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), p = [], m;
      if (c) {
        var f = new ArrayBuffer(68);
        m = new Uint8Array(f), p = new Uint32Array(f);
      }
      var g = Array.isArray;
      (o.JS_MD5_NO_NODE_JS || !g) && (g = function(b) {
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
        if (!g(b) && !w(b))
          throw new Error(t);
        return [b, !1];
      }, P = function(b) {
        return function(E) {
          return new B(!0).update(E)[b]();
        };
      }, F = function() {
        var b = P("hex");
        s && (b = U(b)), b.create = function() {
          return new B();
        }, b.update = function(S) {
          return b.create().update(S);
        };
        for (var E = 0; E < h.length; ++E) {
          var C = h[E];
          b[C] = P(C);
        }
        return b;
      }, U = function(b) {
        var E = Ps, C = Ps.Buffer, S;
        C.from && !o.JS_MD5_NO_BUFFER_FROM ? S = C.from : S = function(L) {
          return new C(L);
        };
        var K = function(L) {
          if (typeof L == "string")
            return E.createHash("md5").update(L, "utf8").digest("hex");
          if (L == null)
            throw new Error(t);
          return L.constructor === ArrayBuffer && (L = new Uint8Array(L)), g(L) || w(L) || L.constructor === C ? E.createHash("md5").update(S(L)).digest("hex") : b(L);
        };
        return K;
      }, A = function(b) {
        return function(E, C) {
          return new $(E, !0).update(C)[b]();
        };
      }, W = function() {
        var b = A("hex");
        b.create = function(S) {
          return new $(S);
        }, b.update = function(S, K) {
          return b.create(S).update(K);
        };
        for (var E = 0; E < h.length; ++E) {
          var C = h[E];
          b[C] = A(C);
        }
        return b;
      };
      function B(b) {
        if (b)
          p[0] = p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0, this.blocks = p, this.buffer8 = m;
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
        for (var C = E[1], S, K = 0, L, R = b.length, X = this.blocks, ae = this.buffer8; K < R; ) {
          if (this.hashed && (this.hashed = !1, X[0] = X[16], X[16] = X[1] = X[2] = X[3] = X[4] = X[5] = X[6] = X[7] = X[8] = X[9] = X[10] = X[11] = X[12] = X[13] = X[14] = X[15] = 0), C)
            if (c)
              for (L = this.start; K < R && L < 64; ++K)
                S = b.charCodeAt(K), S < 128 ? ae[L++] = S : S < 2048 ? (ae[L++] = 192 | S >>> 6, ae[L++] = 128 | S & 63) : S < 55296 || S >= 57344 ? (ae[L++] = 224 | S >>> 12, ae[L++] = 128 | S >>> 6 & 63, ae[L++] = 128 | S & 63) : (S = 65536 + ((S & 1023) << 10 | b.charCodeAt(++K) & 1023), ae[L++] = 240 | S >>> 18, ae[L++] = 128 | S >>> 12 & 63, ae[L++] = 128 | S >>> 6 & 63, ae[L++] = 128 | S & 63);
            else
              for (L = this.start; K < R && L < 64; ++K)
                S = b.charCodeAt(K), S < 128 ? X[L >>> 2] |= S << d[L++ & 3] : S < 2048 ? (X[L >>> 2] |= (192 | S >>> 6) << d[L++ & 3], X[L >>> 2] |= (128 | S & 63) << d[L++ & 3]) : S < 55296 || S >= 57344 ? (X[L >>> 2] |= (224 | S >>> 12) << d[L++ & 3], X[L >>> 2] |= (128 | S >>> 6 & 63) << d[L++ & 3], X[L >>> 2] |= (128 | S & 63) << d[L++ & 3]) : (S = 65536 + ((S & 1023) << 10 | b.charCodeAt(++K) & 1023), X[L >>> 2] |= (240 | S >>> 18) << d[L++ & 3], X[L >>> 2] |= (128 | S >>> 12 & 63) << d[L++ & 3], X[L >>> 2] |= (128 | S >>> 6 & 63) << d[L++ & 3], X[L >>> 2] |= (128 | S & 63) << d[L++ & 3]);
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
        var b, E, C, S, K, L, R = this.blocks;
        this.first ? (b = R[0] - 680876937, b = (b << 7 | b >>> 25) - 271733879 << 0, S = (-1732584194 ^ b & 2004318071) + R[1] - 117830708, S = (S << 12 | S >>> 20) + b << 0, C = (-271733879 ^ S & (b ^ -271733879)) + R[2] - 1126478375, C = (C << 17 | C >>> 15) + S << 0, E = (b ^ C & (S ^ b)) + R[3] - 1316259209, E = (E << 22 | E >>> 10) + C << 0) : (b = this.h0, E = this.h1, C = this.h2, S = this.h3, b += (S ^ E & (C ^ S)) + R[0] - 680876936, b = (b << 7 | b >>> 25) + E << 0, S += (C ^ b & (E ^ C)) + R[1] - 389564586, S = (S << 12 | S >>> 20) + b << 0, C += (E ^ S & (b ^ E)) + R[2] + 606105819, C = (C << 17 | C >>> 15) + S << 0, E += (b ^ C & (S ^ b)) + R[3] - 1044525330, E = (E << 22 | E >>> 10) + C << 0), b += (S ^ E & (C ^ S)) + R[4] - 176418897, b = (b << 7 | b >>> 25) + E << 0, S += (C ^ b & (E ^ C)) + R[5] + 1200080426, S = (S << 12 | S >>> 20) + b << 0, C += (E ^ S & (b ^ E)) + R[6] - 1473231341, C = (C << 17 | C >>> 15) + S << 0, E += (b ^ C & (S ^ b)) + R[7] - 45705983, E = (E << 22 | E >>> 10) + C << 0, b += (S ^ E & (C ^ S)) + R[8] + 1770035416, b = (b << 7 | b >>> 25) + E << 0, S += (C ^ b & (E ^ C)) + R[9] - 1958414417, S = (S << 12 | S >>> 20) + b << 0, C += (E ^ S & (b ^ E)) + R[10] - 42063, C = (C << 17 | C >>> 15) + S << 0, E += (b ^ C & (S ^ b)) + R[11] - 1990404162, E = (E << 22 | E >>> 10) + C << 0, b += (S ^ E & (C ^ S)) + R[12] + 1804603682, b = (b << 7 | b >>> 25) + E << 0, S += (C ^ b & (E ^ C)) + R[13] - 40341101, S = (S << 12 | S >>> 20) + b << 0, C += (E ^ S & (b ^ E)) + R[14] - 1502002290, C = (C << 17 | C >>> 15) + S << 0, E += (b ^ C & (S ^ b)) + R[15] + 1236535329, E = (E << 22 | E >>> 10) + C << 0, b += (C ^ S & (E ^ C)) + R[1] - 165796510, b = (b << 5 | b >>> 27) + E << 0, S += (E ^ C & (b ^ E)) + R[6] - 1069501632, S = (S << 9 | S >>> 23) + b << 0, C += (b ^ E & (S ^ b)) + R[11] + 643717713, C = (C << 14 | C >>> 18) + S << 0, E += (S ^ b & (C ^ S)) + R[0] - 373897302, E = (E << 20 | E >>> 12) + C << 0, b += (C ^ S & (E ^ C)) + R[5] - 701558691, b = (b << 5 | b >>> 27) + E << 0, S += (E ^ C & (b ^ E)) + R[10] + 38016083, S = (S << 9 | S >>> 23) + b << 0, C += (b ^ E & (S ^ b)) + R[15] - 660478335, C = (C << 14 | C >>> 18) + S << 0, E += (S ^ b & (C ^ S)) + R[4] - 405537848, E = (E << 20 | E >>> 12) + C << 0, b += (C ^ S & (E ^ C)) + R[9] + 568446438, b = (b << 5 | b >>> 27) + E << 0, S += (E ^ C & (b ^ E)) + R[14] - 1019803690, S = (S << 9 | S >>> 23) + b << 0, C += (b ^ E & (S ^ b)) + R[3] - 187363961, C = (C << 14 | C >>> 18) + S << 0, E += (S ^ b & (C ^ S)) + R[8] + 1163531501, E = (E << 20 | E >>> 12) + C << 0, b += (C ^ S & (E ^ C)) + R[13] - 1444681467, b = (b << 5 | b >>> 27) + E << 0, S += (E ^ C & (b ^ E)) + R[2] - 51403784, S = (S << 9 | S >>> 23) + b << 0, C += (b ^ E & (S ^ b)) + R[7] + 1735328473, C = (C << 14 | C >>> 18) + S << 0, E += (S ^ b & (C ^ S)) + R[12] - 1926607734, E = (E << 20 | E >>> 12) + C << 0, K = E ^ C, b += (K ^ S) + R[5] - 378558, b = (b << 4 | b >>> 28) + E << 0, S += (K ^ b) + R[8] - 2022574463, S = (S << 11 | S >>> 21) + b << 0, L = S ^ b, C += (L ^ E) + R[11] + 1839030562, C = (C << 16 | C >>> 16) + S << 0, E += (L ^ C) + R[14] - 35309556, E = (E << 23 | E >>> 9) + C << 0, K = E ^ C, b += (K ^ S) + R[1] - 1530992060, b = (b << 4 | b >>> 28) + E << 0, S += (K ^ b) + R[4] + 1272893353, S = (S << 11 | S >>> 21) + b << 0, L = S ^ b, C += (L ^ E) + R[7] - 155497632, C = (C << 16 | C >>> 16) + S << 0, E += (L ^ C) + R[10] - 1094730640, E = (E << 23 | E >>> 9) + C << 0, K = E ^ C, b += (K ^ S) + R[13] + 681279174, b = (b << 4 | b >>> 28) + E << 0, S += (K ^ b) + R[0] - 358537222, S = (S << 11 | S >>> 21) + b << 0, L = S ^ b, C += (L ^ E) + R[3] - 722521979, C = (C << 16 | C >>> 16) + S << 0, E += (L ^ C) + R[6] + 76029189, E = (E << 23 | E >>> 9) + C << 0, K = E ^ C, b += (K ^ S) + R[9] - 640364487, b = (b << 4 | b >>> 28) + E << 0, S += (K ^ b) + R[12] - 421815835, S = (S << 11 | S >>> 21) + b << 0, L = S ^ b, C += (L ^ E) + R[15] + 530742520, C = (C << 16 | C >>> 16) + S << 0, E += (L ^ C) + R[2] - 995338651, E = (E << 23 | E >>> 9) + C << 0, b += (C ^ (E | ~S)) + R[0] - 198630844, b = (b << 6 | b >>> 26) + E << 0, S += (E ^ (b | ~C)) + R[7] + 1126891415, S = (S << 10 | S >>> 22) + b << 0, C += (b ^ (S | ~E)) + R[14] - 1416354905, C = (C << 15 | C >>> 17) + S << 0, E += (S ^ (C | ~b)) + R[5] - 57434055, E = (E << 21 | E >>> 11) + C << 0, b += (C ^ (E | ~S)) + R[12] + 1700485571, b = (b << 6 | b >>> 26) + E << 0, S += (E ^ (b | ~C)) + R[3] - 1894986606, S = (S << 10 | S >>> 22) + b << 0, C += (b ^ (S | ~E)) + R[10] - 1051523, C = (C << 15 | C >>> 17) + S << 0, E += (S ^ (C | ~b)) + R[1] - 2054922799, E = (E << 21 | E >>> 11) + C << 0, b += (C ^ (E | ~S)) + R[8] + 1873313359, b = (b << 6 | b >>> 26) + E << 0, S += (E ^ (b | ~C)) + R[15] - 30611744, S = (S << 10 | S >>> 22) + b << 0, C += (b ^ (S | ~E)) + R[6] - 1560198380, C = (C << 15 | C >>> 17) + S << 0, E += (S ^ (C | ~b)) + R[13] + 1309151649, E = (E << 21 | E >>> 11) + C << 0, b += (C ^ (E | ~S)) + R[4] - 145523070, b = (b << 6 | b >>> 26) + E << 0, S += (E ^ (b | ~C)) + R[11] - 1120210379, S = (S << 10 | S >>> 22) + b << 0, C += (b ^ (S | ~E)) + R[2] + 718787259, C = (C << 15 | C >>> 17) + S << 0, E += (S ^ (C | ~b)) + R[9] - 343485551, E = (E << 21 | E >>> 11) + C << 0, this.first ? (this.h0 = b + 1732584193 << 0, this.h1 = E - 271733879 << 0, this.h2 = C - 1732584194 << 0, this.h3 = S + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + b << 0, this.h1 = this.h1 + E << 0, this.h2 = this.h2 + C << 0, this.h3 = this.h3 + S << 0);
      }, B.prototype.hex = function() {
        this.finalize();
        var b = this.h0, E = this.h1, C = this.h2, S = this.h3;
        return l[b >>> 4 & 15] + l[b & 15] + l[b >>> 12 & 15] + l[b >>> 8 & 15] + l[b >>> 20 & 15] + l[b >>> 16 & 15] + l[b >>> 28 & 15] + l[b >>> 24 & 15] + l[E >>> 4 & 15] + l[E & 15] + l[E >>> 12 & 15] + l[E >>> 8 & 15] + l[E >>> 20 & 15] + l[E >>> 16 & 15] + l[E >>> 28 & 15] + l[E >>> 24 & 15] + l[C >>> 4 & 15] + l[C & 15] + l[C >>> 12 & 15] + l[C >>> 8 & 15] + l[C >>> 20 & 15] + l[C >>> 16 & 15] + l[C >>> 28 & 15] + l[C >>> 24 & 15] + l[S >>> 4 & 15] + l[S & 15] + l[S >>> 12 & 15] + l[S >>> 8 & 15] + l[S >>> 20 & 15] + l[S >>> 16 & 15] + l[S >>> 28 & 15] + l[S >>> 24 & 15];
      }, B.prototype.toString = B.prototype.hex, B.prototype.digest = function() {
        this.finalize();
        var b = this.h0, E = this.h1, C = this.h2, S = this.h3;
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
          S & 255,
          S >>> 8 & 255,
          S >>> 16 & 255,
          S >>> 24 & 255
        ];
      }, B.prototype.array = B.prototype.digest, B.prototype.arrayBuffer = function() {
        this.finalize();
        var b = new ArrayBuffer(16), E = new Uint32Array(b);
        return E[0] = this.h0, E[1] = this.h1, E[2] = this.h2, E[3] = this.h3, b;
      }, B.prototype.buffer = B.prototype.arrayBuffer, B.prototype.base64 = function() {
        for (var b, E, C, S = "", K = this.array(), L = 0; L < 15; )
          b = K[L++], E = K[L++], C = K[L++], S += y[b >>> 2] + y[(b << 4 | E >>> 4) & 63] + y[(E << 2 | C >>> 6) & 63] + y[C & 63];
        return b = K[L], S += y[b >>> 2] + y[b << 4 & 63] + "==", S;
      };
      function $(b, E) {
        var C, S = O(b);
        if (b = S[0], S[1]) {
          var K = [], L = b.length, R = 0, X;
          for (C = 0; C < L; ++C)
            X = b.charCodeAt(C), X < 128 ? K[R++] = X : X < 2048 ? (K[R++] = 192 | X >>> 6, K[R++] = 128 | X & 63) : X < 55296 || X >= 57344 ? (K[R++] = 224 | X >>> 12, K[R++] = 128 | X >>> 6 & 63, K[R++] = 128 | X & 63) : (X = 65536 + ((X & 1023) << 10 | b.charCodeAt(++C) & 1023), K[R++] = 240 | X >>> 18, K[R++] = 128 | X >>> 12 & 63, K[R++] = 128 | X >>> 6 & 63, K[R++] = 128 | X & 63);
          b = K;
        }
        b.length > 64 && (b = new B(!0).update(b).array());
        var ae = [], Fe = [];
        for (C = 0; C < 64; ++C) {
          var Ye = b[C] || 0;
          ae[C] = 92 ^ Ye, Fe[C] = 54 ^ Ye;
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
var yO = hO();
const gO = ["src", "alt"], z4 = /* @__PURE__ */ z({
  __name: "GravatarImg",
  props: {
    email: {},
    size: { default: 100 }
  },
  setup(e) {
    const t = e, n = T(() => yO.md5(t.email.trim().toLowerCase())), r = T(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), o = T(() => `Gravatar for ${t.email}`);
    return (a, s) => (x(), k("img", {
      src: r.value,
      alt: o.value
    }, null, 8, gO));
  }
}), vO = ["id"], bO = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, wO = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, SO = { class: "space-y-1 px-4 py-1" }, U4 = /* @__PURE__ */ z({
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
    ), (r, o) => (x(), k("li", null, [
      J(v(Ii), {
        defaultOpen: r.open,
        open: n.value,
        "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
      }, {
        default: I(() => [
          J(v(Li), { asChild: "" }, {
            default: I(() => [
              D("button", {
                id: r.name,
                class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                r.$slots.icon ? (x(), k("div", bO, [
                  q(r.$slots, "icon")
                ])) : Y("", !0),
                D("span", wO, Z(r.name), 1),
                J(v(Ee), {
                  icon: v(Qs),
                  class: Q(["transition-all", { "rotate-180": n.value }])
                }, null, 8, ["icon", "class"])
              ], 8, vO)
            ]),
            _: 3
          }),
          J(v(Bi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: I(() => [
              D("ul", SO, [
                q(r.$slots, "default")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["defaultOpen", "open"])
    ]));
  }
}), xO = { class: "relative" }, CO = { class: "mt-4 flex flex-col items-center justify-center" }, OO = { class: "relative flex w-fit flex-row justify-center gap-3" }, AO = ["onClick"], H4 = {
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
    }), (c, l) => (x(), k("div", xO, [
      D("div", {
        class: "flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden",
        style: et({ gap: `${e.gap}px` }),
        ref_key: "container",
        ref: r,
        onScroll: l[0] || (l[0] = (...u) => c.onContainerScroll && c.onContainerScroll(...u))
      }, [
        q(c.$slots, "default")
      ], 36),
      D("div", CO, [
        D("div", OO, [
          D("div", {
            class: "absolute h-2 w-2 rounded-full bg-primary transition-all duration-300",
            style: et({ left: `${a.value}px` }),
            ref_key: "activeDot",
            ref: n
          }, null, 4),
          (x(!0), k(re, null, be(Array(c.$slots.default().length).fill(""), (u, d) => (x(), k("div", {
            key: d,
            class: "h-2 w-2 cursor-pointer rounded-full bg-accent",
            onClick: (h) => s(h, d)
          }, null, 8, AO))), 128))
        ])
      ])
    ]));
  }
}, EO = { class: "absolute inset-0 isolate z-0 size-full" }, W4 = /* @__PURE__ */ z({
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
    return (r, o) => (x(), k("div", {
      class: Q(["group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md", {
        [n.value.base]: !0,
        "ring-2": r.selected,
        [r.customStatClass]: r.customStatClass
      }])
    }, [
      D("div", {
        class: Q(["relative overflow-clip px-6 py-4", [r.customStatValueClass]])
      }, [
        D("div", EO, [
          J(v(Ee), {
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
}), PO = /* @__PURE__ */ z({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(v(wn), {
      theme: v(Se).PRIMARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customButtonClass,
      size: t.size
    }, {
      default: I(() => [
        q(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), kO = { class: "relative mt-4 mb-6 rounded-lg border border-gray-200 bg-gray-50" }, $O = { class: "flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-100 px-4 py-2" }, TO = { class: "overflow-x-auto p-4 text-sm" }, DO = { class: "language-vue text-gray-800 font-mono" }, K4 = /* @__PURE__ */ z({
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
    return (a, s) => (x(), k("div", kO, [
      D("div", $O, [
        s[0] || (s[0] = D("span", { class: "text-sm font-medium text-gray-700" }, "Code Example", -1)),
        D("button", {
          onClick: o,
          class: Q(["rounded px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800", { "text-green-600": r.value.includes("✓"), "text-red-600": r.value.includes("✗") }]),
          title: "Copy to clipboard"
        }, Z(r.value), 3)
      ]),
      D("pre", TO, [
        D("code", DO, Z(n.value), 1)
      ])
    ]));
  }
}), FO = { class: "mt-12 mb-8" }, RO = ["id"], G4 = /* @__PURE__ */ z({
  __name: "H2",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (x(), k("div", FO, [
      D("h2", {
        id: t.title.toLowerCase().replace(/\s+/g, "-"),
        class: "border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900"
      }, Z(t.title), 9, RO)
    ]));
  }
}), Y4 = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  g4 as Alert,
  wn as Button,
  Qy as Checkbox,
  K4 as CodePreview,
  dC as CollapsableSection,
  j4 as Collapse,
  dC as CollapsibleSection,
  R4 as DangerButton,
  W4 as DataTile,
  q4 as DescriptionList,
  V4 as DescriptionListItem,
  H4 as DottedCarousel,
  w4 as Dropdown,
  S4 as DropdownLink,
  NO as DropdownSearchbar,
  x4 as DropdownSeparator,
  F4 as EnhancedTable,
  c4 as FileDropZoneInput,
  z4 as GravatarImg,
  G4 as H2,
  d4 as Images,
  I4 as InfoButton,
  pg as Input,
  tn as InputError,
  qn as InputLabel,
  Js as InputWrapper,
  C4 as LinkButton,
  O4 as LinkDropdownButton,
  A4 as LinkDropdownButtonItem,
  E4 as Logs,
  RC as LogsContent,
  P4 as Modal,
  U4 as NavCollapse,
  $4 as NavLink,
  k4 as NewModal,
  jp as Pagination,
  PO as PrimaryButton,
  IO as PropsTable,
  f4 as RadioButton,
  L4 as ResponsiveNavLink,
  MO as RichSelect,
  U0 as SearchSelect,
  UC as SecondaryButton,
  M4 as Section,
  LO as Select,
  jO as Select2ajax,
  p4 as SelectMultiple,
  Vi as Spinner,
  N4 as Stats,
  co as SubmitButton,
  B4 as SuccessButton,
  $g as Switch,
  T2 as Table,
  y4 as TableItemCard,
  B2 as Tbody,
  fo as Td,
  T4 as TdCollapseHandler,
  pi as TextInput,
  Cg as Textarea,
  N2 as Th,
  D2 as Thead,
  eO as Tooltip,
  D4 as Tr,
  h4 as TrCollapse,
  m4 as TrCollapseHandler,
  sc as TrPlaceholder,
  BO as UnderConstruction,
  _4 as WarningButton,
  Y4 as default,
  Vf as getInertiaPage,
  Ro as getInertiaRouter,
  i4 as hasPermission,
  mw as moneyFormat,
  s4 as numberFormat,
  u4 as setInertiaPage,
  l4 as setInertiaRouter,
  dg as useFormIntegration,
  Qf as useInertiaTable,
  fg as useInputUtils,
  ug as useInputValue,
  cg as usePasswordToggle,
  Jf as useStickyTableHeader,
  A2 as useTable,
  O2 as useTableSelection,
  Xf as useTableSort
};
