(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["doctors-doctors-module"],{

/***/ "./src/app/doctors/doctors.module.ts":
/*!*******************************************!*\
  !*** ./src/app/doctors/doctors.module.ts ***!
  \*******************************************/
/*! exports provided: DoctorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsPageModule", function() { return DoctorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _doctors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctors.page */ "./src/app/doctors/doctors.page.ts");







var routes = [
    {
        path: '',
        component: _doctors_page__WEBPACK_IMPORTED_MODULE_6__["DoctorsPage"]
    }
];
var DoctorsPageModule = /** @class */ (function () {
    function DoctorsPageModule() {
    }
    DoctorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_doctors_page__WEBPACK_IMPORTED_MODULE_6__["DoctorsPage"]]
        })
    ], DoctorsPageModule);
    return DoctorsPageModule;
}());



/***/ }),

/***/ "./src/app/doctors/doctors.page.html":
/*!*******************************************!*\
  !*** ./src/app/doctors/doctors.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Doctors</p>\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/specialty\"></ion-back-button>\n\n\n<ion-content>\n  <p class=\"doctors\">Found <span class=\"amount\">150</span> doctors near <span class=\"city\">San Juan</span></p>\n\n  <!-- doctors profile start here -->\n\n  <ion-card>\n    <ion-button routerLink=\"/doctors-profile\" class=\"doctors-card\" expand=\"full\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"avatar-img\" size=\"3\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/happydoctor.jpg\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"doc-info\" size=\"6\">\n            <p>John Smith</p>\n            <p>Cardiologist</p>\n            <p>\n              <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>0.8 km away\n            </p>\n          </ion-col>\n          <ion-col class=\"rating\" size=\"3\">\n            <p class=\"rating-number\">\n              <ion-icon class=\"star\" name=\"star-outline\"></ion-icon>5.0\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button routerLink=\"/doctors-profile\" expand=\"full\" class=\"doctors-card\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"avatar-img\" size=\"3\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/doc1.png\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"doc-info\" size=\"6\">\n            <p>Hunter Thomas</p>\n            <p>Cardiologist</p>\n            <p>\n              <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>0.8 km away\n            </p>\n          </ion-col>\n          <ion-col class=\"rating\" size=\"3\">\n            <p class=\"rating-number\">\n              <ion-icon class=\"star\" name=\"star-outline\"></ion-icon>5.0\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button routerLink=\"/doctors-profile\" expand=\"full\" class=\"doctors-card\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"avatar-img\" size=\"3\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/doc2.png\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"doc-info\" size=\"6\">\n            <p>John Basinger</p>\n            <p>Cardiologist</p>\n            <p>\n              <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>0.8 km away\n            </p>\n          </ion-col>\n          <ion-col class=\"rating\" size=\"3\">\n            <p class=\"rating-number\">\n              <ion-icon class=\"star\" name=\"star-outline\"></ion-icon>5.0\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button routerLink=\"/doctors-profile\" expand=\"full\" class=\"doctors-card\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"avatar-img\" size=\"3\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/doc3.png\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"doc-info\" size=\"6\">\n            <p>Michael Johnson</p>\n            <p>Cardiologist</p>\n            <p>\n              <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>0.8 km away\n            </p>\n          </ion-col>\n          <ion-col class=\"rating\" size=\"3\">\n            <p class=\"rating-number\">\n              <ion-icon class=\"star\" name=\"star-outline\"></ion-icon>5.0\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <ion-card>\n    <ion-button routerLink=\"/doctors-profile\" expand=\"full\" class=\"doctors-card\">\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"avatar-img\" size=\"3\">\n            <ion-avatar class=\"doctor-img\">\n              <ion-img src=\"assets/doc4.png\"></ion-img>\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"doc-info\" size=\"6\">\n            <p>Gio Cutshall</p>\n            <p>Cardiologist</p>\n            <p>\n              <ion-icon ios=\"ios-pin\" md=\"md-pin\"></ion-icon>0.8 km away\n            </p>\n          </ion-col>\n          <ion-col class=\"rating\" size=\"3\">\n            <p class=\"rating-number\">\n              <ion-icon class=\"star\" name=\"star-outline\"></ion-icon>5.0\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n\n  <!-- doctors profile ends here -->\n\n\n</ion-content>\n\n<!-- <ion-button (click)=\"openPage()\" class=\"next-btn\" expand=\"block\">NEXT</ion-button> -->"

/***/ }),

