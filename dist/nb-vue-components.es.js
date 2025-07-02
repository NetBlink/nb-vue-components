import * as Qi from "vue";
import { defineComponent as H, createElementBlock as P, openBlock as x, createElementVNode as D, createCommentVNode as Y, Fragment as re, renderList as Ce, normalizeClass as Z, toDisplayString as J, computed as V, createBlock as U, renderSlot as j, unref as b, watch as ne, h as qe, createVNode as Q, mergeModels as pt, useModel as Mn, ref as _, onMounted as pe, withDirectives as He, vModelCheckbox as xc, createSlots as Ho, withCtx as M, vModelSelect as Oc, createTextVNode as fe, vShow as ln, vModelText as Ac, onUnmounted as Pt, Transition as un, nextTick as Te, resolveDirective as Vp, normalizeProps as be, guardReactiveProps as Pe, resolveDynamicComponent as qr, mergeProps as ie, toHandlers as Cc, withModifiers as St, withKeys as rn, normalizeStyle as dt, shallowRef as mr, markRaw as ts, reactive as hr, toRefs as Nt, getCurrentScope as Ec, onScopeDispose as Pc, shallowReadonly as En, Comment as kc, cloneVNode as Up, readonly as $c, effectScope as Dc, toValue as Rt, onBeforeUnmount as Hp, watchEffect as ot, customRef as Wp, getCurrentInstance as gn, inject as Gs, provide as Ys, toHandlerKey as Kp, camelize as Tc, Teleport as Fc, toRef as Gp, watchPostEffect as Rc, mergeDefaults as Ic, isRef as Yp, useSlots as Xp, useAttrs as Jp } from "vue";
const Qp = { class: "overflow-x-auto" }, Zp = { class: "min-w-full divide-y divide-gray-200" }, em = { class: "divide-y divide-gray-200 bg-white" }, tm = { key: 0 }, nm = { class: "px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900" }, rm = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, om = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, am = { class: "px-6 py-4 text-sm text-gray-500" }, hO = /* @__PURE__ */ H({
  __name: "PropsTable",
  props: {
    rows: { default: () => [] }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), P("div", Qp, [
      D("table", Zp, [
        r[1] || (r[1] = D("thead", { class: "bg-gray-50" }, [
          D("tr", null, [
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Prop"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Type"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Default"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Description")
          ])
        ], -1)),
        D("tbody", em, [
          t.rows.length === 0 ? (x(), P("tr", tm, r[0] || (r[0] = [
            D("td", {
              colspan: "4",
              class: "px-6 py-4 text-center text-sm text-gray-500"
            }, "No props defined", -1)
          ]))) : Y("", !0),
          (x(!0), P(re, null, Ce(t.rows, (o, a) => (x(), P("tr", {
            key: a,
            class: Z({ "bg-yellow-50": o.highlight })
          }, [
            D("td", nm, J(o.prop), 1),
            D("td", rm, J(o.type), 1),
            D("td", om, J(o.default), 1),
            D("td", am, J(o.description), 1)
          ], 2))), 128))
        ])
      ])
    ]));
  }
}), Xs = /* @__PURE__ */ H({
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
    const r = V(() => t.label ? t.label : t.field ? n(t.field) : ""), o = V(() => {
      var s, i;
      return t.error ? t.error : (i = (s = t.form) == null ? void 0 : s.errors) != null && i[t.field || ""] ? t.form.errors[t.field || ""] : null;
    }), a = V(() => t.htmlFor || t.field);
    return (s, i) => (x(), P("div", {
      class: Z(s.noLabel ? "mb-2" : "mb-4")
    }, [
      !s.noLabel && (r.value || s.field) ? (x(), U(b(qn), {
        key: 0,
        customClass: s.labelCustomClass,
        for: a.value,
        value: r.value,
        sublabel: s.sublabel,
        required: s.required,
        tooltip: s.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : Y("", !0),
      j(s.$slots, "default"),
      o.value ? (x(), U(b(en), {
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
const sm = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, ns = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, im = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, Zi = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, lm = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, Js = lm, um = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, el = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, cm = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, dm = cm, rs = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, tl = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, fm = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, pm = {
  prefix: "fas",
  iconName: "person-digging",
  icon: [576, 512, ["digging"], "f85e", "M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"]
}, mm = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, hm = mm, ym = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, gm = ym, Qs = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, vm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, bm = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Qr = bm, wm = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, Sm = {
  prefix: "fas",
  iconName: "calendar",
  icon: [448, 512, [128197, 128198], "f133", "M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]
}, xm = {
  prefix: "fas",
  iconName: "triangle-exclamation",
  icon: [512, 512, [9888, "exclamation-triangle", "warning"], "f071", "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]
}, Om = xm, Am = {
  prefix: "fas",
  iconName: "circle-xmark",
  icon: [512, 512, [61532, "times-circle", "xmark-circle"], "f057", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]
}, Cm = Am;
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Em(e, t, n) {
  return (t = km(t)) in e ? Object.defineProperty(e, t, {
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
function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nl(Object(n), !0).forEach(function(r) {
      Em(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Pm(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function km(e) {
  var t = Pm(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
const rl = () => {
};
let Zs = {}, _c = {}, Lc = null, Bc = {
  mark: rl,
  measure: rl
};
try {
  typeof window < "u" && (Zs = window), typeof document < "u" && (_c = document), typeof MutationObserver < "u" && (Lc = MutationObserver), typeof performance < "u" && (Bc = performance);
} catch {
}
const {
  userAgent: ol = ""
} = Zs.navigator || {}, Gt = Zs, ge = _c, al = Lc, Tr = Bc;
Gt.document;
const jt = !!ge.documentElement && !!ge.head && typeof ge.addEventListener == "function" && typeof ge.createElement == "function", Mc = ~ol.indexOf("MSIE") || ~ol.indexOf("Trident/");
var $m = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Dm = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Nc = {
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
}, Tm = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, jc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Be = "classic", mo = "duotone", Fm = "sharp", Rm = "sharp-duotone", qc = [Be, mo, Fm, Rm], Im = {
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
}, _m = {
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
}, Lm = /* @__PURE__ */ new Map([["classic", {
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
}]]), Bm = {
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
}, Mm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], sl = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Nm = ["kit"], jm = {
  kit: {
    "fa-kit": "fak"
  }
}, qm = ["fak", "fakd"], zm = {
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
}, Vm = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Um = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Hm = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Wm = {
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
}, Km = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, os = {
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
}, Gm = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], as = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Vm, ...Gm], Ym = ["solid", "regular", "light", "thin", "duotone", "brands"], zc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Xm = zc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Jm = [...Object.keys(Km), ...Ym, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Fr.GROUP, Fr.SWAP_OPACITY, Fr.PRIMARY, Fr.SECONDARY].concat(zc.map((e) => "".concat(e, "x"))).concat(Xm.map((e) => "w-".concat(e))), Qm = {
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
const _t = "___FONT_AWESOME___", ss = 16, Vc = "fa", Uc = "svg-inline--fa", dn = "data-fa-i2svg", is = "data-fa-pseudo-element", Zm = "data-fa-pseudo-element-pending", ei = "data-prefix", ti = "data-icon", ll = "fontawesome-i2svg", eh = "async", th = ["HTML", "HEAD", "STYLE", "SCRIPT"], Hc = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})();
function yr(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[Be];
    }
  });
}
const Wc = K({}, Nc);
Wc[Be] = K(K(K(K({}, {
  "fa-duotone": "duotone"
}), Nc[Be]), sl.kit), sl["kit-duotone"]);
const nh = yr(Wc), ls = K({}, Bm);
ls[Be] = K(K(K(K({}, {
  duotone: "fad"
}), ls[Be]), il.kit), il["kit-duotone"]);
const ul = yr(ls), us = K({}, os);
us[Be] = K(K({}, us[Be]), zm.kit);
const ni = yr(us), cs = K({}, Wm);
cs[Be] = K(K({}, cs[Be]), jm.kit);
yr(cs);
const rh = $m, Kc = "fa-layers-text", oh = Dm, ah = K({}, Im);
yr(ah);
const sh = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Wo = Tm, ih = [...Nm, ...Jm], or = Gt.FontAwesomeConfig || {};
function lh(e) {
  var t = ge.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function uh(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ge && typeof ge.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = uh(lh(n));
  o != null && (or[r] = o);
});
const Gc = {
  styleDefault: "solid",
  familyDefault: Be,
  cssPrefix: Vc,
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
const _n = K(K({}, Gc), or);
_n.autoReplaceSvg || (_n.observeMutations = !1);
const ee = {};
Object.keys(Gc).forEach((e) => {
  Object.defineProperty(ee, e, {
    enumerable: !0,
    set: function(t) {
      _n[e] = t, ar.forEach((n) => n(ee));
    },
    get: function() {
      return _n[e];
    }
  });
});
Object.defineProperty(ee, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    _n.cssPrefix = e, ar.forEach((t) => t(ee));
  },
  get: function() {
    return _n.cssPrefix;
  }
});
Gt.FontAwesomeConfig = ee;
const ar = [];
function ch(e) {
  return ar.push(e), () => {
    ar.splice(ar.indexOf(e), 1);
  };
}
const Ht = ss, xt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function dh(e) {
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
const fh = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ur() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += fh[Math.random() * 62 | 0];
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
function Yc(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function ph(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Yc(e[n]), '" '), "").trim();
}
function ho(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function oi(e) {
  return e.size !== xt.size || e.x !== xt.x || e.y !== xt.y || e.rotate !== xt.rotate || e.flipX || e.flipY;
}
function mh(e) {
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
function hh(e) {
  let {
    transform: t,
    width: n = ss,
    height: r = ss,
    startCentered: o = !1
  } = e, a = "";
  return o && Mc ? a += "translate(".concat(t.x / Ht - n / 2, "em, ").concat(t.y / Ht - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / Ht, "em), calc(-50% + ").concat(t.y / Ht, "em)) ") : a += "translate(".concat(t.x / Ht, "em, ").concat(t.y / Ht, "em) "), a += "scale(".concat(t.size / Ht * (t.flipX ? -1 : 1), ", ").concat(t.size / Ht * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var yh = `:root, :host {
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
  const e = Vc, t = Uc, n = ee.cssPrefix, r = ee.replacementClass;
  let o = yh;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(i, ".".concat(r));
  }
  return o;
}
let cl = !1;
function Ko() {
  ee.autoAddCss && !cl && (dh(Xc()), cl = !0);
}
var gh = {
  mixout() {
    return {
      dom: {
        css: Xc,
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
const Lt = Gt || {};
Lt[_t] || (Lt[_t] = {});
Lt[_t].styles || (Lt[_t].styles = {});
Lt[_t].hooks || (Lt[_t].hooks = {});
Lt[_t].shims || (Lt[_t].shims = []);
var Ot = Lt[_t];
const Jc = [], Qc = function() {
  ge.removeEventListener("DOMContentLoaded", Qc), Zr = 1, Jc.map((e) => e());
};
let Zr = !1;
jt && (Zr = (ge.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ge.readyState), Zr || ge.addEventListener("DOMContentLoaded", Qc));
function vh(e) {
  jt && (Zr ? setTimeout(e, 0) : Jc.push(e));
}
function gr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Yc(e) : "<".concat(t, " ").concat(ph(n), ">").concat(r.map(gr).join(""), "</").concat(t, ">");
}
function dl(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Go = function(t, n, r, o) {
  var a = Object.keys(t), s = a.length, i = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[a[0]]) : (c = 0, u = r); c < s; c++)
    l = a[c], u = i(u, t[l], l, t);
  return u;
};
function bh(e) {
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
function ds(e) {
  const t = bh(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function wh(e, t) {
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
function fs(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = fl(t);
  typeof Ot.hooks.addPack == "function" && !r ? Ot.hooks.addPack(e, fl(t)) : Ot.styles[e] = K(K({}, Ot.styles[e] || {}), o), e === "fas" && fs("fa", t);
}
const {
  styles: cr,
  shims: Sh
} = Ot, Zc = Object.keys(ni), xh = Zc.reduce((e, t) => (e[t] = Object.keys(ni[t]), e), {});
let ai = null, ed = {}, td = {}, nd = {}, rd = {}, od = {};
function Oh(e) {
  return ~ih.indexOf(e);
}
function Ah(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !Oh(o) ? o : null;
}
const ad = () => {
  const e = (r) => Go(cr, (o, a, s) => (o[s] = Go(a, r, {}), o), {});
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
  const t = "far" in cr || ee.autoFetchSvg, n = Go(Sh, (r, o) => {
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
  nd = n.names, rd = n.unicodes, ai = yo(ee.styleDefault, {
    family: ee.familyDefault
  });
};
ch((e) => {
  ai = yo(e.styleDefault, {
    family: ee.familyDefault
  });
});
ad();
function si(e, t) {
  return (ed[e] || {})[t];
}
function Ch(e, t) {
  return (td[e] || {})[t];
}
function on(e, t) {
  return (od[e] || {})[t];
}
function sd(e) {
  return nd[e] || {
    prefix: null,
    iconName: null
  };
}
function Eh(e) {
  const t = rd[e], n = si("fas", e);
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
const id = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Ph(e) {
  let t = Be;
  const n = Zc.reduce((r, o) => (r[o] = "".concat(ee.cssPrefix, "-").concat(o), r), {});
  return qc.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => xh[r].includes(o))) && (t = r);
  }), t;
}
function yo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Be
  } = t, r = nh[n][e];
  if (n === mo && !e)
    return "fad";
  const o = ul[n][e] || ul[n][r], a = e in Ot.styles ? e : null;
  return o || a || null;
}
function kh(e) {
  let t = [], n = null;
  return e.forEach((r) => {
    const o = Ah(ee.cssPrefix, r);
    o ? n = o : r && t.push(r);
  }), {
    iconName: n,
    rest: t
  };
}
function pl(e) {
  return e.sort().filter((t, n, r) => r.indexOf(t) === n);
}
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = as.concat(Um), a = pl(e.filter((d) => o.includes(d))), s = pl(e.filter((d) => !as.includes(d))), i = a.filter((d) => (r = d, !jc.includes(d))), [c = null] = i, l = Ph(a), u = K(K({}, kh(s)), {}, {
    prefix: yo(c, {
      family: l
    })
  });
  return K(K(K({}, u), Fh({
    values: e,
    family: l,
    styles: cr,
    config: ee,
    canonical: u,
    givenPrefix: r
  })), $h(n, r, u));
}
function $h(e, t, n) {
  let {
    prefix: r,
    iconName: o
  } = n;
  if (e || !r || !o)
    return {
      prefix: r,
      iconName: o
    };
  const a = t === "fa" ? sd(o) : {}, s = on(r, o);
  return o = a.iconName || s || o, r = a.prefix || r, r === "far" && !cr.far && cr.fas && !ee.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const Dh = qc.filter((e) => e !== Be || e !== mo), Th = Object.keys(os).filter((e) => e !== Be).map((e) => Object.keys(os[e])).flat();
function Fh(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: a = {},
    config: s = {}
  } = e, i = n === mo, c = t.includes("fa-duotone") || t.includes("fad"), l = s.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!i && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Dh.includes(n) && (Object.keys(a).find((g) => Th.includes(g)) || s.autoFetchSvg)) {
    const g = Lm.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = on(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Yt() || "fas"), r;
}
class Rh {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((a) => {
      this.definitions[a] = K(K({}, this.definitions[a] || {}), o[a]), fs(a, o[a]);
      const s = ni[Be][a];
      s && fs(s, o[a]), ad();
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
const Fn = {}, Ih = Object.keys(Fn);
function _h(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ml = e, Dn = {}, Object.keys(Fn).forEach((r) => {
    Ih.indexOf(r) === -1 && delete Fn[r];
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
    r.provides && r.provides(Fn);
  }), n;
}
function ps(e, t) {
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
function ms(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Yt();
  if (t)
    return t = on(n, t) || t, dl(ld.definitions, n, t) || dl(Ot.styles, n, t);
}
const ld = new Rh(), Lh = () => {
  ee.autoReplaceSvg = !1, ee.observeMutations = !1, fn("noAuto");
}, Bh = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return jt ? (fn("beforeI2svg", e), Xt("pseudoElements2svg", e), Xt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, vh(() => {
      Nh({
        autoReplaceSvgRoot: t
      }), fn("watch", e);
    });
  }
}, Mh = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: on(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = yo(e[0]);
      return {
        prefix: n,
        iconName: on(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match(rh))) {
      const t = go(e.split(" "), {
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
}, tt = {
  noAuto: Lh,
  config: ee,
  dom: Bh,
  parse: Mh,
  library: ld,
  findIconDefinition: ms,
  toHtml: gr
}, Nh = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = ge
  } = e;
  (Object.keys(Ot.styles).length > 0 || ee.autoFetchSvg) && jt && ee.autoReplaceSvg && tt.dom.i2svg({
    node: t
  });
};
function vo(e, t) {
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
function jh(e) {
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
    o.style = ho(K(K({}, a), {}, {
      "transform-origin": "".concat(l.x + s.x / 16, "em ").concat(l.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function qh(e) {
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
    width: g,
    height: y
  } = n.found ? n : t, m = qm.includes(r), p = [ee.replacementClass, o ? "".concat(ee.cssPrefix, "-").concat(o) : ""].filter(($) => u.classes.indexOf($) === -1).filter(($) => $ !== "" || !!$).concat(u.classes).join(" ");
  let f = {
    children: [],
    attributes: K(K({}, u.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: p,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(y)
    })
  };
  const h = m && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(g / y * 16 * 0.0625, "em")
  } : {};
  d && (f.attributes[dn] = ""), i && (f.children.push({
    tag: "title",
    attributes: {
      id: f.attributes["aria-labelledby"] || "title-".concat(l || ur())
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
    styles: K(K({}, h), u.styles)
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
  return w.children = O, w.attributes = E, s ? qh(w) : jh(w);
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
  } = e, c = K(K(K({}, s.attributes), a ? {
    title: a
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  i && (c[dn] = "");
  const l = K({}, s.styles);
  oi(o) && (l.transform = hh({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = ho(l);
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
function zh(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = K(K(K({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = ho(r.styles);
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
  styles: Yo
} = Ot;
function hs(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(ee.cssPrefix, "-").concat(Wo.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Wo.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Wo.PRIMARY),
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
const Vh = {
  found: !1,
  width: 512,
  height: 512
};
function Uh(e, t) {
  !Hc && !ee.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function ys(e, t) {
  let n = t;
  return t === "fa" && ee.styleDefault !== null && (t = Yt()), new Promise((r, o) => {
    if (n === "fa") {
      const a = sd(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Yo[t] && Yo[t][e]) {
      const a = Yo[t][e];
      return r(hs(a));
    }
    Uh(e, t), r(K(K({}, Vh), {}, {
      icon: ee.showMissingIcons && e ? Xt("missingIconAbstract") || {} : {}
    }));
  });
}
const yl = () => {
}, gs = ee.measurePerformance && Tr && Tr.mark && Tr.measure ? Tr : {
  mark: yl,
  measure: yl
}, er = 'FA "6.7.2"', Hh = (e) => (gs.mark("".concat(er, " ").concat(e, " begins")), () => ud(e)), ud = (e) => {
  gs.mark("".concat(er, " ").concat(e, " ends")), gs.measure("".concat(er, " ").concat(e), "".concat(er, " ").concat(e, " begins"), "".concat(er, " ").concat(e, " ends"));
};
var li = {
  begin: Hh,
  end: ud
};
const zr = () => {
};
function gl(e) {
  return typeof (e.getAttribute ? e.getAttribute(dn) : null) == "string";
}
function Wh(e) {
  const t = e.getAttribute ? e.getAttribute(ei) : null, n = e.getAttribute ? e.getAttribute(ti) : null;
  return t && n;
}
function Kh(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ee.replacementClass);
}
function Gh() {
  return ee.autoReplaceSvg === !0 ? Vr.replace : Vr[ee.autoReplaceSvg] || Vr.replace;
}
function Yh(e) {
  return ge.createElementNS("http://www.w3.org/2000/svg", e);
}
function Xh(e) {
  return ge.createElement(e);
}
function cd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Yh : Xh
  } = t;
  if (typeof e == "string")
    return ge.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(a) {
    r.setAttribute(a, e.attributes[a]);
  }), (e.children || []).forEach(function(a) {
    r.appendChild(cd(a, {
      ceFn: n
    }));
  }), r;
}
function Jh(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const Vr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(cd(n), t);
      }), t.getAttribute(dn) === null && ee.keepOriginalSource) {
        let n = ge.createComment(Jh(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~ri(t).indexOf(ee.replacementClass))
      return Vr.replace(e);
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
    t.setAttribute(dn, ""), t.innerHTML = o;
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
    ee.mutateApproach === eh && (r = Gt.requestAnimationFrame || vl), r(() => {
      const o = Gh(), a = li.begin("mutate");
      e.map(o), a(), n();
    });
  }
}
let ui = !1;
function fd() {
  ui = !0;
}
function vs() {
  ui = !1;
}
let eo = null;
function bl(e) {
  if (!al || !ee.observeMutations)
    return;
  const {
    treeCallback: t = zr,
    nodeCallback: n = zr,
    pseudoElementsCallback: r = zr,
    observeMutationsRoot: o = ge
  } = e;
  eo = new al((a) => {
    if (ui) return;
    const s = Yt();
    Nn(a).forEach((i) => {
      if (i.type === "childList" && i.addedNodes.length > 0 && !gl(i.addedNodes[0]) && (ee.searchPseudoElements && r(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && ee.searchPseudoElements && r(i.target.parentNode), i.type === "attributes" && gl(i.target) && ~sh.indexOf(i.attributeName))
        if (i.attributeName === "class" && Wh(i.target)) {
          const {
            prefix: c,
            iconName: l
          } = go(ri(i.target));
          i.target.setAttribute(ei, c || s), l && i.target.setAttribute(ti, l);
        } else Kh(i.target) && n(i.target);
    });
  }), jt && eo.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Qh() {
  eo && eo.disconnect();
}
function Zh(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const a = o.split(":"), s = a[0], i = a.slice(1);
    return s && i.length > 0 && (r[s] = i.join(":").trim()), r;
  }, {})), n;
}
function ey(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = go(ri(e));
  return o.prefix || (o.prefix = Yt()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = Ch(o.prefix, e.innerText) || si(o.prefix, ds(e.innerText))), !o.iconName && ee.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function ty(e) {
  const t = Nn(e.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return ee.autoA11y && (n ? t["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(r || ur()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ny() {
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
  } = ey(e), a = ty(e), s = ps("parseNodeAttributes", {}, e);
  let i = t.styleParser ? Zh(e) : [];
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
  styles: ry
} = Ot;
function pd(e) {
  const t = ee.autoReplaceSvg === "nest" ? wl(e, {
    styleParser: !1
  }) : wl(e);
  return ~t.extra.classes.indexOf(Kc) ? Xt("generateLayersText", e, t) : Xt("generateSvgReplacementMutation", e, t);
}
function oy() {
  return [...Mm, ...as];
}
function Sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jt) return Promise.resolve();
  const n = ge.documentElement.classList, r = (u) => n.add("".concat(ll, "-").concat(u)), o = (u) => n.remove("".concat(ll, "-").concat(u)), a = ee.autoFetchSvg ? oy() : jc.concat(Object.keys(ry));
  a.includes("fa") || a.push("fa");
  const s = [".".concat(Kc, ":not([").concat(dn, "])")].concat(a.map((u) => ".".concat(u, ":not([").concat(dn, "])"))).join(", ");
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
      const g = pd(d);
      g && u.push(g);
    } catch (g) {
      Hc || g.name === "MissingIcon" && console.error(g);
    }
    return u;
  }, []);
  return new Promise((u, d) => {
    Promise.all(l).then((g) => {
      dd(g, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((g) => {
      c(), d(g);
    });
  });
}
function ay(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  pd(e).then((n) => {
    n && dd([n], t);
  });
}
function sy(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ms(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : ms(o || {})), e(r, K(K({}, n), {}, {
      mask: o
    }));
  };
}
const iy = function(e) {
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
    iconName: g,
    icon: y
  } = e;
  return vo(K({
    type: "icon"
  }, e), () => (fn("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), ee.autoA11y && (s ? l["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(i || ur()) : (l["aria-hidden"] = "true", l.focusable = "false")), ii({
    icons: {
      main: hs(y),
      mask: o ? hs(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: g,
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
var ly = {
  mixout() {
    return {
      icon: sy(iy)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Sl, e.nodeCallback = ay, e;
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
      return new Promise((g, y) => {
        Promise.all([ys(r, s), l.iconName ? ys(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [p, f] = m;
          g([t, ii({
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
      const i = ho(s);
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
}, uy = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return vo({
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
}, cy = {
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
        return vo({
          type: "counter",
          content: e
        }, () => (fn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), zh({
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
}, dy = {
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
        return vo({
          type: "text",
          content: e
        }, () => (fn("beforeDOMElementCreation", {
          content: e,
          params: t
        }), hl({
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
const fy = new RegExp('"', "ug"), xl = [1105920, 1112319], Ol = K(K(K(K({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), _m), Qm), Hm), bs = Object.keys(Ol).reduce((e, t) => (e[t.toLowerCase()] = Ol[t], e), {}), py = Object.keys(bs).reduce((e, t) => {
  const n = bs[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function my(e) {
  const t = e.replace(fy, ""), n = wh(t, 0), r = n >= xl[0] && n <= xl[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: ds(o ? t[0] : t),
    isSecondary: r || o
  };
}
function hy(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (bs[n] || {})[o] || py[n];
}
function Al(e, t) {
  const n = "".concat(Zm).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Nn(e.children).filter((g) => g.getAttribute(is) === t)[0], i = Gt.getComputedStyle(e, t), c = i.getPropertyValue("font-family"), l = c.match(oh), u = i.getPropertyValue("font-weight"), d = i.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && d !== "none" && d !== "") {
      const g = i.getPropertyValue("content");
      let y = hy(c, u);
      const {
        value: m,
        isSecondary: p
      } = my(g), f = l[0].startsWith("FontAwesome");
      let h = si(y, m), w = h;
      if (f) {
        const O = Eh(m);
        O.iconName && O.prefix && (h = O.iconName, y = O.prefix);
      }
      if (h && !p && (!s || s.getAttribute(ei) !== y || s.getAttribute(ti) !== w)) {
        e.setAttribute(n, w), s && e.removeChild(s);
        const O = ny(), {
          extra: E
        } = O;
        E.attributes[is] = t, ys(h, y).then(($) => {
          const z = ii(K(K({}, O), {}, {
            icons: {
              main: $,
              mask: id()
            },
            prefix: y,
            iconName: w,
            extra: E,
            watchable: !0
          })), q = ge.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(q, e.firstChild) : e.appendChild(q), q.outerHTML = z.map((G) => gr(G)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function yy(e) {
  return Promise.all([Al(e, "::before"), Al(e, "::after")]);
}
function gy(e) {
  return e.parentNode !== document.head && !~th.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(is) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Cl(e) {
  if (jt)
    return new Promise((t, n) => {
      const r = Nn(e.querySelectorAll("*")).filter(gy).map(yy), o = li.begin("searchPseudoElements");
      fd(), Promise.all(r).then(() => {
        o(), vs(), t();
      }).catch(() => {
        o(), vs(), n();
      });
    });
}
var vy = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Cl, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ge
      } = t;
      ee.searchPseudoElements && Cl(n);
    };
  }
};
let El = !1;
var by = {
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
        bl(ps("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Qh();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        El ? vs() : bl(ps("mutationObserverCallbacks", {
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
var wy = {
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
      }, g = {
        outer: s,
        inner: u,
        path: d
      };
      return {
        tag: "g",
        attributes: K({}, g.outer),
        children: [{
          tag: "g",
          attributes: K({}, g.inner),
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: K(K({}, n.icon.attributes), g.path)
          }]
        }]
      };
    };
  }
};
const Xo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function kl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Sy(e) {
  return e.tag === "g" ? e.children : [e];
}
var xy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? go(n.split(" ").map((o) => o.trim())) : id();
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
      } = a, g = mh({
        transform: i,
        containerWidth: u,
        iconWidth: c
      }), y = {
        tag: "rect",
        attributes: K(K({}, Xo), {}, {
          fill: "white"
        })
      }, m = l.children ? {
        children: l.children.map(kl)
      } : {}, p = {
        tag: "g",
        attributes: K({}, g.inner),
        children: [kl(K({
          tag: l.tag,
          attributes: K(K({}, l.attributes), g.path)
        }, m))]
      }, f = {
        tag: "g",
        attributes: K({}, g.outer),
        children: [p]
      }, h = "mask-".concat(s || ur()), w = "clip-".concat(s || ur()), O = {
        tag: "mask",
        attributes: K(K({}, Xo), {}, {
          id: h,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, f]
      }, E = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: Sy(d)
        }, O]
      };
      return n.push(E, {
        tag: "rect",
        attributes: K({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(h, ")")
        }, Xo)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Oy = {
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
}, Ay = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Cy = [gh, ly, uy, cy, dy, vy, by, wy, xy, Oy, Ay];
_h(Cy, {
  mixoutsTo: tt
});
tt.noAuto;
const md = tt.config, jn = tt.library;
tt.dom;
const to = tt.parse;
tt.findIconDefinition;
tt.toHtml;
const Ey = tt.icon;
tt.layer;
const Py = tt.text;
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
function ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $l(Object(n), !0).forEach(function(r) {
      Ve(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $l(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ky(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $y(e) {
  var t = ky(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
function Ve(e, t, n) {
  return t = $y(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Dy(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Ty(e, t) {
  if (e == null) return {};
  var n = Dy(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ws(e) {
  return Fy(e) || Ry(e) || Iy(e) || _y();
}
function Fy(e) {
  if (Array.isArray(e)) return Ss(e);
}
function Ry(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Iy(e, t) {
  if (e) {
    if (typeof e == "string") return Ss(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ss(e, t);
  }
}
function Ss(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function _y() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ly = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hd = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(h, w, O) {
      if (!l(w) || d(w) || g(w) || y(w) || c(w))
        return w;
      var E, $ = 0, z = 0;
      if (u(w))
        for (E = [], z = w.length; $ < z; $++)
          E.push(n(h, w[$], O));
      else {
        E = {};
        for (var q in w)
          Object.prototype.hasOwnProperty.call(w, q) && (E[h(q, O)] = n(h, w[q], O));
      }
      return E;
    }, r = function(h, w) {
      w = w || {};
      var O = w.separator || "_", E = w.split || /(?=[A-Z])/;
      return h.split(E).join(O);
    }, o = function(h) {
      return m(h) ? h : (h = h.replace(/[\-_\s]+(.)?/g, function(w, O) {
        return O ? O.toUpperCase() : "";
      }), h.substr(0, 1).toLowerCase() + h.substr(1));
    }, a = function(h) {
      var w = o(h);
      return w.substr(0, 1).toUpperCase() + w.substr(1);
    }, s = function(h, w) {
      return r(h, w).toLowerCase();
    }, i = Object.prototype.toString, c = function(h) {
      return typeof h == "function";
    }, l = function(h) {
      return h === Object(h);
    }, u = function(h) {
      return i.call(h) == "[object Array]";
    }, d = function(h) {
      return i.call(h) == "[object Date]";
    }, g = function(h) {
      return i.call(h) == "[object RegExp]";
    }, y = function(h) {
      return i.call(h) == "[object Boolean]";
    }, m = function(h) {
      return h = h - 0, h === h;
    }, p = function(h, w) {
      var O = w && "process" in w ? w.process : w;
      return typeof O != "function" ? h : function(E, $) {
        return O(E, h, $);
      };
    }, f = {
      camelize: o,
      decamelize: s,
      pascalize: a,
      depascalize: s,
      camelizeKeys: function(h, w) {
        return n(p(o, w), h);
      },
      decamelizeKeys: function(h, w) {
        return n(p(s, w), h, w);
      },
      pascalizeKeys: function(h, w) {
        return n(p(a, w), h);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = f : t.humps = f;
  })(Ly);
})(hd);
var By = hd.exports, My = ["class", "style"];
function Ny(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = By.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[o] = a, t;
  }, {});
}
function jy(e) {
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
        c.class = jy(u);
        break;
      case "style":
        c.style = Ny(u);
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
  var a = n.style, s = a === void 0 ? {} : a, i = Ty(n, My);
  return qe(e.tag, ct(ct(ct({}, t), {}, {
    class: o.class,
    style: ct(ct({}, o.style), s)
  }, o.attrs), i), r);
}
var yd = !1;
try {
  yd = process.env.NODE_ENV === "production";
} catch {
}
function qy() {
  if (!yd && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function sr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ve({}, e, t) : {};
}
function zy(e) {
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
function Dl(e) {
  if (e && no(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (to.icon)
    return to.icon(e);
  if (e === null)
    return null;
  if (no(e) === "object" && e.prefix && e.iconName)
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
var Se = H({
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
    var r = n.attrs, o = V(function() {
      return Dl(t.icon);
    }), a = V(function() {
      return sr("classes", zy(t));
    }), s = V(function() {
      return sr("transform", typeof t.transform == "string" ? to.transform(t.transform) : t.transform);
    }), i = V(function() {
      return sr("mask", Dl(t.mask));
    }), c = V(function() {
      return Ey(o.value, ct(ct(ct(ct({}, a.value), s.value), i.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    ne(c, function(u) {
      if (!u)
        return qy("Could not find one or more icon(s)", o.value, i.value);
    }, {
      immediate: !0
    });
    var l = V(function() {
      return c.value ? ci(c.value.abstract[0], {}, r) : null;
    });
    return function() {
      return l.value;
    };
  }
});
H({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, o = md.familyPrefix, a = V(function() {
      return ["".concat(o, "-layers")].concat(ws(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return qe("div", {
        class: a.value
      }, r.default ? r.default() : []);
    };
  }
});
H({
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
    var r = n.attrs, o = md.familyPrefix, a = V(function() {
      return sr("classes", [].concat(ws(t.counter ? ["".concat(o, "-layers-counter")] : []), ws(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), s = V(function() {
      return sr("transform", typeof t.transform == "string" ? to.transform(t.transform) : t.transform);
    }), i = V(function() {
      var l = Py(t.value.toString(), ct(ct({}, s.value), a.value)), u = l.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), c = V(function() {
      return ci(i.value, {}, r);
    });
    return function() {
      return c.value;
    };
  }
});
const Vy = { class: "py-ui px-ui gap-ui-half flex flex-col rounded bg-white text-center" }, Uy = { class: "whitespace-pre-line text-gray-600" }, Hy = /* @__PURE__ */ H({
  __name: "UnderConstruction",
  props: {
    full: { type: Boolean, default: !1 },
    info: { default: `Section under construction.
Please come back later.` }
  },
  setup(e) {
    return (t, n) => (x(), P("div", {
      class: Z(["bg-stripes p-ui flex w-full items-center justify-center", { grow: t.full }])
    }, [
      D("div", Vy, [
        Q(b(Se), {
          icon: b(pm),
          class: "text-primary text-4xl"
        }, null, 8, ["icon"]),
        n[0] || (n[0] = D("h1", { class: "text-2xl font-bold" }, "Under Construction", -1)),
        D("p", Uy, J(t.info), 1)
      ])
    ], 2));
  }
}), bo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, yO = /* @__PURE__ */ bo(Hy, [["__scopeId", "data-v-360f3e83"]]), Wy = { class: "flex items-center" }, Ky = {
  key: 1,
  class: "mr-1"
}, Gy = ["id", "value", "disabled", "required", "name"], Yy = {
  key: 3,
  class: "ml-1"
}, Xy = /* @__PURE__ */ H({
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
      return f.split("_").join(" ").split(" ").map((h) => h[0].toUpperCase() + h.slice(1)).join(" ");
    }
    const s = Mn(e, "modelValue"), i = _(!1), c = _(), l = _(), u = _(!1);
    pe(() => {
      var f;
      i.value = !o.form, c.value = i.value ? s.value : ((f = o.form) == null ? void 0 : f[o.field]) ?? o.checked;
    }), ne(
      () => c.value,
      (f, h) => {
        if (f !== h) {
          if (i.value ? s.value = f : o.form && o.field && (o.form[o.field] = f), l.value = h, r("update:modelValue", f), r("update:checked", f), u.value) {
            u.value = !1;
            return;
          }
          r("changed", { value: f, old_value: h });
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
    const d = V(() => o.label || (o.field ? a(o.field) : "")), g = V(() => {
      var f, h;
      return o.error || ((h = (f = o.form) == null ? void 0 : f.errors) == null ? void 0 : h[o.field]);
    }), y = V(() => o.id || o.field || `checkbox-${Math.random().toString(36).substr(2, 9)}`);
    return t({
      setValueSilently: (f) => {
        c.value = f, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, h) => {
      var w, O;
      return x(), P("div", {
        class: Z(f.noLabel ? "mb-2" : "mb-4")
      }, [
        !f.noLabel && f.label ? (x(), U(b(qn), {
          key: 0,
          customClass: f.labelCustomClass,
          for: y.value,
          value: d.value,
          sublabel: f.sublabel,
          required: f.required,
          tooltip: f.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : Y("", !0),
        D("label", Wy, [
          (w = f.$slots) != null && w.leftDescription ? j(f.$slots, "leftDescription", { key: 0 }) : f.leftDescription ? (x(), P("span", Ky, J(f.leftDescription === !0 ? "Disable" : f.leftDescription), 1)) : Y("", !0),
          He(D("input", {
            type: "checkbox",
            id: y.value,
            value: c.value,
            "onUpdate:modelValue": h[0] || (h[0] = (E) => c.value = E),
            disabled: f.disabled,
            required: f.required,
            name: f.name || f.field,
            class: Z(["text-accent-600 focus:ring-accent-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none", { [f.customClass]: f.customClass }])
          }, null, 10, Gy), [
            [xc, c.value]
          ]),
          (O = f.$slots) != null && O.rightDescription ? j(f.$slots, "rightDescription", { key: 2 }) : f.rightDescription ? (x(), P("span", Yy, J(f.rightDescription === !0 ? "Enable" : f.rightDescription), 1)) : Y("", !0)
        ]),
        g.value ? (x(), U(b(en), {
          key: 1,
          message: g.value,
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
const Jy = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
};
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const di = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, Qy = { class: "relative flex w-full max-w-full items-stretch" }, Zy = ["id", "required", "disabled", "name"], eg = { class: "relative flex w-full" }, tg = ["href"], ng = {
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
    jn.add(di, um, Jy, tl, el, rs);
    const r = e;
    function o(p) {
      let f = [];
      return p.split("_").join(" ").split(" ").map(function(h) {
        f.push(h[0].toUpperCase() + h.slice(1));
      }), f.join(" ");
    }
    const a = n, s = _(!1), i = Mn(e, "modelValue"), c = _(), l = _(), u = _(r.type);
    pe(() => {
      s.value = !r.form, c.value = s.value ? i.value : r.form[r.field];
    }), ne(
      () => c.value,
      (p, f) => {
        if (p !== f) {
          if (s.value ? i.value = p : r.form[r.field] = p, l.value = f, a("update:modelValue", p), d.value) {
            d.value = !1;
            return;
          }
          a("changed", { value: p, old_value: f });
        }
      }
    );
    const d = _(!1), g = (p) => {
      c.value = p, d.value = !0;
    }, y = () => l.value;
    ne(
      () => r.field ? r.form[r.field] : null,
      (p) => {
        c.value = s.value ? i.value : p;
      },
      {
        deep: !0
      }
    ), ne(
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
      setValueSilently: g,
      getPreviousValue: y
    }), (p, f) => {
      var h, w, O, E, $, z, q, G, R, k, N;
      return e.type === "textarea" ? (x(), U(b(pg), {
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
      }, Ho({ _: 2 }, [
        (h = p.$slots) != null && h.submit ? {
          name: "submit",
          fn: M(() => [
            j(p.$slots, "submit")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "addon", "placeholder", "no-label", "autofocus", "rows", "name", "sublabel", "submit-btn", "whats-app", "autocomplete", "tooltip", "custom-class", "label-custom-class", "button-custom-class", "error", "modelValue"])) : e.type === "switch" ? (x(), U(b(bg), {
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
      }, Ho({ _: 2 }, [
        (w = p.$slots) != null && w.leftDescription ? {
          name: "leftDescription",
          fn: M(() => [
            j(p.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (O = p.$slots) != null && O.rightDescription ? {
          name: "rightDescription",
          fn: M(() => [
            j(p.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : e.type === "checkbox" ? (x(), U(b(Xy), {
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
      }, Ho({ _: 2 }, [
        (E = p.$slots) != null && E.leftDescription ? {
          name: "leftDescription",
          fn: M(() => [
            j(p.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        ($ = p.$slots) != null && $.rightDescription ? {
          name: "rightDescription",
          fn: M(() => [
            j(p.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : (x(), P("div", {
        key: 3,
        class: Z(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? Y("", !0) : (x(), U(b(qn), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? o(e.field) : "",
          sublabel: e.sublabel,
          required: e.required,
          tooltip: e.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        D("div", Qy, [
          e.type === "select" ? He((x(), P("select", {
            key: 0,
            "onUpdate:modelValue": f[6] || (f[6] = (v) => c.value = v),
            id: e.field,
            required: r.required,
            disabled: r.disabled,
            name: e.name ?? e.field,
            class: Z(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [e.inputCustomClass]: !!e.inputCustomClass }])
          }, [
            j(p.$slots, "default")
          ], 10, Zy)), [
            [Oc, c.value]
          ]) : (x(), P(re, { key: 1 }, [
            e.addon ? (x(), P("span", {
              key: 0,
              class: Z(["flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !r.disabled }])
            }, J(e.addon), 3)) : Y("", !0),
            D("div", eg, [
              Q(b(ug), {
                id: e.field,
                type: u.value,
                class: Z({
                  "rounded-l-none! shadow-none!": e.addon,
                  "rounded-r-none!": !!e.submitBtn || e.whatsApp || ((z = p.$slots) == null ? void 0 : z.submit),
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
                class: "absolute top-0 right-0 z-2 flex h-full w-11 cursor-pointer items-center justify-center text-lg leading-normal text-black"
              }, [
                u.value === "password" ? (x(), U(b(Se), {
                  key: 0,
                  icon: b(tl)
                }, null, 8, ["icon"])) : (x(), U(b(Se), {
                  key: 1,
                  icon: b(el)
                }, null, 8, ["icon"]))
              ])) : Y("", !0)
            ]),
            e.form ? (x(), P(re, { key: 1 }, [
              e.submitBtn ? (x(), U(b(uo), {
                key: 0,
                form: e.form,
                class: Z(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: M(() => [
                  fe(J(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (q = p.$slots) != null && q.submit ? (x(), U(b(uo), {
                key: 1,
                form: e.form,
                class: Z(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: M(() => [
                  j(p.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            e.whatsApp ? (x(), P("a", {
              key: 2,
              class: Z(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              Q(b(Se), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, tg)) : Y("", !0)
          ], 64))
        ]),
        e.error || (R = (G = e.form) == null ? void 0 : G.errors) != null && R[e.field] ? (x(), U(b(en), {
          key: 1,
          message: e.error ? e.error : (N = (k = e.form) == null ? void 0 : k.errors) == null ? void 0 : N[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2));
    };
  }
}, rg = { class: "text-sm text-red-600" }, en = /* @__PURE__ */ H({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(e) {
    return (t, n) => He((x(), P("div", null, [
      D("p", rg, J(t.message), 1)
    ], 512)), [
      [ln, t.message]
    ]);
  }
}), og = { key: 0 }, ag = { key: 1 }, sg = {
  key: 3,
  class: "ml-2 text-xs text-gray-500"
}, ig = {
  key: 4,
  class: "ml-1 text-red-500"
}, qn = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass", "tooltip"],
  setup(e) {
    return jn.add(rs), (t, n) => (x(), P("label", {
      class: Z(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (x(), P("span", og, J(e.value), 1)) : (x(), P("span", ag, [
        j(t.$slots, "default")
      ])),
      e.tooltip ? (x(), U(b(T4), {
        key: 2,
        content: e.tooltip,
        class: "ml-1 inline-block"
      }, {
        default: M(() => [
          Q(b(Se), {
            icon: b(rs),
            class: "mx-1 cursor-help"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["content"])) : Y("", !0),
      e.sublabel ? (x(), P("span", sg, J(e.sublabel), 1)) : Y("", !0),
      e.required ? (x(), P("span", ig, "*")) : Y("", !0)
    ], 2));
  }
}, lg = ["value"], ug = /* @__PURE__ */ H({
  __name: "TextInput",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = _(null), a = (s) => {
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
    }, null, 40, lg));
  }
}), cg = { class: "relative flex w-full max-w-full items-stretch" }, dg = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], fg = ["href"], pg = /* @__PURE__ */ H({
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
    const s = _(!1), i = Mn(e, "modelValue"), c = _(), l = _(), u = _(!1);
    pe(() => {
      var p;
      s.value = !r.form, c.value = s.value ? i.value : (p = r.form) == null ? void 0 : p[r.field];
    }), ne(
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
    ), ne(
      () => r.field && r.form ? r.form[r.field] : null,
      (p) => {
        c.value = s.value ? i.value : p;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (p) => {
        c.value = p;
      }
    );
    const d = V(() => r.label || (r.field ? a(r.field) : "")), g = V(() => {
      var p, f;
      return r.error || ((f = (p = r.form) == null ? void 0 : p.errors) == null ? void 0 : f[r.field]);
    });
    return t({
      setValueSilently: (p) => {
        c.value = p, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (p, f) => (x(), U(b(Xs), {
      field: p.field,
      label: d.value,
      sublabel: p.sublabel,
      tooltip: p.tooltip,
      required: p.required,
      noLabel: p.noLabel,
      labelCustomClass: p.labelCustomClass,
      form: p.form,
      error: g.value,
      htmlFor: p.field
    }, {
      default: M(() => {
        var h, w;
        return [
          D("div", cg, [
            p.addon ? (x(), P("span", {
              key: 0,
              class: Z(["border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !p.disabled }])
            }, J(p.addon), 3)) : Y("", !0),
            He(D("textarea", {
              id: p.field,
              class: Z(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", {
                "rounded-l-none shadow-none": p.addon,
                "rounded-r-none": !!p.submitBtn || p.whatsApp || ((h = p.$slots) == null ? void 0 : h.submit),
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
            }, null, 10, dg), [
              [Ac, c.value]
            ]),
            p.form ? (x(), P(re, { key: 1 }, [
              p.submitBtn ? (x(), U(b(uo), {
                key: 0,
                form: p.form,
                class: Z(["z-2 inline-block rounded-l-none", p.buttonCustomClass]),
                id: `submit-button-${p.field}`
              }, {
                default: M(() => [
                  fe(J(p.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : Y("", !0),
              (w = p.$slots) != null && w.submit ? (x(), U(b(uo), {
                key: 1,
                form: p.form,
                class: Z(["z-2 inline-block rounded-l-none", p.buttonCustomClass]),
                id: "button-textarea"
              }, {
                default: M(() => [
                  j(p.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : Y("", !0)
            ], 64)) : Y("", !0),
            p.whatsApp ? (x(), P("a", {
              key: 2,
              class: Z(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", p.buttonCustomClass]),
              href: p.whatsApp,
              target: "_blank"
            }, [
              Q(b(Se), {
                icon: b(di),
                size: "2xl"
              }, null, 8, ["icon"])
            ], 10, fg)) : Y("", !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), mg = { class: "flex items-center" }, hg = {
  key: 1,
  class: "mr-1"
}, yg = ["id", "disabled", "required", "name"], gg = {
  key: 3,
  class: "ml-1"
}, vg = /* @__PURE__ */ H({
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
    const s = _(!1), i = Mn(e, "modelValue"), c = _(), l = _(), u = _(!1);
    pe(() => {
      var p;
      s.value = !r.form, c.value = s.value ? i.value : (p = r.form) == null ? void 0 : p[r.field];
    }), ne(
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
    ), ne(
      () => r.field && r.form ? r.form[r.field] : null,
      (p) => {
        c.value = s.value ? i.value : p;
      },
      { deep: !0 }
    ), ne(
      () => i.value,
      (p) => {
        c.value = p;
      }
    );
    const d = V(() => r.label || (r.field ? a(r.field) : "")), g = V(() => {
      var p, f;
      return r.error || ((f = (p = r.form) == null ? void 0 : p.errors) == null ? void 0 : f[r.field]);
    });
    return t({
      setValueSilently: (p) => {
        c.value = p, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (p, f) => {
      var h, w;
      return x(), P("div", {
        class: Z(p.noLabel ? "mb-2" : "mb-4")
      }, [
        p.noLabel ? Y("", !0) : (x(), U(b(qn), {
          key: 0,
          customClass: p.labelCustomClass,
          for: p.field,
          value: d.value,
          sublabel: p.sublabel,
          required: p.required,
          tooltip: p.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        D("label", mg, [
          (h = p.$slots) != null && h.leftDescription ? j(p.$slots, "leftDescription", { key: 0 }, void 0, !0) : p.leftDescription ? (x(), P("span", hg, J(p.leftDescription === !0 ? "Disable" : p.leftDescription), 1)) : Y("", !0),
          He(D("input", {
            id: p.field,
            type: "checkbox",
            class: "hidden",
            "onUpdate:modelValue": f[0] || (f[0] = (O) => c.value = O),
            disabled: p.disabled,
            required: p.required,
            name: p.name || p.field
          }, null, 8, yg), [
            [xc, c.value]
          ]),
          D("div", {
            tabindex: "0",
            class: Z(["toggle-switch focusable relative mx-2 ml-0 inline-block h-6 w-12 flex-none cursor-pointer rounded-xl bg-gray-300 transition-all", {
              "checked bg-primary": c.value,
              "disabled cursor-not-allowed opacity-50": p.disabled,
              [p.customClass]: p.customClass
            }]),
            style: { "box-shadow": "0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset" }
          }, null, 2),
          (w = p.$slots) != null && w.rightDescription ? j(p.$slots, "rightDescription", { key: 2 }, void 0, !0) : p.rightDescription ? (x(), P("span", gg, J(p.rightDescription === !0 ? "Enable" : p.rightDescription), 1)) : Y("", !0)
        ]),
        g.value ? (x(), U(b(en), {
          key: 1,
          message: g.value,
          class: "mt-2"
        }, null, 8, ["message"])) : Y("", !0)
      ], 2);
    };
  }
}), bg = /* @__PURE__ */ bo(vg, [["__scopeId", "data-v-dc63ff1f"]]), wg = ["id", "required", "disabled", "name"], Sg = ["selected"], xg = ["value", "disabled"], gO = /* @__PURE__ */ H({
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
      return f.split("_").join(" ").split(" ").map((h) => h.charAt(0).toUpperCase() + h.slice(1)).join(" ");
    }
    const s = _(!1), i = Mn(e, "modelValue"), c = _(), l = _(), u = _(!1);
    pe(() => {
      var f;
      s.value = !r.form, c.value = s.value ? i.value : (f = r.form) == null ? void 0 : f[r.field];
    }), ne(
      () => c.value,
      (f, h) => {
        if (f !== h) {
          if (s.value ? i.value = f : r.form && r.field && (r.form[r.field] = f), l.value = h, o("update:modelValue", f), u.value) {
            u.value = !1;
            return;
          }
          o("changed", { value: f, old_value: h });
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
    const d = V(() => r.options ? r.options.map((f) => typeof f == "string" ? { value: f, label: f, disabled: !1 } : {
      value: f.value,
      label: f.label || String(f.value),
      disabled: f.disabled || !1
    }) : []), g = V(() => r.label || (r.field ? a(r.field) : "")), y = V(() => {
      var f, h;
      return r.error || ((h = (f = r.form) == null ? void 0 : f.errors) == null ? void 0 : h[r.field]);
    });
    return t({
      setValueSilently: (f) => {
        c.value = f, u.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, h) => (x(), U(b(Xs), {
      field: f.field,
      label: g.value,
      sublabel: f.sublabel,
      tooltip: f.tooltip,
      required: f.required,
      noLabel: f.noLabel,
      labelCustomClass: f.labelCustomClass,
      form: f.form,
      error: y.value,
      htmlFor: f.field
    }, {
      default: M(() => [
        He(D("select", {
          id: f.field,
          "onUpdate:modelValue": h[0] || (h[0] = (w) => c.value = w),
          required: f.required,
          disabled: f.disabled,
          name: f.name || f.field,
          class: Z(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", f.customClass])
        }, [
          f.placeholder ? (x(), P("option", {
            key: 0,
            value: "",
            disabled: "",
            selected: !c.value,
            class: "text-gray-500"
          }, J(f.placeholder), 9, Sg)) : Y("", !0),
          (x(!0), P(re, null, Ce(d.value, (w) => (x(), P("option", {
            key: w.value,
            value: w.value,
            disabled: w.disabled
          }, J(w.label), 9, xg))), 128)),
          j(f.$slots, "default")
        ], 10, wg), [
          [Oc, c.value]
        ])
      ]),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Og = ["id", "disabled"], Ag = { class: "flex flex-wrap gap-1" }, Cg = ["onClick"], Eg = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, Pg = { class: "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg" }, kg = {
  key: 0,
  class: "border-b border-gray-200 p-2"
}, $g = { class: "relative" }, Dg = {
  key: 1,
  class: "flex items-center justify-center p-4"
}, Tg = {
  key: 2,
  class: "max-h-60 overflow-auto"
}, Fg = {
  key: 0,
  class: "bg-gray-50 px-3 py-2 text-xs font-semibold tracking-wide text-gray-500 uppercase"
}, Rg = ["onClick", "disabled"], Ig = { class: "block truncate" }, _g = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, Lg = ["onClick", "disabled"], Bg = { class: "block truncate" }, Mg = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, Ng = {
  key: 2,
  class: "px-3 py-2 text-center text-sm text-gray-500"
}, vO = /* @__PURE__ */ H({
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
    const n = e, r = t, o = _(!1), a = _(""), s = _(!1), i = _(null), c = _([...n.options]), l = _(), u = _(), d = V({
      get() {
        return n.modelValue !== void 0 ? n.modelValue : n.form && n.field ? n.form[n.field] : n.multiple ? [] : void 0;
      },
      set(S) {
        n.modelValue !== void 0 ? r("update:modelValue", S) : n.form && n.field && (n.form[n.field] = S);
      }
    }), g = (S) => S[n.optionValue], y = (S) => S[n.optionLabel], m = (S) => S[n.optionGroup], p = V(() => {
      var S;
      if ((S = n.form) != null && S.errors && n.field)
        return n.form.errors[n.field];
    }), f = V(() => n.label ? n.label : n.field ? n.field.split("_").map((S) => S.charAt(0).toUpperCase() + S.slice(1)).join(" ") : ""), h = V(() => n.field || `select-${Math.random().toString(36).substr(2, 9)}`), w = V(() => {
      if (!n.searchable || !a.value)
        return c.value;
      const S = a.value.toLowerCase();
      return c.value.filter((W) => y(W).toLowerCase().includes(S));
    }), O = V(() => {
      if (!n.grouping)
        return { ungrouped: w.value };
      const S = {};
      return w.value.forEach((W) => {
        const I = m(W) || "ungrouped";
        S[I] || (S[I] = []), S[I].push(W);
      }), S;
    }), E = V(() => {
      if (!d.value) return [];
      const S = n.multiple ? d.value : [d.value];
      return c.value.filter((W) => S.includes(g(W)));
    }), $ = V(() => E.value.length ? n.multiple ? E.value.map((S) => y(S)).join(", ") : y(E.value[0]) : n.placeholder), z = async (S) => {
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
    }, q = (S) => {
      a.value = S, r("search", S), n.apiSearch && S.length >= n.minSearchLength && (i.value && clearTimeout(i.value), i.value = setTimeout(() => {
        z(S);
      }, n.searchDelay));
    }, G = (S) => {
      if (S.disabled) return;
      const W = g(S);
      if (n.multiple) {
        const I = d.value || [], T = I.indexOf(W);
        T > -1 ? d.value = I.filter((X, ae) => ae !== T) : d.value = [...I, W];
      } else
        d.value = W, o.value = !1;
    }, R = (S, W) => {
      if (W.stopPropagation(), n.multiple) {
        const I = g(S);
        d.value = d.value.filter((T) => T !== I);
      }
    }, k = (S) => {
      S.stopPropagation(), d.value = n.multiple ? [] : void 0;
    }, N = (S) => {
      const W = g(S);
      return n.multiple ? (d.value || []).includes(W) : d.value === W;
    }, v = () => {
      n.disabled || (o.value = !o.value, o.value && n.searchable && Te(() => {
        var S;
        (S = u.value) == null || S.focus();
      }));
    }, A = (S) => {
      l.value && !l.value.contains(S.target) && (o.value = !1);
    };
    return ne(
      () => n.options,
      (S) => {
        c.value = [...S];
      },
      { immediate: !0 }
    ), pe(() => {
      document.addEventListener("click", A);
    }), Pt(() => {
      document.removeEventListener("click", A), i.value && clearTimeout(i.value);
    }), (S, W) => (x(), U(b(Xs), {
      field: S.field,
      label: f.value,
      tooltip: S.tooltip,
      required: S.required,
      noLabel: S.noLabel,
      form: S.form,
      error: p.value,
      htmlFor: h.value
    }, {
      default: M(() => [
        D("div", {
          class: "relative",
          ref_key: "dropdownRef",
          ref: l
        }, [
          D("button", {
            type: "button",
            id: h.value,
            onClick: v,
            disabled: S.disabled,
            class: Z(["focusable focus:border-primary-500 focus:ring-primary-500 relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500", [
              S.customClass,
              {
                "border-red-500 focus:border-red-500 focus:ring-red-500": p.value,
                "border-primary-500 ring-primary-500 ring-2": o.value
              }
            ]])
          }, [
            D("div", Ag, [
              S.multiple && E.value.length ? (x(!0), P(re, { key: 0 }, Ce(E.value, (I) => (x(), P("span", {
                key: g(I),
                class: "bg-primary-100 text-primary-800 inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
              }, [
                fe(J(y(I)) + " ", 1),
                D("button", {
                  type: "button",
                  onClick: (T) => R(I, T),
                  class: "hover:text-primary-600 transition-colors"
                }, [
                  Q(b(Se), {
                    icon: b(Qr),
                    class: "h-3 w-3"
                  }, null, 8, ["icon"])
                ], 8, Cg)
              ]))), 128)) : (x(), P("span", {
                key: 1,
                class: Z(["block truncate", { "text-gray-500": !E.value.length }])
              }, J($.value), 3))
            ]),
            S.clearable && E.value.length ? (x(), P("button", {
              key: 0,
              type: "button",
              onClick: k,
              class: "absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 transition-colors hover:text-gray-600"
            }, [
              Q(b(Se), {
                icon: b(Qr),
                class: "h-4 w-4"
              }, null, 8, ["icon"])
            ])) : Y("", !0),
            D("div", Eg, [
              Q(b(Se), {
                icon: b(Qs),
                class: Z(["h-4 w-4 text-gray-400 transition-transform duration-200", { "rotate-180": o.value }])
              }, null, 8, ["icon", "class"])
            ])
          ], 10, Og),
          Q(un, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "opacity-0 scale-95",
            "enter-to-class": "opacity-100 scale-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "opacity-100 scale-100",
            "leave-to-class": "opacity-0 scale-95"
          }, {
            default: M(() => [
              He(D("div", Pg, [
                S.searchable ? (x(), P("div", kg, [
                  D("div", $g, [
                    Q(b(Se), {
                      icon: b(gm),
                      class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                    }, null, 8, ["icon"]),
                    He(D("input", {
                      ref_key: "searchInputRef",
                      ref: u,
                      type: "text",
                      "onUpdate:modelValue": W[0] || (W[0] = (I) => a.value = I),
                      onInput: W[1] || (W[1] = (I) => q(a.value)),
                      placeholder: "Search options...",
                      class: "focus:border-primary-500 focus:ring-primary-500 w-full rounded border border-gray-300 py-2 pr-3 pl-10 text-sm focus:ring-2 focus:ring-offset-0"
                    }, null, 544), [
                      [Ac, a.value]
                    ])
                  ])
                ])) : Y("", !0),
                s.value ? (x(), P("div", Dg, [
                  Q(b(qi), { class: "h-5 w-5" }),
                  W[2] || (W[2] = D("span", { class: "ml-2 text-sm text-gray-600" }, "Loading...", -1))
                ])) : (x(), P("div", Tg, [
                  S.grouping ? (x(!0), P(re, { key: 0 }, Ce(O.value, (I, T) => (x(), P("div", { key: T }, [
                    T !== "ungrouped" ? (x(), P("div", Fg, J(T), 1)) : Y("", !0),
                    (x(!0), P(re, null, Ce(I, (X) => (x(), P("button", {
                      key: g(X),
                      type: "button",
                      onClick: (ae) => G(X),
                      disabled: X.disabled,
                      class: Z(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                        "bg-primary-100 text-primary-900": N(X),
                        "text-gray-900": !N(X)
                      }])
                    }, [
                      D("span", Ig, J(y(X)), 1),
                      N(X) ? (x(), P("span", _g, " ✓ ")) : Y("", !0)
                    ], 10, Rg))), 128))
                  ]))), 128)) : (x(!0), P(re, { key: 1 }, Ce(w.value, (I) => (x(), P("button", {
                    key: g(I),
                    type: "button",
                    onClick: (T) => G(I),
                    disabled: I.disabled,
                    class: Z(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                      "bg-primary-100 text-primary-900": N(I),
                      "text-gray-900": !N(I)
                    }])
                  }, [
                    D("span", Bg, J(y(I)), 1),
                    N(I) ? (x(), P("span", Mg, "✓")) : Y("", !0)
                  ], 10, Lg))), 128)),
                  w.value.length ? Y("", !0) : (x(), P("div", Ng, "No options found"))
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
var jg = Object.defineProperty, qg = Object.defineProperties, zg = Object.getOwnPropertyDescriptors, Tl = Object.getOwnPropertySymbols, Vg = Object.prototype.hasOwnProperty, Ug = Object.prototype.propertyIsEnumerable, Fl = (e, t, n) => t in e ? jg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pn = (e, t) => {
  for (var n in t || (t = {}))
    Vg.call(t, n) && Fl(e, n, t[n]);
  if (Tl)
    for (var n of Tl(t))
      Ug.call(t, n) && Fl(e, n, t[n]);
  return e;
}, Rl = (e, t) => qg(e, zg(t));
const Hg = {
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
}, Wg = {
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
}, Kg = {
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
}, fi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Gg = {}, Yg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Xg = /* @__PURE__ */ D("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Jg = [
  Xg
];
function Qg(e, t) {
  return x(), P("svg", Yg, Jg);
}
const Zg = /* @__PURE__ */ fi(Gg, [["render", Qg]]), e0 = {}, t0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, n0 = /* @__PURE__ */ D("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), r0 = [
  n0
];
function o0(e, t) {
  return x(), P("svg", t0, r0);
}
const a0 = /* @__PURE__ */ fi(e0, [["render", o0]]), Il = {
  Deselect: Zg,
  OpenIndicator: a0
}, s0 = {
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
function i0(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let l0 = 0;
function u0() {
  return ++l0;
}
const c0 = {
  components: Pn({}, Il),
  directives: { appendToBody: s0 },
  mixins: [Hg, Wg, Kg],
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
          return e.hasOwnProperty("id") ? e.id : i0(e);
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
      default: () => u0()
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
}, d0 = ["dir"], f0 = ["id", "aria-expanded", "aria-owns"], p0 = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, m0 = ["disabled", "title", "aria-label", "onClick"], h0 = {
  ref: "actions",
  class: "vs__actions"
}, y0 = ["disabled"], g0 = { class: "vs__spinner" }, v0 = ["id"], b0 = ["id", "aria-selected", "onMouseover", "onClick"], w0 = {
  key: 0,
  class: "vs__no-options"
}, S0 = /* @__PURE__ */ fe(" Sorry, no matching options. "), x0 = ["id"];
function O0(e, t, n, r, o, a) {
  const s = Vp("append-to-body");
  return x(), P("div", {
    dir: n.dir,
    class: Z(["v-select", a.stateClasses])
  }, [
    j(e.$slots, "header", be(Pe(a.scope.header))),
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
      D("div", p0, [
        (x(!0), P(re, null, Ce(a.selectedValue, (i, c) => j(e.$slots, "selected-option-container", {
          option: a.normalizeOptionForSlot(i),
          deselect: a.deselect,
          multiple: n.multiple,
          disabled: n.disabled
        }, () => [
          (x(), P("span", {
            key: n.getOptionKey(i),
            class: "vs__selected"
          }, [
            j(e.$slots, "selected-option", be(Pe(a.normalizeOptionForSlot(i))), () => [
              fe(J(n.getOptionLabel(i)), 1)
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
              (x(), U(qr(a.childComponents.Deselect)))
            ], 8, m0)) : Y("", !0)
          ]))
        ])), 256)),
        j(e.$slots, "search", be(Pe(a.scope.search)), () => [
          D("input", ie({ class: "vs__search" }, a.scope.search.attributes, Cc(a.scope.search.events)), null, 16)
        ])
      ], 512),
      D("div", h0, [
        He(D("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...i) => a.clearSelection && a.clearSelection(...i))
        }, [
          (x(), U(qr(a.childComponents.Deselect)))
        ], 8, y0), [
          [ln, a.showClearButton]
        ]),
        j(e.$slots, "open-indicator", be(Pe(a.scope.openIndicator)), () => [
          n.noDrop ? Y("", !0) : (x(), U(qr(a.childComponents.OpenIndicator), be(ie({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        j(e.$slots, "spinner", be(Pe(a.scope.spinner)), () => [
          He(D("div", g0, "Loading...", 512), [
            [ln, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, f0),
    Q(un, { name: n.transition }, {
      default: M(() => [
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
          j(e.$slots, "list-header", be(Pe(a.scope.listHeader))),
          (x(!0), P(re, null, Ce(a.filteredOptions, (i, c) => (x(), P("li", {
            id: `vs${n.uid}__option-${c}`,
            key: n.getOptionKey(i),
            role: "option",
            class: Z(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": a.isOptionDeselectable(i) && c === e.typeAheadPointer,
              "vs__dropdown-option--selected": a.isOptionSelected(i),
              "vs__dropdown-option--highlight": c === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !n.selectable(i)
            }]),
            "aria-selected": c === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => n.selectable(i) ? e.typeAheadPointer = c : null,
            onClick: St((l) => n.selectable(i) ? a.select(i) : null, ["prevent", "stop"])
          }, [
            j(e.$slots, "option", be(Pe(a.normalizeOptionForSlot(i))), () => [
              fe(J(n.getOptionLabel(i)), 1)
            ])
          ], 42, b0))), 128)),
          a.filteredOptions.length === 0 ? (x(), P("li", w0, [
            j(e.$slots, "no-options", be(Pe(a.scope.noOptions)), () => [
              S0
            ])
          ])) : Y("", !0),
          j(e.$slots, "list-footer", be(Pe(a.scope.listFooter)))
        ], 40, v0)), [
          [s]
        ]) : (x(), P("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, x0))
      ]),
      _: 3
    }, 8, ["name"]),
    j(e.$slots, "footer", be(Pe(a.scope.footer)))
  ], 10, d0);
}
const A0 = /* @__PURE__ */ fi(c0, [["render", O0]]), bO = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return jn.add(di), (t, n) => (x(), U(b(A0), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, Dt = {
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
function C0(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const gd = {
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
      default: (e, t) => e.match(C0(t))
    }
  }
}, E0 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, P0 = {
  name: "ModelSelect",
  mixins: [gd],
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
      Dt.openOptions(this);
    },
    blurInput() {
      Dt.blurInput(this);
    },
    closeOptions() {
      Dt.closeOptions(this);
    },
    prevItem() {
      Dt.prevItem(this);
    },
    nextItem() {
      Dt.nextItem(this);
    },
    enterItem() {
      Dt.enterItem(this);
    },
    pointerSet(e) {
      Dt.pointerSet(this, e);
    },
    pointerAdjust() {
      Dt.pointerAdjust(this);
    },
    mousedownItem() {
      Dt.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, k0 = /* @__PURE__ */ D("i", { class: "dropdown icon" }, null, -1), $0 = ["disabled", "tabindex", "id", "name", "value"], D0 = ["data-vss-custom-attr"], T0 = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function F0(e, t, n, r, o, a) {
  return x(), P("div", {
    class: Z(["ui fluid search selection dropdown", { "active visible": o.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => a.openOptions && a.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => a.openOptions && a.openOptions(...s))
  }, [
    k0,
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
    }, null, 40, $0),
    D("div", {
      class: Z(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, J(a.inputText), 11, D0),
    D("div", {
      class: Z(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = St(() => {
      }, ["prevent"])),
      style: dt(a.menuStyle),
      tabindex: "-1"
    }, [
      (x(!0), P(re, null, Ce(a.filteredOptions, (s, i) => (x(), P("div", {
        key: i,
        class: Z(["item", { selected: s.selected || o.pointer === i, disabled: s.disabled }]),
        "data-vss-custom-attr": a.customAttrs[i] ? a.customAttrs[i] : "",
        onClick: St((c) => a.selectItem(s), ["stop"]),
        onMousedown: t[9] || (t[9] = (...c) => a.mousedownItem && a.mousedownItem(...c)),
        onMouseenter: (c) => a.pointerSet(i)
      }, [
        j(e.$slots, "default", {
          option: s,
          idx: i
        }, () => [
          fe(J(s.text), 1)
        ])
      ], 42, T0))), 128))
    ], 38)
  ], 34);
}
const _l = /* @__PURE__ */ E0(P0, [["render", F0]]), Ll = {
  name: "ModelListSelect",
  mixins: [gd],
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
}, R0 = {
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
      !e.noLabel && (e.label || e.field) ? (x(), U(b(qn), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : Y("", !0),
      e.noForm ? (x(), U(b(Ll), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (x(), P(re, { key: 2 }, [
        Q(b(Ll), {
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
        Q(b(en), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, I0 = /* @__PURE__ */ bo(R0, [["__scopeId", "data-v-c8f3c7c8"]]), wO = {
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
    var h;
    const r = e, o = n, a = _([]), s = _(1), i = _(!0), c = _(0), l = _(""), u = _(((h = r.form) == null ? void 0 : h[r.field]) || r.modelValue), d = _(u.value), g = _(null), y = (w) => {
      d.value = u.value, u.value = w, o("update:modelValue", w), o("changed", w), w || (m(""), g.value = null);
    }, m = (w) => {
      w == "" && u.value && u.value !== d.value || (s.value = 1, c.value = 0, l.value = w, p());
    }, p = async (w = !1) => {
      const O = new URLSearchParams();
      O.append("term", l.value), O.append("page", s.value), r.queryParams && Object.keys(r.queryParams).forEach((z) => {
        O.append(z, r.queryParams[z]);
      }), w && u.value && O.append("ajax_id", u.value);
      const $ = await (await fetch(`${r.url}?${O.toString()}`)).json();
      if (i.value = $.current_page < $.last_page, s.value === 1) {
        if (a.value = $.data, u.value) {
          const z = a.value.find((q) => q[r.optionValue] == u.value);
          g.value = z ? z[r.optionText] : null;
        }
        return;
      }
      a.value = a.value.concat($.data);
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
    }), t({ getCurrentOption: () => a.value.find((w) => w[r.optionValue] == u.value) }), (w, O) => (x(), U(b(I0), {
      id: e.id,
      label: e.label,
      list: a.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: g.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: u.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": O[0] || (O[0] = (E) => y(E)),
      onSearchchange: m,
      filterPredicate: (E, $) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
function _0(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function L0() {
}
function B0(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function M0(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function xs(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function ro(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const vd = "[object RegExp]", bd = "[object String]", wd = "[object Number]", Sd = "[object Boolean]", Os = "[object Arguments]", xd = "[object Symbol]", Od = "[object Date]", Ad = "[object Map]", Cd = "[object Set]", Ed = "[object Array]", N0 = "[object Function]", Pd = "[object ArrayBuffer]", Ur = "[object Object]", j0 = "[object Error]", kd = "[object DataView]", $d = "[object Uint8Array]", Dd = "[object Uint8ClampedArray]", Td = "[object Uint16Array]", Fd = "[object Uint32Array]", q0 = "[object BigUint64Array]", Rd = "[object Int8Array]", Id = "[object Int16Array]", _d = "[object Int32Array]", z0 = "[object BigInt64Array]", Ld = "[object Float32Array]", Bd = "[object Float64Array]";
function Tn(e, t, n, r = /* @__PURE__ */ new Map(), o = void 0) {
  const a = o == null ? void 0 : o(e, t, n, r);
  if (a != null)
    return a;
  if (B0(e))
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
  if (M0(e)) {
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
  if (typeof e == "object" && V0(e)) {
    const s = Object.create(Object.getPrototypeOf(e));
    return r.set(e, s), Xn(s, e, n, r, o), s;
  }
  return e;
}
function Xn(e, t, n = e, r, o) {
  const a = [...Object.keys(t), ...xs(t)];
  for (let s = 0; s < a.length; s++) {
    const i = a[s], c = Object.getOwnPropertyDescriptor(e, i);
    (c == null || c.writable) && (e[i] = Tn(t[i], i, n, r, o));
  }
}
function V0(e) {
  switch (ro(e)) {
    case Os:
    case Ed:
    case Pd:
    case kd:
    case Sd:
    case Od:
    case Ld:
    case Bd:
    case Rd:
    case Id:
    case _d:
    case Ad:
    case wd:
    case Ur:
    case vd:
    case Cd:
    case bd:
    case xd:
    case $d:
    case Dd:
    case Td:
    case Fd:
      return !0;
    default:
      return !1;
  }
}
function lt(e) {
  return Tn(e, void 0, e, /* @__PURE__ */ new Map(), void 0);
}
function oo(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype || Object.getPrototypeOf(t) === null ? Object.prototype.toString.call(e) === "[object Object]" : !1;
}
function tr(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r++) {
    const o = n[r], a = t[o], s = e[o];
    Array.isArray(a) ? Array.isArray(s) ? e[o] = tr(s, a) : e[o] = tr([], a) : oo(a) ? oo(s) ? e[o] = tr(s, a) : e[o] = tr({}, a) : (s === void 0 || a !== void 0) && (e[o] = a);
  }
  return e;
}
function Md(e, t) {
  return e === t || Number.isNaN(e) && Number.isNaN(t);
}
function U0(e, t, n) {
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
  let o = ro(e), a = ro(t);
  if (o === Os && (o = Ur), a === Os && (a = Ur), o !== a)
    return !1;
  switch (o) {
    case bd:
      return e.toString() === t.toString();
    case wd: {
      const c = e.valueOf(), l = t.valueOf();
      return Md(c, l);
    }
    case Sd:
    case Od:
    case xd:
      return Object.is(e.valueOf(), t.valueOf());
    case vd:
      return e.source === t.source && e.flags === t.flags;
    case N0:
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
          if (!t.has(c) || !nr(l, t.get(c), c, e, t, n, r))
            return !1;
        return !0;
      }
      case Cd: {
        if (e.size !== t.size)
          return !1;
        const c = Array.from(e.values()), l = Array.from(t.values());
        for (let u = 0; u < c.length; u++) {
          const d = c[u], g = l.findIndex((y) => nr(d, y, void 0, e, t, n, r));
          if (g === -1)
            return !1;
          l.splice(g, 1);
        }
        return !0;
      }
      case Ed:
      case $d:
      case Dd:
      case Td:
      case Fd:
      case q0:
      case Rd:
      case Id:
      case _d:
      case z0:
      case Ld:
      case Bd: {
        if (typeof Buffer < "u" && Buffer.isBuffer(e) !== Buffer.isBuffer(t) || e.length !== t.length)
          return !1;
        for (let c = 0; c < e.length; c++)
          if (!nr(e[c], t[c], c, e, t, n, r))
            return !1;
        return !0;
      }
      case Pd:
        return e.byteLength !== t.byteLength ? !1 : ir(new Uint8Array(e), new Uint8Array(t), n, r);
      case kd:
        return e.byteLength !== t.byteLength || e.byteOffset !== t.byteOffset ? !1 : ir(new Uint8Array(e), new Uint8Array(t), n, r);
      case j0:
        return e.name === t.name && e.message === t.message;
      case Ur: {
        if (!(ir(e.constructor, t.constructor, n, r) || oo(e) && oo(t)))
          return !1;
        const l = [...Object.keys(e), ...xs(e)], u = [...Object.keys(t), ...xs(t)];
        if (l.length !== u.length)
          return !1;
        for (let d = 0; d < l.length; d++) {
          const g = l[d], y = e[g];
          if (!Object.hasOwn(t, g))
            return !1;
          const m = t[g];
          if (!nr(y, m, g, e, t, n, r))
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
function H0(e, t) {
  return U0(e, t, L0);
}
var As = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function W0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function K0(e) {
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
var Jo, Bl;
function zn() {
  return Bl || (Bl = 1, Jo = TypeError), Jo;
}
const G0 = {}, Y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: G0
}, Symbol.toStringTag, { value: "Module" })), Cs = /* @__PURE__ */ K0(Y0);
var Qo, Ml;
function wo() {
  if (Ml) return Qo;
  Ml = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, i = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, u = typeof WeakSet == "function" && WeakSet.prototype, d = u ? WeakSet.prototype.has : null, g = typeof WeakRef == "function" && WeakRef.prototype, y = g ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, p = Object.prototype.toString, f = Function.prototype.toString, h = String.prototype.match, w = String.prototype.slice, O = String.prototype.replace, E = String.prototype.toUpperCase, $ = String.prototype.toLowerCase, z = RegExp.prototype.test, q = Array.prototype.concat, G = Array.prototype.join, R = Array.prototype.slice, k = Math.floor, N = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, v = Object.getOwnPropertySymbols, A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, C = typeof Symbol == "function" && typeof Symbol.iterator == "object", S = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === C || !0) ? Symbol.toStringTag : null, W = Object.prototype.propertyIsEnumerable, I = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(F) {
    return F.__proto__;
  } : null);
  function T(F, L) {
    if (F === 1 / 0 || F === -1 / 0 || F !== F || F && F > -1e3 && F < 1e3 || z.call(/e/, L))
      return L;
    var ce = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof F == "number") {
      var he = F < 0 ? -k(-F) : k(F);
      if (he !== F) {
        var ye = String(he), se = w.call(L, ye.length + 1);
        return O.call(ye, ce, "$&_") + "." + O.call(O.call(se, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return O.call(L, ce, "$&_");
  }
  var X = Cs, ae = X.custom, Fe = Ie(ae) ? ae : null, Ye = {
    __proto__: null,
    double: '"',
    single: "'"
  }, $e = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Qo = function F(L, ce, he, ye) {
    var se = ce || {};
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
    var Mo = typeof se.depth > "u" ? 5 : se.depth;
    if (typeof he > "u" && (he = 0), he >= Mo && Mo > 0 && typeof L == "object")
      return vt(L) ? "[Array]" : "[Object]";
    var An = jp(se, he);
    if (typeof ye > "u")
      ye = [];
    else if (zt(ye, L) >= 0)
      return "[Circular]";
    function it(Cn, Dr, zp) {
      if (Dr && (ye = R.call(ye), ye.push(Dr)), zp) {
        var Ji = {
          depth: se.depth
        };
        return ze(se, "quoteStyle") && (Ji.quoteStyle = se.quoteStyle), F(Cn, Ji, he + 1, ye);
      }
      return F(Cn, se, he + 1, ye);
    }
    if (typeof L == "function" && !Ee(L)) {
      var Ui = wn(L), Hi = kr(L, it);
      return "[Function" + (Ui ? ": " + Ui : " (anonymous)") + "]" + (Hi.length > 0 ? " { " + G.call(Hi, ", ") + " }" : "");
    }
    if (Ie(L)) {
      var Wi = C ? O.call(String(L), /^(Symbol\(.*\))_[^)]*$/, "$1") : A.call(L);
      return typeof L == "object" && !C ? Gn(Wi) : Wi;
    }
    if (Bp(L)) {
      for (var Yn = "<" + $.call(String(L.nodeName)), No = L.attributes || [], $r = 0; $r < No.length; $r++)
        Yn += " " + No[$r].name + "=" + Me(Re(No[$r].value), "double", se);
      return Yn += ">", L.childNodes && L.childNodes.length && (Yn += "..."), Yn += "</" + $.call(String(L.nodeName)) + ">", Yn;
    }
    if (vt(L)) {
      if (L.length === 0)
        return "[]";
      var jo = kr(L, it);
      return An && !Np(jo) ? "[" + Bo(jo, An) + "]" : "[ " + G.call(jo, ", ") + " ]";
    }
    if (ue(L)) {
      var qo = kr(L, it);
      return !("cause" in Error.prototype) && "cause" in L && !W.call(L, "cause") ? "{ [" + String(L) + "] " + G.call(q.call("[cause]: " + it(L.cause), qo), ", ") + " }" : qo.length === 0 ? "[" + String(L) + "]" : "{ [" + String(L) + "] " + G.call(qo, ", ") + " }";
    }
    if (typeof L == "object" && Vt) {
      if (Fe && typeof L[Fe] == "function" && X)
        return X(L, { depth: Mo - he });
      if (Vt !== "symbol" && typeof L.inspect == "function")
        return L.inspect();
    }
    if (st(L)) {
      var Ki = [];
      return r && r.call(L, function(Cn, Dr) {
        Ki.push(it(Dr, L, !0) + " => " + it(Cn, L));
      }), Vi("Map", n.call(L), Ki, An);
    }
    if (On(L)) {
      var Gi = [];
      return i && i.call(L, function(Cn) {
        Gi.push(it(Cn, L));
      }), Vi("Set", s.call(L), Gi, An);
    }
    if (Sn(L))
      return Lo("WeakMap");
    if (Lp(L))
      return Lo("WeakSet");
    if (xn(L))
      return Lo("WeakRef");
    if (me(L))
      return Gn(it(Number(L)));
    if (nt(L))
      return Gn(it(N.call(L)));
    if (Oe(L))
      return Gn(m.call(L));
    if (ve(L))
      return Gn(it(String(L)));
    if (typeof window < "u" && L === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && L === globalThis || typeof As < "u" && L === As)
      return "{ [object globalThis] }";
    if (!bt(L) && !Ee(L)) {
      var zo = kr(L, it), Yi = I ? I(L) === Object.prototype : L instanceof Object || L.constructor === Object, Vo = L instanceof Object ? "" : "null prototype", Xi = !Yi && S && Object(L) === L && S in L ? w.call(rt(L), 8, -1) : Vo ? "Object" : "", qp = Yi || typeof L.constructor != "function" ? "" : L.constructor.name ? L.constructor.name + " " : "", Uo = qp + (Xi || Vo ? "[" + G.call(q.call([], Xi || [], Vo || []), ": ") + "] " : "");
      return zo.length === 0 ? Uo + "{}" : An ? Uo + "{" + Bo(zo, An) + "}" : Uo + "{ " + G.call(zo, ", ") + " }";
    }
    return String(L);
  };
  function Me(F, L, ce) {
    var he = ce.quoteStyle || L, ye = Ye[he];
    return ye + F + ye;
  }
  function Re(F) {
    return O.call(String(F), /"/g, "&quot;");
  }
  function Ne(F) {
    return !S || !(typeof F == "object" && (S in F || typeof F[S] < "u"));
  }
  function vt(F) {
    return rt(F) === "[object Array]" && Ne(F);
  }
  function bt(F) {
    return rt(F) === "[object Date]" && Ne(F);
  }
  function Ee(F) {
    return rt(F) === "[object RegExp]" && Ne(F);
  }
  function ue(F) {
    return rt(F) === "[object Error]" && Ne(F);
  }
  function ve(F) {
    return rt(F) === "[object String]" && Ne(F);
  }
  function me(F) {
    return rt(F) === "[object Number]" && Ne(F);
  }
  function Oe(F) {
    return rt(F) === "[object Boolean]" && Ne(F);
  }
  function Ie(F) {
    if (C)
      return F && typeof F == "object" && F instanceof Symbol;
    if (typeof F == "symbol")
      return !0;
    if (!F || typeof F != "object" || !A)
      return !1;
    try {
      return A.call(F), !0;
    } catch {
    }
    return !1;
  }
  function nt(F) {
    if (!F || typeof F != "object" || !N)
      return !1;
    try {
      return N.call(F), !0;
    } catch {
    }
    return !1;
  }
  var _e = Object.prototype.hasOwnProperty || function(F) {
    return F in this;
  };
  function ze(F, L) {
    return _e.call(F, L);
  }
  function rt(F) {
    return p.call(F);
  }
  function wn(F) {
    if (F.name)
      return F.name;
    var L = h.call(f.call(F), /^function\s*([\w$]+)/);
    return L ? L[1] : null;
  }
  function zt(F, L) {
    if (F.indexOf)
      return F.indexOf(L);
    for (var ce = 0, he = F.length; ce < he; ce++)
      if (F[ce] === L)
        return ce;
    return -1;
  }
  function st(F) {
    if (!n || !F || typeof F != "object")
      return !1;
    try {
      n.call(F);
      try {
        s.call(F);
      } catch {
        return !0;
      }
      return F instanceof Map;
    } catch {
    }
    return !1;
  }
  function Sn(F) {
    if (!l || !F || typeof F != "object")
      return !1;
    try {
      l.call(F, l);
      try {
        d.call(F, d);
      } catch {
        return !0;
      }
      return F instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function xn(F) {
    if (!y || !F || typeof F != "object")
      return !1;
    try {
      return y.call(F), !0;
    } catch {
    }
    return !1;
  }
  function On(F) {
    if (!s || !F || typeof F != "object")
      return !1;
    try {
      s.call(F);
      try {
        n.call(F);
      } catch {
        return !0;
      }
      return F instanceof Set;
    } catch {
    }
    return !1;
  }
  function Lp(F) {
    if (!d || !F || typeof F != "object")
      return !1;
    try {
      d.call(F, d);
      try {
        l.call(F, l);
      } catch {
        return !0;
      }
      return F instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Bp(F) {
    return !F || typeof F != "object" ? !1 : typeof HTMLElement < "u" && F instanceof HTMLElement ? !0 : typeof F.nodeName == "string" && typeof F.getAttribute == "function";
  }
  function zi(F, L) {
    if (F.length > L.maxStringLength) {
      var ce = F.length - L.maxStringLength, he = "... " + ce + " more character" + (ce > 1 ? "s" : "");
      return zi(w.call(F, 0, L.maxStringLength), L) + he;
    }
    var ye = $e[L.quoteStyle || "single"];
    ye.lastIndex = 0;
    var se = O.call(O.call(F, ye, "\\$1"), /[\x00-\x1f]/g, Mp);
    return Me(se, "single", L);
  }
  function Mp(F) {
    var L = F.charCodeAt(0), ce = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[L];
    return ce ? "\\" + ce : "\\x" + (L < 16 ? "0" : "") + E.call(L.toString(16));
  }
  function Gn(F) {
    return "Object(" + F + ")";
  }
  function Lo(F) {
    return F + " { ? }";
  }
  function Vi(F, L, ce, he) {
    var ye = he ? Bo(ce, he) : G.call(ce, ", ");
    return F + " (" + L + ") {" + ye + "}";
  }
  function Np(F) {
    for (var L = 0; L < F.length; L++)
      if (zt(F[L], `
`) >= 0)
        return !1;
    return !0;
  }
  function jp(F, L) {
    var ce;
    if (F.indent === "	")
      ce = "	";
    else if (typeof F.indent == "number" && F.indent > 0)
      ce = G.call(Array(F.indent + 1), " ");
    else
      return null;
    return {
      base: ce,
      prev: G.call(Array(L + 1), ce)
    };
  }
  function Bo(F, L) {
    if (F.length === 0)
      return "";
    var ce = `
` + L.prev + L.base;
    return ce + G.call(F, "," + ce) + `
` + L.prev;
  }
  function kr(F, L) {
    var ce = vt(F), he = [];
    if (ce) {
      he.length = F.length;
      for (var ye = 0; ye < F.length; ye++)
        he[ye] = ze(F, ye) ? L(F[ye], F) : "";
    }
    var se = typeof v == "function" ? v(F) : [], Vt;
    if (C) {
      Vt = {};
      for (var tn = 0; tn < se.length; tn++)
        Vt["$" + se[tn]] = se[tn];
    }
    for (var Xe in F)
      ze(F, Xe) && (ce && String(Number(Xe)) === Xe && Xe < F.length || C && Vt["$" + Xe] instanceof Symbol || (z.call(/[^\w$]/, Xe) ? he.push(L(Xe, F) + ": " + L(F[Xe], F)) : he.push(Xe + ": " + L(F[Xe], F))));
    if (typeof v == "function")
      for (var Ut = 0; Ut < se.length; Ut++)
        W.call(F, se[Ut]) && he.push("[" + L(se[Ut]) + "]: " + L(F[se[Ut]], F));
    return he;
  }
  return Qo;
}
var Zo, Nl;
function X0() {
  if (Nl) return Zo;
  Nl = 1;
  var e = /* @__PURE__ */ wo(), t = /* @__PURE__ */ zn(), n = function(i, c, l) {
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
  return Zo = function() {
    var c, l = {
      assert: function(u) {
        if (!l.has(u))
          throw new t("Side channel does not contain " + e(u));
      },
      delete: function(u) {
        var d = c && c.next, g = s(c, u);
        return g && d && d === g && (c = void 0), !!g;
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
  }, Zo;
}
var ea, jl;
function Nd() {
  return jl || (jl = 1, ea = Object), ea;
}
var ta, ql;
function J0() {
  return ql || (ql = 1, ta = Error), ta;
}
var na, zl;
function Q0() {
  return zl || (zl = 1, na = EvalError), na;
}
var ra, Vl;
function Z0() {
  return Vl || (Vl = 1, ra = RangeError), ra;
}
var oa, Ul;
function ev() {
  return Ul || (Ul = 1, oa = ReferenceError), oa;
}
var aa, Hl;
function tv() {
  return Hl || (Hl = 1, aa = SyntaxError), aa;
}
var sa, Wl;
function nv() {
  return Wl || (Wl = 1, sa = URIError), sa;
}
var ia, Kl;
function rv() {
  return Kl || (Kl = 1, ia = Math.abs), ia;
}
var la, Gl;
function ov() {
  return Gl || (Gl = 1, la = Math.floor), la;
}
var ua, Yl;
function av() {
  return Yl || (Yl = 1, ua = Math.max), ua;
}
var ca, Xl;
function sv() {
  return Xl || (Xl = 1, ca = Math.min), ca;
}
var da, Jl;
function iv() {
  return Jl || (Jl = 1, da = Math.pow), da;
}
var fa, Ql;
function lv() {
  return Ql || (Ql = 1, fa = Math.round), fa;
}
var pa, Zl;
function uv() {
  return Zl || (Zl = 1, pa = Number.isNaN || function(t) {
    return t !== t;
  }), pa;
}
var ma, eu;
function cv() {
  if (eu) return ma;
  eu = 1;
  var e = /* @__PURE__ */ uv();
  return ma = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, ma;
}
var ha, tu;
function dv() {
  return tu || (tu = 1, ha = Object.getOwnPropertyDescriptor), ha;
}
var ya, nu;
function jd() {
  if (nu) return ya;
  nu = 1;
  var e = /* @__PURE__ */ dv();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ya = e, ya;
}
var ga, ru;
function fv() {
  if (ru) return ga;
  ru = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ga = e, ga;
}
var va, ou;
function pv() {
  return ou || (ou = 1, va = function() {
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
  }), va;
}
var ba, au;
function mv() {
  if (au) return ba;
  au = 1;
  var e = typeof Symbol < "u" && Symbol, t = pv();
  return ba = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, ba;
}
var wa, su;
function qd() {
  return su || (su = 1, wa = typeof Reflect < "u" && Reflect.getPrototypeOf || null), wa;
}
var Sa, iu;
function zd() {
  if (iu) return Sa;
  iu = 1;
  var e = /* @__PURE__ */ Nd();
  return Sa = e.getPrototypeOf || null, Sa;
}
var xa, lu;
function hv() {
  if (lu) return xa;
  lu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, n = Math.max, r = "[object Function]", o = function(c, l) {
    for (var u = [], d = 0; d < c.length; d += 1)
      u[d] = c[d];
    for (var g = 0; g < l.length; g += 1)
      u[g + c.length] = l[g];
    return u;
  }, a = function(c, l) {
    for (var u = [], d = l, g = 0; d < c.length; d += 1, g += 1)
      u[g] = c[d];
    return u;
  }, s = function(i, c) {
    for (var l = "", u = 0; u < i.length; u += 1)
      l += i[u], u + 1 < i.length && (l += c);
    return l;
  };
  return xa = function(c) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== r)
      throw new TypeError(e + l);
    for (var u = a(arguments, 1), d, g = function() {
      if (this instanceof d) {
        var h = l.apply(
          this,
          o(u, arguments)
        );
        return Object(h) === h ? h : this;
      }
      return l.apply(
        c,
        o(u, arguments)
      );
    }, y = n(0, l.length - u.length), m = [], p = 0; p < y; p++)
      m[p] = "$" + p;
    if (d = Function("binder", "return function (" + s(m, ",") + "){ return binder.apply(this,arguments); }")(g), l.prototype) {
      var f = function() {
      };
      f.prototype = l.prototype, d.prototype = new f(), f.prototype = null;
    }
    return d;
  }, xa;
}
var Oa, uu;
function So() {
  if (uu) return Oa;
  uu = 1;
  var e = hv();
  return Oa = Function.prototype.bind || e, Oa;
}
var Aa, cu;
function pi() {
  return cu || (cu = 1, Aa = Function.prototype.call), Aa;
}
var Ca, du;
function Vd() {
  return du || (du = 1, Ca = Function.prototype.apply), Ca;
}
var Ea, fu;
function yv() {
  return fu || (fu = 1, Ea = typeof Reflect < "u" && Reflect && Reflect.apply), Ea;
}
var Pa, pu;
function gv() {
  if (pu) return Pa;
  pu = 1;
  var e = So(), t = Vd(), n = pi(), r = yv();
  return Pa = r || e.call(n, t), Pa;
}
var ka, mu;
function Ud() {
  if (mu) return ka;
  mu = 1;
  var e = So(), t = /* @__PURE__ */ zn(), n = pi(), r = gv();
  return ka = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, ka;
}
var $a, hu;
function vv() {
  if (hu) return $a;
  hu = 1;
  var e = Ud(), t = /* @__PURE__ */ jd(), n;
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
  return $a = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(i) {
      return a(i == null ? i : o(i));
    }
  ) : !1, $a;
}
var Da, yu;
function bv() {
  if (yu) return Da;
  yu = 1;
  var e = qd(), t = zd(), n = /* @__PURE__ */ vv();
  return Da = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, Da;
}
var Ta, gu;
function wv() {
  if (gu) return Ta;
  gu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = So();
  return Ta = n.call(e, t), Ta;
}
var Fa, vu;
function mi() {
  if (vu) return Fa;
  vu = 1;
  var e, t = /* @__PURE__ */ Nd(), n = /* @__PURE__ */ J0(), r = /* @__PURE__ */ Q0(), o = /* @__PURE__ */ Z0(), a = /* @__PURE__ */ ev(), s = /* @__PURE__ */ tv(), i = /* @__PURE__ */ zn(), c = /* @__PURE__ */ nv(), l = /* @__PURE__ */ rv(), u = /* @__PURE__ */ ov(), d = /* @__PURE__ */ av(), g = /* @__PURE__ */ sv(), y = /* @__PURE__ */ iv(), m = /* @__PURE__ */ lv(), p = /* @__PURE__ */ cv(), f = Function, h = function(Ee) {
    try {
      return f('"use strict"; return (' + Ee + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ jd(), O = /* @__PURE__ */ fv(), E = function() {
    throw new i();
  }, $ = w ? function() {
    try {
      return arguments.callee, E;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return E;
      }
    }
  }() : E, z = mv()(), q = bv(), G = zd(), R = qd(), k = Vd(), N = pi(), v = {}, A = typeof Uint8Array > "u" || !q ? e : q(Uint8Array), C = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": z && q ? q([][Symbol.iterator]()) : e,
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
    "%IteratorPrototype%": z && q ? q(q([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !z || !q ? e : q((/* @__PURE__ */ new Map())[Symbol.iterator]()),
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
    "%SetIteratorPrototype%": typeof Set > "u" || !z || !q ? e : q((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": z && q ? q(""[Symbol.iterator]()) : e,
    "%Symbol%": z ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": $,
    "%TypedArray%": A,
    "%TypeError%": i,
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
    "%Object.defineProperty%": O,
    "%Object.getPrototypeOf%": G,
    "%Math.abs%": l,
    "%Math.floor%": u,
    "%Math.max%": d,
    "%Math.min%": g,
    "%Math.pow%": y,
    "%Math.round%": m,
    "%Math.sign%": p,
    "%Reflect.getPrototypeOf%": R
  };
  if (q)
    try {
      null.error;
    } catch (Ee) {
      var S = q(q(Ee));
      C["%Error.prototype%"] = S;
    }
  var W = function Ee(ue) {
    var ve;
    if (ue === "%AsyncFunction%")
      ve = h("async function () {}");
    else if (ue === "%GeneratorFunction%")
      ve = h("function* () {}");
    else if (ue === "%AsyncGeneratorFunction%")
      ve = h("async function* () {}");
    else if (ue === "%AsyncGenerator%") {
      var me = Ee("%AsyncGeneratorFunction%");
      me && (ve = me.prototype);
    } else if (ue === "%AsyncIteratorPrototype%") {
      var Oe = Ee("%AsyncGenerator%");
      Oe && q && (ve = q(Oe.prototype));
    }
    return C[ue] = ve, ve;
  }, I = {
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
  }, T = So(), X = /* @__PURE__ */ wv(), ae = T.call(N, Array.prototype.concat), Fe = T.call(k, Array.prototype.splice), Ye = T.call(N, String.prototype.replace), $e = T.call(N, String.prototype.slice), Me = T.call(N, RegExp.prototype.exec), Re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, vt = function(ue) {
    var ve = $e(ue, 0, 1), me = $e(ue, -1);
    if (ve === "%" && me !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (me === "%" && ve !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var Oe = [];
    return Ye(ue, Re, function(Ie, nt, _e, ze) {
      Oe[Oe.length] = _e ? Ye(ze, Ne, "$1") : nt || Ie;
    }), Oe;
  }, bt = function(ue, ve) {
    var me = ue, Oe;
    if (X(I, me) && (Oe = I[me], me = "%" + Oe[0] + "%"), X(C, me)) {
      var Ie = C[me];
      if (Ie === v && (Ie = W(me)), typeof Ie > "u" && !ve)
        throw new i("intrinsic " + ue + " exists, but is not available. Please file an issue!");
      return {
        alias: Oe,
        name: me,
        value: Ie
      };
    }
    throw new s("intrinsic " + ue + " does not exist!");
  };
  return Fa = function(ue, ve) {
    if (typeof ue != "string" || ue.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ve != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (Me(/^%?[^%]*%?$/, ue) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var me = vt(ue), Oe = me.length > 0 ? me[0] : "", Ie = bt("%" + Oe + "%", ve), nt = Ie.name, _e = Ie.value, ze = !1, rt = Ie.alias;
    rt && (Oe = rt[0], Fe(me, ae([0, 1], rt)));
    for (var wn = 1, zt = !0; wn < me.length; wn += 1) {
      var st = me[wn], Sn = $e(st, 0, 1), xn = $e(st, -1);
      if ((Sn === '"' || Sn === "'" || Sn === "`" || xn === '"' || xn === "'" || xn === "`") && Sn !== xn)
        throw new s("property names with quotes must have matching quotes");
      if ((st === "constructor" || !zt) && (ze = !0), Oe += "." + st, nt = "%" + Oe + "%", X(C, nt))
        _e = C[nt];
      else if (_e != null) {
        if (!(st in _e)) {
          if (!ve)
            throw new i("base intrinsic for " + ue + " exists, but the property is not available.");
          return;
        }
        if (w && wn + 1 >= me.length) {
          var On = w(_e, st);
          zt = !!On, zt && "get" in On && !("originalValue" in On.get) ? _e = On.get : _e = _e[st];
        } else
          zt = X(_e, st), _e = _e[st];
        zt && !ze && (C[nt] = _e);
      }
    }
    return _e;
  }, Fa;
}
var Ra, bu;
function Hd() {
  if (bu) return Ra;
  bu = 1;
  var e = /* @__PURE__ */ mi(), t = Ud(), n = t([e("%String.prototype.indexOf%")]);
  return Ra = function(o, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof s == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Ra;
}
var Ia, wu;
function Wd() {
  if (wu) return Ia;
  wu = 1;
  var e = /* @__PURE__ */ mi(), t = /* @__PURE__ */ Hd(), n = /* @__PURE__ */ wo(), r = /* @__PURE__ */ zn(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), i = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Ia = !!o && /** @type {Exclude<import('.'), false>} */
  function() {
    var d, g = {
      assert: function(y) {
        if (!g.has(y))
          throw new r("Side channel does not contain " + n(y));
      },
      delete: function(y) {
        if (d) {
          var m = c(d, y);
          return l(d) === 0 && (d = void 0), m;
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
      set: function(y, m) {
        d || (d = new o()), s(d, y, m);
      }
    };
    return g;
  }, Ia;
}
var _a, Su;
function Sv() {
  if (Su) return _a;
  Su = 1;
  var e = /* @__PURE__ */ mi(), t = /* @__PURE__ */ Hd(), n = /* @__PURE__ */ wo(), r = Wd(), o = /* @__PURE__ */ zn(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), i = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return _a = a ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var d, g, y = {
        assert: function(m) {
          if (!y.has(m))
            throw new o("Side channel does not contain " + n(m));
        },
        delete: function(m) {
          if (a && m && (typeof m == "object" || typeof m == "function")) {
            if (d)
              return l(d, m);
          } else if (r && g)
            return g.delete(m);
          return !1;
        },
        get: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && d ? s(d, m) : g && g.get(m);
        },
        has: function(m) {
          return a && m && (typeof m == "object" || typeof m == "function") && d ? c(d, m) : !!g && g.has(m);
        },
        set: function(m, p) {
          a && m && (typeof m == "object" || typeof m == "function") ? (d || (d = new a()), i(d, m, p)) : r && (g || (g = r()), g.set(m, p));
        }
      };
      return y;
    }
  ) : r, _a;
}
var La, xu;
function xv() {
  if (xu) return La;
  xu = 1;
  var e = /* @__PURE__ */ zn(), t = /* @__PURE__ */ wo(), n = X0(), r = Wd(), o = Sv(), a = o || r || n;
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
var Ba, Ou;
function hi() {
  if (Ou) return Ba;
  Ou = 1;
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
var Ma, Au;
function Kd() {
  if (Au) return Ma;
  Au = 1;
  var e = /* @__PURE__ */ hi(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var f = [], h = 0; h < 256; ++h)
      f.push("%" + ((h < 16 ? "0" : "") + h.toString(16)).toUpperCase());
    return f;
  }(), o = function(h) {
    for (; h.length > 1; ) {
      var w = h.pop(), O = w.obj[w.prop];
      if (n(O)) {
        for (var E = [], $ = 0; $ < O.length; ++$)
          typeof O[$] < "u" && E.push(O[$]);
        w.obj[w.prop] = E;
      }
    }
  }, a = function(h, w) {
    for (var O = w && w.plainObjects ? { __proto__: null } : {}, E = 0; E < h.length; ++E)
      typeof h[E] < "u" && (O[E] = h[E]);
    return O;
  }, s = function f(h, w, O) {
    if (!w)
      return h;
    if (typeof w != "object" && typeof w != "function") {
      if (n(h))
        h.push(w);
      else if (h && typeof h == "object")
        (O && (O.plainObjects || O.allowPrototypes) || !t.call(Object.prototype, w)) && (h[w] = !0);
      else
        return [h, w];
      return h;
    }
    if (!h || typeof h != "object")
      return [h].concat(w);
    var E = h;
    return n(h) && !n(w) && (E = a(h, O)), n(h) && n(w) ? (w.forEach(function($, z) {
      if (t.call(h, z)) {
        var q = h[z];
        q && typeof q == "object" && $ && typeof $ == "object" ? h[z] = f(q, $, O) : h.push($);
      } else
        h[z] = $;
    }), h) : Object.keys(w).reduce(function($, z) {
      var q = w[z];
      return t.call($, z) ? $[z] = f($[z], q, O) : $[z] = q, $;
    }, E);
  }, i = function(h, w) {
    return Object.keys(w).reduce(function(O, E) {
      return O[E] = w[E], O;
    }, h);
  }, c = function(f, h, w) {
    var O = f.replace(/\+/g, " ");
    if (w === "iso-8859-1")
      return O.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(O);
    } catch {
      return O;
    }
  }, l = 1024, u = function(h, w, O, E, $) {
    if (h.length === 0)
      return h;
    var z = h;
    if (typeof h == "symbol" ? z = Symbol.prototype.toString.call(h) : typeof h != "string" && (z = String(h)), O === "iso-8859-1")
      return escape(z).replace(/%u[0-9a-f]{4}/gi, function(A) {
        return "%26%23" + parseInt(A.slice(2), 16) + "%3B";
      });
    for (var q = "", G = 0; G < z.length; G += l) {
      for (var R = z.length >= l ? z.slice(G, G + l) : z, k = [], N = 0; N < R.length; ++N) {
        var v = R.charCodeAt(N);
        if (v === 45 || v === 46 || v === 95 || v === 126 || v >= 48 && v <= 57 || v >= 65 && v <= 90 || v >= 97 && v <= 122 || $ === e.RFC1738 && (v === 40 || v === 41)) {
          k[k.length] = R.charAt(N);
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
        N += 1, v = 65536 + ((v & 1023) << 10 | R.charCodeAt(N) & 1023), k[k.length] = r[240 | v >> 18] + r[128 | v >> 12 & 63] + r[128 | v >> 6 & 63] + r[128 | v & 63];
      }
      q += k.join("");
    }
    return q;
  }, d = function(h) {
    for (var w = [{ obj: { o: h }, prop: "o" }], O = [], E = 0; E < w.length; ++E)
      for (var $ = w[E], z = $.obj[$.prop], q = Object.keys(z), G = 0; G < q.length; ++G) {
        var R = q[G], k = z[R];
        typeof k == "object" && k !== null && O.indexOf(k) === -1 && (w.push({ obj: z, prop: R }), O.push(k));
      }
    return o(w), h;
  }, g = function(h) {
    return Object.prototype.toString.call(h) === "[object RegExp]";
  }, y = function(h) {
    return !h || typeof h != "object" ? !1 : !!(h.constructor && h.constructor.isBuffer && h.constructor.isBuffer(h));
  }, m = function(h, w) {
    return [].concat(h, w);
  }, p = function(h, w) {
    if (n(h)) {
      for (var O = [], E = 0; E < h.length; E += 1)
        O.push(w(h[E]));
      return O;
    }
    return w(h);
  };
  return Ma = {
    arrayToObject: a,
    assign: i,
    combine: m,
    compact: d,
    decode: c,
    encode: u,
    isBuffer: y,
    isRegExp: g,
    maybeMap: p,
    merge: s
  }, Ma;
}
var Na, Cu;
function Ov() {
  if (Cu) return Na;
  Cu = 1;
  var e = xv(), t = /* @__PURE__ */ Kd(), n = /* @__PURE__ */ hi(), r = Object.prototype.hasOwnProperty, o = {
    brackets: function(f) {
      return f + "[]";
    },
    comma: "comma",
    indices: function(f, h) {
      return f + "[" + h + "]";
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
  }, g = {}, y = function p(f, h, w, O, E, $, z, q, G, R, k, N, v, A, C, S, W, I) {
    for (var T = f, X = I, ae = 0, Fe = !1; (X = X.get(g)) !== void 0 && !Fe; ) {
      var Ye = X.get(f);
      if (ae += 1, typeof Ye < "u") {
        if (Ye === ae)
          throw new RangeError("Cyclic object value");
        Fe = !0;
      }
      typeof X.get(g) > "u" && (ae = 0);
    }
    if (typeof R == "function" ? T = R(h, T) : T instanceof Date ? T = v(T) : w === "comma" && a(T) && (T = t.maybeMap(T, function(nt) {
      return nt instanceof Date ? v(nt) : nt;
    })), T === null) {
      if ($)
        return G && !S ? G(h, u.encoder, W, "key", A) : h;
      T = "";
    }
    if (d(T) || t.isBuffer(T)) {
      if (G) {
        var $e = S ? h : G(h, u.encoder, W, "key", A);
        return [C($e) + "=" + C(G(T, u.encoder, W, "value", A))];
      }
      return [C(h) + "=" + C(String(T))];
    }
    var Me = [];
    if (typeof T > "u")
      return Me;
    var Re;
    if (w === "comma" && a(T))
      S && G && (T = t.maybeMap(T, G)), Re = [{ value: T.length > 0 ? T.join(",") || null : void 0 }];
    else if (a(R))
      Re = R;
    else {
      var Ne = Object.keys(T);
      Re = k ? Ne.sort(k) : Ne;
    }
    var vt = q ? String(h).replace(/\./g, "%2E") : String(h), bt = O && a(T) && T.length === 1 ? vt + "[]" : vt;
    if (E && a(T) && T.length === 0)
      return bt + "[]";
    for (var Ee = 0; Ee < Re.length; ++Ee) {
      var ue = Re[Ee], ve = typeof ue == "object" && ue && typeof ue.value < "u" ? ue.value : T[ue];
      if (!(z && ve === null)) {
        var me = N && q ? String(ue).replace(/\./g, "%2E") : String(ue), Oe = a(T) ? typeof w == "function" ? w(bt, me) : bt : bt + (N ? "." + me : "[" + me + "]");
        I.set(f, ae);
        var Ie = e();
        Ie.set(g, I), i(Me, p(
          ve,
          Oe,
          w,
          O,
          E,
          $,
          z,
          q,
          w === "comma" && S && a(T) ? null : G,
          R,
          k,
          N,
          v,
          A,
          C,
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
    var h = f.charset || u.charset;
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
    var $;
    if (f.arrayFormat in o ? $ = f.arrayFormat : "indices" in f ? $ = f.indices ? "indices" : "repeat" : $ = u.arrayFormat, "commaRoundTrip" in f && typeof f.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var z = typeof f.allowDots > "u" ? f.encodeDotInKeys === !0 ? !0 : u.allowDots : !!f.allowDots;
    return {
      addQueryPrefix: typeof f.addQueryPrefix == "boolean" ? f.addQueryPrefix : u.addQueryPrefix,
      allowDots: z,
      allowEmptyArrays: typeof f.allowEmptyArrays == "boolean" ? !!f.allowEmptyArrays : u.allowEmptyArrays,
      arrayFormat: $,
      charset: h,
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
  return Na = function(p, f) {
    var h = p, w = m(f), O, E;
    typeof w.filter == "function" ? (E = w.filter, h = E("", h)) : a(w.filter) && (E = w.filter, O = E);
    var $ = [];
    if (typeof h != "object" || h === null)
      return "";
    var z = o[w.arrayFormat], q = z === "comma" && w.commaRoundTrip;
    O || (O = Object.keys(h)), w.sort && O.sort(w.sort);
    for (var G = e(), R = 0; R < O.length; ++R) {
      var k = O[R], N = h[k];
      w.skipNulls && N === null || i($, y(
        N,
        k,
        z,
        q,
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
    var v = $.join(w.delimiter), A = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? A += "utf8=%26%2310003%3B&" : A += "utf8=%E2%9C%93&"), v.length > 0 ? A + v : "";
  }, Na;
}
var ja, Eu;
function Av() {
  if (Eu) return ja;
  Eu = 1;
  var e = /* @__PURE__ */ Kd(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = {
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
  }, o = function(g) {
    return g.replace(/&#(\d+);/g, function(y, m) {
      return String.fromCharCode(parseInt(m, 10));
    });
  }, a = function(g, y, m) {
    if (g && typeof g == "string" && y.comma && g.indexOf(",") > -1)
      return g.split(",");
    if (y.throwOnLimitExceeded && m >= y.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + y.arrayLimit + " element" + (y.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return g;
  }, s = "utf8=%26%2310003%3B", i = "utf8=%E2%9C%93", c = function(y, m) {
    var p = { __proto__: null }, f = m.ignoreQueryPrefix ? y.replace(/^\?/, "") : y;
    f = f.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var h = m.parameterLimit === 1 / 0 ? void 0 : m.parameterLimit, w = f.split(
      m.delimiter,
      m.throwOnLimitExceeded ? h + 1 : h
    );
    if (m.throwOnLimitExceeded && w.length > h)
      throw new RangeError("Parameter limit exceeded. Only " + h + " parameter" + (h === 1 ? "" : "s") + " allowed.");
    var O = -1, E, $ = m.charset;
    if (m.charsetSentinel)
      for (E = 0; E < w.length; ++E)
        w[E].indexOf("utf8=") === 0 && (w[E] === i ? $ = "utf-8" : w[E] === s && ($ = "iso-8859-1"), O = E, E = w.length);
    for (E = 0; E < w.length; ++E)
      if (E !== O) {
        var z = w[E], q = z.indexOf("]="), G = q === -1 ? z.indexOf("=") : q + 1, R, k;
        G === -1 ? (R = m.decoder(z, r.decoder, $, "key"), k = m.strictNullHandling ? null : "") : (R = m.decoder(z.slice(0, G), r.decoder, $, "key"), k = e.maybeMap(
          a(
            z.slice(G + 1),
            m,
            n(p[R]) ? p[R].length : 0
          ),
          function(v) {
            return m.decoder(v, r.decoder, $, "value");
          }
        )), k && m.interpretNumericEntities && $ === "iso-8859-1" && (k = o(String(k))), z.indexOf("[]=") > -1 && (k = n(k) ? [k] : k);
        var N = t.call(p, R);
        N && m.duplicates === "combine" ? p[R] = e.combine(p[R], k) : (!N || m.duplicates === "last") && (p[R] = k);
      }
    return p;
  }, l = function(g, y, m, p) {
    var f = 0;
    if (g.length > 0 && g[g.length - 1] === "[]") {
      var h = g.slice(0, -1).join("");
      f = Array.isArray(y) && y[h] ? y[h].length : 0;
    }
    for (var w = p ? y : a(y, m, f), O = g.length - 1; O >= 0; --O) {
      var E, $ = g[O];
      if ($ === "[]" && m.parseArrays)
        E = m.allowEmptyArrays && (w === "" || m.strictNullHandling && w === null) ? [] : e.combine([], w);
      else {
        E = m.plainObjects ? { __proto__: null } : {};
        var z = $.charAt(0) === "[" && $.charAt($.length - 1) === "]" ? $.slice(1, -1) : $, q = m.decodeDotInKeys ? z.replace(/%2E/g, ".") : z, G = parseInt(q, 10);
        !m.parseArrays && q === "" ? E = { 0: w } : !isNaN(G) && $ !== q && String(G) === q && G >= 0 && m.parseArrays && G <= m.arrayLimit ? (E = [], E[G] = w) : q !== "__proto__" && (E[q] = w);
      }
      w = E;
    }
    return w;
  }, u = function(y, m, p, f) {
    if (y) {
      var h = p.allowDots ? y.replace(/\.([^.[]+)/g, "[$1]") : y, w = /(\[[^[\]]*])/, O = /(\[[^[\]]*])/g, E = p.depth > 0 && w.exec(h), $ = E ? h.slice(0, E.index) : h, z = [];
      if ($) {
        if (!p.plainObjects && t.call(Object.prototype, $) && !p.allowPrototypes)
          return;
        z.push($);
      }
      for (var q = 0; p.depth > 0 && (E = O.exec(h)) !== null && q < p.depth; ) {
        if (q += 1, !p.plainObjects && t.call(Object.prototype, E[1].slice(1, -1)) && !p.allowPrototypes)
          return;
        z.push(E[1]);
      }
      if (E) {
        if (p.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
        z.push("[" + h.slice(E.index) + "]");
      }
      return l(z, m, p, f);
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
    var m = typeof y.charset > "u" ? r.charset : y.charset, p = typeof y.duplicates > "u" ? r.duplicates : y.duplicates;
    if (p !== "combine" && p !== "first" && p !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var f = typeof y.allowDots > "u" ? y.decodeDotInKeys === !0 ? !0 : r.allowDots : !!y.allowDots;
    return {
      allowDots: f,
      allowEmptyArrays: typeof y.allowEmptyArrays == "boolean" ? !!y.allowEmptyArrays : r.allowEmptyArrays,
      allowPrototypes: typeof y.allowPrototypes == "boolean" ? y.allowPrototypes : r.allowPrototypes,
      allowSparse: typeof y.allowSparse == "boolean" ? y.allowSparse : r.allowSparse,
      arrayLimit: typeof y.arrayLimit == "number" ? y.arrayLimit : r.arrayLimit,
      charset: m,
      charsetSentinel: typeof y.charsetSentinel == "boolean" ? y.charsetSentinel : r.charsetSentinel,
      comma: typeof y.comma == "boolean" ? y.comma : r.comma,
      decodeDotInKeys: typeof y.decodeDotInKeys == "boolean" ? y.decodeDotInKeys : r.decodeDotInKeys,
      decoder: typeof y.decoder == "function" ? y.decoder : r.decoder,
      delimiter: typeof y.delimiter == "string" || e.isRegExp(y.delimiter) ? y.delimiter : r.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof y.depth == "number" || y.depth === !1 ? +y.depth : r.depth,
      duplicates: p,
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
  return ja = function(g, y) {
    var m = d(y);
    if (g === "" || g === null || typeof g > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var p = typeof g == "string" ? c(g, m) : g, f = m.plainObjects ? { __proto__: null } : {}, h = Object.keys(p), w = 0; w < h.length; ++w) {
      var O = h[w], E = u(O, p[O], m, typeof g == "string");
      f = e.merge(f, E, m);
    }
    return m.allowSparse === !0 ? f : e.compact(f);
  }, ja;
}
var qa, Pu;
function Cv() {
  if (Pu) return qa;
  Pu = 1;
  var e = /* @__PURE__ */ Ov(), t = /* @__PURE__ */ Av(), n = /* @__PURE__ */ hi();
  return qa = {
    formats: n,
    parse: t,
    stringify: e
  }, qa;
}
var ku = /* @__PURE__ */ Cv();
function Gd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ev } = Object.prototype, { getPrototypeOf: yi } = Object, { iterator: xo, toStringTag: Yd } = Symbol, Oo = /* @__PURE__ */ ((e) => (t) => {
  const n = Ev.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), yt = (e) => (e = e.toLowerCase(), (t) => Oo(t) === e), Ao = (e) => (t) => typeof t === e, { isArray: Vn } = Array, dr = Ao("undefined");
function Pv(e) {
  return e !== null && !dr(e) && e.constructor !== null && !dr(e.constructor) && We(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Xd = yt("ArrayBuffer");
function kv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Xd(e.buffer), t;
}
const $v = Ao("string"), We = Ao("function"), Jd = Ao("number"), Co = (e) => e !== null && typeof e == "object", Dv = (e) => e === !0 || e === !1, Hr = (e) => {
  if (Oo(e) !== "object")
    return !1;
  const t = yi(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Yd in e) && !(xo in e);
}, Tv = yt("Date"), Fv = yt("File"), Rv = yt("Blob"), Iv = yt("FileList"), _v = (e) => Co(e) && We(e.pipe), Lv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || We(e.append) && ((t = Oo(e)) === "formdata" || // detect form-data instance
  t === "object" && We(e.toString) && e.toString() === "[object FormData]"));
}, Bv = yt("URLSearchParams"), [Mv, Nv, jv, qv] = ["ReadableStream", "Request", "Response", "Headers"].map(yt), zv = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function vr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), Vn(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (r = 0; r < s; r++)
      i = a[r], t.call(null, e[i], i, e);
  }
}
function Qd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Zd = (e) => !dr(e) && e !== an;
function Es() {
  const { caseless: e } = Zd(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && Qd(t, o) || o;
    Hr(t[a]) && Hr(r) ? t[a] = Es(t[a], r) : Hr(r) ? t[a] = Es({}, r) : Vn(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && vr(arguments[r], n);
  return t;
}
const Vv = (e, t, n, { allOwnKeys: r } = {}) => (vr(t, (o, a) => {
  n && We(o) ? e[a] = Gd(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), Uv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Hv = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Wv = (e, t, n, r) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && yi(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Kv = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Gv = (e) => {
  if (!e) return null;
  if (Vn(e)) return e;
  let t = e.length;
  if (!Jd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Yv = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && yi(Uint8Array)), Xv = (e, t) => {
  const r = (e && e[xo]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, Jv = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Qv = yt("HTMLFormElement"), Zv = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), $u = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), eb = yt("RegExp"), ef = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  vr(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, tb = (e) => {
  ef(e, (t, n) => {
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
}, nb = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Vn(e) ? r(e) : r(String(e).split(t)), n;
}, rb = () => {
}, ob = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ab(e) {
  return !!(e && We(e.append) && e[Yd] === "FormData" && e[xo]);
}
const sb = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Co(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = Vn(r) ? [] : {};
        return vr(r, (s, i) => {
          const c = n(s, o + 1);
          !dr(c) && (a[i] = c);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, ib = yt("AsyncFunction"), lb = (e) => e && (Co(e) || We(e)) && We(e.then) && We(e.catch), tf = ((e, t) => e ? setImmediate : t ? ((n, r) => (an.addEventListener("message", ({ source: o, data: a }) => {
  o === an && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), an.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  We(an.postMessage)
), ub = typeof queueMicrotask < "u" ? queueMicrotask.bind(an) : typeof process < "u" && process.nextTick || tf, cb = (e) => e != null && We(e[xo]), B = {
  isArray: Vn,
  isArrayBuffer: Xd,
  isBuffer: Pv,
  isFormData: Lv,
  isArrayBufferView: kv,
  isString: $v,
  isNumber: Jd,
  isBoolean: Dv,
  isObject: Co,
  isPlainObject: Hr,
  isReadableStream: Mv,
  isRequest: Nv,
  isResponse: jv,
  isHeaders: qv,
  isUndefined: dr,
  isDate: Tv,
  isFile: Fv,
  isBlob: Rv,
  isRegExp: eb,
  isFunction: We,
  isStream: _v,
  isURLSearchParams: Bv,
  isTypedArray: Yv,
  isFileList: Iv,
  forEach: vr,
  merge: Es,
  extend: Vv,
  trim: zv,
  stripBOM: Uv,
  inherits: Hv,
  toFlatObject: Wv,
  kindOf: Oo,
  kindOfTest: yt,
  endsWith: Kv,
  toArray: Gv,
  forEachEntry: Xv,
  matchAll: Jv,
  isHTMLForm: Qv,
  hasOwnProperty: $u,
  hasOwnProp: $u,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ef,
  freezeMethods: tb,
  toObjectSet: nb,
  toCamelCase: Zv,
  noop: rb,
  toFiniteNumber: ob,
  findKey: Qd,
  global: an,
  isContextDefined: Zd,
  isSpecCompliantForm: ab,
  toJSONObject: sb,
  isAsyncFn: ib,
  isThenable: lb,
  setImmediate: tf,
  asap: ub,
  isIterable: cb
};
function oe(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
B.inherits(oe, Error, {
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
      config: B.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const nf = oe.prototype, rf = {};
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
  rf[e] = { value: e };
});
Object.defineProperties(oe, rf);
Object.defineProperty(nf, "isAxiosError", { value: !0 });
oe.from = (e, t, n, r, o, a) => {
  const s = Object.create(nf);
  return B.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (i) => i !== "isAxiosError"), oe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const db = null;
function Ps(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function of(e) {
  return B.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Du(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = of(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function fb(e) {
  return B.isArray(e) && !e.some(Ps);
}
const pb = B.toFlatObject(B, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Eo(e, t, n) {
  if (!B.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = B.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, f) {
    return !B.isUndefined(f[p]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && B.isSpecCompliantForm(t);
  if (!B.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (B.isDate(m))
      return m.toISOString();
    if (!c && B.isBlob(m))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return B.isArrayBuffer(m) || B.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, p, f) {
    let h = m;
    if (m && !f && typeof m == "object") {
      if (B.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (B.isArray(m) && fb(m) || (B.isFileList(m) || B.endsWith(p, "[]")) && (h = B.toArray(m)))
        return p = of(p), h.forEach(function(O, E) {
          !(B.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Du([p], E, a) : s === null ? p : p + "[]",
            l(O)
          );
        }), !1;
    }
    return Ps(m) ? !0 : (t.append(Du(f, p, a), l(m)), !1);
  }
  const d = [], g = Object.assign(pb, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Ps
  });
  function y(m, p) {
    if (!B.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(m), B.forEach(m, function(h, w) {
        (!(B.isUndefined(h) || h === null) && o.call(
          t,
          h,
          B.isString(w) ? w.trim() : w,
          p,
          g
        )) === !0 && y(h, p ? p.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!B.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
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
function gi(e, t) {
  this._pairs = [], e && Eo(e, this, t);
}
const af = gi.prototype;
af.append = function(t, n) {
  this._pairs.push([t, n]);
};
af.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Tu);
  } : Tu;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function mb(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function sf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || mb;
  B.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = B.isURLSearchParams(t) ? t.toString() : new gi(t, n).toString(r), a) {
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
    B.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const lf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, hb = typeof URLSearchParams < "u" ? URLSearchParams : gi, yb = typeof FormData < "u" ? FormData : null, gb = typeof Blob < "u" ? Blob : null, vb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: hb,
    FormData: yb,
    Blob: gb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, vi = typeof window < "u" && typeof document < "u", ks = typeof navigator == "object" && navigator || void 0, bb = vi && (!ks || ["ReactNative", "NativeScript", "NS"].indexOf(ks.product) < 0), wb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Sb = vi && window.location.href || "http://localhost", xb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: vi,
  hasStandardBrowserEnv: bb,
  hasStandardBrowserWebWorkerEnv: wb,
  navigator: ks,
  origin: Sb
}, Symbol.toStringTag, { value: "Module" })), Le = {
  ...xb,
  ...vb
};
function Ob(e, t) {
  return Eo(e, new Le.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Le.isNode && B.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ab(e) {
  return B.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Cb(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function uf(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), c = a >= n.length;
    return s = !s && B.isArray(o) ? o.length : s, c ? (B.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !i) : ((!o[s] || !B.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && B.isArray(o[s]) && (o[s] = Cb(o[s])), !i);
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    const n = {};
    return B.forEachEntry(e, (r, o) => {
      t(Ab(r), o, n, 0);
    }), n;
  }
  return null;
}
function Eb(e, t, n) {
  if (B.isString(e))
    try {
      return (t || JSON.parse)(e), B.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const br = {
  transitional: lf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = B.isObject(t);
    if (a && B.isHTMLForm(t) && (t = new FormData(t)), B.isFormData(t))
      return o ? JSON.stringify(uf(t)) : t;
    if (B.isArrayBuffer(t) || B.isBuffer(t) || B.isStream(t) || B.isFile(t) || B.isBlob(t) || B.isReadableStream(t))
      return t;
    if (B.isArrayBufferView(t))
      return t.buffer;
    if (B.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ob(t, this.formSerializer).toString();
      if ((i = B.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Eo(
          i ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), Eb(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || br.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (B.isResponse(t) || B.isReadableStream(t))
      return t;
    if (t && B.isString(t) && (r && !this.responseType || o)) {
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
B.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  br.headers[e] = {};
});
const Pb = B.toObjectSet([
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
]), kb = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && Pb[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ru = Symbol("internals");
function Jn(e) {
  return e && String(e).trim().toLowerCase();
}
function Wr(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Wr) : String(e);
}
function $b(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Db = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function za(e, t, n, r, o) {
  if (B.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!B.isString(t)) {
    if (B.isString(r))
      return t.indexOf(r) !== -1;
    if (B.isRegExp(r))
      return r.test(t);
  }
}
function Tb(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Fb(e, t) {
  const n = B.toCamelCase(" " + t);
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
      const d = B.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Wr(i));
    }
    const s = (i, c) => B.forEach(i, (l, u) => a(l, u, c));
    if (B.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (B.isString(t) && (t = t.trim()) && !Db(t))
      s(kb(t), n);
    else if (B.isObject(t) && B.isIterable(t)) {
      let i = {}, c, l;
      for (const u of t) {
        if (!B.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = u[0]] = (c = i[l]) ? B.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(i, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Jn(t), t) {
      const r = B.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return $b(o);
        if (B.isFunction(n))
          return n.call(this, o, r);
        if (B.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Jn(t), t) {
      const r = B.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || za(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = Jn(s), s) {
        const i = B.findKey(r, s);
        i && (!n || za(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return B.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || za(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return B.forEach(this, (o, a) => {
      const s = B.findKey(r, a);
      if (s) {
        n[s] = Wr(o), delete n[a];
        return;
      }
      const i = t ? Tb(a) : String(a).trim();
      i !== a && delete n[a], n[i] = Wr(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return B.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && B.isArray(r) ? r.join(", ") : r);
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
      r[i] || (Fb(o, s), r[i] = !0);
    }
    return B.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Ke.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
B.reduceDescriptors(Ke.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
B.freezeMethods(Ke);
function Va(e, t) {
  const n = this || br, r = t || n, o = Ke.from(r.headers);
  let a = r.data;
  return B.forEach(e, function(i) {
    a = i.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function cf(e) {
  return !!(e && e.__CANCEL__);
}
function Un(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
B.inherits(Un, oe, {
  __CANCEL__: !0
});
function df(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new oe(
    "Request failed with status code " + n.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Rb(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ib(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[a];
    s || (s = l), n[o] = c, r[o] = l;
    let d = a, g = 0;
    for (; d !== o; )
      g += n[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), l - s < t)
      return;
    const y = u && l - u;
    return y ? Math.round(g * 1e3 / y) : void 0;
  };
}
function _b(e, t) {
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
const ao = (e, t, n = 3) => {
  let r = 0;
  const o = Ib(50, 250);
  return _b((a) => {
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
}, _u = (e) => (...t) => B.asap(() => e(...t)), Lb = Le.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Le.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Le.origin),
  Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent)
) : () => !0, Bb = Le.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      B.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), B.isString(r) && s.push("path=" + r), B.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Mb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Nb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ff(e, t, n) {
  let r = !Mb(t);
  return e && (r || n == !1) ? Nb(e, t) : t;
}
const Lu = (e) => e instanceof Ke ? { ...e } : e;
function pn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, g) {
    return B.isPlainObject(l) && B.isPlainObject(u) ? B.merge.call({ caseless: g }, l, u) : B.isPlainObject(u) ? B.merge({}, u) : B.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, g) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(l))
        return r(void 0, l, d, g);
    } else return r(l, u, d, g);
  }
  function a(l, u) {
    if (!B.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (B.isUndefined(u)) {
      if (!B.isUndefined(l))
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
    headers: (l, u, d) => o(Lu(l), Lu(u), d, !0)
  };
  return B.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, g = d(e[u], t[u], u);
    B.isUndefined(g) && d !== i || (n[u] = g);
  }), n;
}
const pf = (e) => {
  const t = pn({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = Ke.from(s), t.url = sf(ff(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let c;
  if (B.isFormData(n)) {
    if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Le.hasStandardBrowserEnv && (r && B.isFunction(r) && (r = r(t)), r || r !== !1 && Lb(t.url))) {
    const l = o && a && Bb.read(a);
    l && s.set(o, l);
  }
  return t;
}, jb = typeof XMLHttpRequest < "u", qb = jb && function(e) {
  return new Promise(function(n, r) {
    const o = pf(e);
    let a = o.data;
    const s = Ke.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: c, onDownloadProgress: l } = o, u, d, g, y, m;
    function p() {
      y && y(), m && m(), o.cancelToken && o.cancelToken.unsubscribe(u), o.signal && o.signal.removeEventListener("abort", u);
    }
    let f = new XMLHttpRequest();
    f.open(o.method.toUpperCase(), o.url, !0), f.timeout = o.timeout;
    function h() {
      if (!f)
        return;
      const O = Ke.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), $ = {
        data: !i || i === "text" || i === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: O,
        config: e,
        request: f
      };
      df(function(q) {
        n(q), p();
      }, function(q) {
        r(q), p();
      }, $), f = null;
    }
    "onloadend" in f ? f.onloadend = h : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, f.onabort = function() {
      f && (r(new oe("Request aborted", oe.ECONNABORTED, e, f)), f = null);
    }, f.onerror = function() {
      r(new oe("Network Error", oe.ERR_NETWORK, e, f)), f = null;
    }, f.ontimeout = function() {
      let E = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const $ = o.transitional || lf;
      o.timeoutErrorMessage && (E = o.timeoutErrorMessage), r(new oe(
        E,
        $.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        f
      )), f = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in f && B.forEach(s.toJSON(), function(E, $) {
      f.setRequestHeader($, E);
    }), B.isUndefined(o.withCredentials) || (f.withCredentials = !!o.withCredentials), i && i !== "json" && (f.responseType = o.responseType), l && ([g, m] = ao(l, !0), f.addEventListener("progress", g)), c && f.upload && ([d, y] = ao(c), f.upload.addEventListener("progress", d), f.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (u = (O) => {
      f && (r(!O || O.type ? new Un(null, e, f) : O), f.abort(), f = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const w = Rb(o.url);
    if (w && Le.protocols.indexOf(w) === -1) {
      r(new oe("Unsupported protocol " + w + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(a || null);
  });
}, zb = (e, t) => {
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
    return c.unsubscribe = () => B.asap(i), c;
  }
}, Vb = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, Ub = async function* (e, t) {
  for await (const n of Hb(e))
    yield* Vb(n, t);
}, Hb = async function* (e) {
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
}, Bu = (e, t, n, r) => {
  const o = Ub(e, t);
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
          let g = a += d;
          n(g);
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
}, Po = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", mf = Po && typeof ReadableStream == "function", Wb = Po && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), hf = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Kb = mf && hf(() => {
  let e = !1;
  const t = new Request(Le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Mu = 64 * 1024, $s = mf && hf(() => B.isReadableStream(new Response("").body)), so = {
  stream: $s && ((e) => e.body)
};
Po && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !so[t] && (so[t] = B.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new oe(`Response type '${t}' is not supported`, oe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Gb = async (e) => {
  if (e == null)
    return 0;
  if (B.isBlob(e))
    return e.size;
  if (B.isSpecCompliantForm(e))
    return (await new Request(Le.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (B.isArrayBufferView(e) || B.isArrayBuffer(e))
    return e.byteLength;
  if (B.isURLSearchParams(e) && (e = e + ""), B.isString(e))
    return (await Wb(e)).byteLength;
}, Yb = async (e, t) => {
  const n = B.toFiniteNumber(e.getContentLength());
  return n ?? Gb(t);
}, Xb = Po && (async (e) => {
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
    fetchOptions: g
  } = pf(e);
  l = l ? (l + "").toLowerCase() : "text";
  let y = zb([o, a && a.toAbortSignal()], s), m;
  const p = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let f;
  try {
    if (c && Kb && n !== "get" && n !== "head" && (f = await Yb(u, r)) !== 0) {
      let $ = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), z;
      if (B.isFormData(r) && (z = $.headers.get("content-type")) && u.setContentType(z), $.body) {
        const [q, G] = Iu(
          f,
          ao(_u(c))
        );
        r = Bu($.body, Mu, q, G);
      }
    }
    B.isString(d) || (d = d ? "include" : "omit");
    const h = "credentials" in Request.prototype;
    m = new Request(t, {
      ...g,
      signal: y,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: h ? d : void 0
    });
    let w = await fetch(m);
    const O = $s && (l === "stream" || l === "response");
    if ($s && (i || O && p)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((R) => {
        $[R] = w[R];
      });
      const z = B.toFiniteNumber(w.headers.get("content-length")), [q, G] = i && Iu(
        z,
        ao(_u(i), !0)
      ) || [];
      w = new Response(
        Bu(w.body, Mu, q, () => {
          G && G(), p && p();
        }),
        $
      );
    }
    l = l || "text";
    let E = await so[B.findKey(so, l) || "text"](w, e);
    return !O && p && p(), await new Promise(($, z) => {
      df($, z, {
        data: E,
        headers: Ke.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: m
      });
    });
  } catch (h) {
    throw p && p(), h && h.name === "TypeError" && /Load failed|fetch/i.test(h.message) ? Object.assign(
      new oe("Network Error", oe.ERR_NETWORK, e, m),
      {
        cause: h.cause || h
      }
    ) : oe.from(h, h && h.code, e, m);
  }
}), Ds = {
  http: db,
  xhr: qb,
  fetch: Xb
};
B.forEach(Ds, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Nu = (e) => `- ${e}`, Jb = (e) => B.isFunction(e) || e === null || e === !1, yf = {
  getAdapter: (e) => {
    e = B.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let s;
      if (r = n, !Jb(n) && (r = Ds[(s = String(n)).toLowerCase()], r === void 0))
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
  adapters: Ds
};
function Ua(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Un(null, e);
}
function ju(e) {
  return Ua(e), e.headers = Ke.from(e.headers), e.data = Va.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yf.getAdapter(e.adapter || br.adapter)(e).then(function(r) {
    return Ua(e), r.data = Va.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ke.from(r.headers), r;
  }, function(r) {
    return cf(r) || (Ua(e), r && r.response && (r.response.data = Va.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ke.from(r.response.headers))), Promise.reject(r);
  });
}
const gf = "1.9.0", ko = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ko[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qu = {};
ko.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + gf + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
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
function Qb(e, t, n) {
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
const Kr = {
  assertOptions: Qb,
  validators: ko
}, wt = Kr.validators;
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
    r !== void 0 && Kr.assertOptions(r, {
      silentJSONParsing: wt.transitional(wt.boolean),
      forcedJSONParsing: wt.transitional(wt.boolean),
      clarifyTimeoutError: wt.transitional(wt.boolean)
    }, !1), o != null && (B.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Kr.assertOptions(o, {
      encode: wt.function,
      serialize: wt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Kr.assertOptions(n, {
      baseUrl: wt.spelling("baseURL"),
      withXsrfToken: wt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && B.merge(
      a.common,
      a[n.method]
    );
    a && B.forEach(
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
    let u, d = 0, g;
    if (!c) {
      const m = [ju.bind(this), void 0];
      for (m.unshift.apply(m, i), m.push.apply(m, l), g = m.length, u = Promise.resolve(n); d < g; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    g = i.length;
    let y = n;
    for (d = 0; d < g; ) {
      const m = i[d++], p = i[d++];
      try {
        y = m(y);
      } catch (f) {
        p.call(this, f);
        break;
      }
    }
    try {
      u = ju.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, g = l.length; d < g; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = pn(this.defaults, t);
    const n = ff(t.baseURL, t.url, t.allowAbsoluteUrls);
    return sf(n, t.params, t.paramsSerializer);
  }
};
B.forEach(["delete", "get", "head", "options"], function(t) {
  cn.prototype[t] = function(n, r) {
    return this.request(pn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
B.forEach(["post", "put", "patch"], function(t) {
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
let Zb = class vf {
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
      token: new vf(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
};
function e1(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function t1(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
const Ts = {
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
Object.entries(Ts).forEach(([e, t]) => {
  Ts[t] = e;
});
function bf(e) {
  const t = new cn(e), n = Gd(cn.prototype.request, t);
  return B.extend(n, cn.prototype, t, { allOwnKeys: !0 }), B.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return bf(pn(e, o));
  }, n;
}
const xe = bf(br);
xe.Axios = cn;
xe.CanceledError = Un;
xe.CancelToken = Zb;
xe.isCancel = cf;
xe.VERSION = gf;
xe.toFormData = Eo;
xe.AxiosError = oe;
xe.Cancel = xe.CanceledError;
xe.all = function(t) {
  return Promise.all(t);
};
xe.spread = e1;
xe.isAxiosError = t1;
xe.mergeConfig = pn;
xe.AxiosHeaders = Ke;
xe.formToJSON = (e) => uf(B.isHTMLForm(e) ? new FormData(e) : e);
xe.getAdapter = yf.getAdapter;
xe.HttpStatusCode = Ts;
xe.default = xe;
const {
  Axios: OO,
  AxiosError: AO,
  CanceledError: CO,
  isCancel: EO,
  CancelToken: PO,
  VERSION: kO,
  all: $O,
  Cancel: DO,
  isAxiosError: TO,
  spread: FO,
  toFormData: RO,
  AxiosHeaders: IO,
  HttpStatusCode: _O,
  formToJSON: LO,
  getAdapter: BO,
  mergeConfig: MO
} = xe;
function Fs(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function gt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var zu = (e) => gt("before", { cancelable: !0, detail: { visit: e } }), n1 = (e) => gt("error", { detail: { errors: e } }), r1 = (e) => gt("exception", { cancelable: !0, detail: { exception: e } }), o1 = (e) => gt("finish", { detail: { visit: e } }), a1 = (e) => gt("invalid", { cancelable: !0, detail: { response: e } }), lr = (e) => gt("navigate", { detail: { page: e } }), s1 = (e) => gt("progress", { detail: { progress: e } }), i1 = (e) => gt("start", { detail: { visit: e } }), l1 = (e) => gt("success", { detail: { page: e } }), u1 = (e, t) => gt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), c1 = (e) => gt("prefetching", { detail: { visit: e } }), je = class {
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
var d1 = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = wf(), n = await Sf(), r = await g1(n);
  if (!r) throw new Error("Unable to encrypt history");
  return await p1(t, r, e);
}, Ln = { key: "historyKey", iv: "historyIv" }, f1 = async (e) => {
  let t = wf(), n = await Sf();
  if (!n) throw new Error("Unable to decrypt history");
  return await m1(t, n, e);
}, p1 = async (e, t, n) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), s = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, s.written));
}, m1 = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
  return JSON.parse(new TextDecoder().decode(r));
}, wf = () => {
  let e = je.get(Ln.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return je.set(Ln.iv, Array.from(t)), t;
}, h1 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), y1 = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  je.set(Ln.key, Array.from(new Uint8Array(t)));
}, g1 = async (e) => {
  if (e) return e;
  let t = await h1();
  return t ? (await y1(t), t) : null;
}, Sf = async () => {
  let e = je.get(Ln.key);
  return e ? await window.crypto.subtle.importKey("raw", new Uint8Array(e), { name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]) : null;
}, ut = class {
  static save() {
    de.saveScrollPositions(Array.from(this.regions()).map((e) => ({ top: e.scrollTop, left: e.scrollLeft })));
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
    let e = de.getDocumentScrollPosition();
    typeof window < "u" && window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    let t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    de.saveDocumentScrollPosition({ top: window.scrollY, left: window.scrollX });
  }
};
function Rs(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Rs(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Rs(t));
}
var Vu = (e) => e instanceof FormData;
function xf(e, t = new FormData(), n = null) {
  e = e || {};
  for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && Af(t, Of(n, r), e[r]);
  return t;
}
function Of(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Af(e, t, n) {
  if (Array.isArray(n)) return Array.from(n.keys()).forEach((r) => Af(e, Of(t, r.toString()), n[r]));
  if (n instanceof Date) return e.append(t, n.toISOString());
  if (n instanceof File) return e.append(t, n, n.name);
  if (n instanceof Blob) return e.append(t, n);
  if (typeof n == "boolean") return e.append(t, n ? "1" : "0");
  if (typeof n == "string") return e.append(t, n);
  if (typeof n == "number") return e.append(t, `${n}`);
  if (n == null) return e.append(t, "");
  xf(n, e, t);
}
function Kt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var v1 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? Kt(e) : e;
  if ((Rs(t) || r) && !Vu(t) && (t = xf(t)), Vu(t)) return [a, t];
  let [s, i] = bi(n, a, t, o);
  return [Kt(s), i];
};
function bi(e, t, n, r = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), i = t.toString().includes("?") || e === "get" && Object.keys(n).length, c = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (l.search = ku.stringify(tr(ku.parse(l.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[o ? `${l.protocol}//${l.host}` : "", a ? l.pathname : "", s ? l.pathname.substring(1) : "", i ? l.search : "", c ? l.hash : ""].join(""), n];
}
function io(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Uu = (e, t) => {
  e.hash && !t.hash && io(e).href === t.href && (t.hash = e.hash);
}, Is = (e, t) => io(e).href === io(t).href, b1 = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1;
  }
  init({ initialPage: e, swapComponent: t, resolveComponent: n }) {
    return this.page = e, this.swapComponent = t, this.resolveComponent = n, this;
  }
  set(e, { replace: t = !1, preserveScroll: n = !1, preserveState: r = !1 } = {}) {
    this.componentId = {};
    let o = this.componentId;
    return e.clearHistory && de.clear(), this.resolve(e.component).then((a) => {
      if (o !== this.componentId) return;
      e.rememberedState ?? (e.rememberedState = {});
      let s = typeof window < "u" ? window.location : new URL(e.url);
      return t = t || Is(Kt(e.url), s), new Promise((i) => {
        t ? de.replaceState(e, () => i(null)) : de.pushState(e, () => i(null));
      }).then(() => {
        let i = !this.isTheSame(e);
        return this.page = e, this.cleared = !1, i && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.swap({ component: a, page: e, preserveState: r }).then(() => {
          n || ut.reset(), sn.fireInternalEvent("loadDeferredProps"), t || lr(e);
        });
      });
    });
  }
  setQuietly(e, { preserveState: t = !1 } = {}) {
    return this.resolve(e.component).then((n) => (this.page = e, this.cleared = !1, de.setCurrent(e), this.swap({ component: n, page: e, preserveState: t })));
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
}, te = new b1(), Cf = class {
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
}, rr = typeof window > "u", Qn = new Cf(), Hu = !rr && /CriOS/.test(window.navigator.userAgent), w1 = class {
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
    return new Promise((t) => e.encryptHistory ? d1(e).then(t) : t(e));
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
    return e instanceof ArrayBuffer ? f1(e) : Promise.resolve(e);
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
var de = new w1(), S1 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Fs(ut.onWindowScroll.bind(ut), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Fs(ut.onScroll.bind(ut), 100), !0);
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
      n.hash = window.location.hash, de.replaceState({ ...te.get(), url: n.href }), ut.reset();
      return;
    }
    if (!de.isValidState(t)) return this.onMissingHistoryItem();
    de.decrypt(t.page).then((n) => {
      te.setQuietly(n, { preserveState: !1 }).then(() => {
        ut.restore(de.getScrollRegions()), lr(te.get());
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, sn = new S1(), x1 = class {
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
}, Ha = new x1(), O1 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Ha.isReload() && de.deleteState(de.rememberedState);
  }
  static handleBackForward() {
    if (!Ha.isBackForward() || !de.hasAnyState()) return !1;
    let e = de.getScrollRegions();
    return de.decrypt().then((t) => {
      te.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        ut.restore(e), lr(te.get());
      });
    }).catch(() => {
      sn.onMissingHistoryItem();
    }), !0;
  }
  static handleLocation() {
    if (!je.exists(je.locationVisitKey)) return !1;
    let e = je.get(je.locationVisitKey) || {};
    return je.remove(je.locationVisitKey), typeof window < "u" && te.setUrlHash(window.location.hash), de.decrypt(te.get()).then(() => {
      let t = de.getState(de.rememberedState, {}), n = de.getScrollRegions();
      te.remember(t), te.set(te.get(), { preserveScroll: e.preserveScroll, preserveState: !0 }).then(() => {
        e.preserveScroll && ut.restore(n), lr(te.get());
      });
    }).catch(() => {
      sn.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && te.setUrlHash(window.location.hash), te.set(te.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      Ha.isReload() && ut.restore(de.getScrollRegions()), lr(te.get());
    });
  }
}, A1 = class {
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
}, C1 = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, n) {
    let r = new A1(e, t, n);
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
}, E1 = new C1(), Ef = (e, t, n) => {
  if (e === t) return !0;
  for (let r in e) if (!n.includes(r) && e[r] !== t[r] && !P1(e[r], t[r])) return !1;
  return !0;
}, P1 = (e, t) => {
  switch (typeof e) {
    case "object":
      return Ef(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, k1 = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Wu = (e) => {
  if (typeof e == "number") return e;
  for (let [t, n] of Object.entries(k1)) if (e.endsWith(t)) return parseFloat(e) * n;
  return parseInt(e);
}, $1 = class {
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
    return Ef(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, nn = new $1(), D1 = class Pf {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch) this.params = t;
    else {
      let n = { onBefore: this.wrapCallback(t, "onBefore"), onStart: this.wrapCallback(t, "onStart"), onProgress: this.wrapCallback(t, "onProgress"), onFinish: this.wrapCallback(t, "onFinish"), onCancel: this.wrapCallback(t, "onCancel"), onSuccess: this.wrapCallback(t, "onSuccess"), onError: this.wrapCallback(t, "onError"), onCancelToken: this.wrapCallback(t, "onCancelToken"), onPrefetched: this.wrapCallback(t, "onPrefetched"), onPrefetching: this.wrapCallback(t, "onPrefetching") };
      this.params = { ...t, ...n, onPrefetchResponse: t.onPrefetchResponse || (() => {
      }) };
    }
  }
  static create(t) {
    return new Pf(t);
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
}, T1 = { modal: null, listener: null, show(e) {
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
} }, F1 = new Cf(), Ku = class kf {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r;
  }
  static create(t, n, r) {
    return new kf(t, n, r);
  }
  async handlePrefetch() {
    Is(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return F1.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), u1(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await de.processQueue(), de.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = te.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let n = this.getScopedErrors(t);
      return n1(n), this.requestParams.all().onError(n);
    }
    l1(te.get()), await this.requestParams.all().onSuccess(te.get()), de.preserveUrl = !1;
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
    if (a1(t)) return T1.show(t.data);
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
      Is(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    let t = this.getDataFromResponse(this.response.data);
    return this.shouldSetPage(t) ? (this.mergeProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = de.preserveUrl ? te.get().url : this.pageUrl(t), te.set(t, { replace: this.requestParams.all().replace, preserveScroll: this.requestParams.all().preserveScroll, preserveState: this.requestParams.all().preserveState })) : Promise.resolve();
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
    let n = await de.getState(de.rememberedState, {});
    this.requestParams.all().preserveState && n && t.component === te.get().component && (t.rememberedState = n);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Gu = class $f {
  constructor(t, n) {
    this.page = n, this.requestHasFinished = !1, this.requestParams = D1.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new $f(t, n);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), i1(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), c1(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return xe({ method: this.requestParams.all().method, url: io(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((n) => (this.response = Ku.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n != null && n.response ? (this.response = Ku.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!xe.isCancel(n) && r1(n)) return Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, o1(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, s1(t), this.requestParams.all().onProgress(t));
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
}, R1 = class {
  constructor() {
    this.syncRequestStream = new Yu({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new Yu({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    te.init({ initialPage: e, resolveComponent: t, swapComponent: n }), O1.handle(), sn.init(), sn.on("missingHistoryItem", () => {
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
    de.remember(e, t);
  }
  restore(e = "default") {
    return de.restore(e);
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
    return E1.add(e, () => this.reload(t), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
  }
  visit(e, t = {}) {
    let n = this.getPendingVisit(e, { ...t, showProgress: t.showProgress ?? !t.async }), r = this.getVisitEvents(t);
    if (r.onBefore(n) === !1 || !zu(n)) return;
    let o = n.async ? this.asyncRequestStream : this.syncRequestStream;
    o.interruptInFlight(), !te.isCleared() && !n.preserveUrl && ut.save();
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
    H1(), this.asyncRequestStream.interruptInFlight();
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
    de.clear();
  }
  decryptHistory() {
    return de.decrypt();
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
    let r = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, a] = v1(e, r.data, r.method, r.forceFormData, r.queryStringArrayFormat);
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
}, I1 = { buildDOMElement(e) {
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
}, update: Fs(function(e) {
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
function _1(e, t, n) {
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
    let u = t(""), d = { ...u ? { title: `<title inertia="">${u}</title>` } : {} }, g = Object.values(r).reduce((y, m) => y.concat(m), []).reduce((y, m) => {
      if (m.indexOf("<") === -1) return y;
      if (m.indexOf("<title ") === 0) {
        let f = m.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        return y.title = f ? `${f[1]}${t(f[2])}${f[3]}` : m, y;
      }
      let p = m.match(/ inertia="[^"]+"/);
      return p ? y[p[0]] = m : y[Object.keys(y).length] = m, y;
    }, d);
    return Object.values(g);
  }
  function l() {
    e ? n(c()) : I1.update(c());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let u = a();
    return { update: (d) => i(u, d), disconnect: () => s(u) };
  } };
}
var Ae = "nprogress", De = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Jt = null, L1 = (e) => {
  Object.assign(De, e), De.includeCSS && z1(De.color);
}, $o = (e) => {
  let t = Df();
  e = _f(e, De.minimum, 1), Jt = e === 1 ? null : e;
  let n = M1(!t), r = n.querySelector(De.barSelector), o = De.speed, a = De.easing;
  n.offsetWidth, q1((s) => {
    let i = De.positionUsing === "translate3d" ? { transition: `all ${o}ms ${a}`, transform: `translate3d(${Gr(e)}%,0,0)` } : De.positionUsing === "translate" ? { transition: `all ${o}ms ${a}`, transform: `translate(${Gr(e)}%,0)` } : { marginLeft: `${Gr(e)}%` };
    for (let c in i) r.style[c] = i[c];
    if (e !== 1) return setTimeout(s, o);
    n.style.transition = "none", n.style.opacity = "1", n.offsetWidth, setTimeout(() => {
      n.style.transition = `all ${o}ms linear`, n.style.opacity = "0", setTimeout(() => {
        If(), s();
      }, o);
    }, o);
  });
}, Df = () => typeof Jt == "number", Tf = () => {
  Jt || $o(0);
  let e = function() {
    setTimeout(function() {
      Jt && (Ff(), e());
    }, De.trickleSpeed);
  };
  De.trickle && e();
}, B1 = (e) => {
  !e && !Jt || (Ff(0.3 + 0.5 * Math.random()), $o(1));
}, Ff = (e) => {
  let t = Jt;
  if (t === null) return Tf();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let n = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let r in n) if (t >= n[r][0] && t < n[r][1]) return parseFloat(r);
    return 0;
  })(), $o(_f(t + e, 0, 0.994));
}, M1 = (e) => {
  var a;
  if (N1()) return document.getElementById(Ae);
  document.documentElement.classList.add(`${Ae}-busy`);
  let t = document.createElement("div");
  t.id = Ae, t.innerHTML = De.template;
  let n = t.querySelector(De.barSelector), r = e ? "-100" : Gr(Jt || 0), o = Rf();
  return n.style.transition = "all 0 linear", n.style.transform = `translate3d(${r}%,0,0)`, De.showSpinner || ((a = t.querySelector(De.spinnerSelector)) == null || a.remove()), o !== document.body && o.classList.add(`${Ae}-custom-parent`), o.appendChild(t), t;
}, Rf = () => j1(De.parent) ? De.parent : document.querySelector(De.parent), If = () => {
  var e;
  document.documentElement.classList.remove(`${Ae}-busy`), Rf().classList.remove(`${Ae}-custom-parent`), (e = document.getElementById(Ae)) == null || e.remove();
}, N1 = () => document.getElementById(Ae) !== null, j1 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function _f(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Gr = (e) => (-1 + e) * 100, q1 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), z1 = (e) => {
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
})(), V1 = () => {
  if (Rn && document.head.contains(Rn)) return document.head.removeChild(Rn);
}, U1 = () => {
  Rn && !document.head.contains(Rn) && document.head.appendChild(Rn);
}, Lf = { configure: L1, isStarted: Df, done: B1, set: $o, remove: If, start: Tf, status: Jt, show: V1, hide: U1 }, Yr = 0, Xu = (e = !1) => {
  Yr = Math.max(0, Yr - 1), (e || Yr === 0) && Lf.show();
}, H1 = () => {
  Yr++, Lf.hide();
};
function Xr(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var At = new R1();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
* @license MIT */
function Bf(e) {
  switch (typeof e) {
    case "number":
    case "symbol":
      return !1;
    case "string":
      return e.includes(".") || e.includes("[") || e.includes("]");
  }
}
function Mf(e) {
  var t;
  return typeof e == "string" || typeof e == "symbol" ? e : Object.is((t = e == null ? void 0 : e.valueOf) == null ? void 0 : t.call(e), -0) ? "-0" : String(e);
}
function wi(e) {
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
function Jr(e, t, n) {
  if (e == null)
    return n;
  switch (typeof t) {
    case "string": {
      const r = e[t];
      return r === void 0 ? Bf(t) ? Jr(e, wi(t), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = Mf(t));
      const r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t))
        return W1(e, t, n);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function W1(e, t, n) {
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
const K1 = /^(?:0|[1-9]\d*)$/;
function Nf(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return K1.test(e);
  }
}
function G1(e) {
  return e !== null && typeof e == "object" && ro(e) === "[object Arguments]";
}
function Y1(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && Bf(t) && (e == null ? void 0 : e[t]) == null ? n = wi(t) : n = [t], n.length === 0)
    return !1;
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if ((r == null || !Object.hasOwn(r, a)) && !((Array.isArray(r) || G1(r)) && Nf(a) && a < r.length))
      return !1;
    r = r[a];
  }
  return !0;
}
const X1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, J1 = /^\w*$/;
function Q1(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || _0(e) ? !0 : typeof e == "string" && (J1.test(e) || !X1.test(e)) || t != null && Object.hasOwn(t, e);
}
const Z1 = (e, t, n) => {
  const r = e[t];
  (!(Object.hasOwn(e, t) && Md(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function ew(e, t, n, r) {
  if (e == null && !Ju(e))
    return e;
  const o = Q1(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? wi(t) : [t];
  let a = e;
  for (let s = 0; s < o.length && a != null; s++) {
    const i = Mf(o[s]);
    let c;
    if (s === o.length - 1)
      c = n(a[i]);
    else {
      const l = a[i], u = r(l);
      c = u !== void 0 ? u : Ju(l) ? l : Nf(o[s + 1]) ? [] : {};
    }
    Z1(a, i, c), a = a[i];
  }
  return e;
}
function Rr(e, t, n) {
  return ew(e, t, () => n, () => {
  });
}
function tw(e, t) {
  let n = typeof e == "string" ? e : null, r = (typeof e == "string" ? t : e) ?? {}, o = n ? At.restore(n) : null, a = lt(typeof r == "function" ? r() : r), s = null, i = null, c = (u) => u, l = hr({ ...o ? o.data : lt(a), isDirty: !1, errors: o ? o.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((u, d) => Rr(u, d, Jr(this, d)), {});
  }, transform(u) {
    return c = u, this;
  }, defaults(u, d) {
    if (typeof r == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? (a = lt(this.data()), this.isDirty = !1) : a = typeof u == "string" ? Rr(lt(a), u, d) : Object.assign({}, lt(a), u), this;
  }, reset(...u) {
    let d = lt(typeof r == "function" ? r() : a), g = lt(d);
    return u.length === 0 ? (a = g, Object.assign(this, d)) : u.filter((y) => Y1(g, y)).forEach((y) => {
      Rr(a, y, Jr(g, y)), Rr(this, y, Jr(d, y));
    }), this;
  }, setError(u, d) {
    return Object.assign(this.errors, typeof u == "string" ? { [u]: d } : u), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, clearErrors(...u) {
    return this.errors = Object.keys(this.errors).reduce((d, g) => ({ ...d, ...u.length > 0 && !u.includes(g) ? { [g]: this.errors[g] } : {} }), {}), this.hasErrors = Object.keys(this.errors).length > 0, this;
  }, submit(...u) {
    let d = typeof u[0] == "object", g = d ? u[0].method : u[0], y = d ? u[0].url : u[1], m = (d ? u[1] : u[2]) ?? {}, p = c(this.data()), f = { ...m, onCancelToken: (h) => {
      if (s = h, m.onCancelToken) return m.onCancelToken(h);
    }, onBefore: (h) => {
      if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(i), m.onBefore) return m.onBefore(h);
    }, onStart: (h) => {
      if (this.processing = !0, m.onStart) return m.onStart(h);
    }, onProgress: (h) => {
      if (this.progress = h, m.onProgress) return m.onProgress(h);
    }, onSuccess: async (h) => {
      this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, i = setTimeout(() => this.recentlySuccessful = !1, 2e3);
      let w = m.onSuccess ? await m.onSuccess(h) : null;
      return a = lt(this.data()), this.isDirty = !1, w;
    }, onError: (h) => {
      if (this.processing = !1, this.progress = null, this.clearErrors().setError(h), m.onError) return m.onError(h);
    }, onCancel: () => {
      if (this.processing = !1, this.progress = null, m.onCancel) return m.onCancel();
    }, onFinish: (h) => {
      if (this.processing = !1, this.progress = null, s = null, m.onFinish) return m.onFinish(h);
    } };
    g === "delete" ? At.delete(y, { ...f, data: p }) : At[g](y, p, f);
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
    l.isDirty = !H0(l.data(), a), n && At.remember(lt(u.__remember()), n);
  }, { immediate: !0, deep: !0 }), l;
}
var Je = _(null), Ue = _(null), Wa = mr(null), Ir = _(null), Qu = null;
H({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
  Je.value = t ? ts(t) : null, Ue.value = e, Ir.value = null;
  let a = typeof window > "u";
  return Qu = _1(a, r, o), a || (At.init({ initialPage: e, resolveComponent: n, swapComponent: async (s) => {
    Je.value = ts(s.component), Ue.value = s.page, Ir.value = s.preserveState ? Ir.value : Date.now();
  } }), At.on("navigate", () => Qu.forceUpdate())), () => {
    if (Je.value) {
      Je.value.inheritAttrs = !!Je.value.inheritAttrs;
      let s = qe(Je.value, { ...Ue.value.props, key: Ir.value });
      return Wa.value && (Je.value.layout = Wa.value, Wa.value = null), Je.value.layout ? typeof Je.value.layout == "function" ? Je.value.layout(qe, s) : (Array.isArray(Je.value.layout) ? Je.value.layout : [Je.value.layout]).concat(s).reverse().reduce((i, c) => (c.inheritAttrs = !!c.inheritAttrs, qe(c, { ...Ue.value.props }, () => i))) : s;
    }
  };
} });
function nw() {
  return hr({ props: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.props;
  }), url: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.url;
  }), component: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.component;
  }), version: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.version;
  }), clearHistory: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.clearHistory;
  }), deferredProps: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.deferredProps;
  }), mergeProps: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.mergeProps;
  }), deepMergeProps: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.deepMergeProps;
  }), rememberedState: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.rememberedState;
  }), encryptHistory: V(() => {
    var e;
    return (e = Ue.value) == null ? void 0 : e.encryptHistory;
  }) });
}
H({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
  let e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
  if (!this.$slots.fallback) throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
  return e.every((t) => this.$page.props[t] !== void 0) ? this.$slots.default() : this.$slots.fallback();
} });
H({ props: { title: { type: String, required: !1 } }, data() {
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
H({ name: "Link", props: { as: { type: String, default: "a" }, data: { type: Object, default: () => ({}) }, href: { type: [String, Object], required: !0 }, method: { type: String, default: "get" }, replace: { type: Boolean, default: !1 }, preserveScroll: { type: Boolean, default: !1 }, preserveState: { type: Boolean, default: null }, only: { type: Array, default: () => [] }, except: { type: Array, default: () => [] }, headers: { type: Object, default: () => ({}) }, queryStringArrayFormat: { type: String, default: "brackets" }, async: { type: Boolean, default: !1 }, prefetch: { type: [Boolean, String, Array], default: !1 }, cacheFor: { type: [Number, String, Array], default: 0 }, onStart: { type: Function, default: (e) => {
} }, onProgress: { type: Function, default: () => {
} }, onFinish: { type: Function, default: () => {
} }, onBefore: { type: Function, default: () => {
} }, onCancel: { type: Function, default: () => {
} }, onSuccess: { type: Function, default: () => {
} }, onError: { type: Function, default: () => {
} }, onCancelToken: { type: Function, default: () => {
} } }, setup(e, { slots: t, attrs: n }) {
  let r = _(0), o = _(null), a = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], s = e.cacheFor !== 0 ? e.cacheFor : a.length === 1 && a[0] === "click" ? 0 : 3e4;
  pe(() => {
    a.includes("mount") && p();
  }), Pt(() => {
    clearTimeout(o.value);
  });
  let i = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), c = i !== "get" ? "button" : e.as.toLowerCase(), l = V(() => bi(i, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), u = V(() => l.value[0]), d = V(() => l.value[1]), g = V(() => ({ a: { href: u.value }, button: { type: "button" } })), y = { data: d.value, method: i, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? i !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, m = { ...y, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (O) => {
    r.value++, e.onStart(O);
  }, onProgress: e.onProgress, onFinish: (O) => {
    r.value--, e.onFinish(O);
  }, onCancel: e.onCancel, onSuccess: e.onSuccess, onError: e.onError }, p = () => {
    At.prefetch(u.value, y, { cacheFor: s });
  }, f = { onClick: (O) => {
    Xr(O) && (O.preventDefault(), At.visit(u.value, m));
  } }, h = { onMouseenter: () => {
    o.value = setTimeout(() => {
      p();
    }, 75);
  }, onMouseleave: () => {
    clearTimeout(o.value);
  }, onClick: f.onClick }, w = { onMousedown: (O) => {
    Xr(O) && (O.preventDefault(), p());
  }, onMouseup: (O) => {
    O.preventDefault(), At.visit(u.value, m);
  }, onClick: (O) => {
    Xr(O) && O.preventDefault();
  } };
  return () => qe(c, { ...n, ...g.value[c] || {}, "data-loading": r.value > 0 ? "" : void 0, ...a.includes("hover") ? h : a.includes("click") ? w : f }, t);
} });
H({ name: "WhenVisible", props: { data: { type: [String, Array] }, params: { type: Object }, buffer: { type: Number, default: 0 }, as: { type: String, default: "div" }, always: { type: Boolean, default: !1 } }, data() {
  return { loaded: !1, fetching: !1, observer: null };
}, unmounted() {
  var e;
  (e = this.observer) == null || e.disconnect();
}, mounted() {
  this.observer = new IntersectionObserver((e) => {
    if (!e[0].isIntersecting || (this.$props.always || this.observer.disconnect(), this.fetching)) return;
    this.fetching = !0;
    let t = this.getReloadParams();
    At.reload({ ...t, onStart: (n) => {
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
function jO(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function rw(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function qO(e) {
  return nw().props.auth.permissions.includes(e);
}
let _s = null;
function zO(e) {
  _s = e;
}
function wr() {
  return _s === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), _s;
}
let Ls = null;
function VO(e) {
  Ls = e;
}
function Si() {
  return Ls === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), Ls;
}
const ft = H({
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
      const r = wr(), o = e.as.toLowerCase(), a = e.method.toLowerCase(), [s, i] = bi(
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
            Xr(c) && (c.preventDefault(), r.visit(s, {
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
function Sr(e, t, n, r) {
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
function xr(e, t) {
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
function ow(e, t) {
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
function aw() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(ow(arguments[t]));
  return e;
}
var sw = /* @__PURE__ */ new Map([
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
function Do(e, t) {
  var n = iw(e);
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
function iw(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), o = sw.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var lw = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function uw(e) {
  return Sr(this, void 0, void 0, function() {
    return xr(this, function(t) {
      return [2, cw(e) && e.dataTransfer ? pw(e.dataTransfer, e.type) : dw(e)];
    });
  });
}
function cw(e) {
  return !!e.dataTransfer;
}
function dw(e) {
  var t = fw(e.target) ? e.target.files ? Bs(e.target.files) : [] : [];
  return t.map(function(n) {
    return Do(n);
  });
}
function fw(e) {
  return e !== null;
}
function pw(e, t) {
  return Sr(this, void 0, void 0, function() {
    var n, r;
    return xr(this, function(o) {
      switch (o.label) {
        case 0:
          return e.items ? (n = Bs(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(mw))]) : [3, 2];
        case 1:
          return r = o.sent(), [2, Zu(jf(r))];
        case 2:
          return [2, Zu(Bs(e.files).map(function(a) {
            return Do(a);
          }))];
      }
    });
  });
}
function Zu(e) {
  return e.filter(function(t) {
    return lw.indexOf(t.name) === -1;
  });
}
function Bs(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function mw(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ec(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? qf(t) : ec(e);
}
function jf(e) {
  return e.reduce(function(t, n) {
    return aw(t, Array.isArray(n) ? jf(n) : [n]);
  }, []);
}
function ec(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = Do(t);
  return Promise.resolve(n);
}
function hw(e) {
  return Sr(this, void 0, void 0, function() {
    return xr(this, function(t) {
      return [2, e.isDirectory ? qf(e) : yw(e)];
    });
  });
}
function qf(e) {
  var t = e.createReader();
  return new Promise(function(n, r) {
    var o = [];
    function a() {
      var s = this;
      t.readEntries(function(i) {
        return Sr(s, void 0, void 0, function() {
          var c, l, u;
          return xr(this, function(d) {
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
                u = Promise.all(i.map(hw)), o.push(u), a(), d.label = 6;
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
function yw(e) {
  return Sr(this, void 0, void 0, function() {
    return xr(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(o) {
          var a = Do(o, e.fullPath);
          n(a);
        }, function(o) {
          r(o);
        });
      })];
    });
  });
}
var _r = {}, tc;
function gw() {
  return tc || (tc = 1, _r.__esModule = !0, _r.default = function(e, t) {
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
  }), _r;
}
var vw = gw();
const zf = /* @__PURE__ */ W0(vw);
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
function bw(e, t, n, r) {
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
function ww(e, t) {
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
function Ms(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Sw(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function xw(e) {
  return e.includes("Edge/");
}
function Ow(e) {
  return e === void 0 && (e = window.navigator.userAgent), Sw(e) || xw(e);
}
function rc(e) {
  e.preventDefault();
}
function Lr(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function lo(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var Aw = "file-invalid-type", Cw = "file-too-large", Ew = "file-too-small", Pw = "too-many-files", kw = {
  code: Pw,
  message: "Too many files"
}, $w = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: Aw,
    message: "File type must be ".concat(t)
  };
};
function Zn(e) {
  return e != null;
}
var Dw = zf.default, Tw = Dw || zf;
function Vf(e, t) {
  var n = e.type === "application/x-moz-file" || Tw(e, t);
  return [n, n ? null : $w(t)];
}
var oc = function(e) {
  return {
    code: Cw,
    message: "File is larger than ".concat(e, " bytes")
  };
}, ac = function(e) {
  return {
    code: Ew,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Uf(e, t, n) {
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
      return !lo(n) && a && a.apply(void 0, Ms([n], r, !1)), lo(n);
    });
  };
}
function Fw(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, s = e.maxFiles;
  return !a && t.length > 1 || a && s >= 1 && t.length > s ? !1 : t.every(function(i) {
    var c = Vf(i, n)[0], l = Uf(i, r, o)[0];
    return c && l;
  });
}
var Rw = {
  disabled: !1,
  getFilesFromEvent: uw,
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
function Hf(e) {
  e === void 0 && (e = {});
  var t = _(Qe(Qe({}, Rw), e));
  ne(function() {
    return Qe({}, e);
  }, function(k) {
    t.value = Qe(Qe({}, t.value), k);
  });
  var n = _(), r = _(), o = hr({
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
        var N = r.value.files;
        N && !N.length && (o.isFileDialogActive = !1, typeof k == "function" && k());
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
    k || (Ow() ? setTimeout(a, 0) : a());
  }
  var u = _([]), d = function(k) {
    if (n.value) {
      var N = n.value.$el || n.value;
      N.contains(k.target) || (k.preventDefault(), u.value = []);
    }
  };
  pe(function() {
    window.addEventListener("focus", s, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.addEventListener("dragover", rc, !1), document.addEventListener("drop", d, !1));
  }), Pt(function() {
    window.removeEventListener("focus", s, !1);
    var k = t.value.preventDropOnDocument;
    k && (document.removeEventListener("dragover", rc), document.removeEventListener("drop", d));
  });
  function g(k) {
    var N = t.value.noDragEventsBubbling;
    N && k.stopPropagation();
  }
  function y(k) {
    return bw(this, void 0, void 0, function() {
      var N, v, A, C, S;
      return ww(this, function(W) {
        switch (W.label) {
          case 0:
            return N = t.value, v = N.getFilesFromEvent, A = N.noDragEventsBubbling, C = N.onDragEnter, k.preventDefault(), g(k), u.value = Ms(Ms([], u.value, !0), [k.target], !1), Lr(k) ? v ? [4, v(k)] : [2] : [3, 2];
          case 1:
            if (S = W.sent(), S || (S = []), lo(k) && !A)
              return [2];
            o.draggedFiles = S, o.isDragActive = !0, C && C(k), W.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function m(k) {
    var N = t.value.onDragOver;
    if (k.preventDefault(), g(k), k.dataTransfer)
      try {
        k.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return Lr(k) && N && N(k), !1;
  }
  function p(k) {
    k.preventDefault(), g(k);
    var N = u.value.filter(function(C) {
      if (!n.value)
        return !1;
      var S = n.value.$el || n.value;
      return S.contains(C);
    }), v = N.indexOf(k.target);
    if (v !== -1 && N.splice(v, 1), u.value = N, !(N.length > 0)) {
      o.draggedFiles = [], o.isDragActive = !1;
      var A = t.value.onDragLeave;
      Lr(k) && A && A(k);
    }
  }
  function f(k) {
    k.preventDefault(), g(k), u.value = [];
    var N = t.value, v = N.getFilesFromEvent, A = N.noDragEventsBubbling, C = N.accept, S = N.minSize, W = N.maxSize, I = N.multiple, T = N.maxFiles, X = N.onDrop, ae = N.onDropRejected, Fe = N.onDropAccepted;
    if (Lr(k)) {
      if (!v)
        return;
      Promise.resolve(v(k)).then(function(Ye) {
        if (!(lo(k) && !A)) {
          var $e = [], Me = [];
          Ye.forEach(function(Re) {
            var Ne = Vf(Re, C), vt = Ne[0], bt = Ne[1], Ee = Uf(Re, S, W), ue = Ee[0], ve = Ee[1];
            if (vt && ue)
              $e.push(Re);
            else {
              var me = [bt, ve].filter(function(Oe) {
                return Oe;
              });
              Me.push({ file: Re, errors: me });
            }
          }), (!I && $e.length > 1 || I && T >= 1 && $e.length > T) && ($e.forEach(function(Re) {
            Me.push({ file: Re, errors: [kw] });
          }), $e.splice(0)), o.acceptedFiles = $e, o.fileRejections = Me, X && X($e, Me, k), Me.length > 0 && ae && ae(Me, k), $e.length > 0 && Fe && Fe($e, k);
        }
      });
    }
    o.isFileDialogActive = !1, o.isDragActive = !1, o.draggedFiles = [], o.acceptedFiles = [], o.fileRejections = [];
  }
  var h = function(k) {
    return t.value.disabled ? void 0 : k;
  }, w = function(k) {
    return t.value.noKeyboard ? void 0 : h(k);
  }, O = function(k) {
    return t.value.noDrag ? void 0 : h(k);
  }, E = function(k) {
    k === void 0 && (k = {});
    var N = k.onFocus, v = k.onBlur, A = k.onClick, C = k.onDragEnter, S = k.onDragenter, W = k.onDragOver, I = k.onDragover, T = k.onDragLeave, X = k.onDragleave, ae = k.onDrop, Fe = nc(k, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Qe(Qe({ onFocus: w(Tt(N, i)), onBlur: w(Tt(v, c)), onClick: h(Tt(A, l)), onDragenter: O(Tt(C, S, y)), onDragover: O(Tt(W, I, m)), onDragleave: O(Tt(T, X, p)), onDrop: O(Tt(ae, f)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Fe);
  }, $ = function(k) {
    k.stopPropagation();
  };
  function z(k) {
    k === void 0 && (k = {});
    var N = k.onChange, v = k.onClick, A = nc(k, ["onChange", "onClick"]), C = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: h(Tt(N, f)),
      onClick: h(Tt(v, $)),
      autoComplete: "off",
      tabIndex: -1,
      ref: r
    };
    return Qe(Qe({}, C), A);
  }
  var q = V(function() {
    return o.draggedFiles ? o.draggedFiles.length : 0;
  }), G = V(function() {
    return q.value > 0 && Fw({
      files: o.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), R = V(function() {
    return q.value > 0 && !G.value;
  });
  return Qe(Qe({}, Nt(o)), { isDragAccept: G, isDragReject: R, isFocused: V(function() {
    return o.isFocused && !t.value.disabled;
  }), getRootProps: E, getInputProps: z, rootRef: n, inputRef: r, open: h(a) });
}
const Iw = { class: "flex w-full flex-col" }, _w = {
  key: 0,
  class: "text-black select-none"
}, Lw = ["name"], Bw = {
  key: 1,
  class: "select-none"
}, Mw = { key: 2 }, Nw = {
  key: 3,
  class: "select-none"
}, UO = {
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
    const t = e, n = _(null), r = (l) => {
      let u = [];
      return l.split("_").join(" ").split(" ").map(function(d) {
        u.push(d[0].toUpperCase() + d.slice(1));
      }), u.join(" ");
    }, o = (l, u) => {
      var d;
      if (n.value = null, u && u.length > 0) {
        u[0].errors && (n.value = (d = u[0]) == null ? void 0 : d.errors.map((g) => g.message).join(", ")), console.error(u);
        return;
      }
      if (!l || l.length === 0) {
        n.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = l : t.form[t.field] = l[0];
    }, { getRootProps: a, getInputProps: s, isDragActive: i, ...c } = Hf({
      onDrop: o,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, u) => {
      var d;
      return x(), P("div", Iw, [
        D("div", {
          class: Z(["border-primary-200 bg-primary-50 text-primary-200 hover:border-primary-600 hover:text-primary w-full rounded-lg border-2 border-dashed transition duration-100 ease-in-out", {
            "border-primary-400 bg-primary-100": b(i),
            "bg-primary-100 border-red-600": t.form.errors[e.field] ?? n.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          D("div", ie({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, b(a)()), [
            e.label ? (x(), P("p", _w, J(e.label), 1)) : Y("", !0),
            D("input", ie(b(s)(), { name: e.field }), null, 16, Lw),
            b(i) ? (x(), P("span", Bw, "Drop the " + J(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (x(), P("span", Mw, J(((d = e.form[e.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (x(), P("span", Nw, "Drag 'n' drop " + J(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        Q(b(en), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, jw = { class: "flex w-full" }, qw = { key: 0 }, zw = { key: 1 }, Vw = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, Uw = ["onClick"], Hw = ["src"], Ww = ["value"], Kw = { class: "flex items-center gap-4" }, Gw = {
  key: 0,
  class: "text-sm text-gray-600"
}, Yw = {
  key: 1,
  class: "mt-2"
}, Xw = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, Jw = { class: "-m-1 flex flex-wrap md:-m-2" }, Qw = { class: "h-full w-full p-1 shadow md:p-2" }, Zw = ["src"], HO = /* @__PURE__ */ H({
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
    const t = wr(), n = e, r = tw({
      image: []
    }), o = (y, m) => `/${y.replace(".", "/")}${m ? `/${m}` : ""}`;
    function a() {
      let y = new FormData();
      r.image.forEach((m, p) => {
        y.append(`image[${p}]`, m.file);
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
      y.forEach((m) => {
        let p = new FileReader();
        p.onload = (f) => {
          r.image.push({ file: m, dataUrl: f.target.result });
        }, p.readAsDataURL(m);
      });
    }
    const i = (y, m) => {
      if (m && m.length > 0) {
        console.error(m);
        return;
      }
      s(y);
    };
    function c(y) {
      r.image.splice(y, 1);
    }
    const { getRootProps: l, getInputProps: u, isDragActive: d } = Hf({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    }), g = _(!1);
    return (y, m) => (x(), P(re, null, [
      e.canUpload ? (x(), P("form", {
        key: 0,
        onSubmit: St(a, ["prevent"]),
        class: "w-full"
      }, [
        D("div", jw, [
          D("div", {
            class: Z(["border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary w-full rounded-l-lg border-2 border-r-0 border-dashed transition duration-100 ease-in-out", { "border-primary-400 bg-primary-100": g.value }])
          }, [
            D("div", ie({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, b(l)()), [
              D("input", be(Pe(b(u)())), null, 16),
              b(d) ? (x(), P("span", qw, "Drop the files here ...")) : (x(), P("span", zw, "Drag 'n' drop images here"))
            ], 16),
            b(r).image.length > 0 ? (x(), P("div", Vw, [
              (x(!0), P(re, null, Ce(b(r).image, (p, f) => (x(), P("div", {
                class: "relative cursor-pointer select-none",
                onClick: (h) => c(f),
                key: f
              }, [
                m[0] || (m[0] = D("div", { class: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                D("img", {
                  src: p.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, Hw)
              ], 8, Uw))), 128))
            ])) : Y("", !0)
          ], 2),
          Q(b(rO), {
            class: Z(["inline rounded-l-none", { "cursor-not-allowed": b(r).image.length == 0 }]),
            disabled: b(r).image.length == 0
          }, {
            default: M(() => m[1] || (m[1] = [
              fe(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          b(r).progress ? (x(), P("progress", {
            key: 0,
            value: b(r).progress.percentage,
            max: "100"
          }, J(b(r).progress.percentage) + "%", 9, Ww)) : Y("", !0)
        ]),
        y.$page.props.errors.image ? (x(), U(b(en), {
          key: 0,
          class: "mt-2",
          message: y.$page.props.errors.image
        }, null, 8, ["message"])) : Y("", !0),
        D("div", Kw, [
          Q(un, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: M(() => [
              b(r).recentlySuccessful ? (x(), P("p", Gw, "Images uploaded.")) : Y("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : Y("", !0),
      e.images.length ? (x(), P("div", Yw, [
        m[3] || (m[3] = D("hr", null, null, -1)),
        D("div", Xw, [
          D("div", Jw, [
            (x(!0), P(re, null, Ce(e.images, (p, f) => (x(), P("div", {
              key: f,
              class: "flex w-1/3 flex-wrap"
            }, [
              D("div", Qw, [
                D("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: p.url
                }, null, 8, Zw),
                e.canUpload ? (x(), U(b(ft), {
                  key: 0,
                  href: o("images.delete", p.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700",
                  as: "button"
                }, {
                  default: M(() => m[2] || (m[2] = [
                    fe(" Delete Image ")
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
}), e2 = { class: "flex items-center space-x-3" }, t2 = ["id", "name", "value", "checked"], n2 = ["for"], WO = /* @__PURE__ */ H({
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
    }, a = V(() => r.form && r.field ? r.form[r.field] === r.value : r.modelValue === r.value), s = V(() => r.id || `radio-${r.field || "radio"}-${r.value}`);
    return (i, c) => (x(), P("div", e2, [
      D("input", {
        id: s.value,
        type: "radio",
        name: i.name || i.field,
        value: i.value,
        checked: a.value,
        onChange: o,
        class: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
      }, null, 40, t2),
      D("label", {
        for: s.value,
        class: "cursor-pointer text-sm font-medium text-gray-700"
      }, J(i.label), 9, n2)
    ]));
  }
}), Wf = {
  START: "start"
}, we = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
  NO_STYLE: "no-style"
}, r2 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, uo = /* @__PURE__ */ H({
  __name: "SubmitButton",
  props: {
    theme: { default: we.PRIMARY },
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
      return x(), U(b(bn), {
        theme: t.theme,
        disabled: t.loading || ((r = t.form) == null ? void 0 : r.processing) || t.disabled,
        type: t.type,
        "custom-class": `relative ${t.customButtonClass}`,
        size: t.size,
        class: "focusable"
      }, {
        default: M(() => {
          var o, a;
          return [
            D("div", {
              class: Z({ "opacity-25": ((o = t.form) == null ? void 0 : o.processing) || t.loading })
            }, [
              j(t.$slots, "default")
            ], 2),
            (a = t.form) != null && a.processing || t.loading ? (x(), P("div", r2, [
              Q(b(qi), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : Y("", !0)
          ];
        }),
        _: 3
      }, 8, ["theme", "disabled", "type", "custom-class", "size"]);
    };
  }
}), o2 = { class: "w-full" }, a2 = ["id"], s2 = ["disabled"], i2 = { key: 0 }, l2 = { key: 1 }, u2 = { class: "ml-2 w-2" }, c2 = {
  class: "absolute z-1000 -mt-1! hidden min-w-full bg-white data-te-dropdown-show:block",
  "data-te-dropdown-menu-ref": ""
}, d2 = { class: "float-left m-0 box-border max-h-80 min-w-full list-none overflow-auto rounded rounded-t-none border border-t-0 border-gray-300 bg-clip-padding text-left text-base shadow" }, f2 = ["onClick"], KO = {
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
    return (c, l) => (x(), P("div", o2, [
      !e.noLabel && (e.label || e.field) ? (x(), U(b(qn), {
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
          i().length > 0 ? (x(), P("span", i2, J(i().length) + " selected", 1)) : (x(), P("span", l2, J(e.placeholder), 1)),
          D("span", u2, [
            Q(b(Se), {
              icon: b(Qs),
              class: "h-5 w-5"
            }, null, 8, ["icon"])
          ])
        ], 8, s2),
        D("div", c2, [
          D("ul", d2, [
            (x(!0), P(re, null, Ce(e.list, (u) => (x(), P("li", {
              onClick: (d) => a(u),
              key: u[e.optionValue],
              class: "flex w-full min-w-full cursor-pointer items-center justify-start border-t border-gray-50 px-4 py-3 text-sm leading-4 font-normal hover:bg-[rgba(0,0,0,.03)]"
            }, [
              D("div", {
                class: Z(["mr-2 -ml-2 h-4 w-4 rounded border", s(u) ? "bg-primary" : "bg-white"])
              }, null, 2),
              fe(" " + J(u[e.optionText]), 1)
            ], 8, f2))), 128))
          ])
        ])
      ], 8, a2),
      Q(b(en), {
        message: e.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
}, p2 = ["id"], m2 = {
  key: 0,
  class: "text-sm text-gray-600"
}, h2 = { class: "flex flex-col" }, GO = /* @__PURE__ */ H({
  __name: "Table",
  props: {
    total: {},
    links: {},
    collapsable: { type: Boolean },
    collapse_id: {},
    sticky: { type: Boolean },
    overflow: { type: Boolean },
    seperate: { type: Boolean },
    showPerPage: { type: Boolean },
    defaultPerPage: {},
    responsive: { type: Boolean }
  },
  setup(e) {
    wr();
    const t = e, n = _(null), r = _(null), o = _(null), a = _(null), s = () => {
      const l = n.value, u = l.getBoundingClientRect().top, d = document.querySelector("nav").offsetHeight, g = u - d, y = o.value, m = l.getBoundingClientRect().height + u - d * 2;
      if (g <= 0 && m > 0) {
        if (y.dataset.sticky === "true") return;
        c(), y.style.display = "block", y.dataset.sticky = "true", y.style.top = `${d}px`, y.style.width = r.value.offsetWidth + "px";
        return;
      }
      y.dataset.sticky = "", y.style.display = "";
    }, i = () => {
      a.value.style.marginLeft = -r.value.scrollLeft + "px";
    }, c = () => {
      if (!n.value) return;
      const l = n.value.querySelector("thead tr");
      let u = a.value;
      u.innerHTML = "";
      let d = l == null ? void 0 : l.querySelectorAll("th");
      d == null || d.forEach((y) => {
        const m = y.cloneNode(!0);
        m.style.width = y.offsetWidth + "px", u.appendChild(m), m.addEventListener("click", () => {
          y.click();
        });
      });
      const g = o.value;
      g.style.width = r.value.offsetWidth + "px";
    };
    return t.sticky && (pe(() => {
      c(), window.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), r.value.addEventListener("scroll", i, { passive: !0 });
    }), Pt(() => {
      var l;
      window.removeEventListener("scroll", s), window.removeEventListener("resize", c), (l = r.value) == null || l.removeEventListener("scroll", i);
    })), (l, u) => (x(), P("div", {
      class: Z({
        "visible! hidden": l.collapsable,
        "overflow-hidden": l.overflow
      }),
      id: l.collapse_id,
      "data-te-collapse-item": ""
    }, [
      l.total != null ? (x(), P("p", m2, "Found: " + J(l.total), 1)) : Y("", !0),
      D("div", h2, [
        D("div", {
          class: Z({ "overflow-x-auto": l.overflow }),
          ref_key: "table_container",
          ref: r
        }, [
          D("table", {
            class: Z(["min-w-full text-left text-sm font-light", {
              "[&>*>tr]:border-l-primary-500 mb-14 [&>*>tr]:border-l-4": l.collapsable,
              "border-separate border-spacing-y-5 px-2": l.seperate,
              // reponsive classes
              // thead & tbody
              "max-sm:[&_thead]:hidden": l.responsive,
              // td&th
              "max-sm:[&_.td-label]:block! max-sm:[&_td]:flex max-sm:[&_td]:justify-between max-sm:[&_td]:border-b max-sm:[&_td]:px-2! max-sm:[&_td:last-child]:border-b-0!": l.responsive,
              // tr
              "max-sm:[&_tr]:mb-2 max-sm:[&_tr]:flex max-sm:[&_tr]:flex-col max-sm:[&_tr]:rounded-md max-sm:[&_tr]:border max-sm:[&_tr]:border-gray-200 max-sm:[&_tr]:shadow-md": l.responsive
            }]),
            ref_key: "table",
            ref: n
          }, [
            l.sticky ? (x(), P("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: o,
              class: "fixed isolate z-40 hidden w-full overflow-hidden bg-neutral-100"
            }, [
              D("div", {
                ref_key: "sticky_header",
                ref: a,
                class: Z(["w-max [&>th]:align-middle", {
                  "max-sm:hidden": l.responsive
                }])
              }, null, 2)
            ], 512)) : Y("", !0),
            j(l.$slots, "default")
          ], 2)
        ], 2)
      ]),
      l.$slots.pagination ? j(l.$slots, "pagination", { key: 1 }) : l.links ? (x(), U(b(_p), {
        key: 2,
        class: "mt-6",
        links: l.links,
        showPerPage: l.showPerPage,
        defaultPerPage: l.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : Y("", !0)
    ], 10, p2));
  }
}), y2 = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" }, YO = /* @__PURE__ */ H({
  __name: "Thead",
  setup(e) {
    return (t, n) => (x(), P("thead", y2, [
      j(t.$slots, "default")
    ]));
  }
}), g2 = { key: 0 }, XO = /* @__PURE__ */ H({
  __name: "Tbody",
  props: {
    data: { default: "" },
    hidePlaceholder: { type: Boolean, default: !1 },
    hideNoRecordsMessage: { type: Boolean, default: !1 },
    recordsFromPagination: { type: Boolean, default: !0 },
    noRecordsMessage: { default: "No records found" },
    skipDeferred: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = V(() => {
      if (t.skipDeferred) return null;
      try {
        const o = Si().props[t.data] ?? null;
        return t.recordsFromPagination ? (o == null ? void 0 : o.data) ?? null : o;
      } catch {
        return null;
      }
    });
    return (r, o) => (x(), P("tbody", null, [
      r.skipDeferred ? j(r.$slots, "default", { key: 1 }) : (x(), P(re, { key: 0 }, [
        !r.hideNoRecordsMessage && n.value ? (x(), P(re, { key: 0 }, [
          n.value.length ? Y("", !0) : (x(), P("tr", g2, [
            Q(b(Kf), {
              colspan: "999",
              class: "no-records-message text-center! text-gray-500"
            }, {
              default: M(() => [
                fe(J(r.noRecordsMessage), 1)
              ]),
              _: 1
            })
          ]))
        ], 64)) : Y("", !0),
        j(r.$slots, "default")
      ], 64))
    ]));
  }
}), v2 = { class: "flex items-center justify-between" }, b2 = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, JO = /* @__PURE__ */ H({
  __name: "Th",
  props: {
    orderBy: {}
  },
  setup(e) {
    jn.add(fm, sm);
    const t = e, n = _("asc"), r = _(!1);
    let o = null;
    const a = wr(), s = Si();
    pe(() => {
      t.orderBy && (o = a.on("navigate", c), c());
    }), Pt(() => {
      o == null || o();
    });
    const i = (d) => {
      const g = {};
      return d.includes("?") && new URLSearchParams(d.split("?")[1]).forEach((m, p) => {
        g[p] = m;
      }), g;
    }, c = () => {
      const d = i(s.url);
      if (d.order_by === t.orderBy) {
        n.value = d.order_dir || "asc", r.value = !0;
        return;
      }
      r.value = !1;
    }, l = () => {
      if (!t.orderBy) return;
      const d = n.value === "asc" ? "desc" : "asc", y = {
        ...i(s.url),
        order_by: t.orderBy,
        order_dir: d
      }, m = s.url.split("?")[0];
      a.get(m, y, {
        preserveState: !0
      }), n.value = d, r.value = !0;
    }, u = (d) => n.value === d && r.value ? "active text-primary" : "text-gray-400";
    return (d, g) => (x(), P("th", {
      scope: "col",
      class: Z(["relative py-4 text-center md:px-6 md:text-left", d.orderBy ? "cursor-pointer" : ""]),
      onClick: l
    }, [
      D("div", v2, [
        j(d.$slots, "default"),
        d.orderBy ? (x(), P("span", b2, [
          Q(b(Se), {
            icon: "fa-sort-up",
            class: Z(["absolute", u("desc")])
          }, null, 8, ["class"]),
          Q(b(Se), {
            icon: "fa-sort-down",
            class: Z(["absolute", u("asc")])
          }, null, 8, ["class"])
        ])) : Y("", !0)
      ])
    ], 2));
  }
}), w2 = { class: "whitespace-nowrap py-2 text-center md:px-6 md:py-4 md:text-left" }, S2 = { class: "td-label hidden font-bold" }, Kf = {
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
    return (n, r) => (x(), P("td", w2, [
      D("span", S2, J(t.label), 1),
      j(n.$slots, "default")
    ]));
  }
}, x2 = ["data-te-target", "aria-controls"], QO = {
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (x(), P("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      j(t.$slots, "default")
    ], 8, x2));
  }
}, O2 = { colspan: "999" }, A2 = ["id"], ZO = {
  __name: "TrCollapse",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (x(), P("tr", null, [
      D("td", O2, [
        D("div", {
          id: e.collapse_id,
          class: "visible! hidden",
          "data-te-collapse-item": ""
        }, [
          j(t.$slots, "default")
        ], 8, A2)
      ])
    ]));
  }
}, eA = {
  __name: "TrPlaceholder",
  props: {
    columns: {
      type: Number,
      required: !1,
      default: 5
    }
  },
  setup(e) {
    return (t, n) => (x(), P("tr", null, [
      (x(!0), P(re, null, Ce(e.columns, (r) => (x(), P("td", {
        key: r,
        class: "px-6 py-4"
      }, n[0] || (n[0] = [
        D("div", { class: "h-4 w-full animate-pulse rounded bg-gray-200" }, null, -1)
      ])))), 128))
    ]));
  }
}, C2 = { class: "mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 max-xxs:text-xxs" }, E2 = {
  key: 0,
  class: "mb-2 h-fit w-full xs:w-fit"
}, P2 = { key: 0 }, k2 = {
  key: 1,
  class: "ml-1"
}, $2 = { class: "flex w-fit flex-wrap" }, D2 = {
  key: 0,
  class: "font-semibold"
}, T2 = { class: "mb-1" }, F2 = {
  key: 0,
  class: "w-full whitespace-normal font-semibold text-primary"
}, R2 = { class: "w-full break-words" }, I2 = { class: "mb-1 flex flex-col" }, _2 = { key: 1 }, tA = {
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
      return x(), P("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        D("div", C2, [
          t.itemId || t.timeStamp ? (x(), P("div", E2, [
            t.itemId ? (x(), P(re, { key: 0 }, [
              t.itemId.routeName ? (x(), U(b(ft), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: M(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (x(), P(re, { key: 0 }, [
                    fe("#")
                  ], 64)) : Y("", !0),
                  fe(" " + J(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (x(), P("span", P2, [
                t.itemId.prefix || t.itemId.prefix == null ? (x(), P(re, { key: 0 }, [
                  fe("#")
                ], 64)) : Y("", !0),
                fe(" " + J(t.itemId.id), 1)
              ]))
            ], 64)) : Y("", !0),
            t.timeStamp ? (x(), P("span", k2, [
              t.itemId ? (x(), P(re, { key: 0 }, [
                fe("-")
              ], 64)) : Y("", !0),
              fe(" " + J(t.timeStamp), 1)
            ])) : Y("", !0)
          ])) : Y("", !0),
          D("div", $2, [
            (x(!0), P(re, null, Ce(e.pills, (a, s) => (x(), P(re, { key: s }, [
              a.text ? (x(), P("span", {
                key: 0,
                class: "whitespace-nowrap rounded-md border bg-primary p-1 px-2 text-white",
                style: dt({
                  backgroundColor: a.color ? a.color : null
                })
              }, J(a.text), 5)) : Y("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (x(), P(re, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (x(), P("p", D2, J(t.title.text), 1)) : (x(), U(b(ft), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: M(() => [
              fe(J(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : Y("", !0),
        D("div", T2, [
          t.extraText ? (x(), P("p", F2, [
            r[0] || (r[0] = fe(" Engineer Note: ")),
            D("span", R2, J(t.extraText), 1)
          ])) : Y("", !0)
        ]),
        D("div", I2, [
          (x(!0), P(re, null, Ce(e.options, (a, s) => (x(), P(re, null, [
            !a.routeName && !a.href ? (x(), P("span", {
              key: 0,
              style: dt({ color: a.color ? a.color : "#000" })
            }, J(a.text), 5)) : (x(), U(b(ft), {
              key: 1,
              href: a.href ? a.href : n.route(a.routeName, a.routeData),
              style: dt({ color: a.color ? a.color : "#000" })
            }, {
              default: M(() => [
                fe(J(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 256))
        ]),
        (o = t.amount) != null && o.amount ? (x(), P("div", _2, [
          D("span", null, J(t.amount.text + b(rw)(t.amount.amount)), 1)
        ])) : Y("", !0),
        D("div", null, [
          j(n.$slots, "default")
        ])
      ]);
    };
  }
}, L2 = { class: "flex" }, B2 = { class: "flex-shrink-0" }, M2 = { class: "ml-3 flex-1" }, N2 = {
  key: 0,
  class: "mb-1 text-sm font-medium"
}, j2 = { class: "text-sm" }, q2 = {
  key: 0,
  class: "ml-auto flex-shrink-0"
}, nA = /* @__PURE__ */ H({
  __name: "Alert",
  props: {
    type: { default: "info" },
    title: { default: void 0 },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = _(n.modelValue), a = V({
      get: () => o.value,
      set: (p) => {
        o.value = p, r("update:modelValue", p);
      }
    });
    ne(
      () => n.modelValue,
      (p) => {
        o.value = p;
      },
      { immediate: !0 }
    );
    const s = V(() => {
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
    }), i = V(() => {
      switch (n.type) {
        case "success":
          return dm;
        case "error":
          return Cm;
        case "warning":
          return Om;
        case "info":
        default:
          return hm;
      }
    }), c = () => {
      a.value = !1, r("dismiss");
    }, l = (p) => {
      const f = p;
      f.style.height = "0", f.style.opacity = "0", f.style.transform = "translateY(-8px) scale(0.95)";
    }, u = (p, f) => {
      const h = p, w = h.scrollHeight;
      h.style.transition = "all 400ms ease-out", requestAnimationFrame(() => {
        h.style.height = `${w}px`, h.style.opacity = "1", h.style.transform = "translateY(0) scale(1)";
      }), setTimeout(f, 400);
    }, d = (p) => {
      const f = p;
      f.style.height = "auto";
    }, g = (p) => {
      const f = p, h = f.scrollHeight;
      f.style.height = `${h}px`;
    }, y = (p, f) => {
      const h = p;
      h.style.transition = "all 350ms ease-in", requestAnimationFrame(() => {
        h.style.height = "0", h.style.opacity = "0", h.style.transform = "translateY(-8px) scale(0.95)";
      }), setTimeout(f, 350);
    }, m = (p) => {
      const f = p;
      f.style.height = "", f.style.opacity = "", f.style.transform = "", f.style.transition = "";
    };
    return (p, f) => (x(), U(un, {
      name: "alert",
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: d,
      onBeforeLeave: g,
      onLeave: y,
      onAfterLeave: m,
      css: !1
    }, {
      default: M(() => [
        a.value ? (x(), P("div", {
          key: 0,
          class: Z(s.value),
          role: "alert",
          style: { overflow: "hidden" }
        }, [
          D("div", L2, [
            D("div", B2, [
              Q(b(Se), {
                icon: i.value,
                class: Z(["h-5 w-5", {
                  "text-green-400": p.type === "success",
                  "text-red-400": p.type === "error",
                  "text-yellow-400": p.type === "warning",
                  "text-blue-400": p.type === "info"
                }])
              }, null, 8, ["icon", "class"])
            ]),
            D("div", M2, [
              p.title ? (x(), P("h3", N2, J(p.title), 1)) : Y("", !0),
              D("div", j2, [
                j(p.$slots, "default")
              ])
            ]),
            p.dismissible ? (x(), P("div", q2, [
              D("button", {
                onClick: c,
                class: Z(["inline-flex rounded-md p-1.5 transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none", {
                  "text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50": p.type === "success",
                  "text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50": p.type === "error",
                  "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50": p.type === "warning",
                  "text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50": p.type === "info"
                }]),
                "aria-label": "Dismiss alert"
              }, [
                Q(b(Se), {
                  icon: b(Qr),
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
}), z2 = ["top", "right", "bottom", "left"], Qt = Math.min, Ze = Math.max, co = Math.round, Br = Math.floor, Ct = (e) => ({
  x: e,
  y: e
}), V2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, U2 = {
  start: "end",
  end: "start"
};
function Ns(e, t, n) {
  return Ze(e, Qt(t, n));
}
function Bt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function Hn(e) {
  return e.split("-")[1];
}
function xi(e) {
  return e === "x" ? "y" : "x";
}
function Oi(e) {
  return e === "y" ? "height" : "width";
}
function It(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function Ai(e) {
  return xi(It(e));
}
function H2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Hn(e), o = Ai(e), a = Oi(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = fo(s)), [s, fo(s)];
}
function W2(e) {
  const t = fo(e);
  return [js(e), t, js(t)];
}
function js(e) {
  return e.replace(/start|end/g, (t) => U2[t]);
}
function K2(e, t, n) {
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
function G2(e, t, n, r) {
  const o = Hn(e);
  let a = K2(Mt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(js)))), a;
}
function fo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => V2[t]);
}
function Y2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gf(e) {
  return typeof e != "number" ? Y2(e) : {
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
function sc(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = It(t), s = Ai(t), i = Oi(s), c = Mt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, g = r[i] / 2 - o[i] / 2;
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
      y[s] -= g * (n && l ? -1 : 1);
      break;
    case "end":
      y[s] += g * (n && l ? -1 : 1);
      break;
  }
  return y;
}
const X2 = async (e, t, n) => {
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
  } = sc(l, r, c), g = r, y = {}, m = 0;
  for (let p = 0; p < i.length; p++) {
    const {
      name: f,
      fn: h
    } = i[p], {
      x: w,
      y: O,
      data: E,
      reset: $
    } = await h({
      x: u,
      y: d,
      initialPlacement: r,
      placement: g,
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
        ...E
      }
    }, $ && m <= 50 && (m++, typeof $ == "object" && ($.placement && (g = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : $.rects), {
      x: u,
      y: d
    } = sc(l, g, c)), p = -1);
  }
  return {
    x: u,
    y: d,
    placement: g,
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
    altBoundary: g = !1,
    padding: y = 0
  } = Bt(t, e), m = Gf(y), f = i[g ? d === "floating" ? "reference" : "floating" : d], h = po(await a.getClippingRect({
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
  }, $ = po(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: w,
    offsetParent: O,
    strategy: c
  }) : w);
  return {
    top: (h.top - $.top + m.top) / E.y,
    bottom: ($.bottom - h.bottom + m.bottom) / E.y,
    left: (h.left - $.left + m.left) / E.x,
    right: ($.right - h.right + m.right) / E.x
  };
}
const J2 = (e) => ({
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
    const d = Gf(u), g = {
      x: n,
      y: r
    }, y = Ai(o), m = Oi(y), p = await s.getDimensions(l), f = y === "y", h = f ? "top" : "left", w = f ? "bottom" : "right", O = f ? "clientHeight" : "clientWidth", E = a.reference[m] + a.reference[y] - g[y] - a.floating[m], $ = g[y] - a.reference[y], z = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let q = z ? z[O] : 0;
    (!q || !await (s.isElement == null ? void 0 : s.isElement(z))) && (q = i.floating[O] || a.floating[m]);
    const G = E / 2 - $ / 2, R = q / 2 - p[m] / 2 - 1, k = Qt(d[h], R), N = Qt(d[w], R), v = k, A = q - p[m] - N, C = q / 2 - p[m] / 2 + G, S = Ns(v, C, A), W = !c.arrow && Hn(o) != null && C !== S && a.reference[m] / 2 - (C < v ? k : N) - p[m] / 2 < 0, I = W ? C < v ? C - v : C - A : 0;
    return {
      [y]: g[y] + I,
      data: {
        [y]: S,
        centerOffset: C - S - I,
        ...W && {
          alignmentOffset: I
        }
      },
      reset: W
    };
  }
}), Q2 = function(e) {
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
        fallbackPlacements: g,
        fallbackStrategy: y = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: p = !0,
        ...f
      } = Bt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const h = Mt(o), w = It(i), O = Mt(i) === i, E = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), $ = g || (O || !p ? [fo(i)] : W2(i)), z = m !== "none";
      !g && z && $.push(...G2(i, p, m, E));
      const q = [i, ...$], G = await fr(t, f), R = [];
      let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && R.push(G[h]), d) {
        const S = H2(o, s, E);
        R.push(G[S[0]], G[S[1]]);
      }
      if (k = [...k, {
        placement: o,
        overflows: R
      }], !R.every((S) => S <= 0)) {
        var N, v;
        const S = (((N = a.flip) == null ? void 0 : N.index) || 0) + 1, W = q[S];
        if (W) {
          var A;
          const T = d === "alignment" ? w !== It(W) : !1, X = ((A = k[0]) == null ? void 0 : A.overflows[0]) > 0;
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
        let I = (v = k.filter((T) => T.overflows[0] <= 0).sort((T, X) => T.overflows[1] - X.overflows[1])[0]) == null ? void 0 : v.placement;
        if (!I)
          switch (y) {
            case "bestFit": {
              var C;
              const T = (C = k.filter((X) => {
                if (z) {
                  const ae = It(X.placement);
                  return ae === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ae === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((ae) => ae > 0).reduce((ae, Fe) => ae + Fe, 0)]).sort((X, ae) => X[1] - ae[1])[0]) == null ? void 0 : C[0];
              T && (I = T);
              break;
            }
            case "initialPlacement":
              I = i;
              break;
          }
        if (o !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function ic(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function lc(e) {
  return z2.some((t) => e[t] >= 0);
}
const Z2 = function(e) {
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
          }), s = ic(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: lc(s)
            }
          };
        }
        case "escaped": {
          const a = await fr(t, {
            ...o,
            altBoundary: !0
          }), s = ic(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: lc(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function eS(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Mt(n), i = Hn(n), c = It(n) === "y", l = ["left", "top"].includes(s) ? -1 : 1, u = a && c ? -1 : 1, d = Bt(t, e);
  let {
    mainAxis: g,
    crossAxis: y,
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
  return i && typeof m == "number" && (y = i === "end" ? m * -1 : m), c ? {
    x: y * u,
    y: g * l
  } : {
    x: g * l,
    y: y * u
  };
}
const tS = function(e) {
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
      } = t, c = await eS(t, e);
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
}, nS = function(e) {
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
              x: h,
              y: w
            } = f;
            return {
              x: h,
              y: w
            };
          }
        },
        ...c
      } = Bt(e, t), l = {
        x: n,
        y: r
      }, u = await fr(t, c), d = It(Mt(o)), g = xi(d);
      let y = l[g], m = l[d];
      if (a) {
        const f = g === "y" ? "top" : "left", h = g === "y" ? "bottom" : "right", w = y + u[f], O = y - u[h];
        y = Ns(w, y, O);
      }
      if (s) {
        const f = d === "y" ? "top" : "left", h = d === "y" ? "bottom" : "right", w = m + u[f], O = m - u[h];
        m = Ns(w, m, O);
      }
      const p = i.fn({
        ...t,
        [g]: y,
        [d]: m
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [g]: a,
            [d]: s
          }
        }
      };
    }
  };
}, rS = function(e) {
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
      }, d = It(o), g = xi(d);
      let y = u[g], m = u[d];
      const p = Bt(i, t), f = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (c) {
        const O = g === "y" ? "height" : "width", E = a.reference[g] - a.floating[O] + f.mainAxis, $ = a.reference[g] + a.reference[O] - f.mainAxis;
        y < E ? y = E : y > $ && (y = $);
      }
      if (l) {
        var h, w;
        const O = g === "y" ? "width" : "height", E = ["top", "left"].includes(Mt(o)), $ = a.reference[d] - a.floating[O] + (E && ((h = s.offset) == null ? void 0 : h[d]) || 0) + (E ? 0 : f.crossAxis), z = a.reference[d] + a.reference[O] + (E ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (E ? f.crossAxis : 0);
        m < $ ? m = $ : m > z && (m = z);
      }
      return {
        [g]: y,
        [d]: m
      };
    }
  };
}, oS = function(e) {
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
      } = Bt(e, t), u = await fr(t, l), d = Mt(o), g = Hn(o), y = It(o) === "y", {
        width: m,
        height: p
      } = a.floating;
      let f, h;
      d === "top" || d === "bottom" ? (f = d, h = g === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (h = d, f = g === "end" ? "top" : "bottom");
      const w = p - u.top - u.bottom, O = m - u.left - u.right, E = Qt(p - u[f], w), $ = Qt(m - u[h], O), z = !t.middlewareData.shift;
      let q = E, G = $;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (G = O), (r = t.middlewareData.shift) != null && r.enabled.y && (q = w), z && !g) {
        const k = Ze(u.left, 0), N = Ze(u.right, 0), v = Ze(u.top, 0), A = Ze(u.bottom, 0);
        y ? G = m - 2 * (k !== 0 || N !== 0 ? k + N : Ze(u.left, u.right)) : q = p - 2 * (v !== 0 || A !== 0 ? v + A : Ze(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: G,
        availableHeight: q
      });
      const R = await s.getDimensions(i.floating);
      return m !== R.width || p !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function To() {
  return typeof window < "u";
}
function vn(e) {
  return Ci(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kt(e) {
  var t;
  return (t = (Ci(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ci(e) {
  return To() ? e instanceof Node || e instanceof et(e).Node : !1;
}
function mt(e) {
  return To() ? e instanceof Element || e instanceof et(e).Element : !1;
}
function Et(e) {
  return To() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1;
}
function uc(e) {
  return !To() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot;
}
function Or(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ht(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function aS(e) {
  return ["table", "td", "th"].includes(vn(e));
}
function Fo(e) {
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
function sS(e) {
  let t = Zt(e);
  for (; Et(t) && !Bn(t); ) {
    if (Ei(t))
      return t;
    if (Fo(t))
      return null;
    t = Zt(t);
  }
  return null;
}
function Pi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Bn(e) {
  return ["html", "body", "#document"].includes(vn(e));
}
function ht(e) {
  return et(e).getComputedStyle(e);
}
function Ro(e) {
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
    uc(e) && e.host || // Fallback.
    kt(e)
  );
  return uc(t) ? t.host : t;
}
function Yf(e) {
  const t = Zt(e);
  return Bn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Et(t) && Or(t) ? t : Yf(t);
}
function pr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Yf(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = et(o);
  if (a) {
    const i = qs(s);
    return t.concat(s, s.visualViewport || [], Or(o) ? o : [], i && n ? pr(i) : []);
  }
  return t.concat(o, pr(o, [], n));
}
function qs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Xf(e) {
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
    return Ct(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Xf(t);
  let s = (a ? co(n.width) : n.width) / r, i = (a ? co(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const iS = /* @__PURE__ */ Ct(0);
function Jf(e) {
  const t = et(e);
  return !Pi() || !t.visualViewport ? iS : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function lS(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== et(e) ? !1 : t;
}
function mn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ki(e);
  let s = Ct(1);
  t && (r ? mt(r) && (s = In(r)) : s = In(e));
  const i = lS(a, n, r) ? Jf(a) : Ct(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const g = et(a), y = r && mt(r) ? et(r) : r;
    let m = g, p = qs(m);
    for (; p && r && y !== m; ) {
      const f = In(p), h = p.getBoundingClientRect(), w = ht(p), O = h.left + (p.clientLeft + parseFloat(w.paddingLeft)) * f.x, E = h.top + (p.clientTop + parseFloat(w.paddingTop)) * f.y;
      c *= f.x, l *= f.y, u *= f.x, d *= f.y, c += O, l += E, m = et(p), p = qs(m);
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
  const n = Ro(e).scrollLeft;
  return t ? t.left + n : mn(kt(e)).left + n;
}
function Qf(e, t, n) {
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
function uS(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = kt(r), i = t ? Fo(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Ct(1);
  const u = Ct(0), d = Et(r);
  if ((d || !d && !a) && ((vn(r) !== "body" || Or(s)) && (c = Ro(r)), Et(r))) {
    const y = mn(r);
    l = In(r), u.x = y.x + r.clientLeft, u.y = y.y + r.clientTop;
  }
  const g = s && !d && !a ? Qf(s, c, !0) : Ct(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + g.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + g.y
  };
}
function cS(e) {
  return Array.from(e.getClientRects());
}
function dS(e) {
  const t = kt(e), n = Ro(e), r = e.ownerDocument.body, o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + $i(e);
  const i = -n.scrollTop;
  return ht(r).direction === "rtl" && (s += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function fS(e, t) {
  const n = et(e), r = kt(e), o = n.visualViewport;
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
function pS(e, t) {
  const n = mn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Et(e) ? In(e) : Ct(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function cc(e, t, n) {
  let r;
  if (t === "viewport")
    r = fS(e, n);
  else if (t === "document")
    r = dS(kt(e));
  else if (mt(t))
    r = pS(t, n);
  else {
    const o = Jf(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return po(r);
}
function Zf(e, t) {
  const n = Zt(e);
  return n === t || !mt(n) || Bn(n) ? !1 : ht(n).position === "fixed" || Zf(n, t);
}
function mS(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = pr(e, [], !1).filter((i) => mt(i) && vn(i) !== "body"), o = null;
  const a = ht(e).position === "fixed";
  let s = a ? Zt(e) : e;
  for (; mt(s) && !Bn(s); ) {
    const i = ht(s), c = Ei(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Or(s) && !c && Zf(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Zt(s);
  }
  return t.set(e, r), r;
}
function hS(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Fo(t) ? [] : mS(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
    const d = cc(t, u, o);
    return l.top = Ze(d.top, l.top), l.right = Qt(d.right, l.right), l.bottom = Qt(d.bottom, l.bottom), l.left = Ze(d.left, l.left), l;
  }, cc(t, i, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function yS(e) {
  const {
    width: t,
    height: n
  } = Xf(e);
  return {
    width: t,
    height: n
  };
}
function gS(e, t, n) {
  const r = Et(t), o = kt(t), a = n === "fixed", s = mn(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ct(0);
  function l() {
    c.x = $i(o);
  }
  if (r || !r && !a)
    if ((vn(t) !== "body" || Or(o)) && (i = Ro(t)), r) {
      const y = mn(t, !0, a, t);
      c.x = y.x + t.clientLeft, c.y = y.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? Qf(o, i) : Ct(0), d = s.left + i.scrollLeft - c.x - u.x, g = s.top + i.scrollTop - c.y - u.y;
  return {
    x: d,
    y: g,
    width: s.width,
    height: s.height
  };
}
function Ka(e) {
  return ht(e).position === "static";
}
function dc(e, t) {
  if (!Et(e) || ht(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return kt(e) === n && (n = n.ownerDocument.body), n;
}
function ep(e, t) {
  const n = et(e);
  if (Fo(e))
    return n;
  if (!Et(e)) {
    let o = Zt(e);
    for (; o && !Bn(o); ) {
      if (mt(o) && !Ka(o))
        return o;
      o = Zt(o);
    }
    return n;
  }
  let r = dc(e, t);
  for (; r && aS(r) && Ka(r); )
    r = dc(r, t);
  return r && Bn(r) && Ka(r) && !Ei(r) ? n : r || sS(e) || n;
}
const vS = async function(e) {
  const t = this.getOffsetParent || ep, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: gS(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function bS(e) {
  return ht(e).direction === "rtl";
}
const wS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: uS,
  getDocumentElement: kt,
  getClippingRect: hS,
  getOffsetParent: ep,
  getElementRects: vS,
  getClientRects: cS,
  getDimensions: yS,
  getScale: In,
  isElement: mt,
  isRTL: bS
};
function tp(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function SS(e, t) {
  let n = null, r;
  const o = kt(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: g,
      height: y
    } = l;
    if (i || t(), !g || !y)
      return;
    const m = Br(d), p = Br(o.clientWidth - (u + g)), f = Br(o.clientHeight - (d + y)), h = Br(u), O = {
      rootMargin: -m + "px " + -p + "px " + -f + "px " + -h + "px",
      threshold: Ze(0, Qt(1, c)) || 1
    };
    let E = !0;
    function $(z) {
      const q = z[0].intersectionRatio;
      if (q !== c) {
        if (!E)
          return s();
        q ? s(!1, q) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      q === 1 && !tp(l, e.getBoundingClientRect()) && s(), E = !1;
    }
    try {
      n = new IntersectionObserver($, {
        ...O,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver($, O);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function xS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = ki(e), u = o || a ? [...l ? pr(l) : [], ...pr(t)] : [];
  u.forEach((h) => {
    o && h.addEventListener("scroll", n, {
      passive: !0
    }), a && h.addEventListener("resize", n);
  });
  const d = l && i ? SS(l, n) : null;
  let g = -1, y = null;
  s && (y = new ResizeObserver((h) => {
    let [w] = h;
    w && w.target === l && y && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var O;
      (O = y) == null || O.observe(t);
    })), n();
  }), l && !c && y.observe(l), y.observe(t));
  let m, p = c ? mn(e) : null;
  c && f();
  function f() {
    const h = mn(e);
    p && !tp(p, h) && n(), p = h, m = requestAnimationFrame(f);
  }
  return n(), () => {
    var h;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), d == null || d(), (h = y) == null || h.disconnect(), y = null, c && cancelAnimationFrame(m);
  };
}
const OS = tS, AS = nS, fc = Q2, CS = oS, ES = Z2, PS = J2, kS = rS, $S = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: wS,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return X2(e, t, {
    ...o,
    platform: a
  });
};
function DS(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function zs(e) {
  if (DS(e)) {
    const t = e.$el;
    return Ci(t) && vn(t) === "#comment" ? null : t;
  }
  return e;
}
function $n(e) {
  return typeof e == "function" ? e() : b(e);
}
function TS(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = zs($n(e.element));
      return n == null ? {} : PS({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function np(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function pc(e, t) {
  const n = np(e);
  return Math.round(t * n) / n;
}
function FS(e, t, n) {
  n === void 0 && (n = {});
  const r = n.whileElementsMounted, o = V(() => {
    var q;
    return (q = $n(n.open)) != null ? q : !0;
  }), a = V(() => $n(n.middleware)), s = V(() => {
    var q;
    return (q = $n(n.placement)) != null ? q : "bottom";
  }), i = V(() => {
    var q;
    return (q = $n(n.strategy)) != null ? q : "absolute";
  }), c = V(() => {
    var q;
    return (q = $n(n.transform)) != null ? q : !0;
  }), l = V(() => zs(e.value)), u = V(() => zs(t.value)), d = _(0), g = _(0), y = _(i.value), m = _(s.value), p = mr({}), f = _(!1), h = V(() => {
    const q = {
      position: y.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return q;
    const G = pc(u.value, d.value), R = pc(u.value, g.value);
    return c.value ? {
      ...q,
      transform: "translate(" + G + "px, " + R + "px)",
      ...np(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: y.value,
      left: G + "px",
      top: R + "px"
    };
  });
  let w;
  function O() {
    if (l.value == null || u.value == null)
      return;
    const q = o.value;
    $S(l.value, u.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((G) => {
      d.value = G.x, g.value = G.y, y.value = G.strategy, m.value = G.placement, p.value = G.middlewareData, f.value = q !== !1;
    });
  }
  function E() {
    typeof w == "function" && (w(), w = void 0);
  }
  function $() {
    if (E(), r === void 0) {
      O();
      return;
    }
    if (l.value != null && u.value != null) {
      w = r(l.value, u.value, O);
      return;
    }
  }
  function z() {
    o.value || (f.value = !1);
  }
  return ne([a, s, i, o], O, {
    flush: "sync"
  }), ne([l, u], $, {
    flush: "sync"
  }), ne(o, z, {
    flush: "sync"
  }), Ec() && Pc(E), {
    x: En(d),
    y: En(g),
    strategy: En(y),
    placement: En(m),
    middlewareData: En(p),
    isPositioned: En(f),
    floatingStyles: h,
    update: O
  };
}
function Di(e) {
  return e ? e.flatMap((t) => t.type === re ? Di(t.children) : [t]) : [];
}
const Vs = H({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      var c, l;
      if (!n.default)
        return null;
      const r = Di(n.default()), o = r.findIndex((u) => u.type !== kc);
      if (o === -1)
        return r;
      const a = r[o];
      (c = a.props) == null || delete c.ref;
      const s = a.props ? ie(t, a.props) : t;
      t.class && ((l = a.props) != null && l.class) && delete a.props.class;
      const i = Up(a, s);
      for (const u in s)
        u.startsWith("on") && (i.props || (i.props = {}), i.props[u] = s[u]);
      return r.length === 1 ? i : (r[o] = i, r);
    };
  }
}), RS = ["area", "img", "input"], ke = H({
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
    return typeof r == "string" && RS.includes(r) ? () => qe(r, t) : r !== "template" ? () => qe(e.as, t, { default: n.default }) : () => qe(Vs, t, { default: n.default });
  }
}), IS = /* @__PURE__ */ H({
  __name: "VisuallyHidden",
  props: {
    feature: { default: "focusable" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(e) {
    return (t, n) => (x(), U(b(ke), {
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
function _S(e, t) {
  var n;
  const r = mr();
  return ot(() => {
    r.value = e();
  }, {
    ...t,
    flush: (n = void 0) != null ? n : "sync"
  }), $c(r);
}
function Ar(e) {
  return Ec() ? (Pc(e), !0) : !1;
}
function LS() {
  const e = /* @__PURE__ */ new Set(), t = (a) => {
    e.delete(a);
  };
  return {
    on: (a) => {
      e.add(a);
      const s = () => t(a);
      return Ar(s), {
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
function BS(e) {
  let t = !1, n;
  const r = Dc(!0);
  return (...o) => (t || (n = r.run(() => e(...o)), t = !0), n);
}
function rp(e) {
  let t = 0, n, r;
  const o = () => {
    t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
  };
  return (...a) => (t += 1, r || (r = Dc(!0), n = r.run(() => e(...a))), Ar(o), n);
}
const qt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const MS = (e) => typeof e < "u", NS = Object.prototype.toString, jS = (e) => NS.call(e) === "[object Object]", mc = /* @__PURE__ */ qS();
function qS() {
  var e, t;
  return qt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function zS(e) {
  return gn();
}
function Ga(e) {
  return Array.isArray(e) ? e : [e];
}
function op(e, t = 1e4) {
  return Wp((n, r) => {
    let o = Rt(e), a;
    const s = () => setTimeout(() => {
      o = Rt(e), r();
    }, Rt(t));
    return Ar(() => {
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
function VS(e, t) {
  zS() && Hp(e, t);
}
function ap(e, t, n = {}) {
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
    }, Rt(t));
  }
  return r && (a.value = !0, qt && l()), Ar(c), {
    isPending: $c(a),
    start: l,
    stop: c
  };
}
function US(e, t, n) {
  return ne(
    e,
    t,
    {
      ...n,
      immediate: !0
    }
  );
}
const Ti = qt ? window : void 0;
function Wn(e) {
  var t;
  const n = Rt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
function hn(...e) {
  const t = [], n = () => {
    t.forEach((i) => i()), t.length = 0;
  }, r = (i, c, l, u) => (i.addEventListener(c, l, u), () => i.removeEventListener(c, l, u)), o = V(() => {
    const i = Ga(Rt(e[0])).filter((c) => c != null);
    return i.every((c) => typeof c != "string") ? i : void 0;
  }), a = US(
    () => {
      var i, c;
      return [
        (c = (i = o.value) == null ? void 0 : i.map((l) => Wn(l))) != null ? c : [Ti].filter((l) => l != null),
        Ga(Rt(o.value ? e[1] : e[0])),
        Ga(b(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Rt(o.value ? e[3] : e[2])
      ];
    },
    ([i, c, l, u]) => {
      if (n(), !(i != null && i.length) || !(c != null && c.length) || !(l != null && l.length))
        return;
      const d = jS(u) ? { ...u } : u;
      t.push(
        ...i.flatMap(
          (g) => c.flatMap(
            (y) => l.map((m) => r(g, y, m, d))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    a(), n();
  };
  return Ar(n), s;
}
function HS() {
  const e = mr(!1), t = gn();
  return t && pe(() => {
    e.value = !0;
  }, t), e;
}
function WS(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function KS(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ti,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = r, c = WS(t);
  return hn(o, a, (u) => {
    u.repeat && Rt(i) || c(u) && n(u);
  }, s);
}
function GS(e) {
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
    shouldEmit: g
  } = r, y = gn(), m = n || (y == null ? void 0 : y.emit) || ((o = y == null ? void 0 : y.$emit) == null ? void 0 : o.bind(y)) || ((s = (a = y == null ? void 0 : y.proxy) == null ? void 0 : a.$emit) == null ? void 0 : s.bind(y == null ? void 0 : y.proxy));
  let p = l;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const f = (O) => i ? typeof i == "function" ? i(O) : GS(O) : O, h = () => MS(e[t]) ? f(e[t]) : d, w = (O) => {
    g ? g(O) && m(p, O) : m(p, O);
  };
  if (c) {
    const O = h(), E = _(O);
    let $ = !1;
    return ne(
      () => e[t],
      (z) => {
        $ || ($ = !0, E.value = f(z), Te(() => $ = !1));
      }
    ), ne(
      E,
      (z) => {
        !$ && (z !== e[t] || u) && w(z);
      },
      { deep: u }
    ), E;
  } else
    return V({
      get() {
        return h();
      },
      set(O) {
        w(O);
      }
    });
}
function at(e, t) {
  const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
  return [(s) => {
    const i = Gs(r, s);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(
        ", "
      )}` : `\`${e}\``}`
    );
  }, (s) => (Ys(r, s), s)];
}
const [Fi, rA] = at("ConfigProvider");
function Ri(e) {
  const t = Fi({
    dir: _("ltr")
  });
  return V(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function le() {
  const e = gn(), t = _(), n = V(() => {
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
const [sp, YS] = at("CollapsibleRoot"), Ii = /* @__PURE__ */ H({
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
    return YS({
      contentId: "",
      disabled: s,
      open: a,
      unmountOnHide: i,
      onOpenToggle: () => {
        a.value = !a.value;
      }
    }), t({ open: a }), le(), (c, l) => (x(), U(b(ke), {
      as: c.as,
      "as-child": r.asChild,
      "data-state": b(a) ? "open" : "closed",
      "data-disabled": b(s) ? "" : void 0
    }, {
      default: M(() => [
        j(c.$slots, "default", { open: b(a) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), XS = ["INPUT", "TEXTAREA"];
function JS(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && XS.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: o = "both",
    attributeName: a = "[data-reka-collection-item]",
    itemsArray: s = [],
    loop: i = !0,
    dir: c = "ltr",
    preventScroll: l = !0,
    focus: u = !1
  } = r, [d, g, y, m, p, f] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], h = y || m, w = d || g;
  if (!p && !f && (!h && !w || o === "vertical" && w || o === "horizontal" && h))
    return null;
  const O = n ? Array.from(n.querySelectorAll(a)) : s;
  if (!O.length)
    return null;
  l && e.preventDefault();
  let E = null;
  return w || h ? E = ip(O, t, {
    goForward: h ? m : c === "ltr" ? d : g,
    loop: i
  }) : p ? E = O.at(0) || null : f && (E = O.at(-1) || null), u && (E == null || E.focus()), E;
}
function ip(e, t, n, r = e.length) {
  if (--r === 0)
    return null;
  const o = e.indexOf(t), a = n.goForward ? o + 1 : o - 1;
  if (!n.loop && (a < 0 || a >= e.length))
    return null;
  const s = (a + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? ip(
    e,
    i,
    n,
    r
  ) : i : null;
}
let QS = 0;
function yn(e, t = "reka") {
  const n = Fi({ useId: void 0 });
  return Qi.useId ? `${t}-${Qi.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++QS}`;
}
function ZS(e, t) {
  const n = _(e);
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
function ex(e, t) {
  var f;
  const n = _({}), r = _("none"), o = _(e), a = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((f = t.value) == null ? void 0 : f.ownerDocument.defaultView) ?? Ti, { state: c, dispatch: l } = ZS(a, {
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
  }), u = (h) => {
    var w;
    if (qt) {
      const O = new CustomEvent(h, { bubbles: !1, cancelable: !1 });
      (w = t.value) == null || w.dispatchEvent(O);
    }
  };
  ne(
    e,
    async (h, w) => {
      var E;
      const O = w !== h;
      if (await Te(), O) {
        const $ = r.value, z = Mr(t.value);
        h ? (l("MOUNT"), u("enter"), z === "none" && u("after-enter")) : z === "none" || z === "undefined" || ((E = n.value) == null ? void 0 : E.display) === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : w && $ !== z ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (h) => {
    const w = Mr(t.value), O = w.includes(
      h.animationName
    ), E = c.value === "mounted" ? "enter" : "leave";
    if (h.target === t.value && O && (u(`after-${E}`), l("ANIMATION_END"), !o.value)) {
      const $ = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var z;
        ((z = t.value) == null ? void 0 : z.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = $);
      });
    }
    h.target === t.value && w === "none" && l("ANIMATION_END");
  }, g = (h) => {
    h.target === t.value && (r.value = Mr(t.value));
  }, y = ne(
    t,
    (h, w) => {
      h ? (n.value = getComputedStyle(h), h.addEventListener("animationstart", g), h.addEventListener("animationcancel", d), h.addEventListener("animationend", d)) : (l("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), w == null || w.removeEventListener("animationstart", g), w == null || w.removeEventListener("animationcancel", d), w == null || w.removeEventListener("animationend", d));
    },
    { immediate: !0 }
  ), m = ne(c, () => {
    const h = Mr(t.value);
    r.value = c.value === "mounted" ? h : "none";
  });
  return Pt(() => {
    y(), m();
  }), {
    isPresent: V(
      () => ["mounted", "unmountSuspended"].includes(c.value)
    )
  };
}
function Mr(e) {
  return e && getComputedStyle(e).animationName || "none";
}
const Cr = H({
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
    const { present: r, forceMount: o } = Nt(e), a = _(), { isPresent: s } = ex(r, a);
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
        const d = Wn(u);
        return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? a.value = d.firstElementChild : a.value = d), d;
      }
    }) : null;
  }
}), _i = /* @__PURE__ */ H({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = sp();
    o.contentId || (o.contentId = yn(void 0, "reka-collapsible-content"));
    const a = _(), { forwardRef: s, currentElement: i } = le(), c = _(0), l = _(0), u = V(() => o.open.value), d = _(u.value), g = _();
    ne(
      () => {
        var m;
        return [u.value, (m = a.value) == null ? void 0 : m.present];
      },
      async () => {
        await Te();
        const m = i.value;
        if (!m)
          return;
        g.value = g.value || {
          transitionDuration: m.style.transitionDuration,
          animationName: m.style.animationName
        }, m.style.transitionDuration = "0s", m.style.animationName = "none";
        const p = m.getBoundingClientRect();
        l.value = p.height, c.value = p.width, d.value || (m.style.transitionDuration = g.value.transitionDuration, m.style.animationName = g.value.animationName);
      },
      {
        immediate: !0
      }
    );
    const y = V(() => d.value && o.open.value);
    return pe(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), hn(i, "beforematch", (m) => {
      requestAnimationFrame(() => {
        o.onOpenToggle(), r("contentFound");
      });
    }), (m, p) => (x(), U(b(Cr), {
      ref_key: "presentRef",
      ref: a,
      present: m.forceMount || b(o).open.value,
      "force-mount": !0
    }, {
      default: M(({ present: f }) => {
        var h;
        return [
          Q(b(ke), ie(m.$attrs, {
            id: b(o).contentId,
            ref: b(s),
            "as-child": n.asChild,
            as: m.as,
            hidden: f ? void 0 : b(o).unmountOnHide.value ? "" : "until-found",
            "data-state": y.value ? void 0 : b(o).open.value ? "open" : "closed",
            "data-disabled": (h = b(o).disabled) != null && h.value ? "" : void 0,
            style: {
              "--reka-collapsible-content-height": `${l.value}px`,
              "--reka-collapsible-content-width": `${c.value}px`
            }
          }), {
            default: M(() => [
              !b(o).unmountOnHide.value || f ? j(m.$slots, "default", { key: 0 }) : Y("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Li = /* @__PURE__ */ H({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = sp();
    return (r, o) => {
      var a, s;
      return x(), U(b(ke), {
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
        default: M(() => [
          j(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
}), [$t, tx] = at("DialogRoot"), nx = /* @__PURE__ */ H({
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
    }), a = _(), s = _(), { modal: i } = Nt(n);
    return tx({
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
}), rx = /* @__PURE__ */ H({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = $t();
    return (r, o) => (x(), U(b(ke), ie(t, {
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
function Er(e) {
  const t = gn(), n = t == null ? void 0 : t.type.emits, r = {};
  return n != null && n.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), n == null || n.forEach((o) => {
    r[Kp(Tc(o))] = (...a) => e(o, ...a);
  }), r;
}
function lp(e, t, n) {
  const r = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(o);
}
const ox = "dismissableLayer.pointerDownOutside", ax = "dismissableLayer.focusOutside";
function up(e, t) {
  const n = t.closest(
    "[data-dismissable-layer]"
  ), r = e.dataset.dismissableLayer === "" ? e : e.querySelector(
    "[data-dismissable-layer]"
  ), o = Array.from(
    e.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
}
function sx(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = _(!1), o = _(() => {
  });
  return ot((s) => {
    if (!qt)
      return;
    const i = async (l) => {
      const u = l.target;
      if (!(!(t != null && t.value) || !u)) {
        if (up(t.value, u)) {
          r.value = !1;
          return;
        }
        if (l.target && !r.value) {
          let d = function() {
            lp(
              ox,
              e,
              g
            );
          };
          const g = { originalEvent: l };
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
function ix(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = _(!1);
  return ot((a) => {
    if (!qt)
      return;
    const s = async (i) => {
      if (!(t != null && t.value))
        return;
      await Te(), await Te();
      const c = i.target;
      !t.value || !c || up(t.value, c) || i.target && !r.value && lp(
        ax,
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
const Ft = hr({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Bi = /* @__PURE__ */ H({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = le(), s = V(
      () => {
        var m;
        return ((m = a.value) == null ? void 0 : m.ownerDocument) ?? globalThis.document;
      }
    ), i = V(() => Ft.layersRoot), c = V(() => a.value ? Array.from(i.value).indexOf(a.value) : -1), l = V(() => Ft.layersWithOutsidePointerEventsDisabled.size > 0), u = V(() => {
      const m = Array.from(i.value), [p] = [...Ft.layersWithOutsidePointerEventsDisabled].slice(-1), f = m.indexOf(p);
      return c.value >= f;
    }), d = sx(async (m) => {
      const p = [...Ft.branches].some(
        (f) => f == null ? void 0 : f.contains(m.target)
      );
      !u.value || p || (r("pointerDownOutside", m), r("interactOutside", m), await Te(), m.defaultPrevented || r("dismiss"));
    }, a), g = ix((m) => {
      [...Ft.branches].some(
        (f) => f == null ? void 0 : f.contains(m.target)
      ) || (r("focusOutside", m), r("interactOutside", m), m.defaultPrevented || r("dismiss"));
    }, a);
    KS("Escape", (m) => {
      c.value === i.value.size - 1 && (r("escapeKeyDown", m), m.defaultPrevented || r("dismiss"));
    });
    let y;
    return ot((m) => {
      a.value && (n.disableOutsidePointerEvents && (Ft.layersWithOutsidePointerEventsDisabled.size === 0 && (y = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), Ft.layersWithOutsidePointerEventsDisabled.add(a.value)), i.value.add(a.value), m(() => {
        n.disableOutsidePointerEvents && Ft.layersWithOutsidePointerEventsDisabled.size === 1 && (s.value.body.style.pointerEvents = y);
      }));
    }), ot((m) => {
      m(() => {
        a.value && (i.value.delete(a.value), Ft.layersWithOutsidePointerEventsDisabled.delete(a.value));
      });
    }), (m, p) => (x(), U(b(ke), {
      ref: b(o),
      "as-child": m.asChild,
      as: m.as,
      "data-dismissable-layer": "",
      style: dt({
        pointerEvents: l.value ? u.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: b(g).onFocusCapture,
      onBlurCapture: b(g).onBlurCapture,
      onPointerdownCapture: b(d).onPointerDownCapture
    }, {
      default: M(() => [
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
const lx = "menu.itemSelect", Us = ["Enter", " "], ux = ["ArrowDown", "PageUp", "Home"], cp = ["ArrowUp", "PageDown", "End"], cx = [...ux, ...cp];
[...Us], [...Us];
function dp(e) {
  return e ? "open" : "closed";
}
function dx(e) {
  const t = Ge();
  for (const n of e)
    if (n === t || (n.focus(), Ge() !== t))
      return;
}
function fx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function px(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return fx(n, t);
}
function Hs(e) {
  return e.pointerType === "mouse";
}
const mx = "DialogTitle", hx = "DialogContent";
function yx({
  titleName: e = mx,
  contentName: t = hx,
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
const gx = BS(() => _([]));
function vx() {
  const e = gx();
  return {
    add(t) {
      const n = e.value[0];
      t !== n && (n == null || n.pause()), e.value = hc(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var n;
      e.value = hc(e.value, t), (n = e.value[0]) == null || n.resume();
    }
  };
}
function hc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function bx(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ya = "focusScope.autoFocusOnMount", Xa = "focusScope.autoFocusOnUnmount", yc = { bubbles: !1, cancelable: !0 };
function wx(e, { select: t = !1 } = {}) {
  const n = Ge();
  for (const r of e)
    if (Wt(r, { select: t }), Ge() !== n)
      return !0;
}
function Sx(e) {
  const t = fp(e), n = gc(t, e), r = gc(t.reverse(), e);
  return [n, r];
}
function fp(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function gc(e, t) {
  for (const n of e)
    if (!xx(n, { upTo: t }))
      return n;
}
function xx(e, { upTo: t }) {
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
function Ox(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Wt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ge();
    e.focus({ preventScroll: !0 }), e !== n && Ox(e) && t && e.select();
  }
}
const pp = /* @__PURE__ */ H({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: a } = le(), s = _(null), i = vx(), c = hr({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    ot((u) => {
      if (!qt)
        return;
      const d = a.value;
      if (!n.trapped)
        return;
      function g(f) {
        if (c.paused || !d)
          return;
        const h = f.target;
        d.contains(h) ? s.value = h : Wt(s.value, { select: !0 });
      }
      function y(f) {
        if (c.paused || !d)
          return;
        const h = f.relatedTarget;
        h !== null && (d.contains(h) || Wt(s.value, { select: !0 }));
      }
      function m(f) {
        d.contains(s.value) || Wt(d);
      }
      document.addEventListener("focusin", g), document.addEventListener("focusout", y);
      const p = new MutationObserver(m);
      d && p.observe(d, { childList: !0, subtree: !0 }), u(() => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", y), p.disconnect();
      });
    }), ot(async (u) => {
      const d = a.value;
      if (await Te(), !d)
        return;
      i.add(c);
      const g = Ge();
      if (!d.contains(g)) {
        const m = new CustomEvent(Ya, yc);
        d.addEventListener(Ya, (p) => r("mountAutoFocus", p)), d.dispatchEvent(m), m.defaultPrevented || (wx(bx(fp(d)), {
          select: !0
        }), Ge() === g && Wt(d));
      }
      u(() => {
        d.removeEventListener(Ya, (f) => r("mountAutoFocus", f));
        const m = new CustomEvent(Xa, yc), p = (f) => {
          r("unmountAutoFocus", f);
        };
        d.addEventListener(Xa, p), d.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Wt(g ?? document.body, { select: !0 }), d.removeEventListener(Xa, p), i.remove(c);
        }, 0);
      });
    });
    function l(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, g = Ge();
      if (d && g) {
        const y = u.currentTarget, [m, p] = Sx(y);
        m && p ? !u.shiftKey && g === p ? (u.preventDefault(), n.loop && Wt(m, { select: !0 })) : u.shiftKey && g === m && (u.preventDefault(), n.loop && Wt(p, { select: !0 })) : g === y && u.preventDefault();
      }
    }
    return (u, d) => (x(), U(b(ke), {
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
}), mp = /* @__PURE__ */ H({
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
    const n = e, r = t, o = $t(), { forwardRef: a, currentElement: s } = le();
    return o.titleId || (o.titleId = yn(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = yn(void 0, "reka-dialog-description")), pe(() => {
      o.contentElement = s, Ge() !== document.body && (o.triggerElement.value = Ge());
    }), process.env.NODE_ENV !== "production" && yx({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, c) => (x(), U(b(pp), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: c[5] || (c[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: c[6] || (c[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: M(() => [
        Q(b(Bi), ie({
          id: b(o).contentId,
          ref: b(a),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": b(o).descriptionId,
          "aria-labelledby": b(o).titleId,
          "data-state": b(dp)(b(o).open.value)
        }, i.$attrs, {
          onDismiss: c[0] || (c[0] = (l) => b(o).onOpenChange(!1)),
          onEscapeKeyDown: c[1] || (c[1] = (l) => r("escapeKeyDown", l)),
          onFocusOutside: c[2] || (c[2] = (l) => r("focusOutside", l)),
          onInteractOutside: c[3] || (c[3] = (l) => r("interactOutside", l)),
          onPointerDownOutside: c[4] || (c[4] = (l) => r("pointerDownOutside", l))
        }), {
          default: M(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
});
var Ax = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, kn = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), jr = {}, Ja = 0, hp = function(e) {
  return e && (e.host || hp(e.parentNode));
}, Cx = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = hp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ex = function(e, t, n, r) {
  var o = Cx(t, Array.isArray(e) ? e : [e]);
  jr[n] || (jr[n] = /* @__PURE__ */ new WeakMap());
  var a = jr[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(g) {
      if (i.has(g))
        u(g);
      else
        try {
          var y = g.getAttribute(r), m = y !== null && y !== "false", p = (kn.get(g) || 0) + 1, f = (a.get(g) || 0) + 1;
          kn.set(g, p), a.set(g, f), s.push(g), p === 1 && m && Nr.set(g, !0), f === 1 && g.setAttribute(n, "true"), m || g.setAttribute(r, "true");
        } catch (h) {
          console.error("aria-hidden: cannot operate on ", g, h);
        }
    });
  };
  return u(t), i.clear(), Ja++, function() {
    s.forEach(function(d) {
      var g = kn.get(d) - 1, y = a.get(d) - 1;
      kn.set(d, g), a.set(d, y), g || (Nr.has(d) || d.removeAttribute(r), Nr.delete(d)), y || d.removeAttribute(n);
    }), Ja--, Ja || (kn = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), jr = {});
  };
}, Px = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Ax(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Ex(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function yp(e) {
  let t;
  ne(() => Wn(e), (n) => {
    n ? t = Px(n) : t && t();
  }), Pt(() => {
    t && t();
  });
}
const kx = /* @__PURE__ */ H({
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
    const n = e, r = t, o = $t(), a = Er(r), { forwardRef: s, currentElement: i } = le();
    return yp(i), (c, l) => (x(), U(mp, ie({ ...n, ...b(a) }, {
      ref: b(s),
      "trap-focus": b(o).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var d;
        u.defaultPrevented || (u.preventDefault(), (d = b(o).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: l[1] || (l[1] = (u) => {
        const d = u.detail.originalEvent, g = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || g) && u.preventDefault();
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
}), $x = /* @__PURE__ */ H({
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
    const n = e, o = Er(t);
    le();
    const a = $t(), s = _(!1), i = _(!1);
    return (c, l) => (x(), U(mp, ie({ ...n, ...b(o) }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (u) => {
        var d;
        u.defaultPrevented || (s.value || (d = b(a).triggerElement.value) == null || d.focus(), u.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (u) => {
        var y;
        u.defaultPrevented || (s.value = !0, u.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const d = u.target;
        ((y = b(a).triggerElement.value) == null ? void 0 : y.contains(d)) && u.preventDefault(), u.detail.originalEvent.type === "focusin" && i.value && u.preventDefault();
      })
    }), {
      default: M(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dx = /* @__PURE__ */ H({
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
    const n = e, r = t, o = $t(), a = Er(r), { forwardRef: s } = le();
    return (i, c) => (x(), U(b(Cr), {
      present: i.forceMount || b(o).open.value
    }, {
      default: M(() => [
        b(o).modal.value ? (x(), U(kx, ie({
          key: 0,
          ref: b(s)
        }, { ...n, ...b(a), ...i.$attrs }), {
          default: M(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), U($x, ie({
          key: 1,
          ref: b(s)
        }, { ...n, ...b(a), ...i.$attrs }), {
          default: M(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Tx = /* @__PURE__ */ H({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    le();
    const n = $t();
    return (r, o) => (x(), U(b(ke), ie(t, {
      id: b(n).descriptionId
    }), {
      default: M(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
});
function Qa(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ws(e, t, n = ".", r) {
  if (!Qa(t))
    return Ws(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (r && r(o, a, s, n) || (Array.isArray(s) && Array.isArray(o[a]) ? o[a] = [...s, ...o[a]] : Qa(s) && Qa(o[a]) ? o[a] = Ws(
      s,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = s));
  }
  return o;
}
function Fx(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => Ws(n, r, "", e), {})
  );
}
const Rx = Fx(), Ix = rp(() => {
  const e = _(/* @__PURE__ */ new Map()), t = _(), n = V(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), r = Fi({
    scrollBody: _(!0)
  });
  let o = null;
  const a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", mc && (o == null || o()), t.value = void 0;
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
    const c = window.innerWidth - document.documentElement.clientWidth, l = { padding: c, margin: 0 }, u = (d = r.scrollBody) != null && d.value ? typeof r.scrollBody.value == "object" ? Rx({
      padding: r.scrollBody.value.padding === !0 ? c : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? c : r.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), mc && (o = hn(
      document,
      "touchmove",
      (g) => _x(g),
      { passive: !1 }
    )), Te(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function gp(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Ix();
  n.value.set(t, e ?? !1);
  const r = V({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return VS(() => {
    n.value.delete(t);
  }), r;
}
function vp(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !(n instanceof Element) || n.tagName === "BODY" ? !1 : vp(n);
  }
}
function _x(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && vp(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const Lx = /* @__PURE__ */ H({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $t();
    return gp(!0), le(), (n, r) => (x(), U(b(ke), {
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
}), Bx = /* @__PURE__ */ H({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $t(), { forwardRef: n } = le();
    return (r, o) => {
      var a;
      return (a = b(t)) != null && a.modal.value ? (x(), U(b(Cr), {
        key: 0,
        present: r.forceMount || b(t).open.value
      }, {
        default: M(() => [
          Q(Lx, ie(r.$attrs, {
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
      }, 8, ["present"])) : Y("", !0);
    };
  }
}), Mi = /* @__PURE__ */ H({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = HS();
    return (n, r) => b(t) || n.forceMount ? (x(), U(Fc, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      j(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : Y("", !0);
  }
});
function bp(e) {
  const t = gn(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, a) => {
    const s = (t == null ? void 0 : t.type.props[a]).default;
    return s !== void 0 && (o[a] = s), o;
  }, {}), r = Gp(e);
  return V(() => {
    const o = {}, a = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(a).forEach((s) => {
      o[Tc(s)] = a[s];
    }), Object.keys({ ...n, ...o }).reduce((s, i) => (r.value[i] !== void 0 && (s[i] = r.value[i]), s), {});
  });
}
function Pr(e, t) {
  const n = bp(e), r = t ? Er(t) : {};
  return V(() => ({
    ...n.value,
    ...r
  }));
}
const Mx = /* @__PURE__ */ H({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = $t();
    return le(), (r, o) => (x(), U(b(ke), ie(t, {
      id: b(n).titleId
    }), {
      default: M(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Nx = /* @__PURE__ */ H({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = $t(), { forwardRef: r, currentElement: o } = le();
    return n.contentId || (n.contentId = yn(void 0, "reka-dialog-content")), pe(() => {
      n.triggerElement.value = o.value;
    }), (a, s) => (x(), U(b(ke), ie(t, {
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
function vc() {
  const e = _(), t = V(() => {
    var n, r;
    return ["#text", "#comment"].includes((n = e.value) == null ? void 0 : n.$el.nodeName) ? (r = e.value) == null ? void 0 : r.$el.nextElementSibling : Wn(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const bc = "data-reka-collection-item";
function wp(e = {}) {
  const { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`;
  let o;
  if (n) {
    const u = _(/* @__PURE__ */ new Map());
    o = {
      collectionRef: _(),
      itemMap: u
    }, Ys(r, o);
  } else
    o = Gs(r);
  const a = (u = !1) => {
    const d = o.collectionRef.value;
    if (!d)
      return [];
    const g = Array.from(d.querySelectorAll(`[${bc}]`)), m = Array.from(o.itemMap.value.values()).sort(
      (p, f) => g.indexOf(p.ref) - g.indexOf(f.ref)
    );
    return u ? m : m.filter((p) => p.ref.dataset.disabled !== "");
  }, s = H({
    name: "CollectionSlot",
    setup(u, { slots: d }) {
      const { primitiveElement: g, currentElement: y } = vc();
      return ne(y, () => {
        o.collectionRef.value = y.value;
      }), () => qe(Vs, { ref: g }, d);
    }
  }), i = H({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: {
      value: {
        // It accepts any value
        validator: () => !0
      }
    },
    setup(u, { slots: d, attrs: g }) {
      const { primitiveElement: y, currentElement: m } = vc();
      return ot((p) => {
        if (m.value) {
          const f = ts(m.value);
          o.itemMap.value.set(f, { ref: m.value, value: u.value }), p(() => o.itemMap.value.delete(f));
        }
      }), () => qe(Vs, { ...g, [bc]: "", ref: y }, d);
    }
  }), c = V(() => Array.from(o.itemMap.value.values())), l = V(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: c, itemMapSize: l, CollectionSlot: s, CollectionItem: i };
}
const jx = "rovingFocusGroup.onEntryFocus", qx = { bubbles: !1, cancelable: !0 };
function zx(e, t = !1) {
  const n = Ge();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), Ge() !== n))
      return;
}
const [oA, Vx] = at("RovingFocusGroup"), Ux = /* @__PURE__ */ H({
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
    const r = e, o = n, { loop: a, orientation: s, dir: i } = Nt(r), c = Ri(i), l = Kn(r, "currentTabStopId", o, {
      defaultValue: r.defaultCurrentTabStopId,
      passive: r.currentTabStopId === void 0
    }), u = _(!1), d = _(!1), g = _(0), { getItems: y, CollectionSlot: m } = wp({ isProvider: !0 });
    function p(h) {
      const w = !d.value;
      if (h.currentTarget && h.target === h.currentTarget && w && !u.value) {
        const O = new CustomEvent(jx, qx);
        if (h.currentTarget.dispatchEvent(O), o("entryFocus", O), !O.defaultPrevented) {
          const E = y().map((G) => G.ref).filter((G) => G.dataset.disabled !== ""), $ = E.find((G) => G.getAttribute("data-active") === ""), z = E.find(
            (G) => G.id === l.value
          ), q = [$, z, ...E].filter(
            Boolean
          );
          zx(q, r.preventScrollOnEntryFocus);
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
    }), Vx({
      loop: a,
      dir: c,
      orientation: s,
      currentTabStopId: l,
      onItemFocus: (h) => {
        l.value = h;
      },
      onItemShiftTab: () => {
        u.value = !0;
      },
      onFocusableItemAdd: () => {
        g.value++;
      },
      onFocusableItemRemove: () => {
        g.value--;
      }
    }), (h, w) => (x(), U(b(m), null, {
      default: M(() => [
        Q(b(ke), {
          tabindex: u.value || g.value === 0 ? -1 : 0,
          "data-orientation": b(s),
          as: h.as,
          "as-child": h.asChild,
          dir: b(c),
          style: { outline: "none" },
          onMousedown: w[0] || (w[0] = (O) => d.value = !0),
          onMouseup: f,
          onFocus: p,
          onBlur: w[1] || (w[1] = (O) => u.value = !1)
        }, {
          default: M(() => [
            j(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Sp, Hx] = at("PopperRoot"), xp = /* @__PURE__ */ H({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = _();
    return Hx({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => j(n.$slots, "default");
  }
}), Op = /* @__PURE__ */ H({
  __name: "PopperAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, { forwardRef: n, currentElement: r } = le(), o = Sp();
    return Rc(() => {
      o.onAnchorChange(t.reference ?? r.value);
    }), (a, s) => (x(), U(b(ke), {
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
}), Wx = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, Kx = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, Gx = /* @__PURE__ */ H({
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
    return le(), (n, r) => (x(), U(b(ke), ie(t, {
      width: n.width,
      height: n.height,
      viewBox: n.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: n.asChild ? void 0 : "none"
    }), {
      default: M(() => [
        j(n.$slots, "default", {}, () => [
          n.rounded ? (x(), P("path", Kx)) : (x(), P("path", Wx))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
function Yx(e) {
  return e !== null;
}
function Xx(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var f, h, w;
      const { placement: n, rects: r, middlewareData: o } = t, s = ((f = o.arrow) == null ? void 0 : f.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, u] = Ks(n), d = { start: "0%", center: "50%", end: "100%" }[u], g = (((h = o.arrow) == null ? void 0 : h.x) ?? 0) + i / 2, y = (((w = o.arrow) == null ? void 0 : w.y) ?? 0) + c / 2;
      let m = "", p = "";
      return l === "bottom" ? (m = s ? d : `${g}px`, p = `${-c}px`) : l === "top" ? (m = s ? d : `${g}px`, p = `${r.floating.height + c}px`) : l === "right" ? (m = `${-c}px`, p = s ? d : `${y}px`) : l === "left" && (m = `${r.floating.width + c}px`, p = s ? d : `${y}px`), { data: { x: m, y: p } };
    }
  };
}
function Ks(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function Jx(e) {
  const t = _(), n = V(() => {
    var o;
    return ((o = t.value) == null ? void 0 : o.width) ?? 0;
  }), r = V(() => {
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
const Ap = {
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
}, [Qx, Zx] = at("PopperContent"), Cp = /* @__PURE__ */ H({
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
    ...Ap
  }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Sp(), { forwardRef: a, currentElement: s } = le(), i = _(), c = _(), { width: l, height: u } = Jx(c), d = V(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), g = V(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), y = V(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = V(() => ({
      padding: g.value,
      boundary: y.value.filter(Yx),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: y.value.length > 0
    })), p = _S(() => [
      OS({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && fc({
        ...m.value
      }),
      n.avoidCollisions && AS({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? kS() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && fc({
        ...m.value
      }),
      CS({
        ...m.value,
        apply: ({ elements: N, rects: v, availableWidth: A, availableHeight: C }) => {
          const { width: S, height: W } = v.reference, I = N.floating.style;
          I.setProperty(
            "--reka-popper-available-width",
            `${A}px`
          ), I.setProperty(
            "--reka-popper-available-height",
            `${C}px`
          ), I.setProperty(
            "--reka-popper-anchor-width",
            `${S}px`
          ), I.setProperty(
            "--reka-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      c.value && TS({ element: c.value, padding: n.arrowPadding }),
      Xx({
        arrowWidth: l.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && ES({ strategy: "referenceHidden", ...m.value })
    ]), f = V(() => n.reference ?? o.anchor.value), { floatingStyles: h, placement: w, isPositioned: O, middlewareData: E } = FS(
      f,
      i,
      {
        strategy: n.positionStrategy,
        placement: d,
        whileElementsMounted: (...N) => xS(...N, {
          layoutShift: !n.disableUpdateOnLayoutShift,
          animationFrame: n.updatePositionStrategy === "always"
        }),
        middleware: p
      }
    ), $ = V(
      () => Ks(w.value)[0]
    ), z = V(
      () => Ks(w.value)[1]
    );
    Rc(() => {
      O.value && r("placed");
    });
    const q = V(
      () => {
        var N;
        return ((N = E.value.arrow) == null ? void 0 : N.centerOffset) !== 0;
      }
    ), G = _("");
    ot(() => {
      s.value && (G.value = window.getComputedStyle(s.value).zIndex);
    });
    const R = V(() => {
      var N;
      return ((N = E.value.arrow) == null ? void 0 : N.x) ?? 0;
    }), k = V(() => {
      var N;
      return ((N = E.value.arrow) == null ? void 0 : N.y) ?? 0;
    });
    return Zx({
      placedSide: $,
      onArrowChange: (N) => c.value = N,
      arrowX: R,
      arrowY: k,
      shouldHideArrow: q
    }), (N, v) => {
      var A, C, S;
      return x(), P("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: dt({
          ...b(h),
          transform: b(O) ? b(h).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: G.value,
          "--reka-popper-transform-origin": [
            (A = b(E).transformOrigin) == null ? void 0 : A.x,
            (C = b(E).transformOrigin) == null ? void 0 : C.y
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
        Q(b(ke), ie({ ref: b(a) }, N.$attrs, {
          "as-child": n.asChild,
          as: N.as,
          "data-side": $.value,
          "data-align": z.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: b(O) ? void 0 : "none"
          }
        }), {
          default: M(() => [
            j(N.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), e3 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, t3 = /* @__PURE__ */ H({
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
    const { forwardRef: t } = le(), n = Qx(), r = V(() => e3[n.placedSide.value]);
    return (o, a) => {
      var s, i, c, l;
      return x(), P("span", {
        ref: (u) => {
          b(n).onArrowChange(u);
        },
        style: dt({
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
        Q(Gx, ie(o.$attrs, {
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
function n3(e) {
  const t = op("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (o, a) => {
      t.value = t.value + o;
      {
        const s = Ge(), i = a.map((g) => {
          var y, m;
          return {
            ...g,
            textValue: ((y = g.value) == null ? void 0 : y.textValue) ?? ((m = g.ref.textContent) == null ? void 0 : m.trim()) ?? ""
          };
        }), c = i.find((g) => g.ref === s), l = i.map((g) => g.textValue), u = o3(l, t.value, c == null ? void 0 : c.textValue), d = i.find((g) => g.textValue === u);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function r3(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function o3(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = r3(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function a3() {
  const e = _(!1);
  return pe(() => {
    hn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), hn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const s3 = rp(a3), [Io, i3] = at(["MenuRoot", "MenuSub"], "MenuContext"), [Ni, l3] = at("MenuRoot"), u3 = /* @__PURE__ */ H({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: a } = Nt(n), s = Ri(a), i = Kn(n, "open", r), c = _(), l = s3();
    return i3({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), l3({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: s,
      modal: o
    }), (u, d) => (x(), U(b(xp), null, {
      default: M(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let Za = 0;
function c3() {
  ot((e) => {
    if (!qt)
      return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? wc()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? wc()
    ), Za++, e(() => {
      Za === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), Za--;
    });
  });
}
function wc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [Ep, d3] = at("MenuContent"), Pp = /* @__PURE__ */ H({
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
    ...Ap
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Io(), a = Ni(), { trapFocus: s, disableOutsidePointerEvents: i, loop: c } = Nt(n);
    c3(), gp(i.value);
    const l = _(""), u = _(0), d = _(0), g = _(null), y = _("right"), m = _(0), p = _(null), f = _(), { forwardRef: h, currentElement: w } = le(), { handleTypeaheadSearch: O } = n3();
    ne(w, (R) => {
      o.onContentChange(R);
    }), Pt(() => {
      window.clearTimeout(u.value);
    });
    function E(R) {
      var N, v;
      return y.value === ((N = g.value) == null ? void 0 : N.side) && px(R, (v = g.value) == null ? void 0 : v.area);
    }
    async function $(R) {
      var k;
      r("openAutoFocus", R), !R.defaultPrevented && (R.preventDefault(), (k = w.value) == null || k.focus({
        preventScroll: !0
      }));
    }
    function z(R) {
      var I;
      if (R.defaultPrevented)
        return;
      const N = R.target.closest("[data-reka-menu-content]") === R.currentTarget, v = R.ctrlKey || R.altKey || R.metaKey, A = R.key.length === 1, C = JS(
        R,
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
      if (R.code === "Space")
        return;
      const S = ((I = f.value) == null ? void 0 : I.getItems()) ?? [];
      if (N && (R.key === "Tab" && R.preventDefault(), !v && A && O(R.key, S)), R.target !== w.value || !cx.includes(R.key))
        return;
      R.preventDefault();
      const W = [...S.map((T) => T.ref)];
      cp.includes(R.key) && W.reverse(), dx(W);
    }
    function q(R) {
      var k, N;
      (N = (k = R == null ? void 0 : R.currentTarget) == null ? void 0 : k.contains) != null && N.call(k, R.target) || (window.clearTimeout(u.value), l.value = "");
    }
    function G(R) {
      var v;
      if (!Hs(R))
        return;
      const k = R.target, N = m.value !== R.clientX;
      if ((v = R == null ? void 0 : R.currentTarget) != null && v.contains(k) && N) {
        const A = R.clientX > m.value ? "right" : "left";
        y.value = A, m.value = R.clientX;
      }
    }
    return d3({
      onItemEnter: (R) => !!E(R),
      onItemLeave: (R) => {
        var k;
        E(R) || ((k = w.value) == null || k.focus(), p.value = null);
      },
      onTriggerLeave: (R) => !!E(R),
      searchRef: l,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (R) => {
        g.value = R;
      }
    }), (R, k) => (x(), U(b(pp), {
      "as-child": "",
      trapped: b(s),
      onMountAutoFocus: $,
      onUnmountAutoFocus: k[7] || (k[7] = (N) => r("closeAutoFocus", N))
    }, {
      default: M(() => [
        Q(b(Bi), {
          "as-child": "",
          "disable-outside-pointer-events": b(i),
          onEscapeKeyDown: k[2] || (k[2] = (N) => r("escapeKeyDown", N)),
          onPointerDownOutside: k[3] || (k[3] = (N) => r("pointerDownOutside", N)),
          onFocusOutside: k[4] || (k[4] = (N) => r("focusOutside", N)),
          onInteractOutside: k[5] || (k[5] = (N) => r("interactOutside", N)),
          onDismiss: k[6] || (k[6] = (N) => r("dismiss"))
        }, {
          default: M(() => [
            Q(b(Ux), {
              ref_key: "rovingFocusGroupRef",
              ref: f,
              "current-tab-stop-id": p.value,
              "onUpdate:currentTabStopId": k[0] || (k[0] = (N) => p.value = N),
              "as-child": "",
              orientation: "vertical",
              dir: b(a).dir.value,
              loop: b(c),
              onEntryFocus: k[1] || (k[1] = (N) => {
                r("entryFocus", N), b(a).isUsingKeyboardRef.value || N.preventDefault();
              })
            }, {
              default: M(() => [
                Q(b(Cp), {
                  ref: b(h),
                  role: "menu",
                  as: R.as,
                  "as-child": R.asChild,
                  "aria-orientation": "vertical",
                  "data-reka-menu-content": "",
                  "data-state": b(dp)(b(o).open.value),
                  dir: b(a).dir.value,
                  side: R.side,
                  "side-offset": R.sideOffset,
                  align: R.align,
                  "align-offset": R.alignOffset,
                  "avoid-collisions": R.avoidCollisions,
                  "collision-boundary": R.collisionBoundary,
                  "collision-padding": R.collisionPadding,
                  "arrow-padding": R.arrowPadding,
                  "prioritize-position": R.prioritizePosition,
                  "position-strategy": R.positionStrategy,
                  "update-position-strategy": R.updatePositionStrategy,
                  sticky: R.sticky,
                  "hide-when-detached": R.hideWhenDetached,
                  reference: R.reference,
                  onKeydown: z,
                  onBlur: q,
                  onPointermove: G
                }, {
                  default: M(() => [
                    j(R.$slots, "default")
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
}), f3 = /* @__PURE__ */ H({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Ep(), { forwardRef: r } = le(), { CollectionItem: o } = wp(), a = _(!1);
    async function s(c) {
      if (!c.defaultPrevented && Hs(c)) {
        if (t.disabled)
          n.onItemLeave(c);
        else if (!n.onItemEnter(c)) {
          const u = c.currentTarget;
          u == null || u.focus({ preventScroll: !0 });
        }
      }
    }
    async function i(c) {
      await Te(), !c.defaultPrevented && Hs(c) && n.onItemLeave(c);
    }
    return (c, l) => (x(), U(b(o), {
      value: { textValue: c.textValue }
    }, {
      default: M(() => [
        Q(b(ke), ie({
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
          default: M(() => [
            j(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"])
      ]),
      _: 3
    }, 8, ["value"]));
  }
}), p3 = /* @__PURE__ */ H({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = le(), s = Ni(), i = Ep(), c = _(!1);
    async function l() {
      const u = a.value;
      if (!n.disabled && u) {
        const d = new CustomEvent(lx, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", d), await Te(), d.defaultPrevented ? c.value = !1 : s.onClose();
      }
    }
    return (u, d) => (x(), U(f3, ie(n, {
      ref: b(o),
      onClick: l,
      onPointerdown: d[0] || (d[0] = () => {
        c.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (g) => {
        var y;
        await Te(), !g.defaultPrevented && (c.value || (y = g.currentTarget) == null || y.click());
      }),
      onKeydown: d[2] || (d[2] = async (g) => {
        const y = b(i).searchRef.value !== "";
        u.disabled || y && g.key === " " || b(Us).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: M(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), m3 = /* @__PURE__ */ H({
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
    const n = e, r = t, o = Pr(n, r), a = Io(), { forwardRef: s, currentElement: i } = le();
    return yp(i), (c, l) => (x(), U(Pp, ie(b(o), {
      ref: b(s),
      "trap-focus": b(a).open.value,
      "disable-outside-pointer-events": b(a).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (u) => b(a).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = St((u) => r("focusOutside", u), ["prevent"]))
    }), {
      default: M(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), h3 = /* @__PURE__ */ H({
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
    const o = Pr(e, t), a = Io();
    return (s, i) => (x(), U(Pp, ie(b(o), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (c) => b(a).onOpenChange(!1))
    }), {
      default: M(() => [
        j(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), y3 = /* @__PURE__ */ H({
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
    const o = Pr(e, t), a = Io(), s = Ni();
    return (i, c) => (x(), U(b(Cr), {
      present: i.forceMount || b(a).open.value
    }, {
      default: M(() => [
        b(s).modal.value ? (x(), U(m3, be(ie({ key: 0 }, { ...i.$attrs, ...b(o) })), {
          default: M(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), U(h3, be(ie({ key: 1 }, { ...i.$attrs, ...b(o) })), {
          default: M(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), g3 = /* @__PURE__ */ H({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), U(b(Mi), be(Pe(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), v3 = /* @__PURE__ */ H({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), U(b(ke), ie(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), b3 = /* @__PURE__ */ H({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), U(b(Op), be(Pe(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), w3 = /* @__PURE__ */ H({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), U(b(Mi), be(Pe(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kp, S3] = at("DropdownMenuRoot"), $p = /* @__PURE__ */ H({
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
    }), a = _(), { modal: s, dir: i } = Nt(n), c = Ri(i);
    return S3({
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
    }), (l, u) => (x(), U(b(u3), {
      open: b(o),
      "onUpdate:open": u[0] || (u[0] = (d) => Yp(o) ? o.value = d : null),
      dir: b(c),
      modal: b(s)
    }, {
      default: M(() => [
        j(l.$slots, "default", { open: b(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Dp = /* @__PURE__ */ H({
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
    const o = Pr(e, t);
    le();
    const a = kp(), s = _(!1);
    function i(c) {
      c.defaultPrevented || (s.value || setTimeout(() => {
        var l;
        (l = a.triggerElement.value) == null || l.focus();
      }, 0), s.value = !1, c.preventDefault());
    }
    return a.contentId || (a.contentId = yn(void 0, "reka-dropdown-menu-content")), (c, l) => {
      var u;
      return x(), U(b(y3), ie(b(o), {
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
          const g = d.detail.originalEvent, y = g.button === 0 && g.ctrlKey === !0, m = g.button === 2 || y;
          (!b(a).modal.value || m) && (s.value = !0), (p = b(a).triggerElement.value) != null && p.contains(d.target) && d.preventDefault();
        })
      }), {
        default: M(() => [
          j(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), x3 = /* @__PURE__ */ H({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Er(t);
    return le(), (a, s) => (x(), U(b(p3), be(Pe({ ...n, ...b(o) })), {
      default: M(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tp = /* @__PURE__ */ H({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), U(b(g3), be(Pe(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O3 = /* @__PURE__ */ H({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (x(), U(b(v3), be(Pe(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fp = /* @__PURE__ */ H({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = kp(), { forwardRef: r, currentElement: o } = le();
    return pe(() => {
      n.triggerElement = o;
    }), n.triggerId || (n.triggerId = yn(void 0, "reka-dropdown-menu-trigger")), (a, s) => (x(), U(b(b3), { "as-child": "" }, {
      default: M(() => [
        Q(b(ke), {
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
function A3(e, t) {
  const n = op(!1, 300), r = _(null), o = LS();
  function a() {
    r.value = null, n.value = !1;
  }
  function s(i, c) {
    const l = i.currentTarget, u = { x: i.clientX, y: i.clientY }, d = C3(u, l.getBoundingClientRect()), g = E3(u, d), y = P3(c.getBoundingClientRect()), m = $3([...g, ...y]);
    r.value = m, n.value = !0;
  }
  return ot((i) => {
    if (e.value && t.value) {
      const c = (u) => s(u, t.value), l = (u) => s(u, e.value);
      e.value.addEventListener("pointerleave", c), t.value.addEventListener("pointerleave", l), i(() => {
        var u, d;
        (u = e.value) == null || u.removeEventListener("pointerleave", c), (d = t.value) == null || d.removeEventListener("pointerleave", l);
      });
    }
  }), ot((i) => {
    var c;
    if (r.value) {
      const l = (u) => {
        var f, h;
        if (!r.value || !(u.target instanceof HTMLElement))
          return;
        const d = u.target, g = { x: u.clientX, y: u.clientY }, y = ((f = e.value) == null ? void 0 : f.contains(d)) || ((h = t.value) == null ? void 0 : h.contains(d)), m = !k3(g, r.value), p = !!d.closest("[data-grace-area-trigger]");
        y ? a() : (m || p) && (a(), o.trigger());
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
function C3(e, t) {
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
function E3(e, t, n = 5) {
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
function P3(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function k3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function $3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), D3(t);
}
function D3(e) {
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
const T3 = /* @__PURE__ */ H({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (x(), U(b(t3), be(Pe(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = "tooltip.open", [ji, F3] = at("TooltipProvider"), R3 = /* @__PURE__ */ H({
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
    const c = _(!0), l = _(!1), { start: u, stop: d } = ap(() => {
      c.value = !0;
    }, r, { immediate: !1 });
    return F3({
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
    }), (g, y) => j(g.$slots, "default");
  }
}), [_o, I3] = at("TooltipRoot"), _3 = /* @__PURE__ */ H({
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
    const o = ji(), a = V(() => n.disableHoverableContent ?? o.disableHoverableContent.value), s = V(() => n.disableClosingTrigger ?? o.disableClosingTrigger.value), i = V(() => n.disabled ?? o.disabled.value), c = V(() => n.delayDuration ?? o.delayDuration.value), l = V(() => n.ignoreNonKeyboardFocus ?? o.ignoreNonKeyboardFocus.value), u = Kn(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    });
    ne(u, (O) => {
      o.onClose && (O ? (o.onOpen(), document.dispatchEvent(new CustomEvent(Rp))) : o.onClose());
    });
    const d = _(!1), g = _(), y = V(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: m, stop: p } = ap(() => {
      d.value = !0, u.value = !0;
    }, c, { immediate: !1 });
    function f() {
      p(), d.value = !1, u.value = !0;
    }
    function h() {
      p(), u.value = !1;
    }
    function w() {
      m();
    }
    return I3({
      contentId: "",
      open: u,
      stateAttribute: y,
      trigger: g,
      onTriggerChange(O) {
        g.value = O;
      },
      onTriggerEnter() {
        o.isOpenDelayed.value ? w() : f();
      },
      onTriggerLeave() {
        a.value ? h() : p();
      },
      onOpen: f,
      onClose: h,
      disableHoverableContent: a,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (O, E) => (x(), U(b(xp), null, {
      default: M(() => [
        j(O.$slots, "default", { open: b(u) })
      ]),
      _: 3
    }));
  }
}), Ip = /* @__PURE__ */ H({
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
    const n = e, r = t, o = _o(), { forwardRef: a } = le(), s = Xp(), i = V(() => {
      var u;
      return (u = s.default) == null ? void 0 : u.call(s, {});
    }), c = V(() => {
      var g;
      if (n.ariaLabel)
        return n.ariaLabel;
      let u = "";
      function d(y) {
        typeof y.children == "string" && y.type !== kc ? u += y.children : Array.isArray(y.children) && y.children.forEach((m) => d(m));
      }
      return (g = i.value) == null || g.forEach((y) => d(y)), u;
    }), l = V(() => {
      const { ariaLabel: u, ...d } = n;
      return d;
    });
    return pe(() => {
      hn(window, "scroll", (u) => {
        const d = u.target;
        d != null && d.contains(o.trigger.value) && o.onClose();
      }), hn(window, Rp, o.onClose);
    }), (u, d) => (x(), U(b(Bi), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: d[0] || (d[0] = (g) => r("escapeKeyDown", g)),
      onPointerDownOutside: d[1] || (d[1] = (g) => {
        var y;
        b(o).disableClosingTrigger.value && ((y = b(o).trigger.value) != null && y.contains(g.target)) && g.preventDefault(), r("pointerDownOutside", g);
      }),
      onFocusOutside: d[2] || (d[2] = St(() => {
      }, ["prevent"])),
      onDismiss: d[3] || (d[3] = (g) => b(o).onClose())
    }, {
      default: M(() => [
        Q(b(Cp), ie({
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
            Q(b(IS), {
              id: b(o).contentId,
              role: "tooltip"
            }, {
              default: M(() => [
                fe(J(c.value), 1)
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
}), L3 = /* @__PURE__ */ H({
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
    const n = bp(e), { forwardRef: r, currentElement: o } = le(), { trigger: a, onClose: s } = _o(), i = ji(), { isPointerInTransit: c, onPointerExit: l } = A3(a, o);
    return i.isPointerInTransitRef = c, l(() => {
      s();
    }), (u, d) => (x(), U(Ip, ie({ ref: b(r) }, b(n)), {
      default: M(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), B3 = /* @__PURE__ */ H({
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
    const n = e, r = t, o = _o(), a = Pr(n, r), { forwardRef: s } = le();
    return (i, c) => (x(), U(b(Cr), {
      present: i.forceMount || b(o).open.value
    }, {
      default: M(() => [
        (x(), U(qr(b(o).disableHoverableContent.value ? Ip : L3), ie({ ref: b(s) }, b(a)), {
          default: M(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), M3 = /* @__PURE__ */ H({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), U(b(Mi), be(Pe(t)), {
      default: M(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), N3 = /* @__PURE__ */ H({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = _o(), r = ji();
    n.contentId || (n.contentId = yn(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: a } = le(), s = _(!1), i = _(!1), c = V(() => n.disabled.value ? {} : {
      click: p,
      focus: y,
      pointermove: d,
      pointerleave: g,
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
    function g() {
      n.onTriggerLeave(), i.value = !1;
    }
    function y(f) {
      var h, w;
      s.value || n.ignoreNonKeyboardFocus.value && !((w = (h = f.target).matches) != null && w.call(h, ":focus-visible")) || n.onOpen();
    }
    function m() {
      n.onClose();
    }
    function p() {
      n.disableClosingTrigger.value || n.onClose();
    }
    return (f, h) => (x(), U(b(Op), {
      "as-child": "",
      reference: f.reference
    }, {
      default: M(() => [
        Q(b(ke), ie({
          ref: b(o),
          "aria-describedby": b(n).open.value ? b(n).contentId : void 0,
          "data-state": b(n).stateAttribute.value,
          as: f.as,
          "as-child": t.asChild,
          "data-grace-area-trigger": ""
        }, Cc(c.value)), {
          default: M(() => [
            j(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }, 8, ["reference"]));
  }
}), j3 = { class: "text-lg font-semibold text-gray-900" }, q3 = { key: 0 }, z3 = { class: "p-6" }, V3 = /* @__PURE__ */ H({
  __name: "CollapsableSection",
  props: {
    header: { default: void 0 },
    open: { type: Boolean, default: !1 },
    headerColor: { default: void 0 }
  },
  setup(e) {
    const t = e, n = _(t.open);
    return ne(
      () => t.open,
      (r) => n.value = r
    ), pe(() => {
      n.value = t.open;
    }), (r, o) => (x(), U(b(Ii), {
      defaultOpen: r.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a),
      class: "rounded-lg border border-gray-200 bg-white shadow"
    }, {
      default: M(() => [
        Q(b(Li), {
          class: "focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          style: dt({ backgroundColor: r.headerColor })
        }, {
          default: M(() => [
            D("h3", j3, [
              r.header ? (x(), P("span", q3, J(r.header), 1)) : j(r.$slots, "trigger", { key: 1 })
            ]),
            D("div", {
              class: Z(["text-primary-600 transition-transform duration-300 ease-in-out", { "rotate-180": n.value }])
            }, [
              Q(b(Se), {
                icon: b(Qs),
                class: "h-5 w-5"
              }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 3
        }, 8, ["style"]),
        Q(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: M(() => [
            D("div", z3, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), aA = /* @__PURE__ */ H({
  __name: "Dropdown",
  props: {
    align: { default: Wf.START },
    alignOffset: { default: 5 },
    openOnHover: { type: Boolean, default: !1 },
    hoverDelay: { default: 150 }
  },
  setup(e) {
    const t = e, n = _(!1);
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
    return (i, c) => (x(), U(b($p), {
      open: n.value,
      "onUpdate:open": [
        c[0] || (c[0] = (l) => n.value = l),
        s
      ]
    }, {
      default: M(() => [
        Q(b(Fp), { "aria-label": "Dropdown" }, {
          default: M(() => [
            j(i.$slots, "trigger")
          ]),
          _: 3
        }),
        Q(b(Tp), null, {
          default: M(() => [
            Q(b(Dp), ie({ alignOffset: i.alignOffset }, i.$attrs, {
              align: i.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]",
              onMouseenter: o,
              onMouseleave: a
            }), {
              default: M(() => [
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
}), sA = /* @__PURE__ */ H({
  __name: "DropdownLink",
  props: {
    href: {}
  },
  setup(e) {
    return (t, n) => (x(), U(b(x3), null, {
      default: M(() => [
        Q(b(ft), ie(t.$attrs, {
          href: t.href,
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
}), iA = /* @__PURE__ */ H({
  __name: "DropdownSeparator",
  setup(e) {
    return (t, n) => (x(), U(b(O3), { class: "mx-1 my-px h-px bg-gray-300" }));
  }
}), U3 = ["href", "target", "tabindex", "aria-disabled"], H3 = "focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium transition-colors duration-200 select-none", lA = /* @__PURE__ */ H({
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
      [we.PRIMARY]: "bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.SECONDARY]: "border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-25",
      [we.DANGER]: "bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.WARNING]: "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.INFO]: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.SUCCESS]: "bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.NO_STYLE]: ""
    }, n = e, r = () => {
      if (n.colourClasses && n.colourClasses.length > 0)
        return [...n.colourClasses];
      const o = [];
      return n.theme !== we.NO_STYLE && o.push(H3), o.push(t[n.theme]), o;
    };
    return (o, a) => o.href && (o.method || o.data) ? (x(), U(b(ft), {
      key: 0,
      href: o.href,
      method: o.method,
      data: o.data,
      class: Z(r()),
      disabled: o.disabled,
      as: "button",
      tabindex: "0"
    }, {
      default: M(() => [
        j(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class", "disabled"])) : (x(), P("a", {
      key: 1,
      href: o.href,
      target: o.target,
      class: Z(r()),
      tabindex: o.disabled ? -1 : 0,
      "aria-disabled": o.disabled,
      onClick: a[0] || (a[0] = (s) => o.disabled && s.preventDefault())
    }, [
      j(o.$slots, "default")
    ], 10, U3));
  }
}), W3 = {
  class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
  type: "button"
}, K3 = { class: "mx-1 w-2" }, G3 = ["aria-labelledby"], uA = /* @__PURE__ */ H({
  __name: "LinkDropdownButton",
  props: {
    align: { default: Wf.START },
    alignOffset: { default: 5 },
    title: { default: void 0 }
  },
  setup(e) {
    const t = _(!1);
    return (n, r) => (x(), U(b($p), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: M(() => [
        Q(b(Fp), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: M(() => [
            D("button", W3, [
              fe(J(n.title) + " ", 1),
              D("span", K3, [
                Q(b(Se), { icon: b(Js) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        Q(b(Tp), null, {
          default: M(() => [
            Q(b(Dp), ie({ alignOffset: n.alignOffset }, n.$attrs, {
              align: n.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            }), {
              default: M(() => [
                D("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
                  "aria-labelledby": n.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  j(n.$slots, "default")
                ], 8, G3)
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
}), Y3 = ["href"], cA = /* @__PURE__ */ H({
  __name: "LinkDropdownButtonItem",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, n) => (x(), P("li", null, [
      D("a", {
        class: "focusable inline-flex w-full items-center justify-center bg-transparent px-4 py-2 text-sm font-normal whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: t.href
      }, J(t.title), 9, Y3)
    ]));
  }
}), dA = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (x(), U(b(V3), { header: e.header }, {
      default: M(() => [
        Q(b(d4), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, X3 = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, J3 = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, Q3 = {
  key: 0,
  class: "text-center"
}, Z3 = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, e4 = { class: "flex-start w-full md:flex" }, t4 = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, n4 = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, r4 = { class: "mb-1 flex justify-between" }, o4 = { class: "text-sm text-neutral-500" }, a4 = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, s4 = {
  key: 1,
  class: "text-sm text-primary-500"
}, i4 = { class: "text-sm text-neutral-500" }, l4 = { class: "font-medium" }, u4 = {
  key: 0,
  class: "line-through"
}, c4 = ["innerHTML"], d4 = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return jn.add(vm, ns, Sm, im, wm), (t, n) => e.logs == null ? (x(), P("div", X3, [
      Q(b(qi))
    ])) : (x(), P("div", J3, [
      e.logs.total ? (x(), P("ol", Z3, [
        (x(!0), P(re, null, Ce(e.logs.data, (r) => (x(), P("li", {
          key: r.id
        }, [
          D("div", e4, [
            D("div", t4, [
              Q(b(Se), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            D("div", n4, [
              D("div", r4, [
                D("span", o4, [
                  fe(J(r.event_formatted) + " ", 1),
                  r.reference ? (x(), P("span", a4, J(r.reference), 1)) : Y("", !0),
                  r.causer ? (x(), P(re, { key: 1 }, [
                    r.causer.id ? (x(), U(b(ft), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: M(() => [
                        fe(" (" + J(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (x(), P("span", s4, "(" + J(r.causer.first_name) + ")", 1))
                  ], 64)) : Y("", !0)
                ]),
                D("span", i4, J(r.created_date_full), 1)
              ]),
              (x(!0), P(re, null, Ce(r.changes_formatted, (o, a) => (x(), P("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                D("span", l4, J(a) + ":", 1),
                o.old ? (x(), P("span", u4, J(o.old), 1)) : Y("", !0),
                fe(" " + J(o.new), 1)
              ]))), 128)),
              r.description_details ? (x(), P("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, c4)) : Y("", !0)
            ])
          ])
        ]))), 128))
      ])) : (x(), P("p", Q3, "No Data")),
      e.logs.links ? (x(), U(b(_p), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : Y("", !0)
    ]));
  }
}, fA = /* @__PURE__ */ H({
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
    const n = e, r = t, o = _(null);
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
    pe(() => document.addEventListener("keydown", s)), Pt(() => {
      document.removeEventListener("keydown", s), document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", h), document.body.style.overflow = null;
    });
    const i = V(() => {
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
    }), c = _(!1), l = _(null), u = _(0), d = _(0), g = _(0), y = _(0), m = _(null), p = _(null), f = (O, E) => {
      c.value = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", h), l.value = E, u.value = O.clientX, d.value = O.clientY, g.value = o.value.offsetWidth, y.value = o.value.offsetHeight;
    }, h = (O) => {
      c.value = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", h);
    }, w = (O) => {
      if (!c.value) return;
      const E = (O.clientX - u.value) * 2, $ = O.clientY - d.value;
      l.value.includes("x") && (m.value = g.value + E + "px"), l.value.includes("-x") && (m.value = g.value - E + "px"), l.value.includes("y") && (p.value = y.value + $ + "px");
    };
    return (O, E) => (x(), U(Fc, { to: "body" }, [
      Q(un, { "leave-active-class": "duration-200" }, {
        default: M(() => [
          He(D("div", {
            class: Z(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
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
              default: M(() => [
                He(D("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: a
                }, [
                  D("div", {
                    class: Z(["backdrop absolute inset-0 bg-gray-500 opacity-75", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [ln, e.show]
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
              default: M(() => [
                He(D("div", {
                  ref_key: "modalContent",
                  ref: o,
                  class: Z(["mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full", {
                    [i.value]: !!i.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: dt({
                    userSelect: c.value ? "none" : "auto",
                    transition: c.value ? "none" : "",
                    width: m.value || "",
                    height: p.value || "",
                    maxWidth: m.value || "",
                    maxHeight: p.value || ""
                  })
                }, [
                  e.show ? j(O.$slots, "default", { key: 0 }) : Y("", !0),
                  e.resizable ? (x(), P(re, { key: 1 }, [
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: E[0] || (E[0] = ($) => f($, "y")),
                      onMouseup: h
                    }, null, 32),
                    D("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: E[1] || (E[1] = ($) => f($, "-x")),
                      onMouseup: h
                    }, null, 32),
                    D("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: E[2] || (E[2] = ($) => f($, "x")),
                      onMouseup: h
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: E[3] || (E[3] = ($) => f($, "xy")),
                      onMouseup: h
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: E[4] || (E[4] = ($) => f($, "-xy")),
                      onMouseup: h
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
}), f4 = {
  key: 2,
  class: "mb-3"
}, p4 = {
  key: 3,
  class: "mt-5 flex justify-end gap-1.5"
}, pA = /* @__PURE__ */ H({
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
    }), Pt(() => {
      n.value = !1;
    }), ne(
      () => t.defaultOpen,
      (o) => {
        n.value = o;
      }
    ), (o, a) => (x(), U(b(nx), {
      defaultOpen: o.defaultOpen,
      open: n.value,
      "onUpdate:open": [
        a[0] || (a[0] = (s) => n.value = s),
        r
      ]
    }, {
      default: M(() => [
        o.$slots.trigger ? (x(), U(b(Nx), {
          key: 0,
          asChild: ""
        }, {
          default: M(() => [
            j(o.$slots, "trigger")
          ]),
          _: 3
        })) : Y("", !0),
        Q(b(w3), null, {
          default: M(() => [
            Q(b(Bx), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" }),
            Q(b(Dx), ie({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 shadow-lg/20 focus:outline-none" }, o.$attrs), {
              default: M(() => [
                o.title || o.$slots.header ? (x(), U(b(Mx), {
                  key: 0,
                  class: "m-0 text-lg font-semibold"
                }, {
                  default: M(() => [
                    j(o.$slots, "header", {}, () => [
                      fe(J(o.title), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                o.description || o.$slots.description ? (x(), U(b(Tx), {
                  key: 1,
                  class: "mt-2 text-sm leading-normal"
                }, {
                  default: M(() => [
                    j(o.$slots, "description", {}, () => [
                      fe(J(o.description), 1)
                    ])
                  ]),
                  _: 3
                })) : Y("", !0),
                o.title || o.$slots.header || o.description || o.$slots.description ? (x(), P("div", f4)) : Y("", !0),
                j(o.$slots, "default"),
                o.$slots.footer ? (x(), P("div", p4, [
                  j(o.$slots, "footer")
                ])) : Y("", !0),
                Q(b(rx), {
                  class: "focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none",
                  "aria-label": "Close"
                }, {
                  default: M(() => [
                    Q(b(Se), { icon: b(Qr) }, null, 8, ["icon"])
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
}), m4 = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, h4 = { class: "ml-3 flex-1 whitespace-nowrap" }, mA = /* @__PURE__ */ H({
  __name: "NavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = V(
      () => t.active ? "cursor-pointer focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "cursor-pointer focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, o) => (x(), U(b(ft), {
      href: r.href,
      class: Z(n.value)
    }, {
      default: M(() => [
        r.$slots.icon ? (x(), P("div", m4, [
          j(r.$slots, "icon")
        ])) : Y("", !0),
        D("span", h4, [
          j(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), y4 = { class: "pagination flex justify-between" }, g4 = ["value", "selected"], v4 = {
  key: 0,
  "aria-label": "Page navigation"
}, b4 = ["innerHTML"], w4 = ["innerHTML", "onClick"], _p = /* @__PURE__ */ H({
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
    const n = t, r = e, o = _(r.defaultPerPage), a = [10, 25, 50, 100, 250], s = V(() => {
      if (!r.links || r.links.length <= 3)
        return r.links;
      const l = r.links[0], u = r.links[r.links.length - 1], d = r.links.findIndex((m) => m.active);
      let g = Math.max(1, d - Math.floor(r.maxPagesToShow / 2)), y = Math.min(r.links.length - 2, g + r.maxPagesToShow - 1);
      return y - g < r.maxPagesToShow - 1 && (g = Math.max(1, y - r.maxPagesToShow + 1)), [l, ...r.links.slice(g, y + 1), u];
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
    return (l, u) => (x(), P("div", y4, [
      D("div", null, [
        l.showPerPage ? (x(), U(b(ng), {
          key: 0,
          type: "select",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d),
          class: "per-page-input w-20",
          onChanged: c
        }, {
          default: M(() => [
            (x(), P(re, null, Ce(a, (d) => D("option", {
              key: d,
              value: d,
              selected: d == o.value
            }, J(d), 9, g4)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0)
      ]),
      s.value.length > 3 ? (x(), P("nav", v4, [
        D("ul", {
          class: Z(["list-style-none flex", { [l.customListClass]: l.customListClass }])
        }, [
          (x(!0), P(re, null, Ce(s.value, (d, g) => (x(), P("li", { key: g }, [
            l.linkReturn ? (x(), P(re, { key: 0 }, [
              d.url === null ? (x(), P("button", {
                key: 0,
                class: Z(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: u[1] || (u[1] = (y) => i(""))
              }, null, 10, b4)) : (x(), P("button", {
                key: 1,
                class: Z(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [l.customLinkClass]: l.customLinkClass,
                  [l.customActiveLinkClass]: d.active && l.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (y) => i(d.url)
              }, null, 10, w4))
            ], 64)) : (x(), P(re, { key: 1 }, [
              d.url === null ? (x(), U(b(ft), {
                key: 0,
                class: Z(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (x(), U(b(ft), {
                key: 1,
                class: Z(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
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
}), hA = /* @__PURE__ */ H({
  __name: "DangerButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), U(b(bn), {
      theme: b(we).DANGER,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: M(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), yA = /* @__PURE__ */ H({
  __name: "WarningButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), U(b(bn), {
      theme: b(we).WARNING,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: M(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), gA = /* @__PURE__ */ H({
  __name: "InfoButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), U(b(bn), {
      theme: b(we).INFO,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: M(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), vA = /* @__PURE__ */ H({
  __name: "SuccessButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), U(b(bn), {
      theme: b(we).SUCCESS,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: M(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), bA = /* @__PURE__ */ H({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = V(
      () => t.active ? "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, o) => (x(), U(b(ft), {
      href: r.href,
      class: Z(n.value)
    }, {
      default: M(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), S4 = /* @__PURE__ */ H({
  __name: "SecondaryButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), U(b(bn), {
      theme: b(we).SECONDARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customClass,
      size: t.size
    }, {
      default: M(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), x4 = {
  key: 0,
  class: "border-b border-gray-200 bg-gray-50/50 px-6 py-4"
}, O4 = { class: "flex items-center justify-between" }, A4 = { class: "text-lg font-semibold text-gray-900" }, C4 = { key: 0 }, E4 = { class: "p-6" }, wA = /* @__PURE__ */ H({
  __name: "Section",
  props: {
    header: {},
    overflow: { type: Boolean, default: !1 },
    variant: { default: "default" },
    unstyled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, n = Jp(), r = V(() => {
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
    }), o = V(() => {
      const s = [];
      return t.unstyled || s.push(r.value), t.overflow && s.push("overflow-hidden"), n.class && typeof n.class == "string" && s.push(n.class), s.filter(Boolean).join(" ");
    }), a = V(() => {
      const { class: s, ...i } = n;
      return i;
    });
    return (s, i) => (x(), P("div", ie({ class: o.value }, a.value), [
      s.header ? (x(), P("div", x4, [
        D("div", O4, [
          D("h3", A4, J(s.header), 1),
          s.$slots.headerButton ? (x(), P("div", C4, [
            j(s.$slots, "headerButton")
          ])) : Y("", !0)
        ])
      ])) : Y("", !0),
      D("div", E4, [
        j(s.$slots, "default")
      ])
    ], 16));
  }
}), qi = /* @__PURE__ */ H({
  __name: "Spinner",
  props: {
    size: { default: "md" },
    color: { default: void 0 }
  },
  setup(e) {
    const t = e, n = V(() => {
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
    }), r = V(() => t.color ? t.color : "text-primary");
    return (o, a) => (x(), P("div", {
      class: Z([
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
}), P4 = ["onClick"], k4 = { class: "group-hover:text-primary-600 text-2xl font-bold text-gray-900 transition-colors" }, $4 = { class: "text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900" }, SA = /* @__PURE__ */ H({
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
    const n = t, r = e, o = Si(), a = (i) => {
      let c = i;
      s(i) && (c = null), n("updateSearch", c);
    }, s = (i) => {
      const c = {};
      return o.url.includes("?") && new URLSearchParams(o.url.split("?")[1]).forEach((u, d) => {
        c[d] = u;
      }), r.statusName != null ? c[r.statusName] == i : c.status == i;
    };
    return (i, c) => (x(), P("div", {
      class: Z(["grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", { [i.customContainerClass]: i.customContainerClass }])
    }, [
      (x(!0), P(re, null, Ce(i.stats, (l) => (x(), P("div", {
        key: l.value,
        class: Z(["group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md", {
          "border-primary-200 bg-primary-50 ring-primary-500 ring-2": s(l.name),
          [i.customStatClass]: i.customStatClass
        }]),
        onClick: (u) => a(l.name)
      }, [
        D("div", {
          class: Z(["px-6 py-4", { [i.customStatValueClass]: i.customStatValueClass }])
        }, [
          D("div", k4, J(l.value), 1)
        ], 2),
        D("div", {
          class: Z(["border-t border-gray-100 bg-gray-50/50 px-6 py-3", { [i.customStatLabelClass]: i.customStatLabelClass }])
        }, [
          D("div", $4, J(l.label ?? l.name), 1)
        ], 2),
        c[0] || (c[0] = D("div", { class: "from-primary-500 to-primary-600 absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100" }, null, -1))
      ], 10, P4))), 128))
    ], 2));
  }
}), D4 = "fill-white stroke-gray-200", T4 = /* @__PURE__ */ H({
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
    const t = e, n = V(() => ["top", "bottom", "left", "right"].includes(t.side) ? t.side : "top"), r = [
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
    return (o, a) => (x(), U(b(R3), { "delay-duration": o.delayDuration }, {
      default: M(() => [
        Q(b(_3), { disabled: o.disabled }, {
          default: M(() => [
            Q(b(N3), { "as-child": "" }, {
              default: M(() => [
                j(o.$slots, "default")
              ]),
              _: 3
            }),
            Q(b(M3), null, {
              default: M(() => [
                Q(b(B3), {
                  side: n.value,
                  sideOffset: o.sideOffset,
                  collisionPadding: o.collisionPadding,
                  class: Z([b(r), o.contentClass])
                }, {
                  default: M(() => [
                    fe(J(o.content) + " ", 1),
                    Q(b(T3), {
                      class: Z([D4, o.arrowClass])
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
}), F4 = ["type", "disabled"], R4 = "focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed", bn = /* @__PURE__ */ H({
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
      [we.PRIMARY]: "bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.SECONDARY]: "border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-25",
      [we.DANGER]: "bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.WARNING]: "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.INFO]: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.SUCCESS]: "bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [we.NO_STYLE]: ""
    };
    return (o, a) => (x(), P("button", {
      type: o.type,
      disabled: o.disabled,
      class: Z([
        // Apply base styles and size only if not no-style theme
        t.theme !== b(we).NO_STYLE ? [R4, n[t.size]] : [],
        // Always apply theme variant
        r[t.theme],
        // Custom classes
        t.customClass
      ])
    }, [
      j(o.$slots, "default")
    ], 10, F4));
  }
}), I4 = { class: "mt-2" }, xA = /* @__PURE__ */ H({
  __name: "Collapse",
  props: {
    open: { type: Boolean, default: !1 },
    button: { default: () => ["Show more", "Show less"] }
  },
  setup(e) {
    const t = e, n = _(t.open);
    return ne(
      () => t.open,
      (r) => n.value = r
    ), pe(() => {
      n.value = t.open;
    }), (r, o) => (x(), U(b(Ii), {
      defaultOpen: r.open,
      open: n.value,
      "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
    }, {
      default: M(() => [
        Q(b(Li), { asChild: "" }, {
          default: M(() => [
            j(r.$slots, "trigger", {}, () => [
              Q(b(S4), be(Pe(r.$attrs)), {
                default: M(() => [
                  D("span", null, J(n.value ? r.button[1] : r.button[0]), 1),
                  Q(b(Se), {
                    icon: b(Js),
                    class: Z(["transition-all", { "rotate-180": n.value }])
                  }, null, 8, ["icon", "class"])
                ]),
                _: 1
              }, 16)
            ])
          ]),
          _: 3
        }),
        Q(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: M(() => [
            D("div", I4, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), _4 = { class: "border-t border-gray-100" }, L4 = { class: "divide-y divide-gray-100" }, OA = /* @__PURE__ */ H({
  __name: "DescriptionList",
  props: {
    form: { default: void 0 },
    stopEditOnSubmit: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, r = _(!1);
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
    const o = _([]);
    Ys("registerItem", (l) => {
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
    }), (l, u) => (x(), P("div", _4, [
      D("dl", L4, [
        j(l.$slots, "default")
      ])
    ]));
  }
}), B4 = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, M4 = { class: "flex items-center text-sm font-medium" }, N4 = {
  key: 0,
  class: "ml-1 text-red-500"
}, j4 = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, q4 = { class: "flex min-h-full items-center" }, z4 = { class: "slot-content grow" }, V4 = { class: "ml-4 shrink-0" }, U4 = { class: "slot-edit grow" }, H4 = { class: "ml-4 shrink-0" }, AA = /* @__PURE__ */ H({
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
    jn.add(ns, Zi);
    const r = e, o = n, a = _(r.editable ? r.forceEditing : !1), s = () => {
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
    }, l = Gs("registerItem");
    return pe(() => {
      l && l({ startEditing: i, stopEditing: c, toggleEditing: s });
    }), t({
      toggleEditing: s,
      startEditing: i,
      stopEditing: c,
      isEditing: () => a.value
    }), (d, g) => (x(), P("div", B4, [
      D("dt", M4, [
        fe(J(d.label) + " ", 1),
        j(d.$slots, "label"),
        d.required ? (x(), P("span", N4, "*")) : Y("", !0)
      ]),
      D("dd", j4, [
        D("div", q4, [
          a.value ? (x(), P(re, { key: 1 }, [
            D("div", U4, [
              j(d.$slots, "edit")
            ]),
            D("span", H4, [
              D("button", {
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-xl font-bold"
              }, [
                Q(b(Se), { icon: b(Zi) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (x(), P(re, { key: 0 }, [
            D("div", z4, [
              j(d.$slots, "default"),
              fe(" " + J(d.value), 1)
            ]),
            D("span", V4, [
              d.editable ? (x(), P("button", {
                key: 0,
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-lg font-bold"
              }, [
                Q(b(Se), { icon: b(ns) }, null, 8, ["icon"])
              ])) : Y("", !0),
              j(d.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
});
var es = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var Sc;
function W4() {
  return Sc || (Sc = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var a = !r && typeof self == "object", s = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? o = As : a && (o = self);
      var i = !o.JS_MD5_NO_COMMON_JS && !0 && e.exports, c = !o.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), u = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], g = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), m = [], p;
      if (c) {
        var f = new ArrayBuffer(68);
        p = new Uint8Array(f), m = new Uint32Array(f);
      }
      var h = Array.isArray;
      (o.JS_MD5_NO_NODE_JS || !h) && (h = function(v) {
        return Object.prototype.toString.call(v) === "[object Array]";
      });
      var w = ArrayBuffer.isView;
      c && (o.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !w) && (w = function(v) {
        return typeof v == "object" && v.buffer && v.buffer.constructor === ArrayBuffer;
      });
      var O = function(v) {
        var A = typeof v;
        if (A === "string")
          return [v, !0];
        if (A !== "object" || v === null)
          throw new Error(t);
        if (c && v.constructor === ArrayBuffer)
          return [new Uint8Array(v), !1];
        if (!h(v) && !w(v))
          throw new Error(t);
        return [v, !1];
      }, E = function(v) {
        return function(A) {
          return new R(!0).update(A)[v]();
        };
      }, $ = function() {
        var v = E("hex");
        s && (v = z(v)), v.create = function() {
          return new R();
        }, v.update = function(S) {
          return v.create().update(S);
        };
        for (var A = 0; A < g.length; ++A) {
          var C = g[A];
          v[C] = E(C);
        }
        return v;
      }, z = function(v) {
        var A = Cs, C = Cs.Buffer, S;
        C.from && !o.JS_MD5_NO_BUFFER_FROM ? S = C.from : S = function(I) {
          return new C(I);
        };
        var W = function(I) {
          if (typeof I == "string")
            return A.createHash("md5").update(I, "utf8").digest("hex");
          if (I == null)
            throw new Error(t);
          return I.constructor === ArrayBuffer && (I = new Uint8Array(I)), h(I) || w(I) || I.constructor === C ? A.createHash("md5").update(S(I)).digest("hex") : v(I);
        };
        return W;
      }, q = function(v) {
        return function(A, C) {
          return new k(A, !0).update(C)[v]();
        };
      }, G = function() {
        var v = q("hex");
        v.create = function(S) {
          return new k(S);
        }, v.update = function(S, W) {
          return v.create(S).update(W);
        };
        for (var A = 0; A < g.length; ++A) {
          var C = g[A];
          v[C] = q(C);
        }
        return v;
      };
      function R(v) {
        if (v)
          m[0] = m[16] = m[1] = m[2] = m[3] = m[4] = m[5] = m[6] = m[7] = m[8] = m[9] = m[10] = m[11] = m[12] = m[13] = m[14] = m[15] = 0, this.blocks = m, this.buffer8 = p;
        else if (c) {
          var A = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(A), this.blocks = new Uint32Array(A);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      R.prototype.update = function(v) {
        if (this.finalized)
          throw new Error(n);
        var A = O(v);
        v = A[0];
        for (var C = A[1], S, W = 0, I, T = v.length, X = this.blocks, ae = this.buffer8; W < T; ) {
          if (this.hashed && (this.hashed = !1, X[0] = X[16], X[16] = X[1] = X[2] = X[3] = X[4] = X[5] = X[6] = X[7] = X[8] = X[9] = X[10] = X[11] = X[12] = X[13] = X[14] = X[15] = 0), C)
            if (c)
              for (I = this.start; W < T && I < 64; ++W)
                S = v.charCodeAt(W), S < 128 ? ae[I++] = S : S < 2048 ? (ae[I++] = 192 | S >>> 6, ae[I++] = 128 | S & 63) : S < 55296 || S >= 57344 ? (ae[I++] = 224 | S >>> 12, ae[I++] = 128 | S >>> 6 & 63, ae[I++] = 128 | S & 63) : (S = 65536 + ((S & 1023) << 10 | v.charCodeAt(++W) & 1023), ae[I++] = 240 | S >>> 18, ae[I++] = 128 | S >>> 12 & 63, ae[I++] = 128 | S >>> 6 & 63, ae[I++] = 128 | S & 63);
            else
              for (I = this.start; W < T && I < 64; ++W)
                S = v.charCodeAt(W), S < 128 ? X[I >>> 2] |= S << d[I++ & 3] : S < 2048 ? (X[I >>> 2] |= (192 | S >>> 6) << d[I++ & 3], X[I >>> 2] |= (128 | S & 63) << d[I++ & 3]) : S < 55296 || S >= 57344 ? (X[I >>> 2] |= (224 | S >>> 12) << d[I++ & 3], X[I >>> 2] |= (128 | S >>> 6 & 63) << d[I++ & 3], X[I >>> 2] |= (128 | S & 63) << d[I++ & 3]) : (S = 65536 + ((S & 1023) << 10 | v.charCodeAt(++W) & 1023), X[I >>> 2] |= (240 | S >>> 18) << d[I++ & 3], X[I >>> 2] |= (128 | S >>> 12 & 63) << d[I++ & 3], X[I >>> 2] |= (128 | S >>> 6 & 63) << d[I++ & 3], X[I >>> 2] |= (128 | S & 63) << d[I++ & 3]);
          else if (c)
            for (I = this.start; W < T && I < 64; ++W)
              ae[I++] = v[W];
          else
            for (I = this.start; W < T && I < 64; ++W)
              X[I >>> 2] |= v[W] << d[I++ & 3];
          this.lastByteIndex = I, this.bytes += I - this.start, I >= 64 ? (this.start = I - 64, this.hash(), this.hashed = !0) : this.start = I;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, R.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var v = this.blocks, A = this.lastByteIndex;
          v[A >>> 2] |= u[A & 3], A >= 56 && (this.hashed || this.hash(), v[0] = v[16], v[16] = v[1] = v[2] = v[3] = v[4] = v[5] = v[6] = v[7] = v[8] = v[9] = v[10] = v[11] = v[12] = v[13] = v[14] = v[15] = 0), v[14] = this.bytes << 3, v[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, R.prototype.hash = function() {
        var v, A, C, S, W, I, T = this.blocks;
        this.first ? (v = T[0] - 680876937, v = (v << 7 | v >>> 25) - 271733879 << 0, S = (-1732584194 ^ v & 2004318071) + T[1] - 117830708, S = (S << 12 | S >>> 20) + v << 0, C = (-271733879 ^ S & (v ^ -271733879)) + T[2] - 1126478375, C = (C << 17 | C >>> 15) + S << 0, A = (v ^ C & (S ^ v)) + T[3] - 1316259209, A = (A << 22 | A >>> 10) + C << 0) : (v = this.h0, A = this.h1, C = this.h2, S = this.h3, v += (S ^ A & (C ^ S)) + T[0] - 680876936, v = (v << 7 | v >>> 25) + A << 0, S += (C ^ v & (A ^ C)) + T[1] - 389564586, S = (S << 12 | S >>> 20) + v << 0, C += (A ^ S & (v ^ A)) + T[2] + 606105819, C = (C << 17 | C >>> 15) + S << 0, A += (v ^ C & (S ^ v)) + T[3] - 1044525330, A = (A << 22 | A >>> 10) + C << 0), v += (S ^ A & (C ^ S)) + T[4] - 176418897, v = (v << 7 | v >>> 25) + A << 0, S += (C ^ v & (A ^ C)) + T[5] + 1200080426, S = (S << 12 | S >>> 20) + v << 0, C += (A ^ S & (v ^ A)) + T[6] - 1473231341, C = (C << 17 | C >>> 15) + S << 0, A += (v ^ C & (S ^ v)) + T[7] - 45705983, A = (A << 22 | A >>> 10) + C << 0, v += (S ^ A & (C ^ S)) + T[8] + 1770035416, v = (v << 7 | v >>> 25) + A << 0, S += (C ^ v & (A ^ C)) + T[9] - 1958414417, S = (S << 12 | S >>> 20) + v << 0, C += (A ^ S & (v ^ A)) + T[10] - 42063, C = (C << 17 | C >>> 15) + S << 0, A += (v ^ C & (S ^ v)) + T[11] - 1990404162, A = (A << 22 | A >>> 10) + C << 0, v += (S ^ A & (C ^ S)) + T[12] + 1804603682, v = (v << 7 | v >>> 25) + A << 0, S += (C ^ v & (A ^ C)) + T[13] - 40341101, S = (S << 12 | S >>> 20) + v << 0, C += (A ^ S & (v ^ A)) + T[14] - 1502002290, C = (C << 17 | C >>> 15) + S << 0, A += (v ^ C & (S ^ v)) + T[15] + 1236535329, A = (A << 22 | A >>> 10) + C << 0, v += (C ^ S & (A ^ C)) + T[1] - 165796510, v = (v << 5 | v >>> 27) + A << 0, S += (A ^ C & (v ^ A)) + T[6] - 1069501632, S = (S << 9 | S >>> 23) + v << 0, C += (v ^ A & (S ^ v)) + T[11] + 643717713, C = (C << 14 | C >>> 18) + S << 0, A += (S ^ v & (C ^ S)) + T[0] - 373897302, A = (A << 20 | A >>> 12) + C << 0, v += (C ^ S & (A ^ C)) + T[5] - 701558691, v = (v << 5 | v >>> 27) + A << 0, S += (A ^ C & (v ^ A)) + T[10] + 38016083, S = (S << 9 | S >>> 23) + v << 0, C += (v ^ A & (S ^ v)) + T[15] - 660478335, C = (C << 14 | C >>> 18) + S << 0, A += (S ^ v & (C ^ S)) + T[4] - 405537848, A = (A << 20 | A >>> 12) + C << 0, v += (C ^ S & (A ^ C)) + T[9] + 568446438, v = (v << 5 | v >>> 27) + A << 0, S += (A ^ C & (v ^ A)) + T[14] - 1019803690, S = (S << 9 | S >>> 23) + v << 0, C += (v ^ A & (S ^ v)) + T[3] - 187363961, C = (C << 14 | C >>> 18) + S << 0, A += (S ^ v & (C ^ S)) + T[8] + 1163531501, A = (A << 20 | A >>> 12) + C << 0, v += (C ^ S & (A ^ C)) + T[13] - 1444681467, v = (v << 5 | v >>> 27) + A << 0, S += (A ^ C & (v ^ A)) + T[2] - 51403784, S = (S << 9 | S >>> 23) + v << 0, C += (v ^ A & (S ^ v)) + T[7] + 1735328473, C = (C << 14 | C >>> 18) + S << 0, A += (S ^ v & (C ^ S)) + T[12] - 1926607734, A = (A << 20 | A >>> 12) + C << 0, W = A ^ C, v += (W ^ S) + T[5] - 378558, v = (v << 4 | v >>> 28) + A << 0, S += (W ^ v) + T[8] - 2022574463, S = (S << 11 | S >>> 21) + v << 0, I = S ^ v, C += (I ^ A) + T[11] + 1839030562, C = (C << 16 | C >>> 16) + S << 0, A += (I ^ C) + T[14] - 35309556, A = (A << 23 | A >>> 9) + C << 0, W = A ^ C, v += (W ^ S) + T[1] - 1530992060, v = (v << 4 | v >>> 28) + A << 0, S += (W ^ v) + T[4] + 1272893353, S = (S << 11 | S >>> 21) + v << 0, I = S ^ v, C += (I ^ A) + T[7] - 155497632, C = (C << 16 | C >>> 16) + S << 0, A += (I ^ C) + T[10] - 1094730640, A = (A << 23 | A >>> 9) + C << 0, W = A ^ C, v += (W ^ S) + T[13] + 681279174, v = (v << 4 | v >>> 28) + A << 0, S += (W ^ v) + T[0] - 358537222, S = (S << 11 | S >>> 21) + v << 0, I = S ^ v, C += (I ^ A) + T[3] - 722521979, C = (C << 16 | C >>> 16) + S << 0, A += (I ^ C) + T[6] + 76029189, A = (A << 23 | A >>> 9) + C << 0, W = A ^ C, v += (W ^ S) + T[9] - 640364487, v = (v << 4 | v >>> 28) + A << 0, S += (W ^ v) + T[12] - 421815835, S = (S << 11 | S >>> 21) + v << 0, I = S ^ v, C += (I ^ A) + T[15] + 530742520, C = (C << 16 | C >>> 16) + S << 0, A += (I ^ C) + T[2] - 995338651, A = (A << 23 | A >>> 9) + C << 0, v += (C ^ (A | ~S)) + T[0] - 198630844, v = (v << 6 | v >>> 26) + A << 0, S += (A ^ (v | ~C)) + T[7] + 1126891415, S = (S << 10 | S >>> 22) + v << 0, C += (v ^ (S | ~A)) + T[14] - 1416354905, C = (C << 15 | C >>> 17) + S << 0, A += (S ^ (C | ~v)) + T[5] - 57434055, A = (A << 21 | A >>> 11) + C << 0, v += (C ^ (A | ~S)) + T[12] + 1700485571, v = (v << 6 | v >>> 26) + A << 0, S += (A ^ (v | ~C)) + T[3] - 1894986606, S = (S << 10 | S >>> 22) + v << 0, C += (v ^ (S | ~A)) + T[10] - 1051523, C = (C << 15 | C >>> 17) + S << 0, A += (S ^ (C | ~v)) + T[1] - 2054922799, A = (A << 21 | A >>> 11) + C << 0, v += (C ^ (A | ~S)) + T[8] + 1873313359, v = (v << 6 | v >>> 26) + A << 0, S += (A ^ (v | ~C)) + T[15] - 30611744, S = (S << 10 | S >>> 22) + v << 0, C += (v ^ (S | ~A)) + T[6] - 1560198380, C = (C << 15 | C >>> 17) + S << 0, A += (S ^ (C | ~v)) + T[13] + 1309151649, A = (A << 21 | A >>> 11) + C << 0, v += (C ^ (A | ~S)) + T[4] - 145523070, v = (v << 6 | v >>> 26) + A << 0, S += (A ^ (v | ~C)) + T[11] - 1120210379, S = (S << 10 | S >>> 22) + v << 0, C += (v ^ (S | ~A)) + T[2] + 718787259, C = (C << 15 | C >>> 17) + S << 0, A += (S ^ (C | ~v)) + T[9] - 343485551, A = (A << 21 | A >>> 11) + C << 0, this.first ? (this.h0 = v + 1732584193 << 0, this.h1 = A - 271733879 << 0, this.h2 = C - 1732584194 << 0, this.h3 = S + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + v << 0, this.h1 = this.h1 + A << 0, this.h2 = this.h2 + C << 0, this.h3 = this.h3 + S << 0);
      }, R.prototype.hex = function() {
        this.finalize();
        var v = this.h0, A = this.h1, C = this.h2, S = this.h3;
        return l[v >>> 4 & 15] + l[v & 15] + l[v >>> 12 & 15] + l[v >>> 8 & 15] + l[v >>> 20 & 15] + l[v >>> 16 & 15] + l[v >>> 28 & 15] + l[v >>> 24 & 15] + l[A >>> 4 & 15] + l[A & 15] + l[A >>> 12 & 15] + l[A >>> 8 & 15] + l[A >>> 20 & 15] + l[A >>> 16 & 15] + l[A >>> 28 & 15] + l[A >>> 24 & 15] + l[C >>> 4 & 15] + l[C & 15] + l[C >>> 12 & 15] + l[C >>> 8 & 15] + l[C >>> 20 & 15] + l[C >>> 16 & 15] + l[C >>> 28 & 15] + l[C >>> 24 & 15] + l[S >>> 4 & 15] + l[S & 15] + l[S >>> 12 & 15] + l[S >>> 8 & 15] + l[S >>> 20 & 15] + l[S >>> 16 & 15] + l[S >>> 28 & 15] + l[S >>> 24 & 15];
      }, R.prototype.toString = R.prototype.hex, R.prototype.digest = function() {
        this.finalize();
        var v = this.h0, A = this.h1, C = this.h2, S = this.h3;
        return [
          v & 255,
          v >>> 8 & 255,
          v >>> 16 & 255,
          v >>> 24 & 255,
          A & 255,
          A >>> 8 & 255,
          A >>> 16 & 255,
          A >>> 24 & 255,
          C & 255,
          C >>> 8 & 255,
          C >>> 16 & 255,
          C >>> 24 & 255,
          S & 255,
          S >>> 8 & 255,
          S >>> 16 & 255,
          S >>> 24 & 255
        ];
      }, R.prototype.array = R.prototype.digest, R.prototype.arrayBuffer = function() {
        this.finalize();
        var v = new ArrayBuffer(16), A = new Uint32Array(v);
        return A[0] = this.h0, A[1] = this.h1, A[2] = this.h2, A[3] = this.h3, v;
      }, R.prototype.buffer = R.prototype.arrayBuffer, R.prototype.base64 = function() {
        for (var v, A, C, S = "", W = this.array(), I = 0; I < 15; )
          v = W[I++], A = W[I++], C = W[I++], S += y[v >>> 2] + y[(v << 4 | A >>> 4) & 63] + y[(A << 2 | C >>> 6) & 63] + y[C & 63];
        return v = W[I], S += y[v >>> 2] + y[v << 4 & 63] + "==", S;
      };
      function k(v, A) {
        var C, S = O(v);
        if (v = S[0], S[1]) {
          var W = [], I = v.length, T = 0, X;
          for (C = 0; C < I; ++C)
            X = v.charCodeAt(C), X < 128 ? W[T++] = X : X < 2048 ? (W[T++] = 192 | X >>> 6, W[T++] = 128 | X & 63) : X < 55296 || X >= 57344 ? (W[T++] = 224 | X >>> 12, W[T++] = 128 | X >>> 6 & 63, W[T++] = 128 | X & 63) : (X = 65536 + ((X & 1023) << 10 | v.charCodeAt(++C) & 1023), W[T++] = 240 | X >>> 18, W[T++] = 128 | X >>> 12 & 63, W[T++] = 128 | X >>> 6 & 63, W[T++] = 128 | X & 63);
          v = W;
        }
        v.length > 64 && (v = new R(!0).update(v).array());
        var ae = [], Fe = [];
        for (C = 0; C < 64; ++C) {
          var Ye = v[C] || 0;
          ae[C] = 92 ^ Ye, Fe[C] = 54 ^ Ye;
        }
        R.call(this, A), this.update(Fe), this.oKeyPad = ae, this.inner = !0, this.sharedMemory = A;
      }
      k.prototype = new R(), k.prototype.finalize = function() {
        if (R.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var v = this.array();
          R.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(v), R.prototype.finalize.call(this);
        }
      };
      var N = $();
      N.md5 = N, N.md5.hmac = G(), i ? e.exports = N : o.md5 = N;
    })();
  }(es)), es.exports;
}
var K4 = W4();
const G4 = ["src", "alt"], CA = /* @__PURE__ */ H({
  __name: "GravatarImg",
  props: {
    email: {},
    size: { default: 100 }
  },
  setup(e) {
    const t = e, n = V(() => K4.md5(t.email.trim().toLowerCase())), r = V(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), o = V(() => `Gravatar for ${t.email}`);
    return (a, s) => (x(), P("img", {
      src: r.value,
      alt: o.value
    }, null, 8, G4));
  }
}), Y4 = ["id"], X4 = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, J4 = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, Q4 = { class: "space-y-1 px-4 py-1" }, EA = /* @__PURE__ */ H({
  __name: "NavCollapse",
  props: {
    open: { type: Boolean, default: !1 },
    name: {}
  },
  setup(e) {
    const t = e, n = _(t.open);
    return ne(
      () => t.open,
      (r) => n.value = r
    ), (r, o) => (x(), P("li", null, [
      Q(b(Ii), {
        defaultOpen: r.open,
        open: n.value,
        "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
      }, {
        default: M(() => [
          Q(b(Li), { asChild: "" }, {
            default: M(() => [
              D("button", {
                id: r.name,
                class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                r.$slots.icon ? (x(), P("div", X4, [
                  j(r.$slots, "icon")
                ])) : Y("", !0),
                D("span", J4, J(r.name), 1),
                Q(b(Se), {
                  icon: b(Js),
                  class: Z(["transition-all", { "rotate-180": n.value }])
                }, null, 8, ["icon", "class"])
              ], 8, Y4)
            ]),
            _: 3
          }),
          Q(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: M(() => [
              D("ul", Q4, [
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
}), Z4 = { class: "relative" }, eO = { class: "mt-4 flex flex-col items-center justify-center" }, tO = { class: "relative flex w-fit flex-row justify-center gap-3" }, nO = ["onClick"], PA = {
  __name: "DottedCarousel",
  props: {
    padding: { default: 0 },
    gap: { default: 20 }
  },
  setup(e) {
    const t = _(0), n = _(null), r = _(null), o = e, a = _(0);
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
    }), (c, l) => (x(), P("div", Z4, [
      D("div", {
        class: "flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden",
        style: dt({ gap: `${e.gap}px` }),
        ref_key: "container",
        ref: r,
        onScroll: l[0] || (l[0] = (...u) => c.onContainerScroll && c.onContainerScroll(...u))
      }, [
        j(c.$slots, "default")
      ], 36),
      D("div", eO, [
        D("div", tO, [
          D("div", {
            class: "absolute h-2 w-2 rounded-full bg-primary transition-all duration-300",
            style: dt({ left: `${a.value}px` }),
            ref_key: "activeDot",
            ref: n
          }, null, 4),
          (x(!0), P(re, null, Ce(Array(c.$slots.default().length).fill(""), (u, d) => (x(), P("div", {
            key: d,
            class: "h-2 w-2 cursor-pointer rounded-full bg-accent",
            onClick: (g) => s(g, d)
          }, null, 8, nO))), 128))
        ])
      ])
    ]));
  }
}, rO = /* @__PURE__ */ H({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), U(b(bn), {
      theme: b(we).PRIMARY,
      type: t.type,
      disabled: t.disabled,
      "custom-class": t.customButtonClass,
      size: t.size
    }, {
      default: M(() => [
        j(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), kA = {
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {
      type: String,
      default: "collapse"
    }
  },
  setup(e) {
    return (t, n) => (x(), U(Kf, {
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
}, oO = { class: "table-collapse-wrapper" }, aO = {
  colspan: 999,
  class: "border-0 p-0"
}, sO = { class: "border-t border-gray-200 bg-gray-50" }, iO = /* @__PURE__ */ H({
  __name: "TableCollapse",
  props: {
    expanded: { type: Boolean, default: !1 },
    rowId: { default: void 0 }
  },
  setup(e, { expose: t }) {
    const n = e, r = _(n.expanded), o = _();
    ne(
      () => n.expanded,
      (i) => {
        r.value = i, Te(() => {
          a();
        });
      }
    );
    const a = () => {
      o.value && (r.value ? o.value.style.maxHeight = o.value.scrollHeight + "px" : o.value.style.maxHeight = "0px");
    };
    return t({
      toggle: () => {
        r.value = !r.value, a();
      },
      isExpanded: r
    }), (i, c) => (x(), P("tr", oO, [
      D("td", aO, [
        D("div", {
          ref_key: "contentRef",
          ref: o,
          class: Z(["overflow-hidden transition-all duration-300 ease-in-out", { "max-h-0": !r.value, "max-h-[1000px]": r.value }])
        }, [
          D("div", sO, [
            j(i.$slots, "default", {}, void 0, !0)
          ])
        ], 2)
      ])
    ]));
  }
}), $A = /* @__PURE__ */ bo(iO, [["__scopeId", "data-v-aae23a75"]]), lO = { class: "relative mt-4 mb-6 rounded-lg border border-gray-200 bg-gray-50" }, uO = { class: "flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-100 px-4 py-2" }, cO = { class: "overflow-x-auto p-4 text-sm" }, dO = { class: "language-vue text-gray-800 font-mono" }, DA = /* @__PURE__ */ H({
  __name: "CodePreview",
  props: {
    code: {}
  },
  setup(e) {
    const t = e, n = _(""), r = _("Copy");
    pe(() => {
      n.value = t.code.join(`
`);
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
    return (a, s) => (x(), P("div", lO, [
      D("div", uO, [
        s[0] || (s[0] = D("span", { class: "text-sm font-medium text-gray-700" }, "Code Example", -1)),
        D("button", {
          onClick: o,
          class: Z(["rounded px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800", { "text-green-600": r.value.includes("✓"), "text-red-600": r.value.includes("✗") }]),
          title: "Copy to clipboard"
        }, J(r.value), 3)
      ]),
      D("pre", cO, [
        D("code", dO, J(n.value), 1)
      ])
    ]));
  }
}), fO = { class: "mt-12 mb-8" }, pO = ["id"], TA = /* @__PURE__ */ H({
  __name: "H2",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (x(), P("div", fO, [
      D("h2", {
        id: t.title.toLowerCase().replace(/\s+/g, "-"),
        class: "border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900"
      }, J(t.title), 9, pO)
    ]));
  }
}), FA = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  nA as Alert,
  bn as Button,
  Xy as Checkbox,
  DA as CodePreview,
  V3 as CollapsableSection,
  xA as Collapse,
  V3 as CollapsibleSection,
  hA as DangerButton,
  OA as DescriptionList,
  AA as DescriptionListItem,
  PA as DottedCarousel,
  aA as Dropdown,
  sA as DropdownLink,
  bO as DropdownSearchbar,
  iA as DropdownSeparator,
  UO as FileDropZoneInput,
  CA as GravatarImg,
  TA as H2,
  HO as Images,
  gA as InfoButton,
  ng as Input,
  en as InputError,
  qn as InputLabel,
  Xs as InputWrapper,
  lA as LinkButton,
  uA as LinkDropdownButton,
  cA as LinkDropdownButtonItem,
  dA as Logs,
  d4 as LogsContent,
  fA as Modal,
  EA as NavCollapse,
  mA as NavLink,
  pA as NewModal,
  _p as Pagination,
  rO as PrimaryButton,
  hO as PropsTable,
  WO as RadioButton,
  bA as ResponsiveNavLink,
  vO as RichSelect,
  I0 as SearchSelect,
  S4 as SecondaryButton,
  wA as Section,
  gO as Select,
  wO as Select2ajax,
  KO as SelectMultiple,
  qi as Spinner,
  SA as Stats,
  uo as SubmitButton,
  vA as SuccessButton,
  bg as Switch,
  GO as Table,
  $A as TableCollapse,
  tA as TableItemCard,
  XO as Tbody,
  Kf as Td,
  kA as TdCollapseHandler,
  ug as TextInput,
  pg as Textarea,
  JO as Th,
  YO as Thead,
  T4 as Tooltip,
  ZO as TrCollapse,
  QO as TrCollapseHandler,
  eA as TrPlaceholder,
  yO as UnderConstruction,
  yA as WarningButton,
  FA as default,
  Si as getInertiaPage,
  wr as getInertiaRouter,
  qO as hasPermission,
  rw as moneyFormat,
  jO as numberFormat,
  VO as setInertiaPage,
  zO as setInertiaRouter
};
