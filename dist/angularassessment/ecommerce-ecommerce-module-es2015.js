(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ecommerce-ecommerce-module"],{

/***/ "./src/app/ecommerce/constants/index.js":
/*!**********************************************!*\
  !*** ./src/app/ecommerce/constants/index.js ***!
  \**********************************************/
/*! exports provided: API, productList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productList", function() { return productList; });
const API = "https://angular-assessment-api.herokuapp.com/";

const productList = [
  {
    id: 1,
    product_name: "Wine - Chianti Classico Riserva",
    description: "Capon - Breast, Double, Wing On",
    price: 492,
    image: "https://www.montemaggio.com/files/2016/04/DSC_8864.jpg",
  },
  {
    id: 2,
    product_name: "Cheese - Pont Couvert",
    description: "Nescafe - Frothy French Vanilla",
    price: 249,
    image:
      "https://scontent.fdel28-1.fna.fbcdn.net/v/t1.0-9/51548063_10157918309122195_7506096974924349440_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=CP3fFNTqhkMAX--YKmD&_nc_ht=scontent.fdel28-1.fna&oh=7d63520f1d6d5fe1eaa76bfcd099ba0d&oe=5F112EA3",
  },
  {
    id: 3,
    product_name: "Olive - Spread Tapenade",
    description: "Soup - Campbells, Chix Gumbo",
    price: 247,
    image: "https://cdn.shopify.com/s/files/1/1207/6554/articles/olive-tempenade-small_large.jpg?v=1472334598",
  },
  {
    id: 4,
    product_name: "Milk - 2%",
    description: "Wasabi Paste",
    price: 428,
    image: "https://maolamilk.com/wp-content/uploads/2019/01/2Percent_Products_Group_1.30.png",
  },
  {
    id: 5,
    product_name: "Crab - Imitation Flakes",
    description: "Mushroom - Crimini",
    price: 775,
    image: "http://www.bloomsimports.com/wp-content/uploads/2014/09/imitation-crab-flakes1-510x600.jpg",
  },
  {
    id: 6,
    product_name: "Beef - Tenderloin Tails",
    description: "Table Cloth 54x54 Colour",
    price: 816,
    image: "https://i.pinimg.com/564x/ce/6b/b9/ce6bb9f09ea0d72c41d892560cd31d20.jpg",
  },
  {
    id: 7,
    product_name: "Liqueur - Melon",
    description: "Artichoke - Hearts, Canned",
    price: 778,
    image: "https://produits.bienmanger.com/37775-0w470h470_Midori_Melon_Liqueur.jpg",
  },
  {
    id: 8,
    product_name: "Mangostein",
    description: "Energy Drink Bawls",
    price: 817,
    image: "https://i.ndtvimg.com/i/2016-06/mangosteen_625x350_51464952377.jpg",
  },
  {
    id: 9,
    product_name: "Chambord Royal",
    description: "Nantucket - Kiwi Berry Cktl.",
    price: 564,
    image: "https://www.linsfood.com/wp-content/uploads/2018/12/Chambord-Royale-LinsFood.jpg?ezimgfmt=ng:webp/ngcb6",
  },
  {
    id: 10,
    product_name: "Dc Hikiage Hira Huba",
    description: "Goulash Seasoning",
    price: 111,
    image: "https://mdyo8n9ckd3g81vs1qipy6bt-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/kir-royale.jpg",
  },
  {
    id: 11,
    product_name: "Wine - Jackson Triggs Okonagan",
    description: "Dooleys Toffee",
    price: 304,
    image:
      "https://cellar.gwdb.io/attachments/4d7a78b9-9ea8-48aa-ad59-9616efd08897/d7ad6de0d9fa562b66a102706c29434cf1afa2d1feab07687696990268d19480.png",
  },
  {
    id: 12,
    product_name: "Vinegar - Red Wine",
    description: "Pur Source",
    price: 397,
    image: "https://images-na.ssl-images-amazon.com/images/I/51IFJ8lkefL._SX679_.jpg",
  },
  {
    id: 13,
    product_name: "Lid - 16 Oz And 32 Oz",
    description: "Chicken Breast Wing On",
    price: 575,
    image: "https://images-na.ssl-images-amazon.com/images/I/71U0d2538UL._AC_SX679_.jpg",
  },
  {
    id: 14,
    product_name: "Coffee Cup 12oz 5342cd",
    description: "Beer - Rickards Red",
    price: 585,
    image: "http://ecx.images-amazon.com/images/I/51FU-KhBUiL._SL210_.jpg",
  },
  {
    id: 15,
    product_name: "Muffin - Mix - Strawberry Rhubarb",
    description: "Wine - Red, Lurton Merlot De",
    price: 440,
    image: "https://aprettylifeinthesuburbs.com/wp-content/uploads/2013/05/Strawberry-Rhubarb-Muffins-F.jpg",
  },
  {
    id: 16,
    product_name: "Lady Fingers",
    description: "Cilantro / Coriander - Fresh",
    price: 475,
    image: "https://www.seriouseats.com/recipes/images/2017/06/20170523-ladyfingers-vicky-wasik-19.jpg",
  },
  {
    id: 17,
    product_name: "Wine - Pinot Grigio Collavini",
    description: "Longos - Burritos",
    price: 159,
    image: "https://www.collavini.com/contenuti/prodotti/PINOT-GRIGIO_213_o.png?t=23052018165729",
  },
  {
    id: 18,
    product_name: "Garam Marsala",
    description: "Black Currants",
    price: 905,
    image: "https://twosleevers.com/wp-content/uploads/2013/08/Garam-Masala-1-600x900.webp",
  },
  {
    id: 19,
    product_name: "Flour - Corn, Fine",
    description: "Melon - Watermelon Yellow",
    price: 642,
    image: "https://img1.exportersindia.com/product_images/bc-full/dir_74/2215380/maize-flour-1492163732-2848336.jpeg",
  },
  {
    id: 20,
    product_name: "Lentils - Green, Dry",
    description: "Chicken - Breast, 5 - 7 Oz",
    price: 552,
    image: "https://images-na.ssl-images-amazon.com/images/I/81qMbnn%2Bq4L._SX569_.jpg",
  },
  {
    id: 21,
    product_name: "Honey - Liquid",
    description: "Bread - English Muffin",
    price: 512,
    image: "https://n4v5s9s7.stackpathcdn.com/wp-content/uploads/2017/01/honey3.jpeg",
  },
  {
    id: 22,
    product_name: "Kirsch - Schloss",
    description: "Wine - Magnotta - Cab Franc",
    price: 654,
    image: "https://i.pinimg.com/564x/26/66/4a/26664a3705bf4f93f28b2e9f5347b19c.jpg",
  },
  {
    id: 23,
    product_name: "Cheese - Havarti, Salsa",
    description: "Pepper - Paprika, Spanish",
    price: 749,
    image: "https://honestcooking.com/wp-content/uploads/2015/02/castello-jalapeno-havarti-enchiladas-50.jpg",
  },
  {
    id: 24,
    product_name: "Bread - Raisin",
    description: "Paper Towel Touchless",
    price: 403,
    image:
      "https://www.thespruceeats.com/thmb/oWt8RsVQWytYNJD1CXS9HE0-pHw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/raisin-bread-recipe-3062290-hero-01-5c92e3a946e0fb0001d88057.jpg",
  },
  {
    id: 25,
    product_name: "Mushrooms - Honey",
    description: "Pomello",
    price: 136,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Armillaria_mellea%2C_Honey_Fungus%2C_UK_1.jpg/220px-Armillaria_mellea%2C_Honey_Fungus%2C_UK_1.jpg",
  },
  {
    id: 26,
    product_name: "Muffin - Mix - Creme Brule 15l",
    description: "Tart Shells - Savory, 3",
    price: 248,
    image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Caramel-Creme-Brulee_EXPS_THCA17_195861_A6_01_2b-696x696.jpg",
  },
  {
    id: 27,
    product_name: "Beans - Black Bean, Preserved",
    description: "Wine - Kwv Chenin Blanc South",
    price: 424,
    image: "https://www.vietworldkitchen.com/wp-content/uploads/2017/09/6a00d8341ef22f53ef016765f378b9970b-500wi.jpg",
  },
  {
    id: 28,
    product_name: "Ecolab - Hobart Upr Prewash Arm",
    description: "Lid Coffeecup 12oz D9542b",
    price: 852,
    image: "https://tastyasia.files.wordpress.com/2012/09/cucumbers-final.jpg?w=640&h=426",
  },
  {
    id: 29,
    product_name: "Cod - Black Whole Fillet",
    description: "Cheese - Cambozola",
    price: 877,
    image: "https://i.pinimg.com/564x/26/66/4a/26664a3705bf4f93f28b2e9f5347b19c.jpg",
  },
  {
    id: 30,
    product_name: "Sauce - Thousand Island",
    description: "Sprouts - China Rose",
    price: 719,
    image: "https://www.seacoreseafood.com/image.php?width=326&image=/pictures/product_tbn_s24F9beBp5.jpg",
  },
  {
    id: 31,
    product_name: "Whmis - Spray Bottle Trigger",
    description: "Silicone Paper 16.5x24",
    price: 486,
    image: "https://www.grandandtoy.com/graphics/400x400/76000/76037.jpg",
  },
  {
    id: 32,
    product_name: "Fondant - Icing",
    description: "Lid - 0090 Clear",
    price: 337,
    image: "https://www.bakewala.com/media/catalog/product/cache/1/thumbnail/600x/77b5e6d5a0680513b53f59eacab60f9d/w/h/white_6.jpg",
  },
  {
    id: 33,
    product_name: "Wine - Chateauneuf Du Pape",
    description: "Bagel - Sesame Seed Presliced",
    price: 101,
    image:
      "https://arvi.ch/media/catalog/product/cache/1/base/380x380/9df78eab33525d08d6e5fb8d27136e95/C/l/Clos_des_Papes_Chateauneuf_du_Pape_2008_75_15878.png",
  },
  {
    id: 34,
    product_name: "Cheese - Le Cheve Noir",
    description: "Amaretto",
    price: 198,
    image: "https://cdn.shopify.com/s/files/1/0892/1540/products/chevre-noir-aged-1_1024x1024.jpg?v=1445568549",
  },
  {
    id: 35,
    product_name: "Puree - Mango",
    description: "Longan",
    price: 827,
    image: "https://5.imimg.com/data5/HB/MN/MY-8576129/organic-mango-puree-500x500.jpg",
  },
  {
    id: 36,
    product_name: "Beer - Guiness",
    description: "Napkin - Dinner, White",
    price: 418,
    image: "https://images-na.ssl-images-amazon.com/images/I/61WRHTAA4LL._AC_SX679_.jpg",
  },
  {
    id: 37,
    product_name: "Gatorade - Xfactor Berry",
    description: "Maple Syrup",
    price: 799,
    image: "https://images-na.ssl-images-amazon.com/images/I/71-q7t9XZ6L._SY741_.jpg",
  },
  {
    id: 38,
    product_name: "Soup - Campbells Chicken",
    description: "Juice - Pineapple, 341 Ml",
    price: 605,
    image: "https://pics.drugstore.com/prodimg/436497/900.jpg",
  },
  {
    id: 39,
    product_name: "Pork - Bacon,back Peameal",
    description: "Chambord Royal",
    price: 417,
    image: "http://www.celebrationgeneration.com/BlogPics/BackBacon1.jpg",
  },
  {
    id: 40,
    product_name: "Sugar - Palm",
    description: "Numi - Assorted Teas",
    price: 499,
    image: "https://previews.123rf.com/images/jukreee/jukreee1309/jukreee130900962/22134411-sugar-palm-tree.jpg",
  },
];


/***/ }),

