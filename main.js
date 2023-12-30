/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// Some random colors\r\nconst colors = [\"#3CC157\", \"#2AA7FF\", \"#1B1B1B\", \"#FCBC0F\", \"#F85F36\"];\r\n\r\nconst numBalls = 50;\r\nconst balls = [];\r\n\r\nfor (let i = 0; i < numBalls; i++) {\r\n  let ball = document.createElement(\"div\");\r\n  ball.classList.add(\"ball\");\r\n  ball.style.background = colors[Math.floor(Math.random() * colors.length)];\r\n  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;\r\n  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;\r\n  ball.style.transform = `scale(${Math.random()})`;\r\n  ball.style.width = `${Math.random()}em`;\r\n  ball.style.height = ball.style.width;\r\n  \r\n  balls.push(ball);\r\n  document.body.append(ball);\r\n}\r\n\r\n// Keyframes\r\nballs.forEach((el, i, ra) => {\r\n  let to = {\r\n    x: Math.random() * (i % 2 === 0 ? -11 : 11),\r\n    y: Math.random() * 12\r\n  };\r\n\r\n  let anim = el.animate(\r\n    [\r\n      { transform: \"translate(0, 0)\" },\r\n      { transform: `translate(${to.x}rem, ${to.y}rem)` }\r\n    ],\r\n    {\r\n      duration: (Math.random() + 1) * 2000, // random duration\r\n      direction: \"alternate\",\r\n      fill: \"both\",\r\n      iterations: Infinity,\r\n      easing: \"ease-in-out\"\r\n    }\r\n  );\r\n});\n\n//# sourceURL=webpack://homepage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;