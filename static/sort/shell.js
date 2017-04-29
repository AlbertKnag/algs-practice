/**
 * Created by YiYing on 2017/4/22.
 */
(function (W) {

    function Shell(arr) {
        this.arr = arr;
    }

    /**
     * 冒泡排序算法实现
     */
    Shell.prototype.sort = function () {
        var len = this.arr.length;
        var h   = 1;
        //自动生成序列。步长序列为1、4、13、40、121、364、1093......
        while(h<parseInt(len/3)){
            h = h*3+1;
        }
        while(h>=1){
            for(var i=h;i<len;i++){
                //当h>1时，实际上是把后面的一次性移动到前面。最后h为1时实际上就是对arr进行插入排序
                for(var j=i;j>=h && this.less(j,j-h);j=j-h){
                    this.exchange(j,j-h);
                }
            }
            //每执行一次，步长依次递减，最终步长递减为1。
            h = parseInt(h/3);
        }
    };

    /**
     * 判断m是否小于n
     * @param m
     * @param n
     */
    Shell.prototype.less = function (m,n) {
        //可根据不同的数据类型设置比对规则，比如json。这里适用于数字与字符串。
        return this.arr[m]<this.arr[n];
    };

    /**
     * 交换数组中m与n的位置
     * @param m
     * @param n
     */
    Shell.prototype.exchange = function (m,n) {
        var swap    = this.arr[m];
        this.arr[m] = this.arr[n];
        this.arr[n] = swap;
    };

    /**
     * 打印排序后的数组
     */
    Shell.prototype.show = function () {
        console.log(this.arr);
    };

    /**
     * 判断是否已排序
     * @returns {boolean}
     */
    Shell.prototype.isSorted = function () {
        var len = this.arr.length;
        for(var i=1;i<len;i++){
            if(this.less(i,i-1)){
                return false;
            }
        }
        return true;
    };

    W.Shell = Shell;
})(window);

//测试代码
(function () {
    var arr = [4,5,6,0,3,5,21,7,9,0,1];
    var shell = new Shell(arr);
    console.log("排序前："+shell.isSorted());
    shell.sort();
    console.log("排序后："+shell.isSorted());
    shell.show();
})();