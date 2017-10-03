/**
 * Created by admin on 03-10-2017.
 */
/*

 An element in a sorted array can be found in O(log n) time via binary search.
  But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand.
   So for instance, 1 2 3 4 5 might become 3 4 5 1 2.
  Devise a way to find an element in the rotated array in O(log n) time.

 The idea is to find the pivot point, divide the array in two sub-arrays and call binary search.
 The main idea for finding pivot is – for a sorted (in increasing order) and pivoted array, pivot element is the only only element for which next element to it is smaller than it.
 Using above criteria and binary search methodology we can get pivot element in O(logn) time

 Input arr[] = {3, 4, 5, 1, 2}
 Element to Search = 1
 1) Find out pivot point and divide the array in two
 sub-arrays. (pivot = 2)
2) Now call binary search for one of the two sub-arrays.
(a) If element is greater than 0th element then
search in left array
(b) Else Search in right array
(1 will go in else as 1 < 0th element(3))
3) If element is found in selected sub-array then return index
Else return -1.

 */


class Program{
    constructor(private input:Array<number>,private element:number){

    }


    private binarySearch(low:number,high:number){
        if(low>high)
            return -1;
        let mid=Math.floor(Number((low+high)/2));
        if(this.input[mid]===this.element)
            return mid;
        if(this.element>this.input[mid])
            return this.binarySearch(mid+1,high)
        else
            return this.binarySearch(low,mid-1);
    }

    private findPivot(low:number,high:number){
        if(low>high)
            return -1;
        if(low===high)
            return low;

        let mid=Math.floor(Number((low+high)/2));
        if(mid<high && this.input[mid+1]<this.input[mid])
            return mid;
        if(mid>low && this.input[mid-1]>this.input[mid])
            return mid-1;
        if(this.input[mid]<=this.input[low])
            return this.findPivot(low,mid-1)
        return this.findPivot(mid+1,high)
    }

    public search(){
        let pivot=this.findPivot(0,this.input.length-1);
        console.log(pivot)
        if(pivot===-1)
            return this.binarySearch(0,this.input.length-1);
        if (this.input[pivot] == this.element)
            return pivot;

        if(this.input[0]<=this.element)
            return this.binarySearch(0,pivot-1)
        return this.binarySearch(pivot+1,this.input.length-1);
    }
}



let p1=new Program([5, 6, 7, 8, 9, 10, 1, 2, 3],2);
console.log('answer is ',p1.search());