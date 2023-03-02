let timeInfo = dayjs();
let timeDe = dayjs().format('HH');

// Prevent anything to start before HTML is fully loaded.
$(document).ready(function () {   
    $(".saveBtn").click(function(){ 
        // upon clicking on save button, gets the id of the parent of the saveBtn
        let saveTime = $(this).parent().attr("id");
        // upon clicking on save button, gets the value entered on the sibling, descriptions, value.
        let inputText = $(this).siblings(".description").val();
        // store the div id hour to the saveTime and value entered on the textarea to the inputText to the localStorage.
        localStorage.setItem(saveTime, inputText);
    })
    
    // change the background color of the textarea as time change.
    for(var i = 9; i < 18; i++){
        // i addes up as the for loop continues.
        if(timeDe > i){
             // if the timeDe is later than i, add class of past
            $(".time-block").eq(i-9).addClass("past");
            // if the timeDe is earlier than i, add class of future.
        } else if(timeDe < i){
            $(".time-block").eq(i-9).addClass("future");
            // else, add class of present.
        } else {
            $(".time-block").eq(i-9).addClass("present");
        }
    }

    // get all the elements with the class name row
    let getTimeText = $(".row");
    // GET the value from the localStorage and INPUT the value into the textarea with a MATCHING timeline.
    for(var i = 0; i < getTimeText.length; i++) {
        // get an id attributino within the length of the element with a class of row.
        let textValue = getTimeText.eq(i).attr("id");
        // get the saved text value from the localStorage
        let inputValue = localStorage.getItem(textValue);
        // from row 0 to the end, it targets the elements with the class description and inputs the value that is brought from the localStorage.
        getTimeText.eq(i).children(".description").val(inputValue);
    }

    // functino to display Today's date.
    var thisTime = timeInfo.format('dddd, MMMM D[th]')
    $('#currentDay').text(thisTime);
  });
  
