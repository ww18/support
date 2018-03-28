import Thumb from "../assets/Thumb.js";

describe("测试Thumb生成的是html", function() {
  var thumb = new Thumb('.className');

  it("调用new方法测试", function() {
	expect(thumb.clickNum).toBe(0);
	expect(thumb.numHtml.className).toEqual("support-number");
	expect(thumb.numHtml.innerHTML).toEqual(''+thumb.clickNum);
  });

  it("调用click方法测试", function() {
  	thumb.addClick();
	expect(thumb.clickNum).toBe(1);
	expect(thumb.numHtml.innerHTML).toEqual(''+thumb.clickNum);
  });
  
});