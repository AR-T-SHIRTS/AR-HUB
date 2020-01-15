

(() =>{
    const storage = firebase.storage(),
    bucket = storage.ref(),
    imgMarker = bucket.child("img"),
    imgModel = bucket.child("img"),
    
    modelForm = document.getElementById("uploadModelForm"),
    markerForm = document.getElementById("uploadMarkerForm"),
    modelUploader = document.getElementById("uploadModel"),
    markerUploader = document.getElementById("uploadMarker"),
    outputModels = document.getElementById("outputModels")
    outputMarkers = document.getElementById("outputMarkers")
    
    outputMarkers.innerHTML = "";
    outputModels.innerHTML = "";

    modelUploader.addEventListener("change", e => {
        Array.from(e.target.files).forEach(file => {
            let uploadTask = imgModel.child(file.name).put(file)
            uploadTask.on("state_changed", data => {}, err =>{}, () => {
                let fileIMG = imgModel.child(file.name)
                fileIMG.getDownloadURL()
                .then(url => {
                    if (file.type.match('image.*')) {
                        outputModels.innerHTML += `
                        <img src="${url}" alt="model preview" style="max-width: 30%; height: auto;" class="img-fluid img-thumbnail m-1">   
                        `
                        alert("File Uploaded")
                    }
                    
                })
            })
        })
        modelForm.reset();
        
    })

    markerUploader.addEventListener("change", e => {
        Array.from(e.target.files).forEach(file => {
            let uploadTask = imgMarker.child(file.name).put(file)
            uploadTask.on("state_changed", data => {}, err =>{}, () => {
                let fileIMG = imgMarker.child(file.name)
                fileIMG.getDownloadURL()
                .then(url => {
                    if (file.type.match('image.*')) {
                        outputMarkers.innerHTML += `
                        <img src="${url}" alt="marker preview" style="max-width: 30%; height: auto;" class="img-fluid img-thumbnail m-1">   
                        `
                        alert("File Uploaded")

                    }
                })
            })
        })
        markerForm.reset();
    })
})();

