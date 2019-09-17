(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-appointment-view-appointment-module"],{

/***/ "./src/app/view-appointment/view-appointment.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-appointment/view-appointment.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewAppointmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAppointmentPageModule", function() { return ViewAppointmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-appointment.page */ "./src/app/view-appointment/view-appointment.page.ts");







var routes = [
    {
        path: '',
        component: _view_appointment_page__WEBPACK_IMPORTED_MODULE_6__["ViewAppointmentPage"]
    }
];
var ViewAppointmentPageModule = /** @class */ (function () {
    function ViewAppointmentPageModule() {
    }
    ViewAppointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_view_appointment_page__WEBPACK_IMPORTED_MODULE_6__["ViewAppointmentPage"]]
        })
    ], ViewAppointmentPageModule);
    return ViewAppointmentPageModule;
}());



/***/ }),

/***/ "./src/app/view-appointment/view-appointment.page.html":
/*!*************************************************************!*\
  !*** ./src/app/view-appointment/view-appointment.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">View Appointment</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/user-home\"></ion-back-button>\n\n\n<ion-content>\n\n  <!-- <p style=\"text-align: center; margin-top: 20px;\">No scheduled appointments</p> --> <!-- usar este label cuando no hay citas programadas -->\n\n  <ion-card>\n    <ion-button routerLink=\"/appointment-details\" class=\"doctors-card\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0; margin-top: 10px; margin-bottom: 10px;\">\n        <ion-row>\n          <ion-col class=\"doc-info\" size=\"10\">\n            <p class=\"reason\">Dr. John Smith</p>\n          </ion-col>\n          <ion-col class=\"avatar-img\" size=\"2\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button routerLink=\"/appointment-details\" class=\"doctors-card\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0; margin-top: 10px; margin-bottom: 10px;\">\n        <ion-row>\n          <ion-col class=\"doc-info\" size=\"10\">\n            <p class=\"reason\">Dr. John Smith</p>\n          </ion-col>\n          <ion-col class=\"avatar-img\" size=\"2\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button routerLink=\"/appointment-details\" class=\"doctors-card\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0; margin-top: 10px;  margin-bottom: 10px;\">\n        <ion-row>\n          <ion-col class=\"doc-info\" size=\"10\">\n            <p class=\"reason\">Dr. John Smith</p>\n          </ion-col>\n          <ion-col class=\"avatar-img\" size=\"2\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/view-appointment/view-appointment.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/view-appointment/view-appointment.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.doctors-card {\n  color: grey;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  height: auto;\n  --background: transparent;\n  --background-activated: transparent; }\n\n.doctor-img {\n  width: 60px;\n  height: 60px; }\n\n.avatar-img {\n  margin: 0;\n  padding: 0; }\n\n.doc-info {\n  text-align: left;\n  margin: 0;\n  padding: 0;\n  margin-top: 5px; }\n\n.reason {\n  font-weight: 700;\n  color: black;\n  font-size: 15px; }\n\n.range-time {\n  font-size: 14px;\n  font-weight: 400;\n  color: #b9b9b9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC92aWV3LWFwcG9pbnRtZW50L3ZpZXctYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0ZBQXdGO0VBQ3hGLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQWE7RUFDYixtQ0FBdUIsRUFBQTs7QUFHekI7RUFFRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3LWFwcG9pbnRtZW50L3ZpZXctYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZG9jdG9ycy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb2N0b3JzLWNhcmQge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZG9jdG9yLWltZyB7XG4gIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZG9jLWluZm8ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnJlYXNvbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ucmFuZ2UtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHJnYigxODUsIDE4NSwgMTg1KTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/view-appointment/view-appointment.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/view-appointment/view-appointment.page.ts ***!
  \***********************************************************/
/*! exports provided: ViewAppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAppointmentPage", function() { return ViewAppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var ViewAppointmentPage = /** @class */ (function () {
    function ViewAppointmentPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    ViewAppointmentPage.prototype.ngOnInit = function () {
    };
    ViewAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-appointment',
            template: __webpack_require__(/*! ./view-appointment.page.html */ "./src/app/view-appointment/view-appointment.page.html"),
            styles: [__webpack_require__(/*! ./view-appointment.page.scss */ "./src/app/view-appointment/view-appointment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], ViewAppointmentPage);
    return ViewAppointmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-appointment-view-appointment-module.js.map