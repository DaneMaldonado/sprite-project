function Enemies () {
    Enemy1 = sprites.create(img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cdc.fe2222eeffff.
        .......cddcf2effff222ef.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        ..........cdceddf14d4eef
        ..........cccdeddd4eeef.
        ...........edd4e44eeff..
        ............ee442222f...
        .............f2e2222f...
        .............f554444f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Enemy2 = sprites.create(img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cdc.fe2222eeffff.
        .......cddcf2effff222ef.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        ..........cdceddf14d4eef
        ..........cccdeddd4eeef.
        ...........edd4e44eeff..
        ............ee442222f...
        .............f2e2222f...
        .............f554444f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Enemy3 = sprites.create(img`
        ..............ffffff....
        .............f2feeeeff..
        ............f222feeeeff.
        .......cc...feeeeffeeef.
        .......cdc.fe2222eeffff.
        .......cddcf2effff222ef.
        ........cddcffeeefffffff
        .........cddce44fbe44eff
        ..........cdceddf14d4eef
        ..........cccdeddd4eeef.
        ...........edd4e44eeff..
        ............ee442222f...
        .............f2e2222f...
        .............f554444f...
        ..............ffffff....
        ................fff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    Star.setPosition(100, 50)
    Enemy1.setPosition(160, 0)
    Enemy2.setPosition(160, 122)
    Enemy3.setPosition(1, 1)
    Enemy1.follow(Star, 42)
    Enemy2.follow(Star, 35)
    Enemy3.follow(Star, 40)
}
function Projectiles () {
    myEnemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    myEnemy.setPosition(randint(0, 160), randint(0, 120))
    myEnemy.setBounceOnWall(true)
    myEnemy.setVelocity(15, 15)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    game.gameOver(false)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
function SpawnCollectables () {
    Collectable1 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .....7977777777.....
        .....7777777777.....
        ......66666666......
        ......99999999......
        .....9999999999.....
        .....9999999999.....
        .....9999999999.....
        .....7777777777.....
        .....7777777777.....
        .....7777777776.....
        .....7777777776.....
        ......76666666......
        ....................
        ....................
        `, SpriteKind.Food)
    Collectable2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .....7977777777.....
        .....7777777777.....
        ......66666666......
        ......99999999......
        .....9999999999.....
        .....9999999999.....
        .....9999999999.....
        .....7777777777.....
        .....7777777777.....
        .....7777777776.....
        .....7777777776.....
        ......76666666......
        ....................
        ....................
        `, SpriteKind.Food)
    Collectable3 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .....7977777777.....
        .....7777777777.....
        ......66666666......
        ......99999999......
        .....9999999999.....
        .....9999999999.....
        .....9999999999.....
        .....7777777777.....
        .....7777777777.....
        .....7777777776.....
        .....7777777776.....
        ......76666666......
        ....................
        ....................
        `, SpriteKind.Food)
    Collectable4 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .....7977777777.....
        .....7777777777.....
        ......66666666......
        ......99999999......
        .....9999999999.....
        .....9999999999.....
        .....9999999999.....
        .....7777777777.....
        .....7777777777.....
        .....7777777776.....
        .....7777777776.....
        ......76666666......
        ....................
        ....................
        `, SpriteKind.Food)
    Collectable1.setPosition(randint(0, 160), randint(0, 120))
    Collectable2.setPosition(randint(0, 160), randint(0, 120))
    Collectable3.setPosition(randint(0, 160), randint(0, 120))
    Collectable4.setPosition(randint(0, 160), randint(0, 120))
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    Enemy1.setPosition(0, 0)
    Enemy2.setPosition(143, 6)
    Enemy3.setPosition(140, 103)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    for (let index = 0; index <= 4; index++) {
        let Score = 0
        if (Score >= 0) {
        	
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
let Collectable4: Sprite = null
let Collectable3: Sprite = null
let Collectable2: Sprite = null
let Collectable1: Sprite = null
let myEnemy: Sprite = null
let Enemy3: Sprite = null
let Enemy2: Sprite = null
let Enemy1: Sprite = null
let Star: Sprite = null
let High_Scores = [0, 0, 0]
let High_Score_Names = ["a", "b", "c"]
let Number_of_High_Scores = 3
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
Star = sprites.create(img`
    . . . . . . . b b . . . . . . . 
    . . . . . . b d d b . . . . . . 
    . . . . . b d 5 5 d b . . . . . 
    . . . . b b 5 5 5 5 b b . . . . 
    . . . . b 5 5 5 5 5 5 b . . . . 
    b b b b b 5 5 5 5 1 1 d b b b b 
    b 5 5 5 5 5 5 5 5 1 1 1 5 5 5 b 
    b d d 5 5 5 5 5 5 1 1 1 5 d d b 
    . b d d 5 5 5 5 5 5 5 5 d d b . 
    . . b b 5 5 5 5 5 5 5 5 b b . . 
    . . c b 5 5 5 5 5 5 5 5 b c . . 
    . . c 5 5 5 5 d d 5 5 5 5 c . . 
    . . c 5 5 d b b b b d 5 5 c . . 
    . . c 5 d b c c c c b d 5 c . . 
    . . c c c c . . . . c c c c . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Star, 100, 100)
Star.setBounceOnWall(true)
info.startCountdown(30)
info.setLife(3)
Enemies()
Projectiles()
game.onUpdateInterval(7000, function () {
    info.changeLifeBy(1)
    SpawnCollectables()
})
