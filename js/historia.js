$("#historia-img").click(() => {
    $("#historia-img").animate({
                        "border-radius": "50%"
                    })
                      .fadeOut(1000)                     
                      .fadeIn(1000)
                      .animate({
                        "border-radius": "0px"
                      })
})