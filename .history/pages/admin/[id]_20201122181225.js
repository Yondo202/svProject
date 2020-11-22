import React from 'react'
// import Form from '@/components/admin/mainForm'
import Top from '@/components/Top'
import axios from 'axios'
import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(() => import('@/components/admin/mainForm'), { ssr: false });


function Home(props) {
    return (
        <div>
            <Top />
            <DynamicComponentWithNoSSR all={props.all} />
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