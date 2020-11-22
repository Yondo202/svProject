import React from "react";
import { motion } from "framer-motion";
import axios from'axios'
import Background from '@/components/Top'
import Totalsv from "@/components/admin/Totalsv";

import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(() => import('@/components/admin/reactPdf'), { ssr: false });

function test() {
    // console.log(props.all, 'propss')
    return (
        <div>
            {/* <Background /> */}
            <DynamicComponentWithNoSSR  />
        </div>
    )
}

export default test


// export async function getServerSideProps() {
//   const allData = await axios(`https://svv-admin.herokuapp.com/forms`);
//   return {
//     // revalidate: 1,
//       props: {
//           all: allData.data,
//       }
//   }
// }