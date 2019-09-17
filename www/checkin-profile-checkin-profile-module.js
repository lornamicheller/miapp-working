(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkin-profile-checkin-profile-module"],{

/***/ "./src/app/checkin-profile/checkin-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/checkin-profile/checkin-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: CheckinProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinProfilePageModule", function() { return CheckinProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _checkin_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-profile.page */ "./src/app/checkin-profile/checkin-profile.page.ts");







var routes = [
    {
        path: '',
        component: _checkin_profile_page__WEBPACK_IMPORTED_MODULE_6__["CheckinProfilePage"]
    }
];
var CheckinProfilePageModule = /** @class */ (function () {
    function CheckinProfilePageModule() {
    }
    CheckinProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkin_profile_page__WEBPACK_IMPORTED_MODULE_6__["CheckinProfilePage"]]
        })
    ], CheckinProfilePageModule);
    return CheckinProfilePageModule;
}());



/***/ }),

/***/ "./src/app/checkin-profile/checkin-profile.page.html":
/*!***********************************************************!*\
  !*** ./src/app/checkin-profile/checkin-profile.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Check-in</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/check-in\"></ion-back-button>\n\n\n<ion-content>\n  <ion-card style=\"box-shadow: none;\">\n    <ion-avatar class=\"avatar-size\">\n      <ion-img class=\"image-doc\" src=\"assets/happydoctor.jpg\"></ion-img>\n    </ion-avatar>\n\n    <ion-fab class=\"btn-position\">\n      <ion-fab-button size=\"small\" class=\"btn-color\">\n        <ion-icon ios=\"ios-call\" md=\"md-call\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    <p class=\"doctors-name\">John Smith</p>\n    <p class=\"doctors-specialty\">Cardiologist</p>\n    <p class=\"doc-reviews\">\n      <ion-icon class=\"star\" name=\"star-outline\"></ion-icon>5.0 <span class=\"total-reviews\">(234 reviewer)</span>\n    </p>\n\n    <ion-card style=\"margin-left: 20px; margin-right: 20px; padding-top: 10px; padding-bottom: 10px;\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-person\" md=\"md-person\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" class=\"title\">\n            <p style=\"margin: 0; padding: 0; margin-left: 10px; font-size: 13px;\"><span\n                style=\"color: black; font-weight: 700;\">4 people</span> ahead of you</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"1\" class=\"icon\">\n            <ion-icon ios=\"ios-time\" md=\"md-time\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"10\" class=\"title\">\n            <p style=\"margin: 0; padding: 0; margin-left: 10px; font-size: 13px;\">Estimated wait time:\n              <span style=\"color: black; font-weight: 700;\">1 hour</span>\n              <span style=\"color: black; font-weight: 700;\"> 45 mins</span>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n\n    <ion-button (click)=\"presentAlert()\" class=\"confirm-btn\" expand=\"block\">ARRIVED (In-office)</ion-button>\n\n    <ion-button (click)=\"openPage4()\" class=\"confirm-btn\" expand=\"block\">I'M LATE</ion-button>\n\n    <ion-button (click)=\"presentAlertConfirm()\" class=\"confirm-btn\" expand=\"block\">CANCEL</ion-button>\n\n<ion-card ion-button routerLink=\"/user-home\" class=\"go-btn\">\n    <img  src=\"assets/stetho.png\" width=\"40px\" height=\"40px\" style=\"object-fit: contain; margin-top: 20px;\">\n</ion-card>\n\n    <!-- <img ion-button class=\"go-btn\" (click)=\"openPage3()\" src=\"assets/stetho.png\" width=\"40px\" height=\"40px\" style=\"object-fit: contain;\"> -->\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/checkin-profile/checkin-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/checkin-profile/checkin-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.avatar-size {\n  height: 130px;\n  width: 130px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px; }\n\n.img-doc {\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.btn-position {\n  position: absolute;\n  top: 70px;\n  left: 40px; }\n\n.tel {\n  width: 20px;\n  height: 20px; }\n\n.btn-color {\n  --background: #696969;\n  --background-activated: transparent; }\n\n.doctors-name {\n  text-align: center;\n  font-weight: 700;\n  font-size: 17px;\n  color: #2e2e2e;\n  margin: 0;\n  margin-top: 20px; }\n\n.doctors-specialty {\n  text-align: center;\n  font-weight: 400;\n  font-size: 15px;\n  color: grey;\n  margin: 0;\n  margin-top: 5px; }\n\n.doc-reviews {\n  text-align: center;\n  color: #5a6ff1;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-size: 15px;\n  margin: 0; }\n\n.star {\n  color: #5a6ff1;\n  width: 17px;\n  height: 17px; }\n\n.total-reviews {\n  font-weight: 400;\n  color: grey;\n  letter-spacing: 0; }\n\n.confirm-btn {\n  background-image: linear-gradient(to right, #575af3, #5f69f6, #6878f9, #7285fb, #7e93fc);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 200px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: white; }\n\n.confirm-btn {\n  --border-color: transparent !important;\n  box-shadow: none !important; }\n\n.icon {\n  padding-top: 7px;\n  color: #5a6ff1;\n  width: 20px;\n  height: 20px; }\n\n.user {\n  width: 20px;\n  height: 20px; }\n\n.address {\n  width: 20px;\n  height: 20px; }\n\n.reviews {\n  width: 20px;\n  height: 20px; }\n\n.title {\n  border-left: 1px solid #adadad; }\n\n.circle-color {\n  --background: #6473f3; }\n\n.select-icon-inner {\n  display: none !important; }\n\n.center-text {\n  padding-left: 50px; }\n\n.go-btn {\n  background-image: linear-gradient(to right, #575af3, #5f69f6, #6878f9, #7285fb, #7e93fc);\n  box-shadow: 0 8px 6px -6px black;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9jaGVja2luLXByb2ZpbGUvY2hlY2tpbi1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdGQUF3RjtFQUN4RixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQW1CO0tBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFhO0VBQ2IsbUNBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUdYO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHdGQUF3RjtFQUN4RixnQ0FBZ0M7RUFDaEMseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usc0NBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSw4QkFBeUMsRUFBQTs7QUFHM0M7RUFDRSxxQkFBYSxFQUFBOztBQUdmO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0Usa0JBQWtCLEVBQUE7O0FBb0JwQjtFQUNFLHdGQUF3RjtFQUN4RixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tpbi1wcm9maWxlL2NoZWNraW4tcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzkzMjc4ZiwgIzdjNTViNywgIzU5NzZkMSwgIzMzOTJkZiwgIzI5YWJlMik7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5kb2N0b3JzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hcnJvdy1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogMjBweDtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmFycm93IHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmF2YXRhci1zaXplIHtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgd2lkdGg6IDEzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uaW1nLWRvYyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5idG4tcG9zaXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzBweDtcbiAgbGVmdDogNDBweDtcbn1cblxuLnRlbCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5idG4tY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICM2OTY5Njk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZG9jdG9ycy1uYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRvY3RvcnMtc3BlY2lhbHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmRvYy1yZXZpZXdzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzVhNmZmMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5zdGFyIHtcbiAgY29sb3I6ICM1YTZmZjE7XG4gIHdpZHRoOiAxN3B4O1xuICBoZWlnaHQ6IDE3cHg7XG59XG5cbi50b3RhbC1yZXZpZXdzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IGdyZXk7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uY29uZmlybS1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NzVhZjMsICM1ZjY5ZjYsICM2ODc4ZjksICM3Mjg1ZmIsICM3ZTkzZmMpO1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29uZmlybS1idG4ge1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGNvbG9yOiAjNWE2ZmYxO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4udXNlciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5hZGRyZXNzIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJldmlld3Mge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcbn1cblxuLmNpcmNsZS1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogIzY0NzNmMztcbn1cblxuLnNlbGVjdC1pY29uLWlubmVyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi8vIC5nby1idG4ge1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NzVhZjMsICM1ZjY5ZjYsICM2ODc4ZjksICM3Mjg1ZmIsICM3ZTkzZmMpO1xuLy8gICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbi8vICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4vLyAgIHdpZHRoOiA4MHB4O1xuLy8gICBoZWlnaHQ6IDgwcHg7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgIG1hcmdpbi1yaWdodDogYXV0bztcbi8vICAgbGVmdDogMDtcbi8vICAgcmlnaHQ6IDA7XG4vLyAgIGJvdHRvbTogMTBweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAtLWJveC1zaGFkb3c6IG5vbmU7XG4vLyB9XG5cbi5nby1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1NzVhZjMsICM1ZjY5ZjYsICM2ODc4ZjksICM3Mjg1ZmIsICM3ZTkzZmMpO1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/checkin-profile/checkin-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/checkin-profile/checkin-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: CheckinProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinProfilePage", function() { return CheckinProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");





var CheckinProfilePage = /** @class */ (function () {
    function CheckinProfilePage(navigate, nativePageTransitions, alertController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.alertController = alertController;
    }
    CheckinProfilePage.prototype.ngOnInit = function () {
    };
    CheckinProfilePage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        //   this.navigate.navigateRoot("/appointment");
    };
    CheckinProfilePage.prototype.openPage2 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        //   this.navigate.navigateRoot("/appointment");
    };
    CheckinProfilePage.prototype.openPage3 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/user-home");
    };
    CheckinProfilePage.prototype.openPage4 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/late-screen");
    };
    CheckinProfilePage.prototype.openCalendar = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/appointment");
    };
    CheckinProfilePage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/check-in");
    };
    CheckinProfilePage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Good!', message: 'Jane Doe, thank you for letting us know that you have arrived to your appointment. Your doctor will be notified.', buttons: [{
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
    CheckinProfilePage.prototype.presentCancel = function () {
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
    // async presentAlert2() {
    //   const alert=await this.alertController.create( {
    //       header: 'Cancel', message: 'Are you sure you want to cancel?', buttons: [ {
    //           text: 'OK', handler: () => {
    //               console.log('Confirm Cancel');
    //               this.openPage2();
    //               this.navigate.navigateRoot('/appointment');
    //           }
    //       }
    //       ]
    //   }
    //   );
    //   await alert.present();
    // }
    CheckinProfilePage.prototype.presentAlertConfirm = function () {
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
    CheckinProfilePage.prototype.onChange = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/user-home");
    };
    CheckinProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkin-profile',
            template: __webpack_require__(/*! ./checkin-profile.page.html */ "./src/app/checkin-profile/checkin-profile.page.html"),
            styles: [__webpack_require__(/*! ./checkin-profile.page.scss */ "./src/app/checkin-profile/checkin-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], CheckinProfilePage);
    return CheckinProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=checkin-profile-checkin-profile-module.js.map