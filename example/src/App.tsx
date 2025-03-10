import React from 'react';
import CallApp from 'callapp-lib';
import './App.css';

const option = {
  scheme: {
    protocol: 'zhihu',
  },
  intent: {
    package: 'com.zhihu.android',
    scheme: 'zhihu',
  },
  universal: {
    host: 'oia.zhihu.com/question/270839820/answer/477722658',
    pathKey: 'action',
  },
  appstore: 'https://itunes.apple.com/cn/app/id432274380',
  yingyongbao: '//a.app.qq.com/o/simple.jsp?pkgname=com.zhihu.android',
  fallback: 'https://oia.zhihu.com/',
  timeout: 2000,
};

const lib = new CallApp(option);

const ua = navigator.userAgent || '';

function evoke(url: string) {
  var iFrame;

  iFrame = document.createElement('iframe');
  iFrame.setAttribute('src', url);
  iFrame.setAttribute('style', 'display:none;');
  iFrame.setAttribute('height', '0px');
  iFrame.setAttribute('width', '0px');
  iFrame.setAttribute('frameborder', '0');
  document.body.appendChild(iFrame);

  iFrame = null;
}

function evokeByLocation(uri: string): void {
  window.location.href = uri;
}

function evokeByTagA(uri: string): void {
  const tagA = document.createElement('a');

  tagA.setAttribute('href', uri);
  tagA.style.display = 'none';
  document.body.append(tagA);

  tagA.click();
}

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          alert(ua);
        }}
      >
        ua
      </button>
      <button
        onClick={() => {
          evoke('zhihu://');
        }}
      >
        schema - iframe
      </button>
      <button
        onClick={() => {
          evokeByLocation('zhihu://');
        }}
      >
        schema - location
      </button>
      <button
        onClick={() => {
          evokeByTagA('zhihu://');
        }}
      >
        schema - A Tag
      </button>
      <button
        onClick={() => {
          evokeByLocation(lib.generateIntent({ path: '' }));
        }}
      >
        intent - location
      </button>
      <button
        onClick={() => {
          evokeByLocation('https://flash-link.youku.com');
        }}
      >
        universal-link
      </button>
      <button
        onClick={() => {
          lib.open({ path: '' });
        }}
      >
        callapp-lib 唤端
      </button>
    </div>
  );
}

export default App;
