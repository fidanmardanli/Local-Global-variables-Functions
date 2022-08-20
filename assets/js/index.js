//1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.
function Checkingby3and7(n){
    if (n % 3 == 0 && n % 7 == 0){
        console.log("n is divisible by 3 and 7");
    }
    else{
        console.log("n is not divisible by 3 and 6");
    }
}
Checkingby3and7(21);

//2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 
function findingFactorial(n){
    let mul = 1;
    if ( n % 2 == 0)
    {
        for (; n > 1; n--) {
            mul *= n;
        }
        console.log(mul);
    }
    else{
        console.log("number is not even")
    }
}
findingFactorial(6);

//3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.
let array = [13,24,12,35,24,2,6];
function squareOfEven(){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2==0) {
            sum+=array[i]*array[i]
        }
    }
    console.log(sum);
}
squareOfEven(array);

//4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 
function login(email , password){
    if ( email == "cavid@code.edu.az" && password == "12345" ) {
        console.log("Girish Olundu")
    }else(console.log("Shifre veya istifadechi adi sehvdir"))
}
login("cavid@code.edu.az" , "12345");

//5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.
let array1 = [13,21,45,67,88];
function sumOfOddNumbers(array1){
    let sum = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i]%2==1) {
            sum+=array1[i]
        }
    }
    console.log(sum)
}
sumOfOddNumbers(array1);

//6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.
let array2 = [4,12,56,84,33];
function countOfEvenNumbers(array2){
    let count = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i]%2==0) {
            count ++;
        }
    }
    console.log(count);
}
countOfEvenNumbers(array2);