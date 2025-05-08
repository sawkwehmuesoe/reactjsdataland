// import React, { Fragment, useEffect, useState } from "react"

// const GridTen =(props)=>{

//     const [contact,setContact] = useState(props.data || []);

//     useEffect(()=>{
//         setContact(props.data || [])
//     },[props.data])

//     function addnewperson(newcontact){
//         setContact([...contact,newcontact])
//     }

//     return(
//         <Fragment>
//             <AddForm addnewfun = {addnewperson} />
//             <ContactList data={contact} />
//         </Fragment>
//     )

// }

// function AddForm(props){

//     const[person,setPerson] = useState("");

//     function changeHandler(e){
//         // const value = e.target.value;

//         setPerson(e.target.value);
//     }

//     function submitHandler(e){
//         e.preventDefault();

//         if(person.trim()){
//             props.addnewfun(person);
//             setPerson('');    
//         }

//     }

//     return(
//         <form onSubmit={submitHandler}>
//             <input type="text" placeholder="Add New Contact" value={person} onChange={changeHandler} />
//             <button type="submit">Add</button>
//         </form>
//     )
// }

// function ContactList(props){

//     let peoples = props.data;

//     const listitems = peoples.map((people,idx)=>
//         <li key={idx}>{++idx} {people}</li>
//     )

//     return(
//         <ul>
//             {listitems}
//         </ul>
//     )

// }

// export default GridTen


// import React, { Component ,Fragment } from "react"

// class GridTen extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             contact: props.data || [],
//             person: ""
//         };

//         this.addnewperson = this.addnewperson.bind(this);
//         this.changeHandler = this.changeHandler.bind(this);
//         this.submitHandler = this.submitHandler.bind(this)
//     }

//     addnewperson(newcontact) {
//         this.setState((prevState) => ({
//             contact: [...prevState.contact, newcontact]
//         }))
//     }

//     changeHandler(e) {
//         this.setState({
//             person: e.target.value
//         })
//     }

//     submitHandler(e) {

//         const { person } = this.state;

//         e.preventDefault();

//         if (person.trim()) {
//             this.addnewperson(person);
//             this.setState({ person: "" })

//         }
//     }

//     render() {

//         const {contact,person} = this.state;

//         return (
//             <Fragment>
//                 <form onSubmit={this.submitHandler}>
//                     <input type="text" placeholder="Add New Contact" value={person} onChange={this.changeHandler} />
//                     <button type="submit">Add</button>
//                 </form>
//                 <ul>
//                     {contact.map((person,idx)=>(
//                         <li key={idx}>{idx+1} {person}</li>
//                     ))}
//                 </ul>
//             </Fragment>
//         )

//     }
// }

// export default GridTen


import React, { Component ,Fragment } from "react"

class GridTen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contact: props.data || [],
            person: ""
        };

        this.addnewperson = this.addnewperson.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this)
    }

    addnewperson(newcontact) {
        this.setState((prevState) => ({
            contact: [...prevState.contact, newcontact]
        }))
    }

    changeHandler(e) {
        this.setState({
            person: e.target.value
        })
    }

    submitHandler(e) {

        const { person } = this.state;

        e.preventDefault();

        if (person.trim()) {
            this.addnewperson(person);
            this.setState({ person: "" })

        }
    }

    render() {

        const {contact,person} = this.state;

        return (
            <Fragment>
                <AddForm person={person} changeHandler={this.changeHandler} submitHandler={this.submitHandler} />
                <ContactList peoples = {contact} />
            </Fragment>
        )

    }
}

class AddForm extends Component{

    render(){
        return(
            <form onSubmit={this.props.submitHandler}>
                <input type="text" placeholder="Add New Contact" value={this.props.person} onChange={this.props.changeHandler} />
                <button type="submit">Add</button>
            </form>
        )
    }

}

class ContactList extends Component{

    render(){
        const listitems = this.props.peoples.map((people,idx)=>
            <li key={idx}>{++idx} {people}</li>
        )
        return <ul>{listitems}</ul>
    }

}


export default GridTen