/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?importLoader=1&modules&localIdentName=[local]___[hash:base64:5]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/index.css":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?importLoader=1&modules&localIdentName=[local]___[hash:base64:5]!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js??ref--6-3!./src/index.css ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\r\n<<<<<<< HEAD\r\n^\r\n      Invalid CSS after \"<\": expected 1 selector or at-rule, was \"<<<<<<< HEAD\"\r\n      in C:\\website\\website\\synectiks-website\\src\\index.css (line 1, column 1)");

/***/ }),

/***/ "./node_modules/google-maps-react/dist/GoogleApiComponent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/GoogleApiComponent.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! react-dom */ "react-dom"), __webpack_require__(/*! ./lib/ScriptCache */ "./node_modules/google-maps-react/dist/lib/ScriptCache.js"), __webpack_require__(/*! ./lib/GoogleApi */ "./node_modules/google-maps-react/dist/lib/GoogleApi.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _reactDom, _ScriptCache, _GoogleApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.wrapper = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _GoogleApi2 = _interopRequireDefault(_GoogleApi);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var defaultMapConfig = {};

  var serialize = function serialize(obj) {
    return JSON.stringify(obj);
  };
  var isSame = function isSame(obj1, obj2) {
    return obj1 === obj2 || serialize(obj1) === serialize(obj2);
  };

  var defaultCreateCache = function defaultCreateCache(options) {
    options = options || {};
    var apiKey = options.apiKey;
    var libraries = options.libraries || ['places'];
    var version = options.version || '3';
    var language = options.language || 'en';
    var url = options.url;
    var client = options.client;

    return (0, _ScriptCache.ScriptCache)({
      google: (0, _GoogleApi2.default)({
        apiKey: apiKey,
        language: language,
        libraries: libraries,
        version: version,
        url: url,
        client: client
      })
    });
  };

  var DefaultLoadingContainer = function DefaultLoadingContainer(props) {
    return _react2.default.createElement(
      'div',
      null,
      'Loading...'
    );
  };

  var wrapper = exports.wrapper = function wrapper(input) {
    return function (WrappedComponent) {
      var Wrapper = function (_React$Component) {
        _inherits(Wrapper, _React$Component);

        function Wrapper(props, context) {
          _classCallCheck(this, Wrapper);

          // Build options from input
          var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props, context));

          var options = typeof input === 'function' ? input(props) : input;

          // Initialize required Google scripts and other configured options
          _this.initialize(options);

          _this.state = {
            loaded: false,
            map: null,
            google: null,
            options: options
          };
          return _this;
        }

        _createClass(Wrapper, [{
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(props) {
            // Do not update input if it's not dynamic
            if (typeof input !== 'function') {
              return;
            }

            // Get options to compare
            var prevOptions = this.state.options;
            var options = typeof input === 'function' ? input(props) : input;

            // Ignore when options are not changed
            if (isSame(options, prevOptions)) {
              return;
            }

            // Initialize with new options
            this.initialize(options);

            // Save new options in component state,
            // and remove information about previous API handlers
            this.setState({
              options: options,
              loaded: false,
              google: null
            });
          }
        }, {
          key: 'initialize',
          value: function initialize(options) {
            // Avoid race condition: remove previous 'load' listener
            if (this.unregisterLoadHandler) {
              this.unregisterLoadHandler();
              this.unregisterLoadHandler = null;
            }

            // Load cache factory
            var createCache = options.createCache || defaultCreateCache;

            // Build script
            this.scriptCache = createCache(options);
            this.unregisterLoadHandler = this.scriptCache.google.onLoad(this.onLoad.bind(this));

            // Store information about loading container
            this.LoadingContainer = options.LoadingContainer || DefaultLoadingContainer;
          }
        }, {
          key: 'onLoad',
          value: function onLoad(err, tag) {
            this._gapi = window.google;

            this.setState({ loaded: true, google: this._gapi });
          }
        }, {
          key: 'render',
          value: function render() {
            var LoadingContainer = this.LoadingContainer;

            if (!this.state.loaded) {
              return _react2.default.createElement(LoadingContainer, null);
            }

            var props = Object.assign({}, this.props, {
              loaded: this.state.loaded,
              google: window.google
            });

            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(WrappedComponent, props),
              _react2.default.createElement('div', { ref: 'map' })
            );
          }
        }]);

        return Wrapper;
      }(_react2.default.Component);

      return Wrapper;
    };
  };

  exports.default = wrapper;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/components/HeatMap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/components/HeatMap.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! ../lib/String */ "./node_modules/google-maps-react/dist/lib/String.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _String) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HeatMap = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var evtNames = ['click', 'mouseover', 'recenter'];

  var wrappedPromise = function wrappedPromise() {
    var wrappedPromise = {},
        promise = new Promise(function (resolve, reject) {
      wrappedPromise.resolve = resolve;
      wrappedPromise.reject = reject;
    });
    wrappedPromise.then = promise.then.bind(promise);
    wrappedPromise.catch = promise.catch.bind(promise);
    wrappedPromise.promise = promise;

    return wrappedPromise;
  };

  var HeatMap = exports.HeatMap = function (_React$Component) {
    _inherits(HeatMap, _React$Component);

    function HeatMap() {
      _classCallCheck(this, HeatMap);

      return _possibleConstructorReturn(this, (HeatMap.__proto__ || Object.getPrototypeOf(HeatMap)).apply(this, arguments));
    }

    _createClass(HeatMap, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.heatMapPromise = wrappedPromise();
        this.renderHeatMap();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map || this.props.position !== prevProps.position) {
          if (this.heatMap) {
            this.heatMap.setMap(null);
            this.renderHeatMap();
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.heatMap) {
          this.heatMap.setMap(null);
        }
      }
    }, {
      key: 'renderHeatMap',
      value: function renderHeatMap() {
        var _this2 = this;

        var _props = this.props,
            map = _props.map,
            google = _props.google,
            positions = _props.positions,
            mapCenter = _props.mapCenter,
            icon = _props.icon,
            gradient = _props.gradient,
            _props$radius = _props.radius,
            radius = _props$radius === undefined ? 20 : _props$radius,
            _props$opacity = _props.opacity,
            opacity = _props$opacity === undefined ? 0.2 : _props$opacity,
            props = _objectWithoutProperties(_props, ['map', 'google', 'positions', 'mapCenter', 'icon', 'gradient', 'radius', 'opacity']);

        if (!google) {
          return null;
        }

        var data = positions.map(function (pos) {
          return new google.maps.LatLng(pos.lat, pos.lng);
        });

        var pref = _extends({
          map: map,
          gradient: gradient,
          radius: radius,
          opacity: opacity,
          data: data
        }, props);

        this.heatMap = new google.maps.visualization.HeatmapLayer(pref);

        this.heatMap.set('radius', radius === undefined ? 20 : radius);

        this.heatMap.set('opacity', opacity === undefined ? 0.2 : opacity);

        evtNames.forEach(function (e) {
          _this2.heatMap.addListener(e, _this2.handleEvent(e));
        });

        this.heatMapPromise.resolve(this.heatMap);
      }
    }, {
      key: 'getHeatMap',
      value: function getHeatMap() {
        return this.heatMapPromise;
      }
    }, {
      key: 'handleEvent',
      value: function handleEvent(evt) {
        var _this3 = this;

        return function (e) {
          var evtName = 'on' + (0, _String.camelize)(evt);
          if (_this3.props[evtName]) {
            _this3.props[evtName](_this3.props, _this3.heatMap, e);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return HeatMap;
  }(_react2.default.Component);

  HeatMap.propTypes = {
    position: _propTypes2.default.object,
    map: _propTypes2.default.object,
    icon: _propTypes2.default.string
  };

  evtNames.forEach(function (e) {
    return HeatMap.propTypes[e] = _propTypes2.default.func;
  });

  HeatMap.defaultProps = {
    name: 'HeatMap'
  };

  exports.default = HeatMap;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/components/InfoWindow.js":
/*!**********************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/components/InfoWindow.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! react-dom */ "react-dom"), __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _reactDom, _server) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.InfoWindow = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _server2 = _interopRequireDefault(_server);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var InfoWindow = exports.InfoWindow = function (_React$Component) {
    _inherits(InfoWindow, _React$Component);

    function InfoWindow() {
      _classCallCheck(this, InfoWindow);

      return _possibleConstructorReturn(this, (InfoWindow.__proto__ || Object.getPrototypeOf(InfoWindow)).apply(this, arguments));
    }

    _createClass(InfoWindow, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.renderInfoWindow();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _props = this.props,
            google = _props.google,
            map = _props.map;


        if (!google || !map) {
          return;
        }

        if (map !== prevProps.map) {
          this.renderInfoWindow();
        }

        if (this.props.position !== prevProps.position) {
          this.updatePosition();
        }

        if (this.props.children !== prevProps.children) {
          this.updateContent();
        }

        if (this.props.visible !== prevProps.visible || this.props.marker !== prevProps.marker || this.props.position !== prevProps.position) {
          this.props.visible ? this.openWindow() : this.closeWindow();
        }
      }
    }, {
      key: 'renderInfoWindow',
      value: function renderInfoWindow() {
        var _props2 = this.props,
            map = _props2.map,
            google = _props2.google,
            mapCenter = _props2.mapCenter,
            props = _objectWithoutProperties(_props2, ['map', 'google', 'mapCenter']);

        if (!google || !google.maps) {
          return;
        }

        var iw = this.infowindow = new google.maps.InfoWindow(_extends({
          content: ''
        }, props));

        google.maps.event.addListener(iw, 'closeclick', this.onClose.bind(this));
        google.maps.event.addListener(iw, 'domready', this.onOpen.bind(this));
      }
    }, {
      key: 'onOpen',
      value: function onOpen() {
        if (this.props.onOpen) {
          this.props.onOpen();
        }
      }
    }, {
      key: 'onClose',
      value: function onClose() {
        if (this.props.onClose) {
          this.props.onClose();
        }
      }
    }, {
      key: 'openWindow',
      value: function openWindow() {
        this.infowindow.open(this.props.map, this.props.marker);
      }
    }, {
      key: 'updatePosition',
      value: function updatePosition() {
        var pos = this.props.position;
        if (!(pos instanceof google.maps.LatLng)) {
          pos = pos && new google.maps.LatLng(pos.lat, pos.lng);
        }
        this.infowindow.setPosition(pos);
      }
    }, {
      key: 'updateContent',
      value: function updateContent() {
        var content = this.renderChildren();
        this.infowindow.setContent(content);
      }
    }, {
      key: 'closeWindow',
      value: function closeWindow() {
        this.infowindow.close();
      }
    }, {
      key: 'renderChildren',
      value: function renderChildren() {
        var children = this.props.children;

        return _server2.default.renderToString(children);
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return InfoWindow;
  }(_react2.default.Component);

  InfoWindow.propTypes = {
    children: _propTypes2.default.element.isRequired,
    map: _propTypes2.default.object,
    marker: _propTypes2.default.object,
    position: _propTypes2.default.object,
    visible: _propTypes2.default.bool,

    // callbacks
    onClose: _propTypes2.default.func,
    onOpen: _propTypes2.default.func
  };

  InfoWindow.defaultProps = {
    visible: false
  };

  exports.default = InfoWindow;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/components/Marker.js":
/*!******************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/components/Marker.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! ../lib/String */ "./node_modules/google-maps-react/dist/lib/String.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _String) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Marker = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var evtNames = ['click', 'dblclick', 'dragend', 'mousedown', 'mouseout', 'mouseover', 'mouseup', 'recenter'];

  var wrappedPromise = function wrappedPromise() {
    var wrappedPromise = {},
        promise = new Promise(function (resolve, reject) {
      wrappedPromise.resolve = resolve;
      wrappedPromise.reject = reject;
    });
    wrappedPromise.then = promise.then.bind(promise);
    wrappedPromise.catch = promise.catch.bind(promise);
    wrappedPromise.promise = promise;

    return wrappedPromise;
  };

  var Marker = exports.Marker = function (_React$Component) {
    _inherits(Marker, _React$Component);

    function Marker() {
      _classCallCheck(this, Marker);

      return _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).apply(this, arguments));
    }

    _createClass(Marker, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.markerPromise = wrappedPromise();
        this.renderMarker();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map || this.props.position !== prevProps.position || this.props.icon !== prevProps.icon) {
          if (this.marker) {
            this.marker.setMap(null);
          }
          this.renderMarker();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.marker) {
          this.marker.setMap(null);
        }
      }
    }, {
      key: 'renderMarker',
      value: function renderMarker() {
        var _this2 = this;

        var _props = this.props,
            map = _props.map,
            google = _props.google,
            position = _props.position,
            mapCenter = _props.mapCenter,
            icon = _props.icon,
            label = _props.label,
            draggable = _props.draggable,
            title = _props.title,
            props = _objectWithoutProperties(_props, ['map', 'google', 'position', 'mapCenter', 'icon', 'label', 'draggable', 'title']);

        if (!google) {
          return null;
        }

        var pos = position || mapCenter;
        if (!(pos instanceof google.maps.LatLng)) {
          pos = new google.maps.LatLng(pos.lat, pos.lng);
        }

        var pref = _extends({
          map: map,
          position: pos,
          icon: icon,
          label: label,
          title: title,
          draggable: draggable
        }, props);
        this.marker = new google.maps.Marker(pref);

        evtNames.forEach(function (e) {
          _this2.marker.addListener(e, _this2.handleEvent(e));
        });

        this.markerPromise.resolve(this.marker);
      }
    }, {
      key: 'getMarker',
      value: function getMarker() {
        return this.markerPromise;
      }
    }, {
      key: 'handleEvent',
      value: function handleEvent(evt) {
        var _this3 = this;

        return function (e) {
          var evtName = 'on' + (0, _String.camelize)(evt);
          if (_this3.props[evtName]) {
            _this3.props[evtName](_this3.props, _this3.marker, e);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return Marker;
  }(_react2.default.Component);

  Marker.propTypes = {
    position: _propTypes2.default.object,
    map: _propTypes2.default.object
  };

  evtNames.forEach(function (e) {
    return Marker.propTypes[e] = _propTypes2.default.func;
  });

  Marker.defaultProps = {
    name: 'Marker'
  };

  exports.default = Marker;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/components/Polygon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/components/Polygon.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! ../lib/arePathsEqual */ "./node_modules/google-maps-react/dist/lib/arePathsEqual.js"), __webpack_require__(/*! ../lib/String */ "./node_modules/google-maps-react/dist/lib/String.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _arePathsEqual, _String) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Polygon = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var evtNames = ['click', 'mouseout', 'mouseover'];

  var wrappedPromise = function wrappedPromise() {
    var wrappedPromise = {},
        promise = new Promise(function (resolve, reject) {
      wrappedPromise.resolve = resolve;
      wrappedPromise.reject = reject;
    });
    wrappedPromise.then = promise.then.bind(promise);
    wrappedPromise.catch = promise.catch.bind(promise);
    wrappedPromise.promise = promise;

    return wrappedPromise;
  };

  var Polygon = exports.Polygon = function (_React$Component) {
    _inherits(Polygon, _React$Component);

    function Polygon() {
      _classCallCheck(this, Polygon);

      return _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).apply(this, arguments));
    }

    _createClass(Polygon, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.polygonPromise = wrappedPromise();
        this.renderPolygon();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map || !(0, _arePathsEqual.arePathsEqual)(this.props.paths, prevProps.paths)) {
          if (this.polygon) {
            this.polygon.setMap(null);
          }
          this.renderPolygon();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.polygon) {
          this.polygon.setMap(null);
        }
      }
    }, {
      key: 'renderPolygon',
      value: function renderPolygon() {
        var _this2 = this;

        var _props = this.props,
            map = _props.map,
            google = _props.google,
            paths = _props.paths,
            strokeColor = _props.strokeColor,
            strokeOpacity = _props.strokeOpacity,
            strokeWeight = _props.strokeWeight,
            fillColor = _props.fillColor,
            fillOpacity = _props.fillOpacity,
            props = _objectWithoutProperties(_props, ['map', 'google', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'fillColor', 'fillOpacity']);

        if (!google) {
          return null;
        }

        var params = _extends({
          map: map,
          paths: paths,
          strokeColor: strokeColor,
          strokeOpacity: strokeOpacity,
          strokeWeight: strokeWeight,
          fillColor: fillColor,
          fillOpacity: fillOpacity
        }, props);

        this.polygon = new google.maps.Polygon(params);

        evtNames.forEach(function (e) {
          _this2.polygon.addListener(e, _this2.handleEvent(e));
        });

        this.polygonPromise.resolve(this.polygon);
      }
    }, {
      key: 'getPolygon',
      value: function getPolygon() {
        return this.polygonPromise;
      }
    }, {
      key: 'handleEvent',
      value: function handleEvent(evt) {
        var _this3 = this;

        return function (e) {
          var evtName = 'on' + (0, _String.camelize)(evt);
          if (_this3.props[evtName]) {
            _this3.props[evtName](_this3.props, _this3.polygon, e);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return Polygon;
  }(_react2.default.Component);

  Polygon.propTypes = {
    paths: _propTypes2.default.array,
    strokeColor: _propTypes2.default.string,
    strokeOpacity: _propTypes2.default.number,
    strokeWeight: _propTypes2.default.number,
    fillColor: _propTypes2.default.string,
    fillOpacity: _propTypes2.default.number
  };

  evtNames.forEach(function (e) {
    return Polygon.propTypes[e] = _propTypes2.default.func;
  });

  Polygon.defaultProps = {
    name: 'Polygon'
  };

  exports.default = Polygon;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/components/Polyline.js":
/*!********************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/components/Polyline.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! ../lib/arePathsEqual */ "./node_modules/google-maps-react/dist/lib/arePathsEqual.js"), __webpack_require__(/*! ../lib/String */ "./node_modules/google-maps-react/dist/lib/String.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _arePathsEqual, _String) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Polyline = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var evtNames = ['click', 'mouseout', 'mouseover'];

  var wrappedPromise = function wrappedPromise() {
    var wrappedPromise = {},
        promise = new Promise(function (resolve, reject) {
      wrappedPromise.resolve = resolve;
      wrappedPromise.reject = reject;
    });
    wrappedPromise.then = promise.then.bind(promise);
    wrappedPromise.catch = promise.catch.bind(promise);
    wrappedPromise.promise = promise;

    return wrappedPromise;
  };

  var Polyline = exports.Polyline = function (_React$Component) {
    _inherits(Polyline, _React$Component);

    function Polyline() {
      _classCallCheck(this, Polyline);

      return _possibleConstructorReturn(this, (Polyline.__proto__ || Object.getPrototypeOf(Polyline)).apply(this, arguments));
    }

    _createClass(Polyline, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.polylinePromise = wrappedPromise();
        this.renderPolyline();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.map !== prevProps.map || !(0, _arePathsEqual.arePathsEqual)(this.props.path, prevProps.path)) {
          if (this.polyline) {
            this.polyline.setMap(null);
          }
          this.renderPolyline();
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.polyline) {
          this.polyline.setMap(null);
        }
      }
    }, {
      key: 'renderPolyline',
      value: function renderPolyline() {
        var _this2 = this;

        var _props = this.props,
            map = _props.map,
            google = _props.google,
            path = _props.path,
            strokeColor = _props.strokeColor,
            strokeOpacity = _props.strokeOpacity,
            strokeWeight = _props.strokeWeight,
            props = _objectWithoutProperties(_props, ['map', 'google', 'path', 'strokeColor', 'strokeOpacity', 'strokeWeight']);

        if (!google) {
          return null;
        }

        var params = _extends({
          map: map,
          path: path,
          strokeColor: strokeColor,
          strokeOpacity: strokeOpacity,
          strokeWeight: strokeWeight
        }, props);

        this.polyline = new google.maps.Polyline(params);

        evtNames.forEach(function (e) {
          _this2.polyline.addListener(e, _this2.handleEvent(e));
        });

        this.polylinePromise.resolve(this.polyline);
      }
    }, {
      key: 'getPolyline',
      value: function getPolyline() {
        return this.polylinePromise;
      }
    }, {
      key: 'handleEvent',
      value: function handleEvent(evt) {
        var _this3 = this;

        return function (e) {
          var evtName = 'on' + (0, _String.camelize)(evt);
          if (_this3.props[evtName]) {
            _this3.props[evtName](_this3.props, _this3.polyline, e);
          }
        };
      }
    }, {
      key: 'render',
      value: function render() {
        return null;
      }
    }]);

    return Polyline;
  }(_react2.default.Component);

  Polyline.propTypes = {
    path: _propTypes2.default.array,
    strokeColor: _propTypes2.default.string,
    strokeOpacity: _propTypes2.default.number,
    strokeWeight: _propTypes2.default.number
  };

  evtNames.forEach(function (e) {
    return Polyline.propTypes[e] = _propTypes2.default.func;
  });

  Polyline.defaultProps = {
    name: 'Polyline'
  };

  exports.default = Polyline;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/google-maps-react/dist/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./GoogleApiComponent */ "./node_modules/google-maps-react/dist/GoogleApiComponent.js"), __webpack_require__(/*! ./components/Marker */ "./node_modules/google-maps-react/dist/components/Marker.js"), __webpack_require__(/*! ./components/InfoWindow */ "./node_modules/google-maps-react/dist/components/InfoWindow.js"), __webpack_require__(/*! ./components/HeatMap */ "./node_modules/google-maps-react/dist/components/HeatMap.js"), __webpack_require__(/*! ./components/Polygon */ "./node_modules/google-maps-react/dist/components/Polygon.js"), __webpack_require__(/*! ./components/Polyline */ "./node_modules/google-maps-react/dist/components/Polyline.js"), __webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"), __webpack_require__(/*! react-dom */ "react-dom"), __webpack_require__(/*! ./lib/String */ "./node_modules/google-maps-react/dist/lib/String.js"), __webpack_require__(/*! ./lib/cancelablePromise */ "./node_modules/google-maps-react/dist/lib/cancelablePromise.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _GoogleApiComponent, _Marker, _InfoWindow, _HeatMap, _Polygon, _Polyline, _react, _propTypes, _reactDom, _String, _cancelablePromise) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Map = exports.Polyline = exports.Polygon = exports.HeatMap = exports.InfoWindow = exports.Marker = exports.GoogleApiWrapper = undefined;
  Object.defineProperty(exports, 'GoogleApiWrapper', {
    enumerable: true,
    get: function () {
      return _GoogleApiComponent.wrapper;
    }
  });
  Object.defineProperty(exports, 'Marker', {
    enumerable: true,
    get: function () {
      return _Marker.Marker;
    }
  });
  Object.defineProperty(exports, 'InfoWindow', {
    enumerable: true,
    get: function () {
      return _InfoWindow.InfoWindow;
    }
  });
  Object.defineProperty(exports, 'HeatMap', {
    enumerable: true,
    get: function () {
      return _HeatMap.HeatMap;
    }
  });
  Object.defineProperty(exports, 'Polygon', {
    enumerable: true,
    get: function () {
      return _Polygon.Polygon;
    }
  });
  Object.defineProperty(exports, 'Polyline', {
    enumerable: true,
    get: function () {
      return _Polyline.Polyline;
    }
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var mapStyles = {
    container: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    },
    map: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0
    }
  };

  var evtNames = ['ready', 'click', 'dragend', 'recenter', 'bounds_changed', 'center_changed', 'dblclick', 'dragstart', 'heading_change', 'idle', 'maptypeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick', 'tilesloaded', 'tilt_changed', 'zoom_changed'];

  var Map = exports.Map = function (_React$Component) {
    _inherits(Map, _React$Component);

    function Map(props) {
      _classCallCheck(this, Map);

      var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

      if (!props.hasOwnProperty('google')) {
        throw new Error('You must include a `google` prop');
      }

      _this.listeners = {};
      _this.state = {
        currentLocation: {
          lat: _this.props.initialCenter.lat,
          lng: _this.props.initialCenter.lng
        }
      };
      return _this;
    }

    _createClass(Map, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        if (this.props.centerAroundCurrentLocation) {
          if (navigator && navigator.geolocation) {
            this.geoPromise = (0, _cancelablePromise.makeCancelable)(new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            }));

            this.geoPromise.promise.then(function (pos) {
              var coords = pos.coords;
              _this2.setState({
                currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
                }
              });
            }).catch(function (e) {
              return e;
            });
          }
        }
        this.loadMap();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
        if (this.props.visible !== prevProps.visible) {
          this.restyleMap();
        }
        if (this.props.zoom !== prevProps.zoom) {
          this.map.setZoom(this.props.zoom);
        }
        if (this.props.center !== prevProps.center) {
          this.setState({
            currentLocation: this.props.center
          });
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
          this.recenterMap();
        }
        if (this.props.bounds !== prevProps.bounds) {
          this.map.fitBounds(this.props.bounds);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this3 = this;

        var google = this.props.google;

        if (this.geoPromise) {
          this.geoPromise.cancel();
        }
        Object.keys(this.listeners).forEach(function (e) {
          google.maps.event.removeListener(_this3.listeners[e]);
        });
      }
    }, {
      key: 'loadMap',
      value: function loadMap() {
        var _this4 = this;

        if (this.props && this.props.google) {
          var google = this.props.google;

          var maps = google.maps;

          var mapRef = this.refs.map;
          var node = _reactDom2.default.findDOMNode(mapRef);
          var curr = this.state.currentLocation;
          var center = new maps.LatLng(curr.lat, curr.lng);

          var mapTypeIds = this.props.google.maps.MapTypeId || {};
          var mapTypeFromProps = String(this.props.mapType).toUpperCase();

          var mapConfig = Object.assign({}, {
            mapTypeId: mapTypeIds[mapTypeFromProps],
            center: center,
            zoom: this.props.zoom,
            maxZoom: this.props.maxZoom,
            minZoom: this.props.minZoom,
            clickableIcons: !!this.props.clickableIcons,
            disableDefaultUI: this.props.disableDefaultUI,
            zoomControl: this.props.zoomControl,
            mapTypeControl: this.props.mapTypeControl,
            scaleControl: this.props.scaleControl,
            streetViewControl: this.props.streetViewControl,
            panControl: this.props.panControl,
            rotateControl: this.props.rotateControl,
            fullscreenControl: this.props.fullscreenControl,
            scrollwheel: this.props.scrollwheel,
            draggable: this.props.draggable,
            keyboardShortcuts: this.props.keyboardShortcuts,
            disableDoubleClickZoom: this.props.disableDoubleClickZoom,
            noClear: this.props.noClear,
            styles: this.props.styles,
            gestureHandling: this.props.gestureHandling
          });

          Object.keys(mapConfig).forEach(function (key) {
            // Allow to configure mapConfig with 'false'
            if (mapConfig[key] === null) {
              delete mapConfig[key];
            }
          });

          this.map = new maps.Map(node, mapConfig);

          evtNames.forEach(function (e) {
            _this4.listeners[e] = _this4.map.addListener(e, _this4.handleEvent(e));
          });
          maps.event.trigger(this.map, 'ready');
          this.forceUpdate();
        }
      }
    }, {
      key: 'handleEvent',
      value: function handleEvent(evtName) {
        var _this5 = this;

        var timeout = void 0;
        var handlerName = 'on' + (0, _String.camelize)(evtName);

        return function (e) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          timeout = setTimeout(function () {
            if (_this5.props[handlerName]) {
              _this5.props[handlerName](_this5.props, _this5.map, e);
            }
          }, 0);
        };
      }
    }, {
      key: 'recenterMap',
      value: function recenterMap() {
        var map = this.map;

        var google = this.props.google;


        if (!google) return;
        var maps = google.maps;

        if (map) {
          var center = this.state.currentLocation;
          if (!(center instanceof google.maps.LatLng)) {
            center = new google.maps.LatLng(center.lat, center.lng);
          }
          // map.panTo(center)
          map.setCenter(center);
          maps.event.trigger(map, 'recenter');
        }
      }
    }, {
      key: 'restyleMap',
      value: function restyleMap() {
        if (this.map) {
          var google = this.props.google;

          google.maps.event.trigger(this.map, 'resize');
        }
      }
    }, {
      key: 'renderChildren',
      value: function renderChildren() {
        var _this6 = this;

        var children = this.props.children;


        if (!children) return;

        return _react2.default.Children.map(children, function (c) {
          if (!c) return;
          return _react2.default.cloneElement(c, {
            map: _this6.map,
            google: _this6.props.google,
            mapCenter: _this6.state.currentLocation
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var style = Object.assign({}, mapStyles.map, this.props.style, {
          display: this.props.visible ? 'inherit' : 'none'
        });

        var containerStyles = Object.assign({}, mapStyles.container, this.props.containerStyle);

        return _react2.default.createElement(
          'div',
          { style: containerStyles, className: this.props.className },
          _react2.default.createElement(
            'div',
            { style: style, ref: 'map' },
            'Loading map...'
          ),
          this.renderChildren()
        );
      }
    }]);

    return Map;
  }(_react2.default.Component);

  Map.propTypes = {
    google: _propTypes2.default.object,
    zoom: _propTypes2.default.number,
    centerAroundCurrentLocation: _propTypes2.default.bool,
    center: _propTypes2.default.object,
    initialCenter: _propTypes2.default.object,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    containerStyle: _propTypes2.default.object,
    visible: _propTypes2.default.bool,
    mapType: _propTypes2.default.string,
    maxZoom: _propTypes2.default.number,
    minZoom: _propTypes2.default.number,
    clickableIcons: _propTypes2.default.bool,
    disableDefaultUI: _propTypes2.default.bool,
    zoomControl: _propTypes2.default.bool,
    mapTypeControl: _propTypes2.default.bool,
    scaleControl: _propTypes2.default.bool,
    streetViewControl: _propTypes2.default.bool,
    panControl: _propTypes2.default.bool,
    rotateControl: _propTypes2.default.bool,
    fullscreenControl: _propTypes2.default.bool,
    scrollwheel: _propTypes2.default.bool,
    draggable: _propTypes2.default.bool,
    keyboardShortcuts: _propTypes2.default.bool,
    disableDoubleClickZoom: _propTypes2.default.bool,
    noClear: _propTypes2.default.bool,
    styles: _propTypes2.default.array,
    gestureHandling: _propTypes2.default.string,
    bounds: _propTypes2.default.object
  };

  evtNames.forEach(function (e) {
    return Map.propTypes[(0, _String.camelize)(e)] = _propTypes2.default.func;
  });

  Map.defaultProps = {
    zoom: 14,
    initialCenter: {
      lat: 37.774929,
      lng: -122.419416
    },
    center: {},
    centerAroundCurrentLocation: false,
    style: {},
    containerStyle: {},
    visible: true
  };

  exports.default = Map;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/lib/GoogleApi.js":
/*!**************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/lib/GoogleApi.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var GoogleApi = exports.GoogleApi = function GoogleApi(opts) {
    opts = opts || {};

    if (!opts.hasOwnProperty('apiKey')) {
      throw new Error('You must pass an apiKey to use GoogleApi');
    }

    var apiKey = opts.apiKey;
    var libraries = opts.libraries || ['places'];
    var client = opts.client;
    var URL = opts.url || 'https://maps.googleapis.com/maps/api/js';

    var googleVersion = opts.version || '3.31';

    var script = null;
    var google = typeof window !== 'undefined' && window.google || null;
    var loading = false;
    var channel = null;
    var language = opts.language;
    var region = opts.region || null;

    var onLoadEvents = [];

    var url = function url() {
      var url = URL;
      var params = {
        key: apiKey,
        callback: 'CALLBACK_NAME',
        libraries: libraries.join(','),
        client: client,
        v: googleVersion,
        channel: channel,
        language: language,
        region: region
      };

      var paramStr = Object.keys(params).filter(function (k) {
        return !!params[k];
      }).map(function (k) {
        return k + '=' + params[k];
      }).join('&');

      return url + '?' + paramStr;
    };

    return url();
  };

  exports.default = GoogleApi;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/lib/ScriptCache.js":
/*!****************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/lib/ScriptCache.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./windowOrGlobal */ "./node_modules/google-maps-react/dist/lib/windowOrGlobal.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports, window) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var counter = 0;
    var scriptMap = typeof window !== 'undefined' && window._scriptMap || new Map();
    var ScriptCache = exports.ScriptCache = function (global) {
        global._scriptMap = global._scriptMap || scriptMap;
        return function ScriptCache(scripts) {
            var Cache = {};

            Cache._onLoad = function (key) {
                return function (cb) {
                    var registered = true;

                    function unregister() {
                        registered = false;
                    }

                    var stored = scriptMap.get(key);

                    if (stored) {
                        stored.promise.then(function () {
                            if (registered) {
                                stored.error ? cb(stored.error) : cb(null, stored);
                            }

                            return stored;
                        });
                    } else {
                        // TODO:
                    }

                    return unregister;
                };
            };

            Cache._scriptTag = function (key, src) {
                if (!scriptMap.has(key)) {
                    // Server side rendering environments don't always have access to the `document` global.
                    // In these cases, we're not going to be able to return a script tag, so just return null.
                    if (typeof document === 'undefined') return null;

                    var tag = document.createElement('script');
                    var promise = new Promise(function (resolve, reject) {
                        var resolved = false,
                            errored = false,
                            body = document.getElementsByTagName('body')[0];

                        tag.type = 'text/javascript';
                        tag.async = false; // Load in order

                        var cbName = 'loaderCB' + counter++ + Date.now();
                        var cb = void 0;

                        var handleResult = function handleResult(state) {
                            return function (evt) {
                                var stored = scriptMap.get(key);
                                if (state === 'loaded') {
                                    stored.resolved = true;
                                    resolve(src);
                                    // stored.handlers.forEach(h => h.call(null, stored))
                                    // stored.handlers = []
                                } else if (state === 'error') {
                                    stored.errored = true;
                                    // stored.handlers.forEach(h => h.call(null, stored))
                                    // stored.handlers = [];
                                    reject(evt);
                                }
                                stored.loaded = true;

                                cleanup();
                            };
                        };

                        var cleanup = function cleanup() {
                            if (global[cbName] && typeof global[cbName] === 'function') {
                                global[cbName] = null;
                                delete global[cbName];
                            }
                        };

                        tag.onload = handleResult('loaded');
                        tag.onerror = handleResult('error');
                        tag.onreadystatechange = function () {
                            handleResult(tag.readyState);
                        };

                        // Pick off callback, if there is one
                        if (src.match(/callback=CALLBACK_NAME/)) {
                            src = src.replace(/(callback=)[^\&]+/, '$1' + cbName);
                            cb = window[cbName] = tag.onload;
                        } else {
                            tag.addEventListener('load', tag.onload);
                        }
                        tag.addEventListener('error', tag.onerror);

                        tag.src = src;
                        body.appendChild(tag);

                        return tag;
                    });
                    var initialState = {
                        loaded: false,
                        error: false,
                        promise: promise,
                        tag: tag
                    };
                    scriptMap.set(key, initialState);
                }
                return scriptMap.get(key);
            };

            // let scriptTags = document.querySelectorAll('script')
            //
            // NodeList.prototype.filter = Array.prototype.filter;
            // NodeList.prototype.map = Array.prototype.map;
            // const initialScripts = scriptTags
            //   .filter(s => !!s.src)
            //   .map(s => s.src.split('?')[0])
            //   .reduce((memo, script) => {
            //     memo[script] = script;
            //     return memo;
            //   }, {});

            Object.keys(scripts).forEach(function (key) {
                var script = scripts[key];

                var tag = window._scriptMap.has(key) ? window._scriptMap.get(key).tag : Cache._scriptTag(key, script);

                Cache[key] = {
                    tag: tag,
                    onLoad: Cache._onLoad(key)
                };
            });

            return Cache;
        };
    }(window);

    exports.default = ScriptCache;
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/lib/String.js":
/*!***********************************************************!*\
  !*** ./node_modules/google-maps-react/dist/lib/String.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var camelize = exports.camelize = function camelize(str) {
    return str.split(' ').map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
  };
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/lib/arePathsEqual.js":
/*!******************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/lib/arePathsEqual.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
   * Compares two path arrays of LatLng objects.
   */

  var arePathsEqual = exports.arePathsEqual = function arePathsEqual(pathA, pathB) {
    if (pathA === pathB) {
      return true;
    }
    if (!Array.isArray(pathA) || !Array.isArray(pathB)) {
      return false;
    }
    if (pathA.length !== pathB.length) {
      return false;
    }
    for (var i = 0; i < pathA.length; ++i) {
      if (pathA[i] === pathB[i]) {
        continue;
      }
      if (!isValidLatLng(pathA[i]) || !isValidLatLng(pathB[i])) {
        return false;
      }
      if (pathB[i].lat !== pathA[i].lat || pathB[i].lng !== pathA[i].lng) {
        return false;
      }
    }
    return true;
  };

  /**
   * Helper that checks whether an array consists of objects
   * with lat and lng properties
   * @param {object} elem the element to check
   * @returns {boolean} whether or not it's valid
   */
  var isValidLatLng = function isValidLatLng(elem) {
    return elem !== null && (typeof elem === 'undefined' ? 'undefined' : _typeof(elem)) === 'object' && elem.hasOwnProperty('lat') && elem.hasOwnProperty('lng');
  };
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/lib/cancelablePromise.js":
/*!**********************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/lib/cancelablePromise.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html

  var makeCancelable = exports.makeCancelable = function makeCancelable(promise) {
    var hasCanceled_ = false;

    var wrappedPromise = new Promise(function (resolve, reject) {
      promise.then(function (val) {
        return hasCanceled_ ? reject({ isCanceled: true }) : resolve(val);
      });
      promise.catch(function (error) {
        return hasCanceled_ ? reject({ isCanceled: true }) : reject(error);
      });
    });

    return {
      promise: wrappedPromise,
      cancel: function cancel() {
        hasCanceled_ = true;
      }
    };
  };
});

/***/ }),

