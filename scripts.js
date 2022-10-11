// Use this variable to rack which row in the table is currently selected
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
    },{
        FirstName: "Luke",
        LastName: "Skywalker"
    },
    {
        FirstName: "Leia",
        LastName: "Organa"
    }
]

$(document).ready(function () {
    //
    // Attach click event to table when row is clicked. 
    // Change the current selected row (currentIndex variable) and display current row to user
    //
    $(".table").on("click", "td", function () {
        var index = $(this).parent().index('tr');
        currentIndex = index

        DisplayCurrentSelection()
    });

    //
    // Load the table
    //
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

// Display info for the currentIndex
function DisplayCurrentSelection() {
    let index = currentIndex - 1 // javascript arrays are 0 based
 
    let  display = "Selected Index: " + currentIndex
    display += "<br>" + persons[index].FirstName + " " + persons[index].LastName
 
    $("#selected").html(display)

    // Style current row in playlist
    $("tr").removeClass() 

    $("tr:eq('" + currentIndex + "')").addClass('selected-row')
}