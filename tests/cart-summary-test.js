var chai = require("chai");
var expect = chai.expect;
var CartSummary = require("./../src/cart-summary");

describe('CartSummary', function() {
  it('getSubTotal() should return 0 if nothing passed in', function() {
    var cartSummary = new CartSummary([]);
    expect(cartSummary.getSubTotal()).to.equal(0);
  })
})