/***/ "./node_modules/google-maps-react/dist/lib/windowOrGlobal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/google-maps-react/dist/lib/windowOrGlobal.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module) {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  module.exports = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object' && self.self === self && self || (typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.global === global && global || undefined;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/history/es/DOMUtils.js":
/*!*********************************************!*\
  !*** ./node_modules/history/es/DOMUtils.js ***!
  \*********************************************/
/*! exports provided: canUseDOM, addEventListener, removeEventListener, getConfirmation, supportsHistory, supportsPopStateOnHashChange, supportsGoWithoutReloadUsingHash, isExtraneousPopstateEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseDOM", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmation", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsHistory", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPopStateOnHashChange", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsGoWithoutReloadUsingHash", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExtraneousPopstateEvent", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "./node_modules/history/es/LocationUtils.js":
/*!**************************************************!*\
  !*** ./node_modules/history/es/LocationUtils.js ***!
  \**************************************************/
/*! exports provided: createLocation, locationsAreEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return locationsAreEqual; });
/* harmony import */ var resolve_pathname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resolve-pathname */ "./node_modules/resolve-pathname/index.js");
/* harmony import */ var value_equal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! value-equal */ "./node_modules/value-equal/index.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_2__["parsePath"])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(resolve_pathname__WEBPACK_IMPORTED_MODULE_0__["default"])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(value_equal__WEBPACK_IMPORTED_MODULE_1__["default"])(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/es/PathUtils.js":
/*!**********************************************!*\
  !*** ./node_modules/history/es/PathUtils.js ***!
  \**********************************************/
/*! exports provided: addLeadingSlash, stripLeadingSlash, hasBasename, stripBasename, stripTrailingSlash, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLeadingSlash", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripLeadingSlash", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasBasename", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripBasename", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripTrailingSlash", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

/***/ }),

/***/ "./node_modules/history/es/createBrowserHistory.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/es/createBrowserHistory.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/history/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "./node_modules/history/es/DOMUtils.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"], 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsHistory"])();
  var needsHashChangeListener = !Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsPopStateOnHashChange"])();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__["getConfirmation"] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripBasename"])(path, basename);

    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["isExtraneousPopstateEvent"])(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createBrowserHistory);

/***/ }),

/***/ "./node_modules/history/es/createHashHistory.js":
/*!******************************************************!*\
  !*** ./node_modules/history/es/createHashHistory.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/history/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUtils */ "./node_modules/history/es/DOMUtils.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripLeadingSlash"])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripLeadingSlash"],
    decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"]
  },
  slash: {
    encodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"],
    decodePath: _PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant__WEBPACK_IMPORTED_MODULE_1___default()(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["canUseDOM"], 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["supportsGoWithoutReloadUsingHash"])();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils__WEBPACK_IMPORTED_MODULE_5__["getConfirmation"] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripTrailingSlash"])(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["addLeadingSlash"])(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!basename || Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["hasBasename"])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["stripBasename"])(path, basename);

    return Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path);
  };

  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["locationsAreEqual"])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location));
  };

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        warning__WEBPACK_IMPORTED_MODULE_0___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(_PathUtils__WEBPACK_IMPORTED_MODULE_3__["createPath"])(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["addEventListener"])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(_DOMUtils__WEBPACK_IMPORTED_MODULE_5__["removeEventListener"])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createHashHistory);

/***/ }),

/***/ "./node_modules/history/es/createMemoryHistory.js":
/*!********************************************************!*\
  !*** ./node_modules/history/es/createMemoryHistory.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/history/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");
/* harmony import */ var _createTransitionManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createTransitionManager */ "./node_modules/history/es/createTransitionManager.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = Object(_createTransitionManager__WEBPACK_IMPORTED_MODULE_3__["default"])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(entry, undefined, createKey()) : Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = _PathUtils__WEBPACK_IMPORTED_MODULE_1__["createPath"];

  var push = function push(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = Object(_LocationUtils__WEBPACK_IMPORTED_MODULE_2__["createLocation"])(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ __webpack_exports__["default"] = (createMemoryHistory);

/***/ }),

/***/ "./node_modules/history/es/createTransitionManager.js":
/*!************************************************************!*\
  !*** ./node_modules/history/es/createTransitionManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/history/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning__WEBPACK_IMPORTED_MODULE_0___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createTransitionManager);

/***/ }),

/***/ "./node_modules/history/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/history/es/index.js ***!
  \******************************************/
/*! exports provided: createBrowserHistory, createHashHistory, createMemoryHistory, createLocation, locationsAreEqual, parsePath, createPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBrowserHistory */ "./node_modules/history/es/createBrowserHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createBrowserHistory", function() { return _createBrowserHistory__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createHashHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createHashHistory */ "./node_modules/history/es/createHashHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHashHistory", function() { return _createHashHistory__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMemoryHistory */ "./node_modules/history/es/createMemoryHistory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemoryHistory", function() { return _createMemoryHistory__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LocationUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/es/LocationUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocation", function() { return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__["createLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locationsAreEqual", function() { return _LocationUtils__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"]; });

/* harmony import */ var _PathUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/es/PathUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _PathUtils__WEBPACK_IMPORTED_MODULE_4__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPath", function() { return _PathUtils__WEBPACK_IMPORTED_MODULE_4__["createPath"]; });











/***/ }),

/***/ "./node_modules/history/node_modules/warning/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/history/node_modules/warning/browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/invariant/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/invariant/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/path-to-regexp/node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./node_modules/path-to-regexp/node_modules/isarray/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/path-to-regexp/node_modules/isarray/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.1
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var React = __webpack_require__(/*! react */ "react");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function () {};

{
  validateFormat = function (format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error = void 0;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

// Relying on the `invariant()` implementation lets us
// preserve the format and params in the www builds.

// TODO: this is special because it gets imported during build.

var ReactVersion = '16.6.3';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warningWithoutStack = function () {};

{
  warningWithoutStack = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (args.length > 8) {
      // Check before the condition to catch violations early.
      throw new Error('warningWithoutStack() currently supports at most 8 arguments.');
    }
    if (condition) {
      return;
    }
    if (typeof console !== 'undefined') {
      var argsWithFormat = args.map(function (item) {
        return '' + item;
      });
      argsWithFormat.unshift('Warning: ' + format);

      // We intentionally don't use spread (or .apply) directly because it
      // breaks IE9: https://github.com/facebook/react/issues/13610
      Function.prototype.apply.call(console.error, console, argsWithFormat);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  };
}

var warningWithoutStack$1 = warningWithoutStack;

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;


var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;

var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

var Resolved = 1;


function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + '(' + functionName + ')' : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }
  {
    if (typeof type.tag === 'number') {
      warningWithoutStack$1(false, 'Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }
  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }
  if (typeof type === 'string') {
    return type;
  }
  switch (type) {
    case REACT_CONCURRENT_MODE_TYPE:
      return 'ConcurrentMode';
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';
    case REACT_PORTAL_TYPE:
      return 'Portal';
    case REACT_PROFILER_TYPE:
      return 'Profiler';
    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';
    case REACT_SUSPENSE_TYPE:
      return 'Suspense';
  }
  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';
      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';
      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');
      case REACT_MEMO_TYPE:
        return getComponentName(type.type);
      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);
          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }
        }
    }
  }
  return null;
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = warningWithoutStack$1;

{
  warning = function (condition, format) {
    if (condition) {
      return;
    }
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();
    // eslint-disable-next-line react-internal/warning-and-invariant-args

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    warningWithoutStack$1.apply(undefined, [false, format + '%s'].concat(args, [stack]));
  };
}

var warning$1 = warning;

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

var describeComponentFrame = function (name, source, ownerName) {
  var sourceInfo = '';
  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');
    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);
        if (match) {
          var pathBeforeSlash = match[1];
          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }
    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }
  return '\n    in ' + (name || 'Unknown') + sourceInfo;
};

var enableHooks = false;
// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
var warnAboutDeprecatedLifecycles = false;

// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.


// Only used in www builds.
var enableSuspenseServerRenderer = false;

// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

var ReactDebugCurrentFrame$1 = void 0;
{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
}

var didWarnAboutInvalidateContextType = {};

var emptyObject = {};
{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;
  if (!contextTypes) {
    return emptyObject;
  }
  var maskedContext = {};
  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }
  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component', ReactDebugCurrentFrame$1.getCurrentStack);
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  for (var i = context._threadCount; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}

function processContext(type, context, threadID) {
  var contextType = type.contextType;
  if (typeof contextType === 'object' && contextType !== null) {
    {
      if (contextType.$$typeof !== REACT_CONTEXT_TYPE) {
        var name = getComponentName(type) || 'Component';
        if (!didWarnAboutInvalidateContextType[name]) {
          didWarnAboutInvalidateContextType[name] = true;
          warningWithoutStack$1(false, '%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext(). ' + 'Did you accidentally pass the Context.Provider instead?', name);
        }
      }
    }
    validateContextBounds(contextType, threadID);
    return contextType[threadID];
  } else {
    var maskedContext = maskContext(type, context);
    {
      if (type.contextTypes) {
        checkContextTypes(type.contextTypes, maskedContext, 'context');
      }
    }
    return maskedContext;
  }
}

// Allocates a new index for each request. Tries to stay as compact as possible so that these
// indices can be used to reference a tightly packaged array. As opposed to being used in a Map.
// The first allocated index is 1.

var nextAvailableThreadIDs = new Uint16Array(16);
for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}
nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;
  !(newSize <= 0x10000) ? invariant(false, 'Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic.') : void 0;
  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;
  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }
  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];
  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }
  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}

function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0;

// A simple string attribute.
// Attributes that aren't in the whitelist are presumed to have this type.
var STRING = 1;

// A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.
var BOOLEANISH_STRING = 2;

// A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
var BOOLEAN = 3;

// An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.
var OVERLOADED_BOOLEAN = 4;

// An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.
var NUMERIC = 5;

// An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.
var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
/* eslint-enable max-len */
var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';


var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};

function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty$1.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }
  if (hasOwnProperty$1.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }
  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }
  illegalAttributeNameCache[attributeName] = true;
  {
    warning$1(false, 'Invalid attribute name: `%s`', attributeName);
  }
  return false;
}

function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }
  return false;
}

function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }
  switch (typeof value) {
    case 'function':
    // $FlowIssue symbol is perfectly valid here
    case 'symbol':
      // eslint-disable-line
      return true;
    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }
        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }
    default:
      return false;
  }
}

function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }
  if (isCustomComponentTag) {
    return false;
  }
  if (propertyInfo !== null) {
    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;
      case OVERLOADED_BOOLEAN:
        return value === false;
      case NUMERIC:
        return isNaN(value);
      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }
  return false;
}

function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
}

// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var properties = {};

// These props are reserved by React. They shouldn't be written to the DOM.
['children', 'dangerouslySetInnerHTML',
// TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.
[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];

  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML boolean attributes.
['allowFullScreen', 'async',
// Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless',
// Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

// These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.
['checked',
// Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.
['capture', 'download'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be positive numbers.
['cols', 'rows', 'size', 'span'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null);
} // attributeNamespace
);

// These are HTML attributes that must be numbers.
['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null);
} // attributeNamespace
);

var CAMELIZE = /[\-\:]([a-z])/g;
var capitalize = function (token) {
  return token[1].toUpperCase();
};

// This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML whitelist.
// Some of these attributes can be hard to find. This list was created by
// scrapping the MDN documentation.
['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null);
} // attributeNamespace
);

// String SVG attributes with the xlink namespace.
['xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink');
});

// String SVG attributes with the xml namespace.
['xml:base', 'xml:lang', 'xml:space'].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace');
});

// Special case: this attribute exists both in HTML and SVG.
// Its "tabindex" attribute name is case-sensitive in SVG so we can't just use
// its React `tabIndex` name, like we do for attributes that exist only in HTML.
properties.tabIndex = new PropertyInfoRecord('tabIndex', STRING, false, // mustUseProperty
'tabindex', // attributeName
null);

// code copied and modified from escape-html
/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape = void 0;
  var html = '';
  var index = void 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;
      case 38:
        // &
        escape = '&amp;';
        break;
      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'
        break;
      case 60:
        // <
        escape = '&lt;';
        break;
      case 62:
        // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}
// end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }
  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */
function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

/**
 * Operations for dealing with DOM properties.
 */

/**
 * Creates markup for the ID property.
 *
 * @param {string} id Unescaped ID.
 * @return {string} Markup string.
 */


function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}

/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */
function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);
  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }
  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }
  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }
  return '';
}

/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */
function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }
  return name + '=' + quoteAttributeValueForBrowser(value);
}

function areHookInputsEqual(arr1, arr2) {
  // Don't bother comparing lengths in prod because these arrays should be
  // passed inline.
  {
    !(arr1.length === arr2.length) ? warning$1(false, 'Detected a variable number of hook dependencies. The length of the ' + 'dependencies array should be constant between renders.\n\n' + 'Previous: %s\n' + 'Incoming: %s', arr1.join(', '), arr2.join(', ')) : void 0;
  }
  for (var i = 0; i < arr1.length; i++) {
    // Inlined Object.is polyfill.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    var val1 = arr1[i];
    var val2 = arr2[i];
    if (val1 === val2 && (val1 !== 0 || 1 / val1 === 1 / val2) || val1 !== val1 && val2 !== val2 // eslint-disable-line no-self-compare
    ) {
        continue;
      }
    return false;
  }
  return true;
}

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null;
// Whether the work-in-progress hook is a re-rendered hook
var isReRender = false;
// Whether an update was scheduled during the currently executing render pass.
var didScheduleRenderPhaseUpdate = false;
// Lazily created map of render-phase updates
var renderPhaseUpdates = null;
// Counter to prevent infinite loops.
var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;

function resolveCurrentlyRenderingComponent() {
  !(currentlyRenderingComponent !== null) ? invariant(false, 'Hooks can only be called inside the body of a function component.') : void 0;
  return currentlyRenderingComponent;
}

function createHook() {
  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false;
      // Append to the end of the list
      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }
  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;
}

function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.

  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1;

    // Start over from the beginning of the list
    workInProgressHook = null;

    children = Component(props, refOrContext);
  }
  currentlyRenderingComponent = null;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;

  // These were reset above
  // currentlyRenderingComponent = null;
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

  return children;
}

function readContext(context, observedBits) {
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function useContext(context, observedBits) {
  resolveCurrentlyRenderingComponent();
  var threadID = currentThreadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  return useReducer(basicStateReducer,
  // useReducer has a special case to support lazy useState initializers
  initialState);
}

function useReducer(reducer, initialState, initialAction) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    var _queue = workInProgressHook.queue;
    var _dispatch = _queue.dispatch;
    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(_queue);
      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(_queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;
        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var _action = update.action;
          newState = reducer(newState, _action);
          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;

        return [newState, _dispatch];
      }
    }
    return [workInProgressHook.memoizedState, _dispatch];
  } else {
    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      if (typeof initialState === 'function') {
        initialState = initialState();
      }
    } else if (initialAction !== undefined && initialAction !== null) {
      initialState = reducer(initialState, initialAction);
    }
    workInProgressHook.memoizedState = initialState;
    var _queue2 = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };
    var _dispatch2 = _queue2.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue2);
    return [workInProgressHook.memoizedState, _dispatch2];
  }
}

function useMemo(nextCreate, inputs) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  var nextInputs = inputs !== undefined && inputs !== null ? inputs : [nextCreate];

  if (workInProgressHook !== null && workInProgressHook.memoizedState !== null) {
    var prevState = workInProgressHook.memoizedState;
    var prevInputs = prevState[1];
    if (areHookInputsEqual(nextInputs, prevInputs)) {
      return prevState[0];
    }
  }

  var nextValue = nextCreate();
  workInProgressHook.memoizedState = [nextValue, nextInputs];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;
  if (previousRef === null) {
    var ref = { current: initialValue };
    {
      Object.seal(ref);
    }
    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useMutationEffect(create, inputs) {
  warning$1(false, 'useMutationEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useMutationEffect should only be used in ' + 'components that render exclusively on the client.');
}

function useLayoutEffect(create, inputs) {
  warning$1(false, 'useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client.');
}

function dispatchAction(componentIdentity, queue, action) {
  !(numberOfReRenders < RE_RENDER_LIMIT) ? invariant(false, 'Too many re-renders. React limits the number of renders to prevent an infinite loop.') : void 0;

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };
    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }
    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);
    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;
      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }
      lastRenderPhaseUpdate.next = update;
    }
  } else {
    // This means an update has happened after the function component has
    // returned. On the server this is a no-op. In React Fiber, the update
    // would be scheduled for a future render.
  }
}

function noop() {}

var currentThreadID = 0;

function setCurrentThreadID(threadID) {
  currentThreadID = threadID;
}

var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useMutationEffect: useMutationEffect,
  useLayoutEffect: useLayoutEffect,
  // useImperativeMethods is not run in the server environment
  useImperativeMethods: noop,
  // Callbacks are not run in the server environment.
  useCallback: noop,
  // Effects are not run in the server environment.
  useEffect: noop
};
var DispatcherWithoutHooks = {
  readContext: readContext
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
};

// Assumes there is no parent namespace.
function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;
    case 'math':
      return MATH_NAMESPACE;
    default:
      return HTML_NAMESPACE;
  }
}

function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }
  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  }
  // By default, pass namespace below.
  return parentNamespace;
}

var ReactDebugCurrentFrame$2 = null;

var ReactControlledValuePropTypes = {
  checkPropTypes: null
};

{
  ReactDebugCurrentFrame$2 = ReactSharedInternals.ReactDebugCurrentFrame;

  var hasReadOnlyValue = {
    button: true,
    checkbox: true,
    image: true,
    hidden: true,
    radio: true,
    reset: true,
    submit: true
  };

  var propTypes = {
    value: function (props, propName, componentName) {
      if (hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled || props[propName] == null) {
        return null;
      }
      return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    },
    checked: function (props, propName, componentName) {
      if (props.onChange || props.readOnly || props.disabled || props[propName] == null) {
        return null;
      }
      return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  };

  /**
   * Provide a linked `value` attribute for controlled forms. You should not use
   * this outside of the ReactDOM controlled form components.
   */
  ReactControlledValuePropTypes.checkPropTypes = function (tagName, props) {
    checkPropTypes(propTypes, props, 'prop', tagName, ReactDebugCurrentFrame$2.getStackAddendum);
  };
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.

var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

// For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

// TODO: We can remove this if we add invariantWithStack()
// or add stack by default to invariants where possible.
var HTML = '__html';

var ReactDebugCurrentFrame$3 = null;
{
  ReactDebugCurrentFrame$3 = ReactSharedInternals.ReactDebugCurrentFrame;
}

function assertValidProps(tag, props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  if (voidElementTags[tag]) {
    !(props.children == null && props.dangerouslySetInnerHTML == null) ? invariant(false, '%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s', tag, ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
  }
  if (props.dangerouslySetInnerHTML != null) {
    !(props.children == null) ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : void 0;
    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.') : void 0;
  }
  {
    !(props.suppressContentEditableWarning || !props.contentEditable || props.children == null) ? warning$1(false, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : void 0;
  }
  !(props.style == null || typeof props.style === 'object') ? invariant(false, 'The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + \'em\'}} when using JSX.%s', ReactDebugCurrentFrame$3.getStackAddendum()) : void 0;
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */
function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }
  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this whitelist too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;
    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported style property %s. Did you mean %s?', name,
    // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning$1(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning$1(false, "Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning$1(false, '`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning$1(false, '`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0, // state
  'aria-details': 0,
  'aria-disabled': 0, // state
  'aria-hidden': 0, // state
  'aria-invalid': 0, // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  if (hasOwnProperty$2.call(warnedProperties, name) && warnedProperties[name]) {
    return true;
  }

  if (rARIACamel.test(name)) {
    var ariaName = 'aria-' + name.slice(4).toLowerCase();
    var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (correctName == null) {
      warning$1(false, 'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);
      warnedProperties[name] = true;
      return true;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== correctName) {
      warning$1(false, 'Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);
      warnedProperties[name] = true;
      return true;
    }
  }

  if (rARIA.test(name)) {
    var lowerCasedName = name.toLowerCase();
    var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null;

    // If this is an aria-* attribute, but is not listed in the known DOM
    // DOM properties, then it is an invalid aria-* attribute.
    if (standardName == null) {
      warnedProperties[name] = true;
      return false;
    }
    // aria-* attributes should be lowercase; suggest the lowercase version.
    if (name !== standardName) {
      warning$1(false, 'Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);
      warnedProperties[name] = true;
      return true;
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  var invalidProps = [];

  for (var key in props) {
    var isValid = validateProperty(type, key);
    if (!isValid) {
      invalidProps.push(key);
    }
  }

  var unknownPropString = invalidProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');

  if (invalidProps.length === 1) {
    warning$1(false, 'Invalid aria prop %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  } else if (invalidProps.length > 1) {
    warning$1(false, 'Invalid aria props %s on <%s> tag. ' + 'For details, see https://fb.me/invalid-aria-prop', unknownPropString, type);
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;

function validateProperties$1(type, props) {
  if (type !== 'input' && type !== 'textarea' && type !== 'select') {
    return;
  }

  if (props != null && props.value === null && !didWarnValueNull) {
    didWarnValueNull = true;
    if (type === 'select' && props.multiple) {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
    } else {
      warning$1(false, '`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
    }
  }
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */

/**
 * Ordered list of injected plugins.
 */


/**
 * Mapping from event name to dispatch config
 */


/**
 * Mapping from registration name to plugin module
 */
var registrationNameModules = {};

/**
 * Mapping from registration name to event name
 */


/**
 * Mapping from lowercase registration names to the properly cased version,
 * used to warn in the case of missing event handlers. Available
 * only in true.
 * @type {Object}
 */
var possibleRegistrationNames = {};
// Trust the developer to only use possibleRegistrationNames in true

/**
 * Injects an ordering of plugins (by plugin name). This allows the ordering
 * to be decoupled from injection of the actual plugins so that ordering is
 * always deterministic regardless of packaging, on-the-fly injection, etc.
 *
 * @param {array} InjectedEventPluginOrder
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginOrder}
 */


/**
 * Injects plugins to be used by `EventPluginHub`. The plugin names must be
 * in the ordering injected by `injectEventPluginOrder`.
 *
 * Plugins can be injected as part of page initialization or on-the-fly.
 *
 * @param {object} injectedNamesToPlugins Map from names to plugin modules.
 * @internal
 * @see {EventPluginHub.injection.injectEventPluginsByName}
 */

// When adding attributes to the HTML or SVG whitelist, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',

  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, canUseEventSystem) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();
    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      warning$1(false, 'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');
      warnedProperties$1[name] = true;
      return true;
    }

    // We can't rely on the event system being injected on the server.
    if (canUseEventSystem) {
      if (registrationNameModules.hasOwnProperty(name)) {
        return true;
      }
      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;
      if (registrationName != null) {
        warning$1(false, 'Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);
        warnedProperties$1[name] = true;
        return true;
      }
      if (EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Unknown event handler property `%s`. It will be ignored.', name);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        warning$1(false, 'Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Let the ARIA attribute hook validate ARIA attributes
    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      warning$1(false, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      warning$1(false, 'The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');
      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      warning$1(false, 'Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      warning$1(false, 'Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);
      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED;

    // Known attributes should match the casing specified in the property config.
    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];
      if (standardName !== name) {
        warning$1(false, 'Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);
        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      warning$1(false, 'React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);
      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        warning$1(false, 'Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }
      warnedProperties$1[name] = true;
      return true;
    }

    // Now that we've validated casing, do not validate
    // data types for reserved props
    if (isReserved) {
      return true;
    }

    // Warn when a known attribute is a bad type
    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    }

    // Warn when passing the strings 'false' or 'true' into a boolean prop
    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      warning$1(false, 'Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);
      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, canUseEventSystem) {
  var unknownProps = [];
  for (var key in props) {
    var isValid = validateProperty$1(type, key, props[key], canUseEventSystem);
    if (!isValid) {
      unknownProps.push(key);
    }
  }

  var unknownPropString = unknownProps.map(function (prop) {
    return '`' + prop + '`';
  }).join(', ');
  if (unknownProps.length === 1) {
    warning$1(false, 'Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  } else if (unknownProps.length > 1) {
    warning$1(false, 'Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://fb.me/react-attribute-behavior', unknownPropString, type);
  }
};

function validateProperties$2(type, props, canUseEventSystem) {
  if (isCustomComponent(type, props)) {
    return;
  }
  warnUnknownProperties(type, props, canUseEventSystem);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Based on reading the React.Children implementation. TODO: type this somewhere?

var toArray = React.Children.toArray;

// This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.
var currentDebugStacks = [];

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame = void 0;
var prevGetCurrentStackImpl = null;
var getCurrentServerStackImpl = function () {
  return '';
};
var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};
var pushCurrentDebugStack = function (stack) {};
var pushElementToDebugStack = function (element) {};
var popCurrentDebugStack = function () {};
var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, /* canUseEventSystem */false);
  };

  describeStackFrame = function (element) {
    var source = element._source;
    var type = element.type;
    var name = getComponentName(type);
    var ownerName = null;
    return describeComponentFrame(name, source, ownerName);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame.getCurrentStack;
      ReactDebugCurrentFrame.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1];
    // Take the innermost executing frame (e.g. <Foo>),
    var frame = stack[stack.length - 1];
    // and record that it has one more element associated with it.
    frame.debugElementStack.push(element);
    // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    }
    // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.
    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = '';
    // Go through every frame in the stack from the innermost one.
    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i];
      // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.
      var _debugElementStack = frame.debugElementStack;
      for (var ii = _debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(_debugElementStack[ii]);
      }
    }
    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
};

// We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    !VALID_TAG_REGEX.test(tag) ? invariant(false, 'Invalid tag: %s', tag) : void 0;
    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};
var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }
  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];
    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }
    if (styleValue != null) {
      serialized += delimiter + processStyleName(styleName) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);

      delimiter = ';';
    }
  }
  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;
    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    warningWithoutStack$1(false, '%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;
  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;
    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }
  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }
  var element = children;
  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }
  var fragmentChildren = element.props.children;
  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }
  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }
  var content = '';
  // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.
  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }
    content += child;
    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;
        warning$1(false, 'Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;

  for (var propKey in props) {
    if (!hasOwnProperty.call(props, propKey)) {
      continue;
    }
    var propValue = props[propKey];
    if (propValue == null) {
      continue;
    }
    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }
    var markup = null;
    if (isCustomComponent(tagLowercase, props)) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }
    if (markup) {
      ret += ' ' + markup;
    }
  }

  // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.
  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }
  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    invariant(false, '%s(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.', getComponentName(type) || 'Component');
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;
    {
      pushElementToDebugStack(element);
    }
    if (typeof Component !== 'function') {
      break;
    }
    processChild(element, Component);
  }

  // Extra closure so queue and replace can be captured properly
  function processChild(element, Component) {
    var publicContext = processContext(Component, context, threadID);

    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }
        queue.push(currentPartialState);
      }
    };

    var inst = void 0;
    if (shouldConstruct(Component)) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUninitializedState[componentName]) {
              warningWithoutStack$1(false, '`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);
              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';
            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              warningWithoutStack$1(false, '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);
              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            warningWithoutStack$1(false, "The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);
            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }
      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      if (inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;

    var initialState = inst.state;
    if (initialState === undefined) {
      inst.state = initialState = null;
    }
    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if (warnAboutDeprecatedLifecycles && inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName3 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName3]) {
              lowPriorityWarning$1(false, '%s: componentWillMount() is deprecated and will be ' + 'removed in the next major version. Read about the motivations ' + 'behind this change: ' + 'https://fb.me/react-async-component-lifecycle-hooks' + '\n\n' + 'As a temporary workaround, you can rename to ' + 'UNSAFE_componentWillMount instead.', _componentName3);
              didWarnAboutDeprecatedWillMount[_componentName3] = true;
            }
          }
        }

        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }
      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }
      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;
          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];
            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;
            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }
          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }
    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }
    validateRenderResult(child, Component);

    var childContext = void 0;
    if (typeof inst.getChildContext === 'function') {
      var childContextTypes = Component.childContextTypes;
      if (typeof childContextTypes === 'object') {
        childContext = inst.getChildContext();
        for (var contextKey in childContext) {
          !(contextKey in childContextTypes) ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', getComponentName(Component) || 'Unknown', contextKey) : void 0;
        }
      } else {
        warningWithoutStack$1(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
      }
    }
    if (childContext) {
      context = _assign({}, context, childContext);
    }
  }
  return { child: child, context: context };
}

