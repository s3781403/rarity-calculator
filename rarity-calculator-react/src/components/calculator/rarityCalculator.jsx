// Word Length and Commonness Rarity Scores
const lengthScores = {
    1: 90,
    2: 80,
    3: 70,
    4: 60,
    5: 50,
    6: 40,
    7: 30,
    8: 20,
    9: 10,
    10: 5,
    // This can be improved by making this dynamic (it would be a sliding scale, words on the far left or right are more rare than words in the middle)
  };
  
  // Letter Rarity Scores
  const letterScores = {
    a: 10,
    b: 20,
    c: 30,
    // Could be calculated by getting a dictionary dataset in (python maybe?) 
    // then trawling the data and generating a count for the words and how rare the letter is in the total
  };
  
  // Individual Word Values
  const wordValues = {
    apple: 50,
    orange: 60,
    banana: 70,
    // Word value would be based off some combination of the letter scores and the length scores 
    // And could possibly also be based off the rarity of the word in existing sets of data (like books, etc)
    //Would be a modified version of the letter score calculation
  };
  
  function calculateRarity(word) {
    let rarity = 0;
    
    // Word Length and Commonness Score
    const wordLength = word.length;
    rarity += lengthScores[wordLength] || 0;
  
    // Letter Rarity Score
    for (const letter of word.toLowerCase()) {
      rarity += letterScores[letter] || 0;
    }
  
    // Individual Word Value
    rarity += wordValues[word] || 0;
  
    // Capital Letter Bonus
    if (/[A-Z]/.test(word)) {
      rarity += 5;
    }
  
    return rarity;
  }

function calculateCombinedRarity(word1, word2, word3) {
  const rarity1 = calculateRarity(word1);
  const rarity2 = calculateRarity(word2);
  const rarity3 = calculateRarity(word3);
  const totalRarity = rarity1 + rarity2 + rarity3;
  const averageRarity = totalRarity / 3;
  return averageRarity;
}

// Example usage
const generatedWord1 = "apple";
const generatedWord2 = "James";
const generatedWord3 = "lake";
const combinedRarityScore = calculateCombinedRarity(generatedWord1, generatedWord2, generatedWord3);
console.log(`Combined Rarity Score of ${generatedWord1}, ${generatedWord2}, ${generatedWord3}: ${combinedRarityScore}`);