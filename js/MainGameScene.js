/**
 * Created by cong on 2015/9/8.
 *
 */

var MainGameScene = cc.Scene.extend({
    ctor:function(){
        this._super();
        var size = cc.director.getWinSize();
        var sprite = cc.Sprite.create("img/back.png");
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);

        var label = cc.LabelTTF.create("Hello World", "Arial", 40);
        label.setPosition(size.width / 2, size.height / 2);
        label.color = cc.color(0,0,255);

        this.addChild(label, 1);

    }

})
