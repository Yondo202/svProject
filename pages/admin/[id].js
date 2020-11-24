import React from 'react'
import Form from '@/components/admin/mainForm'
import Top from '@/components/Top'
import axios from 'axios'
import Head from 'next/head'
// import dynamic from 'next/dynamic'
// const DynamicComponentWithNoSSR = dynamic(() => import('@/components/admin/mainForm'), { ssr: false });


function Home(props) {
    return (
        <div>
            <Head>
            <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
            <script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script> 
            <script src="dist/jspdf.customfonts.min.js"></script> 
            <script src="dist/default_vfs.js"></script>
            </Head>
            <Top />
            <Form all={props.all} />
        </div>
    )
}

export default Home

export async function getServerSideProps({params}) {
  const allSlugData = await axios(`https://svv-admin.herokuapp.com/forms?id=${params.id}`);
  return {
      props: {
          all: allSlugData.data[0],
      }
  }
}