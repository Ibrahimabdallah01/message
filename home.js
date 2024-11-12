(eNumber = document.querySelector(".phonenumber")),
(message = document.querySelector(".message")),
(btnsend = document.querySelector(".btnsend")),
(showMEssage = document.querySelector(".showmessage"));

btnsend.addEventListener("click", () => {
    //sms section
    const myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        "App fe97fdca80de0d38a8cd2773564dd0ec-517c88b0-b959-4748-bda8-2b9c92e09d71"
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");

    const newJSON = JSON.stringify({
        messages: [{
            destinations: [{
                to: phonenumber.value,
            }, ],
            from: "Ibrahim CodeCraft",
            text: message.value,
        }, ],
    });

    const requestOptions = {
        method: "POST",
        Headers: myHeaders,
        body: newJSON,
        redirect: "follow",
    };

    showMessage.innerHTML = "SMS message sent";

    fetch("https://api.infobip.com/2fa/2/applications", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
});

// const myHeaders = new Headers();
// myHeaders.append("Authorization", "App fe97fdca80de0d38a8cd2773564dd0ec-517c88b0-b959-4748-bda8-2b9c92e09d71");
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Accept", "application/json");

// const raw = JSON.stringify({
//     "name": "2fa test application",
//     "enabled": true,
//     "configuration": {
//         "pinAttempts": 10,
//         "allowMultiplePinVerifications": true,
//         "pinTimeToLive": "15m",
//         "verifyPinLimit": "1/3s",
//         "sendPinPerApplicationLimit": "100/1d",
//         "sendPinPerPhoneNumberLimit": "10/1d"
//     }
// });

// const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
// };

// fetch("https://api.infobip.com/2fa/2/applications", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));