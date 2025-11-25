const stripe = Stripe('pk_test_51SSQ128DNPPTw0dQUgzFpncDBNML6YowJt9l9Mthm0KrtVDFZ4KOZBoF3Z6ePGqKMVoP5kS2Bm6waFAS0qkCSEQ700JLe9yBf3');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});