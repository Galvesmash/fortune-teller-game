"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkfortune_teller_game"] = (typeof self !== 'undefined' ? self : this)["webpackChunkfortune_teller_game"] || []).push([[553],{

/***/ 553:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ModalTemplate; }
});

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(274);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-83.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ModalTemplate.vue?vue&type=script&setup=true&lang=ts


const _hoisted_1 = { class: "modal-wrapper" };
const _hoisted_2 = { class: "modal-container" };

/* harmony default export */ var ModalTemplatevue_type_script_setup_true_lang_ts = (/*@__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
    __name: 'ModalTemplate',
    emits: ['handle-close'],
    setup(__props, { emit: __emit }) {
        const emit = __emit;
        const show = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.ref)(true);
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Transition, { name: "modal" }, {
                default: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withCtx)(() => [
                    (show.value)
                        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
                            key: 0,
                            class: "modal-mask",
                            onClick: _cache[0] || (_cache[0] = ($event) => (emit('handle-close')))
                        }, [
                            (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [
                                (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [
                                    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")
                                ])
                            ])
                        ]))
                        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
                ]),
                _: 3
            }));
        };
    }
}));

;// ./src/components/ModalTemplate.vue?vue&type=script&setup=true&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-65.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-65.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-65.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-65.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ModalTemplate.vue?vue&type=style&index=0&id=a2087ee4&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// ./src/components/ModalTemplate.vue?vue&type=style&index=0&id=a2087ee4&scoped=true&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(262);
;// ./src/components/ModalTemplate.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(ModalTemplatevue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-a2087ee4"]])

/* harmony default export */ var ModalTemplate = (__exports__);

/***/ })

}]);
//# sourceMappingURL=fortune-teller-game.umd.553.js.map