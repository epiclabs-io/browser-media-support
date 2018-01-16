webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".itemName {\n  color: #000000;\n  font-weight: bold;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: top;\n}\n\n.itemDetails {\n  font-size: smaller;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: top;\n}\n\n.sublistContainer {\n  margin-top: 30px;\n  margin-left: 20px;\n}\n\nh3 a {\n  color: #000;\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n}\n\n.listWithBullets {\n  list-style: none;\n}\n\n.listWithBullets li {\n  padding-left: 1em;\n  text-indent: -.7em;\n}\n\n.listWithBullets li:before {\n  content: \"\\2022   \";\n  color: #94bf1e;\n  font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div style=\"line-height: 1.5;\">\n        <a href=\"https://www.w3.org/TR/media-source/\">Media Source Extensions (MSE)</a> is a Javascript API that\n        let's you build video players that support streaming protocols beyond progressive media download of MP4/WebM files. It is\n        one of the core pieces of modern HTML5 video players which support HTTP chunk based streaming protocols like MPEG DASH (<a\n        href=\"https://github.com/Dash-Industry-Forum/dash.js\">dash.js</a>) or HLS (<a href=\"https://github.com/video-dev/hls.js\">hls.js</a>),\n        that allows you to implement advanced streaming features like:\n        <ul class=\"listWithBullets\">\n            <li>Adaptive Streaming. Streaming quality automatically adapted attending to evolution of different metrics (ex: network conditions, frame drops, etc)</li>\n            <li>Live Streaming with time shift (DVR)</li>\n            <li>Ad insertion feature in which ad chunks are inserted between content chunks</li>\n        </ul>\n\n        <p>\n            Together with MSE, <a href=\"https://www.w3.org/TR/encrypted-media/\">Encrypted Media Extensions (EME)</a>\n            is a Javascript API that allows you to use DRM capabilities of your browser. With both APIs\n            you can build HTML5 video players which support streaming protocols and features that before MSE/EME were only possible\n            with the help of browser plugins like Flash or Silverlight.\n        </p>\n        <p>\n            Below you will find details about the mime types (containers, codecs) and DRM sytems supported by the MSE/EME implementation of your browser.\n        </p>\n\n    </div>\n</div>\n<div class=\"container\">\n    <mat-card>\n        <mat-card-title>\n                Media Source Extensions Support\n                <mat-icon [ngStyle]=\"{'color': mseSupported ? colorYes : colorNo }\">{{mseSupported ? 'thumb_up' : 'thumb_down'}}</mat-icon>\n        </mat-card-title>\n        <mat-card-content>\n            <div>\n                <h3>\n\n                </h3>\n                <div *ngIf=\"mseSupported\"> Great, your browser supports <a href=\"https://www.w3.org/TR/media-source/\">Media Source Extensions</a>!</div>\n                <div *ngIf=\"!mseSupported\"> Oh, sorry, unfortunately your browser doesn't support <a href=\"https://www.w3.org/TR/media-source/\">Media Source Extensions</a></div>\n            </div>\n\n            <div class=\"sublistContainer\">\n                <div>\n                    <h4>Mime Types supported</h4>\n                </div>\n                <div>\n                    <ul>\n                        <li *ngFor=\"let mimeType of mimeTypes\">\n                            <mat-icon [ngStyle]=\"{'color': mimeType.supported ? colorYes : colorNo }\">{{mimeType.supported ? 'check_box' : 'check_box_outline_blank'}}</mat-icon>\n                            <span class=\"itemName\">{{ mimeType.desc }}</span>\n                            <span class=\"itemDetails\">({{mimeType.mimeType}})</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n<div class=\"container\">\n    <mat-card>\n        <mat-card-title>\n                Encrypted Media Extensions\n                <mat-icon [ngStyle]=\"{'color': emeSupported ? colorYes : colorNo }\">{{emeSupported ? 'thumb_up' : 'thumb_down'}}</mat-icon>\n        </mat-card-title>\n\n        <mat-card-content>\n            <div>\n                <div *ngIf=\"emeSupported\"> Great, your browser supports <a href=\"https://www.w3.org/TR/encrypted-media/\">Encrypted Media Extensions</a> which could enable compatibility with DRM systems!</div>\n                <div *ngIf=\"!emeSupported\"> Oh, sorry, unfortunately your browser doesn't support <a href=\"https://www.w3.org/TR/encrypted-media/\">Encrypted Media Extensions</a></div>\n            </div>\n\n            <div class=\"sublistContainer\">\n                <div>\n                    <h4>KeySystems supported</h4>\n                    <div>\n                        <ul>\n                            <li *ngFor=\"let drm of drmMechanisms\">\n                                <mat-icon [ngStyle]=\"{'color': drm.supported ? colorYes : colorNo }\">{{drm.supported ? 'check_box' : 'check_box_outline_blank'}}</mat-icon>\n                                <span class=\"itemName\">{{ drm.id }}</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n<div class=\"container\">\n    <h4>Would you like to check compatibility with browsers/versions different than yours? Take a look here:</h4>\n    <ul>\n        <li><a href=\"https://caniuse.com/#feat=mediasource\">Media Source Extensions browsers compatibility</a></li>\n        <li><a href=\"https://caniuse.com/#feat=eme\">Encrypted Media Extensions Extensions browsers compatibility</a></li>\n</ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mse_mse_service__ = __webpack_require__("../../../../../src/app/mse/mse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eme_eme_service__ = __webpack_require__("../../../../../src/app/eme/eme.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(mseService, emeService) {
        var _this = this;
        this.mseService = mseService;
        this.emeService = emeService;
        this.colorYes = '#94bf1e';
        this.colorNo = '#000000';
        this.mseSupported = false;
        this.emeSupported = false;
        this.mimeTypes = [];
        this.drmMechanisms = [];
        this.mseSupported = mseService.isMseSupported();
        this.mimeTypes = mseService.getMimeTypesInfo();
        this.emeSupported = emeService.isEmeSupported();
        emeService.findOutSupportedKeySystems()
            .then(function (result) {
            _this.drmMechanisms = result;
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mse_mse_service__["a" /* MseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mse_mse_service__["a" /* MseService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__eme_eme_service__["a" /* EmeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__eme_eme_service__["a" /* EmeService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_ui_module__ = __webpack_require__("../../../../../src/app/app.ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mse_mse_service__ = __webpack_require__("../../../../../src/app/mse/mse.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eme_eme_service__ = __webpack_require__("../../../../../src/app/eme/eme.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_ui_module__["a" /* AppUIModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__mse_mse_service__["a" /* MseService */],
            __WEBPACK_IMPORTED_MODULE_6__eme_eme_service__["a" /* EmeService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUIModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppUIModule = (function () {
    function AppUIModule() {
    }
    return AppUIModule;
}());
AppUIModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatCardModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
    })
], AppUIModule);

//# sourceMappingURL=app.ui.module.js.map

/***/ }),

/***/ "../../../../../src/app/eme/eme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmeService = (function () {
    function EmeService() {
        this.drmMechanisms = [
            { 'id': 'Widevine', 'keysystems': ['com.widevine.alpha'] },
            { 'id': 'PlayReady', 'keysystems': ['com.microsoft.playready', 'com.youtube.playready'] },
            { 'id': 'Primetime', 'keysystems': ['com.adobe.primetime', 'com.adobe.access'] },
            { 'id': 'Fairplay', 'keysystems': ['com.apple.fairplay', 'com.apple.fps.1_0', 'com.apple.fps', 'com.apple.fps_2_0'] },
            { 'id': 'ClearKey', 'keysystems': ['webkit-org.w3.clearkey', 'org.w3.clearkey'] }
        ];
        this.videoElement = document.createElement('video');
    }
    EmeService.prototype.isEmeSupported = function () {
        return (window.MediaKeys && window.navigator
            && window.navigator.requestMediaKeySystemAccess
            && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration)
            || typeof this.videoElement.webkitSetMediaKeys === 'function';
    };
    EmeService.prototype.findOutSupportedKeySystems = function () {
        var _this = this;
        var that = this;
        var promise = new Promise(function (resolve, reject) {
            _this.pendingJobs = 0;
            _this.drmMechanisms.forEach(function (drm) {
                drm.supported = false;
                _this.pendingJobs += drm.keysystems.length;
            });
            if (!_this.isEmeSupported()) {
                resolve(_this.drmMechanisms);
                return;
            }
            if (typeof window.navigator.requestMediaKeySystemAccess === 'function') {
                var isKeySystemSupported_1 = function (drm, keySystem) {
                    var config = [{
                            initDataTypes: ['cenc'],
                            audioCapabilities: [{
                                    contentType: 'audio/mp4;codecs="mp4a.40.2"'
                                }],
                            videoCapabilities: [{
                                    'contentType': 'video/mp4;codecs="avc1.42E01E"'
                                }]
                        }];
                    try {
                        window.navigator.requestMediaKeySystemAccess(keySystem, config).then(function (keySystemAccess) {
                            that.completeJob(drm, true, resolve);
                        }).catch(function (err) {
                            that.completeJob(drm, false, resolve);
                        });
                    }
                    catch (e) {
                        that.completeJob(drm, false, resolve);
                    }
                };
                _this.drmMechanisms.forEach(function (drm) {
                    drm.keysystems.forEach(function (ks) {
                        isKeySystemSupported_1(drm, ks);
                    });
                });
            }
            else if (typeof _this.videoElement.webkitGenerateKeyRequest === 'function') {
                _this.drmMechanisms.forEach(function (drm) {
                    drm.keysystems.forEach(function (ks) {
                        that.completeJob(drm, _this.videoElement.canPlayType('video/mp4', ks), resolve);
                    });
                });
                // Safari
            }
            else if (typeof _this.videoElement.webkitSetMediaKeys === 'function') {
                _this.drmMechanisms.forEach(function (drm) {
                    drm.keysystems.forEach(function (ks) {
                        try {
                            _this.videoElement.webkitSetMediaKeys(new window.WebKitMediaKeys(ks));
                            that.completeJob(drm, !!_this.videoElement.webkitKeys, resolve);
                        }
                        catch (e) {
                            that.completeJob(drm, false, resolve);
                        }
                    });
                });
            }
        });
        return promise;
    };
    EmeService.prototype.completeJob = function (drm, result, resolve) {
        console.log('Done: ' + drm.id + ', result: ' + result);
        drm.supported = drm.supported || result;
        this.pendingJobs--;
        if (this.pendingJobs === 0) {
            resolve(this.drmMechanisms);
        }
    };
    return EmeService;
}());
EmeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EmeService);

