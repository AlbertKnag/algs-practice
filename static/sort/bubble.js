/**
 * Created by YiYing on 2017/4/22.
 */
(function (W) {

    function Bubble(arr) {
        this.arr = arr;
    }

    /**
     * 冒泡排序算法实现
     */
    Bubble.prototype.sort = function () {
        var len = this.arr.length;
        for(var i=0;i<len;i++){
            //将最大的元素不断的沉到底部
            for(var j=0;j<len-i-1;j++){
                if(this.less(j+1,j)){
                    this.exchange(j+1,j);
                }
            }
        }
    };

    /**
     * 判断m是否小于n
     * @param m
     * @param n
     */
    Bubble.prototype.less = function (m,n) {
        //可根据不同的数据类型设置比对规则，比如json。这里适用于数字与字符串。
        return this.arr[m]<this.arr[n];
    };

    /**
     * 交换数组中m与n的位置
     * @param m
     * @param n
     */
    Bubble.prototype.exchange = function (m,n) {
        var swap    = this.arr[m];
        this.arr[m] = this.arr[n];
        this.arr[n] = swap;
    };

    /**
     * 打印排序后的数组
     */
    Bubble.prototype.show = function () {
        console.log(this.arr);
    };

    /**
     * 判断是否已排序
     * @returns {boolean}
     */
    Bubble.prototype.isSorted = function () {
        var len = this.arr.length;
        for(var i=1;i<len;i++){
            if(this.less(i,i-1)){
                return false;
            }
        }
        return true;
    };

    W.Bubble = Bubble;
})(window);

//测试代码
(function () {
    var arr = [4,5,6,0,3,5,21,7,9,0,1];
    var bubble = new Bubble(arr);
    console.log("排序前："+bubble.isSorted());
    bubble.sort();
    console.log("排序后："+bubble.isSorted());
    bubble.show();
})();