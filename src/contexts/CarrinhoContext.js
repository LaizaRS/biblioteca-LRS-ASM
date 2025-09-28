import { createContext, useContext, useState } from "react";

const CarrinhoContext = createContext();
export const useCarrinho = () => useContext(CarrinhoContext);

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
        // remove do carrinho
        return prev.filter((i) => i.id !== livro.id);
      } else {
        // não adiciona se não tem estoque
        if (livro.estoque === 0) return prev;

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
      prev.map((item) => {
        if (item.id !== id) return item;

        const q = item.quantidade || 1;
        // não deixar passar do estoque
        if (q >= item.estoque) return item;

        return { ...item, quantidade: q + 1 };
      })
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
