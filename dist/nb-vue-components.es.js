import * as Qi from "vue";
import { defineComponent as U, createElementBlock as P, openBlock as x, createElementVNode as D, createCommentVNode as G, Fragment as re, renderList as Ee, normalizeClass as Z, toDisplayString as Q, computed as V, createBlock as H, renderSlot as j, unref as b, watch as ne, h as qe, createVNode as J, mergeModels as pt, useModel as Mn, ref as L, onMounted as pe, withDirectives as He, vModelCheckbox as xc, createSlots as Uo, withCtx as B, vModelSelect as Oc, createTextVNode as fe, vShow as ln, vModelText as Ac, onUnmounted as Pt, Transition as un, nextTick as Fe, resolveDirective as Vp, normalizeProps as be, guardReactiveProps as Pe, resolveDynamicComponent as qr, mergeProps as ie, toHandlers as Ec, withModifiers as St, withKeys as rn, normalizeStyle as dt, shallowRef as mr, markRaw as es, reactive as hr, toRefs as Nt, getCurrentScope as Cc, onScopeDispose as Pc, shallowReadonly as Cn, Comment as kc, cloneVNode as Up, readonly as $c, effectScope as Dc, toValue as Rt, onBeforeUnmount as Hp, watchEffect as ot, customRef as Wp, getCurrentInstance as gn, inject as Gs, provide as Ys, toHandlerKey as Kp, camelize as Tc, Teleport as Fc, toRef as Gp, watchPostEffect as Rc, mergeDefaults as Ic, isRef as Yp, useSlots as Xp, useAttrs as Jp, resolveComponent as Qp } from "vue";
const Zp = { class: "overflow-x-auto" }, em = { class: "min-w-full divide-y divide-gray-200" }, tm = { class: "divide-y divide-gray-200 bg-white" }, nm = { key: 0 }, rm = { class: "px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900" }, om = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, am = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500" }, sm = { class: "px-6 py-4 text-sm text-gray-500" }, gO = /* @__PURE__ */ U({
  __name: "PropsTable",
  props: {
    rows: { default: () => [] }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), P("div", Zp, [
      D("table", em, [
        r[1] || (r[1] = D("thead", { class: "bg-gray-50" }, [
          D("tr", null, [
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Prop"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Type"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Default"),
            D("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase" }, "Description")
          ])
        ], -1)),
        D("tbody", tm, [
          t.rows.length === 0 ? (x(), P("tr", nm, r[0] || (r[0] = [
            D("td", {
              colspan: "4",
              class: "px-6 py-4 text-center text-sm text-gray-500"
            }, "No props defined", -1)
          ]))) : G("", !0),
          (x(!0), P(re, null, Ee(t.rows, (o, a) => (x(), P("tr", {
            key: a,
            class: Z({ "bg-yellow-50": o.highlight })
          }, [
            D("td", rm, Q(o.prop), 1),
            D("td", om, Q(o.type), 1),
            D("td", am, Q(o.default), 1),
            D("td", sm, Q(o.description), 1)
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
    const r = V(() => t.label ? t.label : t.field ? n(t.field) : ""), o = V(() => {
      var s, i;
      return t.error ? t.error : (i = (s = t.form) == null ? void 0 : s.errors) != null && i[t.field || ""] ? t.form.errors[t.field || ""] : null;
    }), a = V(() => t.htmlFor || t.field);
    return (s, i) => (x(), P("div", {
      class: Z(s.noLabel ? "mb-2" : "mb-4")
    }, [
      !s.noLabel && (r.value || s.field) ? (x(), H(b(qn), {
        key: 0,
        customClass: s.labelCustomClass,
        for: a.value,
        value: r.value,
        sublabel: s.sublabel,
        required: s.required,
        tooltip: s.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : G("", !0),
      j(s.$slots, "default"),
      o.value ? (x(), H(b(en), {
        key: 1,
        message: o.value,
        class: "mt-2"
      }, null, 8, ["message"])) : G("", !0)
    ], 2));
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const im = {
  prefix: "fas",
  iconName: "sort-down",
  icon: [320, 512, ["sort-desc"], "f0dd", "M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]
}, ts = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, lm = {
  prefix: "fas",
  iconName: "box-archive",
  icon: [512, 512, ["archive"], "f187", "M32 32l448 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96L0 64C0 46.3 14.3 32 32 32zm0 128l448 0 0 256c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-256zm128 80c0 8.8 7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-160 0c-8.8 0-16 7.2-16 16z"]
}, Zi = {
  prefix: "fas",
  iconName: "pen-ruler",
  icon: [512, 512, ["pencil-ruler"], "f5ae", "M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"]
}, um = {
  prefix: "fas",
  iconName: "circle-chevron-down",
  icon: [512, 512, ["chevron-circle-down"], "f13a", "M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"]
}, Js = um, cm = {
  prefix: "fas",
  iconName: "square-check",
  icon: [448, 512, [9745, 9989, 61510, "check-square"], "f14a", "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, el = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, dm = {
  prefix: "fas",
  iconName: "circle-check",
  icon: [512, 512, [61533, "check-circle"], "f058", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]
}, fm = dm, ns = {
  prefix: "fas",
  iconName: "circle-question",
  icon: [512, 512, [62108, "question-circle"], "f059", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]
}, tl = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, pm = {
  prefix: "fas",
  iconName: "sort-up",
  icon: [320, 512, ["sort-asc"], "f0de", "M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, mm = {
  prefix: "fas",
  iconName: "person-digging",
  icon: [576, 512, ["digging"], "f85e", "M208 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM9.8 214.8c5.1-12.2 19.1-18 31.4-12.9L60.7 210l22.9-38.1C99.9 144.6 129.3 128 161 128c51.4 0 97 32.9 113.3 81.7l34.6 103.7 79.3 33.1 34.2-45.6c6.4-8.5 16.6-13.3 27.2-12.8s20.3 6.4 25.8 15.5l96 160c5.9 9.9 6.1 22.2 .4 32.2s-16.3 16.2-27.8 16.2l-256 0c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l16-32c5.4-10.8 16.5-17.7 28.6-17.7l32 0 22.5-30L22.8 246.2c-12.2-5.1-18-19.1-12.9-31.4zm82.8 91.8l112 48c11.8 5 19.4 16.6 19.4 29.4l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-74.9-60.6-26-37 111c-5.6 16.8-23.7 25.8-40.5 20.2S-3.9 486.6 1.6 469.9l48-144 11-33 32 13.7z"]
}, hm = {
  prefix: "fas",
  iconName: "circle-info",
  icon: [512, 512, ["info-circle"], "f05a", "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]
}, ym = hm, gm = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, vm = gm, Qs = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, bm = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, wm = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, Qr = wm, Sm = {
  prefix: "fas",
  iconName: "spinner",
  icon: [512, 512, [], "f110", "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"]
}, xm = {
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
}, Cm = Em;
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
function Pm(e, t, n) {
  return (t = $m(t)) in e ? Object.defineProperty(e, t, {
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
      Pm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nl(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function km(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function $m(e) {
  var t = km(e, "string");
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
var Dm = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Tm = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, Nc = {
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
}, Fm = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, jc = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Be = "classic", mo = "duotone", Rm = "sharp", Im = "sharp-duotone", qc = [Be, mo, Rm, Im], _m = {
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
}, Bm = /* @__PURE__ */ new Map([["classic", {
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
}]]), Mm = {
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
}, Nm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], sl = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, jm = ["kit"], qm = {
  kit: {
    "fa-kit": "fak"
  }
}, zm = ["fak", "fakd"], Vm = {
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
}, Um = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"], Hm = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Wm = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, Km = {
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
}, Gm = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"]
}, rs = {
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
}, Ym = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands"], os = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", ...Um, ...Ym], Xm = ["solid", "regular", "light", "thin", "duotone", "brands"], zc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Jm = zc.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Qm = [...Object.keys(Gm), ...Xm, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Fr.GROUP, Fr.SWAP_OPACITY, Fr.PRIMARY, Fr.SECONDARY].concat(zc.map((e) => "".concat(e, "x"))).concat(Jm.map((e) => "w-".concat(e))), Zm = {
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
const _t = "___FONT_AWESOME___", as = 16, Vc = "fa", Uc = "svg-inline--fa", dn = "data-fa-i2svg", ss = "data-fa-pseudo-element", eh = "data-fa-pseudo-element-pending", ei = "data-prefix", ti = "data-icon", ll = "fontawesome-i2svg", th = "async", nh = ["HTML", "HEAD", "STYLE", "SCRIPT"], Hc = (() => {
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
const rh = yr(Wc), is = K({}, Mm);
is[Be] = K(K(K(K({}, {
  duotone: "fad"
}), is[Be]), il.kit), il["kit-duotone"]);
const ul = yr(is), ls = K({}, rs);
ls[Be] = K(K({}, ls[Be]), Vm.kit);
const ni = yr(ls), us = K({}, Km);
us[Be] = K(K({}, us[Be]), qm.kit);
yr(us);
const oh = Dm, Kc = "fa-layers-text", ah = Tm, sh = K({}, _m);
yr(sh);
const ih = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ho = Fm, lh = [...jm, ...Qm], or = Gt.FontAwesomeConfig || {};
function uh(e) {
  var t = ge.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ch(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
ge && typeof ge.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = ch(uh(n));
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
function dh(e) {
  return ar.push(e), () => {
    ar.splice(ar.indexOf(e), 1);
  };
}
const Ht = as, xt = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function fh(e) {
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
const ph = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ur() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += ph[Math.random() * 62 | 0];
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
function mh(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Yc(e[n]), '" '), "").trim();
}
function ho(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function oi(e) {
  return e.size !== xt.size || e.x !== xt.x || e.y !== xt.y || e.rotate !== xt.rotate || e.flipX || e.flipY;
}
function hh(e) {
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
function yh(e) {
  let {
    transform: t,
    width: n = as,
    height: r = as,
    startCentered: o = !1
  } = e, a = "";
  return o && Mc ? a += "translate(".concat(t.x / Ht - n / 2, "em, ").concat(t.y / Ht - r / 2, "em) ") : o ? a += "translate(calc(-50% + ".concat(t.x / Ht, "em), calc(-50% + ").concat(t.y / Ht, "em)) ") : a += "translate(".concat(t.x / Ht, "em, ").concat(t.y / Ht, "em) "), a += "scale(".concat(t.size / Ht * (t.flipX ? -1 : 1), ", ").concat(t.size / Ht * (t.flipY ? -1 : 1), ") "), a += "rotate(".concat(t.rotate, "deg) "), a;
}
var gh = `:root, :host {
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
  let o = gh;
  if (n !== e || r !== t) {
    const a = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), i = new RegExp("\\.".concat(t), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(i, ".".concat(r));
  }
  return o;
}
let cl = !1;
function Wo() {
  ee.autoAddCss && !cl && (fh(Xc()), cl = !0);
}
var vh = {
  mixout() {
    return {
      dom: {
        css: Xc,
        insertCss: Wo
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Wo();
      },
      beforeI2svg() {
        Wo();
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
function bh(e) {
  jt && (Zr ? setTimeout(e, 0) : Jc.push(e));
}
function gr(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Yc(e) : "<".concat(t, " ").concat(mh(n), ">").concat(r.map(gr).join(""), "</").concat(t, ">");
}
function dl(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ko = function(t, n, r, o) {
  var a = Object.keys(t), s = a.length, i = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[a[0]]) : (c = 0, u = r); c < s; c++)
    l = a[c], u = i(u, t[l], l, t);
  return u;
};
function wh(e) {
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
function cs(e) {
  const t = wh(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Sh(e, t) {
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
function ds(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = fl(t);
  typeof Ot.hooks.addPack == "function" && !r ? Ot.hooks.addPack(e, fl(t)) : Ot.styles[e] = K(K({}, Ot.styles[e] || {}), o), e === "fas" && ds("fa", t);
}
const {
  styles: cr,
  shims: xh
} = Ot, Zc = Object.keys(ni), Oh = Zc.reduce((e, t) => (e[t] = Object.keys(ni[t]), e), {});
let ai = null, ed = {}, td = {}, nd = {}, rd = {}, od = {};
function Ah(e) {
  return ~lh.indexOf(e);
}
function Eh(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !Ah(o) ? o : null;
}
const ad = () => {
  const e = (r) => Ko(cr, (o, a, s) => (o[s] = Ko(a, r, {}), o), {});
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
  const t = "far" in cr || ee.autoFetchSvg, n = Ko(xh, (r, o) => {
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
dh((e) => {
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
function Ph(e) {
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
function kh(e) {
  let t = Be;
  const n = Zc.reduce((r, o) => (r[o] = "".concat(ee.cssPrefix, "-").concat(o), r), {});
  return qc.forEach((r) => {
    (e.includes(n[r]) || e.some((o) => Oh[r].includes(o))) && (t = r);
  }), t;
}
function yo(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = Be
  } = t, r = rh[n][e];
  if (n === mo && !e)
    return "fad";
  const o = ul[n][e] || ul[n][r], a = e in Ot.styles ? e : null;
  return o || a || null;
}
function $h(e) {
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
function go(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t;
  let r = null;
  const o = os.concat(Hm), a = pl(e.filter((d) => o.includes(d))), s = pl(e.filter((d) => !os.includes(d))), i = a.filter((d) => (r = d, !jc.includes(d))), [c = null] = i, l = kh(a), u = K(K({}, $h(s)), {}, {
    prefix: yo(c, {
      family: l
    })
  });
  return K(K(K({}, u), Rh({
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
  const a = t === "fa" ? sd(o) : {}, s = on(r, o);
  return o = a.iconName || s || o, r = a.prefix || r, r === "far" && !cr.far && cr.fas && !ee.autoFetchSvg && (r = "fas"), {
    prefix: r,
    iconName: o
  };
}
const Th = qc.filter((e) => e !== Be || e !== mo), Fh = Object.keys(rs).filter((e) => e !== Be).map((e) => Object.keys(rs[e])).flat();
function Rh(e) {
  const {
    values: t,
    family: n,
    canonical: r,
    givenPrefix: o = "",
    styles: a = {},
    config: s = {}
  } = e, i = n === mo, c = t.includes("fa-duotone") || t.includes("fad"), l = s.familyDefault === "duotone", u = r.prefix === "fad" || r.prefix === "fa-duotone";
  if (!i && (c || l || u) && (r.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (r.prefix = "fab"), !r.prefix && Th.includes(n) && (Object.keys(a).find((g) => Fh.includes(g)) || s.autoFetchSvg)) {
    const g = Bm.get(n).defaultShortPrefixId;
    r.prefix = g, r.iconName = on(r.prefix, r.iconName) || r.iconName;
  }
  return (r.prefix === "fa" || o === "fa") && (r.prefix = Yt() || "fas"), r;
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
      this.definitions[a] = K(K({}, this.definitions[a] || {}), o[a]), ds(a, o[a]);
      const s = ni[Be][a];
      s && ds(s, o[a]), ad();
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
const Fn = {}, _h = Object.keys(Fn);
function Lh(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return ml = e, Dn = {}, Object.keys(Fn).forEach((r) => {
    _h.indexOf(r) === -1 && delete Fn[r];
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
function fs(e, t) {
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
function ps(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Yt();
  if (t)
    return t = on(n, t) || t, dl(ld.definitions, n, t) || dl(Ot.styles, n, t);
}
const ld = new Ih(), Bh = () => {
  ee.autoReplaceSvg = !1, ee.observeMutations = !1, fn("noAuto");
}, Mh = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return jt ? (fn("beforeI2svg", e), Xt("pseudoElements2svg", e), Xt("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    ee.autoReplaceSvg === !1 && (ee.autoReplaceSvg = !0), ee.observeMutations = !0, bh(() => {
      jh({
        autoReplaceSvgRoot: t
      }), fn("watch", e);
    });
  }
}, Nh = {
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
    if (typeof e == "string" && (e.indexOf("".concat(ee.cssPrefix, "-")) > -1 || e.match(oh))) {
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
  noAuto: Bh,
  config: ee,
  dom: Mh,
  parse: Nh,
  library: ld,
  findIconDefinition: ps,
  toHtml: gr
}, jh = function() {
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
function qh(e) {
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
  } = n.found ? n : t, m = zm.includes(r), p = [ee.replacementClass, o ? "".concat(ee.cssPrefix, "-").concat(o) : ""].filter(($) => u.classes.indexOf($) === -1).filter(($) => $ !== "" || !!$).concat(u.classes).join(" ");
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
    attributes: C
  } = n.found && t.found ? Xt("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : Xt("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = O, w.attributes = C, s ? zh(w) : qh(w);
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
  oi(o) && (l.transform = yh({
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
function Vh(e) {
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
  styles: Go
} = Ot;
function ms(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(ee.cssPrefix, "-").concat(Ho.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Ho.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(ee.cssPrefix, "-").concat(Ho.PRIMARY),
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
const Uh = {
  found: !1,
  width: 512,
  height: 512
};
function Hh(e, t) {
  !Hc && !ee.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function hs(e, t) {
  let n = t;
  return t === "fa" && ee.styleDefault !== null && (t = Yt()), new Promise((r, o) => {
    if (n === "fa") {
      const a = sd(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Go[t] && Go[t][e]) {
      const a = Go[t][e];
      return r(ms(a));
    }
    Hh(e, t), r(K(K({}, Uh), {}, {
      icon: ee.showMissingIcons && e ? Xt("missingIconAbstract") || {} : {}
    }));
  });
}
const yl = () => {
}, ys = ee.measurePerformance && Tr && Tr.mark && Tr.measure ? Tr : {
  mark: yl,
  measure: yl
}, er = 'FA "6.7.2"', Wh = (e) => (ys.mark("".concat(er, " ").concat(e, " begins")), () => ud(e)), ud = (e) => {
  ys.mark("".concat(er, " ").concat(e, " ends")), ys.measure("".concat(er, " ").concat(e), "".concat(er, " ").concat(e, " begins"), "".concat(er, " ").concat(e, " ends"));
};
var li = {
  begin: Wh,
  end: ud
};
const zr = () => {
};
function gl(e) {
  return typeof (e.getAttribute ? e.getAttribute(dn) : null) == "string";
}
function Kh(e) {
  const t = e.getAttribute ? e.getAttribute(ei) : null, n = e.getAttribute ? e.getAttribute(ti) : null;
  return t && n;
}
function Gh(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(ee.replacementClass);
}
function Yh() {
  return ee.autoReplaceSvg === !0 ? Vr.replace : Vr[ee.autoReplaceSvg] || Vr.replace;
}
function Xh(e) {
  return ge.createElementNS("http://www.w3.org/2000/svg", e);
}
function Jh(e) {
  return ge.createElement(e);
}
function cd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Xh : Jh
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
function Qh(e) {
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
        let n = ge.createComment(Qh(t));
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
    ee.mutateApproach === th && (r = Gt.requestAnimationFrame || vl), r(() => {
      const o = Yh(), a = li.begin("mutate");
      e.map(o), a(), n();
    });
  }
}
let ui = !1;
function fd() {
  ui = !0;
}
function gs() {
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
      if (i.type === "childList" && i.addedNodes.length > 0 && !gl(i.addedNodes[0]) && (ee.searchPseudoElements && r(i.target), t(i.target)), i.type === "attributes" && i.target.parentNode && ee.searchPseudoElements && r(i.target.parentNode), i.type === "attributes" && gl(i.target) && ~ih.indexOf(i.attributeName))
        if (i.attributeName === "class" && Kh(i.target)) {
          const {
            prefix: c,
            iconName: l
          } = go(ri(i.target));
          i.target.setAttribute(ei, c || s), l && i.target.setAttribute(ti, l);
        } else Gh(i.target) && n(i.target);
    });
  }), jt && eo.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function Zh() {
  eo && eo.disconnect();
}
function ey(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const a = o.split(":"), s = a[0], i = a.slice(1);
    return s && i.length > 0 && (r[s] = i.join(":").trim()), r;
  }, {})), n;
}
function ty(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = go(ri(e));
  return o.prefix || (o.prefix = Yt()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = Ch(o.prefix, e.innerText) || si(o.prefix, cs(e.innerText))), !o.iconName && ee.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function ny(e) {
  const t = Nn(e.attributes).reduce((o, a) => (o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return ee.autoA11y && (n ? t["aria-labelledby"] = "".concat(ee.replacementClass, "-title-").concat(r || ur()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function ry() {
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
  } = ty(e), a = ny(e), s = fs("parseNodeAttributes", {}, e);
  let i = t.styleParser ? ey(e) : [];
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
  styles: oy
} = Ot;
function pd(e) {
  const t = ee.autoReplaceSvg === "nest" ? wl(e, {
    styleParser: !1
  }) : wl(e);
  return ~t.extra.classes.indexOf(Kc) ? Xt("generateLayersText", e, t) : Xt("generateSvgReplacementMutation", e, t);
}
function ay() {
  return [...Nm, ...os];
}
function Sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!jt) return Promise.resolve();
  const n = ge.documentElement.classList, r = (u) => n.add("".concat(ll, "-").concat(u)), o = (u) => n.remove("".concat(ll, "-").concat(u)), a = ee.autoFetchSvg ? ay() : jc.concat(Object.keys(oy));
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
function sy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  pd(e).then((n) => {
    n && dd([n], t);
  });
}
function iy(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ps(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : ps(o || {})), e(r, K(K({}, n), {}, {
      mask: o
    }));
  };
}
const ly = function(e) {
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
      main: ms(y),
      mask: o ? ms(o.icon) : {
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
var uy = {
  mixout() {
    return {
      icon: iy(ly)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = Sl, e.nodeCallback = sy, e;
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
        Promise.all([hs(r, s), l.iconName ? hs(l.iconName, l.prefix) : Promise.resolve({
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
}, cy = {
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
}, dy = {
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
        }), Vh({
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
}, fy = {
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
const py = new RegExp('"', "ug"), xl = [1105920, 1112319], Ol = K(K(K(K({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), Lm), Zm), Wm), vs = Object.keys(Ol).reduce((e, t) => (e[t.toLowerCase()] = Ol[t], e), {}), my = Object.keys(vs).reduce((e, t) => {
  const n = vs[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function hy(e) {
  const t = e.replace(py, ""), n = Sh(t, 0), r = n >= xl[0] && n <= xl[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: cs(o ? t[0] : t),
    isSecondary: r || o
  };
}
function yy(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (vs[n] || {})[o] || my[n];
}
function Al(e, t) {
  const n = "".concat(eh).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const s = Nn(e.children).filter((g) => g.getAttribute(ss) === t)[0], i = Gt.getComputedStyle(e, t), c = i.getPropertyValue("font-family"), l = c.match(ah), u = i.getPropertyValue("font-weight"), d = i.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && d !== "none" && d !== "") {
      const g = i.getPropertyValue("content");
      let y = yy(c, u);
      const {
        value: m,
        isSecondary: p
      } = hy(g), f = l[0].startsWith("FontAwesome");
      let h = si(y, m), w = h;
      if (f) {
        const O = Ph(m);
        O.iconName && O.prefix && (h = O.iconName, y = O.prefix);
      }
      if (h && !p && (!s || s.getAttribute(ei) !== y || s.getAttribute(ti) !== w)) {
        e.setAttribute(n, w), s && e.removeChild(s);
        const O = ry(), {
          extra: C
        } = O;
        C.attributes[ss] = t, hs(h, y).then(($) => {
          const z = ii(K(K({}, O), {}, {
            icons: {
              main: $,
              mask: id()
            },
            prefix: y,
            iconName: w,
            extra: C,
            watchable: !0
          })), q = ge.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(q, e.firstChild) : e.appendChild(q), q.outerHTML = z.map((Y) => gr(Y)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function gy(e) {
  return Promise.all([Al(e, "::before"), Al(e, "::after")]);
}
function vy(e) {
  return e.parentNode !== document.head && !~nh.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(ss) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function El(e) {
  if (jt)
    return new Promise((t, n) => {
      const r = Nn(e.querySelectorAll("*")).filter(vy).map(gy), o = li.begin("searchPseudoElements");
      fd(), Promise.all(r).then(() => {
        o(), gs(), t();
      }).catch(() => {
        o(), gs(), n();
      });
    });
}
var by = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = El, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = ge
      } = t;
      ee.searchPseudoElements && El(n);
    };
  }
};
let Cl = !1;
var wy = {
  mixout() {
    return {
      dom: {
        unwatch() {
          fd(), Cl = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        bl(fs("mutationObserverCallbacks", {}));
      },
      noAuto() {
        Zh();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Cl ? gs() : bl(fs("mutationObserverCallbacks", {
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
var Sy = {
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
const Yo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function kl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function xy(e) {
  return e.tag === "g" ? e.children : [e];
}
var Oy = {
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
      } = a, g = hh({
        transform: i,
        containerWidth: u,
        iconWidth: c
      }), y = {
        tag: "rect",
        attributes: K(K({}, Yo), {}, {
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
        attributes: K(K({}, Yo), {}, {
          id: h,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [y, f]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: xy(d)
        }, O]
      };
      return n.push(C, {
        tag: "rect",
        attributes: K({
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(h, ")")
        }, Yo)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Ay = {
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
}, Ey = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, Cy = [vh, uy, cy, dy, fy, by, wy, Sy, Oy, Ay, Ey];
Lh(Cy, {
  mixoutsTo: tt
});
tt.noAuto;
const md = tt.config, jn = tt.library;
tt.dom;
const to = tt.parse;
tt.findIconDefinition;
tt.toHtml;
const Py = tt.icon;
tt.layer;
const ky = tt.text;
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
function $y(e, t) {
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
  var t = $y(e, "string");
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
  return t = Dy(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ty(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function Fy(e, t) {
  if (e == null) return {};
  var n = Ty(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      r = a[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function bs(e) {
  return Ry(e) || Iy(e) || _y(e) || Ly();
}
function Ry(e) {
  if (Array.isArray(e)) return ws(e);
}
function Iy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _y(e, t) {
  if (e) {
    if (typeof e == "string") return ws(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ws(e, t);
  }
}
function ws(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Ly() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var By = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hd = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(h, w, O) {
      if (!l(w) || d(w) || g(w) || y(w) || c(w))
        return w;
      var C, $ = 0, z = 0;
      if (u(w))
        for (C = [], z = w.length; $ < z; $++)
          C.push(n(h, w[$], O));
      else {
        C = {};
        for (var q in w)
          Object.prototype.hasOwnProperty.call(w, q) && (C[h(q, O)] = n(h, w[q], O));
      }
      return C;
    }, r = function(h, w) {
      w = w || {};
      var O = w.separator || "_", C = w.split || /(?=[A-Z])/;
      return h.split(C).join(O);
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
      return typeof O != "function" ? h : function(C, $) {
        return O(C, h, $);
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
  })(By);
})(hd);
var My = hd.exports, Ny = ["class", "style"];
function jy(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = My.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[o] = a, t;
  }, {});
}
function qy(e) {
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
        c.class = qy(u);
        break;
      case "style":
        c.style = jy(u);
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
  var a = n.style, s = a === void 0 ? {} : a, i = Fy(n, Ny);
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
function zy() {
  if (!yd && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function sr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Ve({}, e, t) : {};
}
function Vy(e) {
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
var Se = U({
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
      return sr("classes", Vy(t));
    }), s = V(function() {
      return sr("transform", typeof t.transform == "string" ? to.transform(t.transform) : t.transform);
    }), i = V(function() {
      return sr("mask", Dl(t.mask));
    }), c = V(function() {
      return Py(o.value, ct(ct(ct(ct({}, a.value), s.value), i.value), {}, {
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
    var l = V(function() {
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
    var r = n.slots, o = md.familyPrefix, a = V(function() {
      return ["".concat(o, "-layers")].concat(bs(t.fixedWidth ? ["".concat(o, "-fw")] : []));
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
    var r = n.attrs, o = md.familyPrefix, a = V(function() {
      return sr("classes", [].concat(bs(t.counter ? ["".concat(o, "-layers-counter")] : []), bs(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), s = V(function() {
      return sr("transform", typeof t.transform == "string" ? to.transform(t.transform) : t.transform);
    }), i = V(function() {
      var l = ky(t.value.toString(), ct(ct({}, s.value), a.value)), u = l.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), c = V(function() {
      return ci(i.value, {}, r);
    });
    return function() {
      return c.value;
    };
  }
});
const Uy = { class: "py-ui px-ui gap-ui-half flex flex-col rounded bg-white text-center" }, Hy = { class: "whitespace-pre-line text-gray-600" }, Wy = /* @__PURE__ */ U({
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
      D("div", Uy, [
        J(b(Se), {
          icon: b(mm),
          class: "text-primary text-4xl"
        }, null, 8, ["icon"]),
        n[0] || (n[0] = D("h1", { class: "text-2xl font-bold" }, "Under Construction", -1)),
        D("p", Hy, Q(t.info), 1)
      ])
    ], 2));
  }
}), di = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, vO = /* @__PURE__ */ di(Wy, [["__scopeId", "data-v-360f3e83"]]), Ky = { class: "flex items-center" }, Gy = {
  key: 1,
  class: "mr-1"
}, Yy = ["id", "value", "disabled", "required", "name"], Xy = {
  key: 3,
  class: "ml-1"
}, Jy = /* @__PURE__ */ U({
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
    const s = Mn(e, "modelValue"), i = L(!1), c = L(), l = L(), u = L(!1);
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
        !f.noLabel && f.label ? (x(), H(b(qn), {
          key: 0,
          customClass: f.labelCustomClass,
          for: y.value,
          value: d.value,
          sublabel: f.sublabel,
          required: f.required,
          tooltip: f.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : G("", !0),
        D("label", Ky, [
          (w = f.$slots) != null && w.leftDescription ? j(f.$slots, "leftDescription", { key: 0 }) : f.leftDescription ? (x(), P("span", Gy, Q(f.leftDescription === !0 ? "Disable" : f.leftDescription), 1)) : G("", !0),
          He(D("input", {
            type: "checkbox",
            id: y.value,
            value: c.value,
            "onUpdate:modelValue": h[0] || (h[0] = (C) => c.value = C),
            disabled: f.disabled,
            required: f.required,
            name: f.name || f.field,
            class: Z(["text-accent-600 focus:ring-accent-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none", { [f.customClass]: f.customClass }])
          }, null, 10, Yy), [
            [xc, c.value]
          ]),
          (O = f.$slots) != null && O.rightDescription ? j(f.$slots, "rightDescription", { key: 2 }) : f.rightDescription ? (x(), P("span", Xy, Q(f.rightDescription === !0 ? "Enable" : f.rightDescription), 1)) : G("", !0)
        ]),
        g.value ? (x(), H(b(en), {
          key: 1,
          message: g.value,
          class: "mt-2"
        }, null, 8, ["message"])) : G("", !0)
      ], 2);
    };
  }
});
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */
const Qy = {
  prefix: "far",
  iconName: "square",
  icon: [448, 512, [9632, 9723, 9724, 61590], "f0c8", "M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"]
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
}, Zy = { class: "relative flex w-full max-w-full items-stretch" }, eg = ["id", "required", "disabled", "name"], tg = { class: "relative flex w-full" }, ng = ["href"], rg = {
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
    jn.add(fi, cm, Qy, tl, el, ns);
    const r = e;
    function o(p) {
      let f = [];
      return p.split("_").join(" ").split(" ").map(function(h) {
        f.push(h[0].toUpperCase() + h.slice(1));
      }), f.join(" ");
    }
    const a = n, s = L(!1), i = Mn(e, "modelValue"), c = L(), l = L(), u = L(r.type);
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
    const d = L(!1), g = (p) => {
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
      var h, w, O, C, $, z, q, Y, R, k, N;
      return e.type === "textarea" ? (x(), H(b(mg), {
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
      }, Uo({ _: 2 }, [
        (h = p.$slots) != null && h.submit ? {
          name: "submit",
          fn: B(() => [
            j(p.$slots, "submit")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "addon", "placeholder", "no-label", "autofocus", "rows", "name", "sublabel", "submit-btn", "whats-app", "autocomplete", "tooltip", "custom-class", "label-custom-class", "button-custom-class", "error", "modelValue"])) : e.type === "switch" ? (x(), H(b(wg), {
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
      }, Uo({ _: 2 }, [
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
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : e.type === "checkbox" ? (x(), H(b(Jy), {
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
      }, Uo({ _: 2 }, [
        (C = p.$slots) != null && C.leftDescription ? {
          name: "leftDescription",
          fn: B(() => [
            j(p.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        ($ = p.$slots) != null && $.rightDescription ? {
          name: "rightDescription",
          fn: B(() => [
            j(p.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "modelValue"])) : (x(), P("div", {
        key: 3,
        class: Z(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? G("", !0) : (x(), H(b(qn), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: e.label ? e.label : e.field ? o(e.field) : "",
          sublabel: e.sublabel,
          required: e.required,
          tooltip: e.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        D("div", Zy, [
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
          ], 10, eg)), [
            [Oc, c.value]
          ]) : (x(), P(re, { key: 1 }, [
            e.addon ? (x(), P("span", {
              key: 0,
              class: Z(["flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !r.disabled }])
            }, Q(e.addon), 3)) : G("", !0),
            D("div", tg, [
              J(b(cg), {
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
                u.value === "password" ? (x(), H(b(Se), {
                  key: 0,
                  icon: b(tl)
                }, null, 8, ["icon"])) : (x(), H(b(Se), {
                  key: 1,
                  icon: b(el)
                }, null, 8, ["icon"]))
              ])) : G("", !0)
            ]),
            e.form ? (x(), P(re, { key: 1 }, [
              e.submitBtn ? (x(), H(b(uo), {
                key: 0,
                form: e.form,
                class: Z(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: B(() => [
                  fe(Q(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : G("", !0),
              (q = p.$slots) != null && q.submit ? (x(), H(b(uo), {
                key: 1,
                form: e.form,
                class: Z(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-input"
              }, {
                default: B(() => [
                  j(p.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : G("", !0)
            ], 64)) : G("", !0),
            e.whatsApp ? (x(), P("a", {
              key: 2,
              class: Z(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              J(b(Se), {
                icon: "fab fa-whatsapp",
                size: "2xl"
              })
            ], 10, ng)) : G("", !0)
          ], 64))
        ]),
        e.error || (R = (Y = e.form) == null ? void 0 : Y.errors) != null && R[e.field] ? (x(), H(b(en), {
          key: 1,
          message: e.error ? e.error : (N = (k = e.form) == null ? void 0 : k.errors) == null ? void 0 : N[e.field],
          class: "mt-2"
        }, null, 8, ["message"])) : G("", !0)
      ], 2));
    };
  }
}, og = { class: "text-sm text-red-600" }, en = /* @__PURE__ */ U({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(e) {
    return (t, n) => He((x(), P("div", null, [
      D("p", og, Q(t.message), 1)
    ], 512)), [
      [ln, t.message]
    ]);
  }
}), ag = { key: 0 }, sg = { key: 1 }, ig = {
  key: 3,
  class: "ml-2 text-xs text-gray-500"
}, lg = {
  key: 4,
  class: "ml-1 text-red-500"
}, qn = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass", "tooltip"],
  setup(e) {
    return jn.add(ns), (t, n) => (x(), P("label", {
      class: Z(["mb-1 block text-sm font-medium text-gray-700", e.customClass])
    }, [
      e.value ? (x(), P("span", ag, Q(e.value), 1)) : (x(), P("span", sg, [
        j(t.$slots, "default")
      ])),
      e.tooltip ? (x(), H(b(L4), {
        key: 2,
        content: e.tooltip,
        class: "ml-1 inline-block"
      }, {
        default: B(() => [
          J(b(Se), {
            icon: b(ns),
            class: "mx-1 cursor-help"
          }, null, 8, ["icon"])
        ]),
        _: 1
      }, 8, ["content"])) : G("", !0),
      e.sublabel ? (x(), P("span", ig, Q(e.sublabel), 1)) : G("", !0),
      e.required ? (x(), P("span", lg, "*")) : G("", !0)
    ], 2));
  }
}, ug = ["value"], cg = /* @__PURE__ */ U({
  __name: "TextInput",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = L(null), a = (s) => {
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
    }, null, 40, ug));
  }
}), dg = { class: "relative flex w-full max-w-full items-stretch" }, fg = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], pg = ["href"], mg = /* @__PURE__ */ U({
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
    const s = L(!1), i = Mn(e, "modelValue"), c = L(), l = L(), u = L(!1);
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
    }), (p, f) => (x(), H(b(Xs), {
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
      default: B(() => {
        var h, w;
        return [
          D("div", dg, [
            p.addon ? (x(), P("span", {
              key: 0,
              class: Z(["border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500", { shadow: !p.disabled }])
            }, Q(p.addon), 3)) : G("", !0),
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
            }, null, 10, fg), [
              [Ac, c.value]
            ]),
            p.form ? (x(), P(re, { key: 1 }, [
              p.submitBtn ? (x(), H(b(uo), {
                key: 0,
                form: p.form,
                class: Z(["z-2 inline-block rounded-l-none", p.buttonCustomClass]),
                id: `submit-button-${p.field}`
              }, {
                default: B(() => [
                  fe(Q(p.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : G("", !0),
              (w = p.$slots) != null && w.submit ? (x(), H(b(uo), {
                key: 1,
                form: p.form,
                class: Z(["z-2 inline-block rounded-l-none", p.buttonCustomClass]),
                id: "button-textarea"
              }, {
                default: B(() => [
                  j(p.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : G("", !0)
            ], 64)) : G("", !0),
            p.whatsApp ? (x(), P("a", {
              key: 2,
              class: Z(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", p.buttonCustomClass]),
              href: p.whatsApp,
              target: "_blank"
            }, [
              J(b(Se), {
                icon: b(fi),
                size: "2xl"
              }, null, 8, ["icon"])
            ], 10, pg)) : G("", !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), hg = { class: "flex items-center" }, yg = {
  key: 1,
  class: "mr-1"
}, gg = ["id", "disabled", "required", "name"], vg = {
  key: 3,
  class: "ml-1"
}, bg = /* @__PURE__ */ U({
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
    const s = L(!1), i = Mn(e, "modelValue"), c = L(), l = L(), u = L(!1);
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
        p.noLabel ? G("", !0) : (x(), H(b(qn), {
          key: 0,
          customClass: p.labelCustomClass,
          for: p.field,
          value: d.value,
          sublabel: p.sublabel,
          required: p.required,
          tooltip: p.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        D("label", hg, [
          (h = p.$slots) != null && h.leftDescription ? j(p.$slots, "leftDescription", { key: 0 }, void 0, !0) : p.leftDescription ? (x(), P("span", yg, Q(p.leftDescription === !0 ? "Disable" : p.leftDescription), 1)) : G("", !0),
          He(D("input", {
            id: p.field,
            type: "checkbox",
            class: "hidden",
            "onUpdate:modelValue": f[0] || (f[0] = (O) => c.value = O),
            disabled: p.disabled,
            required: p.required,
            name: p.name || p.field
          }, null, 8, gg), [
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
          (w = p.$slots) != null && w.rightDescription ? j(p.$slots, "rightDescription", { key: 2 }, void 0, !0) : p.rightDescription ? (x(), P("span", vg, Q(p.rightDescription === !0 ? "Enable" : p.rightDescription), 1)) : G("", !0)
        ]),
        g.value ? (x(), H(b(en), {
          key: 1,
          message: g.value,
          class: "mt-2"
        }, null, 8, ["message"])) : G("", !0)
      ], 2);
    };
  }
}), wg = /* @__PURE__ */ di(bg, [["__scopeId", "data-v-dc63ff1f"]]), Sg = ["id", "required", "disabled", "name"], xg = ["selected"], Og = ["value", "disabled"], bO = /* @__PURE__ */ U({
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
    const s = L(!1), i = Mn(e, "modelValue"), c = L(), l = L(), u = L(!1);
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
    }), (f, h) => (x(), H(b(Xs), {
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
      default: B(() => [
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
          }, Q(f.placeholder), 9, xg)) : G("", !0),
          (x(!0), P(re, null, Ee(d.value, (w) => (x(), P("option", {
            key: w.value,
            value: w.value,
            disabled: w.disabled
          }, Q(w.label), 9, Og))), 128)),
          j(f.$slots, "default")
        ], 10, Sg), [
          [Oc, c.value]
        ])
      ]),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Ag = ["id", "disabled"], Eg = { class: "flex flex-wrap gap-1" }, Cg = ["onClick"], Pg = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, kg = { class: "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg" }, $g = {
  key: 0,
  class: "border-b border-gray-200 p-2"
}, Dg = { class: "relative" }, Tg = {
  key: 1,
  class: "flex items-center justify-center p-4"
}, Fg = {
  key: 2,
  class: "max-h-60 overflow-auto"
}, Rg = {
  key: 0,
  class: "bg-gray-50 px-3 py-2 text-xs font-semibold tracking-wide text-gray-500 uppercase"
}, Ig = ["onClick", "disabled"], _g = { class: "block truncate" }, Lg = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, Bg = ["onClick", "disabled"], Mg = { class: "block truncate" }, Ng = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, jg = {
  key: 2,
  class: "px-3 py-2 text-center text-sm text-gray-500"
}, wO = /* @__PURE__ */ U({
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
    const n = e, r = t, o = L(!1), a = L(""), s = L(!1), i = L(null), c = L([...n.options]), l = L(), u = L(), d = V({
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
    }), C = V(() => {
      if (!d.value) return [];
      const S = n.multiple ? d.value : [d.value];
      return c.value.filter((W) => S.includes(g(W)));
    }), $ = V(() => C.value.length ? n.multiple ? C.value.map((S) => y(S)).join(", ") : y(C.value[0]) : n.placeholder), z = async (S) => {
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
    }, Y = (S) => {
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
      n.disabled || (o.value = !o.value, o.value && n.searchable && Fe(() => {
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
    }), (S, W) => (x(), H(b(Xs), {
      field: S.field,
      label: f.value,
      tooltip: S.tooltip,
      required: S.required,
      noLabel: S.noLabel,
      form: S.form,
      error: p.value,
      htmlFor: h.value
    }, {
      default: B(() => [
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
            D("div", Eg, [
              S.multiple && C.value.length ? (x(!0), P(re, { key: 0 }, Ee(C.value, (I) => (x(), P("span", {
                key: g(I),
                class: "bg-primary-100 text-primary-800 inline-flex items-center gap-1 rounded px-2 py-1 text-xs"
              }, [
                fe(Q(y(I)) + " ", 1),
                D("button", {
                  type: "button",
                  onClick: (T) => R(I, T),
                  class: "hover:text-primary-600 transition-colors"
                }, [
                  J(b(Se), {
                    icon: b(Qr),
                    class: "h-3 w-3"
                  }, null, 8, ["icon"])
                ], 8, Cg)
              ]))), 128)) : (x(), P("span", {
                key: 1,
                class: Z(["block truncate", { "text-gray-500": !C.value.length }])
              }, Q($.value), 3))
            ]),
            S.clearable && C.value.length ? (x(), P("button", {
              key: 0,
              type: "button",
              onClick: k,
              class: "absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 transition-colors hover:text-gray-600"
            }, [
              J(b(Se), {
                icon: b(Qr),
                class: "h-4 w-4"
              }, null, 8, ["icon"])
            ])) : G("", !0),
            D("div", Pg, [
              J(b(Se), {
                icon: b(Qs),
                class: Z(["h-4 w-4 text-gray-400 transition-transform duration-200", { "rotate-180": o.value }])
              }, null, 8, ["icon", "class"])
            ])
          ], 10, Ag),
          J(un, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "opacity-0 scale-95",
            "enter-to-class": "opacity-100 scale-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "opacity-100 scale-100",
            "leave-to-class": "opacity-0 scale-95"
          }, {
            default: B(() => [
              He(D("div", kg, [
                S.searchable ? (x(), P("div", $g, [
                  D("div", Dg, [
                    J(b(Se), {
                      icon: b(vm),
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
                ])) : G("", !0),
                s.value ? (x(), P("div", Tg, [
                  J(b(qi), { class: "h-5 w-5" }),
                  W[2] || (W[2] = D("span", { class: "ml-2 text-sm text-gray-600" }, "Loading...", -1))
                ])) : (x(), P("div", Fg, [
                  S.grouping ? (x(!0), P(re, { key: 0 }, Ee(O.value, (I, T) => (x(), P("div", { key: T }, [
                    T !== "ungrouped" ? (x(), P("div", Rg, Q(T), 1)) : G("", !0),
                    (x(!0), P(re, null, Ee(I, (X) => (x(), P("button", {
                      key: g(X),
                      type: "button",
                      onClick: (ae) => Y(X),
                      disabled: X.disabled,
                      class: Z(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                        "bg-primary-100 text-primary-900": N(X),
                        "text-gray-900": !N(X)
                      }])
                    }, [
                      D("span", _g, Q(y(X)), 1),
                      N(X) ? (x(), P("span", Lg, " ✓ ")) : G("", !0)
                    ], 10, Ig))), 128))
                  ]))), 128)) : (x(!0), P(re, { key: 1 }, Ee(w.value, (I) => (x(), P("button", {
                    key: g(I),
                    type: "button",
                    onClick: (T) => Y(I),
                    disabled: I.disabled,
                    class: Z(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50", {
                      "bg-primary-100 text-primary-900": N(I),
                      "text-gray-900": !N(I)
                    }])
                  }, [
                    D("span", Mg, Q(y(I)), 1),
                    N(I) ? (x(), P("span", Ng, "✓")) : G("", !0)
                  ], 10, Bg))), 128)),
                  w.value.length ? G("", !0) : (x(), P("div", jg, "No options found"))
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
var qg = Object.defineProperty, zg = Object.defineProperties, Vg = Object.getOwnPropertyDescriptors, Tl = Object.getOwnPropertySymbols, Ug = Object.prototype.hasOwnProperty, Hg = Object.prototype.propertyIsEnumerable, Fl = (e, t, n) => t in e ? qg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Pn = (e, t) => {
  for (var n in t || (t = {}))
    Ug.call(t, n) && Fl(e, n, t[n]);
  if (Tl)
    for (var n of Tl(t))
      Hg.call(t, n) && Fl(e, n, t[n]);
  return e;
}, Rl = (e, t) => zg(e, Vg(t));
const Wg = {
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
}, Kg = {
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
}, Gg = {
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
}, Yg = {}, Xg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, Jg = /* @__PURE__ */ D("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), Qg = [
  Jg
];
function Zg(e, t) {
  return x(), P("svg", Xg, Qg);
}
const e0 = /* @__PURE__ */ pi(Yg, [["render", Zg]]), t0 = {}, n0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, r0 = /* @__PURE__ */ D("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), o0 = [
  r0
];
function a0(e, t) {
  return x(), P("svg", n0, o0);
}
const s0 = /* @__PURE__ */ pi(t0, [["render", a0]]), Il = {
  Deselect: e0,
  OpenIndicator: s0
}, i0 = {
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
function l0(e) {
  const t = {};
  return Object.keys(e).sort().forEach((n) => {
    t[n] = e[n];
  }), JSON.stringify(t);
}
let u0 = 0;
function c0() {
  return ++u0;
}
const d0 = {
  components: Pn({}, Il),
  directives: { appendToBody: i0 },
  mixins: [Wg, Kg, Gg],
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
          return e.hasOwnProperty("id") ? e.id : l0(e);
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
      default: () => c0()
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
}, f0 = ["dir"], p0 = ["id", "aria-expanded", "aria-owns"], m0 = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, h0 = ["disabled", "title", "aria-label", "onClick"], y0 = {
  ref: "actions",
  class: "vs__actions"
}, g0 = ["disabled"], v0 = { class: "vs__spinner" }, b0 = ["id"], w0 = ["id", "aria-selected", "onMouseover", "onClick"], S0 = {
  key: 0,
  class: "vs__no-options"
}, x0 = /* @__PURE__ */ fe(" Sorry, no matching options. "), O0 = ["id"];
function A0(e, t, n, r, o, a) {
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
      D("div", m0, [
        (x(!0), P(re, null, Ee(a.selectedValue, (i, c) => j(e.$slots, "selected-option-container", {
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
              fe(Q(n.getOptionLabel(i)), 1)
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
              (x(), H(qr(a.childComponents.Deselect)))
            ], 8, h0)) : G("", !0)
          ]))
        ])), 256)),
        j(e.$slots, "search", be(Pe(a.scope.search)), () => [
          D("input", ie({ class: "vs__search" }, a.scope.search.attributes, Ec(a.scope.search.events)), null, 16)
        ])
      ], 512),
      D("div", y0, [
        He(D("button", {
          ref: "clearButton",
          disabled: n.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...i) => a.clearSelection && a.clearSelection(...i))
        }, [
          (x(), H(qr(a.childComponents.Deselect)))
        ], 8, g0), [
          [ln, a.showClearButton]
        ]),
        j(e.$slots, "open-indicator", be(Pe(a.scope.openIndicator)), () => [
          n.noDrop ? G("", !0) : (x(), H(qr(a.childComponents.OpenIndicator), be(ie({ key: 0 }, a.scope.openIndicator.attributes)), null, 16))
        ]),
        j(e.$slots, "spinner", be(Pe(a.scope.spinner)), () => [
          He(D("div", v0, "Loading...", 512), [
            [ln, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, p0),
    J(un, { name: n.transition }, {
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
          j(e.$slots, "list-header", be(Pe(a.scope.listHeader))),
          (x(!0), P(re, null, Ee(a.filteredOptions, (i, c) => (x(), P("li", {
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
              fe(Q(n.getOptionLabel(i)), 1)
            ])
          ], 42, w0))), 128)),
          a.filteredOptions.length === 0 ? (x(), P("li", S0, [
            j(e.$slots, "no-options", be(Pe(a.scope.noOptions)), () => [
              x0
            ])
          ])) : G("", !0),
          j(e.$slots, "list-footer", be(Pe(a.scope.listFooter)))
        ], 40, b0)), [
          [s]
        ]) : (x(), P("ul", {
          key: 1,
          id: `vs${n.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, O0))
      ]),
      _: 3
    }, 8, ["name"]),
    j(e.$slots, "footer", be(Pe(a.scope.footer)))
  ], 10, f0);
}
const E0 = /* @__PURE__ */ pi(d0, [["render", A0]]), SO = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return jn.add(fi), (t, n) => (x(), H(b(E0), {
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
}, P0 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, k0 = {
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
}, $0 = /* @__PURE__ */ D("i", { class: "dropdown icon" }, null, -1), D0 = ["disabled", "tabindex", "id", "name", "value"], T0 = ["data-vss-custom-attr"], F0 = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function R0(e, t, n, r, o, a) {
  return x(), P("div", {
    class: Z(["ui fluid search selection dropdown", { "active visible": o.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => a.openOptions && a.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => a.openOptions && a.openOptions(...s))
  }, [
    $0,
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
    }, null, 40, D0),
    D("div", {
      class: Z(["text", a.textClass]),
      "data-vss-custom-attr": a.searchTextCustomAttr
    }, Q(a.inputText), 11, T0),
    D("div", {
      class: Z(["menu", a.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = St(() => {
      }, ["prevent"])),
      style: dt(a.menuStyle),
      tabindex: "-1"
    }, [
      (x(!0), P(re, null, Ee(a.filteredOptions, (s, i) => (x(), P("div", {
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
          fe(Q(s.text), 1)
        ])
      ], 42, F0))), 128))
    ], 38)
  ], 34);
}
const _l = /* @__PURE__ */ P0(k0, [["render", R0]]), Ll = {
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
}, I0 = {
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
      !e.noLabel && (e.label || e.field) ? (x(), H(b(qn), {
        key: 0,
        for: e.id ?? e.field,
        value: r(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : G("", !0),
      e.noForm ? (x(), H(b(Ll), {
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
        J(b(Ll), {
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
        J(b(en), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, _0 = /* @__PURE__ */ di(I0, [["__scopeId", "data-v-c8f3c7c8"]]), xO = {
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
    const r = e, o = n, a = L([]), s = L(1), i = L(!0), c = L(0), l = L(""), u = L(((h = r.form) == null ? void 0 : h[r.field]) || r.modelValue), d = L(u.value), g = L(null), y = (w) => {
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
    }), t({ getCurrentOption: () => a.value.find((w) => w[r.optionValue] == u.value) }), (w, O) => (x(), H(b(_0), {
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
      "onUpdate:modelValue": O[0] || (O[0] = (C) => y(C)),
      onSearchchange: m,
      filterPredicate: (C, $) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
function L0(e) {
  return typeof e == "symbol" || e instanceof Symbol;
}
function B0() {
}
function M0(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function N0(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ss(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function ro(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const vd = "[object RegExp]", bd = "[object String]", wd = "[object Number]", Sd = "[object Boolean]", xs = "[object Arguments]", xd = "[object Symbol]", Od = "[object Date]", Ad = "[object Map]", Ed = "[object Set]", Cd = "[object Array]", j0 = "[object Function]", Pd = "[object ArrayBuffer]", Ur = "[object Object]", q0 = "[object Error]", kd = "[object DataView]", $d = "[object Uint8Array]", Dd = "[object Uint8ClampedArray]", Td = "[object Uint16Array]", Fd = "[object Uint32Array]", z0 = "[object BigUint64Array]", Rd = "[object Int8Array]", Id = "[object Int16Array]", _d = "[object Int32Array]", V0 = "[object BigInt64Array]", Ld = "[object Float32Array]", Bd = "[object Float64Array]";
function Tn(e, t, n, r = /* @__PURE__ */ new Map(), o = void 0) {
  const a = o == null ? void 0 : o(e, t, n, r);
  if (a != null)
    return a;
  if (M0(e))
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
  if (N0(e)) {
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
  if (typeof e == "object" && U0(e)) {
    const s = Object.create(Object.getPrototypeOf(e));
    return r.set(e, s), Xn(s, e, n, r, o), s;
  }
  return e;
}
function Xn(e, t, n = e, r, o) {
  const a = [...Object.keys(t), ...Ss(t)];
  for (let s = 0; s < a.length; s++) {
    const i = a[s], c = Object.getOwnPropertyDescriptor(e, i);
    (c == null || c.writable) && (e[i] = Tn(t[i], i, n, r, o));
  }
}
function U0(e) {
  switch (ro(e)) {
    case xs:
    case Cd:
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
    case Ed:
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
function H0(e, t, n) {
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
  if (o === xs && (o = Ur), a === xs && (a = Ur), o !== a)
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
    case j0:
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
      case Ed: {
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
      case Cd:
      case $d:
      case Dd:
      case Td:
      case Fd:
      case z0:
      case Rd:
      case Id:
      case _d:
      case V0:
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
      case q0:
        return e.name === t.name && e.message === t.message;
      case Ur: {
        if (!(ir(e.constructor, t.constructor, n, r) || oo(e) && oo(t)))
          return !1;
        const l = [...Object.keys(e), ...Ss(e)], u = [...Object.keys(t), ...Ss(t)];
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
function W0(e, t) {
  return H0(e, t, B0);
}
var Os = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function K0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function G0(e) {
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
var Xo, Bl;
function zn() {
  return Bl || (Bl = 1, Xo = TypeError), Xo;
}
const Y0 = {}, X0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Y0
}, Symbol.toStringTag, { value: "Module" })), As = /* @__PURE__ */ G0(X0);
var Jo, Ml;
function bo() {
  if (Ml) return Jo;
  Ml = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, n = e && t && typeof t.get == "function" ? t.get : null, r = e && Map.prototype.forEach, o = typeof Set == "function" && Set.prototype, a = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = o && a && typeof a.get == "function" ? a.get : null, i = o && Set.prototype.forEach, c = typeof WeakMap == "function" && WeakMap.prototype, l = c ? WeakMap.prototype.has : null, u = typeof WeakSet == "function" && WeakSet.prototype, d = u ? WeakSet.prototype.has : null, g = typeof WeakRef == "function" && WeakRef.prototype, y = g ? WeakRef.prototype.deref : null, m = Boolean.prototype.valueOf, p = Object.prototype.toString, f = Function.prototype.toString, h = String.prototype.match, w = String.prototype.slice, O = String.prototype.replace, C = String.prototype.toUpperCase, $ = String.prototype.toLowerCase, z = RegExp.prototype.test, q = Array.prototype.concat, Y = Array.prototype.join, R = Array.prototype.slice, k = Math.floor, N = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, v = Object.getOwnPropertySymbols, A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, E = typeof Symbol == "function" && typeof Symbol.iterator == "object", S = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === E || !0) ? Symbol.toStringTag : null, W = Object.prototype.propertyIsEnumerable, I = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(F) {
    return F.__proto__;
  } : null);
  function T(F, _) {
    if (F === 1 / 0 || F === -1 / 0 || F !== F || F && F > -1e3 && F < 1e3 || z.call(/e/, _))
      return _;
    var ce = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof F == "number") {
      var he = F < 0 ? -k(-F) : k(F);
      if (he !== F) {
        var ye = String(he), se = w.call(_, ye.length + 1);
        return O.call(ye, ce, "$&_") + "." + O.call(O.call(se, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return O.call(_, ce, "$&_");
  }
  var X = As, ae = X.custom, Te = Ie(ae) ? ae : null, Ye = {
    __proto__: null,
    double: '"',
    single: "'"
  }, $e = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Jo = function F(_, ce, he, ye) {
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
    if (typeof _ > "u")
      return "undefined";
    if (_ === null)
      return "null";
    if (typeof _ == "boolean")
      return _ ? "true" : "false";
    if (typeof _ == "string")
      return zi(_, se);
    if (typeof _ == "number") {
      if (_ === 0)
        return 1 / 0 / _ > 0 ? "0" : "-0";
      var Xe = String(_);
      return tn ? T(_, Xe) : Xe;
    }
    if (typeof _ == "bigint") {
      var Ut = String(_) + "n";
      return tn ? T(_, Ut) : Ut;
    }
    var Bo = typeof se.depth > "u" ? 5 : se.depth;
    if (typeof he > "u" && (he = 0), he >= Bo && Bo > 0 && typeof _ == "object")
      return vt(_) ? "[Array]" : "[Object]";
    var An = jp(se, he);
    if (typeof ye > "u")
      ye = [];
    else if (zt(ye, _) >= 0)
      return "[Circular]";
    function it(En, Dr, zp) {
      if (Dr && (ye = R.call(ye), ye.push(Dr)), zp) {
        var Ji = {
          depth: se.depth
        };
        return ze(se, "quoteStyle") && (Ji.quoteStyle = se.quoteStyle), F(En, Ji, he + 1, ye);
      }
      return F(En, se, he + 1, ye);
    }
    if (typeof _ == "function" && !Ce(_)) {
      var Ui = wn(_), Hi = kr(_, it);
      return "[Function" + (Ui ? ": " + Ui : " (anonymous)") + "]" + (Hi.length > 0 ? " { " + Y.call(Hi, ", ") + " }" : "");
    }
    if (Ie(_)) {
      var Wi = E ? O.call(String(_), /^(Symbol\(.*\))_[^)]*$/, "$1") : A.call(_);
      return typeof _ == "object" && !E ? Gn(Wi) : Wi;
    }
    if (Bp(_)) {
      for (var Yn = "<" + $.call(String(_.nodeName)), Mo = _.attributes || [], $r = 0; $r < Mo.length; $r++)
        Yn += " " + Mo[$r].name + "=" + Me(Re(Mo[$r].value), "double", se);
      return Yn += ">", _.childNodes && _.childNodes.length && (Yn += "..."), Yn += "</" + $.call(String(_.nodeName)) + ">", Yn;
    }
    if (vt(_)) {
      if (_.length === 0)
        return "[]";
      var No = kr(_, it);
      return An && !Np(No) ? "[" + Lo(No, An) + "]" : "[ " + Y.call(No, ", ") + " ]";
    }
    if (ue(_)) {
      var jo = kr(_, it);
      return !("cause" in Error.prototype) && "cause" in _ && !W.call(_, "cause") ? "{ [" + String(_) + "] " + Y.call(q.call("[cause]: " + it(_.cause), jo), ", ") + " }" : jo.length === 0 ? "[" + String(_) + "]" : "{ [" + String(_) + "] " + Y.call(jo, ", ") + " }";
    }
    if (typeof _ == "object" && Vt) {
      if (Te && typeof _[Te] == "function" && X)
        return X(_, { depth: Bo - he });
      if (Vt !== "symbol" && typeof _.inspect == "function")
        return _.inspect();
    }
    if (st(_)) {
      var Ki = [];
      return r && r.call(_, function(En, Dr) {
        Ki.push(it(Dr, _, !0) + " => " + it(En, _));
      }), Vi("Map", n.call(_), Ki, An);
    }
    if (On(_)) {
      var Gi = [];
      return i && i.call(_, function(En) {
        Gi.push(it(En, _));
      }), Vi("Set", s.call(_), Gi, An);
    }
    if (Sn(_))
      return _o("WeakMap");
    if (Lp(_))
      return _o("WeakSet");
    if (xn(_))
      return _o("WeakRef");
    if (me(_))
      return Gn(it(Number(_)));
    if (nt(_))
      return Gn(it(N.call(_)));
    if (Oe(_))
      return Gn(m.call(_));
    if (ve(_))
      return Gn(it(String(_)));
    if (typeof window < "u" && _ === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && _ === globalThis || typeof Os < "u" && _ === Os)
      return "{ [object globalThis] }";
    if (!bt(_) && !Ce(_)) {
      var qo = kr(_, it), Yi = I ? I(_) === Object.prototype : _ instanceof Object || _.constructor === Object, zo = _ instanceof Object ? "" : "null prototype", Xi = !Yi && S && Object(_) === _ && S in _ ? w.call(rt(_), 8, -1) : zo ? "Object" : "", qp = Yi || typeof _.constructor != "function" ? "" : _.constructor.name ? _.constructor.name + " " : "", Vo = qp + (Xi || zo ? "[" + Y.call(q.call([], Xi || [], zo || []), ": ") + "] " : "");
      return qo.length === 0 ? Vo + "{}" : An ? Vo + "{" + Lo(qo, An) + "}" : Vo + "{ " + Y.call(qo, ", ") + " }";
    }
    return String(_);
  };
  function Me(F, _, ce) {
    var he = ce.quoteStyle || _, ye = Ye[he];
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
  function Ce(F) {
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
    if (E)
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
  function ze(F, _) {
    return _e.call(F, _);
  }
  function rt(F) {
    return p.call(F);
  }
  function wn(F) {
    if (F.name)
      return F.name;
    var _ = h.call(f.call(F), /^function\s*([\w$]+)/);
    return _ ? _[1] : null;
  }
  function zt(F, _) {
    if (F.indexOf)
      return F.indexOf(_);
    for (var ce = 0, he = F.length; ce < he; ce++)
      if (F[ce] === _)
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
  function zi(F, _) {
    if (F.length > _.maxStringLength) {
      var ce = F.length - _.maxStringLength, he = "... " + ce + " more character" + (ce > 1 ? "s" : "");
      return zi(w.call(F, 0, _.maxStringLength), _) + he;
    }
    var ye = $e[_.quoteStyle || "single"];
    ye.lastIndex = 0;
    var se = O.call(O.call(F, ye, "\\$1"), /[\x00-\x1f]/g, Mp);
    return Me(se, "single", _);
  }
  function Mp(F) {
    var _ = F.charCodeAt(0), ce = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[_];
    return ce ? "\\" + ce : "\\x" + (_ < 16 ? "0" : "") + C.call(_.toString(16));
  }
  function Gn(F) {
    return "Object(" + F + ")";
  }
  function _o(F) {
    return F + " { ? }";
  }
  function Vi(F, _, ce, he) {
    var ye = he ? Lo(ce, he) : Y.call(ce, ", ");
    return F + " (" + _ + ") {" + ye + "}";
  }
  function Np(F) {
    for (var _ = 0; _ < F.length; _++)
      if (zt(F[_], `
`) >= 0)
        return !1;
    return !0;
  }
  function jp(F, _) {
    var ce;
    if (F.indent === "	")
      ce = "	";
    else if (typeof F.indent == "number" && F.indent > 0)
      ce = Y.call(Array(F.indent + 1), " ");
    else
      return null;
    return {
      base: ce,
      prev: Y.call(Array(_ + 1), ce)
    };
  }
  function Lo(F, _) {
    if (F.length === 0)
      return "";
    var ce = `
` + _.prev + _.base;
    return ce + Y.call(F, "," + ce) + `
` + _.prev;
  }
  function kr(F, _) {
    var ce = vt(F), he = [];
    if (ce) {
      he.length = F.length;
      for (var ye = 0; ye < F.length; ye++)
        he[ye] = ze(F, ye) ? _(F[ye], F) : "";
    }
    var se = typeof v == "function" ? v(F) : [], Vt;
    if (E) {
      Vt = {};
      for (var tn = 0; tn < se.length; tn++)
        Vt["$" + se[tn]] = se[tn];
    }
    for (var Xe in F)
      ze(F, Xe) && (ce && String(Number(Xe)) === Xe && Xe < F.length || E && Vt["$" + Xe] instanceof Symbol || (z.call(/[^\w$]/, Xe) ? he.push(_(Xe, F) + ": " + _(F[Xe], F)) : he.push(Xe + ": " + _(F[Xe], F))));
    if (typeof v == "function")
      for (var Ut = 0; Ut < se.length; Ut++)
        W.call(F, se[Ut]) && he.push("[" + _(se[Ut]) + "]: " + _(F[se[Ut]], F));
    return he;
  }
  return Jo;
}
var Qo, Nl;
function J0() {
  if (Nl) return Qo;
  Nl = 1;
  var e = /* @__PURE__ */ bo(), t = /* @__PURE__ */ zn(), n = function(i, c, l) {
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
  return Qo = function() {
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
  }, Qo;
}
var Zo, jl;
function Nd() {
  return jl || (jl = 1, Zo = Object), Zo;
}
var ea, ql;
function Q0() {
  return ql || (ql = 1, ea = Error), ea;
}
var ta, zl;
function Z0() {
  return zl || (zl = 1, ta = EvalError), ta;
}
var na, Vl;
function ev() {
  return Vl || (Vl = 1, na = RangeError), na;
}
var ra, Ul;
function tv() {
  return Ul || (Ul = 1, ra = ReferenceError), ra;
}
var oa, Hl;
function nv() {
  return Hl || (Hl = 1, oa = SyntaxError), oa;
}
var aa, Wl;
function rv() {
  return Wl || (Wl = 1, aa = URIError), aa;
}
var sa, Kl;
function ov() {
  return Kl || (Kl = 1, sa = Math.abs), sa;
}
var ia, Gl;
function av() {
  return Gl || (Gl = 1, ia = Math.floor), ia;
}
var la, Yl;
function sv() {
  return Yl || (Yl = 1, la = Math.max), la;
}
var ua, Xl;
function iv() {
  return Xl || (Xl = 1, ua = Math.min), ua;
}
var ca, Jl;
function lv() {
  return Jl || (Jl = 1, ca = Math.pow), ca;
}
var da, Ql;
function uv() {
  return Ql || (Ql = 1, da = Math.round), da;
}
var fa, Zl;
function cv() {
  return Zl || (Zl = 1, fa = Number.isNaN || function(t) {
    return t !== t;
  }), fa;
}
var pa, eu;
function dv() {
  if (eu) return pa;
  eu = 1;
  var e = /* @__PURE__ */ cv();
  return pa = function(n) {
    return e(n) || n === 0 ? n : n < 0 ? -1 : 1;
  }, pa;
}
var ma, tu;
function fv() {
  return tu || (tu = 1, ma = Object.getOwnPropertyDescriptor), ma;
}
var ha, nu;
function jd() {
  if (nu) return ha;
  nu = 1;
  var e = /* @__PURE__ */ fv();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return ha = e, ha;
}
var ya, ru;
function pv() {
  if (ru) return ya;
  ru = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return ya = e, ya;
}
var ga, ou;
function mv() {
  return ou || (ou = 1, ga = function() {
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
  }), ga;
}
var va, au;
function hv() {
  if (au) return va;
  au = 1;
  var e = typeof Symbol < "u" && Symbol, t = mv();
  return va = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, va;
}
var ba, su;
function qd() {
  return su || (su = 1, ba = typeof Reflect < "u" && Reflect.getPrototypeOf || null), ba;
}
var wa, iu;
function zd() {
  if (iu) return wa;
  iu = 1;
  var e = /* @__PURE__ */ Nd();
  return wa = e.getPrototypeOf || null, wa;
}
var Sa, lu;
function yv() {
  if (lu) return Sa;
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
  return Sa = function(c) {
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
  }, Sa;
}
var xa, uu;
function wo() {
  if (uu) return xa;
  uu = 1;
  var e = yv();
  return xa = Function.prototype.bind || e, xa;
}
var Oa, cu;
function mi() {
  return cu || (cu = 1, Oa = Function.prototype.call), Oa;
}
var Aa, du;
function Vd() {
  return du || (du = 1, Aa = Function.prototype.apply), Aa;
}
var Ea, fu;
function gv() {
  return fu || (fu = 1, Ea = typeof Reflect < "u" && Reflect && Reflect.apply), Ea;
}
var Ca, pu;
function vv() {
  if (pu) return Ca;
  pu = 1;
  var e = wo(), t = Vd(), n = mi(), r = gv();
  return Ca = r || e.call(n, t), Ca;
}
var Pa, mu;
function Ud() {
  if (mu) return Pa;
  mu = 1;
  var e = wo(), t = /* @__PURE__ */ zn(), n = mi(), r = vv();
  return Pa = function(a) {
    if (a.length < 1 || typeof a[0] != "function")
      throw new t("a function is required");
    return r(e, n, a);
  }, Pa;
}
var ka, hu;
function bv() {
  if (hu) return ka;
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
  return ka = r && typeof r.get == "function" ? e([r.get]) : typeof a == "function" ? (
    /** @type {import('./get')} */
    function(i) {
      return a(i == null ? i : o(i));
    }
  ) : !1, ka;
}
var $a, yu;
function wv() {
  if (yu) return $a;
  yu = 1;
  var e = qd(), t = zd(), n = /* @__PURE__ */ bv();
  return $a = e ? function(o) {
    return e(o);
  } : t ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return t(o);
  } : n ? function(o) {
    return n(o);
  } : null, $a;
}
var Da, gu;
function Sv() {
  if (gu) return Da;
  gu = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, n = wo();
  return Da = n.call(e, t), Da;
}
var Ta, vu;
function hi() {
  if (vu) return Ta;
  vu = 1;
  var e, t = /* @__PURE__ */ Nd(), n = /* @__PURE__ */ Q0(), r = /* @__PURE__ */ Z0(), o = /* @__PURE__ */ ev(), a = /* @__PURE__ */ tv(), s = /* @__PURE__ */ nv(), i = /* @__PURE__ */ zn(), c = /* @__PURE__ */ rv(), l = /* @__PURE__ */ ov(), u = /* @__PURE__ */ av(), d = /* @__PURE__ */ sv(), g = /* @__PURE__ */ iv(), y = /* @__PURE__ */ lv(), m = /* @__PURE__ */ uv(), p = /* @__PURE__ */ dv(), f = Function, h = function(Ce) {
    try {
      return f('"use strict"; return (' + Ce + ").constructor;")();
    } catch {
    }
  }, w = /* @__PURE__ */ jd(), O = /* @__PURE__ */ pv(), C = function() {
    throw new i();
  }, $ = w ? function() {
    try {
      return arguments.callee, C;
    } catch {
      try {
        return w(arguments, "callee").get;
      } catch {
        return C;
      }
    }
  }() : C, z = hv()(), q = wv(), Y = zd(), R = qd(), k = Vd(), N = mi(), v = {}, A = typeof Uint8Array > "u" || !q ? e : q(Uint8Array), E = {
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
    "%Object.getPrototypeOf%": Y,
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
    } catch (Ce) {
      var S = q(q(Ce));
      E["%Error.prototype%"] = S;
    }
  var W = function Ce(ue) {
    var ve;
    if (ue === "%AsyncFunction%")
      ve = h("async function () {}");
    else if (ue === "%GeneratorFunction%")
      ve = h("function* () {}");
    else if (ue === "%AsyncGeneratorFunction%")
      ve = h("async function* () {}");
    else if (ue === "%AsyncGenerator%") {
      var me = Ce("%AsyncGeneratorFunction%");
      me && (ve = me.prototype);
    } else if (ue === "%AsyncIteratorPrototype%") {
      var Oe = Ce("%AsyncGenerator%");
      Oe && q && (ve = q(Oe.prototype));
    }
    return E[ue] = ve, ve;
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
  }, T = wo(), X = /* @__PURE__ */ Sv(), ae = T.call(N, Array.prototype.concat), Te = T.call(k, Array.prototype.splice), Ye = T.call(N, String.prototype.replace), $e = T.call(N, String.prototype.slice), Me = T.call(N, RegExp.prototype.exec), Re = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ne = /\\(\\)?/g, vt = function(ue) {
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
    if (X(I, me) && (Oe = I[me], me = "%" + Oe[0] + "%"), X(E, me)) {
      var Ie = E[me];
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
  return Ta = function(ue, ve) {
    if (typeof ue != "string" || ue.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ve != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (Me(/^%?[^%]*%?$/, ue) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var me = vt(ue), Oe = me.length > 0 ? me[0] : "", Ie = bt("%" + Oe + "%", ve), nt = Ie.name, _e = Ie.value, ze = !1, rt = Ie.alias;
    rt && (Oe = rt[0], Te(me, ae([0, 1], rt)));
    for (var wn = 1, zt = !0; wn < me.length; wn += 1) {
      var st = me[wn], Sn = $e(st, 0, 1), xn = $e(st, -1);
      if ((Sn === '"' || Sn === "'" || Sn === "`" || xn === '"' || xn === "'" || xn === "`") && Sn !== xn)
        throw new s("property names with quotes must have matching quotes");
      if ((st === "constructor" || !zt) && (ze = !0), Oe += "." + st, nt = "%" + Oe + "%", X(E, nt))
        _e = E[nt];
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
        zt && !ze && (E[nt] = _e);
      }
    }
    return _e;
  }, Ta;
}
var Fa, bu;
function Hd() {
  if (bu) return Fa;
  bu = 1;
  var e = /* @__PURE__ */ hi(), t = Ud(), n = t([e("%String.prototype.indexOf%")]);
  return Fa = function(o, a) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(o, !!a)
    );
    return typeof s == "function" && n(o, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, Fa;
}
var Ra, wu;
function Wd() {
  if (wu) return Ra;
  wu = 1;
  var e = /* @__PURE__ */ hi(), t = /* @__PURE__ */ Hd(), n = /* @__PURE__ */ bo(), r = /* @__PURE__ */ zn(), o = e("%Map%", !0), a = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), i = t("Map.prototype.has", !0), c = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return Ra = !!o && /** @type {Exclude<import('.'), false>} */
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
  }, Ra;
}
var Ia, Su;
function xv() {
  if (Su) return Ia;
  Su = 1;
  var e = /* @__PURE__ */ hi(), t = /* @__PURE__ */ Hd(), n = /* @__PURE__ */ bo(), r = Wd(), o = /* @__PURE__ */ zn(), a = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), i = t("WeakMap.prototype.set", !0), c = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return Ia = a ? (
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
  ) : r, Ia;
}
var _a, xu;
function Ov() {
  if (xu) return _a;
  xu = 1;
  var e = /* @__PURE__ */ zn(), t = /* @__PURE__ */ bo(), n = J0(), r = Wd(), o = xv(), a = o || r || n;
  return _a = function() {
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
  }, _a;
}
var La, Ou;
function yi() {
  if (Ou) return La;
  Ou = 1;
  var e = String.prototype.replace, t = /%20/g, n = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return La = {
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
  }, La;
}
var Ba, Au;
function Kd() {
  if (Au) return Ba;
  Au = 1;
  var e = /* @__PURE__ */ yi(), t = Object.prototype.hasOwnProperty, n = Array.isArray, r = function() {
    for (var f = [], h = 0; h < 256; ++h)
      f.push("%" + ((h < 16 ? "0" : "") + h.toString(16)).toUpperCase());
    return f;
  }(), o = function(h) {
    for (; h.length > 1; ) {
      var w = h.pop(), O = w.obj[w.prop];
      if (n(O)) {
        for (var C = [], $ = 0; $ < O.length; ++$)
          typeof O[$] < "u" && C.push(O[$]);
        w.obj[w.prop] = C;
      }
    }
  }, a = function(h, w) {
    for (var O = w && w.plainObjects ? { __proto__: null } : {}, C = 0; C < h.length; ++C)
      typeof h[C] < "u" && (O[C] = h[C]);
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
    var C = h;
    return n(h) && !n(w) && (C = a(h, O)), n(h) && n(w) ? (w.forEach(function($, z) {
      if (t.call(h, z)) {
        var q = h[z];
        q && typeof q == "object" && $ && typeof $ == "object" ? h[z] = f(q, $, O) : h.push($);
      } else
        h[z] = $;
    }), h) : Object.keys(w).reduce(function($, z) {
      var q = w[z];
      return t.call($, z) ? $[z] = f($[z], q, O) : $[z] = q, $;
    }, C);
  }, i = function(h, w) {
    return Object.keys(w).reduce(function(O, C) {
      return O[C] = w[C], O;
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
  }, l = 1024, u = function(h, w, O, C, $) {
    if (h.length === 0)
      return h;
    var z = h;
    if (typeof h == "symbol" ? z = Symbol.prototype.toString.call(h) : typeof h != "string" && (z = String(h)), O === "iso-8859-1")
      return escape(z).replace(/%u[0-9a-f]{4}/gi, function(A) {
        return "%26%23" + parseInt(A.slice(2), 16) + "%3B";
      });
    for (var q = "", Y = 0; Y < z.length; Y += l) {
      for (var R = z.length >= l ? z.slice(Y, Y + l) : z, k = [], N = 0; N < R.length; ++N) {
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
    for (var w = [{ obj: { o: h }, prop: "o" }], O = [], C = 0; C < w.length; ++C)
      for (var $ = w[C], z = $.obj[$.prop], q = Object.keys(z), Y = 0; Y < q.length; ++Y) {
        var R = q[Y], k = z[R];
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
      for (var O = [], C = 0; C < h.length; C += 1)
        O.push(w(h[C]));
      return O;
    }
    return w(h);
  };
  return Ba = {
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
  }, Ba;
}
var Ma, Eu;
function Av() {
  if (Eu) return Ma;
  Eu = 1;
  var e = Ov(), t = /* @__PURE__ */ Kd(), n = /* @__PURE__ */ yi(), r = Object.prototype.hasOwnProperty, o = {
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
  }, g = {}, y = function p(f, h, w, O, C, $, z, q, Y, R, k, N, v, A, E, S, W, I) {
    for (var T = f, X = I, ae = 0, Te = !1; (X = X.get(g)) !== void 0 && !Te; ) {
      var Ye = X.get(f);
      if (ae += 1, typeof Ye < "u") {
        if (Ye === ae)
          throw new RangeError("Cyclic object value");
        Te = !0;
      }
      typeof X.get(g) > "u" && (ae = 0);
    }
    if (typeof R == "function" ? T = R(h, T) : T instanceof Date ? T = v(T) : w === "comma" && a(T) && (T = t.maybeMap(T, function(nt) {
      return nt instanceof Date ? v(nt) : nt;
    })), T === null) {
      if ($)
        return Y && !S ? Y(h, u.encoder, W, "key", A) : h;
      T = "";
    }
    if (d(T) || t.isBuffer(T)) {
      if (Y) {
        var $e = S ? h : Y(h, u.encoder, W, "key", A);
        return [E($e) + "=" + E(Y(T, u.encoder, W, "value", A))];
      }
      return [E(h) + "=" + E(String(T))];
    }
    var Me = [];
    if (typeof T > "u")
      return Me;
    var Re;
    if (w === "comma" && a(T))
      S && Y && (T = t.maybeMap(T, Y)), Re = [{ value: T.length > 0 ? T.join(",") || null : void 0 }];
    else if (a(R))
      Re = R;
    else {
      var Ne = Object.keys(T);
      Re = k ? Ne.sort(k) : Ne;
    }
    var vt = q ? String(h).replace(/\./g, "%2E") : String(h), bt = O && a(T) && T.length === 1 ? vt + "[]" : vt;
    if (C && a(T) && T.length === 0)
      return bt + "[]";
    for (var Ce = 0; Ce < Re.length; ++Ce) {
      var ue = Re[Ce], ve = typeof ue == "object" && ue && typeof ue.value < "u" ? ue.value : T[ue];
      if (!(z && ve === null)) {
        var me = N && q ? String(ue).replace(/\./g, "%2E") : String(ue), Oe = a(T) ? typeof w == "function" ? w(bt, me) : bt : bt + (N ? "." + me : "[" + me + "]");
        I.set(f, ae);
        var Ie = e();
        Ie.set(g, I), i(Me, p(
          ve,
          Oe,
          w,
          O,
          C,
          $,
          z,
          q,
          w === "comma" && S && a(T) ? null : Y,
          R,
          k,
          N,
          v,
          A,
          E,
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
    var O = n.formatters[w], C = u.filter;
    (typeof f.filter == "function" || a(f.filter)) && (C = f.filter);
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
      filter: C,
      format: w,
      formatter: O,
      serializeDate: typeof f.serializeDate == "function" ? f.serializeDate : u.serializeDate,
      skipNulls: typeof f.skipNulls == "boolean" ? f.skipNulls : u.skipNulls,
      sort: typeof f.sort == "function" ? f.sort : null,
      strictNullHandling: typeof f.strictNullHandling == "boolean" ? f.strictNullHandling : u.strictNullHandling
    };
  };
  return Ma = function(p, f) {
    var h = p, w = m(f), O, C;
    typeof w.filter == "function" ? (C = w.filter, h = C("", h)) : a(w.filter) && (C = w.filter, O = C);
    var $ = [];
    if (typeof h != "object" || h === null)
      return "";
    var z = o[w.arrayFormat], q = z === "comma" && w.commaRoundTrip;
    O || (O = Object.keys(h)), w.sort && O.sort(w.sort);
    for (var Y = e(), R = 0; R < O.length; ++R) {
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
        Y
      ));
    }
    var v = $.join(w.delimiter), A = w.addQueryPrefix === !0 ? "?" : "";
    return w.charsetSentinel && (w.charset === "iso-8859-1" ? A += "utf8=%26%2310003%3B&" : A += "utf8=%E2%9C%93&"), v.length > 0 ? A + v : "";
  }, Ma;
}
var Na, Cu;
function Ev() {
  if (Cu) return Na;
  Cu = 1;
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
    var O = -1, C, $ = m.charset;
    if (m.charsetSentinel)
      for (C = 0; C < w.length; ++C)
        w[C].indexOf("utf8=") === 0 && (w[C] === i ? $ = "utf-8" : w[C] === s && ($ = "iso-8859-1"), O = C, C = w.length);
    for (C = 0; C < w.length; ++C)
      if (C !== O) {
        var z = w[C], q = z.indexOf("]="), Y = q === -1 ? z.indexOf("=") : q + 1, R, k;
        Y === -1 ? (R = m.decoder(z, r.decoder, $, "key"), k = m.strictNullHandling ? null : "") : (R = m.decoder(z.slice(0, Y), r.decoder, $, "key"), k = e.maybeMap(
          a(
            z.slice(Y + 1),
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
      var C, $ = g[O];
      if ($ === "[]" && m.parseArrays)
        C = m.allowEmptyArrays && (w === "" || m.strictNullHandling && w === null) ? [] : e.combine([], w);
      else {
        C = m.plainObjects ? { __proto__: null } : {};
        var z = $.charAt(0) === "[" && $.charAt($.length - 1) === "]" ? $.slice(1, -1) : $, q = m.decodeDotInKeys ? z.replace(/%2E/g, ".") : z, Y = parseInt(q, 10);
        !m.parseArrays && q === "" ? C = { 0: w } : !isNaN(Y) && $ !== q && String(Y) === q && Y >= 0 && m.parseArrays && Y <= m.arrayLimit ? (C = [], C[Y] = w) : q !== "__proto__" && (C[q] = w);
      }
      w = C;
    }
    return w;
  }, u = function(y, m, p, f) {
    if (y) {
      var h = p.allowDots ? y.replace(/\.([^.[]+)/g, "[$1]") : y, w = /(\[[^[\]]*])/, O = /(\[[^[\]]*])/g, C = p.depth > 0 && w.exec(h), $ = C ? h.slice(0, C.index) : h, z = [];
      if ($) {
        if (!p.plainObjects && t.call(Object.prototype, $) && !p.allowPrototypes)
          return;
        z.push($);
      }
      for (var q = 0; p.depth > 0 && (C = O.exec(h)) !== null && q < p.depth; ) {
        if (q += 1, !p.plainObjects && t.call(Object.prototype, C[1].slice(1, -1)) && !p.allowPrototypes)
          return;
        z.push(C[1]);
      }
      if (C) {
        if (p.strictDepth === !0)
          throw new RangeError("Input depth exceeded depth option of " + p.depth + " and strictDepth is true");
        z.push("[" + h.slice(C.index) + "]");
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
  return Na = function(g, y) {
    var m = d(y);
    if (g === "" || g === null || typeof g > "u")
      return m.plainObjects ? { __proto__: null } : {};
    for (var p = typeof g == "string" ? c(g, m) : g, f = m.plainObjects ? { __proto__: null } : {}, h = Object.keys(p), w = 0; w < h.length; ++w) {
      var O = h[w], C = u(O, p[O], m, typeof g == "string");
      f = e.merge(f, C, m);
    }
    return m.allowSparse === !0 ? f : e.compact(f);
  }, Na;
}
var ja, Pu;
function Cv() {
  if (Pu) return ja;
  Pu = 1;
  var e = /* @__PURE__ */ Av(), t = /* @__PURE__ */ Ev(), n = /* @__PURE__ */ yi();
  return ja = {
    formats: n,
    parse: t,
    stringify: e
  }, ja;
}
var ku = /* @__PURE__ */ Cv();
function Gd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Pv } = Object.prototype, { getPrototypeOf: gi } = Object, { iterator: So, toStringTag: Yd } = Symbol, xo = /* @__PURE__ */ ((e) => (t) => {
  const n = Pv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), yt = (e) => (e = e.toLowerCase(), (t) => xo(t) === e), Oo = (e) => (t) => typeof t === e, { isArray: Vn } = Array, dr = Oo("undefined");
function kv(e) {
  return e !== null && !dr(e) && e.constructor !== null && !dr(e.constructor) && We(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Xd = yt("ArrayBuffer");
function $v(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Xd(e.buffer), t;
}
const Dv = Oo("string"), We = Oo("function"), Jd = Oo("number"), Ao = (e) => e !== null && typeof e == "object", Tv = (e) => e === !0 || e === !1, Hr = (e) => {
  if (xo(e) !== "object")
    return !1;
  const t = gi(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Yd in e) && !(So in e);
}, Fv = yt("Date"), Rv = yt("File"), Iv = yt("Blob"), _v = yt("FileList"), Lv = (e) => Ao(e) && We(e.pipe), Bv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || We(e.append) && ((t = xo(e)) === "formdata" || // detect form-data instance
  t === "object" && We(e.toString) && e.toString() === "[object FormData]"));
}, Mv = yt("URLSearchParams"), [Nv, jv, qv, zv] = ["ReadableStream", "Request", "Response", "Headers"].map(yt), Vv = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const Uv = (e, t, n, { allOwnKeys: r } = {}) => (vr(t, (o, a) => {
  n && We(o) ? e[a] = Gd(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), Hv = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wv = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Kv = (e, t, n, r) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && gi(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Gv = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Yv = (e) => {
  if (!e) return null;
  if (Vn(e)) return e;
  let t = e.length;
  if (!Jd(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Xv = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && gi(Uint8Array)), Jv = (e, t) => {
  const r = (e && e[So]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, Qv = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Zv = yt("HTMLFormElement"), eb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), $u = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), tb = yt("RegExp"), ef = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  vr(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, nb = (e) => {
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
}, rb = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return Vn(e) ? r(e) : r(String(e).split(t)), n;
}, ob = () => {
}, ab = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function sb(e) {
  return !!(e && We(e.append) && e[Yd] === "FormData" && e[So]);
}
const ib = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (Ao(r)) {
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
}, lb = yt("AsyncFunction"), ub = (e) => e && (Ao(e) || We(e)) && We(e.then) && We(e.catch), tf = ((e, t) => e ? setImmediate : t ? ((n, r) => (an.addEventListener("message", ({ source: o, data: a }) => {
  o === an && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), an.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  We(an.postMessage)
), cb = typeof queueMicrotask < "u" ? queueMicrotask.bind(an) : typeof process < "u" && process.nextTick || tf, db = (e) => e != null && We(e[So]), M = {
  isArray: Vn,
  isArrayBuffer: Xd,
  isBuffer: kv,
  isFormData: Bv,
  isArrayBufferView: $v,
  isString: Dv,
  isNumber: Jd,
  isBoolean: Tv,
  isObject: Ao,
  isPlainObject: Hr,
  isReadableStream: Nv,
  isRequest: jv,
  isResponse: qv,
  isHeaders: zv,
  isUndefined: dr,
  isDate: Fv,
  isFile: Rv,
  isBlob: Iv,
  isRegExp: tb,
  isFunction: We,
  isStream: Lv,
  isURLSearchParams: Mv,
  isTypedArray: Xv,
  isFileList: _v,
  forEach: vr,
  merge: Es,
  extend: Uv,
  trim: Vv,
  stripBOM: Hv,
  inherits: Wv,
  toFlatObject: Kv,
  kindOf: xo,
  kindOfTest: yt,
  endsWith: Gv,
  toArray: Yv,
  forEachEntry: Jv,
  matchAll: Qv,
  isHTMLForm: Zv,
  hasOwnProperty: $u,
  hasOwnProp: $u,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ef,
  freezeMethods: nb,
  toObjectSet: rb,
  toCamelCase: eb,
  noop: ob,
  toFiniteNumber: ab,
  findKey: Qd,
  global: an,
  isContextDefined: Zd,
  isSpecCompliantForm: sb,
  toJSONObject: ib,
  isAsyncFn: lb,
  isThenable: ub,
  setImmediate: tf,
  asap: cb,
  isIterable: db
};
function oe(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
M.inherits(oe, Error, {
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
      config: M.toJSONObject(this.config),
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
  return M.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (i) => i !== "isAxiosError"), oe.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const fb = null;
function Cs(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function of(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Du(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = of(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function pb(e) {
  return M.isArray(e) && !e.some(Cs);
}
const mb = M.toFlatObject(M, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Eo(e, t, n) {
  if (!M.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = M.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, f) {
    return !M.isUndefined(f[p]);
  });
  const r = n.metaTokens, o = n.visitor || u, a = n.dots, s = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(t);
  if (!M.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (M.isDate(m))
      return m.toISOString();
    if (!c && M.isBlob(m))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(m) || M.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, p, f) {
    let h = m;
    if (m && !f && typeof m == "object") {
      if (M.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), m = JSON.stringify(m);
      else if (M.isArray(m) && pb(m) || (M.isFileList(m) || M.endsWith(p, "[]")) && (h = M.toArray(m)))
        return p = of(p), h.forEach(function(O, C) {
          !(M.isUndefined(O) || O === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Du([p], C, a) : s === null ? p : p + "[]",
            l(O)
          );
        }), !1;
    }
    return Cs(m) ? !0 : (t.append(Du(f, p, a), l(m)), !1);
  }
  const d = [], g = Object.assign(mb, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Cs
  });
  function y(m, p) {
    if (!M.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(m), M.forEach(m, function(h, w) {
        (!(M.isUndefined(h) || h === null) && o.call(
          t,
          h,
          M.isString(w) ? w.trim() : w,
          p,
          g
        )) === !0 && y(h, p ? p.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!M.isObject(e))
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
function vi(e, t) {
  this._pairs = [], e && Eo(e, this, t);
}
const af = vi.prototype;
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
function hb(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function sf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || hb;
  M.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = M.isURLSearchParams(t) ? t.toString() : new vi(t, n).toString(r), a) {
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
    M.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const lf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, yb = typeof URLSearchParams < "u" ? URLSearchParams : vi, gb = typeof FormData < "u" ? FormData : null, vb = typeof Blob < "u" ? Blob : null, bb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: yb,
    FormData: gb,
    Blob: vb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bi = typeof window < "u" && typeof document < "u", Ps = typeof navigator == "object" && navigator || void 0, wb = bi && (!Ps || ["ReactNative", "NativeScript", "NS"].indexOf(Ps.product) < 0), Sb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", xb = bi && window.location.href || "http://localhost", Ob = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bi,
  hasStandardBrowserEnv: wb,
  hasStandardBrowserWebWorkerEnv: Sb,
  navigator: Ps,
  origin: xb
}, Symbol.toStringTag, { value: "Module" })), Le = {
  ...Ob,
  ...bb
};
function Ab(e, t) {
  return Eo(e, new Le.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Le.isNode && M.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Eb(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
    return s = !s && M.isArray(o) ? o.length : s, c ? (M.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !i) : ((!o[s] || !M.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && M.isArray(o[s]) && (o[s] = Cb(o[s])), !i);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const n = {};
    return M.forEachEntry(e, (r, o) => {
      t(Eb(r), o, n, 0);
    }), n;
  }
  return null;
}
function Pb(e, t, n) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e);
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
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = M.isObject(t);
    if (a && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t))
      return o ? JSON.stringify(uf(t)) : t;
    if (M.isArrayBuffer(t) || M.isBuffer(t) || M.isStream(t) || M.isFile(t) || M.isBlob(t) || M.isReadableStream(t))
      return t;
    if (M.isArrayBufferView(t))
      return t.buffer;
    if (M.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ab(t, this.formSerializer).toString();
      if ((i = M.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Eo(
          i ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), Pb(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || br.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (M.isResponse(t) || M.isReadableStream(t))
      return t;
    if (t && M.isString(t) && (r && !this.responseType || o)) {
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
M.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  br.headers[e] = {};
});
const kb = M.toObjectSet([
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
]), $b = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && kb[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ru = Symbol("internals");
function Jn(e) {
  return e && String(e).trim().toLowerCase();
}
function Wr(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(Wr) : String(e);
}
function Db(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Tb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function qa(e, t, n, r, o) {
  if (M.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!M.isString(t)) {
    if (M.isString(r))
      return t.indexOf(r) !== -1;
    if (M.isRegExp(r))
      return r.test(t);
  }
}
function Fb(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Rb(e, t) {
  const n = M.toCamelCase(" " + t);
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
      const d = M.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = Wr(i));
    }
    const s = (i, c) => M.forEach(i, (l, u) => a(l, u, c));
    if (M.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (M.isString(t) && (t = t.trim()) && !Tb(t))
      s($b(t), n);
    else if (M.isObject(t) && M.isIterable(t)) {
      let i = {}, c, l;
      for (const u of t) {
        if (!M.isArray(u))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = u[0]] = (c = i[l]) ? M.isArray(c) ? [...c, u[1]] : [c, u[1]] : u[1];
      }
      s(i, n);
    } else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Jn(t), t) {
      const r = M.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return Db(o);
        if (M.isFunction(n))
          return n.call(this, o, r);
        if (M.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Jn(t), t) {
      const r = M.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || qa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = Jn(s), s) {
        const i = M.findKey(r, s);
        i && (!n || qa(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return M.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || qa(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return M.forEach(this, (o, a) => {
      const s = M.findKey(r, a);
      if (s) {
        n[s] = Wr(o), delete n[a];
        return;
      }
      const i = t ? Fb(a) : String(a).trim();
      i !== a && delete n[a], n[i] = Wr(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && M.isArray(r) ? r.join(", ") : r);
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
      r[i] || (Rb(o, s), r[i] = !0);
    }
    return M.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
Ke.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.reduceDescriptors(Ke.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
M.freezeMethods(Ke);
function za(e, t) {
  const n = this || br, r = t || n, o = Ke.from(r.headers);
  let a = r.data;
  return M.forEach(e, function(i) {
    a = i.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function cf(e) {
  return !!(e && e.__CANCEL__);
}
function Un(e, t, n) {
  oe.call(this, e ?? "canceled", oe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
M.inherits(Un, oe, {
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
function Ib(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _b(e, t) {
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
function Lb(e, t) {
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
  const o = _b(50, 250);
  return Lb((a) => {
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
}, _u = (e) => (...t) => M.asap(() => e(...t)), Bb = Le.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Le.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Le.origin),
  Le.navigator && /(msie|trident)/i.test(Le.navigator.userAgent)
) : () => !0, Mb = Le.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      M.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), M.isString(r) && s.push("path=" + r), M.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Nb(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function jb(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ff(e, t, n) {
  let r = !Nb(t);
  return e && (r || n == !1) ? jb(e, t) : t;
}
const Lu = (e) => e instanceof Ke ? { ...e } : e;
function pn(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d, g) {
    return M.isPlainObject(l) && M.isPlainObject(u) ? M.merge.call({ caseless: g }, l, u) : M.isPlainObject(u) ? M.merge({}, u) : M.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d, g) {
    if (M.isUndefined(u)) {
      if (!M.isUndefined(l))
        return r(void 0, l, d, g);
    } else return r(l, u, d, g);
  }
  function a(l, u) {
    if (!M.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (M.isUndefined(u)) {
      if (!M.isUndefined(l))
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
  return M.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, g = d(e[u], t[u], u);
    M.isUndefined(g) && d !== i || (n[u] = g);
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
  if (M.isFormData(n)) {
    if (Le.hasStandardBrowserEnv || Le.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Le.hasStandardBrowserEnv && (r && M.isFunction(r) && (r = r(t)), r || r !== !1 && Bb(t.url))) {
    const l = o && a && Mb.read(a);
    l && s.set(o, l);
  }
  return t;
}, qb = typeof XMLHttpRequest < "u", zb = qb && function(e) {
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
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const $ = o.transitional || lf;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), r(new oe(
        C,
        $.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        e,
        f
      )), f = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in f && M.forEach(s.toJSON(), function(C, $) {
      f.setRequestHeader($, C);
    }), M.isUndefined(o.withCredentials) || (f.withCredentials = !!o.withCredentials), i && i !== "json" && (f.responseType = o.responseType), l && ([g, m] = ao(l, !0), f.addEventListener("progress", g)), c && f.upload && ([d, y] = ao(c), f.upload.addEventListener("progress", d), f.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (u = (O) => {
      f && (r(!O || O.type ? new Un(null, e, f) : O), f.abort(), f = null);
    }, o.cancelToken && o.cancelToken.subscribe(u), o.signal && (o.signal.aborted ? u() : o.signal.addEventListener("abort", u)));
    const w = Ib(o.url);
    if (w && Le.protocols.indexOf(w) === -1) {
      r(new oe("Unsupported protocol " + w + ":", oe.ERR_BAD_REQUEST, e));
      return;
    }
    f.send(a || null);
  });
}, Vb = (e, t) => {
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
    return c.unsubscribe = () => M.asap(i), c;
  }
}, Ub = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, Hb = async function* (e, t) {
  for await (const n of Wb(e))
    yield* Ub(n, t);
}, Wb = async function* (e) {
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
  const o = Hb(e, t);
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
}, Co = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", mf = Co && typeof ReadableStream == "function", Kb = Co && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), hf = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Gb = mf && hf(() => {
  let e = !1;
  const t = new Request(Le.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Mu = 64 * 1024, ks = mf && hf(() => M.isReadableStream(new Response("").body)), so = {
  stream: ks && ((e) => e.body)
};
Co && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !so[t] && (so[t] = M.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new oe(`Response type '${t}' is not supported`, oe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Yb = async (e) => {
  if (e == null)
    return 0;
  if (M.isBlob(e))
    return e.size;
  if (M.isSpecCompliantForm(e))
    return (await new Request(Le.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (M.isArrayBufferView(e) || M.isArrayBuffer(e))
    return e.byteLength;
  if (M.isURLSearchParams(e) && (e = e + ""), M.isString(e))
    return (await Kb(e)).byteLength;
}, Xb = async (e, t) => {
  const n = M.toFiniteNumber(e.getContentLength());
  return n ?? Yb(t);
}, Jb = Co && (async (e) => {
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
  let y = Vb([o, a && a.toAbortSignal()], s), m;
  const p = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let f;
  try {
    if (c && Gb && n !== "get" && n !== "head" && (f = await Xb(u, r)) !== 0) {
      let $ = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), z;
      if (M.isFormData(r) && (z = $.headers.get("content-type")) && u.setContentType(z), $.body) {
        const [q, Y] = Iu(
          f,
          ao(_u(c))
        );
        r = Bu($.body, Mu, q, Y);
      }
    }
    M.isString(d) || (d = d ? "include" : "omit");
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
    const O = ks && (l === "stream" || l === "response");
    if (ks && (i || O && p)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((R) => {
        $[R] = w[R];
      });
      const z = M.toFiniteNumber(w.headers.get("content-length")), [q, Y] = i && Iu(
        z,
        ao(_u(i), !0)
      ) || [];
      w = new Response(
        Bu(w.body, Mu, q, () => {
          Y && Y(), p && p();
        }),
        $
      );
    }
    l = l || "text";
    let C = await so[M.findKey(so, l) || "text"](w, e);
    return !O && p && p(), await new Promise(($, z) => {
      df($, z, {
        data: C,
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
}), $s = {
  http: fb,
  xhr: zb,
  fetch: Jb
};
M.forEach($s, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Nu = (e) => `- ${e}`, Qb = (e) => M.isFunction(e) || e === null || e === !1, yf = {
  getAdapter: (e) => {
    e = M.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let s;
      if (r = n, !Qb(n) && (r = $s[(s = String(n)).toLowerCase()], r === void 0))
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
  adapters: $s
};
function Va(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Un(null, e);
}
function ju(e) {
  return Va(e), e.headers = Ke.from(e.headers), e.data = za.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yf.getAdapter(e.adapter || br.adapter)(e).then(function(r) {
    return Va(e), r.data = za.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Ke.from(r.headers), r;
  }, function(r) {
    return cf(r) || (Va(e), r && r.response && (r.response.data = za.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Ke.from(r.response.headers))), Promise.reject(r);
  });
}
const gf = "1.9.0", Po = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Po[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qu = {};
Po.transitional = function(t, n, r) {
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
Po.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function Zb(e, t, n) {
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
  assertOptions: Zb,
  validators: Po
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
    }, !1), o != null && (M.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Kr.assertOptions(o, {
      encode: wt.function,
      serialize: wt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Kr.assertOptions(n, {
      baseUrl: wt.spelling("baseURL"),
      withXsrfToken: wt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && M.merge(
      a.common,
      a[n.method]
    );
    a && M.forEach(
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
M.forEach(["delete", "get", "head", "options"], function(t) {
  cn.prototype[t] = function(n, r) {
    return this.request(pn(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(t) {
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
let e1 = class vf {
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
function t1(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function n1(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const Ds = {
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
Object.entries(Ds).forEach(([e, t]) => {
  Ds[t] = e;
});
function bf(e) {
  const t = new cn(e), n = Gd(cn.prototype.request, t);
  return M.extend(n, cn.prototype, t, { allOwnKeys: !0 }), M.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return bf(pn(e, o));
  }, n;
}
const xe = bf(br);
xe.Axios = cn;
xe.CanceledError = Un;
xe.CancelToken = e1;
xe.isCancel = cf;
xe.VERSION = gf;
xe.toFormData = Eo;
xe.AxiosError = oe;
xe.Cancel = xe.CanceledError;
xe.all = function(t) {
  return Promise.all(t);
};
xe.spread = t1;
xe.isAxiosError = n1;
xe.mergeConfig = pn;
xe.AxiosHeaders = Ke;
xe.formToJSON = (e) => uf(M.isHTMLForm(e) ? new FormData(e) : e);
xe.getAdapter = yf.getAdapter;
xe.HttpStatusCode = Ds;
xe.default = xe;
const {
  Axios: EO,
  AxiosError: CO,
  CanceledError: PO,
  isCancel: kO,
  CancelToken: $O,
  VERSION: DO,
  all: TO,
  Cancel: FO,
  isAxiosError: RO,
  spread: IO,
  toFormData: _O,
  AxiosHeaders: LO,
  HttpStatusCode: BO,
  formToJSON: MO,
  getAdapter: NO,
  mergeConfig: jO
} = xe;
function Ts(e, t) {
  let n;
  return function(...r) {
    clearTimeout(n), n = setTimeout(() => e.apply(this, r), t);
  };
}
function gt(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var zu = (e) => gt("before", { cancelable: !0, detail: { visit: e } }), r1 = (e) => gt("error", { detail: { errors: e } }), o1 = (e) => gt("exception", { cancelable: !0, detail: { exception: e } }), a1 = (e) => gt("finish", { detail: { visit: e } }), s1 = (e) => gt("invalid", { cancelable: !0, detail: { response: e } }), lr = (e) => gt("navigate", { detail: { page: e } }), i1 = (e) => gt("progress", { detail: { progress: e } }), l1 = (e) => gt("start", { detail: { visit: e } }), u1 = (e) => gt("success", { detail: { page: e } }), c1 = (e, t) => gt("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), d1 = (e) => gt("prefetching", { detail: { visit: e } }), je = class {
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
var f1 = async (e) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  let t = wf(), n = await Sf(), r = await v1(n);
  if (!r) throw new Error("Unable to encrypt history");
  return await m1(t, r, e);
}, Ln = { key: "historyKey", iv: "historyIv" }, p1 = async (e) => {
  let t = wf(), n = await Sf();
  if (!n) throw new Error("Unable to decrypt history");
  return await h1(t, n, e);
}, m1 = async (e, t, n) => {
  if (typeof window > "u") throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = new TextEncoder(), o = JSON.stringify(n), a = new Uint8Array(o.length * 3), s = r.encodeInto(o, a);
  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv: e }, t, a.subarray(0, s.written));
}, h1 = async (e, t, n) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(n);
  let r = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
  return JSON.parse(new TextDecoder().decode(r));
}, wf = () => {
  let e = je.get(Ln.iv);
  if (e) return new Uint8Array(e);
  let t = window.crypto.getRandomValues(new Uint8Array(12));
  return je.set(Ln.iv, Array.from(t)), t;
}, y1 = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, !0, ["encrypt", "decrypt"]), g1 = async (e) => {
  if (typeof window.crypto.subtle > "u") return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  let t = await window.crypto.subtle.exportKey("raw", e);
  je.set(Ln.key, Array.from(new Uint8Array(t)));
}, v1 = async (e) => {
  if (e) return e;
  let t = await y1();
  return t ? (await g1(t), t) : null;
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
function Fs(e) {
  return e instanceof File || e instanceof Blob || e instanceof FileList && e.length > 0 || e instanceof FormData && Array.from(e.values()).some((t) => Fs(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => Fs(t));
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
var b1 = (e, t, n, r, o) => {
  let a = typeof e == "string" ? Kt(e) : e;
  if ((Fs(t) || r) && !Vu(t) && (t = xf(t)), Vu(t)) return [a, t];
  let [s, i] = wi(n, a, t, o);
  return [Kt(s), i];
};
function wi(e, t, n, r = "brackets") {
  let o = /^https?:\/\//.test(t.toString()), a = o || t.toString().startsWith("/"), s = !a && !t.toString().startsWith("#") && !t.toString().startsWith("?"), i = t.toString().includes("?") || e === "get" && Object.keys(n).length, c = t.toString().includes("#"), l = new URL(t.toString(), "http://localhost");
  return e === "get" && Object.keys(n).length && (l.search = ku.stringify(tr(ku.parse(l.search, { ignoreQueryPrefix: !0 }), n), { encodeValuesOnly: !0, arrayFormat: r }), n = {}), [[o ? `${l.protocol}//${l.host}` : "", a ? l.pathname : "", s ? l.pathname.substring(1) : "", i ? l.search : "", c ? l.hash : ""].join(""), n];
}
function io(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Uu = (e, t) => {
  e.hash && !t.hash && io(e).href === t.href && (t.hash = e.hash);
}, Rs = (e, t) => io(e).href === io(t).href, w1 = class {
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
      return t = t || Rs(Kt(e.url), s), new Promise((i) => {
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
}, te = new w1(), Ef = class {
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
}, rr = typeof window > "u", Qn = new Ef(), Hu = !rr && /CriOS/.test(window.navigator.userAgent), S1 = class {
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
    return new Promise((t) => e.encryptHistory ? f1(e).then(t) : t(e));
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
    return e instanceof ArrayBuffer ? p1(e) : Promise.resolve(e);
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
var de = new S1(), x1 = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("scroll", Ts(ut.onWindowScroll.bind(ut), 100), !0)), typeof document < "u" && document.addEventListener("scroll", Ts(ut.onScroll.bind(ut), 100), !0);
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
}, sn = new x1(), O1 = class {
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
}, Ua = new O1(), A1 = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((e) => e.bind(this)());
  }
  static clearRememberedStateOnReload() {
    Ua.isReload() && de.deleteState(de.rememberedState);
  }
  static handleBackForward() {
    if (!Ua.isBackForward() || !de.hasAnyState()) return !1;
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
      Ua.isReload() && ut.restore(de.getScrollRegions()), lr(te.get());
    });
  }
}, E1 = class {
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
    let r = new E1(e, t, n);
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
}, P1 = new C1(), Cf = (e, t, n) => {
  if (e === t) return !0;
  for (let r in e) if (!n.includes(r) && e[r] !== t[r] && !k1(e[r], t[r])) return !1;
  return !0;
}, k1 = (e, t) => {
  switch (typeof e) {
    case "object":
      return Cf(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, $1 = { ms: 1, s: 1e3, m: 6e4, h: 36e5, d: 864e5 }, Wu = (e) => {
  if (typeof e == "number") return e;
  for (let [t, n] of Object.entries($1)) if (e.endsWith(t)) return parseFloat(e) * n;
  return parseInt(e);
}, D1 = class {
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
    return Cf(e, t, ["showProgress", "replace", "prefetch", "onBefore", "onStart", "onProgress", "onFinish", "onCancel", "onSuccess", "onError", "onPrefetched", "onCancelToken", "onPrefetching", "async"]);
  }
}, nn = new D1(), T1 = class Pf {
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
}, F1 = { modal: null, listener: null, show(e) {
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
} }, R1 = new Ef(), Ku = class kf {
  constructor(t, n, r) {
    this.requestParams = t, this.response = n, this.originatingPage = r;
  }
  static create(t, n, r) {
    return new kf(t, n, r);
  }
  async handlePrefetch() {
    Rs(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return R1.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) return this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), c1(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse()) return this.handleNonInertiaResponse();
    await de.processQueue(), de.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    let t = te.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      let n = this.getScopedErrors(t);
      return r1(n), this.requestParams.all().onError(n);
    }
    u1(te.get()), await this.requestParams.all().onSuccess(te.get()), de.preserveUrl = !1;
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
    if (s1(t)) return F1.show(t.data);
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
      Rs(window.location, t) ? window.location.reload() : window.location.href = t.href;
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
    this.page = n, this.requestHasFinished = !1, this.requestParams = T1.create(t), this.cancelToken = new AbortController();
  }
  static create(t, n) {
    return new $f(t, n);
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), l1(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), d1(this.requestParams.all()));
    let t = this.requestParams.all().prefetch;
    return xe({ method: this.requestParams.all().method, url: io(this.requestParams.all().url).href, data: this.requestParams.data(), params: this.requestParams.queryParams(), signal: this.cancelToken.signal, headers: this.getHeaders(), onUploadProgress: this.onProgress.bind(this), responseType: "text" }).then((n) => (this.response = Ku.create(this.requestParams, n, this.page), this.response.handle())).catch((n) => n != null && n.response ? (this.response = Ku.create(this.requestParams, n.response, this.page), this.response.handle()) : Promise.reject(n)).catch((n) => {
      if (!xe.isCancel(n) && o1(n)) return Promise.reject(n);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, a1(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: n = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: n }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, i1(t), this.requestParams.all().onProgress(t));
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
}, I1 = class {
  constructor() {
    this.syncRequestStream = new Yu({ maxConcurrent: 1, interruptible: !0 }), this.asyncRequestStream = new Yu({ maxConcurrent: 1 / 0, interruptible: !1 });
  }
  init({ initialPage: e, resolveComponent: t, swapComponent: n }) {
    te.init({ initialPage: e, resolveComponent: t, swapComponent: n }), A1.handle(), sn.init(), sn.on("missingHistoryItem", () => {
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
    return P1.add(e, () => this.reload(t), { autoStart: n.autoStart ?? !0, keepAlive: n.keepAlive ?? !1 });
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
    W1(), this.asyncRequestStream.interruptInFlight();
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
    let r = { method: "get", data: {}, replace: !1, preserveScroll: !1, preserveState: !1, only: [], except: [], headers: {}, errorBag: "", forceFormData: !1, queryStringArrayFormat: "brackets", async: !1, showProgress: !0, fresh: !1, reset: [], preserveUrl: !1, prefetch: !1, ...t }, [o, a] = b1(e, r.data, r.method, r.forceFormData, r.queryStringArrayFormat);
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
}, _1 = { buildDOMElement(e) {
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
}, update: Ts(function(e) {
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
function L1(e, t, n) {
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
    e ? n(c()) : _1.update(c());
  }
  return l(), { forceUpdate: l, createProvider: function() {
    let u = a();
    return { update: (d) => i(u, d), disconnect: () => s(u) };
  } };
}
var Ae = "nprogress", De = { minimum: 0.08, easing: "linear", positionUsing: "translate3d", speed: 200, trickle: !0, trickleSpeed: 200, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", color: "#29d", includeCSS: !0, template: ['<div class="bar" role="bar">', '<div class="peg"></div>', "</div>", '<div class="spinner" role="spinner">', '<div class="spinner-icon"></div>', "</div>"].join("") }, Jt = null, B1 = (e) => {
  Object.assign(De, e), De.includeCSS && V1(De.color);
}, ko = (e) => {
  let t = Df();
  e = _f(e, De.minimum, 1), Jt = e === 1 ? null : e;
  let n = N1(!t), r = n.querySelector(De.barSelector), o = De.speed, a = De.easing;
  n.offsetWidth, z1((s) => {
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
  Jt || ko(0);
  let e = function() {
    setTimeout(function() {
      Jt && (Ff(), e());
    }, De.trickleSpeed);
  };
  De.trickle && e();
}, M1 = (e) => {
  !e && !Jt || (Ff(0.3 + 0.5 * Math.random()), ko(1));
}, Ff = (e) => {
  let t = Jt;
  if (t === null) return Tf();
  if (!(t > 1)) return e = typeof e == "number" ? e : (() => {
    let n = { 0.1: [0, 0.2], 0.04: [0.2, 0.5], 0.02: [0.5, 0.8], 5e-3: [0.8, 0.99] };
    for (let r in n) if (t >= n[r][0] && t < n[r][1]) return parseFloat(r);
    return 0;
  })(), ko(_f(t + e, 0, 0.994));
}, N1 = (e) => {
  var a;
  if (j1()) return document.getElementById(Ae);
  document.documentElement.classList.add(`${Ae}-busy`);
  let t = document.createElement("div");
  t.id = Ae, t.innerHTML = De.template;
  let n = t.querySelector(De.barSelector), r = e ? "-100" : Gr(Jt || 0), o = Rf();
  return n.style.transition = "all 0 linear", n.style.transform = `translate3d(${r}%,0,0)`, De.showSpinner || ((a = t.querySelector(De.spinnerSelector)) == null || a.remove()), o !== document.body && o.classList.add(`${Ae}-custom-parent`), o.appendChild(t), t;
}, Rf = () => q1(De.parent) ? De.parent : document.querySelector(De.parent), If = () => {
  var e;
  document.documentElement.classList.remove(`${Ae}-busy`), Rf().classList.remove(`${Ae}-custom-parent`), (e = document.getElementById(Ae)) == null || e.remove();
}, j1 = () => document.getElementById(Ae) !== null, q1 = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function _f(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
var Gr = (e) => (-1 + e) * 100, z1 = /* @__PURE__ */ (() => {
  let e = [], t = () => {
    let n = e.shift();
    n && n(t);
  };
  return (n) => {
    e.push(n), e.length === 1 && t();
  };
})(), V1 = (e) => {
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
})(), U1 = () => {
  if (Rn && document.head.contains(Rn)) return document.head.removeChild(Rn);
}, H1 = () => {
  Rn && !document.head.contains(Rn) && document.head.appendChild(Rn);
}, Lf = { configure: B1, isStarted: Df, done: M1, set: ko, remove: If, start: Tf, status: Jt, show: U1, hide: H1 }, Yr = 0, Xu = (e = !1) => {
  Yr = Math.max(0, Yr - 1), (e || Yr === 0) && Lf.show();
}, W1 = () => {
  Yr++, Lf.hide();
};
function Xr(e) {
  let t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(e.target && (e == null ? void 0 : e.target).isContentEditable || e.defaultPrevented || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
var At = new I1();
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
function Jr(e, t, n) {
  if (e == null)
    return n;
  switch (typeof t) {
    case "string": {
      const r = e[t];
      return r === void 0 ? Bf(t) ? Jr(e, Si(t), n) : n : r;
    }
    case "number":
    case "symbol": {
      typeof t == "number" && (t = Mf(t));
      const r = e[t];
      return r === void 0 ? n : r;
    }
    default: {
      if (Array.isArray(t))
        return K1(e, t, n);
      Object.is(t == null ? void 0 : t.valueOf(), -0) ? t = "-0" : t = String(t);
      const r = e[t];
      return r === void 0 ? n : r;
    }
  }
}
function K1(e, t, n) {
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
const G1 = /^(?:0|[1-9]\d*)$/;
function Nf(e, t = Number.MAX_SAFE_INTEGER) {
  switch (typeof e) {
    case "number":
      return Number.isInteger(e) && e >= 0 && e < t;
    case "symbol":
      return !1;
    case "string":
      return G1.test(e);
  }
}
function Y1(e) {
  return e !== null && typeof e == "object" && ro(e) === "[object Arguments]";
}
function X1(e, t) {
  let n;
  if (Array.isArray(t) ? n = t : typeof t == "string" && Bf(t) && (e == null ? void 0 : e[t]) == null ? n = Si(t) : n = [t], n.length === 0)
    return !1;
  let r = e;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if ((r == null || !Object.hasOwn(r, a)) && !((Array.isArray(r) || Y1(r)) && Nf(a) && a < r.length))
      return !1;
    r = r[a];
  }
  return !0;
}
const J1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Q1 = /^\w*$/;
function Z1(e, t) {
  return Array.isArray(e) ? !1 : typeof e == "number" || typeof e == "boolean" || e == null || L0(e) ? !0 : typeof e == "string" && (Q1.test(e) || !J1.test(e)) || t != null && Object.hasOwn(t, e);
}
const ew = (e, t, n) => {
  const r = e[t];
  (!(Object.hasOwn(e, t) && Md(r, n)) || n === void 0 && !(t in e)) && (e[t] = n);
};
function tw(e, t, n, r) {
  if (e == null && !Ju(e))
    return e;
  const o = Z1(t, e) ? [t] : Array.isArray(t) ? t : typeof t == "string" ? Si(t) : [t];
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
    ew(a, i, c), a = a[i];
  }
  return e;
}
function Rr(e, t, n) {
  return tw(e, t, () => n, () => {
  });
}
function nw(e, t) {
  let n = typeof e == "string" ? e : null, r = (typeof e == "string" ? t : e) ?? {}, o = n ? At.restore(n) : null, a = lt(typeof r == "function" ? r() : r), s = null, i = null, c = (u) => u, l = hr({ ...o ? o.data : lt(a), isDirty: !1, errors: o ? o.errors : {}, hasErrors: !1, processing: !1, progress: null, wasSuccessful: !1, recentlySuccessful: !1, data() {
    return Object.keys(a).reduce((u, d) => Rr(u, d, Jr(this, d)), {});
  }, transform(u) {
    return c = u, this;
  }, defaults(u, d) {
    if (typeof r == "function") throw new Error("You cannot call `defaults()` when using a function to define your form data.");
    return typeof u > "u" ? (a = lt(this.data()), this.isDirty = !1) : a = typeof u == "string" ? Rr(lt(a), u, d) : Object.assign({}, lt(a), u), this;
  }, reset(...u) {
    let d = lt(typeof r == "function" ? r() : a), g = lt(d);
    return u.length === 0 ? (a = g, Object.assign(this, d)) : u.filter((y) => X1(g, y)).forEach((y) => {
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
    l.isDirty = !W0(l.data(), a), n && At.remember(lt(u.__remember()), n);
  }, { immediate: !0, deep: !0 }), l;
}
var Je = L(null), Ue = L(null), Ha = mr(null), Ir = L(null), Qu = null;
U({ name: "Inertia", props: { initialPage: { type: Object, required: !0 }, initialComponent: { type: Object, required: !1 }, resolveComponent: { type: Function, required: !1 }, titleCallback: { type: Function, required: !1, default: (e) => e }, onHeadUpdate: { type: Function, required: !1, default: () => () => {
} } }, setup({ initialPage: e, initialComponent: t, resolveComponent: n, titleCallback: r, onHeadUpdate: o }) {
  Je.value = t ? es(t) : null, Ue.value = e, Ir.value = null;
  let a = typeof window > "u";
  return Qu = L1(a, r, o), a || (At.init({ initialPage: e, resolveComponent: n, swapComponent: async (s) => {
    Je.value = es(s.component), Ue.value = s.page, Ir.value = s.preserveState ? Ir.value : Date.now();
  } }), At.on("navigate", () => Qu.forceUpdate())), () => {
    if (Je.value) {
      Je.value.inheritAttrs = !!Je.value.inheritAttrs;
      let s = qe(Je.value, { ...Ue.value.props, key: Ir.value });
      return Ha.value && (Je.value.layout = Ha.value, Ha.value = null), Je.value.layout ? typeof Je.value.layout == "function" ? Je.value.layout(qe, s) : (Array.isArray(Je.value.layout) ? Je.value.layout : [Je.value.layout]).concat(s).reverse().reduce((i, c) => (c.inheritAttrs = !!c.inheritAttrs, qe(c, { ...Ue.value.props }, () => i))) : s;
    }
  };
} });
function rw() {
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
var ow = U({ name: "Deferred", props: { data: { type: [String, Array], required: !0 } }, render() {
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
  let r = L(0), o = L(null), a = e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch], s = e.cacheFor !== 0 ? e.cacheFor : a.length === 1 && a[0] === "click" ? 0 : 3e4;
  pe(() => {
    a.includes("mount") && p();
  }), Pt(() => {
    clearTimeout(o.value);
  });
  let i = typeof e.href == "object" ? e.href.method : e.method.toLowerCase(), c = i !== "get" ? "button" : e.as.toLowerCase(), l = V(() => wi(i, typeof e.href == "object" ? e.href.url : e.href || "", e.data, e.queryStringArrayFormat)), u = V(() => l.value[0]), d = V(() => l.value[1]), g = V(() => ({ a: { href: u.value }, button: { type: "button" } })), y = { data: d.value, method: i, replace: e.replace, preserveScroll: e.preserveScroll, preserveState: e.preserveState ?? i !== "get", only: e.only, except: e.except, headers: e.headers, async: e.async }, m = { ...y, onCancelToken: e.onCancelToken, onBefore: e.onBefore, onStart: (O) => {
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
function zO(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function aw(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function VO(e) {
  return rw().props.auth.permissions.includes(e);
}
let Is = null;
function UO(e) {
  Is = e;
}
function wr() {
  return Is === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), Is;
}
let _s = null;
function HO(e) {
  _s = e;
}
function jf() {
  return _s === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), _s;
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
      const r = wr(), o = e.as.toLowerCase(), a = e.method.toLowerCase(), [s, i] = wi(
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
function sw(e, t) {
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
function iw() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(sw(arguments[t]));
  return e;
}
var lw = /* @__PURE__ */ new Map([
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
function $o(e, t) {
  var n = uw(e);
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
function uw(e) {
  var t = e.name, n = t && t.lastIndexOf(".") !== -1;
  if (n && !e.type) {
    var r = t.split(".").pop().toLowerCase(), o = lw.get(r);
    o && Object.defineProperty(e, "type", {
      value: o,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var cw = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function dw(e) {
  return Sr(this, void 0, void 0, function() {
    return xr(this, function(t) {
      return [2, fw(e) && e.dataTransfer ? hw(e.dataTransfer, e.type) : pw(e)];
    });
  });
}
function fw(e) {
  return !!e.dataTransfer;
}
function pw(e) {
  var t = mw(e.target) ? e.target.files ? Ls(e.target.files) : [] : [];
  return t.map(function(n) {
    return $o(n);
  });
}
function mw(e) {
  return e !== null;
}
function hw(e, t) {
  return Sr(this, void 0, void 0, function() {
    var n, r;
    return xr(this, function(o) {
      switch (o.label) {
        case 0:
          return e.items ? (n = Ls(e.items).filter(function(a) {
            return a.kind === "file";
          }), t !== "drop" ? [2, n] : [4, Promise.all(n.map(yw))]) : [3, 2];
        case 1:
          return r = o.sent(), [2, Zu(qf(r))];
        case 2:
          return [2, Zu(Ls(e.files).map(function(a) {
            return $o(a);
          }))];
      }
    });
  });
}
function Zu(e) {
  return e.filter(function(t) {
    return cw.indexOf(t.name) === -1;
  });
}
function Ls(e) {
  for (var t = [], n = 0; n < e.length; n++) {
    var r = e[n];
    t.push(r);
  }
  return t;
}
function yw(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return ec(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? zf(t) : ec(e);
}
function qf(e) {
  return e.reduce(function(t, n) {
    return iw(t, Array.isArray(n) ? qf(n) : [n]);
  }, []);
}
function ec(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var n = $o(t);
  return Promise.resolve(n);
}
function gw(e) {
  return Sr(this, void 0, void 0, function() {
    return xr(this, function(t) {
      return [2, e.isDirectory ? zf(e) : vw(e)];
    });
  });
}
function zf(e) {
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
                u = Promise.all(i.map(gw)), o.push(u), a(), d.label = 6;
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
function vw(e) {
  return Sr(this, void 0, void 0, function() {
    return xr(this, function(t) {
      return [2, new Promise(function(n, r) {
        e.file(function(o) {
          var a = $o(o, e.fullPath);
          n(a);
        }, function(o) {
          r(o);
        });
      })];
    });
  });
}
var _r = {}, tc;
function bw() {
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
var ww = bw();
const Vf = /* @__PURE__ */ K0(ww);
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
function Sw(e, t, n, r) {
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
function xw(e, t) {
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
function Bs(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ow(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function Aw(e) {
  return e.includes("Edge/");
}
function Ew(e) {
  return e === void 0 && (e = window.navigator.userAgent), Ow(e) || Aw(e);
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
var Cw = "file-invalid-type", Pw = "file-too-large", kw = "file-too-small", $w = "too-many-files", Dw = {
  code: $w,
  message: "Too many files"
}, Tw = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: Cw,
    message: "File type must be ".concat(t)
  };
};
function Zn(e) {
  return e != null;
}
var Fw = Vf.default, Rw = Fw || Vf;
function Uf(e, t) {
  var n = e.type === "application/x-moz-file" || Rw(e, t);
  return [n, n ? null : Tw(t)];
}
var oc = function(e) {
  return {
    code: Pw,
    message: "File is larger than ".concat(e, " bytes")
  };
}, ac = function(e) {
  return {
    code: kw,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Hf(e, t, n) {
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
      return !lo(n) && a && a.apply(void 0, Bs([n], r, !1)), lo(n);
    });
  };
}
function Iw(e) {
  var t = e.files, n = e.accept, r = e.minSize, o = e.maxSize, a = e.multiple, s = e.maxFiles;
  return !a && t.length > 1 || a && s >= 1 && t.length > s ? !1 : t.every(function(i) {
    var c = Uf(i, n)[0], l = Hf(i, r, o)[0];
    return c && l;
  });
}
var _w = {
  disabled: !1,
  getFilesFromEvent: dw,
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
function Wf(e) {
  e === void 0 && (e = {});
  var t = L(Qe(Qe({}, _w), e));
  ne(function() {
    return Qe({}, e);
  }, function(k) {
    t.value = Qe(Qe({}, t.value), k);
  });
  var n = L(), r = L(), o = hr({
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
    k || (Ew() ? setTimeout(a, 0) : a());
  }
  var u = L([]), d = function(k) {
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
    return Sw(this, void 0, void 0, function() {
      var N, v, A, E, S;
      return xw(this, function(W) {
        switch (W.label) {
          case 0:
            return N = t.value, v = N.getFilesFromEvent, A = N.noDragEventsBubbling, E = N.onDragEnter, k.preventDefault(), g(k), u.value = Bs(Bs([], u.value, !0), [k.target], !1), Lr(k) ? v ? [4, v(k)] : [2] : [3, 2];
          case 1:
            if (S = W.sent(), S || (S = []), lo(k) && !A)
              return [2];
            o.draggedFiles = S, o.isDragActive = !0, E && E(k), W.label = 2;
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
    var N = u.value.filter(function(E) {
      if (!n.value)
        return !1;
      var S = n.value.$el || n.value;
      return S.contains(E);
    }), v = N.indexOf(k.target);
    if (v !== -1 && N.splice(v, 1), u.value = N, !(N.length > 0)) {
      o.draggedFiles = [], o.isDragActive = !1;
      var A = t.value.onDragLeave;
      Lr(k) && A && A(k);
    }
  }
  function f(k) {
    k.preventDefault(), g(k), u.value = [];
    var N = t.value, v = N.getFilesFromEvent, A = N.noDragEventsBubbling, E = N.accept, S = N.minSize, W = N.maxSize, I = N.multiple, T = N.maxFiles, X = N.onDrop, ae = N.onDropRejected, Te = N.onDropAccepted;
    if (Lr(k)) {
      if (!v)
        return;
      Promise.resolve(v(k)).then(function(Ye) {
        if (!(lo(k) && !A)) {
          var $e = [], Me = [];
          Ye.forEach(function(Re) {
            var Ne = Uf(Re, E), vt = Ne[0], bt = Ne[1], Ce = Hf(Re, S, W), ue = Ce[0], ve = Ce[1];
            if (vt && ue)
              $e.push(Re);
            else {
              var me = [bt, ve].filter(function(Oe) {
                return Oe;
              });
              Me.push({ file: Re, errors: me });
            }
          }), (!I && $e.length > 1 || I && T >= 1 && $e.length > T) && ($e.forEach(function(Re) {
            Me.push({ file: Re, errors: [Dw] });
          }), $e.splice(0)), o.acceptedFiles = $e, o.fileRejections = Me, X && X($e, Me, k), Me.length > 0 && ae && ae(Me, k), $e.length > 0 && Te && Te($e, k);
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
  }, C = function(k) {
    k === void 0 && (k = {});
    var N = k.onFocus, v = k.onBlur, A = k.onClick, E = k.onDragEnter, S = k.onDragenter, W = k.onDragOver, I = k.onDragover, T = k.onDragLeave, X = k.onDragleave, ae = k.onDrop, Te = nc(k, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return Qe(Qe({ onFocus: w(Tt(N, i)), onBlur: w(Tt(v, c)), onClick: h(Tt(A, l)), onDragenter: O(Tt(E, S, y)), onDragover: O(Tt(W, I, m)), onDragleave: O(Tt(T, X, p)), onDrop: O(Tt(ae, f)), ref: n }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), Te);
  }, $ = function(k) {
    k.stopPropagation();
  };
  function z(k) {
    k === void 0 && (k = {});
    var N = k.onChange, v = k.onClick, A = nc(k, ["onChange", "onClick"]), E = {
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
    return Qe(Qe({}, E), A);
  }
  var q = V(function() {
    return o.draggedFiles ? o.draggedFiles.length : 0;
  }), Y = V(function() {
    return q.value > 0 && Iw({
      files: o.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), R = V(function() {
    return q.value > 0 && !Y.value;
  });
  return Qe(Qe({}, Nt(o)), { isDragAccept: Y, isDragReject: R, isFocused: V(function() {
    return o.isFocused && !t.value.disabled;
  }), getRootProps: C, getInputProps: z, rootRef: n, inputRef: r, open: h(a) });
}
const Lw = { class: "flex w-full flex-col" }, Bw = {
  key: 0,
  class: "text-black select-none"
}, Mw = ["name"], Nw = {
  key: 1,
  class: "select-none"
}, jw = { key: 2 }, qw = {
  key: 3,
  class: "select-none"
}, WO = {
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
    const t = e, n = L(null), r = (l) => {
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
    }, { getRootProps: a, getInputProps: s, isDragActive: i, ...c } = Wf({
      onDrop: o,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, u) => {
      var d;
      return x(), P("div", Lw, [
        D("div", {
          class: Z(["border-primary-200 bg-primary-50 text-primary-200 hover:border-primary-600 hover:text-primary w-full rounded-lg border-2 border-dashed transition duration-100 ease-in-out", {
            "border-primary-400 bg-primary-100": b(i),
            "bg-primary-100 border-red-600": t.form.errors[e.field] ?? n.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          D("div", ie({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, b(a)()), [
            e.label ? (x(), P("p", Bw, Q(e.label), 1)) : G("", !0),
            D("input", ie(b(s)(), { name: e.field }), null, 16, Mw),
            b(i) ? (x(), P("span", Nw, "Drop the " + Q(r(e.field)) + " here ...", 1)) : e.form[e.field] ? (x(), P("span", jw, Q(((d = e.form[e.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (x(), P("span", qw, "Drag 'n' drop " + Q(r(e.field)) + " here", 1))
          ], 16)
        ], 2),
        J(b(en), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? n.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, zw = { class: "flex w-full" }, Vw = { key: 0 }, Uw = { key: 1 }, Hw = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, Ww = ["onClick"], Kw = ["src"], Gw = ["value"], Yw = { class: "flex items-center gap-4" }, Xw = {
  key: 0,
  class: "text-sm text-gray-600"
}, Jw = {
  key: 1,
  class: "mt-2"
}, Qw = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, Zw = { class: "-m-1 flex flex-wrap md:-m-2" }, e2 = { class: "h-full w-full p-1 shadow md:p-2" }, t2 = ["src"], KO = /* @__PURE__ */ U({
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
    const t = wr(), n = e, r = nw({
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
    const { getRootProps: l, getInputProps: u, isDragActive: d } = Wf({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    }), g = L(!1);
    return (y, m) => (x(), P(re, null, [
      e.canUpload ? (x(), P("form", {
        key: 0,
        onSubmit: St(a, ["prevent"]),
        class: "w-full"
      }, [
        D("div", zw, [
          D("div", {
            class: Z(["border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary w-full rounded-l-lg border-2 border-r-0 border-dashed transition duration-100 ease-in-out", { "border-primary-400 bg-primary-100": g.value }])
          }, [
            D("div", ie({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, b(l)()), [
              D("input", be(Pe(b(u)())), null, 16),
              b(d) ? (x(), P("span", Vw, "Drop the files here ...")) : (x(), P("span", Uw, "Drag 'n' drop images here"))
            ], 16),
            b(r).image.length > 0 ? (x(), P("div", Hw, [
              (x(!0), P(re, null, Ee(b(r).image, (p, f) => (x(), P("div", {
                class: "relative cursor-pointer select-none",
                onClick: (h) => c(f),
                key: f
              }, [
                m[0] || (m[0] = D("div", { class: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                D("img", {
                  src: p.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, Kw)
              ], 8, Ww))), 128))
            ])) : G("", !0)
          ], 2),
          J(b(lO), {
            class: Z(["inline rounded-l-none", { "cursor-not-allowed": b(r).image.length == 0 }]),
            disabled: b(r).image.length == 0
          }, {
            default: B(() => m[1] || (m[1] = [
              fe(" Upload ")
            ])),
            _: 1
          }, 8, ["class", "disabled"]),
          b(r).progress ? (x(), P("progress", {
            key: 0,
            value: b(r).progress.percentage,
            max: "100"
          }, Q(b(r).progress.percentage) + "%", 9, Gw)) : G("", !0)
        ]),
        y.$page.props.errors.image ? (x(), H(b(en), {
          key: 0,
          class: "mt-2",
          message: y.$page.props.errors.image
        }, null, 8, ["message"])) : G("", !0),
        D("div", Yw, [
          J(un, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: B(() => [
              b(r).recentlySuccessful ? (x(), P("p", Xw, "Images uploaded.")) : G("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : G("", !0),
      e.images.length ? (x(), P("div", Jw, [
        m[3] || (m[3] = D("hr", null, null, -1)),
        D("div", Qw, [
          D("div", Zw, [
            (x(!0), P(re, null, Ee(e.images, (p, f) => (x(), P("div", {
              key: f,
              class: "flex w-1/3 flex-wrap"
            }, [
              D("div", e2, [
                D("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: p.url
                }, null, 8, t2),
                e.canUpload ? (x(), H(b(ft), {
                  key: 0,
                  href: o("images.delete", p.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700",
                  as: "button"
                }, {
                  default: B(() => m[2] || (m[2] = [
                    fe(" Delete Image ")
                  ])),
                  _: 2
                }, 1032, ["href"])) : G("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : G("", !0)
    ], 64));
  }
}), n2 = { class: "flex items-center space-x-3" }, r2 = ["id", "name", "value", "checked"], o2 = ["for"], GO = /* @__PURE__ */ U({
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
    return (i, c) => (x(), P("div", n2, [
      D("input", {
        id: s.value,
        type: "radio",
        name: i.name || i.field,
        value: i.value,
        checked: a.value,
        onChange: o,
        class: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
      }, null, 40, r2),
      D("label", {
        for: s.value,
        class: "cursor-pointer text-sm font-medium text-gray-700"
      }, Q(i.label), 9, o2)
    ]));
  }
}), Kf = {
  START: "start"
}, we = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
  NO_STYLE: "no-style"
}, a2 = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, uo = /* @__PURE__ */ U({
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
            D("div", {
              class: Z({ "opacity-25": ((o = t.form) == null ? void 0 : o.processing) || t.loading })
            }, [
              j(t.$slots, "default")
            ], 2),
            (a = t.form) != null && a.processing || t.loading ? (x(), P("div", a2, [
              J(b(qi), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : G("", !0)
          ];
        }),
        _: 3
      }, 8, ["theme", "disabled", "type", "custom-class", "size"]);
    };
  }
}), s2 = { class: "w-full" }, i2 = ["id"], l2 = ["disabled"], u2 = { key: 0 }, c2 = { key: 1 }, d2 = { class: "ml-2 w-2" }, f2 = {
  class: "absolute z-1000 -mt-1! hidden min-w-full bg-white data-te-dropdown-show:block",
  "data-te-dropdown-menu-ref": ""
}, p2 = { class: "float-left m-0 box-border max-h-80 min-w-full list-none overflow-auto rounded rounded-t-none border border-t-0 border-gray-300 bg-clip-padding text-left text-base shadow" }, m2 = ["onClick"], YO = {
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
    return (c, l) => (x(), P("div", s2, [
      !e.noLabel && (e.label || e.field) ? (x(), H(b(qn), {
        key: 0,
        for: e.id ?? e.field,
        value: o(e.label ?? e.field)
      }, null, 8, ["for", "value"])) : G("", !0),
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
          i().length > 0 ? (x(), P("span", u2, Q(i().length) + " selected", 1)) : (x(), P("span", c2, Q(e.placeholder), 1)),
          D("span", d2, [
            J(b(Se), {
              icon: b(Qs),
              class: "h-5 w-5"
            }, null, 8, ["icon"])
          ])
        ], 8, l2),
        D("div", f2, [
          D("ul", p2, [
            (x(!0), P(re, null, Ee(e.list, (u) => (x(), P("li", {
              onClick: (d) => a(u),
              key: u[e.optionValue],
              class: "flex w-full min-w-full cursor-pointer items-center justify-start border-t border-gray-50 px-4 py-3 text-sm leading-4 font-normal hover:bg-[rgba(0,0,0,.03)]"
            }, [
              D("div", {
                class: Z(["mr-2 -ml-2 h-4 w-4 rounded border", s(u) ? "bg-primary" : "bg-white"])
              }, null, 2),
              fe(" " + Q(u[e.optionText]), 1)
            ], 8, m2))), 128))
          ])
        ])
      ], 8, i2),
      J(b(en), {
        message: e.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
}, h2 = ["id"], y2 = {
  key: 0,
  class: "px-4 pt-4 text-sm text-gray-600"
}, g2 = { class: "flex flex-col" }, XO = /* @__PURE__ */ U({
  __name: "Table",
  props: {
    total: {},
    links: {},
    collapsable: { type: Boolean, default: !1 },
    collapse_id: {},
    sticky: { type: Boolean, default: !1 },
    overflow: { type: Boolean, default: !0 },
    seperate: { type: Boolean, default: !1 },
    showPerPage: { type: Boolean, default: !1 },
    defaultPerPage: { default: 25 },
    responsive: { type: Boolean, default: !0 }
  },
  setup(e) {
    wr();
    const t = e, n = L(null), r = L(null), o = L(null), a = L(null), s = () => {
      var f;
      if (!t.sticky) return;
      const l = n.value;
      if (!l) return;
      const u = l.getBoundingClientRect().top, d = document.querySelector("nav"), g = d ? d.offsetHeight : 0, y = u - g, m = o.value, p = l.getBoundingClientRect().height + u - g * 2;
      if (y <= 0 && p > 0) {
        if (m.dataset.sticky === "true") return;
        c(), m.style.display = "block", m.dataset.sticky = "true", m.style.top = `${g}px`, m.style.width = ((f = r.value) == null ? void 0 : f.offsetWidth) + "px";
        return;
      }
      m.dataset.sticky = "", m.style.display = "";
    }, i = () => {
      a.value && r.value && (a.value.style.marginLeft = -r.value.scrollLeft + "px");
    }, c = () => {
      if (!t.sticky || !n.value) return;
      const l = n.value.querySelector("thead tr");
      let u = a.value;
      if (!u) return;
      u.innerHTML = "";
      let d = l == null ? void 0 : l.querySelectorAll("th");
      d == null || d.forEach((y) => {
        const m = y.cloneNode(!0);
        m.style.width = y.offsetWidth + "px", u.appendChild(m), m.addEventListener("click", () => {
          y.click();
        });
      });
      const g = o.value;
      g && r.value && (g.style.width = r.value.offsetWidth + "px");
    };
    return t.sticky && (pe(() => {
      var l;
      c(), window.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", c, { passive: !0 }), (l = r.value) == null || l.addEventListener("scroll", i, { passive: !0 });
    }), Pt(() => {
      var l;
      window.removeEventListener("scroll", s), window.removeEventListener("resize", c), (l = r.value) == null || l.removeEventListener("scroll", i);
    })), (l, u) => (x(), P("div", {
      class: Z({
        "!visible hidden": t.collapsable,
        "overflow-hidden": !t.overflow
      }),
      id: t.collapse_id,
      "data-te-collapse-item": ""
    }, [
      t.total != null ? (x(), P("p", y2, "Found: " + Q(t.total), 1)) : G("", !0),
      D("div", g2, [
        D("div", {
          class: Z(["w-full", t.overflow ? "overflow-x-auto" : ""]),
          ref_key: "table_container",
          ref: r
        }, [
          D("table", {
            class: Z(["min-w-full overflow-hidden text-left text-sm font-light", {
              "[&>*>tr]:border-l-primary-500 mb-14 [&>*>tr]:border-l-4": t.collapsable,
              "border-separate border-spacing-y-5": t.seperate,
              "[&_thead]:max-sm:hidden": t.responsive,
              "[&_.td-label]:max-sm:!block [&_td]:max-sm:flex [&_td]:max-sm:justify-between [&_td]:max-sm:border-b [&_td]:max-sm:!px-2 [&_td:last-child]:max-sm:!border-b-0": t.responsive,
              "[&_tr]:max-sm:mb-2 [&_tr]:max-sm:flex [&_tr]:max-sm:flex-col [&_tr]:max-sm:rounded-md [&_tr]:max-sm:border [&_tr]:max-sm:border-gray-200 [&_tr]:max-sm:shadow-md": t.responsive
            }]),
            ref_key: "table",
            ref: n
          }, [
            t.sticky ? (x(), P("div", {
              key: 0,
              ref_key: "sticky_wrapper",
              ref: o,
              class: "fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow"
            }, [
              D("div", {
                ref_key: "sticky_header",
                ref: a,
                class: Z(["w-max [&>th]:align-middle", {
                  "max-sm:hidden": t.responsive
                }])
              }, null, 2)
            ], 512)) : G("", !0),
            j(l.$slots, "default")
          ], 2)
        ], 2)
      ]),
      l.$slots.pagination ? j(l.$slots, "pagination", { key: 1 }) : t.links ? (x(), H(b(_p), {
        key: 2,
        class: "mt-6",
        links: t.links,
        showPerPage: t.showPerPage,
        defaultPerPage: t.defaultPerPage
      }, null, 8, ["links", "showPerPage", "defaultPerPage"])) : G("", !0)
    ], 10, h2));
  }
}), v2 = { class: "border-b bg-neutral-100 font-medium dark:border-neutral-500" }, JO = /* @__PURE__ */ U({
  __name: "Thead",
  setup(e) {
    return (t, n) => (x(), P("thead", v2, [
      j(t.$slots, "default")
    ]));
  }
}), b2 = { key: 0 }, w2 = { key: 0 }, S2 = { key: 1 }, x2 = { key: 0 }, QO = /* @__PURE__ */ U({
  __name: "Tbody",
  props: {
    data: {},
    hidePlaceholder: { type: Boolean },
    hideNoRecordsMessage: { type: Boolean },
    recordsFromPagination: { type: Boolean },
    noRecordsMessage: {},
    ignoreDefer: { type: Boolean }
  },
  setup(e) {
    const t = e, n = V(() => {
      let r = jf(), o = t.data ? r.props[t.data] ?? null : null;
      return t.recordsFromPagination ? (o == null ? void 0 : o.data) ?? null : o;
    });
    return (r, o) => t.ignoreDefer ? (x(), P("tbody", b2, [
      !t.hideNoRecordsMessage && n.value ? (x(), P(re, { key: 0 }, [
        n.value.length ? G("", !0) : (x(), P("tr", w2, [
          J(b(Ms), {
            colspan: "999",
            class: "no-records-message !text-center text-gray-500"
          }, {
            default: B(() => [
              fe(Q(t.noRecordsMessage), 1)
            ]),
            _: 1
          })
        ]))
      ], 64)) : G("", !0),
      j(r.$slots, "default")
    ])) : (x(), P("tbody", S2, [
      J(b(ow), {
        data: t.data
      }, {
        fallback: B(() => [
          t.hidePlaceholder ? G("", !0) : (x(), H(b(hO), { key: 0 }))
        ]),
        default: B(() => [
          !t.hideNoRecordsMessage && n.value ? (x(), P(re, { key: 0 }, [
            n.value.length ? G("", !0) : (x(), P("tr", x2, [
              J(b(Ms), {
                colspan: "999",
                class: "no-records-message !text-center text-gray-500"
              }, {
                default: B(() => [
                  fe(Q(t.noRecordsMessage), 1)
                ]),
                _: 1
              })
            ]))
          ], 64)) : G("", !0),
          j(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ]));
  }
}), O2 = { class: "flex items-center justify-between" }, A2 = {
  key: 0,
  class: "order-arrows flex h-full w-4 items-center md:right-4"
}, ZO = /* @__PURE__ */ U({
  __name: "Th",
  props: {
    orderBy: {}
  },
  setup(e) {
    jn.add(pm, im);
    const t = e, n = L("asc"), r = L(!1);
    let o = null;
    const a = wr();
    function s() {
      return window.route;
    }
    const i = () => {
      const d = s()().params;
      if (d.order_by === t.orderBy) {
        n.value = d.order_dir, r.value = !0;
        return;
      }
      r.value = !1;
    }, c = () => {
      if (!t.orderBy) return;
      const u = s(), d = n.value === "asc" ? "desc" : "asc", g = u().params;
      g.order_by = t.orderBy, g.order_dir = d, a.get(u(u().current()), g, {
        preserveState: !0
      }), n.value = d, r.value = !0;
    }, l = (u) => n.value === u && r.value ? "active text-primary" : "text-gray-400";
    return pe(() => {
      t.orderBy && (o = a.on("navigate", i));
    }), Pt(() => {
      o == null || o();
    }), (u, d) => (x(), P("th", {
      scope: "col",
      class: Z(["relative py-4 text-center md:px-6 md:text-left", u.orderBy ? "cursor-pointer" : ""]),
      onClick: c
    }, [
      D("div", O2, [
        j(u.$slots, "default"),
        u.orderBy ? (x(), P("span", A2, [
          J(b(Se), {
            icon: "fa-sort-up",
            class: Z(["absolute", l("desc")])
          }, null, 8, ["class"]),
          J(b(Se), {
            icon: "fa-sort-down",
            class: Z(["absolute", l("asc")])
          }, null, 8, ["class"])
        ])) : G("", !0)
      ])
    ], 2));
  }
}), E2 = { class: "rounded-lg py-2 text-center whitespace-nowrap transition md:px-6 md:py-4 md:text-left" }, C2 = { class: "td-label hidden font-bold" }, Ms = /* @__PURE__ */ U({
  __name: "Td",
  props: {
    label: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), P("td", E2, [
      D("span", C2, Q(t.label), 1),
      j(n.$slots, "default")
    ]));
  }
}), P2 = ["data-te-target", "aria-controls"], eA = /* @__PURE__ */ U({
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
    ], 8, P2));
  }
}), k2 = { colspan: "999" }, $2 = ["id"], tA = /* @__PURE__ */ U({
  __name: "TrCollapse",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => (x(), P("tr", null, [
      D("td", k2, [
        D("div", {
          id: t.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          j(t.$slots, "default")
        ], 8, $2)
      ])
    ]));
  }
}), nA = /* @__PURE__ */ U({
  __name: "TrPlaceholder",
  props: {
    placeholders: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(!0), P(re, null, Ee(t.placeholders, (o) => (x(), P("tr", { key: o }, [
      J(b(Ms), { colspan: "999" }, {
        default: B(() => r[0] || (r[0] = [
          D("div", { class: "tr-placeholder bg-opacity-75 h-8 w-full animate-pulse rounded-md bg-gray-500" }, null, -1)
        ])),
        _: 1
      })
    ]))), 128));
  }
}), D2 = { class: "max-xxs:text-xxs mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600" }, T2 = {
  key: 0,
  class: "xs:w-fit mb-2 h-fit w-full"
}, F2 = { key: 0 }, R2 = {
  key: 1,
  class: "ml-1"
}, I2 = { class: "flex w-fit flex-wrap" }, _2 = {
  key: 0,
  class: "font-semibold"
}, L2 = { class: "mb-1" }, B2 = {
  key: 0,
  class: "text-primary w-full font-semibold whitespace-normal"
}, M2 = { class: "w-full break-words" }, N2 = { class: "mb-1 flex flex-col" }, j2 = { key: 1 }, rA = /* @__PURE__ */ U({
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
        D("div", D2, [
          t.itemId || t.timeStamp ? (x(), P("div", T2, [
            t.itemId ? (x(), P(re, { key: 0 }, [
              t.itemId.routeName ? (x(), H(b(ft), {
                key: 1,
                href: n.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: B(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (x(), P(re, { key: 0 }, [
                    fe("#")
                  ], 64)) : G("", !0),
                  fe(" " + Q(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (x(), P("span", F2, [
                t.itemId.prefix || t.itemId.prefix == null ? (x(), P(re, { key: 0 }, [
                  fe("#")
                ], 64)) : G("", !0),
                fe(" " + Q(t.itemId.id), 1)
              ]))
            ], 64)) : G("", !0),
            t.timeStamp ? (x(), P("span", R2, [
              t.itemId ? (x(), P(re, { key: 0 }, [
                fe("-")
              ], 64)) : G("", !0),
              fe(" " + Q(t.timeStamp), 1)
            ])) : G("", !0)
          ])) : G("", !0),
          D("div", I2, [
            (x(!0), P(re, null, Ee(n.pills, (a, s) => (x(), P(re, { key: s }, [
              a.text ? (x(), P("span", {
                key: 0,
                class: "bg-primary rounded-md border p-1 px-2 whitespace-nowrap text-white",
                style: dt({
                  backgroundColor: a.color ? a.color : null
                })
              }, Q(a.text), 5)) : G("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (x(), P(re, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (x(), P("p", _2, Q(t.title.text), 1)) : (x(), H(b(ft), {
            key: 1,
            href: t.title.href ? t.title.href : n.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: B(() => [
              fe(Q(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : G("", !0),
        D("div", L2, [
          t.extraText ? (x(), P("p", B2, [
            r[0] || (r[0] = fe(" Engineer Note: ")),
            D("span", M2, Q(t.extraText), 1)
          ])) : G("", !0)
        ]),
        D("div", N2, [
          (x(!0), P(re, null, Ee(n.options, (a, s) => (x(), P(re, { key: s }, [
            !a.routeName && !a.href ? (x(), P("span", {
              key: 0,
              style: dt({ color: a.color ? a.color : "#000" })
            }, Q(a.text), 5)) : (x(), H(b(ft), {
              href: a.href ? a.href : n.route(a.routeName, a.routeData),
              style: dt({ color: a.color ? a.color : "#000" }),
              key: "link-" + s
            }, {
              default: B(() => [
                fe(Q(a.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 128))
        ]),
        (o = t.amount) != null && o.amount ? (x(), P("div", j2, [
          D("span", null, Q(t.amount.text + b(aw)(t.amount.amount)), 1)
        ])) : G("", !0),
        D("div", null, [
          j(n.$slots, "default")
        ])
      ]);
    };
  }
}), q2 = { class: "flex" }, z2 = { class: "flex-shrink-0" }, V2 = { class: "ml-3 flex-1" }, U2 = {
  key: 0,
  class: "mb-1 text-sm font-medium"
}, H2 = { class: "text-sm" }, W2 = {
  key: 0,
  class: "ml-auto flex-shrink-0"
}, oA = /* @__PURE__ */ U({
  __name: "Alert",
  props: {
    type: { default: "info" },
    title: { default: void 0 },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismiss"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = L(n.modelValue), a = V({
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
          return fm;
        case "error":
          return Cm;
        case "warning":
          return Am;
        case "info":
        default:
          return ym;
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
    return (p, f) => (x(), H(un, {
      name: "alert",
      onBeforeEnter: l,
      onEnter: u,
      onAfterEnter: d,
      onBeforeLeave: g,
      onLeave: y,
      onAfterLeave: m,
      css: !1
    }, {
      default: B(() => [
        a.value ? (x(), P("div", {
          key: 0,
          class: Z(s.value),
          role: "alert",
          style: { overflow: "hidden" }
        }, [
          D("div", q2, [
            D("div", z2, [
              J(b(Se), {
                icon: i.value,
                class: Z(["h-5 w-5", {
                  "text-green-400": p.type === "success",
                  "text-red-400": p.type === "error",
                  "text-yellow-400": p.type === "warning",
                  "text-blue-400": p.type === "info"
                }])
              }, null, 8, ["icon", "class"])
            ]),
            D("div", V2, [
              p.title ? (x(), P("h3", U2, Q(p.title), 1)) : G("", !0),
              D("div", H2, [
                j(p.$slots, "default")
              ])
            ]),
            p.dismissible ? (x(), P("div", W2, [
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
                J(b(Se), {
                  icon: b(Qr),
                  class: "h-5 w-5"
                }, null, 8, ["icon"])
              ], 2)
            ])) : G("", !0)
          ])
        ], 2)) : G("", !0)
      ]),
      _: 3
    }));
  }
}), K2 = ["top", "right", "bottom", "left"], Qt = Math.min, Ze = Math.max, co = Math.round, Br = Math.floor, Et = (e) => ({
  x: e,
  y: e
}), G2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Y2 = {
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
function X2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Hn(e), o = Ai(e), a = Oi(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = fo(s)), [s, fo(s)];
}
function J2(e) {
  const t = fo(e);
  return [js(e), t, js(t)];
}
function js(e) {
  return e.replace(/start|end/g, (t) => Y2[t]);
}
function Q2(e, t, n) {
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
function Z2(e, t, n, r) {
  const o = Hn(e);
  let a = Q2(Mt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(js)))), a;
}
function fo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => G2[t]);
}
function eS(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Gf(e) {
  return typeof e != "number" ? eS(e) : {
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
const tS = async (e, t, n) => {
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
      data: C,
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
        ...C
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
  } : s.reference, O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), C = await (a.isElement == null ? void 0 : a.isElement(O)) ? await (a.getScale == null ? void 0 : a.getScale(O)) || {
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
    top: (h.top - $.top + m.top) / C.y,
    bottom: ($.bottom - h.bottom + m.bottom) / C.y,
    left: (h.left - $.left + m.left) / C.x,
    right: ($.right - h.right + m.right) / C.x
  };
}
const nS = (e) => ({
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
    }, y = Ai(o), m = Oi(y), p = await s.getDimensions(l), f = y === "y", h = f ? "top" : "left", w = f ? "bottom" : "right", O = f ? "clientHeight" : "clientWidth", C = a.reference[m] + a.reference[y] - g[y] - a.floating[m], $ = g[y] - a.reference[y], z = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let q = z ? z[O] : 0;
    (!q || !await (s.isElement == null ? void 0 : s.isElement(z))) && (q = i.floating[O] || a.floating[m]);
    const Y = C / 2 - $ / 2, R = q / 2 - p[m] / 2 - 1, k = Qt(d[h], R), N = Qt(d[w], R), v = k, A = q - p[m] - N, E = q / 2 - p[m] / 2 + Y, S = Ns(v, E, A), W = !c.arrow && Hn(o) != null && E !== S && a.reference[m] / 2 - (E < v ? k : N) - p[m] / 2 < 0, I = W ? E < v ? E - v : E - A : 0;
    return {
      [y]: g[y] + I,
      data: {
        [y]: S,
        centerOffset: E - S - I,
        ...W && {
          alignmentOffset: I
        }
      },
      reset: W
    };
  }
}), rS = function(e) {
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
      const h = Mt(o), w = It(i), O = Mt(i) === i, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), $ = g || (O || !p ? [fo(i)] : J2(i)), z = m !== "none";
      !g && z && $.push(...Z2(i, p, m, C));
      const q = [i, ...$], Y = await fr(t, f), R = [];
      let k = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && R.push(Y[h]), d) {
        const S = X2(o, s, C);
        R.push(Y[S[0]], Y[S[1]]);
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
              var E;
              const T = (E = k.filter((X) => {
                if (z) {
                  const ae = It(X.placement);
                  return ae === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ae === "y";
                }
                return !0;
              }).map((X) => [X.placement, X.overflows.filter((ae) => ae > 0).reduce((ae, Te) => ae + Te, 0)]).sort((X, ae) => X[1] - ae[1])[0]) == null ? void 0 : E[0];
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
  return K2.some((t) => e[t] >= 0);
}
const oS = function(e) {
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
async function aS(e, t) {
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
const sS = function(e) {
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
      } = t, c = await aS(t, e);
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
}, iS = function(e) {
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
}, lS = function(e) {
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
        const O = g === "y" ? "height" : "width", C = a.reference[g] - a.floating[O] + f.mainAxis, $ = a.reference[g] + a.reference[O] - f.mainAxis;
        y < C ? y = C : y > $ && (y = $);
      }
      if (l) {
        var h, w;
        const O = g === "y" ? "width" : "height", C = ["top", "left"].includes(Mt(o)), $ = a.reference[d] - a.floating[O] + (C && ((h = s.offset) == null ? void 0 : h[d]) || 0) + (C ? 0 : f.crossAxis), z = a.reference[d] + a.reference[O] + (C ? 0 : ((w = s.offset) == null ? void 0 : w[d]) || 0) - (C ? f.crossAxis : 0);
        m < $ ? m = $ : m > z && (m = z);
      }
      return {
        [g]: y,
        [d]: m
      };
    }
  };
}, uS = function(e) {
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
      const w = p - u.top - u.bottom, O = m - u.left - u.right, C = Qt(p - u[f], w), $ = Qt(m - u[h], O), z = !t.middlewareData.shift;
      let q = C, Y = $;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (Y = O), (r = t.middlewareData.shift) != null && r.enabled.y && (q = w), z && !g) {
        const k = Ze(u.left, 0), N = Ze(u.right, 0), v = Ze(u.top, 0), A = Ze(u.bottom, 0);
        y ? Y = m - 2 * (k !== 0 || N !== 0 ? k + N : Ze(u.left, u.right)) : q = p - 2 * (v !== 0 || A !== 0 ? v + A : Ze(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: Y,
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
function Do() {
  return typeof window < "u";
}
function vn(e) {
  return Ei(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function kt(e) {
  var t;
  return (t = (Ei(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ei(e) {
  return Do() ? e instanceof Node || e instanceof et(e).Node : !1;
}
function mt(e) {
  return Do() ? e instanceof Element || e instanceof et(e).Element : !1;
}
function Ct(e) {
  return Do() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1;
}
function uc(e) {
  return !Do() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof et(e).ShadowRoot;
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
function cS(e) {
  return ["table", "td", "th"].includes(vn(e));
}
function To(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ci(e) {
  const t = Pi(), n = mt(e) ? ht(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function dS(e) {
  let t = Zt(e);
  for (; Ct(t) && !Bn(t); ) {
    if (Ci(t))
      return t;
    if (To(t))
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
function Fo(e) {
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
  return Bn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ct(t) && Or(t) ? t : Yf(t);
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
  const o = Ct(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = co(n) !== a || co(r) !== s;
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
  if (!Ct(t))
    return Et(1);
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
const fS = /* @__PURE__ */ Et(0);
function Jf(e) {
  const t = et(e);
  return !Pi() || !t.visualViewport ? fS : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pS(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== et(e) ? !1 : t;
}
function mn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ki(e);
  let s = Et(1);
  t && (r ? mt(r) && (s = In(r)) : s = In(e));
  const i = pS(a, n, r) ? Jf(a) : Et(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const g = et(a), y = r && mt(r) ? et(r) : r;
    let m = g, p = qs(m);
    for (; p && r && y !== m; ) {
      const f = In(p), h = p.getBoundingClientRect(), w = ht(p), O = h.left + (p.clientLeft + parseFloat(w.paddingLeft)) * f.x, C = h.top + (p.clientTop + parseFloat(w.paddingTop)) * f.y;
      c *= f.x, l *= f.y, u *= f.x, d *= f.y, c += O, l += C, m = et(p), p = qs(m);
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
  const n = Fo(e).scrollLeft;
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
function mS(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = kt(r), i = t ? To(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Et(1);
  const u = Et(0), d = Ct(r);
  if ((d || !d && !a) && ((vn(r) !== "body" || Or(s)) && (c = Fo(r)), Ct(r))) {
    const y = mn(r);
    l = In(r), u.x = y.x + r.clientLeft, u.y = y.y + r.clientTop;
  }
  const g = s && !d && !a ? Qf(s, c, !0) : Et(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + g.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + g.y
  };
}
function hS(e) {
  return Array.from(e.getClientRects());
}
function yS(e) {
  const t = kt(e), n = Fo(e), r = e.ownerDocument.body, o = Ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + $i(e);
  const i = -n.scrollTop;
  return ht(r).direction === "rtl" && (s += Ze(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function gS(e, t) {
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
function vS(e, t) {
  const n = mn(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Ct(e) ? In(e) : Et(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
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
    r = gS(e, n);
  else if (t === "document")
    r = yS(kt(e));
  else if (mt(t))
    r = vS(t, n);
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
function bS(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = pr(e, [], !1).filter((i) => mt(i) && vn(i) !== "body"), o = null;
  const a = ht(e).position === "fixed";
  let s = a ? Zt(e) : e;
  for (; mt(s) && !Bn(s); ) {
    const i = ht(s), c = Ci(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Or(s) && !c && Zf(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = Zt(s);
  }
  return t.set(e, r), r;
}
function wS(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? To(t) ? [] : bS(t, this._c) : [].concat(n), r], i = s[0], c = s.reduce((l, u) => {
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
function SS(e) {
  const {
    width: t,
    height: n
  } = Xf(e);
  return {
    width: t,
    height: n
  };
}
function xS(e, t, n) {
  const r = Ct(t), o = kt(t), a = n === "fixed", s = mn(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Et(0);
  function l() {
    c.x = $i(o);
  }
  if (r || !r && !a)
    if ((vn(t) !== "body" || Or(o)) && (i = Fo(t)), r) {
      const y = mn(t, !0, a, t);
      c.x = y.x + t.clientLeft, c.y = y.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? Qf(o, i) : Et(0), d = s.left + i.scrollLeft - c.x - u.x, g = s.top + i.scrollTop - c.y - u.y;
  return {
    x: d,
    y: g,
    width: s.width,
    height: s.height
  };
}
function Wa(e) {
  return ht(e).position === "static";
}
function dc(e, t) {
  if (!Ct(e) || ht(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return kt(e) === n && (n = n.ownerDocument.body), n;
}
function ep(e, t) {
  const n = et(e);
  if (To(e))
    return n;
  if (!Ct(e)) {
    let o = Zt(e);
    for (; o && !Bn(o); ) {
      if (mt(o) && !Wa(o))
        return o;
      o = Zt(o);
    }
    return n;
  }
  let r = dc(e, t);
  for (; r && cS(r) && Wa(r); )
    r = dc(r, t);
  return r && Bn(r) && Wa(r) && !Ci(r) ? n : r || dS(e) || n;
}
const OS = async function(e) {
  const t = this.getOffsetParent || ep, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xS(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function AS(e) {
  return ht(e).direction === "rtl";
}
const ES = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mS,
  getDocumentElement: kt,
  getClippingRect: wS,
  getOffsetParent: ep,
  getElementRects: OS,
  getClientRects: hS,
  getDimensions: SS,
  getScale: In,
  isElement: mt,
  isRTL: AS
};
function tp(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function CS(e, t) {
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
    let C = !0;
    function $(z) {
      const q = z[0].intersectionRatio;
      if (q !== c) {
        if (!C)
          return s();
        q ? s(!1, q) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      q === 1 && !tp(l, e.getBoundingClientRect()) && s(), C = !1;
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
function PS(e, t, n, r) {
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
  const d = l && i ? CS(l, n) : null;
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
const kS = sS, $S = iS, fc = rS, DS = uS, TS = oS, FS = nS, RS = lS, IS = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: ES,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return tS(e, t, {
    ...o,
    platform: a
  });
};
function _S(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function zs(e) {
  if (_S(e)) {
    const t = e.$el;
    return Ei(t) && vn(t) === "#comment" ? null : t;
  }
  return e;
}
function $n(e) {
  return typeof e == "function" ? e() : b(e);
}
function LS(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = zs($n(e.element));
      return n == null ? {} : FS({
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
function BS(e, t, n) {
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
  }), l = V(() => zs(e.value)), u = V(() => zs(t.value)), d = L(0), g = L(0), y = L(i.value), m = L(s.value), p = mr({}), f = L(!1), h = V(() => {
    const q = {
      position: y.value,
      left: "0",
      top: "0"
    };
    if (!u.value)
      return q;
    const Y = pc(u.value, d.value), R = pc(u.value, g.value);
    return c.value ? {
      ...q,
      transform: "translate(" + Y + "px, " + R + "px)",
      ...np(u.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: y.value,
      left: Y + "px",
      top: R + "px"
    };
  });
  let w;
  function O() {
    if (l.value == null || u.value == null)
      return;
    const q = o.value;
    IS(l.value, u.value, {
      middleware: a.value,
      placement: s.value,
      strategy: i.value
    }).then((Y) => {
      d.value = Y.x, g.value = Y.y, y.value = Y.strategy, m.value = Y.placement, p.value = Y.middlewareData, f.value = q !== !1;
    });
  }
  function C() {
    typeof w == "function" && (w(), w = void 0);
  }
  function $() {
    if (C(), r === void 0) {
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
  }), Cc() && Pc(C), {
    x: Cn(d),
    y: Cn(g),
    strategy: Cn(y),
    placement: Cn(m),
    middlewareData: Cn(p),
    isPositioned: Cn(f),
    floatingStyles: h,
    update: O
  };
}
function Di(e) {
  return e ? e.flatMap((t) => t.type === re ? Di(t.children) : [t]) : [];
}
const Vs = U({
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
}), MS = ["area", "img", "input"], ke = U({
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
    return typeof r == "string" && MS.includes(r) ? () => qe(r, t) : r !== "template" ? () => qe(e.as, t, { default: n.default }) : () => qe(Vs, t, { default: n.default });
  }
}), NS = /* @__PURE__ */ U({
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
function jS(e, t) {
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
  return Cc() ? (Pc(e), !0) : !1;
}
function qS() {
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
function zS(e) {
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
const VS = (e) => typeof e < "u", US = Object.prototype.toString, HS = (e) => US.call(e) === "[object Object]", mc = /* @__PURE__ */ WS();
function WS() {
  var e, t;
  return qt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function KS(e) {
  return gn();
}
function Ka(e) {
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
function GS(e, t) {
  KS() && Hp(e, t);
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
function YS(e, t, n) {
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
    const i = Ka(Rt(e[0])).filter((c) => c != null);
    return i.every((c) => typeof c != "string") ? i : void 0;
  }), a = YS(
    () => {
      var i, c;
      return [
        (c = (i = o.value) == null ? void 0 : i.map((l) => Wn(l))) != null ? c : [Ti].filter((l) => l != null),
        Ka(Rt(o.value ? e[1] : e[0])),
        Ka(b(o.value ? e[2] : e[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        Rt(o.value ? e[3] : e[2])
      ];
    },
    ([i, c, l, u]) => {
      if (n(), !(i != null && i.length) || !(c != null && c.length) || !(l != null && l.length))
        return;
      const d = HS(u) ? { ...u } : u;
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
function XS() {
  const e = mr(!1), t = gn();
  return t && pe(() => {
    e.value = !0;
  }, t), e;
}
function JS(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function QS(...e) {
  let t, n, r = {};
  e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ti,
    eventName: a = "keydown",
    passive: s = !1,
    dedupe: i = !1
  } = r, c = JS(t);
  return hn(o, a, (u) => {
    u.repeat && Rt(i) || c(u) && n(u);
  }, s);
}
function ZS(e) {
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
  const f = (O) => i ? typeof i == "function" ? i(O) : ZS(O) : O, h = () => VS(e[t]) ? f(e[t]) : d, w = (O) => {
    g ? g(O) && m(p, O) : m(p, O);
  };
  if (c) {
    const O = h(), C = L(O);
    let $ = !1;
    return ne(
      () => e[t],
      (z) => {
        $ || ($ = !0, C.value = f(z), Fe(() => $ = !1));
      }
    ), ne(
      C,
      (z) => {
        !$ && (z !== e[t] || u) && w(z);
      },
      { deep: u }
    ), C;
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
const [Fi, aA] = at("ConfigProvider");
function Ri(e) {
  const t = Fi({
    dir: L("ltr")
  });
  return V(() => {
    var n;
    return (e == null ? void 0 : e.value) || ((n = t.dir) == null ? void 0 : n.value) || "ltr";
  });
}
function le() {
  const e = gn(), t = L(), n = V(() => {
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
const [sp, ex] = at("CollapsibleRoot"), Ii = /* @__PURE__ */ U({
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
    return ex({
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
}), tx = ["INPUT", "TEXTAREA"];
function nx(e, t, n, r = {}) {
  if (!t || r.enableIgnoredElement && tx.includes(t.nodeName))
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
  let C = null;
  return w || h ? C = ip(O, t, {
    goForward: h ? m : c === "ltr" ? d : g,
    loop: i
  }) : p ? C = O.at(0) || null : f && (C = O.at(-1) || null), u && (C == null || C.focus()), C;
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
let rx = 0;
function yn(e, t = "reka") {
  const n = Fi({ useId: void 0 });
  return Qi.useId ? `${t}-${Qi.useId()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++rx}`;
}
function ox(e, t) {
  const n = L(e);
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
function ax(e, t) {
  var f;
  const n = L({}), r = L("none"), o = L(e), a = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((f = t.value) == null ? void 0 : f.ownerDocument.defaultView) ?? Ti, { state: c, dispatch: l } = ox(a, {
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
      var C;
      const O = w !== h;
      if (await Fe(), O) {
        const $ = r.value, z = Mr(t.value);
        h ? (l("MOUNT"), u("enter"), z === "none" && u("after-enter")) : z === "none" || z === "undefined" || ((C = n.value) == null ? void 0 : C.display) === "none" ? (l("UNMOUNT"), u("leave"), u("after-leave")) : w && $ !== z ? (l("ANIMATION_OUT"), u("leave")) : (l("UNMOUNT"), u("after-leave"));
      }
    },
    { immediate: !0 }
  );
  const d = (h) => {
    const w = Mr(t.value), O = w.includes(
      h.animationName
    ), C = c.value === "mounted" ? "enter" : "leave";
    if (h.target === t.value && O && (u(`after-${C}`), l("ANIMATION_END"), !o.value)) {
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
const Er = U({
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
    const { present: r, forceMount: o } = Nt(e), a = L(), { isPresent: s } = ax(r, a);
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
    const n = e, r = t, o = sp();
    o.contentId || (o.contentId = yn(void 0, "reka-collapsible-content"));
    const a = L(), { forwardRef: s, currentElement: i } = le(), c = L(0), l = L(0), u = V(() => o.open.value), d = L(u.value), g = L();
    ne(
      () => {
        var m;
        return [u.value, (m = a.value) == null ? void 0 : m.present];
      },
      async () => {
        await Fe();
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
    }), (m, p) => (x(), H(b(Er), {
      ref_key: "presentRef",
      ref: a,
      present: m.forceMount || b(o).open.value,
      "force-mount": !0
    }, {
      default: B(({ present: f }) => {
        var h;
        return [
          J(b(ke), ie(m.$attrs, {
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
            default: B(() => [
              !b(o).unmountOnHide.value || f ? j(m.$slots, "default", { key: 0 }) : G("", !0)
            ]),
            _: 2
          }, 1040, ["id", "as-child", "as", "hidden", "data-state", "data-disabled", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), Li = /* @__PURE__ */ U({
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
}), [$t, sx] = at("DialogRoot"), ix = /* @__PURE__ */ U({
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
    }), a = L(), s = L(), { modal: i } = Nt(n);
    return sx({
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
}), lx = /* @__PURE__ */ U({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    le();
    const n = $t();
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
function Cr(e) {
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
const ux = "dismissableLayer.pointerDownOutside", cx = "dismissableLayer.focusOutside";
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
function dx(e, t) {
  var a;
  const n = ((a = t == null ? void 0 : t.value) == null ? void 0 : a.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = L(!1), o = L(() => {
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
              ux,
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
function fx(e, t) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = L(!1);
  return ot((a) => {
    if (!qt)
      return;
    const s = async (i) => {
      if (!(t != null && t.value))
        return;
      await Fe(), await Fe();
      const c = i.target;
      !t.value || !c || up(t.value, c) || i.target && !r.value && lp(
        cx,
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
}), Bi = /* @__PURE__ */ U({
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
    }), d = dx(async (m) => {
      const p = [...Ft.branches].some(
        (f) => f == null ? void 0 : f.contains(m.target)
      );
      !u.value || p || (r("pointerDownOutside", m), r("interactOutside", m), await Fe(), m.defaultPrevented || r("dismiss"));
    }, a), g = fx((m) => {
      [...Ft.branches].some(
        (f) => f == null ? void 0 : f.contains(m.target)
      ) || (r("focusOutside", m), r("interactOutside", m), m.defaultPrevented || r("dismiss"));
    }, a);
    QS("Escape", (m) => {
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
    }), (m, p) => (x(), H(b(ke), {
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
const px = "menu.itemSelect", Us = ["Enter", " "], mx = ["ArrowDown", "PageUp", "Home"], cp = ["ArrowUp", "PageDown", "End"], hx = [...mx, ...cp];
[...Us], [...Us];
function dp(e) {
  return e ? "open" : "closed";
}
function yx(e) {
  const t = Ge();
  for (const n of e)
    if (n === t || (n.focus(), Ge() !== t))
      return;
}
function gx(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function vx(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return gx(n, t);
}
function Hs(e) {
  return e.pointerType === "mouse";
}
const bx = "DialogTitle", wx = "DialogContent";
function Sx({
  titleName: e = bx,
  contentName: t = wx,
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
const xx = zS(() => L([]));
function Ox() {
  const e = xx();
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
function Ax(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ga = "focusScope.autoFocusOnMount", Ya = "focusScope.autoFocusOnUnmount", yc = { bubbles: !1, cancelable: !0 };
function Ex(e, { select: t = !1 } = {}) {
  const n = Ge();
  for (const r of e)
    if (Wt(r, { select: t }), Ge() !== n)
      return !0;
}
function Cx(e) {
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
    if (!Px(n, { upTo: t }))
      return n;
}
function Px(e, { upTo: t }) {
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
function kx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Wt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = Ge();
    e.focus({ preventScroll: !0 }), e !== n && kx(e) && t && e.select();
  }
}
const pp = /* @__PURE__ */ U({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: !1 },
    trapped: { type: Boolean, default: !1 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const n = e, r = t, { currentRef: o, currentElement: a } = le(), s = L(null), i = Ox(), c = hr({
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
      if (await Fe(), !d)
        return;
      i.add(c);
      const g = Ge();
      if (!d.contains(g)) {
        const m = new CustomEvent(Ga, yc);
        d.addEventListener(Ga, (p) => r("mountAutoFocus", p)), d.dispatchEvent(m), m.defaultPrevented || (Ex(Ax(fp(d)), {
          select: !0
        }), Ge() === g && Wt(d));
      }
      u(() => {
        d.removeEventListener(Ga, (f) => r("mountAutoFocus", f));
        const m = new CustomEvent(Ya, yc), p = (f) => {
          r("unmountAutoFocus", f);
        };
        d.addEventListener(Ya, p), d.dispatchEvent(m), setTimeout(() => {
          m.defaultPrevented || Wt(g ?? document.body, { select: !0 }), d.removeEventListener(Ya, p), i.remove(c);
        }, 0);
      });
    });
    function l(u) {
      if (!n.loop && !n.trapped || c.paused)
        return;
      const d = u.key === "Tab" && !u.altKey && !u.ctrlKey && !u.metaKey, g = Ge();
      if (d && g) {
        const y = u.currentTarget, [m, p] = Cx(y);
        m && p ? !u.shiftKey && g === p ? (u.preventDefault(), n.loop && Wt(m, { select: !0 })) : u.shiftKey && g === m && (u.preventDefault(), n.loop && Wt(p, { select: !0 })) : g === y && u.preventDefault();
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
}), mp = /* @__PURE__ */ U({
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
    }), process.env.NODE_ENV !== "production" && Sx({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: o.titleId,
      descriptionId: o.descriptionId,
      contentElement: s
    }), (i, c) => (x(), H(b(pp), {
      "as-child": "",
      loop: "",
      trapped: n.trapFocus,
      onMountAutoFocus: c[5] || (c[5] = (l) => r("openAutoFocus", l)),
      onUnmountAutoFocus: c[6] || (c[6] = (l) => r("closeAutoFocus", l))
    }, {
      default: B(() => [
        J(b(Bi), ie({
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
var $x = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, kn = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), jr = {}, Xa = 0, hp = function(e) {
  return e && (e.host || hp(e.parentNode));
}, Dx = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = hp(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Tx = function(e, t, n, r) {
  var o = Dx(t, Array.isArray(e) ? e : [e]);
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
  return u(t), i.clear(), Xa++, function() {
    s.forEach(function(d) {
      var g = kn.get(d) - 1, y = a.get(d) - 1;
      kn.set(d, g), a.set(d, y), g || (Nr.has(d) || d.removeAttribute(r), Nr.delete(d)), y || d.removeAttribute(n);
    }), Xa--, Xa || (kn = /* @__PURE__ */ new WeakMap(), kn = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), jr = {});
  };
}, Fx = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = $x(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Tx(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function yp(e) {
  let t;
  ne(() => Wn(e), (n) => {
    n ? t = Fx(n) : t && t();
  }), Pt(() => {
    t && t();
  });
}
const Rx = /* @__PURE__ */ U({
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
    const n = e, r = t, o = $t(), a = Cr(r), { forwardRef: s, currentElement: i } = le();
    return yp(i), (c, l) => (x(), H(mp, ie({ ...n, ...b(a) }, {
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
      default: B(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Ix = /* @__PURE__ */ U({
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
    const n = e, o = Cr(t);
    le();
    const a = $t(), s = L(!1), i = L(!1);
    return (c, l) => (x(), H(mp, ie({ ...n, ...b(o) }, {
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
      default: B(() => [
        j(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _x = /* @__PURE__ */ U({
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
    const n = e, r = t, o = $t(), a = Cr(r), { forwardRef: s } = le();
    return (i, c) => (x(), H(b(Er), {
      present: i.forceMount || b(o).open.value
    }, {
      default: B(() => [
        b(o).modal.value ? (x(), H(Rx, ie({
          key: 0,
          ref: b(s)
        }, { ...n, ...b(a), ...i.$attrs }), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), H(Ix, ie({
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
}), Lx = /* @__PURE__ */ U({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(e) {
    const t = e;
    le();
    const n = $t();
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
function Ja(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ws(e, t, n = ".", r) {
  if (!Ja(t))
    return Ws(e, {}, n, r);
  const o = Object.assign({}, t);
  for (const a in e) {
    if (a === "__proto__" || a === "constructor")
      continue;
    const s = e[a];
    s != null && (r && r(o, a, s, n) || (Array.isArray(s) && Array.isArray(o[a]) ? o[a] = [...s, ...o[a]] : Ja(s) && Ja(o[a]) ? o[a] = Ws(
      s,
      o[a],
      (n ? `${n}.` : "") + a.toString(),
      r
    ) : o[a] = s));
  }
  return o;
}
function Bx(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((n, r) => Ws(n, r, "", e), {})
  );
}
const Mx = Bx(), Nx = rp(() => {
  const e = L(/* @__PURE__ */ new Map()), t = L(), n = V(() => {
    for (const s of e.value.values())
      if (s)
        return !0;
    return !1;
  }), r = Fi({
    scrollBody: L(!0)
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
    const c = window.innerWidth - document.documentElement.clientWidth, l = { padding: c, margin: 0 }, u = (d = r.scrollBody) != null && d.value ? typeof r.scrollBody.value == "object" ? Mx({
      padding: r.scrollBody.value.padding === !0 ? c : r.scrollBody.value.padding,
      margin: r.scrollBody.value.margin === !0 ? c : r.scrollBody.value.margin
    }, l) : l : { padding: 0, margin: 0 };
    c > 0 && (document.body.style.paddingRight = typeof u.padding == "number" ? `${u.padding}px` : String(u.padding), document.body.style.marginRight = typeof u.margin == "number" ? `${u.margin}px` : String(u.margin), document.body.style.setProperty("--scrollbar-width", `${c}px`), document.body.style.overflow = "hidden"), mc && (o = hn(
      document,
      "touchmove",
      (g) => jx(g),
      { passive: !1 }
    )), Fe(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: !0, flush: "sync" }), e;
});
function gp(e) {
  const t = Math.random().toString(36).substring(2, 7), n = Nx();
  n.value.set(t, e ?? !1);
  const r = V({
    get: () => n.value.get(t) ?? !1,
    set: (o) => n.value.set(t, o)
  });
  return GS(() => {
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
function jx(e) {
  const t = e || window.event, n = t.target;
  return n instanceof Element && vp(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
const qx = /* @__PURE__ */ U({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = $t();
    return gp(!0), le(), (n, r) => (x(), H(b(ke), {
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
}), zx = /* @__PURE__ */ U({
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
      return (a = b(t)) != null && a.modal.value ? (x(), H(b(Er), {
        key: 0,
        present: r.forceMount || b(t).open.value
      }, {
        default: B(() => [
          J(qx, ie(r.$attrs, {
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
      }, 8, ["present"])) : G("", !0);
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
    const t = XS();
    return (n, r) => b(t) || n.forceMount ? (x(), H(Fc, {
      key: 0,
      to: n.to,
      disabled: n.disabled,
      defer: n.defer
    }, [
      j(n.$slots, "default")
    ], 8, ["to", "disabled", "defer"])) : G("", !0);
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
  const n = bp(e), r = t ? Cr(t) : {};
  return V(() => ({
    ...n.value,
    ...r
  }));
}
const Vx = /* @__PURE__ */ U({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(e) {
    const t = e, n = $t();
    return le(), (r, o) => (x(), H(b(ke), ie(t, {
      id: b(n).titleId
    }), {
      default: B(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Ux = /* @__PURE__ */ U({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = $t(), { forwardRef: r, currentElement: o } = le();
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
function vc() {
  const e = L(), t = V(() => {
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
    const u = L(/* @__PURE__ */ new Map());
    o = {
      collectionRef: L(),
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
  }, s = U({
    name: "CollectionSlot",
    setup(u, { slots: d }) {
      const { primitiveElement: g, currentElement: y } = vc();
      return ne(y, () => {
        o.collectionRef.value = y.value;
      }), () => qe(Vs, { ref: g }, d);
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
    setup(u, { slots: d, attrs: g }) {
      const { primitiveElement: y, currentElement: m } = vc();
      return ot((p) => {
        if (m.value) {
          const f = es(m.value);
          o.itemMap.value.set(f, { ref: m.value, value: u.value }), p(() => o.itemMap.value.delete(f));
        }
      }), () => qe(Vs, { ...g, [bc]: "", ref: y }, d);
    }
  }), c = V(() => Array.from(o.itemMap.value.values())), l = V(() => o.itemMap.value.size);
  return { getItems: a, reactiveItems: c, itemMapSize: l, CollectionSlot: s, CollectionItem: i };
}
const Hx = "rovingFocusGroup.onEntryFocus", Wx = { bubbles: !1, cancelable: !0 };
function Kx(e, t = !1) {
  const n = Ge();
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), Ge() !== n))
      return;
}
const [sA, Gx] = at("RovingFocusGroup"), Yx = /* @__PURE__ */ U({
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
    }), u = L(!1), d = L(!1), g = L(0), { getItems: y, CollectionSlot: m } = wp({ isProvider: !0 });
    function p(h) {
      const w = !d.value;
      if (h.currentTarget && h.target === h.currentTarget && w && !u.value) {
        const O = new CustomEvent(Hx, Wx);
        if (h.currentTarget.dispatchEvent(O), o("entryFocus", O), !O.defaultPrevented) {
          const C = y().map((Y) => Y.ref).filter((Y) => Y.dataset.disabled !== ""), $ = C.find((Y) => Y.getAttribute("data-active") === ""), z = C.find(
            (Y) => Y.id === l.value
          ), q = [$, z, ...C].filter(
            Boolean
          );
          Kx(q, r.preventScrollOnEntryFocus);
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
    }), Gx({
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
    }), (h, w) => (x(), H(b(m), null, {
      default: B(() => [
        J(b(ke), {
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
          default: B(() => [
            j(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), [Sp, Xx] = at("PopperRoot"), xp = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = L();
    return Xx({
      anchor: t,
      onAnchorChange: (n) => t.value = n
    }), (n, r) => j(n.$slots, "default");
  }
}), Op = /* @__PURE__ */ U({
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
}), Jx = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, Qx = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
}, Zx = /* @__PURE__ */ U({
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
          n.rounded ? (x(), P("path", Qx)) : (x(), P("path", Jx))
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
});
function e3(e) {
  return e !== null;
}
function t3(e) {
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
function n3(e) {
  const t = L(), n = V(() => {
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
}, [r3, o3] = at("PopperContent"), Ep = /* @__PURE__ */ U({
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
    const n = e, r = t, o = Sp(), { forwardRef: a, currentElement: s } = le(), i = L(), c = L(), { width: l, height: u } = n3(c), d = V(
      () => n.side + (n.align !== "center" ? `-${n.align}` : "")
    ), g = V(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), y = V(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = V(() => ({
      padding: g.value,
      boundary: y.value.filter(e3),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: y.value.length > 0
    })), p = jS(() => [
      kS({
        mainAxis: n.sideOffset + u.value,
        alignmentAxis: n.alignOffset
      }),
      n.prioritizePosition && n.avoidCollisions && fc({
        ...m.value
      }),
      n.avoidCollisions && $S({
        mainAxis: !0,
        crossAxis: !!n.prioritizePosition,
        limiter: n.sticky === "partial" ? RS() : void 0,
        ...m.value
      }),
      !n.prioritizePosition && n.avoidCollisions && fc({
        ...m.value
      }),
      DS({
        ...m.value,
        apply: ({ elements: N, rects: v, availableWidth: A, availableHeight: E }) => {
          const { width: S, height: W } = v.reference, I = N.floating.style;
          I.setProperty(
            "--reka-popper-available-width",
            `${A}px`
          ), I.setProperty(
            "--reka-popper-available-height",
            `${E}px`
          ), I.setProperty(
            "--reka-popper-anchor-width",
            `${S}px`
          ), I.setProperty(
            "--reka-popper-anchor-height",
            `${W}px`
          );
        }
      }),
      c.value && LS({ element: c.value, padding: n.arrowPadding }),
      t3({
        arrowWidth: l.value,
        arrowHeight: u.value
      }),
      n.hideWhenDetached && TS({ strategy: "referenceHidden", ...m.value })
    ]), f = V(() => n.reference ?? o.anchor.value), { floatingStyles: h, placement: w, isPositioned: O, middlewareData: C } = BS(
      f,
      i,
      {
        strategy: n.positionStrategy,
        placement: d,
        whileElementsMounted: (...N) => PS(...N, {
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
        return ((N = C.value.arrow) == null ? void 0 : N.centerOffset) !== 0;
      }
    ), Y = L("");
    ot(() => {
      s.value && (Y.value = window.getComputedStyle(s.value).zIndex);
    });
    const R = V(() => {
      var N;
      return ((N = C.value.arrow) == null ? void 0 : N.x) ?? 0;
    }), k = V(() => {
      var N;
      return ((N = C.value.arrow) == null ? void 0 : N.y) ?? 0;
    });
    return o3({
      placedSide: $,
      onArrowChange: (N) => c.value = N,
      arrowX: R,
      arrowY: k,
      shouldHideArrow: q
    }), (N, v) => {
      var A, E, S;
      return x(), P("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: dt({
          ...b(h),
          transform: b(O) ? b(h).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Y.value,
          "--reka-popper-transform-origin": [
            (A = b(C).transformOrigin) == null ? void 0 : A.x,
            (E = b(C).transformOrigin) == null ? void 0 : E.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((S = b(C).hide) == null ? void 0 : S.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [
        J(b(ke), ie({ ref: b(a) }, N.$attrs, {
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
          default: B(() => [
            j(N.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), a3 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, s3 = /* @__PURE__ */ U({
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
    const { forwardRef: t } = le(), n = r3(), r = V(() => a3[n.placedSide.value]);
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
        J(Zx, ie(o.$attrs, {
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
function i3(e) {
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
        }), c = i.find((g) => g.ref === s), l = i.map((g) => g.textValue), u = u3(l, t.value, c == null ? void 0 : c.textValue), d = i.find((g) => g.textValue === u);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function l3(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function u3(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = l3(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function c3() {
  const e = L(!1);
  return pe(() => {
    hn("keydown", () => {
      e.value = !0;
    }, { capture: !0, passive: !0 }), hn(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, { capture: !0, passive: !0 });
  }), e;
}
const d3 = rp(c3), [Ro, f3] = at(["MenuRoot", "MenuSub"], "MenuContext"), [Ni, p3] = at("MenuRoot"), m3 = /* @__PURE__ */ U({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: !1 },
    dir: {},
    modal: { type: Boolean, default: !0 }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const n = e, r = t, { modal: o, dir: a } = Nt(n), s = Ri(a), i = Kn(n, "open", r), c = L(), l = d3();
    return f3({
      open: i,
      onOpenChange: (u) => {
        i.value = u;
      },
      content: c,
      onContentChange: (u) => {
        c.value = u;
      }
    }), p3({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: s,
      modal: o
    }), (u, d) => (x(), H(b(xp), null, {
      default: B(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }));
  }
});
let Qa = 0;
function h3() {
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
    ), Qa++, e(() => {
      Qa === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), Qa--;
    });
  });
}
function wc() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
const [Cp, y3] = at("MenuContent"), Pp = /* @__PURE__ */ U({
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
    const n = e, r = t, o = Ro(), a = Ni(), { trapFocus: s, disableOutsidePointerEvents: i, loop: c } = Nt(n);
    h3(), gp(i.value);
    const l = L(""), u = L(0), d = L(0), g = L(null), y = L("right"), m = L(0), p = L(null), f = L(), { forwardRef: h, currentElement: w } = le(), { handleTypeaheadSearch: O } = i3();
    ne(w, (R) => {
      o.onContentChange(R);
    }), Pt(() => {
      window.clearTimeout(u.value);
    });
    function C(R) {
      var N, v;
      return y.value === ((N = g.value) == null ? void 0 : N.side) && vx(R, (v = g.value) == null ? void 0 : v.area);
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
      const N = R.target.closest("[data-reka-menu-content]") === R.currentTarget, v = R.ctrlKey || R.altKey || R.metaKey, A = R.key.length === 1, E = nx(
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
      if (E)
        return E == null ? void 0 : E.focus();
      if (R.code === "Space")
        return;
      const S = ((I = f.value) == null ? void 0 : I.getItems()) ?? [];
      if (N && (R.key === "Tab" && R.preventDefault(), !v && A && O(R.key, S)), R.target !== w.value || !hx.includes(R.key))
        return;
      R.preventDefault();
      const W = [...S.map((T) => T.ref)];
      cp.includes(R.key) && W.reverse(), yx(W);
    }
    function q(R) {
      var k, N;
      (N = (k = R == null ? void 0 : R.currentTarget) == null ? void 0 : k.contains) != null && N.call(k, R.target) || (window.clearTimeout(u.value), l.value = "");
    }
    function Y(R) {
      var v;
      if (!Hs(R))
        return;
      const k = R.target, N = m.value !== R.clientX;
      if ((v = R == null ? void 0 : R.currentTarget) != null && v.contains(k) && N) {
        const A = R.clientX > m.value ? "right" : "left";
        y.value = A, m.value = R.clientX;
      }
    }
    return y3({
      onItemEnter: (R) => !!C(R),
      onItemLeave: (R) => {
        var k;
        C(R) || ((k = w.value) == null || k.focus(), p.value = null);
      },
      onTriggerLeave: (R) => !!C(R),
      searchRef: l,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (R) => {
        g.value = R;
      }
    }), (R, k) => (x(), H(b(pp), {
      "as-child": "",
      trapped: b(s),
      onMountAutoFocus: $,
      onUnmountAutoFocus: k[7] || (k[7] = (N) => r("closeAutoFocus", N))
    }, {
      default: B(() => [
        J(b(Bi), {
          "as-child": "",
          "disable-outside-pointer-events": b(i),
          onEscapeKeyDown: k[2] || (k[2] = (N) => r("escapeKeyDown", N)),
          onPointerDownOutside: k[3] || (k[3] = (N) => r("pointerDownOutside", N)),
          onFocusOutside: k[4] || (k[4] = (N) => r("focusOutside", N)),
          onInteractOutside: k[5] || (k[5] = (N) => r("interactOutside", N)),
          onDismiss: k[6] || (k[6] = (N) => r("dismiss"))
        }, {
          default: B(() => [
            J(b(Yx), {
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
              default: B(() => [
                J(b(Ep), {
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
                  onPointermove: Y
                }, {
                  default: B(() => [
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
}), g3 = /* @__PURE__ */ U({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e, n = Cp(), { forwardRef: r } = le(), { CollectionItem: o } = wp(), a = L(!1);
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
      await Fe(), !c.defaultPrevented && Hs(c) && n.onItemLeave(c);
    }
    return (c, l) => (x(), H(b(o), {
      value: { textValue: c.textValue }
    }, {
      default: B(() => [
        J(b(ke), ie({
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
            await Fe(), !(u.defaultPrevented || c.disabled) && (a.value = !0);
          }),
          onBlur: l[1] || (l[1] = async (u) => {
            await Fe(), !u.defaultPrevented && (a.value = !1);
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
}), v3 = /* @__PURE__ */ U({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, r = t, { forwardRef: o, currentElement: a } = le(), s = Ni(), i = Cp(), c = L(!1);
    async function l() {
      const u = a.value;
      if (!n.disabled && u) {
        const d = new CustomEvent(px, {
          bubbles: !0,
          cancelable: !0
        });
        r("select", d), await Fe(), d.defaultPrevented ? c.value = !1 : s.onClose();
      }
    }
    return (u, d) => (x(), H(g3, ie(n, {
      ref: b(o),
      onClick: l,
      onPointerdown: d[0] || (d[0] = () => {
        c.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (g) => {
        var y;
        await Fe(), !g.defaultPrevented && (c.value || (y = g.currentTarget) == null || y.click());
      }),
      onKeydown: d[2] || (d[2] = async (g) => {
        const y = b(i).searchRef.value !== "";
        u.disabled || y && g.key === " " || b(Us).includes(g.key) && (g.currentTarget.click(), g.preventDefault());
      })
    }), {
      default: B(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), b3 = /* @__PURE__ */ U({
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
    const n = e, r = t, o = Pr(n, r), a = Ro(), { forwardRef: s, currentElement: i } = le();
    return yp(i), (c, l) => (x(), H(Pp, ie(b(o), {
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
}), w3 = /* @__PURE__ */ U({
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
    const o = Pr(e, t), a = Ro();
    return (s, i) => (x(), H(Pp, ie(b(o), {
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
}), S3 = /* @__PURE__ */ U({
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
    const o = Pr(e, t), a = Ro(), s = Ni();
    return (i, c) => (x(), H(b(Er), {
      present: i.forceMount || b(a).open.value
    }, {
      default: B(() => [
        b(s).modal.value ? (x(), H(b3, be(ie({ key: 0 }, { ...i.$attrs, ...b(o) })), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (x(), H(w3, be(ie({ key: 1 }, { ...i.$attrs, ...b(o) })), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), x3 = /* @__PURE__ */ U({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(Mi), be(Pe(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), O3 = /* @__PURE__ */ U({
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
}), A3 = /* @__PURE__ */ U({
  __name: "MenuAnchor",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(Op), be(Pe(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), E3 = /* @__PURE__ */ U({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(Mi), be(Pe(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [kp, C3] = at("DropdownMenuRoot"), $p = /* @__PURE__ */ U({
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
    }), a = L(), { modal: s, dir: i } = Nt(n), c = Ri(i);
    return C3({
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
    }), (l, u) => (x(), H(b(m3), {
      open: b(o),
      "onUpdate:open": u[0] || (u[0] = (d) => Yp(o) ? o.value = d : null),
      dir: b(c),
      modal: b(s)
    }, {
      default: B(() => [
        j(l.$slots, "default", { open: b(o) })
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Dp = /* @__PURE__ */ U({
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
    const a = kp(), s = L(!1);
    function i(c) {
      c.defaultPrevented || (s.value || setTimeout(() => {
        var l;
        (l = a.triggerElement.value) == null || l.focus();
      }, 0), s.value = !1, c.preventDefault());
    }
    return a.contentId || (a.contentId = yn(void 0, "reka-dropdown-menu-content")), (c, l) => {
      var u;
      return x(), H(b(S3), ie(b(o), {
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
        default: B(() => [
          j(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), P3 = /* @__PURE__ */ U({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const n = e, o = Cr(t);
    return le(), (a, s) => (x(), H(b(v3), be(Pe({ ...n, ...b(o) })), {
      default: B(() => [
        j(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Tp = /* @__PURE__ */ U({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(x3), be(Pe(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), k3 = /* @__PURE__ */ U({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (x(), H(b(O3), be(Pe(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fp = /* @__PURE__ */ U({
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
    }), n.triggerId || (n.triggerId = yn(void 0, "reka-dropdown-menu-trigger")), (a, s) => (x(), H(b(A3), { "as-child": "" }, {
      default: B(() => [
        J(b(ke), {
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
            !a.disabled && i.button === 0 && i.ctrlKey === !1 && ((c = b(n)) == null || c.onOpenToggle(), await Fe(), b(n).open.value && i.preventDefault());
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
function $3(e, t) {
  const n = op(!1, 300), r = L(null), o = qS();
  function a() {
    r.value = null, n.value = !1;
  }
  function s(i, c) {
    const l = i.currentTarget, u = { x: i.clientX, y: i.clientY }, d = D3(u, l.getBoundingClientRect()), g = T3(u, d), y = F3(c.getBoundingClientRect()), m = I3([...g, ...y]);
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
        const d = u.target, g = { x: u.clientX, y: u.clientY }, y = ((f = e.value) == null ? void 0 : f.contains(d)) || ((h = t.value) == null ? void 0 : h.contains(d)), m = !R3(g, r.value), p = !!d.closest("[data-grace-area-trigger]");
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
function D3(e, t) {
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
function T3(e, t, n = 5) {
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
function F3(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function R3(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a].x, c = t[a].y, l = t[s].x, u = t[s].y;
    c > r != u > r && n < (l - i) * (r - c) / (u - c) + i && (o = !o);
  }
  return o;
}
function I3(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), _3(t);
}
function _3(e) {
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
const L3 = /* @__PURE__ */ U({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(e) {
    const t = e;
    return le(), (n, r) => (x(), H(b(s3), be(Pe(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rp = "tooltip.open", [ji, B3] = at("TooltipProvider"), M3 = /* @__PURE__ */ U({
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
    const c = L(!0), l = L(!1), { start: u, stop: d } = ap(() => {
      c.value = !0;
    }, r, { immediate: !1 });
    return B3({
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
}), [Io, N3] = at("TooltipRoot"), j3 = /* @__PURE__ */ U({
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
    const d = L(!1), g = L(), y = V(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: m, stop: p } = ap(() => {
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
    return N3({
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
    }), (O, C) => (x(), H(b(xp), null, {
      default: B(() => [
        j(O.$slots, "default", { open: b(u) })
      ]),
      _: 3
    }));
  }
}), Ip = /* @__PURE__ */ U({
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
    const n = e, r = t, o = Io(), { forwardRef: a } = le(), s = Xp(), i = V(() => {
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
    }), (u, d) => (x(), H(b(Bi), {
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
      default: B(() => [
        J(b(Ep), ie({
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
            J(b(NS), {
              id: b(o).contentId,
              role: "tooltip"
            }, {
              default: B(() => [
                fe(Q(c.value), 1)
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
}), q3 = /* @__PURE__ */ U({
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
    const n = bp(e), { forwardRef: r, currentElement: o } = le(), { trigger: a, onClose: s } = Io(), i = ji(), { isPointerInTransit: c, onPointerExit: l } = $3(a, o);
    return i.isPointerInTransitRef = c, l(() => {
      s();
    }), (u, d) => (x(), H(Ip, ie({ ref: b(r) }, b(n)), {
      default: B(() => [
        j(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), z3 = /* @__PURE__ */ U({
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
    const n = e, r = t, o = Io(), a = Pr(n, r), { forwardRef: s } = le();
    return (i, c) => (x(), H(b(Er), {
      present: i.forceMount || b(o).open.value
    }, {
      default: B(() => [
        (x(), H(qr(b(o).disableHoverableContent.value ? Ip : q3), ie({ ref: b(s) }, b(a)), {
          default: B(() => [
            j(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), V3 = /* @__PURE__ */ U({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    defer: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (n, r) => (x(), H(b(Mi), be(Pe(t)), {
      default: B(() => [
        j(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), U3 = /* @__PURE__ */ U({
  __name: "TooltipTrigger",
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e, n = Io(), r = ji();
    n.contentId || (n.contentId = yn(void 0, "reka-tooltip-content"));
    const { forwardRef: o, currentElement: a } = le(), s = L(!1), i = L(!1), c = V(() => n.disabled.value ? {} : {
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
    return (f, h) => (x(), H(b(Op), {
      "as-child": "",
      reference: f.reference
    }, {
      default: B(() => [
        J(b(ke), ie({
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
}), H3 = { class: "text-lg font-semibold text-gray-900" }, W3 = { key: 0 }, K3 = { class: "p-6" }, G3 = /* @__PURE__ */ U({
  __name: "CollapsableSection",
  props: {
    header: { default: void 0 },
    open: { type: Boolean, default: !1 },
    headerColor: { default: void 0 }
  },
  setup(e) {
    const t = e, n = L(t.open);
    return ne(
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
        J(b(Li), {
          class: "focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none",
          style: dt({ backgroundColor: r.headerColor })
        }, {
          default: B(() => [
            D("h3", H3, [
              r.header ? (x(), P("span", W3, Q(r.header), 1)) : j(r.$slots, "trigger", { key: 1 })
            ]),
            D("div", {
              class: Z(["text-primary-600 transition-transform duration-300 ease-in-out", { "rotate-180": n.value }])
            }, [
              J(b(Se), {
                icon: b(Qs),
                class: "h-5 w-5"
              }, null, 8, ["icon"])
            ], 2)
          ]),
          _: 3
        }, 8, ["style"]),
        J(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: B(() => [
            D("div", K3, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), iA = /* @__PURE__ */ U({
  __name: "Dropdown",
  props: {
    align: { default: Kf.START },
    alignOffset: { default: 5 },
    openOnHover: { type: Boolean, default: !1 },
    hoverDelay: { default: 150 }
  },
  setup(e) {
    const t = e, n = L(!1);
    let r = null;
    const o = async () => {
      t.openOnHover && (r && (clearTimeout(r), r = null), await Fe(), n.value = !0);
    }, a = () => {
      t.openOnHover && (r = setTimeout(async () => {
        await Fe(), n.value = !1, r = null;
      }, t.hoverDelay));
    }, s = (i) => {
      n.value = i;
    };
    return (i, c) => (x(), H(b($p), {
      open: n.value,
      "onUpdate:open": [
        c[0] || (c[0] = (l) => n.value = l),
        s
      ]
    }, {
      default: B(() => [
        J(b(Fp), { "aria-label": "Dropdown" }, {
          default: B(() => [
            j(i.$slots, "trigger")
          ]),
          _: 3
        }),
        J(b(Tp), null, {
          default: B(() => [
            J(b(Dp), ie({ alignOffset: i.alignOffset }, i.$attrs, {
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
}), lA = /* @__PURE__ */ U({
  __name: "DropdownLink",
  props: {
    href: {}
  },
  setup(e) {
    return (t, n) => (x(), H(b(P3), null, {
      default: B(() => [
        J(b(ft), ie(t.$attrs, {
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
}), uA = /* @__PURE__ */ U({
  __name: "DropdownSeparator",
  setup(e) {
    return (t, n) => (x(), H(b(k3), { class: "mx-1 my-px h-px bg-gray-300" }));
  }
}), Y3 = ["href", "target", "tabindex", "aria-disabled"], X3 = "focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium transition-colors duration-200 select-none", cA = /* @__PURE__ */ U({
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
      return n.theme !== we.NO_STYLE && o.push(X3), o.push(t[n.theme]), o;
    };
    return (o, a) => o.href && (o.method || o.data) ? (x(), H(b(ft), {
      key: 0,
      href: o.href,
      method: o.method,
      data: o.data,
      class: Z(r()),
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
      class: Z(r()),
      tabindex: o.disabled ? -1 : 0,
      "aria-disabled": o.disabled,
      onClick: a[0] || (a[0] = (s) => o.disabled && s.preventDefault())
    }, [
      j(o.$slots, "default")
    ], 10, Y3));
  }
}), J3 = {
  class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
  type: "button"
}, Q3 = { class: "mx-1 w-2" }, Z3 = ["aria-labelledby"], dA = /* @__PURE__ */ U({
  __name: "LinkDropdownButton",
  props: {
    align: { default: Kf.START },
    alignOffset: { default: 5 },
    title: { default: void 0 }
  },
  setup(e) {
    const t = L(!1);
    return (n, r) => (x(), H(b($p), {
      open: t.value,
      "onUpdate:open": r[0] || (r[0] = (o) => t.value = o)
    }, {
      default: B(() => [
        J(b(Fp), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: B(() => [
            D("button", J3, [
              fe(Q(n.title) + " ", 1),
              D("span", Q3, [
                J(b(Se), { icon: b(Js) }, null, 8, ["icon"])
              ])
            ])
          ]),
          _: 1
        }),
        J(b(Tp), null, {
          default: B(() => [
            J(b(Dp), ie({ alignOffset: n.alignOffset }, n.$attrs, {
              align: n.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            }), {
              default: B(() => [
                D("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
                  "aria-labelledby": n.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  j(n.$slots, "default")
                ], 8, Z3)
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
}), e4 = ["href"], fA = /* @__PURE__ */ U({
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
      }, Q(t.title), 9, e4)
    ]));
  }
}), pA = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, n) => (x(), H(b(G3), { header: e.header }, {
      default: B(() => [
        J(b(y4), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, t4 = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, n4 = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, r4 = {
  key: 0,
  class: "text-center"
}, o4 = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, a4 = { class: "flex-start w-full md:flex" }, s4 = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, i4 = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, l4 = { class: "mb-1 flex justify-between" }, u4 = { class: "text-sm text-neutral-500" }, c4 = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, d4 = {
  key: 1,
  class: "text-sm text-primary-500"
}, f4 = { class: "text-sm text-neutral-500" }, p4 = { class: "font-medium" }, m4 = {
  key: 0,
  class: "line-through"
}, h4 = ["innerHTML"], y4 = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return jn.add(bm, ts, xm, lm, Sm), (t, n) => e.logs == null ? (x(), P("div", t4, [
      J(b(qi))
    ])) : (x(), P("div", n4, [
      e.logs.total ? (x(), P("ol", o4, [
        (x(!0), P(re, null, Ee(e.logs.data, (r) => (x(), P("li", {
          key: r.id
        }, [
          D("div", a4, [
            D("div", s4, [
              J(b(Se), {
                icon: r.icon
              }, null, 8, ["icon"])
            ]),
            D("div", i4, [
              D("div", l4, [
                D("span", u4, [
                  fe(Q(r.event_formatted) + " ", 1),
                  r.reference ? (x(), P("span", c4, Q(r.reference), 1)) : G("", !0),
                  r.causer ? (x(), P(re, { key: 1 }, [
                    r.causer.id ? (x(), H(b(ft), {
                      key: 0,
                      href: t.route("users.show", r.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: B(() => [
                        fe(" (" + Q(r.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (x(), P("span", d4, "(" + Q(r.causer.first_name) + ")", 1))
                  ], 64)) : G("", !0)
                ]),
                D("span", f4, Q(r.created_date_full), 1)
              ]),
              (x(!0), P(re, null, Ee(r.changes_formatted, (o, a) => (x(), P("p", {
                key: a,
                class: "mb-0 text-neutral-700"
              }, [
                D("span", p4, Q(a) + ":", 1),
                o.old ? (x(), P("span", m4, Q(o.old), 1)) : G("", !0),
                fe(" " + Q(o.new), 1)
              ]))), 128)),
              r.description_details ? (x(), P("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: r.description_details
              }, null, 8, h4)) : G("", !0)
            ])
          ])
        ]))), 128))
      ])) : (x(), P("p", r4, "No Data")),
      e.logs.links ? (x(), H(b(_p), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : G("", !0)
    ]));
  }
}, mA = /* @__PURE__ */ U({
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
    const n = e, r = t, o = L(null);
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
    }), c = L(!1), l = L(null), u = L(0), d = L(0), g = L(0), y = L(0), m = L(null), p = L(null), f = (O, C) => {
      c.value = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", h), l.value = C, u.value = O.clientX, d.value = O.clientY, g.value = o.value.offsetWidth, y.value = o.value.offsetHeight;
    }, h = (O) => {
      c.value = !1, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", h);
    }, w = (O) => {
      if (!c.value) return;
      const C = (O.clientX - u.value) * 2, $ = O.clientY - d.value;
      l.value.includes("x") && (m.value = g.value + C + "px"), l.value.includes("-x") && (m.value = g.value - C + "px"), l.value.includes("y") && (p.value = y.value + $ + "px");
    };
    return (O, C) => (x(), H(Fc, { to: "body" }, [
      J(un, { "leave-active-class": "duration-200" }, {
        default: B(() => [
          He(D("div", {
            class: Z(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            J(un, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: B(() => [
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
            J(un, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: B(() => [
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
                  e.show ? j(O.$slots, "default", { key: 0 }) : G("", !0),
                  e.resizable ? (x(), P(re, { key: 1 }, [
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: C[0] || (C[0] = ($) => f($, "y")),
                      onMouseup: h
                    }, null, 32),
                    D("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: C[1] || (C[1] = ($) => f($, "-x")),
                      onMouseup: h
                    }, null, 32),
                    D("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: C[2] || (C[2] = ($) => f($, "x")),
                      onMouseup: h
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: C[3] || (C[3] = ($) => f($, "xy")),
                      onMouseup: h
                    }, null, 32),
                    D("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: C[4] || (C[4] = ($) => f($, "-xy")),
                      onMouseup: h
                    }, null, 32)
                  ], 64)) : G("", !0)
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
}), g4 = {
  key: 2,
  class: "mb-3"
}, v4 = {
  key: 3,
  class: "mt-5 flex justify-end gap-1.5"
}, hA = /* @__PURE__ */ U({
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
    ), (o, a) => (x(), H(b(ix), {
      defaultOpen: o.defaultOpen,
      open: n.value,
      "onUpdate:open": [
        a[0] || (a[0] = (s) => n.value = s),
        r
      ]
    }, {
      default: B(() => [
        o.$slots.trigger ? (x(), H(b(Ux), {
          key: 0,
          asChild: ""
        }, {
          default: B(() => [
            j(o.$slots, "trigger")
          ]),
          _: 3
        })) : G("", !0),
        J(b(E3), null, {
          default: B(() => [
            J(b(zx), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30" }),
            J(b(_x), ie({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 shadow-lg/20 focus:outline-none" }, o.$attrs), {
              default: B(() => [
                o.title || o.$slots.header ? (x(), H(b(Vx), {
                  key: 0,
                  class: "m-0 text-lg font-semibold"
                }, {
                  default: B(() => [
                    j(o.$slots, "header", {}, () => [
                      fe(Q(o.title), 1)
                    ])
                  ]),
                  _: 3
                })) : G("", !0),
                o.description || o.$slots.description ? (x(), H(b(Lx), {
                  key: 1,
                  class: "mt-2 text-sm leading-normal"
                }, {
                  default: B(() => [
                    j(o.$slots, "description", {}, () => [
                      fe(Q(o.description), 1)
                    ])
                  ]),
                  _: 3
                })) : G("", !0),
                o.title || o.$slots.header || o.description || o.$slots.description ? (x(), P("div", g4)) : G("", !0),
                j(o.$slots, "default"),
                o.$slots.footer ? (x(), P("div", v4, [
                  j(o.$slots, "footer")
                ])) : G("", !0),
                J(b(lx), {
                  class: "focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none",
                  "aria-label": "Close"
                }, {
                  default: B(() => [
                    J(b(Se), { icon: b(Qr) }, null, 8, ["icon"])
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
}), b4 = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, w4 = { class: "ml-3 flex-1 whitespace-nowrap" }, yA = /* @__PURE__ */ U({
  __name: "NavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = V(
      () => t.active ? "cursor-pointer focusable flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700" : "cursor-pointer focusable flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    );
    return (r, o) => (x(), H(b(ft), {
      href: r.href,
      class: Z(n.value)
    }, {
      default: B(() => [
        r.$slots.icon ? (x(), P("div", b4, [
          j(r.$slots, "icon")
        ])) : G("", !0),
        D("span", w4, [
          j(r.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), S4 = { class: "pagination flex justify-between" }, x4 = ["value", "selected"], O4 = {
  key: 0,
  "aria-label": "Page navigation"
}, A4 = ["innerHTML"], E4 = ["innerHTML", "onClick"], _p = /* @__PURE__ */ U({
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
    const n = t, r = e, o = L(r.defaultPerPage), a = [10, 25, 50, 100, 250], s = V(() => {
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
    return (l, u) => (x(), P("div", S4, [
      D("div", null, [
        l.showPerPage ? (x(), H(b(rg), {
          key: 0,
          type: "select",
          modelValue: o.value,
          "onUpdate:modelValue": u[0] || (u[0] = (d) => o.value = d),
          class: "per-page-input w-20",
          onChanged: c
        }, {
          default: B(() => [
            (x(), P(re, null, Ee(a, (d) => D("option", {
              key: d,
              value: d,
              selected: d == o.value
            }, Q(d), 9, x4)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : G("", !0)
      ]),
      s.value.length > 3 ? (x(), P("nav", O4, [
        D("ul", {
          class: Z(["list-style-none flex", { [l.customListClass]: l.customListClass }])
        }, [
          (x(!0), P(re, null, Ee(s.value, (d, g) => (x(), P("li", { key: g }, [
            l.linkReturn ? (x(), P(re, { key: 0 }, [
              d.url === null ? (x(), P("button", {
                key: 0,
                class: Z(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: u[1] || (u[1] = (y) => i(""))
              }, null, 10, A4)) : (x(), P("button", {
                key: 1,
                class: Z(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [l.customLinkClass]: l.customLinkClass,
                  [l.customActiveLinkClass]: d.active && l.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (y) => i(d.url)
              }, null, 10, E4))
            ], 64)) : (x(), P(re, { key: 1 }, [
              d.url === null ? (x(), H(b(ft), {
                key: 0,
                class: Z(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [l.customLinkClass]: l.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (x(), H(b(ft), {
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
      ])) : G("", !0),
      u[2] || (u[2] = D("div", null, null, -1))
    ]));
  }
}), gA = /* @__PURE__ */ U({
  __name: "DangerButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(we).DANGER,
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
}), vA = /* @__PURE__ */ U({
  __name: "WarningButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(we).WARNING,
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
}), bA = /* @__PURE__ */ U({
  __name: "InfoButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(we).INFO,
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
}), wA = /* @__PURE__ */ U({
  __name: "SuccessButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(we).SUCCESS,
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
}), SA = /* @__PURE__ */ U({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, n = V(
      () => t.active ? "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out" : "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (r, o) => (x(), H(b(ft), {
      href: r.href,
      class: Z(n.value)
    }, {
      default: B(() => [
        j(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), C4 = /* @__PURE__ */ U({
  __name: "SecondaryButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(we).SECONDARY,
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
}), P4 = {
  key: 0,
  class: "border-b border-gray-200 bg-gray-50/50 px-6 py-4"
}, k4 = { class: "flex items-center justify-between" }, $4 = { class: "text-lg font-semibold text-gray-900" }, D4 = { key: 0 }, T4 = { class: "p-6" }, xA = /* @__PURE__ */ U({
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
      s.header ? (x(), P("div", P4, [
        D("div", k4, [
          D("h3", $4, Q(s.header), 1),
          s.$slots.headerButton ? (x(), P("div", D4, [
            j(s.$slots, "headerButton")
          ])) : G("", !0)
        ])
      ])) : G("", !0),
      D("div", T4, [
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
}), F4 = ["onClick"], R4 = { class: "group-hover:text-primary-600 text-2xl font-bold text-gray-900 transition-colors" }, I4 = { class: "text-sm font-medium text-gray-600 transition-colors group-hover:text-gray-900" }, OA = /* @__PURE__ */ U({
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
    const n = t, r = e, o = jf(), a = (i) => {
      let c = i;
      s(i) && (c = null), n("updateSearch", c);
    }, s = (i) => {
      const c = {};
      return o.url.includes("?") && new URLSearchParams(o.url.split("?")[1]).forEach((u, d) => {
        c[d] = u;
      }), r.statusName != null ? c[r.statusName] == i : c.status == i;
    };
    return (i, c) => (x(), P("div", {
      class: Z(["grid", [i.customContainerClass]]),
      style: { "grid-template-columns": "repeat(auto-fit, minmax(164px, 1fr))" }
    }, [
      (x(!0), P(re, null, Ee(i.stats, (l) => (x(), P("div", {
        key: l.value,
        class: Z(["group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md", {
          "border-primary-200 bg-primary-50 ring-primary-500 ring-2": s(l.name),
          [i.customStatClass]: i.customStatClass
        }]),
        onClick: (u) => a(l.name)
      }, [
        D("div", {
          class: Z(["px-6 py-4", [i.customStatValueClass]])
        }, [
          D("div", R4, Q(l.value), 1)
        ], 2),
        D("div", {
          class: Z(["border-t border-gray-100 bg-gray-50/50 px-6 py-3", [i.customStatLabelClass]])
        }, [
          D("div", I4, Q(l.label ?? l.name), 1)
        ], 2),
        c[0] || (c[0] = D("div", { class: "from-primary-500 to-primary-600 absolute bottom-0 left-0 h-1 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100" }, null, -1))
      ], 10, F4))), 128))
    ], 2));
  }
}), _4 = "fill-white stroke-gray-200", L4 = /* @__PURE__ */ U({
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
    return (o, a) => (x(), H(b(M3), { "delay-duration": o.delayDuration }, {
      default: B(() => [
        J(b(j3), { disabled: o.disabled }, {
          default: B(() => [
            J(b(U3), { "as-child": "" }, {
              default: B(() => [
                j(o.$slots, "default")
              ]),
              _: 3
            }),
            J(b(V3), null, {
              default: B(() => [
                J(b(z3), {
                  side: n.value,
                  sideOffset: o.sideOffset,
                  collisionPadding: o.collisionPadding,
                  class: Z([b(r), o.contentClass])
                }, {
                  default: B(() => [
                    fe(Q(o.content) + " ", 1),
                    J(b(L3), {
                      class: Z([_4, o.arrowClass])
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
}), B4 = ["type", "disabled"], M4 = "focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed", bn = /* @__PURE__ */ U({
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
        t.theme !== b(we).NO_STYLE ? [M4, n[t.size]] : [],
        // Always apply theme variant
        r[t.theme],
        // Custom classes
        t.customClass
      ])
    }, [
      j(o.$slots, "default")
    ], 10, B4));
  }
}), N4 = { class: "mt-2" }, AA = /* @__PURE__ */ U({
  __name: "Collapse",
  props: {
    open: { type: Boolean, default: !1 },
    button: { default: () => ["Show more", "Show less"] }
  },
  setup(e) {
    const t = e, n = L(t.open);
    return ne(
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
        J(b(Li), { asChild: "" }, {
          default: B(() => [
            j(r.$slots, "trigger", {}, () => [
              J(b(C4), be(Pe(r.$attrs)), {
                default: B(() => [
                  D("span", null, Q(n.value ? r.button[1] : r.button[0]), 1),
                  J(b(Se), {
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
        J(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: B(() => [
            D("div", N4, [
              j(r.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), j4 = { class: "border-t border-gray-100" }, q4 = { class: "divide-y divide-gray-100" }, EA = /* @__PURE__ */ U({
  __name: "DescriptionList",
  props: {
    form: { default: void 0 },
    stopEditOnSubmit: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const n = e, r = L(!1);
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
    const o = L([]);
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
    }), (l, u) => (x(), P("div", j4, [
      D("dl", q4, [
        j(l.$slots, "default")
      ])
    ]));
  }
}), z4 = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, V4 = { class: "flex items-center text-sm font-medium" }, U4 = {
  key: 0,
  class: "ml-1 text-red-500"
}, H4 = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0" }, W4 = { class: "flex min-h-full items-center" }, K4 = { class: "slot-content grow" }, G4 = { class: "ml-4 shrink-0" }, Y4 = { class: "slot-edit grow" }, X4 = { class: "ml-4 shrink-0" }, CA = /* @__PURE__ */ U({
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
    jn.add(ts, Zi);
    const r = e, o = n, a = L(r.editable ? r.forceEditing : !1), s = () => {
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
    }), (d, g) => (x(), P("div", z4, [
      D("dt", V4, [
        fe(Q(d.label) + " ", 1),
        j(d.$slots, "label"),
        d.required ? (x(), P("span", U4, "*")) : G("", !0)
      ]),
      D("dd", H4, [
        D("div", W4, [
          a.value ? (x(), P(re, { key: 1 }, [
            D("div", Y4, [
              j(d.$slots, "edit")
            ]),
            D("span", X4, [
              D("button", {
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-xl font-bold"
              }, [
                J(b(Se), { icon: b(Zi) }, null, 8, ["icon"])
              ])
            ])
          ], 64)) : (x(), P(re, { key: 0 }, [
            D("div", K4, [
              j(d.$slots, "default"),
              fe(" " + Q(d.value), 1)
            ]),
            D("span", G4, [
              d.editable ? (x(), P("button", {
                key: 0,
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-lg font-bold"
              }, [
                J(b(Se), { icon: b(ts) }, null, 8, ["icon"])
              ])) : G("", !0),
              j(d.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
});
var Za = { exports: {} };
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
function J4() {
  return Sc || (Sc = 1, function(e) {
    (function() {
      var t = "input is invalid type", n = "finalize already called", r = typeof window == "object", o = r ? window : {};
      o.JS_MD5_NO_WINDOW && (r = !1);
      var a = !r && typeof self == "object", s = !o.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? o = Os : a && (o = self);
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
      }, C = function(v) {
        return function(A) {
          return new R(!0).update(A)[v]();
        };
      }, $ = function() {
        var v = C("hex");
        s && (v = z(v)), v.create = function() {
          return new R();
        }, v.update = function(S) {
          return v.create().update(S);
        };
        for (var A = 0; A < g.length; ++A) {
          var E = g[A];
          v[E] = C(E);
        }
        return v;
      }, z = function(v) {
        var A = As, E = As.Buffer, S;
        E.from && !o.JS_MD5_NO_BUFFER_FROM ? S = E.from : S = function(I) {
          return new E(I);
        };
        var W = function(I) {
          if (typeof I == "string")
            return A.createHash("md5").update(I, "utf8").digest("hex");
          if (I == null)
            throw new Error(t);
          return I.constructor === ArrayBuffer && (I = new Uint8Array(I)), h(I) || w(I) || I.constructor === E ? A.createHash("md5").update(S(I)).digest("hex") : v(I);
        };
        return W;
      }, q = function(v) {
        return function(A, E) {
          return new k(A, !0).update(E)[v]();
        };
      }, Y = function() {
        var v = q("hex");
        v.create = function(S) {
          return new k(S);
        }, v.update = function(S, W) {
          return v.create(S).update(W);
        };
        for (var A = 0; A < g.length; ++A) {
          var E = g[A];
          v[E] = q(E);
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
        for (var E = A[1], S, W = 0, I, T = v.length, X = this.blocks, ae = this.buffer8; W < T; ) {
          if (this.hashed && (this.hashed = !1, X[0] = X[16], X[16] = X[1] = X[2] = X[3] = X[4] = X[5] = X[6] = X[7] = X[8] = X[9] = X[10] = X[11] = X[12] = X[13] = X[14] = X[15] = 0), E)
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
        var v, A, E, S, W, I, T = this.blocks;
        this.first ? (v = T[0] - 680876937, v = (v << 7 | v >>> 25) - 271733879 << 0, S = (-1732584194 ^ v & 2004318071) + T[1] - 117830708, S = (S << 12 | S >>> 20) + v << 0, E = (-271733879 ^ S & (v ^ -271733879)) + T[2] - 1126478375, E = (E << 17 | E >>> 15) + S << 0, A = (v ^ E & (S ^ v)) + T[3] - 1316259209, A = (A << 22 | A >>> 10) + E << 0) : (v = this.h0, A = this.h1, E = this.h2, S = this.h3, v += (S ^ A & (E ^ S)) + T[0] - 680876936, v = (v << 7 | v >>> 25) + A << 0, S += (E ^ v & (A ^ E)) + T[1] - 389564586, S = (S << 12 | S >>> 20) + v << 0, E += (A ^ S & (v ^ A)) + T[2] + 606105819, E = (E << 17 | E >>> 15) + S << 0, A += (v ^ E & (S ^ v)) + T[3] - 1044525330, A = (A << 22 | A >>> 10) + E << 0), v += (S ^ A & (E ^ S)) + T[4] - 176418897, v = (v << 7 | v >>> 25) + A << 0, S += (E ^ v & (A ^ E)) + T[5] + 1200080426, S = (S << 12 | S >>> 20) + v << 0, E += (A ^ S & (v ^ A)) + T[6] - 1473231341, E = (E << 17 | E >>> 15) + S << 0, A += (v ^ E & (S ^ v)) + T[7] - 45705983, A = (A << 22 | A >>> 10) + E << 0, v += (S ^ A & (E ^ S)) + T[8] + 1770035416, v = (v << 7 | v >>> 25) + A << 0, S += (E ^ v & (A ^ E)) + T[9] - 1958414417, S = (S << 12 | S >>> 20) + v << 0, E += (A ^ S & (v ^ A)) + T[10] - 42063, E = (E << 17 | E >>> 15) + S << 0, A += (v ^ E & (S ^ v)) + T[11] - 1990404162, A = (A << 22 | A >>> 10) + E << 0, v += (S ^ A & (E ^ S)) + T[12] + 1804603682, v = (v << 7 | v >>> 25) + A << 0, S += (E ^ v & (A ^ E)) + T[13] - 40341101, S = (S << 12 | S >>> 20) + v << 0, E += (A ^ S & (v ^ A)) + T[14] - 1502002290, E = (E << 17 | E >>> 15) + S << 0, A += (v ^ E & (S ^ v)) + T[15] + 1236535329, A = (A << 22 | A >>> 10) + E << 0, v += (E ^ S & (A ^ E)) + T[1] - 165796510, v = (v << 5 | v >>> 27) + A << 0, S += (A ^ E & (v ^ A)) + T[6] - 1069501632, S = (S << 9 | S >>> 23) + v << 0, E += (v ^ A & (S ^ v)) + T[11] + 643717713, E = (E << 14 | E >>> 18) + S << 0, A += (S ^ v & (E ^ S)) + T[0] - 373897302, A = (A << 20 | A >>> 12) + E << 0, v += (E ^ S & (A ^ E)) + T[5] - 701558691, v = (v << 5 | v >>> 27) + A << 0, S += (A ^ E & (v ^ A)) + T[10] + 38016083, S = (S << 9 | S >>> 23) + v << 0, E += (v ^ A & (S ^ v)) + T[15] - 660478335, E = (E << 14 | E >>> 18) + S << 0, A += (S ^ v & (E ^ S)) + T[4] - 405537848, A = (A << 20 | A >>> 12) + E << 0, v += (E ^ S & (A ^ E)) + T[9] + 568446438, v = (v << 5 | v >>> 27) + A << 0, S += (A ^ E & (v ^ A)) + T[14] - 1019803690, S = (S << 9 | S >>> 23) + v << 0, E += (v ^ A & (S ^ v)) + T[3] - 187363961, E = (E << 14 | E >>> 18) + S << 0, A += (S ^ v & (E ^ S)) + T[8] + 1163531501, A = (A << 20 | A >>> 12) + E << 0, v += (E ^ S & (A ^ E)) + T[13] - 1444681467, v = (v << 5 | v >>> 27) + A << 0, S += (A ^ E & (v ^ A)) + T[2] - 51403784, S = (S << 9 | S >>> 23) + v << 0, E += (v ^ A & (S ^ v)) + T[7] + 1735328473, E = (E << 14 | E >>> 18) + S << 0, A += (S ^ v & (E ^ S)) + T[12] - 1926607734, A = (A << 20 | A >>> 12) + E << 0, W = A ^ E, v += (W ^ S) + T[5] - 378558, v = (v << 4 | v >>> 28) + A << 0, S += (W ^ v) + T[8] - 2022574463, S = (S << 11 | S >>> 21) + v << 0, I = S ^ v, E += (I ^ A) + T[11] + 1839030562, E = (E << 16 | E >>> 16) + S << 0, A += (I ^ E) + T[14] - 35309556, A = (A << 23 | A >>> 9) + E << 0, W = A ^ E, v += (W ^ S) + T[1] - 1530992060, v = (v << 4 | v >>> 28) + A << 0, S += (W ^ v) + T[4] + 1272893353, S = (S << 11 | S >>> 21) + v << 0, I = S ^ v, E += (I ^ A) + T[7] - 155497632, E = (E << 16 | E >>> 16) + S << 0, A += (I ^ E) + T[10] - 1094730640, A = (A << 23 | A >>> 9) + E << 0, W = A ^ E, v += (W ^ S) + T[13] + 681279174, v = (v << 4 | v >>> 28) + A << 0, S += (W ^ v) + T[0] - 358537222, S = (S << 11 | S >>> 21) + v << 0, I = S ^ v, E += (I ^ A) + T[3] - 722521979, E = (E << 16 | E >>> 16) + S << 0, A += (I ^ E) + T[6] + 76029189, A = (A << 23 | A >>> 9) + E << 0, W = A ^ E, v += (W ^ S) + T[9] - 640364487, v = (v << 4 | v >>> 28) + A << 0, S += (W ^ v) + T[12] - 421815835, S = (S << 11 | S >>> 21) + v << 0, I = S ^ v, E += (I ^ A) + T[15] + 530742520, E = (E << 16 | E >>> 16) + S << 0, A += (I ^ E) + T[2] - 995338651, A = (A << 23 | A >>> 9) + E << 0, v += (E ^ (A | ~S)) + T[0] - 198630844, v = (v << 6 | v >>> 26) + A << 0, S += (A ^ (v | ~E)) + T[7] + 1126891415, S = (S << 10 | S >>> 22) + v << 0, E += (v ^ (S | ~A)) + T[14] - 1416354905, E = (E << 15 | E >>> 17) + S << 0, A += (S ^ (E | ~v)) + T[5] - 57434055, A = (A << 21 | A >>> 11) + E << 0, v += (E ^ (A | ~S)) + T[12] + 1700485571, v = (v << 6 | v >>> 26) + A << 0, S += (A ^ (v | ~E)) + T[3] - 1894986606, S = (S << 10 | S >>> 22) + v << 0, E += (v ^ (S | ~A)) + T[10] - 1051523, E = (E << 15 | E >>> 17) + S << 0, A += (S ^ (E | ~v)) + T[1] - 2054922799, A = (A << 21 | A >>> 11) + E << 0, v += (E ^ (A | ~S)) + T[8] + 1873313359, v = (v << 6 | v >>> 26) + A << 0, S += (A ^ (v | ~E)) + T[15] - 30611744, S = (S << 10 | S >>> 22) + v << 0, E += (v ^ (S | ~A)) + T[6] - 1560198380, E = (E << 15 | E >>> 17) + S << 0, A += (S ^ (E | ~v)) + T[13] + 1309151649, A = (A << 21 | A >>> 11) + E << 0, v += (E ^ (A | ~S)) + T[4] - 145523070, v = (v << 6 | v >>> 26) + A << 0, S += (A ^ (v | ~E)) + T[11] - 1120210379, S = (S << 10 | S >>> 22) + v << 0, E += (v ^ (S | ~A)) + T[2] + 718787259, E = (E << 15 | E >>> 17) + S << 0, A += (S ^ (E | ~v)) + T[9] - 343485551, A = (A << 21 | A >>> 11) + E << 0, this.first ? (this.h0 = v + 1732584193 << 0, this.h1 = A - 271733879 << 0, this.h2 = E - 1732584194 << 0, this.h3 = S + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + v << 0, this.h1 = this.h1 + A << 0, this.h2 = this.h2 + E << 0, this.h3 = this.h3 + S << 0);
      }, R.prototype.hex = function() {
        this.finalize();
        var v = this.h0, A = this.h1, E = this.h2, S = this.h3;
        return l[v >>> 4 & 15] + l[v & 15] + l[v >>> 12 & 15] + l[v >>> 8 & 15] + l[v >>> 20 & 15] + l[v >>> 16 & 15] + l[v >>> 28 & 15] + l[v >>> 24 & 15] + l[A >>> 4 & 15] + l[A & 15] + l[A >>> 12 & 15] + l[A >>> 8 & 15] + l[A >>> 20 & 15] + l[A >>> 16 & 15] + l[A >>> 28 & 15] + l[A >>> 24 & 15] + l[E >>> 4 & 15] + l[E & 15] + l[E >>> 12 & 15] + l[E >>> 8 & 15] + l[E >>> 20 & 15] + l[E >>> 16 & 15] + l[E >>> 28 & 15] + l[E >>> 24 & 15] + l[S >>> 4 & 15] + l[S & 15] + l[S >>> 12 & 15] + l[S >>> 8 & 15] + l[S >>> 20 & 15] + l[S >>> 16 & 15] + l[S >>> 28 & 15] + l[S >>> 24 & 15];
      }, R.prototype.toString = R.prototype.hex, R.prototype.digest = function() {
        this.finalize();
        var v = this.h0, A = this.h1, E = this.h2, S = this.h3;
        return [
          v & 255,
          v >>> 8 & 255,
          v >>> 16 & 255,
          v >>> 24 & 255,
          A & 255,
          A >>> 8 & 255,
          A >>> 16 & 255,
          A >>> 24 & 255,
          E & 255,
          E >>> 8 & 255,
          E >>> 16 & 255,
          E >>> 24 & 255,
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
        for (var v, A, E, S = "", W = this.array(), I = 0; I < 15; )
          v = W[I++], A = W[I++], E = W[I++], S += y[v >>> 2] + y[(v << 4 | A >>> 4) & 63] + y[(A << 2 | E >>> 6) & 63] + y[E & 63];
        return v = W[I], S += y[v >>> 2] + y[v << 4 & 63] + "==", S;
      };
      function k(v, A) {
        var E, S = O(v);
        if (v = S[0], S[1]) {
          var W = [], I = v.length, T = 0, X;
          for (E = 0; E < I; ++E)
            X = v.charCodeAt(E), X < 128 ? W[T++] = X : X < 2048 ? (W[T++] = 192 | X >>> 6, W[T++] = 128 | X & 63) : X < 55296 || X >= 57344 ? (W[T++] = 224 | X >>> 12, W[T++] = 128 | X >>> 6 & 63, W[T++] = 128 | X & 63) : (X = 65536 + ((X & 1023) << 10 | v.charCodeAt(++E) & 1023), W[T++] = 240 | X >>> 18, W[T++] = 128 | X >>> 12 & 63, W[T++] = 128 | X >>> 6 & 63, W[T++] = 128 | X & 63);
          v = W;
        }
        v.length > 64 && (v = new R(!0).update(v).array());
        var ae = [], Te = [];
        for (E = 0; E < 64; ++E) {
          var Ye = v[E] || 0;
          ae[E] = 92 ^ Ye, Te[E] = 54 ^ Ye;
        }
        R.call(this, A), this.update(Te), this.oKeyPad = ae, this.inner = !0, this.sharedMemory = A;
      }
      k.prototype = new R(), k.prototype.finalize = function() {
        if (R.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var v = this.array();
          R.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(v), R.prototype.finalize.call(this);
        }
      };
      var N = $();
      N.md5 = N, N.md5.hmac = Y(), i ? e.exports = N : o.md5 = N;
    })();
  }(Za)), Za.exports;
}
var Q4 = J4();
const Z4 = ["src", "alt"], PA = /* @__PURE__ */ U({
  __name: "GravatarImg",
  props: {
    email: {},
    size: { default: 100 }
  },
  setup(e) {
    const t = e, n = V(() => Q4.md5(t.email.trim().toLowerCase())), r = V(() => `https://www.gravatar.com/avatar/${n.value}?s=${t.size}`), o = V(() => `Gravatar for ${t.email}`);
    return (a, s) => (x(), P("img", {
      src: r.value,
      alt: o.value
    }, null, 8, Z4));
  }
}), eO = ["id"], tO = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, nO = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, rO = { class: "space-y-1 px-4 py-1" }, kA = /* @__PURE__ */ U({
  __name: "NavCollapse",
  props: {
    open: { type: Boolean, default: !1 },
    name: {}
  },
  setup(e) {
    const t = e, n = L(t.open);
    return ne(
      () => t.open,
      (r) => n.value = r
    ), (r, o) => (x(), P("li", null, [
      J(b(Ii), {
        defaultOpen: r.open,
        open: n.value,
        "onUpdate:open": o[0] || (o[0] = (a) => n.value = a)
      }, {
        default: B(() => [
          J(b(Li), { asChild: "" }, {
            default: B(() => [
              D("button", {
                id: r.name,
                class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                r.$slots.icon ? (x(), P("div", tO, [
                  j(r.$slots, "icon")
                ])) : G("", !0),
                D("span", nO, Q(r.name), 1),
                J(b(Se), {
                  icon: b(Js),
                  class: Z(["transition-all", { "rotate-180": n.value }])
                }, null, 8, ["icon", "class"])
              ], 8, eO)
            ]),
            _: 3
          }),
          J(b(_i), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: B(() => [
              D("ul", rO, [
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
}), oO = { class: "relative" }, aO = { class: "mt-4 flex flex-col items-center justify-center" }, sO = { class: "relative flex w-fit flex-row justify-center gap-3" }, iO = ["onClick"], $A = {
  __name: "DottedCarousel",
  props: {
    padding: { default: 0 },
    gap: { default: 20 }
  },
  setup(e) {
    const t = L(0), n = L(null), r = L(null), o = e, a = L(0);
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
    }), (c, l) => (x(), P("div", oO, [
      D("div", {
        class: "flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden",
        style: dt({ gap: `${e.gap}px` }),
        ref_key: "container",
        ref: r,
        onScroll: l[0] || (l[0] = (...u) => c.onContainerScroll && c.onContainerScroll(...u))
      }, [
        j(c.$slots, "default")
      ], 36),
      D("div", aO, [
        D("div", sO, [
          D("div", {
            class: "absolute h-2 w-2 rounded-full bg-primary transition-all duration-300",
            style: dt({ left: `${a.value}px` }),
            ref_key: "activeDot",
            ref: n
          }, null, 4),
          (x(!0), P(re, null, Ee(Array(c.$slots.default().length).fill(""), (u, d) => (x(), P("div", {
            key: d,
            class: "h-2 w-2 cursor-pointer rounded-full bg-accent",
            onClick: (g) => s(g, d)
          }, null, 8, iO))), 128))
        ])
      ])
    ]));
  }
}, lO = /* @__PURE__ */ U({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, n) => (x(), H(b(bn), {
      theme: b(we).PRIMARY,
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
}), DA = /* @__PURE__ */ U({
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, n) => {
      const r = Qp("Td");
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
}), uO = { class: "relative mt-4 mb-6 rounded-lg border border-gray-200 bg-gray-50" }, cO = { class: "flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-gray-100 px-4 py-2" }, dO = { class: "overflow-x-auto p-4 text-sm" }, fO = { class: "language-vue text-gray-800 font-mono" }, TA = /* @__PURE__ */ U({
  __name: "CodePreview",
  props: {
    code: {}
  },
  setup(e) {
    const t = e, n = L(""), r = L("Copy");
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
    return (a, s) => (x(), P("div", uO, [
      D("div", cO, [
        s[0] || (s[0] = D("span", { class: "text-sm font-medium text-gray-700" }, "Code Example", -1)),
        D("button", {
          onClick: o,
          class: Z(["rounded px-3 py-1 text-sm text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800", { "text-green-600": r.value.includes("✓"), "text-red-600": r.value.includes("✗") }]),
          title: "Copy to clipboard"
        }, Q(r.value), 3)
      ]),
      D("pre", dO, [
        D("code", fO, Q(n.value), 1)
      ])
    ]));
  }
}), pO = { class: "mt-12 mb-8" }, mO = ["id"], FA = /* @__PURE__ */ U({
  __name: "H2",
  props: {
    title: {}
  },
  setup(e) {
    return (t, n) => (x(), P("div", pO, [
      D("h2", {
        id: t.title.toLowerCase().replace(/\s+/g, "-"),
        class: "border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900"
      }, Q(t.title), 9, mO)
    ]));
  }
}), hO = {
  install(e) {
    for (const t in components)
      e.component(t, components[t]);
  }
};
export {
  oA as Alert,
  bn as Button,
  Jy as Checkbox,
  TA as CodePreview,
  G3 as CollapsableSection,
  AA as Collapse,
  G3 as CollapsibleSection,
  gA as DangerButton,
  EA as DescriptionList,
  CA as DescriptionListItem,
  $A as DottedCarousel,
  iA as Dropdown,
  lA as DropdownLink,
  SO as DropdownSearchbar,
  uA as DropdownSeparator,
  WO as FileDropZoneInput,
  PA as GravatarImg,
  FA as H2,
  KO as Images,
  bA as InfoButton,
  rg as Input,
  en as InputError,
  qn as InputLabel,
  Xs as InputWrapper,
  cA as LinkButton,
  dA as LinkDropdownButton,
  fA as LinkDropdownButtonItem,
  pA as Logs,
  y4 as LogsContent,
  mA as Modal,
  kA as NavCollapse,
  yA as NavLink,
  hA as NewModal,
  _p as Pagination,
  lO as PrimaryButton,
  gO as PropsTable,
  GO as RadioButton,
  SA as ResponsiveNavLink,
  wO as RichSelect,
  _0 as SearchSelect,
  C4 as SecondaryButton,
  xA as Section,
  bO as Select,
  xO as Select2ajax,
  YO as SelectMultiple,
  qi as Spinner,
  OA as Stats,
  uo as SubmitButton,
  wA as SuccessButton,
  wg as Switch,
  XO as Table,
  rA as TableItemCard,
  QO as Tbody,
  Ms as Td,
  DA as TdCollapseHandler,
  cg as TextInput,
  mg as Textarea,
  ZO as Th,
  JO as Thead,
  L4 as Tooltip,
  tA as TrCollapse,
  eA as TrCollapseHandler,
  nA as TrPlaceholder,
  vO as UnderConstruction,
  vA as WarningButton,
  hO as default,
  jf as getInertiaPage,
  wr as getInertiaRouter,
  VO as hasPermission,
  aw as moneyFormat,
  zO as numberFormat,
  HO as setInertiaPage,
  UO as setInertiaRouter
};
