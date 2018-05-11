$(function(){
    $(".cake-form").on("submit", event => {
        event.preventDefault();

        var newCake = {
            cake_name: $("#cake").val().trim(),
            eaten: 0
        }

        $.ajax("/api/cakes", {
            type: "POST",
            data: newCake
        }).then( () => {
            console.log("Made new cake");
            location.reload();
        })
    });

    $(document).on("click", ".eat-it", event => {
        var id = event.target.dataset.id;
        var newCakeState = {
            eaten: 1
        }
        console.log(id);
        
        $.ajax("/api/cakes/" + id, {
            type: "PUT",
            data: newCakeState
        }).then( () => {
            location.reload();
        })
    });

    $(document).on("click", ".delete-it", event => {
        var id = event.target.dataset.id;
        console.log(id);
        
        $.ajax("/api/cakes/" + id, {
            type: "DELETE",
        }).then( () => {
            location.reload();
        })
    })

})