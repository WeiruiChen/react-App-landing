import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Tabs, Icon, Row, Col} from 'antd';
import {Collapse} from 'antd';
import {getChildrenToRender} from './utils';

const TabPane = Tabs.TabPane;
const {Panel} = Collapse;

class Content7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }
  onChange = (key) => {
    this.setState({current: parseFloat(key)});
  };
  onChange1 = (key) => {
    console.log('key' + key);
  };

  getBlockChildren = (item, i) => {
    const {tag, content} = item;
    const {text} = content;
    const textChildren = text.children;
    const {icon} = tag;
    const iconChildren = icon.children;
    const tagText = tag.text;
    return (
      <TabPane
        key={i + 1}
        tab={
          <div className={tag.className}>
            <Icon type={iconChildren} className={icon.className} />
            <div {...tagText}>{tagText.children}</div>
          </div>
        }
        className={item.className}
      >
        <TweenOne.TweenOneGroup
          enter={{
            y: 30,
            delay: 300,
            opacity: 0,
            type: 'from',
            ease: 'easeOutQuad',
          }}
          leave={null}
          component=""
        >
          {this.state.current === i + 1 && (
            <Row
              key="content"
              className={content.className}
              gutter={content.gutter}
            >
              <Col className={text.className} xs={text.xs} md={text.md}>
                {textChildren}
              </Col>
              {/* <Col className={img.className} xs={img.xs} md={img.md}>
                <img src={img.children} width="100%" alt="img" />
              </Col> */}
            </Row>
          )}
        </TweenOne.TweenOneGroup>
      </TabPane>
    );
  };

  render() {
    const {...props} = this.props;
    const {dataSource} = props;
    // return (
    //   <div style={{ marginTop: 10, marginBottom: 10 }}>
    //     <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange1}>
    //       <Accordion.Panel header="Title 1">
    //         <List className="my-list">
    //           <List.Item>content 1</List.Item>
    //           <List.Item>content 2</List.Item>
    //           <List.Item>content 3</List.Item>
    //         </List>
    //       </Accordion.Panel>
    //       <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
    //       <Accordion.Panel header="Title 3" className="pad">
    //         text text text text text text text text text text text text text text text
    //       </Accordion.Panel>
    //     </Accordion>
    //   </div>
    // );
    // if (props.isMobile) getChildrenToRender{
    // return (
    //   <div {...props} {...dataSource.wrapper}>
    //     <div {...dataSource.page}>
    //       <div {...dataSource.titleWrapper}>
    //         {dataSource.titleWrapper.children.map(getChildrenToRender)}
    //       </div>

    //       <div style={{marginTop: 10, marginBottom: 10}}>
    //         <Accordion  defaultActiveKey="0" className="pad" onChange={this.onChange1} >
    //           <Accordion.Panel header="1">
    //           <div><img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhengwushanglian.png" width="100%"  alt="政务上链"></img></div>
    //           </Accordion.Panel>
    //           <Accordion.Panel header="2">
    //           <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhihuichengshi.png" width="100%"  alt="智慧城市"></img>
    //           </Accordion.Panel>
    //           <Accordion.Panel header="供应链金融">
    //           </Accordion.Panel>
    //           <Accordion.Panel header="产品溯源">
    //           </Accordion.Panel>
    //           <Accordion.Panel header="数字身份" className="pad"></Accordion.Panel>
    //         </Accordion>
    //       </div>

    //     </div>
    //   </div>
    // );
    // }
    delete props.dataSource;
    delete props.isMobile;
    const tabsChildren = dataSource.block.children.map(this.getBlockChildren);

    if (this.props.isMobile) {
    return (
      <div {...props} {...dataSource.wrapper}>
        <a name="jiejuefangan"></a>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <div>
            <Collapse
              expandIconPosition='right'
            >
              <Panel style={{background:'#fff'}}  header={<div style={{height: '6vh', textAlign: 'center'}}>
                <div style={{marginTop:'3vh'}}>
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhengwuicon.png" alt="政务上链">
                  </img>
                  <span style={{fontSize: '30px', color: '#0033A1',marginLeft:'10px'}}>政务上链</span>
                </div>
              </div>} key="1">
                <div >
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhengwushanglian.png" width="100%" alt="政务上链"></img>
                </div>
              </Panel>
            </Collapse>

            <Collapse
              style={{marginTop: '50px'}}
              expandIconPosition='right'
            >
              <Panel style={{background:'#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                <div style={{marginTop:'3vh'}}>
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhihuiicon.png" alt="智慧城市">
                  </img>
                  <span style={{fontSize: '30px', color: '#0033A1',marginLeft:'10px'}}>智慧城市</span>
                </div>
              </div>} key="1">
                <div >
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhihuichengshi.png" width="100%" alt="智慧城市"></img>
                </div>
              </Panel>
            </Collapse>

            <Collapse
              style={{marginTop: '50px'}}
              expandIconPosition='right'
            >
              <Panel style={{background:'#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                <div style={{marginTop:'3vh'}}>
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongyingicon.png" alt="供应链金融">
                  </img>
                  <span style={{fontSize: '30px', color: '#0033A1',marginLeft:'10px'}}>供应链金融</span>
                </div>
              </div>} key="1">
                <div >
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongyinglianjinrong.png" width="100%" alt="供应链金融"></img>
                </div>
              </Panel>
            </Collapse>

            <Collapse
              style={{marginTop: '50px'}}
              expandIconPosition='right'
            >
              <Panel style={{background:'#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                <div style={{marginTop:'3vh'}}>
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/chanpingicon.png" alt="产品溯源">
                  </img>
                  <span style={{fontSize: '30px', color: '#0033A1',marginLeft:'10px'}}>产品溯源</span>
                </div>
              </div>} key="1">
                <div >
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/chanping.png" width="100%" alt="产品溯源"></img>
                </div>
              </Panel>
            </Collapse>

            <Collapse
              style={{marginTop: '50px'}}
              expandIconPosition='right'
            >
              <Panel style={{background:'#fff'}} header={<div style={{height: '6vh', textAlign: 'center'}}>
                <div style={{marginTop:'3vh'}}>
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/shuziicon.png" alt="数字身份">
                  </img>
                  <span style={{fontSize: '30px', color: '#0033A1',marginLeft:'10px'}}>数字身份</span>
                </div>
              </div>} key="1">
                <div >
                  <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/shuzi.png" width="100%" alt="数字身份"></img>
                </div>
              </Panel>
            </Collapse>
           
          </div>
        </div>
      </div>);
    }
     else {
      return (
        <div {...props} {...dataSource.wrapper}>
          <a name="jiejuefangan"></a>
          <div {...dataSource.page}>
            <div {...dataSource.titleWrapper}>
              {dataSource.titleWrapper.children.map(getChildrenToRender)}
            </div>
            <OverPack {...dataSource.OverPack}>
              <TweenOne.TweenOneGroup
                key="tabs"
                enter={{
                  y: 30,
                  opacity: 0,
                  delay: 200,
                  type: 'from',
                }}
                leave={{y: 30, opacity: 0}}
                {...dataSource.tabsWrapper}
              >
                <Tabs
                  tabPosition="left"
                  key="tabs"
                  onChange={this.onChange}
                  activeKey={`${this.state.current}`}
                  {...dataSource.block}
                >
                  {tabsChildren}
                </Tabs>
              </TweenOne.TweenOneGroup>
            </OverPack>
          </div>
        </div>
      );
    }
  }
}

export default Content7;
