(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insurance-insurance-module"],{

/***/ "./src/app/insurance/insurance.module.ts":
/*!***********************************************!*\
  !*** ./src/app/insurance/insurance.module.ts ***!
  \***********************************************/
/*! exports provided: InsurancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurancePageModule", function() { return InsurancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insurance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurance.page */ "./src/app/insurance/insurance.page.ts");







var routes = [
    {
        path: '',
        component: _insurance_page__WEBPACK_IMPORTED_MODULE_6__["InsurancePage"]
    }
];
var InsurancePageModule = /** @class */ (function () {
    function InsurancePageModule() {
    }
    InsurancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_insurance_page__WEBPACK_IMPORTED_MODULE_6__["InsurancePage"]]
        })
    ], InsurancePageModule);
    return InsurancePageModule;
}());



/***/ }),

/***/ "./src/app/insurance/insurance.page.html":
/*!***********************************************!*\
  !*** ./src/app/insurance/insurance.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"top\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n        <!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n          <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n        </ion-button> -->\n\n        <ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/birthday\"></ion-back-button>\n\n      </ion-col>\n      <ion-col size=\"8\">\n        <p class=\"create-title\">Create Account</p>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-button (click)=\"openPage2()\" expand=\"block\" class=\"skip-title\">Skip</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content>\n  <ion-card style=\"box-shadow: none; margin-top: 30px;\">\n    <ion-item>\n      <ion-label class=\"specialty-title\">HEALTH INSURANCE</ion-label>\n      <ion-select [(ngModel)]=\"insurance\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\">\n          <ion-select-option value=\"MCS Classicare\">MCS Classicare</ion-select-option>\n        <ion-select-option value=\"Triple S Advantage\">Triple S Advantage</ion-select-option>\n        <ion-select-option value=\"MMM\">MMM</ion-select-option>\n        <ion-select-option value=\"PMC\">PMC</ion-select-option>\n        <ion-select-option value=\"Humana Gold\">Humana Gold</ion-select-option>\n        <ion-select-option value=\"First Choice\">First Choice</ion-select-option>\n        <ion-select-option value=\"Molina\">Molina</ion-select-option>\n        <ion-select-option value=\"Constellation\">Constellation</ion-select-option>\n        <ion-select-option value=\"Humana Medicare Advantage\">Humana Medicare Advantage</ion-select-option>\n        <ion-select-option value=\"Humana\">Humana</ion-select-option>\n        <ion-select-option value=\"First Medical\">First Medical</ion-select-option>\n        <ion-select-option value=\"MAPFRE\">MAPFRE</ion-select-option>\n        <ion-select-option value=\"MCS\">MCS</ion-select-option>\n        <ion-select-option value=\"Triple Salud (SSS)\">Triple Salud (SSS)</ion-select-option>\n        <ion-select-option value=\"PALIG\">PALIG</ion-select-option>\n        <ion-select-option value=\"Plan de Salud Menonita (PSM)\">Plan de Salud Menonita (PSM)</ion-select-option>\n        <ion-select-option value=\"Plan de Auxilio Mutuo\">Plan de Auxilio Mutuo</ion-select-option>\n        <ion-select-option  value=\"SSS Vital\">SSS Vital</ion-select-option>\n        <ion-select-option value=\"MM Multi-Health Vital\">MM Multi-Health Vital</ion-select-option>\n        <ion-select-option value=\"Menonita Vital\">Menonita Vital</ion-select-option>\n        <ion-select-option value=\"First Medical Vital\">First Medical Vital</ion-select-option>\n        <ion-select-option value=\"Menonita Vital\">Menonita Vital</ion-select-option>\n        <ion-select-option value=\"Don't have medical insurance\">Don't have medical insurance</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-input class=\"other-type\" placeholder=\"OTHER\"></ion-input>\n    </ion-item>\n\n    <ion-button (click)=\"openPage()\" class=\"next-btn\" expand=\"block\">NEXT</ion-button>\n\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/insurance/insurance.page.scss":
/*!***********************************************!*\
  !*** ./src/app/insurance/insurance.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  padding-top: 30px;\n  border-bottom: 1px solid #cacaca; }\n\n.arrow-btn {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  color: #363636;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.create-title {\n  text-align: center;\n  font-weight: 800;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: #363636; }\n\n.skip-title {\n  text-align: right;\n  font-weight: 800;\n  font-size: 15px;\n  letter-spacing: 1px;\n  color: blue;\n  --padding-end: 10px;\n  --background: transparent;\n  --background-activated: transparent; }\n\n.no-border {\n  border: none !important; }\n\n.next-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 50px;\n  margin-bottom: 10px; }\n\n.health-title {\n  color: grey;\n  font-weight: 800;\n  font-size: 13px; }\n\n.specialty-title {\n  --color: grey;\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.other-type {\n  --color: rgb(34, 34, 34);\n  font-size: 13px;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9pbnN1cmFuY2UvaW5zdXJhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBMkMsRUFBQTs7QUFHN0M7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFzQixFQUFBOztBQUd4QjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQWM7RUFDZCx5QkFBYTtFQUNiLG1DQUF1QixFQUFBOztBQUd6QjtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLHdGQUF3RjtFQUN4RixnQ0FBZ0M7RUFDaEMseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFPakI7RUFDRSxhQUFRO0VBQ1IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3QkFBUTtFQUNSLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbnN1cmFuY2UvaW5zdXJhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3Age1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMDIsIDIwMiwgMjAyKTtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uYXJyb3cge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmNyZWF0ZS10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogcmdiKDU0LCA1NCwgNTQpO1xufVxuXG4uc2tpcC10aXRsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiBibHVlO1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbn1cblxuLm5vLWJvcmRlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubmV4dC1idG4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmhlYWx0aC10aXRsZSB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi8vIC5wcml2YXRlLWluc3VyYW5jZSB7XG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi5zcGVjaWFsdHktdGl0bGUge1xuICAtLWNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5vdGhlci10eXBlIHtcbiAgLS1jb2xvcjogcmdiKDM0LCAzNCwgMzQpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/insurance/insurance.page.ts":
/*!*********************************************!*\
  !*** ./src/app/insurance/insurance.page.ts ***!
  \*********************************************/
/*! exports provided: InsurancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurancePage", function() { return InsurancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../provider.service */ "./src/app/provider.service.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");





var parse = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
var InsurancePage = /** @class */ (function () {
    function InsurancePage(navigate, nativePageTransitions, provider) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.provider = provider;
    }
    InsurancePage.prototype.ngOnInit = function () {
        console.log(this.provider.bday);
    };
    InsurancePage.prototype.openPage = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/profile-picture");
    };
    InsurancePage.prototype.openPage2 = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/profile-picture");
    };
    InsurancePage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/birthday");
    };
    InsurancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-insurance',
            template: __webpack_require__(/*! ./insurance.page.html */ "./src/app/insurance/insurance.page.html"),
            styles: [__webpack_require__(/*! ./insurance.page.scss */ "./src/app/insurance/insurance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_4__["NativePageTransitions"], _provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]])
    ], InsurancePage);
    return InsurancePage;
}());



/***/ })

}]);
//# sourceMappingURL=insurance-insurance-module.js.map