/**
 * Created by YiYing on 2017/5/2.
 */
(function (W) {

    /**
     * 优先队列
     * @constructor
     */
    function MaxQueue() {
        this.queue = [];                //- 存储基于堆的完全二叉树
        this.len   = 0;                 //- 存储于queue[1..len]中，queue[0]未使用
    }

    /**
     * 向优先队列中插入元素
     * @param val
     */
    MaxQueue.prototype.insert = function (val) {
        this.queue[++this.len] = val;    //- 从索引1开始添加元素
        //使新增元素上浮到树的正确位置
        swim(this.queue,this.len);
    };

    /**
     * 删除优先队列中的最大元素，并返回该元素
     * @returns {*}
     */
    MaxQueue.prototype.delMax = function () {
        var max = this.queue[1];        //- 从根节点得到最大元素
        exch(this.queue,1,this.len--);  //- 把最后一个节点放到根节点上，并且让长度索引减一
        this.queue.length = this.len+1; //- 删除最后一个节点
        sink(this.queue,1);             //- 下沉根节点，恢复堆的有序性
        return max;
    };

    MaxQueue.prototype.show = function () {
        console.log(this.queue);
    };

    MaxQueue.prototype.isEmpty = function () {
        return this.len==0;
    };

    W.MaxQueue = MaxQueue;


    /**
     * 堆排序算法
     * @constructor
     */
    function HeapSort() {}
    HeapSort.prototype.sort = function (arr) {
        var len = arr.length;
        //由于arr[0]不使用，放到最后使得能够被排序
        //注意：也可在less和exch中解决，见后面的Java完整代码实现。这里为了对应位置1的元素不使用，方便对照看代码与样例图。
        arr[len] = arr[0];
        //使用下沉来构造二叉堆
        for(var k=parseInt(len/2);k>=1;k--){
            sink(arr,k,len);
        }
        //不断把最大的arr[1]交换到最后，然后让新的arr[1]元素下沉到堆有序状态
        while (len>1){
            exch(arr,1,len--);
            sink(arr,1,len);
        }
        //删除未使用的arr[0]（也可在less和exch中解决，见Java代码实现）
        arr.splice(0,1);
    };

    W.HeapSort = HeapSort;


    //下标为k的元素上浮到正确位置
    function swim(arr,k) {
        while(k>1 && less(arr,parseInt(k/2),k)){
            //父节点索引
            var parentNode = parseInt(k/2);
            exch(arr,parentNode,k);
            k = parentNode;
        }
    }

    //下标为k的元素下沉到正确位置
    function sink(arr,k,len) {
        var len = len ||arr.length;
        while(2*k <= len){
            var j = 2*k;
            if(j<len && less(arr,j,j+1)) j++;
            if(!less(arr,k,j)) break;
            exch(arr,k,j);
            k = j;
        }
    }

    function less(arr,m,n) {
        //可根据不同的数据类型设置比对规则，比如json。这里适用于数字与字符串。
        return arr[m]<arr[n];
    }

    /**
     * 交换数组arr中m与n的位置
     * @param m
     * @param n
     */
    function exch(arr,m,n) {
        var swap    = arr[m];
        arr[m]      = arr[n];
        arr[n]      = swap;
    }


})(window);

//测试代码
(function () {
    //优先队列测试，依次从大到小输出元素
    var q = new MaxQueue();
    q.insert(3);
    q.insert(33);
    q.insert(9);
    q.insert(21);
    while (!q.isEmpty()){
        console.log(q.delMax())
    }

    //堆排序测试代码
    var arr = [4,5,6,0,3,5,21,7,9,0,1];
    new HeapSort().sort(arr);
    console.log(arr);
})();