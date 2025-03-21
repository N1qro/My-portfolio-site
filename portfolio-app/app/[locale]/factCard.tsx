"use client";

import { useState } from "react";
import facts from "@/lib/facts";
import styles from "@/styles/factCard.module.css";
import { Button } from "@/components/button";
import saveFact from "@/actions/saveFact";
import { useTranslations } from "next-intl";

interface FactProps {
  savedFact: number;
}

export default function FactCard({ savedFact }: FactProps) {
  const t = useTranslations()

  const [currentFact, setCurrentFact] = useState<number>(() => {
    return Math.max(0, Math.min(facts.length - 1, savedFact));
  });

  function incrementFactBy(amount: number) {
    let newIndex;
    if (currentFact === facts.length - 1 && amount > 0) {
      newIndex = 0;
    } else if (currentFact === 0 && amount < 0) {
      newIndex = facts.length - 1;
    } else {
      newIndex = currentFact + amount;
    }

    setCurrentFact(newIndex);
    saveFact(newIndex);
  }

  return (
    <div className={styles.card_wrapper}>
      <h3 className="text-center">
        {t("fact_card.fact_about_me")} {currentFact + 1}/{facts.length}
      </h3>
      <div className={styles.card}>
        <Button onClick={() => incrementFactBy(-1)}>{"<"}</Button>
        <p className={styles.fact_text}>{facts[currentFact]}</p>
        <Button onClick={() => incrementFactBy(1)}>{">"}</Button>
      </div>
    </div>
  );
}
