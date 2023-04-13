/** 必須チェック（空の場合はtrueを返却） */
module.exports.requireCheck = (value: string) => {
  return !value;
};

/** 記号チェック（記号が含まれている場合はtrueを返却） */
module.exports.symbolCheck = (value: string) => {
  const reg = RegExp(/[!"¥#$%&'()\*\+\-\.,\/:;<=>?@\[\\\]^_`{|}~]/g);
  return reg.test(value);
};

/** 全角カタカナチェック（カタカナ以外が含まれている場合はtrueを返却） */
module.exports.kanaCheck = (value: string) => {
  const reg = RegExp(/^[ァ-ヶー　]*$/);
  return !reg.test(value);
};

/** 半角数字チェック（半角数字以外が含まれている場合はtrueを返却） */
module.exports.numberCheck = (value: string) => {
  const reg = RegExp(/^[0-9]+$/);
  return !reg.test(value);
};

/** メールアドレスチェック（a~z,A~z,0~9,-,_,.,以外が含まれている場合はtrueを返却） */
module.exports.mailaddressCheck = (value: string) => {
  const reg = RegExp(/^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/);
  return !reg.test(value);
};