var ReactDOMServerRenderer = function () {
  // DEV-only

  // TODO: type this more strictly:
  function ReactDOMServerRenderer(children, makeStaticMarkup) {
    _classCallCheck(this, ReactDOMServerRenderer);

    var flatChildren = flattenTopLevelChildren(children);

    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };
    {
      topFrame.debugElementStack = [];
    }
    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0;

    // Context (new API)
    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = [];
    {
      this.contextProviderStack = [];
    }
  }

  ReactDOMServerRenderer.prototype.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      freeThreadID(this.threadID);
    }
  };

  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */

  ReactDOMServerRenderer.prototype.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID];

    // Remember which value to restore this context to on our way up.
    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;
    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    }

    // Mutate the current value.
    context[threadID] = provider.props.value;
  };

  ReactDOMServerRenderer.prototype.popProvider = function popProvider(provider) {
    var index = this.contextIndex;
    {
      !(index > -1 && provider === this.contextProviderStack[index]) ? warningWithoutStack$1(false, 'Unexpected pop.') : void 0;
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index];

    // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.
    this.contextStack[index] = null;
    this.contextValueStack[index] = null;
    {
      this.contextProviderStack[index] = null;
    }
    this.contextIndex--;

    // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.
    context[this.threadID] = previousValue;
  };

  ReactDOMServerRenderer.prototype.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevThreadID = currentThreadID;
    setCurrentThreadID(this.threadID);
    var prevDispatcher = ReactCurrentOwner.currentDispatcher;
    if (enableHooks) {
      ReactCurrentOwner.currentDispatcher = Dispatcher;
    } else {
      ReactCurrentOwner.currentDispatcher = DispatcherWithoutHooks;
    }
    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;
      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }
        var frame = this.stack[this.stack.length - 1];
        if (suspended || frame.childIndex >= frame.children.length) {
          var _footer = frame.footer;
          if (_footer !== '') {
            this.previousWasTextNode = false;
          }
          this.stack.pop();
          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false;
              // If rendering was suspended at this boundary, render the fallbackFrame
              var _fallbackFrame = frame.fallbackFrame;
              !_fallbackFrame ? invariant(false, 'suspense fallback not found, something is broken') : void 0;
              this.stack.push(_fallbackFrame);
              // Skip flushing output since we're switching to the fallback
              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          }

          // Flush output
          out[this.suspenseDepth] += _footer;
          continue;
        }
        var child = frame.children[frame.childIndex++];

        var outBuffer = '';
        {
          pushCurrentDebugStack(this.stack);
          // We're starting work on this frame, so reset its inner stack.
          frame.debugElementStack.length = 0;
        }
        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (enableSuspenseServerRenderer && typeof err.then === 'function') {
            suspended = true;
          } else {
            throw err;
          }
        } finally {
          {
            popCurrentDebugStack();
          }
        }
        if (out.length <= this.suspenseDepth) {
          out.push('');
        }
        out[this.suspenseDepth] += outBuffer;
      }
      return out[0];
    } finally {
      ReactCurrentOwner.currentDispatcher = prevDispatcher;
      setCurrentThreadID(prevThreadID);
    }
  };

  ReactDOMServerRenderer.prototype.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;
      if (text === '') {
        return '';
      }
      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }
      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }
      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild = void 0;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;
          !($$typeof !== REACT_PORTAL_TYPE) ? invariant(false, 'Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.') : void 0;
          // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.
          invariant(false, 'Unknown element-like object type: %s. This is likely a bug in React. Please file an issue.', $$typeof.toString());
        }
        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };
        {
          frame.debugElementStack = [];
        }
        this.stack.push(frame);
        return '';
      }
      // Safe because we just checked it's an element.
      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        case REACT_STRICT_MODE_TYPE:
        case REACT_CONCURRENT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);
            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };
            {
              _frame.debugElementStack = [];
            }
            this.stack.push(_frame);
            return '';
          }
        case REACT_SUSPENSE_TYPE:
          {
            if (enableSuspenseServerRenderer) {
              var fallbackChildren = toArray(nextChild.props.fallback);
              var _nextChildren2 = toArray(nextChild.props.children);
              var _fallbackFrame2 = {
                type: null,
                domNamespace: parentNamespace,
                children: fallbackChildren,
                childIndex: 0,
                context: context,
                footer: '',
                out: ''
              };
              var _frame2 = {
                fallbackFrame: _fallbackFrame2,
                type: REACT_SUSPENSE_TYPE,
                domNamespace: parentNamespace,
                children: _nextChildren2,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame2.debugElementStack = [];
                _fallbackFrame2.debugElementStack = [];
              }
              this.stack.push(_frame2);
              this.suspenseDepth++;
              return '';
            } else {
              invariant(false, 'ReactDOMServer does not yet support Suspense.');
            }
          }
        // eslint-disable-next-line-no-fallthrough
        default:
          break;
      }
      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;
              var _nextChildren3 = void 0;
              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren3 = elementType.render(element.props, element.ref);
              _nextChildren3 = finishHooks(elementType.render, element.props, _nextChildren3, element.ref);
              _nextChildren3 = toArray(_nextChildren3);
              var _frame3 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren3,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame3.debugElementStack = [];
              }
              this.stack.push(_frame3);
              return '';
            }
          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren4 = [React.createElement(elementType.type, _assign({ ref: _element.ref }, _element.props))];
              var _frame4 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren4,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame4.debugElementStack = [];
              }
              this.stack.push(_frame4);
              return '';
            }
          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;
              var _nextChildren5 = toArray(nextProps.children);
              var _frame5 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame5.debugElementStack = [];
              }

              this.pushProvider(provider);

              this.stack.push(_frame5);
              return '';
            }
          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type;
              // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.
              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;
                      warning$1(false, 'Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }
              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren6 = toArray(_nextProps.children(nextValue));
              var _frame6 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };
              {
                _frame6.debugElementStack = [];
              }
              this.stack.push(_frame6);
              return '';
            }
          case REACT_LAZY_TYPE:
            invariant(false, 'ReactDOMServer does not yet support lazy-loaded components.');
        }
      }

      var info = '';
      {
        var owner = nextElement._owner;
        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }
        var ownerName = owner ? getComponentName(owner) : null;
        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }
      invariant(false, 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s', elementType == null ? elementType : typeof elementType, info);
    }
  };

  ReactDOMServerRenderer.prototype.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();

    var namespace = parentNamespace;
    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        !(tag === element.type) ? warning$1(false, '<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type) : void 0;
      }
    }

    validateDangerousTag(tag);

    var props = element.props;
    if (tag === 'input') {
      {
        ReactControlledValuePropTypes.checkPropTypes('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          warning$1(false, '%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultChecked = true;
        }
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          warning$1(false, '%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components', 'A component', props.type);
          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        ReactControlledValuePropTypes.checkPropTypes('textarea', props);
        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          warning$1(false, 'Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;
      if (initialValue == null) {
        var defaultValue = props.defaultValue;
        // TODO (yungsters): Remove support for children content in <textarea>.
        var textareaChildren = props.children;
        if (textareaChildren != null) {
          {
            warning$1(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }
          !(defaultValue == null) ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : void 0;
          if (Array.isArray(textareaChildren)) {
            !(textareaChildren.length <= 1) ? invariant(false, '<textarea> can only have at most one child.') : void 0;
            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }
        if (defaultValue == null) {
          defaultValue = '';
        }
        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        ReactControlledValuePropTypes.checkPropTypes('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];
          if (props[propName] == null) {
            continue;
          }
          var isArray = Array.isArray(props[propName]);
          if (props.multiple && !isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            warning$1(false, 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          warning$1(false, 'Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://fb.me/react-controlled-components');
          didWarnDefaultSelectValue = true;
        }
      }
      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);
      if (selectValue != null) {
        var value = void 0;
        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }
        selected = false;
        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);

    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';
    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }
    var children = void 0;
    var innerMarkup = getNonChildrenInnerMarkup(props);
    if (innerMarkup != null) {
      children = [];
      if (newlineEatingTags[tag] && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }
      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }
    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };
    {
      frame.debugElementStack = [];
    }
    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */
function renderToString(element) {
  var renderer = new ReactDOMServerRenderer(element, false);
  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  var renderer = new ReactDOMServerRenderer(element, true);
  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  invariant(false, 'ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.');
}

function renderToStaticNodeStream() {
  invariant(false, 'ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.');
}

// Note: when changing this, also consider https://github.com/facebook/react/issues/11526
var ReactDOMServerBrowser = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup,
  renderToNodeStream: renderToNodeStream,
  renderToStaticNodeStream: renderToStaticNodeStream,
  version: ReactVersion
};

var ReactDOMServerBrowser$1 = Object.freeze({
	default: ReactDOMServerBrowser
});

var ReactDOMServer = ( ReactDOMServerBrowser$1 && ReactDOMServerBrowser ) || ReactDOMServerBrowser$1;

// TODO: decide on the top-level export form.
// This is hacky but makes it work with both Rollup and Jest
var server_browser = ReactDOMServer.default || ReactDOMServer;

module.exports = server_browser;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "./node_modules/react-router-dom/es/BrowserRouter.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-router-dom/es/BrowserRouter.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createBrowserHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_4__["default"], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

BrowserRouter.propTypes = {
  basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  forceRefresh: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};


/* harmony default export */ __webpack_exports__["default"] = (BrowserRouter);

/***/ }),

/***/ "./node_modules/react-router-dom/es/HashRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/es/HashRouter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createHashHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_4__["default"], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

HashRouter.propTypes = {
  basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  hashType: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};


/* harmony default export */ __webpack_exports__["default"] = (HashRouter);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Link.js":
/*!**************************************************!*\
  !*** ./node_modules/react-router-dom/es/Link.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    invariant__WEBPACK_IMPORTED_MODULE_2___default()(this.context.router, "You should not use <Link> outside a <Router>");

    invariant__WEBPACK_IMPORTED_MODULE_2___default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Link.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  target: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func])
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      createHref: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./node_modules/react-router-dom/es/MemoryRouter.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/MemoryRouter.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_MemoryRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/MemoryRouter */ "./node_modules/react-router-dom/node_modules/react-router/es/MemoryRouter.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_MemoryRouter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-router-dom/es/NavLink.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/es/Route.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/es/Link.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = _objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : _typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? _extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: _Link__WEBPACK_IMPORTED_MODULE_3__["default"].propTypes.to,
  exact: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  strict: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  activeStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  "aria-current": prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Prompt.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Prompt.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Prompt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Prompt */ "./node_modules/react-router-dom/node_modules/react-router/es/Prompt.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Prompt__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Redirect.js":
/*!******************************************************!*\
  !*** ./node_modules/react-router-dom/es/Redirect.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Redirect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Redirect */ "./node_modules/react-router-dom/node_modules/react-router/es/Redirect.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Redirect__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Route.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/Route.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Route */ "./node_modules/react-router-dom/node_modules/react-router/es/Route.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Route__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Router.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Router.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Router */ "./node_modules/react-router-dom/node_modules/react-router/es/Router.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Router__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/StaticRouter.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/StaticRouter.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_StaticRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/StaticRouter */ "./node_modules/react-router-dom/node_modules/react-router/es/StaticRouter.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_StaticRouter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/Switch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-router-dom/es/Switch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/Switch */ "./node_modules/react-router-dom/node_modules/react-router/es/Switch.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_Switch__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/generatePath.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-router-dom/es/generatePath.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_generatePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/generatePath */ "./node_modules/react-router-dom/node_modules/react-router/es/generatePath.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_generatePath__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-router-dom/es/index.js ***!
  \***************************************************/
/*! exports provided: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrowserRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowserRouter */ "./node_modules/react-router-dom/es/BrowserRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return _BrowserRouter__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _HashRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HashRouter */ "./node_modules/react-router-dom/es/HashRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return _HashRouter__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./node_modules/react-router-dom/es/Link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MemoryRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MemoryRouter */ "./node_modules/react-router-dom/es/MemoryRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return _MemoryRouter__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-router-dom/es/NavLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return _NavLink__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Prompt */ "./node_modules/react-router-dom/es/Prompt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return _Prompt__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Redirect */ "./node_modules/react-router-dom/es/Redirect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return _Redirect__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/es/Route.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _Route__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/es/Router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _Router__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _StaticRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./StaticRouter */ "./node_modules/react-router-dom/es/StaticRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return _StaticRouter__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-router-dom/es/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return _Switch__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/es/generatePath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return _generatePath__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/es/matchPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _matchPath__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _withRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./withRouter */ "./node_modules/react-router-dom/es/withRouter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return _withRouter__WEBPACK_IMPORTED_MODULE_13__["default"]; });






























/***/ }),

/***/ "./node_modules/react-router-dom/es/matchPath.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router-dom/es/matchPath.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_matchPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/matchPath */ "./node_modules/react-router-dom/node_modules/react-router/es/matchPath.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_matchPath__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/es/withRouter.js":
/*!********************************************************!*\
  !*** ./node_modules/react-router-dom/es/withRouter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router_es_withRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router/es/withRouter */ "./node_modules/react-router-dom/node_modules/react-router/es/withRouter.js");
// Written in this round about way for babel-transform-imports


/* harmony default export */ __webpack_exports__["default"] = (react_router_es_withRouter__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/MemoryRouter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/MemoryRouter.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/node_modules/react-router/es/Router.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_4__["default"], { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

MemoryRouter.propTypes = {
  initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};


/* harmony default export */ __webpack_exports__["default"] = (MemoryRouter);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/Prompt.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/Prompt.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    invariant__WEBPACK_IMPORTED_MODULE_2___default()(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Prompt.propTypes = {
  when: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      block: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Prompt);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/Redirect.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/Redirect.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var _generatePath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generatePath */ "./node_modules/react-router-dom/node_modules/react-router/es/generatePath.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck(this, Redirect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(prevProps.to);
    var nextTo = Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(this.props.to);

    if (Object(history__WEBPACK_IMPORTED_MODULE_4__["locationsAreEqual"])(prevTo, nextTo)) {
      warning__WEBPACK_IMPORTED_MODULE_2___default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return Object(_generatePath__WEBPACK_IMPORTED_MODULE_5__["default"])(to, computedMatch.params);
      } else {
        return _extends({}, to, {
          pathname: Object(_generatePath__WEBPACK_IMPORTED_MODULE_5__["default"])(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Redirect.propTypes = {
  computedMatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, // private, from <Switch>
  push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  from: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]).isRequired
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      replace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  }).isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Redirect);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/Route.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/Route.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/node_modules/react-router/es/matchPath.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var isEmptyChildren = function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    invariant__WEBPACK_IMPORTED_MODULE_1___default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return Object(_matchPath__WEBPACK_IMPORTED_MODULE_4__["default"])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(this.props.component && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(this.props.render && this.props.children && !isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning__WEBPACK_IMPORTED_MODULE_0___default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !isEmptyChildren(children)) return react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children);

    return null;
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Route.propTypes = {
  computedMatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, // private, from <Switch>
  path: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  exact: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  strict: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  sensitive: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  render: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node]),
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Route.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    route: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
  })
};
Route.childContextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Route);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/Router.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/Router.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    invariant__WEBPACK_IMPORTED_MODULE_1___default()(children == null || react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : null;
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

Router.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
Router.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Router.childContextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/StaticRouter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/StaticRouter.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "./node_modules/history/es/index.js");
/* harmony import */ var _Router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Router */ "./node_modules/react-router-dom/node_modules/react-router/es/Router.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createURL = function createURL(location) {
  return typeof location === "string" ? location : Object(history__WEBPACK_IMPORTED_MODULE_4__["createPath"])(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return addLeadingSlash(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: stripBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_4__["createLocation"])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Router__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, { history: history }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

StaticRouter.propTypes = {
  basename: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  context: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object])
};
StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter.childContextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (StaticRouter);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/Switch.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/Switch.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ "./node_modules/invariant/browser.js");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _matchPath__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./matchPath */ "./node_modules/react-router-dom/node_modules/react-router/es/matchPath.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    invariant__WEBPACK_IMPORTED_MODULE_3___default()(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning__WEBPACK_IMPORTED_MODULE_2___default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning__WEBPACK_IMPORTED_MODULE_2___default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (element) {
      if (match == null && react__WEBPACK_IMPORTED_MODULE_0___default.a.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = Object(_matchPath__WEBPACK_IMPORTED_MODULE_4__["default"])(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Switch.contextTypes = {
  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};


/* harmony default export */ __webpack_exports__["default"] = (Switch);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/generatePath.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/generatePath.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default.a.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ __webpack_exports__["default"] = (generatePath);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/matchPath.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/matchPath.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_0__);


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = path_to_regexp__WEBPACK_IMPORTED_MODULE_0___default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ __webpack_exports__["default"] = (matchPath);

/***/ }),

/***/ "./node_modules/react-router-dom/node_modules/react-router/es/withRouter.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-router-dom/node_modules/react-router/es/withRouter.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/react-router-dom/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route */ "./node_modules/react-router-dom/node_modules/react-router/es/Route.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: function children(routeComponentProps) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  };

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(C, Component);
};

/* harmony default export */ __webpack_exports__["default"] = (withRouter);

/***/ }),

/***/ "./node_modules/resolve-pathname/index.js":
/*!************************************************!*\
  !*** ./node_modules/resolve-pathname/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/value-equal/index.js":
/*!*******************************************!*\
  !*** ./node_modules/value-equal/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// import "./App.css";
const google_maps_react_1 = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "container-fluid" },
            React.createElement(google_maps_react_1.Map, { google: this.props.google, zoom: 14 })));
    }
}
// export default App;
exports.default = google_maps_react_1.GoogleApiWrapper({
    apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
})(App);


/***/ }),

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (71:4)\nYou may need an appropriate loader to handle this file type.\n|     //   var marker = new google.maps.Marker({position: uluru, map: map});\r\n|     // }\r\n>     ,\r\n|         \" (root) \",\r\n|     ,\r");

/***/ }),

/***/ "./src/components/Forms/Aboutus.tsx":
/*!******************************************!*\
  !*** ./src/components/Forms/Aboutus.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (96:0)\nYou may need an appropriate loader to handle this file type.\n|             React.createElement(\"div\", { className: \"d-flex justify-content-around \" }, \">>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691\"));\r\n| div >\r\n> ;\r\n| ;\r\n| ;\r");

/***/ }),

/***/ "./src/components/Forms/Applicationservices.tsx":
/*!******************************************************!*\
  !*** ./src/components/Forms/Applicationservices.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Applicationservices = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: "w-100 py-5 mt-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/ApplicationServices.png", alt: "Application Services" })),
        React.createElement("div", { className: ' text-black w-100  text-white px-5  flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "w-100  text-black" },
                    React.createElement("h2", { className: 'mt-3' }, "Application Services - Overview")),
                React.createElement("p", { className: "lineHeight-24" },
                    "Applications are the lifeline of your organization. Our innovation-led approach to Application Services helps you to reinvent your enterprise application portfolio, making use of emerging technology and building with speed and agility to enable you to meet business needs, now and in the future.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS delivers integrated Application Development and Maintenance services across the full range of your business and technical requirements. We serve as your trusted partner throughout your journey to continuous evolution - delivering flexible service options tailored to your business priorities.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 pr-5 text-black" },
                React.createElement("p", { className: "w-100  text-black" },
                    React.createElement("h2", { className: 'mt-3' }, "Application Services")),
                React.createElement("p", { className: "lineHeight-24" },
                    "Our application managed services allow you rethink your portfolio and achieve a simplified, standardized, future-ready enterprise application environment. We help address critical questions, such as whether to migrate, re-platform or remediate legacy applications.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Ultimately, we add value from existing applications while reducing costs, limiting disruptions and decreasing risk. The outcome transforms legacy applications to achieve high performance.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24 list-tick" },
                    React.createElement("p", null, "We help you tomorrow-proof your existing IT systems while cutting costs and maintaining smooth operations."),
                    React.createElement("ul", { className: "lineHeight-34" },
                        React.createElement("li", null, "\u00A0With business-driven IT and application development using Agile and DevOps."),
                        React.createElement("li", null, "\u00A0Through automation, continuous delivery, application modernization, and leveraging next-generation technologies."),
                        React.createElement("li", null, "\u00A0Enhanced cost optimization through cost-efficient ways to host applications and adapt platforms.")))),
            React.createElement("div", { className: " " },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/Growth.png", alt: "Growth" }))),
        React.createElement("div", { className: "w-100 px-5 pt-3 text-black text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement("h4", null, "We offer a range of services to help companies get the most value from their existing applications:"),
                React.createElement("br", null),
                " ")),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement("div", { className: "w-100 p-5" },
                    React.createElement("img", { height: "auto", width: "100%", className: "w-75", src: "img/Discovery.png", alt: "First slide" }),
                    React.createElement("p", { className: "pt-2" },
                        React.createElement("b", null, "Discovery and Assessment")),
                    React.createElement("p", { className: "text-center" }, "Provides an accurate understanding of your legacy systems, enabling us to develop the business case around renewing existing applications."))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement("div", { className: "w-100 p-5" },
                    React.createElement("img", { height: "auto", width: "100%", className: "w-75", src: "img/Remedition.png", alt: "First slide" }),
                    React.createElement("p", { className: "pt-2" },
                        React.createElement("b", null, "Remediation")),
                    React.createElement("p", { className: "text-center" }, "Enhances your applications\u2019 functionality, which makes them easier to maintain and part of a highly-scalable framework."))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement("div", { className: "w-100 p-5" },
                    React.createElement("img", { height: "auto", width: "100%", className: "w-75", src: "img/Replatform.png", alt: "First slide" }),
                    React.createElement("p", { className: "pt-2" },
                        React.createElement("b", null, "Re-Platform")),
                    React.createElement("p", { className: "text-center" }, "Enhances your applications\u2019 functionality, which makes them easier to maintain and part of a highly-scalable framework."))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement("div", { className: "w-100 p-5" },
                    React.createElement("img", { height: "auto", width: "100%", className: "w-75", src: "img/Migration.png", alt: "First slide" }),
                    React.createElement("p", { className: "pt-2" },
                        React.createElement("b", null, "Migration")),
                    React.createElement("p", { className: "text-center" }, "Migrates you to a standards-based environment while minimizing disruption to the business.")))),
        React.createElement("div", { className: " p-5" },
            React.createElement("p", { className: "seperator-grey" })),
        React.createElement("div", { className: "px-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "text-center" },
                React.createElement("div", { className: "w-40 " },
                    React.createElement("img", { src: "img/ERP.png", width: "75%", alt: "DevOps Transformation" }),
                    " "))),
        React.createElement("div", { className: "px-5 pt-4 text-center", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null,
                React.createElement("i", null, "We Focus on What Matters!"))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-24" }, "Enterprise Resource Planning (ERP) applications are essential to running your business, but they can be time consuming and expensive to create, customize, and maintain. We offer ERP Solutions for businesses of all sizes - small, midsize, and large. We also provide industry and company-specific functionality to meet unique business needs.")),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "w-100  text-black" },
                    React.createElement("h2", { className: 'mt-3' }, "Education Management System")),
                React.createElement("p", { className: "lineHeight-24" },
                    "Easy-to-use All-in-One College and School Management Software, to help your school or college save time!",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS EMS is a cloud-based education management solution designed for individual instructors, schools and colleges. Key features include Student and Class Management, Grade Management, Attendance and Timetable, Communication tool and more...",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Simple, Powerful and Cost-Effective Education Management System.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12" },
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("img", { height: "auto", width: "100%", className: "w-25", src: "img/CheckMark.png", alt: "Simple" }),
                    React.createElement("p", null,
                        React.createElement("b", null, "Simple")),
                    React.createElement("p", { className: "text-center" }, "Designed to engage Teachers, Parents and Students. No expertise required."))),
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("img", { height: "auto", width: "100%", className: "w-25", src: "img/CheckMark.png", alt: "Powerful" }),
                    React.createElement("p", null,
                        React.createElement("b", null, "Powerful")),
                    React.createElement("p", { className: "text-center" }, "With efficient operations and ready access to real-time data, you can streamline and automate your core business processes."))),
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("img", { height: "auto", width: "100%", className: "w-25", src: "img/CheckMark.png", alt: "Cost-Effective" }),
                    React.createElement("p", null,
                        React.createElement("b", null, "Cost-Effective")),
                    React.createElement("p", { className: "text-center" }, "Our plans are affordable. We have no hidden fees, no catches, and no fine prints.")))),
        React.createElement("div", { className: " p-5" },
            React.createElement("p", { className: "seperator-grey" })),
        React.createElement("div", { className: "px-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "" },
                React.createElement("div", { className: "w-40 text-center" },
                    React.createElement("img", { src: "img/Office365.png", width: "75%", alt: "Office365" }),
                    " "))),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "lineHeight-24" }, "Microsoft is the recognized leader in cloud productivity solutions for business with Office 365 - transforming the workplace experience."),
                " ",
                React.createElement("br", null),
                " ",
                React.createElement("p", { className: "lineHeight-24" },
                    "With a certified team of Microsoft Partner Professionals, SYNECTIKS delivers on all Microsoft Cloud Solutions, including Office 365, SharePoint, Skype for Business, Teams, Power BI, Microsoft 365 (Office 365 + Enterprise Mobility + Security), and Azure.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Imagine what we can do for you!",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We don\u2019t just move you to Office 365. We help you create and sustain a cost-efficient, highly responsive and secure evergreen workplace platform. We provide a holistic set of transformational and managed services to modernize your workplace.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24 list-tick" },
                    React.createElement("p", null,
                        React.createElement("b", null, "We can help accelerate your move to a digital workplace through our:")),
                    React.createElement("ul", { className: "lineHeight-34" },
                        React.createElement("li", null, "\u00A0Experience in unlocking the full productivity potential of Office 365"),
                        React.createElement("li", null, "\u00A0Giving you cost-effective and collaborative tools, including Microsoft Teams, Skype for Business and SharePoint Online."),
                        React.createElement("li", null, "\u00A0Insights from self-service and data discovery with Microsoft Power BI for Office 365."),
                        React.createElement("li", null, "\u00A0Ability to extend standard Office 365 service offerings with managed services"))))),
        React.createElement("div", { className: "w-100 px-5  text-black", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement("b", null, "Find Out Why Users Are Choosing Office 365"))),
        React.createElement("div", { className: "d-flex px-5 py-3 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "p-3 m-1 col-sm-3 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", null,
                        React.createElement("b", null, "Work Better Together")),
                    React.createElement("p", null, "Work Anywhere, Anytime, on Any Device with Office 365. Empower your employees the tools they need."))),
            React.createElement("div", { className: "p-3 m-1 col-sm-3 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", null,
                        React.createElement("b", null, "Get More Done")),
                    React.createElement("p", null, "Enjoy access to the latest versions, security updates, and feature releases."))),
            React.createElement("div", { className: "p-3 m-1 col-sm-3 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", null,
                        React.createElement("b", null, "Work Securely")),
                    React.createElement("p", null, "Work and Share files confidently with built-in security and privacy controls that help keep your data safe and secure."))),
            React.createElement("div", { className: "p-3 m-1 col-sm-3 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", null,
                        React.createElement("b", null, "Simplified for You")),
                    React.createElement("p", null, "Choose solutions that are right for your business. Get more value for your money.")))),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "lineHeight-24 list-tick" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Built by Microsoft, Made Easy by SYNECTIKS")),
                    React.createElement("ul", { className: "lineHeight-34" },
                        React.createElement("li", null,
                            "\u00A0",
                            React.createElement("b", null, "Reliable Support:"),
                            " 24x7x365 support via phone or ticket. 15-minute response time on Sev-1 tickets. SLA based proactive support with Microsoft support escalations."),
                        React.createElement("li", null,
                            "\u00A0",
                            React.createElement("b", null, "Migration Assistance:"),
                            " Let our dedicated team of specialists help you plan and perform your email data migration."),
                        React.createElement("li", null,
                            "\u00A0",
                            React.createElement("b", null, "Dedicated to Your Success:"),
                            " It\u2019s our mission to enable your continued success by advising you and your team on the right technologies & tools to deliver the desired results."),
                        React.createElement("li", null,
                            "\u00A0",
                            React.createElement("b", null, "Licensing Management:"),
                            " We can provide all required Office 365 licensing for your organization on one consolidated invoice")))))));
};
exports.default = exports.Applicationservices;


/***/ }),

/***/ "./src/components/Forms/Askfordemo.tsx":
/*!*********************************************!*\
  !*** ./src/components/Forms/Askfordemo.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Askfordemo = () => {
    return (React.createElement("div", { className: "bg-lightgrey" },
        React.createElement("div", null,
            React.createElement("img", { className: "  text-center py-5 mt-5", src: "img/NiceToMeet.png", width: "100%", alt: "Card image Foundation" }),
            React.createElement("div", { className: "text-center centered " },
                React.createElement("div", { className: "text-white" },
                    React.createElement("h3", null, "Nice\u00A0To\u00A0Meet\u00A0You!")))),
        React.createElement("div", { className: 'py-3', "data-aos": "fade-up", "data-aos-duration": "3000" },
            React.createElement("h2", { className: 'text-center text-black' }, "Ask for Demo"),
            React.createElement("h5", { className: 'text-center text-black' }, "Straight talk on your challenges.")),
        React.createElement("div", { className: "px-5 py-3", "data-aos": "fade-up", "data-aos-duration": "3000" },
            React.createElement("div", { className: "d-flex text-center col-md-12 p-2 flex-col" },
                React.createElement("div", { className: "col-sm-4 p-2" },
                    React.createElement("input", { className: "inputBoxFlex", placeholder: "\u00A0\u00A0First Name", width: "90%" })),
                React.createElement("div", { className: "col-sm-4 p-2" },
                    React.createElement("input", { className: "inputBoxFlex", placeholder: "\u00A0\u00A0Last Name", width: "90%" })),
                React.createElement("div", { className: "col-sm-4 p-2" },
                    React.createElement("input", { className: "inputBoxFlex", placeholder: "\u00A0\u00A0Email", width: "90%" }))),
            React.createElement("div", { className: "d-flex text-center col-md-12 p-2 flex-col" },
                React.createElement("div", { className: "col-sm-4 p-2" },
                    React.createElement("input", { className: "inputBoxFlex", placeholder: "\u00A0\u00A0Company", width: "90%" })),
                React.createElement("div", { className: "col-sm-4 p-2" },
                    React.createElement("input", { className: "inputBoxFlex", placeholder: "\u00A0\u00A0City", width: "90%" })),
                React.createElement("div", { className: "col-sm-4 p-2" },
                    React.createElement("input", { className: "inputBoxFlex", placeholder: "\u00A0\u00A0Mobile", width: "90%" }))),
            React.createElement("div", { className: "d-flex text-center col-md-12 p-2 flex-col" },
                React.createElement("div", { className: "col-sm-4 p-2" },
                    React.createElement("input", { className: "inputBoxFlex", placeholder: "\u00A0\u00A0Phone", width: "90%" })),
                React.createElement("div", { className: "col-sm-4 p-2 " },
                    React.createElement("select", { className: "inputBoxFlex" },
                        React.createElement("option", { value: "enterprise" }, "\u00A0Contact\u00A0Source"),
                        React.createElement("option", { value: "enterprise" }, "\u00A0Advertisement"),
                        React.createElement("option", { value: "foundation" }, "\u00A0Customer\u00A0Event"),
                        React.createElement("option", { value: "migration" }, "\u00A0Employee\u00A0Referral"),
                        React.createElement("option", { value: "operations" }, "\u00A0Google\u00A0Adwords"),
                        React.createElement("option", { value: "others" }, "\u00A0Other"),
                        React.createElement("option", { value: "optimization" }, "\u00A0Partner"),
                        React.createElement("option", { value: "optimization" }, "\u00A0Purchased\u00A0List"),
                        React.createElement("option", { value: "optimization" }, "\u00A0Trade\u00A0Show"),
                        React.createElement("option", { value: "optimization" }, "\u00A0Webinar"),
                        React.createElement("option", { value: "optimization" }, "\u00A0Website"))),
                React.createElement("div", { className: "col-sm-4 p-2" },
                    React.createElement("select", { className: "inputBoxFlex" },
                        React.createElement("option", { value: "enterprise" }, "\u00A0Select\u00A0Service"),
                        React.createElement("option", { value: "enterprise" }, "\u00A0Enterprise\u00A0Transformation"),
                        React.createElement("option", { value: "foundation" }, "\u00A0Foundation"),
                        React.createElement("option", { value: "migration" }, "\u00A0Migration\u00A0&\u00A0Deployment"),
                        React.createElement("option", { value: "operations" }, "\u00A0Operations"),
                        React.createElement("option", { value: "optimization" }, "\u00A0Optimization"),
                        React.createElement("option", { value: "others" }, "\u00A0Others"))))),
        React.createElement("div", { className: 'text-center p-5' },
            React.createElement("button", { className: 'btn menu-bg btnSend' }, "Submit"))));
};
exports.default = exports.Askfordemo;


/***/ }),

