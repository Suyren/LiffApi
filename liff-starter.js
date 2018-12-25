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
        console.log('button676');
        liff.sendMessages([{
            type: 'text',
            text: "You've successfully sent a message! Hooray!"
          },
          {
            "type": "template",
            "altText": "this is a image carousel template",
            "template": {
                "type": "image_carousel",
                "columns": [
                    {
                      "imageUrl": "https://public.nrao.edu/wp-content/uploads/2017/05/nrao17df04-a-1024x1024.jpg",
                      "action": {
                        "type": "uri",
                        "label": "View detail",
                        "uri": "http://example.com/page/222"
                      }
                    },
                    {
                      "imageUrl": "https://cdn.dribbble.com/users/15084/screenshots/702565/attachments/64916/Space_Ghost-iPad---1024x1024.jpg",
                      "action": {
                        "type": "uri",
                        "label": "Google",
                        "uri": "https://www.google.com/"
                      }
                    },
                    {
                      "imageUrl": "https://www.office.xerox.com/business-resources/1024x1024_wallpaper_tropical3.jpg",
                      "action": {
                        "type": "uri",
                        "label": "Line",
                        "uri": "https://line.me/zh-hant/"
                      }
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
    document.getElementById('sendmessagebuttonT').addEventListener('click', function () {
      console.log('test')
        liff.sendMessages([
          {
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
                "type": "carousel",
                "columns": [
                    {
                      "thumbnailImageUrl": "https://res.cloudinary.com/yww/image/upload/v1532274952/TAB/america-from-satellite-1024x1024.jpg",
                      "imageBackgroundColor": "#FFFFFF",
                      "title": "this is menu1",
                      "text": "description",
                      "defaultAction": {
                          type: "uri",
                          label: "Yahoo",
                          uri: "https://tw.yahoo.com/"
                      },
                      "actions": [
                          {
                              type: "uri",
                              label: "Line",
                              uri: "https://line.me/zh-hant/"
                          },
                          {
                              type: "uri",
                              label: "Twitch",
                              uri: "https://www.twitch.tv/"
                          },
                          {
                              type: "uri",
                              label: "Google",
                              uri: "https://www.google.com/"
                          }
                      ]
                    },
                    {
                      "thumbnailImageUrl": "https://www.office.xerox.com/business-resources/1024x1024_wallpaper_tropical5.jpg",
                      "imageBackgroundColor": "#000000",
                      "title": "this is menu2",
                      "text": "description",
                      "defaultAction": {
                          type: "uri",
                          label: "Google",
                          uri: "https://www.google.com/"
                      },
                      "actions": [
                          {
                              type: "uri",
                              label: "Yahoo",
                              uri: "https://tw.yahoo.com/"
                          },
                          {
                              type: "uri",
                              label: "Twitch",
                              uri: "https://www.twitch.tv/"
                          },
                          {
                              type: "uri",
                              label: "Line",
                              uri: "https://line.me/zh-hant/"
                          }
                      ]
                    }
                ],
                "imageAspectRatio": "rectangle",
                "imageSize": "cover"
            }
          },
          {
            type: "template",
            altText: "This is a buttons template",
            template: {
                type: "buttons",
                thumbnailImageUrl: "https://img.goipadwallpapers.com/2016/07/21/e8e462ab791ac099_1024x1024.jpg",
                imageAspectRatio: "rectangle",
                imageSize: "cover",
                imageBackgroundColor: "#FFFFFF",
                title: "Menu",
                text: "Please select",
                defaultAction: {
                    type: "uri",
                    label: "Google",
                    uri: "https://www.google.com/"
                },
                actions: [
                    {
                      type: "uri",
                      label: "Yahoo",
                      uri: "https://tw.yahoo.com/"
                    },
                    {
                      type: "uri",
                      label: "Twitch",
                      uri: "https://www.twitch.tv/"
                    },
                    {
                      type: "uri",
                      label: "Line",
                      uri: "https://line.me/zh-hant/"
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