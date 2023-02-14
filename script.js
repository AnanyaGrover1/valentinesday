function changeEnvelope(e) {
    var envelope = document.getElementById(e.id)
    if(envelope.className == "close"){
        envelope.classList.add("open");
        envelope.classList.remove("close");
    }
    else{
        envelope.classList.add("close");
        envelope.classList.remove("open");
    }
}