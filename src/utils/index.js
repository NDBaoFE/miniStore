export function formatNumberWithDecoration(number) {
    const parts = number.toString().split(".");
    let integerPart = parts[0];
    const decimalPart = parts[1];

    const length = integerPart.length;
    let decoratedNumber = "";

    for (let i = 0; i < length; i++) {
        decoratedNumber = integerPart.charAt(length - 1 - i) + decoratedNumber;
        if ((i + 1) % 3 === 0 && i !== length - 1) {
            decoratedNumber = "," + decoratedNumber;
        }
    }

    if (decimalPart) {
        decoratedNumber = decoratedNumber + "." + decimalPart;
    }

    return decoratedNumber;
}
