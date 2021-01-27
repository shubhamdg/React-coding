import React from "react"
import  "./Person.css"

const App = () =>  < PersonList />
	

const PersonList = () =>{
	const people = [
	{
		img : 75 , name :"jishu" , job :"Front-end  developer "
	},

	{
		img : 76 , name :"peter" , job :"Tester "
	}
]
 
return (<section>
	<Person person ={people[0]} />
	<Person person ={people[1]}/>
	
</section>)
    
}

const Person = (props)=> {
	const {img,name,job} = props.person
	// const {children } = props ; 
    const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
    return <div className ="person">
    <img src ={url} alt = "" />
    <div>
    
    <h4>{name}</h4>
    <h4>{job}</h4>
    </div>
    </div>
}


export default App  ;  