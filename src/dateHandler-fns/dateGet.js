export default function dateGet(){
    const today = new Date(); // Creates a new date object for today
    const year = today.getFullYear(); // Gets the year in yyyy format
    const month = today.getMonth() + 1; // JavaScript months are 0-indexed so get the months but add 1 so that it is the proper month
    const day = today.getDate();// Gets the day it is formated dd
    return `${month} - ${day} - ${year}`; // Returns the date in string format mm-dd-yyyy
};