/***/ "./src/components/Forms/Audit.tsx":
/*!****************************************!*\
  !*** ./src/components/Forms/Audit.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Audit = () => {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("img", { className: "  text-center pt-5 mt-5", src: "img/Audit_Central.png", width: "100%", alt: "Card image Resource" })),
        React.createElement("div", { className: "row col-md-12 mx-auto middleSquare text-center" },
            React.createElement("div", { className: "col-md-4 text-blue p-3" },
                React.createElement("h3", null, "Security & Best Practices")),
            React.createElement("div", { className: "col-md-4 text-center" },
                React.createElement("div", { className: "diamond my-3 mx-auto text-center" },
                    React.createElement("img", { className: "text-center", src: "img/Aws-Standard-Consulting-Partner-logo.png", width: "85%", id: "AWS", alt: "Card image Resource" }))),
            React.createElement("div", { className: "col-md-4 text-blue p-3" },
                React.createElement("h3", null, "Cost & Time Optimization"))),
        React.createElement("div", { className: "d-flex col-lg-12 justify-content-around align-items-center flex-col m-3" },
            React.createElement("div", { className: "col-md-6 bg-skyblue  h-300 p-5" },
                React.createElement("h3", { className: "text-center text-uppercase text-white" }, "Optimize your Cloud Utilization and Billing"),
                React.createElement("ul", { className: "text-white" },
                    React.createElement("li", null, "Adopt containerization and server less"),
                    React.createElement("li", null, "Optimal dynamic instance selection"),
                    React.createElement("li", null, "Reclaim under utilized resources"))),
            React.createElement("div", { className: "col-md-6" },
                React.createElement("img", { className: "card-img-top", src: "img/4-icons.png", alt: "Card image cap" }))),
        React.createElement("div", { className: "d-flex col-lg-12 justify-content-around align-items-center flex-col m-3" },
            React.createElement("div", { className: "col-md-6 w-75" },
                React.createElement("img", { className: "card-img-top w-75", src: "img/Tick-icon.png", alt: "Card image cap" })),
            React.createElement("div", { className: "col-md-6 bg-skyblue h-300 p-5" },
                React.createElement("h3", { className: "text-center text-uppercase text-white" }, "Continuous Security and Governance"),
                React.createElement("h6", { className: "text-white" }, "Ensure security and compliance across multiple account / product / environment. Compliance Check for CIS, HIPPA, PCI-DSS. Ensure account wise security role and policies.")))));
};
exports.default = exports.Audit;


/***/ }),

/***/ "./src/components/Forms/Careers.tsx":
/*!******************************************!*\
  !*** ./src/components/Forms/Careers.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (76:0)\nYou may need an appropriate loader to handle this file type.\n| };\r\n| div >\r\n> ;\r\n| ;\r\n| ;\r");

/***/ }),

/***/ "./src/components/Forms/Casestudy.tsx":
/*!********************************************!*\
  !*** ./src/components/Forms/Casestudy.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (161:0)\nYou may need an appropriate loader to handle this file type.\n|                 \">>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691\"));\r\n| div >\r\n> ;\r\n| div >\r\n| ;\r");

/***/ }),

/***/ "./src/components/Forms/CloudDisasterRecovery.tsx":
/*!********************************************************!*\
  !*** ./src/components/Forms/CloudDisasterRecovery.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.CloudDisasterRecovery = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: 'bg-lightgrey  text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 mt-5 pt-3 pr-5  text-black" },
                React.createElement("h1", { className: " hfont" }, "CLOUD"),
                React.createElement("p", { className: "rfont" },
                    React.createElement("b", null,
                        React.createElement("i", null, "Cloud Your Way!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We\u2019ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate your company\u2019s digital transformation and empower your business to stay ahead of the game.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it \u2013 on-premise or private, public or hybrid cloud.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Get no-cost expert guidance.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", null,
                    "We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: "w-100 pt-5 mt-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudCommon.png", alt: "Cloud" }))),
        React.createElement("div", { className: " bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/publiccloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Public Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/privatecloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Private Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/hybridcloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Hybrid Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/colocation", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Colocation"))),
            React.createElement("div", { className: "py-3 col-md-2 nav-item dropdown" },
                React.createElement(react_router_dom_1.Link, { to: "/HostedInfrastructure", className: 'text-black bg-white noLine' },
                    React.createElement("a", { className: "nav-link", href: "#", id: "cloudnav", "data-toggle": "dropdown" },
                        React.createElement("b", { id: "hosted" }, "Cloud\u00A0Hosted\u00A0Services")),
                    React.createElement("div", { className: "dropdown-menu w17em" },
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudManagedBackup" },
                            " ",
                            "Cloud Managed Backup",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudDisasterRecovery" },
                            " ",
                            "Cloud Disaster Recovery",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/HostedInfrastructure" },
                            " ",
                            "Hosted Infrastructure",
                            " "))))),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center text-center flex-col", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-40 p-5" },
                React.createElement("img", { src: "img/CloudDisRecoverySlider.png", width: "75%", alt: "Cloud Disaster Recovery" }),
                " ")),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", { className: 'my-3' }, "Protect your enterprise data with recovery capabilities that keep the lights on!"),
            React.createElement("p", { className: "lineHeight-34 list-tick" },
                React.createElement("ul", null,
                    React.createElement("li", null, "\u00A0Data integrity for large, enterprise-class applications."),
                    React.createElement("li", null, "\u00A0Back to business as per our requirements.")))),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: 'my-3' },
                React.createElement("h3", null, "Why choose SYNECTIKS?")),
            React.createElement("p", { className: "lineHeight-34 list-tick" },
                "We design and build DR solutions according to your unique business needs, offering:",
                React.createElement("br", null),
                " ",
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Customization:"),
                        " We build the solution according to your business continuity needs. With RPO, RTO, Secondary Site Location, Failover, and Failback options, we choose the best solution."),
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Security:"),
                        " Maintain the safety of your data with our state-of-the-art encryption."),
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Tiering:"),
                        " Leverage our solutions for optimizing cost \u2013 whether it is active-active, active-passive"),
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Technology:"),
                        " We leverage VMware, and native device replication capabilities to deliver industry-leading capabilities."))),
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement(react_router_dom_2.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "Contact\u00A0Us\u00A0")),
                "to learn more about SYNECTIKS Disaster Recover as a Service.",
                React.createElement("br", null),
                " "))));
};
exports.default = exports.CloudDisasterRecovery;


/***/ }),

/***/ "./src/components/Forms/CloudManagedBackup.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Forms/CloudManagedBackup.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.CloudManagedBackup = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: 'bg-lightgrey  text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 mt-5 pt-3 pr-5  text-black" },
                React.createElement("h1", { className: " hfont" }, "CLOUD"),
                React.createElement("p", { className: "rfont" },
                    React.createElement("b", null,
                        React.createElement("i", null, "Cloud Your Way!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We\u2019ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate your company\u2019s digital transformation and empower your business to stay ahead of the game.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it \u2013 on-premise or private, public or hybrid cloud.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Get no-cost expert guidance.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", null,
                    "We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: "w-100 pt-5 mt-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudCommon.png", alt: "First slide" }))),
        React.createElement("div", { className: " bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/publiccloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Public Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/privatecloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Private Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/hybridcloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Hybrid Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/colocation", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Colocation"))),
            React.createElement("div", { className: "py-3 col-md-2 nav-item dropdown" },
                React.createElement(react_router_dom_1.Link, { to: "/HostedInfrastructure", className: 'text-black bg-white noLine' },
                    React.createElement("a", { className: "nav-link", href: "#", id: "cloudnav", "data-toggle": "dropdown" },
                        React.createElement("b", { id: "hosted" }, "Cloud\u00A0Hosted\u00A0Services")),
                    React.createElement("div", { className: "dropdown-menu w17em" },
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudManagedBackup" },
                            " ",
                            "Cloud Managed Backup",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudDisasterRecovery" },
                            " ",
                            "Cloud Disaster Recovery",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/HostedInfrastructure" },
                            " ",
                            "Hosted Infrastructure",
                            " "))))),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center flex-col text-center", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-40 p-5" },
                React.createElement("img", { src: "img/CloudBackupSlider.png", width: "75%", alt: "Cloud Backup" }),
                " ")),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", { className: 'my-3' }, "Efficiently Protect, Manage and Recover Your"),
            React.createElement("p", { className: "lineHeight-34 list-tick" },
                React.createElement("ul", null,
                    React.createElement("li", null, "\u00A0Protect, manage and access the information you need."),
                    React.createElement("li", null, "\u00A0A single interface manages data at a fraction of the time, effort and cost required by separate point products."),
                    React.createElement("li", null, "\u00A0Simplify data management in complex networked storage environments with a consistent way to locate and manage data and applications.")))),
        React.createElement("div", { className: "text-black w-100 mt-3 px-5 py-2 flex-col d-flex text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudBackup2.png", alt: "Cloud Backup" })),
            React.createElement("div", { className: "w-100 px-5 pt-3 text-black" },
                React.createElement("p", { className: "lineHeight-24" },
                    "Backups - and significantly \u2013 restores, should be promptly available inside your budget. Assumed the advances in cloud and hybrid IT environments, it\u2019s time to switch your capital budget, backup operations, quality management, tools and facilities with a secure, versatile pay-per-use choice from a trustworthy partner.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS Backup as a Service powered by Commvault provides cost-effective managed service for backup and recovery of all types of data. We offer this service where you need it, and we ensure compliance with national data sovereignty rules through locally deployed assets and in-country support.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-34 py-3 list-tick" },
                "SYNECTIKS protects all of your structured and unstructured data while enabling self-service restoration capability to your application teams. We provide support for:",
                React.createElement("br", null),
                " ",
                React.createElement("ul", null,
                    React.createElement("li", null, "\u00A0Protects files and folders from Servers and Clients"),
                    React.createElement("li", null, "\u00A0Integrates with workloads including SharePoint, Exchange, Database, Servers, and VMs"),
                    React.createElement("li", null, "\u00A0Protects guest workloads running in VMware environments"),
                    React.createElement("li", null, "\u00A0Granular restore capability such as mailbox recovery, DB level recovery, and Files")))),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", null,
                React.createElement("h3", null, "Why choose SYNECTIKS?")),
            React.createElement("p", { className: "lineHeight-34 list-tick" },
                "SYNECTIKS can deliver end-to-end backup services and support:",
                React.createElement("br", null),
                " ",
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Cost Optimization:"),
                        " Unlike competitors whose models increase backup costs over time, SYNECTIKS helps clients optimize and even reduce backup costs."),
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Flexibility:"),
                        "Scale up and down based on demand."),
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Security:"),
                        " SYNECTIKS provides end-to-end security expertise to protect your data. Data is encrypted in your data center and stored encrypted in SYNECTIKS Cloud - the encryption key is stored and managed locally. 256 AES Encrypted, IP Access restricted."),
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Reliable:"),
                        " Copies of the data are stored to a single data center location and optionally at an additional, remote datacenter."),
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Efficient:"),
                        " De-duplication and compression technologies, ensure that multiple copies of the same data are removed from backup cycles, thus optimizing storage capacity."),
                    React.createElement("li", null,
                        "\u00A0",
                        React.createElement("b", null, "Peace of Mind:"),
                        " True backup not just storing data."))),
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement(react_router_dom_2.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "Contact\u00A0Us\u00A0")),
                "to learn more about SYNECTIKS Backup as a Service.",
                React.createElement("br", null),
                " "))));
};
exports.default = exports.CloudManagedBackup;


/***/ }),

/***/ "./src/components/Forms/Contact.tsx":
/*!******************************************!*\
  !*** ./src/components/Forms/Contact.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (143:0)\nYou may need an appropriate loader to handle this file type.\n| };\r\n| div >\r\n> ;\r\n| ;\r\n| ;\r");

/***/ }),

/***/ "./src/components/Forms/Devops.tsx":
/*!*****************************************!*\
  !*** ./src/components/Forms/Devops.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
// import { Link } from "react-router-dom";
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Devops = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: "w-100 py-5 mt-5" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/Devopsmain.png", alt: "Devopsmain Services" })),
        React.createElement("div", { className: "px-5 pt-4 text-center", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null,
                React.createElement("i", null, "Transformation for Todays Digital Business!"))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-24" }, "Enterprises looking for modernization of their legacy stack and operate in more fast and competitive way, can use SYNECTIKS - Open Platform to bring the cultural transformation and agility needed for today\u2019s business. Whether it is a new business application or transformation of legacy applications, our open platform coupled with our experience and expertise accelerate the project execution @50% time & cost."),
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement("i", null, "\u201CDevOps is the combination of cultural philosophies, practices, and tools that increases an organization\u2019s ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes. This speed enables organizations to better serve their customers and compete more effectively in the market.\u201D"))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Technology Transformation:"),
            React.createElement("p", { className: "lineHeight-24" }, "SYNECTIKS build the most powerful open product that helps customers to provision resources across clouds in complete Software-Defined way and deliver modern Container and FAAS driven workloads on it. The platform takes care of Continuous Delivery, Test Automation, Continuous Security, Continuous Compliance and does Continuous Automation to make sure the workload runs seamlessly with highest security, performance, scalability and availability."),
            React.createElement("div", { className: "d-flex justify-content-around align-items-center flex-col" },
                React.createElement("div", { className: "" },
                    React.createElement("img", { src: "img/Devops.png", width: "100%", alt: "DevOps Transformation" }),
                    " ")),
            React.createElement("p", { className: "lineHeight-24 pt-3" },
                React.createElement("i", null, "\u201COver 85% of enterprise IT organizations will commit to multi-cloud architectures by 2018, IDC. End User experience, Security, Agility, Flexibility, Consumption Based pricing are most important five priorities for CIO\u2019s today. Synectiks is one of very few technology companies, who delivers managed services on advanced technologies backed by an open xformation platform that accelerates your DevOps transformation journey @50% time & cost.\u201D"))),
        React.createElement("div", { className: "px-5 py-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", { className: "pb-3" }, "Cultural Transformation:"),
            React.createElement("div", { className: "text-center" },
                React.createElement("img", { src: "img/Microservice_9.png", width: "75%", alt: "Cultural Transformation" }),
                " "),
            React.createElement("p", { className: "lineHeight-24 pt-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
                React.createElement("h4", null, "Why Transformation Matter?"),
                React.createElement("br", null),
                "Competition, new products and continuing pressure to monetize older services severely taxing many businesses driven by legacy applications and infrastructure. To maintain competitive edge in a highly dynamic market, business need to re-imagine the customer experience in lower economics. Synectiks xformation platform can help with the rapid development and delivery of microservices oriented applications across clouds and geographies, address operational complexity, and the need for monitoring/tracing/resilience. Modernize your legacy application and infrastructure with ease and speed with our open platform."),
            React.createElement("p", { "data-aos": "fade-up", "data-aos-duration": "2000" }, "Ensuring that you stay ahead of race and keep disrupting by adopting most modern technologies intelligently and effectively, requires a managed services partner who understand your requirements for:")),
        React.createElement("div", { className: "d-flex  px-5 py-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "p-3 m-1 col-sm-4 text-center border-grey-2px" },
                React.createElement("div", { className: " " },
                    React.createElement("img", { height: "auto", width: "50%", className: "pb-3", src: "img/Devopsspeed.png", alt: "Devopsspeed" }),
                    React.createElement("p", null,
                        React.createElement("b", null, "SPEED")),
                    React.createElement("p", { className: "text-justify" }, "Introduction of New products or transforming your existing legacy monolith applications to microservices faster while maintaining Operational Control and Customer Visibility."))),
            React.createElement("div", { className: "p-3 m-1 col-sm-4 text-center border-grey-2px" },
                React.createElement("div", { className: "" },
                    React.createElement("img", { height: "auto", width: "50%", className: "pb-3", src: "img/Devopsscale.png", alt: "Devopsscale" }),
                    React.createElement("p", null,
                        React.createElement("b", null, "SCALE")),
                    React.createElement("p", { className: "text-justify" }, "Grow cost-effectively to meet new organizational and business requirements across the enterprise using a highly scalable architecture that can distribute the workloads across clouds, enables hybrid cloud adoption with maximum security and highest flexibility."))),
            React.createElement("div", { className: "p-3 m-1 col-sm-4 text-center border-grey-2px" },
                React.createElement("div", { className: " " },
                    React.createElement("img", { height: "auto", width: "30%", className: "pb-3", src: "img/Devopssecurity.png", alt: "Devopssecurity" }),
                    React.createElement("p", null,
                        React.createElement("b", null, "SECURITY")),
                    React.createElement("p", { className: "text-justify " }, "Provision and Manage infrastructure, application services in complete software-defined way with maximum automation so that you never fall into security loopholes. Enables Continuous Audit, Continuous Security/Compliance to have real time checks and visibility on security guidelines.")))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Traditional Vs Multi-Cloud, Hybrid System")),
        React.createElement("div", { className: "d-flex px-5 py-3 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "p-3 m-1 col-md-6 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", { className: "borderbtm-grey-1px" },
                        React.createElement("b", null, "Traditional System")),
                    React.createElement("p", null, "99% application doesn\u2019t scale, manual configuration, 50% time spent on repeated activities, lack of flexibility to move & migrate, Vendor locks, absence of real-time monitoring, infinite mails, 90% unused hardware."))),
            React.createElement("div", { className: "p-3 m-1 col-md-6 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", { className: "borderbtm-grey-1px" },
                        React.createElement("b", null, "Multi-Cloud, Hybrid System")),
                    React.createElement("p", null, "SYNECTIKS Xformation platform gives you the flexibility to craft your high performant hybrid cloud in most secure way. Run your workloads and might as well use some native services in private cloud space. Our Open Platform helps to orchestrate Container delivery platform in any cloud strategy, be it Private, Public or Hybrid.")))),
        React.createElement("p", { className: "px-5 pt-3 lineHeight-24", "data-aos": "fade-up", "data-aos-duration": "2000" }, "To leverage the lower TCO, performance and scalability, security and compliance, there is a need to operate in complete software-defined way, reduce CAPEX and OPEX significantly, aggregate and optimize resources across clouds to run any workloads in most secure way."),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", { className: "" }, "Key Benefits")),
        React.createElement("div", { className: "d-flex px-5 py-3 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "p-3 m-1 col-md-3 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", { className: "borderbtm-grey-1px" },
                        React.createElement("b", null, "Maximum Flexibility")),
                    React.createElement("p", null, "Synectiks Xformation platform coupled with its cross-cloud infrastructure delivers the maximum flexibility to run/move your high performant workloads across clouds and manage them through a single pane of glass."))),
            React.createElement("div", { className: "p-3 m-1 col-md-3 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", { className: "borderbtm-grey-1px" },
                        React.createElement("b", null, "Faster Delivery")),
                    React.createElement("p", null, "Synectiks Xformation platform enabled infrastructure and application provisioning is complete software defined manner with regulatory compliant architectures. The existing assets and best practices enable project delivery in weeks than months."))),
            React.createElement("div", { className: "p-3 m-1 col-md-3 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", { className: "borderbtm-grey-1px" },
                        React.createElement("b", null, "Better Quality")),
                    React.createElement("p", null, "Through Synectiks Xformation platform, you can continuously deliver containerized and serverless microservices verified through stringent quality gates that run across clouds and geographies ensuring 100% availability and maximum performance."))),
            React.createElement("div", { className: "p-3 m-1 col-md-3 border-grey-2px text-center" },
                React.createElement("div", { className: "w-100 " },
                    React.createElement("p", { className: "borderbtm-grey-1px" },
                        React.createElement("b", null, "Lower Costs")),
                    React.createElement("p", null, "Everything software-defined and maximum automation ensure lowest TCO. A successful Digital Modernization project delivers 10X agility, 30X reliability and 10X operational efficiency. At least 50% TCO reduction due to 80% operations, 50% hardware and 100% license cost savings.")))),
        React.createElement("div", { className: "px-5 pt-3 lineHeight-24", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", { className: "pb-3" }, "Where do you find your current DevOps Maturity!"),
            React.createElement("div", { className: "text-center pb-3" },
                React.createElement("img", { src: "img/Devops_Maturity.png", width: "75%", alt: "DevOps Maturity" }),
                " "),
            React.createElement("p", null, "Want to Asses in Detail?"),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "Contact\u00A0Us\u00A0")),
                "to learn more  about SYNECTIKS DevOps Transformation Service.")),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "d-flex justify-content-around align-items-center mt-5 flex-col" }))));
};
exports.default = exports.Devops;


/***/ }),

/***/ "./src/components/Forms/Disasterrecovery.tsx":
/*!***************************************************!*\
  !*** ./src/components/Forms/Disasterrecovery.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Disasterrecovery = () => {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'bg-theme mt-3' },
            React.createElement("h1", { className: 'text-center text-white pt-theme mt-2' }, "DISASTER RECOVERY")),
        React.createElement("div", { className: "px-5 pt-5" },
            React.createElement("p", { className: 'lineHeight-24' }, "Background - As we all know, a potential business disorder will directly impact CAPEX and OPEX of the business. When a proper disaster recovery plan is set, any business can continue to run its critical operations without thwarting their customer expectations. That is exactly what we offered Indian defense, a solution that can manage and provide necessary outcomes in case of any DR issues."),
            React.createElement("br", null)),
        React.createElement("div", { className: 'bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12' },
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Sector - Defence"),
                React.createElement("p", null, "Automobiles")),
            React.createElement("div", { className: 'col-md-4 border-block' },
                React.createElement("h3", null, "BUSINESS OBJECTIVE"),
                React.createElement("p", { className: 'px-2' }, "Transformation towards becoming hardware / Os / Vender / Operation agnostic. Make everything software defined.")),
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Technologies"),
                React.createElement("p", null, "AWS, Infrastructure as a code, microservices, devops"))),
        React.createElement("div", { className: "p-5" },
            React.createElement("h2", null, "Overview"),
            React.createElement("p", { className: 'lineHeight-24' }, "As we all know, a potential business disorder will directly impact CAPEX and OPEX of the business. When a proper disaster recovery plan is set, any business can continue to run its critical operations without thwarting their customer expectations. That is exactly what we offered Indian defense, a solution that can manage and provide necessary outcomes in case of any DR issues.   "),
            React.createElement("h2", null, "Challenges"),
            React.createElement("p", { className: 'lineHeight-24' },
                "The Indian defense had only 4 Mbps site to site leased line for data transfer.",
                React.createElement("br", null),
                "They were using email, intranet, and few BPM applications on SAN-based storage.",
                React.createElement("br", null),
                "They were not comfortable to use array-based replication neither the FCIP based switch communication.",
                React.createElement("br", null),
                "They were expecting a lightweight, script-based DR solution, that is managed with ease and extended as per requirements and with the SLA that is less than 10min."),
            React.createElement("h2", null, "Solutions"),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("ul", null,
                    React.createElement("li", null, "Thorough planning and execution proved to be successful. Firstly, we used copy-on-write technology advantage that takes an incremental snapshot on a purpose-built storage."),
                    React.createElement("li", null, "We performed deduplication of that snapshot and transferred across the site by simple Zfs send-receive."),
                    React.createElement("li", null, "In case of failover, we could recover application instantly- since it is mare mount of the filesystem, so recovery time was almost zero."),
                    React.createElement("li", null, "We used some open source tools that work together with some simple scripting and automation and deliver the required solution."),
                    React.createElement("li", null, "The solution is extracted from components like snapshot engine- pool provisioning \u2013Zfs based storage and virtualization technique."),
                    React.createElement("li", null, "The all in one solution comes with the freedom to unlimited extension/customization."))),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "That old Clich\u00E9 \u201CDR is resilient enough to implement in one go\u201D we proved it wrong!"),
                React.createElement("br", null),
                "Designing and deploying a total DR solution was not a rocket science for us. However, there were few challenges to face though; we had only 4 Mbps site to site leased line for data transfer. Due to pricing aspect, the Indian defense was neither ready to accept array-based replication or the FCIP based switch communication. They wanted a lightweight solution and a script based DR solution to manage their tasks effortlessly. With all these hurdles on the path, we managed to script a DR solution that is open and restores the data in DR site. In case of a network latency or a failure, Indian defense could recover the application in no time and the recovery time is almost zero."),
            React.createElement("h2", null, "OUTCOME"),
            React.createElement("p", { className: 'lineHeight-24' }, "The DR solution was 10% low compared to a licensed DR product. They were able to restore the data instantly and the recovery time was less than 10 min which is almost zero. The lightweight script was easily adaptable and manageable."))));
};
exports.default = exports.Disasterrecovery;


/***/ }),

/***/ "./src/components/Forms/EnterpriseManagedservice.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Forms/EnterpriseManagedservice.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.EnterpriseManagedservice = () => {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("img", { className: "  text-center  ", src: "img/Managedservices.png", width: "100%", alt: "Card image Resource" }),
            React.createElement("div", { className: "text-center centered p-3 mt-5" },
                React.createElement("div", { className: "text-white" },
                    React.createElement("h3", null, "Managed\u00A0Services"),
                    React.createElement("h5", null, "Cutting\u00A0Edge\u00A0Capabilities.\u00A0Significant\u00A0Cost\u00A0Benefits.")))),
        React.createElement("div", { className: "p-5 mt-3" },
            React.createElement("p", { className: "lineHeight-24" },
                "Our managed services and solutions give you everything you need to ensure success before, during, and post-deployment. It\u2019s everything you\u2019d want from a Premier Partner.",
                React.createElement("br", null),
                "Your competition never rests, your IT organization is always overwhelmed, leaving your margins and staff under constant pressure. Our Cloud Management Services for your enterprise systems offers deep expertise and economies of scale; freeing more dollars, time, and mindshare to innovate with the business and truly deliver value. Let us keep the lights on for you so you can spend your time helping your company keep ahead of the competition! With over 10 years of global Managed Services (MS) experience, Synectiks offers large company performance with the agility, flexibility and personal touch of a small company. Synectiks has time and again satisfied its customers by successfully delivering Managed Services to large customers in financial sector for 10+ years.")),
        React.createElement("div", null,
            React.createElement("div", { className: "px-5" },
                React.createElement("img", { className: "greycard", src: "img/ManagedService_1.png", width: "100%", alt: "Featured" }),
                " ")),
        React.createElement("div", null,
            React.createElement("p", { className: "p-5 mt-3 lineHeight-24" }, "Our Innovations Lab has value levers and accelerators that help optimize business processes, reduce complexity, measure and realize business benefits, and co-innovate with customers. We begin our journey with a no cost 3-day assessment that will demonstrate key benefits that you will achieve with Synectiks as your partner.")),
        React.createElement("div", { className: "d-flex justify-content-around flex-col pt-3 pb-5 col-lg-12" },
            React.createElement("div", { className: "col-md-4" },
                React.createElement("ul", null,
                    React.createElement("h4", null, "Assessment Optimization"),
                    React.createElement("p", null, "Perform regular security and billing audit to achieve compliance and control your cloud cost"),
                    React.createElement("h4", null, "Data Protection"),
                    React.createElement("p", null, "Cloud Backup and DR, scheduled backup and replication in cloud storage"),
                    React.createElement("h4", null, "Realtime Monitoring"),
                    React.createElement("p", null, "Monitor Infrastructure, App, Databases, 24*7 Application Support"))),
            React.createElement("div", { className: "col-md-4" },
                React.createElement("img", { className: "   mx-auto ", src: "img/ManagedService_2.png", width: "100%", alt: "Card image Foundation" })),
            React.createElement("div", { className: "col-md-4" },
                React.createElement("ul", null,
                    React.createElement("h4", null, "Custom Cloud"),
                    React.createElement("p", null, "Build your custom hybrid cloud compliant to highest standards and performance"),
                    React.createElement("h4", null, "Deployment Orchestration"),
                    React.createElement("p", null, "Consistent process model for building and deploying apps with DevOps"),
                    React.createElement("h4", null, "Shared Services"),
                    React.createElement("p", null, "Use IAAS,PAAS,SAAS services to rapidly meet your business goals.")))),
        React.createElement("div", { className: "container-fluid pb-5" },
            React.createElement("div", { className: "row justify-content-around align-items-center" },
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-maroon text-center" }, "Assessment and Initial Engagement"),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "" },
                            React.createElement("ul", { className: "p12-in-start" },
                                React.createElement("li", null, "3 days no cost assessment to understand your needs and objectives"),
                                React.createElement("li", null, "Application of tools to determine current system health and optimization opportunities"),
                                React.createElement("li", null, "Present best practice comparison, solution effectiveness, risk, mitigation, improvement options and cost savings"))))),
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-teal text-center" }, "Scalable COE"),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "" },
                            React.createElement("ul", { className: "p12-in-start" },
                                React.createElement("li", null, "Establish an engagement model based on ITIL process and global delivery excellence practices"),
                                React.createElement("li", null, "Access to Devops experts allows you to solve the most challenging of business problems"),
                                React.createElement("li", null, "Helps develop plans to support your business needs"))))),
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-orange text-center" }, "Low Risk Transition in Weeks"),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "" },
                            React.createElement("ul", { className: "p12-in-start" },
                                React.createElement("li", null, "Our propreitary transition methodology follows a 3 phased approach for seamless transition of applications, infrastructure, and the organization"),
                                React.createElement("li", null, "The right mix of co-sourcing is established bringing the least disruption to the business and the fastest transition"),
                                React.createElement("li", null, "New support processes and ticketing tool are established"))))),
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-green text-center" }, "Steady State"),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "" },
                            React.createElement("ul", { className: "p12-in-start" },
                                React.createElement("li", null, "Provide a Hybrid cloud environtment based on the support requirements and SLAs"),
                                React.createElement("li", null, "Finalize SLA requirements and implement optimized support process"),
                                React.createElement("li", null, "Jointly review status and progress in Quarterly Review Meetings"))))),
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-pink text-center" }, "Co-innovation & Continous Improvement"),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "" },
                            React.createElement("ul", { className: "p12-in-start" },
                                React.createElement("li", null, "Business Value Enablers & Performance Optimizers to integrate IT and business processes"),
                                React.createElement("li", null, "Periodic innovation sessions to bring thought leadership and implement industry best practices"),
                                React.createElement("li", null, "Innovate with your business to keep ahead of competition")))))))));
};
exports.default = exports.EnterpriseManagedservice;


/***/ }),

/***/ "./src/components/Forms/Featured.tsx":
/*!*******************************************!*\
  !*** ./src/components/Forms/Featured.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Featured = () => {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("img", { className: "  text-center py-5 mt-5", src: "img/Careers.png", width: "100%", alt: "Careers" }),
            React.createElement("div", { className: "text-center centered " },
                React.createElement("div", { className: "text-white" },
                    React.createElement("h3", null, "Resources")))),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12" },
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement(react_router_dom_1.Link, { to: "/featured" },
                    React.createElement("button", { className: 'btn btnResource menu-bg' }, "Featured"))),
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement(react_router_dom_1.Link, { to: "/casestudy" },
                    React.createElement("button", { className: 'btn btnResource menu-bg' }, "Case Studies"))),
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement(react_router_dom_1.Link, { to: "/videos" },
                    React.createElement("button", { className: 'btn btnResource menu-bg' }, "Videos")))),
        React.createElement("div", { className: "d-flex justify-content-around  align-items-center flex-col", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", null,
                React.createElement("div", { className: "p-5" },
                    React.createElement("img", { src: "img/Synectiks-Enterprise-DevOps-Strategies.png", width: "100%", alt: "Enterprise-DevOps" }),
                    " ",
                    React.createElement("div", { className: "text-group mt-3" },
                        React.createElement("p", null, "Zero downtime, Zero Fault Petabytes storage migration of Largest Financial Sector."),
                        " ",
                        React.createElement("a", { href: "" },
                            "Learn more ",
                            React.createElement("i", { className: "fa fa-arrow-right" }))))),
            React.createElement("div", null,
                React.createElement("div", { className: "p-5" },
                    React.createElement("img", { src: "img/Synectiks-Enterprise-Transformation.png", width: "100%", alt: "Enterprise-Transformation" }),
                    " ",
                    React.createElement("div", { className: "text-group mt-3" },
                        React.createElement("p", null, "Zero downtime, Zero Fault Petabytes storage migration of Largest Financial Sector."),
                        " ",
                        React.createElement("a", { href: "" },
                            "Learn more ",
                            React.createElement("i", { className: "fa fa-arrow-right" })))))),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center flex-col", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", null,
                React.createElement("div", { className: "p-5" },
                    React.createElement("img", { src: "img/Synectiks-Microservice-Platform.png", width: "100%", alt: "Microservice-Platform" }),
                    " ",
                    React.createElement("div", { className: "text-group mt-3" },
                        React.createElement("p", null, "Zero downtime, Zero Fault Petabytes storage migration of Largest Financial Sector."),
                        " ",
                        "======= className=\"card-img-Foundation text-center py-5 mt-5\" src=\"img/Resources.png\" width=\"100%\" alt=\"Card image Resource\" />"),
                    React.createElement("div", null,
                        React.createElement("h2", { className: 'text-center' }, "FEATURED")),
                    React.createElement("div", { className: "d-flex justify-content-around align-items-center" },
                        React.createElement("div", { className: "w-25 p-5 bg-card-theme" },
                            React.createElement("img", { src: "img/SM.png", width: "100%", alt: "Img" }),
                            " "),
                        React.createElement("div", { className: "text-group" },
                            React.createElement("h4", { className: "font-weight-bold" }, "Software Migration "),
                            React.createElement("p", null, "Zero downtime, Zero Fault Petabytes storage migration of Largest Financial Sector."),
                            " ",
                            React.createElement("a", { href: "" },
                                "Learn more ",
                                React.createElement("i", { className: "fa fa-arrow-right" })))),
                    React.createElement("div", { className: "d-flex justify-content-around " },
                        React.createElement("div", null,
                            React.createElement("div", { className: "p-5" },
                                React.createElement("img", { src: "img/Featured.png", width: "100%", alt: "Featured" }),
                                " ",
                                React.createElement("div", { className: "text-group mt-5" },
                                    React.createElement("p", null, "Zero downtime, Zero Fault Petabytes storage migration of Largest Financial Sector."),
                                    " ",
                                    ">>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691",
                                    React.createElement("a", { href: "" },
                                        "Learn more ",
                                        React.createElement("i", { className: "fa fa-arrow-right" }))))),
                        React.createElement("div", null,
                            React.createElement("div", { className: "p-5" }),
                            React.createElement("img", { src: "img/Synectiks-Open-Platform.png", width: "100%", alt: "Open-Platform" }),
                            " ",
                            React.createElement("div", { className: "text-group mt-3" },
                                React.createElement("p", null, "Zero downtime, Zero Fault Petabytes storage migration of Largest Financial Sector."),
                                " ",
                                "=======",
                                React.createElement("img", { src: "img/Featured.png", width: "100%", alt: "Featured" }),
                                " ",
                                React.createElement("div", { className: "text-group mt-5" },
                                    React.createElement("p", null, "Zero downtime, Zero Fault Petabytes storage migration of Largest Financial Sector."),
                                    " ",
                                    ">>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691",
                                    React.createElement("a", { href: "" },
                                        "Learn more ",
                                        React.createElement("i", { className: "fa fa-arrow-right" }))))))),
                "======= >>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691"),
            "); }; export default Featured;")));
};


/***/ }),

