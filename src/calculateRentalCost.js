/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_COST_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  let discount = 0;

  if (days >= SHORT_TERM) {
    discount = SMALL_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    discount = BIG_DISCOUNT;
  }

  return days * CAR_COST_PER_DAY - discount;
}

module.exports = calculateRentalCost;
