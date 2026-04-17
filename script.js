/* LOGIN */

function login(){

let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin" && p==="1234"){
window.location="dashboard.html";
}
else{
alert("Invalid Login");
}
}

function logout(){
window.location="login.html";
}

/* LEAD STORAGE */

let leads =
JSON.parse(localStorage.getItem("leads")) || [];

/* ADD LEAD */

function addLead(){

let name=value("name");
let email=value("email");
let source=value("source");
let notes=value("notes");
let status=value("status");

if(name==="") return alert("Enter name");

leads.push({name,email,source,notes,status});

save();
display();
}

/* GET VALUE */

function value(id){
return document.getElementById(id).value;
}

/* SAVE */

function save(){
localStorage.setItem("leads",JSON.stringify(leads));
}

/* DISPLAY */

function display(){

let table=document.getElementById("leadTable");

if(!table) return;

table.innerHTML="";

leads.forEach((l,i)=>{

table.innerHTML+=`
<tr>
<td>${l.name}</td>
<td>${l.email}</td>
<td>${l.source}</td>
<td>${l.status}</td>
<td>${l.notes}</td>

<td>
<button class="delete"
onclick="removeLead(${i})">
Delete
</button>
</td>

</tr>
`;

});

document.getElementById("count").innerText=leads.length;
}

/* DELETE */

function removeLead(i){
leads.splice(i,1);
save();
display();
}

/* SEARCH */

function searchLead(){

let value=
document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#leadTable tr");

rows.forEach(r=>{

r.style.display=
r.innerText.toLowerCase().includes(value)
? "" : "none";

});

}

display();