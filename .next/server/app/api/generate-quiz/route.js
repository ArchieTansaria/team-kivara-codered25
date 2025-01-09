/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/generate-quiz/route";
exports.ids = ["app/api/generate-quiz/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quiz%2Froute&page=%2Fapi%2Fgenerate-quiz%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quiz%2Froute.js&appDir=C%3A%5CUsers%5CVinay%5CDownloads%5Cconverted_files%5Cai-sdk-preview-pdf-support-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVinay%5CDownloads%5Cconverted_files%5Cai-sdk-preview-pdf-support-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quiz%2Froute&page=%2Fapi%2Fgenerate-quiz%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quiz%2Froute.js&appDir=C%3A%5CUsers%5CVinay%5CDownloads%5Cconverted_files%5Cai-sdk-preview-pdf-support-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVinay%5CDownloads%5Cconverted_files%5Cai-sdk-preview-pdf-support-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Vinay_Downloads_converted_files_ai_sdk_preview_pdf_support_main_app_api_generate_quiz_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/generate-quiz/route.js */ \"(rsc)/./app/api/generate-quiz/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/generate-quiz/route\",\n        pathname: \"/api/generate-quiz\",\n        filename: \"route\",\n        bundlePath: \"app/api/generate-quiz/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Vinay\\\\Downloads\\\\converted_files\\\\ai-sdk-preview-pdf-support-main\\\\app\\\\api\\\\generate-quiz\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Vinay_Downloads_converted_files_ai_sdk_preview_pdf_support_main_app_api_generate_quiz_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZnZW5lcmF0ZS1xdWl6JTJGcm91dGUmcGFnZT0lMkZhcGklMkZnZW5lcmF0ZS1xdWl6JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2VuZXJhdGUtcXVpeiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNWaW5heSU1Q0Rvd25sb2FkcyU1Q2NvbnZlcnRlZF9maWxlcyU1Q2FpLXNkay1wcmV2aWV3LXBkZi1zdXBwb3J0LW1haW4lNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1ZpbmF5JTVDRG93bmxvYWRzJTVDY29udmVydGVkX2ZpbGVzJTVDYWktc2RrLXByZXZpZXctcGRmLXN1cHBvcnQtbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDZ0U7QUFDN0k7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFZpbmF5XFxcXERvd25sb2Fkc1xcXFxjb252ZXJ0ZWRfZmlsZXNcXFxcYWktc2RrLXByZXZpZXctcGRmLXN1cHBvcnQtbWFpblxcXFxhcHBcXFxcYXBpXFxcXGdlbmVyYXRlLXF1aXpcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dlbmVyYXRlLXF1aXovcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZW5lcmF0ZS1xdWl6XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZW5lcmF0ZS1xdWl6L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcVmluYXlcXFxcRG93bmxvYWRzXFxcXGNvbnZlcnRlZF9maWxlc1xcXFxhaS1zZGstcHJldmlldy1wZGYtc3VwcG9ydC1tYWluXFxcXGFwcFxcXFxhcGlcXFxcZ2VuZXJhdGUtcXVpelxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quiz%2Froute&page=%2Fapi%2Fgenerate-quiz%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quiz%2Froute.js&appDir=C%3A%5CUsers%5CVinay%5CDownloads%5Cconverted_files%5Cai-sdk-preview-pdf-support-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVinay%5CDownloads%5Cconverted_files%5Cai-sdk-preview-pdf-support-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/generate-quiz/route.js":
/*!****************************************!*\
  !*** ./app/api/generate-quiz/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   maxDuration: () => (/* binding */ maxDuration)\n/* harmony export */ });\n/* harmony import */ var _lib_schemas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/schemas */ \"(rsc)/./app/lib/schemas.js\");\n/* harmony import */ var _ai_sdk_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ai-sdk/google */ \"(rsc)/./node_modules/@ai-sdk/google/dist/index.mjs\");\n/* harmony import */ var ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ai */ \"(rsc)/./node_modules/ai/dist/index.mjs\");\n\n\n\nconst maxDuration = 60;\nasync function POST(req) {\n    const { files } = await req.json();\n    const firstFile = files[0].data;\n    const result = (0,ai__WEBPACK_IMPORTED_MODULE_1__.streamObject)({\n        model: (0,_ai_sdk_google__WEBPACK_IMPORTED_MODULE_2__.google)(\"gemini-1.5-pro-latest\"),\n        messages: [\n            {\n                role: \"system\",\n                content: \"You are a teacher. Your job is to take a document, and create a multiple choice test (with 4 questions) based on the content of the document. Each option should be roughly equal in length.\"\n            },\n            {\n                role: \"user\",\n                content: [\n                    {\n                        type: \"text\",\n                        text: \"Create a multiple choice test based on this document.\"\n                    },\n                    {\n                        type: \"file\",\n                        data: firstFile,\n                        mimeType: \"application/pdf\"\n                    }\n                ]\n            }\n        ],\n        schema: _lib_schemas__WEBPACK_IMPORTED_MODULE_0__.questionSchema,\n        output: \"array\",\n        onFinish: ({ object })=>{\n            const res = _lib_schemas__WEBPACK_IMPORTED_MODULE_0__.questionsSchema.safeParse(object);\n            if (!res.success) {\n                throw new Error(res.error.errors.map((e)=>e.message).join(\"\\n\"));\n            }\n        }\n    });\n    return result.toTextStreamResponse();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dlbmVyYXRlLXF1aXovcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0U7QUFDNUI7QUFDTjtBQUUzQixNQUFNSSxjQUFjLEdBQUc7QUFFdkIsZUFBZUMsS0FBS0MsR0FBRztJQUM1QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7SUFDaEMsTUFBTUMsWUFBWUYsS0FBSyxDQUFDLEVBQUUsQ0FBQ0csSUFBSTtJQUUvQixNQUFNQyxTQUFTUixnREFBWUEsQ0FBQztRQUMxQlMsT0FBT1Ysc0RBQU1BLENBQUM7UUFDZFcsVUFBVTtZQUNSO2dCQUNFQyxNQUFNO2dCQUNOQyxTQUNFO1lBQ0o7WUFDQTtnQkFDRUQsTUFBTTtnQkFDTkMsU0FBUztvQkFDUDt3QkFDRUMsTUFBTTt3QkFDTkMsTUFBTTtvQkFDUjtvQkFDQTt3QkFDRUQsTUFBTTt3QkFDTk4sTUFBTUQ7d0JBQ05TLFVBQVU7b0JBQ1o7aUJBQ0Q7WUFDSDtTQUNEO1FBQ0RDLFFBQVFuQix3REFBY0E7UUFDdEJvQixRQUFRO1FBQ1JDLFVBQVUsQ0FBQyxFQUFFQyxNQUFNLEVBQUU7WUFDbkIsTUFBTUMsTUFBTXRCLHlEQUFlQSxDQUFDdUIsU0FBUyxDQUFDRjtZQUN0QyxJQUFJLENBQUNDLElBQUlFLE9BQU8sRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNSCxJQUFJSSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLElBQU1BLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxDQUFDO1lBQzlEO1FBQ0Y7SUFDRjtJQUVBLE9BQU9yQixPQUFPc0Isb0JBQW9CO0FBQ3BDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFZpbmF5XFxEb3dubG9hZHNcXGNvbnZlcnRlZF9maWxlc1xcYWktc2RrLXByZXZpZXctcGRmLXN1cHBvcnQtbWFpblxcYXBwXFxhcGlcXGdlbmVyYXRlLXF1aXpcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHF1ZXN0aW9uU2NoZW1hLCBxdWVzdGlvbnNTY2hlbWEgfSBmcm9tIFwiLi4vLi4vbGliL3NjaGVtYXNcIjtcbmltcG9ydCB7IGdvb2dsZSB9IGZyb20gXCJAYWktc2RrL2dvb2dsZVwiO1xuaW1wb3J0IHsgc3RyZWFtT2JqZWN0IH0gZnJvbSBcImFpXCI7XG5cbmV4cG9ydCBjb25zdCBtYXhEdXJhdGlvbiA9IDYwO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgY29uc3QgeyBmaWxlcyB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgY29uc3QgZmlyc3RGaWxlID0gZmlsZXNbMF0uZGF0YTtcblxuICBjb25zdCByZXN1bHQgPSBzdHJlYW1PYmplY3Qoe1xuICAgIG1vZGVsOiBnb29nbGUoXCJnZW1pbmktMS41LXByby1sYXRlc3RcIiksXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICBcIllvdSBhcmUgYSB0ZWFjaGVyLiBZb3VyIGpvYiBpcyB0byB0YWtlIGEgZG9jdW1lbnQsIGFuZCBjcmVhdGUgYSBtdWx0aXBsZSBjaG9pY2UgdGVzdCAod2l0aCA0IHF1ZXN0aW9ucykgYmFzZWQgb24gdGhlIGNvbnRlbnQgb2YgdGhlIGRvY3VtZW50LiBFYWNoIG9wdGlvbiBzaG91bGQgYmUgcm91Z2hseSBlcXVhbCBpbiBsZW5ndGguXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgY29udGVudDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgdGV4dDogXCJDcmVhdGUgYSBtdWx0aXBsZSBjaG9pY2UgdGVzdCBiYXNlZCBvbiB0aGlzIGRvY3VtZW50LlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICBkYXRhOiBmaXJzdEZpbGUsXG4gICAgICAgICAgICBtaW1lVHlwZTogXCJhcHBsaWNhdGlvbi9wZGZcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNjaGVtYTogcXVlc3Rpb25TY2hlbWEsXG4gICAgb3V0cHV0OiBcImFycmF5XCIsXG4gICAgb25GaW5pc2g6ICh7IG9iamVjdCB9KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBxdWVzdGlvbnNTY2hlbWEuc2FmZVBhcnNlKG9iamVjdCk7XG4gICAgICBpZiAoIXJlcy5zdWNjZXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihyZXMuZXJyb3IuZXJyb3JzLm1hcCgoZSkgPT4gZS5tZXNzYWdlKS5qb2luKFwiXFxuXCIpKTtcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0LnRvVGV4dFN0cmVhbVJlc3BvbnNlKCk7XG59XG4iXSwibmFtZXMiOlsicXVlc3Rpb25TY2hlbWEiLCJxdWVzdGlvbnNTY2hlbWEiLCJnb29nbGUiLCJzdHJlYW1PYmplY3QiLCJtYXhEdXJhdGlvbiIsIlBPU1QiLCJyZXEiLCJmaWxlcyIsImpzb24iLCJmaXJzdEZpbGUiLCJkYXRhIiwicmVzdWx0IiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwidHlwZSIsInRleHQiLCJtaW1lVHlwZSIsInNjaGVtYSIsIm91dHB1dCIsIm9uRmluaXNoIiwib2JqZWN0IiwicmVzIiwic2FmZVBhcnNlIiwic3VjY2VzcyIsIkVycm9yIiwiZXJyb3IiLCJlcnJvcnMiLCJtYXAiLCJlIiwibWVzc2FnZSIsImpvaW4iLCJ0b1RleHRTdHJlYW1SZXNwb25zZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/generate-quiz/route.js\n");

