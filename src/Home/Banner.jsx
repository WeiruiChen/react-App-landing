import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import {Button} from 'antd';
import BannerImage from './BannerImage';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'home-banner',
  }
  render() {
    const {className} = this.props;
    return (
      <div 
        style={{
          width: '100%',
          height: '720px',
          textAlign: 'center',
          overflow: 'hidden',
          height: '656px',
          color: '#fff',
        }}>
        <div 
        style={{height: '100%',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '0',
          textAlign: 'center',}}>
          <QueueAnim
          style={{
            width: '50%',
            display: 'inline-block',
          }} delay={300} ease="easeOutQuart">
            <h1 key="h2">
              极简制作，一键呈现
            </h1>
            <p key="p">为您提供专业的云上建站服务，满足不同行业的个性化需求</p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                  window.location.href = '/activity/home';
                }}
              >
                开始使用
              </Button>
            </span>
          </QueueAnim>
          {/* <div className={`${className}-image-wrapper`}>
            <BannerImage />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Banner;
