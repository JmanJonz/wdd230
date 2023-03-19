const hiddenDate = document.querySelector("#hiddenDate");

const now = new Date();

const dateTimeString = now.toISOString();

hiddenDate.value = dateTimeString;