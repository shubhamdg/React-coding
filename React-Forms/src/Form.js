import React ,{Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props)
            this.state ={
                username : "",
                comments : "",
                topic : "React"
            }
        }
        Handleusername =(e)=> {
            this.setState({
                  username : e.target.value 
            })
        }
        handleCommentsChange = event => {
            this.setState({
                comments: event.target.value
            })
        }
        handleSubmit = e => {
            console.log(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
            e.preventDefault()
        }
        render () {
            return(
                <form  onSubmit ={this.handleSubmit}> 
                    <div>
                        <label>Username</label>
                        <input type ="text" value ={this.state.username} onChange ={this.Handleusername}/>
                    </div>
                    <div>
					<label>Comments</label>
					<textarea
						value={this.state.comments}
						onChange={this.handleCommentsChange}
					/>
				</div>
                    <div>
                        <label>Topic</label>
                        <select value ={this.state.topic} onChange ={this.HandleTopic} >
                        <option value="react">Reat</option>
                        <option value="Angula">Angular</option>
                        <option value="vue">vue</option>

                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )
        }
    }
export default Form ; 