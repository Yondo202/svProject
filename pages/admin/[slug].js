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


// export async function getServerSideProps(context) {
//   const { slug } = context.query
//   const VideoNews = await axios(`http://3.15.205.212:1337/posts?slug=${slug}`);
//   const allData = await axios(`http://3.15.205.212:1337/posts`);
//   const Vbunner = await axios(`http://3.15.205.212:1337/video-bunner`);
//   const Vbunner2 = await axios(`http://3.15.205.212:1337/video-bunner-2`);
//   return {
//     // revalidate: 1,
//       props: {
//           big: VideoNews.data[0],
//           all: allData.data,
//           Vbunner : Vbunner.data,
//           Vbunner2 : Vbunner2.data
//       }
//   }
// }