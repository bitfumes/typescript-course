"use strict";
// ENUM type: Javascript doesn't support enum
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuseday"] = 1] = "Tuseday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
    Weekdays[Weekdays["Saturday"] = 5] = "Saturday";
    Weekdays[Weekdays["Sunday"] = -1] = "Sunday";
})(Weekdays || (Weekdays = {}));
// console.log(Weekdays.Sunday);
// console.log(Weekdays[6]);
console.log(Weekdays);
