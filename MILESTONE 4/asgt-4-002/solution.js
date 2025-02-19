function calculateVAT(price) {
    
    if (typeof price !== "number") {
        return "Invalid";
    }

    if (price < 0 ) {
        return "Invalid";
    }

    let vatRate = 7.5;
    let totalPrice = (price * vatRate) / 100;
    return totalPrice; 
}

function validContact(contact){
    if (typeof contact !== "string") {
        return "Invalid";
    }

    if( (contact.length !== 11) || (contact.includes(' ')) ) {
        return false;
    }

    if ( (contact[0] !== "0") || (contact[1] !== "1")) {
        return false;
    }

    else {
        return true;
    }
}

function willSuccess(marks){

    if ( Array.isArray(marks) === false ) {
        return "Invalid";
    }
    

    let passed = 0;
    let failed = 0;

    for (m of marks) {
        if (m >= 50) {
            passed++;
        }

        else {
            failed++;
        }
    }

    if(passed > failed) {
        return true;
    }
    else {
        return false;
    }

}

function validProposal(person1, person2) {

    if ( (typeof person1 !== 'object') || (typeof person2 !== 'object')) {
        return "Invalid";
    }

    let gender1 = person1.gender;
    let gender2 = person2.gender;

    let age1 = person1.age;
    let age2 = person2.age;

    let ageDifferene = Math.abs(age1-age2);

    if(gender1 !== gender2) {
        if(ageDifferene <= 7) {
            return true;
        }

        else {
            return false;
        }
    }

    else {
        return false;
    }

}


function calculateSleepTime(times) {

    for (timeInSec of times) {
        if(typeof timeInSec !== "number") {
            return "Invalid";
        }
    }

    let totalTime = 0;

    for (timeInSec of times) {
        totalTime += timeInSec;
    }

    let hrs = parseInt(totalTime / 3600);
    totalTime = totalTime % 3600;
    let mnts = parseInt(totalTime / 60);
    let sec = parseInt(totalTime % 60);

    let timeObject = {
        hour: hrs,
        minute: mnts,
        second: sec,
    }

    return timeObject;
}

