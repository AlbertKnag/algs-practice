/**
 * Created by YiYing on 2017/4/30.
 */
(function (W) {
    function quick3way(a,lo,hi) {
        if(hi<=lo){return;}
        var lt=lo,i=lo+1,gt=hi;
        var v = a[lo];              //- 选择a[lo]为需要切分的元素
        while (i<=gt){
            if(a[i] < v){
                exch(a,lt++,i++)
            }else if(a[i] > v){
                exch(a,i,gt--);
            }else{
                i++;
            }
        }
        /*程序运行到这里结果为:a[lo..lt-1] < v < a[gt+1,hi];其中v=a[lt..gt]*/
        quick3way(a,lo,lt-1);       //- 对左侧（a[lo..lt-1]）进行排序
        quick3way(a,gt+1,hi);       //- 对右侧(a[gt+1,hi])进行排序
    }

    /**
     * 交换数组中m与n的位置
     * @param a  数组
     * @param m
     * @param n
     */
    function exch(a,m,n) {
        var swap    = a[m];
        a[m] = a[n];
        a[n] = swap;
    }

    W.Quick3way = function (a) {
        quick3way(a,0,a.length-1);
    }
})(window);

//测试代码
(function () {
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var arr = [];
    for(var i=0;i<1000000;i++){
        var id = Math.ceil(Math.random()*35);
        arr[i] = chars[id];
    }

    console.time("Quick3way");
    Quick3way(arr);      //- chrome下一百万数据平均120ms,明显优于快速排序
    console.timeEnd("Quick3way");
})();