function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,i){for(var s=0;s<i.length;s++){var e=i[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,i,s){return i&&_defineProperties(t.prototype,i),s&&_defineProperties(t,s),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{sqCO:function(t,i,s){"use strict";s.r(i),s.d(i,"TableModule",(function(){return L}));var e=s("ofXK"),n=s("tyNb"),r=s("LvDl"),o=s("fXoL"),c=s("tk/3"),a=s("k5x5"),b=s("CZqF");function u(t,i){1&t&&(o.Mb(0,"span"),o.Kb(1,"i",11),o.Lb())}function l(t,i){1&t&&(o.Mb(0,"span"),o.Kb(1,"i",12),o.Lb())}function h(t,i){if(1&t){var s=o.Nb();o.Mb(0,"th",10),o.Ub("click",(function(){o.ic(s);var t=i.$implicit;return o.Yb(2).handleSort(t)})),o.mc(1),o.lc(2,u,2,0,"span",5),o.lc(3,l,2,0,"span",5),o.Lb()}if(2&t){var e=i.$implicit,n=o.Yb(2);o.zb(1),o.oc(" ",e," "),o.zb(1),o.cc("ngIf",n.checkArrowVisible()&&n.checkUpArrowVisible(e)),o.zb(1),o.cc("ngIf",n.checkArrowVisible()&&n.checkDownArrowVisible(e))}}function f(t,i){if(1&t&&(o.Mb(0,"tr"),o.Mb(1,"th",13),o.mc(2),o.Lb(),o.Mb(3,"td"),o.mc(4),o.Lb(),o.Mb(5,"td"),o.mc(6),o.Lb(),o.Mb(7,"td"),o.mc(8),o.Lb(),o.Mb(9,"td"),o.mc(10),o.Lb(),o.Mb(11,"td"),o.mc(12),o.Lb(),o.Lb()),2&t){var s=i.$implicit;o.zb(2),o.nc(s.id),o.zb(2),o.nc(s.name),o.zb(2),o.nc(s.class),o.zb(2),o.nc(s.sub1),o.zb(2),o.nc(s.sub2),o.zb(2),o.nc(s.sub3)}}function d(t,i){if(1&t&&(o.Mb(0,"div",6),o.Mb(1,"table",7),o.Mb(2,"thead"),o.Mb(3,"tr"),o.lc(4,h,4,3,"th",8),o.Lb(),o.Lb(),o.Mb(5,"tbody"),o.lc(6,f,13,6,"tr",9),o.Lb(),o.Lb(),o.Lb()),2&t){var s=o.Yb();o.zb(4),o.cc("ngForOf",s.tableHeading),o.zb(2),o.cc("ngForOf",s.students)}}function p(t,i){1&t&&(o.Mb(0,"div"),o.Kb(1,"app-spinner"),o.Lb())}var g,w,v,y=[{path:"",component:(g=function(){function t(i){_classCallCheck(this,t),this.http=i,this.tableHeading=[],this.students=[],this.resetStudents=[],this.reset=!0,this.sortAscending=!1,this.sortDescending=!1,this.sortCategory="",this.previousCategory="",this.sortCount=1,this.isArrowVisible=!1,this.isUpArrowVisible=!1,this.isDownArrowVisible=!1,this.isLoading=!0}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.http.get("https://angular-assessment-api.herokuapp.com/table").subscribe((function(i){t.isLoading=!1,t.tableHeading=Object.keys(i[0]),t.students=t.students.concat(i),t.resetStudents=t.resetStudents.concat(i)}))}},{key:"sortingTable",value:function(t,i){if(2===i){var s=r.orderBy(this.students.slice(),[t],["asc"]);this.students=s}else{var e=r.orderBy(this.students.slice(),[t],["desc"]);this.students=e}}},{key:"handleSort",value:function(t){if(this.previousCategory?this.previousCategory!==t&&(this.sortCount=1,this.previousCategory=t):this.previousCategory=t,3===this.sortCount)return this.sortCount=1,this.students=this.resetStudents,void(this.sortCategory="");this.sortCategory=t,this.sortCount=this.sortCount+1,this.sortingTable(t,this.sortCount)}},{key:"checkDownArrowVisible",value:function(t){return this.isDownArrowVisible=t===this.sortCategory&&3===this.sortCount,this.isDownArrowVisible}},{key:"checkUpArrowVisible",value:function(t){return this.isUpArrowVisible=t===this.sortCategory&&2===this.sortCount,this.isUpArrowVisible}},{key:"checkArrowVisible",value:function(){return this.isArrowVisible=1!==this.sortCount,this.isArrowVisible}}]),t}(),g.\u0275fac=function(t){return new(t||g)(o.Jb(c.a))},g.\u0275cmp=o.Db({type:g,selectors:[["app-table"]],decls:8,vars:2,consts:[[1,"divider","mt-0","mb-0"],[1,"section"],[1,"container","mb-5"],[1,"title","is-size-3","has-text-grey","is-family-secondary","mb-5"],["class","container",4,"ngIf"],[4,"ngIf"],[1,"container"],[1,"table","is-bordered"],["class","col","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"col",2,"cursor","pointer",3,"click"],[1,"fa","fa-arrow-up"],[1,"fa","fa-arrow-down"],["scope","row"]],template:function(t,i){1&t&&(o.Kb(0,"app-navigation"),o.Kb(1,"hr",0),o.Mb(2,"section",1),o.Mb(3,"div",2),o.Mb(4,"h1",3),o.mc(5," Table "),o.Lb(),o.Lb(),o.lc(6,d,7,2,"div",4),o.lc(7,p,2,0,"div",5),o.Lb()),2&t&&(o.zb(6),o.cc("ngIf",!i.isLoading),o.zb(1),o.cc("ngIf",i.isLoading))},directives:[a.a,e.k,e.j,b.a],styles:[""]}),g)}],C=((w=function t(){_classCallCheck(this,t)}).\u0275mod=o.Hb({type:w}),w.\u0275inj=o.Gb({factory:function(t){return new(t||w)},imports:[[n.c.forChild(y)],n.c]}),w),k=s("sO0u"),m=s("iL26"),L=((v=function t(){_classCallCheck(this,t)}).\u0275mod=o.Hb({type:v}),v.\u0275inj=o.Gb({factory:function(t){return new(t||v)},imports:[[e.b,C,k.a,m.a]]}),v)}}]);