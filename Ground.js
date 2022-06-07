class Ground{
    constructor(x,y,l,h) {
        var options = {
            isStatic: true
        }
        this.x = x 
        this.y = y
        this.l = l
        this.h = h
        this.body = Bodies.rectangle(x,y,l,h,options)
        World.add(world, this.body)
    }
    display(){
        var groundPos = this.body.position
        push()
        translate(groundPos.x, groundPos.y)
        rectMode(CENTER)
        fill(124)
        rect(0,0, this.l, this.h)
        pop()
    }
}