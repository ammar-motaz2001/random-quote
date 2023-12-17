quotes=["<p> “Be yourself; everyone else is already taken.” ― Oscar Wilde </p> ",
"<p> “We accept the love we think we deserve. ”― Stephen Chbosky</p>",
"<p> “So many books, so little time.” ― Frank Zappa </p>" ,
"<p> “A room without books is like a body without a soul.” ― Marcus Tullius Cicero </p>",
"<p> “Be the change that you wish to see in the world.” ― Mahatma Gandhi </p>"]

arr=[]

function getRandom(){
    var x= Math.floor(Math.random() * 5);
    if(x===arr[arr.length-1]){
        x= Math.floor(Math.random() * 5);
        document.getElementById("p").innerHTML=quotes[x-1]
    }
    arr.push(x)
    console.log(arr)
    document.getElementById("p").innerHTML=quotes[x]
}