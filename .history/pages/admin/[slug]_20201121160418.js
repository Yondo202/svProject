import React from 'react'
import Form from '@/components/admin/mainForm'
import Top from '@/components/Top'
function Home() {
    return (
        <div>
            <Top />
            <Form />
        </div>
    )
}

export default Home


export async function getServerSideProps(context) {
  const { slug } = context.query
  const VideoNews = await axios(`https://svv-admin.herokuapp.com/forms?slug=${slug}`);
  return {
    // revalidate: 1,
      props: {
          all: VideoNews.data,
      }
  }
}