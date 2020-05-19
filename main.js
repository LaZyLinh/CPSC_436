let jsonObj = '["This is message number one!", "This is another message!", "I love cats!", ' +
    '"Could probably die for them", "How do people come up with messages...?"]';
let msgList = JSON.parse(jsonObj);

function drawList() {
    const topPanel = document.getElementById("topPanel");
    for (const msg of msgList) {
        let newMsgBox = document.createElement("div");   // Create a <button> element
        newMsgBox.innerHTML = msg;
        newMsgBox.id = msg;
        newMsgBox.classList.add("msg");					// add css class for position/style// add onclick functionality
        topPanel.appendChild(newMsgBox);
    }
}

function clearList() {
    const topPanel = document.getElementById("topPanel");
    for (const msg of msgList) {
        if (document.getElementById(msg)) {
            topPanel.removeChild(document.getElementById(msg));
        }
    }
    msgList = [];

}

function addMsg() {
    let newMsg = document.getElementById("mainText").value;
    const topPanel = document.getElementById("topPanel");
    if (newMsg === "") {return;}
    msgList.push(newMsg);
    let newMsgBox = document.createElement("div");   // Create a <button> element
    newMsgBox.innerHTML = newMsg;
    newMsgBox.id = newMsg;
    newMsgBox.classList.add("msg");
    topPanel.appendChild(newMsgBox);
    topPanel.scrollTop = topPanel.scrollHeight;
}

function eraseText() {
    document.getElementById("mainText").value = "";
}