import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList"

class App extends React.Component {

    state = { videos: [] }

    onTermSubmit = async (term) => {
       const res = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        this.setState({videos : res.data.items})
    };

    onVideoSelect = video => {
        console.log(video)
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos
                <VideoList 
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

export default App;