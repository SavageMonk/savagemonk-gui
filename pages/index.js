import Head from 'next/head';
import Footer from '../components/footer';
import Layout from '../components/layout';

export default function Home() {
    return (
        <>
            <Layout>
                <div>
                    <Head>
                        <title>SavageMonk</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main>

                        <header className="max-w-lg mx-auto my-2 pt-12">
                            <img className="max-w-full" src="/savage-monk-banner.svg" alt="LEFT: Text says Savage Monk, RIGHT: Art of a monk meditating, wearing a pair of headphones." />
                        </header>

                        <section>
                            <div className="max-w-xl mx-auto">
                                <form action="">
                                    <div className="flex">
                                        <input className="pl-3 appearance-none transition-colors duration-150 ease-in-out border-red bg-black-light border-solid border-2 flex-grow focus:border-white" type="text" placeholder="search..." />
                                        <div className="flex ml-2 border-solid border-red border-2">
                                            <button className="appearance-none px-6 py-2 bg-red hover:bg-white hover:text-red transform -translate-x-1 -translate-y-1 transition duration-150 ease-in-out focus:-translate-x-0 focus:-translate-y-0 active:-translate-x-0 active:-translate-y-0">
                                                GO
                                    </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>

                        <section className="py-12">
                            <div className="transform translate-x-3 translate-y-3 border border-red border-dashed mt-24">
                                <div className="transform -translate-x-3 -translate-y-3 border-2 border-red border-solid p-6">
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
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </Layout>
        </>
    );
}
