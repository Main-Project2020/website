curl -X POST -H "Authorization: key=AAAAE23AQyU:APA91bGNkkdPYqKlyWGvfOFvm8cJ2ju6nAksVCxrtknITDRB8q4oD3peXbV1DOlWyTVI4bVuJfxHBkHGhZWz6LSfXM1MMJ-tEv_BWD6Bw8jilLK_CfxziU8NLS9ImKykdv8Gg919woem" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "New Article",
    "body": "Firebase Cloud Messaging for Web using JavaScript",
    "icon": "alarm.png",
    "click_action": "http://rakibul.net/fcm-web-js"
  },
  "to": "e_uwyQlHlm9oZXS5cBCWAv:APA91bG02q1lNpJ5Mhm3EFqVP9_8lMKF2ji0MOsrjXEMc1EPVX9k5UVSfmxGxMHAUY9ptEMGKuqqNEdXhU5xjv2-s41qkBIRnuK90w3N_Ptb8rHUamenkSBjTikKukwIQtdQ9-ZnQTm1"
}' "https://fcm.googleapis.com/fcm/send"