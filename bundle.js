/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _api = __webpack_require__(1);

	var API = _interopRequireWildcard(_api);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	document.addEventListener('DOMContentLoaded', function () {
	  API.getThemes();

	  $('.theme-ul').on('click', 'li', function (e) {
	    var desc = $(e.target).data().desc;
	    var id = $(e.target).data().id;
	    API.getSets(desc, id);
	  });

	  $('.set-ul').on('mouseover', 'li', function (e) {
	    var thumb = $(e.target).data().thumb;
	    setInfo($(e.target).data());
	  });
	});

	function setInfo(data) {
	  $('.set-image').css('background-image', 'url(' + data.thumb + ')');
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSets = exports.getThemes = undefined;

	var _data = __webpack_require__(2);

	var Data = _interopRequireWildcard(_data);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var getThemes = exports.getThemes = function getThemes() {
	  $.ajax({
	    url: 'https://rebrickable.com/api/get_themes',
	    data: {
	      key: KEY,
	      format: 'json'
	    },
	    success: function success(_success) {
	      Data.processData('themes', _success);
	    },
	    error: function error() {
	      console.log('fail');
	    }
	  });
	};

	var getSets = exports.getSets = function getSets(theme, theme_id) {

	  $.ajax({
	    url: 'https://rebrickable.com/api/search',
	    data: {
	      key: KEY,
	      query: theme,
	      format: 'json',
	      type: 'S'

	    },
	    success: function success(_success2) {
	      Data.processData('sets', _success2);
	    },
	    error: function error() {
	      console.log('fail');
	    }
	  });
	};

	var KEY = 'Xdo02dxumY';

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var processData = exports.processData = function processData(type, data) {
	  switch (type) {
	    case 'themes':
	      addThemes(data.themes);
	      break;
	    case 'sets':
	      addSets(data.results);
	      break;
	    default:
	      console.log('none selected');
	  }
	};

	function addThemes(themes) {
	  themes.forEach(function (theme) {
	    var themeLevel = void 0;
	    if (theme.theme_id.split('.').length === 3) {
	      themeLevel = 'theme-3';
	    } else if (theme.theme_id.split('.').length === 2) {
	      themeLevel = 'theme-2';
	    } else {
	      themeLevel = 'theme-1';
	    }
	    $('.theme-ul').append('<li class=' + themeLevel + ' data-desc="' + theme.descr + '" data-id=' + theme.theme_id + '>' + theme.descr + '</li>');
	  });
	}

	function addSets(sets) {
	  $('.set-ul').empty();

	  sets.forEach(function (set) {
	    $('.set-ul').append('<li data-thumb="' + set.img_big + '">' + set.descr + '</li>');
	  });
	}

/***/ }
/******/ ]);