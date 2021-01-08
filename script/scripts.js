$(document).ready( function( ){



  $(document).on( "click", ".item", function () {

    $(".item").removeClass("selected");

    $(this).addClass("selected");

    $(".ms_showcase_content").removeClass("active");

    // ---> leggo il valore di data-item
    // ---> cerco l'elemento carousel container che ha l'attributo data-item === data-item
    // --->  Quando ho la corrispondenza aggiungo la classe "active"


    var itemData = $(this).attr("data-item");

    $('.ms_showcase_content[data-item="' +  itemData +'"]').addClass("active");


  });

  function setupTypewriter(t) {
        var HTML = t.innerHTML;

        t.innerHTML = "";

        var cursorPosition = 0,
            tag = "",
            writingTag = false,
            tagOpen = false,
            typeSpeed = 10,
          tempTypeSpeed = 0;

        var type = function() {

            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }

            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                }
                else {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                }
                t.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
                writingTag = false;
                if (tagOpen) {
                    var newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }

            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }

        };

        return {
            type: type
        };
    }

    var typer = document.getElementById('typewriter');

    typewriter = setupTypewriter(typewriter);

    typewriter.type();

});
