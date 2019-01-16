var chai = require("chai");
var expect = chai.expect;
var CartSummary = require("./../src/cart-summary");

describe('getSubTotal() ', function() {
  it('should return 0 if nothing passed in', function() {
    var cartSummary = new CartSummary([]);
    expect(cartSummary.getSubTotal()).to.equal(0);
  })

  it('should return the sum of the price * the quantity', function() {
    var cartSummary = new CartSummary([{
      id: 1,
      quantity: 4,
      price: 50
    }, {
      id: 2,
      quantity: 2,
      price: 30
    }, {
      id: 3,
      quantity: 1,
      price: 40
    }])
    expect(cartSummary.getSubTotal()).to.equal(300);
  })
})
