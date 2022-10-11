let currentIndex = 1

const persons = [
    {
        FirstName: "Han",
        LastName: "Solo"
    },
    {
        FirstName: "Darth",
        LastName: "Vader"
    },
    {
        FirstName: "Bubba",
        LastName: "Fett"
    },
    {
        FirstName: "Leia",
        LastName: "Organa"
    }
]



$(document).ready(function () {
    // Attach event to table when row is clicked. Change the current selected row and display update
    $(".table").on("click", "td", function () {
        var index = $(this).parent().index('tr');
        currentIndex = index

        DisplayCurrentSelection()
    });

    // Load the table
    let row_count = 1

    // Populate the track list table
    persons.forEach(function (person) {        
        let row = '<tr>'
        row += '<td>' + row_count + '</td>'
        row += '<td>' + person.FirstName + '</td>'
        row += '<td>' + person.LastName + '</td>'
        row += '</tr>'
        $('.table tr:last').after(row)

        row_count++
    })

    DisplayCurrentSelection()
});

function DisplayCurrentSelection() {
    let index = currentIndex - 1 // javascript arrays are 0 based
    let  display = "Selected Index: " + currentIndex
    display += "<br>" + persons[index].FirstName + " " + persons[index].LastName
    $("#selected").html(display)
}