/***/ "./src/components/Forms/Forms.tsx":
/*!****************************************!*\
  !*** ./src/components/Forms/Forms.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const btn = {
    borderRadius: '6px',
    width: '110px',
    height: '36px',
    background: 'linear-gradient(to bottom, #9a56ff, #d78afc)',
};
const italic = {
    fontStyle: 'italic',
};
const inputBox = {
    border: 'none',
    backgroundColor: '#f2f2f2',
    width: '150%',
};
const textArea = {
    border: 'none',
    backgroundColor: '#f2f2f2',
    width: '150%',
    height: '110px',
};
const borderRadius_6 = {
    borderRadius: '6px',
};
const inline = {
    display: 'inline-flex',
};
exports.Forms = () => {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement("img", { className: "  text-center", src: "img/NiceToMeet.png", width: "100%", alt: "Card image Foundation" })),
        React.createElement("div", null,
            React.createElement("h2", { className: 'text-center mt-5' }, "CONTACT FORM")),
        React.createElement("div", { className: "d-flex justify-content-around " },
            React.createElement("div", null,
                React.createElement("p", null, "Name *"),
                React.createElement("input", { style: inputBox })),
            React.createElement("div", null,
                React.createElement("p", null, "E-Mail *"),
                React.createElement("input", { style: inputBox }))),
        React.createElement("div", { className: "d-flex justify-content-around " },
            React.createElement("div", null,
                React.createElement("p", null, "Phone *"),
                React.createElement("input", { style: inputBox })),
            React.createElement("div", null,
                React.createElement("p", null, "Subject *"),
                React.createElement("input", { style: inputBox }))),
        React.createElement("div", { className: "d-flex justify-content-around " },
            React.createElement("div", null,
                React.createElement("p", null, "Services *"),
                React.createElement("select", { style: inputBox },
                    React.createElement("option", { value: "enterprise" }, "Enterprise Transformation"),
                    React.createElement("option", { value: "foundation" }, "Foundation"),
                    React.createElement("option", { value: "migration" }, "Migration & Deployment"),
                    React.createElement("option", { value: "operations" }, "Operations"),
                    React.createElement("option", { value: "optimization" }, "Optimization"),
                    React.createElement("option", { value: "others" }, "Others"))),
            React.createElement("div", null,
                React.createElement("p", null, "Comment *"),
                React.createElement("input", { style: inputBox }))),
        React.createElement("div", { className: 'text-center p-5' },
            React.createElement("button", { style: btn, className: 'btn menu-bg' }, "Send")),
        React.createElement("div", null,
            React.createElement("h2", { className: 'text-center' }, "CONTACT US")),
        React.createElement("div", { className: "d-flex justify-content-around mt-5" },
            React.createElement("div", null,
                React.createElement("h5", null, "USA"),
                React.createElement("small", { style: italic },
                    "300 Alexander Park Drive, Suite 215,",
                    React.createElement("br", null),
                    "Princeton, NJ 08540",
                    React.createElement("br", null),
                    "Sales: +1 (609) 608-0429 X 112",
                    React.createElement("br", null),
                    "Office: +1 (609) 608-0429",
                    React.createElement("br", null))),
            React.createElement("div", null,
                React.createElement("h5", null, "INDIA"),
                React.createElement("small", { style: italic },
                    "3rd Floor, Plot# 25 & 26,",
                    React.createElement("br", null),
                    "Survey # 71, Madhapur,",
                    React.createElement("br", null),
                    "Hyderabad, IN 500 081",
                    React.createElement("br", null),
                    "Office: +91 (40) 4857 4411",
                    React.createElement("br", null))),
            React.createElement("div", null,
                React.createElement("h5", null, "SINGAPORE"),
                React.createElement("small", { style: italic },
                    "1 Sophia Road, #05-23,",
                    React.createElement("br", null),
                    "Peace Center,",
                    React.createElement("br", null),
                    "Singapore 228149",
                    React.createElement("br", null)))),
        React.createElement("div", { className: 'text-center p-5' },
            React.createElement("h5", null, "SOCIALS"),
            React.createElement("i", { className: "fa fa-twitter", "aria-hidden": "true" }),
            React.createElement("small", { style: italic }, "Twitter"),
            "\u2003",
            React.createElement("i", { className: "fa fa-facebook-square", "aria-hidden": "true" }),
            React.createElement("small", { style: italic }, "Facebook"),
            "\u2003",
            React.createElement("i", { className: "fa fa-linkedin-square", "aria-hidden": "true" }),
            React.createElement("small", { style: italic }, "Linkedin")),
        React.createElement("div", null,
            React.createElement("img", { className: "  text-img mx-auto", style: borderRadius_6, src: "img/location.png", width: "90%", alt: "Card image Foundation" }))));
};
exports.default = exports.Forms;


/***/ }),

/***/ "./src/components/Forms/Foundation.tsx":
/*!*********************************************!*\
  !*** ./src/components/Forms/Foundation.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const colorRed = {
    color: '#ff0000',
    textDecoration: 'none'
};
const btn = {
    borderRadius: '6px',
    width: '110px',
    height: '36px',
    background: 'linear-gradient(to bottom, #9a56ff, #d78afc)',
};
const italic = {
    fontStyle: 'italic',
};
const inputBox = {
    border: 'none',
    backgroundColor: '#f2f2f2',
    width: '150%',
};
const textArea = {
    border: 'none',
    backgroundColor: '#f2f2f2',
    width: '150%',
    height: '110px',
};
const borderRadius_6 = {
    borderRadius: '6px',
};
const inline = {
    display: 'inline-flex',
};
exports.Foundation = () => {
    return (React.createElement("div", { className: "bg-lightgrey" },
        React.createElement("div", { className: "container pb-5" },
            React.createElement("div", { className: "row main-card pb-5" },
                React.createElement("div", { className: "col-md-12 col-12-lg card-deck" },
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/foundation", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Foundation.png", alt: "Foundation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Foundation")),
                            React.createElement("div", { className: "pointer text-center" },
                                React.createElement("h1", null, "\u00BB")))),
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/transformation", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Transformation.png", alt: "Transformation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Transformation")))),
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/operations", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Operation.png", alt: "Operation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Operation"))))))),
        React.createElement("div", { className: "p-5 mt-5 text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h3", { className: "text-center" }, "Synectiks\u00A0Open\u00A0Xformation\u00A0Platform"),
            React.createElement("p", { className: "lineHeight-24 pt-5" }, "As every business today need to address volume/velocity challenges, it must evolve to stay ahead of demand. Cloud adoption requires a secure and consistent Foundation to allow enterprises migrate their workloads at speed. Smart tooling and automation hugely streamline delivery and management within organization. We don\u2019t want to waste our customers' resources on \u2018reinventing the wheel\u2019. By productizing our expertise and carefully researching the best tool, we aim to deliver to you a complete solution which offers cost-efficient secure cloud and on the top of it, extremely scalable, reliable, secure application done right. The goal of Xformation platform is to simplify the digital transformation, make customers life simpler, give them flexibility to go to any cloud, create container clusters, develop and deploy microservices/Bigdata/IOT applications seamlessly and manage operations with our automation bots."),
            React.createElement("p", { className: "lineHeight-24" }, "SYNECTIKS Open Xformation platform is consolidation of tools/utilities within a simplified and extensible architecture. The Xformation platform can use all the existing assets and best practices to accelerate Digital Transformation journey and reduce time to do modernization in most defined and secure way."),
            React.createElement("p", { className: "lineHeight-24" }, "SYNECTIKS Open Xformation platform and its Software-Defined Foundation services helps in building the Landing Zone with Network Security to protect applications and data, allowing customers to scale and accelerate their cloud adoption. The comprehensive compliance foundation service includes the creation of a landing zone which is a pre-configured secure environment that implements DISA's Secure Cloud Computing Architecture (SCCA) requirements."),
            React.createElement("p", { className: "lineHeight-24" }, "With SYNECTIKS Xformation platform, companies can take advantage of an API-driven cloud architecture and get going faster.")),
        React.createElement("div", { className: "px-5 text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h3", { className: "text-center pb-3" }, "How\u00A0does\u00A0it\u00A0actually\u00A0work?"),
            React.createElement("div", { className: "text-center" },
                React.createElement("img", { className: "text-center", src: "img/Foundation.svg", width: "75%", alt: "How Foundation Works?" })),
            React.createElement("p", { className: "pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" }, "The Foundation Platform creates at least 3 enclaves to take your products and services in cloud:"),
            React.createElement("ol", { type: "1", className: "lineHeight-24", "data-aos": "fade-up", "data-aos-duration": "2000" },
                React.createElement("li", null,
                    React.createElement("h4", null, "\u00A0Virtual Data Center Management Services")),
                React.createElement("ul", null,
                    React.createElement("li", null, "\u00A0Primarily all management backplane managing multiple products and services. Typical services include (Operation Automation, Monitoring, Log Analysis, Alerting, Authentication & Authorization (AD/LDAP), SSO, OCSP, DHCP, DNS, NTP, PATCH, ACAS, ALM (Application Lifecycle Management Services)")),
                React.createElement("li", null,
                    React.createElement("h4", null, "\u00A0Virtual Data Center Security Services")),
                React.createElement("ul", null,
                    React.createElement("li", null, "\u00A0Software-defined Network Security, Firewall, IDS/IPS (Intrusion Detection & Protection System), HBSS (Host Based Security System) and Compliance Audit system (PCI-DSS/HIPPA/CISP...)")),
                React.createElement("li", null,
                    React.createElement("h4", null, "\u00A0Application Enclaves")),
                React.createElement("ul", null,
                    React.createElement("li", null, "\u00A0 Secure landing zones for mission critical workloads in cloud, provisioned and managed by VDMS/VDSS platforms. The VDMS platform provision a landing zone with quick start Account Setup, Network, Security, Identity & Access based on best practices and standards that can be leveraged across all applications migration."))),
            React.createElement("div", { className: "px-5 py-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
                React.createElement("h3", { className: "text-center" }, "Key\u00A0Features")),
            React.createElement("div", { className: "text-center", "data-aos": "fade-up", "data-aos-duration": "2000" },
                React.createElement("img", { src: "img/Foundation_2.png", width: "75%", alt: "Synectiks Open Xformation Platform" }),
                " "),
            React.createElement("ol", { type: "1", className: "lineHeight-24 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
                React.createElement("li", null,
                    React.createElement("h4", null, "\u00A0Everything Software defined (IaC & Container Orchestration)")),
                React.createElement("p", { className: "lineHeight-24" }, "Through our code, customers can go to any cloud (Private/Public), aggregate hardware resources in pure software-defined way and populate highly secured elastic platform to deliver application services. It will help customers to create and maintain Container delivery clusters (AWS ECS, Kubernetes, Messos DCOS, SWARM) across cloud (Private/Public) in a most efficient manner. It will create a landing platform in cloud which is highly secure and elastic and services can just be deployed across cloud in distributed manner."),
                React.createElement("li", null,
                    React.createElement("h4", null, "\u00A0Continuous Delivery")),
                React.createElement("p", { className: "lineHeight-24" }, "It will help to deliver containerized microservices through quality gates, that will ensure highest level of software quality, agility, and reliability."),
                React.createElement("li", null,
                    React.createElement("h4", null, "\u00A0Rapid Application Delivery")),
                React.createElement("p", { className: "lineHeight-24" }, "It will help customers to rapidly develop/deploy/maintain microservices/Bigdata/IOT applications seamlessly. The base application templates along with delivery and operation automations will be provided so that customers can rapidly build highly scalable applications."),
                React.createElement("li", null,
                    React.createElement("h4", null, "\u00A0Operation Automation")),
                React.createElement("p", { className: "lineHeight-24" }, "It will help customers to manage day to day operations and diagnostics ability with automation bots. Most operation automation bots are written in server less programming."))),
        React.createElement("div", { className: "p-5 text-justify lineHeight-24", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h3", { className: "text-center pb-3" }, "System Architecture of Xformation Platform"),
            React.createElement("div", { className: " text-center" },
                React.createElement("img", { src: "img/Microservice_7.png", width: "75%", alt: "System Architecture of Xformation Platform" }),
                " "),
            React.createElement("b", { className: "pt-3" }, "Notes--"),
            React.createElement("p", null, "This is overall system architecture. The architecture attempts to ensure scalability across every layer (Infrastructure/Application Services) to ensure horizontal scalability everywhere. This is the master architecture to write a highly scale-out application, it talks about application services, compute and network platform."),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("h4", null, "Section 1")),
                React.createElement("p", null, "The upper half deals with the hardware aggregation on the top of cloud layer. With the available container orchestrator, we aggregate CPU/Network/Storage and it looks like a One big consolidated resource. You can deploy application services seamlessly through the Continuous Delivery pipeline and they run being transparent to the underneath computing resources. At application level, the scalability is achieved at individual service level as well as elastic resource pool level."),
                React.createElement("li", null,
                    React.createElement("h4", null, "Section 2")),
                React.createElement("p", null, "The layer no section 2, primarily involves creating resources across Private/Public cloud. In case of Hybrid cloud, we prefer opting for our Equinix IBX/IOA implementation so that Private/Public clouds are hosted in same private address space. Equinix is doing that."),
                React.createElement("li", null,
                    React.createElement("h4", null, "Section 3")),
                React.createElement("p", null,
                    "The bottom half deals with hardware and network scale-out. The architecture assumes hyper scaling (",
                    React.createElement("b", null, "Intel RSD Implementation"),
                    ") to seamlessly add CPU/Memory/Storage and create any private cloud on top of it."),
                React.createElement("li", null,
                    React.createElement("h4", null, "Section 4")),
                React.createElement("p", null,
                    "At the network layer, it assumes that, private and public cloud are hosted in same colocation ensuring minimal hop between them as well as they stay in same private network space. We collaborate with Equinix colocation platform and use their IBX/IOA based communication to guarantee the scalability/performance and security at network layer.",
                    React.createElement("br", null),
                    "SYNECTIKS Xformation platform currently implements the Automation and Orchestration of the cloud, Container Orchestrator, DevOps and ALM Layer, primarily Layer 1 & 2."))),
        React.createElement("div", { className: "px-5 text-justify ", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h3", { className: "text-center pb-3" }, "Application Block Architecture"),
            React.createElement("div", { className: " text-center" },
                React.createElement("img", { src: "img/Microservice_2.png", width: "75%", alt: "Application Block Architecture" }),
                " "),
            React.createElement("b", { className: "pt-3" }, "Notes--"),
            React.createElement("p", null,
                "This is a standard microservice based basic application architecture. We tried to carefully refactor the basic services what any enterprise application would require and provision them separately. Each microservice uses some combination of Cache/SQL/NoSQL/GRAPH/Bigdata databases to make them individually scalable. The real challenges lie in deploying and maintaining so many services along with their databases. We deploy and manage all the components of services in aggregated hardware platform so that we can properly address their lifecycle. ",
                React.createElement("br", null),
                "Here follows the list of basic services along with their functionality and database components:"),
            React.createElement("ol", { type: "1", className: "lineHeight-34" },
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "Session & Security Management"),
                    " -\u00A0Primarily serves session/security/role-based access control. This uses REDIS Cluster (cache DB) and NoSQL database (Dynamo)."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "Configuration Management"),
                    " -\u00A0Serves application configuration and config customization abilities. This uses Dynamo DB (NoSQL) at the backend."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "Workflow Service"),
                    "-- Serves business workflow services. It uses Dynamo DB (NoSQL) at the backend."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "Content Service"),
                    "--\u00A0Serves storing and accessing and searching of all documents and attachments. It uses mongo DB and distributed filesystem (CEPH) at the backend."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "Search Service"),
                    " --\u00A0Perform elastic and intelligent searches on any record. Uses distributed filesystem for indexing."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "WIKI Service"),
                    " --\u00A0It store and manages the text contents. It uses Aurora RDS."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "SSO Service"),
                    " --\u00A0It manages the Single-Sign-On service."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "Rating / Feedback Service"),
                    " --\u00A0- It manages some basic rating/feedback services. It uses NEo4j and couch cache database."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "Bigdata Analytic Service"),
                    " --\u00A0It implements bigdata based analytic services. It uses DRUID on top of HDFS for OLAP on bigdata."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "Web UI"),
                    "\u00A0-- Application Web based UI."),
                React.createElement("li", null,
                    "\u00A0",
                    React.createElement("b", null, "API GATEWAY"),
                    " -- API gateway for API serving.")),
            React.createElement("p", null, "Workflow service use JCR content service, WIKI service to cater horizontal scalability."),
            React.createElement("p", null, "Apart from this, any application will have its own domain driven services depending on its functionalities. A highly scale-out application should deploy all its basic services along with its domain drive services to an aggregated container cluster. Each individual service uses some combination of Cache/SQL/NoSQL/GRAPH/Bigdata database and they also get deployed in aggregated container cluster.")),
        React.createElement("div", { className: "container", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "d-flex justify-content-around align-items-center my-5 flex-col" },
                React.createElement("div", { className: "" },
                    React.createElement("a", { href: "https://www.youtube.com/channel/UChsy8OZwS-JpNQUpC24ff2g/featured", target: "_blank", "aria-hidden": "true" },
                        React.createElement("img", { src: "img/Video.png", width: "80%", alt: "Synectiks Enterprise Transformtaion" }),
                        " ")),
                React.createElement("div", { className: "text-group  align-self-center" },
                    React.createElement("h4", { className: "font-weight-bold pt-3" },
                        "Synectiks\u00A0Enterprise Transformtaion",
                        " "),
                    React.createElement("p", null, "Moving to AWS cloud with Data Center retirement for Motor Industry."),
                    " ",
                    React.createElement("div", { className: "pb-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/videos" },
                            React.createElement("button", { className: 'btn btnResource menu-bg' }, "View More"))))))));
};
exports.default = exports.Foundation;


/***/ }),

/***/ "./src/components/Forms/HostedInfrastructure.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Forms/HostedInfrastructure.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.HostedInfrastructure = () => {
    return (React.createElement("div", { className: 'bg-lightgrey', "data-aos": "fade-up", "data-aos-duration": "2000" },
        React.createElement("div", { className: 'bg-lightgrey  text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify' },
            React.createElement("div", { className: "w-100 mt-5 pt-3 pr-5  text-black" },
                React.createElement("h1", { className: " hfont" }, "CLOUD"),
                React.createElement("p", { className: "rfont" },
                    React.createElement("b", null,
                        React.createElement("i", null, "Cloud Your Way!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We\u2019ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate your company\u2019s digital transformation and empower your business to stay ahead of the game.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it \u2013 on-premise or private, public or hybrid cloud.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Get no-cost expert guidance.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", null,
                    "We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: "w-100 pt-5 mt-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudCommon.png", alt: "Cloud" }))),
        React.createElement("div", { className: " bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/publiccloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Public Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/privatecloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Private Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/hybridcloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Hybrid Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/colocation", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Colocation"))),
            React.createElement("div", { className: "py-3 col-md-2 nav-item dropdown" },
                React.createElement(react_router_dom_1.Link, { to: "/HostedInfrastructure", id: "hosted", className: 'text-black bg-white noLine' },
                    React.createElement("a", { className: "nav-link", href: "#", id: "cloudnav", "data-toggle": "dropdown" },
                        React.createElement("b", { id: "hosted" }, "Cloud\u00A0Hosted\u00A0Services")),
                    React.createElement("div", { className: "dropdown-menu w17em" },
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudManagedBackup" },
                            " ",
                            "Cloud Managed Backup",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudDisasterRecovery" },
                            " ",
                            "Cloud Disaster Recovery",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/HostedInfrastructure" },
                            " ",
                            "Hosted Infrastructure",
                            " "))))),
        React.createElement("div", { className: "text-black w-100 mt-3 px-5 py-2 flex-col d-flex text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100" },
                React.createElement("img", { src: "img/HostedInfra.png", width: "100%", alt: "Hosted Infrastructure" }),
                " "),
            React.createElement("div", { className: "w-100 px-5 text-black" },
                React.createElement("h2", { className: 'my-3' }, "Hosted Infrastructure"),
                React.createElement("p", { className: "lineHeight-24" }, "SYNECTIKS Infrastructure as a Service (IaaS) provides computing, networking, and storage services with a high degree of control, security, and simplicity."),
                React.createElement("br", null),
                " ",
                React.createElement("p", null, "Support your mission-critical applications and workloads with instant and scalable infrastructure. With SYNECTIKS IaaS, you can focus on your business needs instead of spending the time and money it takes to plan, procure, secure, and manage the right infrastructure to meet your application demands."))),
        React.createElement("div", { className: "w-100 px-5  text-black", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", { className: 'my-3' }, "Quickly Provision Infrastructure for all Your Workloads"),
            React.createElement("p", { className: "lineHeight-24" }, "Whether your mission-critical applications powered by Linux, Windows Server, SAP, or Oracle, SYNECTIKS offers support for these and other workloads, including your favorite Open Source technologies, choose from a wide variety of virtual machine sizes and storage performance classes configured for specific types of workloads."),
            React.createElement("h4", { className: 'my-3' }, "Let SYNECTIKS keep Your Data Secure"),
            React.createElement("p", { className: "lineHeight-24" }, "SYNECTIKS safeguards data in facilities that are protected by industry-leading physical security systems and are compliant with a comprehensive portfolio of standards and regulations."),
            React.createElement("h4", { className: 'my-3' }, "Reduce and Optimize Infrastructure"),
            React.createElement("p", { className: "lineHeight-24" }, "Deliver the availability, security, and performance your workloads require at a fraction of the cost of running them on-premises. Pay for only the infrastructure you use for virtual machines, reduce expenses for predictable workloads with SYNECTIKS Reserved VM Instances."),
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement(react_router_dom_2.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "Contact\u00A0Us\u00A0")),
                "to learn more about SYNECTIKS Infrastructure as a Service.",
                React.createElement("br", null),
                " "))));
};
exports.default = exports.HostedInfrastructure;


/***/ }),

/***/ "./src/components/Forms/Hybridcloud.tsx":
/*!**********************************************!*\
  !*** ./src/components/Forms/Hybridcloud.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Hybridcloud = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 mt-5 pt-3 pr-5  text-black" },
                React.createElement("h1", { className: " hfont" }, "CLOUD"),
                React.createElement("p", { className: "rfont" },
                    React.createElement("b", null,
                        React.createElement("i", null, "Cloud Your Way!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We\u2019ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate your company\u2019s digital transformation and empower your business to stay ahead of the game.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it \u2013 on-premise or private, public or hybrid cloud.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Get no-cost expert guidance.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", null,
                    "We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: "w-100 pt-5 mt-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudCommon.png", alt: "Cloud" }))),
        React.createElement("div", { className: " bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/publiccloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Public Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/privatecloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Private Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/hybridcloud", id: "hybrid", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Hybrid Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/colocation", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Colocation"))),
            React.createElement("div", { className: "py-3 col-md-2 nav-item dropdown" },
                React.createElement(react_router_dom_1.Link, { to: "/HostedInfrastructure", className: 'text-black bg-white noLine' },
                    React.createElement("a", { className: "nav-link", href: "#", id: "cloudnav", "data-toggle": "dropdown" },
                        React.createElement("b", null, "Cloud\u00A0Hosted\u00A0Services")),
                    React.createElement("div", { className: "dropdown-menu w17em" },
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudManagedBackup" },
                            " ",
                            "Cloud Managed Backup",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudDisasterRecovery" },
                            " ",
                            "Cloud Disaster Recovery",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/HostedInfrastructure" },
                            " ",
                            "Hosted Infrastructure",
                            " "))))),
        React.createElement("div", { className: 'text-center mt-3 lineHeight-24' }),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 " },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/HybridCloud.jpg", alt: "Hybrid Cloud" })),
            React.createElement("div", { className: "w-100 px-5 text-black" },
                React.createElement("h2", null, "Hybrid Cloud"),
                React.createElement("p", null,
                    React.createElement("b", null,
                        React.createElement("i", null, "Bridge Your Clouds, Build Your Future!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "Enterprises are adopting a hybrid, multi-cloud approach to enable greater flexibility and application modernization, which include the use of multiple cloud providers like AWS, Azure or Google Cloud, or traditional on-premises environments.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "A hybrid, multi-cloud management framework will offer operational agility and power to identify, analyze and respond quickly to changes in these mixed environments.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("div", { className: "container-fluid px-5 py-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "row justify-content-around align-items-center" },
                React.createElement("div", { className: "card card-hybcld mx-2" },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-logoblue text-center" },
                        React.createElement("span", null, "Simple")),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "lineHeight-24" },
                            "Standardize and automate orchestration workflows and blur the boundaries across hybrid cloud locations.",
                            React.createElement("br", null),
                            " "))),
                React.createElement("div", { className: "card card-hybcld mx-2" },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-logoblue text-center" },
                        React.createElement("span", null, "Scalable")),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "lineHeight-24" },
                            "The pay-as-you-go scalability is ideal for heavy or unpredictable traffic - and can reduce IT costs.",
                            React.createElement("br", null),
                            " "))),
                React.createElement("div", { className: "card card-hybcld mx-2" },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-logoblue text-center" },
                        React.createElement("span", null, "Secure")),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "lineHeight-24" },
                            "When you need enhanced security and ultimate control for business-critical apps and data, incorporate a private cloud.",
                            React.createElement("br", null),
                            " ")))))));
};
exports.default = exports.Hybridcloud;


/***/ }),

/***/ "./src/components/Forms/Managedservices.tsx":
/*!**************************************************!*\
  !*** ./src/components/Forms/Managedservices.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Managedservices = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: "w-100 py-5 mt-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/Managedservice.png", alt: "Managed Services" })),
        React.createElement("div", { className: ' text-black w-100  text-white px-5 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "w-100  text-black" },
                    React.createElement("h2", { className: 'mt-3' }, "We are SYNECTIKS Managed Services.")),
                React.createElement("p", { className: "lineHeight-24" },
                    "Today\u2019s data center and cloud environments are becoming more and more complex. SYNECTIKS provides the automation, technical expertise, business acumen, and global reach so that you have the resources you want, when and how you need them. With our SYNECTIKS Managed Services, we help you reduce costs and gain efficiencies, flexibility and scalability.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Whether you want to optimize your existing infrastructure or fully outsource the management of your Data Center Operations, our Managed Services are designed to complement your in-house expertise. Whatever the scope of service you require, as the world\u2019s leading IT services provider, we\u2019re perfectly placed to deliver the efficiencies you require, along with the full assurance of meeting your security, compliance and performance needs.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We complement the existing storage infrastructure with a diverse portfolio of solutions to helps you assess, plan and design a more consolidated, flexible and resilient storage environment. It will help you to implement, migrate and optimize your IT infrastructure which enables your business to quickly respond to market changes.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("div", { className: "w-100 px-5  text-black", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-24" }, "SYNECTIKS offers a full suite of Managed Services capabilities for some of the most demanding and complex businesses and governments in the world. Our world-class services, include:")),
        React.createElement("div", { className: "d-flex  p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "pb-3 col-sm-4  m-1" },
                React.createElement("div", { className: "w-75  py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Architecture, Design and Deployment")))),
            React.createElement("div", { className: "pb-3 col-sm-4  m-1" },
                React.createElement("div", { className: "w-75  py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Data Center Consolidation Services")))),
            React.createElement("div", { className: "pb-3 col-sm-4  m-1" },
                React.createElement("div", { className: "w-75  py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Data Migration Services"))))),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-75 px-5 py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Software Defined Infrastructure Services")))),
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-75 px-5 py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Automation")))),
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-75 px-5 py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Operations & Support Services"))))),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-75 px-5 py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Project Management")))),
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-75 px-5 py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Auditing & Monitoring Services")))),
            React.createElement("div", { className: "pb-3 col-sm-4" },
                React.createElement("div", { className: "w-75 px-5 py-3" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Managed Security Services"))))),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "lineHeight-24 list-tick" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Benefit of leveraging SYNECTIKS Managed Services:")),
                    React.createElement("ul", { className: "lineHeight-34" },
                        React.createElement("li", null, "\u00A0Exclusive focus and expertise in storage domain"),
                        React.createElement("li", null, "\u00A0Reduced risk with end-to-end specialists and faster time to market"),
                        React.createElement("li", null, "\u00A0Improved cost efficiencies"),
                        React.createElement("li", null, "\u00A0Business continuity, backup and data protection"),
                        React.createElement("li", null, "\u00A0Data archive to meet relevant compliance and regulatory requirements"),
                        React.createElement("li", null, "\u00A0Data migration services to create flexibility, minimize migratory costs, unplanned downtime and outages"),
                        React.createElement("li", null, "\u00A0Digital capacity to counter scaling business needs through storage modernization"),
                        React.createElement("li", null, "\u00A024/7\u00D7365 support for both global onsite and offshore service delivery model to reduce operation cost")))))));
};
exports.default = exports.Managedservices;


/***/ }),

/***/ "./src/components/Forms/Microservicebenefit.tsx":
/*!******************************************************!*\
  !*** ./src/components/Forms/Microservicebenefit.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Microservicebenefit = () => {
    return (React.createElement("div", { className: 'bg-lightgrey text-justify ' },
        React.createElement("div", { className: "w-100 py-5 mt-5" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/MSbenefits.png", alt: "Devopsmain Services" })),
        React.createElement("div", { className: "px-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Key Benefits of Microservices"),
            React.createElement("div", { className: "d-flex col-lg-12 lineHeight-34 flex-col pt-3" },
                React.createElement("div", { className: "col-sm-6 list-tick" },
                    React.createElement("ul", null,
                        React.createElement("h5", null, "Product Quality:"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Optimize Scalability"),
                            ": React fluidly with smaller, self-contained components"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Achieve High Quality"),
                            ": Continuously and confidently develop and test"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Maximize Resource Utilization"),
                            ": Utilize containers for efficient infrastructure consumption"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Minimize Downtime"),
                            ": Perform isolated maintenance"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Increase Reuse and Decrease Overhead"),
                            ": Encourage sharing on API driven architecture"))),
                React.createElement("div", { className: "col-sm-6 list-tick" },
                    React.createElement("ul", null,
                        React.createElement("h5", null, "Process & Culture:"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Streamline Feature Development"),
                            ": Sprint faster to keep up with changing needs"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Increase Innovation"),
                            ": Reorganize into domain specific, end-to-end service teams"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Avoid Tool/Expertise Lock-in"),
                            ": Choose the best technique/technology for the specific problem"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Adopt Existing Third-party Tools"),
                            ": Integrate easily into API driven ecosystems"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Grow User Base/Expand Market"),
                            ": Extend capabilities to external parties"),
                        React.createElement("li", null,
                            React.createElement("b", null, "\u00A0Enable Business Consumption"),
                            ": Solve small problems with measurable outcomes")))),
            React.createElement("div", { className: "w-40 p-5 text-center" },
                React.createElement("img", { src: "img/Microservice_3.png", width: "75%", alt: "DevOps Transformation" }),
                " "),
            React.createElement("p", { className: "lineHeight-24" },
                "Maintaining monolithic applications often proves challenging because it\u2019s difficult to test and release millions of lines of code for tiny changes (in most cases only a few lines). But migrating to microservices is not as simple as it sounds. It requires a big change management process that often includes new team structures (to say nothing of altering the mindset of the organization!). To support the approach, technology stack must also be upgraded. In the microservices scheme, an application is built with a modular approach, making it scalable and easier to deploy. With the right tools, governance and automation in place, updates come much easier.",
                React.createElement("br", null),
                " "),
            React.createElement("p", null, "While Monolith has complexity in codebase, microservices poses the complexity of interaction between many services."),
            React.createElement("br", null)),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12" },
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microserviceexample" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue btnLearn  ' }, "Example of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicebenefit" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue btnLearn   ' }, "Benefits of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicechallenge" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue btnLearn ' }, "Challenges of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicehelp" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue btnLearn ' }, "How we can help you?"))))));
};
exports.default = exports.Microservicebenefit;


/***/ }),

