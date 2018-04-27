"use strict";

$(document).ready(function(){
    loadUsers();
});


function loadUsers() {
    $.getJSON( "https://jsonplaceholder.typicode.com/users")
        .done(function( data ) {
            var table = $(document.getElementsByClassName("userInfoTable"));
            $.each( data, function( i, item ) {
                let row = $('<tr>').addClass('row');
                let todosBtn = $('<button>').addClass("todoButton").text("View Todos");
                todosBtn.click(toggleTodos);
                let albumsBtn = $('<button>').addClass("albumButton").text("View Albums");
                albumsBtn.click(toggleAlbums);
                row.append($("<td>").text(item["name"]));
                row.append($("<td>").text(item["email"]));
                row.append($("<td>").text(item["company"]["name"]));
                row.attr("id", item["id"]);
                row.append(todosBtn);
				row.append("<br>");
                row.append(albumsBtn);
                table.append(row)
            })
    });
}


function toggleTodos(event) {
    let clickedElement = event.target;
    let visible = $(clickedElement).text() === "View Todos";

    let id = $(clickedElement).parent().attr("id");

    let table = $(document.getElementsByClassName("dataTable"));

    let tableSize = $('#dataTable tr').length;

    let buttons = $(document.getElementsByClassName("albumButton"));
    [].forEach.call(buttons, function (btn) {
        $(btn).text("View Albums")
    });
    if (!visible) {
        table.empty();
        let buttons = $(document.getElementsByClassName("todoButton"));
        [].forEach.call(buttons, function (btn) {
            $(btn).text("View Todos")
        });
        return
    }
    if (tableSize > 0) {
        table.empty();
        let buttons = $(document.getElementsByClassName("todoButton"));
        [].forEach.call(buttons, function (btn) {
            if (btn != clickedElement) {
                $(btn).text("View Todos");
            }
        });
    }
        $(clickedElement).text(visible ? "Hide Todos" : "View Todos");

        let row = $('<tr>').addClass('row');
        table.append(row);
        todosFor(id);

    }

function toggleAlbums(event) {
    let clickedElement = event.target;

    let visible = $(clickedElement).text() === "View Albums";

    let buttons = $(document.getElementsByClassName("todoButton"));
    [].forEach.call(buttons, function (btn) {
        $(btn).text("View Todos")
    });

    let id = $(clickedElement).parent().attr("id");

    let table = $(document.getElementsByClassName("dataTable"));

    let tableSize = $('#dataTable tr').length;

    if (!visible) {
        table.empty();
        let buttons = $(document.getElementsByClassName("albumButton"));
        [].forEach.call(buttons, function (btn) {
            $(btn).text("View Albums")
        });
        return
    }
    if (tableSize > 0) {
        table.empty();
        let buttons = $(document.getElementsByClassName("albumButton"));
        [].forEach.call(buttons, function (btn) {
            if (btn != clickedElement) {
                $(btn).text("View Albums");
            }
        });
    }
    $(clickedElement).text(visible ? "Hide Albums" : "View Albums");

    let row = $('<tr>').addClass('row');
    table.append(row);
    albumsFor(id);
}

function todosFor(userID) {
    userID = userID.toString();
    $.getJSON( `https://jsonplaceholder.typicode.com/todos?userId=${userID}`)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                let table = $(document.getElementsByClassName("dataTable"));
                let row = $('<tr>').addClass('row');
                row.append($("<td>").text(item["title"]));
                if (Boolean(item["completed"])) {
                    row.append($("<i class=\"far fa-thumbs-up\"></i>")).addClass("completed");
                } else {
                    row.addClass("completed").append($("<i class=\"far fa-thumbs-down\"></i>"));
                }

                table.append(row);
            })
        });
}

function albumsFor(userID) {
    userID = userID.toString();
    $.getJSON( `https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                let table = $(document.getElementsByClassName("dataTable"));
                let row = $('<tr>').addClass('row');
                row.append($("<td>").text(item["title"]));
                table.append(row);
            })
        });
}