import Head from 'next/head';
import Layout from '../components/layout';
import TextBox from '../components/textbox';
import ButtonPrimary from '../components/buttonPrimary';
import TextBlock from '../components/textblock';
import { useState } from 'react';
import {useRouter} from 'next/router';

export default function Home() {
    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleSearch = (evt) => {
        evt.preventDefault();
        router.push({
            pathname: '/search',
            query: {q: query},
          })
    }


    return (
        <Layout>
            <div>
                <Head>
                    <title>SavageMonk</title>
                </Head>

                <main>

                    <header className="max-w-lg mx-auto my-2 pt-12">
                        <img className="max-w-full" src="/savage-monk-banner.svg" alt="LEFT: Text says Savage Monk, RIGHT: Art of a monk meditating, wearing a pair of headphones." />
                    </header>

                    <section>
                        <div className="max-w-xl mx-auto">
                            <form onSubmit={handleSearch}>
                                <div className="flex">
                                    <TextBox placeholder="search..." className="flex-grow" onChange={setQuery} value={query} />
                                    <ButtonPrimary type="submit" className="ml-2">GO</ButtonPrimary>
                                </div>
                            </form>
                        </div>
                    </section>

                    <section className="py-12">
                        <TextBlock>
                            <h2 className="text-xl font-semibold text-red py-2">
                                What is this?
                                </h2>
                            <p className="py-2">
                                Are you tired of the insane fluctuating prices of PC hardware and peripherals in India? We were too. So we decided to make SavageMonk, a website that tracks and compares prices across all major PC retailers in India.
                                </p>
                            <p className="py-2">
                                It’s completely free and open source, and we profit <strong className="font-bold">absolutely nothing</strong> from the purchases you make.
                                </p>
                            <p className="py-2">
                                This project is still in very early stages of development, so the search-speed might be sub-optimal. If you want to read more about why exactly, you can check out our GitHub repository. If you would like to support this project, please consider donating.
                                </p>
                            <p className="py-2">
                                We hope you find some great deals :)
                                </p>
                        </TextBlock>
                    </section>
                </main>
            </div>
        </Layout>
    );
}
