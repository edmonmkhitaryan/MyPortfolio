document.querySelector("#push").onclick = function(){
    if(document.querySelector("#input input").value.length == 0){
        alert("Enter text!")
    }else{
        document.querySelector("#task").innerHTML += 
        `
        <div class="tasks">
          <span id="taskname">
            ${document.querySelector(
                "#input input"
            ).value}
          </span>
          <button class="delet">
          <i class="fa fa-eraser" aria-hidden="true"></i>
        </button>
        </div>
        `
        var deletetask = document.querySelectorAll(".delet");
        for(var i = 0;i<deletetask.length;i++){
            deletetask[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var tasks = document.querySelectorAll(".tasks");
        for(var i = 0;i<tasks.length;i++){
            tasks[i].onclick = function(){
                this.classList.toggle("git")
            }
        }
        document.querySelector("#input input").value = "";
    }
}