class Order {
  constructor(id){
    this.id=id;
  }
}
  
class Payment {
  contructor(order){
    this.order-order;
  }
}

class ArchPayment extends Payment {
  process(){
    console.log('ARCH payment processing...')
  }
}

class Cardpayment extends Payment {
  process(){
    console.log('CARD payment processing...')
  }
}

const order = New Order(1);
let payment = New ArchPayment(order);
let payment2 = New Cardpayment(order)
