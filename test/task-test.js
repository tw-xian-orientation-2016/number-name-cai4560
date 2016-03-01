describe('DividedNumArr', function() {
	it('Should return correct numArr', function() {
		var input = "43112603";
		var result = getDividedNumArrs(input);
		var expectResult = ["603","112","43"];
  	expect(result).toEqual(expectResult);
	});

	it('Should return correct numArr', function() {
		var input = "3112603";
		var result = getDividedNumArrs(input);
		var expectResult = ["603","112","3"];
		expect(result).toEqual(expectResult);
	});

	it('Should return correct numArr', function() {
		var input = "112603";
		var result = getDividedNumArrs(input);
		var expectResult = ["603","112"];
		expect(result).toEqual(expectResult);
	});
});

describe('GetSpellOutInfo', function() {
	it('Should return correct SpellOutInfo', function() {
		var input = ["613", "110", "301", "79", "600","10","3", ""];
		var preStoredStrings = loadPreStoredStrings();
		var result = GetSpellOutInfo(input, preStoredStrings);
		var expectResult = ["six hundred and thirteen", "one hundred and ten",
												"three hundred and one", "seventy nine",
											  "six hundred", "ten", "three", ""];
  	expect(result).toEqual(expectResult);
	});

	it('Should return correct SpellOutInfo', function() {
		var input = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
		var preStoredStrings = loadPreStoredStrings();
		var result = GetSpellOutInfo(input, preStoredStrings);
		var expectResult = ["","one", "two", "three", "four",
												"five", "six", "seven", "eight", "nine"];
		expect(result).toEqual(expectResult);
	});

	it('Should return correct SpellOutInfo', function() {
		var input = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
		var preStoredStrings = loadPreStoredStrings();
		var result = GetSpellOutInfo(input, preStoredStrings);
		var expectResult = ["ten","eleven", "twelve", "thirteen", "fourteen",
											  "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
		expect(result).toEqual(expectResult);
	});

	it('Should return correct SpellOutInfo', function() {
		var input = ["20", "30", "40", "50", "60", "70", "80", "90"];
		var preStoredStrings = loadPreStoredStrings();
		var result = GetSpellOutInfo(input, preStoredStrings);
		var expectResult = ["twenty","thirty", "forty", "fifty",
												"sixty","seventy", "eighty", "ninety"];
		expect(result).toEqual(expectResult);
	});
});

describe('GetSummaryInfo', function() {
	it('Should return correct SummaryInfo', function() {
		var input = ["six", "twelve", "forty", "five hundred and ninety eight" ];
		var result = GetSummaryInfo(input);
		var expectResult = ["and six", "and twelve thousand, ", "and forty million, "
												, "five hundred and ninety eight billion, "];
  	expect(result).toEqual(expectResult);
	});
});
/*
describe('getReceipt', function() {
  var inputs = [{ cartItem: { item: { barcode: 'ITEM000001',
                                      name: '雪碧',
                                      unit: '瓶',
                                      price: 3.00 },
                              number:5},
                  total: 12.00,
                  save: 3.00 },
                { cartItem: { item: { barcode: 'ITEM000003',
                                      name: '荔枝',
                                      unit: '斤',
                                      price: 15.00 },
                result.push              number: 4.5 },
                  total: 67.50,
                  save:  0.00 },
                { cartItem: { item: { barcode: 'ITEM000005',
                                      name: '方便面',
                                      unit: '袋',
                                      price: 4.50},
                              number: 3},
                  total: 9.00,
                  save: 4.50 }];

  it('Should return correct receipt', function() {
    spyOn(console, 'log');
    getReceipt(inputs);
    var expectResult =    '***<没钱赚商店>收据***\n' +
                          '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
                          '名称：荔枝，数量：4.5斤，单价：15.00(元)，小计：67.50(元)\n' +
                          '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
                          '----------------------\n' +
                          '总计：88.50(元)\n' +
                          '节省：7.50(元)\n' +
                          '**********************';
    expect(console.log).toHaveBeenCalledWith(expectResult);
  });
});
*/
