let attendees = [
  { name: "Lebo",    age: 22, ticket: "General", hasTicket: true,  checkedIn: false, spend: 350 },
  { name: "Aisha",   age: 19, ticket: "VIP",     hasTicket: true,  checkedIn: false, spend: 1200 },
  { name: "Thabo",   age: 17, ticket: "General", hasTicket: true,  checkedIn: false, spend: 250 },
  { name: "Naledi",  age: 25, ticket: "VIP",     hasTicket: true,  checkedIn: false, spend: 850 },
  { name: "Jason",   age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
  { name: "Zanele",  age: 20, ticket: "General", hasTicket: true,  checkedIn: false, spend: 650 },
  { name: "Karabo",  age: 16, ticket: "VIP",     hasTicket: true,  checkedIn: false, spend: 900 },
  { name: "Michael", age: 28, ticket: "General", hasTicket: true,  checkedIn: false, spend: 450 }
];

console.log("\n===== CHALLENGE 1 =====");
let line = "=============================="
// using for..of loop to displayname age ticket valid ticket
for (let waitingToEnter of attendees) {

    if (waitingToEnter) {
        console.log(line);
        console.log(`Name: ${waitingToEnter.name}`);
        console.log(`Age: ${waitingToEnter.age}`);
        console.log(`Ticket: ${waitingToEnter.ticket}`);
        console.log(`Valid Ticket: ${waitingToEnter.hasTicket}`);
        console.log(line)
    }
}

// challenge 2 
console.log("\n===== CHALLENGE 2 =====");
let success = "ENTRY APPROVED";
let declined = "ENTRY DENIED";
let underAge = "UNDER 18";
let ticketCheck = "NO VALID TICKET";

// a for..of loop and if, else,els if for attendees who may enter who are 18 and above and have tickets
for (let attendee of attendees ){

    if(attendee.age >= 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name}: ${success}`);

    }else if(attendee.age < 18 && !attendee.hasTicket) {
        console.log(`${attendee.name}: ${declined}: ${ticketCheck}`);

    }else if(attendee.age < 18 ) {
        console.log(`${attendee.name}: ${declined}: ${underAge}`);

    }else{
        console.log(`${attendee.name}: ${declined}: YOU ARE ${underAge} AND YOU HAVE ${ticketCheck} `);
    }
}

// challenge 3 
console.log("\n===== CHALLENGE 3 =====");

let ticketVIP = "Gold";
let ticketGENERAL = "BLUE";

// switch case for People who successfully enter, VIP ticket holders receive a GOLD WRISTBAND, 
// General ticket holders receive a BLUE WRISTBAND, and any other ticket type should produce UNKNOWN TICKET TYPE.
for (let attendee of attendees){

    if(attendee.age >= 18 && attendee.hasTicket === true){
        switch(attendee.ticket){
            case "VIP":
                console.log(line);
                console.log(attendee.name);
                console.log(`Ticket:${attendee.ticket}`);
                console.log(ticketVIP);
                console.log(line); break;
                
            case "General": 
                console.log(line);
                console.log(attendee.name);
                console.log(`Ticket:${attendee.ticket}`);
                console.log(ticketGENERAL); 
                console.log(line);break;

            default:console.log(" UNKNOWN TICKET TYPE.")
        }
    }
}


// chllange 4
console.log("\n===== CHALLENGE 4 =====");

// The
// person must have a valid ticket, have a VIP ticket, and be 18 or older
for (let attendee of attendees){
    if(attendee.age >= 18 && attendee.hasTicket === true && attendee.ticket === "VIP"){
        console.log(`${attendee.name}: LOUNGE ACCESS is APPROVED`);
    } else {
        console.log(`${attendee.name}: LOUNGE ACCESS is DENIED`);
    }
};

// challenge 5
console.log("\n===== CHALLENGE 5 =====");
// Create let searchName = "Zanele"; and search through the attendee list. When the attendee is found, display their details and immediately stop searching

let searchName = "Zanele"

for (let attendee of attendees){

    if(attendee.name === searchName ){
              
        console.log(line);
        console.log("ATTENDEE FOUND");
        console.log(`Name: ${attendee.name}`);
        console.log(`Age: ${attendee.age}`);
        console.log(`Ticket: ${attendee.ticket}`);
        console.log(`Valid Ticket: ${attendee.hasTicket}`);
        console.log(line);
        break;
    }
};

// CHALLENGE 6
console.log("\n===== CHALLENGE 6 =====");
// continue skips the rest of the current pass through the loop and jumps straight to the next item it will check the person with no valid ticket and then skip to the next
for (let attendee of attendees){
    if(attendee.hasTicket === false){
        continue;
       
    } else {
        console.log(`Checking ${attendee.name}...`)
    } 
};

// challenge7
console.log("\n===== CHALLENGE 7 =====");
// rewarding customers based on spending
for(let attendee of attendees){
    if(attendee.spend >= 1000){
        console.log(`${attendee.name}: R200 FOOD VOUCHER`)
    }

    else if(attendee.spend >= 500){
        console.log(`${attendee.name}: R100 FOOD VOUCHER`)
    }
   
    else if(attendee.spend >= 300){
        console.log(`${attendee.name}: R50 FOOD VOUCHER`)
    }

    else if(attendee.spend < 300){
        console.log(`${attendee.name}: NO VOUCHER`)
    }
};
    





