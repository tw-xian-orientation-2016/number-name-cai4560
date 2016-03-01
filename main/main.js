/*     Task 1     */
function getDividedNumArrs(number) {
	var arrsNum = parseInt(number.length / 3) + 1;
	var dividedNumArrs = [];
		for (var i = 0; i < arrsNum; i++ ) {
			var start = number.length - i * 3;
			if(start) {
				dividedNumArrs.push(number.substring(start - 3, start));
			}
		}
		return dividedNumArrs;
}
/*     Task 2     */
function GetSpellOutInfo(dividedNumArrs, preStoredStrings) {
	var spellOutInfo = [];
	dividedNumArrs.forEach(function(dividedNumArr) {
		var figures = fillingZeroAndParseInt(dividedNumArr);
		spellOutInfo.push(replaceFigures(figures, preStoredStrings));
	});
	return spellOutInfo;
}

function fillingZeroAndParseInt(dividedNumArr) {
	var figures = [];
	var location = 0;
	for(var i = 3 - dividedNumArr.length; i > 0; i--) {
		figures[location] = 0;
		location ++;
	}
  for(var i = 0; i < dividedNumArr.length; i++) {
		figures[location] = parseInt(dividedNumArr[i]);
		location ++;
	}
	return figures;
}

function replaceFigures(figure, preStoredStrings) {
	var stringInfo = "";
	if(figure[0]) {
		stringInfo += preStoredStrings[figure[0]] + " hundred"
		if(figure[1] || figure[2]) {
			stringInfo += " and ";
		}
	}
	return stringInfo += replaceLastTwoFigures(figure, preStoredStrings);
}

function replaceLastTwoFigures(figure, preStoredStrings) {
	var stringInfo = "";
	if(figure[1] === 1 ) {
		stringInfo += preStoredStrings[figure[1] * 10 + figure[2]];
	}

	else {
		stringInfo += preStoredStrings[figure[1] * 10];
		if(figure[1] && figure[2]) {
			stringInfo += " ";
		}
		stringInfo +=  preStoredStrings[figure[2]];
	}
	return stringInfo;
}
