"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const like_component_1 = require("./like.component");
let likeComp = new like_component_1.LikeComponent(10, true);
likeComp.onEffectiveClickImpl();
console.log('LIKESCOUNT: ' + likeComp.likeCount + ' , SELECTED: ' + likeComp.isActive);
//# sourceMappingURL=likeimpl.js.map