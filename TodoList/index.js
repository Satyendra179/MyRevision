
function obj(t,p){
    this.task=t;
    this.priority=p;
}
document.getElementById("submit").addEventListener("click",function(){
    event.preventDefault();
    var task=document.getElementById("task").value;
    var priority=document.getElementById("priority").value;
    var data=JSON.parse(localStorage.getItem('Todo'))||[];
    // console.log(data);
    data.push(new obj(task,priority));
    // data.push(new obj('hello','high'));
    // console.log(data);
    localStorage.setItem("Todo",JSON.stringify(data));
    window.location.reload();
   
})



function createTable(){
    data=JSON.parse(localStorage.getItem('Todo'));
    // console.log(dat||[])
    // console.log(dat);
    // console.log(task,priority);
    if(data){data.forEach((e,i)=>{
        let row=document.createElement("tr");
    
        let c1=document.createElement('td');
        c1.innerText=e.task;
        
        let c2=document.createElement('td');
        c2.innerText=e.priority;
        let c3=document.createElement('td');
        let btn=document.createElement('button');
        btn.innerText="Delete";

        c3.append(btn);
        let tb=document.createElement('tbody');
        row.append(c1,c2,c3);
        tb.append(row);
        let table=document.getElementById('tab');
        table.append(tb);
        btn.addEventListener('click',function(){
                delet(e,i);
                // window.location.reload();
        })
        
    })
    
}
    function delet(e,i){
       let condition= confirm("Do You Want to Delete this file");
       if(condition){
        var item=JSON.parse(localStorage.getItem('Todo'));
        var deletedData=item.splice(i,1);
        var delData=JSON.parse(localStorage.getItem('delData'))||[];
        delData.push(deletedData);
        localStorage.setItem('delData',JSON.stringify(delData));

        localStorage.setItem('Todo',JSON.stringify(item));
        window.location.reload();
       }
        
    }
}
createTable();
document.getElementById("undo").addEventListener('click',function(){
    let dData=JSON.parse(localStorage.getItem('delData'))||[];
    if(dData.length>0){
        coveredData=dData.pop();
        let todoData=JSON.parse(localStorage.getItem('Todo'))||[];
        todoData.push(coveredData[0]);
        localStorage.setItem('Todo',JSON.stringify(todoData));
        localStorage.setItem('delData',JSON.stringify(dData));
        console.log(coveredData)
        coveredData.forEach((e,i)=>{
         let row=document.createElement("tr");
    
        var c1=document.createElement('td');
        c1.innerText=e.task;
        
        var c2=document.createElement('td');
        c2.innerText=e.priority;
        var c3=document.createElement('td');
        var btn=document.createElement('button');
        btn.innerText="Delete";

        c3.append(btn);
        var tb=document.createElement('tbody');
        row.append(c1,c2,c3);
        tb.append(row);
        var table=document.getElementById('tab');
        table.append(tb);
        btn.addEventListener('click',function(){
                delet(e,i);
        })
            
        })
        window.location.reload();
       
    }

})

