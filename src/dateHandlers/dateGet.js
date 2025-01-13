export default function dateGet(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // JavaScript months are 0-indexed
    const day = today.getDate();
    return `${month} - ${day} - ${year}`;
};