import React from "react"
import styles from './VideoGrid.module.scss'
const VideoGrid = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default VideoGrid