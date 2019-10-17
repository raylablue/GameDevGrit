import React, { Component } from 'react';

class EpisodeLog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            isLoading: false,
         };
    }

    async componentDidMount() {
        const episodes = await getEpisodes();

        this.setState({episodes} );
        // this.setState({isLoading: true});
    }


    render() {
        const { episodes, isLoading, } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
            console.log("loading happened");
        }

        return (
            <ul>
                {episodes.map(episodes =>
                    <li key={episodes.objectID}>
                        <a href={episodes.url}>{episodes.title}</a>
                    </li>
                )}
            </ul>
        );
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