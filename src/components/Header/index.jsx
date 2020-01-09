/**
 * props:
 * title
 * canback 默认false
 * rightDom reactDom
 */
import router from 'umi/router'
import { Icon } from 'antd-mobile'
import styles from './index.less'

const index = (props) => {
  const {
    title, canback, rightDom,
    style
  } = props
  const goBack = () => {
    router.goBack()
  }
  return (
    <div className={styles.header} style={style ? style : null}>
      <div className={styles.content}>
        {canback ?
          <div className={styles.goback} onClick={goBack}>
            <Icon type="left" size='md' />
          </div> : null}
        <div></div>
      </div>
      <div className={styles.title}>{title ? title : ' '}</div>
      <div className={styles.content}>
        {rightDom ? rightDom : null}
      </div>
    </div>
  )
}

export default index