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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Container = (function (_super) {
    __extends(Container, _super);
    function Container() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Container.prototype.render = function () {
        return (React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'container-header' }, this.props.header),
            this.props.children));
    };
    return Container;
}(React.Component));
exports.Container = Container;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shape;
(function (Shape) {
    Shape[Shape["diamond"] = 0] = "diamond";
    Shape[Shape["oval"] = 1] = "oval";
    Shape[Shape["squiggle"] = 2] = "squiggle";
})(Shape = exports.Shape || (exports.Shape = {}));
var Shade;
(function (Shade) {
    Shade[Shade["empty"] = 0] = "empty";
    Shade[Shade["shaded"] = 1] = "shaded";
    Shade[Shade["full"] = 2] = "full";
})(Shade = exports.Shade || (exports.Shade = {}));
var Color;
(function (Color) {
    Color[Color["purple"] = 0] = "purple";
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
})(Color = exports.Color || (exports.Color = {}));
var CardExtensions = (function () {
    function CardExtensions() {
    }
    CardExtensions.fromColor = function (color) {
        switch (color) {
            case Color.green: {
                return 'green';
            }
            case Color.red: {
                return 'red';
            }
            case Color.purple: {
                return 'purple';
            }
        }
    };
    CardExtensions.getSvgFile = function (card) {
        var fileName = card.count.toString();
        switch (card.shade) {
            case Shade.empty: {
                fileName += 'O';
                break;
            }
            case Shade.shaded: {
                fileName += 'H';
                break;
            }
            case Shade.full: {
                fileName += 'S';
                break;
            }
        }
        switch (card.color) {
            case Color.green: {
                fileName += 'g';
                break;
            }
            case Color.red: {
                fileName += 'r';
                break;
            }
            case Color.purple: {
                fileName += 'p';
                break;
            }
        }
        switch (card.shape) {
            case Shape.diamond: {
                fileName += 'D';
                break;
            }
            case Shape.oval: {
                fileName += 'P';
                break;
            }
            case Shape.squiggle: {
                fileName += 'S';
                break;
            }
        }
        fileName += '.svg';
        return fileName;
    };
    return CardExtensions;
}());
exports.CardExtensions = CardExtensions;
// export class Card {
//     count: number;
//     shape: Shape;
//     shade: Shade;
//     color: Color;
//     constructor(count: number, shape: Shape, shade: Shade, color: Color) {
//         this.count = count;
//         this.shape = shape;
//         this.shade = shade;
//         this.color = color;
//     }
//     equals(other: Card) {
//         return this.count === other.count
//             && this.shade === other.shade
//             && this.shape === other.shape;
//     } 
//     toString() {
//         let str = this.count.toString() + ' ';
//         switch (this.shade) {
//             case Shade.empty: { str += 'empty '; break; }
//             case Shade.shaded: { str += 'shaded '; break; }
//             case Shade.full: { str += 'full '; break; }
//         }
//         switch (this.color) {
//             case Color.green: { str += 'green '; break; }
//             case Color.red: { str += 'red '; break; }
//             case Color.purple: { str += 'purple '; break; }
//         }
//         switch (this.shape) {
//             case Shape.diamond: { 
//                 str += this.count === 1 ? 'diamond' : 'diamonds'; 
//                 break; 
//             }
//             case Shape.oval: { 
//                 str += this.count === 1 ? 'oval' : 'ovals'; 
//                 break; 
//             }
//             case Shape.squiggle: {
//                 str += this.count === 1 ? 'squiggle' : 'squiggles'; 
//                 break; 
//             }
//         }
//         return str;
//     }
// } 


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var model_1 = __webpack_require__(2);
var CardComponent = (function (_super) {
    __extends(CardComponent, _super);
    function CardComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardComponent.prototype.render = function () {
        var _this = this;
        var file = 'public/icons/' + model_1.CardExtensions.getSvgFile(this.props.card);
        var jsx;
        if (this.props.onClick) {
            jsx = (React.createElement("img", { src: file, height: this.props.height, width: this.props.width, onClick: function () { return _this.props.onClick(_this.props.card); } }));
        }
        else {
            jsx = (React.createElement("img", { src: file, height: this.props.height, width: this.props.width }));
        }
        return jsx;
    };
    return CardComponent;
}(React.Component));
exports.CardComponent = CardComponent;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(5);
var add_1 = __webpack_require__(6);
var sets_1 = __webpack_require__(9);
var card_group_all_1 = __webpack_require__(13);
var element = document.getElementById('main-element');
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        var _this = _super.call(this) || this;
        _this.addCard = function (card) {
            _this.setState({
                cards: _this.state.cards.concat([card])
            });
        };
        _this.removeCard = function (card) {
            var newCards = _this.state.cards.slice();
            var removeIndex = newCards.indexOf(card);
            newCards.splice(removeIndex, 1);
            _this.setState({
                cards: newCards
            });
        };
        _this.state = {
            cards: []
        };
        return _this;
    }
    Page.prototype.render = function () {
        var allCardsTsx = this.state.cards.length === 0
            ? undefined
            : React.createElement(card_group_all_1.CardGroupAll, { cards: this.state.cards, cardClicked: this.removeCard });
        return (React.createElement("div", { id: 'main-page' },
            React.createElement("h2", null, "Set Bot"),
            React.createElement(add_1.AddCard, { onAddCard: this.addCard }),
            allCardsTsx,
            React.createElement(sets_1.Sets, { cards: this.state.cards })));
    };
    return Page;
}(React.Component));
exports.Page = Page;
//TODO: move this
ReactDOM.render(React.createElement(Page, null), element);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var picker_1 = __webpack_require__(7);
var container_1 = __webpack_require__(1);
var model_1 = __webpack_require__(2);
var help_1 = __webpack_require__(8);
function nv(name, value) {
    return {
        name: name,
        value: value
    };
}
var AddCard = (function (_super) {
    __extends(AddCard, _super);
    function AddCard() {
        var _this = _super.call(this) || this;
        _this.options = {
            colors: [
                nv('Green', model_1.Color.green),
                nv('Red', model_1.Color.red),
                nv('Purple', model_1.Color.purple)
            ],
            counts: [
                nv('One', 1),
                nv('Two', 2),
                nv('Three', 3)
            ],
            shades: [
                nv('Empty', model_1.Shade.empty),
                nv('Shaded', model_1.Shade.shaded),
                nv('Full', model_1.Shade.full)
            ],
            shapes: [
                nv('Diamond', model_1.Shape.diamond),
                nv('Oval', model_1.Shape.oval),
                nv('Squiggle', model_1.Shape.squiggle)
            ]
        };
        _this.onSelectColor = function (index) {
            _this.setState({
                color: _this.options.colors[index].value
            });
        };
        _this.onSelectShape = function (index) {
            _this.setState({
                shape: _this.options.shapes[index].value
            });
        };
        _this.onSelectShade = function (index) {
            _this.setState({
                shade: _this.options.shades[index].value
            });
        };
        _this.onSelectCount = function (index) {
            _this.setState({
                count: _this.options.counts[index].value
            });
        };
        _this.toggleHelpShown = function (show) {
            _this.setState({
                showHelp: show
            });
        };
        _this.state = {
            color: _this.options.colors[0].value,
            count: _this.options.counts[0].value,
            shade: _this.options.shades[0].value,
            shape: _this.options.shapes[0].value,
            showHelp: false
        };
        return _this;
    }
    AddCard.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { id: 'add-container-wrapper' },
            React.createElement("div", { className: 'add-container' },
                React.createElement(container_1.Container, { header: 'Color' },
                    React.createElement(picker_1.Picker, { options: this.options.colors.map(function (c) { return c.name; }), onSelect: this.onSelectColor })),
                React.createElement(container_1.Container, { header: 'Number' },
                    React.createElement(picker_1.Picker, { options: this.options.counts.map(function (c) { return c.name; }), onSelect: this.onSelectCount })),
                React.createElement(container_1.Container, { header: 'Shape' },
                    React.createElement(picker_1.Picker, { options: this.options.shapes.map(function (s) { return s.name; }), onSelect: this.onSelectShape })),
                React.createElement(container_1.Container, { header: 'Shape' },
                    React.createElement(picker_1.Picker, { options: this.options.shades.map(function (s) { return s.name; }), onSelect: this.onSelectShade }))),
            React.createElement("div", { className: 'add-button-container' },
                React.createElement(help_1.Help, { showHelp: this.state.showHelp, toggleShown: this.toggleHelpShown }),
                React.createElement("button", { className: 'add-button', onClick: function () { return _this.props.onAddCard(_this.state); } }, "Add card"))));
    };
    return AddCard;
}(React.Component));
exports.AddCard = AddCard;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Picker = (function (_super) {
    __extends(Picker, _super);
    function Picker(props) {
        var _this = _super.call(this, props) || this;
        _this.renderOption = function (index) {
            var cls = 'option';
            if (_this.state.selected === index) {
                cls += ' selected-option';
            }
            return (React.createElement("div", { className: cls, key: index, onClick: function () { return _this.onOptionClick(index); } }, _this.props.options[index]));
        };
        _this.state = {
            selected: 0
        };
        return _this;
    }
    Picker.prototype.onOptionClick = function (index) {
        var newState = {
            selected: index
        };
        this.setState(newState);
        this.props.onSelect(index);
    };
    Picker.prototype.render = function () {
        var _this = this;
        var optionsJsx = this.props.options.map(function (o, i) { return _this.renderOption(i); });
        return (React.createElement("div", { className: 'picker' }, optionsJsx));
    };
    return Picker;
}(React.Component));
exports.Picker = Picker;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var container_1 = __webpack_require__(1);
var Help = (function (_super) {
    __extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.renderMessage = function () {
        var _this = this;
        return (React.createElement(container_1.Container, { header: "Help" },
            React.createElement("div", { className: 'help' },
                React.createElement("p", null, "Start by selecting a color, number, and shape for the card, then add it to the game by pressing the \"Add card\" button. You can remove cards by tapping on them in the all cards section. Once you have added cards that form a set, the set will appear at the bottom of the page. Note that all possible sets are shown."),
                React.createElement("a", { onClick: function () { return _this.props.toggleShown(false); } }, "Close"))));
    };
    Help.prototype.render = function () {
        var _this = this;
        if (this.props.showHelp) {
            return this.renderMessage();
        }
        else {
            return (React.createElement("a", { onClick: function () { return _this.props.toggleShown(true); } }, "Help"));
        }
    };
    return Help;
}(React.Component));
exports.Help = Help;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var game_1 = __webpack_require__(10);
var bot_1 = __webpack_require__(11);
var card_group_set_1 = __webpack_require__(12);
var Sets = (function (_super) {
    __extends(Sets, _super);
    function Sets() {
        var _this = _super.call(this) || this;
        _this.game = new game_1.Game([]);
        _this.bot = new bot_1.Bot(_this.game);
        return _this;
    }
    Sets.prototype.render = function () {
        this.game.cards = this.props.cards;
        var sets = this.bot.findSets();
        var setsJsx = sets.map(function (cardSet, index) {
            return React.createElement(card_group_set_1.CardGroupSet, { title: 'Set ' + (index + 1), cards: cardSet, key: index });
        });
        return (React.createElement("div", { className: 'sets-container' }, setsJsx));
    };
    return Sets;
}(React.Component));
exports.Sets = Sets;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(2);
var Game = (function () {
    function Game(cards) {
        this.cards = cards;
    }
    Game.prototype.addCard = function (card) {
        this.cards.push(card);
    };
    Game.prototype.checkSet = function (set) {
        var _this = this;
        if (set.length === 3) {
            var containsSet_1 = true;
            set.forEach(function (c) {
                if (_this.cards.indexOf(c) === -1) {
                    containsSet_1 = false;
                }
            });
            return this.countsValid(set.map(function (c) { return c.count; }))
                && this.shadesValid(set.map(function (c) { return c.shade; }))
                && this.shapesValid(set.map(function (c) { return c.shape; }))
                && this.colorsValid(set.map(function (c) { return c.color; }))
                && containsSet_1;
        }
        return false;
    };
    // checkAndRemoveSet(set: Card[]) {
    //     const isSet = this.checkSet(set);
    //     if (isSet) {
    //         set.forEach((c) => { 
    //             let cardIndex = this.cards.indexOf(c);
    //             this.cards.splice(cardIndex, 1);
    //         });
    //     }
    //     return isSet;
    // }
    Game.prototype.countsValid = function (counts) {
        if (counts[0] === counts[1] && counts[1] === counts[2]) {
            return true;
        }
        else {
            if (counts.indexOf(1) === -1) {
                return false;
            }
            if (counts.indexOf(2) === -1) {
                return false;
            }
            if (counts.indexOf(3) === -1) {
                return false;
            }
        }
        return true;
    };
    Game.prototype.shadesValid = function (shades) {
        if (shades[0] === shades[1] && shades[1] === shades[2]) {
            return true;
        }
        else {
            if (shades.indexOf(model_1.Shade.empty) === -1) {
                return false;
            }
            if (shades.indexOf(model_1.Shade.full) === -1) {
                return false;
            }
            if (shades.indexOf(model_1.Shade.shaded) === -1) {
                return false;
            }
        }
        return true;
    };
    Game.prototype.shapesValid = function (shapes) {
        if (shapes[0] === shapes[1] && shapes[1] === shapes[2]) {
            return true;
        }
        else {
            if (shapes.indexOf(model_1.Shape.diamond) === -1) {
                return false;
            }
            if (shapes.indexOf(model_1.Shape.oval) === -1) {
                return false;
            }
            if (shapes.indexOf(model_1.Shape.squiggle) === -1) {
                return false;
            }
        }
        return true;
    };
    Game.prototype.colorsValid = function (colors) {
        if (colors[0] === colors[1] && colors[1] === colors[2]) {
            return true;
        }
        else {
            if (colors.indexOf(model_1.Color.green) === -1) {
                return false;
            }
            if (colors.indexOf(model_1.Color.purple) === -1) {
                return false;
            }
            if (colors.indexOf(model_1.Color.red) === -1) {
                return false;
            }
        }
        return true;
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Bot = (function () {
    function Bot(game) {
        this.game = game;
    }
    Bot.prototype.findSets = function () {
        var _this = this;
        var combinations = this.k_combinations(this.game.cards, 3);
        var sets = combinations.filter(function (cardSet) {
            return _this.game.checkSet(cardSet);
        });
        return sets;
    };
    Bot.prototype.distinctSets = function (sets) {
        var usedCards = [];
        var distinct = sets.filter(function (cardSet) {
            var used = false;
            cardSet.forEach(function (card) {
                if (usedCards.indexOf(card) !== -1) {
                    used = true;
                }
            });
            if (!used) {
                usedCards = usedCards.concat(cardSet);
            }
            return !used;
        });
        return distinct;
    };
    //From: https://gist.github.com/axelpale/3118596
    Bot.prototype.k_combinations = function (set, k) {
        var i, j, combs, head, tailcombs;
        // There is no way to take e.g. sets of 5 elements from
        // a set of 4.
        if (k > set.length || k <= 0) {
            return [];
        }
        // K-sized set has only one K-sized subset.
        if (k == set.length) {
            return [set];
        }
        // There is N 1-sized subsets in a N-sized set.
        if (k == 1) {
            combs = [];
            for (i = 0; i < set.length; i++) {
                combs.push([set[i]]);
            }
            return combs;
        }
        // Assert {1 < k < set.length}
        // Algorithm description:
        // To get k-combinations of a set, we want to join each element
        // with all (k-1)-combinations of the other elements. The set of
        // these k-sized sets would be the desired result. However, as we
        // represent sets with lists, we need to take duplicates into
        // account. To avoid producing duplicates and also unnecessary
        // computing, we use the following approach: each element i
        // divides the list into three: the preceding elements, the
        // current element i, and the subsequent elements. For the first
        // element, the list of preceding elements is empty. For element i,
        // we compute the (k-1)-computations of the subsequent elements,
        // join each with the element i, and store the joined to the set of
        // computed k-combinations. We do not need to take the preceding
        // elements into account, because they have already been the i:th
        // element so they are already computed and stored. When the length
        // of the subsequent list drops below (k-1), we cannot find any
        // (k-1)-combs, hence the upper limit for the iteration:
        combs = [];
        for (i = 0; i < set.length - k + 1; i++) {
            // head is a list that includes only our current element.
            head = set.slice(i, i + 1);
            // We take smaller combinations from the subsequent elements
            tailcombs = this.k_combinations(set.slice(i + 1), k - 1);
            // For each (k-1)-combination we join it with the current
            // and store it to the set of k-combinations.
            for (j = 0; j < tailcombs.length; j++) {
                combs.push(head.concat(tailcombs[j]));
            }
        }
        return combs;
    };
    return Bot;
}());
exports.Bot = Bot;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var container_1 = __webpack_require__(1);
var card_1 = __webpack_require__(3);
var CardGroupSet = (function (_super) {
    __extends(CardGroupSet, _super);
    function CardGroupSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardGroupSet.prototype.render = function () {
        var cardsJsx = this.props.cards.map(function (card, idx) {
            return React.createElement(card_1.CardComponent, { key: idx, card: card, height: 105, width: 67.5 });
        });
        return (React.createElement(container_1.Container, { header: this.props.title }, cardsJsx));
    };
    return CardGroupSet;
}(React.Component));
exports.CardGroupSet = CardGroupSet;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var container_1 = __webpack_require__(1);
var card_1 = __webpack_require__(3);
var CardGroupAll = (function (_super) {
    __extends(CardGroupAll, _super);
    function CardGroupAll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardGroupAll.prototype.render = function () {
        var _this = this;
        var cardsJsx = this.props.cards.map(function (card, idx) {
            return React.createElement(card_1.CardComponent, { key: idx, card: card, height: 105, width: 67.5, onClick: _this.props.cardClicked });
        });
        return (React.createElement(container_1.Container, { header: "All Cards" }, cardsJsx));
    };
    return CardGroupAll;
}(React.Component));
exports.CardGroupAll = CardGroupAll;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map