/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import { enquireScreen } from 'enquire-js';

import Nav0 from './Nav0';
import Banner0 from './Banner0';
import Banner1 from './Banner1';
import Content0 from './Content0';
import Teams1 from './Teams1';
import Teams2 from './Teams2';
import Feature5 from './Feature5';
import Footer2 from './Footer2';

import {
  Nav00DataSource,
  Banner01DataSource,
  Banner10DataSource,
  Content00DataSource,
  Teams20DataSource,
  Feature50DataSource,
  Teams10DataSource,
  Footer20DataSource,
} from './data.source';
import './less/antMotionStyle.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const { location } = window;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port, // 如果不是 dva 2.0 请删除
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    /* 如果不是 dva 2.0 请删除 start */
    if (location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
    /* 如果不是 dva 2.0 请删除 end */
  }

  render() {
    const children = [
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Banner0
        id="Banner0_1"
        key="Banner0_1"
        dataSource={Banner01DataSource}
        isMobile={this.state.isMobile}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
        isMobile={this.state.isMobile}
      />,
      <Feature5
      id="Feature5_0"
      key="Feature5_0"
      dataSource={Feature50DataSource}
      isMobile={this.state.isMobile}
    />,
      <Teams2
      id="Teams2_0"
      key="Teams2_0"
      dataSource={Teams20DataSource}
      isMobile={this.state.isMobile}
     />,
     <Banner1
     id="Banner1_0"
     key="Banner1_0"
     dataSource={Banner10DataSource}
     isMobile={this.state.isMobile}
   />,
      <Teams1
      id="Teams1_0"
      key="Teams1_0"
      dataSource={Teams10DataSource}
      isMobile={this.state.isMobile}
     />,
      // <Footer1
      //   id="Footer1_0"
      //   key="Footer1_0"
      //   dataSource={Footer10DataSource}
      //   isMobile={this.state.isMobile}
      // />,
      <Footer2
      id="Footer2_0"
      key="Footer2_0"
      dataSource={Footer20DataSource}
      isMobile={this.state.isMobile}
    />,
    ];
    return (
      <div
        className="templates-wrapper"
        ref={(d) => {
          this.dom = d;
        }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
