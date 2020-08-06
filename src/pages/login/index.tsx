import React, { PureComponent, Fragment } from 'react'
import { connect } from 'umi'
import { Button, Row, Input, Form } from 'antd'
import { GlobalFooter } from 'components'
import { GithubOutlined } from '@ant-design/icons'
import { setLocale } from 'utils'
import config from 'utils/config'

import styles from './index.less'

const FormItem = Form.Item

@withI18n()
@connect(({ loading, dispatch }) => ({ loading, dispatch }))
class Login extends PureComponent {
  render() {
    const { dispatch, loading, i18n } = this.props

    const handleOk = (values) => {
      dispatch({ type: 'login/login', payload: values })
    }
    let footerLinks = [
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/zuiidea/antd-admin',
        blankTarget: true,
      },
    ]

    if (config.i18n) {
      footerLinks = footerLinks.concat(
        config.i18n.languages.map((item) => ({
          key: item.key,
          title: (
            <span onClick={setLocale.bind(null, item.key)}>{item.title}</span>
          ),
        }))
      )
    }

    return (
      <Fragment>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img alt="logo" src={config.logoPath} />
            <span>{config.siteName}</span>
          </div>
          <Form onFinish={handleOk}>
            <FormItem name="username" rules={[{ required: true }]} hasFeedback>
              <Input placeholder={i18n.t`Username`} />
            </FormItem>
            <FormItem name="password" rules={[{ required: true }]} hasFeedback>
              <Input type="password" placeholder={i18n.t`Password`} />
            </FormItem>
            <Row>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading.effects.login}
              >
                Sign in
              </Button>
              <p>
                <span className="margin-right">Username ：guest</span>
                <span>Password ：guest</span>
              </p>
            </Row>
          </Form>
        </div>
        <div className={styles.footer}>
          <GlobalFooter links={footerLinks} copyright={config.copyright} />
        </div>
      </Fragment>
    )
  }
}

export default Login