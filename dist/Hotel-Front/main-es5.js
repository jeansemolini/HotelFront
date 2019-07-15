(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"ui-g\">\n\n      <div class=\"ui-g\">\n          <div class=\"ui-lg-12 ui-fluid\">\n            <p-messages [(value)]=\"msgs\"></p-messages>\n        </div>\n      </div>\n\n      <p-dialog header=\"Cadastrar Pessoa\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '350px', minWidth: '200px'}\" [minY]=\"70\" \n          [baseZIndex]=\"10000\">\n          <form autocomplete=\"off\" (ngSubmit)=\"salvarPessoa(frmpessoa)\" #frmpessoa=\"ngForm\">\n              <div class=\"ui-g\">\n                  <div class=\"ui-lg-12 ui-fluid\">\n                    <label>Nome</label>\n                    <input type=\"text\" pInputText [(ngModel)]=\"pessoa.nome\" name=\"nome\" required/>\n                    \n                  </div>\n                  <div class=\"ui-lg-6 ui-md-6 ui-sm-12 ui-fluid\">\n                      <label>Documento</label>\n                      <p-inputMask [(ngModel)]=\"pessoa.documento\" name=\"documento\" mask=\"999999999\"></p-inputMask>\n                  </div>    \n                  <div class=\"ui-lg-6 ui-md-6 ui-sm-12 ui-fluid\">\n                      <label>Telefone</label>\n                      <p-inputMask [(ngModel)]=\"pessoa.telefone\" name=\"telefone\" mask=\"999999999\"></p-inputMask>\n                  </div>    \n              </div>\n              <p-footer>\n                  <button type=\"button\" pButton icon=\"pi pi-check\" label=\"Salvar\" type=\"submit\" [disabled]=\"frmpessoa.invalid\"></button>\n                  <button type=\"button\" pButton icon=\"pi pi-close\" (click)=\"display=false\" label=\"Cancelar\" class=\"ui-button-secondary\"></button>\n              </p-footer>\n          </form>  \n    </p-dialog>\n\n    <div class=\"ui-g-12\">\n        <button pButton type=\"button\" label=\"Incluir Pessoa\" (click)=\"showDialog()\"></button>\n    </div>\n\n    <div class=\"ui-g-12 header-azul\">      \n      <p-panel header=\"Novo check in\">\n          <form autocomplete=\"off\" (ngSubmit)=\"salvar(frm)\" #frm=\"ngForm\">\n          <div class=\"ui-g\">\n            <div class=\"ui-lg-6 ui-md-6 ui-sm-12 ui-fluid\">\n              <label>Data/hora de entrada</label>\n              <p-calendar [(ngModel)]=\"checkin.dataEntrada\" name=\"dataEntrada\" dateFormat=\"dd-mm-yy\" showTime=\"true\" hourFormat=\"24\" required></p-calendar>              \n            </div>            \n\n            <div class=\"ui-lg-6 ui-md-6 ui-sm-12 ui-fluid\">\n                <label>Data/hora de Saída</label>                \n                <p-calendar [(ngModel)]=\"checkin.dataSaida\" name=\"dataSaida\" dateFormat=\"dd-mm-yy\" showTime=\"true\" hourFormat=\"24\"></p-calendar>              \n            </div>            \n\n            <div class=\"ui-lg-6 ui-md-6 ui-sm-12 ui-fluid\">\n                <label>Pessoa</label>\n                <p-dropdown [options]=\"pessoas\" placeholder=\"Digite o nome ou documento\" [filter]=\"true\" filterBy=\"label,value.documento\"\n                [(ngModel)]=\"checkin.pessoa\" name=\"pessoa\" required></p-dropdown>\n\n\n                <div style=\"margin-top: 5px;\" *ngIf=\"pessoa.invalid && pessoa.touched\">\n                    <p-message severity=\"error\" text=\"Informe um nome\"></p-message>\n                </div>\n            </div>\n\n            <div class=\"chk-margin ui-lg-6 ui-md-6 ui-sm-12 \">\n                <p-checkbox name=\"groupname\" label=\"Possui veículo\" binary=\"true\"\n                [(ngModel)]=\"checkin.adicionalVeiculo\" name=\"adicionalVeiculo\"></p-checkbox>\n            </div>\n\n            <div class=\"ui-g-12\">\n                <button pButton type=\"submit\" label=\"Salvar\" [disabled]=\"frm.invalid\"></button>\n            </div>\n          </div>\n        </form>\n      </p-panel>\n    </div>\n\n    \n\n    <div class=\"ui-g-12 header-azul\">\n        <p-panel header=\"Consultas\">\n            <div class=\"ui-g\">\n              <div class=\"ui-lg-6 ui-md-6 ui-sm-12 ui-fluid\">\n                  <p-radioButton name=\"groupname\" label=\"Pessoas ainda presentes\" value=\"noHotel\" [(ngModel)]=\"filtro\" (click)=\"filtrar($event)\"></p-radioButton>\n              </div>\n              <div class=\"ui-lg-6 ui-md-6 ui-sm-12 ui-fluid\">\n                  <p-radioButton name=\"groupname\" label=\"Pessoas que ja deixaram o hotel\" value=\"foraHotel\" [(ngModel)]=\"filtro\"(click)=\"filtrar($event)\" ></p-radioButton>\n              </div>\n                \n              <p-table [value]=\"resumo\"  [paginator]=\"true\" [rows]=\"10\" [responsive]=\"true\">\n                  <ng-template pTemplate=\"header\">\n                      <tr>\n                          <th>Nome</th>\n                          <th>Documento</th>\n                          <th>Valor gasto (R$)</th>\n                      </tr>\n                  </ng-template>\n                  <ng-template pTemplate=\"body\" let-resumo>\n                      <tr>\n                          <td>{{resumo.nome}}</td>\n                          <td>{{resumo.documento}}</td>\n                          <td>{{resumo.valor}}</td>\n                      </tr>\n                  </ng-template>\n              </p-table>\n            </div>\n        </p-panel>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carregar_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carregar-json.service */ "./src/app/carregar-json.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(carregarJsonService) {
        this.carregarJsonService = carregarJsonService;
        this.title = 'Hotel-Front';
        this.resumo = [];
        this.foraHotel = [];
        this.noHotel = [];
        this.pessoas = [];
        this.filtro = "noHotel";
        this.display = false;
        this.msgs = [];
    }
    AppComponent.prototype.showDialog = function () {
        this.display = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkin = {};
        this.checkin.adicionalVeiculo = false;
        this.pessoa = {};
        this.carregarJsonService.carregarDadosForaHotel()
            .then(function (dados) {
            _this.foraHotel = dados;
            _this.filtrar();
        });
        this.carregarJsonService.carregarDadosNoHotel()
            .then(function (dados) {
            _this.noHotel = dados;
            _this.filtrar();
        });
        this.carregarJsonService.carregarPessoas()
            .then(function (dados) {
            _this.pessoas = dados
                .map(function (p) { return ({ label: p.nome, value: p }); });
        });
    };
    AppComponent.prototype.salvar = function (frm) {
        this.newCheckin = new _model__WEBPACK_IMPORTED_MODULE_1__["Checkin"](this.checkin.pessoa, this.checkin.dataEntrada, this.checkin.dataSaida, this.checkin.adicionalVeiculo);
        if (this.checkin.dataSaida == '' || this.checkin.dataSaida == undefined) {
            this.noHotel.push(this.newCheckin);
        }
        else {
            this.foraHotel.push(this.newCheckin);
        }
        frm.reset();
        this.filtrar();
        this.msgs.push({ severity: 'success', summary: 'Check in com sucesso', detail: '' });
    };
    AppComponent.prototype.filtrar = function () {
        var dataEntrada;
        var dataSaida;
        var qtdeDias;
        var valor;
        var usaGaragem;
        if (this.filtro == 'foraHotel') {
            this.resumo = [];
            for (var i = 0; i < this.foraHotel.length; i++) {
                dataEntrada = new Date(this.foraHotel[i].dataEntrada);
                dataSaida = new Date(this.foraHotel[i].dataSaida);
                qtdeDias = dataSaida.getDate() - dataEntrada.getDate();
                valor = 0;
                usaGaragem = this.foraHotel[i].adicionalVeiculo;
                var horaSaida = dataSaida.getHours();
                var minSaida = dataSaida.getMinutes();
                for (var ii = 0; ii < qtdeDias; ii++) {
                    var data = new Date;
                    data.setDate(dataEntrada.getDate() + ii);
                    if (data.getUTCDay() == 0 || data.getUTCDay() == 6) {
                        valor += 150.00;
                        if (usaGaragem) {
                            valor += 20.00;
                        }
                    }
                    else {
                        valor += 120.00;
                        if (usaGaragem) {
                            valor += 15.00;
                        }
                    }
                }
                if (horaSaida >= 16 && minSaida > 30) {
                    if (dataSaida.getUTCDay() == 0 || dataSaida.getUTCDay() == 6) {
                        valor += 150.00;
                    }
                    else {
                        valor += 120.00;
                    }
                }
                this.resumo.push({
                    nome: this.foraHotel[i].pessoa.nome, documento: this.foraHotel[i].pessoa.documento, valor: valor.toFixed(2)
                });
            }
        }
        if (this.filtro == 'noHotel') {
            this.resumo = this.noHotel
                .map(function (p) { return ({
                nome: p.pessoa.nome, documento: p.pessoa.documento, valor: 'Em aberto'
            }); });
        }
    };
    AppComponent.prototype.salvarPessoa = function (frmpessoa) {
        this.pessoas.push({
            label: this.pessoa.nome, value: this.pessoa
        });
        this.msgs.push({ severity: 'success', summary: 'Pessoa salva com sucesso', detail: '' });
        this.display = false;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _carregar_json_service__WEBPACK_IMPORTED_MODULE_3__["CarregarJsonService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _carregar_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carregar-json.service */ "./src/app/carregar-json.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_panel_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/panel/panel */ "./node_modules/primeng/components/panel/panel.js");
/* harmony import */ var primeng_components_panel_panel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_panel_panel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js");
/* harmony import */ var primeng_components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/components/checkbox/checkbox */ "./node_modules/primeng/components/checkbox/checkbox.js");
/* harmony import */ var primeng_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_components_button_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/components/button/button */ "./node_modules/primeng/components/button/button.js");
/* harmony import */ var primeng_components_button_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_components_button_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/components/table/table */ "./node_modules/primeng/components/table/table.js");
/* harmony import */ var primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/components/dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js");
/* harmony import */ var primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_components_inputmask_inputmask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/components/inputmask/inputmask */ "./node_modules/primeng/components/inputmask/inputmask.js");
/* harmony import */ var primeng_components_inputmask_inputmask__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_components_inputmask_inputmask__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/components/radiobutton/radiobutton */ "./node_modules/primeng/components/radiobutton/radiobutton.js");
/* harmony import */ var primeng_components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js");
/* harmony import */ var primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_components_messages_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/components/messages/messages */ "./node_modules/primeng/components/messages/messages.js");
/* harmony import */ var primeng_components_messages_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_components_messages_messages__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_components_message_message__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/components/message/message */ "./node_modules/primeng/components/message/message.js");
/* harmony import */ var primeng_components_message_message__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_components_message_message__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                primeng_components_panel_panel__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
                primeng_components_inputtext_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                primeng_components_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_8__["CheckboxModule"],
                primeng_components_button_button__WEBPACK_IMPORTED_MODULE_9__["ButtonModule"],
                primeng_components_table_table__WEBPACK_IMPORTED_MODULE_10__["TableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
                primeng_components_inputmask_inputmask__WEBPACK_IMPORTED_MODULE_13__["InputMaskModule"],
                primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_14__["CalendarModule"],
                primeng_components_radiobutton_radiobutton__WEBPACK_IMPORTED_MODULE_15__["RadioButtonModule"],
                primeng_components_dialog_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
                primeng_components_messages_messages__WEBPACK_IMPORTED_MODULE_17__["MessagesModule"],
                primeng_components_message_message__WEBPACK_IMPORTED_MODULE_18__["MessageModule"]
            ],
            providers: [_carregar_json_service__WEBPACK_IMPORTED_MODULE_1__["CarregarJsonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/carregar-json.service.ts":
/*!******************************************!*\
  !*** ./src/app/carregar-json.service.ts ***!
  \******************************************/
/*! exports provided: CarregarJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarregarJsonService", function() { return CarregarJsonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var CarregarJsonService = /** @class */ (function () {
    function CarregarJsonService(http) {
        this.http = http;
    }
    CarregarJsonService.prototype.carregarDadosForaHotel = function () {
        return this.http.get('assets/foraHotel.json').toPromise();
    };
    CarregarJsonService.prototype.carregarDadosNoHotel = function () {
        return this.http.get('assets/noHotel.json').toPromise();
    };
    CarregarJsonService.prototype.carregarPessoas = function () {
        return this.http.get('assets/pessoas.json').toPromise();
    };
    CarregarJsonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CarregarJsonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], CarregarJsonService);
    return CarregarJsonService;
}());



/***/ }),

/***/ "./src/app/model.ts":
/*!**************************!*\
  !*** ./src/app/model.ts ***!
  \**************************/
/*! exports provided: Pessoa, Checkin, Resumo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pessoa", function() { return Pessoa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkin", function() { return Checkin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resumo", function() { return Resumo; });
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());

var Checkin = /** @class */ (function () {
    function Checkin(pessoa, dataEntrada, dataSaida, adicionalVeiculo) {
        this.pessoa = new Pessoa();
        this.pessoa = pessoa;
        this.dataEntrada = dataEntrada;
        this.dataSaida = dataSaida;
        this.adicionalVeiculo = adicionalVeiculo;
    }
    Checkin.ctorParameters = function () { return [
        { type: Pessoa },
        { type: Date },
        { type: Date },
        { type: Boolean }
    ]; };
    return Checkin;
}());

var Resumo = /** @class */ (function () {
    function Resumo() {
    }
    return Resumo;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Hotel-Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map