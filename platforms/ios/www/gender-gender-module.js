(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gender-gender-module"],{

/***/ "./src/app/gender/gender.module.ts":
/*!*****************************************!*\
  !*** ./src/app/gender/gender.module.ts ***!
  \*****************************************/
/*! exports provided: GenderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderPageModule", function() { return GenderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gender_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gender.page */ "./src/app/gender/gender.page.ts");







var routes = [
    {
        path: '',
        component: _gender_page__WEBPACK_IMPORTED_MODULE_6__["GenderPage"]
    }
];
var GenderPageModule = /** @class */ (function () {
    function GenderPageModule() {
    }
    GenderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gender_page__WEBPACK_IMPORTED_MODULE_6__["GenderPage"]]
        })
    ], GenderPageModule);
    return GenderPageModule;
}());



/***/ }),

/***/ "./src/app/gender/gender.page.html":
/*!*****************************************!*\
  !*** ./src/app/gender/gender.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"top\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n        <!-- <ion-button (click)=\"goBack()\" class=\"arrow-btn\">\n          <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n        </ion-button> -->\n\n        <ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/signup\"></ion-back-button>\n      </ion-col>\n      <ion-col size=\"8\">\n        <p class=\"create-title\">Create Account</p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button routerLink=\"/birthday\" expand=\"block\" class=\"skip-title\">Skip</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"box-shadow: none; margin-top: 30px;\">\n    <ion-item>\n      <ion-label class=\"health-title\">GENDER</ion-label>\n      <ion-select [(ngModel)]=\"gender\"  [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"\">\n        <ion-select-option>FEMALE</ion-select-option>\n        <ion-select-option>MALE</ion-select-option>\n        <ion-select-option>OTHER</ion-select-option>\n        <ion-select-option>UNDISCLOSED</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-button routerLink=\"/birthday\" class=\"next-btn\" expand=\"block\">NEXT</ion-button>\n\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/gender/gender.page.scss":
/*!*****************************************!*\
  !*** ./src/app/gender/gender.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  padding-top: 30px;\n  border-bottom: 1px solid #cacaca; }\n\n.arrow-btn {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: #363636;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.create-title {\n  text-align: center;\n  font-weight: 800;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: #363636; }\n\n.skip-title {\n  text-align: right;\n  font-weight: 800;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: blue;\n  --padding-end: 10px;\n  --background: transparent;\n  --background-activated: transparent; }\n\n.no-border {\n  border: none !important; }\n\n.next-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 50px;\n  margin-bottom: 10px; }\n\n.health-title {\n  color: grey;\n  font-weight: 800;\n  font-size: 13px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9nZW5kZXIvZ2VuZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBMkMsRUFBQTs7QUFHN0M7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFzQixFQUFBOztBQUd4QjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQWM7RUFDZCx5QkFBYTtFQUNiLG1DQUF1QixFQUFBOztBQUd6QjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLHdGQUF3RjtFQUN4RixnQ0FBZ0M7RUFDaEMseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dlbmRlci9nZW5kZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIwMiwgMjAyLCAyMDIpO1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2IoNTQsIDU0LCA1NCk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jcmVhdGUtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcbn1cblxuLnNraXAtdGl0bGUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogYmx1ZTtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5uby1ib3JkZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm5leHQtYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5oZWFsdGgtdGl0bGUge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/gender/gender.page.ts":
/*!***************************************!*\
  !*** ./src/app/gender/gender.page.ts ***!
  \***************************************/
/*! exports provided: GenderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenderPage", function() { return GenderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var GenderPage = /** @class */ (function () {
    function GenderPage(navigate, nativePageTransitions, provider) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
        this.red = "red";
        parse.serverURL = 'https://parseapi.back4app.com/';
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "YzGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
    }
    GenderPage.prototype.ngOnInit = function () {
        console.log(this.provider.email);
        console.log(this.provider.gender);
    };
    // openPage() {
    //   let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/birthday");
    // }
    // goBack() {
    //   let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/signup");
    // }
    GenderPage.prototype.test = function () {
        console.log(this.gender);
    };
    GenderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gender',
            template: __webpack_require__(/*! ./gender.page.html */ "./src/app/gender/gender.page.html"),
            styles: [__webpack_require__(/*! ./gender.page.scss */ "./src/app/gender/gender.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"], _provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"]])
    ], GenderPage);
    return GenderPage;
}());



/***/ })

}]);
//# sourceMappingURL=gender-gender-module.js.map