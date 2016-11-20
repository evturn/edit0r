(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_36__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/demo/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var encode = __webpack_require__(26);
	var decode = __webpack_require__(25);

	var C_BACKSLASH = 92;

	var decodeHTML = __webpack_require__(4).decodeHTML;

	var ENTITY = "&(?:#x[a-f0-9]{1,8}|#[0-9]{1,8}|[a-z][a-z0-9]{1,31});";

	var TAGNAME = '[A-Za-z][A-Za-z0-9-]*';
	var ATTRIBUTENAME = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
	var UNQUOTEDVALUE = "[^\"'=<>`\\x00-\\x20]+";
	var SINGLEQUOTEDVALUE = "'[^']*'";
	var DOUBLEQUOTEDVALUE = '"[^"]*"';
	var ATTRIBUTEVALUE = "(?:" + UNQUOTEDVALUE + "|" + SINGLEQUOTEDVALUE + "|" + DOUBLEQUOTEDVALUE + ")";
	var ATTRIBUTEVALUESPEC = "(?:" + "\\s*=" + "\\s*" + ATTRIBUTEVALUE + ")";
	var ATTRIBUTE = "(?:" + "\\s+" + ATTRIBUTENAME + ATTRIBUTEVALUESPEC + "?)";
	var OPENTAG = "<" + TAGNAME + ATTRIBUTE + "*" + "\\s*/?>";
	var CLOSETAG = "</" + TAGNAME + "\\s*[>]";
	var HTMLCOMMENT = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
	var PROCESSINGINSTRUCTION = "[<][?].*?[?][>]";
	var DECLARATION = "<![A-Z]+" + "\\s+[^>]*>";
	var CDATA = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
	var HTMLTAG = "(?:" + OPENTAG + "|" + CLOSETAG + "|" + HTMLCOMMENT + "|" + PROCESSINGINSTRUCTION + "|" + DECLARATION + "|" + CDATA + ")";
	var reHtmlTag = new RegExp('^' + HTMLTAG, 'i');

	var reBackslashOrAmp = /[\\&]/;

	var ESCAPABLE = '[!"#$%&\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]';

	var reEntityOrEscapedChar = new RegExp('\\\\' + ESCAPABLE + '|' + ENTITY, 'gi');

	var XMLSPECIAL = '[&<>"]';

	var reXmlSpecial = new RegExp(XMLSPECIAL, 'g');

	var reXmlSpecialOrEntity = new RegExp(ENTITY + '|' + XMLSPECIAL, 'gi');

	var unescapeChar = function unescapeChar(s) {
	    if (s.charCodeAt(0) === C_BACKSLASH) {
	        return s.charAt(1);
	    } else {
	        return decodeHTML(s);
	    }
	};

	// Replace entities and backslash escapes with literal characters.
	var unescapeString = function unescapeString(s) {
	    if (reBackslashOrAmp.test(s)) {
	        return s.replace(reEntityOrEscapedChar, unescapeChar);
	    } else {
	        return s;
	    }
	};

	var normalizeURI = function normalizeURI(uri) {
	    try {
	        return encode(decode(uri));
	    } catch (err) {
	        return uri;
	    }
	};

	var replaceUnsafeChar = function replaceUnsafeChar(s) {
	    switch (s) {
	        case '&':
	            return '&amp;';
	        case '<':
	            return '&lt;';
	        case '>':
	            return '&gt;';
	        case '"':
	            return '&quot;';
	        default:
	            return s;
	    }
	};

	var escapeXml = function escapeXml(s, preserve_entities) {
	    if (reXmlSpecial.test(s)) {
	        if (preserve_entities) {
	            return s.replace(reXmlSpecialOrEntity, replaceUnsafeChar);
	        } else {
	            return s.replace(reXmlSpecial, replaceUnsafeChar);
	        }
	    } else {
	        return s;
	    }
	};

	module.exports = { unescapeString: unescapeString,
	    normalizeURI: normalizeURI,
	    escapeXml: escapeXml,
	    reHtmlTag: reHtmlTag,
	    OPENTAG: OPENTAG,
	    CLOSETAG: CLOSETAG,
	    ENTITY: ENTITY,
	    ESCAPABLE: ESCAPABLE
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function isContainer(node) {
	    switch (node._type) {
	        case 'Document':
	        case 'BlockQuote':
	        case 'List':
	        case 'Item':
	        case 'Paragraph':
	        case 'Heading':
	        case 'Emph':
	        case 'Strong':
	        case 'Link':
	        case 'Image':
	        case 'CustomInline':
	        case 'CustomBlock':
	            return true;
	        default:
	            return false;
	    }
	}

	var resumeAt = function resumeAt(node, entering) {
	    this.current = node;
	    this.entering = entering === true;
	};

	var next = function next() {
	    var cur = this.current;
	    var entering = this.entering;

	    if (cur === null) {
	        return null;
	    }

	    var container = isContainer(cur);

	    if (entering && container) {
	        if (cur._firstChild) {
	            this.current = cur._firstChild;
	            this.entering = true;
	        } else {
	            // stay on node but exit
	            this.entering = false;
	        }
	    } else if (cur === this.root) {
	        this.current = null;
	    } else if (cur._next === null) {
	        this.current = cur._parent;
	        this.entering = false;
	    } else {
	        this.current = cur._next;
	        this.entering = true;
	    }

	    return { entering: entering, node: cur };
	};

	var NodeWalker = function NodeWalker(root) {
	    return { current: root,
	        root: root,
	        entering: true,
	        next: next,
	        resumeAt: resumeAt };
	};

	var Node = function Node(nodeType, sourcepos) {
	    this._type = nodeType;
	    this._parent = null;
	    this._firstChild = null;
	    this._lastChild = null;
	    this._prev = null;
	    this._next = null;
	    this._sourcepos = sourcepos;
	    this._lastLineBlank = false;
	    this._open = true;
	    this._string_content = null;
	    this._literal = null;
	    this._listData = {};
	    this._info = null;
	    this._destination = null;
	    this._title = null;
	    this._isFenced = false;
	    this._fenceChar = null;
	    this._fenceLength = 0;
	    this._fenceOffset = null;
	    this._level = null;
	    this._onEnter = null;
	    this._onExit = null;
	};

	var proto = Node.prototype;

	Object.defineProperty(proto, 'isContainer', {
	    get: function get() {
	        return isContainer(this);
	    }
	});

	Object.defineProperty(proto, 'type', {
	    get: function get() {
	        return this._type;
	    }
	});

	Object.defineProperty(proto, 'firstChild', {
	    get: function get() {
	        return this._firstChild;
	    }
	});

	Object.defineProperty(proto, 'lastChild', {
	    get: function get() {
	        return this._lastChild;
	    }
	});

	Object.defineProperty(proto, 'next', {
	    get: function get() {
	        return this._next;
	    }
	});

	Object.defineProperty(proto, 'prev', {
	    get: function get() {
	        return this._prev;
	    }
	});

	Object.defineProperty(proto, 'parent', {
	    get: function get() {
	        return this._parent;
	    }
	});

	Object.defineProperty(proto, 'sourcepos', {
	    get: function get() {
	        return this._sourcepos;
	    }
	});

	Object.defineProperty(proto, 'literal', {
	    get: function get() {
	        return this._literal;
	    },
	    set: function set(s) {
	        this._literal = s;
	    }
	});

	Object.defineProperty(proto, 'destination', {
	    get: function get() {
	        return this._destination;
	    },
	    set: function set(s) {
	        this._destination = s;
	    }
	});

	Object.defineProperty(proto, 'title', {
	    get: function get() {
	        return this._title;
	    },
	    set: function set(s) {
	        this._title = s;
	    }
	});

	Object.defineProperty(proto, 'info', {
	    get: function get() {
	        return this._info;
	    },
	    set: function set(s) {
	        this._info = s;
	    }
	});

	Object.defineProperty(proto, 'level', {
	    get: function get() {
	        return this._level;
	    },
	    set: function set(s) {
	        this._level = s;
	    }
	});

	Object.defineProperty(proto, 'listType', {
	    get: function get() {
	        return this._listData.type;
	    },
	    set: function set(t) {
	        this._listData.type = t;
	    }
	});

	Object.defineProperty(proto, 'listTight', {
	    get: function get() {
	        return this._listData.tight;
	    },
	    set: function set(t) {
	        this._listData.tight = t;
	    }
	});

	Object.defineProperty(proto, 'listStart', {
	    get: function get() {
	        return this._listData.start;
	    },
	    set: function set(n) {
	        this._listData.start = n;
	    }
	});

	Object.defineProperty(proto, 'listDelimiter', {
	    get: function get() {
	        return this._listData.delimiter;
	    },
	    set: function set(delim) {
	        this._listData.delimiter = delim;
	    }
	});

	Object.defineProperty(proto, 'onEnter', {
	    get: function get() {
	        return this._onEnter;
	    },
	    set: function set(s) {
	        this._onEnter = s;
	    }
	});

	Object.defineProperty(proto, 'onExit', {
	    get: function get() {
	        return this._onExit;
	    },
	    set: function set(s) {
	        this._onExit = s;
	    }
	});

	Node.prototype.appendChild = function (child) {
	    child.unlink();
	    child._parent = this;
	    if (this._lastChild) {
	        this._lastChild._next = child;
	        child._prev = this._lastChild;
	        this._lastChild = child;
	    } else {
	        this._firstChild = child;
	        this._lastChild = child;
	    }
	};

	Node.prototype.prependChild = function (child) {
	    child.unlink();
	    child._parent = this;
	    if (this._firstChild) {
	        this._firstChild._prev = child;
	        child._next = this._firstChild;
	        this._firstChild = child;
	    } else {
	        this._firstChild = child;
	        this._lastChild = child;
	    }
	};

	Node.prototype.unlink = function () {
	    if (this._prev) {
	        this._prev._next = this._next;
	    } else if (this._parent) {
	        this._parent._firstChild = this._next;
	    }
	    if (this._next) {
	        this._next._prev = this._prev;
	    } else if (this._parent) {
	        this._parent._lastChild = this._prev;
	    }
	    this._parent = null;
	    this._next = null;
	    this._prev = null;
	};

	Node.prototype.insertAfter = function (sibling) {
	    sibling.unlink();
	    sibling._next = this._next;
	    if (sibling._next) {
	        sibling._next._prev = sibling;
	    }
	    sibling._prev = this;
	    this._next = sibling;
	    sibling._parent = this._parent;
	    if (!sibling._next) {
	        sibling._parent._lastChild = sibling;
	    }
	};

	Node.prototype.insertBefore = function (sibling) {
	    sibling.unlink();
	    sibling._prev = this._prev;
	    if (sibling._prev) {
	        sibling._prev._next = sibling;
	    }
	    sibling._next = this;
	    this._prev = sibling;
	    sibling._parent = this._parent;
	    if (!sibling._prev) {
	        sibling._parent._firstChild = sibling;
	    }
	};

	Node.prototype.walker = function () {
	    var walker = new NodeWalker(this);
	    return walker;
	};

	module.exports = Node;

	/* Example of use of walker:

	 var walker = w.walker();
	 var event;

	 while (event = walker.next()) {
	 console.log(event.entering, event.node.type);
	 }

	 */

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var encode = __webpack_require__(21),
	    decode = __webpack_require__(19);

	exports.decode = function (data, level) {
		return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
	};

	exports.decodeStrict = function (data, level) {
		return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
	};

	exports.encode = function (data, level) {
		return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
	};

	exports.encodeXML = encode.XML;

	exports.encodeHTML4 = exports.encodeHTML5 = exports.encodeHTML = encode.HTML;

	exports.decodeXML = exports.decodeXMLStrict = decode.XML;

	exports.decodeHTML4 = exports.decodeHTML5 = exports.decodeHTML = decode.HTML;

	exports.decodeHTML4Strict = exports.decodeHTML5Strict = exports.decodeHTMLStrict = decode.HTMLStrict;

	exports.escape = encode.escape;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Abreve": "Ă",
		"abreve": "ă",
		"ac": "∾",
		"acd": "∿",
		"acE": "∾̳",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"Acy": "А",
		"acy": "а",
		"AElig": "Æ",
		"aelig": "æ",
		"af": "⁡",
		"Afr": "𝔄",
		"afr": "𝔞",
		"Agrave": "À",
		"agrave": "à",
		"alefsym": "ℵ",
		"aleph": "ℵ",
		"Alpha": "Α",
		"alpha": "α",
		"Amacr": "Ā",
		"amacr": "ā",
		"amalg": "⨿",
		"amp": "&",
		"AMP": "&",
		"andand": "⩕",
		"And": "⩓",
		"and": "∧",
		"andd": "⩜",
		"andslope": "⩘",
		"andv": "⩚",
		"ang": "∠",
		"ange": "⦤",
		"angle": "∠",
		"angmsdaa": "⦨",
		"angmsdab": "⦩",
		"angmsdac": "⦪",
		"angmsdad": "⦫",
		"angmsdae": "⦬",
		"angmsdaf": "⦭",
		"angmsdag": "⦮",
		"angmsdah": "⦯",
		"angmsd": "∡",
		"angrt": "∟",
		"angrtvb": "⊾",
		"angrtvbd": "⦝",
		"angsph": "∢",
		"angst": "Å",
		"angzarr": "⍼",
		"Aogon": "Ą",
		"aogon": "ą",
		"Aopf": "𝔸",
		"aopf": "𝕒",
		"apacir": "⩯",
		"ap": "≈",
		"apE": "⩰",
		"ape": "≊",
		"apid": "≋",
		"apos": "'",
		"ApplyFunction": "⁡",
		"approx": "≈",
		"approxeq": "≊",
		"Aring": "Å",
		"aring": "å",
		"Ascr": "𝒜",
		"ascr": "𝒶",
		"Assign": "≔",
		"ast": "*",
		"asymp": "≈",
		"asympeq": "≍",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"awconint": "∳",
		"awint": "⨑",
		"backcong": "≌",
		"backepsilon": "϶",
		"backprime": "‵",
		"backsim": "∽",
		"backsimeq": "⋍",
		"Backslash": "∖",
		"Barv": "⫧",
		"barvee": "⊽",
		"barwed": "⌅",
		"Barwed": "⌆",
		"barwedge": "⌅",
		"bbrk": "⎵",
		"bbrktbrk": "⎶",
		"bcong": "≌",
		"Bcy": "Б",
		"bcy": "б",
		"bdquo": "„",
		"becaus": "∵",
		"because": "∵",
		"Because": "∵",
		"bemptyv": "⦰",
		"bepsi": "϶",
		"bernou": "ℬ",
		"Bernoullis": "ℬ",
		"Beta": "Β",
		"beta": "β",
		"beth": "ℶ",
		"between": "≬",
		"Bfr": "𝔅",
		"bfr": "𝔟",
		"bigcap": "⋂",
		"bigcirc": "◯",
		"bigcup": "⋃",
		"bigodot": "⨀",
		"bigoplus": "⨁",
		"bigotimes": "⨂",
		"bigsqcup": "⨆",
		"bigstar": "★",
		"bigtriangledown": "▽",
		"bigtriangleup": "△",
		"biguplus": "⨄",
		"bigvee": "⋁",
		"bigwedge": "⋀",
		"bkarow": "⤍",
		"blacklozenge": "⧫",
		"blacksquare": "▪",
		"blacktriangle": "▴",
		"blacktriangledown": "▾",
		"blacktriangleleft": "◂",
		"blacktriangleright": "▸",
		"blank": "␣",
		"blk12": "▒",
		"blk14": "░",
		"blk34": "▓",
		"block": "█",
		"bne": "=⃥",
		"bnequiv": "≡⃥",
		"bNot": "⫭",
		"bnot": "⌐",
		"Bopf": "𝔹",
		"bopf": "𝕓",
		"bot": "⊥",
		"bottom": "⊥",
		"bowtie": "⋈",
		"boxbox": "⧉",
		"boxdl": "┐",
		"boxdL": "╕",
		"boxDl": "╖",
		"boxDL": "╗",
		"boxdr": "┌",
		"boxdR": "╒",
		"boxDr": "╓",
		"boxDR": "╔",
		"boxh": "─",
		"boxH": "═",
		"boxhd": "┬",
		"boxHd": "╤",
		"boxhD": "╥",
		"boxHD": "╦",
		"boxhu": "┴",
		"boxHu": "╧",
		"boxhU": "╨",
		"boxHU": "╩",
		"boxminus": "⊟",
		"boxplus": "⊞",
		"boxtimes": "⊠",
		"boxul": "┘",
		"boxuL": "╛",
		"boxUl": "╜",
		"boxUL": "╝",
		"boxur": "└",
		"boxuR": "╘",
		"boxUr": "╙",
		"boxUR": "╚",
		"boxv": "│",
		"boxV": "║",
		"boxvh": "┼",
		"boxvH": "╪",
		"boxVh": "╫",
		"boxVH": "╬",
		"boxvl": "┤",
		"boxvL": "╡",
		"boxVl": "╢",
		"boxVL": "╣",
		"boxvr": "├",
		"boxvR": "╞",
		"boxVr": "╟",
		"boxVR": "╠",
		"bprime": "‵",
		"breve": "˘",
		"Breve": "˘",
		"brvbar": "¦",
		"bscr": "𝒷",
		"Bscr": "ℬ",
		"bsemi": "⁏",
		"bsim": "∽",
		"bsime": "⋍",
		"bsolb": "⧅",
		"bsol": "\\",
		"bsolhsub": "⟈",
		"bull": "•",
		"bullet": "•",
		"bump": "≎",
		"bumpE": "⪮",
		"bumpe": "≏",
		"Bumpeq": "≎",
		"bumpeq": "≏",
		"Cacute": "Ć",
		"cacute": "ć",
		"capand": "⩄",
		"capbrcup": "⩉",
		"capcap": "⩋",
		"cap": "∩",
		"Cap": "⋒",
		"capcup": "⩇",
		"capdot": "⩀",
		"CapitalDifferentialD": "ⅅ",
		"caps": "∩︀",
		"caret": "⁁",
		"caron": "ˇ",
		"Cayleys": "ℭ",
		"ccaps": "⩍",
		"Ccaron": "Č",
		"ccaron": "č",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"Ccirc": "Ĉ",
		"ccirc": "ĉ",
		"Cconint": "∰",
		"ccups": "⩌",
		"ccupssm": "⩐",
		"Cdot": "Ċ",
		"cdot": "ċ",
		"cedil": "¸",
		"Cedilla": "¸",
		"cemptyv": "⦲",
		"cent": "¢",
		"centerdot": "·",
		"CenterDot": "·",
		"cfr": "𝔠",
		"Cfr": "ℭ",
		"CHcy": "Ч",
		"chcy": "ч",
		"check": "✓",
		"checkmark": "✓",
		"Chi": "Χ",
		"chi": "χ",
		"circ": "ˆ",
		"circeq": "≗",
		"circlearrowleft": "↺",
		"circlearrowright": "↻",
		"circledast": "⊛",
		"circledcirc": "⊚",
		"circleddash": "⊝",
		"CircleDot": "⊙",
		"circledR": "®",
		"circledS": "Ⓢ",
		"CircleMinus": "⊖",
		"CirclePlus": "⊕",
		"CircleTimes": "⊗",
		"cir": "○",
		"cirE": "⧃",
		"cire": "≗",
		"cirfnint": "⨐",
		"cirmid": "⫯",
		"cirscir": "⧂",
		"ClockwiseContourIntegral": "∲",
		"CloseCurlyDoubleQuote": "”",
		"CloseCurlyQuote": "’",
		"clubs": "♣",
		"clubsuit": "♣",
		"colon": ":",
		"Colon": "∷",
		"Colone": "⩴",
		"colone": "≔",
		"coloneq": "≔",
		"comma": ",",
		"commat": "@",
		"comp": "∁",
		"compfn": "∘",
		"complement": "∁",
		"complexes": "ℂ",
		"cong": "≅",
		"congdot": "⩭",
		"Congruent": "≡",
		"conint": "∮",
		"Conint": "∯",
		"ContourIntegral": "∮",
		"copf": "𝕔",
		"Copf": "ℂ",
		"coprod": "∐",
		"Coproduct": "∐",
		"copy": "©",
		"COPY": "©",
		"copysr": "℗",
		"CounterClockwiseContourIntegral": "∳",
		"crarr": "↵",
		"cross": "✗",
		"Cross": "⨯",
		"Cscr": "𝒞",
		"cscr": "𝒸",
		"csub": "⫏",
		"csube": "⫑",
		"csup": "⫐",
		"csupe": "⫒",
		"ctdot": "⋯",
		"cudarrl": "⤸",
		"cudarrr": "⤵",
		"cuepr": "⋞",
		"cuesc": "⋟",
		"cularr": "↶",
		"cularrp": "⤽",
		"cupbrcap": "⩈",
		"cupcap": "⩆",
		"CupCap": "≍",
		"cup": "∪",
		"Cup": "⋓",
		"cupcup": "⩊",
		"cupdot": "⊍",
		"cupor": "⩅",
		"cups": "∪︀",
		"curarr": "↷",
		"curarrm": "⤼",
		"curlyeqprec": "⋞",
		"curlyeqsucc": "⋟",
		"curlyvee": "⋎",
		"curlywedge": "⋏",
		"curren": "¤",
		"curvearrowleft": "↶",
		"curvearrowright": "↷",
		"cuvee": "⋎",
		"cuwed": "⋏",
		"cwconint": "∲",
		"cwint": "∱",
		"cylcty": "⌭",
		"dagger": "†",
		"Dagger": "‡",
		"daleth": "ℸ",
		"darr": "↓",
		"Darr": "↡",
		"dArr": "⇓",
		"dash": "‐",
		"Dashv": "⫤",
		"dashv": "⊣",
		"dbkarow": "⤏",
		"dblac": "˝",
		"Dcaron": "Ď",
		"dcaron": "ď",
		"Dcy": "Д",
		"dcy": "д",
		"ddagger": "‡",
		"ddarr": "⇊",
		"DD": "ⅅ",
		"dd": "ⅆ",
		"DDotrahd": "⤑",
		"ddotseq": "⩷",
		"deg": "°",
		"Del": "∇",
		"Delta": "Δ",
		"delta": "δ",
		"demptyv": "⦱",
		"dfisht": "⥿",
		"Dfr": "𝔇",
		"dfr": "𝔡",
		"dHar": "⥥",
		"dharl": "⇃",
		"dharr": "⇂",
		"DiacriticalAcute": "´",
		"DiacriticalDot": "˙",
		"DiacriticalDoubleAcute": "˝",
		"DiacriticalGrave": "`",
		"DiacriticalTilde": "˜",
		"diam": "⋄",
		"diamond": "⋄",
		"Diamond": "⋄",
		"diamondsuit": "♦",
		"diams": "♦",
		"die": "¨",
		"DifferentialD": "ⅆ",
		"digamma": "ϝ",
		"disin": "⋲",
		"div": "÷",
		"divide": "÷",
		"divideontimes": "⋇",
		"divonx": "⋇",
		"DJcy": "Ђ",
		"djcy": "ђ",
		"dlcorn": "⌞",
		"dlcrop": "⌍",
		"dollar": "$",
		"Dopf": "𝔻",
		"dopf": "𝕕",
		"Dot": "¨",
		"dot": "˙",
		"DotDot": "⃜",
		"doteq": "≐",
		"doteqdot": "≑",
		"DotEqual": "≐",
		"dotminus": "∸",
		"dotplus": "∔",
		"dotsquare": "⊡",
		"doublebarwedge": "⌆",
		"DoubleContourIntegral": "∯",
		"DoubleDot": "¨",
		"DoubleDownArrow": "⇓",
		"DoubleLeftArrow": "⇐",
		"DoubleLeftRightArrow": "⇔",
		"DoubleLeftTee": "⫤",
		"DoubleLongLeftArrow": "⟸",
		"DoubleLongLeftRightArrow": "⟺",
		"DoubleLongRightArrow": "⟹",
		"DoubleRightArrow": "⇒",
		"DoubleRightTee": "⊨",
		"DoubleUpArrow": "⇑",
		"DoubleUpDownArrow": "⇕",
		"DoubleVerticalBar": "∥",
		"DownArrowBar": "⤓",
		"downarrow": "↓",
		"DownArrow": "↓",
		"Downarrow": "⇓",
		"DownArrowUpArrow": "⇵",
		"DownBreve": "̑",
		"downdownarrows": "⇊",
		"downharpoonleft": "⇃",
		"downharpoonright": "⇂",
		"DownLeftRightVector": "⥐",
		"DownLeftTeeVector": "⥞",
		"DownLeftVectorBar": "⥖",
		"DownLeftVector": "↽",
		"DownRightTeeVector": "⥟",
		"DownRightVectorBar": "⥗",
		"DownRightVector": "⇁",
		"DownTeeArrow": "↧",
		"DownTee": "⊤",
		"drbkarow": "⤐",
		"drcorn": "⌟",
		"drcrop": "⌌",
		"Dscr": "𝒟",
		"dscr": "𝒹",
		"DScy": "Ѕ",
		"dscy": "ѕ",
		"dsol": "⧶",
		"Dstrok": "Đ",
		"dstrok": "đ",
		"dtdot": "⋱",
		"dtri": "▿",
		"dtrif": "▾",
		"duarr": "⇵",
		"duhar": "⥯",
		"dwangle": "⦦",
		"DZcy": "Џ",
		"dzcy": "џ",
		"dzigrarr": "⟿",
		"Eacute": "É",
		"eacute": "é",
		"easter": "⩮",
		"Ecaron": "Ě",
		"ecaron": "ě",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"ecir": "≖",
		"ecolon": "≕",
		"Ecy": "Э",
		"ecy": "э",
		"eDDot": "⩷",
		"Edot": "Ė",
		"edot": "ė",
		"eDot": "≑",
		"ee": "ⅇ",
		"efDot": "≒",
		"Efr": "𝔈",
		"efr": "𝔢",
		"eg": "⪚",
		"Egrave": "È",
		"egrave": "è",
		"egs": "⪖",
		"egsdot": "⪘",
		"el": "⪙",
		"Element": "∈",
		"elinters": "⏧",
		"ell": "ℓ",
		"els": "⪕",
		"elsdot": "⪗",
		"Emacr": "Ē",
		"emacr": "ē",
		"empty": "∅",
		"emptyset": "∅",
		"EmptySmallSquare": "◻",
		"emptyv": "∅",
		"EmptyVerySmallSquare": "▫",
		"emsp13": " ",
		"emsp14": " ",
		"emsp": " ",
		"ENG": "Ŋ",
		"eng": "ŋ",
		"ensp": " ",
		"Eogon": "Ę",
		"eogon": "ę",
		"Eopf": "𝔼",
		"eopf": "𝕖",
		"epar": "⋕",
		"eparsl": "⧣",
		"eplus": "⩱",
		"epsi": "ε",
		"Epsilon": "Ε",
		"epsilon": "ε",
		"epsiv": "ϵ",
		"eqcirc": "≖",
		"eqcolon": "≕",
		"eqsim": "≂",
		"eqslantgtr": "⪖",
		"eqslantless": "⪕",
		"Equal": "⩵",
		"equals": "=",
		"EqualTilde": "≂",
		"equest": "≟",
		"Equilibrium": "⇌",
		"equiv": "≡",
		"equivDD": "⩸",
		"eqvparsl": "⧥",
		"erarr": "⥱",
		"erDot": "≓",
		"escr": "ℯ",
		"Escr": "ℰ",
		"esdot": "≐",
		"Esim": "⩳",
		"esim": "≂",
		"Eta": "Η",
		"eta": "η",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"euro": "€",
		"excl": "!",
		"exist": "∃",
		"Exists": "∃",
		"expectation": "ℰ",
		"exponentiale": "ⅇ",
		"ExponentialE": "ⅇ",
		"fallingdotseq": "≒",
		"Fcy": "Ф",
		"fcy": "ф",
		"female": "♀",
		"ffilig": "ﬃ",
		"fflig": "ﬀ",
		"ffllig": "ﬄ",
		"Ffr": "𝔉",
		"ffr": "𝔣",
		"filig": "ﬁ",
		"FilledSmallSquare": "◼",
		"FilledVerySmallSquare": "▪",
		"fjlig": "fj",
		"flat": "♭",
		"fllig": "ﬂ",
		"fltns": "▱",
		"fnof": "ƒ",
		"Fopf": "𝔽",
		"fopf": "𝕗",
		"forall": "∀",
		"ForAll": "∀",
		"fork": "⋔",
		"forkv": "⫙",
		"Fouriertrf": "ℱ",
		"fpartint": "⨍",
		"frac12": "½",
		"frac13": "⅓",
		"frac14": "¼",
		"frac15": "⅕",
		"frac16": "⅙",
		"frac18": "⅛",
		"frac23": "⅔",
		"frac25": "⅖",
		"frac34": "¾",
		"frac35": "⅗",
		"frac38": "⅜",
		"frac45": "⅘",
		"frac56": "⅚",
		"frac58": "⅝",
		"frac78": "⅞",
		"frasl": "⁄",
		"frown": "⌢",
		"fscr": "𝒻",
		"Fscr": "ℱ",
		"gacute": "ǵ",
		"Gamma": "Γ",
		"gamma": "γ",
		"Gammad": "Ϝ",
		"gammad": "ϝ",
		"gap": "⪆",
		"Gbreve": "Ğ",
		"gbreve": "ğ",
		"Gcedil": "Ģ",
		"Gcirc": "Ĝ",
		"gcirc": "ĝ",
		"Gcy": "Г",
		"gcy": "г",
		"Gdot": "Ġ",
		"gdot": "ġ",
		"ge": "≥",
		"gE": "≧",
		"gEl": "⪌",
		"gel": "⋛",
		"geq": "≥",
		"geqq": "≧",
		"geqslant": "⩾",
		"gescc": "⪩",
		"ges": "⩾",
		"gesdot": "⪀",
		"gesdoto": "⪂",
		"gesdotol": "⪄",
		"gesl": "⋛︀",
		"gesles": "⪔",
		"Gfr": "𝔊",
		"gfr": "𝔤",
		"gg": "≫",
		"Gg": "⋙",
		"ggg": "⋙",
		"gimel": "ℷ",
		"GJcy": "Ѓ",
		"gjcy": "ѓ",
		"gla": "⪥",
		"gl": "≷",
		"glE": "⪒",
		"glj": "⪤",
		"gnap": "⪊",
		"gnapprox": "⪊",
		"gne": "⪈",
		"gnE": "≩",
		"gneq": "⪈",
		"gneqq": "≩",
		"gnsim": "⋧",
		"Gopf": "𝔾",
		"gopf": "𝕘",
		"grave": "`",
		"GreaterEqual": "≥",
		"GreaterEqualLess": "⋛",
		"GreaterFullEqual": "≧",
		"GreaterGreater": "⪢",
		"GreaterLess": "≷",
		"GreaterSlantEqual": "⩾",
		"GreaterTilde": "≳",
		"Gscr": "𝒢",
		"gscr": "ℊ",
		"gsim": "≳",
		"gsime": "⪎",
		"gsiml": "⪐",
		"gtcc": "⪧",
		"gtcir": "⩺",
		"gt": ">",
		"GT": ">",
		"Gt": "≫",
		"gtdot": "⋗",
		"gtlPar": "⦕",
		"gtquest": "⩼",
		"gtrapprox": "⪆",
		"gtrarr": "⥸",
		"gtrdot": "⋗",
		"gtreqless": "⋛",
		"gtreqqless": "⪌",
		"gtrless": "≷",
		"gtrsim": "≳",
		"gvertneqq": "≩︀",
		"gvnE": "≩︀",
		"Hacek": "ˇ",
		"hairsp": " ",
		"half": "½",
		"hamilt": "ℋ",
		"HARDcy": "Ъ",
		"hardcy": "ъ",
		"harrcir": "⥈",
		"harr": "↔",
		"hArr": "⇔",
		"harrw": "↭",
		"Hat": "^",
		"hbar": "ℏ",
		"Hcirc": "Ĥ",
		"hcirc": "ĥ",
		"hearts": "♥",
		"heartsuit": "♥",
		"hellip": "…",
		"hercon": "⊹",
		"hfr": "𝔥",
		"Hfr": "ℌ",
		"HilbertSpace": "ℋ",
		"hksearow": "⤥",
		"hkswarow": "⤦",
		"hoarr": "⇿",
		"homtht": "∻",
		"hookleftarrow": "↩",
		"hookrightarrow": "↪",
		"hopf": "𝕙",
		"Hopf": "ℍ",
		"horbar": "―",
		"HorizontalLine": "─",
		"hscr": "𝒽",
		"Hscr": "ℋ",
		"hslash": "ℏ",
		"Hstrok": "Ħ",
		"hstrok": "ħ",
		"HumpDownHump": "≎",
		"HumpEqual": "≏",
		"hybull": "⁃",
		"hyphen": "‐",
		"Iacute": "Í",
		"iacute": "í",
		"ic": "⁣",
		"Icirc": "Î",
		"icirc": "î",
		"Icy": "И",
		"icy": "и",
		"Idot": "İ",
		"IEcy": "Е",
		"iecy": "е",
		"iexcl": "¡",
		"iff": "⇔",
		"ifr": "𝔦",
		"Ifr": "ℑ",
		"Igrave": "Ì",
		"igrave": "ì",
		"ii": "ⅈ",
		"iiiint": "⨌",
		"iiint": "∭",
		"iinfin": "⧜",
		"iiota": "℩",
		"IJlig": "Ĳ",
		"ijlig": "ĳ",
		"Imacr": "Ī",
		"imacr": "ī",
		"image": "ℑ",
		"ImaginaryI": "ⅈ",
		"imagline": "ℐ",
		"imagpart": "ℑ",
		"imath": "ı",
		"Im": "ℑ",
		"imof": "⊷",
		"imped": "Ƶ",
		"Implies": "⇒",
		"incare": "℅",
		"in": "∈",
		"infin": "∞",
		"infintie": "⧝",
		"inodot": "ı",
		"intcal": "⊺",
		"int": "∫",
		"Int": "∬",
		"integers": "ℤ",
		"Integral": "∫",
		"intercal": "⊺",
		"Intersection": "⋂",
		"intlarhk": "⨗",
		"intprod": "⨼",
		"InvisibleComma": "⁣",
		"InvisibleTimes": "⁢",
		"IOcy": "Ё",
		"iocy": "ё",
		"Iogon": "Į",
		"iogon": "į",
		"Iopf": "𝕀",
		"iopf": "𝕚",
		"Iota": "Ι",
		"iota": "ι",
		"iprod": "⨼",
		"iquest": "¿",
		"iscr": "𝒾",
		"Iscr": "ℐ",
		"isin": "∈",
		"isindot": "⋵",
		"isinE": "⋹",
		"isins": "⋴",
		"isinsv": "⋳",
		"isinv": "∈",
		"it": "⁢",
		"Itilde": "Ĩ",
		"itilde": "ĩ",
		"Iukcy": "І",
		"iukcy": "і",
		"Iuml": "Ï",
		"iuml": "ï",
		"Jcirc": "Ĵ",
		"jcirc": "ĵ",
		"Jcy": "Й",
		"jcy": "й",
		"Jfr": "𝔍",
		"jfr": "𝔧",
		"jmath": "ȷ",
		"Jopf": "𝕁",
		"jopf": "𝕛",
		"Jscr": "𝒥",
		"jscr": "𝒿",
		"Jsercy": "Ј",
		"jsercy": "ј",
		"Jukcy": "Є",
		"jukcy": "є",
		"Kappa": "Κ",
		"kappa": "κ",
		"kappav": "ϰ",
		"Kcedil": "Ķ",
		"kcedil": "ķ",
		"Kcy": "К",
		"kcy": "к",
		"Kfr": "𝔎",
		"kfr": "𝔨",
		"kgreen": "ĸ",
		"KHcy": "Х",
		"khcy": "х",
		"KJcy": "Ќ",
		"kjcy": "ќ",
		"Kopf": "𝕂",
		"kopf": "𝕜",
		"Kscr": "𝒦",
		"kscr": "𝓀",
		"lAarr": "⇚",
		"Lacute": "Ĺ",
		"lacute": "ĺ",
		"laemptyv": "⦴",
		"lagran": "ℒ",
		"Lambda": "Λ",
		"lambda": "λ",
		"lang": "⟨",
		"Lang": "⟪",
		"langd": "⦑",
		"langle": "⟨",
		"lap": "⪅",
		"Laplacetrf": "ℒ",
		"laquo": "«",
		"larrb": "⇤",
		"larrbfs": "⤟",
		"larr": "←",
		"Larr": "↞",
		"lArr": "⇐",
		"larrfs": "⤝",
		"larrhk": "↩",
		"larrlp": "↫",
		"larrpl": "⤹",
		"larrsim": "⥳",
		"larrtl": "↢",
		"latail": "⤙",
		"lAtail": "⤛",
		"lat": "⪫",
		"late": "⪭",
		"lates": "⪭︀",
		"lbarr": "⤌",
		"lBarr": "⤎",
		"lbbrk": "❲",
		"lbrace": "{",
		"lbrack": "[",
		"lbrke": "⦋",
		"lbrksld": "⦏",
		"lbrkslu": "⦍",
		"Lcaron": "Ľ",
		"lcaron": "ľ",
		"Lcedil": "Ļ",
		"lcedil": "ļ",
		"lceil": "⌈",
		"lcub": "{",
		"Lcy": "Л",
		"lcy": "л",
		"ldca": "⤶",
		"ldquo": "“",
		"ldquor": "„",
		"ldrdhar": "⥧",
		"ldrushar": "⥋",
		"ldsh": "↲",
		"le": "≤",
		"lE": "≦",
		"LeftAngleBracket": "⟨",
		"LeftArrowBar": "⇤",
		"leftarrow": "←",
		"LeftArrow": "←",
		"Leftarrow": "⇐",
		"LeftArrowRightArrow": "⇆",
		"leftarrowtail": "↢",
		"LeftCeiling": "⌈",
		"LeftDoubleBracket": "⟦",
		"LeftDownTeeVector": "⥡",
		"LeftDownVectorBar": "⥙",
		"LeftDownVector": "⇃",
		"LeftFloor": "⌊",
		"leftharpoondown": "↽",
		"leftharpoonup": "↼",
		"leftleftarrows": "⇇",
		"leftrightarrow": "↔",
		"LeftRightArrow": "↔",
		"Leftrightarrow": "⇔",
		"leftrightarrows": "⇆",
		"leftrightharpoons": "⇋",
		"leftrightsquigarrow": "↭",
		"LeftRightVector": "⥎",
		"LeftTeeArrow": "↤",
		"LeftTee": "⊣",
		"LeftTeeVector": "⥚",
		"leftthreetimes": "⋋",
		"LeftTriangleBar": "⧏",
		"LeftTriangle": "⊲",
		"LeftTriangleEqual": "⊴",
		"LeftUpDownVector": "⥑",
		"LeftUpTeeVector": "⥠",
		"LeftUpVectorBar": "⥘",
		"LeftUpVector": "↿",
		"LeftVectorBar": "⥒",
		"LeftVector": "↼",
		"lEg": "⪋",
		"leg": "⋚",
		"leq": "≤",
		"leqq": "≦",
		"leqslant": "⩽",
		"lescc": "⪨",
		"les": "⩽",
		"lesdot": "⩿",
		"lesdoto": "⪁",
		"lesdotor": "⪃",
		"lesg": "⋚︀",
		"lesges": "⪓",
		"lessapprox": "⪅",
		"lessdot": "⋖",
		"lesseqgtr": "⋚",
		"lesseqqgtr": "⪋",
		"LessEqualGreater": "⋚",
		"LessFullEqual": "≦",
		"LessGreater": "≶",
		"lessgtr": "≶",
		"LessLess": "⪡",
		"lesssim": "≲",
		"LessSlantEqual": "⩽",
		"LessTilde": "≲",
		"lfisht": "⥼",
		"lfloor": "⌊",
		"Lfr": "𝔏",
		"lfr": "𝔩",
		"lg": "≶",
		"lgE": "⪑",
		"lHar": "⥢",
		"lhard": "↽",
		"lharu": "↼",
		"lharul": "⥪",
		"lhblk": "▄",
		"LJcy": "Љ",
		"ljcy": "љ",
		"llarr": "⇇",
		"ll": "≪",
		"Ll": "⋘",
		"llcorner": "⌞",
		"Lleftarrow": "⇚",
		"llhard": "⥫",
		"lltri": "◺",
		"Lmidot": "Ŀ",
		"lmidot": "ŀ",
		"lmoustache": "⎰",
		"lmoust": "⎰",
		"lnap": "⪉",
		"lnapprox": "⪉",
		"lne": "⪇",
		"lnE": "≨",
		"lneq": "⪇",
		"lneqq": "≨",
		"lnsim": "⋦",
		"loang": "⟬",
		"loarr": "⇽",
		"lobrk": "⟦",
		"longleftarrow": "⟵",
		"LongLeftArrow": "⟵",
		"Longleftarrow": "⟸",
		"longleftrightarrow": "⟷",
		"LongLeftRightArrow": "⟷",
		"Longleftrightarrow": "⟺",
		"longmapsto": "⟼",
		"longrightarrow": "⟶",
		"LongRightArrow": "⟶",
		"Longrightarrow": "⟹",
		"looparrowleft": "↫",
		"looparrowright": "↬",
		"lopar": "⦅",
		"Lopf": "𝕃",
		"lopf": "𝕝",
		"loplus": "⨭",
		"lotimes": "⨴",
		"lowast": "∗",
		"lowbar": "_",
		"LowerLeftArrow": "↙",
		"LowerRightArrow": "↘",
		"loz": "◊",
		"lozenge": "◊",
		"lozf": "⧫",
		"lpar": "(",
		"lparlt": "⦓",
		"lrarr": "⇆",
		"lrcorner": "⌟",
		"lrhar": "⇋",
		"lrhard": "⥭",
		"lrm": "‎",
		"lrtri": "⊿",
		"lsaquo": "‹",
		"lscr": "𝓁",
		"Lscr": "ℒ",
		"lsh": "↰",
		"Lsh": "↰",
		"lsim": "≲",
		"lsime": "⪍",
		"lsimg": "⪏",
		"lsqb": "[",
		"lsquo": "‘",
		"lsquor": "‚",
		"Lstrok": "Ł",
		"lstrok": "ł",
		"ltcc": "⪦",
		"ltcir": "⩹",
		"lt": "<",
		"LT": "<",
		"Lt": "≪",
		"ltdot": "⋖",
		"lthree": "⋋",
		"ltimes": "⋉",
		"ltlarr": "⥶",
		"ltquest": "⩻",
		"ltri": "◃",
		"ltrie": "⊴",
		"ltrif": "◂",
		"ltrPar": "⦖",
		"lurdshar": "⥊",
		"luruhar": "⥦",
		"lvertneqq": "≨︀",
		"lvnE": "≨︀",
		"macr": "¯",
		"male": "♂",
		"malt": "✠",
		"maltese": "✠",
		"Map": "⤅",
		"map": "↦",
		"mapsto": "↦",
		"mapstodown": "↧",
		"mapstoleft": "↤",
		"mapstoup": "↥",
		"marker": "▮",
		"mcomma": "⨩",
		"Mcy": "М",
		"mcy": "м",
		"mdash": "—",
		"mDDot": "∺",
		"measuredangle": "∡",
		"MediumSpace": " ",
		"Mellintrf": "ℳ",
		"Mfr": "𝔐",
		"mfr": "𝔪",
		"mho": "℧",
		"micro": "µ",
		"midast": "*",
		"midcir": "⫰",
		"mid": "∣",
		"middot": "·",
		"minusb": "⊟",
		"minus": "−",
		"minusd": "∸",
		"minusdu": "⨪",
		"MinusPlus": "∓",
		"mlcp": "⫛",
		"mldr": "…",
		"mnplus": "∓",
		"models": "⊧",
		"Mopf": "𝕄",
		"mopf": "𝕞",
		"mp": "∓",
		"mscr": "𝓂",
		"Mscr": "ℳ",
		"mstpos": "∾",
		"Mu": "Μ",
		"mu": "μ",
		"multimap": "⊸",
		"mumap": "⊸",
		"nabla": "∇",
		"Nacute": "Ń",
		"nacute": "ń",
		"nang": "∠⃒",
		"nap": "≉",
		"napE": "⩰̸",
		"napid": "≋̸",
		"napos": "ŉ",
		"napprox": "≉",
		"natural": "♮",
		"naturals": "ℕ",
		"natur": "♮",
		"nbsp": " ",
		"nbump": "≎̸",
		"nbumpe": "≏̸",
		"ncap": "⩃",
		"Ncaron": "Ň",
		"ncaron": "ň",
		"Ncedil": "Ņ",
		"ncedil": "ņ",
		"ncong": "≇",
		"ncongdot": "⩭̸",
		"ncup": "⩂",
		"Ncy": "Н",
		"ncy": "н",
		"ndash": "–",
		"nearhk": "⤤",
		"nearr": "↗",
		"neArr": "⇗",
		"nearrow": "↗",
		"ne": "≠",
		"nedot": "≐̸",
		"NegativeMediumSpace": "​",
		"NegativeThickSpace": "​",
		"NegativeThinSpace": "​",
		"NegativeVeryThinSpace": "​",
		"nequiv": "≢",
		"nesear": "⤨",
		"nesim": "≂̸",
		"NestedGreaterGreater": "≫",
		"NestedLessLess": "≪",
		"NewLine": "\n",
		"nexist": "∄",
		"nexists": "∄",
		"Nfr": "𝔑",
		"nfr": "𝔫",
		"ngE": "≧̸",
		"nge": "≱",
		"ngeq": "≱",
		"ngeqq": "≧̸",
		"ngeqslant": "⩾̸",
		"nges": "⩾̸",
		"nGg": "⋙̸",
		"ngsim": "≵",
		"nGt": "≫⃒",
		"ngt": "≯",
		"ngtr": "≯",
		"nGtv": "≫̸",
		"nharr": "↮",
		"nhArr": "⇎",
		"nhpar": "⫲",
		"ni": "∋",
		"nis": "⋼",
		"nisd": "⋺",
		"niv": "∋",
		"NJcy": "Њ",
		"njcy": "њ",
		"nlarr": "↚",
		"nlArr": "⇍",
		"nldr": "‥",
		"nlE": "≦̸",
		"nle": "≰",
		"nleftarrow": "↚",
		"nLeftarrow": "⇍",
		"nleftrightarrow": "↮",
		"nLeftrightarrow": "⇎",
		"nleq": "≰",
		"nleqq": "≦̸",
		"nleqslant": "⩽̸",
		"nles": "⩽̸",
		"nless": "≮",
		"nLl": "⋘̸",
		"nlsim": "≴",
		"nLt": "≪⃒",
		"nlt": "≮",
		"nltri": "⋪",
		"nltrie": "⋬",
		"nLtv": "≪̸",
		"nmid": "∤",
		"NoBreak": "⁠",
		"NonBreakingSpace": " ",
		"nopf": "𝕟",
		"Nopf": "ℕ",
		"Not": "⫬",
		"not": "¬",
		"NotCongruent": "≢",
		"NotCupCap": "≭",
		"NotDoubleVerticalBar": "∦",
		"NotElement": "∉",
		"NotEqual": "≠",
		"NotEqualTilde": "≂̸",
		"NotExists": "∄",
		"NotGreater": "≯",
		"NotGreaterEqual": "≱",
		"NotGreaterFullEqual": "≧̸",
		"NotGreaterGreater": "≫̸",
		"NotGreaterLess": "≹",
		"NotGreaterSlantEqual": "⩾̸",
		"NotGreaterTilde": "≵",
		"NotHumpDownHump": "≎̸",
		"NotHumpEqual": "≏̸",
		"notin": "∉",
		"notindot": "⋵̸",
		"notinE": "⋹̸",
		"notinva": "∉",
		"notinvb": "⋷",
		"notinvc": "⋶",
		"NotLeftTriangleBar": "⧏̸",
		"NotLeftTriangle": "⋪",
		"NotLeftTriangleEqual": "⋬",
		"NotLess": "≮",
		"NotLessEqual": "≰",
		"NotLessGreater": "≸",
		"NotLessLess": "≪̸",
		"NotLessSlantEqual": "⩽̸",
		"NotLessTilde": "≴",
		"NotNestedGreaterGreater": "⪢̸",
		"NotNestedLessLess": "⪡̸",
		"notni": "∌",
		"notniva": "∌",
		"notnivb": "⋾",
		"notnivc": "⋽",
		"NotPrecedes": "⊀",
		"NotPrecedesEqual": "⪯̸",
		"NotPrecedesSlantEqual": "⋠",
		"NotReverseElement": "∌",
		"NotRightTriangleBar": "⧐̸",
		"NotRightTriangle": "⋫",
		"NotRightTriangleEqual": "⋭",
		"NotSquareSubset": "⊏̸",
		"NotSquareSubsetEqual": "⋢",
		"NotSquareSuperset": "⊐̸",
		"NotSquareSupersetEqual": "⋣",
		"NotSubset": "⊂⃒",
		"NotSubsetEqual": "⊈",
		"NotSucceeds": "⊁",
		"NotSucceedsEqual": "⪰̸",
		"NotSucceedsSlantEqual": "⋡",
		"NotSucceedsTilde": "≿̸",
		"NotSuperset": "⊃⃒",
		"NotSupersetEqual": "⊉",
		"NotTilde": "≁",
		"NotTildeEqual": "≄",
		"NotTildeFullEqual": "≇",
		"NotTildeTilde": "≉",
		"NotVerticalBar": "∤",
		"nparallel": "∦",
		"npar": "∦",
		"nparsl": "⫽⃥",
		"npart": "∂̸",
		"npolint": "⨔",
		"npr": "⊀",
		"nprcue": "⋠",
		"nprec": "⊀",
		"npreceq": "⪯̸",
		"npre": "⪯̸",
		"nrarrc": "⤳̸",
		"nrarr": "↛",
		"nrArr": "⇏",
		"nrarrw": "↝̸",
		"nrightarrow": "↛",
		"nRightarrow": "⇏",
		"nrtri": "⋫",
		"nrtrie": "⋭",
		"nsc": "⊁",
		"nsccue": "⋡",
		"nsce": "⪰̸",
		"Nscr": "𝒩",
		"nscr": "𝓃",
		"nshortmid": "∤",
		"nshortparallel": "∦",
		"nsim": "≁",
		"nsime": "≄",
		"nsimeq": "≄",
		"nsmid": "∤",
		"nspar": "∦",
		"nsqsube": "⋢",
		"nsqsupe": "⋣",
		"nsub": "⊄",
		"nsubE": "⫅̸",
		"nsube": "⊈",
		"nsubset": "⊂⃒",
		"nsubseteq": "⊈",
		"nsubseteqq": "⫅̸",
		"nsucc": "⊁",
		"nsucceq": "⪰̸",
		"nsup": "⊅",
		"nsupE": "⫆̸",
		"nsupe": "⊉",
		"nsupset": "⊃⃒",
		"nsupseteq": "⊉",
		"nsupseteqq": "⫆̸",
		"ntgl": "≹",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"ntlg": "≸",
		"ntriangleleft": "⋪",
		"ntrianglelefteq": "⋬",
		"ntriangleright": "⋫",
		"ntrianglerighteq": "⋭",
		"Nu": "Ν",
		"nu": "ν",
		"num": "#",
		"numero": "№",
		"numsp": " ",
		"nvap": "≍⃒",
		"nvdash": "⊬",
		"nvDash": "⊭",
		"nVdash": "⊮",
		"nVDash": "⊯",
		"nvge": "≥⃒",
		"nvgt": ">⃒",
		"nvHarr": "⤄",
		"nvinfin": "⧞",
		"nvlArr": "⤂",
		"nvle": "≤⃒",
		"nvlt": "<⃒",
		"nvltrie": "⊴⃒",
		"nvrArr": "⤃",
		"nvrtrie": "⊵⃒",
		"nvsim": "∼⃒",
		"nwarhk": "⤣",
		"nwarr": "↖",
		"nwArr": "⇖",
		"nwarrow": "↖",
		"nwnear": "⤧",
		"Oacute": "Ó",
		"oacute": "ó",
		"oast": "⊛",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"ocir": "⊚",
		"Ocy": "О",
		"ocy": "о",
		"odash": "⊝",
		"Odblac": "Ő",
		"odblac": "ő",
		"odiv": "⨸",
		"odot": "⊙",
		"odsold": "⦼",
		"OElig": "Œ",
		"oelig": "œ",
		"ofcir": "⦿",
		"Ofr": "𝔒",
		"ofr": "𝔬",
		"ogon": "˛",
		"Ograve": "Ò",
		"ograve": "ò",
		"ogt": "⧁",
		"ohbar": "⦵",
		"ohm": "Ω",
		"oint": "∮",
		"olarr": "↺",
		"olcir": "⦾",
		"olcross": "⦻",
		"oline": "‾",
		"olt": "⧀",
		"Omacr": "Ō",
		"omacr": "ō",
		"Omega": "Ω",
		"omega": "ω",
		"Omicron": "Ο",
		"omicron": "ο",
		"omid": "⦶",
		"ominus": "⊖",
		"Oopf": "𝕆",
		"oopf": "𝕠",
		"opar": "⦷",
		"OpenCurlyDoubleQuote": "“",
		"OpenCurlyQuote": "‘",
		"operp": "⦹",
		"oplus": "⊕",
		"orarr": "↻",
		"Or": "⩔",
		"or": "∨",
		"ord": "⩝",
		"order": "ℴ",
		"orderof": "ℴ",
		"ordf": "ª",
		"ordm": "º",
		"origof": "⊶",
		"oror": "⩖",
		"orslope": "⩗",
		"orv": "⩛",
		"oS": "Ⓢ",
		"Oscr": "𝒪",
		"oscr": "ℴ",
		"Oslash": "Ø",
		"oslash": "ø",
		"osol": "⊘",
		"Otilde": "Õ",
		"otilde": "õ",
		"otimesas": "⨶",
		"Otimes": "⨷",
		"otimes": "⊗",
		"Ouml": "Ö",
		"ouml": "ö",
		"ovbar": "⌽",
		"OverBar": "‾",
		"OverBrace": "⏞",
		"OverBracket": "⎴",
		"OverParenthesis": "⏜",
		"para": "¶",
		"parallel": "∥",
		"par": "∥",
		"parsim": "⫳",
		"parsl": "⫽",
		"part": "∂",
		"PartialD": "∂",
		"Pcy": "П",
		"pcy": "п",
		"percnt": "%",
		"period": ".",
		"permil": "‰",
		"perp": "⊥",
		"pertenk": "‱",
		"Pfr": "𝔓",
		"pfr": "𝔭",
		"Phi": "Φ",
		"phi": "φ",
		"phiv": "ϕ",
		"phmmat": "ℳ",
		"phone": "☎",
		"Pi": "Π",
		"pi": "π",
		"pitchfork": "⋔",
		"piv": "ϖ",
		"planck": "ℏ",
		"planckh": "ℎ",
		"plankv": "ℏ",
		"plusacir": "⨣",
		"plusb": "⊞",
		"pluscir": "⨢",
		"plus": "+",
		"plusdo": "∔",
		"plusdu": "⨥",
		"pluse": "⩲",
		"PlusMinus": "±",
		"plusmn": "±",
		"plussim": "⨦",
		"plustwo": "⨧",
		"pm": "±",
		"Poincareplane": "ℌ",
		"pointint": "⨕",
		"popf": "𝕡",
		"Popf": "ℙ",
		"pound": "£",
		"prap": "⪷",
		"Pr": "⪻",
		"pr": "≺",
		"prcue": "≼",
		"precapprox": "⪷",
		"prec": "≺",
		"preccurlyeq": "≼",
		"Precedes": "≺",
		"PrecedesEqual": "⪯",
		"PrecedesSlantEqual": "≼",
		"PrecedesTilde": "≾",
		"preceq": "⪯",
		"precnapprox": "⪹",
		"precneqq": "⪵",
		"precnsim": "⋨",
		"pre": "⪯",
		"prE": "⪳",
		"precsim": "≾",
		"prime": "′",
		"Prime": "″",
		"primes": "ℙ",
		"prnap": "⪹",
		"prnE": "⪵",
		"prnsim": "⋨",
		"prod": "∏",
		"Product": "∏",
		"profalar": "⌮",
		"profline": "⌒",
		"profsurf": "⌓",
		"prop": "∝",
		"Proportional": "∝",
		"Proportion": "∷",
		"propto": "∝",
		"prsim": "≾",
		"prurel": "⊰",
		"Pscr": "𝒫",
		"pscr": "𝓅",
		"Psi": "Ψ",
		"psi": "ψ",
		"puncsp": " ",
		"Qfr": "𝔔",
		"qfr": "𝔮",
		"qint": "⨌",
		"qopf": "𝕢",
		"Qopf": "ℚ",
		"qprime": "⁗",
		"Qscr": "𝒬",
		"qscr": "𝓆",
		"quaternions": "ℍ",
		"quatint": "⨖",
		"quest": "?",
		"questeq": "≟",
		"quot": "\"",
		"QUOT": "\"",
		"rAarr": "⇛",
		"race": "∽̱",
		"Racute": "Ŕ",
		"racute": "ŕ",
		"radic": "√",
		"raemptyv": "⦳",
		"rang": "⟩",
		"Rang": "⟫",
		"rangd": "⦒",
		"range": "⦥",
		"rangle": "⟩",
		"raquo": "»",
		"rarrap": "⥵",
		"rarrb": "⇥",
		"rarrbfs": "⤠",
		"rarrc": "⤳",
		"rarr": "→",
		"Rarr": "↠",
		"rArr": "⇒",
		"rarrfs": "⤞",
		"rarrhk": "↪",
		"rarrlp": "↬",
		"rarrpl": "⥅",
		"rarrsim": "⥴",
		"Rarrtl": "⤖",
		"rarrtl": "↣",
		"rarrw": "↝",
		"ratail": "⤚",
		"rAtail": "⤜",
		"ratio": "∶",
		"rationals": "ℚ",
		"rbarr": "⤍",
		"rBarr": "⤏",
		"RBarr": "⤐",
		"rbbrk": "❳",
		"rbrace": "}",
		"rbrack": "]",
		"rbrke": "⦌",
		"rbrksld": "⦎",
		"rbrkslu": "⦐",
		"Rcaron": "Ř",
		"rcaron": "ř",
		"Rcedil": "Ŗ",
		"rcedil": "ŗ",
		"rceil": "⌉",
		"rcub": "}",
		"Rcy": "Р",
		"rcy": "р",
		"rdca": "⤷",
		"rdldhar": "⥩",
		"rdquo": "”",
		"rdquor": "”",
		"rdsh": "↳",
		"real": "ℜ",
		"realine": "ℛ",
		"realpart": "ℜ",
		"reals": "ℝ",
		"Re": "ℜ",
		"rect": "▭",
		"reg": "®",
		"REG": "®",
		"ReverseElement": "∋",
		"ReverseEquilibrium": "⇋",
		"ReverseUpEquilibrium": "⥯",
		"rfisht": "⥽",
		"rfloor": "⌋",
		"rfr": "𝔯",
		"Rfr": "ℜ",
		"rHar": "⥤",
		"rhard": "⇁",
		"rharu": "⇀",
		"rharul": "⥬",
		"Rho": "Ρ",
		"rho": "ρ",
		"rhov": "ϱ",
		"RightAngleBracket": "⟩",
		"RightArrowBar": "⇥",
		"rightarrow": "→",
		"RightArrow": "→",
		"Rightarrow": "⇒",
		"RightArrowLeftArrow": "⇄",
		"rightarrowtail": "↣",
		"RightCeiling": "⌉",
		"RightDoubleBracket": "⟧",
		"RightDownTeeVector": "⥝",
		"RightDownVectorBar": "⥕",
		"RightDownVector": "⇂",
		"RightFloor": "⌋",
		"rightharpoondown": "⇁",
		"rightharpoonup": "⇀",
		"rightleftarrows": "⇄",
		"rightleftharpoons": "⇌",
		"rightrightarrows": "⇉",
		"rightsquigarrow": "↝",
		"RightTeeArrow": "↦",
		"RightTee": "⊢",
		"RightTeeVector": "⥛",
		"rightthreetimes": "⋌",
		"RightTriangleBar": "⧐",
		"RightTriangle": "⊳",
		"RightTriangleEqual": "⊵",
		"RightUpDownVector": "⥏",
		"RightUpTeeVector": "⥜",
		"RightUpVectorBar": "⥔",
		"RightUpVector": "↾",
		"RightVectorBar": "⥓",
		"RightVector": "⇀",
		"ring": "˚",
		"risingdotseq": "≓",
		"rlarr": "⇄",
		"rlhar": "⇌",
		"rlm": "‏",
		"rmoustache": "⎱",
		"rmoust": "⎱",
		"rnmid": "⫮",
		"roang": "⟭",
		"roarr": "⇾",
		"robrk": "⟧",
		"ropar": "⦆",
		"ropf": "𝕣",
		"Ropf": "ℝ",
		"roplus": "⨮",
		"rotimes": "⨵",
		"RoundImplies": "⥰",
		"rpar": ")",
		"rpargt": "⦔",
		"rppolint": "⨒",
		"rrarr": "⇉",
		"Rrightarrow": "⇛",
		"rsaquo": "›",
		"rscr": "𝓇",
		"Rscr": "ℛ",
		"rsh": "↱",
		"Rsh": "↱",
		"rsqb": "]",
		"rsquo": "’",
		"rsquor": "’",
		"rthree": "⋌",
		"rtimes": "⋊",
		"rtri": "▹",
		"rtrie": "⊵",
		"rtrif": "▸",
		"rtriltri": "⧎",
		"RuleDelayed": "⧴",
		"ruluhar": "⥨",
		"rx": "℞",
		"Sacute": "Ś",
		"sacute": "ś",
		"sbquo": "‚",
		"scap": "⪸",
		"Scaron": "Š",
		"scaron": "š",
		"Sc": "⪼",
		"sc": "≻",
		"sccue": "≽",
		"sce": "⪰",
		"scE": "⪴",
		"Scedil": "Ş",
		"scedil": "ş",
		"Scirc": "Ŝ",
		"scirc": "ŝ",
		"scnap": "⪺",
		"scnE": "⪶",
		"scnsim": "⋩",
		"scpolint": "⨓",
		"scsim": "≿",
		"Scy": "С",
		"scy": "с",
		"sdotb": "⊡",
		"sdot": "⋅",
		"sdote": "⩦",
		"searhk": "⤥",
		"searr": "↘",
		"seArr": "⇘",
		"searrow": "↘",
		"sect": "§",
		"semi": ";",
		"seswar": "⤩",
		"setminus": "∖",
		"setmn": "∖",
		"sext": "✶",
		"Sfr": "𝔖",
		"sfr": "𝔰",
		"sfrown": "⌢",
		"sharp": "♯",
		"SHCHcy": "Щ",
		"shchcy": "щ",
		"SHcy": "Ш",
		"shcy": "ш",
		"ShortDownArrow": "↓",
		"ShortLeftArrow": "←",
		"shortmid": "∣",
		"shortparallel": "∥",
		"ShortRightArrow": "→",
		"ShortUpArrow": "↑",
		"shy": "­",
		"Sigma": "Σ",
		"sigma": "σ",
		"sigmaf": "ς",
		"sigmav": "ς",
		"sim": "∼",
		"simdot": "⩪",
		"sime": "≃",
		"simeq": "≃",
		"simg": "⪞",
		"simgE": "⪠",
		"siml": "⪝",
		"simlE": "⪟",
		"simne": "≆",
		"simplus": "⨤",
		"simrarr": "⥲",
		"slarr": "←",
		"SmallCircle": "∘",
		"smallsetminus": "∖",
		"smashp": "⨳",
		"smeparsl": "⧤",
		"smid": "∣",
		"smile": "⌣",
		"smt": "⪪",
		"smte": "⪬",
		"smtes": "⪬︀",
		"SOFTcy": "Ь",
		"softcy": "ь",
		"solbar": "⌿",
		"solb": "⧄",
		"sol": "/",
		"Sopf": "𝕊",
		"sopf": "𝕤",
		"spades": "♠",
		"spadesuit": "♠",
		"spar": "∥",
		"sqcap": "⊓",
		"sqcaps": "⊓︀",
		"sqcup": "⊔",
		"sqcups": "⊔︀",
		"Sqrt": "√",
		"sqsub": "⊏",
		"sqsube": "⊑",
		"sqsubset": "⊏",
		"sqsubseteq": "⊑",
		"sqsup": "⊐",
		"sqsupe": "⊒",
		"sqsupset": "⊐",
		"sqsupseteq": "⊒",
		"square": "□",
		"Square": "□",
		"SquareIntersection": "⊓",
		"SquareSubset": "⊏",
		"SquareSubsetEqual": "⊑",
		"SquareSuperset": "⊐",
		"SquareSupersetEqual": "⊒",
		"SquareUnion": "⊔",
		"squarf": "▪",
		"squ": "□",
		"squf": "▪",
		"srarr": "→",
		"Sscr": "𝒮",
		"sscr": "𝓈",
		"ssetmn": "∖",
		"ssmile": "⌣",
		"sstarf": "⋆",
		"Star": "⋆",
		"star": "☆",
		"starf": "★",
		"straightepsilon": "ϵ",
		"straightphi": "ϕ",
		"strns": "¯",
		"sub": "⊂",
		"Sub": "⋐",
		"subdot": "⪽",
		"subE": "⫅",
		"sube": "⊆",
		"subedot": "⫃",
		"submult": "⫁",
		"subnE": "⫋",
		"subne": "⊊",
		"subplus": "⪿",
		"subrarr": "⥹",
		"subset": "⊂",
		"Subset": "⋐",
		"subseteq": "⊆",
		"subseteqq": "⫅",
		"SubsetEqual": "⊆",
		"subsetneq": "⊊",
		"subsetneqq": "⫋",
		"subsim": "⫇",
		"subsub": "⫕",
		"subsup": "⫓",
		"succapprox": "⪸",
		"succ": "≻",
		"succcurlyeq": "≽",
		"Succeeds": "≻",
		"SucceedsEqual": "⪰",
		"SucceedsSlantEqual": "≽",
		"SucceedsTilde": "≿",
		"succeq": "⪰",
		"succnapprox": "⪺",
		"succneqq": "⪶",
		"succnsim": "⋩",
		"succsim": "≿",
		"SuchThat": "∋",
		"sum": "∑",
		"Sum": "∑",
		"sung": "♪",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"sup": "⊃",
		"Sup": "⋑",
		"supdot": "⪾",
		"supdsub": "⫘",
		"supE": "⫆",
		"supe": "⊇",
		"supedot": "⫄",
		"Superset": "⊃",
		"SupersetEqual": "⊇",
		"suphsol": "⟉",
		"suphsub": "⫗",
		"suplarr": "⥻",
		"supmult": "⫂",
		"supnE": "⫌",
		"supne": "⊋",
		"supplus": "⫀",
		"supset": "⊃",
		"Supset": "⋑",
		"supseteq": "⊇",
		"supseteqq": "⫆",
		"supsetneq": "⊋",
		"supsetneqq": "⫌",
		"supsim": "⫈",
		"supsub": "⫔",
		"supsup": "⫖",
		"swarhk": "⤦",
		"swarr": "↙",
		"swArr": "⇙",
		"swarrow": "↙",
		"swnwar": "⤪",
		"szlig": "ß",
		"Tab": "\t",
		"target": "⌖",
		"Tau": "Τ",
		"tau": "τ",
		"tbrk": "⎴",
		"Tcaron": "Ť",
		"tcaron": "ť",
		"Tcedil": "Ţ",
		"tcedil": "ţ",
		"Tcy": "Т",
		"tcy": "т",
		"tdot": "⃛",
		"telrec": "⌕",
		"Tfr": "𝔗",
		"tfr": "𝔱",
		"there4": "∴",
		"therefore": "∴",
		"Therefore": "∴",
		"Theta": "Θ",
		"theta": "θ",
		"thetasym": "ϑ",
		"thetav": "ϑ",
		"thickapprox": "≈",
		"thicksim": "∼",
		"ThickSpace": "  ",
		"ThinSpace": " ",
		"thinsp": " ",
		"thkap": "≈",
		"thksim": "∼",
		"THORN": "Þ",
		"thorn": "þ",
		"tilde": "˜",
		"Tilde": "∼",
		"TildeEqual": "≃",
		"TildeFullEqual": "≅",
		"TildeTilde": "≈",
		"timesbar": "⨱",
		"timesb": "⊠",
		"times": "×",
		"timesd": "⨰",
		"tint": "∭",
		"toea": "⤨",
		"topbot": "⌶",
		"topcir": "⫱",
		"top": "⊤",
		"Topf": "𝕋",
		"topf": "𝕥",
		"topfork": "⫚",
		"tosa": "⤩",
		"tprime": "‴",
		"trade": "™",
		"TRADE": "™",
		"triangle": "▵",
		"triangledown": "▿",
		"triangleleft": "◃",
		"trianglelefteq": "⊴",
		"triangleq": "≜",
		"triangleright": "▹",
		"trianglerighteq": "⊵",
		"tridot": "◬",
		"trie": "≜",
		"triminus": "⨺",
		"TripleDot": "⃛",
		"triplus": "⨹",
		"trisb": "⧍",
		"tritime": "⨻",
		"trpezium": "⏢",
		"Tscr": "𝒯",
		"tscr": "𝓉",
		"TScy": "Ц",
		"tscy": "ц",
		"TSHcy": "Ћ",
		"tshcy": "ћ",
		"Tstrok": "Ŧ",
		"tstrok": "ŧ",
		"twixt": "≬",
		"twoheadleftarrow": "↞",
		"twoheadrightarrow": "↠",
		"Uacute": "Ú",
		"uacute": "ú",
		"uarr": "↑",
		"Uarr": "↟",
		"uArr": "⇑",
		"Uarrocir": "⥉",
		"Ubrcy": "Ў",
		"ubrcy": "ў",
		"Ubreve": "Ŭ",
		"ubreve": "ŭ",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ucy": "У",
		"ucy": "у",
		"udarr": "⇅",
		"Udblac": "Ű",
		"udblac": "ű",
		"udhar": "⥮",
		"ufisht": "⥾",
		"Ufr": "𝔘",
		"ufr": "𝔲",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uHar": "⥣",
		"uharl": "↿",
		"uharr": "↾",
		"uhblk": "▀",
		"ulcorn": "⌜",
		"ulcorner": "⌜",
		"ulcrop": "⌏",
		"ultri": "◸",
		"Umacr": "Ū",
		"umacr": "ū",
		"uml": "¨",
		"UnderBar": "_",
		"UnderBrace": "⏟",
		"UnderBracket": "⎵",
		"UnderParenthesis": "⏝",
		"Union": "⋃",
		"UnionPlus": "⊎",
		"Uogon": "Ų",
		"uogon": "ų",
		"Uopf": "𝕌",
		"uopf": "𝕦",
		"UpArrowBar": "⤒",
		"uparrow": "↑",
		"UpArrow": "↑",
		"Uparrow": "⇑",
		"UpArrowDownArrow": "⇅",
		"updownarrow": "↕",
		"UpDownArrow": "↕",
		"Updownarrow": "⇕",
		"UpEquilibrium": "⥮",
		"upharpoonleft": "↿",
		"upharpoonright": "↾",
		"uplus": "⊎",
		"UpperLeftArrow": "↖",
		"UpperRightArrow": "↗",
		"upsi": "υ",
		"Upsi": "ϒ",
		"upsih": "ϒ",
		"Upsilon": "Υ",
		"upsilon": "υ",
		"UpTeeArrow": "↥",
		"UpTee": "⊥",
		"upuparrows": "⇈",
		"urcorn": "⌝",
		"urcorner": "⌝",
		"urcrop": "⌎",
		"Uring": "Ů",
		"uring": "ů",
		"urtri": "◹",
		"Uscr": "𝒰",
		"uscr": "𝓊",
		"utdot": "⋰",
		"Utilde": "Ũ",
		"utilde": "ũ",
		"utri": "▵",
		"utrif": "▴",
		"uuarr": "⇈",
		"Uuml": "Ü",
		"uuml": "ü",
		"uwangle": "⦧",
		"vangrt": "⦜",
		"varepsilon": "ϵ",
		"varkappa": "ϰ",
		"varnothing": "∅",
		"varphi": "ϕ",
		"varpi": "ϖ",
		"varpropto": "∝",
		"varr": "↕",
		"vArr": "⇕",
		"varrho": "ϱ",
		"varsigma": "ς",
		"varsubsetneq": "⊊︀",
		"varsubsetneqq": "⫋︀",
		"varsupsetneq": "⊋︀",
		"varsupsetneqq": "⫌︀",
		"vartheta": "ϑ",
		"vartriangleleft": "⊲",
		"vartriangleright": "⊳",
		"vBar": "⫨",
		"Vbar": "⫫",
		"vBarv": "⫩",
		"Vcy": "В",
		"vcy": "в",
		"vdash": "⊢",
		"vDash": "⊨",
		"Vdash": "⊩",
		"VDash": "⊫",
		"Vdashl": "⫦",
		"veebar": "⊻",
		"vee": "∨",
		"Vee": "⋁",
		"veeeq": "≚",
		"vellip": "⋮",
		"verbar": "|",
		"Verbar": "‖",
		"vert": "|",
		"Vert": "‖",
		"VerticalBar": "∣",
		"VerticalLine": "|",
		"VerticalSeparator": "❘",
		"VerticalTilde": "≀",
		"VeryThinSpace": " ",
		"Vfr": "𝔙",
		"vfr": "𝔳",
		"vltri": "⊲",
		"vnsub": "⊂⃒",
		"vnsup": "⊃⃒",
		"Vopf": "𝕍",
		"vopf": "𝕧",
		"vprop": "∝",
		"vrtri": "⊳",
		"Vscr": "𝒱",
		"vscr": "𝓋",
		"vsubnE": "⫋︀",
		"vsubne": "⊊︀",
		"vsupnE": "⫌︀",
		"vsupne": "⊋︀",
		"Vvdash": "⊪",
		"vzigzag": "⦚",
		"Wcirc": "Ŵ",
		"wcirc": "ŵ",
		"wedbar": "⩟",
		"wedge": "∧",
		"Wedge": "⋀",
		"wedgeq": "≙",
		"weierp": "℘",
		"Wfr": "𝔚",
		"wfr": "𝔴",
		"Wopf": "𝕎",
		"wopf": "𝕨",
		"wp": "℘",
		"wr": "≀",
		"wreath": "≀",
		"Wscr": "𝒲",
		"wscr": "𝓌",
		"xcap": "⋂",
		"xcirc": "◯",
		"xcup": "⋃",
		"xdtri": "▽",
		"Xfr": "𝔛",
		"xfr": "𝔵",
		"xharr": "⟷",
		"xhArr": "⟺",
		"Xi": "Ξ",
		"xi": "ξ",
		"xlarr": "⟵",
		"xlArr": "⟸",
		"xmap": "⟼",
		"xnis": "⋻",
		"xodot": "⨀",
		"Xopf": "𝕏",
		"xopf": "𝕩",
		"xoplus": "⨁",
		"xotime": "⨂",
		"xrarr": "⟶",
		"xrArr": "⟹",
		"Xscr": "𝒳",
		"xscr": "𝓍",
		"xsqcup": "⨆",
		"xuplus": "⨄",
		"xutri": "△",
		"xvee": "⋁",
		"xwedge": "⋀",
		"Yacute": "Ý",
		"yacute": "ý",
		"YAcy": "Я",
		"yacy": "я",
		"Ycirc": "Ŷ",
		"ycirc": "ŷ",
		"Ycy": "Ы",
		"ycy": "ы",
		"yen": "¥",
		"Yfr": "𝔜",
		"yfr": "𝔶",
		"YIcy": "Ї",
		"yicy": "ї",
		"Yopf": "𝕐",
		"yopf": "𝕪",
		"Yscr": "𝒴",
		"yscr": "𝓎",
		"YUcy": "Ю",
		"yucy": "ю",
		"yuml": "ÿ",
		"Yuml": "Ÿ",
		"Zacute": "Ź",
		"zacute": "ź",
		"Zcaron": "Ž",
		"zcaron": "ž",
		"Zcy": "З",
		"zcy": "з",
		"Zdot": "Ż",
		"zdot": "ż",
		"zeetrf": "ℨ",
		"ZeroWidthSpace": "​",
		"Zeta": "Ζ",
		"zeta": "ζ",
		"zfr": "𝔷",
		"Zfr": "ℨ",
		"ZHcy": "Ж",
		"zhcy": "ж",
		"zigrarr": "⇝",
		"zopf": "𝕫",
		"Zopf": "ℤ",
		"Zscr": "𝒵",
		"zscr": "𝓏",
		"zwj": "‍",
		"zwnj": "‌"
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
		"amp": "&",
		"apos": "'",
		"gt": ">",
		"lt": "<",
		"quot": "\""
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CodeMirror = window.CodeMirrorEditor;

	var Edit0r = function (_Component) {
	  _inherits(Edit0r, _Component);

	  function Edit0r(props) {
	    _classCallCheck(this, Edit0r);

	    var _this = _possibleConstructorReturn(this, (Edit0r.__proto__ || Object.getPrototypeOf(Edit0r)).call(this, props));

	    _this.onInputChange = _this.onInputChange.bind(_this);
	    return _this;
	  }

	  _createClass(Edit0r, [{
	    key: 'onInputChange',
	    value: function onInputChange(e) {
	      this.props.onChange(e.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          myBodyIsReady = _props.myBodyIsReady,
	          value = _props.value;

	      return _react2.default.createElement(
	        'form',
	        {
	          style: { height: '100%' },
	          className: 'editor pure-form' },
	        _react2.default.createElement(CodeMirror, {
	          myBodyIsReady: myBodyIsReady,
	          mode: 'markdown',
	          theme: 'monokai',
	          value: value,
	          onChange: this.onInputChange })
	      );
	    }
	  }]);

	  return Edit0r;
	}(_react.Component);

	Edit0r.displayName = 'Edit0r';
	Edit0r.propTypes = {
	  onChange: _react.PropTypes.func.isRequired,
	  value: _react.PropTypes.string
	};
	exports.default = Edit0r;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(36);

	var _Edit0r = __webpack_require__(7);

	var _Edit0r2 = _interopRequireDefault(_Edit0r);

	var _codeBlock = __webpack_require__(9);

	var _codeBlock2 = _interopRequireDefault(_codeBlock);

	var _ = __webpack_require__(33);

	var _2 = _interopRequireDefault(_);

	var _placeholderMarkdown = __webpack_require__(10);

	var _placeholderMarkdown2 = _interopRequireDefault(_placeholderMarkdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MarkMyBitchUp = function (_Component) {
	  _inherits(MarkMyBitchUp, _Component);

	  function MarkMyBitchUp(props) {
	    _classCallCheck(this, MarkMyBitchUp);

	    var _this = _possibleConstructorReturn(this, (MarkMyBitchUp.__proto__ || Object.getPrototypeOf(MarkMyBitchUp)).call(this, props));

	    _this.state = {
	      source: _placeholderMarkdown2.default,
	      mode: 'raw',
	      style: {
	        marginTop: 0
	      }
	    };
	    _this.renderers = Object.assign({}, _2.default.renderers, { CodeBlock: _codeBlock2.default });

	    _this.onMarkdownChange = _this.onMarkdownChange.bind(_this);
	    _this.onControlsChange = _this.onControlsChange.bind(_this);
	    _this.myBodyIsReady = _this.myBodyIsReady.bind(_this);
	    return _this;
	  }

	  _createClass(MarkMyBitchUp, [{
	    key: 'onMarkdownChange',
	    value: function onMarkdownChange(source) {
	      this.setState({ source: source });
	    }
	  }, {
	    key: 'onControlsChange',
	    value: function onControlsChange(mode) {
	      this.setState({ mode: mode });
	    }
	  }, {
	    key: 'myBodyIsReady',
	    value: function myBodyIsReady(x) {
	      this.setState({ style: { marginTop: (x > 0 ? -Math.abs(x) : 0) + '%' } });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state,
	          source = _state.source,
	          mode = _state.mode,
	          style = _state.style;

	      return _react2.default.createElement(
	        'div',
	        { className: 'demo' },
	        _react2.default.createElement(
	          'div',
	          { className: 'editor-pane' },
	          _react2.default.createElement(_Edit0r2.default, {
	            value: source,
	            myBodyIsReady: this.myBodyIsReady,
	            onChange: this.onMarkdownChange })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'result-pane' },
	          _react2.default.createElement(_2.default, {
	            className: 'result',
	            style: style,
	            source: source,
	            renderers: this.renderers,
	            skipHtml: mode === 'skip',
	            escapeHtml: mode === 'escape' })
	        )
	      );
	    }
	  }]);

	  return MarkMyBitchUp;
	}(_react.Component);

	MarkMyBitchUp.displayName = 'MarkMyBitchUp';


	(0, _reactDom.render)(_react2.default.createElement(MarkMyBitchUp, null), document.getElementById('main'));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var PureRenderMixin = __webpack_require__(28);
	var hljs = window.hljs;
	var h = React.createElement;

	var CodeBlock = React.createClass({
	    displayName: 'CodeBlock',
	    mixins: [PureRenderMixin],
	    propTypes: {
	        literal: React.PropTypes.string,
	        language: React.PropTypes.string
	    },

	    componentDidMount: function componentDidMount() {
	        this.highlightCode();
	    },

	    componentDidUpdate: function componentDidUpdate() {
	        this.highlightCode();
	    },

	    highlightCode: function highlightCode() {
	        hljs.highlightBlock(this.refs.code);
	    },

	    render: function render() {
	        return h('pre', null, h('code', {
	            ref: 'code',
	            className: this.props.language
	        }, this.props.literal));
	    }
	});

	module.exports = React.createFactory(CodeBlock);

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ['# `<MarkMyBitchUp />`', '* I eat pancakes made of dish sponges.', '* I know how to write in cursive.', '* I had sex with a broomstick!', '', '## Block quote it the fuck up.', '', '<blockquote>', '  This blockquote will change based', '  on the HTML settings above.', '</blockquote>', '', '## Code block it the fuck up.', '', '```js', 'import React from \'react\'', 'import { render } from \'react\'', 'import MarkMyBitchUp from \'react-markdown\'', '', 'render(', '  <MarkMyBitchUp source=\'# Your mother is a whore.\' />,', '  document.getElementById(\'content\')', ')', '```', '', '## FAQ', '', '####  I there somewhere I can go to  get more info?', '', '> Nah.', '', '####  What size shoe is a 10 in men\'s?', '', '> 10', '', '---', 'Component by Dan Rather You Not'].join('\n');

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var assign = __webpack_require__(23);
	var isPlainObject = __webpack_require__(24);
	var xssFilters = __webpack_require__(32);
	var pascalCase = __webpack_require__(27);

	var typeAliases = {
	    blockquote: 'block_quote',
	    thematicbreak: 'thematic_break',
	    htmlblock: 'html_block',
	    htmlinline: 'html_inline',
	    codeblock: 'code_block',
	    hardbreak: 'linebreak'
	};

	var defaultRenderers = {
	    block_quote: 'blockquote', // eslint-disable-line camelcase
	    emph: 'em',
	    linebreak: 'br',
	    image: 'img',
	    item: 'li',
	    link: 'a',
	    paragraph: 'p',
	    strong: 'strong',
	    thematic_break: 'hr', // eslint-disable-line camelcase

	    html_block: HtmlRenderer, // eslint-disable-line camelcase
	    html_inline: HtmlRenderer, // eslint-disable-line camelcase

	    list: function List(props) {
	        var tag = props.type.toLowerCase() === 'bullet' ? 'ul' : 'ol';
	        var attrs = getCoreProps(props);

	        if (props.start !== null && props.start !== 1) {
	            attrs.start = props.start.toString();
	        }

	        return createElement(tag, attrs, props.children);
	    },
	    code_block: function CodeBlock(props) {
	        // eslint-disable-line camelcase
	        var className = props.language && 'language-' + props.language;
	        var code = createElement('code', { className: className }, props.literal);
	        return createElement('pre', getCoreProps(props), code);
	    },
	    code: function Code(props) {
	        return createElement('code', getCoreProps(props), props.children);
	    },
	    heading: function Heading(props) {
	        return createElement('h' + props.level, getCoreProps(props), props.children);
	    },

	    text: null,
	    softbreak: null
	};

	var coreTypes = Object.keys(defaultRenderers);

	function getCoreProps(props) {
	    return {
	        'key': props.nodeKey,
	        'data-sourcepos': props['data-sourcepos']
	    };
	}

	function normalizeTypeName(typeName) {
	    var norm = typeName.toLowerCase();
	    var type = typeAliases[norm] || norm;
	    return typeof defaultRenderers[type] !== 'undefined' ? type : typeName;
	}

	function normalizeRenderers(renderers) {
	    return Object.keys(renderers || {}).reduce(function (normalized, type) {
	        var norm = normalizeTypeName(type);
	        normalized[norm] = renderers[type];
	        return normalized;
	    }, {});
	}

	function HtmlRenderer(props) {
	    var nodeProps = props.escapeHtml ? {} : { dangerouslySetInnerHTML: { __html: props.literal } };
	    var children = props.escapeHtml ? [props.literal] : null;

	    if (props.escapeHtml || !props.skipHtml) {
	        return createElement(props.isBlock ? 'div' : 'span', nodeProps, children);
	    }
	}

	function isGrandChildOfList(node) {
	    var grandparent = node.parent.parent;
	    return grandparent && grandparent.type.toLowerCase() === 'list' && grandparent.listTight;
	}

	function addChild(node, child) {
	    var parent = node;
	    do {
	        parent = parent.parent;
	    } while (!parent.react);

	    parent.react.children.push(child);
	}

	function createElement(tagName, props, children) {
	    var nodeChildren = Array.isArray(children) && children.reduce(reduceChildren, []);
	    var args = [tagName, props].concat(nodeChildren || children);
	    return React.createElement.apply(React, args);
	}

	function reduceChildren(children, child) {
	    var lastIndex = children.length - 1;
	    if (typeof child === 'string' && typeof children[lastIndex] === 'string') {
	        children[lastIndex] += child;
	    } else {
	        children.push(child);
	    }

	    return children;
	}

	function flattenPosition(pos) {
	    return [pos[0][0], ':', pos[0][1], '-', pos[1][0], ':', pos[1][1]].map(String).join('');
	}

	// For some nodes, we want to include more props than for others
	function getNodeProps(node, key, opts, renderer) {
	    var props = { key: key },
	        undef;

	    // `sourcePos` is true if the user wants source information (line/column info from markdown source)
	    if (opts.sourcePos && node.sourcepos) {
	        props['data-sourcepos'] = flattenPosition(node.sourcepos);
	    }

	    var type = normalizeTypeName(node.type);

	    switch (type) {
	        case 'html_inline':
	        case 'html_block':
	            props.isBlock = type === 'html_block';
	            props.escapeHtml = opts.escapeHtml;
	            props.skipHtml = opts.skipHtml;
	            break;
	        case 'code_block':
	            var codeInfo = node.info ? node.info.split(/ +/) : [];
	            if (codeInfo.length > 0 && codeInfo[0].length > 0) {
	                props.language = codeInfo[0];
	            }
	            break;
	        case 'code':
	            props.children = node.literal;
	            props.inline = true;
	            break;
	        case 'heading':
	            props.level = node.level;
	            break;
	        case 'softbreak':
	            props.softBreak = opts.softBreak;
	            break;
	        case 'link':
	            props.href = opts.transformLinkUri ? opts.transformLinkUri(node.destination) : node.destination;
	            props.title = node.title || undef;
	            break;
	        case 'image':
	            props.src = opts.transformImageUri ? opts.transformImageUri(node.destination) : node.destination;
	            props.title = node.title || undef;

	            // Commonmark treats image description as children. We just want the text
	            props.alt = node.react.children.join('');
	            node.react.children = undef;
	            break;
	        case 'list':
	            props.start = node.listStart;
	            props.type = node.listType;
	            props.tight = node.listTight;
	            break;
	        default:
	    }

	    if (typeof renderer !== 'string') {
	        props.literal = node.literal;
	    }

	    var children = props.children || node.react && node.react.children;
	    if (Array.isArray(children)) {
	        props.children = children.reduce(reduceChildren, []) || null;
	    }

	    return props;
	}

	function getPosition(node) {
	    if (!node) {
	        return null;
	    }

	    if (node.sourcepos) {
	        return flattenPosition(node.sourcepos);
	    }

	    return getPosition(node.parent);
	}

	function renderNodes(block) {
	    var walker = block.walker();

	    // Softbreaks are usually treated as newlines, but in HTML we might want explicit linebreaks
	    var softBreak = this.softBreak === 'br' ? React.createElement('br') : this.softBreak;

	    var propOptions = {
	        sourcePos: this.sourcePos,
	        escapeHtml: this.escapeHtml,
	        skipHtml: this.skipHtml,
	        transformLinkUri: this.transformLinkUri,
	        transformImageUri: this.transformImageUri,
	        softBreak: softBreak
	    };

	    var e,
	        node,
	        entering,
	        leaving,
	        type,
	        doc,
	        key,
	        nodeProps,
	        prevPos,
	        prevIndex = 0;
	    while (e = walker.next()) {
	        var pos = getPosition(e.node.sourcepos ? e.node : e.node.parent);
	        if (prevPos === pos) {
	            key = pos + prevIndex;
	            prevIndex++;
	        } else {
	            key = pos;
	            prevIndex = 0;
	        }

	        prevPos = pos;
	        entering = e.entering;
	        leaving = !entering;
	        node = e.node;
	        type = normalizeTypeName(node.type);
	        nodeProps = null;

	        // If we have not assigned a document yet, assume the current node is just that
	        if (!doc) {
	            doc = node;
	            node.react = { children: [] };
	            continue;
	        } else if (node === doc) {
	            // When we're leaving...
	            continue;
	        }

	        // In HTML, we don't want paragraphs inside of list items
	        if (type === 'paragraph' && isGrandChildOfList(node)) {
	            continue;
	        }

	        // If we're skipping HTML nodes, don't keep processing
	        if (this.skipHtml && (type === 'html_block' || type === 'html_inline')) {
	            continue;
	        }

	        var isDocument = node === doc;
	        var disallowedByConfig = this.allowedTypes.indexOf(type) === -1;
	        var disallowedByUser = false;

	        // Do we have a user-defined function?
	        var isCompleteParent = node.isContainer && leaving;
	        var renderer = this.renderers[type];
	        if (this.allowNode && (isCompleteParent || !node.isContainer)) {
	            var nodeChildren = isCompleteParent ? node.react.children : [];

	            nodeProps = getNodeProps(node, key, propOptions, renderer);
	            disallowedByUser = !this.allowNode({
	                type: pascalCase(type),
	                renderer: this.renderers[type],
	                props: nodeProps,
	                children: nodeChildren
	            });
	        }

	        if (!isDocument && (disallowedByUser || disallowedByConfig)) {
	            if (!this.unwrapDisallowed && entering && node.isContainer) {
	                walker.resumeAt(node, false);
	            }

	            continue;
	        }

	        var isSimpleNode = type === 'text' || type === 'softbreak';
	        if (typeof renderer !== 'function' && !isSimpleNode && typeof renderer !== 'string') {
	            throw new Error('Renderer for type `' + pascalCase(node.type) + '` not defined or is not renderable');
	        }

	        if (node.isContainer && entering) {
	            node.react = {
	                component: renderer,
	                props: {},
	                children: []
	            };
	        } else {
	            var childProps = nodeProps || getNodeProps(node, key, propOptions, renderer);
	            if (renderer) {
	                childProps = typeof renderer === 'string' ? childProps : assign(childProps, { nodeKey: childProps.key });

	                addChild(node, React.createElement(renderer, childProps));
	            } else if (type === 'text') {
	                addChild(node, node.literal);
	            } else if (type === 'softbreak') {
	                addChild(node, softBreak);
	            }
	        }
	    }

	    return doc.react.children;
	}

	function defaultLinkUriFilter(uri) {
	    var url = uri.replace(/file:\/\//g, 'x-file://');

	    // React does a pretty swell job of escaping attributes,
	    // so to prevent double-escaping, we need to decode
	    return decodeURI(xssFilters.uriInDoubleQuotedAttr(url));
	}

	function ReactRenderer(options) {
	    var opts = options || {};

	    if (opts.allowedTypes && opts.disallowedTypes) {
	        throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
	    }

	    if (opts.allowedTypes && !Array.isArray(opts.allowedTypes)) {
	        throw new Error('`allowedTypes` must be an array');
	    }

	    if (opts.disallowedTypes && !Array.isArray(opts.disallowedTypes)) {
	        throw new Error('`disallowedTypes` must be an array');
	    }

	    if (opts.allowNode && typeof opts.allowNode !== 'function') {
	        throw new Error('`allowNode` must be a function');
	    }

	    var linkFilter = opts.transformLinkUri;
	    if (typeof linkFilter === 'undefined') {
	        linkFilter = defaultLinkUriFilter;
	    } else if (linkFilter && typeof linkFilter !== 'function') {
	        throw new Error('`transformLinkUri` must either be a function, or `null` to disable');
	    }

	    var imageFilter = opts.transformImageUri;
	    if (typeof imageFilter !== 'undefined' && typeof imageFilter !== 'function') {
	        throw new Error('`transformImageUri` must be a function');
	    }

	    if (opts.renderers && !isPlainObject(opts.renderers)) {
	        throw new Error('`renderers` must be a plain object of `Type`: `Renderer` pairs');
	    }

	    var allowedTypes = opts.allowedTypes && opts.allowedTypes.map(normalizeTypeName) || coreTypes;
	    if (opts.disallowedTypes) {
	        var disallowed = opts.disallowedTypes.map(normalizeTypeName);
	        allowedTypes = allowedTypes.filter(function filterDisallowed(type) {
	            return disallowed.indexOf(type) === -1;
	        });
	    }

	    return {
	        sourcePos: Boolean(opts.sourcePos),
	        softBreak: opts.softBreak || '\n',
	        renderers: assign({}, defaultRenderers, normalizeRenderers(opts.renderers)),
	        escapeHtml: Boolean(opts.escapeHtml),
	        skipHtml: Boolean(opts.skipHtml),
	        transformLinkUri: linkFilter,
	        transformImageUri: imageFilter,
	        allowNode: opts.allowNode,
	        allowedTypes: allowedTypes,
	        unwrapDisallowed: Boolean(opts.unwrapDisallowed),
	        render: renderNodes
	    };
	}

	ReactRenderer.uriTransformer = defaultLinkUriFilter;
	ReactRenderer.types = coreTypes.map(pascalCase);
	ReactRenderer.renderers = coreTypes.reduce(function (renderers, type) {
	    renderers[pascalCase(type)] = defaultRenderers[type];
	    return renderers;
	}, {});

	module.exports = ReactRenderer;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Node = __webpack_require__(3);
	var unescapeString = __webpack_require__(1).unescapeString;
	var OPENTAG = __webpack_require__(1).OPENTAG;
	var CLOSETAG = __webpack_require__(1).CLOSETAG;

	var CODE_INDENT = 4;

	var C_TAB = 9;
	var C_NEWLINE = 10;
	var C_GREATERTHAN = 62;
	var C_LESSTHAN = 60;
	var C_SPACE = 32;
	var C_OPEN_BRACKET = 91;

	var InlineParser = __webpack_require__(16);

	var reHtmlBlockOpen = [/./, // dummy for 0
	/^<(?:script|pre|style)(?:\s|>|$)/i, /^<!--/, /^<[?]/, /^<![A-Z]/, /^<!\[CDATA\[/, /^<[/]?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|title|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|[/]?[>]|$)/i, new RegExp('^(?:' + OPENTAG + '|' + CLOSETAG + ')\s*$', 'i')];

	var reHtmlBlockClose = [/./, // dummy for 0
	/<\/(?:script|pre|style)>/i, /-->/, /\?>/, />/, /\]\]>/];

	var reThematicBreak = /^(?:(?:\* *){3,}|(?:_ *){3,}|(?:- *){3,}) *$/;

	var reMaybeSpecial = /^[#`~*+_=<>0-9-]/;

	var reNonSpace = /[^ \t\f\v\r\n]/;

	var reBulletListMarker = /^[*+-]/;

	var reOrderedListMarker = /^(\d{1,9})([.)])/;

	var reATXHeadingMarker = /^#{1,6}(?: +|$)/;

	var reCodeFence = /^`{3,}(?!.*`)|^~{3,}(?!.*~)/;

	var reClosingCodeFence = /^(?:`{3,}|~{3,})(?= *$)/;

	var reSetextHeadingLine = /^(?:=+|-+) *$/;

	var reLineEnding = /\r\n|\n|\r/;

	// Returns true if string contains only space characters.
	var isBlank = function isBlank(s) {
	    return !reNonSpace.test(s);
	};

	var peek = function peek(ln, pos) {
	    if (pos < ln.length) {
	        return ln.charCodeAt(pos);
	    } else {
	        return -1;
	    }
	};

	// DOC PARSER

	// These are methods of a Parser object, defined below.

	// Returns true if block ends with a blank line, descending if needed
	// into lists and sublists.
	var endsWithBlankLine = function endsWithBlankLine(block) {
	    while (block) {
	        if (block._lastLineBlank) {
	            return true;
	        }
	        var t = block.type;
	        if (t === 'List' || t === 'Item') {
	            block = block._lastChild;
	        } else {
	            break;
	        }
	    }
	    return false;
	};

	// Break out of all containing lists, resetting the tip of the
	// document to the parent of the highest list, and finalizing
	// all the lists.  (This is used to implement the "two blank lines
	// break out of all lists" feature.)
	var breakOutOfLists = function breakOutOfLists(block) {
	    var b = block;
	    var last_list = null;
	    do {
	        if (b.type === 'List') {
	            last_list = b;
	        }
	        b = b._parent;
	    } while (b);

	    if (last_list) {
	        while (block !== last_list) {
	            this.finalize(block, this.lineNumber);
	            block = block._parent;
	        }
	        this.finalize(last_list, this.lineNumber);
	        this.tip = last_list._parent;
	    }
	};

	// Add a line to the block at the tip.  We assume the tip
	// can accept lines -- that check should be done before calling this.
	var addLine = function addLine() {
	    this.tip._string_content += this.currentLine.slice(this.offset) + '\n';
	};

	// Add block of type tag as a child of the tip.  If the tip can't
	// accept children, close and finalize it and try its parent,
	// and so on til we find a block that can accept children.
	var addChild = function addChild(tag, offset) {
	    while (!this.blocks[this.tip.type].canContain(tag)) {
	        this.finalize(this.tip, this.lineNumber - 1);
	    }

	    var column_number = offset + 1; // offset 0 = column 1
	    var newBlock = new Node(tag, [[this.lineNumber, column_number], [0, 0]]);
	    newBlock._string_content = '';
	    this.tip.appendChild(newBlock);
	    this.tip = newBlock;
	    return newBlock;
	};

	// Parse a list marker and return data on the marker (type,
	// start, delimiter, bullet character, padding) or null.
	var parseListMarker = function parseListMarker(parser) {
	    var rest = parser.currentLine.slice(parser.nextNonspace);
	    var match;
	    var nextc;
	    var spacesStartCol;
	    var spacesStartOffset;
	    var data = { type: null,
	        tight: true, // lists are tight by default
	        bulletChar: null,
	        start: null,
	        delimiter: null,
	        padding: null,
	        markerOffset: parser.indent };
	    if (match = rest.match(reBulletListMarker)) {
	        data.type = 'Bullet';
	        data.bulletChar = match[0][0];
	    } else if (match = rest.match(reOrderedListMarker)) {
	        data.type = 'Ordered';
	        data.start = parseInt(match[1]);
	        data.delimiter = match[2];
	    } else {
	        return null;
	    }
	    // make sure we have spaces after
	    nextc = peek(parser.currentLine, parser.nextNonspace + match[0].length);
	    if (!(nextc === -1 || nextc === C_TAB || nextc === C_SPACE)) {
	        return null;
	    }

	    // we've got a match! advance offset and calculate padding
	    parser.advanceNextNonspace(); // to start of marker
	    parser.advanceOffset(match[0].length, true); // to end of marker
	    spacesStartCol = parser.column;
	    spacesStartOffset = parser.offset;
	    do {
	        parser.advanceOffset(1, true);
	        nextc = peek(parser.currentLine, parser.offset);
	    } while (parser.column - spacesStartCol < 5 && (nextc === C_SPACE || nextc === C_TAB));
	    var blank_item = peek(parser.currentLine, parser.offset) === -1;
	    var spaces_after_marker = parser.column - spacesStartCol;
	    if (spaces_after_marker >= 5 || spaces_after_marker < 1 || blank_item) {
	        data.padding = match[0].length + 1;
	        parser.column = spacesStartCol;
	        parser.offset = spacesStartOffset;
	        if (peek(parser.currentLine, parser.offset) === C_SPACE) {
	            parser.advanceOffset(1, true);
	        }
	    } else {
	        data.padding = match[0].length + spaces_after_marker;
	    }
	    return data;
	};

	// Returns true if the two list items are of the same type,
	// with the same delimiter and bullet character.  This is used
	// in agglomerating list items into lists.
	var listsMatch = function listsMatch(list_data, item_data) {
	    return list_data.type === item_data.type && list_data.delimiter === item_data.delimiter && list_data.bulletChar === item_data.bulletChar;
	};

	// Finalize and close any unmatched blocks.
	var closeUnmatchedBlocks = function closeUnmatchedBlocks() {
	    if (!this.allClosed) {
	        // finalize any blocks not matched
	        while (this.oldtip !== this.lastMatchedContainer) {
	            var parent = this.oldtip._parent;
	            this.finalize(this.oldtip, this.lineNumber - 1);
	            this.oldtip = parent;
	        }
	        this.allClosed = true;
	    }
	};

	// 'finalize' is run when the block is closed.
	// 'continue' is run to check whether the block is continuing
	// at a certain line and offset (e.g. whether a block quote
	// contains a `>`.  It returns 0 for matched, 1 for not matched,
	// and 2 for "we've dealt with this line completely, go to next."
	var blocks = {
	    Document: {
	        continue: function _continue() {
	            return 0;
	        },
	        finalize: function finalize() {
	            return;
	        },
	        canContain: function canContain(t) {
	            return t !== 'Item';
	        },
	        acceptsLines: false
	    },
	    List: {
	        continue: function _continue() {
	            return 0;
	        },
	        finalize: function finalize(parser, block) {
	            var item = block._firstChild;
	            while (item) {
	                // check for non-final list item ending with blank line:
	                if (endsWithBlankLine(item) && item._next) {
	                    block._listData.tight = false;
	                    break;
	                }
	                // recurse into children of list item, to see if there are
	                // spaces between any of them:
	                var subitem = item._firstChild;
	                while (subitem) {
	                    if (endsWithBlankLine(subitem) && (item._next || subitem._next)) {
	                        block._listData.tight = false;
	                        break;
	                    }
	                    subitem = subitem._next;
	                }
	                item = item._next;
	            }
	        },
	        canContain: function canContain(t) {
	            return t === 'Item';
	        },
	        acceptsLines: false
	    },
	    BlockQuote: {
	        continue: function _continue(parser) {
	            var ln = parser.currentLine;
	            if (!parser.indented && peek(ln, parser.nextNonspace) === C_GREATERTHAN) {
	                parser.advanceNextNonspace();
	                parser.advanceOffset(1, false);
	                if (peek(ln, parser.offset) === C_SPACE) {
	                    parser.offset++;
	                }
	            } else {
	                return 1;
	            }
	            return 0;
	        },
	        finalize: function finalize() {
	            return;
	        },
	        canContain: function canContain(t) {
	            return t !== 'Item';
	        },
	        acceptsLines: false
	    },
	    Item: {
	        continue: function _continue(parser, container) {
	            if (parser.blank && container._firstChild !== null) {
	                parser.advanceNextNonspace();
	            } else if (parser.indent >= container._listData.markerOffset + container._listData.padding) {
	                parser.advanceOffset(container._listData.markerOffset + container._listData.padding, true);
	            } else {
	                return 1;
	            }
	            return 0;
	        },
	        finalize: function finalize() {
	            return;
	        },
	        canContain: function canContain(t) {
	            return t !== 'Item';
	        },
	        acceptsLines: false
	    },
	    Heading: {
	        continue: function _continue() {
	            // a heading can never container > 1 line, so fail to match:
	            return 1;
	        },
	        finalize: function finalize() {
	            return;
	        },
	        canContain: function canContain() {
	            return false;
	        },
	        acceptsLines: false
	    },
	    ThematicBreak: {
	        continue: function _continue() {
	            // a thematic break can never container > 1 line, so fail to match:
	            return 1;
	        },
	        finalize: function finalize() {
	            return;
	        },
	        canContain: function canContain() {
	            return false;
	        },
	        acceptsLines: false
	    },
	    CodeBlock: {
	        continue: function _continue(parser, container) {
	            var ln = parser.currentLine;
	            var indent = parser.indent;
	            if (container._isFenced) {
	                // fenced
	                var match = indent <= 3 && ln.charAt(parser.nextNonspace) === container._fenceChar && ln.slice(parser.nextNonspace).match(reClosingCodeFence);
	                if (match && match[0].length >= container._fenceLength) {
	                    // closing fence - we're at end of line, so we can return
	                    parser.finalize(container, parser.lineNumber);
	                    return 2;
	                } else {
	                    // skip optional spaces of fence offset
	                    var i = container._fenceOffset;
	                    while (i > 0 && peek(ln, parser.offset) === C_SPACE) {
	                        parser.advanceOffset(1, false);
	                        i--;
	                    }
	                }
	            } else {
	                // indented
	                if (indent >= CODE_INDENT) {
	                    parser.advanceOffset(CODE_INDENT, true);
	                } else if (parser.blank) {
	                    parser.advanceNextNonspace();
	                } else {
	                    return 1;
	                }
	            }
	            return 0;
	        },
	        finalize: function finalize(parser, block) {
	            if (block._isFenced) {
	                // fenced
	                // first line becomes info string
	                var content = block._string_content;
	                var newlinePos = content.indexOf('\n');
	                var firstLine = content.slice(0, newlinePos);
	                var rest = content.slice(newlinePos + 1);
	                block.info = unescapeString(firstLine.trim());
	                block._literal = rest;
	            } else {
	                // indented
	                block._literal = block._string_content.replace(/(\n *)+$/, '\n');
	            }
	            block._string_content = null; // allow GC
	        },
	        canContain: function canContain() {
	            return false;
	        },
	        acceptsLines: true
	    },
	    HtmlBlock: {
	        continue: function _continue(parser, container) {
	            return parser.blank && (container._htmlBlockType === 6 || container._htmlBlockType === 7) ? 1 : 0;
	        },
	        finalize: function finalize(parser, block) {
	            block._literal = block._string_content.replace(/(\n *)+$/, '');
	            block._string_content = null; // allow GC
	        },
	        canContain: function canContain() {
	            return false;
	        },
	        acceptsLines: true
	    },
	    Paragraph: {
	        continue: function _continue(parser) {
	            return parser.blank ? 1 : 0;
	        },
	        finalize: function finalize(parser, block) {
	            var pos;
	            var hasReferenceDefs = false;

	            // try parsing the beginning as link reference definitions:
	            while (peek(block._string_content, 0) === C_OPEN_BRACKET && (pos = parser.inlineParser.parseReference(block._string_content, parser.refmap))) {
	                block._string_content = block._string_content.slice(pos);
	                hasReferenceDefs = true;
	            }
	            if (hasReferenceDefs && isBlank(block._string_content)) {
	                block.unlink();
	            }
	        },
	        canContain: function canContain() {
	            return false;
	        },
	        acceptsLines: true
	    }
	};

	// block start functions.  Return values:
	// 0 = no match
	// 1 = matched container, keep going
	// 2 = matched leaf, no more block starts
	var blockStarts = [
	// block quote
	function (parser) {
	    if (!parser.indented && peek(parser.currentLine, parser.nextNonspace) === C_GREATERTHAN) {
	        parser.advanceNextNonspace();
	        parser.advanceOffset(1, false);
	        // optional following space
	        if (peek(parser.currentLine, parser.offset) === C_SPACE) {
	            parser.advanceOffset(1, false);
	        }
	        parser.closeUnmatchedBlocks();
	        parser.addChild('BlockQuote', parser.nextNonspace);
	        return 1;
	    } else {
	        return 0;
	    }
	},

	// ATX heading
	function (parser) {
	    var match;
	    if (!parser.indented && (match = parser.currentLine.slice(parser.nextNonspace).match(reATXHeadingMarker))) {
	        parser.advanceNextNonspace();
	        parser.advanceOffset(match[0].length, false);
	        parser.closeUnmatchedBlocks();
	        var container = parser.addChild('Heading', parser.nextNonspace);
	        container.level = match[0].trim().length; // number of #s
	        // remove trailing ###s:
	        container._string_content = parser.currentLine.slice(parser.offset).replace(/^ *#+ *$/, '').replace(/ +#+ *$/, '');
	        parser.advanceOffset(parser.currentLine.length - parser.offset);
	        return 2;
	    } else {
	        return 0;
	    }
	},

	// Fenced code block
	function (parser) {
	    var match;
	    if (!parser.indented && (match = parser.currentLine.slice(parser.nextNonspace).match(reCodeFence))) {
	        var fenceLength = match[0].length;
	        parser.closeUnmatchedBlocks();
	        var container = parser.addChild('CodeBlock', parser.nextNonspace);
	        container._isFenced = true;
	        container._fenceLength = fenceLength;
	        container._fenceChar = match[0][0];
	        container._fenceOffset = parser.indent;
	        parser.advanceNextNonspace();
	        parser.advanceOffset(fenceLength, false);
	        return 2;
	    } else {
	        return 0;
	    }
	},

	// HTML block
	function (parser, container) {
	    if (!parser.indented && peek(parser.currentLine, parser.nextNonspace) === C_LESSTHAN) {
	        var s = parser.currentLine.slice(parser.nextNonspace);
	        var blockType;

	        for (blockType = 1; blockType <= 7; blockType++) {
	            if (reHtmlBlockOpen[blockType].test(s) && (blockType < 7 || container.type !== 'Paragraph')) {
	                parser.closeUnmatchedBlocks();
	                // We don't adjust parser.offset;
	                // spaces are part of the HTML block:
	                var b = parser.addChild('HtmlBlock', parser.offset);
	                b._htmlBlockType = blockType;
	                return 2;
	            }
	        }
	    }

	    return 0;
	},

	// Setext heading
	function (parser, container) {
	    var match;
	    if (!parser.indented && container.type === 'Paragraph' && (match = parser.currentLine.slice(parser.nextNonspace).match(reSetextHeadingLine))) {
	        parser.closeUnmatchedBlocks();
	        var heading = new Node('Heading', container.sourcepos);
	        heading.level = match[0][0] === '=' ? 1 : 2;
	        heading._string_content = container._string_content;
	        container.insertAfter(heading);
	        container.unlink();
	        parser.tip = heading;
	        parser.advanceOffset(parser.currentLine.length - parser.offset, false);
	        return 2;
	    } else {
	        return 0;
	    }
	},

	// thematic break
	function (parser) {
	    if (!parser.indented && reThematicBreak.test(parser.currentLine.slice(parser.nextNonspace))) {
	        parser.closeUnmatchedBlocks();
	        parser.addChild('ThematicBreak', parser.nextNonspace);
	        parser.advanceOffset(parser.currentLine.length - parser.offset, false);
	        return 2;
	    } else {
	        return 0;
	    }
	},

	// list item
	function (parser, container) {
	    var data;

	    if ((!parser.indented || container.type === 'List') && (data = parseListMarker(parser))) {
	        parser.closeUnmatchedBlocks();

	        // add the list if needed
	        if (parser.tip.type !== 'List' || !listsMatch(container._listData, data)) {
	            container = parser.addChild('List', parser.nextNonspace);
	            container._listData = data;
	        }

	        // add the list item
	        container = parser.addChild('Item', parser.nextNonspace);
	        container._listData = data;
	        return 1;
	    } else {
	        return 0;
	    }
	},

	// indented code block
	function (parser) {
	    if (parser.indented && parser.tip.type !== 'Paragraph' && !parser.blank) {
	        // indented code
	        parser.advanceOffset(CODE_INDENT, true);
	        parser.closeUnmatchedBlocks();
	        parser.addChild('CodeBlock', parser.offset);
	        return 2;
	    } else {
	        return 0;
	    }
	}];

	var advanceOffset = function advanceOffset(count, columns) {
	    var cols = 0;
	    var currentLine = this.currentLine;
	    var charsToTab;
	    var c;
	    while (count > 0 && (c = currentLine[this.offset])) {
	        if (c === '\t') {
	            charsToTab = 4 - this.column % 4;
	            this.column += charsToTab;
	            this.offset += 1;
	            count -= columns ? charsToTab : 1;
	        } else {
	            cols += 1;
	            this.offset += 1;
	            this.column += 1; // assume ascii; block starts are ascii
	            count -= 1;
	        }
	    }
	};

	var advanceNextNonspace = function advanceNextNonspace() {
	    this.offset = this.nextNonspace;
	    this.column = this.nextNonspaceColumn;
	};

	var findNextNonspace = function findNextNonspace() {
	    var currentLine = this.currentLine;
	    var i = this.offset;
	    var cols = this.column;
	    var c;

	    while ((c = currentLine.charAt(i)) !== '') {
	        if (c === ' ') {
	            i++;
	            cols++;
	        } else if (c === '\t') {
	            i++;
	            cols += 4 - cols % 4;
	        } else {
	            break;
	        }
	    }
	    this.blank = c === '\n' || c === '\r' || c === '';
	    this.nextNonspace = i;
	    this.nextNonspaceColumn = cols;
	    this.indent = this.nextNonspaceColumn - this.column;
	    this.indented = this.indent >= CODE_INDENT;
	};

	// Analyze a line of text and update the document appropriately.
	// We parse markdown text by calling this on each line of input,
	// then finalizing the document.
	var incorporateLine = function incorporateLine(ln) {
	    var all_matched = true;
	    var t;

	    var container = this.doc;
	    this.oldtip = this.tip;
	    this.offset = 0;
	    this.column = 0;
	    this.lineNumber += 1;

	    // replace NUL characters for security
	    if (ln.indexOf('\0') !== -1) {
	        ln = ln.replace(/\0/g, '\uFFFD');
	    }

	    this.currentLine = ln;

	    // For each containing block, try to parse the associated line start.
	    // Bail out on failure: container will point to the last matching block.
	    // Set all_matched to false if not all containers match.
	    var lastChild;
	    while ((lastChild = container._lastChild) && lastChild._open) {
	        container = lastChild;

	        this.findNextNonspace();

	        switch (this.blocks[container.type].continue(this, container)) {
	            case 0:
	                // we've matched, keep going
	                break;
	            case 1:
	                // we've failed to match a block
	                all_matched = false;
	                break;
	            case 2:
	                // we've hit end of line for fenced code close and can return
	                this.lastLineLength = ln.length;
	                return;
	            default:
	                throw 'continue returned illegal value, must be 0, 1, or 2';
	        }
	        if (!all_matched) {
	            container = container._parent; // back up to last matching block
	            break;
	        }
	    }

	    this.allClosed = container === this.oldtip;
	    this.lastMatchedContainer = container;

	    // Check to see if we've hit 2nd blank line; if so break out of list:
	    if (this.blank && container._lastLineBlank) {
	        this.breakOutOfLists(container);
	        container = this.tip;
	    }

	    var matchedLeaf = container.type !== 'Paragraph' && blocks[container.type].acceptsLines;
	    var starts = this.blockStarts;
	    var startsLen = starts.length;
	    // Unless last matched container is a code block, try new container starts,
	    // adding children to the last matched container:
	    while (!matchedLeaf) {

	        this.findNextNonspace();

	        // this is a little performance optimization:
	        if (!this.indented && !reMaybeSpecial.test(ln.slice(this.nextNonspace))) {
	            this.advanceNextNonspace();
	            break;
	        }

	        var i = 0;
	        while (i < startsLen) {
	            var res = starts[i](this, container);
	            if (res === 1) {
	                container = this.tip;
	                break;
	            } else if (res === 2) {
	                container = this.tip;
	                matchedLeaf = true;
	                break;
	            } else {
	                i++;
	            }
	        }

	        if (i === startsLen) {
	            // nothing matched
	            this.advanceNextNonspace();
	            break;
	        }
	    }

	    // What remains at the offset is a text line.  Add the text to the
	    // appropriate container.

	    // First check for a lazy paragraph continuation:
	    if (!this.allClosed && !this.blank && this.tip.type === 'Paragraph') {
	        // lazy paragraph continuation
	        this.addLine();
	    } else {
	        // not a lazy continuation

	        // finalize any blocks not matched
	        this.closeUnmatchedBlocks();
	        if (this.blank && container.lastChild) {
	            container.lastChild._lastLineBlank = true;
	        }

	        t = container.type;

	        // Block quote lines are never blank as they start with >
	        // and we don't count blanks in fenced code for purposes of tight/loose
	        // lists or breaking out of lists.  We also don't set _lastLineBlank
	        // on an empty list item, or if we just closed a fenced block.
	        var lastLineBlank = this.blank && !(t === 'BlockQuote' || t === 'CodeBlock' && container._isFenced || t === 'Item' && !container._firstChild && container.sourcepos[0][0] === this.lineNumber);

	        // propagate lastLineBlank up through parents:
	        var cont = container;
	        while (cont) {
	            cont._lastLineBlank = lastLineBlank;
	            cont = cont._parent;
	        }

	        if (this.blocks[t].acceptsLines) {
	            this.addLine();
	            // if HtmlBlock, check for end condition
	            if (t === 'HtmlBlock' && container._htmlBlockType >= 1 && container._htmlBlockType <= 5 && reHtmlBlockClose[container._htmlBlockType].test(this.currentLine.slice(this.offset))) {
	                this.finalize(container, this.lineNumber);
	            }
	        } else if (this.offset < ln.length && !this.blank) {
	            // create paragraph container for line
	            container = this.addChild('Paragraph', this.offset);
	            this.advanceNextNonspace();
	            this.addLine();
	        }
	    }
	    this.lastLineLength = ln.length;
	};

	// Finalize a block.  Close it and do any necessary postprocessing,
	// e.g. creating string_content from strings, setting the 'tight'
	// or 'loose' status of a list, and parsing the beginnings
	// of paragraphs for reference definitions.  Reset the tip to the
	// parent of the closed block.
	var finalize = function finalize(block, lineNumber) {
	    var above = block._parent;
	    block._open = false;
	    block.sourcepos[1] = [lineNumber, this.lastLineLength];

	    this.blocks[block.type].finalize(this, block);

	    this.tip = above;
	};

	// Walk through a block & children recursively, parsing string content
	// into inline content where appropriate.
	var processInlines = function processInlines(block) {
	    var node, event, t;
	    var walker = block.walker();
	    this.inlineParser.refmap = this.refmap;
	    this.inlineParser.options = this.options;
	    while (event = walker.next()) {
	        node = event.node;
	        t = node.type;
	        if (!event.entering && (t === 'Paragraph' || t === 'Heading')) {
	            this.inlineParser.parse(node);
	        }
	    }
	};

	var Document = function Document() {
	    var doc = new Node('Document', [[1, 1], [0, 0]]);
	    return doc;
	};

	// The main parsing function.  Returns a parsed document AST.
	var parse = function parse(input) {
	    this.doc = new Document();
	    this.tip = this.doc;
	    this.refmap = {};
	    this.lineNumber = 0;
	    this.lastLineLength = 0;
	    this.offset = 0;
	    this.column = 0;
	    this.lastMatchedContainer = this.doc;
	    this.currentLine = "";
	    if (this.options.time) {
	        console.time("preparing input");
	    }
	    var lines = input.split(reLineEnding);
	    var len = lines.length;
	    if (input.charCodeAt(input.length - 1) === C_NEWLINE) {
	        // ignore last blank line created by final newline
	        len -= 1;
	    }
	    if (this.options.time) {
	        console.timeEnd("preparing input");
	    }
	    if (this.options.time) {
	        console.time("block parsing");
	    }
	    for (var i = 0; i < len; i++) {
	        this.incorporateLine(lines[i]);
	    }
	    while (this.tip) {
	        this.finalize(this.tip, len);
	    }
	    if (this.options.time) {
	        console.timeEnd("block parsing");
	    }
	    if (this.options.time) {
	        console.time("inline parsing");
	    }
	    this.processInlines(this.doc);
	    if (this.options.time) {
	        console.timeEnd("inline parsing");
	    }
	    return this.doc;
	};

	// The Parser object.
	function Parser(options) {
	    return {
	        doc: new Document(),
	        blocks: blocks,
	        blockStarts: blockStarts,
	        tip: this.doc,
	        oldtip: this.doc,
	        currentLine: "",
	        lineNumber: 0,
	        offset: 0,
	        column: 0,
	        nextNonspace: 0,
	        nextNonspaceColumn: 0,
	        indent: 0,
	        indented: false,
	        blank: false,
	        allClosed: true,
	        lastMatchedContainer: this.doc,
	        refmap: {},
	        lastLineLength: 0,
	        inlineParser: new InlineParser(options),
	        findNextNonspace: findNextNonspace,
	        advanceOffset: advanceOffset,
	        advanceNextNonspace: advanceNextNonspace,
	        breakOutOfLists: breakOutOfLists,
	        addLine: addLine,
	        addChild: addChild,
	        incorporateLine: incorporateLine,
	        finalize: finalize,
	        processInlines: processInlines,
	        closeUnmatchedBlocks: closeUnmatchedBlocks,
	        parse: parse,
	        options: options || {}
	    };
	}

	module.exports = Parser;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	// derived from https://github.com/mathiasbynens/String.fromCodePoint
	/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */

	if (String.fromCodePoint) {
	    module.exports = function (_) {
	        try {
	            return String.fromCodePoint(_);
	        } catch (e) {
	            if (e instanceof RangeError) {
	                return String.fromCharCode(0xFFFD);
	            }
	            throw e;
	        }
	    };
	} else {

	    var stringFromCharCode = String.fromCharCode;
	    var floor = Math.floor;
	    var fromCodePoint = function fromCodePoint() {
	        var MAX_SIZE = 0x4000;
	        var codeUnits = [];
	        var highSurrogate;
	        var lowSurrogate;
	        var index = -1;
	        var length = arguments.length;
	        if (!length) {
	            return '';
	        }
	        var result = '';
	        while (++index < length) {
	            var codePoint = Number(arguments[index]);
	            if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
	            codePoint < 0 || // not a valid Unicode code point
	            codePoint > 0x10FFFF || // not a valid Unicode code point
	            floor(codePoint) !== codePoint // not an integer
	            ) {
	                    return String.fromCharCode(0xFFFD);
	                }
	            if (codePoint <= 0xFFFF) {
	                // BMP code point
	                codeUnits.push(codePoint);
	            } else {
	                // Astral code point; split in surrogate halves
	                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	                codePoint -= 0x10000;
	                highSurrogate = (codePoint >> 10) + 0xD800;
	                lowSurrogate = codePoint % 0x400 + 0xDC00;
	                codeUnits.push(highSurrogate, lowSurrogate);
	            }
	            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
	                result += stringFromCharCode.apply(null, codeUnits);
	                codeUnits.length = 0;
	            }
	        }
	        return result;
	    };
	    module.exports = fromCodePoint;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var escapeXml = __webpack_require__(1).escapeXml;

	// Helper function to produce an HTML tag.
	var tag = function tag(name, attrs, selfclosing) {
	    var result = '<' + name;
	    if (attrs && attrs.length > 0) {
	        var i = 0;
	        var attrib;
	        while ((attrib = attrs[i]) !== undefined) {
	            result += ' ' + attrib[0] + '="' + attrib[1] + '"';
	            i++;
	        }
	    }
	    if (selfclosing) {
	        result += ' /';
	    }

	    result += '>';
	    return result;
	};

	var reHtmlTag = /\<[^>]*\>/;
	var reUnsafeProtocol = /^javascript:|vbscript:|file:|data:/i;
	var reSafeDataProtocol = /^data:image\/(?:png|gif|jpeg|webp)/i;

	var potentiallyUnsafe = function potentiallyUnsafe(url) {
	    return reUnsafeProtocol.test(url) && !reSafeDataProtocol.test(url);
	};

	var renderNodes = function renderNodes(block) {

	    var attrs;
	    var info_words;
	    var tagname;
	    var walker = block.walker();
	    var event, node, entering;
	    var buffer = "";
	    var lastOut = "\n";
	    var disableTags = 0;
	    var grandparent;
	    var out = function out(s) {
	        if (disableTags > 0) {
	            buffer += s.replace(reHtmlTag, '');
	        } else {
	            buffer += s;
	        }
	        lastOut = s;
	    };
	    var esc = this.escape;
	    var cr = function cr() {
	        if (lastOut !== '\n') {
	            buffer += '\n';
	            lastOut = '\n';
	        }
	    };

	    var options = this.options;

	    if (options.time) {
	        console.time("rendering");
	    }

	    while (event = walker.next()) {
	        entering = event.entering;
	        node = event.node;

	        attrs = [];
	        if (options.sourcepos) {
	            var pos = node.sourcepos;
	            if (pos) {
	                attrs.push(['data-sourcepos', String(pos[0][0]) + ':' + String(pos[0][1]) + '-' + String(pos[1][0]) + ':' + String(pos[1][1])]);
	            }
	        }

	        switch (node.type) {
	            case 'Text':
	                out(esc(node.literal, false));
	                break;

	            case 'Softbreak':
	                out(this.softbreak);
	                break;

	            case 'Hardbreak':
	                out(tag('br', [], true));
	                cr();
	                break;

	            case 'Emph':
	                out(tag(entering ? 'em' : '/em'));
	                break;

	            case 'Strong':
	                out(tag(entering ? 'strong' : '/strong'));
	                break;

	            case 'HtmlInline':
	                if (options.safe) {
	                    out('<!-- raw HTML omitted -->');
	                } else {
	                    out(node.literal);
	                }
	                break;

	            case 'CustomInline':
	                if (entering && node.onEnter) {
	                    out(node.onEnter);
	                } else if (!entering && node.onExit) {
	                    out(node.onExit);
	                }
	                break;

	            case 'Link':
	                if (entering) {
	                    if (!(options.safe && potentiallyUnsafe(node.destination))) {
	                        attrs.push(['href', esc(node.destination, true)]);
	                    }
	                    if (node.title) {
	                        attrs.push(['title', esc(node.title, true)]);
	                    }
	                    out(tag('a', attrs));
	                } else {
	                    out(tag('/a'));
	                }
	                break;

	            case 'Image':
	                if (entering) {
	                    if (disableTags === 0) {
	                        if (options.safe && potentiallyUnsafe(node.destination)) {
	                            out('<img src="" alt="');
	                        } else {
	                            out('<img src="' + esc(node.destination, true) + '" alt="');
	                        }
	                    }
	                    disableTags += 1;
	                } else {
	                    disableTags -= 1;
	                    if (disableTags === 0) {
	                        if (node.title) {
	                            out('" title="' + esc(node.title, true));
	                        }
	                        out('" />');
	                    }
	                }
	                break;

	            case 'Code':
	                out(tag('code') + esc(node.literal, false) + tag('/code'));
	                break;

	            case 'Document':
	                break;

	            case 'Paragraph':
	                grandparent = node.parent.parent;
	                if (grandparent !== null && grandparent.type === 'List') {
	                    if (grandparent.listTight) {
	                        break;
	                    }
	                }
	                if (entering) {
	                    cr();
	                    out(tag('p', attrs));
	                } else {
	                    out(tag('/p'));
	                    cr();
	                }
	                break;

	            case 'BlockQuote':
	                if (entering) {
	                    cr();
	                    out(tag('blockquote', attrs));
	                    cr();
	                } else {
	                    cr();
	                    out(tag('/blockquote'));
	                    cr();
	                }
	                break;

	            case 'Item':
	                if (entering) {
	                    out(tag('li', attrs));
	                } else {
	                    out(tag('/li'));
	                    cr();
	                }
	                break;

	            case 'List':
	                tagname = node.listType === 'Bullet' ? 'ul' : 'ol';
	                if (entering) {
	                    var start = node.listStart;
	                    if (start !== null && start !== 1) {
	                        attrs.push(['start', start.toString()]);
	                    }
	                    cr();
	                    out(tag(tagname, attrs));
	                    cr();
	                } else {
	                    cr();
	                    out(tag('/' + tagname));
	                    cr();
	                }
	                break;

	            case 'Heading':
	                tagname = 'h' + node.level;
	                if (entering) {
	                    cr();
	                    out(tag(tagname, attrs));
	                } else {
	                    out(tag('/' + tagname));
	                    cr();
	                }
	                break;

	            case 'CodeBlock':
	                info_words = node.info ? node.info.split(/\s+/) : [];
	                if (info_words.length > 0 && info_words[0].length > 0) {
	                    attrs.push(['class', 'language-' + esc(info_words[0], true)]);
	                }
	                cr();
	                out(tag('pre') + tag('code', attrs));
	                out(esc(node.literal, false));
	                out(tag('/code') + tag('/pre'));
	                cr();
	                break;

	            case 'HtmlBlock':
	                cr();
	                if (options.safe) {
	                    out('<!-- raw HTML omitted -->');
	                } else {
	                    out(node.literal);
	                }
	                cr();
	                break;

	            case 'CustomBlock':
	                cr();
	                if (entering && node.onEnter) {
	                    out(node.onEnter);
	                } else if (!entering && node.onExit) {
	                    out(node.onExit);
	                }
	                cr();
	                break;

	            case 'ThematicBreak':
	                cr();
	                out(tag('hr', attrs, true));
	                cr();
	                break;

	            default:
	                throw "Unknown node type " + node.type;
	        }
	    }
	    if (options.time) {
	        console.timeEnd("rendering");
	    }
	    return buffer;
	};

	// The HtmlRenderer object.
	function HtmlRenderer(options) {
	    return {
	        // default options:
	        softbreak: '\n', // by default, soft breaks are rendered as newlines in HTML
	        // set to "<br />" to make them hard breaks
	        // set to " " if you want to ignore line wrapping in source
	        escape: escapeXml,
	        options: options || {},
	        render: renderNodes
	    };
	}

	module.exports = HtmlRenderer;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// commonmark.js - CommomMark in JavaScript
	// Copyright (C) 2014 John MacFarlane
	// License: BSD3.

	// Basic usage:
	//
	// var commonmark = require('commonmark');
	// var parser = new commonmark.Parser();
	// var renderer = new commonmark.HtmlRenderer();
	// console.log(renderer.render(parser.parse('Hello *world*')));

	module.exports.version = '0.24.0';
	module.exports.Node = __webpack_require__(3);
	module.exports.Parser = __webpack_require__(12);
	module.exports.HtmlRenderer = __webpack_require__(14);
	module.exports.XmlRenderer = __webpack_require__(18);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Node = __webpack_require__(3);
	var common = __webpack_require__(1);
	var normalizeReference = __webpack_require__(17);

	var normalizeURI = common.normalizeURI;
	var unescapeString = common.unescapeString;
	var fromCodePoint = __webpack_require__(13);
	var decodeHTML = __webpack_require__(4).decodeHTML;
	__webpack_require__(31); // Polyfill for String.prototype.repeat

	// Constants for character codes:

	var C_NEWLINE = 10;
	var C_ASTERISK = 42;
	var C_UNDERSCORE = 95;
	var C_BACKTICK = 96;
	var C_OPEN_BRACKET = 91;
	var C_CLOSE_BRACKET = 93;
	var C_LESSTHAN = 60;
	var C_BANG = 33;
	var C_BACKSLASH = 92;
	var C_AMPERSAND = 38;
	var C_OPEN_PAREN = 40;
	var C_CLOSE_PAREN = 41;
	var C_COLON = 58;
	var C_SINGLEQUOTE = 39;
	var C_DOUBLEQUOTE = 34;

	// Some regexps used in inline parser:

	var ESCAPABLE = common.ESCAPABLE;
	var ESCAPED_CHAR = '\\\\' + ESCAPABLE;
	var REG_CHAR = '[^\\\\()\\x00-\\x20]';
	var IN_PARENS_NOSP = '\\((' + REG_CHAR + '|' + ESCAPED_CHAR + '|\\\\)*\\)';

	var ENTITY = common.ENTITY;
	var reHtmlTag = common.reHtmlTag;

	var rePunctuation = new RegExp(/^[\u2000-\u206F\u2E00-\u2E7F\\'!"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/);

	var reLinkTitle = new RegExp('^(?:"(' + ESCAPED_CHAR + '|[^"\\x00])*"' + '|' + '\'(' + ESCAPED_CHAR + '|[^\'\\x00])*\'' + '|' + '\\((' + ESCAPED_CHAR + '|[^)\\x00])*\\))');

	var reLinkDestinationBraces = new RegExp('^(?:[<](?:[^ <>\\t\\n\\\\\\x00]' + '|' + ESCAPED_CHAR + '|' + '\\\\)*[>])');

	var reLinkDestination = new RegExp('^(?:' + REG_CHAR + '+|' + ESCAPED_CHAR + '|\\\\|' + IN_PARENS_NOSP + ')*');

	var reEscapable = new RegExp('^' + ESCAPABLE);

	var reEntityHere = new RegExp('^' + ENTITY, 'i');

	var reTicks = /`+/;

	var reTicksHere = /^`+/;

	var reEllipses = /\.\.\./g;

	var reDash = /--+/g;

	var reEmailAutolink = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/;

	var reAutolink = /^<[A-Za-z][A-Za-z0-9.+-]{1,31}:[^<>\x00-\x20]*>/i;

	var reSpnl = /^ *(?:\n *)?/;

	var reWhitespaceChar = /^\s/;

	var reWhitespace = /\s+/g;

	var reFinalSpace = / *$/;

	var reInitialSpace = /^ */;

	var reSpaceAtEndOfLine = /^ *(?:\n|$)/;

	var reLinkLabel = new RegExp('^\\[(?:[^\\\\\\[\\]]|' + ESCAPED_CHAR + '|\\\\){0,1000}\\]');

	// Matches a string of non-special characters.
	var reMain = /^[^\n`\[\]\\!<&*_'"]+/m;

	var text = function text(s) {
	    var node = new Node('Text');
	    node._literal = s;
	    return node;
	};

	// INLINE PARSER

	// These are methods of an InlineParser object, defined below.
	// An InlineParser keeps track of a subject (a string to be
	// parsed) and a position in that subject.

	// If re matches at current position in the subject, advance
	// position in subject and return the match; otherwise return null.
	var match = function match(re) {
	    var m = re.exec(this.subject.slice(this.pos));
	    if (m === null) {
	        return null;
	    } else {
	        this.pos += m.index + m[0].length;
	        return m[0];
	    }
	};

	// Returns the code for the character at the current subject position, or -1
	// there are no more characters.
	var peek = function peek() {
	    if (this.pos < this.subject.length) {
	        return this.subject.charCodeAt(this.pos);
	    } else {
	        return -1;
	    }
	};

	// Parse zero or more space characters, including at most one newline
	var spnl = function spnl() {
	    this.match(reSpnl);
	    return true;
	};

	// All of the parsers below try to match something at the current position
	// in the subject.  If they succeed in matching anything, they
	// return the inline matched, advancing the subject.

	// Attempt to parse backticks, adding either a backtick code span or a
	// literal sequence of backticks.
	var parseBackticks = function parseBackticks(block) {
	    var ticks = this.match(reTicksHere);
	    if (ticks === null) {
	        return false;
	    }
	    var afterOpenTicks = this.pos;
	    var matched;
	    var node;
	    while ((matched = this.match(reTicks)) !== null) {
	        if (matched === ticks) {
	            node = new Node('Code');
	            node._literal = this.subject.slice(afterOpenTicks, this.pos - ticks.length).trim().replace(reWhitespace, ' ');
	            block.appendChild(node);
	            return true;
	        }
	    }
	    // If we got here, we didn't match a closing backtick sequence.
	    this.pos = afterOpenTicks;
	    block.appendChild(text(ticks));
	    return true;
	};

	// Parse a backslash-escaped special character, adding either the escaped
	// character, a hard line break (if the backslash is followed by a newline),
	// or a literal backslash to the block's children.  Assumes current character
	// is a backslash.
	var parseBackslash = function parseBackslash(block) {
	    var subj = this.subject;
	    var node;
	    this.pos += 1;
	    if (this.peek() === C_NEWLINE) {
	        this.pos += 1;
	        node = new Node('Hardbreak');
	        block.appendChild(node);
	    } else if (reEscapable.test(subj.charAt(this.pos))) {
	        block.appendChild(text(subj.charAt(this.pos)));
	        this.pos += 1;
	    } else {
	        block.appendChild(text('\\'));
	    }
	    return true;
	};

	// Attempt to parse an autolink (URL or email in pointy brackets).
	var parseAutolink = function parseAutolink(block) {
	    var m;
	    var dest;
	    var node;
	    if (m = this.match(reEmailAutolink)) {
	        dest = m.slice(1, m.length - 1);
	        node = new Node('Link');
	        node._destination = normalizeURI('mailto:' + dest);
	        node._title = '';
	        node.appendChild(text(dest));
	        block.appendChild(node);
	        return true;
	    } else if (m = this.match(reAutolink)) {
	        dest = m.slice(1, m.length - 1);
	        node = new Node('Link');
	        node._destination = normalizeURI(dest);
	        node._title = '';
	        node.appendChild(text(dest));
	        block.appendChild(node);
	        return true;
	    } else {
	        return false;
	    }
	};

	// Attempt to parse a raw HTML tag.
	var parseHtmlTag = function parseHtmlTag(block) {
	    var m = this.match(reHtmlTag);
	    if (m === null) {
	        return false;
	    } else {
	        var node = new Node('HtmlInline');
	        node._literal = m;
	        block.appendChild(node);
	        return true;
	    }
	};

	// Scan a sequence of characters with code cc, and return information about
	// the number of delimiters and whether they are positioned such that
	// they can open and/or close emphasis or strong emphasis.  A utility
	// function for strong/emph parsing.
	var scanDelims = function scanDelims(cc) {
	    var numdelims = 0;
	    var char_before, char_after, cc_after;
	    var startpos = this.pos;
	    var left_flanking, right_flanking, can_open, can_close;
	    var after_is_whitespace, after_is_punctuation, before_is_whitespace, before_is_punctuation;

	    if (cc === C_SINGLEQUOTE || cc === C_DOUBLEQUOTE) {
	        numdelims++;
	        this.pos++;
	    } else {
	        while (this.peek() === cc) {
	            numdelims++;
	            this.pos++;
	        }
	    }

	    if (numdelims === 0) {
	        return null;
	    }

	    char_before = startpos === 0 ? '\n' : this.subject.charAt(startpos - 1);

	    cc_after = this.peek();
	    if (cc_after === -1) {
	        char_after = '\n';
	    } else {
	        char_after = fromCodePoint(cc_after);
	    }

	    after_is_whitespace = reWhitespaceChar.test(char_after);
	    after_is_punctuation = rePunctuation.test(char_after);
	    before_is_whitespace = reWhitespaceChar.test(char_before);
	    before_is_punctuation = rePunctuation.test(char_before);

	    left_flanking = !after_is_whitespace && !(after_is_punctuation && !before_is_whitespace && !before_is_punctuation);
	    right_flanking = !before_is_whitespace && !(before_is_punctuation && !after_is_whitespace && !after_is_punctuation);
	    if (cc === C_UNDERSCORE) {
	        can_open = left_flanking && (!right_flanking || before_is_punctuation);
	        can_close = right_flanking && (!left_flanking || after_is_punctuation);
	    } else if (cc === C_SINGLEQUOTE || cc === C_DOUBLEQUOTE) {
	        can_open = left_flanking && !right_flanking;
	        can_close = right_flanking;
	    } else {
	        can_open = left_flanking;
	        can_close = right_flanking;
	    }
	    this.pos = startpos;
	    return { numdelims: numdelims,
	        can_open: can_open,
	        can_close: can_close };
	};

	// Handle a delimiter marker for emphasis or a quote.
	var handleDelim = function handleDelim(cc, block) {
	    var res = this.scanDelims(cc);
	    if (!res) {
	        return false;
	    }
	    var numdelims = res.numdelims;
	    var startpos = this.pos;
	    var contents;

	    this.pos += numdelims;
	    if (cc === C_SINGLEQUOTE) {
	        contents = '\u2019';
	    } else if (cc === C_DOUBLEQUOTE) {
	        contents = '\u201C';
	    } else {
	        contents = this.subject.slice(startpos, this.pos);
	    }
	    var node = text(contents);
	    block.appendChild(node);

	    // Add entry to stack for this opener
	    this.delimiters = { cc: cc,
	        numdelims: numdelims,
	        node: node,
	        previous: this.delimiters,
	        next: null,
	        can_open: res.can_open,
	        can_close: res.can_close,
	        active: true };
	    if (this.delimiters.previous !== null) {
	        this.delimiters.previous.next = this.delimiters;
	    }

	    return true;
	};

	var removeDelimiter = function removeDelimiter(delim) {
	    if (delim.previous !== null) {
	        delim.previous.next = delim.next;
	    }
	    if (delim.next === null) {
	        // top of stack
	        this.delimiters = delim.previous;
	    } else {
	        delim.next.previous = delim.previous;
	    }
	};

	var removeDelimitersBetween = function removeDelimitersBetween(bottom, top) {
	    if (bottom.next !== top) {
	        bottom.next = top;
	        top.previous = bottom;
	    }
	};

	var processEmphasis = function processEmphasis(stack_bottom) {
	    var opener, closer, old_closer;
	    var opener_inl, closer_inl;
	    var tempstack;
	    var use_delims;
	    var tmp, next;
	    var opener_found;
	    var openers_bottom = [];

	    openers_bottom[C_UNDERSCORE] = stack_bottom;
	    openers_bottom[C_ASTERISK] = stack_bottom;
	    openers_bottom[C_SINGLEQUOTE] = stack_bottom;
	    openers_bottom[C_DOUBLEQUOTE] = stack_bottom;

	    // find first closer above stack_bottom:
	    closer = this.delimiters;
	    while (closer !== null && closer.previous !== stack_bottom) {
	        closer = closer.previous;
	    }
	    // move forward, looking for closers, and handling each
	    while (closer !== null) {
	        var closercc = closer.cc;
	        if (!(closer.can_close && (closercc === C_UNDERSCORE || closercc === C_ASTERISK || closercc === C_SINGLEQUOTE || closercc === C_DOUBLEQUOTE))) {
	            closer = closer.next;
	        } else {
	            // found emphasis closer. now look back for first matching opener:
	            opener = closer.previous;
	            opener_found = false;
	            while (opener !== null && opener !== stack_bottom && opener !== openers_bottom[closercc]) {
	                if (opener.cc === closer.cc && opener.can_open) {
	                    opener_found = true;
	                    break;
	                }
	                opener = opener.previous;
	            }
	            old_closer = closer;

	            if (closercc === C_ASTERISK || closercc === C_UNDERSCORE) {
	                if (!opener_found) {
	                    closer = closer.next;
	                } else {
	                    // calculate actual number of delimiters used from closer
	                    if (closer.numdelims < 3 || opener.numdelims < 3) {
	                        use_delims = closer.numdelims <= opener.numdelims ? closer.numdelims : opener.numdelims;
	                    } else {
	                        use_delims = closer.numdelims % 2 === 0 ? 2 : 1;
	                    }

	                    opener_inl = opener.node;
	                    closer_inl = closer.node;

	                    // remove used delimiters from stack elts and inlines
	                    opener.numdelims -= use_delims;
	                    closer.numdelims -= use_delims;
	                    opener_inl._literal = opener_inl._literal.slice(0, opener_inl._literal.length - use_delims);
	                    closer_inl._literal = closer_inl._literal.slice(0, closer_inl._literal.length - use_delims);

	                    // build contents for new emph element
	                    var emph = new Node(use_delims === 1 ? 'Emph' : 'Strong');

	                    tmp = opener_inl._next;
	                    while (tmp && tmp !== closer_inl) {
	                        next = tmp._next;
	                        tmp.unlink();
	                        emph.appendChild(tmp);
	                        tmp = next;
	                    }

	                    opener_inl.insertAfter(emph);

	                    // remove elts between opener and closer in delimiters stack
	                    removeDelimitersBetween(opener, closer);

	                    // if opener has 0 delims, remove it and the inline
	                    if (opener.numdelims === 0) {
	                        opener_inl.unlink();
	                        this.removeDelimiter(opener);
	                    }

	                    if (closer.numdelims === 0) {
	                        closer_inl.unlink();
	                        tempstack = closer.next;
	                        this.removeDelimiter(closer);
	                        closer = tempstack;
	                    }
	                }
	            } else if (closercc === C_SINGLEQUOTE) {
	                closer.node._literal = '\u2019';
	                if (opener_found) {
	                    opener.node._literal = '\u2018';
	                }
	                closer = closer.next;
	            } else if (closercc === C_DOUBLEQUOTE) {
	                closer.node._literal = '\u201D';
	                if (opener_found) {
	                    opener.node.literal = '\u201C';
	                }
	                closer = closer.next;
	            }
	            if (!opener_found) {
	                // Set lower bound for future searches for openers:
	                openers_bottom[closercc] = old_closer.previous;
	                if (!old_closer.can_open) {
	                    // We can remove a closer that can't be an opener,
	                    // once we've seen there's no matching opener:
	                    this.removeDelimiter(old_closer);
	                }
	            }
	        }
	    }

	    // remove all delimiters
	    while (this.delimiters !== null && this.delimiters !== stack_bottom) {
	        this.removeDelimiter(this.delimiters);
	    }
	};

	// Attempt to parse link title (sans quotes), returning the string
	// or null if no match.
	var parseLinkTitle = function parseLinkTitle() {
	    var title = this.match(reLinkTitle);
	    if (title === null) {
	        return null;
	    } else {
	        // chop off quotes from title and unescape:
	        return unescapeString(title.substr(1, title.length - 2));
	    }
	};

	// Attempt to parse link destination, returning the string or
	// null if no match.
	var parseLinkDestination = function parseLinkDestination() {
	    var res = this.match(reLinkDestinationBraces);
	    if (res === null) {
	        res = this.match(reLinkDestination);
	        if (res === null) {
	            return null;
	        } else {
	            return normalizeURI(unescapeString(res));
	        }
	    } else {
	        // chop off surrounding <..>:
	        return normalizeURI(unescapeString(res.substr(1, res.length - 2)));
	    }
	};

	// Attempt to parse a link label, returning number of characters parsed.
	var parseLinkLabel = function parseLinkLabel() {
	    var m = this.match(reLinkLabel);
	    if (m === null || m.length > 1001) {
	        return 0;
	    } else {
	        return m.length;
	    }
	};

	// Add open bracket to delimiter stack and add a text node to block's children.
	var parseOpenBracket = function parseOpenBracket(block) {
	    var startpos = this.pos;
	    this.pos += 1;

	    var node = text('[');
	    block.appendChild(node);

	    // Add entry to stack for this opener
	    this.delimiters = { cc: C_OPEN_BRACKET,
	        numdelims: 1,
	        node: node,
	        previous: this.delimiters,
	        next: null,
	        can_open: true,
	        can_close: false,
	        index: startpos,
	        active: true };
	    if (this.delimiters.previous !== null) {
	        this.delimiters.previous.next = this.delimiters;
	    }

	    return true;
	};

	// IF next character is [, and ! delimiter to delimiter stack and
	// add a text node to block's children.  Otherwise just add a text node.
	var parseBang = function parseBang(block) {
	    var startpos = this.pos;
	    this.pos += 1;
	    if (this.peek() === C_OPEN_BRACKET) {
	        this.pos += 1;

	        var node = text('![');
	        block.appendChild(node);

	        // Add entry to stack for this opener
	        this.delimiters = { cc: C_BANG,
	            numdelims: 1,
	            node: node,
	            previous: this.delimiters,
	            next: null,
	            can_open: true,
	            can_close: false,
	            index: startpos + 1,
	            active: true };
	        if (this.delimiters.previous !== null) {
	            this.delimiters.previous.next = this.delimiters;
	        }
	    } else {
	        block.appendChild(text('!'));
	    }
	    return true;
	};

	// Try to match close bracket against an opening in the delimiter
	// stack.  Add either a link or image, or a plain [ character,
	// to block's children.  If there is a matching delimiter,
	// remove it from the delimiter stack.
	var parseCloseBracket = function parseCloseBracket(block) {
	    var startpos;
	    var is_image;
	    var dest;
	    var title;
	    var matched = false;
	    var reflabel;
	    var opener;

	    this.pos += 1;
	    startpos = this.pos;

	    // look through stack of delimiters for a [ or ![
	    opener = this.delimiters;

	    while (opener !== null) {
	        if (opener.cc === C_OPEN_BRACKET || opener.cc === C_BANG) {
	            break;
	        }
	        opener = opener.previous;
	    }

	    if (opener === null) {
	        // no matched opener, just return a literal
	        block.appendChild(text(']'));
	        return true;
	    }

	    if (!opener.active) {
	        // no matched opener, just return a literal
	        block.appendChild(text(']'));
	        // take opener off emphasis stack
	        this.removeDelimiter(opener);
	        return true;
	    }

	    // If we got here, open is a potential opener
	    is_image = opener.cc === C_BANG;

	    // Check to see if we have a link/image

	    // Inline link?
	    if (this.peek() === C_OPEN_PAREN) {
	        this.pos++;
	        if (this.spnl() && (dest = this.parseLinkDestination()) !== null && this.spnl() && (
	        // make sure there's a space before the title:
	        reWhitespaceChar.test(this.subject.charAt(this.pos - 1)) && (title = this.parseLinkTitle()) || true) && this.spnl() && this.peek() === C_CLOSE_PAREN) {
	            this.pos += 1;
	            matched = true;
	        }
	    } else {

	        // Next, see if there's a link label
	        var savepos = this.pos;
	        var beforelabel = this.pos;
	        var n = this.parseLinkLabel();
	        if (n === 0 || n === 2) {
	            // empty or missing second label
	            reflabel = this.subject.slice(opener.index, startpos);
	        } else {
	            reflabel = this.subject.slice(beforelabel, beforelabel + n);
	        }
	        if (n === 0) {
	            // If shortcut reference link, rewind before spaces we skipped.
	            this.pos = savepos;
	        }

	        // lookup rawlabel in refmap
	        var link = this.refmap[normalizeReference(reflabel)];
	        if (link) {
	            dest = link.destination;
	            title = link.title;
	            matched = true;
	        }
	    }

	    if (matched) {
	        var node = new Node(is_image ? 'Image' : 'Link');
	        node._destination = dest;
	        node._title = title || '';

	        var tmp, next;
	        tmp = opener.node._next;
	        while (tmp) {
	            next = tmp._next;
	            tmp.unlink();
	            node.appendChild(tmp);
	            tmp = next;
	        }
	        block.appendChild(node);
	        this.processEmphasis(opener.previous);

	        opener.node.unlink();

	        // processEmphasis will remove this and later delimiters.
	        // Now, for a link, we also deactivate earlier link openers.
	        // (no links in links)
	        if (!is_image) {
	            opener = this.delimiters;
	            while (opener !== null) {
	                if (opener.cc === C_OPEN_BRACKET) {
	                    opener.active = false; // deactivate this opener
	                }
	                opener = opener.previous;
	            }
	        }

	        return true;
	    } else {
	        // no match

	        this.removeDelimiter(opener); // remove this opener from stack
	        this.pos = startpos;
	        block.appendChild(text(']'));
	        return true;
	    }
	};

	// Attempt to parse an entity.
	var parseEntity = function parseEntity(block) {
	    var m;
	    if (m = this.match(reEntityHere)) {
	        block.appendChild(text(decodeHTML(m)));
	        return true;
	    } else {
	        return false;
	    }
	};

	// Parse a run of ordinary characters, or a single character with
	// a special meaning in markdown, as a plain string.
	var parseString = function parseString(block) {
	    var m;
	    if (m = this.match(reMain)) {
	        if (this.options.smart) {
	            block.appendChild(text(m.replace(reEllipses, '\u2026').replace(reDash, function (chars) {
	                var enCount = 0;
	                var emCount = 0;
	                if (chars.length % 3 === 0) {
	                    // If divisible by 3, use all em dashes
	                    emCount = chars.length / 3;
	                } else if (chars.length % 2 === 0) {
	                    // If divisible by 2, use all en dashes
	                    enCount = chars.length / 2;
	                } else if (chars.length % 3 === 2) {
	                    // If 2 extra dashes, use en dash for last 2; em dashes for rest
	                    enCount = 1;
	                    emCount = (chars.length - 2) / 3;
	                } else {
	                    // Use en dashes for last 4 hyphens; em dashes for rest
	                    enCount = 2;
	                    emCount = (chars.length - 4) / 3;
	                }
	                return '\u2014'.repeat(emCount) + '\u2013'.repeat(enCount);
	            })));
	        } else {
	            block.appendChild(text(m));
	        }
	        return true;
	    } else {
	        return false;
	    }
	};

	// Parse a newline.  If it was preceded by two spaces, return a hard
	// line break; otherwise a soft line break.
	var parseNewline = function parseNewline(block) {
	    this.pos += 1; // assume we're at a \n
	    // check previous node for trailing spaces
	    var lastc = block._lastChild;
	    if (lastc && lastc.type === 'Text' && lastc._literal[lastc._literal.length - 1] === ' ') {
	        var hardbreak = lastc._literal[lastc._literal.length - 2] === ' ';
	        lastc._literal = lastc._literal.replace(reFinalSpace, '');
	        block.appendChild(new Node(hardbreak ? 'Hardbreak' : 'Softbreak'));
	    } else {
	        block.appendChild(new Node('Softbreak'));
	    }
	    this.match(reInitialSpace); // gobble leading spaces in next line
	    return true;
	};

	// Attempt to parse a link reference, modifying refmap.
	var parseReference = function parseReference(s, refmap) {
	    this.subject = s;
	    this.pos = 0;
	    var rawlabel;
	    var dest;
	    var title;
	    var matchChars;
	    var startpos = this.pos;

	    // label:
	    matchChars = this.parseLinkLabel();
	    if (matchChars === 0) {
	        return 0;
	    } else {
	        rawlabel = this.subject.substr(0, matchChars);
	    }

	    // colon:
	    if (this.peek() === C_COLON) {
	        this.pos++;
	    } else {
	        this.pos = startpos;
	        return 0;
	    }

	    //  link url
	    this.spnl();

	    dest = this.parseLinkDestination();
	    if (dest === null || dest.length === 0) {
	        this.pos = startpos;
	        return 0;
	    }

	    var beforetitle = this.pos;
	    this.spnl();
	    title = this.parseLinkTitle();
	    if (title === null) {
	        title = '';
	        // rewind before spaces
	        this.pos = beforetitle;
	    }

	    // make sure we're at line end:
	    var atLineEnd = true;
	    if (this.match(reSpaceAtEndOfLine) === null) {
	        if (title === '') {
	            atLineEnd = false;
	        } else {
	            // the potential title we found is not at the line end,
	            // but it could still be a legal link reference if we
	            // discard the title
	            title = '';
	            // rewind before spaces
	            this.pos = beforetitle;
	            // and instead check if the link URL is at the line end
	            atLineEnd = this.match(reSpaceAtEndOfLine) !== null;
	        }
	    }

	    if (!atLineEnd) {
	        this.pos = startpos;
	        return 0;
	    }

	    var normlabel = normalizeReference(rawlabel);
	    if (normlabel === '') {
	        // label must contain non-whitespace characters
	        this.pos = startpos;
	        return 0;
	    }

	    if (!refmap[normlabel]) {
	        refmap[normlabel] = { destination: dest, title: title };
	    }
	    return this.pos - startpos;
	};

	// Parse the next inline element in subject, advancing subject position.
	// On success, add the result to block's children and return true.
	// On failure, return false.
	var parseInline = function parseInline(block) {
	    var res = false;
	    var c = this.peek();
	    if (c === -1) {
	        return false;
	    }
	    switch (c) {
	        case C_NEWLINE:
	            res = this.parseNewline(block);
	            break;
	        case C_BACKSLASH:
	            res = this.parseBackslash(block);
	            break;
	        case C_BACKTICK:
	            res = this.parseBackticks(block);
	            break;
	        case C_ASTERISK:
	        case C_UNDERSCORE:
	            res = this.handleDelim(c, block);
	            break;
	        case C_SINGLEQUOTE:
	        case C_DOUBLEQUOTE:
	            res = this.options.smart && this.handleDelim(c, block);
	            break;
	        case C_OPEN_BRACKET:
	            res = this.parseOpenBracket(block);
	            break;
	        case C_BANG:
	            res = this.parseBang(block);
	            break;
	        case C_CLOSE_BRACKET:
	            res = this.parseCloseBracket(block);
	            break;
	        case C_LESSTHAN:
	            res = this.parseAutolink(block) || this.parseHtmlTag(block);
	            break;
	        case C_AMPERSAND:
	            res = this.parseEntity(block);
	            break;
	        default:
	            res = this.parseString(block);
	            break;
	    }
	    if (!res) {
	        this.pos += 1;
	        block.appendChild(text(fromCodePoint(c)));
	    }

	    return true;
	};

	// Parse string content in block into inline children,
	// using refmap to resolve references.
	var parseInlines = function parseInlines(block) {
	    this.subject = block._string_content.trim();
	    this.pos = 0;
	    this.delimiters = null;
	    while (this.parseInline(block)) {}
	    block._string_content = null; // allow raw string to be garbage collected
	    this.processEmphasis(null);
	};

	// The InlineParser object.
	function InlineParser(options) {
	    return {
	        subject: '',
	        delimiters: null, // used by handleDelim method
	        pos: 0,
	        refmap: {},
	        match: match,
	        peek: peek,
	        spnl: spnl,
	        parseBackticks: parseBackticks,
	        parseBackslash: parseBackslash,
	        parseAutolink: parseAutolink,
	        parseHtmlTag: parseHtmlTag,
	        scanDelims: scanDelims,
	        handleDelim: handleDelim,
	        parseLinkTitle: parseLinkTitle,
	        parseLinkDestination: parseLinkDestination,
	        parseLinkLabel: parseLinkLabel,
	        parseOpenBracket: parseOpenBracket,
	        parseCloseBracket: parseCloseBracket,
	        parseBang: parseBang,
	        parseEntity: parseEntity,
	        parseString: parseString,
	        parseNewline: parseNewline,
	        parseReference: parseReference,
	        parseInline: parseInline,
	        processEmphasis: processEmphasis,
	        removeDelimiter: removeDelimiter,
	        options: options || {},
	        parse: parseInlines
	    };
	}

	module.exports = InlineParser;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	/* The bulk of this code derives from https://github.com/dmoscrop/fold-case
	But in addition to case-folding, we also normalize whitespace.

	fold-case is Copyright Mathias Bynens <https://mathiasbynens.be/>

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	*/

	/*eslint-disable  key-spacing, comma-spacing */

	var regex = /[ \t\r\n]+|[A-Z\xB5\xC0-\xD6\xD8-\xDF\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u0149\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u017F\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C5\u01C7\u01C8\u01CA\u01CB\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F0-\u01F2\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0345\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03AB\u03B0\u03C2\u03CF-\u03D1\u03D5\u03D6\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F0\u03F1\u03F4\u03F5\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u0587\u10A0-\u10C5\u10C7\u10CD\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E96-\u1E9B\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F50\u1F52\u1F54\u1F56\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1F80-\u1FAF\u1FB2-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD2\u1FD3\u1FD6-\u1FDB\u1FE2-\u1FE4\u1FE6-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2126\u212A\u212B\u2132\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AD\uA7B0\uA7B1\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A]|\uD801[\uDC00-\uDC27]|\uD806[\uDCA0-\uDCBF]/g;

	var map = { 'A': 'a', 'B': 'b', 'C': 'c', 'D': 'd', 'E': 'e', 'F': 'f', 'G': 'g', 'H': 'h', 'I': 'i', 'J': 'j', 'K': 'k', 'L': 'l', 'M': 'm', 'N': 'n', 'O': 'o', 'P': 'p', 'Q': 'q', 'R': 'r', 'S': 's', 'T': 't', 'U': 'u', 'V': 'v', 'W': 'w', 'X': 'x', 'Y': 'y', 'Z': 'z', '\xB5': '\u03BC', '\xC0': '\xE0', '\xC1': '\xE1', '\xC2': '\xE2', '\xC3': '\xE3', '\xC4': '\xE4', '\xC5': '\xE5', '\xC6': '\xE6', '\xC7': '\xE7', '\xC8': '\xE8', '\xC9': '\xE9', '\xCA': '\xEA', '\xCB': '\xEB', '\xCC': '\xEC', '\xCD': '\xED', '\xCE': '\xEE', '\xCF': '\xEF', '\xD0': '\xF0', '\xD1': '\xF1', '\xD2': '\xF2', '\xD3': '\xF3', '\xD4': '\xF4', '\xD5': '\xF5', '\xD6': '\xF6', '\xD8': '\xF8', '\xD9': '\xF9', '\xDA': '\xFA', '\xDB': '\xFB', '\xDC': '\xFC', '\xDD': '\xFD', '\xDE': '\xFE', '\u0100': '\u0101', '\u0102': '\u0103', '\u0104': '\u0105', '\u0106': '\u0107', '\u0108': '\u0109', '\u010A': '\u010B', '\u010C': '\u010D', '\u010E': '\u010F', '\u0110': '\u0111', '\u0112': '\u0113', '\u0114': '\u0115', '\u0116': '\u0117', '\u0118': '\u0119', '\u011A': '\u011B', '\u011C': '\u011D', '\u011E': '\u011F', '\u0120': '\u0121', '\u0122': '\u0123', '\u0124': '\u0125', '\u0126': '\u0127', '\u0128': '\u0129', '\u012A': '\u012B', '\u012C': '\u012D', '\u012E': '\u012F', '\u0132': '\u0133', '\u0134': '\u0135', '\u0136': '\u0137', '\u0139': '\u013A', '\u013B': '\u013C', '\u013D': '\u013E', '\u013F': '\u0140', '\u0141': '\u0142', '\u0143': '\u0144', '\u0145': '\u0146', '\u0147': '\u0148', '\u014A': '\u014B', '\u014C': '\u014D', '\u014E': '\u014F', '\u0150': '\u0151', '\u0152': '\u0153', '\u0154': '\u0155', '\u0156': '\u0157', '\u0158': '\u0159', '\u015A': '\u015B', '\u015C': '\u015D', '\u015E': '\u015F', '\u0160': '\u0161', '\u0162': '\u0163', '\u0164': '\u0165', '\u0166': '\u0167', '\u0168': '\u0169', '\u016A': '\u016B', '\u016C': '\u016D', '\u016E': '\u016F', '\u0170': '\u0171', '\u0172': '\u0173', '\u0174': '\u0175', '\u0176': '\u0177', '\u0178': '\xFF', '\u0179': '\u017A', '\u017B': '\u017C', '\u017D': '\u017E', '\u017F': 's', '\u0181': '\u0253', '\u0182': '\u0183', '\u0184': '\u0185', '\u0186': '\u0254', '\u0187': '\u0188', '\u0189': '\u0256', '\u018A': '\u0257', '\u018B': '\u018C', '\u018E': '\u01DD', '\u018F': '\u0259', '\u0190': '\u025B', '\u0191': '\u0192', '\u0193': '\u0260', '\u0194': '\u0263', '\u0196': '\u0269', '\u0197': '\u0268', '\u0198': '\u0199', '\u019C': '\u026F', '\u019D': '\u0272', '\u019F': '\u0275', '\u01A0': '\u01A1', '\u01A2': '\u01A3', '\u01A4': '\u01A5', '\u01A6': '\u0280', '\u01A7': '\u01A8', '\u01A9': '\u0283', '\u01AC': '\u01AD', '\u01AE': '\u0288', '\u01AF': '\u01B0', '\u01B1': '\u028A', '\u01B2': '\u028B', '\u01B3': '\u01B4', '\u01B5': '\u01B6', '\u01B7': '\u0292', '\u01B8': '\u01B9', '\u01BC': '\u01BD', '\u01C4': '\u01C6', '\u01C5': '\u01C6', '\u01C7': '\u01C9', '\u01C8': '\u01C9', '\u01CA': '\u01CC', '\u01CB': '\u01CC', '\u01CD': '\u01CE', '\u01CF': '\u01D0', '\u01D1': '\u01D2', '\u01D3': '\u01D4', '\u01D5': '\u01D6', '\u01D7': '\u01D8', '\u01D9': '\u01DA', '\u01DB': '\u01DC', '\u01DE': '\u01DF', '\u01E0': '\u01E1', '\u01E2': '\u01E3', '\u01E4': '\u01E5', '\u01E6': '\u01E7', '\u01E8': '\u01E9', '\u01EA': '\u01EB', '\u01EC': '\u01ED', '\u01EE': '\u01EF', '\u01F1': '\u01F3', '\u01F2': '\u01F3', '\u01F4': '\u01F5', '\u01F6': '\u0195', '\u01F7': '\u01BF', '\u01F8': '\u01F9', '\u01FA': '\u01FB', '\u01FC': '\u01FD', '\u01FE': '\u01FF', '\u0200': '\u0201', '\u0202': '\u0203', '\u0204': '\u0205', '\u0206': '\u0207', '\u0208': '\u0209', '\u020A': '\u020B', '\u020C': '\u020D', '\u020E': '\u020F', '\u0210': '\u0211', '\u0212': '\u0213', '\u0214': '\u0215', '\u0216': '\u0217', '\u0218': '\u0219', '\u021A': '\u021B', '\u021C': '\u021D', '\u021E': '\u021F', '\u0220': '\u019E', '\u0222': '\u0223', '\u0224': '\u0225', '\u0226': '\u0227', '\u0228': '\u0229', '\u022A': '\u022B', '\u022C': '\u022D', '\u022E': '\u022F', '\u0230': '\u0231', '\u0232': '\u0233', '\u023A': '\u2C65', '\u023B': '\u023C', '\u023D': '\u019A', '\u023E': '\u2C66', '\u0241': '\u0242', '\u0243': '\u0180', '\u0244': '\u0289', '\u0245': '\u028C', '\u0246': '\u0247', '\u0248': '\u0249', '\u024A': '\u024B', '\u024C': '\u024D', '\u024E': '\u024F', '\u0345': '\u03B9', '\u0370': '\u0371', '\u0372': '\u0373', '\u0376': '\u0377', '\u037F': '\u03F3', '\u0386': '\u03AC', '\u0388': '\u03AD', '\u0389': '\u03AE', '\u038A': '\u03AF', '\u038C': '\u03CC', '\u038E': '\u03CD', '\u038F': '\u03CE', '\u0391': '\u03B1', '\u0392': '\u03B2', '\u0393': '\u03B3', '\u0394': '\u03B4', '\u0395': '\u03B5', '\u0396': '\u03B6', '\u0397': '\u03B7', '\u0398': '\u03B8', '\u0399': '\u03B9', '\u039A': '\u03BA', '\u039B': '\u03BB', '\u039C': '\u03BC', '\u039D': '\u03BD', '\u039E': '\u03BE', '\u039F': '\u03BF', '\u03A0': '\u03C0', '\u03A1': '\u03C1', '\u03A3': '\u03C3', '\u03A4': '\u03C4', '\u03A5': '\u03C5', '\u03A6': '\u03C6', '\u03A7': '\u03C7', '\u03A8': '\u03C8', '\u03A9': '\u03C9', '\u03AA': '\u03CA', '\u03AB': '\u03CB', '\u03C2': '\u03C3', '\u03CF': '\u03D7', '\u03D0': '\u03B2', '\u03D1': '\u03B8', '\u03D5': '\u03C6', '\u03D6': '\u03C0', '\u03D8': '\u03D9', '\u03DA': '\u03DB', '\u03DC': '\u03DD', '\u03DE': '\u03DF', '\u03E0': '\u03E1', '\u03E2': '\u03E3', '\u03E4': '\u03E5', '\u03E6': '\u03E7', '\u03E8': '\u03E9', '\u03EA': '\u03EB', '\u03EC': '\u03ED', '\u03EE': '\u03EF', '\u03F0': '\u03BA', '\u03F1': '\u03C1', '\u03F4': '\u03B8', '\u03F5': '\u03B5', '\u03F7': '\u03F8', '\u03F9': '\u03F2', '\u03FA': '\u03FB', '\u03FD': '\u037B', '\u03FE': '\u037C', '\u03FF': '\u037D', '\u0400': '\u0450', '\u0401': '\u0451', '\u0402': '\u0452', '\u0403': '\u0453', '\u0404': '\u0454', '\u0405': '\u0455', '\u0406': '\u0456', '\u0407': '\u0457', '\u0408': '\u0458', '\u0409': '\u0459', '\u040A': '\u045A', '\u040B': '\u045B', '\u040C': '\u045C', '\u040D': '\u045D', '\u040E': '\u045E', '\u040F': '\u045F', '\u0410': '\u0430', '\u0411': '\u0431', '\u0412': '\u0432', '\u0413': '\u0433', '\u0414': '\u0434', '\u0415': '\u0435', '\u0416': '\u0436', '\u0417': '\u0437', '\u0418': '\u0438', '\u0419': '\u0439', '\u041A': '\u043A', '\u041B': '\u043B', '\u041C': '\u043C', '\u041D': '\u043D', '\u041E': '\u043E', '\u041F': '\u043F', '\u0420': '\u0440', '\u0421': '\u0441', '\u0422': '\u0442', '\u0423': '\u0443', '\u0424': '\u0444', '\u0425': '\u0445', '\u0426': '\u0446', '\u0427': '\u0447', '\u0428': '\u0448', '\u0429': '\u0449', '\u042A': '\u044A', '\u042B': '\u044B', '\u042C': '\u044C', '\u042D': '\u044D', '\u042E': '\u044E', '\u042F': '\u044F', '\u0460': '\u0461', '\u0462': '\u0463', '\u0464': '\u0465', '\u0466': '\u0467', '\u0468': '\u0469', '\u046A': '\u046B', '\u046C': '\u046D', '\u046E': '\u046F', '\u0470': '\u0471', '\u0472': '\u0473', '\u0474': '\u0475', '\u0476': '\u0477', '\u0478': '\u0479', '\u047A': '\u047B', '\u047C': '\u047D', '\u047E': '\u047F', '\u0480': '\u0481', '\u048A': '\u048B', '\u048C': '\u048D', '\u048E': '\u048F', '\u0490': '\u0491', '\u0492': '\u0493', '\u0494': '\u0495', '\u0496': '\u0497', '\u0498': '\u0499', '\u049A': '\u049B', '\u049C': '\u049D', '\u049E': '\u049F', '\u04A0': '\u04A1', '\u04A2': '\u04A3', '\u04A4': '\u04A5', '\u04A6': '\u04A7', '\u04A8': '\u04A9', '\u04AA': '\u04AB', '\u04AC': '\u04AD', '\u04AE': '\u04AF', '\u04B0': '\u04B1', '\u04B2': '\u04B3', '\u04B4': '\u04B5', '\u04B6': '\u04B7', '\u04B8': '\u04B9', '\u04BA': '\u04BB', '\u04BC': '\u04BD', '\u04BE': '\u04BF', '\u04C0': '\u04CF', '\u04C1': '\u04C2', '\u04C3': '\u04C4', '\u04C5': '\u04C6', '\u04C7': '\u04C8', '\u04C9': '\u04CA', '\u04CB': '\u04CC', '\u04CD': '\u04CE', '\u04D0': '\u04D1', '\u04D2': '\u04D3', '\u04D4': '\u04D5', '\u04D6': '\u04D7', '\u04D8': '\u04D9', '\u04DA': '\u04DB', '\u04DC': '\u04DD', '\u04DE': '\u04DF', '\u04E0': '\u04E1', '\u04E2': '\u04E3', '\u04E4': '\u04E5', '\u04E6': '\u04E7', '\u04E8': '\u04E9', '\u04EA': '\u04EB', '\u04EC': '\u04ED', '\u04EE': '\u04EF', '\u04F0': '\u04F1', '\u04F2': '\u04F3', '\u04F4': '\u04F5', '\u04F6': '\u04F7', '\u04F8': '\u04F9', '\u04FA': '\u04FB', '\u04FC': '\u04FD', '\u04FE': '\u04FF', '\u0500': '\u0501', '\u0502': '\u0503', '\u0504': '\u0505', '\u0506': '\u0507', '\u0508': '\u0509', '\u050A': '\u050B', '\u050C': '\u050D', '\u050E': '\u050F', '\u0510': '\u0511', '\u0512': '\u0513', '\u0514': '\u0515', '\u0516': '\u0517', '\u0518': '\u0519', '\u051A': '\u051B', '\u051C': '\u051D', '\u051E': '\u051F', '\u0520': '\u0521', '\u0522': '\u0523', '\u0524': '\u0525', '\u0526': '\u0527', '\u0528': '\u0529', '\u052A': '\u052B', '\u052C': '\u052D', '\u052E': '\u052F', '\u0531': '\u0561', '\u0532': '\u0562', '\u0533': '\u0563', '\u0534': '\u0564', '\u0535': '\u0565', '\u0536': '\u0566', '\u0537': '\u0567', '\u0538': '\u0568', '\u0539': '\u0569', '\u053A': '\u056A', '\u053B': '\u056B', '\u053C': '\u056C', '\u053D': '\u056D', '\u053E': '\u056E', '\u053F': '\u056F', '\u0540': '\u0570', '\u0541': '\u0571', '\u0542': '\u0572', '\u0543': '\u0573', '\u0544': '\u0574', '\u0545': '\u0575', '\u0546': '\u0576', '\u0547': '\u0577', '\u0548': '\u0578', '\u0549': '\u0579', '\u054A': '\u057A', '\u054B': '\u057B', '\u054C': '\u057C', '\u054D': '\u057D', '\u054E': '\u057E', '\u054F': '\u057F', '\u0550': '\u0580', '\u0551': '\u0581', '\u0552': '\u0582', '\u0553': '\u0583', '\u0554': '\u0584', '\u0555': '\u0585', '\u0556': '\u0586', '\u10A0': '\u2D00', '\u10A1': '\u2D01', '\u10A2': '\u2D02', '\u10A3': '\u2D03', '\u10A4': '\u2D04', '\u10A5': '\u2D05', '\u10A6': '\u2D06', '\u10A7': '\u2D07', '\u10A8': '\u2D08', '\u10A9': '\u2D09', '\u10AA': '\u2D0A', '\u10AB': '\u2D0B', '\u10AC': '\u2D0C', '\u10AD': '\u2D0D', '\u10AE': '\u2D0E', '\u10AF': '\u2D0F', '\u10B0': '\u2D10', '\u10B1': '\u2D11', '\u10B2': '\u2D12', '\u10B3': '\u2D13', '\u10B4': '\u2D14', '\u10B5': '\u2D15', '\u10B6': '\u2D16', '\u10B7': '\u2D17', '\u10B8': '\u2D18', '\u10B9': '\u2D19', '\u10BA': '\u2D1A', '\u10BB': '\u2D1B', '\u10BC': '\u2D1C', '\u10BD': '\u2D1D', '\u10BE': '\u2D1E', '\u10BF': '\u2D1F', '\u10C0': '\u2D20', '\u10C1': '\u2D21', '\u10C2': '\u2D22', '\u10C3': '\u2D23', '\u10C4': '\u2D24', '\u10C5': '\u2D25', '\u10C7': '\u2D27', '\u10CD': '\u2D2D', '\u1E00': '\u1E01', '\u1E02': '\u1E03', '\u1E04': '\u1E05', '\u1E06': '\u1E07', '\u1E08': '\u1E09', '\u1E0A': '\u1E0B', '\u1E0C': '\u1E0D', '\u1E0E': '\u1E0F', '\u1E10': '\u1E11', '\u1E12': '\u1E13', '\u1E14': '\u1E15', '\u1E16': '\u1E17', '\u1E18': '\u1E19', '\u1E1A': '\u1E1B', '\u1E1C': '\u1E1D', '\u1E1E': '\u1E1F', '\u1E20': '\u1E21', '\u1E22': '\u1E23', '\u1E24': '\u1E25', '\u1E26': '\u1E27', '\u1E28': '\u1E29', '\u1E2A': '\u1E2B', '\u1E2C': '\u1E2D', '\u1E2E': '\u1E2F', '\u1E30': '\u1E31', '\u1E32': '\u1E33', '\u1E34': '\u1E35', '\u1E36': '\u1E37', '\u1E38': '\u1E39', '\u1E3A': '\u1E3B', '\u1E3C': '\u1E3D', '\u1E3E': '\u1E3F', '\u1E40': '\u1E41', '\u1E42': '\u1E43', '\u1E44': '\u1E45', '\u1E46': '\u1E47', '\u1E48': '\u1E49', '\u1E4A': '\u1E4B', '\u1E4C': '\u1E4D', '\u1E4E': '\u1E4F', '\u1E50': '\u1E51', '\u1E52': '\u1E53', '\u1E54': '\u1E55', '\u1E56': '\u1E57', '\u1E58': '\u1E59', '\u1E5A': '\u1E5B', '\u1E5C': '\u1E5D', '\u1E5E': '\u1E5F', '\u1E60': '\u1E61', '\u1E62': '\u1E63', '\u1E64': '\u1E65', '\u1E66': '\u1E67', '\u1E68': '\u1E69', '\u1E6A': '\u1E6B', '\u1E6C': '\u1E6D', '\u1E6E': '\u1E6F', '\u1E70': '\u1E71', '\u1E72': '\u1E73', '\u1E74': '\u1E75', '\u1E76': '\u1E77', '\u1E78': '\u1E79', '\u1E7A': '\u1E7B', '\u1E7C': '\u1E7D', '\u1E7E': '\u1E7F', '\u1E80': '\u1E81', '\u1E82': '\u1E83', '\u1E84': '\u1E85', '\u1E86': '\u1E87', '\u1E88': '\u1E89', '\u1E8A': '\u1E8B', '\u1E8C': '\u1E8D', '\u1E8E': '\u1E8F', '\u1E90': '\u1E91', '\u1E92': '\u1E93', '\u1E94': '\u1E95', '\u1E9B': '\u1E61', '\u1EA0': '\u1EA1', '\u1EA2': '\u1EA3', '\u1EA4': '\u1EA5', '\u1EA6': '\u1EA7', '\u1EA8': '\u1EA9', '\u1EAA': '\u1EAB', '\u1EAC': '\u1EAD', '\u1EAE': '\u1EAF', '\u1EB0': '\u1EB1', '\u1EB2': '\u1EB3', '\u1EB4': '\u1EB5', '\u1EB6': '\u1EB7', '\u1EB8': '\u1EB9', '\u1EBA': '\u1EBB', '\u1EBC': '\u1EBD', '\u1EBE': '\u1EBF', '\u1EC0': '\u1EC1', '\u1EC2': '\u1EC3', '\u1EC4': '\u1EC5', '\u1EC6': '\u1EC7', '\u1EC8': '\u1EC9', '\u1ECA': '\u1ECB', '\u1ECC': '\u1ECD', '\u1ECE': '\u1ECF', '\u1ED0': '\u1ED1', '\u1ED2': '\u1ED3', '\u1ED4': '\u1ED5', '\u1ED6': '\u1ED7', '\u1ED8': '\u1ED9', '\u1EDA': '\u1EDB', '\u1EDC': '\u1EDD', '\u1EDE': '\u1EDF', '\u1EE0': '\u1EE1', '\u1EE2': '\u1EE3', '\u1EE4': '\u1EE5', '\u1EE6': '\u1EE7', '\u1EE8': '\u1EE9', '\u1EEA': '\u1EEB', '\u1EEC': '\u1EED', '\u1EEE': '\u1EEF', '\u1EF0': '\u1EF1', '\u1EF2': '\u1EF3', '\u1EF4': '\u1EF5', '\u1EF6': '\u1EF7', '\u1EF8': '\u1EF9', '\u1EFA': '\u1EFB', '\u1EFC': '\u1EFD', '\u1EFE': '\u1EFF', '\u1F08': '\u1F00', '\u1F09': '\u1F01', '\u1F0A': '\u1F02', '\u1F0B': '\u1F03', '\u1F0C': '\u1F04', '\u1F0D': '\u1F05', '\u1F0E': '\u1F06', '\u1F0F': '\u1F07', '\u1F18': '\u1F10', '\u1F19': '\u1F11', '\u1F1A': '\u1F12', '\u1F1B': '\u1F13', '\u1F1C': '\u1F14', '\u1F1D': '\u1F15', '\u1F28': '\u1F20', '\u1F29': '\u1F21', '\u1F2A': '\u1F22', '\u1F2B': '\u1F23', '\u1F2C': '\u1F24', '\u1F2D': '\u1F25', '\u1F2E': '\u1F26', '\u1F2F': '\u1F27', '\u1F38': '\u1F30', '\u1F39': '\u1F31', '\u1F3A': '\u1F32', '\u1F3B': '\u1F33', '\u1F3C': '\u1F34', '\u1F3D': '\u1F35', '\u1F3E': '\u1F36', '\u1F3F': '\u1F37', '\u1F48': '\u1F40', '\u1F49': '\u1F41', '\u1F4A': '\u1F42', '\u1F4B': '\u1F43', '\u1F4C': '\u1F44', '\u1F4D': '\u1F45', '\u1F59': '\u1F51', '\u1F5B': '\u1F53', '\u1F5D': '\u1F55', '\u1F5F': '\u1F57', '\u1F68': '\u1F60', '\u1F69': '\u1F61', '\u1F6A': '\u1F62', '\u1F6B': '\u1F63', '\u1F6C': '\u1F64', '\u1F6D': '\u1F65', '\u1F6E': '\u1F66', '\u1F6F': '\u1F67', '\u1FB8': '\u1FB0', '\u1FB9': '\u1FB1', '\u1FBA': '\u1F70', '\u1FBB': '\u1F71', '\u1FBE': '\u03B9', '\u1FC8': '\u1F72', '\u1FC9': '\u1F73', '\u1FCA': '\u1F74', '\u1FCB': '\u1F75', '\u1FD8': '\u1FD0', '\u1FD9': '\u1FD1', '\u1FDA': '\u1F76', '\u1FDB': '\u1F77', '\u1FE8': '\u1FE0', '\u1FE9': '\u1FE1', '\u1FEA': '\u1F7A', '\u1FEB': '\u1F7B', '\u1FEC': '\u1FE5', '\u1FF8': '\u1F78', '\u1FF9': '\u1F79', '\u1FFA': '\u1F7C', '\u1FFB': '\u1F7D', '\u2126': '\u03C9', '\u212A': 'k', '\u212B': '\xE5', '\u2132': '\u214E', '\u2160': '\u2170', '\u2161': '\u2171', '\u2162': '\u2172', '\u2163': '\u2173', '\u2164': '\u2174', '\u2165': '\u2175', '\u2166': '\u2176', '\u2167': '\u2177', '\u2168': '\u2178', '\u2169': '\u2179', '\u216A': '\u217A', '\u216B': '\u217B', '\u216C': '\u217C', '\u216D': '\u217D', '\u216E': '\u217E', '\u216F': '\u217F', '\u2183': '\u2184', '\u24B6': '\u24D0', '\u24B7': '\u24D1', '\u24B8': '\u24D2', '\u24B9': '\u24D3', '\u24BA': '\u24D4', '\u24BB': '\u24D5', '\u24BC': '\u24D6', '\u24BD': '\u24D7', '\u24BE': '\u24D8', '\u24BF': '\u24D9', '\u24C0': '\u24DA', '\u24C1': '\u24DB', '\u24C2': '\u24DC', '\u24C3': '\u24DD', '\u24C4': '\u24DE', '\u24C5': '\u24DF', '\u24C6': '\u24E0', '\u24C7': '\u24E1', '\u24C8': '\u24E2', '\u24C9': '\u24E3', '\u24CA': '\u24E4', '\u24CB': '\u24E5', '\u24CC': '\u24E6', '\u24CD': '\u24E7', '\u24CE': '\u24E8', '\u24CF': '\u24E9', '\u2C00': '\u2C30', '\u2C01': '\u2C31', '\u2C02': '\u2C32', '\u2C03': '\u2C33', '\u2C04': '\u2C34', '\u2C05': '\u2C35', '\u2C06': '\u2C36', '\u2C07': '\u2C37', '\u2C08': '\u2C38', '\u2C09': '\u2C39', '\u2C0A': '\u2C3A', '\u2C0B': '\u2C3B', '\u2C0C': '\u2C3C', '\u2C0D': '\u2C3D', '\u2C0E': '\u2C3E', '\u2C0F': '\u2C3F', '\u2C10': '\u2C40', '\u2C11': '\u2C41', '\u2C12': '\u2C42', '\u2C13': '\u2C43', '\u2C14': '\u2C44', '\u2C15': '\u2C45', '\u2C16': '\u2C46', '\u2C17': '\u2C47', '\u2C18': '\u2C48', '\u2C19': '\u2C49', '\u2C1A': '\u2C4A', '\u2C1B': '\u2C4B', '\u2C1C': '\u2C4C', '\u2C1D': '\u2C4D', '\u2C1E': '\u2C4E', '\u2C1F': '\u2C4F', '\u2C20': '\u2C50', '\u2C21': '\u2C51', '\u2C22': '\u2C52', '\u2C23': '\u2C53', '\u2C24': '\u2C54', '\u2C25': '\u2C55', '\u2C26': '\u2C56', '\u2C27': '\u2C57', '\u2C28': '\u2C58', '\u2C29': '\u2C59', '\u2C2A': '\u2C5A', '\u2C2B': '\u2C5B', '\u2C2C': '\u2C5C', '\u2C2D': '\u2C5D', '\u2C2E': '\u2C5E', '\u2C60': '\u2C61', '\u2C62': '\u026B', '\u2C63': '\u1D7D', '\u2C64': '\u027D', '\u2C67': '\u2C68', '\u2C69': '\u2C6A', '\u2C6B': '\u2C6C', '\u2C6D': '\u0251', '\u2C6E': '\u0271', '\u2C6F': '\u0250', '\u2C70': '\u0252', '\u2C72': '\u2C73', '\u2C75': '\u2C76', '\u2C7E': '\u023F', '\u2C7F': '\u0240', '\u2C80': '\u2C81', '\u2C82': '\u2C83', '\u2C84': '\u2C85', '\u2C86': '\u2C87', '\u2C88': '\u2C89', '\u2C8A': '\u2C8B', '\u2C8C': '\u2C8D', '\u2C8E': '\u2C8F', '\u2C90': '\u2C91', '\u2C92': '\u2C93', '\u2C94': '\u2C95', '\u2C96': '\u2C97', '\u2C98': '\u2C99', '\u2C9A': '\u2C9B', '\u2C9C': '\u2C9D', '\u2C9E': '\u2C9F', '\u2CA0': '\u2CA1', '\u2CA2': '\u2CA3', '\u2CA4': '\u2CA5', '\u2CA6': '\u2CA7', '\u2CA8': '\u2CA9', '\u2CAA': '\u2CAB', '\u2CAC': '\u2CAD', '\u2CAE': '\u2CAF', '\u2CB0': '\u2CB1', '\u2CB2': '\u2CB3', '\u2CB4': '\u2CB5', '\u2CB6': '\u2CB7', '\u2CB8': '\u2CB9', '\u2CBA': '\u2CBB', '\u2CBC': '\u2CBD', '\u2CBE': '\u2CBF', '\u2CC0': '\u2CC1', '\u2CC2': '\u2CC3', '\u2CC4': '\u2CC5', '\u2CC6': '\u2CC7', '\u2CC8': '\u2CC9', '\u2CCA': '\u2CCB', '\u2CCC': '\u2CCD', '\u2CCE': '\u2CCF', '\u2CD0': '\u2CD1', '\u2CD2': '\u2CD3', '\u2CD4': '\u2CD5', '\u2CD6': '\u2CD7', '\u2CD8': '\u2CD9', '\u2CDA': '\u2CDB', '\u2CDC': '\u2CDD', '\u2CDE': '\u2CDF', '\u2CE0': '\u2CE1', '\u2CE2': '\u2CE3', '\u2CEB': '\u2CEC', '\u2CED': '\u2CEE', '\u2CF2': '\u2CF3', '\uA640': '\uA641', '\uA642': '\uA643', '\uA644': '\uA645', '\uA646': '\uA647', '\uA648': '\uA649', '\uA64A': '\uA64B', '\uA64C': '\uA64D', '\uA64E': '\uA64F', '\uA650': '\uA651', '\uA652': '\uA653', '\uA654': '\uA655', '\uA656': '\uA657', '\uA658': '\uA659', '\uA65A': '\uA65B', '\uA65C': '\uA65D', '\uA65E': '\uA65F', '\uA660': '\uA661', '\uA662': '\uA663', '\uA664': '\uA665', '\uA666': '\uA667', '\uA668': '\uA669', '\uA66A': '\uA66B', '\uA66C': '\uA66D', '\uA680': '\uA681', '\uA682': '\uA683', '\uA684': '\uA685', '\uA686': '\uA687', '\uA688': '\uA689', '\uA68A': '\uA68B', '\uA68C': '\uA68D', '\uA68E': '\uA68F', '\uA690': '\uA691', '\uA692': '\uA693', '\uA694': '\uA695', '\uA696': '\uA697', '\uA698': '\uA699', '\uA69A': '\uA69B', '\uA722': '\uA723', '\uA724': '\uA725', '\uA726': '\uA727', '\uA728': '\uA729', '\uA72A': '\uA72B', '\uA72C': '\uA72D', '\uA72E': '\uA72F', '\uA732': '\uA733', '\uA734': '\uA735', '\uA736': '\uA737', '\uA738': '\uA739', '\uA73A': '\uA73B', '\uA73C': '\uA73D', '\uA73E': '\uA73F', '\uA740': '\uA741', '\uA742': '\uA743', '\uA744': '\uA745', '\uA746': '\uA747', '\uA748': '\uA749', '\uA74A': '\uA74B', '\uA74C': '\uA74D', '\uA74E': '\uA74F', '\uA750': '\uA751', '\uA752': '\uA753', '\uA754': '\uA755', '\uA756': '\uA757', '\uA758': '\uA759', '\uA75A': '\uA75B', '\uA75C': '\uA75D', '\uA75E': '\uA75F', '\uA760': '\uA761', '\uA762': '\uA763', '\uA764': '\uA765', '\uA766': '\uA767', '\uA768': '\uA769', '\uA76A': '\uA76B', '\uA76C': '\uA76D', '\uA76E': '\uA76F', '\uA779': '\uA77A', '\uA77B': '\uA77C', '\uA77D': '\u1D79', '\uA77E': '\uA77F', '\uA780': '\uA781', '\uA782': '\uA783', '\uA784': '\uA785', '\uA786': '\uA787', '\uA78B': '\uA78C', '\uA78D': '\u0265', '\uA790': '\uA791', '\uA792': '\uA793', '\uA796': '\uA797', '\uA798': '\uA799', '\uA79A': '\uA79B', '\uA79C': '\uA79D', '\uA79E': '\uA79F', '\uA7A0': '\uA7A1', '\uA7A2': '\uA7A3', '\uA7A4': '\uA7A5', '\uA7A6': '\uA7A7', '\uA7A8': '\uA7A9', '\uA7AA': '\u0266', '\uA7AB': '\u025C', '\uA7AC': '\u0261', '\uA7AD': '\u026C', '\uA7B0': '\u029E', '\uA7B1': '\u0287', '\uFF21': '\uFF41', '\uFF22': '\uFF42', '\uFF23': '\uFF43', '\uFF24': '\uFF44', '\uFF25': '\uFF45', '\uFF26': '\uFF46', '\uFF27': '\uFF47', '\uFF28': '\uFF48', '\uFF29': '\uFF49', '\uFF2A': '\uFF4A', '\uFF2B': '\uFF4B', '\uFF2C': '\uFF4C', '\uFF2D': '\uFF4D', '\uFF2E': '\uFF4E', '\uFF2F': '\uFF4F', '\uFF30': '\uFF50', '\uFF31': '\uFF51', '\uFF32': '\uFF52', '\uFF33': '\uFF53', '\uFF34': '\uFF54', '\uFF35': '\uFF55', '\uFF36': '\uFF56', '\uFF37': '\uFF57', '\uFF38': '\uFF58', '\uFF39': '\uFF59', '\uFF3A': '\uFF5A', '\uD801\uDC00': '\uD801\uDC28', '\uD801\uDC01': '\uD801\uDC29', '\uD801\uDC02': '\uD801\uDC2A', '\uD801\uDC03': '\uD801\uDC2B', '\uD801\uDC04': '\uD801\uDC2C', '\uD801\uDC05': '\uD801\uDC2D', '\uD801\uDC06': '\uD801\uDC2E', '\uD801\uDC07': '\uD801\uDC2F', '\uD801\uDC08': '\uD801\uDC30', '\uD801\uDC09': '\uD801\uDC31', '\uD801\uDC0A': '\uD801\uDC32', '\uD801\uDC0B': '\uD801\uDC33', '\uD801\uDC0C': '\uD801\uDC34', '\uD801\uDC0D': '\uD801\uDC35', '\uD801\uDC0E': '\uD801\uDC36', '\uD801\uDC0F': '\uD801\uDC37', '\uD801\uDC10': '\uD801\uDC38', '\uD801\uDC11': '\uD801\uDC39', '\uD801\uDC12': '\uD801\uDC3A', '\uD801\uDC13': '\uD801\uDC3B', '\uD801\uDC14': '\uD801\uDC3C', '\uD801\uDC15': '\uD801\uDC3D', '\uD801\uDC16': '\uD801\uDC3E', '\uD801\uDC17': '\uD801\uDC3F', '\uD801\uDC18': '\uD801\uDC40', '\uD801\uDC19': '\uD801\uDC41', '\uD801\uDC1A': '\uD801\uDC42', '\uD801\uDC1B': '\uD801\uDC43', '\uD801\uDC1C': '\uD801\uDC44', '\uD801\uDC1D': '\uD801\uDC45', '\uD801\uDC1E': '\uD801\uDC46', '\uD801\uDC1F': '\uD801\uDC47', '\uD801\uDC20': '\uD801\uDC48', '\uD801\uDC21': '\uD801\uDC49', '\uD801\uDC22': '\uD801\uDC4A', '\uD801\uDC23': '\uD801\uDC4B', '\uD801\uDC24': '\uD801\uDC4C', '\uD801\uDC25': '\uD801\uDC4D', '\uD801\uDC26': '\uD801\uDC4E', '\uD801\uDC27': '\uD801\uDC4F', '\uD806\uDCA0': '\uD806\uDCC0', '\uD806\uDCA1': '\uD806\uDCC1', '\uD806\uDCA2': '\uD806\uDCC2', '\uD806\uDCA3': '\uD806\uDCC3', '\uD806\uDCA4': '\uD806\uDCC4', '\uD806\uDCA5': '\uD806\uDCC5', '\uD806\uDCA6': '\uD806\uDCC6', '\uD806\uDCA7': '\uD806\uDCC7', '\uD806\uDCA8': '\uD806\uDCC8', '\uD806\uDCA9': '\uD806\uDCC9', '\uD806\uDCAA': '\uD806\uDCCA', '\uD806\uDCAB': '\uD806\uDCCB', '\uD806\uDCAC': '\uD806\uDCCC', '\uD806\uDCAD': '\uD806\uDCCD', '\uD806\uDCAE': '\uD806\uDCCE', '\uD806\uDCAF': '\uD806\uDCCF', '\uD806\uDCB0': '\uD806\uDCD0', '\uD806\uDCB1': '\uD806\uDCD1', '\uD806\uDCB2': '\uD806\uDCD2', '\uD806\uDCB3': '\uD806\uDCD3', '\uD806\uDCB4': '\uD806\uDCD4', '\uD806\uDCB5': '\uD806\uDCD5', '\uD806\uDCB6': '\uD806\uDCD6', '\uD806\uDCB7': '\uD806\uDCD7', '\uD806\uDCB8': '\uD806\uDCD8', '\uD806\uDCB9': '\uD806\uDCD9', '\uD806\uDCBA': '\uD806\uDCDA', '\uD806\uDCBB': '\uD806\uDCDB', '\uD806\uDCBC': '\uD806\uDCDC', '\uD806\uDCBD': '\uD806\uDCDD', '\uD806\uDCBE': '\uD806\uDCDE', '\uD806\uDCBF': '\uD806\uDCDF', '\xDF': 'ss', '\u0130': 'i\u0307', '\u0149': '\u02BCn', '\u01F0': 'j\u030C', '\u0390': '\u03B9\u0308\u0301', '\u03B0': '\u03C5\u0308\u0301', '\u0587': '\u0565\u0582', '\u1E96': 'h\u0331', '\u1E97': 't\u0308', '\u1E98': 'w\u030A', '\u1E99': 'y\u030A', '\u1E9A': 'a\u02BE', '\u1E9E': 'ss', '\u1F50': '\u03C5\u0313', '\u1F52': '\u03C5\u0313\u0300', '\u1F54': '\u03C5\u0313\u0301', '\u1F56': '\u03C5\u0313\u0342', '\u1F80': '\u1F00\u03B9', '\u1F81': '\u1F01\u03B9', '\u1F82': '\u1F02\u03B9', '\u1F83': '\u1F03\u03B9', '\u1F84': '\u1F04\u03B9', '\u1F85': '\u1F05\u03B9', '\u1F86': '\u1F06\u03B9', '\u1F87': '\u1F07\u03B9', '\u1F88': '\u1F00\u03B9', '\u1F89': '\u1F01\u03B9', '\u1F8A': '\u1F02\u03B9', '\u1F8B': '\u1F03\u03B9', '\u1F8C': '\u1F04\u03B9', '\u1F8D': '\u1F05\u03B9', '\u1F8E': '\u1F06\u03B9', '\u1F8F': '\u1F07\u03B9', '\u1F90': '\u1F20\u03B9', '\u1F91': '\u1F21\u03B9', '\u1F92': '\u1F22\u03B9', '\u1F93': '\u1F23\u03B9', '\u1F94': '\u1F24\u03B9', '\u1F95': '\u1F25\u03B9', '\u1F96': '\u1F26\u03B9', '\u1F97': '\u1F27\u03B9', '\u1F98': '\u1F20\u03B9', '\u1F99': '\u1F21\u03B9', '\u1F9A': '\u1F22\u03B9', '\u1F9B': '\u1F23\u03B9', '\u1F9C': '\u1F24\u03B9', '\u1F9D': '\u1F25\u03B9', '\u1F9E': '\u1F26\u03B9', '\u1F9F': '\u1F27\u03B9', '\u1FA0': '\u1F60\u03B9', '\u1FA1': '\u1F61\u03B9', '\u1FA2': '\u1F62\u03B9', '\u1FA3': '\u1F63\u03B9', '\u1FA4': '\u1F64\u03B9', '\u1FA5': '\u1F65\u03B9', '\u1FA6': '\u1F66\u03B9', '\u1FA7': '\u1F67\u03B9', '\u1FA8': '\u1F60\u03B9', '\u1FA9': '\u1F61\u03B9', '\u1FAA': '\u1F62\u03B9', '\u1FAB': '\u1F63\u03B9', '\u1FAC': '\u1F64\u03B9', '\u1FAD': '\u1F65\u03B9', '\u1FAE': '\u1F66\u03B9', '\u1FAF': '\u1F67\u03B9', '\u1FB2': '\u1F70\u03B9', '\u1FB3': '\u03B1\u03B9', '\u1FB4': '\u03AC\u03B9', '\u1FB6': '\u03B1\u0342', '\u1FB7': '\u03B1\u0342\u03B9', '\u1FBC': '\u03B1\u03B9', '\u1FC2': '\u1F74\u03B9', '\u1FC3': '\u03B7\u03B9', '\u1FC4': '\u03AE\u03B9', '\u1FC6': '\u03B7\u0342', '\u1FC7': '\u03B7\u0342\u03B9', '\u1FCC': '\u03B7\u03B9', '\u1FD2': '\u03B9\u0308\u0300', '\u1FD3': '\u03B9\u0308\u0301', '\u1FD6': '\u03B9\u0342', '\u1FD7': '\u03B9\u0308\u0342', '\u1FE2': '\u03C5\u0308\u0300', '\u1FE3': '\u03C5\u0308\u0301', '\u1FE4': '\u03C1\u0313', '\u1FE6': '\u03C5\u0342', '\u1FE7': '\u03C5\u0308\u0342', '\u1FF2': '\u1F7C\u03B9', '\u1FF3': '\u03C9\u03B9', '\u1FF4': '\u03CE\u03B9', '\u1FF6': '\u03C9\u0342', '\u1FF7': '\u03C9\u0342\u03B9', '\u1FFC': '\u03C9\u03B9', '\uFB00': 'ff', '\uFB01': 'fi', '\uFB02': 'fl', '\uFB03': 'ffi', '\uFB04': 'ffl', '\uFB05': 'st', '\uFB06': 'st', '\uFB13': '\u0574\u0576', '\uFB14': '\u0574\u0565', '\uFB15': '\u0574\u056B', '\uFB16': '\u057E\u0576', '\uFB17': '\u0574\u056D' };

	// Normalize reference label: collapse internal whitespace
	// to single space, remove leading/trailing whitespace, case fold.
	module.exports = function (string) {
	    return string.slice(1, string.length - 1).trim().replace(regex, function ($0) {
	        // Note: there is no need to check `hasOwnProperty($0)` here.
	        // If character not found in lookup table, it must be whitespace.
	        return map[$0] || ' ';
	    });
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var escapeXml = __webpack_require__(1).escapeXml;

	// Helper function to produce an XML tag.
	var tag = function tag(name, attrs, selfclosing) {
	    var result = '<' + name;
	    if (attrs && attrs.length > 0) {
	        var i = 0;
	        var attrib;
	        while ((attrib = attrs[i]) !== undefined) {
	            result += ' ' + attrib[0] + '="' + attrib[1] + '"';
	            i++;
	        }
	    }
	    if (selfclosing) {
	        result += ' /';
	    }

	    result += '>';
	    return result;
	};

	var reXMLTag = /\<[^>]*\>/;

	var toTagName = function toTagName(s) {
	    return s.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
	};

	var renderNodes = function renderNodes(block) {

	    var attrs;
	    var tagname;
	    var walker = block.walker();
	    var event, node, entering;
	    var buffer = "";
	    var lastOut = "\n";
	    var disableTags = 0;
	    var indentLevel = 0;
	    var indent = '  ';
	    var container;
	    var selfClosing;
	    var nodetype;

	    var out = function out(s) {
	        if (disableTags > 0) {
	            buffer += s.replace(reXMLTag, '');
	        } else {
	            buffer += s;
	        }
	        lastOut = s;
	    };
	    var esc = this.escape;
	    var cr = function cr() {
	        if (lastOut !== '\n') {
	            buffer += '\n';
	            lastOut = '\n';
	            for (var i = indentLevel; i > 0; i--) {
	                buffer += indent;
	            }
	        }
	    };

	    var options = this.options;

	    if (options.time) {
	        console.time("rendering");
	    }

	    buffer += '<?xml version="1.0" encoding="UTF-8"?>\n';
	    buffer += '<!DOCTYPE CommonMark SYSTEM "CommonMark.dtd">\n';

	    while (event = walker.next()) {
	        entering = event.entering;
	        node = event.node;
	        nodetype = node.type;

	        container = node.isContainer;
	        selfClosing = nodetype === 'ThematicBreak' || nodetype === 'Hardbreak' || nodetype === 'Softbreak';
	        tagname = toTagName(nodetype);

	        if (entering) {

	            attrs = [];

	            switch (nodetype) {
	                case 'Document':
	                    attrs.push(['xmlns', 'http://commonmark.org/xml/1.0']);
	                    break;
	                case 'List':
	                    if (node.listType !== null) {
	                        attrs.push(['type', node.listType.toLowerCase()]);
	                    }
	                    if (node.listStart !== null) {
	                        attrs.push(['start', String(node.listStart)]);
	                    }
	                    if (node.listTight !== null) {
	                        attrs.push(['tight', node.listTight ? 'true' : 'false']);
	                    }
	                    var delim = node.listDelimiter;
	                    if (delim !== null) {
	                        var delimword = '';
	                        if (delim === '.') {
	                            delimword = 'period';
	                        } else {
	                            delimword = 'paren';
	                        }
	                        attrs.push(['delimiter', delimword]);
	                    }
	                    break;
	                case 'CodeBlock':
	                    if (node.info) {
	                        attrs.push(['info', node.info]);
	                    }
	                    break;
	                case 'Heading':
	                    attrs.push(['level', String(node.level)]);
	                    break;
	                case 'Link':
	                case 'Image':
	                    attrs.push(['destination', node.destination]);
	                    attrs.push(['title', node.title]);
	                    break;
	                case 'CustomInline':
	                case 'CustomBlock':
	                    attrs.push(['on_enter', node.onEnter]);
	                    attrs.push(['on_exit', node.onExit]);
	                    break;
	                default:
	                    break;
	            }
	            if (options.sourcepos) {
	                var pos = node.sourcepos;
	                if (pos) {
	                    attrs.push(['sourcepos', String(pos[0][0]) + ':' + String(pos[0][1]) + '-' + String(pos[1][0]) + ':' + String(pos[1][1])]);
	                }
	            }

	            cr();
	            out(tag(tagname, attrs, selfClosing));
	            if (container) {
	                indentLevel += 1;
	            } else if (!container && !selfClosing) {
	                var lit = node.literal;
	                if (lit) {
	                    out(esc(lit));
	                }
	                out(tag('/' + tagname));
	            }
	        } else {
	            indentLevel -= 1;
	            cr();
	            out(tag('/' + tagname));
	        }
	    }
	    if (options.time) {
	        console.timeEnd("rendering");
	    }
	    buffer += '\n';
	    return buffer;
	};

	// The XmlRenderer object.
	function XmlRenderer(options) {
	    return {
	        // default options:
	        softbreak: '\n', // by default, soft breaks are rendered as newlines in HTML
	        // set to "<br />" to make them hard breaks
	        // set to " " if you want to ignore line wrapping in source
	        escape: escapeXml,
	        options: options || {},
	        render: renderNodes
	    };
	}

	module.exports = XmlRenderer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var entityMap = __webpack_require__(5),
	    legacyMap = __webpack_require__(35),
	    xmlMap = __webpack_require__(6),
	    decodeCodePoint = __webpack_require__(20);

	var decodeXMLStrict = getStrictDecoder(xmlMap),
	    decodeHTMLStrict = getStrictDecoder(entityMap);

	function getStrictDecoder(map) {
		var keys = Object.keys(map).join("|"),
		    replace = getReplacer(map);

		keys += "|#[xX][\\da-fA-F]+|#\\d+";

		var re = new RegExp("&(?:" + keys + ");", "g");

		return function (str) {
			return String(str).replace(re, replace);
		};
	}

	var decodeHTML = function () {
		var legacy = Object.keys(legacyMap).sort(sorter);

		var keys = Object.keys(entityMap).sort(sorter);

		for (var i = 0, j = 0; i < keys.length; i++) {
			if (legacy[j] === keys[i]) {
				keys[i] += ";?";
				j++;
			} else {
				keys[i] += ";";
			}
		}

		var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
		    replace = getReplacer(entityMap);

		function replacer(str) {
			if (str.substr(-1) !== ";") str += ";";
			return replace(str);
		}

		//TODO consider creating a merged map
		return function (str) {
			return String(str).replace(re, replacer);
		};
	}();

	function sorter(a, b) {
		return a < b ? 1 : -1;
	}

	function getReplacer(map) {
		return function replace(str) {
			if (str.charAt(1) === "#") {
				if (str.charAt(2) === "X" || str.charAt(2) === "x") {
					return decodeCodePoint(parseInt(str.substr(3), 16));
				}
				return decodeCodePoint(parseInt(str.substr(2), 10));
			}
			return map[str.slice(1, -1)];
		};
	}

	module.exports = {
		XML: decodeXMLStrict,
		HTML: decodeHTML,
		HTMLStrict: decodeHTMLStrict
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var decodeMap = __webpack_require__(34);

	module.exports = decodeCodePoint;

	// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
	function decodeCodePoint(codePoint) {

		if (codePoint >= 0xD800 && codePoint <= 0xDFFF || codePoint > 0x10FFFF) {
			return "\uFFFD";
		}

		if (codePoint in decodeMap) {
			codePoint = decodeMap[codePoint];
		}

		var output = "";

		if (codePoint > 0xFFFF) {
			codePoint -= 0x10000;
			output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
			codePoint = 0xDC00 | codePoint & 0x3FF;
		}

		output += String.fromCharCode(codePoint);
		return output;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var inverseXML = getInverseObj(__webpack_require__(6)),
	    xmlReplacer = getInverseReplacer(inverseXML);

	exports.XML = getInverse(inverseXML, xmlReplacer);

	var inverseHTML = getInverseObj(__webpack_require__(5)),
	    htmlReplacer = getInverseReplacer(inverseHTML);

	exports.HTML = getInverse(inverseHTML, htmlReplacer);

	function getInverseObj(obj) {
		return Object.keys(obj).sort().reduce(function (inverse, name) {
			inverse[obj[name]] = "&" + name + ";";
			return inverse;
		}, {});
	}

	function getInverseReplacer(inverse) {
		var single = [],
		    multiple = [];

		Object.keys(inverse).forEach(function (k) {
			if (k.length === 1) {
				single.push("\\" + k);
			} else {
				multiple.push(k);
			}
		});

		//TODO add ranges
		multiple.unshift("[" + single.join("") + "]");

		return new RegExp(multiple.join("|"), "g");
	}

	var re_nonASCII = /[^\0-\x7F]/g,
	    re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

	function singleCharReplacer(c) {
		return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
	}

	function astralReplacer(c) {
		// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
		var high = c.charCodeAt(0);
		var low = c.charCodeAt(1);
		var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
		return "&#x" + codePoint.toString(16).toUpperCase() + ";";
	}

	function getInverse(inverse, re) {
		function func(name) {
			return inverse[name];
		}

		return function (data) {
			return data.replace(re, func).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
		};
	}

	var re_xmlChars = getInverseReplacer(inverseXML);

	function escapeXML(data) {
		return data.replace(re_xmlChars, singleCharReplacer).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
	}

	exports.escape = escapeXML;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
	    object[key] = value;
	  }
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function (object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
	  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assign({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3 }
	 */
	var assign = createAssigner(function (object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = assign;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;

/***/ },
/* 25 */
/***/ function(module, exports) {

	
	'use strict';

	/* eslint-disable no-bitwise */

	var decodeCache = {};

	function getDecodeCache(exclude) {
	  var i,
	      ch,
	      cache = decodeCache[exclude];
	  if (cache) {
	    return cache;
	  }

	  cache = decodeCache[exclude] = [];

	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);
	    cache.push(ch);
	  }

	  for (i = 0; i < exclude.length; i++) {
	    ch = exclude.charCodeAt(i);
	    cache[ch] = '%' + ('0' + ch.toString(16).toUpperCase()).slice(-2);
	  }

	  return cache;
	}

	// Decode percent-encoded string.
	//
	function decode(string, exclude) {
	  var cache;

	  if (typeof exclude !== 'string') {
	    exclude = decode.defaultChars;
	  }

	  cache = getDecodeCache(exclude);

	  return string.replace(/(%[a-f0-9]{2})+/gi, function (seq) {
	    var i,
	        l,
	        b1,
	        b2,
	        b3,
	        b4,
	        chr,
	        result = '';

	    for (i = 0, l = seq.length; i < l; i += 3) {
	      b1 = parseInt(seq.slice(i + 1, i + 3), 16);

	      if (b1 < 0x80) {
	        result += cache[b1];
	        continue;
	      }

	      if ((b1 & 0xE0) === 0xC0 && i + 3 < l) {
	        // 110xxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);

	        if ((b2 & 0xC0) === 0x80) {
	          chr = b1 << 6 & 0x7C0 | b2 & 0x3F;

	          if (chr < 0x80) {
	            result += '\uFFFD\uFFFD';
	          } else {
	            result += String.fromCharCode(chr);
	          }

	          i += 3;
	          continue;
	        }
	      }

	      if ((b1 & 0xF0) === 0xE0 && i + 6 < l) {
	        // 1110xxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);

	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
	          chr = b1 << 12 & 0xF000 | b2 << 6 & 0xFC0 | b3 & 0x3F;

	          if (chr < 0x800 || chr >= 0xD800 && chr <= 0xDFFF) {
	            result += '\uFFFD\uFFFD\uFFFD';
	          } else {
	            result += String.fromCharCode(chr);
	          }

	          i += 6;
	          continue;
	        }
	      }

	      if ((b1 & 0xF8) === 0xF0 && i + 9 < l) {
	        // 111110xx 10xxxxxx 10xxxxxx 10xxxxxx
	        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
	        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
	        b4 = parseInt(seq.slice(i + 10, i + 12), 16);

	        if ((b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80 && (b4 & 0xC0) === 0x80) {
	          chr = b1 << 18 & 0x1C0000 | b2 << 12 & 0x3F000 | b3 << 6 & 0xFC0 | b4 & 0x3F;

	          if (chr < 0x10000 || chr > 0x10FFFF) {
	            result += '\uFFFD\uFFFD\uFFFD\uFFFD';
	          } else {
	            chr -= 0x10000;
	            result += String.fromCharCode(0xD800 + (chr >> 10), 0xDC00 + (chr & 0x3FF));
	          }

	          i += 9;
	          continue;
	        }
	      }

	      result += '\uFFFD';
	    }

	    return result;
	  });
	}

	decode.defaultChars = ';/?:@&=+$,#';
	decode.componentChars = '';

	module.exports = decode;

/***/ },
/* 26 */
/***/ function(module, exports) {

	
	'use strict';

	var encodeCache = {};

	// Create a lookup array where anything but characters in `chars` string
	// and alphanumeric chars is percent-encoded.
	//
	function getEncodeCache(exclude) {
	  var i,
	      ch,
	      cache = encodeCache[exclude];
	  if (cache) {
	    return cache;
	  }

	  cache = encodeCache[exclude] = [];

	  for (i = 0; i < 128; i++) {
	    ch = String.fromCharCode(i);

	    if (/^[0-9a-z]$/i.test(ch)) {
	      // always allow unencoded alphanumeric characters
	      cache.push(ch);
	    } else {
	      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
	    }
	  }

	  for (i = 0; i < exclude.length; i++) {
	    cache[exclude.charCodeAt(i)] = exclude[i];
	  }

	  return cache;
	}

	// Encode unsafe characters with percent-encoding, skipping already
	// encoded sequences.
	//
	//  - string       - string to encode
	//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
	//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
	//
	function encode(string, exclude, keepEscaped) {
	  var i,
	      l,
	      code,
	      nextCode,
	      cache,
	      result = '';

	  if (typeof exclude !== 'string') {
	    // encode(string, keepEscaped)
	    keepEscaped = exclude;
	    exclude = encode.defaultChars;
	  }

	  if (typeof keepEscaped === 'undefined') {
	    keepEscaped = true;
	  }

	  cache = getEncodeCache(exclude);

	  for (i = 0, l = string.length; i < l; i++) {
	    code = string.charCodeAt(i);

	    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
	      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
	        result += string.slice(i, i + 3);
	        i += 2;
	        continue;
	      }
	    }

	    if (code < 128) {
	      result += cache[code];
	      continue;
	    }

	    if (code >= 0xD800 && code <= 0xDFFF) {
	      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
	        nextCode = string.charCodeAt(i + 1);
	        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
	          result += encodeURIComponent(string[i] + string[i + 1]);
	          i++;
	          continue;
	        }
	      }
	      result += '%EF%BF%BD';
	      continue;
	    }

	    result += encodeURIComponent(string[i]);
	  }

	  return result;
	}

	encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
	encode.componentChars = "-_.!~*'()";

	module.exports = encode;

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	/*!
	 * pascalcase <https://github.com/jonschlinkert/pascalcase>
	 *
	 * Copyright (c) 2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */

	function pascalcase(str) {
	  if (typeof str !== 'string') {
	    throw new TypeError('expected a string.');
	  }
	  str = str.replace(/([A-Z])/g, ' $1');
	  if (str.length === 1) {
	    return str.toUpperCase();
	  }
	  str = str.replace(/^[\W_]+|[\W_]+$/g, '').toLowerCase();
	  str = str.charAt(0).toUpperCase() + str.slice(1);
	  return str.replace(/[\W_]+(\w|$)/g, function (_, ch) {
	    return ch.toUpperCase();
	  });
	}

	module.exports = pascalcase;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(29);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var shallowCompare = __webpack_require__(30);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 *
	 * See https://facebook.github.io/react/docs/pure-render-mixin.html
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var shallowEqual = __webpack_require__(22);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	/*! http://mths.be/repeat v0.2.0 by @mathias */
	if (!String.prototype.repeat) {
		(function () {
			'use strict'; // needed to support `apply`/`call` with `undefined`/`null`

			var defineProperty = function () {
				// IE 8 only supports `Object.defineProperty` on DOM elements
				try {
					var object = {};
					var $defineProperty = Object.defineProperty;
					var result = $defineProperty(object, object, object) && $defineProperty;
				} catch (error) {}
				return result;
			}();
			var repeat = function repeat(count) {
				if (this == null) {
					throw TypeError();
				}
				var string = String(this);
				// `ToInteger`
				var n = count ? Number(count) : 0;
				if (n != n) {
					// better `isNaN`
					n = 0;
				}
				// Account for out-of-bounds indices
				if (n < 0 || n == Infinity) {
					throw RangeError();
				}
				var result = '';
				while (n) {
					if (n % 2 == 1) {
						result += string;
					}
					if (n > 1) {
						string += string;
					}
					n >>= 1;
				}
				return result;
			};
			if (defineProperty) {
				defineProperty(String.prototype, 'repeat', {
					'value': repeat,
					'configurable': true,
					'writable': true
				});
			} else {
				String.prototype.repeat = repeat;
			}
		})();
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	/*
	Copyright (c) 2015, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.

	Authors: Nera Liu <neraliu@yahoo-inc.com>
	         Adonis Fung <adon@yahoo-inc.com>
	         Albert Yu <albertyu@yahoo-inc.com>
	*/
	/*jshint node: true */

	exports._getPrivFilters = function () {

	    var LT = /</g,
	        QUOT = /"/g,
	        SQUOT = /'/g,
	        AMP = /&/g,
	        NULL = /\x00/g,
	        SPECIAL_ATTR_VALUE_UNQUOTED_CHARS = /(?:^$|[\x00\x09-\x0D "'`=<>])/g,
	        SPECIAL_HTML_CHARS = /[&<>"'`]/g,
	        SPECIAL_COMMENT_CHARS = /(?:\x00|^-*!?>|--!?>|--?!?$|\]>|\]$)/g;

	    // CSS sensitive chars: ()"'/,!*@{}:;
	    // By CSS: (Tab|NewLine|colon|semi|lpar|rpar|apos|sol|comma|excl|ast|midast);|(quot|QUOT)
	    // By URI_PROTOCOL: (Tab|NewLine);
	    var SENSITIVE_HTML_ENTITIES = /&(?:#([xX][0-9A-Fa-f]+|\d+);?|(Tab|NewLine|colon|semi|lpar|rpar|apos|sol|comma|excl|ast|midast|ensp|emsp|thinsp);|(nbsp|amp|AMP|lt|LT|gt|GT|quot|QUOT);?)/g,
	        SENSITIVE_NAMED_REF_MAP = { Tab: '\t', NewLine: '\n', colon: ':', semi: ';', lpar: '(', rpar: ')', apos: '\'', sol: '/', comma: ',', excl: '!', ast: '*', midast: '*', ensp: '\u2002', emsp: '\u2003', thinsp: '\u2009', nbsp: '\xA0', amp: '&', lt: '<', gt: '>', quot: '"', QUOT: '"' };

	    // var CSS_VALID_VALUE = 
	    //     /^(?:
	    //     (?!-*expression)#?[-\w]+
	    //     |[+-]?(?:\d+|\d*\.\d+)(?:em|ex|ch|rem|px|mm|cm|in|pt|pc|%|vh|vw|vmin|vmax)?
	    //     |!important
	    //     | //empty
	    //     )$/i;
	    var CSS_VALID_VALUE = /^(?:(?!-*expression)#?[-\w]+|[+-]?(?:\d+|\d*\.\d+)(?:r?em|ex|ch|cm|mm|in|px|pt|pc|%|vh|vw|vmin|vmax)?|!important|)$/i,

	    // TODO: prevent double css escaping by not encoding \ again, but this may require CSS decoding
	    // \x7F and \x01-\x1F less \x09 are for Safari 5.0, added []{}/* for unbalanced quote
	    CSS_DOUBLE_QUOTED_CHARS = /[\x00-\x1F\x7F\[\]{}\\"]/g,
	        CSS_SINGLE_QUOTED_CHARS = /[\x00-\x1F\x7F\[\]{}\\']/g,

	    // (, \u207D and \u208D can be used in background: 'url(...)' in IE, assumed all \ chars are encoded by QUOTED_CHARS, and null is already replaced with \uFFFD
	    // otherwise, use this CSS_BLACKLIST instead (enhance it with url matching): /(?:\\?\(|[\u207D\u208D]|\\0{0,4}28 ?|\\0{0,2}20[78][Dd] ?)+/g
	    CSS_BLACKLIST = /url[\(\u207D\u208D]+/g,

	    // this assumes encodeURI() and encodeURIComponent() has escaped 1-32, 127 for IE8
	    CSS_UNQUOTED_URL = /['\(\)]/g; // " \ treated by encodeURI()

	    // Given a full URI, need to support "[" ( IPv6address ) "]" in URI as per RFC3986
	    // Reference: https://tools.ietf.org/html/rfc3986
	    var URL_IPV6 = /\/\/%5[Bb]([A-Fa-f0-9:]+)%5[Dd]/;

	    // Reference: http://shazzer.co.uk/database/All/characters-allowd-in-html-entities
	    // Reference: http://shazzer.co.uk/vector/Characters-allowed-after-ampersand-in-named-character-references
	    // Reference: http://shazzer.co.uk/database/All/Characters-before-javascript-uri
	    // Reference: http://shazzer.co.uk/database/All/Characters-after-javascript-uri
	    // Reference: https://html.spec.whatwg.org/multipage/syntax.html#consume-a-character-reference
	    // Reference for named characters: https://html.spec.whatwg.org/multipage/entities.json
	    var URI_BLACKLIST_PROTOCOLS = { 'javascript': 1, 'data': 1, 'vbscript': 1, 'mhtml': 1, 'x-schema': 1 },
	        URI_PROTOCOL_COLON = /(?::|&#[xX]0*3[aA];?|&#0*58;?|&colon;)/,
	        URI_PROTOCOL_WHITESPACES = /(?:^[\x00-\x20]+|[\t\n\r\x00]+)/g,
	        URI_PROTOCOL_NAMED_REF_MAP = { Tab: '\t', NewLine: '\n' };

	    var x,
	        strReplace = function strReplace(s, regexp, callback) {
	        return s === undefined ? 'undefined' : s === null ? 'null' : s.toString().replace(regexp, callback);
	    },
	        fromCodePoint = String.fromCodePoint || function (codePoint) {
	        if (arguments.length === 0) {
	            return '';
	        }
	        if (codePoint <= 0xFFFF) {
	            // BMP code point
	            return String.fromCharCode(codePoint);
	        }

	        // Astral code point; split in surrogate halves
	        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	        codePoint -= 0x10000;
	        return String.fromCharCode((codePoint >> 10) + 0xD800, codePoint % 0x400 + 0xDC00);
	    };

	    function getProtocol(str) {
	        var s = str.split(URI_PROTOCOL_COLON, 2);
	        // str.length !== s[0].length is for older IE (e.g., v8), where delimeter residing at last will result in length equals 1, but not 2
	        return s[0] && (s.length === 2 || str.length !== s[0].length) ? s[0] : null;
	    }

	    function htmlDecode(s, namedRefMap, reNamedRef, skipReplacement) {

	        namedRefMap = namedRefMap || SENSITIVE_NAMED_REF_MAP;
	        reNamedRef = reNamedRef || SENSITIVE_HTML_ENTITIES;

	        function regExpFunction(m, num, named, named1) {
	            if (num) {
	                num = Number(num[0] <= '9' ? num : '0' + num);
	                // switch(num) {
	                //     case 0x80: return '\u20AC';  // EURO SIGN (€)
	                //     case 0x82: return '\u201A';  // SINGLE LOW-9 QUOTATION MARK (‚)
	                //     case 0x83: return '\u0192';  // LATIN SMALL LETTER F WITH HOOK (ƒ)
	                //     case 0x84: return '\u201E';  // DOUBLE LOW-9 QUOTATION MARK („)
	                //     case 0x85: return '\u2026';  // HORIZONTAL ELLIPSIS (…)
	                //     case 0x86: return '\u2020';  // DAGGER (†)
	                //     case 0x87: return '\u2021';  // DOUBLE DAGGER (‡)
	                //     case 0x88: return '\u02C6';  // MODIFIER LETTER CIRCUMFLEX ACCENT (ˆ)
	                //     case 0x89: return '\u2030';  // PER MILLE SIGN (‰)
	                //     case 0x8A: return '\u0160';  // LATIN CAPITAL LETTER S WITH CARON (Š)
	                //     case 0x8B: return '\u2039';  // SINGLE LEFT-POINTING ANGLE QUOTATION MARK (‹)
	                //     case 0x8C: return '\u0152';  // LATIN CAPITAL LIGATURE OE (Œ)
	                //     case 0x8E: return '\u017D';  // LATIN CAPITAL LETTER Z WITH CARON (Ž)
	                //     case 0x91: return '\u2018';  // LEFT SINGLE QUOTATION MARK (‘)
	                //     case 0x92: return '\u2019';  // RIGHT SINGLE QUOTATION MARK (’)
	                //     case 0x93: return '\u201C';  // LEFT DOUBLE QUOTATION MARK (“)
	                //     case 0x94: return '\u201D';  // RIGHT DOUBLE QUOTATION MARK (”)
	                //     case 0x95: return '\u2022';  // BULLET (•)
	                //     case 0x96: return '\u2013';  // EN DASH (–)
	                //     case 0x97: return '\u2014';  // EM DASH (—)
	                //     case 0x98: return '\u02DC';  // SMALL TILDE (˜)
	                //     case 0x99: return '\u2122';  // TRADE MARK SIGN (™)
	                //     case 0x9A: return '\u0161';  // LATIN SMALL LETTER S WITH CARON (š)
	                //     case 0x9B: return '\u203A';  // SINGLE RIGHT-POINTING ANGLE QUOTATION MARK (›)
	                //     case 0x9C: return '\u0153';  // LATIN SMALL LIGATURE OE (œ)
	                //     case 0x9E: return '\u017E';  // LATIN SMALL LETTER Z WITH CARON (ž)
	                //     case 0x9F: return '\u0178';  // LATIN CAPITAL LETTER Y WITH DIAERESIS (Ÿ)
	                // }
	                // // num >= 0xD800 && num <= 0xDFFF, and 0x0D is separately handled, as it doesn't fall into the range of x.pec()
	                // return (num >= 0xD800 && num <= 0xDFFF) || num === 0x0D ? '\uFFFD' : x.frCoPt(num);

	                return skipReplacement ? fromCodePoint(num) : num === 0x80 ? '\u20AC' // EURO SIGN (€)
	                : num === 0x82 ? '\u201A' // SINGLE LOW-9 QUOTATION MARK (‚)
	                : num === 0x83 ? '\u0192' // LATIN SMALL LETTER F WITH HOOK (ƒ)
	                : num === 0x84 ? '\u201E' // DOUBLE LOW-9 QUOTATION MARK („)
	                : num === 0x85 ? '\u2026' // HORIZONTAL ELLIPSIS (…)
	                : num === 0x86 ? '\u2020' // DAGGER (†)
	                : num === 0x87 ? '\u2021' // DOUBLE DAGGER (‡)
	                : num === 0x88 ? '\u02C6' // MODIFIER LETTER CIRCUMFLEX ACCENT (ˆ)
	                : num === 0x89 ? '\u2030' // PER MILLE SIGN (‰)
	                : num === 0x8A ? '\u0160' // LATIN CAPITAL LETTER S WITH CARON (Š)
	                : num === 0x8B ? '\u2039' // SINGLE LEFT-POINTING ANGLE QUOTATION MARK (‹)
	                : num === 0x8C ? '\u0152' // LATIN CAPITAL LIGATURE OE (Œ)
	                : num === 0x8E ? '\u017D' // LATIN CAPITAL LETTER Z WITH CARON (Ž)
	                : num === 0x91 ? '\u2018' // LEFT SINGLE QUOTATION MARK (‘)
	                : num === 0x92 ? '\u2019' // RIGHT SINGLE QUOTATION MARK (’)
	                : num === 0x93 ? '\u201C' // LEFT DOUBLE QUOTATION MARK (“)
	                : num === 0x94 ? '\u201D' // RIGHT DOUBLE QUOTATION MARK (”)
	                : num === 0x95 ? '\u2022' // BULLET (•)
	                : num === 0x96 ? '\u2013' // EN DASH (–)
	                : num === 0x97 ? '\u2014' // EM DASH (—)
	                : num === 0x98 ? '\u02DC' // SMALL TILDE (˜)
	                : num === 0x99 ? '\u2122' // TRADE MARK SIGN (™)
	                : num === 0x9A ? '\u0161' // LATIN SMALL LETTER S WITH CARON (š)
	                : num === 0x9B ? '\u203A' // SINGLE RIGHT-POINTING ANGLE QUOTATION MARK (›)
	                : num === 0x9C ? '\u0153' // LATIN SMALL LIGATURE OE (œ)
	                : num === 0x9E ? '\u017E' // LATIN SMALL LETTER Z WITH CARON (ž)
	                : num === 0x9F ? '\u0178' // LATIN CAPITAL LETTER Y WITH DIAERESIS (Ÿ)
	                : num >= 0xD800 && num <= 0xDFFF || num === 0x0D ? '\uFFFD' : x.frCoPt(num);
	            }
	            return namedRefMap[named || named1] || m;
	        }

	        return s === undefined ? 'undefined' : s === null ? 'null' : s.toString().replace(NULL, '\uFFFD').replace(reNamedRef, regExpFunction);
	    }

	    function cssEncode(chr) {
	        // space after \\HEX is needed by spec
	        return '\\' + chr.charCodeAt(0).toString(16).toLowerCase() + ' ';
	    }
	    function cssBlacklist(s) {
	        return s.replace(CSS_BLACKLIST, function (m) {
	            return '-x-' + m;
	        });
	    }
	    function cssUrl(s) {
	        // encodeURI() in yufull() will throw error for use of the CSS_UNSUPPORTED_CODE_POINT (i.e., [\uD800-\uDFFF])
	        s = x.yufull(htmlDecode(s));
	        var protocol = getProtocol(s);

	        // prefix ## for blacklisted protocols
	        // here .replace(URI_PROTOCOL_WHITESPACES, '') is not needed since yufull has already percent-encoded the whitespaces
	        return protocol && URI_BLACKLIST_PROTOCOLS[protocol.toLowerCase()] ? '##' + s : s;
	    }

	    return x = {
	        // turn invalid codePoints and that of non-characters to \uFFFD, and then fromCodePoint()
	        frCoPt: function frCoPt(num) {
	            return num === undefined || num === null ? '' : !isFinite(num = Number(num)) || // `NaN`, `+Infinity`, or `-Infinity`
	            num <= 0 || // not a valid Unicode code point
	            num > 0x10FFFF || // not a valid Unicode code point
	            // Math.floor(num) != num || 

	            num >= 0x01 && num <= 0x08 || num >= 0x0E && num <= 0x1F || num >= 0x7F && num <= 0x9F || num >= 0xFDD0 && num <= 0xFDEF || num === 0x0B || (num & 0xFFFF) === 0xFFFF || (num & 0xFFFF) === 0xFFFE ? '\uFFFD' : fromCodePoint(num);
	        },
	        d: htmlDecode,
	        /*
	         * @param {string} s - An untrusted uri input
	         * @returns {string} s - null if relative url, otherwise the protocol with whitespaces stripped and lower-cased
	         */
	        yup: function yup(s) {
	            s = getProtocol(s.replace(NULL, ''));
	            // URI_PROTOCOL_WHITESPACES is required for left trim and remove interim whitespaces
	            return s ? htmlDecode(s, URI_PROTOCOL_NAMED_REF_MAP, null, true).replace(URI_PROTOCOL_WHITESPACES, '').toLowerCase() : null;
	        },

	        /*
	         * @deprecated
	         * @param {string} s - An untrusted user input
	         * @returns {string} s - The original user input with & < > " ' ` encoded respectively as &amp; &lt; &gt; &quot; &#39; and &#96;.
	         *
	         */
	        y: function y(s) {
	            return strReplace(s, SPECIAL_HTML_CHARS, function (m) {
	                return m === '&' ? '&amp;' : m === '<' ? '&lt;' : m === '>' ? '&gt;' : m === '"' ? '&quot;' : m === "'" ? '&#39;' : /*m === '`'*/'&#96;'; // in hex: 60
	            });
	        },

	        // This filter is meant to introduce double-encoding, and should be used with extra care.
	        ya: function ya(s) {
	            return strReplace(s, AMP, '&amp;');
	        },

	        // FOR DETAILS, refer to inHTMLData()
	        // Reference: https://html.spec.whatwg.org/multipage/syntax.html#data-state
	        yd: function yd(s) {
	            return strReplace(s, LT, '&lt;');
	        },

	        // FOR DETAILS, refer to inHTMLComment()
	        // All NULL characters in s are first replaced with \uFFFD.
	        // If s contains -->, --!>, or starts with -*>, insert a space right before > to stop state breaking at <!--{{{yc s}}}-->
	        // If s ends with --!, --, or -, append a space to stop collaborative state breaking at {{{yc s}}}>, {{{yc s}}}!>, {{{yc s}}}-!>, {{{yc s}}}->
	        // Reference: https://html.spec.whatwg.org/multipage/syntax.html#comment-state
	        // Reference: http://shazzer.co.uk/vector/Characters-that-close-a-HTML-comment-3
	        // Reference: http://shazzer.co.uk/vector/Characters-that-close-a-HTML-comment
	        // Reference: http://shazzer.co.uk/vector/Characters-that-close-a-HTML-comment-0021
	        // If s contains ]> or ends with ], append a space after ] is verified in IE to stop IE conditional comments.
	        // Reference: http://msdn.microsoft.com/en-us/library/ms537512%28v=vs.85%29.aspx
	        // We do not care --\s>, which can possibly be intepreted as a valid close comment tag in very old browsers (e.g., firefox 3.6), as specified in the html4 spec
	        // Reference: http://www.w3.org/TR/html401/intro/sgmltut.html#h-3.2.4
	        yc: function yc(s) {
	            return strReplace(s, SPECIAL_COMMENT_CHARS, function (m) {
	                return m === '\x00' ? '\uFFFD' : m === '--!' || m === '--' || m === '-' || m === ']' ? m + ' ' : /*
	                                                                                                                 :  m === ']>'   ? '] >'
	                                                                                                                 :  m === '-->'  ? '-- >'
	                                                                                                                 :  m === '--!>' ? '--! >'
	                                                                                                                 : /-*!?>/.test(m) ? */m.slice(0, -1) + ' >';
	            });
	        },

	        // FOR DETAILS, refer to inDoubleQuotedAttr()
	        // Reference: https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(double-quoted)-state
	        yavd: function yavd(s) {
	            return strReplace(s, QUOT, '&quot;');
	        },

	        // FOR DETAILS, refer to inSingleQuotedAttr()
	        // Reference: https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(single-quoted)-state
	        yavs: function yavs(s) {
	            return strReplace(s, SQUOT, '&#39;');
	        },

	        // FOR DETAILS, refer to inUnQuotedAttr()
	        // PART A.
	        // if s contains any state breaking chars (\t, \n, \v, \f, \r, space, and >),
	        // they are escaped and encoded into their equivalent HTML entity representations. 
	        // Reference: http://shazzer.co.uk/database/All/Characters-which-break-attributes-without-quotes
	        // Reference: https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(unquoted)-state
	        //
	        // PART B. 
	        // if s starts with ', " or `, encode it resp. as &#39;, &quot;, or &#96; to 
	        // enforce the attr value (unquoted) state
	        // Reference: https://html.spec.whatwg.org/multipage/syntax.html#before-attribute-value-state
	        // Reference: http://shazzer.co.uk/vector/Characters-allowed-attribute-quote
	        // 
	        // PART C.
	        // Inject a \uFFFD character if an empty or all null string is encountered in 
	        // unquoted attribute value state.
	        // 
	        // Rationale 1: our belief is that developers wouldn't expect an 
	        //   empty string would result in ' name="passwd"' rendered as 
	        //   attribute value, even though this is how HTML5 is specified.
	        // Rationale 2: an empty or all null string (for IE) can 
	        //   effectively alter its immediate subsequent state, we choose
	        //   \uFFFD to end the unquoted attr 
	        //   state, which therefore will not mess up later contexts.
	        // Rationale 3: Since IE 6, it is verified that NULL chars are stripped.
	        // Reference: https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(unquoted)-state
	        // 
	        // Example:
	        // <input value={{{yavu s}}} name="passwd"/>
	        yavu: function yavu(s) {
	            return strReplace(s, SPECIAL_ATTR_VALUE_UNQUOTED_CHARS, function (m) {
	                return m === '\t' ? '&#9;' // in hex: 09
	                : m === '\n' ? '&#10;' // in hex: 0A
	                : m === '\x0B' ? '&#11;' // in hex: 0B  for IE. IE<9 \v equals v, so use \x0B instead
	                : m === '\f' ? '&#12;' // in hex: 0C
	                : m === '\r' ? '&#13;' // in hex: 0D
	                : m === ' ' ? '&#32;' // in hex: 20
	                : m === '=' ? '&#61;' // in hex: 3D
	                : m === '<' ? '&lt;' : m === '>' ? '&gt;' : m === '"' ? '&quot;' : m === "'" ? '&#39;' : m === '`' ? '&#96;' : /*empty or null*/'\uFFFD';
	            });
	        },

	        yu: encodeURI,
	        yuc: encodeURIComponent,

	        // Notice that yubl MUST BE APPLIED LAST, and will not be used independently (expected output from encodeURI/encodeURIComponent and yavd/yavs/yavu)
	        // This is used to disable JS execution capabilities by prefixing x- to ^javascript:, ^vbscript: or ^data: that possibly could trigger script execution in URI attribute context
	        yubl: function yubl(s) {
	            return URI_BLACKLIST_PROTOCOLS[x.yup(s)] ? 'x-' + s : s;
	        },

	        // This is NOT a security-critical filter.
	        // Reference: https://tools.ietf.org/html/rfc3986
	        yufull: function yufull(s) {
	            return x.yu(s).replace(URL_IPV6, function (m, p) {
	                return '//[' + p + ']';
	            });
	        },

	        // chain yufull() with yubl()
	        yublf: function yublf(s) {
	            return x.yubl(x.yufull(s));
	        },

	        // The design principle of the CSS filter MUST meet the following goal(s).
	        // (1) The input cannot break out of the context (expr) and this is to fulfill the just sufficient encoding principle.
	        // (2) The input cannot introduce CSS parsing error and this is to address the concern of UI redressing.
	        //
	        // term
	        //   : unary_operator?
	        //     [ NUMBER S* | PERCENTAGE S* | LENGTH S* | EMS S* | EXS S* | ANGLE S* |
	        //     TIME S* | FREQ S* ]
	        //   | STRING S* | IDENT S* | URI S* | hexcolor | function
	        // 
	        // Reference:
	        // * http://www.w3.org/TR/CSS21/grammar.html 
	        // * http://www.w3.org/TR/css-syntax-3/
	        // 
	        // NOTE: delimiter in CSS -  \  _  :  ;  (  )  "  '  /  ,  %  #  !  *  @  .  {  }
	        //                        2d 5c 5f 3a 3b 28 29 22 27 2f 2c 25 23 21 2a 40 2e 7b 7d

	        yceu: function yceu(s) {
	            s = htmlDecode(s);
	            return CSS_VALID_VALUE.test(s) ? s : ";-x:'" + cssBlacklist(s.replace(CSS_SINGLE_QUOTED_CHARS, cssEncode)) + "';-v:";
	        },

	        // string1 = \"([^\n\r\f\\"]|\\{nl}|\\[^\n\r\f0-9a-f]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)*\"
	        yced: function yced(s) {
	            return cssBlacklist(htmlDecode(s).replace(CSS_DOUBLE_QUOTED_CHARS, cssEncode));
	        },

	        // string2 = \'([^\n\r\f\\']|\\{nl}|\\[^\n\r\f0-9a-f]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)*\'
	        yces: function yces(s) {
	            return cssBlacklist(htmlDecode(s).replace(CSS_SINGLE_QUOTED_CHARS, cssEncode));
	        },

	        // for url({{{yceuu url}}}
	        // unquoted_url = ([!#$%&*-~]|\\{h}{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])* (CSS 2.1 definition)
	        // unquoted_url = ([^"'()\\ \t\n\r\f\v\u0000\u0008\u000b\u000e-\u001f\u007f]|\\{h}{1,6}(\r\n|[ \t\r\n\f])?|\\[^\r\n\f0-9a-f])* (CSS 3.0 definition)
	        // The state machine in CSS 3.0 is more well defined - http://www.w3.org/TR/css-syntax-3/#consume-a-url-token0
	        // CSS_UNQUOTED_URL = /['\(\)]/g; // " \ treated by encodeURI()   
	        yceuu: function yceuu(s) {
	            return cssUrl(s).replace(CSS_UNQUOTED_URL, function (chr) {
	                return chr === '\'' ? '\\27 ' : chr === '(' ? '%28' :
	                /* chr === ')' ? */'%29';
	            });
	        },

	        // for url("{{{yceud url}}}
	        yceud: function yceud(s) {
	            return cssUrl(s);
	        },

	        // for url('{{{yceus url}}}
	        yceus: function yceus(s) {
	            return cssUrl(s).replace(SQUOT, '\\27 ');
	        }
	    };
	};

	// exposing privFilters
	// this is an undocumented feature, and please use it with extra care
	var privFilters = exports._privFilters = exports._getPrivFilters();

	/* chaining filters */

	// uriInAttr and literally uriPathInAttr
	// yubl is always used 
	// Rationale: given pattern like this: <a href="{{{uriPathInDoubleQuotedAttr s}}}">
	//            developer may expect s is always prefixed with ? or /, but an attacker can abuse it with 'javascript:alert(1)'
	function uriInAttr(s, yav, yu) {
	    return privFilters.yubl(yav((yu || privFilters.yufull)(s)));
	}

	/** 
	* Yahoo Secure XSS Filters - just sufficient output filtering to prevent XSS!
	* @module xss-filters 
	*/

	/**
	* @function module:xss-filters#inHTMLData
	*
	* @param {string} s - An untrusted user input
	* @returns {string} The string s with '<' encoded as '&amp;lt;'
	*
	* @description
	* This filter is to be placed in HTML Data context to encode all '<' characters into '&amp;lt;'
	* <ul>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#data-state">HTML5 Data State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <div>{{{inHTMLData htmlData}}}</div>
	*
	*/
	exports.inHTMLData = privFilters.yd;

	/**
	* @function module:xss-filters#inHTMLComment
	*
	* @param {string} s - An untrusted user input
	* @returns {string} All NULL characters in s are first replaced with \uFFFD. If s contains -->, --!>, or starts with -*>, insert a space right before > to stop state breaking at <!--{{{yc s}}}-->. If s ends with --!, --, or -, append a space to stop collaborative state breaking at {{{yc s}}}>, {{{yc s}}}!>, {{{yc s}}}-!>, {{{yc s}}}->. If s contains ]> or ends with ], append a space after ] is verified in IE to stop IE conditional comments.
	*
	* @description
	* This filter is to be placed in HTML Comment context
	* <ul>
	* <li><a href="http://shazzer.co.uk/vector/Characters-that-close-a-HTML-comment-3">Shazzer - Closing comments for -.-></a>
	* <li><a href="http://shazzer.co.uk/vector/Characters-that-close-a-HTML-comment">Shazzer - Closing comments for --.></a>
	* <li><a href="http://shazzer.co.uk/vector/Characters-that-close-a-HTML-comment-0021">Shazzer - Closing comments for .></a>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-start-state">HTML5 Comment Start State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-start-dash-state">HTML5 Comment Start Dash State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-state">HTML5 Comment State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-end-dash-state">HTML5 Comment End Dash State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-end-state">HTML5 Comment End State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-end-bang-state">HTML5 Comment End Bang State</a></li>
	* <li><a href="http://msdn.microsoft.com/en-us/library/ms537512%28v=vs.85%29.aspx">Conditional Comments in Internet Explorer</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <!-- {{{inHTMLComment html_comment}}} -->
	*
	*/
	exports.inHTMLComment = privFilters.yc;

	/**
	* @function module:xss-filters#inSingleQuotedAttr
	*
	* @param {string} s - An untrusted user input
	* @returns {string} The string s with any single-quote characters encoded into '&amp;&#39;'.
	*
	* @description
	* <p class="warning">Warning: This is NOT designed for any onX (e.g., onclick) attributes!</p>
	* <p class="warning">Warning: If you're working on URI/components, use the more specific uri___InSingleQuotedAttr filter </p>
	* This filter is to be placed in HTML Attribute Value (single-quoted) state to encode all single-quote characters into '&amp;&#39;'
	*
	* <ul>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(single-quoted)-state">HTML5 Attribute Value (Single-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <input name='firstname' value='{{{inSingleQuotedAttr firstname}}}' />
	*
	*/
	exports.inSingleQuotedAttr = privFilters.yavs;

	/**
	* @function module:xss-filters#inDoubleQuotedAttr
	*
	* @param {string} s - An untrusted user input
	* @returns {string} The string s with any single-quote characters encoded into '&amp;&quot;'.
	*
	* @description
	* <p class="warning">Warning: This is NOT designed for any onX (e.g., onclick) attributes!</p>
	* <p class="warning">Warning: If you're working on URI/components, use the more specific uri___InDoubleQuotedAttr filter </p>
	* This filter is to be placed in HTML Attribute Value (double-quoted) state to encode all single-quote characters into '&amp;&quot;'
	*
	* <ul>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(double-quoted)-state">HTML5 Attribute Value (Double-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <input name="firstname" value="{{{inDoubleQuotedAttr firstname}}}" />
	*
	*/
	exports.inDoubleQuotedAttr = privFilters.yavd;

	/**
	* @function module:xss-filters#inUnQuotedAttr
	*
	* @param {string} s - An untrusted user input
	* @returns {string} If s contains any state breaking chars (\t, \n, \v, \f, \r, space, null, ', ", `, <, >, and =), they are escaped and encoded into their equivalent HTML entity representations. If the string is empty, inject a \uFFFD character.
	*
	* @description
	* <p class="warning">Warning: This is NOT designed for any onX (e.g., onclick) attributes!</p>
	* <p class="warning">Warning: If you're working on URI/components, use the more specific uri___InUnQuotedAttr filter </p>
	* <p>Regarding \uFFFD injection, given <a id={{{id}}} name="passwd">,<br/>
	*        Rationale 1: our belief is that developers wouldn't expect when id equals an
	*          empty string would result in ' name="passwd"' rendered as 
	*          attribute value, even though this is how HTML5 is specified.<br/>
	*        Rationale 2: an empty or all null string (for IE) can 
	*          effectively alter its immediate subsequent state, we choose
	*          \uFFFD to end the unquoted attr 
	*          state, which therefore will not mess up later contexts.<br/>
	*        Rationale 3: Since IE 6, it is verified that NULL chars are stripped.<br/>
	*        Reference: https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(unquoted)-state</p>
	* <ul>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(unquoted)-state">HTML5 Attribute Value (Unquoted) State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#before-attribute-value-state">HTML5 Before Attribute Value State</a></li>
	* <li><a href="http://shazzer.co.uk/database/All/Characters-which-break-attributes-without-quotes">Shazzer - Characters-which-break-attributes-without-quotes</a></li>
	* <li><a href="http://shazzer.co.uk/vector/Characters-allowed-attribute-quote">Shazzer - Characters-allowed-attribute-quote</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <input name="firstname" value={{{inUnQuotedAttr firstname}}} />
	*
	*/
	exports.inUnQuotedAttr = privFilters.yavu;

	/**
	* @function module:xss-filters#uriInSingleQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly an <strong>absolute</strong> URI
	* @returns {string} The string s encoded first by window.encodeURI(), then inSingleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (single-quoted) state for an <strong>absolute</strong> URI.<br/>
	* The correct order of encoders is thus: first window.encodeURI(), then inSingleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* <p>Notice: This filter is IPv6 friendly by not encoding '[' and ']'.</p>
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(single-quoted)-state">HTML5 Attribute Value (Single-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href='{{{uriInSingleQuotedAttr full_uri}}}'>link</a>
	* 
	*/
	exports.uriInSingleQuotedAttr = function (s) {
	    return uriInAttr(s, privFilters.yavs);
	};

	/**
	* @function module:xss-filters#uriInDoubleQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly an <strong>absolute</strong> URI
	* @returns {string} The string s encoded first by window.encodeURI(), then inDoubleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (double-quoted) state for an <strong>absolute</strong> URI.<br/>
	* The correct order of encoders is thus: first window.encodeURI(), then inDoubleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* <p>Notice: This filter is IPv6 friendly by not encoding '[' and ']'.</p>
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(double-quoted)-state">HTML5 Attribute Value (Double-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href="{{{uriInDoubleQuotedAttr full_uri}}}">link</a>
	* 
	*/
	exports.uriInDoubleQuotedAttr = function (s) {
	    return uriInAttr(s, privFilters.yavd);
	};

	/**
	* @function module:xss-filters#uriInUnQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly an <strong>absolute</strong> URI
	* @returns {string} The string s encoded first by window.encodeURI(), then inUnQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (unquoted) state for an <strong>absolute</strong> URI.<br/>
	* The correct order of encoders is thus: first the built-in encodeURI(), then inUnQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* <p>Notice: This filter is IPv6 friendly by not encoding '[' and ']'.</p>
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(unquoted)-state">HTML5 Attribute Value (Unquoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href={{{uriInUnQuotedAttr full_uri}}}>link</a>
	* 
	*/
	exports.uriInUnQuotedAttr = function (s) {
	    return uriInAttr(s, privFilters.yavu);
	};

	/**
	* @function module:xss-filters#uriInHTMLData
	*
	* @param {string} s - An untrusted user input, supposedly an <strong>absolute</strong> URI
	* @returns {string} The string s encoded by window.encodeURI() and then inHTMLData()
	*
	* @description
	* This filter is to be placed in HTML Data state for an <strong>absolute</strong> URI.
	*
	* <p>Notice: The actual implementation skips inHTMLData(), since '<' is already encoded as '%3C' by encodeURI().</p>
	* <p>Notice: This filter is IPv6 friendly by not encoding '[' and ']'.</p>
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#data-state">HTML5 Data State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href="/somewhere">{{{uriInHTMLData full_uri}}}</a>
	* 
	*/
	exports.uriInHTMLData = privFilters.yufull;

	/**
	* @function module:xss-filters#uriInHTMLComment
	*
	* @param {string} s - An untrusted user input, supposedly an <strong>absolute</strong> URI
	* @returns {string} The string s encoded by window.encodeURI(), and finally inHTMLComment()
	*
	* @description
	* This filter is to be placed in HTML Comment state for an <strong>absolute</strong> URI.
	*
	* <p>Notice: This filter is IPv6 friendly by not encoding '[' and ']'.</p>
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#data-state">HTML5 Data State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-state">HTML5 Comment State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <!-- {{{uriInHTMLComment full_uri}}} -->
	* 
	*/
	exports.uriInHTMLComment = function (s) {
	    return privFilters.yc(privFilters.yufull(s));
	};

	/**
	* @function module:xss-filters#uriPathInSingleQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Path/Query or relative URI
	* @returns {string} The string s encoded first by window.encodeURI(), then inSingleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (single-quoted) state for a URI Path/Query or relative URI.<br/>
	* The correct order of encoders is thus: first window.encodeURI(), then inSingleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(single-quoted)-state">HTML5 Attribute Value (Single-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href='http://example.com/{{{uriPathInSingleQuotedAttr uri_path}}}'>link</a>
	* <a href='http://example.com/?{{{uriQueryInSingleQuotedAttr uri_query}}}'>link</a>
	* 
	*/
	exports.uriPathInSingleQuotedAttr = function (s) {
	    return uriInAttr(s, privFilters.yavs, privFilters.yu);
	};

	/**
	* @function module:xss-filters#uriPathInDoubleQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Path/Query or relative URI
	* @returns {string} The string s encoded first by window.encodeURI(), then inDoubleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (double-quoted) state for a URI Path/Query or relative URI.<br/>
	* The correct order of encoders is thus: first window.encodeURI(), then inDoubleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(double-quoted)-state">HTML5 Attribute Value (Double-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href="http://example.com/{{{uriPathInDoubleQuotedAttr uri_path}}}">link</a>
	* <a href="http://example.com/?{{{uriQueryInDoubleQuotedAttr uri_query}}}">link</a>
	* 
	*/
	exports.uriPathInDoubleQuotedAttr = function (s) {
	    return uriInAttr(s, privFilters.yavd, privFilters.yu);
	};

	/**
	* @function module:xss-filters#uriPathInUnQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Path/Query or relative URI
	* @returns {string} The string s encoded first by window.encodeURI(), then inUnQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (unquoted) state for a URI Path/Query or relative URI.<br/>
	* The correct order of encoders is thus: first the built-in encodeURI(), then inUnQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(unquoted)-state">HTML5 Attribute Value (Unquoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href=http://example.com/{{{uriPathInUnQuotedAttr uri_path}}}>link</a>
	* <a href=http://example.com/?{{{uriQueryInUnQuotedAttr uri_query}}}>link</a>
	* 
	*/
	exports.uriPathInUnQuotedAttr = function (s) {
	    return uriInAttr(s, privFilters.yavu, privFilters.yu);
	};

	/**
	* @function module:xss-filters#uriPathInHTMLData
	*
	* @param {string} s - An untrusted user input, supposedly a URI Path/Query or relative URI
	* @returns {string} The string s encoded by window.encodeURI() and then inHTMLData()
	*
	* @description
	* This filter is to be placed in HTML Data state for a URI Path/Query or relative URI.
	*
	* <p>Notice: The actual implementation skips inHTMLData(), since '<' is already encoded as '%3C' by encodeURI().</p>
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#data-state">HTML5 Data State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href="http://example.com/">http://example.com/{{{uriPathInHTMLData uri_path}}}</a>
	* <a href="http://example.com/">http://example.com/?{{{uriQueryInHTMLData uri_query}}}</a>
	* 
	*/
	exports.uriPathInHTMLData = privFilters.yu;

	/**
	* @function module:xss-filters#uriPathInHTMLComment
	*
	* @param {string} s - An untrusted user input, supposedly a URI Path/Query or relative URI
	* @returns {string} The string s encoded by window.encodeURI(), and finally inHTMLComment()
	*
	* @description
	* This filter is to be placed in HTML Comment state for a URI Path/Query or relative URI.
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI">encodeURI | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#data-state">HTML5 Data State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-state">HTML5 Comment State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <!-- http://example.com/{{{uriPathInHTMLComment uri_path}}} -->
	* <!-- http://example.com/?{{{uriQueryInHTMLComment uri_query}}} -->
	*/
	exports.uriPathInHTMLComment = function (s) {
	    return privFilters.yc(privFilters.yu(s));
	};

	/**
	* @function module:xss-filters#uriQueryInSingleQuotedAttr
	* @description This is an alias of {@link module:xss-filters#uriPathInSingleQuotedAttr}
	* 
	* @alias module:xss-filters#uriPathInSingleQuotedAttr
	*/
	exports.uriQueryInSingleQuotedAttr = exports.uriPathInSingleQuotedAttr;

	/**
	* @function module:xss-filters#uriQueryInDoubleQuotedAttr
	* @description This is an alias of {@link module:xss-filters#uriPathInDoubleQuotedAttr}
	* 
	* @alias module:xss-filters#uriPathInDoubleQuotedAttr
	*/
	exports.uriQueryInDoubleQuotedAttr = exports.uriPathInDoubleQuotedAttr;

	/**
	* @function module:xss-filters#uriQueryInUnQuotedAttr
	* @description This is an alias of {@link module:xss-filters#uriPathInUnQuotedAttr}
	* 
	* @alias module:xss-filters#uriPathInUnQuotedAttr
	*/
	exports.uriQueryInUnQuotedAttr = exports.uriPathInUnQuotedAttr;

	/**
	* @function module:xss-filters#uriQueryInHTMLData
	* @description This is an alias of {@link module:xss-filters#uriPathInHTMLData}
	* 
	* @alias module:xss-filters#uriPathInHTMLData
	*/
	exports.uriQueryInHTMLData = exports.uriPathInHTMLData;

	/**
	* @function module:xss-filters#uriQueryInHTMLComment
	* @description This is an alias of {@link module:xss-filters#uriPathInHTMLComment}
	* 
	* @alias module:xss-filters#uriPathInHTMLComment
	*/
	exports.uriQueryInHTMLComment = exports.uriPathInHTMLComment;

	/**
	* @function module:xss-filters#uriComponentInSingleQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Component
	* @returns {string} The string s encoded first by window.encodeURIComponent(), then inSingleQuotedAttr()
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (single-quoted) state for a URI Component.<br/>
	* The correct order of encoders is thus: first window.encodeURIComponent(), then inSingleQuotedAttr()
	*
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(single-quoted)-state">HTML5 Attribute Value (Single-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href='http://example.com/?q={{{uriComponentInSingleQuotedAttr uri_component}}}'>link</a>
	* 
	*/
	exports.uriComponentInSingleQuotedAttr = function (s) {
	    return privFilters.yavs(privFilters.yuc(s));
	};

	/**
	* @function module:xss-filters#uriComponentInDoubleQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Component
	* @returns {string} The string s encoded first by window.encodeURIComponent(), then inDoubleQuotedAttr()
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (double-quoted) state for a URI Component.<br/>
	* The correct order of encoders is thus: first window.encodeURIComponent(), then inDoubleQuotedAttr()
	*
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(double-quoted)-state">HTML5 Attribute Value (Double-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href="http://example.com/?q={{{uriComponentInDoubleQuotedAttr uri_component}}}">link</a>
	* 
	*/
	exports.uriComponentInDoubleQuotedAttr = function (s) {
	    return privFilters.yavd(privFilters.yuc(s));
	};

	/**
	* @function module:xss-filters#uriComponentInUnQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Component
	* @returns {string} The string s encoded first by window.encodeURIComponent(), then inUnQuotedAttr()
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (unquoted) state for a URI Component.<br/>
	* The correct order of encoders is thus: first the built-in encodeURIComponent(), then inUnQuotedAttr()
	*
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(unquoted)-state">HTML5 Attribute Value (Unquoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href=http://example.com/?q={{{uriComponentInUnQuotedAttr uri_component}}}>link</a>
	* 
	*/
	exports.uriComponentInUnQuotedAttr = function (s) {
	    return privFilters.yavu(privFilters.yuc(s));
	};

	/**
	* @function module:xss-filters#uriComponentInHTMLData
	*
	* @param {string} s - An untrusted user input, supposedly a URI Component
	* @returns {string} The string s encoded by window.encodeURIComponent() and then inHTMLData()
	*
	* @description
	* This filter is to be placed in HTML Data state for a URI Component.
	*
	* <p>Notice: The actual implementation skips inHTMLData(), since '<' is already encoded as '%3C' by encodeURIComponent().</p>
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#data-state">HTML5 Data State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href="http://example.com/">http://example.com/?q={{{uriComponentInHTMLData uri_component}}}</a>
	* <a href="http://example.com/">http://example.com/#{{{uriComponentInHTMLData uri_fragment}}}</a>
	* 
	*/
	exports.uriComponentInHTMLData = privFilters.yuc;

	/**
	* @function module:xss-filters#uriComponentInHTMLComment
	*
	* @param {string} s - An untrusted user input, supposedly a URI Component
	* @returns {string} The string s encoded by window.encodeURIComponent(), and finally inHTMLComment()
	*
	* @description
	* This filter is to be placed in HTML Comment state for a URI Component.
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#data-state">HTML5 Data State</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#comment-state">HTML5 Comment State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <!-- http://example.com/?q={{{uriComponentInHTMLComment uri_component}}} -->
	* <!-- http://example.com/#{{{uriComponentInHTMLComment uri_fragment}}} -->
	*/
	exports.uriComponentInHTMLComment = function (s) {
	    return privFilters.yc(privFilters.yuc(s));
	};

	// uriFragmentInSingleQuotedAttr
	// added yubl on top of uriComponentInAttr 
	// Rationale: given pattern like this: <a href='{{{uriFragmentInSingleQuotedAttr s}}}'>
	//            developer may expect s is always prefixed with #, but an attacker can abuse it with 'javascript:alert(1)'

	/**
	* @function module:xss-filters#uriFragmentInSingleQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Fragment
	* @returns {string} The string s encoded first by window.encodeURIComponent(), then inSingleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (single-quoted) state for a URI Fragment.<br/>
	* The correct order of encoders is thus: first window.encodeURIComponent(), then inSingleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(single-quoted)-state">HTML5 Attribute Value (Single-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href='http://example.com/#{{{uriFragmentInSingleQuotedAttr uri_fragment}}}'>link</a>
	* 
	*/
	exports.uriFragmentInSingleQuotedAttr = function (s) {
	    return privFilters.yubl(privFilters.yavs(privFilters.yuc(s)));
	};

	// uriFragmentInDoubleQuotedAttr
	// added yubl on top of uriComponentInAttr 
	// Rationale: given pattern like this: <a href="{{{uriFragmentInDoubleQuotedAttr s}}}">
	//            developer may expect s is always prefixed with #, but an attacker can abuse it with 'javascript:alert(1)'

	/**
	* @function module:xss-filters#uriFragmentInDoubleQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Fragment
	* @returns {string} The string s encoded first by window.encodeURIComponent(), then inDoubleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (double-quoted) state for a URI Fragment.<br/>
	* The correct order of encoders is thus: first window.encodeURIComponent(), then inDoubleQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(double-quoted)-state">HTML5 Attribute Value (Double-Quoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href="http://example.com/#{{{uriFragmentInDoubleQuotedAttr uri_fragment}}}">link</a>
	* 
	*/
	exports.uriFragmentInDoubleQuotedAttr = function (s) {
	    return privFilters.yubl(privFilters.yavd(privFilters.yuc(s)));
	};

	// uriFragmentInUnQuotedAttr
	// added yubl on top of uriComponentInAttr 
	// Rationale: given pattern like this: <a href={{{uriFragmentInUnQuotedAttr s}}}>
	//            developer may expect s is always prefixed with #, but an attacker can abuse it with 'javascript:alert(1)'

	/**
	* @function module:xss-filters#uriFragmentInUnQuotedAttr
	*
	* @param {string} s - An untrusted user input, supposedly a URI Fragment
	* @returns {string} The string s encoded first by window.encodeURIComponent(), then inUnQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* @description
	* This filter is to be placed in HTML Attribute Value (unquoted) state for a URI Fragment.<br/>
	* The correct order of encoders is thus: first the built-in encodeURIComponent(), then inUnQuotedAttr(), and finally prefix the resulted string with 'x-' if it begins with 'javascript:' or 'vbscript:' that could possibly lead to script execution
	*
	* <ul>
	* <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent">encodeURIComponent | MDN</a></li>
	* <li><a href="http://tools.ietf.org/html/rfc3986">RFC 3986</a></li>
	* <li><a href="https://html.spec.whatwg.org/multipage/syntax.html#attribute-value-(unquoted)-state">HTML5 Attribute Value (Unquoted) State</a></li>
	* </ul>
	*
	* @example
	* // output context to be applied by this filter.
	* <a href=http://example.com/#{{{uriFragmentInUnQuotedAttr uri_fragment}}}>link</a>
	* 
	*/
	exports.uriFragmentInUnQuotedAttr = function (s) {
	    return privFilters.yubl(privFilters.yavu(privFilters.yuc(s)));
	};

	/**
	* @function module:xss-filters#uriFragmentInHTMLData
	* @description This is an alias of {@link module:xss-filters#uriComponentInHTMLData}
	* 
	* @alias module:xss-filters#uriComponentInHTMLData
	*/
	exports.uriFragmentInHTMLData = exports.uriComponentInHTMLData;

	/**
	* @function module:xss-filters#uriFragmentInHTMLComment
	* @description This is an alias of {@link module:xss-filters#uriComponentInHTMLComment}
	* 
	* @alias module:xss-filters#uriComponentInHTMLComment
	*/
	exports.uriFragmentInHTMLComment = exports.uriComponentInHTMLComment;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var Parser = __webpack_require__(15).Parser;
	var ReactRenderer = __webpack_require__(11);

	var parser = new Parser();
	var propTypes = React.PropTypes;

	var ReactMarkdown = React.createClass({
	    displayName: 'ReactMarkdown',

	    propTypes: {
	        style: propTypes.object,
	        className: propTypes.string,
	        containerProps: propTypes.object,
	        source: propTypes.string.isRequired,
	        containerTagName: propTypes.string,
	        childBefore: propTypes.object,
	        childAfter: propTypes.object,
	        sourcePos: propTypes.bool,
	        escapeHtml: propTypes.bool,
	        skipHtml: propTypes.bool,
	        softBreak: propTypes.string,
	        allowNode: propTypes.func,
	        allowedTypes: propTypes.array,
	        disallowedTypes: propTypes.array,
	        transformLinkUri: propTypes.func,
	        transformImageUri: propTypes.func,
	        unwrapDisallowed: propTypes.bool,
	        renderers: propTypes.object,
	        walker: propTypes.func
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            containerTagName: 'div'
	        };
	    },

	    render: function render() {
	        var containerProps = this.props.containerProps || {};
	        var renderer = new ReactRenderer(this.props);
	        var ast = parser.parse(this.props.source || '');

	        if (this.props.walker) {
	            var walker = ast.walker();
	            var event;
	            while (event = walker.next()) {

	                this.props.walker.call(this, event, walker);
	            }
	        }
	        if (this.props.className) {
	            containerProps.id = 'shithead';
	            containerProps.style = this.props.style;
	            containerProps.className = this.props.className;
	        }
	        return React.createElement.apply(React, [this.props.containerTagName, containerProps, this.props.childBefore].concat(renderer.render(ast).concat([this.props.childAfter])));
	    }
	});

	ReactMarkdown.types = ReactRenderer.types;
	ReactMarkdown.renderers = ReactRenderer.renderers;
	ReactMarkdown.uriTransformer = ReactRenderer.uriTransformer;

	module.exports = ReactMarkdown;

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = {
		"0": 65533,
		"128": 8364,
		"130": 8218,
		"131": 402,
		"132": 8222,
		"133": 8230,
		"134": 8224,
		"135": 8225,
		"136": 710,
		"137": 8240,
		"138": 352,
		"139": 8249,
		"140": 338,
		"142": 381,
		"145": 8216,
		"146": 8217,
		"147": 8220,
		"148": 8221,
		"149": 8226,
		"150": 8211,
		"151": 8212,
		"152": 732,
		"153": 8482,
		"154": 353,
		"155": 8250,
		"156": 339,
		"158": 382,
		"159": 376
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = {
		"Aacute": "Á",
		"aacute": "á",
		"Acirc": "Â",
		"acirc": "â",
		"acute": "´",
		"AElig": "Æ",
		"aelig": "æ",
		"Agrave": "À",
		"agrave": "à",
		"amp": "&",
		"AMP": "&",
		"Aring": "Å",
		"aring": "å",
		"Atilde": "Ã",
		"atilde": "ã",
		"Auml": "Ä",
		"auml": "ä",
		"brvbar": "¦",
		"Ccedil": "Ç",
		"ccedil": "ç",
		"cedil": "¸",
		"cent": "¢",
		"copy": "©",
		"COPY": "©",
		"curren": "¤",
		"deg": "°",
		"divide": "÷",
		"Eacute": "É",
		"eacute": "é",
		"Ecirc": "Ê",
		"ecirc": "ê",
		"Egrave": "È",
		"egrave": "è",
		"ETH": "Ð",
		"eth": "ð",
		"Euml": "Ë",
		"euml": "ë",
		"frac12": "½",
		"frac14": "¼",
		"frac34": "¾",
		"gt": ">",
		"GT": ">",
		"Iacute": "Í",
		"iacute": "í",
		"Icirc": "Î",
		"icirc": "î",
		"iexcl": "¡",
		"Igrave": "Ì",
		"igrave": "ì",
		"iquest": "¿",
		"Iuml": "Ï",
		"iuml": "ï",
		"laquo": "«",
		"lt": "<",
		"LT": "<",
		"macr": "¯",
		"micro": "µ",
		"middot": "·",
		"nbsp": " ",
		"not": "¬",
		"Ntilde": "Ñ",
		"ntilde": "ñ",
		"Oacute": "Ó",
		"oacute": "ó",
		"Ocirc": "Ô",
		"ocirc": "ô",
		"Ograve": "Ò",
		"ograve": "ò",
		"ordf": "ª",
		"ordm": "º",
		"Oslash": "Ø",
		"oslash": "ø",
		"Otilde": "Õ",
		"otilde": "õ",
		"Ouml": "Ö",
		"ouml": "ö",
		"para": "¶",
		"plusmn": "±",
		"pound": "£",
		"quot": "\"",
		"QUOT": "\"",
		"raquo": "»",
		"reg": "®",
		"REG": "®",
		"sect": "§",
		"shy": "­",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"szlig": "ß",
		"THORN": "Þ",
		"thorn": "þ",
		"times": "×",
		"Uacute": "Ú",
		"uacute": "ú",
		"Ucirc": "Û",
		"ucirc": "û",
		"Ugrave": "Ù",
		"ugrave": "ù",
		"uml": "¨",
		"Uuml": "Ü",
		"uuml": "ü",
		"Yacute": "Ý",
		"yacute": "ý",
		"yen": "¥",
		"yuml": "ÿ"
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_36__;

/***/ }
/******/ ])
});
;