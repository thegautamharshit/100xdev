Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function updateClock() {
    const now = new Date();

    const hours24 = String(now.getHours());
    const minutes = String(now.getMinutes());
    const seconds = String(now.getSeconds());
    
    const time24 = `${hours24}:${minutes}:${seconds}`;
    
    const hours12 = now.getHours() % 12 || 12;
    const period = now.getHours() < 12 ? 'AM' : 'PM';
    const hours12Str = String(hours12);

    const time12 = `${hours12Str}:${minutes}:${seconds} ${period}`;

    console.clear();
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

setInterval(updateClock, 1000);
updateClock();
