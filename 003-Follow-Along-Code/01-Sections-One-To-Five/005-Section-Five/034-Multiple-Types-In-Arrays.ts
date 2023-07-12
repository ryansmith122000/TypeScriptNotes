// Flexible Types

const importantDates: (Date | string)[]  = [new Date(), '2030-10-10'] // date and string types.

importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(2) // wrong type, will get an error