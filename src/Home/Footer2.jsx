import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {isImg} from './utils';
import {getChildrenToRender} from './utils';

class Footer2 extends React.PureComponent {
  render() {
    const {...props} = this.props;
    const {dataSource} = props;
    delete props.dataSource;
    delete props.isMobile;
    return (
      <div>
        <h1 style={{fontSize: '32px', margin: ' 0 auto', textAlign: 'center'}}>联系我们</h1>
        <h2 style={{fontSize: '24px', margin: '0 auto 64px', textAlign: 'center'}}>Email: margaret.xie@shadingtech.com</h2>
        <div {...props} {...dataSource.wrapper}>
          {/* <div {...dataSource.page}>
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div> */}
          <OverPack {...dataSource.OverPack}>
            <TweenOne {...dataSource.links}>
              {dataSource.links.children.map((item, i) => {
                return (
                  <a key={i.toString()} {...item}>
                    <img src={item.children} height="100%" alt="img" />
                  </a>
                );
              })}
            </TweenOne>
            <TweenOne
              animation={{x: '+=30', opacity: 0, type: 'from'}}
              key="copyright"
              {...dataSource.copyright}
            >
              {dataSource.copyright.children.map((item, i) =>
                React.createElement(
                  item.name.indexOf('title') === 0 ? 'h1' : 'div',
                  {key: i.toString(), ...item},
                  typeof item.children === 'string' && item.children.match(isImg)
                    ? React.createElement('img', {
                      src: item.children,
                      alt: 'img',
                    })
                    : item.children
                )
              )}
            </TweenOne>
          </OverPack>
        </div>
      </div >
    );
  }
}

export default Footer2;
