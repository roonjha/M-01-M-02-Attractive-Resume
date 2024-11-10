document.addEventListener('DOMContentLoaded', function() {
    var uploadBtn = document.getElementById('upload-btn');
    var uploadInput = document.getElementById('upload-input');
    var profilePic = document.getElementById('profile-pic');

    if (!uploadBtn || !uploadInput || !profilePic) {
        console.error('One or more elements not found. Check your HTML IDs.');
        return;
    }

    uploadBtn.addEventListener('click', function() {
        uploadInput.click();
    });

    uploadInput.addEventListener('change', function(event) {
        var file = event.target.files && event.target.files[0];
        
        if (file) {
            var reader = new FileReader();
            reader.onload = function(e) {
                if (e.target && e.target.result) {
                    profilePic.src = e.target.result;
                }
            };
            reader.readAsDataURL(file);
        }
    });

    console.log('Image upload script initialized');
});