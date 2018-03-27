/**
 * Created by ww on 2018/3/27.
 */
class PraiseButton{
    constructor(){
        this.html = '';
        this.createEle();
    }
    createEle(){
        const arr = ['support-thumb','support-indexfinger','support-middlefinger','support-ringfinger','support-litterfinger','support-hand','support-arm'];
        let divContainer = document.createElement('div');
        divContainer.className = 'support-container';
        arr.forEach((item, index)=>{
            let ele = document.createElement('div');
            ele.className = item;
            divContainer.appendChild(ele);
        });
        this.html = divContainer;
    }
}

class Thumb extends PraiseButton{
    constructor(opt){
        super();
        this.opt = opt;
        this.clickNum = 0;
        this.numHtml = document.createElement('div');
        this.numHtml.className = 'support-number';
        this.numHtml.innerHTML = this.clickNum;
        this.init();
    }
    init(){
        const container = document.querySelector(this.opt.container);
        container.appendChild(this.numHtml);
        container.appendChild(this.html);

        this.addClick();
    }
    addClick(){
        this.html.addEventListener('click',()=>{
            let ani = document.createElement('div');
            ani.className = 'support-ani';
            ani.innerHTML = '+1';
            this.html.appendChild(ani);
            this.clickNum++;
            this.numHtml.innerHTML = this.clickNum;
            setTimeout(()=>{
                this.html.removeChild(ani);
            },1000)
        })
    }
}