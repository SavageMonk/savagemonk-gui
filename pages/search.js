import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/layout";

export default function Search() {
    const router = useRouter();
    const {q} = router.query;

    return (
        <Layout>
            <Head>
                <title>Search results for: {q}</title>
            </Head>
            
        </Layout>
    )
}