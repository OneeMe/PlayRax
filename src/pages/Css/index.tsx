import { createElement } from 'rax';

import './index.css'

export default function () {
  return (
    <div className="root">
      <div className="one container">This is child one</div>
      <div id="box">
        <div className="container">This is two</div>
      </div>
    </div>
  );
}
