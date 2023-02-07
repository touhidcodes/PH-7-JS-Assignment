// Problem 1
function mindGame(positiveNumber) {
	if (typeof positiveNumber === "number") {
		if (positiveNumber >= 0) {
			const totalNumber = (positiveNumber * 3 + 10) / 2 - 5;
			return totalNumber;
		} else {
			return "Please input a positive number";
		}
	} else {
		return "Please input a number";
	}
}

// Problem 2
function evenOdd(word) {
	if (typeof word === "string") {
		if (word.length % 2 === 0) {
			return "even";
		} else {
			return "odd";
		}
	} else {
		return "Please input a string";
	}
}

// Problem 3
function isLGSeven(number) {
	if (typeof number === "number") {
		const differenceOFNumber = number - 7;
		if (differenceOFNumber < 7) {
			return differenceOFNumber;
		} else {
			return number * 2;
		}
	} else {
		return "Please input a number";
	}
}

// Problem 4
function findingBadData(arrayOfNumbers) {
	let badData = [];
	if (Array.isArray(arrayOfNumbers) === true) {
		for (let i = 0; i < arrayOfNumbers.length; i++) {
			const number = arrayOfNumbers[i];
			if (number < 0) {
				badData.push(number);
			}
		}
		return badData.length;
	} else {
		return "Please input an array";
	}
}

// problem 5
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
		return "Please Input Numbers";
	}
}

const res = gemsToDiamond(100, 5, 1);
console.log(res);