/***/ "./src/components/Forms/Microservicechallenge.tsx":
/*!********************************************************!*\
  !*** ./src/components/Forms/Microservicechallenge.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Microservicechallenge = () => {
    return (React.createElement("div", { className: 'bg-lightgrey text-justify ' },
        React.createElement("div", { className: "w-100 py-5 mt-5" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/MSchallenges.png", alt: "Devopsmain Services" })),
        React.createElement("div", { className: "px-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Key Challenges of Microservices:"),
            React.createElement("div", { className: "d-flex px-5 py-3 flex-col text-center col-lg-12" },
                React.createElement("div", { className: "p-3 m-1 col-md-4 border-grey-2px text-center" },
                    React.createElement("div", { className: "w-100 " },
                        React.createElement("p", { className: "borderbtm-grey-1px" },
                            React.createElement("b", null, "Cultural Challenges")),
                        React.createElement("p", { className: "list-tick text-left lineHeight-34" },
                            React.createElement("ul", null,
                                React.createElement("li", null, "\u00A0You built, you run it"))))),
                React.createElement("div", { className: "p-3 m-1 col-md-4 border-grey-2px text-center" },
                    React.createElement("div", { className: "w-100 " },
                        React.createElement("p", { className: "borderbtm-grey-1px" },
                            React.createElement("b", null, "Architectural Challenges")),
                        React.createElement("p", { className: "list-tick text-left lineHeight-34" },
                            React.createElement("ul", null,
                                React.createElement("li", null, "\u00A0Dealing with asynchronicity"),
                                React.createElement("li", null, "\u00A0Cascading Failures"),
                                React.createElement("li", null, "\u00A0Discovery and Authentication of Services"),
                                React.createElement("li", null, "\u00A0Integration Tests"))))),
                React.createElement("div", { className: "p-3 m-1 col-md-4 border-grey-2px text-center" },
                    React.createElement("div", { className: "w-100 " },
                        React.createElement("p", { className: "borderbtm-grey-1px" },
                            React.createElement("b", null, "Operational Challenges")),
                        React.createElement("p", { className: "list-tick text-left lineHeight-34" },
                            React.createElement("ul", null,
                                React.createElement("li", null, "\u00A0Duplication of processes and tools"),
                                React.createElement("li", null, "\u00A0Complexity moves from components to interactions"),
                                React.createElement("li", null, "\u00A0Debugging across components"),
                                React.createElement("li", null, "\u00A0Deployment")))))),
            React.createElement("p", { className: "lineHeight-24" }, "Thankfully, current cloud-based distributed technologies alleviate the burden of managing monolithic applications by providing a platform to develop and deploy on a dime."),
            React.createElement("p", { className: "lineHeight-24" }, "Three key Technology Drivers to Address Microservices Challenges:"),
            React.createElement("br", null),
            React.createElement("h4", null, "Hardware Aggregation:"),
            React.createElement("br", null),
            React.createElement("p", { className: "lineHeight-24" }, "As you refactor one large monolith application into multiple independent services with their own services and data layer, you probably would end up having 25+ services, 50+ databases (Cache, Relational, NoSQL, Graph, Bigtable, Bigdata). Having them to deploy in Discrete Hardware (server by server), the deployment complexity itself will multiply to 50X at least. So, you essentially need to aggregate the hardware, say you aggregate your Compute/Network/Storage so that it looks like ONE big unit with combined capacity and you keep deploying your services & databases inside that aggregated cluster transparent of underlying Compute/Network/Storage. Thankfully, current cloud-based distributed technologies offer many avenues to aggregate hardware across data centers and geographies."),
            React.createElement("br", null),
            React.createElement("h4", null, "Containerization & Continuous Delivery:"),
            React.createElement("br", null),
            React.createElement("p", { className: "lineHeight-24" }, "As you transform monolith to microservices, your big X become 100 small x. If you deploy those 100 x as layered stack in discrete servers in different way, your deployment complexity would multiply to 1000X. To address this challenge, you definitely need to unify the delivery of services, make sure your services are delivered in same way and they are staged to production environment through some stringent quality gates.  To unify the delivery of multiple services in same way, Containerization play a big role and Containers along with Continuous Delivery channel brings down your 1000X complexity to a factor of X."),
            React.createElement("br", null),
            React.createElement("h4", null, "Operation Automation:"),
            React.createElement("br", null),
            React.createElement("p", { className: "lineHeight-24" }, "An ideal microservices hosting platform is based on geographically spanned cluster and hardware agnostic. While this platform alleviates the burden of managing many servers, operating systems etc., it brings a new set of operational challenges like debugging, logs tracing, many processes and tools running for single application. The operation management paradigm is shifted from managing Compute/Network/Storage and operating system to managing geographically distributed clusters and services management, their interaction. Thankfully, current cloud-based service discovery and cluster wide operation management technologies offer avenues to aggregate those operational challenges."),
            React.createElement("br", null),
            React.createElement("p", { className: "lineHeight-24" }, "Essentially in a microservices ecosystem, you will aggregate, extent & automate. You will aggregate your hardware across DC\u2019s and geographies, develop microservices, bigdata, IOT applications based on libraries and reusable services and continue to do cluster and services automation toward running everything in auto pilot mode."),
            React.createElement("div", { className: "w-40 p-5 text-center" },
                React.createElement("img", { src: "img/Microservice_7.png", width: "75%", alt: "DevOps Transformation" }),
                " "),
            React.createElement("div", { className: "w-40 p-5 text-center" },
                React.createElement("img", { src: "img/Microservice_8.png", width: "75%", alt: "DevOps Transformation" }),
                " "),
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement("h2", null, "One Key Cultural Driver"),
                React.createElement("br", null),
                React.createElement("p", null,
                    " Simply speaking the microservice world is ",
                    React.createElement("br", null),
                    "\u201CSolve small problems, with small teams with measurable outcomes vs solving 1 big problem with 1 large team.\u201D",
                    React.createElement("br", null)),
                React.createElement("p", null,
                    "  Since its small teams being responsible for end to end success, it\u2019s much essential to establish a culture that",
                    React.createElement("br", null),
                    "\u201CYou built it, you run it\u201D. Dev & Ops married, become DevOps.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", null, " It means each employee are skilled to Develop small services and able to maintain its complete lifecycle. That involves a big change in structure & skills of the organization. Most of the microservices adoption will be successful if this cultural transformation is done right, we opine that it contributes 90% towards your success. A typical culturally changed organization will look like as below:")),
            React.createElement("div", { className: "w-40 p-5 text-center" },
                React.createElement("img", { src: "img/Microservice_9.png", width: "75%", alt: "DevOps Transformation" }),
                " ")),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12" },
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microserviceexample" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue       btnLearn  ' }, "Example of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicebenefit" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue       btnLearn   ' }, "Benefits of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicechallenge" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue       btnLearn ' }, "Challenges of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicehelp" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue       btnLearn ' }, "How we can help you?"))))));
};
exports.default = exports.Microservicechallenge;


/***/ }),

/***/ "./src/components/Forms/Microserviceexample.tsx":
/*!******************************************************!*\
  !*** ./src/components/Forms/Microserviceexample.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Microserviceexample = () => {
    return (React.createElement("div", { className: 'bg-lightgrey text-justify ' },
        React.createElement("div", { className: "w-100 py-5 mt-5" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/Microservicesmain.png", alt: "Devopsmain Services" })),
        React.createElement("div", { className: "px-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h2", null, "Example:"),
            React.createElement("p", { className: "lineHeight-24" }, "Say a Travel & Tourism business have major functionalities like Booking/CRM/Finance/Service Desk/Analytics/Recommendation/Ratings/Reviews, some AI/ML... and most of them have some basic features like Session/Preference Config Management/workflows/content (Attachments & Text/wiki content)/search/ session/notification. If we maintain a single business application with all those functionalities bundled inside one installer, having 500+ people team manage the entire product, you will gradually find that you would face challenges to meet the business agility, the entire team will mostly be spent time in regression and emails. It makes a lot of sense to maintain a separate small team which is end to end responsible for booking functionality which in turn uses some common services like search/config/workflows/content/session/notification) and deliver independent releases."),
            React.createElement("p", null, "The typical product component diagram will be as follows:"),
            React.createElement("div", { className: "w-40 p-5 text-center" },
                React.createElement("img", { src: "img/Microservice_2.png", width: "75%", alt: "DevOps Transformation" }),
                " ")),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12" },
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microserviceexample" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue     btnLearn' }, "Example of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicebenefit" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue     btnLearn' }, "Benefits of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicechallenge" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue     btnLearn' }, "Challenges of Microservices"))),
            React.createElement("div", { className: "pb-3 col-sm-3" },
                React.createElement(react_router_dom_1.Link, { to: "/microservicehelp" },
                    React.createElement("button", { className: 'btn text-white bg-logoblue     btnLearn ' }, "How we can help you?"))))));
};
exports.default = exports.Microserviceexample;


/***/ }),

/***/ "./src/components/Forms/Microservicehelp.tsx":
/*!***************************************************!*\
  !*** ./src/components/Forms/Microservicehelp.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Microservicehelp = () => {
    return (React.createElement("div", { className: 'bg-lightgrey text-justify ' },
        React.createElement("div", { className: "w-100 py-5 mt-5" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/Microservicesmain.png", alt: "Devopsmain Services" })),
        React.createElement("div", { className: "px-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "How can SYNECTIKS help you?"),
            React.createElement("p", { className: "lineHeight-24" },
                "SYNECTIKS, a trusted partner with experience migrating monolithic applications to cloud and microservices architecture, can help make the process seamless. Let us help you make the shift so you can capitalize on business opportunities faster.",
                React.createElement("br", null)),
            React.createElement("p", null, "SYNECTIKS has a flexible and effective way of migrating monolithic applications to microservices, which includes the following steps:"),
            React.createElement("div", { className: "w-40 p-5 text-center" },
                React.createElement("img", { src: "img/Microservice_10.png", width: "75%", alt: "DevOps Transformation" }),
                " "),
            React.createElement("ul", { className: "lineHeight-24" },
                React.createElement("li", null, "Discovery and Assessment"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Meet with the Stakeholders, Infrastructure and Application SME\u2019s to gather detailed information about the applications and databases.")),
                React.createElement("li", null,
                    "Business Readiness",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Business Transformation Challenges"),
                        React.createElement("li", null, "Cultural Readiness"))),
                React.createElement("li", null,
                    "Existing Infrastructure and Applications Review",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Application Functionality"),
                        React.createElement("li", null, "Infrastructure & Deployment"),
                        React.createElement("li", null, "Technology Stack"),
                        React.createElement("li", null, "Data Structure"),
                        React.createElement("li", null, "Interfaces"),
                        React.createElement("li", null, "Security & Governance "),
                        React.createElement("li", null, "Existing Pain Points"))),
                React.createElement("li", null, "Provide modernization options, along with Demo / POC how the transition would look like."),
                React.createElement("li", null, "Based on the SYNECTIKS recommendations, provide proposed LOE (Level of Effort)"),
                React.createElement("li", null,
                    "After mutual agreement, SYNECTIKS begins with agile methodology, including:",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Get a deep understanding of the functionality of the existing application"),
                        React.createElement("li", null, "Create Migration RoadMap"),
                        React.createElement("li", null, "Create Risk Plan"),
                        React.createElement("li", null, "Create Target Architectures"),
                        React.createElement("li", null, "Create a project plan and share with all the stakeholders"),
                        React.createElement("li", null, "Split the application into smaller domains"),
                        React.createElement("li", null, "Define the boundaries of the domains and microservices"),
                        React.createElement("li", null, "Finalize the technology stack"),
                        React.createElement("li", null, "Generate infrastructure blueprints"),
                        React.createElement("li", null, "Set up the foundation environment"),
                        React.createElement("li", null, "Put Continuous Integration/Continuous Delivery (CI/CD) pipelines in place"),
                        React.createElement("li", null, "Begin development sprints (SYNECTIKS prefers test-driven development to minimize manual testing)"),
                        React.createElement("li", null, "Help to use SYNECTIKS Application blocks / libraries to do rapid transformation.")))),
            React.createElement("p", null, "SYNECTIKS is committed to working with its customers to meet almost any need:"),
            React.createElement("ul", { className: "lineHeight-24" },
                React.createElement("li", null, "Adapt DevOps culture across organization, essential for developing microservices, foster small, independent teams within the organization to take over ownership of the services."),
                React.createElement("li", null, "Transform your hardware driven infrastructure to a complete multi-cloud hybrid software driven system"),
                React.createElement("li", null, "Streamline communications to ensure success"),
                React.createElement("li", null, "Embrace CI best practices and automate CI/CD processes"),
                React.createElement("li", null, "Embrace operation automations to manage distributed cluster and services")),
            React.createElement("p", { className: "lineHeight-24" }, "With SYNECTIKS Xformation  platform, companies can take advantage of an API driven cloud architecture and get going faster."),
            React.createElement("div", { className: "w-40 p-5 text-center" },
                React.createElement("img", { src: "img/Foundation.svg", width: "75%", alt: "DevOps Transformation" }),
                " "),
            React.createElement("p", { className: "lineHeight-24" },
                "How much effort it takes to perform a Monolith to Microservices transformation?",
                React.createElement("br", null)),
            React.createElement("p", null,
                "Though it depends on complexity & sizing of the existing applications, you could accelerate the transformation process by engaging a microservices SYNECTIKS who can help you as follows:",
                React.createElement("br", null),
                "       ",
                React.createElement("ul", null,
                    React.createElement("li", null, "Accelerate the transformation by using open application and automation blocks and frameworks built by SYNECTIKS team, so that you can leverage lot of existing code and reuse your maximum existing codebase. A typical large transformation project can take a year long effort and often don\u2019t yield results. We recommend taking bottom up approach, take a small piece of functionality, and develop the services and foundation for it rapidly by using existing application blocks and automation framework. You would minimize your risks by investing a small time & money and continue to do so when you see a significant ROI.  The key aspect is time. The advantage of making us your microservices partner is , our open source contribution helps us to deliver values vary rapidly."),
                    React.createElement("li", null, "Embrace DevOps centric culture by delivering you skilled DevOps resources."))),
            React.createElement("h4", null, "Why SYNECTIKS should be your trusted microservice partner?"),
            React.createElement("div", { className: "w-40 p-5 text-center" },
                React.createElement("img", { src: "img/Microservice_11.png", width: "75%", alt: "DevOps Transformation" }),
                " "),
            React.createElement("div", { className: "d-flex justify-content-around align-items-center p-5 flex-col text-center col-md-12" },
                React.createElement("div", { className: "pb-3 col-sm-3" },
                    React.createElement(react_router_dom_1.Link, { to: "/microserviceexample" },
                        React.createElement("button", { className: 'btn text-white bg-logoblue     btnLearn' }, "Example of Microservices"))),
                React.createElement("div", { className: "pb-3 col-sm-3" },
                    React.createElement(react_router_dom_1.Link, { to: "/microservicebenefit" },
                        React.createElement("button", { className: 'btn text-white bg-logoblue     btnLearn' }, "Benefits of Microservices"))),
                React.createElement("div", { className: "pb-3 col-sm-3" },
                    React.createElement(react_router_dom_1.Link, { to: "/microservicechallenge" },
                        React.createElement("button", { className: 'btn text-white bg-logoblue     btnLearn' }, "Challenges of Microservices"))),
                React.createElement("div", { className: "pb-3 col-sm-3" },
                    React.createElement(react_router_dom_1.Link, { to: "/microservicehelp" },
                        React.createElement("button", { className: 'btn text-white bg-logoblue     btnLearn ' }, "How we can help you?")))))));
};
exports.default = exports.Microservicehelp;


/***/ }),

/***/ "./src/components/Forms/Microservices.tsx":
/*!************************************************!*\
  !*** ./src/components/Forms/Microservices.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Microservices = () => {
    return (React.createElement("div", { className: 'bg-lightgrey text-justify ' },
        React.createElement("div", { className: "w-100 py-5 mt-5" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/Microservicesmain.png", alt: "Microservices" })),
        React.createElement("div", { className: "px-5 pt-3 lineHeight-24", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "" },
                "To accommodate the increasing complexity of functional requirements, IT applications have embraced a variety of architectural patterns. Organizations must meet ever-changing business demands \u2014 from mainframe applications and client-server to service oriented architecture (SOA) and microservices.",
                React.createElement("br", null),
                " "),
            React.createElement("p", null,
                React.createElement("i", null,
                    "Microservices architecture is a combination of successful and proven concepts of software engineering such as agile software development, SOA, API-first design and continuous delivery (CD). This architecture and organizational approach to software development is designed to accelerate development cycles, foster innovation and ownership, and improve the ability to maintain and scale applications.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("p", null, "Despite technological advancements, 90 percent of business IT applications are legacy and what are known as \u201Cmonolithic\u201D. These range from mainframe apps where UI, business logic and data storage reside on machines, to client-server applications where layered technologies that support UI, business functionality, and data are stored horizontally. Microservices architecture, on the other hand, divides the functionality into cohesive verticals by implementing a specific domain.")),
        React.createElement("div", { className: "pt-3 text-center", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("img", { src: "img/Microservice_1.png", width: "60%", alt: "Microservices Migration" }),
            " "),
        React.createElement("div", { className: "pt-3 px-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h2", { className: "py-3" }, "Monolith Vs Microservices"),
            React.createElement("div", { className: "text-center" },
                React.createElement("img", { src: "img/monovsmicro.png", width: "75%", alt: "Monolith Vs Microservices" }),
                " ")),
        React.createElement("div", { className: "d-flex justify-content-around align-items-center p-5 flex-col " },
            React.createElement("p", null,
                React.createElement(react_router_dom_1.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "Contact\u00A0Us\u00A0")),
                "to learn more  about SYNECTIKS DevOps Transformation Service."))));
};
exports.default = exports.Microservices;


/***/ }),

/***/ "./src/components/Forms/Migrations.tsx":
/*!*********************************************!*\
  !*** ./src/components/Forms/Migrations.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Migrations = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: 'bg-theme mt-3' },
            React.createElement("h1", { className: 'text-center text-white pt-theme mt-2' }, "Cloud Migrations & Optimization")),
        React.createElement("div", { className: "px-5 pt-4 text-center", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null,
                React.createElement("i", null, "Transformation for Todays Digital Business!"))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-24" }, "Synectiks accelerated migration allows customer to leverage the data processing benefits of cloud sooner, providing cost-savings and solving scalability issues. Our approach is to use a combination of latest industry tools, processes, experience and best practices to provide the best solutions to our customers. The teams perform a quick requirements analysis and GAP analysis to understand the current setup and provide solutions to optimize your applications, storage, databases and overall infrastructure. Synectiks optimization services provides customer the ability to optimize the existing application and infrastructure as follows:"),
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement("i", null,
                    React.createElement("ul", null,
                        React.createElement("li", null, "By taking advantage of cloud native services without having to rewrite the code"),
                        React.createElement("li", null, "By doing Monolith to SOA transformation. Customers enjoy the flexibility to reuse the Synectiks Foundation Microservices components across many applications."),
                        React.createElement("li", null, "By adopting the hybrid model where some workload moves to public cloud in private address space ensuring security and performance."))))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Rehost-"),
            React.createElement("div", { className: "d-flex justify-content-around align-items-center flex-col" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("img", { src: "img/Rehost.png", width: "75%", alt: "Rehost" }),
                    " "))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Refactor-"),
            React.createElement("div", { className: "d-flex justify-content-around align-items-center flex-col" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("img", { src: "img/Refactor.png", width: "75%", alt: "Refactor" }),
                    " "))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Legacy Application Migration\u2013"),
            React.createElement("p", { className: "lineHeight-24 pt-3" }, "Two ways to extract value from legacy apps Extracting the data in a Data Lake and exposing that data through analytical tools. Business Logic: Creating microservices that become APIs enabling business user to assemble various functionalities and truly become a API driven organization with a API centric application architecture. This allows the organization to become a low-code organization where they 'assemble apps' rather than write apps."),
            React.createElement("div", { className: "d-flex justify-content-around align-items-center flex-col" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("img", { src: "img/LegacyApp2.png", width: "75%", alt: "Legacy App Migration" }),
                    " "))),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Accelerated Migration\u2013"),
            React.createElement("p", { className: "lineHeight-24 pt-3" }, "With synectiks xformation  platform, companies can take advantage of an API-driven cloud architecture and get moving faster. Synectiks open xformation platform  offers App/ Delivery/ Automation blocks based on cloud native services that customers can leverage to build application and services rapidly with adequate security and governance."),
            React.createElement("div", { className: " text-center" },
                React.createElement("img", { src: "img/Foundation.svg", width: "75%", alt: "Accelerated Migration" }),
                " ")),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Delivery Pipeline\u2013"),
            React.createElement("p", { className: "lineHeight-24 pt-3" }, "Synectiks xformation platform comes with industry standard CI/CD blueprint infrastructure provisioning and validation, container driven services delivery across clouds,  functional testing, performance testing and security testing and stagewise production deployment tasks. By truly adopting a DevOps based cultural adoption, customers can ensure their product quality , security and compliance posture is continually maintained along with the capability to rapidly deliver features and services with ever increasing security and compliance guidelines."),
            React.createElement("div", { className: " text-center" },
                React.createElement("img", { src: "img/transformation_2.png", width: "75%", alt: "Transformation" }),
                " ")),
        React.createElement("div", { className: "px-5 pt-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Redevelopment \u2013 Microservices Based App Development \u2013"),
            React.createElement("p", { className: "lineHeight-24 pt-3" }, "Synectiks application development service offering allow customers to realize the real benefit of using cloud native services and boosting innovation agility. The offerings involves application redevelopment to implement use cases for batch processing, workflow processing , transient server less functionality or container based microservices. Synectiks open xformation platform  offers App/ Delivery/ Automation blocks based on cloud native services that customers can leverage to build application and services rapidly. A typical microservice based enterprise application component diagram is below:"),
            React.createElement("div", { className: " text-center" },
                React.createElement("img", { src: "img/Enterprise-Platform.png", width: "75%", alt: " Redevelopment Microservices" }),
                " ")),
        React.createElement("div", { className: "px-5 py-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h4", null, "Bigdata Analytic \u2013"),
            React.createElement("p", { className: "lineHeight-24 pt-3" }, "Synectiks analytic service offering allow customers to create data lake for their unstructured, semi structured and structured data and derive real time visibility across their business processes by doing bigdata processing projects. Synectiks simplify the operations complexity by running the multistage transactional services, batch workloads and analytics inside a single platform. Synectiks deep expertise on hardware aggregation coupled with its analytics services offerings, customers can seamlessly run every mission critical workloads inside a single cluster platform and can truly focus on outcomes."),
            React.createElement("div", { className: " text-center" },
                React.createElement("img", { src: "img/Migration_1.png", width: "50%", alt: "Bigdata Analytic" }),
                " "))));
};
exports.default = exports.Migrations;


/***/ }),

/***/ "./src/components/Forms/Networkdesign.tsx":
/*!************************************************!*\
  !*** ./src/components/Forms/Networkdesign.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Networkdesign = () => {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'bg-theme mt-3' },
            React.createElement("h1", { className: 'text-center text-white pt-theme mt-2' }, "Cloud Automation For Medfusion Inc")),
        React.createElement("div", { className: "p-5" }),
        React.createElement("div", { className: 'bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12' },
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Industry"),
                React.createElement("p", null, "Medfusion")),
            React.createElement("div", { className: 'col-md-4 border-block' },
                React.createElement("h3", null, "BUSINESS OBJECTIVE"),
                React.createElement("p", { className: 'px-2' }, "Transformation towards becoming hardware / Os / Vender / Operation agnostic. Make everything software defined.")),
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Technologies"),
                React.createElement("p", null, "AWS, Infrastructure as a code, microservices, devops"))),
        React.createElement("div", { className: "p-5" },
            React.createElement("h2", null, "Overview"),
            React.createElement("p", { className: 'lineHeight-24' }, "Medfusion is a leading patient-provider communications platform, and it is used to streamline workflows that enable healthcare facilities to function more efficiently. The Medfusion\u2019s development and deployment team communicate via an email to the data center admin with an attached form that specifies resource details. Then the admin takes an approval from the manager by email and manually go to vSphere administration console and create the resources as per the requirements. The process includes creating the virtual machine from existing template, and then doing the custom configuration as requested by the user and finally allocating and fixing the IP\u2019s in the resources to send an email to the customer on completing the necessary tasks. However, in case the resources retire, the requestor then emails to admin and the admin fulfills the request. Apparently, things were quite intense and weren\u2019t going along perfectly fine when the resources get retired. They had to face the challenges below."),
            React.createElement("h2", null, "Challenges"),
            React.createElement("p", { className: 'lineHeight-24' }, "Medfusion wanted a solution based on their existing tools which is much easier to build and manage their operations. They need a solution to cater any automations that can be hooked with ease. The resource provisioning should create virtual machines and also the initial bootstrap configuration like the IP/DNS/Security configuration. Medfusion\u2019s clientele wanted a solution to be intelligent enough to substantiate available capacity and create a resource pool accordingly."),
            React.createElement("h2", null, "Solutions"),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("ul", null,
                    React.createElement("li", null, "Medfusion was already using Jira service desk as their ticketing tool and Jenkins for their CI/CD."),
                    React.createElement("li", null, "We designed a complete business process in Jira in aggregation with some automation task in Jenkin."),
                    React.createElement("li", null, "When the dev team sends an email or raise a service desk request, the service desk tickets gets automatically created."),
                    React.createElement("li", null, "Then the admin would approve the request, and on approval, the Jenkin job engine would trigger a provisioning job."),
                    React.createElement("li", null, "Once the job is successful, job engine will notify Jira about the completion along with resource details."),
                    React.createElement("li", null, "Then the ticket status is changed automatically, and the customer gets the acknowledgment through email about the completion."))),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "Automating their current resource provisioning process"),
                React.createElement("br", null),
                "When Medfusion approached Synectiks, they were handling most of the requests from service desk manually and once approved the resources would be provisioned from an automation script, it then sends the log to the request ticket, here the process is set to closure with notification to the requestor. The heavy downpour of requests and tackling it manually to take the requests from service desk consumed their time and resources. After all the assessment and planning we did come up with a solution that caters not only the creations of virtual machines but also to bootstrap their current security configurations. We implemented a complete business process in Jira in conjunction with some automation task in Jenkins. It goes this way, when the Dev team sends an email or a service request, the service desk tickets gets automatically created, and the admin would approve the request. Next, the Jenkin job engine triggers a provisioning job, and the job engine will notify Jira about the completion of the task along with the resource information. Voila! the ticket status will be changed automatically, and their customer would get an email about the completion of the job process."),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "How did Synectiks Consolidate, Validate, and Outline the issues of Large Motor Systems? "),
                React.createElement("br", null),
                "We believe in harvesting information as much as possible that will yield a better solution. That is exactly what we did with Large Motor Company. Upon analyzing their queries on a broader spectrum, we did a quick 360\u00B0 audit on their existing infrastructure and harvested some vital insights on key improvement areas and a plan for any migration path and risks involved in the following process. We conducted multiple PoC\u2019S with Large Motor Company to channel a solid understanding of the technologies and modernize their IT infrastructure. By translating the entire hardware infrastructure into a few lines of software code, we crafted a backbone infrastructure effortlessly. Also, we refactored monolith applications to multiple microservices and established a complete application lifecycle management and operation support system to maintain their business operations. Ultimately, by achieving the required data security, governance, and compliance requirements in the cloud."),
            React.createElement("h2", null, "OUTCOME"),
            React.createElement("p", { className: 'lineHeight-24' }, "We tailored a complete automation solution with their existing tools. On the first note, we saved 60% time and 50% operations cost. We improved the resource provisioning SLA time to 80%. A smart solution that is intelligent enough to verify the available capacity and create a resource pool. With just a few added scripts the customized solution merges with their existing framework."))));
};
exports.default = exports.Networkdesign;


/***/ }),

/***/ "./src/components/Forms/Networkservices.tsx":
/*!**************************************************!*\
  !*** ./src/components/Forms/Networkservices.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Networkservices = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: "w-100 py-5 mt-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/NetworkServices.png", alt: "Network Services" })),
        React.createElement("div", { className: ' text-black w-100  text-white px-5 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "w-100  text-black" },
                    React.createElement("h2", { className: 'mt-3' }, "Network Services")),
                React.createElement("p", { className: "lineHeight-24" },
                    "Networks are the most critical component of an effective enterprise IT environment. Software-defined environments incorporate flexibility, automation, high availability and open standards into your IT landscape so you can meet next-generation agility, innovation and application demand in the cloud.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Network services from SYNECTIKS support your network\u2019s growing need for agility, security and scalability in a multi-vendor, multi-technology environment. We provide straightforward guidance and extensive knowledge on networking across industries, and we use a lifecycle approach that spans strategy, assessment, planning, design, implementation and management. Our services range from network connectivity consulting and integration to managed network services and software-defined networking.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "lineHeight-24 list-tick" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Services Offered")),
                    React.createElement("ul", { className: "lineHeight-34" },
                        React.createElement("li", null,
                            "\u00A0",
                            React.createElement("b", null, "Managed Network Services:"),
                            " Improve agility while reducing cost and complexity across all your hybrid cloud, data center, local and hybrid or software-defined wide area networks."),
                        React.createElement("li", null,
                            "\u00A0",
                            React.createElement("b", null, "Network Connectivity Consulting and Integration:"),
                            "Unify your network and infrastructure, and lay the foundation for your network transformation to adopt cloud and new technologies."),
                        React.createElement("li", null,
                            "\u00A0",
                            React.createElement("b", null, "Software Defined Networking:"),
                            "Modernize your network so that it can sense traffic and automatically reconfigure the network for new workloads and business conditions in a security-rich manner.")))))));
};
exports.default = exports.Networkservices;


/***/ }),

/***/ "./src/components/Forms/Operations.tsx":
/*!*********************************************!*\
  !*** ./src/components/Forms/Operations.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Operations = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: "container pb-5" },
            React.createElement("div", { className: "row main-card pb-5" },
                React.createElement("div", { className: "col-md-12 col-12-lg card-deck" },
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/foundation", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Foundation.png", alt: "Foundation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Foundation")))),
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/transformation", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Transformation.png", alt: "Transformation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Transformation")))),
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/operations", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Operation.png", alt: "Operation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Operation")),
                            React.createElement("div", { className: "pointer text-center" },
                                React.createElement("h1", null, "\u00BB"))))))),
        React.createElement("div", { className: 'text-center mt-5 px-4', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h3", { className: 'pt-5' }, "24x7 Operations for enterprise managed services")),
        React.createElement("div", { "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "pb-3" },
                React.createElement("img", { src: "img/Operations-graph.png", width: "100%", alt: "Operations for enterprise managed services" }),
                " ")),
        React.createElement("div", { className: "container-fluid py-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "row justify-content-around align-items-center" },
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd bg-maroon" }),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "text-center  " }, "We advise on assessment, migration, multi cloud hybrid architecture adoption coupled with our services, software, methodologies to accelerate enterprise transformation towards operation excellence."))),
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd bg-teal" }),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "text-center" }, "Synectiks xformation platform perform continuous audits on infrastructure, application, access management and ensure security compliances (CISP, HIPPA,PCI-DSS, DISA, NIST) across clouds, products and environment."))),
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd bg-orange" }),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "text-center" }, "Synectiks xformation platform perform continuous billing monitoring across the accounts, services, environments, identifies capex spending and underutilized resources."))),
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd bg-green" }),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "text-center" }, "Synectiks continuous delivery platform enables you to continuously release new features and changes with superior quality. The delivery mechanism includes multiple quality gates and staged deployment, that ensures rapid releases with less tests efforts."))),
                React.createElement("div", { className: "card card-hd mx-3" },
                    React.createElement("div", { className: "w-100 card-bd bg-pink" }),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("small", { className: "text-center" }, "Synectiks automation platform automates frequently occurring IT tasks, reducing IT tickets 80%. The intelligent diagnostics platform auto fixes more that 50% general alarms.")))))));
};
exports.default = exports.Operations;


/***/ }),

/***/ "./src/components/Forms/Partners.tsx":
/*!*******************************************!*\
  !*** ./src/components/Forms/Partners.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (42:0)\nYou may need an appropriate loader to handle this file type.\n| };\r\n| div >\r\n> ;\r\n| ;\r\n| ;\r");

/***/ }),

