import Layout from '../../components/Layout'
import Eventitem from "../../components/Eventitem";
import { API_URL } from "../../config"

export default function EventsPage({ events }) {
    return (
        <Layout>
            <h1>Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {
                events.map(evt => {
                    return (<Eventitem key={evt.id} evt={evt} />)
                })
            }
        </Layout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${API_URL}/api/events`)
    const events = await res.json();

    return {
        props: {
            events
        },
        revalidate: 60
    }
}