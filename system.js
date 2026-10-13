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

console.log("\n===== CHALLENGE 2 =====");
let success = "ENTRY APPROVED";
let declined = "ENTRY DENIED";
let underAge = "UNDER 18";
let ticketCheck = "NO VALID TICKET";


for (let attendee of attendees )
if(attendee.age >= 18 && attendee.hasTicket === true) {
    console.log(`${attendee.name}: ${success}`);

    }else if(attendee.age < 18 && !attendee.hasTicket) {
        console.log(`${attendee.name}: ${declined}: ${ticketCheck}`);

    }else if(attendee.age < 18 ) {
        console.log(`${attendee.name}: ${declined}: ${underAge}`);

    }else{
        console.log(`${attendee.name}: ${declined}: YOU ARE ${underAge} AND YOU HAVE ${ticketCheck} `);
}