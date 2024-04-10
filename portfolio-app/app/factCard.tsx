"use client";

import { useState } from "react";
import facts from "@/lib/facts";
import styles from "@/styles/factCard.module.css";
import { Button } from "@/components/button";

export default function FactCard() {
  const [currentFact, setCurrentFact] = useState<number>(() => {
    // Need to search stackoverflow for this type of error.
    // Need to get data from localstorage before rendering.
    // If i fetch it like this:
    // if (typeof localStorage === "undefined") {
    //   return 0;
    // }
    // It gives hydration error because the output is different
    // from the server render :/
    return parseInt(localStorage.getItem("fact-index") || "0");
  });

  function incrementFactBy(amount: number) {
    setCurrentFact((prev) => {
      let newIndex;
      if (prev === facts.length - 1 && amount > 0) {
        newIndex = 0;
      } else if (prev === 0 && amount < 0) {
        newIndex = facts.length - 1;
      } else {
        newIndex = prev + amount;
      }

      localStorage.setItem("fact-index", newIndex.toString());
      return newIndex;
    });
  }

  return (
    <div className={styles.card_wrapper}>
      <h3 className="text-center">
        Факт обо мне №{currentFact + 1}/{facts.length}
      </h3>
      <div className={styles.card}>
        <Button onClick={() => incrementFactBy(-1)}>{"<"}</Button>
        <p className={styles.fact_text}>{facts[currentFact]}</p>
        <Button onClick={() => incrementFactBy(1)}>{">"}</Button>
      </div>
    </div>
  );
}
