(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-appointment-edit-appointment-module"],{

/***/ "./src/app/edit-appointment/edit-appointment.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.module.ts ***!
  \*************************************************************/
/*! exports provided: EditAppointmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppointmentPageModule", function() { return EditAppointmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-appointment.page */ "./src/app/edit-appointment/edit-appointment.page.ts");







var routes = [
    {
        path: '',
        component: _edit_appointment_page__WEBPACK_IMPORTED_MODULE_6__["EditAppointmentPage"]
    }
];
var EditAppointmentPageModule = /** @class */ (function () {
    function EditAppointmentPageModule() {
    }
    EditAppointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_appointment_page__WEBPACK_IMPORTED_MODULE_6__["EditAppointmentPage"]]
        })
    ], EditAppointmentPageModule);
    return EditAppointmentPageModule;
}());



/***/ }),

/***/ "./src/app/edit-appointment/edit-appointment.page.html":
/*!*************************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Appointment Details</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/manage\"></ion-back-button>\n\n\n<ion-content>\n\n  <ion-card>\n    <ion-button class=\"doctors-card\" expand=\"full\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"avatar-img\" size=\"2\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"doc-info\" size=\"8\">\n            <p style=\"color: black; margin-bottom: 5px; padding-bottom: 0;\">John Smith</p>\n            <p style=\"font-size: 14px; margin-top: 0; padding-top: 0;\">Cardiologist</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Jan 14, 2019\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            11:00AM - 1:25PM\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Estimated Wait Time: 1 hour\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\" style=\"margin-top: 10px;\">\n            <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Appointment Status: <span class=\"status\">Booked and <br>pending confirmation from patient</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Appointment Status: <span class=\"status\">Confirmed</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\" style=\"margin-top: 10px;\">\n            <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Appointment Status: <span class=\"status\">Pending Check-in <br>from patient</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Appointment Status: <span class=\"status\">Check-in complete</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Appointment Status: <span class=\"status\">Arrived (In-office)</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-button (click)=\"presentAlertConfirm()\" class=\"modify-btn\" expand=\"block\">MODIFY APPOINTMENT</ion-button>\n  <ion-button class=\"cancel-btn\" (click)=\"presentAlertConfirm2()\" expand=\"block\">CANCEL APPOINTMENT</ion-button>\n\n  <ion-button class=\"go-btn\" routerLink=\"/user-home\" expand=\"block\">\n    <img src=\"assets/stetho.png\" width=\"40px\" height=\"40px\" style=\"object-fit: contain;\">\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/edit-appointment/edit-appointment.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.doctors-card {\n  color: grey;\n  --color-activated: grey;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  height: auto;\n  --background: transparent;\n  --background-activated: transparent; }\n\n.doctor-img {\n  margin-top: 5px;\n  width: 60px;\n  height: 60px; }\n\n.doc-info {\n  text-align: left;\n  margin-left: 25px; }\n\n.title {\n  border-left: 1px solid #adadad;\n  color: black;\n  font-weight: 400;\n  font-size: 15px;\n  text-align: left;\n  line-height: 20px; }\n\n.icon {\n  padding-top: 7px;\n  color: #5a6ff1;\n  width: 20px;\n  height: 20px;\n  margin-right: 5px; }\n\n.info-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  margin: 0;\n  padding: 0; }\n\n.modify-btn {\n  margin-top: 60px; }\n\n.modify-btn,\n.cancel-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-bottom: 20px; }\n\n.go-btn {\n  width: 80px;\n  height: 80px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n  margin-bottom: 10px;\n  --border-radius: 50%;\n  --background: #778AFB;\n  --background-activated: #778AFB;\n  left: 0;\n  right: 0;\n  z-index: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9lZGl0LWFwcG9pbnRtZW50L2VkaXQtYXBwb2ludG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0ZBQXdGO0VBQ3hGLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCx1QkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUFhO0VBQ2IsbUNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsOEJBQXlDO0VBQ3pDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjs7RUFFRSx3RkFBd0Y7RUFDeEYsZ0NBQWdDO0VBQ2hDLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixvQkFBZ0I7RUFDaEIscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsT0FBTztFQUNQLFFBQVE7RUFDUixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWFwcG9pbnRtZW50L2VkaXQtYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZG9jdG9ycy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb2N0b3JzLWNhcmQge1xuICBjb2xvcjogZ3JleTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IGdyZXk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbn1cblxuLmRvY3Rvci1pbWcge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5kb2MtaW5mbyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4udGl0bGUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uaWNvbiB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGNvbG9yOiAjNWE2ZmYxO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmluZm8tYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1vZGlmeS1idG4ge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4ubW9kaWZ5LWJ0bixcbi5jYW5jZWwtYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5nby1idG4ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjNzc4QUZCO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNzc4QUZCO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/edit-appointment/edit-appointment.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/edit-appointment/edit-appointment.page.ts ***!
  \***********************************************************/
