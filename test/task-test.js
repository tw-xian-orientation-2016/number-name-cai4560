describe('Task 1: GetSplitArrs', function() {
	describe('It should return correct splitArrs',function() {
		it('when given a 8-bits input', function() {
			var input = "43112603";
			var result = getSplitArrs(input);
	  	expect(result).toEqual(["603","112","43"]);
		});

		it('when given a 7-bits input', function() {
			var input = "3112603";
			var result = getSplitArrs(input);
			expect(result).toEqual(["603","112","3"]);
		});

		it('when given a 6-bits input', function() {
			var input = "112603";
			var result = getSplitArrs(input);
			expect(result).toEqual(["603","112"]);
		});
	});
});

describe('Task 2: GetSpellOutInfo', function() {
	describe('It should return correct SpellOutInfo',function() {
		it('when given different data categories', function() {
			var input = ["613", "110", "301", "79", "600", "10", "3", "000"];
			var preStoredStrings = loadPreStoredStrings();
			var result = getSpellOutInfo(input, preStoredStrings);
			var expectResult = ["six hundred and thirteen", "one hundred and ten",
													"three hundred and one", "seventy nine",
													"six hundred", "ten", "three", ""];
		  expect(result).toEqual(expectResult);
		});

		it('when given different matched data in 0 to 9', function() {
			var input = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
			var preStoredStrings = loadPreStoredStrings();
			var result = getSpellOutInfo(input, preStoredStrings);
			var expectResult = ["","one", "two", "three", "four",
													"five", "six", "seven", "eight", "nine"];
			expect(result).toEqual(expectResult);
		});

		it('when given different matched data in 10 to 19', function() {
			var input = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
			var preStoredStrings = loadPreStoredStrings();
			var result = getSpellOutInfo(input, preStoredStrings);
			var expectResult = ["ten","eleven", "twelve", "thirteen", "fourteen",
												  "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
			expect(result).toEqual(expectResult);
		});

		it('when given different matched data in 20 to 90', function() {
			var input = ["20", "30", "40", "50", "60", "70", "80", "90"];
			var preStoredStrings = loadPreStoredStrings();
			var result = getSpellOutInfo(input, preStoredStrings);
			var expectResult = ["twenty","thirty", "forty", "fifty",
													"sixty","seventy", "eighty", "ninety"];
			expect(result).toEqual(expectResult);
		});
	});
});

describe('Task 3: GetSummaryInfo', function() {
	describe('It should return correct SummaryInfo', function() {
		it('when given different categories data', function() {
			var input = ["six", "twelve", "forty", "five hundred and ninety eight" ];
			var result = getSummaryInfo(input);
			var expectResult = ["and six", "and twelve thousand ",
													"and forty million ",
													"five hundred and ninety eight billion "];
	  	expect(result).toEqual(expectResult);
		});
	});
});



describe('Task 4: GetJointInfo', function() {
	describe('It should get correct joint info', function() {
  	it('It should print correct info', function() {
			var inputs = ["six hundred and three",
										"one hundred and twelve thousand, ",
										"forty three million, "];
		  var number = "43112603";
    	var result = getJointInfo(inputs, number);
    	var expectResult = "forty three million, one hundred and twelve thousand, six hundred and three";
    	expect(result).toEqual(expectResult);
		});
  });
});
