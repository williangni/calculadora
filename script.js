function calcular(){
    var tn1= document.getElementById('num1')
    var tn2= document.getElementById('num2')
    var n1= Number(tn1.value)
    var n2= Number(tn2.value)
    var res= document.querySelector('div#res')
    var cal= document.getElementsByName('cal')
    if(cal[0].checked){
        var soma= n1+n2
        res.innerHTML= `A soma entre ${n1} e ${n2} é ${soma}`
    }else if(cal[1].checked){
        var soma= n1-n2
        res.innerHTML=`A subtração entre ${n1} e ${n2} é ${soma}`
    }else if(cal[2].checked){
        var soma= n1*n2
        res.innerHTML=`A multiplicação entre ${n1} e ${n2} é ${soma}`
    }
    else{
        var soma= n1/n2
        res.innerHTML= `A divisão entre ${n1} e ${n2} é ${soma}`
    }
    if (soma<0){
        document.body.style.background= 'black'
    }else{
        document.body.style.background='blue'
    }

}