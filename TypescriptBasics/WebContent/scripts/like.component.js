"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LikeComponent {
    constructor(likeCount, isActive) {
        this.likeCount = likeCount;
        this.isActive = isActive;
    }
    onSimpleClick() {
        if (this.isActive) {
            this.likeCount--;
            this.isActive = false;
        }
        else {
            this.likeCount++;
            this.isActive = true;
        }
    }
    onEffectiveClickImpl() {
        this.likeCount += this.isActive ? -1 : 1;
        this.isActive = !this.isActive;
    }
}
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map