(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["specialty-specialty-module"],{

/***/ "./src/app/specialty/specialty.module.ts":
/*!***********************************************!*\
  !*** ./src/app/specialty/specialty.module.ts ***!
  \***********************************************/
/*! exports provided: SpecialtyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyPageModule", function() { return SpecialtyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _specialty_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specialty.page */ "./src/app/specialty/specialty.page.ts");







var routes = [
    {
        path: '',
        component: _specialty_page__WEBPACK_IMPORTED_MODULE_6__["SpecialtyPage"]
    }
];
var SpecialtyPageModule = /** @class */ (function () {
    function SpecialtyPageModule() {
    }
    SpecialtyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_specialty_page__WEBPACK_IMPORTED_MODULE_6__["SpecialtyPage"]]
        })
    ], SpecialtyPageModule);
    return SpecialtyPageModule;
}());



/***/ }),

/***/ "./src/app/specialty/specialty.page.html":
/*!***********************************************!*\
  !*** ./src/app/specialty/specialty.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\n  <!-- <p class=\"profile-title\">Profile Picture</p> -->\n</div>\n\n<!-- <ion-button class=\"arrow-btn\" (click)=\"goBack()\">\n  <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n</ion-button> -->\n\n<ion-back-button class=\"arrow-btn\" text=\"\" defaultHref=\"/user-home\"></ion-back-button>\n\n<ion-card class=\"specialty\">\n  <p style=\"text-align: center;\">Health and Wellness Providers</p>\n</ion-card>\n\n<ion-content>\n  <ion-item lines=\"full\" style=\"margin-top: 30px;\">\n    <ion-label class=\"specialty-title\">SELECT SPECIALTY</ion-label>\n    <ion-select class=\"specialty-input\" slot=\"end\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\"\n      style=\" text-align: right;\">\n      <ion-select-option>Acupuncture</ion-select-option>\n      <ion-select-option>Allergy</ion-select-option>\n      <ion-select-option>Allergy and Immunology</ion-select-option>\n      <ion-select-option>Pediatric Allergy and Immunology</ion-select-option>\n      <ion-select-option>Anesthesia</ion-select-option>\n      <ion-select-option>Audiology</ion-select-option>\n      <ion-select-option>Cardiology</ion-select-option>\n      <ion-select-option>Interventional Cardiology</ion-select-option>\n      <ion-select-option>Pediatric Cardiology</ion-select-option>\n      <ion-select-option>Head and Neck Surgery</ion-select-option>\n      <ion-select-option>Back Surgery</ion-select-option>\n      <ion-select-option>Burns Surgery</ion-select-option>\n      <ion-select-option>General Surgery</ion-select-option>\n      <ion-select-option>Mohs Micrographic Surgery</ion-select-option>\n      <ion-select-option>Surgery or Peripheral Vascular Illness</ion-select-option>\n      <ion-select-option>Oncological Surgery</ion-select-option>\n      <ion-select-option>Oral Surgery</ion-select-option>\n      <ion-select-option>Orthopedic Surgery</ion-select-option>\n      <ion-select-option>Pediatric Surgery</ion-select-option>\n      <ion-select-option>Plastic Surgery</ion-select-option>\n      <ion-select-option>Hands Plastic Surgery</ion-select-option>\n      <ion-select-option>Thoracic Surgery</ion-select-option>\n      <ion-select-option>Pediatric Critical Care</ion-select-option>\n      <ion-select-option>Dentist</ion-select-option>\n      <ion-select-option>Pediatric Dentist</ion-select-option>\n      <ion-select-option>Dermatology</ion-select-option>\n      <ion-select-option>Endocrinology</ion-select-option>\n      <ion-select-option>Pediatric Endocrinology</ion-select-option>\n      <ion-select-option>Endodontics</ion-select-option>\n      <ion-select-option>Physiatry</ion-select-option>\n      <ion-select-option>Pediatric Physiatry</ion-select-option>\n      <ion-select-option>Physiatry and Rehabilitation</ion-select-option>\n      <ion-select-option>Spinal Cord Physiatry and Rehabilitation</ion-select-option>\n      <ion-select-option>Gastroenterology</ion-select-option>\n      <ion-select-option>Pediatric Gastroenterology</ion-select-option>\n      <ion-select-option>General Practitioner</ion-select-option>\n      <ion-select-option>Geriatrics</ion-select-option>\n      <ion-select-option>Gynecology</ion-select-option>\n      <ion-select-option>Oncologic Gynecology</ion-select-option>\n      <ion-select-option>Glaucoma</ion-select-option>\n      <ion-select-option>Hematology</ion-select-option>\n      <ion-select-option>Pediatric Hematology and Oncology</ion-select-option>\n      <ion-select-option>Oncology Hematology</ion-select-option>\n      <ion-select-option>Laboratories</ion-select-option>\n      <ion-select-option>Pain Management</ion-select-option>\n      <ion-select-option>Maxilofacial</ion-select-option>\n      <ion-select-option>Critical Care Medicine</ion-select-option>\n      <ion-select-option>Family Medicine</ion-select-option>\n      <ion-select-option>Sports Medicine</ion-select-option>\n      <ion-select-option>General Medicine</ion-select-option>\n      <ion-select-option>Internal Medicine</ion-select-option>\n      <ion-select-option>Neonatal and Perinatal Medicine</ion-select-option>\n      <ion-select-option>Nuclear Medicine</ion-select-option>\n      <ion-select-option>Occupational Medicine</ion-select-option>\n      <ion-select-option>Nephrology</ion-select-option>\n      <ion-select-option>Pneumology</ion-select-option>\n      <ion-select-option>Pediatric Pneumology</ion-select-option>\n      <ion-select-option>Neurosurgery</ion-select-option>\n      <ion-select-option>Neurophysiology</ion-select-option>\n      <ion-select-option>Neuroophtalmology</ion-select-option>\n      <ion-select-option>Neurology</ion-select-option>\n      <ion-select-option>Pediatric Neurology</ion-select-option>\n      <ion-select-option>Nutrition</ion-select-option>\n      <ion-select-option>Obstetric and gynecology</ion-select-option>\n      <ion-select-option>Pediatric Odontology</ion-select-option>\n      <ion-select-option>Orthodontics</ion-select-option>\n      <ion-select-option>Ophthalmology</ion-select-option>\n      <ion-select-option>Ear Nose and Throat</ion-select-option>\n      <ion-select-option>Oncology</ion-select-option>\n      <ion-select-option>Optometry</ion-select-option>\n      <ion-select-option>Orthopedics</ion-select-option>\n      <ion-select-option>Pediatric Orthopedics</ion-select-option>\n      <ion-select-option>Pediatry</ion-select-option>\n      <ion-select-option>Periodontics</ion-select-option>\n      <ion-select-option>Podiatrics</ion-select-option>\n      <ion-select-option>Proctology</ion-select-option>\n      <ion-select-option>Prosthodontics</ion-select-option>\n      <ion-select-option>Psychology</ion-select-option>\n      <ion-select-option>Psychiatric</ion-select-option>\n      <ion-select-option>Pediatric Psychiatrics</ion-select-option>\n      <ion-select-option>Geriatric Psychiatrics</ion-select-option>\n      <ion-select-option>Chiropractic</ion-select-option>\n      <ion-select-option>Radiology</ion-select-option>\n      <ion-select-option>Retinology</ion-select-option>\n      <ion-select-option>Physical Therapy</ion-select-option>\n      <ion-select-option>Urology</ion-select-option>\n      <ion-select-option>Pediatric Urology</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label class=\"specialty-title\">HEALTH INSURANCE</ion-label>\n    <ion-select slot=\"end\" [(ngModel)]=\"insurance\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\">\n      <ion-select-option value=\"Constellation\">Constellation</ion-select-option>\n      <ion-select-option value=\"First Choice\">First Choice</ion-select-option>\n      <ion-select-option value=\"First Medical Vital\">First Medical Vital</ion-select-option>\n      <ion-select-option value=\"First Medical\">First Medical</ion-select-option>\n      <ion-select-option value=\"Humana Gold\">Humana Gold</ion-select-option>\n      <ion-select-option value=\"Humana Medicare Advantage\">Humana Medicare Advantage</ion-select-option>\n      <ion-select-option value=\"Humana\">Humana</ion-select-option>\n      <ion-select-option value=\"MCS Classicare\">MCS Classicare</ion-select-option>\n      <ion-select-option value=\"MAPFRE\">MAPFRE</ion-select-option>\n      <ion-select-option value=\"MCS\">MCS</ion-select-option>\n      <ion-select-option value=\"Menonita Vital\">Menonita Vital</ion-select-option>\n      <ion-select-option value=\"Menonita Vital\">Menonita Vital</ion-select-option>\n      <ion-select-option value=\"MM Multi-Health Vital\">MM Multi-Health Vital</ion-select-option>\n      <ion-select-option value=\"MMM\">MMM</ion-select-option>\n      <ion-select-option value=\"Molina\">Molina</ion-select-option>\n      <ion-select-option value=\"PALIG\">PALIG</ion-select-option>\n      <ion-select-option value=\"Plan de Auxilio Mutuo\">Plan de Auxilio Mutuo</ion-select-option>\n      <ion-select-option value=\"Plan de Salud Menonita (PSM)\">Plan de Salud Menonita (PSM)</ion-select-option>\n      <ion-select-option value=\"PMC\">PMC</ion-select-option>\n      <ion-select-option value=\"Triple S Advantage\">Triple S Advantage</ion-select-option>\n      <ion-select-option value=\"Triple Salud (SSS)\">Triple Salud (SSS)</ion-select-option>\n      <ion-select-option value=\"SSS Vital\">SSS Vital</ion-select-option>\n      <ion-select-option value=\"Don't have medical insurance\">Don't have medical insurance</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n      <ion-label class=\"specialty-title\">CITY</ion-label>\n    <ion-select class=\"specialty-input\" slot=\"end\" placeholder=\"\" cancelText=\"Cancel\" okText=\"Okay\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\">\n        <ion-select-option value=\"Adjuntas\">Adjuntas</ion-select-option>\n        <ion-select-option value=\"Aguada\">Aguada</ion-select-option>\n        <ion-select-option value=\"Aguadilla\">Aguadilla</ion-select-option>\n        <ion-select-option value=\"Aguas Buenas\">Aguas Buenas</ion-select-option>\n        <ion-select-option value=\"Aibonito\">Aibonito</ion-select-option>\n        <ion-select-option value=\"Arecibo\">Arecibo</ion-select-option>\n        <ion-select-option value=\"Arroyo\">Arroyo</ion-select-option>\n        <ion-select-option value=\"Añasco\">Añasco</ion-select-option>\n        <ion-select-option value=\"Barceloneta\">Barceloneta</ion-select-option>\n        <ion-select-option value=\"Barranquitas\">Barranquitas</ion-select-option>\n        <ion-select-option value=\"Bayamón\">Bayamón</ion-select-option>\n        <ion-select-option value=\"Cabo Rojo\">Cabo Rojo</ion-select-option>\n        <ion-select-option value=\"Caguas\">Caguas</ion-select-option>\n        <ion-select-option value=\"Camuy\">Camuy</ion-select-option>\n        <ion-select-option value=\"Canóvanas\">Canóvanas</ion-select-option>\n        <ion-select-option value=\"Carolina\">Carolina</ion-select-option>\n        <ion-select-option value=\"Cataño\">Cataño</ion-select-option>\n        <ion-select-option value=\"Cayey\">Cayey</ion-select-option>\n        <ion-select-option value=\"Ceiba\">Ceiba</ion-select-option>\n        <ion-select-option value=\"Ciales\">Ciales</ion-select-option>\n        <ion-select-option value=\"Cidra\">Cidra</ion-select-option>\n        <ion-select-option value=\"Coamo\">Coamo</ion-select-option>\n        <ion-select-option value=\"Comerío\">Comerío</ion-select-option>\n        <ion-select-option value=\"Corozal\">Corozal</ion-select-option>\n        <ion-select-option value=\"Culebra\">Culebra</ion-select-option>\n        <ion-select-option value=\"Dorado\">Dorado</ion-select-option>\n        <ion-select-option value=\"Fajardo\">Fajardo</ion-select-option>\n        <ion-select-option value=\"Florida\">Florida</ion-select-option>\n        <ion-select-option value=\"Guayama\">Guayama</ion-select-option>\n        <ion-select-option value=\"Guayanilla\">Guayanilla</ion-select-option>\n        <ion-select-option value=\"Guaynabo\">Guaynabo</ion-select-option>\n        <ion-select-option value=\"Gurabo\">Gurabo</ion-select-option>\n        <ion-select-option value=\"Guánica\">Guánica</ion-select-option>\n        <ion-select-option value=\"Hatillo\">Hatillo</ion-select-option>\n        <ion-select-option value=\"Hormigueros\">Hormigueros</ion-select-option>\n        <ion-select-option value=\"Humacao\">Humacao</ion-select-option>\n        <ion-select-option value=\"Isabella\">Isabella</ion-select-option>\n        <ion-select-option value=\"Jayuya\">Jayuya</ion-select-option>\n        <ion-select-option value=\"Juana Díaz\">Juana Díaz</ion-select-option>\n        <ion-select-option value=\"Juncos\">Juncos</ion-select-option>\n        <ion-select-option value=\"Lajas\">Lajas</ion-select-option>\n        <ion-select-option value=\"Lares\">Lares</ion-select-option>\n        <ion-select-option value=\"Las Marías\">Las Marías</ion-select-option>\n        <ion-select-option value=\"Las Piedras\">Las Piedras</ion-select-option>\n        <ion-select-option value=\"Loíza\">Loíza</ion-select-option>\n        <ion-select-option value=\"Luquillo\">Luquillo</ion-select-option>\n        <ion-select-option value=\"Manatí\">Manatí</ion-select-option>\n        <ion-select-option value=\"Maricao\">Maricao</ion-select-option>\n        <ion-select-option value=\"Maunabo\">Maunabo</ion-select-option>\n        <ion-select-option value=\"Mayagüez\">Mayagüez</ion-select-option>\n        <ion-select-option value=\"Moca\">Moca</ion-select-option>\n        <ion-select-option value=\"Morovis\">Morovis</ion-select-option>\n        <ion-select-option value=\"Naguabo\">Naguabo</ion-select-option>\n        <ion-select-option value=\"Naranjito\">Naranjito</ion-select-option>\n        <ion-select-option value=\"Orocovis\">Orocovis</ion-select-option>\n        <ion-select-option value=\"Patillas\">Patillas</ion-select-option>\n        <ion-select-option value=\"Peñuelas\">Peñuelas</ion-select-option>\n        <ion-select-option value=\"Ponce\">Ponce</ion-select-option>\n        <ion-select-option value=\"Quebradillas\">Quebradillas</ion-select-option>\n        <ion-select-option value=\"Rincón\">Rincón</ion-select-option>\n        <ion-select-option value=\"Río Grande\">Río Grande</ion-select-option>\n        <ion-select-option value=\"Sabana Grande\">Sabana Grande</ion-select-option>\n        <ion-select-option value=\"Salinas\">Salinas</ion-select-option>\n        <ion-select-option value=\"San Germán\">San Germán</ion-select-option>\n        <ion-select-option value=\"San Juan\">San Juan</ion-select-option>\n        <ion-select-option value=\"San Lorenzo\">San Lorenzo</ion-select-option>\n        <ion-select-option value=\"San Sebastián\">San Sebastián</ion-select-option>\n        <ion-select-option value=\"Santa Isabel\">Santa Isabel</ion-select-option>\n        <ion-select-option value=\"Toa Alta\">Toa Alta</ion-select-option>\n        <ion-select-option value=\"Toa Baja\">Toa Baja</ion-select-option>\n        <ion-select-option value=\"Trujillo Alto\">Trujillo Alto</ion-select-option>\n        <ion-select-option value=\"Utuado\">Utuado</ion-select-option>\n        <ion-select-option value=\"Vega Alta\">Vega Alta</ion-select-option>\n        <ion-select-option value=\"Vega Baja\">Vega Baja</ion-select-option>\n        <ion-select-option value=\"Vieques\">Vieques</ion-select-option>\n        <ion-select-option value=\"Villalba\">Villalba</ion-select-option>\n        <ion-select-option value=\"Yabucoa\">Yabucoa</ion-select-option>\n        <ion-select-option value=\"Yauco\">Yauco</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-icon style=\"font-size: 15px\" slot=\"start\" ios=\"ios-search\" md=\"md-search\"></ion-icon>\n    <ion-input class=\"search-input\" type=\"text\" placeholder=\"ZIP CODE\"></ion-input>\n  </ion-item>\n  <ion-item lines=\"full\">\n    <ion-icon style=\"font-size: 15px\" slot=\"start\" ios=\"ios-person\" md=\"md-person\"></ion-icon>\n    <ion-label class=\"specialty-title\">DOCTOR'S NAME</ion-label>\n    <ion-input slot=\"end\" style=\"width: 100%; text-align: right;\" class=\"search-input\" type=\"text\" placeholder=\"\"></ion-input>\n  </ion-item>\n  <!-- <ion-searchbar class=\"search-bar\" placeholder=\"ZIP CODE OR CITY\"></ion-searchbar> -->\n\n  <ion-button routerLink=\"/doctors\" class=\"next-btn\" expand=\"block\">NEXT</ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/specialty/specialty.page.scss":
/*!***********************************************!*\
  !*** ./src/app/specialty/specialty.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  height: 100px; }\n\n.arrow-btn {\n  position: absolute;\n  top: 50px;\n  left: 20px;\n  color: white;\n  height: 20px;\n  width: 20px; }\n\n.arrow {\n  color: white;\n  height: 50px;\n  width: 50px; }\n\n.specialty {\n  color: white;\n  margin: 0;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 15px;\n  font-weight: 700;\n  box-shadow: none;\n  position: absolute;\n  top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0; }\n\n.specialty-title {\n  color: grey;\n  font-weight: 700;\n  font-size: 15px;\n  letter-spacing: 1px; }\n\n.search-input {\n  color: grey;\n  font-weight: 700;\n  font-size: 15px;\n  letter-spacing: 1px;\n  --placeholder-opacity: 10; }\n\n.specialty-input {\n  text-align: right;\n  font-size: 13px; }\n\n.next-btn {\n  background-image: linear-gradient(to right, #93278f, #7c55b7, #5976d1, #3392df, #29abe2);\n  box-shadow: 0 8px 6px -6px black;\n  --background: transparent;\n  --background-activated: transparent;\n  width: 320px;\n  height: 45px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 20px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 13px;\n  --box-shadow: none;\n  margin-top: 30px;\n  margin-bottom: 10px; }\n\n.search-bar {\n  --placeholder-font-weight: 700;\n  --placeholder-color: rgb(92, 92, 92);\n  --background: white;\n  border-bottom: 2px solid #e5e4e7;\n  margin-left: 15px;\n  padding-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2VsYWxlamFuZHJvL0Rvd25sb2Fkcy9taWFwcC1hcHAvc3JjL2FwcC9zcGVjaWFsdHkvc3BlY2lhbHR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdGQUF3RjtFQUN4RixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFlBQXlCO0VBQ3pCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUdWO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usd0ZBQXdGO0VBQ3hGLGdDQUFnQztFQUNoQyx5QkFBYTtFQUNiLG1DQUF1QjtFQUN2QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLDhCQUEwQjtFQUMxQixvQ0FBb0I7RUFDcEIsbUJBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWx0eS9zcGVjaWFsdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM5MzI3OGYsICM3YzU1YjcsICM1OTc2ZDEsICMzMzkyZGYsICMyOWFiZTIpO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5hcnJvdyB7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5zcGVjaWFsdHkge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc3BlY2lhbHR5LXRpdGxlIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eSA6IDEwO1xufVxuXG4uc3BlY2lhbHR5LWlucHV0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm5leHQtYnRuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMyNzhmLCAjN2M1NWI3LCAjNTk3NmQxLCAjMzM5MmRmLCAjMjlhYmUyKTtcbiAgYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggYmxhY2s7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgLS1wbGFjZWhvbGRlci1mb250LXdlaWdodDogNzAwO1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiByZ2IoOTIsIDkyLCA5Mik7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTVlNGU3O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/specialty/specialty.page.ts":
/*!*********************************************!*\
  !*** ./src/app/specialty/specialty.page.ts ***!
  \*********************************************/
