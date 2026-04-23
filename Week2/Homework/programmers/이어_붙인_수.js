function solution(num_list) {
    //홀수만 모아서
    const oddStr=num_list.filter(num => num%2!==0).join('');
    
    //짝수만 모아서
    const evenStr=num_list.filter(num => num%2===0).join('');
    
    //문자열 다시 숫자로
    var answer=Number(oddStr)+Number(evenStr);
    
    return answer;
}