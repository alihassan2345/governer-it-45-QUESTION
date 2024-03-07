let guest_list : string []=[`ali`,`farhan`,`raza`,`ayesha`];
for(let i=0; i<guest_list.length; i++){
    console.log("Respected sir/madam " + guest_list[i] + ",\n we invite you on dinner tommorow.\n\n thankyou")
}
let not_present : string ="farhan";
let new_guest: string="Babar Azam";
guest_list[1] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log("Respected sir/madam " + guest_list[i] + ",\n we invite you on dinner tommorow.\n\n thankyou")
}
console.log(`Mr ${not_present} will not comming tommorow dinner`)