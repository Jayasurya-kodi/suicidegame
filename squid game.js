b = ['br', 'nbr']
a = []
for (i = 1; i < 20;) {

    a[i] = b[Math.floor(Math.random() * b.length)];
    if (a[i] == 'br') {
        a[i + 1] = 'nbr'
    }
    else if (a[i] == 'nbr') {
        a[i + 1] = 'br'
    }
    i = i + 2
}
console.log(a)
p = 0
function L() {
    if (p <= 20) {
        if (p == 0) {
            p = p + 1
        }
        else if (p % 2 == 0) {
            p = p + 1
        }
        else {
            p = p + 2
        }
        if (a[p] == 'br') {
            
            document.getElementById(p).style.backgroundColor = 'red'
            document.getElementById(p).style.borderColor = 'whitesmoke'
            document.getElementById(p).style.borderWidth = '6px'
            document.getElementById('p21').innerHTML="PLAYER 456 DEAD"
                document.getElementById('left').disabled=true
                document.getElementById('right').disabled=true
                for(i=1;i<=20;i++){
                    if(a[i]=='br'){
                    document.getElementById(i).value = 'X'
                    document.getElementById(i).style.backgroundColor = 'red'
                    document.getElementById(i).style.borderColor = 'whitesmoke'
                document.getElementById(i).style.borderWidth = '6px'
                    }
                    else{
                        document.getElementById(i).value = 'O'
                        document.getElementById(i).style.backgroundColor = 'rgb(162, 223, 223)'
                    document.getElementById(i).style.borderColor = 'teal'
                document.getElementById(i).style.borderWidth = '6px'
                    }
                }
        }
        else {
            document.getElementById(p).style.backgroundColor = 'rgb(162, 223, 223)'
            document.getElementById(p).style.borderColor = 'teal'
            document.getElementById(p).style.borderWidth = '6px'
        }
    }
    if (p > 20) {
        
        document.getElementById('p21').innerHTML="PLAYER 456 WIN"
    }
}
function R() {
    if (p <= 20) {
        if (p == 19 || p == 20) {
            p = 21
        }
        else {
            if (p == 0) {
                p = p + 2
            }
            else if (p % 2 == 0 && p != 20) {
                p = p + 2
            }
            else {
                p = p + 3
            }
            if (a[p] == 'br') {
                document.getElementById(p).style.backgroundColor = 'red'
                document.getElementById(p).style.borderColor = 'whitesmoke'
                document.getElementById(p).style.borderWidth = '6px'
                document.getElementById('p21').innerHTML="PLAYER 456 DEAD"
                document.getElementById('right').disabled=true
                document.getElementById('left').disabled=true
                for(i=1;i<=20;i++){
                    if(a[i]=='br'){
                        document.getElementById(i).style.backgroundColor = 'red'
                    document.getElementById(i).style.borderColor = 'whitesmoke'
                document.getElementById(i).style.borderWidth = '6px'
                    document.getElementById(i).value = 'X'
                    }
                    else{
                        document.getElementById(i).value = 'O'
                        document.getElementById(i).style.backgroundColor = 'rgb(162, 223, 223)'
                    document.getElementById(i).style.borderColor = 'teal'
                document.getElementById(i).style.borderWidth = '6px'
                    }
                }
            }
            else {
                document.getElementById(p).style.backgroundColor = 'rgb(162, 223, 223)'
                document.getElementById(p).style.borderColor = 'teal'
                document.getElementById(p).style.borderWidth = '6px'
            }
        }
    }
    if (p > 20) {
        document.getElementById('p21').innerHTML="PLAYER 456 WIN"
    }
}
function re(){
    location.reload();
}
// curr pos =0
    // left => +1
    // right => +2
// curr !=0 && curr is odd
    // left => +2
    // right => +3
// else
    // left => +1
    // right => +2