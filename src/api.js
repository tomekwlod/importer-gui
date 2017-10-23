
import 'isomorphic-fetch';

const address = 'http://127.0.0.1:4444'

let tool; // if we want to use tool outside, it needs to be defined
export default tool = (url, options) => {
    if (!/^https?:\/\//.test(url)) {
        url = address + url;
    }

    console.log("options", options)

    return fetch(url, options);
};

// import {json} from '...api.js';
export const postJSON = (url, data) => tool(url, {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(data)
}).then(res => res.json());

// Experts List
export const fetchExpertsList = data => postJSON(`/expert/search`, data);

// Global Search
export const fetchList = data => postJSON(`/search`, data);

// Filters
export const fetchFilters = data => postJSON(`/search/filters`, data);