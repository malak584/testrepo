
function calculateAmount(){
    let g1 = parseFloat(document.getElementById('grocery1').value);
    let g2 = parseFloat(document.getElementById('grocery2').value);
    let g3 = parseFloat(document.getElementById('grocery3').value) ;
    
    let totalAmount = g1 + g2 + g3;

    console.log(`The total amount is: $${totalAmount}`);
}