/***/ "./src/app/doctors/doctors.page.scss":
/*!*******************************************!*\
  !*** ./src/app/doctors/doctors.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  letter-spacing: 1px;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.doctors {\n  font-weight: 300;\n  font-size: 15px;\n  letter-spacing: 1px;\n  text-align: center;\n  margin-top: 20px;\n  color: #727272; }\n\n.amount {\n  font-weight: 700;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: #464646; }\n\n.city {\n  font-weight: 700;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: #464646; }\n\n.doctors-card {\n  --color: grey;\n  --color-activated: grey;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  height: auto;\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(255, 255, 255);\n  --box-shadow: none; }\n\n.doctor-img {\n  margin-top: 20px;\n  width: 70px;\n  height: 70px; }\n\n.star {\n  color: #5a6ff1;\n  width: 17px;\n  height: 17px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9kb2N0b3JzL2RvY3RvcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0ZBQXdGO0VBQ3hGLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBRWI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQVE7RUFDUix1QkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdDQUFhO0VBQ2IsMENBQXVCO0VBQ3ZCLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZG9jdG9ycy9kb2N0b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmRvY3RvcnMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAyMHB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uYXJyb3cge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmRvY3RvcnMge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHJnYigxMTQsIDExNCwgMTE0KTtcbn1cblxuLmFtb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHJnYig3MCwgNzAsIDcwKTtcbn1cblxuLmNpdHkge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XG59XG5cbi5kb2N0b3JzLWNhcmQge1xuICAtLWNvbG9yOiBncmV5O1xuICAtLWNvbG9yLWFjdGl2YXRlZDogZ3JleTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IGF1dG87XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmRvY3Rvci1pbWcge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uc3RhciB7XG4gIGNvbG9yOiAjNWE2ZmYxO1xuICB3aWR0aDogMTdweDtcbiAgaGVpZ2h0OiAxN3B4O1xuICBcbn1cblxuLy8gLm5leHQtYnRuIHtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbi8vICAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4vLyAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuLy8gICB3aWR0aDogMzIwcHg7XG4vLyAgIGhlaWdodDogNDVweDtcbi8vICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4vLyAgIG1hcmdpbi1yaWdodDogYXV0bztcbi8vICAgYm9yZGVyLXJhZGl1czogMjBweDtcbi8vICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbi8vICAgZm9udC1zaXplOiAxM3B4O1xuLy8gICAtLWJveC1zaGFkb3c6IG5vbmU7XG4vLyAgIG1hcmdpbi10b3A6IDkwcHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4vLyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/doctors/doctors.page.ts":
/*!*****************************************!*\
  !*** ./src/app/doctors/doctors.page.ts ***!
  \*****************************************/
/*! exports provided: DoctorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsPage", function() { return DoctorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var DoctorsPage = /** @class */ (function () {
    function DoctorsPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    DoctorsPage.prototype.ngOnInit = function () {
    };
    DoctorsPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/doctors-profile");
    };
    DoctorsPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/specialty");
    };
    DoctorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-doctors',
            template: __webpack_require__(/*! ./doctors.page.html */ "./src/app/doctors/doctors.page.html"),
            styles: [__webpack_require__(/*! ./doctors.page.scss */ "./src/app/doctors/doctors.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], DoctorsPage);
    return DoctorsPage;
}());



/***/ })

}]);
//# sourceMappingURL=doctors-doctors-module.js.map