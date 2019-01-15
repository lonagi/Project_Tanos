class Calculate {
	constructor() {
		this.val1Hldr = document.getElementById("value1");
		this.val2Hldr = document.getElementById("value2");
		this.rezHldr = document.getElementById("rez");

		this.value1 = 0;
		this.value2 = 0;
		this.rez = 0;
	}

	initVars() {
		this.value1 = parseFloat(this.val1Hldr.value);
		this.value2 = parseFloat(this.val2Hldr.value);
	}

	displayRez() {
		this.rezHldr.value = this.rez;
	}

	validateNmbr() {
		var pattern = new RegExp("^[0-9]{0,5}[\.]?[0-9]{0,5}$");
		if(!(pattern.test(this.val1Hldr.value))) {
			this.val1Hldr.value = this.val1Hldr.value.substr(0, this.val1Hldr.value.length - 1);
		}
		if(!(pattern.test(this.val2Hldr.value))) {
			this.val2Hldr.value = this.val2Hldr.value.substr(0, this.val2Hldr.value.length - 1);
		}
	}

	getSum() {
		this.initVars();
		this.rez = ((this.val1Hldr.value == "") || (this.val2Hldr.value == "")) ? "insert number" : this.value1 + this.value2;
		this.displayRez();
	}

	getDiff() {
		this.initVars();
		this.rez = ((this.val1Hldr.value == "") || (this.val2Hldr.value == "")) ? "insert number" : this.value1 - this.value2;
		this.displayRez();
	}

	getProd() {
		this.initVars();
		this.rez = ((this.val1Hldr.value == "") || (this.val2Hldr.value == "")) ? "insert number" : this.value1 * this.value2;
		this.displayRez();
	}

	getDiv() {
		this.initVars();
		this.rez = ((this.val1Hldr.value == "") || (this.val2Hldr.value == "")) ? "insert number" : this.value1 / this.value2;
		this.displayRez();
	}

	delValues() {
		this.val1Hldr.value = "";
		this.val2Hldr.value = "";
		this.rezHldr.value = "";
	}
};

let operationUser = new Calculate();