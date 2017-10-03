

class Program{

    constructor(public input:Array<number>,public d:number){

    }

    rotateOneByOne() {
    let temp=this.input[0],i=0;
    for( i=0;i<this.input.length-1;i++){
        this.input[i]=this.input[i+1]
    }
        this.input[i]=temp;
    }


    rotate(){
        for(let i=0;i<this.d;i++){
            this.rotateOneByOne();
        }
        return this.input

    }
}


let p1=new Program([1,2,3,4,5,6,7,8],2);
console.log('answer is ',p1.rotate());



