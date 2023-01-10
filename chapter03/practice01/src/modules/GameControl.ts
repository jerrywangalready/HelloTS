import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {

    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = 'Right';

    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init() {
        // this.keydownHandler, 绑定的是document
        // this.keydownHandler.bind(this)绑定的是当前类
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run()
    }

    keydownHandler(event: KeyboardEvent) {
        function IsPressCorrect() {
            return true;
        }

        if (IsPressCorrect())
            this.direction = event.key;
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;

        }

        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch ({message}) {
            this.isLive = false;
            alert(message);
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    checkEat(X: number, Y: number) {

        if (X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }

    }
}

export default GameControl;