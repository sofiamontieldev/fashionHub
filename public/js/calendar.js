var monthtext = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'];

function populatedropdown(dayfield, monthfield, yearfield) {
    var today = new Date();
    var dayfield = document.getElementById(dayfield);
    var monthfield = document.getElementById(monthfield);
    var yearfield = document.getElementById(yearfield);
    
    for (var i = 1; i <= 31; i++)
        dayfield.options[i] = new Option(i, i + 1);
    dayfield.options[today.getDate()] = new Option(today.getDate(), today.getDate(), true, true); //select today's day
    
    for (var m = 0; m < 12; m++)
        monthfield.options[m] = new Option(monthtext[m], monthtext[m]);
    monthfield.options[today.getMonth()] = new Option(monthtext[today.getMonth()], monthtext[today.getMonth()], true, true); //select today's month
    
    var thisyear = today.getFullYear();
    
    var i = 0;

    for (var y = thisyear; y >= 1960; y--) {
        yearfield.options[i++] = new Option(y, y)
    }
}

//populatedropdown(id_of_day_select, id_of_month_select, id_of_year_select)
window.onload = function () {
    populatedropdown("dayDropDown", "monthDropDown", "yearDropDown")
}
