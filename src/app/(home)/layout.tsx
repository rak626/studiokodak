import Navbar from "@/components/Navbar";
import {ReactNode} from "react";
import ContentHolder from "@/components/ContentHolder";

const HomeLayout = ({children}: { children: ReactNode }) => {
    return (
        <main>
            <ContentHolder>
                <div>
                    <Navbar/>
                    {children}
                    {/*<Footer/>*/}
                </div>
            </ContentHolder>

        </main>
    )
}
export default HomeLayout
