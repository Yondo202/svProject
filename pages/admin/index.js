import React from "react";
import { motion } from "framer-motion";
import axios from'axios'
import Background from '@/components/Top'
import Totalsv from "@/components/admin/Totalsv";

function index(props) {
    console.log(props.all.length, 'propss');
    
    return (
        <div>
            {!props.all.length ?<h1 id="Loading">Loading...</h1> : <Totalsv all={props.all} />}
        </div>
    )
}

export default index

export async function getServerSideProps() {
  const allData = await axios(`https://svv-admin.herokuapp.com/forms`);
  return {
    // revalidate: 1,
      props: {
          all: allData.data,
      }
  }
}