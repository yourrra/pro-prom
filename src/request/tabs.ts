import axios from "axios";

export type TabsShort = {
    "uuid":string, 
    "name": string,
    "maxPerson": number,
    "currentPerson": number,
    "timestamp": number,
    "finalSum": number,
    "currentSum": number,
    "shortDescription": string,
    "minContributionAmount": number,
    "header": string,
    "productUuid": string,
    "userCreaterUuid": string,
    "imgUrl": string

}
export async function getTabsShortList<T>(){
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
    const res = await axios.get<T>('http://192.168.1.94:3000/getTabs')
    return res.data
}