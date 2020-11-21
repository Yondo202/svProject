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


export async function getServerSideProps(params) {
//   const { slug } = context.query
  const allSlugData = await axios(`https://svv-admin.herokuapp.com/forms?Slug=${params.id}`);
  return {
      props: {
          all: allSlugData.data[0],
      }
  }
}