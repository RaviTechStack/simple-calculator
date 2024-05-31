let output = ""
let btns = document.querySelectorAll('.btn');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == "="){
            try{output = eval(output);
            let show = document.querySelector("input").value = output;}
            catch(e){
                output= "error()"
            }
        }
        else if(e.target.innerHTML == "Clear"){
            output = ""
            document.querySelector("input").value = output;
        }
        
        else{
        output = output + e.target.innerHTML;
        let show = document.querySelector("input").value = output;}
    })
})