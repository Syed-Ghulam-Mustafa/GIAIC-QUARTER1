// step 6 explicit casting
// explicit casting mtlb data ki type change krna jese yahan myname ki type 
// unknown thi usko string krdiya aur is k liye keyword as use hota h.


let myname: unknown = "Zia";
console.log((myname as string).length);
// console.log(( myname).length) //error 
// error is liye aya qk upar hum ny myname ko string kiya
// phr string.length krdiya jis print hua 3 qk .length data ki tadad btata h
// last step mein dobara .length lga rha h is liye error arha h

let name1: any = "hello babar kahan ja rahy ho"
console.log((name1 as string).length);

// .length pury sentence mein jitny b alphabets hongy wo count kr k de dega.
