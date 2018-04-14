import axios from 'axios';
var instance = axios.create({
    baseURL: 'http://dev.boshicloud.com',
    timeout: 60000,
    headers: {
        "X-DEVICE-TEMPCODE": mediPM.util.getLocalValue("deviceTempCode"),
        "X-DEVICE-TYPE": g_env.device
    }
});