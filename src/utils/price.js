export function calculateFinalPrice(order, voucher) {
    // Extract voucher details
    const { minItem, minTotal, percentDiscount } = voucher;

    // Calculate the total price of the order
    const totalPrice = order.price * order.quantity;

    // Check if the voucher is applicable
    if (
        (minTotal !== null && totalPrice < minTotal) ||
        (minItem !== null && order.quantity < minItem) ||
        percentDiscount === null
    ) {
        return totalPrice; // Voucher is not applicable, return the original price
    }

    // Calculate the discount amount based on the voucher
    const discountAmount = totalPrice * percentDiscount;
    console.log(discountAmount);
    // Calculate the final price
    const finalPrice = totalPrice - discountAmount;
    console.log(finalPrice);
    return finalPrice;
}
