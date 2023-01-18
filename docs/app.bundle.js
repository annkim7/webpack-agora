/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 856:
/***/ (function(module) {

/*! @license DOMPurify 2.3.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.10/LICENSE */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasOwnProperty = Object.hasOwnProperty,
      setPrototypeOf = Object.setPrototypeOf,
      isFrozen = Object.isFrozen,
      getPrototypeOf = Object.getPrototypeOf,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var freeze = Object.freeze,
      seal = Object.seal,
      create = Object.create; // eslint-disable-line import/no-mutable-exports

  var _ref = typeof Reflect !== 'undefined' && Reflect,
      apply = _ref.apply,
      construct = _ref.construct;

  if (!apply) {
    apply = function apply(fun, thisValue, args) {
      return fun.apply(thisValue, args);
    };
  }

  if (!freeze) {
    freeze = function freeze(x) {
      return x;
    };
  }

  if (!seal) {
    seal = function seal(x) {
      return x;
    };
  }

  if (!construct) {
    construct = function construct(Func, args) {
      return _construct(Func, _toConsumableArray(args));
    };
  }

  var arrayForEach = unapply(Array.prototype.forEach);
  var arrayPop = unapply(Array.prototype.pop);
  var arrayPush = unapply(Array.prototype.push);
  var stringToLowerCase = unapply(String.prototype.toLowerCase);
  var stringMatch = unapply(String.prototype.match);
  var stringReplace = unapply(String.prototype.replace);
  var stringIndexOf = unapply(String.prototype.indexOf);
  var stringTrim = unapply(String.prototype.trim);
  var regExpTest = unapply(RegExp.prototype.test);
  var typeErrorCreate = unconstruct(TypeError);
  function unapply(func) {
    return function (thisArg) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return apply(func, thisArg, args);
    };
  }
  function unconstruct(func) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return construct(func, args);
    };
  }
  /* Add properties to a lookup table */

  function addToSet(set, array, transformCaseFunc) {
    transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;

    if (setPrototypeOf) {
      // Make 'in' and truthy checks like Boolean(set.constructor)
      // independent of any properties defined on Object.prototype.
      // Prevent prototype setters from intercepting set as a this value.
      setPrototypeOf(set, null);
    }

    var l = array.length;

    while (l--) {
      var element = array[l];

      if (typeof element === 'string') {
        var lcElement = transformCaseFunc(element);

        if (lcElement !== element) {
          // Config presets (e.g. tags.js, attrs.js) are immutable.
          if (!isFrozen(array)) {
            array[l] = lcElement;
          }

          element = lcElement;
        }
      }

      set[element] = true;
    }

    return set;
  }
  /* Shallow clone an object */

  function clone(object) {
    var newObject = create(null);
    var property;

    for (property in object) {
      if (apply(hasOwnProperty, object, [property])) {
        newObject[property] = object[property];
      }
    }

    return newObject;
  }
  /* IE10 doesn't support __lookupGetter__ so lets'
   * simulate it. It also automatically checks
   * if the prop is function or getter and behaves
   * accordingly. */

  function lookupGetter(object, prop) {
    while (object !== null) {
      var desc = getOwnPropertyDescriptor(object, prop);

      if (desc) {
        if (desc.get) {
          return unapply(desc.get);
        }

        if (typeof desc.value === 'function') {
          return unapply(desc.value);
        }
      }

      object = getPrototypeOf(object);
    }

    function fallbackValue(element) {
      console.warn('fallback value for', element);
      return null;
    }

    return fallbackValue;
  }

  var html$1 = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']); // SVG

  var svg$1 = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'view', 'vkern']);
  var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']); // List of SVG elements that are disallowed by default.
  // We still need to know them so that we can do namespace
  // checks properly in case one wants to add them to
  // allow-list.

  var svgDisallowed = freeze(['animate', 'color-profile', 'cursor', 'discard', 'fedropshadow', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src', 'font-face-uri', 'foreignobject', 'hatch', 'hatchpath', 'mesh', 'meshgradient', 'meshpatch', 'meshrow', 'missing-glyph', 'script', 'set', 'solidcolor', 'unknown', 'use']);
  var mathMl$1 = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']); // Similarly to SVG, we want to know all MathML elements,
  // even those that we disallow by default.

  var mathMlDisallowed = freeze(['maction', 'maligngroup', 'malignmark', 'mlongdiv', 'mscarries', 'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'semantics', 'annotation', 'annotation-xml', 'mprescripts', 'none']);
  var text = freeze(['#text']);

  var html = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'nonce', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns', 'slot']);
  var svg = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clippathunits', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'systemlanguage', 'tabindex', 'targetx', 'targety', 'transform', 'transform-origin', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);
  var mathMl = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);
  var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

  var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode

  var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
  var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape

  var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape

  var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
  );
  var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
  var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
  );
  var DOCTYPE_NAME = seal(/^html$/i);

  var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
  };
  /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
   * @param {Document} document The document object (to determine policy name suffix)
   * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
   * are not supported).
   */


  var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
    if (_typeof(trustedTypes) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
      return null;
    } // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.


    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';

    if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
      suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
      return trustedTypes.createPolicy(policyName, {
        createHTML: function createHTML(html) {
          return html;
        },
        createScriptURL: function createScriptURL(scriptUrl) {
          return scriptUrl;
        }
      });
    } catch (_) {
      // Policy creation failed (most likely another DOMPurify script has
      // already run). Skip creating the policy, as this will only cause errors
      // if TT are enforced.
      console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
      return null;
    }
  };

  function createDOMPurify() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

    var DOMPurify = function DOMPurify(root) {
      return createDOMPurify(root);
    };
    /**
     * Version label, exposed for easier checks
     * if DOMPurify is up to date or not
     */


    DOMPurify.version = '2.3.10';
    /**
     * Array of elements that DOMPurify removed during sanitation.
     * Empty if nothing was removed.
     */

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
      // Not running in a browser, provide a factory function
      // so that you can pass your own Window
      DOMPurify.isSupported = false;
      return DOMPurify;
    }

    var originalDocument = window.document;
    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        Element = window.Element,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap = _window$NamedNodeMap === void 0 ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
        HTMLFormElement = window.HTMLFormElement,
        DOMParser = window.DOMParser,
        trustedTypes = window.trustedTypes;
    var ElementPrototype = Element.prototype;
    var cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    var getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    var getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    var getParentNode = lookupGetter(ElementPrototype, 'parentNode'); // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.

    if (typeof HTMLTemplateElement === 'function') {
      var template = document.createElement('template');

      if (template.content && template.content.ownerDocument) {
        document = template.content.ownerDocument;
      }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);

    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';
    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        createDocumentFragment = _document.createDocumentFragment,
        getElementsByTagName = _document.getElementsByTagName;
    var importNode = originalDocument.importNode;
    var documentMode = {};

    try {
      documentMode = clone(document).documentMode ? document.documentMode : {};
    } catch (_) {}

    var hooks = {};
    /**
     * Expose whether this browser supports running the full DOMPurify.
     */

    DOMPurify.isSupported = typeof getParentNode === 'function' && implementation && typeof implementation.createHTMLDocument !== 'undefined' && documentMode !== 9;
    var MUSTACHE_EXPR$1 = MUSTACHE_EXPR,
        ERB_EXPR$1 = ERB_EXPR,
        DATA_ATTR$1 = DATA_ATTR,
        ARIA_ATTR$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
    /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */

    /* allowed element names */

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
    /* Allowed attribute names */

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
    /*
     * Configure how DOMPUrify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */

    var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */

    var FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */

    var FORBID_ATTR = null;
    /* Decide if ARIA attributes are okay */

    var ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */

    var ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */

    var ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */

    var SAFE_FOR_TEMPLATES = false;
    /* Decide if document with <html>... should be returned */

    var WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */

    var SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */

    var FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */

    var RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */

    var RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */

    var RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks? */

    var SANITIZE_DOM = true;
    /* Keep element content when removing element? */

    var KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */

    var IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */

    var USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */

    var FORBID_CONTENTS = null;
    var DEFAULT_FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'noscript', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);
    /* Tags that are safe for data: URIs */

    var DATA_URI_TAGS = null;
    var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);
    /* Attributes safe for values like "javascript:" */

    var URI_SAFE_ATTRIBUTES = null;
    var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'role', 'summary', 'title', 'value', 'style', 'xmlns']);
    var MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */

    var NAMESPACE = HTML_NAMESPACE;
    var IS_EMPTY_INPUT = false;
    /* Parsing of strict XHTML documents */

    var PARSER_MEDIA_TYPE;
    var SUPPORTED_PARSER_MEDIA_TYPES = ['application/xhtml+xml', 'text/html'];
    var DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    var transformCaseFunc;
    /* Keep a reference to config to pass to hooks */

    var CONFIG = null;
    /* Ideally, do not touch anything below this line */

    /* ______________________________________________ */

    var formElement = document.createElement('form');

    var isRegexOrFunction = function isRegexOrFunction(testValue) {
      return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
     * _parseConfig
     *
     * @param  {Object} cfg optional config literal
     */
    // eslint-disable-next-line complexity


    var _parseConfig = function _parseConfig(cfg) {
      if (CONFIG && CONFIG === cfg) {
        return;
      }
      /* Shield configuration object from tampering */


      if (!cfg || _typeof(cfg) !== 'object') {
        cfg = {};
      }
      /* Shield configuration object from prototype pollution */


      cfg = clone(cfg);
      PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
      SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE; // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.

      transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? function (x) {
        return x;
      } : stringToLowerCase;
      /* Set configuration parameters */

      ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
      ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
      URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), // eslint-disable-line indent
      cfg.ADD_URI_SAFE_ATTR, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_URI_SAFE_ATTRIBUTES;
      DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), // eslint-disable-line indent
      cfg.ADD_DATA_URI_TAGS, // eslint-disable-line indent
      transformCaseFunc // eslint-disable-line indent
      ) // eslint-disable-line indent
      : DEFAULT_DATA_URI_TAGS;
      FORBID_CONTENTS = 'FORBID_CONTENTS' in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
      FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
      FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
      USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
      ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true

      ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true

      ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false

      SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false

      WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false

      RETURN_DOM = cfg.RETURN_DOM || false; // Default false

      RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false

      RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false

      FORCE_BODY = cfg.FORCE_BODY || false; // Default false

      SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true

      KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true

      IN_PLACE = cfg.IN_PLACE || false; // Default false

      IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
      NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
        CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
      }

      if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
        CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
      }

      if (SAFE_FOR_TEMPLATES) {
        ALLOW_DATA_ATTR = false;
      }

      if (RETURN_DOM_FRAGMENT) {
        RETURN_DOM = true;
      }
      /* Parse profile info */


      if (USE_PROFILES) {
        ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
        ALLOWED_ATTR = [];

        if (USE_PROFILES.html === true) {
          addToSet(ALLOWED_TAGS, html$1);
          addToSet(ALLOWED_ATTR, html);
        }

        if (USE_PROFILES.svg === true) {
          addToSet(ALLOWED_TAGS, svg$1);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.svgFilters === true) {
          addToSet(ALLOWED_TAGS, svgFilters);
          addToSet(ALLOWED_ATTR, svg);
          addToSet(ALLOWED_ATTR, xml);
        }

        if (USE_PROFILES.mathMl === true) {
          addToSet(ALLOWED_TAGS, mathMl$1);
          addToSet(ALLOWED_ATTR, mathMl);
          addToSet(ALLOWED_ATTR, xml);
        }
      }
      /* Merge configuration parameters */


      if (cfg.ADD_TAGS) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }

        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }

      if (cfg.ADD_ATTR) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }

        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }

      if (cfg.ADD_URI_SAFE_ATTR) {
        addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
      }

      if (cfg.FORBID_CONTENTS) {
        if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
          FORBID_CONTENTS = clone(FORBID_CONTENTS);
        }

        addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
      }
      /* Add #text in case KEEP_CONTENT is set to true */


      if (KEEP_CONTENT) {
        ALLOWED_TAGS['#text'] = true;
      }
      /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */


      if (WHOLE_DOCUMENT) {
        addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
      }
      /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */


      if (ALLOWED_TAGS.table) {
        addToSet(ALLOWED_TAGS, ['tbody']);
        delete FORBID_TAGS.tbody;
      } // Prevent further manipulation of configuration.
      // Not available in IE8, Safari 5, etc.


      if (freeze) {
        freeze(cfg);
      }

      CONFIG = cfg;
    };

    var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ['mi', 'mo', 'mn', 'ms', 'mtext']);
    var HTML_INTEGRATION_POINTS = addToSet({}, ['foreignobject', 'desc', 'title', 'annotation-xml']); // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.

    var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ['title', 'style', 'font', 'a', 'script']);
    /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */

    var ALL_SVG_TAGS = addToSet({}, svg$1);
    addToSet(ALL_SVG_TAGS, svgFilters);
    addToSet(ALL_SVG_TAGS, svgDisallowed);
    var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
    addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
    /**
     *
     *
     * @param  {Element} element a DOM element whose namespace is being checked
     * @returns {boolean} Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */

    var _checkValidNamespace = function _checkValidNamespace(element) {
      var parent = getParentNode(element); // In JSDOM, if we're inside shadow DOM, then parentNode
      // can be null. We just simulate parent in this case.

      if (!parent || !parent.tagName) {
        parent = {
          namespaceURI: HTML_NAMESPACE,
          tagName: 'template'
        };
      }

      var tagName = stringToLowerCase(element.tagName);
      var parentTagName = stringToLowerCase(parent.tagName);

      if (element.namespaceURI === SVG_NAMESPACE) {
        // The only way to switch from HTML namespace to SVG
        // is via <svg>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'svg';
        } // The only way to switch from MathML to SVG is via
        // svg if parent is either <annotation-xml> or MathML
        // text integration points.


        if (parent.namespaceURI === MATHML_NAMESPACE) {
          return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
        } // We only allow elements that are defined in SVG
        // spec. All others are disallowed in SVG namespace.


        return Boolean(ALL_SVG_TAGS[tagName]);
      }

      if (element.namespaceURI === MATHML_NAMESPACE) {
        // The only way to switch from HTML namespace to MathML
        // is via <math>. If it happens via any other tag, then
        // it should be killed.
        if (parent.namespaceURI === HTML_NAMESPACE) {
          return tagName === 'math';
        } // The only way to switch from SVG to MathML is via
        // <math> and HTML integration points


        if (parent.namespaceURI === SVG_NAMESPACE) {
          return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
        } // We only allow elements that are defined in MathML
        // spec. All others are disallowed in MathML namespace.


        return Boolean(ALL_MATHML_TAGS[tagName]);
      }

      if (element.namespaceURI === HTML_NAMESPACE) {
        // The only way to switch from SVG to HTML is via
        // HTML integration points, and from MathML to HTML
        // is via MathML text integration points
        if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
          return false;
        }

        if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
          return false;
        } // We disallow tags that are specific for MathML
        // or SVG and should never appear in HTML namespace


        return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
      } // The code should never reach this place (this means
      // that the element somehow got namespace that is not
      // HTML, SVG or MathML). Return false just in case.


      return false;
    };
    /**
     * _forceRemove
     *
     * @param  {Node} node a DOM node
     */


    var _forceRemove = function _forceRemove(node) {
      arrayPush(DOMPurify.removed, {
        element: node
      });

      try {
        // eslint-disable-next-line unicorn/prefer-dom-node-remove
        node.parentNode.removeChild(node);
      } catch (_) {
        try {
          node.outerHTML = emptyHTML;
        } catch (_) {
          node.remove();
        }
      }
    };
    /**
     * _removeAttribute
     *
     * @param  {String} name an Attribute name
     * @param  {Node} node a DOM node
     */


    var _removeAttribute = function _removeAttribute(name, node) {
      try {
        arrayPush(DOMPurify.removed, {
          attribute: node.getAttributeNode(name),
          from: node
        });
      } catch (_) {
        arrayPush(DOMPurify.removed, {
          attribute: null,
          from: node
        });
      }

      node.removeAttribute(name); // We void attribute values for unremovable "is"" attributes

      if (name === 'is' && !ALLOWED_ATTR[name]) {
        if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
          try {
            _forceRemove(node);
          } catch (_) {}
        } else {
          try {
            node.setAttribute(name, '');
          } catch (_) {}
        }
      }
    };
    /**
     * _initDocument
     *
     * @param  {String} dirty a string of dirty markup
     * @return {Document} a DOM, filled with the dirty markup
     */


    var _initDocument = function _initDocument(dirty) {
      /* Create a HTML document */
      var doc;
      var leadingWhitespace;

      if (FORCE_BODY) {
        dirty = '<remove></remove>' + dirty;
      } else {
        /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
        var matches = stringMatch(dirty, /^[\r\n\t ]+/);
        leadingWhitespace = matches && matches[0];
      }

      if (PARSER_MEDIA_TYPE === 'application/xhtml+xml') {
        // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
        dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
      }

      var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
      /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */

      if (NAMESPACE === HTML_NAMESPACE) {
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
        } catch (_) {}
      }
      /* Use createHTMLDocument in case DOMParser is not available */


      if (!doc || !doc.documentElement) {
        doc = implementation.createDocument(NAMESPACE, 'template', null);

        try {
          doc.documentElement.innerHTML = IS_EMPTY_INPUT ? '' : dirtyPayload;
        } catch (_) {// Syntax error if dirtyPayload is invalid xml
        }
      }

      var body = doc.body || doc.documentElement;

      if (dirty && leadingWhitespace) {
        body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
      }
      /* Work on whole document or just its body */


      if (NAMESPACE === HTML_NAMESPACE) {
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      }

      return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
     * _createIterator
     *
     * @param  {Document} root document/fragment to create iterator for
     * @return {Iterator} iterator instance
     */


    var _createIterator = function _createIterator(root) {
      return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, null, false);
    };
    /**
     * _isClobbered
     *
     * @param  {Node} elm element to check for clobbering attacks
     * @return {Boolean} true if clobbered, false if safe
     */


    var _isClobbered = function _isClobbered(elm) {
      return elm instanceof HTMLFormElement && (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string' || typeof elm.insertBefore !== 'function');
    };
    /**
     * _isNode
     *
     * @param  {Node} obj object to check whether it's a DOM node
     * @return {Boolean} true is object is a DOM node
     */


    var _isNode = function _isNode(object) {
      return _typeof(Node) === 'object' ? object instanceof Node : object && _typeof(object) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
    };
    /**
     * _executeHook
     * Execute user configurable hooks
     *
     * @param  {String} entryPoint  Name of the hook's entry point
     * @param  {Node} currentNode node to work on with the hook
     * @param  {Object} data additional hook parameters
     */


    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
      if (!hooks[entryPoint]) {
        return;
      }

      arrayForEach(hooks[entryPoint], function (hook) {
        hook.call(DOMPurify, currentNode, data, CONFIG);
      });
    };
    /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     *
     * @param   {Node} currentNode to check for permission to exist
     * @return  {Boolean} true if node was killed, false if left alive
     */


    var _sanitizeElements = function _sanitizeElements(currentNode) {
      var content;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeElements', currentNode, null);
      /* Check if element is clobbered or can clobber */


      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Check if tagname contains Unicode */


      if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Now let's check the element's type and name */


      var tagName = transformCaseFunc(currentNode.nodeName);
      /* Execute a hook if present */

      _executeHook('uponSanitizeElement', currentNode, {
        tagName: tagName,
        allowedTags: ALLOWED_TAGS
      });
      /* Detect mXSS attempts abusing namespace confusion */


      if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Mitigate a problem with templates inside select */


      if (tagName === 'select' && regExpTest(/<template/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Remove element if anything forbids its presence */


      if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
        /* Check if we have a custom element to handle */
        if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
          if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
        }
        /* Keep content except for bad-listed elements */


        if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
          var parentNode = getParentNode(currentNode) || currentNode.parentNode;
          var childNodes = getChildNodes(currentNode) || currentNode.childNodes;

          if (childNodes && parentNode) {
            var childCount = childNodes.length;

            for (var i = childCount - 1; i >= 0; --i) {
              parentNode.insertBefore(cloneNode(childNodes[i], true), getNextSibling(currentNode));
            }
          }
        }

        _forceRemove(currentNode);

        return true;
      }
      /* Check whether element has a valid namespace */


      if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
        _forceRemove(currentNode);

        return true;
      }

      if ((tagName === 'noscript' || tagName === 'noembed') && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
        _forceRemove(currentNode);

        return true;
      }
      /* Sanitize element content to be template-safe */


      if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
        /* Get the element's text content */
        content = currentNode.textContent;
        content = stringReplace(content, MUSTACHE_EXPR$1, ' ');
        content = stringReplace(content, ERB_EXPR$1, ' ');

        if (currentNode.textContent !== content) {
          arrayPush(DOMPurify.removed, {
            element: currentNode.cloneNode()
          });
          currentNode.textContent = content;
        }
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeElements', currentNode, null);

      return false;
    };
    /**
     * _isValidAttribute
     *
     * @param  {string} lcTag Lowercase tag name of containing element.
     * @param  {string} lcName Lowercase attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid, otherwise false.
     */
    // eslint-disable-next-line complexity


    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
      /* Make sure attribute cannot clobber */
      if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
        return false;
      }
      /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */


      if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
        if ( // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ; else {
          return false;
        }
        /* Check value is safe. First, is attr inert? If so, is safe */

      } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ''))) ; else if (!value) ; else {
        return false;
      }

      return true;
    };
    /**
     * _basicCustomElementCheck
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     * @param {string} tagName name of the tag of the node to sanitize
     */


    var _basicCustomElementTest = function _basicCustomElementTest(tagName) {
      return tagName.indexOf('-') > 0;
    };
    /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param  {Node} currentNode to sanitize
     */


    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
      var attr;
      var value;
      var lcName;
      var l;
      /* Execute a hook if present */

      _executeHook('beforeSanitizeAttributes', currentNode, null);

      var attributes = currentNode.attributes;
      /* Check if we have attributes; if not we might have a text node */

      if (!attributes) {
        return;
      }

      var hookEvent = {
        attrName: '',
        attrValue: '',
        keepAttr: true,
        allowedAttributes: ALLOWED_ATTR
      };
      l = attributes.length;
      /* Go backwards over all attributes; safely remove bad ones */

      while (l--) {
        attr = attributes[l];
        var _attr = attr,
            name = _attr.name,
            namespaceURI = _attr.namespaceURI;
        value = name === 'value' ? attr.value : stringTrim(attr.value);
        lcName = transformCaseFunc(name);
        /* Execute a hook if present */

        hookEvent.attrName = lcName;
        hookEvent.attrValue = value;
        hookEvent.keepAttr = true;
        hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set

        _executeHook('uponSanitizeAttribute', currentNode, hookEvent);

        value = hookEvent.attrValue;
        /* Did the hooks approve of the attribute? */

        if (hookEvent.forceKeepAttr) {
          continue;
        }
        /* Remove attribute */


        _removeAttribute(name, currentNode);
        /* Did the hooks approve of the attribute? */


        if (!hookEvent.keepAttr) {
          continue;
        }
        /* Work around a security issue in jQuery 3.0 */


        if (regExpTest(/\/>/i, value)) {
          _removeAttribute(name, currentNode);

          continue;
        }
        /* Sanitize attribute content to be template-safe */


        if (SAFE_FOR_TEMPLATES) {
          value = stringReplace(value, MUSTACHE_EXPR$1, ' ');
          value = stringReplace(value, ERB_EXPR$1, ' ');
        }
        /* Is `value` valid for this attribute? */


        var lcTag = transformCaseFunc(currentNode.nodeName);

        if (!_isValidAttribute(lcTag, lcName, value)) {
          continue;
        }
        /* Handle attributes that require Trusted Types */


        if (trustedTypesPolicy && _typeof(trustedTypes) === 'object' && typeof trustedTypes.getAttributeType === 'function') {
          if (namespaceURI) ; else {
            switch (trustedTypes.getAttributeType(lcTag, lcName)) {
              case 'TrustedHTML':
                value = trustedTypesPolicy.createHTML(value);
                break;

              case 'TrustedScriptURL':
                value = trustedTypesPolicy.createScriptURL(value);
                break;
            }
          }
        }
        /* Handle invalid data-* attribute set by try-catching it */


        try {
          if (namespaceURI) {
            currentNode.setAttributeNS(namespaceURI, name, value);
          } else {
            /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
            currentNode.setAttribute(name, value);
          }

          arrayPop(DOMPurify.removed);
        } catch (_) {}
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeAttributes', currentNode, null);
    };
    /**
     * _sanitizeShadowDOM
     *
     * @param  {DocumentFragment} fragment to iterate over recursively
     */


    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
      var shadowNode;

      var shadowIterator = _createIterator(fragment);
      /* Execute a hook if present */


      _executeHook('beforeSanitizeShadowDOM', fragment, null);

      while (shadowNode = shadowIterator.nextNode()) {
        /* Execute a hook if present */
        _executeHook('uponSanitizeShadowNode', shadowNode, null);
        /* Sanitize tags and elements */


        if (_sanitizeElements(shadowNode)) {
          continue;
        }
        /* Deep shadow DOM detected */


        if (shadowNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(shadowNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(shadowNode);
      }
      /* Execute a hook if present */


      _executeHook('afterSanitizeShadowDOM', fragment, null);
    };
    /**
     * Sanitize
     * Public method providing core sanitation functionality
     *
     * @param {String|Node} dirty string or DOM node
     * @param {Object} configuration object
     */
    // eslint-disable-next-line complexity


    DOMPurify.sanitize = function (dirty, cfg) {
      var body;
      var importedNode;
      var currentNode;
      var oldNode;
      var returnNode;
      /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */

      IS_EMPTY_INPUT = !dirty;

      if (IS_EMPTY_INPUT) {
        dirty = '<!-->';
      }
      /* Stringify, in case dirty is an object */


      if (typeof dirty !== 'string' && !_isNode(dirty)) {
        // eslint-disable-next-line no-negated-condition
        if (typeof dirty.toString !== 'function') {
          throw typeErrorCreate('toString is not a function');
        } else {
          dirty = dirty.toString();

          if (typeof dirty !== 'string') {
            throw typeErrorCreate('dirty is not a string, aborting');
          }
        }
      }
      /* Check we can run. Otherwise fall back or ignore */


      if (!DOMPurify.isSupported) {
        if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
          if (typeof dirty === 'string') {
            return window.toStaticHTML(dirty);
          }

          if (_isNode(dirty)) {
            return window.toStaticHTML(dirty.outerHTML);
          }
        }

        return dirty;
      }
      /* Assign config vars */


      if (!SET_CONFIG) {
        _parseConfig(cfg);
      }
      /* Clean up removed elements */


      DOMPurify.removed = [];
      /* Check if dirty is correctly typed for IN_PLACE */

      if (typeof dirty === 'string') {
        IN_PLACE = false;
      }

      if (IN_PLACE) {
        /* Do some early pre-sanitization to avoid unsafe root nodes */
        if (dirty.nodeName) {
          var tagName = transformCaseFunc(dirty.nodeName);

          if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
          }
        }
      } else if (dirty instanceof Node) {
        /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */
        body = _initDocument('<!---->');
        importedNode = body.ownerDocument.importNode(dirty, true);

        if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
          /* Node is already a body, use as is */
          body = importedNode;
        } else if (importedNode.nodeName === 'HTML') {
          body = importedNode;
        } else {
          // eslint-disable-next-line unicorn/prefer-dom-node-append
          body.appendChild(importedNode);
        }
      } else {
        /* Exit directly if we have nothing to do */
        if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
        dirty.indexOf('<') === -1) {
          return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
        }
        /* Initialize the document to work on */


        body = _initDocument(dirty);
        /* Check we have a DOM node from the data */

        if (!body) {
          return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
        }
      }
      /* Remove first element node (ours) if FORCE_BODY is set */


      if (body && FORCE_BODY) {
        _forceRemove(body.firstChild);
      }
      /* Get node iterator */


      var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
      /* Now start iterating over the created document */


      while (currentNode = nodeIterator.nextNode()) {
        /* Fix IE's strange behavior with manipulated textNodes #89 */
        if (currentNode.nodeType === 3 && currentNode === oldNode) {
          continue;
        }
        /* Sanitize tags and elements */


        if (_sanitizeElements(currentNode)) {
          continue;
        }
        /* Shadow DOM detected, sanitize it */


        if (currentNode.content instanceof DocumentFragment) {
          _sanitizeShadowDOM(currentNode.content);
        }
        /* Check attributes, sanitize if necessary */


        _sanitizeAttributes(currentNode);

        oldNode = currentNode;
      }

      oldNode = null;
      /* If we sanitized `dirty` in-place, return it. */

      if (IN_PLACE) {
        return dirty;
      }
      /* Return sanitized string or DOM */


      if (RETURN_DOM) {
        if (RETURN_DOM_FRAGMENT) {
          returnNode = createDocumentFragment.call(body.ownerDocument);

          while (body.firstChild) {
            // eslint-disable-next-line unicorn/prefer-dom-node-append
            returnNode.appendChild(body.firstChild);
          }
        } else {
          returnNode = body;
        }

        if (ALLOWED_ATTR.shadowroot) {
          /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */
          returnNode = importNode.call(originalDocument, returnNode, true);
        }

        return returnNode;
      }

      var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
      /* Serialize doctype if allowed */

      if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
        serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
      }
      /* Sanitize final string template-safe */


      if (SAFE_FOR_TEMPLATES) {
        serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, ' ');
        serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, ' ');
      }

      return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    /**
     * Public method to set the configuration once
     * setConfig
     *
     * @param {Object} cfg configuration object
     */


    DOMPurify.setConfig = function (cfg) {
      _parseConfig(cfg);

      SET_CONFIG = true;
    };
    /**
     * Public method to remove the configuration
     * clearConfig
     *
     */


    DOMPurify.clearConfig = function () {
      CONFIG = null;
      SET_CONFIG = false;
    };
    /**
     * Public method to check if an attribute value is valid.
     * Uses last set config, if any. Otherwise, uses config defaults.
     * isValidAttribute
     *
     * @param  {string} tag Tag name of containing element.
     * @param  {string} attr Attribute name.
     * @param  {string} value Attribute value.
     * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
     */


    DOMPurify.isValidAttribute = function (tag, attr, value) {
      /* Initialize shared config vars if necessary. */
      if (!CONFIG) {
        _parseConfig({});
      }

      var lcTag = transformCaseFunc(tag);
      var lcName = transformCaseFunc(attr);
      return _isValidAttribute(lcTag, lcName, value);
    };
    /**
     * AddHook
     * Public method to add DOMPurify hooks
     *
     * @param {String} entryPoint entry point for the hook to add
     * @param {Function} hookFunction function to execute
     */


    DOMPurify.addHook = function (entryPoint, hookFunction) {
      if (typeof hookFunction !== 'function') {
        return;
      }

      hooks[entryPoint] = hooks[entryPoint] || [];
      arrayPush(hooks[entryPoint], hookFunction);
    };
    /**
     * RemoveHook
     * Public method to remove a DOMPurify hook at a given entryPoint
     * (pops it from the stack of hooks if more are present)
     *
     * @param {String} entryPoint entry point for the hook to remove
     * @return {Function} removed(popped) hook
     */


    DOMPurify.removeHook = function (entryPoint) {
      if (hooks[entryPoint]) {
        return arrayPop(hooks[entryPoint]);
      }
    };
    /**
     * RemoveHooks
     * Public method to remove all DOMPurify hooks at a given entryPoint
     *
     * @param  {String} entryPoint entry point for the hooks to remove
     */


    DOMPurify.removeHooks = function (entryPoint) {
      if (hooks[entryPoint]) {
        hooks[entryPoint] = [];
      }
    };
    /**
     * RemoveAllHooks
     * Public method to remove all DOMPurify hooks
     *
     */


    DOMPurify.removeAllHooks = function () {
      hooks = {};
    };

    return DOMPurify;
  }

  var purify = createDOMPurify();

  return purify;

}));
//# sourceMappingURL=purify.js.map


/***/ }),

/***/ 307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 471:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { sanitize } = __webpack_require__(856);

