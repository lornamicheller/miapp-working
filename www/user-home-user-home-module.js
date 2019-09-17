(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-home-user-home-module"],{

/***/ "./src/app/user-home/user-home.module.ts":
/*!***********************************************!*\
  !*** ./src/app/user-home/user-home.module.ts ***!
  \***********************************************/
/*! exports provided: UserHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePageModule", function() { return UserHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _user_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-home.page */ "./src/app/user-home/user-home.page.ts");







var routes = [
    {
        path: '',
        component: _user_home_page__WEBPACK_IMPORTED_MODULE_6__["UserHomePage"]
    }
];
var UserHomePageModule = /** @class */ (function () {
    function UserHomePageModule() {
    }
    UserHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_user_home_page__WEBPACK_IMPORTED_MODULE_6__["UserHomePage"]]
        })
    ], UserHomePageModule);
    return UserHomePageModule;
}());



/***/ }),

/***/ "./src/app/user-home/user-home.page.html":
/*!***********************************************!*\
  !*** ./src/app/user-home/user-home.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"main-bg\">\n    <ion-toolbar class=\"bg\">\n      <ion-buttons slot=\"start\">\n        <ion-button routerLink=\"/account\" (click)=\"openProfile()\" class=\"profile-btn\">\n          <ion-icon class=\"user-icon\" ios=\"ios-person\" md=\"md-person\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n      <div class=\"logo-bell\">\n        <ion-img class=\"logo\" src=\"assets/logomiaapp.svg\"></ion-img>\n        <ion-button routerLink=\"/notification\" class=\"bell\">\n          <ion-icon class=\"bell-icon\" ios=\"ios-notifications-outline\" md=\"md-notifications-outline\"></ion-icon>\n        </ion-button>\n      </div>\n    </ion-toolbar>\n  </ion-card>\n<ion-content>\n\n  <ion-card class=\"wrapper\">\n    <p class=\"welcome\">Hello <span>Melanie</span>,</p>\n    <p class=\"what-service\">WHAT ARE YOU LOOKING FOR?</p>\n\n    <ion-button routerLink=\"/specialty\" class=\"book-app\" expand=\"block\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-img class=\"img\" src=\"assets/doc-icon-1.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"10\" class=\"text\">\n            Book Appointment\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n\n    <ion-button routerLink=\"/view-appointment\" class=\"view-app\" expand=\"block\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-img class=\"img\" src=\"assets/calendar.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"10\" class=\"text\">\n            View Appointment\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n\n    <ion-button routerLink=\"/manage\" class=\"manage-app\" expand=\"block\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-img class=\"img\" src=\"assets/edit-app-2.png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"10\" class=\"text-2\">\n            Manage <br>Appointment\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n\n    <ion-button routerLink=\"/check-in\" class=\"check-in\" expand=\"block\">\n      <ion-grid style=\"margin: 0; padding: 0;\">\n        <ion-row>\n          <ion-col size=\"2\">\n            <ion-img class=\"img\" src=\"assets/checkin (1).png\"></ion-img>\n          </ion-col>\n          <ion-col size=\"10\" class=\"text\">\n            Check-in\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-button>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/user-home/user-home.page.scss":
/*!***********************************************!*\
  !*** ./src/app/user-home/user-home.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  margin: 0;\n  border-radius: 0;\n  padding-top: 50px;\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 110px; }\n\n.bg {\n  --background: transparent;\n  height: auto; }\n\n.logo {\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.wrapper {\n  margin: 0;\n  border-radius: 0;\n  overflow: scroll;\n  box-shadow: none; }\n\n.user-icon {\n  width: 30px;\n  height: 30px;\n  color: white; }\n\n.logo-bell {\n  display: flex;\n  width: 100%; }\n\n.bell {\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.bell-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.bell-icon {\n  width: 30px;\n  height: 30px;\n  color: white; }\n\n.welcome {\n  font-size: 20px;\n  letter-spacing: 1px;\n  font-weight: 700;\n  margin-left: 20px; }\n\n.what-service {\n  font-size: 17px;\n  letter-spacing: 1px;\n  font-weight: 700;\n  text-align: center;\n  color: #969696; }\n\n.book-app {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 6px -6px black;\n  --background: #8397fc;\n  --background-activated: #8397fc;\n  border-radius: 25px;\n  height: 100px; }\n\n.view-app {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 6px -6px black;\n  --background: #009bdf;\n  --background-activated: #009bdf;\n  border-radius: 25px;\n  height: 100px; }\n\n.manage-app {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 6px -6px black;\n  --background: #9f009b;\n  --background-activated: #9f009b;\n  border-radius: 25px;\n  height: 100px; }\n\n.check-in {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n  box-shadow: 0 8px 6px -6px black;\n  --background: #5b66c2;\n  --background-activated: #5b66c2;\n  border-radius: 25px;\n  height: 100px; }\n\n.img {\n  width: 50px;\n  height: 50px;\n  -o-object-fit: contain;\n     object-fit: contain; }\n\n.text {\n  margin-top: 17px;\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n.text-2 {\n  margin-top: 8px;\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC91c2VyLWhvbWUvdXNlci1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdGQUF3RjtFQUN4RixhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdiO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsa0JBQWEsRUFBQTs7QUFHZjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUF5QixFQUFBOztBQUczQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUVuQixnQ0FBZ0M7RUFDaEMscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUVuQixnQ0FBZ0M7RUFDaEMscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUVuQixnQ0FBZ0M7RUFDaEMscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUVuQixnQ0FBZ0M7RUFDaEMscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdXNlci1ob21lL3VzZXItaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1iZyB7XG4gIG1hcmdpbjogMDsgXG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBoZWlnaHQ6IDExMHB4O1xufVxuXG4uYmcge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ud3JhcHBlciB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnVzZXItaWNvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ28tYmVsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmVsbCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5iZWxsLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5iZWxsLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWxjb21lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLndoYXQtc2VydmljZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xufVxuXG4uYm9vay1hcHAge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzkzMjc4ZiwgIzdjNTViNywgIzU5NzZkMSwgIzMzOTJkZiwgIzI5YWJlMik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICM4Mzk3ZmM7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM4Mzk3ZmM7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi52aWV3LWFwcCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogIzAwOWJkZjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzAwOWJkZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLm1hbmFnZS1hcHAge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzkzMjc4ZiwgIzdjNTViNywgIzU5NzZkMSwgIzMzOTJkZiwgIzI5YWJlMik7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDZweCAtNnB4IGJsYWNrO1xuICAtLWJhY2tncm91bmQ6ICM5ZjAwOWI7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM5ZjAwOWI7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5jaGVjay1pbiB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogIzViNjZjMjtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzViNjZjMjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4udGV4dC0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/user-home/user-home.page.ts":
/*!*********************************************!*\
  !*** ./src/app/user-home/user-home.page.ts ***!
  \*********************************************/
/*! exports provided: UserHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePage", function() { return UserHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





var UserHomePage = /** @class */ (function () {
    function UserHomePage(navigate, nativePageTransitions, statusBar) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.statusBar = statusBar;
    }
    UserHomePage.prototype.ngOnInit = function () {
    };
    // openPage() {
    //   let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/specialty");
    // }
    // openPage2() {
    //   let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/view-appointment");
    // }
    // openPage3() {
    //   let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/manage");
    // }
    // openPage4() {
    //   let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/check-in");
    // }
    UserHomePage.prototype.openNotifications = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/notification");
    };
    UserHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-home',
            template: __webpack_require__(/*! ./user-home.page.html */ "./src/app/user-home/user-home.page.html"),
            styles: [__webpack_require__(/*! ./user-home.page.scss */ "./src/app/user-home/user-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
    ], UserHomePage);
    return UserHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=user-home-user-home-module.js.map