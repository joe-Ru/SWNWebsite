import React from "react"
import Layout from "../components/layout"


class CombatNPC extends React.Component {
    constructor() {
        super()
        this.state = {
            output: false,
        }
        this.showMenu = this.showMenu.bind(this);
    }

    
    render() {
       return <div>
            <Layout>
            <button>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> Menu item 1 </button>
                <button> Menu item 2 </button>
                <button> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }>
            </Layout>
        </div>
    }
}

export default CombatNPC