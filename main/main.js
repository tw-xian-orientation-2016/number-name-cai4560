/*     Main-test     */
function spellOutNumber(number) {
	var dividedNumArrs = getDividedNumArrs(number);
	var preStoredStrings = loadPreStoredStrings();
	var spellOutInfo = getSpellOutInfo(dividedNumArrs, preStoredStrings);
	var summaryInfo = getSummaryInfo(spellOutInfo);
	var allInfo = getJointInfo(summaryInfo, number);
	console.log(number + " --> " + allInfo);
}
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
function getSpellOutInfo(dividedNumArrs, preStoredStrings) {
	if(dividedNumArrs.length === 1 && parseInt(dividedNumArrs) === 0) {
		return ["zero"];
	}
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
	for (var i = 3 - dividedNumArr.length; i > 0; i--) {
		figures[location] = 0;
		location ++;
	}
  for (var i = 0; i < dividedNumArr.length; i++) {
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
/*     Task 3     */
function getSummaryInfo(spellOutInfo) {
	var summaryInfo = [];
	var flag = [];
	for (var i = 0; i < spellOutInfo.length; i++) {
		if(spellOutInfo[i]) {
			if(i != spellOutInfo.length - 1 && spellOutInfo[i].indexOf("and") == -1) {
				spellOutInfo[i] = "and " + spellOutInfo[i];
				flag[i] = true;
			}
			switch (i) {
				case 0 :	break;
				case 1 :	spellOutInfo[i] += " thousand"; break;
				case 2 :	spellOutInfo[i] += " million"; break;
				case 3 :	spellOutInfo[i] += " billion"; break;
				default:  break;
			}
			if(i > 0) {
				spellOutInfo[i] += flag[i-1] ? " " : ", ";
			}
		}
		else {
			flag[i] = true;
		}
		summaryInfo.push(spellOutInfo[i]);
	}
	return summaryInfo;
}
/*     Task 4     */
function getJointInfo(summaryInfo, number) {
	var jointInfo = "";
	for (var i = summaryInfo.length - 1; i >= 0; i--) {
		jointInfo += summaryInfo[i];
	}
	return jointInfo;
}
