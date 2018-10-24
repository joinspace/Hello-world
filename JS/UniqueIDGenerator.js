// This function will generate a unique id on virtual machine.
function generateUniqueId() {
    let id = Math.random().toString(36).substring(2)
                   + (new Date()).getTime().toString(36);
    return id;
}

console.log("unique id", generateUniqueId());