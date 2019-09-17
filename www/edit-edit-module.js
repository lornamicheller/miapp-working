(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"],{

/***/ "./src/app/edit/edit.module.ts":
/*!*************************************!*\
  !*** ./src/app/edit/edit.module.ts ***!
  \*************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "./src/app/edit/edit.page.ts");







var routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]
    }
];
var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
        })
    ], EditPageModule);
    return EditPageModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.page.html":
/*!*************************************!*\
  !*** ./src/app/edit/edit.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <p class=\"doctors-title\">Doctors</p>\n</div>\n\n<ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon style=\"color: white;\" class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button>\n\n<ion-content>\n  <ion-card class=\"avatar-card\">\n    <ion-button expand=\"full\" class=\"camera-btn\">\n      <ion-avatar class=\"doctor-img\">\n        <ion-img src=\"assets/girl.png\"></ion-img>\n      </ion-avatar>\n    </ion-button>\n  </ion-card>\n\n  <ion-card class=\"info-forms\">\n    <ion-input class=\"name\" placeholder=\"Nombre\"></ion-input>\n    <ion-input class=\"last-name\" placeholder=\"Apellidos\"></ion-input>\n    <ion-input class=\"phone-number\" placeholder=\"Teléfono\"></ion-input>\n    <ion-input class=\"email\" placeholder=\"Correo Electrónico\"></ion-input>\n    <ion-input class=\"password\" placeholder=\"Contraseña\"></ion-input>\n  </ion-card>\n\n  <ion-button class=\"next-btn\" (click)=\"goBack()\" expand=\"full\">SAVE</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/edit/edit.page.scss":
/*!*************************************!*\
  !*** ./src/app/edit/edit.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.doctors-title {\n  text-align: center;\n  color: white;\n  letter-spacing: 1px;\n  font-size: 15px;\n  padding-top: 45px;\n  font-weight: 700; }\n\n.arrow-btn {\n  position: absolute;\n  top: 55px;\n  left: 0;\n  z-index: 20;\n  width: 50px;\n  --background: transparent;\n  --background-activated: transparent;\n  --box-shadow: none; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.avatar-card {\n  box-shadow: none;\n  margin: 0;\n  border-radius: 0; }\n\n.doctor-img {\n  margin-top: 40px;\n  width: 90px;\n  height: 90px; }\n\n.arrow-btn {\n  position: absolute;\n  top: 35px;\n  left: 0;\n  z-index: 20;\n  width: 50px;\n  --box-shadow: none;\n  --background: transparent;\n  --background-activated: transparent; }\n\n.arrow {\n  color: black;\n  height: 40px;\n  width: 40px; }\n\n.image-container {\n  padding: 50px; }\n\n.btn {\n  --background: transparent;\n  --box-shadow: none;\n  float: right; }\n\n.camera-btn {\n  height: auto;\n  --background: rgb(255, 255, 255);\n  --background-activated: rgb(223, 223, 223);\n  --box-shadow: none;\n  margin: 0;\n  border-radius: 0; }\n\n.info-forms {\n  margin: 0;\n  padding-top: 30px;\n  border-radius: 0;\n  box-shadow: none; }\n\n.name {\n  --padding-start: 10px;\n  --background: rgb(255, 255, 255);\n  border-top: 1px solid #e4e4e4;\n  border-bottom: 1px solid #e4e4e4;\n  --padding-top: 20px;\n  --padding-bottom: 20px; }\n\n.last-name {\n  --padding-start: 10px;\n  --background: rgb(255, 255, 255);\n  border-bottom: 1px solid #e4e4e4;\n  --padding-top: 20px;\n  --padding-bottom: 20px; }\n\n.phone-number {\n  --padding-start: 10px;\n  --background: rgb(255, 255, 255);\n  border-bottom: 1px solid #e4e4e4;\n  --padding-top: 20px;\n  --padding-bottom: 20px; }\n\n.email {\n  --padding-start: 10px;\n  --background: rgb(255, 255, 255);\n  border-bottom: 1px solid #e4e4e4;\n  --padding-top: 20px;\n  --padding-bottom: 20px; }\n\n.password {\n  --padding-start: 10px;\n  --background: rgb(255, 255, 255);\n  border-bottom: 1px solid #e4e4e4;\n  --padding-top: 20px;\n  --padding-bottom: 20px; }\n\n.next-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 50px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9lZGl0L2VkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0ZBQXdGO0VBQ3hGLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixrQkFBYSxFQUFBOztBQUdmO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFhO0VBQ2IseUJBQWE7RUFDYixtQ0FBdUIsRUFBQTs7QUFHekI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFJYjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHlCQUFhO0VBQ2Isa0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osZ0NBQWE7RUFDYiwwQ0FBdUI7RUFDdkIsa0JBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UscUJBQWdCO0VBQ2hCLGdDQUFhO0VBQ2IsNkJBQXdDO0VBQ3hDLGdDQUEyQztFQUMzQyxtQkFBYztFQUNkLHNCQUFpQixFQUFBOztBQUduQjtFQUNFLHFCQUFnQjtFQUNoQixnQ0FBYTtFQUNiLGdDQUEyQztFQUMzQyxtQkFBYztFQUNkLHNCQUFpQixFQUFBOztBQUduQjtFQUNFLHFCQUFnQjtFQUNoQixnQ0FBYTtFQUNiLGdDQUEyQztFQUMzQyxtQkFBYztFQUNkLHNCQUFpQixFQUFBOztBQUduQjtFQUNFLHFCQUFnQjtFQUNoQixnQ0FBYTtFQUNiLGdDQUEyQztFQUMzQyxtQkFBYztFQUNkLHNCQUFpQixFQUFBOztBQUduQjtFQUNFLHFCQUFnQjtFQUNoQixnQ0FBYTtFQUNiLGdDQUEyQztFQUMzQyxtQkFBYztFQUNkLHNCQUFpQixFQUFBOztBQUduQjtFQUNJLHdGQUF3RjtFQUN4RixnQ0FBZ0M7RUFDaEMseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1iZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzkzMjc4ZiwgIzdjNTViNywgIzU5NzZkMSwgIzMzOTJkZiwgIzI5YWJlMik7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5kb2N0b3JzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hcnJvdy1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMjA7XG4gIHdpZHRoOiA1MHB4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXJyb3cge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uYXZhdGFyLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5kb2N0b3ItaW1nIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNXB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDUwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLmJ0biB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY2FtZXJhLWJ0biB7XG4gIGhlaWdodDogYXV0bztcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYigyMjMsIDIyMywgMjIzKTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5pbmZvLWZvcm1zIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm5hbWUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIyOCwgMjI4LCAyMjgpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIyOCwgMjI4LCAyMjgpO1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4ubGFzdC1uYW1lIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjgsIDIyOCwgMjI4KTtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnBob25lLW51bWJlciB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjI4LCAyMjgsIDIyOCk7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5lbWFpbCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjI4LCAyMjgsIDIyOCk7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5wYXNzd29yZCB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjI4LCAyMjgsIDIyOCk7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5uZXh0LWJ0biB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCBibGFjaztcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/edit/edit.page.ts":
/*!***********************************!*\
  !*** ./src/app/edit/edit.page.ts ***!
  \***********************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");




var EditPage = /** @class */ (function () {
    function EditPage(navigate, nativePageTransitions) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
    }
    EditPage.prototype.ngOnInit = function () {
    };
    EditPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/account");
    };
    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.page.html */ "./src/app/edit/edit.page.html"),
            styles: [__webpack_require__(/*! ./edit.page.scss */ "./src/app/edit/edit.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"]])
    ], EditPage);
    return EditPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-edit-module.js.map