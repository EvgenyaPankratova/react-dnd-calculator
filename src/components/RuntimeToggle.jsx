import Runtime from "./Runtime";
import Constructor from "./Constructor";

function RuntimeToggle(){
    return <div className="runtime-toggle">
        
        <Runtime/>
        <Constructor/>
    </div>
}

export default RuntimeToggle;