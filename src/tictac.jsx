import React, { useState } from "react";

export default function TicTacToe() {
  // Inicializa o tabuleiro com os números de 0 a 8
  const [board, setBoard] = useState(Array.from({ length: 9 }, (_, i) => i));

  const handleClick = (index) => {
    // Se já tiver sido clicado (ou seja, não for um número), não faz nada
    if (board[index] === "X") return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400 p-4">
      <h1 className="text-2xl font-bold mb-6">Próximo jogador: X</h1>
      <div className="grid grid-cols-3 gap-4">
        {board.map((cell, index) => (
          <button
            key={index}
            className="w-20 h-20 text-xl font-bold bg-white border border-gray-400 rounded shadow"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
}