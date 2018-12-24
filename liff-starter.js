window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;

    // openWindow call
    document.getElementById('openwindowbutton').addEventListener('click', function () {
        alert('openwindow');
        console.log('openwindow');
        liff.openWindow({
            url: 'https://line.me'
        });
    });

    // closeWindow call
    document.getElementById('closewindowbutton').addEventListener('click', function () {
        liff.closeWindow();
    });

    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        console.log('messageSend');
        liff.sendMessages([{
            type: 'text',
            text: "You've successfully sent a message! Hooray!"
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }, {
          "type": "image",
          "originalContentUrl": "https://free.com.tw/blog/wp-content/uploads/2014/08/Placekitten480-g.jpg",
          "previewImageUrl": "data:image/jpeg;base64,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"
      }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });

    //get profile call
    document.getElementById('getprofilebutton').addEventListener('click', function () {
        liff.getProfile().then(function (profile) {
            document.getElementById('useridprofilefield').textContent = profile.userId;
            document.getElementById('displaynamefield').textContent = profile.displayName;

            var profilePictureDiv = document.getElementById('profilepicturediv');
            if (profilePictureDiv.firstElementChild) {
                profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
            }
            var img = document.createElement('img');
            img.src = profile.pictureUrl;
            img.alt = "Profile Picture";
            profilePictureDiv.appendChild(img);

            document.getElementById('statusmessagefield').textContent = profile.statusMessage;
            toggleProfileData();
        }).catch(function (error) {
            window.alert("Error getting profile: " + error);
        });
    });
}

function toggleProfileData() {
    var elem = document.getElementById('profileinfo');
    if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}