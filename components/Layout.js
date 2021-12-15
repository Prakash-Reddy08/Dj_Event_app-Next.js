import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'
import Header from './Header'
import Showcase from './Showcase'
const Layout = ({ title, keywords, description, children }) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='desription' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Header />
            {router.pathname === '/' && <Showcase />}

            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'Dj Events | find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'music,dj,EDM'
}

export default Layout
