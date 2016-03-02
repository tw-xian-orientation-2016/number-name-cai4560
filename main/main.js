/*     Main-test     */
function spellOutNumber(number) {
	var splitArrs = getSplitArrs(number);
	var preStoredStrings = loadPreStoredStrings();
	var spellOutInfo = getSpellOutInfo(splitArrs, preStoredStrings);
	var summaryInfo = getSummaryInfo(spellOutInfo);
	var allInfo = getJointInfo(summaryInfo, number);
	console.log(number + " --> " + allInfo);
}

/*     Task 1     */
function getSplitArrs(number) {
	var arrsNum = parseInt(number.length / 3) + 1;
	var splitArrs = [];
		for (var i = 0; i < arrsNum; i++ ) {
			var start = number.length - i * 3;
			if(start) {
				splitArrs.push(number.substring(start - 3, start));
			}
		}
		return splitArrs;
}

/*     Task 2     */
function getSpellOutInfo(splitArrs, preStoredStrings) {
	if(splitArrs.length === 1 && parseInt(splitArrs) === 0) {
		return ["zero"];
	}
		var spellOutInfo = [];
	splitArrs.forEach(function(splitArr) {
		var figures = fillingZeroAndParseInt(splitArr);
		spellOutInfo.push(replaceFigures(figures, preStoredStrings));
	});
	return spellOutInfo;
}

function fillingZeroAndParseInt(splitArr) {
	var figures = [];
	var location = 0;
	for (var i = 3 - splitArr.length; i > 0; i--) {
		figures[location] = 0;
		location ++;
	}
  for (var i = 0; i < splitArr.length; i++) {
		figures[location] = parseInt(splitArr[i]);
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
