import { TextField } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Drawer from "../components/Drawer";
import Partners from "../components/Partners";
import Search from "../components/Search";
import Filter from "../components/Utility/Filter";
import MainLayout from "../layout/main";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout
        active={drawerOpen}
        onMenuClick={() => toggleDrawer(true)}
        MenuComponent={
          <Drawer
            closeFn={() => toggleDrawer(false)}
            open={drawerOpen}
            items={[
              {
                action: () => console.log("action"),
                label: "Label lorem ipsum",
              },
            ]}
          />
        }
        facebook="#"
        instagram="#"
        whatsapp="#"
        contactEmail="atendimento@mapaculturaltaquara.com.br"
        contactNumber="(51)98910-5138"
        navbarColor="primary"
        metaDescription="Mapa cultural de Taquara"
        title="Mapa Cultural"
      >
        <AboutUs />
        <Search
          tabItems={[
            {
              component: <div>hello</div>,
              label: "Im the label",
            },
            { component: <div>hello motto</div>, label: "Im the label too" },
            {
              component: (
                <div className="p-10">
                  <Filter
                    searchAction={() => console.log("action")}
                    inputItems={[
                      <TextField label="Hello" />,
                      <TextField label="Hello" />,
                      <TextField label="Hello" />,
                    ]}
                  />
                </div>
              ),
              label: "Motorolla",
            },
          ]}
        />
        <Partners
          partnersItems={[
            { partnerLogo: "https://via.placeholder.com/350" },
            { partnerLogo: "https://via.placeholder.com/350" },
            { partnerLogo: "https://via.placeholder.com/350" },
            { partnerLogo: "https://via.placeholder.com/350" },
            { partnerLogo: "https://via.placeholder.com/350" },
          ]}
        />
        <Contact />
      </MainLayout>
    </div>
  );
}
