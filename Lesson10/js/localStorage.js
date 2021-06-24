const storedDate = new Intl.DateTimeFormat("en-US", { dateStyle: "short" }).format(date);
const showNumberOfDays = document.getElementById("different-days");
const firstVisitDate = localStorage.getItem("firstVisit");
const lastVisitDate = localStorage.getItem("lastVisit");
const diffFromFirstVisit = getNumberOfDays(firstVisitDate, storedDate);
const diffNumberOfDays = getNumberOfDays(lastVisitDate, storedDate);
// Check if a value of local storage I want to use exits or not.
if (!localStorage.getItem("firstVisit")) {
  showNumberOfDays.innerHTML = "This is your first time to visit this website!";
  // Store a data of when a user first visits this site
  localStorage.setItem("firstVisit", storedDate);
}

if (!localStorage.getItem("lastVisit")) {
  // Store a data of when a user last visits this site
  localStorage.setItem("lastVisit", storedDate);
} else {
  showNumberOfDays.innerHTML =
    `First visited on ${firstVisitDate} (${diffFromFirstVisit} days ago.)<br>` +
    `Last visited on ${lastVisitDate} (${diffNumberOfDays} days ago.)`;
}

// Get the number of days between two dates //
function getNumberOfDays(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  // Calculating the time difference between two dates in milliseconds
  const diffInTime = endDate.getTime() - startDate.getTime();
  //  Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));
  return diffInDays;
}

localStorage.setItem("lastVisit", storedDate);