/***/ }),

/***/ "(rsc)/./app/lib/schemas.js":
/*!****************************!*\
  !*** ./app/lib/schemas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   questionSchema: () => (/* binding */ questionSchema),\n/* harmony export */   questionsSchema: () => (/* binding */ questionsSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\nconst questionSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    question: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),\n    options: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.string()).length(4).describe(\"Four possible answers to the question. Only one should be correct. They should all be of equal lengths.\"),\n    answer: zod__WEBPACK_IMPORTED_MODULE_0__.z.enum([\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\"\n    ]).describe(\"The correct answer, where A is the first option, B is the second, and so on.\")\n});\nconst questionsSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.array(questionSchema).length(4);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL3NjaGVtYXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRWpCLE1BQU1DLGlCQUFpQkQsa0NBQUNBLENBQUNFLE1BQU0sQ0FBQztJQUNyQ0MsVUFBVUgsa0NBQUNBLENBQUNJLE1BQU07SUFDbEJDLFNBQVNMLGtDQUFDQSxDQUNQTSxLQUFLLENBQUNOLGtDQUFDQSxDQUFDSSxNQUFNLElBQ2RHLE1BQU0sQ0FBQyxHQUNQQyxRQUFRLENBQ1A7SUFFSkMsUUFBUVQsa0NBQUNBLENBQ05VLElBQUksQ0FBQztRQUFDO1FBQUs7UUFBSztRQUFLO0tBQUksRUFDekJGLFFBQVEsQ0FDUDtBQUVOLEdBQUc7QUFFSSxNQUFNRyxrQkFBa0JYLGtDQUFDQSxDQUFDTSxLQUFLLENBQUNMLGdCQUFnQk0sTUFBTSxDQUFDLEdBQUciLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVmluYXlcXERvd25sb2Fkc1xcY29udmVydGVkX2ZpbGVzXFxhaS1zZGstcHJldmlldy1wZGYtc3VwcG9ydC1tYWluXFxhcHBcXGxpYlxcc2NoZW1hcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgcXVlc3Rpb25TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHF1ZXN0aW9uOiB6LnN0cmluZygpLFxuICBvcHRpb25zOiB6XG4gICAgLmFycmF5KHouc3RyaW5nKCkpXG4gICAgLmxlbmd0aCg0KVxuICAgIC5kZXNjcmliZShcbiAgICAgIFwiRm91ciBwb3NzaWJsZSBhbnN3ZXJzIHRvIHRoZSBxdWVzdGlvbi4gT25seSBvbmUgc2hvdWxkIGJlIGNvcnJlY3QuIFRoZXkgc2hvdWxkIGFsbCBiZSBvZiBlcXVhbCBsZW5ndGhzLlwiXG4gICAgKSxcbiAgYW5zd2VyOiB6XG4gICAgLmVudW0oW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiXSlcbiAgICAuZGVzY3JpYmUoXG4gICAgICBcIlRoZSBjb3JyZWN0IGFuc3dlciwgd2hlcmUgQSBpcyB0aGUgZmlyc3Qgb3B0aW9uLCBCIGlzIHRoZSBzZWNvbmQsIGFuZCBzbyBvbi5cIlxuICAgICksXG59KTtcblxuZXhwb3J0IGNvbnN0IHF1ZXN0aW9uc1NjaGVtYSA9IHouYXJyYXkocXVlc3Rpb25TY2hlbWEpLmxlbmd0aCg0KTtcbiJdLCJuYW1lcyI6WyJ6IiwicXVlc3Rpb25TY2hlbWEiLCJvYmplY3QiLCJxdWVzdGlvbiIsInN0cmluZyIsIm9wdGlvbnMiLCJhcnJheSIsImxlbmd0aCIsImRlc2NyaWJlIiwiYW5zd2VyIiwiZW51bSIsInF1ZXN0aW9uc1NjaGVtYSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/schemas.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod","vendor-chunks/ai","vendor-chunks/@ai-sdk","vendor-chunks/zod-to-json-schema","vendor-chunks/@opentelemetry","vendor-chunks/eventsource-parser","vendor-chunks/secure-json-parse","vendor-chunks/nanoid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fgenerate-quiz%2Froute&page=%2Fapi%2Fgenerate-quiz%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgenerate-quiz%2Froute.js&appDir=C%3A%5CUsers%5CVinay%5CDownloads%5Cconverted_files%5Cai-sdk-preview-pdf-support-main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CVinay%5CDownloads%5Cconverted_files%5Cai-sdk-preview-pdf-support-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();