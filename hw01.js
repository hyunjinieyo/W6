var studentScore = prompt("점수를 입력하세요."); // 사용자로부터 점수 입력 받음

// 학점 부여를 위한 switch 구문
switch (true) {
    case studentScore >= 90:
        var grade = "A";
        break;
    case studentScore >= 70:
        var grade = "B";
        break;
    case studentScore >= 60:
        var grade = "C";
        break;
    case studentScore >= 50:
        var grade = "D";
        break;
    default:
        var grade = "F";
}

console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`); // 결과 출력
