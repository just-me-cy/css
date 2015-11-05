
    var Star = function(opt) {
        this.xLength = opt.xLength || 900;//沿x轴显示范围
        this.yLength = opt.yLength || 450;//沿y轴显示范围

        this.xMargin = opt.xMargin || 50;//离canvas上边距
        this.yMargin = opt.yMargin || 50;//离canvas下边距

        this.x;//canvas上的x坐标
        this.y;//canvas上的y坐标

        this.xMove;//在canvas上沿x轴平移
        this.yMove;//在canvas上沿y轴平移

        this.picNo;//显示第几帧
        this.timer;
        this.beta;
    }

    Star.prototype = {

        constructor:Star

        //使用随机值初始化
        ,init:function(num){
            this.x = Math.random()*this.xLength + this.xMargin;
            this.y = Math.random()*this.yLength + this.yMargin;

            this.xMove = Math.random()*1.2 - 0.6;
            this.yMove = Math.random()*0.6 - 0.3;

            this.picNo = Math.floor(Math.random()*7);
            this.timer = 0;

            this.beta = Math.random()*Math.PI*0.5;
        },

        //每隔一段时间更新一次--位置变化
        update:function(deta){
            this.xMove = Math.random()*1.2 - 0.6;
            this.yMove = Math.random()*0.6 - 0.3;

            this.x += this.xMove;
            this.y += this.yMove;

            if(this.x < this.xMargin || this.x > this.xMargin + this.xLength){
                this.init();
            }
            if(this.y < this.yMargin || this.y > this.yMargin + this.yLength){
                this.init();
            }

            this.timer += delta;
            if(this.timer > 30){
                this.picNo += 1;
                this.picNo %= 7;
                this.timer = 0;
            }
        },
        //每隔一段时间更新一次--位置不变
        updateFixed: function (deta) {
            this.timer +=  delta;
            if(this.timer > 30){
                this.picNo += 1;
                this.picNo %= 7;
                this.timer = 0;
            }
        },

        //在canvase中绘制
        draw: function (delta) {
            this.beta += delta *0.005;
            ctx.save();
            ctx.globalAlpha = Math.sin(this.beta)*alive; //设置canvas中星星图层的透明度[0,1]
            ctx.drawImage(starG,this.picNo*7,0,7,7,this.x,this.y,7,7);//绘制星星
            ctx.restore();
        }

    }





