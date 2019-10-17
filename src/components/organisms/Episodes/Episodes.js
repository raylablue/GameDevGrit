import React, { Component } from 'react';

class EpisodeLog extends Component {
    async componentDidMount() {
        const episodes = await getEpisodes();

        this.setState({episodes} );
    }
    render() {
        return (
            <p>use list elements to put episode data here</p>
        )
    }
}

const getXmlText = async () => {
    const xml = await fetch("https://anchor.fm/s/9600ce4/podcast/rss");
    return await xml.text();
};

const getXmlEpisodes = (xml) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "application/xml");
    return [...xmlDoc.getElementsByTagName('item')];
};

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
};

export default EpisodeLog;