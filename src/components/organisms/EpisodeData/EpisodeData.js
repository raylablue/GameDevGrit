import React, { Component } from 'react';
import EpisodeCard from "../EpisodeCard/EpisodeCard";

class EpisodeData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            episodes: [],
            isLoading: false,
            error: null,
         };
    }

    async componentDidMount() {
        const episodes = await getEpisodes();
        this.setState({episodes} );
    }


    render() {
        const { episodes, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const episodeItems = episodes.map(ep =>
            <EpisodeCard
                title={ep.title}
                description={ep.description}
                datePublished={ep.datePublished}
                fileUrl={ep.fileUrl}
                key={ep.title}
            />
        );

        return (
            <React.Fragment>
                {episodeItems}
            </React.Fragment>
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

export default EpisodeData;