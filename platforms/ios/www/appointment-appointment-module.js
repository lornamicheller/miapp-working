(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appointment-appointment-module"],{

/***/ "./src/app/appointment/appointment.module.ts":
/*!***************************************************!*\
  !*** ./src/app/appointment/appointment.module.ts ***!
  \***************************************************/
/*! exports provided: AppointmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPageModule", function() { return AppointmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointment.page */ "./src/app/appointment/appointment.page.ts");







var routes = [
    {
        path: '',
        component: _appointment_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentPage"]
    }
];
var AppointmentPageModule = /** @class */ (function () {
    function AppointmentPageModule() {
    }
    AppointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_appointment_page__WEBPACK_IMPORTED_MODULE_6__["AppointmentPage"]]
        })
    ], AppointmentPageModule);
    return AppointmentPageModule;
}());



/***/ }),

/***/ "./src/app/appointment/appointment.page.html":
/*!***************************************************!*\
  !*** ./src/app/appointment/appointment.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Appointments</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/doctors-profile\"></ion-back-button>\n\n<!-- <ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/doctors-profile\"></ion-back-button> -->\n\n\n<ion-content>\n  <ion-avatar class=\"avatar-size\">\n    <ion-img class=\"image-doc\" src=\"assets/happydoctor.jpg\"></ion-img>\n  </ion-avatar>\n\n  <ion-fab class=\"btn-position\">\n    <ion-fab-button size=\"small\" class=\"btn-color\">\n      <ion-icon ios=\"ios-call\" md=\"md-call\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <p class=\"doctors-name\">John Smith</p>\n\n  <ion-button expand=\"full\" class=\"input\" readonly [(ngModel)]=\"mydate\" (click)=\"openDatePicker()\">CHOOSE DATE</ion-button>\n\n  \n  <!-- <ion-item class=\"time-container\">\n    <ion-label>CHOOSE TIME</ion-label>\n    <ion-datetime displayFormat=\"hh:mm A\" [(ngModel)]=\"myDate\"></ion-datetime>\n  </ion-item> -->\n\n  <ion-item style=\"width: 317px; margin-left: auto; margin-right: auto;\">\n    <ion-label class=\"time-container\">CHOOSE TIME</ion-label>\n    <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\">\n      <ion-select-option>10:00AM</ion-select-option>\n      <ion-select-option>10:30AM</ion-select-option>\n      <ion-select-option>11:00AM</ion-select-option>\n      <ion-select-option>11:30AM</ion-select-option>\n      <ion-select-option>12:00PM</ion-select-option>\n      <ion-select-option>12:30PM</ion-select-option>\n      <ion-select-option>1:00PM</ion-select-option>\n      <ion-select-option>1:30PM</ion-select-option>\n      <ion-select-option>2:00PM</ion-select-option>\n      <ion-select-option>2:30PM</ion-select-option>\n      <ion-select-option>3:00PM</ion-select-option>\n      <ion-select-option>3:30PM</ion-select-option>\n      <ion-select-option>4:00PM</ion-select-option>\n      <ion-select-option>4:30PM</ion-select-option>\n      <ion-select-option>5:00PM</ion-select-option>\n      <ion-select-option>5:30PM</ion-select-option>\n      <ion-select-option>6:00PM</ion-select-option>\n      <ion-select-option>6:30PM</ion-select-option>\n      <ion-select-option>7:00PM</ion-select-option>\n      <ion-select-option>7:30PM</ion-select-option>\n      <ion-select-option>8:00PM</ion-select-option>\n      <ion-select-option>8:30PM</ion-select-option>\n      <ion-select-option>9:00PM</ion-select-option>\n      <ion-select-option>9:30PM</ion-select-option>\n      <ion-select-option>10:00PM</ion-select-option>\n      <ion-select-option>10:30PM</ion-select-option>\n      <ion-select-option>11:00PM</ion-select-option>\n      <ion-select-option>11:30PM</ion-select-option>\n      <ion-select-option>12:00AM</ion-select-option>\n      <ion-select-option>12:30AM</ion-select-option>\n      <ion-select-option>1:00AM</ion-select-option>\n      <ion-select-option>1:30AM</ion-select-option>\n      <ion-select-option>2:00AM</ion-select-option>\n      <ion-select-option>2:30AM</ion-select-option>\n      <ion-select-option>3:00AM</ion-select-option>\n      <ion-select-option>3:30AM</ion-select-option>\n      <ion-select-option>4:00AM</ion-select-option>\n      <ion-select-option>4:30AM</ion-select-option>\n      <ion-select-option>5:00AM</ion-select-option>\n      <ion-select-option>5:30AM</ion-select-option>\n      <ion-select-option>6:00AM</ion-select-option>\n      <ion-select-option>6:30AM</ion-select-option>\n      <ion-select-option>7:00AM</ion-select-option>\n      <ion-select-option>7:30AM</ion-select-option>\n      <ion-select-option>8:00AM</ion-select-option>\n      <ion-select-option>8:30AM</ion-select-option>\n      <ion-select-option>9:00AM</ion-select-option>\n      <ion-select-option>9:30AM</ion-select-option>\n\n    </ion-select>\n  </ion-item>\n\n  <ion-button class=\"book-btn\" (click)=\"presentAlert()\" expand=\"block\">BOOK NOW</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/appointment/appointment.page.scss":
/*!***************************************************!*\
  !*** ./src/app/appointment/appointment.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.avatar-size {\n  height: 130px;\n  width: 130px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px; }\n\n.img-doc {\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.btn-position {\n  position: absolute;\n  top: 70px;\n  left: 40px; }\n\n.tel {\n  width: 20px;\n  height: 20px; }\n\n.btn-color {\n  --background: #696969;\n  --background-activated: transparent; }\n\n.doctors-name {\n  text-align: center;\n  font-weight: 700;\n  font-size: 17px;\n  color: #2e2e2e;\n  margin: 0;\n  margin-top: 20px; }\n\n.book-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.input {\n  border-bottom: 1px solid #a3a3a3;\n  --color: rgb(131, 131, 131);\n  font-weight: 700;\n  font-size: 13px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  --padding-start: 10px;\n  --background: white;\n  --background-activated: white;\n  text-align: left;\n  --padding-end: 200px; }\n\n.time-container {\n  --color: rgb(131, 131, 131);\n  font-weight: 700;\n  font-size: 13px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  --padding-start: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9hcHBvaW50bWVudC9hcHBvaW50bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RkFBd0Y7RUFDeEYsYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxZQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHNCQUFtQjtLQUFuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxxQkFBYTtFQUNiLG1DQUF1QixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQXNCO0VBQ3RCLFNBQVM7RUFDVCxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx3RkFBd0Y7RUFDeEYsZ0NBQWdDO0VBQ2hDLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0NBQTJDO0VBQzNDLDJCQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQWdCO0VBQ2hCLG1CQUFhO0VBQ2IsNkJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixvQkFBYyxFQUFBOztBQUdoQjtFQUdFLDJCQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50L2FwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmRvY3RvcnMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAyMHB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uYXJyb3cge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uYXZhdGFyLXNpemUge1xuICBoZWlnaHQ6IDEzMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5pbWctZG9jIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmJ0bi1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MHB4O1xuICBsZWZ0OiA0MHB4O1xufVxuXG4udGVsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ0bi1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogIzY5Njk2OTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kb2N0b3JzLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uYm9vay1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNjMsIDE2MywgMTYzKTtcbiAgLS1jb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLS1wYWRkaW5nLWVuZDogMjAwcHg7XG59XG5cbi50aW1lLWNvbnRhaW5lciB7XG4gIC8vIHdpZHRoOiAyMDBweDtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxMzMsIDEzMywgMTMzKTtcbiAgLS1jb2xvcjogcmdiKDEzMSwgMTMxLCAxMzEpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/appointment/appointment.page.ts":
/*!*************************************************!*\
  !*** ./src/app/appointment/appointment.page.ts ***!
  \*************************************************/
