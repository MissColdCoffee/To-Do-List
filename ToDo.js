
// Click Add New Task Button.
$(document).ready(function(){
    $("#add-new-task").on('click', function(event){
        event.preventDefault(); //Prevent the default form submission behaviour
        const newInputGroup = $("<div>").addClass("input-group mb-3");
        const newInputGroupText = $("<div>").addClass("input-group-text");
        const newCheckboxInput = $("<input>").addClass("form-check-input mt-0").attr('type', 'checkbox');
        newInputGroupText.append(newCheckboxInput);
        const newTextInput = $("<input>").addClass("form-control").attr('type','text');
        const newDelButton = $("<button>").addClass("btn btn-delete").attr("id","del-btn").text("🗑");
        newInputGroup.append(newInputGroupText, newTextInput, newDelButton);
        $("#added-task").append(newInputGroup);
    });

    $(".btn-delete").on('click',function(){
        var choice = confirm("Do you want to delete this task?");
        if(choice){
            const InputGroupDel = $(this).parent();
            console.log(InputGroupDel);
            InputGroupDel.remove();
        }
    });

    var completedTask = 0
    $(".form-check-input").on('change', function(){
        const inputGroupTextChecked = $(this).parent();
        var textInput = inputGroupTextChecked.siblings(".form-control");
        if(textInput.val()===""){
            alert("You cannot delete undeclared task")
            $(this).prop("checked",false)
        }
        else{
            if($(this).prop("checked") == true) {
                $("#checked-Items").removeClass('hidden-content').addClass('show-content');
                const inputGroupChecked = $(this).parent().parent();
                // inputGroupChecked.remove();
                textInput.css("text-decoration","line-through");
                $("#completed-task").append(inputGroupChecked);
                completedTask += 1
            }
            else{
                const inputGroupUnchecked = $(this).parent().parent();
                // inputGroupUnchecked.remove();
                textInput.css("text-decoration","none");
                $("#added-task").append(inputGroupUnchecked);
                completedTask -= 1
                if(completedTask === 0){
                    $("#checked-Items").removeClass('show-content').addClass('hidden-content'); 
                }
            }

        }  
    })
});
