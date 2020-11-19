import {MenuContext} from '@/miscs/ContextMenuProvider'
import { useContext } from 'react';

const placeholder = '/img/placeholder.jpg'
const path = `http://admin-mn.tavanbogdproperty.mn`;

const minimize = (obj, quality) => {

    if(obj === undefined || obj === null) return placeholder
    if(obj.formats === undefined || obj.formats === null) return obj.url && CH(obj.url) || placeholder

    const {config} = useContext(MenuContext)    
    const formats = obj.formats

    if(config.width <= 768) {
        if(quality === 'large') return formats.small && CH(formats.small.url) || formats.medium && CH(formats.medium.url) || formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
        if(quality === 'medium') return formats.small && CH(formats.small.url) || formats.medium && CH(formats.medium.url) || formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
        if(quality === 'small') return formats.thumbnail && CH(formats.thumbnail.url) || formats.small && CH(formats.small.url) || formats.medium && CH(formats.medium.url) || formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
        if(quality === 'thumbnail') return formats.thumbnail && CH(formats.thumbnail.url) || formats.small && CH(formats.small.url) || formats.medium && CH(formats.medium.url) || formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
        return formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
    }

    if(quality === 'large') return formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
    if(quality === 'medium') return formats.medium && CH(formats.medium.url) || formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
    if(quality === 'small') return formats.small && CH(formats.small.url) || formats.medium && CH(formats.medium.url) || formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
    if(quality === 'thumbnail') return formats.thumbnail && CH(formats.thumbnail.url) || formats.small && CH(formats.small.url) || formats.medium && CH(formats.medium.url) || formats.large && CH(formats.large.url) || obj.url && CH(obj.url) || placeholder
    return obj.url && CH(obj.url) || placeholder
}

export default minimize

const CH = (url) => {
    if(url.includes('http')) return url
    return path + url
}