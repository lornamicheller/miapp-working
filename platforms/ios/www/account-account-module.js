(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");







var routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Profile</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/home-user\"></ion-back-button>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <ion-img class=\"profile-img\" src=\"assets/girl.png\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"10\">\n      <ion-button (click)=\"openPage2()\" class=\"edit-btn\">EDIT</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p class=\"profile-name\">MELANIE ALMEIDA</p>\n  <ion-button expand=\"block\" class=\"links\">FIND</ion-button>\n  <ion-button expand=\"block\" class=\"links-2\">TERMS AND CONDITIONS</ion-button>\n  <ion-button expand=\"block\" class=\"links-3\">WEBSITE</ion-button>\n\n</ion-content>\n\n<ion-button (click)=\"logout()\" expand=\"expand\" class=\"btn-logout\">LOGOUT</ion-button>"

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  letter-spacing: 1px;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.profile-img {\n  width: 60px;\n  height: 60px;\n  margin-left: 10px; }\n\n.edit-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  color: #a7a7a7;\n  float: right;\n  font-weight: 400; }\n\n.profile-name {\n  margin-left: 20px;\n  font-size: 13px; }\n\n.links {\n  color: #a7a7a7;\n  font-weight: 400;\n  --background: transparent;\n  --background-activated: transparent;\n  --padding-end: 320px;\n  font-size: 13px; }\n\n.links-2 {\n  color: #a7a7a7;\n  font-weight: 400;\n  --background: transparent;\n  --background-activated: transparent;\n  --padding-end: 195px;\n  font-size: 13px; }\n\n.links-3 {\n  color: #a7a7a7;\n  font-weight: 400;\n  --background: transparent;\n  --background-activated: transparent;\n  --padding-end: 290px;\n  font-size: 13px; }\n\n.btn-logout {\n  text-align: center;\n  font-weight: 400;\n  font-size: 13px;\n  color: #969696;\n  --background: transparent;\n  --background-activated: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0ZBQXdGO0VBQ3hGLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGNBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGNBQXlCO0VBQ3pCLGdCQUFnQjtFQUNsQix5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixvQkFBYztFQUNkLGVBQWUsRUFBQTs7QUFHZjtFQUNFLGNBQXlCO0VBQ3pCLGdCQUFnQjtFQUNsQix5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixvQkFBYztFQUNkLGVBQWUsRUFBQTs7QUFHZjtFQUNFLGNBQXlCO0VBQ3pCLGdCQUFnQjtFQUNsQix5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixvQkFBYztFQUNkLGVBQWUsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQXlCO0VBQ3pCLHlCQUFhO0VBQ2IsbUNBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZG9jdG9ycy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5wcm9maWxlLWltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZWRpdC1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucHJvZmlsZS1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmxpbmtzIHtcbiAgY29sb3I6IHJnYigxNjcsIDE2NywgMTY3KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbi0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4tLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbi0tcGFkZGluZy1lbmQ6IDMyMHB4O1xuZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubGlua3MtMiB7XG4gIGNvbG9yOiByZ2IoMTY3LCAxNjcsIDE2Nyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4tLXBhZGRpbmctZW5kOiAxOTVweDtcbmZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmxpbmtzLTMge1xuICBjb2xvcjogcmdiKDE2NywgMTY3LCAxNjcpO1xuICBmb250LXdlaWdodDogNDAwO1xuLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuLS1wYWRkaW5nLWVuZDogMjkwcHg7XG5mb250LXNpemU6IDEzcHg7XG59XG5cbi5idG4tbG9nb3V0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgZm9udC13ZWlnaHQ6IDQwMDsgXG4gIGZvbnQtc2l6ZTogMTNweDsgXG4gIGNvbG9yOiByZ2IoMTUwLCAxNTAsIDE1MCk7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");






var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var AccountPage = /** @class */ (function () {
    function AccountPage(navigate, nativePageTransitions, alertCtrl) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertCtrl = alertCtrl;
        parse.serverURL = 'https://parseapi.back4app.com/';
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.initialize("2lVOPqiL2Ea7bit43NHkjtF0R5UFKxtiUuO8aqnr", "zGjEtvRTwS0a559cBZBvYQjMN58ZxpXNGrKxLfBp");
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/user-home");
    };
    AccountPage.prototype.alert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Error',
                            message: 'Ha ocurrido un error!',
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
    AccountPage.prototype.logout = function () {
        var _this = this;
        var options = {
            duration: 100,
            iosdelay: 100
        };
        parse__WEBPACK_IMPORTED_MODULE_3___default.a.User.logOut().then(function (resp) {
            console.log('Logged out successfully', resp);
            console.log(options);
            _this.nativePageTransitions.fade(options);
            _this.navigate.navigateRoot("/signin");
        }, function (err) {
            console.log('Error logging out', err);
            _this.alert;
        });
    };
    AccountPage.prototype.openPage2 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/edit");
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map