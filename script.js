var list=[];

function addItem() {
	var product = document.getElementById("product").value,
	quantity = document.getElementById("quantity").value,
	price = document.getElementById("price").value;
	if (!(isNaN(price) || isNaN(quantity))) {
		var list_test = [];
		for (var numb = 0; numb < list.length; numb++) {
			list_test.push(list[numb][0]);
		}
		if (list_test.includes(product)) {
			var index = list_test.indexOf(product);
			list[index] = [product, quantity, price];
		}
		else {
			list.push([product, quantity, price]);
		}
		showList();
		clearForm();
		document.getElementById("err").innerHTML="";
	}
	else {
		document.getElementById("err").innerHTML="Invalid input";
		clearForm();
	}
}

function showList() {
	var result = "<table><tr><th>Продукт</th><th>Количество</th><th>Цена</th><th></th></tr>", sum = 0;
	for (var i = 0; i < list.length; i++) {
		result += "<tr>";
		for (var j = 0; j < list[0].length; j++) {
			result += "<td>" + list[i][j] + "</td>";
		}
		//print("Hey, ", var) == alert("Hey, " + p) 
		result += "<td><p onclick='deleteItem("+i+");'> &#215; </p></td>";
		result += "</tr>";
		sum += list[i][1] * list[i][2];
	}
	result += "</table>";
	document.getElementById("total").innerHTML = sum;
	document.getElementById("table").innerHTML = result;
}

function deleteItem(row) {
	list.splice(row, 1);
	showList();
}

function clearForm() {
	document.getElementById("form").reset();
}