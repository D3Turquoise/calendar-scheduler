var currentDate = moment().format("DD-MM-YYYY");
console.log(currentDate);

var currentDayEl = $(currentDay);
currentDayEl.text(currentDate);
 
     var textAreas = $('.description')
     console.log(textAreas)

     textAreas.each(function(){
        var textHour = parseInt(this.id.split("text")[1]);
        var currentHour = parseInt(moment().format("H"));
        var currentHour = 13;

        if(textHour < currentHour) {
            $(this).addClass("past")
        }

        if(textHour > currentHour) {
            $(this).addClass("future")
        }

        if(textHour == currentHour) {
            $(this).addClass("present")
        }
     })

    var saveButtons = $(".saveBtn");

    function saveToStorage () {
        var targetBtn = $(this);
        var targetTextArea = targetBtn.siblings("textarea");

        var textToSave = targetTextArea.val();
        var textId = targetTextArea.attr("id");

        localStorage.setItem(textId, textToSave)
    }

    saveButtons.on("click", saveToStorage)

        textAreas.each(function(){
            var textId = this.id;
            var savedText = localStorage.getItem(textId);

            $(this).val(savedText)
        })
