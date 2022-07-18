document.getElementById("so").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("nut").click();
    }
});

var count = 0



function calc() {
    var point = 0
    var temp = document.getElementById('so').value





    if(temp == '') {
        document.getElementById('chan-le').innerHTML = 'vui long nhap 1 so'
        document.getElementById('snt').innerHTML = ''
        document.getElementById('day_so').innerHTML = ''
    document.getElementById('lan-nhap').innerHTML = ''


        return 0
    }
    if(temp % 2 == 0) {
        document.getElementById('chan-le').innerHTML = temp + ' la so chan'
        document.getElementById('chan-le').style.color = 'black'
    }
    else if(temp %2 == 1) {
        document.getElementById('chan-le').innerHTML = temp + ' la so le'
        document.getElementById('chan-le').style.color = 'black'
    }

    else {
        document.getElementById('chan-le').innerHTML = temp + ' khong phai so nguyen'
        document.getElementById('chan-le').style.color = 'red'
        point = 1
    }

    function snt(a) {
        if(a < 2) {
            document.getElementById('snt').innerHTML = temp + ' khong phai so nguyen to'
            return 0
        }
        else if( a < 4) {
            document.getElementById('snt').innerHTML = temp + ' la so nguyen to'
            return 0
        }

        var l = Math.floor(Math.sqrt(temp)) + 1
        for(var i = 2; i < l; i++) {
            if (a % i == 0) {
                document.getElementById('snt').innerHTML = temp + ' khong phai so nguyen to'
                return 0
            }
        }
    
        document.getElementById('snt').innerHTML = temp + ' la nguyen to'
        return 0
    }

    function print(a) {
        for(var i = 1; i <= temp; i += 2) {
            document.getElementById('day_so').innerHTML += (i + ' ')
        }
    }
    

    if (point == 1) {
        return 0
    }
    else {
        snt(temp)

        document.getElementById('day_so').innerHTML = ''
        print(temp)
    }

    count += 1
    document.getElementById('lan-nhap').innerHTML = 'ban da nhap ' + count + ' lan'

}