/*! exports provided: AppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentPage", function() { return AppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");







var AppointmentPage = /** @class */ (function () {
    function AppointmentPage(navigate, nativePageTransitions, modalCtrl, alertController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
    }
    AppointmentPage.prototype.ngOnInit = function () { };
    AppointmentPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        //   this.navigate.navigateRoot("/user-home");
    };
    AppointmentPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/doctors-profile");
    };
    AppointmentPage.prototype.openDatePicker = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var datePickerModal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"],
                        })];
                    case 1:
                        datePickerModal = _a.sent();
                        return [4 /*yield*/, datePickerModal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //   formatAMPM(date) {
    // 	  var hours = date[0];
    // 	  var minutes = date[1];
    // 	  var ampm = hours >= 12 ? 'pm' : 'am';
    // 	  hours = hours % 12;
    // 	  hours = hours ? hours : 12;
    // 	  minutes = minutes < 10 ? '0'+minutes : minutes;
    // 	  var strTime = hours + ':' + minutes + ' ' + ampm;
    // 	  return strTime;
    // }
    AppointmentPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Good!', message: 'Thanks, Jane Doe! Your appointment has been booked for May 14 at 11:00AM.', buttons: [{
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
    AppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-appointment',
            template: __webpack_require__(/*! ./appointment.page.html */ "./src/app/appointment/appointment.page.html"),
            styles: [__webpack_require__(/*! ./appointment.page.scss */ "./src/app/appointment/appointment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], AppointmentPage);
    return AppointmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=appointment-appointment-module.js.map