//# sourceMappingURL=eme.service.js.map

/***/ }),

/***/ "../../../../../src/app/mse/mse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MseService = (function () {
    function MseService() {
        var _this = this;
        this.mimeTypes = [
            // MP4 types
            { 'desc': 'MP4 - H.264 AVC1 Baseline profile', 'mimeType': 'video/mp4; codecs="avc1.42E01E"' },
            { 'desc': 'MP4 - H.264 AVC1 Main profile', 'mimeType': 'video/mp4; codecs="avc1.4D401F"' },
            { 'desc': 'MP4 - H.264 AVC1 High profile', 'mimeType': 'video/mp4; codecs="avc1.64000a"' },
            { 'desc': 'MP4 - H.264 AVC3', 'mimeType': 'video/mp4; codecs="avc3.42E01E"' },
            { 'desc': 'MP4 - HEVC HEV1', 'mimeType': 'video/mp4; codecs="hev1.1.6.L93.90"' },
            { 'desc': 'MP4 - HEVC HVC1', 'mimeType': 'video/mp4; codecs="hvc1.1.6.L93.90"' },
            { 'desc': 'MP4 - HEVC HDR HEV1', 'mimeType': 'video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084"' },
            { 'desc': 'MP4 - HEVC HDR HVC1', 'mimeType': 'video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084"' },
            { 'desc': 'MP4 - VP9', 'mimeType': 'video/mp4; codecs="vp09.00.10.08"' },
            { 'desc': 'MP4 - AAC', 'mimeType': 'audio/mp4; codecs="mp4a.40.2"' },
            { 'desc': 'MP4 - AC3', 'mimeType': 'audio/mp4; codecs="ac-3"' },
            { 'desc': 'MP4 - EC3', 'mimeType': 'audio/mp4; codecs="ec-3"' },
            { 'desc': 'MP4 - OPUS', 'mimeType': 'audio/mp4; codecs="opus"' },
            { 'desc': 'MP4 - FLAC', 'mimeType': 'audio/mp4; codecs="flac"' },
            // WebM types
            { 'desc': 'WEBM - VP8', 'mimeType': 'video/webm; codecs="vp8"' },
            { 'desc': 'WEBM - VP9', 'mimeType': 'video/webm; codecs="vp9"' },
            { 'desc': 'WEBM - AV1', 'mimeType': 'video/webm; codecs="av1"' },
            { 'desc': 'WEBM - VORBIS', 'mimeType': 'audio/webm; codecs="vorbis"' },
            { 'desc': 'WEBM - OPUS', 'mimeType': 'audio/webm; codecs="opus"' },
            // MPEG2 TS types (video/ is also used for audio: http://goo.gl/tYHXiS)
            { 'desc': 'MPEG2 TS - H.264 AVC1', 'mimeType': 'video/mp2t; codecs="avc1.42E01E"' },
            { 'desc': 'MPEG2 TS - H.264 AVC3', 'mimeType': 'video/mp2t; codecs="avc3.42E01E"' },
            { 'desc': 'MPEG2 TS - HEVC HVC1', 'mimeType': 'video/mp2t; codecs="hvc1.1.6.L93.90"' },
            { 'desc': 'MPEG2 TS - AAC', 'mimeType': 'video/mp2t; codecs="mp4a.40.2"' },
            { 'desc': 'MPEG2 TS - AC3', 'mimeType': 'video/mp2t; codecs="ac-3"' },
            { 'desc': 'MPEG2 TS - EC3', 'mimeType': 'video/mp2t; codecs="ec-3"' }
        ];
        if (this.isMseSupported()) {
            this.mimeTypes.forEach(function (t) {
                t.supported = _this.isMimeTypeSupported(t.mimeType);
            });
        }
    }
    MseService.prototype.isMseSupported = function () {
        var mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
        var sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
        return mediaSource && typeof mediaSource.isTypeSupported === 'function';
    };
    MseService.prototype.getMimeTypesInfo = function () {
        return this.mimeTypes;
    };
    MseService.prototype.isMimeTypeSupported = function (mimeType) {
        return window.MediaSource.isTypeSupported(mimeType);
    };
    return MseService;
}());
MseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MseService);

//# sourceMappingURL=mse.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map