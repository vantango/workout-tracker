$("#addingWorkout").on("click", function () {
    $.ajax({
        method: "POST",
        url: "/addworkout",
        data: Date.now()
    }).then(function (data) {
        console.log(data);
        $("#addExercise").toggleClass("hide")
        console.log("success");
    })
})

$("#addExercise").on("click", function () {
    $.ajax({
        method: "POST",
        url: "/addexercise",
    }).then(function (data) {
        console.log(data);
    })
})

// $(".submitExercise").on("click", function () {
//     $.ajax({
//         method: "POST"
//     })
// })