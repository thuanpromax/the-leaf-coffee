function show_menu(){
    var x = document.getElementById('show_menu').style.display
    if (x = 'none'){
        document.getElementById('show_menu').style.display = "block"
    }
    else if(x = "block") {
        document.getElementById('show_menu').style.display = 'none'
    }
}
