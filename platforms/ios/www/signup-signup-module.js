(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n  <ion-img class=\"logo\" src=\"assets/logomiapplogin.png\"></ion-img>\n\n  <h4 class=\"signin-title\">SIGN UP</h4>\n\n  <ion-card class=\"input-card\">\n\n\n    <ion-grid class=\"borders\">\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon class=\"icon\" ios=\"ios-person\" md=\"md-person\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-input [(ngModel)]=\"name\" class=\"name\" placeholder=\"Full Name\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"borders\">\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon class=\"icon\" ios=\"ios-unlock\" md=\"md-unlock\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-input [(ngModel)]=\"password\" class=\"password\" placeholder=\"Password\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"borders\">\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon class=\"icon\" ios=\"ios-unlock\" md=\"md-unlock\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-input [(ngModel)]=\"confirmPassword\" class=\"confirm-password\" placeholder=\"Confirm Password\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class=\"borders\">\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon class=\"icon\" ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-input [(ngModel)]=\"email\" class=\"email\" placeholder=\"Email\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-button (click)=\"openPage()\" class=\"signup-btn1\" expand=\"block\">SIGN UP</ion-button>\n    <ion-button class=\"facebook-btn\" expand=\"block\">SIGN UP WITH FACEBOOK</ion-button>\n  </ion-card>\n\n  <ion-card style=\"box-shadow: none; margin-bottom: 0; margin-top: 5px;\">\n    <p routerLink=\"/signin\" class=\"signup-sec\">Have an account?<ion-button class=\"signin-btn1\">SIGN IN</ion-button>\n    </p>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 70px;\n  margin-bottom: 50px; }\n\n.signin-title {\n  letter-spacing: 1px;\n  padding: 0;\n  margin: 0;\n  font-size: 17px;\n  text-align: center; }\n\n.input-card {\n  margin-bottom: 0;\n  padding: 0;\n  margin-top: 30px;\n  box-shadow: none; }\n\n.borders {\n  border: 1px solid #cacaca;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  padding: 0; }\n\n.icon {\n  width: 25px;\n  height: 25px;\n  padding-top: 5px; }\n\n.signup-btn1,\n.facebook-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.signin-btn1 {\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  color: blue;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 1px;\n  padding-bottom: 10px; }\n\n.signup-sec {\n  text-align: center;\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFJbEI7O0VBRUUsd0ZBQXdGO0VBQ3hGLGdDQUFnQztFQUNoQyx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsa0JBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2lnbmluLXRpdGxlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlucHV0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYm9yZGVycyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDIsIDIwMiwgMjAyKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5cbi5zaWdudXAtYnRuMSxcbi5mYWNlYm9vay1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zaWduaW4tYnRuMSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiBibHVlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uc2lnbnVwLXNlYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var SignupPage = /** @class */ (function () {
    function SignupPage(navigate, nativePageTransitions, provider) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
        parse.serverURL = 'https://parseapi.back4app.com/';
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "YzGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/gender");
    };
    SignupPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/signin");
    };
    SignupPage.prototype.signUp = function () {
        this.provider.name = this.name;
        this.provider.email = this.email;
        this.provider.password = this.password;
        this.provider.confirmPassword = this.confirmPassword;
    };
    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"], _provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map