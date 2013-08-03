snake
=====

### Design Thoughts:
- Only collision possible would be at the snakes head with something else. This creates a simplistic collision algorithm.
- The snake's head and tail only move. The rest of its segments stay the same until it becomes the tail. This creates a simpler and O(C) move algorithm. This
may be changed if you want to add powerups, etc that involve the middle of the snake.
- Game Manager will be the collision/move calculation of the whole game.
- How can we save the high score?
- Pause, play, keyboard input still need to be designed
- Should tile contain a state or be a prototype of the various types (snake, apple) for future use?
- should include a max length of snake + speed up timer if that is reached? For the extra nerds...
- should we add bombs? muahahhah
### Tile:
- contains a state and a nextstate?

##### States
- wall
- snake
- empty
- apple


### Snake: contains a linked list of tiles from the board it resides on
- contains the length?
- linked-list of snake segments
-head : pointer to first segment
-tail : pointer to last segment

##### Interaction API
- grow () : adds a segment to the head for X number of moves ( X = segments grown), no tail deletion
- follow( segment): adds segment to front of snake & deletes one segment from tail, no growth

##### Segment
- animate()

### Board
- tiles []
- size?

### Game Manager
- timer
- level/apples (eaten)
- points
- direction : direction where the snake's next move is ( N, S, E, W )
- Snake
- Board

##### Interaction API
- findNextMove () : calculates snake's move from keyboard input or lack thereof
- hasCollision(): checks next tile snake will move. If wall or snake, collision occurred.
- moveSnake(segment): if segment is apple, call snake's grow() function then makeApple(). else, calls snake's follow() and gives next segment.
- calcPoints() :
- makeApple() : finds empty tile and adds new apple
- newGame() : creates a new game
