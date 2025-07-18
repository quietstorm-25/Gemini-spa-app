import React from 'react'
import Hero from '../../components/hero/Hero';
import Service from '../../components/service/Service';
import Essentials from '../../components/essential/Essentials';
import Blog from '../../components/blog/Blog';
import Testimony from '../../components/testimony/Testimony';

const Homepage = () => {
  return (
    <>
      <Hero />
      <Service />
      <Essentials />
      <Blog />
      <Testimony />
    </>
  )
}

export default Homepage