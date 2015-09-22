import platform from "steal-platform";

let baseUrl = '';

if(platform.isCordova || platform.isNW) {
  baseUrl = 'http://donejs-chat.herokuapp.com';
}

export default baseUrl;