/***/ "./src/components/Forms/Privacypolicy.tsx":
/*!************************************************!*\
  !*** ./src/components/Forms/Privacypolicy.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Privacypolicy = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: 'text-black w-100 mt-3 p-5 mt-5 text-justify' },
            React.createElement("p", { className: "w-100 mt-5 pt-3" },
                React.createElement("h2", null, "SYNECTIKS - Privacy Policy")),
            React.createElement("p", null, "Revision Date: November 22, 2018"),
            React.createElement("p", null, "This Privacy Policy describes how Synectiks Inc., and its affiliates (\"Synectiks,\" \"we,\" \"our\" or \"us\") collect, use, and share information in connection with your use of our websites (including www.synectiks.com), services, and applications (collectively, the \"Services\"). This Privacy Policy (the \"Privacy Policy\") does not apply to information our customers may process when using our Services."),
            React.createElement("p", null, "We may collect and receive information about users of our Services (\"users,\" \"you,\" or \"your\") from various sources, including: (i) information you provide through your user account on the Services (your \"Account\") if you register for the Services; (ii) your use of the Services; and (iii) from third-party websites, services, and partners."),
            React.createElement("p", null,
                "We recommend that you read this Privacy Policy in full to ensure you are fully informed.\u00A0If you have any questions about this Privacy Policy or Synectiks data collection, use, and disclosure practices, please contact us at\u00A0",
                React.createElement(react_router_dom_1.Link, { to: "/contactus" }, "info@synectiks.com.")),
            React.createElement("p", null,
                React.createElement("ol", { type: "1" },
                    React.createElement("h3", null,
                        React.createElement("li", null, "Information We Collect")),
                    React.createElement("ol", { type: "i" },
                        React.createElement("h5", null,
                            React.createElement("li", null, "Site Activity Data")),
                        React.createElement("p", null, "Each time a visitor comes to this website, our web server collects and logs certain information. These access logs are kept for a reasonable period of time. These logs include, but are not restricted to, your machine\u2019s TCP/IP address, your username (if applicable), date, time, and files accessed. These logs are used solely for performance, usability, site administration, security reviews, and to help improve the experience of visitors to our site. They are not sold or shared in any way to third-party organizations."),
                        React.createElement("h5", null,
                            React.createElement("li", null, "Cookies & Similar Technologies")),
                        React.createElement("p", null, "Cookies are small text files placed on your device to store data that can be recalled by a web server in the domain that placed the cookie. This data often consists of a string of numbers and letters that uniquely identifies your computer, but it can contain other information as well. Some cookies are placed by third parties acting on our behalf. We use cookies and similar technologies to store and honor your preferences and settings, enable you to sign-in, provide interest-based advertising, combat fraud, analyze how our products perform and fulfill other legitimate purposes described below. Our website and applications also contain web beacons or other similar technologies, as described below."),
                        React.createElement("p", null, "Synectiks uses cookies and similar technologies for several purposes, depending on the context or product, including:"),
                        React.createElement("p", null,
                            React.createElement("ul", null,
                                React.createElement("li", null,
                                    React.createElement("b", null, "Security.\u00A0"),
                                    " We use cookies to process information that helps us secure our products, as well as detect fraud and abuse."),
                                React.createElement("li", null,
                                    React.createElement("b", null, "Storing Information.\u00A0"),
                                    "We use cookies to remember information you shared. When you provide information to Synectiks, for example when you fill out a contact form on our website, we store the data in a cookie for the purpose of remembering the information you\u2019ve filled out, so that you don\u2019t have to again for future downloads."),
                                React.createElement("li", null,
                                    React.createElement("b", null, "Social Media.\u00A0"),
                                    "Some of our websites include social media cookies, including those that enable users who are logged in to the social media service to share content via that service."),
                                React.createElement("li", null,
                                    React.createElement("b", null, "Feedback.\u00A0"),
                                    "Synectiks uses cookies to enable you to provide feedback on a website."),
                                React.createElement("li", null,
                                    React.createElement("b", null, "Interest-Based Advertising."),
                                    "Synectiks uses cookies to collect data about your online activity and identify your interests so that we can provide advertising that is most relevant to you."),
                                React.createElement("li", null,
                                    React.createElement("b", null, "Analytics.\u00A0"),
                                    "We use first- and third-party cookies and other identifiers to gather usage and performance data. For example, we use cookies to count the number of unique visitors to a web page or service and to develop other statistics about the operations of our products."),
                                React.createElement("li", null,
                                    React.createElement("b", null, "Performance.\u00A0"),
                                    "Synectiks uses cookies to understand and improve how our products and website perform. For example, we use cookies to gather data that helps with load balancing; this helps ensure that our websites remain up and running."))),
                        React.createElement("p", null, "Third parties can also set cookies when you visit Synectiks websites. For example:"),
                        React.createElement("p", null,
                            React.createElement("ul", null,
                                React.createElement("li", null, "Companies we hire to provide services on our behalf, such as site analytics, place cookies when you visit our sites. See opt-out links below."),
                                React.createElement("li", null, "Companies that deliver content, such as videos or news, place cookies on their own. These companies use the data they process in accordance with their privacy policies, which may enable these companies to collect and combine information about your activities across websites, apps, or online services."))),
                        React.createElement("h5", null,
                            React.createElement("li", null, "How to Control Cookies")),
                        React.createElement("p", null, "Most web browsers automatically accept cookies but provide controls that allow you to block or delete them. Please refer to your browser\u2019s privacy or help documentation to find Instructions for blocking or deleting cookies in other browsers.")),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Information You Provide")),
                    React.createElement("ol", { type: "i" },
                        React.createElement("p", null,
                            React.createElement("li", null,
                                React.createElement("b", null, "Account Registration:\u00A0"),
                                " When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number. If you choose to refer a friend to our Services, we may also collect your friend\u2019s email address so that we may send them a referral or promotional code to sign up for our Services.")),
                        React.createElement("p", null,
                            React.createElement("li", null,
                                React.createElement("b", null, "Payment Information:\u00A0"),
                                "When you add your financial account information to your Account, that information is directed to our third-party payment processor. We do not store your financial account information on our systems; however, we have access to, and may retain, subscriber information through our third-party payment processor.")),
                        React.createElement("p", null,
                            React.createElement("li", null,
                                React.createElement("b", null, "Communications:\u00A0"),
                                "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. We may also receive a confirmation when you open an email from us.")),
                        React.createElement("p", null, "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.")),
                    React.createElement("h3", null,
                        React.createElement("li", null, "How We Use Information")),
                    React.createElement("p", null, "We use the information we collect in various ways, including to:"),
                    React.createElement("p", null,
                        React.createElement("ul", null,
                            React.createElement("li", null, "Provide, operate, and maintain our Services;"),
                            React.createElement("li", null, "Improve, personalize, and expand our Services;"),
                            React.createElement("li", null, "Understand and analyze how you use our Services;"),
                            React.createElement("li", null, "Develop new products, services, features, and functionality;"),
                            React.createElement("li", null, "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes;"),
                            React.createElement("li", null, "Process your transactions;"),
                            React.createElement("li", null, "Send you text messages and push notifications;"),
                            React.createElement("li", null, "Find and prevent fraud; and"),
                            React.createElement("li", null, "For compliance purposes, including enforcing our Terms of Service, or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency."))),
                    React.createElement("h3", null,
                        React.createElement("li", null, "How We Share Information")),
                    React.createElement("p", null, "We may share the information we collect in various ways, including the following:"),
                    React.createElement("p", null,
                        React.createElement("b", null, "Vendors and Service Providers."),
                        " We may share information with third-party vendors and service providers that provide services on our behalf, such as helping to provide our Services, for promotional and/or marketing purposes, and to provide you with information relevant to you such as product announcements, software updates, special offers, or other information."),
                    React.createElement("p", null,
                        React.createElement("b", null, "Aggregate Information."),
                        " Where legally permissible, we may use and share information about users with our partners in aggregated or de-identified form that can\u2019t reasonably be used to identify you."),
                    React.createElement("p", null,
                        React.createElement("b", null, "Third-Party Partners."),
                        " We also share information about users with third-party partners in order to receive additional publicly available information about you."),
                    React.createElement("p", null,
                        React.createElement("b", null, "Information We Share When You Sign Up Through a Referral."),
                        "If you sign up for our Services through a referral from a friend, we may share information with your referrer to let them know that you used their referral to sign up for our Services."),
                    React.createElement("p", null,
                        React.createElement("b", null, "Business Transfers."),
                        "Information may be disclosed and otherwise transferred to any potential acquirer, successor, or assignee as part of any proposed merger, acquisition, debt financing, sale of assets, or similar transaction, or in the event of insolvency, bankruptcy, or receivership in which information is transferred to one or more third parties as one of our business assets. "),
                    React.createElement("p", null,
                        React.createElement("b", null, "As Required By Law and Similar Disclosures."),
                        "We may also share information to (i) satisfy any applicable law, regulation, legal process, or governmental request; (ii) enforce this Privacy Policy and our Terms of Service, including investigation of potential violations hereof; (iii) detect, prevent, or otherwise address fraud, security, or technical issues; (iv) respond to your requests; or (v) protect our rights, property or safety, our users and the public. This includes exchanging information with other companies and organizations for fraud protection and spam/malware prevention."),
                    React.createElement("p", null,
                        React.createElement("b", null, "With Your Consent."),
                        "We may share information with your consent."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Our Use of Web Analytics Services")),
                    React.createElement("p", null, "Synectiks website uses technologies from third-party analytics providers, which help us compile aggregated statistics about the effectiveness of our promotional campaigns or other operations. These technologies enable the analytics providers to set or read their own cookies or other identifiers on your device, through which they can collect information about your online activities across applications, websites or other products. However, we prohibit these analytics providers from using web beacons on our sites to collect or access information that directly identifies you (such as your name or email address). You can opt out of data collection or use by some of these analytics providers by clicking the following links:"),
                    React.createElement("p", null,
                        React.createElement("ol", null,
                            React.createElement("li", null,
                                "Google Analytics: ",
                                React.createElement("a", { href: "https://tools.google.com/dlpage/gaoptout", target: "_blank" }, "https://tools.google.com/dlpage/gaoptout")),
                            React.createElement("li", null,
                                "Facebook: ",
                                React.createElement("a", { href: "https://www.facebook.com/help/568137493302217", target: "_blank" }, "https://www.facebook.com/help/568137493302217")),
                            React.createElement("li", null,
                                "LinkedIn: ",
                                React.createElement("a", { href: "https://www.linkedin.com/legal/cookie-policy", target: "_blank" }, "https://www.linkedin.com/legal/cookie-policy")),
                            React.createElement("li", null,
                                "Google AdWords: ",
                                React.createElement("a", { href: "https://policies.google.com/technologies/ads", target: "_blank" }, "https://policies.google.com/technologies/ads")),
                            React.createElement("li", null,
                                "Outbrain Inc.: ",
                                React.createElement("a", { href: "https://www.outbrain.com/legal/privacy", target: "_blank" }, "https://www.outbrain.com/legal/privacy")),
                            React.createElement("li", null,
                                "Marketo: ",
                                React.createElement("a", { href: "https://documents.marketo.com/legal/cookies", target: "_blank" }, "https://documents.marketo.com/legal/cookies")))),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Advertising")),
                    React.createElement("p", null, "Advertising allows us to provide, support, and improve some of our products. Synectiks does not use what you say in email, chat, video calls or voice mail, or your documents, photos or other personal files to target ads to you. We use other data, detailed below, for advertising in our products and on third-party properties. For example:"),
                    React.createElement("p", null, "We may share data we collect with third parties, such as Marketo, Google Analytics, or Facebook (see below), so that the ads you see in other sites and apps serviced by these partners are more relevant and valuable to you."),
                    React.createElement("p", null, "The ads that you see may be selected based on data we process about you, such as your interests and favorites, your location, or the content you view."),
                    React.createElement("p", null, "The ads that you see may also be selected based on other information learned about you over time using demographic data, location data, search queries, interests and favorites, usage data from our products and sites, as well as the sites and apps of our advertisers and partners. We refer to these ads as \u201Cinterest-based advertising\u201D in this statement."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Legal Basis for Processing Personal Information")),
                    React.createElement("p", null, "Synectiks will only use your personal information when the law allows us to. Most commonly, we will use your personal information in the following circumstances:"),
                    React.createElement("p", null,
                        React.createElement("ul", null,
                            React.createElement("li", null, "Where Synectiks need to perform the contract, we are about to enter into or have entered into with you;"),
                            React.createElement("li", null, "Where it is necessary for Synectiks legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests; and"),
                            React.createElement("li", null, "Where Synectiks need to comply with a legal or regulatory obligation."))),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Third-party Services")),
                    React.createElement("p", null, "You may access other third-party services through the Services, for example by clicking on links to those third-party services from within the Services. We are not responsible for the privacy policies and/or practices of these third-party services, and we encourage you to carefully review their privacy policies."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Security")),
                    React.createElement("p", null, "Synectiks is committed to protecting your information. To do so, we employ a variety of security technologies and measures designed to protect information from unauthorized access, use, or disclosure. The measures we use are designed to provide a level of security appropriate to the risk of processing your personal information. However, please bear in mind that the Internet cannot be guaranteed to be 100% secure."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Data Retention")),
                    React.createElement("p", null, "We retain personal information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a service you have requested or to comply with applicable legal, tax, or accounting requirements)."),
                    React.createElement("p", null, "When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Access")),
                    React.createElement("p", null,
                        "If you are a registered user, you may access certain information associated with your Account by logging into our Services or emailing\u00A0",
                        React.createElement(react_router_dom_1.Link, { to: "/contactus" }, "info@synectiks.com"),
                        ". If you terminate your Account, any public activity on your Account prior to deletion may remain stored on our servers and may remain accessible to the public."),
                    React.createElement("p", null, "To protect your privacy and security, we may also take reasonable steps to verify your identity before updating or removing your information. The information you provide us may be archived or stored periodically by us according to backup processes conducted in the ordinary course of business for disaster recovery purposes. Your ability to access and correct your information may be temporarily limited where access and correction could: inhibit Synectiks ability to comply with a legal obligation; inhibit Synectiks ability to investigate, make or defend legal claims; result in disclosure of personal information about a third party; or result in breach of a contract or disclosure of trade secrets or other proprietary business information belonging to Synectiks or a third party."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Your Choices")),
                    React.createElement("p", null, "You can use some of the features of the Services without registering, thereby limiting the type of information that we collect."),
                    React.createElement("p", null, "You may unsubscribe from receiving certain promotional emails from us. If you wish to do so, simply follow the instructions found at the end of the email. Even if you unsubscribe, we may still contact you for informational, transactional, account-related, or similar purposes."),
                    React.createElement("p", null, "Many browsers have an option for disabling cookies, which may prevent your browser from accepting new cookies or enable selective use of cookies. Please note that, if you choose not to accept cookies, some features and the personalization of our Services may no longer work for you. You will continue to receive advertising material but it will not be tailored to your interests."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Children's Privacy")),
                    React.createElement("p", null,
                        "Synectiks does not knowingly collect information from children under the age of 13, and children under 13 are prohibited from using our Services. If you learn that a child has provided us with personal information in violation of this Privacy Policy, you can alert us at\u00A0",
                        React.createElement(react_router_dom_1.Link, { to: "/contactus" }, "info@synectiks.com"),
                        "."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "International Data Transfers")),
                    React.createElement("p", null, "Synectiks is a global business. We may transfer personal information to countries other than the country in which the data was originally collected. These countries may not have the same data protection laws as the country in which you initially provided the information. When we transfer your personal information to other countries, we will protect that information as described in this Privacy Policy."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Changes to this Privacy Policy")),
                    React.createElement("p", null, "This Privacy Policy may be modified from time to time, so please review it frequently. Changes to this Privacy Policy will be posted on our websites. If we materially change the ways in which we use or share personal information previously collected from you through our Services, we will notify you through our Services, by email, or other communication."),
                    React.createElement("h3", null,
                        React.createElement("li", null, "Contact Us")),
                    React.createElement("p", null,
                        "If you have any questions or concerns about this Privacy Policy, please feel free to email us at ",
                        React.createElement(react_router_dom_1.Link, { to: "/contactus" }, "info@synectiks.com"),
                        "."),
                    React.createElement("p", null, "The data controller of your personal information is Synectiks Inc."))))));
};
exports.default = exports.Privacypolicy;


/***/ }),

/***/ "./src/components/Forms/Privatecloud.tsx":
/*!***********************************************!*\
  !*** ./src/components/Forms/Privatecloud.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Privatecloud = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 mt-5 pt-3 pr-5 text-black" },
                React.createElement("h1", { className: " hfont" }, "CLOUD"),
                React.createElement("p", { className: "rfont" },
                    React.createElement("b", null,
                        React.createElement("i", null, "Cloud Your Way!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We\u2019ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate your company\u2019s digital transformation and empower your business to stay ahead of the game.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it \u2013 on-premise or private, public or hybrid cloud.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Get no-cost expert guidance.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", null,
                    "We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: "w-100 pt-5 mt-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudCommon.png", alt: "Cloud" }))),
        React.createElement("div", { className: " bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/publiccloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Public Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/privatecloud", id: "private", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Private Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/hybridcloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Hybrid Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/colocation", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Colocation"))),
            React.createElement("div", { className: "py-3 col-md-2 nav-item dropdown" },
                React.createElement(react_router_dom_1.Link, { to: "/HostedInfrastructure", className: 'text-black bg-white noLine' },
                    React.createElement("a", { className: "nav-link", href: "#", id: "cloudnav", "data-toggle": "dropdown" },
                        React.createElement("b", null, "Cloud\u00A0Hosted\u00A0Services")),
                    React.createElement("div", { className: "dropdown-menu w17em" },
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudManagedBackup" },
                            " ",
                            "Cloud Managed Backup",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudDisasterRecovery" },
                            " ",
                            "Cloud Disaster Recovery",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/HostedInfrastructure" },
                            " ",
                            "Hosted Infrastructure",
                            " "))))),
        React.createElement("div", { className: 'text-center mt-3 lineHeight-24' }),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/PrivateCloud.jpg", alt: "Private Cloud" })),
            React.createElement("div", { className: "w-100  px-5 text-black" },
                React.createElement("h2", null, "Private Cloud"),
                React.createElement("p", null,
                    React.createElement("b", null,
                        React.createElement("i", null, "Power of the cloud while protecting your enterprise!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS Cloud Private is a reliable and scalable cloud platform that runs your infrastructure - built on open-source frameworks like Containers, Kubernetes, etc.., with standard services for deployment, monitoring, logging, and security.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("p", { className: "px-5 py-3", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("b", null, "How Private Cloud Helps Your Business:")),
        React.createElement("div", { className: "container-fluid px-5", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "row justify-content-around align-items-center" },
                React.createElement("div", { className: "card card-pvtcld mx-2 " },
                    React.createElement("div", { className: "w-100 card-bd  py-4 text-white bg-logoblue text-center" },
                        React.createElement("span", null, "Optimize & Secure")),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "lineHeight-24" },
                            "Securing data is essential in building mission-critical applications. Connecting that data to modern cloud services is also a priority. SYNECTIKS Cloud Private lets you do both with consistency.",
                            React.createElement("br", null),
                            " "))),
                React.createElement("div", { className: "card card-pvtcld mx-2 " },
                    React.createElement("div", { className: "w-100 card-bd  py-4 text-white bg-logoblue text-center" }, "Harness Powerful Cloud Services"),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "lineHeight-24" },
                            "For your open-source application runtimes, choose the prescriptive development approach of Cloud Foundry or the more customizable and portable method of Kubernetes Orchestration and Docker Containers.",
                            React.createElement("br", null),
                            " "))),
                React.createElement("div", { className: "card card-pvtcld mx-2 " },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-logoblue text-center" }, "Modernize Your Existing Applications"),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "lineHeight-24" },
                            "Modernize and migrate your applications, build new cloud-based applications, and transform your architecture and infrastructure while moving to a new technology operating model.",
                            React.createElement("br", null),
                            " "))),
                React.createElement("div", { className: "card card-pvtcld mx-2 " },
                    React.createElement("div", { className: "w-100 card-bd py-4 text-white bg-logoblue text-center" }, "Customize Your Resources"),
                    React.createElement("div", { className: "card-body" },
                        React.createElement("p", { className: "lineHeight-24" },
                            "Employ cloud bursting, within a private cloud offering, in the event of spikes in demand. Customize the dedicated compute, storage and networking components to best suit your needs.",
                            React.createElement("br", null),
                            " "))))),
        React.createElement("div", { className: "w-100 px-5 pt-5 text-black text-justify" },
            React.createElement("p", { className: "lineHeight-24" },
                "Begin your journey with SYNECTIKS Cloud Private.",
                React.createElement(react_router_dom_2.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "\u00A0Contact\u00A0Us\u00A0")),
                "to learn more.",
                React.createElement("br", null),
                " "))));
};
exports.default = exports.Privatecloud;


/***/ }),

/***/ "./src/components/Forms/Publiccloud.tsx":
/*!**********************************************!*\
  !*** ./src/components/Forms/Publiccloud.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Publiccloud = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 mt-5 pt-3 pr-5 text-black" },
                React.createElement("h1", { className: " hfont" }, "CLOUD"),
                React.createElement("p", { className: "rfont" },
                    React.createElement("b", null,
                        React.createElement("i", null, "Cloud Your Way!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We\u2019ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate your company\u2019s digital transformation and empower your business to stay ahead of the game.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it \u2013 on-premise or private, public or hybrid cloud.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Get no-cost expert guidance.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", null,
                    "We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: "w-100 pt-5 mt-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudCommon.png", alt: "Cloud" }))),
        React.createElement("div", { className: " bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/publiccloud", id: "public", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Public Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/privatecloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Private Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/hybridcloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Hybrid Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/colocation", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Colocation"))),
            React.createElement("div", { className: "py-3 col-md-2 nav-item dropdown" },
                React.createElement(react_router_dom_1.Link, { to: "/HostedInfrastructure", className: 'text-black bg-white noLine' },
                    React.createElement("a", { className: "nav-link", href: "#", id: "cloudnav", "data-toggle": "dropdown" },
                        React.createElement("b", null, "Cloud\u00A0Hosted\u00A0Services")),
                    React.createElement("div", { className: "dropdown-menu w17em" },
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudManagedBackup" },
                            " ",
                            "Cloud Managed Backup",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudDisasterRecovery" },
                            " ",
                            "Cloud Disaster Recovery",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/HostedInfrastructure" },
                            " ",
                            "Hosted Infrastructure",
                            " "))))),
        React.createElement("div", { className: "text-black w-100 mt-3 px-5 py-3 flex-col d-flex text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/Publiccloud.jpg", alt: "Public Cloud" })),
            React.createElement("div", { className: "w-100 px-5 text-black" },
                React.createElement("h2", null, "Public Cloud"),
                React.createElement("p", { className: "lineHeight-24" },
                    "Our focus is on serving our customers, leverage the ability of the cloud within the ways in which are most impactful to their business. Whether or not you\u2019re wanting to maneuver existing workloads to the cloud, modernize workloads to run cloud-native, or optimize existing cloud workloads, we can facilitate.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("div", { "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h2", { className: 'text-center mt-3' }, "Cloud Services for AWS")),
        React.createElement("div", { className: ' text-black w-100 mt-3 px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "lineHeight-24" },
                    "As a lot of enterprises move to AWS, organizations are challenged to provide corporate oversight, security and price controls across the cloud estate. Poor oversight usually results in overprovisioning of cloud services, wasteful and unplanned disbursement, and instances with open, unsecured ports.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS Cloud Services for AWS provides design, delivery and daily operational support of compute, storage and virtual network infrastructure among the AWS cloud. We tend to monitor and manage system code and infrastructure configurations, and our financial and governance services facilitate scale back uncontrolled consumption. You'll be able to rescale and down to frequently meet your dynamical business requirements, guaranteeing that your IT charges and services can frequently align to business demand.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: "px-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudAWS.png", alt: "Cloud AWS" }))),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-24" },
                "We offer managed service bundles suited to your IT and financial objectives. Whether or not you've got critical workloads that demand a full suite of services or you\u2019re merely searching for a light-touch service to manage charges, we can scale and align to satisfy your requests.",
                React.createElement("br", null),
                " "),
            React.createElement("p", { className: "lineHeight-24" },
                "We mix the advanced watching tools within the industry with our Center of Excellence, giving your organization management of, and more significant visibility into, your AWS surroundings.",
                React.createElement("br", null),
                " "),
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement(react_router_dom_2.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "Contact\u00A0Us\u00A0")),
                "to learn more about SYNECTIKS Cloud Services for AWS.",
                React.createElement("br", null),
                " ")),
        React.createElement("div", { className: " p-5" },
            React.createElement("p", { className: "seperator-grey" })),
        React.createElement("div", { "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("h2", { className: 'text-center' }, "Cloud Services for Microsoft Azure")),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100  text-black" },
                React.createElement("p", { className: "lineHeight-24" },
                    "We provide solution stack for Azure to support your digital transformation. We tend to set up your path to the cloud. We tend to rework and migrate your applications, and facilitate your manage and optimize your hybrid IT atmosphere.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Solutions embrace Managed Services for Azure for design, delivery, and 24x7 support and daily operational support of compute, network, and storage, and Services for Azure Stack to bring the agility of Azure to your knowledge center. Build, modernize, rework and migrate your applications with Application Services for Azure.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS end-to-end services for hybrid IT begins with planning and migration - knowing what to move and how to move it. Next, we transform your applications, optimize for the cloud, and provide ongoing services to help manage the new environment - to make sure you\u2019re secure and paying only for what you need. We plan, move and manage your workloads efficiently with our end-to-end services.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: " px-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudAzure.png", alt: "Cloud Azure" }))),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement(react_router_dom_2.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "Contact\u00A0Us\u00A0")),
                "to learn more about SYNECTIKS Cloud Services for Microsoft Azure.",
                React.createElement("br", null),
                " "))));
};
exports.default = exports.Publiccloud;


/***/ }),

/***/ "./src/components/Forms/Realtime.tsx":
/*!*******************************************!*\
  !*** ./src/components/Forms/Realtime.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Realtime = () => {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'bg-theme mt-3' },
            React.createElement("h1", { className: 'text-center text-white pt-theme mt-2' }, "RELIANCE JIO CASE STUDY")),
        React.createElement("div", { className: "px-5 pt-5" },
            React.createElement("p", { className: 'lineHeight-24' }, "The leadership took a decision to become Harwdare/OS/Operation/vendor agnostic and achive scalability and reliability across the organisation. We helped them with all the technologies, training to make that happen. Our open platform helped them to become complete software defined, automate all operations. We helped them to learn to manage IT in most modern way."),
            React.createElement("br", null)),
        React.createElement("div", { className: 'bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12' },
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Industry"),
                React.createElement("p", null, "Telecom")),
            React.createElement("div", { className: 'col-md-4 border-block' },
                React.createElement("h3", null, "BUSINESS OBJECTIVE"),
                React.createElement("p", { className: 'px-2' }, "Transformation towards becoming hardware / Os / Vender / Operation agnostic. Make everything software defined.")),
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Technologies"),
                React.createElement("p", null, "AWS, Infrastructure as a code, microservices, devops"))),
        React.createElement("div", { className: "p-5" },
            React.createElement("h2", null, "Overview"),
            React.createElement("p", { className: 'lineHeight-24' }, "Reliance Jio Infocom Limited is a leading mobile network operator in India. We all know that their network is enormous and immense, and too often the operations team has to handle colossal workflows at all times of the day, the workloads become very intense and affect the performance of the data. Reliance Jio operations get piled up with tedious tasks every minute and extensively needs real-time business processes to monitor their workloads. From new service activations to monitoring tons of data, the telecom company had a tough time in doing RCA with its existing licensed monitoring applications. While at it, when dealing with a mammoth telecom company and assuring them that we can handle and provide a solution which is 100% scalable was a tough part for us. Once we succeeded in gaining their trust, we moved on to analyze and plan a panacea that was expected by the telecom company."),
            React.createElement("h2", null, "Challenges"),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "Licenced Monitoring Software:"),
                "Reliance Jio was mostly using licensed products for more than 30 applications to maintain a large amount of data. Most of these applications were service based and big data related. They needed a customized open source tool to manage and run tons of data via millions of network elements.",
                React.createElement("br", null),
                React.createElement("b", null, "Customized Tool:"),
                " The telecom company required a personalized tool to monitor and provide an outright solution that helps in taking more viable decisions.",
                React.createElement("br", null),
                React.createElement("b", null, "Massive data:"),
                " Generating high volumes of data in petabytes and processing it in real rear time with more profound insights was another challenge to the telecom company.",
                React.createElement("br", null)),
            React.createElement("h2", null, "Solutions"),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("ul", null,
                    React.createElement("li", null, " We designed and developed a real-time monitoring framework for business use case implementations."),
                    React.createElement("li", null, "The solution is customized and scalable using sophisticated analytic tools."),
                    React.createElement("li", null, "Visibility on certain key metrics is the prime factor that reliance Jio achieved through our real-time monitoring services."),
                    React.createElement("li", null, "Knowing the workflow orchestration of their applications widened their business payoffs in a short span of time."))),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "How did we handle the problem and customized a tool for better visibility?"),
                React.createElement("br", null),
                "We used Prometheus a powerful systems & service monitoring tool and Influxdb as a time series database, with Grafana metric analysis for visualizing time series data. We hosted the entire technology stack in Kubernetes platform so that it can scale elastically with minimal operations. Intelligent plugin scripts were embedded to work with Prometheus data collection engine and extract intuitive data from the large dataset. Smart analytics were built on intelligent data stored in time series database and this resulted in important business monitoring views."),
            React.createElement("h2", null, "OUTCOME"),
            React.createElement("p", { className: 'lineHeight-24' }, "The telecom company was able to achieve a 100% open and highly scalable monitoring platform. We helped them in harvesting right business insights in real time that responds to their business needs. Finally, Reliance Jio got the flexibility to have complete visibility on the valuable business information instead of being flooded with clear data. The telecom company now can rapidly develop any business monitoring capability as needed. A highly cost-effective scalable monitoring platform."))));
};
exports.default = exports.Realtime;


/***/ }),

/***/ "./src/components/Forms/Softwaredefined.tsx":
/*!**************************************************!*\
  !*** ./src/components/Forms/Softwaredefined.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Softwaredefined = () => {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'bg-theme mt-3' },
            React.createElement("h1", { className: 'text-center text-white pt-theme mt-2' }, "Large Motor Company")),
        React.createElement("div", { className: "px-5" },
            React.createElement("p", { className: 'lineHeight-24 pt-5' }, "The leadership took a decision to become Harwdare/OS/Operation/vendor agnostic and achive scalability and reliability across the organisation. We helped them with all the technologies, training to make that happen. Our open platform helped them to become complete software defined, automate all operations. We helped them to learn to manage IT in most modern way."),
            React.createElement("br", null)),
        React.createElement("div", { className: 'bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12' },
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Industry"),
                React.createElement("p", null, "Automobiles")),
            React.createElement("div", { className: 'col-md-4 border-block' },
                React.createElement("h3", null, "BUSINESS OBJECTIVE"),
                React.createElement("p", { className: 'px-2' }, "Transformation towards becoming hardware / Os / Vender / Operation agnostic. Make everything software defined.")),
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Technologies"),
                React.createElement("p", null, "AWS, Infrastructure as a code, microservices, devops"))),
        React.createElement("div", { className: "p-5" },
            React.createElement("h2", null, "Overview"),
            React.createElement("p", { className: 'lineHeight-24' }, "Four data centers and more than two thousand servers running 24/7, with twenty plus applications and two hundred operations team, Large Motor Company handles massive daily operations round the clock to give the best world class service to their customers."),
            React.createElement("h2", null, "Challenges"),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "Scalability:"),
                " This was the primary and pertinent challenge of Large Motor Company as their applications were not horizontally scalable due to which their applications, faced many performance issues.",
                React.createElement("br", null),
                React.createElement("b", null, "Reliability:"),
                " They had difficulty in confronting hardware downtime, unplanned outages have directly impacted software downtime and baffled their IT operations, applications, and data.",
                React.createElement("br", null),
                React.createElement("b", null, "Vendor Dependency:"),
                " They were running licensed products for HA clustering, system monitoring, and security. Most of the products were licensed.",
                React.createElement("br", null),
                React.createElement("b", null, "Traditional IT infrastructure:"),
                " With traditional Infrastructure, it is not only difficult to manage a data center but also hard to improve costs in maintaining the physical resources. The Large Motor company was not using more than 10% of their physical resources."),
            React.createElement("h2", null, "Solutions"),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("ul", null,
                    React.createElement("li", null, " We remodeled their legacy IT infrastructure into an entirely software-defined architecture."),
                    React.createElement("li", null, "Entire operations effort have been shortened and condensed to maintain the four data centers."),
                    React.createElement("li", null, "We provided a centralized source, valid data, and advanced data governance technology."),
                    React.createElement("li", null, "We designed the entire application layer with statelessness, ensuring horizontal scalability, better security, and visibility to the exposed API."),
                    React.createElement("li", null, "We proved our expertise once again by delivering fast and accurate releases to meet the growing business demand."),
                    React.createElement("li", null, "We rebuilt and revamped the existing applications to meet today\u2019s agility and scalability demands in the market."),
                    React.createElement("li", null, "We reduced high CAPEX and OPEX and made them achieve more with less IT budget."),
                    React.createElement("li", null, "We offered a complete license agnostic solution."))),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "Synectiks providing a customized solution and targeting the pain points of Large Motor Systems."),
                React.createElement("br", null),
                "When Large Motor Company approached Synectiks, they were handling multiple tasks with traditional infrastructure model. They have reached a point on the edge where they can no longer withstand the outage issues that rippled their business to two folds and finally resulted in high potential cost for their business. Initially, Large Motor Company\u2019s infrastructure was not tailored as per their requirements that resulted in maintaining huge operations effort to manage their data centers. They were expecting quick and accurate releases to meet their growing business needs. With almost high CAPEX and OPEX, their IT budget was already skyrocketing and was going beyond their expectations. Their primary focus areas were on scalability, agility, and reliability issues. Once fixed, they can outperform in their core areas and compete in their line of business for better business prospects."),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "How did Synectiks Consolidate, Validate, and Outline the issues of Large Motor Systems? "),
                React.createElement("br", null),
                "We believe in harvesting information as much as possible that will yield a better solution. That is exactly what we did with Large Motor Company. Upon analyzing their queries on a broader spectrum, we did a quick 360\u00B0 audit on their existing infrastructure and harvested some vital insights on key improvement areas and a plan for any migration path and risks involved in the following process. We conducted multiple PoC\u2019S with Large Motor Company to channel a solid understanding of the technologies and modernize their IT infrastructure. By translating the entire hardware infrastructure into a few lines of software code, we crafted a backbone infrastructure effortlessly. Also, we refactored monolith applications to multiple microservices and established a complete application lifecycle management and operation support system to maintain their business operations. Ultimately, by achieving the required data security, governance, and compliance requirements in the cloud."),
            React.createElement("h2", null, "OUTCOME"),
            React.createElement("p", { className: 'lineHeight-24' }, "The entire business system is now managed by few resources reducing CAPEX by 80% and OPEX by 70%. Large Motor Company\u2019s legacy infrastructure is entirely a new transformed software-defined infrastructure. As we promised, they achieved scalability, reliability, security, agility, and operation SLA\u2019s. The entire infrastructure is maintained with the code that we created and tailored as per their business requests. Large Motor Company achieved elasticity to create, modify, shrink, and remove infrastructure needs dynamically in no time. For a successful delivery pipeline, our DevOps automation helps them to manage the lifecycle of multiple microservices through the automated platform. To achieve continuous delivery, we release quality codes every hour."))));
};
exports.default = exports.Softwaredefined;


/***/ }),

