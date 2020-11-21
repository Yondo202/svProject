import React from 'react'
import Form from '@/components/admin/mainForm'
import Top from '@/components/Top'
import axios from 'axios'
function Home(props) {
    return (
        <div>
            <Top />
            <Form all={props.all} />
        </div>
    )
}

export default Home


export async function getServerSideProps(context) {
    console.log(context.query, 'dadada')
  const { slug } = context.query
  const allSlugData = await axios(`https://svv-admin.herokuapp.com/forms?Slug=${slug}`);
  return {
    // revalidate: 1,
      props: {
          all: allSlugData.data[0],
      }
  }
}