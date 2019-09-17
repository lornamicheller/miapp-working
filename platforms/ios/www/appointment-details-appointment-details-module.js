(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-details-appointment-details-module"],{

/***/ "./src/app/appointment-details/appointment-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/appointment-details/appointment-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: AppointmentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentDetailsPageModule", function() { return AppointmentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _appointment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment-details.page */ "./src/app/appointment-details/appointment-details.page.ts");







var routes = [
    {
        path: '',
        component: _appointment_details_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentDetailsPage"]
    }
];
var AppointmentDetailsPageModule = /** @class */ (function () {
    function AppointmentDetailsPageModule() {
    }
    AppointmentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_appointment_details_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentDetailsPage"]]
        })
    ], AppointmentDetailsPageModule);
    return AppointmentDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/appointment-details/appointment-details.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/appointment-details/appointment-details.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Appointment Details</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/view-appointment\"></ion-back-button>\n\n\n<!-- \n  WHEN APPOINTMENT STATUS IS CONFIRM SCREEN WILL NAVIGATE TO NOTIFICATIONS SCREEN SO PEOPLE CAN CONFIRM THEIR APPOINTMENTS\n  WHEN APPOINTMNET STATUS IS CHECK IN SCREEN WILL NAVIGATE TO CHECK-IN SCREEN SO PEOPLE CHECKED IN INTO THEIR APPOINTMENTS\n  \n-->\n\n<ion-content>\n  <ion-card>\n    <ion-button class=\"doctors-card\" expand=\"full\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"avatar-img\" size=\"2\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"doc-info\" size=\"8\">\n            <p style=\"color: black; margin-bottom: 5px; padding-bottom: 0;\">John Smith</p>\n            <p style=\"font-size: 14px; margin-top: 0; padding-top: 0;\">Cardiologist</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-calendar\" md=\"md-calendar\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Jan 14, 2019\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            11:00AM - 1:25PM\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"9\" class=\"title\">\n            Appointment Status: <p class=\"status\">Booked and pending confirmation<br>from patient</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n      <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n        <ion-grid style=\"margin: 0; padding: 0;\">\n          <ion-row>\n            <ion-col size=\"1\" class=\"icon\">\n              <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"9\" class=\"title\">\n              Appointment Status: <p class=\"status\">Confirmed</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-button>\n    </ion-card>\n\n    <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n        <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n          <ion-grid style=\"margin: 0; padding: 0;\">\n            <ion-row>\n              <ion-col size=\"1\" class=\"icon\">\n                <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n              </ion-col>\n              <ion-col size=\"9\" class=\"title\">\n                Appointment Status: <p class=\"status\">Pending Check-in</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-button>\n      </ion-card>\n\n      <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n          <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n            <ion-grid style=\"margin: 0; padding: 0;\">\n              <ion-row>\n                <ion-col size=\"1\" class=\"icon\">\n                  <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"9\" class=\"title\">\n                  Appointment Status: <p class=\"status\">Check-in Complete</p>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-button>\n        </ion-card>\n\n        <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n            <ion-button (click)=\"openPage()\" class=\"info-btn\" expand=\"full\">\n              <ion-grid style=\"margin: 0; padding: 0;\">\n                <ion-row>\n                  <ion-col size=\"1\" class=\"icon\">\n                    <ion-icon ios=\"ios-checkbox\" md=\"md-checkbox\"></ion-icon>\n                  </ion-col>\n                  <ion-col size=\"9\" class=\"title\">\n                    Appointment Status: <p class=\"status\">Arrived</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-button>\n          </ion-card>\n  <ion-button class=\"go-btn\" routerLink=\"/user-home\" expand=\"block\">\n    <img src=\"assets/stetho.png\" width=\"40px\" height=\"40px\" style=\"object-fit: contain;\">\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/appointment-details/appointment-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/appointment-details/appointment-details.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.doctors-card {\n  --color: grey;\n  --color-activated: grey;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  height: auto;\n  --background: transparent;\n  --background-activated: transparent; }\n\n.doctor-img {\n  margin-top: 5px;\n  width: 60px;\n  height: 60px; }\n\n.doc-info {\n  text-align: left;\n  margin-left: 25px; }\n\n.title {\n  border-left: 1px solid #adadad;\n  color: black;\n  font-weight: 400;\n  font-size: 15px;\n  text-align: left;\n  line-height: 20px; }\n\n.icon {\n  padding-top: 7px;\n  color: #5a6ff1;\n  width: 20px;\n  height: 20px;\n  margin-right: 5px; }\n\n.info-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  margin: 0;\n  padding: 0;\n  height: auto; }\n\n.book-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 40px;\n  margin-bottom: 10px; }\n\n.go-btn {\n  width: 80px;\n  height: 80px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 40px;\n  margin-bottom: 10px;\n  --border-radius: 50%;\n  --background: #778AFB; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9hcHBvaW50bWVudC1kZXRhaWxzL2FwcG9pbnRtZW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0ZBQXdGO0VBQ3hGLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQVE7RUFDUix1QkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUFhO0VBQ2IsbUNBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsOEJBQXlDO0VBQ3pDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBSWQ7RUFDRSx3RkFBd0Y7RUFDeEYsZ0NBQWdDO0VBQ2hDLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQWdCO0VBQ2hCLHFCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHBvaW50bWVudC1kZXRhaWxzL2FwcG9pbnRtZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uZG9jdG9ycy10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kb2N0b3JzLWNhcmQge1xuICAtLWNvbG9yOiBncmV5O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZG9jdG9yLWltZyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmRvYy1pbmZvIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi50aXRsZSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDE3MywgMTczLCAxNzMpO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5pY29uIHtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgY29sb3I6ICM1YTZmZjE7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uaW5mby1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cblxuLmJvb2stYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5nby1idG4ge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1iYWNrZ3JvdW5kOiAjNzc4QUZCO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/appointment-details/appointment-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/appointment-details/appointment-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: AppointmentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentDetailsPage", function() { return AppointmentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var AppointmentDetailsPage = /** @class */ (function () {
    function AppointmentDetailsPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    AppointmentDetailsPage.prototype.ngOnInit = function () {
    };
    AppointmentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointment-details',
            template: __webpack_require__(/*! ./appointment-details.page.html */ "./src/app/appointment-details/appointment-details.page.html"),
            styles: [__webpack_require__(/*! ./appointment-details.page.scss */ "./src/app/appointment-details/appointment-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], AppointmentDetailsPage);
    return AppointmentDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=appointment-details-appointment-details-module.js.map