/***/ "./src/components/Forms/Storagemigration.tsx":
/*!***************************************************!*\
  !*** ./src/components/Forms/Storagemigration.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Storagemigration = () => {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'bg-theme mt-3' },
            React.createElement("h1", { className: 'text-center text-white pt-theme mt-2' }, "Storage Migration")),
        React.createElement("div", { className: "p-5" },
            React.createElement("h4", { className: 'lineHeight-24 text-center' }, "San connectivity via Synectiks Storage Network Solutions"),
            React.createElement("br", null)),
        React.createElement("div", { className: 'd-flex justify-content-around flex-col px-5 py-3 col-lg-12' },
            React.createElement("div", { className: 'col-md-6' },
                React.createElement("h3", null, "Cloud Implement Services"),
                React.createElement("p", null,
                    "Production servers require storage consolidation to scale the growth of digital data. Business requires efficient and robust storage solutions based on application needs. ERP, Big Data Analysis, and IOT require a latest all-flash solution.",
                    React.createElement("br", null),
                    "Synectiks provides a wide range of storage solutions and has years of expertise in this domain. We enable enterprises, around the globe to connect to cloud-based IT capabilities, help optimize costs, enhance productivity, and bring innovation to IT operations.")),
            React.createElement("div", { className: 'col-md-6 text-center' },
                React.createElement("img", { className: "w-75", src: "img/Application-Services-Slider.png", alt: "Card image cap" }))),
        React.createElement("div", { className: 'text-center p-5' },
            React.createElement("h3", null, "Synectiks SAN model"),
            React.createElement("p", { className: 'px-2' }, "Over the years, we have developed expertise around SAN storage that led us in creating robust solutions for organizations across the globe in different domains and stages")),
        React.createElement("div", { className: 'bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12' },
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Network Model"),
                React.createElement("p", null, "Our unique core-edge SAN network offering works best for the applications providing availability and load balancing.")),
            React.createElement("div", { className: 'col-md-4 border-block' },
                React.createElement("h3", null, "Block Model"),
                React.createElement("p", { className: 'px-2' }, "Our strength in offering raw block devices of various sizes delivers best i/o response time with a high-end performance of the applications. We design and implement 3 data center, 4 data center block replications.")),
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "File Model"),
                React.createElement("p", null, "We design and build customized NAS solutions for enterprises based on their needs and demands. We construct robust networking file access to windows and Unix based clients."))),
        React.createElement("div", { className: 'text-center p-5' },
            React.createElement("h3", null, "Synectiks cloud solutions")),
        React.createElement("div", { className: 'bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12' },
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "L1-L2-L3-L4 support"),
                React.createElement("p", null, "It is our support to enterprises at various levels brought us where we are today. We support operations at multiple stages to achieve customer SLAs, and we succeeded. Desktops or applications to be accessed anytime, anywhere and in any device.")),
            React.createElement("div", { className: 'col-md-4 border-block' },
                React.createElement("h3", null, "Build Solutions"),
                React.createElement("p", { className: 'px-2' }, "We offer a wide range of industry-specific storage box builds for specific niche industry domains.")),
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Active - Active Solutions"),
                React.createElement("p", null, "Our active/active solutions enable application clusters to work and maintain zero downtime."))),
        React.createElement("div", { className: 'text-center p-5' },
            React.createElement("h4", null, "We follow ITIL process and methodologies to support various levels of supports for the enterperises.")),
        React.createElement("div", { className: 'bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12' },
            React.createElement("div", { className: 'col-md-6' },
                React.createElement("h3", null, "Storage Automation"),
                React.createElement("p", null, "Our core strength is to automate the end to end storage operations. We use various DevOps tools to automate most of the storage jobs, and with this, we receive customer requests at a faster rate.")),
            React.createElement("div", { className: 'col-md-6' },
                React.createElement("h3", null, "Block and file migration"),
                React.createElement("p", { className: 'px-2' }, "We are experts in migrating block data across multiple storage boxes. We offer solutions and services to accelerate the migration of storage hardware and data."))),
        React.createElement("div", { className: 'text-center px-5 pt-5 pb-3' },
            React.createElement("h3", null, "Cloud across the globe with 187 data centers foot print.")),
        React.createElement("div", { className: ' d-flex justify-content-around flex-col px-5 py-3 col-lg-12' },
            React.createElement("div", { className: 'col-md-6' },
                React.createElement("ul", null,
                    React.createElement("li", null, "180+ Data centers across the globe."),
                    React.createElement("li", null, "50+ Storage experts."),
                    React.createElement("li", null, "Handled 150 + PB of storage Data."),
                    React.createElement("li", null, "10+ cloud services offering with successful POCs."),
                    React.createElement("li", null, "3 partnerships for joint solutions."))),
            React.createElement("div", { className: 'col-md-6' },
                React.createElement("ul", null,
                    React.createElement("li", null, "Storage assessment."),
                    React.createElement("li", null, "Storage Implementations."),
                    React.createElement("li", null, "Latest innovations in cloud."),
                    React.createElement("li", null, "Building competencies."),
                    React.createElement("li", null, "Domain experience for industries like BFSI, healthcare manufacturing and others."))))));
};
exports.default = exports.Storagemigration;


/***/ }),

/***/ "./src/components/Forms/Storagetier.tsx":
/*!**********************************************!*\
  !*** ./src/components/Forms/Storagetier.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
exports.Storagetier = () => {
    return (React.createElement("div", null,
        React.createElement("div", { className: 'bg-theme mt-3' },
            React.createElement("h1", { className: 'text-center text-white pt-theme mt-2' }, "INDIAN METEOROLOGY DEPARTMENT-CASE STUDY")),
        React.createElement("div", { className: "px-5 pt-5" },
            React.createElement("p", { className: 'lineHeight-24' }, "Background - Indian Meteorology Department is an agency of the Ministry of Earth Sciences of the Government of India. The agency harvests the meteorological observations, weather forecasting, and seismology reports and also responsible for communicating and forecasting weather services."),
            React.createElement("br", null)),
        React.createElement("div", { className: 'bg-logoblue text-center text-white d-flex justify-content-around flex-col p-5 col-lg-12' },
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Industry"),
                React.createElement("p", null, "Automobiles")),
            React.createElement("div", { className: 'col-md-4 border-block' },
                React.createElement("h3", null, "BUSINESS OBJECTIVE"),
                React.createElement("p", { className: 'px-2' }, "Transformation towards becoming hardware / Os / Vender / Operation agnostic. Make everything software defined.")),
            React.createElement("div", { className: 'col-md-4' },
                React.createElement("h3", null, "Technologies"),
                React.createElement("p", null, "AWS, Infrastructure as a code, microservices, devops"))),
        React.createElement("div", { className: "p-5" },
            React.createElement("h2", null, "Overview"),
            React.createElement("p", { className: 'lineHeight-24' }, "Background- Indian Meteorology Department is an agency of the Ministry of Earth Sciences of the Government of India. The agency harvests the meteorological observations, weather forecasting, and seismology reports and also responsible for communicating and forecasting weather services."),
            React.createElement("h2", null, "Challenges"),
            React.createElement("p", { className: 'lineHeight-24' },
                "They wanted a lightweight script that must integrate into their existing application environment which is Java Based Image Processing UI.",
                React.createElement("br", null),
                "The solution must cater multi-staging data protection(D2D2T).",
                React.createElement("br", null),
                "The backup storage should scale out low-cost NAS storage.",
                React.createElement("br", null)),
            React.createElement("h2", null, "Solutions"),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("ul", null,
                    React.createElement("li", null, "After analyzing and understanding their core problem, we initiated our process with the help of Alfresco Content Management solution."),
                    React.createElement("li", null, "This management tool stores all the files and allows to search all the multiple folders for content."),
                    React.createElement("li", null, "The next step is to map the different tiers of storage to separate folder and write automation script."),
                    React.createElement("li", null, "This automation script checks the capacity of primary storage periodically and moves data to secondary storage based on some rules."),
                    React.createElement("li", null, "We integrated the original data processing application with Alfresco API, to store and access the data."),
                    React.createElement("li", null, "We rebuilt and revamped the existing applications to meet today\u2019s agility and scalability demands in the market."),
                    React.createElement("li", null, "This automation script checks the capacity of primary storage periodically and moves data to secondary storage based on some rules."))),
            React.createElement("p", { className: 'lineHeight-24' },
                React.createElement("b", null, "Mapping a Multi-Tier data staging solution with incredible ease."),
                React.createElement("br", null),
                "\u201CStop looking at the problem like a problem\u201D sounds great but the sentence proved correct when we implemented the same. Understanding the problem and getting to the roots of it fetched excellent results. IMD leveraged our strategic solutions to fast forward their current scenario into a better vision that became a reality by embracing our services. IMD wanted an answer to stage large volume of satellite data staging in multi-tiered storage as per customers configurable SLA (if the capacity > 70% move to next tier). Also, the respective application server should find the data automatically in case they get staged to a net tier. Not to mention that need a specific solution which is lightweight, simple, and open. ",
                React.createElement("br", null),
                "After digesting the requirements, what our technical connoisseurs did was something incredible. We used Alfresco Content Management solution to store all the files. The management solution puts the business flow in a fast track mode and integrates very intelligently. We mapped the different tiers of storage to a different folder and penned an automation script to check the capacity of primary storage to secondary periodically. Then we integrated the original data processing application with Alfresco API, to store and access data.   "),
            React.createElement("h2", null, "OUTCOME"),
            React.createElement("p", { className: 'lineHeight-24' }, "The resulted solution helped IMD to save cost on primary storage by 50%. They also reduced 90% operations job of moving data in different storage tiers. . We helped them stage huge data without changing any of their existing application.. The entire infrastructure is maintained with the code that we created and tailored as per their business requests. The final product is a lightweight solution that is easy and open."))));
};
exports.default = exports.Storagetier;


/***/ }),

/***/ "./src/components/Forms/Transformation.tsx":
/*!*************************************************!*\
  !*** ./src/components/Forms/Transformation.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Transformation = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: "container pb-5" },
            React.createElement("div", { className: "row main-card pb-5" },
                React.createElement("div", { className: "col-md-12 col-12-lg card-deck" },
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/foundation", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Foundation.png", alt: "Foundation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Foundation")))),
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/transformation", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Transformation.png", alt: "Transformation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Transformation")),
                            React.createElement("div", { className: "pointer text-center" },
                                React.createElement("h1", null, "\u00BB")))),
                    React.createElement("div", { className: "card btn card-shadow mx-3 pt-3" },
                        React.createElement(react_router_dom_1.Link, { to: "/operations", className: "noLine" },
                            React.createElement("img", { className: "card-img-top", src: "img/Operation.png", alt: "Operation" }),
                            React.createElement("div", { className: "card-body" },
                                React.createElement("h2", { className: "text-center text-uppercase" }, "Operation"))))))),
        React.createElement("div", { className: "text-center p-5" },
            React.createElement("div", { className: "my-5" },
                React.createElement("img", { "data-aos": "fade-up", "data-aos-duration": "2000", src: "img/Refactor.png", width: "75%", alt: "Refactor" })),
            React.createElement("div", { className: "my-5" },
                React.createElement("img", { "data-aos": "fade-up", "data-aos-duration": "2000", className: "  mx-auto", src: "img/transformation_2.png", width: "75%", alt: "Transformation" })),
            React.createElement("div", { className: "my-5" },
                React.createElement("img", { "data-aos": "fade-up", "data-aos-duration": "2000", className: " mx-auto", src: "img/Enterprise-Platform.png", width: "75%", alt: "Redevelopment Microservice" })),
            React.createElement("div", { className: "my-5" },
                React.createElement("img", { "data-aos": "fade-up", "data-aos-duration": "2000", className: "   mx-auto", src: "img/Redevelopment.png", width: "75%", alt: "Redevelopment Analytics" })),
            React.createElement("div", { className: "my-5" },
                React.createElement("img", { "data-aos": "fade-up", "data-aos-duration": "2000", className: "mx-auto", src: "img/Rehost.png", width: "75%", alt: "Rehost" })))));
};
exports.default = exports.Transformation;


/***/ }),

/***/ "./src/components/Forms/Videos.tsx":
/*!*****************************************!*\
  !*** ./src/components/Forms/Videos.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (60:0)\nYou may need an appropriate loader to handle this file type.\n| };\r\n| div >\r\n> ;\r\n| ;\r\n| ;\r");

/***/ }),

/***/ "./src/components/Forms/colocation.tsx":
/*!*********************************************!*\
  !*** ./src/components/Forms/colocation.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
exports.Colocation = () => {
    return (React.createElement("div", { className: 'bg-lightgrey' },
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white p-5 mt-5 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 mt-5 pt-3 pr-5 text-black" },
                React.createElement("h1", { className: " hfont" }, "CLOUD"),
                React.createElement("p", { className: "rfont" },
                    React.createElement("b", null,
                        React.createElement("i", null, "Cloud Your Way!"))),
                React.createElement("p", { className: "lineHeight-24" },
                    "Drive innovation and accelerate your cloud initiatives with our full spectrum of digital, analytics and enterprise cloud services.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "We\u2019ll listen to You! Your business objectives and growth strategy. SYNECTIKS provides industry-leading expertise, services, and solutions that allow you to address your specific needs and execute on the best-agreed approach to build and manage a cloud-enabled enterprise, that aligns with your transformation goals.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Whether you are yet to explore or have already started your cloud journey, SYNECTIKS can accelerate your company\u2019s digital transformation and empower your business to stay ahead of the game.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "SYNECTIKS is the leader in Cloud Solutions and can deliver it the way you need it \u2013 on-premise or private, public or hybrid cloud.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Get no-cost expert guidance.",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", null,
                    "We're here to help! Schedule a 30-minute consultation to get your expedition to cloud started.",
                    React.createElement("br", null),
                    " ")),
            React.createElement("div", { className: "w-100 pt-5 mt-5" },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/CloudCommon.png", alt: "Cloud" }))),
        React.createElement("div", { className: " bg-white d-flex justify-content-around align-items-center p-2 flex-col text-center col-lg-12", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/publiccloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Public Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/privatecloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Private Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/hybridcloud", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Hybrid Cloud"))),
            React.createElement("div", { className: "py-3 col-md-2" },
                React.createElement(react_router_dom_1.Link, { to: "/colocation", id: "colocation", className: 'text-black bg-white noLine' },
                    React.createElement("b", null, "Colocation"))),
            React.createElement("div", { className: "py-3 col-md-2 nav-item dropdown" },
                React.createElement(react_router_dom_1.Link, { to: "/HostedInfrastructure", className: 'text-black bg-white noLine' },
                    React.createElement("a", { className: "nav-link", href: "#", id: "cloudnav", "data-toggle": "dropdown" },
                        React.createElement("b", null, "Cloud\u00A0Hosted\u00A0Services")),
                    React.createElement("div", { className: "dropdown-menu w17em" },
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudManagedBackup" },
                            " ",
                            "Cloud Managed Backup",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/CloudDisasterRecovery" },
                            " ",
                            "Cloud Disaster Recovery",
                            " "),
                        React.createElement(react_router_dom_2.NavLink, { className: "dropdown-item", to: "/HostedInfrastructure" },
                            " ",
                            "Hosted Infrastructure",
                            " "))))),
        React.createElement("div", { className: ' text-black w-100 mt-3 text-white px-5 py-2 flex-col d-flex text-justify', "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: "w-100 " },
                React.createElement("img", { height: "auto", width: "100%", className: "", src: "img/Colocation.png", alt: "Colocation" })),
            React.createElement("div", { className: "w-100 px-5 text-black" },
                React.createElement("h2", { className: 'mt-3' }, "Colocation Services"),
                React.createElement("br", null),
                " ",
                React.createElement("p", { className: "lineHeight-24" },
                    "Quickly evaluate and select any secure, highly available, best-in-class data center, anywhere in the world (more than 200+ colocation facilities on five continents).",
                    React.createElement("br", null),
                    " "),
                React.createElement("p", { className: "lineHeight-24" },
                    "Colocation services help reduce costs and provide a better roadmap to the cloud by offering facility management and monitoring of client-owned equipment in a secured SYNECTIKS data center environment.",
                    React.createElement("br", null),
                    " "))),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify" },
            React.createElement("p", { className: "lineHeight-24" },
                "Organizations are exploring cloud solutions to scale capacity according to changing business requirements quickly.",
                React.createElement("br", null),
                " "),
            React.createElement("p", { className: "lineHeight-24" },
                "SYNECTIKS Colocation Services host and care for your IT equipment in highly efficient and secure data center facilities. As your organization grows, SYNECTIKS can assist in transforming your environment to a traditional, managed cloud or a hybrid environment, and we can manage and monitor that environment for you.",
                React.createElement("br", null),
                " "),
            React.createElement("p", { className: "lineHeight-24" },
                "You can add data center capacity as you need it & when you need it, without capital outlay, by hosting client-owned and operated hardware in our best-in-class facilities on a \"pay-for-what-you-use\" basis.",
                React.createElement("br", null),
                " "),
            React.createElement("p", { className: "lineHeight-24 pt-3" },
                React.createElement("h3", { className: "text-center" }, " Key Benefits:"),
                React.createElement("br", null),
                " ")),
        React.createElement("div", { className: "d-flex justify-content-around col-lg-12 py-5 text-center flex-col", "data-aos": "fade-up", "data-aos-duration": "2000" },
            React.createElement("div", { className: 'col-md-3' },
                React.createElement("img", { className: "   py-3", src: "img/Costcontrol.png", width: "75%", alt: "Costcontrol" }),
                React.createElement("p", null, "Cost Control")),
            React.createElement("div", { className: 'col-md-3' },
                React.createElement("img", { className: "   py-3", src: "img/ITModern.png", width: "75%", alt: "IT Modernization" }),
                React.createElement("p", null, "IT Modernization")),
            React.createElement("div", { className: 'col-md-3' },
                React.createElement("img", { className: "   py-3", src: "img/Staff.png", width: "75%", alt: "Staff" }),
                React.createElement("p", null, "Knowledgeable Staff")),
            React.createElement("div", { className: 'col-md-3' },
                React.createElement("img", { className: "   py-3 ", src: "img/Scale.png", width: "75%", alt: "Scale" }),
                React.createElement("p", null, "Scale Up or Down"))),
        React.createElement("div", { className: "w-100 px-5 text-black text-justify" },
            React.createElement("p", { className: "lineHeight-24" },
                React.createElement(react_router_dom_2.NavLink, { className: "navlink navfont noLine", to: "/contactus" },
                    React.createElement("small", null, "Contact\u00A0Us\u00A0")),
                "to learn more about SYNECTIKS Colocation Services.",
                React.createElement("br", null),
                " "))));
};
exports.default = exports.Colocation;


/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (191:0)\nYou may need an appropriate loader to handle this file type.\n| };\r\n| nav >\r\n> ;\r\n| div >\r\n| ;\r");

/***/ }),

/***/ "./src/components/Main/Main.tsx":
/*!**************************************!*\
  !*** ./src/components/Main/Main.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (35:0)\nYou may need an appropriate loader to handle this file type.\n|                 React.createElement(\"h2\", { className: \"text-center text-uppercase\" }, \"Operation\"))));\r\n| div >\r\n> ;\r\n| div >\r\n| ;\r");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader?importLoader=1&modules&localIdentName=[local]___[hash:base64:5]!../node_modules/resolve-url-loader!../node_modules/sass-loader/lib/loader.js??ref--6-3!./index.css */ "./node_modules/css-loader/index.js?importLoader=1&modules&localIdentName=[local]___[hash:base64:5]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const App_1 = __webpack_require__(/*! ./components/App */ "./src/components/App.tsx");
__webpack_require__(/*! ./index.css */ "./src/index.css");
const router_1 = __webpack_require__(/*! ./router */ "./src/router.tsx");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(router_1.AppRouter, null,
        React.createElement(App_1.default, null))), document.getElementById("root"));


/***/ }),

/***/ "./src/router.tsx":
/*!************************!*\
  !*** ./src/router.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const react_router_dom_2 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
const Header_1 = __webpack_require__(/*! ./components/Header */ "./src/components/Header.tsx");
const Footer_1 = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.tsx");
const Main_1 = __webpack_require__(/*! ./components/Main/Main */ "./src/components/Main/Main.tsx");
const Forms_1 = __webpack_require__(/*! ./components/Forms/Forms */ "./src/components/Forms/Forms.tsx");
const Foundation_1 = __webpack_require__(/*! ./components/Forms/Foundation */ "./src/components/Forms/Foundation.tsx");
const Contact_1 = __webpack_require__(/*! ./components/Forms/Contact */ "./src/components/Forms/Contact.tsx");
const Featured_1 = __webpack_require__(/*! ./components/Forms/Featured */ "./src/components/Forms/Featured.tsx");
const Casestudy_1 = __webpack_require__(/*! ./components/Forms/Casestudy */ "./src/components/Forms/Casestudy.tsx");
const Videos_1 = __webpack_require__(/*! ./components/Forms/Videos */ "./src/components/Forms/Videos.tsx");
const Aboutus_1 = __webpack_require__(/*! ./components/Forms/Aboutus */ "./src/components/Forms/Aboutus.tsx");
const Careers_1 = __webpack_require__(/*! ./components/Forms/Careers */ "./src/components/Forms/Careers.tsx");
const Partners_1 = __webpack_require__(/*! ./components/Forms/Partners */ "./src/components/Forms/Partners.tsx");
const Audit_1 = __webpack_require__(/*! ./components/Forms/Audit */ "./src/components/Forms/Audit.tsx");
const EnterpriseManagedservice_1 = __webpack_require__(/*! ./components/Forms/EnterpriseManagedservice */ "./src/components/Forms/EnterpriseManagedservice.tsx");
const Operations_1 = __webpack_require__(/*! ./components/Forms/Operations */ "./src/components/Forms/Operations.tsx");
const Softwaredefined_1 = __webpack_require__(/*! ./components/Forms/Softwaredefined */ "./src/components/Forms/Softwaredefined.tsx");
const Realtime_1 = __webpack_require__(/*! ./components/Forms/Realtime */ "./src/components/Forms/Realtime.tsx");
const Storagemigration_1 = __webpack_require__(/*! ./components/Forms/Storagemigration */ "./src/components/Forms/Storagemigration.tsx");
const Networkdesign_1 = __webpack_require__(/*! ./components/Forms/Networkdesign */ "./src/components/Forms/Networkdesign.tsx");
const Storagetier_1 = __webpack_require__(/*! ./components/Forms/Storagetier */ "./src/components/Forms/Storagetier.tsx");
const Disasterrecovery_1 = __webpack_require__(/*! ./components/Forms/Disasterrecovery */ "./src/components/Forms/Disasterrecovery.tsx");
const Transformation_1 = __webpack_require__(/*! ./components/Forms/Transformation */ "./src/components/Forms/Transformation.tsx");
const Devops_1 = __webpack_require__(/*! ./components/Forms/Devops */ "./src/components/Forms/Devops.tsx");
const Migrations_1 = __webpack_require__(/*! ./components/Forms/Migrations */ "./src/components/Forms/Migrations.tsx");
const Microservices_1 = __webpack_require__(/*! ./components/Forms/Microservices */ "./src/components/Forms/Microservices.tsx");
const Microserviceexample_1 = __webpack_require__(/*! ./components/Forms/Microserviceexample */ "./src/components/Forms/Microserviceexample.tsx");
const Microservicebenefit_1 = __webpack_require__(/*! ./components/Forms/Microservicebenefit */ "./src/components/Forms/Microservicebenefit.tsx");
const Microservicechallenge_1 = __webpack_require__(/*! ./components/Forms/Microservicechallenge */ "./src/components/Forms/Microservicechallenge.tsx");
const Microservicehelp_1 = __webpack_require__(/*! ./components/Forms/Microservicehelp */ "./src/components/Forms/Microservicehelp.tsx");
const Publiccloud_1 = __webpack_require__(/*! ./components/Forms/Publiccloud */ "./src/components/Forms/Publiccloud.tsx");
const Privatecloud_1 = __webpack_require__(/*! ./components/Forms/Privatecloud */ "./src/components/Forms/Privatecloud.tsx");
const Hybridcloud_1 = __webpack_require__(/*! ./components/Forms/Hybridcloud */ "./src/components/Forms/Hybridcloud.tsx");
const CloudDisasterRecovery_1 = __webpack_require__(/*! ./components/Forms/CloudDisasterRecovery */ "./src/components/Forms/CloudDisasterRecovery.tsx");
const colocation_1 = __webpack_require__(/*! ./components/Forms/colocation */ "./src/components/Forms/colocation.tsx");
const CloudManagedBackup_1 = __webpack_require__(/*! ./components/Forms/CloudManagedBackup */ "./src/components/Forms/CloudManagedBackup.tsx");
const HostedInfrastructure_1 = __webpack_require__(/*! ./components/Forms/HostedInfrastructure */ "./src/components/Forms/HostedInfrastructure.tsx");
const Applicationservices_1 = __webpack_require__(/*! ./components/Forms/Applicationservices */ "./src/components/Forms/Applicationservices.tsx");
const Managedservices_1 = __webpack_require__(/*! ./components/Forms/Managedservices */ "./src/components/Forms/Managedservices.tsx");
const Networkservices_1 = __webpack_require__(/*! ./components/Forms/Networkservices */ "./src/components/Forms/Networkservices.tsx");
const Privacypolicy_1 = __webpack_require__(/*! ./components/Forms/Privacypolicy */ "./src/components/Forms/Privacypolicy.tsx");
const Askfordemo_1 = __webpack_require__(/*! ./components/Forms/Askfordemo */ "./src/components/Forms/Askfordemo.tsx");
// import { Services, Company, Solutions, Resources } from "./components";
exports.AppRouter = () => {
    return (React.createElement(react_router_dom_1.BrowserRouter, null));
    React.createElement(react_router_dom_2.HashRouter, null,
        React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { component: Header_1.Header }),
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Main_1.Main }),
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Forms_1.Forms }),
                "=======",
                React.createElement("div", null,
                    React.createElement(react_router_dom_1.Route, { component: Header_1.Header }),
                    React.createElement(react_router_dom_1.Switch, null,
                        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Main_1.Main }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Forms_1.Forms }),
                        React.createElement(react_router_dom_1.Route, { exact: true, path: "/company", component: Company }),
                        React.createElement(react_router_dom_1.Route, { path: "/services", component: Services }),
                        React.createElement(react_router_dom_1.Route, { path: "/solutions", component: Solutions }),
                        React.createElement(react_router_dom_1.Route, { path: "/resources", component: Resources }),
                        ">>>>>>> 967866ad488f3fb8a92c0a0379416efc44500691",
                        React.createElement(react_router_dom_1.Route, { path: "/Forms", component: Forms_1.Forms }),
                        React.createElement(react_router_dom_1.Route, { path: "/foundation", component: Foundation_1.Foundation }),
                        React.createElement(react_router_dom_1.Route, { path: "/contactus", component: Contact_1.Contact }),
                        React.createElement(react_router_dom_1.Route, { path: "/featured", component: Featured_1.Featured }),
                        React.createElement(react_router_dom_1.Route, { path: "/casestudy", component: Casestudy_1.Casestudy }),
                        React.createElement(react_router_dom_1.Route, { path: "/videos", component: Videos_1.Videos }),
                        React.createElement(react_router_dom_1.Route, { path: "/aboutus", component: Aboutus_1.Aboutus }),
                        React.createElement(react_router_dom_1.Route, { path: "/careers", component: Careers_1.Careers })),
                    React.createElement(react_router_dom_1.Route, { path: "/partners", component: Partners_1.Partners }),
                    React.createElement(react_router_dom_1.Route, { path: "/audit", component: Audit_1.Audit }),
                    React.createElement(react_router_dom_1.Route, { path: "/enterprisemanagedservice", component: EnterpriseManagedservice_1.EnterpriseManagedservice }),
                    React.createElement(react_router_dom_1.Route, { path: "/operations", component: Operations_1.Operations }),
                    React.createElement(react_router_dom_1.Route, { path: "/softwaredefined", component: Softwaredefined_1.Softwaredefined }),
                    React.createElement(react_router_dom_1.Route, { path: "/realtime", component: Realtime_1.Realtime }),
                    React.createElement(react_router_dom_1.Route, { path: "/storagemigration", component: Storagemigration_1.Storagemigration }),
                    React.createElement(react_router_dom_1.Route, { path: "/networkdesign", component: Networkdesign_1.Networkdesign }),
                    React.createElement(react_router_dom_1.Route, { path: "/storagetier", component: Storagetier_1.Storagetier }),
                    React.createElement(react_router_dom_1.Route, { path: "/disasterrecovery", component: Disasterrecovery_1.Disasterrecovery }),
                    React.createElement(react_router_dom_1.Route, { path: "/transformation", component: Transformation_1.Transformation }),
                    React.createElement(react_router_dom_1.Route, { path: "/devops", component: Devops_1.Devops }),
                    React.createElement(react_router_dom_1.Route, { path: "/migrations", component: Migrations_1.Migrations }),
                    React.createElement(react_router_dom_1.Route, { path: "/microservices", component: Microservices_1.Microservices }),
                    React.createElement(react_router_dom_1.Route, { path: "/microserviceexample", component: Microserviceexample_1.Microserviceexample }),
                    React.createElement(react_router_dom_1.Route, { path: "/microservicebenefit", component: Microservicebenefit_1.Microservicebenefit }),
                    React.createElement(react_router_dom_1.Route, { path: "/microservicechallenge", component: Microservicechallenge_1.Microservicechallenge }),
                    React.createElement(react_router_dom_1.Route, { path: "/microservicehelp", component: Microservicehelp_1.Microservicehelp }),
                    React.createElement(react_router_dom_1.Route, { path: "/publiccloud", component: Publiccloud_1.Publiccloud }),
                    React.createElement(react_router_dom_1.Route, { path: "/privatecloud", component: Privatecloud_1.Privatecloud }),
                    React.createElement(react_router_dom_1.Route, { path: "/hybridcloud", component: Hybridcloud_1.Hybridcloud }),
                    React.createElement(react_router_dom_1.Route, { path: "/colocation", component: colocation_1.Colocation }),
                    React.createElement(react_router_dom_1.Route, { path: "/CloudDisasterRecovery", component: CloudDisasterRecovery_1.CloudDisasterRecovery }),
                    React.createElement(react_router_dom_1.Route, { path: "/CloudManagedBackup", component: CloudManagedBackup_1.CloudManagedBackup }),
                    React.createElement(react_router_dom_1.Route, { path: "/HostedInfrastructure", component: HostedInfrastructure_1.HostedInfrastructure }),
                    React.createElement(react_router_dom_1.Route, { path: "/applicationservices", component: Applicationservices_1.Applicationservices }),
                    React.createElement(react_router_dom_1.Route, { path: "/managedservices", component: Managedservices_1.Managedservices }),
                    React.createElement(react_router_dom_1.Route, { path: "/networkservices", component: Networkservices_1.Networkservices }),
                    React.createElement(react_router_dom_1.Route, { path: "/privacypolicy", component: Privacypolicy_1.Privacypolicy }),
                    React.createElement(react_router_dom_1.Route, { path: "/askfordemo", component: Askfordemo_1.Askfordemo })),
                React.createElement(react_router_dom_1.Route, { component: Footer_1.Footer }))));
};
;
;
exports.default = exports.AppRouter;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map