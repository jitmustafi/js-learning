let s = "0Ok,o0";
s = s.toLowerCase();
let filtered = [];
for(const i of s) {
    console.log(i.charCodeAt());
    
    if((i.charCodeAt() < 123 && i.charCodeAt() > 96) || (i.charCodeAt() < 58 && i.charCodeAt() > 47)) {
        filtered.push(i);
    }
}

let sString = filtered.join('');
let rString = filtered.reverse().join('');

if(sString === rString) {
    console.log(true);
} else {
    console.log(false);
    
}
