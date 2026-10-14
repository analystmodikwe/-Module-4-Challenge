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
    
// challenge8
console.log("\n===== CHALLENGE 8 =====");
// Calculating the total attendees in the queue, valid tickets, invalid tickets, under-18 attendees,
// General ticket holders, VIP ticket holders, total amount spent, average amount spent per
// attendee, and highest-spending attendee.

let totalAttendees =0;
let validTickets = 0;
let invalidTickets = 0;
let under18 = 0;
let vipCount = 0;
let generalCount = 0;
let totalSpend = 0;

for (let attendee of attendees) {
    totalAttendees ++; 
   
    if(attendee.hasTicket === true){
        validTickets ++;      
    } 

    else if(attendee.hasTicket === false) {
        invalidTickets ++;
    }

    if(attendee.age < 18) {
        under18 ++;
    }

    if(attendee.ticket === "VIP"){
        vipCount ++;
    }else{
        generalCount ++;
    }

    totalSpend += attendee.spend   
}
// calculating the average per attendee
let averageAmount = totalSpend / totalAttendees

// calculating highest spending attendee
let highestSpender = attendees[0];
for (let attendee of attendees) {
    if (attendee.spend > highestSpender.spend){
        highestSpender = attendee
    }
}

// consolelogs
console.log(`totalAttendees: ${totalAttendees}`);
console.log(`validTickets: ${validTickets}`);
console.log(`invalidTickets: ${invalidTickets}`);
console.log(`vipCount: ${vipCount}`);
console.log(`average amount spent per attendee: ${ averageAmount}`);
console.log(`highest Spending attendee: ${highestSpender.name}`);


// challenge9
console.log("\n===== CHALLENGE 9 =====");

// Determining the attendee who has spent the most money automatically. starting with let
// biggestSpender = attendees[0]; and compare attendees while looping. If spending values
// change, the correct person must still be identified
let biggestSpender = attendees[0];
for (let attendee of attendees) {
    if (attendee.spend > biggestSpender.spend){
        biggestSpender = attendee
    }
}
console.log (" ===== TOP CUSTOMER =====");
console.log(`NAME: ${biggestSpender.name}`);
console.log(`AMOUNT SPENT: ${biggestSpender.spend}`);
console.log("REWARD: BACKSTAGE UPGRADE");

// challenge 10
console.log("\n===== CHALLENGE 10 =====");
let capacity = 5;
let peopleInside = 0;

// . Process attendees one at a time. Only attendees who are 18 or older AND
// have a valid ticket should be admitted. Every successful entry increments peopleInside. When
// peopleInside equals capacity, display VENUE FULL and stop processing the queue using
// break.
for (let attendee of attendees){
    if(attendee.age >= 18 && attendee.hasTicket === "true"){
        console.log(`${attendee.name} entered`)
    }
    peopleInside ++;
    console.log(`People inside: ${peopleInside} / 5`);

    if(peopleInside === capacity){
        console.log("VANUE FULL");
        break;
    }
};
 
// challenge 11
console.log("\n===== CHALLENGE 11 =====");
// Create a countdown from 10 minutes to 1 minute using a loop. At 5 minutes display WARNING:
// LAST ENTRY HAS ENDED. At 2 minutes display PLEASE PROCEED TO THE EXIT. After the
// countdown display FESTIVAL CLOSED

for(let min = 10; min >=1; min --) {
    console.log(`${min} minutes remaining`);

    if(min <= 5){
        console.log("WARNING: LAST ENTRY HAS ENDED. ")
    }
    
    if(min <= 2){
        console.log("PLEASE PROCEED TO THE EXIT.")
    }
};
console.log("FESTIVAL CLOSED.");

// final challenge 
console.log("\n===== FINAL CHALLENGE =====");


// let day = 2;
// switch (day) {
// case 1: console.log("Monday"); break;
// case 2: console.log("Tuesday"); break;
// case 3: console.log("Wednesday"); break;
// default: console.log("Invalid day");
let option = 2;
console.log(line);
console.log("FESTIVAL CONTROL");
console.log(line);
console.log("1 - View Attendee Queue");
console.log("2 - Process Entry");
console.log("3 - View VIP Guests");
console.log("4 - View Denied Attendees");
console.log("5 - View Festival Statistics");
console.log("6 - Find Biggest Spender");
console.log("7 - Close Festival");
console.log(line);

switch (option){
    case 1: console.log("- View Attendee Queue"); break;
    case 2: console.log("- Process Entry"); break;
}