/***/ "./src/app/ecommerce/ecommerce-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ecommerce/ecommerce-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EcommerceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceRoutingModule", function() { return EcommerceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecommerce.component */ "./src/app/ecommerce/ecommerce.component.ts");





const routes = [{ path: '', component: _ecommerce_component__WEBPACK_IMPORTED_MODULE_2__["EcommerceComponent"] }];
class EcommerceRoutingModule {
}
EcommerceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EcommerceRoutingModule });
EcommerceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EcommerceRoutingModule_Factory(t) { return new (t || EcommerceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.ts ***!
  \**************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/ecommerce/constants/index.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/ecommerce/grid/grid.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/ecommerce/list/list.component.ts");







function EcommerceComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EcommerceComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const price_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.filteredList(price_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const price_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u20B9 ", price_r4, " ");
} }
function EcommerceComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EcommerceComponent_span_19_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const priceFilter_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.removePrice(priceFilter_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priceFilter_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", priceFilter_r7, " ");
} }
function EcommerceComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-grid", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx_r2.filteredProducts);
} }
function EcommerceComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx_r3.filteredProducts);
} }
const _c0 = function (a0) { return { "is-active": a0 }; };
class EcommerceComponent {
    constructor() {
        this.products = _constants__WEBPACK_IMPORTED_MODULE_1__["productList"];
        this.isGridSelected = true;
        this.priceList = [];
        this.filteredProducts = [];
        this.filteredPrice = [];
        this.filterOpen = false;
    }
    ngOnInit() {
        this.products.map((product) => {
            if (!this.priceList.includes(product.price)) {
                this.priceList.push(product.price);
            }
        });
        this.filteredProducts = this.products;
    }
    onGridSelected() {
        this.isGridSelected = true;
    }
    onListSelected() {
        this.isGridSelected = false;
    }
    getFilteredItem() {
        this.filteredProducts = [];
        if (this.filteredPrice.length === 0) {
            this.filteredProducts = this.products;
        }
        this.products.map((data) => {
            if (this.filteredPrice.includes(data.price)) {
                this.filteredProducts.push(data);
            }
        });
    }
    removePrice(price) {
        const index = this.filteredPrice.indexOf(price);
        this.filteredPrice.splice(index, 1);
        this.getFilteredItem();
    }
    filteredList(price) {
        if (this.filteredPrice.includes(price)) {
            this.removePrice(price);
        }
        else {
            this.filteredPrice.push(price);
            this.getFilteredItem();
        }
    }
    filterToggle() {
        this.filterOpen = !this.filterOpen;
    }
}
EcommerceComponent.ɵfac = function EcommerceComponent_Factory(t) { return new (t || EcommerceComponent)(); };
EcommerceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EcommerceComponent, selectors: [["app-ecommerce"]], decls: 29, vars: 7, consts: [[1, "divider", "mt-0", "mb-0"], [1, "section"], [1, "container"], [1, "title", "is-size-3", "has-text-grey", "is-family-secondary", "mb-5"], [1, "container", "mb-5"], [1, "columns", "is-vcentered"], [1, "column", "is-vcentered", 2, "display", "flex", "flex-direction", "row", "align-items", "center"], [1, "dropdown", "mr-3", 3, "ngClass"], [1, "dropdown-trigger"], ["aria-haspopup", "true", "aria-controls", "dropdown-menu", 1, "button", 3, "click"], [1, "icon", "is-small"], ["aria-hidden", "true", 1, "fas", "fa-angle-down"], ["id", "dropdown-menu", "role", "menu", 1, "dropdown-menu"], [1, "dropdown-content"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "tag is-medium mr-1", 4, "ngFor", "ngForOf"], [1, "column", "is-narrow"], [1, "button", "mr-2", 3, "click"], ["src", "../../assets/grid.svg", "alt", "grid", 1, "main_grid"], [1, "button", 3, "click"], ["src", "../../assets/list.svg", "alt", "list", 1, "main_grid"], [4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "tag", "is-medium", "mr-1"], [1, "delete", "is-small", 3, "click"], [1, "columns", "is-multiline", "is-mobile", 3, "products"]], template: function EcommerceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EcommerceComponent_Template_button_click_11_listener() { return ctx.filterToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Filter by price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EcommerceComponent_a_18_Template, 2, 1, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EcommerceComponent_span_19_Template, 4, 1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EcommerceComponent_Template_button_click_21_listener() { return ctx.onGridSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EcommerceComponent_Template_button_click_24_listener() { return ctx.onListSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EcommerceComponent_div_27_Template, 3, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EcommerceComponent_div_28_Template, 3, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.filterOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.priceList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGridSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isGridSelected);
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9lY29tbWVyY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-ecommerce",
                templateUrl: "./ecommerce.component.html",
                styleUrls: ["./ecommerce.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ecommerce/ecommerce.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ecommerce/ecommerce.module.ts ***!
  \***********************************************/
/*! exports provided: EcommerceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceModule", function() { return EcommerceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecommerce-routing.module */ "./src/app/ecommerce/ecommerce-routing.module.ts");
/* harmony import */ var _ecommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecommerce.component */ "./src/app/ecommerce/ecommerce.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/ecommerce/grid/grid.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/ecommerce/list/list.component.ts");
/* harmony import */ var _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");








class EcommerceModule {
}
EcommerceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EcommerceModule });
EcommerceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EcommerceModule_Factory(t) { return new (t || EcommerceModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_2__["EcommerceRoutingModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EcommerceModule, { declarations: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_2__["EcommerceRoutingModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EcommerceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ecommerce_routing_module__WEBPACK_IMPORTED_MODULE_2__["EcommerceRoutingModule"], _navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"]],
                declarations: [_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__["EcommerceComponent"], _grid_grid_component__WEBPACK_IMPORTED_MODULE_4__["GridComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ecommerce/grid/grid.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/grid/grid.component.ts ***!
  \**************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function GridComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", product_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", product_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.description, " ");
} }
class GridComponent {
    constructor() { }
    ngOnInit() { }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], inputs: { products: "products" }, decls: 1, vars: 1, consts: [["class", "column is-3", 4, "ngFor", "ngForOf"], [1, "column", "is-3"], [1, "card"], [1, "card-image"], [1, "image", "is-4by3"], [2, "object-fit", "cover", 3, "src", "alt"], [1, "card-content"], [1, "media"], [1, "media-content"], [1, "title", "is-4"], [1, "subtitle", "is-6"], [1, "content"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GridComponent_div_0_Template, 14, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".grid[_ngcontent-%COMP%] {\n  border: 1px solid #e4e4e4;\n  margin-left: 3rem;\n  margin-bottom: 2rem;\n  position: relative;\n  height: 25rem;\n  width: 25rem;\n}\n.grid_image[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 15rem;\n  width: 100%;\n  left: 0;\n}\n.grid_title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16rem;\n  width: 70%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.grid_price[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2rem;\n  top: 16rem;\n}\n.grid_description[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9lY29tbWVyY2UvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lY29tbWVyY2UvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9lY29tbWVyY2UvZ3JpZC9ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1cmVtO1xuICB3aWR0aDogMjVyZW07XG5cbiAgJl9pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gICZfdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cmVtO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgJl9wcmljZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAycmVtO1xuICAgIHRvcDogMTZyZW07XG4gIH1cblxuICAmX2Rlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHJlbTtcbiAgfVxufVxuIiwiLmdyaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNGU0O1xuICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1cmVtO1xuICB3aWR0aDogMjVyZW07XG59XG4uZ3JpZF9pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG4uZ3JpZF90aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnJlbTtcbiAgd2lkdGg6IDcwJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZ3JpZF9wcmljZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDJyZW07XG4gIHRvcDogMTZyZW07XG59XG4uZ3JpZF9kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.scss'],
            }]
    }], function () { return []; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ecommerce/list/list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/list/list.component.ts ***!
  \**************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", product_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", product_r1.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.description, ". ");
} }
class ListComponent {
    constructor() { }
    ngOnInit() { }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], inputs: { products: "products" }, decls: 1, vars: 1, consts: [["class", "column is-6", 4, "ngFor", "ngForOf"], [1, "column", "is-6"], [1, "box"], [1, "media"], [1, "media-left"], [1, "image", "is-64x64"], [2, "height", "64px", "object-fit", "cover", 3, "src", "alt"], [1, "media-content"], [1, "content"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListComponent_div_0_Template, 16, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e4e4e4;\n  border-right: 1px solid #e4e4e4;\n  position: relative;\n  margin-right: 2rem;\n  margin-bottom: 2rem;\n  height: 7rem;\n  margin: 2rem;\n}\n.list_image[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n}\n.list_title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 3rem;\n}\n.list_price[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 3rem;\n}\n.list_desc[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rdW1hcmFua3VyL0Rlc2t0b3AvYW5ndWxhci9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC9lY29tbWVyY2UvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lY29tbWVyY2UvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZWNvbW1lcmNlL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBoZWlnaHQ6IDdyZW07XG4gIG1hcmdpbjogMnJlbTtcblxuICAmX2ltYWdlIHtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgd2lkdGg6IDFyZW07XG4gIH1cblxuICAmX3RpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogM3JlbTtcbiAgfVxuXG4gICZfcHJpY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogM3JlbTtcbiAgfVxuXG4gICZfZGVzYyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cbiIsIi5saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNGU0ZTQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBoZWlnaHQ6IDdyZW07XG4gIG1hcmdpbjogMnJlbTtcbn1cbi5saXN0X2ltYWdlIHtcbiAgaGVpZ2h0OiAxcmVtO1xuICB3aWR0aDogMXJlbTtcbn1cbi5saXN0X3RpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzcmVtO1xufVxuLmxpc3RfcHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzcmVtO1xufVxuLmxpc3RfZGVzYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss'],
            }]
    }], function () { return []; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=ecommerce-ecommerce-module-es2015.js.map