const logger = (message: string): void => { // void = no return
    console.log(message);
};

const throwError = (message: string): string => {
    if (!message){
        throw new Error(message); // never reaching past this if there isn't a message.
    };

    return message;

}
// never means we will never reach end of function execution, we come across the error and stop the function.