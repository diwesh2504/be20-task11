function getTrivia(){
    var no=document.getElementById('num').value;
    fetch(`http://numbersapi.com/${no}`)
    .then((resp)=>{
        if(resp.status===200)
            return resp.text();
        if(resp.status===404)
            throw new Error('Please enter valid number');
    })
    .then(x=>showTrivia(x))
    .catch((err)=>{
        alert(err);
        document.getElementById('num').value='';
    })
}
function showTrivia(x){
    document.getElementById('trivia').innerText=x;
}
function getDate(){
    var no=document.getElementById('date').value;
    fetch(`http://numbersapi.com/${no}/date`)
    .then((resp)=>{
        if(resp.status===200)
            return resp.text();
        if(resp.status===404)
            throw new Error('Please enter valid date');
    })
    .then(x=>showTrivia(x))
    .catch((err)=>{
        alert(err);
        document.getElementById('date').value='';
    })
}