window.onload = function(){
    var newtime = new Date().getTime();
    //封装一个未来时间
    function setTime(year,mon,day){
        return new Date(year,mon-1,day).getTime();
    }
    var time = setTime(2017,11,11);
    //差值
    var c = time-newtime;
    var dat = c/86400000;//天
    console.log(dat)

}