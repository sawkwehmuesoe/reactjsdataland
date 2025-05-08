import React,{useState} from 'react'

const shortlables = ["Name","Gender","City"];
const longlables = ["Full Name","Choose Gender","Enter Your Hometown"];

const DivNine = ()=>{

    const [lableState,setLabelState] = useState(shortlables);

    const clickHandler = ()=>{

        setLabelState(lableState === shortlables ? longlables : shortlables);

    }

    const display = lableState.map((val,idx)=>(
        <div className='form-group' key={idx}>
            <label htmlFor={`info-${idx}`}>{val}</label>
            <br />
            <input type="text" name={`info-${idx}`} id={`info-${idx}`} className='form-controle' />
        </div>
    ))

    return(

        <section>
            <h2>Register Form</h2>

            <form>
                {display}
            </form>
            <br/>
            <button type='button' onClick={clickHandler}>Show More</button>
        </section>

    )

}

export default DivNine;

// import React from 'react'

// const shortlabels = ["Name","Gender","City"];
// const longlabels = ["Full Name","Choose Gender","Enter Your Hometown"];

// class DivNine extends React.Component{

//     constructor(){

//         super();

//         this.state = {
//             labelState:shortlabels
//         }

//     }

//     clickHandler = ()=>{

//         this.setState({
//             labelState: this.state.labelState === shortlabels ? longlabels : shortlabels
//         });

//     }
   
//     render(){

//         const display = this.state.labelState.map((val,idx)=>(
//             <div className='form-group' key={idx}>
//                 <label htmlFor={`info-${idx}`}>{val}</label>
//                 <br />
//                 <input type="text" name={`info-${idx}`} id={`info-${idx}`} className='form-controle' />
//             </div>
//         ));


//         return(

//             <section>
//                 <h2>Register Form</h2>

//                 <form>
//                     {display}
//                 </form>
//                 <br/>
//                 <button type='button' onClick={this.clickHandler}>{this.state.labelState === shortlabels ? 'Show More' : 'Hide More'}</button>
//             </section>

//         )

//     }


// }

// export default DivNine;