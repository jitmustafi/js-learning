let s = "race a car";
s = s.toLowerCase();
let sString = "";
for(const i of s) {
    if((i.charCodeAt() < 123 && i.charCodeAt() > 96) || (i.charCodeAt() < 58 && i.charCodeAt() > 47)) {
        sString.join(i);
        console.log(sString);
        
    }
}

let rString = sString.split('').reverse().join('');

if(sString === rString) {
    console.log(true);
} else {
    console.log(false);
    
}
