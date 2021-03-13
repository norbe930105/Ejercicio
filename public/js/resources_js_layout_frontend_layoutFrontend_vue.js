(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layout_frontend_layoutFrontend_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/linksComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/linksComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "linksComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      "default": '#'
    },
    icon: {
      type: String,
      "default": ''
    }
  },
  methods: {
    "goto": function goto(path) {
      if (path) {
        this.$router.push(path);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/frontend/layoutFrontend.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/frontend/layoutFrontend.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_linksComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/linksComponent */ "./resources/js/components/linksComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var linksData = [{
  title: 'Docs',
  icon: 'school',
  link: '/'
}, {
  title: 'Personas',
  icon: 'record_voice_over',
  link: 'personas'
}];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "layoutFrontend",
  components: {
    linksComponent: _components_linksComponent__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      leftDrawerOpen: false,
      links: linksData
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['currentPage'])),
  methods: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['changePage']))
});

/***/ }),

/***/ "./resources/js/components/linksComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/linksComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _linksComponent_vue_vue_type_template_id_436dfa4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linksComponent.vue?vue&type=template&id=436dfa4f&scoped=true& */ "./resources/js/components/linksComponent.vue?vue&type=template&id=436dfa4f&scoped=true&");
/* harmony import */ var _linksComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linksComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/linksComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _linksComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _linksComponent_vue_vue_type_template_id_436dfa4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _linksComponent_vue_vue_type_template_id_436dfa4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "436dfa4f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/linksComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layout/frontend/layoutFrontend.vue":
/*!*********************************************************!*\
  !*** ./resources/js/layout/frontend/layoutFrontend.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layoutFrontend_vue_vue_type_template_id_10d36ddc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layoutFrontend.vue?vue&type=template&id=10d36ddc&scoped=true& */ "./resources/js/layout/frontend/layoutFrontend.vue?vue&type=template&id=10d36ddc&scoped=true&");
/* harmony import */ var _layoutFrontend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutFrontend.vue?vue&type=script&lang=js& */ "./resources/js/layout/frontend/layoutFrontend.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _layoutFrontend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _layoutFrontend_vue_vue_type_template_id_10d36ddc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _layoutFrontend_vue_vue_type_template_id_10d36ddc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "10d36ddc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layout/frontend/layoutFrontend.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/linksComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/linksComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_linksComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./linksComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/linksComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_linksComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layout/frontend/layoutFrontend.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/layout/frontend/layoutFrontend.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutFrontend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./layoutFrontend.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/frontend/layoutFrontend.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutFrontend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/linksComponent.vue?vue&type=template&id=436dfa4f&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/linksComponent.vue?vue&type=template&id=436dfa4f&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_linksComponent_vue_vue_type_template_id_436dfa4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_linksComponent_vue_vue_type_template_id_436dfa4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_linksComponent_vue_vue_type_template_id_436dfa4f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./linksComponent.vue?vue&type=template&id=436dfa4f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/linksComponent.vue?vue&type=template&id=436dfa4f&scoped=true&");


/***/ }),

/***/ "./resources/js/layout/frontend/layoutFrontend.vue?vue&type=template&id=10d36ddc&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/layout/frontend/layoutFrontend.vue?vue&type=template&id=10d36ddc&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutFrontend_vue_vue_type_template_id_10d36ddc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutFrontend_vue_vue_type_template_id_10d36ddc_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_layoutFrontend_vue_vue_type_template_id_10d36ddc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./layoutFrontend.vue?vue&type=template&id=10d36ddc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/frontend/layoutFrontend.vue?vue&type=template&id=10d36ddc&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/linksComponent.vue?vue&type=template&id=436dfa4f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/linksComponent.vue?vue&type=template&id=436dfa4f&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "q-item",
    {
      attrs: { clickable: "", tag: "a" },
      on: {
        click: function($event) {
          return _vm.goto(_vm.link)
        }
      }
    },
    [
      _vm.icon
        ? _c(
            "q-item-section",
            { attrs: { avatar: "" } },
            [_c("q-icon", { attrs: { name: _vm.icon } })],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("q-item-section", [_c("q-item-label", [_vm._v(_vm._s(_vm.title))])], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/frontend/layoutFrontend.vue?vue&type=template&id=10d36ddc&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/frontend/layoutFrontend.vue?vue&type=template&id=10d36ddc&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "q-layout",
    [
      _c(
        "q-header",
        [
          _c(
            "q-toolbar",
            { staticClass: "bg-primary glossy text-white" },
            [
              _c("q-btn", {
                staticClass: "q-mr-sm",
                attrs: {
                  flat: "",
                  round: "",
                  dense: "",
                  icon: "menu",
                  "aria-label": "Menu"
                },
                on: {
                  click: function($event) {
                    _vm.leftDrawerOpen = !_vm.leftDrawerOpen
                  }
                }
              }),
              _vm._v(" "),
              _c("q-toolbar-title", [_vm._v(_vm._s(_vm.currentPage))]),
              _vm._v(" "),
              _c("q-btn", {
                attrs: { flat: "", round: "", dense: "", icon: "whatshot" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "q-drawer",
        {
          attrs: {
            "show-if-above": "",
            bordered: "",
            "content-class": "bg-grey-1"
          },
          model: {
            value: _vm.leftDrawerOpen,
            callback: function($$v) {
              _vm.leftDrawerOpen = $$v
            },
            expression: "leftDrawerOpen"
          }
        },
        [
          _c(
            "q-list",
            [
              _c(
                "q-item-label",
                { staticClass: "text-grey-8", attrs: { header: "" } },
                [_vm._v("\n                Essential\n            ")]
              ),
              _vm._v(" "),
              _vm._l(_vm.links, function(link) {
                return _c(
                  "links-component",
                  _vm._b({ key: link.title }, "links-component", link, false)
                )
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("q-page-container", [_c("router-view")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);