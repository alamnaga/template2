import Hero from "../components/Hero/Hero";
import Mempelai from "../components/Content/Mempelai";
import {useState} from "react";
import Invited from "../components/Invited/Invited";
import Waktu from "../components/Content/Waktu";
import ProtokolKesehatan from "../components/Content/ProtokolKesehatan";
import Music from "../components/Content/Music";
import {useSpring, animated} from "react-spring";
import Wish from "../components/Content/Wish";
import Footer from "../components/Content/Footer";
import Head from "next/head";
import ImagePengantin from "@/components/Content/ImagePengantin";
import data from "../components/Data/data"

export default function Home() {
    const [invited, setInvited] = useState(true)
    const [tamu, setTamu] = useState("")
    const changeInvited = (e) => {
        setInvited(e)
    }
    const nameGuest = (e) => {
        setTamu(e)
    }
    const fade = useSpring({
        opacity: invited ? 0 : 1,
        delay: 50
    })
    return (
        <>
            <Head>
                <meta charset={"UTF-8"}/>
                <title>The Wedding Of {data.nama_wanita} & {data.nama_pria}</title>
                <meta name="description" content="Wedding Invitation"/>
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${data.nama_wanita} & ${data.nama_pria}`} />
                <meta property="og:description" content="Wedding Invitation" />
                <meta property="og:site_name" content={`Wedding Invitation ${data.nama_pria} & ${data.nama_wanita}`} />
                <meta property="og:image:width" content="1296" />
                <meta property="og:image:height" content="864" />
                <meta property="og:image:alt" content={`The Wedding Of ${data.nama_pria} & ${data.nama_wanita}`} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="ya:ovs:allow_embed" content="true" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`The Wedding Of ${data.nama_pria} & ${data.nama_wanita}`} />
                <meta name="twitter:description" content="Wedding Invitation" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {invited ?
                <Invited changeInvited={changeInvited} nameGuest={nameGuest}/> :
                <animated.div style={fade}>
                    <Music/>
                    <Hero guest={tamu}/>
                    <Mempelai/>
                    <Waktu/>
                    <ImagePengantin/>
                    <ProtokolKesehatan/>
                    <Wish />
                    <Footer/>
                </animated.div>
            }
        </>
    )
}
