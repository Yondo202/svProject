import React from "react";
import { motion } from "framer-motion";
import axios from'axios'
import Background from '@/components/Top'
import Totalsv from "@/components/admin/Totalsv";

function Home() {
    return (
        <div>
            {/* <Background /> */}
            <Totalsv />
        </div>
    )
}

export default Home


export async function getServerSideProps() {

  const allData = await axios(`https://svv-admin.herokuapp.com/forms`);

  return {
    // revalidate: 1,
      props: {
          all: allData.data,
      }
  }
}