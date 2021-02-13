let workoutType = ""

$("#addingWorkout").on("click", function () {
    $.ajax({
        method: "POST",
        url: "/addworkout",
        data: Date.now()
    }).then(function (data) {
        console.log(data);
        $("#addExercise").removeClass("hide")
        console.log("success");
    })
})


$(".submitExercise").on("click", function (event) {
    event.preventDefault()
    let workoutData = {};
    if (workoutType === "cardio") {
        workoutData.type = "cardio";
        workoutData.name = $("#name").val().trim();
        workoutData.distance = Number($("#distance").val().trim());
        workoutData.duration = Number($("#duration").val().trim());
    } else if (workoutType === "resistance") {
        workoutData.type = "resistance";
        workoutData.name = $("#name").val().trim();
        workoutData.weight = Number($("#weight").val().trim());
        workoutData.sets = Number($("#sets").val().trim());
        workoutData.reps = Number($("#reps").val().trim());
        workoutData.duration = Number($("#duration").val().trim());
    }
    console.log(workoutData);
    $.ajax({
        method: "POST",
        url: "/addexercise",
        data: workoutData
    }).then(function (data) {
        console.log(data);
    })
})


$("select").change(function (event) {
    workoutType = event.target.value;
    console.log(workoutType);
    if (workoutType === "cardio") {
        $("#weight").addClass("hide");
        $("#reps").addClass("hide");
        $("#sets").addClass("hide");
        $("#distance").removeClass("hide");
    } else {
        $("#distance").addClass("hide");
        $("#weight").removeClass("hide");
        $("#reps").removeClass("hide");
        $("#sets").removeClass("hide");
    }
})