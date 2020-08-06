import React, { PureComponent } from 'react';
import { Switch, Layout } from 'antd';
import { BulbOutlined } from '@ant-design/icons';
import ScrollBar from '../ScrollBar';
import SiderMenu from './Menu';
import styles from './Sider.less';

class Sider extends PureComponent {
  render() {
    const { i18n, menus, theme, isMobile, collapsed, onThemeChange, onCollapseChange } = this.props;

    return (
      <Layout.Sider
        width={256}
        theme={theme}
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={!isMobile && onCollapseChange}
        className={styles.sider}
      >
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img alt="logo" src={config.logoPath} />
            {!collapsed && <h1>{config.siteName}</h1>}
          </div>
        </div>

        <div className={styles.menuContainer}>
          <ScrollBar
            options={{
              // Disabled horizontal scrolling, https://github.com/utatti/perfect-scrollbar#options
              suppressScrollX: true,
            }}
          >
            <SiderMenu
              menus={menus}
              theme={theme}
              isMobile={isMobile}
              collapsed={collapsed}
              onCollapseChange={onCollapseChange}
            />
          </ScrollBar>
        </div>
        {!collapsed && (
          <div className={styles.switchTheme}>
            <span>
              <BulbOutlined />
              Switch Theme
            </span>
            <Switch
              onChange={onThemeChange.bind(this, theme === 'dark' ? 'light' : 'dark')}
              defaultChecked={theme === 'dark'}
              checkedChildren={i18n.t`Dark`}
              unCheckedChildren={i18n.t`Light`}
            />
          </div>
        )}
      </Layout.Sider>
    );
  }
}

export default Sider;