module.exports.agoraStatesDiscussions = [
  {
    id: "D_kwDOHOApLM4APjJi",
    createdAt: "2022-05-16T01:02:17Z",
    title: "koans 과제 진행 중 npm install 오류로 인해 정상 작동 되지 않습니다",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
    author: "dubipy",
    answer: {
      id: "DC_kwDOHOApLM4AKg6M",
      createdAt: "2022-05-16T02:09:52Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/45#discussioncomment-2756236",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/dubipy/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/dubipy">@dubipy</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁 입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은 노드 환경이 구성되어 있지 않기 때문에 발생되는 문제로 확인됩니다.</p>\n<p dir="auto"><code class="notranslate">brew unlink node &amp;&amp; brew link node</code></p>\n<p dir="auto">노드를 연결해 보시고 안된다면</p>\n<p dir="auto"><code class="notranslate">brew link --overwrite node</code></p>\n<p dir="auto">이 명령어를 그 다음에도 안된다면 접근권한 문제일 가능성이 큽니다.</p>\n<p dir="auto"><code class="notranslate">$ sudo chmod 776 /usr/local/lib</code> 접근 권한 변경 후<br>\n<code class="notranslate">$ brew link --overwrite node</code> 다시 연결을 해보세요 !</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문을 남겨주세요 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">--------------- 여기서부터 복사하세요 ---------------</p>\n<p dir="auto">운영 체제: 예) macOS</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\nPair 과제 / JavaScript Koans</p>\n<p dir="auto">npm install 명령어 입력 시 env: node: No such file or directory 라고 뜹니다</p>\n<p dir="auto">에러 발생하여 아래 명령어 실행 했는데도 불구하고 똑같은 에러가 발생했습니다<br>\nnpm cache clean --force</p>\n<p dir="auto">rm package-lock.json</p>\n<p dir="auto">rm -rf ./node_modules/</p>\n<p dir="auto">npm --verbose install</p>\n<p dir="auto">폴더 자체가 문제가 있다고 생각하여 github에서 다시 fork 후 진행했는데도 같은 에러가 발생했습니다<br>\n리눅스 기초 챕터 때 npm 설치해서 마지막 submit까지는 잘 됐는데 현재 짝수 생성기 폴더도 똑같이 npm install 시 no such file or directory가 발생합니다</p>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="minjun@dubi fe-sprint-javascript-koans-main % pwd \n/Users/minjun/Documents/fe_frontand_39/fe-sprint-javascript-koans-main\nminjun@dubi fe-sprint-javascript-koans-main % npm install \nenv: node: No such file or directory"><pre><span class="pl-s1">minjun</span>@<span class="pl-s1">dubi</span> <span class="pl-s1">fe</span><span class="pl-c1">-</span><span class="pl-s1">sprint</span><span class="pl-c1">-</span><span class="pl-s1">javascript</span><span class="pl-c1">-</span><span class="pl-s1">koans</span><span class="pl-c1">-</span><span class="pl-s1">main</span> <span class="pl-c1">%</span> <span class="pl-s1">pwd</span> \n<span class="pl-c1">/</span><span class="pl-v">Users</span><span class="pl-c1">/</span><span class="pl-s1">minjun</span><span class="pl-c1">/</span><span class="pl-v">Documents</span><span class="pl-c1">/</span><span class="pl-s1">fe_frontand_39</span><span class="pl-c1">/</span><span class="pl-s1">fe</span><span class="pl-c1">-</span><span class="pl-s1">sprint</span><span class="pl-c1">-</span><span class="pl-s1">javascript</span><span class="pl-c1">-</span><span class="pl-s1">koans</span><span class="pl-c1">-</span><span class="pl-s1">main</span>\n<span class="pl-s1">minjun</span><span class="pl-kos"></span>@<span class="pl-s1">dubi</span> <span class="pl-s1">fe</span><span class="pl-c1">-</span><span class="pl-s1">sprint</span><span class="pl-c1">-</span><span class="pl-s1">javascript</span><span class="pl-c1">-</span><span class="pl-s1">koans</span><span class="pl-c1">-</span><span class="pl-s1">main</span> <span class="pl-c1">%</span> <span class="pl-s1">npm</span> <span class="pl-s1">install</span> \nenv: node: <span class="pl-v">No</span> <span class="pl-s1">such</span> <span class="pl-s1">file</span> <span class="pl-s1">or</span> <span class="pl-s1">directory</span></pre></div>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요.<br>\n<a href="https://mia-dahae.tistory.com/89" rel="nofollow">https://mia-dahae.tistory.com/89</a></p>\n<p dir="auto"><a href="https://stackoverflow.com/questions/38143558/npm-install-resulting-in-enoent-no-such-file-or-directory" rel="nofollow">https://stackoverflow.com/questions/38143558/npm-install-resulting-in-enoent-no-such-file-or-directory</a></p>\n<p dir="auto"><a href="https://velog.io/@hn04147/npm-install-%ED%95%A0-%EB%95%8C-tar-ENOENT-no-such-file-or-directory-lstat-%EC%97%90%EB%9F%AC%EB%82%A0-%EA%B2%BD%EC%9A%B0" rel="nofollow">https://velog.io/@hn04147/npm-install-%ED%95%A0-%EB%95%8C-tar-ENOENT-no-such-file-or-directory-lstat-%EC%97%90%EB%9F%AC%EB%82%A0-%EA%B2%BD%EC%9A%B0</a></p>\n<p dir="auto"><a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&amp;blogId=chandong83&amp;logNo=221064506346" rel="nofollow">https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&amp;blogId=chandong83&amp;logNo=221064506346</a></p>\n<p dir="auto"><a href="https://webisfree.com/2021-07-15/npm-install-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-rename-no-such-file-or-directory-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B0%80" rel="nofollow">https://webisfree.com/2021-07-15/npm-install-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-rename-no-such-file-or-directory-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B0%80</a></p>\n<p dir="auto"><a href="https://hellowworlds.tistory.com/57" rel="nofollow">https://hellowworlds.tistory.com/57</a></p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
  },
  {
    id: "D_kwDOHOApLM4APjIj",
    createdAt: "2022-05-15T23:57:43Z",
    title:
      "반복되는 문자 리턴 문제에서 ' '(공백하나인 문자열)입력시 오류가 발생합니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/44",
    author: "JoeunNAL",
    answer: null,
    bodyHTML:
      '<ul dir="auto">\n<li>\n<p dir="auto">운영 체제: macOS</p>\n</li>\n<li>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?</p>\n</li>\n</ul>\n<p dir="auto">코플릿 객체 21번 문제에서 \' \'(공백하나인 문자열)입력시 오류가 발생합니다.</p>\n<ul dir="auto">\n<li>어떠한 부분에서 이해가 안 되었나요?</li>\n</ul>\n<p dir="auto">빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.<br>\n라는 주의사항에 맞게 조건문을   <code class="notranslate">if(str === \' \'){ return bigChar;}</code> 추가했습니다.<br>\n그런데 테스트 실행할때 주석처리한 아래 3줄이 활성화 되어있으면</p>\n<blockquote>\n<p dir="auto">\' \'을(를) 입력받은 경우, 빈 문자열을 리턴해야 합니다 "</p>\n</blockquote>\n<p dir="auto">이라는 지문에서 통과가 안되고 \' \'(공백하나인 문자열)이 리턴된다고 나옵니다.<br>\n크롬 디버거할때는<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90553688/168499795-ccd028a3-6c1e-452d-83e7-0144b8b823e4.png"><img width="485" alt="image" src="https://user-images.githubusercontent.com/90553688/168499795-ccd028a3-6c1e-452d-83e7-0144b8b823e4.png" style="max-width: 100%;"></a><br>\n빈 문자열로 뜨는것 같은데 어느부분에서 문제가 되는걸까요??</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function mostFrequentCharacter(str) {\n\n  let newObj = {};\n  let bigChar = \'\';\n  let bigNum = 1;\n\n  if(str === \' \'){\n    return bigChar;\n  }\n  \n  for(let i = 0; i&lt; str.length; i++){\n    // if(i === 0){     &lt;----------------------여기 부분\n    //   bigChar = str[0];\n    // }\n\n    let key = str[i];\n    if(key === \' \'){\n      continue;\n    }\n\n    if(!(key in newObj)){\n      newObj[key] = 1;\n    } else{\n      newObj[key]++;\n    }\n\n    if(newObj[key] &gt; bigNum){\n      bigNum = newObj[key];\n      bigChar = key;\n    }\n  }\n  return bigChar;\n}\n"><pre><span class="pl-k">function</span> <span class="pl-en">mostFrequentCharacter</span><span class="pl-kos">(</span><span class="pl-s1">str</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n\n  <span class="pl-k">let</span> <span class="pl-s1">newObj</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">bigChar</span> <span class="pl-c1">=</span> <span class="pl-s">\'\'</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">bigNum</span> <span class="pl-c1">=</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>\n\n  <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s1">str</span> <span class="pl-c1">===</span> <span class="pl-s">\' \'</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n    <span class="pl-k">return</span> <span class="pl-s1">bigChar</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span>\n  \n  <span class="pl-k">for</span><span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">&lt;</span> <span class="pl-s1">str</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n    <span class="pl-c">// if(i === 0){     &lt;----------------------여기 부분</span>\n    <span class="pl-c">//   bigChar = str[0];</span>\n    <span class="pl-c">// }</span>\n\n    <span class="pl-k">let</span> <span class="pl-s1">key</span> <span class="pl-c1">=</span> <span class="pl-s1">str</span><span class="pl-kos">[</span><span class="pl-s1">i</span><span class="pl-kos">]</span><span class="pl-kos">;</span>\n    <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s1">key</span> <span class="pl-c1">===</span> <span class="pl-s">\' \'</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n      <span class="pl-k">continue</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n\n    <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-c1">!</span><span class="pl-kos">(</span><span class="pl-s1">key</span> <span class="pl-k">in</span> <span class="pl-s1">newObj</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n      <span class="pl-s1">newObj</span><span class="pl-kos">[</span><span class="pl-s1">key</span><span class="pl-kos">]</span> <span class="pl-c1">=</span> <span class="pl-c1">1</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span> <span class="pl-k">else</span><span class="pl-kos">{</span>\n      <span class="pl-s1">newObj</span><span class="pl-kos">[</span><span class="pl-s1">key</span><span class="pl-kos">]</span><span class="pl-c1">++</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n\n    <span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-s1">newObj</span><span class="pl-kos">[</span><span class="pl-s1">key</span><span class="pl-kos">]</span> <span class="pl-c1">&gt;</span> <span class="pl-s1">bigNum</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n      <span class="pl-s1">bigNum</span> <span class="pl-c1">=</span> <span class="pl-s1">newObj</span><span class="pl-kos">[</span><span class="pl-s1">key</span><span class="pl-kos">]</span><span class="pl-kos">;</span>\n      <span class="pl-s1">bigChar</span> <span class="pl-c1">=</span> <span class="pl-s1">key</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n  <span class="pl-kos">}</span>\n  <span class="pl-k">return</span> <span class="pl-s1">bigChar</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span></pre></div>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4",
  },
  {
    id: "D_kwDOHOApLM4APi4R",
    createdAt: "2022-05-15T09:28:00Z",
    title: "JavaScript Koans 04_Scope 문제의 innerFn()에 대하여 질문드립니다!",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/43",
    author: "anotheranotherhoon",
    answer: {
      id: "DC_kwDOHOApLM4AKg7z",
      createdAt: "2022-05-16T02:47:27Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/43#discussioncomment-2756339",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/anotheranotherhoon/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/anotheranotherhoon">@anotheranotherhoon</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">스코프와 클로져에 대해 깊게 공부하는 모습 너무 너무 좋습니다 !</p>\n<p dir="auto">일단 즉시 실행 함수 표현식에 대해 질문 주셨는데요 !<br>\n함수를 정의 -&gt; 변수에 함수를 저장 하고 실행 ! 이 과정을 거치지 않고 정의하자마자 바로 호출하는 것이 즉시 실행 함수 입니다.<br>\n그렇다면 위에 코드는 즉시 실행 함수 일까요?</p>\n<p dir="auto"><a href="https://developer.mozilla.org/ko/docs/Glossary/IIFE" rel="nofollow">즉시실행함수</a><br>\n한 번 읽어보시고 한 번 더 생각해보세요 ! 직접 생각하는 것이 가장 기억에 오래 남습니다 !</p>\n<p dir="auto">두 번째 <code class="notranslate">innerFn</code>이라는 변수를 새로 선언했고 <code class="notranslate">outerFn()</code>을 할당했습니다. 즉, <code class="notranslate">outerFn()</code>을 호출 한 것입니다.<br>\n이는 위의 <code class="notranslate">innerFn</code> 함수와는 다른 녀석입니다.<code class="notranslate">innerFn</code> 함수도 마찬가지로 <code class="notranslate">outerFn</code> 내부에서 선언되었으므로 밖으로 나올 수 없기 때문이에요!</p>\n<p dir="auto"><code class="notranslate">const apple = outerFn()</code>  // innerFn은 단순한 변수명임 ! apple을 넣던 banana를 넣던 상관없음<br>\n<code class="notranslate">expect(apple()).to.equal(178)</code></p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 000</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">--------------- 여기서부터 복사하세요 ---------------</p>\n<p dir="auto">운영 체제: 예) macOS, Ubuntu<br>\nmacOS<br>\nNode.js 버전(node -v): 예)v14.16.0<br>\nv12.18.14</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\nJavaScript Koans 04_Scope.js 문제 해결중</p>\n<div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="it(\'lexical scope와 closure에 대해 다시 확인합니다.\', function () {\n    let age = 27;\n    let name = \'jin\';\n    let height = 179;\n\n    function outerFn() {\n      let age = 24;\n      name = \'jimin\';\n      let height = 178;\n\n      function innerFn() {\n        age = 26;\n        let name = \'suga\';\n        return height;\n      }\n\n      innerFn();\n\n      expect(age).to.equal(26);\n      expect(name).to.equal(\'jimin\');\n\n      return innerFn;\n    }\n\n    const innerFn = outerFn(); //  &lt; --- ①  이부분에 대해서\n\n    expect(age).to.equal(27);\n    expect(name).to.equal(\'jimin\');\n    expect(innerFn()).to.equal(178); // &lt;---  ② \n  });"><pre class="notranslate"><code class="notranslate">it(\'lexical scope와 closure에 대해 다시 확인합니다.\', function () {\n    let age = 27;\n    let name = \'jin\';\n    let height = 179;\n\n    function outerFn() {\n      let age = 24;\n      name = \'jimin\';\n      let height = 178;\n\n      function innerFn() {\n        age = 26;\n        let name = \'suga\';\n        return height;\n      }\n\n      innerFn();\n\n      expect(age).to.equal(26);\n      expect(name).to.equal(\'jimin\');\n\n      return innerFn;\n    }\n\n    const innerFn = outerFn(); //  &lt; --- ①  이부분에 대해서\n\n    expect(age).to.equal(27);\n    expect(name).to.equal(\'jimin\');\n    expect(innerFn()).to.equal(178); // &lt;---  ② \n  });\n</code></pre></div>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요?</p>\n<ol dir="auto">\n<li>\n<p dir="auto">① 부분에서 innerFn이라는 변수에 outerFn()을 할당했습니다.<br>\n변수에 함수호출문을 할당했다고 해석했습니다.<br>\n그렇다면 ①에서 const innerFn을 할당함과 동시에 할당을 하게되는 outerFn함수가 실행되나요?<br>\n그렇다면 ①도 즉시 실행 함수표현식인가요??</p>\n</li>\n<li>\n<p dir="auto">②에서 호출하는 innerFn()은 outerFn() 함수 내의 innerFn()을 호출 한 것인가요?<br>\n아니면 ①을 통해 innerFn호출에 의해 outerFn으로 접근하여 innerFn에 접근한 것인가요?</p>\n</li>\n</ol>\n<p dir="auto">제 생각에는 outerFn스코프내의 함수outerFn으로 바로 접근하는것이 바깥에서는 안으로 진입할 수 없는 규칙에 위배된다 생각합니다.</p>\n<p dir="auto">함수호이스팅은 함수내에 있는 함수까지 호이스팅 되어 전역으로 접근가능한건가요?</p>\n<p dir="auto">변수명과 함수명이 중복되어 공부하는 과정에서 잘못 이해하고 넘어갈 수 도 있을 것 같아 정확히 알아보기위해 질문을 남깁니다 감사합니다.</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/77476348?s=64&u=64243db62117de5c254c9a76184753b76d7303ff&v=4",
  },
  {
    id: "D_kwDOHOApLM4APh3j",
    createdAt: "2022-05-13T03:38:57Z",
    title:
      "Unit10/Checkpoint2/종합퀴즈2/6번 관련하여 클로저의 효용성에 대해 질문드립니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/42",
    author: "JiYJ725",
    answer: {
      id: "DC_kwDOHOApLM4AKdo2",
      createdAt: "2022-05-13T04:19:10Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/42#discussioncomment-2742838",
      author: "Hong-sk",
      bodyHTML:
        '<p dir="auto">아래 작성해주신 코드내용처럼 isShow를 전역변수로 선언해서 실행하셔도 크게 문제는 일어나지 않습니다.</p>\n<p dir="auto">다만 isShow를 굳이 클로저를 활용해 접근하는 이유는 클로저를 사용하는 것이 <strong>상태를 안전하게 변경하고 유지할 수 있기 때문</strong>입니다.</p>\n<p dir="auto">아래 코드의 경우 isShow가 전역 스코프에 있기 때문에 toggle함수 말고도, 다른 모든 부분에서도 isShow를 참조할 수 있고, 변경할 수 있습니다.</p>\n<p dir="auto">isShow는 토글의 display를 block으로 해줄지, none으로 해줄지를 나타내는 용도로만 쓰여야되는데, 모든 곳에서 참조 및 변경이 가능하다면 <strong>의도치 않은 변경에 의한 오류</strong>를 야기시킬 수 있습니다.</p>\n<p dir="auto">따라서 클로저를 통해 내부함수말고는 접근할 수 없게끔 만들어주는 것이 상태를 안전하게 보관할 수 있는 것입니다.</p>\n<p dir="auto">이 내용은 오늘 줌 강의시간에 크루님이 말씀해주신 캡슐화나 정보은닉과도 깊은 연관이 있다고 생각됩니다 :)</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/61141988?s=64&u=92c71910d9f6409d38d40d7d5a0a094d8ec647ed&v=4",
    },
    bodyHTML:
      '<p dir="auto">안녕하세요! 클로저의 효용성에 의문이 들어 질문 드립니다!</p>\n<p dir="auto">클로저를 사용하는 정답코드</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="        var box = document.querySelector(\'.box\');\n        var toggleBtn = document.querySelector(\'.toggle\');\n\n        var toggle = (function () {\n            var isShow = false;\n            // TODO: ① 클로저를 반환하는 함수를 작성하세요.\n            return function () {\n                // TODO: ③ isShow 변수의 상태를 변경하는 코드를 작성하세요.\n                box.style.display = isShow ? \'block\' : \'none\';\n                isShow = !isShow;\n            };\n        })();\n\n        // ② 이벤트 프로퍼티에 클로저를 할당\n        toggleBtn.onclick = toggle;"><pre>        <span class="pl-k">var</span> <span class="pl-s1">box</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.box\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">toggleBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.toggle\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n        <span class="pl-k">var</span> <span class="pl-s1">toggle</span> <span class="pl-c1">=</span> <span class="pl-kos">(</span><span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n            <span class="pl-k">var</span> <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n            <span class="pl-c">// TODO: ① 클로저를 반환하는 함수를 작성하세요.</span>\n            <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n                <span class="pl-c">// TODO: ③ isShow 변수의 상태를 변경하는 코드를 작성하세요.</span>\n                <span class="pl-s1">box</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">display</span> <span class="pl-c1">=</span> <span class="pl-s1">isShow</span> ? <span class="pl-s">\'block\'</span> : <span class="pl-s">\'none\'</span><span class="pl-kos">;</span>\n                <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">!</span><span class="pl-s1">isShow</span><span class="pl-kos">;</span>\n            <span class="pl-kos">}</span><span class="pl-kos">;</span>\n        <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n        <span class="pl-c">// ② 이벤트 프로퍼티에 클로저를 할당</span>\n        <span class="pl-s1">toggleBtn</span><span class="pl-kos">.</span><span class="pl-c1">onclick</span> <span class="pl-c1">=</span> <span class="pl-s1">toggle</span><span class="pl-kos">;</span></pre></div>\n<p dir="auto">전역 변수를 통해 상태를 관리하는 코드</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="        var box = document.querySelector(\'.box\');\n        var toggleBtn = document.querySelector(\'.toggle\');\n        var isShow = false;\n        var toggle = function () {\n            box.style.display = isShow ? \'block\' : \'none\';\n            isShow = !isShow; // 전역 변수에 적용\n        };\n\n        // ② 이벤트 프로퍼티에 클로저를 할당\n        toggleBtn.onclick = toggle;"><pre>        <span class="pl-k">var</span> <span class="pl-s1">box</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.box\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">toggleBtn</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.toggle\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n        <span class="pl-k">var</span> <span class="pl-en">toggle</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n            <span class="pl-s1">box</span><span class="pl-kos">.</span><span class="pl-c1">style</span><span class="pl-kos">.</span><span class="pl-c1">display</span> <span class="pl-c1">=</span> <span class="pl-s1">isShow</span> ? <span class="pl-s">\'block\'</span> : <span class="pl-s">\'none\'</span><span class="pl-kos">;</span>\n            <span class="pl-s1">isShow</span> <span class="pl-c1">=</span> <span class="pl-c1">!</span><span class="pl-s1">isShow</span><span class="pl-kos">;</span> <span class="pl-c">// 전역 변수에 적용</span>\n        <span class="pl-kos">}</span><span class="pl-kos">;</span>\n\n        <span class="pl-c">// ② 이벤트 프로퍼티에 클로저를 할당</span>\n        <span class="pl-s1">toggleBtn</span><span class="pl-kos">.</span><span class="pl-c1">onclick</span> <span class="pl-c1">=</span> <span class="pl-en">toggle</span><span class="pl-kos">;</span></pre></div>\n<p dir="auto">아래처럼 isShow를 전역변수로 선언하고, 그 상태를 토대로 스타일을 적용해주어도 똑같이 동작하는데, 굳이 클로저를 활용하는 이유가 궁금합니다.</p>\n<p dir="auto">이렇게 토글버튼 등에서 클로저를 활용하는 경우는 나중에 코드가 방대해졌을 때, 동작과 상태가 한번에 묶여있는 형태가 유지보수하기 용이해서 활용하는 것인가요? 혹은 다른이유가 있는지 궁금합니다.</p>\n<p dir="auto">감사합니다.</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/87750478?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APh17",
    createdAt: "2022-05-13T02:26:58Z",
    title:
      "클로저 함수의 특징 설명 중 '함수를 리턴하는 함수'가 이해가 되지 않습니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/41",
    author: "Hong-sk",
    answer: {
      id: "DC_kwDOHOApLM4AKdsX",
      createdAt: "2022-05-13T05:20:39Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/41#discussioncomment-2743063",
      author: "kimploo",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Hong-sk/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Hong-sk">@Hong-sk</a> 님! 클로저 함수라는 워딩이 다소 오해가 있어보입니다.<br>\n향후 콘텐츠 업데이트를 통해 "클로저 함수"라는 워딩은 장기적으로 쓰지 않을 예정입니다.</p>\n<p dir="auto">나중에 다른 분들과 소통할 때는 아래 코드에서<br>\n"외부 함수(outer)", "내부 함수(inner)"라는 표현 정도는 사용할 수 있겠습니다.</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const outer = function (x) {\n    const inner = function (y) {\n        return x + y;\n    }\n    return inner;\n}"><pre><span class="pl-k">const</span> <span class="pl-en">outer</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">x</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-k">const</span> <span class="pl-en">inner</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">y</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n        <span class="pl-k">return</span> <span class="pl-s1">x</span> <span class="pl-c1">+</span> <span class="pl-s1">y</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n    <span class="pl-k">return</span> <span class="pl-en">inner</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span></pre></div>\n<blockquote>\n<p dir="auto">내부 함수는 외부 함수 스코프에 접근할 수 있기 때문에, 매개변수 x의 값을 조회할 수 있다.</p>\n</blockquote>\n<p dir="auto">정도의 표현을 사용해주시면 무난하겠습니다! <g-emoji class="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png">😄</g-emoji></p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제: Ubuntu</p>\n<p dir="auto">Node.js 버전(node -v): v16.14.2</p>\n<h3 dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?</h3>\n<p dir="auto">Unit10 / chpater3-클로저 함수의 특징 개념학습을 진행하다 이해가 되지 않는 부분이 있어 질문 드립니다.</p>\n<h3 dir="auto">어떠한 부분에서 이해가 안 되었나요?</h3>\n<p dir="auto">개념 설명 5번째 슬라이드에서</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const adder = function (x) {\n    return function (y) {\n        return x + y;\n    }\n}\n"><pre><span class="pl-k">const</span> <span class="pl-en">adder</span> <span class="pl-c1">=</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">x</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-kos">(</span><span class="pl-s1">y</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n        <span class="pl-k">return</span> <span class="pl-s1">x</span> <span class="pl-c1">+</span> <span class="pl-s1">y</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n<span class="pl-kos">}</span></pre></div>\n<p dir="auto">위와 같은 코드를 예시를 들어주며</p>\n<blockquote>\n<p dir="auto">클로저 함수는 위와 비슷한 모양을 갖고 있습니다. 이를 통해 알아볼 수 있는 첫 번째 특징은, 클로저 함수는 <strong>"함수를 리턴하는 함수"</strong> 라는 점입니다. 함수를 리턴하는 함수가 클로저의 형태를 만듭니다.</p>\n</blockquote>\n<p dir="auto">라는 설명이 적혀 있습니다.</p>\n<p dir="auto">위의 코드만을 두고 생각을 해 보았을 때 함수를 return해주는 함수는 adder이며 그 안에서 반환되는 익명함수는 x+y를 리턴해줄뿐 함수를 리턴해주고 있지는 않습니다.  <strong>즉, 맥락상으로는 adder함수가 클로저 함수라고 생각할 수 있는 것처럼 보입니다.</strong></p>\n<p dir="auto">하지만 제가 이해한 클로저 함수는 \'외부 환경의 렉시컬 환경, 즉 상위스코프를 참조하는 내부함수\'이고</p>\n<p dir="auto">또 챕터 3. 클로저 개요에도</p>\n<blockquote>\n<p dir="auto">이와 같은 이유로 "외부 함수의 변수에 접근할 수 있는 내부 함수"를 클로저 함수라고 합니다.</p>\n</blockquote>\n<p dir="auto">라고 나와있습니다.</p>\n<p dir="auto">이에 따르면</p>\n<blockquote>\n<p dir="auto">함수를 리턴하는 함수가 클로저의 형태를 만듭니다.</p>\n</blockquote>\n<p dir="auto">라는 문장은 맞는 말일 수 있다고 생각하지만</p>\n<blockquote>\n<p dir="auto">클로저 함수는 \'함수를 리턴하는 함수\' 라는 점입니다.</p>\n</blockquote>\n<p dir="auto">라는 설명은 잘못된 문장이거나, 맥락상 오해의 소지를 불러 일으킬 수 있는 문장이라고 생각합니다.</p>\n<p dir="auto">혹시 제가 잘못된 내용으로 이해했다거나 바로잡아주실 부분이 있으시다면 설명 부탁드려도 될까요??</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/61141988?s=64&u=92c71910d9f6409d38d40d7d5a0a094d8ec647ed&v=4",
  },
  {
    id: "D_kwDOHOApLM4APgSk",
    createdAt: "2022-05-10T14:43:13Z",
    title:
      "코플릿 배열 24번에 replaceAll을 쓰면 통과가 안되는 이유가 무엇인가요?.?",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/40",
    author: "jindory",
    answer: {
      id: "DC_kwDOHOApLM4AKZuk",
      createdAt: "2022-05-11T02:28:57Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/40#discussioncomment-2726820",
      author: "Citysquirrel",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/jindory/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/jindory">@jindory</a>  님!<br>\n코드스테이츠 교육 엔지니어 곽명우입니다 <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<hr>\n<p dir="auto">코플릿에서 replaceAll 사용이 되질 않아서 답답하셨겠군요..!</p>\n<p dir="auto">현재 저희가 제공중인 코플릿 서버 버전은 node.js 14버전입니다.<br>\n그렇다보니 15버전 이후 지원되는 replaceAll 메서드 사용이 불가합니다.<br>\n향후 버전 업그레이드를 진행할 것이나, 지금은 이를 참고하시어 코스를 진행해주시면 감사하겠습니다.</p>\n<hr>\n<p dir="auto">답변이 도움이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 Mark as answer를 눌러주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n추가 질문이 있으시거나 해결이 힘드시면 꼭! 답글을 달아주세요.</p>\n<p dir="auto">감사합니다.<br>\n코드스테이츠 교육 엔지니어<g-emoji class="g-emoji" alias="chipmunk" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f43f.png">🐿️</g-emoji><br>\n곽명우 드림</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제 : macOS</p>\n<p dir="auto">Node.js 버전 : v16.15.0</p>\n<p dir="auto">질문 과제  : 코플릿 배열 24_createPhoneNumber</p>\n<p dir="auto">어떤 문제에 부딪혔나요? : 배열에 담긴 요소들을 \',\' 을 제외하여 결과값을 가져오는 방법 중 replaceAll을 쓰면,<br>\n콘솔에서 출력예시와 동일하게 string타입으로 리턴되는데 결과창에서는 통과가 안됩니다. <g-emoji class="g-emoji" alias="scream_cat" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f640.png">🙀</g-emoji></p>\n<ul dir="auto">\n<li>replaceAll을 이용한 경우</li>\n</ul>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function createPhoneNumber(arr) {\n  let len= arr.length;\n  let firstNum = arr.slice(0, 3);\n  let midNum = arr.slice(len -8, len -4);\n  let lastNum = arr.slice(len -4, len);\n\n  let str = `(${firstNum})${midNum}-${lastNum}`;\n  return str.replaceAll(\',\',\'\');\n}\n// createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]);\n// \'(010)1234-8765\'"><pre><span class="pl-k">function</span> <span class="pl-en">createPhoneNumber</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n  <span class="pl-k">let</span> <span class="pl-s1">len</span><span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">firstNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">midNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">4</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">lastNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-s1">len</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n  <span class="pl-k">let</span> <span class="pl-s1">str</span> <span class="pl-c1">=</span> <span class="pl-s">`(<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">firstNum</span><span class="pl-kos">}</span></span>)<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">midNum</span><span class="pl-kos">}</span></span>-<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">lastNum</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span>\n  <span class="pl-k">return</span> <span class="pl-s1">str</span><span class="pl-kos">.</span><span class="pl-en">replaceAll</span><span class="pl-kos">(</span><span class="pl-s">\',\'</span><span class="pl-kos">,</span><span class="pl-s">\'\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span>\n<span class="pl-c">// createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]);</span>\n<span class="pl-c">// \'(010)1234-8765\'</span></pre></div>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/22221941/167655688-b0728d05-3417-4398-9097-a62fa2d088af.png"><img src="https://user-images.githubusercontent.com/22221941/167655688-b0728d05-3417-4398-9097-a62fa2d088af.png" alt="image" style="max-width: 100%;"></a></p>\n<ul dir="auto">\n<li>join을 이용한 경우</li>\n</ul>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function createPhoneNumber(arr) {\n  let len= arr.length;\n  let firstNum = arr.slice(0, 3).join(\'\');\n  let midNum = arr.slice(len -8, len -4).join(\'\');\n  let lastNum = arr.slice(len -4, len).join(\'\');\n\n  return `(${firstNum})${midNum}-${lastNum}`;\n}\n// createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]);\n// \'(010)1234-8765\'"><pre><span class="pl-k">function</span> <span class="pl-en">createPhoneNumber</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n  <span class="pl-k">let</span> <span class="pl-s1">len</span><span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">firstNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">,</span> <span class="pl-c1">3</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">\'\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">midNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">8</span><span class="pl-kos">,</span> <span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">4</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">\'\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n  <span class="pl-k">let</span> <span class="pl-s1">lastNum</span> <span class="pl-c1">=</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-s1">len</span> <span class="pl-c1">-</span><span class="pl-c1">4</span><span class="pl-kos">,</span> <span class="pl-s1">len</span><span class="pl-kos">)</span><span class="pl-kos">.</span><span class="pl-en">join</span><span class="pl-kos">(</span><span class="pl-s">\'\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n\n  <span class="pl-k">return</span> <span class="pl-s">`(<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">firstNum</span><span class="pl-kos">}</span></span>)<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">midNum</span><span class="pl-kos">}</span></span>-<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">lastNum</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span>\n<span class="pl-c">// createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 8, 7, 6, 5]);</span>\n<span class="pl-c">// \'(010)1234-8765\'</span></pre></div>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/22221941/167655749-e2ead01e-65c1-4dce-ad2f-aea38e88beb5.png"><img src="https://user-images.githubusercontent.com/22221941/167655749-e2ead01e-65c1-4dce-ad2f-aea38e88beb5.png" alt="image" style="max-width: 100%;"></a></p>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요. : <a href="https://chanyeong.com/blog/post/29" rel="nofollow">https://chanyeong.com/blog/post/29</a><br>\n신규 매서드라는 내용을 확인하였습니다 ;-; 아직 사용이 불가한건지요..?<br>\n이 문제가 아니면 코드 어디 부분을 더 알아볼까요;-;</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/22221941?s=64&u=7332dde3a563f98d2912e107f455ce2265ccca45&v=4",
  },
  {
    id: "D_kwDOHOApLM4APgDd",
    createdAt: "2022-05-10T07:37:59Z",
    title: "코플릿 배열 18번 인스턴스(주소값 동일)에 대해 알고 싶습니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/39",
    author: "HelloHailie",
    answer: {
      id: "DC_kwDOHOApLM4AKYNk",
      createdAt: "2022-05-10T08:43:12Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/39#discussioncomment-2720612",
      author: "dldnjswns31",
      bodyHTML:
        '<p dir="auto">객체를 변수에 저장하게되면 실제 객체를 저장하는것이 아닌 객체를 저장한 메모리의 주소(참조)값을 변수에 저장하게돼요.</p>\n<p dir="auto"><code class="notranslate">입력받은 배열과 동일한 인스턴스(주소값 동일)을(를) 리턴해야 합니다</code></p>\n<p dir="auto">이 조건이 만족 안된 이유는 slice() 메소드는 문자열 슬라이싱을 한 뒤 새로운 배열 객체에 저장하여 반환하게됩니다. 그렇기에 반환값(객체)이 arr객체와 다른 객체이기 때문에 다른 주소값을 가르키게되고 주솟값이 동일해야한다는 조건을 만족시키지 못하게됩니다.</p>\n<p dir="auto"><code class="notranslate">🟡AssertionError: expected [ 2, 3 ] to equal [ 1 ]</code><br>\nsplice() 메소드의 경우 기존 배열에서 요소를 삭제하고 삭제한 요소들을 반환하기 때문에 반환값(객체)과 arr객체의 주소값도 다를뿐더러 기존 객체에서 요소 제거가 일어났기 때문에 arr 객체엔 요소가 1만 남아있게 된 겁니다.</p>\n<p dir="auto">만약 splice() 메소드를 사용하실 때 첫 번째 요소를 제거해야하니 0번째 인덱스에서 1개의 요소를 제거하고 기존 객체인 arr을 반환하게 된다면 모든 조건을 통과하실거에요.</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function removeFromFront(arr) {\n    arr.splice(0,1);    // 0번째 index에서 1개의 item 제거\n    return arr;    // 기존 배열에 첫번째 item이 삭제된 배열 반환\n}"><pre><span class="pl-k">function</span> <span class="pl-en">removeFromFront</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">splice</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">,</span><span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">;</span>    <span class="pl-c">// 0번째 index에서 1개의 item 제거</span>\n    <span class="pl-k">return</span> <span class="pl-s1">arr</span><span class="pl-kos">;</span>    <span class="pl-c">// 기존 배열에 첫번째 item이 삭제된 배열 반환</span>\n<span class="pl-kos">}</span></pre></div>\n<p dir="auto"><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#%EC%84%A4%EB%AA%85" rel="nofollow">mdn - slice 메소드</a><br>\n<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#%EC%84%A4%EB%AA%85" rel="nofollow">mdn - splice 메소드</a></p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/71388830?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제: macOS</p>\n<p dir="auto">Node.js 버전(node -v): v16.15.0</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요? : 코플릿 배열 18번 removeFromFront 문제</p>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요? :<br>\n테스트 실행을 해서 "입력받은 배열과 동일한 인스턴스(주소값 동일)을(를) 리턴해야 합니다"라는 조건을 충족시키지 못했습니다.<br>\n여기서 말하는 인스턴스라는 개념을 이해하지 못했습니다.</p>\n<p dir="auto">이 문제를 splice와 slice로 풀었는데 아래와 같이 다른 오류 코드를 받았습니다.<br>\n모두 문제가 원하는 출력값인 [2,3]이 나오는데,<br>\nslice로 풀었을때는 [1,2,3]이 나와야 하고<br>\nsplice로 풀었을때는 [1]이 나와야 하는지 알고 싶습니다.</p>\n<p dir="auto">에러 코드를 붙여넣기 해 주세요. :</p>\n<p dir="auto"><g-emoji class="g-emoji" alias="green_circle" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f7e2.png">🟢</g-emoji>AssertionError: expected [ 2, 3 ] to equal [ 1, 2, 3 ]<br>\n<g-emoji class="g-emoji" alias="yellow_circle" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f7e1.png">🟡</g-emoji>AssertionError: expected [ 2, 3 ] to equal [ 1 ]</p>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="//\n🟢function removeFromFront(arr) {\n  return arr.slice(1,arr.length);\n} \n\n🟡function removeFromFront(arr) {\n  return arr.splice(1,arr.length);\n}"><pre><span class="pl-c">//</span>\n<span class="pl-s1">🟢function</span><span class="pl-kos"></span> <span class="pl-en">removeFromFront</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">)</span><span class="pl-kos"></span> <span class="pl-kos">{</span>\n  <span class="pl-k">return</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-c1">1</span><span class="pl-kos">,</span><span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span> \n\n<span class="pl-s1">🟡function</span><span class="pl-kos"></span> <span class="pl-en">removeFromFront</span><span class="pl-kos">(</span><span class="pl-s1">arr</span><span class="pl-kos">)</span><span class="pl-kos"></span> <span class="pl-kos">{</span>\n  <span class="pl-k">return</span> <span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-en">splice</span><span class="pl-kos">(</span><span class="pl-c1">1</span><span class="pl-kos">,</span><span class="pl-s1">arr</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span></pre></div>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요.</p>\n<p dir="auto"><a href="https://victor8481.tistory.com/280" rel="nofollow">https://victor8481.tistory.com/280</a> 인스턴스라는 개념을 알기 위해 검색했습니다.</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/103437860?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APgCj",
    createdAt: "2022-05-10T07:13:15Z",
    title: '결과값에서 쌍따옴표 "" 를 지울 수 있을까요?',
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/38",
    author: "Mark1237200",
    answer: {
      id: "DC_kwDOHOApLM4AKYLo",
      createdAt: "2022-05-10T08:26:22Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/38#discussioncomment-2720488",
      author: "Citysquirrel",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Mark1237200/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Mark1237200">@Mark1237200</a> 님!<br>\n코드스테이츠 교육 엔지니어 곽명우입니다 <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<hr>\n<p dir="auto">배열의 형태를 직접 만들고 계신 것 같네요. 여러 시도를 하시는 것에 대해 찬사를 보냅니다<g-emoji class="g-emoji" alias="wind_chime" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f390.png">🎐</g-emoji><br>\n<code class="notranslate">문제를 저만의 방식으로 풀다가 결과값에서 쌍따옴표만 빼고 싶은데 방법을 모르겠습니다.</code><br>\n라는 질문에 먼저 답을 해드린다면, "[blahblah]"라는 문자열 형태를 곧바로 [blahblah] 배열 형태로 나타낼 수는 없습니다.</p>\n<p dir="auto">배열은 대괄호를 씌운 형태로 나타내어 집니다. 하지만 그것은 배열이 \'표현되는 형태\'일 뿐이지 대괄호를 씌운 문자열로 만들어 억지로 배열을 만들어낼 수는 없습니다.</p>\n<blockquote>\n<p dir="auto">왜 안돼요?</p>\n</blockquote>\n<p dir="auto">라고 물으신다면 Javascript라는 언어가 그렇게 만들어져 있기 때문입니다.</p>\n<p dir="auto">하지만, 개발자들은 질문자 분과 비슷한 생각을 항상 하곤 합니다. <em>이런 식으로 우회해서 뿅 하고 만들 수는 없을까?</em><br>\n비슷하지만 다른 방법으로 접근할 수는 있어 보입니다. 아래 키워드와 레퍼런스를 참고해서 문자열을 배열로 만드는 방법을 한 번 고민해보세요.</p>\n<p dir="auto">이런 방법들을 생각하고 연구하는 것은 꽤 머리 아프고 어려운 일입니다. 너무나 잘 하고 계십니다. 오래 걸리고 힘드시더라도 여러 번 시행착오를 겪어서 자기 것으로 만들어보세요!</p>\n<ul dir="auto">\n<li>검색어: js 문자열을 배열로(js string to array)</li>\n<li><a href="https://www.delftstack.com/ko/howto/javascript/convert-string-to-array-javascript/" rel="nofollow">괜찮아 보이는 레퍼런스</a></li>\n</ul>\n<details>\n<summary>레퍼런스를 토대로 한 예제(클릭)</summary>\n<div dir="auto">       \n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function strToArr(str) {\n    let input = &quot;&quot;;\n    for (let i = 0; i &lt; str.length; i++) {\n        input = input + \'&quot;\' + str.substring(i, i+1) + \'&quot;\' + \',\';\n    }\n    return JSON.parse(&quot;[&quot; + input.slice(0,-1) + &quot;]&quot;)\n}"><pre><span class="pl-k">function</span> <span class="pl-en">strToArr</span><span class="pl-kos">(</span><span class="pl-s1">str</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-k">let</span> <span class="pl-s1">input</span> <span class="pl-c1">=</span> <span class="pl-s">""</span><span class="pl-kos">;</span>\n    <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">str</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n        <span class="pl-s1">input</span> <span class="pl-c1">=</span> <span class="pl-s1">input</span> <span class="pl-c1">+</span> <span class="pl-s">\'"\'</span> <span class="pl-c1">+</span> <span class="pl-s1">str</span><span class="pl-kos">.</span><span class="pl-en">substring</span><span class="pl-kos">(</span><span class="pl-s1">i</span><span class="pl-kos">,</span> <span class="pl-s1">i</span><span class="pl-c1">+</span><span class="pl-c1">1</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-s">\'"\'</span> <span class="pl-c1">+</span> <span class="pl-s">\',\'</span><span class="pl-kos">;</span>\n    <span class="pl-kos">}</span>\n    <span class="pl-k">return</span> <span class="pl-c1">JSON</span><span class="pl-kos">.</span><span class="pl-en">parse</span><span class="pl-kos">(</span><span class="pl-s">"["</span> <span class="pl-c1">+</span> <span class="pl-s1">input</span><span class="pl-kos">.</span><span class="pl-en">slice</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">,</span><span class="pl-c1">-</span><span class="pl-c1">1</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-s">"]"</span><span class="pl-kos">)</span>\n<span class="pl-kos">}</span></pre></div>\n<p dir="auto">이런 코드가 항상 옳은 것도 아니고, 항상 틀린 것 만도 아닙니다(물론, 다소 효율적이지 못한 코드일 수 있습니다 ^^..). 여러가지 시도해보면서 이런 방법도 있구나를 익혀보세요</p>\n</div>\n</details>\n<hr>\n<p dir="auto">답변이 도움이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 Mark as answer를 눌러주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n추가 질문이 있으시거나 해결이 힘드시면 꼭! 답글을 달아주세요.</p>\n<p dir="auto">감사합니다.<br>\n코드스테이츠 교육 엔지니어<br>\n곽명우 드림</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제: Ubuntu</p>\n<p dir="auto">Node.js 버전(node -v): -</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\n배열 챕터 코플릿 7번</p>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요?<br>\n문제를 저만의 방식으로 풀다가 결과값에서 쌍따옴표만 빼고 싶은데 방법을 모르겠습니다.</p>\n<p dir="auto">에러 코드를 붙여넣기 해 주세요.<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/99641988/167571679-08c474e1-6bba-4aa3-9cd1-af94d4049aff.png"><img src="https://user-images.githubusercontent.com/99641988/167571679-08c474e1-6bba-4aa3-9cd1-af94d4049aff.png" alt="image" style="max-width: 100%;"></a></p>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function getAllLetters(str) {\n  // TODO: 여기에 코드를 작성합니다.\n  let output = &quot;&quot;;\n  \n  for(let i=0; i &lt; str.length; i++) {\n    output = output + &quot;\'&quot; + str.substring(i, i+1) + &quot;\'&quot; + &quot;,&quot;\n  }\n  return `[${output.substring(0,output.length - 1)}]`\n}"><pre><span class="pl-k">function</span> <span class="pl-en">getAllLetters</span><span class="pl-kos">(</span><span class="pl-s1">str</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n  <span class="pl-c">// TODO: 여기에 코드를 작성합니다.</span>\n  <span class="pl-k">let</span> <span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-s">""</span><span class="pl-kos">;</span>\n  \n  <span class="pl-k">for</span><span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span><span class="pl-c1">=</span><span class="pl-c1">0</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;</span> <span class="pl-s1">str</span><span class="pl-kos">.</span><span class="pl-c1">length</span><span class="pl-kos">;</span> <span class="pl-s1">i</span><span class="pl-c1">++</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-s1">output</span> <span class="pl-c1">+</span> <span class="pl-s">"\'"</span> <span class="pl-c1">+</span> <span class="pl-s1">str</span><span class="pl-kos">.</span><span class="pl-en">substring</span><span class="pl-kos">(</span><span class="pl-s1">i</span><span class="pl-kos">,</span> <span class="pl-s1">i</span><span class="pl-c1">+</span><span class="pl-c1">1</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-s">"\'"</span> <span class="pl-c1">+</span> <span class="pl-s">","</span>\n  <span class="pl-kos">}</span>\n  <span class="pl-k">return</span> <span class="pl-s">`[<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-s1">output</span><span class="pl-kos">.</span><span class="pl-en">substring</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">,</span><span class="pl-s1">output</span><span class="pl-kos">.</span><span class="pl-c1">length</span> <span class="pl-c1">-</span> <span class="pl-c1">1</span><span class="pl-kos">)</span><span class="pl-kos">}</span></span>]`</span>\n<span class="pl-kos">}</span></pre></div>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요.<br>\n<a href="https://developer-talk.tistory.com/178" rel="nofollow">https://developer-talk.tistory.com/178</a></p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/99641988?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfpf",
    createdAt: "2022-05-09T14:34:03Z",
    title: "ssh key 등록을 하는 이유는 무엇인가요?",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/37",
    author: "Gwanghyun-Jeon",
    answer: {
      id: "DC_kwDOHOApLM4AKW9l",
      createdAt: "2022-05-09T15:02:49Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/37#discussioncomment-2715493",
      author: "kimploo",
      bodyHTML:
        '<p dir="auto">안녕하세요! <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Gwanghyun-Jeon/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Gwanghyun-Jeon">@Gwanghyun-Jeon</a> 님, 교육 엔지니어 김홍식입니다!</p>\n<p dir="auto">질문에 답변드리기 앞서서, <a href="https://github.com/codestates-seb/agora-states-fe/discussions/2" data-hovercard-type="discussion" data-hovercard-url="/codestates-seb/agora-states-fe/discussions/2/hovercard">질문 템플릿</a>을 이용해주시길 부탁드립니다! 좀 더 좋은 답변에 도움이 됩니다.</p>\n<blockquote>\n<p dir="auto">https 방식과 ssh 방식은 보안상의 차이라고 이해하면 될까요?</p>\n</blockquote>\n<p dir="auto">단순히 설명드리기는 굉장히 긴 이야기가 될 것 같습니다. 향후 Section 2, Section 3 에서 네트워크에 대한 내용을 학습을 하고 나서도 이해하기 쉽게 설명드리긴 어려울 것 같아요. 하지만 차이가 궁금하시다면, 지금 이해하긴 어려울 수 있지만 잘 정리가 되어있는 <a href="https://www.howtogeek.com/devops/should-you-use-https-or-ssh-for-git" rel="nofollow">레퍼런스</a>를 공유드립니다.</p>\n<p dir="auto">해당 레퍼런스를 짧게 요약드리면 ssh 사용은 아래 장점이 있습니다.<br>\n향후 "왜 그런지"에 대해서는 추가 학습을 해주시면 좋겠습니다 :)</p>\n<ul dir="auto">\n<li>https + ID/PW 입력보단 추가 암호화를 거치는 ssh가 안전하다. (그래도 https는 여전이 충분한 보안을 갖추고 있다.)</li>\n<li>여러 기기에서 사용하기에 ssh key를 다루기에 용이하다.</li>\n</ul>\n<blockquote>\n<p dir="auto">https or ssh 클론으로 코드 내려받기, 마우스로 직접 다운로드 후 GUI 방식으로 VScode 에서 여는 방식 같은 결과지만 방법만 다른 것이 맞나요?</p>\n</blockquote>\n<ul dir="auto">\n<li><code class="notranslate">git clone</code>으로 가져온 디렉터리는 코드와 Git repository가 함께 포함되어 있어, <code class="notranslate">git</code> 명령어를 사용하실 수 있습니다. (https, ssh)</li>\n<li>직접 다운로드 받은 폴더는 Git repository가 아니라서, <code class="notranslate">git</code> 명령어를 사용하실 수 없습니다.</li>\n</ul>\n<p dir="auto">답변에 도움이 되었다면, <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji> 를 부탁드립니다!</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    },
    bodyHTML:
      '<p dir="auto">&lt;질문 1&gt;<br>\n오늘 강의 시간에 교육 엔지니어님이 하시는걸 보니 코드 클론을 받을 때 https로도 잘 받아지더라고요.</p>\n<p dir="auto">유어클래스에서는 \'보안이 강화된 shell 접속\'이라는 말이 있었는데요.</p>\n<p dir="auto">https 방식과 ssh 방식은 보안상의 차이라고 이해하면 될까요?</p>\n<p dir="auto">&lt;질문 2&gt;<br>\nhttps or ssh 클론으로 코드 내려받기, 마우스로 직접 다운로드 후 GUI 방식으로 VScode 에서 여는 방식</p>\n<p dir="auto">같은 결과지만 방법만 다른 것이 맞나요?</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/73211553?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfnk",
    createdAt: "2022-05-09T13:48:20Z",
    title: "npm install 할 때 설치 대상은 어떻게 결정되나요?",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/36",
    author: "Gwanghyun-Jeon",
    answer: {
      id: "DC_kwDOHOApLM4AKW7k",
      createdAt: "2022-05-09T14:47:22Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/36#discussioncomment-2715364",
      author: "Citysquirrel",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Gwanghyun-Jeon/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Gwanghyun-Jeon">@Gwanghyun-Jeon</a>  님!<br>\n코드스테이츠 교육 엔지니어 곽명우입니다 <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<hr>\n<p dir="auto"><code class="notranslate">package.json</code>에 적힌 <code class="notranslate">dependencies</code>는 글자 그대로 <strong>의존성</strong>을 의미합니다.</p>\n<blockquote>\n<p dir="auto"><em>이 프로젝트를 구동하기 위해서는 이러이러한 package들이 필요해</em></p>\n</blockquote>\n<p dir="auto">프로젝트에서 필요한 모듈을 가져와서 사용했고, 이 모듈들이 없으면 프로젝트는 <code class="notranslate">module not found</code> 에러를 뱉어냅니다.</p>\n<p dir="auto">여기서, 나의 프로젝트 뿐만 아니라 해당 모듈(패키지)들도 하나의 프로젝트들로 볼 수 있고, 이 녀석들도 어떠한 모듈들에 의존합니다.<br>\n<code class="notranslate">node_modules</code> 폴더에 package.json에는 기록되지 않은 수많은 모듈들이 설치되는 것은 바로 이 때문입니다.</p>\n<p dir="auto">더 자세한 내용은 다음 키워드를 검색해서 알아보세요 :)</p>\n<ul dir="auto">\n<li>package.json dependency tree (의존성 트리)</li>\n<li><code class="notranslate">npm list</code> 명령어</li>\n<li>package-lock.json 의 역할</li>\n</ul>\n<hr>\n<p dir="auto">답변이 도움이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 Mark as answer를 눌러주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n추가 질문이 있으시면 꼭! 답글을 달아주세요.</p>\n<p dir="auto">감사합니다.<br>\n코드스테이츠 교육 엔지니어<br>\n곽명우 드림</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4",
    },
    bodyHTML:
      '<p dir="auto">강의에서 들을 때는 package.json 에 필요한 모듈 목록이 써 있고,<br>\nnpm install을 하면 필요한 모듈들이 다운로드 되는 걸로 이해하고 있었습니다.</p>\n<p dir="auto">오늘 과제 항목 \'fe-sprint-cli-practice-main\' 에서 package.json 내용은 아래와 같습니다.<br>\n<code class="notranslate"> "name": "fe-sprint-cli-practice", "version": "1.0.0", "description": "", "main": "index.js", "scripts": { "start": "", "test": "mocha getListMultiplesOfTwo.test.js --timeout 50000 --reporter mocha-multi-reporters --reporter-options configFile=multi-reporters.json", "report": "mocha getListMultiplesOfTwo.test.js --sort --reporter @mochajs/json-file-reporter", "submit": "codestates" }, "keywords": [], "author": "", "license": "ISC", "devDependencies": { "codestates-assignment-manager": "^1.7.0", "mocha-multi-reporters": "^1.5.1", "@mochajs/json-file-reporter": "^1.3.0", "chai": "^4.3.4", "mocha": "^8.3.2"</code><br>\n필요한 모듈이 써있는 "devDependencies" 항목에는 5개의 항목이 있는데,<br>\nnode_modules 폴더에 설치된 항목은 604개가 다운로드 되었습니다.</p>\n<p dir="auto">질문) npm install 명령어 사용시 package.json 파일에 명시 되어있는 항목만 다운로드 되는게 아닌가요?</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/73211553?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfjB",
    createdAt: "2022-05-09T11:48:24Z",
    title:
      "specrunner.html 파일에서는 베어테스트 통과하는데 터미널에는 오류가 발생합니다",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/35",
    author: "JoeunNAL",
    answer: {
      id: "DC_kwDOHOApLM4AKWnY",
      createdAt: "2022-05-09T12:06:21Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/35#discussioncomment-2714072",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/JoeunNAL/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/JoeunNAL">@JoeunNAL</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">테스트가 통과되지 못한 것은 html 코드가 바뀌어서 테스트 통과가 안된 걸로 보입니다 !<br>\nhtml 코드를 기존의 배포된 html 코드로 바꾸신다면 바로 통과가 될 것 같습니다 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제:macOS</p>\n<p dir="auto">Node.js 버전(node -v): v16.15.0</p>\n<p dir="auto">제가 만든 계산기에 npm run test를 적용할때 오류가 발생합니다.<br>\nSpecRunner.html파일을 열었을때는 베어테스트 통과한 걸로 나오는데 터미널에는 오류가 뜹니다.<br>\n터미널창에는 아예<br>\n<code class="notranslate"> bare minimum test 유어클레스 bare minimum 레슨의 예를 통과합니다.</code>라는 부분이 안나오는 것 같아요</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90553688/167401581-7c9c7fc2-9a38-4a0a-9f7b-ce33ef73fa79.png"><img width="1440" alt="image" src="https://user-images.githubusercontent.com/90553688/167401581-7c9c7fc2-9a38-4a0a-9f7b-ce33ef73fa79.png" style="max-width: 100%;"></a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90553688/167401620-a93af7bc-0230-49d0-b5f4-4365c3fbbdc7.png"><img width="1440" alt="image" src="https://user-images.githubusercontent.com/90553688/167401620-a93af7bc-0230-49d0-b5f4-4365c3fbbdc7.png" style="max-width: 100%;"></a></p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/90553688/167402333-e5347db2-915f-4776-8fd2-3503ed08c2ea.png"><img width="784" alt="image" src="https://user-images.githubusercontent.com/90553688/167402333-e5347db2-915f-4776-8fd2-3503ed08c2ea.png" style="max-width: 100%;"></a></p>\n<p dir="auto">제 계산기 코드에 맞게 js 파일의 아래 클래스명만 변경했고 라이브서버로 작동도 잘 됩니다.</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="const calculator = document.querySelector(\'.container\'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\n// console.log(&quot;calculator&quot;,calculator);\nconst buttons = calculator.querySelector(\'.calculator__buttons\'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\n// console.log(buttons);"><pre><span class="pl-k">const</span> <span class="pl-s1">calculator</span> <span class="pl-c1">=</span> <span class="pl-smi">document</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.container\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.</span>\n<span class="pl-c">// console.log("calculator",calculator);</span>\n<span class="pl-k">const</span> <span class="pl-s1">buttons</span> <span class="pl-c1">=</span> <span class="pl-s1">calculator</span><span class="pl-kos">.</span><span class="pl-en">querySelector</span><span class="pl-kos">(</span><span class="pl-s">\'.calculator__buttons\'</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.</span>\n<span class="pl-c">// console.log(buttons);</span></pre></div>\n<p dir="auto">이 링크가 깃허브로 제출한 코드스테이츠 계산기에 npm run test 적용한 화면인데<br>\n제 계산기의 파일에 뜨는 순서도 다릅니다.(첫번째 사진이 스크롤 가장 위로 올렸을때입니다)<br>\n<a href="https://media.discordapp.net/attachments/973037712770736168/973179868563013642/unknown.png?width=1542&amp;height=937" rel="nofollow">https://media.discordapp.net/attachments/973037712770736168/973179868563013642/unknown.png?width=1542&amp;height=937</a></p>\n<p dir="auto">SpecRunner.html파일이 손상됬나해서 정상 파일로 변경해보아도 같은 현상이 발생합니다.<br>\n터미널 텍스트 순서가 다를땐 어떤게 수정해야할까요??</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/90553688?s=64&u=3c4e4dc2053d4977ac12b9cfc2667582f986d3d8&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfZU",
    createdAt: "2022-05-09T07:21:42Z",
    title: "ubuntu에서 github로그인 진행시 npx 명령어 문법 오류가 나옵니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/32",
    author: "git-daun",
    answer: {
      id: "DC_kwDOHOApLM4AKWMX",
      createdAt: "2022-05-09T07:25:14Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/32#discussioncomment-2712343",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/git-daun/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/git-daun">@git-daun</a>  님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은 과제제출 매니저 설치가 안돼서 질문 주신 것 같은데요 !</p>\n<p dir="auto">매니저 설치를 하시는 폴더가 잘못된 것 같아 안되는 것 같습니다 !<br>\n계산기 폴더 안에서 다시 한 번 설치해보시겠어요 ?</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문 부탁드립니다 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">상황</p>\n<ol dir="auto">\n<li>npm 설치 완료<br>\n(npm -v 확인 시 8.9.0 버전임을 확인)</li>\n<li><code class="notranslate">npx codestates-assignment-manager login</code> 입력</li>\n<li>SyntaxError<br>\n<code class="notranslate">SyntaxError: Unexpected end of JSON input at JSON.parse (&lt;anonymous&gt;) at Object.&lt;anonymous&gt; (/home/daun/.npm/_npx/57ca20eb5b69f663/node_modules/codestates-assignment-manager/lib/index.js:10:26) at Module._compile (node:internal/modules/cjs/loader:1105:14) at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10) at Module.load (node:internal/modules/cjs/loader:981:32) at Function.Module._load (node:internal/modules/cjs/loader:822:12) at Module.require (node:internal/modules/cjs/loader:1005:19) at require (node:internal/modules/cjs/helpers:102:18) at Object.&lt;anonymous&gt; (/home/daun/.npm/_npx/57ca20eb5b69f663/node_modules/codestates-assignment-manager/bin/assignment-manager:3:13) at Module._compile (node:internal/modules/cjs/loader:1105:14)</code><br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/94218285/167359803-74f304bf-a716-4080-89b8-612b63127cbb.png"><img src="https://user-images.githubusercontent.com/94218285/167359803-74f304bf-a716-4080-89b8-612b63127cbb.png" alt="image" style="max-width: 100%;"></a></li>\n</ol>\n<p dir="auto">슨생님들의 많은 도움 부탁드립니다!<g-emoji class="g-emoji" alias="raising_hand_woman" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64b-2640.png">🙋‍♀️</g-emoji></p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/94218285?s=64&u=96e12a65d2e9387f8a949da5103ec2751b6c1f1f&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfYj",
    createdAt: "2022-05-09T06:54:20Z",
    title:
      "과제제출 매니저 설치 node index.js 입력시 Error: EPERM: operation not permitted, uv_cwd",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/31",
    author: "hana1203",
    answer: {
      id: "DC_kwDOHOApLM4AKWMA",
      createdAt: "2022-05-09T07:20:43Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/31#discussioncomment-2712320",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/hana1203/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/hana1203">@hana1203</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">접근권한이 금지 된 것 같아 보입니다 !</p>\n<p dir="auto"><a href="https://saurus2.tistory.com/entry/ls-Operation-not-permitted-mac-OS-%EB%A7%A5%EB%B6%81-%ED%84%B0%EB%AF%B8%EB%84%90-%EC%97%90%EB%9F%AC" rel="nofollow">맥북 터미널 에러</a></p>\n<p dir="auto">위 방법과 똑같이 해보시고 그럼에도 되지 않는다면 한 번 더 과제 제출 매니저를 설치해주세요 !</p>\n<p dir="auto">npx codestates-assignment-manager login</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제:<br>\nmacOS<br>\nNode.js 버전(node -v):<br>\nv16.15.0</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\nUnit8 Linux/Git 기초<br>\n과제제출 매니저 설치</p>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요?<br>\nbrew 설치, nvm 설치, node.js 설치, npm 설치 다 잘되었고 javascript 파일도 node.js 로 문제없이 잘 실행되었는데, 과제제출 매니저 설치하는 부분에서 터미널에서 fe-sprint-cli-practice 파일위치로 이동해서 node index.js 를 실행하려고 하지만 계속해서 오류가 납니다.<br>\n페어분이랑도 같이 오류코드를 검색해봤더니 캐시를 지우라는 답변이 가장 많길래 캐시를 지우고 npm도 최신버전으로 업데이트하고<br>\n아래 코드도 쳐봤는데요.....<br>\nnpm cache clean --force<br>\nnpm install -g npm@latest --force</p>\n<p dir="auto">여전히 에러가 뜹니다... 관리자 권한으로도 해봤지만 여전히 같은 오류로 과제제출 매니저를 설치하지 못하고있어요..... 도와주세요..</p>\n<p dir="auto">에러 코드를 붙여넣기 해 주세요.<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/92300124/167353929-baf2dbbf-0ba1-4907-aadf-1fad2d64e66f.png"><img src="https://user-images.githubusercontent.com/92300124/167353929-baf2dbbf-0ba1-4907-aadf-1fad2d64e66f.png" alt="image" style="max-width: 100%;"></a></p>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)<br>\nnode:internal/bootstrap/switches/does_own_process_state:126<br>\ncachedCwd = rawMethods.cwd();<br>\n^</p>\n<p dir="auto">Error: EPERM: operation not permitted, uv_cwd<br>\nat process.wrappedCwd [as cwd] (node:internal/bootstrap/switches/does_own_process_state:126:28)<br>\nat node:path:1082:24<br>\nat Object.resolve (node:path:1096:39)<br>\nat resolveMainPath (node:internal/modules/run_main:19:40)<br>\nat Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:71:24)<br>\nat node:internal/main/run_main_module:17:47 {<br>\nerrno: -1,<br>\ncode: \'EPERM\',<br>\nsyscall: \'uv_cwd\'</p>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요.<br>\n<a href="https://www.codegrepper.com/code-examples/whatever/Error%3A+EPERM%3A+operation+not+permitted%2C+uv_cwd+Uncaught+Error+Error%3A+EPERM%3A+operation+not+permitted%2C+uv_cwd" rel="nofollow">https://www.codegrepper.com/code-examples/whatever/Error%3A+EPERM%3A+operation+not+permitted%2C+uv_cwd+Uncaught+Error+Error%3A+EPERM%3A+operation+not+permitted%2C+uv_cwd</a><br>\n<a href="https://binshuuuu.tistory.com/301" rel="nofollow">https://binshuuuu.tistory.com/301</a></p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/92300124?s=64&u=82d8e12bfca4deb05c7f86db7d3c15e06ca34d05&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfYM",
    createdAt: "2022-05-09T06:45:24Z",
    title:
      "specRunner에서는 통과가 되는데, node에서 bare에서 조차 통과가 되지 않습니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/30",
    author: "sweesweett",
    answer: {
      id: "DC_kwDOHOApLM4AKWME",
      createdAt: "2022-05-09T07:21:16Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/30#discussioncomment-2712324",
      author: "sweesweett",
      bodyHTML:
        '<p dir="auto">html과 css를 기존에 주어지는 목업파일로 실행 시 specrunner와 같은 결과로 나온다는걸 알게되었습니다. 혹 오류가 계속 나시는 분들은 제공되는 목업계산기에 js파일만 변경하셔서 제출하시면 오류가 없을 것 같습니다^^</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/98820643?s=64&v=4",
    },
    bodyHTML:
      "<p dir=\"auto\">운영 체제: Ubuntu</p>\n<p dir=\"auto\">Node.js 버전(node -v): 예)v15.15.0</p>\n<p dir=\"auto\">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\nspecRunner에서는 통과가 되는데, node에서 bare에서 조차 통과가 되지 않습니다.<br>\ninnerHtml 을 textcontent로 변경하고 advanced test쪽을 주석처리 했음에도 통과가 되지않습니다.</p>\n<p dir=\"auto\">어떠한 부분에서 이해가 안 되었나요?</p>\n<div class=\"snippet-clipboard-content position-relative overflow-auto\" data-snippet-clipboard-copy-content=\"const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nconst buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\n\nconst firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nconst operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nconst secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nconst calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\n\nfunction calculate(n1, operator, n2) {\n\n  let result = 0;\n  if (operator === '+') {\n    result = Number(n1) + Number(n2);\n  }\n  if (operator === '-') {\n    result = Number(n1) - Number(n2);\n  }\n  if (operator === '*') {\n    result = Number(n1) * Number(n2);\n  }\n  if (operator === '/') {\n    result = Number(n1) / Number(n2);\n  }\n  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.\n  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.\n  return String(result);\n}\n\nbuttons.addEventListener('click', function (event) {\n  // 버튼을 눌렀을 때 작동하는 함수입니다.\n\n  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.\n  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.\n  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.\n  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.\n\n  if (target.matches('button')) {\n    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.\n    // 클릭된 HTML 엘리먼트가 button이면\n    if (action === 'number') {\n      // 그리고 버튼의 클레스가 number이면\n      // 아래 코드가 작동됩니다.\n        if (firstOperend.textContent === '0') {\n            firstOperend.textContent = buttonContent;\n        } else{\n            secondOperend.textContent = buttonContent;\n        }\n    }\n\n    if (action === 'operator') {\n      operator.textContent=buttonContent\n    }\n\n    if (action === 'decimal') {\n      // console.log('소수점 버튼');\n      \n    }\n\n    if (action === 'clear') {\n      firstOperend.textContent = '0';\n      operator.textContent = '+';\n      secondOperend.textContent = '0';\n      calculatedResult.textContent = '0';\n    }\n\n    if (action === 'calculate') {\n      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent)\n    }\n  }\n});\n\n\n\n\n\nconst display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nlet firstNum, operatorForAdvanced, previousKey, previousNum;\nlet checkminus;\nlet count = 0\n//operatorForAdvanced =&gt; 연산자 나오기 전의 값을 저장\n//previousKey=&gt; 전에 누른 버튼이 뭔지 알 수 있음.\nbuttons.addEventListener('click', function (event) {\n  // 버튼을 눌렀을 때 작동하는 함수입니다.\n\n  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.\n  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.\n  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.\n \n  // ! 위 코드는 수정하지 마세요.\n\n  // ! 여기서부터 Advanced Challenge &amp; Nightmare 과제룰 풀어주세요.\n  // display.textContent = calculate(firstNum, operator, display.textContent);\n  if (target.matches('button')) {\n    if (action === 'number') {\n    \n      if(previousKey==='*'||previousKey==='/'||previousKey==='+'||previousKey==='-'||display.textContent==='0'){\n        display.textContent=buttonContent\n      }\n      else{\n        display.textContent+=buttonContent\n      }\n      previousKey=buttonContent\n    }\n    if (action === 'operator') {\n      // if(previousKey!==)\n      firstNum=display.textContent\n      operatorForAdvanced=buttonContent\n      previousKey=buttonContent\n\n    }\n    if (action === 'decimal') {\n      if(previousKey==='*'||previousKey==='/'||previousKey==='+'||previousKey==='-'||display.textContent==='0'){\n        display.textContent='0.'\n        previousKey='.'\n      }\n      else if(previousKey==='.'){\n        return false\n       }\n      else{\n        display.textContent=display.textContent+'.'\n        previousKey='.'\n      }\n    }\n    if (action === 'clear') {\n      count=0\n      firstNum=undefined\n      operatorForAdvanced=undefined\n      previousNum=undefined\n      previousKey=undefined\n      display.textContent='0'\n    }\n    if (action === 'calculate') {\n      if(previousKey==='*'||previousKey==='/'||previousKey==='+'||previousKey==='-'){\n        display.textContent=firstNum\n      }\n      if(operatorForAdvanced===undefined){\n        return false\n      }\n      else{\n        if(count===0){\n          previousNum=display.textContent\n        }\n      display.textContent=calculate(firstNum,operatorForAdvanced,previousNum)\n      firstNum=display.textContent\n      count=count+1\n      // previousNum =display.textContent\n      }\n    }\n  }\n\n});\"><pre class=\"notranslate\"><code class=\"notranslate\">const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nconst buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\n\nconst firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nconst operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nconst secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nconst calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\n\nfunction calculate(n1, operator, n2) {\n\n  let result = 0;\n  if (operator === '+') {\n    result = Number(n1) + Number(n2);\n  }\n  if (operator === '-') {\n    result = Number(n1) - Number(n2);\n  }\n  if (operator === '*') {\n    result = Number(n1) * Number(n2);\n  }\n  if (operator === '/') {\n    result = Number(n1) / Number(n2);\n  }\n  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.\n  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.\n  return String(result);\n}\n\nbuttons.addEventListener('click', function (event) {\n  // 버튼을 눌렀을 때 작동하는 함수입니다.\n\n  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.\n  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.\n  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.\n  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.\n\n  if (target.matches('button')) {\n    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.\n    // 클릭된 HTML 엘리먼트가 button이면\n    if (action === 'number') {\n      // 그리고 버튼의 클레스가 number이면\n      // 아래 코드가 작동됩니다.\n        if (firstOperend.textContent === '0') {\n            firstOperend.textContent = buttonContent;\n        } else{\n            secondOperend.textContent = buttonContent;\n        }\n    }\n\n    if (action === 'operator') {\n      operator.textContent=buttonContent\n    }\n\n    if (action === 'decimal') {\n      // console.log('소수점 버튼');\n      \n    }\n\n    if (action === 'clear') {\n      firstOperend.textContent = '0';\n      operator.textContent = '+';\n      secondOperend.textContent = '0';\n      calculatedResult.textContent = '0';\n    }\n\n    if (action === 'calculate') {\n      calculatedResult.textContent = calculate(firstOperend.textContent, operator.textContent, secondOperend.textContent)\n    }\n  }\n});\n\n\n\n\n\nconst display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.\nlet firstNum, operatorForAdvanced, previousKey, previousNum;\nlet checkminus;\nlet count = 0\n//operatorForAdvanced =&gt; 연산자 나오기 전의 값을 저장\n//previousKey=&gt; 전에 누른 버튼이 뭔지 알 수 있음.\nbuttons.addEventListener('click', function (event) {\n  // 버튼을 눌렀을 때 작동하는 함수입니다.\n\n  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.\n  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.\n  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.\n \n  // ! 위 코드는 수정하지 마세요.\n\n  // ! 여기서부터 Advanced Challenge &amp; Nightmare 과제룰 풀어주세요.\n  // display.textContent = calculate(firstNum, operator, display.textContent);\n  if (target.matches('button')) {\n    if (action === 'number') {\n    \n      if(previousKey==='*'||previousKey==='/'||previousKey==='+'||previousKey==='-'||display.textContent==='0'){\n        display.textContent=buttonContent\n      }\n      else{\n        display.textContent+=buttonContent\n      }\n      previousKey=buttonContent\n    }\n    if (action === 'operator') {\n      // if(previousKey!==)\n      firstNum=display.textContent\n      operatorForAdvanced=buttonContent\n      previousKey=buttonContent\n\n    }\n    if (action === 'decimal') {\n      if(previousKey==='*'||previousKey==='/'||previousKey==='+'||previousKey==='-'||display.textContent==='0'){\n        display.textContent='0.'\n        previousKey='.'\n      }\n      else if(previousKey==='.'){\n        return false\n       }\n      else{\n        display.textContent=display.textContent+'.'\n        previousKey='.'\n      }\n    }\n    if (action === 'clear') {\n      count=0\n      firstNum=undefined\n      operatorForAdvanced=undefined\n      previousNum=undefined\n      previousKey=undefined\n      display.textContent='0'\n    }\n    if (action === 'calculate') {\n      if(previousKey==='*'||previousKey==='/'||previousKey==='+'||previousKey==='-'){\n        display.textContent=firstNum\n      }\n      if(operatorForAdvanced===undefined){\n        return false\n      }\n      else{\n        if(count===0){\n          previousNum=display.textContent\n        }\n      display.textContent=calculate(firstNum,operatorForAdvanced,previousNum)\n      firstNum=display.textContent\n      count=count+1\n      // previousNum =display.textContent\n      }\n    }\n  }\n\n});\n</code></pre></div>\n<p dir=\"auto\">검색했던 링크가 있다면 첨부해 주세요.</p>",
    avatarUrl: "https://avatars.githubusercontent.com/u/98820643?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfXd",
    createdAt: "2022-05-09T06:20:08Z",
    title: "계산기 과제에서 SpecRunner로는 통과되는데 npm run test는 안됩니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/29",
    author: "hxezin",
    answer: {
      id: "DC_kwDOHOApLM4AKWQA",
      createdAt: "2022-05-09T08:00:27Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/29#discussioncomment-2712576",
      author: "JungYunHan",
      bodyHTML:
        '<p dir="auto">html코드가 기존 html코드가 아니여서 거기서 오류나는 거 같아요. script.js파일만 복사해서 기본 html파일과 함께 실행했을 때는 정상적으로 통과 됩니다.<br>\nhtml 코드를 수정해보시거나 기본 목업 html파일로 변경해서 제출해보세요</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/56419872?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제: macOS</p>\n<p dir="auto">Node.js 버전(node -v): v16.15.0</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\n계산기 과제 제출에서 SpecRunner는 다 통과되는데 npm run test로는 실패로 뜹니다.<br>\n과제에서 주어진 변수명이나 class명을 그대로 사용하였습니다.</p>\n<p dir="auto">제가 작성한 script.js 파일입니다.<br>\n<a href="https://github.com/hxezin/fe-sprint-calculator/blob/main/script.js">https://github.com/hxezin/fe-sprint-calculator/blob/main/script.js</a></p>\n<p dir="auto">아래는 npm run test 결과입니다.</p>\n<div class="highlight highlight-source-shell position-relative overflow-auto" data-snippet-clipboard-copy-content="hyejin@HYEJINui-MacBookAir fe-sprint-calculator-main % npm run test \n\n&gt; fe-sprint-calculator@1.0.0 test\n&gt; mocha spec/script.test.js --timeout 50000 --reporter mocha-multi-reporters --reporter-options configFile=multi-reporters.json\n\n\n\n  bare minimum test\n    유어클레스 bare minimum 레슨의 예를 통과합니다.\n초기화 버튼\n      ✓ clear 버튼을 눌렀을 때, 화면에 0, +, 0, =, 0 순서로 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n      ✓ 처음 숫자 버튼을 눌렀을 때, 첫 번째 화면에 누른 숫자가 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n      ✓ 숫자 버튼과 연산자 버튼을 눌렀을 때, 첫 번째 화면는 숫자, 두 번째 화면에는 연산자가 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n숫자 5 버튼\n      ✓ 숫자 버튼, 연산자 버튼, 숫자 버튼을 눌렀을 때, 화면에 숫자, 연산자, 순자의 순서로 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n숫자 5 버튼\n      1) 숫자 버튼, 연산자 버튼, 숫자 버튼, 엔터 버튼을 눌렀을 때, 화면에 숫자, 연산자, 숫자, =, 연산 결과의 순서로 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n숫자 5 버튼\n      2) 연산 시 script.js의 calculate 함수를 활용해야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n숫자 5 버튼\n      3) clear 버튼을 눌렀을 때, 화면에 0, +, 0, =, 0 순서로 보여야 합니다.\n초기화 버튼\n\n  Advanced Challenge test\n    유어클레스 Advanced Challenge 레슨의 예를 통과합니다.\n      Step 1 - 숫자 버튼을 누르고 화면에 숫자를 입력하기\n숫자 7 버튼\n        ✓ 숫자 버튼을 눌렀을 때, 계산기 화면에 숫자가 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n숫자 0 버튼\n숫자 0 버튼\n숫자 0 버튼\n        ✓ 숫자 버튼을 여러 번 눌렀을 때, 계산기 화면에 숫자가 이어붙여져야(concatenation) 합니다.\n초기화 버튼\n      Step 2 - Enter 버튼을 눌러 계산하고, AC 버튼으로 초기화 시키기\n숫자 7 버튼\n숫자 0 버튼\n숫자 0 버튼\n숫자 0 버튼\n        4) 연산자 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자를 따로 저장하고 계산할 준비해야 합니다.\n초기화 버튼\n숫자 7 버튼\n숫자 0 버튼\n숫자 0 버튼\n숫자 0 버튼\n        5) Enter 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자와 따로 저장된 숫자를 함께 조합하여 계산한 결과를 화면에 보여줘야 합니다.\n초기화 버튼\n        AC 버튼이 잘 클릭 되는지 테스트 합니다.\n초기화 버튼\n          ✓ AC가 표시된 버튼을 클릭하면 초기화가 되어야 합니다.\n초기화 버튼\n초기화 버튼\n    calculate 함수를 검사합니다.\n      정수의 연산을 테스트 합니다.\n        덧샘 연산을 검사합니다\n          ✓ 1과 2의 합은 3이여야 합니다.\n          ✓ 9492과 848946의 합은 858438이여야 합니다.\n          ✓ 1028과 1231의 합은 2259이여야 합니다.\n          ✓ 100과 1100의 합은 1200이여야 합니다.\n        뺄샘 연산을 검사합니다\n          ✓ 1과 2의 합은 -1이여야 합니다.\n          ✓ 9492과 9492의 합은 0이여야 합니다.\n          ✓ 1111과 1100의 합은 11이여야 합니다.\n          ✓ 1100과 1000의 합은 100이여야 합니다.\n        곱샘 연산을 검사합니다\n          ✓ 1과 2의 합은 2이여야 합니다.\n          ✓ 9492과 231의 합은 2192652이여야 합니다.\n          ✓ 100과 100의 합은 10000이여야 합니다.\n          ✓ 100과 1의 합은 100이여야 합니다.\n        나눗샘 연산을 검사합니다\n          ✓ 4과 2의 합은 2이여야 합니다.\n          ✓ 100과 10의 합은 10이여야 합니다.\n          ✓ 2048과 1024의 합은 2이여야 합니다.\n          ✓ 28972456과 2323의 합은 12472이여야 합니다.\n    계산기의 작동을 테스트 합니다.\n      숫자 버튼이 잘 클릭 되는지 테스트 합니다.\n숫자 1 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 2 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 4 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 5 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 6 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 7 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 8 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 9 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 0 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n      AC 버튼이 잘 클릭 되는지 테스트 합니다.\n초기화 버튼\n        ✓ AC가 표시된 버튼을 클릭하면 초기화가 되어야 합니다.\n초기화 버튼\n      기본적인 계산기의 기능을 검사합니다.\n숫자 1 버튼\n숫자 1 버튼\n연산자 + 버튼\n숫자 1 버튼\n        6) 1,1,+,1,Enter를 연속으로 누르면 12이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 1 버튼\n연산자 - 버튼\n숫자 1 버튼\n        7) 1,1,-,1,Enter를 연속으로 누르면 10이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 5 버튼\n        8) 1,5,*,4,Enter를 연속으로 누르면 60이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 9 버튼\n숫자 0 버튼\n        9) 9,0,/,3,Enter를 연속으로 누르면 30이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 0 버튼\n연산자 + 버튼\n숫자 0 버튼\n        10) 0,+,0,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n\n  Nightmare test\n    calculate 함수를 검사합니다.\n      실수 연산을 테스트 합니다.\n        덧샘 연산을 검사합니다\n          ✓ 0.2341324과 0.91723의 합은 1.1513624이여야 합니다.\n          ✓ 0.1과 0.2의 합은 0.30000000000000004이여야 합니다.\n        뺄샘 연산을 검사합니다\n          ✓ 3.3과 3의 합은 0.2999999999999998이여야 합니다.\n          ✓ 120984.1과 0.12의 합은 120983.98000000001이여야 합니다.\n        곱샘 연산을 검사합니다\n          ✓ 0.124과 12.1231의 합은 1.5032644000000002이여야 합니다.\n          ✓ 12.13과 123.42의 합은 1497.0846000000001이여야 합니다.\n        나눗샘 연산을 검사합니다\n          ✓ 1.5032644000000002과 0.124의 합은 12.1231이여야 합니다.\n          ✓ 1497.0846000000001과 12.13의 합은 123.42이여야 합니다.\n    계산기의 작동을 테스트 합니다.\n      혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n숫자 3 버튼\n        11) 3,*,3,Enter,Enter,Enter,Enter를 연속으로 누르면 243이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 - 버튼\n숫자 3 버튼\n        12) 3,-,3,Enter,Enter,Enter,Enter를 연속으로 누르면 -9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 + 버튼\n숫자 3 버튼\n        13) 3,+,3,Enter,Enter,Enter,Enter를 연속으로 누르면 15이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        14) 3,/,3,Enter,Enter,Enter,Enter를 연속으로 누르면 0.037037037037037035이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        15) 3,Enter,Enter,Enter,*,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        16) 3,Enter,Enter,Enter,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        17) 3,Enter,Enter,Enter,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        18) 3,Enter,Enter,Enter,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        19) 3,*,*,*,*,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 - 버튼\n연산자 - 버튼\n연산자 - 버튼\n연산자 - 버튼\n숫자 3 버튼\n        20) 3,-,-,-,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 + 버튼\n연산자 + 버튼\n연산자 + 버튼\n연산자 + 버튼\n숫자 3 버튼\n        21) 3,+,+,+,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        22) 3,/,/,/,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 + 버튼\n연산자 - 버튼\n        23) 3,+,-,*,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        24) 3,/,+,-,*,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        25) 3,/,/,+,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        26) 3,*,/,-,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        27) 3,*,3,Enter,*,*,*를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 - 버튼\n숫자 3 버튼\n        28) 3,-,3,Enter,-,-,-를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        29) 3,*,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 - 버튼\n        30) 3,-,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 7 버튼\n숫자 4 버튼\n숫자 2 버튼\n연산자 + 버튼\n        31) 7,4,2,+,Enter를 연속으로 누르면 1484이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 8 버튼\n숫자 9 버튼\n숫자 1 버튼\n숫자 2 버튼\n        32) 8,9,1,2,/,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 5 버튼\n숫자 1 버튼\n연산자 - 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 2 버튼\n        33) 5,1,-,.,1,2,Enter를 연속으로 누르면 50.88이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 0 버튼\n숫자 0 버튼\n        34) 1,0,0,/,.,5,Enter를 연속으로 누르면 200이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 0 버튼\n숫자 0 버튼\n연산자 + 버튼\n소수점 버튼\n소수점 버튼\n숫자 5 버튼\n        35) 1,0,0,+,.,.,5,Enter를 연속으로 누르면 100.5이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 0 버튼\n숫자 0 버튼\n        36) 1,0,0,*,.,.,5,Enter를 연속으로 누르면 50이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n숫자 2 버튼\n연산자 + 버튼\n숫자 3 버튼\n        37) 3,.,.,.,.,.,2,+,3,Enter를 연속으로 누르면 6.2이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n숫자 2 버튼\n연산자 - 버튼\n숫자 2 버튼\n        38) 3,.,.,.,.,.,2,-,2,Enter를 연속으로 누르면 1.2000000000000002이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n소수점 버튼\n숫자 2 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 4 버튼\n연산자 + 버튼\n숫자 2 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 3 버튼\n        39) 3,.,2,1,2,4,+,2,.,1,1,2,3,Enter를 연속으로 누르면 5.3247이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 6 버튼\n숫자 2 버튼\n숫자 3 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 9 버튼\n숫자 3 버튼\n숫자 8 버튼\n        40) 6,2,3,.,1,2,9,3,8,/,1,2,4,Enter를 연속으로 누르면 5.02523693548387이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 2 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 3 버튼\n숫자 8 버튼\n        41) 1,2,.,.,.,1,2,3,8,*,2,3,Enter를 연속으로 누르면 278.8474이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 0 버튼\n숫자 0 버튼\n소수점 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 5 버튼\n숫자 2 버튼\n연산자 + 버튼\n숫자 1 버튼\n숫자 2 버튼\n연산자 + 버튼\n숫자 1 버튼\n숫자 5 버튼\n연산자 - 버튼\n연산자 - 버튼\n숫자 2 버튼\n숫자 3 버튼\n연산자 - 버튼\n숫자 1 버튼\n숫자 4 버튼\n숫자 4 버튼\n숫자 2 버튼\n        42) 1,0,0,.,.,1,2,5,2,+,1,2,+,1,5,-,-,2,3,-,1,4,4,2,/,2,3,/,/,1,2,*,2,3,Enter를 연속으로 누르면 -111.48956666666668이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n\n\n  42 passing (57ms)\n  42 failing\n\n  1) bare minimum test\n       유어클레스 bare minimum 레슨의 예를 통과합니다.\n         숫자 버튼, 연산자 버튼, 숫자 버튼, 엔터 버튼을 눌렀을 때, 화면에 숫자, 연산자, 숫자, =, 연산 결과의 순서로 보여야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:56:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:145:24\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:144:14)\n      at processImmediate (node:internal/timers:466:21)\n\n  2) bare minimum test\n       유어클레스 bare minimum 레슨의 예를 통과합니다.\n         연산 시 script.js의 calculate 함수를 활용해야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:56:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:163:24\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:162:14)\n      at processImmediate (node:internal/timers:466:21)\n\n  3) bare minimum test\n       유어클레스 bare minimum 레슨의 예를 통과합니다.\n         clear 버튼을 눌렀을 때, 화면에 0, +, 0, =, 0 순서로 보여야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:56:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:192:24\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:191:14)\n      at processImmediate (node:internal/timers:466:21)\n\n  4) Advanced Challenge test\n       유어클레스 Advanced Challenge 레슨의 예를 통과합니다.\n         Step 2 - Enter 버튼을 눌러 계산하고, AC 버튼으로 초기화 시키기\n           연산자 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자를 따로 저장하고 계산할 준비해야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:228:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:284:26\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:283:16)\n      at processImmediate (node:internal/timers:466:21)\n\n  5) Advanced Challenge test\n       유어클레스 Advanced Challenge 레슨의 예를 통과합니다.\n         Step 2 - Enter 버튼을 눌러 계산하고, AC 버튼으로 초기화 시키기\n           Enter 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자와 따로 저장된 숫자를 함께 조합하여 계산한 결과를 화면에 보여줘야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:228:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:297:26\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:296:16)\n      at processImmediate (node:internal/timers:466:21)\n\n  6) Advanced Challenge test\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           1,1,+,1,Enter를 연속으로 누르면 12이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  7) Advanced Challenge test\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           1,1,-,1,Enter를 연속으로 누르면 10이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  8) Advanced Challenge test\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           1,5,*,4,Enter를 연속으로 누르면 60이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  9) Advanced Challenge test\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           9,0,/,3,Enter를 연속으로 누르면 30이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  10) Advanced Challenge test\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           0,+,0,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  11) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,*,3,Enter,Enter,Enter,Enter를 연속으로 누르면 243이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  12) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,-,3,Enter,Enter,Enter,Enter를 연속으로 누르면 -9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  13) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,+,3,Enter,Enter,Enter,Enter를 연속으로 누르면 15이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  14) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,/,3,Enter,Enter,Enter,Enter를 연속으로 누르면 0.037037037037037035이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  15) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,Enter,Enter,Enter,*,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  16) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,Enter,Enter,Enter,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  17) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,Enter,Enter,Enter,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  18) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,Enter,Enter,Enter,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  19) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,*,*,*,*,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  20) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,-,-,-,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  21) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,+,+,+,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  22) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,/,/,/,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  23) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,+,-,*,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  24) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,/,+,-,*,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  25) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,/,/,+,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  26) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,*,/,-,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  27) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,*,3,Enter,*,*,*를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  28) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,-,3,Enter,-,-,-를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  29) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,*,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  30) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,-,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  31) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           7,4,2,+,Enter를 연속으로 누르면 1484이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  32) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           8,9,1,2,/,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  33) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           5,1,-,.,1,2,Enter를 연속으로 누르면 50.88이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  34) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,0,0,/,.,5,Enter를 연속으로 누르면 200이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  35) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,0,0,+,.,.,5,Enter를 연속으로 누르면 100.5이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  36) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,0,0,*,.,.,5,Enter를 연속으로 누르면 50이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  37) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,.,.,.,.,.,2,+,3,Enter를 연속으로 누르면 6.2이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  38) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,.,.,.,.,.,2,-,2,Enter를 연속으로 누르면 1.2000000000000002이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  39) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,.,2,1,2,4,+,2,.,1,1,2,3,Enter를 연속으로 누르면 5.3247이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  40) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           6,2,3,.,1,2,9,3,8,/,1,2,4,Enter를 연속으로 누르면 5.02523693548387이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  41) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,2,.,.,.,1,2,3,8,*,2,3,Enter를 연속으로 누르면 278.8474이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  42) Nightmare test\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,0,0,.,.,1,2,5,2,+,1,2,+,1,5,-,-,2,3,-,1,4,4,2,/,2,3,/,/,1,2,*,2,3,Enter를 연속으로 누르면 -111.48956666666668이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (&lt;anonymous&gt;)\n      at Context.&lt;anonymous&gt; (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)"><pre>hyejin@HYEJINui-MacBookAir fe-sprint-calculator-main % npm run <span class="pl-c1">test</span> \n\n<span class="pl-k">&gt;</span> fe-sprint-calculator@1.0.0 <span class="pl-c1">test</span>\n<span class="pl-k">&gt;</span> mocha spec/script.test.js --timeout 50000 --reporter mocha-multi-reporters --reporter-options configFile=multi-reporters.json\n\n\n\n  bare minimum <span class="pl-c1">test</span>\n    유어클레스 bare minimum 레슨의 예를 통과합니다.\n초기화 버튼\n      ✓ clear 버튼을 눌렀을 때, 화면에 0, +, 0, =, 0 순서로 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n      ✓ 처음 숫자 버튼을 눌렀을 때, 첫 번째 화면에 누른 숫자가 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n      ✓ 숫자 버튼과 연산자 버튼을 눌렀을 때, 첫 번째 화면는 숫자, 두 번째 화면에는 연산자가 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n숫자 5 버튼\n      ✓ 숫자 버튼, 연산자 버튼, 숫자 버튼을 눌렀을 때, 화면에 숫자, 연산자, 순자의 순서로 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n숫자 5 버튼\n      1) 숫자 버튼, 연산자 버튼, 숫자 버튼, 엔터 버튼을 눌렀을 때, 화면에 숫자, 연산자, 숫자, =, 연산 결과의 순서로 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n숫자 5 버튼\n      2) 연산 시 script.js의 calculate 함수를 활용해야 합니다.\n초기화 버튼\n숫자 7 버튼\n연산자 + 버튼\n숫자 5 버튼\n      3) clear 버튼을 눌렀을 때, 화면에 0, +, 0, =, 0 순서로 보여야 합니다.\n초기화 버튼\n\n  Advanced Challenge <span class="pl-c1">test</span>\n    유어클레스 Advanced Challenge 레슨의 예를 통과합니다.\n      Step 1 - 숫자 버튼을 누르고 화면에 숫자를 입력하기\n숫자 7 버튼\n        ✓ 숫자 버튼을 눌렀을 때, 계산기 화면에 숫자가 보여야 합니다.\n초기화 버튼\n숫자 7 버튼\n숫자 0 버튼\n숫자 0 버튼\n숫자 0 버튼\n        ✓ 숫자 버튼을 여러 번 눌렀을 때, 계산기 화면에 숫자가 이어붙여져야(concatenation) 합니다.\n초기화 버튼\n      Step 2 - Enter 버튼을 눌러 계산하고, AC 버튼으로 초기화 시키기\n숫자 7 버튼\n숫자 0 버튼\n숫자 0 버튼\n숫자 0 버튼\n        4) 연산자 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자를 따로 저장하고 계산할 준비해야 합니다.\n초기화 버튼\n숫자 7 버튼\n숫자 0 버튼\n숫자 0 버튼\n숫자 0 버튼\n        5) Enter 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자와 따로 저장된 숫자를 함께 조합하여 계산한 결과를 화면에 보여줘야 합니다.\n초기화 버튼\n        AC 버튼이 잘 클릭 되는지 테스트 합니다.\n초기화 버튼\n          ✓ AC가 표시된 버튼을 클릭하면 초기화가 되어야 합니다.\n초기화 버튼\n초기화 버튼\n    calculate 함수를 검사합니다.\n      정수의 연산을 테스트 합니다.\n        덧샘 연산을 검사합니다\n          ✓ 1과 2의 합은 3이여야 합니다.\n          ✓ 9492과 848946의 합은 858438이여야 합니다.\n          ✓ 1028과 1231의 합은 2259이여야 합니다.\n          ✓ 100과 1100의 합은 1200이여야 합니다.\n        뺄샘 연산을 검사합니다\n          ✓ 1과 2의 합은 -1이여야 합니다.\n          ✓ 9492과 9492의 합은 0이여야 합니다.\n          ✓ 1111과 1100의 합은 11이여야 합니다.\n          ✓ 1100과 1000의 합은 100이여야 합니다.\n        곱샘 연산을 검사합니다\n          ✓ 1과 2의 합은 2이여야 합니다.\n          ✓ 9492과 231의 합은 2192652이여야 합니다.\n          ✓ 100과 100의 합은 10000이여야 합니다.\n          ✓ 100과 1의 합은 100이여야 합니다.\n        나눗샘 연산을 검사합니다\n          ✓ 4과 2의 합은 2이여야 합니다.\n          ✓ 100과 10의 합은 10이여야 합니다.\n          ✓ 2048과 1024의 합은 2이여야 합니다.\n          ✓ 28972456과 2323의 합은 12472이여야 합니다.\n    계산기의 작동을 테스트 합니다.\n      숫자 버튼이 잘 클릭 되는지 테스트 합니다.\n숫자 1 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 2 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 4 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 5 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 6 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 7 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 8 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 9 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n숫자 0 버튼\n        ✓ 숫자 버튼을 클릭하면 화면에 숫자가 표시되어야 합니다.\n초기화 버튼\n      AC 버튼이 잘 클릭 되는지 테스트 합니다.\n초기화 버튼\n        ✓ AC가 표시된 버튼을 클릭하면 초기화가 되어야 합니다.\n초기화 버튼\n      기본적인 계산기의 기능을 검사합니다.\n숫자 1 버튼\n숫자 1 버튼\n연산자 + 버튼\n숫자 1 버튼\n        6) 1,1,+,1,Enter를 연속으로 누르면 12이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 1 버튼\n연산자 - 버튼\n숫자 1 버튼\n        7) 1,1,-,1,Enter를 연속으로 누르면 10이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 5 버튼\n        8) 1,5,<span class="pl-k">*</span>,4,Enter를 연속으로 누르면 60이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 9 버튼\n숫자 0 버튼\n        9) 9,0,/,3,Enter를 연속으로 누르면 30이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 0 버튼\n연산자 + 버튼\n숫자 0 버튼\n        10) 0,+,0,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n\n  Nightmare <span class="pl-c1">test</span>\n    calculate 함수를 검사합니다.\n      실수 연산을 테스트 합니다.\n        덧샘 연산을 검사합니다\n          ✓ 0.2341324과 0.91723의 합은 1.1513624이여야 합니다.\n          ✓ 0.1과 0.2의 합은 0.30000000000000004이여야 합니다.\n        뺄샘 연산을 검사합니다\n          ✓ 3.3과 3의 합은 0.2999999999999998이여야 합니다.\n          ✓ 120984.1과 0.12의 합은 120983.98000000001이여야 합니다.\n        곱샘 연산을 검사합니다\n          ✓ 0.124과 12.1231의 합은 1.5032644000000002이여야 합니다.\n          ✓ 12.13과 123.42의 합은 1497.0846000000001이여야 합니다.\n        나눗샘 연산을 검사합니다\n          ✓ 1.5032644000000002과 0.124의 합은 12.1231이여야 합니다.\n          ✓ 1497.0846000000001과 12.13의 합은 123.42이여야 합니다.\n    계산기의 작동을 테스트 합니다.\n      혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n숫자 3 버튼\n        11) 3,<span class="pl-k">*</span>,3,Enter,Enter,Enter,Enter를 연속으로 누르면 243이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 - 버튼\n숫자 3 버튼\n        12) 3,-,3,Enter,Enter,Enter,Enter를 연속으로 누르면 -9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 + 버튼\n숫자 3 버튼\n        13) 3,+,3,Enter,Enter,Enter,Enter를 연속으로 누르면 15이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        14) 3,/,3,Enter,Enter,Enter,Enter를 연속으로 누르면 0.037037037037037035이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        15) 3,Enter,Enter,Enter,<span class="pl-k">*</span>,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        16) 3,Enter,Enter,Enter,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        17) 3,Enter,Enter,Enter,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        18) 3,Enter,Enter,Enter,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        19) 3,<span class="pl-k">*</span>,<span class="pl-k">*</span>,<span class="pl-k">*</span>,<span class="pl-k">*</span>,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 - 버튼\n연산자 - 버튼\n연산자 - 버튼\n연산자 - 버튼\n숫자 3 버튼\n        20) 3,-,-,-,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 + 버튼\n연산자 + 버튼\n연산자 + 버튼\n연산자 + 버튼\n숫자 3 버튼\n        21) 3,+,+,+,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        22) 3,/,/,/,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 + 버튼\n연산자 - 버튼\n        23) 3,+,-,<span class="pl-k">*</span>,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        24) 3,/,+,-,<span class="pl-k">*</span>,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        25) 3,/,/,+,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        26) 3,<span class="pl-k">*</span>,/,-,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        27) 3,<span class="pl-k">*</span>,3,Enter,<span class="pl-k">*</span>,<span class="pl-k">*</span>,<span class="pl-k">*</span>를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 - 버튼\n숫자 3 버튼\n        28) 3,-,3,Enter,-,-,-를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n        29) 3,<span class="pl-k">*</span>,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n연산자 - 버튼\n        30) 3,-,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 7 버튼\n숫자 4 버튼\n숫자 2 버튼\n연산자 + 버튼\n        31) 7,4,2,+,Enter를 연속으로 누르면 1484이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 8 버튼\n숫자 9 버튼\n숫자 1 버튼\n숫자 2 버튼\n        32) 8,9,1,2,/,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 5 버튼\n숫자 1 버튼\n연산자 - 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 2 버튼\n        33) 5,1,-,.,1,2,Enter를 연속으로 누르면 50.88이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 0 버튼\n숫자 0 버튼\n        34) 1,0,0,/,.,5,Enter를 연속으로 누르면 200이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 0 버튼\n숫자 0 버튼\n연산자 + 버튼\n소수점 버튼\n소수점 버튼\n숫자 5 버튼\n        35) 1,0,0,+,.,.,5,Enter를 연속으로 누르면 100.5이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 0 버튼\n숫자 0 버튼\n        36) 1,0,0,<span class="pl-k">*</span>,.,.,5,Enter를 연속으로 누르면 50이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n숫자 2 버튼\n연산자 + 버튼\n숫자 3 버튼\n        37) 3,.,.,.,.,.,2,+,3,Enter를 연속으로 누르면 6.2이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n숫자 2 버튼\n연산자 - 버튼\n숫자 2 버튼\n        38) 3,.,.,.,.,.,2,-,2,Enter를 연속으로 누르면 1.2000000000000002이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 3 버튼\n소수점 버튼\n숫자 2 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 4 버튼\n연산자 + 버튼\n숫자 2 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 3 버튼\n        39) 3,.,2,1,2,4,+,2,.,1,1,2,3,Enter를 연속으로 누르면 5.3247이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 6 버튼\n숫자 2 버튼\n숫자 3 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 9 버튼\n숫자 3 버튼\n숫자 8 버튼\n        40) 6,2,3,.,1,2,9,3,8,/,1,2,4,Enter를 연속으로 누르면 5.02523693548387이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 2 버튼\n소수점 버튼\n소수점 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 3 버튼\n숫자 8 버튼\n        41) 1,2,.,.,.,1,2,3,8,<span class="pl-k">*</span>,2,3,Enter를 연속으로 누르면 278.8474이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n숫자 1 버튼\n숫자 0 버튼\n숫자 0 버튼\n소수점 버튼\n소수점 버튼\n숫자 1 버튼\n숫자 2 버튼\n숫자 5 버튼\n숫자 2 버튼\n연산자 + 버튼\n숫자 1 버튼\n숫자 2 버튼\n연산자 + 버튼\n숫자 1 버튼\n숫자 5 버튼\n연산자 - 버튼\n연산자 - 버튼\n숫자 2 버튼\n숫자 3 버튼\n연산자 - 버튼\n숫자 1 버튼\n숫자 4 버튼\n숫자 4 버튼\n숫자 2 버튼\n        42) 1,0,0,.,.,1,2,5,2,+,1,2,+,1,5,-,-,2,3,-,1,4,4,2,/,2,3,/,/,1,2,<span class="pl-k">*</span>,2,3,Enter를 연속으로 누르면 -111.48956666666668이(가) 화면에 표시되어야 합니다.\n초기화 버튼\n\n\n  42 passing (57ms)\n  42 failing\n\n  1) bare minimum <span class="pl-c1">test</span>\n       유어클레스 bare minimum 레슨의 예를 통과합니다.\n         숫자 버튼, 연산자 버튼, 숫자 버튼, 엔터 버튼을 눌렀을 때, 화면에 숫자, 연산자, 숫자, =, 연산 결과의 순서로 보여야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:56:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:145:24\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:144:14)\n      at processImmediate (node:internal/timers:466:21)\n\n  2) bare minimum <span class="pl-c1">test</span>\n       유어클레스 bare minimum 레슨의 예를 통과합니다.\n         연산 시 script.js의 calculate 함수를 활용해야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:56:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:163:24\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:162:14)\n      at processImmediate (node:internal/timers:466:21)\n\n  3) bare minimum <span class="pl-c1">test</span>\n       유어클레스 bare minimum 레슨의 예를 통과합니다.\n         clear 버튼을 눌렀을 때, 화면에 0, +, 0, =, 0 순서로 보여야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:56:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:192:24\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:191:14)\n      at processImmediate (node:internal/timers:466:21)\n\n  4) Advanced Challenge <span class="pl-c1">test</span>\n       유어클레스 Advanced Challenge 레슨의 예를 통과합니다.\n         Step 2 - Enter 버튼을 눌러 계산하고, AC 버튼으로 초기화 시키기\n           연산자 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자를 따로 저장하고 계산할 준비해야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:228:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:284:26\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:283:16)\n      at processImmediate (node:internal/timers:466:21)\n\n  5) Advanced Challenge <span class="pl-c1">test</span>\n       유어클레스 Advanced Challenge 레슨의 예를 통과합니다.\n         Step 2 - Enter 버튼을 눌러 계산하고, AC 버튼으로 초기화 시키기\n           Enter 버튼을 눌렀을 때, 계산기 화면에 보이는 숫자와 따로 저장된 숫자를 함께 조합하여 계산한 결과를 화면에 보여줘야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:228:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:297:26\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:296:16)\n      at processImmediate (node:internal/timers:466:21)\n\n  6) Advanced Challenge <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           1,1,+,1,Enter를 연속으로 누르면 12이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  7) Advanced Challenge <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           1,1,-,1,Enter를 연속으로 누르면 10이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  8) Advanced Challenge <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           1,5,<span class="pl-k">*</span>,4,Enter를 연속으로 누르면 60이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  9) Advanced Challenge <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           9,0,/,3,Enter를 연속으로 누르면 30이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  10) Advanced Challenge <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         기본적인 계산기의 기능을 검사합니다.\n           0,+,0,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:396:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:456:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:455:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  11) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,<span class="pl-k">*</span>,3,Enter,Enter,Enter,Enter를 연속으로 누르면 243이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  12) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,-,3,Enter,Enter,Enter,Enter를 연속으로 누르면 -9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  13) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,+,3,Enter,Enter,Enter,Enter를 연속으로 누르면 15이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  14) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,/,3,Enter,Enter,Enter,Enter를 연속으로 누르면 0.037037037037037035이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  15) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,Enter,Enter,Enter,<span class="pl-k">*</span>,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  16) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,Enter,Enter,Enter,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  17) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,Enter,Enter,Enter,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  18) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,Enter,Enter,Enter,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  19) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,<span class="pl-k">*</span>,<span class="pl-k">*</span>,<span class="pl-k">*</span>,<span class="pl-k">*</span>,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  20) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,-,-,-,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  21) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,+,+,+,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  22) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,/,/,/,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  23) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,+,-,<span class="pl-k">*</span>,/,3,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  24) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,/,+,-,<span class="pl-k">*</span>,3,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  25) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,/,/,+,-,3,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  26) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,<span class="pl-k">*</span>,/,-,+,3,Enter를 연속으로 누르면 6이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  27) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,<span class="pl-k">*</span>,3,Enter,<span class="pl-k">*</span>,<span class="pl-k">*</span>,<span class="pl-k">*</span>를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  28) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,-,3,Enter,-,-,-를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  29) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,<span class="pl-k">*</span>,Enter를 연속으로 누르면 9이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  30) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,-,Enter를 연속으로 누르면 0이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  31) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           7,4,2,+,Enter를 연속으로 누르면 1484이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  32) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           8,9,1,2,/,Enter를 연속으로 누르면 1이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  33) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           5,1,-,.,1,2,Enter를 연속으로 누르면 50.88이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  34) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,0,0,/,.,5,Enter를 연속으로 누르면 200이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  35) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,0,0,+,.,.,5,Enter를 연속으로 누르면 100.5이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  36) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,0,0,<span class="pl-k">*</span>,.,.,5,Enter를 연속으로 누르면 50이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  37) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,.,.,.,.,.,2,+,3,Enter를 연속으로 누르면 6.2이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  38) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,.,.,.,.,.,2,-,2,Enter를 연속으로 누르면 1.2000000000000002이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  39) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           3,.,2,1,2,4,+,2,.,1,1,2,3,Enter를 연속으로 누르면 5.3247이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  40) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           6,2,3,.,1,2,9,3,8,/,1,2,4,Enter를 연속으로 누르면 5.02523693548387이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  41) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,2,.,.,.,1,2,3,8,<span class="pl-k">*</span>,2,3,Enter를 연속으로 누르면 278.8474이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)\n\n  42) Nightmare <span class="pl-c1">test</span>\n       계산기의 작동을 테스트 합니다.\n         혹시 발생할 수 있는 특이한 작동 시 기능을 검사합니다.\n           1,0,0,.,.,1,2,5,2,+,1,2,+,1,5,-,-,2,3,-,1,4,4,2,/,2,3,/,/,1,2,<span class="pl-k">*</span>,2,3,Enter를 연속으로 누르면 -111.48956666666668이(가) 화면에 표시되어야 합니다.:\n     Error: no button\n      at getButtonBy (spec/script.test.js:526:15)\n      at /Users/hyejin/Downloads/fe-sprint-calculator-main/spec/script.test.js:616:28\n      at Array.forEach (<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span>)\n      at Context.<span class="pl-k">&lt;</span>anonymous<span class="pl-k">&gt;</span> (spec/script.test.js:615:18)\n      at processImmediate (node:internal/timers:466:21)</pre></div>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/102649010?s=64&u=c5e93e6d9e70df10d0a983383e0bca3571c32e33&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfXV",
    createdAt: "2022-05-09T06:13:35Z",
    title: "git clone 과정에서 warning 메세지가 뜹니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/28",
    author: "ekim49",
    answer: {
      id: "DC_kwDOHOApLM4AKWQK",
      createdAt: "2022-05-09T08:01:55Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/28#discussioncomment-2712586",
      author: "Citysquirrel",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/ekim49/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/ekim49">@ekim49</a>  님!<br>\n코드스테이츠 교육 엔지니어 곽명우입니다 <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">먼저 해당 문제에 대한 정보가 좀 더 필요합니다:</p>\n<ol dir="auto">\n<li><code class="notranslate">Warning</code>은 문제가 생길 수 있는 것이지 무조건적으로 오류인 것은 아닙니다(잠재적인 문제 발생 가능성). 그래서, 혹시 수강생분이 clone을 진행했을 때 해당 레포에서 파일이 제대로 받아와지지 않는 상태인가요? 보통 인증 문제로 작업이 멈출 경우에는 <code class="notranslate">Permission Denied</code> 에러가 아래에서 발생하고, 파일이 받아와지지 않습니다.</li>\n<li>어쨌든 여러 사례를 봤을 때는 SSH Key 등록이 제대로 되지 않은 상태로 보입니다. 클론 중 나타나는 메시지 <code class="notranslate">The authenticity of host \'github.com (15.164.81.167)\' can\'t be established.</code>가 그러함을 알려줍니다. 제대로 인증이 되지 않았다는 의미입니다. SSH 키 등록이 제대로 진행되었는지 알 필요가 있어 보입니다. 인증키 등록을 다시 한 번 진행해보시고 어떤 식으로 진행하셨는지 과정을 알려주시면 도움이 될 듯 합니다 :)</li>\n</ol>\n<p dir="auto">우선 함께 해결해나갈 수 있도록 위를 참고하시어 진행해보시고, 잘 되지 않으신다면 상세히 정리해서 올려주세요<g-emoji class="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png">😄</g-emoji></p>\n<p dir="auto">답변이 도움이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 Mark as answer를 눌러주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n추가 질문이 있으시거나 해결이 힘드시면 꼭! 답글을 달아주세요.</p>\n<p dir="auto">감사합니다.<br>\n코드스테이츠 교육 엔지니어<br>\n곽명우 드림</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4",
    },
    bodyHTML:
      "<p dir=\"auto\">Github 에서 SSH key 를 등록하고, 제대로 되었는지 확인차 repository 에서 git clone 을 하기 위해 터미널에<br>\n<code class=\"notranslate\">git clone git@github.com:codestates-seb/fe-sprint-cli-practice.git </code><br>\n이라고 입력하였는데, 제대로 실행이 되지 않아서 기존 SSH key를 삭제 후 재등록하였는데도 같은 문제가 발생했습니다.</p>\n<p dir=\"auto\"><code class=\"notranslate\">Warning: Permanently added 'github.com' (ED25519) to the list of known hosts. </code><br>\n이라는 메세지가 나오는데 해결 방법을 찾지 못해 문의드립니다.<br>\n터미널에는 아래와 같은 메세지가 나왔습니다.</p>\n<div class=\"snippet-clipboard-content position-relative overflow-auto\" data-snippet-clipboard-copy-content=\"Cloning into 'fe-sprint-cli-practice'...\nThe authenticity of host 'github.com (15.164.81.167)' can't be established.\nED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.\nThis key is not known by any other names\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\n\nWarning: Permanently added 'github.com' (ED25519) to the list of known hosts.\nremote: Enumerating objects: 17, done.\nremote: Counting objects: 100% (17/17), done.\nremote: Compressing objects: 100% (12/12), done.\nremote: Total 17 (delta 2), reused 15 (delta 2), pack-reused 0\nReceiving objects: 100% (17/17), 38.78 KiB | 195.00 KiB/s, done.\nResolving deltas: 100% (2/2), done.\"><pre class=\"notranslate\"><code class=\"notranslate\">Cloning into 'fe-sprint-cli-practice'...\nThe authenticity of host 'github.com (15.164.81.167)' can't be established.\nED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.\nThis key is not known by any other names\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\n\nWarning: Permanently added 'github.com' (ED25519) to the list of known hosts.\nremote: Enumerating objects: 17, done.\nremote: Counting objects: 100% (17/17), done.\nremote: Compressing objects: 100% (12/12), done.\nremote: Total 17 (delta 2), reused 15 (delta 2), pack-reused 0\nReceiving objects: 100% (17/17), 38.78 KiB | 195.00 KiB/s, done.\nResolving deltas: 100% (2/2), done.\n</code></pre></div>",
    avatarUrl: "https://avatars.githubusercontent.com/u/100138593?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfWM",
    createdAt: "2022-05-09T05:08:49Z",
    title: "계산기 과제 제출에서 start와 test가 비정상적으로 작동합니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/27",
    author: "RyuJiChang",
    answer: {
      id: "DC_kwDOHOApLM4AKWDk",
      createdAt: "2022-05-09T05:13:42Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/27#discussioncomment-2711780",
      author: "kimploo",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/RyuJiChang/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/RyuJiChang">@RyuJiChang</a> 님! 교육 엔지니어 김홍식입니다.</p>\n<ul dir="auto">\n<li>계산기 과제는 <code class="notranslate">npm start</code> 부분이 없습니다!</li>\n<li>이전에 진행하셨던 계산기 과제에서 <code class="notranslate">npm install</code>, <code class="notranslate">npm run test</code>, <code class="notranslate">npm submit</code>을 하시면 정상적으로 과제 제출이 됩니다.\n<ul dir="auto">\n<li>새롭게 <code class="notranslate">fe-sprint-calcualtor</code> 리포지토리에서 과제를 제출하시는 경우, 기존 테스트 통과를 하기 위해 작성하신 코드를 <code class="notranslate">./scrpit.js</code>에 넣어주셔야 테스트가 통과됩니다.</li>\n</ul>\n</li>\n</ul>\n<p dir="auto">확인 부탁드립니다!</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    },
    bodyHTML:
      '<p dir="auto">npm install로 설치도 해줬고<br>\npackage.json에서 "start": "node script.js",도 test윗줄에 잘 추가해줬는데<br>\nstart를 작동시키면</p>\n<p dir="auto">`&gt; fe-sprint-calculator@1.0.0 start</p>\n<blockquote>\n<p dir="auto">node script.js</p>\n</blockquote>\n<p dir="auto">/home/ryu/문서/CScalculator/script.js:1<br>\nconst calculator = document.querySelector(\'.calculator\'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.<br>\n^</p>\n<p dir="auto">ReferenceError: document is not defined<br>\nat Object. (/home/ryu/문서/CScalculator/script.js:1:20)<br>\nat Module._compile (node:internal/modules/cjs/loader:1105:14)<br>\nat Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)<br>\nat Module.load (node:internal/modules/cjs/loader:981:32)<br>\nat Function.Module._load (node:internal/modules/cjs/loader:822:12)<br>\nat Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)<br>\nat node:internal/main/run_main_module:17:47`<br>\n라는 내용이 출력됩니다.<br>\nnode script.js , npm start, npm run start 3가지가 모두 저런 상태입니다.<br>\n여기까지는 아 작동은 안되지만 과제라도 제출해보자 라고 생각하며 넘어갔는데</p>\n<p dir="auto">test를 할 경우 아래의 이미지와 같이 bare minimum의 조건들이 작동하지 않습니다.<br>\n이 상태로 제출을 해도 괜찮은지를 모르겠네요<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/104156381/167343959-d0220a64-b069-4496-89aa-30eb76d470a4.png"><img src="https://user-images.githubusercontent.com/104156381/167343959-d0220a64-b069-4496-89aa-30eb76d470a4.png" alt="image" style="max-width: 100%;"></a></p>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/104156381/167344073-576eb24c-5cbb-4e4e-9fab-13c0daf647b7.png"><img src="https://user-images.githubusercontent.com/104156381/167344073-576eb24c-5cbb-4e4e-9fab-13c0daf647b7.png" alt="image" style="max-width: 100%;"></a><br>\n(SpecRunner.html 직접 구동 시 이미지와 같이 정상적으로 출력됩니다.)</p>\n<p dir="auto">요약하면 아래와 같습니다.</p>\n<ol dir="auto">\n<li>실행자체가 안되는 이유를 모르겠다(start)</li>\n<li>bare minimum만 test에서 실패해서 제출을 해도 되는지 모르겠다.</li>\n</ol>',
    avatarUrl: "https://avatars.githubusercontent.com/u/104156381?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfUo",
    createdAt: "2022-05-09T03:35:39Z",
    title: "과제 제출 매니저 설치 단계에서 문제가 발생했습니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/26",
    author: "anotheranotherhoon",
    answer: {
      id: "DC_kwDOHOApLM4AKWA7",
      createdAt: "2022-05-09T04:21:45Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/26#discussioncomment-2711611",
      author: "Citysquirrel",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/anotheranotherhoon/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/anotheranotherhoon">@anotheranotherhoon</a> 님!<br>\n코드스테이츠 교육 엔지니어 곽명우입니다 <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">개발 환경 초기 세팅할 때는 정말 많은 에러를 마주하게 됩니다 <g-emoji class="g-emoji" alias="sob" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f62d.png">😭</g-emoji></p>\n<p dir="auto">겪고 계신 문제는 npm과 node의 버전 충돌 문제로 보입니다. <a href="https://help.heroku.com/ZV7S7D6T/why-is-my-node-build-is-suddenly-displaying-npm-err-cb-apply-is-not-a-function" rel="nofollow">npm 5버전 이하와 node 12, 14 버전의 충돌 문제</a>라고 하네요.<br>\n다른 것이 원인이 될 수도 있지만 우선적으로는 <a href="https://walldaydream.tistory.com/entry/Nodejs-npm-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%ED%95%98%EA%B8%B0" rel="nofollow">node와 npm을 최신 버전으로 한 번 업데이트</a> 해보시겠어요?</p>\n<p dir="auto">위 방법들을 시도해보시고, 에러 파악이 어렵거나 해결이 잘 되지 않는다면 추가적으로 답변을 달아주세요!</p>\n<p dir="auto">답변이 도움이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 Mark as answer를 눌러주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n추가 질문이 있으시거나 해결이 힘드시면 꼭! 답글을 달아주세요.</p>\n<p dir="auto">감사합니다.<br>\n코드스테이츠 교육 엔지니어<br>\n곽명우 드림</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4",
    },
    bodyHTML:
      '<p dir="auto">--------------- 여기서부터 복사하세요 ---------------</p>\n<p dir="auto">운영 체제: 예) macOS</p>\n<p dir="auto">Node.js 버전(node -v): 예)v14.16.0</p>\n<p dir="auto">v12.18.4</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\n과제 제출 매니저 설치하기<br>\n계산하기 과제 폴더 내에서 npm install 하였고 package.json 및 package-lock.json 등 잘 생성되었습니다.<br>\n하지만 <code class="notranslate">npx codestates-assignment-manager login</code>을 하면 에러를 발생시킵니다.</p>\n<p dir="auto">에러 코드를 붙여넣기 해 주세요.<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/77476348/167336231-9722c71b-f517-4912-b414-1ec53fb95fc3.png"><img width="835" alt="스크린샷 2022-05-09 오후 12 28 55" src="https://user-images.githubusercontent.com/77476348/167336231-9722c71b-f517-4912-b414-1ec53fb95fc3.png" style="max-width: 100%;"></a></p>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p>\n<p dir="auto">설치가 오류 코드 1로 실패했습니다 &lt; 라고 구글링해보았는데  구체적인 문제 해결 방법을 모르겠습니다.</p>\n<p dir="auto">**방금 페어분을 만나서 이야기하던 중 **</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/77476348/167338631-1e56fe66-3c40-4a6d-8b01-2e2a8c9a36b2.png"><img width="802" alt="스크린샷 2022-05-09 오후 1 03 00" src="https://user-images.githubusercontent.com/77476348/167338631-1e56fe66-3c40-4a6d-8b01-2e2a8c9a36b2.png" style="max-width: 100%;"></a></p>\n<p dir="auto">페어분께서는 과제폴더가아닌 터미널에 바로 하셨다고 하셨는데 저는 여전히 문제가 해결되지 않네요</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/77476348?s=64&u=64243db62117de5c254c9a76184753b76d7303ff&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfUP",
    createdAt: "2022-05-09T03:14:01Z",
    title: "과제제출 매니저 설치 오류가 지속됩니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/25",
    author: "delefredag",
    answer: {
      id: "DC_kwDOHOApLM4AKV98",
      createdAt: "2022-05-09T03:17:47Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/25#discussioncomment-2711420",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/delefredag/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/delefredag">@delefredag</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은 과제제출 매니저 설치가 안돼서 질문 주신 것 같은데요 !</p>\n<p dir="auto">매니저 설치를 하시는 폴더가 잘못된 것 같아 안되는 것 같습니다 !<br>\n계산기 폴더 안에서 다시 한 번 설치해보시겠어요 ?</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문 부탁드립니다 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji></p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">안녕하세요 맥북으로 과제 제출 매니저 설치 중에 오류가 발생했습니다.<br>\n터미널의 8자리 코드를 Github 웹브라우저에 입력하는 도중<br>\n화면이 꺼져서 다시 시작하려고 하는데 깨끗하게 재설치가 안됩니다.</p>\n<p dir="auto">npx codestates-assignment-manager login 를 터미널에 입력시<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/75477983/167333628-500ac51f-704a-4a66-9d37-c956009d735d.png"><img width="649" alt="image" src="https://user-images.githubusercontent.com/75477983/167333628-500ac51f-704a-4a66-9d37-c956009d735d.png" style="max-width: 100%;"></a><br>\n이렇게 문제가 발생합니다.</p>\n<p dir="auto">다시 설치하기 위해 rm ~/.codestates-token를 입력했는데<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/75477983/167333734-a601e230-8ffd-401e-af27-fc127aecd0fa.png"><img width="647" alt="image" src="https://user-images.githubusercontent.com/75477983/167333734-a601e230-8ffd-401e-af27-fc127aecd0fa.png" style="max-width: 100%;"></a></p>\n<p dir="auto">코드스테이츠 폴더에서 새로 설치를 시작했는데도 반복되는데 어떻게 해결할 수 있을까요?<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/75477983/167334427-5292beb4-ae96-4e3d-ae94-75308ae7f3d3.png"><img width="639" alt="image" src="https://user-images.githubusercontent.com/75477983/167334427-5292beb4-ae96-4e3d-ae94-75308ae7f3d3.png" style="max-width: 100%;"></a></p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/75477983?s=64&u=50f44296d324479a9035ef020330a814df0dd999&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfUN",
    createdAt: "2022-05-09T03:08:52Z",
    title: "Ubuntu 에서 nvm 버전 확인시 Command 'nvm' not found, did you mean:",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/24",
    author: "kanghyew0n",
    answer: {
      id: "DC_kwDOHOApLM4AKV90",
      createdAt: "2022-05-09T03:16:33Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/24#discussioncomment-2711412",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/kanghyew0n/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/kanghyew0n">@kanghyew0n</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은 nvm 버젼이 확인이 안돼서 질문 주신 것 같은데요 !</p>\n<p dir="auto">nvm은 설치 후 터미널을 닫고 새로 열어야지 적용 되는데요<br>\n터미널을 닫은 후 새로 열어서 명령어를 치신 건지 궁금합니다 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<h3 dir="auto">운영 체제: 예) macOS, Ubuntu</h3>\n<ul dir="auto">\n<li>Ubuntu</li>\n</ul>\n<h3 dir="auto">Node.js 버전(node -v): 예)v14.16.0</h3>\n<ul dir="auto">\n<li>v8.10.0</li>\n</ul>\n<h3 dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?</h3>\n<ul dir="auto">\n<li>Chapter3-1. nvm &amp; node.js</li>\n<li>nvm을 install 하는 과정에서</li>\n</ul>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/104333249/167332095-67a26963-bcf9-4a0b-a5aa-f089c483ef71.png"><img src="https://user-images.githubusercontent.com/104333249/167332095-67a26963-bcf9-4a0b-a5aa-f089c483ef71.png" alt="image" style="max-width: 100%;"></a></p>\n<ul dir="auto">\n<li>이 부분은 성공해서 =&gt; nvm is already installed 됐습니다!</li>\n<li>nvm --version 이 부분을 입력하면</li>\n</ul>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/104333249/167332678-1680a18b-8cb7-4400-9cda-d56eb4e3befa.png"><img src="https://user-images.githubusercontent.com/104333249/167332678-1680a18b-8cb7-4400-9cda-d56eb4e3befa.png" alt="image" style="max-width: 100%;"></a></p>\n<p dir="auto"><strong>Command \'nvm\' not found, did you mean:<br>\nnvm을 찾을 수 없다고 나옵니다ㅜㅜ</strong></p>\n<ul dir="auto">\n<li>node.js 버전도 확인되고 js도 잘 출력됩니다.</li>\n</ul>\n<br>\n<h3 dir="auto">어떠한 부분에서 이해가 안 되었나요?</h3>\n<ul dir="auto">\n<li>nvm 공식문서도 따라해봤지만 같은 상황입니다.<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/104333249/167333904-e41e05e3-4fdb-43bb-83f0-53a1db8847a9.png"><img src="https://user-images.githubusercontent.com/104333249/167333904-e41e05e3-4fdb-43bb-83f0-53a1db8847a9.png" alt="image" style="max-width: 100%;"></a></li>\n</ul>\n<h3 dir="auto">검색했던 링크가 있다면 첨부해 주세요.</h3>\n<ul dir="auto">\n<li><a href="https://stackoverflow.com/questions/16904658/node-version-manager-install-nvm-command-not-found" rel="nofollow">Node Version Manager install - nvm command not found</a></li>\n</ul>',
    avatarUrl: "https://avatars.githubusercontent.com/u/104333249?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfUG",
    createdAt: "2022-05-09T03:02:38Z",
    title: 'nvm 설치 후 "zsh: command not found: nvm" 오류메세지가 뜹니다',
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/23",
    author: "Kyoorim",
    answer: {
      id: "DC_kwDOHOApLM4AKV-x",
      createdAt: "2022-05-09T03:33:32Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/23#discussioncomment-2711473",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Kyoorim/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Kyoorim">@Kyoorim</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은  nvm 설치가 안되는 것에  대한 문제로 확인되는데요 !</p>\n<p dir="auto">vi 에디터로 편집 후 저장이 제대로 안된 것 같아 보입니다 !</p>\n<p dir="auto">그럼에도 안된다면</p>\n<p dir="auto">$ sudo wget -qO- <a href="https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh" rel="nofollow">https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh</a> | bash</p>\n<p dir="auto">sudo를 붙여서 한 번 더 설치해 보시겠어요 ?</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문해주세요 ! 감사합니다</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">터미널에서 nvm 설치 후 zsh: command not found: nvm 이라는 오류메세지가 계속 뜨고 있어요..</p>\n<p dir="auto">디스코드에서 동기님들이 올려주신 오류해결방법 블로그 글을 참고해서 진행해도 해결이 안되네요..제가 진행해 본 방법은 아래와 같습니다.</p>\n<p dir="auto">_<strong>1. 일단 touch로 zshrc 파일을 생성해준다.</strong><br>\ntouch ~/.zshrc</p>\n<p dir="auto"><strong>2. vi 에디터로 zshrc 파일을 실행한다.</strong><br>\nvi ~/.zshrc</p>\n<p dir="auto"><strong>3. 파일 내에 코드 입력</strong><br>\nexport NVM_DIR="$HOME/.nvm"<br>\n[ -s "$NVM_DIR/nvm.sh" ] &amp;&amp; . "$NVM_DIR/nvm.sh" # This loads nvm<br>\nvi 에디터로 편집 중이라면, \':wq\' 를 입력해서 저장후 종료한다._<br>\n(출처: <a href="https://velog.io/@palette/zsh-command-not-found-nvm-%EC%98%A4%EB%A5%98%ED%95%B4%EA%B2%B0%EB%B2%95" rel="nofollow">https://velog.io/@palette/zsh-command-not-found-nvm-%EC%98%A4%EB%A5%98%ED%95%B4%EA%B2%B0%EB%B2%95</a>)</p>\n<p dir="auto">위 3번 문제까지 해결 후 다시 터미널을 종료했다가 다시 들어가서 아무리 <code class="notranslate">nvm --version</code>을 쳐봐도 똑같은 메세지가 뜨네요.. 뭐가 잘못된 걸까요? ㅜㅜ 도와주세요~!<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/86146661/167333380-a699368a-2081-4f39-825d-0b33a96fa497.png"><img src="https://user-images.githubusercontent.com/86146661/167333380-a699368a-2081-4f39-825d-0b33a96fa497.png" alt="image" style="max-width: 100%;"></a></p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/86146661?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfT5",
    createdAt: "2022-05-09T02:47:18Z",
    title:
      "[SEB section1 , Unit8 - Chapter2. 패키지와 패키지 매니저 기초 ] 과제제출 매니저 설치가 안됩니다. 에러가 뜹니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/22",
    author: "dukjjang",
    answer: {
      id: "DC_kwDOHOApLM4AKV9Z",
      createdAt: "2022-05-09T03:06:41Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/22#discussioncomment-2711385",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/dukjjang/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/dukjjang">@dukjjang</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은  과제제출 매니저 설치가 안돼서 질문 주신 것 같은데요 !</p>\n<p dir="auto">매니저 설치를 하시는 폴더가 잘못된 것 같아 안되는 것 같습니다 !<br>\n계산기 폴더 안에서 다시 한 번 설치해보시겠어요 ?</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문 부탁드립니다 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/102455275/167331807-64564418-a2f5-4077-8c0d-6c133065e16a.png"><img src="https://user-images.githubusercontent.com/102455275/167331807-64564418-a2f5-4077-8c0d-6c133065e16a.png" alt="스크린샷 2022-05-09 오전 11 43 27" style="max-width: 100%;"></a></p>\n<p dir="auto">Node Version Manager (v0.39.1)이 설치 되어 있습니다 .<br>\n위와 같이 과제제출 매니저 설치하려고 하는데 에러가 떠서 진행을 못하고 있습니다.</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/102455275?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APfT4",
    createdAt: "2022-05-09T02:46:38Z",
    title:
      "우분투에서 nautilus 명령어 실행시  Gtk-WARNING **: 11:41:18.369: cannot open display:오류가 납니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/21",
    author: "git-daun",
    answer: {
      id: "DC_kwDOHOApLM4AKWAR",
      createdAt: "2022-05-09T04:09:59Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/21#discussioncomment-2711569",
      author: "Hong-sk",
      bodyHTML:
        '<p dir="auto">현재 wsl을 사용중이시라면 말씀해주신 것처럼 현재 윈도우가 10인지 11인지도 많은 영향을 받을 것 같습니다.<br>\n링크해주신 공식문서를 봤을 때 wsl2 필수 구성요소로는</p>\n<blockquote>\n<p dir="auto">"Windows 10 버전 2004 이상(빌드 19041 이상) 또는 Windows 11을 실행해야 합니다."</p>\n</blockquote>\n<p dir="auto">으로 나와있습니다.<br>\n하지만 wsl2 GUI 앱 실행의 사전요구사항을 보면은</p>\n<blockquote>\n<p dir="auto">"이 기능에 액세스하려면 Windows 11 빌드 22000 이상에 있어야 합니다. <a href="https://insider.windows.com/" rel="nofollow">Windows 참가자 프로그램에</a> 참여하여 최신 미리 보기 빌드를 가져올 수 있습니다."</p>\n</blockquote>\n<p dir="auto">로 버전차가 있음을 볼 수 있습니다.</p>\n<p dir="auto">즉, 다운님의 상황과, 링크해주신 공식문서에 나온 설명을 합쳐 감히 예상해본다면, wsl2 이용에는 지장이 없을 수 있으나  GUI 앱을 실행하기 위해서는 윈도우즈 버전이 11이상이어야 한다는 것으로 보입니다.</p>\n<p dir="auto">그래서 wsl2 gui 앱 실행을 위한 해결방법으로는</p>\n<ol dir="auto">\n<li>windows 11로 업데이트</li>\n<li>x server 사용</li>\n</ol>\n<p dir="auto">위 두 가지 방법이 있어 보입니다. x server의 경우는 구글링해서 나온 관련 레퍼런스들 첨부해드리니 나온 방법대로 한 번 실행해보세요 :)</p>\n<p dir="auto"><a href="url">https://evandde.github.io/wsl2-x/</a><br>\n<a href="url">https://cholchori.tistory.com/2367</a></p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/61141988?s=64&u=92c71910d9f6409d38d40d7d5a0a094d8ec647ed&v=4",
    },
    bodyHTML:
      '<p dir="auto">natilus . 명령어 실행시<br>\n<code class="notranslate">Gtk-WARNING **: 11:41:18.369: cannot open display:</code><br>\n오류 발생함</p>\n<p dir="auto">참고 레퍼런스<br>\n<a href="https://docs.microsoft.com/ko-kr/windows/wsl/tutorials/gui-apps" rel="nofollow">https://docs.microsoft.com/ko-kr/windows/wsl/tutorials/gui-apps</a></p>\n<p dir="auto">현재까지 시도한 것</p>\n<ol dir="auto">\n<li>우분투 삭제 및 재설치</li>\n<li>Linux GUI 앱 설치(Gedit 설치, 노틸러스 설치, vlc설치, x11 앱 설치)</li>\n<li>앱 설치 중에서도 Gedit 설치 후 파일 열려고 할때, 같은 에러 발생<br>\n<code class="notranslate">Gtk-WARNING **: 11:41:18.369: cannot open display:</code><br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/94218285/167332006-d4945dce-1eb4-4937-80da-f81d15932887.png"><img src="https://user-images.githubusercontent.com/94218285/167332006-d4945dce-1eb4-4937-80da-f81d15932887.png" alt="image" style="max-width: 100%;"></a></li>\n</ol>\n<p dir="auto">예상되는 이유<br>\n현재 사용버전이 윈도우 10이기 때문에 안되는 것일까요?</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/94218285?s=64&u=96e12a65d2e9387f8a949da5103ec2751b6c1f1f&v=4",
  },
  {
    id: "D_kwDOHOApLM4APewe",
    createdAt: "2022-05-07T08:33:57Z",
    title:
      "Unit9 - [JavaScript] 배열, 객체 Chapter2-1. 객체 기초 퀴즈 문제 수정이 필요합니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/20",
    author: "ryan-kim-dev",
    answer: {
      id: "DC_kwDOHOApLM4AKVJv",
      createdAt: "2022-05-08T03:56:06Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/20#discussioncomment-2708079",
      author: "kwd8905",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/ryan-kim-dev/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/ryan-kim-dev">@ryan-kim-dev</a> 님 ! 🙌🏻<br>\n코드스테이츠 교육 엔지니어 곽운도입니다.</p>\n<p dir="auto">제보해 주신 부분은 오류로 확인되어 수정 완료하였습니다.</p>\n<p dir="auto">추후 발견되는 문제 오류 제보는 이슈 쉐어링으로 접수해 주시면 감사하겠습니다 !!</p>\n<p dir="auto">감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 곽운도</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79880249?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">문제는 객관식으로 틀린 답을 고르라고 제시되어 있으나 보기는 주관식으로 올바른 Bracket notation 접근법 입력을 요하고 있습니다.</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/78180055?s=64&u=e9042943147b7659cf195acf50b6e02777e64761&v=4",
  },
  {
    id: "D_kwDOHOApLM4APdBX",
    createdAt: "2022-05-04T06:29:16Z",
    title:
      "부모태그에 justify-content: space-between; 속성을 넣었는데 자식태그 사이에 공간이 생기지 않는 이유가 궁금합니다",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/19",
    author: "NR0617",
    answer: {
      id: "DC_kwDOHOApLM4AKPlB",
      createdAt: "2022-05-04T08:04:48Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/19#discussioncomment-2685249",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/NR0617/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/NR0617">@NR0617</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">부모 태그에 space-between을 설정해주었는데, 생각대로 정렬이 안되는 이유에 대한 궁금증이신 것 같은데요 !</p>\n<p dir="auto">이는 부모 컨테이너에 빈 width 값이 없기 때문입니다.<br>\nspace-between은 아이템들의 사이에 균일한 간격을 만들어 주는 것인데요<br>\n부모 컨테이너 width를 자식들이 이미 10%, 20%, 70%로 각각 나눠 공간 배분이 완료된 상태라<br>\n사이에 간격이 없어 생기지 않는 것 입니다 !</p>\n<p dir="auto">CSS는 배우면 배울 수록 만지면 만질 수록 어려워집니다 ! 각 속성들이 어떤 역학을 하는지 시도해보시면서 공부해보세요 !</p>\n<p dir="auto"><a href="https://heropy.blog/2018/11/24/css-flexible-box/" rel="nofollow">CSS Flex</a></p>\n<p dir="auto">정리된 블로그를 보면서 공부하시는 것도 추천드립니다 !</p>\n<p dir="auto">위 설명으로 이해가 가지 않는 부분이 있다면 언제든지 추가적으로 답변을 만들어주세요 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제: macOS</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\nSection1 / Unit6 / Chapter2-2 flexbox 따라하기 - 2 / 도전하기 - 레이아웃 만들기에서 빨간색 영역 div태그의 부모태그에 justify-content: space-between을 넣었는데 빨간색 영역 사이에 공간이 생기지 않음</p>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요?<br>\n부모 태그에 space-between 속성값을 넣으면 자식태그의 좌, 우에는 빈 공간이 없고 자식태그 사이에는 공간이 생겨야 할 것 같은데 생기지 않는 점이 이해가 안됨</p>\n<p dir="auto">에러 코드를 붙여넣기 해 주세요.<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/94212747/166632021-dcc5abf8-1550-4426-b74d-8ffd00b91008.jpg"><img src="https://user-images.githubusercontent.com/94212747/166632021-dcc5abf8-1550-4426-b74d-8ffd00b91008.jpg" alt="111112" style="max-width: 100%;"></a></p>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="//여기에 작성해 주세요"><pre><span class="pl-c">//여기에 작성해 주세요</span></pre></div>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요.</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/94212747?s=64&u=145778e6dfbd813a6689a634ed3bb47f1bfa7b17&v=4",
  },
  {
    id: "D_kwDOHOApLM4APcip",
    createdAt: "2022-05-03T09:12:41Z",
    title:
      "flex grow 사용시 정확한 정렬이 안되고있는데, 이유 및 해결방안 궁금합니다",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/18",
    author: "KiwookKim",
    answer: {
      id: "DC_kwDOHOApLM4AKOZY",
      createdAt: "2022-05-03T13:43:28Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/18#discussioncomment-2680408",
      author: "Citysquirrel",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/KiwookKim/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/KiwookKim">@KiwookKim</a> 님!<br>\n코드스테이츠 교육 엔지니어 곽명우입니다 <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">Flex에 대해서 공부하고 계시네요. flex-grow 옵션은 어느 정도 이해를 하고 계신 듯합니다.<br>\n하지만 왜 flex-grow를 설정해주었는데, 생각대로 비율만큼 width가 지정되지 않느냐에 대한 궁금증이시네요.</p>\n<p dir="auto">이는 flex 박스에서 일반적으로 다뤄지는 <code class="notranslate">flex-grow</code>와 <code class="notranslate">flex-basis</code>의 값 때문입니다(<code class="notranslate">flex-shrink</code>는 완전히 grow와는 반대되는 개념이라 둘 중 하나만 존재한다고 보시면 됩니다).</p>\n<p dir="auto"><code class="notranslate">flex-basis</code>는 값이 지정되지 않을 경우 기본값이 <code class="notranslate">auto</code>로 설정됩니다. 이는 박스의 공간 배분 이전의 기본 너비를 의미하는데, auto일 경우에는 해당 아이템의 너비값을 사용하게 됩니다. 그래서 작성하신 파일의 경우 예상하신 바와 같이 내용물의 크기에 따라서 박스의 크기가 조금씩 뒤틀리는 것입니다. auto일 경우 시도하신 바와 같이 width 또는 height(flex-direction 값에 따라) 속성을 통해 조절할 수 있으며, <code class="notranslate">flex-basis</code>값을 직접 지정해주는 것과 같은 변화를 보입니다.</p>\n<p dir="auto">자세한 것은 좀 더 정리된 블로그를 참고해보시는 것을 추천드립니다.</p>\n<p dir="auto"><a href="https://heropy.blog/2018/11/24/css-flexible-box/" rel="nofollow">그림으로 잘 설명된 블로그</a><br>\n<a href="https://studiomeal.com/archives/197" rel="nofollow">이번에야 말로 CSS Flex를 익혀보자</a></p>\n<p dir="auto">CSS는 파고들수록 어려워지는 언어입니다. 각 속성들이 어떤 역할을 하는지 이것저것 시도해보시고 천천히 하나씩 받아들여 가면서 공부해보세요<g-emoji class="g-emoji" alias="sunglasses" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f60e.png">😎</g-emoji></p>\n<p dir="auto">위 설명으로 이해가 잘 되지 않으신다면 추가적으로 답변을 달아주세요!</p>\n<p dir="auto">답변이 도움이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 Mark as answer를 눌러주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n추가 질문이 있으시거나 해결이 힘드시면 꼭! 답글을 달아주세요.</p>\n<p dir="auto">감사합니다.<br>\n코드스테이츠 교육 엔지니어<br>\n곽명우 드림</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4",
    },
    bodyHTML:
      '<p dir="auto">오늘 아침에 아고라 세션도 해서 한번 적어봅니다!<br>\n(zoom으로 들을때만 해도 네~ 안써요~ 이렇게만 생각햇는데.... 역시 사람 앞일은 한치 앞도 모르네요)</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/25774030/166427699-1624341d-0409-42be-b60c-cbcf0affc5b2.png"><img width="1680" alt="html" src="https://user-images.githubusercontent.com/25774030/166427699-1624341d-0409-42be-b60c-cbcf0affc5b2.png" style="max-width: 100%;"></a></p>\nhtml 마크업 상황\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/25774030/166427740-935fd4aa-f066-4b57-81ab-42261d4881ad.png"><img width="1680" alt="css" src="https://user-images.githubusercontent.com/25774030/166427740-935fd4aa-f066-4b57-81ab-42261d4881ad.png" style="max-width: 100%;"></a></p>\n<p dir="auto">css를 보시면</p>\n<ol dir="auto">\n<li>5개의 div(.row)를 1줄로 정렬을 하기위해 부모 div인 .buttons에 display:flex &amp; flex-direction:column을 설정하였습니다.</li>\n<li>.row안의 button의 너비를 1:1:1:1의 비율로 하기 위해 .row .button에 flex-grow:1을 설정하였습니다</li>\n<li>마지막줄 row는 button이 3개이기 때문에 숫자 0에 class명 zero를 추가하고 0에 flex-grow:2를 설정하여 2:1:1의 비율을 설정하였습니다.</li>\n</ol>\n<p dir="auto">그렇게되면 깔끔하게 정렬될줄 알았으나.....<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/25774030/166428640-ed7607df-1181-40aa-af56-9a3f3568f187.png"><img width="1455" alt="calculator" src="https://user-images.githubusercontent.com/25774030/166428640-ed7607df-1181-40aa-af56-9a3f3568f187.png" style="max-width: 100%;"></a><br>\n보시는바와 같이 첫번째줄, 다섯번째줄에 정렬이 정확히 안되는 모습입니다.</p>\n<p dir="auto">첫번째줄은 button 태그 안에 컨텐츠 내용이 \'AC\' , \'+/-\'등으로 다른 button들보다 내용이 많아서 그럴꺼라는 추측만 하고있으며,<br>\n마지막(다섯번째)줄 button은 다른 button들과 마찬가지로 컨텐츠내용이 \'0\' 으로 숫자 1개일뿐인데 정렬이 틀어져서 추측도 못하고있습니다.</p>\n<p dir="auto">정렬 틀어진건에 대해선 다른방법으로 button에 width를 설정해서 해결을 해보긴 하였지만,<br>\nflex만 써서 깔끔하게 해결해보고 싶어서 질문올립니다~</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/25774030?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APcDj",
    createdAt: "2022-05-02T09:31:10Z",
    title: "Section1/Unit5 [css기초] 종합퀴즈 9번문제 질문드립니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/17",
    author: "JiYJ725",
    answer: {
      id: "DC_kwDOHOApLM4AKMep",
      createdAt: "2022-05-02T10:06:29Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/17#discussioncomment-2672553",
      author: "kimploo",
      bodyHTML:
        '<p dir="auto">안녕하세요 교육 엔지니어 김홍식입니다!<br>\n표현이 다소 헷갈리는 부분이 있다고 생각합니다. 정리해서 문제 수정하겠습니다 <g-emoji class="g-emoji" alias="+1" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44d.png">👍</g-emoji></p>\n<p dir="auto">제보 감사드립니다!</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    },
    bodyHTML:
      '<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/87750478/166213290-bd67dcb6-13c3-41d5-afc9-2326b3c22a82.png"><img src="https://user-images.githubusercontent.com/87750478/166213290-bd67dcb6-13c3-41d5-afc9-2326b3c22a82.png" alt="image" style="max-width: 100%;"></a></p>\n<p dir="auto">문제를 보면 content-box높이의 올바른 계산법을 구하라고 되어있습니다.<br>\n그런데 content-box는 box-sizing의 attribute value이고, 제시된 그림에는 Content로 되어 있기에 문제를 풀기 모호한 부분이 있다고 생각합니다.</p>\n<p dir="auto">문제를 <strong>"box-sizing을 content-box로 선택했을 경우 아래 Content 높이의 올바른 계산법을 고르시오. "</strong> 혹은<br>\n<strong>"box-sizing을 boder-box로 선택했을 경우 아래 Content 높이의 올바른 계산법을 고르시오."</strong> 로 표기하는게 적합하다고 판단되는데, 확인 부탁드립니다.</p>\n<p dir="auto">감사합니다.</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/87750478?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APb_b",
    createdAt: "2022-05-02T06:48:26Z",
    title: "UrClass에서 제공하는 이미지를 블로그에 인용해도 괜찮을까요?",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/16",
    author: "Topbin2",
    answer: {
      id: "DC_kwDOHOApLM4AKMdX",
      createdAt: "2022-05-02T09:47:42Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/16#discussioncomment-2672471",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Topbin2/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Topbin2">@Topbin2</a> 님,</p>\n<p dir="auto">질문주신 내용의 경우는 현재 저작권 관련 문제가 있는 관계로 내부 논의가 필요한 과정입니다.<br>\n그렇기 때문에 내부 논의가 거쳐야 함으로, 24시간 이후에 답변이 나갈 수 있습니다.<br>\n최대한 빠르게 답변을 남겨 드릴테니 조금만 시간을 가지고 기다려주시면 감사드리겠습니다!</p>\n<p dir="auto">감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">블로그에 그날 배운 내용을 정리할 때 UrClass 에 있는 이미지를 인용해도 괜찮을까요 ??<br>\n저작권 문제가 있을 수 있어서 여쭤봅니다 !</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/95295766?s=64&u=85d493e0be0d2ca55965efd9f6c5b268c9dca168&v=4",
  },
  {
    id: "D_kwDOHOApLM4APbXd",
    createdAt: "2022-04-30T08:29:32Z",
    title:
      "코플릿 반복문 18번, 소수찾아 나열하는 이중반복문 문제를 풀다 막혀 질문드립니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/15",
    author: "manyb2auties",
    answer: {
      id: "DC_kwDOHOApLM4AKK6v",
      createdAt: "2022-04-30T13:22:00Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/15#discussioncomment-2666159",
      author: "hxezin",
      bodyHTML:
        '<p dir="auto"><code class="notranslate">shouldBeZero</code>를 i 기준으로 루프를 돌 때마다 0으로 초기화해주어야 합니다.<br>\n작성하신 코드에서는 <code class="notranslate">shouldBeZero</code>에 개수가 누적해서 계속 더해지게 됩니다.<br>\n저도 많이 부족하지만 공부하던 문제라 답변 달아봅니다 <g-emoji class="g-emoji" alias="blush" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f60a.png">😊</g-emoji></p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/102649010?s=64&u=c5e93e6d9e70df10d0a983383e0bca3571c32e33&v=4",
    },
    bodyHTML:
      '<p dir="auto">코플릿 반복문 18번. 2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 하는 이중반복문 문제입니다.</p>\n<div class="highlight highlight-source-java position-relative overflow-auto" data-snippet-clipboard-copy-content="output = listPrimes(6);\nconsole.log(output); // --&gt; \'2-3-5\'"><pre><span class="pl-s1">output</span> = <span class="pl-en">listPrimes</span>(<span class="pl-c1">6</span>);\n<span class="pl-s1">console</span>.<span class="pl-en">log</span>(<span class="pl-s1">output</span>); <span class="pl-c">// --&gt; \'2-3-5\'</span></pre></div>\n<p dir="auto">이건 문제 하단에 나와있는 입출력 예시 이구요,</p>\n<p dir="auto">제가 무엇을 놓치고 있길래 코드가 잘 실행되지 않는지,<br>\n어느 부분을 수정해야 할지 모르겠어서 질문드립니다!!</p>\n<p dir="auto">아래는 제가 푼 방법입니다</p>\n<div class="highlight highlight-source-java position-relative overflow-auto" data-snippet-clipboard-copy-content="function listPrimes(num) {\n\n  let result = `2`\n  let shouldBeZero = 0\n\n  for(let i =3; i &lt;=num; i++){\n    \n    for(let j=2; j&lt;i; j++){     // i가 소수인걸 검사하기 위한 반복문\n      if(i%j !== 0){         // i를 j(2부터 i-1까지)로 나눈 나머지가 0이 아닌 경우 (나누어 떨어지지 않는 경우)\n        shouldBeZero = shouldBeZero + 0     // shouldBeZero 가 0씩 더해짐 --&gt; i가 소수라면\n                                            // 반복문이 다돌아갔을 때도 shouldBeZero는 0을 유지.\n      } else{\n        shouldBeZero = shouldBeZero + 1    // i가 대입한 j들 중 하나에라도 나누어 떨어지면 \n                                          // shouldBeZero 는 0 을 유지하지 못함\n      }\n    }  // 이 반복문이 i 차례 때 한차례 돌아갔을 때 shouldBeZero === 0 이면 i 는 소수 인 것\n\n    if(shouldBeZero === 0){           // i가 소수라면\n      result = result + `-${i}`            // 전에 있던 result 에 &quot;-i&quot; 가 붙음 ex)&quot;2-3&quot; \n    } else {\n      result = result + ``\n    }\n\n  }\n  return result\n}"><pre><span class="pl-smi">function</span> <span class="pl-s1">listPrimes</span>(<span class="pl-s1">num</span>) {\n\n  <span class="pl-smi">let</span> <span class="pl-s1">result</span> = `<span class="pl-c1">2</span>`\n  <span class="pl-smi">let</span> <span class="pl-s1">shouldBeZero</span> = <span class="pl-c1">0</span>\n\n  <span class="pl-k">for</span>(<span class="pl-smi">let</span> <span class="pl-s1">i</span> =<span class="pl-c1">3</span>; <span class="pl-s1">i</span> &lt;=<span class="pl-s1">num</span>; <span class="pl-s1">i</span>++){\n    \n    <span class="pl-k">for</span>(<span class="pl-smi">let</span> <span class="pl-s1">j</span>=<span class="pl-c1">2</span>; <span class="pl-s1">j</span>&lt;<span class="pl-s1">i</span>; <span class="pl-s1">j</span>++){     <span class="pl-c">// i가 소수인걸 검사하기 위한 반복문</span>\n      <span class="pl-k">if</span>(<span class="pl-s1">i</span>%<span class="pl-s1">j</span> !== <span class="pl-c1">0</span>){         <span class="pl-c">// i를 j(2부터 i-1까지)로 나눈 나머지가 0이 아닌 경우 (나누어 떨어지지 않는 경우)</span>\n        <span class="pl-s1">shouldBeZero</span> = <span class="pl-s1">shouldBeZero</span> + <span class="pl-c1">0</span>     <span class="pl-c">// shouldBeZero 가 0씩 더해짐 --&gt; i가 소수라면</span>\n                                            <span class="pl-c">// 반복문이 다돌아갔을 때도 shouldBeZero는 0을 유지.</span>\n      } <span class="pl-k">else</span>{\n        <span class="pl-s1">shouldBeZero</span> = <span class="pl-s1">shouldBeZero</span> + <span class="pl-c1">1</span>    <span class="pl-c">// i가 대입한 j들 중 하나에라도 나누어 떨어지면 </span>\n                                          <span class="pl-c">// shouldBeZero 는 0 을 유지하지 못함</span>\n      }\n    }  <span class="pl-c">// 이 반복문이 i 차례 때 한차례 돌아갔을 때 shouldBeZero === 0 이면 i 는 소수 인 것</span>\n\n    <span class="pl-k">if</span>(<span class="pl-s1">shouldBeZero</span> === <span class="pl-c1">0</span>){           <span class="pl-c">// i가 소수라면</span>\n      <span class="pl-s1">result</span> = <span class="pl-s1">result</span> + `-<span class="pl-s1">$</span>{<span class="pl-s1">i</span>}`            <span class="pl-c">// 전에 있던 result 에 "-i" 가 붙음 ex)"2-3" </span>\n    } <span class="pl-k">else</span> {\n      <span class="pl-s1">result</span> = <span class="pl-s1">result</span> + ``\n    }\n\n  }\n  <span class="pl-k">return</span> <span class="pl-s1">result</span>\n}</pre></div>\n<p dir="auto">아래는 콘솔에 제 코드를 돌려보았을 때의 결과입니다.</p>\n<div class="highlight highlight-source-java position-relative overflow-auto" data-snippet-clipboard-copy-content="listPrimes(2)\n\'2\'\nlistPrimes(3)\n\'2-3\'\nlistPrimes(4)\n\'2-3\'\nlistPrimes(5)\n\'2-3\'\nlistPrimes(10)\n\'2-3\'\nlistPrimes(10000)\n\'2-3\'"><pre><span class="pl-en">listPrimes</span>(<span class="pl-c1">2</span>)\n<span class="pl-s">\'2\'</span>\n<span class="pl-en">listPrimes</span>(<span class="pl-c1">3</span>)\n<span class="pl-s">\'2-3\'</span>\n<span class="pl-en">listPrimes</span>(<span class="pl-c1">4</span>)\n<span class="pl-s">\'2-3\'</span>\n<span class="pl-en">listPrimes</span>(<span class="pl-c1">5</span>)\n<span class="pl-s">\'2-3\'</span>\n<span class="pl-en">listPrimes</span>(<span class="pl-c1">10</span>)\n<span class="pl-s">\'2-3\'</span>\n<span class="pl-en">listPrimes</span>(<span class="pl-c1">10000</span>)\n<span class="pl-s">\'2-3\'</span></pre></div>\n<p dir="auto">보시다시피 5부터 안 붙습니다 ㅠㅠ</p>\n<p dir="auto">노트에 숫자를 직접 대입해가며 계산해 봐도 왜 오류가 난지 모르겠습니다.<br>\n제가 뭔가 모르고 있는 것 같은데 그게 뭔지 모르겠습니다, 도와주세요!!</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/101170012?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APaPd",
    createdAt: "2022-04-28T07:00:41Z",
    title:
      "코플릿 반복문 17번. 소수 찾기 문제에 parseInt(Math.sqrt(num)) 이 부분이 이해가 가질 않습니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/14",
    author: "Topbin2",
    answer: {
      id: "DC_kwDOHOApLM4AKHkl",
      createdAt: "2022-04-28T07:17:34Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/14#discussioncomment-2652453",
      author: "pseudopool",
      bodyHTML:
        '<ol dir="auto">\n<li>\n<p dir="auto">주어진 수의 제곱근에 해당되는 회수까지만 반복문을 돌려도 소수인지 아닌지 판별할 수 있기 때문입니다(굳이 i가 num이 될 때까지 돌려볼 필요가 없습니다). 예를 들어 주어진 수가 9라면, 반복문을 9의 제곱근에 해당되는 3회만 돌려도 소수인지 아닌지 알 수 있습니다.</p>\n</li>\n<li>\n<p dir="auto">이미 위에 있는 조건문 if(num % 2 === 0)에서 짝수들(2의 배수)은 false로 리턴해주었기 때문입니다. for문에 들어가는 수들은 모두 홀수이기 때문에 +2를 하면 홀수들만 골라 효율적으로 연산할 수 있습니다.</p>\n</li>\n</ol>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/98731086?s=64&u=da6484fdc928932406ce932c42f9095fc969246a&v=4",
    },
    bodyHTML:
      '<p dir="auto">코플릿 반복문 17번 IsPrime 문제</p>\n<p dir="auto">소수찾는 방법으로 검색도 많이 해보았지만 명확하게 이해가 되지 않아 질문 드립니다.</p>\n<p dir="auto">아래는 코플릿 17번 Reference의 답안을 복사한 것이며</p>\n<p dir="auto">if문 까지는 이해가 가지만 for문 부분에서 이해가 가지 않습니다.</p>\n<p dir="auto">질문1. 반복문에서 i &lt;= sqrt 라고 조건을 건 이유가 무엇인가요?<br>\n질문2. i += 2를 i++로 바꾸어도 테스트를 통과하는데 i += 2 인 이유가 무엇인가요?</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function isPrime(num) {\n  let sqrt = parseInt(Math.sqrt(num));  // num의 제곱근을 내림한 값.\n\n  if (num === 1) { // 1은 소수가 아니기 때문에 false.\n    return false;\n  }\n\n  if (num === 2) { // 2는 항상 소수이기 때문에 true.\n    return true;\n  }\n\n  if (num % 2 === 0) { // 2의 배수는 항상 소수가 아니기 때문에 false;\n    return false;\n  }\n\n  for (let i = 3; i &lt;= sqrt; i += 2) { // 1과 2는 위에서 예외처리를 했기때문에 3부터 시작.\n    if (num % i === 0) {               // sqrt 보다 작거나 같을때 까지 반복문을 돌리는 이유를 모르겠음.\n      return false;                    // i += 2 에서 i++ 로 바꾸어도 정답으로 나오는데 어떤 이유로 i += 2 인지 모르겠음.\n    }\n  }\n  return true;\n}\n"><pre><span class="pl-k">function</span> <span class="pl-en">isPrime</span><span class="pl-kos">(</span><span class="pl-s1">num</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n  <span class="pl-k">let</span> <span class="pl-s1">sqrt</span> <span class="pl-c1">=</span> <span class="pl-en">parseInt</span><span class="pl-kos">(</span><span class="pl-v">Math</span><span class="pl-kos">.</span><span class="pl-en">sqrt</span><span class="pl-kos">(</span><span class="pl-s1">num</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span>  <span class="pl-c">// num의 제곱근을 내림한 값.</span>\n\n  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">num</span> <span class="pl-c1">===</span> <span class="pl-c1">1</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c">// 1은 소수가 아니기 때문에 false.</span>\n    <span class="pl-k">return</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span>\n\n  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">num</span> <span class="pl-c1">===</span> <span class="pl-c1">2</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c">// 2는 항상 소수이기 때문에 true.</span>\n    <span class="pl-k">return</span> <span class="pl-c1">true</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span>\n\n  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">num</span> <span class="pl-c1">%</span> <span class="pl-c1">2</span> <span class="pl-c1">===</span> <span class="pl-c1">0</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c">// 2의 배수는 항상 소수가 아니기 때문에 false;</span>\n    <span class="pl-k">return</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span>\n\n  <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-k">let</span> <span class="pl-s1">i</span> <span class="pl-c1">=</span> <span class="pl-c1">3</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">&lt;=</span> <span class="pl-s1">sqrt</span><span class="pl-kos">;</span> <span class="pl-s1">i</span> <span class="pl-c1">+=</span> <span class="pl-c1">2</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c">// 1과 2는 위에서 예외처리를 했기때문에 3부터 시작.</span>\n    <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">num</span> <span class="pl-c1">%</span> <span class="pl-s1">i</span> <span class="pl-c1">===</span> <span class="pl-c1">0</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>               <span class="pl-c">// sqrt 보다 작거나 같을때 까지 반복문을 돌리는 이유를 모르겠음.</span>\n      <span class="pl-k">return</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>                    <span class="pl-c">// i += 2 에서 i++ 로 바꾸어도 정답으로 나오는데 어떤 이유로 i += 2 인지 모르겠음.</span>\n    <span class="pl-kos">}</span>\n  <span class="pl-kos">}</span>\n  <span class="pl-k">return</span> <span class="pl-c1">true</span><span class="pl-kos">;</span>\n<span class="pl-kos">}</span></pre></div>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/95295766?s=64&u=85d493e0be0d2ca55965efd9f6c5b268c9dca168&v=4",
  },
  {
    id: "D_kwDOHOApLM4APaPX",
    createdAt: "2022-04-28T06:58:34Z",
    title: "String()의 사용에 대해 궁금한 점이 생겼습니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/13",
    author: "RyuJiChang",
    answer: {
      id: "DC_kwDOHOApLM4AKHkF",
      createdAt: "2022-04-28T07:11:51Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/13#discussioncomment-2652421",
      author: "cleats01",
      bodyHTML:
        '<p dir="auto">우선 가장 눈에 띄는 건 <code class="notranslate">${2n-1}</code> 에서 2와 n 사이에 곱 연산자 * 가 빠진 것 같아요! 그리고 백틱을 이용해서 문자열로 타입을 변경했으니 String()메소드도 필요하지 않을 것 같습니다.</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/91973744?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제: Ubuntu</p>\n<p dir="auto">Node.js 버전(node -v): ???? ubuntu 20.04입니다.</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\n반복문 코플릿 08번 문제에서 수를 입력받아 그 갯수만큼의 홀수를 string 값으로 입력하라는 문제입니다.<br>\n예를 들어 3이 입력되면 \'135\'  4가 입력되면 \'1357\'등 내부 문자열의 숫자가 필요하며 인자는 1이상입니다.</p>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요?<br>\n홀수 값을 받기 위해 2n-1을 바로 String()에 넣었으나 실행되지 않았습니다.<br>\n또한 다른 값(b)에 2n-1을 할당한 후 String()에 b를 넣어 보았으나 시행이 되지 않았고<br>\n추가적으로 백틱 (`)을 이용해 String을 작동시키자<br>\n빅인트는 다른 타입과 쓸 수 없다며 사용이 되지 않습니다. 라는 문구만 나왔습니다.</p>\n<p dir="auto">while문의 조건을 변경해 문제는 해결됐지만<br>\n실제 사용에서는 함수값을 string에 바로 넣지 못한다면 이용이 불편할 것 같아 혹시 String()에<br>\n함수를 직접적으로 넣거나 처리할 수 있는 방법이 있는지 궁금합니다.</p>\n<p dir="auto">에러 코드를 붙여넣기 해 주세요.<br>\n<code class="notranslate">Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions</code></p>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function makeOddDigits(num) {\n let result = \'\'\n let n=1\n while(n&lt;=num){\n   result = result +String(`${2n-1}`)  //이 부분이 동작하지 않습니다.\n  n=n+1\n }\n return result\n}"><pre><span class="pl-k">function</span> <span class="pl-en">makeOddDigits</span><span class="pl-kos">(</span><span class="pl-s1">num</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n <span class="pl-k">let</span> <span class="pl-s1">result</span> <span class="pl-c1">=</span> <span class="pl-s">\'\'</span>\n <span class="pl-k">let</span> <span class="pl-s1">n</span><span class="pl-c1">=</span><span class="pl-c1">1</span>\n <span class="pl-k">while</span><span class="pl-kos">(</span><span class="pl-s1">n</span><span class="pl-c1">&lt;=</span><span class="pl-s1">num</span><span class="pl-kos">)</span><span class="pl-kos">{</span>\n   <span class="pl-s1">result</span> <span class="pl-c1">=</span> <span class="pl-s1">result</span> <span class="pl-c1">+</span><span class="pl-v">String</span><span class="pl-kos">(</span><span class="pl-s">`<span class="pl-s1"><span class="pl-kos">${</span><span class="pl-c1">2n</span><span class="pl-c1">-</span><span class="pl-c1">1</span><span class="pl-kos">}</span></span>`</span><span class="pl-kos">)</span>  <span class="pl-c">//이 부분이 동작하지 않습니다.</span>\n  <span class="pl-s1">n</span><span class="pl-c1">=</span><span class="pl-s1">n</span><span class="pl-c1">+</span><span class="pl-c1">1</span>\n <span class="pl-kos">}</span>\n <span class="pl-k">return</span> <span class="pl-s1">result</span>\n<span class="pl-kos">}</span></pre></div>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요.<br>\n<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String" rel="nofollow">https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String</a></p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/104156381?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APZof",
    createdAt: "2022-04-27T08:21:48Z",
    title: "NaN의 falsy값 여부 판단에서 오류가 나서 질문드립니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/12",
    author: "bruadarach",
    answer: {
      id: "DC_kwDOHOApLM4AKFvQ",
      createdAt: "2022-04-27T08:43:27Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/12#discussioncomment-2644944",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/bruadarach/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/bruadarach">@bruadarach</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁 입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은  NaN이 어째서 true로 빠지지 않고 false로 가는지에 대한 의문점이 생기셔서 주신 질문으로 확인되어지는데요 !</p>\n<p dir="auto">너무나도 좋은 질문이라고 생각되어집니다 .</p>\n<p dir="auto">콘솔창에 NaN === NaN 을 입력해보시면 어떤 결과가 나오는지 알고 계신가요 ?<br>\n신기하게도 false가 출력됩니다 !</p>\n<p dir="auto">즉, anything === NaN은 false입니다.</p>\n<p dir="auto">아래 MDN 문서에 자세하게 설명 되어 있으니 한 번 읽어보시길 추천드립니다 !</p>\n<p dir="auto"><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN" rel="nofollow">NaN</a></p>\n<p dir="auto">결국 NaN을 판별하기 위해서는 NaN을 판별하는 다른 함수가 필요합니다 !<br>\nMDN에도 판별 함수가 적혀져 있지만<br>\nhow to know if a variable is NaN in javascript 라는 검색어로 구글링으로 한 번 찾아보시는 것도 좋을 것 같습니다 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">(자바스크립트 기초제어문 Section1 - Unit3 - 조건문 17번 문제 관련 질문입니다.)</p>\n<p dir="auto">임의의 값을 입력받아 falsy값이면 true를 리턴하는 문제입니다.</p>\n<p dir="auto">falsy값에는 6가지 값들이 있다고 배웠습니다. (false, undefined, 0, null, "", NaN)<br>\n5개의 falsy값은 모두 true를 리턴하지만, NaN의 경우에는 계속 false를 리턴하여 테스트 통과가 되지 않더라고요.<br>\nNaN이 false를 리턴하는 이유가 궁금하여 질문을 드립니다.</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="function isFalsy(anything) {\n  if (anything === false || anything === undefined || anything === 0 || anything === null || anything === &quot;&quot; || anything === NaN  ) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nlet output = isFalsy(false);\nconsole.log(output); // --&gt; true\n\noutput = isFalsy(undefined);\nconsole.log(output); // --&gt; true\n\noutput = isFalsy(0);\nconsole.log(output); // --&gt; true\n\noutput = isFalsy(0=null);\nconsole.log(output); // --&gt; true\n\noutput = isFalsy(&quot;&quot;);\nconsole.log(output); // --&gt; true\n\noutput = isFalsy(NaN);\nconsole.log(output); // --&gt; false"><pre><span class="pl-k">function</span> <span class="pl-en">isFalsy</span><span class="pl-kos">(</span><span class="pl-s1">anything</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-s1">anything</span> <span class="pl-c1">===</span> <span class="pl-c1">false</span> <span class="pl-c1">||</span> <span class="pl-s1">anything</span> <span class="pl-c1">===</span> <span class="pl-c1">undefined</span> <span class="pl-c1">||</span> <span class="pl-s1">anything</span> <span class="pl-c1">===</span> <span class="pl-c1">0</span> <span class="pl-c1">||</span> <span class="pl-s1">anything</span> <span class="pl-c1">===</span> <span class="pl-c1">null</span> <span class="pl-c1">||</span> <span class="pl-s1">anything</span> <span class="pl-c1">===</span> <span class="pl-s">""</span> <span class="pl-c1">||</span> <span class="pl-s1">anything</span> <span class="pl-c1">===</span> <span class="pl-v">NaN</span>  <span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-k">return</span> <span class="pl-c1">true</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>\n    <span class="pl-k">return</span> <span class="pl-c1">false</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span>\n<span class="pl-kos">}</span>\n\n<span class="pl-k">let</span> <span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-en">isFalsy</span><span class="pl-kos">(</span><span class="pl-c1">false</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">output</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// --&gt; true</span>\n\n<span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-en">isFalsy</span><span class="pl-kos">(</span><span class="pl-c1">undefined</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">output</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// --&gt; true</span>\n\n<span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-en">isFalsy</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">output</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// --&gt; true</span>\n\n<span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-en">isFalsy</span><span class="pl-kos">(</span><span class="pl-c1">0</span><span class="pl-c1">=</span><span class="pl-c1">null</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">output</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// --&gt; true</span>\n\n<span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-en">isFalsy</span><span class="pl-kos">(</span><span class="pl-s">""</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">output</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// --&gt; true</span>\n\n<span class="pl-s1">output</span> <span class="pl-c1">=</span> <span class="pl-en">isFalsy</span><span class="pl-kos">(</span><span class="pl-v">NaN</span><span class="pl-kos">)</span><span class="pl-kos">;</span>\n<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-s1">output</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// --&gt; false</span></pre></div>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/55401378?s=64&u=9ef138579365bd13856792f624c418cf760453f3&v=4",
  },
  {
    id: "D_kwDOHOApLM4APZjR",
    createdAt: "2022-04-27T05:19:24Z",
    title:
      "Unit3 - [JavaScript] 기초 제어문, Chapter 2-2 실습 예시에 오타가 있는거 같습니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/11",
    author: "Gwanghyun-Jeon",
    answer: {
      id: "DC_kwDOHOApLM4AKHRW",
      createdAt: "2022-04-28T02:12:24Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/11#discussioncomment-2651222",
      author: "kimploo",
      bodyHTML:
        '<p dir="auto">안녕하세요! 교육 엔지니어 김홍식입니다.<br>\n해당 내용은 오탈자로 수정했습니다!</p>\n<p dir="auto">충분히 이해가 되셨다면, 이해한 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크<g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji> 해주세요 :)<br>\n감사합니다!</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    },
    bodyHTML:
      '<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/73211553/165445756-691ffae8-cbb8-4257-9098-df78c6d54e94.png"><img src="https://user-images.githubusercontent.com/73211553/165445756-691ffae8-cbb8-4257-9098-df78c6d54e94.png" alt="스크린샷, 2022-04-27 14-16-45" style="max-width: 100%;"></a></p>\n<p dir="auto">이 부분에서 str.split 이 alphabet.split 이 되어야 하는 것이 아닌가 해서 질문 올립니다!</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/73211553?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APZi2",
    createdAt: "2022-04-27T04:57:46Z",
    title: "크롬 콘솔에서 줄바꿈이 있는 csv를 인식하지 못합니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/10",
    author: "Gwanghyun-Jeon",
    answer: {
      id: "DC_kwDOHOApLM4AKFeD",
      createdAt: "2022-04-27T05:45:32Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/10#discussioncomment-2643843",
      author: "Citysquirrel",
      bodyHTML:
        '<p dir="auto">안녕하세요 <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/Gwanghyun-Jeon/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Gwanghyun-Jeon">@Gwanghyun-Jeon</a> 님!<br>\n코드스테이츠 교육 엔지니어 곽명우입니다 <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">문자열의 줄바꿈 인식이 안되는 문제를 겪고 계시네요. 자세히 설명하지는 않지만, 해당 강의 영상의 <strong>9분 12초</strong> 부분을 확인해보시면 짧게 어떤 문자를 사용한다고 되어있습니다. 따옴표( \' 와 " ) 대신 ` (백틱, 키보드 1 왼쪽에 있는 키)을 사용하는 문자열 표현 방법 입니다. 일반적인 문자열과는 조금 다른 성질을 가지고 있으나 일단 지금은 동일하게 문자열로 표시된다고 받아들이시면 됩니다. 명칭은 문자열 템플릿(Template Literal)입니다. 이후에 꽤 자주 사용하게 되실 수도 있는 문법입니다. 해당 내용에 대해서는 레퍼런스를 남겨드릴 테니 시간이 되신다면 한 번 읽어보시는 것도 좋을 듯합니다.</p>\n<p dir="auto"><a href="https://eblee-repo.tistory.com/38" rel="nofollow">블로그</a><br>\n<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals" rel="nofollow">MDN 문서</a></p>\n<p dir="auto">답변이 도움이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 Mark as answer를 눌러주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n추가 질문이 있으시거나 이해가 잘 안되신다면 꼭! 답글을 달아주세요.</p>\n<p dir="auto">감사합니다.<br>\n코드스테이츠 교육 엔지니어<br>\n곽명우 드림</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/86960007?s=64&u=4863a873d78f406d658e8a50d9b91f3045006920&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영 체제 : Ubuntu</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\n\'JavaScript 기초 - 문자열\' 챕터에서 강의를 똑같이 따라해보는 중에 제 컴퓨터에서만 다르게 인식해서 질문을 올리게 되었습니다.</p>\n<p dir="auto">[강의 영상]<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/73211553/165443516-f8c6a846-648c-4c12-aadd-6111927b6b1c.png"><img src="https://user-images.githubusercontent.com/73211553/165443516-f8c6a846-648c-4c12-aadd-6111927b6b1c.png" alt="스크린샷, 2022-04-27 13-54-08" style="max-width: 100%;"></a></p>\n<p dir="auto">[직접 해본 콘솔 창]<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/73211553/165443544-d0c3c8fb-fef3-498d-b805-0d97de77e387.png"><img src="https://user-images.githubusercontent.com/73211553/165443544-d0c3c8fb-fef3-498d-b805-0d97de77e387.png" alt="스크린샷, 2022-04-27 13-54-28" style="max-width: 100%;"></a></p>\n<p dir="auto">강의에서 나온 같은 사이트에 들어가서 복사/붙여넣기를 했는데도 보시는 것처럼 줄바꿈 인식이 안됩니다.<br>\n기본 설정이 잘못되어 있는건가요?</p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/73211553?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APY9u",
    createdAt: "2022-04-26T05:55:37Z",
    title:
      "문자열을 따옴표로 감싸지 않은 경우만 다른 에러메세지가 나오는 이유가 궁금합니다.",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/9",
    author: "ryan-kim-dev",
    answer: {
      id: "DC_kwDOHOApLM4AKD3S",
      createdAt: "2022-04-26T09:04:44Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/9#discussioncomment-2637266",
      author: "kimploo",
      bodyHTML:
        '<p dir="auto">안녕하세요! 교육 엔지니어 김홍식입니다.</p>\n<blockquote>\n<p dir="auto">문자열을 따옴표로 감싸지 않은 경우만 다른 에러메세지가 나오는 이유가 궁금합니다.</p>\n</blockquote>\n<p dir="auto"><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/12145019/165262937-6e0cf51b-8598-4f46-95d3-e425a4617846.png"><img src="https://user-images.githubusercontent.com/12145019/165262937-6e0cf51b-8598-4f46-95d3-e425a4617846.png" alt="스크린샷 2022-04-26 오후 5 57 43" style="max-width: 100%;"></a></p>\n<p dir="auto">위와 같은 에러를 말씀하시는 걸까요 ?.? 다음에는 다른 동기분 및 교육 엔지니어가 잘 답변할 수 있도록 에러 상황을 좀 더 구체적으로 보여주시면 답변이 수월합니다!</p>\n<p dir="auto">위 에러는 <code class="notranslate">I</code>를 하나의 매개변수로 파악해서 자바스크립트 문법 에러(SyntaxError)가 나서 코플릿에서 테스트 자체가 실행되지 않았고, 그에 따른 에러 메시지입니다. 여러 매개변수를 함수에서 사용하기 위해서는 <code class="notranslate">,</code>가 필요합니다.</p>\n<p dir="auto">답변이 도움이 되셨으면 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji>  부탁드립니다!</p>',
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    },
    bodyHTML:
      '<ul dir="auto">\n<li>\n<p dir="auto">운영 체제: macOS</p>\n</li>\n<li>\n<p dir="auto">Node.js 버전(node -v): -</p>\n</li>\n<li>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\n변수와 자료형 - 코플릿 06_callFunction</p>\n</li>\n<li>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요?<br>\n정답은 풀었습니다만, 일부러 타입에러를 일으켜 보고 있었는데 문자열을 따옴표로 감싸지 않은 경우만 다른 에러메세지가 나오는 이유가 궁금합니다.<br>\nexpect: \'wrong type\'<br>\noutput: Uncaught SyntaxError: missing ) after argument list</p>\n</li>\n<li>\n<p dir="auto">에러 코드를 붙여넣기 해 주세요.</p>\n</li>\n</ul>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let word = returnWordWithJoy(I love coding); // TODO\n\n// 아래 코드는 변경하지 마세요\nfunction returnWordWithJoy(word) {\n  if (typeof word !== \'string\') {\n    return \'wrong type\';\n  } else {\n    return word + \'!\';\n  }\n}"><pre><span class="pl-k">let</span> <span class="pl-s1">word</span> <span class="pl-c1">=</span> <span class="pl-en">returnWordWithJoy</span><span class="pl-kos">(</span><span class="pl-v">I</span> <span class="pl-s1">love</span> <span class="pl-s1">coding</span><span class="pl-kos">)</span><span class="pl-kos">;</span> <span class="pl-c">// TODO</span>\n\n<span class="pl-c">// 아래 코드는 변경하지 마세요</span>\n<span class="pl-k">function</span> <span class="pl-en">returnWordWithJoy</span><span class="pl-kos">(</span><span class="pl-s1">word</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n  <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-s1">word</span> <span class="pl-c1">!==</span> <span class="pl-s">\'string\'</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n    <span class="pl-k">return</span> <span class="pl-s">\'wrong type\'</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span> <span class="pl-k">else</span> <span class="pl-kos">{</span>\n    <span class="pl-k">return</span> <span class="pl-s1">word</span> <span class="pl-c1">+</span> <span class="pl-s">\'!\'</span><span class="pl-kos">;</span>\n  <span class="pl-kos">}</span>\n<span class="pl-kos">}</span></pre></div>\n<ul dir="auto">\n<li>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</li>\n</ul>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="let word = returnWordWithJoy(I love coding);"><pre><span class="pl-k">let</span> <span class="pl-s1">word</span> <span class="pl-c1">=</span> <span class="pl-en">returnWordWithJoy</span><span class="pl-kos">(</span><span class="pl-v">I</span> <span class="pl-s1">love</span> <span class="pl-s1">coding</span><span class="pl-kos">)</span><span class="pl-kos">;</span></pre></div>\n<ul dir="auto">\n<li>검색했던 링크가 있다면 첨부해 주세요.<br>\n<a href="https://www.zerocho.com/category/JavaScript/post/57374a46d85eeb9409de56ea" rel="nofollow">https://www.zerocho.com/category/JavaScript/post/57374a46d85eeb9409de56ea</a></li>\n</ul>\n<p dir="auto"><a href="https://www.google.com/search?q=%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84+%EB%94%B0%EC%98%B4%ED%91%9C%EB%A1%9C+%EC%95%88+%EA%B0%90%EC%8B%B8%EB%A9%B4+%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&amp;rlz=1C5CHFA_enKR981KR981&amp;oq=%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84+%EB%94%B0%EC%98%B4%ED%91%9C%EB%A1%9C+%EC%95%88+%EA%B0%90%EC%8B%B8%EB%A9%B4+%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&amp;aqs=chrome..69i57j0i546l5.13956j1j7&amp;sourceid=chrome&amp;ie=UTF-8" rel="nofollow">https://www.google.com/search?q=%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84+%EB%94%B0%EC%98%B4%ED%91%9C%EB%A1%9C+%EC%95%88+%EA%B0%90%EC%8B%B8%EB%A9%B4+%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&amp;rlz=1C5CHFA_enKR981KR981&amp;oq=%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84+%EB%94%B0%EC%98%B4%ED%91%9C%EB%A1%9C+%EC%95%88+%EA%B0%90%EC%8B%B8%EB%A9%B4+%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8&amp;aqs=chrome..69i57j0i546l5.13956j1j7&amp;sourceid=chrome&amp;ie=UTF-8</a></p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/78180055?s=64&u=e9042943147b7659cf195acf50b6e02777e64761&v=4",
  },
  {
    id: "D_kwDOHOApLM4APYU2",
    createdAt: "2022-04-25T07:45:22Z",
    title: "typeof 강의중 ()가 빠져있는 것일까요?",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/7",
    author: "namwonjae",
    answer: {
      id: "DC_kwDOHOApLM4AKBjx",
      createdAt: "2022-04-25T08:10:47Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/7#discussioncomment-2627825",
      author: "kwd8905",
      bodyHTML:
        '<p dir="auto"><a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/namwonjae/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/namwonjae">@namwonjae</a> 님 안녕하세요!<br>\n코드스테이츠 교육 엔지니어 곽운도입니다. 🙌🏻</p>\n<p dir="auto">콘텐츠 오류를 신속하게 제보해 주셔서 감사 드립니다!<br>\n말씀해 주신 내용은 현재 정정 완료하였습니다.</p>\n<p dir="auto">다시 한 번 감사드립니다.</p>\n<p dir="auto">코드스테이츠 교육 엔지니어<br>\n곽운도 드림</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79880249?s=64&v=4",
    },
    bodyHTML:
      '<p dir="auto">운영체제: macOS</p>\n<p dir="auto">수업을 진행 중 typeof을 배웠습니다.<br>\ntypeof 변수는 타입의 성질을 알려주는 것으로 이해했습니다.<br>\n수업에서는</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="console.log(typeof 1) // ----- (1)\nconsole.log(typeof \'1\') // ----- (2)\nconsole.log(typeof 1 &lt; 2) // ----- (3)\nVM67:1 number\nVM67:2 string\nVM67:3 false "><pre><span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-c1">1</span><span class="pl-kos">)</span> <span class="pl-c">// ----- (1)</span>\n<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-s">\'1\'</span><span class="pl-kos">)</span> <span class="pl-c">// ----- (2)</span>\n<span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-c1">1</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">2</span><span class="pl-kos">)</span> <span class="pl-c">// ----- (3)</span>\nVM67:<span class="pl-c1">1</span> <span class="pl-s1">number</span>\nVM67:<span class="pl-c1">2</span> <span class="pl-s1">string</span>\nVM67:<span class="pl-c1">3</span> <span class="pl-c1">false</span> </pre></div>\n<p dir="auto">VM67:1 number<br>\nVM67:2 string<br>\n<strong>VM67:3 false // &lt;- 이거 왜 false 임?</strong> &lt;이 부분이 이해가 안됐습니다. 이리저리 검색해보니 괄호를 넣으면 될 것 같았습니다.&gt;<br>\n괄호로 묶어야 한다.</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="console.log(typeof (1 &lt; 2))\nVM162:1 boolean"><pre><span class="pl-smi">console</span><span class="pl-kos">.</span><span class="pl-en">log</span><span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-kos">(</span><span class="pl-c1">1</span> <span class="pl-c1">&lt;</span> <span class="pl-c1">2</span><span class="pl-kos">)</span><span class="pl-kos">)</span>\nVM162:<span class="pl-c1">1</span> <span class="pl-s1">boolean</span></pre></div>\n<p dir="auto">VM162:1 boolean &lt;괄호를 넣으니 boolean 으로 정확하게 타입이 나왔습니다. 수업에는 false로 나와있어서 동기들도 헷갈릴 수 있을 것 같습니다.&gt;</p>\n<p dir="auto">수업의도를 제가 잘못 이해한 것일지도 모르는데 위와 같은 것 같아서 처음으로 올려봅니다. 사진도 같이 올려봤습니다.<br>\n문제가 있으면 바로 수정하겠습니다.<br>\n<a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/96907839/165042588-f2137d66-6893-408e-8119-7ec8c3c6867f.png"><img width="370" alt="Screen Shot 2022-04-25 at 4 37 02 PM" src="https://user-images.githubusercontent.com/96907839/165042588-f2137d66-6893-408e-8119-7ec8c3c6867f.png" style="max-width: 100%;"></a></p>',
    avatarUrl: "https://avatars.githubusercontent.com/u/96907839?s=64&v=4",
  },
  {
    id: "D_kwDOHOApLM4APXZy",
    createdAt: "2022-04-22T17:47:35Z",
    title: "[notice] 좋은 답변하는 법",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/6",
    author: "kimploo",
    answer: null,
    bodyHTML:
      '<h2 dir="auto">수강생/수료생의 좋은 답변을 환영합니다.</h2>\n<h2 dir="auto">왜 좋은 답변을 할 줄 알아야 하나요?</h2>\n<h3 dir="auto">실력이 뛰어난 개발자는 정확하게 답변하기 때문입니다.</h3>\n<blockquote>\n<p dir="auto">... there also were less expected findings. In particular, the importance of social skills was highlighted, even for so technical a task as code reading.<br>\n(잘 알려진 바와 다르게,) 기대한 것과 다른 연구 결과를 찾을 수도 있었다. 특이하게도, 코드 해석과 같은 아주 기술적인 업무에서도 사회적 스킬의 중요성이 강조되었다.</p>\n<ul dir="auto">\n<li><a href="https://link.springer.com/chapter/10.1007/BFb0024298" rel="nofollow">What we have learned about software engineering expertise</a></li>\n</ul>\n</blockquote>\n<p dir="auto">좋은 질문하는 방법과 같은 인용문입니다. 소프트웨어 개발 전문가에 대한 많은 연구에서는 개발자의 사회적인 측면을 강조합니다. 자기가 잘 모르는 내용에 대해서 부드럽게 물어볼 수 있고, 동료나 후배 개발자에게 자기가 아는 내용에 대해서 긍정적인 피드백을 줄 수 있는 개발자가 실제 성과도 뛰어납니다. 답변에도 똑같이 적용되는 사례죠? 여러분의 동기나 후배 수강생들이 보고 배울 수 있을 만한 좋은 답변을 작성해봅시다.</p>\n<h3 dir="auto">내가 진짜 잘 아는지 확인할 수 있기 때문입니다.</h3>\n<p dir="auto">해외 유명 커뮤니티 Reddit에는 <a href="https://www.reddit.com/r/explainlikeimfive/" rel="nofollow">ELI5(Explain Like I\'m Five)라는 공간</a>이 있습니다. "내가 5살이라고 생각하고, 나에게 설명을 해줄레?"라는 의미인데요. 유머러스한 내용도 많이 있지만, 정말 유용한 답변도 찾을 수 있습니다. 이제 막 언어를 알게 된 아이에게 전문 지식을 설명해야 하는 경우, 전문 용어를 전부 배제하고 설명해야 합니다. 그렇게 설명하면 설명할수록 신기하게도 질문의 핵심과 관련된 이야기만 하게 됩니다.</p>\n<p dir="auto">여러분도 이제 처음 개발을 학습하는 동료가 이해할 수 있기 쉽게 설명하려고 노력하다가 보면, 어느새 성장한 여러분의 모습을 발견하게 될 것입니다.</p>\n<h3 dir="auto">면접장에서 승리해야 하기 때문입니다.</h3>\n<p dir="auto">사실 아고라 스테이츠 질문에 대한 답변은 면접장에서 답변과 유사한 면이 많습니다. 해당 개념에 대해서 자기가 얼마나 아는지 돌아보게 되고, 정확하게 알지 못하는 내용에 대해서는 "아, 내가 부족했으니 더 공부해야겠다."라는 마음을 가지게 됩니다. 면접장에서 실패하기보다는, 더 빨리 아고라 스테이츠에서 답변을 해보고, 내가 모르는 것이 무엇이었는지 점검하고, 더 잘 설명하는 연습을 해보기를 권장합니다.</p>\n<h2 dir="auto">좋은 답변 하는 방법</h2>\n<h3 dir="auto">질문을 꼼꼼히 읽고 문제의 핵심을 파악하고 답변합니다.</h3>\n<p dir="auto">좋은 답변도 좋은 질문을 하는 방법과 비슷합니다. 우선 상대방이 무엇을 궁금해하는지 파악하는 게 우선입니다. 질문을 차근차근 읽어보고 질문자가 무엇을 궁금해하는지 파악하고 답변해주세요.</p>\n<p dir="auto">문제의 핵심을 파악하기 어려울 수 있습니다. 그런 경우에는, 최대한 합리적인 가정을 몇 개 세우고 답변하려고 노력하세요.</p>\n<p dir="auto">좋은 답변 예시</p>\n<blockquote>\n<p dir="auto">xxx 오류는 이미 검색해보셔서 아시겠지만, 다음의 경우입니다. 제가 찾아본 stack overflow 답변을 인용하면 다음과 같습니다.</p>\n<ol dir="auto">\n<li>이러이러하기 때문</li>\n<li>저러저러하기 때문</li>\n</ol>\n<p dir="auto">질문을 보니 정황상 이러이러한 근거 때문에 1번은 아니네요. 그렇다면 2번과 관련된 xxx 설정을 어떻게 하셨나요?<br>\n(혹은, 2번에 왜 설정을 이렇게 하셨나요? 해당 설정이 무엇을 의미하는지 알고 계시는가요? → 레퍼런스 첨부)<br>\n이 부분을 해결하거나 혹은 여전히 어려우시다면 추가로 시도해보신 내용을 댓글로 달아주실 수 있을까요?</p>\n</blockquote>\n<h3 dir="auto">문제에 대한 정답만 적기보다는, 정답인 이유를 구체적으로 작성해주세요.</h3>\n<p dir="auto">질문자도 대부분 정답은 알고 있는 경우가 많습니다. 정답은 알지만, 개발 관련 개념에 대해서 더 잘 알기 위해서 질문하는 거겠죠? 그렇기 때문에, 정답을 적어주더라도 그 정답이 왜 정답인지 구체적으로 설명해주셔야 합니다.</p>\n<h3 dir="auto">객관적인 근거를 기반으로 답변합니다.</h3>\n<p dir="auto">자신의 생각과 추측에 기반한 답변은 질문자의 학습을 방해합니다. 내 생각이 맞는지 아닌지 계속 고민해보세요.</p>\n<h3 dir="auto"><a href="https://urclass.codestates.com/ac48d91c-b83d-49f5-8450-6cef4401e38d?playlist=1812" rel="nofollow">코드스테이츠 커뮤니티 규정</a>을 잘 이해하고 실천해주세요.</h3>\n<p dir="auto">사람은 사람 간에 소통하면서 배울 수 있습니다. 대화하면서 배우고 성장할 수 있다는 것 자체로 축복받으신 겁니다! 하지만 안타깝게도 아직 우리 사회에는 날카로운 송곳같이 마음의 상처를 주는 대화가 많습니다. 이런 대화는 서로 간의 소통을 줄이고 성장을 가로막습니다. <a href="https://urclass.codestates.com/ac48d91c-b83d-49f5-8450-6cef4401e38d?playlist=1812" rel="nofollow">코드스테이츠 커뮤니티 규정</a>에는 서로에게 더 도움을 줄 수 있는 소통 원칙에 대해서 다루고 있습니다. 아고라 스테이츠 이용 시에도 이 원칙을 따릅니다. 특히 제 5조 핵심 원칙을 다시 한번 강조합니다.</p>\n<blockquote>\n<p dir="auto">제 5조. 핵심 원칙 지키기</p>\n<ol dir="auto">\n<li>코드스테이츠 커뮤니티는, 모든 공동체 ‘구성원’들을 따뜻하게 포용해요.</li>\n</ol>\n<p dir="auto">코드스테이츠 커뮤니티 기준은 모두가 참여할 수 있는 커뮤니티를 위해 ‘구성원’들이 지켜야 하는 최소한의 약속이며, 다음을 모두 지향하고 있습니다.</p>\n<p dir="auto">가. 성별, 성 정체성, 국적, 지역, 종교, 나이, 사회적 신분, 학력, 지식 수준, 외모, 장애, 음식 선호 등과 관계 없이 동등한 자격으로 커뮤니티 행사에 참여하는 것<br>\n나. 서로 따뜻하게 환영하는 분위기<br>\n다. 서로 다름을 인정하고 존중하는 분위기<br>\n라. 누구나 편안하게 참여하고 의견을 낼 수 있는 커뮤니티 행사</p>\n<ol start="2" dir="auto">\n<li>모든 구성원들을 포용하는 것이 중요한 이유.</li>\n</ol>\n<p dir="auto">코드스테이츠 커뮤니티 팀은, 다양성을 존중하고 따뜻하게 배려하는 것이 코드스테이츠 ‘공동체’와 우리 사회 모두를 더 건강하고 올바르게 만드는 출발점이라고 생각합니다. 어려운 문제에 대한 해결책을 서로 찾아주고, ‘공동체’가 함께 성장하여 더 많은 사람들이 긍정적인 변화를 이끌기 위해서는 다양한 시각과 의견은 필수입니다. 반대로, 이러한 시각과 의견을 듣기 위해서는 다양성을 존중하고 배려하는 따뜻한 마음에서 시작됩니다.</p>\n<ol start="3" dir="auto">\n<li>\n<p dir="auto">커뮤니티 기준의 의도, 목적을 이해해주세요.<br>\n커뮤니티 기준이, 코드스테이츠 ‘공동체’ 및 ‘구성원’들이 따르거나 해서는 안 되는 내용들이 모두 포함돼있는 것은 아닙니다. 하지만, 커뮤니티 기준 각 항목의 의도와 목적을 자세히 이해하시면 어떻게 해야 구성원 서로에게 잘 소통할 수 있을지 도움이 될 것입니다.</p>\n</li>\n<li>\n<p dir="auto">‘구성원’ 여러분들은, 모두 코드스테이츠를 대표하고 있어요.</p>\n</li>\n</ol>\n<p dir="auto">여러분들은, 코드스테이츠를 대표하는 커뮤니티 공동체 ‘구성원’ 입니다. 구직과 취업 후 재직을 하는 과정에서도 표현과 행동을 항상 주의해야 합니다. 하나의 잘못된 말이나 행동은 코드스테이츠 브랜드 이미지에 부정적인 영향을 주고, 열심히 구직과 일을 하고 있는 모든 ‘공동체’에게 피해로 돌아올 수 있다는 점을 꼭 기억해주시기 바랍니다.</p>\n</blockquote>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  },
  {
    id: "D_kwDOHOApLM4APXTV",
    createdAt: "2022-04-22T14:09:14Z",
    title: "[notice] 질문 예시",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/5",
    author: "kimploo",
    answer: null,
    bodyHTML:
      '<h2 dir="auto">질문하는 방법 예시</h2>\n<p dir="auto">제목: 함수를 실행했을 때 undefined만 반환됩니다. 콘솔에 찍으면 답은 잘 나와요.</p>\n<p dir="auto">내용:</p>\n<ul dir="auto">\n<li><strong>운영 체제:</strong> 예) macOS</li>\n<li><strong>노드 버전(node -v):</strong> 예) v14.16.0</li>\n<li><strong>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</strong><br>\n예) 문자열 코플릿 1번을 풀고 있습니다.<br>\n인자 2개(이름, 성)를 입력받아서 두 개의 문자열을 붙이되, 중간에 띄어쓰기를 작성해야 합니다.</li>\n</ul>\n<p dir="auto">인자 2개가 문자열인지 확인한 다음 맞는다면, 인자 1 + \' \' + 인자 2라고 작성했는데 계속 <strong>undefined</strong>가 나옵니다.</p>\n<ul dir="auto">\n<li><strong>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</strong><br>\n예) 코드에 undefined가 아니면 반환하라고 조건을 더 붙였는데 똑같이 나옵니다.<br>\n디버깅을 하려고 console.log를 사용했는데, 값은 제대로 뜹니다.<br>\nconsole.log를 지우면 계속 undefined가 떠요.</li>\n</ul>\n<p dir="auto">에러 코드를 구글링 해 보니 undefined는 string이 아니라는 답변이 나옵니다.<br>\n제가 어디를 놓치고 있는 것일까요?</p>\n<ul dir="auto">\n<li>\n<p dir="auto"><strong>에러 코드를 붙여넣기 해 주세요.</strong><br>\nAssertionError: expected \'undefined\' to equal \'string\'<br>\nat Context. (/submission/index.test.js:20:59)<br>\nat processImmediate (internal/timers.js:456:21) ...</p>\n</li>\n<li>\n<p dir="auto"><strong>어떠한 부분에서 이해가 안 되었나요?</strong><br>\nconsole.log로 값을 찍으면 원하는 값으로 나오는데,<br>\nconsole.log를 빼고 값을 반환하려고 하면 undefined가 나옵니다.</p>\n</li>\n<li>\n<p dir="auto"><strong>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</strong></p>\n</li>\n</ul>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="\nfunction getFullName(firstName, lastName) {\n\tif(typeof firstName !== undefined &amp;&amp; typeof lastName !== undefined) {\n\t\tfirstName + \' \' + lastName;\n\t\t// console.log(firstName + \' \' + lastName) 얘는 잘 나와요\n\t}\n}"><pre><span class="pl-k">function</span> <span class="pl-en">getFullName</span><span class="pl-kos">(</span><span class="pl-s1">firstName</span><span class="pl-kos">,</span> <span class="pl-s1">lastName</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n\t<span class="pl-k">if</span><span class="pl-kos">(</span><span class="pl-k">typeof</span> <span class="pl-s1">firstName</span> <span class="pl-c1">!==</span> <span class="pl-c1">undefined</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-s1">lastName</span> <span class="pl-c1">!==</span> <span class="pl-c1">undefined</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>\n\t\t<span class="pl-s1">firstName</span> <span class="pl-c1">+</span> <span class="pl-s">\' \'</span> <span class="pl-c1">+</span> <span class="pl-s1">lastName</span><span class="pl-kos">;</span>\n\t\t<span class="pl-c">// console.log(firstName + \' \' + lastName) 얘는 잘 나와요</span>\n\t<span class="pl-kos">}</span>\n<span class="pl-kos">}</span></pre></div>\n<ul dir="auto">\n<li><strong>검색했던 링크가 있다면 첨부해 주세요.</strong><br>\n<a href="https://stackoverflow.com/questions/51603051/javascript-functions-return-undefined" rel="nofollow">https://stackoverflow.com/questions/51603051/javascript-functions-return-undefined</a></li>\n</ul>\n<hr>\n<h2 dir="auto">잘못된 예시</h2>\n<p dir="auto">제목: 문자열 코플릿 10번 안 돼요</p>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/59815596/113249242-55dd2380-92f9-11eb-9a5a-d6c9912b936f.png"><img width="409" alt="스크린샷 2021-04-01 오후 2 48 24" src="https://user-images.githubusercontent.com/59815596/113249242-55dd2380-92f9-11eb-9a5a-d6c9912b936f.png" style="max-width: 100%;"></a></p>\n<p dir="auto">해 봤는데 안되네요. 이유가 뭘까요? 알려주세요. ㅠㅠ 이것 때문에 밤새웠어요..</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  },
  {
    id: "D_kwDOHOApLM4APXTS",
    createdAt: "2022-04-22T14:08:33Z",
    title: "[notice] 좋은 질문하는 법",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/4",
    author: "kimploo",
    answer: null,
    bodyHTML:
      '<blockquote>\n<p dir="auto">Table of Contents</p>\n<ul dir="auto">\n<li>왜 좋은 질문을 할 줄 알아야 하나요?\n<ul dir="auto">\n<li>실력이 뛰어난 개발자는 잘 질문하기 때문입니다.</li>\n</ul>\n</li>\n<li>좋은 질문하는 방법\n<ul dir="auto">\n<li>질문하기 전에 먼저 검색하자!</li>\n<li>내 문제를 설명하는 키워드를 찾자!</li>\n<li>일단 질문하세요. JUST ASK!</li>\n<li>질문에 좋은 제목을 달자!</li>\n<li>코드를 붙여넣기 전에 현재 상황을 먼저 설명하자!</li>\n<li>당신이 처해 있는 문제를 다른 사람이 재연할 수 있도록 정보를 제공하자!</li>\n</ul>\n</li>\n<li>질문자로서 해야 할 마지막 임무\n<ul dir="auto">\n<li>만약 누군가 당신의 질문에 도움을 주었다면, 그 답변으로 인해 문제를 어떻게 해결했는지 서술하고 진심으로 감사를 전하세요.</li>\n</ul>\n</li>\n</ul>\n</blockquote>\n<h2 dir="auto">왜 좋은 질문을 할 줄 알아야 하나요?</h2>\n<h3 dir="auto">실력이 뛰어난 개발자는 잘 질문합니다.</h3>\n<blockquote>\n<p dir="auto">... there also were less expected findings. In particular, the importance of social skills was highlighted, even for so technical a task as code reading.<br>\n(잘 알려진 바와 다르게,) 기대한 것과 다른 연구 결과를 찾을 수도 있었다. 특이하게도, 코드 해석과 같은 아주 기술적인 업무에서도 사회적 스킬의 중요성이 강조되었다.</p>\n<ul dir="auto">\n<li><a href="https://link.springer.com/chapter/10.1007/BFb0024298" rel="nofollow">What we have learned about software engineering expertise</a></li>\n</ul>\n</blockquote>\n<p dir="auto">많은 미디어에서 개발자는 골방에서 컴퓨터만 바라보다가 뭔가 해내는 모습으로 비칩니다. 하지만 소프트웨어 개발 전문가에 대한 많은 연구에서는 개발자의 사회적인 측면을 강조합니다. 자기가 잘 모르는 내용에 대해서 부드럽게 물어볼 수 있고, 동료나 후배 개발자에게 자기가 아는 내용에 대해서 긍정적인 피드백을 줄 수 있는 개발자가 실제 성과도 뛰어납니다. 여러분도 마찬가지로 질문할 용기를 가져야 합니다. 모르는 것은 부끄러운 게 아닙니다. 모르는 것을 질문하는 게 부끄러워서 넘어가는 것이 부끄러운 것입니다.</p>\n<h3 dir="auto">실력이 뛰어난 개발자가 되기 위해, 좋은 질문하는 방법을 배웁시다.</h3>\n<p dir="auto">개발 관련 기술은 시시각각으로 변화하고, 개발자는 계속 학습해야 합니다. 10년 차 개발자가 되어도 계속 모르는 게 생기기 때문에 <strong>좋은 질문하는 법</strong>을 익혀야 합니다. 슈퍼 개발자로의 폭발적인 성장을 위해, 커리큘럼 진행하는 동안, 이 질문하는 방법을 자주 읽고 숙달하시기 바랍니다.</p>\n<h2 dir="auto">좋은 질문하는 방법 1: 질문하기 전에 먼저 검색하자!</h2>\n<h3 dir="auto">검색은 좋은 질문의 시작입니다.</h3>\n<p dir="auto">"내 온전한 실력으로 모든 문제를 해결할 거야!"라고 생각하는 분이 계시는가요? 아쉽지만 더 느린 길을 선택하셨습니다.<br>\n왜 더 느린 길일까요?</p>\n<blockquote>\n<p dir="auto">Don\'t reinvent the wheel.<br>\n이미 발명된 바퀴를 다시 발명할 필요가 없다.</p>\n</blockquote>\n<p dir="auto">여러분들이 겪는 문제는 전 세계의 선배 개발자들이 이미 고민하고 해결된 문제입니다. 검색하고 학습하는 방법에 익숙해지면 직접 문제 해결하는 시간보다, 검색하여 문제를 해결하는 시간이 훨씬 빨라질 겁니다.</p>\n<h3 dir="auto">검색으로 자신의 문제점을 더 정확하게 찾을 수 있습니다.</h3>\n<p dir="auto">개발 학습을 하다가 보면, "도대체 뭐가 잘못된 것인지도 모르겠다..."라는 생각이 드실 때가 있을 겁니다. 이제 처음 배우는 단계라서 모르는 것은 당연합니다. 선배 개발자들도 마찬가지입니다. 이미 여러분과 같은 "도대체 뭐가 잘못된 것인지도 모르겠다..."부터 시작해서 해답을 찾았을 것입니다.</p>\n<p dir="auto">문제 해결을 위해 검색하다가 보면 이런 선배 개발자들의 고민 흔적을 찾아볼 수 있습니다. 그 고민의 여정을 함께 경험하고 여러분도 같이 배우실 수 있습니다. 특히, 내 질문과 똑같은 질문인지 아닌지 파악하는 과정에서 "아! 내가 겪고 있는 문제가 이거구나!"라는 깨달음을 얻을 수도 있습니다. 문제점을 잘 알았으니 더 나은 질문도 할 수 있겠죠?</p>\n<h2 dir="auto">좋은 질문하는 방법 2: 내 문제를 설명하는 키워드를 찾자!</h2>\n<h3 dir="auto">내 문제를 한 번에 설명할 수 있는 \'그 단어\'를 찾자!</h3>\n<p dir="auto">검색을 통해서 해답을 바로 얻기 어려울 수 있습니다. 그러나, <strong>더 나은 질문 키워드</strong>를 얻어낼 수 있습니다.</p>\n<p dir="auto">자기 상황을 설명하기 어려운 경우가 종종 발생합니다. 충분히 이해합니다. 이 상황을 표현할 수 있는 한 단어가 있을 겁니다. 그러나 여러분은 당연히 모를 것입니다. 배운 적이 없기 때문입니다. 그러므로 그 키워드를 얻기 위해서 여러분은 현재 상황을 여러 각도로 검색해 봐야 합니다.</p>\n<p dir="auto">\'그 단어\'를 아는 사람은 더 빨리 검색하거나 질문할 수 있습니다. 그러나 우리는 그것을 모르기 때문에 찾아내는 연습부터 해야 합니다. 키워드를 찾아내면 더 나은 질문을 빠르게 할 수 있고 그 경험치를 통해서 더 좋은 질문을 할 수 있는 실력을 갖추게 됩니다. 이를 반복하면, 여러분은 코드를 붙이지 않고서도 키워드를 포함한 질문만으로 답변을 얻어낼 수 있는 경지가 올 것입니다.</p>\n<h3 dir="auto">\'그 단어\' 찾기 팁</h3>\n<p dir="auto">Tip 1 : 검색 포털은 \'구글\'을 이용하세요! 주로 이용하는 네**나 다* 같은 대형 검색 포털은 이용자의 다수가 한국에 국한되어 있지만 구글은 전 세계를 대상으로 답변을 찾을 수 있습니다.</p>\n<p dir="auto">Tip 2: 마법의 단어 <strong>how to</strong>로 구글 검색을 시작해 보세요.</p>\n<p dir="auto">ex)</p>\n<ul dir="auto">\n<li>how to resolve 404 error in github</li>\n<li>how to use for-each loop in java</li>\n<li>how to implement infinite scroll in thymeleaf</li>\n</ul>\n<p dir="auto">Tip 3: 두 개념의 차이를 알고 싶으면 <strong>difference between A and B</strong>로 구글 검색을 시작해 보세요.</p>\n<p dir="auto">ex)</p>\n<ul dir="auto">\n<li>difference between let and const</li>\n<li>difference between function expression and function declaration</li>\n</ul>\n<p dir="auto">Tip 4. 영어를 수월하게 하지 못한다고 두려워하지 마세요, 꼭 완벽한 문법이 아니더라도 적절한 키워드들이 조합된다면, 충분히 이후의 검색 방향을 발견할 수 있습니다.</p>\n<h2 dir="auto">좋은 질문하는 방법 3: 일단 질문하세요. JUST ASK!</h2>\n<p dir="auto">동방예의지국인 우리나라 사람 대부분은 질문하는 것이 어렵습니다. 정확하게 뭘 알아야만 질문할 수 있고, 질문의 수준도 높아야 할 것만 같고... 하지만, 이제부터 적어도 개발 관련 질문에 있어서는 질문하려고 노력해봅시다.</p>\n<h3 dir="auto">질문하기가 어려워요.</h3>\n<p dir="auto">개발을 처음 학습하는 분들 대부분이 질문하기가 어렵다고 합니다. 왜 그럴까요?</p>\n<ol dir="auto">\n<li><strong>내가 현재 겪고 있는 문제의 상황을 설명하기가 쉽지 않다.</strong></li>\n</ol>\n<p dir="auto">영어로 따지면 아직 "I\'m a boy"도 모르고, 주어와 동사의 차이도 구분할 수 없는 단계입니다. 영어 문장의 요소에 대해서 아직 설명할 수 있는 능력도 부족하고 해당 요소를 뭐라고 부르는지도 모르는 상황에서 질문을 하기는 어렵습니다.</p>\n<p dir="auto">그래서 우선 기초 학습에 충실하고, 암기할 내용이 있으면 암기하고, 처음 나오는 기술 용어가 어떤 문맥에서 쓰이는지 제대로 파악하는 게 중요합니다. 그래야 지금의 문제를 잘 표현할 수 있겠죠.</p>\n<ol start="2" dir="auto">\n<li><strong>질문하기가 두렵다.</strong></li>\n</ol>\n<p dir="auto">이 부분은 단호하게 말씀드리면, 두려워하지 않으셔야 합니다. 완벽한 질문을 기다리기 보다는 불완전한 질문을 여러 번 해보는 게 더 빠르게 좋은 질문을 하는 방법입니다.</p>\n<p dir="auto">만약 여러분의 정성을 들이지 않은 질문에 책망의 답변이 온다면, 그 사람을 미워하지 말기를 바랍니다. 이를 받아들이고, 본인을 발전시키는 데 밑거름으로 쓰려는 자세를 가지기를 바랍니다. 질문을 어떻게 정성 들여 작성해야 할지 모르겠다면, <strong>틀릴 수 있는 용기를</strong> 반드시 가져야 합니다.</p>\n<ol start="3" dir="auto">\n<li><strong>질문하는 것 자체가 너무 번거롭거나, 아니면 내 질문으로 남을 귀찮게 하고 싶지 않다.</strong></li>\n</ol>\n<p dir="auto">좋은 개발자의 덕목을 다시 한번 기억해주시기를 바랍니다. 높은 성과를 내는 개발자는 단지 해당 기술에 대해서 깊게 알고 능숙하게 다루는 것만 잘 하지 않습니다. 동료나 후배가 자기와 함께 더 높은 성과를 낼 수 있게 잘 듣고, 발전적인 피드백을 줍니다. 자기가 잘 모르는 것을 부끄러워하지 않고, 좋은 질문을 합니다. 좋은 질문을 고민하는 과정에서 성장합니다.</p>\n<p dir="auto">폭발적인 성장을 위해서 꼭 필요한 과정이라고 생각해주시고, 질문해주시기를 바랍니다. 뒤로 미루기만 하면 당신은 빠르게 성장하지 못하게 됩니다. <strong>이 세상에 바보 같은 질문은 없습니다. Learn by Questioning!</strong></p>\n<h2 dir="auto">좋은 질문하는 방법 4: 질문에 좋은 제목을 달자!</h2>\n<h3 dir="auto">좋은 질문의 첫 번째 조건은, 좋은 제목입니다.</h3>\n<p dir="auto">제목에 에러 로그를 그대로 집어넣는 사람이 있습니다.<br>\n반면에 제목만 보고도 답변을 달 수 있는 좋은 네이밍을 가진 제목이 있습니다.</p>\n<p dir="auto">예를 하나 보겠습니다.</p>\n<ul dir="auto">\n<li><strong>Bad :  "코플릿 알고리즘 00번 질문입니다."</strong><br>\n답변자는 여러분이 어떤 문제를 풀고 있는지 알 필요가 없습니다.<br>\n어떤 것을 질문할지도 예상할 수 없는 제목입니다.</li>\n<li><strong>Good : "array의 reduce 메서드 사용 시 accumulator 인자의 작동이 이해되지 않습니다."</strong><br>\n제목만 보고도 어떤 답을 해 줘야 할지 판단이 됩니다.</li>\n</ul>\n<h3 dir="auto">바쁜 동료에게 물어본다고 생각하고 질문을 작성하세요.</h3>\n<p dir="auto">그 누구도 5, 6개 문단으로 이루어진 논문 같은 질문 글을 한 시간 동안 앉아서 봐 줄 사람은 없습니다.<br>\n앞으로도 없고, 영원히 없을 겁니다.<br>\n지나치게 길게 쓰는 것도 좋지 않습니다. 질문 포인트를 쉽게 잃어버릴 수 있기 때문입니다.<br>\n본인이 명확하게 모르는 부분에 대해서 스스로 <strong>퇴고</strong>해야 합니다.</p>\n<p dir="auto">만약 당장 여러분의 질문을 요약하는 데 어려움이 있다면, 먼저 글을 작성한 후에, 나중에 제목을 써도 좋습니다.<br>\n오히려 글 내용을 바탕으로 질문을 작성하는 좋은 연습이 될 것입니다.</p>\n<h2 dir="auto">좋은 질문하는 방법 5: 코드를 붙여넣기 전에 현재 상황을 먼저 설명하자!</h2>\n<p dir="auto"><strong>여러분의 상황은 두 가지 정보를 통해 전달할 수 있습니다.</strong></p>\n<ol dir="auto">\n<li>내가 문제 해결을 위해 시도한 흔적</li>\n<li>그 시도들로 인해 얻은 오답</li>\n</ol>\n<p dir="auto">질문으로 진입하기 전, Intro가 필요합니다.<br>\n내 상황을 이해시키는 과정이 있어야 답변자가 그 의도를 더 빠르게 파악하고 키워드나 답변을 제공할 수 있습니다.</p>\n<h2 dir="auto">좋은 질문 하는 방법 6. 당신이 처해 있는 문제를 다른 사람이 재연할 수 있도록 정보를 제공하자!</h2>\n<p dir="auto">여러분이 처한 상황을 설명하기가 굉장히 까다로울 때가 있습니다.<br>\n<strong>그렇다면 문제 상황을 재연할 수 있도록 정보를 제공해야 합니다.<br>\n전체 코드를 올리라는 말이 절대 아닙니다.<br>\n더군다나, 코드 이미지 캡처는 더더욱 아닙니다. 이미지는 코드를 드래그해서 복사할 수 없기 때문에 재연이 매우 힘듭니다.</strong></p>\n<p dir="auto">코드 작성 시, <strong>code snippet</strong>을 활용합니다. (만약 code snippet이 무엇인지 모르고, 검색하는 방법도 몰랐다면, 여러분은 이제 code snippet에 대해 정보를 찾기 위해 검색할 수 있습니다.)</p>\n<h2 dir="auto">질문자로서 해야 할 마지막 임무</h2>\n<p dir="auto">만약 누군가 당신의 질문에 도움을 주었다면,<br>\n<strong>그 답변으로 인해 문제를 어떻게 해결했는지 서술하고 진심으로 감사를 전하도록 합니다.</strong></p>\n<blockquote>\n<p dir="auto"><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji><br>\nGithub Discussions에는 Check라는 아주 좋은 기능이 있습니다! 답변을 받았다면, 해당 답변에 초록색 체크를 눌러 주세요!</p>\n</blockquote>\n<p dir="auto">이 질문의 기록은 질문자와 답변자, 후에 이 기록을 찾아볼 모든 사람에게 도움이 됩니다.<br>\n답변을 받았다고 해서 그냥 넘어가 버리면 안 됩니다.<br>\n답변을 진심으로 이해하고, 내 상황의 어떤 부분이 문제였고 어떻게 해결했는지에 대한 간단한 기록을 마지막으로 남겨 주어야 나와 모두가 성장할 수 있는 소중한 기록이 됩니다.</p>\n<p dir="auto"><strong>질문하는 것 자체가 개발의 일부분입니다. 질문을 피할 수 없다면, 꾸준히 제대로 질문하는 연습을 해 봅시다.</strong></p>\n<h2 dir="auto">So, What I have to Do</h2>\n<ol dir="auto">\n<li><strong>발생한 에러 코드, 궁금한 것을 검색(구글링)한다. (search for min 1h - 경우에 따라 다름)</strong><br>\n코드스테이츠는 ****여러분이 귀찮아 하는 것이 아닙니다. 차라리 직접적으로, 바로 가르쳐주는 것이 덜 귀찮습니다. 그런데도 이를 권장하는 속뜻에 대해서 이해해 보시길 바랍니다.</li>\n<li><strong>여러분이 할 수 있는 것을 최대한 해 본 다음에, 가이드에 따라 agora-states를 이용한다.</strong><br>\n여러분이 수강하는 커리큘럼 안에, \'agora-states를 반드시 이용하여 질문 작성을 연습해 보는 내용\'이 포함되어 있습니다. 가이드에 따라 질문하는 것을 적극적으로 권장합니다.<br>\n또한 다른 사람들의 질문 글들을 보면서, 내가 답할 수 있는 글에는 답변을 달아보는 것도 권장합니다.<br>\nagora-states를 통해 질문하고 답변하는 일은 스스로에게 매우 좋은 경험이 됩니다.</li>\n<li><strong>agora-states에서 제공 받은 답변에 따라 문제를 해결하려 하고, 문제가 해결되지 않는 경우 1, 2번을</strong> <strong>반복한다.</strong><br>\n답변으로 주어진 Keyword들이나 action item을 가지고 다시 1, 2번을 반복합니다. "그게 뭔가요?" 라는 무책임한 질문을 되풀이하지 말기를 바랍니다.</li>\n</ol>\n<p dir="auto"><strong>검색은 예전부터 많이 하던 사람이 더 잘할 수밖에 없습니다.<br>\n경험이 없다면, 당장 지금부터라도 경험을 쌓으면 됩니다.</strong></p>\n<ul dir="auto">\n<li><a href="https://www.lifehack.org/articles/technology/20-tips-use-google-search-efficiently.html" rel="nofollow">구글 검색을 더 효과적으로 하는 20가지 Tips</a></li>\n<li><a href="https://stackoverflow.com/help/how-to-ask" rel="nofollow">stackoverflow의 how to ask</a></li>\n</ul>\n<h2 dir="auto">QnA</h2>\n<ol dir="auto">\n<li>\n<p dir="auto"><strong>이 문서를 보고 질문하기가 무서워져서 더 못하겠습니다.</strong><br>\n→ 본인이 생각하기에 바보 같은 질문, 하셔도 됩니다! 하지만 충분히 정성을 들여서 질문 해 주시면 좋겠습니다.<br>\n내 질문이 바보 같은지 아닌지도 판단하기 어렵다면, 일단 질문하고 첨언으로 답변자에게 조언을 요청해 보세요. 조금 더 나은 질문을 하려면 어떻게 할 수 있을지 조언을 받게 되면, 여러분의 질문 실력은 훨씬 빠르게 향상될 것입니다.<br>\n이 문서는 당장 손 닿는 사람에게 도움을 구하기보다는, 여러분이 직접 질문 글을 작성해 보고 그 과정을 통해서 문제를 해결하는 경험을 꼭 가지고 가도록 하기 위해서 작성되었습니다.<br>\n여러분이 현업으로 나가게 되면, 이 스킬로 수백 번, 수천 번 문제를 해결 해야 합니다.<br>\n그렇다면 이 부트캠프 안에서 충분히 경험을 가지고 나가도록 합시다!</p>\n</li>\n<li>\n<p dir="auto"><strong>검색하는 형태를 개선할 수 있는 방법이 어떤 게 있을까요?</strong><br>\n내가 어설프게 검색해서 나온 질문 글 중 상위에 rank 되어 있는 괜찮은 질문을 보고,<br>\n\'아, 이렇게 질문을 작성하면 더 좋은 답변을 받을 수 있구나.\' 하고 학습할 수 있습니다.<br>\n해당 질문에 대한 답변뿐만 아니라, 올바른 질문 법, 정확한 키워드까지 얻어갈 수 있는 방법입니다.<br>\n반응을 많이 얻은 질문 글을 보고, 이 글이 어떻게 쓰였는지 분석해보는 시간을 가지기를 권장합니다.</p>\n</li>\n</ol>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  },
  {
    id: "D_kwDOHOApLM4APXTQ",
    createdAt: "2022-04-22T14:07:35Z",
    title: "[notice] 마크다운 사용법",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/3",
    author: "kimploo",
    answer: null,
    bodyHTML:
      '<p dir="auto">Agora States에서 질문을 작성할 때 우리는 <a href="https://www.markdownguide.org/basic-syntax/" rel="nofollow">markdown</a>이라는 문법 형식을 사용해서 글을 작성합니다.<br>\nmarkdown 문법 중에서 꼭 필요한 것들만 살펴 봅시다!</p>\n<h3 dir="auto">1. 글씨 크기 조절하기</h3>\n<p dir="auto">markdwon을 사용해 6가지의 글씨 크기를 표현할 수 있습니다.</p>\n<div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="# 첫 번째\n## 두 번째\n### 세 번째\n#### 네 번째\n##### 다섯 번째\n###### 여섯 번째"><pre class="notranslate"><code class="notranslate"># 첫 번째\n## 두 번째\n### 세 번째\n#### 네 번째\n##### 다섯 번째\n###### 여섯 번째\n</code></pre></div>\n<h1 dir="auto">첫 번째</h1>\n<h2 dir="auto">두 번째</h2>\n<h3 dir="auto">세 번째</h3>\n<h4 dir="auto">네 번째</h4>\n<h5 dir="auto">다섯 번째</h5>\n<h6 dir="auto">여섯 번째</h6>\n<h3 dir="auto">2. 글씨 강조하기</h3>\n<p dir="auto">markdown을 사용하면 쉽게 글씨를 강조할 수 있습니다.</p>\n<div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="*기운 글씨*\n**두꺼운 글씨**"><pre class="notranslate"><code class="notranslate">*기운 글씨*\n**두꺼운 글씨**\n</code></pre></div>\n<p dir="auto"><em>기운 글씨</em></p>\n<p dir="auto"><strong>두꺼운 글씨</strong></p>\n<h3 dir="auto">3. 리스트 형식</h3>\n<p dir="auto">리스트 형식으로 표현할 수 있습니다.</p>\n<div class="snippet-clipboard-content position-relative overflow-auto" data-snippet-clipboard-copy-content="1. 첫 번째\n2. 두 번째\n3. 세 번째\n\n* 순서 없음\n* 순서 없음\n* 순서 없음"><pre class="notranslate"><code class="notranslate">1. 첫 번째\n2. 두 번째\n3. 세 번째\n\n* 순서 없음\n* 순서 없음\n* 순서 없음\n</code></pre></div>\n<ol dir="auto">\n<li>첫 번째</li>\n<li>두 번째</li>\n<li>세 번째</li>\n</ol>\n<ul dir="auto">\n<li>순서 없음</li>\n<li>순서 없음</li>\n<li>순서 없음</li>\n</ul>\n<h3 dir="auto">4. 코드 예쁘게 쓰기 ☜（ﾟ∀ﾟ☜） 중요!</h3>\n<p dir="auto">여러분이 올린 질문을 읽을 사람들을 위해 예쁘게 정리 된 코드를 입력해 주세요! <code class="notranslate">```java```</code> block을 활용해 보세요!</p>\n<pre class="notranslate">```java\n이 안쪽에 코드를 넣으면 코드가 예쁘게 보입니다.\n\nString greeting = "Hello World!";\n\nSystem.out.println(greeting); // "Hello World!"\n```\n\n</pre>\n<div class="highlight highlight-source-java position-relative overflow-auto" data-snippet-clipboard-copy-content="// 출력되는 코드!\n\nString greeting = &quot;Hello World!&quot;;\n\nSystem.out.println(greeting); // &quot;Hello World!&quot;"><pre><span class="pl-c">// 출력되는 코드!</span>\n\n<span class="pl-smi">String</span> <span class="pl-s1">greeting</span> = <span class="pl-s">"Hello World!"</span>;\n\n<span class="pl-smi">System</span>.<span class="pl-s1">out</span>.<span class="pl-en">println</span>(<span class="pl-s1">greeting</span>); <span class="pl-c">// "Hello World!"</span></pre></div>\n<p dir="auto">markdown을 사용해 Agora States를 <strong>많이 많이</strong> 이용해 주세요!</p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  },
  {
    id: "D_kwDOHOApLM4APXTN",
    createdAt: "2022-04-22T14:06:03Z",
    title: "[notice] 질문 템플릿",
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/2",
    author: "kimploo",
    answer: null,
    bodyHTML:
      '<h1 dir="auto">Question Template</h1>\n<h3 dir="auto">제목은 질문의 맥락을 파악할 수 있게 작성해주세요. 아래의 예시를 참고해주세요.</h3>\n<blockquote>\n<p dir="auto">토이 18번 문제가 이해가 잘 안됩니다. (X)<br>\n토이 18_getItemFromTwoSortedArrays 레퍼런스에서 O(logK)로직의 조건문들이 이해가 잘 되지 않습니다.(O)</p>\n</blockquote>\n<p dir="auto">--------------- 여기서부터 복사하세요 ---------------</p>\n<ul dir="auto">\n<li>\n<p dir="auto">운영 체제: 예) macOS, Ubuntu</p>\n</li>\n<li>\n<p dir="auto">Node.js 버전(<code class="notranslate">node -v</code>): 예)v14.16.0</p>\n</li>\n<li>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?</p>\n</li>\n<li>\n<p dir="auto">어떠한 부분에서 이해가 안 되었나요?</p>\n</li>\n<li>\n<p dir="auto">에러 코드를 붙여넣기 해 주세요.</p>\n</li>\n<li>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)<br>\n```jsx<br>\n//여기에 작성해 주세요<br>\n```</p>\n</li>\n<li>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요.</p>\n</li>\n</ul>\n<hr>\n<h2 dir="auto">saved reply 사용법</h2>\n<blockquote>\n<p dir="auto">잠깐! saved reply란?<br>\n원하는 문구를 저장해서 간단하게 꺼내 쓸 수 있는 github discussions만의 기능입니다.<br>\n매번 질문 템플릿을 복사하지 말고, 저장한 뒤에 꺼내서 쓰세요!</p>\n</blockquote>\n<ol dir="auto">\n<li>Discussions에서 newdiscussion 버튼을 클릭합니다.</li>\n</ol>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/59815596/113290773-0fa1b780-932d-11eb-81fe-f031408bfc9f.png"><img width="1071" alt="스크린샷 2021-04-01 오후 8 57 36" src="https://user-images.githubusercontent.com/59815596/113290773-0fa1b780-932d-11eb-81fe-f031408bfc9f.png" style="max-width: 100%;"></a></p>\n<ol start="2" dir="auto">\n<li>에디터의 맨 오른쪽 "꺾인 화살표" 모양을 클릭합니다.</li>\n</ol>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/59815596/113253588-6349dc00-9300-11eb-9065-d483b86cd773.png"><img width="735" alt="1" src="https://user-images.githubusercontent.com/59815596/113253588-6349dc00-9300-11eb-9065-d483b86cd773.png" style="max-width: 100%;"></a></p>\n<ol start="3" dir="auto">\n<li>이러한 창이 나오게 됩니다.</li>\n</ol>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/59815596/113253613-6ba21700-9300-11eb-8e93-59cf45121822.png"><img width="1021" alt="2" src="https://user-images.githubusercontent.com/59815596/113253613-6ba21700-9300-11eb-8e93-59cf45121822.png" style="max-width: 100%;"></a></p>\n<ol start="4" dir="auto">\n<li>제목(본인이 구분하기에 편한 이름)을 작성하고, 위에 있는 템플릿을 복사하여 내용에 붙여넣은 뒤, Add saved reply 버튼을 클릭하면 템플릿이 저장됩니다.</li>\n</ol>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/59815596/113253654-7eb4e700-9300-11eb-90ff-8d1bc1a1f5cf.png"><img width="775" alt="3" src="https://user-images.githubusercontent.com/59815596/113253654-7eb4e700-9300-11eb-90ff-8d1bc1a1f5cf.png" style="max-width: 100%;"></a></p>\n<ol start="5" dir="auto">\n<li>사용하실 때, 에디터의 맨 오른쪽 "꺾인 화살표" 모양을 클릭하면 저장해 두었던 템플릿이 나옵니다. 클릭해서 사용하시면 됩니다.</li>\n</ol>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/59815596/113253666-85435e80-9300-11eb-9224-736a8625c84c.png"><img width="718" alt="4" src="https://user-images.githubusercontent.com/59815596/113253666-85435e80-9300-11eb-9224-736a8625c84c.png" style="max-width: 100%;"></a></p>\n<ol start="6" dir="auto">\n<li>완성</li>\n</ol>\n<p><a target="_blank" rel="noopener noreferrer" href="https://user-images.githubusercontent.com/59815596/113253681-8c6a6c80-9300-11eb-9409-b299de50aea3.png"><img width="720" alt="5" src="https://user-images.githubusercontent.com/59815596/113253681-8c6a6c80-9300-11eb-9409-b299de50aea3.png" style="max-width: 100%;"></a></p>',
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  },
].map((discussion) => {
  if (discussion.answer) {
    return {
      ...discussion,
      bodyHTML: sanitize(discussion.bodyHTML),
      answer: {
        ...discussion.answer,
        bodyHTML: sanitize(discussion.answer.bodyHTML),
      },
    };
  }

  return {
    ...discussion,
    bodyHTML: sanitize(discussion.bodyHTML),
  };
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const { agoraStatesDiscussions } = __webpack_require__(471);
__webpack_require__(307);
// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);
let data;
const dataFromLocalStorage = localStorage.getItem("agoraStatesDiscussions");
if (dataFromLocalStorage) {
  data = JSON.parse(dataFromLocalStorage);
} else {
  data = agoraStatesDiscussions.slice();
}

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  const avatarImg = document.createElement("img");
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = "avatar of " + obj.author;
  avatarWrapper.append(avatarImg);

  const discussionTitle = document.createElement("h2");
  const titleAnchor = document.createElement("a");
  titleAnchor.href = obj.url;
  titleAnchor.textContent = obj.title;
  discussionTitle.append(titleAnchor);

  const discussionInformation = document.createElement("div");
  discussionInformation.className = "discussion__information";
  discussionInformation.textContent = `${obj.author} / ${new Date(
    obj.createdAt
  ).toLocaleTimeString()}`;
  discussionContent.append(discussionTitle, discussionInformation);

  const checked = document.createElement("p");
  checked.textContent = obj.answer ? "☑" : "☒";
  discussionAnswered.append(checked);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// data 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element, from, to) => {
  console.log(from, to);
  if (!from && !to) {
    from = 0;
    to = data.length - 1;
  }
  // 다 지우고 배열에 있는 내용 다 보여주기
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (let i = from; i < to; i += 1) {
    element.append(convertToDiscussion(data[i]));
  }
  return;
};

// 페이지네이션을 위한 변수
let limit = 10,
  page = 1;

// ul 요소에 data 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul, 0, limit);

const getPageStartEnd = (limit, page) => {
  const len = data.length - 1;
  let pageStart = Number(page - 1) * Number(limit);
  let pageEnd = Number(pageStart) + Number(limit);
  if (page <= 0) {
    pageStart = 0;
  }
  if (pageEnd >= len) {
    pageEnd = len;
  }
  return { pageStart, pageEnd };
};

const buttons = document.querySelector(".buttons");
buttons.children[0].addEventListener("click", () => {
  if (page > 1) {
    page = page - 1;
  }
  const { pageStart, pageEnd } = getPageStartEnd(limit, page);
  render(ul, pageStart, pageEnd);
});

buttons.children[1].addEventListener("click", () => {
  if (limit * page < data.length - 1) {
    page = page + 1;
  }
  const { pageStart, pageEnd } = getPageStartEnd(limit, page);
  render(ul, pageStart, pageEnd);
});

buttons.children[2].addEventListener("click", () => {
  localStorage.removeItem("agoraStatesDiscussions");
  data = agoraStatesDiscussions.slice();
  limit = 10;
  page = 1;
  render(ul, 0, limit);
});

// 문서의 내용을 확인해야 합니다.
const form = document.querySelector("form.form");
const author = form.querySelector("div.form__input--name > input");
const title = form.querySelector("div.form__input--title > input");
const textbox = form.querySelector("div.form__textbox > textarea");

// 문서를 제출해야 합니다.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const obj = {
    id: "unique id",
    createdAt: new Date().toISOString(),
    title: title.value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions",
    author: author.value,
    answer: null,
    bodyHTML: textbox.value,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  };
  data.unshift(obj);

  // 로컬스토리지에 저장
  localStorage.setItem("agoraStatesDiscussions", JSON.stringify(data));

  // 렌더링
  render(ul, 0, limit);
});

})();

/******/ })()
;