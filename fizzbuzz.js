
function fizzbuzz (n){
    const answer = []
}

for(let i =1; i <= n; i++){
    if(i % 3 == 0 && 1 % 5 == 0)
    answer.push(`fizzbuzz`)
    else if ( i % 3 == 0)
    answer.push(`fizz`)
    else if (i % 5 == 0)
    answer.push(`buzz`)
    else 
    answer.push(i.toString())
}
return answer