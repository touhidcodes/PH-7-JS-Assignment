/* 
Problem 1: Write a function named mindGame(), which parameter should be only positive number. Multiply 3 times, add 10, divide by 2 and subtract 5 of the number. Now return the value of the function.
*/

function mindGame(positiveNumber) {
	if (typeof positiveNumber === "number") {
		if (positiveNumber >= 0) {
			const totalNumber = (positiveNumber * 3 + 10) / 2 - 5;
			return totalNumber;
		} else {
			return "Error! Please input a positive number.";
		}
	} else {
		return "Invalid parameter! Please input a number as a parameter.";
	}
}

/* 
Problem 2: Write a function named evenOdd(), which parameter should be a string only. Count the total character of the string. If the total number of character is even return as even or if the total number is odd return as odd in the function.
*/

function evenOdd(stringWords) {
	if (typeof stringWords === "string") {
		if (stringWords.length % 2 === 0) {
			return "even";
		} else {
			return "odd";
		}
	} else {
		return "Invalid parameter! Please input a string as a parameter.";
	}
}

/* 
Problem 3: Write a function named isLGSeven(), which parameter should be a number only. Subtract 7 from the input number. If the difference is less then 7, return the difference number and if the difference is greater than or equal 7, multiply 2 times of the input number.
*/

function isLGSeven(givenNumber) {
	if (typeof givenNumber === "number") {
		const differenceOFNumber = givenNumber - 7;
		if (differenceOFNumber < 7) {
			return differenceOFNumber;
		} else {
			return givenNumber * 2;
		}
	} else {
		return "Invalid parameter! Please input a number as a parameter.";
	}
}

/* 
Problem 4: Write a function named findingBadData(), which parameter should be an array, consist of positive and negative numbers only. Count the negative numbers and return how many negative number in the array.
*/

function findingBadData(givenArray) {
	let badData = [];
	if (Array.isArray(givenArray) === true) {
		for (let i = 0; i < givenArray.length; i++) {
			const number = givenArray[i];
			if (typeof givenArray[i] === "number") {
				if (number < 0) {
					badData.push(number);
				}
			} else {
				return "Something is wrong! Please check your array and input only numbers.";
			}
		}
		return badData.length;
	} else {
		return "Invalid parameter! Please input an array as a parameter.";
	}
}

/* 
Problem 5: Write a function named gemsToDiamond(), which has 3 parameters and should be numbers only. Multiply first parameter 21 times, second parameter 32 times and third parameter 43 times and count total number of 3 parameters. If total number greater or equal 2000, subtract 2000 from total number and return the value of total number.
*/

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
	if (
		typeof firstFriendGems === "number" &&
		typeof secondFriendGems === "number" &&
		typeof thirdFriendGems === "number"
	) {
		const firstFriendDiamond = firstFriendGems * 21;
		const secondFriendDiamond = secondFriendGems * 32;
		const thirdFriendDiamond = thirdFriendGems * 43;

		const totalDiamond =
			firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;

		if (totalDiamond >= 1000 * 2) {
			const differenceOfDiamonds = totalDiamond - 2000;
			return differenceOfDiamonds;
		} else {
			return totalDiamond;
		}
	} else {
		return "Invalid parameter! Please input only numbers as a parameters.";
	}
}

