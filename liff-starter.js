window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
        const userId = data.context.userId;
    });
};

function initializeApp(data) {
    document.getElementById('languagefield').textContent = data.language;
    document.getElementById('viewtypefield').textContent = data.context.viewType;
    document.getElementById('useridfield').textContent = data.context.userId;
    document.getElementById('utouidfield').textContent = data.context.utouId;
    document.getElementById('roomidfield').textContent = data.context.roomId;
    document.getElementById('groupidfield').textContent = data.context.groupId;
    console.log(data)
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
        console.log('button666');
        liff.sendMessages([{
            type: 'text',
            text: "You've successfully sent a message! Hooray!"
          }, {
            "type": "video",
            "originalContentUrl": "https://example.com/original.mp4",
            "previewImageUrl": "https://example.com/preview.jpg"
          }, {
            "type": "audio",
            "originalContentUrl": "https://example.com/original.m4a",
            "duration": 60000
          }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
    document.getElementById('sendmessagebuttonT').addEventListener('click', function () {
      console.log('test')
        liff.sendMessages([
          {
            type: "template",
            template: {
              type: "confirm",
              text: "Are you sure?",
              actions: [
                {
                  type: "uri",
                  label: "Google",
                  uri: "https://www.google.com/"
                },
                {
                  type: "uri",
                  label: "Youtube",
                  uri: "https://www.youtube.com/"
                }
              ]
            }
          },
          {
            "type": "template",
            "altText": "This is a buttons template",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://img.goipadwallpapers.com/2016/07/21/e8e462ab791ac099_1024x1024.jpg",
                "imageAspectRatio": "rectangle",
                "imageSize": "cover",
                "imageBackgroundColor": "#FFFFFF",
                "title": "Menu",
                "text": "Please select",
                "defaultAction": {
                    "type": "uri",
                    "label": "Google",
                    "uri": "https://www.google.com/"
                },
                "actions": [
                    {
                      "type": "uri",
                      "label": "Yahoo",
                      "uri": "https://tw.yahoo.com/"
                    },
                    {
                      "type": "uri",
                      "label": "Twitch",
                      "uri": "https://www.twitch.tv/"
                    },
                    {
                      "type": "uri",
                      "label": "Line",
                      "uri": "https://line.me/zh-hant/"
                    }
                ]
            }
          }
        ]).then(function () {
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