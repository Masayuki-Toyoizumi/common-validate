"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailaddressCheck = exports.numberCheck = exports.kanaCheck = exports.symbolCheck = exports.requireCheck = void 0;
/** 必須チェック（空の場合はtrueを返却） */
function requireCheck(value) {
    return !value;
}
exports.requireCheck = requireCheck;
/** 記号チェック（記号が含まれている場合はtrueを返却） */
function symbolCheck(value) {
    const reg = RegExp(/[!"¥#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g);
    return reg.test(value);
}
exports.symbolCheck = symbolCheck;
/** 全角カタカナチェック（カタカナ以外が含まれている場合はtrueを返却） */
function kanaCheck(value) {
    const reg = RegExp(/^[ァ-ヶー　]*$/);
    return !reg.test(value);
}
exports.kanaCheck = kanaCheck;
/** 半角数字チェック（半角数字以外が含まれている場合はtrueを返却） */
function numberCheck(value) {
    const reg = RegExp(/^[0-9]+$/);
    return !reg.test(value);
}
exports.numberCheck = numberCheck;
/** メールアドレスチェック（a~z,A~z,0~9,-,_,.,以外が含まれている場合はtrueを返却） */
function mailaddressCheck(value) {
    const reg = RegExp(/^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/);
    return !reg.test(value);
}
exports.mailaddressCheck = mailaddressCheck;
