(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-pass-forgot-pass-module"],{

/***/ "./src/app/forgot-pass/forgot-pass.module.ts":
/*!***************************************************!*\
  !*** ./src/app/forgot-pass/forgot-pass.module.ts ***!
  \***************************************************/
/*! exports provided: ForgotPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassPageModule", function() { return ForgotPassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_pass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-pass.page */ "./src/app/forgot-pass/forgot-pass.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_pass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPassPage"]
    }
];
var ForgotPassPageModule = /** @class */ (function () {
    function ForgotPassPageModule() {
    }
    ForgotPassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_pass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPassPage"]]
        })
    ], ForgotPassPageModule);
    return ForgotPassPageModule;
}());



/***/ }),

/***/ "./src/app/forgot-pass/forgot-pass.page.html":
/*!***************************************************!*\
  !*** ./src/app/forgot-pass/forgot-pass.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n  <ion-card class=\"main-bg\">\n    <p class=\"doctors-title\">Forgot Password?</p>\n  </ion-card>\n\n  <ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/signin\"></ion-back-button>\n\n\n  <!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n    <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n  </ion-button> -->\n  <h5 class=\"forgot-text\">Forgot Password</h5>\n  <p class=\"text\">We just need your registered e-mail to send your password reset instructions</p>\n\n  <ion-card class=\"input-card\">\n\n  <ion-grid class=\"borders\">\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon class=\"icon\" ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-input [(ngModel)]=\"email\" class=\"email\" placeholder=\"Email\">\n        </ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  </ion-card>\n\n\n\n  <ion-card class=\"input-card\">\n\n\n    <ion-button (click)=\"openPage()\" class=\"signin-btn\" expand=\"block\">SEND</ion-button>\n  </ion-card>\n\n  <ion-card style=\"box-shadow: none; margin-top: 150px;\">\n    <p (click)=\"openPage2()\" class=\"signup-sec\">Don't have an account?<ion-button class=\"signup-btn\">SIGN UP\n      </ion-button>\n    </p>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgot-pass/forgot-pass.page.scss":
/*!***************************************************!*\
  !*** ./src/app/forgot-pass/forgot-pass.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px;\n  margin: 0;\n  border-radius: 0; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  letter-spacing: 1px;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.bg {\n  --background: transparent;\n  height: auto; }\n\n.logo {\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.user-icon {\n  width: 30px;\n  height: 30px;\n  color: white; }\n\n.logo-bell {\n  display: flex;\n  width: 100%; }\n\n.bell-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.bell-icon {\n  width: 30px;\n  height: 30px;\n  color: white; }\n\n.forgot-text {\n  text-align: center;\n  font-weight: 800;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: #6b6b6b;\n  padding-top: 30px; }\n\n.text {\n  text-align: center;\n  font-size: 12px;\n  font-weight: 300;\n  margin-left: 10px;\n  margin-right: 10px; }\n\n.input-card {\n  margin-bottom: 0;\n  padding: 0;\n  margin-top: 30px;\n  box-shadow: none; }\n\n.borders {\n  border: 1px solid #cacaca;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  padding: 0; }\n\n.icon {\n  width: 25px;\n  height: 25px;\n  padding-top: 5px; }\n\n.signin-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 40px;\n  margin-bottom: 10px; }\n\n.signup-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  color: blue;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 1px;\n  padding-bottom: 10px; }\n\n.signup-sec {\n  text-align: center;\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9mb3Jnb3QtcGFzcy9mb3Jnb3QtcGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RkFBd0Y7RUFDeEYsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUViO0VBQ0UseUJBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUE0QmxCO0VBQ0Usd0ZBQXdGO0VBQ3hGLGdDQUFnQztFQUNoQyx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290LXBhc3MvZm9yZ290LXBhc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5kb2N0b3JzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hcnJvdy1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogMjBweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmFycm93IHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cbi5iZyB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi51c2VyLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dvLWJlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJlbGwtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJlbGwtaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcmdvdC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiByZ2IoMTA3LCAxMDcsIDEwNyk7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4udGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaW5wdXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5ib3JkZXJzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMiwgMjAyLCAyMDIpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi8vIC5pbnB1dC1jYXJkIHtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICBtYXJnaW4tdG9wOiAzMHB4O1xuLy8gICBib3gtc2hhZG93OiBub25lO1xuLy8gfVxuXG4vLyAuaWNvbiB7XG4vLyAgIHdpZHRoOiAyNXB4O1xuLy8gICBoZWlnaHQ6IDI1cHg7XG4vLyAgIHBhZGRpbmctbGVmdDogMTBweDtcbi8vIH1cblxuLy8gLmVtYWlsIHtcbi8vICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMiwgMjAyLCAyMDIpO1xuLy8gICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLy8gICB3aWR0aDogMzIwcHg7XG4vLyAgIGhlaWdodDogNDVweDtcbi8vICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgIG1hcmdpbi1yaWdodDogYXV0bztcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcbi8vICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuLy8gICBmb250LXdlaWdodDogNzAwO1xuLy8gfVxuXG4uc2lnbmluLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzkzMjc4ZiwgIzdjNTViNywgIzU5NzZkMSwgIzMzOTJkZiwgIzI5YWJlMik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc2lnbnVwLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGNvbG9yOiBibHVlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uc2lnbnVwLXNlYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgot-pass/forgot-pass.page.ts":
/*!*************************************************!*\
  !*** ./src/app/forgot-pass/forgot-pass.page.ts ***!
  \*************************************************/
/*! exports provided: ForgotPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassPage", function() { return ForgotPassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var ForgotPassPage = /** @class */ (function () {
    function ForgotPassPage(navigate, nativePageTransitions, alertCtrl) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertCtrl = alertCtrl;
        parse.serverURL = 'https://parseapi.back4app.com/';
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "zGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
    }
    ForgotPassPage.prototype.ngOnInit = function () {
    };
    ForgotPassPage.prototype.openPage = function () {
        var _this = this;
        var options = {
            duration: 100,
            iosdelay: 100
        };
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.User.requestPasswordReset(this.email).then(function () {
            // Password reset request was sent successfully
            if (typeof document !== 'undefined')
                console.log('Reset password email sent successfully');
            _this.message = 'Reset password email sent successfully';
            _this.title = 'Success';
            console.log(options);
            _this.alert();
            // this.nativePageTransitions.fade(options);
            // this.navigate.navigateRoot("/signin");
        }).catch(function (error) {
            if (typeof document !== 'undefined')
                _this.message = 'Error while creating request to reset user password';
            _this.title = 'Error';
            _this.alert();
            console.error('Error while creating request to reset user password', error);
        });
    };
    ForgotPassPage.prototype.alert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.title,
                            message: this.message,
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        var options = {
                                            duration: 100,
                                            iosdelay: 100
                                        };
                                        _this.nativePageTransitions.fade(options);
                                        _this.navigate.navigateRoot("/signin");
                                        console.log('Confirm Cancel');
                                        //this.popController.dismiss();
                                        //this.nav.navigateRoot("/sidemenu");
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPassPage.prototype.openPage2 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/signup");
    };
    ForgotPassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-pass',
            template: __webpack_require__(/*! ./forgot-pass.page.html */ "./src/app/forgot-pass/forgot-pass.page.html"),
            styles: [__webpack_require__(/*! ./forgot-pass.page.scss */ "./src/app/forgot-pass/forgot-pass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ForgotPassPage);
    return ForgotPassPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-pass-forgot-pass-module.js.map