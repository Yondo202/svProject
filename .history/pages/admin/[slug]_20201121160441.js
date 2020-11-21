import React from 'react'
import Form from '@/components/admin/mainForm'
import Top from '@/components/Top'
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
  const { slug } = context.query
  const allSlugData = await axios(`https://svv-admin.herokuapp.com/forms?slug=${slug}`);
  return {
    // revalidate: 1,
      props: {
          all: allSlugData.data,
      }
  }
}