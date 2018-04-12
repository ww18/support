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

export default PraiseButton;

