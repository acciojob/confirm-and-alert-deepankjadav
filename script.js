//your JS code here. If required.
function confirmAction() {
    let proceed = confirm("Do you want to proceed?");
    if (proceed) {
        alert("You clicked OK. Proceeding...");
    } else {
        alert("You clicked Cancel. Exiting...");
    }
}