let workoutType = ""

$("#addingWorkout").on("click", function () {
    $.ajax({
        method: "POST",
        url: "/addworkout",
        data: Date.now()
    }).then(function (data) {
        console.log(data);
        $("#addExercise").removeClass("hide")
        $("#exerciseInput").removeClass("hide")
        $("#prevWorkout").addClass("hide")
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
        $(".exercise-weight").addClass("hide");
        $(".exercise-reps").addClass("hide");
        $(".exercise-sets").addClass("hide");
        $(".exercise-distance").removeClass("hide");
    } else {
        $(".exercise-distance").addClass("hide");
        $(".exercise-weight").removeClass("hide");
        $(".exercise-reps").removeClass("hide");
        $(".exercise-sets").removeClass("hide");
    }
})

$("#previousWorkout").on("click", function (event) {
    event.preventDefault()
    $.ajax({
        method: "GET",
        url: "/previousworkout"
    }).then(function (data) {
        console.log(data);
        if (data.length > 0) {
            const latestWorkoutId = data[0]._id
            $("#addExercise").removeClass("hide")
            $("#exerciseInput").removeClass("hide")
            $("#prevWorkout").removeClass("hide")
            console.log(latestWorkoutId);
            // Appending most recent workout ID to address bar
            // location.search = "?id=" + latestWorkoutId
        }


    })
})