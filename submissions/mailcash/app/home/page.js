import SidebarHeader from "../components/header/sidebarHeader";

export default function Home() {

    return (

        <>

            <section class="layout">
                <SidebarHeader
                    sidebar_color1="#FFDD33"
                    sidebar_color2=""
                    sidebar_color3=""
                    sidebar_color4=""
                />
                <div class="layout-body">
                    <div class="container pt-5 mt-5">
                        <h1>Home</h1>
                    </div>
                </div>
            </section>

        </>

    )

}