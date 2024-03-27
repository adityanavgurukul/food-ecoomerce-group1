document.addEventListener("DOMContentLoaded",function(){
    const minusdiv=document.querySelector(".minus")
    const plusdiv=document.querySelector(".plus")
    const qty=document.querySelector(".qty")
    const price=document.querySelector(".price")
    const item_total=document.querySelector(".Bill span:nth-child(2)")
    const total_payment=document.querySelector(".total p:nth-child(2)")

    let Base_price=parseInt(price.textContent.replace("₹",""))
    let Quantity=parseInt(qty.textContent)
    let total_pay=parseInt(total_payment.textContent.replace("₹",""))
    
    function updateTotalPrice(){
        const total_price=Base_price*Quantity
        item_total.textContent=`₹ ${total_price }`
        total_pay=total_price+20
        total_payment.textContent=`₹ ${total_pay}`
    }

    plusdiv.addEventListener("click",function(){
        Quantity++;
        qty.textContent=Quantity
        updateTotalPrice()
        updatePrice()
    })

    minusdiv.addEventListener("click",function(){
        if (Quantity>1){
            Quantity--;
            qty.textContent=Quantity
            updateTotalPrice()
            updatePrice()
        }
    })

    function updatePrice(){
        const totalPrice=Base_price*Quantity;
        price.textContent=`₹ ${totalPrice }`
        updateTotalPrice()
    }
    
})