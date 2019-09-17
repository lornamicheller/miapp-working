(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







var routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]
    }
];
var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.page.html":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n  <ion-img class=\"logo\" src=\"assets/logomiapplogin.png\"></ion-img>\n\n  <h4 class=\"signin-title\">SIGN IN</h4>\n\n  <ion-card class=\"input-card\">\n    <ion-grid class=\"borders\">\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon class=\"icon\" ios=\"ios-person\" md=\"md-person\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-input [(ngModel)]=\"email\" class=\"user\" placeholder=\"Username\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n    <ion-grid class=\"borders\">\n      <ion-row>\n        <ion-col size=\"1\">\n          <ion-icon class=\"icon\" ios=\"ios-unlock\" md=\"md-unlock\"></ion-icon>\n        </ion-col>\n        <ion-col>\n          <ion-input type=\"password\" [(ngModel)]=\"password\" class=\"password\" placeholder=\"Password\">\n          </ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-button routerLink=\"/forgot-pass\" class=\"forgot-btn\" expand=\"block\">Forgot password?</ion-button>\n\n    <ion-button (click)=\"login()\" class=\"signin-btn\" expand=\"block\">SIGN IN</ion-button>\n    <ion-button class=\"facebook-btn\" expand=\"block\">SIGN IN WITH FACEBOOK</ion-button>\n  </ion-card>\n\n  <ion-card style=\"box-shadow: none; margin-top: 5px; margin-bottom: 0\">\n    <p routerLink=\"/signup\" class=\"signup-sec\">Don't have an account?<ion-button class=\"signup-btn\">SIGN UP\n      </ion-button>\n    </p>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  width: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 70px;\n  margin-bottom: 30px; }\n\n.signin-title {\n  letter-spacing: 1px;\n  padding: 0;\n  margin: 0;\n  font-size: 17px;\n  text-align: center; }\n\n.input-card {\n  margin-bottom: 0;\n  padding: 0;\n  margin-top: 30px;\n  box-shadow: none; }\n\n.borders {\n  border: 1px solid #cacaca;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  padding: 0;\n  height: 45px; }\n\n.icon {\n  width: 25px;\n  height: 25px;\n  padding-top: 5px; }\n\n.signin-btn {\n  margin-top: 100px; }\n\n.signin-btn,\n.facebook-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  height: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.forgot-btn {\n  --color: rgb(177, 177, 177);\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.signup-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none;\n  color: blue;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 1px;\n  padding-bottom: 10px; }\n\n.signup-sec {\n  text-align: center;\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UseUJBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25COztFQUVFLHdGQUF3RjtFQUN4RixnQ0FBZ0M7RUFDaEMseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUVmLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSwyQkFBUTtFQUNSLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5zaWduaW4tdGl0bGUge1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5ib3JkZXJzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwMiwgMjAyLCAyMDIpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnNpZ25pbi1idG4ge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnNpZ25pbi1idG4sXG4uZmFjZWJvb2stYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLy8gLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9yZ290LWJ0biB7XG4gIC0tY29sb3I6IHJnYigxNzcsIDE3NywgMTc3KTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNpZ251cC1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBjb2xvcjogYmx1ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNpZ251cC1zZWMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");







var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var SigninPage = /** @class */ (function () {
    function SigninPage(navigate, nativePageTransitions, provider, alertCtrl) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        parse.serverURL = 'https://parseapi.back4app.com/';
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "zGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
    }
    SigninPage.prototype.ngOnInit = function () {
    };
    SigninPage.prototype.openPage = function () {
        //   let options: NativeTransitionOptions = {
        //   duration: 100,
        //   iosdelay: 100
        //  }
        // console.log(options);
        // this.nativePageTransitions.fade(options);
        //   this.navigate.navigateRoot("/user-home");
    };
    // openPage2() {
    //     let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //     this.navigate.navigateRoot("/signup");
    // }
    // openPage3() {
    //     let options: NativeTransitionOptions = {
    //     duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //     this.navigate.navigateRoot("/forgot-pass");
    // }
    SigninPage.prototype.alert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Error',
                            message: 'Correo electrónico / Contraseña inválida.',
                            buttons: [{
                                    text: 'OK',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
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
    SigninPage.prototype.login = function () {
        // this.provider.email = this.email
        // this.provider.password
        var _this = this;
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.User.logIn(this.email, this.password).then(function (resp) {
            console.log('Logged in successfully', resp);
            var currentUser = parse__WEBPACK_IMPORTED_MODULE_3___default.a.User.current(); //usuario actual logged
            _this.user = currentUser; //igual a variable global
            var options = {
                duration: 100,
                iosdelay: 100
            };
            console.log(options);
            _this.nativePageTransitions.fade(options);
            _this.navigate.navigateRoot("/user-home");
            // Parse.Cloud.run('ifVerified', { userId: Parse.User.current().id }).then((response) => {
            //   if (response) {
            //     this.navigateInicio(); //navegar
            //   }
            //   else{
            //     this.notVerified();
            //   }
            // });
        }, function (err) {
            console.log('Error logging in', err);
            _this.alert();
        });
    };
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.page.html */ "./src/app/signin/signin.page.html"),
            styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"], _provider_service__WEBPACK_IMPORTED_MODULE_4__["ProviderService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], SigninPage);
    return SigninPage;
}());



/***/ })

}]);
//# sourceMappingURL=signin-signin-module.js.map