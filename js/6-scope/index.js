hello();


function scopeFTW() {
    {
        let a = 22;
    }

    console.log(a);
}

scopeFTW();

function hello() {
    // var message; declaration 'hoisted' here

    x = 44;
     // implied global -> JS sees the assignment and assumes you're trying 
     // to set a global variable SO IT MAKES ONE FOR YOU!!!11!
    var x;
    message = 'hello';

    {
        message = 'hello';
    }

    console.log("1st:", message);

    var message;

    console.log("2nd: ", message)
}