



async  function searchuser(){
        try {

            var txtsearch=document.getElementById('txtsearch').value;
            if(txtsearch.length==0){
                return;
            }
            const itemslist = await 
            fetch("https://api.github.com/search/users?q="+txtsearch+"")
            .then((res) => res.json());
            console.log(itemslist);

            $("#homeheader").hide();
            
            let table = document.getElementById("tblResult");
            // itemslist.forEach((itemslist, id) => {
          
            // });





            var i;
            for (i = 0; i < itemslist.items.length; i++) {
                let tr = document.createElement("tr");
                var td=document.createElement('td');
                td.setAttribute("style", "margin:100px;height:100px;");
                
       
          
        //         tr.cells[0].innerHTML = `${
        //             itemslist.items[i].id
        //   }`;
        //         tr.cells[1].innerHTML = `${
        //             itemslist.items[i].login
        //   }`;
        var x = document.createElement("span");
       
        x.setAttribute("id", "result");
        x.setAttribute("style", "color:lightblue ;font-size: 15px");
        x.innerHTML=itemslist.items[i].login;
  






        // var x1=document.createElement("span");
        // x1.setAttribute("style","color: gray");
        // x1.innerHTML="Content of the Repository";




        var x2=document.createElement("span");

        x2.setAttribute("class","fa fa-star-o fa-1x");
        x2.innerHTML="C123Updated on 6 Mar 2015";
        var brtag = document.createElement("br");
        td.append(x);
        td.append(brtag);
        // td.append(x1);
        td.append(brtag);
        td.append(x2);
        tr.append(td);
        
    //     <td><span style="color:lightblue;font-size: 15px;">Username</span><br>
    //     <span style="color: gray;">Content of the Repository</span><br>
    // <span><i class="fa fa-star-o fa-1x">123</i>Updated on 6 Mar 2015</span></td>
    // </tr>
          
                table.appendChild(tr);
            }






          } catch (error) {
            console.log(error);
          }
    }
