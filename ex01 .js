document.write(' <p> JavaScript는 재밌어:</p>')

var num =20;

console.log(num);

var myname = "테킷";
console.log(myname);

var myname3 = "'멋쟁이'";
console.log(myname3)

var isTrue = true;
console.log(isTrue);

var student = {
    grade: 1,
    school: "lion school"
};
var gradeInfo = student.grade;
console.log(gradeInfo);

var key = Object.keys(student)[0];
console.log(key)

student.class = 3;
console.log(student);

console.log(student['class']);
console.log(student.class);

var teacher = new Object();

var name1 = "김멋사";
var name2 = Symbol("김멋사");

console.log(name1==name2);

var myclass = {
    [Symbol("이테킷")]: 1,
    [Symbol("이테킷")]: 2
};
console.log(myclass)

var c = 7;
console.log(++c);
console.log(c);

var d = 2;
console.log(d+= 3);

console.log(2 == "2");
console.log( 2 === "2");

console.log (true || true);
console.log (true || false || false);

console.log(typeof null);

var greeting = "Hello!";
var myname = '김테킷';


var sentence = greeting  + "\t" + myname;
console.log(sentence);

var a = `안녕하세요
여러분!`;
console.log(a);

var price = 1000;
var c = `이 물건은 ${price}원 입니다.`;
console.log(c);

var abc = "I am Iron man";

console.log(abc.indexOf("man"));
console.log(abc.slice (0,4));

var mbti = ['INFP', 'ENFJ', 'INTJ'];

console.log(mbti.shift());
console.log(mbti);

console.log(mbti.join());
console.log(mbti.join('-'));