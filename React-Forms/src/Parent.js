import React from "react"

import Child from "./Child"

class Parent extends React.Component {

   parentfunction = (data_from_child) => {
       console.log(data_from_child)
   }
    render (){
        return (
            <div>
            <Child newcallbackforparent = {this.parentfunction.bind(this)}></Child>
</div>
        )
    }
}

export default Parent ;