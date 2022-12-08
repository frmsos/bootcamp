const connectionNumberRequest =  document.getElementById("connectionNumberRequest");
const connectionsNumber = document.getElementById("connectionsNumber");
function clickAccept(userRequestID){
    const userRequestBox = document.getElementById(userRequestID);
    var connCounterRequest = parseInt(connectionNumberRequest.innerText);
    var connCounterConnections = parseInt(connectionsNumber.innerText);
    connCounterRequest++;
    connCounterConnections++;
    userRequestBox.remove();
    connectionNumberRequest.innerText = connCounterRequest;
    connectionsNumber.innerText = connCounterConnections;

}

function clickReject(userRequestID){
    const userRequestBox = document.getElementById(userRequestID);
    var connCounterRequest = parseInt(connectionNumberRequest.innerText);
    connCounterRequest++;
    userRequestBox.remove();
    connectionNumberRequest.innerText = connCounterRequest;
}

function clickEdit(){
    const username = document.getElementById("username");
    username.innerText = "Peter Parker";
}