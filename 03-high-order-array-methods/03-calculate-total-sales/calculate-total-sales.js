function calculateTotalSalesWithTax(products, taxRate) {

  const totalForProducts = products.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
  const taxAmount = totalForProducts * (taxRate / 100)
  return totalForProducts + taxAmount

}

module.exports = calculateTotalSalesWithTax;
