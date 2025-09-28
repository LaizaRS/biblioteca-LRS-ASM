import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();
export const useCarrinho = () => useContext(CarrinhoContext);

/**
 * Normaliza strings de preço para number.
 * Aceita "R$ 1.234,56", "12,34", "1234.56" e number.
 */
export const parsePreco = (value) => {
  if (typeof value === "number") return value;
  if (!value && value !== 0) return 0;

  const str = String(value).trim();
  const onlyNums = str.replace(/[^\d.,-]/g, "");

  if (onlyNums.includes(".") && onlyNums.includes(",")) {
    const removedDots = onlyNums.replace(/\./g, "");
    const withPoint = removedDots.replace(",", ".");
    return parseFloat(withPoint) || 0;
  }

  if (onlyNums.includes(",")) {
    return parseFloat(onlyNums.replace(",", ".")) || 0;
  }

  return parseFloat(onlyNums) || 0;
};

export const CarrinhoProvider = ({ children }) => {
  const [itemCarrinho, setItemCarrinho] = useState([]);

  const toggleItemCarrinho = (livro) => {
    setItemCarrinho((prev) => {
      const existe = prev.some((i) => i.id === livro.id);
      if (existe) {
        // remove
        return prev.filter((i) => i.id !== livro.id);
      } else {
        // adiciona com precoNumber e quantidade padrão = 1
        const livroComPrecoNum = {
          ...livro,
          precoNumber: parsePreco(livro.preco),
          quantidade: 1,
        };
        return [...prev, livroComPrecoNum];
      }
    });
  };

  const incrementarQuantidade = (id) => {
    setItemCarrinho((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: (item.quantidade || 1) + 1 } : item
      )
    );
  };

  const decrementarQuantidade = (id) => {
    setItemCarrinho((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) return item;
        const q = item.quantidade || 1;
        if (q <= 1) return []; // remove do carrinho
        return { ...item, quantidade: q - 1 };
      })
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{
        itemCarrinho,
        toggleItemCarrinho,
        incrementarQuantidade,
        decrementarQuantidade,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
