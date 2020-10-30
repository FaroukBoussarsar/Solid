import Link from "next/link"
import Layout from "../components/Layout"

const KEY = 'AIzaSyAA4OSSHctriuEfOqJcFgW-IEnf_XL7r5E'
const Dance = (props) => {
    return (
        <Layout>


            {props.items.items.map(element => {
                return (<div key={element.id}>
                    <Link href={'https://www.youtube.com/watch?v=' + element.snippet.resourceId.videoId} prefetch={false}>
                        <div>



                            <div>{element.snippet.title}</div>
                            <img src={element.snippet.thumbnails.default.url} alt="Italian Trulli" />
                        </div>
                    </Link></div>
                )

            })}
        </Layout>
    )
}

Dance.getInitialProps = async function () {
    const res = await fetch('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCIabPXjvT5BVTxRDPCBBOOQ&key=' + KEY + '');
    const data = await res.json();
    const res1 = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?key=' + KEY + '&playlistId=' + data.items[0].contentDetails.relatedPlaylists.uploads + '&maxResults=50&part=snippet');
    const data1 = await res1.json();
    return {
        items: data1
    };
}

export default Dance