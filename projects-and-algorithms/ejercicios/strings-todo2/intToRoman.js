

//funcion que convierte int a num rom
//usamos recursividad para ir sumando los valores
//segun vayan coicidiendo de izq a der
const parseIntRoman = (num) => { 
    if(num < 1){ return "";}
    if(num >= 1000){ return "M"    + parseIntRoman(num - 1000);}
    if(num >= 900){ return "CM"    + parseIntRoman(num - 900);}
    if(num >= 500){ return "D"    + parseIntRoman(num - 500);}
    if(num >= 400){ return "CD"    + parseIntRoman(num - 400);}
    if(num >= 100){ return "C"    + parseIntRoman(num - 100);}
    if(num >= 90){ return "XC"    + parseIntRoman(num - 90);}
    if(num >= 50){ return "L"    + parseIntRoman(num - 50);}
    if(num >= 40){ return "XL"    + parseIntRoman(num - 40);}
    if(num >= 10){ return "X"     + parseIntRoman(num - 10);}
    if(num >= 9){ return "IX"      + parseIntRoman(num - 9);}
    if(num >= 5){ return "V"    + parseIntRoman(num - 5);}
    if(num >= 4){ return "IV"   + parseIntRoman(num - 4);}
    if(num >= 1){ return "I"    + parseIntRoman(num - 1);}  
    }
console.log(parseIntRoman(444)); 
console.log(parseIntRoman(349)); 
console.log(parseIntRoman(2023)); 