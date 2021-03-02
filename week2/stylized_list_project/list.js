var charactersName = ["Luke Skywalker", "C-3PO", "R2-D2", "Darth Vader", "Owen Lars", "Beru Whitesun lars", "R5-D4", "Biggs Darklighter",  "Obi-Wan Kenobi"];


/*var charList = document.getElementById("nameList")

for (var i = 0; i < charactersName.length; i++) {
    var newName = document.createElement("li")
    newName.textContent = charactersName[i]
    charList.body.append(ol)
}*/


var charList = document.getElementById("nameList")

for (var i = 0; i < charactersName.length; i++) {
    charList.innerHTML += "<li>" + charactersName[i] + "</li>"
}


