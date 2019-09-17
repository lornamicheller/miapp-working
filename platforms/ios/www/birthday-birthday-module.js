(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["birthday-birthday-module"],{

/***/ "./src/app/birthday/birthday.module.ts":
/*!*********************************************!*\
  !*** ./src/app/birthday/birthday.module.ts ***!
  \*********************************************/
/*! exports provided: BirthdayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayPageModule", function() { return BirthdayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _birthday_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./birthday.page */ "./src/app/birthday/birthday.page.ts");







var routes = [
    {
        path: '',
        component: _birthday_page__WEBPACK_IMPORTED_MODULE_6__["BirthdayPage"]
    }
];
var BirthdayPageModule = /** @class */ (function () {
    function BirthdayPageModule() {
    }
    BirthdayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_birthday_page__WEBPACK_IMPORTED_MODULE_6__["BirthdayPage"]]
        })
    ], BirthdayPageModule);
    return BirthdayPageModule;
}());



/***/ }),

/***/ "./src/app/birthday/birthday.page.html":
/*!*********************************************!*\
  !*** ./src/app/birthday/birthday.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"top\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n        <!-- <ion-button class=\"arrow-btn\">\n          <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n        </ion-button> -->\n\n        <ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/gender\"></ion-back-button>\n\n      </ion-col>\n      <ion-col size=\"8\">\n        <p class=\"create-title\">Create Account</p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button (click)=\"openPage()\" expand=\"block\" class=\"skip-title\">Skip</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"box-shadow: none; margin-top: 30px;\">\n    <ion-item class=\"lines\">\n      <ion-label class=\"date-format\">BIRTHDAY</ion-label>\n      <ion-datetime  [(ngModel)]=\"bday\" class=\"date-number\" display-format=\"MMM DD, YYYY\"></ion-datetime>\n      <ion-button class=\"btn\">\n        <ion-icon class=\"arrow-color\" ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-item>\n    <ion-button (click)=\"openPage()\" class=\"next-btn\" expand=\"block\">NEXT</ion-button>\n    {{bday}}\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/birthday/birthday.page.scss":
/*!*********************************************!*\
  !*** ./src/app/birthday/birthday.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  padding-top: 30px;\n  border-bottom: 1px solid #cacaca; }\n\n.arrow-btn {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: #363636;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.create-title {\n  text-align: center;\n  font-weight: 800;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: #363636; }\n\n.skip-title {\n  text-align: right;\n  font-weight: 800;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: blue;\n  --padding-end: 10px;\n  --background: transparent;\n  --background-activated: transparent; }\n\n.no-border {\n  border: none !important; }\n\n.next-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 50px;\n  margin-bottom: 10px; }\n\n.date-format {\n  --color: grey;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.btn {\n  --background: transparent;\n  --background-activated: transparent; }\n\n.arrow-color {\n  color: grey; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9iaXJ0aGRheS9iaXJ0aGRheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQTJDLEVBQUE7O0FBRzdDO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsY0FBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFjO0VBQ2QseUJBQWE7RUFDYixtQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSx1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx3RkFBd0Y7RUFDeEYsZ0NBQWdDO0VBQ2hDLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iaXJ0aGRheS9iaXJ0aGRheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjAyLCAyMDIsIDIwMik7XG59XG5cbi5hcnJvdy1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgbGVmdDogMjBweDtcbiAgY29sb3I6IHJnYig1NCwgNTQsIDU0KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmFycm93IHtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuLmNyZWF0ZS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xufVxuXG4uc2tpcC10aXRsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiBibHVlO1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbn1cblxuLm5vLWJvcmRlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmV4dC1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmRhdGUtZm9ybWF0IHtcbiAgLS1jb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4uYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5hcnJvdy1jb2xvciB7XG4gIGNvbG9yOiBncmV5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/birthday/birthday.page.ts":
/*!*******************************************!*\
  !*** ./src/app/birthday/birthday.page.ts ***!
  \*******************************************/
/*! exports provided: BirthdayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirthdayPage", function() { return BirthdayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");





var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var BirthdayPage = /** @class */ (function () {
    function BirthdayPage(navigate, nativePageTransitions, provider) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
    }
    BirthdayPage.prototype.ngOnInit = function () {
        console.log(this.provider.gender);
    };
    BirthdayPage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/insurance");
    };
    BirthdayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-birthday',
            template: __webpack_require__(/*! ./birthday.page.html */ "./src/app/birthday/birthday.page.html"),
            styles: [__webpack_require__(/*! ./birthday.page.scss */ "./src/app/birthday/birthday.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"], _provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]])
    ], BirthdayPage);
    return BirthdayPage;
}());



/***/ })

}]);
//# sourceMappingURL=birthday-birthday-module.js.map