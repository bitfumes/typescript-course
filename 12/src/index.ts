// ENUM type: Javascript doesn't support enum

enum Weekdays {
    Monday = 0,
    Tuseday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday = Weekdays.Monday - 1
}
// console.log(Weekdays.Sunday);
// console.log(Weekdays[6]);

console.log(Weekdays);
