import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion';
import Root from '@/core/Root';
import TopLand from '@/components/Topland';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Bogd Motors LLC</title>
        <meta name="description" content="To be continued..." />
      </Head>
      <Root>
        <TopLand/>
        <ContactForm/>
      </Root>
    </motion.div>
  );
};

export default Contact;