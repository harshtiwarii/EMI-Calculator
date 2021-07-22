const calculateemi=()=>
{
    const amount=document.getElementById("amount").value;
    const interest_rate=document.getElementById("interest").value;
    const months=document.getElementById("time").value;
    const interest=(amount*interest_rate)/(100*months);
    const payable=(amount/months)+interest;
    const tag=document.getElementById("emi");
    tag.innerHTML=`EMI ₹:${payable.toFixed(2)}`;
    return(tag);
};

