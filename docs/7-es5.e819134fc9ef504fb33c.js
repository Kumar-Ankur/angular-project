function _classCallCheck(i, t) {
  if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(i, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(i, n.key, n);
  }
}
function _createClass(i, t, e) {
  return t && _defineProperties(i.prototype, t), e && _defineProperties(i, e), i;
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    "6R84": function (i, t, e) {
      "use strict";
      e.r(t),
        e.d(t, "EcommerceModule", function () {
          return j;
        });
      var n,
        c = e("ofXK"),
        r = e("tyNb"),
        o = e("fXoL"),
        s = e("tk/3"),
        b = e("k5x5"),
        l = e("LvDl"),
        a =
          (((n = (function () {
            function i() {
              _classCallCheck(this, i);
            }
            return (
              _createClass(i, [
                {
                  key: "transform",
                  value: function (i) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                      e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return i && "" !== t && t
                      ? i.length <= 1
                        ? i
                        : e && "" !== e
                        ? Object(l.orderBy)(i, [e], [t])
                        : "asc" === t
                        ? i.sort()
                        : i.sort().reverse()
                      : i;
                  },
                },
              ]),
              i
            );
          })()).ɵfac = function (i) {
            return new (i || n)();
          }),
          (n.ɵpipe = o.Ib({ name: "sortBy", type: n, pure: !0 })),
          n);
      function d(i, t) {
        if (
          (1 & i &&
            (o.Mb(0, "div", 1),
            o.Mb(1, "div", 2),
            o.Mb(2, "div", 3),
            o.Mb(3, "figure", 4),
            o.Kb(4, "img", 5),
            o.Lb(),
            o.Lb(),
            o.Mb(5, "div", 6),
            o.Mb(6, "div", 7),
            o.Mb(7, "div", 8),
            o.Mb(8, "p", 9),
            o.mc(9),
            o.Lb(),
            o.Mb(10, "p", 10),
            o.mc(11),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.Mb(12, "div", 11),
            o.mc(13),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.Lb()),
          2 & i)
        ) {
          var e = t.$implicit;
          o.zb(4),
            o.dc("src", e.image, o.jc),
            o.dc("alt", e.product_name),
            o.zb(5),
            o.nc(e.product_name),
            o.zb(2),
            o.oc("\u20b9 ", e.price, ""),
            o.zb(2),
            o.oc(" ", e.description, " ");
        }
      }
      var u,
        p =
          (((u = (function () {
            function i() {
              _classCallCheck(this, i);
            }
            return _createClass(i, [{ key: "ngOnInit", value: function () {} }]), i;
          })()).ɵfac = function (i) {
            return new (i || u)();
          }),
          (u.ɵcmp = o.Db({
            type: u,
            selectors: [["app-grid"]],
            inputs: { products: "products", sortby: "sortby" },
            decls: 2,
            vars: 5,
            consts: [
              ["class", "column is-3", 4, "ngFor", "ngForOf"],
              [1, "column", "is-3"],
              [1, "card"],
              [1, "card-image"],
              [1, "image", "is-4by3"],
              [2, "object-fit", "cover", 3, "src", "alt"],
              [1, "card-content"],
              [1, "media"],
              [1, "media-content"],
              [1, "title", "is-4"],
              [1, "subtitle", "is-6"],
              [1, "content"],
            ],
            template: function (i, t) {
              1 & i && (o.lc(0, d, 14, 5, "div", 0), o.Zb(1, "sortBy")), 2 & i && o.cc("ngForOf", o.bc(1, 1, t.products, t.sortby, "price"));
            },
            directives: [c.j],
            pipes: [a],
            styles: [
              ".grid[_ngcontent-%COMP%]{border:1px solid #e4e4e4;margin-left:3rem;margin-bottom:2rem;position:relative;height:25rem;width:25rem}.grid_image[_ngcontent-%COMP%]{position:absolute;height:15rem;width:100%;left:0}.grid_title[_ngcontent-%COMP%]{width:70%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.grid_price[_ngcontent-%COMP%], .grid_title[_ngcontent-%COMP%]{position:absolute;top:16rem}.grid_price[_ngcontent-%COMP%]{right:2rem}.grid_description[_ngcontent-%COMP%]{position:absolute;top:20rem}",
            ],
          })),
          u);
      function f(i, t) {
        if (
          (1 & i &&
            (o.Mb(0, "div", 1),
            o.Mb(1, "div", 2),
            o.Mb(2, "article", 3),
            o.Mb(3, "div", 4),
            o.Mb(4, "figure", 5),
            o.Kb(5, "img", 6),
            o.Lb(),
            o.Lb(),
            o.Mb(6, "div", 7),
            o.Mb(7, "div", 8),
            o.Mb(8, "p"),
            o.Mb(9, "strong"),
            o.mc(10),
            o.Lb(),
            o.mc(11, " - "),
            o.Mb(12, "small"),
            o.mc(13),
            o.Lb(),
            o.Kb(14, "br"),
            o.mc(15),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.Lb()),
          2 & i)
        ) {
          var e = t.$implicit;
          o.zb(5),
            o.dc("src", e.image, o.jc),
            o.dc("alt", e.product_name),
            o.zb(5),
            o.nc(e.product_name),
            o.zb(3),
            o.oc("\u20b9 ", e.price, ""),
            o.zb(2),
            o.oc(" ", e.description, ". ");
        }
      }
      var m,
        g =
          (((m = (function () {
            function i() {
              _classCallCheck(this, i);
            }
            return _createClass(i, [{ key: "ngOnInit", value: function () {} }]), i;
          })()).ɵfac = function (i) {
            return new (i || m)();
          }),
          (m.ɵcmp = o.Db({
            type: m,
            selectors: [["app-list"]],
            inputs: { products: "products", sortby: "sortby" },
            decls: 2,
            vars: 5,
            consts: [
              ["class", "column is-6", 4, "ngFor", "ngForOf"],
              [1, "column", "is-6"],
              [1, "box"],
              [1, "media"],
              [1, "media-left"],
              [1, "image", "is-64x64"],
              [2, "height", "64px", "object-fit", "cover", 3, "src", "alt"],
              [1, "media-content"],
              [1, "content"],
            ],
            template: function (i, t) {
              1 & i && (o.lc(0, f, 16, 5, "div", 0), o.Zb(1, "sortBy")), 2 & i && o.cc("ngForOf", o.bc(1, 1, t.products, t.sortby, "price"));
            },
            directives: [c.j],
            pipes: [a],
            styles: [
              ".list[_ngcontent-%COMP%]{border-bottom:1px solid #e4e4e4;border-right:1px solid #e4e4e4;position:relative;height:7rem;margin:2rem}.list_image[_ngcontent-%COMP%]{height:1rem;width:1rem}.list_title[_ngcontent-%COMP%]{position:absolute;left:3rem}.list_price[_ngcontent-%COMP%]{position:absolute;right:3rem}.list_desc[_ngcontent-%COMP%]{position:absolute;margin-top:2rem}",
            ],
          })),
          m),
        v = e("CZqF");
      function h(i, t) {
        if (1 & i) {
          var e = o.Nb();
          o.Mb(0, "a", 23),
            o.Ub("click", function () {
              o.ic(e);
              var i = t.$implicit;
              return o.Yb(2).filteredList(i);
            }),
            o.mc(1),
            o.Lb();
        }
        if (2 & i) {
          var n = t.$implicit;
          o.zb(1), o.oc(" ", n, " ");
        }
      }
      function L(i, t) {
        if (1 & i) {
          var e = o.Nb();
          o.Mb(0, "span", 24),
            o.mc(1),
            o.Mb(2, "button", 25),
            o.Ub("click", function () {
              o.ic(e);
              var i = t.$implicit;
              return o.Yb(2).removePrice(i);
            }),
            o.mc(3, " \xd7 "),
            o.Lb(),
            o.Lb();
        }
        if (2 & i) {
          var n = t.$implicit;
          o.zb(1), o.oc(" ", n, " ");
        }
      }
      function M(i, t) {
        if ((1 & i && (o.Mb(0, "div"), o.Mb(1, "div", 4), o.Kb(2, "app-grid", 26), o.Lb(), o.Lb()), 2 & i)) {
          var e = o.Yb(2);
          o.zb(2), o.cc("products", e.filteredProducts)("sortby", e.sortby);
        }
      }
      function y(i, t) {
        if ((1 & i && (o.Mb(0, "div"), o.Mb(1, "div", 4), o.Kb(2, "app-list", 26), o.Lb(), o.Lb()), 2 & i)) {
          var e = o.Yb(2);
          o.zb(2), o.cc("products", e.filteredProducts)("sortby", e.sortby);
        }
      }
      var _ = function (i) {
        return { "is-active": i };
      };
      function w(i, t) {
        if (1 & i) {
          var e = o.Nb();
          o.Mb(0, "section", 3),
            o.Mb(1, "div", 4),
            o.Mb(2, "h1", 5),
            o.mc(3, " Products "),
            o.Lb(),
            o.Lb(),
            o.Mb(4, "div", 6),
            o.Mb(5, "div", 7),
            o.Mb(6, "div", 8),
            o.Mb(7, "div", 9),
            o.Mb(8, "div", 10),
            o.Mb(9, "button", 11),
            o.Ub("click", function () {
              return o.ic(e), o.Yb().filterToggle();
            }),
            o.Mb(10, "span"),
            o.mc(11, "Filter by price"),
            o.Lb(),
            o.Mb(12, "span", 12),
            o.Kb(13, "i", 13),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.Mb(14, "div", 14),
            o.Mb(15, "div", 15),
            o.lc(16, h, 2, 1, "a", 16),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.lc(17, L, 4, 1, "span", 17),
            o.Lb(),
            o.Mb(18, "div", 18),
            o.Mb(19, "button", 19),
            o.Ub("click", function () {
              return o.ic(e), o.Yb().onGridSelected();
            }),
            o.Mb(20, "span", 12),
            o.Kb(21, "img", 20),
            o.Lb(),
            o.Lb(),
            o.Mb(22, "button", 21),
            o.Ub("click", function () {
              return o.ic(e), o.Yb().onListSelected();
            }),
            o.Mb(23, "span", 12),
            o.Kb(24, "img", 22),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.Lb(),
            o.lc(25, M, 3, 2, "div", 2),
            o.lc(26, y, 3, 2, "div", 2),
            o.Lb();
        }
        if (2 & i) {
          var n = o.Yb();
          o.zb(7),
            o.cc("ngClass", o.ec(5, _, n.filterOpen)),
            o.zb(9),
            o.cc("ngForOf", n.priceList),
            o.zb(1),
            o.cc("ngForOf", n.filteredPrice),
            o.zb(8),
            o.cc("ngIf", n.isGridSelected),
            o.zb(1),
            o.cc("ngIf", !n.isGridSelected);
        }
      }
      function C(i, t) {
        1 & i && (o.Mb(0, "div"), o.Kb(1, "app-spinner"), o.Lb());
      }
      var k,
        O,
        P,
        z = [
          {
            path: "",
            component:
              ((k = (function () {
                function i(t) {
                  _classCallCheck(this, i),
                    (this.http = t),
                    (this.products = []),
                    (this.isGridSelected = !0),
                    (this.priceList = ["Low to High", "High to Low"]),
                    (this.filteredProducts = []),
                    (this.filteredPrice = []),
                    (this.filterOpen = !1),
                    (this.isLoading = !0),
                    (this.sortby = "");
                }
                return (
                  _createClass(i, [
                    {
                      key: "ngOnInit",
                      value: function () {
                        var i = this;
                        this.http.get("https://angular-assessment-api.herokuapp.com/").subscribe(
                          function (t) {
                            (i.isLoading = !1), (i.products = i.products.concat(t)), (i.filteredProducts = i.products);
                          },
                          function (i) {
                            console.log("Error: ".concat(i));
                          }
                        );
                      },
                    },
                    {
                      key: "onGridSelected",
                      value: function () {
                        this.isGridSelected = !0;
                      },
                    },
                    {
                      key: "onListSelected",
                      value: function () {
                        this.isGridSelected = !1;
                      },
                    },
                    {
                      key: "removePrice",
                      value: function (i) {
                        var t = this.filteredPrice.indexOf(i);
                        this.filteredPrice.splice(t, 1), (this.sortby = "");
                      },
                    },
                    {
                      key: "filteredList",
                      value: function (i) {
                        this.filterToggle(),
                          this.filteredPrice.includes(i)
                            ? (this.removePrice(i), (this.sortby = ""))
                            : ((this.filteredPrice = []), this.filteredPrice.push(i), (this.sortby = "Low to High" === i ? "asc" : "desc"));
                      },
                    },
                    {
                      key: "filterToggle",
                      value: function () {
                        this.filterOpen = !this.filterOpen;
                      },
                    },
                  ]),
                  i
                );
              })()),
              (k.ɵfac = function (i) {
                return new (i || k)(o.Jb(s.a));
              }),
              (k.ɵcmp = o.Db({
                type: k,
                selectors: [["app-ecommerce"]],
                decls: 4,
                vars: 2,
                consts: [
                  [1, "divider", "mt-0", "mb-0"],
                  ["class", "section", 4, "ngIf"],
                  [4, "ngIf"],
                  [1, "section"],
                  [1, "container"],
                  [1, "title", "is-size-3", "has-text-grey", "is-family-secondary", "mb-5"],
                  [1, "container", "mb-5"],
                  [1, "columns", "is-vcentered"],
                  [1, "column", "is-vcentered", 2, "display", "flex", "flex-direction", "row", "align-items", "center"],
                  [1, "dropdown", "mr-3", 3, "ngClass"],
                  [1, "dropdown-trigger"],
                  ["aria-haspopup", "true", "aria-controls", "dropdown-menu", 1, "button", 3, "click"],
                  [1, "icon", "is-small"],
                  ["aria-hidden", "true", 1, "fas", "fa-angle-down"],
                  ["id", "dropdown-menu", "role", "menu", 1, "dropdown-menu"],
                  [1, "dropdown-content"],
                  ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"],
                  ["class", "tag is-medium mr-1", 4, "ngFor", "ngForOf"],
                  [1, "column", "is-narrow"],
                  [1, "button", "mr-2", 3, "click"],
                  ["src", "./assets/grid.svg", "alt", "grid", 1, "main_grid"],
                  [1, "button", 3, "click"],
                  ["src", "./assets/list.svg", "alt", "list", 1, "main_grid"],
                  [1, "dropdown-item", 3, "click"],
                  [1, "tag", "is-medium", "mr-1"],
                  [1, "delete", "is-small", 3, "click"],
                  [1, "columns", "is-multiline", "is-mobile", 3, "products", "sortby"],
                ],
                template: function (i, t) {
                  1 & i && (o.Kb(0, "app-navigation"), o.Kb(1, "hr", 0), o.lc(2, w, 27, 7, "section", 1), o.lc(3, C, 2, 0, "div", 2)),
                    2 & i && (o.zb(2), o.cc("ngIf", !t.isLoading), o.zb(1), o.cc("ngIf", t.isLoading));
                },
                directives: [b.a, c.k, c.i, c.j, p, g, v.a],
                styles: [""],
              })),
              k),
          },
        ],
        F =
          (((O = function i() {
            _classCallCheck(this, i);
          }).ɵmod = o.Hb({ type: O })),
          (O.ɵinj = o.Gb({
            factory: function (i) {
              return new (i || O)();
            },
            imports: [[r.c.forChild(z)], r.c],
          })),
          O),
        x = e("sO0u"),
        K = e("iL26"),
        j =
          (((P = function i() {
            _classCallCheck(this, i);
          }).ɵmod = o.Hb({ type: P })),
          (P.ɵinj = o.Gb({
            factory: function (i) {
              return new (i || P)();
            },
            imports: [[c.b, F, x.a, K.a]],
          })),
          P);
    },
  },
]);
