const subscriber = {
    next: function(value) {
        console.log(value);
    },
    complete: function() {
        console.log('complete!')
    },
    error: function(error) {
        console.log(error)
    }
};

export {
    subscriber,
}