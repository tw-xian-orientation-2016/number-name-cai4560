/*     Task 1     */
function getDividedNumArrs(number) {
	var arrsNum = parseInt(number.length / 3) + 1;
	var result = [];
		for (var i = 0; i < arrsNum; i++ ) {
			var start = number.length - i * 3;
			if(start) {
				result.push(number.substring(start - 3, start));
			}
		}
		return result;
}
