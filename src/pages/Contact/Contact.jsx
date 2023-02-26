import React, { useState } from 'react'
import "./Contact.css"
import { AnimatePresence, motion } from 'framer-motion'

const Contact = () => {



  const [selectedId, setSelectedId] = useState(null)

  const items = [
    {
      id: 1,
      subtitle: "subtitle",
      title: "title"
    },
    {
      id: 2,
      subtitle: "subtitle",
      title: "title"
    },
    {
      id: 3,
      subtitle: "subtitle",
      title: "title"
    },
    {
      id: 4,
      subtitle: "subtitle",
      title: "title"
    },
    {
      id: 5,
      subtitle: "subtitle",
      title: "title"
    },
  ]



  return (
    <div className='contact-main-div' >
      {
        items.map((item) => {
          return (
            <motion.div className='contact-details-div' layoutId={item.id} onClick={() => setSelectedId(item)}>
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          )
        })
      }

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className='selected-contact-details-div' >
            <motion.h5>{selectedId.subtitle}</motion.h5>
            <motion.h2>{selectedId.title}</motion.h2>
            <motion.button className='selected-contact-div-close-btn'  onClick={() => setSelectedId(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Contact


