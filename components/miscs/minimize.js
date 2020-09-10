const placeholder = '/img/placeholder.jpg'
const path = `http://192.168.10.88:1341`;

const minimize = (obj, withUrl, highQuality) => {
    if(obj === undefined || obj === null) return placeholder
    if(obj.formats === undefined || obj.formats === null){
        if(obj.url === undefined || obj.url === null) return placeholder
        return withUrl ? path + obj.url : obj.url
    }
    if(highQuality){
        return withUrl ? path + obj.url : obj.url
    }
    else if(obj.formats.medium === undefined || obj.formats.medium === null){
        if(obj.formats.large === undefined || obj.formats.large === null){
            return withUrl ? path + obj.url : obj.url
        } else {return withUrl ? path + obj.formats.large.url : obj.formats.large.url}
    } else { return withUrl ? path + obj.formats.medium.url : obj.formats.medium.url }
}

export default minimize