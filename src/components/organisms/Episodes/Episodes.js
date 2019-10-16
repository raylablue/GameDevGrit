import React from 'react';

// the below is still in JS and needs to be refactored to work in react

const getXmlText = async () => {
    const xml = await fetch("https://anchor.fm/s/9600ce4/podcast/rss");
    return await xml.text();
}

const getXmlEpisodes = (xml) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "application/xml");
    return [...xmlDoc.getElementsByTagName('item')];
}

const getEpisodes = async () => {
    const xml = await getXmlText();

    return getXmlEpisodes(xml)
        .map(ep => ({
            title: ep.getElementsByTagName('title')[0]
                .textContent
                .replace(/_/g, ' '),
            description: ep.getElementsByTagName('description')[0]
                .textContent,
            datePublished: ep.getElementsByTagName('pubDate')[0]
                .textContent,
            fileUrl: ep.getElementsByTagName('enclosure')[0]
                .attributes[0]
                .nodeValue,
        }));
}

const init = async () => {
    const episodes = await getEpisodes();
    console.log(episodes);
};

init();

export default Episodes;