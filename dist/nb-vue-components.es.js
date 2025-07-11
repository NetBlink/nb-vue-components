import * as Qi from "vue";
import { defineComponent as U, createElementBlock as P, openBlock as x, createElementVNode as $, createCommentVNode as Y, Fragment as ne, renderList as be, normalizeClass as J, toDisplayString as Q, computed as F, createBlock as H, renderSlot as j, unref as b, watch as re, h as qe, createVNode as Z, mergeModels as pt, useModel as Mn, ref as M, onMounted as pe, withDirectives as He, vModelCheckbox as Oc, createSlots as Wo, withCtx as B, vModelSelect as Cc, createTextVNode as ce, vShow as ln, vModelText as Ac, onUnmounted as Mt, Transition as un, nextTick as Te, resolveDirective as Kp, normalizeProps as ve, guardReactiveProps as Ee, resolveDynamicComponent as jr, mergeProps as ie, toHandlers as Ec, withModifiers as St, withKeys as rn, normalizeStyle as et, shallowRef as pr, markRaw as ns, reactive as mr, toRefs as Nt, getCurrentScope as Pc, onScopeDispose as kc, shallowReadonly as En, Comment as $c, cloneVNode as Gp, readonly as Dc, effectScope as Tc, toValue as Ft, onBeforeUnmount as Yp, watchEffect as at, customRef as Xp, getCurrentInstance as gn, inject as Ys, provide as mo, toHandlerKey as Jp, camelize as Fc, Teleport as Rc, toRef as Qp, watchPostEffect as Ic, mergeDefaults as _c, isRef as Zp, useSlots as em, resolveComponent as tm, useAttrs as nm } from "vue";
const rm = { class: "overflow-x-auto" }, om = { class: "min-w-full divide-y divide-gray-200" }, am = { class: "divide-y divide-gray-200 bg-white" }, sm = { key: 0 }, im = { class: "px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900" }, lm = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, um = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, cm = { class: "px-6 py-4 text-sm text-gray-500" }, kO = /* @__PURE__ */ U({
  __name: "PropsTable",
  props: {
    rows: { default: () => [] }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), P("div", rm, [
      $("table", om, [
        r[1] || (r[1] = $("thead", { class: "bg-gray-50" }, [
          $("tr", null, [
            $("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Prop"),
            $("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Type"),
            $("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Default"),
            $("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Description")
          ])
        ], -1)),
        $("tbody", am, [
          t.rows.length === 0 ? (x(), P("tr", sm, r[0] || (r[0] = [
            $("td", {
              colspan: "4",
              class: "px-6 py-4 text-center text-sm text-gray-500"
            }, "No props defined", -1)
          ]))) : Y("", !0),
          (x(!0), P(ne, null, be(t.rows, (o, a) => (x(), P("tr", {
            key: a,
            class: J({ "bg-yellow-50": o.highlight })
          }, [
            $("td", im, Q(o.prop), 1),
            $("td", lm, Q(o.type), 1),
            $("td", um, Q(o.default), 1),
            $("td", cm, Q(o.description), 1)
          ], 2))), 128))
        ])
      ])
    ]));
  }
}), Xs = /* @__PURE__ */ U({
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
    const r = F(() => t.label ? t.label : t.field ? n(t.field) : ""), o = F(() => {
      var s, i;
      return t.error ? t.error : (i = (s = t.form) == null ? void 0 : s.errors) != null && i[t.field || ""] ? t.form.errors[t.field || ""] : null;
    }), a = F(() => t.htmlFor || t.field);
    return (s, i) => (x(), P("div", {
      class: J(s.noLabel ? "mb-2" : "mb-4")
    }, [
      !s.noLabel && (r.value || s.field) ? (x(), H(b(jn), {
        key: 0,
        customClass: s.labelCustomClass,
        for: a.value,
        value: r.value,
        sublabel: s.sublabel,
        required: s.required,
        tooltip: s.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : Y("", !0),
      j(s.$slots, "default"),
      o.value ? (x(), H(b(en), {
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
const rs = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, dm = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, Zi = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, fm = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, Js = fm, pm = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, mm = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, hm = mm, os = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, ym = {
  prefix: "fas",
  iconName: "person-digging",
  icon: [576, 512, ["digging"], "f85e", "M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"]
}, gm = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, vm = gm, bm = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, wm = bm, Qs = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, Sm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, xm = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Jr = xm, Om = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Cm = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
}, Am = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Em = Am, Pm = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, km = Pm;
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function $m(e, t, n) {
  return (t = Tm(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function el(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? el(Object(n), !0).forEach(function(r) {
      $m(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : el(Object(n)).forEach(function(r) {
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
function Tm(e) {
  var t = Dm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const tl = () => {
};
let Zs = {}, Bc = {}, Lc = null, Mc = {
  mark: tl,
  measure: tl
};
try {
  typeof window < "u" && (Zs = window), typeof document < "u" && (Bc = document), typeof MutationObserver < "u" && (Lc = MutationObserver), typeof performance < "u" && (Mc = performance);
} catch {
}
const {
  userAgent: nl = ""
} = Zs.navigator || {}, Gt = Zs, ge = Bc, rl = Lc, Dr = Mc;
Gt.document;
const jt = !!ge.documentElement && !!ge.head && typeof ge.addEventListener == "function" && typeof ge.createElement == "function", Nc = ~nl.indexOf("MSIE") || ~nl.indexOf("Trident/");
var Fm = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Rm = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, jc = {
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
}, qc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Le = "classic", ho = "duotone", _m = "sharp", Bm = "sharp-duotone", zc = [Le, ho, _m, Bm], Lm = {
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
}, Mm = {
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
}, Nm = /* @__PURE__ */ new Map([["classic", {
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
}]]), jm = {
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
}, qm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ol = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, zm = ["kit"], Vm = {
  kit: {
    "fa-kit": "fak"
  }
}, Um = ["fak", "fakd"], Hm = {
  kit: {
    fak: "fa-kit"
  }
}, al = {
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
}, Wm = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Km = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Gm = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Ym = {
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
}, Xm = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, as = {
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
}, Jm = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], ss = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Wm, ...Jm], Qm = ["solid", "regular", "light", "thin", "duotone", "brands"], Vc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Zm = Vc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), eh = [...Object.keys(Xm), ...Qm, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Tr.GROUP, Tr.SWAP_OPACITY, Tr.PRIMARY, Tr.SECONDARY].concat(Vc.map((e) => "".concat(e, "x"))).concat(Zm.map((e) => "w-".concat(e))), th = {
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
const It = "___FONT_AWESOME___", is = 16, Uc = "fa", Hc = "svg-inline--fa", dn = "data-fa-i2svg", ls = "data-fa-pseudo-element", nh = "data-fa-pseudo-element-pending", ei = "data-prefix", ti = "data-icon", sl = "fontawesome-i2svg", rh = "async", oh = ["HTML", "HEAD", "STYLE", "SCRIPT"], Wc = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function hr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Le];
    }
  });
}
const Kc = K({}, jc);
Kc[Le] = K(K(K(K({}, {
  "fa-duotone": "duotone"
}), jc[Le]), ol.kit), ol["kit-duotone"]);
const ah = hr(Kc), us = K({}, jm);
us[Le] = K(K(K(K({}, {
  duotone: "fad"
}), us[Le]), al.kit), al["kit-duotone"]);
const il = hr(us), cs = K({}, as);
cs[Le] = K(K({}, cs[Le]), Hm.kit);
const ni = hr(cs), ds = K({}, Ym);
ds[Le] = K(K({}, ds[Le]), Vm.kit);
hr(ds);
const sh = Fm, Gc = "fa-layers-text", ih = Rm, lh = K({}, Lm);
hr(lh);
const uh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ko = Im, ch = [...zm, ...eh], rr = Gt.FontAwesomeConfig || {};
function dh(e) {
  var t = ge.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function fh(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ge && typeof ge.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = fh(dh(n));
  o != null && (rr[r] = o);
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
rr.familyPrefix && (rr.cssPrefix = rr.familyPrefix);
const _n = K(K({}, Yc), rr);
_n.autoReplaceSvg || (_n.observeMutations = !1);
const ee = {};
Object.keys(Yc).forEach((e) => {
  Object.defineProperty(ee, e, {
    enumerable: !0,
    set: function(t) {
      _n[e] = t, or.forEach((n) => n(ee));
    },
    get: function() {
      return _n[e];
    }
  });
});
Object.defineProperty(ee, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    _n.cssPrefix = e, or.forEach((t) => t(ee));
  },
  get: function() {
    return _n.cssPrefix;
  }
});
Gt.FontAwesomeConfig = ee;
const or = [];
function ph(e) {
  return or.push(e), () => {
    or.splice(or.indexOf(e), 1);
  };
}
const Ht = is, xt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function mh(e) {
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
const hh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function lr() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += hh[Math.random() * 62 | 0];
  return t;
}
function Nn(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ri(e) {
  return e.classList ? Nn(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Xc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function yh(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Xc(e[n]), '" '), "").trim();
}
function yo(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function oi(e) {
  return e.size !== xt.size || e.x !== xt.x || e.y !== xt.y || e.rotate !== xt.rotate || e.flipX || e.flipY;
}
function gh(e) {
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
function vh(e) {
  let {
    transform: t,
    width: n = is,
    height: r = is,
    startCentered: o = !1
  } = e, a = "";
  return o && Nc ? a += "translate(".concat(t.x / Ht - n / 2, "em, ").concat(t.y / Ht - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / Ht, "em), calc(-50% + ").concat(t.y / Ht, "em)) ") : a += "translate(".concat(t.x / Ht, "em, ").concat(t.y / Ht, "em) "), a += "scale(".concat(t.size / Ht * (t.flipX ? -1 : 1), ", ").concat(t.size / Ht * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var bh = `:root, :host {
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
  let o = bh;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(i, ".".concat(r));
  }
  return o;
}
let ll = !1;
function Go() {
  ee.autoAddCss && !ll && (mh(Jc()), ll = !0);
}
var wh = {
  mixout() {
    return {
      dom: {
        css: Jc,
        insertCss: Go
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Go();
      },
      beforeI2svg() {
        Go();
      }
    };
  }
};
const _t = Gt || {};
_t[It] || (_t[It] = {});
_t[It].styles || (_t[It].styles = {});
_t[It].hooks || (_t[It].hooks = {});
_t[It].shims || (_t[It].shims = []);
var Ot = _t[It];
const Qc = [], Zc = function() {
  ge.removeEventListener("DOMContentLoaded", Zc), Qr = 1, Qc.map((e) => e());
};
let Qr = !1;
jt && (Qr = (ge.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ge.readyState), Qr || ge.addEventListener("DOMContentLoaded", Zc));
function Sh(e) {
  jt && (Qr ? setTimeout(e, 0) : Qc.push(e));
}
function yr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Xc(e) : "<".concat(t, " ").concat(yh(n), ">").concat(r.map(yr).join(""), "</").concat(t, ">");
}
function ul(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Yo = function(t, n, r, o) {
  var a = Object.keys(t), s = a.length, i = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[a[0]]) : (c = 0, u = r); c < s; c++)
    l = a[c], u = i(u, t[l], l, t);
  return u;
};
function xh(e) {
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
function fs(e) {
  const t = xh(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Oh(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function cl(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function ps(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = cl(t);
  typeof Ot.hooks.addPack == "function" && !r ? Ot.hooks.addPack(e, cl(t)) : Ot.styles[e] = K(K({}, Ot.styles[e] || {}), o), e === "fas" && ps("fa", t);
}
const {
  styles: ur,
  shims: Ch
} = Ot, ed = Object.keys(ni), Ah = ed.reduce((e, t) => (e[t] = Object.keys(ni[t]), e), {});
let ai = null, td = {}, nd = {}, rd = {}, od = {}, ad = {};
function Eh(e) {
  return ~ch.indexOf(e);
}
function Ph(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !Eh(o) ? o : null;
}
const sd = () => {
  const e = (r) => Yo(ur, (o, a, s) => (o[s] = Yo(a, r, {}), o), {});
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
  const t = "far" in ur || ee.autoFetchSvg, n = Yo(Ch, (r, o) => {
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
  rd = n.names, od = n.unicodes, ai = go(ee.styleDefault, {
    family: ee.familyDefault
  });
};
ph((e) => {
  ai = go(e.styleDefault, {
    family: ee.familyDefault
  });
});
sd();
function si(e, t) {
  return (td[e] || {})[t];
}
function kh(e, t) {
  return (nd[e] || {})[t];
}
function on(e, t) {
  return (ad[e] || {})[t];
}
function id(e) {
  return rd[e] || {
    prefix: null,
    iconName: null
  };
}
function $h(e) {
  const t = od[e], n = si("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Yt() {
  return ai;
}
const ld = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Dh(e) {
  let t = Le;
  const n = ed.reduce((r, o) => (r[o] = "".concat(ee.cssPrefix, "-").concat(o), r), {});
  return zc.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => Ah[r].includes(o))) && (t = r);
  }), t;
}
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Le
  } = t, r = ah[n][e];
  if (n === ho && !e)
    return "fad";
  const o = il[n][e] || il[n][r], a = e in Ot.styles ? e : null;
  return o || a || null;
}
function Th(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = Ph(ee.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function dl(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function vo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = ss.concat(Km), a = dl(e.filter((d) => o.includes(d))), s = dl(e.filter((d) => !ss.includes(d))), i = a.filter((d) => (r = d, !qc.includes(d))), [c = null] = i, l = Dh(a), u = K(K({}, Th(s)), {}, {
    prefix: go(c, {
      family: l
    })
  });
  return K(K(K({}, u), _h({
    values: e,
    family: l,
    styles: ur,
    config: ee,
    canonical: u,
    givenPrefix: r
  })), Fh(n, r, u));
}
function Fh(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const a = t === "fa" ? id(o) : {}, s = on(r, o);
  return o = a.iconName || s || o, r = a.prefix || r, r === "far" && !ur.far && ur.fas && !ee.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const Rh = zc.filter((e) => e !== Le || e !== ho), Ih = Object.keys(as).filter((e) => e !== Le).map((e) => Object.keys(as[e])).flat();
function _h(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: a = {},
    config: s = {}
  } = e, i = n === ho, c = t.includes("fa-duotone") || t.includes("fad"), l = s.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!i && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Rh.includes(n) && (Object.keys(a).find((y) => Ih.includes(y)) || s.autoFetchSvg)) {
    const y = Nm.get(n).defaultShortPrefixId;
    r.prefix = y, r.iconName = on(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Yt() || "fas"), r;
}
class Bh {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((a) => {
      this.definitions[a] = K(K({}, this.definitions[a] || {}), o[a]), ps(a, o[a]);
      const s = ni[Le][a];
      s && ps(s, o[a]), sd();
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
let fl = [], Dn = {};
const Fn = {}, Lh = Object.keys(Fn);
function Mh(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return fl = e, Dn = {}, Object.keys(Fn).forEach((r) => {
    Lh.indexOf(r) === -1 && delete Fn[r];
  }), fl.forEach((r) => {
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
    r.provides && r.provides(Fn);
  }), n;
}
function ms(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (Dn[e] || []).forEach((s) => {
    t = s.apply(null, [t, ...r]);
  }), t;
}
function fn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Dn[e] || []).forEach((a) => {
    a.apply(null, n);
  });
}
function Xt() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Fn[e] ? Fn[e].apply(null, t) : void 0;
}
function hs(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Yt();
  if (t)
    return t = on(n, t) || t, ul(ud.definitions, n, t) || ul(Ot.styles, n, t);
}
const ud = new Bh(), Nh = () => {
  ee.autoReplaceSvg = !1, ee.observeMutations = !1, fn("noAuto");
}, jh = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return jt ? (fn("beforeI2svg", e), Xt("pseudoElements2svg", e), Xt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, Sh(() => {
      zh({
        autoReplaceSvgRoot: t
      }), fn("watch", e);
    });
  }
}, qh = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: on(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = go(e[0]);
      return {
        prefix: n,
        iconName: on(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match(sh))) {
      const t = vo(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Yt(),
        iconName: on(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Yt();
      return {
        prefix: t,
        iconName: on(t, e) || e
      };
    }
  }
}, nt = {
  noAuto: Nh,
  config: ee,
  dom: jh,
  parse: qh,
  library: ud,
  findIconDefinition: hs,
  toHtml: yr
}, zh = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ge
  } = e;
  (Object.keys(Ot.styles).length > 0 || ee.autoFetchSvg) && jt && ee.autoReplaceSvg && nt.dom.i2svg({
    node: t
  });
};
function bo(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => yr(n));
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
  if (oi(s) && n.found && !r.found) {
    const {
      width: i,
      height: c
    } = n, l = {
      x: i / c / 2,
      y: 0.5
    };
    o.style = yo(K(K({}, a), {}, {
      "transform-origin": "".concat(l.x + s.x / 16, "em ").concat(l.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function Uh(e) {
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
      attributes: K(K({}, o), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function ii(e) {
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
    height: h
  } = n.found ? n : t, m = Um.includes(r), p = [ee.replacementClass, o ? "".concat(ee.cssPrefix, "-").concat(o) : ""].filter((D) => u.classes.indexOf(D) === -1).filter((D) => D !== "" || !!D).concat(u.classes).join(" ");
  let f = {
    children: [],
    attributes: K(K({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: p,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(y, " ").concat(h)
    })
  };
  const g = m && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(y / h * 16 * 0.0625, "em")
  } : {};
  d && (f.attributes[dn] = ""), i && (f.children.push({
    tag: "title",
    attributes: {
      id: f.attributes["aria-labelledby"] || "title-".concat(l || lr())
    },
    children: [i]
  }), delete f.attributes.title);
  const w = K(K({}, f), {}, {
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: c,
    transform: a,
    symbol: s,
    styles: K(K({}, g), u.styles)
  }), {
    children: O,
    attributes: E
  } = n.found && t.found ? Xt("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Xt("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = O, w.attributes = E, s ? Uh(w) : Vh(w);
}
function pl(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: a,
    extra: s,
    watchable: i = !1
  } = e, c = K(K(K({}, s.attributes), a ? {
    title: a
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  i && (c[dn] = "");
  const l = K({}, s.styles);
  oi(o) && (l.transform = vh({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = yo(l);
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
function Hh(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = K(K(K({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = yo(r.styles);
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
  styles: Xo
} = Ot;
function ys(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(ee.cssPrefix, "-").concat(Ko.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Ko.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Ko.PRIMARY),
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
const Wh = {
  found: !1,
  width: 512,
  height: 512
};
function Kh(e, t) {
  !Wc && !ee.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function gs(e, t) {
  let n = t;
  return t === "fa" && ee.styleDefault !== null && (t = Yt()), new Promise((r, o) => {
    if (n === "fa") {
      const a = id(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Xo[t] && Xo[t][e]) {
      const a = Xo[t][e];
      return r(ys(a));
    }
    Kh(e, t), r(K(K({}, Wh), {}, {
      icon: ee.showMissingIcons && e ? Xt("missingIconAbstract") || {} : {}
    }));
  });
}
const ml = () => {
}, vs = ee.measurePerformance && Dr && Dr.mark && Dr.measure ? Dr : {
  mark: ml,
  measure: ml
}, Zn = 'FA "6.7.2"', Gh = (e) => (vs.mark("".concat(Zn, " ").concat(e, " begins")), () => cd(e)), cd = (e) => {
  vs.mark("".concat(Zn, " ").concat(e, " ends")), vs.measure("".concat(Zn, " ").concat(e), "".concat(Zn, " ").concat(e, " begins"), "".concat(Zn, " ").concat(e, " ends"));
};
var li = {
  begin: Gh,
  end: cd
};
const qr = () => {
};
function hl(e) {
  return typeof (e.getAttribute ? e.getAttribute(dn) : null) == "string";
}
function Yh(e) {
  const t = e.getAttribute ? e.getAttribute(ei) : null, n = e.getAttribute ? e.getAttribute(ti) : null;
  return t && n;
}
function Xh(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ee.replacementClass);
}
function Jh() {
  return ee.autoReplaceSvg === !0 ? zr.replace : zr[ee.autoReplaceSvg] || zr.replace;
}
function Qh(e) {
  return ge.createElementNS("http://www.w3.org/2000/svg", e);
}
function Zh(e) {
  return ge.createElement(e);
}
function dd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Qh : Zh
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
function ey(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const zr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(dd(n), t);
      }), t.getAttribute(dn) === null && ee.keepOriginalSource) {
        let n = ge.createComment(ey(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ri(t).indexOf(ee.replacementClass))
      return zr.replace(e);
    const r = new RegExp("".concat(ee.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const a = n[0].attributes.class.split(" ").reduce((s, i) => (i === ee.replacementClass || i.match(r) ? s.toSvg.push(i) : s.toNode.push(i), s), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", a.toNode.join(" "));
    }
    const o = n.map((a) => yr(a)).join(`
`);
    t.setAttribute(dn, ""), t.innerHTML = o;
  }
};
function yl(e) {
  e();
}
function fd(e, t) {
  const n = typeof t == "function" ? t : qr;
  if (e.length === 0)
    n();
  else {
    let r = yl;
    ee.mutateApproach === rh && (r = Gt.requestAnimationFrame || yl), r(() => {
      const o = Jh(), a = li.begin("mutate");
      e.map(o), a(), n();
    });
  }
}
let ui = !1;
function pd() {
  ui = !0;
}
function bs() {
  ui = !1;
}
let Zr = null;
function gl(e) {
  if (!rl || !ee.observeMutations)
    return;
  const {
    treeCallback: t = qr,
    nodeCallback: n = qr,
    pseudoElementsCallback: r = qr,
    observeMutationsRoot: o = ge
  } = e;
  Zr = new rl((a) => {
    if (ui) return;
    const s = Yt();
    Nn(a).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !hl(i.addedNodes[0]) && (ee.searchPseudoElements && r(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && ee.searchPseudoElements && r(i.target.parentNode), i.type === "attributes" && hl(i.target) && ~uh.indexOf(i.attributeName))
        if (i.attributeName === "class" && Yh(i.target)) {
          const {
            prefix: c,
            iconName: l
          } = vo(ri(i.target));
          i.target.setAttribute(ei, c || s), l && i.target.setAttribute(ti, l);
        } else Xh(i.target) && n(i.target);
    });
  }), jt && Zr.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ty() {
  Zr && Zr.disconnect();
}
function ny(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const a = o.split(":"), s = a[0], i = a.slice(1);
    return s && i.length > 0 && (r[s] = i.join(":").trim()), r;
  }, {})), n;
}
function ry(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = vo(ri(e));
  return o.prefix || (o.prefix = Yt()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = kh(o.prefix, e.innerText) || si(o.prefix, fs(e.innerText))), !o.iconName && ee.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function oy(e) {
  const t = Nn(e.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return ee.autoA11y && (n ? t["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(r || lr()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ay() {
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
function vl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = ry(e), a = oy(e), s = ms("parseNodeAttributes", {}, e);
  let i = t.styleParser ? ny(e) : [];
  return K({
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
  styles: sy
} = Ot;
function md(e) {
  const t = ee.autoReplaceSvg === "nest" ? vl(e, {
    styleParser: !1
  }) : vl(e);
  return ~t.extra.classes.indexOf(Gc) ? Xt("generateLayersText", e, t) : Xt("generateSvgReplacementMutation", e, t);
}
function iy() {
  return [...qm, ...ss];
}
function bl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jt) return Promise.resolve();
  const n = ge.documentElement.classList, r = (u) => n.add("".concat(sl, "-").concat(u)), o = (u) => n.remove("".concat(sl, "-").concat(u)), a = ee.autoFetchSvg ? iy() : qc.concat(Object.keys(sy));
  a.includes("fa") || a.push("fa");
  const s = [".".concat(Gc, ":not([").concat(dn, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(dn, "])"))).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  let i = [];
  try {
    i = Nn(e.querySelectorAll(s));
  } catch {
  }
  if (i.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const c = li.begin("onTree"), l = i.reduce((u, d) => {
    try {
      const y = md(d);
      y && u.push(y);
    } catch (y) {
      Wc || y.name === "MissingIcon" && console.error(y);
    }
    return u;
  }, []);
  return new Promise((u, d) => {
    Promise.all(l).then((y) => {
      fd(y, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((y) => {
      c(), d(y);
    });
  });
}
function ly(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  md(e).then((n) => {
    n && fd([n], t);
  });
}
function uy(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : hs(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : hs(o || {})), e(r, K(K({}, n), {}, {
      mask: o
    }));
  };
}
const cy = function(e) {
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
    icon: h
  } = e;
  return bo(K({
    type: "icon"
  }, e), () => (fn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ee.autoA11y && (s ? l["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(i || lr()) : (l["aria-hidden"] = "true", l.focusable = "false")), ii({
    icons: {
      main: ys(h),
      mask: o ? ys(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: y,
    transform: K(K({}, xt), n),
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
var dy = {
  mixout() {
    return {
      icon: uy(cy)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = bl, e.nodeCallback = ly, e;
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
      return bl(n, r);
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
      return new Promise((y, h) => {
        Promise.all([gs(r, s), l.iconName ? gs(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [p, f] = m;
          y([t, ii({
            icons: {
              main: p,
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
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: o,
        transform: a,
        styles: s
      } = t;
      const i = yo(s);
      i.length > 0 && (r.style = i);
      let c;
      return oi(a) && (c = Xt("generateAbstractTransformGrouping", {
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
}, fy = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return bo({
          type: "layer"
        }, () => {
          fn("beforeDOMElementCreation", {
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
}, py = {
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
        return bo({
          type: "counter",
          content: e
        }, () => (fn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Hh({
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
}, my = {
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
        return bo({
          type: "text",
          content: e
        }, () => (fn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), pl({
          content: e,
          transform: K(K({}, xt), n),
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
      return ee.autoA11y && !r && (a.attributes["aria-hidden"] = "true"), Promise.resolve([t, pl({
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
const hy = new RegExp('"', "ug"), wl = [1105920, 1112319], Sl = K(K(K(K({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Mm), th), Gm), ws = Object.keys(Sl).reduce((e, t) => (e[t.toLowerCase()] = Sl[t], e), {}), yy = Object.keys(ws).reduce((e, t) => {
  const n = ws[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function gy(e) {
  const t = e.replace(hy, ""), n = Oh(t, 0), r = n >= wl[0] && n <= wl[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: fs(o ? t[0] : t),
    isSecondary: r || o
  };
}
function vy(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (ws[n] || {})[o] || yy[n];
}
function xl(e, t) {
  const n = "".concat(nh).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Nn(e.children).filter((y) => y.getAttribute(ls) === t)[0], i = Gt.getComputedStyle(e, t), c = i.getPropertyValue("font-family"), l = c.match(ih), u = i.getPropertyValue("font-weight"), d = i.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && d !== "none" && d !== "") {
      const y = i.getPropertyValue("content");
      let h = vy(c, u);
      const {
        value: m,
        isSecondary: p
      } = gy(y), f = l[0].startsWith("FontAwesome");
      let g = si(h, m), w = g;
      if (f) {
        const O = $h(m);
        O.iconName && O.prefix && (g = O.iconName, h = O.prefix);
      }
      if (g && !p && (!s || s.getAttribute(ei) !== h || s.getAttribute(ti) !== w)) {
        e.setAttribute(n, w), s && e.removeChild(s);
        const O = ay(), {
          extra: E
        } = O;
        E.attributes[ls] = t, gs(g, h).then((D) => {
          const V = ii(K(K({}, O), {}, {
            icons: {
              main: D,
              mask: ld()
            },
            prefix: h,
            iconName: w,
            extra: E,
            watchable: !0
          })), z = ge.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(z, e.firstChild) : e.appendChild(z), z.outerHTML = V.map((G) => yr(G)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function by(e) {
  return Promise.all([xl(e, "::before"), xl(e, "::after")]);
}
function wy(e) {
  return e.parentNode !== document.head && !~oh.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ls) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ol(e) {
  if (jt)
    return new Promise((t, n) => {
      const r = Nn(e.querySelectorAll("*")).filter(wy).map(by), o = li.begin("searchPseudoElements");
      pd(), Promise.all(r).then(() => {
        o(), bs(), t();
      }).catch(() => {
        o(), bs(), n();
      });
    });
}
var Sy = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Ol, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ge
      } = t;
      ee.searchPseudoElements && Ol(n);
    };
  }
};
let Cl = !1;
var xy = {
  mixout() {
    return {
      dom: {
        unwatch() {
          pd(), Cl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        gl(ms("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ty();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Cl ? bs() : gl(ms("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Al = (e) => {
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
        transform: (e) => Al(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Al(n)), e;
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
        attributes: K({}, y.outer),
        children: [{
          tag: "g",
          attributes: K({}, y.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: K(K({}, n.icon.attributes), y.path)
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
function El(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Cy(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ay = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? vo(n.split(" ").map((o) => o.trim())) : ld();
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
        maskId: s,
        transform: i
      } = t;
      const {
        width: c,
        icon: l
      } = o, {
        width: u,
        icon: d
      } = a, y = gh({
        transform: i,
        containerWidth: u,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: K(K({}, Jo), {}, {
          fill: "white"
        })
      }, m = l.children ? {
        children: l.children.map(El)
      } : {}, p = {
        tag: "g",
        attributes: K({}, y.inner),
        children: [El(K({
          tag: l.tag,
          attributes: K(K({}, l.attributes), y.path)
        }, m))]
      }, f = {
        tag: "g",
        attributes: K({}, y.outer),
        children: [p]
      }, g = "mask-".concat(s || lr()), w = "clip-".concat(s || lr()), O = {
        tag: "mask",
        attributes: K(K({}, Jo), {}, {
          id: g,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [h, f]
      }, E = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: Cy(d)
        }, O]
      };
      return n.push(E, {
        tag: "rect",
        attributes: K({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(g, ")")
        }, Jo)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Ey = {
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
        attributes: K(K({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      const a = K(K({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: K(K({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || s.children.push({
        tag: "animate",
        attributes: K(K({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: K(K({}, a), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), n.push(s), n.push({
        tag: "path",
        attributes: K(K({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: K(K({}, a), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || n.push({
        tag: "path",
        attributes: K(K({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: K(K({}, a), {}, {
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
}, Py = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, ky = [wh, dy, fy, py, my, Sy, xy, Oy, Ay, Ey, Py];
Mh(ky, {
  mixoutsTo: nt
});
nt.noAuto;
const hd = nt.config, gr = nt.library;
nt.dom;
const eo = nt.parse;
nt.findIconDefinition;
nt.toHtml;
const $y = nt.icon;
nt.layer;
const Dy = nt.text;
nt.counter;
function Pl(e, t) {
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
    t % 2 ? Pl(Object(n), !0).forEach(function(r) {
      Ve(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pl(Object(n)).forEach(function(r) {
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
function Fy(e) {
  var t = Ty(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
}
function Ve(e, t, n) {
  return t = Fy(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ry(e, t) {
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
  var n = Ry(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ss(e) {
  return _y(e) || By(e) || Ly(e) || My();
}
function _y(e) {
  if (Array.isArray(e)) return xs(e);
}
function By(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ly(e, t) {
  if (e) {
    if (typeof e == "string") return xs(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return xs(e, t);
  }
}
function xs(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function My() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ny = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yd = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(g, w, O) {
      if (!l(w) || d(w) || y(w) || h(w) || c(w))
        return w;
      var E, D = 0, V = 0;
      if (u(w))
        for (E = [], V = w.length; D < V; D++)
          E.push(n(g, w[D], O));
      else {
        E = {};
        for (var z in w)
          Object.prototype.hasOwnProperty.call(w, z) && (E[g(z, O)] = n(g, w[z], O));
      }
      return E;
    }, r = function(g, w) {
      w = w || {};
      var O = w.separator || "_", E = w.split || /(?=[A-Z])/;
      return g.split(E).join(O);
    }, o = function(g) {
      return m(g) ? g : (g = g.replace(/[\-_\s]+(.)?/g, function(w, O) {
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
    }, y = function(g) {
      return i.call(g) == "[object RegExp]";
    }, h = function(g) {
      return i.call(g) == "[object Boolean]";
    }, m = function(g) {
      return g = g - 0, g === g;
    }, p = function(g, w) {
      var O = w && "process" in w ? w.process : w;
      return typeof O != "function" ? g : function(E, D) {
        return O(E, g, D);
      };
    }, f = {
      camelize: o,
      decamelize: s,
      pascalize: a,
      depascalize: s,
      camelizeKeys: function(g, w) {
        return n(p(o, w), g);
      },
      decamelizeKeys: function(g, w) {
        return n(p(s, w), g, w);
      },
      pascalizeKeys: function(g, w) {
        return n(p(a, w), g);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = f : t.humps = f;
  })(Ny);
})(yd);
var jy = yd.exports, qy = ["class", "style"];
function zy(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = jy.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[o] = a, t;
  }, {});
}
function Vy(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function ci(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(c) {
    return ci(c);
  }), o = Object.keys(e.attributes || {}).reduce(function(c, l) {
    var u = e.attributes[l];
    switch (l) {
      case "class":
        c.class = Vy(u);
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
  var a = n.style, s = a === void 0 ? {} : a, i = Iy(n, qy);
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
function Uy() {
  if (!gd && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function ar(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ve({}, e, t) : {};
}
function Hy(e) {
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
  }, Ve(Ve(Ve(Ve(Ve(Ve(Ve(Ve(Ve(Ve(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), "fa-flash", e.flash), Ve(Ve(t, "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse));
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function kl(e) {
  if (e && to(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (eo.icon)
    return eo.icon(e);
  if (e === null)
    return null;
  if (to(e) === "object" && e.prefix && e.iconName)
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
var xe = U({
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
    var r = n.attrs, o = F(function() {
      return kl(t.icon);
    }), a = F(function() {
      return ar("classes", Hy(t));
    }), s = F(function() {
      return ar("transform", typeof t.transform == "string" ? eo.transform(t.transform) : t.transform);
    }), i = F(function() {
      return ar("mask", kl(t.mask));
    }), c = F(function() {
      return $y(o.value, dt(dt(dt(dt({}, a.value), s.value), i.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    re(c, function(u) {
      if (!u)
        return Uy("Could not find one or more icon(s)", o.value, i.value);
    }, {
      immediate: !0
    });
    var l = F(function() {
      return c.value ? ci(c.value.abstract[0], {}, r) : null;
    });
    return function() {
      return l.value;
    };
  }
});
U({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, o = hd.familyPrefix, a = F(function() {
      return ["".concat(o, "-layers")].concat(Ss(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return qe("div", {
        class: a.value
      }, r.default ? r.default() : []);
    };
  }
});
U({
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
    var r = n.attrs, o = hd.familyPrefix, a = F(function() {
      return ar("classes", [].concat(Ss(t.counter ? ["".concat(o, "-layers-counter")] : []), Ss(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), s = F(function() {
      return ar("transform", typeof t.transform == "string" ? eo.transform(t.transform) : t.transform);
    }), i = F(function() {
      var l = Dy(t.value.toString(), dt(dt({}, s.value), a.value)), u = l.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), c = F(function() {
      return ci(i.value, {}, r);
    });
    return function() {
      return c.value;
    };
  }
});
const Wy = { class: "py-ui px-ui gap-ui-half flex flex-col rounded bg-white text-center" }, Ky = { class: "whitespace-pre-line text-gray-600" }, Gy = /* @__PURE__ */ U({
  __name: "UnderConstruction",
  props: {
    full: { type: Boolean, default: !1 },
    info: { default: `Section under construction.
Please come back later.` }
  },
  setup(e) {
    return (t, n) => (x(), P("div", {
      class: J(["bg-stripes p-ui flex w-full items-center justify-center", { grow: t.full }])
    }, [
      $("div", Wy, [
        Z(b(xe), {
          icon: b(ym),
          class: "text-primary text-4xl"
        }, null, 8, ["icon"]),
        n[0] || (n[0] = $("h1", { class: "text-2xl font-bold" }, "Under Construction", -1)),
        $("p", Ky, Q(t.info), 1)
      ])
    ], 2));
  }
}), di = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, $O = /* @__PURE__ */ di(Gy, [["__scopeId", "data-v-360f3e83"]]), Yy = { class: "flex items-center" }, Xy = {
  key: 1,
  class: "mr-1"
}, Jy = ["id", "value", "disabled", "required", "name"], Qy = {
  key: 3,
  class: "ml-1"
}, Zy = /* @__PURE__ */ U({
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
    const s = Mn(e, "modelValue"), i = M(!1), c = M(), l = M(), u = M(!1);
    pe(() => {
      var f;
      i.value = !o.form, c.value = i.value ? s.value : ((f = o.form) == null ? void 0 : f[o.field]) ?? o.checked;
    }), re(
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
    ), re(
      () => o.field && o.form ? o.form[o.field] : null,
      (f) => {
        c.value = i.value ? s.value : f;
      },
      { deep: !0 }
    ), re(
      () => s.value,
      (f) => {
        c.value = f;
      }
    ), re(
      () => o.checked,
      (f) => {
        !o.form && !s.value && (c.value = f);
      }
    );
    const d = F(() => o.label || (o.field ? a(o.field) : "")), y = F(() => {
      var f, g;
      return o.error || ((g = (f = o.form) == null ? void 0 : f.errors) == null ? void 0 : g[o.field]);
    }), h = F(() => o.id || o.field || `checkbox-${Math.random().toString(36).substr(2, 9)}`);
    return t({
      setValueSilently: (f) => {
        c.value = f, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, g) => {
      var w, O;
      return x(), P("div", {
        class: J(f.noLabel ? "mb-2" : "mb-4")
      }, [
        !f.noLabel && f.label ? (x(), H(b(jn), {
          key: 0,
          customClass: f.labelCustomClass,
          for: h.value,
          value: d.value,
          sublabel: f.sublabel,
          required: f.required,
          tooltip: f.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : Y("", !0),
        $("label", Yy, [
          (w = f.$slots) != null && w.leftDescription ? j(f.$slots, "leftDescription", { key: 0 }) : f.leftDescription ? (x(), P("span", Xy, Q(f.leftDescription === !0 ? "Disable" : f.leftDescription), 1)) : Y("", !0),
          He($("input", {
            type: "checkbox",
            id: h.value,
            value: c.value,
            "onUpdate:modelValue": g[0] || (g[0] = (E) => c.value = E),
            disabled: f.disabled,
            required: f.required,
            name: f.name || f.field,
            class: J(["text-accent-600 focus:ring-accent-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none", { [f.customClass]: f.customClass }])
          }, null, 10, Jy), [
            [Oc, c.value]
          ]),
          (O = f.$slots) != null && O.rightDescription ? j(f.$slots, "rightDescription", { key: 2 }) : f.rightDescription ? (x(), P("span", Qy, Q(f.rightDescription === !0 ? "Enable" : f.rightDescription), 1)) : Y("", !0)
        ]),
        y.value ? (x(), H(b(en), {
          key: 1,
          message: y.value,
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const $l = {
  prefix: "far",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"]
}, eg = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
}, Dl = {
  prefix: "far",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const fi = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, tg = { class: "relative flex w-full max-w-full items-stretch" }, ng = ["id", "required", "disabled", "name"], rg = { class: "relative flex w-full" }, og = ["href"], ag = {
  __name: "Input",
  props: /* @__PURE__ */ pt({
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
  emits: /* @__PURE__ */ pt(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    gr.add(fi, pm, eg, Dl, $l, os);
    const r = e;
    function o(p) {
      let f = [];
      return p.split("_").join(" ").split(" ").map(function(g) {
        f.push(g[0].toUpperCase() + g.slice(1));
      }), f.join(" ");
    }
    const a = n, s = M(!1), i = Mn(e, "modelValue"), c = M(), l = M(), u = M(r.type);
    pe(() => {
      s.value = !r.form, c.value = s.value ? i.value : r.form ? r.form[r.field] : null;
    }), re(
      () => c.value,
      (p, f) => {
        if (p !== f) {
          if (s.value ? i.value = p : r.form && (r.form[r.field] = p), l.value = f, a("update:modelValue", p), d.value) {
            d.value = !1;
            return;
          }
          a("changed", { value: p, old_value: f });
        }
      }
    );
    const d = M(!1), y = (p) => {
      c.value = p, d.value = !0;
    }, h = () => l.value;
    re(
      () => r.field && r.form ? r.form[r.field] : null,
      (p) => {
        c.value = s.value ? i.value : p;
      },
      {
        deep: !0
      }
    ), re(
      () => i.value,
      (p) => {
        c.value = p;
      }
    );
    const m = () => {
      u.value = u.value === "password" ? "text" : "password";
    };
    return t({
      togglePassword: m,
      setValueSilently: y,
      getPreviousValue: h
    }), (p, f) => {
      var g, w, O, E, D, V, z, G, I, k, q;
      return e.type === "textarea" ? (x(), H(b(yg), {
        key: 0,
        form: e.form,
        field: e.field,
        label: e.label,
        required: e.required,
        disabled: e.disabled,
        addon: e.addon,
        placeholder: e.placeholder,
        "no-label": e.noLabel,
        autofocus: e.autofocus,
        rows: e.rows,
        name: e.name,
        sublabel: e.sublabel,
        "submit-btn": e.submitBtn,
        "whats-app": e.whatsApp,
        autocomplete: e.autocomplete,
        tooltip: e.tooltip,
        "custom-class": e.inputCustomClass,
        "label-custom-class": e.labelCustomClass,
        "button-custom-class": e.buttonCustomClass,
        error: e.error,
        modelValue: c.value,
        "onUpdate:modelValue": f[0] || (f[0] = (v) => c.value = v),
        onChanged: f[1] || (f[1] = (v) => a("changed", v))
      }, Wo({ _: 2 }, [
        (g = p.$slots) != null && g.submit ? {
          name: "submit",
          fn: B(() => [
            j(p.$slots, "submit")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "addon", "placeholder", "no-label", "autofocus", "rows", "name", "sublabel", "submit-btn", "whats-app", "autocomplete", "tooltip", "custom-class", "label-custom-class", "button-custom-class", "error", "modelValue"])) : e.type === "switch" ? (x(), H(b(xg), {
        key: 1,
        form: e.form,
        field: e.field,
        label: e.label,
        required: e.required,
        disabled: e.disabled,
        "no-label": e.noLabel,
        name: e.name,
        sublabel: e.sublabel,
        tooltip: e.tooltip,
        "left-description": e.leftDescription,
        "right-description": e.rightDescription,
        "custom-class": e.inputCustomClass,
        "label-custom-class": e.labelCustomClass,
        error: e.error,
        modelValue: c.value,
        "onUpdate:modelValue": f[2] || (f[2] = (v) => c.value = v),
        onChanged: f[3] || (f[3] = (v) => a("changed", v))
      }, Wo({ _: 2 }, [
        (w = p.$slots) != null && w.leftDescription ? {
          name: "leftDescription",
          fn: B(() => [
            j(p.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (O = p.$slots) != null && O.rightDescription ? {
          name: "rightDescription",
          fn: B(() => [
            j(p.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : e.type === "checkbox" ? (x(), H(b(Zy), {
        key: 2,
        form: e.form,
        field: e.field,
        label: e.label,
        required: e.required,
        disabled: e.disabled,
        "no-label": e.noLabel,
        name: e.name,
        sublabel: e.sublabel,
        tooltip: e.tooltip,
        "left-description": e.leftDescription,
        "right-description": e.rightDescription,
        "custom-class": e.inputCustomClass,
        "label-custom-class": e.labelCustomClass,
        error: e.error,
        modelValue: c.value,
        "onUpdate:modelValue": f[4] || (f[4] = (v) => c.value = v),
        onChanged: f[5] || (f[5] = (v) => a("changed", v))
      }, Wo({ _: 2 }, [
        (E = p.$slots) != null && E.leftDescription ? {
          name: "leftDescription",
          fn: B(() => [
            j(p.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (D = p.$slots) != null && D.rightDescription ? {
          name: "rightDescription",
          fn: B(() => [
            j(p.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : (x(), P("div", {
        key: 3,
        class: J(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? Y("", !0) : (x(), H(b(jn), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? o(e.field) : "",
          sublabel: e.sublabel,
          required: e.required,
          tooltip: e.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        $("div", tg, [
          e.type === "select" ? He((x(), P("select", {
            key: 0,
            "onUpdate:modelValue": f[6] || (f[6] = (v) => c.value = v),
            id: e.field,
            required: r.required,
            disabled: r.disabled,
            name: e.name ?? e.field,
            class: J(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [e.inputCustomClass]: !!e.inputCustomClass }])
          }, [
            j(p.$slots, "default")
          ], 10, ng)), [
            [Cc, c.value]
          ]) : (x(), P(ne, { key: 1 }, [
            e.addon ? (x(), P("span", {
              key: 0,
              class: J(["flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !r.disabled }])
            }, Q(e.addon), 3)) : Y("", !0),
            $("div", rg, [
              Z(b(fg), {
                id: e.field,
                type: u.value,
                class: J({
                  "rounded-l-none! shadow-none!": e.addon,
                  "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((V = p.$slots) == null ? void 0 : V.submit),
                  [e.inputCustomClass]: !!e.inputCustomClass
                }),
                modelValue: c.value,
                "onUpdate:modelValue": f[7] || (f[7] = (v) => c.value = v),
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
              e.type == "password" && !e.hidePasswordToggler ? (x(), P("div", {
                key: 0,
                onClick: m,
                class: J(["absolute top-1/2 -translate-y-1/2 right-1 z-2 flex size-8 rounded-lg hover:bg-primary-100 cursor-pointer items-center justify-center transition-all text-sm leading-normal text-gray-600", { "bg-primary-50": u.value !== "password" }])
              }, [
                u.value === "password" ? (x(), H(b(xe), {
                  key: 0,
                  icon: b(Dl)
                }, null, 8, ["icon"])) : (x(), H(b(xe), {
                  key: 1,
                  icon: b($l)
                }, null, 8, ["icon"]))
              ], 2)) : Y("", !0)
            ]),
            e.form ? (x(), P(ne, { key: 1 }, [
              e.submitBtn ? (x(), H(b(lo), {
                key: 0,
                form: e.form,
                class: J(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: B(() => [
                  ce(Q(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (z = p.$slots) != null && z.submit ? (x(), H(b(lo), {
                key: 1,
                form: e.form,
                class: J(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: B(() => [
                  j(p.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            e.whatsApp ? (x(), P("a", {
              key: 2,
              class: J(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              Z(b(xe), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, og)) : Y("", !0)
          ], 64))
        ]),
        e.error || (I = (G = e.form) == null ? void 0 : G.errors) != null && I[e.field] ? (x(), H(b(en), {
          key: 1,
          message: e.error ? e.error : (q = (k = e.form) == null ? void 0 : k.errors) == null ? void 0 : q[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2));
    };
  }
}, sg = { class: "text-sm text-red-600" }, en = /* @__PURE__ */ U({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(e) {
    return (t, n) => He((x(), P("div", null, [
      $("p", sg, Q(t.message), 1)
    ], 512)), [
      [ln, t.message]
    ]);
  }
}), ig = { key: 0 }, lg = { key: 1 }, ug = {
  key: 3,
  class: "ml-2 text-xs text-gray-500"
}, cg = {
  key: 4,
  class: "ml-1 text-red-500"
}, jn = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass", "tooltip"],
  setup(e) {
    return gr.add(os), (t, n) => (x(), P("label", {
      class: J(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (x(), P("span", ig, Q(e.value), 1)) : (x(), P("span", lg, [
        j(t.$slots, "default")
      ])),
      e.tooltip ? (x(), H(b(K4), {
        key: 2,
        content: e.tooltip,
        class: "ml-1 inline-block"
      }, {
        default: B(() => [
          Z(b(xe), {
            icon: b(os),
            class: "mx-1 cursor-help"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["content"])) : Y("", !0),
      e.sublabel ? (x(), P("span", ug, Q(e.sublabel), 1)) : Y("", !0),
      e.required ? (x(), P("span", cg, "*")) : Y("", !0)
    ], 2));
  }
}, dg = ["value"], fg = /* @__PURE__ */ U({
  __name: "TextInput",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = M(null), a = (s) => {
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
    }), (s, i) => (x(), P("input", {
      class: "focusable focus:border-primary-500 focus:ring-primary-500 relative m-0 block w-full flex-auto rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none",
      value: s.modelValue,
      onInput: a,
      ref_key: "input",
      ref: o
    }, null, 40, dg));
  }
}), pg = { class: "relative flex w-full max-w-full items-stretch" }, mg = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], hg = ["href"], yg = /* @__PURE__ */ U({
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
    function a(p) {
      return p.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = M(!1), i = Mn(e, "modelValue"), c = M(), l = M(), u = M(!1);
    pe(() => {
      var p;
      s.value = !r.form, c.value = s.value ? i.value : (p = r.form) == null ? void 0 : p[r.field];
    }), re(
      () => c.value,
      (p, f) => {
        if (p !== f) {
          if (s.value ? i.value = p : r.form && r.field && (r.form[r.field] = p), l.value = f, o("update:modelValue", p), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: p, old_value: f });
        }
      }
    ), re(
      () => r.field && r.form ? r.form[r.field] : null,
      (p) => {
        c.value = s.value ? i.value : p;
      },
      { deep: !0 }
    ), re(
      () => i.value,
      (p) => {
        c.value = p;
      }
    );
    const d = F(() => r.label || (r.field ? a(r.field) : "")), y = F(() => {
      var p, f;
      return r.error || ((f = (p = r.form) == null ? void 0 : p.errors) == null ? void 0 : f[r.field]);
    });
    return t({
      setValueSilently: (p) => {
        c.value = p, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (p, f) => (x(), H(b(Xs), {
      field: p.field,
      label: d.value,
      sublabel: p.sublabel,
      tooltip: p.tooltip,
      required: p.required,
      noLabel: p.noLabel,
      labelCustomClass: p.labelCustomClass,
      form: p.form,
      error: y.value,
      htmlFor: p.field
    }, {
      default: B(() => {
        var g, w;
        return [
          $("div", pg, [
            p.addon ? (x(), P("span", {
              key: 0,
              class: J(["border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !p.disabled }])
            }, Q(p.addon), 3)) : Y("", !0),
            He($("textarea", {
              id: p.field,
              class: J(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "rounded-l-none shadow-none": p.addon,
                "rounded-r-none": !!p.submitBtn || p.whatsApp || ((g = p.$slots) == null ? void 0 : g.submit),
                [p.customClass]: !!p.customClass
              }]),
              rows: p.rows,
              "onUpdate:modelValue": f[0] || (f[0] = (O) => c.value = O),
              required: p.required,
              disabled: p.disabled,
              autocomplete: p.autocomplete || p.field,
              placeholder: p.placeholder,
              autofocus: p.autofocus,
              name: p.name || p.field
            }, null, 10, mg), [
              [Ac, c.value]
            ]),
            p.form ? (x(), P(ne, { key: 1 }, [
              p.submitBtn ? (x(), H(b(lo), {
                key: 0,
                form: p.form,
                class: J(["z-2 inline-block rounded-l-none", p.buttonCustomClass]),
                id: `submit-button-${p.field}`
              }, {
                default: B(() => [
                  ce(Q(p.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (w = p.$slots) != null && w.submit ? (x(), H(b(lo), {
                key: 1,
                form: p.form,
                class: J(["z-2 inline-block rounded-l-none", p.buttonCustomClass]),
                id: "button-textarea"
              }, {
                default: B(() => [
                  j(p.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            p.whatsApp ? (x(), P("a", {
              key: 2,
              class: J(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", p.buttonCustomClass]),
              href: p.whatsApp,
              target: "_blank"
            }, [
              Z(b(xe), {
                icon: b(fi),
                size: "2xl"
              }, null, 8, ["icon"])
            ], 10, hg)) : Y("", !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), gg = { class: "flex items-center" }, vg = {
  key: 1,
  class: "mr-1"
}, bg = ["id", "disabled", "required", "name"], wg = {
  key: 3,
  class: "ml-1"
}, Sg = /* @__PURE__ */ U({
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
    function a(p) {
      return p.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = M(!1), i = Mn(e, "modelValue"), c = M(), l = M(), u = M(!1);
    pe(() => {
      var p;
      s.value = !r.form, c.value = s.value ? i.value : (p = r.form) == null ? void 0 : p[r.field];
    }), re(
      () => c.value,
      (p, f) => {
        if (p !== f) {
          if (s.value ? i.value = p : r.form && r.field && (r.form[r.field] = p), l.value = f, o("update:modelValue", p), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: p, old_value: f });
        }
      }
    ), re(
      () => r.field && r.form ? r.form[r.field] : null,
      (p) => {
        c.value = s.value ? i.value : p;
      },
      { deep: !0 }
    ), re(
      () => i.value,
      (p) => {
        c.value = p;
      }
    );
    const d = F(() => r.label || (r.field ? a(r.field) : "")), y = F(() => {
      var p, f;
      return r.error || ((f = (p = r.form) == null ? void 0 : p.errors) == null ? void 0 : f[r.field]);
    });
    return t({
      setValueSilently: (p) => {
        c.value = p, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (p, f) => {
      var g, w;
      return x(), P("div", {
        class: J(p.noLabel ? "mb-2" : "mb-4")
      }, [
        p.noLabel ? Y("", !0) : (x(), H(b(jn), {
          key: 0,
          customClass: p.labelCustomClass,
          for: p.field,
          value: d.value,
          sublabel: p.sublabel,
          required: p.required,
          tooltip: p.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        $("label", gg, [
          (g = p.$slots) != null && g.leftDescription ? j(p.$slots, "leftDescription", { key: 0 }, void 0, !0) : p.leftDescription ? (x(), P("span", vg, Q(p.leftDescription === !0 ? "Disable" : p.leftDescription), 1)) : Y("", !0),
          He($("input", {
            id: p.field,
            type: "checkbox",
            class: "hidden",
            "onUpdate:modelValue": f[0] || (f[0] = (O) => c.value = O),
            disabled: p.disabled,
            required: p.required,
            name: p.name || p.field
          }, null, 8, bg), [
            [Oc, c.value]
          ]),
          $("div", {
            tabindex: "0",
            class: J(["toggle-switch focusable relative mx-2 ml-0 inline-block h-6 w-12 flex-none cursor-pointer rounded-xl bg-gray-300 transition-all", {
              "checked bg-primary": c.value,
              "disabled cursor-not-allowed opacity-50": p.disabled,
              [p.customClass]: p.customClass
            }]),
            style: { "box-shadow": "0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset" }
          }, null, 2),
          (w = p.$slots) != null && w.rightDescription ? j(p.$slots, "rightDescription", { key: 2 }, void 0, !0) : p.rightDescription ? (x(), P("span", wg, Q(p.rightDescription === !0 ? "Enable" : p.rightDescription), 1)) : Y("", !0)
        ]),
        y.value ? (x(), H(b(en), {
          key: 1,
          message: y.value,
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
}), xg = /* @__PURE__ */ di(Sg, [["__scopeId", "data-v-dc63ff1f"]]), Og = ["id", "required", "disabled", "name"], Cg = ["selected"], Ag = ["value", "disabled"], DO = /* @__PURE__ */ U({
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
    const s = M(!1), i = Mn(e, "modelValue"), c = M(), l = M(), u = M(!1);
    pe(() => {
      var f;
      s.value = !r.form, c.value = s.value ? i.value : (f = r.form) == null ? void 0 : f[r.field];
    }), re(
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
    ), re(
      () => r.field && r.form ? r.form[r.field] : null,
      (f) => {
        c.value = s.value ? i.value : f;
      },
      { deep: !0 }
    ), re(
      () => i.value,
      (f) => {
        c.value = f;
      }
    );
    const d = F(() => r.options ? r.options.map((f) => typeof f == "string" ? { value: f, label: f, disabled: !1 } : {
      value: f.value,
      label: f.label || String(f.value),
      disabled: f.disabled || !1
    }) : []), y = F(() => r.label || (r.field ? a(r.field) : "")), h = F(() => {
      var f, g;
      return r.error || ((g = (f = r.form) == null ? void 0 : f.errors) == null ? void 0 : g[r.field]);
    });
    return t({
      setValueSilently: (f) => {
        c.value = f, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, g) => (x(), H(b(Xs), {
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
      default: B(() => [
        He($("select", {
          id: f.field,
          "onUpdate:modelValue": g[0] || (g[0] = (w) => c.value = w),
          required: f.required,
          disabled: f.disabled,
          name: f.name || f.field,
          class: J(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", f.customClass])
        }, [
          f.placeholder ? (x(), P("option", {
            key: 0,
            value: "",
            disabled: "",
            selected: !c.value,
            class: "text-gray-500"
          }, Q(f.placeholder), 9, Cg)) : Y("", !0),
          (x(!0), P(ne, null, be(d.value, (w) => (x(), P("option", {
            key: w.value,
            value: w.value,
            disabled: w.disabled
          }, Q(w.label), 9, Ag))), 128)),
          j(f.$slots, "default")
        ], 10, Og), [
          [Cc, c.value]
        ])
      ]),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Eg = ["id", "disabled"], Pg = { class: "flex flex-wrap gap-1" }, kg = ["onClick"], $g = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, Dg = { class: "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg" }, Tg = {
  key: 0,
  class: "border-b border-gray-200 p-2"
}, Fg = { class: "relative" }, Rg = {
  key: 1,
  class: "flex items-center justify-center p-4"
}, Ig = {
  key: 2,
  class: "max-h-60 overflow-auto"
}, _g = {
  key: 0,
  class: "bg-gray-50 px-3 py-2 text-xs font-semibold tracking-wide text-gray-500 uppercase"
}, Bg = ["onClick", "disabled"], Lg = { class: "block truncate" }, Mg = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, Ng = ["onClick", "disabled"], jg = { class: "block truncate" }, qg = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, zg = {
  key: 2,
  class: "px-3 py-2 text-center text-sm text-gray-500"
}, TO = /* @__PURE__ */ U({
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
    const n = e, r = t, o = M(!1), a = M(""), s = M(!1), i = M(null), c = M([...n.options]), l = M(), u = M(), d = F({
      get() {
        return n.modelValue !== void 0 ? n.modelValue : n.form && n.field ? n.form[n.field] : n.multiple ? [] : void 0;
      },
      set(S) {
        n.modelValue !== void 0 ? r("update:modelValue", S) : n.form && n.field && (n.form[n.field] = S);
      }
    }), y = (S) => S[n.optionValue], h = (S) => S[n.optionLabel], m = (S) => S[n.optionGroup], p = F(() => {
      var S;
      if ((S = n.form) != null && S.errors && n.field)
        return n.form.errors[n.field];
    }), f = F(() => n.label ? n.label : n.field ? n.field.split("_").map((S) => S.charAt(0).toUpperCase() + S.slice(1)).join(" ") : ""), g = F(() => n.field || `select-${Math.random().toString(36).substr(2, 9)}`), w = F(() => {
      if (!n.searchable || !a.value)
        return c.value;
      const S = a.value.toLowerCase();
      return c.value.filter((W) => h(W).toLowerCase().includes(S));
    }), O = F(() => {
      if (!n.grouping)
        return { ungrouped: w.value };
      const S = {};
      return w.value.forEach((W) => {
        const _ = m(W) || "ungrouped";
        S[_] || (S[_] = []), S[_].push(W);
      }), S;
    }), E = F(() => {
      if (!d.value) return [];
      const S = n.multiple ? d.value : [d.value];
      return c.value.filter((W) => S.includes(y(W)));
    }), D = F(() => E.value.length ? n.multiple ? E.value.map((S) => h(S)).join(", ") : h(E.value[0]) : n.placeholder), V = async (S) => {
      if (!(!n.apiSearch || !n.apiUrl)) {
        s.value = !0;
        try {
          const W = new URL(n.apiUrl);
          W.searchParams.set(n.apiSearchParam, S);
          const T = await (await fetch(W.toString())).json(), X = n.apiTransform ? n.apiTransform(T) : T;
          c.value = X, r("optionsLoaded", X);
        } catch (W) {
          console.error("API search error:", W);
        } finally {
          s.value = !1;
        }
      }
    }, z = (S) => {
      a.value = S, r("search", S), n.apiSearch && S.length >= n.minSearchLength && (i.value && clearTimeout(i.value), i.value = setTimeout(() => {
        V(S);
      }, n.searchDelay));
    }, G = (S) => {
      if (S.disabled) return;
      const W = y(S);
      if (n.multiple) {
        const _ = d.value || [], T = _.indexOf(W);
        T > -1 ? d.value = _.filter((X, ae) => ae !== T) : d.value = [..._, W];
      } else
        d.value = W, o.value = !1;
    }, I = (S, W) => {
      if (W.stopPropagation(), n.multiple) {
        const _ = y(S);
        d.value = d.value.filter((T) => T !== _);
      }
    }, k = (S) => {
      S.stopPropagation(), d.value = n.multiple ? [] : void 0;
    }, q = (S) => {
      const W = y(S);
      return n.multiple ? (d.value || []).includes(W) : d.value === W;
    }, v = () => {
      n.disabled || (o.value = !o.value, o.value && n.searchable && Te(() => {
        var S;
        (S = u.value) == null || S.focus();
      }));
    }, C = (S) => {
      l.value && !l.value.contains(S.target) && (o.value = !1);
    };
    return re(
      () => n.options,
      (S) => {
        c.value = [...S];
      },
      { immediate: !0 }
    ), pe(() => {
      document.addEventListener("click", C);
    }), Mt(() => {
      document.removeEventListener("click", C), i.value && clearTimeout(i.value);
    }), (S, W) => (x(), H(b(Xs), {
      field: S.field,
      label: f.value,
      tooltip: S.tooltip,
      required: S.required,
      noLabel: S.noLabel,
      form: S.form,
      error: p.value,
      htmlFor: g.value
    }, {
      default: B(() => [
        $("div", {
          class: "relative",
          ref_key: "dropdownRef",
          ref: l
        }, [
          $("button", {
            type: "button",
            id: g.value,
            onClick: v,
            disabled: S.disabled,
            class: J(["focusable focus:border-primary-500 focus:ring-primary-500 relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500", [
              S.customClass,
              {
                "border-red-500 focus:border-red-500 focus:ring-red-500": p.value,
                "border-primary-500 ring-primary-500 ring-2": o.value
              }
            ]])
          }, [
            $("div", Pg, [
              S.multiple && E.value.length ? (x(!0), P(ne, { key: 0 }, be(E.value, (_) => (x(), P("span", {
                key: y(_),
                class: "bg-primary-100 text-primary-800 inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
              }, [
                ce(Q(h(_)) + " ", 1),
                $("button", {
                  type: "button",
                  onClick: (T) => I(_, T),
                  class: "hover:text-primary-600 transition-colors"
                }, [
                  Z(b(xe), {
                    icon: b(Jr),
                    class: "h-3 w-3"
                  }, null, 8, ["icon"])
                ], 8, kg)
              ]))), 128)) : (x(), P("span", {
                key: 1,
                class: J(["block truncate", { "text-gray-500": !E.value.length }])
              }, Q(D.value), 3))
            ]),
            S.clearable && E.value.length ? (x(), P("button", {
              key: 0,
              type: "button",
              onClick: k,
              class: "absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 transition-colors hover:text-gray-600"
            }, [
              Z(b(xe), {
                icon: b(Jr),
                class: "h-4 w-4"
              }, null, 8, ["icon"])
            ])) : Y("", !0),
            $("div", $g, [
              Z(b(xe), {
                icon: b(Qs),
                class: J(["h-4 w-4 text-gray-400 transition-transform duration-200", { "rotate-180": o.value }])
              }, null, 8, ["icon", "class"])
            ])
          ], 10, Eg),
          Z(un, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "opacity-0 scale-95",
            "enter-to-class": "opacity-100 scale-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "opacity-100 scale-100",
            "leave-to-class": "opacity-0 scale-95"
          }, {
            default: B(() => [
              He($("div", Dg, [
                S.searchable ? (x(), P("div", Tg, [
                  $("div", Fg, [
                    Z(b(xe), {
                      icon: b(wm),
                      class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                    }, null, 8, ["icon"]),
                    He($("input", {
                      ref_key: "searchInputRef",
                      ref: u,
                      type: "text",
                      "onUpdate:modelValue": W[0] || (W[0] = (_) => a.value = _),
                      onInput: W[1] || (W[1] = (_) => z(a.value)),
                      placeholder: "Search options...",
                      class: "focus:border-primary-500 focus:ring-primary-500 w-full rounded border border-gray-300 py-2 pr-3 pl-10 text-sm focus:ring-2 focus:ring-offset-0"
                    }, null, 544), [
                      [Ac, a.value]
                    ])
                  ])
                ])) : Y("", !0),
                s.value ? (x(), P("div", Rg, [
                  Z(b(qi), { class: "h-5 w-5" }),
                  W[2] || (W[2] = $("span", { class: "ml-2 text-sm text-gray-600" }, "Loading...", -1))
                ])) : (x(), P("div", Ig, [
                  S.grouping ? (x(!0), P(ne, { key: 0 }, be(O.value, (_, T) => (x(), P("div", { key: T }, [
                    T !== "ungrouped" ? (x(), P("div", _g, Q(T), 1)) : Y("", !0),
                    (x(!0), P(ne, null, be(_, (X) => (x(), P("button", {
                      key: y(X),
                      type: "button",
                      onClick: (ae) => G(X),
                      disabled: X.disabled,
                      class: J(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                        "bg-primary-100 text-primary-900": q(X),
                        "text-gray-900": !q(X)
                      }])
                    }, [
                      $("span", Lg, Q(h(X)), 1),
                      q(X) ? (x(), P("span", Mg, " ✓ ")) : Y("", !0)
                    ], 10, Bg))), 128))
                  ]))), 128)) : (x(!0), P(ne, { key: 1 }, be(w.value, (_) => (x(), P("button", {
                    key: y(_),
                    type: "button",
                    onClick: (T) => G(_),
                    disabled: _.disabled,
                    class: J(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                      "bg-primary-100 text-primary-900": q(_),
                      "text-gray-900": !q(_)
                    }])
                  }, [
                    $("span", jg, Q(h(_)), 1),
                    q(_) ? (x(), P("span", qg, "✓")) : Y("", !0)
                  ], 10, Ng))), 128)),
                  w.value.length ? Y("", !0) : (x(), P("div", zg, "No options found"))
                ]))
              ], 512), [
                [ln, o.value]
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
var Vg = Object.defineProperty, Ug = Object.defineProperties, Hg = Object.getOwnPropertyDescriptors, Tl = Object.getOwnPropertySymbols, Wg = Object.prototype.hasOwnProperty, Kg = Object.prototype.propertyIsEnumerable, Fl = (e, t, n) => t in e ? Vg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pn = (e, t) => {
  for (var n in t || (t = {}))
    Wg.call(t, n) && Fl(e, n, t[n]);
  if (Tl)
    for (var n of Tl(t))
      Kg.call(t, n) && Fl(e, n, t[n]);
  return e;
}, Rl = (e, t) => Ug(e, Hg(t));
const Gg = {
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
}, Yg = {
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
}, Xg = {
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
}, pi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Jg = {}, Qg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Zg = /* @__PURE__ */ $("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), e0 = [
  Zg
];
function t0(e, t) {
  return x(), P("svg", Qg, e0);
}
const n0 = /* @__PURE__ */ pi(Jg, [["render", t0]]), r0 = {}, o0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, a0 = /* @__PURE__ */ $("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), s0 = [
  a0
];
function i0(e, t) {
  return x(), P("svg", o0, s0);
}
const l0 = /* @__PURE__ */ pi(r0, [["render", i0]]), Il = {
  Deselect: n0,
  OpenIndicator: l0
}, u0 = {
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
function c0(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let d0 = 0;
function f0() {
  return ++d0;
}
const p0 = {
  components: Pn({}, Il),
  directives: { appendToBody: u0 },
  mixins: [Gg, Yg, Xg],
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
          return e.hasOwnProperty("id") ? e.id : c0(e);
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
      default: () => f0()
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
          attributes: Pn({
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
        header: Rl(Pn({}, e), { deselect: this.deselect }),
        footer: Rl(Pn({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Pn(Pn({}, Il), this.components);
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
}, m0 = ["dir"], h0 = ["id", "aria-expanded", "aria-owns"], y0 = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, g0 = ["disabled", "title", "aria-label", "onClick"], v0 = {
  ref: "actions",
  class: "vs__actions"
}, b0 = ["disabled"], w0 = { class: "vs__spinner" }, S0 = ["id"], x0 = ["id", "aria-selected", "onMouseover", "onClick"], O0 = {
  key: 0,
  class: "vs__no-options"
}, C0 = /* @__PURE__ */ ce(" Sorry, no matching options. "), A0 = ["id"];
function E0(e, t, n, r, o, a) {
  const s = Kp("append-to-body");
  return x(), P("div", {
    dir: n.dir,
    class: J(["v-select", a.stateClasses])
  }, [
    j(e.$slots, "header", ve(Ee(a.scope.header))),
    $("div", {
      id: `vs${n.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": a.dropdownOpen.toString(),
      "aria-owns": `vs${n.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (i) => a.toggleDropdown(i))
    }, [
      $("div", y0, [
        (x(!0), P(ne, null, be(a.selectedValue, (i, c) => j(e.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(i),
          deselect: a.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (x(), P("span", {
            key: n.getOptionKey(i),
            class: "vs__selected"
          }, [
            j(e.$slots, "selected-option", ve(Ee(a.normalizeOptionForSlot(i))), () => [
              ce(Q(n.getOptionLabel(i)), 1)
            ]),
            n.multiple ? (x(), P("button", {
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
              (x(), H(jr(a.childComponents.Deselect)))
            ], 8, g0)) : Y("", !0)
          ]))
        ])), 256)),
        j(e.$slots, "search", ve(Ee(a.scope.search)), () => [
          $("input", ie({ class: "vs__search" }, a.scope.search.attributes, Ec(a.scope.search.events)), null, 16)
        ])
      ], 512),
      $("div", v0, [
        He($("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...i) => a.clearSelection && a.clearSelection(...i))
        }, [
          (x(), H(jr(a.childComponents.Deselect)))
        ], 8, b0), [
          [ln, a.showClearButton]
        ]),
        j(e.$slots, "open-indicator", ve(Ee(a.scope.openIndicator)), () => [
          n.noDrop ? Y("", !0) : (x(), H(jr(a.childComponents.OpenIndicator), ve(ie({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        j(e.$slots, "spinner", ve(Ee(a.scope.spinner)), () => [
          He($("div", w0, "Loading...", 512), [
            [ln, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, h0),
    Z(un, { name: n.transition }, {
      default: B(() => [
        a.dropdownOpen ? He((x(), P("ul", {
          id: `vs${n.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${n.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = St((...i) => a.onMousedown && a.onMousedown(...i), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...i) => a.onMouseUp && a.onMouseUp(...i))
        }, [
          j(e.$slots, "list-header", ve(Ee(a.scope.listHeader))),
          (x(!0), P(ne, null, be(a.filteredOptions, (i, c) => (x(), P("li", {
            id: `vs${n.uid}__option-${c}`,
            key: n.getOptionKey(i),
            role: "option",
            class: J(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(i) && c === e.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(i),
              "vs__dropdown-option--highlight": c === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !n.selectable(i)
            }]),
            "aria-selected": c === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => n.selectable(i) ? e.typeAheadPointer = c : null,
            onClick: St((l) => n.selectable(i) ? a.select(i) : null, ["prevent", "stop"])
          }, [
            j(e.$slots, "option", ve(Ee(a.normalizeOptionForSlot(i))), () => [
              ce(Q(n.getOptionLabel(i)), 1)
            ])
          ], 42, x0))), 128)),
          a.filteredOptions.length === 0 ? (x(), P("li", O0, [
            j(e.$slots, "no-options", ve(Ee(a.scope.noOptions)), () => [
              C0
            ])
          ])) : Y("", !0),
          j(e.$slots, "list-footer", ve(Ee(a.scope.listFooter)))
        ], 40, S0)), [
          [s]
        ]) : (x(), P("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, A0))
      ]),
      _: 3
    }, 8, ["name"]),
    j(e.$slots, "footer", ve(Ee(a.scope.footer)))
  ], 10, m0);
}
const P0 = /* @__PURE__ */ pi(p0, [["render", E0]]), FO = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return gr.add(fi), (t, n) => (x(), H(b(P0), {
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
function k0(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const vd = {
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
      default: (e, t) => e.match(k0(t))
    }
  }
}, $0 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, D0 = {
  name: "ModelSelect",
  mixins: [vd],
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
}, T0 = /* @__PURE__ */ $("i", { class: "dropdown icon" }, null, -1), F0 = ["disabled", "tabindex", "id", "name", "value"], R0 = ["data-vss-custom-attr"], I0 = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function _0(e, t, n, r, o, a) {
  return x(), P("div", {
    class: J(["ui fluid search selection dropdown", { "active visible": o.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => a.openOptions && a.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => a.openOptions && a.openOptions(...s))
  }, [
    T0,
    $("input", {
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
        t[2] || (t[2] = rn((...s) => a.closeOptions && a.closeOptions(...s), ["esc"])),
        t[7] || (t[7] = rn(St((...s) => a.enterItem && a.enterItem(...s), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...s) => a.blurInput && a.blurInput(...s)),
      onKeydown: [
        t[4] || (t[4] = rn((...s) => a.prevItem && a.prevItem(...s), ["up"])),
        t[5] || (t[5] = rn((...s) => a.nextItem && a.nextItem(...s), ["down"])),
        t[6] || (t[6] = rn(St(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = rn((...s) => a.deleteTextOrItem && a.deleteTextOrItem(...s), ["delete"]))
      ]
    }, null, 40, F0),
    $("div", {
      class: J(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, Q(a.inputText), 11, R0),
    $("div", {
      class: J(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = St(() => {
      }, ["prevent"])),
      style: et(a.menuStyle),
      tabindex: "-1"
    }, [
      (x(!0), P(ne, null, be(a.filteredOptions, (s, i) => (x(), P("div", {
        key: i,
        class: J(["item", { selected: s.selected || o.pointer === i, disabled: s.disabled }]),
        "data-vss-custom-attr": a.customAttrs[i] ? a.customAttrs[i] : "",
        onClick: St((c) => a.selectItem(s), ["stop"]),
        onMousedown: t[9] || (t[9] = (...c) => a.mousedownItem && a.mousedownItem(...c)),
        onMouseenter: (c) => a.pointerSet(i)
      }, [
        j(e.$slots, "default", {
          option: s,
          idx: i
        }, () => [
          ce(Q(s.text), 1)
        ])
      ], 42, I0))), 128))
    ], 38)
  ], 34);
}
const _l = /* @__PURE__ */ $0(D0, [["render", _0]]), Bl = {
  name: "ModelListSelect",
  mixins: [vd],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return qe(_l, {
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
}, B0 = {
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
    return (o, a) => (x(), P("div", null, [
      !e.noLabel && (e.label || e.field) ? (x(), H(b(jn), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : Y("", !0),
      e.noForm ? (x(), H(b(Bl), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (x(), P(ne, { key: 2 }, [
        Z(b(Bl), {
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
        Z(b(en), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, L0 = /* @__PURE__ */ di(B0, [["__scopeId", "data-v-c8f3c7c8"]]), RO = {
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
    const r = e, o = n, a = M([]), s = M(1), i = M(!0), c = M(0), l = M(""), u = M(((g = r.form) == null ? void 0 : g[r.field]) || r.modelValue), d = M(u.value), y = M(null), h = (w) => {
      d.value = u.value, u.value = w, o("update:modelValue", w), o("changed", w), w || (m(""), y.value = null);
    }, m = (w) => {
      w == "" && u.value && u.value !== d.value || (s.value = 1, c.value = 0, l.value = w, p());
    }, p = async (w = !1) => {
      const O = new URLSearchParams();
      O.append("term", l.value), O.append("page", s.value), r.queryParams && Object.keys(r.queryParams).forEach((V) => {
        O.append(V, r.queryParams[V]);
      }), w && u.value && O.append("ajax_id", u.value);
      const D = await (await fetch(`${r.url}?${O.toString()}`)).json();
      if (i.value = D.current_page < D.last_page, s.value === 1) {
        if (a.value = D.data, u.value) {
          const V = a.value.find((z) => z[r.optionValue] == u.value);
          y.value = V ? V[r.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat(D.data);
    };
    return pe(() => {
      p(!0);
      const w = document.getElementById(r.id).parentNode.querySelector(".menu");
      w == null || w.addEventListener(
        "scroll",
        (O) => {
          O.target.scrollTop > c.value && O.target.scrollTop + O.target.clientHeight >= O.target.scrollHeight && i.value && (s.value++, p());
        },
        {
          passive: !0
        }
      );
    }), t({ getCurrentOption: () => a.value.find((w) => w[r.optionValue] == u.value) }), (w, O) => (x(), H(b(L0), {
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
      "onUpdate:modelValue": O[0] || (O[0] = (E) => h(E)),
      onSearchchange: m,
      filterPredicate: (E, D) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
function M0(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function N0() {
}
function j0(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function q0(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Os(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function no(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const bd = "[object RegExp]", wd = "[object String]", Sd = "[object Number]", xd = "[object Boolean]", Cs = "[object Arguments]", Od = "[object Symbol]", Cd = "[object Date]", Ad = "[object Map]", Ed = "[object Set]", Pd = "[object Array]", z0 = "[object Function]", kd = "[object ArrayBuffer]", Vr = "[object Object]", V0 = "[object Error]", $d = "[object DataView]", Dd = "[object Uint8Array]", Td = "[object Uint8ClampedArray]", Fd = "[object Uint16Array]", Rd = "[object Uint32Array]", U0 = "[object BigUint64Array]", Id = "[object Int8Array]", _d = "[object Int16Array]", Bd = "[object Int32Array]", H0 = "[object BigInt64Array]", Ld = "[object Float32Array]", Md = "[object Float64Array]";
function Tn(e, t, n, r = /* @__PURE__ */ new Map(), o = void 0) {
  const a = o == null ? void 0 : o(e, t, n, r);
  if (a != null)
    return a;
  if (j0(e))
    return e;
  if (r.has(e))
    return r.get(e);
  if (Array.isArray(e)) {
    const s = new Array(e.length);
    r.set(e, s);
    for (let i = 0; i < e.length; i++)
      s[i] = Tn(e[i], i, n, r, o);
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
      s.set(i, Tn(c, i, n, r, o));
    return s;
  }
  if (e instanceof Set) {
    const s = /* @__PURE__ */ new Set();
    r.set(e, s);
    for (const i of e)
      s.add(Tn(i, void 0, n, r, o));
    return s;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e))
    return e.subarray();
  if (q0(e)) {
    const s = new (Object.getPrototypeOf(e)).constructor(e.length);
    r.set(e, s);
    for (let i = 0; i < e.length; i++)
      s[i] = Tn(e[i], i, n, r, o);
    return s;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer)
    return e.slice(0);
  if (e instanceof DataView) {
    const s = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return r.set(e, s), Yn(s, e, n, r, o), s;
  }
  if (typeof File < "u" && e instanceof File) {
    const s = new File([e], e.name, {
      type: e.type
    });
    return r.set(e, s), Yn(s, e, n, r, o), s;
  }
  if (e instanceof Blob) {
    const s = new Blob([e], { type: e.type });
    return r.set(e, s), Yn(s, e, n, r, o), s;
  }
  if (e instanceof Error) {
    const s = new e.constructor();
    return r.set(e, s), s.message = e.message, s.name = e.name, s.stack = e.stack, s.cause = e.cause, Yn(s, e, n, r, o), s;
  }
  if (typeof e == "object" && W0(e)) {
    const s = Object.create(Object.getPrototypeOf(e));
    return r.set(e, s), Yn(s, e, n, r, o), s;
  }
  return e;
}
function Yn(e, t, n = e, r, o) {
  const a = [...Object.keys(t), ...Os(t)];
  for (let s = 0; s < a.length; s++) {
    const i = a[s], c = Object.getOwnPropertyDescriptor(e, i);
    (c == null || c.writable) && (e[i] = Tn(t[i], i, n, r, o));
  }
}
function W0(e) {
  switch (no(e)) {
    case Cs:
    case Pd:
    case kd:
    case $d:
    case xd:
    case Cd:
    case Ld:
    case Md:
    case Id:
    case _d:
    case Bd:
    case Ad:
    case Sd:
    case Vr:
    case bd:
    case Ed:
    case wd:
    case Od:
    case Dd:
    case Td:
    case Fd:
    case Rd:
      return !0;
    default:
      return !1;
  }
}
function ut(e) {
  return Tn(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
function ro(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
function er(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r], a = t[o], s = e[o];
    Array.isArray(a) ? Array.isArray(s) ? e[o] = er(s, a) : e[o] = er([], a) : ro(a) ? ro(s) ? e[o] = er(s, a) : e[o] = er({}, a) : (s === void 0 || a !== void 0) && (e[o] = a);
  }
  return e;
}
function Nd(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function K0(e, t, n) {
  return tr(e, t, void 0, void 0, void 0, void 0, n);
}
function tr(e, t, n, r, o, a, s) {
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
        return sr(e, t, a, s);
    }
  return sr(e, t, a, s);
}
function sr(e, t, n, r) {
  if (Object.is(e, t))
    return !0;
  let o = no(e), a = no(t);
  if (o === Cs && (o = Vr), a === Cs && (a = Vr), o !== a)
    return !1;
  switch (o) {
    case wd:
      return e.toString() === t.toString();
    case Sd: {
      const c = e.valueOf(), l = t.valueOf();
      return Nd(c, l);
    }
    case xd:
    case Cd:
    case Od:
      return Object.is(e.valueOf(), t.valueOf());
    case bd:
      return e.source === t.source && e.flags === t.flags;
    case z0:
      return e === t;
  }
  n = n ?? /* @__PURE__ */ new Map();
  const s = n.get(e), i = n.get(t);
  if (s != null && i != null)
    return s === t;
  n.set(e, t), n.set(t, e);
  try {
    switch (o) {
      case Ad: {
        if (e.size !== t.size)
          return !1;
        for (const [c, l] of e.entries())
          if (!t.has(c) || !tr(l, t.get(c), c, e, t, n, r))
            return !1;
        return !0;
      }
      case Ed: {
        if (e.size !== t.size)
          return !1;
        const c = Array.from(e.values()), l = Array.from(t.values());
        for (let u = 0; u < c.length; u++) {
          const d = c[u], y = l.findIndex((h) => tr(d, h, void 0, e, t, n, r));
          if (y === -1)
            return !1;
          l.splice(y, 1);
        }
        return !0;
      }
      case Pd:
      case Dd:
      case Td:
      case Fd:
      case Rd:
      case U0:
      case Id:
      case _d:
      case Bd:
      case H0:
      case Ld:
      case Md: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let c = 0; c < e.length; c++)
          if (!tr(e[c], t[c], c, e, t, n, r))
            return !1;
        return !0;
      }
      case kd:
        return e.byteLength !== t.byteLength ? !1 : sr(new Uint8Array(e), new Uint8Array(t), n, r);
      case $d:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : sr(new Uint8Array(e), new Uint8Array(t), n, r);
      case V0:
        return e.name === t.name && e.message === t.message;
      case Vr: {
        if (!(sr(e.constructor, t.constructor, n, r) || ro(e) && ro(t)))
          return !1;
        const l = [...Object.keys(e), ...Os(e)], u = [...Object.keys(t), ...Os(t)];
        if (l.length !== u.length)
          return !1;
        for (let d = 0; d < l.length; d++) {
          const y = l[d], h = e[y];
          if (!Object.hasOwn(t, y))
            return !1;
          const m = t[y];
          if (!tr(h, m, y, e, t, n, r))
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
function G0(e, t) {
  return K0(e, t, N0);
}
var As = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Y0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function X0(e) {
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
var Qo, Ll;
function qn() {
  return Ll || (Ll = 1, Qo = TypeError), Qo;
}
const J0 = {}, Q0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: J0
}, Symbol.toStringTag, { value: "Module" })), Es = /* @__PURE__ */ X0(Q0);
var Zo, Ml;
function wo() {
  if (Ml) return Zo;
  Ml = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, i = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, u = typeof WeakSet == "function" && WeakSet.prototype, d = u ? WeakSet.prototype.has : null, y = typeof WeakRef == "function" && WeakRef.prototype, h = y ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, p = Object.prototype.toString, f = Function.prototype.toString, g = String.prototype.match, w = String.prototype.slice, O = String.prototype.replace, E = String.prototype.toUpperCase, D = String.prototype.toLowerCase, V = RegExp.prototype.test, z = Array.prototype.concat, G = Array.prototype.join, I = Array.prototype.slice, k = Math.floor, q = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, v = Object.getOwnPropertySymbols, C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, A = typeof Symbol == "function" && typeof Symbol.iterator == "object", S = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === A || !0) ? Symbol.toStringTag : null, W = Object.prototype.propertyIsEnumerable, _ = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(R) {
    return R.__proto__;
  } : null);
  function T(R, L) {
    if (R === 1 / 0 || R === -1 / 0 || R !== R || R && R > -1e3 && R < 1e3 || V.call(/e/, L))
      return L;
    var de = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof R == "number") {
      var he = R < 0 ? -k(-R) : k(R);
      if (he !== R) {
        var ye = String(he), se = w.call(L, ye.length + 1);
        return O.call(ye, de, "$&_") + "." + O.call(O.call(se, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return O.call(L, de, "$&_");
  }
  var X = Es, ae = X.custom, Fe = Ie(ae) ? ae : null, Ye = {
    __proto__: null,
    double: '"',
    single: "'"
  }, $e = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Zo = function R(L, de, he, ye) {
    var se = de || {};
    if (ze(se, "quoteStyle") && !ze(Ye, se.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (ze(se, "maxStringLength") && (typeof se.maxStringLength == "number" ? se.maxStringLength < 0 && se.maxStringLength !== 1 / 0 : se.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Vt = ze(se, "customInspect") ? se.customInspect : !0;
    if (typeof Vt != "boolean" && Vt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (ze(se, "indent") && se.indent !== null && se.indent !== "	" && !(parseInt(se.indent, 10) === se.indent && se.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ze(se, "numericSeparator") && typeof se.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var tn = se.numericSeparator;
    if (typeof L > "u")
      return "undefined";
    if (L === null)
      return "null";
    if (typeof L == "boolean")
      return L ? "true" : "false";
    if (typeof L == "string")
      return zi(L, se);
    if (typeof L == "number") {
      if (L === 0)
        return 1 / 0 / L > 0 ? "0" : "-0";
      var Xe = String(L);
      return tn ? T(L, Xe) : Xe;
    }
    if (typeof L == "bigint") {
      var Ut = String(L) + "n";
      return tn ? T(L, Ut) : Ut;
    }
    var No = typeof se.depth > "u" ? 5 : se.depth;
    if (typeof he > "u" && (he = 0), he >= No && No > 0 && typeof L == "object")
      return vt(L) ? "[Array]" : "[Object]";
    var Cn = Up(se, he);
    if (typeof ye > "u")
      ye = [];
    else if (zt(ye, L) >= 0)
      return "[Circular]";
    function lt(An, $r, Wp) {
      if ($r && (ye = I.call(ye), ye.push($r)), Wp) {
        var Ji = {
          depth: se.depth
        };
        return ze(se, "quoteStyle") && (Ji.quoteStyle = se.quoteStyle), R(An, Ji, he + 1, ye);
      }
      return R(An, se, he + 1, ye);
    }
    if (typeof L == "function" && !Pe(L)) {
      var Ui = wn(L), Hi = Pr(L, lt);
      return "[Function" + (Ui ? ": " + Ui : " (anonymous)") + "]" + (Hi.length > 0 ? " { " + G.call(Hi, ", ") + " }" : "");
    }
    if (Ie(L)) {
      var Wi = A ? O.call(String(L), /^(Symbol\(.*\))_[^)]*$/, "$1") : C.call(L);
      return typeof L == "object" && !A ? Kn(Wi) : Wi;
    }
    if (qp(L)) {
      for (var Gn = "<" + D.call(String(L.nodeName)), jo = L.attributes || [], kr = 0; kr < jo.length; kr++)
        Gn += " " + jo[kr].name + "=" + Me(Re(jo[kr].value), "double", se);
      return Gn += ">", L.childNodes && L.childNodes.length && (Gn += "..."), Gn += "</" + D.call(String(L.nodeName)) + ">", Gn;
    }
    if (vt(L)) {
      if (L.length === 0)
        return "[]";
      var qo = Pr(L, lt);
      return Cn && !Vp(qo) ? "[" + Mo(qo, Cn) + "]" : "[ " + G.call(qo, ", ") + " ]";
    }
    if (ue(L)) {
      var zo = Pr(L, lt);
      return !("cause" in Error.prototype) && "cause" in L && !W.call(L, "cause") ? "{ [" + String(L) + "] " + G.call(z.call("[cause]: " + lt(L.cause), zo), ", ") + " }" : zo.length === 0 ? "[" + String(L) + "]" : "{ [" + String(L) + "] " + G.call(zo, ", ") + " }";
    }
    if (typeof L == "object" && Vt) {
      if (Fe && typeof L[Fe] == "function" && X)
        return X(L, { depth: No - he });
      if (Vt !== "symbol" && typeof L.inspect == "function")
        return L.inspect();
    }
    if (it(L)) {
      var Ki = [];
      return r && r.call(L, function(An, $r) {
        Ki.push(lt($r, L, !0) + " => " + lt(An, L));
      }), Vi("Map", n.call(L), Ki, Cn);
    }
    if (On(L)) {
      var Gi = [];
      return i && i.call(L, function(An) {
        Gi.push(lt(An, L));
      }), Vi("Set", s.call(L), Gi, Cn);
    }
    if (Sn(L))
      return Lo("WeakMap");
    if (jp(L))
      return Lo("WeakSet");
    if (xn(L))
      return Lo("WeakRef");
    if (me(L))
      return Kn(lt(Number(L)));
    if (rt(L))
      return Kn(lt(q.call(L)));
    if (Ce(L))
      return Kn(m.call(L));
    if (we(L))
      return Kn(lt(String(L)));
    if (typeof window < "u" && L === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && L === globalThis || typeof As < "u" && L === As)
      return "{ [object globalThis] }";
    if (!bt(L) && !Pe(L)) {
      var Vo = Pr(L, lt), Yi = _ ? _(L) === Object.prototype : L instanceof Object || L.constructor === Object, Uo = L instanceof Object ? "" : "null prototype", Xi = !Yi && S && Object(L) === L && S in L ? w.call(ot(L), 8, -1) : Uo ? "Object" : "", Hp = Yi || typeof L.constructor != "function" ? "" : L.constructor.name ? L.constructor.name + " " : "", Ho = Hp + (Xi || Uo ? "[" + G.call(z.call([], Xi || [], Uo || []), ": ") + "] " : "");
      return Vo.length === 0 ? Ho + "{}" : Cn ? Ho + "{" + Mo(Vo, Cn) + "}" : Ho + "{ " + G.call(Vo, ", ") + " }";
    }
    return String(L);
  };
  function Me(R, L, de) {
    var he = de.quoteStyle || L, ye = Ye[he];
    return ye + R + ye;
  }
  function Re(R) {
    return O.call(String(R), /"/g, "&quot;");
  }
  function Ne(R) {
    return !S || !(typeof R == "object" && (S in R || typeof R[S] < "u"));
  }
  function vt(R) {
    return ot(R) === "[object Array]" && Ne(R);
  }
  function bt(R) {
    return ot(R) === "[object Date]" && Ne(R);
  }
  function Pe(R) {
    return ot(R) === "[object RegExp]" && Ne(R);
  }
  function ue(R) {
    return ot(R) === "[object Error]" && Ne(R);
  }
  function we(R) {
    return ot(R) === "[object String]" && Ne(R);
  }
  function me(R) {
    return ot(R) === "[object Number]" && Ne(R);
  }
  function Ce(R) {
    return ot(R) === "[object Boolean]" && Ne(R);
  }
  function Ie(R) {
    if (A)
      return R && typeof R == "object" && R instanceof Symbol;
    if (typeof R == "symbol")
      return !0;
    if (!R || typeof R != "object" || !C)
      return !1;
    try {
      return C.call(R), !0;
    } catch {
    }
    return !1;
  }
  function rt(R) {
    if (!R || typeof R != "object" || !q)
      return !1;
    try {
      return q.call(R), !0;
    } catch {
    }
    return !1;
  }
  var _e = Object.prototype.hasOwnProperty || function(R) {
    return R in this;
  };
  function ze(R, L) {
    return _e.call(R, L);
  }
  function ot(R) {
    return p.call(R);
  }
  function wn(R) {
    if (R.name)
      return R.name;
    var L = g.call(f.call(R), /^function\s*([\w$]+)/);
    return L ? L[1] : null;
  }
  function zt(R, L) {
    if (R.indexOf)
      return R.indexOf(L);
    for (var de = 0, he = R.length; de < he; de++)
      if (R[de] === L)
        return de;
    return -1;
  }
  function it(R) {
    if (!n || !R || typeof R != "object")
      return !1;
    try {
      n.call(R);
      try {
        s.call(R);
      } catch {
        return !0;
      }
      return R instanceof Map;
    } catch {
    }
    return !1;
  }
  function Sn(R) {
    if (!l || !R || typeof R != "object")
      return !1;
    try {
      l.call(R, l);
      try {
        d.call(R, d);
      } catch {
        return !0;
      }
      return R instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function xn(R) {
    if (!h || !R || typeof R != "object")
      return !1;
    try {
      return h.call(R), !0;
    } catch {
    }
    return !1;
  }
  function On(R) {
    if (!s || !R || typeof R != "object")
      return !1;
    try {
      s.call(R);
      try {
        n.call(R);
      } catch {
        return !0;
      }
      return R instanceof Set;
    } catch {
    }
    return !1;
  }
  function jp(R) {
    if (!d || !R || typeof R != "object")
      return !1;
    try {
      d.call(R, d);
      try {
        l.call(R, l);
      } catch {
        return !0;
      }
      return R instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function qp(R) {
    return !R || typeof R != "object" ? !1 : typeof HTMLElement < "u" && R instanceof HTMLElement ? !0 : typeof R.nodeName == "string" && typeof R.getAttribute == "function";
  }
  function zi(R, L) {
    if (R.length > L.maxStringLength) {
      var de = R.length - L.maxStringLength, he = "... " + de + " more character" + (de > 1 ? "s" : "");
      return zi(w.call(R, 0, L.maxStringLength), L) + he;
    }
    var ye = $e[L.quoteStyle || "single"];
    ye.lastIndex = 0;
    var se = O.call(O.call(R, ye, "\\$1"), /[\x00-\x1f]/g, zp);
    return Me(se, "single", L);
  }
  function zp(R) {
    var L = R.charCodeAt(0), de = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[L];
    return de ? "\\" + de : "\\x" + (L < 16 ? "0" : "") + E.call(L.toString(16));
  }
  function Kn(R) {
    return "Object(" + R + ")";
  }
  function Lo(R) {
    return R + " { ? }";
  }
  function Vi(R, L, de, he) {
    var ye = he ? Mo(de, he) : G.call(de, ", ");
    return R + " (" + L + ") {" + ye + "}";
  }
  function Vp(R) {
    for (var L = 0; L < R.length; L++)
      if (zt(R[L], `
`) >= 0)
        return !1;
    return !0;
  }
  function Up(R, L) {
    var de;
    if (R.indent === "	")
      de = "	";
    else if (typeof R.indent == "number" && R.indent > 0)
      de = G.call(Array(R.indent + 1), " ");
    else
      return null;
    return {
      base: de,
      prev: G.call(Array(L + 1), de)
    };
  }
  function Mo(R, L) {
    if (R.length === 0)
      return "";
    var de = `
` + L.prev + L.base;
    return de + G.call(R, "," + de) + `
` + L.prev;
  }
  function Pr(R, L) {
    var de = vt(R), he = [];
    if (de) {
      he.length = R.length;
      for (var ye = 0; ye < R.length; ye++)
        he[ye] = ze(R, ye) ? L(R[ye], R) : "";
    }
    var se = typeof v == "function" ? v(R) : [], Vt;
    if (A) {
      Vt = {};
      for (var tn = 0; tn < se.length; tn++)
        Vt["$" + se[tn]] = se[tn];
    }
    for (var Xe in R)
      ze(R, Xe) && (de && String(Number(Xe)) === Xe && Xe < R.length || A && Vt["$" + Xe] instanceof Symbol || (V.call(/[^\w$]/, Xe) ? he.push(L(Xe, R) + ": " + L(R[Xe], R)) : he.push(Xe + ": " + L(R[Xe], R))));
    if (typeof v == "function")
      for (var Ut = 0; Ut < se.length; Ut++)
        W.call(R, se[Ut]) && he.push("[" + L(se[Ut]) + "]: " + L(R[se[Ut]], R));
    return he;
  }
  return Zo;
}
var ea, Nl;
function Z0() {
  if (Nl) return ea;
  Nl = 1;
  var e = /* @__PURE__ */ wo(), t = /* @__PURE__ */ qn(), n = function(i, c, l) {
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
  return ea = function() {
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
  }, ea;
}
var ta, jl;
function jd() {
  return jl || (jl = 1, ta = Object), ta;
}
var na, ql;
function ev() {
  return ql || (ql = 1, na = Error), na;
}
var ra, zl;
function tv() {
  return zl || (zl = 1, ra = EvalError), ra;
}
var oa, Vl;
function nv() {
  return Vl || (Vl = 1, oa = RangeError), oa;
}
var aa, Ul;
function rv() {
  return Ul || (Ul = 1, aa = ReferenceError), aa;
}
var sa, Hl;
function ov() {
  return Hl || (Hl = 1, sa = SyntaxError), sa;
}
var ia, Wl;
function av() {
  return Wl || (Wl = 1, ia = URIError), ia;
}
var la, Kl;
function sv() {
  return Kl || (Kl = 1, la = Math.abs), la;
}
var ua, Gl;
function iv() {
  return Gl || (Gl = 1, ua = Math.floor), ua;
}
var ca, Yl;
function lv() {
  return Yl || (Yl = 1, ca = Math.max), ca;
}
var da, Xl;
function uv() {
  return Xl || (Xl = 1, da = Math.min), da;
}
var fa, Jl;
function cv() {
  return Jl || (Jl = 1, fa = Math.pow), fa;
}
var pa, Ql;
function dv() {
  return Ql || (Ql = 1, pa = Math.round), pa;
}
var ma, Zl;
function fv() {
  return Zl || (Zl = 1, ma = Number.isNaN || function(t) {
    return t !== t;
  }), ma;
}
var ha, eu;
function pv() {
  if (eu) return ha;
  eu = 1;
  var e = /* @__PURE__ */ fv();
  return ha = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, ha;
}
var ya, tu;
function mv() {
  return tu || (tu = 1, ya = Object.getOwnPropertyDescriptor), ya;
}
var ga, nu;
function qd() {
  if (nu) return ga;
  nu = 1;
  var e = /* @__PURE__ */ mv();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ga = e, ga;
}
var va, ru;
function hv() {
  if (ru) return va;
  ru = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return va = e, va;
}
var ba, ou;
function yv() {
  return ou || (ou = 1, ba = function() {
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
  }), ba;
}
var wa, au;
function gv() {
  if (au) return wa;
  au = 1;
  var e = typeof Symbol < "u" && Symbol, t = yv();
  return wa = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, wa;
}
var Sa, su;
function zd() {
  return su || (su = 1, Sa = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Sa;
}
var xa, iu;
function Vd() {
  if (iu) return xa;
  iu = 1;
  var e = /* @__PURE__ */ jd();
  return xa = e.getPrototypeOf || null, xa;
}
var Oa, lu;
function vv() {
  if (lu) return Oa;
  lu = 1;
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
  return Oa = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var u = a(arguments, 1), d, y = function() {
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
    }, h = n(0, l.length - u.length), m = [], p = 0; p < h; p++)
      m[p] = "$" + p;
    if (d = Function("binder", "return function (" + s(m, ",") + "){ return binder.apply(this,arguments); }")(y), l.prototype) {
      var f = function() {
      };
      f.prototype = l.prototype, d.prototype = new f(), f.prototype = null;
    }
    return d;
  }, Oa;
}
var Ca, uu;
function So() {
  if (uu) return Ca;
  uu = 1;
  var e = vv();
  return Ca = Function.prototype.bind || e, Ca;
}
var Aa, cu;
function mi() {
  return cu || (cu = 1, Aa = Function.prototype.call), Aa;
}
var Ea, du;
function Ud() {
  return du || (du = 1, Ea = Function.prototype.apply), Ea;
}
var Pa, fu;
function bv() {
  return fu || (fu = 1, Pa = typeof Reflect < "u" && Reflect && Reflect.apply), Pa;
}
var ka, pu;
function wv() {
  if (pu) return ka;
  pu = 1;
  var e = So(), t = Ud(), n = mi(), r = bv();
  return ka = r || e.call(n, t), ka;
}
var $a, mu;
function Hd() {
  if (mu) return $a;
  mu = 1;
  var e = So(), t = /* @__PURE__ */ qn(), n = mi(), r = wv();
  return $a = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, $a;
}
var Da, hu;
function Sv() {
  if (hu) return Da;
  hu = 1;
  var e = Hd(), t = /* @__PURE__ */ qd(), n;
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
  return Da = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(i) {
      return a(i == null ? i : o(i));
    }
  ) : !1, Da;
}
var Ta, yu;
function xv() {
  if (yu) return Ta;
  yu = 1;
  var e = zd(), t = Vd(), n = /* @__PURE__ */ Sv();
  return Ta = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Ta;
}
var Fa, gu;
function Ov() {
  if (gu) return Fa;
  gu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = So();
  return Fa = n.call(e, t), Fa;
}
var Ra, vu;
function hi() {
  if (vu) return Ra;
  vu = 1;
  var e, t = /* @__PURE__ */ jd(), n = /* @__PURE__ */ ev(), r = /* @__PURE__ */ tv(), o = /* @__PURE__ */ nv(), a = /* @__PURE__ */ rv(), s = /* @__PURE__ */ ov(), i = /* @__PURE__ */ qn(), c = /* @__PURE__ */ av(), l = /* @__PURE__ */ sv(), u = /* @__PURE__ */ iv(), d = /* @__PURE__ */ lv(), y = /* @__PURE__ */ uv(), h = /* @__PURE__ */ cv(), m = /* @__PURE__ */ dv(), p = /* @__PURE__ */ pv(), f = Function, g = function(Pe) {
    try {
      return f('"use strict"; return (' + Pe + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ qd(), O = /* @__PURE__ */ hv(), E = function() {
    throw new i();
  }, D = w ? function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  }() : E, V = gv()(), z = xv(), G = Vd(), I = zd(), k = Ud(), q = mi(), v = {}, C = typeof Uint8Array > "u" || !z ? e : z(Uint8Array), A = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": V && z ? z([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": v,
    "%AsyncGenerator%": v,
    "%AsyncGeneratorFunction%": v,
    "%AsyncIteratorPrototype%": v,
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
    "%GeneratorFunction%": v,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": V && z ? z(z([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !V || !z ? e : z((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !V || !z ? e : z((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": V && z ? z(""[Symbol.iterator]()) : e,
    "%Symbol%": V ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": D,
    "%TypedArray%": C,
    "%TypeError%": i,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": c,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": q,
    "%Function.prototype.apply%": k,
    "%Object.defineProperty%": O,
    "%Object.getPrototypeOf%": G,
    "%Math.abs%": l,
    "%Math.floor%": u,
    "%Math.max%": d,
    "%Math.min%": y,
    "%Math.pow%": h,
    "%Math.round%": m,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": I
  };
  if (z)
    try {
      null.error;
    } catch (Pe) {
      var S = z(z(Pe));
      A["%Error.prototype%"] = S;
    }
  var W = function Pe(ue) {
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
      Ce && z && (we = z(Ce.prototype));
    }
    return A[ue] = we, we;
  }, _ = {
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
  }, T = So(), X = /* @__PURE__ */ Ov(), ae = T.call(q, Array.prototype.concat), Fe = T.call(k, Array.prototype.splice), Ye = T.call(q, String.prototype.replace), $e = T.call(q, String.prototype.slice), Me = T.call(q, RegExp.prototype.exec), Re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, vt = function(ue) {
    var we = $e(ue, 0, 1), me = $e(ue, -1);
    if (we === "%" && me !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (me === "%" && we !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var Ce = [];
    return Ye(ue, Re, function(Ie, rt, _e, ze) {
      Ce[Ce.length] = _e ? Ye(ze, Ne, "$1") : rt || Ie;
    }), Ce;
  }, bt = function(ue, we) {
    var me = ue, Ce;
    if (X(_, me) && (Ce = _[me], me = "%" + Ce[0] + "%"), X(A, me)) {
      var Ie = A[me];
      if (Ie === v && (Ie = W(me)), typeof Ie > "u" && !we)
        throw new i("intrinsic " + ue + " exists, but is not available. Please file an issue!");
      return {
        alias: Ce,
        name: me,
        value: Ie
      };
    }
    throw new s("intrinsic " + ue + " does not exist!");
  };
  return Ra = function(ue, we) {
    if (typeof ue != "string" || ue.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof we != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (Me(/^%?[^%]*%?$/, ue) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var me = vt(ue), Ce = me.length > 0 ? me[0] : "", Ie = bt("%" + Ce + "%", we), rt = Ie.name, _e = Ie.value, ze = !1, ot = Ie.alias;
    ot && (Ce = ot[0], Fe(me, ae([0, 1], ot)));
    for (var wn = 1, zt = !0; wn < me.length; wn += 1) {
      var it = me[wn], Sn = $e(it, 0, 1), xn = $e(it, -1);
      if ((Sn === '"' || Sn === "'" || Sn === "`" || xn === '"' || xn === "'" || xn === "`") && Sn !== xn)
        throw new s("property names with quotes must have matching quotes");
      if ((it === "constructor" || !zt) && (ze = !0), Ce += "." + it, rt = "%" + Ce + "%", X(A, rt))
        _e = A[rt];
      else if (_e != null) {
        if (!(it in _e)) {
          if (!we)
            throw new i("base intrinsic for " + ue + " exists, but the property is not available.");
          return;
        }
        if (w && wn + 1 >= me.length) {
          var On = w(_e, it);
          zt = !!On, zt && "get" in On && !("originalValue" in On.get) ? _e = On.get : _e = _e[it];
        } else
          zt = X(_e, it), _e = _e[it];
        zt && !ze && (A[rt] = _e);
      }
    }
    return _e;
  }, Ra;
}
var Ia, bu;
function Wd() {
  if (bu) return Ia;
  bu = 1;
  var e = /* @__PURE__ */ hi(), t = Hd(), n = t([e("%String.prototype.indexOf%")]);
  return Ia = function(o, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof s == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Ia;
}
var _a, wu;
function Kd() {
  if (wu) return _a;
  wu = 1;
  var e = /* @__PURE__ */ hi(), t = /* @__PURE__ */ Wd(), n = /* @__PURE__ */ wo(), r = /* @__PURE__ */ qn(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), i = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return _a = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var d, y = {
      assert: function(h) {
        if (!y.has(h))
          throw new r("Side channel does not contain " + n(h));
      },
      delete: function(h) {
        if (d) {
          var m = c(d, h);
          return l(d) === 0 && (d = void 0), m;
        }
        return !1;
      },
      get: function(h) {
        if (d)
          return a(d, h);
      },
      has: function(h) {
        return d ? i(d, h) : !1;
      },
      set: function(h, m) {
        d || (d = new o()), s(d, h, m);
      }
    };
    return y;
  }, _a;
}
var Ba, Su;
function Cv() {
  if (Su) return Ba;
  Su = 1;
  var e = /* @__PURE__ */ hi(), t = /* @__PURE__ */ Wd(), n = /* @__PURE__ */ wo(), r = Kd(), o = /* @__PURE__ */ qn(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), i = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Ba = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var d, y, h = {
        assert: function(m) {
          if (!h.has(m))
            throw new o("Side channel does not contain " + n(m));
        },
        delete: function(m) {
          if (a && m && (typeof m == "object" || typeof m == "function")) {
            if (d)
              return l(d, m);
          } else if (r && y)
            return y.delete(m);
          return !1;
        },
        get: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && d ? s(d, m) : y && y.get(m);
        },
        has: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && d ? c(d, m) : !!y && y.has(m);
        },
        set: function(m, p) {
          a && m && (typeof m == "object" || typeof m == "function") ? (d || (d = new a()), i(d, m, p)) : r && (y || (y = r()), y.set(m, p));
        }
      };
      return h;
    }
  ) : r, Ba;
}
var La, xu;
function Av() {
  if (xu) return La;
  xu = 1;
  var e = /* @__PURE__ */ qn(), t = /* @__PURE__ */ wo(), n = Z0(), r = Kd(), o = Cv(), a = o || r || n;
  return La = function() {
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
  }, La;
}
var Ma, Ou;
function yi() {
  if (Ou) return Ma;
  Ou = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return Ma = {
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
  }, Ma;
}
var Na, Cu;
function Gd() {
  if (Cu) return Na;
  Cu = 1;
  var e = /* @__PURE__ */ yi(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var f = [], g = 0; g < 256; ++g)
      f.push("%" + ((g < 16 ? "0" : "") + g.toString(16)).toUpperCase());
    return f;
  }(), o = function(g) {
    for (; g.length > 1; ) {
      var w = g.pop(), O = w.obj[w.prop];
      if (n(O)) {
        for (var E = [], D = 0; D < O.length; ++D)
          typeof O[D] < "u" && E.push(O[D]);
        w.obj[w.prop] = E;
      }
    }
  }, a = function(g, w) {
    for (var O = w && w.plainObjects ? { __proto__: null } : {}, E = 0; E < g.length; ++E)
      typeof g[E] < "u" && (O[E] = g[E]);
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
    var E = g;
    return n(g) && !n(w) && (E = a(g, O)), n(g) && n(w) ? (w.forEach(function(D, V) {
      if (t.call(g, V)) {
        var z = g[V];
        z && typeof z == "object" && D && typeof D == "object" ? g[V] = f(z, D, O) : g.push(D);
      } else
        g[V] = D;
    }), g) : Object.keys(w).reduce(function(D, V) {
      var z = w[V];
      return t.call(D, V) ? D[V] = f(D[V], z, O) : D[V] = z, D;
    }, E);
  }, i = function(g, w) {
    return Object.keys(w).reduce(function(O, E) {
      return O[E] = w[E], O;
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
  }, l = 1024, u = function(g, w, O, E, D) {
    if (g.length === 0)
      return g;
    var V = g;
    if (typeof g == "symbol" ? V = Symbol.prototype.toString.call(g) : typeof g != "string" && (V = String(g)), O === "iso-8859-1")
      return escape(V).replace(/%u[0-9a-f]{4}/gi, function(C) {
        return "%26%23" + parseInt(C.slice(2), 16) + "%3B";
      });
    for (var z = "", G = 0; G < V.length; G += l) {
      for (var I = V.length >= l ? V.slice(G, G + l) : V, k = [], q = 0; q < I.length; ++q) {
        var v = I.charCodeAt(q);
        if (v === 45 || v === 46 || v === 95 || v === 126 || v >= 48 && v <= 57 || v >= 65 && v <= 90 || v >= 97 && v <= 122 || D === e.RFC1738 && (v === 40 || v === 41)) {
          k[k.length] = I.charAt(q);
          continue;
        }
        if (v < 128) {
          k[k.length] = r[v];
          continue;
        }
        if (v < 2048) {
          k[k.length] = r[192 | v >> 6] + r[128 | v & 63];
          continue;
        }
        if (v < 55296 || v >= 57344) {
          k[k.length] = r[224 | v >> 12] + r[128 | v >> 6 & 63] + r[128 | v & 63];
          continue;
        }
        q += 1, v = 65536 + ((v & 1023) << 10 | I.charCodeAt(q) & 1023), k[k.length] = r[240 | v >> 18] + r[128 | v >> 12 & 63] + r[128 | v >> 6 & 63] + r[128 | v & 63];
      }
      z += k.join("");
    }
    return z;
  }, d = function(g) {
    for (var w = [{ obj: { o: g }, prop: "o" }], O = [], E = 0; E < w.length; ++E)
      for (var D = w[E], V = D.obj[D.prop], z = Object.keys(V), G = 0; G < z.length; ++G) {
        var I = z[G], k = V[I];
        typeof k == "object" && k !== null && O.indexOf(k) === -1 && (w.push({ obj: V, prop: I }), O.push(k));
      }
    return o(w), g;
  }, y = function(g) {
    return Object.prototype.toString.call(g) === "[object RegExp]";
  }, h = function(g) {
    return !g || typeof g != "object" ? !1 : !!(g.constructor && g.constructor.isBuffer && g.constructor.isBuffer(g));
  }, m = function(g, w) {
    return [].concat(g, w);
  }, p = function(g, w) {
    if (n(g)) {
      for (var O = [], E = 0; E < g.length; E += 1)
        O.push(w(g[E]));
      return O;
    }
    return w(g);
  };
  return Na = {
    arrayToObject: a,
    assign: i,
    combine: m,
    compact: d,
    decode: c,
    encode: u,
    isBuffer: h,
    isRegExp: y,
    maybeMap: p,
    merge: s
  }, Na;
}
var ja, Au;
function Ev() {
  if (Au) return ja;
  Au = 1;
  var e = Av(), t = /* @__PURE__ */ Gd(), n = /* @__PURE__ */ yi(), r = Object.prototype.hasOwnProperty, o = {
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
  }, a = Array.isArray, s = Array.prototype.push, i = function(p, f) {
    s.apply(p, a(f) ? f : [f]);
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
  }, y = {}, h = function p(f, g, w, O, E, D, V, z, G, I, k, q, v, C, A, S, W, _) {
    for (var T = f, X = _, ae = 0, Fe = !1; (X = X.get(y)) !== void 0 && !Fe; ) {
      var Ye = X.get(f);
      if (ae += 1, typeof Ye < "u") {
        if (Ye === ae)
          throw new RangeError("Cyclic object value");
        Fe = !0;
      }
      typeof X.get(y) > "u" && (ae = 0);
    }
    if (typeof I == "function" ? T = I(g, T) : T instanceof Date ? T = v(T) : w === "comma" && a(T) && (T = t.maybeMap(T, function(rt) {
      return rt instanceof Date ? v(rt) : rt;
    })), T === null) {
      if (D)
        return G && !S ? G(g, u.encoder, W, "key", C) : g;
      T = "";
    }
    if (d(T) || t.isBuffer(T)) {
      if (G) {
        var $e = S ? g : G(g, u.encoder, W, "key", C);
        return [A($e) + "=" + A(G(T, u.encoder, W, "value", C))];
      }
      return [A(g) + "=" + A(String(T))];
    }
    var Me = [];
    if (typeof T > "u")
      return Me;
    var Re;
    if (w === "comma" && a(T))
      S && G && (T = t.maybeMap(T, G)), Re = [{ value: T.length > 0 ? T.join(",") || null : void 0 }];
    else if (a(I))
      Re = I;
    else {
      var Ne = Object.keys(T);
      Re = k ? Ne.sort(k) : Ne;
    }
    var vt = z ? String(g).replace(/\./g, "%2E") : String(g), bt = O && a(T) && T.length === 1 ? vt + "[]" : vt;
    if (E && a(T) && T.length === 0)
      return bt + "[]";
    for (var Pe = 0; Pe < Re.length; ++Pe) {
      var ue = Re[Pe], we = typeof ue == "object" && ue && typeof ue.value < "u" ? ue.value : T[ue];
      if (!(V && we === null)) {
        var me = q && z ? String(ue).replace(/\./g, "%2E") : String(ue), Ce = a(T) ? typeof w == "function" ? w(bt, me) : bt : bt + (q ? "." + me : "[" + me + "]");
        _.set(f, ae);
        var Ie = e();
        Ie.set(y, _), i(Me, p(
          we,
          Ce,
          w,
          O,
          E,
          D,
          V,
          z,
          w === "comma" && S && a(T) ? null : G,
          I,
          k,
          q,
          v,
          C,
          A,
          S,
          W,
          Ie
        ));
      }
    }
    return Me;
  }, m = function(f) {
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
    var O = n.formatters[w], E = u.filter;
    (typeof f.filter == "function" || a(f.filter)) && (E = f.filter);
    var D;
    if (f.arrayFormat in o ? D = f.arrayFormat : "indices" in f ? D = f.indices ? "indices" : "repeat" : D = u.arrayFormat, "commaRoundTrip" in f && typeof f.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var V = typeof f.allowDots > "u" ? f.encodeDotInKeys === !0 ? !0 : u.allowDots : !!f.allowDots;
    return {
      addQueryPrefix: typeof f.addQueryPrefix == "boolean" ? f.addQueryPrefix : u.addQueryPrefix,
      allowDots: V,
      allowEmptyArrays: typeof f.allowEmptyArrays == "boolean" ? !!f.allowEmptyArrays : u.allowEmptyArrays,
      arrayFormat: D,
      charset: g,
      charsetSentinel: typeof f.charsetSentinel == "boolean" ? f.charsetSentinel : u.charsetSentinel,
      commaRoundTrip: !!f.commaRoundTrip,
      delimiter: typeof f.delimiter > "u" ? u.delimiter : f.delimiter,
      encode: typeof f.encode == "boolean" ? f.encode : u.encode,
      encodeDotInKeys: typeof f.encodeDotInKeys == "boolean" ? f.encodeDotInKeys : u.encodeDotInKeys,
      encoder: typeof f.encoder == "function" ? f.encoder : u.encoder,
      encodeValuesOnly: typeof f.encodeValuesOnly == "boolean" ? f.encodeValuesOnly : u.encodeValuesOnly,
      filter: E,
      format: w,
      formatter: O,
      serializeDate: typeof f.serializeDate == "function" ? f.serializeDate : u.serializeDate,
      skipNulls: typeof f.skipNulls == "boolean" ? f.skipNulls : u.skipNulls,
      sort: typeof f.sort == "function" ? f.sort : null,
      strictNullHandling: typeof f.strictNullHandling == "boolean" ? f.strictNullHandling : u.strictNullHandling
    };
  };
  return ja = function(p, f) {
    var g = p, w = m(f), O, E;
    typeof w.filter == "function" ? (E = w.filter, g = E("", g)) : a(w.filter) && (E = w.filter, O = E);
    var D = [];
    if (typeof g != "object" || g === null)
      return "";
    var V = o[w.arrayFormat], z = V === "comma" && w.commaRoundTrip;
    O || (O = Object.keys(g)), w.sort && O.sort(w.sort);
    for (var G = e(), I = 0; I < O.length; ++I) {
      var k = O[I], q = g[k];
      w.skipNulls && q === null || i(D, h(
        q,
        k,
        V,
        z,
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
        G
      ));
    }
    var v = D.join(w.delimiter), C = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? C += "utf8=%26%2310003%3B&" : C += "utf8=%E2%9C%93&"), v.length > 0 ? C + v : "";
  }, ja;
}
var qa, Eu;
function Pv() {
  if (Eu) return qa;
  Eu = 1;
  var e = /* @__PURE__ */ Gd(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
    return y.replace(/&#(\d+);/g, function(h, m) {
      return String.fromCharCode(parseInt(m, 10));
    });
  }, a = function(y, h, m) {
    if (y && typeof y == "string" && h.comma && y.indexOf(",") > -1)
      return y.split(",");
    if (h.throwOnLimitExceeded && m >= h.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return y;
  }, s = "utf8=%26%2310003%3B", i = "utf8=%E2%9C%93", c = function(h, m) {
    var p = { __proto__: null }, f = m.ignoreQueryPrefix ? h.replace(/^\?/, "") : h;
    f = f.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var g = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, w = f.split(
      m.delimiter,
      m.throwOnLimitExceeded ? g + 1 : g
    );
    if (m.throwOnLimitExceeded && w.length > g)
      throw new RangeError("Parameter limit exceeded. Only " + g + " parameter" + (g === 1 ? "" : "s") + " allowed.");
    var O = -1, E, D = m.charset;
    if (m.charsetSentinel)
      for (E = 0; E < w.length; ++E)
        w[E].indexOf("utf8=") === 0 && (w[E] === i ? D = "utf-8" : w[E] === s && (D = "iso-8859-1"), O = E, E = w.length);
    for (E = 0; E < w.length; ++E)
      if (E !== O) {
        var V = w[E], z = V.indexOf("]="), G = z === -1 ? V.indexOf("=") : z + 1, I, k;
        G === -1 ? (I = m.decoder(V, r.decoder, D, "key"), k = m.strictNullHandling ? null : "") : (I = m.decoder(V.slice(0, G), r.decoder, D, "key"), k = e.maybeMap(
          a(
            V.slice(G + 1),
            m,
            n(p[I]) ? p[I].length : 0
          ),
          function(v) {
            return m.decoder(v, r.decoder, D, "value");
          }
        )), k && m.interpretNumericEntities && D === "iso-8859-1" && (k = o(String(k))), V.indexOf("[]=") > -1 && (k = n(k) ? [k] : k);
        var q = t.call(p, I);
        q && m.duplicates === "combine" ? p[I] = e.combine(p[I], k) : (!q || m.duplicates === "last") && (p[I] = k);
      }
    return p;
  }, l = function(y, h, m, p) {
    var f = 0;
    if (y.length > 0 && y[y.length - 1] === "[]") {
      var g = y.slice(0, -1).join("");
      f = Array.isArray(h) && h[g] ? h[g].length : 0;
    }
    for (var w = p ? h : a(h, m, f), O = y.length - 1; O >= 0; --O) {
      var E, D = y[O];
      if (D === "[]" && m.parseArrays)
        E = m.allowEmptyArrays && (w === "" || m.strictNullHandling && w === null) ? [] : e.combine([], w);
      else {
        E = m.plainObjects ? { __proto__: null } : {};
        var V = D.charAt(0) === "[" && D.charAt(D.length - 1) === "]" ? D.slice(1, -1) : D, z = m.decodeDotInKeys ? V.replace(/%2E/g, ".") : V, G = parseInt(z, 10);
        !m.parseArrays && z === "" ? E = { 0: w } : !isNaN(G) && D !== z && String(G) === z && G >= 0 && m.parseArrays && G <= m.arrayLimit ? (E = [], E[G] = w) : z !== "__proto__" && (E[z] = w);
      }
      w = E;
    }
    return w;
  }, u = function(h, m, p, f) {
    if (h) {
      var g = p.allowDots ? h.replace(/\.([^.[]+)/g, "[$1]") : h, w = /(\[[^[\]]*])/, O = /(\[[^[\]]*])/g, E = p.depth > 0 && w.exec(g), D = E ? g.slice(0, E.index) : g, V = [];
      if (D) {
        if (!p.plainObjects && t.call(Object.prototype, D) && !p.allowPrototypes)
          return;
        V.push(D);
      }
      for (var z = 0; p.depth > 0 && (E = O.exec(g)) !== null && z < p.depth; ) {
        if (z += 1, !p.plainObjects && t.call(Object.prototype, E[1].slice(1, -1)) && !p.allowPrototypes)
          return;
        V.push(E[1]);
      }
      if (E) {
        if (p.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
        V.push("[" + g.slice(E.index) + "]");
      }
      return l(V, m, p, f);
    }
  }, d = function(h) {
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
    var m = typeof h.charset > "u" ? r.charset : h.charset, p = typeof h.duplicates > "u" ? r.duplicates : h.duplicates;
    if (p !== "combine" && p !== "first" && p !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var f = typeof h.allowDots > "u" ? h.decodeDotInKeys === !0 ? !0 : r.allowDots : !!h.allowDots;
    return {
      allowDots: f,
      allowEmptyArrays: typeof h.allowEmptyArrays == "boolean" ? !!h.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof h.allowPrototypes == "boolean" ? h.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof h.allowSparse == "boolean" ? h.allowSparse : r.allowSparse,
      arrayLimit: typeof h.arrayLimit == "number" ? h.arrayLimit : r.arrayLimit,
      charset: m,
      charsetSentinel: typeof h.charsetSentinel == "boolean" ? h.charsetSentinel : r.charsetSentinel,
      comma: typeof h.comma == "boolean" ? h.comma : r.comma,
      decodeDotInKeys: typeof h.decodeDotInKeys == "boolean" ? h.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof h.decoder == "function" ? h.decoder : r.decoder,
      delimiter: typeof h.delimiter == "string" || e.isRegExp(h.delimiter) ? h.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof h.depth == "number" || h.depth === !1 ? +h.depth : r.depth,
      duplicates: p,
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
  return qa = function(y, h) {
    var m = d(h);
    if (y === "" || y === null || typeof y > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var p = typeof y == "string" ? c(y, m) : y, f = m.plainObjects ? { __proto__: null } : {}, g = Object.keys(p), w = 0; w < g.length; ++w) {
      var O = g[w], E = u(O, p[O], m, typeof y == "string");
      f = e.merge(f, E, m);
    }
    return m.allowSparse === !0 ? f : e.compact(f);
  }, qa;
}
var za, Pu;
function kv() {
  if (Pu) return za;
  Pu = 1;
  var e = /* @__PURE__ */ Ev(), t = /* @__PURE__ */ Pv(), n = /* @__PURE__ */ yi();
  return za = {
    formats: n,
    parse: t,
    stringify: e
  }, za;
}
var ku = /* @__PURE__ */ kv();
function Yd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: $v } = Object.prototype, { getPrototypeOf: gi } = Object, { iterator: xo, toStringTag: Xd } = Symbol, Oo = /* @__PURE__ */ ((e) => (t) => {
  const n = $v.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), yt = (e) => (e = e.toLowerCase(), (t) => Oo(t) === e), Co = (e) => (t) => typeof t === e, { isArray: zn } = Array, cr = Co("undefined");
function Dv(e) {
  return e !== null && !cr(e) && e.constructor !== null && !cr(e.constructor) && We(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Jd = yt("ArrayBuffer");
function Tv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Jd(e.buffer), t;
}
const Fv = Co("string"), We = Co("function"), Qd = Co("number"), Ao = (e) => e !== null && typeof e == "object", Rv = (e) => e === !0 || e === !1, Ur = (e) => {
  if (Oo(e) !== "object")
    return !1;
  const t = gi(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Xd in e) && !(xo in e);
}, Iv = yt("Date"), _v = yt("File"), Bv = yt("Blob"), Lv = yt("FileList"), Mv = (e) => Ao(e) && We(e.pipe), Nv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || We(e.append) && ((t = Oo(e)) === "formdata" || // detect form-data instance
  t === "object" && We(e.toString) && e.toString() === "[object FormData]"));
}, jv = yt("URLSearchParams"), [qv, zv, Vv, Uv] = ["ReadableStream", "Request", "Response", "Headers"].map(yt), Hv = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Zd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ef = (e) => !cr(e) && e !== an;
function Ps() {
  const { caseless: e } = ef(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && Zd(t, o) || o;
    Ur(t[a]) && Ur(r) ? t[a] = Ps(t[a], r) : Ur(r) ? t[a] = Ps({}, r) : zn(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && vr(arguments[r], n);
  return t;
}
const Wv = (e, t, n, { allOwnKeys: r } = {}) => (vr(t, (o, a) => {
  n && We(o) ? e[a] = Yd(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), Kv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Gv = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Yv = (e, t, n, r) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && gi(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Xv = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Jv = (e) => {
  if (!e) return null;
  if (zn(e)) return e;
  let t = e.length;
  if (!Qd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Qv = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && gi(Uint8Array)), Zv = (e, t) => {
  const r = (e && e[xo]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, eb = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, tb = yt("HTMLFormElement"), nb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), $u = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), rb = yt("RegExp"), tf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  vr(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, ob = (e) => {
  tf(e, (t, n) => {
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
}, ab = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return zn(e) ? r(e) : r(String(e).split(t)), n;
}, sb = () => {
}, ib = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function lb(e) {
  return !!(e && We(e.append) && e[Xd] === "FormData" && e[xo]);
}
const ub = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ao(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = zn(r) ? [] : {};
        return vr(r, (s, i) => {
          const c = n(s, o + 1);
          !cr(c) && (a[i] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, cb = yt("AsyncFunction"), db = (e) => e && (Ao(e) || We(e)) && We(e.then) && We(e.catch), nf = ((e, t) => e ? setImmediate : t ? ((n, r) => (an.addEventListener("message", ({ source: o, data: a }) => {
  o === an && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), an.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  We(an.postMessage)
), fb = typeof queueMicrotask < "u" ? queueMicrotask.bind(an) : typeof process < "u" && process.nextTick || nf, pb = (e) => e != null && We(e[xo]), N = {
  isArray: zn,
  isArrayBuffer: Jd,
  isBuffer: Dv,
  isFormData: Nv,
  isArrayBufferView: Tv,
  isString: Fv,
  isNumber: Qd,
  isBoolean: Rv,
  isObject: Ao,
  isPlainObject: Ur,
  isReadableStream: qv,
  isRequest: zv,
  isResponse: Vv,
  isHeaders: Uv,
  isUndefined: cr,
  isDate: Iv,
  isFile: _v,
  isBlob: Bv,
  isRegExp: rb,
  isFunction: We,
  isStream: Mv,
  isURLSearchParams: jv,
  isTypedArray: Qv,
  isFileList: Lv,
  forEach: vr,
  merge: Ps,
  extend: Wv,
  trim: Hv,
  stripBOM: Kv,
  inherits: Gv,
  toFlatObject: Yv,
  kindOf: Oo,
  kindOfTest: yt,
  endsWith: Xv,
  toArray: Jv,
  forEachEntry: Zv,
  matchAll: eb,
  isHTMLForm: tb,
  hasOwnProperty: $u,
  hasOwnProp: $u,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: tf,
  freezeMethods: ob,
  toObjectSet: ab,
  toCamelCase: nb,
  noop: sb,
  toFiniteNumber: ib,
  findKey: Zd,
  global: an,
  isContextDefined: ef,
  isSpecCompliantForm: lb,
  toJSONObject: ub,
  isAsyncFn: cb,
  isThenable: db,
  setImmediate: nf,
  asap: fb,
  isIterable: pb
};
function oe(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
N.inherits(oe, Error, {
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const rf = oe.prototype, of = {};
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
  of[e] = { value: e };
});
Object.defineProperties(oe, of);
Object.defineProperty(rf, "isAxiosError", { value: !0 });
oe.from = (e, t, n, r, o, a) => {
  const s = Object.create(rf);
  return N.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (i) => i !== "isAxiosError"), oe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const mb = null;
function ks(e) {
  return N.isPlainObject(e) || N.isArray(e);
}
function af(e) {
  return N.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Du(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = af(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function hb(e) {
  return N.isArray(e) && !e.some(ks);
}
const yb = N.toFlatObject(N, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Eo(e, t, n) {
  if (!N.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = N.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, f) {
    return !N.isUndefined(f[p]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(t);
  if (!N.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (N.isDate(m))
      return m.toISOString();
    if (!c && N.isBlob(m))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(m) || N.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, p, f) {
    let g = m;
    if (m && !f && typeof m == "object") {
      if (N.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (N.isArray(m) && hb(m) || (N.isFileList(m) || N.endsWith(p, "[]")) && (g = N.toArray(m)))
        return p = af(p), g.forEach(function(O, E) {
          !(N.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Du([p], E, a) : s === null ? p : p + "[]",
            l(O)
          );
        }), !1;
    }
    return ks(m) ? !0 : (t.append(Du(f, p, a), l(m)), !1);
  }
  const d = [], y = Object.assign(yb, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: ks
  });
  function h(m, p) {
    if (!N.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(m), N.forEach(m, function(g, w) {
        (!(N.isUndefined(g) || g === null) && o.call(
          t,
          g,
          N.isString(w) ? w.trim() : w,
          p,
          y
        )) === !0 && h(g, p ? p.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!N.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Tu(e) {
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
function vi(e, t) {
  this._pairs = [], e && Eo(e, this, t);
}
const sf = vi.prototype;
sf.append = function(t, n) {
  this._pairs.push([t, n]);
};
sf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Tu);
  } : Tu;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function gb(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function lf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || gb;
  N.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = N.isURLSearchParams(t) ? t.toString() : new vi(t, n).toString(r), a) {
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
    N.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const uf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, vb = typeof URLSearchParams < "u" ? URLSearchParams : vi, bb = typeof FormData < "u" ? FormData : null, wb = typeof Blob < "u" ? Blob : null, Sb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: vb,
    FormData: bb,
    Blob: wb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bi = typeof window < "u" && typeof document < "u", $s = typeof navigator == "object" && navigator || void 0, xb = bi && (!$s || ["ReactNative", "NativeScript", "NS"].indexOf($s.product) < 0), Ob = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cb = bi && window.location.href || "http://localhost", Ab = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bi,
  hasStandardBrowserEnv: xb,
  hasStandardBrowserWebWorkerEnv: Ob,
  navigator: $s,
  origin: Cb
}, Symbol.toStringTag, { value: "Module" })), Be = {
  ...Ab,
  ...Sb
};
function Eb(e, t) {
  return Eo(e, new Be.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Be.isNode && N.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Pb(e) {
  return N.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function kb(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function cf(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), c = a >= n.length;
    return s = !s && N.isArray(o) ? o.length : s, c ? (N.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !i) : ((!o[s] || !N.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && N.isArray(o[s]) && (o[s] = kb(o[s])), !i);
  }
  if (N.isFormData(e) && N.isFunction(e.entries)) {
    const n = {};
    return N.forEachEntry(e, (r, o) => {
      t(Pb(r), o, n, 0);
    }), n;
  }
  return null;
}
function $b(e, t, n) {
  if (N.isString(e))
    try {
      return (t || JSON.parse)(e), N.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const br = {
  transitional: uf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = N.isObject(t);
    if (a && N.isHTMLForm(t) && (t = new FormData(t)), N.isFormData(t))
      return o ? JSON.stringify(cf(t)) : t;
    if (N.isArrayBuffer(t) || N.isBuffer(t) || N.isStream(t) || N.isFile(t) || N.isBlob(t) || N.isReadableStream(t))
      return t;
    if (N.isArrayBufferView(t))
      return t.buffer;
    if (N.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Eb(t, this.formSerializer).toString();
      if ((i = N.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Eo(
          i ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), $b(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || br.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (N.isResponse(t) || N.isReadableStream(t))
      return t;
    if (t && N.isString(t) && (r && !this.responseType || o)) {
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
N.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  br.headers[e] = {};
});
const Db = N.toObjectSet([
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
]), Tb = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Db[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ru = Symbol("internals");
function Xn(e) {
  return e && String(e).trim().toLowerCase();
}
function Hr(e) {
  return e === !1 || e == null ? e : N.isArray(e) ? e.map(Hr) : String(e);
}
function Fb(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Rb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Va(e, t, n, r, o) {
  if (N.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!N.isString(t)) {
    if (N.isString(r))
      return t.indexOf(r) !== -1;
    if (N.isRegExp(r))
      return r.test(t);
  }
}
function Ib(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _b(e, t) {
  const n = N.toCamelCase(" " + t);
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
      const u = Xn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = N.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Hr(i));
    }
    const s = (i, c) => N.forEach(i, (l, u) => a(l, u, c));
    if (N.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (N.isString(t) && (t = t.trim()) && !Rb(t))
      s(Tb(t), n);
    else if (N.isObject(t) && N.isIterable(t)) {
      let i = {}, c, l;
      for (const u of t) {
        if (!N.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = u[0]] = (c = i[l]) ? N.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(i, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Xn(t), t) {
      const r = N.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Fb(o);
        if (N.isFunction(n))
          return n.call(this, o, r);
        if (N.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Xn(t), t) {
      const r = N.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Va(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = Xn(s), s) {
        const i = N.findKey(r, s);
        i && (!n || Va(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return N.isArray(t) ? t.forEach(a) : a(t), o;
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
    return N.forEach(this, (o, a) => {
      const s = N.findKey(r, a);
      if (s) {
        n[s] = Hr(o), delete n[a];
        return;
      }
      const i = t ? Ib(a) : String(a).trim();
      i !== a && delete n[a], n[i] = Hr(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && N.isArray(r) ? r.join(", ") : r);
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
      const i = Xn(s);
      r[i] || (_b(o, s), r[i] = !0);
    }
    return N.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Ke.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(Ke.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
N.freezeMethods(Ke);
function Ua(e, t) {
  const n = this || br, r = t || n, o = Ke.from(r.headers);
  let a = r.data;
  return N.forEach(e, function(i) {
    a = i.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function df(e) {
  return !!(e && e.__CANCEL__);
}
function Vn(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
N.inherits(Vn, oe, {
  __CANCEL__: !0
});
function ff(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new oe(
    "Request failed with status code " + n.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Bb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Lb(e, t) {
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
    const h = u && l - u;
    return h ? Math.round(y * 1e3 / h) : void 0;
  };
}
function Mb(e, t) {
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
const oo = (e, t, n = 3) => {
  let r = 0;
  const o = Lb(50, 250);
  return Mb((a) => {
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
}, Iu = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, _u = (e) => (...t) => N.asap(() => e(...t)), Nb = Be.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Be.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Be.origin),
  Be.navigator && /(msie|trident)/i.test(Be.navigator.userAgent)
) : () => !0, jb = Be.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      N.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), N.isString(r) && s.push("path=" + r), N.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function qb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function pf(e, t, n) {
  let r = !qb(t);
  return e && (r || n == !1) ? zb(e, t) : t;
}
const Bu = (e) => e instanceof Ke ? { ...e } : e;
function pn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, y) {
    return N.isPlainObject(l) && N.isPlainObject(u) ? N.merge.call({ caseless: y }, l, u) : N.isPlainObject(u) ? N.merge({}, u) : N.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, y) {
    if (N.isUndefined(u)) {
      if (!N.isUndefined(l))
        return r(void 0, l, d, y);
    } else return r(l, u, d, y);
  }
  function a(l, u) {
    if (!N.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (N.isUndefined(u)) {
      if (!N.isUndefined(l))
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
  return N.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, y = d(e[u], t[u], u);
    N.isUndefined(y) && d !== i || (n[u] = y);
  }), n;
}
const mf = (e) => {
  const t = pn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = Ke.from(s), t.url = lf(pf(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let c;
  if (N.isFormData(n)) {
    if (Be.hasStandardBrowserEnv || Be.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Be.hasStandardBrowserEnv && (r && N.isFunction(r) && (r = r(t)), r || r !== !1 && Nb(t.url))) {
    const l = o && a && jb.read(a);
    l && s.set(o, l);
  }
  return t;
}, Vb = typeof XMLHttpRequest < "u", Ub = Vb && function(e) {
  return new Promise(function(n, r) {
    const o = mf(e);
    let a = o.data;
    const s = Ke.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: c, onDownloadProgress: l } = o, u, d, y, h, m;
    function p() {
      h && h(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let f = new XMLHttpRequest();
    f.open(o.method.toUpperCase(), o.url, !0), f.timeout = o.timeout;
    function g() {
      if (!f)
        return;
      const O = Ke.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), D = {
        data: !i || i === "text" || i === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: O,
        config: e,
        request: f
      };
      ff(function(z) {
        n(z), p();
      }, function(z) {
        r(z), p();
      }, D), f = null;
    }
    "onloadend" in f ? f.onloadend = g : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, f.onabort = function() {
      f && (r(new oe("Request aborted", oe.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      r(new oe("Network Error", oe.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const D = o.transitional || uf;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new oe(
        E,
        D.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        f
      )), f = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in f && N.forEach(s.toJSON(), function(E, D) {
      f.setRequestHeader(D, E);
    }), N.isUndefined(o.withCredentials) || (f.withCredentials = !!o.withCredentials), i && i !== "json" && (f.responseType = o.responseType), l && ([y, m] = oo(l, !0), f.addEventListener("progress", y)), c && f.upload && ([d, h] = oo(c), f.upload.addEventListener("progress", d), f.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (u = (O) => {
      f && (r(!O || O.type ? new Vn(null, e, f) : O), f.abort(), f = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const w = Bb(o.url);
    if (w && Be.protocols.indexOf(w) === -1) {
      r(new oe("Unsupported protocol " + w + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(a || null);
  });
}, Hb = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(l) {
      if (!o) {
        o = !0, i();
        const u = l instanceof Error ? l : this.reason;
        r.abort(u instanceof oe ? u : new Vn(u instanceof Error ? u.message : u));
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
    return c.unsubscribe = () => N.asap(i), c;
  }
}, Wb = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, Kb = async function* (e, t) {
  for await (const n of Gb(e))
    yield* Wb(n, t);
}, Gb = async function* (e) {
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
  const o = Kb(e, t);
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
}, Po = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hf = Po && typeof ReadableStream == "function", Yb = Po && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), yf = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Xb = hf && yf(() => {
  let e = !1;
  const t = new Request(Be.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Mu = 64 * 1024, Ds = hf && yf(() => N.isReadableStream(new Response("").body)), ao = {
  stream: Ds && ((e) => e.body)
};
Po && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ao[t] && (ao[t] = N.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new oe(`Response type '${t}' is not supported`, oe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Jb = async (e) => {
  if (e == null)
    return 0;
  if (N.isBlob(e))
    return e.size;
  if (N.isSpecCompliantForm(e))
    return (await new Request(Be.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (N.isArrayBufferView(e) || N.isArrayBuffer(e))
    return e.byteLength;
  if (N.isURLSearchParams(e) && (e = e + ""), N.isString(e))
    return (await Yb(e)).byteLength;
}, Qb = async (e, t) => {
  const n = N.toFiniteNumber(e.getContentLength());
  return n ?? Jb(t);
}, Zb = Po && (async (e) => {
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
  } = mf(e);
  l = l ? (l + "").toLowerCase() : "text";
  let h = Hb([o, a && a.toAbortSignal()], s), m;
  const p = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let f;
  try {
    if (c && Xb && n !== "get" && n !== "head" && (f = await Qb(u, r)) !== 0) {
      let D = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), V;
      if (N.isFormData(r) && (V = D.headers.get("content-type")) && u.setContentType(V), D.body) {
        const [z, G] = Iu(
          f,
          oo(_u(c))
        );
        r = Lu(D.body, Mu, z, G);
      }
    }
    N.isString(d) || (d = d ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    m = new Request(t, {
      ...y,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: g ? d : void 0
    });
    let w = await fetch(m);
    const O = Ds && (l === "stream" || l === "response");
    if (Ds && (i || O && p)) {
      const D = {};
      ["status", "statusText", "headers"].forEach((I) => {
        D[I] = w[I];
      });
      const V = N.toFiniteNumber(w.headers.get("content-length")), [z, G] = i && Iu(
        V,
        oo(_u(i), !0)
      ) || [];
      w = new Response(
        Lu(w.body, Mu, z, () => {
          G && G(), p && p();
        }),
        D
      );
    }
    l = l || "text";
    let E = await ao[N.findKey(ao, l) || "text"](w, e);
    return !O && p && p(), await new Promise((D, V) => {
      ff(D, V, {
        data: E,
        headers: Ke.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: m
      });
    });
  } catch (g) {
    throw p && p(), g && g.name === "TypeError" && /Load failed|fetch/i.test(g.message) ? Object.assign(
      new oe("Network Error", oe.ERR_NETWORK, e, m),
      {
        cause: g.cause || g
      }
    ) : oe.from(g, g && g.code, e, m);
  }
}), Ts = {
  http: mb,
  xhr: Ub,
  fetch: Zb
};
N.forEach(Ts, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Nu = (e) => `- ${e}`, e1 = (e) => N.isFunction(e) || e === null || e === !1, gf = {
  getAdapter: (e) => {
    e = N.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let s;
      if (r = n, !e1(n) && (r = Ts[(s = String(n)).toLowerCase()], r === void 0))
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
  adapters: Ts
};
function Ha(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Vn(null, e);
}
function ju(e) {
  return Ha(e), e.headers = Ke.from(e.headers), e.data = Ua.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), gf.getAdapter(e.adapter || br.adapter)(e).then(function(r) {
    return Ha(e), r.data = Ua.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ke.from(r.headers), r;
  }, function(r) {
    return df(r) || (Ha(e), r && r.response && (r.response.data = Ua.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ke.from(r.response.headers))), Promise.reject(r);
  });
}
const vf = "1.9.0", ko = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ko[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qu = {};
ko.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + vf + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
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
ko.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function t1(e, t, n) {
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
const Wr = {
  assertOptions: t1,
  validators: ko
}, wt = Wr.validators;
let cn = class {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = pn(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Wr.assertOptions(r, {
      silentJSONParsing: wt.transitional(wt.boolean),
      forcedJSONParsing: wt.transitional(wt.boolean),
      clarifyTimeoutError: wt.transitional(wt.boolean)
    }, !1), o != null && (N.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Wr.assertOptions(o, {
      encode: wt.function,
      serialize: wt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Wr.assertOptions(n, {
      baseUrl: wt.spelling("baseURL"),
      withXsrfToken: wt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && N.merge(
      a.common,
      a[n.method]
    );
    a && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
      }
    ), n.headers = Ke.concat(s, a);
    const i = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (c = c && p.synchronous, i.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let u, d = 0, y;
    if (!c) {
      const m = [ju.bind(this), void 0];
      for (m.unshift.apply(m, i), m.push.apply(m, l), y = m.length, u = Promise.resolve(n); d < y; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    y = i.length;
    let h = n;
    for (d = 0; d < y; ) {
      const m = i[d++], p = i[d++];
      try {
        h = m(h);
      } catch (f) {
        p.call(this, f);
        break;
      }
    }
    try {
      u = ju.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, y = l.length; d < y; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = pn(this.defaults, t);
    const n = pf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return lf(n, t.params, t.paramsSerializer);
  }
};
N.forEach(["delete", "get", "head", "options"], function(t) {
  cn.prototype[t] = function(n, r) {
    return this.request(pn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, i) {
      return this.request(pn(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  cn.prototype[t] = n(), cn.prototype[t + "Form"] = n(!0);
});
let n1 = class bf {
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
      r.reason || (r.reason = new Vn(a, s, i), n(r.reason));
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
      token: new bf(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function r1(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function o1(e) {
  return N.isObject(e) && e.isAxiosError === !0;
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
Object.entries(Fs).forEach(([e, t]) => {
  Fs[t] = e;
});
function wf(e) {
  const t = new cn(e), n = Yd(cn.prototype.request, t);
  return N.extend(n, cn.prototype, t, { allOwnKeys: !0 }), N.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return wf(pn(e, o));
  }, n;
}
const Oe = wf(br);
Oe.Axios = cn;
Oe.CanceledError = Vn;
Oe.CancelToken = n1;
Oe.isCancel = df;
Oe.VERSION = vf;
Oe.toFormData = Eo;
Oe.AxiosError = oe;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(t) {
  return Promise.all(t);
};
Oe.spread = r1;
Oe.isAxiosError = o1;
Oe.mergeConfig = pn;
Oe.AxiosHeaders = Ke;
Oe.formToJSON = (e) => cf(N.isHTMLForm(e) ? new FormData(e) : e);
Oe.getAdapter = gf.getAdapter;
Oe.HttpStatusCode = Fs;
Oe.default = Oe;
const {
  Axios: BO,
  AxiosError: LO,
  CanceledError: MO,
  isCancel: NO,
  CancelToken: jO,
  VERSION: qO,
  all: zO,
  Cancel: VO,
  isAxiosError: UO,
  spread: HO,
  toFormData: WO,
  AxiosHeaders: KO,
  HttpStatusCode: GO,
  formToJSON: YO,
  getAdapter: XO,
  mergeConfig: JO
} = Oe;
function Rs(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function gt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var zu = (e) => gt("before", { cancelable: !0, detail: { visit: e } }), a1 = (e) => gt("error", { detail: { errors: e } }), s1 = (e) => gt("exception", { cancelable: !0, detail: { exception: e } }), i1 = (e) => gt("finish", { detail: { visit: e } }), l1 = (e) => gt("invalid", { cancelable: !0, detail: { response: e } }), ir = (e) => gt("navigate", { detail: { page: e } }), u1 = (e) => gt("progress", { detail: { progress: e } }), c1 = (e) => gt("start", { detail: { visit: e } }), d1 = (e) => gt("success", { detail: { page: e } }), f1 = (e, t) => gt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), p1 = (e) => gt("prefetching", { detail: { visit: e } }), je = class {
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
var m1 = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = Sf(), n = await xf(), r = await w1(n);
  if (!r) throw new Error("Unable to encrypt history");
  return await y1(t, r, e);
}, Bn = { key: "historyKey", iv: "historyIv" }, h1 = async (e) => {
  let t = Sf(), n = await xf();
  if (!n) throw new Error("Unable to decrypt history");
  return await g1(t, n, e);
}, y1 = async (e, t, n) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), s = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, s.written));
}, g1 = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
  return JSON.parse(new TextDecoder().decode(r));
}, Sf = () => {
  let e = je.get(Bn.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return je.set(Bn.iv, Array.from(t)), t;
}, v1 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), b1 = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  je.set(Bn.key, Array.from(new Uint8Array(t)));
}, w1 = async (e) => {
  if (e) return e;
  let t = await v1();
  return t ? (await b1(t), t) : null;
}, xf = async () => {
  let e = je.get(Bn.key);
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
var Vu = (e) => e instanceof FormData;
function Of(e, t = new FormData(), n = null) {
  e = e || {};
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && Af(t, Cf(n, r), e[r]);
  return t;
}
function Cf(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Af(e, t, n) {
  if (Array.isArray(n)) return Array.from(n.keys()).forEach((r) => Af(e, Cf(t, r.toString()), n[r]));
  if (n instanceof Date) return e.append(t, n.toISOString());
  if (n instanceof File) return e.append(t, n, n.name);
  if (n instanceof Blob) return e.append(t, n);
  if (typeof n == "boolean") return e.append(t, n ? "1" : "0");
  if (typeof n == "string") return e.append(t, n);
  if (typeof n == "number") return e.append(t, `${n}`);
  if (n == null) return e.append(t, "");
  Of(n, e, t);
}
function Kt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var S1 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? Kt(e) : e;
  if ((Is(t) || r) && !Vu(t) && (t = Of(t)), Vu(t)) return [a, t];
  let [s, i] = wi(n, a, t, o);
  return [Kt(s), i];
};
function wi(e, t, n, r = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), i = t.toString().includes("?") || e === "get" && Object.keys(n).length, c = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (l.search = ku.stringify(er(ku.parse(l.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[o ? `${l.protocol}//${l.host}` : "", a ? l.pathname : "", s ? l.pathname.substring(1) : "", i ? l.search : "", c ? l.hash : ""].join(""), n];
}
function so(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Uu = (e, t) => {
  e.hash && !t.hash && so(e).href === t.href && (t.hash = e.hash);
}, _s = (e, t) => so(e).href === so(t).href, x1 = class {
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
      return t = t || _s(Kt(e.url), s), new Promise((i) => {
        t ? fe.replaceState(e, () => i(null)) : fe.pushState(e, () => i(null));
      }).then(() => {
        let i = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, i && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: a, page: e, preserveState: r }).then(() => {
          n || ct.reset(), sn.fireInternalEvent("loadDeferredProps"), t || ir(e);
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
}, te = new x1(), Ef = class {
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
}, nr = typeof window > "u", Jn = new Ef(), Hu = !nr && /CriOS/.test(window.navigator.userAgent), O1 = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    var n;
    this.replaceState({ ...te.get(), rememberedState: { ...((n = te.get()) == null ? void 0 : n.rememberedState) ?? {}, [t]: e } });
  }
  restore(e) {
    var t, n;
    if (!nr) return (n = (t = this.initialState) == null ? void 0 : t[this.rememberedState]) == null ? void 0 : n[e];
  }
  pushState(e, t = null) {
    if (!nr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Jn.add(() => this.getPageData(e).then((n) => {
        let r = () => {
          this.doPushState({ page: n }, e.url), t && t();
        };
        Hu ? setTimeout(r) : r();
      }));
    }
  }
  getPageData(e) {
    return new Promise((t) => e.encryptHistory ? m1(e).then(t) : t(e));
  }
  processQueue() {
    return Jn.process();
  }
  decrypt(e = null) {
    var n;
    if (nr) return Promise.resolve(e ?? te.get());
    let t = e ?? ((n = window.history.state) == null ? void 0 : n.page);
    return this.decryptPageData(t).then((r) => {
      if (!r) throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = r ?? void 0 : this.current = r ?? {}, r;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? h1(e) : Promise.resolve(e);
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
    if (te.merge(e), !nr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, Jn.add(() => this.getPageData(e).then((n) => {
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
    je.remove(Bn.key), je.remove(Bn.iv);
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
var fe = new O1(), C1 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Rs(ct.onWindowScroll.bind(ct), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Rs(ct.onScroll.bind(ct), 100), !0);
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
      let n = Kt(te.get().url);
      n.hash = window.location.hash, fe.replaceState({ ...te.get(), url: n.href }), ct.reset();
      return;
    }
    if (!fe.isValidState(t)) return this.onMissingHistoryItem();
    fe.decrypt(t.page).then((n) => {
      te.setQuietly(n, { preserveState: !1 }).then(() => {
        ct.restore(fe.getScrollRegions()), ir(te.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, sn = new C1(), A1 = class {
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
}, Wa = new A1(), E1 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Wa.isReload() && fe.deleteState(fe.rememberedState);
  }
  static handleBackForward() {
    if (!Wa.isBackForward() || !fe.hasAnyState()) return !1;
    let e = fe.getScrollRegions();
    return fe.decrypt().then((t) => {
      te.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ct.restore(e), ir(te.get());
      });
    }).catch(() => {
      sn.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!je.exists(je.locationVisitKey)) return !1;
    let e = je.get(je.locationVisitKey) || {};
    return je.remove(je.locationVisitKey), typeof window < "u" && te.setUrlHash(window.location.hash), fe.decrypt(te.get()).then(() => {
      let t = fe.getState(fe.rememberedState, {}), n = fe.getScrollRegions();
      te.remember(t), te.set(te.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && ct.restore(n), ir(te.get());
      });
    }).catch(() => {
      sn.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && te.setUrlHash(window.location.hash), te.set(te.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      Wa.isReload() && ct.restore(fe.getScrollRegions()), ir(te.get());
    });
  }
}, P1 = class {
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
}, k1 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    let r = new P1(e, t, n);
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
}, $1 = new k1(), Pf = (e, t, n) => {
  if (e === t) return !0;
  for (let r in e) if (!n.includes(r) && e[r] !== t[r] && !D1(e[r], t[r])) return !1;
  return !0;
}, D1 = (e, t) => {
  switch (typeof e) {
    case "object":
      return Pf(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, T1 = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Wu = (e) => {
  if (typeof e == "number") return e;
  for (let [t, n] of Object.entries(T1)) if (e.endsWith(t)) return parseFloat(e) * n;
  return parseInt(e);
}, F1 = class {
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
    return Pf(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, nn = new F1(), R1 = class kf {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let n = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...n, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new kf(t);
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
}, I1 = { modal: null, listener: null, show(e) {
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
} }, _1 = new Ef(), Ku = class $f {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r;
  }
  static create(t, n, r) {
    return new $f(t, n, r);
  }
  async handlePrefetch() {
    _s(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return _1.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), f1(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await fe.processQueue(), fe.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = te.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let n = this.getScopedErrors(t);
      return a1(n), this.requestParams.all().onError(n);
    }
    d1(te.get()), await this.requestParams.all().onSuccess(te.get()), fe.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      let n = Kt(this.getHeader("x-inertia-location"));
      return Uu(this.requestParams.all().url, n), this.locationVisit(n);
    }
    let t = { ...this.response, data: this.getDataFromResponse(this.response.data) };
    if (l1(t)) return I1.show(t.data);
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
      _s(window.location, t) ? window.location.reload() : window.location.href = t.href;
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
    let n = Kt(this.originatingPage.url), r = Kt(te.get().url);
    return n.origin === r.origin && n.pathname === r.pathname;
  }
  pageUrl(t) {
    let n = Kt(t.url);
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
    this.page = n, this.requestHasFinished = !1, this.requestParams = R1.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new Df(t, n);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), c1(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), p1(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return Oe({ method: this.requestParams.all().method, url: so(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((n) => (this.response = Ku.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n != null && n.response ? (this.response = Ku.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!Oe.isCancel(n) && s1(n)) return Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, i1(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, u1(t), this.requestParams.all().onProgress(t));
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
}, B1 = class {
  constructor() {
    this.syncRequestStream = new Yu({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new Yu({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    te.init({ initialPage: e, resolveComponent: t, swapComponent: n }), E1.handle(), sn.init(), sn.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), sn.on("loadDeferredProps", () => {
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
    } : sn.onGlobalEvent(e, t);
  }
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll() {
    this.asyncRequestStream.cancelInFlight(), this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, n = {}) {
    return $1.add(e, () => this.reload(t), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let n = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !zu(n)) return;
    let o = n.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !te.isCleared() && !n.preserveUrl && ct.save();
    let a = { ...n, ...r }, s = nn.get(a);
    s ? (Xu(s.inFlight), nn.use(s, a)) : (Xu(!0), o.send(Gu.create(a, te.get())));
  }
  getCached(e, t = {}) {
    return nn.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    nn.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    nn.removeAll();
  }
  getPrefetching(e, t = {}) {
    return nn.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, { cacheFor: n = 3e4 }) {
    if (t.method !== "get") throw new Error("Prefetch requests must use the GET method");
    let r = this.getPendingVisit(e, { ...t, async: !0, showProgress: !1, prefetch: !0 }), o = r.url.origin + r.url.pathname + r.url.search, a = window.location.origin + window.location.pathname + window.location.search;
    if (o === a) return;
    let s = this.getVisitEvents(t);
    if (s.onBefore(r) === !1 || !zu(r)) return;
    G1(), this.asyncRequestStream.interruptInFlight();
    let i = { ...r, ...s };
    new Promise((c) => {
      let l = () => {
        te.get() ? c() : setTimeout(l, 50);
      };
      l();
    }).then(() => {
      nn.add(i, (c) => {
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
    let r = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, a] = S1(e, r.data, r.method, r.forceFormData, r.queryStringArrayFormat);
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
}, L1 = { buildDOMElement(e) {
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
}, update: Rs(function(e) {
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
function M1(e, t, n) {
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
    let u = t(""), d = { ...u ? { title: `<title inertia="">${u}</title>` } : {} }, y = Object.values(r).reduce((h, m) => h.concat(m), []).reduce((h, m) => {
      if (m.indexOf("<") === -1) return h;
      if (m.indexOf("<title ") === 0) {
        let f = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return h.title = f ? `${f[1]}${t(f[2])}${f[3]}` : m, h;
      }
      let p = m.match(/ inertia="[^"]+"/);
      return p ? h[p[0]] = m : h[Object.keys(h).length] = m, h;
    }, d);
    return Object.values(y);
  }
  function l() {
    e ? n(c()) : L1.update(c());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let u = a();
    return { update: (d) => i(u, d), disconnect: () => s(u) };
  } };
}
var Ae = "nprogress", De = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Jt = null, N1 = (e) => {
  Object.assign(De, e), De.includeCSS && H1(De.color);
}, $o = (e) => {
  let t = Tf();
  e = Bf(e, De.minimum, 1), Jt = e === 1 ? null : e;
  let n = q1(!t), r = n.querySelector(De.barSelector), o = De.speed, a = De.easing;
  n.offsetWidth, U1((s) => {
    let i = De.positionUsing === "translate3d" ? { transition: `all ${o}ms ${a}`, transform: `translate3d(${Kr(e)}%,0,0)` } : De.positionUsing === "translate" ? { transition: `all ${o}ms ${a}`, transform: `translate(${Kr(e)}%,0)` } : { marginLeft: `${Kr(e)}%` };
    for (let c in i) r.style[c] = i[c];
    if (e !== 1) return setTimeout(s, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        _f(), s();
      }, o);
    }, o);
  });
}, Tf = () => typeof Jt == "number", Ff = () => {
  Jt || $o(0);
  let e = function() {
    setTimeout(function() {
      Jt && (Rf(), e());
    }, De.trickleSpeed);
  };
  De.trickle && e();
}, j1 = (e) => {
  !e && !Jt || (Rf(0.3 + 0.5 * Math.random()), $o(1));
}, Rf = (e) => {
  let t = Jt;
  if (t === null) return Ff();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let n = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let r in n) if (t >= n[r][0] && t < n[r][1]) return parseFloat(r);
    return 0;
  })(), $o(Bf(t + e, 0, 0.994));
}, q1 = (e) => {
  var a;
  if (z1()) return document.getElementById(Ae);
  document.documentElement.classList.add(`${Ae}-busy`);
  let t = document.createElement("div");
  t.id = Ae, t.innerHTML = De.template;
  let n = t.querySelector(De.barSelector), r = e ? "-100" : Kr(Jt || 0), o = If();
  return n.style.transition = "all 0 linear", n.style.transform = `translate3d(${r}%,0,0)`, De.showSpinner || ((a = t.querySelector(De.spinnerSelector)) == null || a.remove()), o !== document.body && o.classList.add(`${Ae}-custom-parent`), o.appendChild(t), t;
}, If = () => V1(De.parent) ? De.parent : document.querySelector(De.parent), _f = () => {
  var e;
  document.documentElement.classList.remove(`${Ae}-busy`), If().classList.remove(`${Ae}-custom-parent`), (e = document.getElementById(Ae)) == null || e.remove();
}, z1 = () => document.getElementById(Ae) !== null, V1 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function Bf(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Kr = (e) => (-1 + e) * 100, U1 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), H1 = (e) => {
  let t = document.createElement("style");
  t.textContent = `
    #${Ae} {
      pointer-events: none;
    }

    #${Ae} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${Ae} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${Ae} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${Ae} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${Ae}-spinner 400ms linear infinite;
    }

    .${Ae}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${Ae}-custom-parent #${Ae} .spinner,
    .${Ae}-custom-parent #${Ae} .bar {
      position: absolute;
    }

    @keyframes ${Ae}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, Rn = (() => {
  if (typeof document > "u") return null;
  let e = document.createElement("style");
  return e.innerHTML = `#${Ae} { display: none; }`, e;
})(), W1 = () => {
  if (Rn && document.head.contains(Rn)) return document.head.removeChild(Rn);
}, K1 = () => {
  Rn && !document.head.contains(Rn) && document.head.appendChild(Rn);
}, Lf = { configure: N1, isStarted: Tf, done: j1, set: $o, remove: _f, start: Ff, status: Jt, show: W1, hide: K1 }, Gr = 0, Xu = (e = !1) => {
  Gr = Math.max(0, Gr - 1), (e || Gr === 0) && Lf.show();
}, G1 = () => {
  Gr++, Lf.hide();
};
function Yr(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var Ct = new B1();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
function Mf(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function Nf(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function Si(e) {
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
function Xr(e, t, n) {
  if (e == null)
    return n;
  switch (typeof t) {
    case "string": {
      const r = e[t];
      return r === void 0 ? Mf(t) ? Xr(e, Si(t), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = Nf(t));
      const r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t))
        return Y1(e, t, n);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function Y1(e, t, n) {
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
const X1 = /^(?:0|[1-9]\d*)$/;
function jf(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return X1.test(e);
  }
}
function J1(e) {
  return e !== null && typeof e == "object" && no(e) === "[object Arguments]";
}
function Q1(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && Mf(t) && (e == null ? void 0 : e[t]) == null ? n = Si(t) : n = [t], n.length === 0)
    return !1;
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if ((r == null || !Object.hasOwn(r, a)) && !((Array.isArray(r) || J1(r)) && jf(a) && a < r.length))
      return !1;
    r = r[a];
  }
  return !0;
}
const Z1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ew = /^\w*$/;
function tw(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || M0(e) ? !0 : typeof e == "string" && (ew.test(e) || !Z1.test(e)) || t != null && Object.hasOwn(t, e);
}
const nw = (e, t, n) => {
  const r = e[t];
  (!(Object.hasOwn(e, t) && Nd(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function rw(e, t, n, r) {
  if (e == null && !Ju(e))
    return e;
  const o = tw(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? Si(t) : [t];
  let a = e;
  for (let s = 0; s < o.length && a != null; s++) {
    const i = Nf(o[s]);
    let c;
    if (s === o.length - 1)
      c = n(a[i]);
    else {
      const l = a[i], u = r(l);
      c = u !== void 0 ? u : Ju(l) ? l : jf(o[s + 1]) ? [] : {};
    }
    nw(a, i, c), a = a[i];
  }
  return e;
}
function Fr(e, t, n) {
  return rw(e, t, () => n, () => {
  });
}
function ow(e, t) {
  let n = typeof e == "string" ? e : null, r = (typeof e == "string" ? t : e) ?? {}, o = n ? Ct.restore(n) : null, a = ut(typeof r == "function" ? r() : r), s = null, i = null, c = (u) => u, l = mr({ ...o ? o.data : ut(a), isDirty: !1, errors: o ? o.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((u, d) => Fr(u, d, Xr(this, d)), {});
  }, transform(u) {
    return c = u, this;
  }, defaults(u, d) {
    if (typeof r == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? (a = ut(this.data()), this.isDirty = !1) : a = typeof u == "string" ? Fr(ut(a), u, d) : Object.assign({}, ut(a), u), this;
  }, reset(...u) {
    let d = ut(typeof r == "function" ? r() : a), y = ut(d);
    return u.length === 0 ? (a = y, Object.assign(this, d)) : u.filter((h) => Q1(y, h)).forEach((h) => {
      Fr(a, h, Xr(y, h)), Fr(this, h, Xr(d, h));
    }), this;
  }, setError(u, d) {
    return Object.assign(this.errors, typeof u == "string" ? { [u]: d } : u), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...u) {
    return this.errors = Object.keys(this.errors).reduce((d, y) => ({ ...d, ...u.length > 0 && !u.includes(y) ? { [y]: this.errors[y] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(...u) {
    let d = typeof u[0] == "object", y = d ? u[0].method : u[0], h = d ? u[0].url : u[1], m = (d ? u[1] : u[2]) ?? {}, p = c(this.data()), f = { ...m, onCancelToken: (g) => {
      if (s = g, m.onCancelToken) return m.onCancelToken(g);
    }, onBefore: (g) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(i), m.onBefore) return m.onBefore(g);
    }, onStart: (g) => {
      if (this.processing = !0, m.onStart) return m.onStart(g);
    }, onProgress: (g) => {
      if (this.progress = g, m.onProgress) return m.onProgress(g);
    }, onSuccess: async (g) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, i = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let w = m.onSuccess ? await m.onSuccess(g) : null;
      return a = ut(this.data()), this.isDirty = !1, w;
    }, onError: (g) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(g), m.onError) return m.onError(g);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, m.onCancel) return m.onCancel();
    }, onFinish: (g) => {
      if (this.processing = !1, this.progress = null, s = null, m.onFinish) return m.onFinish(g);
    } };
    y === "delete" ? Ct.delete(h, { ...f, data: p }) : Ct[y](h, p, f);
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
  return re(l, (u) => {
    l.isDirty = !G0(l.data(), a), n && Ct.remember(ut(u.__remember()), n);
  }, { immediate: !0, deep: !0 }), l;
}
var Je = M(null), Ue = M(null), Ka = pr(null), Rr = M(null), Qu = null;
U({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
  Je.value = t ? ns(t) : null, Ue.value = e, Rr.value = null;
  let a = typeof window > "u";
  return Qu = M1(a, r, o), a || (Ct.init({ initialPage: e, resolveComponent: n, swapComponent: async (s) => {
    Je.value = ns(s.component), Ue.value = s.page, Rr.value = s.preserveState ? Rr.value : Date.now();
  } }), Ct.on("navigate", () => Qu.forceUpdate())), () => {
    if (Je.value) {
      Je.value.inheritAttrs = !!Je.value.inheritAttrs;
      let s = qe(Je.value, { ...Ue.value.props, key: Rr.value });
      return Ka.value && (Je.value.layout = Ka.value, Ka.value = null), Je.value.layout ? typeof Je.value.layout == "function" ? Je.value.layout(qe, s) : (Array.isArray(Je.value.layout) ? Je.value.layout : [Je.value.layout]).concat(s).reverse().reduce((i, c) => (c.inheritAttrs = !!c.inheritAttrs, qe(c, { ...Ue.value.props }, () => i))) : s;
    }
  };
} });
function aw() {
  return mr({ props: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.props;
  }), url: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.url;
  }), component: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.component;
  }), version: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.version;
  }), clearHistory: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.mergeProps;
  }), deepMergeProps: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.deepMergeProps;
  }), rememberedState: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: F(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.encryptHistory;
  }) });
}
var sw = U({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
U({ props: { title: { type: String, required: !1 } }, data() {
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
U({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: [String, Object], required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: n }) {
  let r = M(0), o = M(null), a = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], s = e.cacheFor !== 0 ? e.cacheFor : a.length === 1 && a[0] === "click" ? 0 : 3e4;
  pe(() => {
    a.includes("mount") && p();
  }), Mt(() => {
    clearTimeout(o.value);
  });
  let i = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), c = i !== "get" ? "button" : e.as.toLowerCase(), l = F(() => wi(i, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), u = F(() => l.value[0]), d = F(() => l.value[1]), y = F(() => ({ a: { href: u.value }, button: { type: "button" } })), h = { data: d.value, method: i, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? i !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, m = { ...h, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (O) => {
    r.value++, e.onStart(O);
  }, onProgress: e.onProgress, onFinish: (O) => {
    r.value--, e.onFinish(O);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, p = () => {
    Ct.prefetch(u.value, h, { cacheFor: s });
  }, f = { onClick: (O) => {
    Yr(O) && (O.preventDefault(), Ct.visit(u.value, m));
  } }, g = { onMouseenter: () => {
    o.value = setTimeout(() => {
      p();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(o.value);
  }, onClick: f.onClick }, w = { onMousedown: (O) => {
    Yr(O) && (O.preventDefault(), p());
  }, onMouseup: (O) => {
    O.preventDefault(), Ct.visit(u.value, m);
  }, onClick: (O) => {
    Yr(O) && O.preventDefault();
  } };
  return () => qe(c, { ...n, ...y.value[c] || {}, "data-loading": r.value > 0 ? "" : void 0, ...a.includes("hover") ? g : a.includes("click") ? w : f }, t);
} });
U({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
  return { loaded: !1, fetching: !1, observer: null };
}, unmounted() {
  var e;
  (e = this.observer) == null || e.disconnect();
}, mounted() {
  this.observer = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting || (this.$props.always || this.observer.disconnect(), this.fetching)) return;
    this.fetching = !0;
    let t = this.getReloadParams();
    Ct.reload({ ...t, onStart: (n) => {
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
function ZO(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function iw(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function eC(e) {
  return aw().props.auth.permissions.includes(e);
}
let Bs = null;
function tC(e) {
  Bs = e;
}
function Do() {
  return Bs === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Bs;
}
let Ls = null;
function nC(e) {
  Ls = e;
}
function qf() {
  return Ls === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), Ls;
}
const ft = U({
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
        r = Do();
      } catch {
        console.log("InertiaLink: Router not available, preventing navigation"), r = {
          visit: (l, u) => {
            console.log("InertiaLink: Navigation prevented (docs environment):", l);
          }
        };
      }
      const o = e.as.toLowerCase(), a = e.method.toLowerCase(), [s, i] = wi(
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
            Yr(c) && (c.preventDefault(), r.visit(s, {
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
function lw(e, t) {
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
function uw() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(lw(arguments[t]));
  return e;
}
var cw = /* @__PURE__ */ new Map([
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
function To(e, t) {
  var n = dw(e);
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
function dw(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), o = cw.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var fw = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function pw(e) {
  return wr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, mw(e) && e.dataTransfer ? gw(e.dataTransfer, e.type) : hw(e)];
    });
  });
}
function mw(e) {
  return !!e.dataTransfer;
}
function hw(e) {
  var t = yw(e.target) ? e.target.files ? Ms(e.target.files) : [] : [];
  return t.map(function(n) {
    return To(n);
  });
}
function yw(e) {
  return e !== null;
}
function gw(e, t) {
  return wr(this, void 0, void 0, function() {
    var n, r;
    return Sr(this, function(o) {
      switch (o.label) {
        case 0:
          return e.items ? (n = Ms(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(vw))]) : [3, 2];
        case 1:
          return r = o.sent(), [2, Zu(zf(r))];
        case 2:
          return [2, Zu(Ms(e.files).map(function(a) {
            return To(a);
          }))];
      }
    });
  });
}
function Zu(e) {
  return e.filter(function(t) {
    return fw.indexOf(t.name) === -1;
  });
}
function Ms(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function vw(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ec(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? Vf(t) : ec(e);
}
function zf(e) {
  return e.reduce(function(t, n) {
    return uw(t, Array.isArray(n) ? zf(n) : [n]);
  }, []);
}
function ec(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = To(t);
  return Promise.resolve(n);
}
function bw(e) {
  return wr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, e.isDirectory ? Vf(e) : ww(e)];
    });
  });
}
function Vf(e) {
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
                u = Promise.all(i.map(bw)), o.push(u), a(), d.label = 6;
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
function ww(e) {
  return wr(this, void 0, void 0, function() {
    return Sr(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(o) {
          var a = To(o, e.fullPath);
          n(a);
        }, function(o) {
          r(o);
        });
      })];
    });
  });
}
var Ir = {}, tc;
function Sw() {
  return tc || (tc = 1, Ir.__esModule = !0, Ir.default = function(e, t) {
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
  }), Ir;
}
var xw = Sw();
const Uf = /* @__PURE__ */ Y0(xw);
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
function Ow(e, t, n, r) {
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
function Cw(e, t) {
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
function Ns(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Aw(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function Ew(e) {
  return e.includes("Edge/");
}
function Pw(e) {
  return e === void 0 && (e = window.navigator.userAgent), Aw(e) || Ew(e);
}
function rc(e) {
  e.preventDefault();
}
function _r(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function io(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var kw = "file-invalid-type", $w = "file-too-large", Dw = "file-too-small", Tw = "too-many-files", Fw = {
  code: Tw,
  message: "Too many files"
}, Rw = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: kw,
    message: "File type must be ".concat(t)
  };
};
function Qn(e) {
  return e != null;
}
var Iw = Uf.default, _w = Iw || Uf;
function Hf(e, t) {
  var n = e.type === "application/x-moz-file" || _w(e, t);
  return [n, n ? null : Rw(t)];
}
var oc = function(e) {
  return {
    code: $w,
    message: "File is larger than ".concat(e, " bytes")
  };
}, ac = function(e) {
  return {
    code: Dw,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Wf(e, t, n) {
  if (Qn(e.size) && e.size)
    if (Qn(t) && Qn(n)) {
      if (e.size > n)
        return [!1, oc(n)];
      if (e.size < t)
        return [!1, ac(t)];
    } else {
      if (Qn(t) && e.size < t)
        return [!1, ac(t)];
      if (Qn(n) && e.size > n)
        return [!1, oc(n)];
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
      return !io(n) && a && a.apply(void 0, Ns([n], r, !1)), io(n);
    });
  };
}
function Bw(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, s = e.maxFiles;
  return !a && t.length > 1 || a && s >= 1 && t.length > s ? !1 : t.every(function(i) {
    var c = Hf(i, n)[0], l = Wf(i, r, o)[0];
    return c && l;
  });
}
var Lw = {
  disabled: !1,
  getFilesFromEvent: pw,
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
function Kf(e) {
  e === void 0 && (e = {});
  var t = M(Qe(Qe({}, Lw), e));
  re(function() {
    return Qe({}, e);
  }, function(k) {
    t.value = Qe(Qe({}, t.value), k);
  });
  var n = M(), r = M(), o = mr({
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
    var k = t.value.onFileDialogCancel;
    o.isFileDialogActive && setTimeout(function() {
      if (r.value) {
        var q = r.value.files;
        q && !q.length && (o.isFileDialogActive = !1, typeof k == "function" && k());
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
    var k = t.value.noClick;
    k || (Pw() ? setTimeout(a, 0) : a());
  }
  var u = M([]), d = function(k) {
    if (n.value) {
      var q = n.value.$el || n.value;
      q.contains(k.target) || (k.preventDefault(), u.value = []);
    }
  };
  pe(function() {
    window.addEventListener("focus", s, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.addEventListener("dragover", rc, !1), document.addEventListener("drop", d, !1));
  }), Mt(function() {
    window.removeEventListener("focus", s, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.removeEventListener("dragover", rc), document.removeEventListener("drop", d));
  });
  function y(k) {
    var q = t.value.noDragEventsBubbling;
    q && k.stopPropagation();
  }
  function h(k) {
    return Ow(this, void 0, void 0, function() {
      var q, v, C, A, S;
      return Cw(this, function(W) {
        switch (W.label) {
          case 0:
            return q = t.value, v = q.getFilesFromEvent, C = q.noDragEventsBubbling, A = q.onDragEnter, k.preventDefault(), y(k), u.value = Ns(Ns([], u.value, !0), [k.target], !1), _r(k) ? v ? [4, v(k)] : [2] : [3, 2];
          case 1:
            if (S = W.sent(), S || (S = []), io(k) && !C)
              return [2];
            o.draggedFiles = S, o.isDragActive = !0, A && A(k), W.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(k) {
    var q = t.value.onDragOver;
    if (k.preventDefault(), y(k), k.dataTransfer)
      try {
        k.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return _r(k) && q && q(k), !1;
  }
  function p(k) {
    k.preventDefault(), y(k);
    var q = u.value.filter(function(A) {
      if (!n.value)
        return !1;
      var S = n.value.$el || n.value;
      return S.contains(A);
    }), v = q.indexOf(k.target);
    if (v !== -1 && q.splice(v, 1), u.value = q, !(q.length > 0)) {
      o.draggedFiles = [], o.isDragActive = !1;
      var C = t.value.onDragLeave;
      _r(k) && C && C(k);
    }
  }
  function f(k) {
    k.preventDefault(), y(k), u.value = [];
    var q = t.value, v = q.getFilesFromEvent, C = q.noDragEventsBubbling, A = q.accept, S = q.minSize, W = q.maxSize, _ = q.multiple, T = q.maxFiles, X = q.onDrop, ae = q.onDropRejected, Fe = q.onDropAccepted;
    if (_r(k)) {
      if (!v)
        return;
      Promise.resolve(v(k)).then(function(Ye) {
        if (!(io(k) && !C)) {
          var $e = [], Me = [];
          Ye.forEach(function(Re) {
            var Ne = Hf(Re, A), vt = Ne[0], bt = Ne[1], Pe = Wf(Re, S, W), ue = Pe[0], we = Pe[1];
            if (vt && ue)
              $e.push(Re);
            else {
              var me = [bt, we].filter(function(Ce) {
                return Ce;
              });
              Me.push({ file: Re, errors: me });
            }
          }), (!_ && $e.length > 1 || _ && T >= 1 && $e.length > T) && ($e.forEach(function(Re) {
            Me.push({ file: Re, errors: [Fw] });
          }), $e.splice(0)), o.acceptedFiles = $e, o.fileRejections = Me, X && X($e, Me, k), Me.length > 0 && ae && ae(Me, k), $e.length > 0 && Fe && Fe($e, k);
        }
      });
    }
    o.isFileDialogActive = !1, o.isDragActive = !1, o.draggedFiles = [], o.acceptedFiles = [], o.fileRejections = [];
  }
  var g = function(k) {
    return t.value.disabled ? void 0 : k;
  }, w = function(k) {
    return t.value.noKeyboard ? void 0 : g(k);
  }, O = function(k) {
    return t.value.noDrag ? void 0 : g(k);
  }, E = function(k) {
    k === void 0 && (k = {});
    var q = k.onFocus, v = k.onBlur, C = k.onClick, A = k.onDragEnter, S = k.onDragenter, W = k.onDragOver, _ = k.onDragover, T = k.onDragLeave, X = k.onDragleave, ae = k.onDrop, Fe = nc(k, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Qe(Qe({ onFocus: w(Dt(q, i)), onBlur: w(Dt(v, c)), onClick: g(Dt(C, l)), onDragenter: O(Dt(A, S, h)), onDragover: O(Dt(W, _, m)), onDragleave: O(Dt(T, X, p)), onDrop: O(Dt(ae, f)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Fe);
  }, D = function(k) {
    k.stopPropagation();
  };
  function V(k) {
    k === void 0 && (k = {});
    var q = k.onChange, v = k.onClick, C = nc(k, ["onChange", "onClick"]), A = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: g(Dt(q, f)),
      onClick: g(Dt(v, D)),
      autoComplete: "off",
      tabIndex: -1,
      ref: r
    };
    return Qe(Qe({}, A), C);
  }
  var z = F(function() {
    return o.draggedFiles ? o.draggedFiles.length : 0;
  }), G = F(function() {
    return z.value > 0 && Bw({
      files: o.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), I = F(function() {
    return z.value > 0 && !G.value;
  });
  return Qe(Qe({}, Nt(o)), { isDragAccept: G, isDragReject: I, isFocused: F(function() {
    return o.isFocused && !t.value.disabled;
  }), getRootProps: E, getInputProps: V, rootRef: n, inputRef: r, open: g(a) });
}
const Mw = { class: "flex w-full flex-col" }, Nw = {
  key: 0,
  class: "text-black select-none"
}, jw = ["name"], qw = {
  key: 1,
  class: "select-none"
}, zw = { key: 2 }, Vw = {
  key: 3,
  class: "select-none"
}, rC = {
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
    Do();
    const t = e, n = M(null), r = (l) => {
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
    }, { getRootProps: a, getInputProps: s, isDragActive: i, ...c } = Kf({
      onDrop: o,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, u) => {
      var d;
      return x(), P("div", Mw, [
        $("div", {
          class: J(["border-primary-200 bg-primary-50 text-primary-200 hover:border-primary-600 hover:text-primary w-full rounded-lg border-2 border-dashed transition duration-100 ease-in-out", {
            "border-primary-400 bg-primary-100": b(i),
            "bg-primary-100 border-red-600": t.form.errors[e.field] ?? n.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          $("div", ie({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, b(a)()), [
            e.label ? (x(), P("p", Nw, Q(e.label), 1)) : Y("", !0),
            $("input", ie(b(s)(), { name: e.field }), null, 16, jw),
            b(i) ? (x(), P("span", qw, "Drop the " + Q(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (x(), P("span", zw, Q(((d = e.form[e.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (x(), P("span", Vw, "Drag 'n' drop " + Q(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        Z(b(en), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, Uw = { class: "flex w-full" }, Hw = { key: 0 }, Ww = { key: 1 }, Kw = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, Gw = ["onClick"], Yw = ["src"], Xw = ["value"], Jw = { class: "flex items-center gap-4" }, Qw = {
  key: 0,
  class: "text-sm text-gray-600"
}, Zw = {
  key: 1,
  class: "mt-2"
}, e2 = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, t2 = { class: "-m-1 flex flex-wrap md:-m-2" }, n2 = { class: "h-full w-full p-1 shadow md:p-2" }, r2 = ["src"], oC = /* @__PURE__ */ U({
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
    const t = Do(), n = e, r = ow({
      image: []
    }), o = (h, m) => `/${h.replace(".", "/")}${m ? `/${m}` : ""}`;
    function a() {
      let h = new FormData();
      r.image.forEach((m, p) => {
        h.append(`image[${p}]`, m.file);
      }), h.append("item_type", n.itemType || ""), h.append("item_id", String(n.itemId || "")), t.post(o(n.endPoint), h, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        forceFormData: !0,
        onFinish: () => {
          r.recentlySuccessful = !0, r.image = [];
        }
      });
    }
    function s(h) {
      h.forEach((m) => {
        let p = new FileReader();
        p.onload = (f) => {
          r.image.push({ file: m, dataUrl: f.target.result });
        }, p.readAsDataURL(m);
      });
    }
    const i = (h, m) => {
      if (m && m.length > 0) {
        console.error(m);
        return;
      }
      s(h);
    };
    function c(h) {
      r.image.splice(h, 1);
    }
    const { getRootProps: l, getInputProps: u, isDragActive: d } = Kf({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    }), y = M(!1);
    return (h, m) => (x(), P(ne, null, [
      e.canUpload ? (x(), P("form", {
        key: 0,
        onSubmit: St(a, ["prevent"]),
        class: "w-full"
      }, [
        $("div", Uw, [
          $("div", {
            class: J(["border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary w-full rounded-l-lg border-2 border-r-0 border-dashed transition duration-100 ease-in-out", { "border-primary-400 bg-primary-100": y.value }])
          }, [
            $("div", ie({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, b(l)()), [
              $("input", ve(Ee(b(u)())), null, 16),
              b(d) ? (x(), P("span", Hw, "Drop the files here ...")) : (x(), P("span", Ww, "Drag 'n' drop images here"))
            ], 16),
            b(r).image.length > 0 ? (x(), P("div", Kw, [
              (x(!0), P(ne, null, be(b(r).image, (p, f) => (x(), P("div", {
                class: "relative cursor-pointer select-none",
                onClick: (g) => c(f),
                key: f
              }, [
                m[0] || (m[0] = $("div", { class: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                $("img", {
                  src: p.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, Yw)
              ], 8, Gw))), 128))
            ])) : Y("", !0)
          ], 2),
          Z(b(wO), {
            class: J(["inline rounded-l-none", { "cursor-not-allowed": b(r).image.length == 0 }]),
            disabled: b(r).image.length == 0
          }, {
            default: B(() => m[1] || (m[1] = [
              ce(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          b(r).progress ? (x(), P("progress", {
            key: 0,
            value: b(r).progress.percentage,
            max: "100"
          }, Q(b(r).progress.percentage) + "%", 9, Xw)) : Y("", !0)
        ]),
        h.$page.props.errors.image ? (x(), H(b(en), {
          key: 0,
          class: "mt-2",
          message: h.$page.props.errors.image
        }, null, 8, ["message"])) : Y("", !0),
        $("div", Jw, [
          Z(un, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: B(() => [
              b(r).recentlySuccessful ? (x(), P("p", Qw, "Images uploaded.")) : Y("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Y("", !0),
      e.images.length ? (x(), P("div", Zw, [
        m[3] || (m[3] = $("hr", null, null, -1)),
        $("div", e2, [
          $("div", t2, [
            (x(!0), P(ne, null, be(e.images, (p, f) => (x(), P("div", {
              key: f,
              class: "flex w-1/3 flex-wrap"
            }, [
              $("div", n2, [
                $("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: p.url
                }, null, 8, r2),
                e.canUpload ? (x(), H(b(ft), {
                  key: 0,
                  href: o("images.delete", p.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700",
                  as: "button"
                }, {
                  default: B(() => m[2] || (m[2] = [
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
}), o2 = { class: "flex items-center space-x-3" }, a2 = ["id", "name", "value", "checked"], s2 = ["for"], aC = /* @__PURE__ */ U({
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
    }, a = F(() => r.form && r.field ? r.form[r.field] === r.value : r.modelValue === r.value), s = F(() => r.id || `radio-${r.field || "radio"}-${r.value}`);
    return (i, c) => (x(), P("div", o2, [
      $("input", {
        id: s.value,
        type: "radio",
        name: i.name || i.field,
        value: i.value,
        checked: a.value,
        onChange: o,
        class: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
      }, null, 40, a2),
      $("label", {
        for: s.value,
        class: "cursor-pointer text-sm font-medium text-gray-700"
      }, Q(i.label), 9, s2)
    ]));
  }
}), Gf = {
  START: "start"
}, Se = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
  NO_STYLE: "no-style"
}, i2 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, lo = /* @__PURE__ */ U({
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
      return x(), H(b(bn), {
        theme: t.theme,
        disabled: t.loading || ((r = t.form) == null ? void 0 : r.processing) || t.disabled,
        type: t.type,
        "custom-class": `relative ${t.customButtonClass}`,
        size: t.size,
        class: "focusable"
      }, {
        default: B(() => {
          var o, a;
          return [
            $("div", {
              class: J({ "opacity-25": ((o = t.form) == null ? void 0 : o.processing) || t.loading })
            }, [
              j(t.$slots, "default")
            ], 2),
            (a = t.form) != null && a.processing || t.loading ? (x(), P("div", i2, [
              Z(b(qi), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : Y("", !0)
          ];
        }),
        _: 3
      }, 8, ["theme", "disabled", "type", "custom-class", "size"]);
    };
  }
}), l2 = { class: "w-full" }, u2 = ["id"], c2 = ["disabled"], d2 = { key: 0 }, f2 = { key: 1 }, p2 = { class: "ml-2 w-2" }, m2 = {
  class: "absolute z-1000 -mt-1! hidden min-w-full bg-white data-te-dropdown-show:block",
  "data-te-dropdown-menu-ref": ""
}, h2 = { class: "float-left m-0 box-border max-h-80 min-w-full list-none overflow-auto rounded rounded-t-none border border-t-0 border-gray-300 bg-clip-padding text-left text-base shadow" }, y2 = ["onClick"], sC = {
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
    return (c, l) => (x(), P("div", l2, [
      !e.noLabel && (e.label || e.field) ? (x(), H(b(jn), {
        key: 0,
        for: e.id ?? e.field,
        value: o(e.label ?? e.field)
      }, null, 8, ["for", "value"])) : Y("", !0),
      $("div", {
        class: "model-list relative flex w-full min-w-[10rem]",
        "data-te-dropdown-ref": "",
        id: e.id ?? e.field
      }, [
        $("button", {
          class: "aria-expanded:border-accent-500 aria-expanded:outline-accent-500 flex h-10 w-full items-center justify-between rounded border border-gray-300 px-3 py-2 pr-5 text-base leading-normal whitespace-nowrap shadow outline outline-1 outline-transparent transition duration-150 ease-in-out aria-expanded:rounded-b-none motion-reduce:transition-none",
          type: "button",
          "data-te-dropdown-toggle-ref": "",
          "data-te-auto-close": "outside",
          "data-te-dropdown-animation": "off",
          "aria-expanded": "false",
          disabled: e.isDisabled
        }, [
          i().length > 0 ? (x(), P("span", d2, Q(i().length) + " selected", 1)) : (x(), P("span", f2, Q(e.placeholder), 1)),
          $("span", p2, [
            Z(b(xe), {
              icon: b(Qs),
              class: "h-5 w-5"
            }, null, 8, ["icon"])
          ])
        ], 8, c2),
        $("div", m2, [
          $("ul", h2, [
            (x(!0), P(ne, null, be(e.list, (u) => (x(), P("li", {
              onClick: (d) => a(u),
              key: u[e.optionValue],
              class: "flex w-full min-w-full cursor-pointer items-center justify-start border-t border-gray-50 px-4 py-3 text-sm leading-4 font-normal hover:bg-[rgba(0,0,0,.03)]"
            }, [
              $("div", {
                class: J(["mr-2 -ml-2 h-4 w-4 rounded border", s(u) ? "bg-primary" : "bg-white"])
              }, null, 2),
              ce(" " + Q(u[e.optionText]), 1)
            ], 8, y2))), 128))
          ])
        ])
      ], 8, u2),
      Z(b(en), {
        message: e.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
function Yf(e = { column: null, direction: "asc" }, t = !0) {
  const n = M({ ...e }), r = Do(), o = () => {
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
    sortState: F(() => n.value),
    sort: a,
    getSortDirection: s,
    isSorted: i
  };
}
function g2(e = !1, t = []) {
  const n = M([...t]), r = (l) => {
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
    selected: F(() => n.value),
    select: r,
    selectAll: o,
    deselectAll: a,
    isSelected: s,
    isAllSelected: i,
    isIndeterminate: c
  };
}
function Xf(e = !1, t = 0) {
  const n = M(null), r = M(null), o = M(null), a = M(!1), s = () => {
    if (!n.value || !r.value || !o.value || !(typeof e == "boolean" ? e : e.value)) return;
    const d = n.value.getBoundingClientRect(), y = d.top <= t && d.bottom > t;
    y !== a.value && (a.value = y, y ? (i(), o.value.style.display = "block", o.value.style.top = `${t}px`, o.value.style.width = `${n.value.offsetWidth}px`) : o.value.style.display = "none");
  }, i = () => {
    if (!r.value || !o.value) return;
    const u = r.value.querySelector("tr");
    if (!u) return;
    o.value.innerHTML = "";
    const d = u.cloneNode(!0), y = u.querySelectorAll("th"), h = d.querySelectorAll("th");
    y.forEach((m, p) => {
      h[p] && (h[p].style.width = `${m.offsetWidth}px`);
    }), o.value.appendChild(d), d.addEventListener("click", (m) => {
      const f = m.target.closest("th");
      if (f) {
        const g = Array.from(h).indexOf(f);
        g > -1 && y[g] && y[g].click();
      }
    });
  }, c = () => {
    s();
  }, l = () => {
    Te(() => {
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
    isSticky: F(() => a.value),
    updateStickyState: s
  };
}
function Jf(e, t = {}) {
  const n = qf(), r = F(() => {
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
  }), o = F(() => {
    var c;
    return ((c = r.value) == null ? void 0 : c.data) || [];
  }), a = F(() => {
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
  }), s = F(() => o.value.length === 0), i = F(() => (t.defer, !1));
  return {
    data: r,
    rows: o,
    pagination: a,
    isEmpty: s,
    isLoading: i
  };
}
function v2(e = {}) {
  const t = e.sortable ?? !1, n = e.selectable ?? !1, r = e.multiple ?? !1, o = e.sticky ?? !1, a = t ? Yf() : null, s = n ? g2(r) : null, i = o ? Xf(o) : null, c = e.resource ? Jf(e.resource, {
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
const b2 = ["id"], w2 = {
  key: 0,
  class: "px-4 pt-4 text-sm text-gray-600"
}, S2 = {
  key: 1,
  class: "mt-6"
}, x2 = 60, O2 = /* @__PURE__ */ U({
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
    const t = e, n = F(() => ({
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
    } = Xf(F(() => n.value.sticky), x2), c = F(() => [
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
    ]), l = F(() => [
      "w-full overflow-x-auto",
      {
        "rounded-lg border border-gray-200 bg-white shadow-sm": t.variant === "elevated",
        "border border-gray-200 rounded-lg": t.bordered && t.variant !== "elevated"
      }
    ]), u = F(() => [
      "w-full",
      {
        "!visible hidden": n.value.collapsible
      }
    ]);
    pe(() => {
      n.value.sticky && i();
    });
    const d = F(() => {
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
    }), y = F(() => {
      var h, m;
      return t.showPagination && (((m = (h = d.value) == null ? void 0 : h.links) == null ? void 0 : m.length) || 0) > 0;
    });
    return (h, m) => {
      var p;
      return x(), P("div", {
        class: J(u.value),
        id: n.value.collapseId,
        "data-te-collapse-item": ""
      }, [
        t.total != null ? (x(), P("div", w2, " Found: " + Q(t.total), 1)) : Y("", !0),
        $("div", {
          class: J(l.value),
          ref_key: "tableRef",
          ref: r
        }, [
          $("table", {
            class: J(c.value),
            ref_key: "headerRef",
            ref: o
          }, [
            n.value.sticky ? (x(), P("div", {
              key: 0,
              ref_key: "stickyRef",
              ref: a,
              class: J(["fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow", {
                "max-sm:hidden": t.responsive
              }])
            }, null, 2)) : Y("", !0),
            j(h.$slots, "default")
          ], 2)
        ], 2),
        y.value ? (x(), P("div", S2, [
          h.$slots.pagination ? j(h.$slots, "pagination", { key: 0 }) : (x(), H(b(Np), {
            key: 1,
            links: ((p = d.value) == null ? void 0 : p.links) || [],
            showPerPage: t.showPerPage,
            defaultPerPage: t.defaultPerPage
          }, null, 8, ["links", "showPerPage", "defaultPerPage"]))
        ])) : Y("", !0)
      ], 10, b2);
    };
  }
}), C2 = /* @__PURE__ */ U({
  __name: "Thead",
  props: {
    sticky: { type: Boolean, default: !1 },
    responsive: { type: Boolean, default: !0 },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, n = F(() => [
      "bg-gray-50 border-b border-gray-200",
      {
        "hidden sm:table-header-group": t.responsive,
        "sticky top-0 z-10": t.sticky
      }
    ]);
    return (r, o) => (x(), P("thead", {
      class: J(n.value)
    }, [
      j(r.$slots, "default")
    ], 2));
  }
}), A2 = { key: 0 }, E2 = { key: 1 }, P2 = { key: 1 }, k2 = { key: 0 }, $2 = /* @__PURE__ */ U({
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
    const t = e, n = typeof t.data == "string" ? Jf(t.data) : null, r = F(() => {
      var c;
      return Array.isArray(t.data) ? t.data : typeof t.data == "string" && n ? t.recordsFromPagination ? (c = n.data.value) == null ? void 0 : c.data : n.rows.value : [];
    }), o = F(() => Array.isArray(r.value) && r.value.length === 0), a = F(() => {
      const c = t.data !== void 0;
      return !t.hideNoRecordsMessage && c && o.value;
    }), s = F(() => !t.hidePlaceholder && (t.loading || (n == null ? void 0 : n.isLoading.value))), i = F(() => !t.ignoreDefer && typeof t.data == "string");
    return F(() => r.value), (c, l) => i.value ? (x(), P("tbody", P2, [
      Z(b(sw), {
        data: typeof t.data == "string" ? t.data : ""
      }, {
        fallback: B(() => [
          t.hidePlaceholder ? Y("", !0) : (x(), H(b(sc), {
            key: 0,
            placeholders: c.loadingRows
          }, null, 8, ["placeholders"]))
        ]),
        default: B(() => [
          a.value ? (x(), P("tr", k2, [
            Z(b(uo), {
              colspan: "999",
              class: "text-center text-gray-500 py-8"
            }, {
              default: B(() => [
                ce(Q(t.emptyMessage || t.noRecordsMessage), 1)
              ]),
              _: 1
            })
          ])) : Y("", !0),
          j(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ])) : (x(), P("tbody", A2, [
      s.value ? (x(), H(b(sc), {
        key: 0,
        placeholders: c.loadingRows
      }, null, 8, ["placeholders"])) : a.value ? (x(), P("tr", E2, [
        Z(b(uo), {
          colspan: "999",
          class: "text-center text-gray-500 py-8"
        }, {
          default: B(() => [
            ce(Q(t.emptyMessage || t.noRecordsMessage), 1)
          ]),
          _: 1
        })
      ])) : j(c.$slots, "default", { key: 2 })
    ]));
  }
}), D2 = { class: "flex items-center justify-between" }, T2 = {
  key: 0,
  class: "sort-arrows ml-2 flex flex-col items-center"
}, F2 = /* @__PURE__ */ U({
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
    const t = e, n = F(() => t.column || t.orderBy), { getSortDirection: r, isSorted: o, sort: a } = Yf(), s = F(() => n.value ? r(n.value) : null), i = F(() => n.value ? o(n.value) : !1), c = F(() => t.sortable && n.value), l = () => {
      !c.value || !n.value || a(n.value);
    }, u = (h) => s.value === h && i.value ? "text-blue-600" : "text-gray-400", d = F(() => [
      "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50",
      {
        "cursor-pointer hover:bg-gray-100": c.value,
        "text-left": t.align === "left",
        "text-center": t.align === "center",
        "text-right": t.align === "right",
        "w-0": t.width === "auto"
      },
      t.width && t.width !== "auto" ? `w-${t.width}` : ""
    ]), y = F(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (h, m) => (x(), P("th", {
      scope: "col",
      class: J(d.value),
      style: et(y.value),
      onClick: l
    }, [
      $("div", D2, [
        j(h.$slots, "default"),
        c.value ? (x(), P("span", T2, [
          (x(), P("svg", {
            class: J(["h-3 w-3 -mb-1", u("asc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, m[0] || (m[0] = [
            $("path", { d: "M6 3L2 7h8L6 3z" }, null, -1)
          ]), 2)),
          (x(), P("svg", {
            class: J(["h-3 w-3", u("desc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, m[1] || (m[1] = [
            $("path", { d: "M6 9L2 5h8L6 9z" }, null, -1)
          ]), 2))
        ])) : Y("", !0)
      ])
    ], 6));
  }
}), R2 = {
  key: 0,
  class: "sm:hidden"
}, I2 = { class: "font-medium text-gray-500" }, _2 = { class: "ml-2" }, B2 = { key: 1 }, uo = /* @__PURE__ */ U({
  __name: "Td",
  props: {
    align: { default: "left" },
    responsive: { type: Boolean, default: !0 },
    label: {},
    width: {},
    nowrap: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = F(() => [
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
    ]), r = F(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (o, a) => (x(), P("td", {
      class: J(n.value),
      style: et(r.value)
    }, [
      t.label && t.responsive ? (x(), P("div", R2, [
        $("span", I2, Q(t.label) + ":", 1),
        $("span", _2, [
          j(o.$slots, "default")
        ])
      ])) : (x(), P("div", B2, [
        j(o.$slots, "default")
      ]))
    ], 6));
  }
}), L2 = ["data-te-target", "aria-controls"], iC = /* @__PURE__ */ U({
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => (x(), P("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + t.collapse_id,
      "aria-expanded": "false",
      "aria-controls": t.collapse_id
    }, [
      j(t.$slots, "default")
    ], 8, L2));
  }
}), M2 = { colspan: "999" }, N2 = ["id"], lC = /* @__PURE__ */ U({
  __name: "TrCollapse",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => (x(), P("tr", null, [
      $("td", M2, [
        $("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          j(t.$slots, "default")
        ], 8, N2)
      ])
    ]));
  }
}), sc = /* @__PURE__ */ U({
  __name: "TrPlaceholder",
  props: {
    placeholders: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(!0), P(ne, null, be(t.placeholders, (o) => (x(), P("tr", { key: o }, [
      Z(b(uo), { colspan: "999" }, {
        default: B(() => r[0] || (r[0] = [
          $("div", { class: "tr-placeholder bg-opacity-75 h-8 w-full animate-pulse rounded-md bg-gray-500" }, null, -1)
        ])),
        _: 1
      })
    ]))), 128));
  }
}), j2 = { class: "max-xxs:text-xxs mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600" }, q2 = {
  key: 0,
  class: "xs:w-fit mb-2 h-fit w-full"
}, z2 = { key: 0 }, V2 = {
  key: 1,
  class: "ml-1"
}, U2 = { class: "flex w-fit flex-wrap" }, H2 = {
  key: 0,
  class: "font-semibold"
}, W2 = { class: "mb-1" }, K2 = {
  key: 0,
  class: "text-primary w-full font-semibold whitespace-normal"
}, G2 = { class: "w-full break-words" }, Y2 = { class: "mb-1 flex flex-col" }, X2 = { key: 1 }, uC = /* @__PURE__ */ U({
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
      return x(), P("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        $("div", j2, [
          t.itemId || t.timeStamp ? (x(), P("div", q2, [
            t.itemId ? (x(), P(ne, { key: 0 }, [
              t.itemId.routeName ? (x(), H(b(ft), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: B(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (x(), P(ne, { key: 0 }, [
                    ce("#")
                  ], 64)) : Y("", !0),
                  ce(" " + Q(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (x(), P("span", z2, [
                t.itemId.prefix || t.itemId.prefix == null ? (x(), P(ne, { key: 0 }, [
                  ce("#")
                ], 64)) : Y("", !0),
                ce(" " + Q(t.itemId.id), 1)
              ]))
            ], 64)) : Y("", !0),
            t.timeStamp ? (x(), P("span", V2, [
              t.itemId ? (x(), P(ne, { key: 0 }, [
                ce("-")
              ], 64)) : Y("", !0),
              ce(" " + Q(t.timeStamp), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          $("div", U2, [
            (x(!0), P(ne, null, be(n.pills, (a, s) => (x(), P(ne, { key: s }, [
              a.text ? (x(), P("span", {
                key: 0,
                class: "bg-primary rounded-md border p-1 px-2 whitespace-nowrap text-white",
                style: et({
                  backgroundColor: a.color ? a.color : null
                })
              }, Q(a.text), 5)) : Y("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (x(), P(ne, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (x(), P("p", H2, Q(t.title.text), 1)) : (x(), H(b(ft), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: B(() => [
              ce(Q(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Y("", !0),
        $("div", W2, [
          t.extraText ? (x(), P("p", K2, [
            r[0] || (r[0] = ce(" Engineer Note: ")),
            $("span", G2, Q(t.extraText), 1)
          ])) : Y("", !0)
        ]),
        $("div", Y2, [
          (x(!0), P(ne, null, be(n.options, (a, s) => (x(), P(ne, { key: s }, [
            !a.routeName && !a.href ? (x(), P("span", {
              key: 0,
              style: et({ color: a.color ? a.color : "#000" })
            }, Q(a.text), 5)) : (x(), H(b(ft), {
              href: a.href ? a.href : n.route(a.routeName, a.routeData),
              style: et({ color: a.color ? a.color : "#000" }),
              key: "link-" + s
            }, {
              default: B(() => [
                ce(Q(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 128))
        ]),
        (o = t.amount) != null && o.amount ? (x(), P("div", X2, [
          $("span", null, Q(t.amount.text + b(iw)(t.amount.amount)), 1)
        ])) : Y("", !0),
        $("div", null, [
          j(n.$slots, "default")
        ])
      ]);
    };
  }
}), J2 = { class: "flex" }, Q2 = { class: "flex-shrink-0" }, Z2 = { class: "ml-3 flex-1" }, eS = {
  key: 0,
  class: "mb-1 text-sm font-medium"
}, tS = { class: "text-sm" }, nS = {
  key: 0,
  class: "ml-auto flex-shrink-0"
}, cC = /* @__PURE__ */ U({
  __name: "Alert",
  props: {
    type: { default: "info" },
    title: { default: void 0 },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = M(n.modelValue), a = F({
      get: () => o.value,
      set: (p) => {
        o.value = p, r("update:modelValue", p);
      }
    });
    re(
      () => n.modelValue,
      (p) => {
        o.value = p;
      },
      { immediate: !0 }
    );
    const s = F(() => {
      const p = "relative w-full rounded-lg border px-4 py-3 text-sm";
      switch (n.type) {
        case "success":
          return `${p} border-green-200 bg-green-50 text-green-800`;
        case "error":
          return `${p} border-red-200 bg-red-50 text-red-800`;
        case "warning":
          return `${p} border-yellow-200 bg-yellow-50 text-yellow-800`;
        case "info":
        default:
          return `${p} border-blue-200 bg-blue-50 text-blue-800`;
      }
    }), i = F(() => {
      switch (n.type) {
        case "success":
          return hm;
        case "error":
          return km;
        case "warning":
          return Em;
        case "info":
        default:
          return vm;
      }
    }), c = () => {
      a.value = !1, r("dismiss");
    }, l = (p) => {
      const f = p;
      f.style.height = "0", f.style.opacity = "0", f.style.transform = "translateY(-8px) scale(0.95)";
    }, u = (p, f) => {
      const g = p, w = g.scrollHeight;
      g.style.transition = "all 400ms ease-out", requestAnimationFrame(() => {
        g.style.height = `${w}px`, g.style.opacity = "1", g.style.transform = "translateY(0) scale(1)";
      }), setTimeout(f, 400);
    }, d = (p) => {
      const f = p;
      f.style.height = "auto";
    }, y = (p) => {
      const f = p, g = f.scrollHeight;
      f.style.height = `${g}px`;
    }, h = (p, f) => {
      const g = p;
      g.style.transition = "all 350ms ease-in", requestAnimationFrame(() => {
        g.style.height = "0", g.style.opacity = "0", g.style.transform = "translateY(-8px) scale(0.95)";
      }), setTimeout(f, 350);
    }, m = (p) => {
      const f = p;
      f.style.height = "", f.style.opacity = "", f.style.transform = "", f.style.transition = "";
    };
    return (p, f) => (x(), H(un, {
      name: "alert",
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: d,
      onBeforeLeave: y,
      onLeave: h,
      onAfterLeave: m,
      css: !1
    }, {
      default: B(() => [
        a.value ? (x(), P("div", {
          key: 0,
          class: J(s.value),
          role: "alert",
          style: { overflow: "hidden" }
        }, [
          $("div", J2, [
            $("div", Q2, [
              Z(b(xe), {
                icon: i.value,
                class: J(["h-5 w-5", {
                  "text-green-400": p.type === "success",
                  "text-red-400": p.type === "error",
                  "text-yellow-400": p.type === "warning",
                  "text-blue-400": p.type === "info"
                }])
              }, null, 8, ["icon", "class"])
            ]),
            $("div", Z2, [
              p.title ? (x(), P("h3", eS, Q(p.title), 1)) : Y("", !0),
              $("div", tS, [
                j(p.$slots, "default")
              ])
            ]),
            p.dismissible ? (x(), P("div", nS, [
              $("button", {
                onClick: c,
                class: J(["inline-flex rounded-md p-1.5 transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none", {
                  "text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50": p.type === "success",
                  "text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50": p.type === "error",
                  "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50": p.type === "warning",
                  "text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50": p.type === "info"
                }]),
                "aria-label": "Dismiss alert"
              }, [
                Z(b(xe), {
                  icon: b(Jr),
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
}), rS = ["top", "right", "bottom", "left"], Qt = Math.min, Ze = Math.max, co = Math.round, Br = Math.floor, At = (e) => ({
  x: e,
  y: e
}), oS = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, aS = {
  start: "end",
  end: "start"
};
function js(e, t, n) {
  return Ze(e, Qt(t, n));
}
function Bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Lt(e) {
  return e.split("-")[0];
}
function Un(e) {
  return e.split("-")[1];
}
function xi(e) {
  return e === "x" ? "y" : "x";
}
function Oi(e) {
  return e === "y" ? "height" : "width";
}
function Rt(e) {
  return ["top", "bottom"].includes(Lt(e)) ? "y" : "x";
}
function Ci(e) {
  return xi(Rt(e));
}
function sS(e, t, n) {
  n === void 0 && (n = !1);
  const r = Un(e), o = Ci(e), a = Oi(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = fo(s)), [s, fo(s)];
}
function iS(e) {
  const t = fo(e);
  return [qs(e), t, qs(t)];
}
function qs(e) {
  return e.replace(/start|end/g, (t) => aS[t]);
}
function lS(e, t, n) {
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
function uS(e, t, n, r) {
  const o = Un(e);
  let a = lS(Lt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(qs)))), a;
}
function fo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => oS[t]);
}
function cS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Qf(e) {
  return typeof e != "number" ? cS(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function po(e) {
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
  const a = Rt(t), s = Ci(t), i = Oi(s), c = Lt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, y = r[i] / 2 - o[i] / 2;
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
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
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
      h[s] -= y * (n && l ? -1 : 1);
      break;
    case "end":
      h[s] += y * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const dS = async (e, t, n) => {
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
  } = ic(l, r, c), y = r, h = {}, m = 0;
  for (let p = 0; p < i.length; p++) {
    const {
      name: f,
      fn: g
    } = i[p], {
      x: w,
      y: O,
      data: E,
      reset: D
    } = await g({
      x: u,
      y: d,
      initialPlacement: r,
      placement: y,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = O ?? d, h = {
      ...h,
      [f]: {
        ...h[f],
        ...E
      }
    }, D && m <= 50 && (m++, typeof D == "object" && (D.placement && (y = D.placement), D.rects && (l = D.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : D.rects), {
      x: u,
      y: d
    } = ic(l, y, c)), p = -1);
  }
  return {
    x: u,
    y: d,
    placement: y,
    strategy: o,
    middlewareData: h
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
    padding: h = 0
  } = Bt(t, e), m = Qf(h), f = i[y ? d === "floating" ? "reference" : "floating" : d], g = po(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(f))) == null || n ? f : f.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), w = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), E = await (a.isElement == null ? void 0 : a.isElement(O)) ? await (a.getScale == null ? void 0 : a.getScale(O)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, D = po(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: O,
    strategy: c
  }) : w);
  return {
    top: (g.top - D.top + m.top) / E.y,
    bottom: (D.bottom - g.bottom + m.bottom) / E.y,
    left: (g.left - D.left + m.left) / E.x,
    right: (D.right - g.right + m.right) / E.x
  };
}
const fS = (e) => ({
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
    const d = Qf(u), y = {
      x: n,
      y: r
    }, h = Ci(o), m = Oi(h), p = await s.getDimensions(l), f = h === "y", g = f ? "top" : "left", w = f ? "bottom" : "right", O = f ? "clientHeight" : "clientWidth", E = a.reference[m] + a.reference[h] - y[h] - a.floating[m], D = y[h] - a.reference[h], V = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let z = V ? V[O] : 0;
    (!z || !await (s.isElement == null ? void 0 : s.isElement(V))) && (z = i.floating[O] || a.floating[m]);
    const G = E / 2 - D / 2, I = z / 2 - p[m] / 2 - 1, k = Qt(d[g], I), q = Qt(d[w], I), v = k, C = z - p[m] - q, A = z / 2 - p[m] / 2 + G, S = js(v, A, C), W = !c.arrow && Un(o) != null && A !== S && a.reference[m] / 2 - (A < v ? k : q) - p[m] / 2 < 0, _ = W ? A < v ? A - v : A - C : 0;
    return {
      [h]: y[h] + _,
      data: {
        [h]: S,
        centerOffset: A - S - _,
        ...W && {
          alignmentOffset: _
        }
      },
      reset: W
    };
  }
}), pS = function(e) {
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
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: p = !0,
        ...f
      } = Bt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const g = Lt(o), w = Rt(i), O = Lt(i) === i, E = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), D = y || (O || !p ? [fo(i)] : iS(i)), V = m !== "none";
      !y && V && D.push(...uS(i, p, m, E));
      const z = [i, ...D], G = await dr(t, f), I = [];
      let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && I.push(G[g]), d) {
        const S = sS(o, s, E);
        I.push(G[S[0]], G[S[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: I
      }], !I.every((S) => S <= 0)) {
        var q, v;
        const S = (((q = a.flip) == null ? void 0 : q.index) || 0) + 1, W = z[S];
        if (W) {
          var C;
          const T = d === "alignment" ? w !== Rt(W) : !1, X = ((C = k[0]) == null ? void 0 : C.overflows[0]) > 0;
          if (!T || X)
            return {
              data: {
                index: S,
                overflows: k
              },
              reset: {
                placement: W
              }
            };
        }
        let _ = (v = k.filter((T) => T.overflows[0] <= 0).sort((T, X) => T.overflows[1] - X.overflows[1])[0]) == null ? void 0 : v.placement;
        if (!_)
          switch (h) {
            case "bestFit": {
              var A;
              const T = (A = k.filter((X) => {
                if (V) {
                  const ae = Rt(X.placement);
                  return ae === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ae === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((ae) => ae > 0).reduce((ae, Fe) => ae + Fe, 0)]).sort((X, ae) => X[1] - ae[1])[0]) == null ? void 0 : A[0];
              T && (_ = T);
              break;
            }
            case "initialPlacement":
              _ = i;
              break;
          }
        if (o !== _)
          return {
            reset: {
              placement: _
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
  return rS.some((t) => e[t] >= 0);
}
const mS = function(e) {
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
          const a = await dr(t, {
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
          const a = await dr(t, {
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
async function hS(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Lt(n), i = Un(n), c = Rt(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Bt(t, e);
  let {
    mainAxis: y,
    crossAxis: h,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof m == "number" && (h = i === "end" ? m * -1 : m), c ? {
    x: h * u,
    y: y * l
  } : {
    x: y * l,
    y: h * u
  };
}
const yS = function(e) {
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
      } = t, c = await hS(t, e);
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
}, gS = function(e) {
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
      }, u = await dr(t, c), d = Rt(Lt(o)), y = xi(d);
      let h = l[y], m = l[d];
      if (a) {
        const f = y === "y" ? "top" : "left", g = y === "y" ? "bottom" : "right", w = h + u[f], O = h - u[g];
        h = js(w, h, O);
      }
      if (s) {
        const f = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", w = m + u[f], O = m - u[g];
        m = js(w, m, O);
      }
      const p = i.fn({
        ...t,
        [y]: h,
        [d]: m
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [y]: a,
            [d]: s
          }
        }
      };
    }
  };
}, vS = function(e) {
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
      }, d = Rt(o), y = xi(d);
      let h = u[y], m = u[d];
      const p = Bt(i, t), f = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (c) {
        const O = y === "y" ? "height" : "width", E = a.reference[y] - a.floating[O] + f.mainAxis, D = a.reference[y] + a.reference[O] - f.mainAxis;
        h < E ? h = E : h > D && (h = D);
      }
      if (l) {
        var g, w;
        const O = y === "y" ? "width" : "height", E = ["top", "left"].includes(Lt(o)), D = a.reference[d] - a.floating[O] + (E && ((g = s.offset) == null ? void 0 : g[d]) || 0) + (E ? 0 : f.crossAxis), V = a.reference[d] + a.reference[O] + (E ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (E ? f.crossAxis : 0);
        m < D ? m = D : m > V && (m = V);
      }
      return {
        [y]: h,
        [d]: m
      };
    }
  };
}, bS = function(e) {
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
      } = Bt(e, t), u = await dr(t, l), d = Lt(o), y = Un(o), h = Rt(o) === "y", {
        width: m,
        height: p
      } = a.floating;
      let f, g;
      d === "top" || d === "bottom" ? (f = d, g = y === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = d, f = y === "end" ? "top" : "bottom");
      const w = p - u.top - u.bottom, O = m - u.left - u.right, E = Qt(p - u[f], w), D = Qt(m - u[g], O), V = !t.middlewareData.shift;
      let z = E, G = D;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (G = O), (r = t.middlewareData.shift) != null && r.enabled.y && (z = w), V && !y) {
        const k = Ze(u.left, 0), q = Ze(u.right, 0), v = Ze(u.top, 0), C = Ze(u.bottom, 0);
        h ? G = m - 2 * (k !== 0 || q !== 0 ? k + q : Ze(u.left, u.right)) : z = p - 2 * (v !== 0 || C !== 0 ? v + C : Ze(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: G,
        availableHeight: z
      });
      const I = await s.getDimensions(i.floating);
      return m !== I.width || p !== I.height ? {
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
function vn(e) {
  return Ai(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pt(e) {
  var t;
  return (t = (Ai(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ai(e) {
  return Fo() ? e instanceof Node || e instanceof tt(e).Node : !1;
}
function mt(e) {
  return Fo() ? e instanceof Element || e instanceof tt(e).Element : !1;
}
function Et(e) {
  return Fo() ? e instanceof HTMLElement || e instanceof tt(e).HTMLElement : !1;
}
function cc(e) {
  return !Fo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof tt(e).ShadowRoot;
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
function wS(e) {
  return ["table", "td", "th"].includes(vn(e));
}
function Ro(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ei(e) {
  const t = Pi(), n = mt(e) ? ht(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function SS(e) {
  let t = Zt(e);
  for (; Et(t) && !Ln(t); ) {
    if (Ei(t))
      return t;
    if (Ro(t))
      return null;
    t = Zt(t);
  }
  return null;
}
function Pi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ln(e) {
  return ["html", "body", "#document"].includes(vn(e));
}
function ht(e) {
  return tt(e).getComputedStyle(e);
}
function Io(e) {
  return mt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Zt(e) {
  if (vn(e) === "html")
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
function Zf(e) {
  const t = Zt(e);
  return Ln(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Et(t) && xr(t) ? t : Zf(t);
}
function fr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Zf(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = tt(o);
  if (a) {
    const i = zs(s);
    return t.concat(s, s.visualViewport || [], xr(o) ? o : [], i && n ? fr(i) : []);
  }
  return t.concat(o, fr(o, [], n));
}
function zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ep(e) {
  const t = ht(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Et(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = co(n) !== a || co(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function ki(e) {
  return mt(e) ? e : e.contextElement;
}
function In(e) {
  const t = ki(e);
  if (!Et(t))
    return At(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = ep(t);
  let s = (a ? co(n.width) : n.width) / r, i = (a ? co(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const xS = /* @__PURE__ */ At(0);
function tp(e) {
  const t = tt(e);
  return !Pi() || !t.visualViewport ? xS : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function OS(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== tt(e) ? !1 : t;
}
function mn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ki(e);
  let s = At(1);
  t && (r ? mt(r) && (s = In(r)) : s = In(e));
  const i = OS(a, n, r) ? tp(a) : At(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const y = tt(a), h = r && mt(r) ? tt(r) : r;
    let m = y, p = zs(m);
    for (; p && r && h !== m; ) {
      const f = In(p), g = p.getBoundingClientRect(), w = ht(p), O = g.left + (p.clientLeft + parseFloat(w.paddingLeft)) * f.x, E = g.top + (p.clientTop + parseFloat(w.paddingTop)) * f.y;
      c *= f.x, l *= f.y, u *= f.x, d *= f.y, c += O, l += E, m = tt(p), p = zs(m);
    }
  }
  return po({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function $i(e, t) {
  const n = Io(e).scrollLeft;
  return t ? t.left + n : mn(Pt(e)).left + n;
}
function np(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    $i(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function CS(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Pt(r), i = t ? Ro(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = At(1);
  const u = At(0), d = Et(r);
  if ((d || !d && !a) && ((vn(r) !== "body" || xr(s)) && (c = Io(r)), Et(r))) {
    const h = mn(r);
    l = In(r), u.x = h.x + r.clientLeft, u.y = h.y + r.clientTop;
  }
  const y = s && !d && !a ? np(s, c, !0) : At(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + y.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + y.y
  };
}
function AS(e) {
  return Array.from(e.getClientRects());
}
function ES(e) {
  const t = Pt(e), n = Io(e), r = e.ownerDocument.body, o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + $i(e);
  const i = -n.scrollTop;
  return ht(r).direction === "rtl" && (s += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function PS(e, t) {
  const n = tt(e), r = Pt(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const l = Pi();
    (!l || l && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function kS(e, t) {
  const n = mn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Et(e) ? In(e) : At(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
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
    r = PS(e, n);
  else if (t === "document")
    r = ES(Pt(e));
  else if (mt(t))
    r = kS(t, n);
  else {
    const o = tp(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return po(r);
}
function rp(e, t) {
  const n = Zt(e);
  return n === t || !mt(n) || Ln(n) ? !1 : ht(n).position === "fixed" || rp(n, t);
}
function $S(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = fr(e, [], !1).filter((i) => mt(i) && vn(i) !== "body"), o = null;
  const a = ht(e).position === "fixed";
  let s = a ? Zt(e) : e;
  for (; mt(s) && !Ln(s); ) {
    const i = ht(s), c = Ei(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || xr(s) && !c && rp(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Zt(s);
  }
  return t.set(e, r), r;
}
function DS(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Ro(t) ? [] : $S(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = dc(t, u, o);
    return l.top = Ze(d.top, l.top), l.right = Qt(d.right, l.right), l.bottom = Qt(d.bottom, l.bottom), l.left = Ze(d.left, l.left), l;
  }, dc(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function TS(e) {
  const {
    width: t,
    height: n
  } = ep(e);
  return {
    width: t,
    height: n
  };
}
function FS(e, t, n) {
  const r = Et(t), o = Pt(t), a = n === "fixed", s = mn(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = At(0);
  function l() {
    c.x = $i(o);
  }
  if (r || !r && !a)
    if ((vn(t) !== "body" || xr(o)) && (i = Io(t)), r) {
      const h = mn(t, !0, a, t);
      c.x = h.x + t.clientLeft, c.y = h.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? np(o, i) : At(0), d = s.left + i.scrollLeft - c.x - u.x, y = s.top + i.scrollTop - c.y - u.y;
  return {
    x: d,
    y,
    width: s.width,
    height: s.height
  };
}
function Ga(e) {
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
function op(e, t) {
  const n = tt(e);
  if (Ro(e))
    return n;
  if (!Et(e)) {
    let o = Zt(e);
    for (; o && !Ln(o); ) {
      if (mt(o) && !Ga(o))
        return o;
      o = Zt(o);
    }
    return n;
  }
  let r = fc(e, t);
  for (; r && wS(r) && Ga(r); )
    r = fc(r, t);
  return r && Ln(r) && Ga(r) && !Ei(r) ? n : r || SS(e) || n;
}
const RS = async function(e) {
  const t = this.getOffsetParent || op, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: FS(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function IS(e) {
  return ht(e).direction === "rtl";
}
const _S = {
  convertOffsetParentRelativeRectToViewportRelativeRect: CS,
  getDocumentElement: Pt,
  getClippingRect: DS,
  getOffsetParent: op,
  getElementRects: RS,
  getClientRects: AS,
  getDimensions: TS,
  getScale: In,
  isElement: mt,
  isRTL: IS
};
function ap(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function BS(e, t) {
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
      width: y,
      height: h
    } = l;
    if (i || t(), !y || !h)
      return;
    const m = Br(d), p = Br(o.clientWidth - (u + y)), f = Br(o.clientHeight - (d + h)), g = Br(u), O = {
      rootMargin: -m + "px " + -p + "px " + -f + "px " + -g + "px",
      threshold: Ze(0, Qt(1, c)) || 1
    };
    let E = !0;
    function D(V) {
      const z = V[0].intersectionRatio;
      if (z !== c) {
        if (!E)
          return s();
        z ? s(!1, z) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      z === 1 && !ap(l, e.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver(D, {
        ...O,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(D, O);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function LS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = ki(e), u = o || a ? [...l ? fr(l) : [], ...fr(t)] : [];
  u.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), a && g.addEventListener("resize", n);
  });
  const d = l && i ? BS(l, n) : null;
  let y = -1, h = null;
  s && (h = new ResizeObserver((g) => {
    let [w] = g;
    w && w.target === l && h && (h.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
      var O;
      (O = h) == null || O.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let m, p = c ? mn(e) : null;
  c && f();
  function f() {
    const g = mn(e);
    p && !ap(p, g) && n(), p = g, m = requestAnimationFrame(f);
  }
  return n(), () => {
    var g;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), d == null || d(), (g = h) == null || g.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const MS = yS, NS = gS, pc = pS, jS = bS, qS = mS, zS = fS, VS = vS, US = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: _S,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return dS(e, t, {
    ...o,
    platform: a
  });
};
function HS(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Vs(e) {
  if (HS(e)) {
    const t = e.$el;
    return Ai(t) && vn(t) === "#comment" ? null : t;
  }
  return e;
}
function $n(e) {
  return typeof e == "function" ? e() : b(e);
}
function WS(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Vs($n(e.element));
      return n == null ? {} : zS({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function sp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mc(e, t) {
  const n = sp(e);
  return Math.round(t * n) / n;
}
function KS(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = F(() => {
    var z;
    return (z = $n(n.open)) != null ? z : !0;
  }), a = F(() => $n(n.middleware)), s = F(() => {
    var z;
    return (z = $n(n.placement)) != null ? z : "bottom";
  }), i = F(() => {
    var z;
    return (z = $n(n.strategy)) != null ? z : "absolute";
  }), c = F(() => {
    var z;
    return (z = $n(n.transform)) != null ? z : !0;
  }), l = F(() => Vs(e.value)), u = F(() => Vs(t.value)), d = M(0), y = M(0), h = M(i.value), m = M(s.value), p = pr({}), f = M(!1), g = F(() => {
    const z = {
      position: h.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return z;
    const G = mc(u.value, d.value), I = mc(u.value, y.value);
    return c.value ? {
      ...z,
      transform: "translate(" + G + "px, " + I + "px)",
      ...sp(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: h.value,
      left: G + "px",
      top: I + "px"
    };
  });
  let w;
  function O() {
    if (l.value == null || u.value == null)
      return;
    const z = o.value;
    US(l.value, u.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((G) => {
      d.value = G.x, y.value = G.y, h.value = G.strategy, m.value = G.placement, p.value = G.middlewareData, f.value = z !== !1;
    });
  }
  function E() {
    typeof w == "function" && (w(), w = void 0);
  }
  function D() {
    if (E(), r === void 0) {
      O();
      return;
    }
    if (l.value != null && u.value != null) {
      w = r(l.value, u.value, O);
      return;
    }
  }
  function V() {
    o.value || (f.value = !1);
  }
  return re([a, s, i, o], O, {
    flush: "sync"
  }), re([l, u], D, {
    flush: "sync"
  }), re(o, V, {
    flush: "sync"
  }), Pc() && kc(E), {
    x: En(d),
    y: En(y),
    strategy: En(h),
    placement: En(m),
    middlewareData: En(p),
    isPositioned: En(f),
    floatingStyles: g,
    update: O
  };
}
function Di(e) {
  return e ? e.flatMap((t) => t.type === ne ? Di(t.children) : [t]) : [];
}
const Us = U({
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
      const i = Gp(a, s);
      for (const u in s)
        u.startsWith("on") && (i.props || (i.props = {}), i.props[u] = s[u]);
      return r.length === 1 ? i : (r[o] = i, r);
    };
  }
}), GS = ["area", "img", "input"], ke = U({
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
    return typeof r == "string" && GS.includes(r) ? () => qe(r, t) : r !== "template" ? () => qe(e.as, t, { default: n.default }) : () => qe(Us, t, { default: n.default });
  }
}), YS = /* @__PURE__ */ U({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(ke), {
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
      default: B(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-hidden", "data-hidden", "tabindex"]));
  }
});
function XS(e, t) {
  var n;
  const r = pr();
  return at(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), Dc(r);
}
function Or(e) {
  return Pc() ? (kc(e), !0) : !1;
}
function JS() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const s = () => t(a);
      return Or(s), {
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
function QS(e) {
  let t = !1, n;
  const r = Tc(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function ip(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...a) => (t += 1, r || (r = Tc(!0), n = r.run(() => e(...a))), Or(o), n);
}
const qt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ZS = (e) => typeof e < "u", ex = Object.prototype.toString, tx = (e) => ex.call(e) === "[object Object]", hc = /* @__PURE__ */ nx();
function nx() {
  var e, t;
  return qt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function rx(e) {
  return gn();
}
function Ya(e) {
  return Array.isArray(e) ? e : [e];
}
function lp(e, t = 1e4) {
  return Xp((n, r) => {
    let o = Ft(e), a;
    const s = () => setTimeout(() => {
      o = Ft(e), r();
    }, Ft(t));
    return Or(() => {
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
function ox(e, t) {
  rx() && Yp(e, t);
}
function up(e, t, n = {}) {
  const {
    immediate: r = !0,
    immediateCallback: o = !1
  } = n, a = pr(!1);
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
  return r && (a.value = !0, qt && l()), Or(c), {
    isPending: Dc(a),
    start: l,
    stop: c
  };
}
function ax(e, t, n) {
  return re(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ti = qt ? window : void 0;
function Hn(e) {
  var t;
  const n = Ft(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function hn(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, r = (i, c, l, u) => (i.addEventListener(c, l, u), () => i.removeEventListener(c, l, u)), o = F(() => {
    const i = Ya(Ft(e[0])).filter((c) => c != null);
    return i.every((c) => typeof c != "string") ? i : void 0;
  }), a = ax(
    () => {
      var i, c;
      return [
        (c = (i = o.value) == null ? void 0 : i.map((l) => Hn(l))) != null ? c : [Ti].filter((l) => l != null),
        Ya(Ft(o.value ? e[1] : e[0])),
        Ya(b(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Ft(o.value ? e[3] : e[2])
      ];
    },
    ([i, c, l, u]) => {
      if (n(), !(i != null && i.length) || !(c != null && c.length) || !(l != null && l.length))
        return;
      const d = tx(u) ? { ...u } : u;
      t.push(
        ...i.flatMap(
          (y) => c.flatMap(
            (h) => l.map((m) => r(y, h, m, d))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    a(), n();
  };
  return Or(n), s;
}
function sx() {
  const e = pr(!1), t = gn();
  return t && pe(() => {
    e.value = !0;
  }, t), e;
}
function ix(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function lx(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ti,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = r, c = ix(t);
  return hn(o, a, (u) => {
    u.repeat && Ft(i) || c(u) && n(u);
  }, s);
}
function ux(e) {
  return JSON.parse(JSON.stringify(e));
}
function Wn(e, t, n, r = {}) {
  var o, a, s;
  const {
    clone: i = !1,
    passive: c = !1,
    eventName: l,
    deep: u = !1,
    defaultValue: d,
    shouldEmit: y
  } = r, h = gn(), m = n || (h == null ? void 0 : h.emit) || ((o = h == null ? void 0 : h.$emit) == null ? void 0 : o.bind(h)) || ((s = (a = h == null ? void 0 : h.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(h == null ? void 0 : h.proxy));
  let p = l;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const f = (O) => i ? typeof i == "function" ? i(O) : ux(O) : O, g = () => ZS(e[t]) ? f(e[t]) : d, w = (O) => {
    y ? y(O) && m(p, O) : m(p, O);
  };
  if (c) {
    const O = g(), E = M(O);
    let D = !1;
    return re(
      () => e[t],
      (V) => {
        D || (D = !0, E.value = f(V), Te(() => D = !1));
      }
    ), re(
      E,
      (V) => {
        !D && (V !== e[t] || u) && w(V);
      },
      { deep: u }
    ), E;
  } else
    return F({
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
    const i = Ys(r, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (mo(r, s), s)];
}
const [Fi, dC] = st("ConfigProvider");
function Ri(e) {
  const t = Fi({
    dir: M("ltr")
  });
  return F(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function le() {
  const e = gn(), t = M(), n = F(() => {
    var s, i;
    return ["#text", "#comment"].includes((s = t.value) == null ? void 0 : s.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : Hn(t);
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
const [cp, cx] = st("CollapsibleRoot"), Ii = /* @__PURE__ */ U({
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
    }), { disabled: s, unmountOnHide: i } = Nt(r);
    return cx({
      contentId: "",
      disabled: s,
      open: a,
      unmountOnHide: i,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), le(), (c, l) => (x(), H(b(ke), {
      as: c.as,
      "as-child": r.asChild,
      "data-state": b(a) ? "open" : "closed",
      "data-disabled": b(s) ? "" : void 0
    }, {
      default: B(() => [
        j(c.$slots, "default", { open: b(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), dx = ["INPUT", "TEXTAREA"];
function fx(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && dx.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: a = "[data-reka-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: c = "ltr",
    preventScroll: l = !0,
    focus: u = !1
  } = r, [d, y, h, m, p, f] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], g = h || m, w = d || y;
  if (!p && !f && (!g && !w || o === "vertical" && w || o === "horizontal" && g))
    return null;
  const O = n ? Array.from(n.querySelectorAll(a)) : s;
  if (!O.length)
    return null;
  l && e.preventDefault();
  let E = null;
  return w || g ? E = dp(O, t, {
    goForward: g ? m : c === "ltr" ? d : y,
    loop: i
  }) : p ? E = O.at(0) || null : f && (E = O.at(-1) || null), u && (E == null || E.focus()), E;
}
function dp(e, t, n, r = e.length) {
  if (--r === 0)
    return null;
  const o = e.indexOf(t), a = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const s = (a + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? dp(
    e,
    i,
    n,
    r
  ) : i : null;
}
let px = 0;
function yn(e, t = "reka") {
  const n = Fi({ useId: void 0 });
  return Qi.useId ? `${t}-${Qi.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++px}`;
}
function mx(e, t) {
  const n = M(e);
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
function hx(e, t) {
  var f;
  const n = M({}), r = M("none"), o = M(e), a = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((f = t.value) == null ? void 0 : f.ownerDocument.defaultView) ?? Ti, { state: c, dispatch: l } = mx(a, {
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
  re(
    e,
    async (g, w) => {
      var E;
      const O = w !== g;
      if (await Te(), O) {
        const D = r.value, V = Lr(t.value);
        g ? (l("MOUNT"), u("enter"), V === "none" && u("after-enter")) : V === "none" || V === "undefined" || ((E = n.value) == null ? void 0 : E.display) === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : w && D !== V ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (g) => {
    const w = Lr(t.value), O = w.includes(
      g.animationName
    ), E = c.value === "mounted" ? "enter" : "leave";
    if (g.target === t.value && O && (u(`after-${E}`), l("ANIMATION_END"), !o.value)) {
      const D = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var V;
        ((V = t.value) == null ? void 0 : V.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = D);
      });
    }
    g.target === t.value && w === "none" && l("ANIMATION_END");
  }, y = (g) => {
    g.target === t.value && (r.value = Lr(t.value));
  }, h = re(
    t,
    (g, w) => {
      g ? (n.value = getComputedStyle(g), g.addEventListener("animationstart", y), g.addEventListener("animationcancel", d), g.addEventListener("animationend", d)) : (l("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), w == null || w.removeEventListener("animationstart", y), w == null || w.removeEventListener("animationcancel", d), w == null || w.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), m = re(c, () => {
    const g = Lr(t.value);
    r.value = c.value === "mounted" ? g : "none";
  });
  return Mt(() => {
    h(), m();
  }), {
    isPresent: F(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function Lr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Cr = U({
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
    const { present: r, forceMount: o } = Nt(e), a = M(), { isPresent: s } = hx(r, a);
    n({ present: s });
    let i = t.default({ present: s.value });
    i = Di(i || []);
    const c = gn();
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
        const d = Hn(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? a.value = d.firstElementChild : a.value = d), d;
      }
    }) : null;
  }
}), _i = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = cp();
    o.contentId || (o.contentId = yn(void 0, "reka-collapsible-content"));
    const a = M(), { forwardRef: s, currentElement: i } = le(), c = M(0), l = M(0), u = F(() => o.open.value), d = M(u.value), y = M();
    re(
      () => {
        var m;
        return [u.value, (m = a.value) == null ? void 0 : m.present];
      },
      async () => {
        await Te();
        const m = i.value;
        if (!m)
          return;
        y.value = y.value || {
          transitionDuration: m.style.transitionDuration,
          animationName: m.style.animationName
        }, m.style.transitionDuration = "0s", m.style.animationName = "none";
        const p = m.getBoundingClientRect();
        l.value = p.height, c.value = p.width, d.value || (m.style.transitionDuration = y.value.transitionDuration, m.style.animationName = y.value.animationName);
      },
      {
        immediate: !0
      }
    );
    const h = F(() => d.value && o.open.value);
    return pe(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), hn(i, "beforematch", (m) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), r("contentFound");
      });
    }), (m, p) => (x(), H(b(Cr), {
      ref_key: "presentRef",
      ref: a,
      present: m.forceMount || b(o).open.value,
      "force-mount": !0
    }, {
      default: B(({ present: f }) => {
        var g;
        return [
          Z(b(ke), ie(m.$attrs, {
            id: b(o).contentId,
            ref: b(s),
            "as-child": n.asChild,
            as: m.as,
            hidden: f ? void 0 : b(o).unmountOnHide.value ? "" : "until-found",
            "data-state": h.value ? void 0 : b(o).open.value ? "open" : "closed",
            "data-disabled": (g = b(o).disabled) != null && g.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${l.value}px`,
              "--reka-collapsible-content-width": `${c.value}px`
            }
          }), {
            default: B(() => [
              !b(o).unmountOnHide.value || f ? j(m.$slots, "default", { key: 0 }) : Y("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Bi = /* @__PURE__ */ U({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = cp();
    return (r, o) => {
      var a, s;
      return x(), H(b(ke), {
        type: r.as === "button" ? "button" : void 0,
        as: r.as,
        "as-child": t.asChild,
        "aria-controls": b(n).contentId,
        "aria-expanded": b(n).open.value,
        "data-state": b(n).open.value ? "open" : "closed",
        "data-disabled": (a = b(n).disabled) != null && a.value ? "" : void 0,
        disabled: (s = b(n).disabled) == null ? void 0 : s.value,
        onClick: b(n).onOpenToggle
      }, {
        default: B(() => [
          j(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
}), [kt, yx] = st("DialogRoot"), gx = /* @__PURE__ */ U({
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
    }), a = M(), s = M(), { modal: i } = Nt(n);
    return yx({
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
    }), (c, l) => j(c.$slots, "default", { open: b(o) });
  }
}), vx = /* @__PURE__ */ U({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = kt();
    return (r, o) => (x(), H(b(ke), ie(t, {
      type: r.as === "button" ? "button" : void 0,
      onClick: o[0] || (o[0] = (a) => b(n).onOpenChange(!1))
    }), {
      default: B(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
});
function Ar(e) {
  const t = gn(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[Jp(Fc(o))] = (...a) => e(o, ...a);
  }), r;
}
function fp(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const bx = "dismissableLayer.pointerDownOutside", wx = "dismissableLayer.focusOutside";
function pp(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function Sx(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = M(!1), o = M(() => {
  });
  return at((s) => {
    if (!qt)
      return;
    const i = async (l) => {
      const u = l.target;
      if (!(!(t != null && t.value) || !u)) {
        if (pp(t.value, u)) {
          r.value = !1;
          return;
        }
        if (l.target && !r.value) {
          let d = function() {
            fp(
              bx,
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
function xx(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = M(!1);
  return at((a) => {
    if (!qt)
      return;
    const s = async (i) => {
      if (!(t != null && t.value))
        return;
      await Te(), await Te();
      const c = i.target;
      !t.value || !c || pp(t.value, c) || i.target && !r.value && fp(
        wx,
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
const Tt = mr({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Li = /* @__PURE__ */ U({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = le(), s = F(
      () => {
        var m;
        return ((m = a.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
      }
    ), i = F(() => Tt.layersRoot), c = F(() => a.value ? Array.from(i.value).indexOf(a.value) : -1), l = F(() => Tt.layersWithOutsidePointerEventsDisabled.size > 0), u = F(() => {
      const m = Array.from(i.value), [p] = [...Tt.layersWithOutsidePointerEventsDisabled].slice(-1), f = m.indexOf(p);
      return c.value >= f;
    }), d = Sx(async (m) => {
      const p = [...Tt.branches].some(
        (f) => f == null ? void 0 : f.contains(m.target)
      );
      !u.value || p || (r("pointerDownOutside", m), r("interactOutside", m), await Te(), m.defaultPrevented || r("dismiss"));
    }, a), y = xx((m) => {
      [...Tt.branches].some(
        (f) => f == null ? void 0 : f.contains(m.target)
      ) || (r("focusOutside", m), r("interactOutside", m), m.defaultPrevented || r("dismiss"));
    }, a);
    lx("Escape", (m) => {
      c.value === i.value.size - 1 && (r("escapeKeyDown", m), m.defaultPrevented || r("dismiss"));
    });
    let h;
    return at((m) => {
      a.value && (n.disableOutsidePointerEvents && (Tt.layersWithOutsidePointerEventsDisabled.size === 0 && (h = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), Tt.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), m(() => {
        n.disableOutsidePointerEvents && Tt.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = h);
      }));
    }), at((m) => {
      m(() => {
        a.value && (i.value.delete(a.value), Tt.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (m, p) => (x(), H(b(ke), {
      ref: b(o),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: et({
        pointerEvents: l.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: b(y).onFocusCapture,
      onBlurCapture: b(y).onBlurCapture,
      onPointerdownCapture: b(d).onPointerDownCapture
    }, {
      default: B(() => [
        j(m.$slots, "default")
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
const Ox = "menu.itemSelect", Hs = ["Enter", " "], Cx = ["ArrowDown", "PageUp", "Home"], mp = ["ArrowUp", "PageDown", "End"], Ax = [...Cx, ...mp];
[...Hs], [...Hs];
function hp(e) {
  return e ? "open" : "closed";
}
function Ex(e) {
  const t = Ge();
  for (const n of e)
    if (n === t || (n.focus(), Ge() !== t))
      return;
}
function Px(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function kx(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Px(n, t);
}
function Ws(e) {
  return e.pointerType === "mouse";
}
const $x = "DialogTitle", Dx = "DialogContent";
function Tx({
  titleName: e = $x,
  contentName: t = Dx,
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
const Fx = QS(() => M([]));
function Rx() {
  const e = Fx();
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
function Ix(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Xa = "focusScope.autoFocusOnMount", Ja = "focusScope.autoFocusOnUnmount", gc = { bubbles: !1, cancelable: !0 };
function _x(e, { select: t = !1 } = {}) {
  const n = Ge();
  for (const r of e)
    if (Wt(r, { select: t }), Ge() !== n)
      return !0;
}
function Bx(e) {
  const t = yp(e), n = vc(t, e), r = vc(t.reverse(), e);
  return [n, r];
}
function yp(e) {
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
    if (!Lx(n, { upTo: t }))
      return n;
}
function Lx(e, { upTo: t }) {
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
function Mx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Wt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ge();
    e.focus({ preventScroll: !0 }), e !== n && Mx(e) && t && e.select();
  }
}
const gp = /* @__PURE__ */ U({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: a } = le(), s = M(null), i = Rx(), c = mr({
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
      function y(f) {
        if (c.paused || !d)
          return;
        const g = f.target;
        d.contains(g) ? s.value = g : Wt(s.value, { select: !0 });
      }
      function h(f) {
        if (c.paused || !d)
          return;
        const g = f.relatedTarget;
        g !== null && (d.contains(g) || Wt(s.value, { select: !0 }));
      }
      function m(f) {
        d.contains(s.value) || Wt(d);
      }
      document.addEventListener("focusin", y), document.addEventListener("focusout", h);
      const p = new MutationObserver(m);
      d && p.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", h), p.disconnect();
      });
    }), at(async (u) => {
      const d = a.value;
      if (await Te(), !d)
        return;
      i.add(c);
      const y = Ge();
      if (!d.contains(y)) {
        const m = new CustomEvent(Xa, gc);
        d.addEventListener(Xa, (p) => r("mountAutoFocus", p)), d.dispatchEvent(m), m.defaultPrevented || (_x(Ix(yp(d)), {
          select: !0
        }), Ge() === y && Wt(d));
      }
      u(() => {
        d.removeEventListener(Xa, (f) => r("mountAutoFocus", f));
        const m = new CustomEvent(Ja, gc), p = (f) => {
          r("unmountAutoFocus", f);
        };
        d.addEventListener(Ja, p), d.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Wt(y ?? document.body, { select: !0 }), d.removeEventListener(Ja, p), i.remove(c);
        }, 0);
      });
    });
    function l(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, y = Ge();
      if (d && y) {
        const h = u.currentTarget, [m, p] = Bx(h);
        m && p ? !u.shiftKey && y === p ? (u.preventDefault(), n.loop && Wt(m, { select: !0 })) : u.shiftKey && y === m && (u.preventDefault(), n.loop && Wt(p, { select: !0 })) : y === h && u.preventDefault();
      }
    }
    return (u, d) => (x(), H(b(ke), {
      ref_key: "currentRef",
      ref: o,
      tabindex: "-1",
      "as-child": u.asChild,
      as: u.as,
      onKeydown: l
    }, {
      default: B(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), vp = /* @__PURE__ */ U({
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
    return o.titleId || (o.titleId = yn(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = yn(void 0, "reka-dialog-description")), pe(() => {
      o.contentElement = s, Ge() !== document.body && (o.triggerElement.value = Ge());
    }), process.env.NODE_ENV !== "production" && Tx({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, c) => (x(), H(b(gp), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: c[5] || (c[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: c[6] || (c[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: B(() => [
        Z(b(Li), ie({
          id: b(o).contentId,
          ref: b(a),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": b(o).descriptionId,
          "aria-labelledby": b(o).titleId,
          "data-state": b(hp)(b(o).open.value)
        }, i.$attrs, {
          onDismiss: c[0] || (c[0] = (l) => b(o).onOpenChange(!1)),
          onEscapeKeyDown: c[1] || (c[1] = (l) => r("escapeKeyDown", l)),
          onFocusOutside: c[2] || (c[2] = (l) => r("focusOutside", l)),
          onInteractOutside: c[3] || (c[3] = (l) => r("interactOutside", l)),
          onPointerDownOutside: c[4] || (c[4] = (l) => r("pointerDownOutside", l))
        }), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var Nx = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, kn = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Nr = {}, Qa = 0, bp = function(e) {
  return e && (e.host || bp(e.parentNode));
}, jx = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = bp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qx = function(e, t, n, r) {
  var o = jx(t, Array.isArray(e) ? e : [e]);
  Nr[n] || (Nr[n] = /* @__PURE__ */ new WeakMap());
  var a = Nr[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(y) {
      if (i.has(y))
        u(y);
      else
        try {
          var h = y.getAttribute(r), m = h !== null && h !== "false", p = (kn.get(y) || 0) + 1, f = (a.get(y) || 0) + 1;
          kn.set(y, p), a.set(y, f), s.push(y), p === 1 && m && Mr.set(y, !0), f === 1 && y.setAttribute(n, "true"), m || y.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", y, g);
        }
    });
  };
  return u(t), i.clear(), Qa++, function() {
    s.forEach(function(d) {
      var y = kn.get(d) - 1, h = a.get(d) - 1;
      kn.set(d, y), a.set(d, h), y || (Mr.has(d) || d.removeAttribute(r), Mr.delete(d)), h || d.removeAttribute(n);
    }), Qa--, Qa || (kn = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Nr = {});
  };
}, zx = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Nx(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), qx(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function wp(e) {
  let t;
  re(() => Hn(e), (n) => {
    n ? t = zx(n) : t && t();
  }), Mt(() => {
    t && t();
  });
}
const Vx = /* @__PURE__ */ U({
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
    return wp(i), (c, l) => (x(), H(vp, ie({ ...n, ...b(a) }, {
      ref: b(s),
      "trap-focus": b(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var d;
        u.defaultPrevented || (u.preventDefault(), (d = b(o).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: l[1] || (l[1] = (u) => {
        const d = u.detail.originalEvent, y = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || y) && u.preventDefault();
      }),
      onFocusOutside: l[2] || (l[2] = (u) => {
        u.preventDefault();
      })
    }), {
      default: B(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ux = /* @__PURE__ */ U({
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
    const a = kt(), s = M(!1), i = M(!1);
    return (c, l) => (x(), H(vp, ie({ ...n, ...b(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var d;
        u.defaultPrevented || (s.value || (d = b(a).triggerElement.value) == null || d.focus(), u.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (u) => {
        var h;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const d = u.target;
        ((h = b(a).triggerElement.value) == null ? void 0 : h.contains(d)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && i.value && u.preventDefault();
      })
    }), {
      default: B(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hx = /* @__PURE__ */ U({
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
    return (i, c) => (x(), H(b(Cr), {
      present: i.forceMount || b(o).open.value
    }, {
      default: B(() => [
        b(o).modal.value ? (x(), H(Vx, ie({
          key: 0,
          ref: b(s)
        }, { ...n, ...b(a), ...i.$attrs }), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), H(Ux, ie({
          key: 1,
          ref: b(s)
        }, { ...n, ...b(a), ...i.$attrs }), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Wx = /* @__PURE__ */ U({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    le();
    const n = kt();
    return (r, o) => (x(), H(b(ke), ie(t, {
      id: b(n).descriptionId
    }), {
      default: B(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Za(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ks(e, t, n = ".", r) {
  if (!Za(t))
    return Ks(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (r && r(o, a, s, n) || (Array.isArray(s) && Array.isArray(o[a]) ? o[a] = [...s, ...o[a]] : Za(s) && Za(o[a]) ? o[a] = Ks(
      s,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = s));
  }
  return o;
}
function Kx(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => Ks(n, r, "", e), {})
  );
}
const Gx = Kx(), Yx = ip(() => {
  const e = M(/* @__PURE__ */ new Map()), t = M(), n = F(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), r = Fi({
    scrollBody: M(!0)
  });
  let o = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", hc && (o == null || o()), t.value = void 0;
  };
  return re(n, (s, i) => {
    var d;
    if (!qt)
      return;
    if (!s) {
      i && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const c = window.innerWidth - document.documentElement.clientWidth, l = { padding: c, margin: 0 }, u = (d = r.scrollBody) != null && d.value ? typeof r.scrollBody.value == "object" ? Gx({
      padding: r.scrollBody.value.padding === !0 ? c : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? c : r.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), hc && (o = hn(
      document,
      "touchmove",
      (y) => Xx(y),
      { passive: !1 }
    )), Te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function Sp(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Yx();
  n.value.set(t, e ?? !1);
  const r = F({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return ox(() => {
    n.value.delete(t);
  }), r;
}
function xp(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : xp(n);
  }
}
function Xx(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && xp(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Jx = /* @__PURE__ */ U({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = kt();
    return Sp(!0), le(), (n, r) => (x(), H(b(ke), {
      as: n.as,
      "as-child": n.asChild,
      "data-state": b(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), Qx = /* @__PURE__ */ U({
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
      return (a = b(t)) != null && a.modal.value ? (x(), H(b(Cr), {
        key: 0,
        present: r.forceMount || b(t).open.value
      }, {
        default: B(() => [
          Z(Jx, ie(r.$attrs, {
            ref: b(n),
            as: r.as,
            "as-child": r.asChild
          }), {
            default: B(() => [
              j(r.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : Y("", !0);
    };
  }
}), Mi = /* @__PURE__ */ U({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = sx();
    return (n, r) => b(t) || n.forceMount ? (x(), H(Rc, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      j(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : Y("", !0);
  }
});
function Op(e) {
  const t = gn(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, a) => {
    const s = (t == null ? void 0 : t.type.props[a]).default;
    return s !== void 0 && (o[a] = s), o;
  }, {}), r = Qp(e);
  return F(() => {
    const o = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((s) => {
      o[Fc(s)] = a[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (r.value[i] !== void 0 && (s[i] = r.value[i]), s), {});
  });
}
function Er(e, t) {
  const n = Op(e), r = t ? Ar(t) : {};
  return F(() => ({
    ...n.value,
    ...r
  }));
}
const Zx = /* @__PURE__ */ U({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = kt();
    return le(), (r, o) => (x(), H(b(ke), ie(t, {
      id: b(n).titleId
    }), {
      default: B(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), e3 = /* @__PURE__ */ U({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = kt(), { forwardRef: r, currentElement: o } = le();
    return n.contentId || (n.contentId = yn(void 0, "reka-dialog-content")), pe(() => {
      n.triggerElement.value = o.value;
    }), (a, s) => (x(), H(b(ke), ie(t, {
      ref: b(r),
      type: a.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": b(n).open.value || !1,
      "aria-controls": b(n).open.value ? b(n).contentId : void 0,
      "data-state": b(n).open.value ? "open" : "closed",
      onClick: b(n).onOpenToggle
    }), {
      default: B(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
});
function bc() {
  const e = M(), t = F(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : Hn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const wc = "data-reka-collection-item";
function Cp(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = M(/* @__PURE__ */ new Map());
    o = {
      collectionRef: M(),
      itemMap: u
    }, mo(r, o);
  } else
    o = Ys(r);
  const a = (u = !1) => {
    const d = o.collectionRef.value;
    if (!d)
      return [];
    const y = Array.from(d.querySelectorAll(`[${wc}]`)), m = Array.from(o.itemMap.value.values()).sort(
      (p, f) => y.indexOf(p.ref) - y.indexOf(f.ref)
    );
    return u ? m : m.filter((p) => p.ref.dataset.disabled !== "");
  }, s = U({
    name: "CollectionSlot",
    setup(u, { slots: d }) {
      const { primitiveElement: y, currentElement: h } = bc();
      return re(h, () => {
        o.collectionRef.value = h.value;
      }), () => qe(Us, { ref: y }, d);
    }
  }), i = U({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(u, { slots: d, attrs: y }) {
      const { primitiveElement: h, currentElement: m } = bc();
      return at((p) => {
        if (m.value) {
          const f = ns(m.value);
          o.itemMap.value.set(f, { ref: m.value, value: u.value }), p(() => o.itemMap.value.delete(f));
        }
      }), () => qe(Us, { ...y, [wc]: "", ref: h }, d);
    }
  }), c = F(() => Array.from(o.itemMap.value.values())), l = F(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: c, itemMapSize: l, CollectionSlot: s, CollectionItem: i };
}
const t3 = "rovingFocusGroup.onEntryFocus", n3 = { bubbles: !1, cancelable: !0 };
function r3(e, t = !1) {
  const n = Ge();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), Ge() !== n))
      return;
}
const [fC, o3] = st("RovingFocusGroup"), a3 = /* @__PURE__ */ U({
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
    const r = e, o = n, { loop: a, orientation: s, dir: i } = Nt(r), c = Ri(i), l = Wn(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), u = M(!1), d = M(!1), y = M(0), { getItems: h, CollectionSlot: m } = Cp({ isProvider: !0 });
    function p(g) {
      const w = !d.value;
      if (g.currentTarget && g.target === g.currentTarget && w && !u.value) {
        const O = new CustomEvent(t3, n3);
        if (g.currentTarget.dispatchEvent(O), o("entryFocus", O), !O.defaultPrevented) {
          const E = h().map((G) => G.ref).filter((G) => G.dataset.disabled !== ""), D = E.find((G) => G.getAttribute("data-active") === ""), V = E.find(
            (G) => G.id === l.value
          ), z = [D, V, ...E].filter(
            Boolean
          );
          r3(z, r.preventScrollOnEntryFocus);
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
    }), o3({
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
        y.value++;
      },
      onFocusableItemRemove: () => {
        y.value--;
      }
    }), (g, w) => (x(), H(b(m), null, {
      default: B(() => [
        Z(b(ke), {
          tabindex: u.value || y.value === 0 ? -1 : 0,
          "data-orientation": b(s),
          as: g.as,
          "as-child": g.asChild,
          dir: b(c),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = (O) => d.value = !0),
          onMouseup: f,
          onFocus: p,
          onBlur: w[1] || (w[1] = (O) => u.value = !1)
        }, {
          default: B(() => [
            j(g.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Ap, s3] = st("PopperRoot"), Ep = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = M();
    return s3({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => j(n.$slots, "default");
  }
}), Pp = /* @__PURE__ */ U({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = le(), o = Ap();
    return Ic(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (a, s) => (x(), H(b(ke), {
      ref: b(n),
      as: a.as,
      "as-child": a.asChild
    }, {
      default: B(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), i3 = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, l3 = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, u3 = /* @__PURE__ */ U({
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
    return le(), (n, r) => (x(), H(b(ke), ie(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: B(() => [
        j(n.$slots, "default", {}, () => [
          n.rounded ? (x(), P("path", l3)) : (x(), P("path", i3))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
function c3(e) {
  return e !== null;
}
function d3(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var f, g, w;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((f = o.arrow) == null ? void 0 : f.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, u] = Gs(n), d = { start: "0%", center: "50%", end: "100%" }[u], y = (((g = o.arrow) == null ? void 0 : g.x) ?? 0) + i / 2, h = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
      let m = "", p = "";
      return l === "bottom" ? (m = s ? d : `${y}px`, p = `${-c}px`) : l === "top" ? (m = s ? d : `${y}px`, p = `${r.floating.height + c}px`) : l === "right" ? (m = `${-c}px`, p = s ? d : `${h}px`) : l === "left" && (m = `${r.floating.width + c}px`, p = s ? d : `${h}px`), { data: { x: m, y: p } };
    }
  };
}
function Gs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function f3(e) {
  const t = M(), n = F(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = F(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.height) ?? 0;
  });
  return pe(() => {
    const o = Hn(e);
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
const kp = {
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
}, [p3, m3] = st("PopperContent"), $p = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ _c({
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
    ...kp
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Ap(), { forwardRef: a, currentElement: s } = le(), i = M(), c = M(), { width: l, height: u } = f3(c), d = F(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), y = F(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), h = F(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = F(() => ({
      padding: y.value,
      boundary: h.value.filter(c3),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: h.value.length > 0
    })), p = XS(() => [
      MS({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && pc({
        ...m.value
      }),
      n.avoidCollisions && NS({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? VS() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && pc({
        ...m.value
      }),
      jS({
        ...m.value,
        apply: ({ elements: q, rects: v, availableWidth: C, availableHeight: A }) => {
          const { width: S, height: W } = v.reference, _ = q.floating.style;
          _.setProperty(
            "--reka-popper-available-width",
            `${C}px`
          ), _.setProperty(
            "--reka-popper-available-height",
            `${A}px`
          ), _.setProperty(
            "--reka-popper-anchor-width",
            `${S}px`
          ), _.setProperty(
            "--reka-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      c.value && WS({ element: c.value, padding: n.arrowPadding }),
      d3({
        arrowWidth: l.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && qS({ strategy: "referenceHidden", ...m.value })
    ]), f = F(() => n.reference ?? o.anchor.value), { floatingStyles: g, placement: w, isPositioned: O, middlewareData: E } = KS(
      f,
      i,
      {
        strategy: n.positionStrategy,
        placement: d,
        whileElementsMounted: (...q) => LS(...q, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: p
      }
    ), D = F(
      () => Gs(w.value)[0]
    ), V = F(
      () => Gs(w.value)[1]
    );
    Ic(() => {
      O.value && r("placed");
    });
    const z = F(
      () => {
        var q;
        return ((q = E.value.arrow) == null ? void 0 : q.centerOffset) !== 0;
      }
    ), G = M("");
    at(() => {
      s.value && (G.value = window.getComputedStyle(s.value).zIndex);
    });
    const I = F(() => {
      var q;
      return ((q = E.value.arrow) == null ? void 0 : q.x) ?? 0;
    }), k = F(() => {
      var q;
      return ((q = E.value.arrow) == null ? void 0 : q.y) ?? 0;
    });
    return m3({
      placedSide: D,
      onArrowChange: (q) => c.value = q,
      arrowX: I,
      arrowY: k,
      shouldHideArrow: z
    }), (q, v) => {
      var C, A, S;
      return x(), P("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: et({
          ...b(g),
          transform: b(O) ? b(g).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G.value,
          "--reka-popper-transform-origin": [
            (C = b(E).transformOrigin) == null ? void 0 : C.x,
            (A = b(E).transformOrigin) == null ? void 0 : A.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((S = b(E).hide) == null ? void 0 : S.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        Z(b(ke), ie({ ref: b(a) }, q.$attrs, {
          "as-child": n.asChild,
          as: q.as,
          "data-side": D.value,
          "data-align": V.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: b(O) ? void 0 : "none"
          }
        }), {
          default: B(() => [
            j(q.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), h3 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, y3 = /* @__PURE__ */ U({
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
    const { forwardRef: t } = le(), n = p3(), r = F(() => h3[n.placedSide.value]);
    return (o, a) => {
      var s, i, c, l;
      return x(), P("span", {
        ref: (u) => {
          b(n).onArrowChange(u);
        },
        style: et({
          position: "absolute",
          left: (s = b(n).arrowX) != null && s.value ? `${(i = b(n).arrowX) == null ? void 0 : i.value}px` : void 0,
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
        Z(u3, ie(o.$attrs, {
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
          default: B(() => [
            j(o.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "rounded", "width", "height"])
      ], 4);
    };
  }
});
function g3(e) {
  const t = lp("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, a) => {
      t.value = t.value + o;
      {
        const s = Ge(), i = a.map((y) => {
          var h, m;
          return {
            ...y,
            textValue: ((h = y.value) == null ? void 0 : h.textValue) ?? ((m = y.ref.textContent) == null ? void 0 : m.trim()) ?? ""
          };
        }), c = i.find((y) => y.ref === s), l = i.map((y) => y.textValue), u = b3(l, t.value, c == null ? void 0 : c.textValue), d = i.find((y) => y.textValue === u);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function v3(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function b3(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = v3(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function w3() {
  const e = M(!1);
  return pe(() => {
    hn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), hn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const S3 = ip(w3), [_o, x3] = st(["MenuRoot", "MenuSub"], "MenuContext"), [Ni, O3] = st("MenuRoot"), C3 = /* @__PURE__ */ U({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: a } = Nt(n), s = Ri(a), i = Wn(n, "open", r), c = M(), l = S3();
    return x3({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), O3({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: s,
      modal: o
    }), (u, d) => (x(), H(b(Ep), null, {
      default: B(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let es = 0;
function A3() {
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
    ), es++, e(() => {
      es === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), es--;
    });
  });
}
function Sc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [Dp, E3] = st("MenuContent"), Tp = /* @__PURE__ */ U({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ _c({
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
    ...kp
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = _o(), a = Ni(), { trapFocus: s, disableOutsidePointerEvents: i, loop: c } = Nt(n);
    A3(), Sp(i.value);
    const l = M(""), u = M(0), d = M(0), y = M(null), h = M("right"), m = M(0), p = M(null), f = M(), { forwardRef: g, currentElement: w } = le(), { handleTypeaheadSearch: O } = g3();
    re(w, (I) => {
      o.onContentChange(I);
    }), Mt(() => {
      window.clearTimeout(u.value);
    });
    function E(I) {
      var q, v;
      return h.value === ((q = y.value) == null ? void 0 : q.side) && kx(I, (v = y.value) == null ? void 0 : v.area);
    }
    async function D(I) {
      var k;
      r("openAutoFocus", I), !I.defaultPrevented && (I.preventDefault(), (k = w.value) == null || k.focus({
        preventScroll: !0
      }));
    }
    function V(I) {
      var _;
      if (I.defaultPrevented)
        return;
      const q = I.target.closest("[data-reka-menu-content]") === I.currentTarget, v = I.ctrlKey || I.altKey || I.metaKey, C = I.key.length === 1, A = fx(
        I,
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
      if (A)
        return A == null ? void 0 : A.focus();
      if (I.code === "Space")
        return;
      const S = ((_ = f.value) == null ? void 0 : _.getItems()) ?? [];
      if (q && (I.key === "Tab" && I.preventDefault(), !v && C && O(I.key, S)), I.target !== w.value || !Ax.includes(I.key))
        return;
      I.preventDefault();
      const W = [...S.map((T) => T.ref)];
      mp.includes(I.key) && W.reverse(), Ex(W);
    }
    function z(I) {
      var k, q;
      (q = (k = I == null ? void 0 : I.currentTarget) == null ? void 0 : k.contains) != null && q.call(k, I.target) || (window.clearTimeout(u.value), l.value = "");
    }
    function G(I) {
      var v;
      if (!Ws(I))
        return;
      const k = I.target, q = m.value !== I.clientX;
      if ((v = I == null ? void 0 : I.currentTarget) != null && v.contains(k) && q) {
        const C = I.clientX > m.value ? "right" : "left";
        h.value = C, m.value = I.clientX;
      }
    }
    return E3({
      onItemEnter: (I) => !!E(I),
      onItemLeave: (I) => {
        var k;
        E(I) || ((k = w.value) == null || k.focus(), p.value = null);
      },
      onTriggerLeave: (I) => !!E(I),
      searchRef: l,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (I) => {
        y.value = I;
      }
    }), (I, k) => (x(), H(b(gp), {
      "as-child": "",
      trapped: b(s),
      onMountAutoFocus: D,
      onUnmountAutoFocus: k[7] || (k[7] = (q) => r("closeAutoFocus", q))
    }, {
      default: B(() => [
        Z(b(Li), {
          "as-child": "",
          "disable-outside-pointer-events": b(i),
          onEscapeKeyDown: k[2] || (k[2] = (q) => r("escapeKeyDown", q)),
          onPointerDownOutside: k[3] || (k[3] = (q) => r("pointerDownOutside", q)),
          onFocusOutside: k[4] || (k[4] = (q) => r("focusOutside", q)),
          onInteractOutside: k[5] || (k[5] = (q) => r("interactOutside", q)),
          onDismiss: k[6] || (k[6] = (q) => r("dismiss"))
        }, {
          default: B(() => [
            Z(b(a3), {
              ref_key: "rovingFocusGroupRef",
              ref: f,
              "current-tab-stop-id": p.value,
              "onUpdate:currentTabStopId": k[0] || (k[0] = (q) => p.value = q),
              "as-child": "",
              orientation: "vertical",
              dir: b(a).dir.value,
              loop: b(c),
              onEntryFocus: k[1] || (k[1] = (q) => {
                r("entryFocus", q), b(a).isUsingKeyboardRef.value || q.preventDefault();
              })
            }, {
              default: B(() => [
                Z(b($p), {
                  ref: b(g),
                  role: "menu",
                  as: I.as,
                  "as-child": I.asChild,
                  "aria-orientation": "vertical",
                  "data-reka-menu-content": "",
                  "data-state": b(hp)(b(o).open.value),
                  dir: b(a).dir.value,
                  side: I.side,
                  "side-offset": I.sideOffset,
                  align: I.align,
                  "align-offset": I.alignOffset,
                  "avoid-collisions": I.avoidCollisions,
                  "collision-boundary": I.collisionBoundary,
                  "collision-padding": I.collisionPadding,
                  "arrow-padding": I.arrowPadding,
                  "prioritize-position": I.prioritizePosition,
                  "position-strategy": I.positionStrategy,
                  "update-position-strategy": I.updatePositionStrategy,
                  sticky: I.sticky,
                  "hide-when-detached": I.hideWhenDetached,
                  reference: I.reference,
                  onKeydown: V,
                  onBlur: z,
                  onPointermove: G
                }, {
                  default: B(() => [
                    j(I.$slots, "default")
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
}), P3 = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Dp(), { forwardRef: r } = le(), { CollectionItem: o } = Cp(), a = M(!1);
    async function s(c) {
      if (!c.defaultPrevented && Ws(c)) {
        if (t.disabled)
          n.onItemLeave(c);
        else if (!n.onItemEnter(c)) {
          const u = c.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(c) {
      await Te(), !c.defaultPrevented && Ws(c) && n.onItemLeave(c);
    }
    return (c, l) => (x(), H(b(o), {
      value: { textValue: c.textValue }
    }, {
      default: B(() => [
        Z(b(ke), ie({
          ref: b(r),
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
            await Te(), !(u.defaultPrevented || c.disabled) && (a.value = !0);
          }),
          onBlur: l[1] || (l[1] = async (u) => {
            await Te(), !u.defaultPrevented && (a.value = !1);
          })
        }), {
          default: B(() => [
            j(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), k3 = /* @__PURE__ */ U({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = le(), s = Ni(), i = Dp(), c = M(!1);
    async function l() {
      const u = a.value;
      if (!n.disabled && u) {
        const d = new CustomEvent(Ox, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", d), await Te(), d.defaultPrevented ? c.value = !1 : s.onClose();
      }
    }
    return (u, d) => (x(), H(P3, ie(n, {
      ref: b(o),
      onClick: l,
      onPointerdown: d[0] || (d[0] = () => {
        c.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (y) => {
        var h;
        await Te(), !y.defaultPrevented && (c.value || (h = y.currentTarget) == null || h.click());
      }),
      onKeydown: d[2] || (d[2] = async (y) => {
        const h = b(i).searchRef.value !== "";
        u.disabled || h && y.key === " " || b(Hs).includes(y.key) && (y.currentTarget.click(), y.preventDefault());
      })
    }), {
      default: B(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $3 = /* @__PURE__ */ U({
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
    const n = e, r = t, o = Er(n, r), a = _o(), { forwardRef: s, currentElement: i } = le();
    return wp(i), (c, l) => (x(), H(Tp, ie(b(o), {
      ref: b(s),
      "trap-focus": b(a).open.value,
      "disable-outside-pointer-events": b(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (u) => b(a).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = St((u) => r("focusOutside", u), ["prevent"]))
    }), {
      default: B(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), D3 = /* @__PURE__ */ U({
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
    const o = Er(e, t), a = _o();
    return (s, i) => (x(), H(Tp, ie(b(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (c) => b(a).onOpenChange(!1))
    }), {
      default: B(() => [
        j(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), T3 = /* @__PURE__ */ U({
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
    const o = Er(e, t), a = _o(), s = Ni();
    return (i, c) => (x(), H(b(Cr), {
      present: i.forceMount || b(a).open.value
    }, {
      default: B(() => [
        b(s).modal.value ? (x(), H($3, ve(ie({ key: 0 }, { ...i.$attrs, ...b(o) })), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), H(D3, ve(ie({ key: 1 }, { ...i.$attrs, ...b(o) })), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), F3 = /* @__PURE__ */ U({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(Mi), ve(Ee(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), R3 = /* @__PURE__ */ U({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(ke), ie(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), I3 = /* @__PURE__ */ U({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(Pp), ve(Ee(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _3 = /* @__PURE__ */ U({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(Mi), ve(Ee(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Fp, B3] = st("DropdownMenuRoot"), Rp = /* @__PURE__ */ U({
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
    const o = Wn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), a = M(), { modal: s, dir: i } = Nt(n), c = Ri(i);
    return B3({
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
    }), (l, u) => (x(), H(b(C3), {
      open: b(o),
      "onUpdate:open": u[0] || (u[0] = (d) => Zp(o) ? o.value = d : null),
      dir: b(c),
      modal: b(s)
    }, {
      default: B(() => [
        j(l.$slots, "default", { open: b(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Ip = /* @__PURE__ */ U({
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
    const a = Fp(), s = M(!1);
    function i(c) {
      c.defaultPrevented || (s.value || setTimeout(() => {
        var l;
        (l = a.triggerElement.value) == null || l.focus();
      }, 0), s.value = !1, c.preventDefault());
    }
    return a.contentId || (a.contentId = yn(void 0, "reka-dropdown-menu-content")), (c, l) => {
      var u;
      return x(), H(b(T3), ie(b(o), {
        id: b(a).contentId,
        "aria-labelledby": (u = b(a)) == null ? void 0 : u.triggerId,
        style: {
          "--reka-dropdown-menu-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-dropdown-menu-content-available-width": "var(--reka-popper-available-width)",
          "--reka-dropdown-menu-content-available-height": "var(--reka-popper-available-height)",
          "--reka-dropdown-menu-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-dropdown-menu-trigger-height": "var(--reka-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: l[0] || (l[0] = (d) => {
          var p;
          if (d.defaultPrevented) return;
          const y = d.detail.originalEvent, h = y.button === 0 && y.ctrlKey === !0, m = y.button === 2 || h;
          (!b(a).modal.value || m) && (s.value = !0), (p = b(a).triggerElement.value) != null && p.contains(d.target) && d.preventDefault();
        })
      }), {
        default: B(() => [
          j(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), L3 = /* @__PURE__ */ U({
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
    return le(), (a, s) => (x(), H(b(k3), ve(Ee({ ...n, ...b(o) })), {
      default: B(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _p = /* @__PURE__ */ U({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(F3), ve(Ee(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), M3 = /* @__PURE__ */ U({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (x(), H(b(R3), ve(Ee(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Bp = /* @__PURE__ */ U({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Fp(), { forwardRef: r, currentElement: o } = le();
    return pe(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = yn(void 0, "reka-dropdown-menu-trigger")), (a, s) => (x(), H(b(I3), { "as-child": "" }, {
      default: B(() => [
        Z(b(ke), {
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
          onClick: s[0] || (s[0] = async (i) => {
            var c;
            !a.disabled && i.button === 0 && i.ctrlKey === !1 && ((c = b(n)) == null || c.onOpenToggle(), await Te(), b(n).open.value && i.preventDefault());
          }),
          onKeydown: s[1] || (s[1] = rn(
            (i) => {
              a.disabled || (["Enter", " "].includes(i.key) && b(n).onOpenToggle(), i.key === "ArrowDown" && b(n).onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: B(() => [
            j(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
});
function N3(e, t) {
  const n = lp(!1, 300), r = M(null), o = JS();
  function a() {
    r.value = null, n.value = !1;
  }
  function s(i, c) {
    const l = i.currentTarget, u = { x: i.clientX, y: i.clientY }, d = j3(u, l.getBoundingClientRect()), y = q3(u, d), h = z3(c.getBoundingClientRect()), m = U3([...y, ...h]);
    r.value = m, n.value = !0;
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
        const d = u.target, y = { x: u.clientX, y: u.clientY }, h = ((f = e.value) == null ? void 0 : f.contains(d)) || ((g = t.value) == null ? void 0 : g.contains(d)), m = !V3(y, r.value), p = !!d.closest("[data-grace-area-trigger]");
        h ? a() : (m || p) && (a(), o.trigger());
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
function j3(e, t) {
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
function q3(e, t, n = 5) {
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
function z3(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function V3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function U3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), H3(t);
}
function H3(e) {
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
const W3 = /* @__PURE__ */ U({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (x(), H(b(y3), ve(Ee(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lp = "tooltip.open", [ji, K3] = st("TooltipProvider"), G3 = /* @__PURE__ */ U({
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
    const c = M(!0), l = M(!1), { start: u, stop: d } = up(() => {
      c.value = !0;
    }, r, { immediate: !1 });
    return K3({
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
    }), (y, h) => j(y.$slots, "default");
  }
}), [Bo, Y3] = st("TooltipRoot"), X3 = /* @__PURE__ */ U({
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
    const o = ji(), a = F(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = F(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = F(() => n.disabled ?? o.disabled.value), c = F(() => n.delayDuration ?? o.delayDuration.value), l = F(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = Wn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    re(u, (O) => {
      o.onClose && (O ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Lp))) : o.onClose());
    });
    const d = M(!1), y = M(), h = F(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: m, stop: p } = up(() => {
      d.value = !0, u.value = !0;
    }, c, { immediate: !1 });
    function f() {
      p(), d.value = !1, u.value = !0;
    }
    function g() {
      p(), u.value = !1;
    }
    function w() {
      m();
    }
    return Y3({
      contentId: "",
      open: u,
      stateAttribute: h,
      trigger: y,
      onTriggerChange(O) {
        y.value = O;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? w() : f();
      },
      onTriggerLeave() {
        a.value ? g() : p();
      },
      onOpen: f,
      onClose: g,
      disableHoverableContent: a,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (O, E) => (x(), H(b(Ep), null, {
      default: B(() => [
        j(O.$slots, "default", { open: b(u) })
      ]),
      _: 3
    }));
  }
}), Mp = /* @__PURE__ */ U({
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
    const n = e, r = t, o = Bo(), { forwardRef: a } = le(), s = em(), i = F(() => {
      var u;
      return (u = s.default) == null ? void 0 : u.call(s, {});
    }), c = F(() => {
      var y;
      if (n.ariaLabel)
        return n.ariaLabel;
      let u = "";
      function d(h) {
        typeof h.children == "string" && h.type !== $c ? u += h.children : Array.isArray(h.children) && h.children.forEach((m) => d(m));
      }
      return (y = i.value) == null || y.forEach((h) => d(h)), u;
    }), l = F(() => {
      const { ariaLabel: u, ...d } = n;
      return d;
    });
    return pe(() => {
      hn(window, "scroll", (u) => {
        const d = u.target;
        d != null && d.contains(o.trigger.value) && o.onClose();
      }), hn(window, Lp, o.onClose);
    }), (u, d) => (x(), H(b(Li), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: d[0] || (d[0] = (y) => r("escapeKeyDown", y)),
      onPointerDownOutside: d[1] || (d[1] = (y) => {
        var h;
        b(o).disableClosingTrigger.value && ((h = b(o).trigger.value) != null && h.contains(y.target)) && y.preventDefault(), r("pointerDownOutside", y);
      }),
      onFocusOutside: d[2] || (d[2] = St(() => {
      }, ["prevent"])),
      onDismiss: d[3] || (d[3] = (y) => b(o).onClose())
    }, {
      default: B(() => [
        Z(b($p), ie({
          ref: b(a),
          "data-state": b(o).stateAttribute.value
        }, { ...u.$attrs, ...l.value }, { style: {
          "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
          "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
          "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
          "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
          "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
        } }), {
          default: B(() => [
            j(u.$slots, "default"),
            Z(b(YS), {
              id: b(o).contentId,
              role: "tooltip"
            }, {
              default: B(() => [
                ce(Q(c.value), 1)
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
}), J3 = /* @__PURE__ */ U({
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
    const n = Op(e), { forwardRef: r, currentElement: o } = le(), { trigger: a, onClose: s } = Bo(), i = ji(), { isPointerInTransit: c, onPointerExit: l } = N3(a, o);
    return i.isPointerInTransitRef = c, l(() => {
      s();
    }), (u, d) => (x(), H(Mp, ie({ ref: b(r) }, b(n)), {
      default: B(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Q3 = /* @__PURE__ */ U({
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
    const n = e, r = t, o = Bo(), a = Er(n, r), { forwardRef: s } = le();
    return (i, c) => (x(), H(b(Cr), {
      present: i.forceMount || b(o).open.value
    }, {
      default: B(() => [
        (x(), H(jr(b(o).disableHoverableContent.value ? Mp : J3), ie({ ref: b(s) }, b(a)), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Z3 = /* @__PURE__ */ U({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(Mi), ve(Ee(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), e4 = /* @__PURE__ */ U({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Bo(), r = ji();
    n.contentId || (n.contentId = yn(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: a } = le(), s = M(!1), i = M(!1), c = F(() => n.disabled.value ? {} : {
      click: p,
      focus: h,
      pointermove: d,
      pointerleave: y,
      pointerdown: u,
      blur: m
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
    function h(f) {
      var g, w;
      s.value || n.ignoreNonKeyboardFocus.value && !((w = (g = f.target).matches) != null && w.call(g, ":focus-visible")) || n.onOpen();
    }
    function m() {
      n.onClose();
    }
    function p() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (f, g) => (x(), H(b(Pp), {
      "as-child": "",
      reference: f.reference
    }, {
      default: B(() => [
        Z(b(ke), ie({
          ref: b(o),
          "aria-describedby": b(n).open.value ? b(n).contentId : void 0,
          "data-state": b(n).stateAttribute.value,
          as: f.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Ec(c.value)), {
          default: B(() => [
            j(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), t4 = { class: "text-lg font-semibold text-gray-900" }, n4 = { key: 0 }, r4 = { class: "p-6" }, o4 = /* @__PURE__ */ U({
  __name: "CollapsableSection",
  props: {
    header: { default: void 0 },
    open: { type: Boolean, default: !1 },
    headerColor: { default: void 0 }
  },
  setup(e) {
    const t = e, n = M(t.open);
    return re(
      () => t.open,
      (r) => n.value = r
    ), pe(() => {
      n.value = t.open;
    }), (r, o) => (x(), H(b(Ii), {
      defaultOpen: r.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a),
      class: "rounded-lg border border-gray-200 bg-white shadow"
    }, {
      default: B(() => [
        Z(b(Bi), {
          class: "focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          style: et({ backgroundColor: r.headerColor })
        }, {
          default: B(() => [
            $("h3", t4, [
              r.header ? (x(), P("span", n4, Q(r.header), 1)) : j(r.$slots, "trigger", { key: 1 })
            ]),
            $("div", {
              class: J(["text-primary-600 transition-transform duration-300 ease-in-out", { "rotate-180": n.value }])
            }, [
              Z(b(xe), {
                icon: b(Qs),
                class: "h-5 w-5"
              }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 3
        }, 8, ["style"]),
        Z(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: B(() => [
            $("div", r4, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), pC = /* @__PURE__ */ U({
  __name: "Dropdown",
  props: {
    align: { default: Gf.START },
    alignOffset: { default: 5 },
    openOnHover: { type: Boolean, default: !1 },
    hoverDelay: { default: 150 }
  },
  setup(e) {
    const t = e, n = M(!1);
    let r = null;
    const o = async () => {
      t.openOnHover && (r && (clearTimeout(r), r = null), await Te(), n.value = !0);
    }, a = () => {
      t.openOnHover && (r = setTimeout(async () => {
        await Te(), n.value = !1, r = null;
      }, t.hoverDelay));
    }, s = (i) => {
      n.value = i;
    };
    return (i, c) => (x(), H(b(Rp), {
      open: n.value,
      "onUpdate:open": [
        c[0] || (c[0] = (l) => n.value = l),
        s
      ]
    }, {
      default: B(() => [
        Z(b(Bp), { "aria-label": "Dropdown" }, {
          default: B(() => [
            j(i.$slots, "trigger")
          ]),
          _: 3
        }),
        Z(b(_p), null, {
          default: B(() => [
            Z(b(Ip), ie({ alignOffset: i.alignOffset }, i.$attrs, {
              align: i.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]",
              onMouseenter: o,
              onMouseleave: a
            }), {
              default: B(() => [
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
}), mC = /* @__PURE__ */ U({
  __name: "DropdownLink",
  props: {
    href: {}
  },
  setup(e) {
    return (t, n) => (x(), H(b(L3), null, {
      default: B(() => [
        Z(b(ft), ie(t.$attrs, {
          href: t.href,
          class: "focusable flex w-full items-center gap-2 rounded px-8 py-6 text-left text-base leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden"
        }), {
          default: B(() => [
            j(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["href"])
      ]),
      _: 3
    }));
  }
}), hC = /* @__PURE__ */ U({
  __name: "DropdownSeparator",
  setup(e) {
    return (t, n) => (x(), H(b(M3), { class: "mx-1 my-px h-px bg-gray-300" }));
  }
}), a4 = ["href", "target", "tabindex", "aria-disabled"], s4 = "focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium transition-colors duration-200 select-none", yC = /* @__PURE__ */ U({
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
      return n.theme !== Se.NO_STYLE && o.push(s4), o.push(t[n.theme]), o;
    };
    return (o, a) => o.href && (o.method || o.data) ? (x(), H(b(ft), {
      key: 0,
      href: o.href,
      method: o.method,
      data: o.data,
      class: J(r()),
      disabled: o.disabled,
      as: "button",
      tabindex: "0"
    }, {
      default: B(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class", "disabled"])) : (x(), P("a", {
      key: 1,
      href: o.href,
      target: o.target,
      class: J(r()),
      tabindex: o.disabled ? -1 : 0,
      "aria-disabled": o.disabled,
      onClick: a[0] || (a[0] = (s) => o.disabled && s.preventDefault())
    }, [
      j(o.$slots, "default")
    ], 10, a4));
  }
}), i4 = {
  class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
  type: "button"
}, l4 = { class: "mx-1 w-2" }, u4 = ["aria-labelledby"], gC = /* @__PURE__ */ U({
  __name: "LinkDropdownButton",
  props: {
    align: { default: Gf.START },
    alignOffset: { default: 5 },
    title: { default: void 0 }
  },
  setup(e) {
    const t = M(!1);
    return (n, r) => (x(), H(b(Rp), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: B(() => [
        Z(b(Bp), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: B(() => [
            $("button", i4, [
              ce(Q(n.title) + " ", 1),
              $("span", l4, [
                Z(b(xe), { icon: b(Js) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        Z(b(_p), null, {
          default: B(() => [
            Z(b(Ip), ie({ alignOffset: n.alignOffset }, n.$attrs, {
              align: n.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            }), {
              default: B(() => [
                $("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
                  "aria-labelledby": n.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  j(n.$slots, "default")
                ], 8, u4)
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
}), c4 = ["href"], vC = /* @__PURE__ */ U({
  __name: "LinkDropdownButtonItem",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, n) => (x(), P("li", null, [
      $("a", {
        class: "focusable inline-flex w-full items-center justify-center bg-transparent px-4 py-2 text-sm font-normal whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href
      }, Q(t.title), 9, c4)
    ]));
  }
}), bC = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (x(), H(b(o4), { header: e.header }, {
      default: B(() => [
        Z(b(E4), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, d4 = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, f4 = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, p4 = {
  key: 0,
  class: "text-center"
}, m4 = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, h4 = { class: "flex-start w-full md:flex" }, y4 = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, g4 = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, v4 = { class: "mb-1 flex justify-between" }, b4 = { class: "text-sm text-neutral-500" }, w4 = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, S4 = {
  key: 1,
  class: "text-sm text-primary-500"
}, x4 = { class: "text-sm text-neutral-500" }, O4 = { class: "font-medium" }, C4 = {
  key: 0,
  class: "line-through"
}, A4 = ["innerHTML"], E4 = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return gr.add(Sm, rs, Cm, dm, Om), (t, n) => e.logs == null ? (x(), P("div", d4, [
      Z(b(qi))
    ])) : (x(), P("div", f4, [
      e.logs.total ? (x(), P("ol", m4, [
        (x(!0), P(ne, null, be(e.logs.data, (r) => (x(), P("li", {
          key: r.id
        }, [
          $("div", h4, [
            $("div", y4, [
              Z(b(xe), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            $("div", g4, [
              $("div", v4, [
                $("span", b4, [
                  ce(Q(r.event_formatted) + " ", 1),
                  r.reference ? (x(), P("span", w4, Q(r.reference), 1)) : Y("", !0),
                  r.causer ? (x(), P(ne, { key: 1 }, [
                    r.causer.id ? (x(), H(b(ft), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: B(() => [
                        ce(" (" + Q(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (x(), P("span", S4, "(" + Q(r.causer.first_name) + ")", 1))
                  ], 64)) : Y("", !0)
                ]),
                $("span", x4, Q(r.created_date_full), 1)
              ]),
              (x(!0), P(ne, null, be(r.changes_formatted, (o, a) => (x(), P("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                $("span", O4, Q(a) + ":", 1),
                o.old ? (x(), P("span", C4, Q(o.old), 1)) : Y("", !0),
                ce(" " + Q(o.new), 1)
              ]))), 128)),
              r.description_details ? (x(), P("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, A4)) : Y("", !0)
            ])
          ])
        ]))), 128))
      ])) : (x(), P("p", p4, "No Data")),
      e.logs.links ? (x(), H(b(Np), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Y("", !0)
    ]));
  }
}, wC = /* @__PURE__ */ U({
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
    const n = e, r = t, o = M(null);
    re(
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
    const i = F(() => {
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
    }), c = M(!1), l = M(null), u = M(0), d = M(0), y = M(0), h = M(0), m = M(null), p = M(null), f = (O, E) => {
      c.value = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", g), l.value = E, u.value = O.clientX, d.value = O.clientY, y.value = o.value.offsetWidth, h.value = o.value.offsetHeight;
    }, g = (O) => {
      c.value = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", g);
    }, w = (O) => {
      if (!c.value) return;
      const E = (O.clientX - u.value) * 2, D = O.clientY - d.value;
      l.value.includes("x") && (m.value = y.value + E + "px"), l.value.includes("-x") && (m.value = y.value - E + "px"), l.value.includes("y") && (p.value = h.value + D + "px");
    };
    return (O, E) => (x(), H(Rc, { to: "body" }, [
      Z(un, { "leave-active-class": "duration-200" }, {
        default: B(() => [
          He($("div", {
            class: J(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            Z(un, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: B(() => [
                He($("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, [
                  $("div", {
                    class: J(["backdrop absolute inset-0 bg-gray-500 opacity-75", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [ln, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            Z(un, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: B(() => [
                He($("div", {
                  ref_key: "modalContent",
                  ref: o,
                  class: J(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", {
                    [i.value]: !!i.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: et({
                    userSelect: c.value ? "none" : "auto",
                    transition: c.value ? "none" : "",
                    width: m.value || "",
                    height: p.value || "",
                    maxWidth: m.value || "",
                    maxHeight: p.value || ""
                  })
                }, [
                  e.show ? j(O.$slots, "default", { key: 0 }) : Y("", !0),
                  e.resizable ? (x(), P(ne, { key: 1 }, [
                    $("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: E[0] || (E[0] = (D) => f(D, "y")),
                      onMouseup: g
                    }, null, 32),
                    $("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: E[1] || (E[1] = (D) => f(D, "-x")),
                      onMouseup: g
                    }, null, 32),
                    $("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: E[2] || (E[2] = (D) => f(D, "x")),
                      onMouseup: g
                    }, null, 32),
                    $("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: E[3] || (E[3] = (D) => f(D, "xy")),
                      onMouseup: g
                    }, null, 32),
                    $("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: E[4] || (E[4] = (D) => f(D, "-xy")),
                      onMouseup: g
                    }, null, 32)
                  ], 64)) : Y("", !0)
                ], 6), [
                  [ln, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [ln, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), P4 = {
  key: 2,
  class: "mb-3"
}, k4 = {
  key: 3,
  class: "mt-5 flex justify-end gap-1.5"
}, SC = /* @__PURE__ */ U({
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
    const t = e, n = Mn(e, "modelValue"), r = (o) => {
      n.value = o;
    };
    return pe(() => {
      t.defaultOpen && (n.value = !0);
    }), Mt(() => {
      n.value = !1;
    }), re(
      () => t.defaultOpen,
      (o) => {
        n.value = o;
      }
    ), (o, a) => (x(), H(b(gx), {
      defaultOpen: o.defaultOpen,
      open: n.value,
      "onUpdate:open": [
        a[0] || (a[0] = (s) => n.value = s),
        r
      ]
    }, {
      default: B(() => [
        o.$slots.trigger ? (x(), H(b(e3), {
          key: 0,
          asChild: ""
        }, {
          default: B(() => [
            j(o.$slots, "trigger")
          ]),
          _: 3
        })) : Y("", !0),
        Z(b(_3), null, {
          default: B(() => [
            Z(b(Qx), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" }),
            Z(b(Hx), ie({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 shadow-lg/20 focus:outline-none" }, o.$attrs), {
              default: B(() => [
                o.title || o.$slots.header ? (x(), H(b(Zx), {
                  key: 0,
                  class: "m-0 text-lg font-semibold"
                }, {
                  default: B(() => [
                    j(o.$slots, "header", {}, () => [
                      ce(Q(o.title), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                o.description || o.$slots.description ? (x(), H(b(Wx), {
                  key: 1,
                  class: "mt-2 text-sm leading-normal"
                }, {
                  default: B(() => [
                    j(o.$slots, "description", {}, () => [
                      ce(Q(o.description), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                o.title || o.$slots.header || o.description || o.$slots.description ? (x(), P("div", P4)) : Y("", !0),
                j(o.$slots, "default"),
                o.$slots.footer ? (x(), P("div", k4, [
                  j(o.$slots, "footer")
                ])) : Y("", !0),
                Z(b(vx), {
                  class: "focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none",
                  "aria-label": "Close"
                }, {
                  default: B(() => [
                    Z(b(xe), { icon: b(Jr) }, null, 8, ["icon"])
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
}), $4 = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, D4 = { class: "ml-3 flex-1 whitespace-nowrap" }, xC = /* @__PURE__ */ U({
  __name: "NavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = F(
      () => t.active ? "cursor-pointer focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "cursor-pointer focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, o) => (x(), H(b(ft), {
      href: r.href,
      class: J(n.value)
    }, {
      default: B(() => [
        r.$slots.icon ? (x(), P("div", $4, [
          j(r.$slots, "icon")
        ])) : Y("", !0),
        $("span", D4, [
          j(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), T4 = { class: "pagination flex justify-between" }, F4 = ["value", "selected"], R4 = {
  key: 0,
  "aria-label": "Page navigation"
}, I4 = ["innerHTML"], _4 = ["innerHTML", "onClick"], Np = /* @__PURE__ */ U({
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
    const n = t, r = e, o = M(r.defaultPerPage), a = [10, 25, 50, 100, 250], s = F(() => {
      if (!r.links || r.links.length <= 3)
        return r.links;
      const l = r.links[0], u = r.links[r.links.length - 1], d = r.links.findIndex((m) => m.active);
      let y = Math.max(1, d - Math.floor(r.maxPagesToShow / 2)), h = Math.min(r.links.length - 2, y + r.maxPagesToShow - 1);
      return h - y < r.maxPagesToShow - 1 && (y = Math.max(1, h - r.maxPagesToShow + 1)), [l, ...r.links.slice(y, h + 1), u];
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
    return (l, u) => (x(), P("div", T4, [
      $("div", null, [
        l.showPerPage ? (x(), H(b(ag), {
          key: 0,
          type: "select",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d),
          class: "per-page-input w-20",
          onChanged: c
        }, {
          default: B(() => [
            (x(), P(ne, null, be(a, (d) => $("option", {
              key: d,
              value: d,
              selected: d == o.value
            }, Q(d), 9, F4)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0)
      ]),
      s.value.length > 3 ? (x(), P("nav", R4, [
        $("ul", {
          class: J(["list-style-none flex", { [l.customListClass]: l.customListClass }])
        }, [
          (x(!0), P(ne, null, be(s.value, (d, y) => (x(), P("li", { key: y }, [
            l.linkReturn ? (x(), P(ne, { key: 0 }, [
              d.url === null ? (x(), P("button", {
                key: 0,
                class: J(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: u[1] || (u[1] = (h) => i(""))
              }, null, 10, I4)) : (x(), P("button", {
                key: 1,
                class: J(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [l.customLinkClass]: l.customLinkClass,
                  [l.customActiveLinkClass]: d.active && l.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (h) => i(d.url)
              }, null, 10, _4))
            ], 64)) : (x(), P(ne, { key: 1 }, [
              d.url === null ? (x(), H(b(ft), {
                key: 0,
                class: J(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (x(), H(b(ft), {
                key: 1,
                class: J(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
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
      u[2] || (u[2] = $("div", null, null, -1))
    ]));
  }
}), OC = /* @__PURE__ */ U({
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
        default: B(() => [
          j(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-te-target", "aria-controls"]);
    };
  }
}), CC = /* @__PURE__ */ U({
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
    }, a = F(() => [
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
    return (s, i) => (x(), P("tr", {
      class: J(a.value),
      onClick: o
    }, [
      j(s.$slots, "default")
    ], 2));
  }
}), B4 = ["onClick"], AC = /* @__PURE__ */ U({
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
    const n = e, r = t, o = v2({
      sortable: n.sortable,
      selectable: n.selectable,
      multiple: !0,
      sticky: n.sticky,
      resource: n.resource
    });
    mo("table", {
      ...o,
      props: n,
      emit: r
    });
    const a = F(() => n.columns ? n.columns : n.autoGenerateColumns && n.data && n.data.length > 0 ? Object.keys(n.data[0]).map((l) => ({
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
    }, c = F(() => {
      var l;
      return ((l = o.rows) == null ? void 0 : l.value) || n.data || [];
    });
    return (l, u) => (x(), H(b(O2), ve(Ee(n)), {
      default: B(() => {
        var d;
        return [
          a.value.length > 0 ? (x(), P(ne, { key: 0 }, [
            Z(b(C2), null, {
              default: B(() => [
                $("tr", null, [
                  (x(!0), P(ne, null, be(a.value, (y) => (x(), H(b(F2), {
                    key: y.key,
                    column: y.key,
                    sortable: y.sortable,
                    width: y.width || void 0,
                    align: y.align || "left",
                    onClick: (h) => y.sortable ? i(y.key) : null
                  }, {
                    default: B(() => [
                      ce(Q(y.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["column", "sortable", "width", "align", "onClick"]))), 128))
                ])
              ]),
              _: 1
            }),
            Z(b($2), {
              data: c.value,
              loading: (d = b(o).isLoading) == null ? void 0 : d.value,
              "empty-message": n.emptyMessage
            }, {
              default: B(() => [
                (x(!0), P(ne, null, be(c.value, (y, h) => {
                  var m, p;
                  return x(), P("tr", {
                    key: y.id || h,
                    class: J([
                      "border-b border-gray-200 transition-colors hover:bg-gray-50",
                      {
                        "cursor-pointer": n.selectable,
                        "bg-blue-50": (p = (m = b(o)).isSelected) == null ? void 0 : p.call(m, y)
                      }
                    ]),
                    onClick: (f) => s(y, h)
                  }, [
                    (x(!0), P(ne, null, be(a.value, (f) => (x(), H(b(uo), {
                      key: f.key,
                      align: f.align || "left",
                      width: f.width || void 0,
                      nowrap: f.key === "id"
                    }, {
                      default: B(() => [
                        j(l.$slots, `cell-${f.key}`, {
                          row: y,
                          column: f,
                          value: y[f.key]
                        }, () => [
                          ce(Q(y[f.key]), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["align", "width", "nowrap"]))), 128))
                  ], 10, B4);
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
}), EC = /* @__PURE__ */ U({
  __name: "DangerButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(Se).DANGER,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: B(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), PC = /* @__PURE__ */ U({
  __name: "WarningButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(Se).WARNING,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: B(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), kC = /* @__PURE__ */ U({
  __name: "InfoButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(Se).INFO,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: B(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), $C = /* @__PURE__ */ U({
  __name: "SuccessButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(Se).SUCCESS,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: B(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), DC = /* @__PURE__ */ U({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = F(
      () => t.active ? "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, o) => (x(), H(b(ft), {
      href: r.href,
      class: J(n.value)
    }, {
      default: B(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), L4 = /* @__PURE__ */ U({
  __name: "SecondaryButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(Se).SECONDARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: B(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), M4 = {
  key: 0,
  class: "border-b border-gray-200 bg-gray-50/50 px-6 py-4"
}, N4 = { class: "flex items-center justify-between" }, j4 = { class: "text-lg font-semibold text-gray-900" }, q4 = { key: 0 }, z4 = { class: "p-6" }, TC = /* @__PURE__ */ U({
  __name: "Section",
  props: {
    header: {},
    overflow: { type: Boolean, default: !1 },
    variant: { default: "default" },
    unstyled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = nm(), r = F(() => {
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
    }), o = F(() => {
      const s = [];
      return t.unstyled || s.push(r.value), t.overflow && s.push("overflow-hidden"), n.class && typeof n.class == "string" && s.push(n.class), s.filter(Boolean).join(" ");
    }), a = F(() => {
      const { class: s, ...i } = n;
      return i;
    });
    return (s, i) => (x(), P("div", ie({ class: o.value }, a.value), [
      s.header ? (x(), P("div", M4, [
        $("div", N4, [
          $("h3", j4, Q(s.header), 1),
          s.$slots.headerButton ? (x(), P("div", q4, [
            j(s.$slots, "headerButton")
          ])) : Y("", !0)
        ])
      ])) : Y("", !0),
      $("div", z4, [
        j(s.$slots, "default")
      ])
    ], 16));
  }
}), qi = /* @__PURE__ */ U({
  __name: "Spinner",
  props: {
    size: { default: "md" },
    color: { default: void 0 }
  },
  setup(e) {
    const t = e, n = F(() => {
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
    }), r = F(() => t.color ? t.color : "text-primary");
    return (o, a) => (x(), P("div", {
      class: J([
        "inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        n.value,
        r.value
      ]),
      role: "status",
      "aria-label": "Loading"
    }, a[0] || (a[0] = [
      $("span", { class: "sr-only" }, "Loading...", -1)
    ]), 2));
  }
}), V4 = ["onClick"], U4 = { class: "group-hover:text-primary-600 text-2xl font-bold text-gray-900 transition-colors" }, H4 = { class: "text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900" }, FC = /* @__PURE__ */ U({
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
    const n = t, r = e, o = qf(), a = (i) => {
      let c = i;
      s(i) && (c = null), n("updateSearch", c);
    }, s = (i) => {
      const c = {};
      return o.url.includes("?") && new URLSearchParams(o.url.split("?")[1]).forEach((u, d) => {
        c[d] = u;
      }), r.statusName != null ? c[r.statusName] == i : c.status == i;
    };
    return (i, c) => (x(), P("div", {
      class: J(["grid gap-4", [i.customContainerClass]]),
      style: { "grid-template-columns": "repeat(auto-fit, minmax(164px, 1fr))" }
    }, [
      (x(!0), P(ne, null, be(i.stats, (l) => (x(), P("div", {
        key: l.value,
        class: J(["group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md", {
          "border-primary-200 bg-primary-50 ring-primary-500 ring-2": s(l.name),
          [i.customStatClass]: i.customStatClass
        }]),
        onClick: (u) => a(l.name)
      }, [
        $("div", {
          class: J(["px-6 py-4", [i.customStatValueClass]])
        }, [
          $("div", U4, Q(l.value), 1)
        ], 2),
        $("div", {
          class: J(["border-t border-gray-100 bg-gray-50/50 px-6 py-3", [i.customStatLabelClass]])
        }, [
          $("div", H4, Q(l.label ?? l.name), 1)
        ], 2),
        c[0] || (c[0] = $("div", { class: "from-primary-500 to-primary-600 absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100" }, null, -1))
      ], 10, V4))), 128))
    ], 2));
  }
}), W4 = "fill-white stroke-gray-200", K4 = /* @__PURE__ */ U({
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
    const t = e, n = F(() => ["top", "bottom", "left", "right"].includes(t.side) ? t.side : "top"), r = [
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
    return (o, a) => (x(), H(b(G3), { "delay-duration": o.delayDuration }, {
      default: B(() => [
        Z(b(X3), { disabled: o.disabled }, {
          default: B(() => [
            Z(b(e4), { "as-child": "" }, {
              default: B(() => [
                j(o.$slots, "default")
              ]),
              _: 3
            }),
            Z(b(Z3), null, {
              default: B(() => [
                Z(b(Q3), {
                  side: n.value,
                  sideOffset: o.sideOffset,
                  collisionPadding: o.collisionPadding,
                  class: J([b(r), o.contentClass])
                }, {
                  default: B(() => [
                    ce(Q(o.content) + " ", 1),
                    Z(b(W3), {
                      class: J([W4, o.arrowClass])
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
}), G4 = ["type", "disabled"], Y4 = "focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed", bn = /* @__PURE__ */ U({
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
    return (o, a) => (x(), P("button", {
      type: o.type,
      disabled: o.disabled,
      class: J([
        // Apply base styles and size only if not no-style theme
        t.theme !== b(Se).NO_STYLE ? [Y4, n[t.size]] : [],
        // Always apply theme variant
        r[t.theme],
        // Custom classes
        t.customClass
      ])
    }, [
      j(o.$slots, "default")
    ], 10, G4));
  }
}), X4 = { class: "mt-2" }, RC = /* @__PURE__ */ U({
  __name: "Collapse",
  props: {
    open: { type: Boolean, default: !1 },
    button: { default: () => ["Show more", "Show less"] }
  },
  setup(e) {
    const t = e, n = M(t.open);
    return re(
      () => t.open,
      (r) => n.value = r
    ), pe(() => {
      n.value = t.open;
    }), (r, o) => (x(), H(b(Ii), {
      defaultOpen: r.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
    }, {
      default: B(() => [
        Z(b(Bi), { asChild: "" }, {
          default: B(() => [
            j(r.$slots, "trigger", {}, () => [
              Z(b(L4), ve(Ee(r.$attrs)), {
                default: B(() => [
                  $("span", null, Q(n.value ? r.button[1] : r.button[0]), 1),
                  Z(b(xe), {
                    icon: b(Js),
                    class: J(["transition-all", { "rotate-180": n.value }])
                  }, null, 8, ["icon", "class"])
                ]),
                _: 1
              }, 16)
            ])
          ]),
          _: 3
        }),
        Z(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: B(() => [
            $("div", X4, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), J4 = { class: "border-t border-gray-100" }, Q4 = { class: "divide-y divide-gray-100" }, IC = /* @__PURE__ */ U({
  __name: "DescriptionList",
  props: {
    form: { default: void 0 },
    stopEditOnSubmit: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, r = M(!1);
    re(
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
    const o = M([]);
    mo("registerItem", (l) => {
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
    }), (l, u) => (x(), P("div", J4, [
      $("dl", Q4, [
        j(l.$slots, "default")
      ])
    ]));
  }
}), Z4 = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, eO = { class: "flex items-center text-sm font-medium" }, tO = {
  key: 0,
  class: "ml-1 text-red-500"
}, nO = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, rO = { class: "flex min-h-full items-center" }, oO = { class: "slot-content grow" }, aO = { class: "ml-4 shrink-0" }, sO = { class: "slot-edit grow" }, iO = { class: "ml-4 shrink-0" }, _C = /* @__PURE__ */ U({
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
    gr.add(rs, Zi);
    const r = e, o = n, a = M(r.editable ? r.forceEditing : !1), s = () => {
      r.editable && (a.value = !a.value, o("editToggled", a.value));
    };
    re(
      () => r.forceEditing,
      (d) => {
        r.editable && (a.value = d);
      }
    );
    const i = () => {
      r.editable && (a.value = !0);
    }, c = () => {
      r.editable && (a.value = !1);
    }, l = Ys("registerItem");
    return pe(() => {
      l && l({ startEditing: i, stopEditing: c, toggleEditing: s });
    }), t({
      toggleEditing: s,
      startEditing: i,
      stopEditing: c,
      isEditing: () => a.value
    }), (d, y) => (x(), P("div", Z4, [
      $("dt", eO, [
        ce(Q(d.label) + " ", 1),
        j(d.$slots, "label"),
        d.required ? (x(), P("span", tO, "*")) : Y("", !0)
      ]),
      $("dd", nO, [
        $("div", rO, [
          a.value ? (x(), P(ne, { key: 1 }, [
            $("div", sO, [
              j(d.$slots, "edit")
            ]),
            $("span", iO, [
              $("button", {
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-xl font-bold"
              }, [
                Z(b(xe), { icon: b(Zi) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (x(), P(ne, { key: 0 }, [
            $("div", oO, [
              j(d.$slots, "default"),
              ce(" " + Q(d.value), 1)
            ]),
            $("span", aO, [
              d.editable ? (x(), P("button", {
                key: 0,
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-lg font-bold"
              }, [
                Z(b(xe), { icon: b(rs) }, null, 8, ["icon"])
              ])) : Y("", !0),
              j(d.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
});
var ts = { exports: {} };
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
function lO() {
  return xc || (xc = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var a = !r && typeof self == "object", s = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? o = As : a && (o = self);
      var i = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, c = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), u = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], y = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], p;
      if (c) {
        var f = new ArrayBuffer(68);
        p = new Uint8Array(f), m = new Uint32Array(f);
      }
      var g = Array.isArray;
      (o.JS_MD5_NO_NODE_JS || !g) && (g = function(v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      });
      var w = ArrayBuffer.isView;
      c && (o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !w) && (w = function(v) {
        return typeof v == "object" && v.buffer && v.buffer.constructor === ArrayBuffer;
      });
      var O = function(v) {
        var C = typeof v;
        if (C === "string")
          return [v, !0];
        if (C !== "object" || v === null)
          throw new Error(t);
        if (c && v.constructor === ArrayBuffer)
          return [new Uint8Array(v), !1];
        if (!g(v) && !w(v))
          throw new Error(t);
        return [v, !1];
      }, E = function(v) {
        return function(C) {
          return new I(!0).update(C)[v]();
        };
      }, D = function() {
        var v = E("hex");
        s && (v = V(v)), v.create = function() {
          return new I();
        }, v.update = function(S) {
          return v.create().update(S);
        };
        for (var C = 0; C < y.length; ++C) {
          var A = y[C];
          v[A] = E(A);
        }
        return v;
      }, V = function(v) {
        var C = Es, A = Es.Buffer, S;
        A.from && !o.JS_MD5_NO_BUFFER_FROM ? S = A.from : S = function(_) {
          return new A(_);
        };
        var W = function(_) {
          if (typeof _ == "string")
            return C.createHash("md5").update(_, "utf8").digest("hex");
          if (_ == null)
            throw new Error(t);
          return _.constructor === ArrayBuffer && (_ = new Uint8Array(_)), g(_) || w(_) || _.constructor === A ? C.createHash("md5").update(S(_)).digest("hex") : v(_);
        };
        return W;
      }, z = function(v) {
        return function(C, A) {
          return new k(C, !0).update(A)[v]();
        };
      }, G = function() {
        var v = z("hex");
        v.create = function(S) {
          return new k(S);
        }, v.update = function(S, W) {
          return v.create(S).update(W);
        };
        for (var C = 0; C < y.length; ++C) {
          var A = y[C];
          v[A] = z(A);
        }
        return v;
      };
      function I(v) {
        if (v)
          m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = p;
        else if (c) {
          var C = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(C), this.blocks = new Uint32Array(C);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      I.prototype.update = function(v) {
        if (this.finalized)
          throw new Error(n);
        var C = O(v);
        v = C[0];
        for (var A = C[1], S, W = 0, _, T = v.length, X = this.blocks, ae = this.buffer8; W < T; ) {
          if (this.hashed && (this.hashed = !1, X[0] = X[16], X[16] = X[1] = X[2] = X[3] = X[4] = X[5] = X[6] = X[7] = X[8] = X[9] = X[10] = X[11] = X[12] = X[13] = X[14] = X[15] = 0), A)
            if (c)
              for (_ = this.start; W < T && _ < 64; ++W)
                S = v.charCodeAt(W), S < 128 ? ae[_++] = S : S < 2048 ? (ae[_++] = 192 | S >>> 6, ae[_++] = 128 | S & 63) : S < 55296 || S >= 57344 ? (ae[_++] = 224 | S >>> 12, ae[_++] = 128 | S >>> 6 & 63, ae[_++] = 128 | S & 63) : (S = 65536 + ((S & 1023) << 10 | v.charCodeAt(++W) & 1023), ae[_++] = 240 | S >>> 18, ae[_++] = 128 | S >>> 12 & 63, ae[_++] = 128 | S >>> 6 & 63, ae[_++] = 128 | S & 63);
            else
              for (_ = this.start; W < T && _ < 64; ++W)
                S = v.charCodeAt(W), S < 128 ? X[_ >>> 2] |= S << d[_++ & 3] : S < 2048 ? (X[_ >>> 2] |= (192 | S >>> 6) << d[_++ & 3], X[_ >>> 2] |= (128 | S & 63) << d[_++ & 3]) : S < 55296 || S >= 57344 ? (X[_ >>> 2] |= (224 | S >>> 12) << d[_++ & 3], X[_ >>> 2] |= (128 | S >>> 6 & 63) << d[_++ & 3], X[_ >>> 2] |= (128 | S & 63) << d[_++ & 3]) : (S = 65536 + ((S & 1023) << 10 | v.charCodeAt(++W) & 1023), X[_ >>> 2] |= (240 | S >>> 18) << d[_++ & 3], X[_ >>> 2] |= (128 | S >>> 12 & 63) << d[_++ & 3], X[_ >>> 2] |= (128 | S >>> 6 & 63) << d[_++ & 3], X[_ >>> 2] |= (128 | S & 63) << d[_++ & 3]);
          else if (c)
            for (_ = this.start; W < T && _ < 64; ++W)
              ae[_++] = v[W];
          else
            for (_ = this.start; W < T && _ < 64; ++W)
              X[_ >>> 2] |= v[W] << d[_++ & 3];
          this.lastByteIndex = _, this.bytes += _ - this.start, _ >= 64 ? (this.start = _ - 64, this.hash(), this.hashed = !0) : this.start = _;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, I.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var v = this.blocks, C = this.lastByteIndex;
          v[C >>> 2] |= u[C & 3], C >= 56 && (this.hashed || this.hash(), v[0] = v[16], v[16] = v[1] = v[2] = v[3] = v[4] = v[5] = v[6] = v[7] = v[8] = v[9] = v[10] = v[11] = v[12] = v[13] = v[14] = v[15] = 0), v[14] = this.bytes << 3, v[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, I.prototype.hash = function() {
        var v, C, A, S, W, _, T = this.blocks;
        this.first ? (v = T[0] - 680876937, v = (v << 7 | v >>> 25) - 271733879 << 0, S = (-1732584194 ^ v & 2004318071) + T[1] - 117830708, S = (S << 12 | S >>> 20) + v << 0, A = (-271733879 ^ S & (v ^ -271733879)) + T[2] - 1126478375, A = (A << 17 | A >>> 15) + S << 0, C = (v ^ A & (S ^ v)) + T[3] - 1316259209, C = (C << 22 | C >>> 10) + A << 0) : (v = this.h0, C = this.h1, A = this.h2, S = this.h3, v += (S ^ C & (A ^ S)) + T[0] - 680876936, v = (v << 7 | v >>> 25) + C << 0, S += (A ^ v & (C ^ A)) + T[1] - 389564586, S = (S << 12 | S >>> 20) + v << 0, A += (C ^ S & (v ^ C)) + T[2] + 606105819, A = (A << 17 | A >>> 15) + S << 0, C += (v ^ A & (S ^ v)) + T[3] - 1044525330, C = (C << 22 | C >>> 10) + A << 0), v += (S ^ C & (A ^ S)) + T[4] - 176418897, v = (v << 7 | v >>> 25) + C << 0, S += (A ^ v & (C ^ A)) + T[5] + 1200080426, S = (S << 12 | S >>> 20) + v << 0, A += (C ^ S & (v ^ C)) + T[6] - 1473231341, A = (A << 17 | A >>> 15) + S << 0, C += (v ^ A & (S ^ v)) + T[7] - 45705983, C = (C << 22 | C >>> 10) + A << 0, v += (S ^ C & (A ^ S)) + T[8] + 1770035416, v = (v << 7 | v >>> 25) + C << 0, S += (A ^ v & (C ^ A)) + T[9] - 1958414417, S = (S << 12 | S >>> 20) + v << 0, A += (C ^ S & (v ^ C)) + T[10] - 42063, A = (A << 17 | A >>> 15) + S << 0, C += (v ^ A & (S ^ v)) + T[11] - 1990404162, C = (C << 22 | C >>> 10) + A << 0, v += (S ^ C & (A ^ S)) + T[12] + 1804603682, v = (v << 7 | v >>> 25) + C << 0, S += (A ^ v & (C ^ A)) + T[13] - 40341101, S = (S << 12 | S >>> 20) + v << 0, A += (C ^ S & (v ^ C)) + T[14] - 1502002290, A = (A << 17 | A >>> 15) + S << 0, C += (v ^ A & (S ^ v)) + T[15] + 1236535329, C = (C << 22 | C >>> 10) + A << 0, v += (A ^ S & (C ^ A)) + T[1] - 165796510, v = (v << 5 | v >>> 27) + C << 0, S += (C ^ A & (v ^ C)) + T[6] - 1069501632, S = (S << 9 | S >>> 23) + v << 0, A += (v ^ C & (S ^ v)) + T[11] + 643717713, A = (A << 14 | A >>> 18) + S << 0, C += (S ^ v & (A ^ S)) + T[0] - 373897302, C = (C << 20 | C >>> 12) + A << 0, v += (A ^ S & (C ^ A)) + T[5] - 701558691, v = (v << 5 | v >>> 27) + C << 0, S += (C ^ A & (v ^ C)) + T[10] + 38016083, S = (S << 9 | S >>> 23) + v << 0, A += (v ^ C & (S ^ v)) + T[15] - 660478335, A = (A << 14 | A >>> 18) + S << 0, C += (S ^ v & (A ^ S)) + T[4] - 405537848, C = (C << 20 | C >>> 12) + A << 0, v += (A ^ S & (C ^ A)) + T[9] + 568446438, v = (v << 5 | v >>> 27) + C << 0, S += (C ^ A & (v ^ C)) + T[14] - 1019803690, S = (S << 9 | S >>> 23) + v << 0, A += (v ^ C & (S ^ v)) + T[3] - 187363961, A = (A << 14 | A >>> 18) + S << 0, C += (S ^ v & (A ^ S)) + T[8] + 1163531501, C = (C << 20 | C >>> 12) + A << 0, v += (A ^ S & (C ^ A)) + T[13] - 1444681467, v = (v << 5 | v >>> 27) + C << 0, S += (C ^ A & (v ^ C)) + T[2] - 51403784, S = (S << 9 | S >>> 23) + v << 0, A += (v ^ C & (S ^ v)) + T[7] + 1735328473, A = (A << 14 | A >>> 18) + S << 0, C += (S ^ v & (A ^ S)) + T[12] - 1926607734, C = (C << 20 | C >>> 12) + A << 0, W = C ^ A, v += (W ^ S) + T[5] - 378558, v = (v << 4 | v >>> 28) + C << 0, S += (W ^ v) + T[8] - 2022574463, S = (S << 11 | S >>> 21) + v << 0, _ = S ^ v, A += (_ ^ C) + T[11] + 1839030562, A = (A << 16 | A >>> 16) + S << 0, C += (_ ^ A) + T[14] - 35309556, C = (C << 23 | C >>> 9) + A << 0, W = C ^ A, v += (W ^ S) + T[1] - 1530992060, v = (v << 4 | v >>> 28) + C << 0, S += (W ^ v) + T[4] + 1272893353, S = (S << 11 | S >>> 21) + v << 0, _ = S ^ v, A += (_ ^ C) + T[7] - 155497632, A = (A << 16 | A >>> 16) + S << 0, C += (_ ^ A) + T[10] - 1094730640, C = (C << 23 | C >>> 9) + A << 0, W = C ^ A, v += (W ^ S) + T[13] + 681279174, v = (v << 4 | v >>> 28) + C << 0, S += (W ^ v) + T[0] - 358537222, S = (S << 11 | S >>> 21) + v << 0, _ = S ^ v, A += (_ ^ C) + T[3] - 722521979, A = (A << 16 | A >>> 16) + S << 0, C += (_ ^ A) + T[6] + 76029189, C = (C << 23 | C >>> 9) + A << 0, W = C ^ A, v += (W ^ S) + T[9] - 640364487, v = (v << 4 | v >>> 28) + C << 0, S += (W ^ v) + T[12] - 421815835, S = (S << 11 | S >>> 21) + v << 0, _ = S ^ v, A += (_ ^ C) + T[15] + 530742520, A = (A << 16 | A >>> 16) + S << 0, C += (_ ^ A) + T[2] - 995338651, C = (C << 23 | C >>> 9) + A << 0, v += (A ^ (C | ~S)) + T[0] - 198630844, v = (v << 6 | v >>> 26) + C << 0, S += (C ^ (v | ~A)) + T[7] + 1126891415, S = (S << 10 | S >>> 22) + v << 0, A += (v ^ (S | ~C)) + T[14] - 1416354905, A = (A << 15 | A >>> 17) + S << 0, C += (S ^ (A | ~v)) + T[5] - 57434055, C = (C << 21 | C >>> 11) + A << 0, v += (A ^ (C | ~S)) + T[12] + 1700485571, v = (v << 6 | v >>> 26) + C << 0, S += (C ^ (v | ~A)) + T[3] - 1894986606, S = (S << 10 | S >>> 22) + v << 0, A += (v ^ (S | ~C)) + T[10] - 1051523, A = (A << 15 | A >>> 17) + S << 0, C += (S ^ (A | ~v)) + T[1] - 2054922799, C = (C << 21 | C >>> 11) + A << 0, v += (A ^ (C | ~S)) + T[8] + 1873313359, v = (v << 6 | v >>> 26) + C << 0, S += (C ^ (v | ~A)) + T[15] - 30611744, S = (S << 10 | S >>> 22) + v << 0, A += (v ^ (S | ~C)) + T[6] - 1560198380, A = (A << 15 | A >>> 17) + S << 0, C += (S ^ (A | ~v)) + T[13] + 1309151649, C = (C << 21 | C >>> 11) + A << 0, v += (A ^ (C | ~S)) + T[4] - 145523070, v = (v << 6 | v >>> 26) + C << 0, S += (C ^ (v | ~A)) + T[11] - 1120210379, S = (S << 10 | S >>> 22) + v << 0, A += (v ^ (S | ~C)) + T[2] + 718787259, A = (A << 15 | A >>> 17) + S << 0, C += (S ^ (A | ~v)) + T[9] - 343485551, C = (C << 21 | C >>> 11) + A << 0, this.first ? (this.h0 = v + 1732584193 << 0, this.h1 = C - 271733879 << 0, this.h2 = A - 1732584194 << 0, this.h3 = S + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + v << 0, this.h1 = this.h1 + C << 0, this.h2 = this.h2 + A << 0, this.h3 = this.h3 + S << 0);
      }, I.prototype.hex = function() {
        this.finalize();
        var v = this.h0, C = this.h1, A = this.h2, S = this.h3;
        return l[v >>> 4 & 15] + l[v & 15] + l[v >>> 12 & 15] + l[v >>> 8 & 15] + l[v >>> 20 & 15] + l[v >>> 16 & 15] + l[v >>> 28 & 15] + l[v >>> 24 & 15] + l[C >>> 4 & 15] + l[C & 15] + l[C >>> 12 & 15] + l[C >>> 8 & 15] + l[C >>> 20 & 15] + l[C >>> 16 & 15] + l[C >>> 28 & 15] + l[C >>> 24 & 15] + l[A >>> 4 & 15] + l[A & 15] + l[A >>> 12 & 15] + l[A >>> 8 & 15] + l[A >>> 20 & 15] + l[A >>> 16 & 15] + l[A >>> 28 & 15] + l[A >>> 24 & 15] + l[S >>> 4 & 15] + l[S & 15] + l[S >>> 12 & 15] + l[S >>> 8 & 15] + l[S >>> 20 & 15] + l[S >>> 16 & 15] + l[S >>> 28 & 15] + l[S >>> 24 & 15];
      }, I.prototype.toString = I.prototype.hex, I.prototype.digest = function() {
        this.finalize();
        var v = this.h0, C = this.h1, A = this.h2, S = this.h3;
        return [
          v & 255,
          v >>> 8 & 255,
          v >>> 16 & 255,
          v >>> 24 & 255,
          C & 255,
          C >>> 8 & 255,
          C >>> 16 & 255,
          C >>> 24 & 255,
          A & 255,
          A >>> 8 & 255,
          A >>> 16 & 255,
          A >>> 24 & 255,
          S & 255,
          S >>> 8 & 255,
          S >>> 16 & 255,
          S >>> 24 & 255
        ];
      }, I.prototype.array = I.prototype.digest, I.prototype.arrayBuffer = function() {
        this.finalize();
        var v = new ArrayBuffer(16), C = new Uint32Array(v);
        return C[0] = this.h0, C[1] = this.h1, C[2] = this.h2, C[3] = this.h3, v;
      }, I.prototype.buffer = I.prototype.arrayBuffer, I.prototype.base64 = function() {
        for (var v, C, A, S = "", W = this.array(), _ = 0; _ < 15; )
          v = W[_++], C = W[_++], A = W[_++], S += h[v >>> 2] + h[(v << 4 | C >>> 4) & 63] + h[(C << 2 | A >>> 6) & 63] + h[A & 63];
        return v = W[_], S += h[v >>> 2] + h[v << 4 & 63] + "==", S;
      };
      function k(v, C) {
        var A, S = O(v);
        if (v = S[0], S[1]) {
          var W = [], _ = v.length, T = 0, X;
          for (A = 0; A < _; ++A)
            X = v.charCodeAt(A), X < 128 ? W[T++] = X : X < 2048 ? (W[T++] = 192 | X >>> 6, W[T++] = 128 | X & 63) : X < 55296 || X >= 57344 ? (W[T++] = 224 | X >>> 12, W[T++] = 128 | X >>> 6 & 63, W[T++] = 128 | X & 63) : (X = 65536 + ((X & 1023) << 10 | v.charCodeAt(++A) & 1023), W[T++] = 240 | X >>> 18, W[T++] = 128 | X >>> 12 & 63, W[T++] = 128 | X >>> 6 & 63, W[T++] = 128 | X & 63);
          v = W;
        }
        v.length > 64 && (v = new I(!0).update(v).array());
        var ae = [], Fe = [];
        for (A = 0; A < 64; ++A) {
          var Ye = v[A] || 0;
          ae[A] = 92 ^ Ye, Fe[A] = 54 ^ Ye;
        }
        I.call(this, C), this.update(Fe), this.oKeyPad = ae, this.inner = !0, this.sharedMemory = C;
      }
      k.prototype = new I(), k.prototype.finalize = function() {
        if (I.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var v = this.array();
          I.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(v), I.prototype.finalize.call(this);
        }
      };
      var q = D();
      q.md5 = q, q.md5.hmac = G(), i ? e.exports = q : o.md5 = q;
    })();
  }(ts)), ts.exports;
}
var uO = lO();
const cO = ["src", "alt"], BC = /* @__PURE__ */ U({
  __name: "GravatarImg",
  props: {
    email: {},
    size: { default: 100 }
  },
  setup(e) {
    const t = e, n = F(() => uO.md5(t.email.trim().toLowerCase())), r = F(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), o = F(() => `Gravatar for ${t.email}`);
    return (a, s) => (x(), P("img", {
      src: r.value,
      alt: o.value
    }, null, 8, cO));
  }
}), dO = ["id"], fO = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, pO = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, mO = { class: "space-y-1 px-4 py-1" }, LC = /* @__PURE__ */ U({
  __name: "NavCollapse",
  props: {
    open: { type: Boolean, default: !1 },
    name: {}
  },
  setup(e) {
    const t = e, n = M(t.open);
    return re(
      () => t.open,
      (r) => n.value = r
    ), (r, o) => (x(), P("li", null, [
      Z(b(Ii), {
        defaultOpen: r.open,
        open: n.value,
        "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
      }, {
        default: B(() => [
          Z(b(Bi), { asChild: "" }, {
            default: B(() => [
              $("button", {
                id: r.name,
                class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                r.$slots.icon ? (x(), P("div", fO, [
                  j(r.$slots, "icon")
                ])) : Y("", !0),
                $("span", pO, Q(r.name), 1),
                Z(b(xe), {
                  icon: b(Js),
                  class: J(["transition-all", { "rotate-180": n.value }])
                }, null, 8, ["icon", "class"])
              ], 8, dO)
            ]),
            _: 3
          }),
          Z(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: B(() => [
              $("ul", mO, [
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
}), hO = { class: "relative" }, yO = { class: "mt-4 flex flex-col items-center justify-center" }, gO = { class: "relative flex w-fit flex-row justify-center gap-3" }, vO = ["onClick"], MC = {
  __name: "DottedCarousel",
  props: {
    padding: { default: 0 },
    gap: { default: 20 }
  },
  setup(e) {
    const t = M(0), n = M(null), r = M(null), o = e, a = M(0);
    re(t, (c) => {
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
    }), (c, l) => (x(), P("div", hO, [
      $("div", {
        class: "flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden",
        style: et({ gap: `${e.gap}px` }),
        ref_key: "container",
        ref: r,
        onScroll: l[0] || (l[0] = (...u) => c.onContainerScroll && c.onContainerScroll(...u))
      }, [
        j(c.$slots, "default")
      ], 36),
      $("div", yO, [
        $("div", gO, [
          $("div", {
            class: "absolute h-2 w-2 rounded-full bg-primary transition-all duration-300",
            style: et({ left: `${a.value}px` }),
            ref_key: "activeDot",
            ref: n
          }, null, 4),
          (x(!0), P(ne, null, be(Array(c.$slots.default().length).fill(""), (u, d) => (x(), P("div", {
            key: d,
            class: "h-2 w-2 cursor-pointer rounded-full bg-accent",
            onClick: (y) => s(y, d)
          }, null, 8, vO))), 128))
        ])
      ])
    ]));
  }
}, bO = { class: "absolute inset-0 isolate z-0 size-full" }, NC = /* @__PURE__ */ U({
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
    const t = e, n = F(() => {
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
    return (r, o) => (x(), P("div", {
      class: J(["group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md", {
        [n.value.base]: !0,
        "ring-2": r.selected,
        [r.customStatClass]: r.customStatClass
      }])
    }, [
      $("div", {
        class: J(["relative overflow-clip px-6 py-4", [r.customStatValueClass]])
      }, [
        $("div", bO, [
          Z(b(xe), {
            icon: r.icon,
            class: J([[n.value.hoverText], "absolute top-1/2 right-2 h-4/5 -translate-y-1/2 text-gray-400 opacity-50 transition-colors"]),
            size: "3x"
          }, null, 8, ["icon", "class"])
        ]),
        $("div", {
          class: J([[n.value.hoverText], "text-2xl font-bold text-gray-900 transition-colors"])
        }, Q(r.value), 3)
      ], 2),
      $("div", {
        class: J(["border-t border-gray-100 bg-gray-50/50 px-6 py-3", [r.customStatLabelClass]])
      }, [
        $("div", {
          class: J([[n.value.hoverText], "text-sm font-medium text-gray-600 transition-colors"])
        }, Q(r.label), 3)
      ], 2),
      $("div", {
        class: J([[n.value.gradient], "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"])
      }, null, 2)
    ], 2));
  }
}), wO = /* @__PURE__ */ U({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(Se).PRIMARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customButtonClass,
      size: t.size
    }, {
      default: B(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), SO = { class: "relative mt-4 mb-6 rounded-lg border border-gray-200 bg-gray-50" }, xO = { class: "flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-100 px-4 py-2" }, OO = { class: "overflow-x-auto p-4 text-sm" }, CO = { class: "language-vue text-gray-800 font-mono" }, jC = /* @__PURE__ */ U({
  __name: "CodePreview",
  props: {
    code: {}
  },
  setup(e) {
    const t = e, n = M(""), r = M("Copy");
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
    return (a, s) => (x(), P("div", SO, [
      $("div", xO, [
        s[0] || (s[0] = $("span", { class: "text-sm font-medium text-gray-700" }, "Code Example", -1)),
        $("button", {
          onClick: o,
          class: J(["rounded px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800", { "text-green-600": r.value.includes("✓"), "text-red-600": r.value.includes("✗") }]),
          title: "Copy to clipboard"
        }, Q(r.value), 3)
      ]),
      $("pre", OO, [
        $("code", CO, Q(n.value), 1)
      ])
    ]));
  }
}), AO = { class: "mt-12 mb-8" }, EO = ["id"], qC = /* @__PURE__ */ U({
  __name: "H2",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (x(), P("div", AO, [
      $("h2", {
        id: t.title.toLowerCase().replace(/\s+/g, "-"),
        class: "border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900"
      }, Q(t.title), 9, EO)
    ]));
  }
}), zC = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  cC as Alert,
  bn as Button,
  Zy as Checkbox,
  jC as CodePreview,
  o4 as CollapsableSection,
  RC as Collapse,
  o4 as CollapsibleSection,
  EC as DangerButton,
  NC as DataTile,
  IC as DescriptionList,
  _C as DescriptionListItem,
  MC as DottedCarousel,
  pC as Dropdown,
  mC as DropdownLink,
  FO as DropdownSearchbar,
  hC as DropdownSeparator,
  AC as EnhancedTable,
  rC as FileDropZoneInput,
  BC as GravatarImg,
  qC as H2,
  oC as Images,
  kC as InfoButton,
  ag as Input,
  en as InputError,
  jn as InputLabel,
  Xs as InputWrapper,
  yC as LinkButton,
  gC as LinkDropdownButton,
  vC as LinkDropdownButtonItem,
  bC as Logs,
  E4 as LogsContent,
  wC as Modal,
  LC as NavCollapse,
  xC as NavLink,
  SC as NewModal,
  Np as Pagination,
  wO as PrimaryButton,
  kO as PropsTable,
  aC as RadioButton,
  DC as ResponsiveNavLink,
  TO as RichSelect,
  L0 as SearchSelect,
  L4 as SecondaryButton,
  TC as Section,
  DO as Select,
  RO as Select2ajax,
  sC as SelectMultiple,
  qi as Spinner,
  FC as Stats,
  lo as SubmitButton,
  $C as SuccessButton,
  xg as Switch,
  O2 as Table,
  uC as TableItemCard,
  $2 as Tbody,
  uo as Td,
  OC as TdCollapseHandler,
  fg as TextInput,
  yg as Textarea,
  F2 as Th,
  C2 as Thead,
  K4 as Tooltip,
  CC as Tr,
  lC as TrCollapse,
  iC as TrCollapseHandler,
  sc as TrPlaceholder,
  $O as UnderConstruction,
  PC as WarningButton,
  zC as default,
  qf as getInertiaPage,
  Do as getInertiaRouter,
  eC as hasPermission,
  iw as moneyFormat,
  ZO as numberFormat,
  nC as setInertiaPage,
  tC as setInertiaRouter,
  Jf as useInertiaTable,
  Xf as useStickyTableHeader,
  v2 as useTable,
  g2 as useTableSelection,
  Yf as useTableSort
};
