import * as Un from "vue";
import { defineComponent as K, openBlock as E, createElementBlock as F, createElementVNode as N, createCommentVNode as J, Fragment as ne, renderList as Ce, normalizeClass as X, toDisplayString as Q, computed as I, createBlock as W, unref as w, renderSlot as z, createVNode as Y, useModel as Jr, ref as j, onMounted as me, watch as re, withDirectives as ot, vModelCheckbox as Lp, mergeModels as St, vModelSelect as Hc, withCtx as V, createTextVNode as fe, isRef as tr, createSlots as Hn, vShow as mr, vModelText as zc, inject as di, provide as Cn, shallowRef as Pn, shallowReadonly as pr, toValue as Ge, getCurrentScope as Wc, onScopeDispose as fi, effectScope as Kc, onBeforeUnmount as pi, watchEffect as yt, readonly as Mp, customRef as Np, getCurrentInstance as Sr, nextTick as je, toHandlerKey as jp, camelize as Gc, onUpdated as Vp, triggerRef as Up, toRef as Hp, onUnmounted as It, toRefs as Lt, h as Ne, Comment as zp, mergeProps as ae, cloneVNode as Wp, normalizeStyle as st, reactive as On, Teleport as Jc, normalizeProps as Pe, guardReactiveProps as De, markRaw as $s, watchPostEffect as Yc, mergeDefaults as Xc, withModifiers as wt, withKeys as nr, resolveDynamicComponent as na, toHandlers as Qc, Transition as yr, resolveDirective as Kp, resolveComponent as Gp, useAttrs as Jp } from "vue";
import "isomorphic-dompurify";
import { a as Re, _ as Zc, N as Yp, c as Xp } from "./createNbIcons-DGDtKAUT.js";
import { d as VD, u as UD } from "./createNbIcons-DGDtKAUT.js";
const Qp = { class: "overflow-x-auto" }, Zp = { class: "min-w-full divide-y divide-gray-200 dark:divide-gray-700" }, eh = { class: "divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:divide-gray-700 dark:bg-gray-800" }, th = { key: 0 }, rh = { class: "px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-100" }, nh = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-300" }, ah = { class: "px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-300" }, oh = { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-300" }, k$ = /* @__PURE__ */ K({
  __name: "PropsTable",
  props: {
    rows: { default: () => [] }
  },
  setup(e) {
    const t = e;
    return (r, n) => (E(), F("div", Qp, [
      N("table", Zp, [
        n[1] || (n[1] = N("thead", { class: "bg-gray-50 dark:bg-gray-900/50" }, [
          N("tr", null, [
            N("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400" }, "Prop"),
            N("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400" }, "Type"),
            N("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400" }, "Default"),
            N("th", { class: "px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-gray-400 uppercase dark:text-gray-400" }, "Description")
          ])
        ], -1)),
        N("tbody", eh, [
          t.rows.length === 0 ? (E(), F("tr", th, [...n[0] || (n[0] = [
            N("td", {
              colspan: "4",
              class: "px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
            }, "No props defined", -1)
          ])])) : J("", !0),
          (E(!0), F(ne, null, Ce(t.rows, (a, o) => (E(), F("tr", {
            key: o,
            class: X({ "bg-yellow-50 dark:bg-yellow-500/10": a.highlight })
          }, [
            N("td", rh, Q(a.prop), 1),
            N("td", nh, Q(a.type), 1),
            N("td", ah, Q(a.default), 1),
            N("td", oh, Q(a.description), 1)
          ], 2))), 128))
        ])
      ])
    ]));
  }
}), hi = /* @__PURE__ */ K({
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
    const n = I(() => t.label ? t.label : t.field ? r(t.field) : ""), a = I(() => {
      var s, i;
      return t.error ? t.error : (i = (s = t.form) == null ? void 0 : s.errors) != null && i[t.field || ""] ? t.form.errors[t.field || ""] : null;
    }), o = I(() => t.htmlFor || t.field);
    return (s, i) => (E(), F("div", {
      class: X(e.noLabel ? "mb-2" : "mb-4")
    }, [
      !e.noLabel && (n.value || e.field) ? (E(), W(w(Yr), {
        key: 0,
        customClass: e.labelCustomClass,
        for: o.value,
        value: n.value,
        sublabel: e.sublabel,
        required: e.required,
        tooltip: e.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : J("", !0),
      z(s.$slots, "default"),
      a.value ? (E(), W(w(cr), {
        key: 1,
        message: a.value,
        class: "mt-2"
      }, null, 8, ["message"])) : J("", !0)
    ], 2));
  }
}), sh = { class: "py-ui px-ui gap-ui-half flex flex-col items-center rounded bg-white text-center dark:bg-gray-800" }, ih = { class: "whitespace-pre-line text-gray-600 dark:text-gray-300" }, lh = /* @__PURE__ */ K({
  __name: "UnderConstruction",
  props: {
    full: { type: Boolean, default: !1 },
    info: { default: `Section under construction.
Please come back later.` }
  },
  setup(e) {
    return (t, r) => (E(), F("div", {
      class: X(["bg-stripes p-ui flex w-full items-center justify-center", { grow: e.full }])
    }, [
      N("div", sh, [
        Y(Re, {
          name: "$construction",
          size: "2xl",
          class: "text-primary"
        }),
        r[0] || (r[0] = N("h1", { class: "text-2xl font-bold text-gray-900 dark:text-gray-100" }, "Under Construction", -1)),
        N("p", ih, Q(e.info), 1)
      ])
    ], 2));
  }
}), T$ = /* @__PURE__ */ Zc(lh, [["__scopeId", "data-v-f95acba4"]]), uh = { class: "flex items-center" }, ch = {
  key: 1,
  class: "mr-1"
}, dh = ["id", "value", "disabled", "required", "name"], fh = {
  key: 3,
  class: "ml-1"
}, ph = /* @__PURE__ */ K({
  __name: "Checkbox",
  props: /* @__PURE__ */ St({
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
  emits: /* @__PURE__ */ St(["update:checked", "update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = r, a = e;
    function o(f) {
      return f.split("_").join(" ").split(" ").map((y) => y[0].toUpperCase() + y.slice(1)).join(" ");
    }
    const s = Jr(e, "modelValue"), i = j(!1), u = j(), l = j(), c = j(!1);
    me(() => {
      var f;
      i.value = !a.form, u.value = i.value ? s.value : ((f = a.form) == null ? void 0 : f[a.field]) ?? a.checked;
    }), re(
      () => u.value,
      (f, y) => {
        if (f !== y) {
          if (i.value ? s.value = f : a.form && a.field && (a.form[a.field] = f), l.value = y, n("update:modelValue", f), n("update:checked", f), c.value) {
            c.value = !1;
            return;
          }
          n("changed", { value: f, old_value: y });
        }
      }
    ), re(
      () => a.field && a.form ? a.form[a.field] : null,
      (f) => {
        u.value = i.value ? s.value : f;
      },
      { deep: !0 }
    ), re(
      () => s.value,
      (f) => {
        u.value = f;
      }
    ), re(
      () => a.checked,
      (f) => {
        !a.form && !s.value && (u.value = f);
      }
    );
    const d = I(() => a.label || (a.field ? o(a.field) : "")), m = I(() => {
      var f, y;
      return a.error || ((y = (f = a.form) == null ? void 0 : f.errors) == null ? void 0 : y[a.field]);
    }), v = I(() => a.id || a.field || `checkbox-${Math.random().toString(36).substr(2, 9)}`);
    return t({
      setValueSilently: (f) => {
        u.value = f, c.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, y) => {
      var x, P;
      return E(), F("div", {
        class: X(e.noLabel ? "mb-2" : "mb-4")
      }, [
        !e.noLabel && e.label ? (E(), W(w(Yr), {
          key: 0,
          customClass: e.labelCustomClass,
          for: v.value,
          value: d.value,
          sublabel: e.sublabel,
          required: e.required,
          tooltip: e.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])) : J("", !0),
        N("label", uh, [
          (x = f.$slots) != null && x.leftDescription ? z(f.$slots, "leftDescription", { key: 0 }) : e.leftDescription ? (E(), F("span", ch, Q(e.leftDescription === !0 ? "Disable" : e.leftDescription), 1)) : J("", !0),
          ot(N("input", {
            type: "checkbox",
            id: v.value,
            value: u.value,
            "onUpdate:modelValue": y[0] || (y[0] = (A) => u.value = A),
            disabled: e.disabled,
            required: e.required,
            name: e.name || e.field,
            class: X(["text-accent-600 focus:ring-accent-500 rounded border-gray-300 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-accent-500 dark:focus:ring-offset-gray-800 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50", { [e.customClass]: e.customClass }])
          }, null, 10, dh), [
            [Lp, u.value]
          ]),
          (P = f.$slots) != null && P.rightDescription ? z(f.$slots, "rightDescription", { key: 2 }) : e.rightDescription ? (E(), F("span", fh, Q(e.rightDescription === !0 ? "Enable" : e.rightDescription), 1)) : J("", !0)
        ]),
        m.value ? (E(), W(w(cr), {
          key: 1,
          message: m.value,
          class: "mt-2"
        }, null, 8, ["message"])) : J("", !0)
      ], 2);
    };
  }
}), zn = /* @__PURE__ */ K({
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
    return (t, r) => (E(), F("div", {
      class: X(e.noLabel ? "mb-2" : "mb-4")
    }, [
      e.noLabel ? J("", !0) : (E(), W(w(Yr), {
        key: 0,
        customClass: e.labelCustomClass,
        for: e.field,
        value: e.computedLabel,
        sublabel: e.sublabel,
        required: e.required,
        tooltip: e.tooltip
      }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
      z(t.$slots, "default"),
      e.hasFormErrors ? (E(), W(w(cr), {
        key: 1,
        message: e.formError,
        class: "mt-2"
      }, null, 8, ["message"])) : J("", !0)
    ], 2));
  }
}), hh = /* @__PURE__ */ K({
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
    const r = e, n = t, a = I({
      get: () => r.modelValue,
      set: (o) => n("update:modelValue", o)
    });
    return (o, s) => (E(), W(w(mi), {
      id: e.field,
      type: e.type,
      class: X({ [e.inputCustomClass]: !!e.inputCustomClass }),
      modelValue: a.value,
      "onUpdate:modelValue": s[0] || (s[0] = (i) => a.value = i),
      required: e.required,
      disabled: e.disabled,
      autocomplete: e.computedAutocomplete,
      min: e.min,
      max: e.max,
      step: e.step,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      pattern: e.pattern,
      name: e.computedName,
      "no-number-spinners": e.noNumberSpinners
    }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name", "no-number-spinners"]));
  }
}), mh = ["id", "required", "disabled", "name"], yh = /* @__PURE__ */ K({
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
    const r = e, n = t, a = I({
      get: () => r.modelValue,
      set: (o) => n("update:modelValue", o)
    });
    return (o, s) => ot((E(), F("select", {
      "onUpdate:modelValue": s[0] || (s[0] = (i) => a.value = i),
      id: e.field,
      required: e.required,
      disabled: e.disabled,
      name: e.computedName,
      class: X(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none", { [e.inputCustomClass]: !!e.inputCustomClass }])
    }, [
      z(o.$slots, "default")
    ], 10, mh)), [
      [Hc, a.value]
    ]);
  }
}), gh = { class: "relative flex w-full" }, vh = /* @__PURE__ */ K({
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
    const r = e, n = t, a = I({
      get: () => r.modelValue,
      set: (i) => n("update:modelValue", i)
    }), o = I(() => !r.hidePasswordToggler), s = () => {
      n("toggle-password");
    };
    return (i, u) => (E(), F("div", gh, [
      Y(w(mi), {
        id: e.field,
        type: e.displayType,
        class: X({ [e.inputCustomClass]: !!e.inputCustomClass }),
        modelValue: a.value,
        "onUpdate:modelValue": u[0] || (u[0] = (l) => a.value = l),
        required: e.required,
        disabled: e.disabled,
        autocomplete: e.computedAutocomplete,
        placeholder: e.placeholder,
        autofocus: e.autofocus,
        pattern: e.pattern,
        name: e.computedName
      }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "placeholder", "autofocus", "pattern", "name"]),
      o.value ? (E(), F("div", {
        key: 0,
        onClick: s,
        class: X(["absolute top-1/2 -translate-y-1/2 right-1 z-2 flex size-8 rounded-lg hover:bg-primary-100 cursor-pointer items-center justify-center transition-all text-sm leading-normal text-gray-600 dark:text-gray-400", { "bg-primary-50": e.displayType !== "password" }])
      }, [
        Y(Re, {
          name: e.displayType === "password" ? "$eye" : "$eye-off"
        }, null, 8, ["name"])
      ], 2)) : J("", !0)
    ]));
  }
}), bh = { class: "relative flex w-full max-w-full items-stretch" }, wh = ["href"], xh = /* @__PURE__ */ K({
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
    const r = e, n = t, a = I({
      get: () => r.modelValue,
      set: (s) => n("update:modelValue", s)
    }), o = I(() => ({
      "rounded-l-none shadow-none": r.addon,
      "rounded-r-none": r.submitBtn || r.whatsApp,
      [r.inputCustomClass]: !!r.inputCustomClass
    }));
    return (s, i) => {
      var u;
      return E(), F("div", bh, [
        e.addon ? (E(), F("span", {
          key: 0,
          class: X(["flex items-center rounded-l-md rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500 dark:text-gray-400", { shadow: !e.disabled }])
        }, Q(e.addon), 3)) : J("", !0),
        Y(w(mi), {
          id: e.field,
          type: e.type,
          class: X(o.value),
          modelValue: a.value,
          "onUpdate:modelValue": i[0] || (i[0] = (l) => a.value = l),
          required: e.required,
          disabled: e.disabled,
          autocomplete: e.computedAutocomplete,
          min: e.min,
          max: e.max,
          step: e.step,
          placeholder: e.placeholder,
          autofocus: e.autofocus,
          pattern: e.pattern,
          name: e.computedName,
          "no-number-spinners": e.noNumberSpinners
        }, null, 8, ["id", "type", "class", "modelValue", "required", "disabled", "autocomplete", "min", "max", "step", "placeholder", "autofocus", "pattern", "name", "no-number-spinners"]),
        e.form ? (E(), F(ne, { key: 1 }, [
          e.submitBtn ? (E(), W(w(Ta), {
            key: 0,
            form: e.form,
            class: X(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
            id: `submit-button-${e.field}`
          }, {
            default: V(() => [
              fe(Q(e.submitBtn), 1)
            ]),
            _: 1
          }, 8, ["form", "class", "id"])) : J("", !0),
          (u = s.$slots) != null && u.submit ? (E(), W(w(Ta), {
            key: 1,
            form: e.form,
            class: X(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
            id: "button-input"
          }, {
            default: V(() => [
              z(s.$slots, "submit")
            ]),
            _: 3
          }, 8, ["form", "class"])) : J("", !0)
        ], 64)) : J("", !0),
        e.whatsApp ? (E(), F("a", {
          key: 2,
          class: X(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", e.buttonCustomClass]),
          href: e.whatsApp,
          target: "_blank"
        }, [
          Y(Re, {
            name: "$whatsapp",
            size: "2xl"
          })
        ], 10, wh)) : J("", !0)
      ]);
    };
  }
});
function Sh(e, t, r, n) {
  const a = j(), o = j(), s = j(!1), i = j(!1);
  return me(() => {
    s.value = !t, a.value = s.value ? r.value : t && e ? t[e] : null;
  }), re(
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
  ), re(
    () => e && t ? t[e] : null,
    (c) => {
      a.value = s.value ? r.value : c;
    },
    { deep: !0 }
  ), re(
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
function Eh(e = "password") {
  const t = j(e);
  return {
    displayType: t,
    togglePassword: () => {
      t.value = t.value === "password" ? "text" : "password";
    }
  };
}
function Ch(e, t, r) {
  const n = I(() => !!(r || e != null && e.errors && t && e.errors[t])), a = I(() => r || (e != null && e.errors && t && e.errors[t] ? e.errors[t] : null));
  return {
    hasFormErrors: n,
    formError: a,
    updateFormValue: (s) => {
      e && t && (e[t] = s);
    }
  };
}
function Ph() {
  const e = (i) => i ? i.split("_").join(" ").split(" ").map((u) => u.charAt(0).toUpperCase() + u.slice(1)).join(" ") : "";
  return {
    ucwords: e,
    getComputedLabel: (i, u) => I(() => i || (u ? e(u) : "")),
    getComputedName: (i, u) => I(() => i ?? u ?? ""),
    getComputedAutocomplete: (i, u) => I(() => i ?? u ?? ""),
    isDelegatedType: (i) => ["textarea", "switch", "checkbox"].includes(i || ""),
    isPasswordType: (i) => i === "password",
    isSelectType: (i) => i === "select"
  };
}
const Oh = /* @__PURE__ */ K({
  __name: "Input",
  props: /* @__PURE__ */ St({
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
  emits: /* @__PURE__ */ St(["changed", "update:modelValue"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r, o = Jr(e, "modelValue"), { getComputedLabel: s, getComputedName: i, getComputedAutocomplete: u, isPasswordType: l, isSelectType: c } = Ph(), { value: d, setValueSilently: m, getPreviousValue: v } = Sh(n.field, n.form, o, a), { displayType: p, togglePassword: h } = Eh(n.type), { hasFormErrors: f, formError: y } = Ch(n.form, n.field, n.error), x = s(n.label, n.field), P = i(n.name, n.field), A = u(n.autocomplete, n.field), T = I(() => n.addon || n.submitBtn || n.whatsApp), $ = I(() => n.type === "textarea" ? "textarea" : n.type === "switch" ? "switch" : n.type === "checkbox" ? "checkbox" : n.type === "select" ? "select" : l(n.type) ? "password" : T.value ? "with-actions" : "base");
    return t({
      togglePassword: h,
      setValueSilently: m,
      getPreviousValue: v
    }), (O, _) => {
      var M, D, R, g, C;
      return $.value === "textarea" ? (E(), W(w(Bh), {
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
        name: w(P),
        sublabel: e.sublabel,
        "submit-btn": e.submitBtn,
        "whats-app": e.whatsApp,
        autocomplete: w(A),
        tooltip: e.tooltip,
        "custom-class": e.inputCustomClass,
        "label-custom-class": e.labelCustomClass,
        "button-custom-class": e.buttonCustomClass,
        error: e.error,
        inputmode: e.inputmode,
        modelValue: w(d),
        "onUpdate:modelValue": _[0] || (_[0] = (S) => tr(d) ? d.value = S : null),
        onChanged: _[1] || (_[1] = (S) => a("changed", S))
      }, Hn({ _: 2 }, [
        (M = O.$slots) != null && M.submit ? {
          name: "submit",
          fn: V(() => [
            z(O.$slots, "submit")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "addon", "placeholder", "no-label", "autofocus", "rows", "name", "sublabel", "submit-btn", "whats-app", "autocomplete", "tooltip", "custom-class", "label-custom-class", "button-custom-class", "error", "inputmode", "modelValue"])) : $.value === "switch" ? (E(), W(w(Uv), {
        key: 1,
        form: e.form,
        field: e.field,
        label: e.label,
        required: e.required,
        disabled: e.disabled,
        "no-label": e.noLabel,
        name: w(P),
        sublabel: e.sublabel,
        tooltip: e.tooltip,
        "left-description": e.leftDescription,
        "right-description": e.rightDescription,
        "custom-class": e.inputCustomClass,
        "label-custom-class": e.labelCustomClass,
        error: e.error,
        inputmode: e.inputmode,
        modelValue: w(d),
        "onUpdate:modelValue": _[2] || (_[2] = (S) => tr(d) ? d.value = S : null),
        onChanged: _[3] || (_[3] = (S) => a("changed", S))
      }, Hn({ _: 2 }, [
        (D = O.$slots) != null && D.leftDescription ? {
          name: "leftDescription",
          fn: V(() => [
            z(O.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (R = O.$slots) != null && R.rightDescription ? {
          name: "rightDescription",
          fn: V(() => [
            z(O.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "inputmode", "modelValue"])) : $.value === "checkbox" ? (E(), W(w(ph), {
        key: 2,
        form: e.form,
        field: e.field,
        label: e.label,
        required: e.required,
        disabled: e.disabled,
        "no-label": e.noLabel,
        name: w(P),
        sublabel: e.sublabel,
        tooltip: e.tooltip,
        "left-description": e.leftDescription,
        "right-description": e.rightDescription,
        "custom-class": e.inputCustomClass,
        "label-custom-class": e.labelCustomClass,
        error: e.error,
        inputmode: e.inputmode,
        modelValue: w(d),
        "onUpdate:modelValue": _[4] || (_[4] = (S) => tr(d) ? d.value = S : null),
        onChanged: _[5] || (_[5] = (S) => a("changed", S))
      }, Hn({ _: 2 }, [
        (g = O.$slots) != null && g.leftDescription ? {
          name: "leftDescription",
          fn: V(() => [
            z(O.$slots, "leftDescription")
          ]),
          key: "0"
        } : void 0,
        (C = O.$slots) != null && C.rightDescription ? {
          name: "rightDescription",
          fn: V(() => [
            z(O.$slots, "rightDescription")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["form", "field", "label", "required", "disabled", "no-label", "name", "sublabel", "tooltip", "left-description", "right-description", "custom-class", "label-custom-class", "error", "inputmode", "modelValue"])) : $.value === "select" ? (E(), W(w(zn), {
        key: 3,
        field: e.field,
        label: e.label,
        "no-label": e.noLabel,
        sublabel: e.sublabel,
        tooltip: e.tooltip,
        required: e.required,
        "label-custom-class": e.labelCustomClass,
        "computed-label": w(x),
        "has-form-errors": w(f),
        "form-error": w(y)
      }, {
        default: V(() => [
          Y(w(yh), {
            field: e.field,
            name: e.name,
            required: e.required,
            disabled: e.disabled,
            "input-custom-class": e.inputCustomClass,
            "computed-name": w(P),
            modelValue: w(d),
            "onUpdate:modelValue": _[6] || (_[6] = (S) => tr(d) ? d.value = S : null)
          }, {
            default: V(() => [
              z(O.$slots, "default")
            ]),
            _: 3
          }, 8, ["field", "name", "required", "disabled", "input-custom-class", "computed-name", "modelValue"])
        ]),
        _: 3
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : $.value === "password" ? (E(), W(w(zn), {
        key: 4,
        field: e.field,
        label: e.label,
        "no-label": e.noLabel,
        sublabel: e.sublabel,
        tooltip: e.tooltip,
        required: e.required,
        "label-custom-class": e.labelCustomClass,
        "computed-label": w(x),
        "has-form-errors": w(f),
        "form-error": w(y)
      }, {
        default: V(() => [
          Y(w(vh), {
            field: e.field,
            name: e.name,
            required: e.required,
            disabled: e.disabled,
            placeholder: e.placeholder,
            autofocus: e.autofocus,
            pattern: e.pattern,
            autocomplete: e.autocomplete,
            "hide-password-toggler": e.hidePasswordToggler,
            "input-custom-class": e.inputCustomClass,
            "computed-name": w(P),
            "computed-autocomplete": w(A),
            "display-type": w(p),
            inputmode: e.inputmode,
            modelValue: w(d),
            "onUpdate:modelValue": _[7] || (_[7] = (S) => tr(d) ? d.value = S : null),
            onTogglePassword: w(h)
          }, null, 8, ["field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "autocomplete", "hide-password-toggler", "input-custom-class", "computed-name", "computed-autocomplete", "display-type", "inputmode", "modelValue", "onTogglePassword"])
        ]),
        _: 1
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : $.value === "with-actions" ? (E(), W(w(zn), {
        key: 5,
        field: e.field,
        label: e.label,
        "no-label": e.noLabel,
        sublabel: e.sublabel,
        tooltip: e.tooltip,
        required: e.required,
        "label-custom-class": e.labelCustomClass,
        "computed-label": w(x),
        "has-form-errors": w(f),
        "form-error": w(y)
      }, {
        default: V(() => {
          var S;
          return [
            Y(w(xh), {
              type: e.type,
              field: e.field,
              name: e.name,
              required: e.required,
              disabled: e.disabled,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              pattern: e.pattern,
              min: e.min,
              max: e.max,
              step: e.step,
              autocomplete: e.autocomplete,
              "input-custom-class": e.inputCustomClass,
              "button-custom-class": e.buttonCustomClass,
              addon: e.addon,
              "submit-btn": e.submitBtn,
              "whats-app": e.whatsApp,
              "computed-name": w(P),
              "computed-autocomplete": w(A),
              inputmode: e.inputmode,
              form: e.form,
              "no-number-spinners": e.noNumberSpinners,
              modelValue: w(d),
              "onUpdate:modelValue": _[8] || (_[8] = (b) => tr(d) ? d.value = b : null)
            }, Hn({ _: 2 }, [
              (S = O.$slots) != null && S.submit ? {
                name: "submit",
                fn: V(() => [
                  z(O.$slots, "submit")
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["type", "field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "min", "max", "step", "autocomplete", "input-custom-class", "button-custom-class", "addon", "submit-btn", "whats-app", "computed-name", "computed-autocomplete", "inputmode", "form", "no-number-spinners", "modelValue"])
          ];
        }),
        _: 3
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"])) : (E(), W(w(zn), {
        key: 6,
        field: e.field,
        label: e.label,
        "no-label": e.noLabel,
        sublabel: e.sublabel,
        tooltip: e.tooltip,
        required: e.required,
        "label-custom-class": e.labelCustomClass,
        "computed-label": w(x),
        "has-form-errors": w(f),
        "form-error": w(y)
      }, {
        default: V(() => [
          Y(w(hh), {
            type: e.type,
            field: e.field,
            name: e.name,
            required: e.required,
            disabled: e.disabled,
            placeholder: e.placeholder,
            autofocus: e.autofocus,
            pattern: e.pattern,
            min: e.min,
            max: e.max,
            step: e.step,
            autocomplete: e.autocomplete,
            "input-custom-class": e.inputCustomClass,
            "computed-name": w(P),
            "computed-autocomplete": w(A),
            inputmode: e.inputmode,
            "no-number-spinners": e.noNumberSpinners,
            modelValue: w(d),
            "onUpdate:modelValue": _[9] || (_[9] = (S) => tr(d) ? d.value = S : null)
          }, null, 8, ["type", "field", "name", "required", "disabled", "placeholder", "autofocus", "pattern", "min", "max", "step", "autocomplete", "input-custom-class", "computed-name", "computed-autocomplete", "inputmode", "no-number-spinners", "modelValue"])
        ]),
        _: 1
      }, 8, ["field", "label", "no-label", "sublabel", "tooltip", "required", "label-custom-class", "computed-label", "has-form-errors", "form-error"]));
    };
  }
}), Ah = { class: "text-sm text-red-600 dark:text-red-400" }, cr = /* @__PURE__ */ K({
  __name: "InputError",
  props: {
    message: {}
  },
  setup(e) {
    return (t, r) => ot((E(), F("div", null, [
      N("p", Ah, Q(e.message), 1)
    ], 512)), [
      [mr, e.message]
    ]);
  }
}), kh = { key: 0 }, Th = { key: 1 }, $h = {
  key: 3,
  class: "ml-2 text-xs text-gray-500 dark:text-gray-400"
}, Dh = {
  key: 4,
  class: "ml-1 text-red-500 dark:text-red-400"
}, Yr = {
  __name: "InputLabel",
  props: ["value", "sublabel", "required", "customClass", "tooltip"],
  setup(e) {
    return (t, r) => (E(), F("label", {
      class: X(["mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200", e.customClass])
    }, [
      e.value ? (E(), F("span", kh, Q(e.value), 1)) : (E(), F("span", Th, [
        z(t.$slots, "default")
      ])),
      e.tooltip ? (E(), W(w(LT), {
        key: 2,
        content: e.tooltip,
        class: "ml-1 inline-block"
      }, {
        default: V(() => [
          Y(Re, {
            name: "$help",
            class: "mx-1 cursor-help"
          })
        ]),
        _: 1
      }, 8, ["content"])) : J("", !0),
      e.sublabel ? (E(), F("span", $h, Q(e.sublabel), 1)) : J("", !0),
      e.required ? (E(), F("span", Dh, "*")) : J("", !0)
    ], 2));
  }
}, Rh = ["value", "inputmode"], mi = /* @__PURE__ */ K({
  __name: "TextInput",
  props: {
    modelValue: {},
    inputmode: {},
    noNumberSpinners: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { expose: t, emit: r }) {
    const n = r, a = j(null), o = (s) => {
      const i = s.target;
      n("update:modelValue", i.value);
    };
    return me(() => {
      var s;
      (s = a.value) != null && s.hasAttribute("autofocus") && a.value.focus();
    }), t({
      /** Focus the input element */
      focus: () => {
        var s;
        return (s = a.value) == null ? void 0 : s.focus();
      }
    }), (s, i) => (E(), F("input", {
      class: X(["focusable focus:border-primary-500 focus:ring-primary-500 relative m-0 block w-full flex-auto rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500", { "no-spinners": e.noNumberSpinners }]),
      value: e.modelValue,
      inputmode: e.inputmode,
      onInput: o,
      ref_key: "input",
      ref: a
    }, null, 42, Rh));
  }
}), Fh = { class: "relative flex w-full max-w-full items-stretch" }, _h = ["id", "rows", "required", "disabled", "autocomplete", "placeholder", "autofocus", "name"], qh = ["href"], Bh = /* @__PURE__ */ K({
  __name: "Textarea",
  props: /* @__PURE__ */ St({
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
  emits: /* @__PURE__ */ St(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r;
    function o(h) {
      return h.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = j(!1), i = Jr(e, "modelValue"), u = j(), l = j(), c = j(!1);
    me(() => {
      var h;
      s.value = !n.form, u.value = s.value ? i.value : (h = n.form) == null ? void 0 : h[n.field];
    }), re(
      () => u.value,
      (h, f) => {
        if (h !== f) {
          if (s.value ? i.value = h : n.form && n.field && (n.form[n.field] = h), l.value = f, a("update:modelValue", h), c.value) {
            c.value = !1;
            return;
          }
          a("changed", { value: h, old_value: f });
        }
      }
    ), re(
      () => n.field && n.form ? n.form[n.field] : null,
      (h) => {
        u.value = s.value ? i.value : h;
      },
      { deep: !0 }
    ), re(
      () => i.value,
      (h) => {
        u.value = h;
      }
    );
    const d = I(() => n.label || (n.field ? o(n.field) : "")), m = I(() => {
      var h, f;
      return n.error || ((f = (h = n.form) == null ? void 0 : h.errors) == null ? void 0 : f[n.field]);
    });
    return t({
      setValueSilently: (h) => {
        u.value = h, c.value = !0;
      },
      getPreviousValue: () => l.value
    }), (h, f) => (E(), W(w(hi), {
      field: e.field,
      label: d.value,
      sublabel: e.sublabel,
      tooltip: e.tooltip,
      required: e.required,
      noLabel: e.noLabel,
      labelCustomClass: e.labelCustomClass,
      form: e.form,
      error: m.value,
      htmlFor: e.field
    }, {
      default: V(() => {
        var y, x;
        return [
          N("div", Fh, [
            e.addon ? (E(), F("span", {
              key: 0,
              class: X(["border-gray flex items-center rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center whitespace-nowrap text-gray-500 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-900/40 dark:text-gray-400", { shadow: !e.disabled }])
            }, Q(e.addon), 3)) : J("", !0),
            ot(N("textarea", {
              id: e.field,
              class: X(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500", {
                "rounded-l-none shadow-none": e.addon,
                "rounded-r-none": !!e.submitBtn || e.whatsApp || ((y = h.$slots) == null ? void 0 : y.submit),
                [e.customClass]: !!e.customClass
              }]),
              rows: e.rows,
              "onUpdate:modelValue": f[0] || (f[0] = (P) => u.value = P),
              required: e.required,
              disabled: e.disabled,
              autocomplete: e.autocomplete || e.field,
              placeholder: e.placeholder,
              autofocus: e.autofocus,
              name: e.name || e.field
            }, null, 10, _h), [
              [zc, u.value]
            ]),
            e.form ? (E(), F(ne, { key: 1 }, [
              e.submitBtn ? (E(), W(w(Ta), {
                key: 0,
                form: e.form,
                class: X(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: `submit-button-${e.field}`
              }, {
                default: V(() => [
                  fe(Q(e.submitBtn), 1)
                ]),
                _: 1
              }, 8, ["form", "class", "id"])) : J("", !0),
              (x = h.$slots) != null && x.submit ? (E(), W(w(Ta), {
                key: 1,
                form: e.form,
                class: X(["z-2 inline-block rounded-l-none", e.buttonCustomClass]),
                id: "button-textarea"
              }, {
                default: V(() => [
                  z(h.$slots, "submit")
                ]),
                _: 3
              }, 8, ["form", "class"])) : J("", !0)
            ], 64)) : J("", !0),
            e.whatsApp ? (E(), F("a", {
              key: 2,
              class: X(["bg-primary hover:bg-primary-700 focus:bg-primary-600 active:bg-primary-700 z-2 inline-block rounded-r px-2 py-2 text-xs leading-normal font-medium text-white uppercase shadow transition duration-150 ease-in-out hover:shadow-lg focus:z-3 focus:shadow-lg focus:ring-0 focus:outline-hidden active:shadow-lg", e.buttonCustomClass]),
              href: e.whatsApp,
              target: "_blank"
            }, [
              Y(Re, {
                name: "$whatsapp",
                size: "2xl"
              })
            ], 10, qh)) : J("", !0)
          ])
        ];
      }),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
});
function ut(e, t) {
  const r = typeof e == "string" && !t ? `${e}Context` : t, n = Symbol(r);
  return [(s) => {
    const i = di(n, s);
    if (i || i === null) return i;
    throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (s) => (Cn(n, s), s)];
}
function Ue() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function ed(e, t, r) {
  const n = r.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && n.addEventListener(e, t, { once: !0 }), n.dispatchEvent(a);
}
function Ih(e) {
  return e == null;
}
function Lh(e, t) {
  var r;
  const n = Pn();
  return yt(() => {
    n.value = e();
  }, {
    ...t,
    flush: (r = t == null ? void 0 : t.flush) !== null && r !== void 0 ? r : "sync"
  }), Mp(n);
}
function An(e, t) {
  return Wc() ? (fi(e, t), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Mh() {
  const e = /* @__PURE__ */ new Set(), t = (o) => {
    e.delete(o);
  };
  return {
    on: (o) => {
      e.add(o);
      const s = () => t(o);
      return An(s), { off: s };
    },
    off: t,
    trigger: (...o) => Promise.all(Array.from(e).map((s) => s(...o))),
    clear: () => {
      e.clear();
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Nh(e) {
  let t = !1, r;
  const n = Kc(!0);
  return ((...a) => (t || (r = n.run(() => e(...a)), t = !0), r));
}
const Kt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const jh = (e) => typeof e < "u", Vh = Object.prototype.toString, Uh = (e) => Vh.call(e) === "[object Object]";
function fo(e) {
  return Array.isArray(e) ? e : [e];
}
function Hh(e) {
  return Sr();
}
// @__NO_SIDE_EFFECTS__
function td(e) {
  if (!Kt) return e;
  let t = 0, r, n;
  const a = () => {
    t -= 1, n && t <= 0 && (n.stop(), r = void 0, n = void 0);
  };
  return ((...o) => (t += 1, n || (n = Kc(!0), r = n.run(() => e(...o))), An(a), r));
}
function rd(e, t = 1e4) {
  return Np((r, n) => {
    let a = Ge(e), o;
    const s = () => setTimeout(() => {
      a = Ge(e), n();
    }, Ge(t));
    return An(() => {
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
function zh(e, t) {
  Hh() && pi(e, t);
}
function nd(e, t, r = {}) {
  const { immediate: n = !0, immediateCallback: a = !1 } = r, o = Pn(!1);
  let s;
  function i() {
    s && (clearTimeout(s), s = void 0);
  }
  function u() {
    o.value = !1, i();
  }
  function l(...c) {
    a && e(), i(), o.value = !0, s = setTimeout(() => {
      o.value = !1, s = void 0, e(...c);
    }, Ge(t));
  }
  return n && (o.value = !0, Kt && l()), An(u), {
    isPending: pr(o),
    start: l,
    stop: u
  };
}
function Wh(e, t, r) {
  return re(e, t, {
    ...r,
    immediate: !0
  });
}
const yi = Kt ? window : void 0;
function Er(e) {
  var t;
  const r = Ge(e);
  return (t = r == null ? void 0 : r.$el) !== null && t !== void 0 ? t : r;
}
function Hr(...e) {
  const t = (n, a, o, s) => (n.addEventListener(a, o, s), () => n.removeEventListener(a, o, s)), r = I(() => {
    const n = fo(Ge(e[0])).filter((a) => a != null);
    return n.every((a) => typeof a != "string") ? n : void 0;
  });
  return Wh(() => {
    var n, a;
    return [
      (n = (a = r.value) === null || a === void 0 ? void 0 : a.map((o) => Er(o))) !== null && n !== void 0 ? n : [yi].filter((o) => o != null),
      fo(Ge(r.value ? e[1] : e[0])),
      fo(w(r.value ? e[2] : e[1])),
      Ge(r.value ? e[3] : e[2])
    ];
  }, ([n, a, o, s], i, u) => {
    if (!(n != null && n.length) || !(a != null && a.length) || !(o != null && o.length)) return;
    const l = Uh(s) ? { ...s } : s, c = n.flatMap((d) => a.flatMap((m) => o.map((v) => t(d, m, v, l))));
    u(() => {
      c.forEach((d) => d());
    });
  }, { flush: "post" });
}
// @__NO_SIDE_EFFECTS__
function Kh() {
  const e = Pn(!1), t = Sr();
  return t && me(() => {
    e.value = !0;
  }, t), e;
}
function Gh(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Jh(...e) {
  let t, r, n = {};
  e.length === 3 ? (t = e[0], r = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, r = e[0], n = e[1]) : (t = e[0], r = e[1]) : (t = !0, r = e[0]);
  const { target: a = yi, eventName: o = "keydown", passive: s = !1, dedupe: i = !1 } = n, u = Gh(t);
  return Hr(a, o, (c) => {
    c.repeat && Ge(i) || u(c) && r(c);
  }, s);
}
function Yh(e) {
  return JSON.parse(JSON.stringify(e));
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t, r, n = {}) {
  var a, o;
  const { clone: s = !1, passive: i = !1, eventName: u, deep: l = !1, defaultValue: c, shouldEmit: d } = n, m = Sr(), v = r || (m == null ? void 0 : m.emit) || (m == null || (a = m.$emit) === null || a === void 0 ? void 0 : a.bind(m)) || (m == null || (o = m.proxy) === null || o === void 0 || (o = o.$emit) === null || o === void 0 ? void 0 : o.bind(m == null ? void 0 : m.proxy));
  let p = u;
  t || (t = "modelValue"), p = p || `update:${t.toString()}`;
  const h = (x) => s ? typeof s == "function" ? s(x) : Yh(x) : x, f = () => jh(e[t]) ? h(e[t]) : c, y = (x) => {
    d ? d(x) && v(p, x) : v(p, x);
  };
  if (i) {
    const x = j(f());
    let P = !1;
    return re(() => e[t], (A) => {
      P || (P = !0, x.value = h(A), je(() => P = !1));
    }), re(x, (A) => {
      !P && (A !== e[t] || l) && y(A);
    }, { deep: l }), x;
  } else return I({
    get() {
      return f();
    },
    set(x) {
      y(x);
    }
  });
}
function gi(e) {
  return e ? e.flatMap((t) => t.type === ne ? gi(t.children) : [t]) : [];
}
const Xh = ["INPUT", "TEXTAREA"];
function ml(e, t, r, n = {}) {
  if (!t || n.enableIgnoredElement && Xh.includes(t.nodeName)) return null;
  const { arrowKeyOptions: a = "both", attributeName: o = "[data-reka-collection-item]", itemsArray: s = [], loop: i = !0, dir: u = "ltr", preventScroll: l = !0, focus: c = !1 } = n, [d, m, v, p, h, f] = [
    e.key === "ArrowRight",
    e.key === "ArrowLeft",
    e.key === "ArrowUp",
    e.key === "ArrowDown",
    e.key === "Home",
    e.key === "End"
  ], y = v || p, x = d || m;
  if (!h && !f && (!y && !x || a === "vertical" && x || a === "horizontal" && y)) return null;
  const P = r ? Array.from(r.querySelectorAll(o)) : s;
  if (!P.length) return null;
  l && e.preventDefault();
  let A = null;
  return x || y ? A = ad(P, t, {
    goForward: y ? p : u === "ltr" ? d : m,
    loop: i
  }) : h ? A = P.at(0) || null : f && (A = P.at(-1) || null), c && (A == null || A.focus()), A;
}
function ad(e, t, r, n = e.includes(t) ? e.length : e.length + 1) {
  if (--n === 0) return null;
  const a = e.indexOf(t);
  let o;
  if (a === -1 ? o = r.goForward ? 0 : e.length - 1 : o = r.goForward ? a + 1 : a - 1, !r.loop && (o < 0 || o >= e.length)) return null;
  const s = (o + e.length) % e.length, i = e[s];
  return i ? i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false" ? ad(e, i, r, n) : i : null;
}
const [vi] = /* @__PURE__ */ ut("ConfigProvider");
function po(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ds(e, t, r = ".", n) {
  if (!po(t))
    return Ds(e, {}, r, n);
  const a = { ...t };
  for (const o of Object.keys(e)) {
    if (o === "__proto__" || o === "constructor")
      continue;
    const s = e[o];
    s != null && (n && n(a, o, s, r) || (Array.isArray(s) && Array.isArray(a[o]) ? a[o] = [...s, ...a[o]] : po(s) && po(a[o]) ? a[o] = Ds(
      s,
      a[o],
      (r ? `${r}.` : "") + o.toString(),
      n
    ) : a[o] = s));
  }
  return a;
}
function Qh(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((r, n) => Ds(r, n, "", e), {})
  );
}
const od = Qh(), Zh = /* @__PURE__ */ td(() => {
  const e = j(/* @__PURE__ */ new Map()), t = j(), r = I(() => {
    for (const o of e.value.values()) if (o) return !0;
    return !1;
  }), n = vi({ scrollBody: j(!0) }), a = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", t.value = void 0;
  };
  return re(r, (o, s) => {
    var c;
    if (!Kt) return;
    if (!o) {
      s && a();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const i = window.innerWidth - document.documentElement.clientWidth, u = {
      padding: i,
      margin: 0
    }, l = (c = n.scrollBody) != null && c.value ? typeof n.scrollBody.value == "object" ? od({
      padding: n.scrollBody.value.padding === !0 ? i : n.scrollBody.value.padding,
      margin: n.scrollBody.value.margin === !0 ? i : n.scrollBody.value.margin
    }, u) : u : {
      padding: 0,
      margin: 0
    };
    i > 0 && (document.body.style.paddingRight = typeof l.padding == "number" ? `${l.padding}px` : String(l.padding), document.body.style.marginRight = typeof l.margin == "number" ? `${l.margin}px` : String(l.margin), document.documentElement.style.setProperty("--scrollbar-width", `${i}px`), document.body.style.overflow = "hidden"), je(() => {
      r.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function sd(e) {
  const t = Math.random().toString(36).substring(2, 7), r = Zh();
  r.value.set(t, e ?? !1);
  const n = I({
    get: () => r.value.get(t) ?? !1,
    set: (a) => r.value.set(t, a)
  });
  return zh(() => {
    r.value.delete(t);
  }), n;
}
function bi(e) {
  const t = vi({ dir: j("ltr") });
  return I(() => {
    var r;
    return (e == null ? void 0 : e.value) || ((r = t.dir) == null ? void 0 : r.value) || "ltr";
  });
}
function kn(e) {
  const t = Sr(), r = t == null ? void 0 : t.type.emits, n = {};
  return r != null && r.length || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), r == null || r.forEach((a) => {
    n[jp(Gc(a))] = (...o) => e(a, ...o);
  }), n;
}
let ho = 0;
function em() {
  yt((e) => {
    if (!Kt) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? yl()), document.body.insertAdjacentElement("beforeend", t[1] ?? yl()), ho++, e(() => {
      ho === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((r) => r.remove()), ho--;
    });
  });
}
function yl() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function tm(e) {
  return I(() => {
    var t;
    return Ge(e) ? !!((t = Er(e)) != null && t.closest("form")) : !0;
  });
}
function ue() {
  const e = Sr(), t = j(), r = I(() => n());
  Vp(() => {
    r.value !== n() && Up(t);
  });
  function n() {
    return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : Er(t);
  }
  const a = Object.assign({}, e.exposed), o = {};
  for (const i in e.props) Object.defineProperty(o, i, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[i]
  });
  if (Object.keys(a).length > 0) for (const i in a) Object.defineProperty(o, i, {
    enumerable: !0,
    configurable: !0,
    get: () => a[i]
  });
  Object.defineProperty(o, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = o;
  function s(i) {
    if (t.value = i, !!i && (Object.defineProperty(o, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => i instanceof Element ? i : i.$el
    }), !(i instanceof Element) && !Object.hasOwn(i, "$el"))) {
      const u = i.$.exposed, l = Object.assign({}, o);
      for (const c in u) Object.defineProperty(l, c, {
        enumerable: !0,
        configurable: !0,
        get: () => u[c]
      });
      e.exposed = l;
    }
  }
  return {
    forwardRef: s,
    currentRef: t,
    currentElement: r
  };
}
function id(e) {
  const t = Sr(), r = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((a, o) => {
    const s = (t == null ? void 0 : t.type.props[o]).default;
    return s !== void 0 && (a[o] = s), a;
  }, {}), n = Hp(e);
  return I(() => {
    const a = {}, o = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(o).forEach((s) => {
      a[Gc(s)] = o[s];
    }), Object.keys({
      ...r,
      ...a
    }).reduce((s, i) => (n.value[i] !== void 0 && (s[i] = n.value[i]), s), {});
  });
}
function Tn(e, t) {
  const r = id(e), n = t ? kn(t) : {};
  return I(() => ({
    ...r.value,
    ...n
  }));
}
function rm(e, t) {
  const r = rd(!1, 300);
  An(() => {
    r.value = !1;
  });
  const n = j(null), a = /* @__PURE__ */ Mh();
  function o() {
    n.value = null, r.value = !1;
  }
  function s(i, u) {
    if (!u) return;
    const l = i.currentTarget, c = {
      x: i.clientX,
      y: i.clientY
    }, d = nm(c, l.getBoundingClientRect()), m = am(c, d, 1), v = om(u.getBoundingClientRect()), p = im([...m, ...v]);
    n.value = p, r.value = !0;
  }
  return yt((i) => {
    if (e.value && t.value) {
      const u = (c) => s(c, t.value), l = (c) => s(c, e.value);
      e.value.addEventListener("pointerleave", u), t.value.addEventListener("pointerleave", l), i(() => {
        var c, d;
        (c = e.value) == null || c.removeEventListener("pointerleave", u), (d = t.value) == null || d.removeEventListener("pointerleave", l);
      });
    }
  }), yt((i) => {
    var u;
    if (n.value) {
      const l = (c) => {
        var f, y;
        if (!n.value || !(c.target instanceof Element)) return;
        const d = c.target, m = {
          x: c.clientX,
          y: c.clientY
        }, v = ((f = e.value) == null ? void 0 : f.contains(d)) || ((y = t.value) == null ? void 0 : y.contains(d)), p = !sm(m, n.value), h = !!d.closest("[data-grace-area-trigger]");
        v ? o() : (p || h) && (o(), a.trigger());
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
function nm(e, t) {
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
function am(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push({
        x: e.x - r,
        y: e.y + r
      }, {
        x: e.x + r,
        y: e.y + r
      });
      break;
    case "bottom":
      n.push({
        x: e.x - r,
        y: e.y - r
      }, {
        x: e.x + r,
        y: e.y - r
      });
      break;
    case "left":
      n.push({
        x: e.x + r,
        y: e.y - r
      }, {
        x: e.x + r,
        y: e.y + r
      });
      break;
    case "right":
      n.push({
        x: e.x - r,
        y: e.y - r
      }, {
        x: e.x - r,
        y: e.y + r
      });
      break;
  }
  return n;
}
function om(e) {
  const { top: t, right: r, bottom: n, left: a } = e;
  return [
    {
      x: a,
      y: t
    },
    {
      x: r,
      y: t
    },
    {
      x: r,
      y: n
    },
    {
      x: a,
      y: n
    }
  ];
}
function sm(e, t) {
  const { x: r, y: n } = e;
  let a = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const i = t[o].x, u = t[o].y, l = t[s].x, c = t[s].y;
    u > n != c > n && r < (l - i) * (n - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function im(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), lm(t);
}
function lm(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const a = e[n];
    for (; t.length >= 2; ) {
      const o = t.at(-1), s = t[t.length - 2];
      if ((o.x - s.x) * (a.y - s.y) >= (o.y - s.y) * (a.x - s.x)) t.pop();
      else break;
    }
    t.push(a);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const a = e[n];
    for (; r.length >= 2; ) {
      const o = r.at(-1), s = r[r.length - 2];
      if ((o.x - s.x) * (a.y - s.y) >= (o.y - s.y) * (a.x - s.x)) r.pop();
      else break;
    }
    r.push(a);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var um = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Br = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Kn = {}, mo = 0, ld = function(e) {
  return e && (e.host || ld(e.parentNode));
}, cm = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = ld(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, dm = function(e, t, r, n) {
  var a = cm(t, Array.isArray(e) ? e : [e]);
  Kn[r] || (Kn[r] = /* @__PURE__ */ new WeakMap());
  var o = Kn[r], s = [], i = /* @__PURE__ */ new Set(), u = new Set(a), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  a.forEach(l);
  var c = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(m) {
      if (i.has(m))
        c(m);
      else
        try {
          var v = m.getAttribute(n), p = v !== null && v !== "false", h = (Br.get(m) || 0) + 1, f = (o.get(m) || 0) + 1;
          Br.set(m, h), o.set(m, f), s.push(m), h === 1 && p && Wn.set(m, !0), f === 1 && m.setAttribute(r, "true"), p || m.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return c(t), i.clear(), mo++, function() {
    s.forEach(function(d) {
      var m = Br.get(d) - 1, v = o.get(d) - 1;
      Br.set(d, m), o.set(d, v), m || (Wn.has(d) || d.removeAttribute(n), Wn.delete(d)), v || d.removeAttribute(r);
    }), mo--, mo || (Br = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), Kn = {});
  };
}, fm = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), a = um(e);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live], script"))), dm(n, a, r, "aria-hidden")) : function() {
    return null;
  };
};
function ud(e) {
  let t;
  re(() => Er(e), (r) => {
    let n = !1;
    try {
      n = !!(r != null && r.closest("[popover]:not(:popover-open)"));
    } catch {
    }
    r && !n ? t = fm(r) : t && t();
  }), It(() => {
    t && t();
  });
}
let pm = 0;
function vr(e, t = "reka") {
  var n, a;
  let r;
  if ("useId" in Un) r = (n = Un.useId) == null ? void 0 : n.call(Un);
  else {
    const o = vi({ useId: void 0 });
    r = ((a = o.useId) == null ? void 0 : a.call(o)) ?? `${++pm}`;
  }
  return t ? `${t}-${r}` : r;
}
function hm(e) {
  const t = j(), r = I(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.width) ?? 0;
  }), n = I(() => {
    var a;
    return ((a = t.value) == null ? void 0 : a.height) ?? 0;
  });
  return me(() => {
    const a = Er(e);
    if (a) {
      t.value = {
        width: a.offsetWidth,
        height: a.offsetHeight
      };
      const o = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length) return;
        const i = s[0];
        let u, l;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          u = d.inlineSize, l = d.blockSize;
        } else
          u = a.offsetWidth, l = a.offsetHeight;
        t.value = {
          width: u,
          height: l
        };
      });
      return o.observe(a, { box: "border-box" }), () => o.unobserve(a);
    } else t.value = void 0;
  }), {
    width: r,
    height: n
  };
}
function mm(e, t) {
  const r = j(e);
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
function ym(e) {
  const t = rd("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, o) => {
      t.value = t.value + a;
      {
        const s = Ue(), i = o.map((m) => {
          var v, p;
          return {
            ...m,
            textValue: ((v = m.value) == null ? void 0 : v.textValue) ?? ((p = m.ref.textContent) == null ? void 0 : p.trim()) ?? ""
          };
        }), u = i.find((m) => m.ref === s), l = i.map((m) => m.textValue), c = vm(l, t.value, u == null ? void 0 : u.textValue), d = i.find((m) => m.textValue === c);
        return d && d.ref.focus(), d == null ? void 0 : d.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function gm(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
function vm(e, t, r) {
  const a = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, o = r ? e.indexOf(r) : -1;
  let s = gm(e, Math.max(o, 0));
  a.length === 1 && (s = s.filter((l) => l !== r));
  const u = s.find((l) => l.toLowerCase().startsWith(a.toLowerCase()));
  return u !== r ? u : void 0;
}
function bm(e, t) {
  var f;
  const r = j({}), n = j("none"), a = j(e), o = e.value ? "mounted" : "unmounted";
  let s;
  const i = ((f = t.value) == null ? void 0 : f.ownerDocument.defaultView) ?? yi, { state: u, dispatch: l } = mm(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), c = (y) => {
    var x;
    if (Kt) {
      const P = new CustomEvent(y, {
        bubbles: !1,
        cancelable: !1
      });
      (x = t.value) == null || x.dispatchEvent(P);
    }
  };
  re(e, async (y, x) => {
    var A;
    const P = x !== y;
    if (await je(), P) {
      const T = n.value, $ = Gn(t.value);
      y ? (l("MOUNT"), c("enter"), $ === "none" && c("after-enter")) : $ === "none" || $ === "undefined" || ((A = r.value) == null ? void 0 : A.display) === "none" ? (l("UNMOUNT"), c("leave"), c("after-leave")) : x && T !== $ ? (l("ANIMATION_OUT"), c("leave")) : (l("UNMOUNT"), c("after-leave"));
    }
  }, { immediate: !0 });
  const d = (y) => {
    const x = Gn(t.value), P = x.includes(CSS.escape(y.animationName)), A = u.value === "mounted" ? "enter" : "leave";
    if (y.target === t.value && P && (c(`after-${A}`), l("ANIMATION_END"), !a.value)) {
      const T = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", s = i == null ? void 0 : i.setTimeout(() => {
        var $;
        (($ = t.value) == null ? void 0 : $.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = T);
      });
    }
    y.target === t.value && x === "none" && l("ANIMATION_END");
  }, m = (y) => {
    y.target === t.value && (n.value = Gn(t.value));
  }, v = re(t, (y, x) => {
    y ? (r.value = getComputedStyle(y), y.addEventListener("animationstart", m), y.addEventListener("animationcancel", d), y.addEventListener("animationend", d)) : (l("ANIMATION_END"), s !== void 0 && (i == null || i.clearTimeout(s)), x == null || x.removeEventListener("animationstart", m), x == null || x.removeEventListener("animationcancel", d), x == null || x.removeEventListener("animationend", d));
  }, { immediate: !0 }), p = re(u, () => {
    const y = Gn(t.value);
    n.value = u.value === "mounted" ? y : "none";
  });
  return It(() => {
    v(), p();
  }), { isPresent: I(() => ["mounted", "unmountSuspended"].includes(u.value)) };
}
function Gn(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var $n = /* @__PURE__ */ K({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: r }) {
    var l;
    const { present: n, forceMount: a } = Lt(e), o = j(), { isPresent: s } = bm(n, o);
    r({ present: s });
    let i = t.default({ present: s.value });
    i = gi(i || []);
    const u = Sr();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (l = u == null ? void 0 : u.parent) != null && l.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((d) => `  - ${d}`).join(`
`)
      ].join(`
`));
    }
    return () => a.value || n.value || s.value ? Ne(t.default({ present: s.value })[0], { ref: (c) => {
      const d = Er(c);
      return typeof (d == null ? void 0 : d.hasAttribute) > "u" || (d != null && d.hasAttribute("data-reka-popper-content-wrapper") ? o.value = d.firstElementChild : o.value = d), d;
    } }) : null;
  }
});
const Rs = /* @__PURE__ */ K({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: r }) {
    return () => {
      var u;
      if (!r.default) return null;
      const n = gi(r.default()), a = n.findIndex((l) => l.type !== zp);
      if (a === -1) return n;
      const o = n[a];
      (u = o.props) == null || delete u.ref;
      const s = o.props ? ae(t, o.props) : t, i = Wp({
        ...o,
        props: {}
      }, s);
      return n.length === 1 ? i : (n[a] = i, n);
    };
  }
}), wm = [
  "area",
  "img",
  "input"
], Fe = /* @__PURE__ */ K({
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
    return typeof n == "string" && wm.includes(n) ? () => Ne(n, t) : n !== "template" ? () => Ne(e.as, t, { default: r.default }) : () => Ne(Rs, t, { default: r.default });
  }
});
function Fs() {
  const e = j(), t = I(() => {
    var r, n;
    return ["#text", "#comment"].includes((r = e.value) == null ? void 0 : r.$el.nodeName) ? (n = e.value) == null ? void 0 : n.$el.nextElementSibling : Er(e);
  });
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const [cd, xm] = /* @__PURE__ */ ut("CollapsibleRoot");
var Sm = /* @__PURE__ */ K({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    unmountOnHide: {
      type: Boolean,
      required: !1,
      default: !0
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["update:open"],
  setup(e, { expose: t, emit: r }) {
    const n = e, o = /* @__PURE__ */ Cr(n, "open", r, {
      defaultValue: n.defaultOpen,
      passive: n.open === void 0
    }), { disabled: s, unmountOnHide: i } = Lt(n);
    return xm({
      contentId: "",
      disabled: s,
      open: o,
      unmountOnHide: i,
      onOpenToggle: () => {
        s.value || (o.value = !o.value);
      }
    }), t({ open: o }), ue(), (u, l) => (E(), W(w(Fe), {
      as: u.as,
      "as-child": n.asChild,
      "data-state": w(o) ? "open" : "closed",
      "data-disabled": w(s) ? "" : void 0
    }, {
      default: V(() => [z(u.$slots, "default", { open: w(o) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state",
      "data-disabled"
    ]));
  }
}), wi = Sm, Em = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "CollapsibleContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["contentFound"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = cd();
    a.contentId || (a.contentId = vr(void 0, "reka-collapsible-content"));
    const o = j(), { forwardRef: s, currentElement: i } = ue(), u = j(0), l = j(0), c = I(() => a.open.value), d = j(c.value), m = j();
    re(() => {
      var p;
      return [c.value, (p = o.value) == null ? void 0 : p.present];
    }, async () => {
      await je();
      const p = i.value;
      if (!p) return;
      m.value = m.value || {
        transitionDuration: p.style.transitionDuration,
        animationName: p.style.animationName
      }, p.style.transitionDuration = "0s", p.style.animationName = "none";
      const h = p.getBoundingClientRect();
      l.value = h.height, u.value = h.width, d.value || (p.style.transitionDuration = m.value.transitionDuration, p.style.animationName = m.value.animationName);
    }, { immediate: !0 });
    const v = I(() => d.value && a.open.value);
    return me(() => {
      requestAnimationFrame(() => {
        d.value = !1;
      });
    }), Hr(i, "beforematch", (p) => {
      requestAnimationFrame(() => {
        a.onOpenToggle(), n("contentFound");
      });
    }), (p, h) => (E(), W(w($n), {
      ref_key: "presentRef",
      ref: o,
      present: p.forceMount || w(a).open.value,
      "force-mount": !0
    }, {
      default: V(({ present: f }) => {
        var y;
        return [Y(w(Fe), ae(p.$attrs, {
          id: w(a).contentId,
          ref: w(s),
          "as-child": r.asChild,
          as: p.as,
          hidden: f ? void 0 : w(a).unmountOnHide.value ? "" : "until-found",
          "data-state": v.value ? void 0 : w(a).open.value ? "open" : "closed",
          "data-disabled": (y = w(a).disabled) != null && y.value ? "" : void 0,
          style: {
            "--reka-collapsible-content-height": `${l.value}px`,
            "--reka-collapsible-content-width": `${u.value}px`
          }
        }), {
          default: V(() => [!w(a).unmountOnHide.value || f ? z(p.$slots, "default", { key: 0 }) : J("v-if", !0)]),
          _: 2
        }, 1040, [
          "id",
          "as-child",
          "as",
          "hidden",
          "data-state",
          "data-disabled",
          "style"
        ])];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), xi = Em, Cm = /* @__PURE__ */ K({
  __name: "CollapsibleTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    ue();
    const r = cd();
    return (n, a) => {
      var o, s;
      return E(), W(w(Fe), {
        type: n.as === "button" ? "button" : void 0,
        as: n.as,
        "as-child": t.asChild,
        "aria-controls": w(r).contentId,
        "aria-expanded": w(r).open.value,
        "data-state": w(r).open.value ? "open" : "closed",
        "data-disabled": (o = w(r).disabled) != null && o.value ? "" : void 0,
        disabled: (s = w(r).disabled) == null ? void 0 : s.value,
        onClick: w(r).onOpenToggle
      }, {
        default: V(() => [z(n.$slots, "default")]),
        _: 3
      }, 8, [
        "type",
        "as",
        "as-child",
        "aria-controls",
        "aria-expanded",
        "data-state",
        "data-disabled",
        "disabled",
        "onClick"
      ]);
    };
  }
}), Si = Cm;
const [Mt, Pm] = /* @__PURE__ */ ut("DialogRoot");
var Om = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "DialogRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, a = /* @__PURE__ */ Cr(r, "open", t, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), o = j(), s = j(), { modal: i } = Lt(r);
    return Pm({
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
    }), (u, l) => z(u.$slots, "default", {
      open: w(a),
      close: () => a.value = !1
    });
  }
}), Am = Om, km = /* @__PURE__ */ K({
  __name: "DialogClose",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e;
    ue();
    const r = Mt();
    return (n, a) => (E(), W(w(Fe), ae(t, {
      type: n.as === "button" ? "button" : void 0,
      onClick: a[0] || (a[0] = (o) => w(r).onOpenChange(!1))
    }), {
      default: V(() => [z(n.$slots, "default")]),
      _: 3
    }, 16, ["type"]));
  }
}), Tm = km;
const $m = "dismissableLayer.pointerDownOutside", Dm = "dismissableLayer.focusOutside";
function dd(e, t) {
  if (!(t instanceof Element)) return !1;
  const r = t.closest("[data-dismissable-layer]"), n = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), a = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(r && (n === r || a.indexOf(n) < a.indexOf(r)));
}
function Rm(e, t, r = !0) {
  var s;
  const n = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = j(!1), o = j(() => {
  });
  return yt((i) => {
    if (!Kt || !Ge(r)) return;
    const u = async (c) => {
      const d = c.target;
      if (!(!(t != null && t.value) || !d)) {
        if (dd(t.value, d)) {
          a.value = !1;
          return;
        }
        if (c.target && !a.value) {
          let v = function() {
            ed($m, e, m);
          };
          const m = { originalEvent: c };
          c.pointerType === "touch" ? (n.removeEventListener("click", o.value), o.value = v, n.addEventListener("click", o.value, { once: !0 })) : v();
        } else n.removeEventListener("click", o.value);
        a.value = !1;
      }
    }, l = window.setTimeout(() => {
      n.addEventListener("pointerdown", u);
    }, 0);
    i(() => {
      window.clearTimeout(l), n.removeEventListener("pointerdown", u), n.removeEventListener("click", o.value);
    });
  }), { onPointerDownCapture: () => {
    Ge(r) && (a.value = !0);
  } };
}
function Fm(e, t, r = !0) {
  var o;
  const n = ((o = t == null ? void 0 : t.value) == null ? void 0 : o.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = j(!1);
  return yt((s) => {
    if (!Kt || !Ge(r)) return;
    const i = async (u) => {
      if (!(t != null && t.value)) return;
      await je(), await je();
      const l = u.target;
      !t.value || !l || dd(t.value, l) || u.target && !a.value && ed(Dm, e, { originalEvent: u });
    };
    n.addEventListener("focusin", i), s(() => n.removeEventListener("focusin", i));
  }), {
    onFocusCapture: () => {
      Ge(r) && (a.value = !0);
    },
    onBlurCapture: () => {
      Ge(r) && (a.value = !1);
    }
  };
}
const ft = /* @__PURE__ */ On({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var _m = /* @__PURE__ */ K({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const r = e, n = t, { forwardRef: a, currentElement: o } = ue(), s = I(() => {
      var v;
      return ((v = o.value) == null ? void 0 : v.ownerDocument) ?? globalThis.document;
    }), i = I(() => ft.layersRoot), u = I(() => o.value ? Array.from(i.value).indexOf(o.value) : -1), l = I(() => ft.layersWithOutsidePointerEventsDisabled.size > 0), c = I(() => {
      const v = Array.from(i.value), [p] = [...ft.layersWithOutsidePointerEventsDisabled].slice(-1), h = v.indexOf(p);
      return u.value >= h;
    }), d = Rm(async (v) => {
      const p = [...ft.branches].some((h) => h == null ? void 0 : h.contains(v.target));
      !c.value || p || (n("pointerDownOutside", v), n("interactOutside", v), await je(), v.defaultPrevented || n("dismiss"));
    }, o), m = Fm((v) => {
      [...ft.branches].some((h) => h == null ? void 0 : h.contains(v.target)) || (n("focusOutside", v), n("interactOutside", v), v.defaultPrevented || n("dismiss"));
    }, o);
    return Jh("Escape", (v) => {
      u.value === i.value.size - 1 && (n("escapeKeyDown", v), v.defaultPrevented || n("dismiss"));
    }), yt((v) => {
      o.value && (r.disableOutsidePointerEvents && (ft.layersWithOutsidePointerEventsDisabled.size === 0 && (ft.originalBodyPointerEvents = s.value.body.style.pointerEvents, s.value.body.style.pointerEvents = "none"), ft.layersWithOutsidePointerEventsDisabled.add(o.value)), i.value.add(o.value), v(() => {
        r.disableOutsidePointerEvents && ft.layersWithOutsidePointerEventsDisabled.size === 1 && !Ih(ft.originalBodyPointerEvents) && (s.value.body.style.pointerEvents = ft.originalBodyPointerEvents);
      }));
    }), yt((v) => {
      v(() => {
        o.value && (i.value.delete(o.value), ft.layersWithOutsidePointerEventsDisabled.delete(o.value));
      });
    }), (v, p) => (E(), W(w(Fe), {
      ref: w(a),
      "as-child": v.asChild,
      as: v.as,
      "data-dismissable-layer": "",
      style: st({ pointerEvents: l.value ? c.value ? "auto" : "none" : void 0 }),
      onFocusCapture: w(m).onFocusCapture,
      onBlurCapture: w(m).onBlurCapture,
      onPointerdownCapture: w(d).onPointerDownCapture
    }, {
      default: V(() => [z(v.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), Ei = _m;
const qm = /* @__PURE__ */ Nh(() => j([]));
function Bm() {
  const e = qm();
  return {
    add(t) {
      const r = e.value[0];
      t !== r && (r == null || r.pause()), e.value = gl(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      var r;
      e.value = gl(e.value, t), (r = e.value[0]) == null || r.resume();
    }
  };
}
function gl(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
const yo = "focusScope.autoFocusOnMount", go = "focusScope.autoFocusOnUnmount", vl = {
  bubbles: !1,
  cancelable: !0
};
function Im(e, { select: t = !1 } = {}) {
  const r = Ue();
  for (const n of e)
    if (rr(n, { select: t }), Ue() !== r) return !0;
}
function Lm(e) {
  const t = fd(e), r = bl(t, e), n = bl(t.reverse(), e);
  return [r, n];
}
function fd(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (n) => {
    const a = n.tagName === "INPUT" && n.type === "hidden";
    return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function bl(e, t) {
  for (const r of e) if (!Mm(r, { upTo: t })) return r;
}
function Mm(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Nm(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function rr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = Ue();
    e.focus({ preventScroll: !0 }), e !== r && Nm(e) && t && e.select();
  }
}
var jm = /* @__PURE__ */ K({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    trapped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const r = e, n = t, { currentRef: a, currentElement: o } = ue(), s = j(null), i = Bm(), u = /* @__PURE__ */ On({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    yt((c) => {
      if (!Kt) return;
      const d = o.value;
      if (!r.trapped) return;
      function m(f) {
        if (u.paused || !d) return;
        const y = f.target;
        d.contains(y) ? s.value = y : rr(s.value, { select: !0 });
      }
      function v(f) {
        if (u.paused || !d) return;
        const y = f.relatedTarget;
        y !== null && (d.contains(y) || rr(s.value, { select: !0 }));
      }
      function p(f) {
        const y = s.value;
        if (y === null || !f.some((A) => A.removedNodes.length > 0)) return;
        d.contains(y) || rr(d);
      }
      document.addEventListener("focusin", m), document.addEventListener("focusout", v);
      const h = new MutationObserver(p);
      d && h.observe(d, {
        childList: !0,
        subtree: !0
      }), c(() => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", v), h.disconnect();
      });
    }), yt(async (c) => {
      const d = o.value;
      if (await je(), !d) return;
      i.add(u);
      const m = Ue();
      if (!d.contains(m)) {
        const p = new CustomEvent(yo, vl);
        d.addEventListener(yo, (h) => n("mountAutoFocus", h)), d.dispatchEvent(p), p.defaultPrevented || (Im(fd(d), { select: !0 }), Ue() === m && rr(d));
      }
      c(() => {
        d.removeEventListener(yo, (f) => n("mountAutoFocus", f));
        const p = new CustomEvent(go, vl), h = (f) => {
          n("unmountAutoFocus", f);
        };
        d.addEventListener(go, h), d.dispatchEvent(p), setTimeout(() => {
          p.defaultPrevented || rr(m ?? document.body, { select: !0 }), d.removeEventListener(go, h), i.remove(u);
        }, 0);
      });
    });
    function l(c) {
      if (!r.loop && !r.trapped || u.paused) return;
      const d = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, m = Ue();
      if (d && m) {
        const v = c.currentTarget, [p, h] = Lm(v);
        p && h ? !c.shiftKey && m === h ? (c.preventDefault(), r.loop && rr(p, { select: !0 })) : c.shiftKey && m === p && (c.preventDefault(), r.loop && rr(h, { select: !0 })) : m === v && c.preventDefault();
      }
    }
    return (c, d) => (E(), W(w(Fe), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": c.asChild,
      as: c.as,
      onKeydown: l
    }, {
      default: V(() => [z(c.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), pd = jm;
const Vm = "menu.itemSelect", _s = ["Enter", " "], Um = [
  "ArrowDown",
  "PageUp",
  "Home"
], hd = [
  "ArrowUp",
  "PageDown",
  "End"
], Hm = [...Um, ...hd];
[..._s], [..._s];
function md(e) {
  return e ? "open" : "closed";
}
function zm(e) {
  const t = Ue();
  for (const r of e)
    if (r === t || (r.focus(), Ue() !== t)) return;
}
function Wm(e, t) {
  const { x: r, y: n } = e;
  let a = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const i = t[o].x, u = t[o].y, l = t[s].x, c = t[s].y;
    u > n != c > n && r < (l - i) * (n - u) / (c - u) + i && (a = !a);
  }
  return a;
}
function Km(e, t) {
  if (!t) return !1;
  const r = {
    x: e.clientX,
    y: e.clientY
  };
  return Wm(r, t);
}
function ha(e) {
  return e.pointerType === "mouse";
}
const Gm = "DialogTitle", Jm = "DialogContent";
function Ym({ titleName: e = Gm, contentName: t = Jm, componentLink: r = "dialog.html#title", titleId: n, descriptionId: a, contentElement: o }) {
  const s = `Warning: \`${t}\` requires a \`${e}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.reka-ui.com/docs/components/${r}`, i = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${t}.`;
  me(() => {
    var c;
    document.getElementById(n) || console.warn(s);
    const l = (c = o.value) == null ? void 0 : c.getAttribute("aria-describedby");
    a && l && (document.getElementById(a) || console.warn(i));
  });
}
var Xm = /* @__PURE__ */ K({
  __name: "DialogContentImpl",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, n = t, a = Mt(), { forwardRef: o, currentElement: s } = ue();
    return a.titleId || (a.titleId = vr(void 0, "reka-dialog-title")), a.descriptionId || (a.descriptionId = vr(void 0, "reka-dialog-description")), me(() => {
      a.contentElement = s, Ue() !== document.body && (a.triggerElement.value = Ue());
    }), process.env.NODE_ENV !== "production" && Ym({
      titleName: "DialogTitle",
      contentName: "DialogContent",
      componentLink: "dialog.html#title",
      titleId: a.titleId,
      descriptionId: a.descriptionId,
      contentElement: s
    }), (i, u) => (E(), W(w(pd), {
      "as-child": "",
      loop: "",
      trapped: r.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (l) => n("openAutoFocus", l)),
      onUnmountAutoFocus: u[6] || (u[6] = (l) => n("closeAutoFocus", l))
    }, {
      default: V(() => [Y(w(Ei), ae({
        id: w(a).contentId,
        ref: w(o),
        as: i.as,
        "as-child": i.asChild,
        "disable-outside-pointer-events": i.disableOutsidePointerEvents,
        role: "dialog",
        "aria-describedby": w(a).descriptionId,
        "aria-labelledby": w(a).titleId,
        "data-state": w(md)(w(a).open.value)
      }, i.$attrs, {
        onDismiss: u[0] || (u[0] = (l) => w(a).onOpenChange(!1)),
        onEscapeKeyDown: u[1] || (u[1] = (l) => n("escapeKeyDown", l)),
        onFocusOutside: u[2] || (u[2] = (l) => n("focusOutside", l)),
        onInteractOutside: u[3] || (u[3] = (l) => n("interactOutside", l)),
        onPointerDownOutside: u[4] || (u[4] = (l) => n("pointerDownOutside", l))
      }), {
        default: V(() => [z(i.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "as",
        "as-child",
        "disable-outside-pointer-events",
        "aria-describedby",
        "aria-labelledby",
        "data-state"
      ])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), yd = Xm, Qm = /* @__PURE__ */ K({
  __name: "DialogContentModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, n = t, a = Mt(), o = kn(n), { forwardRef: s, currentElement: i } = ue();
    return ud(i), (u, l) => (E(), W(yd, ae({
      ...r,
      ...w(o)
    }, {
      ref: w(s),
      "trap-focus": w(a).open.value,
      "disable-outside-pointer-events": !0,
      onCloseAutoFocus: l[0] || (l[0] = (c) => {
        var d;
        c.defaultPrevented || (c.preventDefault(), (d = w(a).triggerElement.value) == null || d.focus());
      }),
      onPointerDownOutside: l[1] || (l[1] = (c) => {
        const d = c.detail.originalEvent, m = d.button === 0 && d.ctrlKey === !0;
        (d.button === 2 || m) && c.preventDefault();
      }),
      onFocusOutside: l[2] || (l[2] = (c) => {
        c.preventDefault();
      })
    }), {
      default: V(() => [z(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), Zm = Qm, ey = /* @__PURE__ */ K({
  __name: "DialogContentNonModal",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, a = kn(t);
    ue();
    const o = Mt(), s = j(!1), i = j(!1);
    return (u, l) => (E(), W(yd, ae({
      ...r,
      ...w(a)
    }, {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      onCloseAutoFocus: l[0] || (l[0] = (c) => {
        var d;
        c.defaultPrevented || (s.value || (d = w(o).triggerElement.value) == null || d.focus(), c.preventDefault()), s.value = !1, i.value = !1;
      }),
      onInteractOutside: l[1] || (l[1] = (c) => {
        var v;
        c.defaultPrevented || (s.value = !0, c.detail.originalEvent.type === "pointerdown" && (i.value = !0));
        const d = c.target;
        ((v = w(o).triggerElement.value) == null ? void 0 : v.contains(d)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && i.value && c.preventDefault();
      })
    }), {
      default: V(() => [z(u.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ty = ey, ry = /* @__PURE__ */ K({
  __name: "DialogContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, n = t, a = Mt(), o = kn(n), { forwardRef: s } = ue();
    return (i, u) => (E(), W(w($n), { present: i.forceMount || w(a).open.value }, {
      default: V(() => [w(a).modal.value ? (E(), W(Zm, ae({
        key: 0,
        ref: w(s)
      }, {
        ...r,
        ...w(o),
        ...i.$attrs
      }), {
        default: V(() => [z(i.$slots, "default")]),
        _: 3
      }, 16)) : (E(), W(ty, ae({
        key: 1,
        ref: w(s)
      }, {
        ...r,
        ...w(o),
        ...i.$attrs
      }), {
        default: V(() => [z(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), ny = ry, ay = /* @__PURE__ */ K({
  __name: "DialogDescription",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "p"
    }
  },
  setup(e) {
    const t = e;
    ue();
    const r = Mt();
    return (n, a) => (E(), W(w(Fe), ae(t, { id: w(r).descriptionId }), {
      default: V(() => [z(n.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), oy = ay, sy = /* @__PURE__ */ K({
  __name: "DialogOverlayImpl",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Mt();
    return sd(!0), ue(), (r, n) => (E(), W(w(Fe), {
      as: r.as,
      "as-child": r.asChild,
      "data-state": w(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "data-state"
    ]));
  }
}), iy = sy, ly = /* @__PURE__ */ K({
  __name: "DialogOverlay",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = Mt(), { forwardRef: r } = ue();
    return (n, a) => {
      var o;
      return (o = w(t)) != null && o.modal.value ? (E(), W(w($n), {
        key: 0,
        present: n.forceMount || w(t).open.value
      }, {
        default: V(() => [Y(iy, ae(n.$attrs, {
          ref: w(r),
          as: n.as,
          "as-child": n.asChild
        }), {
          default: V(() => [z(n.$slots, "default")]),
          _: 3
        }, 16, ["as", "as-child"])]),
        _: 3
      }, 8, ["present"])) : J("v-if", !0);
    };
  }
}), uy = ly, cy = /* @__PURE__ */ K({
  __name: "Teleport",
  props: {
    to: {
      type: null,
      required: !1,
      default: "body"
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = /* @__PURE__ */ Kh();
    return (r, n) => w(t) || r.forceMount ? (E(), W(Jc, {
      key: 0,
      to: r.to,
      disabled: r.disabled,
      defer: r.defer
    }, [z(r.$slots, "default")], 8, [
      "to",
      "disabled",
      "defer"
    ])) : J("v-if", !0);
  }
}), Ci = cy, dy = /* @__PURE__ */ K({
  __name: "DialogPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, n) => (E(), W(w(Ci), Pe(De(t)), {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), fy = dy, py = /* @__PURE__ */ K({
  __name: "DialogTitle",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "h2"
    }
  },
  setup(e) {
    const t = e, r = Mt();
    return ue(), (n, a) => (E(), W(w(Fe), ae(t, { id: w(r).titleId }), {
      default: V(() => [z(n.$slots, "default")]),
      _: 3
    }, 16, ["id"]));
  }
}), hy = py, my = /* @__PURE__ */ K({
  __name: "DialogTrigger",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = Mt(), { forwardRef: n, currentElement: a } = ue();
    return r.contentId || (r.contentId = vr(void 0, "reka-dialog-content")), me(() => {
      r.triggerElement.value = a.value;
    }), (o, s) => (E(), W(w(Fe), ae(t, {
      ref: w(n),
      type: o.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": w(r).open.value || !1,
      "aria-controls": w(r).open.value ? w(r).contentId : void 0,
      "data-state": w(r).open.value ? "open" : "closed",
      onClick: w(r).onOpenToggle
    }), {
      default: V(() => [z(o.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "onClick"
    ]));
  }
}), yy = my;
const wl = "data-reka-collection-item";
function gd(e = {}) {
  const { key: t = "", isProvider: r = !1 } = e, n = `${t}CollectionProvider`;
  let a;
  if (r) {
    const c = j(/* @__PURE__ */ new Map());
    a = {
      collectionRef: j(),
      itemMap: c
    }, Cn(n, a);
  } else a = di(n);
  const o = (c = !1) => {
    const d = a.collectionRef.value;
    if (!d) return [];
    const m = Array.from(d.querySelectorAll(`[${wl}]`)), p = Array.from(a.itemMap.value.values()).sort((h, f) => m.indexOf(h.ref) - m.indexOf(f.ref));
    return c ? p : p.filter((h) => h.ref.dataset.disabled !== "");
  }, s = /* @__PURE__ */ K({
    name: "CollectionSlot",
    inheritAttrs: !1,
    setup(c, { slots: d, attrs: m }) {
      const { primitiveElement: v, currentElement: p } = Fs();
      return re(p, () => {
        a.collectionRef.value = p.value;
      }), () => Ne(Rs, {
        ref: v,
        ...m
      }, d);
    }
  }), i = /* @__PURE__ */ K({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(c, { slots: d, attrs: m }) {
      const { primitiveElement: v, currentElement: p } = Fs();
      return yt((h) => {
        if (p.value) {
          const f = $s(p.value);
          a.itemMap.value.set(f, {
            ref: p.value,
            value: c.value
          }), h(() => a.itemMap.value.delete(f));
        }
      }), () => Ne(Rs, {
        ...m,
        [wl]: "",
        ref: v
      }, d);
    }
  }), u = I(() => Array.from(a.itemMap.value.values())), l = I(() => a.itemMap.value.size);
  return {
    getItems: o,
    reactiveItems: u,
    itemMapSize: l,
    CollectionSlot: s,
    CollectionItem: i
  };
}
var gy = /* @__PURE__ */ K({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, r) => (E(), W(w(Fe), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
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
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: V(() => [z(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), vd = gy, vy = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: r, currentElement: n } = Fs(), a = I(() => t.checked ?? t.value);
    return re(a, (o, s) => {
      if (!n.value) return;
      const i = n.value, u = window.HTMLInputElement.prototype, c = Object.getOwnPropertyDescriptor(u, "value").set;
      if (c && o !== s) {
        const d = new Event("input", { bubbles: !0 }), m = new Event("change", { bubbles: !0 });
        c.call(i, o), i.dispatchEvent(d), i.dispatchEvent(m);
      }
    }), (o, s) => (E(), W(vd, ae({
      ref_key: "primitiveElement",
      ref: r
    }, {
      ...t,
      ...o.$attrs
    }, { as: "input" }), null, 16));
  }
}), xl = vy, by = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, r = I(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), n = I(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, o) => typeof a == "object" ? Object.entries(a).map(([s, i]) => ({
      name: `${t.name}[${o}][${s}]`,
      value: i
    })) : {
      name: `${t.name}[${o}]`,
      value: a
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, o]) => ({
      name: `${t.name}[${a}]`,
      value: o
    })) : []);
    return (a, o) => (E(), F(ne, null, [J(" We render single input if it's required "), r.value ? (E(), W(xl, ae({ key: a.name }, {
      ...t,
      ...a.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (E(!0), F(ne, { key: 1 }, Ce(n.value, (s) => (E(), W(xl, ae({ key: s.name }, { ref_for: !0 }, {
      ...t,
      ...a.$attrs
    }, {
      name: s.name,
      value: s.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), wy = by;
const xy = "rovingFocusGroup.onEntryFocus", Sy = {
  bubbles: !1,
  cancelable: !0
};
function Ey(e, t = !1) {
  const r = Ue();
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), Ue() !== r)) return;
}
const [bd, Cy] = /* @__PURE__ */ ut("PopperRoot");
var Py = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = j();
    return Cy({
      anchor: t,
      onAnchorChange: (r) => t.value = r
    }), (r, n) => z(r.$slots, "default");
  }
}), wd = Py, Oy = /* @__PURE__ */ K({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: r, currentElement: n } = ue(), a = bd();
    return Yc(() => {
      a.onAnchorChange(t.reference ?? n.value);
    }), (o, s) => (E(), W(w(Fe), {
      ref: w(r),
      as: o.as,
      "as-child": o.asChild
    }, {
      default: V(() => [z(o.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), xd = Oy;
const Ay = {
  key: 0,
  d: "M0 0L6 6L12 0"
}, ky = {
  key: 1,
  d: "M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"
};
var Ty = /* @__PURE__ */ K({
  __name: "Arrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, n) => (E(), W(w(Fe), ae(t, {
      width: r.width,
      height: r.height,
      viewBox: r.asChild ? void 0 : "0 0 12 6",
      preserveAspectRatio: r.asChild ? void 0 : "none"
    }), {
      default: V(() => [z(r.$slots, "default", {}, () => [r.rounded ? (E(), F("path", ky)) : (E(), F("path", Ay))])]),
      _: 3
    }, 16, [
      "width",
      "height",
      "viewBox",
      "preserveAspectRatio"
    ]));
  }
}), $y = Ty;
function Dy(e) {
  return e !== null;
}
function Ry(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var f, y, x;
      const { placement: r, rects: n, middlewareData: a } = t, s = ((f = a.arrow) == null ? void 0 : f.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, u = s ? 0 : e.arrowHeight, [l, c] = qs(r), d = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[c], m = (((y = a.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, v = (((x = a.arrow) == null ? void 0 : x.y) ?? 0) + u / 2;
      let p = "", h = "";
      return l === "bottom" ? (p = s ? d : `${m}px`, h = `${-u}px`) : l === "top" ? (p = s ? d : `${m}px`, h = `${n.floating.height + u}px`) : l === "right" ? (p = `${-u}px`, h = s ? d : `${v}px`) : l === "left" && (p = `${n.floating.width + u}px`, h = s ? d : `${v}px`), { data: {
        x: p,
        y: h
      } };
    }
  };
}
function qs(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
const Fy = ["top", "right", "bottom", "left"], sr = Math.min, nt = Math.max, ma = Math.round, Jn = Math.floor, Ft = (e) => ({
  x: e,
  y: e
}), _y = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Bs(e, t, r) {
  return nt(e, sr(t, r));
}
function zt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wt(e) {
  return e.split("-")[0];
}
function Xr(e) {
  return e.split("-")[1];
}
function Pi(e) {
  return e === "x" ? "y" : "x";
}
function Oi(e) {
  return e === "y" ? "height" : "width";
}
function Rt(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ai(e) {
  return Pi(Rt(e));
}
function qy(e, t, r) {
  r === void 0 && (r = !1);
  const n = Xr(e), a = Ai(e), o = Oi(a);
  let s = a === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = ya(s)), [s, ya(s)];
}
function By(e) {
  const t = ya(e);
  return [Is(e), t, Is(t)];
}
function Is(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Sl = ["left", "right"], El = ["right", "left"], Iy = ["top", "bottom"], Ly = ["bottom", "top"];
function My(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? El : Sl : t ? Sl : El;
    case "left":
    case "right":
      return t ? Iy : Ly;
    default:
      return [];
  }
}
function Ny(e, t, r, n) {
  const a = Xr(e);
  let o = My(Wt(e), r === "start", n);
  return a && (o = o.map((s) => s + "-" + a), t && (o = o.concat(o.map(Is)))), o;
}
function ya(e) {
  const t = Wt(e);
  return _y[t] + e.slice(t.length);
}
function jy(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Sd(e) {
  return typeof e != "number" ? jy(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ga(e) {
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
function Cl(e, t, r) {
  let {
    reference: n,
    floating: a
  } = e;
  const o = Rt(t), s = Ai(t), i = Oi(s), u = Wt(t), l = o === "y", c = n.x + n.width / 2 - a.width / 2, d = n.y + n.height / 2 - a.height / 2, m = n[i] / 2 - a[i] / 2;
  let v;
  switch (u) {
    case "top":
      v = {
        x: c,
        y: n.y - a.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: n.y + n.height
      };
      break;
    case "right":
      v = {
        x: n.x + n.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: n.x - a.width,
        y: d
      };
      break;
    default:
      v = {
        x: n.x,
        y: n.y
      };
  }
  switch (Xr(t)) {
    case "start":
      v[s] -= m * (r && l ? -1 : 1);
      break;
    case "end":
      v[s] += m * (r && l ? -1 : 1);
      break;
  }
  return v;
}
async function Vy(e, t) {
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
    altBoundary: m = !1,
    padding: v = 0
  } = zt(t, e), p = Sd(v), f = i[m ? d === "floating" ? "reference" : "floating" : d], y = ga(await o.getClippingRect({
    element: (r = await (o.isElement == null ? void 0 : o.isElement(f))) == null || r ? f : f.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: c,
    strategy: u
  })), x = d === "floating" ? {
    x: n,
    y: a,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, P = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(i.floating)), A = await (o.isElement == null ? void 0 : o.isElement(P)) ? await (o.getScale == null ? void 0 : o.getScale(P)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, T = ga(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: P,
    strategy: u
  }) : x);
  return {
    top: (y.top - T.top + p.top) / A.y,
    bottom: (T.bottom - y.bottom + p.bottom) / A.y,
    left: (y.left - T.left + p.left) / A.x,
    right: (T.right - y.right + p.right) / A.x
  };
}
const Uy = 50, Hy = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: a = "absolute",
    middleware: o = [],
    platform: s
  } = r, i = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Vy
  }, u = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: c,
    y: d
  } = Cl(l, n, u), m = n, v = 0;
  const p = {};
  for (let h = 0; h < o.length; h++) {
    const f = o[h];
    if (!f)
      continue;
    const {
      name: y,
      fn: x
    } = f, {
      x: P,
      y: A,
      data: T,
      reset: $
    } = await x({
      x: c,
      y: d,
      initialPlacement: n,
      placement: m,
      strategy: a,
      middlewareData: p,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = P ?? c, d = A ?? d, p[y] = {
      ...p[y],
      ...T
    }, $ && v < Uy && (v++, typeof $ == "object" && ($.placement && (m = $.placement), $.rects && (l = $.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : $.rects), {
      x: c,
      y: d
    } = Cl(l, m, u)), h = -1);
  }
  return {
    x: c,
    y: d,
    placement: m,
    strategy: a,
    middlewareData: p
  };
}, zy = (e) => ({
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
    } = zt(e, t) || {};
    if (l == null)
      return {};
    const d = Sd(c), m = {
      x: r,
      y: n
    }, v = Ai(a), p = Oi(v), h = await s.getDimensions(l), f = v === "y", y = f ? "top" : "left", x = f ? "bottom" : "right", P = f ? "clientHeight" : "clientWidth", A = o.reference[p] + o.reference[v] - m[v] - o.floating[p], T = m[v] - o.reference[v], $ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let O = $ ? $[P] : 0;
    (!O || !await (s.isElement == null ? void 0 : s.isElement($))) && (O = i.floating[P] || o.floating[p]);
    const _ = A / 2 - T / 2, M = O / 2 - h[p] / 2 - 1, D = sr(d[y], M), R = sr(d[x], M), g = D, C = O - h[p] - R, S = O / 2 - h[p] / 2 + _, b = Bs(g, S, C), q = !u.arrow && Xr(a) != null && S !== b && o.reference[p] / 2 - (S < g ? D : R) - h[p] / 2 < 0, B = q ? S < g ? S - g : S - C : 0;
    return {
      [v]: m[v] + B,
      data: {
        [v]: b,
        centerOffset: S - b - B,
        ...q && {
          alignmentOffset: B
        }
      },
      reset: q
    };
  }
}), Wy = function(e) {
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
        fallbackPlacements: m,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: h = !0,
        ...f
      } = zt(e, t);
      if ((r = o.arrow) != null && r.alignmentOffset)
        return {};
      const y = Wt(a), x = Rt(i), P = Wt(i) === i, A = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), T = m || (P || !h ? [ya(i)] : By(i)), $ = p !== "none";
      !m && $ && T.push(...Ny(i, h, p, A));
      const O = [i, ...T], _ = await u.detectOverflow(t, f), M = [];
      let D = ((n = o.flip) == null ? void 0 : n.overflows) || [];
      if (c && M.push(_[y]), d) {
        const S = qy(a, s, A);
        M.push(_[S[0]], _[S[1]]);
      }
      if (D = [...D, {
        placement: a,
        overflows: M
      }], !M.every((S) => S <= 0)) {
        var R, g;
        const S = (((R = o.flip) == null ? void 0 : R.index) || 0) + 1, b = O[S];
        if (b && (!(d === "alignment" ? x !== Rt(b) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((k) => Rt(k.placement) === x ? k.overflows[0] > 0 : !0)))
          return {
            data: {
              index: S,
              overflows: D
            },
            reset: {
              placement: b
            }
          };
        let q = (g = D.filter((B) => B.overflows[0] <= 0).sort((B, k) => B.overflows[1] - k.overflows[1])[0]) == null ? void 0 : g.placement;
        if (!q)
          switch (v) {
            case "bestFit": {
              var C;
              const B = (C = D.filter((k) => {
                if ($) {
                  const G = Rt(k.placement);
                  return G === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((G) => G > 0).reduce((G, te) => G + te, 0)]).sort((k, G) => k[1] - G[1])[0]) == null ? void 0 : C[0];
              B && (q = B);
              break;
            }
            case "initialPlacement":
              q = i;
              break;
          }
        if (a !== q)
          return {
            reset: {
              placement: q
            }
          };
      }
      return {};
    }
  };
};
function Pl(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Ol(e) {
  return Fy.some((t) => e[t] >= 0);
}
const Ky = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r,
        platform: n
      } = t, {
        strategy: a = "referenceHidden",
        ...o
      } = zt(e, t);
      switch (a) {
        case "referenceHidden": {
          const s = await n.detectOverflow(t, {
            ...o,
            elementContext: "reference"
          }), i = Pl(s, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Ol(i)
            }
          };
        }
        case "escaped": {
          const s = await n.detectOverflow(t, {
            ...o,
            altBoundary: !0
          }), i = Pl(s, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Ol(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ed = /* @__PURE__ */ new Set(["left", "top"]);
async function Gy(e, t) {
  const {
    placement: r,
    platform: n,
    elements: a
  } = e, o = await (n.isRTL == null ? void 0 : n.isRTL(a.floating)), s = Wt(r), i = Xr(r), u = Rt(r) === "y", l = Ed.has(s) ? -1 : 1, c = o && u ? -1 : 1, d = zt(t, e);
  let {
    mainAxis: m,
    crossAxis: v,
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
  return i && typeof p == "number" && (v = i === "end" ? p * -1 : p), u ? {
    x: v * c,
    y: m * l
  } : {
    x: m * l,
    y: v * c
  };
}
const Jy = function(e) {
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
      } = t, u = await Gy(t, e);
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
}, Yy = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: a,
        platform: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: u = {
          fn: (y) => {
            let {
              x,
              y: P
            } = y;
            return {
              x,
              y: P
            };
          }
        },
        ...l
      } = zt(e, t), c = {
        x: r,
        y: n
      }, d = await o.detectOverflow(t, l), m = Rt(Wt(a)), v = Pi(m);
      let p = c[v], h = c[m];
      if (s) {
        const y = v === "y" ? "top" : "left", x = v === "y" ? "bottom" : "right", P = p + d[y], A = p - d[x];
        p = Bs(P, p, A);
      }
      if (i) {
        const y = m === "y" ? "top" : "left", x = m === "y" ? "bottom" : "right", P = h + d[y], A = h - d[x];
        h = Bs(P, h, A);
      }
      const f = u.fn({
        ...t,
        [v]: p,
        [m]: h
      });
      return {
        ...f,
        data: {
          x: f.x - r,
          y: f.y - n,
          enabled: {
            [v]: s,
            [m]: i
          }
        }
      };
    }
  };
}, Xy = function(e) {
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
      } = zt(e, t), c = {
        x: r,
        y: n
      }, d = Rt(a), m = Pi(d);
      let v = c[m], p = c[d];
      const h = zt(i, t), f = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (u) {
        const P = m === "y" ? "height" : "width", A = o.reference[m] - o.floating[P] + f.mainAxis, T = o.reference[m] + o.reference[P] - f.mainAxis;
        v < A ? v = A : v > T && (v = T);
      }
      if (l) {
        var y, x;
        const P = m === "y" ? "width" : "height", A = Ed.has(Wt(a)), T = o.reference[d] - o.floating[P] + (A && ((y = s.offset) == null ? void 0 : y[d]) || 0) + (A ? 0 : f.crossAxis), $ = o.reference[d] + o.reference[P] + (A ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (A ? f.crossAxis : 0);
        p < T ? p = T : p > $ && (p = $);
      }
      return {
        [m]: v,
        [d]: p
      };
    }
  };
}, Qy = function(e) {
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
      } = zt(e, t), c = await s.detectOverflow(t, l), d = Wt(a), m = Xr(a), v = Rt(a) === "y", {
        width: p,
        height: h
      } = o.floating;
      let f, y;
      d === "top" || d === "bottom" ? (f = d, y = m === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = d, f = m === "end" ? "top" : "bottom");
      const x = h - c.top - c.bottom, P = p - c.left - c.right, A = sr(h - c[f], x), T = sr(p - c[y], P), $ = !t.middlewareData.shift;
      let O = A, _ = T;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (_ = P), (n = t.middlewareData.shift) != null && n.enabled.y && (O = x), $ && !m) {
        const D = nt(c.left, 0), R = nt(c.right, 0), g = nt(c.top, 0), C = nt(c.bottom, 0);
        v ? _ = p - 2 * (D !== 0 || R !== 0 ? D + R : nt(c.left, c.right)) : O = h - 2 * (g !== 0 || C !== 0 ? g + C : nt(c.top, c.bottom));
      }
      await u({
        ...t,
        availableWidth: _,
        availableHeight: O
      });
      const M = await s.getDimensions(i.floating);
      return p !== M.width || h !== M.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Da() {
  return typeof window < "u";
}
function Pr(e) {
  return ki(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function it(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Nt(e) {
  var t;
  return (t = (ki(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ki(e) {
  return Da() ? e instanceof Node || e instanceof it(e).Node : !1;
}
function Et(e) {
  return Da() ? e instanceof Element || e instanceof it(e).Element : !1;
}
function Gt(e) {
  return Da() ? e instanceof HTMLElement || e instanceof it(e).HTMLElement : !1;
}
function Al(e) {
  return !Da() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof it(e).ShadowRoot;
}
function Dn(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: a
  } = Ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && a !== "inline" && a !== "contents";
}
function Zy(e) {
  return /^(table|td|th)$/.test(Pr(e));
}
function Ra(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const eg = /transform|translate|scale|rotate|perspective|filter/, tg = /paint|layout|strict|content/, fr = (e) => !!e && e !== "none";
let vo;
function Ti(e) {
  const t = Et(e) ? Ct(e) : e;
  return fr(t.transform) || fr(t.translate) || fr(t.scale) || fr(t.rotate) || fr(t.perspective) || !$i() && (fr(t.backdropFilter) || fr(t.filter)) || eg.test(t.willChange || "") || tg.test(t.contain || "");
}
function rg(e) {
  let t = ir(e);
  for (; Gt(t) && !zr(t); ) {
    if (Ti(t))
      return t;
    if (Ra(t))
      return null;
    t = ir(t);
  }
  return null;
}
function $i() {
  return vo == null && (vo = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), vo;
}
function zr(e) {
  return /^(html|body|#document)$/.test(Pr(e));
}
function Ct(e) {
  return it(e).getComputedStyle(e);
}
function Fa(e) {
  return Et(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ir(e) {
  if (Pr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Al(e) && e.host || // Fallback.
    Nt(e)
  );
  return Al(t) ? t.host : t;
}
function Cd(e) {
  const t = ir(e);
  return zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Gt(t) && Dn(t) ? t : Cd(t);
}
function gn(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const a = Cd(e), o = a === ((n = e.ownerDocument) == null ? void 0 : n.body), s = it(a);
  if (o) {
    const i = Ls(s);
    return t.concat(s, s.visualViewport || [], Dn(a) ? a : [], i && r ? gn(i) : []);
  } else
    return t.concat(a, gn(a, [], r));
}
function Ls(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Pd(e) {
  const t = Ct(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const a = Gt(e), o = a ? e.offsetWidth : r, s = a ? e.offsetHeight : n, i = ma(r) !== o || ma(n) !== s;
  return i && (r = o, n = s), {
    width: r,
    height: n,
    $: i
  };
}
function Di(e) {
  return Et(e) ? e : e.contextElement;
}
function Vr(e) {
  const t = Di(e);
  if (!Gt(t))
    return Ft(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: a,
    $: o
  } = Pd(t);
  let s = (o ? ma(r.width) : r.width) / n, i = (o ? ma(r.height) : r.height) / a;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const ng = /* @__PURE__ */ Ft(0);
function Od(e) {
  const t = it(e);
  return !$i() || !t.visualViewport ? ng : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ag(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== it(e) ? !1 : t;
}
function br(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const a = e.getBoundingClientRect(), o = Di(e);
  let s = Ft(1);
  t && (n ? Et(n) && (s = Vr(n)) : s = Vr(e));
  const i = ag(o, r, n) ? Od(o) : Ft(0);
  let u = (a.left + i.x) / s.x, l = (a.top + i.y) / s.y, c = a.width / s.x, d = a.height / s.y;
  if (o) {
    const m = it(o), v = n && Et(n) ? it(n) : n;
    let p = m, h = Ls(p);
    for (; h && n && v !== p; ) {
      const f = Vr(h), y = h.getBoundingClientRect(), x = Ct(h), P = y.left + (h.clientLeft + parseFloat(x.paddingLeft)) * f.x, A = y.top + (h.clientTop + parseFloat(x.paddingTop)) * f.y;
      u *= f.x, l *= f.y, c *= f.x, d *= f.y, u += P, l += A, p = it(h), h = Ls(p);
    }
  }
  return ga({
    width: c,
    height: d,
    x: u,
    y: l
  });
}
function _a(e, t) {
  const r = Fa(e).scrollLeft;
  return t ? t.left + r : br(Nt(e)).left + r;
}
function Ad(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - _a(e, r), a = r.top + t.scrollTop;
  return {
    x: n,
    y: a
  };
}
function og(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: a
  } = e;
  const o = a === "fixed", s = Nt(n), i = t ? Ra(t.floating) : !1;
  if (n === s || i && o)
    return r;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Ft(1);
  const c = Ft(0), d = Gt(n);
  if ((d || !d && !o) && ((Pr(n) !== "body" || Dn(s)) && (u = Fa(n)), d)) {
    const v = br(n);
    l = Vr(n), c.x = v.x + n.clientLeft, c.y = v.y + n.clientTop;
  }
  const m = s && !d && !o ? Ad(s, u) : Ft(0);
  return {
    width: r.width * l.x,
    height: r.height * l.y,
    x: r.x * l.x - u.scrollLeft * l.x + c.x + m.x,
    y: r.y * l.y - u.scrollTop * l.y + c.y + m.y
  };
}
function sg(e) {
  return Array.from(e.getClientRects());
}
function ig(e) {
  const t = Nt(e), r = Fa(e), n = e.ownerDocument.body, a = nt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), o = nt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + _a(e);
  const i = -r.scrollTop;
  return Ct(n).direction === "rtl" && (s += nt(t.clientWidth, n.clientWidth) - a), {
    width: a,
    height: o,
    x: s,
    y: i
  };
}
const kl = 25;
function lg(e, t) {
  const r = it(e), n = Nt(e), a = r.visualViewport;
  let o = n.clientWidth, s = n.clientHeight, i = 0, u = 0;
  if (a) {
    o = a.width, s = a.height;
    const c = $i();
    (!c || c && t === "fixed") && (i = a.offsetLeft, u = a.offsetTop);
  }
  const l = _a(n);
  if (l <= 0) {
    const c = n.ownerDocument, d = c.body, m = getComputedStyle(d), v = c.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, p = Math.abs(n.clientWidth - d.clientWidth - v);
    p <= kl && (o -= p);
  } else l <= kl && (o += l);
  return {
    width: o,
    height: s,
    x: i,
    y: u
  };
}
function ug(e, t) {
  const r = br(e, !0, t === "fixed"), n = r.top + e.clientTop, a = r.left + e.clientLeft, o = Gt(e) ? Vr(e) : Ft(1), s = e.clientWidth * o.x, i = e.clientHeight * o.y, u = a * o.x, l = n * o.y;
  return {
    width: s,
    height: i,
    x: u,
    y: l
  };
}
function Tl(e, t, r) {
  let n;
  if (t === "viewport")
    n = lg(e, r);
  else if (t === "document")
    n = ig(Nt(e));
  else if (Et(t))
    n = ug(t, r);
  else {
    const a = Od(e);
    n = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return ga(n);
}
function kd(e, t) {
  const r = ir(e);
  return r === t || !Et(r) || zr(r) ? !1 : Ct(r).position === "fixed" || kd(r, t);
}
function cg(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = gn(e, [], !1).filter((i) => Et(i) && Pr(i) !== "body"), a = null;
  const o = Ct(e).position === "fixed";
  let s = o ? ir(e) : e;
  for (; Et(s) && !zr(s); ) {
    const i = Ct(s), u = Ti(s);
    !u && i.position === "fixed" && (a = null), (o ? !u && !a : !u && i.position === "static" && !!a && (a.position === "absolute" || a.position === "fixed") || Dn(s) && !u && kd(e, s)) ? n = n.filter((c) => c !== s) : a = i, s = ir(s);
  }
  return t.set(e, n), n;
}
function dg(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: a
  } = e;
  const s = [...r === "clippingAncestors" ? Ra(t) ? [] : cg(t, this._c) : [].concat(r), n], i = Tl(t, s[0], a);
  let u = i.top, l = i.right, c = i.bottom, d = i.left;
  for (let m = 1; m < s.length; m++) {
    const v = Tl(t, s[m], a);
    u = nt(v.top, u), l = sr(v.right, l), c = sr(v.bottom, c), d = nt(v.left, d);
  }
  return {
    width: l - d,
    height: c - u,
    x: d,
    y: u
  };
}
function fg(e) {
  const {
    width: t,
    height: r
  } = Pd(e);
  return {
    width: t,
    height: r
  };
}
function pg(e, t, r) {
  const n = Gt(t), a = Nt(t), o = r === "fixed", s = br(e, !0, o, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ft(0);
  function l() {
    u.x = _a(a);
  }
  if (n || !n && !o)
    if ((Pr(t) !== "body" || Dn(a)) && (i = Fa(t)), n) {
      const v = br(t, !0, o, t);
      u.x = v.x + t.clientLeft, u.y = v.y + t.clientTop;
    } else a && l();
  o && !n && a && l();
  const c = a && !n && !o ? Ad(a, i) : Ft(0), d = s.left + i.scrollLeft - u.x - c.x, m = s.top + i.scrollTop - u.y - c.y;
  return {
    x: d,
    y: m,
    width: s.width,
    height: s.height
  };
}
function bo(e) {
  return Ct(e).position === "static";
}
function $l(e, t) {
  if (!Gt(e) || Ct(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return Nt(e) === r && (r = r.ownerDocument.body), r;
}
function Td(e, t) {
  const r = it(e);
  if (Ra(e))
    return r;
  if (!Gt(e)) {
    let a = ir(e);
    for (; a && !zr(a); ) {
      if (Et(a) && !bo(a))
        return a;
      a = ir(a);
    }
    return r;
  }
  let n = $l(e, t);
  for (; n && Zy(n) && bo(n); )
    n = $l(n, t);
  return n && zr(n) && bo(n) && !Ti(n) ? r : n || rg(e) || r;
}
const hg = async function(e) {
  const t = this.getOffsetParent || Td, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: pg(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function mg(e) {
  return Ct(e).direction === "rtl";
}
const yg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: og,
  getDocumentElement: Nt,
  getClippingRect: dg,
  getOffsetParent: Td,
  getElementRects: hg,
  getClientRects: sg,
  getDimensions: fg,
  getScale: Vr,
  isElement: Et,
  isRTL: mg
};
function $d(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function gg(e, t) {
  let r = null, n;
  const a = Nt(e);
  function o() {
    var i;
    clearTimeout(n), (i = r) == null || i.disconnect(), r = null;
  }
  function s(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), o();
    const l = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: m,
      height: v
    } = l;
    if (i || t(), !m || !v)
      return;
    const p = Jn(d), h = Jn(a.clientWidth - (c + m)), f = Jn(a.clientHeight - (d + v)), y = Jn(c), P = {
      rootMargin: -p + "px " + -h + "px " + -f + "px " + -y + "px",
      threshold: nt(0, sr(1, u)) || 1
    };
    let A = !0;
    function T($) {
      const O = $[0].intersectionRatio;
      if (O !== u) {
        if (!A)
          return s();
        O ? s(!1, O) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      O === 1 && !$d(l, e.getBoundingClientRect()) && s(), A = !1;
    }
    try {
      r = new IntersectionObserver(T, {
        ...P,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(T, P);
    }
    r.observe(e);
  }
  return s(!0), o;
}
function vg(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, l = Di(e), c = a || o ? [...l ? gn(l) : [], ...t ? gn(t) : []] : [];
  c.forEach((y) => {
    a && y.addEventListener("scroll", r, {
      passive: !0
    }), o && y.addEventListener("resize", r);
  });
  const d = l && i ? gg(l, r) : null;
  let m = -1, v = null;
  s && (v = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === l && v && t && (v.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var P;
      (P = v) == null || P.observe(t);
    })), r();
  }), l && !u && v.observe(l), t && v.observe(t));
  let p, h = u ? br(e) : null;
  u && f();
  function f() {
    const y = br(e);
    h && !$d(h, y) && r(), h = y, p = requestAnimationFrame(f);
  }
  return r(), () => {
    var y;
    c.forEach((x) => {
      a && x.removeEventListener("scroll", r), o && x.removeEventListener("resize", r);
    }), d == null || d(), (y = v) == null || y.disconnect(), v = null, u && cancelAnimationFrame(p);
  };
}
const bg = Jy, wg = Yy, Dl = Wy, xg = Qy, Sg = Ky, Eg = zy, Cg = Xy, Pg = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), a = {
    platform: yg,
    ...r
  }, o = {
    ...a.platform,
    _c: n
  };
  return Hy(e, t, {
    ...a,
    platform: o
  });
};
function Og(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function Ms(e) {
  if (Og(e)) {
    const t = e.$el;
    return ki(t) && Pr(t) === "#comment" ? null : t;
  }
  return e;
}
function Nr(e) {
  return typeof e == "function" ? e() : w(e);
}
function Ag(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const r = Ms(Nr(e.element));
      return r == null ? {} : Eg({
        element: r,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Dd(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Rl(e, t) {
  const r = Dd(e);
  return Math.round(t * r) / r;
}
function kg(e, t, r) {
  r === void 0 && (r = {});
  const n = r.whileElementsMounted, a = I(() => {
    var O;
    return (O = Nr(r.open)) != null ? O : !0;
  }), o = I(() => Nr(r.middleware)), s = I(() => {
    var O;
    return (O = Nr(r.placement)) != null ? O : "bottom";
  }), i = I(() => {
    var O;
    return (O = Nr(r.strategy)) != null ? O : "absolute";
  }), u = I(() => {
    var O;
    return (O = Nr(r.transform)) != null ? O : !0;
  }), l = I(() => Ms(e.value)), c = I(() => Ms(t.value)), d = j(0), m = j(0), v = j(i.value), p = j(s.value), h = Pn({}), f = j(!1), y = I(() => {
    const O = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!c.value)
      return O;
    const _ = Rl(c.value, d.value), M = Rl(c.value, m.value);
    return u.value ? {
      ...O,
      transform: "translate(" + _ + "px, " + M + "px)",
      ...Dd(c.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: _ + "px",
      top: M + "px"
    };
  });
  let x;
  function P() {
    if (l.value == null || c.value == null)
      return;
    const O = a.value;
    Pg(l.value, c.value, {
      middleware: o.value,
      placement: s.value,
      strategy: i.value
    }).then((_) => {
      d.value = _.x, m.value = _.y, v.value = _.strategy, p.value = _.placement, h.value = _.middlewareData, f.value = O !== !1;
    });
  }
  function A() {
    typeof x == "function" && (x(), x = void 0);
  }
  function T() {
    if (A(), n === void 0) {
      P();
      return;
    }
    if (l.value != null && c.value != null) {
      x = n(l.value, c.value, P);
      return;
    }
  }
  function $() {
    a.value || (f.value = !1);
  }
  return re([o, s, i, a], P, {
    flush: "sync"
  }), re([l, c], T, {
    flush: "sync"
  }), re(a, $, {
    flush: "sync"
  }), Wc() && fi(A), {
    x: pr(d),
    y: pr(m),
    strategy: pr(v),
    placement: pr(p),
    middlewareData: pr(h),
    isPositioned: pr(f),
    floatingStyles: y,
    update: P
  };
}
const Rd = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  hideShiftedArrow: !0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [Tg, $g] = /* @__PURE__ */ ut("PopperContent");
var Dg = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Xc({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Rd }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = bd(), { forwardRef: o, currentElement: s } = ue(), i = j(), u = j(), { width: l, height: c } = hm(u), d = I(() => r.side + (r.align !== "center" ? `-${r.align}` : "")), m = I(() => typeof r.collisionPadding == "number" ? r.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...r.collisionPadding
    }), v = I(() => Array.isArray(r.collisionBoundary) ? r.collisionBoundary : [r.collisionBoundary]), p = I(() => ({
      padding: m.value,
      boundary: v.value.filter(Dy),
      altBoundary: v.value.length > 0
    })), h = I(() => ({
      mainAxis: r.sideFlip,
      crossAxis: r.alignFlip
    })), f = Lh(() => [
      bg({
        mainAxis: r.sideOffset + c.value,
        alignmentAxis: r.alignOffset
      }),
      r.prioritizePosition && r.avoidCollisions && Dl({
        ...p.value,
        ...h.value
      }),
      r.avoidCollisions && wg({
        mainAxis: !0,
        crossAxis: !!r.prioritizePosition,
        limiter: r.sticky === "partial" ? Cg() : void 0,
        ...p.value
      }),
      !r.prioritizePosition && r.avoidCollisions && Dl({
        ...p.value,
        ...h.value
      }),
      xg({
        ...p.value,
        apply: ({ elements: g, rects: C, availableWidth: S, availableHeight: b }) => {
          const { width: q, height: B } = C.reference, k = g.floating.style;
          k.setProperty("--reka-popper-available-width", `${S}px`), k.setProperty("--reka-popper-available-height", `${b}px`), k.setProperty("--reka-popper-anchor-width", `${q}px`), k.setProperty("--reka-popper-anchor-height", `${B}px`);
        }
      }),
      u.value && Ag({
        element: u.value,
        padding: r.arrowPadding
      }),
      Ry({
        arrowWidth: l.value,
        arrowHeight: c.value
      }),
      r.hideWhenDetached && Sg({
        strategy: "referenceHidden",
        ...p.value
      })
    ]), y = I(() => r.reference ?? a.anchor.value), { floatingStyles: x, placement: P, isPositioned: A, middlewareData: T } = kg(y, i, {
      strategy: r.positionStrategy,
      placement: d,
      whileElementsMounted: (...g) => vg(...g, {
        layoutShift: !r.disableUpdateOnLayoutShift,
        animationFrame: r.updatePositionStrategy === "always"
      }),
      middleware: f
    }), $ = I(() => qs(P.value)[0]), O = I(() => qs(P.value)[1]);
    Yc(() => {
      A.value && n("placed");
    });
    const _ = I(() => {
      var C;
      const g = ((C = T.value.arrow) == null ? void 0 : C.centerOffset) !== 0;
      return r.hideShiftedArrow && g;
    }), M = j("");
    yt(() => {
      s.value && (M.value = window.getComputedStyle(s.value).zIndex);
    });
    const D = I(() => {
      var g;
      return ((g = T.value.arrow) == null ? void 0 : g.x) ?? 0;
    }), R = I(() => {
      var g;
      return ((g = T.value.arrow) == null ? void 0 : g.y) ?? 0;
    });
    return $g({
      placedSide: $,
      onArrowChange: (g) => u.value = g,
      arrowX: D,
      arrowY: R,
      shouldHideArrow: _
    }), (g, C) => {
      var S, b, q;
      return E(), F("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-reka-popper-content-wrapper": "",
        style: st({
          ...w(x),
          transform: w(A) ? w(x).transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: M.value,
          "--reka-popper-transform-origin": [(S = w(T).transformOrigin) == null ? void 0 : S.x, (b = w(T).transformOrigin) == null ? void 0 : b.y].join(" "),
          ...((q = w(T).hide) == null ? void 0 : q.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        })
      }, [Y(w(Fe), ae({ ref: w(o) }, g.$attrs, {
        "as-child": r.asChild,
        as: g.as,
        "data-side": $.value,
        "data-align": O.value,
        style: { animation: w(A) ? void 0 : "none" }
      }), {
        default: V(() => [z(g.$slots, "default")]),
        _: 3
      }, 16, [
        "as-child",
        "as",
        "data-side",
        "data-align",
        "style"
      ])], 4);
    };
  }
}), Fd = Dg;
const Rg = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
var Fg = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "PopperArrow",
  props: {
    width: {
      type: Number,
      required: !1
    },
    height: {
      type: Number,
      required: !1
    },
    rounded: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const { forwardRef: t } = ue(), r = Tg(), n = I(() => Rg[r.placedSide.value]);
    return (a, o) => {
      var s, i, u, l;
      return E(), F("span", {
        ref: (c) => {
          w(r).onArrowChange(c ?? void 0);
        },
        style: st({
          position: "absolute",
          left: (s = w(r).arrowX) != null && s.value ? `${(i = w(r).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (u = w(r).arrowY) != null && u.value ? `${(l = w(r).arrowY) == null ? void 0 : l.value}px` : void 0,
          [n.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[w(r).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[w(r).placedSide.value],
          visibility: w(r).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [Y($y, ae(a.$attrs, {
        ref: w(t),
        style: { display: "block" },
        as: a.as,
        "as-child": a.asChild,
        rounded: a.rounded,
        width: a.width,
        height: a.height
      }), {
        default: V(() => [z(a.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "rounded",
        "width",
        "height"
      ])], 4);
    };
  }
}), _g = Fg;
const [$$, qg] = /* @__PURE__ */ ut("RovingFocusGroup");
var Bg = /* @__PURE__ */ K({
  __name: "RovingFocusGroup",
  props: {
    orientation: {
      type: String,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    currentTabStopId: {
      type: [String, null],
      required: !1
    },
    defaultCurrentTabStopId: {
      type: String,
      required: !1
    },
    preventScrollOnEntryFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r, { loop: o, orientation: s, dir: i } = Lt(n), u = bi(i), l = /* @__PURE__ */ Cr(n, "currentTabStopId", a, {
      defaultValue: n.defaultCurrentTabStopId,
      passive: n.currentTabStopId === void 0
    }), c = j(!1), d = j(!1), m = j(0), { getItems: v, CollectionSlot: p } = gd({ isProvider: !0 });
    function h(y) {
      const x = !d.value;
      if (y.currentTarget && y.target === y.currentTarget && x && !c.value) {
        const P = new CustomEvent(xy, Sy);
        if (y.currentTarget.dispatchEvent(P), a("entryFocus", P), !P.defaultPrevented) {
          const A = v().map((M) => M.ref).filter((M) => M.dataset.disabled !== ""), T = A.find((M) => M.getAttribute("data-active") === ""), $ = A.find((M) => M.getAttribute("data-highlighted") === ""), O = A.find((M) => M.id === l.value), _ = [
            T,
            $,
            O,
            ...A
          ].filter(Boolean);
          Ey(_, n.preventScrollOnEntryFocus);
        }
      }
      d.value = !1;
    }
    function f() {
      setTimeout(() => {
        d.value = !1;
      }, 1);
    }
    return t({ getItems: v }), qg({
      loop: o,
      dir: u,
      orientation: s,
      currentTabStopId: l,
      onItemFocus: (y) => {
        l.value = y;
      },
      onItemShiftTab: () => {
        c.value = !0;
      },
      onFocusableItemAdd: () => {
        m.value++;
      },
      onFocusableItemRemove: () => {
        m.value--;
      }
    }), (y, x) => (E(), W(w(p), null, {
      default: V(() => [Y(w(Fe), {
        tabindex: c.value || m.value === 0 ? -1 : 0,
        "data-orientation": w(s),
        as: y.as,
        "as-child": y.asChild,
        dir: w(u),
        style: { outline: "none" },
        onMousedown: x[0] || (x[0] = (P) => d.value = !0),
        onMouseup: f,
        onFocus: h,
        onBlur: x[1] || (x[1] = (P) => c.value = !1)
      }, {
        default: V(() => [z(y.$slots, "default")]),
        _: 3
      }, 8, [
        "tabindex",
        "data-orientation",
        "as",
        "as-child",
        "dir"
      ])]),
      _: 3
    }));
  }
}), Ig = Bg, Lg = /* @__PURE__ */ K({
  __name: "MenuAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, n) => (E(), W(w(xd), Pe(De(t)), {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Mg = Lg;
function Ng() {
  const e = j(!1);
  return me(() => {
    Hr("keydown", () => {
      e.value = !0;
    }, {
      capture: !0,
      passive: !0
    }), Hr(["pointerdown", "pointermove"], () => {
      e.value = !1;
    }, {
      capture: !0,
      passive: !0
    });
  }), e;
}
const jg = /* @__PURE__ */ td(Ng), [qa, Vg] = /* @__PURE__ */ ut(["MenuRoot", "MenuSub"], "MenuContext"), [Ri, Ug] = /* @__PURE__ */ ut("MenuRoot");
var Hg = /* @__PURE__ */ K({
  __name: "MenuRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, n = t, { modal: a, dir: o } = Lt(r), s = bi(o), i = /* @__PURE__ */ Cr(r, "open", n), u = j(), l = jg();
    return Vg({
      open: i,
      onOpenChange: (c) => {
        i.value = c;
      },
      content: u,
      onContentChange: (c) => {
        u.value = c;
      }
    }), Ug({
      onClose: () => {
        i.value = !1;
      },
      isUsingKeyboardRef: l,
      dir: s,
      modal: a
    }), (c, d) => (E(), W(w(wd), null, {
      default: V(() => [z(c.$slots, "default")]),
      _: 3
    }));
  }
}), zg = Hg;
const [_d, Wg] = /* @__PURE__ */ ut("MenuContent");
var Kg = /* @__PURE__ */ K({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ Xc({
    loop: {
      type: Boolean,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    },
    disableOutsideScroll: {
      type: Boolean,
      required: !1
    },
    trapFocus: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...Rd }),
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const r = e, n = t, a = qa(), o = Ri(), { trapFocus: s, disableOutsidePointerEvents: i, loop: u } = Lt(r);
    em(), sd(i.value);
    const l = j(""), c = j(0), d = j(0), m = j(null), v = j("right"), p = j(0), h = j(null), f = j(), { forwardRef: y, currentElement: x } = ue(), { handleTypeaheadSearch: P } = ym(), A = j();
    function T(b) {
      const q = ml(b, A.value || Ue(), x.value, {
        loop: u.value,
        arrowKeyOptions: "vertical",
        dir: o == null ? void 0 : o.dir.value,
        focus: !1,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      q && (A.value = q, q.scrollIntoView({ block: "nearest" }));
    }
    function $() {
      A.value && A.value.click();
    }
    const O = j(), _ = j();
    re(A, (b) => {
      _.value && (b === void 0 || b !== _.value.trigger.value) && (_.value.onOpenChange(!1), _.value = void 0);
    }), re(x, (b) => {
      a.onContentChange(b);
    }), It(() => {
      window.clearTimeout(c.value);
    });
    function M(b) {
      var B, k;
      return v.value === ((B = m.value) == null ? void 0 : B.side) && Km(b, (k = m.value) == null ? void 0 : k.area);
    }
    async function D(b) {
      var q;
      n("openAutoFocus", b), !b.defaultPrevented && (b.preventDefault(), (q = x.value) == null || q.focus({ preventScroll: !0 }));
    }
    function R(b) {
      var ve;
      if (b.defaultPrevented) return;
      const q = b.target, B = q.closest("[data-reka-menu-content]") === b.currentTarget, k = ["input", "textarea"].includes(q.tagName.toLowerCase()), G = b.ctrlKey || b.altKey || b.metaKey, te = b.key.length === 1, de = ml(b, Ue(), x.value, {
        loop: u.value,
        arrowKeyOptions: "vertical",
        dir: o == null ? void 0 : o.dir.value,
        focus: !0,
        attributeName: "[data-reka-collection-item]:not([data-disabled])"
      });
      if (de) return de == null ? void 0 : de.focus();
      if (b.code === "Space") return;
      const Be = ((ve = f.value) == null ? void 0 : ve.getItems()) ?? [];
      if (B && (b.key === "Tab" && b.preventDefault(), !G && te && !k && P(b.key, Be)), b.target !== x.value || !Hm.includes(b.key)) return;
      b.preventDefault();
      const ie = [...Be.map((ye) => ye.ref)];
      hd.includes(b.key) && ie.reverse(), zm(ie);
    }
    function g(b) {
      var q, B;
      (B = (q = b == null ? void 0 : b.currentTarget) == null ? void 0 : q.contains) != null && B.call(q, b.target) || (window.clearTimeout(c.value), l.value = "");
    }
    function C(b) {
      var k;
      if (!ha(b)) return;
      const q = b.target, B = p.value !== b.clientX;
      if ((k = b == null ? void 0 : b.currentTarget) != null && k.contains(q) && B) {
        const G = b.clientX > p.value ? "right" : "left";
        v.value = G, p.value = b.clientX;
      }
    }
    function S(b) {
      ha(b) && O.value && O.value.focus();
    }
    return Wg({
      onItemEnter: (b) => !!M(b),
      onItemLeave: (b) => {
        var B, k;
        return M(b) ? !0 : (["INPUT", "TEXTAREA"].includes(((B = Ue()) == null ? void 0 : B.tagName) || "") || (k = x.value) == null || k.focus(), h.value = null, !1);
      },
      onTriggerLeave: (b) => !!M(b),
      searchRef: l,
      highlightedElement: A,
      onKeydownNavigation: T,
      onKeydownEnter: $,
      filterElement: O,
      onFilterElementChange: (b) => {
        O.value = b;
      },
      activeSubmenuContext: _,
      pointerGraceTimerRef: d,
      onPointerGraceIntentChange: (b) => {
        m.value = b;
      }
    }), (b, q) => (E(), W(w(pd), {
      "as-child": "",
      trapped: w(s),
      onMountAutoFocus: D,
      onUnmountAutoFocus: q[7] || (q[7] = (B) => n("closeAutoFocus", B))
    }, {
      default: V(() => [Y(w(Ei), {
        "as-child": "",
        "disable-outside-pointer-events": w(i),
        onEscapeKeyDown: q[2] || (q[2] = (B) => n("escapeKeyDown", B)),
        onPointerDownOutside: q[3] || (q[3] = (B) => n("pointerDownOutside", B)),
        onFocusOutside: q[4] || (q[4] = (B) => n("focusOutside", B)),
        onInteractOutside: q[5] || (q[5] = (B) => n("interactOutside", B)),
        onDismiss: q[6] || (q[6] = (B) => n("dismiss"))
      }, {
        default: V(() => [Y(w(Ig), {
          ref_key: "rovingFocusGroupRef",
          ref: f,
          "current-tab-stop-id": h.value,
          "onUpdate:currentTabStopId": q[0] || (q[0] = (B) => h.value = B),
          "as-child": "",
          orientation: "vertical",
          dir: w(o).dir.value,
          loop: w(u),
          onEntryFocus: q[1] || (q[1] = (B) => {
            n("entryFocus", B), w(o).isUsingKeyboardRef.value || B.preventDefault();
          })
        }, {
          default: V(() => [Y(w(Fd), {
            ref: w(y),
            role: "menu",
            as: b.as,
            "as-child": b.asChild,
            "aria-orientation": "vertical",
            "data-reka-menu-content": "",
            "data-state": w(md)(w(a).open.value),
            dir: w(o).dir.value,
            side: b.side,
            "side-offset": b.sideOffset,
            align: b.align,
            "align-offset": b.alignOffset,
            "avoid-collisions": b.avoidCollisions,
            "collision-boundary": b.collisionBoundary,
            "collision-padding": b.collisionPadding,
            "arrow-padding": b.arrowPadding,
            "prioritize-position": b.prioritizePosition,
            "position-strategy": b.positionStrategy,
            "update-position-strategy": b.updatePositionStrategy,
            sticky: b.sticky,
            "hide-when-detached": b.hideWhenDetached,
            reference: b.reference,
            onKeydown: R,
            onBlur: g,
            onPointermove: C,
            onPointerenter: S
          }, {
            default: V(() => [z(b.$slots, "default")]),
            _: 3
          }, 8, [
            "as",
            "as-child",
            "data-state",
            "dir",
            "side",
            "side-offset",
            "align",
            "align-offset",
            "avoid-collisions",
            "collision-boundary",
            "collision-padding",
            "arrow-padding",
            "prioritize-position",
            "position-strategy",
            "update-position-strategy",
            "sticky",
            "hide-when-detached",
            "reference"
          ])]),
          _: 3
        }, 8, [
          "current-tab-stop-id",
          "dir",
          "loop"
        ])]),
        _: 3
      }, 8, ["disable-outside-pointer-events"])]),
      _: 3
    }, 8, ["trapped"]));
  }
}), qd = Kg, Gg = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "MenuItemImpl",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, r = _d(), { forwardRef: n, currentElement: a } = ue(), { CollectionItem: o } = gd(), s = j(!1), i = I(() => s.value || r.highlightedElement.value === a.value);
    async function u(c) {
      var d;
      if (!(c.defaultPrevented || !ha(c))) {
        if (t.disabled) r.onItemLeave(c);
        else if (!r.onItemEnter(c)) {
          const v = c.currentTarget;
          r.highlightedElement.value = v, ["INPUT", "TEXTAREA"].includes(((d = Ue()) == null ? void 0 : d.tagName) || "") || v.focus({ preventScroll: !0 });
        }
      }
    }
    async function l(c) {
      if (await je(), c.defaultPrevented || !ha(c) || r.highlightedElement.value !== a.value) return;
      !r.onItemLeave(c) && r.highlightedElement.value === a.value && (r.highlightedElement.value = void 0);
    }
    return (c, d) => (E(), W(w(o), { value: { textValue: c.textValue } }, {
      default: V(() => [Y(w(Fe), ae({
        ref: w(n),
        role: "menuitem",
        tabindex: "-1"
      }, c.$attrs, {
        as: c.as,
        "as-child": c.asChild,
        "aria-disabled": c.disabled || void 0,
        "data-disabled": c.disabled ? "" : void 0,
        "data-highlighted": i.value ? "" : void 0,
        onPointermove: u,
        onPointerleave: l,
        onFocus: d[0] || (d[0] = async (m) => {
          await je(), !(m.defaultPrevented || c.disabled) && (s.value = !0, w(r).highlightedElement.value = m.currentTarget);
        }),
        onBlur: d[1] || (d[1] = async (m) => {
          await je(), !m.defaultPrevented && (s.value = !1);
        })
      }), {
        default: V(() => [z(c.$slots, "default")]),
        _: 3
      }, 16, [
        "as",
        "as-child",
        "aria-disabled",
        "data-disabled",
        "data-highlighted"
      ])]),
      _: 3
    }, 8, ["value"]));
  }
}), Jg = Gg, Yg = /* @__PURE__ */ K({
  __name: "MenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, n = t, { forwardRef: a, currentElement: o } = ue(), s = Ri(), i = _d(), u = j(!1);
    async function l() {
      const c = o.value;
      if (!r.disabled && c) {
        const d = new CustomEvent(Vm, {
          bubbles: !0,
          cancelable: !0
        });
        n("select", d), await je(), d.defaultPrevented ? u.value = !1 : s.onClose();
      }
    }
    return (c, d) => (E(), W(Jg, ae(r, {
      ref: w(a),
      onClick: l,
      onPointerdown: d[0] || (d[0] = () => {
        u.value = !0;
      }),
      onPointerup: d[1] || (d[1] = async (m) => {
        var v;
        await je(), !m.defaultPrevented && (u.value || (v = m.currentTarget) == null || v.click());
      }),
      onKeydown: d[2] || (d[2] = async (m) => {
        var p;
        const v = w(i).searchRef.value !== "";
        c.disabled || v && m.key === " " || w(_s).includes(m.key) && ((p = m.currentTarget) == null || p.click(), m.preventDefault());
      })
    }), {
      default: V(() => [z(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Xg = Yg, Qg = /* @__PURE__ */ K({
  __name: "MenuRootContentModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const r = e, n = t, a = Tn(r, n), o = qa(), { forwardRef: s, currentElement: i } = ue();
    return ud(i), (u, l) => (E(), W(qd, ae(w(a), {
      ref: w(s),
      "trap-focus": w(o).open.value,
      "disable-outside-pointer-events": w(o).open.value,
      "disable-outside-scroll": !0,
      onDismiss: l[0] || (l[0] = (c) => w(o).onOpenChange(!1)),
      onFocusOutside: l[1] || (l[1] = wt((c) => n("focusOutside", c), ["prevent"]))
    }), {
      default: V(() => [z(u.$slots, "default")]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Zg = Qg, ev = /* @__PURE__ */ K({
  __name: "MenuRootContentNonModal",
  props: {
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = Tn(e, t), o = qa();
    return (s, i) => (E(), W(qd, ae(w(a), {
      "trap-focus": !1,
      "disable-outside-pointer-events": !1,
      "disable-outside-scroll": !1,
      onDismiss: i[0] || (i[0] = (u) => w(o).onOpenChange(!1))
    }), {
      default: V(() => [z(s.$slots, "default")]),
      _: 3
    }, 16));
  }
}), tv = ev, rv = /* @__PURE__ */ K({
  __name: "MenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "entryFocus",
    "openAutoFocus",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = Tn(e, t), o = qa(), s = Ri();
    return (i, u) => (E(), W(w($n), { present: i.forceMount || w(o).open.value }, {
      default: V(() => [w(s).modal.value ? (E(), W(Zg, Pe(ae({ key: 0 }, {
        ...i.$attrs,
        ...w(a)
      })), {
        default: V(() => [z(i.$slots, "default")]),
        _: 3
      }, 16)) : (E(), W(tv, Pe(ae({ key: 1 }, {
        ...i.$attrs,
        ...w(a)
      })), {
        default: V(() => [z(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), nv = rv, av = /* @__PURE__ */ K({
  __name: "MenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, n) => (E(), W(w(Ci), Pe(De(t)), {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), ov = av, sv = /* @__PURE__ */ K({
  __name: "MenuSeparator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, n) => (E(), W(w(Fe), ae(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), iv = sv;
const [Bd, lv] = /* @__PURE__ */ ut("DropdownMenuRoot");
var uv = /* @__PURE__ */ K({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    dir: {
      type: String,
      required: !1
    },
    modal: {
      type: Boolean,
      required: !1,
      default: !0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, n = t;
    ue();
    const a = /* @__PURE__ */ Cr(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    }), o = j(), { modal: s, dir: i } = Lt(r), u = bi(i);
    return lv({
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
    }), (l, c) => (E(), W(w(zg), {
      open: w(a),
      "onUpdate:open": c[0] || (c[0] = (d) => tr(a) ? a.value = d : null),
      dir: w(u),
      modal: w(s)
    }, {
      default: V(() => [z(l.$slots, "default", { open: w(a) })]),
      _: 3
    }, 8, [
      "open",
      "dir",
      "modal"
    ]));
  }
}), Id = uv, cv = /* @__PURE__ */ K({
  __name: "DropdownMenuContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    loop: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "closeAutoFocus"
  ],
  setup(e, { emit: t }) {
    const a = Tn(e, t);
    ue();
    const o = Bd(), s = j(!1);
    function i(u) {
      u.defaultPrevented || (s.value || setTimeout(() => {
        var l;
        (l = o.triggerElement.value) == null || l.focus();
      }, 0), s.value = !1, u.preventDefault());
    }
    return o.contentId || (o.contentId = vr(void 0, "reka-dropdown-menu-content")), (u, l) => {
      var c;
      return E(), W(w(nv), ae(w(a), {
        id: w(o).contentId,
        "aria-labelledby": (c = w(o)) == null ? void 0 : c.triggerId,
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
          const m = d.detail.originalEvent, v = m.button === 0 && m.ctrlKey === !0, p = m.button === 2 || v;
          (!w(o).modal.value || p) && (s.value = !0), (h = w(o).triggerElement.value) != null && h.contains(d.target) && d.preventDefault();
        })
      }), {
        default: V(() => [z(u.$slots, "default")]),
        _: 3
      }, 16, ["id", "aria-labelledby"]);
    };
  }
}), Ld = cv, dv = /* @__PURE__ */ K({
  __name: "DropdownMenuItem",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    textValue: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const r = e, a = kn(t);
    return ue(), (o, s) => (E(), W(w(Xg), Pe(De({
      ...r,
      ...w(a)
    })), {
      default: V(() => [z(o.$slots, "default")]),
      _: 3
    }, 16));
  }
}), fv = dv, pv = /* @__PURE__ */ K({
  __name: "DropdownMenuPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, n) => (E(), W(w(ov), Pe(De(t)), {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Md = pv, hv = /* @__PURE__ */ K({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, n) => (E(), W(w(iv), Pe(De(t)), {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), mv = hv, yv = /* @__PURE__ */ K({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = Bd(), { forwardRef: n, currentElement: a } = ue();
    return me(() => {
      r.triggerElement = a;
    }), r.triggerId || (r.triggerId = vr(void 0, "reka-dropdown-menu-trigger")), (o, s) => (E(), W(w(Mg), { "as-child": "" }, {
      default: V(() => [Y(w(Fe), {
        id: w(r).triggerId,
        ref: w(n),
        type: o.as === "button" ? "button" : void 0,
        "as-child": t.asChild,
        as: o.as,
        "aria-haspopup": "menu",
        "aria-expanded": w(r).open.value,
        "aria-controls": w(r).open.value ? w(r).contentId : void 0,
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        "data-state": w(r).open.value ? "open" : "closed",
        onClick: s[0] || (s[0] = async (i) => {
          var u;
          !o.disabled && i.button === 0 && i.ctrlKey === !1 && ((u = w(r)) == null || u.onOpenToggle(), await je(), w(r).open.value && i.preventDefault());
        }),
        onKeydown: s[1] || (s[1] = nr((i) => {
          o.disabled || (["Enter", " "].includes(i.key) && w(r).onOpenToggle(), i.key === "ArrowDown" && w(r).onOpenChange(!0), [
            "Enter",
            " ",
            "ArrowDown"
          ].includes(i.key) && i.preventDefault());
        }, [
          "enter",
          "space",
          "arrow-down"
        ]))
      }, {
        default: V(() => [z(o.$slots, "default")]),
        _: 3
      }, 8, [
        "id",
        "type",
        "as-child",
        "as",
        "aria-expanded",
        "aria-controls",
        "data-disabled",
        "disabled",
        "data-state"
      ])]),
      _: 3
    }));
  }
}), Nd = yv;
const [gv, vv] = /* @__PURE__ */ ut("SwitchRoot");
var bv = /* @__PURE__ */ K({
  __name: "SwitchRoot",
  props: {
    defaultValue: {
      type: null,
      required: !1
    },
    modelValue: {
      type: null,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    value: {
      type: String,
      required: !1,
      default: "on"
    },
    trueValue: {
      type: null,
      required: !1,
      default: () => !0
    },
    falseValue: {
      type: null,
      required: !1,
      default: () => !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, n = t, { disabled: a } = Lt(r), o = /* @__PURE__ */ Cr(r, "modelValue", n, {
      defaultValue: r.defaultValue ?? r.falseValue,
      passive: r.modelValue === void 0
    }), s = I(() => o.value === r.trueValue);
    function i() {
      a.value || (o.value = s.value ? r.falseValue : r.trueValue);
    }
    const { forwardRef: u, currentElement: l } = ue(), c = tm(l), d = I(() => {
      var m;
      return r.id && l.value ? (m = document.querySelector(`[for="${r.id}"]`)) == null ? void 0 : m.innerText : void 0;
    });
    return vv({
      checked: s,
      toggleCheck: i,
      disabled: a
    }), (m, v) => (E(), W(w(Fe), ae(m.$attrs, {
      id: m.id,
      ref: w(u),
      role: "switch",
      type: m.as === "button" ? "button" : void 0,
      value: m.value,
      "aria-label": m.$attrs["aria-label"] || d.value,
      "aria-checked": s.value,
      "aria-required": m.required,
      "data-state": s.value ? "checked" : "unchecked",
      "data-disabled": w(a) ? "" : void 0,
      "as-child": m.asChild,
      as: m.as,
      disabled: w(a),
      onClick: i,
      onKeydown: nr(wt(i, ["prevent"]), ["enter"])
    }), {
      default: V(() => [z(m.$slots, "default", {
        modelValue: w(o),
        checked: s.value
      }), w(c) && m.name ? (E(), W(w(wy), {
        key: 0,
        type: "checkbox",
        name: m.name,
        disabled: w(a),
        required: m.required,
        value: m.value,
        checked: s.value
      }, null, 8, [
        "name",
        "disabled",
        "required",
        "value",
        "checked"
      ])) : J("v-if", !0)]),
      _: 3
    }, 16, [
      "id",
      "type",
      "value",
      "aria-label",
      "aria-checked",
      "aria-required",
      "data-state",
      "data-disabled",
      "as-child",
      "as",
      "disabled",
      "onKeydown"
    ]));
  }
}), wv = bv, xv = /* @__PURE__ */ K({
  __name: "SwitchThumb",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = gv();
    return ue(), (r, n) => (E(), W(w(Fe), {
      "data-state": w(t).checked.value ? "checked" : "unchecked",
      "data-disabled": w(t).disabled.value ? "" : void 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 8, [
      "data-state",
      "data-disabled",
      "as-child",
      "as"
    ]));
  }
}), Sv = xv, Ev = /* @__PURE__ */ K({
  __name: "TooltipArrow",
  props: {
    width: {
      type: Number,
      required: !1,
      default: 10
    },
    height: {
      type: Number,
      required: !1,
      default: 5
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "svg"
    }
  },
  setup(e) {
    const t = e;
    return ue(), (r, n) => (E(), W(w(_g), Pe(De(t)), {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Cv = Ev;
const [Ba, Pv] = /* @__PURE__ */ ut("TooltipProvider");
var Ov = /* @__PURE__ */ K({
  inheritAttrs: !1,
  __name: "TooltipProvider",
  props: {
    delayDuration: {
      type: Number,
      required: !1,
      default: 700
    },
    skipDelayDuration: {
      type: Number,
      required: !1,
      default: 300
    },
    disableHoverableContent: {
      type: Boolean,
      required: !1,
      default: !1
    },
    disableClosingTrigger: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    content: {
      type: Object,
      required: !1
    }
  },
  setup(e) {
    const t = e, { delayDuration: r, skipDelayDuration: n, disableHoverableContent: a, disableClosingTrigger: o, ignoreNonKeyboardFocus: s, disabled: i, content: u } = Lt(t);
    ue();
    const l = j(!0), c = j(!1), { start: d, stop: m } = nd(() => {
      l.value = !0;
    }, n, { immediate: !1 });
    return Pv({
      isOpenDelayed: l,
      delayDuration: r,
      onOpen() {
        m(), l.value = !1;
      },
      onClose() {
        d();
      },
      isPointerInTransitRef: c,
      disableHoverableContent: a,
      disableClosingTrigger: o,
      disabled: i,
      ignoreNonKeyboardFocus: s,
      content: u
    }), (v, p) => z(v.$slots, "default");
  }
}), Av = Ov;
const jd = "tooltip.open", [Ia, kv] = /* @__PURE__ */ ut("TooltipRoot");
var Tv = /* @__PURE__ */ K({
  __name: "TooltipRoot",
  props: {
    defaultOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    delayDuration: {
      type: Number,
      required: !1,
      default: void 0
    },
    disableHoverableContent: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disableClosingTrigger: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    disabled: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    ignoreNonKeyboardFocus: {
      type: Boolean,
      required: !1,
      default: void 0
    }
  },
  emits: ["update:open"],
  setup(e, { emit: t }) {
    const r = e, n = t;
    ue();
    const a = Ba(), o = I(() => r.disableHoverableContent ?? a.disableHoverableContent.value), s = I(() => r.disableClosingTrigger ?? a.disableClosingTrigger.value), i = I(() => r.disabled ?? a.disabled.value), u = I(() => r.delayDuration ?? a.delayDuration.value), l = I(() => r.ignoreNonKeyboardFocus ?? a.ignoreNonKeyboardFocus.value), c = /* @__PURE__ */ Cr(r, "open", n, {
      defaultValue: r.defaultOpen,
      passive: r.open === void 0
    });
    re(c, (P) => {
      a.onClose && (P ? (a.onOpen(), document.dispatchEvent(new CustomEvent(jd))) : a.onClose());
    });
    const d = j(!1), m = j(), v = I(() => c.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: p, stop: h } = nd(() => {
      d.value = !0, c.value = !0;
    }, u, { immediate: !1 });
    function f() {
      h(), d.value = !1, c.value = !0;
    }
    function y() {
      h(), c.value = !1;
    }
    function x() {
      p();
    }
    return kv({
      contentId: "",
      open: c,
      stateAttribute: v,
      trigger: m,
      onTriggerChange(P) {
        m.value = P;
      },
      onTriggerEnter() {
        a.isOpenDelayed.value ? x() : f();
      },
      onTriggerLeave() {
        o.value ? y() : h();
      },
      onOpen: f,
      onClose: y,
      disableHoverableContent: o,
      disableClosingTrigger: s,
      disabled: i,
      ignoreNonKeyboardFocus: l
    }), (P, A) => (E(), W(w(wd), null, {
      default: V(() => [z(P.$slots, "default", { open: w(c) })]),
      _: 3
    }));
  }
}), $v = Tv, Dv = /* @__PURE__ */ K({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = Ia(), o = Ba(), { forwardRef: s, currentElement: i } = ue(), u = I(() => {
      var c;
      return r.ariaLabel || ((c = i.value) == null ? void 0 : c.textContent);
    }), l = I(() => {
      const { ariaLabel: c, ...d } = r;
      return od(d, o.content.value ?? {}, {
        side: "top",
        sideOffset: 0,
        align: "center",
        avoidCollisions: !0,
        collisionBoundary: [],
        collisionPadding: 0,
        arrowPadding: 0,
        sticky: "partial",
        hideWhenDetached: !1
      });
    });
    return me(() => {
      Hr(window, "scroll", (c) => {
        const d = c.target;
        d != null && d.contains(a.trigger.value) && a.onClose();
      }, { capture: !0 }), Hr(window, jd, a.onClose);
    }), (c, d) => (E(), W(w(Ei), {
      "as-child": "",
      "disable-outside-pointer-events": !1,
      onEscapeKeyDown: d[0] || (d[0] = (m) => n("escapeKeyDown", m)),
      onPointerDownOutside: d[1] || (d[1] = (m) => {
        var v;
        w(a).disableClosingTrigger.value && ((v = w(a).trigger.value) != null && v.contains(m.target)) && m.preventDefault(), n("pointerDownOutside", m);
      }),
      onFocusOutside: d[2] || (d[2] = wt(() => {
      }, ["prevent"])),
      onDismiss: d[3] || (d[3] = (m) => w(a).onClose())
    }, {
      default: V(() => [Y(w(Fd), ae({
        ref: w(s),
        "data-state": w(a).stateAttribute.value
      }, {
        ...c.$attrs,
        ...l.value
      }, { style: {
        "--reka-tooltip-content-transform-origin": "var(--reka-popper-transform-origin)",
        "--reka-tooltip-content-available-width": "var(--reka-popper-available-width)",
        "--reka-tooltip-content-available-height": "var(--reka-popper-available-height)",
        "--reka-tooltip-trigger-width": "var(--reka-popper-anchor-width)",
        "--reka-tooltip-trigger-height": "var(--reka-popper-anchor-height)"
      } }), {
        default: V(() => [z(c.$slots, "default"), Y(w(vd), {
          id: w(a).contentId,
          role: "tooltip"
        }, {
          default: V(() => [fe(Q(u.value), 1)]),
          _: 1
        }, 8, ["id"])]),
        _: 3
      }, 16, ["data-state"])]),
      _: 3
    }));
  }
}), Vd = Dv, Rv = /* @__PURE__ */ K({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    const r = id(e), { forwardRef: n, currentElement: a } = ue(), { trigger: o, onClose: s } = Ia(), i = Ba(), { isPointerInTransit: u, onPointerExit: l } = rm(o, a);
    return i.isPointerInTransitRef = u, l(() => {
      s();
    }), (c, d) => (E(), W(Vd, ae({ ref: w(n) }, w(r)), {
      default: V(() => [z(c.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Fv = Rv, _v = /* @__PURE__ */ K({
  __name: "TooltipContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    ariaLabel: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = Ia(), o = Tn(r, n), { forwardRef: s } = ue();
    return (i, u) => (E(), W(w($n), { present: i.forceMount || w(a).open.value }, {
      default: V(() => [(E(), W(na(w(a).disableHoverableContent.value ? Vd : Fv), ae({ ref: w(s) }, w(o)), {
        default: V(() => [z(i.$slots, "default")]),
        _: 3
      }, 16))]),
      _: 3
    }, 8, ["present"]));
  }
}), qv = _v, Bv = /* @__PURE__ */ K({
  __name: "TooltipPortal",
  props: {
    to: {
      type: null,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    defer: {
      type: Boolean,
      required: !1
    },
    forceMount: {
      type: Boolean,
      required: !1
    }
  },
  setup(e) {
    const t = e;
    return (r, n) => (E(), W(w(Ci), Pe(De(t)), {
      default: V(() => [z(r.$slots, "default")]),
      _: 3
    }, 16));
  }
}), Iv = Bv, Lv = /* @__PURE__ */ K({
  __name: "TooltipTrigger",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, r = Ia(), n = Ba();
    r.contentId || (r.contentId = vr(void 0, "reka-tooltip-content"));
    const { forwardRef: a, currentElement: o } = ue(), s = j(!1), i = j(!1), u = I(() => r.disabled.value ? {} : {
      click: h,
      focus: v,
      pointermove: d,
      pointerleave: m,
      pointerdown: c,
      blur: p
    });
    me(() => {
      r.onTriggerChange(o.value);
    });
    function l() {
      setTimeout(() => {
        s.value = !1;
      }, 1);
    }
    function c() {
      r.open && !r.disableClosingTrigger.value && r.onClose(), s.value = !0, document.addEventListener("pointerup", l, { once: !0 });
    }
    function d(f) {
      f.pointerType !== "touch" && !i.value && !n.isPointerInTransitRef.value && (r.onTriggerEnter(), i.value = !0);
    }
    function m() {
      r.onTriggerLeave(), i.value = !1;
    }
    function v(f) {
      var y, x;
      s.value || r.ignoreNonKeyboardFocus.value && !((x = (y = f.target).matches) != null && x.call(y, ":focus-visible")) || r.onOpen();
    }
    function p() {
      r.onClose();
    }
    function h() {
      r.disableClosingTrigger.value || r.onClose();
    }
    return (f, y) => (E(), W(w(xd), {
      "as-child": "",
      reference: f.reference
    }, {
      default: V(() => [Y(w(Fe), ae({
        ref: w(a),
        "aria-describedby": w(r).open.value ? w(r).contentId : void 0,
        "data-state": w(r).stateAttribute.value,
        as: f.as,
        "as-child": t.asChild,
        "data-grace-area-trigger": ""
      }, Qc(u.value)), {
        default: V(() => [z(f.$slots, "default")]),
        _: 3
      }, 16, [
        "aria-describedby",
        "data-state",
        "as",
        "as-child"
      ])]),
      _: 3
    }, 8, ["reference"]));
  }
}), Mv = Lv;
const Nv = { class: "flex items-center" }, jv = {
  key: 1,
  class: "mr-1"
}, Vv = {
  key: 3,
  class: "ml-1"
}, Uv = /* @__PURE__ */ K({
  __name: "Switch",
  props: /* @__PURE__ */ St({
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
  emits: /* @__PURE__ */ St(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r;
    function o(h) {
      return h.split("_").join(" ").split(" ").map((f) => f.charAt(0).toUpperCase() + f.slice(1)).join(" ");
    }
    const s = j(!1), i = Jr(e, "modelValue"), u = j(!1), l = j(!1), c = j(!1);
    me(() => {
      var f;
      s.value = !n.form;
      const h = s.value ? !!i.value : !!((f = n.form) != null && f[n.field]);
      u.value = h, l.value = h;
    }), re(
      () => u.value,
      (h, f) => {
        if (h !== f) {
          if (s.value ? i.value = h : n.form && n.field && (n.form[n.field] = h), l.value = f, a("update:modelValue", h), c.value) {
            c.value = !1;
            return;
          }
          a("changed", { value: h, old_value: f });
        }
      }
    ), re(
      () => n.field && n.form ? n.form[n.field] : null,
      (h) => {
        u.value = s.value ? !!i.value : !!h;
      },
      { deep: !0 }
    ), re(
      () => i.value,
      (h) => {
        u.value = !!h;
      }
    );
    const d = I(() => n.label || (n.field ? o(n.field) : "")), m = I(() => {
      var h, f;
      return n.error || ((f = (h = n.form) == null ? void 0 : h.errors) == null ? void 0 : f[n.field]);
    });
    return t({
      setValueSilently: (h) => {
        u.value = !!h, c.value = !0;
      },
      getPreviousValue: () => l.value
    }), (h, f) => {
      var y, x;
      return E(), F("div", {
        class: X(e.noLabel ? "mb-2" : "mb-4")
      }, [
        e.noLabel ? J("", !0) : (E(), W(w(Yr), {
          key: 0,
          customClass: e.labelCustomClass,
          for: e.field,
          value: d.value,
          sublabel: e.sublabel,
          required: e.required,
          tooltip: e.tooltip
        }, null, 8, ["customClass", "for", "value", "sublabel", "required", "tooltip"])),
        N("label", Nv, [
          (y = h.$slots) != null && y.leftDescription ? z(h.$slots, "leftDescription", { key: 0 }) : e.leftDescription ? (E(), F("span", jv, Q(e.leftDescription === !0 ? "Disable" : e.leftDescription), 1)) : J("", !0),
          Y(w(wv), {
            id: e.field,
            checked: u.value,
            "onUpdate:checked": f[0] || (f[0] = (P) => u.value = P),
            name: e.name || e.field,
            required: e.required,
            disabled: e.disabled,
            "aria-label": d.value || void 0,
            class: X(["focus-visible:ring-primary data-[state=checked]:bg-primary relative mx-2 ml-0 inline-flex h-6 w-12 flex-none cursor-pointer items-center rounded-xl bg-gray-300 shadow transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50", e.customClass])
          }, {
            default: V(() => [
              Y(w(Sv), { class: "pointer-events-none block h-[1.25rem] w-[1.25rem] translate-x-[0.125rem] rounded-full bg-white shadow transition-transform duration-150 will-change-transform data-[state=checked]:translate-x-[1.625rem]" })
            ]),
            _: 1
          }, 8, ["id", "checked", "name", "required", "disabled", "aria-label", "class"]),
          (x = h.$slots) != null && x.rightDescription ? z(h.$slots, "rightDescription", { key: 2 }) : e.rightDescription ? (E(), F("span", Vv, Q(e.rightDescription === !0 ? "Enable" : e.rightDescription), 1)) : J("", !0)
        ]),
        m.value ? (E(), W(w(cr), {
          key: 1,
          message: m.value,
          class: "mt-2"
        }, null, 8, ["message"])) : J("", !0)
      ], 2);
    };
  }
}), Hv = ["id", "required", "disabled", "name"], zv = ["selected"], Wv = ["value", "disabled"], D$ = /* @__PURE__ */ K({
  __name: "Select",
  props: /* @__PURE__ */ St({
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
  emits: /* @__PURE__ */ St(["update:modelValue", "changed"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const n = e, a = r;
    function o(f) {
      return f.split("_").join(" ").split(" ").map((y) => y.charAt(0).toUpperCase() + y.slice(1)).join(" ");
    }
    const s = j(!1), i = Jr(e, "modelValue"), u = j(), l = j(), c = j(!1);
    me(() => {
      var f;
      s.value = !n.form, u.value = s.value ? i.value : (f = n.form) == null ? void 0 : f[n.field];
    }), re(
      () => u.value,
      (f, y) => {
        if (f !== y) {
          if (s.value ? i.value = f : n.form && n.field && (n.form[n.field] = f), l.value = y, a("update:modelValue", f), c.value) {
            c.value = !1;
            return;
          }
          a("changed", { value: f, old_value: y });
        }
      }
    ), re(
      () => n.field && n.form ? n.form[n.field] : null,
      (f) => {
        u.value = s.value ? i.value : f;
      },
      { deep: !0 }
    ), re(
      () => i.value,
      (f) => {
        u.value = f;
      }
    );
    const d = I(() => n.options ? n.options.map((f) => typeof f == "string" ? { value: f, label: f, disabled: !1 } : {
      value: f.value,
      label: f.label || String(f.value),
      disabled: f.disabled || !1
    }) : []), m = I(() => n.label || (n.field ? o(n.field) : "")), v = I(() => {
      var f, y;
      return n.error || ((y = (f = n.form) == null ? void 0 : f.errors) == null ? void 0 : y[n.field]);
    });
    return t({
      setValueSilently: (f) => {
        u.value = f, c.value = !0;
      },
      getPreviousValue: () => l.value
    }), (f, y) => (E(), W(w(hi), {
      field: e.field,
      label: m.value,
      sublabel: e.sublabel,
      tooltip: e.tooltip,
      required: e.required,
      noLabel: e.noLabel,
      labelCustomClass: e.labelCustomClass,
      form: e.form,
      error: v.value,
      htmlFor: e.field
    }, {
      default: V(() => [
        ot(N("select", {
          id: e.field,
          "onUpdate:modelValue": y[0] || (y[0] = (x) => u.value = x),
          required: e.required,
          disabled: e.disabled,
          name: e.name || e.field,
          class: X(["focusable focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-gray-300 px-3 py-2 shadow disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500 dark:[&>option]:bg-gray-800 dark:[&>option]:text-gray-100", e.customClass])
        }, [
          e.placeholder ? (E(), F("option", {
            key: 0,
            value: "",
            disabled: "",
            selected: !u.value,
            class: "text-gray-500 dark:text-gray-400"
          }, Q(e.placeholder), 9, zv)) : J("", !0),
          (E(!0), F(ne, null, Ce(d.value, (x) => (E(), F("option", {
            key: x.value,
            value: x.value,
            disabled: x.disabled
          }, Q(x.label), 9, Wv))), 128)),
          z(f.$slots, "default")
        ], 10, Hv), [
          [Hc, u.value]
        ])
      ]),
      _: 3
    }, 8, ["field", "label", "sublabel", "tooltip", "required", "noLabel", "labelCustomClass", "form", "error", "htmlFor"]));
  }
}), Kv = ["id", "disabled"], Gv = { class: "flex flex-wrap gap-1" }, Jv = ["onClick"], Yv = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, Xv = { class: "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/40" }, Qv = {
  key: 0,
  class: "border-b border-gray-200 dark:border-gray-700 p-2"
}, Zv = { class: "relative" }, e0 = {
  key: 1,
  class: "flex items-center justify-center p-4"
}, t0 = {
  key: 2,
  class: "max-h-60 overflow-auto"
}, r0 = {
  key: 0,
  class: "bg-gray-50 dark:bg-gray-900/40 px-3 py-2 text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400 uppercase"
}, n0 = ["onClick", "disabled"], a0 = { class: "block truncate" }, o0 = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, s0 = ["onClick", "disabled"], i0 = { class: "block truncate" }, l0 = {
  key: 0,
  class: "text-primary-600 absolute inset-y-0 right-0 flex items-center pr-4"
}, u0 = {
  key: 2,
  class: "px-3 py-2 text-center text-sm text-gray-500 dark:text-gray-400"
}, R$ = /* @__PURE__ */ K({
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
    const r = e, n = t, a = j(!1), o = j(""), s = j(!1), i = j(null), u = j([...r.options]), l = j(), c = j(), d = I({
      get() {
        return r.modelValue !== void 0 ? r.modelValue : r.form && r.field ? r.form[r.field] : r.multiple ? [] : void 0;
      },
      set(b) {
        r.modelValue !== void 0 ? n("update:modelValue", b) : r.form && r.field && (r.form[r.field] = b);
      }
    }), m = (b) => b[r.optionValue], v = (b) => b[r.optionLabel], p = (b) => b[r.optionGroup], h = I(() => {
      var b;
      if ((b = r.form) != null && b.errors && r.field)
        return r.form.errors[r.field];
    }), f = I(() => r.label ? r.label : r.field ? r.field.split("_").map((b) => b.charAt(0).toUpperCase() + b.slice(1)).join(" ") : ""), y = I(() => r.field || `select-${Math.random().toString(36).substr(2, 9)}`), x = I(() => {
      if (!r.searchable || !o.value)
        return u.value;
      const b = o.value.toLowerCase();
      return u.value.filter((q) => v(q).toLowerCase().includes(b));
    }), P = I(() => {
      if (!r.grouping)
        return { ungrouped: x.value };
      const b = {};
      return x.value.forEach((q) => {
        const B = p(q) || "ungrouped";
        b[B] || (b[B] = []), b[B].push(q);
      }), b;
    }), A = I(() => {
      if (!d.value) return [];
      const b = r.multiple ? d.value : [d.value];
      return u.value.filter((q) => b.includes(m(q)));
    }), T = I(() => A.value.length ? r.multiple ? A.value.map((b) => v(b)).join(", ") : v(A.value[0]) : r.placeholder), $ = async (b) => {
      if (!(!r.apiSearch || !r.apiUrl)) {
        s.value = !0;
        try {
          const q = new URL(r.apiUrl);
          q.searchParams.set(r.apiSearchParam, b);
          const k = await (await fetch(q.toString())).json(), G = r.apiTransform ? r.apiTransform(k) : k;
          u.value = G, n("optionsLoaded", G);
        } catch (q) {
          console.error("API search error:", q);
        } finally {
          s.value = !1;
        }
      }
    }, O = (b) => {
      o.value = b, n("search", b), r.apiSearch && b.length >= r.minSearchLength && (i.value && clearTimeout(i.value), i.value = setTimeout(() => {
        $(b);
      }, r.searchDelay));
    }, _ = (b) => {
      if (b.disabled) return;
      const q = m(b);
      if (r.multiple) {
        const B = d.value || [], k = B.indexOf(q);
        k > -1 ? d.value = B.filter((G, te) => te !== k) : d.value = [...B, q];
      } else
        d.value = q, a.value = !1;
    }, M = (b, q) => {
      if (q.stopPropagation(), r.multiple) {
        const B = m(b);
        d.value = d.value.filter((k) => k !== B);
      }
    }, D = (b) => {
      b.stopPropagation(), d.value = r.multiple ? [] : void 0;
    }, R = (b) => {
      const q = m(b);
      return r.multiple ? (d.value || []).includes(q) : d.value === q;
    }, g = () => {
      r.disabled || (a.value = !a.value, a.value && r.searchable && je(() => {
        var b;
        (b = c.value) == null || b.focus();
      }));
    }, C = (b) => {
      l.value && !l.value.contains(b.target) && (a.value = !1);
    };
    return re(
      () => r.options,
      (b) => {
        u.value = [...b];
      },
      { immediate: !0 }
    ), me(() => {
      document.addEventListener("click", C);
    }), It(() => {
      document.removeEventListener("click", C), i.value && clearTimeout(i.value);
    }), (b, q) => (E(), W(w(hi), {
      field: e.field,
      label: f.value,
      tooltip: e.tooltip,
      required: e.required,
      noLabel: e.noLabel,
      form: e.form,
      error: h.value,
      htmlFor: y.value
    }, {
      default: V(() => [
        N("div", {
          class: "relative",
          ref_key: "dropdownRef",
          ref: l
        }, [
          N("button", {
            type: "button",
            id: y.value,
            onClick: g,
            disabled: e.disabled,
            class: X(["focusable focus:border-primary-500 focus:ring-primary-500 relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pr-10 pl-3 text-left text-gray-900 shadow-sm transition-colors focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-primary-400 dark:focus:ring-primary-400 dark:disabled:border-gray-700 dark:disabled:bg-gray-800/50 dark:disabled:text-gray-500", [
              e.customClass,
              {
                "border-red-500 focus:border-red-500 focus:ring-red-500": h.value,
                "border-primary-500 ring-primary-500 ring-2": a.value
              }
            ]])
          }, [
            N("div", Gv, [
              e.multiple && A.value.length ? (E(!0), F(ne, { key: 0 }, Ce(A.value, (B) => (E(), F("span", {
                key: m(B),
                class: "bg-primary-100 text-primary-800 inline-flex items-center gap-1 rounded px-2 py-1 text-xs dark:bg-primary-900/50 dark:text-primary-100"
              }, [
                fe(Q(v(B)) + " ", 1),
                N("button", {
                  type: "button",
                  onClick: (k) => M(B, k),
                  class: "hover:text-primary-600 transition-colors"
                }, [
                  Y(Re, {
                    name: "$close",
                    class: "h-3 w-3"
                  })
                ], 8, Jv)
              ]))), 128)) : (E(), F("span", {
                key: 1,
                class: X(["block truncate", { "text-gray-500 dark:text-gray-400": !A.value.length }])
              }, Q(T.value), 3))
            ]),
            e.clearable && A.value.length ? (E(), F("button", {
              key: 0,
              type: "button",
              onClick: D,
              class: "absolute inset-y-0 right-8 flex items-center pr-2 text-gray-400 transition-colors hover:text-gray-600"
            }, [
              Y(Re, {
                name: "$close",
                class: "h-4 w-4"
              })
            ])) : J("", !0),
            N("div", Yv, [
              Y(Re, {
                name: "$expand",
                class: X(["h-4 w-4 text-gray-400 transition-transform duration-200", { "rotate-180": a.value }])
              }, null, 8, ["class"])
            ])
          ], 10, Kv),
          Y(yr, {
            "enter-active-class": "transition duration-200 ease-out",
            "enter-from-class": "opacity-0 scale-95",
            "enter-to-class": "opacity-100 scale-100",
            "leave-active-class": "transition duration-150 ease-in",
            "leave-from-class": "opacity-100 scale-100",
            "leave-to-class": "opacity-0 scale-95"
          }, {
            default: V(() => [
              ot(N("div", Xv, [
                e.searchable ? (E(), F("div", Qv, [
                  N("div", Zv, [
                    Y(Re, {
                      name: "$search",
                      class: "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400"
                    }),
                    ot(N("input", {
                      ref_key: "searchInputRef",
                      ref: c,
                      type: "text",
                      "onUpdate:modelValue": q[0] || (q[0] = (B) => o.value = B),
                      onInput: q[1] || (q[1] = (B) => O(o.value)),
                      placeholder: "Search options...",
                      class: "focus:border-primary-500 focus:ring-primary-500 w-full rounded border border-gray-300 py-2 pr-3 pl-10 text-sm focus:ring-2 focus:ring-offset-0 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500"
                    }, null, 544), [
                      [zc, o.value]
                    ])
                  ])
                ])) : J("", !0),
                s.value ? (E(), F("div", e0, [
                  Y(w(al), { class: "h-5 w-5" }),
                  q[2] || (q[2] = N("span", { class: "ml-2 text-sm text-gray-600 dark:text-gray-400" }, "Loading...", -1))
                ])) : (E(), F("div", t0, [
                  e.grouping ? (E(!0), F(ne, { key: 0 }, Ce(P.value, (B, k) => (E(), F("div", { key: k }, [
                    k !== "ungrouped" ? (E(), F("div", r0, Q(k), 1)) : J("", !0),
                    (E(!0), F(ne, null, Ce(B, (G) => (E(), F("button", {
                      key: m(G),
                      type: "button",
                      onClick: (te) => _(G),
                      disabled: G.disabled,
                      class: X(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 dark:hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50", {
                        "bg-primary-100 text-primary-900 dark:bg-primary-900/40 dark:text-primary-100": R(G),
                        "text-gray-900 dark:text-gray-100": !R(G)
                      }])
                    }, [
                      N("span", a0, Q(v(G)), 1),
                      R(G) ? (E(), F("span", o0, " ✓ ")) : J("", !0)
                    ], 10, n0))), 128))
                  ]))), 128)) : (E(!0), F(ne, { key: 1 }, Ce(x.value, (B) => (E(), F("button", {
                    key: m(B),
                    type: "button",
                    onClick: (k) => _(B),
                    disabled: B.disabled,
                    class: X(["relative w-full cursor-pointer py-2 pr-9 pl-3 text-left select-none hover:bg-gray-100 dark:hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50", {
                      "bg-primary-100 text-primary-900 dark:bg-primary-900/40 dark:text-primary-100": R(B),
                      "text-gray-900 dark:text-gray-100": !R(B)
                    }])
                  }, [
                    N("span", i0, Q(v(B)), 1),
                    R(B) ? (E(), F("span", l0, "✓")) : J("", !0)
                  ], 10, s0))), 128)),
                  x.value.length ? J("", !0) : (E(), F("div", u0, "No options found"))
                ]))
              ], 512), [
                [mr, a.value]
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
var c0 = Object.defineProperty, d0 = Object.defineProperties, f0 = Object.getOwnPropertyDescriptors, Fl = Object.getOwnPropertySymbols, p0 = Object.prototype.hasOwnProperty, h0 = Object.prototype.propertyIsEnumerable, _l = (e, t, r) => t in e ? c0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ir = (e, t) => {
  for (var r in t || (t = {}))
    p0.call(t, r) && _l(e, r, t[r]);
  if (Fl)
    for (var r of Fl(t))
      h0.call(t, r) && _l(e, r, t[r]);
  return e;
}, ql = (e, t) => d0(e, f0(t));
const m0 = {
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
}, y0 = {
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
}, g0 = {
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
}, Fi = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, v0 = {}, b0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10"
}, w0 = /* @__PURE__ */ N("path", { d: "M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z" }, null, -1), x0 = [
  w0
];
function S0(e, t) {
  return E(), F("svg", b0, x0);
}
const E0 = /* @__PURE__ */ Fi(v0, [["render", S0]]), C0 = {}, P0 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "14",
  height: "10"
}, O0 = /* @__PURE__ */ N("path", { d: "M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z" }, null, -1), A0 = [
  O0
];
function k0(e, t) {
  return E(), F("svg", P0, A0);
}
const T0 = /* @__PURE__ */ Fi(C0, [["render", k0]]), Bl = {
  Deselect: E0,
  OpenIndicator: T0
}, $0 = {
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
function D0(e) {
  const t = {};
  return Object.keys(e).sort().forEach((r) => {
    t[r] = e[r];
  }), JSON.stringify(t);
}
let R0 = 0;
function F0() {
  return ++R0;
}
const _0 = {
  components: Ir({}, Bl),
  directives: { appendToBody: $0 },
  mixins: [m0, y0, g0],
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
          return e.hasOwnProperty("id") ? e.id : D0(e);
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
      default: () => F0()
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
          attributes: Ir({
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
        header: ql(Ir({}, e), { deselect: this.deselect }),
        footer: ql(Ir({}, e), { deselect: this.deselect })
      };
    },
    childComponents() {
      return Ir(Ir({}, Bl), this.components);
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
}, q0 = ["dir"], B0 = ["id", "aria-expanded", "aria-owns"], I0 = {
  ref: "selectedOptions",
  class: "vs__selected-options"
}, L0 = ["disabled", "title", "aria-label", "onClick"], M0 = {
  ref: "actions",
  class: "vs__actions"
}, N0 = ["disabled"], j0 = { class: "vs__spinner" }, V0 = ["id"], U0 = ["id", "aria-selected", "onMouseover", "onClick"], H0 = {
  key: 0,
  class: "vs__no-options"
}, z0 = /* @__PURE__ */ fe(" Sorry, no matching options. "), W0 = ["id"];
function K0(e, t, r, n, a, o) {
  const s = Kp("append-to-body");
  return E(), F("div", {
    dir: r.dir,
    class: X(["v-select", o.stateClasses])
  }, [
    z(e.$slots, "header", Pe(De(o.scope.header))),
    N("div", {
      id: `vs${r.uid}__combobox`,
      ref: "toggle",
      class: "vs__dropdown-toggle",
      role: "combobox",
      "aria-expanded": o.dropdownOpen.toString(),
      "aria-owns": `vs${r.uid}__listbox`,
      "aria-label": "Search for option",
      onMousedown: t[1] || (t[1] = (i) => o.toggleDropdown(i))
    }, [
      N("div", I0, [
        (E(!0), F(ne, null, Ce(o.selectedValue, (i, u) => z(e.$slots, "selected-option-container", {
          option: o.normalizeOptionForSlot(i),
          deselect: o.deselect,
          multiple: r.multiple,
          disabled: r.disabled
        }, () => [
          (E(), F("span", {
            key: r.getOptionKey(i),
            class: "vs__selected"
          }, [
            z(e.$slots, "selected-option", Pe(De(o.normalizeOptionForSlot(i))), () => [
              fe(Q(r.getOptionLabel(i)), 1)
            ]),
            r.multiple ? (E(), F("button", {
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
              (E(), W(na(o.childComponents.Deselect)))
            ], 8, L0)) : J("", !0)
          ]))
        ])), 256)),
        z(e.$slots, "search", Pe(De(o.scope.search)), () => [
          N("input", ae({ class: "vs__search" }, o.scope.search.attributes, Qc(o.scope.search.events)), null, 16)
        ])
      ], 512),
      N("div", M0, [
        ot(N("button", {
          ref: "clearButton",
          disabled: r.disabled,
          type: "button",
          class: "vs__clear",
          title: "Clear Selected",
          "aria-label": "Clear Selected",
          onClick: t[0] || (t[0] = (...i) => o.clearSelection && o.clearSelection(...i))
        }, [
          (E(), W(na(o.childComponents.Deselect)))
        ], 8, N0), [
          [mr, o.showClearButton]
        ]),
        z(e.$slots, "open-indicator", Pe(De(o.scope.openIndicator)), () => [
          r.noDrop ? J("", !0) : (E(), W(na(o.childComponents.OpenIndicator), Pe(ae({ key: 0 }, o.scope.openIndicator.attributes)), null, 16))
        ]),
        z(e.$slots, "spinner", Pe(De(o.scope.spinner)), () => [
          ot(N("div", j0, "Loading...", 512), [
            [mr, e.mutableLoading]
          ])
        ])
      ], 512)
    ], 40, B0),
    Y(yr, { name: r.transition }, {
      default: V(() => [
        o.dropdownOpen ? ot((E(), F("ul", {
          id: `vs${r.uid}__listbox`,
          ref: "dropdownMenu",
          key: `vs${r.uid}__listbox`,
          class: "vs__dropdown-menu",
          role: "listbox",
          tabindex: "-1",
          onMousedown: t[2] || (t[2] = wt((...i) => o.onMousedown && o.onMousedown(...i), ["prevent"])),
          onMouseup: t[3] || (t[3] = (...i) => o.onMouseUp && o.onMouseUp(...i))
        }, [
          z(e.$slots, "list-header", Pe(De(o.scope.listHeader))),
          (E(!0), F(ne, null, Ce(o.filteredOptions, (i, u) => (E(), F("li", {
            id: `vs${r.uid}__option-${u}`,
            key: r.getOptionKey(i),
            role: "option",
            class: X(["vs__dropdown-option", {
              "vs__dropdown-option--deselect": o.isOptionDeselectable(i) && u === e.typeAheadPointer,
              "vs__dropdown-option--selected": o.isOptionSelected(i),
              "vs__dropdown-option--highlight": u === e.typeAheadPointer,
              "vs__dropdown-option--disabled": !r.selectable(i)
            }]),
            "aria-selected": u === e.typeAheadPointer ? !0 : null,
            onMouseover: (l) => r.selectable(i) ? e.typeAheadPointer = u : null,
            onClick: wt((l) => r.selectable(i) ? o.select(i) : null, ["prevent", "stop"])
          }, [
            z(e.$slots, "option", Pe(De(o.normalizeOptionForSlot(i))), () => [
              fe(Q(r.getOptionLabel(i)), 1)
            ])
          ], 42, U0))), 128)),
          o.filteredOptions.length === 0 ? (E(), F("li", H0, [
            z(e.$slots, "no-options", Pe(De(o.scope.noOptions)), () => [
              z0
            ])
          ])) : J("", !0),
          z(e.$slots, "list-footer", Pe(De(o.scope.listFooter)))
        ], 40, V0)), [
          [s]
        ]) : (E(), F("ul", {
          key: 1,
          id: `vs${r.uid}__listbox`,
          role: "listbox",
          style: { display: "none", visibility: "hidden" }
        }, null, 8, W0))
      ]),
      _: 3
    }, 8, ["name"]),
    z(e.$slots, "footer", Pe(De(o.scope.footer)))
  ], 10, q0);
}
const G0 = /* @__PURE__ */ Fi(_0, [["render", K0]]), F$ = {
  __name: "DropdownSearchbar",
  props: {
    options: Array,
    label: String,
    placeholder: String
  },
  setup(e) {
    return (t, r) => (E(), W(w(G0), {
      options: e.options,
      label: e.label,
      placeholder: e.placeholder,
      class: "min-w-44"
    }, null, 8, ["options", "label", "placeholder"]));
  }
}, jt = {
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
function J0(e) {
  return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
}
const Ud = {
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
      default: (e, t) => e.match(J0(t))
    }
  }
}, Y0 = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, a] of t)
    r[n] = a;
  return r;
}, X0 = {
  name: "ModelSelect",
  mixins: [Ud],
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
      jt.openOptions(this);
    },
    blurInput() {
      jt.blurInput(this);
    },
    closeOptions() {
      jt.closeOptions(this);
    },
    prevItem() {
      jt.prevItem(this);
    },
    nextItem() {
      jt.nextItem(this);
    },
    enterItem() {
      jt.enterItem(this);
    },
    pointerSet(e) {
      jt.pointerSet(this, e);
    },
    pointerAdjust() {
      jt.pointerAdjust(this);
    },
    mousedownItem() {
      jt.mousedownItem(this);
    },
    selectItem(e) {
      this.searchText = "", this.closeOptions(), typeof this.modelValue == "object" && this.modelValue ? this.$emit("update:modelValue", e) : (this.$emit("update:modelValue", e.value), e.value !== void 0 && e.value === e.text && (this.searchText = e.value));
    },
    optionValue(e) {
      return typeof e == "object" && e !== null ? e.value : e;
    }
  }
}, Q0 = /* @__PURE__ */ N("i", { class: "dropdown icon" }, null, -1), Z0 = ["disabled", "tabindex", "id", "name", "value"], eb = ["data-vss-custom-attr"], tb = ["data-vss-custom-attr", "onClick", "onMouseenter"];
function rb(e, t, r, n, a, o) {
  return E(), F("div", {
    class: X(["ui fluid search selection dropdown", { "active visible": a.showMenu, error: e.isError, disabled: e.isDisabled }]),
    onClick: t[11] || (t[11] = (...s) => o.openOptions && o.openOptions(...s)),
    onFocus: t[12] || (t[12] = (...s) => o.openOptions && o.openOptions(...s))
  }, [
    Q0,
    N("input", {
      class: "search",
      autocomplete: "off",
      disabled: e.isDisabled,
      tabindex: e.isDisabled ? -1 : 0,
      id: e.id,
      name: e.name,
      value: a.searchText,
      onInput: t[0] || (t[0] = (s) => a.searchText = s.target.value),
      ref: "input",
      onFocus: t[1] || (t[1] = wt((...s) => o.openOptions && o.openOptions(...s), ["prevent"])),
      onKeyup: [
        t[2] || (t[2] = nr((...s) => o.closeOptions && o.closeOptions(...s), ["esc"])),
        t[7] || (t[7] = nr(wt((...s) => o.enterItem && o.enterItem(...s), ["prevent"]), ["enter"]))
      ],
      onBlur: t[3] || (t[3] = (...s) => o.blurInput && o.blurInput(...s)),
      onKeydown: [
        t[4] || (t[4] = nr((...s) => o.prevItem && o.prevItem(...s), ["up"])),
        t[5] || (t[5] = nr((...s) => o.nextItem && o.nextItem(...s), ["down"])),
        t[6] || (t[6] = nr(wt(() => {
        }, ["prevent"]), ["enter"])),
        t[8] || (t[8] = nr((...s) => o.deleteTextOrItem && o.deleteTextOrItem(...s), ["delete"]))
      ]
    }, null, 40, Z0),
    N("div", {
      class: X(["text", o.textClass]),
      "data-vss-custom-attr": o.searchTextCustomAttr
    }, Q(o.inputText), 11, eb),
    N("div", {
      class: X(["menu", o.menuClass]),
      ref: "menu",
      onMousedown: t[10] || (t[10] = wt(() => {
      }, ["prevent"])),
      style: st(o.menuStyle),
      tabindex: "-1"
    }, [
      (E(!0), F(ne, null, Ce(o.filteredOptions, (s, i) => (E(), F("div", {
        key: i,
        class: X(["item", { selected: s.selected || a.pointer === i, disabled: s.disabled }]),
        "data-vss-custom-attr": o.customAttrs[i] ? o.customAttrs[i] : "",
        onClick: wt((u) => o.selectItem(s), ["stop"]),
        onMousedown: t[9] || (t[9] = (...u) => o.mousedownItem && o.mousedownItem(...u)),
        onMouseenter: (u) => o.pointerSet(i)
      }, [
        z(e.$slots, "default", {
          option: s,
          idx: i
        }, () => [
          fe(Q(s.text), 1)
        ])
      ], 42, tb))), 128))
    ], 38)
  ], 34);
}
const Il = /* @__PURE__ */ Y0(X0, [["render", rb]]), Ll = {
  name: "ModelListSelect",
  mixins: [Ud],
  emits: ["blur", "searchchange", "update:modelValue"],
  render: function() {
    return Ne(Il, {
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
    ModelSelect: Il
  }
}, nb = {
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
    return (a, o) => (E(), F("div", null, [
      !e.noLabel && (e.label || e.field) ? (E(), W(w(Yr), {
        key: 0,
        for: e.id ?? e.field,
        value: n(e.label ?? e.field),
        required: e.required
      }, null, 8, ["for", "value", "required"])) : J("", !0),
      e.noForm ? (E(), W(w(Ll), {
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
      }, null, 8, ["id", "list", "modelValue", "option-value", "option-text", "option-disabled", "placeholder", "is-disabled", "filterPredicate"])) : (E(), F(ne, { key: 2 }, [
        Y(w(Ll), {
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
        Y(w(cr), {
          message: e.form.errors[e.field]
        }, null, 8, ["message"])
      ], 64))
    ]));
  }
}, ab = /* @__PURE__ */ Zc(nb, [["__scopeId", "data-v-c8f3c7c8"]]), _$ = {
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
    var y;
    const n = e, a = r, o = j([]), s = j(1), i = j(!0), u = j(0), l = j(""), c = j(((y = n.form) == null ? void 0 : y[n.field]) || n.modelValue), d = j(c.value), m = j(null), v = (x) => {
      d.value = c.value, c.value = x, a("update:modelValue", x), a("changed", x), x || (p(""), m.value = null);
    }, p = (x) => {
      x == "" && c.value && c.value !== d.value || (s.value = 1, u.value = 0, l.value = x, h());
    }, h = async (x = !1) => {
      const P = new URLSearchParams();
      P.append("term", l.value), P.append("page", s.value), n.queryParams && Object.keys(n.queryParams).forEach(($) => {
        P.append($, n.queryParams[$]);
      }), x && c.value && P.append("ajax_id", c.value);
      const T = await (await fetch(`${n.url}?${P.toString()}`)).json();
      if (i.value = T.current_page < T.last_page, s.value === 1) {
        if (o.value = T.data, c.value) {
          const $ = o.value.find((O) => O[n.optionValue] == c.value);
          m.value = $ ? $[n.optionText] : null;
        }
        return;
      }
      o.value = o.value.concat(T.data);
    };
    return me(() => {
      h(!0);
      const x = document.getElementById(n.id).parentNode.querySelector(".menu");
      x == null || x.addEventListener(
        "scroll",
        (P) => {
          P.target.scrollTop > u.value && P.target.scrollTop + P.target.clientHeight >= P.target.scrollHeight && i.value && (s.value++, h());
        },
        {
          passive: !0
        }
      );
    }), t({ getCurrentOption: () => o.value.find((x) => x[n.optionValue] == c.value) }), (x, P) => (E(), W(w(ab), {
      id: e.id,
      label: e.label,
      list: o.value,
      optionValue: e.optionValue,
      optionText: e.optionText,
      optionDisabled: e.optionDisabled,
      placeholder: m.value ?? e.placeholder,
      field: e.field,
      form: e.form,
      modelValue: c.value,
      noLabel: e.noLabel,
      disabled: e.disabled,
      noForm: e.noForm,
      required: e.required,
      "onUpdate:modelValue": P[0] || (P[0] = (A) => v(A)),
      onSearchchange: p,
      filterPredicate: (A, T) => !0
    }, null, 8, ["id", "label", "list", "optionValue", "optionText", "optionDisabled", "placeholder", "field", "form", "modelValue", "noLabel", "disabled", "noForm", "required"]));
  }
};
var Hd = typeof global == "object" && global && global.Object === Object && global, ob = typeof self == "object" && self && self.Object === Object && self, Ot = Hd || ob || Function("return this")(), qt = Ot.Symbol, zd = Object.prototype, sb = zd.hasOwnProperty, ib = zd.toString, rn = qt ? qt.toStringTag : void 0;
function lb(e) {
  var t = sb.call(e, rn), r = e[rn];
  try {
    e[rn] = void 0;
    var n = !0;
  } catch {
  }
  var a = ib.call(e);
  return n && (t ? e[rn] = r : delete e[rn]), a;
}
var ub = Object.prototype, cb = ub.toString;
function db(e) {
  return cb.call(e);
}
var fb = "[object Null]", pb = "[object Undefined]", Ml = qt ? qt.toStringTag : void 0;
function Or(e) {
  return e == null ? e === void 0 ? pb : fb : Ml && Ml in Object(e) ? lb(e) : db(e);
}
function Bt(e) {
  return e != null && typeof e == "object";
}
var hb = "[object Symbol]";
function La(e) {
  return typeof e == "symbol" || Bt(e) && Or(e) == hb;
}
function mb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Pt = Array.isArray, Nl = qt ? qt.prototype : void 0, jl = Nl ? Nl.toString : void 0;
function Wd(e) {
  if (typeof e == "string")
    return e;
  if (Pt(e))
    return mb(e, Wd) + "";
  if (La(e))
    return jl ? jl.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var yb = /\s/;
function gb(e) {
  for (var t = e.length; t-- && yb.test(e.charAt(t)); )
    ;
  return t;
}
var vb = /^\s+/;
function bb(e) {
  return e && e.slice(0, gb(e) + 1).replace(vb, "");
}
function lt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Vl = NaN, wb = /^[-+]0x[0-9a-f]+$/i, xb = /^0b[01]+$/i, Sb = /^0o[0-7]+$/i, Eb = parseInt;
function Ul(e) {
  if (typeof e == "number")
    return e;
  if (La(e))
    return Vl;
  if (lt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = lt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = bb(e);
  var r = xb.test(e);
  return r || Sb.test(e) ? Eb(e.slice(2), r ? 2 : 8) : wb.test(e) ? Vl : +e;
}
function Kd(e) {
  return e;
}
var Cb = "[object AsyncFunction]", Pb = "[object Function]", Ob = "[object GeneratorFunction]", Ab = "[object Proxy]";
function _i(e) {
  if (!lt(e))
    return !1;
  var t = Or(e);
  return t == Pb || t == Ob || t == Cb || t == Ab;
}
var wo = Ot["__core-js_shared__"], Hl = (function() {
  var e = /[^.]+$/.exec(wo && wo.keys && wo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function kb(e) {
  return !!Hl && Hl in e;
}
var Tb = Function.prototype, $b = Tb.toString;
function Ar(e) {
  if (e != null) {
    try {
      return $b.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Db = /[\\^$.*+?()[\]{}|]/g, Rb = /^\[object .+?Constructor\]$/, Fb = Function.prototype, _b = Object.prototype, qb = Fb.toString, Bb = _b.hasOwnProperty, Ib = RegExp(
  "^" + qb.call(Bb).replace(Db, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Lb(e) {
  if (!lt(e) || kb(e))
    return !1;
  var t = _i(e) ? Ib : Rb;
  return t.test(Ar(e));
}
function Mb(e, t) {
  return e == null ? void 0 : e[t];
}
function kr(e, t) {
  var r = Mb(e, t);
  return Lb(r) ? r : void 0;
}
var Ns = kr(Ot, "WeakMap"), zl = Object.create, Nb = /* @__PURE__ */ (function() {
  function e() {
  }
  return function(t) {
    if (!lt(t))
      return {};
    if (zl)
      return zl(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
})();
function jb(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function Vb(e, t) {
  var r = -1, n = e.length;
  for (t || (t = Array(n)); ++r < n; )
    t[r] = e[r];
  return t;
}
var Ub = 800, Hb = 16, zb = Date.now;
function Wb(e) {
  var t = 0, r = 0;
  return function() {
    var n = zb(), a = Hb - (n - r);
    if (r = n, a > 0) {
      if (++t >= Ub)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Kb(e) {
  return function() {
    return e;
  };
}
var va = (function() {
  try {
    var e = kr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
})(), Gb = va ? function(e, t) {
  return va(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Kb(t),
    writable: !0
  });
} : Kd, Jb = Wb(Gb);
function Yb(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Xb = 9007199254740991, Qb = /^(?:0|[1-9]\d*)$/;
function Ma(e, t) {
  var r = typeof e;
  return t = t ?? Xb, !!t && (r == "number" || r != "symbol" && Qb.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function qi(e, t, r) {
  t == "__proto__" && va ? va(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Rn(e, t) {
  return e === t || e !== e && t !== t;
}
var Zb = Object.prototype, ew = Zb.hasOwnProperty;
function Bi(e, t, r) {
  var n = e[t];
  (!(ew.call(e, t) && Rn(n, r)) || r === void 0 && !(t in e)) && qi(e, t, r);
}
function tw(e, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var i = t[o], u = void 0;
    u === void 0 && (u = e[i]), a ? qi(r, i, u) : Bi(r, i, u);
  }
  return r;
}
var Wl = Math.max;
function rw(e, t, r) {
  return t = Wl(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, o = Wl(n.length - t, 0), s = Array(o); ++a < o; )
      s[a] = n[t + a];
    a = -1;
    for (var i = Array(t + 1); ++a < t; )
      i[a] = n[a];
    return i[t] = r(s), jb(e, this, i);
  };
}
function nw(e, t) {
  return Jb(rw(e, t, Kd), e + "");
}
var aw = 9007199254740991;
function Ii(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= aw;
}
function Na(e) {
  return e != null && Ii(e.length) && !_i(e);
}
function ow(e, t, r) {
  if (!lt(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? Na(r) && Ma(t, r.length) : n == "string" && t in r) ? Rn(r[t], e) : !1;
}
function sw(e) {
  return nw(function(t, r) {
    var n = -1, a = r.length, o = a > 1 ? r[a - 1] : void 0, s = a > 2 ? r[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && ow(r[0], r[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++n < a; ) {
      var i = r[n];
      i && e(t, i, n, o);
    }
    return t;
  });
}
var iw = Object.prototype;
function Li(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || iw;
  return e === r;
}
function lw(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var uw = "[object Arguments]";
function Kl(e) {
  return Bt(e) && Or(e) == uw;
}
var Gd = Object.prototype, cw = Gd.hasOwnProperty, dw = Gd.propertyIsEnumerable, ba = Kl(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Kl : function(e) {
  return Bt(e) && cw.call(e, "callee") && !dw.call(e, "callee");
};
function fw() {
  return !1;
}
var Jd = typeof exports == "object" && exports && !exports.nodeType && exports, Gl = Jd && typeof module == "object" && module && !module.nodeType && module, pw = Gl && Gl.exports === Jd, Jl = pw ? Ot.Buffer : void 0, hw = Jl ? Jl.isBuffer : void 0, vn = hw || fw, mw = "[object Arguments]", yw = "[object Array]", gw = "[object Boolean]", vw = "[object Date]", bw = "[object Error]", ww = "[object Function]", xw = "[object Map]", Sw = "[object Number]", Ew = "[object Object]", Cw = "[object RegExp]", Pw = "[object Set]", Ow = "[object String]", Aw = "[object WeakMap]", kw = "[object ArrayBuffer]", Tw = "[object DataView]", $w = "[object Float32Array]", Dw = "[object Float64Array]", Rw = "[object Int8Array]", Fw = "[object Int16Array]", _w = "[object Int32Array]", qw = "[object Uint8Array]", Bw = "[object Uint8ClampedArray]", Iw = "[object Uint16Array]", Lw = "[object Uint32Array]", Ee = {};
Ee[$w] = Ee[Dw] = Ee[Rw] = Ee[Fw] = Ee[_w] = Ee[qw] = Ee[Bw] = Ee[Iw] = Ee[Lw] = !0;
Ee[mw] = Ee[yw] = Ee[kw] = Ee[gw] = Ee[Tw] = Ee[vw] = Ee[bw] = Ee[ww] = Ee[xw] = Ee[Sw] = Ee[Ew] = Ee[Cw] = Ee[Pw] = Ee[Ow] = Ee[Aw] = !1;
function Mw(e) {
  return Bt(e) && Ii(e.length) && !!Ee[Or(e)];
}
function Mi(e) {
  return function(t) {
    return e(t);
  };
}
var Yd = typeof exports == "object" && exports && !exports.nodeType && exports, dn = Yd && typeof module == "object" && module && !module.nodeType && module, Nw = dn && dn.exports === Yd, xo = Nw && Hd.process, Wr = (function() {
  try {
    var e = dn && dn.require && dn.require("util").types;
    return e || xo && xo.binding && xo.binding("util");
  } catch {
  }
})(), Yl = Wr && Wr.isTypedArray, Ni = Yl ? Mi(Yl) : Mw, jw = Object.prototype, Vw = jw.hasOwnProperty;
function Xd(e, t) {
  var r = Pt(e), n = !r && ba(e), a = !r && !n && vn(e), o = !r && !n && !a && Ni(e), s = r || n || a || o, i = s ? lw(e.length, String) : [], u = i.length;
  for (var l in e)
    (t || Vw.call(e, l)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ma(l, u))) && i.push(l);
  return i;
}
function Qd(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Uw = Qd(Object.keys, Object), Hw = Object.prototype, zw = Hw.hasOwnProperty;
function Ww(e) {
  if (!Li(e))
    return Uw(e);
  var t = [];
  for (var r in Object(e))
    zw.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Kw(e) {
  return Na(e) ? Xd(e) : Ww(e);
}
function Gw(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Jw = Object.prototype, Yw = Jw.hasOwnProperty;
function Xw(e) {
  if (!lt(e))
    return Gw(e);
  var t = Li(e), r = [];
  for (var n in e)
    n == "constructor" && (t || !Yw.call(e, n)) || r.push(n);
  return r;
}
function Zd(e) {
  return Na(e) ? Xd(e, !0) : Xw(e);
}
var Qw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zw = /^\w*$/;
function ex(e, t) {
  if (Pt(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || La(e) ? !0 : Zw.test(e) || !Qw.test(e) || t != null && e in Object(t);
}
var bn = kr(Object, "create");
function tx() {
  this.__data__ = bn ? bn(null) : {}, this.size = 0;
}
function rx(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var nx = "__lodash_hash_undefined__", ax = Object.prototype, ox = ax.hasOwnProperty;
function sx(e) {
  var t = this.__data__;
  if (bn) {
    var r = t[e];
    return r === nx ? void 0 : r;
  }
  return ox.call(t, e) ? t[e] : void 0;
}
var ix = Object.prototype, lx = ix.hasOwnProperty;
function ux(e) {
  var t = this.__data__;
  return bn ? t[e] !== void 0 : lx.call(t, e);
}
var cx = "__lodash_hash_undefined__";
function dx(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = bn && t === void 0 ? cx : t, this;
}
function wr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
wr.prototype.clear = tx;
wr.prototype.delete = rx;
wr.prototype.get = sx;
wr.prototype.has = ux;
wr.prototype.set = dx;
function fx() {
  this.__data__ = [], this.size = 0;
}
function ja(e, t) {
  for (var r = e.length; r--; )
    if (Rn(e[r][0], t))
      return r;
  return -1;
}
var px = Array.prototype, hx = px.splice;
function mx(e) {
  var t = this.__data__, r = ja(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : hx.call(t, r, 1), --this.size, !0;
}
function yx(e) {
  var t = this.__data__, r = ja(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function gx(e) {
  return ja(this.__data__, e) > -1;
}
function vx(e, t) {
  var r = this.__data__, n = ja(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function Jt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Jt.prototype.clear = fx;
Jt.prototype.delete = mx;
Jt.prototype.get = yx;
Jt.prototype.has = gx;
Jt.prototype.set = vx;
var wn = kr(Ot, "Map");
function bx() {
  this.size = 0, this.__data__ = {
    hash: new wr(),
    map: new (wn || Jt)(),
    string: new wr()
  };
}
function wx(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Va(e, t) {
  var r = e.__data__;
  return wx(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function xx(e) {
  var t = Va(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Sx(e) {
  return Va(this, e).get(e);
}
function Ex(e) {
  return Va(this, e).has(e);
}
function Cx(e, t) {
  var r = Va(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function Yt(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Yt.prototype.clear = bx;
Yt.prototype.delete = xx;
Yt.prototype.get = Sx;
Yt.prototype.has = Ex;
Yt.prototype.set = Cx;
var Px = "Expected a function";
function ji(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Px);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(a))
      return o.get(a);
    var s = e.apply(this, n);
    return r.cache = o.set(a, s) || o, s;
  };
  return r.cache = new (ji.Cache || Yt)(), r;
}
ji.Cache = Yt;
var Ox = 500;
function Ax(e) {
  var t = ji(e, function(n) {
    return r.size === Ox && r.clear(), n;
  }), r = t.cache;
  return t;
}
var kx = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tx = /\\(\\)?/g, $x = Ax(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(kx, function(r, n, a, o) {
    t.push(a ? o.replace(Tx, "$1") : n || r);
  }), t;
});
function ef(e) {
  return e == null ? "" : Wd(e);
}
function Vi(e, t) {
  return Pt(e) ? e : ex(e, t) ? [e] : $x(ef(e));
}
function Ui(e) {
  if (typeof e == "string" || La(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Dx(e, t) {
  t = Vi(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[Ui(t[r++])];
  return r && r == n ? e : void 0;
}
function at(e, t, r) {
  var n = e == null ? void 0 : Dx(e, t);
  return n === void 0 ? r : n;
}
function Rx(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
var tf = Qd(Object.getPrototypeOf, Object), Fx = "[object Object]", _x = Function.prototype, qx = Object.prototype, rf = _x.toString, Bx = qx.hasOwnProperty, Ix = rf.call(Object);
function Lx(e) {
  if (!Bt(e) || Or(e) != Fx)
    return !1;
  var t = tf(e);
  if (t === null)
    return !0;
  var r = Bx.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && rf.call(r) == Ix;
}
function Mx(e) {
  return function(t) {
    return e == null ? void 0 : e[t];
  };
}
function Nx() {
  this.__data__ = new Jt(), this.size = 0;
}
function jx(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Vx(e) {
  return this.__data__.get(e);
}
function Ux(e) {
  return this.__data__.has(e);
}
var Hx = 200;
function zx(e, t) {
  var r = this.__data__;
  if (r instanceof Jt) {
    var n = r.__data__;
    if (!wn || n.length < Hx - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Yt(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function _t(e) {
  var t = this.__data__ = new Jt(e);
  this.size = t.size;
}
_t.prototype.clear = Nx;
_t.prototype.delete = jx;
_t.prototype.get = Vx;
_t.prototype.has = Ux;
_t.prototype.set = zx;
var nf = typeof exports == "object" && exports && !exports.nodeType && exports, Xl = nf && typeof module == "object" && module && !module.nodeType && module, Wx = Xl && Xl.exports === nf, Ql = Wx ? Ot.Buffer : void 0, Zl = Ql ? Ql.allocUnsafe : void 0;
function af(e, t) {
  if (t)
    return e.slice();
  var r = e.length, n = Zl ? Zl(r) : new e.constructor(r);
  return e.copy(n), n;
}
function Kx(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (o[a++] = s);
  }
  return o;
}
function Gx() {
  return [];
}
var Jx = Object.prototype, Yx = Jx.propertyIsEnumerable, eu = Object.getOwnPropertySymbols, Xx = eu ? function(e) {
  return e == null ? [] : (e = Object(e), Kx(eu(e), function(t) {
    return Yx.call(e, t);
  }));
} : Gx;
function Qx(e, t, r) {
  var n = t(e);
  return Pt(e) ? n : Rx(n, r(e));
}
function js(e) {
  return Qx(e, Kw, Xx);
}
var Vs = kr(Ot, "DataView"), Us = kr(Ot, "Promise"), Hs = kr(Ot, "Set"), tu = "[object Map]", Zx = "[object Object]", ru = "[object Promise]", nu = "[object Set]", au = "[object WeakMap]", ou = "[object DataView]", eS = Ar(Vs), tS = Ar(wn), rS = Ar(Us), nS = Ar(Hs), aS = Ar(Ns), bt = Or;
(Vs && bt(new Vs(new ArrayBuffer(1))) != ou || wn && bt(new wn()) != tu || Us && bt(Us.resolve()) != ru || Hs && bt(new Hs()) != nu || Ns && bt(new Ns()) != au) && (bt = function(e) {
  var t = Or(e), r = t == Zx ? e.constructor : void 0, n = r ? Ar(r) : "";
  if (n)
    switch (n) {
      case eS:
        return ou;
      case tS:
        return tu;
      case rS:
        return ru;
      case nS:
        return nu;
      case aS:
        return au;
    }
  return t;
});
var oS = Object.prototype, sS = oS.hasOwnProperty;
function iS(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && sS.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var wa = Ot.Uint8Array;
function Hi(e) {
  var t = new e.constructor(e.byteLength);
  return new wa(t).set(new wa(e)), t;
}
function lS(e, t) {
  var r = Hi(e.buffer);
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var uS = /\w*$/;
function cS(e) {
  var t = new e.constructor(e.source, uS.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var su = qt ? qt.prototype : void 0, iu = su ? su.valueOf : void 0;
function dS(e) {
  return iu ? Object(iu.call(e)) : {};
}
function of(e, t) {
  var r = t ? Hi(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var fS = "[object Boolean]", pS = "[object Date]", hS = "[object Map]", mS = "[object Number]", yS = "[object RegExp]", gS = "[object Set]", vS = "[object String]", bS = "[object Symbol]", wS = "[object ArrayBuffer]", xS = "[object DataView]", SS = "[object Float32Array]", ES = "[object Float64Array]", CS = "[object Int8Array]", PS = "[object Int16Array]", OS = "[object Int32Array]", AS = "[object Uint8Array]", kS = "[object Uint8ClampedArray]", TS = "[object Uint16Array]", $S = "[object Uint32Array]";
function DS(e, t, r) {
  var n = e.constructor;
  switch (t) {
    case wS:
      return Hi(e);
    case fS:
    case pS:
      return new n(+e);
    case xS:
      return lS(e);
    case SS:
    case ES:
    case CS:
    case PS:
    case OS:
    case AS:
    case kS:
    case TS:
    case $S:
      return of(e, r);
    case hS:
      return new n();
    case mS:
    case vS:
      return new n(e);
    case yS:
      return cS(e);
    case gS:
      return new n();
    case bS:
      return dS(e);
  }
}
function sf(e) {
  return typeof e.constructor == "function" && !Li(e) ? Nb(tf(e)) : {};
}
var RS = "[object Map]";
function FS(e) {
  return Bt(e) && bt(e) == RS;
}
var lu = Wr && Wr.isMap, _S = lu ? Mi(lu) : FS, qS = "[object Set]";
function BS(e) {
  return Bt(e) && bt(e) == qS;
}
var uu = Wr && Wr.isSet, IS = uu ? Mi(uu) : BS, LS = 1, lf = "[object Arguments]", MS = "[object Array]", NS = "[object Boolean]", jS = "[object Date]", VS = "[object Error]", uf = "[object Function]", US = "[object GeneratorFunction]", HS = "[object Map]", zS = "[object Number]", cf = "[object Object]", WS = "[object RegExp]", KS = "[object Set]", GS = "[object String]", JS = "[object Symbol]", YS = "[object WeakMap]", XS = "[object ArrayBuffer]", QS = "[object DataView]", ZS = "[object Float32Array]", e1 = "[object Float64Array]", t1 = "[object Int8Array]", r1 = "[object Int16Array]", n1 = "[object Int32Array]", a1 = "[object Uint8Array]", o1 = "[object Uint8ClampedArray]", s1 = "[object Uint16Array]", i1 = "[object Uint32Array]", xe = {};
xe[lf] = xe[MS] = xe[XS] = xe[QS] = xe[NS] = xe[jS] = xe[ZS] = xe[e1] = xe[t1] = xe[r1] = xe[n1] = xe[HS] = xe[zS] = xe[cf] = xe[WS] = xe[KS] = xe[GS] = xe[JS] = xe[a1] = xe[o1] = xe[s1] = xe[i1] = !0;
xe[VS] = xe[uf] = xe[YS] = !1;
function aa(e, t, r, n, a, o) {
  var s, i = t & LS;
  if (s !== void 0)
    return s;
  if (!lt(e))
    return e;
  var u = Pt(e);
  if (u)
    s = iS(e);
  else {
    var l = bt(e), c = l == uf || l == US;
    if (vn(e))
      return af(e, i);
    if (l == cf || l == lf || c && !a)
      s = c ? {} : sf(e);
    else {
      if (!xe[l])
        return a ? e : {};
      s = DS(e, l, i);
    }
  }
  o || (o = new _t());
  var d = o.get(e);
  if (d)
    return d;
  o.set(e, s), IS(e) ? e.forEach(function(p) {
    s.add(aa(p, t, r, p, e, o));
  }) : _S(e) && e.forEach(function(p, h) {
    s.set(h, aa(p, t, r, h, e, o));
  });
  var m = js, v = u ? void 0 : m(e);
  return Yb(v || e, function(p, h) {
    v && (h = p, p = e[h]), Bi(s, h, aa(p, t, r, h, e, o));
  }), s;
}
var l1 = 1, u1 = 4;
function Ve(e) {
  return aa(e, l1 | u1);
}
var c1 = "__lodash_hash_undefined__";
function d1(e) {
  return this.__data__.set(e, c1), this;
}
function f1(e) {
  return this.__data__.has(e);
}
function xa(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Yt(); ++t < r; )
    this.add(e[t]);
}
xa.prototype.add = xa.prototype.push = d1;
xa.prototype.has = f1;
function p1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function h1(e, t) {
  return e.has(t);
}
var m1 = 1, y1 = 2;
function df(e, t, r, n, a, o) {
  var s = r & m1, i = e.length, u = t.length;
  if (i != u && !(s && u > i))
    return !1;
  var l = o.get(e), c = o.get(t);
  if (l && c)
    return l == t && c == e;
  var d = -1, m = !0, v = r & y1 ? new xa() : void 0;
  for (o.set(e, t), o.set(t, e); ++d < i; ) {
    var p = e[d], h = t[d];
    if (n)
      var f = s ? n(h, p, d, t, e, o) : n(p, h, d, e, t, o);
    if (f !== void 0) {
      if (f)
        continue;
      m = !1;
      break;
    }
    if (v) {
      if (!p1(t, function(y, x) {
        if (!h1(v, x) && (p === y || a(p, y, r, n, o)))
          return v.push(x);
      })) {
        m = !1;
        break;
      }
    } else if (!(p === h || a(p, h, r, n, o))) {
      m = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), m;
}
function g1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function v1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var b1 = 1, w1 = 2, x1 = "[object Boolean]", S1 = "[object Date]", E1 = "[object Error]", C1 = "[object Map]", P1 = "[object Number]", O1 = "[object RegExp]", A1 = "[object Set]", k1 = "[object String]", T1 = "[object Symbol]", $1 = "[object ArrayBuffer]", D1 = "[object DataView]", cu = qt ? qt.prototype : void 0, So = cu ? cu.valueOf : void 0;
function R1(e, t, r, n, a, o, s) {
  switch (r) {
    case D1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case $1:
      return !(e.byteLength != t.byteLength || !o(new wa(e), new wa(t)));
    case x1:
    case S1:
    case P1:
      return Rn(+e, +t);
    case E1:
      return e.name == t.name && e.message == t.message;
    case O1:
    case k1:
      return e == t + "";
    case C1:
      var i = g1;
    case A1:
      var u = n & b1;
      if (i || (i = v1), e.size != t.size && !u)
        return !1;
      var l = s.get(e);
      if (l)
        return l == t;
      n |= w1, s.set(e, t);
      var c = df(i(e), i(t), n, a, o, s);
      return s.delete(e), c;
    case T1:
      if (So)
        return So.call(e) == So.call(t);
  }
  return !1;
}
var F1 = 1, _1 = Object.prototype, q1 = _1.hasOwnProperty;
function B1(e, t, r, n, a, o) {
  var s = r & F1, i = js(e), u = i.length, l = js(t), c = l.length;
  if (u != c && !s)
    return !1;
  for (var d = u; d--; ) {
    var m = i[d];
    if (!(s ? m in t : q1.call(t, m)))
      return !1;
  }
  var v = o.get(e), p = o.get(t);
  if (v && p)
    return v == t && p == e;
  var h = !0;
  o.set(e, t), o.set(t, e);
  for (var f = s; ++d < u; ) {
    m = i[d];
    var y = e[m], x = t[m];
    if (n)
      var P = s ? n(x, y, m, t, e, o) : n(y, x, m, e, t, o);
    if (!(P === void 0 ? y === x || a(y, x, r, n, o) : P)) {
      h = !1;
      break;
    }
    f || (f = m == "constructor");
  }
  if (h && !f) {
    var A = e.constructor, T = t.constructor;
    A != T && "constructor" in e && "constructor" in t && !(typeof A == "function" && A instanceof A && typeof T == "function" && T instanceof T) && (h = !1);
  }
  return o.delete(e), o.delete(t), h;
}
var I1 = 1, du = "[object Arguments]", fu = "[object Array]", Yn = "[object Object]", L1 = Object.prototype, pu = L1.hasOwnProperty;
function M1(e, t, r, n, a, o) {
  var s = Pt(e), i = Pt(t), u = s ? fu : bt(e), l = i ? fu : bt(t);
  u = u == du ? Yn : u, l = l == du ? Yn : l;
  var c = u == Yn, d = l == Yn, m = u == l;
  if (m && vn(e)) {
    if (!vn(t))
      return !1;
    s = !0, c = !1;
  }
  if (m && !c)
    return o || (o = new _t()), s || Ni(e) ? df(e, t, r, n, a, o) : R1(e, t, u, r, n, a, o);
  if (!(r & I1)) {
    var v = c && pu.call(e, "__wrapped__"), p = d && pu.call(t, "__wrapped__");
    if (v || p) {
      var h = v ? e.value() : e, f = p ? t.value() : t;
      return o || (o = new _t()), a(h, f, r, n, o);
    }
  }
  return m ? (o || (o = new _t()), B1(e, t, r, n, a, o)) : !1;
}
function ff(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !Bt(e) && !Bt(t) ? e !== e && t !== t : M1(e, t, r, n, ff, a);
}
function N1(e, t, r) {
  t = Vi(t, e);
  for (var n = -1, a = t.length, o = !1; ++n < a; ) {
    var s = Ui(t[n]);
    if (!(o = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return o || ++n != a ? o : (a = e == null ? 0 : e.length, !!a && Ii(a) && Ma(s, a) && (Pt(e) || ba(e)));
}
function j1(e) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), s = n(t), i = s.length; i--; ) {
      var u = s[++a];
      if (r(o[u], u, o) === !1)
        break;
    }
    return t;
  };
}
var V1 = j1(), Eo = function() {
  return Ot.Date.now();
}, U1 = "Expected a function", H1 = Math.max, z1 = Math.min;
function W1(e, t, r) {
  var n, a, o, s, i, u, l = 0, c = !1, d = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(U1);
  t = Ul(t) || 0, lt(r) && (c = !0, d = "maxWait" in r, o = d ? H1(Ul(r.maxWait) || 0, t) : o, m = "trailing" in r ? !0 : m);
  function v($) {
    var O = n, _ = a;
    return n = a = void 0, l = $, s = e.apply(_, O), s;
  }
  function p($) {
    return l = $, i = setTimeout(y, t), c ? v($) : s;
  }
  function h($) {
    var O = $ - u, _ = $ - l, M = t - O;
    return d ? z1(M, o - _) : M;
  }
  function f($) {
    var O = $ - u, _ = $ - l;
    return u === void 0 || O >= t || O < 0 || d && _ >= o;
  }
  function y() {
    var $ = Eo();
    if (f($))
      return x($);
    i = setTimeout(y, h($));
  }
  function x($) {
    return i = void 0, m && n ? v($) : (n = a = void 0, s);
  }
  function P() {
    i !== void 0 && clearTimeout(i), l = 0, n = u = a = i = void 0;
  }
  function A() {
    return i === void 0 ? s : x(Eo());
  }
  function T() {
    var $ = Eo(), O = f($);
    if (n = arguments, a = this, u = $, O) {
      if (i === void 0)
        return p(u);
      if (d)
        return clearTimeout(i), i = setTimeout(y, t), v(u);
    }
    return i === void 0 && (i = setTimeout(y, t)), s;
  }
  return T.cancel = P, T.flush = A, T;
}
function zs(e, t, r) {
  (r !== void 0 && !Rn(e[t], r) || r === void 0 && !(t in e)) && qi(e, t, r);
}
function K1(e) {
  return Bt(e) && Na(e);
}
function Ws(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function G1(e) {
  return tw(e, Zd(e));
}
function J1(e, t, r, n, a, o, s) {
  var i = Ws(e, r), u = Ws(t, r), l = s.get(u);
  if (l) {
    zs(e, r, l);
    return;
  }
  var c = o ? o(i, u, r + "", e, t, s) : void 0, d = c === void 0;
  if (d) {
    var m = Pt(u), v = !m && vn(u), p = !m && !v && Ni(u);
    c = u, m || v || p ? Pt(i) ? c = i : K1(i) ? c = Vb(i) : v ? (d = !1, c = af(u, !0)) : p ? (d = !1, c = of(u, !0)) : c = [] : Lx(u) || ba(u) ? (c = i, ba(i) ? c = G1(i) : (!lt(i) || _i(i)) && (c = sf(u))) : d = !1;
  }
  d && (s.set(u, c), a(c, u, n, o, s), s.delete(u)), zs(e, r, c);
}
function pf(e, t, r, n, a) {
  e !== t && V1(t, function(o, s) {
    if (a || (a = new _t()), lt(o))
      J1(e, t, s, r, pf, n, a);
    else {
      var i = n ? n(Ws(e, s), o, s + "", e, t, a) : void 0;
      i === void 0 && (i = o), zs(e, s, i);
    }
  }, Zd);
}
var Y1 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, X1 = Mx(Y1), hf = /[&<>"']/g, Q1 = RegExp(hf.source);
function hu(e) {
  return e = ef(e), e && Q1.test(e) ? e.replace(hf, X1) : e;
}
var Z1 = Object.prototype, eE = Z1.hasOwnProperty;
function tE(e, t) {
  return e != null && eE.call(e, t);
}
function mf(e, t) {
  return e != null && N1(e, t, tE);
}
function or(e, t) {
  return ff(e, t);
}
var Ks = sw(function(e, t, r) {
  pf(e, t, r);
});
function rE(e, t, r, n) {
  if (!lt(e))
    return e;
  t = Vi(t, e);
  for (var a = -1, o = t.length, s = o - 1, i = e; i != null && ++a < o; ) {
    var u = Ui(t[a]), l = r;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != s) {
      var c = i[u];
      l = void 0, l === void 0 && (l = lt(c) ? c : Ma(t[a + 1]) ? [] : {});
    }
    Bi(i, u, l), i = i[u];
  }
  return e;
}
function ht(e, t, r) {
  return e == null ? e : rE(e, t, r);
}
var Gs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function nE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function aE(e) {
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
var Co, mu;
function Qr() {
  return mu || (mu = 1, Co = TypeError), Co;
}
const oE = {}, sE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oE
}, Symbol.toStringTag, { value: "Module" })), Js = /* @__PURE__ */ aE(sE);
var Po, yu;
function Ua() {
  if (yu) return Po;
  yu = 1;
  var e = typeof Map == "function" && Map.prototype, t = Object.getOwnPropertyDescriptor && e ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, r = e && t && typeof t.get == "function" ? t.get : null, n = e && Map.prototype.forEach, a = typeof Set == "function" && Set.prototype, o = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, s = a && o && typeof o.get == "function" ? o.get : null, i = a && Set.prototype.forEach, u = typeof WeakMap == "function" && WeakMap.prototype, l = u ? WeakMap.prototype.has : null, c = typeof WeakSet == "function" && WeakSet.prototype, d = c ? WeakSet.prototype.has : null, m = typeof WeakRef == "function" && WeakRef.prototype, v = m ? WeakRef.prototype.deref : null, p = Boolean.prototype.valueOf, h = Object.prototype.toString, f = Function.prototype.toString, y = String.prototype.match, x = String.prototype.slice, P = String.prototype.replace, A = String.prototype.toUpperCase, T = String.prototype.toLowerCase, $ = RegExp.prototype.test, O = Array.prototype.concat, _ = Array.prototype.join, M = Array.prototype.slice, D = Math.floor, R = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, g = Object.getOwnPropertySymbols, C = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, S = typeof Symbol == "function" && typeof Symbol.iterator == "object", b = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === S || !0) ? Symbol.toStringTag : null, q = Object.prototype.propertyIsEnumerable, B = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(U) {
    return U.__proto__;
  } : null);
  function k(U, H) {
    if (U === 1 / 0 || U === -1 / 0 || U !== U || U && U > -1e3 && U < 1e3 || $.call(/e/, H))
      return H;
    var he = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof U == "number") {
      var we = U < 0 ? -D(-U) : D(U);
      if (we !== U) {
        var Se = String(we), se = x.call(H, Se.length + 1);
        return P.call(Se, he, "$&_") + "." + P.call(P.call(se, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return P.call(H, he, "$&_");
  }
  var G = Js, te = G.custom, de = $e(te) ? te : null, Be = {
    __proto__: null,
    double: '"',
    single: "'"
  }, ie = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
  };
  Po = function U(H, he, we, Se) {
    var se = he || {};
    if (Ye(se, "quoteStyle") && !Ye(Be, se.quoteStyle))
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (Ye(se, "maxStringLength") && (typeof se.maxStringLength == "number" ? se.maxStringLength < 0 && se.maxStringLength !== 1 / 0 : se.maxStringLength !== null))
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var Qt = Ye(se, "customInspect") ? se.customInspect : !0;
    if (typeof Qt != "boolean" && Qt !== "symbol")
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (Ye(se, "indent") && se.indent !== null && se.indent !== "	" && !(parseInt(se.indent, 10) === se.indent && se.indent > 0))
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Ye(se, "numericSeparator") && typeof se.numericSeparator != "boolean")
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var dr = se.numericSeparator;
    if (typeof H > "u")
      return "undefined";
    if (H === null)
      return "null";
    if (typeof H == "boolean")
      return H ? "true" : "false";
    if (typeof H == "string")
      return ol(H, se);
    if (typeof H == "number") {
      if (H === 0)
        return 1 / 0 / H > 0 ? "0" : "-0";
      var et = String(H);
      return dr ? k(H, et) : et;
    }
    if (typeof H == "bigint") {
      var Zt = String(H) + "n";
      return dr ? k(H, Zt) : Zt;
    }
    var ao = typeof se.depth > "u" ? 5 : se.depth;
    if (typeof we > "u" && (we = 0), we >= ao && ao > 0 && typeof H == "object")
      return _e(H) ? "[Array]" : "[Object]";
    var _r = qp(se, we);
    if (typeof Se > "u")
      Se = [];
    else if (Xt(Se, H) >= 0)
      return "[Circular]";
    function vt(qr, Vn, Ip) {
      if (Vn && (Se = M.call(Se), Se.push(Vn)), Ip) {
        var hl = {
          depth: se.depth
        };
        return Ye(se, "quoteStyle") && (hl.quoteStyle = se.quoteStyle), U(qr, hl, we + 1, Se);
      }
      return U(qr, se, we + 1, Se);
    }
    if (typeof H == "function" && !be(H)) {
      var il = $r(H), ll = Nn(H, vt);
      return "[Function" + (il ? ": " + il : " (anonymous)") + "]" + (ll.length > 0 ? " { " + _.call(ll, ", ") + " }" : "");
    }
    if ($e(H)) {
      var ul = S ? P.call(String(H), /^(Symbol\(.*\))_[^)]*$/, "$1") : C.call(H);
      return typeof H == "object" && !S ? en(ul) : ul;
    }
    if (Rp(H)) {
      for (var tn = "<" + T.call(String(H.nodeName)), oo = H.attributes || [], jn = 0; jn < oo.length; jn++)
        tn += " " + oo[jn].name + "=" + ve(ye(oo[jn].value), "double", se);
      return tn += ">", H.childNodes && H.childNodes.length && (tn += "..."), tn += "</" + T.call(String(H.nodeName)) + ">", tn;
    }
    if (_e(H)) {
      if (H.length === 0)
        return "[]";
      var so = Nn(H, vt);
      return _r && !_p(so) ? "[" + no(so, _r) + "]" : "[ " + _.call(so, ", ") + " ]";
    }
    if (oe(H)) {
      var io = Nn(H, vt);
      return !("cause" in Error.prototype) && "cause" in H && !q.call(H, "cause") ? "{ [" + String(H) + "] " + _.call(O.call("[cause]: " + vt(H.cause), io), ", ") + " }" : io.length === 0 ? "[" + String(H) + "]" : "{ [" + String(H) + "] " + _.call(io, ", ") + " }";
    }
    if (typeof H == "object" && Qt) {
      if (de && typeof H[de] == "function" && G)
        return G(H, { depth: ao - we });
      if (Qt !== "symbol" && typeof H.inspect == "function")
        return H.inspect();
    }
    if (gt(H)) {
      var cl = [];
      return n && n.call(H, function(qr, Vn) {
        cl.push(vt(Vn, H, !0) + " => " + vt(qr, H));
      }), sl("Map", r.call(H), cl, _r);
    }
    if (Fr(H)) {
      var dl = [];
      return i && i.call(H, function(qr) {
        dl.push(vt(qr, H));
      }), sl("Set", s.call(H), dl, _r);
    }
    if (Dr(H))
      return ro("WeakMap");
    if (Dp(H))
      return ro("WeakSet");
    if (Rr(H))
      return ro("WeakRef");
    if (pe(H))
      return en(vt(Number(H)));
    if (He(H))
      return en(vt(R.call(H)));
    if (Oe(H))
      return en(p.call(H));
    if (ge(H))
      return en(vt(String(H)));
    if (typeof window < "u" && H === window)
      return "{ [object Window] }";
    if (typeof globalThis < "u" && H === globalThis || typeof Gs < "u" && H === Gs)
      return "{ [object globalThis] }";
    if (!le(H) && !be(H)) {
      var lo = Nn(H, vt), fl = B ? B(H) === Object.prototype : H instanceof Object || H.constructor === Object, uo = H instanceof Object ? "" : "null prototype", pl = !fl && b && Object(H) === H && b in H ? x.call(dt(H), 8, -1) : uo ? "Object" : "", Bp = fl || typeof H.constructor != "function" ? "" : H.constructor.name ? H.constructor.name + " " : "", co = Bp + (pl || uo ? "[" + _.call(O.call([], pl || [], uo || []), ": ") + "] " : "");
      return lo.length === 0 ? co + "{}" : _r ? co + "{" + no(lo, _r) + "}" : co + "{ " + _.call(lo, ", ") + " }";
    }
    return String(H);
  };
  function ve(U, H, he) {
    var we = he.quoteStyle || H, Se = Be[we];
    return Se + U + Se;
  }
  function ye(U) {
    return P.call(String(U), /"/g, "&quot;");
  }
  function Ie(U) {
    return !b || !(typeof U == "object" && (b in U || typeof U[b] < "u"));
  }
  function _e(U) {
    return dt(U) === "[object Array]" && Ie(U);
  }
  function le(U) {
    return dt(U) === "[object Date]" && Ie(U);
  }
  function be(U) {
    return dt(U) === "[object RegExp]" && Ie(U);
  }
  function oe(U) {
    return dt(U) === "[object Error]" && Ie(U);
  }
  function ge(U) {
    return dt(U) === "[object String]" && Ie(U);
  }
  function pe(U) {
    return dt(U) === "[object Number]" && Ie(U);
  }
  function Oe(U) {
    return dt(U) === "[object Boolean]" && Ie(U);
  }
  function $e(U) {
    if (S)
      return U && typeof U == "object" && U instanceof Symbol;
    if (typeof U == "symbol")
      return !0;
    if (!U || typeof U != "object" || !C)
      return !1;
    try {
      return C.call(U), !0;
    } catch {
    }
    return !1;
  }
  function He(U) {
    if (!U || typeof U != "object" || !R)
      return !1;
    try {
      return R.call(U), !0;
    } catch {
    }
    return !1;
  }
  var ze = Object.prototype.hasOwnProperty || function(U) {
    return U in this;
  };
  function Ye(U, H) {
    return ze.call(U, H);
  }
  function dt(U) {
    return h.call(U);
  }
  function $r(U) {
    if (U.name)
      return U.name;
    var H = y.call(f.call(U), /^function\s*([\w$]+)/);
    return H ? H[1] : null;
  }
  function Xt(U, H) {
    if (U.indexOf)
      return U.indexOf(H);
    for (var he = 0, we = U.length; he < we; he++)
      if (U[he] === H)
        return he;
    return -1;
  }
  function gt(U) {
    if (!r || !U || typeof U != "object")
      return !1;
    try {
      r.call(U);
      try {
        s.call(U);
      } catch {
        return !0;
      }
      return U instanceof Map;
    } catch {
    }
    return !1;
  }
  function Dr(U) {
    if (!l || !U || typeof U != "object")
      return !1;
    try {
      l.call(U, l);
      try {
        d.call(U, d);
      } catch {
        return !0;
      }
      return U instanceof WeakMap;
    } catch {
    }
    return !1;
  }
  function Rr(U) {
    if (!v || !U || typeof U != "object")
      return !1;
    try {
      return v.call(U), !0;
    } catch {
    }
    return !1;
  }
  function Fr(U) {
    if (!s || !U || typeof U != "object")
      return !1;
    try {
      s.call(U);
      try {
        r.call(U);
      } catch {
        return !0;
      }
      return U instanceof Set;
    } catch {
    }
    return !1;
  }
  function Dp(U) {
    if (!d || !U || typeof U != "object")
      return !1;
    try {
      d.call(U, d);
      try {
        l.call(U, l);
      } catch {
        return !0;
      }
      return U instanceof WeakSet;
    } catch {
    }
    return !1;
  }
  function Rp(U) {
    return !U || typeof U != "object" ? !1 : typeof HTMLElement < "u" && U instanceof HTMLElement ? !0 : typeof U.nodeName == "string" && typeof U.getAttribute == "function";
  }
  function ol(U, H) {
    if (U.length > H.maxStringLength) {
      var he = U.length - H.maxStringLength, we = "... " + he + " more character" + (he > 1 ? "s" : "");
      return ol(x.call(U, 0, H.maxStringLength), H) + we;
    }
    var Se = ie[H.quoteStyle || "single"];
    Se.lastIndex = 0;
    var se = P.call(P.call(U, Se, "\\$1"), /[\x00-\x1f]/g, Fp);
    return ve(se, "single", H);
  }
  function Fp(U) {
    var H = U.charCodeAt(0), he = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[H];
    return he ? "\\" + he : "\\x" + (H < 16 ? "0" : "") + A.call(H.toString(16));
  }
  function en(U) {
    return "Object(" + U + ")";
  }
  function ro(U) {
    return U + " { ? }";
  }
  function sl(U, H, he, we) {
    var Se = we ? no(he, we) : _.call(he, ", ");
    return U + " (" + H + ") {" + Se + "}";
  }
  function _p(U) {
    for (var H = 0; H < U.length; H++)
      if (Xt(U[H], `
`) >= 0)
        return !1;
    return !0;
  }
  function qp(U, H) {
    var he;
    if (U.indent === "	")
      he = "	";
    else if (typeof U.indent == "number" && U.indent > 0)
      he = _.call(Array(U.indent + 1), " ");
    else
      return null;
    return {
      base: he,
      prev: _.call(Array(H + 1), he)
    };
  }
  function no(U, H) {
    if (U.length === 0)
      return "";
    var he = `
` + H.prev + H.base;
    return he + _.call(U, "," + he) + `
` + H.prev;
  }
  function Nn(U, H) {
    var he = _e(U), we = [];
    if (he) {
      we.length = U.length;
      for (var Se = 0; Se < U.length; Se++)
        we[Se] = Ye(U, Se) ? H(U[Se], U) : "";
    }
    var se = typeof g == "function" ? g(U) : [], Qt;
    if (S) {
      Qt = {};
      for (var dr = 0; dr < se.length; dr++)
        Qt["$" + se[dr]] = se[dr];
    }
    for (var et in U)
      Ye(U, et) && (he && String(Number(et)) === et && et < U.length || S && Qt["$" + et] instanceof Symbol || ($.call(/[^\w$]/, et) ? we.push(H(et, U) + ": " + H(U[et], U)) : we.push(et + ": " + H(U[et], U))));
    if (typeof g == "function")
      for (var Zt = 0; Zt < se.length; Zt++)
        q.call(U, se[Zt]) && we.push("[" + H(se[Zt]) + "]: " + H(U[se[Zt]], U));
    return we;
  }
  return Po;
}
var Oo, gu;
function iE() {
  if (gu) return Oo;
  gu = 1;
  var e = /* @__PURE__ */ Ua(), t = /* @__PURE__ */ Qr(), r = function(i, u, l) {
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
  return Oo = function() {
    var u, l = {
      assert: function(c) {
        if (!l.has(c))
          throw new t("Side channel does not contain " + e(c));
      },
      delete: function(c) {
        var d = s(u, c);
        return d && u && !u.next && (u = void 0), !!d;
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
  }, Oo;
}
var Ao, vu;
function yf() {
  return vu || (vu = 1, Ao = Object), Ao;
}
var ko, bu;
function lE() {
  return bu || (bu = 1, ko = Error), ko;
}
var To, wu;
function uE() {
  return wu || (wu = 1, To = EvalError), To;
}
var $o, xu;
function cE() {
  return xu || (xu = 1, $o = RangeError), $o;
}
var Do, Su;
function dE() {
  return Su || (Su = 1, Do = ReferenceError), Do;
}
var Ro, Eu;
function fE() {
  return Eu || (Eu = 1, Ro = SyntaxError), Ro;
}
var Fo, Cu;
function pE() {
  return Cu || (Cu = 1, Fo = URIError), Fo;
}
var _o, Pu;
function hE() {
  return Pu || (Pu = 1, _o = Math.abs), _o;
}
var qo, Ou;
function mE() {
  return Ou || (Ou = 1, qo = Math.floor), qo;
}
var Bo, Au;
function yE() {
  return Au || (Au = 1, Bo = Math.max), Bo;
}
var Io, ku;
function gE() {
  return ku || (ku = 1, Io = Math.min), Io;
}
var Lo, Tu;
function vE() {
  return Tu || (Tu = 1, Lo = Math.pow), Lo;
}
var Mo, $u;
function bE() {
  return $u || ($u = 1, Mo = Math.round), Mo;
}
var No, Du;
function wE() {
  return Du || (Du = 1, No = Number.isNaN || function(t) {
    return t !== t;
  }), No;
}
var jo, Ru;
function xE() {
  if (Ru) return jo;
  Ru = 1;
  var e = /* @__PURE__ */ wE();
  return jo = function(r) {
    return e(r) || r === 0 ? r : r < 0 ? -1 : 1;
  }, jo;
}
var Vo, Fu;
function SE() {
  return Fu || (Fu = 1, Vo = Object.getOwnPropertyDescriptor), Vo;
}
var Uo, _u;
function gf() {
  if (_u) return Uo;
  _u = 1;
  var e = /* @__PURE__ */ SE();
  if (e)
    try {
      e([], "length");
    } catch {
      e = null;
    }
  return Uo = e, Uo;
}
var Ho, qu;
function EE() {
  if (qu) return Ho;
  qu = 1;
  var e = Object.defineProperty || !1;
  if (e)
    try {
      e({}, "a", { value: 1 });
    } catch {
      e = !1;
    }
  return Ho = e, Ho;
}
var zo, Bu;
function CE() {
  return Bu || (Bu = 1, zo = function() {
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
  }), zo;
}
var Wo, Iu;
function PE() {
  if (Iu) return Wo;
  Iu = 1;
  var e = typeof Symbol < "u" && Symbol, t = CE();
  return Wo = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t();
  }, Wo;
}
var Ko, Lu;
function vf() {
  return Lu || (Lu = 1, Ko = typeof Reflect < "u" && Reflect.getPrototypeOf || null), Ko;
}
var Go, Mu;
function bf() {
  if (Mu) return Go;
  Mu = 1;
  var e = /* @__PURE__ */ yf();
  return Go = e.getPrototypeOf || null, Go;
}
var Jo, Nu;
function OE() {
  if (Nu) return Jo;
  Nu = 1;
  var e = "Function.prototype.bind called on incompatible ", t = Object.prototype.toString, r = Math.max, n = "[object Function]", a = function(u, l) {
    for (var c = [], d = 0; d < u.length; d += 1)
      c[d] = u[d];
    for (var m = 0; m < l.length; m += 1)
      c[m + u.length] = l[m];
    return c;
  }, o = function(u, l) {
    for (var c = [], d = l, m = 0; d < u.length; d += 1, m += 1)
      c[m] = u[d];
    return c;
  }, s = function(i, u) {
    for (var l = "", c = 0; c < i.length; c += 1)
      l += i[c], c + 1 < i.length && (l += u);
    return l;
  };
  return Jo = function(u) {
    var l = this;
    if (typeof l != "function" || t.apply(l) !== n)
      throw new TypeError(e + l);
    for (var c = o(arguments, 1), d, m = function() {
      if (this instanceof d) {
        var y = l.apply(
          this,
          a(c, arguments)
        );
        return Object(y) === y ? y : this;
      }
      return l.apply(
        u,
        a(c, arguments)
      );
    }, v = r(0, l.length - c.length), p = [], h = 0; h < v; h++)
      p[h] = "$" + h;
    if (d = Function("binder", "return function (" + s(p, ",") + "){ return binder.apply(this,arguments); }")(m), l.prototype) {
      var f = function() {
      };
      f.prototype = l.prototype, d.prototype = new f(), f.prototype = null;
    }
    return d;
  }, Jo;
}
var Yo, ju;
function Ha() {
  if (ju) return Yo;
  ju = 1;
  var e = OE();
  return Yo = Function.prototype.bind || e, Yo;
}
var Xo, Vu;
function zi() {
  return Vu || (Vu = 1, Xo = Function.prototype.call), Xo;
}
var Qo, Uu;
function wf() {
  return Uu || (Uu = 1, Qo = Function.prototype.apply), Qo;
}
var Zo, Hu;
function AE() {
  return Hu || (Hu = 1, Zo = typeof Reflect < "u" && Reflect && Reflect.apply), Zo;
}
var es, zu;
function kE() {
  if (zu) return es;
  zu = 1;
  var e = Ha(), t = wf(), r = zi(), n = AE();
  return es = n || e.call(r, t), es;
}
var ts, Wu;
function xf() {
  if (Wu) return ts;
  Wu = 1;
  var e = Ha(), t = /* @__PURE__ */ Qr(), r = zi(), n = kE();
  return ts = function(o) {
    if (o.length < 1 || typeof o[0] != "function")
      throw new t("a function is required");
    return n(e, r, o);
  }, ts;
}
var rs, Ku;
function TE() {
  if (Ku) return rs;
  Ku = 1;
  var e = xf(), t = /* @__PURE__ */ gf(), r;
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
  return rs = n && typeof n.get == "function" ? e([n.get]) : typeof o == "function" ? (
    /** @type {import('./get')} */
    function(i) {
      return o(i == null ? i : a(i));
    }
  ) : !1, rs;
}
var ns, Gu;
function $E() {
  if (Gu) return ns;
  Gu = 1;
  var e = vf(), t = bf(), r = /* @__PURE__ */ TE();
  return ns = e ? function(a) {
    return e(a);
  } : t ? function(a) {
    if (!a || typeof a != "object" && typeof a != "function")
      throw new TypeError("getProto: not an object");
    return t(a);
  } : r ? function(a) {
    return r(a);
  } : null, ns;
}
var as, Ju;
function DE() {
  if (Ju) return as;
  Ju = 1;
  var e = Function.prototype.call, t = Object.prototype.hasOwnProperty, r = Ha();
  return as = r.call(e, t), as;
}
var os, Yu;
function Wi() {
  if (Yu) return os;
  Yu = 1;
  var e, t = /* @__PURE__ */ yf(), r = /* @__PURE__ */ lE(), n = /* @__PURE__ */ uE(), a = /* @__PURE__ */ cE(), o = /* @__PURE__ */ dE(), s = /* @__PURE__ */ fE(), i = /* @__PURE__ */ Qr(), u = /* @__PURE__ */ pE(), l = /* @__PURE__ */ hE(), c = /* @__PURE__ */ mE(), d = /* @__PURE__ */ yE(), m = /* @__PURE__ */ gE(), v = /* @__PURE__ */ vE(), p = /* @__PURE__ */ bE(), h = /* @__PURE__ */ xE(), f = Function, y = function(be) {
    try {
      return f('"use strict"; return (' + be + ").constructor;")();
    } catch {
    }
  }, x = /* @__PURE__ */ gf(), P = /* @__PURE__ */ EE(), A = function() {
    throw new i();
  }, T = x ? (function() {
    try {
      return arguments.callee, A;
    } catch {
      try {
        return x(arguments, "callee").get;
      } catch {
        return A;
      }
    }
  })() : A, $ = PE()(), O = $E(), _ = bf(), M = vf(), D = wf(), R = zi(), g = {}, C = typeof Uint8Array > "u" || !O ? e : O(Uint8Array), S = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
    "%ArrayIteratorPrototype%": $ && O ? O([][Symbol.iterator]()) : e,
    "%AsyncFromSyncIteratorPrototype%": e,
    "%AsyncFunction%": g,
    "%AsyncGenerator%": g,
    "%AsyncGeneratorFunction%": g,
    "%AsyncIteratorPrototype%": g,
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
    "%GeneratorFunction%": g,
    "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": $ && O ? O(O([][Symbol.iterator]())) : e,
    "%JSON%": typeof JSON == "object" ? JSON : e,
    "%Map%": typeof Map > "u" ? e : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !$ || !O ? e : O((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": t,
    "%Object.getOwnPropertyDescriptor%": x,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? e : Promise,
    "%Proxy%": typeof Proxy > "u" ? e : Proxy,
    "%RangeError%": a,
    "%ReferenceError%": o,
    "%Reflect%": typeof Reflect > "u" ? e : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? e : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !$ || !O ? e : O((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": $ && O ? O(""[Symbol.iterator]()) : e,
    "%Symbol%": $ ? Symbol : e,
    "%SyntaxError%": s,
    "%ThrowTypeError%": T,
    "%TypedArray%": C,
    "%TypeError%": i,
    "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
    "%URIError%": u,
    "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
    "%Function.prototype.call%": R,
    "%Function.prototype.apply%": D,
    "%Object.defineProperty%": P,
    "%Object.getPrototypeOf%": _,
    "%Math.abs%": l,
    "%Math.floor%": c,
    "%Math.max%": d,
    "%Math.min%": m,
    "%Math.pow%": v,
    "%Math.round%": p,
    "%Math.sign%": h,
    "%Reflect.getPrototypeOf%": M
  };
  if (O)
    try {
      null.error;
    } catch (be) {
      var b = O(O(be));
      S["%Error.prototype%"] = b;
    }
  var q = function be(oe) {
    var ge;
    if (oe === "%AsyncFunction%")
      ge = y("async function () {}");
    else if (oe === "%GeneratorFunction%")
      ge = y("function* () {}");
    else if (oe === "%AsyncGeneratorFunction%")
      ge = y("async function* () {}");
    else if (oe === "%AsyncGenerator%") {
      var pe = be("%AsyncGeneratorFunction%");
      pe && (ge = pe.prototype);
    } else if (oe === "%AsyncIteratorPrototype%") {
      var Oe = be("%AsyncGenerator%");
      Oe && O && (ge = O(Oe.prototype));
    }
    return S[oe] = ge, ge;
  }, B = {
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
  }, k = Ha(), G = /* @__PURE__ */ DE(), te = k.call(R, Array.prototype.concat), de = k.call(D, Array.prototype.splice), Be = k.call(R, String.prototype.replace), ie = k.call(R, String.prototype.slice), ve = k.call(R, RegExp.prototype.exec), ye = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Ie = /\\(\\)?/g, _e = function(oe) {
    var ge = ie(oe, 0, 1), pe = ie(oe, -1);
    if (ge === "%" && pe !== "%")
      throw new s("invalid intrinsic syntax, expected closing `%`");
    if (pe === "%" && ge !== "%")
      throw new s("invalid intrinsic syntax, expected opening `%`");
    var Oe = [];
    return Be(oe, ye, function($e, He, ze, Ye) {
      Oe[Oe.length] = ze ? Be(Ye, Ie, "$1") : He || $e;
    }), Oe;
  }, le = function(oe, ge) {
    var pe = oe, Oe;
    if (G(B, pe) && (Oe = B[pe], pe = "%" + Oe[0] + "%"), G(S, pe)) {
      var $e = S[pe];
      if ($e === g && ($e = q(pe)), typeof $e > "u" && !ge)
        throw new i("intrinsic " + oe + " exists, but is not available. Please file an issue!");
      return {
        alias: Oe,
        name: pe,
        value: $e
      };
    }
    throw new s("intrinsic " + oe + " does not exist!");
  };
  return os = function(oe, ge) {
    if (typeof oe != "string" || oe.length === 0)
      throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof ge != "boolean")
      throw new i('"allowMissing" argument must be a boolean');
    if (ve(/^%?[^%]*%?$/, oe) === null)
      throw new s("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var pe = _e(oe), Oe = pe.length > 0 ? pe[0] : "", $e = le("%" + Oe + "%", ge), He = $e.name, ze = $e.value, Ye = !1, dt = $e.alias;
    dt && (Oe = dt[0], de(pe, te([0, 1], dt)));
    for (var $r = 1, Xt = !0; $r < pe.length; $r += 1) {
      var gt = pe[$r], Dr = ie(gt, 0, 1), Rr = ie(gt, -1);
      if ((Dr === '"' || Dr === "'" || Dr === "`" || Rr === '"' || Rr === "'" || Rr === "`") && Dr !== Rr)
        throw new s("property names with quotes must have matching quotes");
      if ((gt === "constructor" || !Xt) && (Ye = !0), Oe += "." + gt, He = "%" + Oe + "%", G(S, He))
        ze = S[He];
      else if (ze != null) {
        if (!(gt in ze)) {
          if (!ge)
            throw new i("base intrinsic for " + oe + " exists, but the property is not available.");
          return;
        }
        if (x && $r + 1 >= pe.length) {
          var Fr = x(ze, gt);
          Xt = !!Fr, Xt && "get" in Fr && !("originalValue" in Fr.get) ? ze = Fr.get : ze = ze[gt];
        } else
          Xt = G(ze, gt), ze = ze[gt];
        Xt && !Ye && (S[He] = ze);
      }
    }
    return ze;
  }, os;
}
var ss, Xu;
function Sf() {
  if (Xu) return ss;
  Xu = 1;
  var e = /* @__PURE__ */ Wi(), t = xf(), r = t([e("%String.prototype.indexOf%")]);
  return ss = function(a, o) {
    var s = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      e(a, !!o)
    );
    return typeof s == "function" && r(a, ".prototype.") > -1 ? t(
      /** @type {const} */
      [s]
    ) : s;
  }, ss;
}
var is, Qu;
function Ef() {
  if (Qu) return is;
  Qu = 1;
  var e = /* @__PURE__ */ Wi(), t = /* @__PURE__ */ Sf(), r = /* @__PURE__ */ Ua(), n = /* @__PURE__ */ Qr(), a = e("%Map%", !0), o = t("Map.prototype.get", !0), s = t("Map.prototype.set", !0), i = t("Map.prototype.has", !0), u = t("Map.prototype.delete", !0), l = t("Map.prototype.size", !0);
  return is = !!a && /** @type {Exclude<import('.'), false>} */
  function() {
    var d, m = {
      assert: function(v) {
        if (!m.has(v))
          throw new n("Side channel does not contain " + r(v));
      },
      delete: function(v) {
        if (d) {
          var p = u(d, v);
          return l(d) === 0 && (d = void 0), p;
        }
        return !1;
      },
      get: function(v) {
        if (d)
          return o(d, v);
      },
      has: function(v) {
        return d ? i(d, v) : !1;
      },
      set: function(v, p) {
        d || (d = new a()), s(d, v, p);
      }
    };
    return m;
  }, is;
}
var ls, Zu;
function RE() {
  if (Zu) return ls;
  Zu = 1;
  var e = /* @__PURE__ */ Wi(), t = /* @__PURE__ */ Sf(), r = /* @__PURE__ */ Ua(), n = Ef(), a = /* @__PURE__ */ Qr(), o = e("%WeakMap%", !0), s = t("WeakMap.prototype.get", !0), i = t("WeakMap.prototype.set", !0), u = t("WeakMap.prototype.has", !0), l = t("WeakMap.prototype.delete", !0);
  return ls = o ? (
    /** @type {Exclude<import('.'), false>} */
    function() {
      var d, m, v = {
        assert: function(p) {
          if (!v.has(p))
            throw new a("Side channel does not contain " + r(p));
        },
        delete: function(p) {
          if (o && p && (typeof p == "object" || typeof p == "function")) {
            if (d)
              return l(d, p);
          } else if (n && m)
            return m.delete(p);
          return !1;
        },
        get: function(p) {
          return o && p && (typeof p == "object" || typeof p == "function") && d ? s(d, p) : m && m.get(p);
        },
        has: function(p) {
          return o && p && (typeof p == "object" || typeof p == "function") && d ? u(d, p) : !!m && m.has(p);
        },
        set: function(p, h) {
          o && p && (typeof p == "object" || typeof p == "function") ? (d || (d = new o()), i(d, p, h)) : n && (m || (m = n()), m.set(p, h));
        }
      };
      return v;
    }
  ) : n, ls;
}
var us, ec;
function Cf() {
  if (ec) return us;
  ec = 1;
  var e = /* @__PURE__ */ Qr(), t = /* @__PURE__ */ Ua(), r = iE(), n = Ef(), a = RE(), o = a || n || r;
  return us = function() {
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
  }, us;
}
var cs, tc;
function Ki() {
  if (tc) return cs;
  tc = 1;
  var e = String.prototype.replace, t = /%20/g, r = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  return cs = {
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
  }, cs;
}
var ds, rc;
function Pf() {
  if (rc) return ds;
  rc = 1;
  var e = /* @__PURE__ */ Ki(), t = Cf(), r = Object.prototype.hasOwnProperty, n = Array.isArray, a = t(), o = function(O, _) {
    return a.set(O, _), O;
  }, s = function(O) {
    return a.has(O);
  }, i = function(O) {
    return a.get(O);
  }, u = function(O, _) {
    a.set(O, _);
  }, l = (function() {
    for (var $ = [], O = 0; O < 256; ++O)
      $[$.length] = "%" + ((O < 16 ? "0" : "") + O.toString(16)).toUpperCase();
    return $;
  })(), c = function(O) {
    for (; O.length > 1; ) {
      var _ = O.pop(), M = _.obj[_.prop];
      if (n(M)) {
        for (var D = [], R = 0; R < M.length; ++R)
          typeof M[R] < "u" && (D[D.length] = M[R]);
        _.obj[_.prop] = D;
      }
    }
  }, d = function(O, _) {
    for (var M = _ && _.plainObjects ? { __proto__: null } : {}, D = 0; D < O.length; ++D)
      typeof O[D] < "u" && (M[D] = O[D]);
    return M;
  }, m = function $(O, _, M) {
    if (!_)
      return O;
    if (typeof _ != "object" && typeof _ != "function") {
      if (n(O)) {
        var D = O.length;
        if (M && typeof M.arrayLimit == "number" && D > M.arrayLimit)
          return o(d(O.concat(_), M), D);
        O[D] = _;
      } else if (O && typeof O == "object")
        if (s(O)) {
          var R = i(O) + 1;
          O[R] = _, u(O, R);
        } else {
          if (M && M.strictMerge)
            return [O, _];
          (M && (M.plainObjects || M.allowPrototypes) || !r.call(Object.prototype, _)) && (O[_] = !0);
        }
      else
        return [O, _];
      return O;
    }
    if (!O || typeof O != "object") {
      if (s(_)) {
        for (var g = Object.keys(_), C = M && M.plainObjects ? { __proto__: null, 0: O } : { 0: O }, S = 0; S < g.length; S++) {
          var b = parseInt(g[S], 10);
          C[b + 1] = _[g[S]];
        }
        return o(C, i(_) + 1);
      }
      var q = [O].concat(_);
      return M && typeof M.arrayLimit == "number" && q.length > M.arrayLimit ? o(d(q, M), q.length - 1) : q;
    }
    var B = O;
    return n(O) && !n(_) && (B = d(O, M)), n(O) && n(_) ? (_.forEach(function(k, G) {
      if (r.call(O, G)) {
        var te = O[G];
        te && typeof te == "object" && k && typeof k == "object" ? O[G] = $(te, k, M) : O[O.length] = k;
      } else
        O[G] = k;
    }), O) : Object.keys(_).reduce(function(k, G) {
      var te = _[G];
      if (r.call(k, G) ? k[G] = $(k[G], te, M) : k[G] = te, s(_) && !s(k) && o(k, i(_)), s(k)) {
        var de = parseInt(G, 10);
        String(de) === G && de >= 0 && de > i(k) && u(k, de);
      }
      return k;
    }, B);
  }, v = function(O, _) {
    return Object.keys(_).reduce(function(M, D) {
      return M[D] = _[D], M;
    }, O);
  }, p = function($, O, _) {
    var M = $.replace(/\+/g, " ");
    if (_ === "iso-8859-1")
      return M.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(M);
    } catch {
      return M;
    }
  }, h = 1024, f = function(O, _, M, D, R) {
    if (O.length === 0)
      return O;
    var g = O;
    if (typeof O == "symbol" ? g = Symbol.prototype.toString.call(O) : typeof O != "string" && (g = String(O)), M === "iso-8859-1")
      return escape(g).replace(/%u[0-9a-f]{4}/gi, function(G) {
        return "%26%23" + parseInt(G.slice(2), 16) + "%3B";
      });
    for (var C = "", S = 0; S < g.length; S += h) {
      for (var b = g.length >= h ? g.slice(S, S + h) : g, q = [], B = 0; B < b.length; ++B) {
        var k = b.charCodeAt(B);
        if (k === 45 || k === 46 || k === 95 || k === 126 || k >= 48 && k <= 57 || k >= 65 && k <= 90 || k >= 97 && k <= 122 || R === e.RFC1738 && (k === 40 || k === 41)) {
          q[q.length] = b.charAt(B);
          continue;
        }
        if (k < 128) {
          q[q.length] = l[k];
          continue;
        }
        if (k < 2048) {
          q[q.length] = l[192 | k >> 6] + l[128 | k & 63];
          continue;
        }
        if (k < 55296 || k >= 57344) {
          q[q.length] = l[224 | k >> 12] + l[128 | k >> 6 & 63] + l[128 | k & 63];
          continue;
        }
        B += 1, k = 65536 + ((k & 1023) << 10 | b.charCodeAt(B) & 1023), q[q.length] = l[240 | k >> 18] + l[128 | k >> 12 & 63] + l[128 | k >> 6 & 63] + l[128 | k & 63];
      }
      C += q.join("");
    }
    return C;
  }, y = function(O) {
    for (var _ = [{ obj: { o: O }, prop: "o" }], M = [], D = 0; D < _.length; ++D)
      for (var R = _[D], g = R.obj[R.prop], C = Object.keys(g), S = 0; S < C.length; ++S) {
        var b = C[S], q = g[b];
        typeof q == "object" && q !== null && M.indexOf(q) === -1 && (_[_.length] = { obj: g, prop: b }, M[M.length] = q);
      }
    return c(_), O;
  }, x = function(O) {
    return Object.prototype.toString.call(O) === "[object RegExp]";
  }, P = function(O) {
    return !O || typeof O != "object" ? !1 : !!(O.constructor && O.constructor.isBuffer && O.constructor.isBuffer(O));
  }, A = function(O, _, M, D) {
    if (s(O)) {
      var R = i(O) + 1;
      return O[R] = _, u(O, R), O;
    }
    var g = [].concat(O, _);
    return g.length > M ? o(d(g, { plainObjects: D }), g.length - 1) : g;
  }, T = function(O, _) {
    if (n(O)) {
      for (var M = [], D = 0; D < O.length; D += 1)
        M[M.length] = _(O[D]);
      return M;
    }
    return _(O);
  };
  return ds = {
    arrayToObject: d,
    assign: v,
    combine: A,
    compact: y,
    decode: p,
    encode: f,
    isBuffer: P,
    isOverflow: s,
    isRegExp: x,
    markOverflow: o,
    maybeMap: T,
    merge: m
  }, ds;
}
var fs, nc;
function FE() {
  if (nc) return fs;
  nc = 1;
  var e = Cf(), t = /* @__PURE__ */ Pf(), r = /* @__PURE__ */ Ki(), n = Object.prototype.hasOwnProperty, a = {
    brackets: function(f) {
      return f + "[]";
    },
    comma: "comma",
    indices: function(f, y) {
      return f + "[" + y + "]";
    },
    repeat: function(f) {
      return f;
    }
  }, o = Array.isArray, s = Array.prototype.push, i = function(h, f) {
    s.apply(h, o(f) ? f : [f]);
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
  }, m = {}, v = function h(f, y, x, P, A, T, $, O, _, M, D, R, g, C, S, b, q, B) {
    for (var k = f, G = B, te = 0, de = !1; (G = G.get(m)) !== void 0 && !de; ) {
      var Be = G.get(f);
      if (te += 1, typeof Be < "u") {
        if (Be === te)
          throw new RangeError("Cyclic object value");
        de = !0;
      }
      typeof G.get(m) > "u" && (te = 0);
    }
    if (typeof M == "function" ? k = M(y, k) : k instanceof Date ? k = g(k) : x === "comma" && o(k) && (k = t.maybeMap(k, function(He) {
      return He instanceof Date ? g(He) : He;
    })), k === null) {
      if (T)
        return S(_ && !b ? _(y, c.encoder, q, "key", C) : y);
      k = "";
    }
    if (d(k) || t.isBuffer(k)) {
      if (_) {
        var ie = b ? y : _(y, c.encoder, q, "key", C);
        return [S(ie) + "=" + S(_(k, c.encoder, q, "value", C))];
      }
      return [S(y) + "=" + S(String(k))];
    }
    var ve = [];
    if (typeof k > "u")
      return ve;
    var ye;
    if (x === "comma" && o(k))
      b && _ && (k = t.maybeMap(k, function(He) {
        return He == null ? He : _(He);
      })), ye = [{ value: k.length > 0 ? k.join(",") || null : void 0 }];
    else if (o(M))
      ye = M;
    else {
      var Ie = Object.keys(k);
      ye = D ? Ie.sort(D) : Ie;
    }
    var _e = O ? String(y).replace(/\./g, "%2E") : String(y), le = P && o(k) && k.length === 1 ? _e + "[]" : _e;
    if (A && o(k) && k.length === 0)
      return le + "[]";
    for (var be = 0; be < ye.length; ++be) {
      var oe = ye[be], ge = typeof oe == "object" && oe && typeof oe.value < "u" ? oe.value : k[oe];
      if (!($ && ge === null)) {
        var pe = R && O ? String(oe).replace(/\./g, "%2E") : String(oe), Oe = o(k) ? typeof x == "function" ? x(le, pe) : le : le + (R ? "." + pe : "[" + pe + "]");
        B.set(f, te);
        var $e = e();
        $e.set(m, B), i(ve, h(
          ge,
          Oe,
          x,
          P,
          A,
          T,
          $,
          O,
          x === "comma" && b && o(k) ? null : _,
          M,
          D,
          R,
          g,
          C,
          S,
          b,
          q,
          $e
        ));
      }
    }
    return ve;
  }, p = function(f) {
    if (!f)
      return c;
    if (typeof f.allowEmptyArrays < "u" && typeof f.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof f.encodeDotInKeys < "u" && typeof f.encodeDotInKeys != "boolean")
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (f.encoder !== null && typeof f.encoder < "u" && typeof f.encoder != "function")
      throw new TypeError("Encoder has to be a function.");
    var y = f.charset || c.charset;
    if (typeof f.charset < "u" && f.charset !== "utf-8" && f.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var x = r.default;
    if (typeof f.format < "u") {
      if (!n.call(r.formatters, f.format))
        throw new TypeError("Unknown format option provided.");
      x = f.format;
    }
    var P = r.formatters[x], A = c.filter;
    (typeof f.filter == "function" || o(f.filter)) && (A = f.filter);
    var T;
    if (f.arrayFormat in a ? T = f.arrayFormat : "indices" in f ? T = f.indices ? "indices" : "repeat" : T = c.arrayFormat, "commaRoundTrip" in f && typeof f.commaRoundTrip != "boolean")
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var $ = typeof f.allowDots > "u" ? f.encodeDotInKeys === !0 ? !0 : c.allowDots : !!f.allowDots;
    return {
      addQueryPrefix: typeof f.addQueryPrefix == "boolean" ? f.addQueryPrefix : c.addQueryPrefix,
      allowDots: $,
      allowEmptyArrays: typeof f.allowEmptyArrays == "boolean" ? !!f.allowEmptyArrays : c.allowEmptyArrays,
      arrayFormat: T,
      charset: y,
      charsetSentinel: typeof f.charsetSentinel == "boolean" ? f.charsetSentinel : c.charsetSentinel,
      commaRoundTrip: !!f.commaRoundTrip,
      delimiter: typeof f.delimiter > "u" ? c.delimiter : f.delimiter,
      encode: typeof f.encode == "boolean" ? f.encode : c.encode,
      encodeDotInKeys: typeof f.encodeDotInKeys == "boolean" ? f.encodeDotInKeys : c.encodeDotInKeys,
      encoder: typeof f.encoder == "function" ? f.encoder : c.encoder,
      encodeValuesOnly: typeof f.encodeValuesOnly == "boolean" ? f.encodeValuesOnly : c.encodeValuesOnly,
      filter: A,
      format: x,
      formatter: P,
      serializeDate: typeof f.serializeDate == "function" ? f.serializeDate : c.serializeDate,
      skipNulls: typeof f.skipNulls == "boolean" ? f.skipNulls : c.skipNulls,
      sort: typeof f.sort == "function" ? f.sort : null,
      strictNullHandling: typeof f.strictNullHandling == "boolean" ? f.strictNullHandling : c.strictNullHandling
    };
  };
  return fs = function(h, f) {
    var y = h, x = p(f), P, A;
    typeof x.filter == "function" ? (A = x.filter, y = A("", y)) : o(x.filter) && (A = x.filter, P = A);
    var T = [];
    if (typeof y != "object" || y === null)
      return "";
    var $ = a[x.arrayFormat], O = $ === "comma" && x.commaRoundTrip;
    P || (P = Object.keys(y)), x.sort && P.sort(x.sort);
    for (var _ = e(), M = 0; M < P.length; ++M) {
      var D = P[M];
      if (!(typeof D > "u" || D === null)) {
        var R = y[D];
        x.skipNulls && R === null || i(T, v(
          R,
          D,
          $,
          O,
          x.allowEmptyArrays,
          x.strictNullHandling,
          x.skipNulls,
          x.encodeDotInKeys,
          x.encode ? x.encoder : null,
          x.filter,
          x.sort,
          x.allowDots,
          x.serializeDate,
          x.format,
          x.formatter,
          x.encodeValuesOnly,
          x.charset,
          _
        ));
      }
    }
    var g = T.join(x.delimiter), C = x.addQueryPrefix === !0 ? "?" : "";
    return x.charsetSentinel && (x.charset === "iso-8859-1" ? C += "utf8=%26%2310003%3B" + x.delimiter : C += "utf8=%E2%9C%93" + x.delimiter), g.length > 0 ? C + g : "";
  }, fs;
}
var ps, ac;
function _E() {
  if (ac) return ps;
  ac = 1;
  var e = /* @__PURE__ */ Pf(), t = Object.prototype.hasOwnProperty, r = Array.isArray, n = {
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
    strictMerge: !0,
    strictNullHandling: !1,
    throwOnLimitExceeded: !1
  }, a = function(v) {
    return v.replace(/&#(\d+);/g, function(p, h) {
      return String.fromCharCode(parseInt(h, 10));
    });
  }, o = function(v, p, h) {
    if (v && typeof v == "string" && p.comma && v.indexOf(",") > -1)
      return v.split(",");
    if (p.throwOnLimitExceeded && h >= p.arrayLimit)
      throw new RangeError("Array limit exceeded. Only " + p.arrayLimit + " element" + (p.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    return v;
  }, s = "utf8=%26%2310003%3B", i = "utf8=%E2%9C%93", u = function(p, h) {
    var f = { __proto__: null }, y = h.ignoreQueryPrefix ? p.replace(/^\?/, "") : p;
    y = y.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var x = h.parameterLimit === 1 / 0 ? void 0 : h.parameterLimit, P = y.split(
      h.delimiter,
      h.throwOnLimitExceeded && typeof x < "u" ? x + 1 : x
    );
    if (h.throwOnLimitExceeded && typeof x < "u" && P.length > x)
      throw new RangeError("Parameter limit exceeded. Only " + x + " parameter" + (x === 1 ? "" : "s") + " allowed.");
    var A = -1, T, $ = h.charset;
    if (h.charsetSentinel)
      for (T = 0; T < P.length; ++T)
        P[T].indexOf("utf8=") === 0 && (P[T] === i ? $ = "utf-8" : P[T] === s && ($ = "iso-8859-1"), A = T, T = P.length);
    for (T = 0; T < P.length; ++T)
      if (T !== A) {
        var O = P[T], _ = O.indexOf("]="), M = _ === -1 ? O.indexOf("=") : _ + 1, D, R;
        if (M === -1 ? (D = h.decoder(O, n.decoder, $, "key"), R = h.strictNullHandling ? null : "") : (D = h.decoder(O.slice(0, M), n.decoder, $, "key"), D !== null && (R = e.maybeMap(
          o(
            O.slice(M + 1),
            h,
            r(f[D]) ? f[D].length : 0
          ),
          function(C) {
            return h.decoder(C, n.decoder, $, "value");
          }
        ))), R && h.interpretNumericEntities && $ === "iso-8859-1" && (R = a(String(R))), O.indexOf("[]=") > -1 && (R = r(R) ? [R] : R), h.comma && r(R) && R.length > h.arrayLimit) {
          if (h.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          R = e.combine([], R, h.arrayLimit, h.plainObjects);
        }
        if (D !== null) {
          var g = t.call(f, D);
          g && (h.duplicates === "combine" || O.indexOf("[]=") > -1) ? f[D] = e.combine(
            f[D],
            R,
            h.arrayLimit,
            h.plainObjects
          ) : (!g || h.duplicates === "last") && (f[D] = R);
        }
      }
    return f;
  }, l = function(v, p, h, f) {
    var y = 0;
    if (v.length > 0 && v[v.length - 1] === "[]") {
      var x = v.slice(0, -1).join("");
      y = Array.isArray(p) && p[x] ? p[x].length : 0;
    }
    for (var P = f ? p : o(p, h, y), A = v.length - 1; A >= 0; --A) {
      var T, $ = v[A];
      if ($ === "[]" && h.parseArrays)
        e.isOverflow(P) ? T = P : T = h.allowEmptyArrays && (P === "" || h.strictNullHandling && P === null) ? [] : e.combine(
          [],
          P,
          h.arrayLimit,
          h.plainObjects
        );
      else {
        T = h.plainObjects ? { __proto__: null } : {};
        var O = $.charAt(0) === "[" && $.charAt($.length - 1) === "]" ? $.slice(1, -1) : $, _ = h.decodeDotInKeys ? O.replace(/%2E/g, ".") : O, M = parseInt(_, 10), D = !isNaN(M) && $ !== _ && String(M) === _ && M >= 0 && h.parseArrays;
        if (!h.parseArrays && _ === "")
          T = { 0: P };
        else if (D && M < h.arrayLimit)
          T = [], T[M] = P;
        else {
          if (D && h.throwOnLimitExceeded)
            throw new RangeError("Array limit exceeded. Only " + h.arrayLimit + " element" + (h.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
          D ? (T[M] = P, e.markOverflow(T, M)) : _ !== "__proto__" && (T[_] = P);
        }
      }
      P = T;
    }
    return P;
  }, c = function(p, h) {
    var f = h.allowDots ? p.replace(/\.([^.[]+)/g, "[$1]") : p;
    if (h.depth <= 0)
      return !h.plainObjects && t.call(Object.prototype, f) && !h.allowPrototypes ? void 0 : [f];
    var y = [], x = f.indexOf("["), P = x >= 0 ? f.slice(0, x) : f;
    if (P) {
      if (!h.plainObjects && t.call(Object.prototype, P) && !h.allowPrototypes)
        return;
      y[y.length] = P;
    }
    for (var A = f.length, T = x, $ = 0; T >= 0 && $ < h.depth; ) {
      for (var O = 1, _ = T + 1, M = -1; _ < A && M < 0; ) {
        var D = f.charCodeAt(_);
        D === 91 ? O += 1 : D === 93 && (O -= 1, O === 0 && (M = _)), _ += 1;
      }
      if (M < 0)
        return y[y.length] = "[" + f.slice(T) + "]", y;
      var R = f.slice(T, M + 1), g = R.slice(1, -1);
      if (!h.plainObjects && t.call(Object.prototype, g) && !h.allowPrototypes)
        return;
      y[y.length] = R, $ += 1, T = f.indexOf("[", M + 1);
    }
    if (T >= 0) {
      if (h.strictDepth === !0)
        throw new RangeError("Input depth exceeded depth option of " + h.depth + " and strictDepth is true");
      y[y.length] = "[" + f.slice(T) + "]";
    }
    return y;
  }, d = function(p, h, f, y) {
    if (p) {
      var x = c(p, f);
      if (x)
        return l(x, h, f, y);
    }
  }, m = function(p) {
    if (!p)
      return n;
    if (typeof p.allowEmptyArrays < "u" && typeof p.allowEmptyArrays != "boolean")
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof p.decodeDotInKeys < "u" && typeof p.decodeDotInKeys != "boolean")
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (p.decoder !== null && typeof p.decoder < "u" && typeof p.decoder != "function")
      throw new TypeError("Decoder has to be a function.");
    if (typeof p.charset < "u" && p.charset !== "utf-8" && p.charset !== "iso-8859-1")
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    if (typeof p.throwOnLimitExceeded < "u" && typeof p.throwOnLimitExceeded != "boolean")
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    var h = typeof p.charset > "u" ? n.charset : p.charset, f = typeof p.duplicates > "u" ? n.duplicates : p.duplicates;
    if (f !== "combine" && f !== "first" && f !== "last")
      throw new TypeError("The duplicates option must be either combine, first, or last");
    var y = typeof p.allowDots > "u" ? p.decodeDotInKeys === !0 ? !0 : n.allowDots : !!p.allowDots;
    return {
      allowDots: y,
      allowEmptyArrays: typeof p.allowEmptyArrays == "boolean" ? !!p.allowEmptyArrays : n.allowEmptyArrays,
      allowPrototypes: typeof p.allowPrototypes == "boolean" ? p.allowPrototypes : n.allowPrototypes,
      allowSparse: typeof p.allowSparse == "boolean" ? p.allowSparse : n.allowSparse,
      arrayLimit: typeof p.arrayLimit == "number" ? p.arrayLimit : n.arrayLimit,
      charset: h,
      charsetSentinel: typeof p.charsetSentinel == "boolean" ? p.charsetSentinel : n.charsetSentinel,
      comma: typeof p.comma == "boolean" ? p.comma : n.comma,
      decodeDotInKeys: typeof p.decodeDotInKeys == "boolean" ? p.decodeDotInKeys : n.decodeDotInKeys,
      decoder: typeof p.decoder == "function" ? p.decoder : n.decoder,
      delimiter: typeof p.delimiter == "string" || e.isRegExp(p.delimiter) ? p.delimiter : n.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof p.depth == "number" || p.depth === !1 ? +p.depth : n.depth,
      duplicates: f,
      ignoreQueryPrefix: p.ignoreQueryPrefix === !0,
      interpretNumericEntities: typeof p.interpretNumericEntities == "boolean" ? p.interpretNumericEntities : n.interpretNumericEntities,
      parameterLimit: typeof p.parameterLimit == "number" ? p.parameterLimit : n.parameterLimit,
      parseArrays: p.parseArrays !== !1,
      plainObjects: typeof p.plainObjects == "boolean" ? p.plainObjects : n.plainObjects,
      strictDepth: typeof p.strictDepth == "boolean" ? !!p.strictDepth : n.strictDepth,
      strictMerge: typeof p.strictMerge == "boolean" ? !!p.strictMerge : n.strictMerge,
      strictNullHandling: typeof p.strictNullHandling == "boolean" ? p.strictNullHandling : n.strictNullHandling,
      throwOnLimitExceeded: typeof p.throwOnLimitExceeded == "boolean" ? p.throwOnLimitExceeded : !1
    };
  };
  return ps = function(v, p) {
    var h = m(p);
    if (v === "" || v === null || typeof v > "u")
      return h.plainObjects ? { __proto__: null } : {};
    for (var f = typeof v == "string" ? u(v, h) : v, y = h.plainObjects ? { __proto__: null } : {}, x = Object.keys(f), P = 0; P < x.length; ++P) {
      var A = x[P], T = d(A, f[A], h, typeof v == "string");
      y = e.merge(y, T, h);
    }
    return h.allowSparse === !0 ? y : e.compact(y);
  }, ps;
}
var hs, oc;
function qE() {
  if (oc) return hs;
  oc = 1;
  var e = /* @__PURE__ */ FE(), t = /* @__PURE__ */ _E(), r = /* @__PURE__ */ Ki();
  return hs = {
    formats: r,
    parse: t,
    stringify: e
  }, hs;
}
var sc = /* @__PURE__ */ qE();
function Of(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: BE } = Object.prototype, { getPrototypeOf: za } = Object, { iterator: Wa, toStringTag: Af } = Symbol, Ka = /* @__PURE__ */ ((e) => (t) => {
  const r = BE.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), At = (e) => (e = e.toLowerCase(), (t) => Ka(t) === e), Ga = (e) => (t) => typeof t === e, { isArray: Zr } = Array, Kr = Ga("undefined");
function Fn(e) {
  return e !== null && !Kr(e) && e.constructor !== null && !Kr(e.constructor) && Ze(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const kf = At("ArrayBuffer");
function IE(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && kf(e.buffer), t;
}
const LE = Ga("string"), Ze = Ga("function"), Tf = Ga("number"), _n = (e) => e !== null && typeof e == "object", ME = (e) => e === !0 || e === !1, oa = (e) => {
  if (Ka(e) !== "object")
    return !1;
  const t = za(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Af in e) && !(Wa in e);
}, NE = (e) => {
  if (!_n(e) || Fn(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, jE = At("Date"), VE = At("File"), UE = (e) => !!(e && typeof e.uri < "u"), HE = (e) => e && typeof e.getParts < "u", zE = At("Blob"), WE = At("FileList"), KE = (e) => _n(e) && Ze(e.pipe);
function GE() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const ic = GE(), lc = typeof ic.FormData < "u" ? ic.FormData : void 0, JE = (e) => {
  if (!e) return !1;
  if (lc && e instanceof lc) return !0;
  const t = za(e);
  if (!t || t === Object.prototype || !Ze(e.append)) return !1;
  const r = Ka(e);
  return r === "formdata" || // detect form-data instance
  r === "object" && Ze(e.toString) && e.toString() === "[object FormData]";
}, YE = At("URLSearchParams"), [XE, QE, ZE, eC] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(At), tC = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qn(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, a;
  if (typeof e != "object" && (e = [e]), Zr(e))
    for (n = 0, a = e.length; n < a; n++)
      t.call(null, e[n], n, e);
  else {
    if (Fn(e))
      return;
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let i;
    for (n = 0; n < s; n++)
      i = o[n], t.call(null, e[i], i, e);
  }
}
function $f(e, t) {
  if (Fn(e))
    return null;
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, a;
  for (; n-- > 0; )
    if (a = r[n], t === a.toLowerCase())
      return a;
  return null;
}
const hr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Df = (e) => !Kr(e) && e !== hr;
function Ys(...e) {
  const { caseless: t, skipUndefined: r } = Df(this) && this || {}, n = {}, a = (o, s) => {
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    const i = t && $f(n, s) || s, u = Xs(n, i) ? n[i] : void 0;
    oa(u) && oa(o) ? n[i] = Ys(u, o) : oa(o) ? n[i] = Ys({}, o) : Zr(o) ? n[i] = o.slice() : (!r || !Kr(o)) && (n[i] = o);
  };
  for (let o = 0, s = e.length; o < s; o++)
    e[o] && qn(e[o], a);
  return n;
}
const rC = (e, t, r, { allOwnKeys: n } = {}) => (qn(
  t,
  (a, o) => {
    r && Ze(a) ? Object.defineProperty(e, o, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Of(a, r),
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
), e), nC = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), aC = (e, t, r, n) => {
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
}, oC = (e, t, r, n) => {
  let a, o, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      s = a[o], (!n || n(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = r !== !1 && za(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, sC = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, iC = (e) => {
  if (!e) return null;
  if (Zr(e)) return e;
  let t = e.length;
  if (!Tf(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, lC = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && za(Uint8Array)), uC = (e, t) => {
  const n = (e && e[Wa]).call(e);
  let a;
  for (; (a = n.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, cC = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, dC = At("HTMLFormElement"), fC = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, n, a) {
  return n.toUpperCase() + a;
}), Xs = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), pC = At("RegExp"), Rf = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  qn(r, (a, o) => {
    let s;
    (s = t(a, o, e)) !== !1 && (n[o] = s || a);
  }), Object.defineProperties(e, n);
}, hC = (e) => {
  Rf(e, (t, r) => {
    if (Ze(e) && ["arguments", "caller", "callee"].includes(r))
      return !1;
    const n = e[r];
    if (Ze(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, mC = (e, t) => {
  const r = {}, n = (a) => {
    a.forEach((o) => {
      r[o] = !0;
    });
  };
  return Zr(e) ? n(e) : n(String(e).split(t)), r;
}, yC = () => {
}, gC = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function vC(e) {
  return !!(e && Ze(e.append) && e[Af] === "FormData" && e[Wa]);
}
const bC = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), r = (n) => {
    if (_n(n)) {
      if (t.has(n))
        return;
      if (Fn(n))
        return n;
      if (!("toJSON" in n)) {
        t.add(n);
        const a = Zr(n) ? [] : {};
        return qn(n, (o, s) => {
          const i = r(o);
          !Kr(i) && (a[s] = i);
        }), t.delete(n), a;
      }
    }
    return n;
  };
  return r(e);
}, wC = At("AsyncFunction"), xC = (e) => e && (_n(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), Ff = ((e, t) => e ? setImmediate : t ? ((r, n) => (hr.addEventListener(
  "message",
  ({ source: a, data: o }) => {
    a === hr && o === r && n.length && n.shift()();
  },
  !1
), (a) => {
  n.push(a), hr.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", Ze(hr.postMessage)), SC = typeof queueMicrotask < "u" ? queueMicrotask.bind(hr) : typeof process < "u" && process.nextTick || Ff, EC = (e) => e != null && Ze(e[Wa]), L = {
  isArray: Zr,
  isArrayBuffer: kf,
  isBuffer: Fn,
  isFormData: JE,
  isArrayBufferView: IE,
  isString: LE,
  isNumber: Tf,
  isBoolean: ME,
  isObject: _n,
  isPlainObject: oa,
  isEmptyObject: NE,
  isReadableStream: XE,
  isRequest: QE,
  isResponse: ZE,
  isHeaders: eC,
  isUndefined: Kr,
  isDate: jE,
  isFile: VE,
  isReactNativeBlob: UE,
  isReactNative: HE,
  isBlob: zE,
  isRegExp: pC,
  isFunction: Ze,
  isStream: KE,
  isURLSearchParams: YE,
  isTypedArray: lC,
  isFileList: WE,
  forEach: qn,
  merge: Ys,
  extend: rC,
  trim: tC,
  stripBOM: nC,
  inherits: aC,
  toFlatObject: oC,
  kindOf: Ka,
  kindOfTest: At,
  endsWith: sC,
  toArray: iC,
  forEachEntry: uC,
  matchAll: cC,
  isHTMLForm: dC,
  hasOwnProperty: Xs,
  hasOwnProp: Xs,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Rf,
  freezeMethods: hC,
  toObjectSet: mC,
  toCamelCase: fC,
  noop: yC,
  toFiniteNumber: gC,
  findKey: $f,
  global: hr,
  isContextDefined: Df,
  isSpecCompliantForm: vC,
  toJSONObject: bC,
  isAsyncFn: wC,
  isThenable: xC,
  setImmediate: Ff,
  asap: SC,
  isIterable: EC
}, CC = L.toObjectSet([
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
]), PC = (e) => {
  const t = {};
  let r, n, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), r = s.substring(0, a).trim().toLowerCase(), n = s.substring(a + 1).trim(), !(!r || t[r] && CC[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
};
function OC(e) {
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
const AC = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), kC = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function Gi(e, t) {
  return L.isArray(e) ? e.map((r) => Gi(r, t)) : OC(String(e).replace(t, ""));
}
const TC = (e) => Gi(e, AC), $C = (e) => Gi(e, kC);
function _f(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return L.forEach(e.toJSON(), (r, n) => {
    t[n] = $C(r);
  }), t;
}
const uc = Symbol("internals");
function nn(e) {
  return e && String(e).trim().toLowerCase();
}
function sa(e) {
  return e === !1 || e == null ? e : L.isArray(e) ? e.map(sa) : TC(String(e));
}
function DC(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const RC = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ms(e, t, r, n, a) {
  if (L.isFunction(n))
    return n.call(this, t, r);
  if (a && (t = r), !!L.isString(t)) {
    if (L.isString(n))
      return t.indexOf(n) !== -1;
    if (L.isRegExp(n))
      return n.test(t);
  }
}
function FC(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function _C(e, t) {
  const r = L.toCamelCase(" " + t);
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
let Je = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const a = this;
    function o(i, u, l) {
      const c = nn(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const d = L.findKey(a, c);
      (!d || a[d] === void 0 || l === !0 || l === void 0 && a[d] !== !1) && (a[d || u] = sa(i));
    }
    const s = (i, u) => L.forEach(i, (l, c) => o(l, c, u));
    if (L.isPlainObject(t) || t instanceof this.constructor)
      s(t, r);
    else if (L.isString(t) && (t = t.trim()) && !RC(t))
      s(PC(t), r);
    else if (L.isObject(t) && L.isIterable(t)) {
      let i = {}, u, l;
      for (const c of t) {
        if (!L.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        i[l = c[0]] = (u = i[l]) ? L.isArray(u) ? [...u, c[1]] : [u, c[1]] : c[1];
      }
      s(i, r);
    } else
      t != null && o(r, t, n);
    return this;
  }
  get(t, r) {
    if (t = nn(t), t) {
      const n = L.findKey(this, t);
      if (n) {
        const a = this[n];
        if (!r)
          return a;
        if (r === !0)
          return DC(a);
        if (L.isFunction(r))
          return r.call(this, a, n);
        if (L.isRegExp(r))
          return r.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = nn(t), t) {
      const n = L.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ms(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let a = !1;
    function o(s) {
      if (s = nn(s), s) {
        const i = L.findKey(n, s);
        i && (!r || ms(n, n[i], i, r)) && (delete n[i], a = !0);
      }
    }
    return L.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, a = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || ms(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const r = this, n = {};
    return L.forEach(this, (a, o) => {
      const s = L.findKey(n, o);
      if (s) {
        r[s] = sa(a), delete r[o];
        return;
      }
      const i = t ? FC(o) : String(o).trim();
      i !== o && delete r[o], r[i] = sa(a), n[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return L.forEach(this, (n, a) => {
      n != null && n !== !1 && (r[a] = t && L.isArray(n) ? n.join(", ") : n);
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
    const n = (this[uc] = this[uc] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(s) {
      const i = nn(s);
      n[i] || (_C(a, s), n[i] = !0);
    }
    return L.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Je.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
L.reduceDescriptors(Je.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
L.freezeMethods(Je);
const qC = "[REDACTED ****]";
function BC(e) {
  if (L.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (L.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function IC(e, t) {
  const r = new Set(t.map((o) => String(o).toLowerCase())), n = [], a = (o) => {
    if (o === null || typeof o != "object" || L.isBuffer(o)) return o;
    if (n.indexOf(o) !== -1) return;
    o instanceof Je && (o = o.toJSON()), n.push(o);
    let s;
    if (L.isArray(o))
      s = [], o.forEach((i, u) => {
        const l = a(i);
        L.isUndefined(l) || (s[u] = l);
      });
    else {
      if (!L.isPlainObject(o) && BC(o))
        return n.pop(), o;
      s = /* @__PURE__ */ Object.create(null);
      for (const [i, u] of Object.entries(o)) {
        const l = r.has(i.toLowerCase()) ? qC : a(u);
        L.isUndefined(l) || (s[i] = l);
      }
    }
    return n.pop(), s;
  };
  return a(e);
}
let ee = class qf extends Error {
  static from(t, r, n, a, o, s) {
    const i = new qf(t.message, r || t.code, n, a, o);
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
    const t = this.config, r = t && L.hasOwnProp(t, "redact") ? t.redact : void 0, n = L.isArray(r) && r.length > 0 ? IC(t, r) : L.toJSONObject(t);
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
const LC = null;
function Qs(e) {
  return L.isPlainObject(e) || L.isArray(e);
}
function Bf(e) {
  return L.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ys(e, t, r) {
  return e ? e.concat(t).map(function(a, o) {
    return a = Bf(a), !r && o ? "[" + a + "]" : a;
  }).join(r ? "." : "") : t;
}
function MC(e) {
  return L.isArray(e) && !e.some(Qs);
}
const NC = L.toFlatObject(L, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ja(e, t, r) {
  if (!L.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = L.toFlatObject(
    r,
    {
      metaTokens: !0,
      dots: !1,
      indexes: !1
    },
    !1,
    function(f, y) {
      return !L.isUndefined(y[f]);
    }
  );
  const n = r.metaTokens, a = r.visitor || d, o = r.dots, s = r.indexes, i = r.Blob || typeof Blob < "u" && Blob, u = r.maxDepth === void 0 ? 100 : r.maxDepth, l = i && L.isSpecCompliantForm(t);
  if (!L.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null) return "";
    if (L.isDate(h))
      return h.toISOString();
    if (L.isBoolean(h))
      return h.toString();
    if (!l && L.isBlob(h))
      throw new ee("Blob is not supported. Use a Buffer instead.");
    return L.isArrayBuffer(h) || L.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, f, y) {
    let x = h;
    if (L.isReactNative(t) && L.isReactNativeBlob(h))
      return t.append(ys(y, f, o), c(h)), !1;
    if (h && !y && typeof h == "object") {
      if (L.endsWith(f, "{}"))
        f = n ? f : f.slice(0, -2), h = JSON.stringify(h);
      else if (L.isArray(h) && MC(h) || (L.isFileList(h) || L.endsWith(f, "[]")) && (x = L.toArray(h)))
        return f = Bf(f), x.forEach(function(A, T) {
          !(L.isUndefined(A) || A === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? ys([f], T, o) : s === null ? f : f + "[]",
            c(A)
          );
        }), !1;
    }
    return Qs(h) ? !0 : (t.append(ys(y, f, o), c(h)), !1);
  }
  const m = [], v = Object.assign(NC, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: Qs
  });
  function p(h, f, y = 0) {
    if (!L.isUndefined(h)) {
      if (y > u)
        throw new ee(
          "Object is too deeply nested (" + y + " levels). Max depth: " + u,
          ee.ERR_FORM_DATA_DEPTH_EXCEEDED
        );
      if (m.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      m.push(h), L.forEach(h, function(P, A) {
        (!(L.isUndefined(P) || P === null) && a.call(t, P, L.isString(A) ? A.trim() : A, f, v)) === !0 && p(P, f ? f.concat(A) : [A], y + 1);
      }), m.pop();
    }
  }
  if (!L.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function cc(e) {
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
function Ji(e, t) {
  this._pairs = [], e && Ja(e, this, t);
}
const If = Ji.prototype;
If.append = function(t, r) {
  this._pairs.push([t, r]);
};
If.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, cc);
  } : cc;
  return this._pairs.map(function(a) {
    return r(a[0]) + "=" + r(a[1]);
  }, "").join("&");
};
function jC(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Lf(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || jC, a = L.isFunction(r) ? {
    serialize: r
  } : r, o = a && a.serialize;
  let s;
  if (o ? s = o(t, a) : s = L.isURLSearchParams(t) ? t.toString() : new Ji(t, a).toString(n), s) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class dc {
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
    L.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Yi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0
}, VC = typeof URLSearchParams < "u" ? URLSearchParams : Ji, UC = typeof FormData < "u" ? FormData : null, HC = typeof Blob < "u" ? Blob : null, zC = {
  isBrowser: !0,
  classes: {
    URLSearchParams: VC,
    FormData: UC,
    Blob: HC
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xi = typeof window < "u" && typeof document < "u", Zs = typeof navigator == "object" && navigator || void 0, WC = Xi && (!Zs || ["ReactNative", "NativeScript", "NS"].indexOf(Zs.product) < 0), KC = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", GC = Xi && window.location.href || "http://localhost", JC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xi,
  hasStandardBrowserEnv: WC,
  hasStandardBrowserWebWorkerEnv: KC,
  navigator: Zs,
  origin: GC
}, Symbol.toStringTag, { value: "Module" })), We = {
  ...JC,
  ...zC
};
function YC(e, t) {
  return Ja(e, new We.classes.URLSearchParams(), {
    visitor: function(r, n, a, o) {
      return We.isNode && L.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
function XC(e) {
  return L.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function QC(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const a = r.length;
  let o;
  for (n = 0; n < a; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function Mf(e) {
  function t(r, n, a, o) {
    let s = r[o++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), u = o >= r.length;
    return s = !s && L.isArray(a) ? a.length : s, u ? (L.hasOwnProp(a, s) ? a[s] = L.isArray(a[s]) ? a[s].concat(n) : [a[s], n] : a[s] = n, !i) : ((!L.hasOwnProp(a, s) || !L.isObject(a[s])) && (a[s] = []), t(r, n, a[s], o) && L.isArray(a[s]) && (a[s] = QC(a[s])), !i);
  }
  if (L.isFormData(e) && L.isFunction(e.entries)) {
    const r = {};
    return L.forEachEntry(e, (n, a) => {
      t(XC(n), a, r, 0);
    }), r;
  }
  return null;
}
const Lr = (e, t) => e != null && L.hasOwnProp(e, t) ? e[t] : void 0;
function ZC(e, t, r) {
  if (L.isString(e))
    try {
      return (t || JSON.parse)(e), L.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Bn = {
  transitional: Yi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, r) {
      const n = r.getContentType() || "", a = n.indexOf("application/json") > -1, o = L.isObject(t);
      if (o && L.isHTMLForm(t) && (t = new FormData(t)), L.isFormData(t))
        return a ? JSON.stringify(Mf(t)) : t;
      if (L.isArrayBuffer(t) || L.isBuffer(t) || L.isStream(t) || L.isFile(t) || L.isBlob(t) || L.isReadableStream(t))
        return t;
      if (L.isArrayBufferView(t))
        return t.buffer;
      if (L.isURLSearchParams(t))
        return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let i;
      if (o) {
        const u = Lr(this, "formSerializer");
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return YC(t, u).toString();
        if ((i = L.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
          const l = Lr(this, "env"), c = l && l.FormData;
          return Ja(
            i ? { "files[]": t } : t,
            c && new c(),
            u
          );
        }
      }
      return o || a ? (r.setContentType("application/json", !1), ZC(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const r = Lr(this, "transitional") || Bn.transitional, n = r && r.forcedJSONParsing, a = Lr(this, "responseType"), o = a === "json";
      if (L.isResponse(t) || L.isReadableStream(t))
        return t;
      if (t && L.isString(t) && (n && !a || o)) {
        const i = !(r && r.silentJSONParsing) && o;
        try {
          return JSON.parse(t, Lr(this, "parseReviver"));
        } catch (u) {
          if (i)
            throw u.name === "SyntaxError" ? ee.from(u, ee.ERR_BAD_RESPONSE, this, null, Lr(this, "response")) : u;
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
    FormData: We.classes.FormData,
    Blob: We.classes.Blob
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
L.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  Bn.headers[e] = {};
});
function gs(e, t) {
  const r = this || Bn, n = t || r, a = Je.from(n.headers);
  let o = n.data;
  return L.forEach(e, function(i) {
    o = i.call(r, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function Nf(e) {
  return !!(e && e.__CANCEL__);
}
let In = class extends ee {
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
function jf(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ee(
    "Request failed with status code " + r.status,
    r.status >= 400 && r.status < 500 ? ee.ERR_BAD_REQUEST : ee.ERR_BAD_RESPONSE,
    r.config,
    r.request,
    r
  ));
}
function eP(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1] || "";
}
function tP(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let a = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const l = Date.now(), c = n[o];
    s || (s = l), r[a] = u, n[a] = l;
    let d = o, m = 0;
    for (; d !== a; )
      m += r[d++], d = d % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), l - s < t)
      return;
    const v = c && l - c;
    return v ? Math.round(m * 1e3 / v) : void 0;
  };
}
function rP(e, t) {
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
const Sa = (e, t, r = 3) => {
  let n = 0;
  const a = tP(50, 250);
  return rP((o) => {
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
}, fc = (e, t) => {
  const r = e != null;
  return [
    (n) => t[0]({
      lengthComputable: r,
      total: e,
      loaded: n
    }),
    t[1]
  ];
}, pc = (e) => (...t) => L.asap(() => e(...t)), nP = We.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, We.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(
  new URL(We.origin),
  We.navigator && /(msie|trident)/i.test(We.navigator.userAgent)
) : () => !0, aP = We.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, a, o, s) {
      if (typeof document > "u") return;
      const i = [`${e}=${encodeURIComponent(t)}`];
      L.isNumber(r) && i.push(`expires=${new Date(r).toUTCString()}`), L.isString(n) && i.push(`path=${n}`), L.isString(a) && i.push(`domain=${a}`), o === !0 && i.push("secure"), L.isString(s) && i.push(`SameSite=${s}`), document.cookie = i.join("; ");
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
function oP(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function sP(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Vf(e, t, r) {
  let n = !oP(t);
  return e && (n || r === !1) ? sP(e, t) : t;
}
const hc = (e) => e instanceof Je ? { ...e } : e;
function xr(e, t) {
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
  function n(l, c, d, m) {
    return L.isPlainObject(l) && L.isPlainObject(c) ? L.merge.call({ caseless: m }, l, c) : L.isPlainObject(c) ? L.merge({}, c) : L.isArray(c) ? c.slice() : c;
  }
  function a(l, c, d, m) {
    if (L.isUndefined(c)) {
      if (!L.isUndefined(l))
        return n(void 0, l, d, m);
    } else return n(l, c, d, m);
  }
  function o(l, c) {
    if (!L.isUndefined(c))
      return n(void 0, c);
  }
  function s(l, c) {
    if (L.isUndefined(c)) {
      if (!L.isUndefined(l))
        return n(void 0, l);
    } else return n(void 0, c);
  }
  function i(l, c, d) {
    if (L.hasOwnProp(t, d))
      return n(l, c);
    if (L.hasOwnProp(e, d))
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
    headers: (l, c, d) => a(hc(l), hc(c), d, !0)
  };
  return L.forEach(Object.keys({ ...e, ...t }), function(c) {
    if (c === "__proto__" || c === "constructor" || c === "prototype") return;
    const d = L.hasOwnProp(u, c) ? u[c] : a, m = L.hasOwnProp(e, c) ? e[c] : void 0, v = L.hasOwnProp(t, c) ? t[c] : void 0, p = d(m, v, c);
    L.isUndefined(p) && d !== i || (r[c] = p);
  }), r;
}
const iP = ["content-type", "content-length"];
function lP(e, t, r) {
  if (r !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([n, a]) => {
    iP.includes(n.toLowerCase()) && e.set(n, a);
  });
}
const uP = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, r) => String.fromCharCode(parseInt(r, 16))
), Uf = (e) => {
  const t = xr({}, e), r = (m) => L.hasOwnProp(t, m) ? t[m] : void 0, n = r("data");
  let a = r("withXSRFToken");
  const o = r("xsrfHeaderName"), s = r("xsrfCookieName");
  let i = r("headers");
  const u = r("auth"), l = r("baseURL"), c = r("allowAbsoluteUrls"), d = r("url");
  if (t.headers = i = Je.from(i), t.url = Lf(
    Vf(l, d, c),
    e.params,
    e.paramsSerializer
  ), u && i.set(
    "Authorization",
    "Basic " + btoa((u.username || "") + ":" + (u.password ? uP(u.password) : ""))
  ), L.isFormData(n) && (We.hasStandardBrowserEnv || We.hasStandardBrowserWebWorkerEnv ? i.setContentType(void 0) : L.isFunction(n.getHeaders) && lP(i, n.getHeaders(), r("formDataHeaderPolicy"))), We.hasStandardBrowserEnv && (L.isFunction(a) && (a = a(t)), a === !0 || a == null && nP(t.url))) {
    const v = o && s && aP.read(s);
    v && i.set(o, v);
  }
  return t;
}, cP = typeof XMLHttpRequest < "u", dP = cP && function(e) {
  return new Promise(function(r, n) {
    const a = Uf(e);
    let o = a.data;
    const s = Je.from(a.headers).normalize();
    let { responseType: i, onUploadProgress: u, onDownloadProgress: l } = a, c, d, m, v, p;
    function h() {
      v && v(), p && p(), a.cancelToken && a.cancelToken.unsubscribe(c), a.signal && a.signal.removeEventListener("abort", c);
    }
    let f = new XMLHttpRequest();
    f.open(a.method.toUpperCase(), a.url, !0), f.timeout = a.timeout;
    function y() {
      if (!f)
        return;
      const P = Je.from(
        "getAllResponseHeaders" in f && f.getAllResponseHeaders()
      ), T = {
        data: !i || i === "text" || i === "json" ? f.responseText : f.response,
        status: f.status,
        statusText: f.statusText,
        headers: P,
        config: e,
        request: f
      };
      jf(
        function(O) {
          r(O), h();
        },
        function(O) {
          n(O), h();
        },
        T
      ), f = null;
    }
    "onloadend" in f ? f.onloadend = y : f.onreadystatechange = function() {
      !f || f.readyState !== 4 || f.status === 0 && !(f.responseURL && f.responseURL.startsWith("file:")) || setTimeout(y);
    }, f.onabort = function() {
      f && (n(new ee("Request aborted", ee.ECONNABORTED, e, f)), h(), f = null);
    }, f.onerror = function(A) {
      const T = A && A.message ? A.message : "Network Error", $ = new ee(T, ee.ERR_NETWORK, e, f);
      $.event = A || null, n($), h(), f = null;
    }, f.ontimeout = function() {
      let A = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const T = a.transitional || Yi;
      a.timeoutErrorMessage && (A = a.timeoutErrorMessage), n(
        new ee(
          A,
          T.clarifyTimeoutError ? ee.ETIMEDOUT : ee.ECONNABORTED,
          e,
          f
        )
      ), h(), f = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in f && L.forEach(_f(s), function(A, T) {
      f.setRequestHeader(T, A);
    }), L.isUndefined(a.withCredentials) || (f.withCredentials = !!a.withCredentials), i && i !== "json" && (f.responseType = a.responseType), l && ([m, p] = Sa(l, !0), f.addEventListener("progress", m)), u && f.upload && ([d, v] = Sa(u), f.upload.addEventListener("progress", d), f.upload.addEventListener("loadend", v)), (a.cancelToken || a.signal) && (c = (P) => {
      f && (n(!P || P.type ? new In(null, e, f) : P), f.abort(), h(), f = null);
    }, a.cancelToken && a.cancelToken.subscribe(c), a.signal && (a.signal.aborted ? c() : a.signal.addEventListener("abort", c)));
    const x = eP(a.url);
    if (x && !We.protocols.includes(x)) {
      n(
        new ee(
          "Unsupported protocol " + x + ":",
          ee.ERR_BAD_REQUEST,
          e
        )
      );
      return;
    }
    f.send(o || null);
  });
}, fP = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const r = new AbortController();
  let n = !1;
  const a = function(u) {
    if (!n) {
      n = !0, s();
      const l = u instanceof Error ? u : this.reason;
      r.abort(
        l instanceof ee ? l : new In(l instanceof Error ? l.message : l)
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
  return i.unsubscribe = () => L.asap(s), i;
}, pP = function* (e, t) {
  let r = e.byteLength;
  if (r < t) {
    yield e;
    return;
  }
  let n = 0, a;
  for (; n < r; )
    a = n + t, yield e.slice(n, a), n = a;
}, hP = async function* (e, t) {
  for await (const r of mP(e))
    yield* pP(r, t);
}, mP = async function* (e) {
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
}, mc = (e, t, r, n) => {
  const a = hP(e, t);
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
            let m = o += d;
            r(m);
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
function yP(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const r = e.slice(5, t), n = e.slice(t + 1);
  if (/;base64/i.test(r)) {
    let s = n.length;
    const i = n.length;
    for (let v = 0; v < i; v++)
      if (n.charCodeAt(v) === 37 && v + 2 < i) {
        const p = n.charCodeAt(v + 1), h = n.charCodeAt(v + 2);
        (p >= 48 && p <= 57 || p >= 65 && p <= 70 || p >= 97 && p <= 102) && (h >= 48 && h <= 57 || h >= 65 && h <= 70 || h >= 97 && h <= 102) && (s -= 2, v += 2);
      }
    let u = 0, l = i - 1;
    const c = (v) => v >= 2 && n.charCodeAt(v - 2) === 37 && // '%'
    n.charCodeAt(v - 1) === 51 && // '3'
    (n.charCodeAt(v) === 68 || n.charCodeAt(v) === 100);
    l >= 0 && (n.charCodeAt(l) === 61 ? (u++, l--) : c(l) && (u++, l -= 3)), u === 1 && l >= 0 && (n.charCodeAt(l) === 61 || c(l)) && u++;
    const m = Math.floor(s / 4) * 3 - (u || 0);
    return m > 0 ? m : 0;
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
const Qi = "1.16.1", yc = 64 * 1024, { isFunction: Xn } = L, gc = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, gP = (e) => {
  const t = L.global !== void 0 && L.global !== null ? L.global : globalThis, { ReadableStream: r, TextEncoder: n } = t;
  e = L.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response
    },
    e
  );
  const { fetch: a, Request: o, Response: s } = e, i = a ? Xn(a) : typeof fetch == "function", u = Xn(o), l = Xn(s);
  if (!i)
    return !1;
  const c = i && Xn(r), d = i && (typeof n == "function" ? /* @__PURE__ */ ((y) => (x) => y.encode(x))(new n()) : async (y) => new Uint8Array(await new o(y).arrayBuffer())), m = u && c && gc(() => {
    let y = !1;
    const x = new o(We.origin, {
      body: new r(),
      method: "POST",
      get duplex() {
        return y = !0, "half";
      }
    }), P = x.headers.has("Content-Type");
    return x.body != null && x.body.cancel(), y && !P;
  }), v = l && c && gc(() => L.isReadableStream(new s("").body)), p = {
    stream: v && ((y) => y.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((y) => {
    !p[y] && (p[y] = (x, P) => {
      let A = x && x[y];
      if (A)
        return A.call(x);
      throw new ee(
        `Response type '${y}' is not supported`,
        ee.ERR_NOT_SUPPORT,
        P
      );
    });
  });
  const h = async (y) => {
    if (y == null)
      return 0;
    if (L.isBlob(y))
      return y.size;
    if (L.isSpecCompliantForm(y))
      return (await new o(We.origin, {
        method: "POST",
        body: y
      }).arrayBuffer()).byteLength;
    if (L.isArrayBufferView(y) || L.isArrayBuffer(y))
      return y.byteLength;
    if (L.isURLSearchParams(y) && (y = y + ""), L.isString(y))
      return (await d(y)).byteLength;
  }, f = async (y, x) => {
    const P = L.toFiniteNumber(y.getContentLength());
    return P ?? h(x);
  };
  return async (y) => {
    let {
      url: x,
      method: P,
      data: A,
      signal: T,
      cancelToken: $,
      timeout: O,
      onDownloadProgress: _,
      onUploadProgress: M,
      responseType: D,
      headers: R,
      withCredentials: g = "same-origin",
      fetchOptions: C,
      maxContentLength: S,
      maxBodyLength: b
    } = Uf(y);
    const q = L.isNumber(S) && S > -1, B = L.isNumber(b) && b > -1;
    let k = a || fetch;
    D = D ? (D + "").toLowerCase() : "text";
    let G = fP(
      [T, $ && $.toAbortSignal()],
      O
    ), te = null;
    const de = G && G.unsubscribe && (() => {
      G.unsubscribe();
    });
    let Be;
    try {
      if (q && typeof x == "string" && x.startsWith("data:") && yP(x) > S)
        throw new ee(
          "maxContentLength size of " + S + " exceeded",
          ee.ERR_BAD_RESPONSE,
          y,
          te
        );
      if (B && P !== "get" && P !== "head") {
        const le = await f(R, A);
        if (typeof le == "number" && isFinite(le) && le > b)
          throw new ee(
            "Request body larger than maxBodyLength limit",
            ee.ERR_BAD_REQUEST,
            y,
            te
          );
      }
      if (M && m && P !== "get" && P !== "head" && (Be = await f(R, A)) !== 0) {
        let le = new o(x, {
          method: "POST",
          body: A,
          duplex: "half"
        }), be;
        if (L.isFormData(A) && (be = le.headers.get("content-type")) && R.setContentType(be), le.body) {
          const [oe, ge] = fc(
            Be,
            Sa(pc(M))
          );
          A = mc(le.body, yc, oe, ge);
        }
      }
      L.isString(g) || (g = g ? "include" : "omit");
      const ie = u && "credentials" in o.prototype;
      if (L.isFormData(A)) {
        const le = R.getContentType();
        le && /^multipart\/form-data/i.test(le) && !/boundary=/i.test(le) && R.delete("content-type");
      }
      R.set("User-Agent", "axios/" + Qi, !1);
      const ve = {
        ...C,
        signal: G,
        method: P.toUpperCase(),
        headers: _f(R.normalize()),
        body: A,
        duplex: "half",
        credentials: ie ? g : void 0
      };
      te = u && new o(x, ve);
      let ye = await (u ? k(te, C) : k(x, ve));
      if (q) {
        const le = L.toFiniteNumber(ye.headers.get("content-length"));
        if (le != null && le > S)
          throw new ee(
            "maxContentLength size of " + S + " exceeded",
            ee.ERR_BAD_RESPONSE,
            y,
            te
          );
      }
      const Ie = v && (D === "stream" || D === "response");
      if (v && ye.body && (_ || q || Ie && de)) {
        const le = {};
        ["status", "statusText", "headers"].forEach(($e) => {
          le[$e] = ye[$e];
        });
        const be = L.toFiniteNumber(ye.headers.get("content-length")), [oe, ge] = _ && fc(
          be,
          Sa(pc(_), !0)
        ) || [];
        let pe = 0;
        const Oe = ($e) => {
          if (q && (pe = $e, pe > S))
            throw new ee(
              "maxContentLength size of " + S + " exceeded",
              ee.ERR_BAD_RESPONSE,
              y,
              te
            );
          oe && oe($e);
        };
        ye = new s(
          mc(ye.body, yc, Oe, () => {
            ge && ge(), de && de();
          }),
          le
        );
      }
      D = D || "text";
      let _e = await p[L.findKey(p, D) || "text"](
        ye,
        y
      );
      if (q && !v && !Ie) {
        let le;
        if (_e != null && (typeof _e.byteLength == "number" ? le = _e.byteLength : typeof _e.size == "number" ? le = _e.size : typeof _e == "string" && (le = typeof n == "function" ? new n().encode(_e).byteLength : _e.length)), typeof le == "number" && le > S)
          throw new ee(
            "maxContentLength size of " + S + " exceeded",
            ee.ERR_BAD_RESPONSE,
            y,
            te
          );
      }
      return !Ie && de && de(), await new Promise((le, be) => {
        jf(le, be, {
          data: _e,
          headers: Je.from(ye.headers),
          status: ye.status,
          statusText: ye.statusText,
          config: y,
          request: te
        });
      });
    } catch (ie) {
      if (de && de(), G && G.aborted && G.reason instanceof ee) {
        const ve = G.reason;
        throw ve.config = y, te && (ve.request = te), ie !== ve && (ve.cause = ie), ve;
      }
      throw ie && ie.name === "TypeError" && /Load failed|fetch/i.test(ie.message) ? Object.assign(
        new ee(
          "Network Error",
          ee.ERR_NETWORK,
          y,
          te,
          ie && ie.response
        ),
        {
          cause: ie.cause || ie
        }
      ) : ee.from(ie, ie && ie.code, y, te, ie && ie.response);
    }
  };
}, vP = /* @__PURE__ */ new Map(), Hf = (e) => {
  let t = e && e.env || {};
  const { fetch: r, Request: n, Response: a } = t, o = [n, a, r];
  let s = o.length, i = s, u, l, c = vP;
  for (; i--; )
    u = o[i], l = c.get(u), l === void 0 && c.set(u, l = i ? /* @__PURE__ */ new Map() : gP(t)), c = l;
  return l;
};
Hf();
const Zi = {
  http: LC,
  xhr: dP,
  fetch: {
    get: Hf
  }
};
L.forEach(Zi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const vc = (e) => `- ${e}`, bP = (e) => L.isFunction(e) || e === null || e === !1;
function wP(e, t) {
  e = L.isArray(e) ? e : [e];
  const { length: r } = e;
  let n, a;
  const o = {};
  for (let s = 0; s < r; s++) {
    n = e[s];
    let i;
    if (a = n, !bP(n) && (a = Zi[(i = String(n)).toLowerCase()], a === void 0))
      throw new ee(`Unknown adapter '${i}'`);
    if (a && (L.isFunction(a) || (a = a.get(t))))
      break;
    o[i || "#" + s] = a;
  }
  if (!a) {
    const s = Object.entries(o).map(
      ([u, l]) => `adapter ${u} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = r ? s.length > 1 ? `since :
` + s.map(vc).join(`
`) : " " + vc(s[0]) : "as no adapter specified";
    throw new ee(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return a;
}
const zf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: wP,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Zi
};
function vs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new In(null, e);
}
function bc(e) {
  return vs(e), e.headers = Je.from(e.headers), e.data = gs.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), zf.getAdapter(e.adapter || Bn.adapter, e)(e).then(
    function(n) {
      vs(e), e.response = n;
      try {
        n.data = gs.call(e, e.transformResponse, n);
      } finally {
        delete e.response;
      }
      return n.headers = Je.from(n.headers), n;
    },
    function(n) {
      if (!Nf(n) && (vs(e), n && n.response)) {
        e.response = n.response;
        try {
          n.response.data = gs.call(
            e,
            e.transformResponse,
            n.response
          );
        } finally {
          delete e.response;
        }
        n.response.headers = Je.from(n.response.headers);
      }
      return Promise.reject(n);
    }
  );
}
const Ya = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ya[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const wc = {};
Ya.transitional = function(t, r, n) {
  function a(o, s) {
    return "[Axios v" + Qi + "] Transitional option '" + o + "'" + s + (n ? ". " + n : "");
  }
  return (o, s, i) => {
    if (t === !1)
      throw new ee(
        a(s, " has been removed" + (r ? " in " + r : "")),
        ee.ERR_DEPRECATED
      );
    return r && !wc[s] && (wc[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, s, i) : !0;
  };
};
Ya.spelling = function(t) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function xP(e, t, r) {
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
const ia = {
  assertOptions: xP,
  validators: Ya
}, pt = ia.validators;
let gr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new dc(),
      response: new dc()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = xr(this.defaults, r);
    const { transitional: n, paramsSerializer: a, headers: o } = r;
    n !== void 0 && ia.assertOptions(
      n,
      {
        silentJSONParsing: pt.transitional(pt.boolean),
        forcedJSONParsing: pt.transitional(pt.boolean),
        clarifyTimeoutError: pt.transitional(pt.boolean),
        legacyInterceptorReqResOrdering: pt.transitional(pt.boolean)
      },
      !1
    ), a != null && (L.isFunction(a) ? r.paramsSerializer = {
      serialize: a
    } : ia.assertOptions(
      a,
      {
        encode: pt.function,
        serialize: pt.function
      },
      !0
    )), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), ia.assertOptions(
      r,
      {
        baseUrl: pt.spelling("baseURL"),
        withXsrfToken: pt.spelling("withXSRFToken")
      },
      !0
    ), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let s = o && L.merge(o.common, o[r.method]);
    o && L.forEach(["delete", "get", "head", "post", "put", "patch", "query", "common"], (p) => {
      delete o[p];
    }), r.headers = Je.concat(s, o);
    const i = [];
    let u = !0;
    this.interceptors.request.forEach(function(h) {
      if (typeof h.runWhen == "function" && h.runWhen(r) === !1)
        return;
      u = u && h.synchronous;
      const f = r.transitional || Yi;
      f && f.legacyInterceptorReqResOrdering ? i.unshift(h.fulfilled, h.rejected) : i.push(h.fulfilled, h.rejected);
    });
    const l = [];
    this.interceptors.response.forEach(function(h) {
      l.push(h.fulfilled, h.rejected);
    });
    let c, d = 0, m;
    if (!u) {
      const p = [bc.bind(this), void 0];
      for (p.unshift(...i), p.push(...l), m = p.length, c = Promise.resolve(r); d < m; )
        c = c.then(p[d++], p[d++]);
      return c;
    }
    m = i.length;
    let v = r;
    for (; d < m; ) {
      const p = i[d++], h = i[d++];
      try {
        v = p(v);
      } catch (f) {
        h.call(this, f);
        break;
      }
    }
    try {
      c = bc.call(this, v);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, m = l.length; d < m; )
      c = c.then(l[d++], l[d++]);
    return c;
  }
  getUri(t) {
    t = xr(this.defaults, t);
    const r = Vf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Lf(r, t.params, t.paramsSerializer);
  }
};
L.forEach(["delete", "get", "head", "options"], function(t) {
  gr.prototype[t] = function(r, n) {
    return this.request(
      xr(n || {}, {
        method: t,
        url: r,
        data: (n || {}).data
      })
    );
  };
});
L.forEach(["post", "put", "patch", "query"], function(t) {
  function r(n) {
    return function(o, s, i) {
      return this.request(
        xr(i || {}, {
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
  gr.prototype[t] = r(), t !== "query" && (gr.prototype[t + "Form"] = r(!0));
});
let SP = class Wf {
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
      n.reason || (n.reason = new In(o, s, i), r(n.reason));
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
      token: new Wf(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function EP(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function CP(e) {
  return L.isObject(e) && e.isAxiosError === !0;
}
const ei = {
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
Object.entries(ei).forEach(([e, t]) => {
  ei[t] = e;
});
function Kf(e) {
  const t = new gr(e), r = Of(gr.prototype.request, t);
  return L.extend(r, gr.prototype, t, { allOwnKeys: !0 }), L.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(a) {
    return Kf(xr(e, a));
  }, r;
}
const Te = Kf(Bn);
Te.Axios = gr;
Te.CanceledError = In;
Te.CancelToken = SP;
Te.isCancel = Nf;
Te.VERSION = Qi;
Te.toFormData = Ja;
Te.AxiosError = ee;
Te.Cancel = Te.CanceledError;
Te.all = function(t) {
  return Promise.all(t);
};
Te.spread = EP;
Te.isAxiosError = CP;
Te.mergeConfig = xr;
Te.AxiosHeaders = Je;
Te.formToJSON = (e) => Mf(L.isHTMLForm(e) ? new FormData(e) : e);
Te.getAdapter = zf.getAdapter;
Te.HttpStatusCode = ei;
Te.default = Te;
const {
  Axios: L$,
  AxiosError: M$,
  CanceledError: N$,
  isCancel: Gf,
  CancelToken: j$,
  VERSION: V$,
  all: U$,
  Cancel: H$,
  isAxiosError: Jf,
  spread: z$,
  toFormData: W$,
  AxiosHeaders: K$,
  HttpStatusCode: G$,
  formToJSON: J$,
  getAdapter: Y$,
  mergeConfig: PP,
  create: X$
} = Te;
var OP = class {
  constructor(e) {
    this.config = {}, this.defaults = e;
  }
  extend(e) {
    return e && (this.defaults = { ...this.defaults, ...e }), this;
  }
  replace(e) {
    this.config = e;
  }
  get(e) {
    return mf(this.config, e) ? at(this.config, e) : at(this.defaults, e);
  }
  set(e, t) {
    typeof e == "string" ? ht(this.config, e, t) : Object.entries(e).forEach(([r, n]) => {
      ht(this.config, r, n);
    });
  }
}, lr = new OP({
  form: {
    recentlySuccessfulDuration: 2e3,
    forceIndicesArrayFormatInFormData: !0,
    withAllErrors: !1
  },
  future: {
    preserveEqualProps: !1,
    useDataInertiaHeadAttribute: !1,
    useDialogForErrorModal: !1,
    useScriptElementForInitialPage: !1
  },
  prefetch: {
    cacheFor: 3e4,
    hoverDelay: 75
  }
});
function xn(e, t) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => e.apply(this, n), t);
  };
}
function ct(e, t) {
  return document.dispatchEvent(new CustomEvent(`inertia:${e}`, t));
}
var xc = (e) => ct("before", { cancelable: !0, detail: { visit: e } }), AP = (e) => ct("error", { detail: { errors: e } }), kP = (e) => ct("exception", { cancelable: !0, detail: { exception: e } }), TP = (e) => ct("finish", { detail: { visit: e } }), $P = (e) => ct("invalid", { cancelable: !0, detail: { response: e } }), DP = (e) => ct("beforeUpdate", { detail: { page: e } }), fn = (e) => ct("navigate", { detail: { page: e } }), RP = (e) => ct("progress", { detail: { progress: e } }), FP = (e) => ct("start", { detail: { visit: e } }), _P = (e) => ct("success", { detail: { page: e } }), qP = (e, t) => ct("prefetched", { detail: { fetchedAt: Date.now(), response: e.data, visit: t } }), BP = (e) => ct("prefetching", { detail: { visit: e } }), Ea = (e) => ct("flash", { detail: { flash: e } }), Ke = class {
  static set(e, t) {
    typeof window < "u" && window.sessionStorage.setItem(e, JSON.stringify(t));
  }
  static get(e) {
    if (typeof window < "u")
      return JSON.parse(window.sessionStorage.getItem(e) || "null");
  }
  static merge(e, t) {
    const r = this.get(e);
    r === null ? this.set(e, t) : this.set(e, { ...r, ...t });
  }
  static remove(e) {
    typeof window < "u" && window.sessionStorage.removeItem(e);
  }
  static removeNested(e, t) {
    const r = this.get(e);
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
Ke.locationVisitKey = "inertiaLocationVisit";
var IP = async (e) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  const t = Yf(), r = await Xf(), n = await UP(r);
  if (!n)
    throw new Error("Unable to encrypt history");
  return await MP(t, n, e);
}, Gr = {
  key: "historyKey",
  iv: "historyIv"
}, LP = async (e) => {
  const t = Yf(), r = await Xf();
  if (!r)
    throw new Error("Unable to decrypt history");
  return await NP(t, r, e);
}, MP = async (e, t, r) => {
  if (typeof window > "u")
    throw new Error("Unable to encrypt history");
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  const n = new TextEncoder(), a = JSON.stringify(r), o = new Uint8Array(a.length * 3), s = n.encodeInto(a, o);
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: e
    },
    t,
    o.subarray(0, s.written)
  );
}, NP = async (e, t, r) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Decryption is not supported in this environment. SSL is required."), Promise.resolve(r);
  const n = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: e
    },
    t,
    r
  );
  return JSON.parse(new TextDecoder().decode(n));
}, Yf = () => {
  const e = Ke.get(Gr.iv);
  if (e)
    return new Uint8Array(e);
  const t = window.crypto.getRandomValues(new Uint8Array(12));
  return Ke.set(Gr.iv, Array.from(t)), t;
}, jP = async () => typeof window.crypto.subtle > "u" ? (console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve(null)) : window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  !0,
  ["encrypt", "decrypt"]
), VP = async (e) => {
  if (typeof window.crypto.subtle > "u")
    return console.warn("Encryption is not supported in this environment. SSL is required."), Promise.resolve();
  const t = await window.crypto.subtle.exportKey("raw", e);
  Ke.set(Gr.key, Array.from(new Uint8Array(t)));
}, UP = async (e) => {
  if (e)
    return e;
  const t = await jP();
  return t ? (await VP(t), t) : null;
}, Xf = async () => {
  const e = Ke.get(Gr.key);
  return e ? await window.crypto.subtle.importKey(
    "raw",
    new Uint8Array(e),
    {
      name: "AES-GCM",
      length: 256
    },
    !0,
    ["encrypt", "decrypt"]
  ) : null;
}, Sc = (e) => {
  const t = {};
  for (const r of Object.keys(e))
    e[r] !== void 0 && (t[r] = e[r]);
  return t;
}, Qf = (e, t, r) => {
  if (e === t)
    return !0;
  for (const n in e)
    if (!r.includes(n) && e[n] !== t[n] && !HP(e[n], t[n]))
      return !1;
  for (const n in t)
    if (!r.includes(n) && !(n in e))
      return !1;
  return !0;
}, HP = (e, t) => {
  switch (typeof e) {
    case "object":
      return Qf(e, t, []);
    case "function":
      return e.toString() === t.toString();
    default:
      return e === t;
  }
}, zP = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
}, Ec = (e) => {
  if (typeof e == "number")
    return e;
  for (const [t, r] of Object.entries(zP))
    if (e.endsWith(t))
      return parseFloat(e) * r;
  return parseInt(e);
}, WP = class {
  constructor() {
    this.cached = [], this.inFlightRequests = [], this.removalTimers = [], this.currentUseId = null;
  }
  add(e, t, { cacheFor: r, cacheTags: n }) {
    if (this.findInFlight(e))
      return Promise.resolve();
    const o = this.findCached(e);
    if (!e.fresh && o && o.staleTimestamp > Date.now())
      return Promise.resolve();
    const [s, i] = this.extractStaleValues(r), u = new Promise((l, c) => {
      t({
        ...e,
        onCancel: () => {
          this.remove(e), e.onCancel(), c();
        },
        onError: (d) => {
          this.remove(e), e.onError(d), c();
        },
        onPrefetching(d) {
          e.onPrefetching(d);
        },
        onPrefetched(d, m) {
          e.onPrefetched(d, m);
        },
        onPrefetchResponse(d) {
          l(d);
        },
        onPrefetchError(d) {
          $t.removeFromInFlight(e), c(d);
        }
      });
    }).then((l) => {
      this.remove(e);
      const c = l.getPageResponse();
      Z.mergeOncePropsIntoResponse(c), this.cached.push({
        params: { ...e },
        staleTimestamp: Date.now() + s,
        expiresAt: Date.now() + i,
        response: u,
        singleUse: i === 0,
        timestamp: Date.now(),
        inFlight: !1,
        tags: Array.isArray(n) ? n : [n]
      });
      const d = this.getShortestOncePropTtl(c);
      return this.scheduleForRemoval(
        e,
        d ? Math.min(i, d) : i
      ), this.removeFromInFlight(e), l.handlePrefetch(), l;
    });
    return this.inFlightRequests.push({
      params: { ...e },
      response: u,
      staleTimestamp: null,
      inFlight: !0
    }), u;
  }
  removeAll() {
    this.cached = [], this.removalTimers.forEach((e) => {
      clearTimeout(e.timer);
    }), this.removalTimers = [];
  }
  removeByTags(e) {
    this.cached = this.cached.filter((t) => !t.tags.some((r) => e.includes(r)));
  }
  remove(e) {
    this.cached = this.cached.filter((t) => !this.paramsAreEqual(t.params, e)), this.clearTimer(e);
  }
  removeFromInFlight(e) {
    this.inFlightRequests = this.inFlightRequests.filter((t) => !this.paramsAreEqual(t.params, e));
  }
  extractStaleValues(e) {
    const [t, r] = this.cacheForToStaleAndExpires(e);
    return [Ec(t), Ec(r)];
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
    const t = this.removalTimers.find((r) => this.paramsAreEqual(r.params, e));
    t && (clearTimeout(t.timer), this.removalTimers = this.removalTimers.filter((r) => r !== t));
  }
  scheduleForRemoval(e, t) {
    if (!(typeof window > "u") && (this.clearTimer(e), t > 0)) {
      const r = window.setTimeout(() => this.remove(e), t);
      this.removalTimers.push({
        params: e,
        timer: r
      });
    }
  }
  get(e) {
    return this.findCached(e) || this.findInFlight(e);
  }
  use(e, t) {
    const r = `${t.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
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
  withoutPurposePrefetchHeader(e) {
    const t = Ve(e);
    return t.headers.Purpose === "prefetch" && delete t.headers.Purpose, t;
  }
  paramsAreEqual(e, t) {
    return Qf(
      this.withoutPurposePrefetchHeader(e),
      this.withoutPurposePrefetchHeader(t),
      [
        "showProgress",
        "replace",
        "prefetch",
        "preserveScroll",
        "preserveState",
        "onBefore",
        "onBeforeUpdate",
        "onStart",
        "onProgress",
        "onFinish",
        "onCancel",
        "onSuccess",
        "onError",
        "onFlash",
        "onPrefetched",
        "onCancelToken",
        "onPrefetching",
        "async",
        "viewTransition"
      ]
    );
  }
  updateCachedOncePropsFromCurrentPage() {
    this.cached.forEach((e) => {
      e.response.then((t) => {
        const r = t.getPageResponse();
        Z.mergeOncePropsIntoResponse(r, { force: !0 });
        for (const [s, i] of Object.entries(r.deferredProps ?? {})) {
          const u = i.filter((l) => r.props[l] === void 0);
          u.length > 0 ? r.deferredProps[s] = u : delete r.deferredProps[s];
        }
        const n = this.getShortestOncePropTtl(r);
        if (n === null)
          return;
        const a = e.expiresAt - Date.now(), o = Math.min(a, n);
        o > 0 ? this.scheduleForRemoval(e.params, o) : this.remove(e.params);
      });
    });
  }
  getShortestOncePropTtl(e) {
    const t = Object.values(e.onceProps ?? {}).map((r) => r.expiresAt).filter((r) => !!r);
    return t.length === 0 ? null : Math.min(...t) - Date.now();
  }
}, $t = new WP(), bs = (e) => {
  if (e.offsetParent === null)
    return !1;
  const t = e.getBoundingClientRect(), r = t.top < window.innerHeight && t.bottom >= 0, n = t.left < window.innerWidth && t.right >= 0;
  return r && n;
}, KP = (e) => {
  const t = (s) => {
    const i = window.getComputedStyle(s);
    return ["scroll", "overlay"].includes(i.overflowY) ? !0 : i.overflowY !== "auto" ? !1 : ["visible", "clip"].includes(i.overflowX) ? !0 : n(i.maxHeight, s.style.height) || a(s, "height");
  }, r = (s) => {
    const i = window.getComputedStyle(s);
    return ["scroll", "overlay"].includes(i.overflowX) ? !0 : i.overflowX !== "auto" ? !1 : ["visible", "clip"].includes(i.overflowY) ? !0 : n(i.maxWidth, s.style.width) || a(s, "width");
  }, n = (s, i) => !!(s && s !== "none" && s !== "0px" || i && i !== "auto" && i !== "0"), a = (s, i) => {
    const u = s.parentElement;
    if (!u)
      return !1;
    const l = window.getComputedStyle(u);
    if (["flex", "inline-flex"].includes(l.display)) {
      const c = ["column", "column-reverse"].includes(l.flexDirection);
      return i === "height" ? c : !c;
    }
    return ["grid", "inline-grid"].includes(l.display);
  };
  let o = e == null ? void 0 : e.parentElement;
  for (; o; ) {
    const s = t(o) || r(o);
    if (window.getComputedStyle(o).display !== "contents" && s)
      return o;
    o = o.parentElement;
  }
  return null;
}, Zf = (e, t) => {
  if (!t)
    return e.filter((o) => bs(o));
  const r = e.indexOf(t), n = [], a = [];
  for (let o = r; o >= 0; o--) {
    const s = e[o];
    if (bs(s))
      n.push(s);
    else
      break;
  }
  for (let o = r + 1; o < e.length; o++) {
    const s = e[o];
    if (bs(s))
      a.push(s);
    else
      break;
  }
  return [...n.reverse(), ...a];
}, pn = (e, t = 1) => {
  window.requestAnimationFrame(() => {
    t > 1 ? pn(e, t - 1) : e();
  });
}, un = typeof window > "u", GP = !un && /Firefox/i.test(window.navigator.userAgent), Xe = class {
  static save() {
    ce.saveScrollPositions(this.getScrollRegions());
  }
  static getScrollRegions() {
    return Array.from(this.regions()).map((e) => ({
      top: e.scrollTop,
      left: e.scrollLeft
    }));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static scrollToTop() {
    if (GP && getComputedStyle(document.documentElement).scrollBehavior === "smooth")
      return pn(() => window.scrollTo(0, 0), 2);
    window.scrollTo(0, 0);
  }
  static reset() {
    (un ? null : window.location.hash) || this.scrollToTop(), this.regions().forEach((t) => {
      typeof t.scrollTo == "function" ? t.scrollTo(0, 0) : (t.scrollTop = 0, t.scrollLeft = 0);
    }), this.save(), this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const e = un ? null : window.location.hash;
    e && setTimeout(() => {
      const t = document.getElementById(e.slice(1));
      t ? t.scrollIntoView() : this.scrollToTop();
    });
  }
  static restore(e) {
    un || window.requestAnimationFrame(() => {
      this.restoreDocument(), this.restoreScrollRegions(e);
    });
  }
  static restoreScrollRegions(e) {
    un || this.regions().forEach((t, r) => {
      const n = e[r];
      n && (typeof t.scrollTo == "function" ? t.scrollTo(n.left, n.top) : (t.scrollTop = n.top, t.scrollLeft = n.left));
    });
  }
  static restoreDocument() {
    const e = ce.getDocumentScrollPosition();
    window.scrollTo(e.left, e.top);
  }
  static onScroll(e) {
    const t = e.target;
    typeof t.hasAttribute == "function" && t.hasAttribute("scroll-region") && this.save();
  }
  static onWindowScroll() {
    ce.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
}, el = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0;
function ti(e) {
  return el(e) || e instanceof FormData && Array.from(e.values()).some((t) => ti(t)) || typeof e == "object" && e !== null && Object.values(e).some((t) => ti(t));
}
var ri = (e) => e instanceof FormData;
function ep(e, t = new FormData(), r = null, n = "brackets") {
  e = e || {};
  for (const a in e)
    Object.prototype.hasOwnProperty.call(e, a) && rp(t, tp(r, a, "indices"), e[a], n);
  return t;
}
function tp(e, t, r) {
  return e ? r === "brackets" ? `${e}[]` : `${e}[${t}]` : t;
}
function rp(e, t, r, n) {
  if (Array.isArray(r))
    return Array.from(r.keys()).forEach(
      (a) => rp(e, tp(t, a.toString(), n), r[a], n)
    );
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
  ep(r, e, t, n);
}
function mt(e) {
  return new URL(e.toString(), typeof window > "u" ? void 0 : window.location.toString());
}
var JP = (e, t, r, n, a) => {
  let o = typeof e == "string" ? mt(e) : e;
  if ((ti(t) || n) && !ri(t) && (lr.get("form.forceIndicesArrayFormatInFormData") && (a = "indices"), t = ep(t, new FormData(), null, a)), ri(t))
    return [o, t];
  const [s, i] = Xa(r, o, t, a);
  return [mt(s), i];
};
function Xa(e, t, r, n = "brackets") {
  const a = e === "get" && !ri(r) && Object.keys(r).length > 0, o = np(t.toString()), s = o || t.toString().startsWith("/") || t.toString() === "", i = !s && !t.toString().startsWith("#") && !t.toString().startsWith("?"), u = /^[.]{1,2}([/]|$)/.test(t.toString()), l = t.toString().includes("?") || a, c = t.toString().includes("#"), d = new URL(t.toString(), typeof window > "u" ? "http://localhost" : window.location.toString());
  if (a) {
    const m = /\[\d+\]/.test(decodeURIComponent(d.search)), v = { ignoreQueryPrefix: !0, allowSparse: !0 };
    d.search = sc.stringify(
      { ...sc.parse(d.search, v), ...r },
      {
        encodeValuesOnly: !0,
        arrayFormat: m ? "indices" : n
      }
    );
  }
  return [
    [
      o ? `${d.protocol}//${d.host}` : "",
      s ? d.pathname : "",
      i ? d.pathname.substring(u ? 0 : 1) : "",
      l ? d.search : "",
      c ? d.hash : ""
    ].join(""),
    a ? {} : r
  ];
}
function Ca(e) {
  return e = new URL(e.href), e.hash = "", e;
}
var Cc = (e, t) => {
  e.hash && !t.hash && Ca(e).href === t.href && (t.hash = e.hash);
}, Pa = (e, t) => Ca(e).href === Ca(t).href, YP = (e, t) => e.origin === t.origin && e.pathname === t.pathname;
function Ht(e) {
  return e !== null && typeof e == "object" && e !== void 0 && "url" in e && "method" in e;
}
function np(e) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(e);
}
function XP(e, t) {
  const r = typeof e == "string" ? mt(e) : e;
  return t ? `${r.protocol}//${r.host}${r.pathname}${r.search}${r.hash}` : `${r.pathname}${r.search}${r.hash}`;
}
var QP = class {
  constructor() {
    this.componentId = {}, this.listeners = [], this.isFirstPageLoad = !0, this.cleared = !1, this.pendingDeferredProps = null, this.historyQuotaExceeded = !1;
  }
  init({
    initialPage: e,
    swapComponent: t,
    resolveComponent: r,
    onFlash: n
  }) {
    return this.page = { ...e, flash: e.flash ?? {} }, this.swapComponent = t, this.resolveComponent = r, this.onFlashCallback = n, Dt.on("historyQuotaExceeded", () => {
      this.historyQuotaExceeded = !0;
    }), this;
  }
  set(e, {
    replace: t = !1,
    preserveScroll: r = !1,
    preserveState: n = !1,
    viewTransition: a = !1
  } = {}) {
    Object.keys(e.deferredProps || {}).length && (this.pendingDeferredProps = {
      deferredProps: e.deferredProps,
      component: e.component,
      url: e.url
    }, e.initialDeferredProps === void 0 && (e.initialDeferredProps = e.deferredProps)), this.componentId = {};
    const o = this.componentId;
    return e.clearHistory && ce.clear(), this.resolve(e.component).then((s) => {
      if (o !== this.componentId)
        return;
      e.rememberedState ?? (e.rememberedState = {});
      const i = typeof window > "u", u = i ? new URL(e.url) : window.location, l = !i && r ? Xe.getScrollRegions() : [];
      t = t || Pa(mt(e.url), u);
      const c = { ...e, flash: {} };
      return new Promise(
        (d) => t ? ce.replaceState(c, d) : ce.pushState(c, d)
      ).then(() => {
        const d = !this.isTheSame(e);
        if (!d && Object.keys(e.props.errors || {}).length > 0 && (a = !1), this.page = e, this.cleared = !1, this.hasOnceProps() && $t.updateCachedOncePropsFromCurrentPage(), d && this.fireEventsFor("newComponent"), this.isFirstPageLoad && this.fireEventsFor("firstLoad"), this.isFirstPageLoad = !1, this.historyQuotaExceeded) {
          this.historyQuotaExceeded = !1;
          return;
        }
        return this.swap({
          component: s,
          page: e,
          preserveState: n,
          viewTransition: a
        }).then(() => {
          r ? window.requestAnimationFrame(() => Xe.restoreScrollRegions(l)) : Xe.reset(), this.pendingDeferredProps && this.pendingDeferredProps.component === e.component && this.pendingDeferredProps.url === e.url && Dt.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps), this.pendingDeferredProps = null, t || fn(e);
        });
      });
    });
  }
  setQuietly(e, {
    preserveState: t = !1
  } = {}) {
    return this.resolve(e.component).then((r) => (this.page = e, this.cleared = !1, ce.setCurrent(e), this.swap({ component: r, page: e, preserveState: t, viewTransition: !1 })));
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
  getWithoutFlashData() {
    return { ...this.page, flash: {} };
  }
  hasOnceProps() {
    return Object.keys(this.page.onceProps ?? {}).length > 0;
  }
  merge(e) {
    this.page = { ...this.page, ...e };
  }
  setFlash(e) {
    var t;
    this.page = { ...this.page, flash: e }, (t = this.onFlashCallback) == null || t.call(this, e);
  }
  setUrlHash(e) {
    this.page.url.includes(e) || (this.page.url += e);
  }
  remember(e) {
    this.page.rememberedState = e;
  }
  swap({
    component: e,
    page: t,
    preserveState: r,
    viewTransition: n
  }) {
    const a = () => this.swapComponent({ component: e, page: t, preserveState: r });
    if (!n || !(document != null && document.startViewTransition) || document.visibilityState === "hidden")
      return a();
    const o = typeof n == "boolean" ? () => null : n;
    return new Promise((s) => {
      const i = document.startViewTransition(() => a().then(s));
      o(i);
    });
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
  mergeOncePropsIntoResponse(e, { force: t = !1 } = {}) {
    Object.entries(e.onceProps ?? {}).forEach(([r, n]) => {
      var o;
      const a = (o = this.page.onceProps) == null ? void 0 : o[r];
      a !== void 0 && (t || e.props[n.prop] === void 0) && (e.props[n.prop] = this.page.props[a.prop], e.onceProps[r].expiresAt = a.expiresAt);
    });
  }
}, Z = new QP(), Qa = class {
  constructor() {
    this.items = [], this.processingPromise = null;
  }
  add(e) {
    return this.items.push(e), this.process();
  }
  process() {
    return this.processingPromise ?? (this.processingPromise = this.processNext().finally(() => {
      this.processingPromise = null;
    })), this.processingPromise;
  }
  processNext() {
    const e = this.items.shift();
    return e ? Promise.resolve(e()).then(() => this.processNext()) : Promise.resolve();
  }
}, jr = typeof window > "u", an = new Qa(), Pc = !jr && /CriOS/.test(window.navigator.userAgent), ZP = class {
  constructor() {
    this.rememberedState = "rememberedState", this.scrollRegions = "scrollRegions", this.preserveUrl = !1, this.current = {}, this.initialState = null;
  }
  remember(e, t) {
    var r;
    this.replaceState({
      ...Z.getWithoutFlashData(),
      rememberedState: {
        ...((r = Z.get()) == null ? void 0 : r.rememberedState) ?? {},
        [t]: e
      }
    });
  }
  restore(e) {
    var t, r, n, a;
    if (!jr)
      return ((t = this.current[this.rememberedState]) == null ? void 0 : t[e]) !== void 0 ? (r = this.current[this.rememberedState]) == null ? void 0 : r[e] : (a = (n = this.initialState) == null ? void 0 : n[this.rememberedState]) == null ? void 0 : a[e];
  }
  pushState(e, t = null) {
    if (!jr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, an.add(() => this.getPageData(e).then((r) => {
        const n = () => this.doPushState({ page: r }, e.url).then(() => t == null ? void 0 : t());
        return Pc ? new Promise((a) => {
          setTimeout(() => n().then(a));
        }) : n();
      }));
    }
  }
  clonePageProps(e) {
    try {
      return structuredClone(e.props), e;
    } catch {
      return {
        ...e,
        props: Ve(e.props)
      };
    }
  }
  getPageData(e) {
    const t = this.clonePageProps(e);
    return new Promise((r) => e.encryptHistory ? IP(t).then(r) : r(t));
  }
  processQueue() {
    return an.process();
  }
  decrypt(e = null) {
    var r;
    if (jr)
      return Promise.resolve(e ?? Z.get());
    const t = e ?? ((r = window.history.state) == null ? void 0 : r.page);
    return this.decryptPageData(t).then((n) => {
      if (!n)
        throw new Error("Unable to decrypt history");
      return this.initialState === null ? this.initialState = n ?? void 0 : this.current = n ?? {}, n;
    });
  }
  decryptPageData(e) {
    return e instanceof ArrayBuffer ? LP(e) : Promise.resolve(e);
  }
  saveScrollPositions(e) {
    an.add(() => Promise.resolve().then(() => {
      var t;
      if ((t = window.history.state) != null && t.page && !or(this.getScrollRegions(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions: e
        });
    }));
  }
  saveDocumentScrollPosition(e) {
    an.add(() => Promise.resolve().then(() => {
      var t;
      if ((t = window.history.state) != null && t.page && !or(this.getDocumentScrollPosition(), e))
        return this.doReplaceState({
          page: window.history.state.page,
          documentScrollPosition: e
        });
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
    if (or(this.current, e)) {
      t && t();
      return;
    }
    const { flash: r, ...n } = e;
    if (Z.merge(n), !jr) {
      if (this.preserveUrl) {
        t && t();
        return;
      }
      this.current = e, an.add(() => this.getPageData(e).then((a) => {
        const o = () => this.doReplaceState({ page: a }, e.url).then(() => t == null ? void 0 : t());
        return Pc ? new Promise((s) => {
          setTimeout(() => o().then(s));
        }) : o();
      }));
    }
  }
  isHistoryThrottleError(e) {
    return e instanceof Error && e.name === "SecurityError" && (e.message.includes("history.pushState") || e.message.includes("history.replaceState"));
  }
  isQuotaExceededError(e) {
    return e instanceof Error && e.name === "QuotaExceededError";
  }
  withThrottleProtection(e) {
    return Promise.resolve().then(() => {
      try {
        return e();
      } catch (t) {
        if (!this.isHistoryThrottleError(t))
          throw t;
        console.error(t.message);
      }
    });
  }
  doReplaceState(e, t) {
    return this.withThrottleProtection(() => {
      var r, n;
      window.history.replaceState(
        {
          ...e,
          scrollRegions: e.scrollRegions ?? ((r = window.history.state) == null ? void 0 : r.scrollRegions),
          documentScrollPosition: e.documentScrollPosition ?? ((n = window.history.state) == null ? void 0 : n.documentScrollPosition)
        },
        "",
        t
      );
    });
  }
  doPushState(e, t) {
    return this.withThrottleProtection(() => {
      try {
        window.history.pushState(e, "", t);
      } catch (r) {
        if (!this.isQuotaExceededError(r))
          throw r;
        Dt.fireInternalEvent("historyQuotaExceeded", t);
      }
    });
  }
  getState(e, t) {
    var r;
    return ((r = this.current) == null ? void 0 : r[e]) ?? t;
  }
  deleteState(e) {
    this.current[e] !== void 0 && (delete this.current[e], this.replaceState(this.current));
  }
  clearInitialState(e) {
    this.initialState && this.initialState[e] !== void 0 && delete this.initialState[e];
  }
  browserHasHistoryEntry() {
    var e;
    return !jr && !!((e = window.history.state) != null && e.page);
  }
  clear() {
    Ke.remove(Gr.key), Ke.remove(Gr.iv);
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
var ce = new ZP(), eO = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    typeof window < "u" && (window.addEventListener("popstate", this.handlePopstateEvent.bind(this)), window.addEventListener("pageshow", this.handlePageshowEvent.bind(this)), window.addEventListener("scroll", xn(Xe.onWindowScroll.bind(Xe), 100), !0)), typeof document < "u" && document.addEventListener("scroll", xn(Xe.onScroll.bind(Xe), 100), !0);
  }
  onGlobalEvent(e, t) {
    const r = ((n) => {
      const a = t(n);
      n.cancelable && !n.defaultPrevented && a === !1 && n.preventDefault();
    });
    return this.registerListener(`inertia:${e}`, r);
  }
  on(e, t) {
    return this.internalListeners.push({ event: e, listener: t }), () => {
      this.internalListeners = this.internalListeners.filter((r) => r.listener !== t);
    };
  }
  onMissingHistoryItem() {
    Z.clear(), this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(e, ...t) {
    this.internalListeners.filter((r) => r.event === e).forEach((r) => r.listener(...t));
  }
  registerListener(e, t) {
    return document.addEventListener(e, t), () => document.removeEventListener(e, t);
  }
  // bfcache restores pages without firing `popstate`, so we use `pageshow` to
  // re-validate encrypted history entries after `clearHistory` removed the keys.
  // https://web.dev/articles/bfcache
  handlePageshowEvent(e) {
    e.persisted && ce.decrypt().catch(() => this.onMissingHistoryItem());
  }
  handlePopstateEvent(e) {
    const t = e.state || null;
    if (t === null) {
      const r = mt(Z.get().url);
      r.hash = window.location.hash, ce.replaceState({ ...Z.getWithoutFlashData(), url: r.href }), Xe.reset();
      return;
    }
    if (!ce.isValidState(t))
      return this.onMissingHistoryItem();
    ce.decrypt(t.page).then((r) => {
      if (Z.get().version !== r.version) {
        this.onMissingHistoryItem();
        return;
      }
      ke.cancelAll({ prefetch: !1 }), Z.setQuietly(r, { preserveState: !1 }).then(() => {
        Xe.restore(ce.getScrollRegions()), fn(Z.get());
        const n = {}, a = Z.get().props;
        for (const [o, s] of Object.entries(r.initialDeferredProps ?? r.deferredProps ?? {})) {
          const i = s.filter((u) => a[u] === void 0);
          i.length > 0 && (n[o] = i);
        }
        Object.keys(n).length > 0 && this.fireInternalEvent("loadDeferredProps", n);
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
}, Dt = new eO(), tO = class {
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
}, ws = new tO(), rO = class {
  static handle() {
    this.clearRememberedStateOnReload(), [this.handleBackForward, this.handleLocation, this.handleDefault].find((t) => t.bind(this)());
  }
  static clearRememberedStateOnReload() {
    ws.isReload() && (ce.deleteState(ce.rememberedState), ce.clearInitialState(ce.rememberedState));
  }
  static handleBackForward() {
    if (!ws.isBackForward() || !ce.browserHasHistoryEntry())
      return !1;
    const e = ce.getScrollRegions();
    return ce.decrypt().then((t) => {
      Z.set(t, { preserveScroll: !0, preserveState: !0 }).then(() => {
        Xe.restore(e), fn(Z.get());
      });
    }).catch(() => {
      Dt.onMissingHistoryItem();
    }), !0;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!Ke.exists(Ke.locationVisitKey))
      return !1;
    const e = Ke.get(Ke.locationVisitKey) || {};
    return Ke.remove(Ke.locationVisitKey), typeof window < "u" && Z.setUrlHash(window.location.hash), ce.decrypt(Z.get()).then(() => {
      const t = ce.getState(ce.rememberedState, {}), r = ce.getScrollRegions();
      Z.remember(t), Z.set(Z.get(), {
        preserveScroll: e.preserveScroll,
        preserveState: !0
      }).then(() => {
        e.preserveScroll && Xe.restore(r), fn(Z.get());
      });
    }).catch(() => {
      Dt.onMissingHistoryItem();
    }), !0;
  }
  static handleDefault() {
    typeof window < "u" && Z.setUrlHash(window.location.hash), Z.set(Z.get(), { preserveScroll: !0, preserveState: !0 }).then(() => {
      ws.isReload() ? Xe.restore(ce.getScrollRegions()) : Xe.scrollToAnchor();
      const e = Z.get();
      fn(e);
      const t = e.flash;
      Object.keys(t).length > 0 && queueMicrotask(() => Ea(t));
    });
  }
}, nO = class {
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
}, aO = class {
  constructor() {
    this.polls = [], this.setupVisibilityListener();
  }
  add(e, t, r) {
    const n = new nO(e, t, r);
    return this.polls.push(n), {
      stop: () => n.stop(),
      start: () => n.start()
    };
  }
  clear() {
    this.polls.forEach((e) => e.stop()), this.polls = [];
  }
  setupVisibilityListener() {
    typeof document > "u" || document.addEventListener(
      "visibilitychange",
      () => {
        this.polls.forEach((e) => e.isInBackground(document.hidden));
      },
      !1
    );
  }
}, oO = new aO(), ni = class la {
  constructor(t) {
    if (this.callbacks = [], !t.prefetch)
      this.params = t;
    else {
      const r = {
        onBefore: this.wrapCallback(t, "onBefore"),
        onBeforeUpdate: this.wrapCallback(t, "onBeforeUpdate"),
        onStart: this.wrapCallback(t, "onStart"),
        onProgress: this.wrapCallback(t, "onProgress"),
        onFinish: this.wrapCallback(t, "onFinish"),
        onCancel: this.wrapCallback(t, "onCancel"),
        onSuccess: this.wrapCallback(t, "onSuccess"),
        onError: this.wrapCallback(t, "onError"),
        onFlash: this.wrapCallback(t, "onFlash"),
        onCancelToken: this.wrapCallback(t, "onCancelToken"),
        onPrefetched: this.wrapCallback(t, "onPrefetched"),
        onPrefetching: this.wrapCallback(t, "onPrefetching")
      };
      this.params = {
        ...t,
        ...r,
        onPrefetchResponse: t.onPrefetchResponse || (() => {
        }),
        onPrefetchError: t.onPrefetchError || (() => {
        })
      };
    }
  }
  static create(t) {
    return new la(t);
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
  isPrefetch() {
    return this.params.prefetch === !0;
  }
  isDeferredPropsRequest() {
    return this.params.deferredProps === !0;
  }
  onCancelToken(t) {
    this.params.onCancelToken({
      cancel: t
    });
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
  onPrefetchError(t) {
    this.params.onPrefetchError && this.params.onPrefetchError(t);
  }
  all() {
    return this.params;
  }
  headers() {
    const t = {
      ...this.params.headers
    };
    this.isPartial() && (t["X-Inertia-Partial-Component"] = Z.get().component);
    const r = this.params.only.concat(this.params.reset);
    return r.length > 0 && (t["X-Inertia-Partial-Data"] = r.join(",")), this.params.except.length > 0 && (t["X-Inertia-Partial-Except"] = this.params.except.join(",")), this.params.reset.length > 0 && (t["X-Inertia-Reset"] = this.params.reset.join(",")), this.params.errorBag && this.params.errorBag.length > 0 && (t["X-Inertia-Error-Bag"] = this.params.errorBag), t;
  }
  setPreserveOptions(t) {
    this.params.preserveScroll = la.resolvePreserveOption(this.params.preserveScroll, t), this.params.preserveState = la.resolvePreserveOption(this.params.preserveState, t);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name: t, args: r }) => {
      this.params[t](...r);
    });
  }
  merge(t) {
    this.params = {
      ...this.params,
      ...t
    };
  }
  wrapCallback(t, r) {
    return (...n) => {
      this.recordCallback(r, n), t[r](...n);
    };
  }
  recordCallback(t, r) {
    this.callbacks.push({ name: t, args: r });
  }
  static resolvePreserveOption(t, r) {
    return typeof t == "function" ? t(r) : t === "errors" ? Object.keys(r.props.errors || {}).length > 0 : t;
  }
}, ap = {
  modal: null,
  listener: null,
  createIframeAndPage(e) {
    typeof e == "object" && (e = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(
      e
    )}`);
    const t = document.createElement("html");
    t.innerHTML = e, t.querySelectorAll("a").forEach((n) => n.setAttribute("target", "_top"));
    const r = document.createElement("iframe");
    return r.style.backgroundColor = "white", r.style.borderRadius = "5px", r.style.width = "100%", r.style.height = "100%", r.setAttribute("sandbox", "allow-scripts"), { iframe: r, page: t };
  },
  show(e) {
    const { iframe: t, page: r } = this.createIframeAndPage(e);
    this.modal = document.createElement("div"), this.modal.style.position = "fixed", this.modal.style.width = "100vw", this.modal.style.height = "100vh", this.modal.style.padding = "50px", this.modal.style.boxSizing = "border-box", this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)", this.modal.style.zIndex = 2e5, this.modal.addEventListener("click", () => this.hide()), this.modal.appendChild(t), document.body.prepend(this.modal), document.body.style.overflow = "hidden", t.srcdoc = r.outerHTML, this.listener = this.hideOnEscape.bind(this), document.addEventListener("keydown", this.listener);
  },
  hide() {
    this.modal.outerHTML = "", this.modal = null, document.body.style.overflow = "visible", document.removeEventListener("keydown", this.listener);
  },
  hideOnEscape(e) {
    e.keyCode === 27 && this.hide();
  }
}, sO = {
  show(e) {
    const { iframe: t, page: r } = ap.createIframeAndPage(e);
    t.style.boxSizing = "border-box", t.style.display = "block";
    const n = document.createElement("dialog");
    n.id = "inertia-error-dialog", Object.assign(n.style, {
      width: "calc(100vw - 100px)",
      height: "calc(100vh - 100px)",
      padding: "0",
      margin: "auto",
      border: "none",
      backgroundColor: "transparent"
    });
    const a = document.createElement("style");
    a.textContent = `
      dialog#inertia-error-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
      }

      dialog#inertia-error-dialog:focus {
        outline: none;
      }
    `, document.head.appendChild(a), n.addEventListener("click", (o) => {
      o.target === n && n.close();
    }), n.addEventListener("close", () => {
      a.remove(), n.remove();
    }), n.appendChild(t), document.body.prepend(n), n.showModal(), n.focus(), t.srcdoc = r.outerHTML;
  }
}, iO = new Qa(), Oc = class op {
  constructor(t, r, n) {
    this.requestParams = t, this.response = r, this.originatingPage = n, this.wasPrefetched = !1;
  }
  static create(t, r, n) {
    return new op(t, r, n);
  }
  async handlePrefetch() {
    Pa(this.requestParams.all().url, window.location) && this.handle();
  }
  async handle() {
    return iO.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch)
      return this.wasPrefetched = !0, this.requestParams.all().prefetch = !1, this.requestParams.all().onPrefetched(this.response, this.requestParams.all()), qP(this.response, this.requestParams.all()), Promise.resolve();
    if (this.requestParams.runCallbacks(), !this.isInertiaResponse())
      return this.handleNonInertiaResponse();
    await ce.processQueue(), ce.preserveUrl = this.requestParams.all().preserveUrl, await this.setPage();
    const t = Z.get().props.errors || {};
    if (Object.keys(t).length > 0) {
      const n = this.getScopedErrors(t);
      return AP(n), this.requestParams.all().onError(n);
    }
    ke.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []), this.wasPrefetched || ke.flush(Z.get().url);
    const { flash: r } = Z.get();
    Object.keys(r).length > 0 && !this.requestParams.isDeferredPropsRequest() && (Ea(r), this.requestParams.all().onFlash(r)), _P(Z.get()), await this.requestParams.all().onSuccess(Z.get()), ce.preserveUrl = !1;
  }
  mergeParams(t) {
    this.requestParams.merge(t);
  }
  getPageResponse() {
    const t = this.getDataFromResponse(this.response.data);
    return typeof t == "object" ? this.response.data = { ...t, flash: t.flash ?? {} } : this.response.data = t;
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      const r = mt(this.getHeader("x-inertia-location"));
      return Cc(this.requestParams.all().url, r), this.locationVisit(r);
    }
    const t = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if ($P(t))
      return lr.get("future.useDialogForErrorModal") ? sO.show(t.data) : ap.show(t.data);
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
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  locationVisit(t) {
    try {
      if (Ke.set(Ke.locationVisitKey, {
        preserveScroll: this.requestParams.all().preserveScroll === !0
      }), typeof window > "u")
        return;
      Pa(window.location, t) ? window.location.reload() : window.location.href = t.href;
    } catch {
      return !1;
    }
  }
  async setPage() {
    const t = this.getPageResponse();
    return this.shouldSetPage(t) ? (this.mergeProps(t), Z.mergeOncePropsIntoResponse(t), this.preserveEqualProps(t), await this.setRememberedState(t), this.requestParams.setPreserveOptions(t), t.url = ce.preserveUrl ? Z.get().url : this.pageUrl(t), this.requestParams.all().onBeforeUpdate(t), DP(t), Z.set(t, {
      replace: this.requestParams.all().replace,
      preserveScroll: this.requestParams.all().preserveScroll,
      preserveState: this.requestParams.all().preserveState,
      viewTransition: this.requestParams.all().viewTransition
    })) : Promise.resolve();
  }
  getDataFromResponse(t) {
    if (typeof t != "string")
      return t;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  shouldSetPage(t) {
    if (!this.requestParams.all().async || this.originatingPage.component !== t.component)
      return !0;
    if (this.originatingPage.component !== Z.get().component)
      return !1;
    const r = mt(this.originatingPage.url), n = mt(Z.get().url);
    return r.origin === n.origin && r.pathname === n.pathname;
  }
  pageUrl(t) {
    const r = mt(t.url);
    return Cc(this.requestParams.all().url, r), r.pathname + r.search + r.hash;
  }
  preserveEqualProps(t) {
    if (t.component !== Z.get().component || lr.get("future.preserveEqualProps") !== !0)
      return;
    const r = Z.get().props;
    Object.entries(t.props).forEach(([n, a]) => {
      or(a, r[n]) && (t.props[n] = r[n]);
    });
  }
  mergeProps(t) {
    if (!this.requestParams.isPartial() || t.component !== Z.get().component)
      return;
    const r = t.mergeProps || [], n = t.prependProps || [], a = t.deepMergeProps || [], o = t.matchPropsOn || [], s = (u, l) => {
      const c = at(Z.get().props, u), d = at(t.props, u);
      if (Array.isArray(d)) {
        const m = this.mergeOrMatchItems(
          c || [],
          d,
          u,
          o,
          l
        );
        ht(t.props, u, m);
      } else if (typeof d == "object" && d !== null) {
        const m = {
          ...c || {},
          ...d
        };
        ht(t.props, u, m);
      }
    };
    if (r.forEach((u) => s(u, !0)), n.forEach((u) => s(u, !1)), a.forEach((u) => {
      const l = Z.get().props[u], c = t.props[u], d = (m, v, p) => Array.isArray(v) ? this.mergeOrMatchItems(m, v, p, o) : typeof v == "object" && v !== null ? Object.keys(v).reduce(
        (h, f) => (h[f] = d(m ? m[f] : void 0, v[f], `${p}.${f}`), h),
        { ...m }
      ) : v;
      t.props[u] = d(l, c, u);
    }), t.props = { ...Z.get().props, ...t.props }, this.requestParams.isDeferredPropsRequest()) {
      const u = Z.get().props.errors;
      u && Object.keys(u).length > 0 && (t.props.errors = u);
    }
    Z.get().scrollProps && (t.scrollProps = {
      ...Z.get().scrollProps || {},
      ...t.scrollProps || {}
    }), Z.hasOnceProps() && (t.onceProps = {
      ...Z.get().onceProps || {},
      ...t.onceProps || {}
    }), this.requestParams.isDeferredPropsRequest() && (t.flash = { ...Z.get().flash });
    const i = Z.get().initialDeferredProps;
    i && Object.keys(i).length > 0 && (t.initialDeferredProps = i);
  }
  mergeOrMatchItems(t, r, n, a, o = !0) {
    const s = Array.isArray(t) ? t : [], i = a.find((c) => c.split(".").slice(0, -1).join(".") === n);
    if (!i)
      return o ? [...s, ...r] : [...r, ...s];
    const u = i.split(".").pop() || "", l = /* @__PURE__ */ new Map();
    return r.forEach((c) => {
      this.hasUniqueProperty(c, u) && l.set(c[u], c);
    }), o ? this.appendWithMatching(s, r, l, u) : this.prependWithMatching(s, r, l, u);
  }
  appendWithMatching(t, r, n, a) {
    const o = t.map((i) => this.hasUniqueProperty(i, a) && n.has(i[a]) ? n.get(i[a]) : i), s = r.filter((i) => this.hasUniqueProperty(i, a) ? !t.some(
      (u) => this.hasUniqueProperty(u, a) && u[a] === i[a]
    ) : !0);
    return [...o, ...s];
  }
  prependWithMatching(t, r, n, a) {
    const o = t.filter((s) => this.hasUniqueProperty(s, a) ? !n.has(s[a]) : !0);
    return [...r, ...o];
  }
  hasUniqueProperty(t, r) {
    return t && typeof t == "object" && r in t;
  }
  async setRememberedState(t) {
    const r = await ce.getState(ce.rememberedState, {});
    this.requestParams.all().preserveState && r && t.component === Z.get().component && (t.rememberedState = r);
  }
  getScopedErrors(t) {
    return this.requestParams.all().errorBag ? t[this.requestParams.all().errorBag || ""] || {} : t;
  }
}, Ac = class sp {
  constructor(t, r) {
    this.page = r, this.requestHasFinished = !1, this.requestParams = ni.create(t), this.cancelToken = new AbortController();
  }
  static create(t, r) {
    return new sp(t, r);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: !0 })), FP(this.requestParams.all()), this.requestParams.onStart(), this.requestParams.all().prefetch && (this.requestParams.onPrefetching(), BP(this.requestParams.all()));
    const t = this.requestParams.all().prefetch;
    return Te({
      method: this.requestParams.all().method,
      url: Ca(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((r) => (this.response = Oc.create(this.requestParams, r, this.page), this.response.handle())).catch((r) => r != null && r.response ? (this.response = Oc.create(this.requestParams, r.response, this.page), this.response.handle()) : Promise.reject(r)).catch((r) => {
      if (!Te.isCancel(r) && kP(r))
        return t && this.requestParams.onPrefetchError(r), Promise.reject(r);
    }).finally(() => {
      this.finish(), t && this.response && this.requestParams.onPrefetchResponse(this.response);
    });
  }
  finish() {
    this.requestParams.wasCancelledAtAll() || (this.requestParams.markAsFinished(), this.fireFinishEvents());
  }
  fireFinishEvents() {
    this.requestHasFinished || (this.requestHasFinished = !0, TP(this.requestParams.all()), this.requestParams.onFinish());
  }
  cancel({ cancelled: t = !1, interrupted: r = !1 }) {
    this.requestHasFinished || (this.cancelToken.abort(), this.requestParams.markAsCancelled({ cancelled: t, interrupted: r }), this.fireFinishEvents());
  }
  onProgress(t) {
    this.requestParams.data() instanceof FormData && (t.percentage = t.progress ? Math.round(t.progress * 100) : 0, RP(t), this.requestParams.all().onProgress(t));
  }
  getHeaders() {
    const t = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": !0
    }, r = Z.get();
    r.version && (t["X-Inertia-Version"] = r.version);
    const n = Object.entries(r.onceProps || {}).filter(([, a]) => r.props[a.prop] === void 0 ? !1 : !a.expiresAt || a.expiresAt > Date.now()).map(([a]) => a);
    return n.length > 0 && (t["X-Inertia-Except-Once-Props"] = n.join(",")), t;
  }
}, kc = class {
  constructor({ maxConcurrent: e, interruptible: t }) {
    this.requests = [], this.maxConcurrent = e, this.interruptible = t;
  }
  send(e) {
    this.requests.push(e), e.send().finally(() => {
      this.requests = this.requests.filter((t) => t !== e);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: !0 }, !1);
  }
  cancelInFlight({ prefetch: e = !0 } = {}) {
    this.requests.filter((t) => e || !t.isPrefetch()).forEach((t) => t.cancel({ cancelled: !0 }));
  }
  cancel({ cancelled: e = !1, interrupted: t = !1 } = {}, r = !1) {
    if (!r && !this.shouldCancel())
      return;
    const n = this.requests.shift();
    n == null || n.cancel({ cancelled: e, interrupted: t });
  }
  shouldCancel() {
    return this.interruptible && this.requests.length >= this.maxConcurrent;
  }
}, lO = class {
  constructor() {
    this.syncRequestStream = new kc({
      maxConcurrent: 1,
      interruptible: !0
    }), this.asyncRequestStream = new kc({
      maxConcurrent: 1 / 0,
      interruptible: !1
    }), this.clientVisitQueue = new Qa();
  }
  init({
    initialPage: e,
    resolveComponent: t,
    swapComponent: r,
    onFlash: n
  }) {
    Z.init({
      initialPage: e,
      resolveComponent: t,
      swapComponent: r,
      onFlash: n
    }), rO.handle(), Dt.init(), Dt.on("missingHistoryItem", () => {
      typeof window < "u" && this.visit(window.location.href, { preserveState: !0, preserveScroll: !0, replace: !0 });
    }), Dt.on("loadDeferredProps", (a) => {
      this.loadDeferredProps(a);
    }), Dt.on("historyQuotaExceeded", (a) => {
      window.location.href = a;
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
    return this.doReload(e);
  }
  doReload(e = {}) {
    if (!(typeof window > "u"))
      return this.visit(window.location.href, {
        ...e,
        preserveScroll: !0,
        preserveState: !0,
        async: !0,
        headers: {
          ...e.headers || {},
          "Cache-Control": "no-cache"
        }
      });
  }
  remember(e, t = "default") {
    ce.remember(e, t);
  }
  restore(e = "default") {
    return ce.restore(e);
  }
  on(e, t) {
    return typeof window > "u" ? () => {
    } : Dt.onGlobalEvent(e, t);
  }
  /**
   * @deprecated Use cancelAll() instead.
   */
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll({ async: e = !0, prefetch: t = !0, sync: r = !0 } = {}) {
    e && this.asyncRequestStream.cancelInFlight({ prefetch: t }), r && this.syncRequestStream.cancelInFlight();
  }
  poll(e, t = {}, r = {}) {
    return oO.add(e, () => this.reload(t), {
      autoStart: r.autoStart ?? !0,
      keepAlive: r.keepAlive ?? !1
    });
  }
  visit(e, t = {}) {
    const r = this.getPendingVisit(e, {
      ...t,
      showProgress: t.showProgress ?? !t.async
    }), n = this.getVisitEvents(t);
    if (n.onBefore(r) === !1 || !xc(r))
      return;
    const a = mt(Z.get().url);
    (r.only.length > 0 || r.except.length > 0 || r.reset.length > 0 ? YP(r.url, a) : Pa(r.url, a)) || this.asyncRequestStream.cancelInFlight({ prefetch: !1 }), r.async || this.syncRequestStream.interruptInFlight(), !Z.isCleared() && !r.preserveUrl && Xe.save();
    const i = {
      ...r,
      ...n
    }, u = $t.get(i);
    u ? (hn.reveal(u.inFlight), $t.use(u, i)) : (hn.reveal(!0), (r.async ? this.asyncRequestStream : this.syncRequestStream).send(Ac.create(i, Z.get())));
  }
  getCached(e, t = {}) {
    return $t.findCached(this.getPrefetchParams(e, t));
  }
  flush(e, t = {}) {
    $t.remove(this.getPrefetchParams(e, t));
  }
  flushAll() {
    $t.removeAll();
  }
  flushByCacheTags(e) {
    $t.removeByTags(Array.isArray(e) ? e : [e]);
  }
  getPrefetching(e, t = {}) {
    return $t.findInFlight(this.getPrefetchParams(e, t));
  }
  prefetch(e, t = {}, r = {}) {
    if ((t.method ?? (Ht(e) ? e.method : "get")) !== "get")
      throw new Error("Prefetch requests must use the GET method");
    const a = this.getPendingVisit(e, {
      ...t,
      async: !0,
      showProgress: !1,
      prefetch: !0,
      viewTransition: !1
    }), o = a.url.origin + a.url.pathname + a.url.search, s = window.location.origin + window.location.pathname + window.location.search;
    if (o === s)
      return;
    const i = this.getVisitEvents(t);
    if (i.onBefore(a) === !1 || !xc(a))
      return;
    hn.hide(), this.asyncRequestStream.interruptInFlight();
    const u = {
      ...a,
      ...i
    };
    new Promise((c) => {
      const d = () => {
        Z.get() ? c() : setTimeout(d, 50);
      };
      d();
    }).then(() => {
      $t.add(
        u,
        (c) => {
          this.asyncRequestStream.send(Ac.create(c, Z.get()));
        },
        {
          cacheFor: lr.get("prefetch.cacheFor"),
          cacheTags: [],
          ...r
        }
      );
    });
  }
  clearHistory() {
    ce.clear();
  }
  decryptHistory() {
    return ce.decrypt();
  }
  resolveComponent(e) {
    return Z.resolve(e);
  }
  replace(e) {
    this.clientVisit(e, { replace: !0 });
  }
  replaceProp(e, t, r) {
    this.replace({
      preserveScroll: !0,
      preserveState: !0,
      props(n) {
        const a = typeof t == "function" ? t(at(n, e), n) : t;
        return ht(Ve(n), e, a);
      },
      ...r || {}
    });
  }
  appendToProp(e, t, r) {
    this.replaceProp(
      e,
      (n, a) => {
        const o = typeof t == "function" ? t(n, a) : t;
        return Array.isArray(n) || (n = n !== void 0 ? [n] : []), [...n, o];
      },
      r
    );
  }
  prependToProp(e, t, r) {
    this.replaceProp(
      e,
      (n, a) => {
        const o = typeof t == "function" ? t(n, a) : t;
        return Array.isArray(n) || (n = n !== void 0 ? [n] : []), [o, ...n];
      },
      r
    );
  }
  push(e) {
    this.clientVisit(e);
  }
  flash(e, t) {
    const r = Z.get().flash;
    let n;
    if (typeof e == "function")
      n = e(r);
    else if (typeof e == "string")
      n = { ...r, [e]: t };
    else if (e && Object.keys(e).length)
      n = { ...r, ...e };
    else
      return;
    Z.setFlash(n), Object.keys(n).length && Ea(n);
  }
  clientVisit(e, { replace: t = !1 } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(e, { replace: t }));
  }
  performClientVisit(e, { replace: t = !1 } = {}) {
    const r = Z.get(), n = typeof e.props == "function" ? Object.fromEntries(
      Object.values(r.onceProps ?? {}).map((h) => [h.prop, r.props[h.prop]])
    ) : {}, a = typeof e.props == "function" ? e.props(r.props, n) : e.props ?? r.props, o = typeof e.flash == "function" ? e.flash(r.flash) : e.flash, { viewTransition: s, onError: i, onFinish: u, onFlash: l, onSuccess: c, ...d } = e, m = {
      ...r,
      ...d,
      flash: o ?? {},
      props: a
    }, v = ni.resolvePreserveOption(e.preserveScroll ?? !1, m), p = ni.resolvePreserveOption(e.preserveState ?? !1, m);
    return Z.set(m, {
      replace: t,
      preserveScroll: v,
      preserveState: p,
      viewTransition: s
    }).then(() => {
      const h = Z.get().flash;
      Object.keys(h).length > 0 && (Ea(h), l == null || l(h));
      const f = Z.get().props.errors || {};
      if (Object.keys(f).length === 0) {
        c == null || c(Z.get());
        return;
      }
      const y = e.errorBag ? f[e.errorBag || ""] || {} : f;
      i == null || i(y);
    }).finally(() => u == null ? void 0 : u(e));
  }
  getPrefetchParams(e, t) {
    return {
      ...this.getPendingVisit(e, {
        ...t,
        async: !0,
        showProgress: !1,
        prefetch: !0,
        viewTransition: !1
      }),
      ...this.getVisitEvents(t)
    };
  }
  getPendingVisit(e, t, r = {}) {
    if (Ht(e)) {
      const l = e;
      e = l.url, t.method = t.method ?? l.method;
    }
    const n = lr.get("visitOptions"), a = n ? n(e.toString(), Ve(t)) || {} : {}, o = {
      method: "get",
      data: {},
      replace: !1,
      preserveScroll: !1,
      preserveState: !1,
      only: [],
      except: [],
      headers: {},
      errorBag: "",
      forceFormData: !1,
      queryStringArrayFormat: "brackets",
      async: !1,
      showProgress: !0,
      fresh: !1,
      reset: [],
      preserveUrl: !1,
      prefetch: !1,
      invalidateCacheTags: [],
      viewTransition: !1,
      ...Sc(t),
      ...Sc(a)
    }, [s, i] = JP(
      e,
      o.data,
      o.method,
      o.forceFormData,
      o.queryStringArrayFormat
    ), u = {
      cancelled: !1,
      completed: !1,
      interrupted: !1,
      ...o,
      ...r,
      url: s,
      data: i
    };
    return u.prefetch && (u.headers.Purpose = "prefetch"), u;
  }
  getVisitEvents(e) {
    return {
      onCancelToken: e.onCancelToken || (() => {
      }),
      onBefore: e.onBefore || (() => {
      }),
      onBeforeUpdate: e.onBeforeUpdate || (() => {
      }),
      onStart: e.onStart || (() => {
      }),
      onProgress: e.onProgress || (() => {
      }),
      onFinish: e.onFinish || (() => {
      }),
      onCancel: e.onCancel || (() => {
      }),
      onSuccess: e.onSuccess || (() => {
      }),
      onError: e.onError || (() => {
      }),
      onFlash: e.onFlash || (() => {
      }),
      onPrefetched: e.onPrefetched || (() => {
      }),
      onPrefetching: e.onPrefetching || (() => {
      })
    };
  }
  loadDeferredProps(e) {
    e && Object.entries(e).forEach(([t, r]) => {
      this.doReload({ only: r, deferredProps: !0 });
    });
  }
}, ua = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...e) {
    return () => e.length === 1 ? Ht(e[0]) ? e[0] : e[0]() : {
      method: typeof e[0] == "function" ? e[0]() : e[0],
      url: typeof e[1] == "function" ? e[1]() : e[1]
    };
  }
  /**
   * Parses all useForm() arguments into { rememberKey, data, precognitionEndpoint }.
   *
   * useForm()
   * useForm(data)
   * useForm(rememberKey, data)
   * useForm(method, url, data)
   * useForm(urlMethodPair, data)
   *
   */
  static parseUseFormArguments(...e) {
    return e.length === 0 ? {
      rememberKey: null,
      data: {},
      precognitionEndpoint: null
    } : e.length === 1 ? {
      rememberKey: null,
      data: e[0],
      precognitionEndpoint: null
    } : e.length === 2 ? typeof e[0] == "string" ? {
      rememberKey: e[0],
      data: e[1],
      precognitionEndpoint: null
    } : {
      rememberKey: null,
      data: e[1],
      precognitionEndpoint: this.createWayfinderCallback(e[0])
    } : {
      rememberKey: null,
      data: e[2],
      precognitionEndpoint: this.createWayfinderCallback(e[0], e[1])
    };
  }
  /**
   * Parses all submission arguments into { method, url, options }.
   * It uses the Precognition endpoint if no explicit method/url are provided.
   *
   * form.submit(method, url)
   * form.submit(method, url, options)
   * form.submit(urlMethodPair)
   * form.submit(urlMethodPair, options)
   * form.submit()
   * form.submit(options)
   */
  static parseSubmitArguments(e, t) {
    return e.length === 3 || e.length === 2 && typeof e[0] == "string" ? { method: e[0], url: e[1], options: e[2] ?? {} } : Ht(e[0]) ? { ...e[0], options: e[1] ?? {} } : { ...t(), options: e[0] ?? {} };
  }
  /**
   * Merges headers into the Precognition validate() arguments.
   */
  static mergeHeadersForValidation(e, t, r) {
    const n = (a) => (a.headers = {
      ...r ?? {},
      ...a.headers ?? {}
    }, a);
    return e && typeof e == "object" && !("target" in e) ? e = n(e) : t && typeof t == "object" ? t = n(t) : typeof e == "string" ? t = n(t ?? {}) : e = n(e ?? {}), [e, t];
  }
};
function uO(e) {
  if (!e.includes("."))
    return e;
  const t = (r) => r.startsWith("[") && r.endsWith("]") ? r : r.split(".").reduce((n, a, o) => o === 0 ? a : `${n}[${a}]`);
  return e.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(t).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function cO(e) {
  const t = [], r = /([^\[\]]+)|\[(\d*)\]/g;
  let n;
  for (; (n = r.exec(e)) !== null; )
    n[1] !== void 0 ? t.push(n[1]) : n[2] !== void 0 && t.push(n[2] === "" ? "" : Number(n[2]));
  return t;
}
function dO(e, t, r) {
  let n = e;
  for (let a = 0; a < t.length - 1; a++)
    t[a] in n || (n[t[a]] = {}), n = n[t[a]];
  n[t[t.length - 1]] = r;
}
function fO(e) {
  const t = Object.keys(e), r = t.filter((n) => /^\d+$/.test(n)).map(Number).sort((n, a) => n - a);
  return t.length === r.length && r.length > 0 && r[0] === 0 && r.every((n, a) => n === a);
}
function ca(e) {
  if (Array.isArray(e))
    return e.map(ca);
  if (typeof e != "object" || e === null || el(e))
    return e;
  if (fO(e)) {
    const r = [];
    for (let n = 0; n < Object.keys(e).length; n++)
      r[n] = ca(e[n]);
    return r;
  }
  const t = {};
  for (const r in e)
    t[r] = ca(e[r]);
  return t;
}
function Tc(e) {
  const t = {};
  for (const [r, n] of e.entries()) {
    if (n instanceof File && n.size === 0 && n.name === "")
      continue;
    const a = cO(uO(r));
    if (a[a.length - 1] === "") {
      const o = a.slice(0, -1), s = at(t, o);
      if (Array.isArray(s))
        s.push(n);
      else if (s && typeof s == "object" && !el(s)) {
        const i = Object.keys(s).filter((u) => /^\d+$/.test(u)).map(Number).sort((u, l) => u - l);
        ht(t, o, i.length > 0 ? [...i.map((u) => s[u]), n] : [n]);
      } else
        ht(t, o, [n]);
      continue;
    }
    dO(t, a.map(String), n);
  }
  return ca(t);
}
var xs = {
  preferredAttribute() {
    return lr.get("future.useDataInertiaHeadAttribute") ? "data-inertia" : "inertia";
  },
  buildDOMElement(e) {
    const t = document.createElement("template");
    t.innerHTML = e;
    const r = t.content.firstChild;
    if (!e.startsWith("<script "))
      return r;
    const n = document.createElement("script");
    return n.innerHTML = r.innerHTML, r.getAttributeNames().forEach((a) => {
      n.setAttribute(a, r.getAttribute(a) || "");
    }), n;
  },
  isInertiaManagedElement(e) {
    return e.nodeType === Node.ELEMENT_NODE && e.getAttribute(this.preferredAttribute()) !== null;
  },
  findMatchingElementIndex(e, t) {
    const r = this.preferredAttribute(), n = e.getAttribute(r);
    return n !== null ? t.findIndex((a) => a.getAttribute(r) === n) : -1;
  },
  update: xn(function(e) {
    const t = e.map((n) => this.buildDOMElement(n));
    Array.from(document.head.childNodes).filter(
      (n) => this.isInertiaManagedElement(n)
    ).forEach((n) => {
      var s, i;
      const a = this.findMatchingElementIndex(n, t);
      if (a === -1) {
        (s = n == null ? void 0 : n.parentNode) == null || s.removeChild(n);
        return;
      }
      const o = t.splice(a, 1)[0];
      o && !n.isEqualNode(o) && ((i = n == null ? void 0 : n.parentNode) == null || i.replaceChild(o, n));
    }), t.forEach((n) => document.head.appendChild(n));
  }, 1)
};
function pO(e, t, r) {
  const n = {};
  let a = 0;
  function o() {
    const d = a += 1;
    return n[d] = [], d.toString();
  }
  function s(d) {
    d === null || Object.keys(n).indexOf(d) === -1 || (delete n[d], c());
  }
  function i(d) {
    Object.keys(n).indexOf(d) === -1 && (n[d] = []);
  }
  function u(d, m = []) {
    d !== null && Object.keys(n).indexOf(d) > -1 && (n[d] = m), c();
  }
  function l() {
    const d = t(""), m = xs.preferredAttribute(), v = {
      ...d ? { title: `<title ${m}="">${d}</title>` } : {}
    }, p = Object.values(n).reduce((h, f) => h.concat(f), []).reduce((h, f) => {
      if (f.indexOf("<") === -1)
        return h;
      if (f.indexOf("<title ") === 0) {
        const x = f.match(/(<title [^>]+>)(.*?)(<\/title>)/s);
        return h.title = x ? `${x[1]}${t(x[2])}${x[3]}` : f, h;
      }
      const y = f.match(m === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      return y ? h[y[0]] = f : h[Object.keys(h).length] = f, h;
    }, v);
    return Object.values(p);
  }
  function c() {
    e ? r(l()) : xs.update(l());
  }
  return c(), {
    forceUpdate: c,
    createProvider: function() {
      const d = o();
      return {
        preferredAttribute: xs.preferredAttribute,
        reconnect: () => i(d),
        update: (m) => u(d, m),
        disconnect: () => s(d)
      };
    }
  };
}
var hO = "X-Inertia-Infinite-Scroll-Merge-Intent", mO = (e) => {
  const t = () => {
    var x;
    const y = (x = Z.get().scrollProps) == null ? void 0 : x[e.getPropName()];
    if (y)
      return y;
    throw new Error(`The page object does not contain a scroll prop named "${e.getPropName()}".`);
  }, r = {
    component: null,
    loading: !1,
    previousPage: null,
    nextPage: null,
    lastLoadedPage: null,
    requestCount: 0
  }, n = () => {
    const y = t();
    r.component = Z.get().component, r.loading = !1, r.previousPage = y.previousPage, r.nextPage = y.nextPage, r.lastLoadedPage = y.currentPage, r.requestCount = 0;
  }, a = () => `inertia:infinite-scroll-data:${e.getPropName()}`;
  if (typeof window < "u") {
    n();
    const y = ke.restore(a());
    y && typeof y == "object" && y.lastLoadedPage === t().currentPage && (r.previousPage = y.previousPage, r.nextPage = y.nextPage, r.lastLoadedPage = y.lastLoadedPage, r.requestCount = y.requestCount || 0);
  }
  const o = ke.on("success", (y) => {
    var x;
    r.component === y.detail.page.component && t().reset && (n(), (x = e.onReset) == null || x.call(e));
  }), s = (y) => y === "next" ? "nextPage" : "previousPage", i = (y) => {
    const x = s(y);
    return r[x];
  }, u = (y) => {
    const x = t(), P = s(y);
    r.lastLoadedPage = x.currentPage, r[P] = x[P], r.requestCount += 1, ke.remember(
      {
        previousPage: r.previousPage,
        nextPage: r.nextPage,
        lastLoadedPage: r.lastLoadedPage,
        requestCount: r.requestCount
      },
      a()
    );
  }, l = () => t().pageName, c = () => r.requestCount, d = (y, x = {}) => {
    const P = i(y);
    r.loading || P === null || (r.loading = !0, ke.reload({
      ...x,
      data: { [l()]: P },
      only: [e.getPropName()],
      preserveUrl: !0,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [hO]: y === "previous" ? "prepend" : "append",
        ...x.headers
      },
      onBefore: (A) => {
        var T;
        y === "next" ? e.onBeforeNextRequest() : e.onBeforePreviousRequest(), (T = x.onBefore) == null || T.call(x, A);
      },
      onBeforeUpdate: (A) => {
        var T;
        e.onBeforeUpdate(), (T = x.onBeforeUpdate) == null || T.call(x, A);
      },
      onSuccess: (A) => {
        var T;
        u(y), (T = x.onSuccess) == null || T.call(x, A);
      },
      onFinish: (A) => {
        var T;
        r.loading = !1, y === "next" ? e.onCompleteNextRequest(r.lastLoadedPage) : e.onCompletePreviousRequest(r.lastLoadedPage), (T = x.onFinish) == null || T.call(x, A);
      }
    }));
  };
  return {
    getLastLoadedPage: () => r.lastLoadedPage,
    getPageName: l,
    getRequestCount: c,
    hasPrevious: () => !!r.previousPage,
    hasNext: () => !!r.nextPage,
    fetchNext: (y) => d("next", y),
    fetchPrevious: (y) => d("previous", y),
    removeEventListener: o
  };
}, yO = () => {
  const e = [];
  return {
    new: (n, a = {}) => {
      const o = new IntersectionObserver((s) => {
        for (const i of s)
          i.isIntersecting && n(i);
      }, a);
      return e.push(o), o;
    },
    flushAll: () => {
      e.forEach((n) => n.disconnect()), e.length = 0;
    }
  };
}, da = "infiniteScrollPage", Ss = "infiniteScrollIgnore", ip = (e) => e.dataset[da], gO = (e) => {
  const t = yO();
  let r, n, a, o, s = !1;
  const i = () => {
    o = new MutationObserver((O) => {
      O.forEach((_) => {
        _.addedNodes.forEach((M) => {
          M.nodeType === Node.ELEMENT_NODE && m.add(M);
        });
      }), A();
    }), o.observe(e.getItemsElement(), { childList: !0 }), r = t.new(
      (O) => e.onItemIntersected(O.target)
    );
    const $ = {
      root: e.getScrollableParent(),
      rootMargin: `${Math.max(1, e.getTriggerMargin())}px`
    };
    n = t.new(e.onPreviousTriggered, $), a = t.new(e.onNextTriggered, $);
  }, u = () => {
    s && l();
    const $ = e.getStartElement(), O = e.getEndElement();
    $ && e.shouldFetchPrevious() && n.observe($), O && e.shouldFetchNext() && a.observe(O), s = !0;
  }, l = () => {
    s && (n.disconnect(), a.disconnect(), s = !1);
  }, c = () => {
    s && u();
  }, d = () => {
    l(), t.flushAll(), o == null || o.disconnect();
  }, m = /* @__PURE__ */ new Set(), v = ($) => !(da in $.dataset) && !(Ss in $.dataset), p = () => {
    Array.from(m).forEach(($) => {
      v($) && ($.dataset[Ss] = "true"), r.observe($);
    }), m.clear();
  }, h = ($) => Array.from(
    $.querySelectorAll(
      ":scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])"
    )
  );
  let f = !1;
  const y = ($) => {
    !f && (f = !0, T()) || (h(e.getItemsElement()).forEach((O) => {
      v(O) && (O.dataset[da] = ($ == null ? void 0 : $.toString()) || "1"), r.observe(O);
    }), P());
  }, x = () => `inertia:infinite-scroll-elements:${e.getPropName()}`, P = () => {
    const $ = {}, O = e.getItemsElement().childNodes;
    for (let _ = 0; _ < O.length; _++) {
      const M = O[_];
      if (M.nodeType !== Node.ELEMENT_NODE)
        continue;
      const D = ip(M);
      typeof D > "u" || (D in $ ? $[D].to = _ : $[D] = { from: _, to: _ });
    }
    ke.remember($, x());
  }, A = xn(P, 250), T = () => {
    const $ = ke.restore(x());
    if (!$ || typeof $ != "object")
      return !1;
    const O = e.getItemsElement().childNodes;
    for (let _ = 0; _ < O.length; _++) {
      const M = O[_];
      if (M.nodeType !== Node.ELEMENT_NODE)
        continue;
      const D = M;
      let R;
      for (const [g, C] of Object.entries($))
        if (_ >= C.from && _ <= C.to) {
          R = g;
          break;
        }
      if (R)
        D.dataset[da] = R;
      else if (v(D))
        D.dataset[Ss] = "true";
      else
        continue;
      r.observe(D);
    }
    return !0;
  };
  return {
    setupObservers: i,
    enableTriggers: u,
    disableTriggers: l,
    refreshTriggers: c,
    flushAll: d,
    processManuallyAddedElements: p,
    processServerLoadedElements: y
  };
}, vO = new Qa(), Mr, er, Qn = null, bO = (e) => {
  let t = !0;
  const r = (a) => {
    vO.add(() => new Promise((o) => {
      if (!t)
        return Mr = er = null, o();
      if (!Mr || !er) {
        const u = Z.get().url;
        Mr = mt(u), er = mt(u), Qn = np(u);
      }
      const s = e.getPageName(), i = er.searchParams;
      a === "1" ? i.delete(s) : i.set(s, a), setTimeout(() => o());
    })).finally(() => {
      t && Mr && er && Mr.href !== er.href && Qn !== null && ke.replace({
        url: XP(er, Qn),
        preserveScroll: !0,
        preserveState: !0
      }), Mr = er = Qn = null;
    });
  };
  return {
    onItemIntersected: xn((a) => {
      var c;
      const o = e.getItemsElement();
      if (!t || e.shouldPreserveUrl() || !a || !o)
        return;
      const s = /* @__PURE__ */ new Map(), i = [...o.children];
      Zf(i, a).forEach((d) => {
        const m = ip(d) ?? "1";
        s.has(m) ? s.set(m, s.get(m) + 1) : s.set(m, 1);
      });
      const l = (c = Array.from(s.entries()).sort((d, m) => m[1] - d[1])[0]) == null ? void 0 : c[0];
      l !== void 0 && r(l);
    }, 250),
    cancel: () => t = !1
  };
}, wO = (e) => ({
  createCallbacks: () => {
    let r, n = null, a = 0;
    return {
      captureScrollPosition: () => {
        const i = e.getScrollableParent(), u = e.getItemsElement();
        r = (i == null ? void 0 : i.scrollTop) || window.scrollY;
        const l = Zf([...u.children]);
        if (l.length > 0) {
          n = l[0];
          const c = (i == null ? void 0 : i.getBoundingClientRect()) || { top: 0 }, d = i ? c.top : 0;
          a = n.getBoundingClientRect().top - d;
        }
      },
      restoreScrollPosition: () => {
        if (!n)
          return;
        let i = 0, u = !1;
        const l = () => {
          if (i++, u || i > 10)
            return !1;
          const c = e.getScrollableParent(), d = (c == null ? void 0 : c.getBoundingClientRect()) || { top: 0 }, m = c ? d.top : 0, h = n.getBoundingClientRect().top - m - a;
          if (h === 0) {
            window.requestAnimationFrame(l);
            return;
          }
          c ? c.scrollTo({ top: r + h }) : window.scrollTo(0, window.scrollY + h), u = !0;
        };
        window.requestAnimationFrame(l);
      }
    };
  }
});
function xO(e) {
  const t = bO({ ...e, getPageName: () => a.getPageName() }), r = wO(e), n = gO({
    ...e,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: t.onItemIntersected,
    onPreviousTriggered: () => a.fetchPrevious(),
    onNextTriggered: () => a.fetchNext()
  }), a = mO({
    ...e,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: n.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (l) => {
      e.onCompletePreviousRequest(), pn(() => n.processServerLoadedElements(l), 2);
    },
    onCompleteNextRequest: (l) => {
      e.onCompleteNextRequest(), pn(() => n.processServerLoadedElements(l), 2);
    },
    onReset: e.onDataReset
  }), o = (l) => {
    const { captureScrollPosition: c, restoreScrollPosition: d } = r.createCallbacks(), m = l.onBeforeUpdate || (() => {
    }), v = l.onSuccess || (() => {
    });
    return l.onBeforeUpdate = (p) => {
      m(p), c();
    }, l.onSuccess = (p) => {
      v(p), d();
    }, l;
  }, s = a.fetchNext;
  a.fetchNext = (l = {}) => {
    e.inReverseMode() && (l = o(l)), s(l);
  };
  const i = a.fetchPrevious;
  a.fetchPrevious = (l = {}) => {
    e.inReverseMode() || (l = o(l)), i(l);
  };
  const u = ke.on("success", () => pn(n.refreshTriggers, 2));
  return {
    dataManager: a,
    elementManager: n,
    flush: () => {
      u(), a.removeEventListener(), n.flushAll(), t.cancel();
    }
  };
}
function lp(e) {
  return e.target instanceof HTMLElement && e.target.isContentEditable || e.defaultPrevented;
}
function cn(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "a";
  return !(lp(e) || t && e.altKey || t && e.ctrlKey || t && e.metaKey || t && e.shiftKey || t && "button" in e && e.button !== 0);
}
function $c(e) {
  const t = e.currentTarget.tagName.toLowerCase() === "button";
  return !lp(e) && (e.key === "Enter" || t && e.key === " ");
}
var Le = "nprogress", Qe, Me = {
  minimum: 0.08,
  easing: "linear",
  positionUsing: "translate3d",
  speed: 200,
  trickle: !0,
  trickleSpeed: 200,
  showSpinner: !0,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: "body",
  color: "#29d",
  includeCSS: !0,
  template: [
    '<div class="bar" role="bar">',
    '<div class="peg"></div>',
    "</div>",
    '<div class="spinner" role="spinner">',
    '<div class="spinner-icon"></div>',
    "</div>"
  ].join("")
}, ur = null, SO = (e) => {
  Object.assign(Me, e), Me.includeCSS && kO(Me.color), Qe = document.createElement("div"), Qe.id = Le, Qe.innerHTML = Me.template;
}, Za = (e) => {
  const t = up();
  e = hp(e, Me.minimum, 1), ur = e === 1 ? null : e;
  const r = CO(!t), n = r.querySelector(Me.barSelector), a = Me.speed, o = Me.easing;
  r.offsetWidth, AO((s) => {
    const i = Me.positionUsing === "translate3d" ? {
      transition: `all ${a}ms ${o}`,
      transform: `translate3d(${fa(e)}%,0,0)`
    } : Me.positionUsing === "translate" ? {
      transition: `all ${a}ms ${o}`,
      transform: `translate(${fa(e)}%,0)`
    } : { marginLeft: `${fa(e)}%` };
    for (const u in i)
      n.style[u] = i[u];
    if (e !== 1)
      return setTimeout(s, a);
    r.style.transition = "none", r.style.opacity = "1", r.offsetWidth, setTimeout(() => {
      r.style.transition = `all ${a}ms linear`, r.style.opacity = "0", setTimeout(() => {
        pp(), r.style.transition = "", r.style.opacity = "", s();
      }, a);
    }, a);
  });
}, up = () => typeof ur == "number", cp = () => {
  ur || Za(0);
  const e = function() {
    setTimeout(function() {
      ur && (dp(), e());
    }, Me.trickleSpeed);
  };
  Me.trickle && e();
}, EO = (e) => {
  !e && !ur || (dp(0.3 + 0.5 * Math.random()), Za(1));
}, dp = (e) => {
  const t = ur;
  if (t === null)
    return cp();
  if (!(t > 1))
    return e = typeof e == "number" ? e : (() => {
      const r = {
        0.1: [0, 0.2],
        0.04: [0.2, 0.5],
        0.02: [0.5, 0.8],
        5e-3: [0.8, 0.99]
      };
      for (const n in r)
        if (t >= r[n][0] && t < r[n][1])
          return parseFloat(n);
      return 0;
    })(), Za(hp(t + e, 0, 0.994));
}, CO = (e) => {
  var a;
  if (PO())
    return document.getElementById(Le);
  document.documentElement.classList.add(`${Le}-busy`);
  const t = Qe.querySelector(Me.barSelector), r = e ? "-100" : fa(ur || 0), n = fp();
  return t.style.transition = "all 0 linear", t.style.transform = `translate3d(${r}%,0,0)`, Me.showSpinner || (a = Qe.querySelector(Me.spinnerSelector)) == null || a.remove(), n !== document.body && n.classList.add(`${Le}-custom-parent`), n.appendChild(Qe), Qe;
}, fp = () => OO(Me.parent) ? Me.parent : document.querySelector(Me.parent), pp = () => {
  document.documentElement.classList.remove(`${Le}-busy`), fp().classList.remove(`${Le}-custom-parent`), Qe == null || Qe.remove();
}, PO = () => document.getElementById(Le) !== null, OO = (e) => typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e.nodeType === 1 && typeof e.nodeName == "string";
function hp(e, t, r) {
  return e < t ? t : e > r ? r : e;
}
var fa = (e) => (-1 + e) * 100, AO = /* @__PURE__ */ (() => {
  const e = [], t = () => {
    const r = e.shift();
    r && r(t);
  };
  return (r) => {
    e.push(r), e.length === 1 && t();
  };
})(), kO = (e) => {
  const t = document.createElement("style");
  t.textContent = `
    #${Le} {
      pointer-events: none;
    }

    #${Le} .bar {
      background: ${e};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${Le} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${Le} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${Le} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${e};
      border-left-color: ${e};
      border-radius: 50%;

      animation: ${Le}-spinner 400ms linear infinite;
    }

    .${Le}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${Le}-custom-parent #${Le} .spinner,
    .${Le}-custom-parent #${Le} .bar {
      position: absolute;
    }

    @keyframes ${Le}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `, document.head.appendChild(t);
}, TO = () => {
  Qe && (Qe.style.display = "");
}, $O = () => {
  Qe && (Qe.style.display = "none");
}, kt = {
  configure: SO,
  isStarted: up,
  done: EO,
  set: Za,
  remove: pp,
  start: cp,
  status: ur,
  show: TO,
  hide: $O
}, DO = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    kt.start();
  }
  reveal(e = !1) {
    this.hideCount = Math.max(0, this.hideCount - 1), (e || this.hideCount === 0) && kt.show();
  }
  hide() {
    this.hideCount++, kt.hide();
  }
  set(e) {
    kt.set(Math.max(0, Math.min(1, e)));
  }
  finish() {
    kt.done();
  }
  reset() {
    kt.set(0);
  }
  remove() {
    kt.done(), kt.remove();
  }
  isStarted() {
    return kt.isStarted();
  }
  getStatus() {
    return kt.status;
  }
}, hn = new DO();
hn.reveal;
hn.hide;
var mp = /* @__PURE__ */ Symbol("FormComponentReset");
function ai(e) {
  return e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement;
}
function RO(e, t) {
  const r = e.value, n = e.checked;
  switch (e.type.toLowerCase()) {
    case "checkbox":
      e.checked = t.includes(e.value);
      break;
    case "radio":
      e.checked = t[0] === e.value;
      break;
    case "file":
      e.value = "";
      break;
    case "button":
    case "submit":
    case "reset":
    case "image":
      break;
    default:
      e.value = t[0] !== null && t[0] !== void 0 ? String(t[0]) : "";
  }
  return e.value !== r || e.checked !== n;
}
function FO(e, t) {
  const r = e.value, n = Array.from(e.selectedOptions).map((s) => s.value);
  if (e.multiple) {
    const s = t.map((i) => String(i));
    Array.from(e.options).forEach((i) => {
      i.selected = s.includes(i.value);
    });
  } else
    e.value = t[0] !== void 0 ? String(t[0]) : "";
  const a = Array.from(e.selectedOptions).map((s) => s.value);
  return e.multiple ? JSON.stringify(n.sort()) !== JSON.stringify(a.sort()) : e.value !== r;
}
function Es(e, t) {
  if (e.disabled) {
    if (e instanceof HTMLInputElement) {
      const r = e.value, n = e.checked;
      switch (e.type.toLowerCase()) {
        case "checkbox":
        case "radio":
          return e.checked = e.defaultChecked, e.checked !== n;
        case "file":
          return e.value = "", r !== "";
        case "button":
        case "submit":
        case "reset":
        case "image":
          return !1;
        default:
          return e.value = e.defaultValue, e.value !== r;
      }
    } else if (e instanceof HTMLSelectElement) {
      const r = Array.from(e.selectedOptions).map((a) => a.value);
      Array.from(e.options).forEach((a) => {
        a.selected = a.defaultSelected;
      });
      const n = Array.from(e.selectedOptions).map((a) => a.value);
      return JSON.stringify(r.sort()) !== JSON.stringify(n.sort());
    } else if (e instanceof HTMLTextAreaElement) {
      const r = e.value;
      return e.value = e.defaultValue, e.value !== r;
    }
    return !1;
  }
  if (e instanceof HTMLInputElement)
    return RO(e, t);
  if (e instanceof HTMLSelectElement)
    return FO(e, t);
  if (e instanceof HTMLTextAreaElement) {
    const r = e.value;
    return e.value = t[0] !== void 0 ? String(t[0]) : "", e.value !== r;
  }
  return !1;
}
function _O(e, t) {
  let r = !1;
  return e instanceof RadioNodeList || e instanceof HTMLCollection ? Array.from(e).forEach((n, a) => {
    if (n instanceof Element && ai(n))
      if (n instanceof HTMLInputElement && ["checkbox", "radio"].includes(n.type.toLowerCase()))
        Es(n, t) && (r = !0);
      else {
        const o = t[a] !== void 0 ? [t[a]] : [t[0] ?? null].filter(Boolean);
        Es(n, o) && (r = !0);
      }
  }) : ai(e) && (r = Es(e, t)), r;
}
function qO(e, t, r) {
  if (!e)
    return;
  const n = !r || r.length === 0;
  if (n) {
    const o = new FormData(e), s = Array.from(e.elements).map((i) => ai(i) ? i.name : "").filter(Boolean);
    r = [.../* @__PURE__ */ new Set([...t.keys(), ...o.keys(), ...s])];
  }
  let a = !1;
  r.forEach((o) => {
    const s = e.elements.namedItem(o);
    s && _O(s, t.getAll(o)) && (a = !0);
  }), a && n && e.dispatchEvent(
    new CustomEvent("reset", { bubbles: !0, cancelable: !0, detail: { [mp]: !0 } })
  );
}
var ke = new lO();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
let Sn = Te.create(), yp = (e, t) => `${e.method}:${e.baseURL ?? t.defaults.baseURL ?? ""}${e.url}`, gp = (e) => e.status === 204 && e.headers["precognition-success"] === "true";
const Oa = {}, ar = {
  get: (e, t = {}, r = {}) => sn(on("get", e, t, r)),
  post: (e, t = {}, r = {}) => sn(on("post", e, t, r)),
  patch: (e, t = {}, r = {}) => sn(on("patch", e, t, r)),
  put: (e, t = {}, r = {}) => sn(on("put", e, t, r)),
  delete: (e, t = {}, r = {}) => sn(on("delete", e, t, r)),
  use(e) {
    return Sn = e, ar;
  },
  axios() {
    return Sn;
  },
  fingerprintRequestsUsing(e) {
    return yp = e === null ? () => null : e, ar;
  },
  determineSuccessUsing(e) {
    return gp = e, ar;
  }
}, on = (e, t, r, n) => ({
  url: t,
  method: e,
  ...n,
  ...["get", "delete"].includes(e) ? {
    params: Ks({}, r, n == null ? void 0 : n.params)
  } : {
    data: Ks({}, r, n == null ? void 0 : n.data)
  }
}), sn = (e = {}) => {
  const t = [
    BO,
    LO,
    MO
  ].reduce((r, n) => n(r), e);
  return (t.onBefore ?? (() => !0))() === !1 ? Promise.resolve(null) : ((t.onStart ?? (() => null))(), Sn.request(t).then(async (r) => {
    t.precognitive && Dc(r);
    const n = r.status;
    let a = r;
    return t.precognitive && t.onPrecognitionSuccess && gp(a) && (a = await Promise.resolve(t.onPrecognitionSuccess(a) ?? a)), t.onSuccess && IO(n) && (a = await Promise.resolve(t.onSuccess(a) ?? a)), (Rc(t, n) ?? ((s) => s))(a) ?? a;
  }, (r) => NO(r) ? Promise.reject(r) : (t.precognitive && Dc(r.response), (Rc(t, r.response.status) ?? ((a, o) => Promise.reject(o)))(r.response, r))).finally(t.onFinish ?? (() => null)));
}, BO = (e) => {
  const t = e.only ?? e.validate;
  return {
    ...e,
    timeout: e.timeout ?? Sn.defaults.timeout ?? 3e4,
    precognitive: e.precognitive !== !1,
    fingerprint: typeof e.fingerprint > "u" ? yp(e, Sn) : e.fingerprint,
    headers: {
      ...e.headers,
      "Content-Type": jO(e),
      ...e.precognitive !== !1 ? {
        Precognition: !0
      } : {},
      ...t ? {
        "Precognition-Validate-Only": Array.from(t).join()
      } : {}
    }
  };
}, IO = (e) => e >= 200 && e < 300, LO = (e) => {
  var t;
  return typeof e.fingerprint != "string" || ((t = Oa[e.fingerprint]) == null || t.abort(), delete Oa[e.fingerprint]), e;
}, MO = (e) => typeof e.fingerprint != "string" || e.signal || e.cancelToken || !e.precognitive ? e : (Oa[e.fingerprint] = new AbortController(), {
  ...e,
  signal: Oa[e.fingerprint].signal
}), Dc = (e) => {
  var t;
  if (((t = e.headers) == null ? void 0 : t.precognition) !== "true")
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
}, NO = (e) => {
  var t;
  return !Jf(e) || typeof ((t = e.response) == null ? void 0 : t.status) != "number" || Gf(e);
}, Rc = (e, t) => ({
  401: e.onUnauthorized,
  403: e.onForbidden,
  404: e.onNotFound,
  409: e.onConflict,
  422: e.onValidationError,
  423: e.onLocked
})[t], jO = (e) => {
  var t, r, n;
  return ((t = e.headers) == null ? void 0 : t["Content-Type"]) ?? ((r = e.headers) == null ? void 0 : r["Content-type"]) ?? ((n = e.headers) == null ? void 0 : n["content-type"]) ?? (vp(e.data) ? "multipart/form-data" : "application/json");
}, vp = (e) => tl(e) || typeof e == "object" && e !== null && Object.values(e).some((t) => vp(t)), tl = (e) => typeof File < "u" && e instanceof File || e instanceof Blob || typeof FileList < "u" && e instanceof FileList && e.length > 0, VO = (e, t) => {
  if (!e.includes("*"))
    return [e];
  const r = e.split(".");
  let n = [""];
  for (const a of r)
    if (a === "*") {
      const o = [];
      for (const s of n) {
        const i = s ? at(t, s) : t;
        if (Array.isArray(i))
          for (let u = 0; u < i.length; u++)
            o.push(s ? `${s}.${u}` : String(u));
        else if (i !== null && typeof i == "object")
          for (const u of Object.keys(i))
            o.push(s ? `${s}.${u}` : u);
      }
      n = o;
    } else
      n = n.map((o) => o ? `${o}.${a}` : a);
  return n;
}, UO = (e, t) => t.includes("*") ? new RegExp("^" + t.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$").test(e) : e === t, Fc = (e, t) => Object.fromEntries(Object.entries(e).filter(([r]) => !t.some((n) => UO(r, n)))), HO = (e, t = {}) => {
  const r = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let n = !1, a = !1;
  const o = (R) => R !== a ? (a = R, r.validatingChanged) : [];
  let s = [];
  const i = (R) => {
    const g = [...new Set(R)];
    return s.length !== g.length || !g.every((C) => s.includes(C)) ? (s = g, r.validatedChanged) : [];
  }, u = () => s.filter((R) => typeof d[R] > "u");
  let l = [];
  const c = (R) => {
    const g = [...new Set(R)];
    return l.length !== g.length || !g.every((C) => l.includes(C)) ? (l = g, r.touchedChanged) : [];
  };
  let d = {};
  const m = (R) => {
    const g = WO(R);
    return or(d, g) ? [] : (d = g, r.errorsChanged);
  }, v = (R) => {
    const g = { ...d };
    return delete g[mn(R)], m(g);
  }, p = () => Object.keys(d).length > 0;
  let h = 1500;
  const f = (R) => {
    h = R, $.cancel(), $ = T();
  };
  let y = t, x = null, P = [], A = null;
  const T = () => W1((R) => {
    e({
      get: (g, C = {}, S = {}) => ar.get(g, M(C), O(S, R, C)),
      post: (g, C = {}, S = {}) => ar.post(g, M(C), O(S, R, C)),
      patch: (g, C = {}, S = {}) => ar.patch(g, M(C), O(S, R, C)),
      put: (g, C = {}, S = {}) => ar.put(g, M(C), O(S, R, C)),
      delete: (g, C = {}, S = {}) => ar.delete(g, M(C), O(S, R, C))
    }).catch((g) => {
      var C;
      return Gf(g) || Jf(g) && ((C = g.response) == null ? void 0 : C.status) === 422 ? null : Promise.reject(g);
    });
  }, h, { leading: !0, trailing: !0 });
  let $ = T();
  const O = (R, g, C = {}) => {
    const S = {
      ...R,
      ...g
    }, b = Array.from(S.only ?? S.validate ?? l);
    return {
      ...g,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...PP(R, g),
      only: b,
      timeout: S.timeout ?? 5e3,
      onValidationError: (q, B) => ([
        ...i([...s, ...b]),
        ...m(Ks(Fc({ ...d }, b), q.data.errors))
      ].forEach((k) => k()), S.onValidationError ? S.onValidationError(q, B) : Promise.reject(B)),
      onSuccess: (q) => (i([...s, ...b]).forEach((B) => B()), S.onSuccess ? S.onSuccess(q) : q),
      onPrecognitionSuccess: (q) => ([
        ...i([...s, ...b]),
        ...m(Fc({ ...d }, b))
      ].forEach((B) => B()), S.onPrecognitionSuccess ? S.onPrecognitionSuccess(q) : q),
      onBefore: () => {
        const q = l.some((G) => G.includes("*")), B = q ? [...new Set(l.flatMap((G) => VO(G, C)))] : l;
        return S.onBeforeValidation && S.onBeforeValidation({ data: C, touched: B }, { data: y, touched: P }) === !1 || (S.onBefore || (() => !0))() === !1 ? !1 : (q && c(B).forEach((G) => G()), A = l, x = C, !0);
      },
      onStart: () => {
        o(!0).forEach((q) => q()), (S.onStart ?? (() => null))();
      },
      onFinish: () => {
        o(!1).forEach((q) => q()), P = A, y = x, A = x = null, (S.onFinish ?? (() => null))();
      }
    };
  }, _ = (R, g, C) => {
    if (typeof R > "u") {
      const S = Array.from((C == null ? void 0 : C.only) ?? (C == null ? void 0 : C.validate) ?? []);
      c([...l, ...S]).forEach((b) => b()), $(C ?? {});
      return;
    }
    if (tl(g) && !n) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    R = mn(R), (R.includes("*") || at(y, R) !== g) && (c([R, ...l]).forEach((S) => S()), $(C ?? {}));
  }, M = (R) => n === !1 ? oi(R) : R, D = {
    touched: () => l,
    validate(R, g, C) {
      return typeof R == "object" && !("target" in R) && (C = R, R = g = void 0), _(R, g, C), D;
    },
    touch(R) {
      const g = Array.isArray(R) ? R : [mn(R)];
      return c([...l, ...g]).forEach((C) => C()), D;
    },
    validating: () => a,
    valid: u,
    errors: () => d,
    hasErrors: p,
    setErrors(R) {
      return m(R).forEach((g) => g()), D;
    },
    forgetError(R) {
      return v(R).forEach((g) => g()), D;
    },
    defaults(R) {
      return t = R, y = R, D;
    },
    reset(...R) {
      if (R.length === 0)
        c([]).forEach((g) => g());
      else {
        const g = [...l];
        R.forEach((C) => {
          g.includes(C) && g.splice(g.indexOf(C), 1), ht(y, C, at(t, C));
        }), c(g).forEach((C) => C());
      }
      return D;
    },
    setTimeout(R) {
      return f(R), D;
    },
    on(R, g) {
      return r[R].push(g), D;
    },
    validateFiles() {
      return n = !0, D;
    },
    withoutFileValidation() {
      return n = !1, D;
    }
  };
  return D;
}, zO = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: Array.isArray(e[r]) ? e[r][0] : e[r]
}), {}), WO = (e) => Object.keys(e).reduce((t, r) => ({
  ...t,
  [r]: typeof e[r] == "string" ? [e[r]] : e[r]
}), {}), mn = (e) => typeof e != "string" ? e.target.name : e, oi = (e) => {
  const t = { ...e };
  return Object.keys(t).forEach((r) => {
    const n = t[r];
    if (n !== null) {
      if (tl(n)) {
        delete t[r];
        return;
      }
      if (Array.isArray(n)) {
        t[r] = Object.values(oi({ ...n }));
        return;
      }
      if (typeof n == "object") {
        t[r] = oi(t[r]);
        return;
      }
    }
  }), t;
};
var Cs = null, Ps = !1;
function KO(e) {
  if (Ps)
    return;
  Cs === null && (Ps = !0, Cs = new Set(Object.keys(rl({}))), Ps = !1);
  const t = Object.keys(e).filter((r) => Cs.has(r));
  t.length > 0 && console.error(
    `[Inertia] useForm() data contains field(s) that conflict with form properties: ${t.map((r) => `"${r}"`).join(", ")}. These fields will be overwritten by form methods/properties. Please rename these fields.`
  );
}
function rl(...e) {
  let { rememberKey: t, data: r, precognitionEndpoint: n } = ua.parseUseFormArguments(...e);
  const a = t ? ke.restore(t) : null;
  let o = Ve(typeof r == "function" ? r() : r);
  KO(o);
  let s = null, i, u = (p) => p, l = null, c = [], d = !1;
  const v = On({
    ...a ? a.data : Ve(o),
    isDirty: !1,
    errors: a ? a.errors : {},
    hasErrors: !1,
    processing: !1,
    progress: null,
    wasSuccessful: !1,
    recentlySuccessful: !1,
    withPrecognition(...p) {
      n = ua.createWayfinderCallback(...p);
      const h = this;
      let f = null;
      const y = HO((P) => {
        const { method: A, url: T } = n(), $ = Ve(u(this.data()));
        return P[A](T, $);
      }, Ve(o));
      l = y, y.on("validatingChanged", () => {
        h.validating = y.validating();
      }).on("validatedChanged", () => {
        h.__valid = y.valid();
      }).on("touchedChanged", () => {
        h.__touched = y.touched();
      }).on("errorsChanged", () => {
        const P = f ?? Aa.get("form.withAllErrors") ? y.errors() : zO(y.errors());
        this.errors = {}, this.setError(P), h.__valid = y.valid();
      });
      const x = (P, A) => (A(P), P);
      return Object.assign(h, {
        __touched: [],
        __valid: [],
        validating: !1,
        validator: () => y,
        withAllErrors: () => x(h, () => f = !0),
        valid: (P) => h.__valid.includes(P),
        invalid: (P) => P in this.errors,
        setValidationTimeout: (P) => x(h, () => y.setTimeout(P)),
        validateFiles: () => x(h, () => y.validateFiles()),
        withoutFileValidation: () => x(h, () => y.withoutFileValidation()),
        touch: (P, ...A) => (Array.isArray(P) ? y.touch(P) : typeof P == "string" ? y.touch([P, ...A]) : y.touch(P), h),
        touched: (P) => typeof P == "string" ? h.__touched.includes(P) : h.__touched.length > 0,
        validate: (P, A) => {
          if (typeof P == "object" && !("target" in P) && (A = P, P = void 0), P === void 0)
            y.validate(A);
          else {
            const T = mn(P), $ = u(this.data());
            y.validate(T, at($, T), A);
          }
          return h;
        },
        setErrors: (P) => x(h, () => this.setError(P)),
        forgetError: (P) => x(
          h,
          () => this.clearErrors(mn(P))
        )
      }), h;
    },
    data() {
      return Object.keys(o).reduce((p, h) => ht(p, h, at(this, h)), {});
    },
    transform(p) {
      return u = p, this;
    },
    defaults(p, h) {
      if (typeof r == "function")
        throw new Error("You cannot call `defaults()` when using a function to define your form data.");
      return d = !0, typeof p > "u" ? (o = Ve(this.data()), this.isDirty = !1) : o = typeof p == "string" ? ht(Ve(o), p, h) : Object.assign({}, Ve(o), p), l == null || l.defaults(o), this;
    },
    reset(...p) {
      const h = Ve(typeof r == "function" ? r() : o), f = Ve(h);
      return p.length === 0 ? (o = f, Object.assign(this, h)) : p.filter((y) => mf(f, y)).forEach((y) => {
        ht(o, y, at(f, y)), ht(this, y, at(h, y));
      }), l == null || l.reset(...p), this;
    },
    setError(p, h) {
      const f = typeof p == "string" ? { [p]: h } : p;
      return Object.assign(this.errors, f), this.hasErrors = Object.keys(this.errors).length > 0, l == null || l.setErrors(f), this;
    },
    clearErrors(...p) {
      return this.errors = Object.keys(this.errors).reduce(
        (h, f) => ({
          ...h,
          ...p.length > 0 && !p.includes(f) ? { [f]: this.errors[f] } : {}
        }),
        {}
      ), this.hasErrors = Object.keys(this.errors).length > 0, l && (p.length === 0 ? l.setErrors({}) : p.forEach(l.forgetError)), this;
    },
    resetAndClearErrors(...p) {
      return this.reset(...p), this.clearErrors(...p), this;
    },
    submit(...p) {
      const { method: h, url: f, options: y } = ua.parseSubmitArguments(p, n);
      d = !1;
      const x = {
        ...y,
        onCancelToken: (A) => {
          if (s = A, y.onCancelToken)
            return y.onCancelToken(A);
        },
        onBefore: (A) => {
          if (this.wasSuccessful = !1, this.recentlySuccessful = !1, clearTimeout(i), y.onBefore)
            return y.onBefore(A);
        },
        onStart: (A) => {
          if (this.processing = !0, y.onStart)
            return y.onStart(A);
        },
        onProgress: (A) => {
          if (this.progress = A ?? null, y.onProgress)
            return y.onProgress(A);
        },
        onSuccess: async (A) => {
          this.processing = !1, this.progress = null, this.clearErrors(), this.wasSuccessful = !0, this.recentlySuccessful = !0, i = setTimeout(
            () => this.recentlySuccessful = !1,
            Aa.get("form.recentlySuccessfulDuration")
          );
          const T = y.onSuccess ? await y.onSuccess(A) : null;
          return d || (o = Ve(this.data()), this.isDirty = !1), T;
        },
        onError: (A) => {
          if (this.processing = !1, this.progress = null, this.clearErrors().setError(A), y.onError)
            return y.onError(A);
        },
        onCancel: () => {
          if (this.processing = !1, this.progress = null, y.onCancel)
            return y.onCancel();
        },
        onFinish: (A) => {
          if (this.processing = !1, this.progress = null, s = null, y.onFinish)
            return y.onFinish(A);
        }
      }, P = u(this.data());
      h === "delete" ? ke.delete(f, { ...x, data: P }) : ke[h](f, P, x);
    },
    get(p, h) {
      this.submit("get", p, h);
    },
    post(p, h) {
      this.submit("post", p, h);
    },
    put(p, h) {
      this.submit("put", p, h);
    },
    patch(p, h) {
      this.submit("patch", p, h);
    },
    delete(p, h) {
      this.submit("delete", p, h);
    },
    cancel() {
      s && s.cancel();
    },
    dontRemember(...p) {
      return c = p, this;
    },
    __rememberable: t === null,
    __remember() {
      const p = this.data();
      if (c.length > 0) {
        const h = { ...p };
        return c.forEach((f) => delete h[f]), { data: h, errors: this.errors };
      }
      return { data: p, errors: this.errors };
    },
    __restore(p) {
      Object.assign(this, p.data), this.setError(p.errors);
    }
  });
  return re(
    v,
    (p) => {
      v.isDirty = !or(v.data(), o);
      const h = ke.restore(t), f = Ve(p.__remember());
      t && !or(h, f) && ke.remember(f, t);
    },
    { immediate: !0, deep: !0 }
  ), n ? v.withPrecognition(n) : v;
}
var tt = j(void 0), qe = j(), Os = Pn(null), Zn = j(void 0), _c;
K({
  name: "Inertia",
  props: {
    initialPage: {
      type: Object,
      required: !0
    },
    initialComponent: {
      type: Object,
      required: !1
    },
    resolveComponent: {
      type: Function,
      required: !1
    },
    titleCallback: {
      type: Function,
      required: !1,
      default: (e) => e
    },
    onHeadUpdate: {
      type: Function,
      required: !1,
      default: () => () => {
      }
    }
  },
  setup({ initialPage: e, initialComponent: t, resolveComponent: r, titleCallback: n, onHeadUpdate: a }) {
    tt.value = t ? $s(t) : void 0, qe.value = { ...e, flash: e.flash ?? {} }, Zn.value = void 0;
    const o = typeof window > "u";
    return _c = pO(o, n || ((s) => s), a || (() => {
    })), o || (ke.init({
      initialPage: e,
      resolveComponent: r,
      swapComponent: async (s) => {
        tt.value = $s(s.component), qe.value = s.page, Zn.value = s.preserveState ? Zn.value : Date.now();
      },
      onFlash: (s) => {
        qe.value = { ...qe.value, flash: s };
      }
    }), ke.on("navigate", () => _c.forceUpdate())), () => {
      if (tt.value) {
        tt.value.inheritAttrs = !!tt.value.inheritAttrs;
        const s = Ne(tt.value, {
          ...qe.value.props,
          key: Zn.value
        });
        return Os.value && (tt.value.layout = Os.value, Os.value = null), tt.value.layout ? typeof tt.value.layout == "function" ? tt.value.layout(Ne, s) : (Array.isArray(tt.value.layout) ? tt.value.layout : [tt.value.layout]).concat(s).reverse().reduce((i, u) => (u.inheritAttrs = !!u.inheritAttrs, Ne(u, { ...qe.value.props }, () => i))) : s;
      }
    };
  }
});
function nl() {
  return On({
    props: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.props;
    }),
    url: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.url;
    }),
    component: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.component;
    }),
    version: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.version;
    }),
    clearHistory: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.clearHistory;
    }),
    deferredProps: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.deferredProps;
    }),
    mergeProps: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.mergeProps;
    }),
    prependProps: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.prependProps;
    }),
    deepMergeProps: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.deepMergeProps;
    }),
    matchPropsOn: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.matchPropsOn;
    }),
    rememberedState: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.rememberedState;
    }),
    encryptHistory: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.encryptHistory;
    }),
    scrollProps: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.scrollProps;
    }),
    flash: I(() => {
      var e;
      return (e = qe.value) == null ? void 0 : e.flash;
    })
  });
}
var GO = K({
  name: "Deferred",
  props: {
    data: {
      type: [String, Array],
      required: !0
    }
  },
  render() {
    var t, r;
    const e = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data];
    if (!this.$slots.fallback)
      throw new Error("`<Deferred>` requires a `<template #fallback>` slot");
    return e.every((n) => this.$page.props[n] !== void 0) ? (r = (t = this.$slots).default) == null ? void 0 : r.call(t) : this.$slots.fallback();
  }
}), Vt = () => {
}, JO = /* @__PURE__ */ Symbol("InertiaFormContext");
K({
  name: "Form",
  slots: Object,
  props: {
    action: {
      type: [String, Object],
      default: ""
    },
    method: {
      type: String,
      default: "get"
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    queryStringArrayFormat: {
      type: String,
      default: "brackets"
    },
    errorBag: {
      type: [String, null],
      default: null
    },
    showProgress: {
      type: Boolean,
      default: !0
    },
    transform: {
      type: Function,
      default: (e) => e
    },
    options: {
      type: Object,
      default: () => ({})
    },
    resetOnError: {
      type: [Boolean, Array],
      default: !1
    },
    resetOnSuccess: {
      type: [Boolean, Array],
      default: !1
    },
    setDefaultsOnSuccess: {
      type: Boolean,
      default: !1
    },
    onCancelToken: {
      type: Function,
      default: Vt
    },
    onBefore: {
      type: Function,
      default: Vt
    },
    onStart: {
      type: Function,
      default: Vt
    },
    onProgress: {
      type: Function,
      default: Vt
    },
    onFinish: {
      type: Function,
      default: Vt
    },
    onCancel: {
      type: Function,
      default: Vt
    },
    onSuccess: {
      type: Function,
      default: Vt
    },
    onError: {
      type: Function,
      default: Vt
    },
    onSubmitComplete: {
      type: Function,
      default: Vt
    },
    disableWhileProcessing: {
      type: Boolean,
      default: !1
    },
    invalidateCacheTags: {
      type: [String, Array],
      default: () => []
    },
    validateFiles: {
      type: Boolean,
      default: !1
    },
    validationTimeout: {
      type: Number,
      default: 1500
    },
    withAllErrors: {
      type: Boolean,
      default: null
    }
  },
  setup(e, { slots: t, attrs: r, expose: n }) {
    const a = () => {
      const [T, $] = p();
      return e.transform($);
    }, o = rl({}).withPrecognition(
      () => i.value,
      () => p()[0]
    ).transform(a).setValidationTimeout(e.validationTimeout);
    e.validateFiles && o.validateFiles(), (e.withAllErrors ?? lr.get("form.withAllErrors")) && o.withAllErrors();
    const s = j(), i = I(
      () => Ht(e.action) ? e.action.method : e.method.toLowerCase()
    ), u = j(!1), l = j(new FormData()), c = (T) => {
      var $;
      T.type === "reset" && (($ = T.detail) != null && $[mp]) && T.preventDefault(), u.value = T.type === "reset" ? !1 : !or(v(), Tc(l.value));
    }, d = ["input", "change", "reset"];
    me(() => {
      l.value = m(), o.defaults(v()), d.forEach((T) => s.value.addEventListener(T, c));
    }), re(
      () => e.validateFiles,
      (T) => T ? o.validateFiles() : o.withoutFileValidation()
    ), re(
      () => e.validationTimeout,
      (T) => o.setValidationTimeout(T)
    ), pi(() => d.forEach((T) => {
      var $;
      return ($ = s.value) == null ? void 0 : $.removeEventListener(T, c);
    }));
    const m = (T) => new FormData(s.value, T), v = (T) => Tc(m(T)), p = (T) => Xa(
      i.value,
      Ht(e.action) ? e.action.url : e.action,
      v(T),
      e.queryStringArrayFormat
    ), h = (T) => {
      const [$, O] = p(T);
      if ((T == null ? void 0 : T.getAttribute("formtarget")) === "_blank" && i.value === "get") {
        window.open($, "_blank");
        return;
      }
      const M = (R) => {
        R && (R === !0 ? f() : R.length > 0 && f(...R));
      }, D = {
        headers: e.headers,
        queryStringArrayFormat: e.queryStringArrayFormat,
        errorBag: e.errorBag,
        showProgress: e.showProgress,
        invalidateCacheTags: e.invalidateCacheTags,
        onCancelToken: e.onCancelToken,
        onBefore: e.onBefore,
        onStart: e.onStart,
        onProgress: e.onProgress,
        onFinish: e.onFinish,
        onCancel: e.onCancel,
        onSuccess: (...R) => {
          var g, C;
          (g = e.onSuccess) == null || g.call(e, ...R), (C = e.onSubmitComplete) == null || C.call(e, A), M(e.resetOnSuccess), e.setDefaultsOnSuccess === !0 && P();
        },
        onError: (...R) => {
          var g;
          (g = e.onError) == null || g.call(e, ...R), M(e.resetOnError);
        },
        ...e.options
      };
      o.transform(() => e.transform(O)).submit(i.value, $, D), o.transform(a);
    }, f = (...T) => {
      qO(s.value, l.value, T), o.reset(...T);
    }, y = (...T) => {
      o.clearErrors(...T);
    }, x = (...T) => {
      y(...T), f(...T);
    }, P = () => {
      l.value = m(), u.value = !1;
    }, A = {
      get errors() {
        return o.errors;
      },
      get hasErrors() {
        return o.hasErrors;
      },
      get processing() {
        return o.processing;
      },
      get progress() {
        return o.progress;
      },
      get wasSuccessful() {
        return o.wasSuccessful;
      },
      get recentlySuccessful() {
        return o.recentlySuccessful;
      },
      get validating() {
        return o.validating;
      },
      clearErrors: y,
      resetAndClearErrors: x,
      setError: (T, $) => o.setError(typeof T == "string" ? { [T]: $ } : T),
      get isDirty() {
        return u.value;
      },
      reset: f,
      submit: h,
      defaults: P,
      getData: v,
      getFormData: m,
      // Precognition
      touch: o.touch,
      valid: o.valid,
      invalid: o.invalid,
      touched: o.touched,
      validate: (T, $) => o.validate(...ua.mergeHeadersForValidation(T, $, e.headers)),
      validator: () => o.validator()
    };
    return n(A), Cn(JO, A), () => Ne(
      "form",
      {
        ...r,
        ref: s,
        action: Ht(e.action) ? e.action.url : e.action,
        method: i.value,
        onSubmit: (T) => {
          T.preventDefault(), h(T.submitter);
        },
        inert: e.disableWhileProcessing && o.processing
      },
      t.default ? t.default(A) : []
    );
  }
});
K({
  props: {
    title: {
      type: String,
      required: !1
    }
  },
  data() {
    return {
      provider: this.$headManager.createProvider()
    };
  },
  beforeUnmount() {
    this.provider.disconnect();
  },
  methods: {
    isUnaryTag(e) {
      return typeof e.type == "string" && [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ].indexOf(e.type) > -1;
    },
    renderTagStart(e) {
      e.props = e.props || {}, e.props[this.provider.preferredAttribute()] = e.props["head-key"] !== void 0 ? e.props["head-key"] : "";
      const t = Object.keys(e.props).reduce((r, n) => {
        const a = String(e.props[n]);
        return ["key", "head-key"].includes(n) ? r : a === "" ? r + ` ${n}` : r + ` ${n}="${hu(a)}"`;
      }, "");
      return `<${String(e.type)}${t}>`;
    },
    renderTagChildren(e) {
      const { children: t } = e;
      return typeof t == "string" ? t : Array.isArray(t) ? t.reduce((r, n) => r + this.renderTag(n), "") : "";
    },
    isFunctionNode(e) {
      return typeof e.type == "function";
    },
    isComponentNode(e) {
      return typeof e.type == "object";
    },
    isCommentNode(e) {
      return /(comment|cmt)/i.test(e.type.toString());
    },
    isFragmentNode(e) {
      return /(fragment|fgt|symbol\(\))/i.test(e.type.toString());
    },
    isTextNode(e) {
      return /(text|txt)/i.test(e.type.toString());
    },
    renderTag(e) {
      if (this.isTextNode(e))
        return String(e.children);
      if (this.isFragmentNode(e))
        return "";
      if (this.isCommentNode(e))
        return "";
      let t = this.renderTagStart(e);
      return e.children && (t += this.renderTagChildren(e)), this.isUnaryTag(e) || (t += `</${String(e.type)}>`), t;
    },
    addTitleElement(e) {
      return this.title && !e.find((t) => t.startsWith("<title")) && e.push(`<title ${this.provider.preferredAttribute()}>${hu(this.title)}</title>`), e;
    },
    renderNodes(e) {
      const t = e.flatMap((r) => this.resolveNode(r)).map((r) => this.renderTag(r)).filter((r) => r);
      return this.addTitleElement(t);
    },
    resolveNode(e) {
      return this.isFunctionNode(e) ? this.resolveNode(e.type()) : this.isComponentNode(e) ? (console.warn("Using components in the <Head> component is not supported."), []) : this.isTextNode(e) && e.children ? e : this.isFragmentNode(e) && e.children ? e.children.flatMap((t) => this.resolveNode(t)) : this.isCommentNode(e) ? [] : e;
    }
  },
  render() {
    this.provider.update(this.renderNodes(this.$slots.default ? this.$slots.default() : []));
  }
});
var As = (e, t) => e ? typeof e == "string" ? document.querySelector(e) : typeof e == "function" ? e() || null : t : t;
K({
  name: "InfiniteScroll",
  slots: Object,
  props: {
    data: {
      type: String,
      required: !0
    },
    buffer: {
      type: Number,
      default: 0
    },
    onlyNext: {
      type: Boolean,
      default: !1
    },
    onlyPrevious: {
      type: Boolean,
      default: !1
    },
    as: {
      type: String,
      default: "div"
    },
    manual: {
      type: Boolean,
      default: !1
    },
    manualAfter: {
      type: Number,
      default: 0
    },
    preserveUrl: {
      type: Boolean,
      default: !1
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    autoScroll: {
      type: Boolean,
      default: void 0
    },
    itemsElement: {
      type: [String, Function, Object],
      default: null
    },
    startElement: {
      type: [String, Function, Object],
      default: null
    },
    endElement: {
      type: [String, Function, Object],
      default: null
    }
  },
  inheritAttrs: !1,
  setup(e, { slots: t, attrs: r, expose: n }) {
    var O;
    const a = j(null), o = j(null), s = j(null), i = I(
      () => As(e.itemsElement, a.value)
    ), u = I(() => KP(i.value)), l = I(
      () => As(e.startElement, o.value)
    ), c = I(() => As(e.endElement, s.value)), d = j(!1), m = j(!1), v = j(0), p = j(!1), h = j(!1), f = () => {
      v.value = y.getRequestCount(), p.value = y.hasPrevious(), h.value = y.hasNext();
    }, {
      dataManager: y,
      elementManager: x,
      flush: P
    } = xO({
      // Data
      getPropName: () => e.data,
      inReverseMode: () => e.reverse,
      shouldFetchNext: () => !e.onlyPrevious,
      shouldFetchPrevious: () => !e.onlyNext,
      shouldPreserveUrl: () => e.preserveUrl,
      // Elements
      getTriggerMargin: () => e.buffer,
      getStartElement: () => l.value,
      getEndElement: () => c.value,
      getItemsElement: () => i.value,
      getScrollableParent: () => u.value,
      // Request callbacks
      onBeforePreviousRequest: () => d.value = !0,
      onBeforeNextRequest: () => m.value = !0,
      onCompletePreviousRequest: () => {
        d.value = !1, f();
      },
      onCompleteNextRequest: () => {
        m.value = !1, f();
      },
      onDataReset: f
    });
    if (f(), typeof window > "u") {
      const _ = (O = nl().scrollProps) == null ? void 0 : O[e.data];
      _ && (p.value = !!_.previousPage, h.value = !!_.nextPage);
    }
    const A = I(() => !T.value), T = I(
      () => e.manual || e.manualAfter > 0 && v.value >= e.manualAfter
    ), $ = () => {
      u.value ? u.value.scrollTo({
        top: u.value.scrollHeight,
        behavior: "instant"
      }) : window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "instant"
      });
    };
    return me(() => {
      x.setupObservers(), x.processServerLoadedElements(y.getLastLoadedPage()), (e.autoScroll !== void 0 ? e.autoScroll : e.reverse) && $(), A.value && x.enableTriggers();
    }), It(P), re(
      () => [A.value, e.onlyNext, e.onlyPrevious],
      ([_]) => {
        _ ? x.enableTriggers() : x.disableTriggers();
      }
    ), n({
      fetchNext: y.fetchNext,
      fetchPrevious: y.fetchPrevious,
      hasPrevious: y.hasPrevious,
      hasNext: y.hasNext
    }), () => {
      var D, R, g;
      const _ = [], M = {
        loadingPrevious: d.value,
        loadingNext: m.value,
        hasPrevious: p.value,
        hasNext: h.value
      };
      if (!e.startElement) {
        const C = A.value && !e.onlyNext, S = {
          loading: d.value,
          fetch: y.fetchPrevious,
          autoMode: C,
          manualMode: !C,
          hasMore: p.value,
          ...M
        };
        _.push(
          Ne(
            "div",
            { ref: o },
            t.previous ? t.previous(S) : d.value ? (D = t.loading) == null ? void 0 : D.call(t, S) : void 0
          )
        );
      }
      if (_.push(
        Ne(
          e.as,
          { ...r, ref: a },
          (R = t.default) == null ? void 0 : R.call(t, {
            loading: d.value || m.value,
            loadingPrevious: d.value,
            loadingNext: m.value
          })
        )
      ), !e.endElement) {
        const C = A.value && !e.onlyPrevious, S = {
          loading: m.value,
          fetch: y.fetchNext,
          autoMode: C,
          manualMode: !C,
          hasMore: h.value,
          ...M
        };
        _.push(
          Ne(
            "div",
            { ref: s },
            t.next ? t.next(S) : m.value ? (g = t.loading) == null ? void 0 : g.call(t, S) : void 0
          )
        );
      }
      return Ne(ne, {}, e.reverse ? [..._].reverse() : _);
    };
  }
});
var Tt = () => {
};
K({
  name: "Link",
  props: {
    as: {
      type: [String, Object],
      default: "a"
    },
    data: {
      type: Object,
      default: () => ({})
    },
    href: {
      type: [String, Object],
      default: ""
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
      type: [Boolean, String, Function],
      default: !1
    },
    preserveState: {
      type: [Boolean, String, Function],
      default: null
    },
    preserveUrl: {
      type: Boolean,
      default: !1
    },
    only: {
      type: Array,
      default: () => []
    },
    except: {
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
    },
    async: {
      type: Boolean,
      default: !1
    },
    prefetch: {
      type: [Boolean, String, Array],
      default: !1
    },
    cacheFor: {
      type: [Number, String, Array],
      default: 0
    },
    onStart: {
      type: Function,
      default: Tt
    },
    onProgress: {
      type: Function,
      default: Tt
    },
    onFinish: {
      type: Function,
      default: Tt
    },
    onBefore: {
      type: Function,
      default: Tt
    },
    onCancel: {
      type: Function,
      default: Tt
    },
    onSuccess: {
      type: Function,
      default: Tt
    },
    onError: {
      type: Function,
      default: Tt
    },
    onCancelToken: {
      type: Function,
      default: Tt
    },
    onPrefetching: {
      type: Function,
      default: Tt
    },
    onPrefetched: {
      type: Function,
      default: Tt
    },
    cacheTags: {
      type: [String, Array],
      default: () => []
    },
    viewTransition: {
      type: [Boolean, Object],
      default: !1
    }
  },
  setup(e, { slots: t, attrs: r }) {
    const n = j(0), a = j(), o = I(() => e.prefetch === !0 ? ["hover"] : e.prefetch === !1 ? [] : Array.isArray(e.prefetch) ? e.prefetch : [e.prefetch]), s = I(() => e.cacheFor !== 0 ? e.cacheFor : o.value.length === 1 && o.value[0] === "click" ? 0 : Aa.get("prefetch.cacheFor"));
    me(() => {
      o.value.includes("mount") && h();
    }), It(() => {
      clearTimeout(a.value);
    });
    const i = I(
      () => Ht(e.href) ? e.href.method : (e.method ?? "get").toLowerCase()
    ), u = I(() => typeof e.as != "string" || e.as.toLowerCase() !== "a" ? e.as : i.value !== "get" ? "button" : e.as.toLowerCase()), l = I(
      () => Xa(
        i.value,
        Ht(e.href) ? e.href.url : e.href,
        e.data || {},
        e.queryStringArrayFormat
      )
    ), c = I(() => l.value[0]), d = I(() => l.value[1]), m = I(() => u.value === "button" ? { type: "button" } : u.value === "a" || typeof u.value != "string" ? { href: c.value } : {}), v = I(() => ({
      data: d.value,
      method: i.value,
      replace: e.replace,
      preserveScroll: e.preserveScroll,
      preserveState: e.preserveState ?? i.value !== "get",
      preserveUrl: e.preserveUrl,
      only: e.only,
      except: e.except,
      headers: e.headers,
      async: e.async
    })), p = I(() => ({
      ...v.value,
      viewTransition: e.viewTransition,
      onCancelToken: e.onCancelToken,
      onBefore: e.onBefore,
      onStart: (P) => {
        var A;
        n.value++, (A = e.onStart) == null || A.call(e, P);
      },
      onProgress: e.onProgress,
      onFinish: (P) => {
        var A;
        n.value--, (A = e.onFinish) == null || A.call(e, P);
      },
      onCancel: e.onCancel,
      onSuccess: e.onSuccess,
      onError: e.onError
    })), h = () => {
      ke.prefetch(
        c.value,
        {
          ...v.value,
          onPrefetching: e.onPrefetching,
          onPrefetched: e.onPrefetched
        },
        {
          cacheFor: s.value,
          cacheTags: e.cacheTags
        }
      );
    }, f = {
      onClick: (P) => {
        cn(P) && (P.preventDefault(), ke.visit(c.value, p.value));
      }
    }, y = {
      onMouseenter: () => {
        a.value = setTimeout(() => {
          h();
        }, Aa.get("prefetch.hoverDelay"));
      },
      onMouseleave: () => {
        clearTimeout(a.value);
      },
      onClick: f.onClick
    }, x = {
      onMousedown: (P) => {
        cn(P) && (P.preventDefault(), h());
      },
      onKeydown: (P) => {
        $c(P) && (P.preventDefault(), h());
      },
      onMouseup: (P) => {
        cn(P) && (P.preventDefault(), ke.visit(c.value, p.value));
      },
      onKeyup: (P) => {
        $c(P) && (P.preventDefault(), ke.visit(c.value, p.value));
      },
      onClick: (P) => {
        cn(P) && P.preventDefault();
      }
    };
    return () => Ne(
      u.value,
      {
        ...r,
        ...m.value,
        "data-loading": n.value > 0 ? "" : void 0,
        ...o.value.includes("hover") ? y : o.value.includes("click") ? x : f
      },
      t
    );
  }
});
K({
  name: "WhenVisible",
  slots: Object,
  props: {
    data: {
      type: [String, Array]
    },
    params: {
      type: Object
    },
    buffer: {
      type: Number,
      default: 0
    },
    as: {
      type: String,
      default: "div"
    },
    always: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      loaded: !1,
      fetching: !1,
      observer: null
    };
  },
  unmounted() {
    var e;
    (e = this.observer) == null || e.disconnect();
  },
  computed: {
    keys() {
      return this.data ? Array.isArray(this.data) ? this.data : [this.data] : [];
    }
  },
  created() {
    const e = nl();
    this.$watch(
      () => this.keys.map((t) => e.props[t]),
      () => {
        const t = this.keys.length > 0 && this.keys.every((r) => e.props[r] !== void 0);
        this.loaded = t, !(t && !this.always) && (!this.observer || !t) && this.$nextTick(this.registerObserver);
      },
      { immediate: !0 }
    );
  },
  methods: {
    registerObserver() {
      var e;
      typeof window > "u" || ((e = this.observer) == null || e.disconnect(), this.observer = new IntersectionObserver(
        (t) => {
          if (!t[0].isIntersecting || this.fetching || !this.always && this.loaded)
            return;
          this.fetching = !0;
          const r = this.getReloadParams();
          ke.reload({
            ...r,
            onStart: (n) => {
              var a;
              this.fetching = !0, (a = r.onStart) == null || a.call(r, n);
            },
            onFinish: (n) => {
              var a, o;
              this.loaded = !0, this.fetching = !1, (a = r.onFinish) == null || a.call(r, n), this.always || (o = this.observer) == null || o.disconnect();
            }
          });
        },
        {
          rootMargin: `${this.$props.buffer}px`
        }
      ), this.observer.observe(this.$el.nextSibling));
    },
    getReloadParams() {
      const e = { ...this.$props.params };
      return this.$props.data && (e.only = Array.isArray(this.$props.data) ? this.$props.data : [this.$props.data]), e;
    }
  },
  render() {
    const e = [];
    return (this.$props.always || !this.loaded) && e.push(Ne(this.$props.as)), this.loaded ? this.$slots.default && e.push(this.$slots.default({ fetching: this.fetching })) : e.push(this.$slots.fallback ? this.$slots.fallback({}) : null), e;
  }
});
var Aa = lr.extend({});
function Q$(e) {
  return e.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function YO(e) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(e);
}
function Z$(e) {
  return nl().props.auth.permissions.includes(e);
}
let si = null;
function eD(e) {
  si = e;
}
function eo() {
  return si === null && console.error(
    `Inertia router is not set. Please set it first:

// app.js
import { setInertiaRouter } from '@nb/vue-components';
import { router } from '@inertiajs/vue3';
// createInertiaApp(...);
setInertiaRouter(router);

`
  ), si;
}
let ii = null;
function tD(e) {
  ii = e;
}
function bp() {
  return ii === null && console.error(
    `Inertia page is not set. Please set it first:

// app.js
import { setInertiaPage } from '@nb/vue-components';
// createInertiaApp(...);
setInertiaPage(page);

`
  ), ii;
}
const xt = K({
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
        n = eo();
      } catch {
        console.log("InertiaLink: Router not available, preventing navigation"), n = {
          visit: (l, c) => {
            console.log("InertiaLink: Navigation prevented (docs environment):", l);
          }
        };
      }
      const a = e.as.toLowerCase(), o = e.method.toLowerCase(), [s, i] = Xa(
        o,
        e.href || "",
        e.data,
        e.queryStringArrayFormat
      );
      return a === "a" && o !== "get" && console.warn(
        `Creating POST/PUT/PATCH/DELETE <a> links is discouraged as it causes "Open Link in New Tab/Window" accessibility issues.

Please specify a more appropriate element using the "as" attribute. For example:

<Link href="${s}" method="${o}" as="button">...</Link>`
      ), Ne(
        e.as,
        {
          ...r,
          ...a === "a" ? { href: s } : {},
          onClick: (u) => {
            cn(u) && (u.preventDefault(), n.visit(s, {
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
function Ln(e, t, r, n) {
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
function Mn(e, t) {
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
function XO(e, t) {
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
function QO() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(XO(arguments[t]));
  return e;
}
var ZO = /* @__PURE__ */ new Map([
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
function to(e, t) {
  var r = eA(e);
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
function eA(e) {
  var t = e.name, r = t && t.lastIndexOf(".") !== -1;
  if (r && !e.type) {
    var n = t.split(".").pop().toLowerCase(), a = ZO.get(n);
    a && Object.defineProperty(e, "type", {
      value: a,
      writable: !1,
      configurable: !1,
      enumerable: !0
    });
  }
  return e;
}
var tA = [
  // Thumbnail cache files for macOS and Windows
  ".DS_Store",
  "Thumbs.db"
  // Windows
];
function rA(e) {
  return Ln(this, void 0, void 0, function() {
    return Mn(this, function(t) {
      return [2, nA(e) && e.dataTransfer ? sA(e.dataTransfer, e.type) : aA(e)];
    });
  });
}
function nA(e) {
  return !!e.dataTransfer;
}
function aA(e) {
  var t = oA(e.target) ? e.target.files ? li(e.target.files) : [] : [];
  return t.map(function(r) {
    return to(r);
  });
}
function oA(e) {
  return e !== null;
}
function sA(e, t) {
  return Ln(this, void 0, void 0, function() {
    var r, n;
    return Mn(this, function(a) {
      switch (a.label) {
        case 0:
          return e.items ? (r = li(e.items).filter(function(o) {
            return o.kind === "file";
          }), t !== "drop" ? [2, r] : [4, Promise.all(r.map(iA))]) : [3, 2];
        case 1:
          return n = a.sent(), [2, qc(wp(n))];
        case 2:
          return [2, qc(li(e.files).map(function(o) {
            return to(o);
          }))];
      }
    });
  });
}
function qc(e) {
  return e.filter(function(t) {
    return tA.indexOf(t.name) === -1;
  });
}
function li(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    t.push(n);
  }
  return t;
}
function iA(e) {
  if (typeof e.webkitGetAsEntry != "function")
    return Bc(e);
  var t = e.webkitGetAsEntry();
  return t && t.isDirectory ? xp(t) : Bc(e);
}
function wp(e) {
  return e.reduce(function(t, r) {
    return QO(t, Array.isArray(r) ? wp(r) : [r]);
  }, []);
}
function Bc(e) {
  var t = e.getAsFile();
  if (!t)
    return Promise.reject(e + " is not a File");
  var r = to(t);
  return Promise.resolve(r);
}
function lA(e) {
  return Ln(this, void 0, void 0, function() {
    return Mn(this, function(t) {
      return [2, e.isDirectory ? xp(e) : uA(e)];
    });
  });
}
function xp(e) {
  var t = e.createReader();
  return new Promise(function(r, n) {
    var a = [];
    function o() {
      var s = this;
      t.readEntries(function(i) {
        return Ln(s, void 0, void 0, function() {
          var u, l, c;
          return Mn(this, function(d) {
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
                c = Promise.all(i.map(lA)), a.push(c), o(), d.label = 6;
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
function uA(e) {
  return Ln(this, void 0, void 0, function() {
    return Mn(this, function(t) {
      return [2, new Promise(function(r, n) {
        e.file(function(a) {
          var o = to(a, e.fullPath);
          r(o);
        }, function(a) {
          n(a);
        });
      })];
    });
  });
}
var ea = {}, Ic;
function cA() {
  return Ic || (Ic = 1, ea.__esModule = !0, ea.default = function(e, t) {
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
  }), ea;
}
var dA = cA();
const Sp = /* @__PURE__ */ nE(dA);
var rt = function() {
  return rt = Object.assign || function(t) {
    for (var r, n = 1, a = arguments.length; n < a; n++) {
      r = arguments[n];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, rt.apply(this, arguments);
};
function Lc(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
function fA(e, t, r, n) {
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
function pA(e, t) {
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
function ui(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, o; n < a; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
function hA(e) {
  return e.includes("MSIE") || e.includes("Trident/");
}
function mA(e) {
  return e.includes("Edge/");
}
function yA(e) {
  return e === void 0 && (e = window.navigator.userAgent), hA(e) || mA(e);
}
function Mc(e) {
  e.preventDefault();
}
function ta(e) {
  return e.dataTransfer ? Array.prototype.some.call(e.dataTransfer.types, function(t) {
    return t === "Files" || t === "application/x-moz-file";
  }) : !!e.target && !!e.target.files;
}
function ka(e) {
  return typeof e.isPropagationStopped == "function" ? e.isPropagationStopped() : typeof e.cancelBubble < "u" ? e.cancelBubble : !1;
}
var gA = "file-invalid-type", vA = "file-too-large", bA = "file-too-small", wA = "too-many-files", xA = {
  code: wA,
  message: "Too many files"
}, SA = function(e) {
  e = Array.isArray(e) && e.length === 1 ? e[0] : e;
  var t = Array.isArray(e) ? "one of ".concat(e.join(", ")) : e;
  return {
    code: gA,
    message: "File type must be ".concat(t)
  };
};
function ln(e) {
  return e != null;
}
var EA = Sp.default, CA = EA || Sp;
function Ep(e, t) {
  var r = e.type === "application/x-moz-file" || CA(e, t);
  return [r, r ? null : SA(t)];
}
var Nc = function(e) {
  return {
    code: vA,
    message: "File is larger than ".concat(e, " bytes")
  };
}, jc = function(e) {
  return {
    code: bA,
    message: "File is smaller than ".concat(e, " bytes")
  };
};
function Cp(e, t, r) {
  if (ln(e.size) && e.size)
    if (ln(t) && ln(r)) {
      if (e.size > r)
        return [!1, Nc(r)];
      if (e.size < t)
        return [!1, jc(t)];
    } else {
      if (ln(t) && e.size < t)
        return [!1, jc(t)];
      if (ln(r) && e.size > r)
        return [!1, Nc(r)];
    }
  return [!0, null];
}
function Ut() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  return function(r) {
    for (var n = [], a = 1; a < arguments.length; a++)
      n[a - 1] = arguments[a];
    return e.some(function(o) {
      return !ka(r) && o && o.apply(void 0, ui([r], n, !1)), ka(r);
    });
  };
}
function PA(e) {
  var t = e.files, r = e.accept, n = e.minSize, a = e.maxSize, o = e.multiple, s = e.maxFiles;
  return !o && t.length > 1 || o && s >= 1 && t.length > s ? !1 : t.every(function(i) {
    var u = Ep(i, r)[0], l = Cp(i, n, a)[0];
    return u && l;
  });
}
var OA = {
  disabled: !1,
  getFilesFromEvent: rA,
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
function Pp(e) {
  e === void 0 && (e = {});
  var t = j(rt(rt({}, OA), e));
  re(function() {
    return rt({}, e);
  }, function(D) {
    t.value = rt(rt({}, t.value), D);
  });
  var r = j(), n = j(), a = On({
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
    var D = t.value.onFileDialogCancel;
    a.isFileDialogActive && setTimeout(function() {
      if (n.value) {
        var R = n.value.files;
        R && !R.length && (a.isFileDialogActive = !1, typeof D == "function" && D());
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
    var D = t.value.noClick;
    D || (yA() ? setTimeout(o, 0) : o());
  }
  var c = j([]), d = function(D) {
    if (r.value) {
      var R = r.value.$el || r.value;
      R.contains(D.target) || (D.preventDefault(), c.value = []);
    }
  };
  me(function() {
    window.addEventListener("focus", s, !1);
    var D = t.value.preventDropOnDocument;
    D && (document.addEventListener("dragover", Mc, !1), document.addEventListener("drop", d, !1));
  }), It(function() {
    window.removeEventListener("focus", s, !1);
    var D = t.value.preventDropOnDocument;
    D && (document.removeEventListener("dragover", Mc), document.removeEventListener("drop", d));
  });
  function m(D) {
    var R = t.value.noDragEventsBubbling;
    R && D.stopPropagation();
  }
  function v(D) {
    return fA(this, void 0, void 0, function() {
      var R, g, C, S, b;
      return pA(this, function(q) {
        switch (q.label) {
          case 0:
            return R = t.value, g = R.getFilesFromEvent, C = R.noDragEventsBubbling, S = R.onDragEnter, D.preventDefault(), m(D), c.value = ui(ui([], c.value, !0), [D.target], !1), ta(D) ? g ? [4, g(D)] : [2] : [3, 2];
          case 1:
            if (b = q.sent(), b || (b = []), ka(D) && !C)
              return [2];
            a.draggedFiles = b, a.isDragActive = !0, S && S(D), q.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }
  function p(D) {
    var R = t.value.onDragOver;
    if (D.preventDefault(), m(D), D.dataTransfer)
      try {
        D.dataTransfer.dropEffect = "copy";
      } catch {
      }
    return ta(D) && R && R(D), !1;
  }
  function h(D) {
    D.preventDefault(), m(D);
    var R = c.value.filter(function(S) {
      if (!r.value)
        return !1;
      var b = r.value.$el || r.value;
      return b.contains(S);
    }), g = R.indexOf(D.target);
    if (g !== -1 && R.splice(g, 1), c.value = R, !(R.length > 0)) {
      a.draggedFiles = [], a.isDragActive = !1;
      var C = t.value.onDragLeave;
      ta(D) && C && C(D);
    }
  }
  function f(D) {
    D.preventDefault(), m(D), c.value = [];
    var R = t.value, g = R.getFilesFromEvent, C = R.noDragEventsBubbling, S = R.accept, b = R.minSize, q = R.maxSize, B = R.multiple, k = R.maxFiles, G = R.onDrop, te = R.onDropRejected, de = R.onDropAccepted;
    if (ta(D)) {
      if (!g)
        return;
      Promise.resolve(g(D)).then(function(Be) {
        if (!(ka(D) && !C)) {
          var ie = [], ve = [];
          Be.forEach(function(ye) {
            var Ie = Ep(ye, S), _e = Ie[0], le = Ie[1], be = Cp(ye, b, q), oe = be[0], ge = be[1];
            if (_e && oe)
              ie.push(ye);
            else {
              var pe = [le, ge].filter(function(Oe) {
                return Oe;
              });
              ve.push({ file: ye, errors: pe });
            }
          }), (!B && ie.length > 1 || B && k >= 1 && ie.length > k) && (ie.forEach(function(ye) {
            ve.push({ file: ye, errors: [xA] });
          }), ie.splice(0)), a.acceptedFiles = ie, a.fileRejections = ve, G && G(ie, ve, D), ve.length > 0 && te && te(ve, D), ie.length > 0 && de && de(ie, D);
        }
      });
    }
    a.isFileDialogActive = !1, a.isDragActive = !1, a.draggedFiles = [], a.acceptedFiles = [], a.fileRejections = [];
  }
  var y = function(D) {
    return t.value.disabled ? void 0 : D;
  }, x = function(D) {
    return t.value.noKeyboard ? void 0 : y(D);
  }, P = function(D) {
    return t.value.noDrag ? void 0 : y(D);
  }, A = function(D) {
    D === void 0 && (D = {});
    var R = D.onFocus, g = D.onBlur, C = D.onClick, S = D.onDragEnter, b = D.onDragenter, q = D.onDragOver, B = D.onDragover, k = D.onDragLeave, G = D.onDragleave, te = D.onDrop, de = Lc(D, ["onFocus", "onBlur", "onClick", "onDragEnter", "onDragenter", "onDragOver", "onDragover", "onDragLeave", "onDragleave", "onDrop"]);
    return rt(rt({ onFocus: x(Ut(R, i)), onBlur: x(Ut(g, u)), onClick: y(Ut(C, l)), onDragenter: P(Ut(S, b, v)), onDragover: P(Ut(q, B, p)), onDragleave: P(Ut(k, G, h)), onDrop: P(Ut(te, f)), ref: r }, !t.value.disabled && !t.value.noKeyboard ? { tabIndex: 0 } : {}), de);
  }, T = function(D) {
    D.stopPropagation();
  };
  function $(D) {
    D === void 0 && (D = {});
    var R = D.onChange, g = D.onClick, C = Lc(D, ["onChange", "onClick"]), S = {
      accept: t.value.accept,
      multiple: t.value.multiple,
      style: "display: none",
      type: "file",
      onChange: y(Ut(R, f)),
      onClick: y(Ut(g, T)),
      autoComplete: "off",
      tabIndex: -1,
      ref: n
    };
    return rt(rt({}, S), C);
  }
  var O = I(function() {
    return a.draggedFiles ? a.draggedFiles.length : 0;
  }), _ = I(function() {
    return O.value > 0 && PA({
      files: a.draggedFiles,
      accept: t.value.accept,
      minSize: t.value.minSize,
      maxSize: t.value.maxSize,
      multiple: t.value.multiple,
      maxFiles: t.value.maxFiles
    });
  }), M = I(function() {
    return O.value > 0 && !_.value;
  });
  return rt(rt({}, Lt(a)), { isDragAccept: _, isDragReject: M, isFocused: I(function() {
    return a.isFocused && !t.value.disabled;
  }), getRootProps: A, getInputProps: $, rootRef: r, inputRef: n, open: y(o) });
}
const AA = { class: "flex w-full flex-col" }, kA = {
  key: 0,
  class: "text-black select-none"
}, TA = ["name"], $A = {
  key: 1,
  class: "select-none"
}, DA = { key: 2 }, RA = {
  key: 3,
  class: "select-none"
}, rD = {
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
    eo();
    const t = e, r = j(null), n = (l) => {
      let c = [];
      return l.split("_").join(" ").split(" ").map(function(d) {
        c.push(d[0].toUpperCase() + d.slice(1));
      }), c.join(" ");
    }, a = (l, c) => {
      var d;
      if (r.value = null, c && c.length > 0) {
        c[0].errors && (r.value = (d = c[0]) == null ? void 0 : d.errors.map((m) => m.message).join(", ")), console.error(c);
        return;
      }
      if (!l || l.length === 0) {
        r.value = `${t.field} is required`;
        return;
      }
      t.multiple ? t.form[t.field] = l : t.form[t.field] = l[0];
    }, { getRootProps: o, getInputProps: s, isDragActive: i, ...u } = Pp({
      onDrop: a,
      multiple: t.multiple,
      accept: t.accept
    });
    return (l, c) => {
      var d;
      return E(), F("div", AA, [
        N("div", {
          class: X(["border-primary-200 bg-primary-50 text-primary-200 hover:border-primary-600 hover:text-primary w-full rounded-lg border-2 border-dashed transition duration-100 ease-in-out", {
            "border-primary-400 bg-primary-100": w(i),
            "bg-primary-100 border-red-600": t.form.errors[e.field] ?? r.value,
            [e.FileDropCustomClass]: !!e.FileDropCustomClass
          }])
        }, [
          N("div", ae({ class: "p-4' flex h-20 w-full cursor-copy flex-col items-center justify-center font-medium" }, w(o)()), [
            e.label ? (E(), F("p", kA, Q(e.label), 1)) : J("", !0),
            N("input", ae(w(s)(), { name: e.field }), null, 16, TA),
            w(i) ? (E(), F("span", $A, "Drop the " + Q(n(e.field)) + " here ...", 1)) : e.form[e.field] ? (E(), F("span", DA, Q(((d = e.form[e.field]) == null ? void 0 : d.path) ?? "File prepared"), 1)) : (E(), F("span", RA, "Drag 'n' drop " + Q(n(e.field)) + " here", 1))
          ], 16)
        ], 2),
        Y(w(cr), {
          class: "mt-2",
          message: t.form.errors[e.field] ?? r.value
        }, null, 8, ["message"])
      ]);
    };
  }
}, FA = { class: "flex w-full" }, _A = { key: 0 }, qA = { key: 1 }, BA = {
  key: 0,
  class: "flex flex-wrap gap-2 p-4"
}, IA = ["onClick"], LA = ["src"], MA = ["value"], NA = { class: "flex items-center gap-4" }, jA = {
  key: 0,
  class: "text-sm text-gray-600 dark:text-gray-400"
}, VA = {
  key: 1,
  class: "mt-2"
}, UA = { class: "container mx-auto px-5 py-2 lg:px-8 lg:pt-8" }, HA = { class: "-m-1 flex flex-wrap md:-m-2" }, zA = { class: "h-full w-full p-1 shadow md:p-2" }, WA = ["src"], nD = /* @__PURE__ */ K({
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
    const t = eo(), r = e, n = rl({
      image: []
    }), a = (v, p) => `/${v.replace(".", "/")}${p ? `/${p}` : ""}`;
    function o() {
      let v = new FormData();
      n.image.forEach((p, h) => {
        v.append(`image[${h}]`, p.file);
      }), v.append("item_type", r.itemType || ""), v.append("item_id", String(r.itemId || "")), t.post(a(r.endPoint), v, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        forceFormData: !0,
        onFinish: () => {
          n.recentlySuccessful = !0, n.image = [];
        }
      });
    }
    function s(v) {
      v.forEach((p) => {
        let h = new FileReader();
        h.onload = (f) => {
          n.image.push({ file: p, dataUrl: f.target.result });
        }, h.readAsDataURL(p);
      });
    }
    const i = (v, p) => {
      if (p && p.length > 0) {
        console.error(p);
        return;
      }
      s(v);
    };
    function u(v) {
      n.image.splice(v, 1);
    }
    const { getRootProps: l, getInputProps: c, isDragActive: d } = Pp({
      onDrop: i,
      multiple: !0,
      accept: "image/*"
    }), m = j(!1);
    return (v, p) => (E(), F(ne, null, [
      e.canUpload ? (E(), F("form", {
        key: 0,
        onSubmit: wt(o, ["prevent"]),
        class: "w-full"
      }, [
        N("div", FA, [
          N("div", {
            class: X(["border-primary-200 bg-primary-50 hover:border-primary-600 hover:text-primary w-full rounded-l-lg border-2 border-r-0 border-dashed transition duration-100 ease-in-out", { "border-primary-400 bg-primary-100": m.value }])
          }, [
            N("div", ae({ class: "p-4' flex h-20 w-full cursor-copy items-center justify-center font-medium" }, w(l)()), [
              N("input", Pe(De(w(c)())), null, 16),
              w(d) ? (E(), F("span", _A, "Drop the files here ...")) : (E(), F("span", qA, "Drag 'n' drop images here"))
            ], 16),
            w(n).image.length > 0 ? (E(), F("div", BA, [
              (E(!0), F(ne, null, Ce(w(n).image, (h, f) => (E(), F("div", {
                class: "relative cursor-pointer select-none",
                onClick: (y) => u(f),
                key: f
              }, [
                p[0] || (p[0] = N("div", { class: "absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 font-bold text-white" }, " - ", -1)),
                N("img", {
                  src: h.dataUrl,
                  class: "h-auto max-w-[150px]"
                }, null, 8, LA)
              ], 8, IA))), 128))
            ])) : J("", !0)
          ], 2),
          Y(w(p$), {
            class: X(["inline rounded-l-none", { "cursor-not-allowed": w(n).image.length == 0 }]),
            disabled: w(n).image.length == 0
          }, {
            default: V(() => [...p[1] || (p[1] = [
              fe(" Upload ", -1)
            ])]),
            _: 1
          }, 8, ["class", "disabled"]),
          w(n).progress ? (E(), F("progress", {
            key: 0,
            value: w(n).progress.percentage,
            max: "100"
          }, Q(w(n).progress.percentage) + "%", 9, MA)) : J("", !0)
        ]),
        v.$page.props.errors.image ? (E(), W(w(cr), {
          key: 0,
          class: "mt-2",
          message: v.$page.props.errors.image
        }, null, 8, ["message"])) : J("", !0),
        N("div", NA, [
          Y(yr, {
            "enter-from-class": "opacity-0",
            "leave-to-class": "opacity-0",
            class: "transition ease-in-out"
          }, {
            default: V(() => [
              w(n).recentlySuccessful ? (E(), F("p", jA, "Images uploaded.")) : J("", !0)
            ]),
            _: 1
          })
        ])
      ], 32)) : J("", !0),
      e.images.length ? (E(), F("div", VA, [
        p[3] || (p[3] = N("hr", null, null, -1)),
        N("div", UA, [
          N("div", HA, [
            (E(!0), F(ne, null, Ce(e.images, (h, f) => (E(), F("div", {
              key: f,
              class: "flex w-1/3 flex-wrap"
            }, [
              N("div", zA, [
                N("img", {
                  alt: "gallery",
                  class: "block h-auto w-auto rounded-lg object-cover object-center",
                  src: h.url
                }, null, 8, WA),
                e.canUpload ? (E(), W(w(xt), {
                  key: 0,
                  href: a("images.delete", h.id),
                  method: "delete",
                  class: "mt-1 w-full items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-center text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out hover:bg-red-500 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-hidden active:bg-red-700",
                  as: "button"
                }, {
                  default: V(() => [...p[2] || (p[2] = [
                    fe(" Delete Image ", -1)
                  ])]),
                  _: 1
                }, 8, ["href"])) : J("", !0)
              ])
            ]))), 128))
          ])
        ])
      ])) : J("", !0)
    ], 64));
  }
}), KA = { class: "flex items-center space-x-3" }, GA = ["id", "name", "value", "checked"], JA = ["for"], aD = /* @__PURE__ */ K({
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
    }, o = I(() => n.form && n.field ? n.form[n.field] === n.value : n.modelValue === n.value), s = I(() => n.id || `radio-${n.field || "radio"}-${n.value}`);
    return (i, u) => (E(), F("div", KA, [
      N("input", {
        id: s.value,
        type: "radio",
        name: e.name || e.field,
        value: e.value,
        checked: o.value,
        onChange: a,
        class: "h-4 w-4 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
      }, null, 40, GA),
      N("label", {
        for: s.value,
        class: "cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-200"
      }, Q(e.label), 9, JA)
    ]));
  }
}), Op = {
  START: "start"
}, Ae = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
  NO_STYLE: "no-style"
}, YA = {
  key: 0,
  class: "absolute inset-2 flex items-center justify-center"
}, Ta = /* @__PURE__ */ K({
  __name: "SubmitButton",
  props: {
    theme: { default: Ae.PRIMARY },
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
      return E(), W(w(Tr), {
        theme: e.theme,
        disabled: e.loading || ((n = e.form) == null ? void 0 : n.processing) || e.disabled,
        type: e.type,
        "custom-class": `relative ${e.customButtonClass}`,
        size: e.size,
        class: "focusable"
      }, {
        default: V(() => {
          var a, o;
          return [
            N("div", {
              class: X({ "opacity-25": ((a = e.form) == null ? void 0 : a.processing) || e.loading })
            }, [
              z(t.$slots, "default")
            ], 2),
            (o = e.form) != null && o.processing || e.loading ? (E(), F("div", YA, [
              Y(w(al), { class: "aspect-square h-full! w-auto! text-white" })
            ])) : J("", !0)
          ];
        }),
        _: 3
      }, 8, ["theme", "disabled", "type", "custom-class", "size"]);
    };
  }
}), XA = { class: "w-full" }, QA = ["id"], ZA = ["disabled"], ek = { key: 0 }, tk = { key: 1 }, rk = { class: "ml-2 w-2" }, nk = {
  class: "absolute z-1000 -mt-1! hidden min-w-full bg-white data-te-dropdown-show:block",
  "data-te-dropdown-menu-ref": ""
}, ak = { class: "float-left m-0 box-border max-h-80 min-w-full list-none overflow-auto rounded rounded-t-none border border-t-0 border-gray-300 bg-clip-padding text-left text-base shadow" }, ok = ["onClick"], oD = {
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
    return (u, l) => (E(), F("div", XA, [
      !e.noLabel && (e.label || e.field) ? (E(), W(w(Yr), {
        key: 0,
        for: e.id ?? e.field,
        value: a(e.label ?? e.field)
      }, null, 8, ["for", "value"])) : J("", !0),
      N("div", {
        class: "model-list relative flex w-full min-w-[10rem]",
        "data-te-dropdown-ref": "",
        id: e.id ?? e.field
      }, [
        N("button", {
          class: "aria-expanded:border-accent-500 aria-expanded:outline-accent-500 flex h-10 w-full items-center justify-between rounded border border-gray-300 px-3 py-2 pr-5 text-base leading-normal whitespace-nowrap shadow outline outline-1 outline-transparent transition duration-150 ease-in-out aria-expanded:rounded-b-none motion-reduce:transition-none",
          type: "button",
          "data-te-dropdown-toggle-ref": "",
          "data-te-auto-close": "outside",
          "data-te-dropdown-animation": "off",
          "aria-expanded": "false",
          disabled: e.isDisabled
        }, [
          i().length > 0 ? (E(), F("span", ek, Q(i().length) + " selected", 1)) : (E(), F("span", tk, Q(e.placeholder), 1)),
          N("span", rk, [
            Y(Re, {
              name: "$expand",
              class: "h-5 w-5"
            })
          ])
        ], 8, ZA),
        N("div", nk, [
          N("ul", ak, [
            (E(!0), F(ne, null, Ce(e.list, (c) => (E(), F("li", {
              onClick: (d) => o(c),
              key: c[e.optionValue],
              class: "flex w-full min-w-full cursor-pointer items-center justify-start border-t border-gray-50 px-4 py-3 text-sm leading-4 font-normal hover:bg-[rgba(0,0,0,.03)]"
            }, [
              N("div", {
                class: X(["mr-2 -ml-2 h-4 w-4 rounded border", s(c) ? "bg-primary" : "bg-white"])
              }, null, 2),
              fe(" " + Q(c[e.optionText]), 1)
            ], 8, ok))), 128))
          ])
        ])
      ], 8, QA),
      Y(w(cr), {
        message: e.form.errors[e.field]
      }, null, 8, ["message"])
    ]));
  }
};
function Ap(e = { column: null, direction: "asc" }, t = !0) {
  const r = j({ ...e }), n = eo(), a = () => {
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
  return me(() => {
    a();
  }), {
    sortState: I(() => r.value),
    sort: o,
    getSortDirection: s,
    isSorted: i
  };
}
function sk(e = !1, t = []) {
  const r = j([...t]), n = (l) => {
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
    selected: I(() => r.value),
    select: n,
    selectAll: a,
    deselectAll: o,
    isSelected: s,
    isAllSelected: i,
    isIndeterminate: u
  };
}
function kp(e = !1, t = 0) {
  const r = j(null), n = j(null), a = j(null), o = j(!1), s = () => {
    if (!r.value || !n.value || !a.value || !(typeof e == "boolean" ? e : e.value)) return;
    const d = r.value.getBoundingClientRect(), m = d.top <= t && d.bottom > t;
    m !== o.value && (o.value = m, m ? (i(), a.value.style.display = "block", a.value.style.top = `${t}px`, a.value.style.width = `${r.value.offsetWidth}px`) : a.value.style.display = "none");
  }, i = () => {
    if (!n.value || !a.value) return;
    const c = n.value.querySelector("tr");
    if (!c) return;
    a.value.innerHTML = "";
    const d = c.cloneNode(!0), m = c.querySelectorAll("th"), v = d.querySelectorAll("th");
    m.forEach((p, h) => {
      v[h] && (v[h].style.width = `${p.offsetWidth}px`);
    }), a.value.appendChild(d), d.addEventListener("click", (p) => {
      const f = p.target.closest("th");
      if (f) {
        const y = Array.from(v).indexOf(f);
        y > -1 && m[y] && m[y].click();
      }
    });
  }, u = () => {
    s();
  }, l = () => {
    je(() => {
      s();
    });
  };
  return me(() => {
    window.addEventListener("scroll", u, { passive: !0 }), window.addEventListener("resize", l, { passive: !0 });
  }), It(() => {
    window.removeEventListener("scroll", u), window.removeEventListener("resize", l);
  }), {
    tableRef: r,
    headerRef: n,
    stickyRef: a,
    isSticky: I(() => o.value),
    updateStickyState: s
  };
}
function Tp(e, t = {}) {
  const r = bp(), n = I(() => {
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
  }), a = I(() => {
    var u;
    return ((u = n.value) == null ? void 0 : u.data) || [];
  }), o = I(() => {
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
  }), s = I(() => a.value.length === 0), i = I(() => (t.defer, !1));
  return {
    data: n,
    rows: a,
    pagination: o,
    isEmpty: s,
    isLoading: i
  };
}
function ik(e = {}) {
  const t = e.sortable ?? !1, r = e.selectable ?? !1, n = e.multiple ?? !1, a = e.sticky ?? !1, o = t ? Ap() : null, s = r ? sk(n) : null, i = a ? kp(a) : null, u = e.resource ? Tp(e.resource, {
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
const lk = ["id"], uk = {
  key: 0,
  class: "px-4 pt-4 text-sm text-gray-600 dark:text-gray-400"
}, ck = {
  key: 1,
  class: "mt-6"
}, dk = 60, fk = /* @__PURE__ */ K({
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
    const t = e, r = I(() => ({
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
    } = kp(I(() => r.value.sticky), dk), u = I(() => [
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
    ]), l = I(() => [
      "w-full overflow-x-auto",
      {
        "rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800": t.variant === "elevated",
        "border border-gray-200 dark:border-gray-700 rounded-lg dark:border-gray-700": t.bordered && t.variant !== "elevated"
      }
    ]), c = I(() => [
      "w-full",
      {
        "!visible hidden": r.value.collapsible
      }
    ]);
    me(() => {
      r.value.sticky && i();
    });
    const d = I(() => {
      if (t.pagination)
        return t.pagination;
      const v = t.links;
      return v ? {
        links: v,
        current_page: 1,
        last_page: 1,
        per_page: t.defaultPerPage,
        total: t.total || 0,
        from: 1,
        to: t.total || 0
      } : null;
    }), m = I(() => {
      var v, p;
      return t.showPagination && (((p = (v = d.value) == null ? void 0 : v.links) == null ? void 0 : p.length) || 0) > 0;
    });
    return (v, p) => {
      var h;
      return E(), F("div", {
        class: X(c.value),
        id: r.value.collapseId,
        "data-te-collapse-item": ""
      }, [
        t.total != null ? (E(), F("div", uk, " Found: " + Q(t.total), 1)) : J("", !0),
        N("div", {
          class: X(l.value),
          ref_key: "tableRef",
          ref: n
        }, [
          N("table", {
            class: X(u.value),
            ref_key: "headerRef",
            ref: a
          }, [
            r.value.sticky ? (E(), F("div", {
              key: 0,
              ref_key: "stickyRef",
              ref: o,
              class: X(["fixed isolate z-40 hidden w-full overflow-hidden rounded-t-xl bg-neutral-100 shadow", {
                "max-sm:hidden": t.responsive
              }])
            }, null, 2)) : J("", !0),
            z(v.$slots, "default")
          ], 2)
        ], 2),
        m.value ? (E(), F("div", ck, [
          v.$slots.pagination ? z(v.$slots, "pagination", { key: 0 }) : (E(), W(w($p), {
            key: 1,
            links: ((h = d.value) == null ? void 0 : h.links) || [],
            showPerPage: t.showPerPage,
            defaultPerPage: t.defaultPerPage
          }, null, 8, ["links", "showPerPage", "defaultPerPage"]))
        ])) : J("", !0)
      ], 10, lk);
    };
  }
}), pk = /* @__PURE__ */ K({
  __name: "Thead",
  props: {
    sticky: { type: Boolean, default: !1 },
    responsive: { type: Boolean, default: !0 },
    variant: { default: "default" }
  },
  setup(e) {
    const t = e, r = I(() => [
      "bg-gray-50 dark:bg-gray-900/40 border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900/50 dark:border-gray-700",
      {
        "hidden sm:table-header-group": t.responsive,
        "sticky top-0 z-10": t.sticky
      }
    ]);
    return (n, a) => (E(), F("thead", {
      class: X(r.value)
    }, [
      z(n.$slots, "default")
    ], 2));
  }
}), hk = { key: 0 }, mk = { key: 1 }, yk = { key: 1 }, gk = { key: 0 }, vk = /* @__PURE__ */ K({
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
    const t = e, r = typeof t.data == "string" ? Tp(t.data) : null, n = I(() => {
      var u;
      return Array.isArray(t.data) ? t.data : typeof t.data == "string" && r ? t.recordsFromPagination ? (u = r.data.value) == null ? void 0 : u.data : r.rows.value : [];
    }), a = I(() => Array.isArray(n.value) && n.value.length === 0), o = I(() => {
      const u = t.data !== void 0;
      return !t.hideNoRecordsMessage && u && a.value;
    }), s = I(() => !t.hidePlaceholder && (t.loading || (r == null ? void 0 : r.isLoading.value))), i = I(() => !t.ignoreDefer && typeof t.data == "string");
    return I(() => n.value), (u, l) => i.value ? (E(), F("tbody", yk, [
      Y(w(GO), {
        data: typeof t.data == "string" ? t.data : ""
      }, {
        fallback: V(() => [
          t.hidePlaceholder ? J("", !0) : (E(), W(w(Vc), {
            key: 0,
            placeholders: e.loadingRows
          }, null, 8, ["placeholders"]))
        ]),
        default: V(() => [
          o.value ? (E(), F("tr", gk, [
            Y(w($a), {
              colspan: "999",
              class: "text-center text-gray-500 dark:text-gray-400 py-8 dark:text-gray-400"
            }, {
              default: V(() => [
                fe(Q(t.emptyMessage || t.noRecordsMessage), 1)
              ]),
              _: 1
            })
          ])) : J("", !0),
          z(u.$slots, "default")
        ]),
        _: 3
      }, 8, ["data"])
    ])) : (E(), F("tbody", hk, [
      s.value ? (E(), W(w(Vc), {
        key: 0,
        placeholders: e.loadingRows
      }, null, 8, ["placeholders"])) : o.value ? (E(), F("tr", mk, [
        Y(w($a), {
          colspan: "999",
          class: "text-center text-gray-500 dark:text-gray-400 py-8 dark:text-gray-400"
        }, {
          default: V(() => [
            fe(Q(t.emptyMessage || t.noRecordsMessage), 1)
          ]),
          _: 1
        })
      ])) : z(u.$slots, "default", { key: 2 })
    ]));
  }
}), bk = { class: "flex items-center justify-between" }, wk = {
  key: 0,
  class: "sort-arrows ml-2 flex flex-col items-center"
}, xk = /* @__PURE__ */ K({
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
    const t = e, r = I(() => t.column || t.orderBy), { getSortDirection: n, isSorted: a, sort: o } = Ap(), s = I(() => r.value ? n(r.value) : null), i = I(() => r.value ? a(r.value) : !1), u = I(() => t.sortable && r.value), l = () => {
      !u.value || !r.value || o(r.value);
    }, c = (v) => s.value === v && i.value ? "text-blue-600" : "text-gray-400", d = I(() => [
      "px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-gray-900/50 dark:text-gray-400",
      {
        "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900/80": u.value,
        "text-left": t.align === "left",
        "text-center": t.align === "center",
        "text-right": t.align === "right",
        "w-0": t.width === "auto"
      },
      t.width && t.width !== "auto" ? `w-${t.width}` : ""
    ]), m = I(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (v, p) => (E(), F("th", {
      scope: "col",
      class: X(d.value),
      style: st(m.value),
      onClick: l
    }, [
      N("div", bk, [
        z(v.$slots, "default"),
        u.value ? (E(), F("span", wk, [
          (E(), F("svg", {
            class: X(["h-3 w-3 -mb-1", c("asc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, [...p[0] || (p[0] = [
            N("path", { d: "M6 3L2 7h8L6 3z" }, null, -1)
          ])], 2)),
          (E(), F("svg", {
            class: X(["h-3 w-3", c("desc")]),
            fill: "currentColor",
            viewBox: "0 0 12 12"
          }, [...p[1] || (p[1] = [
            N("path", { d: "M6 9L2 5h8L6 9z" }, null, -1)
          ])], 2))
        ])) : J("", !0)
      ])
    ], 6));
  }
}), Sk = {
  key: 0,
  class: "sm:hidden"
}, Ek = { class: "font-medium text-gray-500 dark:text-gray-400" }, Ck = { class: "ml-2" }, Pk = { key: 1 }, $a = /* @__PURE__ */ K({
  __name: "Td",
  props: {
    align: { default: "left" },
    responsive: { type: Boolean, default: !0 },
    label: {},
    width: {},
    nowrap: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = I(() => [
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
    ]), n = I(() => ({
      width: t.width && t.width !== "auto" ? t.width : void 0
    }));
    return (a, o) => (E(), F("td", {
      class: X(r.value),
      style: st(n.value)
    }, [
      t.label && t.responsive ? (E(), F("div", Sk, [
        N("span", Ek, Q(t.label) + ":", 1),
        N("span", Ck, [
          z(a.$slots, "default")
        ])
      ])) : (E(), F("div", Pk, [
        z(a.$slots, "default")
      ]))
    ], 6));
  }
}), Ok = ["data-te-target", "aria-controls"], sD = /* @__PURE__ */ K({
  __name: "TrCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, r) => (E(), F("tr", {
      "data-te-collapse-init": "",
      "data-te-target": "#" + e.collapse_id,
      "aria-expanded": "false",
      "aria-controls": e.collapse_id
    }, [
      z(t.$slots, "default")
    ], 8, Ok));
  }
}), Ak = { colspan: "999" }, kk = ["id"], iD = /* @__PURE__ */ K({
  __name: "TrCollapse",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, r) => (E(), F("tr", null, [
      N("td", Ak, [
        N("div", {
          id: e.collapse_id,
          class: "!visible hidden",
          "data-te-collapse-item": ""
        }, [
          z(t.$slots, "default")
        ], 8, kk)
      ])
    ]));
  }
}), Vc = /* @__PURE__ */ K({
  __name: "TrPlaceholder",
  props: {
    placeholders: {}
  },
  setup(e) {
    const t = e;
    return (r, n) => (E(!0), F(ne, null, Ce(t.placeholders, (a) => (E(), F("tr", { key: a }, [
      Y(w($a), { colspan: "999" }, {
        default: V(() => [...n[0] || (n[0] = [
          N("div", { class: "tr-placeholder bg-opacity-75 h-8 w-full animate-pulse rounded-md bg-gray-500" }, null, -1)
        ])]),
        _: 1
      })
    ]))), 128));
  }
}), Tk = { class: "max-xxs:text-xxs mb-2 flex w-full flex-wrap justify-between text-sm text-gray-600 dark:text-gray-400" }, $k = {
  key: 0,
  class: "xs:w-fit mb-2 h-fit w-full"
}, Dk = { key: 0 }, Rk = {
  key: 1,
  class: "ml-1"
}, Fk = { class: "flex w-fit flex-wrap" }, _k = {
  key: 0,
  class: "font-semibold"
}, qk = { class: "mb-1" }, Bk = {
  key: 0,
  class: "text-primary w-full font-semibold whitespace-normal"
}, Ik = { class: "w-full break-words" }, Lk = { class: "mb-1 flex flex-col" }, Mk = { key: 1 }, lD = /* @__PURE__ */ K({
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
      return E(), F("div", {
        key: t.key,
        class: "mt-3 rounded-md border border-gray-300 bg-white px-4 py-3 lg:border lg:border-gray-300"
      }, [
        N("div", Tk, [
          t.itemId || t.timeStamp ? (E(), F("div", $k, [
            t.itemId ? (E(), F(ne, { key: 0 }, [
              t.itemId.routeName ? (E(), W(w(xt), {
                key: 1,
                href: r.route(t.itemId.routeName, t.itemId.routeData ? t.itemId.routeData : t.itemId.id)
              }, {
                default: V(() => [
                  t.itemId.prefix || t.itemId.prefix == null ? (E(), F(ne, { key: 0 }, [
                    fe("#")
                  ], 64)) : J("", !0),
                  fe(" " + Q(t.itemId.id), 1)
                ]),
                _: 1
              }, 8, ["href"])) : (E(), F("span", Dk, [
                t.itemId.prefix || t.itemId.prefix == null ? (E(), F(ne, { key: 0 }, [
                  fe("#")
                ], 64)) : J("", !0),
                fe(" " + Q(t.itemId.id), 1)
              ]))
            ], 64)) : J("", !0),
            t.timeStamp ? (E(), F("span", Rk, [
              t.itemId ? (E(), F(ne, { key: 0 }, [
                fe("-")
              ], 64)) : J("", !0),
              fe(" " + Q(t.timeStamp), 1)
            ])) : J("", !0)
          ])) : J("", !0),
          N("div", Fk, [
            (E(!0), F(ne, null, Ce(e.pills, (o, s) => (E(), F(ne, { key: s }, [
              o.text ? (E(), F("span", {
                key: 0,
                class: "bg-primary rounded-md border p-1 px-2 whitespace-nowrap text-white",
                style: st({
                  backgroundColor: o.color ? o.color : null
                })
              }, Q(o.text), 5)) : J("", !0)
            ], 64))), 128))
          ])
        ]),
        t.title ? (E(), F(ne, { key: 0 }, [
          !t.title.routeName && !t.title.href ? (E(), F("p", _k, Q(t.title.text), 1)) : (E(), W(w(xt), {
            key: 1,
            href: t.title.href ? t.title.href : r.route(t.title.routeName, t.title.routeData),
            class: "font-semibold"
          }, {
            default: V(() => [
              fe(Q(t.title.text), 1)
            ]),
            _: 1
          }, 8, ["href"]))
        ], 64)) : J("", !0),
        N("div", qk, [
          t.extraText ? (E(), F("p", Bk, [
            n[0] || (n[0] = fe(" Engineer Note: ", -1)),
            N("span", Ik, Q(t.extraText), 1)
          ])) : J("", !0)
        ]),
        N("div", Lk, [
          (E(!0), F(ne, null, Ce(e.options, (o, s) => (E(), F(ne, { key: s }, [
            !o.routeName && !o.href ? (E(), F("span", {
              key: 0,
              style: st({ color: o.color ? o.color : "#000" })
            }, Q(o.text), 5)) : (E(), W(w(xt), {
              href: o.href ? o.href : r.route(o.routeName, o.routeData),
              style: st({ color: o.color ? o.color : "#000" }),
              key: "link-" + s
            }, {
              default: V(() => [
                fe(Q(o.text), 1)
              ]),
              _: 2
            }, 1032, ["href", "style"]))
          ], 64))), 128))
        ]),
        (a = t.amount) != null && a.amount ? (E(), F("div", Mk, [
          N("span", null, Q(t.amount.text + w(YO)(t.amount.amount)), 1)
        ])) : J("", !0),
        N("div", null, [
          z(r.$slots, "default")
        ])
      ]);
    };
  }
}), Nk = { class: "flex" }, jk = { class: "flex-shrink-0" }, Vk = { class: "ml-3 flex-1" }, Uk = {
  key: 0,
  class: "mb-1 text-sm font-medium"
}, Hk = { class: "text-sm" }, zk = {
  key: 0,
  class: "ml-auto flex-shrink-0"
}, uD = /* @__PURE__ */ K({
  __name: "Alert",
  props: {
    type: { default: "info" },
    title: { default: void 0 },
    dismissible: { type: Boolean, default: !1 },
    modelValue: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "dismiss"],
  setup(e, { emit: t }) {
    const r = e, n = t, a = j(r.modelValue), o = I({
      get: () => a.value,
      set: (h) => {
        a.value = h, n("update:modelValue", h);
      }
    });
    re(
      () => r.modelValue,
      (h) => {
        a.value = h;
      },
      { immediate: !0 }
    );
    const s = I(() => {
      const h = "relative w-full rounded-lg border px-4 py-3 text-sm";
      switch (r.type) {
        case "success":
          return `${h} border-green-200 bg-green-50 text-green-800 dark:border-green-800/70 dark:bg-green-950/60 dark:text-green-100`;
        case "error":
          return `${h} border-red-200 bg-red-50 text-red-800 dark:border-red-800/70 dark:bg-red-950/60 dark:text-red-100`;
        case "warning":
          return `${h} border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-700/70 dark:bg-yellow-950/60 dark:text-yellow-100`;
        case "info":
        default:
          return `${h} border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800/70 dark:bg-blue-950/60 dark:text-blue-100`;
      }
    }), i = I(() => {
      switch (r.type) {
        case "success":
          return "$success";
        case "error":
          return "$error";
        case "warning":
          return "$warning";
        case "info":
        default:
          return "$info";
      }
    }), u = () => {
      o.value = !1, n("dismiss");
    }, l = (h) => {
      const f = h;
      f.style.height = "0", f.style.opacity = "0", f.style.transform = "translateY(-8px) scale(0.95)";
    }, c = (h, f) => {
      const y = h, x = y.scrollHeight;
      y.style.transition = "all 400ms ease-out", requestAnimationFrame(() => {
        y.style.height = `${x}px`, y.style.opacity = "1", y.style.transform = "translateY(0) scale(1)";
      }), setTimeout(f, 400);
    }, d = (h) => {
      const f = h;
      f.style.height = "auto";
    }, m = (h) => {
      const f = h, y = f.scrollHeight;
      f.style.height = `${y}px`;
    }, v = (h, f) => {
      const y = h;
      y.style.transition = "all 350ms ease-in", requestAnimationFrame(() => {
        y.style.height = "0", y.style.opacity = "0", y.style.transform = "translateY(-8px) scale(0.95)";
      }), setTimeout(f, 350);
    }, p = (h) => {
      const f = h;
      f.style.height = "", f.style.opacity = "", f.style.transform = "", f.style.transition = "";
    };
    return (h, f) => (E(), W(yr, {
      name: "alert",
      onBeforeEnter: l,
      onEnter: c,
      onAfterEnter: d,
      onBeforeLeave: m,
      onLeave: v,
      onAfterLeave: p,
      css: !1
    }, {
      default: V(() => [
        o.value ? (E(), F("div", {
          key: 0,
          class: X(s.value),
          role: "alert",
          style: { overflow: "hidden" }
        }, [
          N("div", Nk, [
            N("div", jk, [
              Y(Re, {
                name: i.value,
                class: X(["h-5 w-5", {
                  "text-green-500 dark:text-green-300": e.type === "success",
                  "text-red-500 dark:text-red-300": e.type === "error",
                  "text-yellow-500 dark:text-yellow-300": e.type === "warning",
                  "text-blue-500 dark:text-blue-300": e.type === "info"
                }])
              }, null, 8, ["name", "class"])
            ]),
            N("div", Vk, [
              e.title ? (E(), F("h3", Uk, Q(e.title), 1)) : J("", !0),
              N("div", Hk, [
                z(h.$slots, "default")
              ])
            ]),
            e.dismissible ? (E(), F("div", zk, [
              N("button", {
                onClick: u,
                class: X(["inline-flex rounded-md p-1.5 transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none", {
                  "text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50 dark:text-green-300 dark:hover:bg-green-900/40 dark:focus:ring-green-400 dark:focus:ring-offset-green-950": e.type === "success",
                  "text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50 dark:text-red-300 dark:hover:bg-red-900/40 dark:focus:ring-red-400 dark:focus:ring-offset-red-950": e.type === "error",
                  "text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-600 focus:ring-offset-yellow-50 dark:text-yellow-300 dark:hover:bg-yellow-900/40 dark:focus:ring-yellow-400 dark:focus:ring-offset-yellow-950": e.type === "warning",
                  "text-blue-500 hover:bg-blue-100 focus:ring-blue-600 focus:ring-offset-blue-50 dark:text-blue-300 dark:hover:bg-blue-900/40 dark:focus:ring-blue-400 dark:focus:ring-offset-blue-950": e.type === "info"
                }]),
                "aria-label": "Dismiss alert"
              }, [
                Y(Re, {
                  name: "$close",
                  class: "h-5 w-5"
                })
              ], 2)
            ])) : J("", !0)
          ])
        ], 2)) : J("", !0)
      ]),
      _: 3
    }));
  }
}), Wk = { class: "text-lg font-semibold text-gray-900 dark:text-gray-100" }, Kk = { key: 0 }, Gk = { class: "p-6" }, Jk = /* @__PURE__ */ K({
  __name: "CollapsableSection",
  props: {
    header: { default: void 0 },
    open: { type: Boolean, default: !1 },
    headerColor: { default: void 0 }
  },
  setup(e) {
    const t = e, r = j(t.open);
    return re(
      () => t.open,
      (n) => r.value = n
    ), me(() => {
      r.value = t.open;
    }), (n, a) => (E(), W(w(wi), {
      defaultOpen: e.open,
      open: r.value,
      "onUpdate:open": a[0] || (a[0] = (o) => r.value = o),
      class: "rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
    }, {
      default: V(() => [
        Y(w(Si), {
          class: "focusable focus:ring-primary-500 relative flex w-full cursor-pointer items-center justify-between rounded-lg border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 px-6 py-4 text-left transition-colors duration-150 hover:bg-gray-100/50 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900/40 dark:hover:bg-gray-900/60 dark:focus:ring-offset-gray-900",
          style: st({ backgroundColor: e.headerColor })
        }, {
          default: V(() => [
            N("h3", Wk, [
              e.header ? (E(), F("span", Kk, Q(e.header), 1)) : z(n.$slots, "trigger", { key: 1 })
            ]),
            N("div", {
              class: X(["text-primary-600 transition-transform duration-300 ease-in-out dark:text-primary-300", { "rotate-180": r.value }])
            }, [
              Y(Re, {
                name: "$expand",
                class: "h-5 w-5"
              })
            ], 2)
          ]),
          _: 3
        }, 8, ["style"]),
        Y(w(xi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: V(() => [
            N("div", Gk, [
              z(n.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), cD = /* @__PURE__ */ K({
  __name: "Dropdown",
  props: {
    align: { default: Op.START },
    alignOffset: { default: 5 },
    openOnHover: { type: Boolean, default: !1 },
    hoverDelay: { default: 150 }
  },
  setup(e) {
    const t = e, r = j(!1);
    let n = null;
    const a = async () => {
      t.openOnHover && (n && (clearTimeout(n), n = null), await je(), r.value = !0);
    }, o = () => {
      t.openOnHover && (n = setTimeout(async () => {
        await je(), r.value = !1, n = null;
      }, t.hoverDelay));
    }, s = (i) => {
      r.value = i;
    };
    return (i, u) => (E(), W(w(Id), {
      open: r.value,
      "onUpdate:open": [
        u[0] || (u[0] = (l) => r.value = l),
        s
      ]
    }, {
      default: V(() => [
        Y(w(Nd), { "aria-label": "Dropdown" }, {
          default: V(() => [
            z(i.$slots, "trigger")
          ]),
          _: 3
        }),
        Y(w(Md), null, {
          default: V(() => [
            Y(w(Ld), ae({ alignOffset: e.alignOffset }, i.$attrs, {
              align: e.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 cursor-pointer rounded bg-white text-gray-900 dark:text-gray-100 shadow ring-1 ring-gray-400 will-change-[opacity,transform] dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40 dark:ring-gray-700",
              onMouseenter: a,
              onMouseleave: o
            }), {
              default: V(() => [
                z(i.$slots, "content")
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
}), dD = /* @__PURE__ */ K({
  __name: "DropdownLink",
  props: {
    href: {}
  },
  setup(e) {
    return (t, r) => (E(), W(w(fv), null, {
      default: V(() => [
        Y(w(xt), ae(t.$attrs, {
          href: e.href,
          class: "focusable flex w-full items-center gap-2 rounded px-8 py-6 text-left text-base leading-5 text-gray-700 dark:text-gray-200 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-hidden dark:text-gray-100 dark:hover:bg-gray-700 dark:focus:bg-gray-700"
        }), {
          default: V(() => [
            z(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["href"])
      ]),
      _: 3
    }));
  }
}), fD = /* @__PURE__ */ K({
  __name: "DropdownSeparator",
  setup(e) {
    return (t, r) => (E(), W(w(mv), { class: "mx-1 my-px h-px bg-gray-300 dark:bg-gray-700" }));
  }
}), Yk = ["href", "target", "tabindex", "aria-disabled"], Xk = "focusable inline-flex cursor-pointer items-center justify-center gap-1.5 rounded px-2 text-sm leading-normal font-medium transition-colors duration-200 select-none", pD = /* @__PURE__ */ K({
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
      [Ae.PRIMARY]: "bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.SECONDARY]: "border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:disabled:opacity-60",
      [Ae.DANGER]: "bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.WARNING]: "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.INFO]: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.SUCCESS]: "bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.NO_STYLE]: ""
    }, r = e, n = () => {
      if (r.colourClasses && r.colourClasses.length > 0)
        return [...r.colourClasses];
      const a = [];
      return r.theme !== Ae.NO_STYLE && a.push(Xk), a.push(t[r.theme]), a;
    };
    return (a, o) => e.href && (e.method || e.data) ? (E(), W(w(xt), {
      key: 0,
      href: e.href,
      method: e.method,
      data: e.data,
      class: X(n()),
      disabled: e.disabled,
      as: "button",
      tabindex: "0"
    }, {
      default: V(() => [
        z(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "method", "data", "class", "disabled"])) : (E(), F("a", {
      key: 1,
      href: e.href,
      target: e.target,
      class: X(n()),
      tabindex: e.disabled ? -1 : 0,
      "aria-disabled": e.disabled,
      onClick: o[0] || (o[0] = (s) => e.disabled && s.preventDefault())
    }, [
      z(a.$slots, "default")
    ], 10, Yk));
  }
}), Qk = {
  class: "focusable bg-primary hover:bg-primary-700 flex cursor-pointer items-center rounded px-2 text-sm whitespace-nowrap text-white motion-reduce:transition-none",
  type: "button"
}, Zk = { class: "mx-1 w-2" }, eT = ["aria-labelledby"], hD = /* @__PURE__ */ K({
  __name: "LinkDropdownButton",
  props: {
    align: { default: Op.START },
    alignOffset: { default: 5 },
    title: { default: void 0 }
  },
  setup(e) {
    const t = j(!1);
    return (r, n) => (E(), W(w(Id), {
      open: t.value,
      "onUpdate:open": n[0] || (n[0] = (a) => t.value = a)
    }, {
      default: V(() => [
        Y(w(Nd), {
          "aria-label": "Dropdown",
          asChild: ""
        }, {
          default: V(() => [
            N("button", Qk, [
              fe(Q(e.title) + " ", 1),
              N("span", Zk, [
                Y(Re, { name: "$expand" })
              ])
            ])
          ]),
          _: 1
        }),
        Y(w(Md), null, {
          default: V(() => [
            Y(w(Ld), ae({ alignOffset: e.alignOffset }, r.$attrs, {
              align: e.align,
              class: "ring-opacity-5 data-[side=top]:animate-slide-down-fade data-[side=right]:animate-slide-left-fade data-[side=bottom]:animate-slide-up-fade data-[side=left]:animate-slide-right-fade z-50 mt-2 rounded bg-white shadow ring-1 ring-gray-400 will-change-[opacity,transform]"
            }), {
              default: V(() => [
                N("ul", {
                  class: "absolute z-1000 float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-te-dropdown-show:block dark:bg-neutral-700",
                  "aria-labelledby": e.title,
                  "data-te-dropdown-menu-ref": ""
                }, [
                  z(r.$slots, "default")
                ], 8, eT)
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
}), tT = ["href"], mD = /* @__PURE__ */ K({
  __name: "LinkDropdownButtonItem",
  props: {
    href: {},
    title: {}
  },
  setup(e) {
    return (t, r) => (E(), F("li", null, [
      N("a", {
        class: "focusable inline-flex w-full items-center justify-center bg-transparent px-4 py-2 text-sm font-normal whitespace-nowrap text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600",
        href: e.href
      }, Q(e.title), 9, tT)
    ]));
  }
}), yD = {
  __name: "Logs",
  props: {
    header: { default: "Logs" },
    logs: Object
  },
  setup(e) {
    return (t, r) => (E(), W(w(Jk), { header: e.header }, {
      default: V(() => [
        Y(w(gT), { logs: e.logs }, null, 8, ["logs"])
      ]),
      _: 1
    }, 8, ["header"]));
  }
}, rT = {
  key: 0,
  class: "flex w-full items-center justify-center"
}, nT = {
  key: 1,
  class: "mt-1",
  id: "logs"
}, aT = {
  key: 0,
  class: "text-center"
}, oT = {
  key: 1,
  class: "ml-3 border-l-2 border-primary"
}, sT = { class: "flex-start w-full md:flex" }, iT = { class: "-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full bg-primary text-xs text-white" }, lT = { class: "mb-3 ml-2 block w-full rounded-lg bg-neutral-50 px-3 py-2 shadow-md shadow-black/5" }, uT = { class: "mb-1 flex justify-between" }, cT = { class: "text-sm text-neutral-500" }, dT = {
  key: 0,
  class: "text-bold mr-0.5 text-sm text-primary-500"
}, fT = {
  key: 1,
  class: "text-sm text-primary-500"
}, pT = { class: "text-sm text-neutral-500" }, hT = { class: "font-medium" }, mT = {
  key: 0,
  class: "line-through"
}, yT = ["innerHTML"], gT = {
  __name: "LogsContent",
  props: {
    logs: Object
  },
  setup(e) {
    return (t, r) => e.logs == null ? (E(), F("div", rT, [
      Y(w(al))
    ])) : (E(), F("div", nT, [
      e.logs.total ? (E(), F("ol", oT, [
        (E(!0), F(ne, null, Ce(e.logs.data, (n) => (E(), F("li", {
          key: n.id
        }, [
          N("div", sT, [
            N("div", iT, [
              Y(Re, {
                name: n.icon
              }, null, 8, ["name"])
            ]),
            N("div", lT, [
              N("div", uT, [
                N("span", cT, [
                  fe(Q(n.event_formatted) + " ", 1),
                  n.reference ? (E(), F("span", dT, Q(n.reference), 1)) : J("", !0),
                  n.causer ? (E(), F(ne, { key: 1 }, [
                    n.causer.id ? (E(), W(w(xt), {
                      key: 0,
                      href: t.route("users.show", n.causer.id),
                      class: "text-sm text-primary-500"
                    }, {
                      default: V(() => [
                        fe(" (" + Q(n.causer.first_name) + ") ", 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])) : (E(), F("span", fT, "(" + Q(n.causer.first_name) + ")", 1))
                  ], 64)) : J("", !0)
                ]),
                N("span", pT, Q(n.created_date_full), 1)
              ]),
              (E(!0), F(ne, null, Ce(n.changes_formatted, (a, o) => (E(), F("p", {
                key: o,
                class: "mb-0 text-neutral-700"
              }, [
                N("span", hT, Q(o) + ":", 1),
                a.old ? (E(), F("span", mT, Q(a.old), 1)) : J("", !0),
                fe(" " + Q(a.new), 1)
              ]))), 128)),
              n.description_details ? (E(), F("p", {
                key: 0,
                class: "text-neutral-700",
                innerHTML: n.description_details
              }, null, 8, yT)) : J("", !0)
            ])
          ])
        ]))), 128))
      ])) : (E(), F("p", aT, "No Data")),
      e.logs.links ? (E(), W(w($p), {
        key: 2,
        class: "mt-6",
        links: e.logs.links,
        logs: !0
      }, null, 8, ["links"])) : J("", !0)
    ]));
  }
}, gD = /* @__PURE__ */ K({
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
    const r = e, n = t, a = j(null);
    re(
      () => r.show,
      () => {
        r.show ? document.body.style.overflow = "hidden" : document.body.style.overflow = null;
      }
    );
    const o = () => {
      r.closeable && n("close");
    }, s = (P) => {
      P.key === "Escape" && r.show && o();
    };
    me(() => document.addEventListener("keydown", s)), It(() => {
      document.removeEventListener("keydown", s), document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", y), document.body.style.overflow = null;
    });
    const i = I(() => {
      let P = [];
      return P.push(
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
      ), r.hideOverflow && P.push("overflow-hidden"), P.join(" ");
    }), u = j(!1), l = j(null), c = j(0), d = j(0), m = j(0), v = j(0), p = j(null), h = j(null), f = (P, A) => {
      u.value = !0, document.addEventListener("mousemove", x), document.addEventListener("mouseup", y), l.value = A, c.value = P.clientX, d.value = P.clientY, m.value = a.value.offsetWidth, v.value = a.value.offsetHeight;
    }, y = (P) => {
      u.value = !1, document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", y);
    }, x = (P) => {
      if (!u.value) return;
      const A = (P.clientX - c.value) * 2, T = P.clientY - d.value;
      l.value.includes("x") && (p.value = m.value + A + "px"), l.value.includes("-x") && (p.value = m.value - A + "px"), l.value.includes("y") && (h.value = v.value + T + "px");
    };
    return (P, A) => (E(), W(Jc, { to: "body" }, [
      Y(yr, { "leave-active-class": "duration-200" }, {
        default: V(() => [
          ot(N("div", {
            class: X(["modal fixed inset-0 z-50 overflow-y-auto px-4 py-6 sm:px-0", { flex: e.alignCenter, "mb-16 items-center justify-center": e.alignCenter }]),
            "scroll-region": ""
          }, [
            Y(yr, {
              "enter-active-class": `backdrop-transition enter ease-out duration-[${e.backdropDuration}ms]`,
              "enter-from-class": "opacity-0",
              "enter-to-class": "opacity-100",
              "leave-active-class": `backdrop-transition leave ease-in duration-[${e.backdropDuration}ms]`,
              "leave-from-class": "opacity-100",
              "leave-to-class": "opacity-0"
            }, {
              default: V(() => [
                ot(N("div", {
                  class: "fixed inset-0 transform transition-all",
                  onClick: o
                }, [
                  N("div", {
                    class: X(["backdrop absolute inset-0 bg-gray-500 opacity-75 dark:bg-black dark:opacity-70", { [e.backdropCustomClass]: !!e.backdropCustomClass }])
                  }, null, 2)
                ], 512), [
                  [mr, e.show]
                ])
              ]),
              _: 1
            }, 8, ["enter-active-class", "leave-active-class"]),
            Y(yr, {
              "enter-active-class": `modal-transition enter ease-out duration-[${e.modalDuration}ms]`,
              "enter-from-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
              "enter-to-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-active-class": `modal-transition leave ease-in duration-[${e.modalDuration}ms]`,
              "leave-from-class": "opacity-100 translate-y-0 sm:scale-100",
              "leave-to-class": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            }, {
              default: V(() => [
                ot(N("div", {
                  ref_key: "modalContent",
                  ref: a,
                  class: X(["mb-6 transform rounded-lg bg-white text-gray-900 dark:text-gray-100 shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800 dark:text-gray-100", {
                    [i.value]: !!i.value,
                    "border-pink rounded-md border-2 border-solid": e.showBorder,
                    [e.modalCustomClass]: !!e.modalCustomClass
                  }]),
                  style: st({
                    userSelect: u.value ? "none" : "auto",
                    transition: u.value ? "none" : "",
                    width: p.value || "",
                    height: h.value || "",
                    maxWidth: p.value || "",
                    maxHeight: h.value || ""
                  })
                }, [
                  e.show ? z(P.$slots, "default", { key: 0 }) : J("", !0),
                  e.resizable ? (E(), F(ne, { key: 1 }, [
                    N("div", {
                      class: "absolute bottom-0 left-0 h-1 w-full cursor-row-resize",
                      onMousedown: A[0] || (A[0] = (T) => f(T, "y")),
                      onMouseup: y
                    }, null, 32),
                    N("div", {
                      class: "absolute left-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: A[1] || (A[1] = (T) => f(T, "-x")),
                      onMouseup: y
                    }, null, 32),
                    N("div", {
                      class: "absolute right-0 top-0 h-full w-1 cursor-col-resize",
                      onMousedown: A[2] || (A[2] = (T) => f(T, "x")),
                      onMouseup: y
                    }, null, 32),
                    N("div", {
                      class: "absolute bottom-0 right-0 h-1 w-1 cursor-se-resize",
                      onMousedown: A[3] || (A[3] = (T) => f(T, "xy")),
                      onMouseup: y
                    }, null, 32),
                    N("div", {
                      class: "absolute bottom-0 left-0 h-1 w-1 cursor-sw-resize",
                      onMousedown: A[4] || (A[4] = (T) => f(T, "-xy")),
                      onMouseup: y
                    }, null, 32)
                  ], 64)) : J("", !0)
                ], 6), [
                  [mr, e.show]
                ])
              ]),
              _: 3
            }, 8, ["enter-active-class", "leave-active-class"])
          ], 2), [
            [mr, e.show]
          ])
        ]),
        _: 3
      })
    ]));
  }
}), vT = {
  key: 2,
  class: "mb-3"
}, bT = {
  key: 3,
  class: "mt-5 flex justify-end gap-1.5"
}, vD = /* @__PURE__ */ K({
  __name: "NewModal",
  props: /* @__PURE__ */ St({
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
    const t = e, r = Jr(e, "modelValue"), n = (a) => {
      r.value = a;
    };
    return me(() => {
      t.defaultOpen && (r.value = !0);
    }), It(() => {
      r.value = !1;
    }), re(
      () => t.defaultOpen,
      (a) => {
        r.value = a;
      }
    ), (a, o) => (E(), W(w(Am), {
      defaultOpen: e.defaultOpen,
      open: r.value,
      "onUpdate:open": [
        o[0] || (o[0] = (s) => r.value = s),
        n
      ]
    }, {
      default: V(() => [
        a.$slots.trigger ? (E(), W(w(yy), {
          key: 0,
          asChild: ""
        }, {
          default: V(() => [
            z(a.$slots, "trigger")
          ]),
          _: 3
        })) : J("", !0),
        Y(w(fy), null, {
          default: V(() => [
            Y(w(uy), { class: "bg-dark/50 data-[state=open]:animate-fade-in fixed inset-0 z-30 dark:bg-black/70" }),
            Y(w(ny), ae({ class: "data-[state=open]:animate-slide-up-fade fixed top-[50%] left-[50%] z-[100] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded bg-white p-5 text-gray-900 dark:text-gray-100 shadow-lg/20 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:shadow-black/40" }, a.$attrs), {
              default: V(() => [
                e.title || a.$slots.header ? (E(), W(w(hy), {
                  key: 0,
                  class: "m-0 text-lg font-semibold dark:text-gray-100"
                }, {
                  default: V(() => [
                    z(a.$slots, "header", {}, () => [
                      fe(Q(e.title), 1)
                    ])
                  ]),
                  _: 3
                })) : J("", !0),
                e.description || a.$slots.description ? (E(), W(w(oy), {
                  key: 1,
                  class: "mt-2 text-sm leading-normal dark:text-gray-300"
                }, {
                  default: V(() => [
                    z(a.$slots, "description", {}, () => [
                      fe(Q(e.description), 1)
                    ])
                  ]),
                  _: 3
                })) : J("", !0),
                e.title || a.$slots.header || e.description || a.$slots.description ? (E(), F("div", vT)) : J("", !0),
                z(a.$slots, "default"),
                a.$slots.footer ? (E(), F("div", bT, [
                  z(a.$slots, "footer")
                ])) : J("", !0),
                Y(w(Tm), {
                  class: "focusable text-dark hover:bg-primary/50 focus:bg-primary/60 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] cursor-pointer appearance-none items-center justify-center rounded-full transition-all focus:shadow-[0_0_0_2px] focus:outline-none dark:text-gray-200 dark:hover:bg-primary/30 dark:focus:bg-primary/40",
                  "aria-label": "Close"
                }, {
                  default: V(() => [
                    Y(Re, { name: "$close" })
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
}), wT = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, xT = { class: "ml-3 flex-1 whitespace-nowrap" }, bD = /* @__PURE__ */ K({
  __name: "NavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, r = I(
      () => t.active ? "cursor-pointer focusable flex items-center p-2 text-base font-normal rounded-lg bg-accent-100 text-accent-900 dark:bg-primary-900/50 dark:text-primary-100" : "cursor-pointer focusable flex items-center p-2 text-base font-normal rounded-lg text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
    );
    return (n, a) => (E(), W(w(xt), {
      href: e.href,
      class: X(r.value)
    }, {
      default: V(() => [
        n.$slots.icon ? (E(), F("div", wT, [
          z(n.$slots, "icon")
        ])) : J("", !0),
        N("span", xT, [
          z(n.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), ST = { class: "pagination flex justify-between" }, ET = ["value", "selected"], CT = {
  key: 0,
  "aria-label": "Page navigation"
}, PT = ["innerHTML"], OT = ["innerHTML", "onClick"], $p = /* @__PURE__ */ K({
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
    const r = t, n = e, a = j(n.defaultPerPage), o = [10, 25, 50, 100, 250], s = I(() => {
      if (!n.links || n.links.length <= 3)
        return n.links;
      const l = n.links[0], c = n.links[n.links.length - 1], d = n.links.findIndex((p) => p.active);
      let m = Math.max(1, d - Math.floor(n.maxPagesToShow / 2)), v = Math.min(n.links.length - 2, m + n.maxPagesToShow - 1);
      return v - m < n.maxPagesToShow - 1 && (m = Math.max(1, v - n.maxPagesToShow + 1)), [l, ...n.links.slice(m, v + 1), c];
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
    return (l, c) => (E(), F("div", ST, [
      N("div", null, [
        e.showPerPage ? (E(), W(w(Oh), {
          key: 0,
          type: "select",
          modelValue: a.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => a.value = d),
          class: "per-page-input w-20",
          onChanged: u
        }, {
          default: V(() => [
            (E(), F(ne, null, Ce(o, (d) => N("option", {
              key: d,
              value: d,
              selected: d == a.value
            }, Q(d), 9, ET)), 64))
          ]),
          _: 1
        }, 8, ["modelValue"])) : J("", !0)
      ]),
      s.value.length > 3 ? (E(), F("nav", CT, [
        N("ul", {
          class: X(["list-style-none flex", { [e.customListClass]: e.customListClass }])
        }, [
          (E(!0), F(ne, null, Ce(s.value, (d, m) => (E(), F("li", { key: m }, [
            e.linkReturn ? (E(), F(ne, { key: 0 }, [
              d.url === null ? (E(), F("button", {
                key: 0,
                class: X(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: d.label,
                onClick: c[1] || (c[1] = (v) => i(""))
              }, null, 10, PT)) : (E(), F("button", {
                key: 1,
                class: X(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: d.active && e.customActiveLinkClass
                }]),
                innerHTML: d.label,
                onClick: (v) => i(d.url)
              }, null, 10, OT))
            ], 64)) : (E(), F(ne, { key: 1 }, [
              d.url === null ? (E(), W(w(xt), {
                key: 0,
                class: X(["focusable pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400", {
                  [e.customLinkClass]: e.customLinkClass
                }]),
                innerHTML: d.label,
                href: ""
              }, null, 8, ["class", "innerHTML"])) : (E(), W(w(xt), {
                key: 1,
                class: X(["focusable relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white", {
                  "text-primary font-bold": d.active,
                  [e.customLinkClass]: e.customLinkClass,
                  [e.customActiveLinkClass]: d.active && e.customActiveLinkClass
                }]),
                href: d.url,
                innerHTML: d.label,
                preserveScroll: e.preserveScroll || e.logs,
                preserveState: e.preserveState || e.logs,
                only: e.logs ? ["logs"] : e.only
              }, null, 8, ["class", "href", "innerHTML", "preserveScroll", "preserveState", "only"]))
            ], 64))
          ]))), 128))
        ], 2)
      ])) : J("", !0),
      c[2] || (c[2] = N("div", null, null, -1))
    ]));
  }
}), wD = /* @__PURE__ */ K({
  __name: "TdCollapseHandler",
  props: {
    collapse_id: {}
  },
  setup(e) {
    return (t, r) => {
      const n = Gp("Td");
      return E(), W(n, {
        "data-te-collapse-init": "",
        "data-te-target": "#" + e.collapse_id,
        "aria-expanded": "false",
        "aria-controls": e.collapse_id,
        class: "cursor-pointer"
      }, {
        default: V(() => [
          z(t.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-te-target", "aria-controls"]);
    };
  }
}), xD = /* @__PURE__ */ K({
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
    }, o = I(() => [
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
    return (s, i) => (E(), F("tr", {
      class: X(o.value),
      onClick: a
    }, [
      z(s.$slots, "default")
    ], 2));
  }
}), AT = ["onClick"], SD = /* @__PURE__ */ K({
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
    const r = e, n = t, a = ik({
      sortable: r.sortable,
      selectable: r.selectable,
      multiple: !0,
      sticky: r.sticky,
      resource: r.resource
    });
    Cn("table", {
      ...a,
      props: r,
      emit: n
    });
    const o = I(() => r.columns ? r.columns : r.autoGenerateColumns && r.data && r.data.length > 0 ? Object.keys(r.data[0]).map((l) => ({
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
    }, u = I(() => {
      var l;
      return ((l = a.rows) == null ? void 0 : l.value) || r.data || [];
    });
    return (l, c) => (E(), W(w(fk), Pe(De(r)), {
      default: V(() => {
        var d;
        return [
          o.value.length > 0 ? (E(), F(ne, { key: 0 }, [
            Y(w(pk), null, {
              default: V(() => [
                N("tr", null, [
                  (E(!0), F(ne, null, Ce(o.value, (m) => (E(), W(w(xk), {
                    key: m.key,
                    column: m.key,
                    sortable: m.sortable,
                    width: m.width || void 0,
                    align: m.align || "left",
                    onClick: (v) => m.sortable ? i(m.key) : null
                  }, {
                    default: V(() => [
                      fe(Q(m.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["column", "sortable", "width", "align", "onClick"]))), 128))
                ])
              ]),
              _: 1
            }),
            Y(w(vk), {
              data: u.value,
              loading: (d = w(a).isLoading) == null ? void 0 : d.value,
              "empty-message": r.emptyMessage
            }, {
              default: V(() => [
                (E(!0), F(ne, null, Ce(u.value, (m, v) => {
                  var p, h;
                  return E(), F("tr", {
                    key: m.id || v,
                    class: X([
                      "border-b border-gray-200 dark:border-gray-700 transition-colors hover:bg-gray-50",
                      {
                        "cursor-pointer": r.selectable,
                        "bg-blue-50": (h = (p = w(a)).isSelected) == null ? void 0 : h.call(p, m)
                      }
                    ]),
                    onClick: (f) => s(m, v)
                  }, [
                    (E(!0), F(ne, null, Ce(o.value, (f) => (E(), W(w($a), {
                      key: f.key,
                      align: f.align || "left",
                      width: f.width || void 0,
                      nowrap: f.key === "id"
                    }, {
                      default: V(() => [
                        z(l.$slots, `cell-${f.key}`, {
                          row: m,
                          column: f,
                          value: m[f.key]
                        }, () => [
                          fe(Q(m[f.key]), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["align", "width", "nowrap"]))), 128))
                  ], 10, AT);
                }), 128))
              ]),
              _: 3
            }, 8, ["data", "loading", "empty-message"])
          ], 64)) : z(l.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 16));
  }
}), ED = /* @__PURE__ */ K({
  __name: "DangerButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (E(), W(w(Tr), {
      theme: w(Ae).DANGER,
      type: e.type,
      disabled: e.disabled,
      "custom-class": e.customClass,
      size: e.size
    }, {
      default: V(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), CD = /* @__PURE__ */ K({
  __name: "WarningButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (E(), W(w(Tr), {
      theme: w(Ae).WARNING,
      type: e.type,
      disabled: e.disabled,
      "custom-class": e.customClass,
      size: e.size
    }, {
      default: V(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), PD = /* @__PURE__ */ K({
  __name: "InfoButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (E(), W(w(Tr), {
      theme: w(Ae).INFO,
      type: e.type,
      disabled: e.disabled,
      "custom-class": e.customClass,
      size: e.size
    }, {
      default: V(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), OD = /* @__PURE__ */ K({
  __name: "SuccessButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (E(), W(w(Tr), {
      theme: w(Ae).SUCCESS,
      type: e.type,
      disabled: e.disabled,
      "custom-class": e.customClass,
      size: e.size
    }, {
      default: V(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), AD = /* @__PURE__ */ K({
  __name: "ResponsiveNavLink",
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(e) {
    const t = e, r = I(
      () => t.active ? "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-accent-400 text-left text-base font-medium text-accent-700 bg-accent-50 focus:outline-hidden focus:text-accent-800 focus:bg-accent-100 focus:border-accent-700 transition duration-150 ease-in-out dark:border-primary-400 dark:bg-primary-900/40 dark:text-primary-100 dark:focus:bg-primary-900/60 dark:focus:text-primary-50" : "cursor-pointer focusable block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-hidden focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 dark:hover:border-gray-600 dark:focus:bg-gray-800 dark:focus:text-gray-100 dark:focus:border-gray-600"
    );
    return (n, a) => (E(), W(w(xt), {
      href: e.href,
      class: X(r.value)
    }, {
      default: V(() => [
        z(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["href", "class"]));
  }
}), kT = /* @__PURE__ */ K({
  __name: "SecondaryButton",
  props: {
    type: { default: "button" },
    disabled: { type: Boolean, default: !1 },
    customClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (E(), W(w(Tr), {
      theme: w(Ae).SECONDARY,
      type: e.type,
      disabled: e.disabled,
      "custom-class": e.customClass,
      size: e.size
    }, {
      default: V(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), TT = {
  key: 0,
  class: "border-b border-gray-200 dark:border-gray-700 bg-gray-50/50 px-6 py-4 dark:border-gray-700 dark:bg-gray-900/40"
}, $T = { class: "flex items-center justify-between" }, DT = { class: "text-lg font-semibold text-gray-900 dark:text-gray-100" }, RT = { key: 0 }, FT = { class: "p-6" }, kD = /* @__PURE__ */ K({
  __name: "Section",
  props: {
    header: {},
    overflow: { type: Boolean, default: !1 },
    variant: { default: "default" },
    unstyled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, r = Jp(), n = I(() => {
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
    }), a = I(() => {
      const s = [];
      return t.unstyled || s.push(n.value), t.overflow && s.push("overflow-hidden"), r.class && typeof r.class == "string" && s.push(r.class), s.filter(Boolean).join(" ");
    }), o = I(() => {
      const { class: s, ...i } = r;
      return i;
    });
    return (s, i) => (E(), F("div", ae({ class: a.value }, o.value), [
      e.header ? (E(), F("div", TT, [
        N("div", $T, [
          N("h3", DT, Q(e.header), 1),
          s.$slots.headerButton ? (E(), F("div", RT, [
            z(s.$slots, "headerButton")
          ])) : J("", !0)
        ])
      ])) : J("", !0),
      N("div", FT, [
        z(s.$slots, "default")
      ])
    ], 16));
  }
}), al = /* @__PURE__ */ K({
  __name: "Spinner",
  props: {
    size: { default: "md" },
    color: { default: void 0 }
  },
  setup(e) {
    const t = e, r = I(() => {
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
    }), n = I(() => t.color ? t.color : "text-primary");
    return (a, o) => (E(), F("div", {
      class: X([
        "inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        r.value,
        n.value
      ]),
      role: "status",
      "aria-label": "Loading"
    }, [...o[0] || (o[0] = [
      N("span", { class: "sr-only" }, "Loading...", -1)
    ])], 2));
  }
}), _T = ["onClick"], qT = { class: "group-hover:text-primary-600 text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors dark:text-gray-100 dark:group-hover:text-primary-300" }, BT = { class: "text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100" }, TD = /* @__PURE__ */ K({
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
    const r = t, n = e, a = bp(), o = (i) => {
      let u = i;
      s(i) && (u = null), r("updateSearch", u);
    }, s = (i) => {
      const u = {};
      return a.url.includes("?") && new URLSearchParams(a.url.split("?")[1]).forEach((c, d) => {
        u[d] = c;
      }), n.statusName != null ? u[n.statusName] == i : u.status == i;
    };
    return (i, u) => (E(), F("div", {
      class: X(["grid gap-4", [e.customContainerClass]]),
      style: { "grid-template-columns": "repeat(auto-fit, minmax(164px, 1fr))" }
    }, [
      (E(!0), F(ne, null, Ce(e.stats, (l) => (E(), F("div", {
        key: l.value,
        class: X(["group relative cursor-pointer overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-black/40", {
          "border-primary-200 bg-primary-50 ring-primary-500 ring-2 dark:border-primary-700 dark:bg-primary-900/30": s(l.name),
          [e.customStatClass]: e.customStatClass
        }]),
        onClick: (c) => o(l.name)
      }, [
        N("div", {
          class: X(["px-6 py-4", [e.customStatValueClass]])
        }, [
          N("div", qT, Q(l.value), 1)
        ], 2),
        N("div", {
          class: X(["border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40", [e.customStatLabelClass]])
        }, [
          N("div", BT, Q(l.label ?? l.name), 1)
        ], 2),
        u[0] || (u[0] = N("div", { class: "from-primary-500 to-primary-600 absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100" }, null, -1))
      ], 10, _T))), 128))
    ], 2));
  }
}), IT = "fill-white stroke-gray-200 dark:fill-gray-800 dark:stroke-gray-700", LT = /* @__PURE__ */ K({
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
    const t = e, r = I(() => ["top", "bottom", "left", "right"].includes(t.side) ? t.side : "top"), n = [
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
    return (a, o) => (E(), W(w(Av), { "delay-duration": e.delayDuration }, {
      default: V(() => [
        Y(w($v), { disabled: e.disabled }, {
          default: V(() => [
            Y(w(Mv), { "as-child": "" }, {
              default: V(() => [
                z(a.$slots, "default")
              ]),
              _: 3
            }),
            Y(w(Iv), null, {
              default: V(() => [
                Y(w(qv), {
                  side: r.value,
                  sideOffset: e.sideOffset,
                  collisionPadding: e.collisionPadding,
                  class: X([w(n), e.contentClass])
                }, {
                  default: V(() => [
                    fe(Q(e.content) + " ", 1),
                    Y(w(Cv), {
                      class: X([IT, e.arrowClass])
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
}), MT = ["type", "disabled"], NT = "focusable inline-flex cursor-pointer items-center justify-center rounded-md border font-semibold tracking-widest uppercase transition duration-150 ease-in-out focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:cursor-not-allowed", Tr = /* @__PURE__ */ K({
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
      [Ae.PRIMARY]: "bg-primary hover:bg-primary-700 focus:bg-primary-700 focus:ring-primary-500 active:bg-primary-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.SECONDARY]: "border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50 focus:ring-accent-500 disabled:opacity-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:disabled:opacity-60",
      [Ae.DANGER]: "bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-red-500 active:bg-red-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.WARNING]: "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 focus:ring-yellow-500 active:bg-yellow-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.INFO]: "bg-primary-500 hover:bg-primary-400 focus:bg-primary-600 focus:ring-primary-500 active:bg-primary-600 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.SUCCESS]: "bg-green-600 hover:bg-green-500 focus:bg-green-700 focus:ring-green-500 active:bg-green-700 border-transparent text-white disabled:brightness-125 disabled:grayscale-[30%]",
      [Ae.NO_STYLE]: ""
    };
    return (a, o) => (E(), F("button", {
      type: e.type,
      disabled: e.disabled,
      class: X([
        // Apply base styles and size only if not no-style theme
        t.theme !== w(Ae).NO_STYLE ? [NT, r[t.size]] : [],
        // Always apply theme variant
        n[t.theme],
        // Custom classes
        t.customClass
      ])
    }, [
      z(a.$slots, "default")
    ], 10, MT));
  }
}), jT = { class: "mt-2" }, $D = /* @__PURE__ */ K({
  __name: "Collapse",
  props: {
    open: { type: Boolean, default: !1 },
    button: { default: () => ["Show more", "Show less"] }
  },
  setup(e) {
    const t = e, r = j(t.open);
    return re(
      () => t.open,
      (n) => r.value = n
    ), me(() => {
      r.value = t.open;
    }), (n, a) => (E(), W(w(wi), {
      defaultOpen: e.open,
      open: r.value,
      "onUpdate:open": a[0] || (a[0] = (o) => r.value = o)
    }, {
      default: V(() => [
        Y(w(Si), { asChild: "" }, {
          default: V(() => [
            z(n.$slots, "trigger", {}, () => [
              Y(w(kT), Pe(De(n.$attrs)), {
                default: V(() => [
                  N("span", null, Q(r.value ? e.button[1] : e.button[0]), 1),
                  Y(Re, {
                    name: "$expand",
                    class: X(["transition-all", { "rotate-180": r.value }])
                  }, null, 8, ["class"])
                ]),
                _: 1
              }, 16)
            ])
          ]),
          _: 3
        }),
        Y(w(xi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
          default: V(() => [
            N("div", jT, [
              z(n.$slots, "default")
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["defaultOpen", "open"]));
  }
}), VT = { class: "border-t border-gray-100 dark:border-gray-700" }, UT = { class: "divide-y divide-gray-100 dark:divide-gray-700" }, DD = /* @__PURE__ */ K({
  __name: "DescriptionList",
  props: {
    form: { default: void 0 },
    stopEditOnSubmit: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const r = e, n = j(!1);
    re(
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
    const a = j([]);
    Cn("registerItem", (l) => {
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
    }), (l, c) => (E(), F("div", VT, [
      N("dl", UT, [
        z(l.$slots, "default")
      ])
    ]));
  }
}), HT = { class: "description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, zT = { class: "flex items-center text-sm font-medium dark:text-gray-200" }, WT = {
  key: 0,
  class: "ml-1 text-red-500 dark:text-red-400"
}, KT = { class: "mt-1 min-h-[42px] text-sm leading-6 text-gray-700 dark:text-gray-200 sm:col-span-2 sm:mt-0 dark:text-gray-200" }, GT = { class: "flex min-h-full items-center" }, JT = { class: "slot-content grow" }, YT = { class: "ml-4 shrink-0" }, XT = { class: "slot-edit grow" }, QT = { class: "ml-4 shrink-0" }, RD = /* @__PURE__ */ K({
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
    const n = e, a = r, o = j(n.editable ? n.forceEditing : !1), s = () => {
      n.editable && (o.value = !o.value, a("editToggled", o.value));
    };
    re(
      () => n.forceEditing,
      (d) => {
        n.editable && (o.value = d);
      }
    );
    const i = () => {
      n.editable && (o.value = !0);
    }, u = () => {
      n.editable && (o.value = !1);
    }, l = di("registerItem");
    return me(() => {
      l && l({ startEditing: i, stopEditing: u, toggleEditing: s });
    }), t({
      toggleEditing: s,
      startEditing: i,
      stopEditing: u,
      isEditing: () => o.value
    }), (d, m) => (E(), F("div", HT, [
      N("dt", zT, [
        fe(Q(e.label) + " ", 1),
        z(d.$slots, "label"),
        e.required ? (E(), F("span", WT, "*")) : J("", !0)
      ]),
      N("dd", KT, [
        N("div", GT, [
          o.value ? (E(), F(ne, { key: 1 }, [
            N("div", XT, [
              z(d.$slots, "edit")
            ]),
            N("span", QT, [
              N("button", {
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-xl font-bold"
              }, [
                Y(Re, { name: "$edit-alt" })
              ])
            ])
          ], 64)) : (E(), F(ne, { key: 0 }, [
            N("div", JT, [
              z(d.$slots, "default"),
              fe(" " + Q(e.value), 1)
            ]),
            N("span", YT, [
              e.editable ? (E(), F("button", {
                key: 0,
                type: "button",
                onClick: s,
                class: "text-primary hover:text-primary-400 text-lg font-bold"
              }, [
                Y(Re, { name: "$edit" })
              ])) : J("", !0),
              z(d.$slots, "buttons")
            ])
          ], 64))
        ])
      ])
    ]));
  }
});
var ks = { exports: {} };
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.8.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2023
 * @license MIT
 */
var Uc;
function ZT() {
  return Uc || (Uc = 1, (function(e) {
    (function() {
      var t = "input is invalid type", r = "finalize already called", n = typeof window == "object", a = n ? window : {};
      a.JS_MD5_NO_WINDOW && (n = !1);
      var o = !n && typeof self == "object", s = !a.JS_MD5_NO_NODE_JS && typeof process == "object" && process.versions && process.versions.node;
      s ? a = Gs : o && (a = self);
      var i = !a.JS_MD5_NO_COMMON_JS && !0 && e.exports, u = !a.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", l = "0123456789abcdef".split(""), c = [128, 32768, 8388608, -2147483648], d = [0, 8, 16, 24], m = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), p = [], h;
      if (u) {
        var f = new ArrayBuffer(68);
        h = new Uint8Array(f), p = new Uint32Array(f);
      }
      var y = Array.isArray;
      (a.JS_MD5_NO_NODE_JS || !y) && (y = function(g) {
        return Object.prototype.toString.call(g) === "[object Array]";
      });
      var x = ArrayBuffer.isView;
      u && (a.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !x) && (x = function(g) {
        return typeof g == "object" && g.buffer && g.buffer.constructor === ArrayBuffer;
      });
      var P = function(g) {
        var C = typeof g;
        if (C === "string")
          return [g, !0];
        if (C !== "object" || g === null)
          throw new Error(t);
        if (u && g.constructor === ArrayBuffer)
          return [new Uint8Array(g), !1];
        if (!y(g) && !x(g))
          throw new Error(t);
        return [g, !1];
      }, A = function(g) {
        return function(C) {
          return new M(!0).update(C)[g]();
        };
      }, T = function() {
        var g = A("hex");
        s && (g = $(g)), g.create = function() {
          return new M();
        }, g.update = function(b) {
          return g.create().update(b);
        };
        for (var C = 0; C < m.length; ++C) {
          var S = m[C];
          g[S] = A(S);
        }
        return g;
      }, $ = function(g) {
        var C = Js, S = Js.Buffer, b;
        S.from && !a.JS_MD5_NO_BUFFER_FROM ? b = S.from : b = function(B) {
          return new S(B);
        };
        var q = function(B) {
          if (typeof B == "string")
            return C.createHash("md5").update(B, "utf8").digest("hex");
          if (B == null)
            throw new Error(t);
          return B.constructor === ArrayBuffer && (B = new Uint8Array(B)), y(B) || x(B) || B.constructor === S ? C.createHash("md5").update(b(B)).digest("hex") : g(B);
        };
        return q;
      }, O = function(g) {
        return function(C, S) {
          return new D(C, !0).update(S)[g]();
        };
      }, _ = function() {
        var g = O("hex");
        g.create = function(b) {
          return new D(b);
        }, g.update = function(b, q) {
          return g.create(b).update(q);
        };
        for (var C = 0; C < m.length; ++C) {
          var S = m[C];
          g[S] = O(S);
        }
        return g;
      };
      function M(g) {
        if (g)
          p[0] = p[16] = p[1] = p[2] = p[3] = p[4] = p[5] = p[6] = p[7] = p[8] = p[9] = p[10] = p[11] = p[12] = p[13] = p[14] = p[15] = 0, this.blocks = p, this.buffer8 = h;
        else if (u) {
          var C = new ArrayBuffer(68);
          this.buffer8 = new Uint8Array(C), this.blocks = new Uint32Array(C);
        } else
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
      }
      M.prototype.update = function(g) {
        if (this.finalized)
          throw new Error(r);
        var C = P(g);
        g = C[0];
        for (var S = C[1], b, q = 0, B, k = g.length, G = this.blocks, te = this.buffer8; q < k; ) {
          if (this.hashed && (this.hashed = !1, G[0] = G[16], G[16] = G[1] = G[2] = G[3] = G[4] = G[5] = G[6] = G[7] = G[8] = G[9] = G[10] = G[11] = G[12] = G[13] = G[14] = G[15] = 0), S)
            if (u)
              for (B = this.start; q < k && B < 64; ++q)
                b = g.charCodeAt(q), b < 128 ? te[B++] = b : b < 2048 ? (te[B++] = 192 | b >>> 6, te[B++] = 128 | b & 63) : b < 55296 || b >= 57344 ? (te[B++] = 224 | b >>> 12, te[B++] = 128 | b >>> 6 & 63, te[B++] = 128 | b & 63) : (b = 65536 + ((b & 1023) << 10 | g.charCodeAt(++q) & 1023), te[B++] = 240 | b >>> 18, te[B++] = 128 | b >>> 12 & 63, te[B++] = 128 | b >>> 6 & 63, te[B++] = 128 | b & 63);
            else
              for (B = this.start; q < k && B < 64; ++q)
                b = g.charCodeAt(q), b < 128 ? G[B >>> 2] |= b << d[B++ & 3] : b < 2048 ? (G[B >>> 2] |= (192 | b >>> 6) << d[B++ & 3], G[B >>> 2] |= (128 | b & 63) << d[B++ & 3]) : b < 55296 || b >= 57344 ? (G[B >>> 2] |= (224 | b >>> 12) << d[B++ & 3], G[B >>> 2] |= (128 | b >>> 6 & 63) << d[B++ & 3], G[B >>> 2] |= (128 | b & 63) << d[B++ & 3]) : (b = 65536 + ((b & 1023) << 10 | g.charCodeAt(++q) & 1023), G[B >>> 2] |= (240 | b >>> 18) << d[B++ & 3], G[B >>> 2] |= (128 | b >>> 12 & 63) << d[B++ & 3], G[B >>> 2] |= (128 | b >>> 6 & 63) << d[B++ & 3], G[B >>> 2] |= (128 | b & 63) << d[B++ & 3]);
          else if (u)
            for (B = this.start; q < k && B < 64; ++q)
              te[B++] = g[q];
          else
            for (B = this.start; q < k && B < 64; ++q)
              G[B >>> 2] |= g[q] << d[B++ & 3];
          this.lastByteIndex = B, this.bytes += B - this.start, B >= 64 ? (this.start = B - 64, this.hash(), this.hashed = !0) : this.start = B;
        }
        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
      }, M.prototype.finalize = function() {
        if (!this.finalized) {
          this.finalized = !0;
          var g = this.blocks, C = this.lastByteIndex;
          g[C >>> 2] |= c[C & 3], C >= 56 && (this.hashed || this.hash(), g[0] = g[16], g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0), g[14] = this.bytes << 3, g[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();
        }
      }, M.prototype.hash = function() {
        var g, C, S, b, q, B, k = this.blocks;
        this.first ? (g = k[0] - 680876937, g = (g << 7 | g >>> 25) - 271733879 << 0, b = (-1732584194 ^ g & 2004318071) + k[1] - 117830708, b = (b << 12 | b >>> 20) + g << 0, S = (-271733879 ^ b & (g ^ -271733879)) + k[2] - 1126478375, S = (S << 17 | S >>> 15) + b << 0, C = (g ^ S & (b ^ g)) + k[3] - 1316259209, C = (C << 22 | C >>> 10) + S << 0) : (g = this.h0, C = this.h1, S = this.h2, b = this.h3, g += (b ^ C & (S ^ b)) + k[0] - 680876936, g = (g << 7 | g >>> 25) + C << 0, b += (S ^ g & (C ^ S)) + k[1] - 389564586, b = (b << 12 | b >>> 20) + g << 0, S += (C ^ b & (g ^ C)) + k[2] + 606105819, S = (S << 17 | S >>> 15) + b << 0, C += (g ^ S & (b ^ g)) + k[3] - 1044525330, C = (C << 22 | C >>> 10) + S << 0), g += (b ^ C & (S ^ b)) + k[4] - 176418897, g = (g << 7 | g >>> 25) + C << 0, b += (S ^ g & (C ^ S)) + k[5] + 1200080426, b = (b << 12 | b >>> 20) + g << 0, S += (C ^ b & (g ^ C)) + k[6] - 1473231341, S = (S << 17 | S >>> 15) + b << 0, C += (g ^ S & (b ^ g)) + k[7] - 45705983, C = (C << 22 | C >>> 10) + S << 0, g += (b ^ C & (S ^ b)) + k[8] + 1770035416, g = (g << 7 | g >>> 25) + C << 0, b += (S ^ g & (C ^ S)) + k[9] - 1958414417, b = (b << 12 | b >>> 20) + g << 0, S += (C ^ b & (g ^ C)) + k[10] - 42063, S = (S << 17 | S >>> 15) + b << 0, C += (g ^ S & (b ^ g)) + k[11] - 1990404162, C = (C << 22 | C >>> 10) + S << 0, g += (b ^ C & (S ^ b)) + k[12] + 1804603682, g = (g << 7 | g >>> 25) + C << 0, b += (S ^ g & (C ^ S)) + k[13] - 40341101, b = (b << 12 | b >>> 20) + g << 0, S += (C ^ b & (g ^ C)) + k[14] - 1502002290, S = (S << 17 | S >>> 15) + b << 0, C += (g ^ S & (b ^ g)) + k[15] + 1236535329, C = (C << 22 | C >>> 10) + S << 0, g += (S ^ b & (C ^ S)) + k[1] - 165796510, g = (g << 5 | g >>> 27) + C << 0, b += (C ^ S & (g ^ C)) + k[6] - 1069501632, b = (b << 9 | b >>> 23) + g << 0, S += (g ^ C & (b ^ g)) + k[11] + 643717713, S = (S << 14 | S >>> 18) + b << 0, C += (b ^ g & (S ^ b)) + k[0] - 373897302, C = (C << 20 | C >>> 12) + S << 0, g += (S ^ b & (C ^ S)) + k[5] - 701558691, g = (g << 5 | g >>> 27) + C << 0, b += (C ^ S & (g ^ C)) + k[10] + 38016083, b = (b << 9 | b >>> 23) + g << 0, S += (g ^ C & (b ^ g)) + k[15] - 660478335, S = (S << 14 | S >>> 18) + b << 0, C += (b ^ g & (S ^ b)) + k[4] - 405537848, C = (C << 20 | C >>> 12) + S << 0, g += (S ^ b & (C ^ S)) + k[9] + 568446438, g = (g << 5 | g >>> 27) + C << 0, b += (C ^ S & (g ^ C)) + k[14] - 1019803690, b = (b << 9 | b >>> 23) + g << 0, S += (g ^ C & (b ^ g)) + k[3] - 187363961, S = (S << 14 | S >>> 18) + b << 0, C += (b ^ g & (S ^ b)) + k[8] + 1163531501, C = (C << 20 | C >>> 12) + S << 0, g += (S ^ b & (C ^ S)) + k[13] - 1444681467, g = (g << 5 | g >>> 27) + C << 0, b += (C ^ S & (g ^ C)) + k[2] - 51403784, b = (b << 9 | b >>> 23) + g << 0, S += (g ^ C & (b ^ g)) + k[7] + 1735328473, S = (S << 14 | S >>> 18) + b << 0, C += (b ^ g & (S ^ b)) + k[12] - 1926607734, C = (C << 20 | C >>> 12) + S << 0, q = C ^ S, g += (q ^ b) + k[5] - 378558, g = (g << 4 | g >>> 28) + C << 0, b += (q ^ g) + k[8] - 2022574463, b = (b << 11 | b >>> 21) + g << 0, B = b ^ g, S += (B ^ C) + k[11] + 1839030562, S = (S << 16 | S >>> 16) + b << 0, C += (B ^ S) + k[14] - 35309556, C = (C << 23 | C >>> 9) + S << 0, q = C ^ S, g += (q ^ b) + k[1] - 1530992060, g = (g << 4 | g >>> 28) + C << 0, b += (q ^ g) + k[4] + 1272893353, b = (b << 11 | b >>> 21) + g << 0, B = b ^ g, S += (B ^ C) + k[7] - 155497632, S = (S << 16 | S >>> 16) + b << 0, C += (B ^ S) + k[10] - 1094730640, C = (C << 23 | C >>> 9) + S << 0, q = C ^ S, g += (q ^ b) + k[13] + 681279174, g = (g << 4 | g >>> 28) + C << 0, b += (q ^ g) + k[0] - 358537222, b = (b << 11 | b >>> 21) + g << 0, B = b ^ g, S += (B ^ C) + k[3] - 722521979, S = (S << 16 | S >>> 16) + b << 0, C += (B ^ S) + k[6] + 76029189, C = (C << 23 | C >>> 9) + S << 0, q = C ^ S, g += (q ^ b) + k[9] - 640364487, g = (g << 4 | g >>> 28) + C << 0, b += (q ^ g) + k[12] - 421815835, b = (b << 11 | b >>> 21) + g << 0, B = b ^ g, S += (B ^ C) + k[15] + 530742520, S = (S << 16 | S >>> 16) + b << 0, C += (B ^ S) + k[2] - 995338651, C = (C << 23 | C >>> 9) + S << 0, g += (S ^ (C | ~b)) + k[0] - 198630844, g = (g << 6 | g >>> 26) + C << 0, b += (C ^ (g | ~S)) + k[7] + 1126891415, b = (b << 10 | b >>> 22) + g << 0, S += (g ^ (b | ~C)) + k[14] - 1416354905, S = (S << 15 | S >>> 17) + b << 0, C += (b ^ (S | ~g)) + k[5] - 57434055, C = (C << 21 | C >>> 11) + S << 0, g += (S ^ (C | ~b)) + k[12] + 1700485571, g = (g << 6 | g >>> 26) + C << 0, b += (C ^ (g | ~S)) + k[3] - 1894986606, b = (b << 10 | b >>> 22) + g << 0, S += (g ^ (b | ~C)) + k[10] - 1051523, S = (S << 15 | S >>> 17) + b << 0, C += (b ^ (S | ~g)) + k[1] - 2054922799, C = (C << 21 | C >>> 11) + S << 0, g += (S ^ (C | ~b)) + k[8] + 1873313359, g = (g << 6 | g >>> 26) + C << 0, b += (C ^ (g | ~S)) + k[15] - 30611744, b = (b << 10 | b >>> 22) + g << 0, S += (g ^ (b | ~C)) + k[6] - 1560198380, S = (S << 15 | S >>> 17) + b << 0, C += (b ^ (S | ~g)) + k[13] + 1309151649, C = (C << 21 | C >>> 11) + S << 0, g += (S ^ (C | ~b)) + k[4] - 145523070, g = (g << 6 | g >>> 26) + C << 0, b += (C ^ (g | ~S)) + k[11] - 1120210379, b = (b << 10 | b >>> 22) + g << 0, S += (g ^ (b | ~C)) + k[2] + 718787259, S = (S << 15 | S >>> 17) + b << 0, C += (b ^ (S | ~g)) + k[9] - 343485551, C = (C << 21 | C >>> 11) + S << 0, this.first ? (this.h0 = g + 1732584193 << 0, this.h1 = C - 271733879 << 0, this.h2 = S - 1732584194 << 0, this.h3 = b + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + g << 0, this.h1 = this.h1 + C << 0, this.h2 = this.h2 + S << 0, this.h3 = this.h3 + b << 0);
      }, M.prototype.hex = function() {
        this.finalize();
        var g = this.h0, C = this.h1, S = this.h2, b = this.h3;
        return l[g >>> 4 & 15] + l[g & 15] + l[g >>> 12 & 15] + l[g >>> 8 & 15] + l[g >>> 20 & 15] + l[g >>> 16 & 15] + l[g >>> 28 & 15] + l[g >>> 24 & 15] + l[C >>> 4 & 15] + l[C & 15] + l[C >>> 12 & 15] + l[C >>> 8 & 15] + l[C >>> 20 & 15] + l[C >>> 16 & 15] + l[C >>> 28 & 15] + l[C >>> 24 & 15] + l[S >>> 4 & 15] + l[S & 15] + l[S >>> 12 & 15] + l[S >>> 8 & 15] + l[S >>> 20 & 15] + l[S >>> 16 & 15] + l[S >>> 28 & 15] + l[S >>> 24 & 15] + l[b >>> 4 & 15] + l[b & 15] + l[b >>> 12 & 15] + l[b >>> 8 & 15] + l[b >>> 20 & 15] + l[b >>> 16 & 15] + l[b >>> 28 & 15] + l[b >>> 24 & 15];
      }, M.prototype.toString = M.prototype.hex, M.prototype.digest = function() {
        this.finalize();
        var g = this.h0, C = this.h1, S = this.h2, b = this.h3;
        return [
          g & 255,
          g >>> 8 & 255,
          g >>> 16 & 255,
          g >>> 24 & 255,
          C & 255,
          C >>> 8 & 255,
          C >>> 16 & 255,
          C >>> 24 & 255,
          S & 255,
          S >>> 8 & 255,
          S >>> 16 & 255,
          S >>> 24 & 255,
          b & 255,
          b >>> 8 & 255,
          b >>> 16 & 255,
          b >>> 24 & 255
        ];
      }, M.prototype.array = M.prototype.digest, M.prototype.arrayBuffer = function() {
        this.finalize();
        var g = new ArrayBuffer(16), C = new Uint32Array(g);
        return C[0] = this.h0, C[1] = this.h1, C[2] = this.h2, C[3] = this.h3, g;
      }, M.prototype.buffer = M.prototype.arrayBuffer, M.prototype.base64 = function() {
        for (var g, C, S, b = "", q = this.array(), B = 0; B < 15; )
          g = q[B++], C = q[B++], S = q[B++], b += v[g >>> 2] + v[(g << 4 | C >>> 4) & 63] + v[(C << 2 | S >>> 6) & 63] + v[S & 63];
        return g = q[B], b += v[g >>> 2] + v[g << 4 & 63] + "==", b;
      };
      function D(g, C) {
        var S, b = P(g);
        if (g = b[0], b[1]) {
          var q = [], B = g.length, k = 0, G;
          for (S = 0; S < B; ++S)
            G = g.charCodeAt(S), G < 128 ? q[k++] = G : G < 2048 ? (q[k++] = 192 | G >>> 6, q[k++] = 128 | G & 63) : G < 55296 || G >= 57344 ? (q[k++] = 224 | G >>> 12, q[k++] = 128 | G >>> 6 & 63, q[k++] = 128 | G & 63) : (G = 65536 + ((G & 1023) << 10 | g.charCodeAt(++S) & 1023), q[k++] = 240 | G >>> 18, q[k++] = 128 | G >>> 12 & 63, q[k++] = 128 | G >>> 6 & 63, q[k++] = 128 | G & 63);
          g = q;
        }
        g.length > 64 && (g = new M(!0).update(g).array());
        var te = [], de = [];
        for (S = 0; S < 64; ++S) {
          var Be = g[S] || 0;
          te[S] = 92 ^ Be, de[S] = 54 ^ Be;
        }
        M.call(this, C), this.update(de), this.oKeyPad = te, this.inner = !0, this.sharedMemory = C;
      }
      D.prototype = new M(), D.prototype.finalize = function() {
        if (M.prototype.finalize.call(this), this.inner) {
          this.inner = !1;
          var g = this.array();
          M.call(this, this.sharedMemory), this.update(this.oKeyPad), this.update(g), M.prototype.finalize.call(this);
        }
      };
      var R = T();
      R.md5 = R, R.md5.hmac = _(), i ? e.exports = R : a.md5 = R;
    })();
  })(ks)), ks.exports;
}
var e$ = ZT();
const t$ = ["src", "alt"], FD = /* @__PURE__ */ K({
  __name: "GravatarImg",
  props: {
    email: {},
    size: { default: 100 }
  },
  setup(e) {
    const t = e, r = I(() => e$.md5(t.email.trim().toLowerCase())), n = I(() => `https://www.gravatar.com/avatar/${r.value}?s=${t.size}`), a = I(() => `Gravatar for ${t.email}`);
    return (o, s) => (E(), F("img", {
      src: n.value,
      alt: a.value
    }, null, 8, t$));
  }
}), r$ = { class: "list-none m-0 ml-0 before:hidden" }, n$ = ["id"], a$ = {
  key: 0,
  class: "flex size-4 items-center justify-center"
}, o$ = { class: "ml-3 flex-1 text-left whitespace-nowrap" }, s$ = { class: "m-0 list-none space-y-1 px-4 py-1 pl-7" }, _D = /* @__PURE__ */ K({
  __name: "NavCollapse",
  props: {
    open: { type: Boolean, default: !1 },
    name: {}
  },
  setup(e) {
    const t = e, r = j(t.open);
    return re(
      () => t.open,
      (n) => r.value = n
    ), (n, a) => (E(), F("li", r$, [
      Y(w(wi), {
        defaultOpen: e.open,
        open: r.value,
        "onUpdate:open": a[0] || (a[0] = (o) => r.value = o)
      }, {
        default: V(() => [
          Y(w(Si), { asChild: "" }, {
            default: V(() => [
              N("button", {
                id: e.name,
                class: "focusable group flex w-full cursor-pointer items-center rounded-lg p-2 text-base text-gray-900 dark:text-gray-100 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              }, [
                n.$slots.icon ? (E(), F("div", a$, [
                  z(n.$slots, "icon")
                ])) : J("", !0),
                N("span", o$, Q(e.name), 1),
                Y(Re, {
                  name: "$expand",
                  class: X(["transition-all", { "rotate-180": r.value }])
                }, null, 8, ["class"])
              ], 8, n$)
            ]),
            _: 3
          }),
          Y(w(xi), { class: "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden" }, {
            default: V(() => [
              N("ul", s$, [
                z(n.$slots, "default")
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["defaultOpen", "open"])
    ]));
  }
}), i$ = { class: "relative" }, l$ = { class: "mt-4 flex flex-col items-center justify-center" }, u$ = { class: "relative flex w-fit flex-row justify-center gap-3" }, c$ = ["onClick"], d$ = 20, qD = {
  __name: "DottedCarousel",
  props: {
    /** Outer padding offset applied to the scroll math when clicking a dot */
    padding: { default: 0 },
    /** Pixel gap between slides */
    gap: { default: 20 }
  },
  setup(e) {
    const t = j(0), r = j(null), n = j(null), a = j(0);
    let o = null;
    const s = e, i = j(0);
    re(t, (d) => {
      r.value && (i.value = `${d * d$}`);
    });
    const u = (d, m) => {
      var v;
      (v = n.value) != null && v.children[m] && (t.value = m, n.value.scrollTo({
        behavior: "smooth",
        // offsetLeft is the child's left position within the scroll container,
        // already in the same coordinate space as scrollLeft.
        left: n.value.children[m].offsetLeft - s.padding
      }));
    }, l = () => {
      var m;
      if (!((m = n.value) != null && m.children[0])) return;
      const d = n.value.children[0].getBoundingClientRect().width;
      t.value = Math.round(n.value.scrollLeft / (d + s.gap));
    }, c = () => {
      var d;
      a.value = ((d = n.value) == null ? void 0 : d.children.length) ?? 0;
    };
    return me(() => {
      c(), l(), n.value.addEventListener("scroll", l), o = new MutationObserver(c), o.observe(n.value, { childList: !0 });
    }), pi(() => {
      var d;
      o == null || o.disconnect(), (d = n.value) == null || d.removeEventListener("scroll", l);
    }), (d, m) => (E(), F("div", i$, [
      N("div", {
        class: "flex snap-x snap-mandatory overflow-x-auto [&::-webkit-scrollbar]:hidden",
        style: st({ gap: `${e.gap}px` }),
        ref_key: "container",
        ref: n,
        onScroll: m[0] || (m[0] = (...v) => d.onContainerScroll && d.onContainerScroll(...v))
      }, [
        z(d.$slots, "default")
      ], 36),
      N("div", l$, [
        N("div", u$, [
          N("div", {
            class: "absolute h-2 w-2 rounded-full bg-primary transition-all duration-300",
            style: st({ left: `${i.value}px` }),
            ref_key: "activeDot",
            ref: r
          }, null, 4),
          (E(!0), F(ne, null, Ce(a.value, (v) => (E(), F("div", {
            key: v,
            class: "h-2 w-2 cursor-pointer rounded-full bg-accent",
            onClick: (p) => u(p, v - 1)
          }, null, 8, c$))), 128))
        ])
      ])
    ]));
  }
}, f$ = { class: "absolute inset-0 isolate z-0 size-full" }, BD = /* @__PURE__ */ K({
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
    const t = e, r = I(() => {
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
    return (n, a) => (E(), F("div", {
      class: X(["group relative cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:hover:shadow-black/40", {
        [r.value.base]: !0,
        "ring-2": e.selected,
        [e.customStatClass]: e.customStatClass
      }])
    }, [
      N("div", {
        class: X(["relative overflow-clip px-6 py-4", [e.customStatValueClass]])
      }, [
        N("div", f$, [
          z(n.$slots, "icon", {}, () => [
            e.icon ? (E(), W(Re, {
              key: 0,
              name: e.icon,
              size: "3x",
              class: X([[r.value.hoverText], "absolute top-1/2 right-2 h-4/5 -translate-y-1/2 text-gray-400 opacity-50 transition-colors dark:text-gray-600"])
            }, null, 8, ["name", "class"])) : J("", !0)
          ])
        ]),
        N("div", {
          class: X([[r.value.hoverText], "text-2xl font-bold text-gray-900 dark:text-gray-100 transition-colors dark:text-gray-100"])
        }, Q(e.value), 3)
      ], 2),
      N("div", {
        class: X(["border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 px-6 py-3 dark:border-gray-700 dark:bg-gray-900/40", [e.customStatLabelClass]])
      }, [
        N("div", {
          class: X([[r.value.hoverText], "text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors dark:text-gray-400"])
        }, Q(e.label), 3)
      ], 2),
      N("div", {
        class: X([[r.value.gradient], "absolute bottom-0 left-0 h-0.5 w-full scale-x-0 transform bg-gradient-to-r transition-transform duration-200 group-hover:scale-x-100"])
      }, null, 2)
    ], 2));
  }
}), p$ = /* @__PURE__ */ K({
  __name: "PrimaryButton",
  props: {
    type: { default: "submit" },
    disabled: { type: Boolean, default: !1 },
    customButtonClass: { default: "" },
    size: { default: "md" }
  },
  setup(e) {
    return (t, r) => (E(), W(w(Tr), {
      theme: w(Ae).PRIMARY,
      type: e.type,
      disabled: e.disabled,
      "custom-class": e.customButtonClass,
      size: e.size
    }, {
      default: V(() => [
        z(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["theme", "type", "disabled", "custom-class", "size"]));
  }
}), h$ = { class: "relative mt-4 mb-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 dark:border-gray-700 dark:bg-gray-900" }, m$ = { class: "flex items-center justify-between rounded-t-lg border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-900/60 px-4 py-2 dark:border-gray-700 dark:bg-gray-800" }, y$ = { class: "overflow-x-auto p-4 text-sm" }, g$ = { class: "language-vue text-gray-800 dark:text-gray-200 font-mono" }, ID = /* @__PURE__ */ K({
  __name: "CodePreview",
  props: {
    code: {}
  },
  setup(e) {
    const t = e, r = I(() => Array.isArray(t.code) ? t.code.join(`
`) : (console.error("CodePreview: `code` prop is not an array of strings.", t.code), "")), n = j("Copy"), a = async () => {
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
    return (o, s) => (E(), F("div", h$, [
      N("div", m$, [
        s[0] || (s[0] = N("span", { class: "text-sm font-medium text-gray-700 dark:text-gray-200" }, "Code Example", -1)),
        N("button", {
          onClick: a,
          class: X(["rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100", {
            "text-green-600 dark:text-green-400": n.value.includes("✓"),
            "text-red-600 dark:text-red-400": n.value.includes("✗")
          }]),
          title: "Copy to clipboard"
        }, Q(n.value), 3)
      ]),
      N("pre", y$, [
        N("code", g$, Q(r.value), 1)
      ])
    ]));
  }
}), v$ = { class: "mt-12 mb-8" }, b$ = ["id"], LD = /* @__PURE__ */ K({
  __name: "H2",
  props: {
    title: {}
  },
  setup(e) {
    return (t, r) => (E(), F("div", v$, [
      N("h2", {
        id: e.title.toLowerCase().replace(/\s+/g, "-"),
        class: "border-primary-600 mb-6 border-b-2 pb-2 text-2xl font-bold text-gray-900"
      }, Q(e.title), 9, b$)
    ]));
  }
}), w$ = "nb-vue-components:dark", pa = j(!1);
let ci = null, En = w$, Ur = null, yn = null;
const x$ = (e) => ci || (typeof document > "u" ? null : document.documentElement), S$ = (e) => {
  const t = x$();
  t && t.classList.toggle("dark", e);
}, E$ = (e) => {
  if (En !== !1 && !(typeof window > "u"))
    try {
      window.localStorage.setItem(En, e ? "1" : "0");
    } catch {
    }
}, Ts = () => {
  if (En === !1 || typeof window > "u") return null;
  try {
    const e = window.localStorage.getItem(En);
    if (e === "1") return !0;
    if (e === "0") return !1;
  } catch {
  }
  return null;
}, ra = () => {
  Ur && yn && Ur.removeEventListener("change", yn), Ur = null, yn = null;
};
re(
  pa,
  (e) => {
    S$(e), E$(e);
  },
  { immediate: !1 }
);
function C$(e = {}) {
  e.target !== void 0 && (ci = e.target), e.storageKey !== void 0 && (En = e.storageKey);
  const t = (i) => {
    pa.value = i;
  };
  return {
    isDark: pa,
    enable: () => t(!0),
    disable: () => t(!1),
    toggle: () => t(!pa.value),
    set: t,
    setupSystemPreference: () => {
      if (typeof window > "u" || !window.matchMedia)
        return () => {
        };
      ra(), Ur = window.matchMedia("(prefers-color-scheme: dark)"), Ts() === null && t(Ur.matches), yn = (i) => {
        Ts() === null && t(i.matches);
      }, Ur.addEventListener("change", yn);
      try {
        fi(ra);
      } catch {
      }
      return ra;
    },
    teardownSystemPreference: ra,
    initialize: (i = !1) => {
      const u = Ts();
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
const MD = {
  install(e, t = {}) {
    var n, a;
    for (const o in components)
      e.component(o, components[o]);
    if (((a = (n = e._context) == null ? void 0 : n.provides) == null ? void 0 : a[Yp]) || e.use(Xp()), t.darkMode) {
      const o = C$({
        target: t.darkModeTarget,
        storageKey: t.darkModeStorageKey
      });
      o.initialize(), t.darkMode === "system" && o.setupSystemPreference();
    }
  }
};
export {
  uD as Alert,
  Tr as Button,
  ph as Checkbox,
  ID as CodePreview,
  Jk as CollapsableSection,
  $D as Collapse,
  Jk as CollapsibleSection,
  ED as DangerButton,
  BD as DataTile,
  DD as DescriptionList,
  RD as DescriptionListItem,
  qD as DottedCarousel,
  cD as Dropdown,
  dD as DropdownLink,
  F$ as DropdownSearchbar,
  fD as DropdownSeparator,
  SD as EnhancedTable,
  rD as FileDropZoneInput,
  FD as GravatarImg,
  LD as H2,
  nD as Images,
  PD as InfoButton,
  Oh as Input,
  cr as InputError,
  Yr as InputLabel,
  hi as InputWrapper,
  pD as LinkButton,
  hD as LinkDropdownButton,
  mD as LinkDropdownButtonItem,
  yD as Logs,
  gT as LogsContent,
  gD as Modal,
  _D as NavCollapse,
  bD as NavLink,
  Re as NbIcon,
  vD as NewModal,
  $p as Pagination,
  p$ as PrimaryButton,
  k$ as PropsTable,
  aD as RadioButton,
  AD as ResponsiveNavLink,
  R$ as RichSelect,
  ab as SearchSelect,
  kT as SecondaryButton,
  kD as Section,
  D$ as Select,
  _$ as Select2ajax,
  oD as SelectMultiple,
  al as Spinner,
  TD as Stats,
  Ta as SubmitButton,
  OD as SuccessButton,
  Uv as Switch,
  fk as Table,
  lD as TableItemCard,
  vk as Tbody,
  $a as Td,
  wD as TdCollapseHandler,
  mi as TextInput,
  Bh as Textarea,
  xk as Th,
  pk as Thead,
  LT as Tooltip,
  xD as Tr,
  iD as TrCollapse,
  sD as TrCollapseHandler,
  Vc as TrPlaceholder,
  T$ as UnderConstruction,
  CD as WarningButton,
  Xp as createNbIcons,
  MD as default,
  VD as defaultAliases,
  bp as getInertiaPage,
  eo as getInertiaRouter,
  Z$ as hasPermission,
  YO as moneyFormat,
  Q$ as numberFormat,
  tD as setInertiaPage,
  eD as setInertiaRouter,
  C$ as useDarkMode,
  Ch as useFormIntegration,
  Tp as useInertiaTable,
  Ph as useInputUtils,
  Sh as useInputValue,
  UD as useNbIcons,
  Eh as usePasswordToggle,
  kp as useStickyTableHeader,
  ik as useTable,
  sk as useTableSelection,
  Ap as useTableSort
};
