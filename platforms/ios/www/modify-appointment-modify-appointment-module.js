(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modify-appointment-modify-appointment-module"],{

/***/ "./src/app/modify-appointment/modify-appointment.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modify-appointment/modify-appointment.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModifyAppointmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyAppointmentPageModule", function() { return ModifyAppointmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modify_appointment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modify-appointment.page */ "./src/app/modify-appointment/modify-appointment.page.ts");







var routes = [
    {
        path: '',
        component: _modify_appointment_page__WEBPACK_IMPORTED_MODULE_6__["ModifyAppointmentPage"]
    }
];
var ModifyAppointmentPageModule = /** @class */ (function () {
    function ModifyAppointmentPageModule() {
    }
    ModifyAppointmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_modify_appointment_page__WEBPACK_IMPORTED_MODULE_6__["ModifyAppointmentPage"]]
        })
    ], ModifyAppointmentPageModule);
    return ModifyAppointmentPageModule;
}());



/***/ }),

/***/ "./src/app/modify-appointment/modify-appointment.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/modify-appointment/modify-appointment.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n    <p class=\"doctors-title\">Appointments</p>\n  </div>\n  \n  <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n    <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n  </ion-button>\n  \n  <ion-content>\n    <ion-avatar class=\"avatar-size\">\n      <ion-img class=\"image-doc\" src=\"assets/happydoctor.jpg\"></ion-img>\n    </ion-avatar>\n  \n    <ion-fab class=\"btn-position\">\n      <ion-fab-button size=\"small\" class=\"btn-color\">\n        <ion-icon ios=\"ios-call\" md=\"md-call\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  \n    <p class=\"doctors-name\">John Smith</p>\n  \n    <ion-button expand=\"full\" class=\"input\" readonly [(ngModel)]=\"mydate\" (click)=\"openDatePicker()\">CHOOSE DATE</ion-button>\n  \n    \n    <!-- <ion-item class=\"time-container\">\n      <ion-label>CHOOSE TIME</ion-label>\n      <ion-datetime displayFormat=\"hh:mm A\" [(ngModel)]=\"myDate\"></ion-datetime>\n    </ion-item> -->\n  \n    <ion-item style=\"width: 317px; margin-left: auto; margin-right: auto;\">\n      <ion-label class=\"time-container\">CHOOSE TIME</ion-label>\n      <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\">\n        <ion-select-option>10:00AM - 10:30AM</ion-select-option>\n        <ion-select-option>10:30AM - 11:00AM</ion-select-option>\n        <ion-select-option>11:00AM - 11:30AM</ion-select-option>\n        <ion-select-option>11:30AM - 12:00PM</ion-select-option>\n        <ion-select-option>12:00PM - 12:30PM</ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-button class=\"book-btn\" (click)=\"presentAlert()\" expand=\"block\">BOOK NOW</ion-button>\n  </ion-content>"

/***/ }),

/***/ "./src/app/modify-appointment/modify-appointment.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modify-appointment/modify-appointment.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 0;\n  z-index: 20;\n  width: 50px;\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.avatar-size {\n  height: 130px;\n  width: 130px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px; }\n\n.img-doc {\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.btn-position {\n  position: absolute;\n  top: 70px;\n  left: 40px; }\n\n.tel {\n  width: 20px;\n  height: 20px; }\n\n.btn-color {\n  --background: #696969;\n  --background-activated: transparent; }\n\n.doctors-name {\n  text-align: center;\n  font-weight: 700;\n  font-size: 17px;\n  color: #2e2e2e;\n  margin: 0;\n  margin-top: 20px; }\n\n.book-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.input {\n  border-bottom: 1px solid #a3a3a3;\n  --color: rgb(131, 131, 131);\n  font-weight: 700;\n  font-size: 13px;\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 30px;\n  --padding-start: 10px;\n  --background: white;\n  --background-activated: white;\n  text-align: left;\n  --padding-end: 200px; }\n\n.time-container {\n  --color: rgb(131, 131, 131);\n  font-weight: 700;\n  font-size: 13px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  --padding-start: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9tb2RpZnktYXBwb2ludG1lbnQvbW9kaWZ5LWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdGQUF3RjtFQUN4RixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBbUI7S0FBbkIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UscUJBQWE7RUFDYixtQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usd0ZBQXdGO0VBQ3hGLGdDQUFnQztFQUNoQyx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdDQUEyQztFQUMzQywyQkFBUTtFQUNSLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFnQjtFQUNoQixtQkFBYTtFQUNiLDZCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsb0JBQWMsRUFBQTs7QUFHaEI7RUFHRSwyQkFBUTtFQUNSLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2RpZnktYXBwb2ludG1lbnQvbW9kaWZ5LWFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmRvY3RvcnMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDUwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5hdmF0YXItc2l6ZSB7XG4gIGhlaWdodDogMTMwcHg7XG4gIHdpZHRoOiAxMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmltZy1kb2Mge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uYnRuLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwcHg7XG4gIGxlZnQ6IDQwcHg7XG59XG5cbi50ZWwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYnRuLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjk2OTY5O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbn1cblxuLmRvY3RvcnMtbmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogcmdiKDQ2LCA0NiwgNDYpO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5ib29rLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzkzMjc4ZiwgIzdjNTViNywgIzU5NzZkMSwgIzMzOTJkZiwgIzI5YWJlMik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW5wdXQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE2MywgMTYzLCAxNjMpO1xuICAtLWNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtLXBhZGRpbmctZW5kOiAyMDBweDtcbn1cblxuLnRpbWUtY29udGFpbmVyIHtcbiAgLy8gd2lkdGg6IDIwMHB4O1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEzMywgMTMzLCAxMzMpO1xuICAtLWNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modify-appointment/modify-appointment.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modify-appointment/modify-appointment.page.ts ***!
  \***************************************************************/
/*! exports provided: ModifyAppointmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyAppointmentPage", function() { return ModifyAppointmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");







var ModifyAppointmentPage = /** @class */ (function () {
    function ModifyAppointmentPage(navigate, nativePageTransitions, modalCtrl, alertController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
    }
    ModifyAppointmentPage.prototype.ngOnInit = function () {
    };
    ModifyAppointmentPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        //   this.navigate.navigateRoot("/user-home");
    };
    ModifyAppointmentPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/edit-appointment");
    };
    ModifyAppointmentPage.prototype.openDatePicker = function () {
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
    ModifyAppointmentPage.prototype.presentAlert = function () {
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
    ModifyAppointmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modify-appointment',
            template: __webpack_require__(/*! ./modify-appointment.page.html */ "./src/app/modify-appointment/modify-appointment.page.html"),
            styles: [__webpack_require__(/*! ./modify-appointment.page.scss */ "./src/app/modify-appointment/modify-appointment.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ModifyAppointmentPage);
    return ModifyAppointmentPage;
}());



/***/ })

}]);
//# sourceMappingURL=modify-appointment-modify-appointment-module.js.map