import React from "react"
import Layout from "../components/layout"






class CombatNPC extends React.Component {   
   
    render() {
       return <div>
         <Layout>
           <div className="container">
             <div className="row">
               <div className="col-sm-12">

                 <form onSubmit={this.handleFormSubmit}>
                   <div className="radio">
                     <label>
                       <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
                       Option 1
                     </label>
                   </div>
                   <div className="radio">
                     <label>
                       <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                       Option 2
                     </label>
                   </div>
                   <div className="radio">
                     <label>
                       <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
                       Option 3
                     </label>
                   </div>
                   <button className="btn btn-default" type="submit">Save</button>
                 </form>

               </div>
             </div>
           </div>
         </Layout>
       </div>
    }
}

export default CombatNPC