const callback = (myFunction) => {
    myFunction();
    console.log('I am a callback')
}
callback(() => {
    console.log('No itsa me')
})