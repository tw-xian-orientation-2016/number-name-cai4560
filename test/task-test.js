describe('DividedNumArr', function() {
	it('Should return correct numArr', function() {
		var input = "43112603";
		var result = getDividedNumArrs(input);
  	expect(result).toEqual(["603","112","43"]);
	});

	it('Should return correct numArr', function() {
		var input = "3112603";
		var result = getDividedNumArrs(input);
		expect(result).toEqual(["603","112","3"]);
	});

	it('Should return correct numArr', function() {
		var input = "112603";
		var result = getDividedNumArrs(input);
		expect(result).toEqual(["603","112"]);
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
		var expectResult = ["and six", "and twelve thousand ",
												"and forty million ",
												"five hundred and ninety eight billion "];
  	expect(result).toEqual(expectResult);
	});
});


describe('Print Summary Info', function() {
  var inputs = ["six hundred and three",
								"one hundred and twelve thousand, ",
								"forty three million, "];
	var number = "43112603";
  it('Should print correct info', function() {
    spyOn(console, 'log');
    printSummaryInfo(inputs, number);
    var expectResult = "43112603 --> forty three million, one hundred and twelve thousand, six hundred and three";
    expect(console.log).toHaveBeenCalledWith(expectResult);
  });
});
