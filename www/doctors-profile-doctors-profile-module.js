(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctors-profile-doctors-profile-module"],{

/***/ "./src/app/doctors-profile/doctors-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/doctors-profile/doctors-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: DoctorsProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsProfilePageModule", function() { return DoctorsProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _doctors_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctors-profile.page */ "./src/app/doctors-profile/doctors-profile.page.ts");







var routes = [
    {
        path: '',
        component: _doctors_profile_page__WEBPACK_IMPORTED_MODULE_6__["DoctorsProfilePage"]
    }
];
var DoctorsProfilePageModule = /** @class */ (function () {
    function DoctorsProfilePageModule() {
    }
    DoctorsProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_doctors_profile_page__WEBPACK_IMPORTED_MODULE_6__["DoctorsProfilePage"]]
        })
    ], DoctorsProfilePageModule);
    return DoctorsProfilePageModule;
}());



/***/ }),

/***/ "./src/app/doctors-profile/doctors-profile.page.html":
/*!***********************************************************!*\
  !*** ./src/app/doctors-profile/doctors-profile.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Doctors</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/doctors\"></ion-back-button>\n\n\n<ion-content>\n\n  <ion-avatar class=\"avatar-size\">\n    <ion-img class=\"image-doc\" src=\"assets/happydoctor.jpg\"></ion-img>\n  </ion-avatar>\n\n  <ion-fab class=\"btn-position\">\n    <ion-fab-button size=\"small\" class=\"btn-color\">\n      <ion-icon ios=\"ios-call\" md=\"md-call\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <p class=\"doctors-name\">John Smith</p>\n  <p class=\"doctors-specialty\">Cardiologist</p>\n  <!-- <p class=\"doc-reviews\">\n    <ion-icon class=\"star\" name=\"star-outline\"></ion-icon>5.0 <span class=\"total-reviews\">(234 reviewer)</span>\n  </p> -->\n\n  <ion-button routerLink=\"/appointment\" class=\"book-btn\" expand=\"block\">BOOK APPOINTMENT</ion-button>\n\n  <!-- <ion-card style=\"margin-left: 20px; padding-top: 10px; padding-bottom: 10px; margin-right: 20px; margin-top: 20px;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\" class=\"icon\">\n          <ion-icon ios=\"ios-person\" md=\"md-person\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"title\">\n          Information\n        </ion-col>\n        <ion-col size=\"1\" class=\"icon-2\">\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card> -->\n\n  <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\" class=\"icon\">\n          <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"title\">\n          Address\n        </ion-col>\n        <ion-col size=\"1\" class=\"icon-2\">\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- <ion-card style=\"margin-left: 20px; margin-right: 20px; margin-top: 20px;  margin-bottom: 60px; padding-top: 10px; padding-bottom: 10px;\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"1\" class=\"icon\">\n          <ion-icon ios=\"ios-star-outline\" md=\"md-star\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"10\" class=\"title\">\n          Reviews\n        </ion-col>\n        <ion-col size=\"1\" class=\"icon-2\">\n          <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/doctors-profile/doctors-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/doctors-profile/doctors-profile.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.avatar-size {\n  height: 130px;\n  width: 130px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px; }\n\n.img-doc {\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.btn-position {\n  position: absolute;\n  top: 70px;\n  left: 40px; }\n\n.tel {\n  width: 20px;\n  height: 20px; }\n\n.btn-color {\n  --background: #696969;\n  --background-activated: transparent; }\n\n.doctors-name {\n  text-align: center;\n  font-weight: 700;\n  font-size: 17px;\n  color: #2e2e2e;\n  margin: 0;\n  margin-top: 20px; }\n\n.doctors-specialty {\n  text-align: center;\n  font-weight: 400;\n  font-size: 15px;\n  color: grey;\n  margin: 0;\n  margin-top: 5px; }\n\n.doc-reviews {\n  text-align: center;\n  color: #5a6ff1;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-size: 15px;\n  margin: 0; }\n\n.star {\n  color: #5a6ff1;\n  width: 17px;\n  height: 17px; }\n\n.total-reviews {\n  font-weight: 400;\n  color: grey;\n  letter-spacing: 0; }\n\n.book-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n\n.icon {\n  padding-top: 7px;\n  color: #5a6ff1;\n  width: 20px;\n  height: 20px; }\n\n.user {\n  width: 20px;\n  height: 20px; }\n\n.address {\n  width: 20px;\n  height: 20px; }\n\n.reviews {\n  width: 20px;\n  height: 20px; }\n\n.title {\n  border-left: 1px solid #adadad;\n  color: black;\n  font-weight: 600; }\n\n.circle-color {\n  --background: #6473f3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9kb2N0b3JzLXByb2ZpbGUvZG9jdG9ycy1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdGQUF3RjtFQUN4RixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usc0JBQW1CO0tBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVSxFQUFBOztBQUdaO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFhO0VBQ2IsbUNBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUyxFQUFBOztBQUdYO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHdGQUF3RjtFQUN4RixnQ0FBZ0M7RUFDaEMseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSw4QkFBeUM7RUFDekMsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdsQjtFQUNBLHFCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kb2N0b3JzLXByb2ZpbGUvZG9jdG9ycy1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmRvY3RvcnMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAyMHB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uYXJyb3cge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uYXZhdGFyLXNpemUge1xuICBoZWlnaHQ6IDEzMHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5pbWctZG9jIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmJ0bi1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MHB4O1xuICBsZWZ0OiA0MHB4O1xufVxuXG4udGVsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJ0bi1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogIzY5Njk2OTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kb2N0b3JzLW5hbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZG9jdG9ycy1zcGVjaWFsdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZG9jLXJldmlld3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWE2ZmYxO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN0YXIge1xuICBjb2xvcjogIzVhNmZmMTtcbiAgd2lkdGg6IDE3cHg7XG4gIGhlaWdodDogMTdweDtcbn1cblxuLnRvdGFsLXJldmlld3Mge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogZ3JleTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5ib29rLWJ0biB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzkzMjc4ZiwgIzdjNTViNywgIzU5NzZkMSwgIzMzOTJkZiwgIzI5YWJlMik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbiB7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGNvbG9yOiAjNWE2ZmYxO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4udXNlciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5hZGRyZXNzIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJldmlld3Mge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4udGl0bGUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYigxNzMsIDE3MywgMTczKTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2lyY2xlLWNvbG9yIHtcbi0tYmFja2dyb3VuZDogIzY0NzNmMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/doctors-profile/doctors-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/doctors-profile/doctors-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: DoctorsProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsProfilePage", function() { return DoctorsProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var DoctorsProfilePage = /** @class */ (function () {
    function DoctorsProfilePage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    DoctorsProfilePage.prototype.ngOnInit = function () {
    };
    DoctorsProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doctors-profile',
            template: __webpack_require__(/*! ./doctors-profile.page.html */ "./src/app/doctors-profile/doctors-profile.page.html"),
            styles: [__webpack_require__(/*! ./doctors-profile.page.scss */ "./src/app/doctors-profile/doctors-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], DoctorsProfilePage);
    return DoctorsProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=doctors-profile-doctors-profile-module.js.map