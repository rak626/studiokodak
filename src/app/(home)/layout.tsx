import Navbar from "@/components/Navbar";
import {ReactNode} from "react";
import ContentHolder from "@/components/ContentHolder";

const HomeLayout = ({children}: { children: ReactNode }) => {
    return (
        <main>
            <ContentHolder>
                <>
                    <Navbar/>
                    {children}
                    {/*<Footer/>*/}
                </>
            </ContentHolder>

        </main>
    )
}
export default HomeLayout
