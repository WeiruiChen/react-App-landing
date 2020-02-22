import React from 'react';
import {Card, Row, Col, Carousel, Icon} from 'antd';
import QueueAnim from 'rc-queue-anim';
import {Element} from 'rc-banner-anim';
import {getChildrenToRender} from './utils';
import 'rc-banner-anim/assets/index.css';

const {Meta} = Card;

class Banner extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {show: false};
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);

    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({show: true});
  }
  next() {
    this.slider.slick.slickNext();
  }
  prev() {
    this.slider.slick.slickPrev();
  }

  render() {
    const {...props} = this.props;
    const {...currentProps} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    const {
      wrapper,
      page,
    } = dataSource;
    if (this.props.isMobile) {
      return (
        <div>
          <div {...currentProps} {...wrapper}>
            <div {...page}>
              <div {...dataSource.titleWrapper} style={{display: 'inline'}}>
                {dataSource.titleWrapper.children.map(getChildrenToRender)}
                <a onClick={this.handleClick} style={{fontSize: '15px', color: '#898989', marginLeft: '80%'}}>查看更多></a>
              </div>
              <div>
                <div style={{marginLeft: '5%'}}>
                  <Card style={{width: '100%', height: '20%'}} hoverable >
                    {/* <Layout style={{height: '80%'}}>
                    <Sider> */}
                    <div style={{height: '100%'}}>
                      <div style={{width: '40%', height: '100%', float: 'left'}}>
                        <img
                          style={{width: '100%', height: '90%', marginBottom: '5%'}}
                          alt="example"
                          src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg1.png"
                        ></img>
                      </div>
                      <div style={{width: '60%', float: 'right'}}>
                        <span style={{
                          color: '#0033A1', fontSize: '8px'
                        }}>QuarkChain为北京邮电大学新生进行区块链讲座</span>
                        <div style={{marginTop: '7%', color: '#898989'}}>
                          <span style={{color: '#898989'}}>2019.12.10</span>
                          <a href="https://mp.weixin.qq.com/s/dZkxf3XMaCN5dNkq_M4h-g" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card style={{width: '100%', height: '20%', marginTop: '5%'}} hoverable >
                    <div >
                      <div style={{width: '40%', height: '100%', float: 'left'}}>
                        <img
                          style={{width: '100%', height: '100%'}}
                          alt="example"
                          src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg2.png"
                        ></img>
                      </div>
                      <div style={{width: '60%', float: 'right'}}>
                        <span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain项目进展报告：2020年1月</span>
                        <div style={{marginTop: '20%', color: '#898989'}}>
                          <span style={{color: '#898989'}}>2020.2.1</span>
                          <a href="https://mp.weixin.qq.com/s/13B853SzdDNhjvREKAU67Q" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card style={{width: '100%', height: '20%', marginTop: '5%'}} hoverable >
                    {/* <Layout style={{height: '80%'}}>
                    <Sider> */}
                    <div >
                      <div style={{width: '40%', height: '100%', float: 'left'}}>
                        <img
                          style={{width: '100%', height: '100%'}}
                          alt="example"
                          src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg3.png"
                        ></img>
                      </div>
                      <div style={{width: '60%', float: 'right'}}>
                        <span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain开启开发者悬赏开发主网工具可获万元奖励</span>
                        <div style={{marginTop: '7%', color: '#898989'}}>
                          <span style={{color: '#898989'}}>2020.1.16</span>
                          <a href="https://mp.weixin.qq.com/s/-cyJSlebhtjI3ZSxi4Le9w" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                        </div>
                      </div>
                    </div>
                  </Card>
                  <div style={{display: this.state.show ? 'block' : 'none'}}>
                    <Card style={{width: '100%', height: '20%', marginTop: '5%'}} hoverable >
                      {/* <Layout style={{height: '80%'}}>
                    <Sider> */}
                      <div >
                        <div style={{width: '40%', height: '100%', float: 'left'}}>
                          <img
                            style={{width: '100%', height: '100%'}}
                            alt="example"
                            src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongao4.png"
                          ></img>
                        </div>
                        <div style={{width: '60%', float: 'right'}}>
                          <span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain夸克链需要更高的舞台 TPS比赛冠军采访</span>
                          <div style={{marginTop: '7%', color: '#898989'}}>
                            <span style={{color: '#898989'}}>2020.1.10</span>
                            <a href="https://mp.weixin.qq.com/s/KVwTNHBjDLjENA9H2BVnLg" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card style={{width: '100%', height: '20%', marginTop: '5%'}} hoverable >
                      <div >
                        <div style={{width: '40%', height: '100%', float: 'left'}}>
                          <img
                            style={{width: '100%', height: '100%'}}
                            alt="example"
                            src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gonggao5.png"
                          ></img>
                        </div>
                        <div style={{width: '60%', float: 'right'}}>
                          <span style={{color: '#0033A1', fontSize: '8px'}}>QuarkChain CMO跨年直播|都说19年是公链的“滑铁卢”,2020公链如何东山再起？</span>
                          <div style={{marginTop: '4%', color: '#898989'}}>
                            <span style={{color: '#898989'}}>2020.1.1</span>
                            <a href="https://mp.weixin.qq.com/s/PoAqGiSNoRpWSFTh89VxBQ" target="_black" style={{color: '#898989', float: 'right'}}>查看更多>></a>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >

      )
    } else {
      return (
        <div>
          <a id="gongsidongtai"></a>
          <div {...currentProps} {...wrapper}>
            <div {...page}>
              <div {...dataSource.titleWrapper}>
                {dataSource.titleWrapper.children.map(getChildrenToRender)}
              </div>
              <div style={{background: '#F4F6F9'}}>
                <Row>
                  <Col span={1} style={{textAlign: 'center'}}>
                    <Icon type="left-circle" style={{fontSize: '30px', marginTop: '185px', color: '#7E8899'}} onClick={this.prev} />
                  </Col>
                  <Col span={22}><Carousel autoplay ref={el => (this.slider = el)}>
                    <div>
                      <Row style={{marginTop: '50px'}} type="flex" align="bottom" justify="space-around">
                        <Col span={6} > <Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/dZkxf3XMaCN5dNkq_M4h-g")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg1.png" />}
                        >
                          <Meta title={<div>
                            <span style={{
                              fontSize: '14px',
                              display: 'block',
                              whiteSpace: 'pre-wrap',
                              color: '#0033A1', wordBreak: 'normal', display: 'block', wordWarp: 'break-word', overflow: 'hidden'
                            }}>QuarkChain为北京邮电大学新生进行区块链讲座</span>
                          </div>} description="2019.12.10" />
                        </Card></Col>
                        <Col span={6} offset={1}><Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/13B853SzdDNhjvREKAU67Q")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg2.png" />}
                        >
                          <Meta title={<div>
                            <span style={{
                              fontSize: '14px', color: '#0033A1', display: 'block',
                              whiteSpace: 'pre-wrap',
                              color: '#0033A1', wordBreak: 'normal', display: 'block', wordWarp: 'break-word', overflow: 'hidden'
                            }}>QuarkChain项目进展报告:2020年1月</span>
                          </div>} description="2020.2.1" />
                        </Card></Col>
                        <Col span={6} offset={1}><Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/-cyJSlebhtjI3ZSxi4Le9w")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg3.png" />}
                        >
                          <Meta title={<div>
                            <span style={{
                              fontSize: '14px', color: '#0033A1', display: 'block',
                              whiteSpace: 'pre-wrap',
                              color: '#0033A1', wordBreak: 'normal', display: 'block', wordWarp: 'break-word', overflow: 'hidden'
                            }}>QuarkChain开启开发者悬赏开发主网工具可获万元奖励</span>
                          </div>} description="2020.1.16" />
                        </Card></Col>
                      </Row>
                    </div>
                    <div >
                      <Row style={{marginTop: '50px'}} type="flex" align="bottom" justify="space-around">
                        <Col span={6} > <Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/KVwTNHBjDLjENA9H2BVnLg")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongao4.png" />}
                        >
                          <Meta title={<div>
                            <span style={{
                              fontSize: '14px', color: '#0033A1', display: 'block',
                              whiteSpace: 'pre-wrap',
                              color: '#0033A1', wordBreak: 'normal', display: 'block', wordWarp: 'break-word', overflow: 'hidden'
                            }}>QuarkChain夸克链需要更高的舞台 TPS比赛冠军采访</span>
                          </div>} description="2020.1.10" />
                        </Card></Col>
                        <Col span={6} offset={1}><Card hoverable
                          cover={<img alt="example" onClick={() => window.open("https://mp.weixin.qq.com/s/PoAqGiSNoRpWSFTh89VxBQ")} src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gonggao5.png" />}
                        >
                          <Meta title={
                            <div>
                              <span style={{
                                fontSize: '14px', color: '#0033A1', wordBreak: 'normal', display: 'block', wordWarp: 'break-word', overflow: 'hidden'
                              }}>QuarkChain CMO跨年直播|都</span>
                              <span className="show-text"> 说19年是公链的“滑铁卢”,2020公链如何东山再起？</span>
                            </div>
                          } description="2020.1.1" />
                        </Card></Col>
                        <Col span={6} offset={1}></Col>
                      </Row>
                    </div>
                  </Carousel>
                  </Col>
                  <Col span={1} style={{textAlign: 'center'}}>
                    <Icon type="right-circle" style={{fontSize: '30px', marginTop: '185px', color: '#7E8899'}} onClick={this.next} />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Banner;
