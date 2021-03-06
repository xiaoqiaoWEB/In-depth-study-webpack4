// 同步
//import _ from 'lodash';
//console.log(_.join(['a', 'b', 'c'], '******'))

// 异步
// function getComponent () {
//   return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _}) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['Dell', "Lee"], "-");
//     return element;
//   });
// };

// async function getComponent() {
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */'lodash');
//   const element = document.createElement('div');
//   element.innerHTML = _join(['Dell', 'lee'], '-');
//   return element;
// }

// document.addEventListener('click', () => {
//   getComponent().then((element) => {
//     document.body.appendChild(element);
//   })
// })

// getComponent().then((el) => {
//   document.body.appendChild(el);
// });

//代码分割 和 webpack 无关
//wenpack 上实现代码分割 两种方式
// 01 同步
  //只需设置 optimization 配置 splitChunks  --》 chunks: 'all'
// 02 异步
  // import: => 无需做配置 会自动进行代码分割 利用  -----》 dynamic-import-webpack


// css 代码分割

// import './rest.css';
// import './index.css';
// console.log('hhh');

// import $ from 'jquery';
// import _ from 'lodash';
// import color from './ui'

// const dom = $('<div>');
// dom.html(_.join(['dell', 'lee', 'xiaoqiao', '号奥还需'], '---'));
// $('body').append(dom);

// color();

//pwa
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration  => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    })
  })
}

console.log('xiaoqiao')



