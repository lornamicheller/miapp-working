(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["late-screen-late-screen-module"],{

/***/ "./src/app/late-screen/late-screen.module.ts":
/*!***************************************************!*\
  !*** ./src/app/late-screen/late-screen.module.ts ***!
  \***************************************************/
/*! exports provided: LateScreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LateScreenPageModule", function() { return LateScreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _late_screen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./late-screen.page */ "./src/app/late-screen/late-screen.page.ts");







var routes = [
    {
        path: '',
        component: _late_screen_page__WEBPACK_IMPORTED_MODULE_6__["LateScreenPage"]
    }
];
var LateScreenPageModule = /** @class */ (function () {
    function LateScreenPageModule() {
    }
    LateScreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_late_screen_page__WEBPACK_IMPORTED_MODULE_6__["LateScreenPage"]]
        })
    ], LateScreenPageModule);
    return LateScreenPageModule;
}());



/***/ }),

/***/ "./src/app/late-screen/late-screen.page.html":
/*!***************************************************!*\
  !*** ./src/app/late-screen/late-screen.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Choose your delay time</p>\n</div>\n\n<ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button>\n\n<ion-content>\n\n  <ion-card style=\"box-shadow: none;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-checkbox color=\"primary\"></ion-checkbox>\n        </ion-col>\n        <ion-col class=\"right-col\" size=\"10\">\n          15 MINUTES\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-checkbox color=\"primary\"></ion-checkbox>\n        </ion-col>\n        <ion-col class=\"right-col\" size=\"10\">\n          30 MINUTES\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-checkbox color=\"primary\"></ion-checkbox>\n        </ion-col>\n        <ion-col class=\"right-col\" size=\"10\">\n          1 HOUR\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-button (click)=\"presentAlert()\" class=\"confirm-btn\" expand=\"full\">DONE</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/late-screen/late-screen.page.scss":
/*!***************************************************!*\
  !*** ./src/app/late-screen/late-screen.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 0;\n  z-index: 20;\n  width: 50px;\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.confirm-btn {\n  background-image: linear-gradient(to right, #575af3, #5f69f6, #6878f9, #7285fb, #7e93fc);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 200px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: white; }\n\n.right-col {\n  margin-top: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9sYXRlLXNjcmVlbi9sYXRlLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RkFBd0Y7RUFDeEYsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsa0JBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSx3RkFBd0Y7RUFDeEYsZ0NBQWdDO0VBQ2hDLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xhdGUtc2NyZWVuL2xhdGUtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmRvY3RvcnMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jb25maXJtLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzU3NWFmMywgIzVmNjlmNiwgIzY4NzhmOSwgIzcyODVmYiwgIzdlOTNmYyk7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yaWdodC1jb2wge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/late-screen/late-screen.page.ts":
/*!*************************************************!*\
  !*** ./src/app/late-screen/late-screen.page.ts ***!
  \*************************************************/
/*! exports provided: LateScreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LateScreenPage", function() { return LateScreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");





var LateScreenPage = /** @class */ (function () {
    function LateScreenPage(navigate, nativePageTransitions, alertController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertController = alertController;
    }
    LateScreenPage.prototype.ngOnInit = function () {
    };
    LateScreenPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        //   this.navigate.navigateRoot("/appointment");
    };
    LateScreenPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/checkin-profile");
    };
    LateScreenPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jane Doe, thank you for letting us know!', message: 'Your doctor will now be notified of your delayed arrival.', buttons: [{
                                    text: 'OK', handler: function () {
                                        console.log('Confirm Cancel');
                                        _this.openPage();
                                        _this.navigate.navigateRoot('/user-home');
                                    }
                                }
                            ]
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
    LateScreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-late-screen',
            template: __webpack_require__(/*! ./late-screen.page.html */ "./src/app/late-screen/late-screen.page.html"),
            styles: [__webpack_require__(/*! ./late-screen.page.scss */ "./src/app/late-screen/late-screen.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], LateScreenPage);
    return LateScreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=late-screen-late-screen-module.js.map