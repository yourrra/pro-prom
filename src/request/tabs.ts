import axios from "axios";


export async function getTabsShortList(){
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
    const res = await axios.get('http://192.168.1.94:3000/')
    return res
}