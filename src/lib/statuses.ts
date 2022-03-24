import { WORDS } from '../constants/wordlist'
import { solution, solutionIndex, unicodeSplit } from './words'

export type CharStatus = 'absent' | 'present' | 'correct'

export const getSyllables = () => {
	// Add solution at the start
	var syllables = WORDS[solutionIndex % WORDS.length].toUpperCase().split(' ');
	// Add more words, remove duplicates, until the keyboard is full.
	while(syllables.length < 21) {
		syllables = syllables.concat(WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase().split(' '));
		// Remove duplicates
		syllables = syllables.filter((value, index) => syllables.indexOf(value) === index);
	}

	// Sort into alphabetical order
	syllables = syllables.sort((a,b) => a < b ? -1 : a > b ? 1 : 0)
	console.log("ASDF: " + syllables);

	return syllables;
}

export const getStatuses = (
  guesses: string[]
): { [key: string]: CharStatus } => {
  const charObj: { [key: string]: CharStatus } = {}
  const splitSolution = WORDS[solutionIndex % WORDS.length].toUpperCase().split(' ');

  guesses.forEach((word) => {
    word.toUpperCase().split(' ').forEach((syllable, i) => {
      if (!splitSolution.includes(syllable)) {
        // make status absent
        return (charObj[syllable] = 'absent')
      }

      if (syllable === splitSolution[i]) {
        //make status correct
        return (charObj[syllable] = 'correct')
      }

      if (charObj[syllable] !== 'correct') {
        //make status present
        return (charObj[syllable] = 'present')
      }
    })
  })
  return charObj
}

export const getGuessStatuses = (guess: string): CharStatus[] => {
	const splitSolution = WORDS[solutionIndex % WORDS.length].toLowerCase().split(' ');
	const splitGuess = guess.toLowerCase().split(' ');

  const solutionCharsTaken = splitSolution.map((_) => false)

  const statuses: CharStatus[] = Array.from(Array(guess.length))

  // handle all correct cases first
  splitGuess.forEach((syllable, i) => {
    if (syllable === splitSolution[i]) {
      statuses[i] = 'correct'
      solutionCharsTaken[i] = true
      return
    }
  })

  splitGuess.forEach((letter, i) => {
    if (statuses[i]) return

    if (!splitSolution.includes(letter)) {
      // handles the absent case
      statuses[i] = 'absent'
      return
    }

    // now we are left with "present"s
    const indexOfPresentChar = splitSolution.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'present'
      solutionCharsTaken[indexOfPresentChar] = true
      return
    } else {
      statuses[i] = 'absent'
      return
    }
  })

  return statuses
}
