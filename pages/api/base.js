import Axios from "axios";

export default async (req, res) => {
    const cookies = req.headers.cookie.split(";")
    const findLanguage = cookies.find(el=>el.includes('tb-lang'))
    const language = findLanguage && findLanguage.replace(/ /g, '').split("=")[1] || 'mn';
    
    if (req.method === "POST") {

        if(language === 'mn'){
            let response = await Axios.post('http://admin-mn.tavanbogdproperty.mn/graphql', req.body);
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            return res.end(JSON.stringify({data: response.data.data}))
        }
        else{
            let response = await Axios.post('http://admin-mn.tavanbogdproperty.mn/graphql', req.body);
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            return res.end(JSON.stringify({data: response.data.data}))
        }

    } else {
        // Handle any other HTTP method
    }
};
