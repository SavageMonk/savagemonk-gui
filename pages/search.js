import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import ButtonPrimary from "../components/buttonPrimary";
import Container from "../components/container";
import Layout from "../components/layout";
import TextBox from "../components/textbox";

export default function Search() {
    const router = useRouter();
    const { q } = router.query;

    const [query, setQuery] = useState(q);

    const handleSearch = (evt) => {
        evt.preventDefault();
        router.push({
            pathname: '/search',
            query: { q: query },
        })
    }

    return <>
        <Layout>
            <Head>
                <title>Search results for: {q}</title>
            </Head>
            <header>
                <div className="bg-red mx-auto h-16">
                    <div class="max-w-screen-xl h-full">
                        <img src="/savage-monk-banner-alternate-light.png" className="max-h-full max-w-full object-contain sm:pl-4" alt="Savage Monk Logo" />
                    </div>
                </div>
            </header>
            <main>
                <Container className="max-w-7xl">
                    <form onSubmit={handleSearch}>
                        <div className="flex my-12">
                            <TextBox placeholder="search..." className="flex-grow min-w-0" onChange={setQuery} value={query} />
                            <ButtonPrimary type="submit" className="flex-shrink ml-2">GO</ButtonPrimary>
                        </div>
                    </form>

                    <div className="border-red border-2 border-solid flex hover:bg-red cursor-pointer group my-4">
                        <div className="bg-white flex w-5/12 sm:w-auto">
                            <img src="https://www.primeabgb.com/wp-content/uploads/2020/10/ASRock-B550M-ITX-AC-AM4-Mini-ITX-Motherboard-300x300.jpg" className="my-auto object-contain" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 w-7/12 sm:w-auto">
                            <h3 className="line-clamp-3 sm:text-xl font-semibold">ASRock B550M-ITX/AC AM4 Mini-ITX Motherboard (AMD Socket AM4/3rd Gen Ryzen Series CPU/Max 64GB DDR4 4733MHz Memory)</h3>
                            <div>
                                <img src="/logos/mdcomputers.png" alt="" className="object-contain my-2 h-6"/>
                            </div>
                            <div className="flex flex-wrap font-bold text-red text-xl sm:text-2xl items-baseline group-hover:text-white">
                                <span className="pr-4">₹13,900</span>
                                <span className="pr-4 line-through">₹15,000</span>
                                <span className="pr-4">7.4% OFF</span>
                            </div>
                        </div>
                    </div>
                    

                    <div className="border-red border-2 border-solid flex hover:bg-red cursor-pointer group my-4">
                        <div className="bg-white flex w-5/12 sm:w-auto">
                            <img src="https://www.primeabgb.com/wp-content/uploads/2020/10/ASRock-B550M-ITX-AC-AM4-Mini-ITX-Motherboard-300x300.jpg" className="my-auto object-contain" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 w-7/12 sm:w-auto">
                            <h3 className="line-clamp-3 sm:text-xl font-semibold">ASRock B550M-ITX/AC AM4 Mini-ITX Motherboard (AMD Socket AM4/3rd Gen Ryzen Series CPU/Max 64GB DDR4 4733MHz Memory)</h3>
                            <div>
                                <img src="/logos/mdcomputers.png" alt="" className="object-contain my-2 h-6"/>
                            </div>
                            <div className="flex flex-wrap font-bold text-red text-xl sm:text-2xl items-baseline group-hover:text-white">
                                <span className="pr-4">₹13,900</span>
                                <span className="pr-4 line-through">₹15,000</span>
                                <span className="pr-4">7.4% OFF</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-red border-2 border-solid flex hover:bg-red cursor-pointer group my-4">
                        <div className="bg-white flex w-5/12 sm:w-auto">
                            <img src="https://www.primeabgb.com/wp-content/uploads/2020/10/ASRock-B550M-ITX-AC-AM4-Mini-ITX-Motherboard-300x300.jpg" className="my-auto object-contain" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 w-7/12 sm:w-auto">
                            <h3 className="line-clamp-3 sm:text-xl font-semibold">ASRock B550M-ITX/AC AM4 Mini-ITX Motherboard (AMD Socket AM4/3rd Gen Ryzen Series CPU/Max 64GB DDR4 4733MHz Memory)</h3>
                            <div>
                                <img src="/logos/mdcomputers.png" alt="" className="object-contain my-2 h-6"/>
                            </div>
                            <div className="flex flex-wrap font-bold text-red text-xl sm:text-2xl items-baseline group-hover:text-white">
                                <span className="pr-4">₹13,900</span>
                                <span className="pr-4 line-through">₹15,000</span>
                                <span className="pr-4">7.4% OFF</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-red border-2 border-solid flex hover:bg-red cursor-pointer group my-4">
                        <div className="bg-white flex w-5/12 sm:w-auto">
                            <img src="https://www.primeabgb.com/wp-content/uploads/2020/10/ASRock-B550M-ITX-AC-AM4-Mini-ITX-Motherboard-300x300.jpg" className="my-auto object-contain" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 w-7/12 sm:w-auto">
                            <h3 className="line-clamp-3 sm:text-xl font-semibold">ASRock B550M-ITX/AC AM4 Mini-ITX Motherboard (AMD Socket AM4/3rd Gen Ryzen Series CPU/Max 64GB DDR4 4733MHz Memory)</h3>
                            <div>
                                <img src="/logos/mdcomputers.png" alt="" className="object-contain my-2 h-6"/>
                            </div>
                            <div className="flex flex-wrap font-bold text-red text-xl sm:text-2xl items-baseline group-hover:text-white">
                                <span className="pr-4">₹13,900</span>
                                <span className="pr-4 line-through">₹15,000</span>
                                <span className="pr-4">7.4% OFF</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-red border-2 border-solid flex hover:bg-red cursor-pointer group my-4">
                        <div className="bg-white flex w-5/12 sm:w-auto">
                            <img src="https://www.primeabgb.com/wp-content/uploads/2020/10/ASRock-B550M-ITX-AC-AM4-Mini-ITX-Motherboard-300x300.jpg" className="my-auto object-contain" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 w-7/12 sm:w-auto">
                            <h3 className="line-clamp-3 sm:text-xl font-semibold">ASRock B550M-ITX/AC AM4 Mini-ITX Motherboard (AMD Socket AM4/3rd Gen Ryzen Series CPU/Max 64GB DDR4 4733MHz Memory)</h3>
                            <div>
                                <img src="/logos/mdcomputers.png" alt="" className="object-contain my-2 h-6"/>
                            </div>
                            <div className="flex flex-wrap font-bold text-red text-xl sm:text-2xl items-baseline group-hover:text-white">
                                <span className="pr-4">₹13,900</span>
                                <span className="pr-4 line-through">₹15,000</span>
                                <span className="pr-4">7.4% OFF</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-red border-2 border-solid flex hover:bg-red cursor-pointer group my-4">
                        <div className="bg-white flex w-5/12 sm:w-auto">
                            <img src="https://www.primeabgb.com/wp-content/uploads/2020/10/ASRock-B550M-ITX-AC-AM4-Mini-ITX-Motherboard-300x300.jpg" className="my-auto object-contain" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 w-7/12 sm:w-auto">
                            <h3 className="line-clamp-3 sm:text-xl font-semibold">ASRock B550M-ITX/AC AM4 Mini-ITX Motherboard (AMD Socket AM4/3rd Gen Ryzen Series CPU/Max 64GB DDR4 4733MHz Memory)</h3>
                            <div>
                                <img src="/logos/mdcomputers.png" alt="" className="object-contain my-2 h-6"/>
                            </div>
                            <div className="flex flex-wrap font-bold text-red text-xl sm:text-2xl items-baseline group-hover:text-white">
                                <span className="pr-4">₹13,900</span>
                                <span className="pr-4 line-through">₹15,000</span>
                                <span className="pr-4">7.4% OFF</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-red border-2 border-solid flex hover:bg-red cursor-pointer group my-4">
                        <div className="bg-white flex w-5/12 sm:w-auto">
                            <img src="https://www.primeabgb.com/wp-content/uploads/2020/10/ASRock-B550M-ITX-AC-AM4-Mini-ITX-Motherboard-300x300.jpg" className="my-auto object-contain" alt="" />
                        </div>
                        <div className="flex flex-col justify-between p-4 w-7/12 sm:w-auto">
                            <h3 className="line-clamp-3 sm:text-xl font-semibold">ASRock B550M-ITX/AC AM4 Mini-ITX Motherboard (AMD Socket AM4/3rd Gen Ryzen Series CPU/Max 64GB DDR4 4733MHz Memory)</h3>
                            <div>
                                <img src="/logos/mdcomputers.png" alt="" className="object-contain my-2 h-6"/>
                            </div>
                            <div className="flex flex-wrap font-bold text-red text-xl sm:text-2xl items-baseline group-hover:text-white">
                                <span className="pr-4">₹13,900</span>
                                <span className="pr-4 line-through">₹15,000</span>
                                <span className="pr-4">7.4% OFF</span>
                            </div>
                        </div>
                    </div>

                </Container>
            </main>
        </Layout>
    </>
}