import React from 'react';
import {Card, Row, Col, Carousel} from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, {TweenOneGroup} from 'rc-tween-one';
import BannerAnim, {Element} from 'rc-banner-anim';
import {getChildrenToRender} from './utils';
import {isImg} from './utils';
import 'rc-banner-anim/assets/index.css';

const {Meta} = Card;
const {BgElement} = Element;
class Banner extends React.PureComponent {
  render() {
    const {...props} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    const childrenToRender = dataSource.BannerAnim.children.map((item, i) => {
      const elem = item.BannerElement;
      const elemClassName = elem.className;
      delete elem.className;
      const {bg, textWrapper, content} = item;
      return (
        <Element style={{background: "#F4F6F9"}} key={i.toString()} {...elem} prefixCls={elemClassName}>
          {/* <BgElement key="bg" {...bg} 
          
          /> */}

          <QueueAnim
            type={['bottom', 'top']}
            delay={200}
            key="text"
            {...textWrapper}
          >
            <div key="content" {...content}>
              {content.children}
            </div>

          </QueueAnim>
        </Element>
      );
    });
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <Carousel autoplay >
            <div>
              <Row style={{marginTop: '50px'}} type="flex" align="bottom" justify="space-around">
                <Col span={6} > <Card hoverable
                  cover={<img alt="example" src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg1.png" />}
                >
                  <Meta title="QuarkChain为北京邮电大学新生进行区块链讲座" description="2019.12.10" />
                </Card></Col>
                <Col span={6} offset={1}><Card hoverable
                  cover={<img alt="example" src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg2.png" />}
                >
                  <Meta title="QuarkChain为北京邮电大学新生进行区块链讲座" description="2020.2.1" />
                </Card></Col>
                <Col span={6} offset={1}><Card hoverable
                  cover={<img alt="example" src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/bannerbg3.png" />}
                >
                  <Meta title="QuarkChain为北京邮电大学新生进行区块链讲座" description="2020.1.16" />
                </Card></Col>
              </Row>
            </div>
            <div >
              <Row style={{marginTop: '50px'}} type="flex" align="bottom" justify="space-around">
                <Col span={6} > <Card hoverable
                  cover={<img alt="example" src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongao4.png" />}
                >
                  <Meta title="QuarkChain为北京邮电大学新生进行区块链讲座" description="2020.1.10" />
                </Card></Col>
                <Col span={6} offset={1}><Card hoverable
                  cover={<img alt="example" src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gonggao5.png" />}
                >
                  <Meta title="QuarkChain为北京邮电大学新生进行区块链讲座" description="2020.1.1" />
                </Card></Col>
                <Col span={6} offset={1}></Col>
              </Row>
            </div>
          </Carousel>
        </div>
      </div >
    );
  }
}

export default Banner;
