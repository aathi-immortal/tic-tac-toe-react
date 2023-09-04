import { Component, useEffect, useState } from "react";
import "./App.css";

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";

import { Board } from "./New-day-1/Board";


function App()
{
    const [board,setBoard] = useState(Array(9).fill(null));
    const [chance,setChance]   = useState('x');
    const [emptyBlock,setEmptyBlock] = useState(9);
    const WIN_CONDITIONS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  
    
    // function checkWinner(position, player) {
    //   const size = Math.sqrt(board.length);
    //   const directions = [
    //     [0, 1],   // Right
    //     [1, 0],   // Down
    //     [1, 1],   // Diagonal right-down
    //     [1, -1],  // Diagonal left-down
    //   ];
    
    //   for (const [dr, dc] of directions) {
    //     let left = position;
    //     let right = position;
    //     let count = 1; // Count the current move
    
    //     while (count < 3) {
    //       left -= dr;
    //       right += dr;
    //       if (left >= 0 && left < size * size && board[left] === player &&
    //           right >= 0 && right < size * size && board[right] === player) {
    //         return true; // Player has won
    //       }
    //       count++;
    //     }
    //   }
    
    //   return false; // No winner
    // }
    
    
    
    
    // Example usage:
    
    
    
    const checkWinner = () => {
      
      for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const [x, y, z] = WIN_CONDITIONS[i];
  
        // Iterate through win conditions and check if either player satisfies them
        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
          // setGameOver(true);
          
          return "winner is :" + board[x];
        }
        
      }
      if(emptyBlock == 0)
      {
        return "match is draw ";
      }
      return null;
      
      
    } 
    
    

    function isGameOver(index,player)
    {
        
      let status = checkWinner();
      if(status != null)
      {
        setTimeout(()=>
        {
          alert(status);
          resetBoard();
        },100)
      } 
    function resetBoard()
    {
        setBoard(Array(9).fill(null));      
    }

    }

    // function displayWinner(winner)
    // {
    //   if(winner)
    //   {
    //     console.log("win");
    //   }
    // }
    function swapChance()
    {
      setChance(chance == "x" ? "o" :"x")
    }

    function handleButtonClick(butonIndex)
    {
      
      let newBoard = board.map((value,index)=>
      {
          // return value = (index == butonIndex && value == null) ? chance:value;
          if(index == butonIndex && value == null)
          {
            setEmptyBlock(emptyBlock - 1);
            return chance;
          }
          return value;
      });
      setBoard(newBoard);
      
    }
    useEffect(()=>
    { 
      
       
        
      swapChance();
      
      console.log(emptyBlock);
      isGameOver();
    },[board]);
  return (
    <div className="first-page-body">
      <div className="board-block">
          
          
            <Board board ={board} onClick={handleButtonClick}/>
      </div>
        
    </div>

  );
}

export default App;
