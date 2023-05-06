const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.2

c.fillRect(0 ,0 , canvas.width, canvas.height)

class Sprite{
    constructor({position, velocity}){
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
    }

    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x ,this.position.y , this.width, this.height)
    }

    update(){
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        
        if(this.position.y + this.height + this.velocity.y >= canvas.height){
            this.velocity.y = 0
        }else{
            this.velocity.y += gravity
        }
    }
}
//player
const player = new Sprite({
    position:{
        x:0,
        y:0
    },
    velocity:{
        x:0,
        y:0
    }
})


//enemy
const enemy = new Sprite({
    position:{
        x:550,
        y:0
    },
    velocity:{
        x:0,
        y:0
    }
})


function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.update()
    enemy.update()
}

animate()

window.addEventListener('keydown', (e)=>{
    console.log(e)
    switch (e.key){
        case 'd':
            player.velocity.x = 2
            break;
        case 'a':
            player.velocity.x = -2
            break;
        
    }
})

window.addEventListener('keyup', (e)=>{
    console.log(e)
    switch (e.key){
        case 'd':
            player.velocity.x = 0
            break;
        case 'a':
            player.velocity.x = 0
            break;
    }
})