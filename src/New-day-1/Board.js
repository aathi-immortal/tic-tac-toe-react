import { Box } from "./Box"
import "./Board.css"
export function Board({board,onClick})
{
    return(
        <div className="board">
            {board.map((value,index)=>
            {
                return (
                    <Box value={value} onClick={()=> onClick(index)}/>
                )
            })}
            
        </div>
    )
}