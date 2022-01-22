const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 5;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 8;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 6;
            break;
        case 'sunday':
            return 5;
            break;
    }
}

// console.log(getSleepHours('monday') + getSleepHours('monday'));

const actualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
    ;

console.log(actualSleepHours());

function getIdealSleepHours() {
    let idealHours = 6.5;
    return idealHours * 7;
}

console.log(getIdealSleepHours());

const calculateDifference = () => {
    let SleepHours = actualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (SleepHours === idealSleepHours) {
        console.log('You had a perfect sleep');
    }
    else if (SleepHours > idealSleepHours) {
        console.log('You got more sleep than needed');
    }
    else if (SleepHours < idealSleepHours)
        console.log('You should get some rest');
}
calculateDifference();