/*! exports provided: SpecialtyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialtyPage", function() { return SpecialtyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _specialty_specialty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .././specialty/specialty.component */ "./src/app/specialty/specialty.component.ts");






var SpecialtyPage = /** @class */ (function () {
    function SpecialtyPage(navigate, nativePageTransitions, modalController) {
        this.navigate = navigate;
        this.nativePageTransitions = nativePageTransitions;
        this.modalController = modalController;
    }
    SpecialtyPage.prototype.ngOnInit = function () {
    };
    SpecialtyPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _specialty_specialty_component__WEBPACK_IMPORTED_MODULE_4__["SpecialtyComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // openPage() {
    //   let options: NativeTransitionOptions = {
    //   duration: 100,
    //   iosdelay: 100
    //  }
    // console.log(options);
    // this.nativePageTransitions.fade(options);
    //   this.navigate.navigateRoot("/doctors");
    // }
    SpecialtyPage.prototype.goBack = function () {
        var options = {
            duration: 100,
            iosdelay: 100
        };
        console.log(options);
        this.nativePageTransitions.fade(options);
        this.navigate.navigateRoot("/user-home");
    };
    SpecialtyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialty',
            template: __webpack_require__(/*! ./specialty.page.html */ "./src/app/specialty/specialty.page.html"),
            styles: [__webpack_require__(/*! ./specialty.page.scss */ "./src/app/specialty/specialty.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_3__["NativePageTransitions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SpecialtyPage);
    return SpecialtyPage;
}());



/***/ })

}]);
//# sourceMappingURL=specialty-specialty-module.js.map