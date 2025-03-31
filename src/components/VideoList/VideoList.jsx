const VideoList = (props) => {
    console.log(props);

    return (
        <>
            <h1>Video List</h1>
            <div>
                {!props.videos.length ? (
                    <h2>No Videos Yet!</h2>
                ) : (
                    <ul>
                        {props.videos.map((video) => (
                            <li key={video._id}>{video.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};


export default VideoList;