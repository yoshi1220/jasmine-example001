/**
 * 入力された正の整数を昇順にした配列を返す。
 * 重複する整数があってもそのままとする。
 * @param {string} input 正の整数を改行で連結した文字列。入力値最終行の末尾に改行が１つ入る。
 * @return {Array.<number>} 昇順に並んだ正の整数の配列
 */
function sortAscending(input) {
  //改行コードで文字列を分割し、配列に変換する。
  values = input.trim().split(/\n/);

  //文字列の配列を数値の配列に変換する。
  numbers = values.map(value => parseInt(value));

  //配列を昇順に並び替えた結果を返す。
  return numbers.sort((a, b) => a - b);
}
