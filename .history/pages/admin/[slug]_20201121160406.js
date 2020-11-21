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
          big: VideoNews.data[0],
          all: allData.data,
          Vbunner : Vbunner.data,
          Vbunner2 : Vbunner2.data
      }
  }
}