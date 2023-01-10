class Snake {
    // 表示蛇的元素
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');

    }

    // 获取蛇的坐标(蛇头)
    get X(){
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value) {
        if (this.X === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }



        this.moveBody();
        this.head.style.left = value + 'px';

        if (this.zhuangdaoziji()) {
            throw new Error('撞到自己了');
        }
    }

    set Y(value) {
        if (this.Y === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }


        this.moveBody();
        this.head.style.top = value + 'px';

        if (this.zhuangdaoziji()) {
            throw new Error('撞到自己了');
        }
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    moveBody() {
        for (let i = this.bodies.length -1; i > 0; i--) {
            let currentBody = this.bodies[i] as HTMLElement
            let lastBody = this.bodies[i-1] as HTMLElement
            let X = lastBody.offsetLeft;
            let Y = lastBody.offsetTop;

            currentBody.style.left = X + 'px';
            currentBody.style.top = Y + 'px';
        }
    }

    zhuangdaoziji() {
        for (let i = this.bodies.length -1; i > 0; i--) {
            let currentBody = this.bodies[i] as HTMLElement
            if (currentBody.offsetTop === this.Y && currentBody.offsetLeft === this.X) {
                return true;
            }
        }
        return false;
    }

}

export default Snake;