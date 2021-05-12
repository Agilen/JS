var n;
while (true) {
    while (true) {

        n = prompt("Enter the number")

        if (Number.isInteger(n) || n >= 0) {
            let k = 0;
            let str = "";
            for (let i = 0; i <= n; i++) {

                if (i % 5 == 0 && i != 0) {
                    str += i + " "
                    k++
                }


            }



            if (k == 0) {
                alert("Sorry, no numbers")
            }
            else {
                console.log(str)
                break;
            }
        }
        else {
            alert("Sorry, wrong number")
        }

    }

    if (confirm("are u ready for sambo")) {
        var m, n
        while (true) {


            m = prompt("enter M")
            m = parseInt(m);
            n = prompt("enter N")
            n = parseInt(n);
            if (Number.isInteger(m) && Number.isInteger(n) && n > m) {
                let str = ""

                nextPrime:
                for (let i = 2; i <= n; i++) { // Для всех i...

                    for (let j = 2; j < i; j++) { // проверить, делится ли число..
                        if (i % j == 0) continue nextPrime; // не подходит, берём следующее
                    }

                    str += i + " "; // простое число
                }
                console.log(str)
                break;
            }
            else {
                alert("try again")
            }
        }
    }
    else {
        alert("ok, see u next time")
    }
}
