
import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [money, setMoney] = useState(100);

  // Fetch sushi data once when the app loads
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        // Add an "eaten" flag to each sushi, initially false
        const updated = data.map((sushi) => ({ ...sushi, eaten: false }));
        setSushis(updated);
      });
  }, []);

  // Handler when a sushi is "eaten" (clicked)
  const handleEatSushi = (sushiId) => {
    const sushi = sushis.find((s) => s.id === sushiId);
    if (sushi.eaten) return;
    if (money >= sushi.price) {
      const updatedSushis = sushis.map((s) =>
        s.id === sushiId ? { ...s, eaten: true } : s
      );
      setSushis(updatedSushis);
      setMoney(money - sushi.price);
    } else {
      alert("Not enough money to eat this sushi!");
    }
  };

  // Handler for showing the next 4 sushi
  const handleMoreSushi = () => {
    setStartIndex(startIndex + 4);
  };

  // Only show a subset of sushis (4 at a time)
  const displayedSushis = sushis.slice(startIndex, startIndex + 4);

  // Get the array of eaten sushi to display empty plates
  const plates = sushis.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer
        sushis={displayedSushis}
        onEatSushi={handleEatSushi}
        onMoreSushi={handleMoreSushi}
      />
      <Table money={money} plates={plates} />
    </div>
  );
}

export default App;