/*! exports provided: EditAppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAppointmentPage", function() { return EditAppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");





var EditAppointmentPage = /** @class */ (function () {
    function EditAppointmentPage(navigate, nativePageTransitions, alertController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertController = alertController;
    }
    EditAppointmentPage.prototype.ngOnInit = function () {
    };
    EditAppointmentPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
    };
    EditAppointmentPage.prototype.openPage2 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        //   this.navigate.navigateRoot("/appointment");
    };
    //   openPage3() {
    //     let options: NativeTransitionOptions= {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //     this.navigate.navigateRoot("/user-home");
    // }
    EditAppointmentPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/appointment");
    };
    //   async presentAlert() {
    //       const alert=await this.alertController.create( {
    //           header: 'Alert', message: 'Are you sure you want to cancel your appointment?', buttons: [ {
    //               text: 'YES', handler: () => {
    //                   console.log('Confirm Cancel');
    //                   this.openPage();
    //                   this.navigate.navigateRoot('/user-home');
    //               }
    //           }
    //           ]
    //       }
    //       );
    //       await alert.present();
    //   }
    //   async presentAlert2() {
    //     const alert=await this.alertController.create( {
    //         header: 'Modify', message: 'Are you sure you want to edit your appointment?', buttons: [ {
    //             text: 'YES', handler: ()=> {
    //                 console.log('Confirm Cancel');
    //                 this.openPage2();
    //                 this.navigate.navigateRoot('/appointment');
    //             }
    //         }
    //         ]
    //     }
    //     );
    //     await alert.present();
    // }
    EditAppointmentPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Modify',
                            message: 'Are you sure you want to modify your appointment?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm yes');
                                        _this.openPage2();
                                        _this.navigate.navigateRoot('/modify-appointment');
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
    EditAppointmentPage.prototype.presentAlertConfirm2 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel',
                            message: 'Are you sure you want to cancel your appointment?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Yes',
                                    handler: function () {
                                        console.log('Confirm yes');
                                        _this.presentCancel();
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
    EditAppointmentPage.prototype.presentCancel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Jane Doe',
                            message: 'Your appointment with Dr. X has been canceled. Your medical doctor or wellness provider will be notified. Thank you!',
                            buttons: [
                                {
                                    text: 'Book New Appointment',
                                    handler: function (blah) {
                                        _this.openCalendar();
                                        _this.navigate.navigateRoot('/appointment');
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function (blah) {
                                        _this.openPage2();
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
    EditAppointmentPage.prototype.openCalendar = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/appointment");
    };
    EditAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-appointment',
            template: __webpack_require__(/*! ./edit-appointment.page.html */ "./src/app/edit-appointment/edit-appointment.page.html"),
            styles: [__webpack_require__(/*! ./edit-appointment.page.scss */ "./src/app/edit-appointment/edit-appointment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], EditAppointmentPage);
    return EditAppointmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-appointment-edit-appointment-module.js.map