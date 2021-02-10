$("#addWorkout").on("click", function () {
    $.ajax({
        method: "POST",
        url: "/addworkout",
        data: Date.now()
    }).then(function (data) {
        console.log(data);
        $("#addExercise").removeClass("hide")
    })
})

// $("#addExercise").on("click" function () {
//     $.ajax({

//     })
// })