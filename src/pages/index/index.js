import React, { Component } from 'react'
import Header from '../../components/Header'
import styles from './index.less'

export default class index extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className={styles.h100}>
        <Header title="首页" />

        <div className={styles.h100scroll}>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
          <div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div><div>内容</div>
        </div>
      </div>
    )
  }
}
