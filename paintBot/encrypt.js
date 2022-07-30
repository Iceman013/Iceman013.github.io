var del = ["2me.5", "so-33", "6bBt,", "lTa_4", "f3n.4", "e8:8-"];
var ugrep = ["q",".","7","a","z","r","1","t","y","4","["]
//Paints, Materials, Money, Upgrades
//paint = [red, yellow, blue, white, black, green, purple, orange, lightr, lighty, lightb, darkr, darky, darkb, gray]
//materials = [red, yellow, blue, white, black]
function encrypt (p, ma, m, u){
    let pf = [];
    for (let i = 0; i < ma.length; i++){
        if (ma[i] != 0){
            pf.push(i);
        }
    }
    let uf = [];
    for (let i = 0; i < u.length; i++){
        uf.push(ugrep[u[i]]);
    }
    let d = del[pf.length];
    let output = d + 'lMe63' + numLen(u.length) + u.length + Math.round((m/(u.length+1))*100000)/100000 + 'lU6371' ;
    for (let i = 0; i < u.length; i++){
        output += "" + Math.floor(Math.random()*10);
    }
    for (let i = 0; i < u.length; i++){
        output += uf[i];
    }
    for (let i = 0; i < u.length; i++){
        output += "" + Math.floor(Math.random()*10);
    }
    output += d;
}

function reverse (string){
    out = ""
    for (let i = string.length-1; i>=0; i--){
        out += string.substring(i,i+1);
    }
    return out;
}

function numLen (num){
    let i = 1;
    while(Math.round(num/10)>.01){
        i++;
        num = num/10;
    }
    return i;
}

function decrypt(code){
    let d = code.substring(0,5);
    if (del.indexOf(d)==-1){
        console.log("error")
        return "err";
    }
    let sp = code.split(d);
    if (sp[1].indexOf('lU6371')==-1){
        console.log("error");
        return "err";
    }
    if ((sp[1].substring(sp[1].indexOf('lU6371'))).length != 6+3*(parseInt(sp[1].substring(6,6+parseInt(sp[1].substring(5,6)))))){
        console.log("error");
        return "err";
    }
    let money = (parseInt(sp[1].substring(6,6+parseInt(sp[1].substring(5,6))))+1)*(sp[1].substring(6+parseInt(sp[1].substring(5,6)), sp[1].indexOf('lU6371')))
    let upg = [];
    let uPrint = "Upgrade Indicies: "
    for (let i = 0; i<(parseInt(sp[1].substring(6,6+parseInt(sp[1].substring(5,6))))); i++){
        if(ugrep.indexOf(sp[1].substring(sp[1].indexOf('lU6371') + 10+i, sp[1].indexOf('lU6371') + 10+(i+1)))==-1){
            console.log("error");
            return "err";
        }
        upg.push(ugrep.indexOf(sp[1].substring(sp[1].indexOf('lU6371') + 10+i, sp[1].indexOf('lU6371') + 10+(i+1))))
        uPrint += ugrep.indexOf(sp[1].substring(sp[1].indexOf('lU6371') + 10+i, sp[1].indexOf('lU6371') + 10+(i+1))) + ", ";
    }
    uPrint = uPrint.substring(0,uPrint.length-2);
    console.log("Money: " + money);
    console.log(uPrint);
}