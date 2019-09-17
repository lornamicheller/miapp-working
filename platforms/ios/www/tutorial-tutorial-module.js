(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"],{

/***/ "./src/app/tutorial/tutorial.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.module.ts ***!
  \*********************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/tutorial/tutorial.page.ts");







var routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.page.html":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n  <ion-slide class=\"full-slide\">\n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/directoriointro.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Find Your Doctor or Wellness Provider</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"service-info\">\n            Find MiApp doctors and wellness providers by name, region, specialty, or date of availability from your\n            mobile device.\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/calendariointro.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Schedule and Manage Your Appointment</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"service-info\">\n            Conviniently schedule, confirm, cancel, or reschedule your appointment from your mobile device.\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/listadecitasintro.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Remote Check-in</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"service-info\">\n            On appointment day, check into your appointment from your mobile device. Remote Check-in holds your place on the doctor or wellness provider's virtual waitlist and notifies you of your estimated wait time.\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/notificationmiapp.png\"></ion-img>\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Intelligent Notifications</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"service-info\">\n            Receive timely, automatic notifications reminding you of your appointment and allowing you to confirm, cancel, or reschedule. On appointment day, notifications will update you on your estimated wait time.\n          </ion-card-content>\n          <ion-button routerLink=\"/signin\" class=\"signin-btn\" expand=\"block\">START</ion-button>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </ion-slide>\n</ion-content>"

/***/ }),

/***/ "./src/app/tutorial/tutorial.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle-img {\n  width: 150px;\n  height: 150px;\n  margin-left: auto;\n  margin-right: auto;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.tutorial-first-card {\n  box-shadow: none; }\n\n.title-service {\n  font-size: 20px;\n  font-weight: 300;\n  margin-top: 15px; }\n\n.service-info {\n  line-height: 25px;\n  font-weight: 300;\n  font-size: 16px;\n  text-align: center; }\n\n.signin-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 20px;\n  margin-bottom: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC90dXRvcmlhbC90dXRvcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsc0JBQW1CO0tBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usd0ZBQXdGO0VBQ3hGLGdDQUFnQztFQUNoQyx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmNsZS1pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi50dXRvcmlhbC1maXJzdC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnRpdGxlLXNlcnZpY2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zZXJ2aWNlLWluZm8ge1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWduaW4tYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tutorial/tutorial.page.ts ***!
  \*******************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var TutorialPage = /** @class */ (function () {
    function TutorialPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    TutorialPage.prototype.ngOnInit = function () {
    };
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.page.html */ "./src/app/tutorial/tutorial.page.html"),
            styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/tutorial/tutorial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-module.js.map