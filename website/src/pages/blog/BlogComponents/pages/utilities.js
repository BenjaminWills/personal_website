// function reverseString(str) {
//     return str.split("").reverse().join("")
// }

// export default function decimal_to_n_ary(base,decimal) {
//     let n_string = ''
//     while (Math.floor(decimal / base) !== 0){
//         n_string += (decimal % base).toString()
//         decimal  = Math.floor(decimal / base)
//     }
//     n_string += decimal.toString()
//     return reverseString(n_string)
// }

// export default function n_ary_to_decimal(base,num) {
//     // Convert number to string 
//     let string_num = num.toString()
//     for (let i = 0; i < string_num.length; i++) {
//         console.log(string_num[i]);
//     }
// }
// export default function m_ary_to_n_ary(base1,num1,base2){
//     // num 1 -> decimal
//     decimal_num_1 = n_ary_to_decimal(base1,num1)

//     // decimal -> num 2
//     n_ary_num = decimal_to_n_ary(base2,decimal_num_1)
//     return n_ary_num
// }