import PraiseButton from '../assets/PraiseButton.js';

describe("测试PraiseButton生成的是html", function() {
  var a;

  it("调用new方法测试", function() {
    a = new PraiseButton();
	expect(a.html).toEqual(jasmine.any(Object));
  });

});