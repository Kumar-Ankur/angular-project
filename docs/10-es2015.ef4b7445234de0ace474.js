(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{sqCO:function(t,s,i){"use strict";i.r(s),i.d(s,"TableModule",(function(){return y}));var r=i("ofXK"),o=i("tyNb"),n=i("LvDl"),e=i("fXoL"),c=i("tk/3"),b=i("k5x5"),a=i("CZqF");function h(t,s){1&t&&(e.Mb(0,"span"),e.Kb(1,"i",11),e.Lb())}function l(t,s){1&t&&(e.Mb(0,"span"),e.Kb(1,"i",12),e.Lb())}function u(t,s){if(1&t){const t=e.Nb();e.Mb(0,"th",10),e.Ub("click",(function(){e.ic(t);const i=s.$implicit;return e.Yb(2).handleSort(i)})),e.mc(1),e.lc(2,h,2,0,"span",5),e.lc(3,l,2,0,"span",5),e.Lb()}if(2&t){const t=s.$implicit,i=e.Yb(2);e.zb(1),e.oc(" ",t," "),e.zb(1),e.cc("ngIf",i.checkArrowVisible()&&i.checkUpArrowVisible(t)),e.zb(1),e.cc("ngIf",i.checkArrowVisible()&&i.checkDownArrowVisible(t))}}function d(t,s){if(1&t&&(e.Mb(0,"tr"),e.Mb(1,"th",13),e.mc(2),e.Lb(),e.Mb(3,"td"),e.mc(4),e.Lb(),e.Mb(5,"td"),e.mc(6),e.Lb(),e.Mb(7,"td"),e.mc(8),e.Lb(),e.Mb(9,"td"),e.mc(10),e.Lb(),e.Mb(11,"td"),e.mc(12),e.Lb(),e.Lb()),2&t){const t=s.$implicit;e.zb(2),e.nc(t.id),e.zb(2),e.nc(t.name),e.zb(2),e.nc(t.class),e.zb(2),e.nc(t.sub1),e.zb(2),e.nc(t.sub2),e.zb(2),e.nc(t.sub3)}}function p(t,s){if(1&t&&(e.Mb(0,"div",6),e.Mb(1,"table",7),e.Mb(2,"thead"),e.Mb(3,"tr"),e.lc(4,u,4,3,"th",8),e.Lb(),e.Lb(),e.Mb(5,"tbody"),e.lc(6,d,13,6,"tr",9),e.Lb(),e.Lb(),e.Lb()),2&t){const t=e.Yb();e.zb(4),e.cc("ngForOf",t.tableHeading),e.zb(2),e.cc("ngForOf",t.students)}}function f(t,s){1&t&&(e.Mb(0,"div"),e.Kb(1,"app-spinner"),e.Lb())}const g=[{path:"",component:(()=>{class t{constructor(t){this.http=t,this.tableHeading=[],this.students=[],this.resetStudents=[],this.reset=!0,this.sortAscending=!1,this.sortDescending=!1,this.sortCategory="",this.previousCategory="",this.sortCount=1,this.isArrowVisible=!1,this.isUpArrowVisible=!1,this.isDownArrowVisible=!1,this.isLoading=!0}ngOnInit(){this.http.get("https://angular-assessment-api.herokuapp.com/table").subscribe(t=>{this.isLoading=!1,this.tableHeading=Object.keys(t[0]),this.students=this.students.concat(t),this.resetStudents=this.resetStudents.concat(t)},t=>{console.log(`Error: ${t}`)})}sortingTable(t,s){if(2===s){const s=n.orderBy(this.students.slice(),[t],["asc"]);this.students=s}else{const s=n.orderBy(this.students.slice(),[t],["desc"]);this.students=s}}handleSort(t){if(this.previousCategory?this.previousCategory!==t&&(this.sortCount=1,this.previousCategory=t):this.previousCategory=t,3===this.sortCount)return this.sortCount=1,this.students=this.resetStudents,void(this.sortCategory="");this.sortCategory=t,this.sortCount=this.sortCount+1,this.sortingTable(t,this.sortCount)}checkDownArrowVisible(t){return this.isDownArrowVisible=t===this.sortCategory&&3===this.sortCount,this.isDownArrowVisible}checkUpArrowVisible(t){return this.isUpArrowVisible=t===this.sortCategory&&2===this.sortCount,this.isUpArrowVisible}checkArrowVisible(){return this.isArrowVisible=1!==this.sortCount,this.isArrowVisible}}return t.\u0275fac=function(s){return new(s||t)(e.Jb(c.a))},t.\u0275cmp=e.Db({type:t,selectors:[["app-table"]],decls:8,vars:2,consts:[[1,"divider","mt-0","mb-0"],[1,"section"],[1,"container","mb-5"],[1,"title","is-size-3","has-text-grey","is-family-secondary","mb-5"],["class","container",4,"ngIf"],[4,"ngIf"],[1,"container"],[1,"table","is-bordered"],["class","col","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"col",2,"cursor","pointer",3,"click"],[1,"fa","fa-arrow-up"],[1,"fa","fa-arrow-down"],["scope","row"]],template:function(t,s){1&t&&(e.Kb(0,"app-navigation"),e.Kb(1,"hr",0),e.Mb(2,"section",1),e.Mb(3,"div",2),e.Mb(4,"h1",3),e.mc(5," Table "),e.Lb(),e.Lb(),e.lc(6,p,7,2,"div",4),e.lc(7,f,2,0,"div",5),e.Lb()),2&t&&(e.zb(6),e.cc("ngIf",!s.isLoading),e.zb(1),e.cc("ngIf",s.isLoading))},directives:[b.a,r.k,r.j,a.a],styles:[""]}),t})()}];let w=(()=>{class t{}return t.\u0275mod=e.Hb({type:t}),t.\u0275inj=e.Gb({factory:function(s){return new(s||t)},imports:[[o.c.forChild(g)],o.c]}),t})();var m=i("sO0u"),L=i("iL26");let y=(()=>{class t{}return t.\u0275mod=e.Hb({type:t}),t.\u0275inj=e.Gb({factory:function(s){return new(s||t)},imports:[[r.b,w,m.a,L.a]]}),t})()}}]);