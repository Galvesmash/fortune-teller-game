"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunk_galvesmash_fortune_teller_game"] = (typeof self !== 'undefined' ? self : this)["webpackChunk_galvesmash_fortune_teller_game"] || []).push([[801],{

/***/ 801:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ FortuneCard; }
});

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(100);
// EXTERNAL MODULE: ./node_modules/pinia/dist/pinia.mjs + 1 modules
var pinia = __webpack_require__(445);
// EXTERNAL MODULE: ./src/store/index.ts + 6 modules
var store = __webpack_require__(209);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FortuneCard.vue?vue&type=script&setup=true&lang=ts


const _hoisted_1 = { class: "fortune-card" };
const _hoisted_2 = {
    key: 0,
    class: "fortune"
};
const _hoisted_3 = {
    key: 1,
    class: "fortune error"
};


/* harmony default export */ var FortuneCardvue_type_script_setup_true_lang_ts = (/*@__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.defineComponent)({
    __name: 'FortuneCard',
    setup(__props) {
        const fortuneStore = (0,store/* useFortuneStore */.e)();
        const { fortune, fortuneError, fortuneTranslated } = (0,pinia/* storeToRefs */.bP)(fortuneStore);
        return (_ctx, _cache) => {
            return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [
                (!(0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(fortuneError) && ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(fortuneTranslated) || (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(fortune)))
                    ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("p", _hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(fortuneTranslated) || (0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(fortune)), 1))
                    : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.unref)(fortuneError))
                        ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("p", _hoisted_3, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(_ctx.$t('general.fortune_machine_error')) + " " + (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(_ctx.$t('general.try_again_later')), 1))
                        : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true)
            ]));
        };
    }
}));

;// ./src/components/FortuneCard.vue?vue&type=script&setup=true&lang=ts
 
;// ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/FortuneCard.vue?vue&type=style&index=0&id=06c0a01a&scoped=true&lang=scss
// extracted by mini-css-extract-plugin

;// ./src/components/FortuneCard.vue?vue&type=style&index=0&id=06c0a01a&scoped=true&lang=scss

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(262);
;// ./src/components/FortuneCard.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(FortuneCardvue_type_script_setup_true_lang_ts, [['__scopeId',"data-v-06c0a01a"]])

/* harmony default export */ var FortuneCard = (__exports__);

/***/ })

}]);
//# sourceMappingURL=fortune-teller-game.common.801.js.map