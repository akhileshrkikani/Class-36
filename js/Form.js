class Form{
constructor(){}

display(){
    var title=createElement('h2')
    title.html("CAR RACING")
    title.position(500,0)
    var input=createInput('Name')
    input.position(500,160)
    var button=createButton("PLAY")
    button.position(500,200)
    var greeting=createElement('h3')

    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()

        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
        greeting.html("HELLO:"+name)
        greeting.position(500,160)
    })
}

}