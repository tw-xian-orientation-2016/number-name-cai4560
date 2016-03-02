describe('Spell out a number', function() {
  it('Should Spell out correct info', function() {
		var input = "512607";
    spyOn(console, 'log');
    spellOutNumber(input);
    var expectResult = "512607 --> five hundred and twelve thousand, "
												+ "six hundred and seven";
    expect(console.log).toHaveBeenCalledWith(expectResult);
  });

	it('Should Spell out correct info', function() {
		var input = "43112603";
		spyOn(console, 'log');
		spellOutNumber(input);
		var expectResult = "43112603 --> forty three million, one hundred and "
             						+ "twelve thousand, six hundred and three";
		expect(console.log).toHaveBeenCalledWith(expectResult);
	});

	it('Should Spell out correct info', function() {
		var input = "1001";
		spyOn(console, 'log');
		spellOutNumber(input);
		var expectResult = "1001 --> one thousand and one";
		expect(console.log).toHaveBeenCalledWith(expectResult);
	});

	it('Should Spell out correct info', function() {
		var input = "1001001001";
		spyOn(console, 'log');
		spellOutNumber(input);
		var expectResult = "1001001001 --> one billion "
											 + "and one million "
											 + "and one thousand "
											 + "and one";
		expect(console.log).toHaveBeenCalledWith(expectResult);
	});

	it('Should Spell out correct info', function() {
		var input = "1000001";
		spyOn(console, 'log');
		spellOutNumber(input);
		var expectResult = "1000001 --> one million and one"
		expect(console.log).toHaveBeenCalledWith(expectResult);
	});

	it('Should Spell out correct info', function() {
		var input = "0";
		spyOn(console, 'log');
		spellOutNumber(input);
		var expectResult = "0 --> zero"
		expect(console.log).toHaveBeenCalledWith(expectResult);
	});
	/*
	it('Should Spell out error tip', function() {
		var input = "abc";
		spyOn(console, 'log');
		spellOutNumber(input);
		var expectResult = "abc --> Please input a positive number!"
		expect(console.log).toHaveBeenCalledWith(expectResult);
	});

	it('Should Spell out error tip', function() {
		var input = "1.1";
		spyOn(console, 'log');
		spellOutNumber(input);
		var expectResult = "1.1 --> Please input a positive number!"
		expect(console.log).toHaveBeenCalledWith(expectResult);
	});

	it('Should Spell out error tip', function() {
		var input = "-1";
		spyOn(console, 'log');
		spellOutNumber(input);
		var expectResult = "-1 --> Please input a positive number!"
		expect(console.log).toHaveBeenCalledWith(expectResult);
	});
	*/
});
