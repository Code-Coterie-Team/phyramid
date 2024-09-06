function creatPyramid(number) {
    let star = "";
    let space ="";
    if (number > 0) {
      
        for (let i = 1; i <= number; i++) {
            space = " ".repeat(number - i);
            star = "#".repeat(i * 2 - 1);
            console.log(space + star + space);
        }
    } else {
        console.log("it is Negation")
    }
}

let num = 10;
creatPyramid(num);
