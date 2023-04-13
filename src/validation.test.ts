const v = require("./validation");

describe("requireCheck", () => {
  test("空欄", () => {
    expect(v.requireCheck("")).toBe(true);
  });
  test("スペース", () => {
    expect(v.requireCheck(" ")).toBe(false);
  });
  test("a", () => {
    expect(v.requireCheck("a")).toBe(false);
  });
});

describe("symbolCheck", () => {
  test("!", () => {
    expect(v.symbolCheck("!")).toBe(true);
  });
  test("{", () => {
    expect(v.symbolCheck("{")).toBe(true);
  });
  test("@", () => {
    expect(v.symbolCheck("@")).toBe(true);
  });
  test("aA0あアー", () => {
    expect(v.symbolCheck("aA0あアー")).toBe(false);
  });
});

describe("kanaCheckTest", () => {
  test("アー:全角カナ => 正常", () => {
    expect(v.kanaCheck("アー")).toBe(false);
  });

  test("ｱ-:半角カナ => 異常", () => {
    expect(v.kanaCheck("ｱ-")).toBe(true);
  });

  test("あ:ひらがな => 異常", () => {
    expect(v.kanaCheck("あ")).toBe(true);
  });

  test("1p%:数字アルファベット記号 => 異常", () => {
    expect(v.kanaCheck("1p%")).toBe(true);
  });
});

describe("numberCheck", () => {
  test("0123456789", () => {
    expect(v.numberCheck("0123456789")).toBe(false);
  });

  test("01-6789", () => {
    expect(v.numberCheck("0123456789")).toBe(false);
  });

  test(" a90あ", () => {
    expect(v.numberCheck(" a90あ")).toBe(true);
  });
});

describe("mailaddressCheck", () => {
  test("0acsA.@_-", () => {
    expect(v.mailaddressCheck("0aA.@_-")).toBe(false);
  });

  test("^|&%", () => {
    expect(v.mailaddressCheck("^|&%")).toBe(true);
  });

  test("あア", () => {
    expect(v.mailaddressCheck("あア")).toBe(true);
  });
});
