// 同步
//import _ from 'lodash';
//console.log(_.join(['a', 'b', 'c'], '******'))

// 异步
function getComponent () {
  return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _}) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Dell', "Lee"], "-");
    return element;
  });
};

getComponent().then((el) => {
  document.body.appendChild(el);
});

//代码分割 和 webpack 无关
//wenpack 上实现代码分割 两种方式
// 01 同步
  //只需设置 optimization 配置 splitChunks  --》 chunks: 'all'
// 02 异步
  // import: => 无需做配置 会自动进行代码分割 利用  -----》 dynamic-import-webpack