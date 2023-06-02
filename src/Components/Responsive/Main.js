import React from 'react'
import { Banner } from './Banner'
import { Web } from './Web'
import { Skills } from './Skills'
import { Project } from './Project'
import { Contact } from './Contact'

const Main = () => {
  return (
    <div>
        <Web/>
        <Banner/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default Main