  //local storage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      function save() {
        localStorage.setItem("cart", JSON.stringify(cart));
      }


function calculateTotals(){
    let subtotal=0;

    cart.forEach(item=>{
          subtotal += Number(item.price) * Number(item.quantity);
    });

    const vat= subtotal*0.11;
    const total= subtotal+vat;
    return{subtotal, vat, total}

    
}