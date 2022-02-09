import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>BnS-Raid</title>
            </Head>

            <div className="bgWrap">
                <Image
                    alt="bns"
                    src="/images/bns.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <header className="h-16 bg-gray-200">
                <div className="px-20 flex justify-between items-center h-full">
                    <div
                        className="cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        <Image
                            src="/images/logo_bns_black.png"
                            alt="Picture of the author"
                            width={100}
                            height={50}
                        />
                    </div>

                    {/* <div>
                        <button
                            className="bg-gray-900 rounded-md p-2 mr-5 text-white"
                            // onClick={() => router.push("/addTeam")}
                        >
                            Add Raid
                        </button>
                        <button className="bg-gray-900 rounded-md p-2 first-line:text-white">
                            List Raid
                        </button>
                    </div> */}
                </div>
            </header>

            <div className="w-3/5 mx-auto py-10">{children}</div>

            <footer></footer>
        </>
    );
};

export default Layout;
