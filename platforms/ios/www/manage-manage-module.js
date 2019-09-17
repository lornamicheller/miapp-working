(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-manage-module"],{

/***/ "./src/app/manage/manage.module.ts":
/*!*****************************************!*\
  !*** ./src/app/manage/manage.module.ts ***!
  \*****************************************/
/*! exports provided: ManagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePageModule", function() { return ManagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _manage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage.page */ "./src/app/manage/manage.page.ts");







var routes = [
    {
        path: '',
        component: _manage_page__WEBPACK_IMPORTED_MODULE_6__["ManagePage"]
    }
];
var ManagePageModule = /** @class */ (function () {
    function ManagePageModule() {
    }
    ManagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_manage_page__WEBPACK_IMPORTED_MODULE_6__["ManagePage"]]
        })
    ], ManagePageModule);
    return ManagePageModule;
}());



/***/ }),

/***/ "./src/app/manage/manage.page.html":
/*!*****************************************!*\
  !*** ./src/app/manage/manage.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Manage Appointment</p>\n</div>\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/user-home\"></ion-back-button>\n\n<ion-content>\n\n  <ion-card>\n    <ion-button routerLink=\"/edit-appointment\" class=\"doctors-card\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0; margin-top: 10px; margin-bottom: 10px;\">\n        <ion-row>\n          <ion-col class=\"doc-info\" size=\"10\">\n            <p class=\"reason\">Dr. John Smith</p>\n            <!-- <p class=\"range-time\">11:00AM - 1:25PM</p> -->\n          </ion-col>\n          <ion-col class=\"avatar-img\" size=\"2\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button routerLink=\"/edit-appointment\" class=\"doctors-card\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0; margin-top: 10px; margin-bottom: 10px;\">\n        <ion-row>\n          <ion-col class=\"doc-info\" size=\"10\">\n            <p class=\"reason\">Dr. John Smith</p>\n            <!-- <p class=\"range-time\">11:00AM - 1:25PM</p> -->\n          </ion-col>\n          <ion-col class=\"avatar-img\" size=\"2\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button routerLink=\"/edit-appointment\" class=\"doctors-card\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0; margin-top: 10px; margin-bottom: 10px;\">\n        <ion-row>\n          <ion-col class=\"doc-info\" size=\"10\">\n            <p class=\"reason\">Dr. John Smith</p>\n            <!-- <p class=\"range-time\">11:00AM - 1:25PM</p> -->\n          </ion-col>\n          <ion-col class=\"avatar-img\" size=\"2\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/manage/manage.page.scss":
/*!*****************************************!*\
  !*** ./src/app/manage/manage.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.doctors-card {\n  color: grey;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  height: auto;\n  --background: transparent;\n  --background-activated: transparent; }\n\n.doctor-img {\n  width: 60px;\n  height: 60px; }\n\n.avatar-img {\n  margin: 0;\n  padding: 0; }\n\n.doc-info {\n  text-align: left;\n  margin: 0;\n  padding: 0;\n  margin-top: 5px; }\n\n.reason {\n  font-weight: 700;\n  color: black;\n  font-size: 15px; }\n\n.range-time {\n  font-size: 14px;\n  font-weight: 400;\n  color: #b9b9b9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9tYW5hZ2UvbWFuYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdGQUF3RjtFQUN4RixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUFhO0VBQ2IsbUNBQXVCLEVBQUE7O0FBR3pCO0VBRUUsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlL21hbmFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzkzMjc4ZiwgIzdjNTViNywgIzU5NzZkMSwgIzMzOTJkZiwgIzI5YWJlMik7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5kb2N0b3JzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hcnJvdy1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogMjBweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmFycm93IHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmRvY3RvcnMtY2FyZCB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kb2N0b3ItaW1nIHtcbiAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmF2YXRhci1pbWcge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kb2MtaW5mbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucmVhc29uIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5yYW5nZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiKDE4NSwgMTg1LCAxODUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/manage/manage.page.ts":
/*!***************************************!*\
  !*** ./src/app/manage/manage.page.ts ***!
  \***************************************/
/*! exports provided: ManagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePage", function() { return ManagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var ManagePage = /** @class */ (function () {
    function ManagePage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    ManagePage.prototype.ngOnInit = function () {
    };
    ManagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__(/*! ./manage.page.html */ "./src/app/manage/manage.page.html"),
            styles: [__webpack_require__(/*! ./manage.page.scss */ "./src/app/manage/manage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], ManagePage);
    return ManagePage;
}());



/***/ })

}]);
//# sourceMappingURL=manage-manage-module.js.map