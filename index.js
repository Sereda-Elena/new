const style = document.head.appendChild(document.createElement('style'))

const wrapper= document.body.appendChild(document.createElement('div'))
const div = document.createElement('div')
const p =document.createElement('p')
const button = document.createElement('button')

wrapper.appendChild(div)
div.appendChild(p)
wrapper.appendChild(button)
div.setAttribute('id', 'text')
div.setAttribute('class', "list")

p.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
button.innerText = `Open full description`

style.innerText = `
    div{ 
    width:800px; 
    margin: 0 auto;
    text-align: center;  
   }
      #text{
  width: 300px;
   border: 2px solid red;
  
  position: relative;
  background:pink;
}
.list{
    max-height: 150px;
  overflow: hidden;
}
 .list:after {
  content: "";
  position: absolute;
  height: 70px;
  width: 100%;
  bottom: 0;
  left: 0;
  background: linear-gradient(transparent, white);
}
button{
font-size:20px;
border: none;
cursor:pointer;
text-decoration:underline;
background:transparent;
}
`
button.onclick = function(event){
div.classList.toggle('list') 
button.innerText = button.innerText === `Open full description`? `Close `: `Open full description`

}
