let totalDays = 1000;

// 1 year = 365 days (no leap year)
let years = Math.floor(totalDays / 365);
let remainingDays = totalDays % 365;

// Month days (no leap year)
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let months = 0;

// Calculate months
for (let i = 0; i < monthDays.length; i++) {
  if (remainingDays >= monthDays[i]) {
    remainingDays -= monthDays[i];
    months++;
  } else {
    break;
  }
}

// Remaining days
let days = remainingDays;

// Output
console.log("Total Days:", totalDays);
console.log("Years:", years);
console.log("Months:", months);
console.log("Days:", days);
