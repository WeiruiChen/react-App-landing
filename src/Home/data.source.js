import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: require('./img/logo-shading.png'),
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#hexinyoushi',
          children: [{ children: '核心优势', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#jiejuefangan',
          children: [{ children: '解决方案', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#hezuohuoban',
          children: [{ children: '合作伙伴', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#gongsidongtai',
          children: [{ children: '公司动态', name: 'text' }],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: '#guanyuwomen',
          children: [{ children: '关于我们', name: 'text' }],
        },
      }
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: '构筑下一代高吞吐多链异构联盟链引领自主可控区块链技术和产业发展潮流',
  },
  content: {
    className: 'banner0-content',
    children: '',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Feature50DataSource = {
  wrapper: { className: 'home-page-wrapper feature5-wrapper' },
  page: { className: 'home-page feature5' },
  OverPack: {},
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '解决方案', className: 'title-h1' },
      {
        name: 'content',
        children: '鲨丁区块链以成熟的行业解决方案为依托，支持政务上链、智慧城市、供应链金融、存证溯源等多种应用场景快速落地，全面满足企业需求。',
      },
    ],
  },
  tabsWrapper: { className: 'feature5-tabs-wrapper' },
  block: {
    children: [
      {
        name: 'block0',
        tag: {
          className: 'feature5-tag',
          text: { children: '政务上链', className: 'feature5-tag-name' },
          icon: { children: 'backzhenwu',className:'backzhenwu' },
        },
        content: {
          className: 'feature5-content',
          text: {
            className: 'feature5-text',
            md: 24,
            xs: 30,
            children: (
              <>
              <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhengwushanglian.png" width="100%"  alt="政务上链"></img>
              </>
            ),
          }
        },
      },
      {
        name: 'block1',
        tag: {
          className: 'feature5-tag',
          icon: { children: 'zhihui' ,className:'zhihui'},
          text: { className: 'feature5-tag-name', children: '智慧城市' },
        },
        content: {
          className: 'feature5-content',
          text: {
            className: 'feature5-text',
            md: 24,
            xs: 30,
            children: (
              <>
              <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhihuichengshi.png" width="100%"  alt="智慧城市"></img>
              </>
            ),
          }
        },
      },
      {
        name: 'block2',
        tag: {
          className: 'feature5-tag',
          text: { children: '供应链金融', className: 'feature5-tag-name' },
          icon: { children: 'gongying' ,className:'gongying'},
        },
        content: {
          className: 'feature5-content',
          text: {
            className: 'feature5-text',
            md: 24,
            xs: 30,
            children: (
              <>
              <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/gongyinglianjinrong.png" width="100%"  alt="供应链金融"></img>
              </>
            ),
          }
        },
      },
      {
        name: 'block3',
        tag: {
          className: 'feature5-tag',
          text: { children: '产品溯源', className: 'feature5-tag-name' },
          icon: { children: 'chanping' ,className:'chanping'},
        },
        content: {
          className: 'feature5-content',
          text: {
            className: 'feature5-text',
            md: 24,
            xs: 30,
            children: (
              <>
              <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/chanping.png" width="100%"  alt="产品溯源"></img>
              </>
            ),
          }
        },
      },
      {
        name: 'block3',
        tag: {
          className: 'feature5-tag',
          text: { children: '数字身份', className: 'feature5-tag-name' },
          icon: { children: 'shuzi' ,className:'shuzi'},
        },
        content: {
          className: 'feature5-content',
          text: {
            className: 'feature5-text',
            md: 24,
            xs: 30,
            children: (
              <>
              <img src="https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/shuzi.png" width="100%"  alt="数字身份"></img>
              </>
            ),
          }
        },
      },
    ],
  },
};
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '公司动态', className: 'title-h1' },
    ],
  },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg0' },
        // title: {
        //   className: 'banner1-title',
        //   children:
        //     'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        // },
        content: {
          className: 'banner1-content',
          children: '',
        }
      },
      {
        name: 'elem1',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg1' },
        // title: {
        //   className: 'banner1-title',
        //   children:
        //     'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        // },
        content: {
          className: 'banner1-content',
          children: '',
        },
      },
      {
        name: 'elem2',
        BannerElement: { className: 'banner-user-elem' },
        textWrapper: { className: 'banner1-text-wrapper' },
        bg: { className: 'bg bg2' },
        // title: {
        //   className: 'banner1-title',
        //   children:
        //     'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
        // },
        content: {
          className: 'banner1-content',
          children: '',
        }
      },
    ],
  },
};
// export const Banner10DataSource = {
//   wrapper: { className: 'banner1' },
//   // titleWrapper: {
//   //   className: 'title-wrapper',
//   //   children: [{ name: 'title', children: '核心优势' },
//   //   {name:'content',children:'鲨丁区块链依靠多年分布式系统领域研发经验,通过自主创新,成为集高效、灵活、安全于一身的新一代联盟区块链解决方案。'}],
//   // },
//   BannerAnim: {
//     children: [
//       {
//         name: 'elem0',
//         BannerElement: { className: 'banner-user-elem' },
//         textWrapper: { className: 'banner1-text-wrapper' },
//         bg: { className: 'bg bg0' },
//         title: {
//           className: 'banner1-title',
//           children:
//             'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
//         },
//         content: {
//           className: 'banner1-content',
//           children: '一个高效的页面动画解决方案',
//         },
//         button: { className: 'banner1-button', children: 'Learn More' },
//       },
//       {
//         name: 'elem1',
//         BannerElement: { className: 'banner-user-elem' },
//         textWrapper: { className: 'banner1-text-wrapper' },
//         bg: { className: 'bg bg1' },
//         title: {
//           className: 'banner1-title',
//           children:
//             'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
//         },
//         content: {
//           className: 'banner1-content',
//           children: '一个高效的页面动画解决方案',
//         },
//         button: { className: 'banner1-button', children: 'Learn More' },
//       },
//       {
//         name: 'elem2',
//         BannerElement: { className: 'banner-user-elem' },
//         textWrapper: { className: 'banner1-text-wrapper' },
//         bg: { className: 'bg bg1' },
//         title: {
//           className: 'banner1-title',
//           children:
//             'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
//         },
//         content: {
//           className: 'banner1-content',
//           children: '一个高效的页面动画解决方案',
//         },
//         button: { className: 'banner1-button', children: 'Learn More' },
//       },
//     ],
//   },
// };
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '核心优势'},
    {name:'content',children:'鲨丁区块链依靠多年分布式系统领域研发经验,通过自主创新,成为集高效、灵活、安全于一身的新一代联盟区块链解决方案。'}],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'http://chuantu.xyz/t6/720/1582022961x2728265626.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '自主创新',
            },
            { name: 'content', children: '拥有经过多案例验证玻色子多链共识核心技术' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'http://chuantu.xyz/t6/720/1582023377x3661913030.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '灵活易用',
            },
            {
              name: 'content',
              children: '支持基于以太坊/HyperLedger/UTXO等账本和交易模型',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'http://chuantu.xyz/t6/720/1582023507x3703728804.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '安全可靠',
            },
            {
              name: 'content',
              children: '支持多粒度的多链联盟链准入制度',
            },
          ],
        },
      },
    ],
  },
  childWrapper1: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'http://chuantu.xyz/t6/720/1582023959x3703728804.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '高效共识',
            },
            { name: 'content', children: '支持多种CFT/BFT联盟链共识算法' },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'hhttp://chuantu.xyz/t6/720/1582024009x3661913030.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '无间跨链',
            },
            {
              name: 'content',
              children: '支持安全和高效的跨链互操作',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'http://chuantu.xyz/t6/720/1582024077x3661913030.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '按需扩容',
            },
            {
              name: 'content',
              children: '支持百万级别TPS（每秒交易）和PB级别链上数据存储',
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: '解决方案', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '多场景应用',
      },
      {
        name: 'content',
        children: '鲨丁区块链以成熟的行业解决方案为依托,支持政务上链、智慧城市、供应链金融、存证溯源等多种应用场景快速落地,全面满足企业需求。',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
          },
          content: { children: 'Ant Design' },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children:
              'https://zos.alipayobjects.com/rmsportal/faKjZtrmIbwJvVR.svg',
          },
          content: { children: 'Ant Motion' },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '关于我们' },
    {name:'content',children:`鲨丁区块链是专业区块链应用解决方案供应商，多年致力于分布式系统领域技术研发，依靠自主开发的行业领先区块链分片扩容技术，
    为诸多企业和政府机关提供了高效稳定的区块链解决方案，目前业务可在包括政务上链、智慧城市、供应链金融、
    存证溯源等多种应用场景快速落地，帮助更多企业和政府部门用更低的成本实现更高的效率。
    团队核心成员由国内外顶尖大学的教授、拥有超过10年大规模分布式系统发经验的 谷歌脸书 微软等高级工程师
    以及拥有多年企业服务经验的商务精英们组成。`}],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
              'https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/zhouqi.png'
            },
            { name: 'title', className: 'teams1-title', children: '周期' },
            {
              name: 'content',
              className: 'teams1-job',
              children: '创始人&CEO',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                `佐治亚理工博士
                 高性能系统专家
                 10年软件开发经验
                 曾就职于谷歌和脸书`,
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
              'https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/duting.png',
            },
            { name: 'title', className: 'teams1-title', children: '杜挺' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'CBD',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                `西安交通大学博士
                 大数据和产品管理专家
                 投资与孵化从业经验
                 曾就职于NHN中国、华院数据和六禾资本`,
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image',
              children:
                'https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/xiangyazhen.png',
            },
            { name: 'title', className: 'teams1-title', children: '向亚贞' },
            {
              name: 'content',
              className: 'teams1-job',
              children: 'CMO',
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children:
                `约翰霍普金斯大学硕士
                 2年华尔街金融从业经验
                 4年硅谷产品、市场、分析从业经验
                 曾就职于领英、Wish和Argus`,
            },
          ],
        },
      },
    ],
  },
};
export const Teams20DataSource = {
  wrapper: { className: 'home-page-wrapper teams2-wrapper' },
  page: { className: 'home-page teams2' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '合作伙伴' },
    {name:'content',children:`鲨丁区块链携手战略合作伙伴，在构筑全球多链联盟链基础设施的探索中一起砥砺前行，
    用区块链技术创造更多的价值！`}],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams2-image',
              children:
              'https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/hezuo1.png'
            }
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams2-mid',
              children:
              'https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/hezuo2.png',
            }
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams2-image',
              children:
                'https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/hezuo3.png',
            }
          ],
        },
      },
    ],
  },
};
export const Footer20DataSource = {
  wrapper: { className: 'home-page-wrapper footer2-wrapper' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '联系我们' },
    {name:'content',children:`Email: margaret.xie@shadingtech.com`}],
  },
  OverPack: { className: 'home-page footer2', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: [
      {
        name:'text',
        children:'核心优势',
        className: 'copyright-text',
      },
      {
        name:'text',
        children:'解决方案',
        className: 'copyright-text',
      },
      {
        name:'text',
        children:'合作伙伴',
        className: 'copyright-text',
      },
      {
        name:'text',
        children:'公司动态',
        className: 'copyright-text',
      },
      {
        name:'text',
        children:'关于我们',
        className: 'copyright-text',
      }
    ],
  },
  links: {
    className: 'links',
    children: [
      {
        name: 'shading',
        href: '#',
        className: 'links-weibo',
        children:
          'https://sha-ding.oss-cn-beijing.aliyuncs.com/sha-ding/logo-shading.png',
      }
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'Animation specification and components of Ant Design.',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: '产品更新记录' },
            { name: 'link1', href: '#', children: 'API文档' },
            { name: 'link2', href: '#', children: '快速入门' },
            { name: 'link3', href: '#', children: '参考指南' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: '联系我们' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Ant Design' },
            { href: '#', name: 'link1', children: 'Ant Motion' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <span>
          ©2018 by <a href="https://motion.ant.design">Ant Motion</a> All Rights
          Reserved
        </span>
      </>
    ),
  },
};
