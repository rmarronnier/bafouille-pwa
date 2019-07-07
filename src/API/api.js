import { API_URL } from "@/API/config";

export function ApiService(action = "", body = null) {

var ressource, method


    switch (action) {

        case "signin":
        ressource = "session"
        method = "POST"
            break;

        case "register":
        ressource = "registration"
        method = "POST"    
            break;

        case "logout":
        ressource = "signout"
        method = "GET"    
            break;

        case "changebody":
        ressource = "write"
        method = "PATCH"
            break;

        case "getprofiles":
        ressource = "profiles"
        method = "GET"
            break;

        case "reachout":
        ressource = "reach"
        method = "POST"
            break;

        case "blockout":
        ressource = "blockout"
        method = "POST"
            break;

        case "getpairs":
        ressource = "pairs"
        method = "GET"
            break;

        case "postmessage":
        ressource = "pair"
        method = "POST"
            break;

        case "getletters":
        ressource = "letters"
        method = "GET"
            break;

        case "getlettersbyreadability":
        ressource = "letters/readability"
        method = "GET"
            break;

        case "getlettersbysentiment":
        ressource = "letters/sentiment"
        method = "GET"
            break;

        default:
        ressource = "me"
        method = "GET"
            break;
    }

return fetch(API_URL.concat(ressource), {
    credentials: 'include',
method: method,
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: body})

}

export default ApiService;
