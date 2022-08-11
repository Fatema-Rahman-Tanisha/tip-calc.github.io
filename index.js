console.log('tip');
var bilInput = document.getElementById("bill-input")
var personInput = document.getElementById("person-input")
var percent;


// set percentage with buttons
function setpercantage(vlu){
    percent = vlu;
    alert('you set the percentage ' + percent)
    
}
// custom persantage
custom = document.getElementById('custom')
custom.onclick = ()=>{
    percentageCustom= prompt('enter the percentage')
    percent = percentageCustom
    custom.innerHTML = `${percentageCustom}%`
}
// get tip
reset.onclick = function() {
    
    console.log(percent)
    if (personInput.value == '' ) {
        alert('please fill up all the inputs')
        personInput.value=1
    }
    if (bilInput.value=="") {
        alert('please fill up all the inputs')
    }
    if (percent == undefined) {
        alert('please fill up all the inputs')
    }
    munafarhar =percent/100
    munafa = Number(bilInput.value) * munafarhar;
    munafaasol = munafa + Number(bilInput.value);
    prottekerMunafa = munafa / Number(personInput.value) 
    prottekerMunafaAsol = munafaasol / Number(personInput.value) 
    console.log(`otoyeb , 
    munafa,I= ${munafa}
    munafa-asol,A = ${munafaasol}
    ${personInput.value} jon munafa pabe = ${prottekerMunafa}
    ${personInput.value} jon munafa-asol pabe = ${prottekerMunafaAsol}
    `)
    document.getElementById("munafa-protteke").innerHTML = `$${prottekerMunafa.toFixed(2)}`
    document.getElementById("munafa-asol-protteke").innerHTML = `$${prottekerMunafaAsol.toFixed(2)}`
}
