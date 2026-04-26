function solution(num_list) {
    var answer = 0;

    if(num_list.length>=11) {
        //길이가 11 이상이면
        answer=num_list.reduce((acc, cur) => acc+cur, 0);
    } else {
        //길이가 10 이하이면
        answer=num_list.reduce((acc, cur) => acc*cur, 1);
    }

    return answer;
}