//???????/
// -- 1 --
// Userdan tu'gilgan yilini so'rab unga hozirgi yoshini etish

// -- 2 --
// Userdan hozirgi yoshini so'rab uni nechinchi yilda tu'gilganligini etish

// -- 3 --
// 23000 pulim bor. suv 5000 bo'lsa, nechta olishimmi kiritishim kerak
// agar qaytim qolsa qaytimni korsatish kerak. Agar qaytim qomasa 0 chiqishi kerak

// -- 4 --
// 3 misolni takomillashitirish. Agar qaytim qolsa qaytimni ko'rsatish yoki
// pulim yetmasa qancha yetmasligini etish

// -- 5 --




//1
// let year = +prompt('Yilingizni yozing: ')
// let age = 2023 - year
// alert( 'Sizning yoshingiz ' + age);
//


//2
// let age = +prompt('Yoshingizni yozing: ')
// let year = "2023" - age
// alert( 'Sizning yilingiz ' + year);

//3-4
// let money = 23000
// let prod = 5000

// let ans = +prompt('Nechta suv olasiz?: ')

// let all = prod * ans
// let show = money - all
// if(all > money){
//     // alert("Pul yetmadi")
//     alert("Qancha pul yetmadi: " + Math.abs(show))


// }else{
//     all -= money
//     alert("Qoldiq: " + Math.abs(all))
// }

//HW

// let money = +prompt("Qancha pul bor?: ")

let suv = 5000
let non = 3500
let sut = 9000
let suvcost = +prompt("Nechta suv kerak? ")
let noncost = +prompt("Nechta non kerak? ")
let sutcost = +prompt("Nechta sut kerak? ")
let suvplus = suv * suvcost
let nonplus = non * noncost
let sutplus = sut * sutcost
let all = suvplus + nonplus + sutplus

alert("Ja'mi: " + all)
let money = +prompt("Nechpul pulingiz bor? ")
let ans = all - money
let ext = money - all
if (all > money){
    alert("Qancha pul yetmadi: " + Math.abs(ans))
}
else{
    alert("Qoldiq: " + ext)
}







